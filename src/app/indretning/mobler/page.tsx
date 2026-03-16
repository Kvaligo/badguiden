import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PriceBar } from "@/components/PriceBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badeværelse Møbler — Guide til Skabe, Hylder & Mere",
  description:
    "Alt om møbler til badeværelset. Typer, materialer og priser på badeværelseskab, højskab, spejlskab og hylder. Hvad virker i fugtige rum?",
  alternates: { canonical: `${SITE_URL}/indretning/mobler` },
};

const faqs = [
  {
    question: "Hvad koster et badeværelseskab?",
    answer:
      "Et badeværelseskab koster fra 1.500 kr. for et simpelt underskab i MDF til over 15.000 kr. for et kvalitetsmøbel i massivt træ eller med softclose-skuffer. Spejlskabe koster typisk 2.000-8.000 kr., og højskabe 3.000-12.000 kr. afhængig af materiale og mærke.",
  },
  {
    question: "Kan man bruge almindelige møbler i badeværelset?",
    answer:
      "Det frarådes at bruge almindelige møbler i badeværelset, da de ikke er designet til fugt. Laminat og spånplade svulmer, og overflader kan skalle. Vælg altid møbler specifikt designet til badeværelser med fugtresistente materialer og behandlede overflader.",
  },
  {
    question: "Hvad er det bedste materiale til badeværelsesmøbler?",
    answer:
      "Fugtresistent MDF med lakeret overflade er det mest populære valg og tilbyder god holdbarhed til prisen. Massivt teaktræ er det mest holdbare men også dyreste. Bambus er et bæredygtigt og fugtresistent alternativ. Undgå spånplade og ubehandlet træ.",
  },
  {
    question: "Skal badeværelsesmøbler være vægmonterede?",
    answer:
      "Vægmonterede (svævende) møbler anbefales i de fleste badeværelser. De gør gulvvask nemmere, giver en mere luftig fornemmelse og får rummet til at virke større. Gulvstående møbler kan dog være nødvendige i ældre boliger med svage vægge.",
  },
  {
    question: "Hvor bredt skal et underskab til håndvasken være?",
    answer:
      "Underskabet bør matche håndvaskens bredde. Standard håndvaske er 60-80 cm, og det anbefales at vælge et skab i samme bredde. I små badeværelser kan 40-50 cm brede skabe fungere med en kompakt håndvask. Dobbelt håndvask kræver typisk et skab på 120-160 cm.",
  },
];

export default function MoblerPage() {
  return (
    <>
      <ArticleSchema
        title="Badeværelse Møbler — Guide til Skabe, Hylder & Mere"
        description="Alt om møbler til badeværelset. Typer, materialer og priser på badeværelseskab, højskab, spejlskab og hylder."
        url="/indretning/mobler"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Indretning", href: "/indretning" },
          { label: "Møbler" },
        ]}
        title="Badeværelse Møbler — Guide til Skabe, Hylder & Mere"
        intro="De rigtige møbler løfter badeværelset fra funktionelt til fantastisk. Men i et rum med høj luftfugtighed og daglig vandkontakt er det afgørende at vælge møbler, der kan holde til forholdene. Her gennemgår vi de vigtigste møbeltyper, materialer og prisklasser, så du undgår dyre fejlkøb."
        readingTime={10}
        tocItems={[
          { id: "typer", label: "Typer af badeværelsesmøbler" },
          { id: "materialer", label: "Materialer" },
          { id: "priser", label: "Priser" },
          { id: "valg", label: "Sådan vælger du rigtigt" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Opbevaring i Badeværelset",
            href: "/indretning/opbevaring",
            description: "Smarte opbevaringsløsninger til alle størrelser badeværelser.",
          },
          {
            title: "Håndvask Guide",
            href: "/elementer/haandvask",
            description: "Typer og materialer til badeværelseshåndvaske.",
          },
        ]}
      >
        <img
          src="/images/content/mobler.png"
          alt="Badeværelsesmøbler med underskab, spejlskab og hylder"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Typer */}
        <h2 id="typer" className="font-serif text-2xl font-bold text-text-main">
          Typer af badeværelsesmøbler
        </h2>
        <p>
          Badeværelsesmøbler dækker over alt fra det lille underskab under vasken til det store
          højskab, der rummer familiens samlede forråd af håndklæder og toiletartikler. Her er de
          mest almindelige typer og deres funktion:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Badeværelseskab (underskab)</h3>
        <p>
          Underskabet til håndvasken er det mest centrale møbel i ethvert badeværelse. Det gemmer
          sifon og vandrør, og giver samtidig den vigtigste opbevaringsplads i rummet. Moderne
          underskabe fås typisk med 1-2 skuffer eller en kombination af skuffe og låge.
        </p>
        <p>
          Vælg et skab med softclose-mekanisme — det forhindrer irriterende smæk og forlænger
          beslagenes levetid. De bedste modeller har en forhøjet sokkel eller er vægmonterede, så
          der er fri passage under skabet. Det gør det markant nemmere at gøre rent og forhindrer
          vandskader på skabets bund.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Højskab</h3>
        <p>
          Et højskab (160-200 cm højt, 30-50 cm bredt) er den mest pladseffektive opbevaringsløsning,
          da det udnytter den vertikale plads optimalt. Det rummer typisk 80-150 liter og er
          ideelt til håndklæder, reserveruller, rengøringsmidler og badeværelsestekstiler.
        </p>
        <p>
          Placer højskabet i et hjørne eller ved siden af døren, hvor det generer mindst. Modeller
          med glaslåger giver et luftigere udtryk, mens lukkede låger gemmer indholdet. Nogle
          højskabe har en praktisk vasketøjskurv integreret i bunden.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Spejlskab</h3>
        <p>
          Spejlskabet er en genial to-i-ét-løsning, der kombinerer det uundværlige spejl med
          skjult opbevaring bag spejldørene. De fleste modeller er 60-120 cm brede og 60-70 cm
          høje med 2-3 justerbare hylder indeni.
        </p>
        <p>
          Premium-spejlskabe tilbyder ekstra funktioner som integreret LED-belysning (der giver
          jævnt, flattering lys), dugfri opvarmning af spejlet, indbygget stikkontakt til
          eltandbørste og USB-opladning. Disse ekstra funktioner løfter den daglige oplevelse
          markant og er en investering, der betaler sig i komfort.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hylde</h3>
        <p>
          Åbne hylder er den simpleste form for opbevaring og fungerer både som funktionel
          opbevaring og dekoration. De er perfekte til pæne håndklæder, duftlys og planter.
          Vælg hylder i glas, rustfrit stål eller behandlet træ for at sikre holdbarhed i det
          fugtige miljø.
        </p>
        <p>
          Svævende hylder (skjulte beslag) giver det mest minimalistiske udtryk. Reolsystemer
          med synlige konsoller har et mere industrielt look. Undgå for mange åbne hylder — de
          kræver konstant styling og samler støv.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Vasketøjskurv</h3>
        <p>
          En integreret vasketøjsløsning sparer plads og ser pænere ud end en fritstående kurv.
          Mange højskabe tilbyder en udtrækbar vasketøjskurv i bunden. Alternativt kan en
          fritstående kurv i flet, bambus eller stof med metalramme være en dekorativ løsning.
        </p>
        <p>
          Vælg altid en kurv med ventilation — enten huller i siderne eller et åbent flet — så
          fugtigt vasketøj ikke mugner. En inderkurv af stof, der kan tages ud og bæres direkte
          til vaskemaskinen, er en praktisk detalje.
        </p>

        {/* Materialer */}
        <h2 id="materialer" className="font-serif text-2xl font-bold text-text-main">
          Materialer til badeværelsesmøbler
        </h2>
        <p>
          Materialevalget er afgørende for, hvor godt dine badeværelsesmøbler holder over tid. Fugt
          er den største fjende, og billige materialer kan hurtigt miste form og udseende. Her er
          de mest brugte materialer, og hvad du kan forvente af dem:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fugtresistent MDF</h3>
        <p>
          Fugtresistent MDF (Medium Density Fiberboard) er industristandarden for badeværelsesmøbler
          i mellemklassen. Det er fremstillet med en speciel lim, der modstår fugt bedre end
          standard MDF. Med en lakeret eller folieret overflade kan fugtresistent MDF holde
          15-20 år i et normalt badeværelse.
        </p>
        <p>
          Det er dog ikke fuldstændig vandtæt — langvarig direkte vandkontakt vil stadig skade
          materialet. Sørg derfor for at reparere utætheder hurtigt og tør op under skabet, hvis
          der har stået vand.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Massivt træ</h3>
        <p>
          Massivt træ giver møblerne en varm, naturlig karakter, som intet andet materiale kan
          matche. Teaktræ er den oplagte favorit til badeværelset takket være dets naturlige
          olieindhold, der gør det modstandsdygtigt over for fugt og svamp. Eg og ask kan også
          bruges, men kræver grundig behandling med badeværelsesolie eller lak.
        </p>
        <p>
          Massivt træ er det dyreste valg, men til gengæld kan det slibes og genlakeres, hvis
          overfladen slides. Et teaktræsmøbel kan holde 30+ år med minimal vedligeholdelse — en
          investering der ofte er pengene værd i det lange løb.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Bambus</h3>
        <p>
          Bambus er et bæredygtigt alternativ til massivt træ. Det vokser hurtigt, er naturligt
          antibakterielt og tåler fugt godt. Bambusmøbler har et let, skandinavisk udtryk og
          fås til en lavere pris end teaktræ.
        </p>
        <p>
          Kvaliteten varierer dog — vælg bambus der er presset (solid bambus) frem for lamineret
          bambus, som kan delaminere ved høj fugt. Behandl overfladen med en vandbaseret lak for
          ekstra beskyttelse.
        </p>

        <TipBox variant="obs" title="Pas på spånplade i badeværelset">
          <p>
            Spånplade — også kaldet melaminbelagt spånplade — er det billigste materiale til
            skabe, men det er uegnet til badeværelser. Selv med melaminbelægning trænger fugt
            ind via skruhuller, kanter og skrammer. Resultatet er en opsvulmet, misformet plade
            inden for 1-3 år. Den lille merpris for fugtresistent MDF er altid pengene værd i
            vådrum.
          </p>
        </TipBox>

        {/* Priser */}
        <h2 id="priser" className="font-serif text-2xl font-bold text-text-main">
          Prisklasser for badeværelsesmøbler
        </h2>
        <p>
          Priserne varierer kraftigt afhængig af materiale, mærke og størrelse. Her er et overblik
          over, hvad du kan forvente at betale for de mest populære møbeltyper:
        </p>

        <PriceBar from={1500} to={15000} unit="kr." label="Underskab til håndvask" />
        <PriceBar from={2000} to={8000} unit="kr." label="Spejlskab med LED" />
        <PriceBar from={3000} to={12000} unit="kr." label="Højskab (160-200 cm)" />
        <PriceBar from={500} to={3000} unit="kr." label="Hylder og tilbehør" />

        <p>
          Budget-møbler fra byggemarkeder (Bauhaus, Silvan) starter typisk i den lave ende,
          mens designermøbler fra specialforhandlere og mærker som Dansani, Vipp og Swoon
          ligger i den høje ende. Mellemklassen fra kvalitetskæder som Badeværelseseksperten
          og VVS-grossister tilbyder ofte den bedste værdi for pengene.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Hvad får du for pengene?</h3>
        <ul>
          <li>
            <strong>Budget (1.500-4.000 kr.):</strong> Fugtresistent MDF med folieoverflade,
            standard beslag, begrænset farveudvalg. Funktionelt men simpelt.
          </li>
          <li>
            <strong>Mellemklasse (4.000-10.000 kr.):</strong> Fugtresistent MDF med lakeret
            overflade, softclose, justerbare hylder, bredere farve- og størrelsesudvalg.
          </li>
          <li>
            <strong>Premium (10.000-20.000+ kr.):</strong> Massivt træ eller premium MDF,
            integreret greb, designer-finish, LED-belysning og premium-beslag. Lang garanti.
          </li>
        </ul>

        {/* Vælg rigtigt */}
        <h2 id="valg" className="font-serif text-2xl font-bold text-text-main">
          Sådan vælger du de rigtige badeværelsesmøbler
        </h2>
        <p>
          Med så mange muligheder kan det være svært at vælge. Her er en trin-for-trin-guide til
          at finde de rigtige møbler til netop dit badeværelse:
        </p>
        <ol>
          <li>
            <strong>Mål rummet præcist.</strong> Lav en tegning med alle mål, inklusiv placering
            af vandrør, el-kontakter og dør. Husk at notere, hvilken vej døren åbner.
          </li>
          <li>
            <strong>Fastlæg et budget.</strong> Sæt et realistisk budget for møblerne alene (ekskl.
            inventar og håndværker). Typisk udgør møbler 15-25% af den samlede
            renoveringsomkostning.
          </li>
          <li>
            <strong>Vælg stil og farve.</strong> Tag udgangspunkt i fliserne og det øvrige
            interiør. Lyse møbler giver et luftigt udtryk, mørke møbler tilføjer dybde og
            karakter.
          </li>
          <li>
            <strong>Prioritér funktionalitet.</strong> Tænk over, hvad du reelt skal opbevare.
            En familie med børn har andre behov end et par. Lav en liste over alt, der skal
            rummes, og dimensioner møblerne derefter.
          </li>
          <li>
            <strong>Tjek materialet.</strong> Kig på specifikationerne — er det fugtresistent MDF,
            massivt træ eller lamineret spånplade? Undgå det sidste til vådrum.
          </li>
          <li>
            <strong>Prøv beslagene.</strong> Hvis muligt, besøg en udstilling og test skuffer
            og låger. Softclose, fuldudtræk og justerbare hylder gør en stor forskel i
            hverdagen.
          </li>
        </ol>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om badeværelsesmøbler
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
