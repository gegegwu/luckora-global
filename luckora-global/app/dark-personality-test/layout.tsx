import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Dark Personality Test - Explore Your Shadow Traits | Luckora",
  description:
    "Take a free 12-question dark personality test for self reflection. Explore strategic influence, recognition drive, emotional distance and bold impulse without diagnostic labels.",
  path: "/dark-personality-test",
  keywords: [
    "dark personality test",
    "dark traits test",
    "shadow personality test",
    "personality self reflection",
    "Luckora",
  ],
});

export default function DarkPersonalityTestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
