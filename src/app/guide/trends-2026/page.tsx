import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "trends-2026")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/trends-2026`,
  },
};

export default function Trends2026Page() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/trends-2026"
        datePublished="2026-01-10"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Trends 2026" },
        ]}
        title="Badeværelse Trends 2026 — Hvad Er Hot i År?"
        intro="2026 byder på spændende trends inden for badeværelse-design i Danmark. Fra fugeløse overflader og sort armatur til smart teknologi og spa-følelse derhjemme. Her er de 7 største tendenser vi ser lige nu."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "trend-1", label: "1. Microcement & fugeløse overflader" },
          { id: "trend-2", label: "2. Naturlige materialer" },
          { id: "trend-3", label: "3. Sort armatur & elementer" },
          { id: "trend-4", label: "4. Walk-in brusere" },
          { id: "trend-5", label: "5. Smart teknologi" },
          { id: "trend-6", label: "6. Bæredygtige materialer" },
          { id: "trend-7", label: "7. Spa-oplevelse hjemme" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Vedligeholdelse af Badeværelse",
            href: "/guide/vedligeholdelse",
            description: "Hold dit nye trendy bad i topform.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Klar til at renovere? Her er hele processen.",
          },
          {
            title: "Microcement vs. Fliser",
            href: "/priser/microcement-vs-fliser",
            description: "Sammenlign de to populære materialer.",
          },
          {
            title: "Budget vs. Luksus",
            href: "/priser/budget-vs-luksus",
            description: "Hvad koster det at følge trends?",
          },
        ]}
      >
        <img
          src="/images/content/trends-2026.png"
          alt="Trendy badeværelse-design 2026 med moderne materialer og elegant indretning"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        <p>
          Badeværelse-trends i 2026 handler om at skabe rum der føles
          som en oase — rolige, naturlige og gennemtænkte. Den skandinaviske
          minimalisme har fået selskab af varmere toner, taktile materialer
          og smart teknologi der gør hverdagen lidt lettere.
        </p>

        <PullQuote
          quote="I 2026 designer vi ikke bare badeværelser — vi designer velvære. Badeværelset er gået fra at være rent funktionelt til at være boligens mest intime rum."
          author="Dansk interiørdesigner"
        />

        {/* Trend 1 */}
        <h2 id="trend-1" className="scroll-mt-24">
          Trend 1: Microcement og fugeløse overflader
        </h2>
        <p>
          Den absolut største trend i danske badeværelser lige nu.{" "}
          <Link href="/materialer/microcement" className="text-primary underline">
            Microcement
          </Link>{" "}
          giver et sammenhængende, fugeløst udtryk der føles rent og moderne.
          Materialet kan påføres på både vægge og gulv og skaber en
          skulpturel, organisk overflade.
        </p>
        <p>
          Populariteten skyldes flere faktorer: det minimalistiske udtryk
          passer perfekt til skandinavisk æstetik, det er hygiejnisk (ingen
          fuger hvor skimmel kan sætte sig), og det kan påføres ovenpå
          eksisterende fliser — smart ved renovering.
        </p>
        <ul>
          <li>
            <strong>Populære farver:</strong> Varm sand, cement-grå, off-white
            og dæmpede jordtoner
          </li>
          <li>
            <strong>Pris:</strong> 800-1.500 kr/m² inkl. påføring
          </li>
          <li>
            <strong>Kombination:</strong> Microcement-vægge med fliser på
            gulvet er en populær hybrid-løsning
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Overvej microcement hvis...">
          <p>
            ...du ønsker et moderne, fugeløst udtryk og er villig til den
            periodiske vedligeholdelse (genforsegling hvert 2-3 år). Materialet
            er særligt velegnet til renovering, da det kan lægges ovenpå
            eksisterende fliser.
          </p>
        </TipBox>

        {/* Trend 2 */}
        <h2 id="trend-2" className="scroll-mt-24">
          Trend 2: Naturlige materialer
        </h2>
        <p>
          I takt med at badeværelset bliver mere &ldquo;spa-agtigt&rdquo;
          vinder naturlige materialer frem. Særligt tre materialer dominerer:
        </p>

        <h3>
          <Link href="/materialer/terrazzo" className="text-primary hover:underline">
            Terrazzo
          </Link>
        </h3>
        <p>
          Det klassiske materiale er tilbage med fuld kraft. Moderne terrazzo
          fås i utallige farvekombinationer og kornstørrelser, og bruges på
          alt fra gulve og vægge til håndvaske og bordplader. Det
          speckle-agtige udtryk giver karakter uden at dominere.
        </p>

        <h3>
          <Link href="/materialer/natursten" className="text-primary hover:underline">
            Natursten
          </Link>
        </h3>
        <p>
          Marmor, travertin og kalksten i dæmpede nuancer bringer en
          tidløs elegance ind i badeværelset. Trenden i 2026 er at bruge
          natursten som accent — fx en enkelt marmorvæg eller en
          naturstens-håndvask — frem for at beklæde hele rummet.
        </p>

        <h3>Træelementer</h3>
        <p>
          Varmt egetræ i møbler og hylder bløder det ellers hårde
          badeværelse op. Behandlet med olie eller lak til vådrum kan træ
          bruges i tørre zoner og giver en spa-følelse.
        </p>

        {/* Trend 3 */}
        <h2 id="trend-3" className="scroll-mt-24">
          Trend 3: Sort armatur og elementer
        </h2>
        <p>
          Sort{" "}
          <Link href="/elementer/armatur" className="text-primary underline">
            armatur
          </Link>{" "}
          har domineret de seneste år, og trenden viser ingen tegn på at
          aftage i 2026. Tværtimod udvides den sorte palette til flere
          elementer:
        </p>
        <ul>
          <li>
            <strong>Sort armatur:</strong> Vandhaner, brusehoved og
            termostat i mat sort. Den mest populære finish i danske
            badeværelser lige nu.
          </li>
          <li>
            <strong>Sorte profiler:</strong> Bruseafskærmninger og glasvægge
            med sorte profiler i stedet for krom.
          </li>
          <li>
            <strong>Sort tilbehør:</strong> Håndklædeholder, sæbedispenser,
            toiletbørste og knager i mat sort.
          </li>
          <li>
            <strong>Sorte afløbsriste:</strong> Selv afløbet bliver et
            designelement.
          </li>
        </ul>
        <p>
          Sort armatur fungerer bedst med lyse overflader som hvide fliser,
          lys microcement eller naturfarvet terrazzo — kontrasten giver et
          grafisk og elegant udtryk.
        </p>

        <TipBox variant="tip" title="Husk vedligeholdelsen">
          <p>
            Sort armatur viser kalkafsætninger tydeligt. Sørg for at tørre
            armatur af efter brug, eller overvej PVD-coatet sort armatur der
            er mere modstandsdygtigt. Læs vores{" "}
            <Link href="/guide/vedligeholdelse" className="text-primary underline">
              vedligeholdelsesguide
            </Link>{" "}
            for flere tips.
          </p>
        </TipBox>

        {/* Trend 4 */}
        <h2 id="trend-4" className="scroll-mt-24">
          Trend 4: Walk-in brusere (åbne bruseløsninger)
        </h2>
        <p>
          Den lukkede{" "}
          <Link href="/elementer/brusekabine" className="text-primary underline">
            brusekabine
          </Link>{" "}
          er på vej ud til fordel for åbne walk-in brusere med en enkelt{" "}
          <Link href="/elementer/brusevaeg" className="text-primary underline">
            brusevæg
          </Link>{" "}
          i glas. Fordelen er et mere åbent, rummeligt udtryk — selv i
          mindre badeværelser.
        </p>
        <p>Walk-in trenden i 2026:</p>
        <ul>
          <li>
            <strong>Niveaufri adgang:</strong> Gulvet fortsætter fra
            badeværelse ind i bruse uden kanter — elegant og fremtidssikret
          </li>
          <li>
            <strong>Minimalistisk glasvæg:</strong> En enkelt fastgjort
            glasplade (80-120 cm bred) erstatter brusekabinen
          </li>
          <li>
            <strong>Regnbruser i loftet:</strong> Den ultimative spa-følelse
            med en stor regnbruser monteret i loftet
          </li>
          <li>
            <strong>Linjeafløb:</strong> Diskret afløb integreret ved
            væggen i stedet for traditionelt punktafløb
          </li>
        </ul>

        {/* Trend 5 */}
        <h2 id="trend-5" className="scroll-mt-24">
          Trend 5: Smart teknologi
        </h2>
        <p>
          Teknologi gør sit indtog i badeværelset — ikke som gadgets, men
          som gennemtænkte løsninger der gør hverdagen smartere:
        </p>
        <ul>
          <li>
            <strong>Touchless armatur:</strong> Berøringsfrie vandhaner der
            aktiveres af bevægelse. Hygiejnisk og vandbesparende.
          </li>
          <li>
            <strong>LED-spejle med anti-dug:</strong> Integreret opvarmning
            forhindrer dugdannelse, og LED-belysning giver perfekt lys til
            morgenrutinen.
          </li>
          <li>
            <strong>Digital temperaturkontrol:</strong> Termostater med
            præcis digital styring, så du rammer den perfekte
            vandtemperatur hver gang.
          </li>
          <li>
            <strong>Fugtstyret ventilation:</strong> Ventilatorer der
            automatisk regulerer baseret på luftfugtighed — effektivt og
            energibesparende.
          </li>
          <li>
            <strong>Underflise-højtalere:</strong> Vandtætte
            Bluetooth-højtalere monteret bag fliserne til musik og podcasts i
            brusen.
          </li>
        </ul>

        <TipBox variant="obs" title="Smart, men ikke for smart">
          <p>
            Overvej nøje hvilken teknologi der reelt giver værdi i din
            hverdag. Smart-toiletter og app-styrede brusere lyder fancy, men
            mange ender med at bruge dem manuelt alligevel. Start med de
            praktiske ting: LED-spejl, fugtstyret ventilation og digitalt
            termostatarmatur.
          </p>
        </TipBox>

        {/* Trend 6 */}
        <h2 id="trend-6" className="scroll-mt-24">
          Trend 6: Bæredygtige materialer
        </h2>
        <p>
          Bæredygtighed er ikke længere niche — det er mainstream. I 2026
          ser vi stigende efterspørgsel efter:
        </p>
        <ul>
          <li>
            <strong>Genbrugsfliser:</strong> Fliser produceret af genbrugt
            porcelæn og glas. Tilgængelige i danske byggemarkeder og
            fliseforretninger.
          </li>
          <li>
            <strong>Vandbesparende armatur:</strong> Moderne armaturer der
            reducerer vandforbruget med 30-50% uden at kompromittere
            vandtrykket (luftindblanding).
          </li>
          <li>
            <strong>Naturlige overfladebehandlinger:</strong> Olier og voks
            baseret på naturlige råstoffer i stedet for syntetiske sealere.
          </li>
          <li>
            <strong>Lokalt producerede materialer:</strong> Danske og
            skandinaviske producenter vinder terræn med kortere
            transportveje og lavere CO2-aftryk.
          </li>
        </ul>

        {/* Trend 7 */}
        <h2 id="trend-7" className="scroll-mt-24">
          Trend 7: Spa-oplevelse hjemme
        </h2>
        <p>
          Den ultimative trend i 2026: badeværelset som personligt
          wellness-center. Det handler om at skabe en atmosfære der inviterer
          til afslapning og velvære.
        </p>
        <ul>
          <li>
            <strong>Regnbruser med kropsbruser:</strong> Store overhead
            regnbrusere (30-50 cm diameter) evt. kombineret med sidebruser
            for en omsluttende vandoplevelse.
          </li>
          <li>
            <strong>Dampbad-funktion:</strong> Kompakte dampgeneratorer der
            kan tilføjes eksisterende brusekabiner. Varmt damp og
            eukalyptus-duft skaber spa-stemning.
          </li>
          <li>
            <strong>Fritstående badekar:</strong> Det klassiske badekar er
            tilbage — ikke som standard-rektangel, men som skulpturelt
            fritstående element i rummet.
          </li>
          <li>
            <strong>Stemningsbelysning:</strong> Dæmpbar belysning, LED-strips
            under inventar og farvet lys (chromoterapi) til afspænding.
          </li>
          <li>
            <strong>Naturmaterialer og planter:</strong> Sten, træ og
            grønne planter (fx bregner, pothos) bringer naturen ind og
            skaber ro.
          </li>
        </ul>

        <PullQuote
          quote="Badeværelset er det eneste rum i huset hvor man er helt alene. I 2026 handler det om at gøre det øjeblik så godt som muligt — ikke bare funktionelt, men sensorisk."
          author="Skandinavisk badeværelse-designer"
        />

        <TipBox variant="tip" title="Start småt">
          <p>
            Du behøver ikke en komplet renovering for at følge trends.
            Regnbruser (fra 1.500 kr.), stemningsbelysning (LED-strips fra
            300 kr.) og sort tilbehør (fra 500 kr.) kan give dit eksisterende
            bad et markant løft uden at bryde budgettet.
          </p>
        </TipBox>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={guide.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
