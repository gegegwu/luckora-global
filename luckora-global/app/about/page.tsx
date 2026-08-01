import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "About Luckora";
const description =
  "Luckora is an AI self discovery platform that helps people explore personality, strengths, career direction and growth opportunities.";

export const metadata: Metadata = createSeoMetadata({
  title: "About Luckora | AI Self Discovery Platform",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="About"
      path="/about"
      sections={[
        {
          title: "What is Luckora?",
          body: "Luckora is a web-based AI self discovery platform. The first public product is a free AI Personality Test that helps users reflect on who they are, what they may be naturally good at and where they can grow next.",
        },
        {
          title: "Our approach",
          body: "Luckora combines clear personality patterns, reflective questions and structured result pages. The goal is practical self understanding, not entertainment-only quizzes, medical diagnosis or fortune telling.",
        },
        {
          title: "Current stage",
          body: "Luckora is in an early public launch stage. The website currently focuses on one free personality test, SEO-friendly educational pages and simple result summaries that users can read and share.",
        },
      ]}
      title={title}
    />
  );
}
