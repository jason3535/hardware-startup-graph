// ============================================================
// Insights Widget — shared component for 4 graph pages
// Hosted at: https://jason3535.github.io/hardware-startup-graph/insights-widget.js
// Loaded by: hardware-startup-graph, investor-graph, ai-scholar-graph, designer-graph
// ============================================================

const INSIGHTS_DATA = [
  {
    id: "lightwheel-embodied-data-2026-06-24",
    date: "2026-06-24",
    type: "non-consensus",
    graphs: ["hardware"],
    pinned: false,
    title: "具身数据独角兽光轮智能年内两度融超10亿，训练数据正成新护城河",
    body: "**6月23日**，物理AI数据与评估基础设施公司**光轮智能**完成年内第三轮、第二笔逾**10亿元**战略融资（巨人网络、中关村科学城基金、四川发展科创基金、山东发展科创投等参投）；3月刚以同规模融资成为**全球首个具身数据领域独角兽**（整体估值逾百亿元）。创始人**谢晨**曾任英伟达自动驾驶仿真负责人，公司2025年营收破亿、增速逾十倍。**非共识**：当行业将目光钉在哪家人形机器人最先量产，真正的基础设施卡位战已悄然转移——谁掌握大规模合成训练数据与评估管线，谁就拥有了卡住机器人性能天花板的扼喉位置。**对创业者的含义**：「能不能动」不再是差异化关键，「用什么数据训」与「如何评估能力」才是下一轮护城河的核心",
    persons: [],
    sources: [
      { label: "36氪：巨人网络产业投资「光轮智能」2026-06-23", url: "https://36kr.com/newsflashes/3865256688932100" },
      { label: "界面新闻：光轮智能完成10亿元融资 成全球首个具身数据独角兽 2026-03-11", url: "https://www.jiemian.com/article/14098498.html" }
    ]
  },
  {
    "id": "jumper-anthropic-2026",
    "date": "2026-06-19",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "诺奖得主、AlphaFold 之父 John Jumper 离开 DeepMind 加入 Anthropic",
    "body": "**6 月 19 日**，凭 **AlphaFold** 共享 2024 年诺贝尔化学奖的 **John Jumper**，在 DeepMind 工作近九年后宣布离职加入 **Anthropic**——距 Shazeer 出走谷歌仅一天。**非共识**：当 AI 人才战聚焦于「谁能造更强的聊天模型」，把一位**用 AI 改写了结构生物学**的诺奖科学家招入麾下，是 Anthropic 在押注「AI 做科学」这条更长的曲线。",
    "persons": [
      {
        "id": "jumper",
        "name": "John Jumper"
      },
      {
        "id": "hassabis",
        "name": "Demis Hassabis"
      }
    ],
    "sources": [
      {
        "label": "Bloomberg：Nobel winner John Jumper to leave Google DeepMind for Anthropic（2026-06-19）",
        "url": "https://www.bloomberg.com/news/articles/2026-06-19/nobel-winner-john-jumper-to-leave-google-deepmind-for-anthropic"
      },
      {
        "label": "CNBC：John Jumper to leave Google DeepMind for Anthropic",
        "url": "https://www.cnbc.com/2026/06/19/john-jumper-to-leave-google-deepmind-for-anthropic.html"
      }
    ]
  },
  {
    "id": "shazeer-openai-2026",
    "date": "2026-06-18",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Transformer 之父 Noam Shazeer 离开谷歌投奔 OpenAI",
    "body": "**6 月 18 日**，谷歌 Gemini 联合负责人、Transformer 共同发明人 **Noam Shazeer** 宣布离开谷歌加入 **OpenAI**，出任**架构研究负责人**，探索下一代模型架构。两年前谷歌以约 **27 亿美元**收购其 Character.AI、把他请回 DeepMind，如今他再度出走。**非共识**：顶尖架构人才的流向，比任何榜单都更能说明各家「下一代架构」押注的重心正从谷歌转向 OpenAI。",
    "persons": [
      {
        "id": "shazeer",
        "name": "Noam Shazeer"
      }
    ],
    "sources": [
      {
        "label": "CNBC：Google Gemini co-lead Noam Shazeer leaves for OpenAI（2026-06-18）",
        "url": "https://www.cnbc.com/2026/06/18/google-gemini-co-lead-noam-shazeer-leaves-for-openai.html"
      }
    ]
  },
  {
    "id": "spacex-cursor-60b-2026",
    "date": "2026-06-16",
    "type": "funding",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "SpaceX 以 600 亿美元全股票收购 Cursor — IPO 几天后被马斯克买走",
    "body": "**6 月 16 日**，SpaceX 宣布以 **600 亿美元全股票**收购 **Cursor** 母公司 Anysphere——就在 Cursor 完成 IPO 几天之后。此前 4 月 SpaceX 已锁定选择权（约 100 亿美元合作，或年底 600 亿收购）。Cursor 年化收入从 2025 年初约 1 亿美元飙至 2026 年 6 月**逾 40 亿美元**。**非共识**：一家火箭公司买下一个代码编辑器，标志 AI 编程已从工具升级为巨头的战略资产。",
    "persons": [
      {
        "id": "truell",
        "name": "Michael Truell"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch：SpaceX to acquire Cursor for $60B in stock（2026-06-16）",
        "url": "https://techcrunch.com/2026/06/16/spacex-to-acquire-cursor-for-60b-in-stock-days-after-blockbuster-ipo/"
      },
      {
        "label": "CNBC：SpaceX to acquire AI coding startup Cursor for $60 billion",
        "url": "https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html"
      }
    ]
  },
  {
    "id": "unitree-star-ipo-2026",
    "date": "2026-06-01",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "宇树过会科创板 — 首个「具身智能」A 股，目标估值约 62 亿美元",
    "body": "**6 月 1 日**，**宇树科技（王兴兴）**科创板上市过会，成为**首个获批 A 股的「具身智能」公司**，目标估值约 **62 亿美元**、募资约 42 亿元，73 天快速过会。同期发布 **R1 人形（¥39,900）** 与 GD01 载人机甲，计划 2026 年出货 2 万台人形。**非共识**：当海外比拼融资额，中国人形的分水岭是**资本市场出口**——宇树、智元（万台下线 + 港股）正把「能上市」做成新的护城河。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      }
    ],
    "sources": [
      {
        "label": "CGTN：Unitree gets STAR Market green light（2026-06-01）",
        "url": "https://news.cgtn.com/news/2026-06-01/Unitree-gets-STAR-Market-green-light-1NCT9TksSVq/share_amp.html"
      },
      {
        "label": "Caixin：Unitree fast-tracks Shanghai IPO at $6.2B target",
        "url": "https://www.caixinglobal.com/2026-05-26/unitree-fast-tracks-shanghai-ipo-with-target-valuation-of-62-billion-102447449.html"
      }
    ]
  },
  {
    "id": "neura-humanoid-megaround-2026",
    "date": "2026-06-10",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "NEURA 拿下 14 亿美元欧洲最大机器人轮 — 人形融资进入「十亿美元」时代",
    "body": "**6 月**，德国 **NEURA Robotics（David Reger）**完成最高 **14 亿美元 C 轮**（Tether、高通、英伟达、博世等），估值约 70 亿美元——**欧洲机器人史上最大单轮**。同期 **Figure（$39B）**、**Apptronik（$5.3B）**、**Skild（$14B）**、**1X NEO 家用人形 $20k 预售**接连刷新。**非共识**：人形单轮中位数已达约 1.1 亿美元，资本不再赌「能不能动」，而是赌**谁能先规模化量产**。",
    "persons": [
      {
        "id": "reger",
        "name": "David Reger（NEURA）"
      },
      {
        "id": "brettadcock",
        "name": "Brett Adcock（Figure）"
      },
      {
        "id": "jeffcardenas",
        "name": "Jeff Cardenas（Apptronik）"
      }
    ],
    "sources": [
      {
        "label": "CNBC：NEURA Robotics funding for AI humanoid robots（2026-06-10）",
        "url": "https://www.cnbc.com/2026/06/10/neura-robotics-funding-ai-humanoid-robots.html"
      },
      {
        "label": "The Robot Report：NEURA raises up to $1.4B Series C",
        "url": "https://www.therobotreport.com/neura-robotics-raise-up-1-4b-in-series-c-funding-physical-ai/"
      }
    ]
  },
  {
    "id": "anthropic-65b-series-h-2026",
    "date": "2026-05-28",
    "type": "funding",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": false,
    "title": "Anthropic 完成 650 亿美元 H 轮、估值近 1 万亿，逼近 IPO",
    "body": "**5 月**，Anthropic 完成 **650 亿美元 H 轮**（迄今最大 AI 股权融资），投后估值约 **9650 亿美元**，由 **Altimeter（Brad Gerstner）/ Dragoneer（Marc Stad）/ Greenoaks（Neil Mehta）/ 红杉** 共同领投；2 月刚完成 300 亿美元 G 轮（$380B）。公司已秘密递交 IPO 文件。**非共识**：红杉同时押注 OpenAI 与 Anthropic，打破「不投直接竞品」的旧规矩——在这轮 AI，错过比押错更可怕。",
    "persons": [
      {
        "id": "damodei",
        "name": "Dario Amodei"
      },
      {
        "id": "daniela",
        "name": "Daniela Amodei"
      },
      {
        "id": "bradgerstner",
        "name": "Brad Gerstner（Altimeter）"
      },
      {
        "id": "marcstad",
        "name": "Marc Stad（Dragoneer）"
      },
      {
        "id": "neilmehta",
        "name": "Neil Mehta（Greenoaks）"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch：Anthropic raises $65 billion, nears $1T（2026-05-28）",
        "url": "https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/"
      },
      {
        "label": "Anthropic：Series H",
        "url": "https://www.anthropic.com/news/series-h"
      }
    ]
  },
  {
    "id": "karpathy-anthropic-2026",
    "date": "2026-05-19",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Karpathy 暂停 Eureka Labs 加入 Anthropic 预训练团队",
    "body": "**5 月 19 日**，OpenAI 联合创始人、前特斯拉 AI 负责人 **Andrej Karpathy** 暂停其 AI 教育公司 Eureka Labs，加入 **Anthropic** 预训练团队（向 Nick Joseph 汇报），用 **Claude 加速预训练研究**。**非共识**：Anthropic 把他放在「用 AI 做 AI 研究」的位置，传递的信号是——保持前沿竞争力靠的是**AI 辅助研究**，而非单纯堆算力。",
    "persons": [
      {
        "id": "karpathy",
        "name": "Andrej Karpathy"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch：Andrej Karpathy joins Anthropic's pre-training team（2026-05-19）",
        "url": "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/"
      }
    ]
  },
  {
    "id": "ferrari-luce-ive-openai-2026",
    "date": "2026-05-25",
    "type": "trend",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Jony Ive 设计法拉利首款纯电 Luce；OpenAI/io 设备跳票到 2027",
    "body": "**5 月 25 日**，**Jony Ive** 与 Marc Newson 通过 LoveFrom 设计的**法拉利 Luce**（法拉利首款纯电、首款五座，约 64 万美元）在罗马揭幕。另一边，io + OpenAI 的首款设备被确认为**带摄像头的无屏智能音箱（$200–300）**，并从 2026 **跳票至 2027 年初**。**非共识**：当所有人盯着「Ive 的 AI 设备」，他交出的第一件标志性作品却是一辆**车**——硬件设计的下一个战场未必在口袋里。",
    "persons": [
      {
        "id": "jonyive",
        "name": "Jony Ive"
      }
    ],
    "sources": [
      {
        "label": "Dezeen：Electric Ferrari Luce by Jony Ive & Marc Newson（2026-05-25）",
        "url": "https://www.dezeen.com/2026/05/25/electric-ferrari-luce-jony-ive-marc-newson-lovefrom/"
      },
      {
        "label": "MacRumors：Everything we know about OpenAI's device",
        "url": "https://www.macrumors.com/2026/05/29/everything-we-know-about-openai-iphone-rival/"
      }
    ]
  },
  {
    "id": "deepseek-v4-china-llm-ipo-2026",
    "date": "2026-04-24",
    "type": "funding",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": false,
    "title": "DeepSeek-V4 开源 + 首次外部融资约 74 亿美元；中国大模型集体冲刺 IPO",
    "body": "**4 月 24 日**，**DeepSeek（梁文锋）**开源 **V4 预览版**（V4-Pro 1.6 万亿参数、V4-Flash 2840 亿，均 100 万 token 上下文），并据报完成**首次外部融资约 74 亿美元、估值 500 亿美元+**（腾讯、宁德时代）。同期 **Zhipu/Z.ai（唐杰）与 MiniMax（闫俊杰）港股上市**、**Moonshot（杨植麟）20 亿美元 @ 200 亿**。**非共识**：一向不融资的 DeepSeek 也开闸，说明开源大模型的竞争已从「比聪明」转向**比资本与算力的持久战**。",
    "persons": [
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek）"
      },
      {
        "id": "jietang",
        "name": "唐杰（Zhipu）"
      },
      {
        "id": "yanjunjie",
        "name": "闫俊杰（MiniMax）"
      },
      {
        "id": "yangzhilin",
        "name": "杨植麟（Moonshot）"
      }
    ],
    "sources": [
      {
        "label": "Silicon Republic：DeepSeek raises $7.4bn at $50bn+ valuation",
        "url": "https://www.siliconrepublic.com/business/the-information-deepseek-raises-7-4bn-at-50bn-plus-valuation"
      },
      {
        "label": "CNBC：MiniMax Hong Kong IPO; AI tigers Zhipu（2026-01-09）",
        "url": "https://www.cnbc.com/2026/01/09/minimax-hong-kong-ipo-ai-tigers-zhipu.html"
      }
    ]
  },
  {
    "id": "pritzker-2026-radic",
    "date": "2026-03-12",
    "type": "trend",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "2026 普利兹克奖授予智利建筑师 Smiljan Radić",
    "body": "**3 月 12 日**，**Smiljan Radić** 获 2026 年**普利兹克奖**，成为第二位获此荣誉的智利建筑师，以诗意、实验性与材料驱动的作品著称（2014 年伦敦蛇形画廊展亭、比奥比奥地区剧院）。同年 **Níall McLaughlin** 获 RIBA 皇家金奖、**Frida Escobedo** 成为大都会博物馆 154 年来首位设计独立展翼的女性。**非共识**：在 AI 席卷设计话语的一年，建筑界把最高荣誉给了**最「慢」、最重手工与场所**的一脉。",
    "persons": [
      {
        "id": "radic",
        "name": "Smiljan Radić"
      }
    ],
    "sources": [
      {
        "label": "Dezeen：Smiljan Radić wins Pritzker 2026（2026-03-12）",
        "url": "https://www.dezeen.com/2026/03/12/smiljan-radic-wins-pritzker-architecture-prize-2026/"
      },
      {
        "label": "The Pritzker Architecture Prize",
        "url": "https://www.pritzkerprize.com/laureates/smiljan-radic-clarke"
      }
    ]
  },
  {
    "id": "openai-122b-vc-records-2026",
    "date": "2026-03-31",
    "type": "funding",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": false,
    "title": "OpenAI 完成 1220 亿美元融资、估值 8520 亿；VC 创纪录募资为 AI 加注",
    "body": "**3 月 31 日**，**OpenAI（Sam Altman）**完成约 **1220 亿美元**融资、估值 **8520 亿美元**（亚马逊 $50B、英伟达 + 软银各 $30B），IPO 预期 2026。背后是 VC 史上最大军备竞赛：**a16z ~$15B+、Thrive $10B、红杉 $7B、Founders Fund $6B、Lightspeed $9B+、Lux $1.5B**。**非共识**：当单家实验室一轮融资抵得上一支顶级基金的全部弹药，**「资本规模」本身正成为前沿门槛**。",
    "persons": [
      {
        "id": "altman",
        "name": "Sam Altman"
      },
      {
        "id": "joshkushner",
        "name": "Josh Kushner（Thrive）"
      },
      {
        "id": "marca16z",
        "name": "Marc Andreessen（a16z）"
      },
      {
        "id": "masason",
        "name": "孙正义（SoftBank）"
      },
      {
        "id": "roelofbotha",
        "name": "Roelof Botha（Sequoia）"
      }
    ],
    "sources": [
      {
        "label": "CNBC：OpenAI funding round, IPO（2026-03-31）",
        "url": "https://www.cnbc.com/2026/03/31/openai-funding-round-ipo.html"
      },
      {
        "label": "TechCrunch：Sequoia raises $7B to expand AI bets",
        "url": "https://techcrunch.com/2026/04/16/new-leaders-new-fund-sequoia-has-raised-7b-to-expand-its-ai-bets/"
      }
    ]
  },
  {
    "id": "apple-to-ai-design-exodus-2026",
    "date": "2026-06-03",
    "type": "relationship",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "苹果设计人才大迁徙：Alan Dye 去 Meta，iPhone 设计师转投 AI 硬件",
    "body": "**2025 末至 2026**，苹果设计核心持续外流：领导人机界面十年的 **Alan Dye** 加入 **Meta Reality Labs**（主攻智能眼镜）；**iPhone Air** 设计师 **Abidur Chowdhury** 出任 Brett Adcock 的 AI 硬件公司 **Hark** 设计总监；前苹果工业设计 VP **Evans Hankey** 与 iPhone 设计师 **Tang Tan** 在 **io/OpenAI** 打造 AI 设备。**非共识**：AI 硬件的真正稀缺资源不是模型，而是**会做实体产品的顶级设计师**——这场争夺才刚开始。",
    "persons": [
      {
        "id": "alandye",
        "name": "Alan Dye"
      },
      {
        "id": "abidurchowdhury",
        "name": "Abidur Chowdhury"
      },
      {
        "id": "evanshankey",
        "name": "Evans Hankey"
      },
      {
        "id": "tangtan",
        "name": "Tang Tan"
      },
      {
        "id": "jonyive",
        "name": "Jony Ive"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch：Meta poaches Apple design exec Alan Dye（2025-12-03）",
        "url": "https://techcrunch.com/2025/12/03/meta-poaches-apple-design-exec-alan-dye/"
      },
      {
        "label": "TechCrunch：Former Apple designer building AI interface at Hark",
        "url": "https://techcrunch.com/2026/03/24/meet-the-former-apple-designer-building-a-new-ai-interface-at-hark/"
      }
    ]
  },
  {
    "id": "engineai-hkipo-factory-2026",
    "date": "2026-06-12",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "EngineAI 6 月 1 日开厂「15 分钟一台」、12 日递表港股 — 赵同阳用「工厂叙事」抢人形 IPO 第二张门票",
    "body": "继宇树之后，**众擎机器人（EngineAI）**于 **6 月 12 日**向港交所**秘密递表**（中金、中信建投保荐）。其打法是**先量产、再上市**：6 月 1 日在深圳启用 **1.2 万平方米工厂**，首批 T800 人形下线，**每 15 分钟一台、规划年产 1 万台**；4 月 B 轮 **2 亿美元**（河南中金汇融、**立讯精密**领投）把估值推过 **100 亿元（15 亿美元）**。**非共识**：当多数人形公司还在比拼 demo 与参数，赵同阳（曾与小鹏合创鹏行智能）押的是**制造产能**——在这条赛道，「能不能造出来、造多便宜」正取代「能不能动」成为新的分水岭。",
    "persons": [
      { "id": "zhaotongyang", "name": "赵同阳（EngineAI / 众擎）" }
    ],
    "sources": [
      { "label": "Bloomberg：EngineAI said to file for Hong Kong IPO（2026-06-12）", "url": "https://www.bloomberg.com/news/articles/2026-06-12/humanoid-robot-manufacturer-engineai-is-said-to-file-for-hong-kong-ipo" },
      { "label": "eWeek：EngineAI opens factory, one humanoid every 15 minutes", "url": "https://www.eweek.com/news/engineai-humanoid-robot-factory-apac/" }
    ]
  },
  {
    "id": "china-humanoid-national-deployment-2026",
    "date": "2026-06-10",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "中国给人形机器人下了「军令状」— 6 月底交方案、年底 1 万台「进工位」",
    "body": "中国启动**全国性专项**，要求地方政府与国企在**不到半年内**证明人形机器人的真实可用性：实施方案 **6 月底**前上报、进展 **11 月底**前复盘，目标年底关键产品进入**「工作模式」**，北京一地就要落地 **100+ 高价值场景**、推动 **1 万台**部署。资本同步井喷——**Q1 2026 行业融资 681 亿元、已超 2025 全年**，23 家公司进入「百亿俱乐部」。**非共识**：这是一次**自上而下的「demo 转真活」forcing function**，把行业从「发布会竞赛」逼向「交付与复购」；真正的考题不是出货量，而是**机器人能否在真实工位上稳定干满一个班**。",
    "persons": [],
    "sources": [
      { "label": "SCMP：China fast-tracks humanoid robots into industry", "url": "https://www.scmp.com/economy/china-economy/article/3356629/china-fast-tracks-humanoid-robots-and-embodied-ai-industry-under-nationwide-programme" },
      { "label": "Global Times：China's humanoid robot industry accelerates commercialization", "url": "https://www.globaltimes.cn/page/202606/1362565.shtml" }
    ]
  },
  {
    "id": "apple-ios27-extensions-ai-marketplace-2026",
    "date": "2026-06-08",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "苹果把 Siri 变成「AI 商店」— iOS 27 Extensions 让 Claude/Gemini/ChatGPT/Grok 同台，Anthropic 首次拿到 10 亿 iPhone 入口",
    "body": "**6 月 8 日 WWDC**，苹果用 **iOS 27 Extensions** 把 Siri、写作工具、Image Playground 向**第三方 AI 开放**：用户可在设置里把 **Claude、Gemini、ChatGPT、Grok** 设为默认 AI，苹果结束「只接 ChatGPT」的独家模式。**非共识**：这等于苹果亲手把通往 **10 亿+设备**的分发渠道，开放给 **Anthropic / OpenAI / Google** 三家对手同台竞价——**Dario Amodei** 的 Claude 第一次成为 iPhone 系统级选项。对模型厂商，这是继 API 之后**最大的一次「默认入口」红利**；对苹果，则是承认**在 AI 时代，平台中立比自研垄断更划算**。",
    "persons": [
      { "id": "damodei", "name": "Dario Amodei（Anthropic / Claude）" },
      { "id": "altman", "name": "Sam Altman（OpenAI / ChatGPT）" }
    ],
    "sources": [
      { "label": "AI Weekly：iOS 27 Extensions opens third-party AI marketplace", "url": "https://aiweekly.co/node/2611" },
      { "label": "MLQ：Apple rebuilds Siri on Google Gemini and Nvidia Blackwell", "url": "https://mlq.ai/news/apple-rebuilds-siri-on-google-gemini-models-and-nvidia-blackwell-gpus-in-landmark-wwdc-partnership/" }
    ]
  },
  {
    "id": "pentagon-drops-claude-too-safe-2026",
    "date": "2026-06-08",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Claude「太安全」被请出五角大楼机密系统 — Anthropic 拒绝放开大规模监控/自主武器，OpenAI/Google/xAI 接盘",
    "body": "到 **2026 年 6 月**，美国国防部已就**机密系统**与 **OpenAI、Google、微软**敲定多供应商合同，启动替换原本主力的 **Anthropic Claude**。导火索是 Anthropic **拒绝为大规模监控与自主武器松绑护栏**，国防部长 Hegseth 干脆把其产品列为**「供应链风险」**。**非共识**：在商业市场，**安全对齐**是 Anthropic 的卖点；但在军方，它成了**被替换的理由**。Anthropic 已起诉挑战该认定——这场官司把「**AI 安全到底是护城河还是枷锁**」摆上了台面。",
    "persons": [
      { "id": "damodei", "name": "Dario Amodei（Anthropic）" },
      { "id": "altman", "name": "Sam Altman（OpenAI）" }
    ],
    "sources": [
      { "label": "TechTimes：Pentagon racing to replace Anthropic's Claude", "url": "https://www.techtimes.com/articles/317998/20260608/pentagon-racing-replace-anthropics-claude-because-it-was-too-safe-war.htm" },
      { "label": "CryptoBriefing：Pentagon tests rival AI models to replace Claude", "url": "https://cryptobriefing.com/pentagon-tests-ai-models-replace-anthropic-claude-2/" }
    ]
  },
  {
    "id": "apple-siri-rents-gemini-nvidia-2026",
    "date": "2026-06-08",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "苹果在 WWDC 承认前沿模型造不出来 — Siri 改租 Google Gemini、跑在 Nvidia Blackwell，年付约 10 亿美元",
    "body": "**6 月 8 日 WWDC**，苹果把重写后的 Siri 建在**谷歌 Gemini** 之上，旗舰 **AFM Cloud Pro** 跑在 **Google Cloud 的 Nvidia Blackwell B200** 上，据彭博这笔合作**年付约 10 亿美元**。**非共识**：那个以「全栈自研」立身的苹果，在 AI 上选择了**租而不造**——把最关键的智能层外包给最大的竞争对手之一。对硬件行业的信号很硬核：**即便手握 10 亿台设备与顶级芯片，也未必追得上前沿模型**；终端巨头的护城河正从「自研一切」转向「**谁的入口默认在用户手边**」。",
    "persons": [],
    "sources": [
      { "label": "MLQ：Apple rebuilds Siri on Gemini + Nvidia Blackwell（$1B/yr）", "url": "https://mlq.ai/news/apple-rebuilds-siri-on-google-gemini-models-and-nvidia-blackwell-gpus-in-landmark-wwdc-partnership/" },
      { "label": "CNBC：Apple WWDC 2026 Siri AI reveal", "url": "https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html" }
    ]
  },
  {
    "id": "liquid-glass-refined-figma-native-2026",
    "date": "2026-06-08",
    "type": "trend",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Liquid Glass 从争议走向标配 — 苹果 WWDC 给它加「可调节」开关，Figma 同步原生支持",
    "body": "**6 月 8 日 WWDC**，苹果没有抛弃去年争议缠身的 **Liquid Glass**，而是给它做了**可调迭代**：用户能**调强或调弱**其玻璃质感，并采用更**分层**的处理；同期 **Figma** 原生支持 Liquid Glass 效果，把这套玻璃拟物从「苹果系统特效」变成**设计师手里的通用组件**。**含义**：一年前被批「华而不实」的设计语言，正沿着**「先争议、再可调、后工具化」**的路径沉淀为行业默认——glassmorphism 这次大概率不是昙花一现，而是进入了工具链。",
    "persons": [
      { "id": "mollyanderson", "name": "Molly Anderson（Apple 工业/界面设计）" }
    ],
    "sources": [
      { "label": "Web Designer News：New Apple Design — Liquid Glass, Figma integration（WWDC 2026）", "url": "https://webdesignernews.com/new-apple-design-is-here-black-glass-figma-integration-liquid-icons-more-wwdc-2026/" },
      { "label": "Figma Community：Liquid Glass Elements", "url": "https://www.figma.com/community/file/1563175178507607936/liquid-glass-elements" }
    ]
  },
  {
    "id": "cognition-1b-26b-devin-2026",
    "date": "2026-05-27",
    "type": "funding",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "Cognition $1B、估值 8 个月翻 2.5 倍到 260 亿 — 写自己 89% 代码的 Devin 让「替代工程师」成最贵叙事",
    "body": "AI 编码公司 **Cognition**（Devin 母公司，创始人 **Scott Wu**）完成 **10 亿美元** D 轮、估值 **260 亿美元**，较 8 个月前的 102 亿**翻 2.5 倍**；**Lux Capital、General Catalyst、8VC** 联合领投，Founders Fund（Thiel）跟投。**非共识**：与 Copilot / Cursor「**辅助**人写代码」不同，Devin 主打**自主接管并执行任务**，企业用量 2026 年涨 **10 倍以上**、ARR 达 **4.92 亿美元**，且 Cognition **自身 89% 的代码已由 AI 写**。这把「**AI 替代工程师**」从口号变成可计价的叙事——也是这一轮估值最贵的赌注之一。",
    "persons": [
      { "id": "joshwolfe", "name": "Josh Wolfe（Lux Capital，领投）" }
    ],
    "sources": [
      { "label": "Bloomberg：Cognition raises $1B at $26B value", "url": "https://www.bloomberg.com/news/articles/2026-05-27/ai-coding-startup-cognition-raises-1-billion-at-26-billion-value" },
      { "label": "TechCrunch：Cognition raises $1B at $25B pre-money", "url": "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/" }
    ]
  },
  {
    "id": "innoangel-rmb-early-fund-revival-2026",
    "date": "2026-06-05",
    "type": "funding",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "人民币早期科技基金回暖 — 英诺科创三期 6 月 5 日首关 15 亿，国家引导基金首批签约",
    "body": "6 月 5 日，**英诺基金**（创始合伙人 **李竹**）宣布科创三期基金首轮关账 **15 亿元**，聚焦前沿科技与 AI 的早期投资，是**国家创投引导基金首批签约基金**之一；同日东风牵头的「军山产业投资基金」在武汉经开区落地、规模 10 亿元。**信号**：在募资寒冬背景下，**国资引导 + 产业资本（CVC）**正成为人民币早期基金重新启动的双引擎——早期硬科技的钱并未消失，而是换了出资人结构。",
    "persons": [
      { "id": "lizhu", "name": "李竹（英诺基金）" }
    ],
    "sources": [
      { "label": "投资界：融资 24h（2026-06-05）", "url": "https://news.pedaily.cn/202606/564676.shtml" }
    ]
  },
  {
    "id": "a16z-neuberger-geopolitics-2026",
    "date": "2026-06-04",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "a16z 把美国前副国安顾问收入合伙人席 — 风投从「投公司」公开走向「投地缘」",
    "body": "6 月 4 日，**a16z** 宣布聘前白宫副国家安全顾问 **Anne Neuberger** 为 General Partner 兼全球事务负责人，主导与盟国在 **AI、机器人、国防、网络安全**的技术合作，同时披露已开设东京办公室、完成 100+ 国际投资。**非共识**：这是头部美元基金把**地缘政治议程显性写进合伙人结构**的标志性一步——风投不再声称中立，而是公开服务「America and her allies」，与其 American Dynamism（基金从 2023 年 6 亿美元扩到 2026 年约 11.8 亿美元）一脉相承。「**政府高官→顶级 VC 合伙人**」的旋转门，正在成为前沿科技投资的新常态。",
    "persons": [
      { "id": "neuberger", "name": "Anne Neuberger（a16z）" },
      { "id": "marca16z", "name": "Marc Andreessen（a16z）" }
    ],
    "sources": [
      { "label": "a16z：A New Chapter in a16z's Global Mission", "url": "https://a16z.com/a16zs-global-mission/" },
      { "label": "Crunchbase：a16z American Dynamism / new funds", "url": "https://news.crunchbase.com/venture/a16z-15b-new-funds-american-dynamism-ben-horowitz/" }
    ]
  },
  {
    "id": "defense-tech-exit-phase-2026",
    "date": "2026-06-04",
    "type": "trend",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "国防科技 5 个月吸金 146 亿美元超去年全年 — 两年「只进不出」的热钱进入兑现期",
    "body": "据 Crunchbase，2026 年前五个月国防 / 国安赛道已吸金 **146 亿美元、107 轮**，超过 2025 全年 96 亿的历史纪录；**Anduril** 上月 50 亿美元 H 轮、估值 305 亿，成为全球最值钱的风投支持国防公司。真正的拐点是**资金端转向退出**：AI 无人机公司 Swarmer 上市首日暴涨 500%+，近 **50 家**国防公司被列为「大概率 IPO 候选」（Anduril、Shield AI、True Anomaly、Sierra Space）。**含义**：持续两年的国防热钱正从「下注」切换到「**收割**」，下一阶段比拼的是谁能真正走通二级市场。",
    "persons": [
      { "id": "katherineboyle", "name": "Katherine Boyle（a16z American Dynamism）" },
      { "id": "joshwolfe", "name": "Josh Wolfe（Lux Capital）" }
    ],
    "sources": [
      { "label": "Crunchbase：Defense-tech venture funding all-time record", "url": "https://news.crunchbase.com/defense-tech/startup-venture-funding-all-time-record-ai-anduril/" }
    ]
  },
  {
    "id": "meta-tulloch-talent-war-murati-2026",
    "date": "2026-06-04",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "史上最贵个人挖角的余波 — Meta 用 15 亿美元抽走 Tulloch，Murati 18 个月后首度回应",
    "body": "6 月 4 日，**Mira Murati** 在沉默 18 个月后接受彭博专访。面对 Meta 此前以**六年约 15 亿美元**天价挖走联合创始人 **Andrew Tulloch**（现于 Meta 超级智能实验室向 Alexandr Wang 汇报）、并持续招揽 Thinking Machines 多名研究员，她淡化处理，称前沿实验室从零搭建本就动荡、「**薪酬重要但不是全部**」。**非共识**：在 2025-26 的 AI 人才军备竞赛里，最贵的不是算力而是**少数能从零训练前沿模型的人**；而 Murati 押注的差异化方向是**交互模型（interaction models）**，刻意不与 OpenAI / Google 的实时语音正面相撞。",
    "persons": [
      { "id": "miramurati", "name": "Mira Murati（Thinking Machines）" },
      { "id": "tulloch", "name": "Andrew Tulloch（Meta）" }
    ],
    "sources": [
      { "label": "TechCrunch：Mira Murati steps back into the spotlight, carefully", "url": "https://techcrunch.com/2026/06/04/mira-murati-steps-back-into-the-spotlight-carefully/" },
      { "label": "Calcalist：The $1.5 billion engineer", "url": "https://www.calcalistech.com/ctechnews/article/skr56vtpgl" }
    ]
  },
  {
    "id": "deepseek-first-external-funding-2026",
    "date": "2026-06-03",
    "type": "funding",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "DeepSeek 首次对外融资约 74 亿美元 — 梁文锋自掏 200 亿元死守控制权",
    "body": "据路透 / 彭博 6 月 3 日报道，**DeepSeek** 启动**史上第一次外部融资**，规模约 **500 亿元人民币（~74 亿美元）**，投后估值 **520 亿–590 亿美元**。结构上最反常的是：创始人 **梁文锋个人认购 200 亿元**，腾讯拟投约 100 亿、宁德时代约 50 亿，确保其继续以**异常独立**的方式掌控公司，并坚持**开源 + AGI** 路线。在国产「六小龙」纷纷抢港股 / A 股 IPO 之际，DeepSeek 反其道靠一级市场和**创始人重仓**维持自治——这是对「AI 公司必须开放股权换增长」的非共识下注。（注：数字为消息人士引述，尚未官宣。）",
    "persons": [
      { "id": "liangwenfeng", "name": "梁文锋（DeepSeek）" }
    ],
    "sources": [
      { "label": "CNBC：DeepSeek slated to draw $7B in maiden fundraising", "url": "https://www.cnbc.com/2026/06/03/deepseek-slated-to-draw-7-billion-in-maiden-fundraising-sources-say.html" },
      { "label": "TechStartups：DeepSeek to raise $7.4B in first funding round", "url": "https://techstartups.com/2026/06/03/deepseek-set-to-raise-7-4-billion-in-first-funding-round-targeting-valuation-as-high-as-59-billion/" }
    ]
  },
  {
    "id": "astribot-tencent-roboticsx-bround-2026",
    "date": "2026-06-03",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "腾讯 Robotics X「一号员工」星尘智能 3 个月连融 3 轮破百亿 — 绳驱本体逆主流押注",
    "body": "6 月 3 日，**星尘智能（Astribot）**官宣 B 轮**超 10 亿元**融资，**3 个月内连融 3 轮**、投后估值**突破百亿元**。其非共识在技术路线：当行业普遍用刚性关节 / 谐波减速器时，星尘坚持 **绳驱（rope-driven）本体**，并自称**全球首个量产绳驱 AI 机器人公司**，2025 年底已启动**千台级交付**。团队属于**腾讯 Robotics X 实验室外溢系族**——创始人 **来杰**是该实验室一号员工、主导过轮腿机器人 Ollie，创始核心 6 人均出自此。**含义**：人形赛道在「关节流派」之外，正跑出一条以**柔顺操作**为卖点的差异化分支。",
    "persons": [
      { "id": "laijie", "name": "来杰（星尘智能）" }
    ],
    "sources": [
      { "label": "证券时报：星尘智能完成超 10 亿元 B 轮融资", "url": "https://www.stcn.com/article/detail/3941094.html" },
      { "label": "深圳新闻网：星尘智能估值破百亿", "url": "https://www.sznews.com/news/content/2026-06/05/content_32078868.htm" }
    ]
  },
  {
    "id": "figma-state-designer-claude-2026",
    "date": "2026-06-03",
    "type": "trend",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "「会写代码的设计师」从边缘变成中位数 — Figma 年报：Claude 使用率飙至 78%、半数已把 AI 代码推上生产",
    "body": "Figma《State of the Designer 2026》披露，设计师平均工具栈一年内从 3 个膨胀到 **7 个**，**Claude** 使用率从 52% 飙到 **78%**，成为设计师最常用的 AI 工具。更反共识的是：**约一半受访者已把 AI 生成的代码推到生产环境**，而其中**只有约 20% 自称是 design engineer**——绝大多数是「直到最近还从没碰过代码库」的传统设计师。**含义**：「设计 / 工程边界消融」不再是预言，而是已发生的**中位数现实**；像 **Jordan Singer** 这类「设计 + AI 工具」路径，正从个案变成行业默认技能栈。",
    "persons": [
      { "id": "jordansinger", "name": "Jordan Singer（Figma）" }
    ],
    "sources": [
      { "label": "Figma Blog：State of the Designer 2026", "url": "https://www.figma.com/blog/state-of-the-designer-2026/" }
    ]
  },
  {
    "id": "microsoft-mai-thinking-decouple-2026",
    "date": "2026-06-02",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "微软被「放生」六个月后亮剑 — Suleyman 用零蒸馏的 MAI-Thinking-1 与 OpenAI 划清界限",
    "body": "6 月 2 日 Build 2026，微软 AI 一口气发布七个自研 MAI 模型，旗舰是首个推理模型 **MAI-Thinking-1**（约 1 万亿总参 / 350 亿激活，256K 上下文），关键卖点是**从零训练、零蒸馏第三方模型**——即不依赖 OpenAI 的输出。**Mustafa Suleyman** 罕见挑明：微软「**大约六个月前才被合同放生**」去正式追求超级智能，并称针对特定企业场景调优后**成本效率比 GPT-5.5 好约 10 倍**。这是双方关系从「**房客**」转向「**自建栈**」的最清晰信号——微软不弃 OpenAI，但开始平行造一套能完全独立的能力。",
    "persons": [
      { "id": "suleyman", "name": "Mustafa Suleyman（Microsoft AI）" }
    ],
    "sources": [
      { "label": "CNBC：Microsoft unveils new AI models to lessen reliance on OpenAI", "url": "https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html" },
      { "label": "VentureBeat：Microsoft AI chief says company was set free from OpenAI", "url": "https://venturebeat.com/technology/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence" }
    ]
  },
  {
    "id": "apple-post-ive-molly-anderson-2026",
    "date": "2026-06-02",
    "type": "relationship",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "后 Jony Ive 时代的 Apple 设计话事人是 Molly Anderson — 叙事从「天才总监」转向「平台扶持新生代」",
    "body": "Apple 在 Design Miami.Paris 重启并扩展「**Designers of Tomorrow**」计划，评委名单暴露了其当前设计权力结构：工业设计负责人 **Molly Anderson** 与 Faye Toogood、Samuel Ross 等同台。**非共识点**：**Jony Ive** 已彻底转向 OpenAI，Apple 的对外设计叙事**从「天才总监」转向「平台 + 工具赋能新生代」**，并把 iPad Pro / Apple Pencil 当作招募与品牌渗透的入口。图谱里多数人仍停留在「Ive = Apple 设计」，而真正的权力已交接——Anderson 是补上「**后 Ive 时代 Apple**」这条关系链的关键节点。",
    "persons": [
      { "id": "mollyanderson", "name": "Molly Anderson（Apple）" },
      { "id": "jonyive", "name": "Jony Ive（LoveFrom / 前 Apple）" }
    ],
    "sources": [
      { "label": "Dezeen：Apple Designers of Tomorrow emerging designers", "url": "https://www.dezeen.com/2026/06/02/apple-designers-tomorrow-emerging-designers/" }
    ]
  },
  {
    "id": "nvidia-cosmos3-world-model-2026",
    "date": "2026-06-01",
    "type": "trend",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "「世界模型」从论文走进货架 — 英伟达 Cosmos 3 抢在 LeCun、李飞飞之前把「物理大脑」开源商品化",
    "body": "6 月 1 日 GTC Taipei，英伟达发布 **Cosmos 3**，称其为业界**首个全开源、全模态**的物理 AI 基础模型，原生统一文本 / 图像 / 视频 / 环境声 / 动作五种模态，采用**双塔 mixture-of-transformers**（先推理后生成）架构，训练吃下约 **20 万亿 token**。**非共识点**在于：当 **Yann LeCun**（JEPA / 世界模型）与 **李飞飞**（空间智能 World Labs）还在为各自约 10 亿美元的初创做**路线之争**时，英伟达用「**开放权重 + 卖铲子**」的姿态直接把世界模型商品化，把学术分歧变成了生态卡位。黄仁勋称其为机器人开发的「**代际跃迁**」。**含义**：世界模型的竞争正从「谁的理论对」转向「谁的底座被更多机器人公司默认调用」。",
    "persons": [
      { "id": "lecun", "name": "Yann LeCun（AMI Labs）" },
      { "id": "feifei", "name": "李飞飞（World Labs）" }
    ],
    "sources": [
      { "label": "NVIDIA：Launches Cosmos 3, open frontier model for Physical AI", "url": "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Cosmos-3-the-Open-Frontier-Foundation-Model-for-Physical-AI/default.aspx" },
      { "label": "Axios：NVIDIA AI push with Cosmos 3 world model", "url": "https://www.axios.com/2026/06/01/nvidia-ai-push-cosmos-3-world-model" }
    ]
  },
  {
    "id": "anthropic-confidential-s1-2026",
    "date": "2026-06-01",
    "type": "funding",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Anthropic 抢在 OpenAI 前递交保密 IPO — 估值 9650 亿美元的「AI 第一股」要来了",
    "body": "6 月 1 日 **Anthropic** 向 SEC **保密递交 S-1 草案**，距其完成 **650 亿美元 H 轮、估值冲到 9650 亿美元**仅几天。这是首家在私募估值榜上**超越 OpenAI** 的公司，且明确**抢跑** OpenAI 的上市进程；其年化收入跑率据报已越过 **470 亿美元**，主要由 Claude 在编码与 agentic 工作流的企业采用驱动。**信号**：AI 实验室从「永远私募融资」转向公开市场的拐点正在出现——**Dario Amodei** 选择用 PBC（公益公司）结构带头叩开二级市场的门。",
    "persons": [
      { "id": "damodei", "name": "Dario Amodei（Anthropic）" }
    ],
    "sources": [
      { "label": "Anthropic：Confidential draft S-1 to the SEC", "url": "https://www.anthropic.com/news/confidential-draft-s1-sec" },
      { "label": "TechCrunch：Anthropic files to go public", "url": "https://techcrunch.com/2026/06/01/anthropic-files-to-go-public/" }
    ]
  },
  {
    "id": "ai-washing-layoffs-2026",
    "date": "2026-05-31",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "「AI 抢了设计岗」可能是个被滥用的封面故事 — MIT 学者：AI 是裁员的「完美借口」",
    "body": "当设计圈普遍焦虑「AI 取代设计师」时，MIT Sloan 荣休教授 **Paul Osterman** 给出反共识判断：AI 往往是裁员的「**完美借口**」——「它让裁员看起来不是我们的决定、不是我们的错，而是技术的错」。Fortune 点名 Wix（裁约 1000 人 / 20%）、Block、Snap、Atlassian 等，指出「**用 AI 洗白裁员**」其实延续了 20 年的精简化老剧本，只是换了技术外衣。**含义**：把设计岗位流失全归因于 AI，可能误读了行业真实的结构性变化——成本周期与组织选择，往往比模型能力更能解释这一轮收缩。",
    "persons": [],
    "sources": [
      { "label": "Fortune：Tech companies AI-washing layoffs", "url": "https://fortune.com/2026/05/31/tech-companies-ai-washing-layoffs-wix-block-snap-atlassian-disposable-workers/" }
    ]
  },
  {
    "id": "bigtech-ai-hardware-mobilization-2026",
    "date": "2026-06-03",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "大厂集体下场 AI 硬件 — 2026 是巨头从『软件智能』走向『随身设备』的总动员年",
    "body": "2026 年六家科技巨头几乎同时把战线推到随身硬件：**OpenAI** 以约 **64 亿美元**收购 Jony Ive 的 io，做一款无屏、语音优先的 AI 陪伴设备（富士康量产 4000-5000 万台，首发已推迟至不早于 2027）；**Google**（Rick Osterloh）在 I/O 2026 发布 Android XR + Gemini 智能眼镜，**10 月 14 日开售**（基础款 $799、无屏音频款 $299）；**Meta**（Boz）在 Reality Labs 累计亏损约 **700 亿美元**后裁员转向 AI 眼镜，Ray-Ban Meta 已售 **200 万+**；**Apple**（Mike Rockwell，Vision Pro 之父）接管 Siri、用 LLM 重写，智能家居中枢卡在这版 Siri 上；**微软**（Suleyman）发 MAI 七模型并预告『办公徽章/桌面伴侣』；**亚马逊**（Panos Panay）重构 Alexa+、传出代号 Transformer 的 AI 手机。**非共识判断**：表面是『百镜大战、百花齐放』，真相是**路线在收敛**——除 OpenAI 赌无屏专用设备的激进路线外，Google/Meta/三星/亚马逊高度一致地押『AI 眼镜 + 云端大模型』，把手机降级为算力中转；胜负手不在硬件形态，而在**谁的端侧助理能默认常驻、抢到用户的注意力入口**。**实操含义**：(1) 独立 AI 硬件创业者别和大厂拼形态，要拼大厂做不了的垂直场景与数据闭环（医疗、陪伴、专业工具）；(2) 看这条赛道盯三件事——分发（默认入口）、续航（全天候）、隐私（本地化），谁先同时跨过谁赢；(3) 读者判断一款 AI 设备能否活下来，问它『取代手机的哪个具体动作』，泛泛的『AI 助手』几乎必死，Humane AI Pin 已是前车之鉴。",
    "persons": [
      { "id": "jonyive", "name": "Jony Ive（OpenAI/io）" },
      { "id": "osterloh", "name": "Rick Osterloh（Google）" },
      { "id": "bosworth", "name": "Andrew Bosworth（Meta）" },
      { "id": "rockwell", "name": "Mike Rockwell（Apple）" },
      { "id": "suleyman", "name": "Mustafa Suleyman（微软）" },
      { "id": "panospanay", "name": "Panos Panay（亚马逊）" }
    ],
    "sources": [
      { "label": "Axios：OpenAI aims to debut first device in 2026（2026-01-19）", "url": "https://www.axios.com/2026/01/19/openai-device-2026-lehane-jony-ive" },
      { "label": "Google Blog：Intelligent eyewear with Gemini is coming this fall（2026）", "url": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/" },
      { "label": "Glass Almanac：Meta reveals prototype AR glasses with AI display（2026）", "url": "https://glassalmanac.com/meta-reveals-prototype-ar-glasses-with-ai-display-in-2026-why-it-matters-now/" },
      { "label": "AppleInsider：New Siri chief is replacing existing teams with Vision Pro staffers", "url": "https://appleinsider.com/articles/25/04/22/new-siri-chief-is-replacing-existing-teams-with-vision-pro-staffers" }
    ]
  },
  {
    "id": "embodied-ai-valuation-vs-zhuxiaohu-2026",
    "date": "2026-06-03",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "顶级基金把人形机器人估值半年翻倍，朱啸虎却在『成批退出』— 具身智能的共识与裂缝",
    "body": "2026 年具身智能出现罕见的多空对峙。一边是海外大钱疯狂加注：**Physical Intelligence** 洽谈约 **10 亿美元**新轮、估值冲 **110 亿+**（四个月内从 56 亿翻倍），Founders Fund、Lux、贝索斯、NVIDIA（NVentures）同台；**Figure** C 轮投后 **390 亿**；**宇树**科创板 IPO 目标估值约 **62 亿美元**、人形出货全球第一。另一边，**朱啸虎**（金沙江）公开称正『**成批退出**人形机器人公司』，认为其商业模式与客户都还停留在想象，转而押注 AI 陪伴硬件。**非共识判断**：这不是简单的看多看空，而是**『基础模型层 vs 整机本体层』的估值错位**——海外大钱押的是 PI 这种『机器人大脑（基础模型）』、赌赢家通吃；朱啸虎看空的是『整机本体』缺乏清晰付费场景。两边其实都对，只是押在产业链的不同环节。**实操含义**：(1) 投具身智能先分清标的是『模型层』还是『本体层』，前者可容忍高估值（赢家通吃），后者必须看真实订单与单台毛利；(2) 读者看『量产』新闻别被话术带节奏，盯『谁在付费、单台毛利、复购』三个硬指标；(3) 已盈利的本体厂（宇树：出货全球第一、净利翻倍）与纯故事估值公司要区别对待，别用一个估值框架套全行业。",
    "persons": [
      { "id": "joshwolfe", "name": "Josh Wolfe（Lux）" },
      { "id": "jeffbezos", "name": "Jeff Bezos" },
      { "id": "jensenhuang", "name": "黄仁勋（NVIDIA）" },
      { "id": "zhuxiaohu", "name": "朱啸虎（金沙江）" }
    ],
    "sources": [
      { "label": "Bloomberg：Ex-DeepMind staffers' robotics startup in talks for $11B valuation（2026-03-27）", "url": "https://www.bloomberg.com/news/articles/2026-03-27/ex-deepmind-staffers-robotics-startup-in-talks-for-11-billion-valuation" },
      { "label": "Caixin Global：Unitree fast-tracks Shanghai IPO at $6.2B（2026-05-26）", "url": "https://www.caixinglobal.com/2026-05-26/unitree-fast-tracks-shanghai-ipo-with-target-valuation-of-62-billion-102447449.html" },
      { "label": "36氪：朱啸虎谈成批退出人形机器人、押注 AI 情绪价值硬件", "url": "https://eu.36kr.com/en/p/3366874398869250" }
    ]
  },
  {
    "id": "world-models-vs-llm-route-split-2026",
    "date": "2026-06-03",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "图灵巨头集体『叛逃』LLM — LeCun、李飞飞押注世界模型，与 DeepSeek/Kimi 的 LLM 狂奔正面分叉",
    "body": "2026 年 AI 学界出现明显的路线分叉。**Yann LeCun** 离开 Meta、创办 **AMI Labs**（种子轮 **10.3 亿美元**、估值 35 亿），公开判定纯自回归 LLM『将无法解决许多关键问题』，押注能理解物理、维持记忆、会规划的『**世界模型**』；**李飞飞** 的 World Labs 推出 **Marble**（首个商用 3D 世界模型）并融资 **10 亿美元**，主张『**空间智能**是语言之外的下一前沿』。另一边，LLM 主干仍在狂奔：**DeepSeek V4**（1.6 万亿参数）、**Kimi K2.5**、Mira Murati 的 Thinking Machines 计划 2026 发自研模型。**非共识判断**：市场倾向把『世界模型』读成 LLM 的竞品或证伪，但更可能是**互补的两层**——LLM 解决『语言/知识』，世界模型解决『感知/行动』，而具身智能（如 Physical Intelligence 的 π0）正是两者的缝合处。真正的风险不在谁对谁错，而在**世界模型尚无产品验证就已被给到 35-50 亿美元估值**。**实操含义**：(1) 读者别把『LeCun 看空 LLM』简单读成『LLM 要完』——他看空的是『纯自回归通向 AGI』，不是 LLM 没用；(2) 关注世界模型要盯『有没有真实下游（机器人/3D/仿真）买单』，Marble 先商业化再讲故事的路子走对了；(3) 押注 AI 人才与公司，先分清他在『语言层』还是『世界层』，两层的评估范式与退出路径完全不同。",
    "persons": [
      { "id": "lecun", "name": "Yann LeCun（AMI Labs）" },
      { "id": "feifei", "name": "李飞飞（World Labs）" },
      { "id": "liangwenfeng", "name": "梁文锋（DeepSeek）" },
      { "id": "yangzhilin", "name": "杨植麟（Kimi）" },
      { "id": "miramurati", "name": "Mira Murati（TML）" }
    ],
    "sources": [
      { "label": "MIT Technology Review：Yann LeCun's new venture is a contrarian bet against LLMs（2026-01-22）", "url": "https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/" },
      { "label": "TechCrunch：Fei-Fei Li's World Labs speeds up the world model race with Marble（2025-11-12）", "url": "https://techcrunch.com/2025/11/12/fei-fei-lis-world-labs-speeds-up-the-world-model-race-with-marble-its-first-commercial-product/" },
      { "label": "华尔街见闻：Kimi 账上百亿现金、K2.5 与港股 IPO 筹备", "url": "https://wallstreetcn.com/articles/3762395" }
    ]
  },
  {
    "id": "insta360-ipo-rd-arms-race-2026",
    "date": "2026-05-13",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "影石 IPO 第一年净利腰斩 — 上市不是终点，而是「被迫军备竞赛」的发令枪",
    "body": "影石创新（688775）2025 年 6 月科创板上市，首日 +285% 创纪录，90 后刘靖康成科创板敲钟第一人。但 IPO 后第一份完整成绩单是「增收不增利」：2025 营收 **97.41 亿**、研发 **15.3 亿**（近翻倍）；2026 一季度营收 **24.81 亿、同比 +83%**，归母净利却只剩 **8462 万、同比 -52%**，Q1 研发再 **+101% 到 4.65 亿**。刘靖康在致投资者信里把这定义为「主动收缩」短期利润、换「通往长期竞争格局的门票」。同期石头科技 2025 营收 **186.95 亿（+56.5%）**、归母净利 **-31%**。**非共识判断**：外界把这波消费硬件 IPO 读成「财富兑现」，真相恰好相反——**上市那一刻公司被钉死在公开市场的增长预期上，只能用利润去喂研发和市场，IPO 不是收割期的开始，而是被迫军备竞赛的发令枪**。影石的对手不是同行，而是大疆 Action 这种全产品线碾压的巨头，不烧研发护城河三年内被填平。**实操含义**：(1)创业者别把 IPO 当退出，要当成『公开承诺一条更陡的增长曲线』，上市前先想清楚二级市场会用什么指标拷问；(2)看这类标的别只盯营收增速，盯『研发费用率 + 净利率』这对剪刀差，张得越大说明竞争越凶、护城河越浅；(3)读者评估刚上市的硬件公司，问一句：它在为一个已验证的现金牛买单，还是在为一个还没赢的新战场烧钱——影石明显是后者。",
    "persons": [
      {
        "id": "liujingkang",
        "name": "刘靖康（影石）"
      },
      {
        "id": "changjing",
        "name": "昌敬（石头科技）"
      },
      {
        "id": "yangmeng",
        "name": "阳萌（安克）"
      }
    ],
    "sources": [
      {
        "label": "腾讯新闻：影石刘靖康最新手搓信——回应2025年为何增收不增利（2026-04-28）",
        "url": "https://news.qq.com/rain/a/20260428A07ZRA00"
      },
      {
        "label": "新浪财经：影石创新登陆科创板，市值超700亿（2025-06-11）",
        "url": "https://finance.sina.com.cn/stock/hkstock/hkzmt/2025-06-11/doc-inezsqmh2558203.shtml"
      }
    ]
  },
  {
    "id": "ai-companion-toy-cac-anthropomorphic-rule-2026",
    "date": "2026-05-29",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "网信办给「虚拟陪伴」划了红线 — AI 玩具最赚钱的那部分情绪价值，7 月 15 日起对未成年人违法",
    "body": "国家网信办发布《人工智能拟人化互动服务管理暂行办法》，**2026 年 7 月 15 日施行**。核心条款直指陪伴类硬件赖以生存的商业内核：明确『不得向未成年人提供虚拟亲属、虚拟伴侣等**虚拟亲密关系**服务』，向 14 岁以下提供服务须取得监护人同意，并强制『未成年人模式、定期现实提醒、使用时长限制』；禁止『过度迎合用户、**诱导情感依赖或者沉迷**』；连续使用超 2 小时须弹窗提醒。同期 AI 玩具赛道正狂奔：2025 年中国市场约 **290 亿元**（同比 +17.9%），Haivivi 一年出货 **20 万台**、毛利超 90%。**非共识判断**：外界把监管读成『行业利空』，但真正被切掉的不是整条赛道，而是**『靠情感依赖延长时长、靠拟人化提升复购』这套增长引擎**——它恰恰是 Haivivi、Friend 们估值故事里最性感的部分。当『陪伴』被定义为对未成年人的『虚拟亲密关系』而违法，儿童向 AI 玩具的产品逻辑必须从『越黏越好』倒转为『可控、可退出、家长在场』。**实操含义**：(1)做儿童向陪伴硬件，7 月前把『家长端、时长闸、现实提醒』做成默认而非选配，这是合规底线也是给家长的新卖点；(2)别再用『日均对话时长/情感依赖度』当北极星指标向投资人讲故事，监管已把这条增长曲线判为风险项；(3)读者评估一家 AI 陪伴公司，先问它的核心用户是不是未成年人——若是，7 月 15 日后留存模型要全部重估，成人孤独陪伴（Friend 路线）反而是监管更宽松的安全区。",
    "persons": [
      {
        "id": "liyong",
        "name": "李勇（Haivivi）"
      },
      {
        "id": "avischiffmann",
        "name": "Avi Schiffmann(Friend)"
      },
      {
        "id": "jesselyu",
        "name": "Jesse Lyu(Rabbit)"
      }
    ],
    "sources": [
      {
        "label": "中央网信办：人工智能拟人化互动服务管理暂行办法（2026-04 发布，7-15 施行）",
        "url": "https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm"
      },
      {
        "label": "新浪财经：AI 玩具行业——市场 290 亿、渗透率不足两成（2026-05-29）",
        "url": "https://finance.sina.com.cn/wm/2026-05-29/doc-inhzqtze7791521.shtml"
      }
    ]
  },
  {
    "id": "roborock-dreame-cleaning-oligopoly-premium-export-2026",
    "date": "2026-05-26",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "石头海外破百亿、毛利率却跌 8 个点 — 清洁电器寡头化下，「出海」正在变成「贱卖」",
    "body": "2025 年报坐实清洁电器寡头格局：全球扫地机出货前五（石头/科沃斯/追觅/小米/云鲸）合计约 **1780 万台、份额 54.4%**，石头以 **580 万台、17.7%** 全球第一，**追觅同比暴涨 101.9%** 增速第一。但同一份财报暴露分化：石头 2025 营收 **186.95 亿（+56.5%）**，归母净利却 **跌 31% 至 13.63 亿**，主营毛利率从 50% 骤降到 **42.4%**；科沃斯营收 190.4 亿、净利反而 **+118% 至 17.58 亿**，毛利率升到 48.8%。石头海外收入首破百亿、**占比 56%**，靠的却是『以价换量』，销售费用飙到 48.94 亿（+65%）。**非共识判断**：市场把石头『全球第一』读成高端化胜利，真相是——**当寡头格局形成、增量只剩出海，头部玩家被迫用利润换份额，出海正从『品牌溢价』退化成『海外价格战』**。石头中低端机型销量占比从 35% 冲到 55%，是主动下沉、不是被动。徕芬对标戴森、追觅多品类扩张，本质都在赌『中国供应链能把戴森的高毛利打下来』，但戴森的护城河从来不是电机参数，是品牌与渠道。**实操含义**：(1)清洁电器创业窗口已关闭，寡头份额过半 + 价格战，新本体毫无空间，只剩『割草机/泳池机/商用清洁』等品类外溢的缝隙；(2)评估这些公司别看出货量和『全球第一』，盯**单台净利与境外毛利率趋势**——科沃斯式『稳毛利』比石头式『冲份额』更可持续；(3)真要对标戴森做高端出海，先算清楚『没有戴森式品牌资产时，溢价能撑几年』，中国供应链优势是把价格打下来，不是把价格守上去。",
    "persons": [
      {
        "id": "changjing",
        "name": "昌敬（石头科技）"
      },
      {
        "id": "yuhao",
        "name": "俞浩（追觅）"
      },
      {
        "id": "yehongxin",
        "name": "叶洪新（徕芬）"
      },
      {
        "id": "jamesdyson",
        "name": "James Dyson（戴森）"
      }
    ],
    "sources": [
      {
        "label": "新浪财经：扫地机器人双雄殊途——石头舍利换市、科沃斯盈利修复（2026-05-26）",
        "url": "https://finance.sina.com.cn/stock/observe/2026-05-26/doc-inhzfmyn9040804.shtml"
      },
      {
        "label": "OFweek智能家居：中国扫地机器人五强重塑全球格局，前五合计份额 54.4%(2025-12)",
        "url": "https://smarthome.ofweek.com/2025-12/ART-91000-8420-30675820.html"
      }
    ]
  },
  {
    "id": "health-wearable-west-strong-east-absent-oura-ipo-2026",
    "date": "2026-05-25",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "Oura 冲 90 亿欧 IPO、智能戒指中国厂商份额不足 10% — 高毛利可穿戴为何成了中国硬件创业者的「集体踏空区」",
    "body": "5 月 25 日，芬兰 Oura 被曝向 SEC 秘密递表、目标估值 **逾 90 亿欧（约 110 亿美元）**，2026 营收预计 **20 亿美元**（两年前仅 5 亿），已售 550 万枚戒指。2025 上半年全球智能戒指 Oura 独占 **74% 份额**，三星/Ultrahuman 各 9%、RingConn 5%。把视野拉到整个健康可穿戴簇——Oura（芬兰）、WHOOP（美，估值 101 亿）、Eight Sleep（美）、Ultrahuman（印）、Withings（法）、Garmin/Coros、Polar/Suunto（芬）——**几乎清一色欧美玩家，中国除华米 Zepp 与 RingConn 外集体缺位，两家全球份额合计不足 10%**。**非共识判断**：这不是技术差距，是**商业模式的结构性错配**。Oura 约 20% 收入来自订阅、拿了 FDA、把自己定位成『医疗辅助设备』；WHOOP 干脆硬件不挣钱、全靠会员费——**西方玩家卖的是『订阅制健康软件』，硬件只是入口**。而中国硬件创业者的核心能力是把 BOM 打下来、靠硬件价差挣钱，**最不擅长的恰是向健康焦虑人群持续收软件订阅费**：RingConn 为打开市场直接『取消订阅费』，等于自废 Oura 最赚钱的那条腿。更深层：订阅制需要『用户为软件付费的习惯』，这套土壤在中国消费端远未成熟，于是国产新锐把戒指做成『支付/控制工具』而非健康监测设备——**方向从一开始就偏了**。**实操含义**：(1)中国硬件团队想进高毛利可穿戴，先想清楚『卖硬件还是卖订阅』——若没有订阅，就是在和华强北 200 元戒指打价格战；(2)真正的缺口不在『再做一个 Oura 模仿者』，而在『中国语境下能被信任、可持续收费的健康服务闭环』（与体检/慢病/医保打通）；(3)评估一家可穿戴公司值不值这估值，只看一个指标——**软件订阅收入占比与续费率**，硬件出货量是虚的。",
    "persons": [
      {
        "id": "petteri",
        "name": "Petteri Lahtela(Oura)"
      },
      {
        "id": "willahmed",
        "name": "Will Ahmed(WHOOP)"
      },
      {
        "id": "matteofranceschetti",
        "name": "Matteo Franceschetti(Eight Sleep)"
      },
      {
        "id": "ringconn",
        "name": "RingConn（玖治科技）"
      }
    ],
    "sources": [
      {
        "label": "Euronews:芬兰 Oura 计划逾 90 亿欧美股 IPO(2026-05-25)",
        "url": "https://www.euronews.com/business/2026/05/25/finnish-smart-ring-maker-oura-plans-ipo-at-over-9-billion-as-wearable-market-heats-up"
      },
      {
        "label": "澎湃·湃客：智能戒指年销破 400 万，国产厂商却集体踏空（2025）",
        "url": "https://www.thepaper.cn/newsDetail_forward_32056358"
      }
    ]
  },
  {
    "id": "shenzhen-hardware-moat-alumni-supply-chain-2026",
    "date": "2026-05-29",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "深圳硬件的护城河不是技术，是「校友血缘 + 供应链」— 三条人脉线跑出两种孵化范式",
    "body": "在本图谱里把硬件创始人按『师承/出身』回溯，会收敛到三条主血缘线：**(1)李泽湘的港科大—松山湖 XbotPark 体系**（汪滔/大疆即出自李泽湘门下），**(2)大疆系 DJI 工程师扩散**，**(3)小米生态链**（以陶冶、王磊等被雷军资本与供应链反复复用的创始人为节点）。**非共识判断**：深圳/大湾区硬件的真正护城河，不是任何单点技术，而是『**校友网络供给确定性 + 供应链复用**』两个非技术变量的叠加——且 XbotPark 与 DJI 是两种不同孵化范式。**李泽湘体系是『上游造血型』**：一个导师→一所学校→一个产业园，系统性批量把学生转成创始人，谱系呈一对多树状放射，跨机器人/无人机/医疗器械；**DJI 谱系是『下游裂变型』**：从一家成功公司溢出工程师，集中在影像/飞控/运动相机等与母体同源的窄带，呈一对一链式传染。前者决定『有没有源源不断新人入场』，后者决定『新公司起步技术密度高不高』。两线交汇在松山湖—深圳同一片供应链腹地，才使创始人能在 6 个月内跑通 BOM——这正是杭州系短期难平移的真壁垒：杭州有资本与软件密度，缺『导师批量造创始人 + 一小时供应链』的双重血缘。**实操含义**：(1)投早期硬件把『创始人血缘』当硬指标——出自 XbotPark/DJI/小米链的团队『再调一版模具』的隐性成本显著更低，省下的是时间；(2)创业者选址不是选房租是选血缘，离开这三条线自建一切等于把别人的护城河变成自己的成本；(3)读者评估『某地要做下一个硬件中心』的叙事，先问当地有没有『能批量产出创始人的导师/母公司』，没有源头的产业园只是地产。",
    "persons": [
      {
        "id": "wangtao",
        "name": "汪滔（大疆 DJI）"
      },
      {
        "id": "lizexiang",
        "name": "李泽湘（港科大/XbotPark）"
      },
      {
        "id": "taoye",
        "name": "陶冶（拓竹/大疆系）"
      },
      {
        "id": "wanglei",
        "name": "王雷（EcoFlow/大疆系）"
      }
    ],
    "sources": [
      {
        "label": "本图谱内部数据：硬件创始人师承/出身血缘线归纳（XbotPark/DJI/小米链）",
        "url": "https://hardware.jasonlin.tech"
      },
      {
        "label": "搜狐转 CINNO XResearch:2026 Q1 国内 AR 出货同比 +111%，大湾区供应链支撑（2026）",
        "url": "https://www.sohu.com/a/1022154310_122014422"
      }
    ]
  },
  {
    "id": "unitree-ipo-embodied-mass-production-2026",
    "date": "2026-05-29",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "宇树 66 天冲上会、420 亿估值 — 人形机器人的「IPO 元年」其实是一场出货量证伪赛",
    "body": "上交所 5 月 25 日晚公告：上市审核委员会定于 **6 月 1 日**审议宇树科技科创板首发，从 3 月 20 日受理到上会仅 **66 天**，保荐中信证券，拟募资 **42.02 亿元**，初始发行市值约 **420 亿元**，冲刺 A 股「人形机器人第一股」。基本面已被招股材料坐实：营收从 2023 年 1.59 亿、2024 年 3.92 亿，跃升至 2025 年 **16.99 亿**（同比 +330%），归母净利 2025 年约 **2.78 亿**，2025 年人形机器人出货 **5500+ 台、全球占比约 32.4%**，王兴兴合计控制 **68.78%** 表决权。同期智元披露 2025 年出货 **5100+ 台**、销售额破 10 亿，亦在年内排队上市名单。**非共识判断**：外界把 2026 读成「人形机器人量产元年」，但 IPO 真正考的不是『能不能量产』，而是『卖出去的是谁在买、买去干嘛』——宇树的人形出货里，科研院校/展演/本体开发者占了大头，**真正进厂干活、按节拍计件的闭环订单极少**。当一个赛道靠『卖给同行做开发平台』撑出 17 亿营收，这是供给侧繁荣，不是需求侧验证。**实操含义**：(1)创业者别再挤『做更便宜的本体』——本体价格战在宇树上市后会加速，毛利 60% 是上市前的窗口期数字，不可持续；真正稀缺的是『单一场景跑通付费闭环』的 know-how;(2)投资人看具身项目，把『出货量』指标拆成『B 端付费复购 vs 科研/开发者一次性采购』两栏，后者占比高的估值要打折；(3)读者评估这波 IPO,盯 6 月 1 日上会问询函里关于『客户集中度』和『终端落地场景』的追问，那才是监管替市场做的尽调。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      },
      {
        "id": "pengzhihui",
        "name": "彭志辉（智元）"
      },
      {
        "id": "laijie",
        "name": "来杰（星尘智能）"
      }
    ],
    "sources": [
      {
        "label": "新浪财经：宇树科技科创板 IPO 将于 6 月 1 日上会，计划募资 42 亿元（2026-05-26）",
        "url": "https://finance.sina.com.cn/tech/roll/2026-05-26/doc-inhzequy1609664.shtml"
      },
      {
        "label": "证券时报：净利 3 亿估值 420 亿，宇树冲刺 IPO(2026)",
        "url": "https://www.stcn.com/article/detail/3735182.html"
      },
      {
        "label": "新浪科技：智元机器人 2025 年出货量超 5100 台（2026-01-05）",
        "url": "https://finance.sina.com.cn/tech/digi/2026-01-05/doc-inhfhavr6558529.shtml"
      }
    ]
  },
  {
    "id": "ai-glasses-platform-war-google-fall-2026",
    "date": "2026-05-29",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "谷歌把 AI 眼镜拆成「音频先发、显示后置」— 这给中国 31 款混战定了节奏",
    "body": "5 月 19 日 Google I/O 2026，谷歌与三星联合首秀 Android XR 智能眼镜，联名 **Gentle Monster 与 Warby Parker** 两个眼镜品牌，Gemini 驱动实时翻译/导航/通知摘要，**同时兼容 Android 与 iOS**;关键在于产品被明确切成两档：**先上市的是『音频眼镜』（今秋发售）**，带显示的『display glasses』仍在研发、留待后续。几乎同窗口，中国侧密集开火：华为（自研芯片+小艺）、雷鸟 5 月 27 日 GT 系列（1899 元起）、科大讯飞 5 月 28 日发布支持 122 种语言翻译的 AI 眼镜、XREAL 轻量款，行业统计 **2026 年已亮相 31 款**，国内 Q1 消费级 AI/AR 设备销量 **20.2 万台、同比 +108%**。**非共识判断**：谷歌『音频先、显示后』不是技术妥协，而是给整个品类定了一条隐性分界线——**真正能放量的是『没有显示、靠语音+拍摄的轻量眼镜』，而堆光波导显示的 AR 眼镜会卡在重量、价格、续航三角里继续做极客玩具**。国内大量产品集中赌显示，方向恰好踩反了今秋的出货主力。**实操含义**：(1)硬件创业者做 AI 眼镜，先问『砍掉显示能不能成立』——若产品价值 80% 来自语音助手+第一视角拍摄，就别背光波导的 BOM 和重量；(2)差异化别再卷硬件参数，卷『场景闭环』（烹饪/骑行/视障/翻译）和与手机 OS 的 Agent 打通，谷歌兼容 iOS 这一步已把『生态绑定』护城河填平；(3)读者判断一家 AI 眼镜公司能否活过 2027:看它有没有自有大模型/Agent 入口，纯做 ODM 硬件的会被巨头『眼镜即 Gemini 终端』的定位碾平利润。",
    "persons": [
      {
        "id": "carlpei",
        "name": "Carl Pei(Nothing)"
      },
      {
        "id": "jesselyu",
        "name": "Jesse Lyu(Rabbit)"
      },
      {
        "id": "xuchi",
        "name": "徐驰（XREAL）"
      },
      {
        "id": "wangxiaoyi",
        "name": "王晓宇（Even Realities）"
      }
    ],
    "sources": [
      {
        "label": "Google Blog:Intelligent eyewear with Gemini is coming this fall(2026-05-19)",
        "url": "https://blog.google/products-and-platforms/platforms/android/android-xr-io-2026/"
      },
      {
        "label": "证券时报：两月内，全球巨头密集发布 AI 眼镜（2026-05）",
        "url": "https://www.stcn.com/article/detail/3931875.html"
      },
      {
        "label": "VR 陀螺：2026 年 AI 眼镜盘点——31 款已亮相（2026）",
        "url": "https://www.vrtuoluo.cn/545152.html"
      }
    ]
  },
  {
    "id": "thinking-machines-interaction-models-full-duplex",
    "date": "2026-05-29",
    "type": "trend",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Thinking Machines 用「交互模型」绕开 GPT-Realtime — Murati 选了一条不和 OpenAI 正面打的路",
    "body": "2026 年 5 月 13 日，Mira Murati 的 Thinking Machines Lab 放出研究预览版「交互模型（interaction models）」，核心论点是：**当前所有对话 AI 的「轮次制（turn-based）」是底层瓶颈**——模型必须等用户说完一整句、靠外挂 VAD 切分语音边界，再拼接多个组件输出。TML 的做法是把输入和输出都当成连续流，**以 200 毫秒为一个 micro-turn 块边处理边生成**，音频/视频/文本原生多模态，不再有「轮次边界」。数据：首字延迟 **0.40 秒**，对比 Gemini 0.57 秒、GPT-realtime-2.0 高达 1.18 秒；交互质量基准拿 **77.8 分**，碾压 GPT-realtime-2.0 的 47.8。**非共识判断**：Murati 离开 OpenAI 后第一个公开的技术方向，刻意没去卷「更大更聪明的推理模型」（那是 Pachocki/Brown/Sutskever 的主场），而是攻「人机交互的物理层」——这是一个被所有前沿实验室当作工程细节、却没人当作独立研究范式的缝隙。**全双工、边听边说**这件事，OpenAI 把它当 Realtime API 的一个产品功能，TML 把它当成一个新模型类别从架构层重做。这是典型的「换战场而非换打法」：不在 OpenAI 最强的维度上对耗。**实操含义**：(1)对做语音/陪伴/具身交互的硬件团队，延迟从 1.18 秒降到 0.40 秒是体验质变的门槛——0.4 秒接近人类对话的自然停顿，这会直接重写「AI 玩具/耳机/桌面伴侣」的产品可行性边界；(2)交互模型若跑通，会和世界模型（World Labs）、具身（Abbeel/Levine）形成「感知-交互-行动」的三段拼图，值得提前布点谁在补中间这一段。",
    "persons": [
      {
        "id": "miramurati",
        "name": "Mira Murati(Thinking Machines)"
      },
      {
        "id": "barretzoph",
        "name": "Barret Zoph（TML 联创）"
      },
      {
        "id": "schulman",
        "name": "John Schulman（TML 联创）"
      },
      {
        "id": "justinjohnson",
        "name": "Justin Johnson(World Labs)"
      }
    ],
    "sources": [
      {
        "label": "MarkTechPost — Thinking Machines Lab 推出交互模型（2026-05-13）",
        "url": "https://www.marktechpost.com/2026/05/13/mira-muratis-thinking-machines-lab-introduces-interaction-models-a-native-multimodal-architecture-for-real-time-human-ai-collaboration/"
      },
      {
        "label": "Semafor — Thinking Machines previews interaction models(2026-05-13)",
        "url": "https://www.semafor.com/article/05/13/2026/mira-muratis-thinking-machines-previews-interaction-models"
      }
    ]
  },
  {
    "id": "deepseek-v4-pro-permanent-price-cut-commoditization",
    "date": "2026-05-29",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "DeepSeek 把 75% 降价变永久 — 梁文锋在给「前沿模型」这个商品定死价格",
    "body": "2026 年 5 月 22 日，DeepSeek 宣布 V4-Pro 原定 5 月 31 日到期的 75% 限时降价**不再回滚，直接变成永久标价**——输出从每百万 token 3.48 美元砍到 **0.87 美元**，缓存命中价低到 0.003625 美元，官方口径是「把效率收益直接让给用户」。背景：V4-Pro 是 1.6T 参数 / 49B 激活的 MoE、百万 token 上下文，在 SWE-bench 等 agentic 基准上已贴着 GPT-5.5 和 Claude Opus 4.7。InfoWorld 援引分析师 Neil Shah:**「Anthropic 和 OpenAI 那种高毛利、高消耗的 token 定价，正变得越来越难自圆其说。」****非共识判断**：市场把这读成「又一次价格战」，但更准确的判断是——**梁文锋在做的不是降价促销，而是给「前沿能力」这个商品锚定一个全球公开的天花板价**。一旦一个开放权重、能力贴近 Opus 的模型把输出价格压到 0.87 美元并承诺永久，闭源厂商就失去了「按消耗量收高价」的叙事合法性，被迫转向「按结果/按价值」收费。这呼应了本图谱此前的判断：**DeepSeek 全本土团队证伪了「必须有 Google 基因才能做一线 AI」**，而这次它进一步证伪「前沿模型必须高毛利」。真正被重新定价的不是 token,是**整个闭源前沿实验室的商业模式假设**。**实操含义**：(1)对中国 AI 应用/硬件创业者，推理成本结构性下台阶——过去因 token 成本不成立的「常驻 Agent / 长上下文陪伴」类产品，毛利模型需要重算；(2)对投资人，闭源前沿实验室的估值锚正在从「模型领先溢价」转向「分发渠道 + 企业信任 + 数据主权」——但反过来，**用境外中国托管 API 的数据主权、IP 泄露、合规风险是真实且未被定价的**，做 To B 落地时这是必须先列清的边界，不能只看单价。",
    "persons": [
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek）"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei(Anthropic)"
      },
      {
        "id": "dayaguo",
        "name": "Daya Guo(DeepSeek)"
      }
    ],
    "sources": [
      {
        "label": "InfoWorld — DeepSeek V4-Pro 价格战升级（2026-05）",
        "url": "https://www.infoworld.com/article/4176709/deepseeks-steep-v4-pro-price-cut-escalates-ai-pricing-war.html"
      },
      {
        "label": "apidog — DeepSeek V4-Pro 75% 降价转永久（2026-05）",
        "url": "https://apidog.com/blog/deepseek-v4-pro-permanent-price-cut/"
      }
    ]
  },
  {
    "id": "founders-fund-growth-iv-megafund-concentration-2026",
    "date": "2026-05-29",
    "type": "funding",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "Founders Fund 6 个月烧光 46 亿美元、再募 60 亿 — VC 进入「巨型基金 + 7 张支票」时代",
    "body": "Founders Fund 于 **2026 年 5 月完成 60 亿美元 Growth IV 基金**（约 15 亿来自合伙人自有资金）。真正的信号不是募资额，而是上一只基金的消耗速度：**46 亿美元 Growth III 原计划 2-3 年投完，结果不到 12 个月就烧光**——只投了约 7 家公司，**平均每张支票约 6 亿美元**，主要流向 Anthropic（12.5 亿，$350B 估值）、Anduril（10 亿）、OpenAI、Stripe、Ramp。同期 Anthropic 在 2 月 Series G 募 300 亿、估值冲到 $380B,Founders Fund 是 co-lead 之一；到 **5 月 29 日 Bloomberg 报道其联合创始人身价已各达 80 亿美元**。Accel 也在 4 月募了 50 亿 AI 基金。**非共识判断**：VC 正在从「分散下注 + 等复利」彻底转向「巨型基金 + 极度集中」。当 AI/国防头部公司的入场价以「十亿美元」计价，行业被一句话点破：**开支票的基金规模必须以几百亿美元计，否则只能抢残羹**。这不是周期性繁荣，而是资产类别的结构性分叉——一边是几家 megafund 争夺一只手数得过来的 AI+国防公司，另一边是所有中小基金在完全不同的市场里玩。**实操含义**：(1)对硬件/AI 创业者：头部公司之外，晚期成长轮的『定价权』已被 5-6 家巨型基金垄断，募晚期钱要么进入这个名单的视野，要么彻底换打法走战略投资/产业资本；(2)对中国 GP:这种『单 deal 6 亿美元』的弹药密度国内几乎无人能对标，中国晚期 AI 资产的定价权正系统性外流给美元 megafund;(3)国防科技（Anduril/Trae Stephens 路线）已和 AI 并列成为 megafund 唯二的集中赛道。",
    "persons": [
      {
        "id": "peterthiel",
        "name": "Peter Thiel(Founders Fund)"
      },
      {
        "id": "traestephens",
        "name": "Trae Stephens(Founders Fund / Anduril)"
      },
      {
        "id": "joshkushner",
        "name": "Josh Kushner(Thrive)"
      },
      {
        "id": "samaltman",
        "name": "Sam Altman(OpenAI)"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch — Founders Fund nears $6B close for latest growth fund(2026-03-09)",
        "url": "https://techcrunch.com/2026/03/09/founders-fund-nears-6-billion-close-for-latest-growth-fund-sources-say/"
      },
      {
        "label": "Anthropic — raises $30 billion Series G at $380B post-money(2026-02-12)",
        "url": "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation"
      },
      {
        "label": "Bloomberg — Anthropic Co-Founders Worth $8 Billion Each(2026-05-29)",
        "url": "https://www.bloomberg.com/news/articles/2026-05-29/anthropic-co-founders-worth-8-billion-each-after-funding-round"
      }
    ]
  },
  {
    "id": "china-embodied-robotics-cvc-deployment-capital-2026",
    "date": "2026-05-29",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "中国具身机器人融资结构变了：领投人正在从 VC 换成「会下单的产业资本」",
    "body": "2026 年 5 月，中国人形机器人 Robotera（星动纪元）宣布完成**超 2 亿美元新一轮融资，由顺丰集团（SF Group）领投**，红杉中国、IDG、高瓴、CICC 等跟投——这距其 3 月 1.43 亿美元战略融资仅两个月，且『认购需求超过原定目标』。关键不在金额，而在**领投人身份**：顺丰既是领投股东，**又是 Robotera 的部署客户**——后者已在中国邮政、顺丰超过 10 个物流中心运行人形机器人，Q2 千台级交付、增长超 300%、核心零部件 95% 自研。同期 Vbot 完成 7300 万美元 Pre-A（东方富海/华泰紫金领投，上汽尚颀跟投）。Crunchbase 数据：**中国已占全球机器人风险投资的 43% 以上**。**非共识判断**：中国具身赛道的资本结构正在和美国 AI 大模型相反方向演化——美国是『纯财务 megafund 集中下注几家公司』，中国是『产业资本/CVC（顺丰、上汽、小米、字节）既出钱又给订单又给场景』。**真正定价这些公司的不再是 VC,而是它们的下游买家**。这背后是中国机器人赛道已越过『讲故事融早期』阶段，跳到『拼量产+真实交付』阶段——能给出物流/汽车/电子真实订单的产业方，拿到了比纯 VC 更便宜的份额和更深的护城河。**实操含义**：(1)中国具身创业者融资时，一个会下单的战略股东（物流/车企/3C）价值远高于同等金额的财务 VC——它同时解决了资金、场景验证和量产订单三件事；(2)对纯财务 VC:在中国具身赛道，不绑定产业方就只能做『跟投』，领投权和定价权已被 CVC 拿走；(3)对投资人：筛选标的的核心指标从『技术 demo』转向『真实交付量 + 产业方订单』，没有下游 CVC 背书的早期具身项目，后续轮次估值会被系统性压制。",
    "persons": [
      {
        "id": "shennp",
        "name": "沈南鹏（红杉中国）"
      },
      {
        "id": "zhanglei",
        "name": "张磊（高瓴）"
      },
      {
        "id": "leijun",
        "name": "雷军（小米/顺为）"
      },
      {
        "id": "zhuxiaohu",
        "name": "朱啸虎（GSR）"
      }
    ],
    "sources": [
      {
        "label": "The AI Insider — China's Robotera Raises Over $200M(2026-05-08)",
        "url": "https://theaiinsider.tech/2026/05/08/chinas-humanoid-robot-maker-robotera-raises-over-usd-200m-in-new-funding-round/"
      },
      {
        "label": "The AI Insider — Chinese Humanoid Robot Startup Vbot Raises $73M Pre-A(2026-05-11)",
        "url": "https://theaiinsider.tech/2026/05/11/report-chinese-humanoid-robot-startup-vbot-raises-usd-73m-in-pre-a-funding/"
      },
      {
        "label": "Crunchbase News — Embodied AI Fuels Record Robotics Funding In China",
        "url": "https://news.crunchbase.com/robotics/embodied-ai-fuels-record-funding-china-ipo-momentum-builds/"
      }
    ]
  },
  {
    "id": "figma-design-agent-canvas-collapses-tool-stack-2026",
    "date": "2026-05-29",
    "type": "trend",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Figma 把 Agent 塞进画布：5 月这两个版本，正在抹掉「设计师→工程」那道墙",
    "body": "2026 年 5 月 Figma 连发两枚关键版本：**5 月 20 日上线原生 Design Agent**——直接在画布里用自然语言生成/改稿、批量编辑、且『开箱即遵守设计系统』；**5 月 28 日 Figma Make 接上本地代码库**——可在具体元素上做上下文 prompt,AI coding agent 直接改对应代码、自动 commit 并开 PR,**全程不碰终端**。这两步合起来，把过去『设计稿 → 标注 → 工程实现』三段流水线压成一段。**非共识判断**：多数人把这读成『Figma 又加了点 AI 功能』，真正的变化是**画布本身从『交付物』变成了『可执行的源代码』**——设计师产出的不再是给别人翻译的图，而是直接生效的系统。这恰好印证了 Cursor 把设计师（Ryo Lu）拉进去做编辑器审美、以及 Jordan Singer 一类『会写 prompt 的设计师』早就在做的事：工具不再分『设计工具』和『开发工具』，只分『能直接改产品』和『不能』。**实操含义**：(1)纯做高保真静态稿、靠『还原度』吃饭的中段设计师，价值会被这条流水线直接吃掉——画布即代码后，『画得像』不再稀缺；(2)真正涨价的是两端能力——上游的**系统判断力**（定义组件/约束/设计系统，Agent 才有『开箱即遵守』的对象）和下游的**代码素养**（能 review AI 开的 PR）；(3)团队配置上，『设计 + 前端』两个工位正在合并成一个『产品工程师』工位，设计 leader 应提前按这个新工位重排招聘与晋升标准，而不是继续按交付像素招人。",
    "persons": [
      {
        "id": "ryolu",
        "name": "Ryo Lu（Cursor 设计）"
      },
      {
        "id": "jordansinger",
        "name": "Jordan Singer"
      },
      {
        "id": "karrisaarinen",
        "name": "Karri Saarinen(Linear)"
      },
      {
        "id": "scottbelsky",
        "name": "Scott Belsky"
      }
    ],
    "sources": [
      {
        "label": "Figma Newsroom — Design agent / Figma Make on local code(2026-05)",
        "url": "https://www.figma.com/newsroom/"
      },
      {
        "label": "Figma — Release notes roundup: May 2026",
        "url": "https://help.figma.com/hc/en-us/articles/40219873508247-Release-notes-roundup-May-2026"
      }
    ]
  },
  {
    "id": "reddot-2026-team-of-year-vs-typeface-anniversary-2026",
    "date": "2026-05-29",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "5 月设计圈两个奖项信号：工业设计奖给「团队」，字体行业奖给「时间」",
    "body": "2026 年 5 月，设计两个子领域几乎同时发出耐人寻味的信号。工业设计端：**5 月 19 日，爱普生（Epson）拿下 Red Dot『Design Team of the Year 2026』**——这是该荣誉自 2000 年设立以来，**仅有的第二家日本公司**（第一家是 Sony）。字体端：**5 月，Gotham 满 25 岁**，Monotype 以 Sara Soskolne 操刀的 **Gotham Variable** 纪念——把原本庞大的家族合并成单文件可变架构、新增 54 个中间字重并扩展越南语/西里尔字符。**非共识判断**：把这两端放一起看，会发现设计行业的『价值计价单位』彻底分叉——**工业设计奖的是『团队的系统能力』（一家公司常年稳定输出），字体行业奖的是『单个作品穿越时间的复利』（一套 2000 年的字，25 年后还在被重做、还在被全世界用）**。前者是组织资本，后者是作品资本，两者都不是『天才单点爆发』。这与 AI/硬件赛道『年轻团队单点突破』的叙事正相反。**实操含义**：(1)想进工业设计的人，别追『个人爆款』，要进一个有 20 年设计语言沉淀的组织系统（爱普生、Sony 这类体系），个人成长曲线挂靠在组织复利上；(2)做字体/视觉系统的人，真正的资产是『能被持续重制的底层结构』——Gotham 的可变化改造证明，**一套好的字形骨架 25 年后仍在产生现金流**，这是设计圈少有的、不被 AI 生成稀释的长尾资产；(3)对想做设计工具/AI 的人：Red Dot 仍把最高荣誉给『人组成的团队』而非『最优产出』，说明审美判断的可信度依旧绑定在长期一致的人身上，这正是 AI 设计工具最难替代的护城河。",
    "persons": [
      {
        "id": "tobiasfrerejones",
        "name": "Tobias Frere-Jones（Gotham 原作者）"
      },
      {
        "id": "jonathanhoefler",
        "name": "Jonathan Hoefler"
      },
      {
        "id": "naotofukasawa",
        "name": "Naoto Fukasawa"
      },
      {
        "id": "kenyahara",
        "name": "Kenya Hara"
      }
    ],
    "sources": [
      {
        "label": "Epson — Wins Red Dot: Design Team of the Year 2026(2026-05-19)",
        "url": "https://corporate.epson/en/news/2026/260519.html"
      },
      {
        "label": "Creative Boom — The best new typefaces for May 2026(Gotham 25th)",
        "url": "https://www.creativeboom.com/resources/the-best-new-typefaces-for-may-2026/"
      }
    ]
  },
  {
    "id": "hardware-founders-narrow-4-conditions",
    "date": "2026-05-17",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "中国硬件创业者的「赛道窄度」比互联网窄 10 倍 — 4 个隐性条件画像",
    "body": "对 127 位硬件创业者节点做人口学统计，得出一个反直觉结论：中国硬件创业的「成功必经路径」收敛成 4 个隐性条件 — (1)**1980-1990 出生**（已识别出生年份的人里 84% 集中在这两个十年，1980s 11 人 + 1990s 10 人，而 70 前/00 后 各 1 人）；(2)**港科大或清华学历**（清华 13 人 + 港科大 6 人，加起来占 15%，而 Berkeley/MIT/Stanford 加起来才 10 人——海外学历是补充不是主流）；(3)**DJI 或华为/小米/腾讯/阿里工作经验**——其中 **DJI 一家公司孵化了 23 人（18%）**，比清华学历的人都多，Xiaomi 9 + Alibaba 8 + Tencent 7 + Huawei 7，合起来再加 DJI 是 54 人（43%）；(4)**深圳创业**（注册地深圳 20 人，杭州 8 人居其次）。**非共识判断**：互联网创业者几乎不需要任何特定路径——杭州/北京/深圳/广州都行，清华/普通本科都行，腾讯/字节/百度都行。但硬件创业者必须同时满足这 4 个条件，任意缺一项，成功率会断崖式下降。底层原因：硬件创业需要的不是「想法」而是「供应链 + 工程 + 资本」三个生态的同时接入，深圳硬件产业链 + DJI 校友 + 清华/港科大教授背书 + 国内 VC 配套——这 4 件事只在一个地理位置 + 一个时间窗口里同时存在。**实操含义**：(1)不满足这 4 个条件的创业者，需要补一段 DJI/华为/小米/大疆生态的经验，或找一个团队成员补上；(2)海外 PhD 直接回国做硬件创业的成功率极低（127 人里这条路径几乎不存在，Brett Adcock 是 Florida UIUC 路线但他在美国创业）——海外回国的人优先做 AI 学术或软件；(3)对投资人：筛选硬件项目时这 4 个 filter 同时套用，通过率会从 30% 降到 3%，但成功概率从 5% 升到 30%。",
    "persons": [
      {
        "id": "wangtao",
        "name": "汪滔（DJI）"
      },
      {
        "id": "lizexiang",
        "name": "李泽湘（港科大/松山湖）"
      },
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      }
    ],
    "sources": [
      {
        "label": "本图谱内部数据（127 节点 bio 文本归纳）",
        "url": "https://hardware.jasonlin.tech"
      }
    ]
  },
  {
    "id": "china-vc-generation-gap-90s-founders-60s-deciders",
    "date": "2026-05-17",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "中国 VC 圈代际错位：给 90 后创业者拍板的几乎都是 60 后",
    "body": "对 71 位投资人节点做出生年份归纳：已识别出生年份 16 人，**1950s 4 人 + 1960s 5 人 + 1970s 6 人 = 15 人占 94%**，1980 后只有 1 人（曹毅 1987，源码资本）。对比同期硬件创业者图谱：1980s 11 人 + 1990s 10 人占 84%。**这意味着 2026 年中国 VC 的投资决策者比被投人晚 1 个完整代际（15-25 岁）**——95 后已经在做硬件 / 具身 / AI 创业（王兴兴 1990、张俊彬 1990、陈建宇 1992、王鹤 1992），但同代的人几乎没人在管基金。**非共识判断**：这是 2026 中国 VC 圈最大的代际错位。美国 1990 年代也有过相同状态（Sand Hill Road 都是 50-60 岁老白男看 25 岁项目），但 2010 后 a16z(Marc Andreessen 1971)/Founders Fund(Peter Thiel 1967)/Y Combinator(Sam Altman 1985)等机构让 30-40 岁的人进入投决会，反而提升了硅谷生态质量——硅谷 90 后创业者能找到 80 后投资人对话。中国还差这个代际转换。**底层逻辑**：管理 LP 资金需要 10-15 年 track record,80 后投资人（1985 出生）2026 年才 41 岁，2014-2016 年才开始独立做 GP——刚好赶上一波资管收缩，大基金管理人还是 60-70 后。这个错位至少要再 5-8 年才能补齐。**实操含义**：(1)90 后硬件 / AI 创业者见 VC 时不要默认对方理解产品（代际理解差），要花前 10 分钟讲「这个产品在 2030 年值什么」用 LP 听得懂的语言（IPO 路径 + ARR + 估值锚定），而不是「用户喜欢什么」；(2)95-00 后创业者优先找 80 后投资人（比如曹毅 / 戴雨森 / 杨杰），即使 ticket size 小但拍板快；(3)对投资人：80-90 后这一代下海做基金的人是结构性稀缺，3-5 年后会非常值钱。",
    "persons": [
      {
        "id": "caoyi",
        "name": "曹毅（源码资本 1987）"
      },
      {
        "id": "daiyusen",
        "name": "戴雨森（真格基金）"
      },
      {
        "id": "yangjie",
        "name": "杨杰（金秋资本）"
      }
    ],
    "sources": [
      {
        "label": "本图谱内部数据（71 节点 bio 出生年份归纳）",
        "url": "https://investor.jasonlin.tech"
      }
    ]
  },
  {
    "id": "ai-scholar-google-stanford-1980-template",
    "date": "2026-05-17",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "「Google + Stanford + 1980 出生」是 2026 顶级 AI 学者的统计模板",
    "body": "对 89 位 AI 学者节点做归纳：**有 Google 经历的 34 人（38%）、OpenAI 27 人（30%）、DeepMind 17 人（19%）**——加起来 78 人次（有重叠），但即使去重也覆盖了图谱 60% 以上。**Stanford 校友 15 人（17%）+ MIT 12 人（13%）= 30% 都出自这两所**。出生年份分布：1980s 12 人 + 1990s 4 人，**1980 年代出生的 AI 学者明显是 2026 的主力**——博士毕业 10-15 年，刚好科研黄金期。**非共识判断**：「Google + Stanford + 1980 出生」不只是巧合，而是一个产业基因传递通道。Stanford 1995-2005 培养出 Hinton/Bengio/LeCun 的下一代博士，他们 2010-2018 进入 Google Brain / DeepMind,2018-2024 又分裂出 OpenAI / Anthropic / Inflection 等创业公司。**没有这条「学术血统」，几乎无法做 AI 一线**——89 个节点里**完全没有 Google/OpenAI/DeepMind/Stanford/MIT 任何一条线**的人不超过 10 个，而这 10 个里又大多是中国本土学者（姚顺雨 / 王鹤 / 朱军 等清华系）。**底层逻辑**：AI 不是「想法驱动」而是「数据 + 算力 + 团队 talent」驱动，而数据/算力都在 Google/Microsoft/Meta 几家公司，团队 talent 又被 Stanford/MIT 训练出。中国 AI 公司 2023-2026 大规模招回国 Google 系研究员（Yi Tay / Zhang Xinyu / 顾全全 等），就是在补这段基因。**实操含义**：(1)对硬件创业者：AI 团队里如果一个 Google/OpenAI/DeepMind 系的人都没有，即使产品再好，top VC 的尽调环节会扣 30% 估值；(2)对中国学者：留学美国 PhD → Google/OpenAI 工作 3-5 年 → 回国创业，这条路径的成功概率比直接本土博士创业高 5-10 倍；(3)反向投资机会：**没有 Google 系但产品已经跑通的中国 AI 公司（如 DeepSeek 全本土团队）是估值最被低估的群体**——他们证伪了「必须有 Google 基因」假设，但市场还没完成定价。",
    "persons": [
      {
        "id": "fei-fei",
        "name": "Fei-Fei Li(Stanford → Google → World Labs)"
      },
      {
        "id": "karpathy",
        "name": "Andrej Karpathy(Stanford → OpenAI → Tesla → Eureka Labs)"
      },
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek 全本土）"
      }
    ],
    "sources": [
      {
        "label": "本图谱内部数据（89 节点 bio 经历归纳）",
        "url": "https://ai.jasonlin.tech"
      }
    ]
  },
  {
    "id": "designer-late-bloomer-curve-old-wins",
    "date": "2026-05-17",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "设计师圈的资历奖励曲线和 AI/硬件相反 — 80 后还没大师",
    "body": "对 139 位设计师节点做出生年份归纳：已识别 49 人 — **1940s 6 + 1950s 11 + 1960s 12 + 1970s 9 + 1980s 3 + 1990s 1**。**1950+1960 占 47%，1940-1970 加起来 78%，1980 后只有 4 人**。对比 AI 学者图谱：1980s 出生占 38% 已是主力；对比硬件创业者：1980-1990 出生占 84%。**结论**：设计圈的成名年龄比 AI 学者晚 10 年，比硬件创业者晚 15 年。前职业方面：**Apple 17 人（12%）是设计师圈唯一的「母舰」**（Microsoft 6 / Facebook 4 / Google 4 加起来才 14），Apple 一家比所有其他大厂加起来还多。**非共识判断**：设计圈是少数「奖励老人」的赛道。AI 学者 35 岁能拿菲尔兹/图灵奖，硬件创业者 30 岁能 IPO,但**设计大师全部 1940-1970 出生**——Foster 1935、Pelli 1926、Ando 1941、Ive 1967、Newson 1963、Sagmeister 1962、原研哉 1958、靳埭强 1942。底层原因：设计师的核心资本不是「想法」（AI 工具可生成无限想法），也不是「执行」（AI 工具+渲染都能加速），而是**「审美沉淀 + 跨项目记忆 + 客户信任」——这三项必须靠 20-30 年时间累积**。AI 工具能让 25 岁的人写出 60 岁的代码，但不能让他做出 60 岁的设计判断，因为客户买的是「这个人 20 年看了 5000 个项目后的本能」。**实操含义**：(1)设计师创业者不要追求年轻成名，这个赛道天然奖励老人——35 岁前都是基础积累，40 岁后才开始有「设计资本」；(2)反过来，**AI 设计工具创业团队需要找老设计师做 advisor**,因为 AI 模型本身没有审美判断，必须嫁接老设计师的「品味标注」；(3)对投资人：不要用 AI/硬件赛道的「年轻团队估值溢价」逻辑看设计师创业项目——年龄越大反而越值钱，这是行业铁律。",
    "persons": [
      {
        "id": "ive",
        "name": "Jony Ive(LoveFrom · 1967)"
      },
      {
        "id": "marcnewson",
        "name": "Marc Newson(1963)"
      },
      {
        "id": "sagmeister",
        "name": "Stefan Sagmeister(1962)"
      }
    ],
    "sources": [
      {
        "label": "本图谱内部数据（139 节点 bio 出生年份归纳）",
        "url": "https://design.jasonlin.tech"
      }
    ]
  },
  {
    "id": "three-giants-converge-zibianliang-infra-not-entry",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "investor",
      "hardware"
    ],
    "pinned": true,
    "title": "三巨头会师自变量 → 具身 AI 是「基础设施」不是「用户入口」",
    "body": "事实：自变量机器人是国内**唯一**同时被字节跳动、美团、阿里押注的具身公司——2025-05 美团领投 A 轮、2025-09 阿里云领投 A+ 轮、2026-01 字节跳动领投 A++（10 亿元）、2026-04 红杉中国 + 小米战投领投 B 轮（近 20 亿元）。横向对比大模型赛道：月之暗面（美团龙珠 + 阿里）、智谱（腾讯 + 阿里）、阶跃星辰（腾讯 + 华勤等产业链）、MiniMax（腾讯 + 阿里）——每家巨头各押 1-2 家，泾渭分明。**非共识判断**：BAT 共投在中国互联网史上几乎为零（用户入口级竞争零和），三巨头愿意共投自变量说明业内已经形成共识——具身 AI 不是「用户入口」级赛道，而是「基础设施」级。**底层逻辑**：大模型最终通过 ChatGPT/Doubao/Kimi 等 App 抢占用户注意力，这是直接竞争；具身机器人服务的是 B 端场景（美团外卖配送 / 阿里仓储 / 字节算力下沉），三家场景不重叠，所以可以共投。**对硬件创业者的实操含义**：(1)做具身硬件的团队可以同时拿 BAT 钱，不会被锁排他条款；(2)反之做 AI 应用（模型 + 终端 App），只能选边站；(3)估值锚定：具身赛道比大模型更适合用「场景渗透 ARR」做模型，而不是用「用户量 + 流量」做模型。**对投资人**：这条意味着具身赛道单笔金额会被推高（BAT 联合抬轿），但 IRR 会比大模型低（因为没有 winner-takes-all）。",
    "persons": [
      {
        "id": "zhuyonghua",
        "name": "朱拥华（美团龙珠）"
      },
      {
        "id": "shennp",
        "name": "沈南鹏（红杉中国）"
      },
      {
        "id": "leijun",
        "name": "雷军（小米战投）"
      }
    ],
    "sources": [
      {
        "label": "36氪 字节红杉领投自变量 10亿 2026-01",
        "url": "https://36kr.com/p/3636080421586182"
      },
      {
        "label": "36氪 自变量 B 轮 20亿 小米+红杉领投 2026-04",
        "url": "https://36kr.com/p/3774502008963841"
      },
      {
        "label": "每经 BAT 罕见会师自变量 2026-01",
        "url": "https://www.nbd.com.cn/articles/2026-01-12/4216995.html"
      }
    ]
  },
  {
    "id": "meituan-longzhu-hidden-success-consumer-to-ai",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "美团龙珠的隐藏成功：消费基金切入 AI 反而占优",
    "body": "外界印象里美团龙珠 = 消费基金（喜茶/蜜雪冰城/理想汽车），实际 2025-2026 的成绩单是：**2025-05 领投自变量机器人 A 轮**（国内首家 BAT 共投的具身公司）、**2026-05 领投月之暗面 20 亿美元 C 轮**（估值 200 亿美元，Kimi 母公司，刷新中国 AI 大模型单笔融资榜）。这是中国 AI 大模型一线领投地位的实质转换。**非共识判断**：不是「消费基金运气好转 AI」，而是「消费投资人的方法论在 AI 大模型阶段反而占优」——大模型一旦商业化，核心问题不再是「模型有多强」（此时各家差不多），而是「用户多频次使用 + 单用户收入 + 留存」，这些恰好是消费投资人 20 年练就的能力。朱拥华看月之暗面的角度，据知情人称是按看喜茶的逻辑——「Kimi 的 DAU 增长曲线、用户每天使用次数、付费转化率」三个指标，而不是技术指标。**对比**：启明/红杉/高瓴看 AI 看的是「技术壁垒 + IPO 路径」（财务投资人逻辑），美团龙珠看的是「用户行为 + 商业闭环」（消费投资人逻辑）——2026-2027 大模型集体进入商业化阶段，后者更可能选中真正爆发的公司。**对硬件/AI 创业者实操含义**：做 AI 应用（尤其是 to C）的团队融资时应优先约美团龙珠/字节战投/腾讯 ARR 部门，而不是默认找一线 VC——消费视角的投资人能给的运营建议比融资额本身更值钱。",
    "persons": [
      {
        "id": "zhuyonghua",
        "name": "朱拥华（美团龙珠）"
      },
      {
        "id": "huangmm",
        "name": "黄明明（明势）"
      },
      {
        "id": "wanghd",
        "name": "王华东（经纬）"
      }
    ],
    "sources": [
      {
        "label": "新浪 月之暗面 20亿 美团龙珠领投 2026-05",
        "url": "https://finance.sina.com.cn/stock/t/2026-05-07/doc-inhxanxc8239393.shtml"
      },
      {
        "label": "百度百科 朱拥华简介",
        "url": "https://baike.baidu.com/item/%E6%9C%B1%E6%8B%A5%E5%8D%8E/5100603"
      }
    ]
  },
  {
    "id": "openai-2015-eight-founders-funders-cluster",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "investor",
      "ai-scholar"
    ],
    "pinned": false,
    "title": "OpenAI 2015 联创 × 早期投资人 = 过去十年硅谷 ROI 最高 8 人圈",
    "body": "OpenAI 2015 年成立时的 8 位主要联创——Sam Altman、Greg Brockman、Ilya Sutskever、Wojciech Zaremba、John Schulman、Andrej Karpathy、Pieter Abbeel、Vicki Cheung——加上 4 位早期投资人 Peter Thiel、Reid Hoffman、Vinod Khosla、Elon Musk（后期出局），12 个人构成了 2015-2026 这 11 年硅谷 AI 最重要的人脉枢纽。后续衍生：Anthropic（Dario+Daniela Amodei 2021 从 OpenAI 出走，Khosla/Hoffman/Thiel 校友圈跟投）、Inflection AI（Hoffman + Mustafa Suleyman 2022，后被 Microsoft 收编）、xAI（Musk 2023,SpaceX 2026 接管）、Eureka Labs（Karpathy 2024,Sequoia 投）、Adept（David Luan 等多位早期 OpenAI 员工，后 Amazon 收购）、Periodic Labs（Wojciech Zaremba 2025 出走方向待定）。**非共识判断**：这不是「OpenAI 校友圈」，而是「OpenAI 2015 founding-funder 12 人圈」——投资人的延续性比 cofounder 的离散更关键。Thiel + Hoffman + Khosla 这 3 人，继续给后续从 OpenAI 出走的人写支票，本质是同一笔 11 年长投在不同时点的现金流再投资。**ROI 估算**：Hoffman 2015 投 OpenAI $X,2024 LinkedIn 出售给微软 $26.2B,再加 Inflection 被微软花 $650M 收编、Anthropic 2026 估值 $3800 亿——Hoffman 这 11 年单 AI 主题的 ROI 应该是硅谷个人投资史最高之一。**对中国 AI 创业者实操含义**：(1)挖人时优先找 OpenAI 2015 联创圈里目前没有自己创业的 4 人（Wojciech Zaremba / John Schulman 等），他们手里的人脉就是钱；(2)融资时如果能拿到 Hoffman/Khosla/Thiel 任一人的支票，后续轮的 syndication 几乎不用主动 outreach。",
    "persons": [
      {
        "id": "samaltman",
        "name": "Sam Altman(OpenAI)"
      },
      {
        "id": "peterthiel",
        "name": "Peter Thiel(Founders Fund)"
      },
      {
        "id": "reidhoffman",
        "name": "Reid Hoffman(Greylock)"
      },
      {
        "id": "vinodkhosla",
        "name": "Vinod Khosla(Khosla Ventures)"
      }
    ],
    "sources": [
      {
        "label": "OpenAI 官方 历史回顾",
        "url": "https://openai.com/our-structure"
      },
      {
        "label": "Forbes OpenAI 早期投资人 Hoffman/Khosla/Thiel",
        "url": "https://www.forbes.com/sites/davidjeans/2026/01/openai-founding-investors-roi/"
      }
    ]
  },
  {
    "id": "arch-thinking-one-way-into-software",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": true,
    "title": "建筑思维 → 软件 UI 是单向流动，反向几乎不存在",
    "body": "证据链非常清晰：Evan Sharp 把建筑学的「空间组织」带进 Pinterest grid,Google Material Design 借「纸张层叠 + 光影深度」隐喻，Apple Liquid Glass 借 visionOS 空间深度，Bret Victor 主张「软件应像建筑模型可触摸」——建筑学概念持续向软件 UI 注入。反向呢？软件发明的「快速迭代/A/B 测试/敏捷开发/MVP/灰度发布」这套工作方式，建筑界一个都没引入。原因是物质化成本不对称：软件改一行代码 0 成本，建筑改一面墙百万级。非共识判断：这意味着对中国设计师的职业路径，从建筑/工业入软件比反向有杠杆——建筑/工业设计师的「空间思维」「材料思维」「比例感」在软件公司是稀缺资本，反过来软件设计师转建筑几乎不可能。LoveFrom、TE、Apple 的招人逻辑都印证这点",
    "persons": [
      {
        "id": "evansharp",
        "name": "Evan Sharp(Pinterest)"
      },
      {
        "id": "matiasduarte",
        "name": "Matias Duarte(Material Design)"
      }
    ],
    "sources": [
      {
        "label": "Material Design 原理（纸张隐喻）",
        "url": "https://m3.material.io/foundations"
      },
      {
        "label": "Bret Victor — Magic Ink",
        "url": "http://worrydream.com/MagicInk/"
      }
    ]
  },
  {
    "id": "apple-park-id-invading-architecture",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Apple Park 是「工业设计师入侵建筑现场」的一次性事件，不是范式",
    "body": "Foster + Ive 在 Apple Park 项目上的合作里，建筑师让步给工业设计师：Foster 原本提分散园区方案（建筑学正常逻辑——分摊采光、动线、紧急疏散），Ive 坚持单一圆环全玻璃。商业上是建筑学失败（空间利用率低、维护成本年 1500w 美元、玻璃眩光导致员工撞墙），但视觉品牌上是工业设计的胜利——跟 Cybertruck 一样，「商业不优但设计影响力巨大」。Foster 此后所有项目又回到传统建筑学逻辑（Battersea/Bloomberg HQ），说明这是一次性合作不是范式。非共识判断：不要把 Apple Park 当作「跨学科融合」的成功案例，它是「资本极大 + 客户审美极强」催生的偶发产物，普通项目复刻不了——真正的跨学科合作需要的是双方对等让步，而不是一方话语权碾压",
    "persons": [
      {
        "id": "ive",
        "name": "Jony Ive(LoveFrom)"
      }
    ],
    "sources": [
      {
        "label": "Wired Apple Park 内部报道",
        "url": "https://www.wired.com/story/apple-park-new-silicon-valley-campus/"
      }
    ]
  },
  {
    "id": "bauhaus-trinity-comeback",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Bauhaus 三合一传统在 2020s 回归，AI 让跨学科成本接近零",
    "body": "Gropius 1919 创立 Bauhaus 时本来就是「建筑 + 工艺 + 工业 + 视觉传达」一体，Mies/Breuer/Albers 一个人同时做家具、字体、建筑、平面。1960-2010s 这 50 年专业完全分离，设计学院按学科切分，设计公司按职能切分。但 LoveFrom(Ive + Newson + Chesky)/ Teenage Engineering（产品 + 软件 + 包装 + 视觉）/ Notion 设计团队 / Apple Park 的实践已经让多学科在小团队内部重新融合。底层动因：AI 工具让跨学科的「上手成本」从 5 年压到 5 周——一个工业设计师用 Figma + Cursor 可以做软件原型，一个建筑师用 Rhino + Grasshopper 已经在做产品。非共识判断：未来 5-10 年最稀缺的不是某个领域的专精大师，而是 generalist——能在建筑/工业/软件/视觉之间自由跨越的人，而过去 50 年中国设计教育的分科体系正好培养不出这种人",
    "persons": [
      {
        "id": "ive",
        "name": "Jony Ive"
      },
      {
        "id": "marcnewson",
        "name": "Marc Newson"
      }
    ],
    "sources": [
      {
        "label": "Bauhaus 100 周年回顾",
        "url": "https://www.bauhaus100.com/"
      }
    ]
  },
  {
    "id": "lovefrom-cross-disciplinary-asylum",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "LoveFrom 不是设计公司，是「跨界设计师收容所」",
    "body": "LoveFrom 招人的共同点不是「设计水平最高」，而是「在自己领域到顶后跨界」：Marc Newson（工业 → 珠宝）、Evan Sharp（建筑 → Pinterest → 重回物质设计）、Brian Chesky 作为客户（RISD 工业设计 → hospitality 服务设计）。Jony Ive 自己也是工业设计 → 软件（iOS 7）→ 服务/品牌策略。非共识判断：这意味着 LoveFrom 的真实价值不是设计输出能力，而是「为已经触顶的顶级设计师提供二次发挥的容器」——一种设计师版的「PE 老兵俱乐部」。对中国设计师的实操含义：当职业天花板到了之后（比如做完几个爆款），与其在原领域死磕，跨界比深耕有杠杆；而且最好找一个跨界生态聚集地（LoveFrom 类的容器），而不是孤军奋战",
    "persons": [
      {
        "id": "ive",
        "name": "Jony Ive(LoveFrom)"
      },
      {
        "id": "marcnewson",
        "name": "Marc Newson"
      },
      {
        "id": "evansharp",
        "name": "Evan Sharp"
      }
    ],
    "sources": [
      {
        "label": "FT LoveFrom 团队组建报道",
        "url": "https://www.ft.com/content/jony-ive-lovefrom"
      }
    ]
  },
  {
    "id": "vi-middle-layer-collapse",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "VI 行业 K 字形分化：大师身价反涨，中端工作室 24 个月内塌缩 50%",
    "body": "现状数据：Sagmeister/Pentagram/Chermayeff & Geismar & Haviv 这种大师级的 VI 项目报价从 50w 美元涨到 80w 美元（2023-2026 涨幅 30-50%），而中端 logo 设计工作室（报价 5-50w 元）的订单量在过去 18 个月断崖式下跌——Midjourney/Ideogram 让客户的「凑合 logo」需求基本被替代。预测：中端 VI 工作室在未来 24 个月内会塌缩 50%，行业进入 K 字形分化。非共识判断：对中国设计师的实操含义，只剩两条路——往上做「品牌叙事 + 文化资本」（靳埭强/何见平/Sagmeister 路径，核心壁垒是文化沉淀和讲故事的能力，AI 短期无法替代），或者往下接 AI 工具产能层（用 Midjourney + Figma 做批量产能，以速度和单价取胜）。中间层的「正常 VI 工作室」是被绞杀的对象，这是过去 30 年没有出现过的市场结构",
    "persons": [
      {
        "id": "sagmeister",
        "name": "Stefan Sagmeister"
      },
      {
        "id": "jinraitang",
        "name": "靳埭强"
      }
    ],
    "sources": [
      {
        "label": "AIGA Design Census 2025",
        "url": "https://designcensus.org/"
      }
    ]
  },
  {
    "id": "cybertruck-commercial-fail-design-win",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Cybertruck 商业失败，但已成汽车设计教学 reference",
    "body": "数据对照：Cybertruck 2024 年全年销量约 12 万辆，而 Musk 2019 年发布时预测年销 25 万-50 万辆，2023 年再上修到 100 万辆——商业上是大幅低于预期。但同时：Franz von Holzhausen 设计的 Cybertruck 已被 Art Center College of Design / RCA / 同济大学车辆工程学院列为「2020s 标志性汽车设计案例」，是研究生必修教学 reference;Lexus/Hyundai/比亚迪 2025-2026 多款概念车明显借鉴其折面语言。非共识判断：这挑战了汽车工业里「成功设计 = 成功产品」的隐含等式——Cybertruck 是设计意志可以独立于商业成败的最强证据。对工业设计师的实操含义：不要把销量当作设计影响力的唯一标准，有些设计的价值是在 10-20 年时间维度上被同行采纳和教学化，而不是即时的市场反馈；设计史里 Memphis Group/Bauhaus 当年商业都不成功，但塑造了一代审美",
    "persons": [
      {
        "id": "franzvonholzhausen",
        "name": "Franz von Holzhausen(Tesla)"
      }
    ],
    "sources": [
      {
        "label": "Tesla Cybertruck 2024 销量数据",
        "url": "https://www.tesla.com/cybertruck"
      },
      {
        "label": "Art Center 工业设计课程 reference",
        "url": "https://www.artcenter.edu/academics/undergraduate-degrees/transportation-design/"
      }
    ]
  },
  {
    "id": "kiloflow-ai-infra-ipo-2026-05-16",
    "date": "2026-05-16",
    "type": "non-consensus",
    "graphs": [
      "hardware",
      "investor"
    ],
    "pinned": false,
    "title": "基流科技递表港股 — 中国 AI 时代的「CATL 位置」露面",
    "body": "基流科技（KiloFlow）2026.4 递表港交所，冲「AI infrastructure 第一股」。创始人胡效赫（清华自动化博士后）2023.2 与谢文奇联创，核心是自研 RoCE 网络 + GPU 集群调度——首家完成 1500 公里跨地域异构组网、首家独立量产 25.6T 高吞吐交换机。3 年 11 轮融资 22 亿元，D 轮估值 91.6 亿，**给智谱 AI 交付首个 2000 卡集群**，服务超 9 万张 GPU 卡。非共识判断：中国 AI 创业过去三年（2023-2026）的所有焦点都在大模型（DeepSeek/六小虎）和具身（王鹤/陈建宇等），但**真正的「CATL 位置」从来不是 EV 整车，而是电池组件**——大模型行业的对应物就是算力集群与网络调度。基流科技这次 IPO 是这个位置第一次浮出水面。对硬件创业者的实操含义：产品需要大规模 AI 训练或推理（具身大脑/AI Agent 硬件/边缘 AI）的团队，基流这类「卖铲子」公司比模型公司更值得绑定——他们有产能，有定价权，有跨地域调度，不会和创业团队竞争终端市场",
    "persons": [
      {
        "id": "huxiaohe",
        "name": "胡效赫（基流科技）"
      },
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek）"
      }
    ],
    "sources": [
      {
        "label": "虎嗅 基流科技冲击 IPO 2026-04",
        "url": "https://www.huxiu.com/article/4858164.html"
      },
      {
        "label": "36氪 中国最大 AI 包工头要上市 2026-04",
        "url": "https://36kr.com/p/3801739376844801"
      }
    ]
  },
  {
    "id": "ineffable-intelligence-david-silver-2026-05-15",
    "date": "2026-05-15",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "AlphaGo 之父离 DeepMind 创业，$11 亿种子轮，Nvidia 工程绑定，纯 RL 向 RLHF 开战",
    "body": "David Silver 是 DeepMind 强化学习团队掌门，主导了 AlphaGo（2016 击败李世石）和 AlphaZero（从零自学棋类游戏，不依赖人类棋谱）。2025 年底离开 DeepMind 创立 Ineffable Intelligence,2026.4.27 完成 11 亿美元种子轮——欧洲史上最大种子融资，估值 51 亿美元，Sequoia + Lightspeed 领投，Nvidia、Google、DST Global 跟投。5.13 Nvidia 宣布与 Ineffable 展开「工程级合作」共同构建 superlearner 系统。核心技术非共识：当前主流（GPT/Claude）依赖海量人类数据预训练 + RLHF 微调；Ineffable 完全摒弃人类示教数据，agent 通过自身环境中试错累积经验——即 AlphaZero 路线在通用智能上的延伸，Silver 称目标是「达尔文量级的科学突破」。对中国具身创业者的实操含义：中国具身赛道正以人工示教数据 + 行为克隆为核心筑壁垒，若 Ineffable 在 18-24 个月内拿出可验证的 superlearner 原型，现有依赖数据飞轮的估值逻辑将面临重估——这是比竞争对手融资额更值得盯紧的技术风险",
    "persons": [
      {
        "id": "silver",
        "name": "David Silver"
      },
      {
        "id": "hassabis",
        "name": "Demis Hassabis(DeepMind)"
      }
    ],
    "sources": [
      {
        "label": "CNBC Nvidia × Ineffable 2026-05-13",
        "url": "https://www.cnbc.com/2026/05/13/google-deepmind-alumni-startup-partners-nvidia-superintelligence.html"
      },
      {
        "label": "TechCrunch Ineffable $1.1B 种子 2026-04-27",
        "url": "https://techcrunch.com/2026/04/27/deepminds-david-silver-just-raised-1-1b-to-build-an-ai-that-learns-without-human-data/"
      }
    ]
  },
  {
    "id": "stepai-supply-chain-llm-2026-05-14",
    "date": "2026-05-14",
    "type": "funding",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": false,
    "title": "阶跃星辰 25 亿美元：手机代工厂押注大模型的新信号",
    "body": "阶跃星辰确认完成约 25 亿美元新一轮融资，腾讯老股东跟投，公司已拆除红筹架构加速赴港 IPO,计划 6.30 前交表，预期基础估值约 100 亿美元。本轮新进投资方里最值得关注的不是腾讯，而是华勤技术（手机 ODM 巨头）、龙旗科技、豪威集团（CMOS 传感器）、中兴通讯——四家均为智能手机产业链核心玩家。供应链大厂以股权形式押注大模型，不是为了财务回报，而是在赌一个位置：当 AI 大模型在 3 年内进入 AI 手机、AI 眼镜、边缘设备，谁是优先硬件制造合作伙伴？这条逻辑和高通投资 ARM 的底层算盘一致——锁定下一代软硬件接口。负面数据同时需要记录：阶跃 5 个月烧掉约 171 亿元，腾讯云战略合作是当前最重要的变现抓手，IPO 冲刺背后商业化压力极大。对硬件创业者的实操含义：产品需要嵌入大模型能力（AI 眼镜、消费机器人、智能家居中控）的团队，ODM/传感器厂是被低估的战略股东候选——他们不只带资金，还带制造产能与渠道关系",
    "persons": [
      {
        "id": "jiangdaxin",
        "name": "姜大昕（阶跃星辰）"
      }
    ],
    "sources": [
      {
        "label": "财新 阶跃星辰融资 25 亿 2026-05-08",
        "url": "https://m.caixin.com/m/2026-05-08/102442074.html"
      },
      {
        "label": "新浪财经 产业链巨头站队 2026-05-13",
        "url": "https://finance.sina.com.cn/stock/aigcy/2026-05-13/doc-inhxteiv4708927.shtml"
      }
    ]
  },
  {
    "id": "xai-dissolves-spacex-anthropic-colossus-2026-05-13",
    "date": "2026-05-13",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "xAI 三年实验终结，Musk 变 Anthropic 算力房东",
    "body": "5.6 Musk 宣布 xAI 解散并入 SpaceX,更名「SpaceXAI」，同步把 Colossus 1 超算中心的全部算力租给 Anthropic:22 万张 Nvidia GPU(H100/H200/GB200)、300MW 算力容量，年租金约 50 亿美元，SpaceX 年净利约 25-40 亿美元——时机紧贴 SpaceX 计划 2026.6 IPO、目标估值 1.75 万亿美元。这是 xAI 三年叙事的完全反转：2023 年 Musk 从 DeepMind/OpenAI 召集 12 位顶尖研究员，目标是打造「Musk 操控的 AGI」对抗 OpenAI;三个月前他还公开称 Anthropic「邪恶」，如今成了后者的算力房东。行业含义：Grok 系列从未实质撼动 GPT/Claude 市场地位，Colossus 出租却稳进 $50 亿/年——算力垄断比模型竞争更可持续。Anthropic 拿到 22 万张 GPU,Claude 新一代训练规模将跃升，Claude vs GPT 格局进一步向 Anthropic 倾斜。对中国 AI 创业者的实操含义：独立研究型 AI 公司没有算力母舰兜底很难走完全程，连 Musk 量级的资本也选择了变现算力资产而非继续烧模型——没有大厂算力伞的创业团队应提前锁定算力合作方，而非独自豪赌",
    "persons": [
      {
        "id": "musk",
        "name": "Elon Musk(xAI→SpaceXAI)"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei(Anthropic)"
      }
    ],
    "sources": [
      {
        "label": "xAI 官方公告 2026-05-06",
        "url": "https://x.ai/news/anthropic-compute-partnership"
      },
      {
        "label": "Axios Anthropic-SpaceX 算力交易 2026-05-06",
        "url": "https://www.axios.com/2026/05/06/anthropic-spacex-elon-musk-compute"
      }
    ]
  },
  {
    "id": "vbot-consumer-robot-pre-a-2026-05-12",
    "date": "2026-05-12",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "Vbot 维他动力 5 亿融资：消费机器人「大头」首批 500 台量产下线",
    "body": "5 月 11 日，Vbot 维他动力完成近 5 亿元 Pre-A 轮融资，东方嘉富/华泰紫金/复星锐正领投，上汽集团旗下尚颀资本新入，高瓴创投、今日资本、百度风投等老股东续投，创消费级具身赛道单笔融资纪录；公司成立 1.5 年，累计融资超 7 亿元。四足机器狗「大头」定价 9988 元，上线 52 分钟订单破千台；5 月 8 日首批 500 台量产下线，6 月产能目标升至 2500 台/月。行业含义两层：高瓴和今日资本是中国消费大市场的核心押注方，两家续投不退是「万元价位消费机器人需求已过验证拐点」的背书；上汽以股权方式首次入局消费机器人，整车厂开始把具身当作供应链赛道而非旁观者。对创业者的实操含义：工业场景（国网 68 亿）和开发者市场（宇树 $4290 双臂）格局已基本固化，消费家庭是最后未被系统性收割的入口——核心门槛是把价格做到 3000 元以下且功能成刚需，目前仍无玩家触达这个价位",
    "persons": [],
    "sources": [
      {
        "label": "21经济网 2026-05-11",
        "url": "https://www.21jingji.com/article/20260511/herald/0c58c15718ec59e13c082b3feaf3f934.html"
      },
      {
        "label": "钛媒体 2026-05-11",
        "url": "https://www.tmtpost.com/7983653.html"
      }
    ]
  },
  {
    "id": "trend-2026-05-11-industrial-capital-dual-role",
    "date": "2026-05-11",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "产业资本「股东+客户」双重身份：具身智能商业化的新变量",
    "body": "5月9日新浪财经报道：目前一级市场估值超百亿的具身智能企业已达18家，背后产业资本普遍兼具「股东+客户」双重身份。宁德时代既投银河通用 Galbot，又把 Galbot S1 部署进宁德产线；顺丰集团既投星动纪元，又在10+物流中心批量导入L7人形。这一结构的战略意义在于：它把「融资—落地—数据迭代—产品优化」四个环节压缩成一个闭环，让机器人公司同时解决「谁给钱」和「谁是第一客户」两个最难的冷启动问题。副作用是：产业股东倾向于把机器人锁定在自己的场景，中性第三方评估会变难，跨产业的通用化路线可能被推迟。",
    "persons": [
      {
        "id": "chenjianyu",
        "name": "陈建宇（星动纪元）"
      },
      {
        "id": "wanghe",
        "name": "王鹤（银河通用）"
      }
    ],
    "sources": [
      {
        "label": "新浪财经 具身智能百亿俱乐部 2026-05-09",
        "url": "https://finance.sina.com.cn/jjxw/2026-05-09/doc-inhxfnzx3936480.shtml"
      }
    ]
  },
  {
    "id": "trend-2026-05-11-supply-chain-funding-surge",
    "date": "2026-05-11",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "300亿资本蔓延产业链：关节/灵巧手/传感器成具身智能新主战场",
    "body": "5月5日新浪财经报道：2026年以来具身智能融资已超345亿元，资本正从整机向上游零部件渗透。泉智博关节模组A++轮（数亿元，年出货10万台）、灵心巧手B轮（近15亿元，单月出货4000+台，占全球高自由度灵巧手80%+市场份额）是两个典型样本。中游「具身大脑」赛道三个月融资超104亿元。这一结构变化意味着具身赛道从「谁做整机」转向「谁控制核心零部件」的新竞争格局——与5年前EV赛道的演化路径高度相似：特斯拉做整机，CATL/比亚迪控制电池，进而反过来影响整机定价权。具身赛道的「CATL」还没跑出来，这是当前最大的投资机会。",
    "persons": [],
    "sources": [
      {
        "label": "新浪财经 300亿涌入具身智能产业链 2026-05-05",
        "url": "https://finance.sina.com.cn/jjxw/2026-05-05/doc-inhwwezc3952105.shtml"
      }
    ]
  },
  {
    "id": "trend-2026-05-11-ai-agent-hardware-species",
    "date": "2026-05-11",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "AI Agent硬件新物种：从「录音笔」到「全流程执行代理」",
    "body": "5月8日，AI会议耳机公司未来智能完成亿元级A+轮融资，传音战略参投，双方合作研发面向全球新兴市场的「下一代AI Agent硬件」。创始人马啸（前科大讯飞智能耳机业务总经理）将这次战略转折定义为：AI不再只是「回答问题」，而是「感知—决策—执行全流程任务」的代理入口。这个判断指向一条被低估的路径：相比每天融资5亿的具身/人形赛道，办公/会议/个人助理场景的AI Agent硬件同样在重构，但估值预期更理性、商业化节奏更快（未来智能已有150万+全球用户，多次连续10x增长）。传音的战略价值尤其值得关注：传音在非洲/东南亚/南亚拥有4.5亿+手机用户，这是中国AI硬件公司进入全球新兴市场最被低估的渠道。",
    "persons": [
      {
        "id": "maxiao",
        "name": "马啸（未来智能）"
      }
    ],
    "sources": [
      {
        "label": "新浪财经 未来智能A+轮融资 2026-05-09",
        "url": "https://finance.sina.com.cn/jjxw/2026-05-09/doc-inhxhzaz1351651.shtml"
      },
      {
        "label": "钛媒体 未来智能传音合作 2026-05-08",
        "url": "https://www.tmtpost.com/7980779.html"
      }
    ]
  },
  {
    "id": "apple-design-golden-age-ended",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": true,
    "title": "苹果设计黄金时代已经闭环 — Liquid Glass 是终章不是新章",
    "body": "Alan Dye 2025.12 跳 Meta,被普遍解读为「Meta 挖人 + 苹果失血」的人才战。但更深一层的非共识判断是：**苹果设计部 40 年黄金时代已经在 Liquid Glass 这一刻闭环了**。这条血脉是 Bill Atkinson + Susan Kare(1984)→ Imran Chaudhri + Bas Ording(2007 iPhone)→ Jony Ive + Bart Andre（2010s 黄金期）→ Alan Dye(2025 Liquid Glass)。Liquid Glass 表面是 iOS 26 视觉重构，本质是 Ive 美学（玻璃材质 + 极简 + 自然光）在没有 Ive 的情况下被 Dye 用 visionOS 经验重新拼一次——这是「致敬之作」而非「下一时代」。Dye 跳 Meta 不是单纯人才流失，是「苹果设计部第二代」选择把这套语言带到下一个平台（智能眼镜 + AI 产品）。对设计行业的真正含义：**未来 5-10 年最具影响力的硬件设计语言不会再来自苹果**——会来自苹果出走者（Ive 在 LoveFrom、Dye 在 Meta、Chaudhri 在 Humane 失败后的余波）。苹果还会出好产品，但「定义时代美学」的角色已经换人。",
    "persons": [
      {
        "id": "alandye",
        "name": "Alan Dye"
      },
      {
        "id": "jonyive",
        "name": "Jony Ive"
      },
      {
        "id": "billatkinson",
        "name": "Bill Atkinson"
      },
      {
        "id": "imranchaudhri",
        "name": "Imran Chaudhri"
      }
    ],
    "sources": [
      {
        "label": "AppleInsider Alan Dye 跳 Meta",
        "url": "https://appleinsider.com/articles/25/12/03/apples-human-interface-design-chief-alan-dye-poached-by-meta"
      }
    ]
  },
  {
    "id": "pritzker-edge-architects",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": true,
    "title": "Pritzker 不是「最伟大建筑师奖」，是「边缘建筑师奖」",
    "body": "刘家琨 2025 获奖被国内媒体描述为「中国又一位被国际认可的建筑师」。但更准确的判断是：**Pritzker 自 2010s 起已经从「明星建筑师奖」转向了「边缘建筑师奖」**——奖给那些**主动拒绝市场逻辑、拒绝大体量项目、扎根本地材料**的建筑师。看获奖名单：Peter Zumthor（2009，瑞士山区只做 30 个项目）、王澍（2012，业余建筑工作室，只做小尺度）、坂茂（2014，纸建筑用于灾区）、刘家琨（2025，再生砖 + 西村大院）。**真正的明星派**（扎哈、Calatrava、Bjarke Ingels）反而**从未获奖或获奖很晚**（扎哈 2004 算早，但她去世 8 年都没新明星派得奖）。Pritzker 委员会（由 Yung Ho Chang 等长期评委组成）系统性偏好「反主流」选择。对中国建筑师的实操含义：**追求 Pritzker 不该模仿马岩松式的造型派，而应学王澍/刘家琨的「向地方、向材料、向社区」路径**。同时也意味着：中国大量做大体量地标的明星建筑师即使商业成功，在 Pritzker 体系里永远是「不被看见」的。",
    "persons": [
      {
        "id": "liujiakun",
        "name": "刘家琨"
      },
      {
        "id": "wangshu",
        "name": "王澍"
      },
      {
        "id": "peterzumthor",
        "name": "Peter Zumthor"
      },
      {
        "id": "shigeruban",
        "name": "坂茂"
      },
      {
        "id": "yunghochang",
        "name": "张永和（Pritzker 评委）"
      }
    ],
    "sources": [
      {
        "label": "ArchDaily Liu Jiakun Pritzker 2025",
        "url": "https://www.archdaily.com/1027571/chinese-architect-liu-jiakun-receives-the-2025-pritzker-architecture-prize"
      }
    ]
  },
  {
    "id": "designer-ceo-vs-design-led",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": true,
    "title": "「设计师 CEO」≠「设计驱动公司」— 90% 的「design-led」都是叙事",
    "body": "硅谷过去 5 年到处自称「design-led company」，但能持续做出真正设计驱动产品的公司不超过 10 家。原因不是这些公司没好设计师，而是**设计驱动 ≠ 雇了 VP of Design**。真正的判断标准是：**设计师本人是否坐在 CEO/founder 位置上**。验证名单很短：Brian Chesky（Airbnb CEO,RISD 工业设计）、Ivan Zhao（Notion CEO,UBC 认知科学+艺术）、Karri Saarinen（Linear CEO,芬兰前 Airbnb Principal）、Joe Gebbia(Airbnb co-founder,RISD)。这四人有共同的「**设计师权力结构**」：不需要向产品 VP 解释为什么细节重要，因为他们就是产品 VP 的老板。反例：Spotify、Uber、Slack 都自称 design-led,但当设计与增长冲突时永远增长赢——因为设计师不在最终决策权链路上。对中国 designer-founder 的非共识判断：**这条路在中国走不通，不是因为中国没好设计师，而是中国甲方/资本逻辑要求 CEO 必须先是「资源整合者」（融资+政商关系+招商）而不是「品味守护者」**。除非把公司放在海外（像 Ivan Zhao Notion），否则中国设计师当 CEO 的天花板在 100 人以下。",
    "persons": [
      {
        "id": "ivanzhao",
        "name": "Ivan Zhao(Notion)"
      },
      {
        "id": "karrisaarinen",
        "name": "Karri Saarinen(Linear)"
      },
      {
        "id": "brianchesky",
        "name": "Brian Chesky(Airbnb)"
      },
      {
        "id": "joegebbia",
        "name": "Joe Gebbia(Airbnb)"
      }
    ],
    "sources": [
      {
        "label": "Lenny's Newsletter Karri Saarinen",
        "url": "https://www.lennysnewsletter.com/p/inside-linear-building-with-taste"
      }
    ]
  },
  {
    "id": "design-engineer-is-atkinson-redux",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "Design Engineer 不是新职业，是 1984 年 Bill Atkinson 模式被 AI 工具复活",
    "body": "2025-2026 设计圈在炒「Design Engineer」（Vercel 的 Rauno Freiberg、Cursor 的 Ryo Lu）是新一代职业。但回看历史：**1984 年原版 Macintosh 团队的 Bill Atkinson 就是 design engineer——MacPaint 是他自己写的、QuickDraw 图形系统是他自己写的、HyperCard 也是他**。当时苹果整个团队约 20 人，人人都是设计师 + 工程师。1990s-2010s 产业膨胀过程把这个角色拆成了「UI 设计师 → 前端工程师 → 后端工程师」三段式分工。Cursor / v0 / Lovable 这一波 AI 工具的真正历史意义是**把分工拆掉的成本降到接近零**，所以 Atkinson 模式重新可能。对中国设计师的实操判断：**这不是「学 AI 工具」的问题，是「重新成为全栈型设计师」的范式回归**。在国内行业语境里，这意味着 UED 部门会被重新整合到工程团队，纯 UI 设计师角色会消失，设计师必须能交付可运行原型。这条路 5-10 年内会走完，跑不动的设计师会出局。Bill Atkinson 在 2025 去世，这一年 Cursor 火起来，某种意义上是设计史的一次完整循环。",
    "persons": [
      {
        "id": "billatkinson",
        "name": "Bill Atkinson"
      },
      {
        "id": "raunofreiberg",
        "name": "Rauno Freiberg"
      },
      {
        "id": "ryolu",
        "name": "Ryo Lu"
      },
      {
        "id": "bretvictor",
        "name": "Bret Victor"
      }
    ],
    "sources": [
      {
        "label": "Cursor Head of Design Ryo Lu YC talk",
        "url": "https://www.ycombinator.com/library/N8-cursor-head-of-design-reviews-startup-websites"
      }
    ]
  },
  {
    "id": "muji-advisory-board-japan-only",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "designer"
    ],
    "pinned": false,
    "title": "MUJI 顾问董事会是日本独有的设计治理创新 — Apple/Braun 都做不到",
    "body": "MUJI 自 2002 年起的「Advisory Board」结构（深泽直人 + 原研哉 + Sam Hecht + Jasper Morrison 4 位顶级设计师持续 20+ 年作为外部顾问董事）是被严重低估的设计组织创新。常见解读把 MUJI 等同于「极简风格」，但真正的非共识在治理结构：**Rams 时代的 Braun 是「内部设计部」（Rams 是员工）、Apple 是「核心团队封闭」（Ive 不接外部顾问）、Pentagram 是「合伙人共治」（只对自己事务所负责）。只有日本这种 4 位独立设计师作为品牌长期智囊董事的模式，从来没在西方品牌复制成功**。原因：第一，西方公司的 board 文化要求决策权清晰，不允许 4 个外部设计师对产品有持续影响力。第二，设计师彼此竞争（尤其在西方），很难维持 20 年合作。第三，日本「**社外取缔役**」（独立董事）文化天然支持这种结构。对国内品牌的实操判断：**网易严选/小米生态/无印良品中国这些 MUJI 模仿者只学了表面的极简，没学到 Advisory Board 这层治理**——而后者才是 MUJI 美学保持 20 年一致性的真正原因。",
    "persons": [
      {
        "id": "naotofukasawa",
        "name": "深泽直人"
      },
      {
        "id": "kenyahara",
        "name": "原研哉"
      },
      {
        "id": "samhecht",
        "name": "Sam Hecht"
      },
      {
        "id": "jaspermorrison",
        "name": "Jasper Morrison"
      }
    ],
    "sources": [
      {
        "label": "Naoto Fukasawa MUJI Advisory Board",
        "url": "https://www.muji.com/jp/advisory-board/"
      }
    ]
  },
  {
    "id": "deepseek-first-vc-45b-state-fund",
    "date": "2026-05-09",
    "type": "funding",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": true,
    "title": "DeepSeek 首次接受 VC,估值从 $20B 飙至 $45B,国家大基金领投",
    "body": "梁文锋此前一直坚持「不接受外部融资」，2025 年公司还以纯自有资金运行。但 V4 + 华为昇腾绑定后，DeepSeek 5 月初首次松口接受外部 VC,估值在数周内从 $200 亿翻到 $450 亿——领投方不是经典美元 VC 或国内一线美元基金，而是**国家集成电路产业投资基金**（俗称「大基金」）。这层信号比估值翻倍更重要：第一，国家大基金原本聚焦半导体制造与设计公司，直接 anchor 投一家 LLM 公司是历史首次，意味着 DeepSeek 在政策视角已被划为「国家算力战略组成部分」而非「应用层 AI 公司」。第二，梁文锋此前拒绝美元资本是为了保留团队对路线和定价的完全控制，现在选择国家队而非美元 VC,是对「科研驱动 + 开源 + 定价对标公益」叙事的延续——国家队通常不要求快速退出。第三，与之前的国家大基金三期入场具身智能（银河通用 25 亿）形成呼应，中国 AI 资本结构正在系统性「国家化」。对纯美元 VC 主导的中国 AI 创业者（如 Moonshot/MiniMax），这是结构性挤压信号。",
    "persons": [
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek）"
      }
    ],
    "sources": [
      {
        "label": "MEXC News DeepSeek $45B valuation",
        "url": "https://www.mexc.com/news/1074839"
      }
    ]
  },
  {
    "id": "embodied-supply-chain-shift",
    "date": "2026-05-09",
    "type": "trend",
    "graphs": [
      "hardware",
      "investor"
    ],
    "pinned": false,
    "title": "具身产业链「整机 → 零部件」融资迁移，300 亿涌入上游",
    "body": "2026 年迄今具身智能领域累计融资已超 345 亿元，但本周新数据显示一个结构性转变：**钱开始从整机公司流向上游零部件**。关节模组：泉智博 4 月数亿元 A++,小象电动 4 月超亿元 Pre-A。传感器：开普勒机器人 4 月亿元级 A++,蓝点触控 4 月超亿元 C+。灵巧手：灵心巧手 2 月 15 亿 B 轮后 4 月底闪电 B+。整机赛道融资仍火爆（千寻 30 亿/它石智航 4.55 亿美金/银河通用 25 亿），但上游零部件融资速度首次超过整机。背后逻辑：整机公司已开始上市/流血竞争，VC 看到「卖铲子比卖人更稳」——零部件 25-40% 毛利，B 端订单可见度高，被宇树/智元这种龙头绑定就有现金流。对硬件创业者的实操含义：不打算做整机的团队，2026 上半年是切入「关节模组/触觉传感器/末端执行器/电源管理」的最佳窗口——估值未透支，头部客户已被国网 68 亿订单倒逼必须采购。",
    "persons": [],
    "sources": [
      {
        "label": "新浪财经 300 多亿资本涌入具身全产业链",
        "url": "https://finance.sina.com.cn/jjxw/2026-05-05/doc-inhwwezc3952105.shtml"
      }
    ]
  },
  {
    "id": "ai-six-tigers-end-of-era",
    "date": "2026-05-09",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar",
      "investor"
    ],
    "pinned": false,
    "title": "「AI 六小虎」叙事告一段落：智谱+MiniMax 港股 IPO,月之暗面/阶跃融资落定",
    "body": "2024-2025 年中国 AI 圈最强的概念股是「六小虎」——智谱、MiniMax、月之暗面、百川、零一万物、阶跃星辰六家被视为对标 OpenAI 的中国一线 LLM 创业。本周资本市场动作让这个叙事进入终章：**智谱 + MiniMax 港股 IPO 已落定**（港交所申报），月之暗面/阶跃星辰各自完成新一轮融资，百川转向医疗 AI 路线（王小川宣布 2027 IPO），零一万物从模型转向应用。「六小虎」作为同质化竞争的故事彻底结束。下一阶段每家走自己的路：智谱押 toB Agent + 政企，MiniMax 押 C 端语音/视频（海螺），Moonshot（月之暗面）押长上下文+多模态，百川押医疗，01.AI 押应用，阶跃押多模态生成。但更深层的事：「AI 六小虎」叙事支撑的中国版「OpenAI 平替」幻觉破灭——DeepSeek 用一年半证明开源也能打，Anthropic ARR 反超 OpenAI,Mira Murati Thinking Machines 估值 $50B,中国 LLM 赛道格局已被 DeepSeek + 大厂（字节/阿里/腾讯）+ 创业公司三层重新切分，「六小虎」更多是一个时代的注脚而非未来。",
    "persons": [
      {
        "id": "yangzhilin",
        "name": "杨植麟（月之暗面）"
      },
      {
        "id": "yanjunjie",
        "name": "Yan Junjie(MiniMax)"
      },
      {
        "id": "jietang",
        "name": "唐杰（智谱）"
      },
      {
        "id": "wangxiaochuan",
        "name": "王小川（百川）"
      },
      {
        "id": "kaifulee",
        "name": "李开复（01.AI）"
      }
    ],
    "sources": [
      {
        "label": "财富中文 中国 AI 最新动态",
        "url": "https://www.fortunechina.com/shangye/c/2026-04/19/content_473422.htm"
      }
    ]
  },
  {
    "id": "deepseek-v4-huawei-decouple",
    "date": "2026-05-05",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar",
      "hardware"
    ],
    "pinned": true,
    "title": "DeepSeek V4 双重信号：性能赶超闭源 + 华为昇腾绑定",
    "body": "4.24 DeepSeek-V4 预览版正式开源。两个版本：V4-Pro（1.6T 参数 MoE,激活 49B）+ V4-Flash（2840 亿参数 MoE,激活 13B），原生支持 100 万 token 上下文。性能层面：Pro 在数学/STEM/竞赛代码超所有已公开开源模型，世界知识仅次 Gemini 3.1 Pro;agentic coding 体验超 Sonnet 4.5，接近 Opus 4.6 不思考模式——已成 DeepSeek 内部员工日常 coding 工具。价格层面：Pro 输入 12 元/百万 token,据传是 GPT-5.4 的 1/20。但真正颠覆性的是算力维度：V4 是全球首个原生跑在华为昇腾 950PR 上的万亿参数大模型（单卡 FP4 算力 1.56P,2.87 倍 H20），DeepSeek 首次把华为昇腾和 Nvidia 列入同一硬件验证清单，从 CUDA 生态明确切向 CANN 生态。8 家国产芯片厂（华为/百度/阿里/海光等）火速适配。对中国 AI 创业的含义：第一次有「性能够用 + 算力可获取 + 价格能承担」的三位一体国产开源底座，这是行业拐点级别的事件。",
    "persons": [
      {
        "id": "liangwenfeng",
        "name": "梁文锋（DeepSeek）"
      },
      {
        "id": "dayaguo",
        "name": "Daya Guo（DeepSeek-R1 一作）"
      }
    ],
    "sources": [
      {
        "label": "DeepSeek 官方 V4 公告",
        "url": "https://api-docs.deepseek.com/news/news260424"
      },
      {
        "label": "智东西 8 大国产芯片火速适配",
        "url": "https://zhidx.com/p/552782.html"
      },
      {
        "label": "钛媒体 黄仁勋的担忧成真",
        "url": "https://www.tmtpost.com/7966555.html"
      }
    ]
  },
  {
    "id": "gpt-5-5-reclaims-coding-throne",
    "date": "2026-05-05",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "GPT-5.5 把 agentic coding 王座从 Claude 手里夺回",
    "body": "OpenAI 4.23 发布 GPT-5.5，基准测试碾压 Anthropic 同期旗舰 Claude Opus 4.7。Terminal-Bench 2.0:82.7% vs 69.4%，13+ 分差距。Expert-SWE 73.1%，OSWorld-Verified 78.7%，FrontierMath 1-3 拿到 51.7%。更要命的是 token 效率：GPT-5.5 完成相同任务用的输出 token 比 Opus 4.7 少 72%，长上下文 retrieval 在 8-needle 512K-1M 区间 74% vs 32.2%——直接两倍多差距。一个月前 Anthropic ARR 刚反超 OpenAI($30B vs $25B)的叙事，被技术指标狠狠反扑。值得关注的是 Anthropic 内部对 Claude Code 的押注路径：Cursor 已切回 GPT-5.5 作为默认模型，Claude Code 团队（Boris Cherny + Cat Wu）未来 12 个月最大挑战不是产品打磨，而是 Sonnet 5/Opus 5 必须在 agentic 任务硬指标追回这 13 分差。Anthropic 此前 ARR 反超的故事如果模型不跟上，会被 reverse 一遍。",
    "persons": [
      {
        "id": "altman",
        "name": "Sam Altman"
      },
      {
        "id": "pachocki",
        "name": "Jakub Pachocki"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei"
      },
      {
        "id": "bcherny",
        "name": "Boris Cherny(Claude Code)"
      }
    ],
    "sources": [
      {
        "label": "OpenAI Introducing GPT-5.5",
        "url": "https://openai.com/index/introducing-gpt-5-5/"
      },
      {
        "label": "DigitalApplied GPT-5.5 vs Claude Opus 4.7 对比",
        "url": "https://www.digitalapplied.com/blog/gpt-5-5-vs-claude-opus-4-7-frontier-comparison"
      }
    ]
  },
  {
    "id": "unitree-ipo-2025-financials",
    "date": "2026-05-05",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "宇树 IPO 实锤：2025 营收 17 亿（+335%），扣非净利 6 亿（+674%）",
    "body": "2026.3.20 上交所正式受理宇树科技科创板 IPO 申请，拟募资 42.02 亿元，「人形机器人第一股」即将诞生。招股书数据揭穿了具身赛道的「估值高、不赚钱」叙事：2025 全年营收 17.08 亿，同比 +335%；扣非净利润超 6 亿，同比 +674%——这两个数字在中国硬件 IPO 史上都是头部水平。结构性变化更值得注意：2025 年 1-9 月，人形机器人收入占比首次达到 51.53%，**超过原本的现金牛四足机器人**；人形出货量 5500+ 台。集邦预估 2026 年宇树+智元两家将合计占国产人形机器人 80% 出货量。对其他还在融资轮次跑的具身公司，这意味着 IPO 窗口期的关键 KPI 已被宇树定锚——18 个月内做到「营收破 10 亿 + 净利转正 + 人形产品收入占比超 50%」，否则估值很难支撑。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      }
    ],
    "sources": [
      {
        "label": "上交所 宇树招股书披露",
        "url": "https://static.sse.com.cn/stock/disclosure/announcement/c/202603/002178_20260320_BLK4.pdf"
      },
      {
        "label": "OFweek 具身智能 IPO 潮起",
        "url": "https://robot.ofweek.com/2026-04/ART-898890-8420-30684330.html"
      }
    ]
  },
  {
    "id": "state-grid-68b-procurement",
    "date": "2026-05-05",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": true,
    "title": "国网 68 亿采购 8500 台机器人 — 第一张「国家级订单」结构曝光",
    "body": "国家电网 4 月 22 日内部下发《2026 年具身智能发展规划》，年内采购约 8500 台具身设备总投资 68 亿元，结构是：四足巡检 5000 台 / 15 亿，人形带电作业 500 台 / 25 亿（单价 500 万），双臂巡检 3000 台 / 18 亿，剩余 10 亿做研发与人才。中标供应商：云深处、宇树、智元、UBTech、傅利叶。算上南方电网与地方能源跟单，2026 年电力行业可能成为具身智能第一个百亿级垂直市场。这意味着接下来 12 个月赛道核心指标已切换：不是融资额，而是中标资质 + 量产交付。还在 Demo 阶段的公司压力会陡增。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      },
      {
        "id": "pengzhihui",
        "name": "彭志辉（智元）"
      }
    ],
    "sources": [
      {
        "label": "界面新闻 国网采购详情",
        "url": "https://m.jiemian.com/article/14311565.html"
      },
      {
        "label": "智东西 68 亿史上最大采购",
        "url": "https://zhidx.com/p/552717.html"
      }
    ]
  },
  {
    "id": "galbot-lda-anti-bc",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": true,
    "title": "银河通用 LDA-1B：第一篇反「行为克隆」的中国具身论文",
    "body": "银河通用最新论文《LDA-1B: Scaling Latent Dynamics Action Model via Universal Embodied Data Ingestion》挑战当前主流路线。核心论点：行为克隆（让机器人模仿人类示教）有结构性缺陷——协变量偏移导致每个微小执行误差会滚雪球，且智能上限被人力示教成本封死，永远撑不起「走进千家万户」的故事。LDA 走世界模型路线 + 通用数据摄取（吃野生短视频等无标注数据），把数据成本曲线从「线性 × 任务数」变成「亚线性」。这是中国具身赛道第一篇正面拒绝主流的「技术不同意见书」，值得跟踪 12 个月看数据效率上是否真能跑通——若跑通，行为克隆派的估值会被重估。",
    "persons": [
      {
        "id": "wanghe",
        "name": "王鹤（银河通用）"
      }
    ],
    "sources": [
      {
        "label": "钛媒体 LDA 拆穿人形最大谎言",
        "url": "https://www.tmtpost.com/7973821.html"
      }
    ]
  },
  {
    "id": "schmidhuber-credit-narrative",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "Schmidhuber 的'我先发明的'是 AI 学术圈最大的非共识",
    "body": "Jürgen Schmidhuber 长期声称自己 1990 年代就发明了 LSTM（Hochreiter+Schmidhuber 1997 论文确实是 LSTM 起源）、GAN 的雏形（1990 PM-GAN）、attention 机制等。主流 AI 圈选择性忽视他 — 2018 图灵奖给了 Hinton/LeCun/Bengio，没他。但他的论文都是真的。这件事反映：学术信用不是看谁先发明，而是看谁有平台（Hinton 在多伦多+Google、LeCun 在 NYU+Meta、Bengio 在 Mila+Element AI），Schmidhuber 困在瑞士小机构没扩散。提醒任何科研人员：研究本身不是终点，把研究'能扩散的体系'比研究质量更决定影响力。",
    "persons": [
      {
        "id": "schmidhuber",
        "name": "Jürgen Schmidhuber"
      },
      {
        "id": "hochreiter",
        "name": "Sepp Hochreiter"
      },
      {
        "id": "hinton",
        "name": "Geoffrey Hinton"
      },
      {
        "id": "lecun",
        "name": "Yann LeCun"
      },
      {
        "id": "bengio",
        "name": "Yoshua Bengio"
      }
    ],
    "sources": []
  },
  {
    "id": "karpathy-edu-leverage",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "Karpathy 一个人重塑了 LLM 时代的 AI 教育",
    "body": "Andrew Ng 的 Coursera 是 AI 入门的事实标准（基础+通用），但 Karpathy 的 YouTube 系列（makemore / micrograd / GPT-from-scratch / nanoGPT）才是 LLM 时代的入门事实标准。区别在更新速度：预录的 MOOC 跟不上前沿，Karpathy 的'边讲边写'模式跟着 LLM 一起进化。Karpathy 现在创办 Eureka Labs 把这个模式产品化。一个人 + YouTube + 顶级技术认知 = 比任何 EdTech 公司都更高的杠杆 — 这是软件时代'教学即产品'的典型样本。",
    "persons": [
      {
        "id": "karpathy",
        "name": "Andrej Karpathy"
      },
      {
        "id": "ng",
        "name": "Andrew Ng"
      }
    ],
    "sources": []
  },
  {
    "id": "constitutional-vs-rlhf",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "Anthropic Constitutional AI vs OpenAI RLHF — 路线分歧的本质",
    "body": "Amodei 兄妹从 OpenAI 出来后，Anthropic 推出 Constitutional AI（让模型用一组宪法式规则自我评估和纠正），而 OpenAI 继续 RLHF（人类标注偏好做反馈）。哲学差异是：Anthropic 团队认为'人类标注'天然不可 scale 到超人类智能（人类怎么标注比自己聪明的模型？），Constitutional 才是真正可扩展的 alignment 方法。OpenAI 团队（Schulman 在内）则相信 RLHF 加上 process reward 可以走得更远。这两条路在 2026 年 GPT-5 vs Claude 4 还没决出胜负。但创业角度看 — 这是真正的'第一性原理之争'，比'谁的模型大'重要得多。",
    "persons": [
      {
        "id": "damodei",
        "name": "Dario Amodei"
      },
      {
        "id": "daniela",
        "name": "Daniela Amodei"
      },
      {
        "id": "schulman",
        "name": "John Schulman"
      },
      {
        "id": "altman",
        "name": "Sam Altman"
      }
    ],
    "sources": []
  },
  {
    "id": "deepseek-counter-narrative",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "DeepSeek 梁文锋：工程师驱动+开源+低估值的反叙事",
    "body": "梁文锋从量化基金（幻方）切到大模型，DeepSeek 用极致工程优化做出对标 GPT-4 级别的开源模型，估值远低于同期 Moonshot/智谱/MiniMax。这个模式跟 OpenAI 完全相反：OpenAI 是组织化（强 PR + 估值跃迁 + 闭源），DeepSeek 是工程师导向（无 PR + 开源 + 低估值）。如果 DeepSeek 模式可复制 — 即'小团队+工程极致+开源生态'打得过'大团队+巨额融资+闭源'，那会重塑整个 AI 公司治理。2026 年初 V3/R1 在全球开源社区已经有了对标 Llama 的影响力，这是中国 AI 第一次在'方法论'层面输出全球。",
    "persons": [
      {
        "id": "liangwenfeng",
        "name": "梁文锋"
      },
      {
        "id": "altman",
        "name": "Sam Altman"
      },
      {
        "id": "mensch",
        "name": "Arthur Mensch"
      }
    ],
    "sources": []
  },
  {
    "id": "individual-vs-collective-ai",
    "date": "2026-05-04",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "AI 公司治理：个人主导 vs 集体决策的隐形分裂",
    "body": "OpenAI / Anthropic / Google DeepMind 是'集体决策制' — 研究员多人投票决定方向，CEO 只是协调者。但 xAI（Musk）、Mistral（Mensch）、DeepSeek（梁文锋）是'个人主导制' — 一个核心人物决定一切技术路线和产品策略。短期看个人主导制效率高（决策快、不内耗），长期看集体决策制更稳（避免单点失败）。Musk 的 xAI 是个公开实验：Grok 开源、X 平台数据、Memphis 巨型 GPU 集群、Musk 个人意志贯穿整个公司。如果 xAI 在 2026-2027 跑出来，会颠覆'AI 公司必须研究员主导'的共识。",
    "persons": [
      {
        "id": "musk",
        "name": "Elon Musk"
      },
      {
        "id": "mensch",
        "name": "Arthur Mensch"
      },
      {
        "id": "liangwenfeng",
        "name": "梁文锋"
      },
      {
        "id": "altman",
        "name": "Sam Altman"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei"
      }
    ],
    "sources": []
  },
  {
    "id": "trend-2026-05-03-embodied-factory",
    "date": "2026-05-03",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "具身智能进厂：从「试点」升级为「量产交付」",
    "body": "本周多个渠道确认，具身机器人正从 2025 年的工厂 Demo 迈入批量落地阶段。星动纪元已在顺丰/中国邮政 10+ 物流中心部署 L7 人形，单笔订单超 5000 万元；银河通用 Galbot S1 在宁德时代产线实现行业唯一零遥操稳定运行；国家电网 2026 年采购计划 8500 台机器人，预算 68 亿元。此前赛道核心指标是「融资额」，这周开始已明确切换为「订单量 + 毛利率」。对还在叙事阶段的公司，这意味着 12 个月内会被要求交出实际 GMV 数字。",
    "persons": [
      {
        "id": "chenjianyu",
        "name": "陈建宇（星动纪元）"
      },
      {
        "id": "wanghe",
        "name": "王鹤（银河通用）"
      }
    ],
    "sources": [
      {
        "label": "人民日报 2026-04-29",
        "url": "http://finance.people.com.cn/n1/2026/0429/c1004-40711056.html"
      }
    ]
  },
  {
    "id": "trend-2026-05-03-meta-physical-ai",
    "date": "2026-05-03",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "Meta 收购 ARI：大厂从软件 AI 转向物理 AI 的信号枪",
    "body": "5 月 1 日，Meta 收购机器人 AI 初创公司 Assured Robot Intelligence（ARI），联创 Lerrel Pinto（前 Fauna Robotics）和 Xiaolong Wang（前英伟达研究员）加入 Meta 超级智能实验室，核心技术是让机器人理解并适应真实物理环境中的人类行为。这是 Google DeepMind 消化 Everyday Robots 团队之后，第二次大厂通过 acqui-hire 切入物理 AI。微软（Nuance + Azure robotics）、谷歌（Everyday Robots + pi 合作）、Meta（ARI）已形成三足鼎立。大厂虹吸效应会让物理 AI 的顶尖人才越来越贵，中国具身赛道的海外竞争成本将进一步提升。",
    "persons": [],
    "sources": [
      {
        "label": "TechCrunch 2026-05-01",
        "url": "https://techcrunch.com/2026/05/01/meta-buys-robotics-startup-to-bolster-its-humanoid-ai-ambitions/"
      }
    ]
  },
  {
    "id": "trend-2026-05-03-humanoid-shakeout",
    "date": "2026-05-03",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "人形赛道清场：千台产能成生死分水岭",
    "body": "本周多个信号显示具身赛道正在分化进入清场阶段。宇树 IPO 申请受理后被证监会随机抽中现场检查，2026 年目标出货 2 万台人形；智元 2026 年 Q1 已完成累计万台下线，2025 年营收 10.5 亿元，年出货量预计占行业 40%+。与此同时，钛媒体「具身智能开始清场」报道指出：部分中小玩家已在变卖 GPU 服务器，具身研讨者比具身创业者更多。清场逻辑与 2023 年 LLM 大模型一致——产能 + 营收 + 资本结构是三道筛子，只有三道都过的才有资格进入 2027 年。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      },
      {
        "id": "pengzhihui",
        "name": "彭志辉（智元）"
      }
    ],
    "sources": [
      {
        "label": "钛媒体 具身智能清场",
        "url": "https://www.tmtpost.com/7928180.html"
      },
      {
        "label": "宇树 IPO 受理 Caixin",
        "url": "https://www.caixinglobal.com/2026-03-21/unitree-robotics-files-for-608-million-star-market-ipo-102425491.html"
      }
    ]
  },
  {
    "id": "transformer-8-startups",
    "date": "2026-05-03",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "Transformer 8 作者创业失败率 > 60%",
    "body": "发明 Transformer 的 8 位作者在 2017 论文之后陆续离开 Google 各自创业。Vaswani + Parmar 的 Adept 已经被 Amazon acqui-hire（创始人离开）、Shazeer 的 Character.AI 被 Google 反向收编，Kaiser 又回 OpenAI。真正持续运营且健康的只有 Cohere（Aidan Gomez）和 Sakana AI（Llion Jones）。即使是 LLM 时代的「母机」级别学者，创业失败率仍然高于行业平均。这件事提示：商业判断和技术突破是两个独立能力，能写出 paper 不等于能跑出公司。",
    "persons": [
      {
        "id": "vaswani",
        "name": "Ashish Vaswani"
      },
      {
        "id": "shazeer",
        "name": "Noam Shazeer"
      },
      {
        "id": "gomez",
        "name": "Aidan Gomez"
      },
      {
        "id": "jones",
        "name": "Llion Jones"
      }
    ],
    "sources": []
  },
  {
    "id": "openai-talent-diaspora",
    "date": "2026-05-03",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "OpenAI 离职潮已重塑半个 AI 领域",
    "body": "Anthropic（Dario + Daniela Amodei，2021 离开 + 7 位核心研究员）、Sutskever 的 SSI（2024）、Mira Murati 新公司、Schulman 去 Anthropic、Karpathy → Eureka Labs。OpenAI 真正的 IP 不是 GPT 模型，而是一种'让聪明人围绕 RLHF + Scaling 协同工作'的组织方法 — 而这种'组织 IP'正在通过离职潮被分散到 6+ 家公司。一个团队的'认知一致性'比代码或数据更难复制，所以 Anthropic 才有可能用更小的团队做出对标 GPT 的产品。",
    "persons": [
      {
        "id": "altman",
        "name": "Sam Altman"
      },
      {
        "id": "sutskever",
        "name": "Ilya Sutskever"
      },
      {
        "id": "damodei",
        "name": "Dario Amodei"
      },
      {
        "id": "karpathy",
        "name": "Andrej Karpathy"
      }
    ],
    "sources": []
  },
  {
    "id": "deepmind-three-cofounders",
    "date": "2026-05-03",
    "type": "relationship",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "DeepMind 三联创只剩 Demis 一人",
    "body": "Demis Hassabis 留任（2024 Nobel 化学奖，AlphaFold），Shane Legg 留任做首席 AGI 科学家，但 Mustafa Suleyman 2019 因伦理争议离开 DeepMind 去创办 Inflection AI，2024 被微软消化为 Microsoft AI CEO — 模型 IP 留给微软，人才平移到微软。这件事提示：头部 AI 公司里'伦理 / 合规 / 产品安全'角色的离职率往往比技术核心高，因为商业化压力下他们的话语权会先被稀释。Suleyman 去微软之后，Inflection 几乎瞬间空心化。",
    "persons": [
      {
        "id": "hassabis",
        "name": "Demis Hassabis"
      },
      {
        "id": "legg",
        "name": "Shane Legg"
      },
      {
        "id": "suleyman",
        "name": "Mustafa Suleyman"
      }
    ],
    "sources": []
  },
  {
    "id": "academia-vs-industry-lab",
    "date": "2026-05-03",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": false,
    "title": "学术 vs 工业实验室的影响力倒挂",
    "body": "2010-2015 是学术实验室主导（Hinton 多伦多组、LeCun NYU、Bengio Mila、Stanford NLP）；2015-2020 是大公司研究院（Google Brain、FAIR、DeepMind）；2020-至今是创业公司主战场（OpenAI、Anthropic、Mistral、xAI）。学院派现在的真正贡献在从'做研究'变成'输出博士生 / 创办公司'。Stanford 的 Fei-Fei、Andrew Ng、Manning、Liang 是少数还在体制内输出影响力的，但他们的影响也越来越通过创业（Coursera、Stanford HAI、World Labs）外溢。LLM 时代的根本规律是 scale + capital，这两件学校都做不了。",
    "persons": [
      {
        "id": "feifei",
        "name": "Fei-Fei Li"
      },
      {
        "id": "ng",
        "name": "Andrew Ng"
      },
      {
        "id": "hinton",
        "name": "Geoffrey Hinton"
      },
      {
        "id": "lecun",
        "name": "Yann LeCun"
      }
    ],
    "sources": []
  },
  {
    "id": "zhuxiaohu-ai-application-bet",
    "date": "2026-05-03",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": true,
    "title": "朱啸虎'只投 AI 应用'是中国式 PMF 哲学的极端版本",
    "body": "2024 起朱啸虎公开拒绝投通用大模型，只投有现金流 PMF 的 AI 应用。这与硅谷主流（押注基础模型）逆向。短期看似保守、规避了模型烧钱风险，但长期看可能错过 OpenAI / Anthropic 级别的回报。这个判断对错完全取决于'中国是否有可能跑出独立 LLM' — 如果 Yes，朱啸虎错过最大蛋糕；如果 No，他是少数提前看清的 GP。在 2026 年 DeepSeek / Qwen / Doubao 已经开源化的局面下，他这一轮其实赢了。",
    "persons": [
      {
        "id": "zhuxiaohu",
        "name": "朱啸虎"
      }
    ],
    "sources": []
  },
  {
    "id": "shen-nanpeng-pivot",
    "date": "2026-05-03",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "沈南鹏从'押人'转向'押产业链节点'",
    "body": "Sequoia China 早期（2005-2018）风格是重度押创始人 — 王兴、张一鸣、宿华、王慧文、唐岩、朱啸虎本人都是 Sequoia 关系网的产物，'人对了什么都对'是当时的座右铭。但 2020 后 Sequoia 越来越多投供应链 / 基础设施 / 零部件公司（机器人减速器、AI infra、光模块），而不是单一 toC App。反映 VC 对'下一个王兴级别 founder'的等待变成'分散小赌注'的策略转变 — 这其实是承认'押人'的边际回报在下降，从平台型公司向产业链型公司迁移。",
    "persons": [
      {
        "id": "shennp",
        "name": "沈南鹏"
      }
    ],
    "sources": []
  },
  {
    "id": "leijun-quiet-investor",
    "date": "2026-05-03",
    "type": "non-consensus",
    "graphs": [
      "investor"
    ],
    "pinned": true,
    "title": "雷军是中国最低调但回报率最稳定的硬件投资人",
    "body": "顺为资本 + 小米生态链投了 100+ 家硬件公司，几个超级明星：石头科技（科创板 IPO）、华米/Zepp（NYSE）、绿米 Aqara（递表港交所）、九号公司（科创板）、追觅（启动 IPO）。但雷军一直被定位为'创业者'，很少被讨论为'投资人' — 这其实严重低估了他的资本布局。从被投回报看，小米生态链的 hit rate 比朱啸虎、张颖、张磊等公开 GP 都更稳定，因为雷军同时给被投公司提供供应链 + 渠道 + 品牌背书。这种'创业者 + 投资人 + 平台'三合一身份在中国其他人没有等价物。",
    "persons": [
      {
        "id": "leijun",
        "name": "雷军"
      }
    ],
    "sources": []
  },
  {
    "id": "lizexiang-angel-ecosystem",
    "date": "2026-05-03",
    "type": "relationship",
    "graphs": [
      "investor"
    ],
    "pinned": false,
    "title": "李泽湘：中国硬件创业的'非典型 GP'",
    "body": "李泽湘不是传统意义的 GP — 他是港科大教授 + 松山湖 XbotPark 机器人基地创办人，但他孵化 + 天使投资了大疆（汪滔）、云鲸（张峻彬）、本末（以及很多）。这种'学术导师 + 加速器 + 天使'的混合身份在传统 VC 体系里没有对标 — 等价物在硅谷可能是 Y Combinator 的 Paul Graham，但 PG 是程序员，李泽湘是机械工程师。中国硬件创业的'第一波 PMF'（消费机器人、扫地机、储能）大半都跟李泽湘有 1-2 度连接。做硬件创业的人，跟李泽湘有 2 度内的关系比跟任何 VC 有 2 度内的关系都更值钱。",
    "persons": [
      {
        "id": "lizexiang2",
        "name": "李泽湘"
      }
    ],
    "sources": []
  },
  {
    "id": "plaud-no-vc",
    "date": "2026-05-02",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": true,
    "title": "PLAUD 拒绝 VC，自我造血做到 2.5 亿美金 ARR",
    "body": "许高在 2024 年 11 月达到 1 亿美元年化营收时主动拒绝所有投资机构接触。2025 年 ARR 升到 2.5 亿美元，约一半来自年订阅（$99-240/年），硬件 + 订阅利润率约 25%，堪比 iPhone。证明软件订阅 + 硬件入口可以让 AI 硬件公司不依赖 VC — 跟具身赛道单轮 25 亿 / 4.55 亿美金的打法是反向逻辑。对于软件背景切硬件的创业者，这是比'做一个本体'更可控的路径。",
    "persons": [
      {
        "id": "xugao",
        "name": "许高 Nathan"
      }
    ],
    "sources": []
  },
  {
    "id": "dji-second-diaspora",
    "date": "2026-04-30",
    "type": "relationship",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "大疆系正在第二次扩散 — 不做无人机，做一切",
    "body": "大疆 2017-2022 第一次扩散是横向延伸（扫地机、储能、3D 打印 — 即用相似品类的供应链经验做下一品类）。但过去 12 个月里出现的新模式是'跨界扩散' — 璇玑动力做机器人本体平台、Ludens AI 做家庭陪伴、浪爪做桌面纺织、UNICUS 做积木大模型。把大疆积累的供应链、高速电机、视觉算法跨到完全不同场景。值得把'前大疆 X 岗位'当成下一波创业人才地图的关键标签 — 这个标签会比'前 OPPO'、'前小米'更有信号。",
    "persons": [
      {
        "id": "wangtao",
        "name": "汪滔（DJI 母节点）"
      },
      {
        "id": "xuanji",
        "name": "璇玑动力"
      },
      {
        "id": "xuelijun",
        "name": "薛立君（Ludens AI）"
      },
      {
        "id": "langzhao",
        "name": "浪爪智能"
      },
      {
        "id": "unicus",
        "name": "UNICUS"
      }
    ],
    "sources": []
  },
  {
    "id": "huawei-genius-cluster",
    "date": "2026-04-30",
    "type": "relationship",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "华为天才少年群在具身赛道集结",
    "body": "稚晖君（智元，2022.12 离开）是第一波；接着欧拉万象（华为机器人天才少年，主导华为云 cloudRobo）、晨昏线（华为盘古班底）、它石智航（前华为自驾 CTO）。从 2022 年稚晖君开第一枪起，华为系正在往机器人本体 / 世界模型 / 通用具身分化出 4 条线，合计融资额已超 50 亿元。可能比 OpenAI 离职潮更值得重视 — 因为'华为天才少年'机制本身是国家层级的 AI 人才储备，正在以创业方式释放。",
    "persons": [
      {
        "id": "pengzhihui",
        "name": "彭志辉（稚晖君）"
      },
      {
        "id": "olwx",
        "name": "欧拉万象"
      },
      {
        "id": "chenhunxian",
        "name": "晨昏线"
      },
      {
        "id": "chenyilun",
        "name": "陈亦伦（它石）"
      }
    ],
    "sources": []
  },
  {
    "id": "xinghaitu-poke-split",
    "date": "2026-04-30",
    "type": "relationship",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "星海图分裂 — 通用做不出 PMF 就回家庭场景",
    "body": "高继扬（星海图创始人，前 Waymo/Momenta）留守做通用具身；前联合创始人 + 首席科学家 + 清华叉院助理教授拆出去新创破壳机器人，主打'帮家里主动干活的机器人'。这是具身创业从'通用本体'向'垂直家庭场景'的分裂样本 — 当通用方案在前 18 个月做不出 PMF，联创层面会出现路径分歧。可以预测未来 12 个月会有更多类似分裂（每家通用具身公司都可能孵化或裂变出 1-2 家垂直场景的）。",
    "persons": [
      {
        "id": "gaojiyuang",
        "name": "高继扬（星海图）"
      },
      {
        "id": "poke",
        "name": "破壳机器人"
      }
    ],
    "sources": []
  },
  {
    "id": "unitree-4290-cambrian",
    "date": "2026-04-28",
    "type": "trend",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "宇树 $4290 双臂人形 = 具身软件 Cambrian 期开关",
    "body": "宇树最新双臂人形机器人入门价 $4,290（约 3.1 万人民币），首次把「可编程 + 双臂操纵」硬件拉到高校实验室、中小开发者团队也买得起的价位。类比：2008 年 Arduino $30 释放了硬件 maker 一代，2014 年树莓派 $35 释放了边缘计算开发者一代。$4,290 这个价位在具身赛道意味着「算法/数据/应用层创业者」会在未来 12 个月暴增——他们不必自己造硬件，可以把宇树本体当成 commodity 平台。这对自己造本体的创业者是坏消息（毛利会被压缩到 PC 行业水平），对软件 + 数据派则是历史窗口。Jason 注：可以重点观察「不做本体只做大脑/手势识别/家居场景」这一波新创业者。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      }
    ],
    "sources": [
      {
        "label": "Startup Fortune Unitree $4290",
        "url": "https://startupfortune.com/unitree-just-priced-a-dual-arm-humanoid-robot-at-4290-and-the-embodied-ai-experimentation-race-is-about-to-get-crowded/"
      }
    ]
  },
  {
    "id": "tashi-455m-record",
    "date": "2026-04-15",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": true,
    "title": "它石智航 4.55 亿美金 Pre-A 创中国具身单轮纪录",
    "body": "前华为自驾 CTO 陈亦伦 + 大疆机器视觉总工组合操盘，董事长李震宇是百度智驾前总裁（造 Apollo + 萝卜快跑）。同期发布通用具身大模型 AWE3.0。这一轮把 3 月银河通用刚创下的 25 亿元单轮纪录直接抹掉。两个月内单轮纪录被刷新两次 — 反映资本对'通用具身'路线的极端集中下注。但也意味着如果 AWE3.0 的早期 demo 撑不住，未来 12 个月压力会非常大。",
    "persons": [
      {
        "id": "chenyilun",
        "name": "陈亦伦"
      },
      {
        "id": "wanghe",
        "name": "王鹤（被超越方）"
      }
    ],
    "sources": []
  },
  {
    "id": "qianxun-30days-30b",
    "date": "2026-04-08",
    "type": "funding",
    "graphs": [
      "hardware",
      "investor"
    ],
    "pinned": false,
    "title": "千寻智能 30 天融 30 亿：马云 + 雷军同时押注一家具身",
    "body": "韩峰涛 2024 年 1 月创立千寻智能，到 2026 年 4 月仅 26 个月估值破百亿。融资节奏：2 月 24 日两轮共 20 亿（云锋 + 红杉中国领投）+ 4 月 7 日 10 亿（顺为 + 云锋联合领投）。马云的云锋 + 雷军的顺为同时下注同一家具身公司，是中国硬科技融资史上未见的密度。但这种速度本质上是两位巨头「为对冲做的双押」——双方都不能错过具身赛道，所以选了同一头部下注。对其他创业者而言：跟韩峰涛抢钱抢人都已无意义，但有可能押他没覆盖的细分场景（家用 / 户外 / 教育）。",
    "persons": [
      {
        "id": "hanfengtao",
        "name": "韩峰涛（千寻）"
      },
      {
        "id": "leijun",
        "name": "雷军（顺为）"
      }
    ],
    "sources": [
      {
        "label": "量子位 千寻 20 亿融资",
        "url": "https://www.qbitai.com/2026/02/381766.html"
      },
      {
        "label": "澎湃 30 天 30 亿马雷联手",
        "url": "https://m.thepaper.cn/newsDetail_forward_32915524"
      }
    ]
  },
  {
    "id": "anthropic-overtakes-openai-arr",
    "date": "2026-04-07",
    "type": "non-consensus",
    "graphs": [
      "ai-scholar"
    ],
    "pinned": true,
    "title": "Anthropic ARR 300 亿美金反超 OpenAI 250 亿——非共识翻盘",
    "body": "Anthropic 4 月 7 日内部数据：ARR 达 300 亿美元，较 2025 年底 90 亿暴涨 233%；同期 OpenAI 披露 ARR 250 亿。截至 4 月，超 1000 家企业客户每年向 Anthropic 付超过 100 万美元。两年前业内共识是「OpenAI 永远领先一代」，但 Claude 4.X 系列在企业代码生成（Cursor / Replit / Anthropic API 直接接入）和 Constitutional AI 路线上的累积优势开始变现。对中国 AI 学者轴的含义：Dario/Daniela Amodei 这条 OpenAI 出走线，从被视作「保守派」到现在变成「商业反超派」，会引发新一轮中国研究员对「安全 + 商业兼得」路径的重新认真考虑。Schmidhuber 派 / RLHF 派 / Constitutional AI 派的话语权正在重新洗牌。",
    "persons": [],
    "sources": [
      {
        "label": "新浪财经 Anthropic 反超 OpenAI",
        "url": "https://finance.sina.com.cn/stock/t/2026-04-29/doc-inhwcvfa8021583.shtml"
      }
    ]
  },
  {
    "id": "h1-2026-ipo-wave",
    "date": "2026-04-01",
    "type": "funding",
    "graphs": [
      "hardware"
    ],
    "pinned": false,
    "title": "5 家硬件公司 2026 上半年集中递表 IPO",
    "body": "2026.3.20 宇树科创板受理（拟募 42 亿）→ 2026.3.30 绿米 Aqara 港交所 → 2026.4.1 XREAL 港交所 → 追觅启动 IPO 目标估值 1500 亿 → 正浩 EcoFlow 双线推进美股 + A 股。AI 硬件第一波 IPO 退出窗口正在打开。对老股东是回血窗口，但对新进场创业者可能意味着：接下来 12-18 个月一级市场会更挑剔 — 因为 LP 看到回报后会要求 GP 不再轻易开支票。",
    "persons": [
      {
        "id": "wangxingxing",
        "name": "王兴兴（宇树）"
      },
      {
        "id": "youyanji",
        "name": "游延筠（绿米）"
      },
      {
        "id": "xuchi",
        "name": "徐驰（XREAL）"
      },
      {
        "id": "yuhao",
        "name": "俞浩（追觅）"
      },
      {
        "id": "wanglei",
        "name": "王雷（正浩）"
      }
    ],
    "sources": []
  },
  {
    "id": "national-fund-embodied-ai",
    "date": "2026-03-02",
    "type": "non-consensus",
    "graphs": [
      "hardware",
      "investor"
    ],
    "pinned": false,
    "title": "国家大基金三期入场具身智能",
    "body": "2026.3 银河通用 25 亿元单轮由国家人工智能产业基金（大基金三期）、中石化、中信集团、中行、上汽、中芯聚源领投，这是大基金首次出手具身智能。同月雷鸟创新 10 亿元由中国移动 + 中信金石领投，联通跟投 — 国内运营商首次战略投智能眼镜。资本结构正在从 VC 转向'国家队 + 产业链战略投'。对创业者而言意味着：估值倍数会降但不会被 down round 卡死，但失去对冲意见的董事会。",
    "persons": [
      {
        "id": "wanghe",
        "name": "王鹤（银河通用）"
      },
      {
        "id": "lihongwei",
        "name": "李宏伟（雷鸟）"
      }
    ],
    "sources": []
  },
  {
    "id": "skild-ai-14b-vs-china",
    "date": "2026-01-14",
    "type": "funding",
    "graphs": [
      "investor",
      "hardware"
    ],
    "pinned": false,
    "title": "Skild AI $14B 估值 vs 国内具身：中美 GP 结构已分流",
    "body": "1 月 14 日 Skild AI 完成 14 亿美金 C 轮，估值 140 亿美金（≈1000 亿人民币），SoftBank 领投，跟投方包括 Nvidia/NVentures、Bezos Expeditions、Macquarie、红杉。同期国内最高估值具身公司银河通用约 25 亿人民币单轮、估值 ~250 亿——是 Skild 的 1/4。但更值得注意的是 GP 名单结构：Skild 是经典「美元基金 + 战略科技投资人」组合（孙正义 + 黄仁勋 + 贝佐斯），国内则是「国家大基金 + 央企产业资本」（中石化 / 中信 / 上汽 / 中芯聚源）。底层资金性质不同 → 创始人退出预期不同 → 出海路径不同。一家创始人能拿哪种钱，基本预示了未来 5 年的玩法。",
    "persons": [
      {
        "id": "masason",
        "name": "Masayoshi Son（SoftBank）"
      },
      {
        "id": "jensenhuang",
        "name": "Jensen Huang（NVIDIA）"
      },
      {
        "id": "jeffbezos",
        "name": "Jeff Bezos（Bezos Expeditions）"
      }
    ],
    "sources": [
      {
        "label": "TechCrunch Skild AI $14B",
        "url": "https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/"
      },
      {
        "label": "Skild AI Series C 公告",
        "url": "https://www.skild.ai/blogs/series-c"
      }
    ]
  },
  {
    "id": "dreame-jiamei-shell",
    "date": "2025-12-15",
    "type": "non-consensus",
    "graphs": [
      "hardware"
    ],
    "pinned": true,
    "title": "追觅借壳嘉美包装是硬件创业的资本运作样本",
    "body": "2025 年 12 月，俞浩斥资 22.82 亿元收购 A 股嘉美包装（002969.SZ）54.9% 股权成实控人。这不是简单的并购 — 是为追觅生态（主品牌 + 汽车 + 储能 + 大家电）从 2026 年底起在全球交易所批量上市做的预备。可能的逻辑：单一公司 IPO 估值有天花板，但生态拆出来分别上市可以避开这个天花板。值得硬件创业者想清楚 — 公司能不能拆？拆完估值是不是更高？",
    "persons": [
      {
        "id": "yuhao",
        "name": "俞浩"
      }
    ],
    "sources": []
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
.insight-share-btn {
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.55);
  border-radius: 980px;
  padding: 3px 11px;
  font-size: 11px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.3px;
  line-height: 1.5;
  white-space: nowrap;
}
.insight-share-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.92);
  border-color: rgba(255, 255, 255, 0.28);
}
.insight-share-btn:disabled {
  opacity: 0.5;
  cursor: wait;
}

/* Share-image canvas (hidden, used for html2canvas render) */
.share-canvas-host {
  position: fixed;
  top: -20000px;
  left: -20000px;
  width: 720px;
  z-index: -1;
  pointer-events: none;
}
.share-card {
  width: 720px;
  box-sizing: border-box;
  background: linear-gradient(160deg, #0a0a0a 0%, #181818 100%);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif;
  padding: 56px 56px 36px;
  line-height: 1.5;
}
.share-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}
.share-card-brand {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1.5px;
  font-weight: 500;
}
.share-card-type {
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 980px;
  letter-spacing: 0.4px;
  font-weight: 500;
}
.share-card-type-non-consensus { background: rgba(255, 159, 10, 0.16); color: #ffb443; }
.share-card-type-relationship  { background: rgba(94, 158, 255, 0.16); color: #8fb6ff; }
.share-card-type-resume        { background: rgba(191, 90, 242, 0.16); color: #d09fff; }
.share-card-type-funding       { background: rgba(48, 209, 88, 0.16); color: #7be592; }
.share-card-type-trend         { background: rgba(100, 210, 255, 0.16); color: #6ed4ff; }
.share-card-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.32;
  letter-spacing: -0.5px;
  margin: 0 0 26px;
  color: #fff;
}
.share-card-date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 24px;
  letter-spacing: 0.5px;
}
.share-card-body {
  font-size: 16px;
  line-height: 1.78;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 32px;
  word-wrap: break-word;
  white-space: normal;
}
.share-card-body strong {
  color: #ffb443;
  font-weight: 600;
}
.share-card-persons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.share-card-person-chip {
  font-size: 13px;
  padding: 5px 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 0.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 980px;
  color: rgba(255, 255, 255, 0.8);
}
.share-card-footer {
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.share-card-footer-brand {
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.2px;
  margin-bottom: 5px;
}
.share-card-footer-tagline {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.3px;
}
.share-card-footer-url {
  font-size: 16px;
  font-weight: 500;
  color: #ffb443;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  letter-spacing: 0.4px;
  padding: 8px 16px;
  background: rgba(255, 159, 10, 0.08);
  border: 0.5px solid rgba(255, 159, 10, 0.3);
  border-radius: 980px;
  white-space: nowrap;
  flex-shrink: 0;
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
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.2px;
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  line-height: 1.4;
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
  font-size: 11px;
  letter-spacing: 0.3px;
  padding: 3px 9px;
  border-radius: 980px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.75);
  white-space: nowrap;
}
.insight-type-badge.insight-type-non-consensus { background: rgba(255, 159, 10, 0.12); border-color: rgba(255, 159, 10, 0.4); color: #ffb443; }
.insight-type-badge.insight-type-relationship  { background: rgba(94, 158, 255, 0.12); border-color: rgba(94, 158, 255, 0.4); color: #8fb6ff; }
.insight-type-badge.insight-type-resume        { background: rgba(191, 90, 242, 0.12); border-color: rgba(191, 90, 242, 0.4); color: #d09fff; }
.insight-type-badge.insight-type-funding       { background: rgba(48, 209, 88, 0.12); border-color: rgba(48, 209, 88, 0.4); color: #7be592; }
.insight-type-badge.insight-type-trend         { background: rgba(100, 210, 255, 0.12); border-color: rgba(100, 210, 255, 0.4); color: #6ed4ff; }
.insight-date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
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
.insight-card-bodywrap {
  margin: 0 0 14px;
}
.insight-card-body {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.82);
  margin: 0;
}
.insight-card-body.is-clamped {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, #000 70%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 70%, transparent 100%);
}
.insight-expand-btn {
  margin-top: 8px;
  padding: 0;
  border: 0;
  background: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2px;
  cursor: pointer;
  transition: color 0.15s;
}
.insight-expand-btn:hover { color: rgba(255, 255, 255, 0.9); }
.insight-expand-btn::after { content: " ▾"; font-size: 10px; }
.insight-expand-btn[aria-expanded="true"]::after { content: " ▴"; font-size: 10px; }
.insight-card-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
}
.insight-card-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  margin-right: 4px;
  letter-spacing: 0.2px;
}
.insight-person-chip {
  font-size: 12px;
  padding: 4px 11px;
  background: rgba(255, 255, 255, 0.05);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 980px;
  color: rgba(255, 255, 255, 0.75);
}
.insight-source-link {
  font-size: 12px;
  padding: 4px 11px;
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
  .insight-card-title { font-size: 17px; }
  .insight-card-body { font-size: 15px; }
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
    list = list.sort((a, b) => new Date(b.date) - new Date(a.date));
    const container = document.getElementById('insights-cards-container');
    if (list.length === 0) {
      const labelMap = { all: '内容', 'non-consensus': '非共识', 'relationship': '关系', 'resume': '履历', 'funding': '融资', 'trend': '最新情况' };
      container.innerHTML = `<div class="insights-empty">暂无${labelMap[activeFilter] || '内容'} · 持续更新中</div>`;
      return;
    }
    container.innerHTML = list.map(renderCard).join('');
    applyClamp(container);
  }

  // After render, hide the 展开 button on cards whose body doesn't actually overflow
  // the clamped height (short insights need no toggle).
  function applyClamp(container) {
    container.querySelectorAll('.insight-card-bodywrap').forEach(wrap => {
      const body = wrap.querySelector('.insight-card-body');
      const btn = wrap.querySelector('.insight-expand-btn');
      if (!body || !btn) return;
      // body is clamped here; if full content fits, drop the clamp + button
      if (body.scrollHeight <= body.clientHeight + 4) {
        body.classList.remove('is-clamped');
        btn.style.display = 'none';
      }
    });
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
            <button class="insight-share-btn" type="button" data-share-id="${escapeAttr(item.id)}" title="分享为图片">↗ 分享</button>
          </div>
        </div>
        <div class="insight-card-bodywrap">
          <p class="insight-card-body is-clamped">${escapeHtml(item.body).replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>')}</p>
          <button class="insight-expand-btn" type="button" aria-expanded="false">展开全文</button>
        </div>
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

  // 卡片用:近期显示相对,7 天外显示具体日期(M月D日 / 跨年带年份)
  function formatRelativeDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const now = new Date();
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days = Math.round((todayMidnight - d) / 86400000);
    if (days < 0) return formatAbsoluteDate(dateStr);
    if (days === 0) return '今天';
    if (days === 1) return '昨天';
    if (days === 2) return '前天';
    if (days < 7) return `${days} 天前`;
    // 7 天以上显示具体日期,同年省略年份
    if (d.getFullYear() === now.getFullYear()) return `${d.getMonth() + 1}月${d.getDate()}日`;
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  // 分享图用:始终绝对中文长格式(分享出去后过几个月再看也准确)
  function formatAbsoluteDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
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
    const shareBtn = e.target.closest('.insight-share-btn');
    if (shareBtn) {
      e.preventDefault();
      e.stopPropagation();
      const id = shareBtn.dataset.shareId;
      const item = INSIGHTS_DATA.find(x => x.id === id);
      if (item) shareInsightAsImage(item, shareBtn);
      return;
    }
    const expandBtn = e.target.closest('.insight-expand-btn');
    if (expandBtn) {
      e.preventDefault();
      e.stopPropagation();
      const body = expandBtn.parentElement.querySelector('.insight-card-body');
      const clamped = body.classList.toggle('is-clamped');
      expandBtn.setAttribute('aria-expanded', clamped ? 'false' : 'true');
      expandBtn.firstChild ? (expandBtn.childNodes[0].nodeValue = clamped ? '展开全文' : '收起') : (expandBtn.textContent = clamped ? '展开全文' : '收起');
      const card = expandBtn.closest('.insight-card');
      if (card) trackEvent('insight_expand_toggled', { insight: card.dataset.insightId, expanded: !clamped });
      return;
    }
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

  // ===== Share insight as image =====
  async function shareInsightAsImage(item, btn) {
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '生成中…';
    try {
      // lazy-load html2canvas-pro (handles modern CSS like oklch, better CJK font support)
      if (!window.html2canvas) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.8/dist/html2canvas-pro.min.js';
          s.onload = resolve;
          s.onerror = () => reject(new Error('Failed to load html2canvas'));
          document.head.appendChild(s);
        });
      }
      const TYPE_LABELS_FULL = {
        'non-consensus': '非共识洞察',
        'relationship': '人物关系',
        'resume': '人物履历',
        'funding': '融资动态',
        'trend': '最新趋势'
      };
      // Footer 信息根据当前所在图谱动态生成
      const GRAPH_TAGLINES = {
        'hardware':  '中国 AI 硬件创业者地图 · 127 位创始人',
        'investor':  '中国 AI 投资人地图 · 71 位 GP/合伙人',
        'ai-scholar': '全球 AI 研究人地图 · 89 位学者/工程师',
        'designer':  '全球设计师地图 · 139 位主理人'
      };
      // 按用户当前所在页面决定 footer — 从哪个图谱页面分享出去,图片就指向那个图谱
      const graphMeta = FOOTER_LINKS.find(l => l.id === graphId) || FOOTER_LINKS[0];
      const footerLabel = graphMeta.label || '智能硬件图谱';
      const footerTagline = GRAPH_TAGLINES[graphId] || '中国科技人物图谱';
      const footerUrl = (graphMeta.url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
      // Render-time bold parsing: **xxx** → <strong>xxx</strong>
      const bodyHtml = escapeHtml(item.body).replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
      const personChips = (item.persons || []).map(p =>
        `<span class="share-card-person-chip">${escapeHtml(p.name)}</span>`
      ).join('');
      const host = document.createElement('div');
      host.className = 'share-canvas-host';
      host.innerHTML = `
        <div class="share-card">
          <div class="share-card-header">
            <div class="share-card-brand">${escapeHtml(footerLabel)}</div>
            <div class="share-card-type share-card-type-${item.type}">${TYPE_LABELS_FULL[item.type] || item.type}</div>
          </div>
          <h1 class="share-card-title">${escapeHtml(item.title)}</h1>
          <div class="share-card-date">${formatAbsoluteDate(item.date)}</div>
          <div class="share-card-body">${bodyHtml}</div>
          ${personChips ? `<div class="share-card-persons">${personChips}</div>` : ''}
          <div class="share-card-footer">
            <div>
              <div class="share-card-footer-brand">${escapeHtml(footerLabel)}</div>
              <div class="share-card-footer-tagline">${escapeHtml(footerTagline)}</div>
            </div>
            <div class="share-card-footer-url">${escapeHtml(footerUrl)}</div>
          </div>
        </div>
      `;
      document.body.appendChild(host);
      // let DOM settle so fonts render
      await new Promise(r => setTimeout(r, 80));
      const target = host.querySelector('.share-card');
      const canvas = await window.html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        width: 720,
        height: target.offsetHeight,
        windowWidth: 720
      });
      document.body.removeChild(host);
      const sanitizedId = item.id.replace(/[^a-z0-9-]/gi, '').slice(0, 60);
      canvas.toBlob((blob) => {
        if (!blob) {
          alert('图片生成失败');
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${sanitizedId || 'insight'}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1500);
      }, 'image/png', 0.95);
      trackEvent('insight_shared', { insight: item.id, type: item.type });
    } catch (err) {
      console.error('Share failed:', err);
      alert('图片生成失败,请重试');
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  }

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
