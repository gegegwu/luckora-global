import { guideArticles } from "@/lib/guides";

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

const guidePath = (slug: string) => `/guides/${slug}`;

const guideItem = (slug: string): SeoCollectionItem => {
  const guide = guideArticles.find((article) => article.slug === slug);

  if (!guide) {
    throw new Error(`Missing guide article for SEO hub: ${slug}`);
  }

  return {
    path: guidePath(guide.slug),
    title: guide.title,
    description: guide.description,
    label: guide.eyebrow,
  };
};

export const futureSeoCollections: Record<string, SeoCollectionItem[]> = {
  careers: [
    guideItem("personality-test-for-career-direction"),
    guideItem("what-are-my-hidden-strengths"),
    guideItem("how-to-know-what-you-are-good-at"),
    guideItem("free-ai-personality-test-online"),
    guideItem("how-to-turn-self-awareness-into-action"),
  ],
  strengths: [
    guideItem("how-to-understand-your-hidden-strengths"),
    guideItem("what-are-my-hidden-strengths"),
    guideItem("signs-your-sensitivity-is-a-strength"),
    guideItem("how-to-know-what-you-are-good-at"),
    guideItem("how-to-stop-second-guessing-yourself"),
  ],
  guides: guideArticles.map((guide) => ({
    path: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    label: guide.eyebrow,
  })),
  reports: [
    guideItem("free-ai-personality-test-online"),
    guideItem("how-to-choose-a-personality-test"),
    guideItem("what-is-a-self-discovery-test"),
    guideItem("how-to-find-your-personality-type"),
    guideItem("how-to-turn-self-awareness-into-action"),
  ],
};

export function getSeoHub(path: string) {
  return seoHubs.find((hub) => hub.path === path);
}

export function getFutureSeoRoutes() {
  return Array.from(
    new Set(
      Object.values(futureSeoCollections)
        .flat()
        .map((item) => item.path),
    ),
  );
}

export function getSeoCollection(path: string) {
  const key = path.replace("/", "");
  return futureSeoCollections[key] ?? [];
}
