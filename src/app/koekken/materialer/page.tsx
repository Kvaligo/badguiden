import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PriceBar } from "@/components/PriceBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Køkken Materialer — Bordplader, Fronter & Mere",
  description:
    "Alt om materialer til køkkenet. Sammenlign bordplader (laminat, kompositsten, granit, marmor) og fronter (MDF, folie, massivt træ). Priser og holdbarhed.",
  alternates: { canonical: `${SITE_URL}/koekken/materialer` },
};

const faqs = [
  {
    question: "Hvad er den bedste bordplade til køkkenet?",
    answer:
      "Det afhænger af budget og behov. Kompositsten (Silestone, Dekton) tilbyder den bedste kombination af holdbarhed og æstetik. Granit er den hårdeste natursten. Massivt træ giver varme men kræver vedligeholdelse. Laminat er det bedste budgetvalg. Marmor er smukkest men mest sart.",
  },
  {
    question: "Hvad koster en ny bordplade til køkkenet?",
    answer:
      "Laminat koster 1.000-3.000 kr. pr. løbende meter. Kompositsten 3.000-6.000 kr. Granit 3.500-7.000 kr. Massivt træ 2.000-5.000 kr. Marmor 4.000-10.000 kr. pr. løbende meter. For et standardkøkken med 3-4 løbende meter bordplade lander prisen på 3.000-40.000 kr.",
  },
  {
    question: "Laminat eller kompositsten — hvad skal jeg vælge?",
    answer:
      "Laminat er 60-70% billigere og fås i mange designs, men kan ikke repareres ved skrammer og tåler ikke varme gryder. Kompositsten er næsten uforgængelig, tåler varme, kan slibes og repareres, men koster væsentligt mere. Vælg laminat ved stramt budget, kompositsten ved langsigtet investering.",
  },
  {
    question: "Hvilke køkkenfronter holder bedst?",
    answer:
      "Lakerede MDF-fronter holder typisk 15-20 år og er lette at rengøre. Massivt træ kan holde 30+ år med vedligeholdelse. Foliefronter er billigst men kan skalle efter 8-12 år, især nær ovn og opvaskemaskine. Laminatfronter er holdbare og prisvenlige med 15-20 års levetid.",
  },
  {
    question: "Er massivt træ en god idé som køkkenbordplade?",
    answer:
      "Massivt træ giver varme og karakter men kræver vedligeholdelse med olie 2-4 gange årligt. Det tåler ikke stående vand og kan få pletter af vin og citrus. Eg og valnød er de mest populære. Vælg massivt træ hvis du elsker patina og er villig til at vedligeholde det.",
  },
];

export default function KoekkenMaterialerPage() {
  return (
    <>
      <ArticleSchema
        title="Køkken Materialer — Bordplader, Fronter & Mere"
        description="Alt om materialer til køkkenet. Sammenlign bordplader og fronter — priser, holdbarhed og fordele."
        url="/koekken/materialer"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Køkken", href: "/koekken" },
          { label: "Materialer" },
        ]}
        title="Køkken Materialer — Bordplader, Fronter & Mere"
        intro="Materialevalget i køkkenet afgør både udseende, holdbarhed og pris. Bordpladen slider du på hver dag, fronterne ser du konstant, og begge dele skal holde i 15-20 år. Her sammenligner vi de mest populære materialer til bordplader og køkkenfronter — med ærlige fordele, ulemper og priser, så du kan vælge det rigtige."
        readingTime={13}
        tocItems={[
          { id: "bordplader", label: "Bordplader" },
          { id: "laminat", label: "Laminat" },
          { id: "kompositsten", label: "Kompositsten" },
          { id: "granit", label: "Granit" },
          { id: "marmor", label: "Marmor" },
          { id: "trae", label: "Massivt træ" },
          { id: "fronter", label: "Køkkenfronter" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Køkkenpriser",
            href: "/koekken/pris",
            description: "Komplet prisoversigt for budget, standard og luksus.",
          },
          {
            title: "Køkken Inspiration",
            href: "/koekken/inspiration",
            description: "Stilarter, layout-typer og farvetrends 2026.",
          },
        ]}
      >
        <img
          src="/images/content/koekken-materialer.png"
          alt="Materialeprøver til køkken med bordplader og fronter i forskellige typer"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Bordplader intro */}
        <h2 id="bordplader" className="font-serif text-2xl font-bold text-text-main">
          Bordplader til køkkenet — overblik
        </h2>
        <p>
          Bordpladen er den overflade, du arbejder på dagligt. Den skal tåle knive, varme gryder,
          syre fra citrus og daglig rengøring i årtier. Valget af bordplademateriale er derfor en
          af de vigtigste beslutninger i køkkenplanlægningen. Her er de fem mest populære
          materialer med ærlige fordele og ulemper:
        </p>

        {/* Laminat */}
        <h2 id="laminat" className="font-serif text-2xl font-bold text-text-main">
          Laminat — det budgetvenlige allroundvalg
        </h2>
        <PriceBar from={1000} to={3000} unit="kr./lbm." label="Laminatbordplade" />
        <p>
          Laminat er det mest udbredte bordplademateriale i danske køkkener og det klart
          billigste valg. Moderne højtrykslaminat fås i hundredvis af designs — fra klassisk hvid
          og betonlook til overbevisende marmor- og træimitation. Det er hygiejnisk, nemt at
          rengøre og modstandsdygtigt over for de fleste husholdningskemikalier.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fordele</h3>
        <ul>
          <li>Markant billigere end alle alternativer — sparbesparelse på 10.000-30.000 kr. for et standardkøkken</li>
          <li>Enormt udvalg i farver, mønstre og overfladestrukturer</li>
          <li>Hygiejnisk, vandafvisende overflade der er nem at holde ren</li>
          <li>Tåler de fleste husholdningskemikalier uden skade</li>
          <li>Let og nemt at montere — velegnet til gør-det-selv</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Ulemper</h3>
        <ul>
          <li>Kan ikke repareres ved dybe ridser eller skrammer — skal udskiftes</li>
          <li>Tåler ikke varme gryder direkte — kræver altid bordskåner</li>
          <li>Kanter og samlinger er sårbare over for vand — tør op straks ved spild</li>
          <li>Kortere levetid end sten og kompositsten (10-15 år typisk)</li>
          <li>Kan ikke slibes eller genbehandles som natursten eller træ</li>
        </ul>

        {/* Kompositsten */}
        <h2 id="kompositsten" className="font-serif text-2xl font-bold text-text-main">
          Kompositsten — den holdbare favorit
        </h2>
        <PriceBar from={3000} to={6000} unit="kr./lbm." label="Kompositsten (Silestone, Dekton)" />
        <p>
          Kompositsten (også kaldet engineered stone) er fremstillet af kvarts, harpiks og
          pigmenter. De mest kendte mærker er Silestone, Caesarstone og Dekton. Materialet
          kombinerer naturstens æstetik med overlegen holdbarhed og minimal vedligeholdelse.
          Det er det mest populære valg i standard- og premium-køkkener i 2026.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fordele</h3>
        <ul>
          <li>Ekstremt hårdt og ridsefast — tåler daglig brug uden synlige spor</li>
          <li>Ikke-porøst: absorberer ikke væsker, bakterier eller pletter</li>
          <li>Ensartet udseende fra plade til plade — lettere at matche end natursten</li>
          <li>Kræver ingen imprægnering eller vedligeholdelse</li>
          <li>Fås i et bredt udvalg af farver og designs, inkl. overbevisende marmorlook</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Ulemper</h3>
        <ul>
          <li>Markant dyrere end laminat — dobbelt til tredobbelt pris</li>
          <li>Nogle typer (kvarts-baserede) tåler ikke vedvarende UV-lys — undgå i udekøkkener</li>
          <li>Ekstremt varme genstande kan skade overfladen (Dekton tåler dog høj varme)</li>
          <li>Tungt materiale — kræver stærkere skabskonstruktion end laminat</li>
          <li>Reparation af chips kræver professionel hjælp</li>
        </ul>

        {/* Granit */}
        <h2 id="granit" className="font-serif text-2xl font-bold text-text-main">
          Granit — naturens hårdeste
        </h2>
        <PriceBar from={3500} to={7000} unit="kr./lbm." label="Granitbordplade" />
        <p>
          Granit er den hårdeste og mest slidstærke natursten til køkkenbordplader. Hver plade er
          unik med naturlige variationer i mønster og farve, hvilket giver køkkenet en autentisk,
          luksuriøs karakter. Granit har været det foretrukne materiale til premium-køkkener i
          årtier og er fortsat populært i 2026.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fordele</h3>
        <ul>
          <li>Ekstremt hårdt — tåler varme gryder direkte uden skade</li>
          <li>Unik naturlig skønhed — ingen to plader er ens</li>
          <li>Holdbarhed i 30-50+ år med korrekt vedligeholdelse</li>
          <li>Ridsefri under normal brug — selv skarpe knive efterlader sjældent spor</li>
          <li>Øger boligens værdi markant</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Ulemper</h3>
        <ul>
          <li>Porøst materiale — kræver imprægnering hvert 1-2 år for at undgå pletter</li>
          <li>Tung — kræver forstærkede skabe og professionel montering</li>
          <li>Naturlige variationer kan være svære at forudsige — vælg altid den specifikke plade</li>
          <li>Højere pris end laminat og kompositsten</li>
          <li>Begrænset farveudvalg sammenlignet med kompositsten</li>
        </ul>

        {/* Marmor */}
        <h2 id="marmor" className="font-serif text-2xl font-bold text-text-main">
          Marmor — det ultimative luksusvalg
        </h2>
        <PriceBar from={4000} to={10000} unit="kr./lbm." label="Marmorbordplade" />
        <p>
          Marmor er det mest eftertragede og ikoniske bordplademateriale. De karakteristiske årer
          i Carrara, Calacatta og Statuario giver en æstetik, som intet andet materiale kan
          matche. Marmor er dog også det mest krævende materiale hvad angår vedligeholdelse og
          pasning — det er en livsstilsbeslutning lige så meget som en materialebeslutning.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fordele</h3>
        <ul>
          <li>Uovertruffen æstetik — den ultimative luksusoverflade</li>
          <li>Naturligt køligt — perfekt til bagning og dejarbejde</li>
          <li>Unik karakter der bliver smukkere med alderen (patina)</li>
          <li>Tidløs klassiker der aldrig går af mode</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Ulemper</h3>
        <ul>
          <li>Meget porøst — plettes let af vin, citrus, kaffe og tomatsauce</li>
          <li>Blødere end granit — kan ridses af skarpe genstande</li>
          <li>Kræver omhyggelig og regelmæssig imprægnering (hvert 3-6 måneder)</li>
          <li>Den dyreste bordpladeløsning — pris fra 4.000 kr. pr. løbende meter</li>
          <li>Ætsningsfølsomt — syrer (eddike, citron) kan give matte pletter</li>
        </ul>

        <TipBox variant="obs" title="Marmor kræver accept af patina">
          <p>
            Vælg kun marmor, hvis du kan acceptere, at overfladen ændrer sig over tid. Pletter,
            ætsmærker og ridser er uundgåelige i et aktivt køkken — men for mange er det netop
            den levende patina, der gør marmor så charmerende. Hvis du vil have marmorlook uden
            vedligeholdelse, er kompositsten i marmordesign et langt mere praktisk alternativ.
          </p>
        </TipBox>

        {/* Massivt træ */}
        <h2 id="trae" className="font-serif text-2xl font-bold text-text-main">
          Massivt træ — varme og karakter
        </h2>
        <PriceBar from={2000} to={5000} unit="kr./lbm." label="Massivt træ (eg, valnød)" />
        <p>
          Massivt træ er det eneste bordplademateriale, der tilføjer en naturlig varme og
          organisk fornemmelse til køkkenet. Eg er det mest populære valg i danske køkkener,
          efterfulgt af valnød og ask. Træet kan slibes og genbehandles flere gange i løbet af
          dets levetid, hvilket gør det til et bæredygtigt valg på lang sigt.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Fordele</h3>
        <ul>
          <li>Unik varme og karakter der ikke kan kopieres af kunstige materialer</li>
          <li>Kan slibes ned og genbehandles — forny overfladen efter 5-10 år</li>
          <li>Bæredygtigt valg — naturligt, fornybart materiale</li>
          <li>Skåner knive bedre end sten og kompositsten</li>
          <li>Udvikler en smuk patina over tid</li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Ulemper</h3>
        <ul>
          <li>Kræver regelmæssig oliering (2-4 gange årligt) for at holde fugt ude</li>
          <li>Tåler ikke stående vand — tør altid op straks</li>
          <li>Kan pletdannes af vin, rødbeder, citrus og stærke krydderier</li>
          <li>Bevæger sig med fugt og temperatur — kan svulme eller krympe</li>
          <li>Ikke egnet til områder omkring vask uden ekstra beskyttelse</li>
        </ul>

        {/* Fronter */}
        <h2 id="fronter" className="font-serif text-2xl font-bold text-text-main">
          Køkkenfronter — materialer sammenlignet
        </h2>
        <p>
          Fronterne udgør den største synlige flade i køkkenet og definerer stilen. Her er de
          mest udbredte frontmaterialer med fordele, ulemper og levetid:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Laminatfronter</h3>
        <p>
          Højtrykslaminat (HPL) påsat en MDF-kerne er et holdbart og prisvenligt valg. Moderne
          laminat fås i hundredvis af designs og tåler daglig brug godt. Overfladen er nem at
          rengøre og modstandsdygtig over for fugt og varme. Levetid: 15-20 år.
        </p>
        <PriceBar from={800} to={2000} unit="kr./front" label="Laminatfront" />

        <h3 className="font-serif text-xl font-bold text-text-main">Foliefronter</h3>
        <p>
          Foliefronter er den billigste løsning. En PVC-folie presses over en MDF-kerne og
          giver et glat, ensartet udtryk. Folien fås i mange farver og kan efterligne træ og
          andre materialer. Ulempen er, at folien kan skalle og boble ved høj varme — typisk
          nær ovn og opvaskemaskine. Levetid: 8-12 år.
        </p>
        <PriceBar from={500} to={1200} unit="kr./front" label="Foliefront" />

        <h3 className="font-serif text-xl font-bold text-text-main">Lakerede MDF-fronter</h3>
        <p>
          Lakerede fronter giver den glatteste og mest eksklusive overflade. MDF-kernen sprøjtemales
          i flere lag og slibes mellem hvert lag for et perfekt finish. Fås i alle RAL-farver og
          i mat, halvblank eller højglans. Lakerede fronter er smukkere end laminat og folie, men
          mere sårbare over for slag og ridser. Levetid: 15-20 år.
        </p>
        <PriceBar from={1500} to={3500} unit="kr./front" label="Lakeret MDF-front" />

        <h3 className="font-serif text-xl font-bold text-text-main">Massivt træ-fronter</h3>
        <p>
          Fronter i massivt træ (eg, ask, valnød) giver den mest autentiske og eksklusive
          kvalitetsfornemmelse. De kan slibes og genlakeres, hvilket forlænger levetiden
          markant. Massivt træ er det dyreste valg, men holder også længst. Levetid: 25-30+ år.
        </p>
        <PriceBar from={2500} to={6000} unit="kr./front" label="Massivt træ-front" />

        <h3 className="font-serif text-xl font-bold text-text-main">Finer-fronter</h3>
        <p>
          Finer er et tyndt lag ægte træ limet på en MDF-kerne. Det giver et naturligt
          træudtryk til en lavere pris end massivt træ. Finer kan lakeres eller oliebehandles
          og fås i samme træsorter som massive fronter. Ulempen er, at finer ikke kan slibes
          ned lige så mange gange som massivt træ. Levetid: 15-20 år.
        </p>
        <PriceBar from={1800} to={4000} unit="kr./front" label="Finer-front" />

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om køkkenmaterialer
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
