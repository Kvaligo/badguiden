export interface FAQ {
  question: string;
  answer: string;
}

export interface Material {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  priceRange: { from: number; to: number; unit: string };
  pros: string[];
  cons: string[];
  swatchColors: { name: string; hex: string }[];
  faqs: FAQ[];
  relatedSlugs: string[];
  image: string;
  imageAlt: string;
}

export interface BathroomElement {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  priceRange: { from: number; to: number; unit: string };
  types: string[];
  features: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
  image: string;
  imageAlt: string;
}

export interface GuideArticle {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  readingTime: number;
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface InteriorCategory {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface PriceComparison {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  optionA: { name: string; priceFrom: number; priceTo: number; pros: string[]; cons: string[] };
  optionB: { name: string; priceFrom: number; priceTo: number; pros: string[]; cons: string[] };
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface KitchenPage {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface CategoryCard {
  title: string;
  description: string;
  href: string;
  image: string;
  badge: string;
  count: number;
}
