import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const publicSeoPages = [
  "",
  "/ai-personality-test",
  "/mbti-test",
  "/enneagram-test",
  "/emotional-intelligence-test",
  "/iq-test",
  "/leadership-test",
  "/dark-personality-test",
  "/love-personality-test",
  "/career-personality-test",
  "/attachment-style-test",
  "/introvert-test",
  "/free-personality-test",
  "/personality-test-for-students",
  "/personality-test-for-women",
  "/personality-test-for-couples",
  "/free-personality-test-online",
  "/ai-personality-quiz",
  "/personality-types",
  "/tests",
  "/personality",
  "/strengths",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSeoPages.map((page) => ({
    url: `${siteConfig.baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
