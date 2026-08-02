import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/mbti-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "MBTI test",
    "personality test",
    "AI personality test",
    "personality pattern",
    "Luckora",
  ],
});

export default function MbtiTestPage() {
  return <SeoLandingPage page={page!} />;
}
