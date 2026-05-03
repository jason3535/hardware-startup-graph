// ============================================================
// Insights Widget — shared component for 3 graph pages
// Hosted at: https://jason3535.github.io/hardware-startup-graph/insights-widget.js
// Loaded by: hardware-startup-graph, investor-graph, ai-scholar-graph
// ============================================================

const INSIGHTS_DATA = [
  {
    id: "plaud-no-vc",
    date: "2026-05-02",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: true,
    title: "PLAUD 拒绝 VC，自我造血做到 2.5 亿美金 ARR",
    body: "许高在 2024 年 11 月达到 1 亿美元年化营收时，主动拒绝所有投资机构接触。2025 年 ARR 升到 2.5 亿美元，约一半来自年订阅（$99-240/年）。利润率约 25%，堪比 iPhone。一级市场传闻估值 100 亿元但许高不接触。证明软件订阅 + 硬件入口的组合可以让 AI 硬件公司不依赖 VC 烧钱 — 跟具身赛道单轮 25 亿/4.55 亿美金的打法是反向逻辑。",
    persons: [{ id: "xugao", name: "许高 Nathan" }],
    sources: [
      { label: "Forbes 2025", url: "https://zhuanlan.zhihu.com/p/1951694921061868402" },
      { label: "雷峰网对话许高", url: "https://m.leiphone.com/category/weiwu/s6977hqWSGz1SaVU.html" }
    ]
  },
  {
    id: "tashi-455m-record",
    date: "2026-04-15",
    type: "funding",
    graphs: ["hardware"],
    pinned: true,
    title: "它石智航 4.55 亿美金 Pre-A，刷新中国具身单轮纪录",
    body: "前华为自驾 CTO 陈亦伦 + 大疆机器视觉总工组合操盘，董事长李震宇是百度智驾前总裁（造 Apollo + 萝卜快跑）。同期发布通用具身大模型 AWE3.0。这一轮把 3 月银河通用刚创下的 25 亿元单轮纪录直接抹掉，反映资本对'通用具身'路线的极端集中下注。",
    persons: [
      { id: "chenyilun", name: "陈亦伦" },
      { id: "wanghe", name: "王鹤（被超越方）" }
    ],
    sources: [{ label: "AING硬迹 4 月榜", url: "https://mp.weixin.qq.com/s/63WBbibN4EqBoncCQkT3UQ" }]
  },
  {
    id: "dreame-jiamei-shell",
    date: "2025-12-15",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: true,
    title: "追觅借壳嘉美包装，铺路批量上市的资本运作",
    body: "2025 年 12 月，俞浩斥资 22.82 亿元收购 A 股嘉美包装（002969.SZ）54.9% 股权成实控人。这不是简单的并购 — 是为追觅生态（主品牌 + 汽车 + 储能 + 大家电）从 2026 年底起在全球交易所批量上市做的预备。一只'壳'换 22 亿现金，这种打法在硬件创业者里极少见，值得想清楚为什么俞浩选这条路而不是直接 IPO。",
    persons: [{ id: "yuhao", name: "俞浩" }],
    sources: [{ label: "瑞财经报道", url: "https://m.rccaijing.com/news-7417090918459307270.html" }]
  },
  {
    id: "national-fund-embodied-ai",
    date: "2026-03-02",
    type: "non-consensus",
    graphs: ["hardware", "investor"],
    pinned: false,
    title: "国家大基金三期 + 中石化 + 中信入场具身智能",
    body: "2026.3 银河通用 25 亿元单轮融资由国家人工智能产业基金（大基金三期）、中石化、中信集团、中行、上汽、中芯聚源领投。这是大基金首次出手具身智能。同月雷鸟创新 10 亿元由中国移动 + 中信金石领投，联通跟投 — 国内运营商首次战略投智能眼镜。资本结构正在从 VC 转向'国家队 + 产业链'。",
    persons: [
      { id: "wanghe", name: "王鹤（银河通用）" },
      { id: "lihongwei", name: "李宏伟（雷鸟）" }
    ],
    sources: [{ label: "新浪财经", url: "https://finance.sina.com.cn/tech/roll/2026-03-02/doc-inhppxww8401531.shtml" }]
  },
  {
    id: "dji-second-diaspora",
    date: "2026-04-30",
    type: "relationship",
    graphs: ["hardware"],
    pinned: false,
    title: "大疆系新一茬不再做无人机",
    body: "2026.4 榜单里 5 家大疆出身的创业公司：璇玑动力（机器人本体平台）、Ludens AI（端侧 AI 陪伴，薛立君）、浪爪智能（桌面纺织，米哈游投）、UNICUS（LEGO Maker 积木大模型）、卢登斯（家庭陪伴）。一个共同特征 — 都不做无人机，而是把大疆的供应链/电机/视觉算法能力外溢到新场景。这是大疆系的'第二次扩散'。",
    persons: [
      { id: "wangtao", name: "汪滔（DJI 母节点）" },
      { id: "xuanji", name: "璇玑动力" },
      { id: "xuelijun", name: "薛立君（Ludens AI）" },
      { id: "langzhao", name: "浪爪智能" },
      { id: "unicus", name: "UNICUS" }
    ],
    sources: [{ label: "AING硬迹 4 月榜", url: "https://mp.weixin.qq.com/s/63WBbibN4EqBoncCQkT3UQ" }]
  },
  {
    id: "huawei-genius-cluster",
    date: "2026-04-30",
    type: "relationship",
    graphs: ["hardware"],
    pinned: false,
    title: "华为天才少年群在具身赛道集结",
    body: "稚晖君（智元，2022.12 离开）→ 欧拉万象（华为机器人天才少年，主导华为云 cloudRobo）→ 晨昏线（华为盘古班底）→ 它石智航（前华为自驾 CTO）。从 2022 年稚晖君开第一枪开始，华为系正在往具身机器人 / 世界模型 / 通用具身分化出 4 条线。如果把它石算上，这 4 家加起来融资额已超 50 亿元。",
    persons: [
      { id: "pengzhihui", name: "彭志辉（稚晖君）" },
      { id: "olwx", name: "欧拉万象" },
      { id: "chenhunxian", name: "晨昏线" },
      { id: "chenyilun", name: "陈亦伦（它石）" }
    ],
    sources: []
  },
  {
    id: "h1-2026-ipo-wave",
    date: "2026-04-01",
    type: "funding",
    graphs: ["hardware"],
    pinned: false,
    title: "5 家硬件公司 2026 上半年集中递表 IPO",
    body: "2026.3.20 宇树科技科创板受理（募 42 亿） → 2026.3.30 绿米 Aqara 港交所（华泰国际保荐） → 2026.4.1 XREAL 港交所（中金 + 花旗联保） → 追觅启动 IPO 目标估值 1500 亿（2025.9） → 正浩 EcoFlow 双线推进美股 + A 股（中金辅导）。AI 硬件第一波 IPO 退出窗口正在打开。",
    persons: [
      { id: "wangxingxing", name: "王兴兴（宇树）" },
      { id: "youyanji", name: "游延筠（绿米）" },
      { id: "xuchi", name: "徐驰（XREAL）" },
      { id: "yuhao", name: "俞浩（追觅）" },
      { id: "wanglei", name: "王雷（正浩）" }
    ],
    sources: []
  },
  {
    id: "xinghaitu-poke-split",
    date: "2026-04-30",
    type: "relationship",
    graphs: ["hardware"],
    pinned: false,
    title: "星海图分裂 — 联创/首席科学家拆出去做破壳",
    body: "高继扬（星海图创始人，前 Waymo/Momenta）留守做通用具身；前联合创始人 + 首席科学家 + 清华叉院助理教授拆出去 2026.4 新创破壳机器人，数千万美金天使轮，主打'帮家里主动干活的机器人'。这是具身创业从'通用本体'向'垂直家庭场景'的分裂样本 — 通用做不出 PMF，就回家庭场景做差异化。",
    persons: [
      { id: "gaojiyuang", name: "高继扬（星海图）" },
      { id: "poke", name: "破壳机器人" }
    ],
    sources: [{ label: "AING硬迹 4 月榜", url: "https://mp.weixin.qq.com/s/63WBbibN4EqBoncCQkT3UQ" }]
  }
];

// ============================================================

const FOOTER_LINKS = [
  { id: "investor",  label: "投资人图谱",   url: "https://jason3535.github.io/investor-graph/" },
  { id: "ai-scholar", label: "AI 图谱",       url: "https://jason3535.github.io/ai-scholar-graph/" },
  { id: "hardware",  label: "智能硬件图谱", url: "https://jason3535.github.io/hardware-startup-graph/" },
  { id: "personal",  label: "我的官网",     url: "https://jasonlin.tech" }
];

const TYPE_LABELS = {
  "non-consensus": "非共识",
  "relationship":  "关系",
  "resume":        "履历",
  "funding":       "投资动态"
};

const STYLES = `
#insights-section {
  position: relative;
  width: 100%;
  background: #0a0a0a;
  padding: 80px 24px 100px;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: rgba(255, 255, 255, 0.92);
  z-index: 5;
}
.insights-inner {
  max-width: 920px;
  margin: 0 auto;
}
.insights-eyebrow {
  font-size: 11px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 8px;
  font-weight: 500;
}
.insights-title {
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.96);
}
.insights-subtitle {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 36px;
  line-height: 1.5;
}
.insights-tabs {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  margin-bottom: 20px;
}
.insights-tab {
  padding: 8px 18px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.55);
  font-size: 13px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.insights-tab:hover { color: rgba(255, 255, 255, 0.85); }
.insights-tab.active {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}
.insights-tab .insights-tab-count {
  margin-left: 6px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
}
.insights-tab.active .insights-tab-count { color: rgba(255, 255, 255, 0.6); }
.insights-filter-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  min-height: 28px;
}
.insights-chip {
  padding: 4px 12px;
  background: transparent;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 980px;
  color: rgba(255, 255, 255, 0.55);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}
.insights-chip:hover {
  border-color: rgba(255, 255, 255, 0.35);
  color: rgba(255, 255, 255, 0.85);
}
.insights-chip.active {
  background: rgba(41, 151, 255, 0.16);
  border-color: rgba(41, 151, 255, 0.5);
  color: #6db9ff;
}
.insights-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.insight-card {
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 24px 28px;
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.insight-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-1px);
}
.insight-card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.insight-card-title {
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.2px;
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.96);
}
.insight-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.insight-type-badge {
  font-size: 10px;
  letter-spacing: 0.3px;
  padding: 2px 8px;
  border-radius: 980px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
}
.insight-type-badge.insight-type-non-consensus { background: rgba(255, 159, 10, 0.12); border-color: rgba(255, 159, 10, 0.4); color: #ffb443; }
.insight-type-badge.insight-type-relationship  { background: rgba(94, 158, 255, 0.12); border-color: rgba(94, 158, 255, 0.4); color: #8fb6ff; }
.insight-type-badge.insight-type-resume        { background: rgba(191, 90, 242, 0.12); border-color: rgba(191, 90, 242, 0.4); color: #d09fff; }
.insight-type-badge.insight-type-funding       { background: rgba(48, 209, 88, 0.12); border-color: rgba(48, 209, 88, 0.4); color: #7be592; }
.insight-date {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
}
.insight-pinned {
  font-size: 10px;
  letter-spacing: 0.3px;
  padding: 2px 8px;
  border-radius: 980px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
}
.insight-card-body {
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.78);
  margin: 0 0 14px;
}
.insight-card-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
}
.insight-card-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin-right: 4px;
  letter-spacing: 0.2px;
}
.insight-person-chip {
  font-size: 11px;
  padding: 3px 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 980px;
  color: rgba(255, 255, 255, 0.7);
}
.insight-source-link {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 980px;
  border: 0.5px solid rgba(41, 151, 255, 0.3);
  color: #6db9ff;
  text-decoration: none;
  transition: all 0.2s;
}
.insight-source-link:hover {
  background: rgba(41, 151, 255, 0.1);
  border-color: rgba(41, 151, 255, 0.5);
}
.insights-empty {
  padding: 60px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  border: 0.5px dashed rgba(255, 255, 255, 0.12);
  border-radius: 18px;
}
@media (max-width: 600px) {
  #insights-section { padding: 56px 16px 100px; }
  .insights-title { font-size: 24px; }
  .insight-card { padding: 18px 20px; }
  .insight-card-title { font-size: 15px; }
  .insight-card-body { font-size: 13px; }
}
`;

(function() {
  const root = document.getElementById('insights-section');
  if (!root) return;
  const graphId = root.dataset.graph || 'hardware';

  // Inject CSS once
  if (!document.getElementById('insights-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'insights-widget-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
  }

  // Render unified footer (replace #quick-links contents)
  renderFooter(graphId);

  // Filter to this graph's insights
  const items = INSIGHTS_DATA.filter(i => i.graphs.includes(graphId));

  let activeTab = 'insight';      // 'insight' | 'dynamic'
  let activeFilter = 'all';       // 'all' | 'non-consensus' | 'relationship' | 'resume'

  // Build initial DOM
  root.innerHTML = `
    <div class="insights-inner">
      <div class="insights-eyebrow">INSIGHTS</div>
      <h2 class="insights-title">最新洞察</h2>
      <p class="insights-subtitle">非共识洞察 + 人物关系 + 投资动态。每月由 AING硬迹 routine 自动补充。</p>
      <div class="insights-tabs" id="insights-tabs"></div>
      <div class="insights-filter-row" id="insights-filter-row"></div>
      <div class="insights-cards" id="insights-cards-container"></div>
    </div>
  `;

  function getInsightItems()  { return items.filter(i => i.type !== 'funding'); }
  function getDynamicItems()  { return items.filter(i => i.type === 'funding'); }

  function renderTabs() {
    const ic = getInsightItems().length;
    const dc = getDynamicItems().length;
    document.getElementById('insights-tabs').innerHTML = `
      <button class="insights-tab ${activeTab === 'insight' ? 'active' : ''}" data-tab="insight">
        洞察<span class="insights-tab-count">${ic}</span>
      </button>
      <button class="insights-tab ${activeTab === 'dynamic' ? 'active' : ''}" data-tab="dynamic">
        动态<span class="insights-tab-count">${dc}</span>
      </button>
    `;
    document.querySelectorAll('.insights-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.dataset.tab;
        activeFilter = 'all';
        renderTabs();
        renderFilters();
        renderCards();
      });
    });
  }

  function renderFilters() {
    const row = document.getElementById('insights-filter-row');
    if (activeTab === 'dynamic') { row.innerHTML = ''; return; }
    const insightItems = getInsightItems();
    const types = ['all', 'non-consensus', 'relationship', 'resume'];
    row.innerHTML = types.map(t => {
      const count = t === 'all' ? insightItems.length : insightItems.filter(i => i.type === t).length;
      if (t !== 'all' && count === 0) return '';
      const label = t === 'all' ? '全部' : TYPE_LABELS[t];
      return `<button class="insights-chip ${activeFilter === t ? 'active' : ''}" data-filter="${t}">${label} <span style="opacity:.5">${count}</span></button>`;
    }).join('');
    document.querySelectorAll('.insights-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    let list = activeTab === 'insight' ? getInsightItems() : getDynamicItems();
    if (activeTab === 'insight' && activeFilter !== 'all') {
      list = list.filter(i => i.type === activeFilter);
    }
    list = list.slice().sort((a, b) => {
      if (activeTab === 'insight') {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
      }
      return new Date(b.date) - new Date(a.date);
    });
    const container = document.getElementById('insights-cards-container');
    if (list.length === 0) {
      container.innerHTML = `<div class="insights-empty">本图谱暂无 ${activeTab === 'insight' ? '洞察' : '动态'}，持续更新中…</div>`;
      return;
    }
    container.innerHTML = list.map(renderCard).join('');
  }

  function renderCard(item) {
    const personChips = (item.persons || []).map(p =>
      `<span class="insight-person-chip">${escapeHtml(p.name)}</span>`
    ).join('');
    const sourceChips = (item.sources || []).map(s =>
      `<a class="insight-source-link" href="${escapeAttr(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label)} ↗</a>`
    ).join('');

    return `
      <article class="insight-card">
        <div class="insight-card-head">
          <h3 class="insight-card-title">${escapeHtml(item.title)}</h3>
          <div class="insight-card-meta">
            <span class="insight-type-badge insight-type-${item.type}">${TYPE_LABELS[item.type] || item.type}</span>
            <span class="insight-date">${formatRelativeDate(item.date)}</span>
            ${item.pinned ? '<span class="insight-pinned">置顶</span>' : ''}
          </div>
        </div>
        <p class="insight-card-body">${escapeHtml(item.body)}</p>
        ${personChips ? `<div class="insight-card-row"><span class="insight-card-label">相关</span>${personChips}</div>` : ''}
        ${sourceChips ? `<div class="insight-card-row"><span class="insight-card-label">来源</span>${sourceChips}</div>` : ''}
      </article>
    `;
  }

  function renderFooter(activeGraph) {
    const ql = document.getElementById('quick-links');
    if (!ql) return;
    ql.innerHTML = FOOTER_LINKS.map((link, i) => {
      const sep = i > 0 ? '<span class="quick-link-sep">·</span>' : '';
      const active = link.id === activeGraph ? ' active' : '';
      const target = link.id === 'personal' ? ' target="_blank" rel="noopener"' : '';
      return `${sep}<a class="quick-link${active}" href="${link.url}"${target}>${link.label}</a>`;
    }).join('');
  }

  function formatRelativeDate(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const days = Math.floor((now - d) / 86400000);
    if (days < 0) return d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' });
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days < 7) return `${days} 天前`;
    if (days < 30) return `${Math.floor(days / 7)} 周前`;
    if (days < 365) return `${Math.floor(days / 30)} 个月前`;
    return `${Math.floor(days / 365)} 年前`;
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  // Initial mount
  renderTabs();
  renderFilters();
  renderCards();
})();
