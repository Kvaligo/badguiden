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

const material = materials.find((m) => m.slug === "fliser")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/fliser` },
};

export default function FliserPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/fliser"
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
        readingTime={11}
        tocItems={[
          { id: "hvad-er-fliser", label: "Hvad er badeværelsesfliser?" },
          { id: "farver-og-designs", label: "Farver og designs" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er fliser det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Klinker til badeværelse", href: "/materialer/klinker", description: "Den robuste klassiker til gulve" },
          { title: "Microcement til badeværelse", href: "/materialer/microcement", description: "Det fugeløse, moderne alternativ" },
          { title: "Natursten til badeværelse", href: "/materialer/natursten", description: "Luksus og naturlig skønhed" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/fliser.png"
            alt="Fliser til badeværelse — klassiske keramiske fliser i forskellige formater"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="hvad-er-fliser">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Hvad er badeværelsesfliser?
          </h2>
          <p>
            Fliser er det suverænt mest populære materialevalg til danske badeværelser, og det har de
            været i over et århundrede. Det er der god grund til: fliser er holdbare, vandtætte,
            hygiejniske og fås i et nærmest uendeligt udvalg af farver, mønstre og størrelser.
          </p>
          <p>
            Badeværelsesfliser opdeles grundlæggende i to kategorier: <strong>keramiske fliser</strong>,
            der er brændt ved lavere temperatur og primært bruges til vægge, og{" "}
            <strong>porcelænsfliser</strong> (også kaldet klinkefliser), der brændes ved højere temperatur
            og er ideelle til gulve. Porcelænsfliser har en vandabsorption under 0,5%, hvilket gør dem
            ekstra velegnede til vådrum.
          </p>
          <p>
            I de seneste år har storformatfliser (60x120 cm og større) vundet enormt frem i danske
            badeværelser. De store formater giver færre fuger, et mere roligt udtryk og kan faktisk få
            små badeværelser til at virke større. Samtidig ser vi en stigende interesse for håndlavede
            fliser som zellige og terrakotta, der tilføjer karakter og håndværksmæssig charme.
          </p>
        </section>

        <section id="farver-og-designs" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Farver og designs
          </h2>
          <p>
            Udvalget af flisedesigns er større end nogensinde. Her er de mest populære farvetoner
            i danske badeværelser lige nu:
          </p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <p>
            Trends i 2026 peger mod jordfarver, varme beige-toner og grønne nuancer. Det helt hvide
            badeværelse er på vej ud til fordel for mere karakter og dybde. Zellige-fliser med
            håndlavet, ujævn glasur er fortsat populære som accentflade, mens 3D-fliser med
            skulpturelle overflader bruges til at skabe fokuspunkter.
          </p>
        </section>

        <section id="fordele-og-ulemper" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Fordele og ulemper
          </h2>
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
          <PriceBar
            from={material.priceRange.from}
            to={material.priceRange.to}
            unit={material.priceRange.unit}
            label="Fliser prisinterval"
          />
          <p>
            Fliser til badeværelset dækker et meget bredt prisspektrum. Budgetfliser i standardformater
            starter ved ca. 100 kr/m² for materialet, mens designerfliser fra italienske eller spanske
            producenter kan koste 500-800 kr/m² bare for fliserne.
          </p>
          <p>
            Håndværkeromkostninger for fliseopsætning ligger typisk på 500-900 kr/m², afhængigt af
            flisestørrelse, mønster og kompleksitet. Store fliser kræver et perfekt plant underlag og
            en erfaren flisemurer, hvilket kan øge arbejdsomkostningerne.
          </p>
          <p>
            For et komplet badeværelse (gulv + vægge) skal du typisk budgettere 30.000-80.000 kr.
            for fliser inkl. arbejdsløn. Hertil kommer vådrumssikring, fugemateriale og
            eventuel fjernelse af eksisterende belægning.
          </p>
        </section>

        <TipBox variant="tip" title="Sådan sparer du på fliser">
          <p>
            Brug designerfliser som accentflade (fx bag håndvasken eller i brusenichen) og budgetfliser
            på de store flader. Et par kvadratmeter håndlavede zellige-fliser til 600 kr/m² bag vasken,
            kombineret med standardfliser til 200 kr/m² på resten, giver et eksklusivt look til en
            brøkdel af prisen for at gå all-in på designerfliser.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Vedligeholdelse
          </h2>
          <p>
            Fliser er et af de mest vedligeholdelsesfri materialer til badeværelset. Selve fliseoverfladen
            kræver minimal pleje — det er fugerne, der kræver opmærksomhed:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Sprøjt overfladen af efter brusebad og tør med en skraber eller klud. Det forhindrer kalkopbygning, især på mørkere fliser, hvor kalk er synligt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Ugentligt:</span>
              <span>Rengør fliser og fuger med en mild, pH-neutral rengøring. En blød børste langs fugerne fjerner begyndende misfarvning, før det sætter sig fast.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Årligt:</span>
              <span>Tjek silikone-fuger i hjørner og overgange. Impregner cementfuger med fugeimprægnering hvert 1-2 år for at beskytte mod skimmel og misfarvning.</span>
            </li>
          </ul>
        </section>

        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Sammenligning med andre materialer
          </h2>
          <p>
            <strong>Fliser vs. microcement:</strong> Fliser vinder på holdbarhed (30+ år mod 15-20 år),
            vedligeholdelse og pris i budgetenden. Microcement vinder på det fugeløse udtryk, hurtigere
            installation og det moderne, minimalistiske look. Mange vælger en kombination: microcement
            på vægge og fliser på gulvet.
          </p>
          <p>
            <strong>Fliser vs. natursten:</strong> Fliser er markant billigere, nemmere at vedligeholde
            og fås i designs, der efterligner natursten overbevisende. Natursten vinder på autenticitet,
            unik karakter og luksusudtryk. Porcelænsfliser i marmor-look til 400 kr/m² er et populært
            alternativ til ægte marmor til 2.000+ kr/m².
          </p>
        </section>

        <TipBox variant="obs" title="Vådrumsregler for fliser">
          <p>
            I Danmark skal fliser i vådrum lægges ovenpå godkendt vådrumssikring iht. DS 484 og BR18.
            Vådrumssikringen skal dække både gulv og vægge i vådzone (mindst 500 mm uden for
            bruseniche/badekar). Arbejdet skal udføres af en certificeret håndværker med
            vådrumscertifikat. Fliserne i sig selv er ikke vådrumssikring.
          </p>
        </TipBox>

        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Er fliser det rigtige valg for dig?
          </h2>
          <p>Fliser er det rigtige valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Vil have et holdbart materiale, der varer 30+ år</li>
            <li>Ønsker det største udvalg af designs, farver og størrelser</li>
            <li>Foretrækker lav vedligeholdelse (sammenlignet med fugeløse alternativer)</li>
            <li>Vil have et fleksibelt budget med muligheder fra budget til luksus</li>
            <li>Sætter pris på et tidstestet materiale med dokumenteret holdbarhed</li>
          </ul>
          <p className="mt-4">Fliser er måske <em>ikke</em> det bedste valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Ønsker det moderne, fugeløse look (vælg microcement eller silkecement)</li>
            <li>Hader at vedligeholde fuger</li>
            <li>Ønsker den hurtigst mulige renovering</li>
          </ul>
        </section>

        <PullQuote
          quote="Fliser er og bliver det sikreste valg til danske badeværelser. Med det enorme udvalg, der findes i dag, er der en flise til enhver stil og ethvert budget — og du ved, at det holder i årtier."
          author="Erfaren flisemurer, Sjælland"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Udforsk relaterede emner
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/klinker" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Klinker</Link>
            <Link href="/materialer/microcement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Microcement</Link>
            <Link href="/materialer/natursten" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Natursten</Link>
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Gulvvarme</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Ofte stillede spørgsmål om fliser
          </h2>
          <FAQAccordion faqs={material.faqs} />
        </section>

        <div className="mt-10">
          <CTABox variant="inline" />
        </div>
      </ArticleLayout>
    </>
  );
}
