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
];

export function getSeoLandingPage(path: string) {
  return seoLandingPages.find((page) => page.path === path);
}
