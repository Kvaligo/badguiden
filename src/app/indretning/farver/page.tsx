import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farver i Badeværelse — Trends, Tips & Inspiration",
  description:
    "Guide til farver i badeværelset. Se trends for 2026 — varme neutraler, salviegrøn, dyb blå og terracotta. Farvepsykologi og sikre kombinationer.",
  alternates: { canonical: `${SITE_URL}/indretning/farver` },
};

const faqs = [
  {
    question: "Hvilke farver er populære til badeværelser i 2026?",
    answer:
      "I 2026 dominerer varme neutraler som greige og varm beige, salviegrøn og andre naturinspirerede grønne toner, dyb oceanblå som accentfarve, og terracotta og rustne jordtoner. Det helt hvide badeværelse er på vej ud til fordel for mere personlige farvepaletter.",
  },
  {
    question: "Er det en god idé med mørke farver i badeværelset?",
    answer:
      "Mørke farver kan skabe en luksuriøs spa-stemning, men kræver god belysning og fungerer bedst i mellemstore til store badeværelser. I små badeværelser bør mørke farver begrænses til en accentvæg eller gulvet. Mørke flader viser også kalkaflejringer og vandpletter tydeligere.",
  },
  {
    question: "Hvordan kombinerer man farver i badeværelset?",
    answer:
      "Brug 60-30-10-reglen: 60% dominerende farve (typisk vægge), 30% sekundær farve (møbler/gulv) og 10% accentfarve (tilbehør/armatur). Hold dig til max 3 farver for et harmonisk resultat. Neutrale basisfarver gør det nemt at skifte accentfarver.",
  },
  {
    question: "Hvilke farver gør badeværelset roligt og spa-agtigt?",
    answer:
      "Blå, grønne og neutrale jordtoner skaber den mest afslappende atmosfære. Lys salviegrøn, dæmpet havblå og varm sandfarve er klassiske spa-farver. Kombiner med naturmaterialer som træ og sten for den fulde effekt. Undgå for stærke eller neon-agtige nuancer.",
  },
  {
    question: "Kan man male badeværelset i stedet for at flisebelægge?",
    answer:
      "Ja, men kun med specialmaling beregnet til vådrum. Vådrumsmalinger er vandafvisende og skimmelresistente. Maling egner sig dog kun til de tørre zoner — vægge omkring bruser og badekar skal stadig flisebelægges eller dækkes med vandtæt materiale iht. BR18.",
  },
];

export default function FarverPage() {
  return (
    <>
      <ArticleSchema
        title="Farver i Badeværelse — Trends, Tips & Inspiration"
        description="Guide til farver i badeværelset. Se trends for 2026, farvepsykologi og sikre farvekombinationer."
        url="/indretning/farver"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Indretning", href: "/indretning" },
          { label: "Farver" },
        ]}
        title="Farver i Badeværelse — Trends, Tips & Inspiration"
        intro="Farve er det mest kraftfulde designværktøj i badeværelset. Det rigtige farvevalg kan forvandle et kedeligt rum til en rolig oase eller et modigt statement. Fra tidløse neutrale toner til årets mest populære trendfarver — her får du alt, du skal vide for at vælge den perfekte farvepalet til dit badeværelse."
        readingTime={10}
        tocItems={[
          { id: "trends", label: "Farvetrends 2026" },
          { id: "psykologi", label: "Farvepsykologi" },
          { id: "sikre-valg", label: "Sikre valg vs. modige" },
          { id: "kombinationer", label: "Farvekombinationer" },
          { id: "praktisk", label: "Praktiske overvejelser" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Materialer til Badeværelset",
            href: "/materialer",
            description: "Microcement, fliser, terrazzo og mere i alle farver.",
          },
          {
            title: "Lille Badeværelse",
            href: "/indretning/lille-badevaerelse",
            description: "Farver og tricks der gør små badeværelser større.",
          },
        ]}
      >
        <img
          src="/images/content/farver.png"
          alt="Farvepalet med populære badeværelsefarver og -toner i 2026"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Farvetrends 2026 */}
        <h2 id="trends" className="font-serif text-2xl font-bold text-text-main">
          Farvetrends i badeværelset 2026
        </h2>
        <p>
          2026 markerer et skifte i badeværelsesdesign — væk fra det klinisk hvide og hen mod
          mere personlige, naturinspirerede farvepaletter. De store interiørbrands og
          fliseproducenter viser alle den samme retning: varme, jordnære toner med modige accenter.
          Her er årets fire dominerende farvetrends:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Varme neutraler</h3>
        <p>
          De kolde grå toner, der dominerede det seneste årti, er erstattet af varme neutraler.
          Greige (en blanding af grå og beige), varm sandfarve og cremehvid er de nye
          basisfarver i badeværelset. Disse toner skaber en varm, indbydende atmosfære uden at
          dominere rummet. De fungerer som et perfekt lærred for både naturmaterialer og farvede
          accenter.
        </p>
        <p>
          Varme neutraler er ekstra populære i skandinavisk design, fordi de balancerer den
          nordiske sans for minimalisme med en behov for varme i de mørke vintermåneder. Kombiner
          med træelementer i eg eller valnød for det ultimative hyggelige bad.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Salviegrøn og naturens grønne</h3>
        <p>
          Grøn er den store farvetrend i 2026 — specifikt de dæmpede, naturinspirerede grønne
          som salviegrøn, eukalyptus og mosgrøn. Disse farver bringer naturen indenfor og skaber
          en beroligende atmosfære, der minder om en skovgåtur. Salviegrøn er desuden en af de
          mest alsidige farver — den fungerer med både varme og kølige sekundærfarver.
        </p>
        <p>
          I praksis ser vi salviegrøn brugt på fliser (især metrofliser og zellige-fliser),
          som maling på den tørre zone af vægge, og på badeværelsesmøbler. Kombiner med hvid
          marmor-look, messing-armatur og grønne planter for et sammenhængende, naturnært udtryk.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Dyb oceanblå</h3>
        <p>
          Mørk marineblå og dyb havblå er et modigt men sofistikeret valg, der giver badeværelset
          en dramatisk, luksuriøs karakter. Denne trend passer bedst til mellemstore og store
          badeværelser, hvor den dybe farve kan komme til sin ret uden at lukke rummet.
        </p>
        <p>
          Brug dyb blå som accentvæg i bruseren eller på et fritstående møbel. Kombiner med
          hvide eller lyse grå fliser for kontrast, og tilføj messing- eller guldfarvet armatur
          for et eksklusivt finish. Undgå at bruge dyb blå på alle flader — det kan virke
          overvældende og mørkt.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Terracotta og jordtoner</h3>
        <p>
          Terracotta, rust og brændt sienna tilfører varme og karakter til badeværelset. Disse
          jordfarver har en naturlig forbindelse til keramik og ler, som har været brugt i
          badeværelser i årtusinder. I 2026 ser vi terracotta-farvede fliser, dekorative
          elementer og endda terracotta-farvede håndvaske.
        </p>
        <p>
          Jordtoner fungerer bedst som accenter — en terracotta-farvet væg bag vasken, et par
          keramikskåle til opbevaring eller håndklæder i rustne nuancer. Kombiner med neutrale
          baggrunde og naturmaterialer som træ og sten for et varmt, middelhavsinspireret
          udtryk.
        </p>

        {/* Farvepsykologi */}
        <h2 id="psykologi" className="font-serif text-2xl font-bold text-text-main">
          Farvepsykologi i badeværelset
        </h2>
        <p>
          Farver påvirker vores humør og velbefindende mere end de fleste er klar over. I
          badeværelset — hvor vi starter og slutter dagen — er det ekstra vigtigt at vælge
          farver, der understøtter den stemning, du ønsker. Her er en gennemgang af de vigtigste
          farvegrupper og deres psykologiske effekt:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Blå — ro og fokus</h3>
        <p>
          Blå er forbundet med vand, himmel og ro. Det sænker pulsen og blodtrykket og er den
          farve, der oftest associeres med renlighed — ikke overraskende en klassiker i
          badeværelser. Lyse blå toner giver en frisk, luftig følelse, mens dybere blå skaber
          en mere dramatisk, spa-agtig atmosfære.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Grøn — balance og natur</h3>
        <p>
          Grøn er den mest afbalancerede farve og associeres med natur, sundhed og genopladning.
          Den er behagelig for øjet og skaber en harmonisk atmosfære. I badeværelset fungerer
          grøn som en bro mellem det naturlige og det moderne, især når den kombineres med
          planter og naturmaterialer.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hvid — renhed og enkelhed</h3>
        <p>
          Hvid signalerer renhed, enkelhed og lys. Det er den sikreste farve til badeværelser,
          da den altid føles ren og tidløs. Men et helt hvidt badeværelse kan virke sterilt og
          upersonligt. Tilføj tekstur (strukturerede fliser, mønstrede håndklæder) og varme
          materialer (træ, rattan) for at bryde monotonien.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Jordtoner — varme og tryghed</h3>
        <p>
          Beige, sand, terracotta og brun skaber en varm, tryg atmosfære der minder om jord og
          natur. Disse farver er særligt velegnede til badeværelser i nordiske hjem, hvor de
          kompenserer for det koldere klima og de korte vinterdage. De er lette at kombinere med
          både moderne og klassisk interiør.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Sort — drama og luksus</h3>
        <p>
          Sort i badeværelset er et modigt valg, der udstråler luksus og elegance. Det fungerer
          bedst i kombination med hvid (klassisk sort-hvid) eller guld/messing-accenter. Men
          sort kræver god belysning og flittig rengøring — kalk og vanddråber er meget synlige
          på mørke flader.
        </p>

        {/* Sikre valg vs. modige */}
        <h2 id="sikre-valg" className="font-serif text-2xl font-bold text-text-main">
          Sikre farvevalg vs. modige statements
        </h2>
        <p>
          En badeværelserenovering er en langsigtet investering — de fleste lever med resultatet
          i 15-20 år. Det er derfor vigtigt at balancere mellem personlig stil og tidløshed.
          Her er en guide til at navigere valget:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">De sikre valg</h3>
        <p>
          Disse farver forældes ikke og fungerer i alle stilarter:
        </p>
        <ul>
          <li>
            <strong>Hvid og off-white</strong> — altid tidløst. Vælg en varm undertone
            (cremehvid, linen) frem for klinisk hvid for mere karakter.
          </li>
          <li>
            <strong>Lys grå</strong> — neutralt og sofistikeret. Vælg en varm grå med let
            beige-undertone for at undgå et koldt udtryk.
          </li>
          <li>
            <strong>Varm beige/sand</strong> — tidløst og varmt. Fungerer perfekt med både
            moderne og klassisk inventar.
          </li>
          <li>
            <strong>Sort og hvid</strong> — den klassiske kombination der aldrig fejler.
            Grafisk, elegant og tidløs.
          </li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">De modige valg</h3>
        <p>
          Disse farver giver karakter og personlighed, men kan være sværere at leve med over
          tid:
        </p>
        <ul>
          <li>
            <strong>Salviegrøn hele vejen</strong> — smukt men kræver, at du elsker grøn om
            10 år. Sikrere som accent.
          </li>
          <li>
            <strong>Dyb blå eller sort</strong> — dramatisk og luksuriøst, men kræver
            vedligeholdelse og god belysning.
          </li>
          <li>
            <strong>Terracotta og rust</strong> — varmt og personligt, men en udpræget trend
            der potentielt daterer hurtigt.
          </li>
          <li>
            <strong>Pink og pudderfarver</strong> — feminint og moderne, men kan være
            polariserende ved videresalg.
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Den sikre farvestrategi">
          <p>
            Brug neutrale, tidløse farver til de permanente elementer (fliser, store vægflader)
            og tilføj personlighed med udskiftelige elementer: farvede håndklæder, en malet
            møbellåge, farvet tilbehør eller en malet væg i den tørre zone (kan males om).
            Så kan du følge trends uden at renovere.
          </p>
        </TipBox>

        {/* Kombinationer */}
        <h2 id="kombinationer" className="font-serif text-2xl font-bold text-text-main">
          Sådan kombinerer du farver i badeværelset
        </h2>
        <p>
          At kombinere farver korrekt er afgørende for et harmonisk resultat. Her er de
          vigtigste principper og nogle afprøvede kombinationer:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">60-30-10-reglen</h3>
        <p>
          Den mest brugte regel inden for interiørdesign: 60% af rummet dækkes af den dominerende
          farve (typisk vægge og store flader), 30% af en sekundær farve (møbler, gulv, den
          anden flisefarve) og 10% er accentfarven (armatur, tilbehør, detaljer). Denne fordeling
          skaber en naturlig balance, der er behagelig for øjet.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Tone-i-tone</h3>
        <p>
          Vælg variationer af samme farvefamilie — f.eks. tre forskellige beige-toner eller
          tre nuancer af grå. Det giver et sofistikeret, roligt udtryk med tilstrækkelig
          variation til at undgå monotoni. Tone-i-tone er den sikreste kombination og fungerer
          i alle rumstørrelser.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Kontrast</h3>
        <p>
          Stærke kontraster — som sort og hvid, mørkeblå og hvid, eller terracotta og hvid —
          skaber energi og drama. Kontrast fungerer bedst i badeværelser med god belysning og
          tilstrækkelig plads. I små badeværelser bør kontrasten være mere subtil (lys grå mod
          hvid) for at undgå et uroligt udtryk.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fem afprøvede kombinationer</h3>
        <ol>
          <li>
            <strong>Sandfarve + hvid + messing</strong> — varmt, tidløst og spa-agtigt. Perfekt
            til skandinaviske hjem.
          </li>
          <li>
            <strong>Salviegrøn + hvid marmor + sort armatur</strong> — moderne og naturnært.
            Årets mest populære kombination.
          </li>
          <li>
            <strong>Lys grå + hvid + eg-træ</strong> — minimalistisk nordisk klassiker. Aldrig
            forkert.
          </li>
          <li>
            <strong>Mørkeblå + hvid + guld</strong> — luksuriøst og dramatisk. Bedst i større
            badeværelser.
          </li>
          <li>
            <strong>Terracotta-accent + varm hvid + valnødtræ</strong> — organisk og
            middelhavsinspireret. Giver varme og karakter.
          </li>
        </ol>

        {/* Praktiske overvejelser */}
        <h2 id="praktisk" className="font-serif text-2xl font-bold text-text-main">
          Praktiske overvejelser ved farvevalg
        </h2>
        <p>
          Ud over æstetik er der flere praktiske faktorer, du bør overveje, når du vælger farver
          til badeværelset:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Vedligeholdelse og rengøring</h3>
        <p>
          Mørke fliser og overflader viser kalkaflejringer, vandpletter og støv markant mere end
          lyse. Hvis du vælger mørke flader, skal du regne med hyppigere rengøring. Matte
          overflader skjuler pletter bedre end blanke, men er sværere at gøre rent. Det bedste
          kompromis er en halvmat overflade i mellemtone.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Lysets indflydelse</h3>
        <p>
          Farver ser vidt forskellige ud afhængigt af belysningen. En flise, der ser varm og
          beige ud i butikken, kan virke grå og kold i dit badeværelse, hvis belysningen er
          forkert. Test altid farveprøver i det faktiske rum ved forskellige tidspunkter på
          dagen. Badeværelser uden vindue er særligt følsomme — her afhænger farvegengivelsen
          100% af den kunstige belysning.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Rummets størrelse</h3>
        <p>
          Lyse farver får små rum til at virke større, mens mørke farver trækker vægge ind.
          Det betyder ikke, at du skal undgå mørke farver i et lille badeværelse — men brug
          dem strategisk. En mørk gulvflise kombineret med lyse vægge kan give dybde. En mørk
          accentvæg i bruseren kan skabe dramatik uden at lukke rummet.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Boligens videresalg</h3>
        <p>
          Hvis du planlægger at sælge boligen inden for 5-10 år, er neutrale farver det sikreste
          valg. Meget personlige farvevalg (stærk pink, neongrøn, sort overalt) kan afskrække
          potentielle købere. Det betyder ikke, at badeværelset skal være kedeligt — varm beige,
          lys salviegrøn og klassisk sort-hvid er alle farvepaletter, der appellerer bredt.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om farver i badeværelset
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
