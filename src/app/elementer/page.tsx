import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { CTABox } from "@/components/CTABox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { elements } from "@/data/elements";

export const metadata: Metadata = {
  title: "Elementer til Badeværelse — Den Komplette Oversigt",
  description:
    "Komplet oversigt over badeværelseselementer: brusekabine, brusevæg, håndvask, armatur, vandhane, ventilation, spejl, glasvæg og gulvvarme. Typer, priser og tips.",
  alternates: { canonical: `${SITE_URL}/elementer` },
};

const typeSummaryMap: Record<string, string> = {
  brusekabine: "Hjørne, walk-in, rektangulær m.fl.",
  brusevaeg: "Fast, svingarm, walk-in m.fl.",
  haandvask: "Væghængt, møbel, bordplade m.fl.",
  armatur: "Etgrebs, termostat, indbygning m.fl.",
  vandhane: "Høj, væghængt, sensor m.fl.",
  ventilation: "Mekanisk, fugtstyret, MVG m.fl.",
  spejl: "LED, spejlskab, rundt m.fl.",
  glasvaeg: "Fast, ramme, matteret m.fl.",
  gulvvarme: "El-kabel, varmemåtte, vandbaseret m.fl.",
};

export default function ElementerPage() {
  return (
    <>
      <ArticleSchema
        title="Elementer til Badeværelse — Den Komplette Oversigt"
        description="Komplet oversigt over badeværelseselementer: brusekabine, brusevæg, håndvask, armatur, vandhane, ventilation, spejl, glasvæg og gulvvarme."
        url="/elementer"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/elementer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Elementer til Badeværelse
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Brusekabiner, håndvaske, armaturer, ventilation og mere — alt hvad
            du skal vide om badeværelsets vigtigste elementer.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Elementer" }]} />

        <header className="mb-12">
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
            Fra brusekabinen til gulvvarmen — hvert element i badeværelset
            bidrager til den samlede oplevelse. Her guider vi dig gennem alle
            de vigtigste badeværelseselementer med ærlige vurderinger af typer,
            priser og kvalitet, så du kan træffe det rigtige valg til dit
            badeværelse.
          </p>
        </header>

        {/* Element cards grid */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {elements.map((element) => (
              <Link
                key={element.slug}
                href={`/elementer/${element.slug}`}
                className="group overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/elements/${element.slug}.png`}
                  alt={`${element.name} til badeværelse`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                <h2 className="font-serif text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                  {element.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-primary font-sans">
                  {element.priceRange.from.toLocaleString("da-DK")} &ndash;{" "}
                  {element.priceRange.to.toLocaleString("da-DK")}{" "}
                  {element.priceRange.unit}
                </p>
                <p className="mt-1.5 text-xs text-text-muted font-sans">
                  {typeSummaryMap[element.slug] ?? ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted font-sans line-clamp-3">
                  {element.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary font-sans">
                  Læs mere
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Overview table */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Prisoversigt — alle elementer
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-card">
                  <th className="py-3 pr-4 text-left font-semibold text-text-main">
                    Element
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-text-main">
                    Prisinterval
                  </th>
                  <th className="py-3 pl-4 text-left font-semibold text-text-main">
                    Typer
                  </th>
                </tr>
              </thead>
              <tbody>
                {elements.map((element) => (
                  <tr
                    key={element.slug}
                    className="border-b border-card/60"
                  >
                    <td className="py-3 pr-4">
                      <Link
                        href={`/elementer/${element.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {element.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-text-muted whitespace-nowrap">
                      {element.priceRange.from.toLocaleString("da-DK")} &ndash;{" "}
                      {element.priceRange.to.toLocaleString("da-DK")}{" "}
                      {element.priceRange.unit}
                    </td>
                    <td className="py-3 pl-4 text-text-muted">
                      {typeSummaryMap[element.slug] ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <CTABox variant="section" />
      </div>
    </>
  );
}
