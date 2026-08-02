import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "Luckora - AI Self Discovery Platform";
const description =
  "Learn about Luckora, an AI-powered self discovery platform helping users explore personality, strengths and personal potential.";

export const metadata: Metadata = createSeoMetadata({
  title: "About Luckora - AI Self Discovery Platform",
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
          body: "Luckora is an AI self discovery platform built to help people better understand themselves through online personality tests and reflective result pages. The current website focuses on a free AI personality test and related self discovery resources.",
        },
        {
          title: "What the website offers",
          body: "Luckora provides AI personality test content, self exploration pages and educational resources about personality, strengths, career direction, emotional patterns and hidden potential. The goal is to turn simple test answers into structured insight users can read, reflect on and use as a starting point for personal growth.",
        },
        {
          title: "Our philosophy",
          body: "Luckora believes self discovery should feel clear, thoughtful and useful. The website is not a medical service, therapy provider or fortune telling platform. It is designed for personal reflection, helping users name patterns in how they think, communicate, make decisions and grow.",
        },
        {
          title: "Current stage",
          body: "Luckora is in an early public launch stage. We keep the experience simple: one core personality test, clear result pages and SEO-friendly educational content. We do not claim fake user numbers, company history, partnerships or credentials.",
        },
      ]}
      title={title}
    />
  );
}
