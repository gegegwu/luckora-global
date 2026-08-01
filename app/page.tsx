"use client";

import { useEffect, useMemo, useState } from "react";

type Dimension = {
  key: string;
  name: string;
  desc: string;
  profile: string;
  behavior: string;
  blind: string;
  advice: string;
  directions: string[];
};

type RankedDimension = Dimension & {
  score: number;
  percent: number;
};

type Result = {
  createdAt: string;
  ranked: RankedDimension[];
};

const STORAGE_KEY = "luckora_talent_result_v1";

const dimensionMarks: Record<string, { code: string; icon: string; short: string }> = {
  aesthetic: { code: "J", icon: "🎨", short: "美学" },
  kinesthetic: { code: "F", icon: "🏃", short: "身体" },
  logical: { code: "B", icon: "🔢", short: "逻辑" },
  language: { code: "A", icon: "✏️", short: "语言" },
  interpersonal: { code: "E", icon: "🤝", short: "人际" },
  intrapersonal: { code: "D", icon: "🪞", short: "内省" },
  nature: { code: "H", icon: "🌱", short: "自然" },
  musical: { code: "G", icon: "🎵", short: "音乐" },
  spatial: { code: "C", icon: "🗺️", short: "空间" },
  execution: { code: "I", icon: "✅", short: "执行" },
};

const cautiousCareers = [
  ["金融分析师", "需要大量数据分析和逻辑推理"],
  ["程序员/工程师", "需要严密逻辑思维和数学基础"],
  ["精算师", "需要极强数学与概率分析能力"],
  ["纯流程行政岗", "重复事务较多，创造空间有限"],
];

const actionPlans = [
  {
    title: "短期目标",
    period: "1-3个月",
    items: [
      "挑一个你最有感觉的方向，做一个小作品或小案例",
      "把结果发到小红书/朋友圈，观察别人最关心什么",
      "每周复盘一次：哪些事情做完后更有能量",
    ],
  },
  {
    title: "中期发展",
    period: "6-12个月",
    items: [
      "建立个人作品集或案例库，记录你的成长轨迹",
      "固定一个输出渠道，形成稳定表达习惯",
      "主动承担一次能用到优势组合的项目",
    ],
  },
  {
    title: "长期愿景",
    period: "持续思考",
    items: [
      "形成一个别人能识别的个人风格",
      "成为某个细分领域的解读者、组织者或创造者",
      "用你的天赋组合创造别人难以复制的价值",
    ],
  },
];

const dimensions: Dimension[] = [
  {
    key: "aesthetic",
    name: "美学天赋",
    desc: "对美的感知、创造和艺术表达的能力",
    profile:
      "你对画面、氛围、细节和质感非常敏锐，很多人只觉得“还行”的东西，你能说出哪里不协调。你的优势不只是会欣赏美，而是能把抽象感受转化成可被别人感知的表达。",
    behavior:
      "你常常会被包装、色彩、空间、音乐或文字气质影响判断；做内容、选品、拍照、布置空间时，也更容易做出有记忆点的结果。",
    blind:
      "容易卡在“还不够好看”而迟迟不发布，也可能因为审美标准高，对粗糙流程失去耐心。",
    advice:
      "把审美变成稳定输出：每天收集 3 个让你有感觉的画面，并写下它为什么打动你。",
    directions: ["视觉内容", "账号包装", "审美选品", "空间整理", "品牌表达"],
  },
  {
    key: "kinesthetic",
    name: "身体-动觉天赋",
    desc: "通过身体运动和精细操作完成任务的能力",
    profile:
      "你更适合在行动里理解世界。相比只听别人讲，你通过上手、练习、模仿和不断调整，反而能更快找到感觉。",
    behavior:
      "你可能擅长运动、手作、整理、搭建、拍摄、演示、线下执行，也更容易通过身体状态判断自己是否适合一件事。",
    blind:
      "如果长期被困在纯脑力、纯会议、纯文字环境里，你会很快失去能量，甚至误以为自己不够聪明。",
    advice:
      "你的身体记忆很强，适合用练习、示范和上手操作来学习，不要只靠看教程。",
    directions: ["线下执行", "手作技能", "运动教学", "拍摄出镜", "体验式工作"],
  },
  {
    key: "logical",
    name: "逻辑分析天赋",
    desc: "发现规律、拆解问题和建立结构的能力",
    profile:
      "你不是只看表面现象的人。你会自然地寻找原因、路径、变量和规律，并尝试把混乱问题拆成可以处理的部分。",
    behavior:
      "你适合做策略、复盘、数据分析、产品规划、流程设计，也经常能指出一件事为什么会失败。",
    blind:
      "你可能会因为太想“想明白”而推迟行动，也容易对表达混乱或逻辑跳跃的人失去耐心。",
    advice:
      "把复杂问题写成清单和流程图，你会比单纯凭感觉推进更快进入状态。",
    directions: ["数据分析", "产品策划", "商业拆解", "流程优化", "知识整理"],
  },
  {
    key: "language",
    name: "语言表达天赋",
    desc: "用文字、讲述和沟通影响他人的能力",
    profile:
      "你有把感觉说清楚的能力，也更容易用一个准确的词、一句话或一个故事，让别人理解复杂的情绪和观点。",
    behavior:
      "你适合写文案、做口播、讲课、咨询、销售、内容创作，也容易在聊天中承担解释者或安抚者角色。",
    blind:
      "当表达能力强时，也容易替别人解释太多、承诺太快，或者把本该行动的问题停留在语言层面。",
    advice:
      "你的表达可以成为杠杆。尝试把经验整理成短内容、脚本或教程，持续放大影响力。",
    directions: ["短视频文案", "口播表达", "课程讲解", "咨询沟通", "个人 IP"],
  },
  {
    key: "interpersonal",
    name: "人际洞察天赋",
    desc: "理解他人情绪、动机和关系氛围的能力",
    profile:
      "你很会读空气。别人还没说出口的情绪、关系里的微妙变化、场面是否尴尬，你往往能比多数人更早感受到。",
    behavior:
      "你适合做社群、服务、咨询、销售、团队协作、用户研究，也常常能成为别人愿意倾诉的人。",
    blind:
      "你的敏感度如果没有边界，会变成消耗。你可能会过度照顾别人，最后忽略自己的真实需求。",
    advice:
      "你适合做连接者，但要保留边界。先确认自己的需求，再去照顾别人的感受。",
    directions: ["社群运营", "用户访谈", "情感内容", "服务体验", "团队协作"],
  },
  {
    key: "intrapersonal",
    name: "内省觉察天赋",
    desc: "理解自我状态、价值和长期方向的能力",
    profile:
      "你对自己的状态变化、价值排序和内在冲突比较敏感。你不是没有想法，而是需要时间把感受整理成选择。",
    behavior:
      "你适合做深度内容、咨询、写作、复盘、个人成长类产品，也更容易在安静环境里恢复判断力。",
    blind:
      "容易想太多、复盘太久，或者把一件普通小事分析成很重的人生命题。",
    advice:
      "你需要独处来整理能量。固定一个复盘时间，会让你的选择更稳定。",
    directions: ["深度写作", "心理成长", "个人复盘", "咨询助人", "长期规划"],
  },
  {
    key: "nature",
    name: "自然观察天赋",
    desc: "感知环境、生命状态和细节变化的能力",
    profile:
      "你对环境的舒适度、生活细节、物品状态和自然变化很敏感。你会从细小变化里捕捉到别人忽略的信息。",
    behavior:
      "你可能擅长生活方式、养护、空间、饮食、选品、慢节奏内容，也更容易从自然和秩序里恢复能量。",
    blind:
      "如果环境长期混乱，你的效率会被明显拉低；你也可能因为太重视细节而忽略商业上的速度。",
    advice:
      "把观察力用于选品、内容、生活方式或空间整理，会比纯消耗型工作更滋养你。",
    directions: ["生活方式", "家居整理", "自然疗愈", "选品测评", "慢内容"],
  },
  {
    key: "musical",
    name: "节奏感知天赋",
    desc: "对声音、节奏、氛围和情绪流动的敏感度",
    profile:
      "你对节奏和氛围很敏锐。你能感受到一段内容什么时候该停、什么时候该推进，也容易被声音影响情绪。",
    behavior:
      "你适合短视频剪辑、配乐、口播节奏、直播氛围、活动策划，也更容易做出让人沉浸的内容。",
    blind: "状态容易受外界声音和节奏影响，环境不对时很难进入专注。",
    advice:
      "你对氛围很敏锐。工作时给任务匹配音乐和节奏，效率会明显提升。",
    directions: ["视频剪辑", "音乐内容", "直播氛围", "声音表达", "活动策划"],
  },
  {
    key: "spatial",
    name: "空间想象天赋",
    desc: "理解画面、空间、位置和视觉结构的能力",
    profile:
      "你擅长在脑海里组织画面和位置关系。很多信息只要变成图、结构或空间，你就会更容易理解。",
    behavior:
      "你适合设计、摄影、陈列、装修、视觉策划、地图式思考，也常能发现布局哪里别扭。",
    blind:
      "如果别人只用抽象语言沟通，你可能会觉得费力；你的想法也需要被画出来才容易被理解。",
    advice:
      "你适合用草图、白板、看板来思考。把想法画出来，会比口头描述更清楚。",
    directions: ["视觉设计", "空间陈列", "摄影构图", "装修规划", "信息图"],
  },
  {
    key: "execution",
    name: "执行推进天赋",
    desc: "把想法落地、持续推进并完成闭环的能力",
    profile:
      "你真正的优势在于能把事情往前推。相比一直讨论可能性，你更喜欢明确目标、拆步骤、看进度、拿结果。",
    behavior:
      "你适合项目管理、运营执行、交付、创业早期推进、流程落地，也常常是团队里让事情完成的人。",
    blind:
      "容易太快进入执行，忽略方向是否值得；也可能对节奏慢、反复犹豫的人感到烦躁。",
    advice:
      "你的优势在完成。用短周期目标和可见进度条，会让你越做越有动力。",
    directions: ["项目管理", "运营执行", "交付统筹", "创业推进", "流程落地"],
  },
];

type Question = {
  id: number;
  dimension: string;
  text: string;
};

const TOTAL_QUESTIONS = 40;
const SCREENING_QUESTIONS = 20;

const questionBank: Question[] = [
  {
    id: 1,
    dimension: "aesthetic",
    text: "刷到一个账号或商品时，我会先被整体风格、配色和质感吸引。",
  },
  {
    id: 2,
    dimension: "logical",
    text: "别人讲一件复杂的事，我会下意识帮它整理成原因、步骤和结论。",
  },
  {
    id: 3,
    dimension: "interpersonal",
    text: "一个人情绪不对时，即使他说没事，我也常常能感觉出来。",
  },
  {
    id: 4,
    dimension: "spatial",
    text: "看户型图、路线图、平面图时，我通常能比较快在脑子里形成画面。",
  },
  {
    id: 5,
    dimension: "language",
    text: "我经常能把别人说不清楚的感受，用一句更准确的话表达出来。",
  },
  {
    id: 6,
    dimension: "execution",
    text: "只要目标明确，我更愿意先行动起来，而不是一直停在讨论阶段。",
  },
  {
    id: 7,
    dimension: "nature",
    text: "环境是否干净、舒服、有秩序，会明显影响我的心情和效率。",
  },
  {
    id: 8,
    dimension: "musical",
    text: "视频、直播或一段话的节奏不对时，我会很快觉得哪里别扭。",
  },
  {
    id: 9,
    dimension: "kinesthetic",
    text: "比起听别人讲很多遍，我更容易通过上手做一遍来学会。",
  },
  {
    id: 10,
    dimension: "intrapersonal",
    text: "做重要选择前，我需要先弄清楚自己真实在意的是什么。",
  },
  {
    id: 11,
    dimension: "aesthetic",
    text: "如果一个东西功能还可以但不好看，我会明显降低对它的兴趣。",
  },
  {
    id: 12,
    dimension: "logical",
    text: "遇到问题时，我会先找关键变量，而不是马上凭情绪下判断。",
  },
  {
    id: 13,
    dimension: "interpersonal",
    text: "在多人聊天或合作里，我常常能察觉谁被忽略了、谁不太舒服。",
  },
  {
    id: 14,
    dimension: "spatial",
    text: "整理房间、布置桌面或安排动线时，我会自然考虑位置是否顺手。",
  },
  {
    id: 15,
    dimension: "language",
    text: "写文案、起标题、组织话术这类事情，会让我有发挥空间。",
  },
  {
    id: 16,
    dimension: "execution",
    text: "我喜欢把一个大任务拆成小步骤，然后一项一项完成。",
  },
  {
    id: 17,
    dimension: "nature",
    text: "我容易注意到天气、气味、光线、植物或生活物品的细微变化。",
  },
  {
    id: 18,
    dimension: "musical",
    text: "听音乐或声音时，我会自然关注情绪、停顿、轻重和节拍变化。",
  },
  {
    id: 19,
    dimension: "kinesthetic",
    text: "需要动手操作、拍摄、展示、练习的任务，通常比纯坐着想更适合我。",
  },
  {
    id: 20,
    dimension: "intrapersonal",
    text: "我会反复复盘自己的状态，想知道为什么某件事让我开心或消耗。",
  },
  {
    id: 21,
    dimension: "aesthetic",
    text: "别人让我帮忙看图片、穿搭、包装或排版时，我通常能给出具体建议。",
  },
  {
    id: 22,
    dimension: "logical",
    text: "如果一个方案听起来很热闹但逻辑不闭环，我很难真正信服。",
  },
  {
    id: 23,
    dimension: "interpersonal",
    text: "朋友遇到情绪问题时，常会来找我聊，因为我比较能理解他们。",
  },
  {
    id: 24,
    dimension: "spatial",
    text: "做内容或汇报时，我更喜欢用图、框架、草图来表达想法。",
  },
  {
    id: 25,
    dimension: "language",
    text: "需要公开表达、讲解、沟通说服时，我虽然会紧张，但通常能完成得不错。",
  },
  {
    id: 26,
    dimension: "execution",
    text: "团队里如果没人推进，我常会忍不住把时间、分工和下一步定下来。",
  },
  {
    id: 27,
    dimension: "nature",
    text: "我会被自然、家居、饮食、植物、生活方式类内容吸引并获得放松。",
  },
  {
    id: 28,
    dimension: "musical",
    text: "剪视频、做口播或讲故事时，我会在意节奏是不是抓人。",
  },
  {
    id: 29,
    dimension: "kinesthetic",
    text: "我的身体状态会直接影响判断；累了、闷了，我需要走动或活动一下才恢复。",
  },
  {
    id: 30,
    dimension: "intrapersonal",
    text: "比起立刻听别人建议，我更需要先和自己对齐，再决定要不要行动。",
  },
  {
    id: 31,
    dimension: "aesthetic",
    text: "我很难忍受粗糙、杂乱或没有统一风格的视觉呈现。",
  },
  {
    id: 32,
    dimension: "logical",
    text: "当别人情绪化表达时，我会想先把事实、推测和感受分开。",
  },
  {
    id: 33,
    dimension: "interpersonal",
    text: "我能根据对方的反应调整说话方式，让沟通更容易被接受。",
  },
  {
    id: 34,
    dimension: "spatial",
    text: "看到一个物品或空间，我常能想象它换个位置、角度或组合后的样子。",
  },
  {
    id: 35,
    dimension: "language",
    text: "我对措辞比较敏感，同一句话换个说法，给人的感觉会差很多。",
  },
  {
    id: 36,
    dimension: "execution",
    text: "事情没有结果或长期拖着时，我会明显焦虑，想尽快推动闭环。",
  },
  {
    id: 37,
    dimension: "nature",
    text: "如果生活环境太混乱，我会先想整理它，再开始做重要事情。",
  },
  {
    id: 38,
    dimension: "musical",
    text: "我容易记住旋律、语气或某段声音带来的氛围感。",
  },
  {
    id: 39,
    dimension: "kinesthetic",
    text: "别人示范一个动作或操作流程时，我通常能通过模仿慢慢找到感觉。",
  },
  {
    id: 40,
    dimension: "intrapersonal",
    text: "我更适合做和长期价值感有关的事，只靠外界奖励很难让我持续。",
  },
  {
    id: 41,
    dimension: "aesthetic",
    text: "做内容或作品时，我会花不少时间调整它的氛围，而不只是完成任务。",
  },
  {
    id: 42,
    dimension: "logical",
    text: "我喜欢把混乱信息归类、排序，找到里面真正重要的部分。",
  },
  {
    id: 43,
    dimension: "interpersonal",
    text: "我能比较快判断一个人更需要被安慰、被支持，还是被直接给建议。",
  },
  {
    id: 44,
    dimension: "spatial",
    text: "我对比例、距离、位置关系比较敏感，东西摆歪了会想调整。",
  },
  {
    id: 45,
    dimension: "language",
    text: "别人让我总结一段内容时，我通常能抓住重点并说得更顺。",
  },
  {
    id: 46,
    dimension: "execution",
    text: "我会因为看到进度条、清单被划掉、任务完成而获得明显满足感。",
  },
  {
    id: 47,
    dimension: "nature",
    text: "我对生活里的触感、温度、味道、光线这类细节有比较强的感受。",
  },
  {
    id: 48,
    dimension: "musical",
    text: "一个人说话的语气、停顿和节奏，会影响我对这段话的理解。",
  },
  {
    id: 49,
    dimension: "kinesthetic",
    text: "需要反复练习形成手感的事情，我通常不会太排斥。",
  },
  {
    id: 50,
    dimension: "intrapersonal",
    text: "我能感受到自己什么时候是在勉强，什么时候是真的有热情。",
  },
  {
    id: 51,
    dimension: "aesthetic",
    text: "选礼物、布置场景或搭配物品时，我会在意它给人的第一感觉。",
  },
  {
    id: 52,
    dimension: "logical",
    text: "我喜欢知道一件事为什么有效，而不是只照着别人说的方法做。",
  },
  {
    id: 53,
    dimension: "interpersonal",
    text: "我常常能发现两个人之间没说破的 tension 或微妙距离。",
  },
  {
    id: 54,
    dimension: "spatial",
    text: "我更容易通过示意图、流程图或视觉结构理解新知识。",
  },
  {
    id: 55,
    dimension: "language",
    text: "我会在意一句话是否有说服力、是否容易被误解。",
  },
  {
    id: 56,
    dimension: "execution",
    text: "面对新项目时，我会想先定截止时间、优先级和最小可交付结果。",
  },
  {
    id: 57,
    dimension: "nature",
    text: "我做选择时会考虑长期是否舒服、可持续，而不只是眼前效率。",
  },
  {
    id: 58,
    dimension: "musical",
    text: "我对一段内容的情绪起伏很敏感，太平或太乱都会让我出戏。",
  },
  {
    id: 59,
    dimension: "kinesthetic",
    text: "我在移动、整理、摆弄东西或实际操作时，更容易进入专注状态。",
  },
  {
    id: 60,
    dimension: "intrapersonal",
    text: "我会用写下来、独处或复盘的方式整理自己的想法。",
  },
  {
    id: 61,
    dimension: "aesthetic",
    text: "我常常能说出一个画面、账号或空间为什么高级，或为什么显得廉价。",
  },
  {
    id: 62,
    dimension: "logical",
    text: "当信息很多时，我会想找一个模型或框架来理解它。",
  },
  {
    id: 63,
    dimension: "interpersonal",
    text: "我比较擅长让不同性格的人在同一个场景里舒服地互动。",
  },
  {
    id: 64,
    dimension: "spatial",
    text: "做拍摄、陈列、装修或排版时，我会自然考虑视线从哪里开始看。",
  },
  {
    id: 65,
    dimension: "language",
    text: "如果我要推荐一个东西，我会先想怎么讲别人才更愿意听。",
  },
  {
    id: 66,
    dimension: "execution",
    text: "我不喜欢事情一直停留在想法层面，更想看到实际结果。",
  },
  {
    id: 67,
    dimension: "nature",
    text: "我适合在相对稳定、舒服、有节奏的环境里长期积累。",
  },
  {
    id: 68,
    dimension: "musical",
    text: "我能感受到一段话或一条视频什么时候该快、什么时候该停顿。",
  },
  {
    id: 69,
    dimension: "kinesthetic",
    text: "只看文字说明时我容易没感觉，但看到演示或自己操作后就清楚很多。",
  },
  {
    id: 70,
    dimension: "intrapersonal",
    text: "如果一件事不符合我的内在价值，即使别人说很好，我也很难坚持。",
  },
  {
    id: 71,
    dimension: "aesthetic",
    text: "别人觉得差不多就行时，我可能还会想继续优化细节和质感。",
  },
  {
    id: 72,
    dimension: "logical",
    text: "我能比较快发现一个计划里最可能出问题的环节。",
  },
  {
    id: 73,
    dimension: "interpersonal",
    text: "我会根据关系亲疏、场合和对方状态，调整自己表达的分寸。",
  },
  {
    id: 74,
    dimension: "spatial",
    text: "我对空间层次、画面留白或页面结构是否清楚比较敏感。",
  },
  {
    id: 75,
    dimension: "language",
    text: "我容易被好的表达打动，也会记住一些有力量的句子。",
  },
  {
    id: 76,
    dimension: "execution",
    text: "如果一件事要长期推进，我会希望有固定节奏和可检查的节点。",
  },
  {
    id: 77,
    dimension: "nature",
    text: "我会从生活细节里获得灵感，比如植物、食物、天气、房间状态。",
  },
  {
    id: 78,
    dimension: "musical",
    text: "我容易被声音氛围影响状态，也知道什么声音能让我更进入感觉。",
  },
  {
    id: 79,
    dimension: "kinesthetic",
    text: "我适合通过身体、动作、手感或现场体验来判断一件事适不适合自己。",
  },
  {
    id: 80,
    dimension: "intrapersonal",
    text: "我能分辨自己是因为害怕而逃避，还是因为真的不想要。",
  },
];

const initialQuestions = questionBank.slice(0, SCREENING_QUESTIONS);

function summarizeAnswers(
  selectedQuestions: Question[],
  selectedAnswers: (number | null)[],
) {
  const scores = Object.fromEntries(
    dimensions.map((dimension) => [dimension.key, 0]),
  );
  const counts = Object.fromEntries(
    dimensions.map((dimension) => [dimension.key, 0]),
  );

  selectedQuestions.forEach((question, index) => {
    const answer = selectedAnswers[index];
    if (answer === null || answer === undefined) return;
    scores[question.dimension] += answer;
    counts[question.dimension] += 1;
  });

  return dimensions
    .map((dimension) => ({
      key: dimension.key,
      average: counts[dimension.key]
        ? scores[dimension.key] / counts[dimension.key]
        : 0,
      count: counts[dimension.key],
    }))
    .sort((a, b) => b.average - a.average || a.count - b.count);
}

function selectNextQuestion(
  selectedQuestions: Question[],
  selectedAnswers: (number | null)[],
) {
  const usedIds = new Set(selectedQuestions.map((question) => question.id));
  const candidates = questionBank.filter((question) => !usedIds.has(question.id));
  const summary = summarizeAnswers(selectedQuestions, selectedAnswers);
  const adaptiveStep = selectedQuestions.length - SCREENING_QUESTIONS;
  const [first, second, third] = summary;

  let focusKeys = [first.key, second.key, third.key];

  if (Math.abs(first.average - second.average) <= 0.35) {
    focusKeys = [first.key, second.key];
  }

  if (adaptiveStep % 5 === 4) {
    focusKeys = summary
      .filter((item) => item.average >= 3.2)
      .sort((a, b) => a.count - b.count || b.average - a.average)
      .slice(0, 3)
      .map((item) => item.key);
  }

  const focusedCandidates = candidates.filter((question) =>
    focusKeys.includes(question.dimension),
  );
  const pool = focusedCandidates.length ? focusedCandidates : candidates;

  return [...pool].sort((a, b) => {
    const aSummary = summary.find((item) => item.key === a.dimension);
    const bSummary = summary.find((item) => item.key === b.dimension);
    return (
      (aSummary?.count || 0) - (bSummary?.count || 0) ||
      (bSummary?.average || 0) - (aSummary?.average || 0) ||
      a.id - b.id
    );
  })[0];
}

const optionValues = [
  { label: "非常符合", value: 5 },
  { label: "很符合", value: 4 },
  { label: "部分符合", value: 3 },
  { label: "不太符合", value: 2 },
  { label: "完全不符合", value: 1 },
];

const recommendedTests = [
  {
    icon: "情",
    title: "亲密关系依恋测试",
    desc: "看你在关系里更容易焦虑、回避、讨好，还是稳定连接。",
  },
  {
    icon: "钱",
    title: "赚钱性格测试",
    desc: "分析你更适合流量型、服务型、产品型还是资源型变现。",
  },
  {
    icon: "职",
    title: "职业能量测试",
    desc: "判断你适合单打独斗、团队协作、管理推进还是创意表达。",
  },
  {
    icon: "心",
    title: "内耗来源测试",
    desc: "找到你最容易消耗自己的心理模式，以及对应的止损方式。",
  },
];

export default function Home() {
  const [view, setView] = useState<"home" | "quiz" | "report">("home");
  const [current, setCurrent] = useState(0);
  const [activeQuestions, setActiveQuestions] =
    useState<Question[]>(initialQuestions);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(TOTAL_QUESTIONS).fill(null),
  );
  const [result, setResult] = useState<Result | null>(null);
  const [toast, setToast] = useState("");

  const currentQuestion = activeQuestions[current];
  const currentDimension = dimensions.find(
    (dimension) => dimension.key === currentQuestion.dimension,
  )!;
  const progress = ((current + 1) / TOTAL_QUESTIONS) * 100;

  const top = result?.ranked[0];
  const second = result?.ranked[1];
  const third = result?.ranked[2];
  const directionTags = useMemo(() => {
    if (!top || !second) return [];
    return [...top.directions, ...second.directions.slice(0, 2)];
  }, [top, second]);
  const orderedScores = useMemo(() => {
    if (!result) return [];
    return dimensions.map((dimension) => {
      const item = result.ranked.find((ranked) => ranked.key === dimension.key)!;
      return item;
    });
  }, [result]);
  const reportScore = useMemo(() => {
    if (!result) return 0;
    const topThree = result.ranked.slice(0, 3);
    return Math.round(
      topThree.reduce((sum, item) => sum + item.percent, 0) / topThree.length,
    );
  }, [result]);
  const reportType = useMemo(() => {
    if (!top || !second || !third) return "优势探索型";
    if ([top.key, second.key, third.key].includes("aesthetic")) {
      return "文化创意型";
    }
    if ([top.key, second.key, third.key].includes("logical")) {
      return "结构策略型";
    }
    if ([top.key, second.key, third.key].includes("interpersonal")) {
      return "关系洞察型";
    }
    return "复合成长型";
  }, [top, second, third]);
  const growthItems = useMemo(() => {
    if (!result) return [];
    return [...result.ranked].reverse().slice(0, 3);
  }, [result]);
  const radarPoints = useMemo(() => {
    if (!orderedScores.length) return "";
    const center = 120;
    const radius = 82;
    return orderedScores
      .map((item, index) => {
        const angle = (Math.PI * 2 * index) / orderedScores.length - Math.PI / 2;
        const value = Math.max(0.2, item.score / 20);
        const x = center + Math.cos(angle) * radius * value;
        const y = center + Math.sin(angle) * radius * value;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }, [orderedScores]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setResult(JSON.parse(stored) as Result);
      setView("report");
    }
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  function startTest() {
    if (result) {
      setView("report");
      setToast("你已经完成过测试，已直接进入报告页");
      return;
    }
    setView("quiz");
  }

  function showReport() {
    if (!result) {
      setToast("还没有报告，先完成一次测试");
      return;
    }
    setView("report");
  }

  function chooseAnswer(value: number) {
    const nextAnswers = [...answers];
    nextAnswers[current] = value;
    setAnswers(nextAnswers);
  }

  function calculateResult() {
    const scores = Object.fromEntries(
      dimensions.map((dimension) => [dimension.key, 0]),
    );
    const counts = Object.fromEntries(
      dimensions.map((dimension) => [dimension.key, 0]),
    );

    activeQuestions.forEach((question, index) => {
      const answer = answers[index];
      if (answer === null || answer === undefined) return;
      scores[question.dimension] += answer;
      counts[question.dimension] += 1;
    });
    const ranked = dimensions
      .map((dimension) => {
        const average = counts[dimension.key]
          ? scores[dimension.key] / counts[dimension.key]
          : 0;
        return {
          ...dimension,
          score: Math.round((average / 5) * 20),
          percent: Math.round((average / 5) * 100),
        };
      })
      .sort((a, b) => b.score - a.score);
    return { createdAt: new Date().toISOString(), ranked };
  }

  function nextQuestion() {
    if (answers[current] === null) {
      setToast("先选择一个答案");
      return;
    }
    if (current === TOTAL_QUESTIONS - 1) {
      if (answers.slice(0, TOTAL_QUESTIONS).some((answer) => answer === null)) {
        setToast("还有题目没有完成");
        return;
      }
      const nextResult = calculateResult();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResult));
      setResult(nextResult);
      setView("report");
      return;
    }

    if (current === activeQuestions.length - 1) {
      const nextQuestionItem = selectNextQuestion(activeQuestions, answers);
      setActiveQuestions((questions) => [...questions, nextQuestionItem]);
    }

    setCurrent((value) => value + 1);
  }

  function resetDemo() {
    window.localStorage.removeItem(STORAGE_KEY);
    setResult(null);
    setActiveQuestions(initialQuestions);
    setAnswers(Array(TOTAL_QUESTIONS).fill(null));
    setCurrent(0);
    setView("home");
    setToast("已清除演示结果");
  }

  return (
    <main className="app">
      {view === "home" && (
        <section className="view active">
          <div className="topbar">
            <div className="brand">
              <span className="brand-mark">★</span>
              <span>Luckora 星标天赋</span>
            </div>
            <button className="ghost-btn" onClick={showReport}>
              我的报告
            </button>
          </div>

          <div className="hero">
            <span className="pill">★ 40道题 · 10个维度 · 仅测一次</span>
            <h1>
              发现你的
              <br />
              隐藏天赋密码
            </h1>
            <p className="lead">
              每个人都有独特的优势组合。用几分钟看见你更擅长的领域，以及更适合你的成长方式。
            </p>
          </div>

          <div className="stack">
            <button className="primary-btn" onClick={startTest}>
              开始测试
            </button>
            <div className="metrics">
              <div className="metric">
                <span>预计用时</span>
                <b>6-8</b>
                <span>分钟完成</span>
              </div>
              <div className="metric">
                <span>测试题量</span>
                <b>40</b>
                <span>道题目</span>
              </div>
              <div className="metric">
                <span>分析范围</span>
                <b>10</b>
                <span>天赋维度</span>
              </div>
              <div className="metric">
                <span>结果规则</span>
                <b>1次</b>
                <span>专属报告</span>
              </div>
            </div>
            <p className="notice">
              答题完成后会锁定结果。再次打开或刷新页面，会直接进入你的报告页。
            </p>
          </div>
        </section>
      )}

      {view === "quiz" && (
        <section className="view active">
          <div className="quiz-shell">
            <div className="quiz-header">
              <div className="quiz-head-row">
                <div className="brand">
                  <span className="brand-mark">★</span>
                  <span>天赋测试</span>
                </div>
                <div className="progress-copy">
                  答题进度 {current + 1} / {TOTAL_QUESTIONS}
                </div>
              </div>
              <div className="progress-track">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="question-card">
              <div className="dimension-card">
                <h2 className="dimension-name">{currentDimension.name}</h2>
                <p>{currentDimension.desc}</p>
              </div>
              <div className="question-kicker">题目 {current + 1}</div>
              <p className="question-text">{currentQuestion.text}</p>
              <div className="options">
                {optionValues.map((option) => (
                  <button
                    className={`option ${
                      answers[current] === option.value ? "selected" : ""
                    }`}
                    key={option.value}
                    onClick={() => chooseAnswer(option.value)}
                  >
                    <span className="radio" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="quiz-actions">
                <button
                  className="secondary-btn"
                  disabled={current === 0}
                  onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                >
                  ← 上一题
                </button>
                <button
                  className="primary-btn"
                  disabled={answers[current] === null}
                  onClick={nextQuestion}
                >
                  {current === TOTAL_QUESTIONS - 1 ? "生成报告" : "下一题 →"}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {view === "report" && result && top && second && third && (
        <section className="view active">
          <div className="topbar">
            <div className="brand">
              <span className="brand-mark">★</span>
              <span>我的报告</span>
            </div>
            <span className="pill">已锁定</span>
          </div>

          <div className="stack">
            <div className="report-cover">
              <div className="cover-kicker">天赋能力测试报告</div>
              <div className="cover-subtitle">
                职业深度版 · 基于多元智能理论
              </div>
              <div className="summary-card">
                <div
                  className="score-ring"
                  style={{
                    background: `conic-gradient(#8f5cff ${reportScore * 3.6}deg, #eee7fb 0deg)`,
                  }}
                >
                  <div>
                    <strong>{reportScore}</strong>
                    <span>%</span>
                  </div>
                </div>
                <div className="summary-copy">
                  <span className="type-pill">
                    {dimensionMarks[top.key].icon} {reportType}
                  </span>
                  <p>
                    你最具有 {top.name}、{second.name}、{third.name}
                    。这份报告会把你的优势、适合职业、成长空间和行动计划拆开看。
                  </p>
                </div>
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">📊</span>
                <h2>天赋能力图谱</h2>
                <small>10维度全景展示</small>
              </div>
              <div className="radar-wrap">
                <svg className="radar" viewBox="0 0 240 240" role="img">
                  {[1, 2, 3, 4].map((level) => (
                    <circle
                      cx="120"
                      cy="120"
                      fill="none"
                      key={level}
                      r={level * 20}
                    />
                  ))}
                  {orderedScores.map((_, index) => {
                    const angle =
                      (Math.PI * 2 * index) / orderedScores.length - Math.PI / 2;
                    const x = 120 + Math.cos(angle) * 88;
                    const y = 120 + Math.sin(angle) * 88;
                    return (
                      <line
                        key={index}
                        x1="120"
                        x2={x}
                        y1="120"
                        y2={y}
                      />
                    );
                  })}
                  <polygon className="radar-area" points={radarPoints} />
                  {orderedScores.map((item, index) => {
                    const angle =
                      (Math.PI * 2 * index) / orderedScores.length - Math.PI / 2;
                    const x = 120 + Math.cos(angle) * 104;
                    const y = 120 + Math.sin(angle) * 104;
                    return (
                      <text key={item.key} x={x} y={y}>
                        {dimensionMarks[item.key].code}({item.score})
                      </text>
                    );
                  })}
                </svg>
                <div className="legend-row">
                  <span>16-20 非常擅长</span>
                  <span>12-15 有些擅长</span>
                  <span>4-11 待发展</span>
                </div>
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">📋</span>
                <h2>各项天赋详情</h2>
              </div>
              <div className="dimension-table">
                {orderedScores.map((item) => (
                  <div className="dimension-row" key={item.key}>
                    <span className="dimension-code">
                      {dimensionMarks[item.key].code}
                    </span>
                    <b>{dimensionMarks[item.key].short}</b>
                    <div className="dimension-track">
                      <i style={{ width: `${item.percent}%` }} />
                    </div>
                    <strong>{item.score}</strong>
                    <em>
                      {item.score >= 16
                        ? "非常擅长"
                        : item.score >= 12
                          ? "有些擅长"
                          : "待发展"}
                    </em>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">👑</span>
                <h2>核心优势深度解读</h2>
                <small>你的第一天赋</small>
              </div>
              <div className="deep-dive">
                <div className="deep-icon">{dimensionMarks[top.key].icon}</div>
                <div>
                  <h3>{top.name}</h3>
                  <div className="deep-score">
                    <span style={{ width: `${top.percent}%` }} />
                  </div>
                  <p className="deep-quote">
                    把你的核心感知转化为别人能看见、能理解、能使用的价值。
                  </p>
                </div>
              </div>
              <p className="deep-text">{top.profile}</p>
              <h3 className="mini-title">你可能的特征</h3>
              <ul className="feature-list">
                <li>{top.behavior}</li>
                <li>在做选择时，你更适合看“长期能量”，而不是只看短期热门。</li>
                <li>当环境允许你使用优势时，你的学习速度和自我驱动力会明显提高。</li>
              </ul>
              <h3 className="mini-title">职场最佳应用场景</h3>
              <div className="tag-row">
                {top.directions.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="warning-card">
                <b>需要注意的陷阱</b>
                <p>{top.blind}</p>
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">💼</span>
                <h2>职业发展指南</h2>
                <small>基于天赋的职业匹配</small>
              </div>
              <h3 className="mini-title">推荐职业方向</h3>
              <div className="career-list">
                {[
                  ["内容策划", "需要优秀表达、选题判断和用户感知能力"],
                  ["视觉/品牌设计", "需要审美判断、空间结构和持续创作能力"],
                  ["用户研究", "需要观察、共情和结构化分析能力"],
                  ["新媒体运营", "需要内容表达、节奏把控和执行推进能力"],
                  ["自由职业/个人IP", "适合把优势沉淀成作品和服务"],
                  ["产品策划", "适合把用户需求拆成具体体验和流程"],
                ].map(([title, desc], index) => (
                  <div className="career-card" key={title}>
                    <span>{index + 1}</span>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <div className="career-tags">
                      <i>{dimensionMarks[top.key].icon} {dimensionMarks[top.key].short}</i>
                      <i>{dimensionMarks[second.key].icon} {dimensionMarks[second.key].short}</i>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small-note">
                小贴士：在选择时，不妨想一想哪类工作更能让你的天赋被看见、被需要。
              </p>
            </div>

            <div className="report-block">
              <div className="block-head caution">
                <span className="block-icon">⚠️</span>
                <h2>建议谨慎的方向</h2>
              </div>
              <div className="caution-list">
                {cautiousCareers.map(([title, desc]) => (
                  <div key={title}>
                    <b>{title}：</b>
                    <span>{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">🌱</span>
                <h2>成长空间</h2>
                <small>潜力提升方向</small>
              </div>
              <div className="growth-list">
                {growthItems.map((item) => (
                  <div className="growth-card" key={item.key}>
                    <h3>
                      {dimensionMarks[item.key].icon} {item.name}
                      <span>{item.score}分 · {item.score >= 12 ? "可继续提升" : "需要更多练习"}</span>
                    </h3>
                    <p>{item.desc}目前不是你的主力方向，遇到相关任务时，可以借助工具或找擅长的人一起梳理。</p>
                    <b>提升建议：{item.advice}</b>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">📅</span>
                <h2>行动计划</h2>
                <small>分阶段成长路径</small>
              </div>
              <p className="plan-intro">
                下面是一份可以直接照着执行的行动清单，帮助你把“看到报告”变成“真正发生改变”。
              </p>
              <div className="plan-list">
                {actionPlans.map((plan) => (
                  <div className="plan-card" key={plan.title}>
                    <h3>{plan.title}<span>{plan.period}</span></h3>
                    {plan.items.map((item) => (
                      <p key={item}>✓ {item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="report-block">
              <div className="block-head">
                <span className="block-icon">🏅</span>
                <h2>你的 TOP 5 天赋</h2>
              </div>
              <div className="score-list">
                {result.ranked.slice(0, 5).map((item, index) => (
                  <div className="score-card" key={item.key}>
                  <div className="score-row">
                    <span>
                      TOP {index + 1} {dimensionMarks[item.key].icon} {item.name}
                    </span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="mini-track">
                    <div
                      className="mini-fill"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="report-section">
              {[
                ["你的优势画像", top.profile],
                ["你的典型表现", top.behavior],
                ["需要留意的盲区", top.blind],
                ["给你的行动建议", top.advice],
              ].map(([title, text]) => (
                <div className="insight-card" key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="combo-card">
              <h2 className="combo-title">
                {top.name} × {second.name} × {third.name}
              </h2>
              <p>
                你的优势不是孤立存在的：{top.name}让你形成核心驱动力，
                {second.name}决定你更自然的表达方式，{third.name}
                则影响你把能力放到什么场景里。做选择时，优先找能同时用到这三种能力的方向，你会更容易进入持续状态。
              </p>
            </div>

            <div className="panel">
              <h2>更适合你的尝试方向</h2>
              <p>
                你不适合只用“热门不热门”来选方向，更适合用“我能不能长期有能量”来判断。下面这些方向可以先作为内容、职业、副业或学习路径的参考。
              </p>
              <div className="tag-row">
                {directionTags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel">
              <h2>下一步可以继续测</h2>
              <p>
                如果想看更细的关系、赚钱、情绪和职业方向，可以去小红书店铺拍对应测试。这里先做展示，不在网页内收费。
              </p>
            </div>

            <div className="recommend-list">
              {recommendedTests.map((item) => (
                <div className="recommend-card" key={item.title}>
                  <div className="recommend-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="shop-note">
              购买路径示意：小红书店铺拍下对应测试 → 系统/客服发送测试入口 →
              完成后回到这个结果页查看报告。
            </div>

            <div className="panel">
              <h2>保存提醒</h2>
              <p>
                这份报告已经锁定在当前浏览器。再次打开或刷新页面，会直接进入结果页，不会重新答题。
              </p>
              <p className="report-time">
                {new Date(result.createdAt).toLocaleString("zh-CN")} · 天赋能力测试（40题） · 职业深度版
              </p>
            </div>

            <button className="reset-link" onClick={resetDemo}>
              演示用：清除本机结果，重新体验
            </button>
          </div>
        </section>
      )}

      <div className={`toast ${toast ? "show" : ""}`}>{toast}</div>
    </main>
  );
}
