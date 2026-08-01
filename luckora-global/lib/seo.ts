import type { Metadata } from "next";
import type { PersonalityProfile } from "@/lib/personalities";
import type { TestConfig } from "@/lib/tests";

export const siteConfig = {
  name: "Luckora",
  baseUrl: "https://luckora.online",
  contactEmail: "hello@luckora.online",
  ogImagePath: "/opengraph-image",
  defaultTitle: "Luckora - AI Self Discovery Tests",
  defaultDescription:
    "Discover your personality, strengths, career direction and hidden potential with AI-powered self discovery tests.",
  defaultKeywords: [
    "AI self discovery tests",
    "AI personality test",
    "free personality test",
    "career test",
    "strengths test",
    "hidden potential test",
    "personality identity",
    "Luckora",
  ],
  futureLocalePrefixes: ["en", "es", "ar"] as const,
};

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createSeoMetadata({
  title,
  description,
  path,
  keywords = siteConfig.defaultKeywords,
  type = "website",
}: SeoInput): Metadata {
  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: siteConfig.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} AI self discovery tests`,
        },
      ],
      locale: "en_US",
      siteName: siteConfig.name,
      type,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImagePath],
    },
  };
}

export function createTestMetadata(test: TestConfig): Metadata {
  return createSeoMetadata({
    title: test.seoTitle,
    description: test.seoDescription,
    path: `/tests/${test.slug}`,
    keywords: [
      test.title,
      "AI self discovery test",
      "free AI test",
      "personality test",
      "Luckora",
    ],
  });
}

export function createPersonalityMetadata(
  profile: PersonalityProfile,
): Metadata {
  return createSeoMetadata({
    title: `${profile.name} Personality Type | Luckora AI`,
    description: `${profile.description} Discover strengths, challenges, career matches and growth path for ${profile.name}.`,
    path: `/personality/${profile.slug}`,
    keywords: [
      profile.name,
      "personality type",
      "AI personality test result",
      "personality strengths",
      "career matches",
      "Luckora",
    ],
    type: "article",
  });
}
