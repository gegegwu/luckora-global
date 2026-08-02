"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { CosmicOrb } from "@/components/cosmic-orb";
import { StarField } from "@/components/star-field";
import { trackHomepageView, trackStartTestClick } from "@/lib/analytics";
import { getDictionary } from "@/lib/i18n";
import { jsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

const seoEntryLinks = [
  {
    href: "/mbti-test",
    label: "MBTI Test",
    text: "Explore MBTI-style personality patterns with Luckora.",
  },
  {
    href: "/love-personality-test",
    label: "Love Personality Test",
    text: "Understand relationship style and emotional patterns.",
  },
  {
    href: "/career-personality-test",
    label: "Career Personality Test",
    text: "Connect personality signals with career direction.",
  },
  {
    href: "/attachment-style-test",
    label: "Attachment Style Test",
    text: "Reflect on emotional needs and relationship patterns.",
  },
  {
    href: "/introvert-test",
    label: "Introvert Test",
    text: "Discover your social energy and introvert traits.",
  },
  {
    href: "/enneagram-test",
    label: "Enneagram Test",
    text: "Reflect on core motivations and personality patterns.",
  },
  {
    href: "/emotional-intelligence-test",
    label: "Emotional Intelligence Test",
    text: "Understand EQ, communication and relationship signals.",
  },
  {
    href: "/iq-test",
    label: "IQ Test",
    text: "Explore cognitive strengths without professional score claims.",
  },
  {
    href: "/leadership-test",
    label: "Leadership Test",
    text: "Discover decision style, teamwork and leadership patterns.",
  },
  {
    href: "/dark-personality-test",
    label: "Dark Personality Test",
    text: "Explore complex traits without diagnosis or negative labels.",
  },
  {
    href: "/personality-test-for-students",
    label: "Personality Test for Students",
    text: "Explore strengths, learning style and future direction.",
  },
  {
    href: "/personality-test-for-women",
    label: "Personality Test for Women",
    text: "Reflect on identity, strengths and personal growth.",
  },
  {
    href: "/personality-test-for-couples",
    label: "Personality Test for Couples",
    text: "Use personality insight to understand relationship patterns.",
  },
  {
    href: "/free-personality-test-online",
    label: "Free Personality Test Online",
    text: "Start a free online AI personality discovery experience.",
  },
  {
    href: "/ai-personality-quiz",
    label: "AI Personality Quiz",
    text: "Discover hidden traits with an AI-powered quiz.",
  },
];

const discoveryPaths = [
  {
    title: "Love Language Test",
    icon: "❤️",
    description: "Understand your emotional connection style.",
    href: "/love-language-test",
    source: "homepage_discovery_love_language",
    accent: "love",
  },
];

const howSteps = [
  {
    label: "Choose",
    title: "Pick a discovery path",
    text: "Start with personality, love language or future self discovery tests.",
  },
  {
    label: "Answer",
    title: "Follow short instinctive questions",
    text: "Each test is designed to feel lightweight, reflective and easy to finish.",
  },
  {
    label: "Reflect",
    title: "Read your AI-style report",
    text: "Get a clear result with strengths, patterns and next-step guidance.",
  },
];

export default function Home() {
  const locale = "en";
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const direction = "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  useEffect(() => {
    trackHomepageView();
  }, []);

  return (
    <main className="site-shell" dir={direction}>
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

        <nav aria-label="Primary navigation" className="nav-links">
          <a href="/tests">{dictionary.nav.tests}</a>
          <a href="#vision">{dictionary.nav.vision}</a>
          <a href="#insights">{dictionary.nav.insights}</a>
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cta"
            href="/tests/personality-test"
            onClick={() => trackStartTestClick("homepage_nav")}
          >
            {dictionary.nav.start}
          </a>
        </div>
      </header>

      <section className="hero">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="hero-copy"
          initial={false}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow">{dictionary.hero.eyebrow}</span>
          <h1>{dictionary.hero.title}</h1>
          <p>{dictionary.hero.subtitle}</p>

          <div className="hero-actions">
            <motion.a
              className="primary-action"
              href="/test"
              onClick={() => trackStartTestClick("homepage_hero_personality")}
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start Personality Test</span>
            </motion.a>
            <a className="secondary-action" href="#vision">
              {dictionary.hero.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="hero-visual"
          initial={false}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <CosmicOrb
            label={dictionary.hero.orbLabel}
            signal={dictionary.hero.signal}
          />
        </motion.div>
      </section>

      <section className="discovery-paths-section" id="tests">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="discovery-path-copy"
          initial={false}
          transition={{ duration: 0.75 }}
        >
          <span className="eyebrow">Discovery Paths</span>
          <h2>Continue into the language of connection.</h2>
          <p>
            After personality, explore how you give love, receive affection and
            build emotional closeness.
          </p>
          <motion.a
            className="primary-action discovery-path-action"
            href={discoveryPaths[0].href}
            onClick={() => trackStartTestClick(discoveryPaths[0].source)}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Enter This Path</span>
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="discovery-path-visual"
          initial={false}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="love-universe" aria-hidden="true">
            <div className="love-heart" />
            <div className="love-orbit love-orbit-a" />
            <div className="love-orbit love-orbit-b" />
            <div className="love-pulse" />
          </div>
          <div className="orb-caption love-caption">
            <span>Heart Signal</span>
            <p>Understand the quiet patterns of emotional connection.</p>
          </div>
        </motion.div>
      </section>

      <section className="how-section">
        <div className="section-heading compact">
          <span className="eyebrow">How Luckora Works</span>
          <h2>A simple path from question to insight</h2>
        </div>
        <div className="how-grid">
          {howSteps.map((step, index) => (
            <article key={step.title}>
              <span>{String(index + 1).padStart(2, "0")} / {step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-grid" id="vision">
        {dictionary.cards.map((card, index) => (
          <motion.article
            className="feature-card"
            initial={false}
            key={card.title}
            transition={{ delay: 0.12 * index, duration: 0.52 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="card-index">0{index + 1}</div>
            <h2>{card.title}</h2>
            <strong>{card.subtitle}</strong>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </section>

      <section className="seo-section">
        <div>
          <span className="eyebrow">Luckora GEO / SEO Foundation</span>
          <h2>{dictionary.seo.title}</h2>
        </div>
        <div>
          <p>{dictionary.seo.body}</p>
          <div className="seo-link-grid home-seo-link-grid">
            {seoEntryLinks.slice(0, 6).map((link) => (
              <a href={link.href} key={link.href}>
                <span>SEO Guide</span>
                <strong>{link.label}</strong>
                <p>{link.text}</p>
              </a>
            ))}
          </div>
          <a className="seo-more-link" href="/tests">
            Explore all Luckora tests
          </a>
        </div>
      </section>

      <section className="insights-section" id="insights">
        <span className="eyebrow">Vision / Insights</span>
        <h2>Built for long-term self discovery.</h2>
        <p>
          Luckora will keep expanding from personality and relationship tests
          into strengths, career direction and future AI-powered reports.
        </p>
        <a href="/guides">Explore self discovery guides</a>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(websiteSchema(dictionary.meta.description)),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(organizationSchema()),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
