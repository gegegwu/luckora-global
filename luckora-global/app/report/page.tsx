"use client";

import { useEffect, useState } from "react";
import { ResultCard } from "@/components/result-card";
import { StarField } from "@/components/star-field";
import { trackReportViewed, trackTestCompleted } from "@/lib/analytics";
import {
  calculateTalentResult,
  resultStorageKey,
  type TalentResult,
  talentQuestions,
  type TalentType,
} from "@/lib/hidden-talent-test";

export default function ReportPage() {
  const [result, setResult] = useState<TalentResult | null>(null);
  const locale = "en";
  const direction = "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  useEffect(() => {
    const storedResult = window.localStorage.getItem(resultStorageKey);
    const queryAnswers = new URLSearchParams(window.location.search).get("a");
    const answers = parseAnswers(queryAnswers || window.location.hash);

    if (answers.length === talentQuestions.length) {
      const calculatedResult = calculateTalentResult(answers);
      window.localStorage.setItem(
        resultStorageKey,
        JSON.stringify(calculatedResult),
      );
      trackTestCompleted(calculatedResult.slug, calculatedResult.type);
      setResult(calculatedResult);
      return;
    }

    if (storedResult) {
      setResult(JSON.parse(storedResult) as TalentResult);
    }
  }, []);

  useEffect(() => {
    if (!result) {
      return;
    }

    trackReportViewed(result.slug, result.type);
  }, [result]);

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
      </header>

      <section className="report-stage">
        {result ? (
          <ResultCard result={result} />
        ) : (
          <div className="question-card">
            <span className="eyebrow">Your Cosmic Identity</span>
            <h1>Your report is waiting to be created</h1>
            <p>
              Complete the Hidden Talent Test first, then Luckora will generate
              your first self discovery report.
            </p>
            <a className="primary-action" href="/test">
              <span>Start Hidden Talent Test</span>
            </a>
          </div>
        )}
      </section>
    </main>
  );
}

function parseAnswers(source: string): TalentType[] {
  const allowed: TalentType[] = ["creator", "analyst", "connector", "leader"];
  const value = source.startsWith("#a=")
    ? decodeURIComponent(source.slice(3))
    : decodeURIComponent(source);

  if (!value) return [];

  return value
    .split(",")
    .filter((answer): answer is TalentType =>
      allowed.includes(answer as TalentType),
    )
    .slice(0, talentQuestions.length);
}
