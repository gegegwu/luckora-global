"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { CosmicOrb } from "@/components/cosmic-orb";
import { StarField } from "@/components/star-field";
import { trackHomepageView, trackStartTestClick } from "@/lib/analytics";
import { guideArticles } from "@/lib/guides";
import { getDictionary } from "@/lib/i18n";
import { jsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

const priorityGuideSlugs = [
  "free-ai-personality-test-online",
  "why-do-i-overthink-everything",
  "why-do-i-overthink-relationships",
  "why-do-i-feel-emotionally-drained",
  "personality-test-for-career-direction",
  "how-to-stop-overthinking-at-night",
  "how-to-choose-a-personality-test",
];

const seoEntryLinks = priorityGuideSlugs
  .map((slug) => guideArticles.find((guide) => guide.slug === slug))
  .filter((guide): guide is (typeof guideArticles)[number] => Boolean(guide))
  .map((guide) => ({
    href: `/guides/${guide.slug}`,
    label: guide.title,
    text: guide.description,
  }));

const seoUtilityLinks = [
  {
    href: "/introvert-test",
    label: "Introvert Test",
    text: "See whether you prefer solitude or are simply socially drained.",
  },
  {
    href: "/dark-personality-test",
    label: "Dark Personality Test",
    text: "Map four shadow-trait dimensions with transparent scoring.",
  },
  {
    href: "/ai-personality-test",
    label: "AI Personality Test",
    text: "Understand your traits, strengths and growth direction.",
  },
  {
    href: "/free-personality-test",
    label: "Free Personality Test",
    text: "Take a short self discovery test without signup.",
  },
  {
    href: "/personality-types",
    label: "Personality Types",
    text: "Learn how Luckora explains different personality patterns.",
  },
  {
    href: "/love-language-test",
    label: "Love Language Test",
    text: "Discover how you give love, receive affection and connect.",
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
    title: "Start with a real question",
    text: "Begin with the pattern you want to understand, like overthinking, emotional drain or hidden strengths.",
  },
  {
    label: "Answer",
    title: "Answer fast, with instinct",
    text: "The questions are short, lightweight and designed to surface real tendencies without overcomplicating the process.",
  },
  {
    label: "Reflect",
    title: "Get language for what is happening",
    text: "See your strengths, your friction points and the next-step guidance that helps you move with more clarity.",
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
          <h2>Go deeper into relationship patterns.</h2>
          <p>
            After personality, explore how you give love, receive affection and
            why some connection patterns feel safe while others feel draining.
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
            <p>Understand the relationship patterns that shape emotional safety.</p>
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
            {seoEntryLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <span>SEO Guide</span>
                <strong>{link.label}</strong>
                <p>{link.text}</p>
              </a>
            ))}
            {seoUtilityLinks.map((link) => (
              <a href={link.href} key={link.href}>
                <span>Test Page</span>
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
        <h2>Built for people who want insight they can use.</h2>
        <p>
          Luckora is growing from personality and relationship insight into
          strengths, friction patterns, growth direction and deeper reports that
          help people understand both what makes them strong and what keeps them stuck.
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
