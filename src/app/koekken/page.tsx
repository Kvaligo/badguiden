import { SITE_URL, KVALIGO_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABox } from "@/components/CTABox";
import { kitchenPages } from "@/data/kitchen";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Køkkenrenovering Guide — Alt Om Nyt Køkken",
  description:
    "Komplet guide til køkkenrenovering i Danmark. Priser, materialer, inspiration og gør-det-selv tips. Alt du skal vide om nyt køkken i 2026.",
  alternates: { canonical: `${SITE_URL}/koekken` },
};

export default function KoekkenPage() {
  return (
    <>
      <ArticleSchema
        title="Køkkenrenovering Guide — Alt Om Nyt Køkken"
        description="Komplet guide til køkkenrenovering i Danmark. Priser, materialer, inspiration og gør-det-selv tips."
        url="/koekken"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/koekken.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Køkkenrenovering Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Alt om nyt køkken — priser, materialer, inspiration og gør-det-selv tips.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Køkken" }]} />

        <header className="mb-12">
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
            Køkkenet er boligens hjerte — stedet hvor familien samles, maden tilberedes og hverdagen
            leves. En køkkenrenovering er en stor investering, men med den rigtige planlægning får du
            et køkken, der fungerer perfekt i mange år fremover. Her får du det fulde overblik.
          </p>
        </header>

        {/* Intro */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Køkkenrenovering i Danmark 2026
          </h2>
          <p>
            Ifølge Bolius overvejer næsten hver fjerde danske boligejer at renovere køkkenet inden
            for de næste fem år. Det er en af de renoveringer, der giver størst glæde i hverdagen
            og samtidig øger boligens værdi mest. Et nyt køkken kan typisk tilføre 50-80% af
            investeringen til boligens salgspris.
          </p>
          <p>
            Priserne for et nyt køkken varierer enormt — fra 50.000 kr. for et simpelt
            budget-køkken til over 500.000 kr. for et skræddersyet luksuskøkken med
            premium-materialer. De fleste danske familier lander et sted mellem 100.000 og
            200.000 kr. for en komplet køkkenrenovering med nye elementer, bordplade, hårde
            hvidevarer og professionel montering.
          </p>
          <p>
            Uanset om du drømmer om et minimalistisk skandinavisk køkken, et rustikt landkøkken
            eller et moderne industrikøkken, starter rejsen med god research. Herunder finder du
            vores fire dybdegående guides, der dækker alt fra priser og materialer til inspiration
            og gør-det-selv-projekter.
          </p>
        </section>

        {/* Category grid */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Udforsk vores køkkenguides
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {kitchenPages.map((page) => (
              <Link
                key={page.slug}
                href={`/koekken/${page.slug}`}
                className="group block overflow-hidden rounded-lg bg-white border border-card transition-all duration-200 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/15">
                    <span className="font-serif text-4xl font-bold text-primary/20 select-none">
                      {page.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-primary-dark transition-colors group-hover:text-primary">
                    {page.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted line-clamp-2 font-sans">
                    {page.description}
                  </p>
                  <div className="mt-3 flex items-center justify-end">
                    <svg
                      className="h-4 w-4 text-text-muted/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Price overview teaser */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Hvad koster et nyt køkken? Hurtigt overblik
          </h2>
          <p>
            Før du dykker ned i detaljerne, er her et hurtigt overblik over de typiske prisklasser
            for et nyt køkken i Danmark:
          </p>
          <div className="not-prose grid gap-4 sm:grid-cols-3 my-6">
            <div className="rounded-lg border border-card bg-white p-5">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider font-sans">
                Budget
              </p>
              <p className="mt-2 font-serif text-xl font-bold text-primary">
                50.000 – 100.000 kr.
              </p>
              <p className="mt-2 text-sm text-text-muted font-sans">
                Laminatfronter, laminatbordplade, standard hvidevarer. Selvmontering mulig.
              </p>
            </div>
            <div className="rounded-lg border border-card bg-white p-5">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider font-sans">
                Standard
              </p>
              <p className="mt-2 font-serif text-xl font-bold text-primary">
                100.000 – 200.000 kr.
              </p>
              <p className="mt-2 text-sm text-text-muted font-sans">
                Lakerede fronter, kompositsten-bordplade, gode hvidevarer. Prof. montering.
              </p>
            </div>
            <div className="rounded-lg border border-card bg-white p-5">
              <p className="text-sm font-semibold text-text-muted uppercase tracking-wider font-sans">
                Luksus
              </p>
              <p className="mt-2 font-serif text-xl font-bold text-primary">
                200.000 – 500.000+ kr.
              </p>
              <p className="mt-2 text-sm text-text-muted font-sans">
                Snedkerkøkken, granit/marmor, premium hvidevarer. Skræddersyet design.
              </p>
            </div>
          </div>
          <p>
            Priserne inkluderer køkkenelementer, bordplade, hårde hvidevarer og montering. VVS- og
            el-arbejde kommer typisk oveni med 10.000-25.000 kr. Se vores{" "}
            <Link href="/koekken/pris" className="text-primary hover:underline">
              komplette prisoversigt
            </Link>{" "}
            for alle detaljer.
          </p>
        </section>

        {/* Process overview */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Sådan forløber en køkkenrenovering
          </h2>
          <p>
            En typisk køkkenrenovering tager 2-6 uger fra start til slut, afhængig af omfanget.
            Her er de vigtigste faser:
          </p>
          <ol>
            <li>
              <strong>Planlægning og design (1-4 uger).</strong> Besøg køkkenforhandlere, lav
              tegninger og fastlæg budget. Jo bedre forberedelse, jo glattere forløb.
            </li>
            <li>
              <strong>Bestilling og ventetid (4-8 uger).</strong> Køkkenelementer har typisk
              4-8 ugers leveringstid. Brug ventetiden til at bestille håndværkere.
            </li>
            <li>
              <strong>Nedrivning (1-2 dage).</strong> Det gamle køkken fjernes. Husk at planlægge
              et nødkøkken i en anden stue i denne periode.
            </li>
            <li>
              <strong>VVS og el (1-3 dage).</strong> Vandrør, afløb og el-punkter flyttes eller
              fornyes efter den nye tegning.
            </li>
            <li>
              <strong>Montering (2-5 dage).</strong> Skabe, bordplade, stænkplade og hårde
              hvidevarer monteres. Professionel montering anbefales.
            </li>
            <li>
              <strong>Finish og tilslutning (1-2 dage).</strong> Fuger, lister, belysning og final
              tilslutning af vand og el. Kvalitetstjek og eventuel efterjustering.
            </li>
          </ol>
        </section>

        {/* Kvaligo link section */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Find den rette håndværker til dit køkkenprojekt
          </h2>
          <p>
            En køkkenrenovering involverer typisk flere faggrupper: snedker/tømrer til montering,
            VVS&apos;er til vand og afløb, og elektriker til el-installationer. Det kan være en
            udfordring at koordinere det hele selv.
          </p>
          <p>
            Via{" "}
            <a
              href={KVALIGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Kvaligo.dk
            </a>{" "}
            kan du finde kvalitetssikrede håndværkere til dit køkkenprojekt. Få uforpligtende
            tilbud og sammenlign priser, så du er sikker på at få en fair pris for arbejdet.
          </p>
        </section>

        {/* CTA */}
        <CTABox
          variant="section"
          heading="Klar til at renovere dit køkken?"
          text="Få 3 uforpligtende tilbud fra kvalitetssikrede håndværkere via KvaliBad.dk — eller find den rette fagmand til dit køkkenprojekt gennem Kvaligo.dk."
        />
      </div>
    </>
  );
}
