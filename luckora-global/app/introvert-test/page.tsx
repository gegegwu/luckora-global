import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/introvert-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "introvert test",
    "introvert personality test",
    "social energy",
    "AI personality test",
    "Luckora",
  ],
});

export default function IntrovertTestPage() {
  return <SeoLandingPage page={page!} />;
}
