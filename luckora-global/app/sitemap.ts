import type { MetadataRoute } from "next";
import { personalityProfiles } from "@/lib/personalities";
import { getFutureSeoRoutes, seoHubs } from "@/lib/seo-routes";
import { siteConfig } from "@/lib/seo";
import { testConfigs } from "@/lib/tests";

const staticPages = [
  "",
  "/tests",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const personalityPages = personalityProfiles.map(
    (profile) => `/personality/${profile.slug}`,
  );
  const testPages = testConfigs.map((test) => `/tests/${test.slug}`);
  const hubPages = seoHubs.map((hub) => hub.path);
  const futurePages = getFutureSeoRoutes();
  const pages = Array.from(
    new Set([
      ...staticPages,
      ...hubPages,
      ...testPages,
      ...personalityPages,
      ...futurePages,
    ]),
  );

  return pages.map((page) => ({
    url: `${siteConfig.baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));
}
