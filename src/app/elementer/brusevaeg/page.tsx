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

const element = elements.find((e) => e.slug === "brusevaeg")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/brusevaeg` },
};

export default function BrusevaegPage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/brusevaeg" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={8}
        tocItems={[
          { id: "typer", label: "Typer af brusevægge" },
          { id: "pris", label: "Pris" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Brusekabine", href: "/elementer/brusekabine", description: "Den lukkede løsning" },
          { title: "Glasvæg", href: "/elementer/glasvaeg", description: "Rumdeling med glas" },
          { title: "Armatur", href: "/elementer/armatur", description: "Typer og finish" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/brusevaeg.png"
            alt="Brusevæg i glas — fast brusevæg med stabiliseringsstang"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af brusevægge</h2>
          <p>
            Brusevægge fås i flere varianter, der passer til forskellige badeværelselayouts og behov:
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
            En fast brusevæg med stabiliseringsstang er den mest populære løsning i moderne danske
            badeværelser. Den giver et rent, minimalistisk udtryk og er nem at rengøre. Brusevægge
            med svingarm tilbyder ekstra fleksibilitet, da den foldbare del kan svinge ind over
            bruseområdet og dermed give bedre vandafskærmning.
          </p>
          <p>
            Vælg klart glas til et åbent, rummeligt udtryk, eller frostet glas, hvis brusevæggen
            adskiller bruseområdet fra et toilet eller et område med indblik. Tonet glas i grå
            eller bronze nuancer er en elegant mellemvej.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Brusevæg prisinterval" />
          <p>
            En standardbrusevæg i 8 mm hærdet glas med krom-beslag koster 2.000-4.000 kr.
            Premium-varianter med 10 mm glas, sort mat beslag og nanobeskyttelse koster
            5.000-8.000 kr. Professionel montering koster 1.500-3.000 kr. afhængigt af
            vægtype og monteringsmetode.
          </p>
        </section>

        <TipBox variant="tip" title="Nanobeskyttelse er pengene værd">
          <p>
            Investér i en brusevæg med nanobeskyttelse (easy-clean coating). Det koster 500-1.000 kr.
            ekstra men reducerer rengøringsbehovet markant. Vandet perler af glasset, og kalk får
            sværere ved at sætte sig. Over brusevæggens levetid sparer du mange timer på rengøring.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Bredde:</strong> Minimum 80 cm, ideelt 90-120 cm.
              En bredere brusevæg holder mere vand inde men tager mere plads.
            </li>
            <li>
              <strong className="font-serif">Glastykkelse:</strong> 8 mm er standard og
              tilstrækkeligt. 10 mm føles mere solidt og luksuriøst.
            </li>
            <li>
              <strong className="font-serif">Gulvfald:</strong> Brusevægge kræver korrekt gulvfald
              (min. 1-2%) mod afløbet for at forhindre vand i at løbe ud i resten af badeværelset.
            </li>
            <li>
              <strong className="font-serif">Montering:</strong> Vægmontering er mest stabil.
              Gulv-til-loft montering er en alternativ løsning, der undgår boring i fliser.
            </li>
            <li>
              <strong className="font-serif">Beslag-finish:</strong> Vælg beslag, der matcher
              dit øvrige armatur (krom, sort mat, messing) for et harmonisk helhedsindtryk.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="Vandsprøjt med brusevæg">
          <p>
            En brusevæg er en åben løsning, og noget vandstænk er uundgåeligt. Minimér
            problemet ved at placere brusehovedet mod den lukkede væg (ikke mod den åbne side),
            sikre korrekt gulvfald, og vælge en brusevæg i tilstrækkelig bredde. En svingarm
            giver ekstra beskyttelse, når den er foldet ud.
          </p>
        </TipBox>

        <PullQuote
          quote="En brusevæg er den mest elegante måde at afgrænse bruseområdet på. Den åbner rummet op, slipper lyset igennem og giver badeværelset det moderne, skandinaviske udtryk, alle drømmer om."
          author="Badeværelsesdesigner"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/brusekabine" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Brusekabine</Link>
            <Link href="/elementer/glasvaeg" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Glasvæg</Link>
            <Link href="/elementer/armatur" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Armatur</Link>
            <Link href="/materialer/microcement" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Microcement</Link>
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
