import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  DownloadSimple,
  EnvelopeSimple,
  List,
  MapPin,
  Play,
  X,
} from "@phosphor-icons/react";

const content = {
  en: {
    nav: ["Method", "Role Fit", "Timeline", "Evidence", "Games", "About"],
    heroEyebrow: "TENCENT GAME PUBLISHING / OPERATIONS · ROLE-TAILORED",
    heroRole: "GAME PUBLISHING & OPERATIONS",
    heroLine: "I LISTEN TO PLAYERS, FIND THE PATTERN, AND TURN IT INTO ACTION.",
    heroBody:
      "My experience spans player interviews, community and creator relations, campaign operations, publishing content and cross-functional delivery. I combine qualitative feedback, performance data and hands-on game knowledge to improve how a game reaches and serves its players.",
    heroCta: "VIEW ROLE EVIDENCE",
    resume: "DOWNLOAD TARGETED CV",
    stats: [
      ["39.7%", "H5 VISIT → SIGN-UP"],
      ["20–30", "ENGLISH PLAYER / CREATOR / MEDIA INTERVIEWS"],
      ["15K+", "CORE PLAYER HOURS"],
    ],
    ticker: [
      "PLAYER INSIGHT",
      "USER OPERATIONS",
      "ACTIVITY DESIGN",
      "CHANNEL OPERATIONS",
      "COMMERCIAL THINKING",
    ],
    timelineKicker: "CAREER / MARKET / PLAYER",
    timelineTitle: "CAREER & RELEASE TIMELINE",
    timelineIntro:
      "The roles and projects that took me from player communities to international publishing work.",
    selectedTitle: "ROLE EVIDENCE",
    selectedIntro:
      "Four projects showing how I turn player needs and business goals into content, campaigns, community work and measurable outcomes.",
    methodKicker: "OPERATING APPROACH",
    methodTitle: "PUT PLAYER VOICE, PERFORMANCE DATA AND PRODUCT GOALS IN THE SAME FRAME.",
    methodBody:
      "I begin with community feedback, interviews and behavior signals, translate the finding into an operating action, then use participation, conversion and player response to decide what should change next.",
    methodSteps: [
      ["01", "UNDERSTAND PLAYERS", "Combine interviews, community feedback, data and first-hand game knowledge."],
      ["02", "DESIGN THE ACTION", "Turn the objective into content, activity mechanics, channels and player value."],
      ["03", "REVIEW & ITERATE", "Use conversion, participation and qualitative response to improve the next action."],
    ],
    fitKicker: "WHY THIS ROLE",
    fitTitle: "ROLE FIT",
    fitIntro:
      "The role needs a generalist who can understand players, operate campaigns and channels, and keep learning across products. These are the strongest overlaps in my experience.",
    fitItems: [
      ["01", "PLAYER INSIGHT", "Conducted 20–30 English interviews with core players, creators and media; translated feedback into product-positioning, control, UI and monetization recommendations."],
      ["02", "USER & ACTIVITY OPERATIONS", "Led a referral H5 with 39.7% visit-to-registration conversion and delivered RO Festa experiences that attracted more than one thousand participants."],
      ["03", "PLATFORMS, CONTENT & PARTNERS", "Worked across overseas media, creators, communities, Douyin, bilibili collaborations and international events, coordinating internal teams and vendors."],
      ["04", "GAME DEPTH & LEARNING RANGE", "15,000+ FFXIV hours, high-end raiding, guide publishing and official race commentary, alongside long-term RPG, shooter and racing experience."],
    ],
    careerTitle: "CAREER JOURNEY",
    aboutKicker: "PLAYER FIRST, ALWAYS",
    aboutTitle: "",
    aboutBody:
      "I have worked across SEA, AMER and English-speaking markets, handling player interviews, creator outreach, media communication, campaign delivery and research reporting. I enjoy finding the rule behind a problem, organizing complex information into a clear decision, and working with different teams until the result is live. Outside work, I raid, follow new releases, study systems and create player-facing content.",
    gamesKicker: "WHAT I PLAY",
    gamesTitle: "PLAYER EXPERIENCE",
    gamesIntro:
      "Broad game experience is part of how I learn new categories quickly. I follow new releases, player culture, competitive scenes and the technology changing how games are made and operated.",
    gamesFeatureTitle: "FINAL FANTASY XIV · 15,000+ HOURS",
    gamesFeatureBody:
      "High-end raider, former FFLogs Black Mage #1, official race commentator, guide creator and organizer of a community book project that sold 1,000+ copies.",
    gamesListTitle: "ALWAYS IN THE ROTATION",
    languages: "Chinese · English (Business)",
    education: "University of Sydney · Digital Communication & Culture",
    tools: "Codex · Photoshop · Premiere Pro · InDesign · After Effects",
    footerTitle: "READY TO GROW WITH THE GAME",
    footerBody:
      "Targeting game publishing and operations roles focused on player insight, user operations, activities and channel growth.",
    copyWechat: "COPY WECHAT",
    copied: "COPIED",
    email: "EMAIL ME",
    location: "Shanghai, China",
    rights: "Designed as a launch campaign. Built from real work.",
    phases: ["INSIGHT", "BUILD", "REVEAL", "LAUNCH", "LIVE OPS"],
    frameworkKicker: "OBJECTIVE / IDEA / EXECUTION / IMPACT",
    frameworkLabels: ["OBJECTIVE", "IDEA", "EXECUTION", "IMPACT"],
    resultLabel: "RESULT",
    portraitLabels: ["PLAYER FIRST", "MARKET READY"],
    liveH5: "LIVE H5",
    factLabels: ["LANGUAGE", "EDUCATION", "TOOLS"],
    backToTop: "Back to top",
    primaryNavigation: "Primary navigation",
    languageNavigation: "Language versions",
    toggleNavigation: "Toggle navigation",
  },
  zh: {
    nav: ["运营思路", "岗位匹配", "职业时间线", "项目证据", "游戏经历", "关于我"],
    heroEyebrow: "腾讯游戏发行 / 运营培训生 · 岗位定向版",
    heroRole: "游戏发行与运营",
    heroLine: "听懂玩家，找到规律，再把洞察变成运营动作。",
    heroBody:
      "我做过玩家访谈、社区与 KOL、活动运营、发行内容和跨团队项目交付，也会结合反馈、转化数据与实际游戏经验，判断一款游戏该如何触达玩家、服务玩家并持续成长。",
    heroCta: "查看岗位证据",
    resume: "下载岗位定向简历",
    stats: [
      ["39.7%", "H5 访问预约转化"],
      ["20–30", "英语核心玩家 / KOL / 媒体访谈"],
      ["1.5万+", "核心玩家时长"],
    ],
    ticker: ["玩家洞察", "用户运营", "活动策划", "渠道运营", "商业化思考"],
    timelineKicker: "职业 / 市场 / 玩家",
    timelineTitle: "职业与项目时间线",
    timelineIntro: "从玩家社区走到国际发行，这里记录了我做过的岗位、市场和代表项目。",
    selectedTitle: "项目证据",
    selectedIntro: "四个项目，分别证明我如何把玩家需求和业务目标转化为内容、活动、社区工作与可衡量结果。",
    methodKicker: "我的运营思路",
    methodTitle: "把玩家声音、行为结果和产品目标放在同一张图上。",
    methodBody:
      "我习惯先从社区反馈、玩家访谈和行为数据判断问题，再把结论转化为内容、活动机制、渠道合作或产品建议，并用参与、转化和玩家反馈决定下一轮怎么改。",
    methodSteps: [
      ["01", "理解玩家", "结合访谈、社区反馈、行为结果与自己的游戏经验识别需求。"],
      ["02", "设计运营动作", "把目标拆成内容、活动机制、渠道选择与玩家价值。"],
      ["03", "复盘并迭代", "根据转化、参与和定性反馈继续优化下一轮动作。"],
    ],
    fitKicker: "为什么适合",
    fitTitle: "岗位匹配",
    fitIntro: "这个岗位需要能理解玩家、推动运营动作、经营渠道并快速学习不同产品的综合型人才。以下是我与岗位最直接的四组交集。",
    fitItems: [
      ["01", "玩家洞察", "独立使用英语访谈 20–30 位核心玩家、KOL 与媒体，并将反馈整理为产品定位、操作逻辑、UI 和商业化建议。"],
      ["02", "用户与活动运营", "主导预约裂变 H5，访问预约转化率 39.7%；交付 RO Festa 线下体验，吸引千人级参与并推动数百人试玩。"],
      ["03", "平台、内容与合作", "参与海外媒体、KOL、社区、抖音、bilibili 合作和国际展会项目，能够协调内部团队、供应商与外部伙伴。"],
      ["04", "游戏深度与学习广度", "拥有 15,000+ 小时 FFXIV 经历、高难副本开荒、攻略出版与官方赛事解说经验，并长期游玩 RPG、射击和竞速品类。"],
    ],
    careerTitle: "职业经历",
    aboutKicker: "始终从玩家出发",
    aboutTitle: "",
    aboutBody:
      "我的项目覆盖 SEA、AMER 与英语市场，做过英语玩家访谈、KOL 建联、海外媒体沟通、活动运营和跨团队项目交付。我喜欢从复杂问题中找到规律，把零散信息整理成清晰判断，再和不同团队一起把结果做上线。工作之外，我也会打高难副本、关注新作、研究系统并制作玩家内容。",
    gamesKicker: "我玩什么",
    gamesTitle: "游戏经历",
    gamesIntro: "广泛的游戏经历让我能够更快理解新品类。我持续关注新作、玩家文化、竞技内容，以及正在改变游戏研发和运营方式的新技术。",
    gamesFeatureTitle: "最终幻想 XIV · 15,000+ 小时",
    gamesFeatureBody:
      "多版本高难副本开荒玩家，曾取得 FFLogs 黑魔法师职业榜首；受邀担任官方副本竞速赛解说，主导职业攻略内容，并发起累计售出 1,000+ 本的玩家攻略书项目。",
    gamesListTitle: "长期游玩的类型与作品",
    languages: "中文 · 英语（商务）",
    education: "悉尼大学 · Digital Communication & Culture",
    tools: "Codex · Photoshop · Premiere Pro · InDesign · After Effects",
    footerTitle: "希望和一款游戏一起长期成长",
    footerBody: "应聘游戏发行 / 运营方向，重点关注玩家洞察、用户运营、活动运营与渠道增长。",
    copyWechat: "复制微信",
    copied: "已复制",
    email: "发送邮件",
    location: "中国，上海",
    rights: "像一场发布 Campaign 一样设计，所有内容来自真实经历。",
    phases: ["洞察", "建设", "首曝", "上线", "长线运营"],
    frameworkKicker: "目标 / 创意 / 执行 / 结果",
    frameworkLabels: ["目标", "创意", "执行", "结果"],
    resultLabel: "结果",
    portraitLabels: ["玩家优先", "面向市场"],
    liveH5: "查看线上 H5",
    factLabels: ["语言", "教育经历", "工具"],
    backToTop: "返回顶部",
    primaryNavigation: "主导航",
    languageNavigation: "语言版本",
    toggleNavigation: "展开或收起导航",
  },
};

const projects = {
  en: [
    {
      no: "01",
      tag: "GLOBAL REVEAL · BRAND CONTENT",
      title: "RO3 FIRST GAMEPLAY REVEAL",
      intro:
        "Turning a first public look into a global conversation — while building the content language for a new title.",
      role: "Creative direction · Script · Capture · Production",
      market: "Global / SEA",
      objective: "Reveal the product with enough substance to create trust and discussion.",
      idea: "Use complete gameplay and a confident world-first framing instead of a vague cinematic tease.",
      execution: "Planned the script, captured materials, followed post-production and coordinated social assets.",
      impact: "1M+ YouTube views and 4,000+ comments.",
      accent: "lime",
      media: "youtube",
    },
    {
      no: "02",
      tag: "ACQUISITION · REFERRAL H5",
      title: "ROOC FOOTBALL PRE-REGISTRATION",
      intro:
        "A football-themed referral experience designed as the core acquisition tool for the AMER CBT window.",
      role: "Mechanics · Assets · Development coordination · PR",
      market: "AMER",
      objective: "Turn seasonal football attention into measurable pre-registration.",
      idea: "Make every successful invitation a visible step toward a guaranteed event entry.",
      execution: "Owned campaign mechanics, content assets and cross-team delivery from concept to launch.",
      impact: "52,094 PV · 23,852 UV · 9,466 sign-ups · 39.7% conversion in ~10 days.",
      accent: "coral",
      media: "image",
      image: "/assets/rooc-soccer.jpg",
      link: "https://roocamer.gnjoy.game/event/soccer/",
    },
    {
      no: "03",
      tag: "CORE PLAYER · COMMUNITY IP",
      title: "FFXIV BLACK MAGE KNOWLEDGE PROJECT",
      intro:
        "A player-led content ecosystem spanning expert video guides, publishing and commercial collaboration.",
      role: "Creator · Editor · Community organizer",
      market: "China",
      objective: "Make advanced job knowledge useful, credible and easy to share.",
      idea: "Treat player expertise as a real publishing product rather than disposable social content.",
      execution: "Led guide topics, coordinated contributors and completed book design, print and sales in one month.",
      impact: "700K+ video views · 1,000+ books sold · FFLogs Black Mage #1.",
      accent: "lime",
      media: "bilibili",
    },
    {
      no: "04",
      tag: "GLOBAL EVENT · PROJECT DELIVERY",
      title: "LEVEL INFINITE AT GAMESCOM",
      intro:
        "Coordinating studios, vendors and internal partners inside one of the game industry’s largest global moments.",
      role: "Event marketing support · Content delivery",
      market: "Europe / Global",
      objective: "Keep a complex multi-studio event moving toward immovable launch dates.",
      idea: "Create a clear content and delivery system across partners, not just a pile of requests.",
      execution: "Tracked milestones and independently delivered the Gamescom handbook from content selection to production.",
      impact: "Cross-time-zone assets and partner workflows delivered for Gamescom 2024.",
      accent: "violet",
      media: "image",
      image: "/assets/gamescom.jpg",
    },
  ],
  zh: [
    {
      no: "01",
      tag: "全球首曝 · 品牌内容",
      title: "RO3 首次完整实机首曝",
      intro: "把产品的第一次公开亮相变成全球讨论，同时建立新产品的内容表达体系。",
      role: "创意方向 · 脚本 · 素材录制 · 制作跟进",
      market: "全球 / 东南亚",
      objective: "用足够真实的产品内容建立信任与讨论。",
      idea: "用完整实机和明确的世界首曝定位，替代模糊的概念预告。",
      execution: "规划脚本、录制素材、跟进后期，并协调首曝社媒资产。",
      impact: "YouTube 100万+播放、4,000+评论。",
      accent: "lime",
      media: "youtube",
    },
    {
      no: "02",
      tag: "用户增长 · 裂变 H5",
      title: "ROOC 足球预约裂变活动",
      intro: "结合足球热点设计预约裂变体验，成为 AMER CBT 阶段的核心拉新工具。",
      role: "活动机制 · 资产规划 · 开发协调 · PR",
      market: "美洲",
      objective: "把足球热点转化为可衡量的预约增长。",
      idea: "让每次成功邀请都成为通向活动参与资格的可见进度。",
      execution: "主导机制、内容资产与跨团队推进，从概念一直跟进到正式上线。",
      impact: "约10天取得52,094 PV、23,852 UV、9,466次预约，转化率39.7%。",
      accent: "coral",
      media: "image",
      image: "/assets/rooc-soccer.jpg",
      link: "https://roocamer.gnjoy.game/event/soccer/",
    },
    {
      no: "03",
      tag: "核心玩家 · 社区内容 IP",
      title: "FF14 黑魔法师知识项目",
      intro: "由玩家发起的专业内容体系，覆盖攻略视频、书籍出版与商业合作。",
      role: "内容创作者 · 编辑 · 社区组织者",
      market: "中国",
      objective: "让高阶职业知识保持可信、实用，并能够被广泛传播。",
      idea: "把玩家专业知识当作真正的出版产品，而不是一次性社媒内容。",
      execution: "主导攻略选题，协调创作者，并在一个月内完成书籍设计、印刷与销售。",
      impact: "视频70万+播放 · 攻略书售出1,000+本 · FFLogs黑魔法师榜首。",
      accent: "lime",
      media: "bilibili",
    },
    {
      no: "04",
      tag: "国际展会 · 项目交付",
      title: "LEVEL INFINITE 科隆游戏展",
      intro: "在全球大型游戏行业节点中协调工作室、供应商与内部合作伙伴。",
      role: "展会营销支持 · 内容交付",
      market: "欧洲 / 全球",
      objective: "让复杂、多工作室参与的项目按不可变的展会日期稳定推进。",
      idea: "建立清晰的内容与交付体系，而不是被动接收零散需求。",
      execution: "跟进关键节点，并独立完成 Gamescom Handbook 的内容筛选、精修与生产。",
      impact: "支持 Gamescom 2024 跨时区资产与合作流程准时交付。",
      accent: "violet",
      media: "image",
      image: "/assets/gamescom.jpg",
    },
  ],
};

const gameExperience = {
  en: [
    {
      category: "RPG / ARPG",
      title: "STORIES, BUILDS & SYSTEMS",
      games:
        "Final Fantasy · Persona · Octopath Traveler · Granblue Fantasy · Cyberpunk 2077 · Wuthering Waves · Nioh · Clair Obscur: Expedition 33",
      image: "/assets/game-persona5.jpg",
      alt: "Persona 5 Royal official artwork",
    },
    {
      category: "SHOOTER",
      title: "TEAMPLAY & COMPETITION",
      games: "Overwatch · Apex Legends · VALORANT",
      image: "/assets/game-apex.jpg",
      alt: "Apex Legends official artwork",
    },
    {
      category: "RACING",
      title: "SPEED & MASTERY",
      games: "Need for Speed · F1 · Gran Turismo",
      image: "/assets/game-gran-turismo.jpg",
      alt: "Gran Turismo 7 official artwork",
    },
  ],
  zh: [
    {
      category: "RPG / ARPG",
      title: "叙事、构筑与系统",
      games:
        "《最终幻想》系列 ·《女神异闻录》系列 ·《八方旅人》系列 ·《碧蓝幻想》系列 ·《赛博朋克 2077》·《鸣潮》·《仁王》·《光与影：33 号远征队》",
      image: "/assets/game-persona5.jpg",
      alt: "《女神异闻录 5 皇家版》官方视觉",
    },
    {
      category: "射击",
      title: "团队配合与竞技",
      games: "《守望先锋》·《Apex 英雄》·《无畏契约》",
      image: "/assets/game-apex.jpg",
      alt: "《Apex 英雄》官方视觉",
    },
    {
      category: "竞速",
      title: "速度与熟练度",
      games: "《极品飞车》系列 ·《F1》系列 ·《跑车浪漫旅》系列",
      image: "/assets/game-gran-turismo.jpg",
      alt: "《跑车浪漫旅 7》官方视觉",
    },
  ],
};

const careers = {
  en: [
    {
      year: "2025 — NOW",
      company: "JOYMAKER",
      role: "Publishing & Operations Management Trainee",
      region: "SHANGHAI",
      details: [
        "Conducted 20–30 English interviews with core players, creators and media to inform RO3 product decisions.",
        "Led mechanics and cross-team delivery for a ROOC AMER referral H5 that achieved 39.7% visit-to-registration conversion.",
        "Delivered player research, community/creator work, PR/media, content and live-event operations across multiple titles and regions.",
        "Built bilingual content systems and standardized scripts and asset libraries, shortening PGC production cycles by 30%.",
      ],
    },
    {
      year: "2024",
      company: "MELIOR & CO",
      role: "Marketing Intern · Sydney",
      region: "SYDNEY",
      details: [
        "Produced weekly and monthly media monitoring for Ferrari, Piaget and Golden Goose.",
        "Supported concept development for the Casa Ferrari 2025 event.",
      ],
    },
    {
      year: "2024",
      company: "LEVEL INFINITE",
      role: "Global Marketing Intern",
      region: "SHENZHEN",
      details: [
        "Supported Gamescom 2024 and Level Infinite Showcase 2024 across overseas vendors, studios and internal partners.",
        "Independently delivered the Gamescom handbook from content selection and copy editing through production.",
      ],
    },
    {
      year: "2022",
      company: "TENCENT TiMi",
      role: "Marketing Intern",
      region: "SHANGHAI",
      details: [
        "Produced competitive research covering gameplay, marketing and user-acquisition strategies.",
        "Operated short-form video content and coordinated suppliers across multiple marketing-plan versions.",
      ],
    },
    {
      year: "2021",
      company: "BILIBILI",
      role: "Event Marketing Intern",
      region: "SHANGHAI",
      details: [
        "Supported creative planning and on-site execution for the 2021 Bilibili Top 100 Creators Awards.",
        "Coordinated the director team, production vendors and creators, then reviewed final video output.",
      ],
    },
    {
      year: "2020",
      company: "SHENGQU GAMES",
      role: "Game Marketing Intern",
      region: "SHANGHAI",
      details: [
        "Supported FFXIV player events, marketing plans and competitor and media-buy analysis.",
        "Planned and delivered the confirmed FFXIV × bilibili App decoration collaboration.",
      ],
    },
  ],
  zh: [
    {
      year: "2025 — 至今",
      company: "欢乐互娱",
      role: "发行运营管培生",
      region: "上海",
      details: [
        "独立使用英语访谈 20–30 位核心玩家、KOL 与媒体代表，为 RO3 产品决策提供洞察。",
        "主导 ROOC 美服预约裂变 H5 的机制与跨团队交付，访问预约转化率达到 39.7%。",
        "围绕多款游戏推进玩家研究、社区/KOL、PR 与媒体、内容及线下活动运营。",
        "建立双语内容体系、标准化脚本模板及素材库，将 PGC 内容制作周期缩短 30%。",
      ],
    },
    {
      year: "2024",
      company: "MELIOR & CO",
      role: "市场实习生 · 悉尼",
      region: "悉尼",
      details: [
        "为 Ferrari、Piaget、Golden Goose 制作周度及月度媒体监测报告。",
        "参与 Casa Ferrari 2025 线下活动的创意构思与方案支持。",
      ],
    },
    {
      year: "2024",
      company: "LEVEL INFINITE",
      role: "国际市场实习生",
      region: "深圳",
      details: [
        "支持 Gamescom 2024 与 Level Infinite Showcase 2024，协调海外供应商、工作室及内部合作伙伴。",
        "独立完成 Gamescom Handbook 的内容筛选、文案精修、素材整合与生产交付。",
      ],
    },
    {
      year: "2022",
      company: "腾讯天美",
      role: "互联网营销实习生",
      region: "上海",
      details: [
        "独立完成竞品研究，从核心玩法、营销动作和买量策略等维度分析产品。",
        "运营短视频内容、协调供应商，并支持多版本市场方案的研究与提案。",
      ],
    },
    {
      year: "2021",
      company: "哔哩哔哩",
      role: "市场活动实习生",
      region: "上海",
      details: [
        "参与 2021 年百大 UP 主颁奖典礼的创意策划及现场执行。",
        "协调导演组、拍摄供应商与 UP 主，并审核活动影像成片。",
      ],
    },
    {
      year: "2020",
      company: "盛趣游戏",
      role: "游戏市场实习生",
      region: "上海",
      details: [
        "支持《最终幻想 XIV》玩家活动、市场方案及竞品与买量分析。",
        "策划并推进《最终幻想 XIV》× bilibili App 个性装扮合作落地。",
      ],
    },
  ],
};

function Logo({ src, alt, className = "" }) {
  return <img className={`brand-logo ${className}`} src={src} alt={alt} loading="lazy" />;
}

function MediaBlock({ project }) {
  const [playing, setPlaying] = useState(false);

  if (project.media === "youtube") {
    return (
      <div className="media-frame video-frame">
        {playing ? (
          <iframe
            src="https://www.youtube.com/embed/n8PqmhQBHzc?si=mqadyt3kqbawOYgt&autoplay=1"
            title="Ragnarok Online 3 first full gameplay trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label="Play RO3 first gameplay reveal"
          >
            <img src="/assets/ro3-video-cover.jpg" alt="RO3 first gameplay reveal" />
            <span className="play-button">
              <Play weight="fill" />
            </span>
          </button>
        )}
      </div>
    );
  }

  if (project.media === "bilibili") {
    return (
      <div className="ff14-media">
        <div className="media-frame video-frame">
          {playing ? (
            <iframe
              src="https://player.bilibili.com/player.html?isOutside=true&aid=212380780&bvid=BV1Ma411t7YU&cid=555913313&p=1&autoplay=1"
              title="Final Fantasy XIV Black Mage guide"
              scrolling="no"
              allowFullScreen
            />
          ) : (
            <button
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label="Play Final Fantasy XIV Black Mage guide"
            >
              <img src="/assets/ff14-video-cover.jpg" alt="Final Fantasy XIV Black Mage guide" />
              <span className="play-button">
                <Play weight="fill" />
              </span>
            </button>
          )}
        </div>
        <img src="/assets/ff14-book.jpg" alt="Final Fantasy XIV Black Mage guide books" loading="lazy" />
      </div>
    );
  }

  return (
    <a
      className="media-frame project-image"
      href={project.link || project.image}
      target="_blank"
      rel="noreferrer"
      aria-label={project.link ? `Open ${project.title}` : undefined}
    >
      <img src={project.image} alt={project.title} loading="lazy" />
      {project.link && (
        <span className="media-link">
          <ArrowUpRight weight="bold" />
        </span>
      )}
    </a>
  );
}

export function App() {
  const lang = window.location.pathname.toLowerCase().startsWith("/zh") ? "zh" : "en";
  const [activeTimeline, setActiveTimeline] = useState(5);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const t = content[lang];
  const currentTimeline = useMemo(() => [...careers[lang]].reverse(), [lang]);
  const currentProjects = projects[lang];
  const currentGames = gameExperience[lang];

  const navItems = useMemo(
    () => [
      ["method", t.nav[0]],
      ["fit", t.nav[1]],
      ["timeline", t.nav[2]],
      ["work", t.nav[3]],
      ["games", t.nav[4]],
      ["about", t.nav[5]],
    ],
    [t],
  );

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title =
      lang === "en"
        ? "Ailin Li — Game Publishing & Operations"
        : "李艾霖 — 游戏发行与运营";
  }, [lang]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const copyWechat = async () => {
    await navigator.clipboard.writeText("_okinawa_straycat_");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`site lang-${lang}`}>
      <header className="topbar">
        <a className="monogram" href="#home" aria-label={t.backToTop}>
          AL
        </a>

        <nav className={`nav ${mobileOpen ? "is-open" : ""}`} aria-label={t.primaryNavigation}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <nav className="language-switch" aria-label={t.languageNavigation}>
            <a className={lang === "zh" ? "active" : ""} href="/zh/" lang="zh-CN">
              CN
            </a>
            <span>/</span>
            <a className={lang === "en" ? "active" : ""} href="/" lang="en">
              EN
            </a>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={t.toggleNavigation}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X /> : <List />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>
                <span>AILIN</span>
                <span>LI</span>
              </h1>
              {lang === "zh" && <p className="hero-chinese-name">李艾霖</p>}
              <p className="hero-role">{t.heroRole}</p>
              <p className="hero-line">{t.heroLine}</p>
              <p className="hero-body">{t.heroBody}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#fit">
                  {t.heroCta}
                  <ArrowDown weight="bold" />
                </a>
                <a
                  className="button button-ghost"
                  href={
                    lang === "zh"
                      ? "/Li-Ailin-Tencent-Game-Publishing-Operations-Resume.txt"
                      : "/Ailin-Li-Tencent-Game-Publishing-Operations-Resume.txt"
                  }
                  download
                >
                  {t.resume}
                  <DownloadSimple weight="bold" />
                </a>
              </div>
            </div>

            <div className="hero-portrait" aria-label="Portrait of Ailin Li">
              <img src="/assets/portrait-close.jpg" alt="Ailin Li" />
              <div className="portrait-label">
                <span>{t.portraitLabels[0]}</span>
                <span>{t.portraitLabels[1]}</span>
              </div>
            </div>

            <div className="hero-stats">
              {t.stats.map(([value, label]) => (
                <div className="hero-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="method-section light-section" id="method">

          <div className="method-grid">
            <div className="method-copy" data-reveal>
              <p className="section-kicker">{t.methodKicker}</p>
              <h2>{t.methodTitle}</h2>
              <p>{t.methodBody}</p>
            </div>

            <div className="method-steps">
              {t.methodSteps.map(([no, title, body]) => (
                <article key={no} data-reveal>
                  <span>{no}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="role-fit-section dark-section" id="fit">
          <div className="section-heading inverted" data-reveal>
            <div>
              <p className="section-kicker">{t.fitKicker}</p>
              <h2>{t.fitTitle}</h2>
            </div>
            <p>{t.fitIntro}</p>
          </div>

          <div className="role-fit-grid">
            {t.fitItems.map(([no, title, body]) => (
              <article key={no} data-reveal>
                <span>{no}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...t.ticker, ...t.ticker].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i />
              </span>
            ))}
          </div>
        </div>

        <section className="timeline-section light-section" id="timeline">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">{t.timelineKicker}</p>
              <h2>{t.timelineTitle}</h2>
            </div>
            <p>{t.timelineIntro}</p>
          </div>

          <div className="timeline-shell" data-reveal>
            <div className="timeline-track">
              {currentTimeline.map((item, index) => (
                <button
                  className={`timeline-node ${activeTimeline === index ? "active" : ""}`}
                  key={`${item.year}-${item.company}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                  onFocus={() => setActiveTimeline(index)}
                  onClick={() => setActiveTimeline(index)}
                  aria-pressed={activeTimeline === index}
                >
                  <span className="node-dot" />
                  <span className="node-year">{item.year}</span>
                  <span className="node-region">{item.region}</span>
                  <strong>{item.company}</strong>
                  <small>{item.role}</small>
                </button>
              ))}
            </div>

            <article className="timeline-detail" key={`${lang}-${activeTimeline}`}>
              <div className="timeline-detail-index">
                {String(activeTimeline + 1).padStart(2, "0")}
              </div>
              <div className="timeline-detail-heading">
                <span className="detail-phase">{currentTimeline[activeTimeline].role}</span>
                <h3>{currentTimeline[activeTimeline].company}</h3>
                <p className="timeline-location">{currentTimeline[activeTimeline].region}</p>
              </div>
              <ul className="timeline-responsibilities">
                {currentTimeline[activeTimeline].details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="projects-section dark-section" id="work">
          <div className="section-heading inverted" data-reveal>
            <div>
              <p className="section-kicker">{t.frameworkKicker}</p>
              <h2>{t.selectedTitle}</h2>
            </div>
            <p>{t.selectedIntro}</p>
          </div>

          <div className="projects-list">
            {currentProjects.map((project, index) => (
              <article className={`project accent-${project.accent}`} key={project.no} data-reveal>
                <div className="project-index">{project.no}</div>
                <div className="project-head">
                  <div>
                    <span className="project-tag">{project.tag}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-meta">
                    <span>{project.role}</span>
                    <span>{project.market}</span>
                  </div>
                </div>

                <MediaBlock project={project} />

                <p className="project-intro">{project.intro}</p>

                <div className="project-framework">
                  {[
                    [t.frameworkLabels[0], project.objective],
                    [t.frameworkLabels[1], project.idea],
                    [t.frameworkLabels[2], project.execution],
                    [t.frameworkLabels[3], project.impact],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <div className="ro3-gallery">
                    <div className="gallery-main">
                      <img src="/assets/ro3-festa-cosplay.jpg" alt="RO3 at RO Festa" loading="lazy" />
                    </div>
                    <img src="/assets/ro3-festa-poster.jpg" alt="RO3 RO Festa poster" loading="lazy" />
                    <img src="/assets/ro3-festa-feedback.jpg" alt="RO3 player feedback wall" loading="lazy" />
                    <img src="/assets/ro3-merch.jpg" alt="RO3 merchandise" loading="lazy" />
                  </div>
                )}

                {index === 0 && (
                  <div className="logo-row">
                    <Logo src="/assets/ro3-logo.png" alt="Ragnarok 3" />
                  </div>
                )}
                {index === 1 && (
                  <div className="logo-row logo-row-light">
                    <Logo src="/assets/rooc-logo.png" alt="Ragnarok Origin Classic" />
                    <a
                      className="project-link"
                      href="https://roocamer.gnjoy.game/event/soccer/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.liveH5} <ArrowUpRight weight="bold" />
                    </a>
                  </div>
                )}
                {index === 2 && (
                  <div className="logo-row logo-row-light">
                    <Logo src="/assets/ff14-logo.png" alt="Final Fantasy XIV Online" />
                  </div>
                )}
                {index === 3 && (
                  <div className="logo-row">
                    <Logo src="/assets/level-infinite.png" alt="Level Infinite" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="games-section light-section" id="games">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-kicker">{t.gamesKicker}</p>
              <h2>{t.gamesTitle}</h2>
            </div>
            <p>{t.gamesIntro}</p>
          </div>

          <article className="games-feature" data-reveal>
            <div className="games-feature-media">
              <img
                src="/assets/game-ffxiv.jpg"
                alt="Final Fantasy XIV official artwork"
                loading="lazy"
              />
            </div>
            <div className="games-feature-copy">
              <span>MMORPG / COMMUNITY / CONTENT</span>
              <h3>{t.gamesFeatureTitle}</h3>
              <p>{t.gamesFeatureBody}</p>
            </div>
          </article>

          <div className="games-list-heading" data-reveal>
            <span>{t.gamesListTitle}</span>
          </div>
          <div className="games-grid">
            {currentGames.map((game) => (
              <article className="game-card" key={game.category} data-reveal>
                <div className="game-card-media">
                  <img src={game.image} alt={game.alt} loading="lazy" />
                </div>
                <div className="game-card-copy">
                  <span>{game.category}</span>
                  <h3>{game.title}</h3>
                  <p>{game.games}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="asset-credit">
            {lang === "zh"
              ? "游戏视觉素材来自对应游戏官方页面，仅用于呈现个人游戏经历。"
              : "Game artwork is sourced from the respective official game pages and used to present personal play experience."}
          </p>
        </section>

        <section className="about-section light-section" id="about">
          <div className="about-photo" data-reveal>
            <img src="/assets/portrait-full.jpg" alt="Ailin Li" loading="lazy" />
            <span>AILIN LI · SHANGHAI</span>
          </div>

          <div className="about-content" data-reveal>
            <p className="section-kicker">{t.aboutKicker}</p>
            {t.aboutTitle && <h2>{t.aboutTitle}</h2>}
            <p className="about-body">{t.aboutBody}</p>

            <div className="about-facts">
              <div>
                <span>{t.factLabels[0]}</span>
                <strong>{t.languages}</strong>
              </div>
              <div>
                <span>{t.factLabels[1]}</span>
                <strong>{t.education}</strong>
              </div>
              <div>
                <span>{t.factLabels[2]}</span>
                <strong>{t.tools}</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <h2>{t.footerTitle}</h2>
          <p>{t.footerBody}</p>
        </div>

        <div className="footer-actions">
          <a className="button button-primary" href="mailto:nagame0318@outlook.com">
            {t.email}
            <EnvelopeSimple weight="bold" />
          </a>
          <button className="button button-ghost" onClick={copyWechat}>
            {copied ? (
              <>
                {t.copied} <Check weight="bold" />
              </>
            ) : (
              <>
                {t.copyWechat} <Copy weight="bold" />
              </>
            )}
          </button>
          <a
            className="button button-ghost"
            href={
              lang === "zh"
                ? "/Li-Ailin-Tencent-Game-Publishing-Operations-Resume.txt"
                : "/Ailin-Li-Tencent-Game-Publishing-Operations-Resume.txt"
            }
            download
          >
            {t.resume}
            <DownloadSimple weight="bold" />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            <MapPin weight="fill" /> {t.location}
          </span>
          <span>_okinawa_straycat_</span>
          <span>{t.rights}</span>
        </div>
      </footer>

      <a className="floating-top" href="#home" aria-label={t.backToTop}>
        <Play weight="fill" />
      </a>
    </div>
  );
}
