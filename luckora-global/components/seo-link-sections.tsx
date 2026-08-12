import { personalityProfiles } from "@/lib/personalities";
import { testConfigs } from "@/lib/tests";

export function RelatedTests({ currentSlug }: { currentSlug?: string }) {
  const relatedTests = testConfigs
    .filter(
      (test) => test.status === "available" && test.slug !== currentSlug,
    )
    .slice(0, 4);

  return (
    <section className="result-section seo-links-section">
      <h2>Related Tests</h2>
      <div className="seo-link-grid">
        {relatedTests.map((test) => (
          <a href={`/tests/${test.slug}`} key={test.slug}>
            <span>Available</span>
            <strong>{test.title}</strong>
            <p>{test.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function RelatedPersonalityTypes({
  currentSlug,
}: {
  currentSlug?: string;
}) {
  const relatedTypes = personalityProfiles
    .filter((profile) => profile.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="result-section seo-links-section">
      <h2>Related Personality Types</h2>
      <div className="seo-link-grid">
        {relatedTypes.map((profile) => (
          <a href={`/personality/${profile.slug}`} key={profile.slug}>
            <span>Personality Type</span>
            <strong>{profile.name}</strong>
            <p>{profile.emotionalLine}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function ExploreMore() {
  return (
    <section className="result-section seo-links-section">
      <h2>Explore More</h2>
      <div className="seo-link-grid">
        <a href="/tests/personality-test">
          <span>Test</span>
          <strong>Personality Test</strong>
          <p>Discover your traits, hidden strengths and growth direction.</p>
        </a>
        <a href="/love-language-test">
          <span>Test</span>
          <strong>Love Language Test</strong>
          <p>Understand how you give love, receive affection and connect.</p>
        </a>
        <a href="/personality-types">
          <span>Hub</span>
          <strong>Personality Types</strong>
          <p>Learn how Luckora explains recurring personality patterns.</p>
        </a>
        <a href="/guides">
          <span>Hub</span>
          <strong>Guides</strong>
          <p>Read self discovery guides designed for search and AI answers.</p>
        </a>
      </div>
    </section>
  );
}
