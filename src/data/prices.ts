import type { PriceComparison } from "./types";

export const priceComparisons: PriceComparison[] = [
  {
    slug: "microcement-vs-fliser",
    name: "Microcement vs. Fliser",
    title: "Microcement vs. Fliser — Pris, Holdbarhed & Udtryk",
    metaTitle: "Microcement vs. Fliser: Pris & Sammenligning 2026",
    metaDescription:
      "Microcement eller fliser i badeværelset? Se den komplette sammenligning af pris, holdbarhed, vedligeholdelse og udtryk. Hvad er bedst for dig?",
    description:
      "Valget mellem microcement og fliser er en af de hyppigste beslutninger ved badeværelserenovering. Microcement tilbyder et moderne, fugeløst look, mens fliser giver uovertruffen holdbarhed og et enormt designudvalg. Begge materialer har deres styrker — og prismæssigt er forskellen måske mindre, end du tror. Her er den ærlige sammenligning.",
    optionA: {
      name: "Microcement",
      priceFrom: 800,
      priceTo: 1500,
      pros: [
        "Fugeløst, hygiejnisk udtryk uden fuger der kan samle skimmel",
        "Moderne, minimalistisk æstetik der passer til skandinavisk stil",
        "Kan påføres ovenpå eksisterende fliser — sparer nedrivning",
        "Unikke, håndlavede overflader med karakter",
      ],
      cons: [
        "Kræver professionel påføring — ikke DIY-venligt",
        "Skal genforseges hvert 2-3 år for at bevare vandafvisning",
        "Kan revne ved bevægelser i underlaget",
        "Kortere dokumenteret levetid end fliser (15-20 år vs. 30+ år)",
      ],
    },
    optionB: {
      name: "Fliser",
      priceFrom: 300,
      priceTo: 1200,
      pros: [
        "Dokumenteret holdbarhed i 30+ år med minimal vedligeholdelse",
        "Enormt udvalg i farver, formater og designs",
        "Prisvenligt i budgetenden — gode fliser fra 300 kr/m2",
        "Kan udføres af de fleste murere og flisemænd",
      ],
      cons: [
        "Fuger kræver vedligeholdelse og kan misfarves over tid",
        "Mere tidskrævende at lægge korrekt",
        "Svært at reparere enkeltfliser uden synlige forskelle",
        "Kan virke utidssvarende, hvis man vælger kortlivede trends",
      ],
    },
    faqs: [
      {
        question: "Hvad er billigst — microcement eller fliser?",
        answer:
          "Fliser er typisk billigst i den samlede beregning. Standard fliser koster fra 300 kr/m2 mod microcementens 800 kr/m2. Men beregningen er mere nuanceret: microcement sparer nedrivning af gamle fliser (5.000-10.000 kr.), kræver ingen fugemasse, og påføringstiden er ofte kortere. For et 8 m2 badeværelse er forskellen typisk 10.000-25.000 kr. i flisers favør ved ny installation.",
      },
      {
        question: "Hvad holder bedst — microcement eller fliser?",
        answer:
          "Fliser vinder på holdbarhed med en levetid på 30+ år mod microcementens 15-20 år. Fliser kræver kun fugevedligeholdelse, mens microcement skal genforseges regelmæssigt. Til gengæld kan microcement repareres lokalt ved skader, mens en beskadiget flise er svær at udskifte usynligt. Begge materialer kræver korrekt vådrumssikring for at beskytte konstruktionen.",
      },
      {
        question: "Hvad er nemmest at rengøre — microcement eller fliser?",
        answer:
          "Microcement er nemmest at rengøre i det daglige, da der ingen fuger er, hvor snavs og skimmel kan samle sig. En hurtig aftørring med fugtig klud er ofte tilstrækkeligt. Fliser kræver mere fokus på fugerengøring, især i vådzone. Til gengæld er fliser mere robuste over for rengøringsmidler — microcement kræver pH-neutrale produkter for at bevare forseglingen.",
      },
      {
        question: "Kan man kombinere microcement og fliser?",
        answer:
          "Ja, og det er faktisk en populær løsning. En typisk kombination er microcement på vægge for det fugeløse look og fliser på gulvet for slidstyrke og skridsikkerhed. Andre kombinerer microcement i tørre zoner med fliser i brusenichen for ekstra vandtæthed. Kombination giver det bedste fra begge verdener og kan balancere budgettet, da du begrænser microcement til synlige flader.",
      },
      {
        question: "Hvad anbefaler fagfolk — microcement eller fliser?",
        answer:
          "De fleste fagfolk anbefaler fliser som det sikre valg for badeværelser med hård belastning (familiebadeværelser, gæstebadeværelser). Microcement anbefales til design-orienterede projekter med moderat brug (master-badeværelser, suite-badeværelser). Fagfolk understreger, at microcement kræver en erfaren påfører — vælg altid en virksomhed med dokumenteret erfaring og referencer specifikt i microcement til vådrum.",
      },
    ],
    relatedSlugs: ["brusekabine-vs-brusevaeg", "pr-kvadratmeter", "budget-vs-luksus"],
  },
  {
    slug: "brusekabine-vs-brusevaeg",
    name: "Brusekabine vs. Brusevæg",
    title: "Brusekabine vs. Brusevæg — Hvad Skal Du Vælge?",
    metaTitle: "Brusekabine vs. Brusevæg: Pris & Sammenligning",
    metaDescription:
      "Brusekabine eller brusevæg? Se den komplette sammenligning af pris, praktik og design. Find det rigtige valg til dit badeværelse.",
    description:
      "Brusekabine eller brusevæg — valget påvirker både badeværelsets funktionalitet og æstetik markant. En brusekabine giver fuld afskærmning og holder vandet inde, mens en brusevæg giver et åbent, moderne udtryk. Hvad der er bedst for dig afhænger af dit badeværelses størrelse, layout og dine personlige præferencer.",
    optionA: {
      name: "Brusekabine",
      priceFrom: 3000,
      priceTo: 15000,
      pros: [
        "Fuld afskærmning holder alt vand inde i bruseområdet",
        "Mange konfigurationer: hjørne, firkant, halvrund, walk-in",
        "Mulighed for dampfunktion i lukkede kabiner",
        "Bedre til badeværelser hvor gulvet ikke er 100% vandtæt udenfor brusen",
      ],
      cons: [
        "Mere lukkede — kan virke klodset i små badeværelser",
        "Flere dele der skal rengøres (skinner, tætninger, dørhængsler)",
        "Dyrere end en simpel brusevæg",
        "Tætninger og skinner slider og skal udskiftes over tid",
      ],
    },
    optionB: {
      name: "Brusevæg",
      priceFrom: 2000,
      priceTo: 8000,
      pros: [
        "Åbent, moderne og minimalistisk udtryk",
        "Lettere at rengøre — ingen skinner, tætninger eller dør",
        "Billigere end en fuld brusekabine",
        "Gør rummet visuelt større med transparent glas",
      ],
      cons: [
        "Vandsprøjt uden for bruseområdet er uundgåeligt",
        "Kræver niveaufrit gulv med korrekt fald og afløb",
        "Mindre privathed end en lukket kabine",
        "Kan være trækfølsomt uden fuld afskærmning",
      ],
    },
    faqs: [
      {
        question: "Hvad er billigst — brusekabine eller brusevæg?",
        answer:
          "En brusevæg er typisk billigere. En standard brusevæg i 8 mm klart glas koster 2.000-5.000 kr., mens en sammenlignelig brusekabine koster 4.000-10.000 kr. Montering af begge koster ca. 1.500-3.000 kr. Den samlede besparelse ved brusevæg er typisk 2.000-5.000 kr. Dog kræver en brusevæg ofte investering i niveaufrit gulv med lineært afløb, som kan koste ekstra ved renovering.",
      },
      {
        question: "Hvad er bedst til et lille badeværelse?",
        answer:
          "I et lille badeværelse er en brusevæg typisk det bedste valg. Den visuelle åbenhed får rummet til at virke større, og det simple design optager mindre visuel plads. Vælg klart glas (ikke frostet) for maksimal transparens. En brusevæg på 80-100 cm bredde er tilstrækkeligt i de fleste tilfælde. Hvis du er bekymret for vandsprøjt, kan en brusevæg med kort svingarm give det bedste fra begge verdener.",
      },
      {
        question: "Hvilken løsning er nemmest at rengøre?",
        answer:
          "Brusevæggen er markant nemmere at rengøre. Den har kun ét glaspanel uden skinner, tætninger eller gummilister, hvor kalk og snavs kan samle sig. En brusekabine har typisk 2-4 meter tætningslister, skinner i top og bund, og dørmekanisme, der alle kræver rengøring. Med easy-clean coating på glasset tager daglig rengøring af en brusevæg under ét minut.",
      },
      {
        question: "Kan en brusevæg bruges uden brusebund?",
        answer:
          "Ja, og det er faktisk den mest populære installation. En brusevæg kombineres typisk med et niveaufrit gulv, hvor gulvet har fald mod et lineært afløb. Det giver et sammenhængende gulv uden brusebund eller kant, hvilket er både æstetisk og tilgængelighedsmæssigt bedst. Det kræver korrekt gulvkonstruktion med minimum 2% fald mod afløbet og tæt vådrumssikring på hele gulvarealet.",
      },
      {
        question: "Hvornår er en brusekabine det bedre valg?",
        answer:
          "En brusekabine er bedst, når: 1) Gulvet uden for brusen ikke har fald mod afløb (ældre badeværelser). 2) Du ønsker en dampbruse-funktion. 3) Der er stærk træk i badeværelset (f.eks. ved vindue). 4) Du ønsker fuld privathed med frostet glas. 5) Badeværelset deles med andre, og du vil minimere vandsprøjt. I disse tilfælde er den ekstra investering i en brusekabine godt givet ud.",
      },
    ],
    relatedSlugs: ["microcement-vs-fliser", "pr-kvadratmeter", "budget-vs-luksus"],
  },
  {
    slug: "pr-kvadratmeter",
    name: "Pris pr. m2",
    title: "Badeværelse Pris pr. m2 — Komplet Prisoversigt 2026",
    metaTitle: "Badeværelse Pris pr. m2: Komplet Oversigt 2026",
    metaDescription:
      "Se hvad et nyt badeværelse koster pr. m2 i Danmark. Komplet prisoversigt for materialer, håndværk og inventar. Beregn dit budget med vores guide.",
    description:
      "Den mest retvisende måde at sammenligne badeværelsespriser på er pris pr. kvadratmeter. Et dansk badeværelse koster i gennemsnit 12.000-25.000 kr. pr. m2 ved komplet renovering, men spændet er enormt afhængigt af materialevalg og kvalitetsniveau. Denne guide giver dig det fulde overblik, så du kan beregne et realistisk budget.",
    optionA: {
      name: "Budget renovering",
      priceFrom: 8000,
      priceTo: 14000,
      pros: [
        "Realistisk budget for funktionelt, pænt badeværelse",
        "Standard fliser, inventar og armatur fra kendte mærker",
        "Plads i budgettet til professionel vådrumssikring",
        "Gode resultater med omhyggelig planlægning",
      ],
      cons: [
        "Begrænset materialevalg — standard fliser og porcelæn",
        "Mindre mulighed for specialløsninger og tilpasning",
        "Budgetarmatur holder typisk 8-12 år mod 15-20 for kvalitet",
        "Kræver kompromiser på finish og detaljer",
      ],
    },
    optionB: {
      name: "Premium renovering",
      priceFrom: 18000,
      priceTo: 30000,
      pros: [
        "Frit materialevalg — natursten, designerfliser, microcement",
        "Kvalitetsarmatur og -inventar med lang holdbarhed",
        "Mulighed for specialløsninger og skræddersyet design",
        "Højere finish-niveau med opmærksomhed på detaljer",
      ],
      cons: [
        "Væsentligt højere investering",
        "Længere leveringstid på specialprodukter",
        "Risiko for at overinvestere i forhold til boligens værdi",
        "Dyrere vedligeholdelse af premium-materialer",
      ],
    },
    faqs: [
      {
        question: "Hvad koster et nyt badeværelse pr. m2 i Danmark?",
        answer:
          "En komplet badeværelserenovering koster typisk 12.000-25.000 kr. pr. m2 i Danmark. Det inkluderer nedrivning, vådrumssikring, overflader, VVS, el, inventar og håndværk. Budget: 8.000-14.000 kr/m2. Mellemklasse: 14.000-20.000 kr/m2. Premium: 20.000-30.000+ kr/m2. For et standard badeværelse på 6-8 m2 svarer det til en samlet investering på 70.000-200.000 kr.",
      },
      {
        question: "Hvad koster de forskellige materialer pr. m2?",
        answer:
          "Overfladematerialer pr. m2 (kun materiale): Fliser: 300-1.200 kr. Klinker: 250-800 kr. Microcement: 800-1.500 kr. Silkecement: 600-1.200 kr. Terrazzo (in-situ): 900-2.000 kr. Natursten: 1.200-3.000 kr. Dertil kommer klæber/primer (50-150 kr/m2), fugemasse (30-80 kr/m2) og arbejdsløn for opsætning/påføring (400-1.200 kr/m2).",
      },
      {
        question: "Hvordan fordeles omkostningerne ved en renovering?",
        answer:
          "Typisk fordeling af et renoveringsbudget: Håndværk (arbejdsløn): 40-50%. Materialer (fliser, klæber, vådrumssikring): 20-25%. Inventar (vask, toilet, bruser): 15-20%. Armatur og tilbehør: 5-10%. Uforudsete udgifter: 10-15%. Det er håndværket, der udgør den største andel, ikke materialerne. Derfor er det vigtigt at prioritere god håndværkskvalitet — det er her, fejl koster mest.",
      },
      {
        question: "Er det billigere at renovere et stort badeværelse pr. m2?",
        answer:
          "Ja, prisen pr. m2 falder typisk med størrelsen, da mange faste omkostninger (VVS-tilslutning, el-arbejde, transport, op-/nedrigging) fordeles på flere kvadratmeter. Et 4 m2 badeværelse kan koste 18.000-25.000 kr/m2, mens et 12 m2 badeværelse kan ligge på 12.000-18.000 kr/m2. Inventar (toilet, vask, bruser) koster det samme uanset rummets størrelse, hvilket også reducerer m2-prisen i større rum.",
      },
      {
        question: "Hvordan sparer man penge på badeværelserenovering?",
        answer:
          "De bedste besparelsesmuligheder: 1) Behold eksisterende rørplacering — flytning koster 10.000-25.000 kr. 2) Udfør nedrivning selv — spar 8.000-15.000 kr. 3) Vælg standard flisestørrelser frem for specialformater. 4) Køb inventar i kampagneperioder (januar og august er typisk billigst). 5) Vælg totalentreprise med fast pris for budgetsikkerhed. 6) Spar ALDRIG på vådrumssikring — det er den dyreste fejl.",
      },
    ],
    relatedSlugs: ["microcement-vs-fliser", "budget-vs-luksus", "koekken-vs-badevaerelse"],
  },
  {
    slug: "budget-vs-luksus",
    name: "Budget vs. Luksus",
    title: "Budget vs. Luksus Badeværelse — Hvad Får Du for Pengene?",
    metaTitle: "Budget vs. Luksus Badeværelse: Sammenligning 2026",
    metaDescription:
      "Hvad får du for pengene i et budget- vs. luksusbadeværelse? Se konkret sammenligning af materialer, inventar og kvalitet. Find dit prisniveau.",
    description:
      "Forskellen mellem et budgetbadeværelse til 60.000 kr. og et luksusbadeværelse til 250.000 kr. er mere end bare prisskiltet. Det handler om materialer, finish, holdbarhed og de små detaljer, der gør hverdagen bedre. Denne guide viser præcist, hvad du får på hvert prisniveau, så du kan vælge det niveau, der passer til dit budget og dine forventninger.",
    optionA: {
      name: "Budget badeværelse (60.000-100.000 kr.)",
      priceFrom: 60000,
      priceTo: 100000,
      pros: [
        "Funktionelt og pænt badeværelse til realistisk budget",
        "Standardinventar fra kendte mærker (Ifø, Gustavsberg)",
        "Bredt udvalg af budget-fliser med godt design",
        "Kort leveringstid — standardvarer er på lager",
      ],
      cons: [
        "Standard fliser i begrænset format- og farveudvalg",
        "Budgetarmatur med kortere levetid (8-12 år)",
        "Standard brusekabine fremfor walk-in glasløsning",
        "Basis belysning uden dæmpning eller farveskift",
      ],
    },
    optionB: {
      name: "Luksus badeværelse (200.000-400.000 kr.)",
      priceFrom: 200000,
      priceTo: 400000,
      pros: [
        "Premium materialer som natursten, terrazzo eller microcement",
        "Designerarmatur (Vola, Dornbracht) med 20+ års holdbarhed",
        "Walk-in bruser med regn-brusehoved og kromoterapi",
        "Intelligent gulvvarme, dugfri spejl og integreret lyd",
      ],
      cons: [
        "Betydeligt højere investering med lang tilbagebetalingstid",
        "Længere leveringstid — specialprodukter tager 6-12 uger",
        "Dyrere vedligeholdelse af premium-materialer",
        "Risiko for overinvestering ift. boligens samlede værdi",
      ],
    },
    faqs: [
      {
        question: "Hvad er den reelle forskel mellem budget og luksus?",
        answer:
          "Den største forskel ligger i materialernes kvalitet og finish. Et budgetbadeværelse bruger standardfliser, porcelænsinventar og krom-armatur i mellemkvalitet. Et luksusbadeværelse bruger natursten eller microcement, designinventar og specialarmatur. Vådrumssikring, VVS og el er stort set identisk — det er overfladerne og inventaret, der udgør prisforskellen. Et budgetbadeværelse kan være lige så funktionelt.",
      },
      {
        question: "Er det det værd at investere i et luksusbadeværelse?",
        answer:
          "Det afhænger af boligens værdi og dine prioriteter. Som tommelfingerregel bør badeværelset ikke koste mere end 5-8% af boligens samlede værdi. For en bolig til 4 mio. kr. er 200.000-320.000 kr. et rimeligt loft. Udover økonomien handler det om livskvalitet — et badeværelse bruges 30-60 minutter dagligt i 15-20 år. Et badeværelse til 200.000 kr. koster under 1 kr. pr. brugstime.",
      },
      {
        question: "Hvad bør man prioritere i et budgetbadeværelse?",
        answer:
          "Prioritér i denne rækkefølge: 1) Vådrumssikring — spar ALDRIG her. 2) Godt armatur — det bruges dagligt og billigt armatur er en daglig irritation. 3) Gulvvarme — en relativt billig komfort (3.000-5.000 kr.) der gør kæmpe forskel. 4) Fliser i neutrale farver — de daterer ikke og kan styles med tilbehør. 5) Spar på møbler og tilbehør — de kan opgraderes senere.",
      },
      {
        question: "Hvilke luksus-elementer giver mest værdi?",
        answer:
          "De elementer, der giver mest oplevet luksus pr. krone, er: 1) Walk-in bruser med regn-brusehoved (5.000-10.000 kr. merpris). 2) Gulvvarme med smart termostat (3.000-6.000 kr.). 3) LED-spejl med dugfri funktion (2.000-4.000 kr. merpris). 4) Kvalitetsarmatur i sort mat eller messing (2.000-5.000 kr. merpris). Disse fire opgraderinger koster samlet 12.000-25.000 kr. men løfter oplevelsen markant.",
      },
      {
        question: "Kan man lave et mellemklasse badeværelse til 120.000-150.000 kr.?",
        answer:
          "Ja, mellemklassen er faktisk sweet spot for de fleste. For 120.000-150.000 kr. får du: pæne mellemklasse-fliser (500-800 kr/m2), kvalitetsarmatur fra Hansgrohe eller Grohe, walk-in glasvæg, vægmonteret toilet, møbelvask med underskab, gulvvarme og LED-spejl. Det er et badeværelse, der føles premium uden at sprænge budgettet. Nøglen er at vælge standard størrelser og undgå specialløsninger.",
      },
    ],
    relatedSlugs: ["pr-kvadratmeter", "microcement-vs-fliser", "koekken-vs-badevaerelse"],
  },
  {
    slug: "koekken-vs-badevaerelse",
    name: "Køkken vs. Badeværelse",
    title: "Køkken vs. Badeværelse Renovering — Hvad Koster Mest?",
    metaTitle: "Køkken vs. Badeværelse: Hvad Koster Mest? 2026",
    metaDescription:
      "Skal du renovere køkken eller badeværelse først? Se prissammenligning, ROI og hvad der giver mest værdi for din bolig. Komplet dansk guide.",
    description:
      "Køkken og badeværelse er de to mest populære renoveringsprojekter i danske hjem — og ofte de dyreste. Men hvad koster mest, og hvad giver størst afkast? Denne guide sammenligner omkostninger, tidsrammer og værdiforøgelse for begge projekter, så du kan prioritere den renovation, der giver mest mening for dig.",
    optionA: {
      name: "Køkkenrenovering",
      priceFrom: 50000,
      priceTo: 250000,
      pros: [
        "Størst positiv effekt på boligens salgspris (5-10% løft)",
        "Bruges flere timer dagligt — høj livskvalitetseffekt",
        "Kan opdeles i etaper (fronter nu, bordplade senere)",
        "Mere fleksibelt budget — kan spare med selvmontering",
      ],
      cons: [
        "Typisk dyrere end badeværelserenovering (30-50% mere)",
        "Kræver alternativ madlavningsmulighed under renovering",
        "Mange beslutninger — hvidevarer, layout, materialer",
        "Længere leveringstid — køkkener tager ofte 4-8 uger at levere",
      ],
    },
    optionB: {
      name: "Badeværelserenovering",
      priceFrom: 60000,
      priceTo: 200000,
      pros: [
        "Typisk billigere end køkkenrenovering for samme kvalitetsniveau",
        "Kritisk for boligens vedligeholdelse — fugtskader kan være dyre",
        "Velkendt proces med standardiserede løsninger",
        "Højere nødvendighed — forældede badeværelser kan have fugtproblemer",
      ],
      cons: [
        "Kræver autoriserede VVS- og el-fagfolk (lovkrav)",
        "Vådrumssikring er kritisk og fejl er meget dyre",
        "Svært at lave i etaper — typisk alt-eller-intet",
        "Mindre mulighed for DIY pga. autorisationskrav",
      ],
    },
    faqs: [
      {
        question: "Hvad koster mest — køkken eller badeværelserenovering?",
        answer:
          "En køkkenrenovering koster typisk 50.000-250.000 kr., mens en badeværelserenovering koster 60.000-200.000 kr. Pr. kvadratmeter er badeværelset dyrere (12.000-25.000 kr/m2 vs. 8.000-18.000 kr/m2), men da køkkener er større (typisk 10-15 m2 vs. 6-8 m2), bliver køkkenets samlede pris ofte højere. I mellemklassen koster et køkken ca. 30-50% mere end et badeværelse.",
      },
      {
        question: "Hvad bør man renovere først — køkken eller badeværelse?",
        answer:
          "Renovér badeværelset først, hvis der er tegn på fugtproblemer (skimmel, løse fliser, lugt). Fugtskader forværres over tid og kan blive meget dyre. Renovér køkkenet først, hvis det er funktionelt forældet og påvirker dagligdagen negativt. Generelt anbefaler ejendomsmæglere at starte med badeværelset, da et forældet badeværelse skræmmer købere mere end et ældre køkken.",
      },
      {
        question: "Hvad giver mest værdi ved salg?",
        answer:
          "Begge renoveringer giver god ROI, men køkkenet har typisk størst effekt på salgsprisen. En veldrevet køkkenrenovering kan løfte boligens værdi med 50-80% af investeringen. Et nyt badeværelse giver typisk 40-60% retur. Dog er et badeværelse med fugtproblemer en reel dealbreaker for købere, mens et ældre men funktionelt køkken er mere acceptabelt. Prioritér at undgå dealbreakers først.",
      },
      {
        question: "Kan man renovere køkken og badeværelse samtidigt?",
        answer:
          "Ja, og det kan give besparelser. Mange håndværkere tilbyder 10-15% rabat ved samlet projekt, da de kan planlægge arbejdet mere effektivt. VVS- og el-arbejde kan koordineres i én omgang. Ulempen er, at du mister adgang til begge rum samtidigt — det kræver god planlægning og eventuelt midlertidig fraflytning i 1-2 uger. Samlede projekter tager typisk 6-10 uger.",
      },
      {
        question: "Hvordan budgetterer man for både køkken og badeværelse?",
        answer:
          "Samlet bør køkken og badeværelse ikke koste mere end 10-15% af boligens værdi. En realistisk samlet investering for en gennemsnitlig dansk bolig er 200.000-350.000 kr. Fordel budgettet ca. 55/45 mellem køkken og badeværelse. Læg 15% af det samlede budget til side som buffer for uforudsete udgifter. Spred eventuelt projekterne over 1-2 år for at lette den økonomiske belastning.",
      },
    ],
    relatedSlugs: ["pr-kvadratmeter", "budget-vs-luksus", "microcement-vs-fliser"],
  },
];
