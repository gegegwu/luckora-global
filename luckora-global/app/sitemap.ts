import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getFutureSeoRoutes } from "@/lib/seo-routes";

const publicSeoPages = [
  "",
  "/ai-personality-test",
  "/dark-personality-test",
  "/love-language-test",
  "/tests/love-language-test",
  "/free-personality-test",
  "/personality-types",
  "/tests",
  "/personality",
  "/careers",
  "/strengths",
  "/guides",
  "/reports",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/methodology",
  "/tests/personality-test",
  "/tests/love-language-test",
  "/tests/dark-personality-test",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...publicSeoPages, ...getFutureSeoRoutes()].map((page) => ({
    url: `${siteConfig.baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
