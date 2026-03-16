import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "fejl-at-undgaa")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/fejl-at-undgaa`,
  },
};

export default function FejlAtUndgaaPage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/fejl-at-undgaa"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Fejl at undgå" },
        ]}
        title="10 Fejl Du Skal Undgå Ved Badeværelse-Renovering"
        intro="En badeværelse-renovering er en investering på 80.000-200.000 kr. Desværre ser vi de samme fejl igen og igen — fejl der koster danske boligejere tusindvis af kroner hvert år. Her er de 10 mest typiske, så du kan undgå dem."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "fejl-1", label: "1. Springe vådrumssikring over" },
          { id: "fejl-2", label: "2. Forkert materialevalg" },
          { id: "fejl-3", label: "3. Dårlig ventilation" },
          { id: "fejl-4", label: "4. Undervurdere budget" },
          { id: "fejl-5", label: "5. DIY hvor fagmand kræves" },
          { id: "fejl-6", label: "6. Forkert gulvhældning" },
          { id: "fejl-7", label: "7. Ignorere regler" },
          { id: "fejl-8", label: "8. Dårlig belysning" },
          { id: "fejl-9", label: "9. Ikke fremtidssikre" },
          { id: "fejl-10", label: "10. Forhaste planlægning" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Vådrumssikring — Krav & Regler",
            href: "/guide/vaadrumssikring",
            description: "Alt om lovpligtig vådrumssikring.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Den rigtige rækkefølge for hele processen.",
          },
          {
            title: "Gør-Det-Selv Guide",
            href: "/guide/goer-det-selv",
            description: "Hvad du selv må — og hvad der kræver fagfolk.",
          },
          {
            title: "Budget vs. Luksus",
            href: "/priser/budget-vs-luksus",
            description: "Hvad du reelt får for pengene.",
          },
        ]}
      >
        <img
          src="/images/content/fejl.png"
          alt="Revnede fliser og vandskade i badeværelse som eksempel på typiske fejl"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        <PullQuote
          quote="De fleste renoveringsfejl begås ikke under selve byggeprocessen, men i planlægningsfasen. Investér tid i forberedelsen — det er den billigste forsikring du har."
          author="Erfaren badeværelse-arkitekt"
        />

        {/* Fejl 1 */}
        <h2 id="fejl-1" className="scroll-mt-24">
          Fejl 1: Springe vådrumssikringen over (eller gøre det billigt)
        </h2>
        <p>
          Dette er den dyreste fejl overhovedet. Vådrumssikring er et lovkrav
          i Danmark, og manglende eller fejlagtig udførelse fører næsten altid
          til fugtskader — ofte først opdaget år efter renoveringen.
        </p>
        <p>
          <strong>Konsekvensen:</strong> Skimmelsvamp, rådne bjælker,
          misfarvede vægge og en reparationsregning på 80.000-150.000 kr.
          Derudover risikerer du, at forsikringen afviser dækning og at du
          hæfter ved boligsalg.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Brug altid en certificeret
          håndværker til{" "}
          <Link href="/guide/vaadrumssikring" className="text-primary underline">
            vådrumssikring
          </Link>
          . Gem dokumentation (kvitteringer, fotos, produkt-info) og insistér
          på minimum to lag membran med korrekt tørretid.
        </p>

        {/* Fejl 2 */}
        <h2 id="fejl-2" className="scroll-mt-24">
          Fejl 2: Forkert materialevalg til vådzone
        </h2>
        <p>
          Ikke alle materialer egner sig til badeværelser. Forkert valg kan
          føre til opsvulmede overflader, misfarvning, glathed og dyre
          udskiftninger allerede efter få år.
        </p>
        <p>
          <strong>Typiske fejl:</strong> Laminatgulv i vådzone (opsvulmer),
          ikke-vandfast gipsplade bag bruser (mug), almindelig maling i stedet
          for vådrumsegnet maling (skaller af), og natursten uden imprægnering
          (pletter permanent).
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Vælg kun materialer der er godkendt
          til vådrum. Tjek producentens anbefalinger og sørg for at{" "}
          <Link href="/materialer" className="text-primary underline">
            materialet passer til anvendelsen
          </Link>
          .
        </p>

        {/* Fejl 3 */}
        <h2 id="fejl-3" className="scroll-mt-24">
          Fejl 3: Dårlig ventilation
        </h2>
        <p>
          Ventilation er badeværelsets lunge. Uden tilstrækkelig ventilation
          bliver fugt hængende i rummet, hvilket fremmer skimmelsvamp,
          kondensproblemer og nedbrydning af materialer.
        </p>
        <p>
          <strong>Konsekvensen:</strong> Skimmelsvamp på fuger og loft,
          misfarvede silikone-fuger, tung luft og sundhedsrisici for
          beboerne.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Sørg for mekanisk ventilation
          (udsugning) der skifter luften mindst 15 liter pr. sekund under
          brug. Overvej en fugtstyret ventilator der automatisk regulerer
          efter luftfugtighed. Husk at{" "}
          <Link href="/elementer/ventilation" className="text-primary underline">
            ventilation er et krav i BR18
          </Link>
          .
        </p>

        <TipBox variant="tip" title="Tjek ventilationen med et stykke papir">
          <p>
            Hold et stykke A4-papir op til ventilationsristen med ventilatoren
            tændt. Hvis papiret suger sig fast, er udsugningen tilstrækkelig.
            Falder det ned, skal ventilatoren udskiftes eller rengøres.
          </p>
        </TipBox>

        {/* Fejl 4 */}
        <h2 id="fejl-4" className="scroll-mt-24">
          Fejl 4: Undervurdere budgettet
        </h2>
        <p>
          Næsten alle badeværelse-renoveringer ender med at koste mere end
          forventet. Det skyldes sjældent grådige håndværkere — men oftere
          skjulte problemer, ændringsønsker undervejs og poster man simpelthen
          glemte.
        </p>
        <p>
          <strong>Typisk overskridelse:</strong> 15-30% over det oprindelige
          budget. De mest oversete poster er bortskaffelse af affald,
          midlertidig badløsning (fx badebøtte-perioden), og uforudsete
          rørproblemer bag væggen.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Læg altid en buffer på minimum 15-20%
          ind i budgettet. Lav en detaljeret liste over ALLE poster inden du
          starter — brug vores{" "}
          <Link href="/priser/pr-kvadratmeter" className="text-primary underline">
            prisoversigt pr. m²
          </Link>{" "}
          som udgangspunkt.
        </p>

        {/* Fejl 5 */}
        <h2 id="fejl-5" className="scroll-mt-24">
          Fejl 5: Gøre-det-selv hvor fagmand er påkrævet
        </h2>
        <p>
          Lysten til at spare penge er forståelig, men i badeværelset kan DIY
          på de forkerte opgaver få alvorlige konsekvenser — både økonomisk,
          juridisk og sikkerhedsmæssigt.
        </p>
        <p>
          <strong>Konsekvensen:</strong> VVS-arbejde uden autorisation er
          ulovligt. El-arbejde uden autorisation er livsfarligt. Vådrumssikring
          uden certificering gør forsikringen ugyldig. Reparationsomkostningerne
          er typisk 2-5 gange højere end den oprindelige udgift.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Læs vores{" "}
          <Link href="/guide/goer-det-selv" className="text-primary underline">
            komplette DIY-guide
          </Link>{" "}
          for at vide præcis hvad du selv kan lave — og hvad du skal lade en
          fagmand om.
        </p>

        <TipBox variant="obs" title="Forsikringen dækker ikke">
          <p>
            Hvis du selv har udført VVS- eller el-arbejde der forårsager skade,
            vil de fleste forsikringsselskaber afvise kravet. Ved salg af
            boligen risikerer du et erstatningskrav i op til 10 år efter
            arbejdet er udført.
          </p>
        </TipBox>

        {/* Fejl 6 */}
        <h2 id="fejl-6" className="scroll-mt-24">
          Fejl 6: Forkert hældning på gulvet
        </h2>
        <p>
          Gulvet i et badeværelse skal have et fald mod afløbet, så vand ledes
          væk effektivt. Forkert hældning — eller slet ingen — fører til
          stående vand, glidningsfare og fugtproblemer.
        </p>
        <p>
          <strong>Kravet:</strong> Minimum 1:100 (1 cm pr. meter) i fald mod
          afløb ifølge BR18. Ved walk-in brusere og åbne bruse-løsninger er
          korrekt fald ekstra vigtigt.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Kontrollér faldet med et vaterpas
          inden fliser lægges. Mange bruger en laser-vaterpas for præcision.
          Afløbet skal altid placeres i det laveste punkt.
        </p>

        {/* Fejl 7 */}
        <h2 id="fejl-7" className="scroll-mt-24">
          Fejl 7: Ignorere bygningsreglementet
        </h2>
        <p>
          &ldquo;Det kan jo ikke ses&rdquo; er en farlig indstilling i
          badeværelset. Bygningsreglementet BR18 og DS 484 eksisterer for at
          beskytte dig, din familie og din bolig.
        </p>
        <p>
          <strong>Konsekvensen:</strong> Ved boligsalg kan skjulte mangler
          komme for dagen i en tilstandsrapport. Kommunen kan kræve ulovlige
          installationer bragt i lovlig stand. Og forsikringen kan nægte
          dækning.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Tjek altid{" "}
          <Link href="/guide/byggetilladelse" className="text-primary underline">
            om du behøver byggetilladelse
          </Link>
          , brug autoriserede håndværkere og følg reglerne for vådrumssikring
          og ventilation.
        </p>

        <TipBox variant="tip" title="Brug kun håndværkere med autorisation">
          <p>
            Tjek altid om VVS- og el-firmaet har gyldig autorisation via
            Sikkerhedsstyrelsens register på{" "}
            <strong>https://register.telepi.dk</strong>. Det tager to minutter
            og kan spare dig for enorme problemer.
          </p>
        </TipBox>

        {/* Fejl 8 */}
        <h2 id="fejl-8" className="scroll-mt-24">
          Fejl 8: Dårlig belysning
        </h2>
        <p>
          Belysning er en af de mest undervurderede dele af
          badeværelse-design. Dårlig belysning gør rummet utrivsligt, gør det
          svært at barbere sig eller lægge makeup, og kan få selv flotte
          materialer til at se kedelige ud.
        </p>
        <p>
          <strong>Typiske fejl:</strong> Kun ét loftlys (giver hårde skygger),
          for kold farvetemperatur (klinisk), ingen belysning ved spejl
          (upraktisk), og manglende dæmpning.
        </p>
        <p>
          <strong>Undgå fejlen:</strong> Planlæg belysningen i 3 lag: generel
          belysning (loft), opgavebelysning (ved spejl, i bruse) og
          stemningsbelysning (LED-strips, niche-lys). Vælg varm hvid
          (3000K) til badeværelset.
        </p>

        {/* Fejl 9 */}
        <h2 id="fejl-9" className="scroll-mt-24">
          Fejl 9: Ikke fremtidssikre badeværelset
        </h2>
        <p>
          Et badeværelse holder typisk 15-20 år. Det er lang tid, og dine
          behov kan ændre sig markant. Særligt &ldquo;aging in place&rdquo; —
          altså at gøre boligen egnet til aldring — er noget mange overser.
        </p>
        <p>
          <strong>Ting du bør overveje:</strong>
        </p>
        <ul>
          <li>
            Gulvfliser med anti-skrid (R10 eller højere) for at forebygge fald
          </li>
          <li>
            Forstærkede vægge bag fliser, så der kan monteres greb og
            støttehåndtag senere
          </li>
          <li>
            Walk-in bruser i stedet for badekar (nemmere adgang med alderen)
          </li>
          <li>
            Bredde på mindst 90 cm ved alle adgangspunkter (rullestolsvenligt)
          </li>
          <li>
            Afløb i gulvet placeret, så en eventuel niveaufri bruse kan
            etableres senere
          </li>
        </ul>

        <PullQuote
          quote="Den ekstra investering i fremtidssikring under en renovering er minimal sammenlignet med at skulle rive op og starte forfra om 10 år."
          author="Tilgængelighedsrådgiver"
        />

        {/* Fejl 10 */}
        <h2 id="fejl-10" className="scroll-mt-24">
          Fejl 10: Forhaste planlægningsfasen
        </h2>
        <p>
          Den sidste — og måske vigtigste — fejl er at skynde sig igennem
          planlægningen. Det er fristende at komme i gang hurtigt, men de
          timer du investerer i grundig planlægning sparer du mange gange
          undervejs.
        </p>
        <p>
          <strong>Konsekvensen af forhastet planlægning:</strong>
        </p>
        <ul>
          <li>Materialer bestilt i forkerte mængder (spild eller forsinkelse)</li>
          <li>Design der ikke passer til rummets mål</li>
          <li>Håndværkere der ikke er koordineret (tomgangstid)</li>
          <li>Ændringsønsker midt i processen (dyre tillæg)</li>
          <li>Glemt budget-poster der sprænger budgettet</li>
        </ul>
        <p>
          <strong>Undgå fejlen:</strong> Brug vores{" "}
          <Link
            href="/guide/renovering-trin-for-trin"
            className="text-primary underline"
          >
            trin-for-trin guide
          </Link>{" "}
          som tjekliste. Regn med 2-4 uger til ren planlægning inden den
          første hammer svinger.
        </p>

        <TipBox variant="anbefaling" title="Planlægnings-tjekliste">
          <p>
            Inden du booker håndværkere, sørg for at have: 1) En tegning med
            mål, 2) Valgte materialer og inventar, 3) Et realistisk budget
            med buffer, 4) Minimum 3 skriftlige tilbud, og 5) En aftalt
            tidsplan med alle involverede parter.
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
