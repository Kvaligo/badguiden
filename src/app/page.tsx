import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
} from "@/lib/constants";
import { OrganizationSchema, WebSiteSchema } from "@/components/JsonLd";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABox } from "@/components/CTABox";
import MasonryGrid from "@/components/MasonryGrid";
import { CategoryCard } from "@/components/CategoryCard";
import { homepageFaqs } from "@/data/faqs";
import type { Metadata } from "next";
import type { CategoryCard as CategoryCardType } from "@/data/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${SITE_NAME} — Alt Om Badeværelse, Materialer & Priser`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const categoryTags = [
  { label: "Microcement", href: "/materialer/microcement" },
  { label: "Fliser", href: "/materialer/fliser" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Priser", href: "/priser" },
  { label: "Brusekabine", href: "/elementer/brusekabine" },
  { label: "Vådrumssikring", href: "/guide/vaadrumssikring" },
  { label: "Renovering", href: "/guide/renovering-trin-for-trin" },
  { label: "Terrazzo", href: "/materialer/terrazzo" },
  { label: "Gulvvarme", href: "/elementer/gulvvarme" },
  { label: "Lille bad", href: "/indretning/lille-badevaerelse" },
];

const categoryCards: CategoryCardType[] = [
  {
    title: "Materialer",
    description:
      "Alt om microcement, fliser, klinker, terrazzo og natursten til dit badeværelse.",
    href: "/materialer",
    image: "/images/hero/materialer.png",
    badge: "Populært",
    count: 6,
  },
  {
    title: "Elementer",
    description:
      "Brusekabiner, håndvaske, armaturer, ventilation og meget mere.",
    href: "/elementer",
    image: "/images/hero/elementer.png",
    badge: "Komplet",
    count: 9,
  },
  {
    title: "Indretning",
    description:
      "Opbevaring, møbler, farver og smarte løsninger til ethvert badeværelse.",
    href: "/indretning",
    image: "/images/hero/indretning.png",
    badge: "Trends",
    count: 4,
  },
  {
    title: "Guides",
    description:
      "Trin-for-trin guides til renovering, vådrumssikring og gør-det-selv.",
    href: "/guide",
    image: "/images/hero/guide.png",
    badge: "Praktisk",
    count: 7,
  },
  {
    title: "Priser",
    description:
      "Komplet prisoversigt, sammenligninger og budget-beregninger.",
    href: "/priser",
    image: "/images/hero/priser.png",
    badge: "2026",
    count: 6,
  },
  {
    title: "Køkken",
    description:
      "Køkkenrenovering, materialer, priser og inspiration til dit nye køkken.",
    href: "/koekken",
    image: "/images/hero/koekken.png",
    badge: "Nyt",
    count: 5,
  },
];

const featuredArticles = [
  {
    title: "Microcement Badeværelse",
    description:
      "Alt du skal vide om microcement i badeværelset — pris, holdbarhed, vedligeholdelse og om det er det rigtige valg for dig.",
    href: "/materialer/microcement",
    tag: "Materialer",
    image: "/images/materials/microcement.png",
  },
  {
    title: "Vådrumssikring Guide",
    description:
      "Komplet guide til vådrumssikring: krav, regler, priser og hvad du skal være opmærksom på ved renovering.",
    href: "/guide/vaadrumssikring",
    tag: "Guide",
    image: "/images/hero/guide.png",
  },
  {
    title: "Brusekabine Guide",
    description:
      "Typer, størrelser, priser og montering — find den perfekte brusekabine til dit badeværelse.",
    href: "/elementer/brusekabine",
    tag: "Elementer",
    image: "/images/elements/brusekabine.png",
  },
];

const alternatingCategories = [
  {
    title: "Find det rigtige materiale til dit badeværelse",
    description:
      "Valget af materiale er en af de vigtigste beslutninger ved en badeværelse-renovering. Det påvirker både udseende, holdbarhed, vedligeholdelse og pris. Vi dækker alt fra klassiske fliser til moderne microcement.",
    href: "/materialer",
    links: [
      { label: "Microcement", href: "/materialer/microcement" },
      { label: "Fliser", href: "/materialer/fliser" },
      { label: "Klinker", href: "/materialer/klinker" },
      { label: "Natursten", href: "/materialer/natursten" },
    ],
    align: "left" as const,
    accentColor: "from-primary/10 to-accent/10",
    image: "/images/hero/materialer.png",
    imageAlt: "Badeværelsesmaterialer — microcement, fliser, klinker og natursten",
  },
  {
    title: "Praktiske guides til dit projekt",
    description:
      "Fra den allerførste planlægning til den sidste fuge — vores guides giver dig overblik over hele renoveringsprocessen, så du undgår de klassiske fejl og holder budgettet.",
    href: "/guide",
    links: [
      { label: "Renovering trin-for-trin", href: "/guide/renovering-trin-for-trin" },
      { label: "Vådrumssikring", href: "/guide/vaadrumssikring" },
      { label: "Gør-det-selv", href: "/guide/goer-det-selv" },
      { label: "Fejl at undgå", href: "/guide/fejl-at-undgaa" },
    ],
    align: "right" as const,
    accentColor: "from-accent/10 to-primary/5",
    image: "/images/hero/guide.png",
    imageAlt: "Badeværelseguides — renovering, vådrumssikring og gør-det-selv",
  },
  {
    title: "Hvad koster det egentlig?",
    description:
      "Gennemsigtighed i priser er kernen i BadGuiden. Vi har samlet reelle prisdata fra danske håndværkere, materialeforhandlere og byggemarkeder, så du kan budgettere realistisk.",
    href: "/priser",
    links: [
      { label: "Komplet prisoversigt", href: "/priser" },
      { label: "Microcement vs. fliser", href: "/priser/microcement-vs-fliser" },
      { label: "Pris pr. m²", href: "/priser/pr-kvadratmeter" },
      { label: "Budget vs. luksus", href: "/priser/budget-vs-luksus" },
    ],
    align: "left" as const,
    accentColor: "from-primary/5 to-accent/10",
    image: "/images/hero/priser.png",
    imageAlt: "Badeværelsespriser — komplet prisoversigt for renovering",
  },
];

/* -------------------------------------------------------------------------- */
/*  Trustbar icon components                                                  */
/* -------------------------------------------------------------------------- */

function ShieldIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-primary-dark"
        style={{ backgroundImage: 'url(/images/hero/forside.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark overlay for text readability */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-primary-dark/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="mb-6 inline-block rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent font-sans">
            Guide
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Badeværelse
            <br />
            <span className="text-accent">Guide</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 font-sans sm:text-xl">
            {SITE_TAGLINE}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Category tags                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-card bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 py-4 scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-visible sm:py-5">
            {categoryTags.map((tag) => (
              <Link
                key={tag.href}
                href={tag.href}
                className="shrink-0 rounded-full border border-card bg-surface px-4 py-2 text-sm font-medium text-text-main transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary font-sans"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Trust bar                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-card bg-surface py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <ShieldIcon />
            <h3 className="mt-3 font-serif text-base font-bold text-text-main">
              Uvildig rådgivning
            </h3>
            <p className="mt-1 text-sm text-text-muted font-sans">
              Vi sælger ikke — vi oplyser
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BookIcon />
            <h3 className="mt-3 font-serif text-base font-bold text-text-main">
              50+ dybdegående guides
            </h3>
            <p className="mt-1 text-sm text-text-muted font-sans">
              Materialer, elementer, priser & renovering
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CalendarIcon />
            <h3 className="mt-3 font-serif text-base font-bold text-text-main">
              Opdateret marts 2026
            </h3>
            <p className="mt-1 text-sm text-text-muted font-sans">
              Aktuelle priser og lovkrav
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Category cards (masonry)                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-text-main sm:text-3xl">
              Udforsk alle emner
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-text-muted font-sans">
              Fra materialevalg til prisberegning — vi dækker alt hvad du har brug for til dit badeværelse-projekt.
            </p>
          </div>
          <MasonryGrid>
            {categoryCards.map((card) => (
              <CategoryCard key={card.href} card={card} />
            ))}
          </MasonryGrid>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Populært nu                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-card bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-accent font-sans">
              Populært nu
            </span>
            <h2 className="font-serif text-2xl font-bold text-text-main sm:text-3xl">
              Mest læste artikler
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-card bg-surface transition-all duration-200 hover:border-primary/20 hover:shadow-lg"
              >
                {/* Article thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary font-sans shadow-sm">
                    {article.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-bold text-text-main transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted font-sans">
                    {article.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans">
                    Læs artiklen
                    <svg
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Alternating category sections                                     */}
      {/* ------------------------------------------------------------------ */}
      {alternatingCategories.map((section, index) => (
        <section
          key={section.href}
          className={`py-16 ${index % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-16 ${
                section.align === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Section image */}
              <div className="w-full shrink-0 lg:w-5/12">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h2 className="font-serif text-2xl font-bold leading-snug text-text-main sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted font-sans">
                  {section.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg border border-card bg-white px-4 py-2 text-sm font-medium text-text-main transition-all hover:border-primary/30 hover:text-primary font-sans"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={section.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark font-sans"
                >
                  Se alle artikler
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-card bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-text-main sm:text-3xl">
              Ofte stillede spørgsmål
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-text-muted font-sans">
              De mest almindelige spørgsmål om badeværelse-renovering, priser og materialer.
            </p>
          </div>
          <FAQAccordion faqs={homepageFaqs} />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA                                                               */}
      {/* ------------------------------------------------------------------ */}
      <CTABox variant="section" />
    </>
  );
}
