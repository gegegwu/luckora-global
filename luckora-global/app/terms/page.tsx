import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "Terms of Use";
const description =
  "Luckora's terms explain the basic rules for using the AI self discovery website and free personality test.";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms of Use | Luckora",
  description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Terms"
      path="/terms"
      sections={[
        {
          title: "Use of the website",
          body: "Luckora provides self discovery content and free test experiences for personal reflection. You agree to use the website lawfully and not attempt to disrupt, scrape aggressively or misuse the service.",
        },
        {
          title: "No professional advice",
          body: "Luckora content is not medical, psychological, legal, financial or career counseling advice. Results are reflective and educational, and important life decisions should consider real circumstances and qualified professionals when needed.",
        },
        {
          title: "Content ownership",
          body: "Luckora owns the website design, text, structure and test content unless otherwise stated. You may share your own result summary, but you may not copy the website as a competing product.",
        },
        {
          title: "Changes",
          body: "Luckora may update the website, tests, policies and terms as the product develops. Continued use of the website means you accept the current version.",
        },
      ]}
      title={title}
    />
  );
}
