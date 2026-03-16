import {
  SITE_NAME,
  SPECIALIST_URL,
  KVALIGO_URL,
} from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om BadGuiden — Uvildig Rådgivning om Badeværelser",
  description:
    "BadGuiden er Danmarks uvildige guide til badeværelser. Vi sælger ikke — vi oplyser. Læs om vores mission, værdier og plads i Kvaligo-netværket.",
  alternates: { canonical: "/om-os" },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const editorialValues = [
  {
    title: "Uvildig",
    description:
      "Vi sælger hverken produkter eller håndværkerydelser. Vores artikler er skrevet for at informere — ikke for at sælge. Når vi henviser til eksterne tjenester, er det altid tydeligt markeret.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Datadrevet",
    description:
      "Vores prisdata, sammenligninger og anbefalinger er baseret på research, branchedata og dialog med danske håndværkere og materialeforhandlere. Ikke gætterier.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Opdateret",
    description:
      "Badeværelse-branchen ændrer sig konstant — nye materialer, nye prisudviklinger, nye lovkrav. Vi opdaterer løbende vores artikler, så du altid har aktuel information.",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
        />
      </svg>
    ),
  },
];

const networkSites = [
  {
    name: "Kvaligo.dk",
    href: "https://kvaligo.dk",
    description: "Danmarks platform for kvalitetssikrede håndværkere",
  },
  {
    name: "KvaliBad.dk",
    href: "https://kvalibad.dk",
    description: "Specialist i badeværelse-håndværkere",
  },
  {
    name: "KvaliTag.dk",
    href: "https://kvalitag.dk",
    description: "Tag-specialister og tagrenoveringer",
  },
  {
    name: "TagGuiden.dk",
    href: "https://tagguiden.dk",
    description: "Uvildig guide til tagløsninger",
  },
  {
    name: "FlotHegn.dk",
    href: "https://flothegn.dk",
    description: "Alt om hegn og haveafskærmning",
  },
  {
    name: "TilbyGGuiden.dk",
    href: "https://tilbygguiden.dk",
    description: "Guide til tilbygning og udestue",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function OmOsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Om os" }]} />

      {/* Header */}
      <header className="mb-12">
        <h1 className="font-serif text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          Om {SITE_NAME}
          <br />
          <span className="text-primary">Uvildig Rådgivning om Badeværelser</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-muted font-sans">
          {SITE_NAME} er Danmarks mest komplette guide til badeværelser. Vi giver dig
          uvildig, datadrevet information om materialer, elementer, priser og renovering
          — så du kan træffe informerede beslutninger om dit næste badeværelse-projekt.
        </p>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*  What we do                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
          Hvad vi gør
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-text-muted font-sans">
          <p>
            {SITE_NAME} er en redaktionel informationsside. Vi er <strong className="text-text-main">ikke</strong> en
            håndværkerservice, og vi sælger hverken produkter eller ydelser. Vores
            eneste formål er at give danske husejere den bedste, mest gennemarbejdede
            information om badeværelse-renovering.
          </p>
          <p>
            Vi dækker alt fra materialevalg og priser til praktiske guides om
            vådrumssikring, byggetilladelser og gør-det-selv-projekter. Alle vores
            artikler er baseret på grundig research, branchedata og indsigt fra
            erfarne fagfolk.
          </p>
          <p>
            Når vi henviser til{" "}
            <a
              href={SPECIALIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary-dark"
            >
              KvaliBad.dk
            </a>{" "}
            for at indhente tilbud, er det fordi vi mener, det er den bedste service
            til formålet — men du er aldrig forpligtet, og vores anbefalinger er altid
            uvildige.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Editorial values                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-2xl font-bold text-text-main">
          Vores redaktionelle værdier
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {editorialValues.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-card bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/8">
                {value.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-text-main">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Kvaligo network                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="mb-16 rounded-2xl border border-card bg-white p-8 sm:p-10">
        <h2 className="mb-4 font-serif text-2xl font-bold text-text-main">
          Del af Kvaligo-netværket
        </h2>
        <p className="mb-8 text-base leading-relaxed text-text-muted font-sans">
          {SITE_NAME} er en del af{" "}
          <a
            href={KVALIGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 transition-colors hover:text-primary-dark"
          >
            Kvaligo-netværket
          </a>
          {" "}— en samling af uvildige guide-sites og specialist-platforme, der
          hjælper danske husejere med at navigere i bygge- og renoveringsprojekter.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {networkSites.map((site) => (
            <a
              key={site.href}
              href={site.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-card bg-surface p-4 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <h3 className="font-sans text-sm font-bold text-text-main transition-colors group-hover:text-primary">
                {site.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-text-muted font-sans">
                {site.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Contact link                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="rounded-xl border border-card bg-card/50 p-8 text-center">
        <h2 className="font-serif text-xl font-bold text-text-main">
          Har du spørgsmål?
        </h2>
        <p className="mt-2 text-base text-text-muted font-sans">
          Vi hører gerne fra dig — uanset om det er feedback, rettelser eller samarbejde.
        </p>
        <Link
          href="/kontakt"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-sans"
        >
          Kontakt os
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
        </Link>
      </section>
    </div>
  );
}
