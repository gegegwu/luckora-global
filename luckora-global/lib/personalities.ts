import type { TalentType } from "@/lib/hidden-talent-test";

export type PersonalityScore = {
  label: string;
  value: number;
};

export type CareerMatch = {
  title: string;
  why: string;
};

export type GrowthPath = {
  term: string;
  timeline: string;
  advice: string;
};

export type PersonalityFaq = {
  question: string;
  answer: string;
};

export type PersonalityProfile = {
  slug: string;
  type?: TalentType;
  name: string;
  title: string;
  description: string;
  emotionalLine: string;
  overview: string;
  scores: PersonalityScore[];
  strengths: string[];
  challenge: string;
  careers: CareerMatch[];
  growthPath: GrowthPath[];
  faq: PersonalityFaq[];
};

const sharedGrowthPath: GrowthPath[] = [
  {
    term: "Short Term",
    timeline: "1-3 months",
    advice: "Pick one natural strength and create a small weekly project around it. Momentum matters more than perfection.",
  },
  {
    term: "Medium Term",
    timeline: "6-12 months",
    advice: "Build a visible portfolio of decisions, ideas or outcomes so your talent becomes easier for others to recognize.",
  },
  {
    term: "Long Term",
    timeline: "12+ months",
    advice: "Turn your strongest pattern into a repeatable system: a method, offer, body of work or leadership style.",
  },
];

function faqFor(name: string, strengths: string[], challenge: string): PersonalityFaq[] {
  return [
    {
      question: `What is ${name} personality type?`,
      answer: `${name} is a Luckora AI personality type that describes how your hidden talent naturally shows up in thinking, work and relationships.`,
    },
    {
      question: `What are the strengths of ${name}?`,
      answer: `Common strengths include ${strengths.slice(0, 3).join(", ")}.`,
    },
    {
      question: `What careers fit ${name}?`,
      answer:
        "The best career fit depends on your skills and experience, but this type usually performs well where its core strengths can be used consistently.",
    },
    {
      question: `What should ${name} improve?`,
      answer: challenge,
    },
  ];
}

export const personalityProfiles: PersonalityProfile[] = [
  {
    slug: "visionary-creator",
    type: "creator" as const,
    name: "The Visionary Creator",
    title: "Your cosmic identity is built around imagination.",
    emotionalLine: "You see possibilities before they become reality, then give them shape, feeling and color.",
    description:
      "The Visionary Creator is imaginative, expressive and future-oriented. You are naturally drawn to possibility, beauty and original expression.",
    overview:
      "Your hidden talent is turning emotion, ideas and fragments into something others can feel. You may notice aesthetic details, story potential and fresh angles before people around you do.",
    scores: [
      { label: "Creativity", value: 94 },
      { label: "Vision", value: 90 },
      { label: "Curiosity", value: 86 },
      { label: "Communication", value: 78 },
      { label: "Leadership", value: 68 },
      { label: "Execution", value: 62 },
    ],
    strengths: ["Original thinking", "Creative problem solving", "Aesthetic intuition", "Storytelling energy", "Future-facing imagination"],
    challenge: "You may generate many ideas but need stronger execution. Choose fewer ideas, finish more of them, and let real feedback sharpen your vision.",
    careers: [
      { title: "Creative Director", why: "You can shape a world, mood and message that other people want to follow." },
      { title: "Product Designer", why: "You can translate human needs into intuitive, emotionally resonant experiences." },
      { title: "Entrepreneur", why: "You are comfortable imagining possibilities before they are obvious to the market." },
    ],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "pattern-analyst",
    type: "analyst" as const,
    name: "The Pattern Analyst",
    title: "Your cosmic identity is built around clarity.",
    emotionalLine: "You can slow down chaos until the hidden structure begins to reveal itself.",
    description:
      "The Pattern Analyst is logical, observant and systems-minded. You naturally look for causes, patterns and better structures.",
    overview:
      "Your hidden talent is noticing what is actually happening beneath the surface. You can turn scattered information into a map that helps people make better decisions.",
    scores: [
      { label: "Strategy", value: 94 },
      { label: "Vision", value: 82 },
      { label: "Curiosity", value: 88 },
      { label: "Execution", value: 76 },
      { label: "Communication", value: 66 },
      { label: "Creativity", value: 62 },
    ],
    strengths: ["Pattern recognition", "Structured thinking", "Strategic judgment", "Problem diagnosis", "Calm decision support"],
    challenge: "You may overthink before moving. Practice making small decisions faster so your clarity becomes action instead of endless analysis.",
    careers: [
      { title: "Strategy Analyst", why: "You can find the signal inside complicated information." },
      { title: "Product Manager", why: "You can connect user needs, systems and priorities into a practical roadmap." },
      { title: "Data Researcher", why: "You are comfortable working with patterns, evidence and uncertainty." },
    ],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "empathic-connector",
    type: "connector" as const,
    name: "The Empathic Connector",
    title: "Your cosmic identity is built around human resonance.",
    emotionalLine: "You notice the human story in the room before anyone says it out loud.",
    description:
      "The Empathic Connector is relational, intuitive and emotionally intelligent. You understand people through signals, tone and context.",
    overview:
      "Your hidden talent is creating trust and translating emotion into understanding. You can help people feel seen, aligned and safe enough to open up.",
    scores: [
      { label: "Communication", value: 94 },
      { label: "Curiosity", value: 84 },
      { label: "Leadership", value: 76 },
      { label: "Creativity", value: 72 },
      { label: "Vision", value: 70 },
      { label: "Execution", value: 64 },
    ],
    strengths: ["Emotional intelligence", "Relationship insight", "Community building", "Conflict sensing", "Trust creation"],
    challenge: "You may absorb too much from other people. Stronger boundaries will help your empathy become wisdom rather than emotional exhaustion.",
    careers: [
      { title: "User Researcher", why: "You can hear what people mean beyond what they say." },
      { title: "Community Lead", why: "You can create belonging and sustain trust over time." },
      { title: "Coach or Educator", why: "You can guide people through change with warmth and clarity." },
    ],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "momentum-leader",
    type: "leader" as const,
    name: "The Momentum Leader",
    title: "Your cosmic identity is built around motion.",
    emotionalLine: "You turn hesitation into movement and help ideas cross the distance into reality.",
    description:
      "The Momentum Leader is decisive, energetic and action-oriented. You naturally look for the next move.",
    overview:
      "Your hidden talent is gathering energy around a direction. You can make projects feel possible by creating urgency, structure and forward motion.",
    scores: [
      { label: "Leadership", value: 94 },
      { label: "Execution", value: 90 },
      { label: "Vision", value: 78 },
      { label: "Communication", value: 74 },
      { label: "Strategy", value: 70 },
      { label: "Creativity", value: 62 },
    ],
    strengths: ["Execution power", "Initiative", "Decision energy", "Team momentum", "Opportunity sensing"],
    challenge: "You may move faster than others can process. Slow down at key moments so people can align with your direction instead of only reacting to it.",
    careers: [
      { title: "Founder", why: "You can create motion before all the answers are available." },
      { title: "Growth Lead", why: "You can turn opportunities into experiments and measurable progress." },
      { title: "Operations Leader", why: "You can organize people and resources around clear outcomes." },
    ],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "cosmic-explorer",
    name: "The Cosmic Explorer",
    title: "Your identity is built around curiosity.",
    emotionalLine: "You move toward the unknown because discovery gives you energy.",
    description: "The Cosmic Explorer is curious, experimental and open to new paths.",
    overview: "You learn by trying, comparing and collecting experiences that gradually become insight.",
    scores: [
      { label: "Curiosity", value: 94 },
      { label: "Creativity", value: 82 },
      { label: "Vision", value: 78 },
      { label: "Communication", value: 70 },
    ],
    strengths: ["Curiosity", "Adaptability", "Fast learning", "Open-mindedness"],
    challenge: "You may start many paths at once. Focus helps your discoveries become progress.",
    careers: [{ title: "Trend Researcher", why: "You enjoy exploring what is emerging before it becomes mainstream." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "quiet-strategist",
    name: "The Quiet Strategist",
    title: "Your identity is built around silent precision.",
    emotionalLine: "You do not need noise to make strong moves.",
    description: "The Quiet Strategist is thoughtful, independent and precise.",
    overview: "You prefer to understand deeply before acting, and your calm can become a strategic advantage.",
    scores: [{ label: "Strategy", value: 92 }, { label: "Execution", value: 78 }, { label: "Vision", value: 74 }, { label: "Communication", value: 58 }],
    strengths: ["Deep focus", "Long-term thinking", "Precision", "Self-direction"],
    challenge: "You may stay private for too long. Share your thinking earlier so others can help amplify it.",
    careers: [{ title: "Independent Consultant", why: "You can think clearly without needing constant external validation." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "emotional-alchemist",
    name: "The Emotional Alchemist",
    title: "Your identity is built around transforming feeling into meaning.",
    emotionalLine: "You can turn intensity into language, art or healing insight.",
    description: "The Emotional Alchemist is sensitive, expressive and meaning-oriented.",
    overview: "You understand emotional layers and can help people process what feels difficult to name.",
    scores: [{ label: "Communication", value: 88 }, { label: "Creativity", value: 86 }, { label: "Curiosity", value: 80 }, { label: "Execution", value: 58 }],
    strengths: ["Emotional depth", "Meaning-making", "Creative expression", "Empathy"],
    challenge: "You may be pulled by emotional weather. Build grounding rituals before making big decisions.",
    careers: [{ title: "Writer", why: "You can transform inner experience into language people recognize." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "future-builder",
    name: "The Future Builder",
    title: "Your identity is built around making tomorrow practical.",
    emotionalLine: "You are not only interested in the future. You want to build it.",
    description: "The Future Builder combines vision with practical implementation.",
    overview: "You are strongest when an ambitious idea needs a path, a prototype and a plan.",
    scores: [{ label: "Vision", value: 90 }, { label: "Execution", value: 86 }, { label: "Strategy", value: 82 }, { label: "Creativity", value: 76 }],
    strengths: ["Practical vision", "Systems building", "Innovation", "Persistence"],
    challenge: "You may underestimate the emotional side of change. Bring people with you, not just the plan.",
    careers: [{ title: "AI Product Builder", why: "You can connect future technology with real user needs." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "social-spark",
    name: "The Social Spark",
    title: "Your identity is built around activating people.",
    emotionalLine: "You bring energy into spaces that were waiting for a signal.",
    description: "The Social Spark is expressive, energizing and socially intuitive.",
    overview: "You can make people pay attention, participate and feel part of something.",
    scores: [{ label: "Communication", value: 92 }, { label: "Leadership", value: 82 }, { label: "Creativity", value: 78 }, { label: "Strategy", value: 62 }],
    strengths: ["Social energy", "Influence", "Storytelling", "Warm presence"],
    challenge: "You may chase response too quickly. Depth will make your influence last longer.",
    careers: [{ title: "Content Creator", why: "You know how to turn attention into emotional connection." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "systems-orchestrator",
    name: "The Systems Orchestrator",
    title: "Your identity is built around organizing complexity.",
    emotionalLine: "You can make moving parts behave like one coherent system.",
    description: "The Systems Orchestrator is operational, structured and dependable.",
    overview: "You shine when people, tools and processes need to work together without friction.",
    scores: [{ label: "Execution", value: 90 }, { label: "Strategy", value: 88 }, { label: "Leadership", value: 78 }, { label: "Communication", value: 68 }],
    strengths: ["Process design", "Operational clarity", "Reliability", "Coordination"],
    challenge: "You may become frustrated with ambiguity. Leave room for experimentation before locking the system.",
    careers: [{ title: "Operations Manager", why: "You can turn complexity into repeatable execution." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "intuitive-guide",
    name: "The Intuitive Guide",
    title: "Your identity is built around helping others find direction.",
    emotionalLine: "You can sense when someone is close to a truth they have not named yet.",
    description: "The Intuitive Guide is perceptive, supportive and reflective.",
    overview: "You help people understand themselves through careful listening and gentle insight.",
    scores: [{ label: "Communication", value: 90 }, { label: "Curiosity", value: 84 }, { label: "Vision", value: 76 }, { label: "Execution", value: 60 }],
    strengths: ["Listening", "Guidance", "Emotional pattern sensing", "Reflection"],
    challenge: "You may guide others better than yourself. Apply the same compassion and structure to your own choices.",
    careers: [{ title: "Coach", why: "You can help people move from confusion to self-understanding." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "bold-initiator",
    name: "The Bold Initiator",
    title: "Your identity is built around first movement.",
    emotionalLine: "You are often the spark that makes a room stop waiting.",
    description: "The Bold Initiator is courageous, direct and action-first.",
    overview: "You are strongest when something needs to begin, launch or break through hesitation.",
    scores: [{ label: "Leadership", value: 92 }, { label: "Execution", value: 88 }, { label: "Communication", value: 72 }, { label: "Strategy", value: 66 }],
    strengths: ["Courage", "Initiative", "Speed", "Risk tolerance"],
    challenge: "You may skip reflection. Build short feedback loops so action becomes smarter over time.",
    careers: [{ title: "Startup Operator", why: "You can move quickly in uncertain environments." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "deep-thinker",
    name: "The Deep Thinker",
    title: "Your identity is built around depth.",
    emotionalLine: "You are drawn to the layer beneath the obvious answer.",
    description: "The Deep Thinker is reflective, analytical and meaning-seeking.",
    overview: "You can sit with complex questions long enough to find insight others may rush past.",
    scores: [{ label: "Strategy", value: 90 }, { label: "Curiosity", value: 88 }, { label: "Vision", value: 76 }, { label: "Execution", value: 56 }],
    strengths: ["Reflection", "Conceptual thinking", "Research", "Insight"],
    challenge: "You may delay action while searching for a perfect answer. Test your ideas earlier.",
    careers: [{ title: "Researcher", why: "You have patience for complexity and nuance." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "aesthetic-dreamer",
    name: "The Aesthetic Dreamer",
    title: "Your identity is built around beauty and atmosphere.",
    emotionalLine: "You understand that how something feels can change what it means.",
    description: "The Aesthetic Dreamer is visual, sensitive and atmosphere-aware.",
    overview: "You notice form, texture, mood and symbolic detail before most people do.",
    scores: [{ label: "Creativity", value: 92 }, { label: "Vision", value: 82 }, { label: "Communication", value: 70 }, { label: "Execution", value: 58 }],
    strengths: ["Aesthetic judgment", "Mood creation", "Visual storytelling", "Taste"],
    challenge: "You may wait for the feeling to be perfect. Practice shipping beautiful work before it feels complete.",
    careers: [{ title: "Brand Designer", why: "You can translate feeling into recognizable visual identity." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "resilient-maker",
    name: "The Resilient Maker",
    title: "Your identity is built around steady creation.",
    emotionalLine: "You become clearer by making, revising and trying again.",
    description: "The Resilient Maker is practical, creative and persistence-driven.",
    overview: "You may not wait for perfect inspiration. You learn through repetition and tangible progress.",
    scores: [{ label: "Execution", value: 88 }, { label: "Creativity", value: 82 }, { label: "Strategy", value: 70 }, { label: "Communication", value: 62 }],
    strengths: ["Persistence", "Hands-on learning", "Craft", "Iteration"],
    challenge: "You may not recognize your own progress. Track visible improvements so confidence has evidence.",
    careers: [{ title: "Creative Technologist", why: "You can turn ideas into working artifacts through iteration." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "harmonic-diplomat",
    name: "The Harmonic Diplomat",
    title: "Your identity is built around balance.",
    emotionalLine: "You can hear different sides without losing the center.",
    description: "The Harmonic Diplomat is balanced, relational and peace-oriented.",
    overview: "You are strongest when tension needs translation, fairness and emotional intelligence.",
    scores: [{ label: "Communication", value: 90 }, { label: "Strategy", value: 74 }, { label: "Leadership", value: 70 }, { label: "Creativity", value: 64 }],
    strengths: ["Diplomacy", "Fairness", "Mediation", "Trust building"],
    challenge: "You may avoid conflict too long. Honest tension can be a doorway to stronger alignment.",
    careers: [{ title: "Partnership Manager", why: "You can maintain trust between different interests." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
  {
    slug: "magnetic-communicator",
    name: "The Magnetic Communicator",
    title: "Your identity is built around expression.",
    emotionalLine: "You can make ideas easier to feel, remember and share.",
    description: "The Magnetic Communicator is expressive, persuasive and emotionally clear.",
    overview: "You can translate thoughts into language that moves people toward attention or action.",
    scores: [{ label: "Communication", value: 94 }, { label: "Creativity", value: 82 }, { label: "Leadership", value: 76 }, { label: "Strategy", value: 64 }],
    strengths: ["Expression", "Persuasion", "Narrative clarity", "Audience awareness"],
    challenge: "You may rely on charisma before structure. Add clear frameworks so your message scales.",
    careers: [{ title: "Brand Strategist", why: "You can connect message, emotion and audience response." }],
    growthPath: sharedGrowthPath,
    faq: [],
  },
].map((profile) => ({
  ...profile,
  faq: faqFor(profile.name, profile.strengths, profile.challenge),
}));

export const primaryPersonalityByTalent = Object.fromEntries(
  personalityProfiles
    .filter((profile): profile is PersonalityProfile & { type: TalentType } =>
      Boolean(profile.type),
    )
    .map((profile) => [profile.type, profile]),
) as Record<TalentType, PersonalityProfile>;

export function getPersonalityBySlug(slug: string) {
  return personalityProfiles.find((profile) => profile.slug === slug);
}
