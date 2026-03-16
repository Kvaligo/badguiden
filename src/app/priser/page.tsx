import { ArticleSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABox } from "@/components/CTABox";
import { priserFaqs } from "@/data/faqs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvad Koster et Nyt Badeværelse? Komplet Prisoversigt 2026",
  description:
    "Få overblik over priser på badeværelse-renovering i 2026. Se prisspænd for lille, komplet og luksus renovering — plus hvad der påvirker prisen mest.",
  alternates: { canonical: "/priser" },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const priceTable = [
  {
    type: "Lille renovering",
    description: "Opfriskning med ny maling, armatur og tilbehør",
    priceFrom: "40.000",
    priceTo: "80.000",
    color: "bg-primary/5",
  },
  {
    type: "Komplet renovering",
    description: "Nye fliser, VVS, el, vådrumssikring og inventar",
    priceFrom: "80.000",
    priceTo: "200.000",
    color: "bg-accent/10",
  },
  {
    type: "Luksus renovering",
    description: "Højkvalitets materialer, specialdesign, gulvvarme m.m.",
    priceFrom: "200.000",
    priceTo: "500.000+",
    color: "bg-primary/10",
  },
];

const priceFactors = [
  {
    title: "Størrelse",
    description:
      "Prisen stiger med antallet af kvadratmeter. Et lille bad (3-4 m²) koster markant mindre i materialer end et stort (10+ m²), men arbejdslønnen er næsten den samme.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
  },
  {
    title: "Materialer",
    description:
      "Microcement koster 800-1.500 kr/m², mens standard fliser starter fra 300 kr/m². Natursten og terrazzo kan koste 1.500-3.000 kr/m².",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Elementer & inventar",
    description:
      "Et standard toilet koster 2.000-6.000 kr., mens et væghængt designtoilet kan koste 8.000-15.000 kr. Bruser og armaturer varierer lige så meget.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.384 3.076A1 1 0 014.5 17.36V6.64a1 1 0 011.536-.886l5.384 3.076m0 0L16.92 12m-5.5-3.17v6.34M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Håndværker & geografi",
    description:
      "Håndværkerløn udgør 40-50% af prisen. Priserne er højest i København og Aarhus, mens de er 10-20% lavere i Jylland og på Fyn.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
];

const comparisonPages = [
  {
    title: "Microcement vs. fliser",
    description: "Sammenlign pris, holdbarhed og vedligeholdelse for de to mest populære badeværelse-materialer.",
    href: "/priser/microcement-vs-fliser",
  },
  {
    title: "Brusekabine vs. brusevæg",
    description: "Hvad er billigst — og hvad passer bedst til dit badeværelse?",
    href: "/priser/brusekabine-vs-brusevaeg",
  },
  {
    title: "Pris pr. kvadratmeter",
    description: "Komplet oversigt over m²-priser for alle materialer og overflader.",
    href: "/priser/pr-kvadratmeter",
  },
  {
    title: "Budget vs. luksus",
    description: "Hvad får du egentlig for pengene? Vi sammenligner de to yderpunkter.",
    href: "/priser/budget-vs-luksus",
  },
  {
    title: "Køkken vs. badeværelse",
    description: "Hvad er dyrest at renovere — og hvorfor? Se prissammenligningen.",
    href: "/priser/koekken-vs-badevaerelse",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function PriserPage() {
  return (
    <>
      <ArticleSchema
        title="Hvad Koster et Nyt Badeværelse? Komplet Prisoversigt 2026"
        description="Få overblik over priser på badeværelse-renovering i 2026. Se prisspænd for lille, komplet og luksus renovering."
        url="/priser"
        datePublished="2025-12-01"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/priser.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Hvad Koster et Nyt Badeværelse?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Komplet prisoversigt for badeværelse-renovering i Danmark 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Priser" }]} />

        {/* Header */}
        <header className="mb-12">
          <p className="text-lg leading-relaxed text-text-muted font-sans">
            En badeværelse-renovering er en af de største investeringer i dit hjem. Priserne
            varierer enormt — fra en simpel opfriskning til en komplet luksus-ombygning. Her
            giver vi dig et realistisk overblik over, hvad det koster i Danmark i 2026, og
            hvilke faktorer der påvirker den endelige pris.
          </p>
        </header>

        {/* ---------------------------------------------------------------- */}
        {/*  Price overview table                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
            Prisoversigt: Tre niveauer
          </h2>
          <div className="overflow-hidden rounded-xl border border-card">
            {/* Table header */}
            <div className="hidden grid-cols-[1fr_2fr_1fr] gap-4 bg-primary-dark px-6 py-4 sm:grid">
              <span className="text-sm font-semibold text-white/90 font-sans">
                Renoveringstype
              </span>
              <span className="text-sm font-semibold text-white/90 font-sans">
                Hvad indgår
              </span>
              <span className="text-right text-sm font-semibold text-white/90 font-sans">
                Pris (inkl. moms)
              </span>
            </div>

            {/* Rows */}
            {priceTable.map((row, index) => (
              <div
                key={row.type}
                className={`flex flex-col gap-2 border-t border-card px-6 py-5 sm:grid sm:grid-cols-[1fr_2fr_1fr] sm:items-center sm:gap-4 ${
                  index === 0 ? "border-t-0" : ""
                } ${row.color}`}
              >
                <h3 className="font-serif text-base font-bold text-text-main">
                  {row.type}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted font-sans">
                  {row.description}
                </p>
                <p className="text-right font-sans text-lg font-bold text-primary sm:text-base">
                  {row.priceFrom} &ndash; {row.priceTo} kr.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-muted font-sans">
            * Priserne er vejledende og baseret på et standardbad på 5-8 m² i 2026.
            Faktisk pris afhænger af materialer, geografi og håndværker.
          </p>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Price factors                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
            Hvad påvirker prisen?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-text-muted font-sans">
            Fire hovedfaktorer bestemmer, hvad din badeværelse-renovering ender med at koste.
            Forstår du dem, kan du lettere prioritere og holde budgettet.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {priceFactors.map((factor) => (
              <div
                key={factor.title}
                className="rounded-xl border border-card bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4">{factor.icon}</div>
                <h3 className="font-serif text-lg font-bold text-text-main">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Comparison pages                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
            Prissammenligninger
          </h2>
          <p className="mb-8 text-base leading-relaxed text-text-muted font-sans">
            Dyk dybere ned i specifikke prissammenligninger for at træffe det bedste valg
            til dit budget og dine behov.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisonPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-xl border border-card bg-white p-5 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <h3 className="font-serif text-base font-bold text-text-main transition-colors group-hover:text-primary">
                  {page.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans">
                  {page.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans">
                  Læs mere
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
              </Link>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FAQ                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
            Ofte stillede spørgsmål om priser
          </h2>
          <FAQAccordion faqs={priserFaqs} />
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA                                                             */}
        {/* ---------------------------------------------------------------- */}
        <CTABox variant="inline" />
      </div>
    </>
  );
}
