import type { Metadata } from "next";
import { IntrovertTestClient } from "./introvert-test-client";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { createSeoMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Introvert Test - Introverted or Just Drained? | Luckora",
  description:
    "Take a free 12-question introvert test to compare solitude preference, social exhaustion and desire for connection. No signup required.",
  path: "/introvert-test",
  keywords: [
    "introvert test",
    "am I an introvert",
    "introverted or socially drained",
    "social battery test",
    "free introvert quiz",
  ],
});

const faq = [
  {
    question: "What is the difference between introversion and social exhaustion?",
    answer: "Introversion is a preference for lower-stimulation settings and time alone. Social exhaustion is a temporary loss of capacity that can affect introverts, ambiverts and extroverts.",
  },
  {
    question: "Can an introvert enjoy people?",
    answer: "Yes. Introversion describes energy and stimulation preferences, not whether a person likes people or values close relationships.",
  },
  {
    question: "Is this a clinical assessment?",
    answer: "No. This introvert test is an educational reflection tool and does not diagnose a personality or mental health condition.",
  },
];

export default function IntrovertTestPage() {
  return (
    <>
      <IntrovertTestClient />
      <script dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Luckora Introvert Test",
        applicationCategory: "LifestyleApplication",
        operatingSystem: "Web",
        url: `${siteConfig.baseUrl}/introvert-test`,
        description: metadata.description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      }) }} type="application/ld+json" />
      <script dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }) }} type="application/ld+json" />
      <script dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Tests", path: "/tests" },
        { name: "Introvert Test", path: "/introvert-test" },
      ])) }} type="application/ld+json" />
    </>
  );
}
