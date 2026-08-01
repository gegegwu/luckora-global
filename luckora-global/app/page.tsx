"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { CosmicOrb } from "@/components/cosmic-orb";
import { StarField } from "@/components/star-field";
import { getDictionary } from "@/lib/i18n";
import { jsonLd, websiteSchema } from "@/lib/schema";

export default function Home() {
  const locale = "en";
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const direction = "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

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
          <a className="nav-cta" href="/tests/personality-test">
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
              href="/tests/personality-test"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{dictionary.hero.cta}</span>
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

      <section className="feature-grid" id="tests">
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

      <section className="seo-section" id="vision">
        <div>
          <span className="eyebrow">Luckora GEO / SEO Foundation</span>
          <h2>{dictionary.seo.title}</h2>
        </div>
        <p>{dictionary.seo.body}</p>
      </section>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(websiteSchema(dictionary.meta.description)),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
