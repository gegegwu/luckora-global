import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Personality Report | Luckora",
  description:
    "View your Luckora AI personality report with cosmic identity, strengths, growth challenges and career alignment.",
  path: "/report",
  keywords: [
    "AI personality report",
    "personality type report",
    "self discovery report",
    "career alignment",
    "Luckora",
  ],
});

metadata.robots = {
  index: false,
  follow: true,
};

export default function ReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
