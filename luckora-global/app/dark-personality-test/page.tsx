import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/dark-personality-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "dark personality test",
    "personality traits",
    "behavior tendencies",
    "self reflection",
    "personality test",
  ],
});

export default function DarkPersonalityTestPage() {
  return <SeoLandingPage page={page!} />;
}
