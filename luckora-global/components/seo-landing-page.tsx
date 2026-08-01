import { ExploreMore } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import { TrackedTestLink } from "@/components/tracked-test-link";
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
  webPageSchema,
} from "@/lib/schema";
import type { SeoLandingPage as SeoLandingPageData } from "@/lib/seo-landing-pages";

export function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
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
        <TrackedTestLink
          className="nav-cta"
          href={page.ctaPath}
          source={`${page.path}_nav`}
        >
          {page.ctaLabel}
        </TrackedTestLink>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>

        <div className="result-actions">
          <TrackedTestLink
            className="primary-action"
            href={page.ctaPath}
            source={`${page.path}_hero`}
          >
            <span>{page.ctaLabel}</span>
          </TrackedTestLink>
          <a className="secondary-action" href="/tests">
            Explore All Tests
          </a>
        </div>

        {page.sections.map((section) => (
          <section className="result-section long-seo-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className="result-section">
          <h2>FAQ</h2>
          <div className="faq-list">
            {page.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title: page.metadataTitle,
              description: page.description,
              path: page.path,
            }),
          ),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(page.faq)) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: page.title, path: page.path },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
