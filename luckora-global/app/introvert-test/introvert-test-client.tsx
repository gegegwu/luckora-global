"use client";

import { useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { StarField } from "@/components/star-field";
import {
  introvertQuestions,
  introvertScale,
  scoreIntrovertTest,
} from "@/lib/introvert-test";

export function IntrovertTestClient() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const complete = answers.length === introvertQuestions.length;
  const current = Math.min(answers.length, introvertQuestions.length - 1);
  const question = introvertQuestions[current];

  function answer(value: number) {
    setAnswers((currentAnswers) => [...currentAnswers, value]);
  }

  function restart() {
    setAnswers([]);
    setStarted(false);
  }

  return (
    <main className="site-shell test-shell introvert-test-shell">
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
          <IntrovertResult answers={answers} onRestart={restart} />
        ) : started ? (
          <section className="question-card">
            <ProgressBar current={current + 1} total={introvertQuestions.length} />
            <span className="eyebrow">Social Energy Check</span>
            <h1>{question.text}</h1>
            <div className="shadow-scale-grid">
              {introvertScale.map((option) => (
                <button className="answer-option" key={option.value} onClick={() => answer(option.value)} type="button">
                  <span>{option.value}</span>{option.label}
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="question-card test-start-card">
            <span className="eyebrow">Introvert Test</span>
            <h1>Are you an introvert, or are you simply drained?</h1>
            <p>
              This free 12-question test separates three signals that are easy to
              confuse: preference for solitude, social depletion and desire for
              connection. Get a practical result without forcing yourself into a label.
            </p>
            <div className="test-benefits">
              <span>12 behavior-based prompts</span>
              <span>Three transparent scores</span>
              <span>No signup required</span>
              <span>No answers submitted</span>
            </div>
            <button className="primary-action" onClick={() => setStarted(true)} type="button"><span>Start the Free Test</span></button>
            <p className="test-note">A reflection tool, not a mental health or personality diagnosis.</p>
          </section>
        )}
      </section>

      {!started ? <IntrovertExplainer /> : null}
    </main>
  );
}

function IntrovertResult({ answers, onRestart }: { answers: number[]; onRestart: () => void }) {
  const { scores, result } = scoreIntrovertTest(answers);
  const scoreRows = [
    ["Solitude preference", scores.solitude],
    ["Social depletion", scores.depletion],
    ["Desire for connection", scores.connection],
  ] as const;

  return (
    <section className="result-card">
      <span className="eyebrow">Your Social Energy Pattern</span>
      <h1>{result.name}</h1>
      <p>{result.summary}</p>

      <div className="profile-score-list shadow-score-list">
        {scoreRows.map(([label, score]) => (
          <article className="profile-score" key={label}>
            <div><span>{label}</span><strong>{score}%</strong></div>
            <i><b style={{ width: `${score}%` }} /></i>
          </article>
        ))}
      </div>

      <section className="result-section">
        <h2>What your answers suggest</h2>
        <div className="strength-list">
          {result.signals.map((signal) => <span key={signal}>{signal}</span>)}
        </div>
      </section>
      <section className="result-section">
        <h2>One useful experiment</h2>
        <p>{result.nextStep}</p>
      </section>
      <section className="result-section">
        <h2>How the scores work</h2>
        <p>
          Four questions contribute to each dimension. Two prompts are reverse
          scored to reduce automatic agreement, and each average is converted to
          a 0-100 reflection score. The result describes this response pattern,
          not a permanent identity.
        </p>
      </section>
      <div className="result-actions">
        <button className="primary-action" onClick={onRestart} type="button"><span>Retake Test</span></button>
        <a className="secondary-action" href="/guides/am-i-an-introvert-or-just-drained">Read the Guide</a>
        <a className="secondary-action" href="/methodology">Our Methodology</a>
      </div>
    </section>
  );
}

function IntrovertExplainer() {
  const faq = [
    ["What is the difference between introversion and social exhaustion?", "Introversion is a relatively stable preference for lower-stimulation settings and time alone. Social exhaustion can affect anyone when stress, noise, masking or too many demands use up their capacity."],
    ["Can an introvert enjoy people?", "Yes. Introversion describes how someone tends to manage energy, not whether they like people. Many introverts value close relationships and meaningful conversation."],
    ["Is this a clinical assessment?", "No. It is an educational reflection tool. Persistent withdrawal, anxiety, low mood or exhaustion may deserve support from a qualified professional."],
  ];

  return (
    <article className="result-card test-landing shadow-explainer">
      <section className="result-section">
        <h2>Introversion and depletion are not the same thing</h2>
        <p>
          Introversion usually means that quieter settings and time alone help you
          reset. Depletion is a state: even enjoyable interaction can feel difficult
          when stress, overstimulation or emotional labor has already used your capacity.
          Looking at both signals creates a more useful answer than a single label.
        </p>
      </section>
      <section className="result-section">
        <h2>What this test measures</h2>
        <p>
          The questions compare your preference for solitude, the speed at which
          social stimulation drains you and whether connection still feels appealing
          when you are rested. Your result includes all three scores so you can see
          the pattern behind the headline.
        </p>
      </section>
      <section className="result-section">
        <h2>Common questions</h2>
        <div className="faq-list">
          {faq.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
        </div>
      </section>
    </article>
  );
}
