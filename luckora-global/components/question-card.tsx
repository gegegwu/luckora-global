"use client";

import { motion } from "framer-motion";
import { ProgressBar } from "@/components/progress-bar";
import type {
  TalentOption,
  TalentQuestion,
} from "@/lib/hidden-talent-test";

export function QuestionCard({
  current,
  total,
  question,
  getHref,
}: {
  current: number;
  total: number;
  question: TalentQuestion;
  getHref: (option: TalentOption) => string;
}) {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="question-card"
      initial={false}
      key={question.id}
      transition={{ duration: 0.34 }}
    >
      <ProgressBar current={current} total={total} />
      <h1>{question.text}</h1>
      <div className="answer-grid">
        {question.options.map((option) => (
          <a
            className="answer-option"
            href={getHref(option)}
            key={option.code}
          >
            <span>{option.code}</span>
            {option.label}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
