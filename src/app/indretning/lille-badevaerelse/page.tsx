import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lille Badeværelse — Idéer til Indretning & Pladsoptimering",
  description:
    "Få det meste ud af dit lille badeværelse. Smarte idéer til pladsoptimering, inventar, farver og opbevaring. Dansk guide med praktiske tips for 2026.",
  alternates: { canonical: `${SITE_URL}/indretning/lille-badevaerelse` },
};

const faqs = [
  {
    question: "Hvordan får jeg mit lille badeværelse til at virke større?",
    answer:
      "Brug store, lyse fliser (færre fuger = mere rum), vælg svævende møbler, installér et stort spejl og brug lyse farver. Glasvæg i stedet for brusekabine åbner rummet visuelt. Gennemsigtige materialer og god belysning gør også en stor forskel.",
  },
  {
    question: "Hvilket inventar passer bedst til små badeværelser?",
    answer:
      "Vælg væghængt toilet (sparer 15-20 cm gulvplads), kompakt hjørnevask eller smal rektangulær vask, walk-in bruser med glasvæg frem for brusekabine, og svævende skabe. Undgå badekar medmindre du vælger et kompakt sidebadekar.",
  },
  {
    question: "Er walk-in shower bedre end badekar i et lille badeværelse?",
    answer:
      "I de fleste tilfælde ja. En walk-in bruser med glasvæg sparer plads og får rummet til at virke åbent. Et badekar fylder typisk 170x70 cm og dominerer et lille rum. Undtagelsen er familier med små børn, hvor et kompakt badekar på 120-140 cm kan overvejes.",
  },
  {
    question: "Hvilke farver gør et lille badeværelse størst?",
    answer:
      "Lyse og neutrale farver som hvid, lys grå og beige reflekterer lys og får rummet til at virke større. Undgå mørke farver på alle flader, men en enkelt accentvæg i en dybere tone kan tilføje dybde. Ensartet farve på gulv og vægge sletter visuelle grænser.",
  },
  {
    question: "Hvad koster det at renovere et lille badeværelse?",
    answer:
      "Et lille badeværelse (3-5 m²) koster typisk 60.000-130.000 kr. at renovere komplet. Materialeomkostningerne er lavere end for store bad, men håndværkerlønnen er næsten den samme, da VVS, el og vådrumssikring tager næsten lige lang tid uanset størrelse.",
  },
];

export default function LilleBadevaerelseePage() {
  return (
    <>
      <ArticleSchema
        title="Lille Badeværelse — Idéer til Indretning & Pladsoptimering"
        description="Få det meste ud af dit lille badeværelse. Smarte idéer til pladsoptimering, inventar, farver og opbevaring."
        url="/indretning/lille-badevaerelse"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Indretning", href: "/indretning" },
          { label: "Lille badeværelse" },
        ]}
        title="Lille Badeværelse — Idéer til Indretning & Pladsoptimering"
        intro="De fleste danske badeværelser er mellem 3 og 6 kvadratmeter — og mange opleves som for små. Men med de rigtige greb kan selv det mindste badeværelse føles rummeligt, funktionelt og stilfuldt. Det handler om at vælge smart inventar, udnytte hver centimeter og bruge visuelle tricks, der snyder øjet."
        readingTime={11}
        tocItems={[
          { id: "top-tips", label: "Top tips til små bad" },
          { id: "inventar", label: "Pladsbesparende inventar" },
          { id: "spejle-farver", label: "Spejle, farver & lys" },
          { id: "bruser-vs-kar", label: "Bruser vs. badekar" },
          { id: "opbevaring", label: "Smart opbevaring" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Opbevaring i Badeværelset",
            href: "/indretning/opbevaring",
            description: "Smarte opbevaringsløsninger til alle størrelser bad.",
          },
          {
            title: "Brusevæg Guide",
            href: "/elementer/brusevaeg",
            description: "Glasvægge der åbner rummet visuelt.",
          },
          {
            title: "Spejl til Badeværelset",
            href: "/elementer/spejl",
            description: "Typer, størrelser og placeringstips.",
          },
        ]}
      >
        <img
          src="/images/content/lille-bad.png"
          alt="Lille badeværelse med smarte pladsoptimerende løsninger"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Top tips */}
        <h2 id="top-tips" className="font-serif text-2xl font-bold text-text-main">
          De 8 bedste tips til små badeværelser
        </h2>
        <p>
          Før vi dykker ned i detaljerne, er her de otte vigtigste principper for indretning af
          et lille badeværelse. Følg disse, og du er allerede langt:
        </p>
        <ol>
          <li>
            <strong>Vælg svævende inventar.</strong> Væghængt toilet og svævende underskab frigør
            gulvplads og giver en luftig fornemmelse. Det synlige gulv under møblerne snyder øjet
            til at opfatte rummet som større.
          </li>
          <li>
            <strong>Brug store fliser.</strong> Store fliser (60x60 cm eller større) giver færre
            fugelinjer, og rummet opleves mere sammenhængende og åbent. Vælg samme flise til gulv
            og vægge for maksimal effekt.
          </li>
          <li>
            <strong>Installér en glasvæg.</strong> Drop brusekabinen og vælg en klar glasvæg i
            stedet. Det åbner rummet visuelt og lader lyset strømme frit. En walk-in løsning
            føles langt mere rummelig end en lukket kabine.
          </li>
          <li>
            <strong>Maksimér spejlet.</strong> Et stort spejl — gerne fra væg til væg — fordobler
            visuelt rummets dybde. Placer det over vasken og sørg for, at det reflekterer lys
            fra vindue eller lampe.
          </li>
          <li>
            <strong>Hold farvepaletten lys.</strong> Lyse, neutrale farver reflekterer lys og får
            rummet til at virke større. Helt hvidt kan dog virke sterilt — vælg i stedet varme
            toner som cremehvid, sandfarve eller lys gråbeige.
          </li>
          <li>
            <strong>Investér i god belysning.</strong> Dårlig belysning gør ethvert rum mindre.
            Kombiner loftlys med spejlbelysning og evt. en LED-stribe under svævende skabe for
            lagdelt, flatterende lys.
          </li>
          <li>
            <strong>Gem alt væk.</strong> Synligt rod er den hurtigste måde at få et lille rum til
            at virke klemt. Brug lukkede skabe, spejlskab og niche-hylder til at holde overflader
            fri.
          </li>
          <li>
            <strong>Vælg en hjørnevask.</strong> Hvis pladsen er meget begrænset, kan en
            hjørnemonteret vask frigøre værdifuld gulvplads i midten af rummet.
          </li>
        </ol>

        <PullQuote
          quote="Et lille badeværelse er ikke en begrænsning — det er en udfordring, der belønner kreative løsninger. De bedst indrettede små bad føles ofte mere gennemtænkte end store badeværelser."
          author="Dansk indretningsarkitekt"
        />

        {/* Pladsbesparende inventar */}
        <h2 id="inventar" className="font-serif text-2xl font-bold text-text-main">
          Pladsbesparende inventar til små badeværelser
        </h2>
        <p>
          Valget af inventar har den største indflydelse på, hvor rummeligt dit lille badeværelse
          føles. Her er de vigtigste elementer og de mest pladsbesparende varianter:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Væghængt toilet</h3>
        <p>
          Et væghængt toilet med indbygningscisterne monteres på væggen, så cisternen er skjult
          bagved. Det sparer 15-20 cm i dybden sammenlignet med et gulvstående toilet og gør det
          langt nemmere at gøre rent under toilettet. Den sleekere profil giver et mere moderne
          udtryk og får gulvarealet til at virke større.
        </p>
        <p>
          Prisen for et væghængt toilet inkl. cisterne og trykknap er typisk 4.000-12.000 kr.,
          mens montering koster 3.000-6.000 kr. ekstra. Det er en merpris i forhold til et
          standard toilet, men pladsbersparelsen er ofte pengene værd i et lille bad.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hjørnevask og smal vask</h3>
        <p>
          En hjørnemonteret håndvask udnytter et ellers dødt hjørne og frigør gulvplads langs
          væggen. Hjørnevaske fås i størrelser fra 35x35 cm. Alternativt kan en smal rektangulær
          vask (40-50 cm bred) monteres på en lang væg, hvor en standardvask ville fylde for
          meget.
        </p>
        <p>
          Vær opmærksom på, at meget små vaske kan være upraktiske i daglig brug — test gerne
          størrelsen i en udstilling, inden du køber. En vask under 40 cm i bredden kan gøre det
          svært at vaske hænder komfortabelt.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Walk-in bruser med glasvæg</h3>
        <p>
          En walk-in bruser uden karfod med en klar glasvæg er den mest rumbesparende
          bruseløsning. Gulvet skråner let mod afløbet, og hele rummet opleves som ét
          sammenhængende areal. En glasvæg på 80-90 cm bredde er typisk tilstrækkelig til at
          holde vandet inde, men lader lys og blik passere frit.
        </p>
        <p>
          Til de allermindste badeværelser (under 3 m²) kan en foldbar glasvæg være en smart
          løsning — den kan foldes ind mod væggen, når bruseren ikke er i brug, og frigør
          gulvpladsen til andre formål.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Smalle og høje skabe</h3>
        <p>
          I stedet for et bredt underskab kan du vælge et smalt højskab (25-35 cm bredt) der
          udnytter den vertikale plads. Kombineret med en lille vask med åben konsol under
          (metalramme) får du opbevaring uden at ofre gulvplads.
        </p>

        {/* Spejle, farver og lys */}
        <h2 id="spejle-farver" className="font-serif text-2xl font-bold text-text-main">
          Spejle, farver og lys — visuelle tricks
        </h2>
        <p>
          De mest effektive tricks til at få et lille badeværelse til at virke større handler ikke
          om inventar, men om visuelle illusioner. Her er de vigtigste:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Spejle skaber dybde</h3>
        <p>
          Et spejl reflekterer lys og rum, og giver illusionen af dobbelt så meget plads. I et
          lille badeværelse bør spejlet være så stort som muligt — gerne fra væg til væg over
          vasken. Undgå spejle med tykke rammer, da rammen visuelt begrænser spejlets effekt.
          Et rammeløst spejl eller et spejl med ultratyndt metalramme giver den mest åbne
          fornemmelse.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Farver der åbner rummet</h3>
        <p>
          Lyse farver reflekterer lys og får vægge til at synes længere væk. De bedste farver til
          små badeværelser er:
        </p>
        <ul>
          <li>
            <strong>Varme hvide toner</strong> — cremehvid, perlehvid og knækket hvid. Varmere
            end kridhvid men stadig lyse og åbne.
          </li>
          <li>
            <strong>Lys gråbeige (greige)</strong> — sofistikeret og tidløst. Giver varme uden
            at lukke rummet.
          </li>
          <li>
            <strong>Sandfarve og lys beige</strong> — naturlige toner der skaber en spa-agtig
            atmosfære.
          </li>
          <li>
            <strong>Meget lys salviegrøn</strong> — tilfører karakter uden at gøre rummet
            mørkt. Populær trend i 2026.
          </li>
        </ul>
        <p>
          En enkelt accentvæg i en dybere farve kan paradoksalt nok tilføje dybde til rummet.
          Placer den på den korteste væg (typisk bagvæggen i bruseren) for at trække øjet ind
          og skabe en oplevelse af mere plads.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Belysning gør forskellen</h3>
        <p>
          Mange små badeværelser lider under en enkelt loftlampe, der kaster hårde skygger.
          Lagdelt belysning er nøglen: en dæmpbar loftlampe til generelt lys, spejlbelysning
          (LED-striber eller spots ved siderne af spejlet) til opgavebelysning, og eventuelt en
          LED-stribe under svævende skabe eller langs gulvlinjen for stemningsbelysning.
        </p>
        <p>
          Vælg pærer med en farvetemperatur på 2700-3000K (varm hvid) for den mest behagelige
          atmosfære. Koldt lys (over 4000K) kan få et lille rum til at virke klinisk.
        </p>

        <TipBox variant="tip" title="Illusionen om et større rum">
          <p>
            Kombiner tre tricks for maksimal effekt: 1) Vælg samme flise på gulv og nedre del af
            væggene — det sletter grænsen mellem gulv og væg. 2) Monter et spejl fra væg til væg
            over vasken. 3) Brug en klar glasvæg i bruseren i stedet for en forhæng eller
            mælkehvid kabine. Tilsammen kan disse tre greb få et 4 m² badeværelse til at føles
            som det dobbelte.
          </p>
        </TipBox>

        {/* Bruser vs. kar */}
        <h2 id="bruser-vs-kar" className="font-serif text-2xl font-bold text-text-main">
          Walk-in bruser vs. badekar i små badeværelser
        </h2>
        <p>
          Spørgsmålet om bruser eller badekar er et af de mest debatterede i forbindelse med små
          badeværelser. Her er argumenterne for begge:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Walk-in bruser (anbefalet)</h3>
        <p>
          En walk-in bruser med glasvæg er det mest pladseffektive valg. Uden brusekabinens
          rammer og karfod flyder bruseområdet visuelt sammen med resten af rummet. Det giver
          en åben, moderne fornemmelse og er nemmere at gøre rent.
        </p>
        <p>
          Bruseområdet bør være mindst 80x80 cm for komfortabel brug. Med en god gulvhældning
          (1-2%) mod afløbet og korrekt vådrumssikring fungerer en walk-in løsning lige så godt
          som en lukket kabine — bare med langt bedre rumfornemmelse.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Kompakt badekar</h3>
        <p>
          For familier med små børn kan et badekar føles uundværligt. Heldigvis fås der
          kompakte badekars-modeller i størrelser som 120x70 cm og 140x70 cm — markant kortere
          end standard 170 cm. Sidebadekar (siddebadekar) fylder endnu mindre og kan fungere
          som brusebad med brusevæg ovenpå.
        </p>
        <p>
          Overvej dog, om børnene reelt har brug for badekar i mere end 3-5 år. Hvis du
          planlægger en renovering, der skal holde 15-20 år, kan det give mening at vælge bruser
          og bade børnene i et lille badebassin imens.
        </p>

        {/* Smart opbevaring */}
        <h2 id="opbevaring" className="font-serif text-2xl font-bold text-text-main">
          Smart opbevaring i små badeværelser
        </h2>
        <p>
          Opbevaring er en særlig udfordring i et lille badeværelse, hvor hver centimeter tæller.
          Her er de mest effektive strategier:
        </p>
        <ul>
          <li>
            <strong>Spejlskab over vasken</strong> — det vigtigste opbevaringsmøbel i et lille
            bad. Giver 15-30 liter plads uden at tage ekstra vægplads.
          </li>
          <li>
            <strong>Niche i brusenichen</strong> — en indfældet hylde der ikke stjæler plads
            fra brusearealtet. Perfekt til shampoo og sæbe.
          </li>
          <li>
            <strong>Over-toilet-hylde</strong> — udnytter den ofte glemte plads over toilettet.
            Et smalt hyldemodul eller et overskab giver ekstra opbevaring.
          </li>
          <li>
            <strong>Dørmonteret opbevaring</strong> — smalle hylder eller kroge på indersiden af
            døren eller skabslåger rummer hårtørrer, glattejern og småting.
          </li>
          <li>
            <strong>Svævende underskab med skuffer</strong> — giver mere tilgængelig opbevaring
            end et skab med låger, og gulvpladsen under skabet gør rengøring nemmere.
          </li>
        </ul>
        <p>
          Læs mere i vores dybdegående guide til{" "}
          <Link href="/indretning/opbevaring" className="text-primary hover:underline">
            opbevaring i badeværelset
          </Link>.
        </p>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om små badeværelser
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
