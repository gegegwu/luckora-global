import type { Metadata } from "next";
import { ExploreMore } from "@/components/seo-link-sections";
import { StarField } from "@/components/star-field";
import { TrackedPremiumLink } from "@/components/tracked-premium-link";
import { breadcrumbSchema, jsonLd, webPageSchema } from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";

const title = "Luckora Premium Readings";
const description =
  "Explore Luckora's paid Chinese Name Reading and Best Crystal for You offers, with detailed self discovery copy, pricing and early purchase-intent tracking.";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: `${title} | Luckora`,
    description,
    path: "/deep-report",
    type: "article",
    keywords: ["Luckora"],
  }),
  robots: {
    index: false,
    follow: false,
  },
};

const reportOffers = [
  {
    name: "Chinese Name Reading",
    price: "$9.99",
    badge: "Early Pricing",
    description:
      "A paid identity reading for people who want a Chinese name that feels meaningful, memorable, elegant and deeply aligned with how they want to be seen.",
    items: [
      "Name meaning and symbolism",
      "Identity tone and style fit",
      "Why this name feels aligned",
      "Direction for choosing a better Chinese name",
    ],
    source: "paid_chinese_name_interest",
  },
  {
    name: "Best Crystal for You",
    price: "$12.99",
    badge: "Early Pricing",
    description:
      "A paid crystal-match reading for users who want a symbolic recommendation connected to emotional needs and personal energy.",
    items: [
      "Crystal recommendation",
      "Emotional support theme",
      "Why this crystal fits your pattern",
      "Simple ritual and reflection ideas",
    ],
    source: "paid_crystal_interest",
  },
];

const comparisonRows = [
  {
    label: "Free layer",
    free: "Free personality or love-language result",
    advanced: "A paid identity or crystal reading built around one focused desire",
  },
  {
    label: "Personal meaning",
    free: "Broad reflective language",
    advanced: "A more specific symbolic recommendation or naming direction",
  },
  {
    label: "Buying reason",
    free: "Interesting to read once",
    advanced: "Feels personal enough to consider paying for",
  },
  {
    label: "SEO intent",
    free: "Low to medium curiosity intent",
    advanced: "Higher-intent searches like meaningful Chinese name or best crystal for me",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Start from self discovery",
    body: "The free experience builds interest. The paid layer turns that interest into a more specific identity-style product.",
  },
  {
    step: "02",
    title: "Move into a focused paid reading",
    body: "Instead of a broad result, the paid version gives one focused recommendation or naming direction with more detailed language.",
  },
  {
    step: "03",
    title: "Test whether people would really buy",
    body: "The goal is not only to inspire clicks. The goal is to learn whether these more concrete paid products create stronger buying intent.",
  },
];

const reasonsToBuy = [
  {
    title: "You want to feel more distinctive and memorable",
    body: "A strong Chinese name does not only label you. It can change how you imagine introducing yourself, how you carry your identity and how easily people remember the feeling you leave behind.",
  },
  {
    title: "You want an object that feels like your energy made visible",
    body: "The right crystal recommendation feels less like decoration and more like a symbol of who you are becoming: calmer, clearer, more magnetic or more protected.",
  },
  {
    title: "You want to step into a more intentional version of yourself",
    body: "People buy products like these because they want to feel more elegant, more aligned and more certain. The product is small. The emotional meaning behind it is much bigger.",
  },
];

const previewBlocks = [
  {
    label: "Sample Section",
    title: "Why this Chinese name fits your identity",
    body: "In East Asian naming culture, a name is never just a sound. This one feels soft but intelligent. It suggests warmth, cultural depth and a quieter kind of confidence. It is the kind of name that can make you feel more composed, more intentional and easier to remember.",
  },
  {
    label: "Sample Section",
    title: "Why this crystal may fit your current emotional pattern",
    body: "You may be looking for grounding more than intensity. This recommendation works like a symbolic anchor for calm, steadiness and emotional containment, so you feel less scattered and more centered in the way you move through the day.",
  },
];

const faqs = [
  {
    question: "Is the Chinese Name Reading available right now?",
    answer:
      "Not yet. As of August 10, 2026, this page is being used to measure demand before the full paid experience is built.",
  },
  {
    question: "Why show pricing before launch?",
    answer:
      "Because price changes behavior. A priced click is a stronger demand signal than a generic expression of interest.",
  },
  {
    question: "What makes the paid reading different from the free test?",
    answer:
      "The free test gives the broad self discovery signal. The paid offers focus on a more concrete desire, like finding a meaningful Chinese name or a personally aligned crystal recommendation, with more symbolic and identity-driven interpretation.",
  },
  {
    question: "Should Chinese name or crystal be built first?",
    answer:
      "That depends on which offer gets stronger buy-intent clicks. This page exists to answer that question with real user behavior.",
  },
];

export default function DeepReportPage() {
  return (
    <main className="site-shell test-shell">
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
        <a className="nav-cta" href="/test">
          Start Free Test
        </a>
      </header>

      <article className="result-card test-landing">
        <span className="eyebrow">Premium Reading Preview</span>
        <h1>{title}</h1>
        <p>
          This is not only about getting an answer. It is about becoming easier
          to remember, easier to recognize and more aligned with the version of
          yourself you want other people to feel. In Eastern culture, a name is
          often seen as carrying tone, character, expectation and identity. We
          are testing whether users are more willing to buy a meaningful Chinese
          name reading or a personalized crystal recommendation when that
          emotional payoff is made clear.
        </p>
        <div className="strength-list">
          <span>Paid Chinese name reading preview</span>
          <span>Paid crystal recommendation preview</span>
          <span>Identity, elegance and symbolic self discovery</span>
          <span>Pre-launch pricing to test real purchase intent</span>
        </div>

        <div className="result-actions">
          <TrackedPremiumLink
            className="primary-action"
            href="/contact"
            offerPrice="$9.99"
            offerStage="hero_interest"
            offerType="paid_chinese_name_reading"
            source="deep_report_hero_chinese_name_interest"
          >
            <span>Buy Chinese Name Reading · $9.99</span>
          </TrackedPremiumLink>
          <TrackedPremiumLink
            className="secondary-action"
            href="/contact"
            offerPrice="$12.99"
            offerStage="hero_interest"
            offerType="paid_crystal_match"
            source="deep_report_hero_crystal_interest"
          >
            <span>Buy Best Crystal for You · $12.99</span>
          </TrackedPremiumLink>
        </div>

        <section className="result-section">
          <h2>What are the Luckora premium readings?</h2>
          <p>
            The paid layer on Luckora does not have to stay abstract. A more
            concrete offer can be easier to understand and easier to buy. That
            is why this page now tests two product directions: a Chinese Name
            Reading and a Best Crystal for You recommendation.
          </p>
          <p>
            Right now this is still a pre-launch page. The button is being used
            to test whether users are willing to buy a paid identity-style or
            symbolic self discovery product before the full checkout and
            delivery experience is built, but the emotional promise is already
            the point: to feel more chosen, more elegant, more seen and more
            personally aligned.
          </p>
          <p>
            The compliant version of the promise is this: a name may influence
            how you are perceived, how you present yourself and how connected
            you feel to a certain life direction. That is powerful enough
            without claiming supernatural certainty.
          </p>
        </section>

        <section className="result-section">
          <h2>Why people would buy this instead of stopping at the free test</h2>
          <div className="career-list">
            {reasonsToBuy.map((item, index) => (
              <article className="career-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>Free Test vs Advanced Test</h2>
          <div className="career-list">
            {comparisonRows.map((row, index) => (
              <article className="career-card" key={row.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{row.label}</h3>
                <p>
                  <strong>Free:</strong> {row.free}
                </p>
                <p>
                  <strong>Advanced:</strong> {row.advanced}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>Why someone would buy the paid version</h2>
          <p>
            People rarely buy a product like this for logic alone. They buy it
            because they want to feel more elegant in the way they present
            themselves, more intentional in the symbols they wear and more
            confident in the identity they are stepping into. That emotional
            outcome is what turns curiosity into buying intent.
          </p>
          <p>
            A Chinese name can feel like a subtle shift in destiny language
            without us needing to promise that it literally controls fate. It
            can still shape confidence, presentation, memory and the kind of
            story someone feels they are living into.
          </p>
          <div className="strength-list">
            <span>Chinese name meaning and symbolic fit</span>
            <span>Best crystal for emotional grounding or confidence</span>
            <span>A more elevated and memorable self-image</span>
            <span>Clearer SEO intent and easier purchase imagination</span>
          </div>
          <div className="result-actions">
            <TrackedPremiumLink
              className="primary-action"
              href="/contact"
              offerPrice="$9.99"
              offerStage="midpage_interest"
              offerType="paid_chinese_name_reading"
              source="deep_report_midpage_chinese_name_interest"
            >
              <span>Buy Chinese Name Reading · $9.99</span>
            </TrackedPremiumLink>
            <TrackedPremiumLink
              className="secondary-action"
              href="/contact"
              offerPrice="$12.99"
              offerStage="midpage_interest"
              offerType="paid_crystal_match"
              source="deep_report_midpage_crystal_interest"
            >
              <span>Buy Best Crystal for You · $12.99</span>
            </TrackedPremiumLink>
          </div>
        </section>

        <section className="result-section seo-links-section">
          <h2>Premium Reading Pricing</h2>
          <div className="seo-link-grid">
            {reportOffers.map((offer) => (
              <div key={offer.name}>
                <span>{offer.badge}</span>
                <strong>
                  {offer.name} · {offer.price}
                </strong>
                <p>{offer.description}</p>
                <div className="strength-list">
                  {offer.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="result-actions">
                  <TrackedPremiumLink
                    className="primary-action"
                    href="/contact"
                    offerPrice={offer.price}
                    offerStage="interest_click"
                    offerType={offer.source.includes("crystal") ? "paid_crystal_match" : "paid_chinese_name_reading"}
                    source={offer.source}
                  >
                    <span>Buy Now · {offer.price}</span>
                  </TrackedPremiumLink>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>What these paid readings are supposed to deliver</h2>
          <div className="growth-path">
            {deliverySteps.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>Preview of the kind of insight users want to buy</h2>
          <div className="career-list">
            {previewBlocks.map((item, index) => (
              <article className="career-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.label}:</strong> {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>How you want to feel after buying</h2>
          <div className="strength-list">
            <span>More elegant when you introduce yourself</span>
            <span>More memorable in work, content or relationships</span>
            <span>More emotionally centered in your daily life</span>
            <span>More connected to a symbol that feels like you</span>
          </div>
        </section>

        <section className="result-section">
          <h2>Who this is for</h2>
          <div className="strength-list">
            <span>Users who want a meaningful Chinese name</span>
            <span>People asking which crystal fits them best</span>
            <span>Users drawn to symbolic self discovery products</span>
            <span>People deciding whether personal guidance is worth paying for</span>
          </div>
        </section>

        <section className="result-section">
          <h2>How the paid flow is expected to work</h2>
          <div className="growth-path">
            <article>
              <span>01</span>
              <h3>Take the free test</h3>
              <p>Start with the free Luckora personality or relationship experience.</p>
            </article>
            <article>
              <span>02</span>
              <h3>See the paid direction</h3>
              <p>Decide whether you want a Chinese name reading or a crystal recommendation that feels more personal.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Click the paid offer</h3>
              <p>Use the buy button as a demand signal so we can see whether this product direction is worth building further.</p>
            </article>
          </div>
        </section>

        <section className="result-section">
          <h2>Current Status</h2>
          <p>
            Building now. As of Monday, August 10, 2026, the advanced test
            structure, payment flow and delivery experience are still in
            progress. The offer and pricing are visible so we can measure real
            purchase intent before building the full paid product.
          </p>
        </section>

        <section className="result-section">
          <h2>What happens if you click buy?</h2>
          <p>
            Right now, clicking a buy button does not complete payment. It
            counts as an early purchase-intent signal. That helps us decide
            which reading to ship first, which price point is strongest and
            whether the paid product is compelling enough to keep building.
          </p>
          <div className="result-actions">
            <TrackedPremiumLink
              className="secondary-action"
              href="/contact"
              offerPrice="multi"
              offerStage="waitlist"
              offerType="paid_reading_general"
              source="deep_report_general_interest"
            >
              <span>Reserve Interest for Launch</span>
            </TrackedPremiumLink>
          </div>
        </section>

        <section className="result-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="result-section">
          <h2>Ready to test whether users would really buy?</h2>
          <p>
            This is still a pre-launch page, but the intent we measure here is
            useful. If people keep clicking these priced buttons, that is a real
            sign that paid Chinese name readings, paid crystal recommendations
            and symbolic self discovery products may be worth building further,
            especially when they are sold through aspiration, identity and
            feeling rather than only explanation.
          </p>
          <div className="result-actions">
            <TrackedPremiumLink
              className="primary-action"
              href="/contact"
              offerPrice="$9.99"
              offerStage="footer_interest"
              offerType="paid_chinese_name_reading"
              source="deep_report_footer_chinese_name_interest"
            >
              <span>Buy Chinese Name Reading</span>
            </TrackedPremiumLink>
            <TrackedPremiumLink
              className="secondary-action"
              href="/contact"
              offerPrice="$12.99"
              offerStage="footer_interest"
              offerType="paid_crystal_match"
              source="deep_report_footer_crystal_interest"
            >
              <span>Buy Best Crystal for You</span>
            </TrackedPremiumLink>
          </div>
        </section>

        <ExploreMore />
      </article>

      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            webPageSchema({
              title,
              description,
              path: "/deep-report",
            }),
          ),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: title, path: "/deep-report" },
            ]),
          ),
        }}
        type="application/ld+json"
      />
    </main>
  );
}
