import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABox } from "@/components/CTABox";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { PriceBar } from "@/components/PriceBar";
import { elements } from "@/data/elements";

const element = elements.find((e) => e.slug === "spejl")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/spejl` },
};

export default function SpejlPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/spejl" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={8}
        tocItems={[
          { id: "typer", label: "Typer af spejle" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Håndvask", href: "/elementer/haandvask", description: "Typer og materialer" },
          { title: "Armatur", href: "/elementer/armatur", description: "Finish og kvalitet" },
          { title: "Glasvæg", href: "/elementer/glasvaeg", description: "Lys og rumdeling" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/spejl.png"
            alt="Badeværelsesspejl — rundt LED-spejl med integreret belysning"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af badeværelsesspejle</h2>
          <p>
            Det moderne badeværelsesspejl er langt mere end bare en reflekterende overflade.
            Med integreret belysning, antidugg og smarte funktioner er det et centralt designelement:
          </p>
          <div className="mt-6 space-y-5">
            {element.types.map((type, i) => (
              <div key={i} className="rounded-lg bg-card/50 p-4">
                <h3 className="font-serif font-bold text-text-main">{type.split(" — ")[0]}</h3>
                {type.includes(" — ") && <p className="mt-1 text-sm text-text-muted">{type.split(" — ")[1]}</p>}
              </div>
            ))}
          </div>
          <p className="mt-6">
            LED-spejle er det mest populære valg i 2026 og med god grund. Den integrerede belysning
            giver jævnt, blændfrit lys, der er perfekt til morgenhygiejne. De fleste modeller har
            touch-sensor til tænd/sluk og lysdæmpning. Rundt LED-spejl er den mest trendende form
            og bryder de rektangulære linjer, som fliser og møbler skaber. Spejlskabe er det
            praktiske valg til badeværelser, der mangler opbevaringsplads.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Badeværelsesspejl prisinterval" />
          <p>
            Et simpelt spejl uden belysning koster 500-1.500 kr. LED-spejle med touch-sensor
            koster 1.500-3.500 kr. Premium-modeller med antidugg, Bluetooth-højttaler og
            justerbar farvetemperatur koster 3.000-5.000 kr. Spejlskabe med lys starter ved
            2.000 kr. og kan koste op til 8.000 kr. for premium-mærker.
          </p>
          <p>
            El-installation til fast tilsluttede spejle koster 500-1.500 kr. og skal udføres
            af en autoriseret el-installatør.
          </p>
        </section>

        <TipBox variant="tip" title="Stort spejl = stort rum">
          <p>
            I små badeværelser kan et stort spejl, der fylder hele vægbredden over vasken,
            visuelt fordoble rummets størrelse. Et spejl fra væg til væg koster ofte det
            samme som et standardspejl, da det er ét stykke glas skåret til mål. Effekten
            på rummets oplevede størrelse er dramatisk og er en af de billigste designtricks
            til små badeværelser.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Størrelse:</strong> Minimum lige så bredt som
              håndvasken. 10-20 cm bredere giver det bedste visuelle resultat. Højde min. 70 cm.
            </li>
            <li>
              <strong className="font-serif">Belysning:</strong> LED med 4.000K (neutral hvid)
              giver det mest naturtro lys til makeup og barbering. Varm lys (3.000K) er mere
              stemningsfuldt men mindre præcist.
            </li>
            <li>
              <strong className="font-serif">Antidugg:</strong> Demister-funktion holder spejlet
              klart efter bade. Et must, hvis spejlet er placeret nær bruser. Koster 500-1.000 kr.
              ekstra.
            </li>
            <li>
              <strong className="font-serif">IP-klasse:</strong> Minimum IP44 i zone 2
              (60 cm fra bruser/badekar). IP65 i zone 1 (direkte over bruser).
            </li>
            <li>
              <strong className="font-serif">Form:</strong> Rundt spejl bryder rektangulære
              linjer og skaber kontrast. Rektangulært er mere klassisk og funktionelt.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="El-installation er et krav">
          <p>
            Spejle med fast el-tilslutning (LED-belysning, antidugg) skal tilsluttes af en
            autoriseret el-installatør. Spejlet skal have korrekt IP-klassificering til den
            zone det monteres i. Brug aldrig forlængerledning til badeværelsesspejle med
            strøm — det er ulovligt og farligt i vådrum.
          </p>
        </TipBox>

        <PullQuote
          quote="Et godt badeværelsesspejl med korrekt belysning er den enkeltinvestering, der giver mest daglig glæde. Du bruger det 10-20 gange om dagen — gør det til en nydelse."
          author="Lysdesigner"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
            <Link href="/elementer/armatur" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Armatur</Link>
            <Link href="/elementer/glasvaeg" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Glasvæg</Link>
          </div>
        </section>

        <section id="faq" className="mt-12">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">Ofte stillede spørgsmål</h2>
          <FAQAccordion faqs={element.faqs} />
        </section>

        <div className="mt-10"><CTABox variant="inline" /></div>
      </ArticleLayout>
    </>
  );
}
