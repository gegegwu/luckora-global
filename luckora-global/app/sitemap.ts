import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const publicSeoPages = [
  "",
  "/ai-personality-test",
  "/free-personality-test",
  "/personality-types",
  "/tests",
  "/personality",
  "/strengths",
  "/guides",
  "/about",
  "/contact",
  "/privacy",
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
