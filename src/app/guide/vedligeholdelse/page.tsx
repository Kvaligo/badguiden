import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import { PullQuote } from "@/components/PullQuote";
import { guides } from "@/data/guides";
import type { Metadata } from "next";
import Link from "next/link";

const guide = guides.find((g) => g.slug === "vedligeholdelse")!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: {
    canonical: `${SITE_URL}/guide/vedligeholdelse`,
  },
};

export default function VedligeholdelsePage() {
  return (
    <>
      <ArticleSchema
        title={guide.title}
        description={guide.metaDescription}
        url="/guide/vedligeholdelse"
        datePublished="2025-01-15"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Guides", href: "/guide" },
          { label: "Vedligeholdelse" },
        ]}
        title="Vedligeholdelse af Badeværelse — Hold Dit Bad Nyt"
        intro="Med den rette vedligeholdelse kan dit badeværelse holde sig flot og funktionelt i 15-20 år. Det kræver ikke meget tid — men det kræver regelmæssighed. Her får du den komplette guide til daglig, ugentlig og månedlig pleje."
        readingTime={guide.readingTime}
        tocItems={[
          { id: "daglig", label: "Daglig vedligeholdelse" },
          { id: "ugentlig", label: "Ugentlig rengøring" },
          { id: "maanedlig", label: "Månedlig pleje" },
          { id: "materialer", label: "Pleje efter materialetype" },
          { id: "forebyg", label: "Forebyg skimmel & kalk" },
          { id: "hvornaar-renovere", label: "Vedligehold vs. renovering" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Vådrumssikring — Krav & Regler",
            href: "/guide/vaadrumssikring",
            description: "Hvorfor vådrumssikring er så vigtig.",
          },
          {
            title: "10 Fejl Du Skal Undgå",
            href: "/guide/fejl-at-undgaa",
            description: "Typiske fejl der forkorter badeværelsets levetid.",
          },
          {
            title: "Trends 2026",
            href: "/guide/trends-2026",
            description: "De nyeste trends i badeværelse-design.",
          },
        ]}
      >
        <img
          src="/images/content/vedligeholdelse.png"
          alt="Rengøring og vedligeholdelse af moderne badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Daglig */}
        <h2 id="daglig" className="scroll-mt-24">
          Daglig vedligeholdelse (2-3 minutter)
        </h2>
        <p>
          De vigtigste vaner der holder dit badeværelse i topstand kræver kun
          få minutter om dagen. Det handler primært om at fjerne overfladevand
          så det ikke sætter sig som kalk og fugt.
        </p>
        <ul>
          <li>
            <strong>Tør bruse-glasset af</strong> med en skraber efter hvert
            bad. Det tager 30 sekunder og forhindrer kalkafsætninger der
            ellers kræver kemikalier at fjerne.
          </li>
          <li>
            <strong>Tør vanddråber af armatur</strong> med en blød klud.
            Stående vand på armatur efterlader kalkpletter.
          </li>
          <li>
            <strong>Luft ud</strong> efter brusebad — åbn vindue eller tænd
            udsugning i minimum 15 minutter. Det reducerer luftfugtigheden
            og forebygger skimmel.
          </li>
          <li>
            <strong>Hæng håndklæder til tørre</strong> spredt ud (ikke
            sammenfoldet) for hurtigere tørring og mindre mugrisiko.
          </li>
        </ul>

        <TipBox variant="tip" title="Investér i en god bruse-skraber">
          <p>
            En skraber i silikone eller rustfrit stål er den bedste
            investering til badeværelset. 30 sekunders daglig brug sparer dig
            for timer med kalkrenses om måneden. Hæng den fast i bruseren så
            det bliver en vane.
          </p>
        </TipBox>

        {/* Ugentlig */}
        <h2 id="ugentlig" className="scroll-mt-24">
          Ugentlig rengøring (20-30 minutter)
        </h2>
        <p>
          Én gang om ugen bør du gøre en grundigere rengøring:
        </p>
        <ol>
          <li>
            <strong>Toilettet:</strong> Rens skålen med toiletbørste og
            rengøringsmiddel. Tør sæde, cisterne og ydersider af med en
            desinficerende klud.
          </li>
          <li>
            <strong>Håndvasken:</strong> Rens med en blød svamp og
            baderensemiddel. Skyl grundigt og tør af for at undgå kalkspor.
            Rens afløbet med en børste.
          </li>
          <li>
            <strong>Bruseareal:</strong> Spray vægge og gulv med
            badeværelsesrens, lad virke 5 minutter og skyl af. Brug en blød
            børste på fuger.
          </li>
          <li>
            <strong>Spejl:</strong> Rengør med glasrens eller en blanding af
            vand og lidt eddike. Tør af med en mikrofiberklud for stribefrit
            resultat.
          </li>
          <li>
            <strong>Gulv:</strong> Vask med en klud og mildt
            rengøringsmiddel. Undgå store mængder vand der kan trænge ned i
            fuger.
          </li>
        </ol>

        {/* Månedlig */}
        <h2 id="maanedlig" className="scroll-mt-24">
          Månedlig dybdepleje (30-45 minutter)
        </h2>
        <p>
          Én gang om måneden bør du give badeværelset en grundigere
          behandling:
        </p>
        <ul>
          <li>
            <strong>Afkalkning af bruser og armatur:</strong> Skru
            brusehovedet af og læg det i en skål med lige dele eddike og varmt
            vand i 30 minutter. Skyl grundigt. Spray armatur med
            afkalkningsmiddel.
          </li>
          <li>
            <strong>Dybderens af fuger:</strong> Brug en tandbørste med
            natron-pasta (natron + lidt vand) på misfarvede fuger. Lad virke
            15 minutter og skrub. Skyl grundigt.
          </li>
          <li>
            <strong>Afløbsrensning:</strong> Hæld kogende vand i afløbet
            efterfulgt af en kop natron og en halv kop eddike. Lad bruse i 15
            minutter og skyl efter med varmt vand.
          </li>
          <li>
            <strong>Ventilationsrist:</strong> Tag risten af og vask den i
            varmt sæbevand. Tør kanalen af med en klud. En tilstoppet
            ventilation forringer luftskiftet markant.
          </li>
          <li>
            <strong>Tjek silikone-fuger:</strong> Inspicér alle
            silikone-fuger for misfarvning, revner eller løsnen. Defekte
            fuger bør udskiftes snarest for at undgå vandindtrængning.
          </li>
        </ul>

        <TipBox variant="anbefaling" title="Naturlige rengøringsmidler virker">
          <p>
            Du behøver ikke dyre specialprodukter til den månedlige pleje.
            Hvid eddike, natron og citronsaft er effektive mod kalk, fedt og
            milde misfarvninger. De er desuden mere skånsomme mod fuger og
            overflader end aggressive kemikalier.
          </p>
        </TipBox>

        {/* Materialspecifik pleje */}
        <h2 id="materialer" className="scroll-mt-24">
          Pleje efter materialetype
        </h2>

        <h3>Fliser (keramik og porcelæn)</h3>
        <p>
          Fliser er generelt meget nemme at vedligeholde. Selve flisen er
          næsten uforgængelig — det er fugerne der kræver opmærksomhed.
        </p>
        <ul>
          <li>Brug pH-neutral rengøring til daglig brug</li>
          <li>Undgå syreholdige produkter på cement-fuger (nedbryder dem)</li>
          <li>Forsegl fuger med fugeimprægnering hvert 1-2 år</li>
          <li>Udskift silikone-fuger ved første tegn på mug eller løsnen</li>
        </ul>

        <h3>
          <Link href="/materialer/microcement" className="text-primary hover:underline">
            Microcement
          </Link>
        </h3>
        <p>
          Microcement kræver mere opmærksomhed end fliser, men belønner dig
          med et vedvarende flot udtryk:
        </p>
        <ul>
          <li>Rengør kun med pH-neutral sæbe — aldrig eddike eller syre</li>
          <li>Genforsegl med specialvoks hvert 6-12 måneder</li>
          <li>Påfør ny sealer hvert 2-3 år (afhængig af slidtage)</li>
          <li>Tør straks op ved spild af farvestoffer (kaffe, rødvin, hårfarve)</li>
          <li>Undgå slibende svampe og skurepulver</li>
        </ul>

        <h3>
          <Link href="/materialer/natursten" className="text-primary hover:underline">
            Natursten (marmor, granit, skifer)
          </Link>
        </h3>
        <p>
          Natursten er porøst og kræver ekstra omhu:
        </p>
        <ul>
          <li>Brug kun specialrens til natursten (aldrig eddike eller syrer!)</li>
          <li>Imprægnér overfladen 1-2 gange årligt</li>
          <li>Tør straks op ved vandpytter — stående vand kan give pletter</li>
          <li>Marmor er særligt sårbart over for syrer (citronsaft, eddike, kalk-fjernere)</li>
        </ul>

        <h3>Armatur (krom, sort, messing)</h3>
        <ul>
          <li>
            <strong>Krom:</strong> Tør dagligt, afkalk månedligt med mild
            eddike. Undgå slibende svampe.
          </li>
          <li>
            <strong>Sort (mat):</strong> Meget synlige kalkpletter — tør
            efter hver brug. Brug kun bløde klude.
          </li>
          <li>
            <strong>Messing:</strong> Udvikler patina med tiden. Hvis du
            ønsker blankt look, brug messing-polish hvert kvartal.
          </li>
        </ul>

        {/* Forebyg skimmel & kalk */}
        <h2 id="forebyg" className="scroll-mt-24">
          Forebyg skimmel og kalkaflejringer
        </h2>

        <h3>Skimmelforebyggelse</h3>
        <p>
          Skimmelsvamp trives i fugtige, varme og dårligt ventilerede
          miljøer. De tre vigtigste våben er:
        </p>
        <ol>
          <li>
            <strong>Ventilation:</strong> Sørg for effektiv udsugning og luft
            ud efter hvert bad. Ideelt bør luftfugtigheden i badeværelset
            ligge under 70% i løbet af 30 minutter efter brusebad.
          </li>
          <li>
            <strong>Tørring:</strong> Fjern stående vand fra overflader. Tør
            glasvægge, fliser og armatur efter brug.
          </li>
          <li>
            <strong>Vedligehold fuger:</strong> Intakte fuger er den bedste
            barriere. Udskift defekte fuger hurtigt.
          </li>
        </ol>

        <h3>Kalkforebyggelse</h3>
        <p>
          Kalkafsætninger skyldes hårdt vand, som er normalt i store dele af
          Danmark. Her er de bedste strategier:
        </p>
        <ul>
          <li>Tør alle overflader efter vandkontakt (den vigtigste vane)</li>
          <li>Overvej en vandblødgøringsanlæg hvis dit vand er meget hårdt (over 20 dH)</li>
          <li>Brug afkalkningsmiddel regelmæssigt inden kalken opbygger sig</li>
          <li>Overflader med nano-coating (fx behandlet glas) gør rengøring nemmere</li>
        </ul>

        <PullQuote
          quote="Forebyggelse er altid billigere end reparation. 5 minutters daglig pleje sparer dig for dyre kemikalier, beskadigede overflader og i værste fald en for tidlig renovering."
        />

        {/* Vedligehold vs. renovering */}
        <h2 id="hvornaar-renovere" className="scroll-mt-24">
          Hvornår skal du vedligeholde — og hvornår er det tid til renovering?
        </h2>
        <p>
          Ikke alt kan klares med rengøring. Her er tommelfingerreglerne:
        </p>

        <h3>Vedligehold er nok når:</h3>
        <ul>
          <li>Fuger er let misfarvede men stadig intakte (kan renses)</li>
          <li>Silikone er begyndt at gulne (kan udskiftes for 500-1.500 kr.)</li>
          <li>Armatur drypper let (ny pakning/kartuche: 500-2.000 kr.)</li>
          <li>Overflader har overfladiske kalkspor (grundig rengøring)</li>
          <li>Maling skaller i loftet (ny omgang maling: 1.000-3.000 kr.)</li>
        </ul>

        <h3>Det er tid til renovering når:</h3>
        <ul>
          <li>Fuger er revnede, porøse eller muggne i dybden</li>
          <li>Fliser er løse, revnede eller begynder at falde af</li>
          <li>Der er synlige tegn på fugt bag fliser (misfarvning, opblæring)</li>
          <li>Vandet løber langsomt væk (faldproblemer eller tilstoppet afløb)</li>
          <li>Vådrumssikringen er over 20 år gammel eller af tvivlsom kvalitet</li>
          <li>Skimmelsvamp vender konstant tilbage trods rengøring</li>
        </ul>

        <TipBox variant="obs" title="Advarselstegn du ikke bør ignorere">
          <p>
            Misfarvning eller opblæring på vægge bag fliser, vedvarende muglugt
            og fugt i tilstødende rum er alvorlige tegn på, at vådrumssikringen
            svigter. Kontakt en fagmand omgående — jo længere du venter, jo
            dyrere bliver reparationen.
          </p>
        </TipBox>

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-24">
          Ofte stillede spørgsmål
        </h2>
        <FAQAccordion faqs={guide.faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
