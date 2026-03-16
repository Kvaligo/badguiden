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

const comparison = priceComparisons.find((p) => p.slug === "pr-kvadratmeter")!;

export const metadata: Metadata = {
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/priser/pr-kvadratmeter`,
  },
};

export default function PrPrKvadratmeterPage() {
  return (
    <>
      <ArticleSchema
        title={comparison.title}
        description={comparison.metaDescription}
        url="/priser/pr-kvadratmeter"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Priser", href: "/priser" },
          { label: "Pris pr. m²" },
        ]}
        title="Badeværelse Pris pr. m² — Komplet Oversigt"
        intro="Prisen pr. kvadratmeter er den mest retvisende måde at sammenligne badeværelse-renoveringer på. Her er den komplette oversigt over alle omkostninger — fra materialer og arbejdsløn til inventar og uforudsete udgifter."
        readingTime={9}
        tocItems={[
          { id: "overblik", label: "Prisoverblik" },
          { id: "materialer", label: "Materialepriser" },
          { id: "arbejdslon", label: "Arbejdsløn" },
          { id: "inventar", label: "Inventar & armatur" },
          { id: "regionale", label: "Regionale forskelle" },
          { id: "beregner", label: "Beregn din pris" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Budget vs. Luksus",
            href: "/priser/budget-vs-luksus",
            description: "Hvad får du for pengene?",
          },
          {
            title: "Microcement vs. Fliser",
            href: "/priser/microcement-vs-fliser",
            description: "Prissammenligning af de to materialer.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Komplet procesguide med priser for hvert trin.",
          },
          {
            title: "10 Fejl Du Skal Undgå",
            href: "/guide/fejl-at-undgaa",
            description: "Undgå dyre fejl ved renoveringen.",
          },
        ]}
      >
        {/* Prisoverblik */}
        <h2 id="overblik" className="scroll-mt-24">
          Samlet prisoverblik pr. m²
        </h2>
        <p>
          Den samlede pris for en komplet badeværelse-renovering pr. m²
          afhænger af kvalitetsniveauet:
        </p>

        <PriceBar from={8000} to={15000} unit="kr/m²" label="Budget-renovering" />
        <PriceBar from={15000} to={25000} unit="kr/m²" label="Mellempris-renovering" />
        <PriceBar from={25000} to={40000} unit="kr/m²" label="Luksus-renovering" />

        <p>
          For et standardbad på 6 m² betyder det:
        </p>
        <ul>
          <li>
            <strong>Budget:</strong> 48.000-90.000 kr.
          </li>
          <li>
            <strong>Mellempris:</strong> 90.000-150.000 kr.
          </li>
          <li>
            <strong>Luksus:</strong> 150.000-240.000 kr.
          </li>
        </ul>

        <ComparisonTable
          title="Materialer vs. Arbejdsløn pr. m²"
          optionA={{
            name: comparison.optionA.name,
            price: `${comparison.optionA.priceFrom.toLocaleString("da-DK")}-${comparison.optionA.priceTo.toLocaleString("da-DK")} kr/m²`,
            pros: comparison.optionA.pros,
            cons: comparison.optionA.cons,
          }}
          optionB={{
            name: comparison.optionB.name,
            price: `${comparison.optionB.priceFrom.toLocaleString("da-DK")}-${comparison.optionB.priceTo.toLocaleString("da-DK")} kr/m²`,
            pros: comparison.optionB.pros,
            cons: comparison.optionB.cons,
          }}
        />

        <TipBox variant="tip" title="Husk buffer i budgettet">
          <p>
            Alle priser nedenfor er vejledende gennemsnit. Læg altid 15-20%
            ekstra ind som buffer til uforudsete udgifter — skjulte
            rørproblemer, ekstra spartelarbejde eller materialer der skal
            ombestilles.
          </p>
        </TipBox>

        {/* Materialepriser */}
        <h2 id="materialer" className="scroll-mt-24">
          Materialepriser pr. m²
        </h2>
        <p>
          Her er en detaljeret oversigt over de mest brugte materialer i
          danske badeværelser:
        </p>

        <h3>Gulvmaterialer</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Materiale</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Pris (materiale)</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Pris (inkl. arbejde)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">
                  <Link href="/materialer/fliser" className="text-primary hover:underline">Keramiske fliser</Link>
                </td>
                <td className="px-4 py-3">300-800 kr/m²</td>
                <td className="px-4 py-3">1.100-2.600 kr/m²</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">
                  <Link href="/materialer/klinker" className="text-primary hover:underline">Klinker (porcelæn)</Link>
                </td>
                <td className="px-4 py-3">400-1.200 kr/m²</td>
                <td className="px-4 py-3">1.200-3.000 kr/m²</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">
                  <Link href="/materialer/microcement" className="text-primary hover:underline">Microcement</Link>
                </td>
                <td className="px-4 py-3">800-1.500 kr/m²</td>
                <td className="px-4 py-3">800-1.500 kr/m² (inkl.)</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">
                  <Link href="/materialer/terrazzo" className="text-primary hover:underline">Terrazzo</Link>
                </td>
                <td className="px-4 py-3">800-2.000 kr/m²</td>
                <td className="px-4 py-3">1.600-3.800 kr/m²</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">
                  <Link href="/materialer/natursten" className="text-primary hover:underline">Natursten</Link>
                </td>
                <td className="px-4 py-3">1.000-3.000 kr/m²</td>
                <td className="px-4 py-3">2.000-5.000 kr/m²</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Vægmaterialer</h3>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Materiale</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Pris (materiale)</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Pris (inkl. arbejde)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Vægfliser (standard)</td>
                <td className="px-4 py-3">200-600 kr/m²</td>
                <td className="px-4 py-3">1.000-2.400 kr/m²</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Storformat-fliser (60x120+)</td>
                <td className="px-4 py-3">500-1.500 kr/m²</td>
                <td className="px-4 py-3">1.300-3.300 kr/m²</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Microcement (væg)</td>
                <td className="px-4 py-3">700-1.200 kr/m²</td>
                <td className="px-4 py-3">700-1.200 kr/m² (inkl.)</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Vådrumsegnet maling</td>
                <td className="px-4 py-3">50-150 kr/m²</td>
                <td className="px-4 py-3">350-750 kr/m²</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Vådrumssikring</h3>
        <PriceBar from={2000} to={5000} unit="kr/m²" label="Vådrumssikring (inkl. arbejde)" />
        <p>
          <Link href="/guide/vaadrumssikring" className="text-primary underline">
            Vådrumssikring
          </Link>{" "}
          er lovpligtig og en fast post uanset materialevalg. Prisen afhænger
          af type (smørbar membran vs. foliemembran) og underlagets tilstand.
        </p>

        {/* Arbejdsløn */}
        <h2 id="arbejdslon" className="scroll-mt-24">
          Arbejdsløn pr. m²
        </h2>
        <p>
          Arbejdsløn udgør typisk 40-50% af den samlede pris. Her er en
          oversigt fordelt på faggrupper:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Faggruppe</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Pris pr. m²</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Timepris</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">VVS-installatør</td>
                <td className="px-4 py-3">1.500-4.000 kr/m²</td>
                <td className="px-4 py-3">450-650 kr/time</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">El-installatør</td>
                <td className="px-4 py-3">500-1.500 kr/m²</td>
                <td className="px-4 py-3">400-600 kr/time</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Flisemurer</td>
                <td className="px-4 py-3">800-1.800 kr/m²</td>
                <td className="px-4 py-3">350-550 kr/time</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Maler</td>
                <td className="px-4 py-3">300-600 kr/m²</td>
                <td className="px-4 py-3">300-500 kr/time</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Nedrivning</td>
                <td className="px-4 py-3">500-1.200 kr/m²</td>
                <td className="px-4 py-3">300-450 kr/time</td>
              </tr>
            </tbody>
          </table>
        </div>

        <PullQuote
          quote="Arbejdslønnen er den post der varierer mest fra tilbud til tilbud. Få altid detaljerede tilbud der specificerer timer og priser for hver fase — så kan du sammenligne på lige vilkår."
        />

        {/* Inventar */}
        <h2 id="inventar" className="scroll-mt-24">
          Inventar & armatur
        </h2>
        <p>
          Inventar udgør typisk 15-25% af budgettet. Her er prisintervaller
          for de mest gængse elementer:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Element</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Budget</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Mellempris</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Luksus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Toilet</td>
                <td className="px-4 py-3">1.500-3.000 kr.</td>
                <td className="px-4 py-3">3.000-6.000 kr.</td>
                <td className="px-4 py-3">6.000-15.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Håndvask + underskab</td>
                <td className="px-4 py-3">2.000-5.000 kr.</td>
                <td className="px-4 py-3">5.000-12.000 kr.</td>
                <td className="px-4 py-3">12.000-30.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Bruse-armatur</td>
                <td className="px-4 py-3">1.000-3.000 kr.</td>
                <td className="px-4 py-3">3.000-6.000 kr.</td>
                <td className="px-4 py-3">6.000-15.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Brusekabine/-væg</td>
                <td className="px-4 py-3">2.500-5.000 kr.</td>
                <td className="px-4 py-3">5.000-10.000 kr.</td>
                <td className="px-4 py-3">10.000-20.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Spejl</td>
                <td className="px-4 py-3">500-1.500 kr.</td>
                <td className="px-4 py-3">1.500-4.000 kr.</td>
                <td className="px-4 py-3">4.000-10.000 kr.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Regionale forskelle */}
        <h2 id="regionale" className="scroll-mt-24">
          Regionale prisforskelle i Danmark
        </h2>
        <p>
          Håndværkerpriser varierer markant rundt i Danmark. Her er et
          overblik:
        </p>
        <ul>
          <li>
            <strong>København & Nordsjælland:</strong> De højeste priser.
            Regn med 15-25% tillæg i forhold til landsgennemsnittet. Høj
            efterspørgsel og dyrere drift presser priserne op.
          </li>
          <li>
            <strong>Aarhus & Østjylland:</strong> Lidt under
            København-niveau, men stigende. Typisk 5-15% over gennemsnittet.
          </li>
          <li>
            <strong>Odense & Fyn:</strong> Tæt på landsgennemsnittet.
            Generelt gode priser og god tilgængelighed af håndværkere.
          </li>
          <li>
            <strong>Vest- og Nordjylland:</strong> Typisk de laveste priser
            i landet. 10-20% under hovedstadsområdet. Længere
            transportafstande kan dog tilføje ekstraomkostninger.
          </li>
          <li>
            <strong>Bornholm & øer:</strong> Varierende, men transport af
            materialer og specialister kan give et tillæg.
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Få lokale tilbud">
          <p>
            Priserne ovenfor er vejledende landsgennemsnit. Indhent altid 3
            tilbud fra lokale håndværkere for at få den præcise pris i dit
            område. Husk at sammenligne hvad der er inkluderet — ikke kun
            bundlinjen.
          </p>
        </TipBox>

        {/* Beregn din pris */}
        <h2 id="beregner" className="scroll-mt-24">
          Beregn din pris — et eksempel
        </h2>
        <p>
          Her er et konkret eksempel for et gennemsnitligt dansk badeværelse
          i mellempris-segmentet:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Post</th>
                <th className="text-right px-4 py-3 font-semibold text-text-main">Beløb</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Badeværelse: 6 m² (gulv)</td>
                <td className="px-4 py-3 text-right">-</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Nedrivning & bortskaffelse</td>
                <td className="px-4 py-3 text-right">8.000-12.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">VVS-arbejde</td>
                <td className="px-4 py-3 text-right">15.000-25.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">El-arbejde</td>
                <td className="px-4 py-3 text-right">5.000-10.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Vådrumssikring</td>
                <td className="px-4 py-3 text-right">15.000-25.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Fliser (materialer + arbejde)</td>
                <td className="px-4 py-3 text-right">20.000-35.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Inventar (toilet, vask, bruser)</td>
                <td className="px-4 py-3 text-right">15.000-25.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Armatur & tilbehør</td>
                <td className="px-4 py-3 text-right">5.000-10.000 kr.</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Maling & finish</td>
                <td className="px-4 py-3 text-right">3.000-6.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-primary/5 font-bold">
                <td className="px-4 py-3">Subtotal</td>
                <td className="px-4 py-3 text-right">86.000-148.000 kr.</td>
              </tr>
              <tr className="border-t border-card bg-card/40">
                <td className="px-4 py-3">Buffer (15%)</td>
                <td className="px-4 py-3 text-right">13.000-22.000 kr.</td>
              </tr>
              <tr className="border-t-2 border-primary/20 font-bold text-base">
                <td className="px-4 py-3">Samlet estimat</td>
                <td className="px-4 py-3 text-right text-primary">99.000-170.000 kr.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Det svarer til ca. <strong>16.500-28.300 kr. pr. m²</strong> for
          et 6 m² badeværelse i mellempris-segmentet — helt i tråd med
          branchegennemsnittet.
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
