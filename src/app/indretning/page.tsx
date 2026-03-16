import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABox } from "@/components/CTABox";
import { interiorCategories } from "@/data/interior";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badeværelse Indretning — Tips & Trends 2026",
  description:
    "Komplet guide til indretning af badeværelset. Opbevaring, møbler, farvevalg og idéer til små badeværelser. Danske tips og trends for 2026.",
  alternates: { canonical: `${SITE_URL}/indretning` },
};

export default function IndretningPage() {
  return (
    <>
      <ArticleSchema
        title="Badeværelse Indretning — Tips & Trends 2026"
        description="Komplet guide til indretning af badeværelset. Opbevaring, møbler, farvevalg og idéer til små badeværelser."
        url="/indretning"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      {/* Hero */}
      <div
        className="relative w-full min-h-[40vh] bg-primary-dark flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/hero/indretning.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary-dark/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Badeværelse Indretning
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/80 font-sans">
            Tips, trends og inspiration til indretning af dit badeværelse i 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Indretning" }]} />

        <header className="mb-12">
          <p className="max-w-3xl text-lg leading-relaxed text-text-muted font-sans">
            Et velindrettet badeværelse er mere end bare fliser og et toilet. Det handler om at skabe
            et rum, der både er funktionelt i hverdagen og rart at opholde sig i. Uanset om du
            renoverer fra bunden eller bare vil opgradere dit nuværende bad, kan de rigtige
            indretningsvalg gøre en kæmpe forskel for den daglige oplevelse.
          </p>
        </header>

        {/* Introduction */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Indretning af badeværelset i 2026
          </h2>
          <p>
            Badeværelset er gået fra at være et rent funktionelt rum til at være et af de vigtigste
            rum i boligen. Danske boligejere bruger stadig mere tid og ressourcer på at skabe
            badeværelser, der føles som private wellness-oaser. Tendensen i 2026 peger mod varme,
            naturlige materialer, gennemtænkt opbevaring og farvepaletter der skaber ro og harmoni.
          </p>
          <p>
            God indretning starter med en plan. Overvej, hvordan badeværelset bruges i hverdagen:
            Hvor mange personer deler det? Er der behov for dobbelt håndvask? Skal der plads til
            vasketøj? Svarene på disse spørgsmål afgør, hvilke løsninger der giver mest mening for
            netop dit hjem.
          </p>
          <p>
            Herunder finder du vores fire hovedkategorier inden for badeværelsesindretning. Hver
            guide går i dybden med praktiske tips, materialevalg og de nyeste trends, så du kan
            træffe velinformerede beslutninger.
          </p>
        </section>

        {/* Category grid */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl font-bold text-text-main mb-6">
            Udforsk vores indretningsguides
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {interiorCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/indretning/${cat.slug}`}
                className="group block overflow-hidden rounded-lg bg-white border border-card transition-all duration-200 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-card">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/15">
                    <span className="font-serif text-4xl font-bold text-primary/20 select-none">
                      {cat.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-primary-dark transition-colors group-hover:text-primary">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted line-clamp-2 font-sans">
                    {cat.description}
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

        {/* Trends section */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            De vigtigste indretningstrends i 2026
          </h2>
          <p>
            Badeværelsestrends i 2026 kredser om autenticitet, bæredygtighed og personlig stil. Her
            er de fire overordnede tendenser, vi ser dominere danske badeværelser i år:
          </p>

          <h3 className="font-serif text-xl font-bold text-text-main">
            1. Naturlige materialer og jordfarver
          </h3>
          <p>
            Træ, sten og rattan finder vej ind i badeværelset som aldrig før. Teak- og egetræsmøbler
            kombineret med fliser i jordtoner som terracotta, sand og oliven skaber et varmt og
            indbydende rum. Mikrocementsoverflader i naturlige toner er også fortsat meget populære.
          </p>

          <h3 className="font-serif text-xl font-bold text-text-main">
            2. Wellness og spa-følelse
          </h3>
          <p>
            Flere danske boligejere ønsker en spa-oplevelse derhjemme. Det betyder regnbrusere,
            dampfunktioner i brusekabinettet, dæmpet stemningsbelysning og duftdiffusere. Selv
            enkle tiltag som en bænk i brusenichen og pæne dispensere løfter den daglige oplevelse
            markant.
          </p>

          <h3 className="font-serif text-xl font-bold text-text-main">
            3. Gennemtænkt opbevaring
          </h3>
          <p>
            Synlig rod er fjende nummer ét i et moderne badeværelse. Indfældede nicher, skjulte
            skabe bag spejle og smarte skuffeinddelere sørger for, at alt har sin plads. Tendensen
            er, at opbevaringen skal være integreret og næsten usynlig — ingen løse hylder med
            shampooflasker i brusehjørnet.
          </p>

          <h3 className="font-serif text-xl font-bold text-text-main">
            4. Personlige statement-detaljer
          </h3>
          <p>
            Standardbadeværelset med hvide fliser og krom-armatur er fortid. I 2026 handler det om
            at tilføje personlighed: et unikt spejl, et stykke kunst, håndlavede fliser som
            accentvæg eller en uventet farve på et møbel. Det er detaljerne, der gør badeværelset
            til dit eget.
          </p>
        </section>

        {/* Practical tips */}
        <section className="prose max-w-none text-text-main font-sans mb-12">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Praktiske tips til badeværelsesindretning
          </h2>
          <p>
            Uanset stil og budget er der nogle universelle principper, der altid gælder, når du
            indretter badeværelset:
          </p>
          <ul>
            <li>
              <strong>Start med funktionen.</strong> Tegn en grundplan og placer de faste
              installationer (toilet, vask, bruser/badekar) først. Alt andet indrettes omkring dem.
            </li>
            <li>
              <strong>Tænk i zoner.</strong> Del badeværelset op i en vådzone (bruser/badekar), en
              vaskezone (håndvask/spejl) og en opbevaringszone. Det giver overblik og struktur.
            </li>
            <li>
              <strong>Investér i god belysning.</strong> Et enkelt loftlys er sjældent nok. Brug
              lagdelt belysning med loftlys, spejlbelysning og evt. stemningslys i nicher.
            </li>
            <li>
              <strong>Vælg kvalitet til de faste ting.</strong> Armatur, toilet og fliser sidder der
              i 15-20 år. Spar hellere på tilbehør og dekorationer, der let kan udskiftes.
            </li>
            <li>
              <strong>Husk ventilation.</strong> God ventilation er afgørende for at undgå fugt og
              skimmel. Sørg for mekanisk udsugning — især i indre badeværelser uden vindue.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <CTABox variant="section" />
      </div>
    </>
  );
}
