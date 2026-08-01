import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/free-personality-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "free personality test",
    "personality type",
    "free AI personality test",
    "self discovery test",
    "Luckora",
  ],
});

export default function FreePersonalityTestPage() {
  return <SeoLandingPage page={page!} />;
}
