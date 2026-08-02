import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/emotional-intelligence-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "emotional intelligence test",
    "EQ test",
    "emotional awareness",
    "communication skills",
    "relationship skills",
  ],
});

export default function EmotionalIntelligenceTestPage() {
  return <SeoLandingPage page={page!} />;
}
