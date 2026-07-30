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

const stems = [
  "我很容易注意到颜色、构图或细节是否舒服。",
  "需要动手完成的任务，通常比纯理论更适合我。",
  "遇到复杂问题时，我会下意识寻找背后的规律。",
  "我能比较自然地把想法说清楚或写清楚。",
  "我能很快感受到别人真实的情绪变化。",
  "我经常会反思自己为什么会有某种感受或选择。",
  "我对环境、季节、植物或生活细节的变化很敏感。",
  "音乐、节奏或声音氛围会明显影响我的状态。",
  "我能在脑海里想象空间、画面或布局。",
  "只要目标清楚，我通常能把事情一步步推进完成。",
];

const questions = Array.from({ length: 40 }, (_, index) => {
  const dimension = dimensions[index % dimensions.length];
  const round = Math.floor(index / dimensions.length);
  const suffixes = [
    "这常常是我的自然反应。",
    "这类事情会让我更有能量。",
    "别人也经常这样评价我。",
    "在压力下我仍会表现出这个倾向。",
  ];
  return {
    id: index + 1,
    dimension: dimension.key,
    text: stems[index % stems.length] + suffixes[round],
  };
});

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
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [result, setResult] = useState<Result | null>(null);
  const [toast, setToast] = useState("");

  const currentQuestion = questions[current];
  const currentDimension = dimensions.find(
    (dimension) => dimension.key === currentQuestion.dimension,
  )!;
  const progress = ((current + 1) / questions.length) * 100;

  const top = result?.ranked[0];
  const second = result?.ranked[1];
  const third = result?.ranked[2];
  const directionTags = useMemo(() => {
    if (!top || !second) return [];
    return [...top.directions, ...second.directions.slice(0, 2)];
  }, [top, second]);

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
    questions.forEach((question, index) => {
      scores[question.dimension] += answers[index] || 0;
    });
    const ranked = dimensions
      .map((dimension) => ({
        ...dimension,
        score: scores[dimension.key],
        percent: Math.round((scores[dimension.key] / 20) * 100),
      }))
      .sort((a, b) => b.score - a.score);
    return { createdAt: new Date().toISOString(), ranked };
  }

  function nextQuestion() {
    if (answers[current] === null) {
      setToast("先选择一个答案");
      return;
    }
    if (current === questions.length - 1) {
      if (answers.some((answer) => answer === null)) {
        setToast("还有题目没有完成");
        return;
      }
      const nextResult = calculateResult();
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextResult));
      setResult(nextResult);
      setView("report");
      return;
    }
    setCurrent((value) => value + 1);
  }

  function resetDemo() {
    window.localStorage.removeItem(STORAGE_KEY);
    setResult(null);
    setAnswers(Array(questions.length).fill(null));
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
                  答题进度 {current + 1} / {questions.length}
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
                  {current === questions.length - 1 ? "生成报告" : "下一题 →"}
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
            <div className="report-hero">
              <span className="pill">你的优势画像</span>
              <h1>你的核心天赋是：{top.name}</h1>
              <p>
                你最突出的组合是 {top.name}、{second.name} 和 {third.name}
                。这不是单一能力，而是一组会互相放大的优势结构。
              </p>
            </div>

            <div className="score-list">
              {result.ranked.slice(0, 5).map((item, index) => (
                <div className="score-card" key={item.key}>
                  <div className="score-row">
                    <span>
                      TOP {index + 1} {item.name}
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
