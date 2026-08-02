import type { TestFaq } from "@/lib/tests";

export type LoveLanguageType =
  | "words"
  | "quality_time"
  | "acts_service"
  | "gifts"
  | "physical_touch";

export type LoveLanguageOption = {
  code: "A" | "B" | "C" | "D" | "E";
  label: string;
  type: LoveLanguageType;
};

export type LoveLanguageQuestion = {
  id: number;
  text: string;
  options: LoveLanguageOption[];
};

export type LoveLanguageProfile = {
  type: LoveLanguageType;
  slug: string;
  name: string;
  title: string;
  meaning: string;
  giveLove: string;
  receiveLove: string;
  strengths: string[];
  challenge: string;
  tips: string[];
  faq: TestFaq[];
};

export type LoveLanguageResult = LoveLanguageProfile & {
  scores: Record<LoveLanguageType, number>;
};

export const loveLanguageStorageKey = "luckora_love_language_result_v1";

export const loveLanguageLabels: Record<LoveLanguageType, string> = {
  words: "Words of Affirmation",
  quality_time: "Quality Time",
  acts_service: "Acts of Service",
  gifts: "Receiving Gifts",
  physical_touch: "Physical Touch",
};

export const loveLanguageQuestions: LoveLanguageQuestion[] = [
  {
    id: 1,
    text: "When someone loves you, what makes you feel most appreciated?",
    options: [
      { code: "A", label: "Hearing encouraging words", type: "words" },
      { code: "B", label: "Spending meaningful time together", type: "quality_time" },
      { code: "C", label: "Someone helping you with daily tasks", type: "acts_service" },
      { code: "D", label: "Receiving a thoughtful surprise", type: "gifts" },
      { code: "E", label: "Physical affection and closeness", type: "physical_touch" },
    ],
  },
  {
    id: 2,
    text: "Which gesture would stay in your memory the longest?",
    options: [
      { code: "A", label: "A sincere message about what they value in you", type: "words" },
      { code: "B", label: "A quiet evening with their full attention", type: "quality_time" },
      { code: "C", label: "They handle something stressful for you", type: "acts_service" },
      { code: "D", label: "A small gift that shows they noticed you", type: "gifts" },
      { code: "E", label: "A warm hug when you need reassurance", type: "physical_touch" },
    ],
  },
  {
    id: 3,
    text: "When you care about someone, you naturally tend to:",
    options: [
      { code: "A", label: "Tell them what you admire about them", type: "words" },
      { code: "B", label: "Make time to be fully present with them", type: "quality_time" },
      { code: "C", label: "Help solve problems or make life easier", type: "acts_service" },
      { code: "D", label: "Give something meaningful or symbolic", type: "gifts" },
      { code: "E", label: "Show warmth through touch and closeness", type: "physical_touch" },
    ],
  },
  {
    id: 4,
    text: "After a hard day, what would comfort you most?",
    options: [
      { code: "A", label: "Someone saying they believe in you", type: "words" },
      { code: "B", label: "Someone sitting with you without distractions", type: "quality_time" },
      { code: "C", label: "Someone taking care of a practical burden", type: "acts_service" },
      { code: "D", label: "A thoughtful item that brightens your mood", type: "gifts" },
      { code: "E", label: "Being held or physically reassured", type: "physical_touch" },
    ],
  },
  {
    id: 5,
    text: "What makes a relationship feel emotionally safe to you?",
    options: [
      { code: "A", label: "Clear reassurance and honest appreciation", type: "words" },
      { code: "B", label: "Regular moments of undivided attention", type: "quality_time" },
      { code: "C", label: "Dependable actions that match promises", type: "acts_service" },
      { code: "D", label: "Little reminders that they think of you", type: "gifts" },
      { code: "E", label: "Comfortable physical closeness", type: "physical_touch" },
    ],
  },
  {
    id: 6,
    text: "Which kind of apology feels most meaningful?",
    options: [
      { code: "A", label: "They clearly say what they understand and regret", type: "words" },
      { code: "B", label: "They make time to talk and truly listen", type: "quality_time" },
      { code: "C", label: "They change behavior and repair the situation", type: "acts_service" },
      { code: "D", label: "They offer a meaningful gesture of repair", type: "gifts" },
      { code: "E", label: "They reconnect with gentle physical warmth", type: "physical_touch" },
    ],
  },
  {
    id: 7,
    text: "What disappoints you most in a close relationship?",
    options: [
      { code: "A", label: "Rarely hearing appreciation or reassurance", type: "words" },
      { code: "B", label: "Feeling like you are not prioritized", type: "quality_time" },
      { code: "C", label: "Promises not being followed by action", type: "acts_service" },
      { code: "D", label: "Important moments passing without thoughtfulness", type: "gifts" },
      { code: "E", label: "A lack of warmth, touch or physical closeness", type: "physical_touch" },
    ],
  },
  {
    id: 8,
    text: "For a simple date or meaningful moment, you would prefer:",
    options: [
      { code: "A", label: "A conversation full of affection and honesty", type: "words" },
      { code: "B", label: "A long walk or meal with phones away", type: "quality_time" },
      { code: "C", label: "Doing something useful together", type: "acts_service" },
      { code: "D", label: "Exchanging small meaningful surprises", type: "gifts" },
      { code: "E", label: "Cuddling, holding hands or staying close", type: "physical_touch" },
    ],
  },
  {
    id: 9,
    text: "What kind of message would make you smile most?",
    options: [
      { code: "A", label: "I am proud of you and I see your effort", type: "words" },
      { code: "B", label: "I cleared time for us tonight", type: "quality_time" },
      { code: "C", label: "I handled that thing so you can rest", type: "acts_service" },
      { code: "D", label: "I found something that reminded me of you", type: "gifts" },
      { code: "E", label: "I wish I could hug you right now", type: "physical_touch" },
    ],
  },
  {
    id: 10,
    text: "When love feels missing, what do you usually crave first?",
    options: [
      { code: "A", label: "More affirmation and emotional clarity", type: "words" },
      { code: "B", label: "More presence and shared time", type: "quality_time" },
      { code: "C", label: "More reliability and practical support", type: "acts_service" },
      { code: "D", label: "More thoughtfulness and symbolic gestures", type: "gifts" },
      { code: "E", label: "More closeness and affectionate touch", type: "physical_touch" },
    ],
  },
  {
    id: 11,
    text: "How do you usually celebrate someone you love?",
    options: [
      { code: "A", label: "With heartfelt words or a personal note", type: "words" },
      { code: "B", label: "By planning meaningful time together", type: "quality_time" },
      { code: "C", label: "By making their day easier", type: "acts_service" },
      { code: "D", label: "By choosing a thoughtful gift", type: "gifts" },
      { code: "E", label: "With hugs, closeness or physical warmth", type: "physical_touch" },
    ],
  },
  {
    id: 12,
    text: "Which detail makes you feel most seen?",
    options: [
      { code: "A", label: "They remember what words encourage you", type: "words" },
      { code: "B", label: "They notice when you need uninterrupted time", type: "quality_time" },
      { code: "C", label: "They help before you have to ask", type: "acts_service" },
      { code: "D", label: "They remember tiny preferences and surprise you", type: "gifts" },
      { code: "E", label: "They understand when you need physical reassurance", type: "physical_touch" },
    ],
  },
  {
    id: 13,
    text: "In conflict, what helps you reconnect?",
    options: [
      { code: "A", label: "Hearing calm, specific reassurance", type: "words" },
      { code: "B", label: "Having enough time to talk it through", type: "quality_time" },
      { code: "C", label: "Seeing changed behavior afterward", type: "acts_service" },
      { code: "D", label: "A small gesture that says they still care", type: "gifts" },
      { code: "E", label: "A gentle touch once both people feel safe", type: "physical_touch" },
    ],
  },
  {
    id: 14,
    text: "Which relationship habit would matter most long term?",
    options: [
      { code: "A", label: "Saying appreciation out loud often", type: "words" },
      { code: "B", label: "Protecting time together every week", type: "quality_time" },
      { code: "C", label: "Showing up through consistent actions", type: "acts_service" },
      { code: "D", label: "Marking moments with thoughtful symbols", type: "gifts" },
      { code: "E", label: "Keeping affection and closeness alive", type: "physical_touch" },
    ],
  },
  {
    id: 15,
    text: "Choose the sentence that feels most like love to you:",
    options: [
      { code: "A", label: "I see you, and I value who you are", type: "words" },
      { code: "B", label: "I am here with you, fully present", type: "quality_time" },
      { code: "C", label: "Let me make this easier for you", type: "acts_service" },
      { code: "D", label: "I thought of you when I saw this", type: "gifts" },
      { code: "E", label: "Come close, you are safe with me", type: "physical_touch" },
    ],
  },
];

const loveLanguageProfiles: Record<LoveLanguageType, LoveLanguageProfile> = {
  words: {
    type: "words",
    slug: "words-of-affirmation",
    name: "Words of Affirmation",
    title: "Your love language is built around emotional clarity.",
    meaning:
      "Words help you feel seen. Encouragement, appreciation and honest reassurance can reach you quickly because language gives love a clear shape.",
    giveLove:
      "You often give love by naming what you admire, writing thoughtful messages and helping people feel emotionally recognized.",
    receiveLove:
      "You receive love best when someone is specific, sincere and consistent with their appreciation rather than vague or silent.",
    strengths: ["Emotional encouragement", "Verbal reassurance", "Thoughtful communication", "Noticing effort"],
    challenge:
      "You may feel unloved when appreciation is implied but not spoken. Practice asking for reassurance directly instead of waiting for someone to guess.",
    tips: ["Say what kind of words matter to you.", "Notice actions too, even when words are imperfect.", "Use appreciation as a bridge, not a test."],
    faq: [],
  },
  quality_time: {
    type: "quality_time",
    slug: "quality-time",
    name: "Quality Time",
    title: "Your love language is built around presence.",
    meaning:
      "Focused attention makes love feel real to you. You feel most connected when someone chooses to be fully present without rushing or distraction.",
    giveLove:
      "You give love by making time, creating shared experiences and offering your attention as a form of emotional commitment.",
    receiveLove:
      "You receive love best through uninterrupted moments, deep conversation and shared rituals that make you feel prioritized.",
    strengths: ["Presence", "Deep listening", "Shared rituals", "Emotional patience"],
    challenge:
      "You may feel hurt when someone is busy or distracted. Clarify what quality time means to you so others understand the difference between time nearby and time together.",
    tips: ["Create small recurring rituals.", "Ask for phone-free time clearly.", "Do not measure love only by availability."],
    faq: [],
  },
  acts_service: {
    type: "acts_service",
    slug: "acts-of-service",
    name: "Acts of Service",
    title: "Your love language is built around dependable action.",
    meaning:
      "Love feels strongest when care becomes useful, reliable action. Support, follow-through and practical help can make you feel deeply protected.",
    giveLove:
      "You give love by helping, organizing, solving problems and making another person's life lighter.",
    receiveLove:
      "You receive love best when people keep promises, notice burdens and show care through consistent behavior.",
    strengths: ["Reliability", "Practical support", "Follow-through", "Protective care"],
    challenge:
      "You may become frustrated when words are not matched by action. Try to name the specific support you need before resentment builds.",
    tips: ["Ask for concrete help.", "Recognize emotional effort too.", "Avoid turning love into a checklist."],
    faq: [],
  },
  gifts: {
    type: "gifts",
    slug: "receiving-gifts",
    name: "Receiving Gifts",
    title: "Your love language is built around thoughtful symbols.",
    meaning:
      "A meaningful gift tells you someone paid attention. It is not about price; it is about memory, care and the feeling of being remembered.",
    giveLove:
      "You give love through thoughtful objects, surprises and symbolic details that carry emotional meaning.",
    receiveLove:
      "You receive love best when a gesture shows someone noticed your tastes, needs, memories or little wishes.",
    strengths: ["Thoughtfulness", "Memory for details", "Symbolic care", "Celebrating moments"],
    challenge:
      "You may feel unseen when people skip symbolic gestures. Explain that meaning matters more than money so your needs are not misunderstood.",
    tips: ["Share examples of meaningful gestures.", "Value simple signs of thoughtfulness.", "Do not equate cost with care."],
    faq: [],
  },
  physical_touch: {
    type: "physical_touch",
    slug: "physical-touch",
    name: "Physical Touch",
    title: "Your love language is built around safe closeness.",
    meaning:
      "Warm, respectful physical closeness helps you feel connected. Touch can communicate safety, affection and reassurance faster than words.",
    giveLove:
      "You give love through hugs, closeness, hand-holding and steady physical warmth when it is welcome and consensual.",
    receiveLove:
      "You receive love best when affection feels safe, mutual and emotionally present rather than automatic or careless.",
    strengths: ["Warmth", "Comfort", "Reassurance", "Emotional grounding"],
    challenge:
      "You may feel distance strongly when affection is missing. Communicate your need for closeness while respecting boundaries and different comfort levels.",
    tips: ["Talk openly about comfort and consent.", "Use small affectionate rituals.", "Remember closeness can also be emotional presence."],
    faq: [],
  },
};

export function calculateLoveLanguageResult(
  answers: LoveLanguageType[],
): LoveLanguageResult {
  const scores: Record<LoveLanguageType, number> = {
    words: 0,
    quality_time: 0,
    acts_service: 0,
    gifts: 0,
    physical_touch: 0,
  };

  answers.forEach((answer) => {
    scores[answer] += 1;
  });

  const winningType = (Object.keys(scores) as LoveLanguageType[]).sort(
    (a, b) => scores[b] - scores[a],
  )[0];

  return {
    ...loveLanguageProfiles[winningType],
    scores,
  };
}
