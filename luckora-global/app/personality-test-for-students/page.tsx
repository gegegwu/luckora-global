import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo-landing-page";
import { createSeoMetadata } from "@/lib/seo";
import { getSeoLandingPage } from "@/lib/seo-landing-pages";

const page = getSeoLandingPage("/personality-test-for-students");

export const metadata: Metadata = createSeoMetadata({
  title: page!.metadataTitle,
  description: page!.description,
  path: page!.path,
  keywords: [
    "personality test for students",
    "student strengths",
    "learning style",
    "future direction",
    "AI personality test",
  ],
});

export default function PersonalityTestForStudentsPage() {
  return <SeoLandingPage page={page!} />;
}
