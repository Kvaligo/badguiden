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

const material = materials.find((m) => m.slug === "microcement")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/microcement` },
};

export default function MicrocementPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/microcement"
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
        readingTime={10}
        tocItems={[
          { id: "hvad-er-microcement", label: "Hvad er microcement?" },
          { id: "farver-og-finish", label: "Farver og finish" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er det det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Silkecement til badeværelse", href: "/materialer/silkecement", description: "Det blødere, fugeløse alternativ" },
          { title: "Fliser til badeværelse", href: "/materialer/fliser", description: "Det klassiske og holdbare valg" },
          { title: "Terrazzo til badeværelse", href: "/materialer/terrazzo", description: "Klassisk stil i moderne bad" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/microcement.png"
            alt="Microcement overflade i badeværelse — glat, fugeløs tekstur"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Intro section */}
        <section id="hvad-er-microcement">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Hvad er microcement?
          </h2>
          <p>
            Microcement er en cementbaseret belægning, der påføres i tynde lag (typisk 1-3 mm) direkte
            ovenpå eksisterende overflader. Det giver en sømløs, fugeløs overflade, der strækker sig
            ubrudt fra gulv til vægge — og endda op over bordplader og møbler, hvis du ønsker det.
          </p>
          <p>
            Materialet stammer fra Sydeuropa, hvor det har været brugt i årtier, men det er først inden
            for de seneste 5-10 år, at microcement for alvor har vundet indpas i danske badeværelser.
            Det skyldes dels den skandinaviske forkærlighed for minimalistisk design, dels at materialet
            er blevet bedre og mere holdbart med nye forseglingsteknikker.
          </p>
          <p>
            Microcement består grundlæggende af cement, polymerer, fine tilslagsmaterialer og pigmenter.
            Det påføres i 2-3 lag med en spartels- eller rullemetode, hvor hvert lag tørrer før det
            næste påføres. Den afsluttende forsegling med en speciallak eller voks gør overfladen
            vandafvisende og slidstærk.
          </p>
        </section>

        {/* Color swatches */}
        <section id="farver-og-finish" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Farver og finish
          </h2>
          <p>
            En af microcementens store styrker er det nærmest ubegrænsede farveudbud. De fleste
            producenter tilbyder 30-50 standardfarver, og specialfarver kan blandes efter ønske.
            De mest populære nuancer i danske badeværelser er:
          </p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <p>
            Overfladen kan varieres fra mat til halvblank finish. Mat giver det mest naturlige,
            betonlignende udtryk, mens halvblank reflekterer mere lys og er lettere at rengøre.
            Højblank finish er muligt men frarådes i badeværelser, da det viser ridser og vandpletter tydeligt.
          </p>
        </section>

        {/* Pros and cons */}
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

        {/* Price section */}
        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Pris
          </h2>
          <PriceBar
            from={material.priceRange.from}
            to={material.priceRange.to}
            unit={material.priceRange.unit}
            label="Microcement prisinterval"
          />
          <p>
            Prisen for microcement i badeværelset ligger typisk på 800-1.500 kr. pr. m²
            inkl. materialer og arbejdsløn. Den endelige pris afhænger af flere faktorer:
            underlagets tilstand, antallet af lag, valg af finish og håndværkerens erfaring.
          </p>
          <p>
            For et gennemsnitligt dansk badeværelse på 6-8 m² gulv og 15-20 m² vægge kan
            du forvente en samlet materialepris på 18.000-42.000 kr. for vægge og gulv.
            Hertil kommer eventuel fjernelse af eksisterende belægning (5.000-10.000 kr.)
            og vådrumssikring (10.000-20.000 kr.), hvis den ikke allerede er på plads.
          </p>
          <p>
            Det er vigtigt at vide, at billig microcement sjældent er en god investering. Materialer
            af lav kvalitet revner lettere, mister farve hurtigere og kræver dyrere reparationer.
            Vælg altid en erfaren håndværker, der bruger kvalitetsprodukter fra kendte producenter
            som Topciment, Ideal Work eller Festool.
          </p>
        </section>

        <TipBox variant="tip" title="Spar penge smart">
          <p>
            Du kan spare op til 30% ved at beholde eksisterende fliser som underlag i stedet for at
            fjerne dem. Microcement kan påføres direkte ovenpå intakte fliser, hvilket sparer både
            nedrivning og bortskaffelsesomkostninger. Sørg dog for at fugerne udfyldes, og at en
            primer påføres for korrekt vedhæftning.
          </p>
        </TipBox>

        {/* Maintenance section */}
        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Vedligeholdelse
          </h2>
          <p>
            Microcement kræver mere vedligeholdelse end fliser, men med den rette rutine holder det sig
            smukt i mange år. Her er de vigtigste vedligeholdelsestrin:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Tør vanddråber af overfladen efter brusebad med en blød klud. Det forhindrer kalkpletter og forlænger forseglingens levetid markant.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Ugentligt:</span>
              <span>Rengør med en pH-neutral rengøring og en blød moppe. Undgå skuremidler, syre og ammoniakbaserede produkter, der kan angribe forseglingen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Årligt:</span>
              <span>Påfør et nyt lag specialvoks eller sealer hvert 2.-3. år. Denne behandling tager en eftermiddag og koster 500-1.500 kr. i materialer, hvis du gør det selv.</span>
            </li>
          </ul>
        </section>

        {/* Comparison */}
        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Sammenligning med andre materialer
          </h2>
          <p>
            <strong>Microcement vs. fliser:</strong> Fliser er mere holdbare og kræver mindre vedligeholdelse,
            men microcement giver det fugeløse, moderne udtryk, som fliser ikke kan matche. Fliser er
            billigere i budgetenden (fra 300 kr/m²), mens microcement starter ved 800 kr/m². Til gengæld
            er microcement hurtigere at lægge — et helt badeværelse kan stå klar på 5-7 dage mod 2-3 uger
            for fliser.
          </p>
          <p>
            <strong>Microcement vs. silkecement:</strong> Silkecement har en blødere, mere organisk overflade
            og er lidt billigere. Microcement er dog hårdere, mere slidstærkt og holder længere på gulve
            med høj trafik. Vælg silkecement, hvis du prioriterer æstetik over slidstyrke — vælg microcement,
            hvis du vil have det bedste af begge verdener.
          </p>
        </section>

        <TipBox variant="obs" title="Krav til vådrumssikring">
          <p>
            Microcement er IKKE i sig selv vandtæt og erstatter ikke vådrumssikring. Under microcement
            i badeværelset skal der altid være korrekt vådrumssikring iht. DS 484 og BR18.
            Vådrumssikringen skal udføres af en certificeret håndværker, inden microcement påføres.
            Manglende vådrumssikring kan føre til alvorlige fugtskader og ugyldiggøre din forsikring.
          </p>
        </TipBox>

        {/* Decision guide */}
        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Er microcement det rigtige valg for dig?
          </h2>
          <p>
            Microcement er det rigtige valg, hvis du:
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>Ønsker et moderne, minimalistisk badeværelse med fugeløst finish</li>
            <li>Er villig til at betale for kvalitetshåndværk og materialer</li>
            <li>Accepterer behovet for periodisk vedligeholdelse (genforsegling)</li>
            <li>Vil have en hurtigere renovering end traditionel fliseopsætning</li>
            <li>Sætter pris på et unikt, håndlavet udtryk, hvor ingen to overflader er ens</li>
          </ul>
          <p className="mt-4">
            Microcement er måske <em>ikke</em> det bedste valg, hvis du:
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>Har et stramt budget (fliser er billigere i budgetenden)</li>
            <li>Ønsker minimal vedligeholdelse (fliser og klinker kræver mindre)</li>
            <li>Bor i en bolig med meget ustabilt underlag (risiko for revner)</li>
            <li>Foretrækker et klassisk, traditionelt badeværelseudtryk</li>
          </ul>
        </section>

        <PullQuote
          quote="Microcement er ikke bare en overflade — det er en hel æstetisk filosofi. Når det udføres korrekt, giver det en ro og sammenhæng i rummet, som ingen anden belægning kan matche."
          author="Dansk badeværelsesarkitekt"
        />

        {/* Internal links */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Udforsk relaterede emner
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/silkecement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">
              Silkecement
            </Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">
              Fliser
            </Link>
            <Link href="/materialer/terrazzo" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">
              Terrazzo
            </Link>
            <Link href="/elementer/brusekabine" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">
              Brusekabine
            </Link>
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">
              Gulvvarme
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Ofte stillede spørgsmål om microcement
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
