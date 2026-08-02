import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Love Language Test Result | Luckora",
  description:
    "View your Luckora Love Language Test result and understand how you give love, receive affection and connect in relationships.",
  path: "/love-language-test/report",
  keywords: [
    "love language result",
    "relationship self discovery",
    "love language test",
    "Luckora",
  ],
});

export default function LoveLanguageReportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
