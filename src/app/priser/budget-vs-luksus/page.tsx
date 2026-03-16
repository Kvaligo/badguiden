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

const comparison = priceComparisons.find((p) => p.slug === "budget-vs-luksus")!;

export const metadata: Metadata = {
  title: comparison.metaTitle,
  description: comparison.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/priser/budget-vs-luksus`,
  },
};

export default function BudgetVsLuksusPage() {
  return (
    <>
      <ArticleSchema
        title={comparison.title}
        description={comparison.metaDescription}
        url="/priser/budget-vs-luksus"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Priser", href: "/priser" },
          { label: "Budget vs. Luksus" },
        ]}
        title="Budget vs. Luksus Badeværelse — Hvad Får Du For Pengene?"
        intro="Forskellen mellem et budget-badeværelse til 50.000 kr. og et luksus-bad til 300.000+ kr. er ikke bare prisskiltet. Her kigger vi på hvad du reelt får for pengene — og hvor det er smart at spare og investere."
        readingTime={9}
        tocItems={[
          { id: "sammenligning", label: "Oversigt" },
          { id: "budget", label: "Budget-badeværelset" },
          { id: "luksus", label: "Luksus-badeværelset" },
          { id: "spar-smart", label: "Spar smart" },
          { id: "investér", label: "Hvor du skal investere" },
          { id: "vaerdi", label: "Værdi ved boligsalg" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Pris pr. m²",
            href: "/priser/pr-kvadratmeter",
            description: "Komplet prisoversigt for alle dele.",
          },
          {
            title: "Microcement vs. Fliser",
            href: "/priser/microcement-vs-fliser",
            description: "Prissammenligning af populære materialer.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Komplet guide til hele processen.",
          },
          {
            title: "Gør-Det-Selv Guide",
            href: "/guide/goer-det-selv",
            description: "Spar 15-25% ved at gøre noget selv.",
          },
        ]}
      >
        <img
          src="/images/content/budget-vs-luksus.png"
          alt="Prissammenligning af budget og luksus badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Sammenligning */}
        <h2 id="sammenligning" className="scroll-mt-24">
          Oversigt: Budget vs. Luksus
        </h2>

        <PriceBar from={40000} to={80000} unit="kr." label="Budget-badeværelse" />
        <PriceBar from={200000} to={500000} unit="kr." label="Luksus-badeværelse" />

        <ComparisonTable
          title="Budget vs. Luksus — Hvad Får Du?"
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

        {/* Budget-badeværelset */}
        <h2 id="budget" className="scroll-mt-24">
          Budget-badeværelset (40.000-80.000 kr.)
        </h2>
        <p>
          Et budget-badeværelse er ikke et &ldquo;billigt&rdquo; badeværelse
          — det er et smart badeværelse hvor du prioriterer det vigtigste og
          vælger fornuftige materialer. Her er hvad du typisk får:
        </p>

        <h3>Materialer</h3>
        <ul>
          <li>
            <strong>Fliser:</strong> Standard hvide eller lyst ensfarvet
            keramiske fliser i 20x20 eller 30x60 cm format. Pris:
            300-500 kr/m².
          </li>
          <li>
            <strong>Vådrumssikring:</strong> Smørbar membran — fuldt
            lovmæssigt og lige så effektivt som dyrere alternativer.
          </li>
          <li>
            <strong>Maling:</strong> Vådrumsegnet maling på loft og vægge
            over flisekant. Funktionelt og pænt.
          </li>
        </ul>

        <h3>Inventar</h3>
        <ul>
          <li>
            <strong>Toilet:</strong> Vægmonteret toilet fra dansk
            grossist (fx Ifö, Gustavsberg). 1.500-3.000 kr.
          </li>
          <li>
            <strong>Håndvask:</strong> Standard porcelænsvask med
            underskab. 2.000-4.000 kr.
          </li>
          <li>
            <strong>Bruser:</strong> Budget-brusekabine eller enkel
            brusevæg. 2.500-5.000 kr.
          </li>
          <li>
            <strong>Armatur:</strong> Krom-armatur fra kendte mærker (fx
            Grohe, Hansgrohe budget-serier). 2.000-4.000 kr. samlet.
          </li>
        </ul>

        <TipBox variant="tip" title="Budget-tip: Standardstørrelser sparer penge">
          <p>
            Fliser i standardstørrelser (20x20, 30x60 cm) er markant
            billigere end storformat eller specialformater. Hvide og lyse
            ensfarved fliser er billigst — og giver samtidig et tidløst,
            rent udtryk der aldrig bliver umoderne.
          </p>
        </TipBox>

        {/* Luksus-badeværelset */}
        <h2 id="luksus" className="scroll-mt-24">
          Luksus-badeværelset (200.000-500.000+ kr.)
        </h2>
        <p>
          I luksus-segmentet handler det om premium-materialer,
          designer-inventar og ekstra features der gør badeværelset til en
          daglig oplevelse:
        </p>

        <h3>Materialer</h3>
        <ul>
          <li>
            <strong>
              <Link href="/materialer/microcement" className="text-primary hover:underline">
                Microcement
              </Link>
              {" "}eller{" "}
              <Link href="/materialer/natursten" className="text-primary hover:underline">
                natursten
              </Link>
              :
            </strong>{" "}
            Fugeløse overflader i microcement (800-1.500 kr/m²) eller
            natursten som marmor og travertin (1.000-3.000 kr/m²).
          </li>
          <li>
            <strong>
              <Link href="/materialer/terrazzo" className="text-primary hover:underline">
                Terrazzo
              </Link>
              :
            </strong>{" "}
            Håndstøbt terrazzo-gulv med unikke farvekombinationer.
          </li>
          <li>
            <strong>Designer-fliser:</strong> Håndmalede eller
            specialproducerede fliser fra premium-mærker.
          </li>
        </ul>

        <h3>Inventar</h3>
        <ul>
          <li>
            <strong>Designer-toilet:</strong> Væghængt med softclose, slim
            design og evt. bidet-funktion. 6.000-15.000 kr.
          </li>
          <li>
            <strong>Fritstående håndvask:</strong> I natursten, terrazzo
            eller solid surface. 8.000-25.000 kr.
          </li>
          <li>
            <strong>Walk-in bruser:</strong> Stor glasvæg med regnbruser i
            loftet og håndbruser. 15.000-30.000 kr.
          </li>
          <li>
            <strong>Fritstående badekar:</strong> Skulpturelt badekar som
            centerpiece. 15.000-50.000+ kr.
          </li>
        </ul>

        <h3>Ekstra features</h3>
        <ul>
          <li>
            <strong>Gulvvarme:</strong> Vandbaseret eller elektrisk.
            3.000-8.000 kr. for installation.
          </li>
          <li>
            <strong>LED-spejl med anti-dug:</strong> 3.000-10.000 kr.
          </li>
          <li>
            <strong>Dampbad-funktion:</strong> 10.000-25.000 kr. for
            generator og installation.
          </li>
          <li>
            <strong>Dæmpbar stemningsbelysning:</strong> LED-strips, niche-lys
            og spots. 5.000-15.000 kr.
          </li>
          <li>
            <strong>Sort designer-armatur:</strong> Premium-mærker som
            Vola, Dornbracht eller Axor. 15.000-40.000 kr. samlet.
          </li>
        </ul>

        <PullQuote
          quote="Et luksus-badeværelse handler ikke om at bruge flest penge — det handler om at skabe en daglig oplevelse. De bedste luksus-bad er dem hvor hvert element er valgt med omtanke, ikke bare prisskiltet."
          author="Badeværelse-arkitekt"
        />

        {/* Spar smart */}
        <h2 id="spar-smart" className="scroll-mt-24">
          Hvor du kan spare smart
        </h2>
        <p>
          Uanset budget er der poster hvor du kan spare uden at kompromittere
          kvaliteten:
        </p>

        <ol>
          <li>
            <strong>Gør nedrivningen selv:</strong> Spar 8.000-15.000 kr.
            Læs vores{" "}
            <Link href="/guide/goer-det-selv" className="text-primary underline">
              DIY-guide
            </Link>
            .
          </li>
          <li>
            <strong>Vælg standard flisestørrelser:</strong> 30x60 cm er
            billigere at købe OG lægge end storformat (120x60 cm).
          </li>
          <li>
            <strong>Undgå at flytte VVS:</strong> Hold toilet og bruser
            samme sted — flytning koster 15.000-35.000 kr. ekstra.
          </li>
          <li>
            <strong>Vælg krom armatur:</strong> Krom er billigere end sort
            eller messing og er det nemmeste at vedligeholde.
          </li>
          <li>
            <strong>Køb inventar i kampagner:</strong> Byggemarkeder og
            online-butikker har jævnligt udsalg med 20-40% rabat på
            badeværelsesmøbler.
          </li>
          <li>
            <strong>Mal selv:</strong> Loft og vægge over flisekant kan du
            nemt male selv. Besparelse: 3.000-6.000 kr.
          </li>
        </ol>

        <TipBox variant="obs" title="Spar ALDRIG på disse ting">
          <p>
            <strong>Vådrumssikring:</strong> Altid korrekt udført af
            certificeret fagmand.{" "}
            <strong>VVS-tilslutninger:</strong> Altid autoriseret installatør.{" "}
            <strong>El-arbejde:</strong> Altid autoriseret el-installatør.
            Besparelser her koster dig det tidobbelte i reparationer.
          </p>
        </TipBox>

        {/* Hvor du skal investere */}
        <h2 id="investér" className="scroll-mt-24">
          Hvor du skal investere
        </h2>
        <p>
          Nogle investeringer giver uforholdsmæssig meget værdi — både i
          daglig brug og ved boligsalg:
        </p>

        <ol>
          <li>
            <strong>Gulvvarme:</strong> Koster 3.000-8.000 kr. at
            installere under renovering, men 30.000+ kr. at eftermontere.
            Det er den feature flest fortryder de ikke valgte.
          </li>
          <li>
            <strong>God armatur:</strong> Du rører armaturen flere gange
            dagligt. Kvalitetsarmatur fra Grohe, Hansgrohe eller lignende
            holder 15-20 år og føles mærkbart bedre end billige alternativer.
          </li>
          <li>
            <strong>Korrekt ventilation:</strong> En god fugtstyret
            ventilator (1.500-4.000 kr.) forlænger hele badeværelsets
            levetid markant ved at holde fugten nede.
          </li>
          <li>
            <strong>Belysning:</strong> Godt planlagt belysning i 3 lag
            (generel, opgave, stemning) gør en enorm forskel for rummets
            atmosfære — og koster relativt lidt.
          </li>
          <li>
            <strong>Anti-skrid gulvfliser:</strong> Minimal merudgift
            (R10+ rating), men stor forskel i sikkerhed — særligt med børn
            og ældre i husstanden.
          </li>
        </ol>

        <TipBox variant="anbefaling" title="Den gyldne mellemvej">
          <p>
            For de fleste danske boligejere er &ldquo;mellempris med smarte
            opgraderinger&rdquo; den bedste strategi: standard fliser,
            kvalitets-armatur, gulvvarme og god belysning. Total:
            100.000-150.000 kr. for et 6 m² bad — men det føles markant
            bedre end budget.
          </p>
        </TipBox>

        {/* Værdi ved boligsalg */}
        <h2 id="vaerdi" className="scroll-mt-24">
          Værdi ved boligsalg
        </h2>
        <p>
          Et nyere badeværelse øger boligens værdi — men hvor meget afhænger
          af boligtype, beliggenhed og kvalitetsniveau:
        </p>
        <ul>
          <li>
            <strong>Budget-renovering (40-80.000 kr.):</strong> Øger typisk
            boligværdien med 50.000-100.000 kr. — en god investering, da du
            næsten altid får pengene igen.
          </li>
          <li>
            <strong>Mellempris (80-150.000 kr.):</strong> Øger typisk
            boligværdien med 80.000-150.000 kr. Den bedste ROI for de fleste.
          </li>
          <li>
            <strong>Luksus (200.000+ kr.):</strong> Øger typisk
            boligværdien med 100.000-200.000 kr. — du får sjældent den
            fulde investering igen, men nyder det selv i mellemtiden.
          </li>
        </ul>

        <PullQuote
          quote="Et nyt badeværelse sælger ikke boligen alene — men et gammelt, slidt badeværelse kan afskrække købere markant. Investér i et pænt, funktionelt bad, og renover primært for din egen komforts skyld."
          author="Ejendomsmægler"
        />

        <p>
          <strong>Konklusion:</strong> Budget-renoveringer giver den højeste
          procentvise ROI. Luksus-renoveringer er primært en
          livsstilsinvestering — gør det for din egen skyld, ikke for
          gendalgsværdien.
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
