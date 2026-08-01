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
    ctaLabel: "Preview Career Test",
    ctaPath: "/tests/career-test",
  },
  {
    path: "/strengths",
    title: "Personal Strengths",
    description:
      "Explore natural abilities, hidden strengths and growth signals that help people understand what they are good at.",
    eyebrow: "Strengths Hub",
    ctaLabel: "Preview Strengths Test",
    ctaPath: "/tests/strengths-test",
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
    ctaLabel: "Start Free Test",
    ctaPath: "/tests/personality-test",
  },
];

export const futureSeoCollections: Record<string, SeoCollectionItem[]> = {
  careers: [],
  strengths: [],
  guides: [],
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
