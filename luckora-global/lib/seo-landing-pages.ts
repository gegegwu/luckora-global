import type { TestFaq } from "@/lib/tests";

export type SeoLandingPage = {
  path: string;
  eyebrow: string;
  title: string;
  metadataTitle: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  faq: TestFaq[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    path: "/ai-personality-test",
    eyebrow: "AI Personality Test",
    title: "AI Personality Test - Discover Your True Self",
    metadataTitle: "AI Personality Test - Discover Your True Self",
    description:
      "Take Luckora's AI personality test to understand your personality patterns, hidden strengths and growth direction.",
    ctaLabel: "Start Free Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is an AI personality test?",
        body: "An AI personality test is a self discovery tool that uses structured questions and intelligent analysis to help you understand recurring patterns in how you think, choose, create and connect with other people. Luckora uses the language of personality identity to make those patterns easier to read and reflect on.",
      },
      {
        title: "Why understanding yourself matters",
        body: "People make better decisions when they understand their natural strengths, blind spots and sources of motivation. A clear personality profile can help you choose projects, learning goals and career directions with more self awareness instead of guessing what should fit you.",
      },
      {
        title: "How the test works",
        body: "The Luckora test asks short instinctive questions about your preferences and behavior patterns. Your answers are mapped into a personality identity with a summary, strengths, growth challenge and career alignment. The result is designed for reflection, not medical or clinical diagnosis.",
      },
    ],
    faq: [
      {
        question: "What is an AI personality test?",
        answer:
          "An AI personality test analyzes your answers to provide structured insight about personality traits, strengths, behavior patterns and growth direction.",
      },
      {
        question: "Is the Luckora AI personality test free?",
        answer:
          "Yes. The current Luckora AI Personality Test is free and does not require signup.",
      },
      {
        question: "Is this a psychological diagnosis?",
        answer:
          "No. Luckora is designed for self discovery and personal reflection, not medical, psychiatric or clinical diagnosis.",
      },
    ],
  },
  {
    path: "/free-personality-test",
    eyebrow: "Free Personality Test",
    title: "Free Personality Test - Discover Your Personality Type",
    metadataTitle: "Free Personality Test - Discover Your Personality Type",
    description:
      "Discover your personality type, natural strengths and growth opportunities with a free Luckora self discovery test.",
    ctaLabel: "Take the Free Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "A free test for self discovery",
        body: "Luckora's free personality test helps you explore who you are without requiring payment or signup. The goal is to give you a simple starting point for understanding your traits, strengths and growth opportunities.",
      },
      {
        title: "What the test process looks like",
        body: "You answer a short set of questions, choose the option that feels closest to your instinctive response and receive a personality identity report. The report explains your main pattern in plain language so it is easy to read and share.",
      },
      {
        title: "What you can discover",
        body: "A personality test can help you notice how you approach ideas, decisions, communication and action. Luckora also connects your result to hidden strengths, realistic challenges and possible career directions.",
      },
    ],
    faq: [
      {
        question: "Is the personality test really free?",
        answer:
          "Yes. Luckora's current personality test is free to complete and gives you a result page.",
      },
      {
        question: "How long does the free personality test take?",
        answer:
          "The current test has 12 questions and usually takes only a few minutes.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No. The current Luckora MVP does not require an account to take the test.",
      },
    ],
  },
  {
    path: "/personality-types",
    eyebrow: "Personality Types",
    title: "Personality Types Explained - Discover Your Unique Traits",
    metadataTitle:
      "Personality Types Explained - Discover Your Unique Traits",
    description:
      "Learn what personality types are, how Luckora explains personality identity and how to discover your own type.",
    ctaLabel: "Discover My Type",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What are personality types?",
        body: "Personality types are simplified patterns that help people understand how they tend to think, make decisions, communicate and grow. A type is not a fixed box. It is a language for noticing patterns that may otherwise feel vague or invisible.",
      },
      {
        title: "Luckora's personality discovery approach",
        body: "Luckora connects personality signals with a self discovery report that includes identity, strengths, challenges and career alignment. Instead of treating personality as a label, Luckora presents it as a practical reflection tool.",
      },
      {
        title: "How to discover your personality type",
        body: "The easiest way to discover your type is to answer questions about your natural preferences and recurring behavior patterns. Your result gives you a personality identity and a short explanation you can use as a starting point for deeper self understanding.",
      },
    ],
    faq: [
      {
        question: "Are personality types fixed?",
        answer:
          "No. Personality types are useful summaries of patterns, but people can grow, adapt and change over time.",
      },
      {
        question: "How many personality types does Luckora use?",
        answer:
          "Luckora's current personality result system includes multiple identity profiles built from creator, analyst, connector and leader signals.",
      },
      {
        question: "Can a personality type help with career direction?",
        answer:
          "Yes. A personality type can highlight strengths, work preferences and growth challenges that may influence career decisions.",
      },
    ],
  },
  {
    path: "/mbti-test",
    eyebrow: "MBTI Style Test",
    title: "MBTI Test - Explore Your Personality Pattern",
    metadataTitle: "MBTI Test - Explore Your Personality Pattern",
    description:
      "Explore your personality pattern with a Luckora AI self discovery test inspired by the way people search for MBTI-style insights.",
    ctaLabel: "Start Free Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is an MBTI test?",
        body: "An MBTI test is a popular way to explore personality preferences, including how people gather information, make decisions and relate to the world. Luckora is not an official MBTI assessment, but this page helps users looking for MBTI-style self discovery begin with a free AI personality test.",
      },
      {
        title: "How Luckora approaches personality patterns",
        body: "Luckora focuses on practical personality signals: how you create, analyze, connect and lead. Instead of locking you into a rigid label, the test gives you a personality identity that can help you reflect on strengths, emotional patterns and growth direction.",
      },
      {
        title: "Why take a personality test online?",
        body: "A personality test online can give you quick language for patterns you may already sense but have not clearly named. Your result can become a starting point for career reflection, relationship awareness and personal growth.",
      },
    ],
    faq: [
      {
        question: "Is Luckora an official MBTI test?",
        answer:
          "No. Luckora is not an official MBTI assessment. It is an AI self discovery platform that helps users explore personality patterns and strengths.",
      },
      {
        question: "Can this test help me understand my personality type?",
        answer:
          "Yes. Luckora gives you a personality identity and explains traits, strengths, challenges and growth direction in plain language.",
      },
      {
        question: "Is the MBTI-style test free?",
        answer:
          "The Luckora AI personality test is currently free and does not require signup.",
      },
    ],
  },
  {
    path: "/love-personality-test",
    eyebrow: "Love Personality Test",
    title: "Love Personality Test - Understand Your Relationship Style",
    metadataTitle:
      "Love Personality Test - Understand Your Relationship Style",
    description:
      "Take a free AI personality test to understand emotional patterns, communication style and relationship tendencies.",
    ctaLabel: "Discover My Style",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is a love personality test?",
        body: "A love personality test helps you reflect on how you connect, communicate and respond emotionally in relationships. It can highlight needs, patterns and strengths that influence how you build closeness with others.",
      },
      {
        title: "How personality shapes relationships",
        body: "Your personality can affect how you express care, handle conflict, ask for support and make decisions with another person. Luckora's current test is broader than love only, but it gives emotional and communication signals that can support relationship reflection.",
      },
      {
        title: "What you can discover",
        body: "Your result can help you notice whether you lead with imagination, analysis, connection or momentum. These patterns can influence how you show up in love, friendship and long-term partnership.",
      },
    ],
    faq: [
      {
        question: "Is this a compatibility test?",
        answer:
          "No. This page connects relationship reflection to Luckora's current AI personality test. A dedicated compatibility test may come later.",
      },
      {
        question: "Can a personality test explain my love style?",
        answer:
          "It can offer useful clues about communication, emotional patterns and relationship needs, but it should not replace real conversation or personal judgment.",
      },
      {
        question: "Is the love personality test free?",
        answer:
          "Yes. The current Luckora personality test is free and can be used as a starting point for relationship self discovery.",
      },
    ],
  },
  {
    path: "/career-personality-test",
    eyebrow: "Career Personality Test",
    title: "Career Personality Test - Find Work That Fits You",
    metadataTitle: "Career Personality Test - Find Work That Fits You",
    description:
      "Use Luckora's free AI personality test to explore strengths, work style and career direction in the AI era.",
    ctaLabel: "Find My Direction",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is a career personality test?",
        body: "A career personality test helps you connect who you are with the kind of work that may fit your energy, strengths and decision style. It is not a final career answer, but it can make your next direction easier to think about.",
      },
      {
        title: "Why personality matters for career choices",
        body: "A job can look attractive from the outside but feel draining if it fights your natural rhythm. Understanding personality patterns can help you choose projects, skills and environments that match how you think and grow.",
      },
      {
        title: "How Luckora helps with career direction",
        body: "Luckora's current personality report includes career alignment and growth path suggestions. The result helps you reflect on whether you are strongest in creative direction, analysis, connection or leadership momentum.",
      },
    ],
    faq: [
      {
        question: "Can a career personality test choose my job for me?",
        answer:
          "No. It can support reflection, but career decisions should also consider skills, experience, opportunities and real-world constraints.",
      },
      {
        question: "Does Luckora include career matches?",
        answer:
          "Yes. The current AI personality report includes career alignment ideas based on your result.",
      },
      {
        question: "Is this career personality test online free?",
        answer:
          "Yes. Luckora's current AI personality test is free to complete online.",
      },
    ],
  },
  {
    path: "/attachment-style-test",
    eyebrow: "Attachment Style Test",
    title: "Attachment Style Test - Explore Emotional Patterns",
    metadataTitle: "Attachment Style Test - Explore Emotional Patterns",
    description:
      "Explore emotional patterns, relationship needs and self discovery signals with Luckora's free AI personality test.",
    ctaLabel: "Explore My Patterns",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is an attachment style test?",
        body: "An attachment style test is commonly used to reflect on how people seek closeness, safety and reassurance in relationships. Luckora is not a clinical attachment assessment, but it can help users begin exploring emotional and communication patterns.",
      },
      {
        title: "How personality connects to attachment patterns",
        body: "Personality influences how you interpret signals, ask for support and respond under pressure. A self discovery test can help you notice patterns that affect relationships, even when it is not a formal attachment diagnosis.",
      },
      {
        title: "Use the result as a reflection tool",
        body: "Luckora's report is designed to give language for strengths and growth challenges. Use it as a starting point for self awareness, honest conversation and personal growth.",
      },
    ],
    faq: [
      {
        question: "Is Luckora a clinical attachment style test?",
        answer:
          "No. Luckora is for self discovery and reflection, not clinical diagnosis or therapy.",
      },
      {
        question: "Can this test help with relationship self awareness?",
        answer:
          "Yes. It can help you notice emotional patterns and communication tendencies that may affect relationships.",
      },
      {
        question: "Should I use this instead of professional help?",
        answer:
          "No. If you need mental health or relationship support, consider speaking with a qualified professional.",
      },
    ],
  },
  {
    path: "/introvert-test",
    eyebrow: "Introvert Test",
    title: "Introvert Test - Discover Your Social Energy",
    metadataTitle: "Introvert Test - Discover Your Social Energy",
    description:
      "Take a free AI personality test to explore introvert traits, social energy, strengths and growth patterns.",
    ctaLabel: "Discover My Energy",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "What is an introvert test?",
        body: "An introvert test helps you reflect on social energy, focus, stimulation and how you recharge. Introversion is not about being antisocial. It is often about how your energy responds to people, noise and depth of attention.",
      },
      {
        title: "Introvert traits and personality patterns",
        body: "Some people think deeply before acting, prefer smaller circles or need quiet time to recover. Luckora's AI personality test can help you understand these traits alongside creativity, analysis, connection and leadership signals.",
      },
      {
        title: "Why social energy matters",
        body: "Understanding social energy can help you choose better routines, work environments and communication habits. It can also help you stop treating your natural rhythm as a problem to fix.",
      },
    ],
    faq: [
      {
        question: "Can this test tell me if I am an introvert?",
        answer:
          "Luckora can help you reflect on social energy and personality patterns, but it is not a clinical or official introversion assessment.",
      },
      {
        question: "Is introversion a weakness?",
        answer:
          "No. Introversion can come with strengths such as focus, depth, observation and thoughtful decision making.",
      },
      {
        question: "Is the introvert test free?",
        answer:
          "Yes. Luckora's current AI personality test is free and can help you explore introvert-related patterns.",
      },
    ],
  },
];

export function getSeoLandingPage(path: string) {
  return seoLandingPages.find((page) => page.path === path);
}
