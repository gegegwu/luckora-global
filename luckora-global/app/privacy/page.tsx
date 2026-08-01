import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata, siteConfig } from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Luckora's privacy policy explains what data the AI self discovery website may process and how the current test experience works.";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy | Luckora",
  description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Privacy"
      path="/privacy"
      sections={[
        {
          title: "Information you provide",
          body: "The current Luckora test asks you to choose answers to self discovery questions. The result can be generated in your browser from those answers. Do not enter sensitive personal information into the test.",
        },
        {
          title: "Local storage",
          body: "Luckora may store your test result in your browser's local storage so you can view the result again on the same device. You can clear this through your browser settings.",
        },
        {
          title: "Analytics",
          body: "Luckora is prepared to use Google Analytics 4 after a valid Measurement ID is added. Analytics may help us understand page views, test starts, test completions and result views. No Google Analytics ID is invented by Luckora.",
        },
        {
          title: "Advertising",
          body: "Luckora may apply for advertising programs such as Google AdSense in the future. Advertising partners may use cookies or similar technologies according to their own policies.",
        },
        {
          title: "Contact",
          body: `For privacy questions, contact ${siteConfig.contactEmail}.`,
        },
      ]}
      title={title}
    />
  );
}
