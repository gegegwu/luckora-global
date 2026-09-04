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
  {
    slug: "why-am-i-so-sensitive",
    title: "Why Am I So Sensitive?",
    description:
      "Understand why you may feel things deeply, notice subtle emotional shifts, and need more recovery after intense people or situations.",
    eyebrow: "Sensitivity Guide",
    intro:
      "Sensitivity often feels confusing when you only notice its cost. You may react strongly, replay small moments or feel affected by moods other people seem to miss. But sensitivity is not automatically weakness. It is a processing style that needs clearer structure and better protection.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "What sensitivity can look like",
        body:
          "Sensitivity can show up as emotional depth, quick awareness of tone, strong reactions to conflict, rich inner processing or needing quiet time after social intensity. It may also mean your body responds before your mind has words for what changed.",
        bullets: [
          "You notice tone changes quickly",
          "Conflict stays with you longer than expected",
          "You need recovery after emotionally intense situations",
          "You pick up on details others miss",
        ],
      },
      {
        title: "Why you may feel more than other people",
        body:
          "Some people process emotional and environmental information more deeply. That can make ordinary situations feel crowded with meaning. If you also learned to monitor people for safety, approval or consistency, sensitivity can become even more active.",
      },
      {
        title: "When sensitivity becomes exhausting",
        body:
          "Sensitivity becomes draining when every signal feels urgent. You may over-explain, over-adapt or keep replaying interactions because your mind is trying to create certainty. The problem is not the sensitivity itself, but the lack of boundaries around what you absorb.",
      },
      {
        title: "How to work with sensitivity",
        body:
          "Start by naming what you noticed, separating facts from interpretation and giving yourself recovery before making decisions. Sensitive people often make better choices when they stop treating every emotional signal as an emergency.",
        bullets: [
          "Name the signal without judging it",
          "Check what is fact and what is interpretation",
          "Reduce exposure to repeated emotional confusion",
          "Use sensitivity as information, not command",
        ],
      },
    ],
  },
  {
    slug: "how-to-find-your-personality-type",
    title: "How to Find Your Personality Type",
    description:
      "Learn how to use personality tests, repeated behavior patterns, strengths, stress responses and relationship habits to understand your type.",
    eyebrow: "Personality Type Guide",
    intro:
      "Finding your personality type is more useful when it explains real patterns, not when it gives you a label to memorize. The strongest type insight connects how you think, what gives you energy, what drains you and how you act under pressure.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Do not start with the label",
        body:
          "A personality label can be helpful, but it should come after pattern recognition. If you chase the perfect label first, you may ignore the real evidence in your habits, choices and stress responses.",
      },
      {
        title: "Look for repeated patterns",
        body:
          "Your personality type is easier to understand when you look at what repeats across different contexts. Notice how you solve problems, how you recover, what kind of work gives you energy and what emotional patterns keep returning.",
        bullets: [
          "How you make decisions",
          "What kind of feedback affects you most",
          "How you behave under pressure",
          "What people repeatedly rely on you for",
        ],
      },
      {
        title: "Use tests as mirrors, not verdicts",
        body:
          "A useful personality test gives language to patterns you can recognize. It should help you reflect more clearly, not make you feel boxed in. The best result is one that explains both strengths and friction points.",
      },
      {
        title: "Connect personality to action",
        body:
          "The point of finding your type is not only self-description. It is better decision-making. Once you understand your pattern, you can choose work, relationships and recovery habits that fit your actual energy.",
      },
    ],
  },
  {
    slug: "how-to-know-what-you-are-good-at",
    title: "How to Know What You Are Good At",
    description:
      "Identify natural strengths by looking at repeated usefulness, energy patterns, feedback, problem-solving style and what feels obvious to you.",
    eyebrow: "Strength Discovery Guide",
    intro:
      "Many people do not know what they are good at because their strongest abilities feel too normal from the inside. The goal is to notice repeated evidence instead of waiting for one dramatic talent signal.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/test",
    sections: [
      {
        title: "Strengths often feel ordinary",
        body:
          "The things you do naturally may not feel impressive to you. You may explain clearly, notice patterns quickly, calm people down or organize chaos without realizing those are useful strengths.",
      },
      {
        title: "Track repeated usefulness",
        body:
          "A strength usually appears more than once. Look at what people ask you for, what problems you understand faster than others and what kind of contribution makes situations better.",
        bullets: [
          "What do people ask you to help with?",
          "What problems feel easier for you to read?",
          "What gives you energy after effort?",
          "What do others thank you for repeatedly?",
        ],
      },
      {
        title: "Separate skill from strength",
        body:
          "A skill is something you can learn. A strength is a pattern that helps you learn, adapt or contribute. You can build many skills, but your strongest growth usually comes from skills that fit your natural pattern.",
      },
      {
        title: "Turn strengths into direction",
        body:
          "Once you identify a strength, ask where it can create value. Communication can become teaching, content, leadership or support. Pattern recognition can become research, strategy, product thinking or analysis.",
      },
    ],
  },
  {
    slug: "why-do-i-feel-lost-in-life",
    title: "Why Do I Feel Lost in Life?",
    description:
      "Explore why you may feel directionless, disconnected from your strengths, or unsure what next step fits your personality and energy.",
    eyebrow: "Life Direction Guide",
    intro:
      "Feeling lost does not always mean you have no path. Sometimes it means the old path no longer fits, your strengths are underused or your next step needs more clarity before it can feel real.",
    ctaLabel: "Take the Personality Test",
    ctaPath: "/tests/personality-test",
    sections: [
      {
        title: "Feeling lost is often a signal",
        body:
          "The feeling can appear when your current routines do not match your energy, values or growth stage. It may also happen when you have too many possible directions and no clear way to choose between them.",
      },
      {
        title: "Why clarity gets blocked",
        body:
          "Clarity gets harder when you compare yourself constantly, ignore your own strengths or only choose paths that look impressive from the outside. A direction has to fit your actual pattern, not just your ideal image.",
        bullets: [
          "Too many options without a filter",
          "Comparing your path to other people",
          "Ignoring what gives you energy",
          "Choosing based on pressure instead of fit",
        ],
      },
      {
        title: "Start with your repeated patterns",
        body:
          "Instead of asking what your whole life should become, look at what repeats. What kinds of problems interest you? What kind of people do you understand? What strengths keep appearing even when you are uncertain?",
      },
      {
        title: "Choose the next useful step",
        body:
          "You do not need total life certainty to move. Choose one step that tests a direction, uses a real strength or gives you clearer information. Momentum often creates more clarity than thinking alone.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}
