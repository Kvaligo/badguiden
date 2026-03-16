import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { CTABox } from "@/components/CTABox";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { materials } from "@/data/materials";

export const metadata: Metadata = {
  title: "Materialer til Badeværelse — Den Komplette Oversigt",
  description:
    "Komplet oversigt over materialer til badeværelset: microcement, fliser, klinker, silkecement, terrazzo og natursten. Sammenlign priser, holdbarhed og vedligeholdelse.",
  alternates: { canonical: `${SITE_URL}/materialer` },
};

const holdbarhedMap: Record<string, string> = {
  microcement: "15-20 år",
  fliser: "30+ år",
  klinker: "40+ år",
  silkecement: "10-15 år",
  terrazzo: "50+ år",
  natursten: "50+ år",
};

const vedligeholdMap: Record<string, string> = {
  microcement: "Middel",
  fliser: "Lav",
  klinker: "Lav",
  silkecement: "Høj",
  terrazzo: "Lav",
  natursten: "Høj",
};

export default function MaterialerPage() {
  return (
    <>
      <ArticleSchema
        title="Materialer til Badeværelse — Den Komplette Oversigt"
        description="Komplet oversigt over materialer til badeværelset: microcement, fliser, klinker, silkecement, terrazzo og natursten."
        url="/materialer"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/materialer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Materialer til Badeværelse
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Komplet oversigt over de mest populære materialer til danske badeværelser
            — med ærlige vurderinger af pris, fordele og ulemper.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Materialer" }]} />

        <header className="mb-12">
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
            Valget af materiale er en af de vigtigste beslutninger, når du
            renoverer dit badeværelse. Det påvirker alt fra udseende og
            holdbarhed til pris og vedligeholdelse. Her finder du en komplet
            oversigt over de mest populære materialer til danske badeværelser
            — med ærlige vurderinger af pris, fordele og ulemper.
          </p>
        </header>

        {/* Material cards grid */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
              <Link
                key={material.slug}
                href={`/materialer/${material.slug}`}
                className="group overflow-hidden rounded-xl bg-card transition-shadow hover:shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/materials/${material.slug}.png`}
                  alt={`${material.name} tekstur til badeværelse`}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6">
                <h2 className="font-serif text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                  {material.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-primary font-sans">
                  {material.priceRange.from.toLocaleString("da-DK")} &ndash;{" "}
                  {material.priceRange.to.toLocaleString("da-DK")}{" "}
                  {material.priceRange.unit}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted font-sans line-clamp-3">
                  {material.description}
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

        {/* Comparison table */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Sammenligning af alle materialer
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-card">
                  <th className="py-3 pr-4 text-left font-semibold text-text-main">
                    Materiale
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-text-main">
                    Pris
                  </th>
                  <th className="py-3 px-4 text-left font-semibold text-text-main">
                    Holdbarhed
                  </th>
                  <th className="py-3 pl-4 text-left font-semibold text-text-main">
                    Vedligehold
                  </th>
                </tr>
              </thead>
              <tbody>
                {materials.map((material) => (
                  <tr
                    key={material.slug}
                    className="border-b border-card/60"
                  >
                    <td className="py-3 pr-4">
                      <Link
                        href={`/materialer/${material.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {material.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-text-muted whitespace-nowrap">
                      {material.priceRange.from.toLocaleString("da-DK")} &ndash;{" "}
                      {material.priceRange.to.toLocaleString("da-DK")}{" "}
                      {material.priceRange.unit}
                    </td>
                    <td className="py-3 px-4 text-text-muted">
                      {holdbarhedMap[material.slug] ?? "—"}
                    </td>
                    <td className="py-3 pl-4 text-text-muted">
                      {vedligeholdMap[material.slug] ?? "—"}
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
