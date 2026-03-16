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

const material = materials.find((m) => m.slug === "silkecement")!;

export const metadata: Metadata = {
  title: material.metaTitle,
  description: material.metaDescription,
  alternates: { canonical: `${SITE_URL}/materialer/silkecement` },
};

export default function SilkecementPage() {
  return (
    <>
      <ArticleSchema
        title={material.title}
        description={material.metaDescription}
        url="/materialer/silkecement"
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
          { id: "hvad-er-silkecement", label: "Hvad er silkecement?" },
          { id: "farver-og-finish", label: "Farver og finish" },
          { id: "fordele-og-ulemper", label: "Fordele og ulemper" },
          { id: "pris", label: "Pris" },
          { id: "vedligeholdelse", label: "Vedligeholdelse" },
          { id: "sammenligning", label: "Sammenligning" },
          { id: "det-rigtige-valg", label: "Er silkecement det rigtige valg?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Microcement til badeværelse", href: "/materialer/microcement", description: "Den hårdere, mere slidstærke variant" },
          { title: "Fliser til badeværelse", href: "/materialer/fliser", description: "Det klassiske og holdbare valg" },
          { title: "Terrazzo til badeværelse", href: "/materialer/terrazzo", description: "Klassisk kompositmateriale" },
        ]}
      >
        {/* Material hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/materials/silkecement.png"
            alt="Silkecement overflade — blød, organisk tekstur med silkeagtig glans"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="hvad-er-silkecement">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Hvad er silkecement?
          </h2>
          <p>
            Silkecement er en fugeløs belægning, der deler mange egenskaber med microcement, men med
            et blødere, mere organisk og taktilt finish. Hvor microcement giver en glat, industriel
            overflade, har silkecement en dybere, mere levende tekstur, der minder om blød ler eller
            silke — deraf navnet.
          </p>
          <p>
            Materialet er relativt nyt på det danske marked og har vundet hurtigt frem blandt
            boligejere, der ønsker det fugeløse udtryk men med en varmere og mere indbydende
            overflade end microcement. Silkecement er særligt populært i skandinavisk-inspirerede
            badeværelser, hvor naturlige materialer og bløde nuancer er i fokus.
          </p>
          <p>
            Ligesom microcement påføres silkecement i tynde lag (0,5-2 mm) ovenpå eksisterende
            underlag. Det kræver færre lag end microcement, og påføringsprocessen er mere
            fejltolerant, da overfladens levende tekstur skjuler små ujævnheder.
            Den afsluttende forsegling gør overfladen vandafvisende, men silkecement kræver
            hyppigere genforsegling end microcement for at bevare sine egenskaber.
          </p>
        </section>

        <section id="farver-og-finish" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Farver og finish</h2>
          <p>
            Silkecement fås i en kurateret palette af naturlige, dæmpede toner. Farverne er typisk
            varmere og mere organiske end microcementens mere industrielle nuancer:
          </p>
          <MaterialSwatch swatches={material.swatchColors} className="my-6" />
          <p>
            Den naturlige, mat finish er silkecementens varemærke. Overfladen har en blid glans, der
            opfanger og reflekterer lys på en unik måde — nærmest som et stykke silke. Denne kvalitet
            giver badeværelset en varm, indbydende atmosfære, der er svær at opnå med andre materialer.
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
          <PriceBar from={material.priceRange.from} to={material.priceRange.to} unit={material.priceRange.unit} label="Silkecement prisinterval" />
          <p>
            Silkecement er generelt lidt billigere end microcement — primært fordi materialet er
            lettere at arbejde med og kræver færre lag. Priserne ligger typisk på 600-1.200 kr/m²
            inkl. påføring, mod 800-1.500 kr/m² for microcement.
          </p>
          <p>
            For et gennemsnitligt badeværelse (vægge og gulv) skal du regne med 15.000-35.000 kr.
            for selve silkecementbehandlingen. Hertil kommer vådrumssikring og eventuel fjernelse
            af eksisterende belægning.
          </p>
        </section>

        <TipBox variant="tip" title="Silkecement på vægge, fliser på gulvet">
          <p>
            En populær kombination er silkecement på væggene og fliser eller klinker på gulvet.
            Du får det fugeløse, varme udtryk på de store flader, mens gulvet får den slidstyrke
            og holdbarhed, som silkecement ikke helt kan matche. Denne kombination er også
            billigere end at bruge silkecement overalt.
          </p>
        </TipBox>

        <section id="vedligeholdelse" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Vedligeholdelse</h2>
          <p>
            Silkecement kræver den mest regelmæssige vedligeholdelse af de fugeløse belægninger.
            Det er vigtigt at forsegle overfladen korrekt og genforsegle regelmæssigt:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Dagligt:</span>
              <span>Tør overfladen af efter brusebad. Lad ikke vand stå på silkecement-overflader i længere tid.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Ugentligt:</span>
              <span>Rengør med pH-neutral rengøring og en blød klud. Undgå slibende svampe og aggressive kemikalier.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-serif font-bold text-primary shrink-0">Halvårligt:</span>
              <span>Genforsegl overfladen med specialvoks hvert 1-2 år. Vægge kan nøjes med hvert 2. år, mens gulve bør behandles årligt.</span>
            </li>
          </ul>
        </section>

        <section id="sammenligning" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Sammenligning med andre materialer</h2>
          <p>
            <strong>Silkecement vs. microcement:</strong> Microcement er hårdere, mere slidstærkt og
            kræver sjældnere genforsegling. Silkecement vinder på æstetik med sin blødere, varmere
            overflade og er lettere at reparere lokalt. Microcement passer bedst til gulve med
            høj trafik, mens silkecement er ideel til vægge og badeværelser med normal brug.
          </p>
          <p>
            <strong>Silkecement vs. fliser:</strong> Fliser er markant mere holdbare, billigere i
            budgetenden og kræver nærmest ingen vedligeholdelse. Silkecement vinder entydigt på det
            fugeløse, varme udtryk, der løfter badeværelset fra funktionelt til spa-agtigt.
          </p>
        </section>

        <TipBox variant="obs" title="Pas på i brusenichen">
          <p>
            Silkecement kan bruges i brusenichen, men det kræver ekstra grundig forsegling og
            hyppigere vedligeholdelse end på andre overflader. Mange håndværkere anbefaler at
            kombinere silkecement på vægge med fliser i selve brusenichen for den bedste holdbarhed.
            Uanset hvad skal der være korrekt vådrumssikring under hele overfladen.
          </p>
        </TipBox>

        <section id="det-rigtige-valg" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Er silkecement det rigtige valg for dig?</h2>
          <p>Silkecement er det rigtige valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Elsker det fugeløse look men ønsker en varmere, blødere overflade end microcement</li>
            <li>Indretter i skandinavisk stil med naturlige materialer og bløde farver</li>
            <li>Er villig til at vedligeholde overfladen regelmæssigt</li>
            <li>Primært bruger det til vægge (kombiner med fliser på gulvet)</li>
            <li>Ønsker en unik, håndlavet finish med organisk karakter</li>
          </ul>
          <p className="mt-4">Silkecement er måske <em>ikke</em> det bedste valg, hvis du:</p>
          <ul className="mt-3 space-y-1.5">
            <li>Vil have maksimal holdbarhed med minimal vedligeholdelse (vælg fliser)</li>
            <li>Har et familiebadevæerelse med hård daglig brug (vælg microcement eller fliser)</li>
            <li>Har et stramt budget (fliser starter lavere)</li>
          </ul>
        </section>

        <PullQuote
          quote="Silkecement giver badeværelset en sjæl, som fliser aldrig kan. Den bløde, levende overflade inviterer til berøring og skaber en spa-følelse, der gør morgenhygiejnen til en nydelse."
          author="Indretningsarkitekt, København"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Udforsk relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/materialer/microcement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Microcement</Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
            <Link href="/materialer/terrazzo" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Terrazzo</Link>
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål om silkecement</h2>
          <FAQAccordion faqs={material.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
