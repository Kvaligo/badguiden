import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = "2026-03-15T00:00:00.000Z";

  const corePages = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${SITE_URL}/priser/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/inspiration/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/om-os/`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${SITE_URL}/kontakt/`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const materialSlugs = ["microcement", "fliser", "klinker", "silkecement", "terrazzo", "natursten"];
  const materialPages = [
    { url: `${SITE_URL}/materialer/`, changeFrequency: "monthly" as const, priority: 0.9 },
    ...materialSlugs.map((slug) => ({
      url: `${SITE_URL}/materialer/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const elementSlugs = ["brusekabine", "brusevaeg", "haandvask", "armatur", "vandhane", "ventilation", "spejl", "glasvaeg", "gulvvarme"];
  const elementPages = [
    { url: `${SITE_URL}/elementer/`, changeFrequency: "monthly" as const, priority: 0.9 },
    ...elementSlugs.map((slug) => ({
      url: `${SITE_URL}/elementer/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const guideSlugs = ["vaadrumssikring", "renovering-trin-for-trin", "byggetilladelse", "goer-det-selv", "fejl-at-undgaa", "vedligeholdelse", "trends-2026"];
  const guidePages = [
    { url: `${SITE_URL}/guide/`, changeFrequency: "monthly" as const, priority: 0.9 },
    ...guideSlugs.map((slug) => ({
      url: `${SITE_URL}/guide/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const priceSlugs = ["microcement-vs-fliser", "brusekabine-vs-brusevaeg", "pr-kvadratmeter", "budget-vs-luksus", "koekken-vs-badevaerelse"];
  const pricePages = priceSlugs.map((slug) => ({
    url: `${SITE_URL}/priser/${slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const interiorSlugs = ["opbevaring", "mobler", "lille-badevaerelse", "farver"];
  const interiorPages = [
    { url: `${SITE_URL}/indretning/`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...interiorSlugs.map((slug) => ({
      url: `${SITE_URL}/indretning/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const kitchenSlugs = ["pris", "inspiration", "materialer", "goer-det-selv"];
  const kitchenPages = [
    { url: `${SITE_URL}/koekken/`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...kitchenSlugs.map((slug) => ({
      url: `${SITE_URL}/koekken/${slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    ...corePages,
    ...materialPages,
    ...elementPages,
    ...guidePages,
    ...pricePages,
    ...interiorPages,
    ...kitchenPages,
  ].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
