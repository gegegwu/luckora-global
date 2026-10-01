export type IntrovertDimension = "solitude" | "depletion" | "connection";

export type IntrovertQuestion = {
  text: string;
  dimension: IntrovertDimension;
  reverse?: boolean;
};

export const introvertQuestions: IntrovertQuestion[] = [
  {
    text: "After a busy social day, I need quiet time before I feel like myself again.",
    dimension: "depletion",
  },
  {
    text: "I would usually choose a meaningful one-to-one conversation over a large gathering.",
    dimension: "solitude",
  },
  {
    text: "Even with people I like, I notice my energy falling after a while.",
    dimension: "depletion",
  },
  {
    text: "When I have enough energy, meeting the right people feels enjoyable rather than stressful.",
    dimension: "connection",
  },
  {
    text: "I often avoid plans because I am already tired, not because I dislike people.",
    dimension: "depletion",
  },
  {
    text: "I think more clearly after I have had time alone.",
    dimension: "solitude",
  },
  {
    text: "A good conversation can leave me feeling more alive than before.",
    dimension: "connection",
  },
  {
    text: "I prefer having a few deep relationships to knowing many people casually.",
    dimension: "solitude",
  },
  {
    text: "Noise, interruptions or constant messages wear me down quickly.",
    dimension: "depletion",
  },
  {
    text: "I can enjoy being the center of a lively group for a long time.",
    dimension: "solitude",
    reverse: true,
  },
  {
    text: "I still want connection when I am rested and not overwhelmed.",
    dimension: "connection",
  },
  {
    text: "I regularly decline social time even when I feel rested and safe with the people involved.",
    dimension: "connection",
    reverse: true,
  },
];

export const introvertScale = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Not sure" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export type IntrovertResult = {
  name: string;
  summary: string;
  signals: string[];
  nextStep: string;
};

export function scoreIntrovertTest(answers: number[]) {
  const totals: Record<IntrovertDimension, number[]> = {
    solitude: [],
    depletion: [],
    connection: [],
  };

  introvertQuestions.forEach((question, index) => {
    const answer = answers[index] ?? 3;
    totals[question.dimension].push(question.reverse ? 6 - answer : answer);
  });

  const scores = Object.fromEntries(
    Object.entries(totals).map(([dimension, values]) => [
      dimension,
      Math.round(((values.reduce((sum, value) => sum + value, 0) / values.length - 1) / 4) * 100),
    ]),
  ) as Record<IntrovertDimension, number>;

  return { scores, result: interpretIntrovertScores(scores) };
}

function interpretIntrovertScores(
  scores: Record<IntrovertDimension, number>,
): IntrovertResult {
  if (scores.depletion >= 65 && scores.connection >= 50) {
    return {
      name: "Socially Drained, Not Disconnected",
      summary:
        "Your answers suggest that you still value connection, but your current energy or stimulation load makes social time harder to sustain.",
      signals: [
        "You can enjoy the right people when you have enough capacity.",
        "Overstimulation may be shaping your choices more than personality alone.",
        "Recovery time is a need, not proof that you dislike people.",
      ],
      nextStep:
        "Try one lower-stimulation plan this week: a walk, a short coffee or a one-to-one conversation. Notice whether the format changes your energy.",
    };
  }

  if (scores.solitude >= 65 && scores.connection < 65) {
    return {
      name: "Restorative Introvert",
      summary:
        "Solitude appears to be a genuine source of clarity and recovery for you. You may connect best through depth, choice and manageable social rhythms.",
      signals: [
        "Quiet time helps you think and reset.",
        "Depth may matter more to you than social variety.",
        "You are likely to enjoy connection more when you can control its pace.",
      ],
      nextStep:
        "Protect recovery time before and after demanding plans, then choose connection intentionally instead of treating every invitation the same.",
    };
  }

  if (scores.connection >= 65 && scores.depletion < 55) {
    return {
      name: "Socially Energized",
      summary:
        "Connection often gives you energy, especially when the people and setting feel right. You may need less solitude than a strongly introverted person.",
      signals: [
        "Good conversations can increase your energy.",
        "You recover relatively quickly after social activity.",
        "Your social preferences may change more by context than by group size.",
      ],
      nextStep:
        "Keep noticing the difference between nourishing and performative social time. More connection is not always better connection.",
    };
  }

  return {
    name: "Selective Ambivert",
    summary:
      "Your social energy looks flexible. You may enjoy people and solitude in fairly equal measure, with context deciding which one you need.",
    signals: [
      "Your energy depends strongly on the setting and people involved.",
      "You can move between social and reflective modes.",
      "Rigid introvert or extrovert labels may not describe you well.",
    ],
    nextStep:
      "Track which combinations of people, duration and environment leave you clearer. Use that pattern instead of a fixed label to plan your week.",
  };
}
