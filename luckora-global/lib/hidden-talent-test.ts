import { primaryPersonalityByTalent } from "@/lib/personalities";
import type { CareerMatch, GrowthPath, PersonalityFaq, PersonalityScore } from "@/lib/personalities";

export type TalentType = "creator" | "analyst" | "connector" | "leader";

export type TalentOption = {
  code: "A" | "B" | "C" | "D";
  label: string;
  type: TalentType;
};

export type TalentQuestion = {
  id: number;
  text: string;
  options: TalentOption[];
};

export type TalentResult = {
  type: TalentType;
  slug: string;
  name: string;
  title: string;
  emotionalLine: string;
  summary: string;
  scores: Record<TalentType, number>;
  profileScores: PersonalityScore[];
  strengths: string[];
  challenge: string;
  careers: CareerMatch[];
  growthPath: GrowthPath[];
  faq: PersonalityFaq[];
  careerDirection: string;
};

export const resultStorageKey = "luckora_hidden_talent_result_v1";

export const talentLabels: Record<TalentType, string> = {
  creator: "Creativity",
  analyst: "Strategy",
  connector: "Communication",
  leader: "Leadership",
};

export const talentQuestions: TalentQuestion[] = [
  {
    id: 1,
    text: "When you start something new, what attracts you most?",
    options: [
      { code: "A", label: "Imagining original ideas and possibilities", type: "creator" },
      { code: "B", label: "Understanding how the system works", type: "analyst" },
      { code: "C", label: "Finding who should be involved", type: "connector" },
      { code: "D", label: "Setting direction and moving quickly", type: "leader" },
    ],
  },
  {
    id: 2,
    text: "Your friends usually ask you for help with:",
    options: [
      { code: "A", label: "Creative ideas or a fresh angle", type: "creator" },
      { code: "B", label: "Clear thinking and practical analysis", type: "analyst" },
      { code: "C", label: "Conversations, emotions or relationships", type: "connector" },
      { code: "D", label: "Decisions, courage or motivation", type: "leader" },
    ],
  },
  {
    id: 3,
    text: "In a team project, you naturally become the person who:",
    options: [
      { code: "A", label: "Shapes the concept and visual direction", type: "creator" },
      { code: "B", label: "Organizes information and finds the logic", type: "analyst" },
      { code: "C", label: "Keeps people aligned and understood", type: "connector" },
      { code: "D", label: "Pushes the project across the finish line", type: "leader" },
    ],
  },
  {
    id: 4,
    text: "Which environment makes you feel most alive?",
    options: [
      { code: "A", label: "A space full of inspiration and experimentation", type: "creator" },
      { code: "B", label: "A quiet place to solve a complex problem", type: "analyst" },
      { code: "C", label: "A warm group with meaningful exchange", type: "connector" },
      { code: "D", label: "A high-energy mission with real stakes", type: "leader" },
    ],
  },
  {
    id: 5,
    text: "When something feels confusing, your first move is to:",
    options: [
      { code: "A", label: "Look for a new perspective", type: "creator" },
      { code: "B", label: "Break it into smaller facts", type: "analyst" },
      { code: "C", label: "Talk it through with someone", type: "connector" },
      { code: "D", label: "Choose one action and test it", type: "leader" },
    ],
  },
  {
    id: 6,
    text: "What kind of work feels easiest for you to keep improving?",
    options: [
      { code: "A", label: "Designing, writing, filming or building concepts", type: "creator" },
      { code: "B", label: "Research, planning, data or strategy", type: "analyst" },
      { code: "C", label: "Community, communication or user empathy", type: "connector" },
      { code: "D", label: "Launching, leading or organizing action", type: "leader" },
    ],
  },
  {
    id: 7,
    text: "Which compliment feels closest to you?",
    options: [
      { code: "A", label: "You make things feel original", type: "creator" },
      { code: "B", label: "You make things clear", type: "analyst" },
      { code: "C", label: "You make people feel seen", type: "connector" },
      { code: "D", label: "You make things happen", type: "leader" },
    ],
  },
  {
    id: 8,
    text: "If you had one free day to grow yourself, you would:",
    options: [
      { code: "A", label: "Create a piece of work from a new idea", type: "creator" },
      { code: "B", label: "Study a topic deeply and map the logic", type: "analyst" },
      { code: "C", label: "Meet people and exchange honest stories", type: "connector" },
      { code: "D", label: "Build a plan and execute the first step", type: "leader" },
    ],
  },
  {
    id: 9,
    text: "Under pressure, your hidden ability is usually:",
    options: [
      { code: "A", label: "Inventing an unexpected solution", type: "creator" },
      { code: "B", label: "Staying rational and finding the cause", type: "analyst" },
      { code: "C", label: "Reading the room and calming people", type: "connector" },
      { code: "D", label: "Taking responsibility and deciding fast", type: "leader" },
    ],
  },
  {
    id: 10,
    text: "What do you notice before most people do?",
    options: [
      { code: "A", label: "Aesthetic details and creative potential", type: "creator" },
      { code: "B", label: "Patterns, flaws and hidden structure", type: "analyst" },
      { code: "C", label: "Mood shifts and unspoken needs", type: "connector" },
      { code: "D", label: "Opportunities, risks and timing", type: "leader" },
    ],
  },
  {
    id: 11,
    text: "Which future version of you feels most exciting?",
    options: [
      { code: "A", label: "A creator with a recognizable world", type: "creator" },
      { code: "B", label: "A strategist who understands complex systems", type: "analyst" },
      { code: "C", label: "A connector who brings people together", type: "connector" },
      { code: "D", label: "A leader who turns ideas into reality", type: "leader" },
    ],
  },
  {
    id: 12,
    text: "Choose the sentence that sounds most like your inner voice:",
    options: [
      { code: "A", label: "There is another way to imagine this", type: "creator" },
      { code: "B", label: "There is a pattern behind this", type: "analyst" },
      { code: "C", label: "There is a human story inside this", type: "connector" },
      { code: "D", label: "There is a next move waiting here", type: "leader" },
    ],
  },
];

export function calculateTalentResult(answers: TalentType[]): TalentResult {
  const scores: Record<TalentType, number> = {
    creator: 0,
    analyst: 0,
    connector: 0,
    leader: 0,
  };

  answers.forEach((answer) => {
    scores[answer] += 1;
  });

  const winningType = (Object.keys(scores) as TalentType[]).sort(
    (a, b) => scores[b] - scores[a],
  )[0];
  const profile = primaryPersonalityByTalent[winningType];

  return {
    type: winningType,
    slug: profile.slug,
    name: profile.name,
    title: profile.title,
    emotionalLine: profile.emotionalLine,
    summary: profile.overview,
    scores,
    profileScores: profile.scores,
    strengths: profile.strengths,
    challenge: profile.challenge,
    careers: profile.careers,
    growthPath: profile.growthPath,
    faq: profile.faq,
    careerDirection: profile.description,
  };
}
