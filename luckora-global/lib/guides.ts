export type GuideSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  ctaLabel: string;
  ctaPath: string;
  sections: GuideSection[];
};

export const guideArticles: GuideArticle[] = [
  {
    slug: "why-do-i-overthink-everything",
    title: "Why Do I Overthink Everything?",
    description:
      "Understand why overthinking happens, how it connects to sensitivity and uncertainty, and how to turn reflection into clearer next steps.",
    eyebrow: "Emotional Pattern Guide",
    intro:
      "If you replay conversations, second-guess your decisions or stay trapped in mental loops, the goal is not to judge yourself faster. The goal is to understand what your mind is trying to protect and why that protection pattern no longer feels helpful.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What overthinking usually looks like",
        body:
          "Overthinking is not just thinking a lot. It often means replaying conversations, delaying decisions because you want certainty, or analyzing your own emotions without feeling more settled. It uses energy without always creating resolution.",
        bullets: [
          "Replaying conversations after they end",
          "Imagining multiple outcomes before taking action",
          "Worrying that you misunderstood someone",
          "Searching for the perfect answer before moving",
        ],
      },
      {
        title: "Why some people overthink more than others",
        body:
          "Overthinking often grows out of real strengths: sensitivity, caution, emotional awareness and a desire to avoid mistakes. The problem starts when reflection has no clear end point and turns into repeated rumination instead of useful processing.",
      },
      {
        title: "Why relationships trigger overthinking",
        body:
          "Relationships create uncertainty. You cannot fully control how someone feels, what they meant or whether they will stay consistent. For reflective people, that uncertainty can activate loops around tone, rejection, meaning and emotional safety.",
      },
      {
        title: "The hidden strength inside overthinking",
        body:
          "People who overthink are often deeply aware, careful and able to notice nuance. The same mind that gets stuck can also recognize patterns, understand people and make thoughtful decisions. The better goal is not to erase that mind, but to stop your strengths from turning against you.",
      },
      {
        title: "How to reduce the loop",
        body:
          "Progress usually comes from structure, not self-criticism. Name the trigger, move the thought outside your head through writing or voice notes, set a reflection boundary and ask whether the thought is giving you anything new. That turns rumination into processing and processing into action.",
        bullets: [
          "Name the trigger clearly",
          "Use voice-to-text or journaling",
          "Set a time or question boundary",
          "Separate useful thought from repetitive thought",
        ],
      },
    ],
  },
  {
    slug: "how-to-understand-your-hidden-strengths",
    title: "How to Understand Your Hidden Strengths",
    description:
      "Learn how to identify strengths that already shape your thinking, relationships and growth, even if you do not know how to name them yet.",
    eyebrow: "Strengths Guide",
    intro:
      "Many people are not blocked because they have no strengths. They are blocked because they cannot clearly see what they already do well, how those strengths work under pressure or how to use them to create momentum.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why hidden strengths are hard to notice",
        body:
          "Your most natural strengths often feel ordinary to you. Because they happen without much effort, you may assume everyone thinks, feels or solves problems the same way. That makes real strengths easy to overlook.",
      },
      {
        title: "What a real strength looks like",
        body:
          "A real strength is not just something you enjoy. It is a pattern that shows up repeatedly in how you think, connect, decide or recover. It creates energy when used well and often appears across different parts of life.",
        bullets: [
          "It appears naturally under pressure",
          "Other people often notice it before you do",
          "It creates clarity, not just activity",
          "It can be used across work and relationships",
        ],
      },
      {
        title: "Why strengths can still create friction",
        body:
          "A strength without guidance can become overuse. Sensitivity becomes over-processing. Responsibility becomes over-carrying. Analysis becomes paralysis. That is why useful self-discovery must explain both what makes you strong and what makes you stuck.",
      },
      {
        title: "How to identify your strength pattern",
        body:
          "Look for repeated themes: what kinds of problems people bring to you, what drains you less than it drains others and what feels meaningful even when it is difficult. Hidden strengths usually reveal themselves through repeated usefulness, not just identity labels.",
      },
      {
        title: "How to use strengths to create movement",
        body:
          "Instead of forcing yourself to become a different kind of person, use your strongest patterns to support action. If you are relational, create accountability through people. If you are reflective, create action through structured journaling and clear next steps. If you are intuitive, use pattern recognition to make faster decisions.",
      },
    ],
  },
  {
    slug: "why-do-certain-people-drain-me",
    title: "Why Do Certain People Drain Me?",
    description:
      "Learn why some relationships feel grounding while others leave you anxious, foggy or depleted, and how to understand your emotional fit.",
    eyebrow: "Relationship Pattern Guide",
    intro:
      "Some people leave you calmer and clearer. Others leave you mentally crowded or emotionally flat. That difference is rarely random. It usually points to a mismatch in energy, boundaries, communication or emotional safety.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What emotional draining actually feels like",
        body:
          "Draining relationships are not always dramatic. Sometimes the clearest signal is the aftereffect: you feel heavier, more anxious, less certain of your needs and slower to recover after basic interaction.",
        bullets: [
          "Feeling heavy after a conversation",
          "Replaying interactions long after they happen",
          "Becoming more anxious around certain people",
          "Needing unusual recovery time after contact",
        ],
      },
      {
        title: "Why some people affect you more deeply",
        body:
          "If you are highly aware, empathic or sensitive to inconsistency, you will notice more than other people do. That does not mean you are too sensitive. It means your nervous system catches more detail and reacts to confusion more quickly.",
      },
      {
        title: "Common reasons people become draining",
        body:
          "People often drain you when they are emotionally inconsistent, rely on your support without reciprocity, blur your boundaries or activate old patterns like seeking approval and over-explaining yourself.",
      },
      {
        title: "Sensitivity is not the problem",
        body:
          "Sensitivity is often what helps you read people accurately, sense unsafe dynamics early and build real trust with the right people. The issue is not sensitivity itself. The issue is sensitivity without enough protection, clarity or distance.",
      },
      {
        title: "How to stop getting drained by the wrong people",
        body:
          "Watch the aftereffect, not just the conversation. Separate compassion from access, stop normalizing repeated depletion and intentionally invest in people who are clear, respectful and emotionally steady. Sometimes healing comes from less exposure, not more explanation.",
        bullets: [
          "Notice how you feel after the interaction",
          "Stop calling repeated depletion normal",
          "Separate compassion from access",
          "Create more contact with nourishing people",
        ],
      },
    ],
  },
  {
    slug: "how-to-stop-ruminating-after-a-conversation",
    title: "How to Stop Ruminating After a Conversation",
    description:
      "Understand why conversations replay in your mind and how to move from emotional looping into clearer processing and recovery.",
    eyebrow: "Recovery Guide",
    intro:
      "If one short conversation can stay in your head for hours, the issue is usually not that you care too much. The issue is that your mind has not found closure, and it keeps reopening the interaction in search of safety or certainty.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why conversations replay so easily",
        body:
          "Conversations are full of uncertainty: tone, subtext, meaning and emotional risk. Reflective people often keep replaying them because their minds are trying to decode what happened and whether the relationship still feels safe.",
      },
      {
        title: "What keeps rumination alive",
        body:
          "Rumination tends to continue when you are chasing certainty, self-blame or a perfect interpretation. The more unresolved the interaction feels, the more tempting it is to reopen it mentally.",
        bullets: [
          "Unclear tone or mixed signals",
          "Fear that you said the wrong thing",
          "Sensitivity to rejection or inconsistency",
          "No clear end point for emotional processing",
        ],
      },
      {
        title: "How to interrupt the loop",
        body:
          "Move the conversation out of your head and into language. Write what happened, what you felt and what you actually know. That separates facts from imagined meaning and gives the mind a place to stop.",
      },
      {
        title: "What real closure looks like",
        body:
          "Closure is not perfect certainty. It is enough clarity to stop feeding the loop. Sometimes that means deciding there is no more useful information available today. Sometimes it means setting a boundary or following up directly instead of silently replaying.",
      },
      {
        title: "How personality affects recovery",
        body:
          "Some personalities recover through movement. Others recover through reflection. The point is not to stop being reflective. It is to understand your style well enough to guide it instead of letting it run on its own.",
      },
    ],
  },
  {
    slug: "high-sensitivity-and-emotional-rumination",
    title: "High Sensitivity and Emotional Rumination",
    description:
      "Explore how high sensitivity and emotional rumination reinforce each other, and how to keep depth without getting trapped in emotional loops.",
    eyebrow: "Sensitivity Guide",
    intro:
      "High sensitivity can create empathy, insight and depth. It can also become exhausting when emotional experiences stay with you for too long. The key is not becoming less deep. It is building a better path for how depth gets processed.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What high sensitivity means",
        body:
          "High sensitivity is not simply being too emotional. It often includes noticing subtle shifts in tone, processing experiences deeply, feeling overstimulated by conflict and needing more recovery after intense moments.",
      },
      {
        title: "What emotional rumination means",
        body:
          "Emotional rumination is the habit of revisiting emotional moments over and over. It can sound reflective, but it often keeps you close to the original emotional charge without giving you real closure.",
      },
      {
        title: "Why sensitivity and rumination often come together",
        body:
          "The more you notice, the more there is to process. The more there is to process, the easier it becomes to replay. That cycle can quietly create emotional fatigue even on ordinary days.",
      },
      {
        title: "The hidden strengths inside this pattern",
        body:
          "Highly sensitive reflective people often have strong empathy, emotional intelligence, pattern recognition and self-awareness. The challenge appears when those strengths have no structure and begin to turn inward as self-consumption.",
      },
      {
        title: "How to work with sensitivity instead of against it",
        body:
          "Accept that you process deeply, but give that processing a better path. Output-based reflection, clear boundaries, identifying recurring drains and turning reflection into one concrete action all help keep depth while reducing chaos.",
        bullets: [
          "Use voice notes, journaling or reflective writing",
          "Identify recurring emotional drains",
          "Reduce exposure when needed",
          "End reflection with one action or boundary",
        ],
      },
    ],
  },
  {
    slug: "signs-your-sensitivity-is-a-strength",
    title: "Signs Your Sensitivity Is a Strength",
    description:
      "See how sensitivity can create depth, empathy and insight, and learn the difference between healthy sensitivity and unprotected emotional overload.",
    eyebrow: "Strength Pattern Guide",
    intro:
      "A lot of sensitive people only see the cost of their sensitivity because they meet it mostly through exhaustion. But sensitivity is often one of the reasons they read people well, build trust deeply and notice patterns others miss.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Why sensitivity gets misunderstood",
        body:
          "Sensitivity is often treated as fragility, but that misses the deeper pattern. Many sensitive people are not fragile at all. They are perceptive. They notice more emotional and relational data, which can be both useful and tiring.",
      },
      {
        title: "Common signs sensitivity is a strength",
        body:
          "Healthy sensitivity often shows up as emotional accuracy, strong listening, fast pattern recognition and a natural ability to notice when something feels off before anyone says it directly.",
        bullets: [
          "You notice tone changes quickly",
          "People feel understood around you",
          "You spot problems early in relationships",
          "You can turn feeling into insight",
        ],
      },
      {
        title: "When strength turns into overload",
        body:
          "Sensitivity becomes draining when it has no boundaries. You absorb too much, stay too long in confusing environments or keep processing experiences without release. The solution is not to become less sensitive. It is to protect and direct what you already notice.",
      },
      {
        title: "How to make sensitivity more usable",
        body:
          "Use structure, recovery and selective closeness. Sensitive people do better when they know which environments nourish them, which people confuse them and how to turn reflection into language before it becomes silent pressure.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}
