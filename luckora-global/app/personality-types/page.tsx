import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/personality-types");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "personality types",
    "personality type explained",
    "unique traits",
    "AI personality test",
    "Luckora",
  ],
});

export default function PersonalityTypesPage() {
  return <SeoLandingPage page={page!} />;
}
