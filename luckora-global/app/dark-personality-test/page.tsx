"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProgressBar } from "@/components/progress-bar";
import { StarField } from "@/components/star-field";
import {
  darkTraitQuestions,
  darkTraitScale,
  scoreDarkTraits,
} from "@/lib/dark-traits-test";

const faq = [
  ["Is this a clinical dark triad test?", "No. This is an educational self-reflection tool. It does not diagnose narcissism, psychopathy, Machiavellianism or any mental health condition."],
  ["How is the result calculated?", "The test groups 12 answers into four practical trait dimensions. Each dimension uses three items, including reverse-scored questions, and converts the average to a 0-100 reflection score."],
  ["Are my answers stored?", "No account is required. The answers are encoded in the page address so the result can be calculated in your browser. Luckora does not receive a named personality profile from this test."],
];

export default function DarkPersonalityTestPage() {
  return (
    <Suspense fallback={null}>
      <DarkPersonalityTestContent />
    </Suspense>
  );
}

function DarkPersonalityTestContent() {
  const searchParams = useSearchParams();
  const answers = parseAnswers(searchParams.get("a") || "");
  const started = searchParams.get("start") === "1" || answers.length > 0;
  const complete = answers.length === darkTraitQuestions.length;
  const current = Math.min(answers.length, darkTraitQuestions.length - 1);
  const question = darkTraitQuestions[current];

  function nextHref(value: number) {
    const nextAnswers = [...answers, value];
    return `/dark-personality-test?start=1&a=${nextAnswers.join("")}`;
  }

  return (
    <main className="site-shell test-shell shadow-test-shell">
      <StarField />
      <div className="cosmic-noise" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />

      <header className="nav">
        <a aria-label="Luckora home" className="logo" href="/">
          <span>L U C K</span><span className="orbital-o">O</span><span>R A</span>
        </a>
        <a className="nav-cta" href="/tests">All Tests</a>
      </header>

      <section className="test-stage">
        {complete ? (
          <DarkTraitResult answers={answers} />
        ) : started ? (
          <section className="question-card">
            <ProgressBar current={current + 1} total={darkTraitQuestions.length} />
            <span className="eyebrow">Shadow Trait Check</span>
            <h1>{question.text}</h1>
            <div className="shadow-scale-grid">
              {darkTraitScale.map((option) => (
                <a className="answer-option" href={nextHref(option.value)} key={option.value}>
                  <span>{option.value}</span>{option.label}
                </a>
              ))}
            </div>
          </section>
        ) : (
          <section className="question-card test-start-card">
            <span className="eyebrow">Dark Personality Test</span>
            <h1>Explore the traits you may hide, overuse or misunderstand.</h1>
            <p>
              This 12-question reflection maps four shadow-trait dimensions without
              diagnosing or labeling you. The result explains both the useful side
              of each pattern and where it can create friction.
            </p>
            <div className="test-benefits">
              <span>12 evidence-informed prompts</span>
              <span>Four scored dimensions</span>
              <span>No signup required</span>
              <span>Answers stay in your browser</span>
            </div>
            <a className="primary-action" href="/dark-personality-test?start=1"><span>Start the Test</span></a>
            <p className="test-note">For education and self reflection only. This is not a clinical assessment.</p>
          </section>
        )}
      </section>

      {!started ? (
        <article className="result-card test-landing shadow-explainer">
          <section className="result-section">
            <h2>What this test measures</h2>
            <p>
              Dark traits are ordinary human tendencies that can become helpful or
              harmful depending on intensity, context and self-awareness. Luckora
              measures strategic influence, recognition drive, emotional distance
              and bold impulse because each has a productive side and an overused side.
            </p>
          </section>
          <section className="result-section">
            <h2>How to read a score</h2>
            <p>
              A higher score is not a diagnosis or a verdict. It means you endorsed
              more statements connected with that pattern. Use the result to notice
              behavior, ask for feedback and choose one practice to test in daily life.
            </p>
          </section>
          <section className="result-section">
            <h2>Questions people ask</h2>
            <div className="faq-list">
              {faq.map(([questionText, answer]) => (
                <article key={questionText}><h3>{questionText}</h3><p>{answer}</p></article>
              ))}
            </div>
          </section>
        </article>
      ) : null}
    </main>
  );
}

function DarkTraitResult({ answers }: { answers: number[] }) {
  const scores = scoreDarkTraits(answers);
  const leading = scores[0];

  return (
    <section className="result-card">
      <span className="eyebrow">Your Shadow Trait Map</span>
      <h1>Your strongest signal is {leading.name}.</h1>
      <p>{leading.summary} Your score is a reflection prompt, not a fixed identity.</p>

      <div className="profile-score-list shadow-score-list">
        {scores.map((score) => (
          <article className="profile-score" key={score.trait}>
            <div><span>{score.name}</span><strong>{score.percentage}%</strong></div>
            <i><b style={{ width: `${score.percentage}%` }} /></i>
            <p>{score.summary}</p>
          </article>
        ))}
      </div>

      <section className="result-section">
        <h2>What your leading pattern can do well</h2>
        <p>{leading.strength}</p>
      </section>
      <section className="result-section">
        <h2>Where it can create friction</h2>
        <p>{leading.risk}</p>
      </section>
      <section className="result-section">
        <h2>A practice to try this week</h2>
        <p>{leading.practice}</p>
      </section>
      <section className="result-section">
        <h2>How this result was calculated</h2>
        <p>
          Each dimension combines three answers. Reverse-scored questions reduce
          agreement bias, and the average is converted to a 0-100 scale. This result
          is designed for self observation and conversation, not diagnosis.
        </p>
      </section>
      <div className="result-actions">
        <a className="primary-action" href="/dark-personality-test"><span>Retake Test</span></a>
        <a className="secondary-action" href="/methodology">Read Our Methodology</a>
      </div>
    </section>
  );
}

function parseAnswers(value: string) {
  return value
    .split("")
    .map(Number)
    .filter((answer) => Number.isInteger(answer) && answer >= 1 && answer <= 5)
    .slice(0, darkTraitQuestions.length);
}
