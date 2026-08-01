import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExploreMore, RelatedTests } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
  webApplicationSchema,
} from "@/lib/schema";
import { createTestMetadata } from "@/lib/seo";
import { getTestBySlug, testConfigs } from "@/lib/tests";

type TestLandingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return testConfigs.map((test) => ({
    slug: test.slug,
  }));
}

export async function generateMetadata({
  params,
}: TestLandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    return {};
  }

  return createTestMetadata(test);
}

export default async function TestLandingPage({
  params,
}: TestLandingPageProps) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
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
        <a className="nav-cta" href="/tests">
          All Tests
        </a>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">
          {test.status === "available" ? "Free AI Test" : "Coming Soon"}
        </span>
        <h1>{test.title}</h1>
        <strong>{test.seoTitle.replace(" | Luckora", "")}</strong>
        <p>{test.description}</p>

        <div className="result-actions">
          {test.status === "available" && test.startPath ? (
            <a className="primary-action" href={test.startPath}>
              <span>Start Free Test</span>
            </a>
          ) : (
            <a className="secondary-action" href="/tests">
              Back to Tests
            </a>
          )}
        </div>

        <section className="result-section">
          <h2>What is this test?</h2>
          <p>{test.whatIsThis}</p>
        </section>

        <section className="result-section">
          <h2>How it works</h2>
          <div className="process-list">
            {test.howItWorks.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>What you will discover</h2>
          <div className="strength-list">
            {test.discoveries.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        {test.seoSections?.map((section) => (
          <section className="result-section long-seo-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        <section className="result-section">
          <h2>FAQ</h2>
          <div className="faq-list">
            {test.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <RelatedTests currentSlug={test.slug} />
        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(test.faq)) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(webApplicationSchema(test)) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tests", path: "/tests" },
              { name: test.title, path: `/tests/${test.slug}` },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
