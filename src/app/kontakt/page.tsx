import {
  SITE_NAME,
  SPECIALIST_URL,
  KVALIGO_URL,
} from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt BadGuiden — Redaktionel Henvendelse",
  description:
    "Kontakt BadGuiden med spørgsmål, feedback eller henvendelser om samarbejde. Vi er en redaktionel informationsside om badeværelser.",
  alternates: { canonical: "/kontakt" },
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Kontakt" }]} />

      {/* Header */}
      <header className="mb-12">
        <h1 className="font-serif text-3xl font-bold leading-tight text-text-main sm:text-4xl">
          Kontakt {SITE_NAME}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-muted font-sans">
          {SITE_NAME} er en redaktionel informationsside. Vi sælger ikke produkter
          eller håndværkerydelser, og vi kan desværre ikke hjælpe med konkrete
          renoveringsprojekter. Men vi hører gerne fra dig, hvis du har spørgsmål,
          feedback eller forslag til vores indhold.
        </p>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*  Contact info                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="mb-12 rounded-xl border border-card bg-white p-8">
        <h2 className="mb-4 font-serif text-xl font-bold text-text-main">
          Skriv til os
        </h2>
        <p className="mb-6 text-base leading-relaxed text-text-muted font-sans">
          Du kan kontakte redaktionen på:
        </p>
        <a
          href="mailto:kontakt@badguiden.dk"
          className="inline-flex items-center gap-3 rounded-lg border border-card bg-surface px-6 py-4 transition-all hover:border-primary/20 hover:shadow-sm"
        >
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <span className="block text-sm font-semibold text-text-main font-sans">
              kontakt@badguiden.dk
            </span>
            <span className="block text-xs text-text-muted font-sans">
              Vi svarer typisk inden for 1-2 hverdage
            </span>
          </div>
        </a>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Looking for quotes?                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="mb-12 rounded-xl border-2 border-accent/30 bg-accent/5 p-8">
        <h2 className="mb-4 font-serif text-xl font-bold text-text-main">
          Leder du efter tilbud på badeværelse-renovering?
        </h2>
        <p className="mb-6 text-base leading-relaxed text-text-muted font-sans">
          {SITE_NAME} er en informationsside og kan ikke give tilbud. Men vi
          anbefaler{" "}
          <a
            href={SPECIALIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary-dark"
          >
            KvaliBad.dk
          </a>
          , hvor du gratis og uforpligtende kan indhente op til 3 tilbud fra
          kvalitetssikrede badeværelse-specialister i dit område.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={SPECIALIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-primary-dark transition-opacity hover:opacity-90 font-sans"
          >
            Få 3 gratis tilbud via KvaliBad
            <svg
              className="h-4 w-4"
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
          </a>
          <a
            href={KVALIGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 font-sans"
          >
            Se alle services via Kvaligo.dk
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  What we can help with                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="rounded-xl border border-card bg-white p-8">
        <h2 className="mb-6 font-serif text-xl font-bold text-text-main">
          Hvad kan vi hjælpe med?
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <div>
              <h3 className="font-sans text-sm font-semibold text-text-main">
                Feedback på artikler
              </h3>
              <p className="text-sm text-text-muted font-sans">
                Har du fundet en fejl, en forældet pris eller manglende
                information? Skriv til os, så retter vi det.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <div>
              <h3 className="font-sans text-sm font-semibold text-text-main">
                Forslag til nye emner
              </h3>
              <p className="text-sm text-text-muted font-sans">
                Er der et emne vi mangler at dække? Vi prioriterer artikler
                ud fra hvad vores læsere efterspørger.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <div>
              <h3 className="font-sans text-sm font-semibold text-text-main">
                Presse og samarbejde
              </h3>
              <p className="text-sm text-text-muted font-sans">
                Henvendelser om redaktionelt samarbejde, ekspertkommentarer
                eller pressebrug af vores data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
