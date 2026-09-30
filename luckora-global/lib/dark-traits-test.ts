export type DarkTrait = "influence" | "validation" | "distance" | "boldness";

export type DarkTraitQuestion = {
  id: number;
  text: string;
  trait: DarkTrait;
  reverse?: boolean;
};

export const darkTraitQuestions: DarkTraitQuestion[] = [
  { id: 1, text: "I can quickly adjust how I present myself to influence a situation.", trait: "influence" },
  { id: 2, text: "Recognition from other people strongly affects how successful I feel.", trait: "validation" },
  { id: 3, text: "In a conflict, I can separate emotion from the decision that needs to be made.", trait: "distance" },
  { id: 4, text: "I am comfortable taking a risk before every detail is known.", trait: "boldness" },
  { id: 5, text: "I usually say exactly what I mean, even when a more strategic answer would help me.", trait: "influence", reverse: true },
  { id: 6, text: "I become frustrated when my contribution is not noticed.", trait: "validation" },
  { id: 7, text: "Other people's distress can change my plans even when the plan is reasonable.", trait: "distance", reverse: true },
  { id: 8, text: "Consequences rarely stop me from acting when something feels exciting.", trait: "boldness" },
  { id: 9, text: "I notice what people want and use that knowledge during negotiation.", trait: "influence" },
  { id: 10, text: "I can feel secure in my value without being praised or admired.", trait: "validation", reverse: true },
  { id: 11, text: "I can stay calm and practical when a group becomes emotionally intense.", trait: "distance" },
  { id: 12, text: "I prefer a safe choice even when the possible reward is much larger.", trait: "boldness", reverse: true },
];

export const darkTraitProfiles: Record<
  DarkTrait,
  {
    name: string;
    summary: string;
    strength: string;
    risk: string;
    practice: string;
  }
> = {
  influence: {
    name: "Strategic Influence",
    summary: "How readily you read motives, adapt your presentation and shape an outcome.",
    strength: "Negotiation, social awareness and communicating in a way people understand.",
    risk: "Treating trust as a tactic or hiding your real intention for too long.",
    practice: "Before persuading someone, state the outcome you want and the cost it may create for them.",
  },
  validation: {
    name: "Recognition Drive",
    summary: "How strongly status, praise and visibility affect your sense of worth.",
    strength: "Ambition, presentation energy and the desire to produce visible work.",
    risk: "Letting attention determine your confidence or making every setback feel personal.",
    practice: "Keep one private measure of progress that matters even when nobody notices it.",
  },
  distance: {
    name: "Emotional Distance",
    summary: "How easily you separate emotion from decisions when pressure rises.",
    strength: "Composure, crisis thinking and the ability to make difficult calls.",
    risk: "Missing emotional information or appearing colder than you intend.",
    practice: "Name the human impact of a decision before moving to logic and execution.",
  },
  boldness: {
    name: "Bold Impulse",
    summary: "How quickly you move toward risk, novelty and immediate reward.",
    strength: "Courage, speed and willingness to act while other people hesitate.",
    risk: "Underestimating consequences, boredom or the effect of your choices on others.",
    practice: "Use a short pause for high-cost choices: identify the upside, downside and exit plan.",
  },
};

export const darkTraitScale = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Not sure" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
] as const;

export function scoreDarkTraits(answers: number[]) {
  const totals: Record<DarkTrait, number[]> = {
    influence: [],
    validation: [],
    distance: [],
    boldness: [],
  };

  darkTraitQuestions.forEach((question, index) => {
    const answer = answers[index] ?? 3;
    totals[question.trait].push(question.reverse ? 6 - answer : answer);
  });

  return (Object.keys(totals) as DarkTrait[])
    .map((trait) => {
      const values = totals[trait];
      const average = values.reduce((sum, value) => sum + value, 0) / values.length;
      return {
        trait,
        percentage: Math.round(((average - 1) / 4) * 100),
        ...darkTraitProfiles[trait],
      };
    })
    .sort((a, b) => b.percentage - a.percentage);
}
