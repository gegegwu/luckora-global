"use client";

import { useEffect, useState } from "react";
import { LoveLanguageResultCard } from "@/components/love-language-result-card";
import { StarField } from "@/components/star-field";
import {
  calculateLoveLanguageResult,
  loveLanguageQuestions,
  loveLanguageStorageKey,
  type LoveLanguageResult,
  type LoveLanguageType,
} from "@/lib/love-language-test";

export default function LoveLanguageReportPage() {
  const [result, setResult] = useState<LoveLanguageResult | null>(null);
  const locale = "en";
  const direction = "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  useEffect(() => {
    const storedResult = window.localStorage.getItem(loveLanguageStorageKey);
    const queryAnswers = new URLSearchParams(window.location.search).get("a");
    const answers = parseAnswers(queryAnswers || window.location.hash);

    if (answers.length === loveLanguageQuestions.length) {
      const calculatedResult = calculateLoveLanguageResult(answers);
      window.localStorage.setItem(
        loveLanguageStorageKey,
        JSON.stringify(calculatedResult),
      );
      setResult(calculatedResult);
      return;
    }

    if (storedResult) {
      setResult(JSON.parse(storedResult) as LoveLanguageResult);
    }
  }, []);

  return (
    <main className="site-shell test-shell" dir={direction}>
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

      <section className="report-stage">
        {result ? (
          <LoveLanguageResultCard
            result={result}
            total={loveLanguageQuestions.length}
          />
        ) : (
          <div className="question-card">
            <span className="eyebrow">Your Love Language</span>
            <h1>Your love language result is waiting.</h1>
            <p>
              Complete the Love Language Test first, then Luckora will show how
              you give love, receive affection and connect with others.
            </p>
            <a className="primary-action" href="/love-language-test">
              <span>Start Love Language Test</span>
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

function parseAnswers(source: string): LoveLanguageType[] {
  const allowed: LoveLanguageType[] = [
    "words",
    "quality_time",
    "acts_service",
    "gifts",
    "physical_touch",
  ];
  const value = source.startsWith("#a=")
    ? decodeURIComponent(source.slice(3))
    : decodeURIComponent(source);

  if (!value) return [];

  return value
    .split(",")
    .filter((answer): answer is LoveLanguageType =>
      allowed.includes(answer as LoveLanguageType),
    )
    .slice(0, loveLanguageQuestions.length);
}
