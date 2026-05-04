// ============================================================
// Jason's Hardware Notes — Newsletter Worker
// Hosted at: insights.jasonlin.tech
// ============================================================

const NEWSLETTER_NAME = "Jason's Hardware Notes";
const FROM_EMAIL = "Jason <hello@insights.jasonlin.tech>"; // verified domain in Resend

// Site URL — auto-derived from current request, override with env.SITE_URL once on custom domain
const FALLBACK_SITE_URL = "https://jasons-hardware-notes.992978142.workers.dev";
function getSiteUrl(request, env) {
  try {
    if (env && env.SITE_URL) return env.SITE_URL;
    if (request && request.url) {
      const u = new URL(request.url);
      if (u.origin && u.origin !== 'null' && u.origin !== 'undefined') return u.origin;
    }
  } catch (e) { console.error('getSiteUrl error:', e.message); }
  return FALLBACK_SITE_URL;
}

// ============================================================
// Router
// ============================================================
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    try {
      // CORS preflight
      if (method === 'OPTIONS') return cors(new Response(null, { status: 204 }));

      // === API ===
      if (pathname === '/api/subscribe' && method === 'POST') return cors(await handleSubscribe(request, env));
      if (pathname === '/api/confirm' && method === 'GET') return await handleConfirm(url, env, request);
      if (pathname === '/unsubscribe' && method === 'GET') return await handleUnsubscribe(url, env, request);
      if (pathname === '/api/send' && method === 'POST') return await handleSend(request, env);

      // === Pages ===
      if (pathname === '/') return await renderLanding(env);
      if (pathname === '/archive') return await renderArchive(env);
      if (pathname.startsWith('/issue/')) return await renderIssue(pathname.slice(7), env);
      if (pathname === '/confirmed') return htmlPage('订阅已确认', `<h1>订阅已确认 ✓</h1><p>下周一会收到第一期 Newsletter。</p><p><a href="/">返回首页</a></p>`);
      if (pathname === '/unsubscribed') return htmlPage('已退订', `<h1>已退订</h1><p>不会再给你发邮件了。如果改变主意,<a href="/">回首页</a>重新订阅即可。</p>`);

      return new Response('Not found', { status: 404 });
    } catch (err) {
      console.error('Worker error:', err);
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  }
};

// ============================================================
// Subscribe (double opt-in)
// ============================================================
async function handleSubscribe(request, env) {
  const body = await request.json().catch(() => ({}));
  const email = (body.email || '').trim().toLowerCase();
  const source = body.source || 'unknown';

  if (!isValidEmail(email)) return jsonResp({ error: 'Invalid email' }, 400);

  // Check if already subscribed
  const existingRaw = await env.SUBSCRIBERS.get(`sub:${email}`);
  if (existingRaw) {
    const existing = JSON.parse(existingRaw);
    if (existing.status === 'confirmed') return jsonResp({ ok: true, status: 'already_subscribed' });
    if (existing.status === 'pending') {
      // resend confirmation
      await sendConfirmEmail(email, existing.token, env);
      return jsonResp({ ok: true, status: 'confirmation_resent' });
    }
  }

  const token = randomToken();
  const data = {
    email,
    token,
    source,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  await env.SUBSCRIBERS.put(`sub:${email}`, JSON.stringify(data));
  await env.SUBSCRIBERS.put(`token:${token}`, email); // reverse index for confirm/unsubscribe

  await sendConfirmEmail(email, token, env, getSiteUrl(request, env));
  return jsonResp({ ok: true, status: 'pending_confirmation' });
}

async function sendConfirmEmail(email, token, env, siteUrl) {
  const link = `${siteUrl}/api/confirm?token=${token}`;
  const html = confirmEmailHtml(link);
  const text = `点击链接确认订阅 Jason's Hardware Notes:\n\n${link}\n\n如果不是你订阅的,忽略即可。`;
  await sendViaResend({
    from: FROM_EMAIL,
    to: email,
    subject: `确认订阅 ${NEWSLETTER_NAME}`,
    html,
    text,
  }, env);
}

async function handleConfirm(url, env, request) {
  const token = url.searchParams.get('token');
  if (!token) return new Response('Missing token', { status: 400 });

  const email = await env.SUBSCRIBERS.get(`token:${token}`);
  if (!email) return new Response('Invalid or expired token', { status: 400 });

  const dataRaw = await env.SUBSCRIBERS.get(`sub:${email}`);
  if (!dataRaw) return new Response('Subscriber not found', { status: 404 });

  const data = JSON.parse(dataRaw);
  data.status = 'confirmed';
  data.confirmedAt = new Date().toISOString();
  await env.SUBSCRIBERS.put(`sub:${email}`, JSON.stringify(data));

  return Response.redirect(`${getSiteUrl(request, env)}/confirmed`, 302);
}

async function handleUnsubscribe(url, env, request) {
  const token = url.searchParams.get('token');
  const siteUrl = getSiteUrl(request, env);
  if (!token) return new Response('Missing token', { status: 400 });

  const email = await env.SUBSCRIBERS.get(`token:${token}`);
  if (!email) return Response.redirect(`${siteUrl}/unsubscribed`, 302);

  await env.SUBSCRIBERS.delete(`sub:${email}`);
  await env.SUBSCRIBERS.delete(`token:${token}`);
  return Response.redirect(`${siteUrl}/unsubscribed`, 302);
}

// ============================================================
// Send issue (called by routine, auth'd)
// ============================================================
async function handleSend(request, env) {
  // Auth
  const auth = request.headers.get('Authorization') || '';
  if (auth !== `Bearer ${env.SEND_SECRET}`) return new Response('Unauthorized', { status: 401 });

  const issue = await request.json();
  // Validate minimum shape
  if (!issue.id || !issue.date || !issue.subject) return jsonResp({ error: 'Missing id/date/subject' }, 400);

  // Dedup: if this issue id was already broadcast, do nothing (idempotent for re-runs of the workflow)
  const existingRaw = await env.SUBSCRIBERS.get(`issue:${issue.id}`);
  if (existingRaw) {
    const existing = JSON.parse(existingRaw);
    if (existing.sentAt) {
      return jsonResp({ ok: true, status: 'already_sent', sentAt: existing.sentAt, issueId: issue.id });
    }
  }

  // Mark sentAt before sending (locks against concurrent triggers)
  issue.sentAt = new Date().toISOString();
  await env.SUBSCRIBERS.put(`issue:${issue.id}`, JSON.stringify(issue));

  // List confirmed subscribers
  const list = await listSubscribers(env, 'confirmed');

  const siteUrl = getSiteUrl(request, env);
  let sent = 0, failed = 0;
  for (const sub of list) {
    const html = renderIssueHtml(issue, sub.token, siteUrl);
    const text = renderIssueText(issue, sub.token, siteUrl);
    try {
      await sendViaResend({ from: FROM_EMAIL, to: sub.email, subject: issue.subject, html, text }, env);
      sent++;
    } catch (e) {
      console.error(`Failed to send to ${sub.email}:`, e.message);
      failed++;
    }
    // gentle pacing to stay within Resend rate limits
    await sleep(150);
  }

  return jsonResp({ ok: true, sent, failed, total: list.length });
}

async function listSubscribers(env, status) {
  const out = [];
  let cursor;
  do {
    const list = await env.SUBSCRIBERS.list({ prefix: 'sub:', cursor });
    for (const k of list.keys) {
      const raw = await env.SUBSCRIBERS.get(k.name);
      if (!raw) continue;
      const data = JSON.parse(raw);
      if (!status || data.status === status) out.push(data);
    }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);
  return out;
}

// ============================================================
// Resend
// ============================================================
async function sendViaResend({ from, to, subject, html, text }, env) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from, to, subject, html, text }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend ${res.status}: ${body}`);
  }
  return await res.json();
}

// ============================================================
// HTML Pages — landing + archive + issue + confirm email
// ============================================================
const SHARED_CSS = `
  body { margin:0; padding:0; background:#fff; color:#111; font-family:-apple-system,"PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; }
  .wrap { max-width:680px; margin:0 auto; padding:64px 24px 96px; }
  h1 { font-size:28px; font-weight:600; letter-spacing:-0.4px; margin:0 0 8px; }
  h2 { font-size:14px; color:#888; letter-spacing:0.6px; text-transform:uppercase; font-weight:500; margin:48px 0 16px; }
  p { font-size:15px; line-height:1.75; color:#333; margin:0 0 16px; }
  a { color:#000; text-decoration:underline; }
  a:hover { color:#666; }
  ul { padding-left:20px; line-height:1.75; }
  .meta { font-size:13px; color:#888; margin-top:4px; }
  .form { display:flex; gap:8px; max-width:440px; margin:24px 0 8px; }
  .form input { flex:1; padding:12px 14px; font-size:14px; border:1px solid #ccc; border-radius:6px; font-family:inherit; }
  .form input:focus { outline:none; border-color:#000; }
  .form button { padding:12px 20px; font-size:14px; background:#000; color:#fff; border:none; border-radius:6px; cursor:pointer; font-family:inherit; }
  .form button:hover { background:#333; }
  .form button:disabled { background:#aaa; cursor:not-allowed; }
  .hint { font-size:12px; color:#888; margin-top:6px; }
  .issue-list { list-style:none; padding:0; margin:0; }
  .issue-list li { padding:14px 0; border-bottom:1px solid #f0f0f0; }
  .issue-list a { color:#000; text-decoration:none; font-size:15px; }
  .issue-list .date { font-size:12px; color:#999; margin-right:12px; font-variant-numeric:tabular-nums; }
  .num-major { font-size:56px; color:#d8d8d8; font-weight:300; line-height:1; letter-spacing:-1.5px; font-variant-numeric:tabular-nums; }
  .quote { border-left:2px solid #d8d8d8; padding-left:16px; margin:18px 0; color:#555; font-size:14px; line-height:1.7; }
  .quote .label { font-size:11px; letter-spacing:0.6px; color:#999; text-transform:uppercase; margin-bottom:4px; }
  .footer { margin-top:96px; padding-top:24px; border-top:1px solid #eee; font-size:12px; color:#999; text-align:center; line-height:1.7; }
`;

function pageShell(title, bodyHtml, meta) {
  meta = meta || {};
  const desc = meta.description || "Jason's Hardware Notes — 每周更新中国 AI 硬件创业的人物、融资、非共识洞察。免费,可一键退订。";
  const url = meta.url || "https://insights.jasonlin.tech/";
  const ogTitle = meta.ogTitle || title;
  return `<!doctype html><html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${esc(title)}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${esc(desc)}">
<meta name="author" content="Jason Lin">
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${esc(url)}">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:site_name" content="Jason's Hardware Notes">
<meta property="og:locale" content="zh_CN">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogTitle)}">
<meta name="twitter:description" content="${esc(desc)}">
<script type="application/ld+json">${JSON.stringify({
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"Jason's Hardware Notes",
  "url":"https://insights.jasonlin.tech/",
  "description":desc,
  "inLanguage":"zh-CN",
  "author":{"@type":"Person","name":"Jason Lin","url":"https://jasonlin.tech"}
})}</script>
<script defer src="https://cloud.umami.is/script.js" data-website-id="d325eb73-0d8f-4529-aa76-f32ebfd92226"></script>
<style>${SHARED_CSS}</style>
</head>
<body><div class="wrap">${bodyHtml}</div></body>
</html>`;
}

function htmlPage(title, body) {
  return new Response(pageShell(title, body), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

async function renderLanding(env) {
  const body = `
    <h1>${NEWSLETTER_NAME}</h1>
    <p class="meta">每周更新，中国 AI 硬件创业的人物 / 融资 / 非共识洞察</p>

    <form class="form" id="subscribe-form" action="/api/subscribe" method="post">
      <input type="email" name="email" required placeholder="your@email.com">
      <button type="submit" id="subscribe-btn">订阅</button>
    </form>
    <div class="hint" id="subscribe-hint">免费，可一键退订</div>

    <h2>关于</h2>
    <p>这是 <a href="https://jasonlin.tech">Jason</a> 写的中国 AI 硬件创业周报。每周一汇总人物变动、融资动态、3 条非共识趋势。基于 <a href="https://hardware.jasonlin.tech">硬件创业图谱</a> 持续追踪 100+ 创始人 / 公司。</p>

    <div class="footer">
      ${NEWSLETTER_NAME} &middot; <a href="https://hardware.jasonlin.tech">hardware</a> &middot; <a href="https://investor.jasonlin.tech">investor</a> &middot; <a href="https://ai.jasonlin.tech">ai</a>
    </div>

    <script>
    document.getElementById('subscribe-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('subscribe-btn');
      const hint = document.getElementById('subscribe-hint');
      const email = e.target.email.value.trim();
      btn.disabled = true; btn.textContent = '提交中...';
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({ email, source: 'landing' }),
        });
        const data = await res.json();
        if (data.ok) {
          hint.textContent = data.status === 'already_subscribed'
            ? '你已经订阅过了 ✓'
            : '已发送确认邮件,请查收。';
          hint.style.color = '#0a0';
          btn.textContent = '已发送';
        } else {
          hint.textContent = data.error || '提交失败';
          hint.style.color = '#a00';
          btn.disabled = false; btn.textContent = '订阅';
        }
      } catch (err) {
        hint.textContent = '网络错误,请重试';
        hint.style.color = '#a00';
        btn.disabled = false; btn.textContent = '订阅';
      }
    });
    </script>
  `;
  return htmlPage(NEWSLETTER_NAME, body);
}

async function renderArchive(env) {
  const issues = await listIssues(env);
  const body = `
    <h1>归档</h1>
    <p class="meta">${NEWSLETTER_NAME} 历史所有期</p>
    <h2>${issues.length} 期</h2>
    <ul class="issue-list">
      ${issues.length
        ? issues.map(i => `<li><a href="/issue/${esc(i.id)}"><span class="date">${esc(i.date)}</span>${esc(i.subject || i.title || i.id)}</a></li>`).join('')
        : '<li style="color:#888;">还没有过期 — 第一期下周一上线。</li>'}
    </ul>
    <p style="margin-top:48px;"><a href="/">← 返回首页</a></p>
  `;
  return htmlPage(`归档 — ${NEWSLETTER_NAME}`, body);
}

async function renderIssue(id, env) {
  const raw = await env.SUBSCRIBERS.get(`issue:${id}`);
  if (!raw) return new Response('Issue not found', { status: 404 });
  const issue = JSON.parse(raw);

  const body = renderIssueBodyHtml(issue) + `
    <div class="footer">
      <a href="/">${NEWSLETTER_NAME}</a> &middot; <a href="/archive">归档</a>
    </div>
  `;
  return htmlPage(issue.subject || issue.title || `Issue #${issue.id}`, body);
}

async function listIssues(env, limit) {
  const out = [];
  let cursor;
  do {
    const list = await env.SUBSCRIBERS.list({ prefix: 'issue:', cursor });
    for (const k of list.keys) {
      const raw = await env.SUBSCRIBERS.get(k.name);
      if (raw) out.push(JSON.parse(raw));
    }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);
  out.sort((a, b) => b.date.localeCompare(a.date));
  return limit ? out.slice(0, limit) : out;
}

// ============================================================
// Issue rendering — same shape used in both /issue/X (web) and email
// ============================================================
function renderIssueBodyHtml(issue) {
  const tldr = (issue.tldr || []).map(t => `<li style="margin-bottom:6px;">${esc(t)}</li>`).join('');
  const sections = (issue.sections || []).map((s, i) => renderSectionHtml(s, i + 1)).join('');
  return `
    <h1>${esc(issue.title || NEWSLETTER_NAME)}</h1>
    <p class="meta">${esc(issue.date)}${issue.issueNumber ? ` &middot; Issue #${esc(issue.issueNumber)}` : ''}</p>
    ${tldr ? `<h2>这一周</h2><ul>${tldr}</ul>` : ''}
    ${sections}
  `;
}

function renderSectionHtml(section, idx) {
  const num = String(idx).padStart(2, '0');
  const items = (section.items || []).map((item, j) => renderItemHtml(item, num, j + 1, section.items.length)).join('');
  return `<div style="margin-top:64px;"><div class="num-major">${num}</div><div style="font-size:24px;font-weight:600;color:#111;margin-top:10px;letter-spacing:-0.4px;">${esc(section.title)}</div>${items}</div>`;
}

function renderItemHtml(item, sectionNum, idx, total) {
  const topGap = idx === 1 ? 24 : 48;
  const subnum = item.title ? `<div style="margin-top:${topGap}px;font-size:20px;font-weight:600;color:#111;letter-spacing:-0.3px;line-height:1.4;">${esc(item.title)}</div>` : '';
  const subtitle = item.subtitle ? `<div class="meta">${esc(item.subtitle)}</div>` : '';
  const body = item.body ? `<p style="margin-top:14px;">${escMultiline(item.body)}</p>` : '';
  const judgment = item.judgment ? `<div class="quote"><div class="label">我的判断</div>${escMultiline(item.judgment)}</div>` : '';
  const sources = (item.sources || []).map(s => `<a href="${esc(s.url)}">${esc(s.label)} [↗]</a>`).join(' &middot; ');
  const sourceLine = sources ? `<p style="font-size:13px;color:#888;margin-top:14px;">来源:${sources}</p>` : '';
  return `${subnum}${subtitle}${body}${judgment}${sourceLine}`;
}

function renderIssueHtml(issue, unsubscribeToken, siteUrl) {
  // Email-safe table-based version (same content, more compatible markup)
  // For MVP we use the page version — most modern clients render fine
  const inner = renderIssueBodyHtml(issue);
  const footer = `<div class="footer"><a href="${siteUrl}/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}">退订</a> &middot; <a href="${siteUrl}/archive">归档</a></div>`;
  return pageShell(issue.subject || issue.title || NEWSLETTER_NAME, inner + footer);
}

function renderIssueText(issue, unsubscribeToken, siteUrl) {
  const lines = [issue.title || NEWSLETTER_NAME, issue.date, ''];
  if (issue.tldr) {
    lines.push('这一周');
    issue.tldr.forEach(t => lines.push(`  · ${t}`));
    lines.push('');
  }
  (issue.sections || []).forEach((s, i) => {
    const num = String(i + 1).padStart(2, '0');
    lines.push('', `${num}  ${s.title}`, '');
    (s.items || []).forEach((item, j) => {
      const subnum = s.items.length > 1 ? `${num}.${j + 1}  ` : '';
      if (item.title) lines.push(`${subnum}${item.title}`);
      if (item.subtitle) lines.push(item.subtitle);
      if (item.body) lines.push('', item.body);
      if (item.judgment) lines.push('', `> 我的判断: ${item.judgment}`);
      if (item.sources && item.sources.length) lines.push('', `来源: ${item.sources.map(s => s.url).join(' · ')}`);
      lines.push('');
    });
  });
  lines.push('', '---', '退订: ' + siteUrl + '/unsubscribe?token=' + unsubscribeToken);
  return lines.join('\n');
}

function confirmEmailHtml(link) {
  return `<!doctype html><html><head><meta charset="UTF-8"></head><body style="font-family:-apple-system,sans-serif;max-width:560px;margin:48px auto;padding:0 24px;color:#111;line-height:1.7;">
    <h1 style="font-size:22px;font-weight:600;letter-spacing:-0.3px;">确认订阅 ${NEWSLETTER_NAME}</h1>
    <p style="font-size:15px;color:#333;">点下面这个链接确认订阅:</p>
    <p><a href="${link}" style="display:inline-block;padding:12px 24px;background:#000;color:#fff;text-decoration:none;border-radius:6px;font-size:14px;">确认订阅</a></p>
    <p style="font-size:13px;color:#888;margin-top:32px;">如果按钮不能点,把这个链接复制到浏览器:<br><span style="word-break:break-all;">${link}</span></p>
    <p style="font-size:13px;color:#888;margin-top:24px;">如果不是你订阅的,忽略这封邮件即可。</p>
  </body></html>`;
}

// ============================================================
// Helpers
// ============================================================
function isValidEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function randomToken() { return crypto.randomUUID().replace(/-/g, ''); }
function jsonResp(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
}
function cors(resp) {
  const headers = new Headers(resp.headers);
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return new Response(resp.body, { status: resp.status, headers });
}
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function escMultiline(s) {
  return esc(s).replace(/\n/g, '<br>');
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
