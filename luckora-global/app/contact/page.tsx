import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata, siteConfig } from "@/lib/seo";

const title = "Contact Luckora";
const description =
  "Contact Luckora for website questions, feedback, policy requests or issues related to the AI self discovery test experience.";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact Luckora | Support and Feedback",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Contact"
      path="/contact"
      sections={[
        {
          title: "How to contact us",
          body: `For website questions, feedback or policy requests, contact Luckora by email at ${siteConfig.contactEmail}. Please include the page URL and a short description of your question so we can understand the context.`,
        },
        {
          title: "Response expectations",
          body: "Luckora is an early-stage web product. We try to review important website, privacy and safety messages, but response times may vary. Do not send urgent medical, legal, financial or emergency requests.",
        },
        {
          title: "What not to send",
          body: "Please do not send passwords, payment information, government ID numbers or sensitive health details. Luckora does not need that information to answer ordinary website questions.",
        },
      ]}
      title={title}
    />
  );
}
