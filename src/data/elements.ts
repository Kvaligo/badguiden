import type { BathroomElement } from "./types";

export const elements: BathroomElement[] = [
  {
    slug: "brusekabine",
    name: "Brusekabine",
    title: "Brusekabine — Typer, Priser & Valgguide 2026",
    metaTitle: "Brusekabine: Typer, Størrelser & Priser 2026",
    metaDescription:
      "Komplet guide til brusekabiner. Se priser (3.000-15.000 kr), typer, størrelser og installation. Find den rigtige brusekabine til dit badeværelse.",
    description:
      "Brusekabinen er centrum i de fleste danske badeværelser, og det rigtige valg gør en stor forskel for både funktionalitet og æstetik. Fra kompakte hjørnemodeller til rummelige walk-in-løsninger findes der en brusekabine til ethvert badeværelse og budget. Vi guider dig gennem typer, materialer og priser, så du træffer det rigtige valg.",
    priceRange: { from: 3000, to: 15000, unit: "kr" },
    types: [
      "Hjørnebrusekabine — pladsbesparende til små badeværelser",
      "Firkant brusekabine — klassisk model med mest plads",
      "Walk-in brusekabine — åben løsning med fast glasvæg",
      "Halvrund brusekabine — blød form der sparer plads",
      "Dampbrusekabine — brusekabine med dampfunktion",
    ],
    features: [
      "Hærdet sikkerhedsglas (6-8 mm) som standard",
      "Lavtærskel eller niveaufri adgang for tilgængelighed",
      "Forskellige åbningssystemer: skydelåge, foldelåge eller svingdør",
      "Easy-clean coating der reducerer kalkaflejringer",
      "Justerbare profiler der kompenserer for skæve vægge",
    ],
    faqs: [
      {
        question: "Hvad koster en brusekabine inkl. montering?",
        answer:
          "En brusekabine koster typisk 3.000-15.000 kr. for selve produktet. Dertil kommer montering, som koster 2.000-5.000 kr. afhængigt af kompleksitet. En standard hjørnebrusekabine i mellemklassen ligger på ca. 5.000-8.000 kr. ekskl. montering. Dampbrusekabiner med ekstraudstyr kan koste op til 25.000 kr. eller mere.",
      },
      {
        question: "Hvilken størrelse brusekabine skal jeg vælge?",
        answer:
          "Minimumsstørrelsen for komfortabel brusning er 80x80 cm, men 90x90 cm eller større anbefales. Til to personer bør du vælge mindst 120x80 cm. Mål altid det tilgængelige areal inkl. plads til at åbne døren. Husk at en walk-in-løsning typisk kræver mindst 120 cm bredde for at undgå vandsprøjt udenfor brusearealet.",
      },
      {
        question: "Hvad er fordelen ved walk-in brusekabine?",
        answer:
          "Walk-in brusekabiner giver en åben, moderne følelse og er nemme at komme ind og ud af. De har ingen dør, der skal rengøres, og giver en spa-lignende oplevelse. Ulempen er, at de kræver mere plads (mindst 120 cm bredde) og kan give mere vandsprøjt end lukkede kabiner. De kræver også et effektivt gulvafløb med tilstrækkeligt fald.",
      },
      {
        question: "Hvordan rengør man en brusekabine bedst?",
        answer:
          "Tør glasset af med en skraber efter hver brusebad — det er den vigtigste vedligeholdelse. Ugentlig rengøring med et mildt rengøringsmiddel holder glasset klart. Undgå skurecreme, da det ridser glasset. Kalkaflejringer fjernes med eddikeopløsning eller specialmiddel. Brusekabiner med easy-clean coating kræver mindre vedligeholdelse, da vandet perler af.",
      },
      {
        question: "Kan jeg selv montere en brusekabine?",
        answer:
          "Montering af selve brusekabinen kan udføres som gør-det-selv, hvis du er handyman. De fleste kabiner leveres med samlevejledning. Dog kræver tilslutning til afløb og eventuel justering af vandrør en autoriseret VVS-installatør iht. dansk lovgivning. Vådrumssikringen under og omkring brusekabinen skal altid udføres af en professionel med vådrumscertifikat.",
      },
    ],
    relatedSlugs: ["brusevaeg", "glasvaeg", "armatur"],
    image: "/images/elements/brusekabine.jpg",
    imageAlt:
      "Moderne hjørnebrusekabine i klart glas med sort armatur i lyst badeværelse",
  },
  {
    slug: "brusevaeg",
    name: "Brusevæg",
    title: "Brusevæg — Typer, Glas & Priser 2026",
    metaTitle: "Brusevæg: Typer, Glastyper & Priser 2026",
    metaDescription:
      "Alt om brusevægge til badeværelset. Se priser (2.000-8.000 kr), glastyper og monteringsmuligheder. Find den perfekte brusevæg til dit bad.",
    description:
      "En brusevæg er den elegante og minimalistiske løsning til at afskærme bruseområdet. Til forskel fra en fuld brusekabine består brusevæggen af ét eller to faste glaspaneler uden dør. Det giver et åbent, luftigt udtryk, der er særligt populært i moderne danske badeværelser. Brusevægge fås i mange glastyper og beslag-designs.",
    priceRange: { from: 2000, to: 8000, unit: "kr" },
    types: [
      "Fast brusevæg — enkeltstående glaspanel monteret på væg",
      "Brusevæg med svingarm — fast panel med foldbar forlængelse",
      "Dobbelt brusevæg — to paneler der mødes i hjørne",
      "Brusevæg med stabiliseringsstang — fast panel med loftmonteret stang",
    ],
    features: [
      "Hærdet sikkerhedsglas i 8-10 mm for stabilitet",
      "Fås i klart, frostet, røget eller mønstret glas",
      "Beslag i krom, sort mat, børstet messing eller kobber",
      "Easy-clean nanoteknologi-coating på begge sider",
      "Fleksibel montering — gulv, væg eller loft",
    ],
    faqs: [
      {
        question: "Hvad er forskellen på en brusevæg og en brusekabine?",
        answer:
          "En brusevæg er et fast glaspanel uden dør, mens en brusekabine er en lukket konstruktion med dør. Brusevæggen giver et mere åbent og moderne udtryk, men beskytter mindre mod vandsprøjt. Brusekabinen er mere praktisk, hvis du vil minimere vand på badeværelsesgulvet. Brusevægge er typisk billigere og nemmere at rengøre, da der er færre dele og ingen dørmekanik.",
      },
      {
        question: "Hvor bred skal en brusevæg være?",
        answer:
          "En brusevæg bør minimum være 80 cm bred for at give tilstrækkelig afskærmning. For en walk-in-løsning anbefales 100-120 cm bredde. Væggen bør strække sig mindst 30 cm forbi brusehovedet for at fange vandsprøjt. Højden er typisk 200 cm, men kan tilpasses rumhøjden. Husk at medregne afstanden fra væggen — 5-10 cm åbning ved væggen gør rengøring nemmere.",
      },
      {
        question: "Hvilket glas er bedst til en brusevæg?",
        answer:
          "Hærdet sikkerhedsglas på 8 mm er standarden for de fleste brusevægge. Til store paneler over 100 cm bredde anbefales 10 mm glas for ekstra stabilitet. Klart glas giver et åbent udtryk, mens frostet glas giver privatliv. Parsol-glas (tonet) er populært til et mere eksklusivt look. Vælg altid glas med easy-clean coating for at reducere kalkopbygning.",
      },
      {
        question: "Kan man selv montere en brusevæg?",
        answer:
          "Montering af en brusevæg er muligt som gør-det-selv-projekt, hvis du har erfaring med boring i fliser og vægmontage. Glasset er tungt (8 mm glas vejer ca. 20 kg pr. m²), så det anbefales at være to personer. Det er afgørende, at beslagene monteres i massiv væg eller med specielle hulrumsdyvler. Forkert montering kan resultere i at glasset falder ned, hvilket er farligt.",
      },
      {
        question: "Hvor meget koster en brusevæg inkl. montering?",
        answer:
          "En brusevæg koster 2.000-8.000 kr. for selve glasset med beslag. Professionel montering koster typisk 1.500-3.000 kr. En standardmodel i klart glas med krom-beslag ligger på ca. 3.000-4.000 kr. Designmodeller med sort mat beslag og specialglas kan koste op til 10.000 kr. eller mere. Sammenlign priser fra flere leverandører, da prisforskellene kan være store.",
      },
    ],
    relatedSlugs: ["brusekabine", "glasvaeg", "armatur"],
    image: "/images/elements/brusevaeg.jpg",
    imageAlt:
      "Minimalistisk brusevæg i klart glas med sort mat beslag i walk-in badeværelse",
  },
  {
    slug: "haandvask",
    name: "Håndvask",
    title: "Håndvask til Badeværelse — Typer, Materialer & Priser",
    metaTitle: "Håndvask til Badeværelse: Typer & Priser 2026",
    metaDescription:
      "Komplet guide til håndvaske. Se priser (1.500-10.000 kr), typer og materialer. Fra undermonterede til fritstående — find den rigtige håndvask.",
    description:
      "Håndvasken er badeværelsets mest brugte element og et centralt designelement. Fra praktiske undermonterede vaske til skulpturelle fritstående modeller — valget af håndvask sætter tonen for hele rummet. Materialer spænder fra klassisk porcelæn til moderne composit, og priserne varierer enormt afhængigt af design og kvalitet.",
    priceRange: { from: 1500, to: 10000, unit: "kr" },
    types: [
      "Undermonteret håndvask — monteres under bordplade for rent udtryk",
      "Påsatsvask (vessel) — skulpturel vask ovenpå bordplade",
      "Nedfældet håndvask — integreret i bordplade med synlig kant",
      "Vægmonteret håndvask — hænger direkte på væg uden underskab",
      "Møbelvask — integreret i badeværelsesmøbel med underskab",
    ],
    features: [
      "Materialer: porcelæn, komposit, natursten, glas eller stål",
      "Overløb forhindrer vandskader ved tilstoppet afløb",
      "Ceramicplus/LotusClean coating afviser snavs og kalk",
      "Ergonomisk højde: 80-85 cm fra gulv til overkant",
    ],
    faqs: [
      {
        question: "Hvilken type håndvask er bedst til et lille badeværelse?",
        answer:
          "Til små badeværelser er en vægmonteret håndvask eller en smal møbelvask bedst. Vægmonterede vaske frigør gulvplads, som visuelt gør rummet større. Vælg en vask med bredde på 45-55 cm, som giver nok plads til håndvask uden at dominere rummet. En hjørnevask kan også være en løsning, hvis pladsen er meget begrænset.",
      },
      {
        question: "Hvad koster en god håndvask til badeværelset?",
        answer:
          "En god håndvask i porcelæn fra anerkendte mærker som Duravit, Villeroy & Boch eller Laufen koster typisk 2.000-6.000 kr. Budgetmodeller fås fra 1.500 kr., mens designervaske i natursten eller specialmaterialer kan koste over 10.000 kr. Dertil kommer armatur (800-5.000 kr.) og eventuel bordplade eller underskab. Den samlede investering for vask med møbel og armatur ligger typisk på 5.000-20.000 kr.",
      },
      {
        question: "Hvad er fordelene ved en undermonteret håndvask?",
        answer:
          "Undermonterede håndvaske giver et rent, elegant udtryk, da kanten er skjult under bordpladen. Det gør rengøring af bordpladen lettere, da der ingen synlig samling er. Ulempen er, at det kræver en solid bordplade (typisk natursten, composit eller massivt træ), da porcelænskanten skal bære vasken nedefra. Montering er mere kompleks og bør udføres af en professionel.",
      },
      {
        question: "Hvilket materiale er bedst til en håndvask?",
        answer:
          "Porcelæn (sanitetsporcelæn) er det mest populære og velafprøvede valg — det er hygiejnisk, kradsfast og farveægte. Compositmaterialer som Corian eller TeCe er populære til integrerede løsninger, da vask og bordplade kan støbes i ét stykke. Natursten (marmor, granit) giver et luksuriøst look men kræver vedligeholdelse. Glas er smukt men kræver hyppig rengøring.",
      },
      {
        question: "Hvad skal man tænke på ved valg af dobbelt håndvask?",
        answer:
          "En dobbelt håndvask kræver minimum 120 cm bordpladebredde for at give tilstrækkelig albuerum. Den optimale afstand mellem vaskene er 60-90 cm fra midte til midte. Husk at dobbelt vask kræver dobbelt VVS-tilslutning, hvilket øger installationsomkostningerne. Overvej om det er nødvendigt i jeres dagligdag — mange par bruger sjældent vasken samtidigt.",
      },
    ],
    relatedSlugs: ["armatur", "vandhane", "spejl"],
    image: "/images/elements/haandvask.jpg",
    imageAlt:
      "Moderne undermonteret porcelænshåndvask med sort armatur og egetræsbordplade",
  },
  {
    slug: "armatur",
    name: "Armatur",
    title: "Badeværelsesarmatur — Typer, Finish & Priser 2026",
    metaTitle: "Badeværelsesarmatur: Typer, Finish & Priser 2026",
    metaDescription:
      "Komplet guide til badearmatur. Se priser (800-5.000 kr), typer og finish. Fra krom til sort mat — vælg det rigtige armatur til dit badeværelse.",
    description:
      "Armatur er badeværelsets smykker — de små detaljer, der binder hele designet sammen. Valget af finish, form og funktion påvirker både brugsoplevelsen og æstetikken markant. Fra tidløst krom til trendy sort mat og varm messing — det rigtige armatur løfter hele badeværelsets udtryk. Kvalitetsarmatur fra mærker som Hansgrohe, Grohe eller Damixa holder 15-20 år.",
    priceRange: { from: 800, to: 5000, unit: "kr" },
    types: [
      "Etgrebsarmatur — én håndtag styrer temperatur og vandmængde",
      "Togrebsarmatur — separate håndtag for varmt og koldt vand",
      "Termostatarmatur — fastholder valgt temperatur automatisk",
      "Berøringsfrit armatur — sensor-aktiveret til hygiejne",
      "Vægmonteret armatur — monteres i væggen for rent udtryk",
    ],
    features: [
      "Finish-muligheder: krom, sort mat, børstet nikkel, messing, kobber",
      "Koldstart-funktion sparer energi ved kun at levere koldt vand i midterposition",
      "Vandbesparende perlator reducerer forbrug med op til 50%",
      "Keramisk patron sikrer drypfri funktion i mange år",
      "EcoSmart-teknologi begrænser vandflow til 5 liter/min",
    ],
    faqs: [
      {
        question: "Hvilken finish til badearmatur er mest holdbar?",
        answer:
          "Krom er stadig den mest holdbare finish, da det er et ekstremt hårdt materiale, der modstår ridser og kalk godt. Sort mat (PVD-coated) er næsten lige så holdbart og viser færre fingeraftryk og vandpletter end krom. Børstet nikkel er en god mellemvej. Messing og kobber patinerer over tid, hvilket kan være ønsket. Undgå billige lakerede finish, da lakken kan skalle af.",
      },
      {
        question: "Hvad koster kvalitetsarmatur til badeværelset?",
        answer:
          "Armatur fra anerkendte mærker som Hansgrohe, Grohe, Damixa eller Oras koster typisk 1.200-3.500 kr. for håndvaskarmatur og 2.000-5.000 kr. for brusearmatur. Budgetmodeller fås fra 800 kr., men har kortere levetid. Et komplet sæt med armatur til håndvask, bruser og badekar kan koste 5.000-15.000 kr. Montering koster 500-1.500 kr. pr. armatur.",
      },
      {
        question: "Skal armaturet matche i hele badeværelset?",
        answer:
          "Det er ikke et krav, men matchende armatur giver det mest harmoniske udtryk. Vælg samme finish (f.eks. sort mat) til alle synlige armaturer: håndvask, bruser, toiletknap og tilbehør. De fleste producenter tilbyder komplette serier i samme design og finish. Hvis du mikser, kan det virke bevidst og stilfuldt at kombinere f.eks. sort mat armatur med messing tilbehør.",
      },
      {
        question: "Hvad er fordelen ved termostatarmatur i bruseren?",
        answer:
          "Termostatarmatur fastholder den valgte vandtemperatur uanset trykændringer i systemet. Det giver komfort og sikkerhed — ingen pludselige temperaturskift, når nogen tænder for vand andetsteds. Termostatarmaturer har typisk en sikkerhedsspærre ved 38°C, der forhindrer skoldning. De er dyrere (2.500-5.000 kr.) end standard etgrebsarmaturer, men anbefales varmt til familier med børn.",
      },
      {
        question: "Hvordan rengør man sort mat armatur?",
        answer:
          "Sort mat armatur rengøres med en blød klud og lunkent vand. Undgå skuremidler, syre og slibende svampe, da de kan beskadige PVD-belægningen. Kalk fjernes med en mild eddikeopløsning (1:4 med vand) — lad det virke i kort tid og skyl grundigt. Tør armaturet af efter brug for at forhindre vandpletter. Mange sort mat armaturer er coated med anti-fingerprint-teknologi.",
      },
    ],
    relatedSlugs: ["vandhane", "haandvask", "brusekabine"],
    image: "/images/elements/armatur.jpg",
    imageAlt:
      "Moderne sort mat etgrebsarmatur monteret på hvid porcelænshåndvask",
  },
  {
    slug: "vandhane",
    name: "Vandhane",
    title: "Vandhane til Badeværelse — Guide til Det Rigtige Valg",
    metaTitle: "Vandhane Badeværelse: Typer, Priser & Guide 2026",
    metaDescription:
      "Alt om vandhaner til badeværelset. Se priser (500-4.000 kr), typer og funktioner. Fra klassiske til moderne — find den rigtige vandhane.",
    description:
      "Vandhanen er et af de elementer i badeværelset, du bruger flest gange dagligt. Det rigtige valg handler både om funktion og æstetik — fra klassiske to-grebs vandhaner med retro-charme til moderne, høje blandingsbatterier med udtræksbrus. Kvalitet og slidstyrke varierer enormt, og det betaler sig at investere i et ordentligt produkt.",
    priceRange: { from: 500, to: 4000, unit: "kr" },
    types: [
      "Høj vandhane — elegant til påsatsvaske og vessel-vaske",
      "Lav vandhane — klassisk til nedfældede og undermonterede vaske",
      "Vægmonteret vandhane — rent udtryk med skjulte rør",
      "Vandfaldshane — bred, flad stråle for spa-følelse",
    ],
    features: [
      "Keramisk kartuche sikrer drypfri funktion i årevis",
      "Justerbar stråle fra fokuseret til bred bruse",
      "Pop-up-bundventil for nem betjening af prop",
      "Koldstart sparer energi ved at starte med koldt vand",
      "Flexslanger letter installation og vedligeholdelse",
    ],
    faqs: [
      {
        question: "Hvad er forskellen på en vandhane og et armatur?",
        answer:
          "I daglig tale bruges begreberne ofte synonymt, men teknisk er 'armatur' det overordnede begreb, der dækker alle vandtilslutninger inkl. brusearmatur, termostatbatterier og vandhaner. 'Vandhane' refererer specifikt til den synlige del med tud og håndtag ved håndvasken. I denne guide bruger vi 'vandhane' om den synlige enhed ved vasken og 'armatur' som den bredere produktkategori.",
      },
      {
        question: "Hvilken vandhane passer til en påsatsvask?",
        answer:
          "Til påsatsvaske (vessel) skal du vælge en høj vandhane, da vandstrålen skal nå ned over vaskens overkant. Tudens udløb bør være minimum 15 cm over bordpladen for at give plads til hænderne. Vægmonteret vandhane er et elegant alternativ, der giver mere plads på bordpladen. Sørg for at tudens rækkevidde matcher vaskens centrum for at undgå sprøjt.",
      },
      {
        question: "Hvad koster en god vandhane til badeværelset?",
        answer:
          "En kvalitetsvandhane fra mærker som Grohe, Hansgrohe, Damixa eller Mora koster typisk 1.000-3.000 kr. Budgetmodeller fås fra 500 kr. men har ofte billigere kartoucher, der skal udskiftes tidligere. Designvandhaner fra eksklusive mærker som Vola eller Dornbracht kan koste 3.000-8.000 kr. eller mere. Montering af en vandhane koster typisk 500-1.000 kr. hos en VVS-installatør.",
      },
      {
        question: "Kan man selv skifte vandhane i badeværelset?",
        answer:
          "At skifte vandhane er et af de VVS-arbejder, mange kan klare selv, forudsat at de eksisterende tilslutninger er i orden. De fleste vandhaner monteres med flexslanger og standardtilslutninger. Du skal bruge en vandfastnøgle, tang og teflon-tape. Husk at lukke for vandet ved stophanerne først. Hvis der skal laves nye tilslutninger i væggen, kræver det en autoriseret VVS-installatør.",
      },
      {
        question: "Hvordan undgår man dryppende vandhane?",
        answer:
          "Dryp skyldes oftest en slidt keramisk kartuche eller packninger. Kvalitetsvandhaner med keramiske kartoucher er stort set drypfri i hele deres levetid. Hvis din vandhane drypper, kan kartouchen typisk udskiftes for 200-500 kr. i reservedele. Vælg en vandhane fra et mærke, der garanterer reservedele i mindst 10 år. Kalk i vandet forkorter levetiden — overvej et vandfilter i hårdt-vands-områder.",
      },
    ],
    relatedSlugs: ["armatur", "haandvask", "brusekabine"],
    image: "/images/elements/vandhane.jpg",
    imageAlt:
      "Høj krom vandhane med enkelt greb monteret på sort bordplade med påsatsvask",
  },
  {
    slug: "ventilation",
    name: "Ventilation",
    title: "Ventilation i Badeværelse — Krav, Typer & Priser",
    metaTitle: "Ventilation Badeværelse: Krav, Typer & Priser 2026",
    metaDescription:
      "Alt om ventilation i badeværelset. Se krav iht. BR18, typer og priser (1.500-6.000 kr). Undgå fugtskader med korrekt ventilation.",
    description:
      "Korrekt ventilation er afgørende for at forhindre fugt, skimmel og råd i badeværelset. Ifølge Bygningsreglementet BR18 skal alle badeværelser have mekanisk ventilation med en kapacitet på mindst 15 liter/sekund under brug. En god ventilationsløsning fjerner effektivt fugt og lugt og beskytter bygningens konstruktion mod fugtskader.",
    priceRange: { from: 1500, to: 6000, unit: "kr" },
    types: [
      "Udsugningsventilator — monteret i væg eller loft med udblæsning",
      "Central ventilation — tilsluttet boligens mekaniske ventilationssystem",
      "Decentral ventilation med varmegenvinding — genbruger varmen i udsugningsluften",
      "Fugtstyret ventilation — automatisk aktivering ved høj luftfugtighed",
    ],
    features: [
      "Fugtsensor der automatisk øger luftskiftet ved behov",
      "Timer-funktion med justerbar efterkørsel (typisk 15-30 min)",
      "Lavt støjniveau under 30 dB(A) for komfort",
      "Bagspjæld forhindrer kold træk, når ventilatoren er slukket",
      "Energieffektive EC-motorer med lavt strømforbrug",
    ],
    faqs: [
      {
        question: "Hvad er kravene til ventilation i badeværelser iht. BR18?",
        answer:
          "Bygningsreglementet BR18 kræver, at badeværelser har mekanisk udsugning med en kapacitet på mindst 15 l/s (54 m³/t) under brug og en grundventilation på mindst 10 l/s (36 m³/t). Ventilationsluften skal udsuges direkte fra badeværelset og føres ud af bygningen. Naturlig ventilation via vindue er ikke tilstrækkeligt som eneste løsning i nybyggeri.",
      },
      {
        question: "Hvad koster det at installere ventilation i badeværelset?",
        answer:
          "En standard udsugningsventilator koster 1.500-3.000 kr. for selve produktet. Installation koster typisk 2.000-5.000 kr. afhængigt af om der skal etableres nye kanaler. En decentral ventilationsenhed med varmegenvinding koster 4.000-6.000 kr. plus installation. Central ventilation etableres normalt i forbindelse med nybyggeri og er dyrere at eftermontere.",
      },
      {
        question:
          "Hvordan ved jeg om mit badeværelses ventilation er tilstrækkelig?",
        answer:
          "Et simpelt test er at holde et stykke toiletpapir op foran ventilationsristen — det bør suges fast. Hvis der dannes kondens på spejl og vinduer i mere end 20-30 minutter efter brusebad, er ventilationen sandsynligvis utilstrækkelig. Fugt eller mug i fuger og hjørner er klare advarselstegn. En fagmand kan måle den faktiske luftmængde med et anemometer.",
      },
      {
        question: "Kan jeg selv installere en badeværelsesventilator?",
        answer:
          "Selve montering af ventilatoren kan du godt selv stå for, men eltilslutningen skal udføres af en autoriseret elektriker iht. danske regler. Hvis der skal bores hul i ydervæggen til udblæsning, bør du sikre dig, at du ikke rammer bærende konstruktion eller dampspærre. I etageejendomme kræves ofte tilslutning til fælles ventilationskanal, hvilket skal koordineres med ejer- eller andelsforeningen.",
      },
      {
        question: "Hvad er forskellen på fugtstyret og timerstyret ventilation?",
        answer:
          "Fugtstyret ventilation bruger en hygrostat til automatisk at øge udsugningen, når luftfugtigheden stiger — f.eks. under og efter brusebad. Timerstyret ventilation kører i en fast periode efter aktivering (typisk tænd/sluk via lyskontakt). Fugtstyret ventilation er mest energieffektivt, da den kun kører på fuld kraft, når behovet er der. Det anbefales at vælge en model med begge funktioner.",
      },
    ],
    relatedSlugs: ["gulvvarme", "glasvaeg", "brusekabine"],
    image: "/images/elements/ventilation.jpg",
    imageAlt:
      "Diskret hvid ventilationsrist monteret i loftet af et moderne badeværelse",
  },
  {
    slug: "spejl",
    name: "Spejl",
    title: "Badeværelsesspejl — Typer, Størrelser & Tips",
    metaTitle: "Badeværelsesspejl: Typer, Lys & Priser 2026",
    metaDescription:
      "Komplet guide til badeværelsesspejle. Se priser (500-5.000 kr), typer og belysning. Fra LED-spejle til spejlskabe — find det perfekte spejl.",
    description:
      "Badeværelsesspejlet er mere end bare en reflekterende overflade — det er et centralt designelement, der påvirker lysfølelse og rummets oplevede størrelse. Med integreret LED-belysning, dugfri teknologi og smarte funktioner er det moderne badeværelsesspejl en opgradering, der gør morgenhygiejnen til en fornøjelse.",
    priceRange: { from: 500, to: 5000, unit: "kr" },
    types: [
      "LED-spejl — integreret belysning bag eller i kanten af spejlet",
      "Spejlskab — spejl med opbevaring bagved",
      "Rundt spejl — blød form der bryder rektangulære linjer",
      "Spejlvæg — stort spejl fra væg til væg for maksimal rumlighed",
      "Makeup-spejl — forstørrelsesspejl til detaljer",
    ],
    features: [
      "Integreret LED-belysning med justerbar farvetemperatur (3.000-6.000K)",
      "Dugfri-funktion (demister) holder spejlet klart efter brusebad",
      "Touch-sensor til tænd/sluk og lysdæmpning",
      "IP44-klassificering som minimum til badeværelsesbrug",
      "Energieffektive LED-paneler med 30.000+ timers levetid",
    ],
    faqs: [
      {
        question: "Hvor stort skal et badeværelsesspejl være?",
        answer:
          "Spejlet bør minimum matche bredden på håndvasken eller underskabet. For et harmonisk udtryk anbefales et spejl, der er 5-10 cm bredere på hver side. Højden bør give overblik for alle brugere — minimum 70 cm. Til små badeværelser kan et ekstra stort spejl eller spejlvæg visuelt fordoble rummets størrelse og forbedre lysindfaldet markant.",
      },
      {
        question: "Er LED-spejle det ekstra værd?",
        answer:
          "LED-spejle er en af de bedste investeringer i badeværelset i forhold til prisen. De giver jævn, blændefri belysning, der er ideel til morgenhygiejne og makeup. Energiforbruget er minimalt (10-25W), og LED-panelerne holder 30.000+ timer. Et LED-spejl med dugfri-funktion og touch-sensor koster fra 1.500 kr. — et beskedent merpris for daglig komfort.",
      },
      {
        question: "Hvilken IP-klasse skal et badeværelsesspejl have?",
        answer:
          "Et spejl med lys i badeværelset skal minimum have IP44-klassificering, som beskytter mod vandsprøjt. I zone 1 (direkte over badekar/bruser) kræves IP65. I zone 2 (60 cm fra badekar/bruser) kræves IP44. Uden for zonerne er IPX1 tilstrækkeligt. Vælg altid et CE-mærket produkt beregnet til badeværelsesbrug for at overholde danske el-installationsregler.",
      },
      {
        question: "Kan man selv montere et badeværelsesspejl med lys?",
        answer:
          "Selve ophængning af spejlet kan du selv klare med de rigtige vægbeslag og et vaterpas. Eltilslutning af LED-spejle med fast installation skal dog udføres af en autoriseret elinstallatør. Spejle med stik kan du selv tilslutte i en eksisterende stikkontakt. Husk at spejlet vejer 5-15 kg, så brug de rigtige dyvler til din vægtype (gips, beton eller mursten).",
      },
      {
        question: "Hvad er fordelene ved et spejlskab?",
        answer:
          "Et spejlskab kombinerer spejl og opbevaring i ét produkt. Det er ideelt til små badeværelser, hvor hver centimeter tæller. Moderne spejlskabe har integreret LED-belysning, stikkontakt inde i skabet og soft-close hængsler. Ulempen er, at skabet stikker 10-15 cm ud fra væggen, og designmæssigt kan det virke klodsede. I nye badeværelser indfældes spejlskabet ofte i væggen for et rent udtryk.",
      },
    ],
    relatedSlugs: ["haandvask", "armatur", "vandhane"],
    image: "/images/elements/spejl.jpg",
    imageAlt:
      "Rundt LED-spejl med varm belysning monteret over sort håndvaskemøbel",
  },
  {
    slug: "glasvaeg",
    name: "Glasvæg",
    title: "Glasvæg til Badeværelse — Typer, Priser & Montering",
    metaTitle: "Glasvæg Badeværelse: Typer, Priser & Guide 2026",
    metaDescription:
      "Alt om glasvægge i badeværelset. Se priser (3.000-12.000 kr), typer og montering. Skab rum og lys med glasvægge i dit badeværelse.",
    description:
      "Glasvægge i badeværelset er den elegante måde at opdele rummet på uden at miste lys eller fornemmelsen af åbenhed. Fra skillevægge mellem bruser og toilet til glaspartier, der adskiller badeværelset fra soveværelset — glasvægge tilføjer et moderne og eksklusivt udtryk. Med hærdet sikkerhedsglas er løsningen både sikker og holdbar.",
    priceRange: { from: 3000, to: 12000, unit: "kr" },
    types: [
      "Fast glasvæg — immobilefelt glasparti som rumdeler",
      "Glasvæg med dør — fast element med integreret glas- eller svingdør",
      "Matteret glasvæg — frostet glas for privatliv med lys",
      "Glasblok-væg — klassiske glasbyggesten til moderne rum",
    ],
    features: [
      "Hærdet sikkerhedsglas (ESG) i 8-12 mm tykkelse",
      "Fås i klart, frostet, tonet eller mønstret glas",
      "Beslag og profiler i krom, sort mat, messing eller rustfrit stål",
      "Lydisolerende egenskaber afhængigt af glastykkelse",
      "Kan specialfremstilles i nøjagtige mål",
    ],
    faqs: [
      {
        question: "Hvad koster en glasvæg til badeværelset?",
        answer:
          "En glasvæg koster typisk 3.000-12.000 kr. afhængigt af størrelse, glastype og beslag. En standard glasvæg på 100x200 cm i 8 mm klart glas med krom-beslag koster ca. 4.000-6.000 kr. inkl. beslag. Matteret glas koster 15-25% mere. Montering koster 2.000-4.000 kr. ekstra. Store glaspartier med dør kan koste 10.000-20.000 kr. inkl. montering.",
      },
      {
        question: "Er glasvægge sikre i badeværelset?",
        answer:
          "Ja, glasvægge i badeværelset fremstilles altid af hærdet sikkerhedsglas (ESG), der er 4-5 gange stærkere end almindeligt glas. Hvis det går i stykker, knuser det i små, afrundede stykker uden skarpe kanter. Lamineret sikkerhedsglas (VSG) er endnu sikrere, da det forbliver samlet ved brud. Glasvægge testes og certificeres iht. europæiske sikkerhedsstandarder (EN 12150).",
      },
      {
        question: "Kan man selv montere en glasvæg?",
        answer:
          "Det frarådes at montere glasvægge selv, medmindre du har erfaring. Glasset er tungt (8 mm glas vejer ca. 20 kg pr. m²) og kræver præcis montering for at stå lodret og stabilt. Forkert monterede glasvægge kan vælte og udgøre en sikkerhedsrisiko. Beslagene skal monteres i massiv væg med korrekte forankringer. Professionel montering anbefales og koster typisk 2.000-4.000 kr.",
      },
      {
        question: "Hvilken glastype giver mest privatliv?",
        answer:
          "Frostet (satineret) glas giver god privatlivsbeskyttelse, mens det stadig slipper lys igennem. Matteret glas med mønstre eller striber kan give delvist udsyn. Mælkehvidt glas er det mest dækkende. Smart-glas (switchable glass) kan skifte mellem klart og frostet med et tryk, men koster 5-10 gange mere. For de fleste badeværelser er standard frostet glas den bedste balance mellem privatliv og æstetik.",
      },
      {
        question: "Glasvæg eller traditionel væg — hvad er bedst?",
        answer:
          "Glasvægge er bedst, når du vil bevare lys og rumfornemmelse, f.eks. som brusevæg eller rumdeler i et åbent badeværelse. Traditionelle vægge er bedre til lydisolering, ophængning af møbler og fuld privatliv. En populær kompromisløsning er en halvvæg (90-120 cm høj) i mursten/gips med et glaselement ovenover. Det giver både privatliv, ophængningsmuligheder og lysindfald.",
      },
    ],
    relatedSlugs: ["brusevaeg", "brusekabine", "spejl"],
    image: "/images/elements/glasvaeg.jpg",
    imageAlt:
      "Elegant frostet glasvæg der adskiller brusezone fra resten af badeværelset",
  },
  {
    slug: "gulvvarme",
    name: "Gulvvarme",
    title: "Gulvvarme i Badeværelse — Typer, Pris & Installation",
    metaTitle: "Gulvvarme Badeværelse: Pris pr. m² & Guide 2026",
    metaDescription:
      "Komplet guide til gulvvarme i badeværelset. Se priser (400-800 kr/m²), el vs. vand, og installation. Lun komfort under bare fødder.",
    description:
      "Gulvvarme i badeværelset er gået fra luksus til standard i danske hjem. Den behagelige varme under bare fødder, den jævne varmefordeling og det usynlige varmesystem gør gulvvarme til det foretrukne valg ved renovering. El-gulvvarme er den mest populære løsning til badeværelser, da den er nem at installere og kræver minimal opbygningshøjde.",
    priceRange: { from: 400, to: 800, unit: "kr/m²" },
    types: [
      "El-gulvvarme med varmekabel — det mest fleksible system",
      "El-gulvvarme med varmemåtte — hurtig installation på faste mål",
      "Vandbaseret gulvvarme — tilsluttet centralvarme eller varmepumpe",
      "Tynd el-gulvvarme — kun 3 mm opbygning til renovering",
    ],
    features: [
      "Termostatregulering med programmerbare tidsplaner",
      "Jævn varmefordeling uden kolde zoner",
      "Kompatibelt med fliser, klinker, natursten og microcement",
      "Reducerer fugt på gulvet og dermed risiko for skimmel",
      "Intelligent styring via app og wifi-termostat",
    ],
    faqs: [
      {
        question: "Hvad koster gulvvarme i badeværelset?",
        answer:
          "El-gulvvarme koster typisk 400-600 kr. pr. m² for materialer (varmekabel/-måtte og termostat). Installation koster 200-400 kr. pr. m² ekstra. En termostat koster 500-2.000 kr. afhængigt af funktioner. For et standard badeværelse på 4-6 m² opvarmet areal (fratrukket toilet og møbler) skal du regne med 3.000-6.000 kr. for materialer og 1.000-2.500 kr. for installation.",
      },
      {
        question: "El-gulvvarme eller vandbaseret — hvad er bedst?",
        answer:
          "Til badeværelser anbefales el-gulvvarme i de fleste tilfælde. Det er nemmere at installere, kræver kun 3-5 mm opbygningshøjde (mod 50-70 mm for vandbaseret), og er billigere ved renovation. Vandbaseret gulvvarme er mest rentabelt i nybyggeri, hvor det kan integreres i hele husets varmesystem og kobles til en varmepumpe. El-gulvvarme er mest økonomisk for enkeltstående rum under 10 m².",
      },
      {
        question: "Kan man installere gulvvarme under alle gulvtyper?",
        answer:
          "El-gulvvarme fungerer bedst under fliser, klinker og natursten, der leder varme godt. Det kan også bruges under microcement og terrazzo. Vinyl og laminat kan bruges med lavere overfladetemperatur (max 27°C). Trægulve frarådes i badeværelser generelt, og gulvvarme under træ kræver specialsystemer. Kontroller altid gulvproducentens anvisninger for kompatibilitet med gulvvarme.",
      },
      {
        question: "Hvad koster det i strøm at have gulvvarme i badeværelset?",
        answer:
          "El-gulvvarme i et badeværelse på 5 m² med en effekt på 150W/m² bruger ca. 750W. Med en gennemsnitlig driftstid på 6-8 timer dagligt i opvarmningssæsonen (oktober-april) er det årlige strømforbrug ca. 1.000-1.500 kWh. Ved en strømpris på 2-3 kr./kWh svarer det til 2.000-4.500 kr. årligt. En programmerbar termostat kan reducere forbruget med op til 30%.",
      },
      {
        question: "Kan man selv installere el-gulvvarme?",
        answer:
          "Du kan selv lægge varmekabel eller varmemåtte ud på gulvet — det kræver ingen specialuddannelse. Dog skal selve eltilslutningen til termostat og el-tavle ALTID udføres af en autoriseret elinstallatør iht. danske regler. Fejl ved eltilslutning kan medføre brandfare og ugyldigt forsikringsdækning. En erfaren gør-det-selv-person kan spare 50% af installationsomkostningerne ved at lægge kablet selv.",
      },
    ],
    relatedSlugs: ["ventilation", "brusekabine", "glasvaeg"],
    image: "/images/elements/gulvvarme.jpg",
    imageAlt:
      "El-gulvvarmemåtte udlagt på badeværelsesgulv før flisebelægning",
  },
];
