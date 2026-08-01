import type { Metadata } from "next";
import { SeoHubPage } from "@/components/seo-hub-page";
import { RelatedPersonalityTypes } from "@/components/seo-link-sections";
import { personalityItemListSchema, jsonLd } from "@/lib/schema";
import { getSeoHub } from "@/lib/seo-routes";
import { createSeoMetadata } from "@/lib/seo";

const hub = getSeoHub("/personality")!;

export const metadata: Metadata = createSeoMetadata({
  title: `${hub.title} | Luckora`,
  description: hub.description,
  path: hub.path,
});

export default function PersonalityHubPage() {
  return (
    <>
      <SeoHubPage hub={hub} />
      <section className="site-shell hub-extra">
        <RelatedPersonalityTypes />
      </section>
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(personalityItemListSchema()) }}
        type="application/ld+json"
      />
    </>
  );
}
