import { ExploreMore, RelatedTests } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import type { SeoHub } from "@/lib/seo-routes";

export function SeoHubPage({ hub }: { hub: SeoHub }) {
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
        <a className="nav-cta" href={hub.ctaPath}>
          {hub.ctaLabel}
        </a>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">{hub.eyebrow}</span>
        <h1>{hub.title}</h1>
        <p>{hub.description}</p>

        <div className="result-actions">
          <a className="primary-action" href={hub.ctaPath}>
            <span>{hub.ctaLabel}</span>
          </a>
          <a href="/tests">All Tests</a>
        </div>

        <RelatedTests />
        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: hub.title, path: hub.path },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
