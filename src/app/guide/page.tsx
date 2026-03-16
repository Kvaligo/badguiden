import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABox } from "@/components/CTABox";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badeværelse Guides — Alt Om Renovering & Vedligehold",
  description:
    "Komplette danske guides til badeværelse-renovering, vådrumssikring, vedligeholdelse og trends. Uvildig rådgivning fra planlægning til færdigt resultat.",
  alternates: {
    canonical: `${SITE_URL}/guide`,
  },
};

const featuredGuide = guides.find((g) => g.slug === "vaadrumssikring")!;

export default function GuidePage() {
  return (
    <div>
      <ArticleSchema
        title="Badeværelse Guides — Alt Om Renovering & Vedligehold"
        description="Komplette danske guides til badeværelse-renovering, vådrumssikring, vedligeholdelse og trends."
        url="/guide"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/guide.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Badeværelse Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Alt om renovering, vedligeholdelse, vådrumssikring og gør-det-selv
            — opdateret med de nyeste regler og priser for 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Guides" }]} />

      <header className="mb-12">
        <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
          Uanset om du planlægger en komplet renovering eller bare vil holde dit
          badeværelse i topform, finder du svaret her. Vores guides er skrevet
          til danske boligejere og opdateret med de nyeste regler og priser for
          2026.
        </p>
      </header>

      {/* Featured guide */}
      <section className="mb-14">
        <Link
          href={`/guide/${featuredGuide.slug}`}
          className="group block overflow-hidden rounded-xl border border-card bg-white transition-shadow hover:shadow-lg"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="flex items-center justify-center bg-primary/5 px-8 py-10 sm:w-1/3">
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-primary-dark font-sans">
                  Mest søgt
                </span>
                <svg
                  className="mx-auto mt-4 h-16 w-16 text-primary/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-text-main group-hover:text-primary transition-colors sm:text-2xl">
                {featuredGuide.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted font-sans">
                Vådrumssikring er det vigtigste element i enhver
                badeværelse-renovering — og et lovkrav i Danmark. Lær alt om DS
                484, BR18, typer af membraner, priser og den korrekte proces.
                Den mest søgte badeværelse-guide i Danmark.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-text-muted font-sans">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {featuredGuide.readingTime} min. læsetid
                </span>
                <span className="text-primary font-semibold group-hover:underline">
                  Læs guiden &rarr;
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Guide grid */}
      <section>
        <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
          Alle guides
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="group rounded-lg border border-card bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-bold text-text-main group-hover:text-primary transition-colors">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans line-clamp-3">
                {guide.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm font-sans">
                <span className="flex items-center gap-1.5 text-text-muted">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {guide.readingTime} min.
                </span>
                <span className="text-primary font-semibold group-hover:underline">
                  Læs mere &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16">
        <CTABox variant="section" />
      </div>
      </div>
    </div>
  );
}
