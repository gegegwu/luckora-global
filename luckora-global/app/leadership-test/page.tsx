import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/leadership-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "leadership test",
    "leadership style",
    "decision style",
    "teamwork style",
    "AI personality test",
  ],
});

export default function LeadershipTestPage() {
  return <SeoLandingPage page={page!} />;
}
