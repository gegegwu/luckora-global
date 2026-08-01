import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RelatedPersonalityTypes, RelatedTests } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import {
  getPersonalityBySlug,
  personalityProfiles,
} from "@/lib/personalities";
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLd,
  personalityArticleSchema,
} from "@/lib/schema";
import { createPersonalityMetadata } from "@/lib/seo";

type PersonalityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return personalityProfiles.map((profile) => ({
    slug: profile.slug,
  }));
}

export async function generateMetadata({
  params,
}: PersonalityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getPersonalityBySlug(slug);

  if (!profile) {
    return {};
  }

  return createPersonalityMetadata(profile);
}

export default async function PersonalityPage({ params }: PersonalityPageProps) {
  const { slug } = await params;
  const profile = getPersonalityBySlug(slug);

  if (!profile) {
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
        <a className="nav-cta" href="/test">
          Start Free Test
        </a>
      </header>

      <article className="result-card personality-article">
        <span className="eyebrow">Luckora Personality Type</span>
        <h1>{profile.name}</h1>
        <strong>{profile.title}</strong>
        <p className="emotional-line">{profile.emotionalLine}</p>
        <p>{profile.description}</p>

        <section className="result-section">
          <h2>Personality Overview</h2>
          <p>{profile.overview}</p>
        </section>

        <section className="result-section">
          <h2>Strengths</h2>
          <div className="strength-list">
            {profile.strengths.map((strength) => (
              <span key={strength}>{strength}</span>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>Challenges</h2>
          <p>{profile.challenge}</p>
        </section>

        <section className="result-section">
          <h2>Career Matches</h2>
          <div className="career-list">
            {profile.careers.map((career, index) => (
              <article className="career-card" key={career.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{career.title}</h3>
                <p>{career.why}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>FAQ</h2>
          <div className="faq-list">
            {profile.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="result-actions">
          <a href="/tests/personality-test">Take the Free AI Personality Test</a>
          <a href="/">Back to Luckora</a>
        </div>

        <RelatedTests />
        <RelatedPersonalityTypes currentSlug={profile.slug} />
      </article>

      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(profile.faq)) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(personalityArticleSchema(profile)),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Personality Types", path: "/personality" },
              { name: profile.name, path: `/personality/${profile.slug}` },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
