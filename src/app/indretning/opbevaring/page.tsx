import { SITE_URL } from "@/lib/constants";
import { ArticleSchema } from "@/components/JsonLd";
import { ArticleLayout } from "@/components/ArticleLayout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TipBox } from "@/components/TipBox";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opbevaring i Badeværelse — Smarte Løsninger",
  description:
    "Komplet guide til opbevaring i badeværelset. Vægmonterede skabe, niche-hylder, underskabe og kurve. Smarte løsninger til alle størrelser bad.",
  alternates: { canonical: `${SITE_URL}/indretning/opbevaring` },
};

const faqs = [
  {
    question: "Hvad er den bedste opbevaring til små badeværelser?",
    answer:
      "Til små badeværelser anbefales vægmonterede løsninger som svævende skabe, niche-hylder i brusenichen og spejlskabe med indbygget opbevaring. Udnyt den vertikale plads med høje, smalle skabe og brug dørmonteret opbevaring på indersiden af skabslåger.",
  },
  {
    question: "Hvilke materialer holder bedst i fugtige badeværelser?",
    answer:
      "Rustfrit stål, aluminium, teaktræ, bambus og fugtresistent MDF er de bedste materialer til badeværelsesopbevaring. Undgå ubehandlet spånplade og almindeligt MDF, da de svulmer ved fugt. Plastik og glas er også gode valg til kurve og hylder i vådrum.",
  },
  {
    question: "Hvordan organiserer man bedst badeværelsesskabe?",
    answer:
      "Brug inddelere og kurve til at gruppere produkter efter type — hudpleje, hårpleje, rengøring. Placer daglige produkter i øjenhøjde og sjældent brugte ting øverst eller nederst. Magnetiske lister til småting og sugekopper til svampe udnytter ellers spildt plads.",
  },
  {
    question: "Er niche-hylder i brusenichen en god idé?",
    answer:
      "Niche-hylder er en af de smarteste opbevaringsløsninger til brusekabinen. De er indfældet i væggen og tager ingen plads fra selve brusearealet. De bør planlægges inden vådrumssikringen udføres og kræver professionel installation. Typisk koster en niche 2.000-5.000 kr. inkl. montering.",
  },
  {
    question: "Hvor meget opbevaringsplads har man brug for i et badeværelse?",
    answer:
      "En tommelfingerregel er mindst 0,5 m³ opbevaringsplads per person i husstanden. Et par bør have minimum 1 m³, typisk fordelt på et underskab, et spejlskab og evt. et højskab. Familier med børn bør planlægge ekstra lavt placeret opbevaring.",
  },
];

export default function OpbevaringPage() {
  return (
    <>
      <ArticleSchema
        title="Opbevaring i Badeværelse — Smarte Løsninger"
        description="Komplet guide til opbevaring i badeværelset. Vægmonterede skabe, niche-hylder, underskabe og kurve."
        url="/indretning/opbevaring"
        datePublished="2025-06-01"
        dateModified="2026-03-15"
      />

      <ArticleLayout
        breadcrumbs={[
          { label: "Indretning", href: "/indretning" },
          { label: "Opbevaring" },
        ]}
        title="Opbevaring i Badeværelse — Smarte Løsninger"
        intro="Et ryddeligt badeværelse starter med god opbevaring. Uanset om du har et lille gæstetoilet eller et stort familiebad, findes der smarte løsninger, der holder styr på shampoo, håndklæder og alt derimellem. Her gennemgår vi de mest populære opbevaringstyper og giver dig konkrete tips til at optimere pladsen."
        readingTime={9}
        tocItems={[
          { id: "typer", label: "Typer af opbevaring" },
          { id: "smaa-bad", label: "Opbevaring i små bad" },
          { id: "materialer", label: "Materialer til fugtige rum" },
          { id: "organisation", label: "Organisering" },
          { id: "faq", label: "Ofte stillede spørgsmål" },
        ]}
        relatedArticles={[
          {
            title: "Badeværelse Møbler",
            href: "/indretning/mobler",
            description: "Guide til skabe, hylder og møbler til badeværelset.",
          },
          {
            title: "Lille Badeværelse",
            href: "/indretning/lille-badevaerelse",
            description: "Idéer til indretning og pladsoptimering af små bad.",
          },
        ]}
      >
        <img
          src="/images/content/opbevaring.png"
          alt="Smarte opbevaringsløsninger i moderne badeværelse"
          className="w-full h-auto rounded-xl mb-8"
          loading="lazy"
        />

        {/* Typer af opbevaring */}
        <h2 id="typer" className="font-serif text-2xl font-bold text-text-main">
          Typer af opbevaring til badeværelset
        </h2>
        <p>
          Der findes mange forskellige måder at skabe opbevaring i badeværelset. De bedste løsninger
          afhænger af rummets størrelse, layout og dine daglige behov. Her er de mest populære typer:
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Vægmonterede skabe</h3>
        <p>
          Vægmonterede — eller svævende — skabe er den mest populære opbevaringsløsning i moderne
          danske badeværelser. De monteres direkte på væggen og frigør gulvplads, hvilket gør rummet
          lettere at rengøre og visuelt mere åbent. Et vægmonteret underskab under håndvasken giver
          typisk 30-60 liter opbevaringsplads og skjuler samtidig vandrør og afløb.
        </p>
        <p>
          Spejlskabe kombinerer spejl og opbevaring i ét og er ideelle til småting som tandpasta,
          medicin og kosmetik. De bedste modeller har integreret LED-belysning og stikkontakt, så
          du kan oplade eltandbørste og barbermaskine inde i skabet.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Niche-hylder i væggen</h3>
        <p>
          En indfældet niche i brusenichen er en af de smarteste opbevaringsløsninger, du kan vælge.
          Den udnytter pladsen inde i væggen, så du ikke mister nogen kvadratcentimeter af
          brusearealet. Nicher er typisk 30-40 cm brede og 15-20 cm dybe og kan rumme shampoo,
          sæbe og barberskum.
        </p>
        <p>
          Nicher skal planlægges, inden vådrumssikringen udføres, da de kræver professionel
          udsparinger i væggen. Prismæssigt ligger en enkelt niche på 2.000-5.000 kr. inkl.
          montering. Dobbelte nicher eller nicher med hylde indeni koster lidt mere, men giver
          markant bedre opbevaring.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Underskabe til håndvask</h3>
        <p>
          Underskabet er badeværelsets arbejdshest. Det gemmer rør og sifon og giver samtidig plads
          til rengøringsmidler, ekstra toiletpapir og andre forbrugsvarer. Vælg et skab med
          udtræksskuffer frem for hylder — skuffer giver bedre overblik og nemmere adgang til
          tingene bagerst.
        </p>
        <p>
          Moderne underskabe fås i bredder fra 40 cm til 160 cm (til dobbelt håndvask). De bedste
          modeller har softclose-beslag, der forhindrer smæk, og fugtresistent bund, der tåler de
          uundgåelige dryp fra vandrør.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Kurve og beholdere</h3>
        <p>
          Flettede kurve i bambus, søgræs eller rattan er en enkel og dekorativ måde at tilføje
          opbevaring på. De er perfekte til håndklæder, vasketøj eller toiletpapir-ruller. Vælg
          kurve med foering, så snavs og fugt ikke trænger igennem.
        </p>
        <p>
          Til brusenichen kan du bruge rustfrie trådkurve med sugekop-montering, der nemt flyttes
          og rengøres. De er et godt alternativ til faste nicher, hvis du ikke vil i gang med at
          hugge i væggen.
        </p>

        {/* Små bad */}
        <h2 id="smaa-bad" className="font-serif text-2xl font-bold text-text-main">
          Opbevaring i små badeværelser
        </h2>
        <p>
          I et lille badeværelse tæller hver centimeter. Her er de mest effektive tricks til at
          maksimere opbevaringen, når pladsen er begrænset:
        </p>
        <ul>
          <li>
            <strong>Udnyt den vertikale plads.</strong> Et højt, smalt højskab (30-40 cm bredt) kan
            rumme overraskende meget. Placer det i et hjørne eller ved siden af døren, hvor det
            tager mindst gulvplads.
          </li>
          <li>
            <strong>Brug døren.</strong> Dørmonterede kroge og smalle hylder på indersiden af
            skabslåger giver ekstra plads til hårtørrer, håndklæder og smårammer.
          </li>
          <li>
            <strong>Spejlskab frem for fladt spejl.</strong> Et spejlskab giver typisk 15-30 liter
            ekstra opbevaring uden at tage yderligere vægplads.
          </li>
          <li>
            <strong>Over-toilet-hylder.</strong> Pladsen over toilettet er ofte underudnyttet. Et
            smalt hyldesystem eller et lille overskab kan rumme reserveruller, rengøring og
            håndklæder.
          </li>
          <li>
            <strong>Magnetisk opbevaring.</strong> Magnetlister på væggen kan holde pincetter,
            negleklipper og andre småting af metal, som ellers roder i skuffer.
          </li>
        </ul>

        <TipBox variant="tip" title="Organisation i små badeværelser">
          <p>
            Brug gennemsigtige beholdere, så du hurtigt kan se indholdet. Mærk skuffer og kurve
            med etiketter, så alle i husstanden ved, hvor tingene hører til. Ryd op én gang om
            måneden og smid udgåede produkter ud — det gør en overraskende stor forskel.
          </p>
        </TipBox>

        {/* Materialer */}
        <h2 id="materialer" className="font-serif text-2xl font-bold text-text-main">
          Materialevalg til fugtige rum
        </h2>
        <p>
          Badeværelset er et af de mest krævende rum i boligen, hvad angår materialer. Høj
          luftfugtighed, vandstænk og temperatursvingninger stiller særlige krav til opbevaringsmøbler
          og hylder. Vælger du forkert, risikerer du at skuffer svulmer, overflader skaller og
          beslag ruster.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Gode materialer</h3>
        <ul>
          <li>
            <strong>Fugtresistent MDF</strong> med lakeret eller folieret overflade — det mest
            populære valg til badeværelsesmøbler. Tåler fugt langt bedre end standard MDF.
          </li>
          <li>
            <strong>Teaktræ</strong> — naturligt vandafvisende og holdbart. Kræver minimalt
            vedligehold. Dyrest af træsorterne, men holder årtier.
          </li>
          <li>
            <strong>Bambus</strong> — bæredygtigt, naturligt fugtresistent og prisvenligt.
            Populært til hylder og kurve.
          </li>
          <li>
            <strong>Rustfrit stål og aluminium</strong> — perfekt til hylder, kroge og beslag.
            Ruster ikke og tåler direkte vandkontakt.
          </li>
          <li>
            <strong>Glas</strong> — hygiejnisk, nemt at rengøre og tidsløst. Populært til hylder
            og spejlskabe.
          </li>
        </ul>

        <h3 className="font-serif text-xl font-bold text-text-main">Materialer du bør undgå</h3>
        <ul>
          <li>
            <strong>Ubehandlet spånplade</strong> — svulmer hurtigt ved fugt og kan ikke repareres.
          </li>
          <li>
            <strong>Almindeligt MDF</strong> uden fugtresistent kerne — absorberer vand og mister
            styrke.
          </li>
          <li>
            <strong>Jernbeslag uden coating</strong> — ruster i løbet af måneder i et fugtigt
            badeværelse.
          </li>
          <li>
            <strong>Ubehandlet træ</strong> (undtaget teak) — kan vrides, revne og mugne uden
            korrekt behandling.
          </li>
        </ul>

        {/* Organisation */}
        <h2 id="organisation" className="font-serif text-2xl font-bold text-text-main">
          Sådan organiserer du badeværelset
        </h2>
        <p>
          Selv det mest veldesignede badeværelse kan føles rodet, hvis tingene ikke har en fast
          plads. God organisation handler om systemer, der er nemme at opretholde i hverdagen — ikke
          Instagram-perfekte arranglementer, der kollapser efter en uge.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Zoneinddeling</h3>
        <p>
          Del dine badeværelsesting op i zoner baseret på brug: daglig pleje (tandpasta, ansigtscreme),
          badning/bruser (shampoo, sæbe), rengøring (rengøringsmidler, svampe) og reserve
          (ekstra toiletpapir, håndklæder). Opbevar hver zone tæt på det sted, hvor produkterne
          bruges.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Skuffeinddeling</h3>
        <p>
          Løse ting i en dyb skuffe er en opskrift på kaos. Brug skuffeinddelere — enten
          færdigkøbte eller hjemmelavede af små kasser — til at opdele skuffen i sektioner. En
          typisk vaskeskuffe kan med fordel inddeles i 4-6 sektioner: tandpleje, ansigtpleje,
          hårprodukter, barbering, medicin og diverse.
        </p>

        <h3 className="font-serif text-xl font-bold text-text-main">Regelmæssig oprydning</h3>
        <p>
          Sæt en fast dato hvert kvartal til at gennemgå badeværelsesopbevaring. Tjek
          udløbsdatoer på medicin og kosmetik, smid halvtomme flasker ud og giv produkter du ikke
          bruger videre. De fleste danske familier opbevarer 30-50% flere produkter end de
          reelt bruger — en grundig oprydning kan frigøre overraskende meget plads.
        </p>

        <TipBox variant="anbefaling" title="Den hurtige morgenrutine">
          <p>
            Placer de 5-7 produkter du bruger hver morgen i en separat kurv eller på en dedikeret
            hylde i øjenhøjde. Alt andet gemmes væk. Det sparer tid i den travle morgenrutine og
            holder overflader fri for rod.
          </p>
        </TipBox>

        {/* FAQ */}
        <h2 id="faq" className="font-serif text-2xl font-bold text-text-main">
          Ofte stillede spørgsmål om opbevaring i badeværelset
        </h2>
        <FAQAccordion faqs={faqs} className="mt-4" />
      </ArticleLayout>
    </>
  );
}
