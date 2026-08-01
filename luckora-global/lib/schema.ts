import { personalityProfiles, type PersonalityProfile } from "@/lib/personalities";
import { siteConfig } from "@/lib/seo";
import { type TestConfig, testConfigs, type TestFaq } from "@/lib/tests";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function faqPageSchema(faq: TestFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.baseUrl}${item.path}`,
    })),
  };
}

export function webApplicationSchema(test: TestConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: test.title,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: `${siteConfig.baseUrl}/tests/${test.slug}`,
    description: test.seoDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function testsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Luckora AI Self Discovery Tests",
    itemListElement: testConfigs.map((test, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: test.title,
      url: `${siteConfig.baseUrl}/tests/${test.slug}`,
    })),
  };
}

export function websiteSchema(description = siteConfig.defaultDescription) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: ["AI Self Discovery Platform", "AI Self Discovery Tests", "幸运小宇宙"],
    url: siteConfig.baseUrl,
    description,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function personalityItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Luckora Personality Types",
    itemListElement: personalityProfiles.map((profile, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: profile.name,
      url: `${siteConfig.baseUrl}/personality/${profile.slug}`,
    })),
  };
}

export function personalityArticleSchema(profile: PersonalityProfile) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${profile.name} Personality Type`,
    description: profile.description,
    mainEntityOfPage: `${siteConfig.baseUrl}/personality/${profile.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function jsonLd(schema: object) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
