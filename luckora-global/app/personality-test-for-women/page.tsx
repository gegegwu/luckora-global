import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/personality-test-for-women");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "personality test for women",
    "discover your true self",
    "women self discovery",
    "relationship patterns",
    "personal growth",
  ],
});

export default function PersonalityTestForWomenPage() {
  return <SeoLandingPage page={page!} />;
}
