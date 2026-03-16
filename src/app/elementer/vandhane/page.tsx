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

const element = elements.find((e) => e.slug === "vandhane")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/vandhane` },
};

export default function VandhanePage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/vandhane" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={8}
        tocItems={[
          { id: "typer", label: "Typer af vandhaner" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Armatur", href: "/elementer/armatur", description: "Typer, finish og valg" },
          { title: "Håndvask", href: "/elementer/haandvask", description: "Typer og materialer" },
          { title: "Spejl", href: "/elementer/spejl", description: "Typer og belysning" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/vandhane.png"
            alt="Vandhane til badeværelse — høj vandhane i moderne design"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af vandhaner</h2>
          <p>
            Vandhanen er det armatur, du berører oftest i løbet af en dag. Det rigtige valg handler
            om komfort, design og praktik:
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
            Den høje vandhane er særligt populær i 2026, da påsatsvaske (vessel) dominerer de
            moderne badeværelsesdesigns. En vægmonteret vandhane er den mest elegante løsning
            — tudet &quot;svæver&quot; over vasken, og bordpladen er fri for monteringshuller. Sensorhaner
            er den hygiejniske løsning og ideelle til familier, da de reducerer bakteriespredning.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Vandhane prisinterval" />
          <p>
            En kvalitets-vandhane fra anerkendte mærker koster 1.000-3.000 kr. Budget-haner fås
            fra 500 kr. men har ofte billigere kartoucher og kortere levetid. Designer-haner fra
            eksklusive mærker som Vola eller Dornbracht kan koste 4.000-8.000 kr. VVS-installation
            koster 500-1.500 kr. afhængigt af om det er udskiftning eller ny montering.
          </p>
        </section>

        <TipBox variant="tip" title="Husk at tjekke tudens rækkevidde">
          <p>
            En vandhanes tud skal nå ind over midten af vasken for at undgå sprøjt ud over kanten.
            Mål afstanden fra vandhanens monteringspunkt til vaskens midte. Til påsatsvaske er det
            afgørende at tudens udstrækning matcher vaskens dybde. For kort tud = vand på bordpladen.
            For lang tud = vand mod vaskens bagvæg.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Vasketype:</strong> Høj hane til påsatsvaske, lav hane
              til nedfældede vaske, vægmonteret til rene bordplader.
            </li>
            <li>
              <strong className="font-serif">Kartuche-kvalitet:</strong> Keramiske kartoucher er
              standarden og giver drypfri funktion i 10-20 år. Billige plastik-kartoucher holder
              typisk kun 3-5 år.
            </li>
            <li>
              <strong className="font-serif">Vandstråle:</strong> Vælg en hane med justerbar perlator
              for en blød, luftblandet stråle, der bruger mindre vand og sprøjter mindre.
            </li>
            <li>
              <strong className="font-serif">Tilslutning:</strong> Standardtilslutning er G3/8&quot;.
              Tjek om din nye hane passer til de eksisterende tilslutninger, eller om der skal
              bruges adaptere.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Hårdt vand forkorter levetiden">
          <p>
            I mange danske kommuner er vandets hårdhedsgrad høj (over 20 dH), hvilket øger
            kalkaflejringer i armaturer markant. I hårdt-vands-områder bør du vælge vandhaner
            med lettilgængelig perlator, der kan afmonteres og afkalkes regelmæssigt. Et
            vandfilter eller en blødgøringsanlæg kan forlænge armaturets levetid med 50%.
          </p>
        </TipBox>

        <PullQuote
          quote="Den rigtige vandhane er den, du glemmer eksisterer — fordi den bare virker, føles godt og ser godt ud, hver eneste gang du bruger den."
          author="VVS-installatør med 25 års erfaring"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/armatur" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Armatur</Link>
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
            <Link href="/elementer/spejl" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Spejl</Link>
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
