import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/career-personality-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "career personality test",
    "career test",
    "work style test",
    "AI personality test",
    "Luckora",
  ],
});

export default function CareerPersonalityTestPage() {
  return <SeoLandingPage page={page!} />;
}
