"use client";

import { StarField } from "@/components/star-field";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="site-shell test-shell">
      <StarField />
      <div className="cosmic-noise" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <section className="question-card test-start-card">
        <span className="eyebrow">Signal Interrupted</span>
        <h1>Something drifted off course.</h1>
        <p>
          Luckora could not load this view correctly. Try again or return to the
          test hub.
        </p>
        <div className="result-actions">
          <button onClick={reset} type="button">
            Try Again
          </button>
          <a href="/tests">Explore Tests</a>
        </div>
      </section>
    </main>
  );
}
