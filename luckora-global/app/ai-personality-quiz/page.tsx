import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/ai-personality-quiz");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "AI personality quiz",
    "hidden traits",
    "personality quiz",
    "AI self discovery",
    "personality test online",
  ],
});

export default function AiPersonalityQuizPage() {
  return <SeoLandingPage page={page!} />;
}
