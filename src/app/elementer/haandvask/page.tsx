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

const element = elements.find((e) => e.slug === "haandvask")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/haandvask` },
};

export default function HaandvaskPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/haandvask" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af håndvaske" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Armatur", href: "/elementer/armatur", description: "Typer, finish og valg" },
          { title: "Vandhane", href: "/elementer/vandhane", description: "Guide til vandhaner" },
          { title: "Spejl", href: "/elementer/spejl", description: "Typer og belysning" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/haandvask.png"
            alt="Håndvask til badeværelse — moderne håndvask med underskab"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af håndvaske</h2>
          <p>
            Valget af håndvask sætter tonen for hele badeværelsets udtryk. Her er de mest populære
            typer og hvad de passer bedst til:
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
            Møbelvaske med integreret underskab er den mest populære løsning i danske badeværelser,
            da de kombinerer praktisk opbevaring med et rent udtryk. Påsatsvaske (vessel-vaske) på
            en åben bordplade er det trendy valg, der giver et hotel-lignende udtryk. Vægmonterede
            vaske uden møbel er ideelle til minimalistiske badeværelser og gør rengøring under
            vasken nemt.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Håndvask prisinterval" />
          <p>
            En standard porcelæns-håndvask koster 1.500-4.000 kr. Komplet møbelsæt med underskab,
            vask og spejl koster 5.000-20.000 kr. Designervaske fra mærker som Duravit eller
            Laufen kan koste 5.000-10.000 kr. for vasken alene. VVS-installation koster
            1.500-3.000 kr. afhængigt af om tilslutninger skal ændres.
          </p>
        </section>

        <TipBox variant="tip" title="Tænk på den daglige brug">
          <p>
            Vælg en vask med tilstrækkelig dybde (min. 12-15 cm) for at undgå vandstænk under
            håndvask. Brede, flade vaske ser flotte ud på billeder, men i praksis sprøjter vandet
            ud over kanten. En vask med integreret overløb er et must for at undgå
            oversvømmelse, hvis afløbet tilstoppes.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Størrelse:</strong> Standard 50-60 cm bredde. Kompakt
              35-45 cm til små bade. Dobbelt vask kræver min. 120 cm bredde.
            </li>
            <li>
              <strong className="font-serif">Materiale:</strong> Porcelæn er mest holdbart og
              hygiejnisk. Komposit (Corian o.l.) kan repareres. Natursten er luksuriøst men kræver
              vedligeholdelse.
            </li>
            <li>
              <strong className="font-serif">Opbevaring:</strong> Har du brug for opbevaring, vælg
              en møbelvask med underskab. Alternativt kan vægmonterede hylder eller spejlskabe
              kompensere.
            </li>
            <li>
              <strong className="font-serif">Montering:</strong> Tjek at væggen kan bære en
              væghængt vask (typisk 15-25 kg). Lette gipsvægge kræver forstærkning.
            </li>
            <li>
              <strong className="font-serif">Armatur-kompatibilitet:</strong> Kontrollér antallet
              af huller i vasken og om det matcher dit armatur (etgrebs = 1 hul, togrebs = 3 huller).
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Højden er vigtig">
          <p>
            Den ergonomisk korrekte højde for en håndvask er 80-85 cm fra gulv til vaskens overkant.
            Til høje personer kan 85-90 cm være mere komfortabelt. Ved påsatsvaske på en bordplade
            skal du medregne vaskens højde — en bordpladehøjde på 70-75 cm med en vask på 12-15 cm
            giver en samlet højde på 82-90 cm.
          </p>
        </TipBox>

        <PullQuote
          quote="Håndvasken er det første, du bruger om morgenen og det sidste om aftenen. Investér i en vask, der føles godt — den rigtige form, den rigtige højde og det rigtige materiale gør en kæmpe forskel i hverdagen."
          author="Badrumsarkitekt"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/armatur" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Armatur</Link>
            <Link href="/elementer/vandhane" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Vandhane</Link>
            <Link href="/elementer/spejl" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Spejl</Link>
            <Link href="/materialer/natursten" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Natursten</Link>
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
