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

const guide = guides.find((g) => g.slug === "vaadrumssikring")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/vaadrumssikring`,
  },
};

export default function VaadrumssikringPage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/vaadrumssikring"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Vådrumssikring" },
        ]}
        title="Vådrumssikring — Krav, Regler & Hvad Det Koster"
        intro="Vådrumssikring er fundamentet for ethvert badeværelse i Danmark. Det er et lovkrav, en forsikringsbetingelse og den vigtigste beskyttelse mod fugtskader, skimmelsvamp og dyre reparationer. Her får du den komplette guide."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "hvad-er", label: "Hvad er vådrumssikring?" },
          { id: "lovkrav", label: "Danske lovkrav" },
          { id: "typer", label: "Typer af vådrumssikring" },
          { id: "proces", label: "Trin-for-trin proces" },
          { id: "priser", label: "Hvad koster det?" },
          { id: "diy-vs-pro", label: "DIY vs. professionel" },
          { id: "fejl", label: "Typiske fejl" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Renovering af Badeværelse Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Komplet procesguide fra planlægning til færdigt bad.",
          },
          {
            title: "10 Fejl Du Skal Undgå",
            href: "/guide/fejl-at-undgaa",
            description: "De mest typiske og dyre fejl ved renovering.",
          },
          {
            title: "Gør-Det-Selv Guide",
            href: "/guide/goer-det-selv",
            description: "Hvad kan du selv lave — og hvad kræver fagfolk?",
          },
          {
            title: "Microcement vs. Fliser",
            href: "/priser/microcement-vs-fliser",
            description: "Prissammenligning af de to populære materialer.",
          },
        ]}
      >
        <img
          src="/images/content/vaadrumssikring.png"
          alt="Professionel vådrumssikring i dansk badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Hvad er vådrumssikring */}
        <h2 id="hvad-er" className="scroll-mt-24">
          Hvad er vådrumssikring?
        </h2>
        <p>
          Vådrumssikring er en vandtæt barriere der monteres på vægge og gulv i
          badeværelser og andre våde rum. Formålet er at forhindre fugt i at
          trænge ind i den bagvedliggende konstruktion, hvor det kan forårsage
          råd, skimmelsvamp og alvorlige strukturelle skader.
        </p>
        <p>
          I praksis består vådrumssikring af en membran — enten i form af en
          smørbar coating eller en foliemembran — der danner et fuldstændig
          vandtæt lag mellem konstruktionen og den synlige overflade (fliser,
          microcement eller anden belægning).
        </p>
        <p>
          Tænk på det som en usynlig badedragt omkring hele dit badeværelse.
          Selv hvis vand trænger igennem fuger eller revner i fliserne, stopper
          membranen det fra at nå betonen, træet eller gipsen bag ved.
        </p>

        <TipBox variant="obs" title="Husk: Vådrumssikring er et lovkrav i Danmark">
          <p>
            Ifølge Bygningsreglementet BR18 og DS 484 er vådrumssikring
            obligatorisk i alle vådrum i Danmark. Manglende eller fejlagtig
            vådrumssikring kan betyde, at din forsikring ikke dækker vandskader
            — og at du risikerer et erstatningskrav ved salg af boligen.
          </p>
        </TipBox>

        {/* Danske lovkrav */}
        <h2 id="lovkrav" className="scroll-mt-24">
          Danske lovkrav: DS 484 og BR18
        </h2>
        <p>
          To centrale regelsæt styrer kravene til vådrumssikring i Danmark:
        </p>

        <h3>Bygningsreglementet BR18</h3>
        <p>
          BR18 er den overordnede lovgivning der gælder for alt byggeri i
          Danmark. Reglementet kræver at vådrum skal udføres, så fugt ikke
          medfører skader på bygningskonstruktionen. Specifikt stiller BR18 krav
          om at:
        </p>
        <ul>
          <li>
            Gulve og vægge i vådrum skal være vandtætte i de zoner der udsættes
            for direkte vandpåvirkning
          </li>
          <li>
            Gulvkonstruktioner i vådrum skal have et fald mod afløb på minimum
            1:100 (1 cm pr. meter)
          </li>
          <li>
            Gennemføringer for rør og afløb skal udføres vandtæt
          </li>
          <li>
            Materialer og konstruktioner skal kunne modstå den fugtbelastning de
            udsættes for
          </li>
        </ul>

        <h3>DS 484 — Normen for vådrum</h3>
        <p>
          DS 484 er den danske standard der specificerer de tekniske krav til
          vådrum i detaljer. Den opdeler badeværelset i zoner med forskellige
          krav:
        </p>
        <ul>
          <li>
            <strong>Zone 1 (vådzone):</strong> Området direkte omkring bruser og
            badekar. Her stilles de strengeste krav til vandtæthed — gulv og
            vægge op til 1,8 m højde skal have godkendt vådrumssikring.
          </li>
          <li>
            <strong>Zone 2 (fugtzone):</strong> Resten af badeværelset. Her
            skal gulvet altid have vådrumssikring, mens vægge skal beskyttes mod
            kondens og stænk.
          </li>
        </ul>

        <PullQuote
          quote="Vådrumssikring er ikke en anbefaling — det er et lovkrav. Og det er den billigste forsikring du kan tegne mod fugtskader der let kan koste over 100.000 kr. at udbedre."
          author="Dansk VVS-brancheforening"
        />

        {/* Typer af vådrumssikring */}
        <h2 id="typer" className="scroll-mt-24">
          Typer af vådrumssikring
        </h2>
        <p>
          Der findes to hovedtyper af vådrumssikring, og begge er godkendt i
          Danmark:
        </p>

        <h3>1. Smørbar membran (coating-system)</h3>
        <p>
          Den mest udbredte type i danske badeværelser. En flydende membran
          påføres med pensel eller rulle direkte på den klargjorte overflade i
          2-3 lag. Membranen tørrer til et vandtæt, fleksibelt lag der
          tilpasser sig underlagets form.
        </p>
        <ul>
          <li>
            <strong>Fordele:</strong> Nem at påføre, tilpasser sig uregelmæssige
            overflader, relativt billig, god til renovering
          </li>
          <li>
            <strong>Ulemper:</strong> Kræver korrekt antal lag og tørretid,
            kvaliteten afhænger af håndværkerens teknik
          </li>
          <li>
            <strong>Populære produkter:</strong> Weber Deitermann DS 28,
            Schönox HA, Ardex 8+9
          </li>
        </ul>

        <h3>2. Foliemembran (plademembran)</h3>
        <p>
          En præfabrikeret membran i ruller eller plader der monteres på
          overfladen med klæber. Giver en mere ensartet tykkelse og er lettere
          at kvalitetskontrollere.
        </p>
        <ul>
          <li>
            <strong>Fordele:</strong> Ensartet kvalitet, hurtigere at montere på
            store flader, lettere kvalitetskontrol
          </li>
          <li>
            <strong>Ulemper:</strong> Dyrere materialer, kræver nøjagtig
            tilskæring ved hjørner og gennemføringer, sværere på uregelmæssige
            underlag
          </li>
          <li>
            <strong>Populære produkter:</strong> Schlüter DITRA-25, Blanke
            Aqua-Shield, PCI Pecitape
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Vores anbefaling">
          <p>
            Til de fleste danske badeværelser anbefaler vi en smørbar membran.
            Den er lettere at tilpasse til eksisterende rum, billigere og giver
            et fremragende resultat når den udføres korrekt af en certificeret
            håndværker. Foliemembran er bedst til nybyg med store, jævne flader.
          </p>
        </TipBox>

        <img
          src="/images/content/vaadrumssikring-diagram.png"
          alt="Diagram over vådrumssikring med zoner og krav i dansk badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Trin-for-trin */}
        <h2 id="proces" className="scroll-mt-24">
          Trin-for-trin: Sådan udføres vådrumssikring
        </h2>
        <p>
          Her er den typiske proces for vådrumssikring med smørbar membran:
        </p>

        <ol>
          <li>
            <strong>Klargøring af underlag:</strong> Overfladen skal være ren,
            tør, stabil og fri for løse partikler. Ujævnheder udbedres med
            spartelmasse, og gamle fliser eller belægninger fjernes om nødvendigt.
          </li>
          <li>
            <strong>Grundning (primer):</strong> En primer påføres for at sikre
            god vedhæftning mellem underlag og membran. Primertypen afhænger af
            underlagets materiale (beton, gips, eksisterende fliser).
          </li>
          <li>
            <strong>Hjørner og overgange:</strong> Forstærkningsbånd monteres i
            alle indvendige hjørner, ved gulv-væg-overgange og omkring rørgennemføringer.
            Dette er de mest sårbare punkter.
          </li>
          <li>
            <strong>Manchetter ved rør:</strong> Specielle manchetter monteres
            tæt omkring vandrør, afløb og andre gennemføringer for at sikre
            vandtæthed ved disse kritiske punkter.
          </li>
          <li>
            <strong>Første lag membran:</strong> Membranen påføres jævnt med
            pensel eller rulle. Laget skal dække hele overfladen uden spring
            eller tynde steder. Typisk tykkelse: 0,5-1 mm.
          </li>
          <li>
            <strong>Tørretid:</strong> Det første lag skal tørre fuldstændig
            (typisk 4-12 timer afhængig af produkt og temperatur) inden næste
            lag påføres. Forceret tørring med varme frarådes.
          </li>
          <li>
            <strong>Andet lag membran:</strong> Påføres vinkelret på første lag
            for at sikre fuld dækning. Samlet vådfilmstykkelse skal opfylde
            producentens krav (typisk 1-2 mm).
          </li>
          <li>
            <strong>Kvalitetskontrol:</strong> Den færdige membran inspiceres
            for huller, tynde steder og korrekt overlap. Eventuelt udføres en
            vandtest. Først herefter kan fliser eller anden belægning monteres.
          </li>
        </ol>

        <TipBox variant="tip" title="Tid er kvalitet">
          <p>
            Lad membranen tørre ordentligt mellem lagene — minimum den tid
            producenten anbefaler. De fleste fejl skyldes for kort tørretid, som
            kan give en membran der ser korrekt ud men ikke er vandtæt.
          </p>
        </TipBox>

        {/* Priser */}
        <h2 id="priser" className="scroll-mt-24">
          Hvad koster vådrumssikring?
        </h2>
        <p>
          Prisen for vådrumssikring afhænger af badeværelsets størrelse, den
          valgte type og underlagets tilstand.
        </p>

        <PriceBar
          from={2000}
          to={5000}
          unit="kr/m²"
          label="Vådrumssikring (inkl. materialer og arbejdsløn)"
        />

        <p>Her er en oversigt over typiske priser:</p>
        <ul>
          <li>
            <strong>Smørbar membran (materialer):</strong> 200-500 kr/m²
          </li>
          <li>
            <strong>Foliemembran (materialer):</strong> 400-800 kr/m²
          </li>
          <li>
            <strong>Arbejdsløn:</strong> 1.500-3.500 kr/m² (afhængig af
            kompleksitet og region)
          </li>
          <li>
            <strong>Forstærkningsbånd og manchetter:</strong> 500-2.000 kr.
            (fast pris pr. badeværelse)
          </li>
        </ul>

        <p>
          For et gennemsnitligt dansk badeværelse på 6-8 m² skal du regne med en
          samlet pris på <strong>12.000-40.000 kr.</strong> for komplet
          vådrumssikring inklusiv materialer, arbejdsløn og manchetter.
        </p>

        {/* DIY vs professionel */}
        <h2 id="diy-vs-pro" className="scroll-mt-24">
          DIY vs. professionel udførelse
        </h2>
        <p>
          Lad os være helt tydelige: <strong>vådrumssikring er ikke et
          gør-det-selv-projekt</strong>. Der er både lovmæssige og praktiske
          grunde til dette:
        </p>

        <h3>Hvorfor du ikke bør gøre det selv</h3>
        <ul>
          <li>
            <strong>Lovkrav:</strong> Vådrumssikring skal udføres af en
            certificeret håndværker for at overholde BR18 og DS 484
          </li>
          <li>
            <strong>Forsikring:</strong> Hvis vådrumssikringen ikke er udført af
            en autoriseret fagmand, dækker de fleste forsikringer ikke
            efterfølgende vandskader
          </li>
          <li>
            <strong>Ansvar:</strong> Ved salg af boligen kan du holdes
            erstatningsansvarlig for fejlagtig vådrumssikring i op til 10 år
          </li>
          <li>
            <strong>Kompetencer:</strong> Korrekt udførelse kræver erfaring med
            materialer, tørretider, overlap og kvalitetskontrol
          </li>
        </ul>

        <TipBox variant="obs" title="Vigtigt om forsikring">
          <p>
            Gem altid dokumentation for den udførte vådrumssikring — herunder
            navn på håndværker, dato, produkter brugt og eventuelt billeddokumentation.
            Dette er afgørende ved forsikringssager og boligsalg.
          </p>
        </TipBox>

        {/* Typiske fejl */}
        <h2 id="fejl" className="scroll-mt-24">
          Typiske fejl ved vådrumssikring
        </h2>
        <p>
          Disse fejl ser vi desværre alt for ofte, og de kan have alvorlige
          konsekvenser:
        </p>
        <ol>
          <li>
            <strong>For kort tørretid:</strong> Det mest udbredte problem.
            Membranen ser tør ud på overfladen, men er ikke hærdet ordentligt
            igennem. Det kompromitterer vandtætheden.
          </li>
          <li>
            <strong>Manglende forstærkningsbånd:</strong> Hjørner og overgange
            er de mest udsatte punkter. Uden forstærkningsbånd vil membranen
            revne ved bevægelser i bygningen.
          </li>
          <li>
            <strong>Forkert manchettering:</strong> Rørgennemføringer er
            klassiske lækagepunkter. Manchetter skal sidde korrekt og tæt
            omkring hvert eneste rør.
          </li>
          <li>
            <strong>For tyndt lag:</strong> Et enkelt, tyndt lag er ikke nok.
            Minimum to lag med den af producenten anbefalede tykkelse er
            nødvendigt.
          </li>
          <li>
            <strong>Spring i membranen:</strong> Selv et lille hul eller en
            plet der er sprunget over kan lade fugt sive igennem over tid.
            Systematisk påføring og grundig inspektion er afgørende.
          </li>
        </ol>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={guide.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
