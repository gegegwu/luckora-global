import { ExploreMore } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import { breadcrumbSchema, jsonLd, webPageSchema } from "@/lib/schema";

type StaticInfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export function StaticInfoPage({
  eyebrow,
  title,
  description,
  path,
  sections,
}: StaticInfoPageProps) {
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
        <a className="nav-cta" href="/tests/personality-test">
          Start Free Test
        </a>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        {sections.map((section) => (
          <section className="result-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className="result-section seo-links-section">
          <h2>Helpful Pages</h2>
          <div className="seo-link-grid">
            <a href="/about">
              <span>Company</span>
              <strong>About Luckora</strong>
              <p>Learn what Luckora is and how the platform is positioned.</p>
            </a>
            <a href="/contact">
              <span>Support</span>
              <strong>Contact</strong>
              <p>Find the correct way to contact Luckora for site questions.</p>
            </a>
            <a href="/privacy-policy">
              <span>Policy</span>
              <strong>Privacy Policy</strong>
              <p>Understand analytics, advertising, cookies and privacy choices.</p>
            </a>
            <a href="/disclaimer">
              <span>Safety</span>
              <strong>Disclaimer</strong>
              <p>Read the self-discovery scope and important limitations.</p>
            </a>
          </div>
        </section>

        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(webPageSchema({ title, description, path })),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: title, path },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
