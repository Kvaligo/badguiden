"use client";

import { useState } from "react";
import MasonryGrid from "@/components/MasonryGrid";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const filterCategories = [
  "Alle",
  "Moderne",
  "Klassisk",
  "Minimalistisk",
  "Luksus",
  "Lille bad",
] as const;

type FilterCategory = (typeof filterCategories)[number];

interface InspirationCard {
  title: string;
  category: Exclude<FilterCategory, "Alle">;
  aspectClass: string;
  image: string;
  alt: string;
}

const inspirationCards: InspirationCard[] = [
  {
    title: "Moderne hvidt badeværelse",
    category: "Moderne",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/moderne-hvidt.png",
    alt: "Moderne hvidt badeværelse med rene linjer og lyse fliser",
  },
  {
    title: "Skandinavisk spa-stil",
    category: "Minimalistisk",
    aspectClass: "aspect-square",
    image: "/images/gallery/skandinavisk-spa.png",
    alt: "Skandinavisk spa-inspireret badeværelse med naturmaterialer",
  },
  {
    title: "Mørkt luksus-bad med messing",
    category: "Luksus",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/moerk-luksus.png",
    alt: "Mørkt luksus-badeværelse med messingarmatur og mørke fliser",
  },
  {
    title: "Klassisk marmor-badeværelse",
    category: "Klassisk",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/middelhav.png",
    alt: "Klassisk marmor-badeværelse med tidløst design",
  },
  {
    title: "Lille bad med smarte løsninger",
    category: "Lille bad",
    aspectClass: "aspect-square",
    image: "/images/gallery/lille-smart.png",
    alt: "Lille badeværelse med smarte pladsbesparende løsninger",
  },
  {
    title: "Terrazzo-gulv og hvide vægge",
    category: "Moderne",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/retro-terrazzo.png",
    alt: "Moderne badeværelse med terrazzo-gulv og hvide vægge",
  },
  {
    title: "Microcement i hele rummet",
    category: "Minimalistisk",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/monokrom-graa.png",
    alt: "Minimalistisk badeværelse med microcement på gulv og vægge",
  },
  {
    title: "Sort armatur og hvide fliser",
    category: "Moderne",
    aspectClass: "aspect-square",
    image: "/images/gallery/ultra-moderne.png",
    alt: "Ultra-moderne badeværelse med sort armatur og hvide fliser",
  },
  {
    title: "Stor walk-in bruser",
    category: "Luksus",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/vaadrum.png",
    alt: "Luksuriøs walk-in bruser med glasvæg og regnbruser",
  },
  {
    title: "Klassisk metro-fliser med trægulv",
    category: "Klassisk",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/rustik-kobber.png",
    alt: "Klassisk badeværelse med metrofliser og varmt trægulv",
  },
  {
    title: "Kompakt badeværelse med glasvæg",
    category: "Lille bad",
    aspectClass: "aspect-square",
    image: "/images/gallery/tilgaengeligt.png",
    alt: "Kompakt badeværelse med glasvæg og niveaufri bruser",
  },
  {
    title: "Japansk inspireret minimalistisk bad",
    category: "Minimalistisk",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/japansk-zen.png",
    alt: "Japansk zen-inspireret minimalistisk badeværelse",
  },
  {
    title: "Industrielt badeværelse",
    category: "Moderne",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/industriel.png",
    alt: "Industrielt badeværelse med rå betonvægge og synlige rør",
  },
  {
    title: "Kystinspireret badeværelse",
    category: "Klassisk",
    aspectClass: "aspect-square",
    image: "/images/gallery/kystinspireret.png",
    alt: "Kystinspireret badeværelse med lyseblå toner og naturmaterialer",
  },
  {
    title: "Art deco badeværelse",
    category: "Luksus",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/art-deco.png",
    alt: "Art deco-inspireret luksus-badeværelse med gyldne detaljer",
  },
  {
    title: "Bæredygtigt badeværelse",
    category: "Moderne",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/baeredygtig.png",
    alt: "Bæredygtigt badeværelse med genbrugsmaterialer og naturlige toner",
  },
  {
    title: "Biofilt badeværelse med planter",
    category: "Minimalistisk",
    aspectClass: "aspect-square",
    image: "/images/gallery/biofil.png",
    alt: "Biofilt badeværelse fyldt med grønne planter og naturligt lys",
  },
  {
    title: "Dobbelt håndvask i luksus-bad",
    category: "Luksus",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/dobbelt-vask.png",
    alt: "Luksus-badeværelse med dobbelt håndvask og stort spejl",
  },
  {
    title: "En-suite soveværelse med bad",
    category: "Luksus",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/ensuite.png",
    alt: "Elegant en-suite badeværelse integreret med soveværelset",
  },
  {
    title: "Familiebadeværelse med plads til alle",
    category: "Lille bad",
    aspectClass: "aspect-square",
    image: "/images/gallery/familie-bad.png",
    alt: "Funktionelt familiebadeværelse med smarte opbevaringsløsninger",
  },
  {
    title: "Grønne subwayfliser",
    category: "Klassisk",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/groen-subway.png",
    alt: "Badeværelse med grønne subwayfliser og messingarmaturer",
  },
  {
    title: "Hotel-inspireret badeværelse",
    category: "Luksus",
    aspectClass: "aspect-[3/4]",
    image: "/images/gallery/hotel-stil.png",
    alt: "Hotel-inspireret luksus-badeværelse med fritstående badekar",
  },
  {
    title: "Varme jordfarver",
    category: "Klassisk",
    aspectClass: "aspect-square",
    image: "/images/gallery/jordfarver.png",
    alt: "Badeværelse i varme jordfarver med terracotta og sandtoner",
  },
  {
    title: "Pastelrosa badeværelse",
    category: "Moderne",
    aspectClass: "aspect-[4/5]",
    image: "/images/gallery/pastel-rosa.png",
    alt: "Moderne badeværelse med bløde pastelrosa toner og hvide detaljer",
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export default function InspirationGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Alle");

  const filteredCards =
    activeFilter === "Alle"
      ? inspirationCards
      : inspirationCards.filter((card) => card.category === activeFilter);

  return (
    <>
      {/* Filter buttons */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all font-sans ${
              activeFilter === category
                ? "bg-primary text-white shadow-sm"
                : "border border-card bg-white text-text-main hover:border-primary/30 hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <MasonryGrid>
        {filteredCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="group cursor-pointer overflow-hidden rounded-xl border border-card transition-all hover:border-primary/20 hover:shadow-lg"
          >
            <div
              className={`${card.aspectClass} relative overflow-hidden bg-gray-100`}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-end p-5">
                <div className="w-full">
                  <span className="mb-2 inline-block rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-primary font-sans backdrop-blur-sm">
                    {card.category}
                  </span>
                  <h3 className="font-serif text-base font-bold leading-snug text-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </MasonryGrid>
    </>
  );
}
