import { personalityProfiles } from "@/lib/personalities";
import { testConfigs } from "@/lib/tests";

export function RelatedTests({ currentSlug }: { currentSlug?: string }) {
  const relatedTests = testConfigs
    .filter((test) => test.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="result-section seo-links-section">
      <h2>Related Tests</h2>
      <div className="seo-link-grid">
        {relatedTests.map((test) => (
          <a href={`/tests/${test.slug}`} key={test.slug}>
            <span>{test.status === "available" ? "Available" : "Coming Soon"}</span>
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
        <a href="/careers">
          <span>Hub</span>
          <strong>Careers</strong>
          <p>Explore AI-era career direction and future work alignment.</p>
        </a>
        <a href="/strengths">
          <span>Hub</span>
          <strong>Strengths</strong>
          <p>Understand hidden strengths, natural abilities and growth signals.</p>
        </a>
        <a href="/guides">
          <span>Hub</span>
          <strong>Guides</strong>
          <p>Read self discovery guides designed for search and AI answers.</p>
        </a>
        <a href="/reports">
          <span>Hub</span>
          <strong>Reports</strong>
          <p>Preview future AI deep personality report experiences.</p>
        </a>
      </div>
    </section>
  );
}
