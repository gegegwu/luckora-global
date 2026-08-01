import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "Disclaimer";
const description =
  "Luckora's disclaimer explains the limits of AI self discovery tests and how to interpret personality results safely.";

export const metadata: Metadata = createSeoMetadata({
  title: "Disclaimer | Luckora AI Self Discovery",
  description,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Disclaimer"
      path="/disclaimer"
      sections={[
        {
          title: "Self discovery only",
          body: "Luckora tests are designed for self reflection, personal insight and growth exploration. They are not clinical assessments, mental health diagnosis, therapy, professional career counseling or financial advice.",
        },
        {
          title: "How to use results",
          body: "A personality result can be a useful mirror, but it should not become a fixed identity. Use Luckora results as prompts to notice patterns, ask better questions and make more intentional choices.",
        },
        {
          title: "Accuracy limits",
          body: "Any self discovery test depends on user answers and simplified models. Luckora results may feel accurate in some areas and incomplete in others. Real people are more complex than a single result page.",
        },
        {
          title: "Safety",
          body: "If you are dealing with urgent emotional distress, health concerns, legal issues or financial risk, seek help from qualified professionals or local emergency resources instead of relying on Luckora.",
        },
      ]}
      title={title}
    />
  );
}
