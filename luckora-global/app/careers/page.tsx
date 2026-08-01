import type { Metadata } from "next";
import { SeoHubPage } from "@/components/seo-hub-page";
import { getSeoHub } from "@/lib/seo-routes";
import { createSeoMetadata } from "@/lib/seo";

const hub = getSeoHub("/careers")!;

export const metadata: Metadata = createSeoMetadata({
  title: `${hub.title} | Luckora`,
  description: hub.description,
  path: hub.path,
});

export default function CareersHubPage() {
  return <SeoHubPage hub={hub} />;
}
