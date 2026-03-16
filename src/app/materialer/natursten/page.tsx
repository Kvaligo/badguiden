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

const material = materials.find((m) => m.slug === "natursten")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/natursten` },
};

export default function NaturstenPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/natursten"
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
          { id: "hvad-er-natursten", label: "Hvad er natursten?" },
          { id: "typer-og-farver", label: "Typer og farver" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er natursten det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Terrazzo til badeværelse", href: "/materialer/terrazzo", description: "Kompositmateriale med natursten-stumper" },
          { title: "Fliser til badeværelse", href: "/materialer/fliser", description: "Det holdbare alternativ" },
          { title: "Microcement til badeværelse", href: "/materialer/microcement", description: "Det fugeløse, moderne alternativ" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/natursten.png"
            alt="Natursten til badeværelse — marmor, granit og skifer i naturlige toner"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="hvad-er-natursten">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad er natursten?</h2>
          <p>
            Natursten i badeværelset er den ultimative luksus — et materiale, der er skabt af naturen
            over millioner af år og bringer ægte geologisk historie ind i dit hjem. Marmor, granit,
            skifer og travertin er de mest populære stentyper til badeværelser, og hver eneste plade
            er unik med sine egne årer, farvenuancer og teksturer.
          </p>
          <p>
            I Danmark er marmor den mest efterspurgte natursten til badeværelser. Carrara-marmor fra
            Italien med sine subtile grå årer på hvid grund er en klassiker, mens Calacatta-marmor
            med sine mere dramatiske, gyldne årer er det eksklusive valg. Men natursten er langt
            mere end marmor — granit, skifer og travertin tilbyder helt andre udtryk og praktiske
            egenskaber.
          </p>
          <p>
            Det vigtigste at forstå om natursten er, at det er et levende materiale. Det patinerer
            over tid, reagerer på sin omgivelse og kræver respektfuld vedligeholdelse. For mange er
            netop denne patina en del af charmen — natursten ser bedre ud med årene, ikke værre.
          </p>
        </section>

        <section id="typer-og-farver" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer og farver</h2>
          <p>De mest populære naturstenstyper til danske badeværelser:</p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-serif font-bold text-text-main">Marmor</h3>
              <p className="text-sm">Det mest efterspurgte valg med sin ikoniske åremønstring. Porøst og kræver imprægnering. Carrara (hvid/grå) og Calacatta (hvid/guld) er de mest kendte.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-text-main">Granit</h3>
              <p className="text-sm">Den mest holdbare natursten. Ekstremt hård, vandafvisende og vedligeholdelsesfri. Fås i mange farver fra sort til rødt. Ideelt til gulve.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-text-main">Skifer</h3>
              <p className="text-sm">Naturligt skridsikker med sin lagdelte struktur. Elegant, mørk og dramatisk. Perfekt til badeværelsesgulve, da overfladen giver godt greb selv våd.</p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-text-main">Travertin</h3>
              <p className="text-sm">Varm, honningfarvet kalksten med naturlige huller og tekstur. Giver et mediterransk, rustikt udtryk. Porøst og kræver forsegling.</p>
            </div>
          </div>
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
          <PriceBar from={material.priceRange.from} to={material.priceRange.to} unit={material.priceRange.unit} label="Natursten prisinterval" />
          <p>Priserne varierer kraftigt afhængigt af stentype:</p>
          <ul className="mt-3 space-y-2">
            <li><strong>Travertin og skifer:</strong> 600-1.200 kr/m² inkl. opsætning</li>
            <li><strong>Granit:</strong> 800-1.800 kr/m² inkl. opsætning</li>
            <li><strong>Carrara-marmor:</strong> 1.200-2.500 kr/m² inkl. opsætning</li>
            <li><strong>Calacatta og sjældne typer:</strong> 2.000-5.000+ kr/m²</li>
          </ul>
          <p className="mt-3">
            For et komplet badeværelse med marmor på gulv og vægge skal du typisk budgettere
            60.000-150.000 kr. eller mere. Mange vælger at kombinere natursten som accentflade
            med billigere fliser på de store flader for at holde budgettet nede.
          </p>
        </section>

        <TipBox variant="tip" title="Natursten som accentflade">
          <p>
            Du behøver ikke bruge natursten overalt for at få effekten. En enkelt marmor-accentvæg
            bag håndvasken eller i brusenichen, kombineret med porcelænsfliser i matchende toner
            på resten, giver et luksuriøst udtryk til en brøkdel af prisen. 2-3 m² marmor
            som accent koster 3.000-8.000 kr. mod 30.000+ kr. for hele badeværelset.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Vedligeholdelse</h2>
          <p>
            Natursten kræver den mest omhyggelige vedligeholdelse af alle badeværelsesmaterialer.
            Den gode nyhed er, at det med den rette rutine forbliver smukt i årtier:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Tør vanddråber af straks, især på marmor og travertin. Brug aldrig eddike, citron eller andre syreholdige produkter — de ætser kalkstenbaseret sten irreversibelt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Ugentligt:</span>
              <span>Rengør med pH-neutral stensæbe og en blød klud. Specialrengøring til natursten koster 50-100 kr. pr. flaske og holder i måneder.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Halvårligt:</span>
              <span>Impregner marmor og travertin med specialforsegler hvert 6-12 måneder. Granit og skifer klarer sig med imprægnering hvert 2.-3. år.</span>
            </li>
          </ul>
        </section>

        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Sammenligning med andre materialer</h2>
          <p>
            <strong>Natursten vs. fliser:</strong> Porcelænsfliser i marmor-look til 400-800 kr/m² er
            den mest populære alternativ til ægte natursten. Kvalitetsfliserne er svære at skelne fra det
            ægte produkt og kræver nul vedligeholdelse. Ægte sten vinder på autenticitet, unikhed og den
            følelsesmæssige kvalitet, som kun naturligt materiale kan give.
          </p>
          <p>
            <strong>Natursten vs. terrazzo:</strong> Begge er luksus-materialer med lang levetid. Terrazzo
            kan designes præcist efter ønske, mens natursten er 100% naturligt og unikt. Terrazzo er
            typisk lettere at vedligeholde, mens natursten har den dybeste autenticitet.
          </p>
        </section>

        <TipBox variant="obs" title="Forsigtig med marmor i bruseren">
          <p>
            Marmor er kalkstenbaseret og reagerer med syrer — selv svagt surt vand kan ætse overfladen
            over tid. I brusenichen kræver marmor ekstra omhyggelig imprægnering og regelmæssig
            vedligeholdelse. Mange eksperter anbefaler at bruge granit eller skifer i brusenichen og
            reservere marmor til de tørrere områder af badeværelset.
          </p>
        </TipBox>

        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Er natursten det rigtige valg for dig?</h2>
          <p>Natursten er det rigtige valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Ønsker det ultimative luksus-badeværelse med uovertruffen æstetik</li>
            <li>Er villig til at investere i både materiale og løbende vedligeholdelse</li>
            <li>Sætter pris på naturlige materialer med autentisk karakter</li>
            <li>Ønsker at øge din boligs værdi markant</li>
            <li>Nyder patinaen, der kommer med tid og brug</li>
          </ul>
          <p className="mt-4">Natursten er måske <em>ikke</em> det bedste valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Har et begrænset budget (porcelænsfliser i sten-look er et godt alternativ)</li>
            <li>Ønsker minimal vedligeholdelse (vælg granit, fliser eller klinker)</li>
            <li>Er bekymret for pletter og skjolder (marmor og travertin er sårbare)</li>
          </ul>
        </section>

        <PullQuote
          quote="Der er en grund til, at verdens smukkeste badeværelser bruger natursten. Ingen flise, uanset hvor dyr, kan matche dybden og sjælen i et stykke Carrara-marmor med sine millioner af år gamle årer."
          author="Luksusbadeværelse-designer"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Udforsk relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/terrazzo" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Terrazzo</Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
            <Link href="/materialer/klinker" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Klinker</Link>
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Gulvvarme</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål om natursten</h2>
          <FAQAccordion faqs={material.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
