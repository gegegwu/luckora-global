"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { LoveLanguageQuestionCard } from "@/components/love-language-question-card";
import { StarField } from "@/components/star-field";
import { breadcrumbSchema, faqPageSchema, jsonLd } from "@/lib/schema";
import {
  loveLanguageQuestions,
  type LoveLanguageOption,
  type LoveLanguageType,
} from "@/lib/love-language-test";

const loveLanguageFaq = [
  {
    question: "What is a Love Language Test?",
    answer:
      "A Love Language Test is a self discovery tool that helps you reflect on how you express love, receive affection and feel emotionally connected.",
  },
  {
    question: "Is this a psychological diagnosis?",
    answer:
      "No. Luckora's Love Language Test is for self reflection and relationship awareness, not medical or psychological diagnosis.",
  },
  {
    question: "How many love language types are included?",
    answer:
      "This test maps answers across five love language types: Words of Affirmation, Quality Time, Acts of Service, Receiving Gifts and Physical Touch.",
  },
];

export default function LoveLanguageTestPage() {
  return (
    <Suspense fallback={null}>
      <LoveLanguageTestContent />
    </Suspense>
  );
}

function LoveLanguageTestContent() {
  const searchParams = useSearchParams();
  const locale = "en";
  const direction = "ltr";
  const answers = parseAnswers(searchParams.get("a") || "");
  const hasStarted = searchParams.get("start") === "1" || answers.length > 0;
  const step = Math.min(answers.length, loveLanguageQuestions.length - 1);
  const question = loveLanguageQuestions[step];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  function getNextHref(option: LoveLanguageOption) {
    const nextAnswers = [...answers, option.type];
    const encoded = encodeURIComponent(nextAnswers.join(","));

    if (nextAnswers.length === loveLanguageQuestions.length) {
      return `/love-language-test/report?a=${encoded}`;
    }

    return `/love-language-test?start=1&a=${encoded}`;
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
        <a className="nav-cta" href="/tests">
          All Tests
        </a>
      </header>

      <section className="test-stage">
        {hasStarted ? (
          <>
            <div className="test-intro">
              <span className="eyebrow">Love Language Test</span>
              <p>
                Answer with instinct. Luckora will map how you naturally give
                love, receive affection and connect with others.
              </p>
            </div>
            <LoveLanguageQuestionCard
              current={step + 1}
              getHref={getNextHref}
              question={question}
              total={loveLanguageQuestions.length}
            />
          </>
        ) : (
          <section className="question-card test-start-card love-start-card">
            <span className="eyebrow">Love Language Test</span>
            <h1>Discover how you give and receive love.</h1>
            <p>
              Take a free relationship self discovery test to understand your
              primary love language, connection style and emotional needs.
            </p>
            <div className="test-benefits">
              <span>Free</span>
              <span>Takes about 3 minutes</span>
              <span>No signup required</span>
              <span>Relationship self awareness</span>
            </div>
            <a className="primary-action" href="/love-language-test?start=1">
              <span>Start Love Language Test</span>
            </a>
          </section>
        )}
      </section>

      <script
        dangerouslySetInnerHTML={{ __html: jsonLd(faqPageSchema(loveLanguageFaq)) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Love Language Test", path: "/love-language-test" },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}

function parseAnswers(value: string): LoveLanguageType[] {
  const allowed: LoveLanguageType[] = [
    "words",
    "quality_time",
    "acts_service",
    "gifts",
    "physical_touch",
  ];

  if (!value) return [];

  return value
    .split(",")
    .filter((answer): answer is LoveLanguageType =>
      allowed.includes(answer as LoveLanguageType),
    )
    .slice(0, loveLanguageQuestions.length);
}
