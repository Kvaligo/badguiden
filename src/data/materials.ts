import type { Material } from "./types";

export const materials: Material[] = [
  {
    slug: "microcement",
    name: "Microcement",
    title: "Microcement Badeværelse — Alt Du Skal Vide",
    metaTitle: "Microcement Badeværelse: Pris, Fordele & Guide 2026",
    metaDescription:
      "Alt om microcement i badeværelset. Se priser (800-1.500 kr/m²), fordele, ulemper og inspiration. Komplet dansk guide til det fugeløse look.",
    description:
      "Microcement er et af de mest populære materialevalg til moderne badeværelser i Danmark. Den fugeløse overflade giver et minimalistisk og elegant udtryk, der passer perfekt til skandinavisk design. Materialet påføres i tynde lag ovenpå eksisterende underlag, hvilket gør det velegnet til både nybyg og renovering.",
    priceRange: { from: 800, to: 1500, unit: "kr/m²" },
    pros: [
      "Fugeløst og hygiejnisk — ingen fuger hvor skimmel kan sætte sig",
      "Moderne, minimalistisk udtryk der passer til skandinavisk stil",
      "Kan påføres direkte ovenpå eksisterende fliser",
      "Velegnet til både gulv, vægge og møbler",
      "Unikke, håndlavede overflader — ingen to badeværelser er ens",
    ],
    cons: [
      "Kræver professionel påføring — ikke et gør-det-selv-projekt",
      "Højere pris end traditionelle fliser",
      "Kan revne ved bevægelser i underlaget hvis ikke korrekt forberedt",
      "Kræver periodisk vedligeholdelse med voks eller sealer",
    ],
    swatchColors: [
      { name: "Cement Grå", hex: "#A8A29E" },
      { name: "Varm Sand", hex: "#C9B99A" },
      { name: "Hvid Perle", hex: "#E8E4DF" },
      { name: "Antracit", hex: "#4A4A4A" },
    ],
    faqs: [
      {
        question: "Hvad koster microcement i badeværelset?",
        answer:
          "Microcement koster typisk mellem 800 og 1.500 kr. pr. m² inklusiv materialer og påføring. Den endelige pris afhænger af underlagets tilstand, antal lag og finish-type. For et gennemsnitligt dansk badeværelse på 6-8 m² skal du regne med en samlet materialepris på 5.000-12.000 kr. ekskl. arbejdsløn.",
      },
      {
        question: "Er microcement vandtæt nok til badeværelser?",
        answer:
          "Microcement er i sig selv ikke vandtæt, men med korrekt forsegling og vådrumssikring under overfladen opfylder det alle krav i henhold til DS 484 og Bygningsreglementet BR18. Det er afgørende, at vådrumsikringen udføres korrekt af en autoriseret håndværker, inden microcement påføres. Den afsluttende sealer gør overfladen vandafvisende.",
      },
      {
        question: "Hvor lang tid holder microcement i badeværelset?",
        answer:
          "Med korrekt vedligeholdelse kan microcement holde 15-20 år eller mere. Det kræver genforsegling med voks eller specialsealer hvert 2-3 år for at bevare vandafvisningen. Slidstyrken afhænger af den daglige brug og kvaliteten af den oprindelige påføring. Revner kan repareres lokalt uden at hele overfladen skal fornyes.",
      },
      {
        question: "Kan microcement påføres ovenpå eksisterende fliser?",
        answer:
          "Ja, det er faktisk en af de store fordele ved microcement. Materialet kan påføres direkte ovenpå eksisterende fliser, hvilket sparer tid og penge på nedrivning. Fliserne skal dog være intakte og godt fastsiddende. Løse eller revnede fliser skal udbedres først, og der skal påføres en primer for korrekt vedhæftning.",
      },
      {
        question:
          "Hvad er forskellen på microcement og mikrobeton i badeværelser?",
        answer:
          "Microcement og mikrobeton bruges ofte synonymt, men der er forskel. Microcement er tyndere (1-3 mm) og finkornede, mens mikrobeton er tykkere (5-10 mm) med en grovere tekstur. Til badeværelser anbefales microcement, da det giver en glattere overflade, der er nemmere at rengøre. Mikrobeton bruges oftere til gulve med behov for ekstra slidstyrke.",
      },
    ],
    relatedSlugs: ["fliser", "silkecement", "terrazzo"],
    image: "/images/materials/microcement.jpg",
    imageAlt:
      "Moderne badeværelse med microcement vægge og gulv i varm grå tone",
  },
  {
    slug: "fliser",
    name: "Fliser",
    title: "Fliser til Badeværelse — Typer, Trends & Priser",
    metaTitle: "Fliser til Badeværelse: Typer, Priser & Trends 2026",
    metaDescription:
      "Komplet guide til badeværelsesfliser. Se priser (300-1.200 kr/m²), typer, størrelser og trends. Find de rigtige fliser til dit badeværelse.",
    description:
      "Fliser er det mest udbredte materialevalg til danske badeværelser, og med god grund. De fås i utallige designs, størrelser og prisklasser, og de opfylder alle krav til vådrumssikring, når de monteres korrekt. Fra klassiske hvide metrofliser til store formater i marmor-look — mulighederne er næsten uendelige.",
    priceRange: { from: 300, to: 1200, unit: "kr/m²" },
    pros: [
      "Enormt udvalg i farver, størrelser og designs",
      "Dokumenteret holdbarhed — kan holde 30+ år",
      "Let vedligeholdelse og rengøring",
      "Prisvenligt i budgetenden med fliser fra 300 kr/m²",
      "Opfylder alle danske krav til vådrum iht. DS 484",
    ],
    cons: [
      "Fuger kræver vedligeholdelse og kan misfarves over tid",
      "Koldt underlag uden gulvvarme",
      "Montering kræver erfaring for et flot resultat",
      "Kan virke utidssvarende hvis man vælger kortlivede trends",
    ],
    swatchColors: [
      { name: "Klassisk Hvid", hex: "#F5F5F0" },
      { name: "Terrazzo-look", hex: "#D4C9BD" },
      { name: "Mørk Grafik", hex: "#2C3E50" },
      { name: "Varm Beige", hex: "#D4B896" },
    ],
    faqs: [
      {
        question: "Hvad koster det at flisebelægge et badeværelse?",
        answer:
          "Fliser koster mellem 300 og 1.200 kr. pr. m² afhængigt af kvalitet og design. Dertil kommer håndværkeromkostninger på typisk 500-900 kr. pr. m² for opsætning. For et standard badeværelse på 6-8 m² gulv og 15-20 m² vægge kan du forvente en samlet materialepris på 5.000-25.000 kr. Den samlede pris inkl. arbejdsløn lander typisk på 30.000-80.000 kr.",
      },
      {
        question: "Hvilken størrelse fliser er bedst til små badeværelser?",
        answer:
          "Til små badeværelser anbefales større fliser i formater som 60x60 cm eller 60x120 cm. Større fliser giver færre fuger, hvilket får rummet til at virke mere åbent og rummeligt. Undgå meget små fliser som mosaik på store flader, da de mange fuger kan gøre rummet visuelt uroligt. Mosaik kan dog bruges effektfuldt som accentflade bag håndvasken.",
      },
      {
        question: "Hvad er forskellen på keramiske fliser og porcelænsfliser?",
        answer:
          "Porcelænsfliser (også kaldet klinkefliser) brændes ved højere temperatur end keramiske fliser, hvilket gør dem hårdere og mindre vandabsorberende. Porcelænsfliser har en vandabsorption under 0,5%, mens keramiske fliser typisk ligger på 3-6%. Til gulve i badeværelser anbefales porcelænsfliser, da de er mere slidstærke. Keramiske fliser er til gengæld billigere og fint til vægge.",
      },
      {
        question: "Hvilke flise-trends er populære i 2026?",
        answer:
          "I 2026 ser vi stor interesse for store formater (120x120 cm og 120x260 cm), der giver et næsten fugeløst udtryk. Zellige-fliser med håndlavet look er fortsat populære som accentvæg. Jordfarver som terrakotta, oliven og varme beige-toner dominerer, mens det helt hvide badeværelse er på vej ud. Fliser med 3D-tekstur til accentvægge vinder også frem.",
      },
      {
        question: "Kan man lægge nye fliser ovenpå gamle?",
        answer:
          "Ja, det er muligt at lægge nye fliser direkte ovenpå eksisterende fliser, men det kræver omhyggelig forberedelse. De gamle fliser skal være intakte, godt fastsiddende og rengjort grundigt. Der anvendes en specialklæber eller primer for vedhæftning. Vær opmærksom på, at det øger gulvhøjden med ca. 10-15 mm, hvilket kan påvirke dørtrin og afløb. Vådrumssikringen under de eksisterende fliser skal stadig være intakt.",
      },
    ],
    relatedSlugs: ["klinker", "microcement", "terrazzo"],
    image: "/images/materials/fliser.jpg",
    imageAlt:
      "Badeværelse med store hvide fliser på vægge og mørke fliser på gulv",
  },
  {
    slug: "klinker",
    name: "Klinker",
    title: "Klinker til Badeværelse — Fordele, Ulemper & Valg",
    metaTitle: "Klinker til Badeværelse: Priser, Typer & Guide 2026",
    metaDescription:
      "Alt om klinker til badeværelset. Se priser (250-800 kr/m²), fordele og ulemper. Robust og holdbart valg til gulve og vægge i vådrum.",
    description:
      "Klinker er den robuste klassiker til badeværelsesgulve i Danmark. Med deres høje brændingstemperatur og lave vandabsorption er de ideelle til vådrum. Klinker fås i alt fra rustikke terrakotta-looks til moderne betonlignende overflader, og de er generelt billigere end porcelænsfliser i de større formater.",
    priceRange: { from: 250, to: 800, unit: "kr/m²" },
    pros: [
      "Ekstremt holdbare — kan holde 40+ år med korrekt vedligeholdelse",
      "Lav vandabsorption gør dem ideelle til vådrum",
      "Slidstærke og modstandsdygtige over for kemikalier",
      "Prisvenligt alternativ til store porcelænsfliser",
    ],
    cons: [
      "Begrænset designudvalg sammenlignet med keramiske fliser",
      "Hårdt og koldt underlag uden gulvvarme",
      "Tunge — kræver stærkt underlag ved opsætning på vægge",
    ],
    swatchColors: [
      { name: "Beton Grå", hex: "#8E8E8E" },
      { name: "Terrakotta", hex: "#C67B5C" },
      { name: "Sandsten", hex: "#C2B280" },
      { name: "Antracit", hex: "#3C3C3C" },
    ],
    faqs: [
      {
        question: "Hvad er forskellen på klinker og fliser?",
        answer:
          "Klinker er teknisk set en type flise, der er brændt ved højere temperatur (over 1.200°C) end almindelige keramiske fliser. Det giver dem en tættere struktur med vandabsorption under 3%. I daglig tale bruges 'klinker' ofte om gulvfliser og 'fliser' om vægfliser, men den egentlige forskel ligger i brændingsprocessen og de fysiske egenskaber.",
      },
      {
        question: "Er klinker velegnede til badeværelsesgulve?",
        answer:
          "Klinker er faktisk det optimale valg til badeværelsesgulve. Deres lave vandabsorption og høje slidstyrke gør dem ideelle til vådrum. Vælg klinker med en skridsikker overflade (R10 eller R11 rating) for at undgå glideulykker. Upolerede eller matte klinker giver bedre fodgreb end polerede varianter, især på våde overflader.",
      },
      {
        question: "Kan man bruge klinker på badeværelsesvægge?",
        answer:
          "Ja, klinker kan bruges på vægge, men de er tungere end keramiske fliser og kræver en stærkere klæber og eventuelt et stærkere underlag. Store klinkformater på vægge kræver erfaring ved montering. Mange vælger at bruge klinker på gulvet og lettere keramiske fliser på væggene for at holde omkostningerne nede og gøre opsætningen nemmere.",
      },
      {
        question: "Hvordan vedligeholder man klinker i badeværelset?",
        answer:
          "Klinker er meget vedligeholdelsesvenlige. Daglig rengøring med vand og en mild rengøringsmiddel er tilstrækkeligt. Undgå syre-baserede rengøringsmidler på uglaserede klinker, da de kan ætse overfladen. Fugerne er det svage punkt — de bør imprægneres efter opsætning og genimprægneres hvert 1-2 år for at forhindre misfarvning og skimmelvækst.",
      },
      {
        question: "Hvad koster det at lægge klinker i badeværelset?",
        answer:
          "Klinker koster mellem 250 og 800 kr. pr. m² for selve materialet. Lægning af klinker koster typisk 450-750 kr. pr. m² i håndværkerudgifter, afhængigt af klinkernes størrelse og mønster. Et standard badeværelse med 6-8 m² gulv kan klinkbelægges for 4.000-12.000 kr. i materialer, plus arbejdsløn. Den samlede pris inkl. fuger og klæber lander typisk på 15.000-35.000 kr.",
      },
    ],
    relatedSlugs: ["fliser", "terrazzo", "natursten"],
    image: "/images/materials/klinker.jpg",
    imageAlt:
      "Badeværelsesgulv med store grå klinker og hvide fuger i moderne stil",
  },
  {
    slug: "silkecement",
    name: "Silkecement",
    title: "Silkecement Badeværelse — Det Moderne Alternativ",
    metaTitle: "Silkecement Badeværelse: Pris, Fordele & Guide 2026",
    metaDescription:
      "Alt om silkecement i badeværelset. Se priser (600-1.200 kr/m²), fordele og ulemper. Et blødt, fugeløst alternativ til microcement.",
    description:
      "Silkecement er det blødere alternativ til microcement og vinder hastigt frem i danske badeværelser. Med sin silkeagtige, mat overflade giver den et varmt og indbydende udtryk, der adskiller sig fra microcementens mere industrielle look. Silkecement påføres i flere tynde lag og kan tilpasses i utallige farvetoner.",
    priceRange: { from: 600, to: 1200, unit: "kr/m²" },
    pros: [
      "Blød, silkeagtig overflade med et varmt og organisk udtryk",
      "Fugeløst finish — hygiejnisk og let at rengøre",
      "Kan påføres ovenpå eksisterende overflader",
      "Mere fejltolerant end microcement ved påføring",
      "Fås i et bredt udvalg af farvetoner",
    ],
    cons: [
      "Mindre slidstærk end microcement på gulve med hård trafik",
      "Kræver professionel påføring for optimalt resultat",
      "Skal forsegles regelmæssigt (hvert 1-2 år)",
      "Relativt nyt produkt — færre langvarige erfaringer",
    ],
    swatchColors: [
      { name: "Cremehvid", hex: "#F0EAE0" },
      { name: "Rosenkvarts", hex: "#D4B5A5" },
      { name: "Lys Mokka", hex: "#B8A088" },
      { name: "Støvet Grøn", hex: "#A5B5A0" },
    ],
    faqs: [
      {
        question: "Hvad er forskellen på silkecement og microcement?",
        answer:
          "Silkecement har en blødere og mere organisk finish sammenlignet med microcementens glattere, mere industrielle look. Silkecement er typisk tyndere (0,5-2 mm) og har en mere mat, tekstureret overflade. Microcement er hårdere og mere slidstærk, mens silkecement scorer højere på æstetik og varme. Priserne overlapper, men silkecement er generelt lidt billigere i materialeomkostninger.",
      },
      {
        question: "Kan silkecement bruges i brusenichen?",
        answer:
          "Ja, silkecement kan bruges i brusenichen, men det kræver ekstra opmærksomhed på forsegling. Overfladen skal behandles med en vandafvisende sealer specifikt beregnet til direkte vandpåvirkning. Den underliggende vådrumssikring skal udføres iht. DS 484 uanset overfladetype. Vælg en erfaren håndværker, der har dokumenteret erfaring med silkecement i vådzone.",
      },
      {
        question: "Hvor lang tid tager det at påføre silkecement?",
        answer:
          "Et gennemsnitligt badeværelse tager typisk 4-6 arbejdsdage at færdigpåføre med silkecement. Det inkluderer forberedelse af underlag (1 dag), primer (1 dag), 2-3 lag silkecement med tørretid mellem hvert lag (2-3 dage), og afsluttende forsegling (1 dag). Tørretiderne kan variere afhængigt af temperatur og luftfugtighed i rummet.",
      },
      {
        question: "Er silkecement holdbart nok til badeværelsesgulve?",
        answer:
          "Silkecement kan bruges til badeværelsesgulve, men det er ikke det mest slidstærke valg. Det fungerer bedst i badeværelser med normal brug. Til gulve med høj trafik (f.eks. familiebadeværelser) anbefales microcement eller fliser i stedet. Silkecement på gulve kræver hyppigere vedligeholdelse og genforsegling sammenlignet med vægge, typisk hvert år.",
      },
      {
        question: "Hvad koster silkecement sammenlignet med fliser?",
        answer:
          "Silkecement koster 600-1.200 kr. pr. m² inkl. materialer, mens standardfliser kan fås fra 300 kr. pr. m². Til gengæld sparer du udgiften til fugning, og påføringsomkostningerne er ofte lavere, da der ikke kræves fugemasse, krydser og afrensning. For et komplet badeværelse er silkecement typisk 20-40% dyrere end en midterklasse fliseløsning.",
      },
    ],
    relatedSlugs: ["microcement", "fliser", "terrazzo"],
    image: "/images/materials/silkecement.jpg",
    imageAlt:
      "Elegant badeværelse med silkecement vægge i varm cremehvid tone",
  },
  {
    slug: "terrazzo",
    name: "Terrazzo",
    title: "Terrazzo Badeværelse — Klassisk Stil i Moderne Bad",
    metaTitle: "Terrazzo Badeværelse: Pris, Inspiration & Guide 2026",
    metaDescription:
      "Komplet guide til terrazzo i badeværelset. Se priser (900-2.000 kr/m²), inspiration og praktiske tips. Den klassiske retro-trend i moderne fortolkning.",
    description:
      "Terrazzo oplever en massiv renæssance i danske badeværelser. Det klassiske materiale, der består af marmor- eller stenchips indstøbt i cement eller harpiks, giver en helt unik og karakterfuld overflade. Fra subtile hvide varianter med fine stenchips til dramatiske designs med store, farverige fragmenter — terrazzo tilbyder et udtryk, som ingen andre materialer kan matche.",
    priceRange: { from: 900, to: 2000, unit: "kr/m²" },
    pros: [
      "Unik, karakterfuld overflade der aldrig bliver kedelig",
      "Ekstremt holdbar — terrazzogulve kan holde 75+ år",
      "Bæredygtigt valg — ofte fremstillet af genbrugsmaterialer",
      "Tidløs æstetik der kombinerer retro og moderne",
      "Kan støbes i præcist det farvemix, du ønsker",
    ],
    cons: [
      "Høj pris — et af de dyrere materialevalg",
      "Tung — kræver stærkt undergulv og professionel installation",
      "Lang installationstid med støbning, slibning og polering",
      "Kold overflade — gulvvarme anbefales stærkt",
    ],
    swatchColors: [
      { name: "Klassisk Hvid", hex: "#EDE8E0" },
      { name: "Rosa Venezia", hex: "#D4A5A0" },
      { name: "Grøn Verona", hex: "#8BA888" },
      { name: "Grafitblå", hex: "#5A6878" },
    ],
    faqs: [
      {
        question: "Hvad koster ægte terrazzo i badeværelset?",
        answer:
          "Ægte in-situ støbt terrazzo koster typisk 900-2.000 kr. pr. m² for materialer alene. Dertil kommer professionel installation, som kan koste 800-1.500 kr. pr. m². Terrazzofliser (prefabrikerede) er et billigere alternativ til 500-1.200 kr. pr. m². For et badeværelse på 6-8 m² gulv skal du forvente en samlet pris på 15.000-50.000 kr. inkl. arbejdsløn.",
      },
      {
        question: "Er terrazzo praktisk til badeværelser?",
        answer:
          "Terrazzo er faktisk et af de mest praktiske materialer til badeværelser. Den polerede overflade er vandafvisende og nem at rengøre, og materialet er ekstremt slidstærkt. Terrazzogulve i italienske bygninger har holdt i over 100 år. Det vigtigste er korrekt vådrumssikring under terrazzoen og en god imprægnering af overfladen for at forhindre pletter.",
      },
      {
        question: "Kan man få terrazzo-look uden prisen for ægte terrazzo?",
        answer:
          "Ja, der findes flere alternativer. Terrazzofliser i porcelæn giver et overbevisende terrazzo-look til 400-800 kr. pr. m². Terrazzo-vinyl er den billigste løsning til 150-300 kr. pr. m², men egner sig primært til tørre dele af badeværelset. Microcement med indstøbte chips er et andet alternativ, der giver et lignende udtryk med fugeløs overflade.",
      },
      {
        question: "Hvilke typer terrazzo passer bedst til badeværelser?",
        answer:
          "Til badeværelser anbefales cementbaseret terrazzo med fine chips (under 10 mm) for en glat, let-rengørelig overflade. Harpiks-baseret terrazzo er mere vandtæt og lettere, men også dyrere. Til vægge kan man vælge tyndere terrazzoplader. Undgå stor-chip terrazzo på gulve, da den upolerede overflade mellem chipsene kan samle snavs.",
      },
      {
        question: "Hvordan vedligeholder man terrazzo i badeværelset?",
        answer:
          "Terrazzo kræver relativt lidt vedligeholdelse. Daglig rengøring med pH-neutralt rengøringsmiddel er tilstrækkeligt. Undgå syreholdige rengøringsmidler, da de kan ætse cementen. Overfladen bør genpoleres professionelt hvert 5-10 år for at bevare glansen. Imprægnering med en stenbeskyttelse hvert 2-3 år forhindrer pletter og letter den daglige rengøring.",
      },
    ],
    relatedSlugs: ["microcement", "fliser", "natursten"],
    image: "/images/materials/terrazzo.jpg",
    imageAlt:
      "Badeværelse med terrazzogulv i hvide og rosa toner med synlige stenchips",
  },
  {
    slug: "natursten",
    name: "Natursten",
    title: "Natursten i Badeværelse — Luksus, Priser & Vedligehold",
    metaTitle: "Natursten Badeværelse: Marmor, Priser & Guide 2026",
    metaDescription:
      "Komplet guide til natursten i badeværelset. Se priser (1.200-3.000 kr/m²), vedligeholdelse og inspiration. Marmor, granit, skifer og travertin.",
    description:
      "Natursten er det ultimative luksusvalg til badeværelser. Marmor, granit, skifer og travertin giver hver deres unikke udtryk, og ingen to stenplader er ens. Natursten er en investering, der tilføjer karakter og værdi til boligen. Det kræver mere vedligeholdelse end kunstige materialer, men belønner med en autenticitet og dybde, som intet andet materiale kan matche.",
    priceRange: { from: 1200, to: 3000, unit: "kr/m²" },
    pros: [
      "Uovertruffen æstetik og naturlig skønhed",
      "Unik — ingen to plader er ens",
      "Øger boligens værdi markant",
      "Tidløs luksus der aldrig går af mode",
      "Naturligt køligt i varme perioder — behageligt til barfodsgang",
    ],
    cons: [
      "Høj pris — det dyreste materialevalg",
      "Kræver regelmæssig imprægnering og vedligeholdelse",
      "Porøst — marmor og travertin kan pletdannes af syrer",
      "Tung — kræver stærkt underlag og professionel montering",
    ],
    swatchColors: [
      { name: "Carrara Marmor", hex: "#E8E4E0" },
      { name: "Emperador Brun", hex: "#6B4A3A" },
      { name: "Sort Skifer", hex: "#2D2D2D" },
      { name: "Travertin Beige", hex: "#D4C4A8" },
    ],
    faqs: [
      {
        question: "Hvilken natursten er bedst til badeværelser?",
        answer:
          "Granit og skifer er de mest praktiske valg, da de er hårde og mindre porøse end marmor. Granit tåler vand og kemikalier godt og kræver minimal vedligeholdelse. Marmor er det mest populære valg æstetisk, men kræver omhyggelig vedligeholdelse. Travertin giver et varmt, mediterransk look men er porøst og kræver forsegling. Vælg altid en stentype, der matcher dit vedligeholdelsesbehov.",
      },
      {
        question: "Hvad koster marmor i badeværelset?",
        answer:
          "Marmorfliser koster typisk 1.200-3.000 kr. pr. m² afhængigt af type og oprindelse. Carrara-marmor fra Italien ligger i den lave ende, mens sjældnere typer som Calacatta kan koste over 5.000 kr. pr. m². Installation koster 600-1.200 kr. pr. m² ekstra. For et badeværelse på 6-8 m² gulv og 15 m² vægge kan den samlede pris nemt overstige 100.000 kr.",
      },
      {
        question: "Hvordan beskytter man natursten mod vandskader?",
        answer:
          "Natursten skal imprægneres med en specialforsegler inden brug og derefter hvert 6-12 måneder. Brug kun pH-neutrale rengøringsmidler — aldrig eddike, citron eller andre syreholdige produkter. Tør op efter brusebad for at undgå vandpletter, især på marmor. Sørg for korrekt vådrumssikring under stenen iht. DS 484, da natursten i sig selv ikke er vandtæt.",
      },
      {
        question: "Kan natursten bruges på badeværelsesgulve?",
        answer:
          "Ja, men vælg en sten med tilstrækkelig skridsikkerhed. Poleret marmor kan være glat, når det er vådt — vælg i stedet en honed (mat) eller børstet finish til gulve. Granit og skifer med naturlig tekstur giver godt fodgreb. Natursten er tungt, så undergulvet skal kunne bære belastningen. Gulvvarme fungerer fantastisk med natursten, da det leder varme effektivt.",
      },
      {
        question: "Er natursten i badeværelset pengene værd?",
        answer:
          "Det afhænger af dit perspektiv og budget. Natursten øger boligens værdi og giver en luksusoplevelse, som kunstige materialer ikke kan matche. Til gengæld er den samlede investering ofte 2-3 gange højere end fliser, inkl. vedligeholdelse over 20 år. Hvis du elsker naturlige materialer og er villig til at vedligeholde dem, er det absolut pengene værd. Et kompromis kan være natursten som accentvæg kombineret med porcelænsfliser.",
      },
    ],
    relatedSlugs: ["terrazzo", "fliser", "microcement"],
    image: "/images/materials/natursten.jpg",
    imageAlt:
      "Luksuriøst badeværelse med Carrara marmor på vægge og gulv med fritstående badekar",
  },
];
