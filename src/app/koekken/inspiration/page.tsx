import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nyt Køkken Inspiration — Idéer & Trends 2026",
  description:
    "Få inspiration til dit nye køkken. Se trends for 2026, populære stilarter (skandinavisk, industriel, klassisk, moderne), layout-typer og farvekombinationer.",
  alternates: { canonical: `${SITE_URL}/koekken/inspiration` },
};

const faqs = [
  {
    question: "Hvad er de største køkkentrends i 2026?",
    answer:
      "I 2026 ser vi: integrerede hvidevarer der forsvinder bag fronterne, åbne hylder i kombination med lukkede skabe, mørke naturfarver som skovgrøn og midnatsblå, bæredygtige materialer og genbrugstræ, samt smarte køkkenløsninger med touchless vandhaner og induktion.",
  },
  {
    question: "Hvilket køkkenlayout er bedst?",
    answer:
      "Det bedste layout afhænger af rummets form. L-form er den mest fleksible. U-form giver mest opbevaring. Køkken med ø er ideelt til store åbne rum. Galley-køkken er effektivt i smalle rum. Husk arbejdstrekanten mellem vask, komfur og køleskab.",
  },
  {
    question: "Skal man vælge åbent eller lukket køkken?",
    answer:
      "Åbne køkkener i forbindelse med stuen er populære og giver bedre social interaktion. Ulempen er lyd og madlugt i stuen. Et kompromis er halvåbent køkken med en halvvæg, skydelåge eller glaspartition, der giver mulighed for at lukke af.",
  },
  {
    question: "Hvilke farver er populære til køkkener i 2026?",
    answer:
      "Varme neutrale toner som greige og sandfarve er fortsat populære. Skovgrøn og salviegrøn vinder stærkt frem. Mørk midnatsblå er et modigt men tidløst valg. Two-tone køkkener med én farve på underskabe og en anden på overskabe er en stor trend.",
  },
  {
    question: "Hvordan vælger jeg den rigtige stil til mit køkken?",
    answer:
      "Overvej boligens arkitektur og din personlige stil. Skandinavisk stil med lyst træ passer til moderne danske hjem. Klassisk stil med rammelåger passer til ældre villaer. Industrielt look med stål og beton passer til lejligheder med høje lofter.",
  },
];

export default function KoekkenInspirationPage() {
  return (
    <>
      <ArticleSchema
        title="Nyt Køkken Inspiration — Idéer & Trends 2026"
        description="Få inspiration til dit nye køkken. Stilarter, layout-typer, farvetrends og praktiske idéer for 2026."
        url="/koekken/inspiration"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Køkken", href: "/koekken" },
          { label: "Inspiration" },
        ]}
        title="Nyt Køkken Inspiration — Idéer & Trends 2026"
        intro="At designe et nyt køkken er en spændende proces, men det kan også føles overvældende med de utallige muligheder. Skandinavisk eller industrielt? Hvide fronter eller mørke? Ø eller L-form? Her præsenterer vi de mest populære stilarter, layout-typer og farvetrends i 2026, så du kan finde din stil og træffe velinformerede beslutninger."
        readingTime={11}
        tocItems={[
          { id: "stilarter", label: "Populære stilarter" },
          { id: "farvetrends", label: "Farvetrends 2026" },
          { id: "layout", label: "Layout-typer" },
          { id: "detaljer", label: "De vigtige detaljer" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Køkken Materialer",
            href: "/koekken/materialer",
            description: "Bordplader, fronter og prissammenligninger.",
          },
          {
            title: "Køkkenpriser",
            href: "/koekken/pris",
            description: "Komplet prisoversigt for budget, standard og luksus.",
          },
        ]}
      >
        <img
          src="/images/content/koekken-inspiration.png"
          alt="Inspirerende køkkendesign med moderne indretning og naturlige materialer"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Stilarter */}
        <h2 id="stilarter" className="font-serif text-2xl font-bold text-text-main">
          De fire mest populære køkkenstilarter i 2026
        </h2>
        <p>
          Hvert køkken fortæller en historie om sine beboere. Valget af stil sætter tonen for
          hele rummet og påvirker alt fra materialer til farvepalet. Her er de fire dominerende
          stilarter i danske køkkener i 2026:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Skandinavisk</h3>
        <p>
          Det skandinaviske køkken er fortsat den mest populære stilart i Danmark — og med god
          grund. Det kombinerer funktionalitet med en enkel, lys æstetik, der passer perfekt til
          danske boliger. Kendetegnene er lyse fronter (hvid, lys grå eller natur-eg), rene
          linjer, minimalistiske greb og naturlige materialer.
        </p>
        <p>
          I 2026 ser vi det skandinaviske køkken udvikle sig mod mere varme: varm eg i stedet for
          kølig birk, cremehvide fronter i stedet for kridhvide, og flere teksturelementer som
          rillede fronter og åbne hylder i naturligt træ. Bordpladen er typisk i lys kompositsten
          eller massiv eg.
        </p>
        <p>
          Denne stil passer til: nyere huse og lejligheder, familier der ønsker et lyst og
          ryddeligt udtryk, og alle der foretrækker tidløs enkelhed over kortlivede trends.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Industriel</h3>
        <p>
          Det industrielle køkken henter inspiration fra fabrikslofter og restaurantkøkkener.
          Kendetegnene er rå materialer som stål, beton og eksponeret murværk, kombineret med
          åbne hylder, synlige rør og funktionelt udstyr. Farvepaletten er typisk mørk: sort,
          antracit og mørk stål, brudt med varme trælements.
        </p>
        <p>
          Det industrielle look fungerer bedst i rum med høje lofter og åben plan. I standard
          danske boliger kan det tilpasses ved at bruge industrielle elementer som accent —
          f.eks. en stål-bordplade, metalreoler eller industrielle lamper — i kombination med
          blødere elementer.
        </p>
        <p>
          Denne stil passer til: loftlejligheder, moderne ombygninger med åben plan, og dem der
          elsker det rå, ufærdige udtryk.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Klassisk</h3>
        <p>
          Det klassiske køkken er tidløst, elegant og detaljeret. Kendetegnene er rammelåger
          (Shaker-stil er den mest populære), profilhåndtag i messing eller krom, marmorlignende
          bordplade og evt. gesimser over overskabene. Farvepaletten er typisk hvid, cremehvid
          eller dæmpet blå/grøn med messingdetaljer.
        </p>
        <p>
          Det klassiske køkken passer perfekt til ældre danske villaer, patricierhuse og
          lejligheder med stukkatur og historisk charme. I 2026 ser vi klassiske køkkener blive
          mere afslappede — Shaker-fronterne er simplere, messinghåndtagene mere subtile, og
          farverne mere dæmpede end det traditionelt franske landkøkken.
        </p>
        <p>
          Denne stil passer til: ældre villaer, huse med karakter og dem der ønsker et elegant
          køkken med detaljer.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Moderne minimalistisk</h3>
        <p>
          Det moderne minimalistiske køkken tager enkelheden til et nyt niveau. Ingen synlige
          greb (push-to-open eller grebsnotch), glatte overflader, integrerede hvidevarer der
          forsvinder bag fronterne, og en stram farvepalet med max 2-3 farver. Resultatet er
          et køkken, der næsten ligner et møbel — rent, roligt og skulpturelt.
        </p>
        <p>
          Denne stil kræver omhyggelig planlægning for at fungere i praksis. Uden synlige greb
          skal push-to-open-mekanismerne være af høj kvalitet. Integrerede hvidevarer er dyrere
          end fritstående. Og den stramme æstetik kræver disciplineret oprydning — alt synligt
          rod bryder illusionen.
        </p>
        <p>
          Denne stil passer til: ny arkitektur, åbne planløsninger hvor køkkenet er synligt fra
          stuen, og dem der prioriterer enkelhed og renhed.
        </p>

        {/* Farvetrends */}
        <h2 id="farvetrends" className="font-serif text-2xl font-bold text-text-main">
          Farvetrends i køkkener 2026
        </h2>
        <p>
          Køkkenfarver i 2026 handler om at tilføje personlighed og varme. Her er de vigtigste
          trends:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Skovgrøn og salviegrøn</h3>
        <p>
          Grønne køkkener er den stærkeste farvetrend i 2026. Skovgrøn (mørk, dyb grøn) giver
          et dramatisk og luksuriøst udtryk, mens salviegrøn (lys, grålig grøn) er blødere og
          mere alsidig. Begge toner kombineres fint med messing-beslag, marmorbordplade og
          eg-trægulv. Grønt signalerer natur, bæredygtighed og ro — værdier der resonerer stærkt
          i 2026.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Two-tone køkkener</h3>
        <p>
          Two-tone-konceptet — hvor overskabe og underskabe har forskellige farver — er en af de
          stærkeste trends. Populære kombinationer inkluderer hvide overskabe med mørke
          underskabe, træ-overskabe med farvede underskabe, eller åbne hylder i træ øverst og
          lukkede farvede skabe nederst. Det giver dynamik og bryder monotonien i et ensfarvet
          køkken.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Midnatsblå og navy</h3>
        <p>
          Mørk blå er et modigt men sofistikeret valg, der giver køkkenet dybde og karakter.
          Det fungerer særligt godt i klassiske og moderne køkkener kombineret med hvid marmor
          og guldfarvet armatur. Midnatsblå er et sikrere modigt valg end sort, da det har
          mere varme og dybde.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Varme neutraler erstatter kolde</h3>
        <p>
          Det helt hvide køkken og de kølige grå toner er på retræte. I stedet ser vi varme
          hvide, cremehvide, greige (grå-beige) og sandfarver dominere de neutrale køkkener.
          Denne subtile ændring mod varmere toner giver en mere indbydende og hyggelig atmosfære,
          hvilket passer perfekt til det danske ønske om hygge — også i køkkenet.
        </p>

        <TipBox variant="tip" title="Sådan tester du farver">
          <p>
            Bestil altid fysiske materialeprøver og placer dem i dit køkken i mindst en uge.
            Se dem i dagslys, kunstigt lys og aftenlys. Farver ser markant forskellige ud
            afhængigt af belysning og omgivelser. De fleste køkkenforhandlere tilbyder gratis
            fronteprøver — udnyt det.
          </p>
        </TipBox>

        {/* Layout */}
        <h2 id="layout" className="font-serif text-2xl font-bold text-text-main">
          Køkkenlayout: Hvilken form passer til dit rum?
        </h2>
        <p>
          Layoutet er fundamentet for et funktionelt køkken. Det rigtige layout afhænger af
          rummets størrelse og form, og det bestemmer, hvor effektivt du kan arbejde. Her er
          de fire mest udbredte layout-typer i danske køkkener:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">L-form</h3>
        <p>
          L-formet køkken løber langs to vinkelrette vægge og er det mest populære layout i
          danske hjem. Det er fleksibelt, fungerer i rum fra 6 m² og op, og giver en naturlig
          opdeling i arbejdszone og frit gulvareal. L-formen skaber automatisk en god
          arbejdstrekant mellem vask, komfur og køleskab.
        </p>
        <p>
          <strong>Bedst til:</strong> Mellemstore rum (8-15 m²), åbne planløsninger hvor
          køkkenet deler rum med spisestue eller stue. Kan evt. suppleres med en halv-ø for
          ekstra arbejdsplads.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">U-form</h3>
        <p>
          U-formet køkken løber langs tre vægge og giver den maksimale opbevarings- og
          arbejdsplads. Det er effektivt og omsluttende, men kræver et rum på mindst 10-12 m²
          for at undgå, at det føles klemt. Arbejdstrekanten er typisk kompakt, hvilket
          minimerer skridt under madlavning.
        </p>
        <p>
          <strong>Bedst til:</strong> Dedikerede køkkenrum (ikke åben plan), familier der har
          brug for meget opbevaring, og passionerede køkkenchefer der vil have alt inden for
          rækkevidde.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Galley (parallel)</h3>
        <p>
          Galley-køkkenet har to parallelle rækker af skabe og bordplade med en gang imellem.
          Det er den mest pladseffektive løsning og bruges professionelt i restaurantkøkkener.
          I hjemmet fungerer det godt i smalle rum (minimum 2,5 m bred), men kræver, at gangen
          er mindst 110 cm bred for komfortabel passage.
        </p>
        <p>
          <strong>Bedst til:</strong> Smalle rum, lejlighedskøkkener, og dem der prioriterer
          effektivitet over æstetik. Undgå galley-køkken i åben plan, da det kan virke
          afvisende.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Køkkenø</h3>
        <p>
          En køkkenø er en fritstående arbejdsstation midt i rummet, der kan kombineres med
          alle andre layout-former. Den giver ekstra bordplads, opbevaring og ofte en integreret
          vask eller kogeplade. En ø skaber også en naturlig samlingspunkt, hvor familien kan
          sidde på barstole mens der laves mad.
        </p>
        <p>
          <strong>Bedst til:</strong> Store rum (mindst 15-18 m²), åbne planløsninger, og
          familier der bruger køkkenet som socialt centrum. Husk minimum 90-110 cm fri passage
          rundt om øen.
        </p>

        {/* Detaljer */}
        <h2 id="detaljer" className="font-serif text-2xl font-bold text-text-main">
          De vigtige detaljer der løfter køkkenet
        </h2>
        <p>
          Ud over stil og layout er det detaljerne, der gør forskellen mellem et godt og et
          fantastisk køkken. Her er de vigtigste detaljer at overveje:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Belysning</h3>
        <p>
          God køkkenbelysning er lagdelt: generelt loftlys, arbejdslys under overskabene (LED-
          striber er standard i 2026), stemningsbelysning (pendler over ø eller spisebord) og
          evt. sokkelbelysning for en svævende effekt. Dæmpbare LED-spots med 3000K
          farvetemperatur giver det mest flatterende og funktionelle lys.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Stænkplade</h3>
        <p>
          Stænkpladen mellem bordplade og overskabe er en mulighed for at tilføje karakter.
          Populære valg i 2026 inkluderer zellige-fliser (håndlavede marokkanske fliser med
          uregelmæssig overflade), stor-format porcelæn i marmorlook, og glas i farve. En
          stænkplade i samme materiale som bordpladen giver et sammenhængende, rent udtryk.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Beslag og greb</h3>
        <p>
          Grebene er køkkenets smykker. I 2026 er messinggreb og sorte greb fortsat de mest
          populære. Grebnløse køkkener med push-to-open eller grebsnotch vinder også frem.
          Vælg greb, der matcher armaturet (vask) og emhætten for et sammenhængende udtryk.
          Kvalitetsbeslag fra Furnipart, Beslag Design eller lignende holder markant længere end
          billige alternativer.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Smarte løsninger</h3>
        <p>
          Moderne køkkener tilbyder en række smarte løsninger, der gør hverdagen nemmere:
          udtræksaffaldssystem (sortér affaldet skjult under vasken), hjørnekarusel (udnyt
          hjørneskabet effektivt), skuffeinddelere (hold bestik og redskaber organiseret),
          og integrerede ladestationers (oplad telefon og tablet uden at rode med ledninger).
        </p>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om køkkeninspiration
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
