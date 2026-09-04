import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ExploreMore,
  RelatedGuides,
  RelatedTests,
} from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import { TrackedTestLink } from "@/components/tracked-test-link";
import {
  breadcrumbSchema,
  guideArticleSchema,
  jsonLd,
} from "@/lib/schema";
import { getGuideBySlug, guideArticles } from "@/lib/guides";
import { createSeoMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return guideArticles.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createSeoMetadata({
    title: `${guide.title} | Luckora`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: [
      guide.title,
      "self discovery guide",
      "emotional patterns",
      "personality insight",
      "Luckora",
    ],
    type: "article",
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="site-shell test-shell">
      <StarField />
      <div className="cosmic-noise" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />

      <header className="nav">
        <a aria-label="Luckora home" className="logo" href="/">
          <span>L U C K</span>
          <span className="orbital-o">O</span>
          <span>R A</span>
        </a>
        <a className="nav-cta" href={guide.ctaPath}>
          {guide.ctaLabel}
        </a>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">{guide.eyebrow}</span>
        <h1>{guide.title}</h1>
        <p>{guide.description}</p>

        <div className="result-actions">
          <TrackedTestLink
            className="primary-action"
            href={guide.ctaPath}
            source={`guide_${guide.slug}_hero`}
          >
            <span>{guide.ctaLabel}</span>
          </TrackedTestLink>
          <a href="/guides">All Guides</a>
        </div>

        <section className="result-section">
          <h2>Why this pattern feels so intense</h2>
          <p>{guide.intro}</p>
        </section>

        {guide.sections.map((section) => (
          <section className="result-section long-seo-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            {section.bullets?.length ? (
              <div className="strength-list">
                {section.bullets.map((bullet) => (
                  <span key={bullet}>{bullet}</span>
                ))}
              </div>
            ) : null}
          </section>
        ))}

        <section className="result-section">
          <h2>Next step</h2>
          <p>
            If this guide sounds familiar, the next useful step is to understand
            how your personality style, emotional processing and hidden strengths
            connect together. That is where the Luckora test becomes more useful
            than a generic label.
          </p>
          <div className="result-actions">
            <TrackedTestLink
              className="primary-action"
              href={guide.ctaPath}
              source={`guide_${guide.slug}_footer`}
            >
              <span>{guide.ctaLabel}</span>
            </TrackedTestLink>
          </div>
        </section>

        <RelatedGuides currentSlug={guide.slug} />
        <RelatedTests />
        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            guideArticleSchema({
              title: guide.title,
              description: guide.description,
              path: `/guides/${guide.slug}`,
            }),
          ),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Guides", path: "/guides" },
              { name: guide.title, path: `/guides/${guide.slug}` },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
