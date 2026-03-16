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

const element = elements.find((e) => e.slug === "gulvvarme")!;

export const metadata: Metadata = {
  title: element.metaTitle,
  description: element.metaDescription,
  alternates: { canonical: `${SITE_URL}/elementer/gulvvarme` },
};

export default function GulvvarmePage() {
  return (
    <>
      <ArticleSchema title={element.title} description={element.metaDescription} url="/elementer/gulvvarme" datePublished="2025-01-15" dateModified="2026-03-15" />

      <ArticleLayout
        breadcrumbs={[{ label: "Elementer", href: "/elementer" }, { label: element.name }]}
        title={element.title}
        intro={element.description}
        readingTime={10}
        tocItems={[
          { id: "typer", label: "Typer af gulvvarme" },
          { id: "pris", label: "Pris" },
          { id: "el-vs-vand", label: "El vs. vandbaseret" },
          { id: "overvejelser", label: "Hvad skal du overveje?" },
          { id: "faq", label: "FAQ" },
        ]}
        relatedArticles={[
          { title: "Ventilation", href: "/elementer/ventilation", description: "Krav og typer" },
          { title: "Fliser", href: "/materialer/fliser", description: "Den perfekte partner" },
          { title: "Klinker", href: "/materialer/klinker", description: "Optimal varmeleder" },
        ]}
      >
        {/* Element hero image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/elements/gulvvarme.png"
            alt="Gulvvarme til badeværelse — el-varmemåtte under flisegulv"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <section id="typer">
          <h2 className="font-serif text-2xl font-bold text-text-main">Typer af gulvvarme</h2>
          <p>
            Gulvvarme til badeværelset fås i flere varianter, der passer til forskellige
            byggesituationer og budgetter:
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
            El-gulvvarme med varmemåtte er det suverænt mest populære valg ved renovering af danske
            badeværelser. Varmemåtten ruller ud som et tæppe, og de tynde varmeelementer
            (kun 3-5 mm) lægges direkte i fliseklæberen under de nye fliser. Det kræver minimal
            ekstra opbygningshøjde og er hurtigt at installere.
          </p>
          <p>
            Varmekabel er det mere fleksible alternativ, da kablet slanges frit og dermed
            kan tilpasses ethvert rumformat — også uregelmæssige former omkring toiletter,
            møbler og rørgennemføringer. Kabel-systemet kræver lidt mere erfaring at lægge men
            giver bedre dækning i komplekse rum.
          </p>
        </section>

        <section id="pris" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Pris</h2>
          <PriceBar from={element.priceRange.from} to={element.priceRange.to} unit={element.priceRange.unit} label="Gulvvarme prisinterval" />
          <p>
            El-gulvvarme (varmemåtte) koster 400-600 kr/m² for materialer. Installation koster
            200-400 kr/m² ekstra. En programmerbar termostat koster 500-2.000 kr. For et
            standard badeværelse på 4-6 m² opvarmet areal lander den samlede investering
            typisk på 3.500-7.000 kr. inkl. termostat og installation.
          </p>
          <p>
            Driftsomkostningerne er beskedne: regn med 150-300 kr/måned i fyringssæsonen for
            et gennemsnitligt badeværelse. Med en wifi-termostat og programmeret opvarmning
            (morgen/aften) kan du reducere forbruget med 30-40%.
          </p>
        </section>

        <section id="el-vs-vand" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">El-gulvvarme vs. vandbaseret</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-card">
                  <th className="py-3 pr-4 text-left font-semibold"></th>
                  <th className="py-3 px-4 text-left font-semibold">El-gulvvarme</th>
                  <th className="py-3 pl-4 text-left font-semibold">Vandbaseret</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-card/60">
                  <td className="py-2 pr-4 font-semibold">Installation</td>
                  <td className="py-2 px-4 text-text-muted">400-600 kr/m²</td>
                  <td className="py-2 pl-4 text-text-muted">800-1.500 kr/m²</td>
                </tr>
                <tr className="border-b border-card/60">
                  <td className="py-2 pr-4 font-semibold">Opbygning</td>
                  <td className="py-2 px-4 text-text-muted">3-5 mm</td>
                  <td className="py-2 pl-4 text-text-muted">50-70 mm</td>
                </tr>
                <tr className="border-b border-card/60">
                  <td className="py-2 pr-4 font-semibold">Drift/år</td>
                  <td className="py-2 px-4 text-text-muted">2.000-4.500 kr</td>
                  <td className="py-2 pl-4 text-text-muted">1.000-2.500 kr</td>
                </tr>
                <tr className="border-b border-card/60">
                  <td className="py-2 pr-4 font-semibold">Bedst til</td>
                  <td className="py-2 px-4 text-text-muted">Renovering, enkeltrum</td>
                  <td className="py-2 pl-4 text-text-muted">Nybyggeri, hele huset</td>
                </tr>
                <tr className="border-b border-card/60">
                  <td className="py-2 pr-4 font-semibold">Reaktionstid</td>
                  <td className="py-2 px-4 text-text-muted">15-30 min</td>
                  <td className="py-2 pl-4 text-text-muted">1-3 timer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            Konklusion: Til badeværelser ved renovering er el-gulvvarme det bedste valg i langt
            de fleste tilfælde. Det er billigere at installere, kræver minimal opbygning, og
            den hurtige reaktionstid passer perfekt til badeværelsets brugsmønster. Vandbaseret
            gulvvarme er mest relevant i nybyggeri, hvor det integreres i hele husets varmesystem.
          </p>
        </section>

        <TipBox variant="tip" title="Wi-fi-termostat betaler sig selv hjem">
          <p>
            En programmerbar wi-fi-termostat (1.000-2.000 kr.) betaler sig selv hjem på 1-2 år
            i sparede driftsomkostninger. Du kan programmere gulvvarmen til at tænde 30 minutter
            før du står op, slukke når du tager på arbejde, og tænde igen til du kommer hjem.
            Mange modeller kan også styres via app, så du kan tænde på vej hjem.
          </p>
        </TipBox>

        <section id="overvejelser" className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Hvad skal du overveje?</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <strong className="font-serif">Opvarmet areal:</strong> Læg kun varmekabel/måtte
              i det areal, der ikke er dækket af toilet, møbler og badekar. Typisk 60-70% af
              badeværelsets gulvareal.
            </li>
            <li>
              <strong className="font-serif">Gulvtype:</strong> Fliser, klinker og natursten er
              de bedste varmeledere. Microcement og terrazzo fungerer også fint. Kontrollér altid
              gulvproducentens anvisninger.
            </li>
            <li>
              <strong className="font-serif">Termostat:</strong> Vælg en termostat med
              gulvføler (ikke kun rumføler) for præcis temperaturstyring. Programmerbar
              eller wi-fi-styret er mest energieffektivt.
            </li>
            <li>
              <strong className="font-serif">El-tilslutning:</strong> ALTID udført af autoriseret
              el-installatør. Forkert el-tilslutning kan medføre brand og ugyldig forsikring.
            </li>
            <li>
              <strong className="font-serif">Garanti:</strong> Vælg et mærke med 10-20 års
              garanti på varmekabel/måtte. Det er en installation, der skal holde lige så
              længe som gulvbelægningen.
            </li>
          </ul>
        </section>

        <TipBox variant="obs" title="El-tilslutning er lovpligtigt autoriseret">
          <p>
            Du må godt selv lægge varmekabel eller varmemåtte ud på gulvet — det kræver ingen
            autorisation. Men selve el-tilslutningen til termostat og el-tavle SKAL udføres af
            en autoriseret el-installatør. Uautoriseret el-arbejde er ulovligt, farligt og kan
            ugyldiggøre din boligforsikring ved skade.
          </p>
        </TipBox>

        <PullQuote
          quote="Gulvvarme i badeværelset er den opgradering, alle elsker, men ingen tror de har brug for — indtil de prøver det. Varme fliser under bare fødder en kold vintermorgen er ren luksus."
          author="Badeværelsesentreprenør"
        />

        <section className="mt-10">
          <h2 className="font-serif text-2xl font-bold text-text-main">Relaterede emner</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/elementer/ventilation" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Ventilation</Link>
            <Link href="/materialer/fliser" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Fliser</Link>
            <Link href="/materialer/klinker" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Klinker</Link>
            <Link href="/materialer/natursten" className="rounded-full bg-card px-4 py-2 text-sm font-sans text-text-main hover:bg-card/80 transition-colors">Natursten</Link>
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
