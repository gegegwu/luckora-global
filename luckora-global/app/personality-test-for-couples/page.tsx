import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/personality-test-for-couples");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "personality test for couples",
    "relationship personality test",
    "couples communication",
    "relationship patterns",
    "AI personality test",
  ],
});

export default function PersonalityTestForCouplesPage() {
  return <SeoLandingPage page={page!} />;
}
