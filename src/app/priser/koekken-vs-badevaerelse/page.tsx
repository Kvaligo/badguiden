import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { PriceBar } from "@/components/PriceBar";
import { ComparisonTable } from "@/components/ComparisonTable";
import { priceComparisons } from "@/data/prices";
import type { Metadata } from "next";
import Link from "next/link";

const comparison = priceComparisons.find(
  (p) => p.slug === "koekken-vs-badevaerelse"
)!;

export const metadata: Metadata = {
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/priser/koekken-vs-badevaerelse`,
  },
};

export default function KoekkenVsBadevaerelseePage() {
  return (
    <>
      <ArticleSchema
        title={comparison.title}
        description={comparison.metaDescription}
        url="/priser/koekken-vs-badevaerelse"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Priser", href: "/priser" },
          { label: "Køkken vs. Badeværelse" },
        ]}
        title="Køkken vs. Badeværelse Renovering — Hvad Koster Mest?"
        intro="Køkken og badeværelse er de to dyreste rum at renovere i en bolig. Men hvad koster egentlig mest? Hvilken renovering giver mest værdi? Og hvilken bør du tage først? Her er den upartiske sammenligning."
        readingTime={8}
        tocItems={[
          { id: "sammenligning", label: "Oversigt" },
          { id: "priser", label: "Prissammenligning" },
          { id: "tidsplan", label: "Tidsplan" },
          { id: "roi", label: "ROI ved boligsalg" },
          { id: "rækkefølge", label: "Hvad først?" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Budget vs. Luksus Badeværelse",
            href: "/priser/budget-vs-luksus",
            description: "Hvad får du for pengene?",
          },
          {
            title: "Pris pr. m²",
            href: "/priser/pr-kvadratmeter",
            description: "Komplet prisoversigt for badeværelset.",
          },
          {
            title: "Køkken — Hvad Koster Det?",
            href: "/koekken/pris",
            description: "Detaljeret prisoversigt for køkkenet.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Komplet guide til badeværelse-renovering.",
          },
        ]}
      >
        <img
          src="/images/content/koekken-vs-bad.png"
          alt="Sammenligning af køkken og badeværelse renovering"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Sammenligning */}
        <h2 id="sammenligning" className="scroll-mt-24">
          Oversigt: Køkken vs. Badeværelse
        </h2>

        <ComparisonTable
          title="Køkken vs. Badeværelse — Pris & Fordele"
          optionA={{
            name: comparison.optionA.name,
            price: `${comparison.optionA.priceFrom.toLocaleString("da-DK")}-${comparison.optionA.priceTo.toLocaleString("da-DK")} kr.`,
            pros: comparison.optionA.pros,
            cons: comparison.optionA.cons,
          }}
          optionB={{
            name: comparison.optionB.name,
            price: `${comparison.optionB.priceFrom.toLocaleString("da-DK")}-${comparison.optionB.priceTo.toLocaleString("da-DK")} kr.`,
            pros: comparison.optionB.pros,
            cons: comparison.optionB.cons,
          }}
        />

        {/* Prissammenligning */}
        <h2 id="priser" className="scroll-mt-24">
          Detaljeret prissammenligning
        </h2>

        <PriceBar from={80000} to={300000} unit="kr." label="Køkken-renovering (komplet)" />
        <PriceBar from={60000} to={250000} unit="kr." label="Badeværelse-renovering (komplet)" />

        <h3>Køkken-renovering: 80.000-300.000 kr.</h3>
        <p>
          Et nyt køkken er typisk det dyreste projekt i samlet kroner. De
          største poster er:
        </p>
        <ul>
          <li>
            <strong>Køkkenmøbler og fronter:</strong> 30.000-120.000 kr.
            Spænder fra IKEA-standard til snedkerlavet kvalitetskøkken.
          </li>
          <li>
            <strong>Hvidevarer:</strong> 15.000-60.000 kr. Ovn, kogeplader,
            opvaskemaskine, emhætte, evt. vinskab.
          </li>
          <li>
            <strong>Bordplade:</strong> 5.000-40.000 kr. Fra laminat til
            massiv granit eller Dekton.
          </li>
          <li>
            <strong>VVS & el:</strong> 15.000-40.000 kr. Tilslutning af
            vand, afløb, stikkontakter og belysning.
          </li>
          <li>
            <strong>Håndværkerløn:</strong> 20.000-60.000 kr. Montering,
            fliser, maling og finish.
          </li>
        </ul>

        <h3>Badeværelse-renovering: 60.000-250.000 kr.</h3>
        <p>
          Selvom totalen er lavere, er prisen pr. kvadratmeter højere i
          badeværelset. De største poster er:
        </p>
        <ul>
          <li>
            <strong>
              <Link href="/guide/vaadrumssikring" className="text-primary hover:underline">
                Vådrumssikring
              </Link>
              :
            </strong>{" "}
            12.000-40.000 kr. Lovpligtigt og udgør en stor del af prisen. Denne
            post eksisterer ikke i køkkenet.
          </li>
          <li>
            <strong>Fliser (materialer + arbejde):</strong> 15.000-50.000 kr.
            Både gulv og vægge skal beklædes.
          </li>
          <li>
            <strong>VVS-arbejde:</strong> 15.000-40.000 kr. Mere omfattende
            end i køkkenet pga. bruser, toilet og afløb.
          </li>
          <li>
            <strong>Inventar:</strong> 10.000-50.000 kr. Toilet, håndvask,
            bruser/badekar, armatur.
          </li>
          <li>
            <strong>El-arbejde:</strong> 5.000-15.000 kr. Lys, ventilation,
            stikkontakter, evt. gulvvarme.
          </li>
        </ul>

        <TipBox variant="tip" title="Pris pr. m² fortæller den sande historie">
          <p>
            Et køkken er typisk 10-15 m² og koster 8.000-20.000 kr/m². Et
            badeværelse er typisk 5-8 m² og koster 10.000-30.000 kr/m².{" "}
            <strong>Pr. kvadratmeter er badeværelset altså dyrere</strong>{" "}
            — primært pga. vådrumssikring og det mere intensive VVS-arbejde.
          </p>
        </TipBox>

        {/* Tidsplan */}
        <h2 id="tidsplan" className="scroll-mt-24">
          Tidsplan: Hvad tager længst?
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Fase</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Køkken</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Badeværelse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Planlægning</td>
                <td className="px-4 py-3">4-8 uger</td>
                <td className="px-4 py-3">2-4 uger</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Nedrivning</td>
                <td className="px-4 py-3">2-5 dage</td>
                <td className="px-4 py-3">2-4 dage</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">VVS & el</td>
                <td className="px-4 py-3">3-5 dage</td>
                <td className="px-4 py-3">3-7 dage</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Vådrumssikring</td>
                <td className="px-4 py-3">Ikke relevant</td>
                <td className="px-4 py-3">3-5 dage</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Overflader (fliser/montering)</td>
                <td className="px-4 py-3">3-7 dage</td>
                <td className="px-4 py-3">5-10 dage</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Montering af inventar</td>
                <td className="px-4 py-3">5-10 dage</td>
                <td className="px-4 py-3">2-4 dage</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Finish</td>
                <td className="px-4 py-3">2-3 dage</td>
                <td className="px-4 py-3">1-2 dage</td>
              </tr>
              <tr className="border-t-2 border-primary/20 font-bold">
                <td className="px-4 py-3">Samlet byggetid</td>
                <td className="px-4 py-3">4-8 uger</td>
                <td className="px-4 py-3">3-6 uger</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Køkkenet tager generelt længere tid</strong> — primært pga.
          leveringstid på køkkenmøbler (ofte 4-6 uger) og den mere
          omfattende montering af skabe, hvidevarer og bordplader.
        </p>

        <TipBox variant="obs" title="Genen under renovering">
          <p>
            En køkken-renovering er mere indgribende i hverdagen end et
            badeværelse. Du kan ikke lave mad i 4-8 uger, mens du oftest
            kan bruge et andet badeværelse eller en midlertidig løsning.
            Planlæg hvordan du håndterer madlavning under renoveringen.
          </p>
        </TipBox>

        {/* ROI */}
        <h2 id="roi" className="scroll-mt-24">
          ROI ved boligsalg
        </h2>
        <p>
          Hvilken renovering giver mest værdi når boligen skal sælges?
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Aspekt</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Køkken</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Badeværelse</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Typisk værdiforøgelse</td>
                <td className="px-4 py-3">100.000-200.000 kr.</td>
                <td className="px-4 py-3">50.000-150.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">ROI (budget)</td>
                <td className="px-4 py-3">80-120%</td>
                <td className="px-4 py-3">70-100%</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">ROI (luksus)</td>
                <td className="px-4 py-3">50-70%</td>
                <td className="px-4 py-3">40-60%</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Køberfokus</td>
                <td className="px-4 py-3">Højt (køkken sælger boliger)</td>
                <td className="px-4 py-3">Middel-højt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <PullQuote
          quote="Køkkenet er det rum der sælger boligen. Badeværelset er det rum der kan torpedere salget. Begge er vigtige — men af forskellige grunde."
          author="Dansk ejendomsmægler"
        />

        <p>
          <strong>Køkkenet vinder på ROI</strong> — et nyt køkken er det
          første købere kigger efter, og det kan retfærdiggøre en højere
          udbudspris. Men et forfaldent badeværelse kan afskrække købere
          helt, også selvom køkkenet er nyt.
        </p>

        {/* Hvad først */}
        <h2 id="rækkefølge" className="scroll-mt-24">
          Hvad bør du renovere først?
        </h2>
        <p>
          Hvis begge rum trænger til en renovering, anbefaler vi denne
          rækkefølge:
        </p>

        <h3>Start med badeværelset hvis:</h3>
        <ul>
          <li>
            Der er tegn på fugtskader, skimmel eller defekt vådrumssikring
            (akut problem)
          </li>
          <li>
            Du vil starte med det mindste projekt for at få erfaring med
            håndværkere
          </li>
          <li>
            Budgettet er begrænset — badeværelset er billigere at renovere
          </li>
          <li>
            Du har flere badeværelser i boligen der kan bruges undervejs
          </li>
        </ul>

        <h3>Start med køkkenet hvis:</h3>
        <ul>
          <li>
            Køkkenet er funktionelt ubrugeligt eller stærkt utidssvarende
          </li>
          <li>
            Du planlægger at sælge boligen inden for 1-2 år (større ROI)
          </li>
          <li>
            Badeværelset er ældre men stadig funktionelt (ingen fugtproblemer)
          </li>
          <li>
            Du kan håndtere en længere byggeperiode uden køkken
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Vores anbefaling">
          <p>
            For de fleste familier anbefaler vi at starte med badeværelset.
            Det er et mindre og kortere projekt, og eventuelle fugtproblemer
            bør tages hånd om hurtigst muligt. Erfaringen med processen og
            håndværkere gør dig bedre rustet til den større
            køkken-renovering bagefter.
          </p>
        </TipBox>

        <p>
          Læs mere om{" "}
          <Link href="/koekken/pris" className="text-primary underline">
            hvad et nyt køkken koster
          </Link>{" "}
          i vores separate køkken-guide.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={comparison.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
