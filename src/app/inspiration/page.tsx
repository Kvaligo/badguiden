import { ArticleSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABox } from "@/components/CTABox";
import InspirationGallery from "@/components/InspirationGallery";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badeværelse Inspiration — 100+ Idéer til Dit Nye Bad",
  description:
    "Find inspiration til dit nye badeværelse. Se 100+ idéer inden for moderne, klassisk, minimalistisk og luksus-stil — samlet af BadGuiden.",
  alternates: { canonical: "/inspiration" },
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function InspirationPage() {
  return (
    <>
      <ArticleSchema
        title="Badeværelse Inspiration — 100+ Idéer til Dit Nye Bad"
        description="Find inspiration til dit nye badeværelse. Se 100+ idéer inden for moderne, klassisk, minimalistisk og luksus-stil."
        url="/inspiration"
        datePublished="2025-12-01"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/inspiration.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Badeværelse Inspiration
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            100+ ideer til dit nye bad — fra minimalistisk skandinavisk til luksurios spa-folelse.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Inspiration" }]} />

        {/* Header */}
        <header className="mb-10">
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
            Lad dig inspirere af vores kuraterede galleri med badeværelse-designs.
            Fra minimalistisk skandinavisk til luksuriøs spa-følelse — find den stil
            der passer til dit hjem, dit budget og din personlighed.
          </p>
        </header>

        {/* Interactive gallery (client component) */}
        <InspirationGallery />

        {/* ---------------------------------------------------------------- */}
        {/*  Links to related sections                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="mt-16 rounded-2xl border border-card bg-white p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Gå fra inspiration til handling
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-muted font-sans">
            Fundet en stil du kan lide? Dyk dybere ned i materialer og elementer
            for at bringe din vision til live.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/materialer"
              className="group rounded-lg border border-card bg-surface p-5 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <h3 className="font-serif text-base font-bold text-text-main transition-colors group-hover:text-primary">
                Materialer
              </h3>
              <p className="mt-1 text-sm text-text-muted font-sans">
                Microcement, fliser, terrazzo og mere
              </p>
            </Link>
            <Link
              href="/elementer"
              className="group rounded-lg border border-card bg-surface p-5 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <h3 className="font-serif text-base font-bold text-text-main transition-colors group-hover:text-primary">
                Elementer
              </h3>
              <p className="mt-1 text-sm text-text-muted font-sans">
                Brusekabiner, armaturer, håndvaske
              </p>
            </Link>
            <Link
              href="/priser"
              className="group rounded-lg border border-card bg-surface p-5 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <h3 className="font-serif text-base font-bold text-text-main transition-colors group-hover:text-primary">
                Priser
              </h3>
              <p className="mt-1 text-sm text-text-muted font-sans">
                Komplet prisoversigt for 2026
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12">
          <CTABox variant="inline" />
        </div>
      </div>
    </>
  );
}
