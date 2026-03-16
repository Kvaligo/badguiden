import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "goer-det-selv")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/goer-det-selv`,
  },
};

export default function GoerDetSelvPage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/goer-det-selv"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Gør-det-selv" },
        ]}
        title="Badeværelse Gør-Det-Selv — Hvad Kan Du Selv Lave?"
        intro="Du kan spare 15-25% på din badeværelse-renovering ved at gøre noget af arbejdet selv. Men der er strenge regler for hvad du må — og fejl kan koste dig dyrt. Her er den komplette guide til hvad du kan, hvad du bør og hvad du absolut ikke må."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "kan-selv", label: "Hvad du KAN gøre selv" },
          { id: "maa-ikke", label: "Hvad du IKKE MÅ gøre" },
          { id: "regler", label: "Danske regler" },
          { id: "vaerktoj", label: "Værktøjsliste" },
          { id: "besparelser", label: "Realistiske besparelser" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Vådrumssikring — Krav & Regler",
            href: "/guide/vaadrumssikring",
            description: "Lovkrav til vådrumssikring du skal kende.",
          },
          {
            title: "10 Fejl Du Skal Undgå",
            href: "/guide/fejl-at-undgaa",
            description: "De mest typiske og dyre fejl ved renovering.",
          },
          {
            title: "Renovering Trin-for-Trin",
            href: "/guide/renovering-trin-for-trin",
            description: "Den komplette procesguide for renoveringen.",
          },
        ]}
      >
        <img
          src="/images/content/goer-det-selv.png"
          alt="Gør-det-selv maling i badeværelse med rulle og malerværktøj"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Hvad du kan gøre selv */}
        <h2 id="kan-selv" className="scroll-mt-24">
          Hvad du KAN gøre selv
        </h2>
        <p>
          Der er en del opgaver i forbindelse med en badeværelse-renovering som
          du lovligt og sikkert kan udføre selv. Her er en komplet oversigt:
        </p>

        <h3>Nedrivning og forberedelse</h3>
        <ul>
          <li>
            <strong>Fjerne gamle fliser:</strong> Med mejsel og hammer eller
            boremaskine med mejselfunktion. Husk sikkerhedsbriller og
            støvmaske.
          </li>
          <li>
            <strong>Demontere inventar:</strong> Toilet, håndvask og
            badekar kan du selv demontere — husk bare at lukke for vandet
            først (stopventiler).
          </li>
          <li>
            <strong>Bortskaffe affald:</strong> Spar håndværkerens tid ved
            selv at køre til genbrugspladsen eller bestille en container.
          </li>
          <li>
            <strong>Rengøring undervejs:</strong> Hold byggestedet ryddeligt
            så håndværkerne kan arbejde effektivt.
          </li>
        </ul>

        <h3>Overfladebehandling</h3>
        <ul>
          <li>
            <strong>Maling af loft og vægge:</strong> Over flise-kanten kan du
            selv male med fugtbestandig maling. Brug altid vådrumsegnet
            maling.
          </li>
          <li>
            <strong>Lægge gulvvinyl:</strong> I tørre zoner (uden for vådzone)
            kan du selv lægge vinyl — men kun hvis vådrumssikringen er udført
            af en fagmand.
          </li>
        </ul>

        <h3>Montering og tilbehør</h3>
        <ul>
          <li>Ophængning af spejl, hylder og skabe</li>
          <li>Montering af håndklædeholder, knager og sæbedispenser</li>
          <li>Udskiftning af toiletsæde</li>
          <li>Ophængning af badeforhæng</li>
          <li>Montering af badeværelsesbord eller hylde (uden VVS-tilslutning)</li>
        </ul>

        <TipBox variant="tip" title="Den bedste sparestrategi">
          <p>
            Den mest effektive DIY-besparelse er nedrivning og
            bortskaffelse. Det kræver ingen specielle kompetencer, og du
            sparer typisk 10.000-20.000 kr. ved at gøre det selv. Aftal med
            håndværkeren at du klargør rummet inden de starter.
          </p>
        </TipBox>

        {/* Hvad du IKKE MÅ */}
        <h2 id="maa-ikke" className="scroll-mt-24">
          Hvad du IKKE MÅ gøre selv
        </h2>
        <p>
          Følgende opgaver kræver autoriserede fagfolk i Danmark. Udfører du
          dem selv, risikerer du bøder, forsikringsproblemer og personskade:
        </p>

        <h3>VVS-arbejde (kræver autoriseret VVS-installatør)</h3>
        <ul>
          <li>Tilslutning og flytning af vandrør</li>
          <li>Ændring af afløb og kloakføring</li>
          <li>Installation af toilet, håndvask og bruser (tilslutning)</li>
          <li>Montering af vandvarmere eller cirkulationspumpe</li>
          <li>Alle arbejder på fælles vandstigstrenge og faldstammer</li>
        </ul>

        <h3>El-arbejde (kræver autoriseret el-installatør)</h3>
        <ul>
          <li>Installation eller flytning af stikkontakter og afbrydere</li>
          <li>Montering af lys og spots i loft</li>
          <li>Installation af ventilator med el-tilslutning</li>
          <li>Installation af gulvvarme (el-tilslutning)</li>
          <li>Alle arbejder i sikringsskab</li>
        </ul>

        <h3>Vådrumssikring (kræver certificeret håndværker)</h3>
        <ul>
          <li>Påføring af membran på gulv og vægge i vådzone</li>
          <li>Montering af forstærkningsbånd og manchetter</li>
          <li>Kvalitetskontrol af den færdige membran</li>
        </ul>

        <TipBox variant="obs" title="Autorisationskrav er lovpligtige">
          <p>
            I Danmark er VVS- og el-arbejde underlagt strenge
            autorisationskrav. Udfører du arbejdet selv eller bruger en
            ikke-autoriseret håndværker, kan din forsikring afvise at dække
            skader. Ved boligsalg risikerer du et erstatningskrav fra køber.
          </p>
        </TipBox>

        <PullQuote
          quote="Vi ser desværre jævnligt badeværelser hvor ejeren selv har lavet VVS-arbejde. Det ender næsten altid med en dyrere reparation end det ville have kostet at gøre rigtigt fra starten."
          author="Autoriseret VVS-installatør"
        />

        {/* Danske regler */}
        <h2 id="regler" className="scroll-mt-24">
          Danske regler for DIY i badeværelset
        </h2>
        <p>
          De vigtigste lovgivninger der regulerer hvad du selv må lave i
          badeværelset:
        </p>
        <ul>
          <li>
            <strong>Autorisationsloven:</strong> VVS- og el-installationer
            skal udføres af virksomheder med autorisation fra
            Sikkerhedsstyrelsen. Overtrædelse kan medføre bøde.
          </li>
          <li>
            <strong>BR18 (Bygningsreglementet):</strong> Stiller krav til
            vådrumssikring, ventilation og konstruktionssikkerhed. Gælder for
            alt byggeri uanset hvem der udfører det.
          </li>
          <li>
            <strong>DS 484:</strong> Den danske standard for vådrum, der
            specificerer krav til materialer og udførelse.
          </li>
          <li>
            <strong>Stærkstrømsbekendtgørelsen:</strong> Regulerer el-arbejde
            og kræver autorisation for alt ud over udskiftning af pærer og
            simple stik.
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Dokumentér alt">
          <p>
            Uanset hvem der udfører arbejdet: tag billeder undervejs, gem
            kvitteringer for materialer og behold certifikater fra
            autoriserede håndværkere. Denne dokumentation er vigtig ved
            forsikringssager og boligsalg.
          </p>
        </TipBox>

        {/* Værktøjsliste */}
        <h2 id="vaerktoj" className="scroll-mt-24">
          Værktøjsliste til DIY-opgaver
        </h2>
        <p>
          Her er det basale værktøj du bør have til de opgaver du selv kan
          udføre:
        </p>

        <h3>Til nedrivning</h3>
        <ul>
          <li>Boremaskine med mejselfunktion (kan lejes)</li>
          <li>Mejsel og hammer</li>
          <li>Brækjern/koben</li>
          <li>Sikkerhedsbriller, støvmaske og handsker</li>
          <li>Byggesække og eventuelt affaldscontainer</li>
        </ul>

        <h3>Til maling og finish</h3>
        <ul>
          <li>Malerrulle (kortluvet til glatte overflader)</li>
          <li>Pensel til kanter og hjørner</li>
          <li>Malertape og afdækning</li>
          <li>Vådrumsegnet maling</li>
          <li>Sandpapir (korn 120-180)</li>
        </ul>

        <h3>Til montering</h3>
        <ul>
          <li>Boremaskine/skruemaskine</li>
          <li>Vaterpas</li>
          <li>Målebånd</li>
          <li>Rawlplugs egnet til vægtype (beton, gips, tegl)</li>
          <li>Skruer i rustfrit stål (til vådrum)</li>
        </ul>

        {/* Besparelser */}
        <h2 id="besparelser" className="scroll-mt-24">
          Realistiske besparelser ved gør-det-selv
        </h2>
        <p>
          Her er et realistisk overblik over hvad du kan spare ved at gøre
          dele af arbejdet selv:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-card rounded-lg overflow-hidden text-sm font-sans">
            <thead>
              <tr className="bg-card/60">
                <th className="text-left px-4 py-3 font-semibold text-text-main">Opgave</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Typisk besparelse</th>
                <th className="text-left px-4 py-3 font-semibold text-text-main">Sværhedsgrad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Nedrivning</td>
                <td className="px-4 py-3">8.000-15.000 kr.</td>
                <td className="px-4 py-3">Let-middel</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Bortskaffelse af affald</td>
                <td className="px-4 py-3">3.000-8.000 kr.</td>
                <td className="px-4 py-3">Let</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Maling af loft/vægge</td>
                <td className="px-4 py-3">3.000-6.000 kr.</td>
                <td className="px-4 py-3">Let</td>
              </tr>
              <tr className="border-t border-card bg-card/20">
                <td className="px-4 py-3">Montering af tilbehør</td>
                <td className="px-4 py-3">1.000-3.000 kr.</td>
                <td className="px-4 py-3">Let</td>
              </tr>
              <tr className="border-t border-card">
                <td className="px-4 py-3">Rengøring undervejs</td>
                <td className="px-4 py-3">2.000-5.000 kr.</td>
                <td className="px-4 py-3">Let</td>
              </tr>
              <tr className="border-t border-card bg-card/20 font-semibold">
                <td className="px-4 py-3">Samlet besparelse</td>
                <td className="px-4 py-3">17.000-37.000 kr.</td>
                <td className="px-4 py-3">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          For en gennemsnitlig renovering til 120.000-150.000 kr. svarer det
          til en besparelse på ca. 15-25%.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={guide.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
