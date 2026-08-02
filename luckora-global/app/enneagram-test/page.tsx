import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/enneagram-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "Enneagram test",
    "personality type",
    "core motivation",
    "personality patterns",
    "AI personality test",
  ],
});

export default function EnneagramTestPage() {
  return <SeoLandingPage page={page!} />;
}
