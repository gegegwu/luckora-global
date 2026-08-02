import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const publicSeoPages = [
  "",
  "/ai-personality-test",
  "/mbti-test",
  "/love-personality-test",
  "/career-personality-test",
  "/attachment-style-test",
  "/introvert-test",
  "/free-personality-test",
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
