import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/love-personality-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "love personality test",
    "relationship style test",
    "AI personality test",
    "emotional patterns",
    "Luckora",
  ],
});

export default function LovePersonalityTestPage() {
  return <SeoLandingPage page={page!} />;
}
