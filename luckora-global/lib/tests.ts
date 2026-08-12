export type TestStatus = "available" | "coming-soon";

export type TestFaq = {
  question: string;
  answer: string;
};

export type TestConfig = {
  id: string;
  title: string;
  description: string;
  slug: string;
  status: TestStatus;
  icon: string;
  startPath?: string;
  seoTitle: string;
  seoDescription: string;
  whatIsThis: string;
  howItWorks: string[];
  discoveries: string[];
  seoSections?: Array<{
    title: string;
    body: string;
  }>;
  faq: TestFaq[];
};

export const testConfigs: TestConfig[] = [
  {
    id: "personality",
    title: "AI Personality Test - Discover Your True Personality",
    description:
      "Take a free AI personality test online to discover your personality traits, emotional patterns, hidden strengths and growth potential.",
    slug: "personality-test",
    status: "available",
    icon: "✦",
    startPath: "/test",
    seoTitle: "AI Personality Test - Discover Your True Personality | Luckora",
    seoDescription:
      "Take Luckora's free AI personality test online to discover your personality traits, strengths, emotional patterns and hidden potential.",
    whatIsThis:
      "A personality test is an online self discovery assessment that helps you understand recurring patterns in how you think, feel, communicate and make decisions. Luckora's AI personality test turns your answers into a clear personality identity, making it easier to discover your personality and reflect on your true self.",
    howItWorks: [
      "Answer 12 instinctive questions in a free personality quiz about how you think, create, connect and take action.",
      "Luckora maps your strongest personality signals across creator, analyst, connector and leader patterns.",
      "Your AI personality test result becomes a cosmic identity report with traits, strengths, emotional patterns and growth direction.",
    ],
    discoveries: [
      "Your personality identity",
      "Your strongest natural traits",
      "Hidden strengths you may underuse",
      "Growth challenges that make the report more realistic",
      "Career directions that fit your energy",
    ],
    faq: [
      {
        question: "What is a personality test?",
        answer:
          "A personality test is an online self discovery tool that helps you understand traits, preferences, behavior patterns and how you naturally respond to different situations.",
      },
      {
        question: "How does an AI personality test work?",
        answer:
          "An AI personality test reviews your answers and maps them into a structured profile that explains your personality traits, strengths, emotional patterns and growth opportunities.",
      },
      {
        question: "Is this personality test free?",
        answer:
          "Yes. Luckora currently offers a free personality test online and gives you a personality identity report without signup.",
      },
      {
        question: "Why should you understand your personality?",
        answer:
          "Understanding your personality can help you make better decisions about relationships, career direction, personal growth and how to use your natural strengths.",
      },
      {
        question: "How long does the test take?",
        answer:
          "The first Luckora test has 12 questions and usually takes only a few minutes to complete.",
      },
    ],
  },
  {
    id: "career",
    title: "AI Career Test",
    description:
      "Explore career directions that match your personality, motivation, work rhythm and future potential.",
    slug: "career-test",
    status: "coming-soon",
    icon: "◇",
    seoTitle: "AI Career Test - Find Your Natural Career Direction | Luckora",
    seoDescription:
      "Explore Luckora's upcoming AI career test for career direction, work strengths and future potential.",
    whatIsThis:
      "The AI Career Test will help users connect personality patterns with practical work directions.",
    howItWorks: [
      "Identify your work energy and decision patterns.",
      "Map your strengths to AI-era career directions.",
      "Receive a practical growth path for future work.",
    ],
    discoveries: [
      "Career strengths",
      "Work style",
      "AI-era career fit",
      "Growth direction",
    ],
    seoSections: [
      {
        title: "What is an AI Career Test?",
        body: "An AI Career Test is a self discovery tool that helps people connect personality patterns, strengths, motivation and work preferences with possible career directions. Instead of asking only what job title sounds attractive, a stronger career test looks at how you think, how you make decisions, what kind of problems give you energy and what environments help you perform well. Luckora's career direction content is being designed around this idea: career choice should be connected to identity, not only skills. In the AI era, many roles are changing quickly, so the deeper question is not just which job exists today. The better question is which kinds of work patterns fit your natural energy and can grow with new tools.",
      },
      {
        title: "What can users discover?",
        body: "A useful career discovery experience should help users understand their work style, natural strengths, decision rhythm, collaboration preferences and growth opportunities. For example, some people are energized by creative ambiguity, while others perform best when they can organize complexity into clear systems. Some users may be strong at building trust and communication, while others are strongest when they can create momentum and execute quickly. The future Luckora AI Career Test will help turn these signals into practical career themes such as creative direction, product thinking, research, community, operations, leadership or entrepreneurship.",
      },
      {
        title: "Why personality matters for career",
        body: "Personality matters because careers are not only about what someone can do. They are also about what someone can repeat without losing energy. A career that looks impressive from the outside may feel draining if it constantly fights a person's natural thinking style. A better career direction gives people room to use their strengths, grow through realistic challenges and build confidence over time. Luckora treats personality as a starting point for reflection, not a fixed label. The goal is to help users notice patterns they can use when choosing projects, learning skills or exploring future work paths.",
      },
    ],
    faq: [
      {
        question: "When will the AI Career Test launch?",
        answer:
          "The AI Career Test is planned for a future Luckora release after the personality test foundation is stable.",
      },
    ],
  },
  {
    id: "strengths",
    title: "AI Strengths Test",
    description:
      "Reveal the natural abilities, thinking habits and hidden strengths that shape your potential.",
    slug: "strengths-test",
    status: "coming-soon",
    icon: "✺",
    seoTitle: "AI Strengths Test - Discover Your Hidden Strengths | Luckora",
    seoDescription:
      "Discover natural abilities and hidden strengths with Luckora's upcoming AI strengths test.",
    whatIsThis:
      "The AI Strengths Test will focus on the natural abilities people often overlook in themselves.",
    howItWorks: [
      "Answer questions about your habits, interests and natural energy.",
      "Map repeating strengths across thinking, communication and action.",
      "Receive growth suggestions based on your strongest patterns.",
    ],
    discoveries: [
      "Hidden strengths",
      "Natural abilities",
      "Confidence signals",
      "Growth opportunities",
    ],
    seoSections: [
      {
        title: "What is a Strengths Test?",
        body: "A strengths test is a self discovery assessment that helps people identify the abilities, habits and thinking patterns that come most naturally to them. Many people overlook their strengths because these abilities feel normal from the inside. Someone who naturally explains complex ideas may not realize that communication is a strength. Someone who notices patterns quickly may assume everyone sees the same structure. The purpose of a strengths test is to make these natural signals visible so users can understand what they are good at and how those strengths can support personal growth.",
      },
      {
        title: "Discover natural abilities",
        body: "Natural abilities are not always dramatic. They often show up in repeated moments: what people ask you for help with, what tasks feel easier to improve, what details you notice first and what kind of work keeps your attention. A strong strengths assessment should look at behavior patterns rather than asking users to choose a flattering identity. Luckora's upcoming AI Strengths Test will focus on signals such as creativity, analysis, empathy, execution, curiosity, communication and leadership. The goal is to help users recognize abilities they can develop intentionally.",
      },
      {
        title: "Personal growth through strengths",
        body: "Personal growth becomes more sustainable when people build from their strengths instead of trying to become someone completely different. This does not mean ignoring weaknesses. It means understanding which strengths can become a foundation, which challenges may block progress and which environments make growth easier. For example, a creative person may need stronger finishing habits, while an analytical person may need faster experimentation. A strengths test can help users choose better learning goals, career directions and daily practices by connecting growth advice to who they already are.",
      },
    ],
    faq: [
      {
        question: "What will the AI Strengths Test measure?",
        answer:
          "It will explore natural strengths, recurring behavior patterns and areas where users may have underused potential.",
      },
    ],
  },
  {
    id: "love",
    title: "Love Language Test",
    description:
      "Discover how you express love, receive affection and connect with others.",
    slug: "love-language-test",
    status: "available",
    icon: "◌",
    startPath: "/love-language-test",
    seoTitle: "Love Language Test - Discover How You Give and Receive Love | Luckora",
    seoDescription:
      "Take a free Love Language Test and discover how you express love, receive affection, and connect with others.",
    whatIsThis:
      "A Love Language Test is a relationship self discovery tool that helps you understand the way you most naturally express love and feel emotionally appreciated. Luckora maps your answers across five love language patterns: Words of Affirmation, Quality Time, Acts of Service, Receiving Gifts and Physical Touch.",
    howItWorks: [
      "Answer 15 instinctive questions about affection, appreciation and emotional connection.",
      "Luckora maps your answers across five love language patterns.",
      "Your result explains how you give love, receive love and build stronger relationship awareness.",
    ],
    discoveries: [
      "Your primary love language",
      "How you give love",
      "How you receive affection",
      "Relationship strengths",
      "Growth challenge and connection tips",
    ],
    faq: [
      {
        question: "What is a Love Language Test?",
        answer:
          "A Love Language Test helps you reflect on how you express love, receive affection and feel emotionally connected in relationships.",
      },
      {
        question: "Is this test a psychological diagnosis?",
        answer:
          "No. Luckora's Love Language Test is for self discovery and relationship reflection, not medical or psychological diagnosis.",
      },
      {
        question: "Is the Love Language Test free?",
        answer:
          "Yes. Luckora's current Love Language Test is free and does not require signup.",
      },
    ],
  },
  {
    id: "money-mindset",
    title: "Money Mindset Test",
    description:
      "Explore your beliefs, emotions and decision patterns around money and security.",
    slug: "money-mindset-test",
    status: "coming-soon",
    icon: "◈",
    seoTitle: "Money Mindset Test - Understand Your Money Personality | Luckora",
    seoDescription:
      "Explore Luckora's upcoming money mindset test for beliefs and behavior patterns around money.",
    whatIsThis:
      "The Money Mindset Test will explore how people think, feel and behave around money.",
    howItWorks: ["Identify money beliefs.", "Map spending and security patterns.", "Receive growth prompts."],
    discoveries: ["Money beliefs", "Security patterns", "Financial behavior signals"],
    faq: [{ question: "Is this financial advice?", answer: "No. Luckora tests are for self reflection and do not provide financial advice." }],
  },
  {
    id: "leadership",
    title: "Leadership Test",
    description:
      "Discover how you influence, decide, organize people and create momentum.",
    slug: "leadership-test",
    status: "coming-soon",
    icon: "△",
    seoTitle: "Leadership Test - Discover Your Leadership Style | Luckora",
    seoDescription:
      "Explore Luckora's upcoming leadership test for decision style, influence and team momentum.",
    whatIsThis:
      "The Leadership Test will help users understand how they influence people and move ideas forward.",
    howItWorks: ["Explore decision style.", "Map influence patterns.", "Receive leadership growth guidance."],
    discoveries: ["Leadership style", "Decision patterns", "Influence strengths"],
    faq: [{ question: "Who is this leadership test for?", answer: "It will be useful for founders, creators, managers and anyone who wants to understand their influence style." }],
  },
  {
    id: "life-purpose",
    title: "Life Purpose Test",
    description:
      "Reflect on meaning, direction and the deeper themes that shape your next chapter.",
    slug: "life-purpose-test",
    status: "coming-soon",
    icon: "✧",
    seoTitle: "Life Purpose Test - Explore Your Direction | Luckora",
    seoDescription:
      "Explore Luckora's upcoming life purpose test for meaning, direction and personal growth.",
    whatIsThis:
      "The Life Purpose Test will help users reflect on meaning, values and future direction.",
    howItWorks: ["Explore values.", "Identify meaningful themes.", "Receive reflective growth prompts."],
    discoveries: ["Personal values", "Life direction", "Meaningful growth themes"],
    faq: [{ question: "Is this a spiritual test?", answer: "Luckora focuses on self discovery and reflection, not fortune telling or supernatural claims." }],
  },
  {
    id: "chinese-name-reading",
    title: "Chinese Name Reading",
    description:
      "Explore the meaning, feeling and symbolic fit of a Chinese name as a paid self discovery reading.",
    slug: "chinese-name-reading",
    status: "coming-soon",
    icon: "名",
    seoTitle: "Chinese Name Reading - Find a Meaningful Chinese Name | Luckora",
    seoDescription:
      "Explore Luckora's upcoming Chinese Name Reading for symbolic meaning, identity fit and personal style.",
    whatIsThis:
      "The Chinese Name Reading is a planned paid product that helps users explore a Chinese name through symbolic meaning, personality fit and identity feeling.",
    howItWorks: [
      "Share your current name, style or identity preference.",
      "Review name direction, symbolism and emotional fit.",
      "Receive a deeper paid reading around meaning and personality resonance.",
    ],
    discoveries: [
      "Chinese name meaning",
      "Identity style",
      "Symbolic fit",
      "Personal naming direction",
    ],
    seoSections: [
      {
        title: "What is a Chinese Name Reading?",
        body: "A Chinese Name Reading is a paid identity-style reading built for people who want more than a random translated name. Many users want a Chinese name that feels meaningful, memorable and emotionally aligned with how they want to present themselves. A stronger Chinese name reading explores symbolism, tone, character feeling, style direction and how a name fits a person's personality or self image.",
      },
      {
        title: "Why people search for a meaningful Chinese name",
        body: "People often search for a Chinese name because they want something that feels personal rather than generic. Some want a Chinese name for study, business, content creation, relocation, relationships or cultural connection. Others simply want a name that reflects their personality, energy or preferred identity. This makes Chinese name reading a strong high-intent SEO topic because the search often carries both curiosity and buying potential.",
      },
      {
        title: "What a paid Chinese name reading can include",
        body: "A paid Chinese name reading can go beyond one suggested name. It can explain the emotional feel of a name, why certain characters fit better than others, what identity tone the name creates and how it may align with a person's personality, goals or aesthetic preferences. This is the layer users are more likely to pay for because it feels personal, specific and identity-driven.",
      },
    ],
    faq: [
      {
        question: "Is the Chinese Name Reading free?",
        answer:
          "No. The planned Chinese Name Reading is being positioned as a paid premium reading rather than a free test.",
      },
    ],
  },
  {
    id: "crystal-match",
    title: "Best Crystal for You",
    description:
      "Explore which crystal style may fit your emotional needs, energy and self discovery goals.",
    slug: "best-crystal-for-you",
    status: "coming-soon",
    icon: "◈",
    seoTitle: "Best Crystal for You - Discover Your Crystal Match | Luckora",
    seoDescription:
      "Explore Luckora's upcoming crystal match reading for emotional support, symbolic energy and personal style.",
    whatIsThis:
      "The Best Crystal for You reading is a planned paid offer for users who want a symbolic crystal recommendation connected to personality and emotional needs.",
    howItWorks: [
      "Reflect on your current emotional state, goals or energy.",
      "Match recurring patterns with crystal themes and symbolic support.",
      "Receive a paid recommendation with practical and reflective guidance.",
    ],
    discoveries: [
      "Crystal match",
      "Emotional support theme",
      "Symbolic energy direction",
      "Personal ritual ideas",
    ],
    seoSections: [
      {
        title: "How to find the best crystal for you",
        body: "Many people search for the best crystal for them when they want more emotional grounding, better focus, a sense of protection or a stronger personal ritual. Even when the interest starts as curiosity, the deeper motivation is often emotional: people want something that feels supportive, symbolic and personally chosen. That is why a crystal match reading can work as both a self discovery product and an SEO topic.",
      },
      {
        title: "What makes a crystal recommendation feel personal",
        body: "A random list of crystal meanings is usually not enough to feel valuable. A stronger crystal recommendation connects the crystal theme to a person's emotional pattern, current life stage, relationship stress, need for calm, desire for confidence or wish for clarity. The more personal the reasoning feels, the more likely users are to see the recommendation as worth paying for.",
      },
      {
        title: "Why this can be a paid self discovery product",
        body: "A paid crystal reading does not only say what crystal to wear. It can explain why a crystal theme fits a person's emotional state, what kind of symbolic support it represents and how the recommendation connects with identity, ritual and intention. That deeper interpretation is what turns a casual SEO page into a product candidate.",
      },
    ],
    faq: [
      {
        question: "Is this a scientific recommendation?",
        answer:
          "No. Luckora positions crystal content as symbolic self discovery and reflection, not scientific or medical advice.",
      },
    ],
  },
];

export function getTestBySlug(slug: string) {
  return testConfigs.find((test) => test.slug === slug);
}
