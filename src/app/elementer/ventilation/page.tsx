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

const element = elements.find((e) => e.slug === "ventilation")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/ventilation` },
};

export default function VentilationPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/ventilation" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af ventilation" },
          { id: "pris", label: "Pris" },
          { id: "lovkrav", label: "Lovkrav (BR18)" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Gulvvarme", href: "/elementer/gulvvarme", description: "Typer og installation" },
          { title: "Brusekabine", href: "/elementer/brusekabine", description: "Typer og størrelser" },
          { title: "Brusevæg", href: "/elementer/brusevaeg", description: "Det åbne alternativ" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/ventilation.png"
            alt="Ventilation til badeværelse — mekanisk udsugningsventilator"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af ventilation</h2>
          <p>
            Der findes flere ventilationsløsninger til badeværelset, hver med sine fordele og
            begrænsninger:
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
            I de fleste danske huse og lejligheder er den simpleste løsning en udsugningsventilator
            monteret i loft eller ydervæg. I nybyggeri er mekanisk ventilation med varmegenvinding
            (MVG) standard, da det genbruger varmen i udsugningsluften. Fugtstyret ventilation er
            den smarteste løsning, da den automatisk justerer udsugningen baseret på
            luftfugtigheden — der kører kraftig udsugning under og efter bad, og lavt niveau resten
            af tiden.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Ventilation prisinterval" />
          <p>
            En kvalitets-udsugningsventilator med fugtsensor og timer koster 1.500-3.000 kr.
            Professionel installation inkl. gennemføring i ydervæg koster 2.000-5.000 kr.
            Decentral ventilation med varmegenvinding koster 4.000-6.000 kr. plus installation.
          </p>
          <p>
            Driftsomkostningerne er beskedne — en moderne ventilator bruger 5-20W og koster
            50-200 kr. årligt i el. Det er en bagatel sammenlignet med de potentielt katastrofale
            omkostninger ved fugtskader pga. manglende ventilation.
          </p>
        </section>

        <section id="lovkrav" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Lovkrav (BR18)</h2>
          <p>
            Bygningsreglementet BR18 stiller klare krav til ventilation i badeværelser:
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong>Grundventilation:</strong> Mindst 10 l/s (36 m3/t) konstant luftskifte</li>
            <li><strong>Forceret udsugning:</strong> Mindst 15 l/s (54 m3/t) under brug (brusning)</li>
            <li><strong>Udsugning:</strong> Luften skal udsuges direkte fra badeværelset, ikke via andre rum</li>
            <li><strong>Tilluft:</strong> Der skal sikres tilstrækkelig tilluft, typisk via spalte under dør (min. 20 mm)</li>
          </ul>
          <p className="mt-3">
            Naturlig ventilation via vindue er tilladt i eksisterende boliger, men ikke tilstrækkeligt
            som eneste løsning i nybyggeri. Ved renovering skal ventilationen bringes op til
            gældende standard, hvis det er teknisk muligt.
          </p>
        </section>

        <TipBox variant="tip" title="Fugtstyring er den bedste investering">
          <p>
            En ventilator med fugtsensor koster kun 300-500 kr. mere end en model uden og er den
            bedste investering, du kan gøre. Den kører automatisk op, når du bruser, og ned igen
            når fugten er faldet. Du slipper for at huske at tænde og slukke, og du sparer energi
            sammenlignet med konstant fuld udsugning.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Støjniveau:</strong> Vælg en ventilator under 30 dB(A)
              for komfort. Over 35 dB(A) kan være forstyrrende, især om natten.
            </li>
            <li>
              <strong className="font-serif">Kapacitet:</strong> Minimum 15 l/s for et standard
              badeværelse. Større badeværelser kræver mere.
            </li>
            <li>
              <strong className="font-serif">Kanal vs. direkte udblæsning:</strong> Tilslutning
              til eksisterende kanal er nemmest. Direkte udblæsning kræver gennemføring i ydervæg.
            </li>
            <li>
              <strong className="font-serif">Energieffektivitet:</strong> EC-motorer bruger op til
              80% mindre strøm end AC-motorer. Varmegenvinding reducerer varmetabet markant.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Manglende ventilation er dyrt">
          <p>
            Utilstrækkelig ventilation er en af de hyppigste årsager til fugtskader og
            skimmelsvamp i danske badeværelser. Reparation af fugtskader koster typisk
            50.000-150.000 kr. og kan påvirke helbredet alvorligt. En god ventilationsløsning
            til 5.000-10.000 kr. er den billigste forsikring mod disse problemer.
          </p>
        </TipBox>

        <PullQuote
          quote="Ventilation er det mest undervurderede element i badeværelset. Folk bruger tusindvis af kroner på fliser og armatur men glemmer den usynlige helt, der beskytter hele konstruktionen mod fugt."
          author="Byggesagkyndig"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/gulvvarme" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Gulvvarme</Link>
            <Link href="/elementer/brusekabine" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusekabine</Link>
            <Link href="/guide/vaadrumssikring" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Vådrumssikring</Link>
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
