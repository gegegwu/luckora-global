import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/iq-test");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "IQ test",
    "cognitive strengths",
    "logic test",
    "problem solving",
    "self discovery tool",
  ],
});

export default function IqTestPage() {
  return <SeoLandingPage page={page!} />;
}
