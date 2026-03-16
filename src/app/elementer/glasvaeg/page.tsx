import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABox } from "@/components/CTABox";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { PriceBar } from "@/components/PriceBar";
import { elements } from "@/data/elements";

const element = elements.find((e) => e.slug === "glasvaeg")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/glasvaeg` },
};

export default function GlasvaegPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/glasvaeg" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af glasvægge" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Brusevæg", href: "/elementer/brusevaeg", description: "Glas som bruseafskærmning" },
          { title: "Brusekabine", href: "/elementer/brusekabine", description: "Den lukkede glasløsning" },
          { title: "Spejl", href: "/elementer/spejl", description: "Belysning og stil" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/glasvaeg.png"
            alt="Glasvæg til badeværelse — sort stålramme med sprosser"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af glasvægge</h2>
          <p>
            Glasvægge bruges som rumdeler i badeværelset og kan tjene mange formål — fra
            bruseafskærmning til adskillelse af toilet og vaskezone:
          </p>
          <div className="mt-6 space-y-5">
            {element.types.map((type, i) => (
              <div key={i} className="rounded-lg bg-card/50 p-4">
                <h3 className="font-serif font-bold text-text-main">{type.split(" — ")[0]}</h3>
                {type.includes(" — ") && <p className="mt-1 text-sm text-text-muted">{type.split(" — ")[1]}</p>}
              </div>
            ))}
          </div>
          <p className="mt-6">
            Glasvægge med sort stålramme og sprosser er den mest efterspurgte variant i 2026.
            Det industrielle look har vist sig at være mere end en trend — det er blevet en
            moderne klassiker, der fungerer i alt fra loftslejligheder til villaer. Matteret
            glasvæg er det perfekte valg, når du vil lade lys passere mellem zoner men bevare
            privatlivet, fx mellem toilet og bruser.
          </p>
          <p>
            Glasblok-vægge (også kaldet glasbyggesten) er kommet tilbage som en retro-trend.
            De giver et helt anderledes, skulpturelt udtryk og kan bygges i kurver og bølger,
            som plane glasvægge ikke kan. Moderne glasblokke fås i mange farver og
            gennemsigtighedsgrader.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Glasvæg prisinterval" />
          <p>
            En standard fast glasvæg (100x200 cm) i 8 mm klart glas med krom-beslag koster ca.
            4.000-6.000 kr. Glasvægge med sort ramme og sprosser koster 5.000-12.000 kr.
            afhængigt af størrelse og kompleksitet. Matteret glas koster 15-25% mere end klart.
          </p>
          <p>
            Montering koster 2.000-5.000 kr. og bør udføres af en professionel, da glasset er
            tungt og kræver præcis montering for at stå stabilt og sikkert.
          </p>
        </section>

        <TipBox variant="tip" title="Sort ramme til enhver pris">
          <p>
            Hvis en fabriksfremstillet glasvæg med sort stålramme er for dyr, kan du opnå et
            lignende udtryk med en standard glasvæg og sorte dekorations-sprosser, der limes
            på glasset efterfølgende. De koster 200-500 kr. pr. sæt og giver næsten det
            samme visuelle resultat. Alternativt kan en smed lave en custom-ramme, der ofte
            er billigere end færdige designerløsninger.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Glastykkelse:</strong> 8 mm til standard glasvægge
              op til 120 cm bredde. 10-12 mm til større paneler og glasvægge uden ramme.
            </li>
            <li>
              <strong className="font-serif">Sikkerhed:</strong> Kun hærdet sikkerhedsglas (ESG)
              eller lamineret sikkerhedsglas (VSG) til badeværelser. Normal glas er farligt.
            </li>
            <li>
              <strong className="font-serif">Privatliv:</strong> Klart glas til åbent udtryk.
              Frostet/matteret for privatliv. Smart-glas kan skifte mellem klart og frostet.
            </li>
            <li>
              <strong className="font-serif">Profiler:</strong> Vælg profiler (krom, sort, messing)
              der matcher dit øvrige armatur og tilbehør for harmonisk helhed.
            </li>
            <li>
              <strong className="font-serif">Rengøring:</strong> Bestil glasset med nanobeskyttelse
              for markant lettere rengøring. Koster 500-1.000 kr. ekstra men sparer timer.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Montering kræver ekspertise">
          <p>
            Glasvægge vejer 20-30 kg pr. m² og kræver præcis montering for at stå stabilt.
            Forkert monterede glasvægge kan vælte og udgøre en alvorlig sikkerhedsrisiko.
            Beslagene skal forankres i massiv væg eller med specialdyvler til gipsvægge.
            Professionel montering anbefales altid.
          </p>
        </TipBox>

        <PullQuote
          quote="En glasvæg i badeværelset er det arkitektoniske greb, der gør den største forskel med mindst indsats. Den slipper lyset fri, skaber zoner og tilfører en elegance, som en muret væg aldrig kan."
          author="Boligarkitekt"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/brusevaeg" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusevæg</Link>
            <Link href="/elementer/brusekabine" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusekabine</Link>
            <Link href="/elementer/spejl" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Spejl</Link>
            <Link href="/materialer/microcement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Microcement</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål</h2>
          <FAQAccordion faqs={element.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
