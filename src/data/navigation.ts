export interface NavChild {
  label: string;
  href: string;
  description: string;
}

export interface NavCategory {
  label: string;
  href: string;
  description: string;
  children: NavChild[];
}

export const navCategories: NavCategory[] = [
  {
    label: "Materialer",
    href: "/materialer",
    description: "Alt om materialer til badeværelset",
    children: [
      { label: "Microcement", href: "/materialer/microcement", description: "Det populære fugeløse valg" },
      { label: "Fliser", href: "/materialer/fliser", description: "Klassisk og holdbart" },
      { label: "Klinker", href: "/materialer/klinker", description: "Robust gulvbelægning" },
      { label: "Silkecement", href: "/materialer/silkecement", description: "Moderne alternativ til fliser" },
      { label: "Terrazzo", href: "/materialer/terrazzo", description: "Klassisk stil i moderne bad" },
      { label: "Natursten", href: "/materialer/natursten", description: "Luksus og naturlig skønhed" },
    ],
  },
  {
    label: "Elementer",
    href: "/elementer",
    description: "Brusekabiner, håndvaske, armaturer og mere",
    children: [
      { label: "Brusekabine", href: "/elementer/brusekabine", description: "Typer, størrelser & priser" },
      { label: "Brusevæg", href: "/elementer/brusevaeg", description: "Glas, typer & montering" },
      { label: "Håndvask", href: "/elementer/haandvask", description: "Typer & materialer" },
      { label: "Armatur", href: "/elementer/armatur", description: "Typer, finish & valg" },
      { label: "Vandhane", href: "/elementer/vandhane", description: "Guide til det rigtige valg" },
      { label: "Ventilation", href: "/elementer/ventilation", description: "Krav & typer" },
      { label: "Spejl", href: "/elementer/spejl", description: "Typer, størrelser & tips" },
      { label: "Glasvæg", href: "/elementer/glasvaeg", description: "Typer, priser & montering" },
      { label: "Gulvvarme", href: "/elementer/gulvvarme", description: "Typer, pris & installation" },
    ],
  },
  {
    label: "Indretning",
    href: "/indretning",
    description: "Tips og trends til indretning af badeværelset",
    children: [
      { label: "Opbevaring", href: "/indretning/opbevaring", description: "Smarte løsninger" },
      { label: "Møbler", href: "/indretning/mobler", description: "Skabe, hylder & mere" },
      { label: "Lille badeværelse", href: "/indretning/lille-badevaerelse", description: "Pladsoptimering" },
      { label: "Farver", href: "/indretning/farver", description: "Trends & inspiration" },
    ],
  },
  {
    label: "Guides",
    href: "/guide",
    description: "Praktiske guides til renovering og vedligehold",
    children: [
      { label: "Vådrumssikring", href: "/guide/vaadrumssikring", description: "Krav & regler" },
      { label: "Renovering trin-for-trin", href: "/guide/renovering-trin-for-trin", description: "Komplet procesguide" },
      { label: "Byggetilladelse", href: "/guide/byggetilladelse", description: "Hvornår skal du søge?" },
      { label: "Gør-det-selv", href: "/guide/goer-det-selv", description: "Hvad kan du selv lave?" },
      { label: "Fejl at undgå", href: "/guide/fejl-at-undgaa", description: "De 10 mest typiske" },
      { label: "Vedligeholdelse", href: "/guide/vedligeholdelse", description: "Hold dit bad nyt" },
      { label: "Trends 2026", href: "/guide/trends-2026", description: "Hvad er hot i år?" },
    ],
  },
  {
    label: "Priser",
    href: "/priser",
    description: "Komplet prisoversigt og sammenligninger",
    children: [
      { label: "Microcement vs. fliser", href: "/priser/microcement-vs-fliser", description: "Pris & holdbarhed" },
      { label: "Brusekabine vs. brusevæg", href: "/priser/brusekabine-vs-brusevaeg", description: "Hvad skal du vælge?" },
      { label: "Pris pr. m²", href: "/priser/pr-kvadratmeter", description: "Komplet oversigt" },
      { label: "Budget vs. luksus", href: "/priser/budget-vs-luksus", description: "Hvad får du?" },
      { label: "Køkken vs. badeværelse", href: "/priser/koekken-vs-badevaerelse", description: "Hvad koster mest?" },
    ],
  },
  {
    label: "Køkken",
    href: "/koekken",
    description: "Guide til køkkenrenovering",
    children: [
      { label: "Pris", href: "/koekken/pris", description: "Hvad koster et nyt køkken?" },
      { label: "Inspiration", href: "/koekken/inspiration", description: "Idéer & trends" },
      { label: "Materialer", href: "/koekken/materialer", description: "Bordplader & fronter" },
      { label: "Gør-det-selv", href: "/koekken/goer-det-selv", description: "Hvad kan du selv?" },
    ],
  },
];
