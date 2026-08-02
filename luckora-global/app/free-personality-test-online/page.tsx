import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/free-personality-test-online");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "free personality test online",
    "online personality test",
    "free AI personality test",
    "discover your personality",
    "personality quiz",
  ],
});

export default function FreePersonalityTestOnlinePage() {
  return <SeoLandingPage page={page!} />;
}
