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

const element = elements.find((e) => e.slug === "brusekabine")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/brusekabine` },
};

export default function BrusekabinePage() {
  return (
    <>
      <ArticleSchema
        title={element.title}
        description={element.metaDescription}
        url="/elementer/brusekabine"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Elementer", href: "/elementer" },
          { label: element.name },
        ]}
        title={element.title}
        intro={element.description}
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af brusekabiner" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Brusevæg", href: "/elementer/brusevaeg", description: "Det åbne og moderne alternativ" },
          { title: "Glasvæg", href: "/elementer/glasvaeg", description: "Rumdeling med lys og stil" },
          { title: "Armatur", href: "/elementer/armatur", description: "Typer, finish og valg" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/brusekabine.png"
            alt="Brusekabine til badeværelse — moderne hjørnekabine i glas"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af brusekabiner</h2>
          <p>
            Der findes en brusekabine til ethvert badeværelse og budget. Her er de mest populære typer
            i danske hjem:
          </p>
          <div className="mt-6 space-y-5">
            {element.types.map((type, i) => (
              <div key={i} className="rounded-lg bg-card/50 p-4">
                <h3 className="font-serif font-bold text-text-main">{type.split(" — ")[0]}</h3>
                {type.includes(" — ") && (
                  <p className="mt-1 text-sm text-text-muted">{type.split(" — ")[1]}</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6">
            Hjørnebrusekabiner er det mest populære valg i danske badeværelser, da de udnytter
            et ellers ubrugt hjørne effektivt. Walk-in-kabiner vinder dog hurtigt frem hos
            boligejere, der renoverer og prioriterer et åbent, moderne udtryk. Dampbrusekabiner
            er en luksusløsning, der kombinerer bruser med dampbad for en spa-oplevelse hjemme.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar
            from={element.priceRange.from}
            to={element.priceRange.to}
            unit={element.priceRange.unit}
            label="Brusekabine prisinterval"
          />
          <p>
            Prisen afhænger primært af type, størrelse og materiale. En standard hjørnekabine i
            mellemklassen koster 5.000-8.000 kr., mens en premium walk-in-løsning med
            specialarmatur kan koste 15.000-25.000 kr. Hertil kommer installation på 2.000-5.000 kr.
            afhængigt af kompleksiteten og om VVS-tilslutninger skal ændres.
          </p>
          <p>
            Budgettip: Brusekabiner fra skandinaviske mærker som Svedbergs, INR eller Macro Design
            tilbyder god kvalitet til rimelige priser. Undgå de alleribilligste importkabiner, da
            glas, pakninger og beslag typisk er af markant lavere kvalitet.
          </p>
        </section>

        <TipBox variant="tip" title="Størrelsen gør forskellen">
          <p>
            Mange vælger den mindste brusekabine for at spare plads, men forskellen mellem 80x80 cm
            og 90x90 cm er enorm i daglig brugskomfort. De ekstra 10 cm i hver retning giver
            markant mere albuerum og en bedre bruseroplevelse. Investér i størrelse, hvis du har
            pladsen — det er den opgave, du vil takke dig selv for hver morgen.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Størrelse:</strong> Mål dit badeværelse omhyggeligt.
              Minimum 80x80 cm for en enkelt person, 90x120 cm eller større for familier. Husk
              plads til at åbne døren.
            </li>
            <li>
              <strong className="font-serif">Dørtype:</strong> Skydelåge sparer plads og er ideel
              til små bade. Svingdør kræver mere plads men er lettere at rengøre. Foldelåger er
              et kompromis.
            </li>
            <li>
              <strong className="font-serif">Glastype:</strong> Minimum 6 mm hærdet sikkerhedsglas.
              8 mm føles mere solidt. Easy-clean coating anbefales — det reducerer kalkopbygning
              markant.
            </li>
            <li>
              <strong className="font-serif">Bundkar:</strong> Lavt bundkar (5-10 cm) er den
              mest populære løsning. Niveaufri adgang kræver indfaldsfuge men er bedst til
              tilgængelighed og ældrevenlige bade.
            </li>
            <li>
              <strong className="font-serif">Afløb:</strong> Sørg for et afløb med tilstrækkelig
              kapacitet. Et linjeafløb er mere effektivt og moderne end et punktafløb, især i
              større kabiner.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Vådrumssikring er et krav">
          <p>
            Gulvet under og omkring brusekabinen skal altid have korrekt vådrumssikring iht.
            DS 484 og BR18. Det gælder også selvom kabinen har et tæt bundkar. Vandskader
            pga. manglende eller fejlagtig vådrumssikring er en af de hyppigste og dyreste
            skader i danske boliger.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Vedligeholdelse</h2>
          <p>
            Med den rette vedligeholdelse holder en kvalitets-brusekabine 15-20 år. Her er de
            vigtigste tips:
          </p>
          <ul className="mt-4 space-y-3">
            <li><strong>Efter hvert bad:</strong> Brug en glasskraber på glasset for at fjerne vandstænk. Det tager 30 sekunder og forhindrer kalkopbygning.</li>
            <li><strong>Ugentligt:</strong> Rengør glas, pakninger og skinner med mild rengøring. Tjek at afløbet er frit.</li>
            <li><strong>Halvårligt:</strong> Tjek silikone-fuger for tegn på misfarvning eller løsgøring. Udskift efter behov (typisk hvert 3.-5. år).</li>
          </ul>
        </section>

        <PullQuote
          quote="En brusekabine er en investering i daglig komfort. Vælg den størst mulige kabine dit badeværelse tillader — du vil aldrig fortryde det."
          author="Badeværelsesindretningskonsulent"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/brusevaeg" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusevæg</Link>
            <Link href="/elementer/glasvaeg" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Glasvæg</Link>
            <Link href="/elementer/armatur" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Armatur</Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
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
