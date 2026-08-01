import type { Metadata } from "next";
import { ExploreMore, RelatedPersonalityTypes } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import {
  breadcrumbSchema,
  jsonLd,
  testsItemListSchema,
} from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";
import { testConfigs } from "@/lib/tests";

export const metadata: Metadata = createSeoMetadata({
  title: "AI Self Discovery Tests | Luckora",
  description:
    "Explore Luckora AI self discovery tests for personality, strengths, career direction and hidden potential.",
  path: "/tests",
  keywords: [
    "AI self discovery tests",
    "AI personality test",
    "AI career test",
    "AI strengths test",
    "Luckora tests",
  ],
});

export default function TestsPage() {
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

      <section className="tests-hero">
        <span className="eyebrow">AI Self Discovery Tests</span>
        <h1>Choose your next self discovery journey.</h1>
        <p>
          Discover your personality, strengths, career direction and hidden
          potential with AI-powered self discovery tests.
        </p>
      </section>

      <section aria-label="Luckora tests" className="tests-grid">
        {testConfigs.map((test) => (
          <article className="test-card" key={test.id}>
            <div className="test-card-top">
              <span className="test-icon">{test.icon}</span>
              <span className={`test-status ${test.status}`}>
                {test.status === "available" ? "Available" : "Coming Soon"}
              </span>
            </div>
            <h2>{test.title}</h2>
            <p>{test.description}</p>
            <a
              aria-disabled={test.status !== "available"}
              className="test-card-link"
              href={`/tests/${test.slug}`}
            >
              {test.status === "available" ? "Explore Test" : "Preview"}
            </a>
          </article>
        ))}
      </section>

      <section className="test-landing">
        <RelatedPersonalityTypes />
        <ExploreMore />
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(testsItemListSchema()) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Tests", path: "/tests" },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
