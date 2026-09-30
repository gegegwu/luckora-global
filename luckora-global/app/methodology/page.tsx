import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata } from "@/lib/seo";

const description =
  "Learn how Luckora designs, scores and explains its self-discovery tests, including limitations, privacy and editorial standards.";

export const metadata: Metadata = createSeoMetadata({
  title: "Test Methodology and Editorial Standards | Luckora",
  description,
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Methodology"
      path="/methodology"
      title="How Luckora builds self-discovery tools"
      sections={[
        {
          title: "Question design",
          body: "Luckora starts with a narrow reflection goal and writes questions about observable preferences or behaviors. We avoid questions that pretend to diagnose a condition. Where useful, reverse-scored items are included to reduce the tendency to agree with every statement.",
        },
        {
          title: "Scoring",
          body: "Answers are grouped into named dimensions and converted into relative scores. A score describes how strongly a user's answers align with a pattern inside that test. It is not a population percentile, a medical conclusion or a permanent identity.",
        },
        {
          title: "Result writing",
          body: "Every result explains a potential strength, a likely friction point and a practical reflection step. We aim to give users language they can test against real experience instead of relying on flattering labels or vague predictions.",
        },
        {
          title: "Privacy by design",
          body: "Current tests do not require an account. Interactive answers are processed in the browser and may be encoded in the page address so a result can be calculated. Users should avoid sharing a result URL if they consider their answers private.",
        },
        {
          title: "Limits and updates",
          body: "Luckora tools are educational and are not substitutes for psychological assessment, therapy, medical advice, career counseling or financial advice. We review confusing questions, broken flows and user feedback as the site evolves, and we update tools when a clearer or safer explanation is available.",
        },
      ]}
    />
  );
}
