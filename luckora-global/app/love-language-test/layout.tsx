import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Love Language Test - Discover How You Give and Receive Love",
  description:
    "Take a free Love Language Test and discover how you express love, receive affection, and connect with others.",
  path: "/love-language-test",
  keywords: [
    "Love Language Test",
    "love languages",
    "relationship test",
    "how you give and receive love",
    "Luckora",
  ],
});

export default function LoveLanguageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
