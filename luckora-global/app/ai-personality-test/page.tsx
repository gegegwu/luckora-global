import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/ai-personality-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "AI personality test",
    "personality test",
    "discover your true self",
    "AI self discovery",
    "Luckora",
  ],
});

export default function AiPersonalityTestPage() {
  return <SeoLandingPage page={page!} />;
}
