"use client";

import { useRef, useState, useCallback } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

export function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    if (child) {
      container.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const childWidth = (container.children[0] as HTMLElement)?.offsetWidth || 1;
    const index = Math.round(scrollLeft / childWidth);
    setActiveIndex(Math.min(index, images.length - 1));
  }, [images.length]);

  const scrollPrev = useCallback(() => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    scrollTo(newIndex);
  }, [activeIndex, scrollTo]);

  const scrollNext = useCallback(() => {
    const newIndex = Math.min(activeIndex + 1, images.length - 1);
    setActiveIndex(newIndex);
    scrollTo(newIndex);
  }, [activeIndex, images.length, scrollTo]);

  if (images.length === 0) return null;

  return (
    <div className={`relative my-6 ${className}`}>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide gap-4 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-none w-full sm:w-[85%] snap-center"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {image.alt && (
              <p className="mt-2 text-xs text-text-muted text-center font-sans">
                {image.alt}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition-opacity disabled:opacity-30 hover:bg-white"
            aria-label="Forrige billede"
          >
            <svg
              className="h-4 w-4 text-text-main"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={activeIndex === images.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition-opacity disabled:opacity-30 hover:bg-white"
            aria-label="Næste billede"
          >
            <svg
              className="h-4 w-4 text-text-main"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                scrollTo(index);
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={`Gå til billede ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
