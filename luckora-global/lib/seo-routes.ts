export type SeoHub = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  ctaLabel: string;
  ctaPath: string;
};

export type SeoCollectionItem = {
  path: string;
  title: string;
  description?: string;
  label?: string;
};

export const seoHubs: SeoHub[] = [
  {
    path: "/personality",
    title: "Personality Types",
    description:
      "Explore Luckora personality identities and understand how different self discovery patterns connect to strengths, challenges and career direction.",
    eyebrow: "Personality Hub",
    ctaLabel: "Start Personality Test",
    ctaPath: "/tests/personality-test",
  },
  {
    path: "/careers",
    title: "AI Career Directions",
    description:
      "Explore career direction content designed to connect personality patterns, strengths and AI-era work opportunities.",
    eyebrow: "Career Hub",
    ctaLabel: "Start Personality Test",
    ctaPath: "/tests/personality-test",
  },
  {
    path: "/strengths",
    title: "Personal Strengths",
    description:
      "Explore natural abilities, hidden strengths and growth signals that help people understand what they are good at.",
    eyebrow: "Strengths Hub",
    ctaLabel: "Read Strength Guides",
    ctaPath: "/guides/how-to-understand-your-hidden-strengths",
  },
  {
    path: "/guides",
    title: "Self Discovery Guides",
    description:
      "Read Luckora guides about personality, strengths, career direction and personal growth opportunities.",
    eyebrow: "Guides Hub",
    ctaLabel: "Explore Tests",
    ctaPath: "/tests",
  },
  {
    path: "/reports",
    title: "AI Personality Reports",
    description:
      "Preview the future Luckora report system for deeper AI self discovery, personality insight and growth navigation.",
    eyebrow: "Reports Hub",
    ctaLabel: "Explore Available Tests",
    ctaPath: "/tests",
  },
];

export const futureSeoCollections: Record<string, SeoCollectionItem[]> = {
  careers: [],
  strengths: [],
  guides: [
    {
      path: "/guides/why-do-i-overthink-everything",
      title: "Why Do I Overthink Everything?",
      description:
        "Understand the loop between sensitivity, uncertainty and mental replay.",
      label: "Problem Guide",
    },
    {
      path: "/guides/how-to-understand-your-hidden-strengths",
      title: "How to Understand Your Hidden Strengths",
      description:
        "Learn how to identify the strengths already shaping your life and decisions.",
      label: "Strengths Guide",
    },
    {
      path: "/guides/why-do-certain-people-drain-me",
      title: "Why Do Certain People Drain Me?",
      description:
        "Learn how emotional mismatch, weak boundaries and inconsistency create depletion.",
      label: "Relationship Guide",
    },
    {
      path: "/guides/how-to-stop-ruminating-after-a-conversation",
      title: "How to Stop Ruminating After a Conversation",
      description:
        "Move from replaying interactions toward clearer emotional recovery.",
      label: "Recovery Guide",
    },
    {
      path: "/guides/high-sensitivity-and-emotional-rumination",
      title: "High Sensitivity and Emotional Rumination",
      description:
        "Explore how deep feeling turns into emotional loops and how to reduce the drain.",
      label: "Sensitivity Guide",
    },
    {
      path: "/guides/signs-your-sensitivity-is-a-strength",
      title: "Signs Your Sensitivity Is a Strength",
      description:
        "Understand how sensitivity can create empathy, accuracy and strong relational insight.",
      label: "Strength Pattern Guide",
    },
  ],
  reports: [],
};

export function getSeoHub(path: string) {
  return seoHubs.find((hub) => hub.path === path);
}

export function getFutureSeoRoutes() {
  return Object.values(futureSeoCollections)
    .flat()
    .map((item) => item.path);
}

export function getSeoCollection(path: string) {
  const key = path.replace("/", "");
  return futureSeoCollections[key] ?? [];
}
