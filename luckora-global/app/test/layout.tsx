import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Personality Discovery Test | Luckora",
  description:
    "Start Luckora's free AI personality discovery test to reveal your personality profile, hidden strengths and growth potential.",
  path: "/test",
  keywords: [
    "AI personality discovery test",
    "free personality test",
    "hidden strengths test",
    "self discovery test",
    "Luckora",
  ],
});

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
