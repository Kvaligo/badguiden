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
  (p) => p.slug === "brusekabine-vs-brusevaeg"
)!;

export const metadata: Metadata = {
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/priser/brusekabine-vs-brusevaeg`,
  },
};

export default function BrusekabineVsBrusevaegPage() {
  return (
    <>
      <ArticleSchema
        title={comparison.title}
        description={comparison.metaDescription}
        url="/priser/brusekabine-vs-brusevaeg"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Priser", href: "/priser" },
          { label: "Brusekabine vs. Brusevæg" },
        ]}
        title="Brusekabine vs. Brusevæg — Hvad Skal Du Vælge?"
        intro="Brusekabine eller brusevæg? Valget påvirker både prisen, det visuelle udtryk og den daglige brug af dit badeværelse. Her sammenligner vi de to løsninger, så du kan træffe det rigtige valg."
        readingTime={7}
        tocItems={[
          { id: "sammenligning", label: "Oversigt" },
          { id: "pris", label: "Prissammenligning" },
          { id: "plads", label: "Pladskrav" },
          { id: "installation", label: "Installation" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "hvornaar-hvad", label: "Hvornår vælge hvad?" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Brusekabine Guide",
            href: "/elementer/brusekabine",
            description: "Alt om brusekabiner til badeværelset.",
          },
          {
            title: "Brusevæg Guide",
            href: "/elementer/brusevaeg",
            description: "Alt om brusevægge i glas.",
          },
          {
            title: "Microcement vs. Fliser",
            href: "/priser/microcement-vs-fliser",
            description: "Sammenlign de to populære materialer.",
          },
          {
            title: "Budget vs. Luksus",
            href: "/priser/budget-vs-luksus",
            description: "Hvad får du for pengene?",
          },
        ]}
      >
        <img
          src="/images/content/brusekabine-vs-brusevaeg.png"
          alt="Sammenligning af brusekabine og brusevæg i badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Sammenligning */}
        <h2 id="sammenligning" className="scroll-mt-24">
          Oversigt: Brusekabine vs. Brusevæg
        </h2>

        <ComparisonTable
          title="Brusekabine vs. Brusevæg — Fordele & Ulemper"
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
        <h2 id="pris" className="scroll-mt-24">
          Prissammenligning
        </h2>

        <PriceBar from={3000} to={15000} unit="kr." label="Brusekabine (inkl. montering)" />
        <PriceBar from={2500} to={12000} unit="kr." label="Brusevæg (inkl. montering)" />

        <h3>Brusekabine: 3.000-15.000 kr.</h3>
        <p>
          Priserne spænder bredt alt efter kvalitet og funktioner. En
          basis-brusekabine i akryl fås fra ca. 3.000 kr. inkl. bundkar og
          glasdøre. Kabiner med ekstra funktioner som dampbad, massage-jets
          og LED-belysning koster 8.000-15.000 kr. eller mere.
        </p>
        <ul>
          <li>
            <strong>Budget (3.000-5.000 kr.):</strong> Hvide akryl-kabiner med
            skydedør. Funktionelle men med begrænset design.
          </li>
          <li>
            <strong>Mellempris (5.000-10.000 kr.):</strong> Kabiner i klart
            glas med aluminiums- eller sorte profiler. Bedre kvalitet og
            pænere udtryk.
          </li>
          <li>
            <strong>Premium (10.000-15.000+ kr.):</strong> Designerkabiner med
            dampfunktion, massage og avanceret glasbehandling.
          </li>
        </ul>

        <h3>Brusevæg: 2.500-12.000 kr.</h3>
        <p>
          En{" "}
          <Link href="/elementer/brusevaeg" className="text-primary underline">
            brusevæg
          </Link>{" "}
          er en enklere konstruktion — typisk en enkelt glasplade monteret på
          væg eller gulv. Prisen afhænger af glastype, størrelse og profiler.
        </p>
        <ul>
          <li>
            <strong>Budget (2.500-4.000 kr.):</strong> 80 cm bred, 8 mm hærdet
            glas med kromprofiles. God basis-løsning.
          </li>
          <li>
            <strong>Mellempris (4.000-7.000 kr.):</strong> 90-100 cm bred, 10
            mm glas, sorte profiler, evt. nano-coating mod kalk.
          </li>
          <li>
            <strong>Premium (7.000-12.000 kr.):</strong> Walk-in løsning med
            stabilisator, ekstra bred (120 cm+), specialglas (satineret,
            farvet eller sandblæst).
          </li>
        </ul>

        <TipBox variant="tip" title="Husk montering og tilbehør">
          <p>
            Monteringsomkostninger ligger typisk på 1.500-4.000 kr. uanset
            valg. En brusevæg kræver desuden stærkere vægfastgørelse og
            eventuelt et linjeafløb i gulvet — poster der bør medregnes i
            totalprisen.
          </p>
        </TipBox>

        {/* Pladskrav */}
        <h2 id="plads" className="scroll-mt-24">
          Pladskrav
        </h2>
        <p>
          Rummet spiller en stor rolle i valget:
        </p>

        <h3>Brusekabine</h3>
        <ul>
          <li>Typiske størrelser: 80x80 cm, 90x90 cm eller 80x120 cm</li>
          <li>Kræver plads til selve kabinen plus åbning af dør(e)</li>
          <li>Fylder visuelt mere pga. lukkede sider og bundkar</li>
          <li>Fås i hjørnemodeller der udnytter pladsen bedre</li>
        </ul>

        <h3>Brusevæg</h3>
        <ul>
          <li>Typisk 80-120 cm bred, åben i den ene side</li>
          <li>Giver en mere åben og rummelig fornemmelse</li>
          <li>Ingen bundkar — gulvet fortsætter ind i brusezonen</li>
          <li>Ideel til walk-in løsninger med niveaufri adgang</li>
        </ul>

        <PullQuote
          quote="I et lille badeværelse under 4 m² er en brusevæg ofte det bedste valg. Den åbne konstruktion får rummet til at føles større, og du undgår det lukkede, boks-agtige udtryk."
          author="Badeværelse-indretningskonsulent"
        />

        {/* Installation */}
        <h2 id="installation" className="scroll-mt-24">
          Installation
        </h2>

        <h3>Brusekabine — installation</h3>
        <p>
          En brusekabine leveres typisk som en samlet enhed eller i få dele
          der samles på stedet. Installationen tager normalt 2-4 timer:
        </p>
        <ol>
          <li>Forberedelse af gulv og tilslutningspunkter</li>
          <li>Montering af bundkar med vandlås og afløb</li>
          <li>Samling af sidepaneler og glasdøre</li>
          <li>Tilslutning til eksisterende VVS</li>
          <li>Fuging med silikone ved alle samlinger</li>
        </ol>

        <h3>Brusevæg — installation</h3>
        <p>
          Brusevægge kræver mere forberedelse af gulvet (gulvfald og
          afløb), men selve monteringen er hurtigere:
        </p>
        <ol>
          <li>Kontrol af gulvfald mod afløb (min. 1:100)</li>
          <li>Montering af vægbeslag og evt. gulvprofil</li>
          <li>Montering af glasplade i beslag</li>
          <li>Evt. stabilisatorstang til loft eller modstående væg</li>
          <li>Silikone-fuge ved væg og gulv</li>
        </ol>

        <TipBox variant="obs" title="Krav til gulvet ved brusevæg">
          <p>
            En brusevæg uden bundkar kræver at hele gulvet i brusezonen har
            korrekt fald og vandtæt gulv med godkendt{" "}
            <Link href="/guide/vaadrumssikring" className="text-primary underline">
              vådrumssikring
            </Link>
            . Det er en kritisk detalje som mange overser — og som kan
            kræve ekstra arbejde ved renovering.
          </p>
        </TipBox>

        {/* Vedligeholdelse */}
        <h2 id="vedligeholdelse" className="scroll-mt-24">
          Vedligeholdelse
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Aspekt</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Brusekabine</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Brusevæg</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Daglig pleje</td>
                <td className="px-4 py-3">Aftørring af glas og profiler</td>
                <td className="px-4 py-3">Aftørring af glas med skraber</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Kalk-problematik</td>
                <td className="px-4 py-3">Mange samlinger = mere kalk</td>
                <td className="px-4 py-3">Færre profiler = lettere rengøring</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Pakninger/fuger</td>
                <td className="px-4 py-3">Flere pakninger der slides</td>
                <td className="px-4 py-3">Minimal fuge (kun ved væg)</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Samlet indsats</td>
                <td className="px-4 py-3">Middel-høj</td>
                <td className="px-4 py-3">Lav</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hvornår hvad */}
        <h2 id="hvornaar-hvad" className="scroll-mt-24">
          Hvornår vælge hvad?
        </h2>

        <h3>Vælg brusekabine når:</h3>
        <ul>
          <li>Du vil undgå al vandsprøjt uden for brusezonen</li>
          <li>Du ønsker ekstra funktioner (dampbad, massage-jets)</li>
          <li>Du foretrækker en komplet, lukket løsning</li>
          <li>Budgettet er stramt (budget-kabiner er billige)</li>
          <li>Du har et meget lille bad hvor vandsprøjt er et problem</li>
        </ul>

        <h3>Vælg brusevæg når:</h3>
        <ul>
          <li>Du ønsker et åbent, moderne udtryk (walk-in)</li>
          <li>Du vil have nem vedligeholdelse og rengøring</li>
          <li>Du prioriterer design og æstetik</li>
          <li>Du vil fremtidssikre badet (niveaufri adgang)</li>
          <li>Du følger{" "}
            <Link href="/guide/trends-2026" className="text-primary underline">
              2026-trenden
            </Link>{" "}
            med åbne bruseløsninger
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Vores anbefaling til de fleste">
          <p>
            For et nyt eller nyrenoveret badeværelse anbefaler vi en
            brusevæg med walk-in løsning. Det giver det mest tidløse
            design, er nemt at vedligeholde og fremtidssikret. Men har du
            et meget lille bad eller vil undgå vandsprøjt helt, er en
            kvalitets-brusekabine i glas et godt alternativ.
          </p>
        </TipBox>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={comparison.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
