// ============================================================
// Insights Widget — shared component for 4 graph pages
// Hosted at: https://jason3535.github.io/hardware-startup-graph/insights-widget.js
// Loaded by: hardware-startup-graph, investor-graph, ai-scholar-graph, designer-graph
// ============================================================

const INSIGHTS_DATA = [
  // ===== 2026-05-10 日常扫描 =====
  {
    id: "xai-dissolves-colossus-to-anthropic-2026-05-07",
    date: "2026-05-07",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: false,
    title: "xAI 解散并入 SpaceX,Colossus 超算整租给 Anthropic",
    body: "2026年5月7日，马斯克宣布 xAI 作为独立实体解散并入 SpaceX，成立新部门「SpaceXAI」。同步宣布：Colossus 1 超算（孟菲斯，22万张 Nvidia GPU，H100/H200/GB200，300MW）整体租给 Anthropic，交易估值约 $40 亿。时间线极度压缩：xAI 的11位联创在3月28日前全部离职，最后一位 Ross Nordeen 离职后直接加入 Anthropic，成为这次算力交割的亲历者。马斯克承认 xAI「第一次没建对」，「正在从头重建」。三个月前他公开称 Anthropic「邪恶」，现在成了它的算力房东。三层含义：①个人主导制 AI 公司粘不住联创——11位全部出走是极罕见的机构失稳信号；②算力进入商品化阶段，连全球最大超算持有者也靠出租优化 GPU 利用率；③百亿租金让「邪恶敌人」立场瞬间翻转，商业逻辑压倒政治叙事。对 AI 创业者的含义：联创稳定来自股权对齐与技术共识，而非个人光环；优先设计「算力获取策略」而非追求「算力所有权」",
    persons: [
      { id: "musk", name: "Elon Musk(xAI → SpaceXAI)" },
      { id: "damodei", name: "Dario Amodei(Anthropic)" }
    ],
    sources: [
      { label: "新华社 Xinhua 2026-05-07", url: "https://english.news.cn/northamerica/20260507/6826a736d21e41a3aea9d2e36c96b6f0/c.html" },
      { label: "TechCrunch Is xAI a neocloud now 2026-05-06", url: "https://techcrunch.com/2026/05/06/is-xai-a-neocloud-now/" },
      { label: "Tom's Hardware Colossus Anthropic lease 2026-05-07", url: "https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-spacex-has-rented-out-access-to-its-supercomputers-220-000-nvidia-gpus-and-300-megawatts-of-ai-compute-power-to-rival-anthropic-musk-says-no-one-set-off-my-evil-detector-antrhropic-also-interested-in-orbital-data-centers" }
    ]
  },

  // ===== 设计师图谱 · 非共识洞察 =====
  {
    id: "apple-design-golden-age-ended",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["designer"],
    pinned: true,
    title: "苹果设计黄金时代已经闭环 — Liquid Glass 是终章不是新章",
    body: "Alan Dye 2025.12 跳 Meta,被普遍解读为「Meta 挖人 + 苹果失血」的人才战。但更深一层的非共识判断是:**苹果设计部 40 年黄金时代已经在 Liquid Glass 这一刻闭环了**。这条血脉是 Bill Atkinson + Susan Kare(1984)→ Imran Chaudhri + Bas Ording(2007 iPhone)→ Jony Ive + Bart Andre(2010s 黄金期)→ Alan Dye(2025 Liquid Glass)。Liquid Glass 表面是 iOS 26 视觉重构,本质是 Ive 美学(玻璃材质 + 极简 + 自然光)在没有 Ive 的情况下被 Dye 用 visionOS 经验重新拼一次——这是「致敬之作」而非「下一时代」。Dye 跳 Meta 不是单纯人才流失,是「苹果设计部第二代」选择把这套语言带到下一个平台(智能眼镜 + AI 产品)。对设计行业的真正含义:**未来 5-10 年最具影响力的硬件设计语言不会再来自苹果**——会来自苹果出走者(Ive 在 LoveFrom、Dye 在 Meta、Chaudhri 在 Humane 失败后的余波)。苹果还会出好产品,但「定义时代美学」的角色已经换人。",
    persons: [
      { id: "alandye", name: "Alan Dye" },
      { id: "jonyive", name: "Jony Ive" },
      { id: "billatkinson", name: "Bill Atkinson" },
      { id: "imranchaudhri", name: "Imran Chaudhri" }
    ],
    sources: [
      { label: "AppleInsider Alan Dye 跳 Meta", url: "https://appleinsider.com/articles/25/12/03/apples-human-interface-design-chief-alan-dye-poached-by-meta" }
    ]
  },
  {
    id: "pritzker-edge-architects",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["designer"],
    pinned: true,
    title: "Pritzker 不是「最伟大建筑师奖」,是「边缘建筑师奖」",
    body: "刘家琨 2025 获奖被国内媒体描述为「中国又一位被国际认可的建筑师」。但更准确的判断是:**Pritzker 自 2010s 起已经从「明星建筑师奖」转向了「边缘建筑师奖」**——奖给那些**主动拒绝市场逻辑、拒绝大体量项目、扎根本地材料**的建筑师。看获奖名单:Peter Zumthor(2009,瑞士山区只做 30 个项目)、王澍(2012,业余建筑工作室,只做小尺度)、坂茂(2014,纸建筑用于灾区)、刘家琨(2025,再生砖 + 西村大院)。**真正的明星派**(扎哈、Calatrava、Bjarke Ingels)反而**从未获奖或获奖很晚**(扎哈 2004 算早,但她去世 8 年都没新明星派得奖)。Pritzker 委员会(由 Yung Ho Chang 等长期评委组成)系统性偏好「反主流」选择。对中国建筑师的实操含义:**追求 Pritzker 不该模仿马岩松式的造型派,而应学王澍/刘家琨的「向地方、向材料、向社区」路径**。同时也意味着:中国大量做大体量地标的明星建筑师即使商业成功,在 Pritzker 体系里永远是「不被看见」的。",
    persons: [
      { id: "liujiakun", name: "刘家琨" },
      { id: "wangshu", name: "王澍" },
      { id: "peterzumthor", name: "Peter Zumthor" },
      { id: "shigeruban", name: "坂茂" },
      { id: "yunghochang", name: "张永和(Pritzker 评委)" }
    ],
    sources: [
      { label: "ArchDaily Liu Jiakun Pritzker 2025", url: "https://www.archdaily.com/1027571/chinese-architect-liu-jiakun-receives-the-2025-pritzker-architecture-prize" }
    ]
  },
  {
    id: "designer-ceo-vs-design-led",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["designer"],
    pinned: true,
    title: "「设计师 CEO」≠「设计驱动公司」 — 90% 的「design-led」都是叙事",
    body: "硅谷过去 5 年到处自称「design-led company」,但能持续做出真正设计驱动产品的公司不超过 10 家。原因不是这些公司没好设计师,而是**设计驱动 ≠ 雇了 VP of Design**。真正的判断标准是:**设计师本人是否坐在 CEO/founder 位置上**。验证名单很短:Brian Chesky(Airbnb CEO,RISD 工业设计)、Ivan Zhao(Notion CEO,UBC 认知科学+艺术)、Karri Saarinen(Linear CEO,芬兰前 Airbnb Principal)、Joe Gebbia(Airbnb co-founder,RISD)。这四人有共同的「**设计师权力结构**」:不需要向产品 VP 解释为什么细节重要,因为他们就是产品 VP 的老板。反例:Spotify、Uber、Slack 都自称 design-led,但当设计与增长冲突时永远增长赢——因为设计师不在最终决策权链路上。对中国 designer-founder 的非共识判断:**这条路在中国走不通,不是因为中国没好设计师,而是中国甲方/资本逻辑要求 CEO 必须先是「资源整合者」(融资+政商关系+招商)而不是「品味守护者」**。除非把公司放在海外(像 Ivan Zhao Notion),否则中国设计师当 CEO 的天花板在 100 人以下。",
    persons: [
      { id: "ivanzhao", name: "Ivan Zhao(Notion)" },
      { id: "karrisaarinen", name: "Karri Saarinen(Linear)" },
      { id: "brianchesky", name: "Brian Chesky(Airbnb)" },
      { id: "joegebbia", name: "Joe Gebbia(Airbnb)" }
    ],
    sources: [
      { label: "Lenny's Newsletter Karri Saarinen", url: "https://www.lennysnewsletter.com/p/inside-linear-building-with-taste" }
    ]
  },
  {
    id: "design-engineer-is-atkinson-redux",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["designer"],
    pinned: false,
    title: "Design Engineer 不是新职业,是 1984 年 Bill Atkinson 模式被 AI 工具复活",
    body: "2025-2026 设计圈在炒「Design Engineer」(Vercel 的 Rauno Freiberg、Cursor 的 Ryo Lu)是新一代职业。但回看历史:**1984 年原版 Macintosh 团队的 Bill Atkinson 就是 design engineer——MacPaint 是他自己写的、QuickDraw 图形系统是他自己写的、HyperCard 也是他**。当时苹果整个团队约 20 人,人人都是设计师 + 工程师。1990s-2010s 产业膨胀过程把这个角色拆成了「UI 设计师 → 前端工程师 → 后端工程师」三段式分工。Cursor / v0 / Lovable 这一波 AI 工具的真正历史意义是**把分工拆掉的成本降到接近零**,所以 Atkinson 模式重新可能。对中国设计师的实操判断:**这不是「学 AI 工具」的问题,是「重新成为全栈型设计师」的范式回归**。在国内行业语境里,这意味着 UED 部门会被重新整合到工程团队,纯 UI 设计师角色会消失,设计师必须能交付可运行原型。这条路 5-10 年内会走完,跑不动的设计师会出局。Bill Atkinson 在 2025 去世,这一年 Cursor 火起来,某种意义上是设计史的一次完整循环。",
    persons: [
      { id: "billatkinson", name: "Bill Atkinson" },
      { id: "raunofreiberg", name: "Rauno Freiberg" },
      { id: "ryolu", name: "Ryo Lu" },
      { id: "bretvictor", name: "Bret Victor" }
    ],
    sources: [
      { label: "Cursor Head of Design Ryo Lu YC talk", url: "https://www.ycombinator.com/library/N8-cursor-head-of-design-reviews-startup-websites" }
    ]
  },
  {
    id: "muji-advisory-board-japan-only",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["designer"],
    pinned: false,
    title: "MUJI 顾问董事会是日本独有的设计治理创新 — Apple/Braun 都做不到",
    body: "MUJI 自 2002 年起的「Advisory Board」结构(深泽直人 + 原研哉 + Sam Hecht + Jasper Morrison 4 位顶级设计师持续 20+ 年作为外部顾问董事)是被严重低估的设计组织创新。常见解读把 MUJI 等同于「极简风格」,但真正的非共识在治理结构:**Rams 时代的 Braun 是「内部设计部」(Rams 是员工)、Apple 是「核心团队封闭」(Ive 不接外部顾问)、Pentagram 是「合伙人共治」(只对自己事务所负责)。只有日本这种 4 位独立设计师作为品牌长期智囊董事的模式,从来没在西方品牌复制成功**。原因:第一,西方公司的 board 文化要求决策权清晰,不允许 4 个外部设计师对产品有持续影响力。第二,设计师彼此竞争(尤其在西方),很难维持 20 年合作。第三,日本「**社外取缔役**」(独立董事)文化天然支持这种结构。对国内品牌的实操判断:**网易严选/小米生态/无印良品中国这些 MUJI 模仿者只学了表面的极简,没学到 Advisory Board 这层治理**——而后者才是 MUJI 美学保持 20 年一致性的真正原因。",
    persons: [
      { id: "naotofukasawa", name: "深泽直人" },
      { id: "kenyahara", name: "原研哉" },
      { id: "samhecht", name: "Sam Hecht" },
      { id: "jaspermorrison", name: "Jasper Morrison" }
    ],
    sources: [
      { label: "Naoto Fukasawa MUJI Advisory Board", url: "https://www.muji.com/jp/advisory-board/" }
    ]
  },

  // ===== 2026-05-09 节点更新 =====
  {
    id: "deepseek-first-vc-45b-state-fund",
    date: "2026-05-09",
    type: "funding",
    graphs: ["ai-scholar", "investor"],
    pinned: true,
    title: "DeepSeek 首次接受 VC,估值从 \$20B 飙至 \$45B,国家大基金领投",
    body: "梁文锋此前一直坚持「不接受外部融资」,2025 年公司还以纯自有资金运行。但 V4 + 华为昇腾绑定后,DeepSeek 5 月初首次松口接受外部 VC,估值在数周内从 \$200 亿翻到 \$450 亿——领投方不是经典美元 VC 或国内一线美元基金,而是**国家集成电路产业投资基金**(俗称「大基金」)。这层信号比估值翻倍更重要:第一,国家大基金原本聚焦半导体制造与设计公司,直接 anchor 投一家 LLM 公司是历史首次,意味着 DeepSeek 在政策视角已被划为「国家算力战略组成部分」而非「应用层 AI 公司」。第二,梁文锋此前拒绝美元资本是为了保留团队对路线和定价的完全控制,现在选择国家队而非美元 VC,是对「科研驱动 + 开源 + 定价对标公益」叙事的延续——国家队通常不要求快速退出。第三,与之前的国家大基金三期入场具身智能(银河通用 25 亿)形成呼应,中国 AI 资本结构正在系统性「国家化」。对纯美元 VC 主导的中国 AI 创业者(如 Moonshot/MiniMax),这是结构性挤压信号。",
    persons: [
      { id: "liangwenfeng", name: "梁文锋(DeepSeek)" }
    ],
    sources: [
      { label: "MEXC News DeepSeek $45B valuation", url: "https://www.mexc.com/news/1074839" }
    ]
  },
  {
    id: "embodied-supply-chain-shift",
    date: "2026-05-09",
    type: "trend",
    graphs: ["hardware", "investor"],
    pinned: false,
    title: "具身产业链「整机 → 零部件」融资迁移,300 亿涌入上游",
    body: "2026 年迄今具身智能领域累计融资已超 345 亿元,但本周新数据显示一个结构性转变:**钱开始从整机公司流向上游零部件**。关节模组:泉智博 4 月数亿元 A++,小象电动 4 月超亿元 Pre-A。传感器:开普勒机器人 4 月亿元级 A++,蓝点触控 4 月超亿元 C+。灵巧手:灵心巧手 2 月 15 亿 B 轮后 4 月底闪电 B+。整机赛道融资仍火爆(千寻 30 亿/它石智航 4.55 亿美金/银河通用 25 亿),但上游零部件融资速度首次超过整机。背后逻辑:整机公司已开始上市/流血竞争,VC 看到「卖铲子比卖人更稳」——零部件 25-40% 毛利,B 端订单可见度高,被宇树/智元这种龙头绑定就有现金流。对硬件创业者的实操含义:如果你不打算做整机,2026 上半年是切入「关节模组/触觉传感器/末端执行器/电源管理」的最佳窗口——估值未透支,头部客户已被国网 68 亿订单倒逼必须采购。",
    persons: [],
    sources: [
      { label: "新浪财经 300 多亿资本涌入具身全产业链", url: "https://finance.sina.com.cn/jjxw/2026-05-05/doc-inhwwezc3952105.shtml" }
    ]
  },
  {
    id: "ai-six-tigers-end-of-era",
    date: "2026-05-09",
    type: "non-consensus",
    graphs: ["ai-scholar", "investor"],
    pinned: false,
    title: "「AI 六小虎」叙事告一段落:智谱+MiniMax 港股 IPO,月之暗面/阶跃融资落定",
    body: "2024-2025 年中国 AI 圈最强的概念股是「六小虎」——智谱、MiniMax、月之暗面、百川、零一万物、阶跃星辰六家被视为对标 OpenAI 的中国一线 LLM 创业。本周资本市场动作让这个叙事进入终章:**智谱 + MiniMax 港股 IPO 已落定**(港交所申报),月之暗面/阶跃星辰各自完成新一轮融资,百川转向医疗 AI 路线(王小川宣布 2027 IPO),零一万物从模型转向应用。「六小虎」作为同质化竞争的故事彻底结束。下一阶段每家走自己的路:智谱押 toB Agent + 政企,MiniMax 押 C 端语音/视频(海螺),Moonshot(月之暗面)押长上下文+多模态,百川押医疗,01.AI 押应用,阶跃押多模态生成。但更深层的事:「AI 六小虎」叙事支撑的中国版「OpenAI 平替」幻觉破灭——DeepSeek 用一年半证明开源也能打,Anthropic ARR 反超 OpenAI,Mira Murati Thinking Machines 估值 \$50B,中国 LLM 赛道格局已被 DeepSeek + 大厂(字节/阿里/腾讯)+ 创业公司三层重新切分,「六小虎」更多是一个时代的注脚而非未来。",
    persons: [
      { id: "yangzhilin", name: "杨植麟(月之暗面)" },
      { id: "yanjunjie", name: "Yan Junjie(MiniMax)" },
      { id: "jietang", name: "唐杰(智谱)" },
      { id: "wangxiaochuan", name: "王小川(百川)" },
      { id: "kaifulee", name: "李开复(01.AI)" }
    ],
    sources: [
      { label: "财富中文 中国 AI 最新动态", url: "https://www.fortunechina.com/shangye/c/2026-04/19/content_473422.htm" }
    ]
  },

  // ===== 2026-05-05 大模型节点更新 =====
  {
    id: "deepseek-v4-huawei-decouple",
    date: "2026-05-05",
    type: "non-consensus",
    graphs: ["ai-scholar", "hardware"],
    pinned: true,
    title: "DeepSeek V4 双重信号:性能赶超闭源 + 华为昇腾绑定",
    body: "4.24 DeepSeek-V4 预览版正式开源。两个版本:V4-Pro(1.6T 参数 MoE,激活 49B)+ V4-Flash(2840 亿参数 MoE,激活 13B),原生支持 100 万 token 上下文。性能层面:Pro 在数学/STEM/竞赛代码超所有已公开开源模型,世界知识仅次 Gemini 3.1 Pro;agentic coding 体验超 Sonnet 4.5,接近 Opus 4.6 不思考模式——已成 DeepSeek 内部员工日常 coding 工具。价格层面:Pro 输入 12 元/百万 token,据传是 GPT-5.4 的 1/20。但真正颠覆性的是算力维度:V4 是全球首个原生跑在华为昇腾 950PR 上的万亿参数大模型(单卡 FP4 算力 1.56P,2.87 倍 H20),DeepSeek 首次把华为昇腾和 Nvidia 列入同一硬件验证清单,从 CUDA 生态明确切向 CANN 生态。8 家国产芯片厂(华为/百度/阿里/海光等)火速适配。对中国 AI 创业的含义:第一次有「性能够用 + 算力可获取 + 价格能承担」的三位一体国产开源底座,这是行业拐点级别的事件。",
    persons: [
      { id: "liangwenfeng", name: "梁文锋(DeepSeek)" },
      { id: "dayaguo", name: "Daya Guo(DeepSeek-R1 一作)" }
    ],
    sources: [
      { label: "DeepSeek 官方 V4 公告", url: "https://api-docs.deepseek.com/news/news260424" },
      { label: "智东西 8 大国产芯片火速适配", url: "https://zhidx.com/p/552782.html" },
      { label: "钛媒体 黄仁勋的担忧成真", url: "https://www.tmtpost.com/7966555.html" }
    ]
  },
  {
    id: "gpt-5-5-reclaims-coding-throne",
    date: "2026-05-05",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "GPT-5.5 把 agentic coding 王座从 Claude 手里夺回",
    body: "OpenAI 4.23 发布 GPT-5.5,基准测试碾压 Anthropic 同期旗舰 Claude Opus 4.7。Terminal-Bench 2.0:82.7% vs 69.4%,13+ 分差距。Expert-SWE 73.1%,OSWorld-Verified 78.7%,FrontierMath 1-3 拿到 51.7%。更要命的是 token 效率:GPT-5.5 完成相同任务用的输出 token 比 Opus 4.7 少 72%,长上下文 retrieval 在 8-needle 512K-1M 区间 74% vs 32.2%——直接两倍多差距。一个月前 Anthropic ARR 刚反超 OpenAI(\$30B vs \$25B)的叙事,被技术指标狠狠反扑。值得关注的是 Anthropic 内部对 Claude Code 的押注路径:Cursor 已切回 GPT-5.5 作为默认模型,Claude Code 团队(Boris Cherny + Cat Wu)未来 12 个月最大挑战不是产品打磨,而是 Sonnet 5/Opus 5 必须在 agentic 任务硬指标追回这 13 分差。Anthropic 此前 ARR 反超的故事如果模型不跟上,会被 reverse 一遍。",
    persons: [
      { id: "altman", name: "Sam Altman" },
      { id: "pachocki", name: "Jakub Pachocki" },
      { id: "damodei", name: "Dario Amodei" },
      { id: "bcherny", name: "Boris Cherny(Claude Code)" }
    ],
    sources: [
      { label: "OpenAI Introducing GPT-5.5", url: "https://openai.com/index/introducing-gpt-5-5/" },
      { label: "DigitalApplied GPT-5.5 vs Claude Opus 4.7 对比", url: "https://www.digitalapplied.com/blog/gpt-5-5-vs-claude-opus-4-7-frontier-comparison" }
    ]
  },
  {
    id: "unitree-ipo-2025-financials",
    date: "2026-05-05",
    type: "funding",
    graphs: ["hardware"],
    pinned: false,
    title: "宇树 IPO 实锤:2025 营收 17 亿(+335%),扣非净利 6 亿(+674%)",
    body: "2026.3.20 上交所正式受理宇树科技科创板 IPO 申请,拟募资 42.02 亿元,「人形机器人第一股」即将诞生。招股书数据揭穿了具身赛道的「估值高、不赚钱」叙事:2025 全年营收 17.08 亿,同比 +335%;扣非净利润超 6 亿,同比 +674%——这两个数字在中国硬件 IPO 史上都是头部水平。结构性变化更值得注意:2025 年 1-9 月,人形机器人收入占比首次达到 51.53%,**超过原本的现金牛四足机器人**;人形出货量 5500+ 台。集邦预估 2026 年宇树+智元两家将合计占国产人形机器人 80% 出货量。对其他还在融资轮次跑的具身公司,这意味着 IPO 窗口期的关键 KPI 已被宇树定锚——18 个月内做到「营收破 10 亿 + 净利转正 + 人形产品收入占比超 50%」,否则估值很难支撑。",
    persons: [
      { id: "wangxingxing", name: "王兴兴(宇树)" }
    ],
    sources: [
      { label: "上交所 宇树招股书披露", url: "https://static.sse.com.cn/stock/disclosure/announcement/c/202603/002178_20260320_BLK4.pdf" },
      { label: "OFweek 具身智能 IPO 潮起", url: "https://robot.ofweek.com/2026-04/ART-898890-8420-30684330.html" }
    ]
  },

  // ===== HARDWARE — 2026-05-05 新增 =====
  {
    id: "state-grid-68b-procurement",
    date: "2026-05-05",
    type: "trend",
    graphs: ["hardware"],
    pinned: true,
    title: "国网 68 亿采购 8500 台机器人 — 第一张「国家级订单」结构曝光",
    body: "国家电网 4 月 22 日内部下发《2026 年具身智能发展规划》，年内采购约 8500 台具身设备总投资 68 亿元，结构是：四足巡检 5000 台 / 15 亿，人形带电作业 500 台 / 25 亿（单价 500 万），双臂巡检 3000 台 / 18 亿，剩余 10 亿做研发与人才。中标供应商：云深处、宇树、智元、UBTech、傅利叶。算上南方电网与地方能源跟单，2026 年电力行业可能成为具身智能第一个百亿级垂直市场。这意味着接下来 12 个月赛道核心指标已切换：不是融资额，而是中标资质 + 量产交付。还在 Demo 阶段的公司压力会陡增。",
    persons: [
      { id: "wangxingxing", name: "王兴兴（宇树）" },
      { id: "pengzhihui", name: "彭志辉（智元）" }
    ],
    sources: [
      { label: "界面新闻 国网采购详情", url: "https://m.jiemian.com/article/14311565.html" },
      { label: "智东西 68 亿史上最大采购", url: "https://zhidx.com/p/552717.html" }
    ]
  },
  {
    id: "galbot-lda-anti-bc",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: true,
    title: "银河通用 LDA-1B：第一篇反「行为克隆」的中国具身论文",
    body: "银河通用最新论文《LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion》挑战当前主流路线。核心论点：行为克隆（让机器人模仿人类示教）有结构性缺陷——协变量偏移导致每个微小执行误差会滚雪球，且智能上限被人力示教成本封死，永远撑不起「走进千家万户」的故事。LDA 走世界模型路线 + 通用数据摄取（吃野生短视频等无标注数据），把数据成本曲线从「线性 × 任务数」变成「亚线性」。这是中国具身赛道第一篇正面拒绝主流的「技术不同意见书」，值得跟踪 12 个月看数据效率上是否真能跑通——若跑通，行为克隆派的估值会被重估。",
    persons: [{ id: "wanghe", name: "王鹤（银河通用）" }],
    sources: [
      { label: "钛媒体 LDA 拆穿人形最大谎言", url: "https://www.tmtpost.com/7973821.html" }
    ]
  },
  {
    id: "qianxun-30days-30b",
    date: "2026-04-08",
    type: "funding",
    graphs: ["hardware", "investor"],
    pinned: false,
    title: "千寻智能 30 天融 30 亿：马云 + 雷军同时押注一家具身",
    body: "韩峰涛 2024 年 1 月创立千寻智能，到 2026 年 4 月仅 26 个月估值破百亿。融资节奏：2 月 24 日两轮共 20 亿（云锋 + 红杉中国领投）+ 4 月 7 日 10 亿（顺为 + 云锋联合领投）。马云的云锋 + 雷军的顺为同时下注同一家具身公司，是中国硬科技融资史上未见的密度。但这种速度本质上是两位巨头「为对冲做的双押」——双方都不能错过具身赛道，所以选了同一头部下注。对其他创业者而言：跟韩峰涛抢钱抢人都已无意义，但有可能押他没覆盖的细分场景（家用 / 户外 / 教育）。",
    persons: [
      { id: "hanfengtao", name: "韩峰涛（千寻）" },
      { id: "leijun", name: "雷军（顺为）" }
    ],
    sources: [
      { label: "量子位 千寻 20 亿融资", url: "https://www.qbitai.com/2026/02/381766.html" },
      { label: "澎湃 30 天 30 亿马雷联手", url: "https://m.thepaper.cn/newsDetail_forward_32915524" }
    ]
  },
  {
    id: "skild-ai-14b-vs-china",
    date: "2026-01-14",
    type: "funding",
    graphs: ["investor", "hardware"],
    pinned: false,
    title: "Skild AI $14B 估值 vs 国内具身：中美 GP 结构已分流",
    body: "1 月 14 日 Skild AI 完成 14 亿美金 C 轮，估值 140 亿美金（≈1000 亿人民币），SoftBank 领投，跟投方包括 Nvidia/NVentures、Bezos Expeditions、Macquarie、红杉。同期国内最高估值具身公司银河通用约 25 亿人民币单轮、估值 ~250 亿——是 Skild 的 1/4。但更值得注意的是 GP 名单结构：Skild 是经典「美元基金 + 战略科技投资人」组合（孙正义 + 黄仁勋 + 贝佐斯），国内则是「国家大基金 + 央企产业资本」（中石化 / 中信 / 上汽 / 中芯聚源）。底层资金性质不同 → 创始人退出预期不同 → 出海路径不同。一家创始人能拿哪种钱，基本预示了未来 5 年的玩法。",
    persons: [
      { id: "masason", name: "Masayoshi Son（SoftBank）" },
      { id: "jensenhuang", name: "Jensen Huang（NVIDIA）" },
      { id: "jeffbezos", name: "Jeff Bezos（Bezos Expeditions）" }
    ],
    sources: [
      { label: "TechCrunch Skild AI $14B", url: "https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/" },
      { label: "Skild AI Series C 公告", url: "https://www.skild.ai/blogs/series-c" }
    ]
  },
  {
    id: "unitree-4290-cambrian",
    date: "2026-04-28",
    type: "trend",
    graphs: ["hardware"],
    pinned: false,
    title: "宇树 $4290 双臂人形 = 具身软件 Cambrian 期开关",
    body: "宇树最新双臂人形机器人入门价 $4,290（约 3.1 万人民币），首次把「可编程 + 双臂操纵」硬件拉到高校实验室、中小开发者团队也买得起的价位。类比：2008 年 Arduino $30 释放了硬件 maker 一代，2014 年树莓派 $35 释放了边缘计算开发者一代。$4,290 这个价位在具身赛道意味着「算法/数据/应用层创业者」会在未来 12 个月暴增——他们不必自己造硬件，可以把宇树本体当成 commodity 平台。这对自己造本体的创业者是坏消息（毛利会被压缩到 PC 行业水平），对软件 + 数据派则是历史窗口。Jason 注：可以重点观察「不做本体只做大脑/手势识别/家居场景」这一波新创业者。",
    persons: [{ id: "wangxingxing", name: "王兴兴（宇树）" }],
    sources: [
      { label: "Startup Fortune Unitree $4290", url: "https://startupfortune.com/unitree-just-priced-a-dual-arm-humanoid-robot-at-4290-and-the-embodied-ai-experimentation-race-is-about-to-get-crowded/" }
    ]
  },
  {
    id: "anthropic-overtakes-openai-arr",
    date: "2026-04-07",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "Anthropic ARR 300 亿美金反超 OpenAI 250 亿——非共识翻盘",
    body: "Anthropic 4 月 7 日内部数据：ARR 达 300 亿美元，较 2025 年底 90 亿暴涨 233%；同期 OpenAI 披露 ARR 250 亿。截至 4 月，超 1000 家企业客户每年向 Anthropic 付超过 100 万美元。两年前业内共识是「OpenAI 永远领先一代」，但 Claude 4.X 系列在企业代码生成（Cursor / Replit / Anthropic API 直接接入）和 Constitutional AI 路线上的累积优势开始变现。对中国 AI 学者轴的含义：Dario/Daniela Amodei 这条 OpenAI 出走线，从被视作「保守派」到现在变成「商业反超派」，会引发新一轮中国研究员对「安全 + 商业兼得」路径的重新认真考虑。Schmidhuber 派 / RLHF 派 / Constitutional AI 派的话语权正在重新洗牌。",
    persons: [],
    sources: [
      { label: "新浪财经 Anthropic 反超 OpenAI", url: "https://finance.sina.com.cn/stock/t/2026-04-29/doc-inhwcvfa8021583.shtml" }
    ]
  },

  // ===== HARDWARE =====
  {
    id: "plaud-no-vc",
    date: "2026-05-02",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: true,
    title: "PLAUD 拒绝 VC，自我造血做到 2.5 亿美金 ARR",
    body: "许高在 2024 年 11 月达到 1 亿美元年化营收时主动拒绝所有投资机构接触。2025 年 ARR 升到 2.5 亿美元，约一半来自年订阅（$99-240/年），硬件 + 订阅利润率约 25%，堪比 iPhone。证明软件订阅 + 硬件入口可以让 AI 硬件公司不依赖 VC — 跟具身赛道单轮 25 亿 / 4.55 亿美金的打法是反向逻辑。对于软件背景切硬件的创业者，这是比'做一个本体'更可控的路径。",
    persons: [{ id: "xugao", name: "许高 Nathan" }],
    sources: []
  },
  {
    id: "tashi-455m-record",
    date: "2026-04-15",
    type: "funding",
    graphs: ["hardware"],
    pinned: true,
    title: "它石智航 4.55 亿美金 Pre-A 创中国具身单轮纪录",
    body: "前华为自驾 CTO 陈亦伦 + 大疆机器视觉总工组合操盘，董事长李震宇是百度智驾前总裁（造 Apollo + 萝卜快跑）。同期发布通用具身大模型 AWE3.0。这一轮把 3 月银河通用刚创下的 25 亿元单轮纪录直接抹掉。两个月内单轮纪录被刷新两次 — 反映资本对'通用具身'路线的极端集中下注。但也意味着如果 AWE3.0 的早期 demo 撑不住，未来 12 个月压力会非常大。",
    persons: [
      { id: "chenyilun", name: "陈亦伦" },
      { id: "wanghe", name: "王鹤（被超越方）" }
    ],
    sources: []
  },
  {
    id: "dreame-jiamei-shell",
    date: "2025-12-15",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: true,
    title: "追觅借壳嘉美包装是硬件创业的资本运作样本",
    body: "2025 年 12 月，俞浩斥资 22.82 亿元收购 A 股嘉美包装（002969.SZ）54.9% 股权成实控人。这不是简单的并购 — 是为追觅生态（主品牌 + 汽车 + 储能 + 大家电）从 2026 年底起在全球交易所批量上市做的预备。可能的逻辑：单一公司 IPO 估值有天花板，但生态拆出来分别上市可以避开这个天花板。值得硬件创业者想清楚 — 你的公司能不能拆？拆完估值是不是更高？",
    persons: [{ id: "yuhao", name: "俞浩" }],
    sources: []
  },
  {
    id: "national-fund-embodied-ai",
    date: "2026-03-02",
    type: "non-consensus",
    graphs: ["hardware", "investor"],
    pinned: false,
    title: "国家大基金三期入场具身智能",
    body: "2026.3 银河通用 25 亿元单轮由国家人工智能产业基金（大基金三期）、中石化、中信集团、中行、上汽、中芯聚源领投，这是大基金首次出手具身智能。同月雷鸟创新 10 亿元由中国移动 + 中信金石领投，联通跟投 — 国内运营商首次战略投智能眼镜。资本结构正在从 VC 转向'国家队 + 产业链战略投'。对创业者而言意味着：估值倍数会降但不会被 down round 卡死，但失去对冲意见的董事会。",
    persons: [
      { id: "wanghe", name: "王鹤（银河通用）" },
      { id: "lihongwei", name: "李宏伟（雷鸟）" }
    ],
    sources: []
  },
  {
    id: "dji-second-diaspora",
    date: "2026-04-30",
    type: "relationship",
    graphs: ["hardware"],
    pinned: false,
    title: "大疆系正在第二次扩散 — 不做无人机，做一切",
    body: "大疆 2017-2022 第一次扩散是横向延伸（扫地机、储能、3D 打印 — 即用相似品类的供应链经验做下一品类）。但过去 12 个月里出现的新模式是'跨界扩散' — 璇玑动力做机器人本体平台、Ludens AI 做家庭陪伴、浪爪做桌面纺织、UNICUS 做积木大模型。把大疆积累的供应链、高速电机、视觉算法跨到完全不同场景。值得把'前大疆 X 岗位'当成下一波创业人才地图的关键标签 — 这个标签会比'前 OPPO'、'前小米'更有信号。",
    persons: [
      { id: "wangtao", name: "汪滔（DJI 母节点）" },
      { id: "xuanji", name: "璇玑动力" },
      { id: "xuelijun", name: "薛立君（Ludens AI）" },
      { id: "langzhao", name: "浪爪智能" },
      { id: "unicus", name: "UNICUS" }
    ],
    sources: []
  },
  {
    id: "huawei-genius-cluster",
    date: "2026-04-30",
    type: "relationship",
    graphs: ["hardware"],
    pinned: false,
    title: "华为天才少年群在具身赛道集结",
    body: "稚晖君（智元，2022.12 离开）是第一波；接着欧拉万象（华为机器人天才少年，主导华为云 cloudRobo）、晨昏线（华为盘古班底）、它石智航（前华为自驾 CTO）。从 2022 年稚晖君开第一枪起，华为系正在往机器人本体 / 世界模型 / 通用具身分化出 4 条线，合计融资额已超 50 亿元。可能比 OpenAI 离职潮更值得重视 — 因为'华为天才少年'机制本身是国家层级的 AI 人才储备，正在以创业方式释放。",
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
    body: "2026.3.20 宇树科创板受理（拟募 42 亿） → 2026.3.30 绿米 Aqara 港交所 → 2026.4.1 XREAL 港交所 → 追觅启动 IPO 目标估值 1500 亿 → 正浩 EcoFlow 双线推进美股 + A 股。AI 硬件第一波 IPO 退出窗口正在打开。对老股东是回血窗口，但对新进场创业者可能意味着：接下来 12-18 个月一级市场会更挑剔 — 因为 LP 看到回报后会要求 GP 不再轻易开支票。",
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
    title: "星海图分裂 — 通用做不出 PMF 就回家庭场景",
    body: "高继扬（星海图创始人，前 Waymo/Momenta）留守做通用具身；前联合创始人 + 首席科学家 + 清华叉院助理教授拆出去新创破壳机器人，主打'帮家里主动干活的机器人'。这是具身创业从'通用本体'向'垂直家庭场景'的分裂样本 — 当通用方案在前 18 个月做不出 PMF，联创层面会出现路径分歧。可以预测未来 12 个月会有更多类似分裂（每家通用具身公司都可能孵化或裂变出 1-2 家垂直场景的）。",
    persons: [
      { id: "gaojiyuang", name: "高继扬（星海图）" },
      { id: "poke", name: "破壳机器人" }
    ],
    sources: []
  },

  // ===== WEEKLY TRENDS 2026-05-03 =====
  {
    id: "trend-2026-05-03-embodied-factory",
    date: "2026-05-03",
    type: "trend",
    graphs: ["hardware"],
    pinned: false,
    title: "具身智能进厂：从「试点」升级为「量产交付」",
    body: "本周多个渠道确认，具身机器人正从 2025 年的工厂 Demo 迈入批量落地阶段。星动纪元已在顺丰/中国邮政 10+ 物流中心部署 L7 人形，单笔订单超 5000 万元；银河通用 Galbot S1 在宁德时代产线实现行业唯一零遥操稳定运行；国家电网 2026 年采购计划 8500 台机器人，预算 68 亿元。此前赛道核心指标是「融资额」，这周开始已明确切换为「订单量 + 毛利率」。对还在叙事阶段的公司，这意味着 12 个月内会被要求交出实际 GMV 数字。",
    persons: [
      { id: "chenjianyu", name: "陈建宇（星动纪元）" },
      { id: "wanghe", name: "王鹤（银河通用）" }
    ],
    sources: [
      { label: "人民日报 2026-04-29", url: "http://finance.people.com.cn/n1/2026/0429/c1004-40711056.html" }
    ]
  },
  {
    id: "trend-2026-05-03-meta-physical-ai",
    date: "2026-05-03",
    type: "trend",
    graphs: ["hardware"],
    pinned: false,
    title: "Meta 收购 ARI：大厂从软件 AI 转向物理 AI 的信号枪",
    body: "5 月 1 日，Meta 收购机器人 AI 初创公司 Assured Robot Intelligence（ARI），联创 Lerrel Pinto（前 Fauna Robotics）和 Xiaolong Wang（前英伟达研究员）加入 Meta 超级智能实验室，核心技术是让机器人理解并适应真实物理环境中的人类行为。这是 Google DeepMind 消化 Everyday Robots 团队之后，第二次大厂通过 acqui-hire 切入物理 AI。微软（Nuance + Azure robotics）、谷歌（Everyday Robots + pi 合作）、Meta（ARI）已形成三足鼎立。大厂虹吸效应会让物理 AI 的顶尖人才越来越贵，中国具身赛道的海外竞争成本将进一步提升。",
    persons: [],
    sources: [
      { label: "TechCrunch 2026-05-01", url: "https://techcrunch.com/2026/05/01/meta-buys-robotics-startup-to-bolster-its-humanoid-ai-ambitions/" }
    ]
  },
  {
    id: "trend-2026-05-03-humanoid-shakeout",
    date: "2026-05-03",
    type: "trend",
    graphs: ["hardware"],
    pinned: false,
    title: "人形赛道清场：千台产能成生死分水岭",
    body: "本周多个信号显示具身赛道正在分化进入清场阶段。宇树 IPO 申请受理后被证监会随机抽中现场检查，2026 年目标出货 2 万台人形；智元 2026 年 Q1 已完成累计万台下线，2025 年营收 10.5 亿元，年出货量预计占行业 40%+。与此同时，钛媒体「具身智能开始清场」报道指出：部分中小玩家已在变卖 GPU 服务器，具身研讨者比具身创业者更多。清场逻辑与 2023 年 LLM 大模型一致——产能 + 营收 + 资本结构是三道筛子，只有三道都过的才有资格进入 2027 年。",
    persons: [
      { id: "wangxingxing", name: "王兴兴（宇树）" },
      { id: "pengzhihui", name: "彭志辉（智元）" }
    ],
    sources: [
      { label: "钛媒体 具身智能清场", url: "https://www.tmtpost.com/7928180.html" },
      { label: "宇树 IPO 受理 Caixin", url: "https://www.caixinglobal.com/2026-03-21/unitree-robotics-files-for-608-million-star-market-ipo-102425491.html" }
    ]
  },

  // ===== AI SCHOLAR =====
  {
    id: "transformer-8-startups",
    date: "2026-05-03",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "Transformer 8 作者创业失败率 > 60%",
    body: "发明 Transformer 的 8 位作者在 2017 论文之后陆续离开 Google 各自创业。Vaswani + Parmar 的 Adept 已经被 Amazon acqui-hire（创始人离开）、Shazeer 的 Character.AI 被 Google 反向收编，Kaiser 又回 OpenAI。真正持续运营且健康的只有 Cohere（Aidan Gomez）和 Sakana AI（Llion Jones）。即使你是 LLM 时代的'母机'级别学者，创业失败率仍然高于行业平均。这件事提示：商业判断和技术突破是两个独立能力，能写出 paper 不等于能跑出公司。",
    persons: [
      { id: "vaswani", name: "Ashish Vaswani" },
      { id: "shazeer", name: "Noam Shazeer" },
      { id: "gomez", name: "Aidan Gomez" },
      { id: "jones", name: "Llion Jones" }
    ],
    sources: []
  },
  {
    id: "openai-talent-diaspora",
    date: "2026-05-03",
    type: "relationship",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "OpenAI 离职潮已重塑半个 AI 领域",
    body: "Anthropic（Dario + Daniela Amodei，2021 离开 + 7 位核心研究员）、Sutskever 的 SSI（2024）、Mira Murati 新公司、Schulman 去 Anthropic、Karpathy → Eureka Labs。OpenAI 真正的 IP 不是 GPT 模型，而是一种'让聪明人围绕 RLHF + Scaling 协同工作'的组织方法 — 而这种'组织 IP'正在通过离职潮被分散到 6+ 家公司。一个团队的'认知一致性'比代码或数据更难复制，所以 Anthropic 才有可能用更小的团队做出对标 GPT 的产品。",
    persons: [
      { id: "altman", name: "Sam Altman" },
      { id: "sutskever", name: "Ilya Sutskever" },
      { id: "damodei", name: "Dario Amodei" },
      { id: "karpathy", name: "Andrej Karpathy" }
    ],
    sources: []
  },
  {
    id: "deepmind-three-cofounders",
    date: "2026-05-03",
    type: "relationship",
    graphs: ["ai-scholar"],
    pinned: false,
    title: "DeepMind 三联创只剩 Demis 一人",
    body: "Demis Hassabis 留任（2024 Nobel 化学奖，AlphaFold），Shane Legg 留任做首席 AGI 科学家，但 Mustafa Suleyman 2019 因伦理争议离开 DeepMind 去创办 Inflection AI，2024 被微软消化为 Microsoft AI CEO — 模型 IP 留给微软，人才平移到微软。这件事提示：头部 AI 公司里'伦理 / 合规 / 产品安全'角色的离职率往往比技术核心高，因为商业化压力下他们的话语权会先被稀释。Suleyman 去微软之后，Inflection 几乎瞬间空心化。",
    persons: [
      { id: "hassabis", name: "Demis Hassabis" },
      { id: "legg", name: "Shane Legg" },
      { id: "suleyman", name: "Mustafa Suleyman" }
    ],
    sources: []
  },
  {
    id: "academia-vs-industry-lab",
    date: "2026-05-03",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: false,
    title: "学术 vs 工业实验室的影响力倒挂",
    body: "2010-2015 是学术实验室主导（Hinton 多伦多组、LeCun NYU、Bengio Mila、Stanford NLP）；2015-2020 是大公司研究院（Google Brain、FAIR、DeepMind）；2020-至今是创业公司主战场（OpenAI、Anthropic、Mistral、xAI）。学院派现在的真正贡献在从'做研究'变成'输出博士生 / 创办公司'。Stanford 的 Fei-Fei、Andrew Ng、Manning、Liang 是少数还在体制内输出影响力的，但他们的影响也越来越通过创业（Coursera、Stanford HAI、World Labs）外溢。LLM 时代的根本规律是 scale + capital，这两件学校都做不了。",
    persons: [
      { id: "feifei", name: "Fei-Fei Li" },
      { id: "ng", name: "Andrew Ng" },
      { id: "hinton", name: "Geoffrey Hinton" },
      { id: "lecun", name: "Yann LeCun" }
    ],
    sources: []
  },
  {
    id: "schmidhuber-credit-narrative",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: false,
    title: "Schmidhuber 的'我先发明的'是 AI 学术圈最大的非共识",
    body: "Jürgen Schmidhuber 长期声称自己 1990 年代就发明了 LSTM（Hochreiter+Schmidhuber 1997 论文确实是 LSTM 起源）、GAN 的雏形（1990 PM-GAN）、attention 机制等。主流 AI 圈选择性忽视他 — 2018 图灵奖给了 Hinton/LeCun/Bengio，没他。但他的论文都是真的。这件事反映：学术信用不是看谁先发明，而是看谁有平台（Hinton 在多伦多+Google、LeCun 在 NYU+Meta、Bengio 在 Mila+Element AI），Schmidhuber 困在瑞士小机构没扩散。提醒任何科研人员：研究本身不是终点，把研究'能扩散的体系'比研究质量更决定影响力。",
    persons: [
      { id: "schmidhuber", name: "Jürgen Schmidhuber" },
      { id: "hochreiter", name: "Sepp Hochreiter" },
      { id: "hinton", name: "Geoffrey Hinton" },
      { id: "lecun", name: "Yann LeCun" },
      { id: "bengio", name: "Yoshua Bengio" }
    ],
    sources: []
  },
  {
    id: "karpathy-edu-leverage",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "Karpathy 一个人重塑了 LLM 时代的 AI 教育",
    body: "Andrew Ng 的 Coursera 是 AI 入门的事实标准（基础+通用），但 Karpathy 的 YouTube 系列（makemore / micrograd / GPT-from-scratch / nanoGPT）才是 LLM 时代的入门事实标准。区别在更新速度：预录的 MOOC 跟不上前沿，Karpathy 的'边讲边写'模式跟着 LLM 一起进化。Karpathy 现在创办 Eureka Labs 把这个模式产品化。一个人 + YouTube + 顶级技术认知 = 比任何 EdTech 公司都更高的杠杆 — 这是软件时代'教学即产品'的典型样本。",
    persons: [
      { id: "karpathy", name: "Andrej Karpathy" },
      { id: "ng", name: "Andrew Ng" }
    ],
    sources: []
  },
  {
    id: "constitutional-vs-rlhf",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "Anthropic Constitutional AI vs OpenAI RLHF — 路线分歧的本质",
    body: "Amodei 兄妹从 OpenAI 出来后，Anthropic 推出 Constitutional AI（让模型用一组宪法式规则自我评估和纠正），而 OpenAI 继续 RLHF（人类标注偏好做反馈）。哲学差异是：Anthropic 团队认为'人类标注'天然不可 scale 到超人类智能（你怎么标注比你聪明的模型？），Constitutional 才是真正可扩展的 alignment 方法。OpenAI 团队（Schulman 在内）则相信 RLHF 加上 process reward 可以走得更远。这两条路在 2026 年 GPT-5 vs Claude 4 还没决出胜负。但创业角度看 — 这是真正的'第一性原理之争'，比'谁的模型大'重要得多。",
    persons: [
      { id: "damodei", name: "Dario Amodei" },
      { id: "daniela", name: "Daniela Amodei" },
      { id: "schulman", name: "John Schulman" },
      { id: "altman", name: "Sam Altman" }
    ],
    sources: []
  },
  {
    id: "deepseek-counter-narrative",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: true,
    title: "DeepSeek 梁文锋:工程师驱动+开源+低估值的反叙事",
    body: "梁文锋从量化基金（幻方）切到大模型，DeepSeek 用极致工程优化做出对标 GPT-4 级别的开源模型，估值远低于同期 Moonshot/智谱/MiniMax。这个模式跟 OpenAI 完全相反：OpenAI 是组织化（强 PR + 估值跃迁 + 闭源），DeepSeek 是工程师导向（无 PR + 开源 + 低估值）。如果 DeepSeek 模式可复制 — 即'小团队+工程极致+开源生态'打得过'大团队+巨额融资+闭源'，那会重塑整个 AI 公司治理。2026 年初 V3/R1 在全球开源社区已经有了对标 Llama 的影响力，这是中国 AI 第一次在'方法论'层面输出全球。",
    persons: [
      { id: "liangwenfeng", name: "梁文锋" },
      { id: "altman", name: "Sam Altman" },
      { id: "mensch", name: "Arthur Mensch" }
    ],
    sources: []
  },
  {
    id: "individual-vs-collective-ai",
    date: "2026-05-04",
    type: "non-consensus",
    graphs: ["ai-scholar"],
    pinned: false,
    title: "AI 公司治理:个人主导 vs 集体决策的隐形分裂",
    body: "OpenAI / Anthropic / Google DeepMind 是'集体决策制' — 研究员多人投票决定方向，CEO 只是协调者。但 xAI（Musk）、Mistral（Mensch）、DeepSeek（梁文锋）是'个人主导制' — 一个核心人物决定一切技术路线和产品策略。短期看个人主导制效率高（决策快、不内耗），长期看集体决策制更稳（避免单点失败）。Musk 的 xAI 是个公开实验:Grok 开源、X 平台数据、Memphis 巨型 GPU 集群、Musk 个人意志贯穿整个公司。如果 xAI 在 2026-2027 跑出来,会颠覆'AI 公司必须研究员主导'的共识。",
    persons: [
      { id: "musk", name: "Elon Musk" },
      { id: "mensch", name: "Arthur Mensch" },
      { id: "liangwenfeng", name: "梁文锋" },
      { id: "altman", name: "Sam Altman" },
      { id: "damodei", name: "Dario Amodei" }
    ],
    sources: []
  },

  // ===== INVESTOR =====
  {
    id: "zhuxiaohu-ai-application-bet",
    date: "2026-05-03",
    type: "non-consensus",
    graphs: ["investor"],
    pinned: true,
    title: "朱啸虎'只投 AI 应用'是中国式 PMF 哲学的极端版本",
    body: "2024 起朱啸虎公开拒绝投通用大模型，只投有现金流 PMF 的 AI 应用。这与硅谷主流（押注基础模型）逆向。短期看似保守、规避了模型烧钱风险，但长期看可能错过 OpenAI / Anthropic 级别的回报。这个判断对错完全取决于'中国是否有可能跑出独立 LLM' — 如果 Yes，朱啸虎错过最大蛋糕；如果 No，他是少数提前看清的 GP。在 2026 年 DeepSeek / Qwen / Doubao 已经开源化的局面下，他这一轮其实赢了。",
    persons: [{ id: "zhuxiaohu", name: "朱啸虎" }],
    sources: []
  },
  {
    id: "shen-nanpeng-pivot",
    date: "2026-05-03",
    type: "non-consensus",
    graphs: ["investor"],
    pinned: false,
    title: "沈南鹏从'押人'转向'押产业链节点'",
    body: "Sequoia China 早期（2005-2018）风格是重度押创始人 — 王兴、张一鸣、宿华、王慧文、唐岩、朱啸虎本人都是 Sequoia 关系网的产物，'人对了什么都对'是当时的座右铭。但 2020 后 Sequoia 越来越多投供应链 / 基础设施 / 零部件公司（机器人减速器、AI infra、光模块），而不是单一 toC App。反映 VC 对'下一个王兴级别 founder'的等待变成'分散小赌注'的策略转变 — 这其实是承认'押人'的边际回报在下降，从平台型公司向产业链型公司迁移。",
    persons: [{ id: "shennp", name: "沈南鹏" }],
    sources: []
  },
  {
    id: "leijun-quiet-investor",
    date: "2026-05-03",
    type: "non-consensus",
    graphs: ["investor"],
    pinned: true,
    title: "雷军是中国最低调但回报率最稳定的硬件投资人",
    body: "顺为资本 + 小米生态链投了 100+ 家硬件公司，几个超级明星：石头科技（科创板 IPO）、华米/Zepp（NYSE）、绿米 Aqara（递表港交所）、九号公司（科创板）、追觅（启动 IPO）。但雷军一直被定位为'创业者'，很少被讨论为'投资人' — 这其实严重低估了他的资本布局。从被投回报看，小米生态链的 hit rate 比朱啸虎、张颖、张磊等公开 GP 都更稳定，因为雷军同时给被投公司提供供应链 + 渠道 + 品牌背书。这种'创业者 + 投资人 + 平台'三合一身份在中国其他人没有等价物。",
    persons: [{ id: "leijun", name: "雷军" }],
    sources: []
  },
  {
    id: "lizexiang-angel-ecosystem",
    date: "2026-05-03",
    type: "relationship",
    graphs: ["investor"],
    pinned: false,
    title: "李泽湘：中国硬件创业的'非典型 GP'",
    body: "李泽湘不是传统意义的 GP — 他是港科大教授 + 松山湖 XbotPark 机器人基地创办人，但他孵化 + 天使投资了大疆（汪滔）、云鲸（张峻彬）、本末（以及很多）。这种'学术导师 + 加速器 + 天使'的混合身份在传统 VC 体系里没有对标 — 等价物在硅谷可能是 Y Combinator 的 Paul Graham，但 PG 是程序员，李泽湘是机械工程师。中国硬件创业的'第一波 PMF'（消费机器人、扫地机、储能）大半都跟李泽湘有 1-2 度连接。如果你做硬件创业，跟李泽湘有 2 度内的关系比跟任何 VC 有 2 度内的关系都更值钱。",
    persons: [{ id: "lizexiang2", name: "李泽湘" }],
    sources: []
  }
];

// ============================================================

const FOOTER_LINKS = [
  { id: "hardware",  label: "智能硬件图谱", url: "https://hardware.jasonlin.tech/" },
  { id: "investor",  label: "投资人图谱",   url: "https://investor.jasonlin.tech/" },
  { id: "ai-scholar", label: "AI 牛人图谱",   url: "https://ai.jasonlin.tech/" },
  { id: "designer",  label: "设计师图谱",   url: "https://design.jasonlin.tech/" },
  { id: "personal",  label: "个人网页",     url: "https://jasonlin.tech" }
];

const TYPE_LABELS = {
  "non-consensus": "非共识",
  "relationship":  "关系",
  "resume":        "履历",
  "funding":       "融资",
  "trend":         "最新情况"
};

const STYLES = `
#insights-section {
  position: relative;
  width: 100%;
  background: linear-gradient(180deg, #0c0c0c 0%, #0a0a0a 200px);
  padding: 32px 24px 100px;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: rgba(255, 255, 255, 0.92);
  z-index: 5;
  border-top: 0.5px solid rgba(255, 255, 255, 0.06);
}
/* Hide graph overlays (legend / keyboard hint / geo-map) when scrolled past graph */
body.graph-out-of-view #legend,
body.graph-out-of-view #keyboard-hint,
body.graph-out-of-view #geo-map {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
/* Subtle "scroll for more" affordance on graph bottom edge */
body.has-insights #graph-container::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 60px;
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%);
  pointer-events: none;
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
.insight-type-badge.insight-type-trend         { background: rgba(100, 210, 255, 0.12); border-color: rgba(100, 210, 255, 0.4); color: #6ed4ff; }
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
/* Subscribe modal */
.subscribe-modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  z-index: 2000;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: subscribe-modal-fade 0.2s ease;
}
.subscribe-modal-overlay.open { display: flex; }
@keyframes subscribe-modal-fade { from { opacity: 0; } to { opacity: 1; } }
.subscribe-modal-card {
  background: #1a1a1a;
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 18px;
  padding: 36px 32px 28px;
  width: 100%;
  max-width: 420px;
  position: relative;
  font-family: 'SF Pro Text', -apple-system, system-ui, sans-serif;
  color: #fff;
}
.subscribe-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  border-radius: 50%;
  font-family: inherit;
}
.subscribe-modal-close:hover { background: rgba(255, 255, 255, 0.08); color: #fff; }
.subscribe-modal-eyebrow {
  font-size: 11px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 6px;
}
.subscribe-modal-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
  letter-spacing: -0.3px;
  color: #fff;
}
.subscribe-modal-pitch {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 22px;
  line-height: 1.6;
}
.subscribe-modal-form {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.subscribe-modal-form input[type="email"] {
  flex: 1;
  padding: 10px 14px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  font-family: inherit;
  min-width: 0;
}
.subscribe-modal-form input[type="email"]:focus { outline: none; border-color: rgba(41, 151, 255, 0.6); }
.subscribe-modal-form input[type="email"]::placeholder { color: rgba(255, 255, 255, 0.35); }
.subscribe-modal-form button {
  padding: 10px 22px;
  font-size: 13px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  white-space: nowrap;
}
.subscribe-modal-form button:hover { background: rgba(255, 255, 255, 0.85); }
.subscribe-modal-form button:disabled { background: rgba(255, 255, 255, 0.35); cursor: not-allowed; }
.subscribe-modal-status {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.45);
  min-height: 14px;
  letter-spacing: 0.2px;
}
.subscribe-modal-status.ok { color: #7be592; }
.subscribe-modal-status.err { color: #ff8b6b; }
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

  // ============== Umami custom event tracking ==============
  function trackEvent(name, data) {
    if (typeof window.umami !== 'undefined' && typeof window.umami.track === 'function') {
      try { window.umami.track(name, Object.assign({ graph: graphId }, data || {})); } catch (e) {}
    }
  }

  // Inject CSS once
  if (!document.getElementById('insights-widget-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'insights-widget-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);
  }

  // Render graph switcher dropdown + wire up nav buttons
  renderGraphDropdown(graphId);
  wireNavExtras();

  // Filter to this graph's insights
  const items = INSIGHTS_DATA.filter(i => i.graphs.includes(graphId));

  // Hide section entirely if no items for this graph; tag body so CSS can give graph full height
  if (items.length === 0) {
    root.style.display = 'none';
    document.body.classList.add('no-insights');
    return;
  }
  document.body.classList.add('has-insights');

  let activeFilter = 'all';  // 'all' | 'non-consensus' | 'relationship' | 'resume' | 'funding' | 'trend'

  // Build initial DOM (no top-level tabs — flat filter chip row)
  root.innerHTML = `
    <div class="insights-inner">
      <div class="insights-eyebrow">INSIGHTS</div>
      <h2 class="insights-title">最新洞察</h2>
      <p class="insights-subtitle">人物 · 关系 · 投资动态 · 非共识</p>
      <div class="insights-filter-row" id="insights-filter-row"></div>
      <div class="insights-cards" id="insights-cards-container"></div>
    </div>
  `;

  // Mount subscribe modal once
  ensureSubscribeModal();

  function renderFilters() {
    const row = document.getElementById('insights-filter-row');
    const order = ['all', 'non-consensus', 'relationship', 'resume', 'funding', 'trend'];
    row.innerHTML = order.map(t => {
      const count = t === 'all' ? items.length : items.filter(i => i.type === t).length;
      if (t !== 'all' && count === 0) return '';  // hide empty types
      const label = t === 'all' ? '全部' : TYPE_LABELS[t];
      return `<button class="insights-chip ${activeFilter === t ? 'active' : ''}" data-filter="${t}">${label} <span style="opacity:.5">${count}</span></button>`;
    }).join('');
    document.querySelectorAll('.insights-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        trackEvent('filter_changed', { filter: activeFilter });
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    let list = items.slice();
    if (activeFilter !== 'all') {
      list = list.filter(i => i.type === activeFilter);
    }
    list = list.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.date) - new Date(a.date);
    });
    const container = document.getElementById('insights-cards-container');
    if (list.length === 0) {
      const labelMap = { all: '内容', 'non-consensus': '非共识', 'relationship': '关系', 'resume': '履历', 'funding': '融资', 'trend': '最新情况' };
      container.innerHTML = `<div class="insights-empty">暂无${labelMap[activeFilter] || '内容'} · 持续更新中</div>`;
      return;
    }
    container.innerHTML = list.map(renderCard).join('');
  }

  function renderCard(item) {
    const personChips = (item.persons || []).map(p =>
      `<span class="insight-person-chip">${escapeHtml(p.name)}</span>`
    ).join('');
    const sourceChips = (item.sources || []).map(s =>
      `<a class="insight-source-link" href="${escapeAttr(s.url)}" target="_blank" rel="noopener" data-source-label="${escapeAttr(s.label)}">${escapeHtml(s.label)} ↗</a>`
    ).join('');

    return `
      <article class="insight-card" data-insight-id="${escapeAttr(item.id)}" data-insight-type="${escapeAttr(item.type)}">
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

  function ensureSubscribeModal() {
    if (document.getElementById('subscribe-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'subscribe-modal';
    modal.className = 'subscribe-modal-overlay';
    modal.innerHTML = `
      <div class="subscribe-modal-card" role="dialog" aria-modal="true">
        <button class="subscribe-modal-close" id="subscribe-modal-close" aria-label="关闭">×</button>
        <div class="subscribe-modal-eyebrow">NEWSLETTER</div>
        <div class="subscribe-modal-title">Jason's Hardware Notes</div>
        <p class="subscribe-modal-pitch">每周更新，中国 AI 硬件创业的人物 / 融资 / 非共识洞察，可一键退订</p>
        <form class="subscribe-modal-form" id="subscribe-modal-form">
          <input type="email" name="email" required placeholder="your@email.com" autocomplete="email" spellcheck="false">
          <button type="submit">订阅</button>
        </form>
        <div class="subscribe-modal-status" id="subscribe-modal-status"></div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('subscribe-modal-close').addEventListener('click', closeSubscribeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSubscribeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeSubscribeModal();
    });
    bindSubscribeModalForm();
  }

  function openSubscribeModal() {
    ensureSubscribeModal();
    const modal = document.getElementById('subscribe-modal');
    modal.classList.add('open');
    setTimeout(() => modal.querySelector('input[type=email]')?.focus(), 80);
  }

  function closeSubscribeModal() {
    const modal = document.getElementById('subscribe-modal');
    if (modal) modal.classList.remove('open');
  }

  function bindSubscribeModalForm() {
    const form = document.getElementById('subscribe-modal-form');
    const status = document.getElementById('subscribe-modal-status');
    if (!form || !status) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const email = form.email.value.trim();
      btn.disabled = true; btn.textContent = '...';
      status.className = 'subscribe-modal-status'; status.textContent = '';
      trackEvent('subscribe_submitted', { email_domain: email.split('@')[1] || '' });
      try {
        const res = await fetch('https://jasons-hardware-notes.992978142.workers.dev/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: graphId }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok) {
          let msg = '确认邮件已发送 · 请查收 ✓';
          if (data.status === 'already_subscribed') msg = '已订阅 ✓';
          else if (data.status === 'confirmation_resent') msg = '确认邮件已重发 ✓';
          status.className = 'subscribe-modal-status ok';
          status.textContent = msg;
          btn.textContent = '已发送';
          trackEvent('subscribe_completed', { status: data.status });
          setTimeout(closeSubscribeModal, 2400);
        } else {
          status.className = 'subscribe-modal-status err';
          status.textContent = data.error || '提交失败';
          btn.disabled = false; btn.textContent = '订阅';
        }
      } catch (err) {
        status.className = 'subscribe-modal-status err';
        status.textContent = '网络异常';
        btn.disabled = false; btn.textContent = '订阅';
      }
    });
  }

  function renderGraphDropdown(activeGraph) {
    const dropdown = document.getElementById('graph-dropdown');
    if (!dropdown) return;
    const graphs = FOOTER_LINKS.filter(l => l.id !== 'personal');
    const personal = FOOTER_LINKS.find(l => l.id === 'personal');
    const itemsHtml = graphs.map(link => {
      const active = link.id === activeGraph ? ' active' : '';
      return `<a class="graph-dropdown-item${active}" href="${link.url}" data-link-id="${link.id}">${link.label}</a>`;
    }).join('');
    const personalHtml = personal
      ? `<div class="graph-dropdown-sep"></div><a class="graph-dropdown-item" href="${personal.url}" target="_blank" rel="noopener" data-link-id="personal">${personal.label} ↗</a>`
      : '';
    dropdown.innerHTML = itemsHtml + personalHtml;
    dropdown.addEventListener('click', (e) => {
      const a = e.target.closest('a.graph-dropdown-item');
      if (a) trackEvent('quick_link_clicked', { to: a.dataset.linkId });
    });
  }

  function wireNavExtras() {
    // Graph switcher dropdown toggle
    const trigger = document.getElementById('graph-switcher-trigger');
    const dropdown = document.getElementById('graph-dropdown');
    if (trigger && dropdown) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !dropdown.hasAttribute('hidden');
        if (isOpen) {
          dropdown.setAttribute('hidden', '');
          trigger.parentElement.classList.remove('open');
        } else {
          dropdown.removeAttribute('hidden');
          trigger.parentElement.classList.add('open');
          trackEvent('graph_switcher_opened', {});
        }
      });
      // close when clicking outside
      document.addEventListener('click', (e) => {
        if (!trigger.parentElement.contains(e.target)) {
          dropdown.setAttribute('hidden', '');
          trigger.parentElement.classList.remove('open');
        }
      });
    }

    // Subscribe button in nav-bar
    document.getElementById('nav-subscribe-btn')?.addEventListener('click', () => {
      trackEvent('subscribe_clicked', { source: 'top_nav' });
      openSubscribeModal();
    });

    // Hamburger toggle (mobile)
    const hamburger = document.getElementById('nav-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        const open = document.body.classList.toggle('mobile-menu-open');
        hamburger.textContent = open ? '×' : '≡';
        trackEvent('mobile_menu_toggled', { open });
      });
    }
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
  renderFilters();
  renderCards();

  // Delegated click tracking inside cards
  root.addEventListener('click', (e) => {
    const card = e.target.closest('.insight-card');
    if (!card) return;
    const insightId = card.dataset.insightId;
    const insightType = card.dataset.insightType;
    const sourceLink = e.target.closest('.insight-source-link');
    if (sourceLink) {
      trackEvent('insight_source_clicked', { insight: insightId, source: sourceLink.dataset.sourceLabel });
    } else {
      // any click inside the card (excluding source link) counts as engagement
      trackEvent('insight_card_clicked', { insight: insightId, type: insightType });
    }
  });

  // Track insights section becoming visible (impression)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trackEvent('insights_viewed', {});
          io.disconnect();
        }
      });
    }, { threshold: 0.25 });
    io.observe(root);
  }

  // Hide graph overlays (legend / keyboard hint / geo-map) once user starts scrolling toward insights
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const scrolled = window.scrollY > 30;
      document.body.classList.toggle('graph-out-of-view', scrolled);
      scrollTicking = false;
    });
  }, { passive: true });
})();
