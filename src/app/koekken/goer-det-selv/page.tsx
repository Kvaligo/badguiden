import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Renovering af Køkken Gør-Det-Selv — Hvad Kan Du Selv?",
  description:
    "Find ud af hvad du selv kan lave ved køkkenrenovering — og hvad der kræver fagfolk. Maling, greb, stænkplade, montering og mere. Spar 20.000-50.000 kr.",
  alternates: { canonical: `${SITE_URL}/koekken/goer-det-selv` },
};

const faqs = [
  {
    question: "Hvad kan jeg selv lave i køkkenet?",
    answer:
      "Du kan selv male fronter og vægge, udskifte greb og beslag, montere ny stænkplade, installere hylder, udskifte bordplade (med hjælp) og montere LED-belysning under skabe. Mange moderne køkkenelementer er designet til selvmontering.",
  },
  {
    question: "Hvad kræver autoriseret håndværker i køkkenet?",
    answer:
      "Alle el-installationer ud over simple stik og LED-strips kræver autoriseret elektriker. VVS-arbejde som ny vask og opvaskemaskine-tilslutning kræver autoriseret VVS'er. Gas-tilslutning til komfur kræver autoriseret gastekniker. Overtrædelse kan betyde bøde og mistet forsikringsdækning.",
  },
  {
    question: "Hvor meget kan jeg spare ved gør-det-selv?",
    answer:
      "Ved at klare montering, maling og enklere opgaver selv kan du spare 20.000-50.000 kr. på en gennemsnitlig køkkenrenovering. De største besparelser er på montering af køkkenet (15.000-35.000 kr.) og maling/overfladebehandling (5.000-15.000 kr.).",
  },
  {
    question: "Kan jeg selv male mine køkkenlåger?",
    answer:
      "Ja, det er et af de mest populære gør-det-selv-projekter. Brug en god primer, slibning mellem lag og en alkyd- eller polyuretanmaling. Sprøjtemaling giver det flotteste resultat. Budgetér med 2.000-5.000 kr. for maling og udstyr til et standard køkken.",
  },
  {
    question: "Hvilke værktøjer skal jeg bruge til køkkenrenovering?",
    answer:
      "Grundudstyr: boremaskine, vaterpas, målebånd, stiksav, skruemaskine, silicone-pistol og diverse skruer. Til maling: grundrens, sandpapir (120-240 korn), primer, maling, ruller og pensler. Til flise-stænkplade: fliseskærer, fliseklæber, fugemasse og gummispartel.",
  },
];

export default function KoekkenGoerDetSelvPage() {
  return (
    <>
      <ArticleSchema
        title="Renovering af Køkken Gør-Det-Selv — Hvad Kan Du Selv?"
        description="Find ud af hvad du selv kan lave ved køkkenrenovering og hvad der kræver professionelle."
        url="/koekken/goer-det-selv"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Køkken", href: "/koekken" },
          { label: "Gør-det-selv" },
        ]}
        title="Renovering af Køkken Gør-Det-Selv — Hvad Kan Du Selv?"
        intro="En komplet køkkenrenovering kan nemt koste 100.000-200.000 kr. — men en stor del af de penge går til arbejdsløn. Ved at tage noget af arbejdet selv kan du spare 20.000-50.000 kr. eller mere. Men det er afgørende at vide, hvad du kan gøre selv, og hvad der kræver autoriserede fagfolk. Her gennemgår vi mulighederne trin for trin."
        readingTime={12}
        tocItems={[
          { id: "kan-selv", label: "Hvad kan du selv?" },
          { id: "maling", label: "Male køkkenlåger" },
          { id: "greb", label: "Udskifte greb" },
          { id: "staenkplade", label: "Ny stænkplade" },
          { id: "montering", label: "Montere køkkenet" },
          { id: "professionel", label: "Hvad kræver fagfolk?" },
          { id: "vaerktoj", label: "Værktøj du skal bruge" },
          { id: "besparelse", label: "Besparelsespotentiale" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Køkkenpriser",
            href: "/koekken/pris",
            description: "Komplet prisoversigt — se hvad du kan spare.",
          },
          {
            title: "Køkken Materialer",
            href: "/koekken/materialer",
            description: "Bordplader, fronter og hvad der er nemmest at arbejde med.",
          },
        ]}
      >
        <img
          src="/images/content/koekken-diy.png"
          alt="Gør-det-selv maling af køkkenlåger med pensel og rulle"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Hvad kan du selv? */}
        <h2 id="kan-selv" className="font-serif text-2xl font-bold text-text-main">
          Hvad kan du selv lave ved en køkkenrenovering?
        </h2>
        <p>
          Der er overraskende mange opgaver i en køkkenrenovering, som en habil gør-det-selv-
          person kan klare. Her er et overblik over de mest populære DIY-projekter rangeret
          efter sværhedsgrad:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Nem (alle kan klare det)</h3>
        <ul>
          <li>Udskifte greb og beslag på eksisterende skabe</li>
          <li>Male vægge og lofter</li>
          <li>Montere åbne hylder</li>
          <li>Montere LED-belysning under overskabe (batteridrevet eller stik-baseret)</li>
          <li>Installere organisatorer og skuffeinddelere</li>
          <li>Afmontere og bortskaffe det gamle køkken</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Middel (kræver noget erfaring)</h3>
        <ul>
          <li>Male eller lakere køkkenlåger</li>
          <li>Montere stænkplade (fliser eller plader)</li>
          <li>Montere nye lister og afslutninger</li>
          <li>Samle og montere nye køkkenelementer (IKEA-stil)</li>
          <li>Tilpasse og montere laminatbordplade</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Svær (kræver god erfaring og præcision)</h3>
        <ul>
          <li>Montere komplette køkkenelementer med præcis tilpasning</li>
          <li>Udskære til integrerede hvidevarer (vask, kogeplade)</li>
          <li>Lægge nyt gulv under og omkring køkkenet</li>
          <li>Fugning og finish-arbejde i professionel kvalitet</li>
        </ul>

        {/* Male køkkenlåger */}
        <h2 id="maling" className="font-serif text-2xl font-bold text-text-main">
          Male køkkenlåger — trin for trin
        </h2>
        <p>
          At male køkkenlågerne er et af de mest effektive gør-det-selv-projekter. For
          2.000-5.000 kr. i materialer kan du give hele køkkenet et nyt look. Processen kræver
          tålmodighed og omhyggelighed, men resultatet kan være forbløffende godt.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Du skal bruge</h3>
        <ul>
          <li>Grundrens / affedtningsmiddel (f.eks. Klar Affedtning)</li>
          <li>Sandpapir korn 120 og 240</li>
          <li>Primer beregnet til laminat/lakerede overflader</li>
          <li>Alkydmaling eller polyuretanmaling i ønsket farve (halvblank eller mat)</li>
          <li>Skumruller (tætskum giver det glatteste resultat) og pensler</li>
          <li>Malertape, afdækning og tålmodighed</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Fremgangsmåde</h3>
        <ol>
          <li>
            <strong>Afmontering.</strong> Tag alle låger og skuffefronter af. Fjern greb og beslag.
            Mærk hvert stykke med et nummer, så du ved, hvor det skal tilbage.
          </li>
          <li>
            <strong>Rengøring.</strong> Vask alle flader grundigt med affedtningsmiddel. Køkkenlåger
            er fulde af fedt og snavs, der forhindrer malingen i at hæfte. Skyl efter med rent
            vand og lad tørre helt.
          </li>
          <li>
            <strong>Slibning.</strong> Slib alle flader let med korn 120 for at give primeren noget
            at hæfte på. Tør støvet af med en fugtig klud.
          </li>
          <li>
            <strong>Primer.</strong> Påfør et jævnt lag primer med en skumrulle. Lad tørre i
            mindst den tid, producenten angiver (typisk 4-8 timer). Slib let med korn 240 og
            tør støvet af.
          </li>
          <li>
            <strong>Maling — 1. lag.</strong> Påfør et tyndt, jævnt lag maling med en skumrulle.
            Arbejd i én retning for at undgå rullemærker. Lad tørre helt (typisk 12-24 timer).
          </li>
          <li>
            <strong>Slibning mellem lag.</strong> Slib let med korn 240. Det føles modstridende
            at slibe maling, du netop har påført, men det giver en markant bedre vedhæftning
            og finish.
          </li>
          <li>
            <strong>Maling — 2. lag.</strong> Påfør endnu et tyndt lag. To tynde lag giver et
            langt bedre resultat end ét tykt lag. Lad tørre mindst 24 timer inden montering.
          </li>
          <li>
            <strong>Montering.</strong> Montér nye greb (eller genmonter de gamle) og sæt
            lågerne på plads. Justér hængslerne, så lågerne flugter pænt.
          </li>
        </ol>

        <TipBox variant="tip" title="Professionelt resultat med sprøjtemaling">
          <p>
            Vil du have et finish, der ligner fabrikslakerede fronter? Lej en HVLP-sprøjtepistol
            (ca. 500 kr. pr. dag) og sprøjt i stedet for at rulle. Det kræver lidt øvelse og
            god afdækning, men giver en langt glattere overflade uden rullemærker. Sprøjt
            udendørs eller i et velventileret rum med støvfri omgivelser.
          </p>
        </TipBox>

        {/* Greb */}
        <h2 id="greb" className="font-serif text-2xl font-bold text-text-main">
          Udskifte greb og beslag
        </h2>
        <p>
          Nye greb er den hurtigste og billigste måde at ændre køkkenets udtryk på. Det tager
          en eftermiddag og koster 500-3.000 kr. afhængigt af antal og kvalitet. Effekten er
          overraskende stor — nye greb kan forvandle et kedeligt køkken til et stilrent rum.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Vælg de rigtige greb</h3>
        <p>
          Mål først boringsafstanden (CC-mål) på dine eksisterende greb — det er afstanden
          mellem skruehullerne. Standard CC-mål er 96 mm, 128 mm og 160 mm. Hvis du vælger
          greb med samme CC-mål, behøver du ikke bore nye huller. Vælger du nye mål, skal de
          gamle huller fyldes og slibes, inden du borer nyt.
        </p>
        <p>
          Populære grebstyper i 2026: lange, tynde stanggreb i sort eller messing, runde knapper
          i messing (klassisk stil), og integrerede grebslister (grebsnotch) for et minimalistisk
          udtryk. Husk at matche grebenes finish med armaturet og emhætten for et sammenhængende
          look.
        </p>

        {/* Stænkplade */}
        <h2 id="staenkplade" className="font-serif text-2xl font-bold text-text-main">
          Ny stænkplade — gør-det-selv
        </h2>
        <p>
          En ny stænkplade kan forny køkkenets look markant. Det er et overkommeligt
          gør-det-selv-projekt, der typisk tager en weekend at fuldføre.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fliser</h3>
        <p>
          Fliser er det klassiske valg og et projekt de fleste kan klare. Du har brug for
          fliser, fliseklæber, fugemasse, en fliseskærer (kan lejes) og en gummispartel.
          Metrofliser (10x20 cm) i halvforbandt er det nemmeste mønster at lægge og giver et
          tidløst resultat. Regn med 200-800 kr. pr. m² for fliser plus 1-2 dages arbejde.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Selvklæbende plader</h3>
        <p>
          Selvklæbende stænkplader i vinyl, aluminium eller glas er den nemmeste løsning. De
          klistres direkte på den eksisterende væg (eller oven på gamle fliser) og kræver
          ingen specialværktøj. Kvaliteten varierer — vælg plader beregnet til køkkenmiljø,
          der tåler varme og fugt. Pris: 300-1.000 kr. pr. m².
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Glasstænkplade</h3>
        <p>
          Hærdet glas i en ensartet farve giver et moderne, let-rengøreligt resultat. Glasset
          kan bestilles tilskåret efter mål hos en glarmester (typisk 1.500-3.000 kr. pr. m²
          inkl. montering). Selvmontering af glas er mulig med specialbeslag, men kræver
          præcision.
        </p>

        {/* Montering */}
        <h2 id="montering" className="font-serif text-2xl font-bold text-text-main">
          Montere et nyt køkken selv
        </h2>
        <p>
          Mange standard-køkkener — især fra IKEA, Bauhaus og lignende — er designet til
          selvmontering. Med god planlægning og basalt værktøj kan du spare 15.000-35.000 kr.
          i monteringsomkostninger. Men vær ærlig om dine evner: et skævt monteret køkken er
          værre end den besparelse, du opnår.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Tips til selvmontering</h3>
        <ul>
          <li>
            <strong>Start med en plan.</strong> Tegn køkkenet op i detaljer inden du starter.
            Markér alle skabe, hvidevarer og tilslutninger på væggen med blyant og vaterpas.
          </li>
          <li>
            <strong>Montér overskabe først.</strong> Det er nemmere at montere overskabe, når
            underskabene ikke er i vejen. Brug en ovnskabsstøtte eller få en ven til at holde.
          </li>
          <li>
            <strong>Brug vaterpas konstant.</strong> Selv 2 mm skævhed på det første skab
            forplanter sig gennem hele rækken. Tjek vater for hvert eneste skab.
          </li>
          <li>
            <strong>Saml skabene på gulvet.</strong> Saml hvert skab på gulvet, inden du hænger
            det op. Det er langt nemmere at justere beslag og hylder, når skabet ligger fladt.
          </li>
          <li>
            <strong>Justér til sidst.</strong> Når alle skabe er monteret, justeres låger og
            skuffer med de indbyggede 3-vejs-hængsler. Tag dig god tid — det er justeringen,
            der giver det professionelle finish.
          </li>
        </ul>

        {/* Hvad kræver fagfolk */}
        <h2 id="professionel" className="font-serif text-2xl font-bold text-text-main">
          Hvad kræver autoriserede fagfolk?
        </h2>
        <p>
          Nogle opgaver i køkkenet er lovpligtige at få udført af autoriserede håndværkere.
          Overtrædelse kan betyde bøder, mistet forsikringsdækning og i værste fald fare for
          liv. Her er de opgaver, du aldrig må gøre selv:
        </p>

        <TipBox variant="obs" title="Gas, el og VVS kræver altid fagfolk">
          <p>
            <strong>El-installationer:</strong> Alle faste el-installationer — nye stikkontakter,
            tilslutning af emhætte, ovn og induktion, nyt lys med fast ledning — kræver
            autoriseret elektriker. Undtagelser er stik-baseret LED-belysning og udskiftning af
            pærer/armaturer.
          </p>
          <p>
            <strong>VVS-arbejde:</strong> Tilslutning af ny vask, opvaskemaskine og vandhane
            kræver autoriseret VVS&apos;er. Flytning af vandrør og afløb ligeså. Uautoriseret
            VVS-arbejde kan forårsage vandskader og mistet forsikring.
          </p>
          <p>
            <strong>Gas:</strong> Alt arbejde med gasinstallationer — tilslutning af gaskomfur,
            gasledninger, gastilslutninger — kræver en autoriseret gastekniker. Gas er
            livsfarligt ved forkert håndtering. Ingen undtagelser.
          </p>
        </TipBox>

        <h3 className="font-serif text-xl font-bold text-text-main">Konsekvenser ved uautoriseret arbejde</h3>
        <p>
          Uautoriseret el-, VVS- eller gasarbejde kan have alvorlige konsekvenser:
        </p>
        <ul>
          <li>
            <strong>Forsikring:</strong> Skader forårsaget af uautoriseret arbejde dækkes typisk
            ikke af husforsikringen. En vandskade kan koste 100.000-500.000 kr.
          </li>
          <li>
            <strong>Bøder:</strong> Kommunen eller Sikkerhedsstyrelsen kan udstede bøder for
            uautoriseret el-arbejde.
          </li>
          <li>
            <strong>Boligsalg:</strong> Ved salg kan køber kræve dokumentation for autoriseret
            el- og VVS-arbejde. Manglende dokumentation kan føre til prisnedsættelse eller krav
            om udbedring.
          </li>
          <li>
            <strong>Sikkerhed:</strong> Forkert el-installation kan forårsage brand. Forkert
            gas-installation kan forårsage eksplosion. Det er ikke en risiko, der er værd at tage.
          </li>
        </ul>

        {/* Værktøj */}
        <h2 id="vaerktoj" className="font-serif text-2xl font-bold text-text-main">
          Værktøj til køkkenrenovering
        </h2>
        <p>
          Her er en komplet værktøjsliste til de mest almindelige gør-det-selv-opgaver i
          køkkenet:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Grundværktøj (skal haves)</h3>
        <ul>
          <li>Boremaskine med borsæt til træ og mur</li>
          <li>Skruemaskine (akku) med bits</li>
          <li>Vaterpas (60 cm og 120 cm)</li>
          <li>Målebånd og blyant</li>
          <li>Stiksav eller cirkelsav</li>
          <li>Silicone-pistol</li>
          <li>Skruetrækkersæt, unbrakonøgler og tang</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Til maling</h3>
        <ul>
          <li>Sandpapir i korn 120 og 240 (evt. slibeklods)</li>
          <li>Affedtningsmiddel</li>
          <li>Primer til glatte overflader</li>
          <li>Maling (alkyd eller polyuretan — halvblank anbefales)</li>
          <li>Skumruller, pensler, malertape og afdækning</li>
          <li>Evt. HVLP-sprøjtepistol til leje</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Til flisestænkplade</h3>
        <ul>
          <li>Fliseskærer (kan lejes for 200-400 kr./dag)</li>
          <li>Fliseklæber og tandspatel</li>
          <li>Fugemasse og gummispartel</li>
          <li>Krydser (fugespacing)</li>
          <li>Svamp til afrensning</li>
        </ul>

        {/* Besparelse */}
        <h2 id="besparelse" className="font-serif text-2xl font-bold text-text-main">
          Besparelsespotentiale — hvad kan du spare?
        </h2>
        <p>
          Her er et realistisk overblik over, hvad du kan spare ved at gøre forskellige opgaver
          selv:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm font-sans">
            <thead>
              <tr className="border-b border-card">
                <th className="py-3 pr-4 text-left font-semibold text-text-main">Opgave</th>
                <th className="py-3 pr-4 text-left font-semibold text-text-main">Professionel pris</th>
                <th className="py-3 pr-4 text-left font-semibold text-text-main">DIY materialer</th>
                <th className="py-3 text-left font-semibold text-text-main">Besparelse</th>
              </tr>
            </thead>
            <tbody className="text-text-muted">
              <tr className="border-b border-card/50">
                <td className="py-3 pr-4">Montering af køkken</td>
                <td className="py-3 pr-4">15.000-35.000 kr.</td>
                <td className="py-3 pr-4">0 kr.</td>
                <td className="py-3 font-semibold text-primary">15.000-35.000 kr.</td>
              </tr>
              <tr className="border-b border-card/50">
                <td className="py-3 pr-4">Maling af fronter</td>
                <td className="py-3 pr-4">8.000-15.000 kr.</td>
                <td className="py-3 pr-4">2.000-5.000 kr.</td>
                <td className="py-3 font-semibold text-primary">6.000-10.000 kr.</td>
              </tr>
              <tr className="border-b border-card/50">
                <td className="py-3 pr-4">Nedrivning</td>
                <td className="py-3 pr-4">3.000-8.000 kr.</td>
                <td className="py-3 pr-4">0-500 kr.</td>
                <td className="py-3 font-semibold text-primary">2.500-7.500 kr.</td>
              </tr>
              <tr className="border-b border-card/50">
                <td className="py-3 pr-4">Nye greb</td>
                <td className="py-3 pr-4">2.000-5.000 kr.</td>
                <td className="py-3 pr-4">500-3.000 kr.</td>
                <td className="py-3 font-semibold text-primary">1.500-2.000 kr.</td>
              </tr>
              <tr className="border-b border-card/50">
                <td className="py-3 pr-4">Flisestænkplade</td>
                <td className="py-3 pr-4">5.000-12.000 kr.</td>
                <td className="py-3 pr-4">1.000-4.000 kr.</td>
                <td className="py-3 font-semibold text-primary">4.000-8.000 kr.</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold text-text-main">Total potentiale</td>
                <td className="py-3 pr-4">33.000-75.000 kr.</td>
                <td className="py-3 pr-4">3.500-12.500 kr.</td>
                <td className="py-3 font-bold text-primary">~20.000-50.000 kr.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Husk, at besparelsen forudsætter et resultat af rimelig kvalitet. Et dårligt udført
          gør-det-selv-projekt kan ende med at koste mere, hvis det skal rettes op af en
          professionel efterfølgende. Vær ærlig om dine evner og start med de nemmere projekter.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om køkken gør-det-selv
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
