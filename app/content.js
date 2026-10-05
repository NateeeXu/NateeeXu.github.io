// All page copy lives here so the English (/) and Chinese (/zh/) pages stay in sync.
// Facts follow the 2027 product and hardware résumés.

export const links = {
  email: "mailto:nate19991907829@gmail.com",
  github: "https://github.com/NateeeXu",
  linkedin: "https://www.linkedin.com/in/nate-xiance-xu-b28721351",
  resumeProduct: "/Nate_Xu_Resume_Product.pdf",
  resumeHardware: "/Nate_Xu_Resume_Hardware_IC.pdf",
  cloudsublet: "https://cloudsublet.com",
  digestSource: "https://github.com/NateeeXu/follow-builders-feishu",
  digestPage: "https://nateeexu.github.io/follow-builders-feishu/",
};

// Phone screenshots shown in the CloudSublet case study (public/images/*).
// Leave empty to show only the trust-flow diagram.
export const productShots = [
  { src: "/images/app-home.webp", label: { en: "Campus home", zh: "校区首页" }, alt: { en: "CloudSublet home screen for Northwestern Evanston", zh: "CloudSublet 西北大学 Evanston 校区首页" } },
  { src: "/images/app-map.webp", label: { en: "Shuttle map", zh: "校车地图" }, alt: { en: "CloudSublet campus shuttle map with listings along each route", zh: "CloudSublet 校园交通地图与沿线房源" } },
  { src: "/images/app-chat.webp", label: { en: "Trusted chat", zh: "站内聊天" }, alt: { en: "CloudSublet chat with a locked contact-exchange step", zh: "CloudSublet 聊天页，联系方式交换处于锁定状态" } },
];

const en = {
  htmlLang: "en",
  meta: {
    title: "Nate Xu — Product Builder, from Silicon to Software",
    description:
      "Nate Xu is the founder of CloudSublet and an M.S. EE student at Northwestern who ships products end to end, with engineering depth down to RTL and silicon.",
  },
  skip: "Skip to content",
  nav: [
    ["work", "Work"],
    ["engineering", "Engineering"],
    ["growth", "Growth"],
    ["about", "About"],
  ],
  switchLabel: "中文",
  switchHref: "/zh/",
  switchAria: "切换到中文",
  resume: "Résumé",
  hero: {
    status: "Evanston, IL · M.S. EE @ Northwestern · open to 2027 roles",
    titleA: "Product builder,",
    titleB: "from silicon to software.",
    body:
      "I’m Nate Xu, founder of CloudSublet. I turn messy real-world problems into shipped products and own both the product decisions and the code. My background is hardware (RISC-V CPUs, FPGA data paths, a mixed-signal tape-out), so I can go all the way down the stack when the problem needs it.",
    primary: "View selected work",
    secondary: "Download résumé",
    readout: [
      ["100", "beta users", "CloudSublet, two rounds"],
      ["−60%", "reported issues", "between beta rounds"],
      ["4", "universities", "NU · UChicago · Berkeley · Yale"],
      ["95 MHz", "RISC-V CPU", "five-stage, on FPGA"],
    ],
    caption: ["NATE XU / 徐显策", "SIG 0x4E58"],
  },
  work: {
    index: "01",
    label: "Selected work",
    title: "Products shipped to real users.",
    body: "I start from a pain point I can see firsthand and carry it through positioning, PRD, interaction design, data model, implementation, and beta.",
  },
  cloudsublet: {
    tag: "Founder · Product & Engineering Lead · May 2026 – now",
    name: "CloudSublet",
    lede:
      "A student-housing marketplace for international students at Northwestern, UChicago, UC Berkeley, and Yale.",
    metrics: [
      ["100", "beta users across two rounds"],
      ["−60%", "reported issues, round 1 → 2"],
      ["< 4 h", "to fix newly found usability issues"],
      ["4", "campus communities"],
    ],
    body:
      "Students were hunting for sublets in fragmented group chats and social feeds: campuses mixed together, fields inconsistent, and phone numbers exposed too early. I defined the positioning, PRD, information architecture, and data model, then built it myself as a WeChat Mini Program on Tencent CloudBase.",
    stack: ["WeChat Mini Program", "JavaScript", "Node.js", "Tencent CloudBase", "Cloud functions"],
    link: "Visit cloudsublet.com",
    flowTitle: "Trust flow",
    flow: [
      ["VERIFY", "Student identity signal"],
      ["DISCOVER", "Campus-aware listings & requests"],
      ["CHAT", "In-platform, listing-linked"],
      ["CONSENT", "Both sides opt in"],
      ["EXCHANGE", "Contact details released"],
    ],
    decisions: [
      [
        "Problem framing",
        "Campus as context",
        "Schools, neighborhoods, apartment aliases, and shuttle routes became one discovery system, so a listing is always read in the context of the campus it serves.",
      ],
      [
        "Trust by design",
        "Contact comes last",
        "Contact details are exchanged only after both sides have actually talked. The platform stays out of rent, deposits, and contracts, and the product says so plainly.",
      ],
      [
        "Beta discipline",
        "Two rounds, measured",
        "Ran a 100-user, two-round beta. I diagnosed and shipped every fix myself, and reported issues fell 60% between rounds.",
      ],
      [
        "Built to last",
        "Quality as a system",
        "Main package plus 9 feature subpackages, cloud functions with field whitelists, environment isolation, and 19 automated test files.",
      ],
    ],
  },
  digest: {
    tag: "Independent developer · May – Jun 2026",
    name: "AI Builders Digest",
    lede:
      "A daily Chinese briefing that collects what AI builders are shipping, summarizes it with context, and delivers it every morning.",
    body:
      "I defined the target readers and content-selection criteria, then built a decoupled prepare → summarize → deliver pipeline. Feeds are gathered, summarized with an LLM into Chinese, and pushed to Feishu at 10:00 Beijing time by GitHub Actions.",
    sources: ["X / posts", "YouTube", "RSS", "Podcasts"],
    stages: ["PREPARE", "SUMMARIZE", "DELIVER"],
    output: ["10:00 CST", "今日 AI Builders", "Signal extracted, context kept."],
    links: [
      ["Project page", "digestPage"],
      ["Source on GitHub", "digestSource"],
    ],
  },
  engineering: {
    index: "02",
    label: "Engineering depth",
    title: "I can go all the way down the stack.",
    body: "Hardware is where I learned to debug: find the root cause, measure it, and prove the fix. Pick a layer.",
    tablistLabel: "Engineering layers",
    layers: [
      {
        key: "PRODUCT",
        name: "Product",
        metric: "100",
        unit: "beta users",
        title: "CloudSublet",
        context: "Founder · 2026",
        points: [
          "WeChat Mini Program on Tencent CloudBase: data model, service layer, cloud functions",
          "Field whitelists, environment isolation, and migration preflight checks",
          "Main package + 9 subpackages, 19 automated test files",
        ],
        tags: ["JavaScript", "Node.js", "CloudBase"],
      },
      {
        key: "SYSTEM",
        name: "System",
        metric: "145",
        unit: "MB/s",
        title: "DDR-less Zynq PL–PS data path",
        context: "Research Intern · Xi’an Institute of Optics and Precision Mechanics, CAS · 2025",
        points: [
          "AXI4-Lite control, BRAM/FIFO double buffering, and a memory-mapped PS driver",
          "Stable eight-channel acquisition at 50 MHz; tuned burst length and sampling windows",
          "Fixed clock-domain-crossing instability with redesigned synchronizers and handshakes",
          "Adopted as the lab’s standard interface for later high-speed acquisition projects",
        ],
        tags: ["Verilog", "Zynq SoC", "AXI4-Lite", "CDC"],
      },
      {
        key: "ARCHITECTURE",
        name: "Architecture",
        metric: "95",
        unit: "MHz",
        title: "Five-stage RISC-V CPU",
        context: "Project Lead · EECS 151, UC Berkeley · 2025",
        points: [
          "32-bit pipeline with CSR registers and hardware interrupt handling",
          "1.24 CPI with a non-forwarding pipeline; stall/NOP insertion shortened the critical path",
          "LUTs −22% (1,293 → 1,008) and 34 BRAM blocks saved",
          "Verified with RTL simulation, assembly tests, ISA validation, and FPGA prototyping",
        ],
        tags: ["Verilog", "Vivado", "RISC-V", "FPGA"],
      },
      {
        key: "CIRCUIT",
        name: "Circuit",
        metric: "3.7",
        unit: "mV ref. error",
        title: "Mixed-signal IoT sensor IC, taped out",
        context: "Project Lead · EE 140, UC Berkeley · 2025",
        points: [
          "Integrated an 8-bit SAR ADC, PGA, bandgap reference, analog MUX, and LDOs",
          "1.6–3.2 V supply, 0–70 °C; LDOs regulate to 1.8 V",
          "Folded-cascode and two-stage amplifiers in Cadence Virtuoso, DRC/LVS/PEX",
          "StrongARM latch comparator verified across PVT corners post-layout",
        ],
        tags: ["Cadence Virtuoso", "DRC/LVS/PEX", "SAR ADC"],
        image: { src: "/images/silicon-dies.webp", width: 1050, height: 1400, alt: "Silicon dies from Nate’s IC design work" },
      },
      {
        key: "DEVICE",
        name: "Device",
        metric: "25",
        unit: "nm",
        title: "NMOSFET device design",
        context: "EE 130, UC Berkeley · 2025",
        points: [
          "Explored channel doping, junction depth, spacer length, and EOT with TCAD",
          "Designed against ION, IOFF, DIBL, subthreshold swing, and temperature targets",
        ],
        tags: ["TCAD", "BSIM4"],
      },
    ],
  },
  growth: {
    index: "03",
    label: "Growth & content",
    title: "I know how attention works.",
    body:
      "Before building products I built audiences. I read engagement, reach, and completion data, then changed what I made because of it. The same loop now drives how I run product betas.",
    stats: [
      ["10K+", "Followers", "Own RedNote account"],
      ["74K+", "Likes", "RedNote"],
      ["500K+", "Views", "Top-performing post"],
      ["60+", "Brand partnerships", "Sponsored campaigns"],
      ["+20K", "Followers", "University Douyin, as video team lead"],
      ["100+", "Videos produced", "50+ over 1K likes"],
    ],
  },
  about: {
    index: "04",
    label: "About",
    title: "Curiosity travels.",
    body:
      "I grew up on hardware, spent a semester at Berkeley moving between digital design, analog ICs, and devices, and now study EE at Northwestern while building CloudSublet. I like the hard path from first idea to something that works, and explaining it clearly once it does.",
    logLabel: "Timeline",
    log: [
      ["2024.07", "Xidian University", "Research assistant: MobileNetV2 on a Zynq-7000 SoC, 12 FPS at 320×240"],
      ["2025.01", "UC Berkeley", "Engineering exchange: EECS 151, EE 140, EE 130"],
      ["2025.06", "CAS · XIOPM", "Research intern: FPGA high-speed data acquisition"],
      ["2026.05", "CloudSublet", "Founder, product & engineering lead"],
      ["2026.06", "Xi’an University of Technology", "B.Eng., Electronic Science & Technology, GPA 3.6/4.0"],
      ["2026.09", "Northwestern University", "M.S., Electrical Engineering, expected 2028"],
    ],
    photos: [
      { src: "/images/berkeley.webp", width: 900, height: 1200, alt: "Nate at UC Berkeley with the Campanile behind him", caption: "37.8715° N · 122.2730° W" },
      { src: "/images/field-sky.webp", width: 900, height: 1200, alt: "Nate in a wide mountain landscape", caption: "FIELD NOTE / STAY CURIOUS" },
    ],
  },
  contact: {
    eyebrow: "Open to product, software, and hardware roles for 2027",
    title: "Building something ambitious? Let’s talk.",
    links: [
      ["Email", "email"],
      ["GitHub", "github"],
      ["LinkedIn", "linkedin"],
      ["Résumé · Product", "resumeProduct"],
      ["Résumé · Hardware / IC", "resumeHardware"],
    ],
    footer: ["© 2026 Nate Xu", "Built across silicon and software", "Back to top ↑"],
  },
};

const zh = {
  htmlLang: "zh-CN",
  meta: {
    title: "徐显策 Nate Xu：从芯片到软件的产品构建者",
    description:
      "徐显策，CloudSublet 创始人，Northwestern 电子工程硕士在读。端到端交付产品，工程能力一直延伸到 RTL 与芯片。",
  },
  skip: "跳到正文",
  nav: [
    ["work", "项目"],
    ["engineering", "工程"],
    ["growth", "增长"],
    ["about", "关于"],
  ],
  switchLabel: "EN",
  switchHref: "/",
  switchAria: "Switch to English",
  resume: "简历",
  hero: {
    status: "Evanston, IL · Northwestern 电子工程硕士 · 寻找 2027 机会",
    titleA: "产品构建者，",
    titleB: "从芯片到软件。",
    body:
      "我是徐显策（Nate Xu），CloudSublet 创始人。我把真实世界里混乱的问题做成能上线的产品，产品决策和代码都由我负责。我是硬件出身，做过 RISC-V CPU、FPGA 数据通路和混合信号流片，所以需要的时候可以一路下探到底层。",
    primary: "查看代表项目",
    secondary: "下载简历",
    readout: [
      ["100", "内测用户", "CloudSublet 两轮内测"],
      ["−60%", "问题反馈", "两轮内测之间"],
      ["4", "所高校", "NU · UChicago · Berkeley · Yale"],
      ["95 MHz", "RISC-V CPU", "五级流水线，FPGA 实现"],
    ],
    caption: ["NATE XU / 徐显策", "SIG 0x4E58"],
  },
  work: {
    index: "01",
    label: "代表项目",
    title: "交付给真实用户的产品。",
    body: "我从亲眼看到的痛点出发，一路负责到底：产品定位、PRD、交互设计、数据模型、开发实现，直到内测。",
  },
  cloudsublet: {
    tag: "创始人 · 产品与研发负责人 · 2026.05 至今",
    name: "CloudSublet",
    alias: "寓见云居",
    lede: "面向留学生的校园转租平台，覆盖 Northwestern、UChicago、UC Berkeley 和 Yale。",
    metrics: [
      ["100", "名用户参与两轮内测"],
      ["−60%", "问题反馈（第一轮 → 第二轮）"],
      ["< 4 h", "修复新发现的可用性问题"],
      ["4", "个校园社区"],
    ],
    body:
      "留学生在微信群和小红书里找短租：信息碎片化、校区混杂、字段不统一，联系方式也过早暴露。我完成了产品定位、PRD、信息架构和数据模型，并亲自用微信小程序 + 腾讯云 CloudBase 把它做了出来。",
    stack: ["微信小程序", "JavaScript", "Node.js", "腾讯云 CloudBase", "云函数"],
    link: "访问 cloudsublet.com",
    flowTitle: "信任流程",
    flow: [
      ["VERIFY", "学生身份验证"],
      ["DISCOVER", "按校区浏览房源与求租"],
      ["CHAT", "站内聊天，关联房源"],
      ["CONSENT", "双方同意"],
      ["EXCHANGE", "交换联系方式"],
    ],
    decisions: [
      ["问题定义", "以校区为上下文", "把学校、区域、公寓别名和校车路线整合成一套发现系统，每条房源都放在它所服务的校区语境里看。"],
      ["信任设计", "联系方式放在最后", "双方真正有效沟通之后，才交换联系方式。平台不参与租金、押金和合同，并在产品里讲清楚这条边界。"],
      ["内测方法", "两轮内测，用数据说话", "组织 100 人、两轮内测。所有问题都由我定位并修复，第二轮的问题反馈比第一轮下降 60%。"],
      ["工程质量", "质量是一套系统", "主包加 9 个业务分包，云函数配字段白名单和环境隔离，19 个自动化测试文件。"],
    ],
  },
  digest: {
    tag: "独立开发者 · 2026.05 – 2026.06",
    name: "AI Builders 中文情报 Digest",
    lede: "每日中文简报：收集 AI 构建者正在做的事，带上下文做摘要，每天早上自动推送。",
    body:
      "我先定义了目标读者和内容筛选标准，再搭建 prepare → summarize → deliver 三段解耦的 pipeline：抓取信息源，用 LLM 生成中文摘要，每天北京时间 10 点由 GitHub Actions 推送到飞书。",
    sources: ["X / 推文", "YouTube", "RSS", "播客"],
    stages: ["PREPARE", "SUMMARIZE", "DELIVER"],
    output: ["10:00 CST", "今日 AI Builders", "提取信号，保留上下文。"],
    links: [
      ["项目主页", "digestPage"],
      ["GitHub 源码", "digestSource"],
    ],
  },
  engineering: {
    index: "02",
    label: "工程深度",
    title: "需要时，我可以一路下探到底层。",
    body: "硬件教会了我怎么调试：找到根因，量化它，再证明修复有效。选一层看看。",
    tablistLabel: "工程层级",
    layers: [
      {
        key: "PRODUCT",
        name: "产品",
        metric: "100",
        unit: "内测用户",
        title: "CloudSublet",
        context: "创始人 · 2026",
        points: [
          "基于腾讯云 CloudBase 的微信小程序：数据模型、服务层、云函数",
          "字段白名单、环境隔离与迁移预检工具",
          "主包 + 9 个业务分包，19 个自动化测试文件",
        ],
        tags: ["JavaScript", "Node.js", "CloudBase"],
      },
      {
        key: "SYSTEM",
        name: "系统",
        metric: "145",
        unit: "MB/s",
        title: "无 DDR 的 Zynq PL–PS 数据通路",
        context: "研究实习生 · 中国科学院西安光学精密机械研究所 · 2025",
        points: [
          "AXI4-Lite 控制、BRAM/FIFO 双缓冲、内存映射的 PS 端驱动",
          "8 通道 50 MHz 稳定采集；优化突发长度与采样窗口",
          "重新设计两级同步器与握手逻辑，解决跨时钟域不稳定问题",
          "该架构成为实验室后续高速采集项目的标准接口",
        ],
        tags: ["Verilog", "Zynq SoC", "AXI4-Lite", "CDC"],
      },
      {
        key: "ARCHITECTURE",
        name: "架构",
        metric: "95",
        unit: "MHz",
        title: "五级流水线 RISC-V CPU",
        context: "项目负责人 · EECS 151，UC Berkeley · 2025",
        points: [
          "32 位流水线，含 CSR 寄存器与硬件中断处理",
          "无前递架构实现 1.24 CPI；插入 stall/NOP 缩短关键路径",
          "LUT 减少 22%（1,293 → 1,008），节省 34 个 BRAM 块",
          "通过 RTL 仿真、汇编测试、ISA 验证与 FPGA 原型验证",
        ],
        tags: ["Verilog", "Vivado", "RISC-V", "FPGA"],
      },
      {
        key: "CIRCUIT",
        name: "电路",
        metric: "3.7",
        unit: "mV 基准误差",
        title: "混合信号 IoT 传感器芯片（已流片）",
        context: "项目负责人 · EE 140，UC Berkeley · 2025",
        points: [
          "集成 8 位 SAR ADC、PGA、带隙基准、模拟 MUX 与 LDO",
          "支持 1.6–3.2 V 供电、0–70 °C；LDO 稳压至 1.8 V",
          "在 Cadence Virtuoso 中设计折叠共源共栅与两级放大器，完成 DRC/LVS/PEX",
          "StrongARM 锁存比较器通过 PVT 角与后仿验证",
        ],
        tags: ["Cadence Virtuoso", "DRC/LVS/PEX", "SAR ADC"],
        image: { src: "/images/silicon-dies.webp", width: 1050, height: 1400, alt: "徐显策 IC 设计作品的芯片裸片" },
      },
      {
        key: "DEVICE",
        name: "器件",
        metric: "25",
        unit: "nm",
        title: "NMOSFET 器件设计",
        context: "EE 130，UC Berkeley · 2025",
        points: [
          "用 TCAD 探索沟道掺杂、结深、侧墙长度与 EOT",
          "针对 ION、IOFF、DIBL、亚阈值摆幅与温度指标进行设计",
        ],
        tags: ["TCAD", "BSIM4"],
      },
    ],
  },
  growth: {
    index: "03",
    label: "增长与内容",
    title: "我懂注意力是怎么运作的。",
    body:
      "做产品之前，我先做过内容和受众。我会看互动、触达和完播数据，再据此调整内容。同样的闭环，现在用在了我带的产品内测上。",
    stats: [
      ["10K+", "粉丝", "个人小红书账号"],
      ["74K+", "获赞", "小红书"],
      ["500K+", "浏览", "单篇最高"],
      ["60+", "品牌合作", "商单推广"],
      ["+20K", "粉丝增长", "校官方抖音，任视频组组长期间"],
      ["100+", "条视频", "其中 50+ 条过千赞"],
    ],
  },
  about: {
    index: "04",
    label: "关于",
    title: "好奇心没有边界。",
    body:
      "我从硬件起步，在伯克利交换的一个学期里穿梭于数字设计、模拟 IC 和半导体器件之间；现在在 Northwestern 读电子工程硕士，同时在做 CloudSublet。我喜欢从一个想法一路走到真正能用的结果，做成之后，也喜欢把它讲清楚。",
    logLabel: "经历",
    log: [
      ["2024.07", "西安电子科技大学", "研究助理：在 Zynq-7000 上部署 MobileNetV2，320×240 下 12 FPS"],
      ["2025.01", "UC Berkeley", "工程交换：EECS 151、EE 140、EE 130"],
      ["2025.06", "中科院西安光机所", "研究实习生：FPGA 高速数据采集"],
      ["2026.05", "CloudSublet", "创始人，产品与研发负责人"],
      ["2026.06", "西安理工大学", "电子科学与技术 学士，GPA 3.6/4.0"],
      ["2026.09", "Northwestern University", "电子工程 硕士，预计 2028 毕业"],
    ],
    photos: [
      { src: "/images/berkeley.webp", width: 900, height: 1200, alt: "徐显策在伯克利钟楼前", caption: "37.8715° N · 122.2730° W" },
      { src: "/images/field-sky.webp", width: 900, height: 1200, alt: "徐显策在开阔的山野中", caption: "FIELD NOTE / STAY CURIOUS" },
    ],
  },
  contact: {
    eyebrow: "寻找 2027 年产品、软件与硬件方向的机会",
    title: "有一个有野心的项目？聊聊吧。",
    links: [
      ["邮箱", "email"],
      ["GitHub", "github"],
      ["LinkedIn", "linkedin"],
      ["简历 · 产品", "resumeProduct"],
      ["简历 · 硬件 / IC", "resumeHardware"],
    ],
    footer: ["© 2026 徐显策", "从芯片到软件", "回到顶部 ↑"],
  },
};

export const content = { en, zh };
