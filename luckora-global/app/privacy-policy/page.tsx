import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/static-info-page";
import { createSeoMetadata, siteConfig } from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Read Luckora's privacy policy, including information about analytics, advertising, cookies and user privacy choices.";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy - Luckora",
  description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <StaticInfoPage
      description={description}
      eyebrow="Privacy"
      path="/privacy-policy"
      sections={[
        {
          title: "Information We Collect",
          body: "Luckora may collect basic website usage information, such as pages viewed, test start actions, test completion events and result page views. The current personality test asks users to choose answers to self discovery questions. Users should not enter sensitive personal information into the test.",
        },
        {
          title: "Google Analytics",
          body: "Luckora uses Google Analytics 4 to understand website traffic, page views and user interactions such as test starts, test completions and report views. Google Analytics may use cookies or similar technologies to help measure website activity.",
        },
        {
          title: "Google AdSense and Cookies",
          body: "Luckora may use Google AdSense to display advertisements. Google and its partners may use cookies, advertising identifiers or similar technologies to serve ads, measure ad performance and help prevent fraud or abuse.",
        },
        {
          title: "Advertising Partners",
          body: "Advertising partners, including Google, may collect or receive information from this website and other websites to provide measurement services and personalized or non-personalized ads. Their use of information is governed by their own privacy policies.",
        },
        {
          title: "How We Use Information",
          body: "Luckora uses information to operate the website, improve self discovery content, understand which pages are useful, measure test engagement and prepare for responsible advertising monetization. We do not sell personal information directly to users or claim to provide medical diagnosis.",
        },
        {
          title: "User Privacy Choices",
          body: "Users can control cookies through browser settings, clear local storage, use browser privacy tools or adjust Google ad personalization settings. Blocking cookies may affect analytics, advertising or the ability to keep a result available on the same device.",
        },
        {
          title: "Contact Information",
          body: `For privacy questions or website feedback, contact ${siteConfig.contactEmail}. Luckora does not list a physical office address or phone number because no verified public business address or phone support line is currently provided.`,
        },
      ]}
      title={title}
    />
  );
}
