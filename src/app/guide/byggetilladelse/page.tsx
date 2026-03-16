import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "byggetilladelse")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/byggetilladelse`,
  },
};

export default function ByggetilladelsePage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/byggetilladelse"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Byggetilladelse" },
        ]}
        title="Byggetilladelse til Badeværelse — Hvornår Skal Du Søge?"
        intro="De fleste badeværelse-renoveringer kræver ikke byggetilladelse. Men der er vigtige undtagelser, der kan koste dig dyrt at overse. Her gennemgår vi præcis hvornår du skal søge, hvad det koster, og hvordan du gør."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "hvornaar-ikke", label: "Hvornår kræves det IKKE?" },
          { id: "hvornaar-ja", label: "Hvornår SKAL du søge?" },
          { id: "ejerlejlighed", label: "Ejerlejlighed-regler" },
          { id: "kommune", label: "Kommunens krav" },
          { id: "priser", label: "Hvad koster det?" },
          { id: "ansogning", label: "Sådan søger du" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Komplet procesguide fra planlægning til færdigt bad.",
          },
          {
            title: "Gør-Det-Selv Guide",
            href: "/guide/goer-det-selv",
            description: "Hvad kan du selv lave — og hvad kræver fagfolk?",
          },
          {
            title: "Vådrumssikring — Krav & Regler",
            href: "/guide/vaadrumssikring",
            description: "Alt om lovpligtig vådrumssikring i badeværelset.",
          },
        ]}
      >
        <img
          src="/images/content/byggetilladelse.png"
          alt="Illustration af byggetilladelse og kommunale krav til badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Hvornår kræves det IKKE */}
        <h2 id="hvornaar-ikke" className="scroll-mt-24">
          Hvornår kræves byggetilladelse IKKE?
        </h2>
        <p>
          Den gode nyhed er, at langt de fleste standard badeværelse-renoveringer
          ikke kræver byggetilladelse. Du kan frit renovere uden at kontakte
          kommunen, så længe du:
        </p>
        <ul>
          <li>
            Ikke ændrer på bærende konstruktioner (vægge, bjælker, fundamenter)
          </li>
          <li>
            Ikke ændrer bygningens ydre (facader, vinduer, tagkonstruktion)
          </li>
          <li>
            Ikke etablerer et helt nyt badeværelse i et rum der ikke tidligere
            var vådrum
          </li>
          <li>
            Ikke ændrer væsentligt på kloakføring eller afløbsforhold
          </li>
          <li>
            Holder dig inden for rummets eksisterende afgrænsning
          </li>
        </ul>
        <p>
          Det betyder at du kan udskifte fliser, armatur, inventar, gulvvarme,
          vådrumssikring og belysning uden byggetilladelse. Du kan også flytte
          håndvask og bruser inden for rummet, så længe det ikke kræver
          væsentlige ændringer i afløbsføringen.
        </p>

        <TipBox variant="tip" title="Tommelfingerregel">
          <p>
            Hvis du holder dig inden for badeværelsets eksisterende vægge og ikke
            rører bærende konstruktioner, kræves der som udgangspunkt ikke
            byggetilladelse. Men tjek altid med din kommune hvis du er i tvivl.
          </p>
        </TipBox>

        {/* Hvornår SKAL du søge */}
        <h2 id="hvornaar-ja" className="scroll-mt-24">
          Hvornår SKAL du søge byggetilladelse?
        </h2>
        <p>
          Der er flere situationer hvor byggetilladelse er påkrævet. Undlader du
          at søge, risikerer du at kommunen kræver arbejdet bragt i lovlig stand
          — potentielt med nedrivning af det færdige arbejde.
        </p>

        <h3>Du skal søge byggetilladelse når du:</h3>
        <ol>
          <li>
            <strong>Fjerner eller ændrer bærende vægge:</strong> Enhver ændring
            af bærende konstruktioner kræver en statisk beregning og
            byggetilladelse. Dette gælder også hvis du vil lave en åbning i en
            bærende væg for at udvide badeværelset.
          </li>
          <li>
            <strong>Etablerer nyt badeværelse:</strong> Hvis du vil indrette et
            badeværelse i et rum der ikke tidligere var vådrum — fx i en
            kælder, på loftet eller ved omdannelse af et værelse — kræves
            byggetilladelse. Kommunen skal godkende at rummet opfylder kravene
            til vådrum, ventilation og afløb.
          </li>
          <li>
            <strong>Laver væsentlige kloakændringer:</strong> Flytning af
            toilettets afløb eller etablering af nye kloaktilslutninger kræver
            ofte tilladelse, da det påvirker den overordnede kloakplan.
          </li>
          <li>
            <strong>Ændrer rumstørrelsen:</strong> Hvis du udvider badeværelset
            ved at inddrage naborum eller bygge til, kræves byggetilladelse.
          </li>
          <li>
            <strong>Ændrer bygningens ydre:</strong> Hvis renoveringen
            indebærer nye vinduer, ændret facade eller tagkonstruktion.
          </li>
        </ol>

        <PullQuote
          quote="Er du i tvivl, så ring til kommunen. Det tager 10 minutter og kan spare dig for måneders arbejde og hundredtusinder af kroner."
          author="Byggesagsbehandler, Københavns Kommune"
        />

        {/* Ejerlejlighed */}
        <h2 id="ejerlejlighed" className="scroll-mt-24">
          Særlige regler for ejerlejligheder
        </h2>
        <p>
          Bor du i ejerlejlighed, gælder der ekstra regler ud over kommunens
          byggetilladelse:
        </p>
        <ul>
          <li>
            <strong>Bestyrelsens godkendelse:</strong> De fleste
            ejerforeningers vedtægter kræver, at du får skriftlig godkendelse
            fra bestyrelsen inden du igangsætter en badeværelse-renovering.
            Dette gælder selv for standard renoveringer.
          </li>
          <li>
            <strong>Dokumentation for vådrumssikring:</strong> Mange
            ejerforeninger kræver dokumentation for at vådrumssikringen er
            udført korrekt af en certificeret håndværker. Gem kvitteringer og
            fotos.
          </li>
          <li>
            <strong>Støj og arbejdstider:</strong> Ejerforeningen kan have
            regler om hvornår håndværkere må arbejde. Typisk hverdage 8-17.
          </li>
          <li>
            <strong>Fællesrør:</strong> Faldstammer og vandstigstrenge er typisk
            fælleseje. Arbejde på disse kræver foreningens godkendelse og
            koordination.
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Anbefaling til ejere i ejerforening">
          <p>
            Start altid med at kontakte ejerforeningens bestyrelse inden du
            planlægger en renovering. Bed om de specifikke regler og krav der
            gælder. Det forebygger konflikter og forsinkelser.
          </p>
        </TipBox>

        {/* Kommunens krav */}
        <h2 id="kommune" className="scroll-mt-24">
          Kommunens krav og processer
        </h2>
        <p>
          Kravene varierer fra kommune til kommune, men fælles for alle er:
        </p>
        <ul>
          <li>
            Ansøgningen skal indeholde tegninger af det planlagte arbejde
          </li>
          <li>
            Ved bærende konstruktioner kræves en statisk beregning fra en
            ingeniør
          </li>
          <li>
            Ved nyt vådrum i kælder kan der kræves en fugtberegning
          </li>
          <li>
            De fleste kommuner bruger Bygogmiljø.dk som ansøgningsportal
          </li>
          <li>
            Sagsbehandlingstiden er typisk 4-12 uger
          </li>
        </ul>

        {/* Priser */}
        <h2 id="priser" className="scroll-mt-24">
          Hvad koster en byggetilladelse?
        </h2>
        <p>
          Omkostningerne ved en byggetilladelse består af to dele: selve
          gebyret til kommunen og udgifter til eventuel rådgivning.
        </p>
        <ul>
          <li>
            <strong>Kommunalt gebyr:</strong> Varierer fra kommune til kommune.
            Mange kommuner opkræver et fast gebyr på 1.000-5.000 kr. for
            enklere sager. Større projekter afregnes efter medgået tid
            (600-1.200 kr./time).
          </li>
          <li>
            <strong>Rådgivning og tegninger:</strong> En arkitekt eller
            byggerådgiver tager typisk 3.000-10.000 kr. for at udarbejde
            tegninger og ansøgningsmateriale.
          </li>
          <li>
            <strong>Statisk beregning:</strong> Hvis nødvendigt, koster en
            ingeniørberegning typisk 5.000-15.000 kr.
          </li>
        </ul>
        <p>
          I alt skal du regne med <strong>2.000-25.000 kr.</strong> for en
          byggetilladelse afhængig af projektets kompleksitet.
        </p>

        {/* Sådan søger du */}
        <h2 id="ansogning" className="scroll-mt-24">
          Sådan søger du byggetilladelse
        </h2>
        <ol>
          <li>
            <strong>Afklar om du har behov:</strong> Ring til kommunens
            byggesagsafdeling og beskriv dit projekt. De kan hurtigt afklare
            om du behøver at søge.
          </li>
          <li>
            <strong>Forbered materialet:</strong> Saml tegninger (før og efter),
            beskrivelse af arbejdet, og eventuelle ingeniørberegninger.
          </li>
          <li>
            <strong>Søg via Bygogmiljø.dk:</strong> De fleste kommuner bruger
            denne portal. Opret en bruger, udfyld ansøgningen og upload
            dokumenter.
          </li>
          <li>
            <strong>Vent på afgørelse:</strong> Sagsbehandlingstiden er typisk
            4-12 uger. Kommunen kan stille spørgsmål eller bede om supplerende
            oplysninger undervejs.
          </li>
          <li>
            <strong>Modtag tilladelse:</strong> Når tilladelsen er givet, kan
            arbejdet gå i gang. Husk at der typisk skal ske en færdigmelding
            til kommunen efter endt arbejde.
          </li>
        </ol>

        <TipBox variant="obs" title="Husk færdigmelding">
          <p>
            Mange glemmer at færdigmelde byggearbejdet til kommunen. Uden
            færdigmelding er tilladelsen teknisk set ikke afsluttet, og det
            kan skabe problemer ved fremtidigt boligsalg.
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
