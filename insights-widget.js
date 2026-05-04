// ============================================================
// Insights Widget — shared component for 3 graph pages
// Hosted at: https://jason3535.github.io/hardware-startup-graph/insights-widget.js
// Loaded by: hardware-startup-graph, investor-graph, ai-scholar-graph
// ============================================================

const INSIGHTS_DATA = [
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
/* Subscribe button in top quick-links */
.quick-link-subscribe {
  padding: 4px 14px;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 980px;
  font-family: 'SF Pro Text', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: -0.12px;
  white-space: nowrap;
  transition: background 0.2s;
}
.quick-link-subscribe:hover { background: rgba(255, 255, 255, 0.85); }

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

  // Render unified footer (replace #quick-links contents)
  renderFooter(graphId);

  // Filter to this graph's insights
  const items = INSIGHTS_DATA.filter(i => i.graphs.includes(graphId));

  // Hide section entirely if no items for this graph; tag body so CSS can give graph full height
  if (items.length === 0) {
    root.style.display = 'none';
    document.body.classList.add('no-insights');
    return;
  }
  document.body.classList.add('has-insights');

  let activeTab = 'insight';      // 'insight' | 'dynamic'
  let activeFilter = 'all';       // 'all' | 'non-consensus' | 'relationship' | 'resume'

  // Build initial DOM
  root.innerHTML = `
    <div class="insights-inner">
      <div class="insights-eyebrow">INSIGHTS</div>
      <h2 class="insights-title">最新洞察</h2>
      <p class="insights-subtitle">人物 · 关系 · 投资动态 · 非共识</p>
      <div class="insights-tabs" id="insights-tabs"></div>
      <div class="insights-filter-row" id="insights-filter-row"></div>
      <div class="insights-cards" id="insights-cards-container"></div>
    </div>
  `;

  // Mount subscribe modal once
  ensureSubscribeModal();

  function getInsightItems()  { return items.filter(i => ['non-consensus','relationship','resume'].includes(i.type)); }
  function getDynamicItems()  { return items.filter(i => ['funding','trend'].includes(i.type)); }

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
        trackEvent('tab_switched', { to: activeTab });
        renderTabs();
        renderFilters();
        renderCards();
      });
    });
  }

  function renderFilters() {
    const row = document.getElementById('insights-filter-row');
    const tabItems = activeTab === 'insight' ? getInsightItems() : getDynamicItems();
    const types = activeTab === 'insight'
      ? ['all', 'non-consensus', 'relationship', 'resume']
      : ['all', 'funding', 'trend'];
    row.innerHTML = types.map(t => {
      const count = t === 'all' ? tabItems.length : tabItems.filter(i => i.type === t).length;
      if (t !== 'all' && count === 0) return '';
      const label = t === 'all' ? '全部' : TYPE_LABELS[t];
      return `<button class="insights-chip ${activeFilter === t ? 'active' : ''}" data-filter="${t}">${label} <span style="opacity:.5">${count}</span></button>`;
    }).join('');
    document.querySelectorAll('.insights-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        trackEvent('filter_changed', { tab: activeTab, filter: activeFilter });
        renderFilters();
        renderCards();
      });
    });
  }

  function renderCards() {
    let list = activeTab === 'insight' ? getInsightItems() : getDynamicItems();
    if (activeFilter !== 'all') {
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
      container.innerHTML = `<div class="insights-empty">暂无${activeTab === 'insight' ? '洞察' : '动态'} · 持续更新中</div>`;
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
        <p class="subscribe-modal-pitch">每周更新，中国 AI 硬件创业的人物 / 融资 / 非共识洞察</p>
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

  function renderFooter(activeGraph) {
    const ql = document.getElementById('quick-links');
    if (!ql) return;
    const linksHtml = FOOTER_LINKS.map((link, i) => {
      const sep = i > 0 ? '<span class="quick-link-sep">·</span>' : '';
      const active = link.id === activeGraph ? ' active' : '';
      const target = link.id === 'personal' ? ' target="_blank" rel="noopener"' : '';
      return `${sep}<a class="quick-link${active}" href="${link.url}"${target} data-link-id="${link.id}">${link.label}</a>`;
    }).join('');
    const subscribeBtn = `<span class="quick-link-sep">·</span><button class="quick-link-subscribe" id="quick-subscribe-btn" type="button">订阅</button>`;
    ql.innerHTML = linksHtml + subscribeBtn;
    // delegated click tracking on footer links
    ql.addEventListener('click', (e) => {
      const a = e.target.closest('a.quick-link');
      if (a) trackEvent('quick_link_clicked', { to: a.dataset.linkId });
    });
    document.getElementById('quick-subscribe-btn')?.addEventListener('click', () => {
      trackEvent('subscribe_clicked', { source: 'top_nav' });
      openSubscribeModal();
    });
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

  // Hide graph overlays (legend / keyboard hint / geo-map) when graph scrolled out of view
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const gc = document.getElementById('graph-container');
      const visible = gc ? gc.getBoundingClientRect().bottom > 100 : true;
      document.body.classList.toggle('graph-out-of-view', !visible);
      scrollTicking = false;
    });
  }, { passive: true });
})();
