"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionCard } from "@/components/question-card";
import { StarField } from "@/components/star-field";
import { trackTestStarted } from "@/lib/analytics";
import {
  talentQuestions,
  type TalentOption,
  type TalentType,
} from "@/lib/hidden-talent-test";

export default function TestPage() {
  return (
    <Suspense fallback={null}>
      <TestContent />
    </Suspense>
  );
}

function TestContent() {
  const searchParams = useSearchParams();
  const locale = "en";
  const direction = "ltr";
  const answers = parseAnswers(searchParams.get("a") || "");
  const hasStarted = searchParams.get("start") === "1" || answers.length > 0;
  const step = Math.min(answers.length, talentQuestions.length - 1);
  const question = talentQuestions[step];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  useEffect(() => {
    if (hasStarted && answers.length === 0) {
      trackTestStarted();
    }
  }, [answers.length, hasStarted]);

  function getNextHref(option: TalentOption) {
    const nextAnswers = [...answers, option.type];
    const encoded = encodeURIComponent(nextAnswers.join(","));

    if (nextAnswers.length === talentQuestions.length) {
      return `/report?a=${encoded}`;
    }

    return `/test?start=1&a=${encoded}`;
  }

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

      <section className="test-stage">
        {hasStarted ? (
          <>
            <div className="test-intro">
              <span className="eyebrow">AI Personality Discovery</span>
              <p>
                Answer with instinct. Luckora will map your strongest hidden
                talent signal across Creator, Analyst, Connector and Leader.
              </p>
            </div>
            <QuestionCard
              current={step + 1}
              getHref={getNextHref}
              question={question}
              total={talentQuestions.length}
            />
          </>
        ) : (
          <section className="question-card test-start-card">
            <span className="eyebrow">AI Personality Discovery</span>
            <h1>Discover your personality profile.</h1>
            <p>
              Discover your personality profile, hidden strengths and growth
              potential through a short AI-powered self discovery test.
            </p>
            <div className="test-benefits">
              <span>Free</span>
              <span>Takes about 2 minutes</span>
              <span>No signup required</span>
              <span>AI-powered insights</span>
            </div>
            <a
              className="primary-action"
              href="/test?start=1"
            >
              <span>Start Discovery</span>
            </a>
          </section>
        )}
      </section>
    </main>
  );
}

function parseAnswers(value: string): TalentType[] {
  const allowed: TalentType[] = ["creator", "analyst", "connector", "leader"];

  if (!value) return [];

  return value
    .split(",")
    .filter((answer): answer is TalentType =>
      allowed.includes(answer as TalentType),
    )
    .slice(0, talentQuestions.length);
}
