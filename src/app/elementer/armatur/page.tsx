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

const element = elements.find((e) => e.slug === "armatur")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/armatur` },
};

export default function ArmaturPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/armatur" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af armatur" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Vandhane", href: "/elementer/vandhane", description: "Guide til vandhaner" },
          { title: "Håndvask", href: "/elementer/haandvask", description: "Typer og materialer" },
          { title: "Brusekabine", href: "/elementer/brusekabine", description: "Typer og størrelser" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/armatur.png"
            alt="Badeværelsesarmatur — moderne armatur i krom og mat sort"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af armatur</h2>
          <p>
            Armatur er en bred kategori, der dækker alle vandblandingsenheder i badeværelset.
            Her er de vigtigste typer og deres anvendelse:
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
            I Danmark er etgrebsarmatur det mest udbredte valg til håndvaske — det er nemt at
            betjene med én hånd og styrer både temperatur og vandmængde. Til bruseren er
            termostatarmatur standarden i nybyggeri, da det forhindrer skoldning og giver
            konstant temperatur. Vægmonteret (indbygnings-)armatur er den mest elegante løsning,
            hvor rørene er skjult i væggen, men det kræver planlægning inden fliserne lægges.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Armatur prisinterval" />
          <p>
            Kvalitetsarmatur fra Hansgrohe, Grohe, Damixa eller Oras koster 1.200-3.500 kr. for
            håndvaskarmatur og 2.000-5.000 kr. for brusearmatur med termostat. Budget-armaturer
            fås fra 800 kr. men har ofte kortere levetid. Et komplet sæt (håndvask + bruser) koster
            typisk 3.000-8.000 kr. i mellemklassen.
          </p>
          <p>
            Sort mat og børstet messing er dyrere end standard krom — regn med en merpris på
            30-50% for de samme produkter i trendy finish. PVD-coatede overflader (sort, guld,
            messing) er mere holdbare end lakerede varianter.
          </p>
        </section>

        <TipBox variant="tip" title="Matchende finish i hele badet">
          <p>
            Vælg én finish til alle synlige armaturer og tilbehør: håndvask-armatur, bruser-armatur,
            toiletknap, håndklædekrog og papirholder. De fleste kvalitetsproducenter tilbyder
            komplette serier i samme design og finish. Det koster lidt mere end at mikse, men
            resultatet er langt mere harmonisk.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Finish:</strong> Krom er billigst og mest holdbart.
              Sort mat er moderne men viser kalk. Messing patinerer over tid. Vælg PVD-coating
              for bedste holdbarhed.
            </li>
            <li>
              <strong className="font-serif">Vandbesparelse:</strong> Vælg armaturer med
              EcoSmart eller lignende teknologi. De reducerer vandforbruget med 20-40% uden
              mærkbar forskel i vandtrykket.
            </li>
            <li>
              <strong className="font-serif">Termostat vs. standard:</strong> Termostatarmaturer
              koster mere men giver konstant temperatur og skoldningsbeskyttelse. Et must til
              familier med børn.
            </li>
            <li>
              <strong className="font-serif">Monteringstype:</strong> Bordplade-monteret er
              nemmest at skifte. Vægmonteret giver renere udtryk men kræver planlægning.
            </li>
            <li>
              <strong className="font-serif">Reservedele:</strong> Vælg et mærke, der garanterer
              reservedele i min. 10-15 år. En ny kartuche til 400 kr. forlænger armaturets levetid
              med mange år.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Koldstart sparer energi">
          <p>
            Armaturer med koldstart-funktion leverer koldt vand, når grebet er i midterposition.
            Traditionelle armaturer blander varmt og koldt vand i midten, hvilket aktiverer
            varmtvandsberederen unødvendigt. Koldstart kan spare 15-20% på varmtvandsforbruget
            ved håndvasken. De fleste nye Hansgrohe- og Grohe-armaturer har dette som standard.
          </p>
        </TipBox>

        <PullQuote
          quote="Armatur er badeværelsets smykker. Det rigtige valg af finish og design kan løfte selv et simpelt badeværelse fra ordinært til elegant. Investér i kvalitet — du bruger det tusindvis af gange om året."
          author="Produktchef, dansk armaturforhandler"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/vandhane" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Vandhane</Link>
            <Link href="/elementer/haandvask" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Håndvask</Link>
            <Link href="/elementer/brusekabine" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusekabine</Link>
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
