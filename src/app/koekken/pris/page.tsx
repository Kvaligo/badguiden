import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PriceBar } from "@/components/PriceBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvad Koster et Nyt Køkken? Komplet Prisoversigt",
  description:
    "Se hvad et nyt køkken koster i 2026. Budget (50-100k), standard (100-200k) og luksus (200-500k+). Inkl. materialer, hvidevarer og montering.",
  alternates: { canonical: `${SITE_URL}/koekken/pris` },
};

const faqs = [
  {
    question: "Hvad koster et nyt køkken i gennemsnit?",
    answer:
      "Et nyt køkken koster i gennemsnit 100.000-200.000 kr. inkl. skabe, bordplade, hårde hvidevarer og montering. Prisen afhænger af køkkenets størrelse, materialevalg og om der skal ændres på VVS og el. I storbyer kan prisen være 10-20% højere end i landdistrikter.",
  },
  {
    question: "Hvad er det billigste materiale til et nyt køkken?",
    answer:
      "Laminatfronter og laminatbordplade er det billigste valg, med køkkener fra 25.000-50.000 kr. for selve elementerne. Foliefronter er næstbilligst. IKEA og andre byggemarkeder tilbyder komplette budget-køkkener fra ca. 15.000-30.000 kr. ekskl. hårde hvidevarer og montering.",
  },
  {
    question: "Hvor meget koster montering af et nyt køkken?",
    answer:
      "Professionel montering af et standardkøkken koster typisk 15.000-35.000 kr. afhængigt af køkkenets størrelse og kompleksitet. Dertil kommer evt. VVS-arbejde (5.000-15.000 kr.) og el-arbejde (3.000-10.000 kr.) for tilslutning af opvaskemaskine, emhætte og ny belysning.",
  },
  {
    question: "Kan jeg spare penge ved selv at montere køkkenet?",
    answer:
      "Du kan spare 15.000-35.000 kr. ved selv at montere skabe og skuffer — mange moderne køkkener er designet til selvmontering. Men VVS og el-tilslutning skal udføres af autoriserede fagfolk. Gas-tilslutning kræver altid en autoriseret gastekniker.",
  },
  {
    question: "Hvornår er det billigst at købe nyt køkken?",
    answer:
      "De største rabatter finder du typisk i januar (nytårsudsalg), efter sommerferien (august-september) og omkring Black Friday. Mange køkkenforhandlere tilbyder 20-40% rabat i disse perioder. Bestil i god tid, da leveringstiden typisk er 4-8 uger.",
  },
];

export default function KoekkenPrisPage() {
  return (
    <>
      <ArticleSchema
        title="Hvad Koster et Nyt Køkken? Komplet Prisoversigt"
        description="Se hvad et nyt køkken koster i 2026. Budget, standard og luksus prisklasser med alle detaljer."
        url="/koekken/pris"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Køkken", href: "/koekken" },
          { label: "Pris" },
        ]}
        title="Hvad Koster et Nyt Køkken? Komplet Prisoversigt"
        intro="Et nyt køkken er en af de største enkeltinvesteringer i boligen — og priserne varierer enormt. Fra et budget-køkken til under 100.000 kr. til et skræddersyet luksuskøkken til over en halv million. Her giver vi dig det fulde overblik over, hvad du kan forvente at betale i 2026, og hvor pengene går hen."
        readingTime={12}
        tocItems={[
          { id: "prisklasser", label: "De tre prisklasser" },
          { id: "budget", label: "Budget-køkken" },
          { id: "standard", label: "Standard-køkken" },
          { id: "luksus", label: "Luksus-køkken" },
          { id: "faktorer", label: "Hvad påvirker prisen?" },
          { id: "haandvaerker", label: "Håndværkeromkostninger" },
          { id: "spar", label: "Sådan sparer du" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Køkken Materialer",
            href: "/koekken/materialer",
            description: "Bordplader, fronter og prissammenligninger.",
          },
          {
            title: "Køkken Gør-Det-Selv",
            href: "/koekken/goer-det-selv",
            description: "Spar penge ved at lave noget af arbejdet selv.",
          },
        ]}
      >
        <img
          src="/images/content/koekken-renovering.png"
          alt="Nyt køkken under renovering med synlige elementer og bordplade"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Prisklasser */}
        <h2 id="prisklasser" className="font-serif text-2xl font-bold text-text-main">
          De tre prisklasser for et nyt køkken
        </h2>
        <p>
          For at give et overskueligt overblik deler vi køkkenpriser op i tre kategorier: budget,
          standard og luksus. Priserne inkluderer køkkenelementer, bordplade, standard hårde
          hvidevarer og professionel montering. VVS og el kommer oveni.
        </p>

        <PriceBar from={50000} to={100000} unit="kr." label="Budget-køkken" />
        <PriceBar from={100000} to={200000} unit="kr." label="Standard-køkken" />
        <PriceBar from={200000} to={500000} unit="kr." label="Luksus-køkken" />

        {/* Budget */}
        <h2 id="budget" className="font-serif text-2xl font-bold text-text-main">
          Budget-køkken: 50.000 – 100.000 kr.
        </h2>
        <p>
          Et budget-køkken behøver ikke betyde dårlig kvalitet — det handler om at prioritere
          klogt. I denne prisklasse finder du typisk køkkener fra IKEA, Bauhaus, HTH Basis-serien
          og lignende, kombineret med standard hårde hvidevarer fra mærker som Bosch, Siemens
          eller Gorenje.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hvad får du?</h3>
        <ul>
          <li>
            <strong>Fronter:</strong> Laminat eller folie i hvid, grå eller træ-look. Funktionelle
            men med begrænset farveudvalg.
          </li>
          <li>
            <strong>Bordplade:</strong> Laminat (1.000-3.000 kr. pr. løbende meter). Holdbart og
            nemt at rengøre, men tåler ikke varme gryder direkte.
          </li>
          <li>
            <strong>Skabe:</strong> Standarddybde (60 cm), solide men enkle beslag. Typisk 8-12
            over- og underskabe.
          </li>
          <li>
            <strong>Hvidevarer:</strong> Standard induktionskomfur, A-mærket køleskab, integreret
            opvaskemaskine. Funktionelt men uden premium-features.
          </li>
          <li>
            <strong>Montering:</strong> Selvmontering er mulig (spar 15.000-25.000 kr.) eller
            professionel montering.
          </li>
        </ul>
        <p>
          Et budget-køkken er det rigtige valg, hvis du renoverer en udlejningsbolig, har et stramt
          budget eller planlægger at sælge inden for få år. Levetiden er typisk 10-15 år med normal
          brug.
        </p>

        {/* Standard */}
        <h2 id="standard" className="font-serif text-2xl font-bold text-text-main">
          Standard-køkken: 100.000 – 200.000 kr.
        </h2>
        <p>
          Standardklassen er der, hvor de fleste danske familier lander. Her får du bedre
          materialer, flere valgmuligheder og professionel montering som standard. Det er den
          optimale balance mellem pris og kvalitet for de fleste hjem.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hvad får du?</h3>
        <ul>
          <li>
            <strong>Fronter:</strong> Lakeret MDF, massiv laminat eller vinylfolierede fronter i
            et bredt farve- og stiludvalg. Softclose-beslag på alle låger og skuffer.
          </li>
          <li>
            <strong>Bordplade:</strong> Kompositsten (Silestone, Corian) eller massivt træ
            (3.000-6.000 kr. pr. løbende meter). Markant bedre holdbarhed og æstetik end laminat.
          </li>
          <li>
            <strong>Skabe:</strong> Dybere skuffer, fuldudtræk, justerbare hylder og
            skuffeinddeling. Flere specialskabe som hjørnekarussel og affaldssystem.
          </li>
          <li>
            <strong>Hvidevarer:</strong> Induktionskomfur med flexzone, stort køleskab med
            frysedel, integreret opvaskemaskine og emhætte. Gode mærker som Siemens, Bosch eller
            Miele basis.
          </li>
          <li>
            <strong>Montering:</strong> Professionel montering inkluderet. Håndværkeren sørger
            for tilpasning, fuger og finish.
          </li>
        </ul>
        <p>
          Et standard-køkken holder typisk 15-20 år og tilfører boligen markant værdi. Det er det
          rigtige valg for familier, der vil have et køkken med god kvalitet og personlig stil
          uden at sprænge budgettet.
        </p>

        {/* Luksus */}
        <h2 id="luksus" className="font-serif text-2xl font-bold text-text-main">
          Luksus-køkken: 200.000 – 500.000+ kr.
        </h2>
        <p>
          I luksusklassen handler det om skræddersyede løsninger, premium-materialer og
          håndværk i topklasse. Disse køkkener designes typisk af en køkkenarkitekt og
          produceres af specialister som Multiform, Bulthaup eller danske snedkermestre.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hvad får du?</h3>
        <ul>
          <li>
            <strong>Fronter:</strong> Massivt træ (eg, valnød, ask), håndmalet MDF eller
            specialfinish som linoleum, finer eller metal. Skræddersyet til rummets mål.
          </li>
          <li>
            <strong>Bordplade:</strong> Granit, marmor, Dekton eller massiv eg i specialmål.
            Priser fra 5.000 til 15.000 kr. pr. løbende meter.
          </li>
          <li>
            <strong>Skabe:</strong> Specialfremstillede efter mål med integrerede greb,
            push-to-open-mekanisme og premium-beslag (Blum, Grass). Specialløsninger som
            udtræksbar krydderiflade, integreret ladestation og skjulte stikkontakter.
          </li>
          <li>
            <strong>Hvidevarer:</strong> Premium-mærker som Miele, Gaggenau eller V-ZUG.
            Dampovn, vakuumskuffe, vintemperering og induktion med integreret emhætte.
          </li>
          <li>
            <strong>Design:</strong> Professionel køkkenarkitekt eller indretningsdesigner
            inddraget fra start. 3D-visualisering og materialeprøver inden produktion.
          </li>
        </ul>
        <p>
          Et luksus-køkken er en livstidsinvestering, der holder 25-30+ år med korrekt
          vedligeholdelse. Det er det rigtige valg, hvis du bygger dit drømmehjem, er passioneret
          omkring madlavning, eller ønsker et unikt køkken, der reflekterer din personlige stil.
        </p>

        {/* Hvad påvirker prisen */}
        <h2 id="faktorer" className="font-serif text-2xl font-bold text-text-main">
          Hvad påvirker prisen på et nyt køkken?
        </h2>
        <p>
          Prisen på et nyt køkken afhænger af mange faktorer. Her er de vigtigste prisdrivere,
          så du kan forstå, hvor pengene går:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Skabe og fronter (30-40%)</h3>
        <p>
          Selve køkkenelementerne udgør den største enkeltpost. Prisen afhænger af antal skabe,
          frontmateriale (folie, laminat, lak, massivt træ), beslagstype (standard vs. softclose
          fuldudtræk) og eventuelle specialskabe (hjørnekarussel, udtræksaffaldssystem). Et
          standardkøkken med 10-15 elementer koster 30.000-150.000 kr. alene for skabene.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Bordplade (10-20%)</h3>
        <p>
          Bordpladen varierer mest i pris. Laminat koster fra 1.000 kr. pr. løbende meter, mens
          marmor kan koste over 10.000 kr. For et standardkøkken med 3-4 løbende meter bordplade
          spænder prisen fra 3.000 til 40.000 kr.
        </p>
        <PriceBar from={3000} to={40000} unit="kr." label="Bordplade (3-4 løbende meter)" />

        <h3 className="font-serif text-xl font-bold text-text-main">Hårde hvidevarer (15-25%)</h3>
        <p>
          Komfur/ovn, køleskab, opvaskemaskine og emhætte udgør en væsentlig del af budgettet.
          Et basissæt koster 15.000-30.000 kr., mens premium-hvidevarer kan koste 50.000-100.000+
          kr. Vær opmærksom på energiklasse — et A-mærket køleskab sparer 500-1.000 kr. om året
          i strøm sammenlignet med lavere klasser.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Montering og håndværker (20-30%)</h3>
        <p>
          Professionel montering, VVS, el og eventuel nedrivning af det gamle køkken udgør typisk
          20-30% af den samlede pris. Denne post er svær at reducere markant, da VVS og el
          kræver autoriserede fagfolk.
        </p>

        {/* Håndværkeromkostninger */}
        <h2 id="haandvaerker" className="font-serif text-2xl font-bold text-text-main">
          Håndværkeromkostninger i detaljer
        </h2>
        <p>
          Ud over selve køkkenet skal du budgettere med håndværkerarbejde. Her er de typiske
          poster:
        </p>
        <ul>
          <li>
            <strong>Montering af køkkenelementer:</strong> 15.000-35.000 kr. for et standardkøkken.
            Inkluderer opsætning af skabe, montering af bordplade, justering og fuger.
          </li>
          <li>
            <strong>VVS-arbejde:</strong> 5.000-15.000 kr. Tilslutning af vask og opvaskemaskine,
            evt. flytning af vandrør. Kræver autoriseret VVS&apos;er.
          </li>
          <li>
            <strong>El-arbejde:</strong> 3.000-10.000 kr. Nye stikkontakter, tilslutning af
            emhætte, undervasks-belysning og evt. nyt gruppetavle-punkt. Kræver autoriseret
            elektriker.
          </li>
          <li>
            <strong>Nedrivning af gammelt køkken:</strong> 3.000-8.000 kr. inkl. bortskaffelse.
            Kan klares selv for at spare.
          </li>
          <li>
            <strong>Gulv og vægge:</strong> 5.000-20.000 kr. hvis der skal lægges nyt gulv eller
            spartles og males. Afhænger af tilstanden.
          </li>
        </ul>

        <PriceBar from={30000} to={80000} unit="kr." label="Samlede håndværkeromkostninger" />

        {/* Spar penge */}
        <h2 id="spar" className="font-serif text-2xl font-bold text-text-main">
          Sådan sparer du penge på et nyt køkken
        </h2>
        <p>
          Der er flere måder at holde prisen nede på uden at gå på kompromis med kvaliteten:
        </p>
        <ol>
          <li>
            <strong>Montér selv.</strong> Mange standard-køkkener er designet til selvmontering.
            Du kan spare 15.000-35.000 kr. Her er IKEA-køkkener særligt velegnede.
          </li>
          <li>
            <strong>Behold layoutet.</strong> Hvis du kan genbruge den eksisterende placering af
            vask, komfur og køleskab, sparer du dyrt VVS- og el-arbejde.
          </li>
          <li>
            <strong>Køb i kampagneperioder.</strong> Nytårsudsalg, sensommer og Black Friday giver
            typisk 20-40% rabat hos de store køkkenleverandører.
          </li>
          <li>
            <strong>Vælg laminat-bordplade.</strong> Moderne laminat ser overbevisende ud og
            koster en brøkdel af sten. Besparelsen kan være 10.000-30.000 kr. på bordpladen
            alene.
          </li>
          <li>
            <strong>Genbrug hvidevarer.</strong> Hvis dine eksisterende hvidevarer stadig fungerer
            godt, kan du spare 15.000-50.000 kr. ved at genbruge dem.
          </li>
          <li>
            <strong>Riv selv ned.</strong> Nedrivning af det gamle køkken er hårdt arbejde men
            kræver ikke fagkundskab. Spar 3.000-8.000 kr. ved at gøre det selv.
          </li>
        </ol>

        <TipBox variant="tip" title="Spar uden at gå på kompromis">
          <p>
            Den klogeste besparelse er ofte at vælge et lidt billigere frontmateriale (f.eks.
            laminat i stedet for lak) og til gengæld investere i gode beslag (softclose,
            fuldudtræk). Du rører ved beslagene mange gange dagligt — billige beslag mærkes med
            det samme, mens forskellen mellem laminat og lak er mest visuel.
          </p>
        </TipBox>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om køkkenpriser
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
