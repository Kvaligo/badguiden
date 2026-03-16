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

const material = materials.find((m) => m.slug === "terrazzo")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/terrazzo` },
};

export default function TerrazzoPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/terrazzo"
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
          { id: "hvad-er-terrazzo", label: "Hvad er terrazzo?" },
          { id: "farver-og-tilslag", label: "Farver og tilslag" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er terrazzo det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Microcement til badeværelse", href: "/materialer/microcement", description: "Fugeløst og moderne" },
          { title: "Natursten til badeværelse", href: "/materialer/natursten", description: "Luksus og naturlig skønhed" },
          { title: "Fliser til badeværelse", href: "/materialer/fliser", description: "Det klassiske valg" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/terrazzo.png"
            alt="Terrazzo overflade — kompositmateriale med synlige marmorchips"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="hvad-er-terrazzo">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad er terrazzo?</h2>
          <p>
            Terrazzo er et kompositmateriale med rødder helt tilbage til det 15. århundredes
            Venedig, hvor italienske mosaiklæggere genanvendte marmorstumper i cementgulve.
            I dag oplever terrazzo en renæssance som et af de hotteste materialer til moderne
            badeværelser — og det er ikke svært at forstå hvorfor.
          </p>
          <p>
            Materialet består af en bindemiddel (cement eller epoxy/harpiks) iblandet stumper
            af marmor, granit, kvarts, glas eller andre dekorative materialer. Efter støbning
            slibes og poleres overfladen, hvilket afslører de indstøbte materialers farve og
            tekstur. Resultatet er en levende, unik overflade med en dybde og karakter, som
            er svær at opnå med andre materialer.
          </p>
          <p>
            Terrazzo fås i to hovedformer: <strong>støbt (in-situ) terrazzo</strong>, der
            påføres og slibes på stedet for et fuldstændig fugeløst resultat, og{" "}
            <strong>terrazzo-fliser</strong>, der er præfabrikerede og lægges som almindelige
            fliser. Støbt terrazzo er dyrere men giver det mest autentiske og imponerende
            resultat.
          </p>
        </section>

        <section id="farver-og-tilslag" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Farver og tilslag</h2>
          <p>
            Terrazzos farveudbud er praktisk talt ubegrænset, da det bestemmes af kombinationen af
            bindemiddel og tilslagsmaterialer. De mest populære varianter:
          </p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <p>
            Tilslaget kan være alt fra fine marmorchips (2-5 mm) til store marmorbrokker (20-40 mm).
            Fint tilslag giver et mere subtilt, ensartet udtryk, mens groft tilslag skaber dramatiske,
            iøjnefaldende overflader. Genbrugsglas som tilslag er en bæredygtig trend, der giver
            terrazzoen et moderne, legende udtryk med transparente refleksioner.
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
          <PriceBar from={material.priceRange.from} to={material.priceRange.to} unit={material.priceRange.unit} label="Terrazzo prisinterval" />
          <p>
            Terrazzo er et af de dyreste materialevalg til badeværelset. Priserne varierer
            markant afhængigt af typen:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong>Terrazzo-fliser (præfab):</strong> 500-1.200 kr/m² for materialet + 500-800 kr/m² for lægning</li>
            <li><strong>Støbt terrazzo (in-situ):</strong> 900-2.000 kr/m² for materialet + 800-1.500 kr/m² for støbning og slibning</li>
            <li><strong>Porcelænsfliser i terrazzo-look:</strong> 300-800 kr/m² (det billige alternativ)</li>
          </ul>
          <p className="mt-3">
            For et komplet badeværelse med støbt terrazzo på gulv og terrazzo-fliser på vægge
            kan den samlede pris nemt nå 40.000-80.000 kr. eller mere, afhængigt af størrelse
            og tilslagsmaterialer.
          </p>
        </section>

        <TipBox variant="tip" title="Terrazzo-look til halv pris">
          <p>
            Porcelænsfliser i terrazzo-look giver et overbevisende resultat til en brøkdel af
            prisen for ægte terrazzo. De bedste terrazzo-look-fliser fra italienske producenter
            (fx Marazzi, Ragno) koster 300-600 kr/m² og er svære at skelne fra det ægte produkt.
            Du mister den fugeløse overflade men sparer 50-70% af budgettet.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Vedligeholdelse</h2>
          <p>
            Terrazzo er overraskende let at vedligeholde trods sit eksklusive udtryk:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Rengør med vand og pH-neutral sæbe. Undgå syreholdige rengøringsmidler, der kan ætse cementbindelsen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Årligt:</span>
              <span>Impregner overfladen med stenbeskyttelse hvert 2-3 år for at forhindre pletter og lette rengøringen.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Periodisk:</span>
              <span>Professionel slibning og polering hvert 5-10 år bringer selv gammelt terrazzo tilbage til nyt udseende. Denne behandling koster 400-800 kr/m².</span>
            </li>
          </ul>
        </section>

        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Sammenligning med andre materialer</h2>
          <p>
            <strong>Terrazzo vs. microcement:</strong> Begge giver fugeløse overflader (i den støbte variant),
            men terrazzos levende overflade med synlige tilslagsmaterialer er langt mere karakterfuld.
            Microcement er billigere og mere fleksibelt, mens terrazzo er mere holdbart med en levetid
            på 50+ år.
          </p>
          <p>
            <strong>Terrazzo vs. natursten:</strong> Begge er luksus-materialer med langt levetid. Natursten
            er 100% naturligt, mens terrazzo er et kompositmateriale, der kan designes præcist. Terrazzo er
            typisk lettere at vedligeholde end porøse stentyper som marmor og kan genopfriskes ved slibning.
          </p>
        </section>

        <TipBox variant="obs" title="Vægten af terrazzo">
          <p>
            Støbt terrazzo er tungt — typisk 50-80 kg/m². Det er afgørende, at undergulvet kan
            bære belastningen. I etageejendomme og ældre huse skal en ingeniør vurdere, om
            gulvkonstruktionen er stærk nok. Terrazzo-fliser er et lettere alternativ, der ikke
            stiller samme krav til konstruktionen.
          </p>
        </TipBox>

        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Er terrazzo det rigtige valg for dig?</h2>
          <p>Terrazzo er det rigtige valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Ønsker et unikt, karakterfuldt badeværelse med wow-faktor</li>
            <li>Har budget til et premium-materiale</li>
            <li>Investerer langsigtet i din bolig (50+ års levetid)</li>
            <li>Værdsætter bæredygtighed og materialer med lang holdbarhed</li>
            <li>Sætter pris på et materiale med historisk dybde og kulturel betydning</li>
          </ul>
          <p className="mt-4">Terrazzo er måske <em>ikke</em> det bedste valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Har et begrænset budget (porcelænsfliser i terrazzo-look er et godt alternativ)</li>
            <li>Ønsker hurtig installation (støbt terrazzo tager uger)</li>
            <li>Bor i en etageejendom med svag gulvkonstruktion</li>
          </ul>
        </section>

        <PullQuote
          quote="Terrazzo er tidløs kunst under fødderne. Det er det eneste gulvmateriale, der kan holde 100 år og stadig se fantastisk ud — bare det slibes op igen. Det er den ultimative langsigtede investering."
          author="Restaureringsarkitekt"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Udforsk relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/microcement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Microcement</Link>
            <Link href="/materialer/natursten" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Natursten</Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Gulvvarme</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål om terrazzo</h2>
          <FAQAccordion faqs={material.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
