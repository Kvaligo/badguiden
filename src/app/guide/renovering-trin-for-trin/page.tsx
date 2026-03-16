import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { PriceBar } from "@/components/PriceBar";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "renovering-trin-for-trin")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/renovering-trin-for-trin`,
  },
};

export default function RenoveringTrinForTrinPage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/renovering-trin-for-trin"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Renovering trin-for-trin" },
        ]}
        title="Renovering af Badeværelse Trin-for-Trin"
        intro="En komplet badeværelse-renovering er et af de største projekter du kan tage fat på som boligejer. Med den rette planlægning og struktur får du et flot resultat — uden ubehagelige overraskelser undervejs."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "overblik", label: "Overblik over processen" },
          { id: "trin-1", label: "1. Planlægning & design" },
          { id: "trin-2", label: "2. Budget & tilbud" },
          { id: "trin-3", label: "3. Nedrivning" },
          { id: "trin-4", label: "4. VVS & el-arbejde" },
          { id: "trin-5", label: "5. Vådrumssikring" },
          { id: "trin-6", label: "6. Fliser & vægge" },
          { id: "trin-7", label: "7. Inventar & armatur" },
          { id: "trin-8", label: "8. Finish & rengøring" },
          { id: "tidsplan", label: "Typisk tidsplan" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Vådrumssikring — Krav & Regler",
            href: "/guide/vaadrumssikring",
            description: "Den komplette guide til lovpligtig vådrumssikring.",
          },
          {
            title: "10 Fejl Du Skal Undgå",
            href: "/guide/fejl-at-undgaa",
            description: "De mest typiske og dyre fejl ved renovering.",
          },
          {
            title: "Byggetilladelse til Badeværelse",
            href: "/guide/byggetilladelse",
            description: "Hvornår du skal søge — og hvornår du kan undlade.",
          },
          {
            title: "Pris pr. m² — Komplet Oversigt",
            href: "/priser/pr-kvadratmeter",
            description: "Detaljeret prisoversigt for alle dele af renoveringen.",
          },
        ]}
      >
        <img
          src="/images/content/renovering.png"
          alt="Badeværelse-renovering i gang med synlig vådrumssikring og nye fliser"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Overblik */}
        <h2 id="overblik" className="scroll-mt-24">
          Overblik over processen
        </h2>
        <p>
          En komplet badeværelse-renovering følger en fast rækkefølge, hvor
          hvert trin bygger oven på det forrige. Spring du et trin over eller
          gør tingene i forkert rækkefølge, risikerer du dyre fejl og
          forsinkelser.
        </p>
        <p>
          De 8 trin nedenfor dækker hele processen fra de første overvejelser
          til du kan tage det første brusebad i dit nye badeværelse. Typisk
          tidsramme: 3-6 uger for et standardbad.
        </p>

        <PriceBar
          from={80000}
          to={200000}
          unit="kr."
          label="Typisk pris for komplet renovering (5-8 m²)"
        />

        <PullQuote
          quote="En vellykket renovering starter længe før hammeren svinger. De fleste problemer kan undgås med grundig planlægning i de første uger."
          author="Erfaren badeværelse-entreprenør"
        />

        {/* Trin 1 */}
        <h2 id="trin-1" className="scroll-mt-24">
          Trin 1: Planlægning & design
        </h2>
        <p>
          Planlægningsfasen er den vigtigste del af hele projektet. Her
          fastlægger du rammerne for alt det der følger — og det er her du kan
          spare flest penge ved at tænke dig godt om.
        </p>
        <p>Start med at svare på disse spørgsmål:</p>
        <ul>
          <li>
            Hvad skal renoveres? Komplet nedrivning eller opfriskning af
            eksisterende?
          </li>
          <li>
            Skal VVS flyttes, eller kan toilet, håndvask og bruser stå
            samme sted?
          </li>
          <li>
            Hvilken stil og materialer ønsker du? (Se vores{" "}
            <Link href="/guide/trends-2026" className="text-primary underline">
              trends-guide for 2026
            </Link>
            )
          </li>
          <li>
            Skal der laves strukturelle ændringer? (Se vores{" "}
            <Link href="/guide/byggetilladelse" className="text-primary underline">
              guide om byggetilladelse
            </Link>
            )
          </li>
          <li>Er der behov for forbedret ventilation eller gulvvarme?</li>
        </ul>

        <TipBox variant="tip" title="Tegn en skitse">
          <p>
            Lav en simpel tegning af dit badeværelse med mål. Marker hvor
            afløb, vandrør og el-punkter sidder. Denne tegning er guld værd
            når du skal indhente tilbud og kommunikere med håndværkere.
          </p>
        </TipBox>

        {/* Trin 2 */}
        <h2 id="trin-2" className="scroll-mt-24">
          Trin 2: Budget & tilbud
        </h2>
        <p>
          Med en klar plan kan du begynde at sammensætte et realistisk budget.
          Husk at medregne alle poster — mange boligejere glemmer fx
          bortskaffelse af affald, midlertidig badløsning og uforudsete
          udgifter.
        </p>

        <h3>Typisk budgetfordeling</h3>
        <ul>
          <li>
            <strong>Håndværkerløn:</strong> 40-50% af det samlede budget
          </li>
          <li>
            <strong>Materialer (fliser, vådrumssikring, maling):</strong> 25-35%
          </li>
          <li>
            <strong>Inventar & armatur:</strong> 15-25%
          </li>
          <li>
            <strong>Uforudsete udgifter (buffer):</strong> 15-20%
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Indhent minimum 3 tilbud">
          <p>
            Bed altid om skriftlige tilbud fra mindst 3 forskellige
            håndværkere. Sammenlign ikke kun priser — tjek også hvad der er
            inkluderet (materialer? oprydning? garanti?), læs referencer og
            spørg til tidsplanen.
          </p>
        </TipBox>

        {/* Trin 3 */}
        <h2 id="trin-3" className="scroll-mt-24">
          Trin 3: Nedrivning
        </h2>
        <p>
          Når planen er klar og håndværkerne er booket, starter den fysiske del
          med nedrivning af det gamle badeværelse. Dette er en af de dele du
          eventuelt kan{" "}
          <Link href="/guide/goer-det-selv" className="text-primary underline">
            gøre selv
          </Link>{" "}
          for at spare penge.
        </p>
        <p>Nedrivningen omfatter typisk:</p>
        <ul>
          <li>Fjernelse af gamle fliser, gulvbelægning og evt. loft</li>
          <li>Demontering af toilet, håndvask, badekar og armatur</li>
          <li>Fjernelse af gammel vådrumssikring (hvis den er defekt)</li>
          <li>Bortskaffelse af byggeaffald (container eller genbrugsplads)</li>
        </ul>
        <p>
          <strong>Typisk varighed:</strong> 2-4 dage for et standard bad.
        </p>

        <TipBox variant="obs" title="Pas på skjulte overraskelser">
          <p>
            Ved nedrivning kan du støde på skimmelsvamp, rådne bjælker eller
            ulovlige VVS-installationer. Det er her de uforudsete udgifter
            typisk dukker op — og derfor er en buffer på 15-20% i budgettet
            afgørende.
          </p>
        </TipBox>

        {/* Trin 4 */}
        <h2 id="trin-4" className="scroll-mt-24">
          Trin 4: VVS & el-arbejde
        </h2>
        <p>
          Med det gamle badeværelse fjernet er det tid til den tekniske
          infrastruktur. VVS- og el-arbejde skal udføres af autoriserede
          fagfolk — det er et lovkrav i Danmark.
        </p>
        <ul>
          <li>
            <strong>VVS:</strong> Nye vandrør, afløb, eventuelt flytning af
            toilet og bruser. Kontrol af eksisterende faldstamme.
          </li>
          <li>
            <strong>El:</strong> Nye stikkontakter (med HPFI-relæ i vådrum),
            belysningspunkter, ventilator, evt. gulvvarme-termostat.
          </li>
          <li>
            <strong>Gulvvarme:</strong> Hvis du ønsker gulvvarme, monteres den i
            denne fase — enten som elektrisk varmekabel eller vandbaseret system.
          </li>
        </ul>
        <p>
          <strong>Typisk varighed:</strong> 3-7 dage afhængig af omfang.
        </p>

        {/* Trin 5 */}
        <h2 id="trin-5" className="scroll-mt-24">
          Trin 5: Vådrumssikring
        </h2>
        <p>
          Den vigtigste fase i hele renoveringen. Vådrumssikring er lovpligtig
          og beskytter din bolig mod fugtskader i årtier fremover. Læs vores{" "}
          <Link href="/guide/vaadrumssikring" className="text-primary underline">
            komplette guide til vådrumssikring
          </Link>{" "}
          for alle detaljer om krav, typer og priser.
        </p>
        <p>Kort opsummeret:</p>
        <ul>
          <li>Gulv og vægge i vådzone grundes og membranes</li>
          <li>Forstærkningsbånd i alle hjørner og overgange</li>
          <li>Manchetter ved alle rørgennemføringer</li>
          <li>Minimum 2 lag membran med korrekt tørretid</li>
          <li>Kvalitetskontrol inden fliser monteres</li>
        </ul>
        <p>
          <strong>Typisk varighed:</strong> 3-5 dage (inkl. tørretid).
        </p>

        {/* Trin 6 */}
        <h2 id="trin-6" className="scroll-mt-24">
          Trin 6: Fliser & vægbehandling
        </h2>
        <p>
          Nu begynder det sjove — det visuelle resultat tager form. Om du
          vælger{" "}
          <Link href="/materialer/fliser" className="text-primary underline">
            fliser
          </Link>
          ,{" "}
          <Link href="/materialer/microcement" className="text-primary underline">
            microcement
          </Link>{" "}
          eller et andet materiale, er det vigtigt at arbejdet udføres korrekt
          oven på vådrumssikringen.
        </p>
        <ul>
          <li>Gulvfliser lægges med korrekt fald mod afløb (1:100)</li>
          <li>Vægfliser monteres nedefra og op med kryds for lige fuger</li>
          <li>Fugning udføres når fliseklæber er hærdet (typisk 24-48 timer)</li>
          <li>Silikone påføres i overgange mellem gulv/væg og ved inventar</li>
        </ul>
        <p>
          <strong>Typisk varighed:</strong> 5-10 dage afhængig af omfang og
          fliseformat.
        </p>

        {/* Trin 7 */}
        <h2 id="trin-7" className="scroll-mt-24">
          Trin 7: Inventar & armatur
        </h2>
        <p>
          Med fliser og vægge på plads monteres toilettet, håndvasken,
          brusekabinen eller brusevæggen, spejlet og al armatur. Denne fase
          kræver præcision — et skævt monteret toilet eller en utæt bruser
          ødelægger det samlede indtryk.
        </p>
        <ul>
          <li>Toilet monteres på afløb med ny pakning</li>
          <li>Håndvask og underskab installeres med vandtilslutning</li>
          <li>Bruser/badekar monteres og tilsluttes</li>
          <li>Armatur (vandhaner, brusehoved, afløbsrist) monteres</li>
          <li>Spejl, belysning og tilbehør (håndklædeholder, sæbeholder) sættes op</li>
        </ul>
        <p>
          <strong>Typisk varighed:</strong> 2-4 dage.
        </p>

        {/* Trin 8 */}
        <h2 id="trin-8" className="scroll-mt-24">
          Trin 8: Finish & rengøring
        </h2>
        <p>
          De sidste detaljer gør forskellen mellem et &ldquo;fint nok&rdquo;
          og et &ldquo;perfekt&rdquo; badeværelse:
        </p>
        <ul>
          <li>Silikone-fuger kontrolleres og evt. udbedres</li>
          <li>Malerarbejde afsluttes (loft, evt. vægge over fliser)</li>
          <li>Alle el-dåser og stikkontakter monteres</li>
          <li>Grundig slutrengøring (cementrester, fliseklæber)</li>
          <li>Vandtest — alle tilslutninger og afløb tjekkes for tæthed</li>
          <li>Gennemgang med håndværker og aflevering</li>
        </ul>

        <TipBox variant="anbefaling" title="Lav en mangelliste">
          <p>
            Gå badeværelset grundigt igennem sammen med håndværkeren ved
            aflevering. Notér alle mangler og småfejl — det er langt nemmere at
            få dem rettet inden slutbetalingen end bagefter.
          </p>
        </TipBox>

        <img
          src="/images/content/renovering-tidslinje.png"
          alt="Tidslinje for komplet badeværelse-renovering fra planlægning til færdigt bad"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Tidsplan */}
        <h2 id="tidsplan" className="scroll-mt-24">
          Typisk tidsplan for komplet renovering
        </h2>
        <p>
          Her er en realistisk tidsplan for et standard badeværelse på 5-8 m²:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Fase</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Varighed</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Uge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Planlægning & tilbud</td>
                <td className="px-4 py-3">2-4 uger</td>
                <td className="px-4 py-3">Forud</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Nedrivning</td>
                <td className="px-4 py-3">2-4 dage</td>
                <td className="px-4 py-3">Uge 1</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">VVS & el</td>
                <td className="px-4 py-3">3-7 dage</td>
                <td className="px-4 py-3">Uge 1-2</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Vådrumssikring</td>
                <td className="px-4 py-3">3-5 dage</td>
                <td className="px-4 py-3">Uge 2-3</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Fliser & vægge</td>
                <td className="px-4 py-3">5-10 dage</td>
                <td className="px-4 py-3">Uge 3-4</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Inventar & armatur</td>
                <td className="px-4 py-3">2-4 dage</td>
                <td className="px-4 py-3">Uge 4-5</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Finish & rengøring</td>
                <td className="px-4 py-3">1-2 dage</td>
                <td className="px-4 py-3">Uge 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Overvejer du en tilbygning</strong> i forbindelse med
          badeværelse-renoveringen?{" "}
          <a
            href="https://tilbygguiden.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Tilbygguiden.dk
          </a>{" "}
          har komplette guides til tilbygningsprojekter i Danmark.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={guide.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
