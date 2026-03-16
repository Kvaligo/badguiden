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

const comparison = priceComparisons.find((p) => p.slug === "microcement-vs-fliser")!;

export const metadata: Metadata = {
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/priser/microcement-vs-fliser`,
  },
};

export default function MicrocementVsFliserPage() {
  return (
    <>
      <ArticleSchema
        title={comparison.title}
        description={comparison.metaDescription}
        url="/priser/microcement-vs-fliser"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Priser", href: "/priser" },
          { label: "Microcement vs. Fliser" },
        ]}
        title="Microcement vs. Fliser — Pris, Holdbarhed & Udseende"
        intro="Microcement eller fliser? Det er et af de mest stillede spørgsmål ved badeværelse-renovering i Danmark. Begge materialer har klare fordele — men de passer til vidt forskellige behov og budgetter. Her er den upartiske sammenligning."
        readingTime={8}
        tocItems={[
          { id: "sammenligning", label: "Oversigt" },
          { id: "pris", label: "Prissammenligning" },
          { id: "holdbarhed", label: "Holdbarhed" },
          { id: "udseende", label: "Udseende & stil" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "hvornaar-hvad", label: "Hvornår vælge hvad?" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Microcement Badeværelse",
            href: "/materialer/microcement",
            description: "Alt om microcement som badeværelse-materiale.",
          },
          {
            title: "Fliser til Badeværelse",
            href: "/materialer/fliser",
            description: "Komplet guide til fliser i badeværelset.",
          },
          {
            title: "Budget vs. Luksus",
            href: "/priser/budget-vs-luksus",
            description: "Hvad får du for pengene?",
          },
          {
            title: "Pris pr. m²",
            href: "/priser/pr-kvadratmeter",
            description: "Komplet prisoversigt for badeværelset.",
          },
        ]}
      >
        <img
          src="/images/content/microcement-vs-fliser.png"
          alt="Sammenligning af microcement og fliser i badeværelse side om side"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Sammenligning */}
        <h2 id="sammenligning" className="scroll-mt-24">
          Oversigt: Microcement vs. Fliser
        </h2>

        <ComparisonTable
          title="Microcement vs. Fliser — Fordele & Ulemper"
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

        {/* Prissammenligning */}
        <h2 id="pris" className="scroll-mt-24">
          Prissammenligning
        </h2>
        <p>
          Prisen er for mange det afgørende parameter. Her er den detaljerede
          sammenligning:
        </p>

        <PriceBar from={800} to={1500} unit="kr/m²" label="Microcement (inkl. påføring)" />
        <PriceBar from={300} to={1200} unit="kr/m²" label="Fliser (materialer)" />

        <h3>Microcement: 800-1.500 kr/m²</h3>
        <p>
          Prisen inkluderer materialer og professionel påføring. For et
          gennemsnitligt badeværelse på 6-8 m² (gulv + vægge i vådzone ca. 15-20 m²
          samlet overflade) bliver den samlede materialepris 12.000-30.000 kr.
          Hertil kommer arbejdsløn for klargøring og vådrumssikring.
        </p>
        <p>
          <strong>Vigtig detalje:</strong>{" "}
          <Link href="/materialer/microcement" className="text-primary underline">
            Microcement
          </Link>{" "}
          kan påføres direkte ovenpå eksisterende fliser, hvilket sparer
          nedrivningsomkostninger (typisk 5.000-15.000 kr.).
        </p>

        <h3>Fliser: 300-1.200 kr/m²</h3>
        <p>
          Prisen dækker kun materialer. Arbejdslønnen for flisearbejde
          (800-1.800 kr/m²) kommer oveni. Den samlede pris inkl. arbejde
          lander typisk på 1.100-3.000 kr/m² — altså sammenlignelig med
          microcement i den dyre ende.
        </p>
        <p>
          Budget-fliser (storformat hvide fliser) kan fås fra 300 kr/m², mens
          designerfliser fra mærker som Made a Mano eller File Under Pop let
          rammer 1.000+ kr/m².
        </p>

        <TipBox variant="tip" title="Husk at sammenligne totalpris">
          <p>
            Materialepris pr. m² er kun halve historien. Sammenlign altid den
            samlede pris inkl. arbejdsløn, klargøring, vådrumssikring og
            fugning/forsegling. Her er microcement og fliser ofte tættere på
            hinanden end materialepriserne antyder.
          </p>
        </TipBox>

        {/* Holdbarhed */}
        <h2 id="holdbarhed" className="scroll-mt-24">
          Holdbarhed
        </h2>
        <p>
          Når det gælder ren holdbarhed, vinder{" "}
          <Link href="/materialer/fliser" className="text-primary underline">
            fliser
          </Link>{" "}
          klart:
        </p>
        <ul>
          <li>
            <strong>Fliser:</strong> 30+ år med minimal vedligeholdelse. Keramiske
            og porcelænsfliser er ekstremt slidstærke, vandtætte og kemisk
            resistente. Fugerne kræver dog vedligeholdelse og evt. udskiftning
            hvert 5-10 år.
          </li>
          <li>
            <strong>Microcement:</strong> 15-20 år med regelmæssig
            vedligeholdelse. Kræver genforsegling med voks eller sealer hvert
            2-3 år. Kan dog repareres lokalt — revner og slidmærker kan
            spartles og genforsegles uden at hele overfladen skal fornyes.
          </li>
        </ul>

        {/* Udseende */}
        <h2 id="udseende" className="scroll-mt-24">
          Udseende & stil
        </h2>
        <p>
          Her er valget i høj grad en smagssag, men der er klare
          stilmæssige forskelle:
        </p>

        <h3>Microcement</h3>
        <p>
          Fugeløst, organisk og skulpturelt. Hver overflade er unik, da
          materialet påføres i hånden. Giver et varmt, blødt udtryk trods
          det cementagtige udseende. Perfekt til minimalistisk, skandinavisk
          og spa-inspireret design.
        </p>

        <h3>Fliser</h3>
        <p>
          Uendeligt varieret. Fra klassiske hvide metrofliser til
          håndmalede mønsterfliser, storformat porcelæn og mosaik. Giver
          mulighed for grafiske mønstre, farvekombinationer og teksturer
          som microcement ikke kan matche.
        </p>

        <PullQuote
          quote="Microcement giver ro og sammenhæng. Fliser giver personlighed og karakter. Begge er smukke valg — det handler om hvilken stemning du vil skabe."
          author="Badeværelse-designer"
        />

        {/* Vedligeholdelse */}
        <h2 id="vedligeholdelse" className="scroll-mt-24">
          Vedligeholdelse
        </h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Opgave</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Microcement</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Fliser</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Daglig rengøring</td>
                <td className="px-4 py-3">pH-neutral sæbe</td>
                <td className="px-4 py-3">Standard rengøring</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Vedligeholdelse</td>
                <td className="px-4 py-3">Genforsegling hvert 2-3 år</td>
                <td className="px-4 py-3">Fugevedligehold hvert 5-10 år</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Reparation</td>
                <td className="px-4 py-3">Lokal spartel + forsegling</td>
                <td className="px-4 py-3">Udskift enkelt flise</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Følsomhed</td>
                <td className="px-4 py-3">Syrer, skuremidler, skarpe genstande</td>
                <td className="px-4 py-3">Stød og tunge genstande (revner)</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Vedligeholdelsesindsats</td>
                <td className="px-4 py-3">Middel-høj</td>
                <td className="px-4 py-3">Lav</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hvornår vælge hvad */}
        <h2 id="hvornaar-hvad" className="scroll-mt-24">
          Hvornår vælge hvad?
        </h2>

        <h3>Vælg microcement når:</h3>
        <ul>
          <li>Du ønsker et fugeløst, moderne og minimalistisk udtryk</li>
          <li>Du renoverer ovenpå eksisterende fliser (sparer nedrivning)</li>
          <li>Du prioriterer æstetik og unik karakter</li>
          <li>Du er indstillet på periodisk vedligeholdelse</li>
          <li>Budgettet tillader den lidt højere materialepris</li>
        </ul>

        <h3>Vælg fliser når:</h3>
        <ul>
          <li>Du ønsker maksimal holdbarhed og lav vedligeholdelse</li>
          <li>Du vil have et stort udvalg i farver og mønstre</li>
          <li>Du har et strammere budget (budgetfliser er billigere)</li>
          <li>Du foretrækker et traditionelt, velkendt materiale</li>
          <li>Du vil kunne reparere enkeltstående skader nemt</li>
        </ul>

        <TipBox variant="anbefaling" title="Kombinér det bedste">
          <p>
            Mange danske boligejere vælger en kombination: microcement på
            vægge for det moderne, fugeløse udtryk — og fliser på gulvet for
            slidstyrke og anti-skrid. Det giver det bedste fra begge verdener.
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
