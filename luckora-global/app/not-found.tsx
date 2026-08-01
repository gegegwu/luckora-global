import { StarField } from "@/components/star-field";

export default function NotFound() {
  return (
    <main className="site-shell test-shell">
      <StarField />
      <div className="cosmic-noise" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <section className="question-card test-start-card">
        <span className="eyebrow">Lost Signal</span>
        <h1>This part of the universe is still forming.</h1>
        <p>
          The page you are looking for does not exist yet. Return to Luckora and
          continue your self discovery journey.
        </p>
        <a className="primary-action" href="/tests">
          <span>Explore Tests</span>
        </a>
      </section>
    </main>
  );
}
