"use client";

import { motion } from "framer-motion";
import {
  loveLanguageLabels,
  type LoveLanguageResult,
  type LoveLanguageType,
} from "@/lib/love-language-test";

function percent(score: number, total: number) {
  return Math.round((score / total) * 100);
}

export function LoveLanguageResultCard({
  result,
  total,
}: {
  result: LoveLanguageResult;
  total: number;
}) {
  const shareUrl = `https://luckora.online/love-language-test/report`;
  const shareText = `I discovered my Love Language: ${result.name}. ${result.meaning}`;
  const encodedShareText = encodeURIComponent(shareText);
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const sortedScores = (Object.entries(result.scores) as Array<
    [LoveLanguageType, number]
  >).sort((a, b) => b[1] - a[1]);

  async function shareResult() {
    if (navigator.share) {
      await navigator.share({
        title: `${result.name} | Luckora Love Language Test`,
        text: shareText,
        url: shareUrl,
      });
      return;
    }

    await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
  }

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="result-card love-result-card"
      initial={false}
      transition={{ duration: 0.5 }}
    >
      <div className="result-hero">
        <div>
          <span className="eyebrow love-eyebrow">❤️ Your Emotional Connection Style</span>
          <h1>{result.name}</h1>
          <div className="love-result-tags">
            <span>Your Love Language</span>
            <span>Your Love Style</span>
          </div>
          <strong>{result.title}</strong>
          <p className="emotional-line">{result.meaning}</p>
        </div>
        <div aria-hidden="true" className="identity-sigil love-sigil">
          <span />
        </div>
      </div>

      <div className="result-section">
        <h2>Your Love Style</h2>
        <div className="profile-score-list">
          {sortedScores.map(
            ([type, score]) => {
              const value = percent(score, total);
              const isPrimary = type === result.type;

              return (
                <div
                  className={`profile-score${isPrimary ? " love-primary-score" : ""}`}
                  key={type}
                >
                  <div>
                    <span>
                      {isPrimary ? "❤️ " : ""}
                      {loveLanguageLabels[type]}
                    </span>
                    <strong>{value}%</strong>
                  </div>
                  <i>
                    <b style={{ width: `${value}%` }} />
                  </i>
                </div>
              );
            },
          )}
        </div>
      </div>

      <div className="result-section">
        <h2>♡ How You Give Love</h2>
        <p>{result.giveLove}</p>
      </div>

      <div className="result-section">
        <h2>♡ How You Receive Love</h2>
        <p>{result.receiveLove}</p>
      </div>

      <div className="result-section">
        <h2>✦ Relationship Strengths</h2>
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
        <h2>Connection Tips</h2>
        <div className="growth-path">
          {result.tips.map((tip, index) => (
            <article key={tip}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>Practice</h3>
              <p>{tip}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="result-section share-panel">
        <div className="share-card">
          <span>LUCKORA</span>
          <small className="share-kicker">I discovered my Love Language</small>
          <h2>{result.name}</h2>
          <p>{result.meaning}</p>
          <small>AI Self Discovery Platform</small>
        </div>
        <div>
          <h2>Share My Love Language</h2>
          <p>
            Share your result as a starting point for better communication,
            care and relationship self awareness.
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

      <div className="result-section love-report-upgrade">
        <span>Future Premium Report</span>
        <h2>Want a deeper understanding of your relationship style?</h2>
        <p>
          Unlock your full AI Love Report to explore emotional patterns,
          relationship needs, communication habits and growth prompts in more
          depth.
        </p>
        <a aria-disabled="true" href="#love-report-coming-soon">
          Unlock your full AI Love Report
        </a>
      </div>

      <div className="result-actions">
        <motion.button
          onClick={shareResult}
          type="button"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
        >
          Share My Love Language
        </motion.button>
        <a href="/love-language-test">Retake Love Language Test</a>
        <a href="/tests">Explore More Tests</a>
      </div>
    </motion.section>
  );
}
