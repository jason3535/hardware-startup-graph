# Jason's Hardware Notes — Newsletter

Cloudflare Worker that handles subscriptions, double opt-in, and weekly broadcast for `insights.jasonlin.tech`.

## 架构

```
[3 个图谱页订阅 form]
       ↓ POST /api/subscribe
[Cloudflare Worker: insights.jasonlin.tech]
       ↓ store
[Cloudflare KV: SUBSCRIBERS]
       ↓ resend
[Resend API → subscriber inbox]

[Routine 周一跑完]
       ↓ POST /api/send (Bearer SEND_SECRET)
[Worker fans out to all confirmed subscribers]
```

## 一次性部署清单

### 1. 注册账号
- Cloudflare: https://dash.cloudflare.com/sign-up (免费)
- Resend: https://resend.com (免费 100 封/天,3000 封/月)

### 2. 配置 Resend 域名
1. 登录 Resend → Domains → Add Domain
2. 输入 `insights.jasonlin.tech`
3. Resend 会给你 4 条 DNS 记录(SPF / DKIM / DMARC + verify)
4. **去阿里云 DNS** 加这 4 条 TXT 记录
5. 等 5-10 分钟 Resend 显示 verified
6. 进 Resend → API Keys → Create API Key (full access),复制 key

### 3. 安装 wrangler + 登录 Cloudflare
```bash
npm install -g wrangler
cd newsletter
wrangler login   # 浏览器授权
```

### 4. 创建 KV namespace
```bash
wrangler kv:namespace create SUBSCRIBERS
```
会输出类似:
```
[[kv_namespaces]]
binding = "SUBSCRIBERS"
id = "abc123def456..."
```
**把 `id` 复制到 `wrangler.toml`,替换 `REPLACE_WITH_KV_ID_AFTER_CREATE`**

### 5. 配置 secrets
```bash
wrangler secret put RESEND_API_KEY
# 粘贴步骤 2 拿到的 Resend API key,回车

wrangler secret put SEND_SECRET
# 自己生成一个长随机串(用 openssl rand -hex 32),粘贴,回车
# 这个 secret 后面给 routine 用,让 routine 能 POST /api/send
```

### 6. 首次部署(用默认 workers.dev 域名测试)
```bash
wrangler deploy
```
会输出类似 `https://jasons-hardware-notes.jasonlin.workers.dev`

打开这个 URL,应该能看到 landing 页 + 订阅 form。

### 7. 配置自定义域名 insights.jasonlin.tech

**Option A — 推荐:把 jasonlin.tech 整体迁到 Cloudflare DNS(免费,后续操作都更方便)**

1. Cloudflare dashboard → Add a Site → 输入 `jasonlin.tech` → Free 计划
2. Cloudflare 会给你 2 个 nameserver(类似 `xxx.ns.cloudflare.com`)
3. 去阿里云 → 域名控制台 → 找到 jasonlin.tech → 修改 DNS 服务器,填 Cloudflare 给的 2 个
4. 等 1-24 小时全球 DNS 切换
5. 切完后,在 Cloudflare DNS 重新导入之前阿里云的所有记录(@、www、4 个子域 hardware/investor/ai/insights)
6. Workers → Custom Domains → 输入 `insights.jasonlin.tech` → 自动绑

**Option B — 不迁 DNS(更快但有限制)**

1. 在阿里云 DNS:`insights.jasonlin.tech` CNAME → `jasons-hardware-notes.jasonlin.workers.dev`
2. 在 Cloudflare Workers → Custom Domains → 添加 `insights.jasonlin.tech`(Cloudflare 会要求 DNS 在 CF 才能 verify,这一步可能失败)
3. 失败的话只能用 workers.dev URL,不能用 insights.jasonlin.tech

**强烈建议 Option A**,迁完之后所有子域都在 Cloudflare 管,后续要做 CDN / WAF / Web Analytics / Workers 都方便。

### 8. 验证
- 打开 `https://insights.jasonlin.tech`(或 workers.dev URL)
- 输入自己邮箱订阅 → 应收到确认邮件 → 点链接 → 跳到 `/confirmed`
- 在 KV 看一下:`wrangler kv:key list --binding=SUBSCRIBERS`,应该有 `sub:你的邮箱`

### 9. 把 SEND_SECRET 给 routine 用
告诉 Claude 你的 SEND_SECRET 值(或者更安全:在 Claude routine 配置里设环境变量),routine 周一跑完会自动 POST `/api/send`,触发广播。

## 日常维护

- 看订阅人数:`wrangler kv:key list --binding=SUBSCRIBERS --prefix=sub:`
- 看某条订阅:`wrangler kv:key get --binding=SUBSCRIBERS "sub:user@example.com"`
- 删除某订阅:`wrangler kv:key delete --binding=SUBSCRIBERS "sub:user@example.com"`
- 看 Worker 日志:`wrangler tail`
- 重新部署:`wrangler deploy`

## 文件说明

- `src/worker.js` — Worker 全部代码(单文件,~400 行)
- `wrangler.toml` — Cloudflare 配置
- `package.json` — 只有 wrangler 一个依赖
- `preview.html` — 邮件模板的浏览器预览(双击在浏览器打开看效果)
