"use client";

import { motion } from "framer-motion";
import {
  talentLabels,
  type TalentResult,
  type TalentType,
} from "@/lib/hidden-talent-test";

function stars(value: number) {
  const count = Math.max(3, Math.min(5, Math.round(value)));
  return "★".repeat(count) + "☆".repeat(5 - count);
}

export function ResultCard({ result }: { result: TalentResult }) {
  const maxScore = Math.max(...Object.values(result.scores), 1);
  const personalityPath = `/personality/${result.slug}`;
  const personalityUrl = `https://luckora.online${personalityPath}`;
  const shareText = `I discovered my AI Personality Type: ${result.name}. ${result.emotionalLine}`;
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareUrl = encodeURIComponent(personalityUrl);

  async function shareResult() {
    if (navigator.share) {
      await navigator.share({
        title: `${result.name} | Luckora`,
        text: shareText,
        url: personalityUrl,
      });
      return;
    }

    await navigator.clipboard.writeText(`${shareText} ${personalityUrl}`);
  }

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="result-card"
      initial={false}
      transition={{ duration: 0.5 }}
    >
      <div className="result-hero">
        <div>
          <span className="eyebrow">Your Cosmic Identity</span>
          <h1>{result.name}</h1>
          <strong>{result.title}</strong>
          <p className="emotional-line">{result.emotionalLine}</p>
          <p>{result.summary}</p>
        </div>
        <div aria-hidden="true" className="identity-sigil">
          <span />
        </div>
      </div>

      <div className="talent-score-grid">
        {(Object.entries(result.scores) as Array<[TalentType, number]>).map(
          ([type, score]) => (
            <div className="talent-score" key={type}>
              <span>{talentLabels[type]}</span>
              <strong>{stars((score / maxScore) * 5)}</strong>
            </div>
          ),
        )}
      </div>

      <div className="result-section">
        <h2>Personality Profile</h2>
        <div className="profile-score-list">
          {result.profileScores.map((score) => (
            <div className="profile-score" key={score.label}>
              <div>
                <span>{score.label}</span>
                <strong>{score.value}%</strong>
              </div>
              <i>
                <b style={{ width: `${score.value}%` }} />
              </i>
            </div>
          ))}
        </div>
      </div>

      <div className="result-section">
        <h2>Hidden Strengths</h2>
        <div className="strength-list">
          {result.strengths.map((strength) => (
            <span key={strength}>{strength}</span>
          ))}
        </div>
      </div>

      <div className="result-section">
        <h2>Growth Challenge</h2>
        <p>{result.challenge}</p>
      </div>

      <div className="result-section">
        <h2>Career Alignment</h2>
        <p>{result.careerDirection}</p>
        <div className="career-list">
          {result.careers.map((career, index) => (
            <article className="career-card" key={career.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{career.title}</h3>
              <p>{career.why}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="result-section">
        <h2>Growth Path</h2>
        <div className="growth-path">
          {result.growthPath.map((item) => (
            <article key={item.term}>
              <span>{item.timeline}</span>
              <h3>{item.term}</h3>
              <p>{item.advice}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="result-section share-panel">
        <div className="share-card">
          <span>LUCKORA</span>
          <small className="share-kicker">I discovered my AI Personality Type</small>
          <h2>{result.name}</h2>
          <p>{result.emotionalLine}</p>
          <small>AI Self Discovery Platform</small>
        </div>
        <div>
          <h2>Share My Cosmic Identity</h2>
          <p>
            Copy your result or share it directly. This card is designed to feel
            like a small personal artifact, not a generic quiz result.
          </p>
          <div className="social-share">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedShareUrl}`}
              rel="noreferrer"
              target="_blank"
            >
              X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href={`https://www.pinterest.com/pin/create/button/?url=${encodedShareUrl}&description=${encodedShareText}`}
              rel="noreferrer"
              target="_blank"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      <div className="result-actions">
        <motion.button
          onClick={shareResult}
          type="button"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
        >
          Share My Cosmic Identity
        </motion.button>
        <a href={personalityPath}>Read Personality Page</a>
        <a href="/test">Retake Test</a>
      </div>
    </motion.section>
  );
}
