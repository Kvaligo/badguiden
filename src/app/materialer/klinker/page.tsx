import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABox } from "@/components/CTABox";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { MaterialSwatch } from "@/components/MaterialSwatch";
import { PriceBar } from "@/components/PriceBar";
import { materials } from "@/data/materials";

const material = materials.find((m) => m.slug === "klinker")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/klinker` },
};

export default function KlinkerPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/klinker"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Materialer", href: "/materialer" },
          { label: material.name },
        ]}
        title={material.title}
        intro={material.description}
        readingTime={9}
        tocItems={[
          { id: "hvad-er-klinker", label: "Hvad er klinker?" },
          { id: "farver-og-finish", label: "Farver og finish" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er klinker det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Fliser til badeværelse", href: "/materialer/fliser", description: "Det klassiske valg i alle størrelser" },
          { title: "Terrazzo til badeværelse", href: "/materialer/terrazzo", description: "Klassisk stil i moderne fortolkning" },
          { title: "Natursten til badeværelse", href: "/materialer/natursten", description: "Luksus og naturlig skønhed" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/klinker.png"
            alt="Klinker til badeværelse — robuste gulvklinker i naturlige toner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="hvad-er-klinker">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Hvad er klinker?
          </h2>
          <p>
            Klinker er en type flise, der brændes ved ekstra høje temperaturer — typisk over 1.200°C.
            Denne intense brænding giver klinker en tættere, hårdere struktur med markant lavere
            vandabsorption end almindelige keramiske fliser. Det gør dem ideelle til badeværelsesgulve,
            hvor de udsættes for både vand, slid og kemikalier.
          </p>
          <p>
            I daglig tale bruges &quot;klinker&quot; og &quot;fliser&quot; ofte i flæng, men der er en vigtig teknisk
            forskel. Klinker har en vandabsorption under 3% (ofte under 0,5%), mens almindelige
            keramiske fliser typisk ligger på 3-6%. Det er denne lave vandabsorption, der gør klinker
            så velegnede til vådrum.
          </p>
          <p>
            Klinker fås i et bredt udvalg af overflader — fra mat og struktureret til poleret og
            semipoleret. Til badeværelsesgulve anbefales mat eller struktureret overflade, da polerede
            klinker kan være glatte på våde overflader. Formater spænder fra klassiske 15x15 cm til
            moderne storformater på 60x120 cm.
          </p>
        </section>

        <section id="farver-og-finish" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Farver og finish
          </h2>
          <p>
            Klinker har traditionelt et mere naturligt og dæmpet farveudbud end glaserede keramiske
            fliser. De mest efterspurgte nuancer:
          </p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <p>
            Mange moderne klinker fås med digitaltrykte overflader, der overbevidsende efterligner
            natursten, træ eller beton. Betonlook-klinker er særligt populære i danske badeværelser
            og giver et industrielt, moderne udtryk kombineret med klinkernes praktiske egenskaber.
          </p>
        </section>

        <section id="fordele-og-ulemper" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Fordele og ulemper</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-lg font-bold text-text-main mb-3">Fordele</h3>
              <ul className="space-y-2">
                {material.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="h-4 w-4 shrink-0 mt-0.5 text-[#4A8C5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-text-main mb-3">Ulemper</h3>
              <ul className="space-y-2">
                {material.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg className="h-4 w-4 shrink-0 mt-0.5 text-[#C0392B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={material.priceRange.from} to={material.priceRange.to} unit={material.priceRange.unit} label="Klinker prisinterval" />
          <p>
            Klinker er generelt prisvenlige sammenlignet med andre holdbare materialer.
            Budget-klinker i standardformater starter ved ca. 80 kr/m² for materialet alene,
            mens premium-klinker i naturstens-look kan koste 400+ kr/m².
          </p>
          <p>
            Lægning af klinker koster typisk 450-750 kr/m² i håndværkerudgifter, afhængigt af
            format og mønster. Store formater og diagonale mønstre er dyrere at lægge.
            For et standard badeværelsesgulv på 6-8 m² skal du regne med 4.000-12.000 kr.
            for materialer plus 3.500-6.000 kr. for lægning.
          </p>
        </section>

        <TipBox variant="tip" title="Vælg den rigtige skridsikkerhed">
          <p>
            Til badeværelsesgulve skal du vælge klinker med minimum R10 skridsikkerhedsklasse.
            I bruseområdet anbefales R11 eller R12. Skridsikkerhedsklassen står altid i produktets
            datablad. Undgå polerede klinker på gulvet — de ser flotte ud, men kan være livsfarligt
            glatte, når de er våde.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Vedligeholdelse</h2>
          <p>
            Klinker er blandt de mest vedligeholdelsesfri materialer til badeværelsesgulve. Den
            tætte, hårde overflade afviser snavs og fugt naturligt.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Fejning eller støvsugning efter behov. Tør op efter brusebad.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Ugentligt:</span>
              <span>Vask med vand og neutral rengøring. Undgå syreholdige midler på uglaserede klinker.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Årligt:</span>
              <span>Impregner fugerne med fugeimprægnering. Uglaserede klinker bør imprægneres ved lægning og genimprægneres hvert 3.-5. år.</span>
            </li>
          </ul>
        </section>

        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Sammenligning med andre materialer</h2>
          <p>
            <strong>Klinker vs. fliser:</strong> Klinker er en undertype af fliser, men med bedre
            fysiske egenskaber til gulve. Klinker er hårdere, mere vandafvisende og mere slidstærke.
            Til vægge er der ingen grund til at vælge klinker over lettere keramiske fliser, der er
            nemmere at montere og billigere.
          </p>
          <p>
            <strong>Klinker vs. natursten:</strong> Klinker er markant billigere, lettere at vedligeholde
            og fås i designs, der overbevisende ligner natursten. Natursten vinder på autenticitet og
            det unikke udtryk, som kun ægte sten kan give. Klinker i naturstens-look er det oplagte
            kompromis for et luksus-look til budget-pris.
          </p>
        </section>

        <TipBox variant="obs" title="Gulvvarme og klinker">
          <p>
            Klinker er en fremragende varmeleader og fungerer perfekt med gulvvarme. Den tætte
            struktur leder varme effektivt, og klinker tåler temperaturer langt over det, gulvvarme
            kan levere. Kombiner altid klinker i badeværelset med gulvvarme for den bedste komfort
            — kolde klinker under bare fødder er ubehageligt.
          </p>
        </TipBox>

        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Er klinker det rigtige valg for dig?</h2>
          <p>Klinker er det rigtige valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Prioriterer holdbarhed og slidstyrke på gulvet</li>
            <li>Ønsker et materiale med 40+ års levetid</li>
            <li>Vil have et prisvenligt, robust gulv</li>
            <li>Planlægger at installere gulvvarme</li>
            <li>Foretrækker naturlige, dæmpede farvetoner</li>
          </ul>
          <p className="mt-4">Klinker er måske <em>ikke</em> det bedste valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Ønsker levende farver og glaserede overflader (vælg keramiske fliser)</li>
            <li>Vil have et fugeløst udtryk (vælg microcement)</li>
            <li>Primært søger materiale til vægge (keramiske fliser er lettere og billigere)</li>
          </ul>
        </section>

        <PullQuote
          quote="Klinker er det fornuftige valg — de holder i en menneskealder, kræver minimal vedligeholdelse og ser stadig godt ud om 30 år. Der er en grund til, at de har været standarden i generationer."
          author="VVS-mester, Jylland"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Udforsk relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
            <Link href="/materialer/terrazzo" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Terrazzo</Link>
            <Link href="/materialer/natursten" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Natursten</Link>
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Gulvvarme</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål om klinker</h2>
          <FAQAccordion faqs={material.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
