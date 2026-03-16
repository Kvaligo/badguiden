"use client";

import { useEffect, useState, useRef } from "react";

export interface TOCItem {
  id: string;
  label: string;
}

interface StickyTOCProps {
  items: TOCItem[];
}

export function StickyTOC({ items }: StickyTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const callback: IntersectionObserverCallback = (entries) => {
      // Find the topmost visible section
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      className="hidden lg:block sticky top-24"
      aria-label="Indholdsfortegnelse"
    >
      {/* Progress bar */}
      <div className="mb-4 h-0.5 w-full rounded-full bg-card">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted font-sans">
        Indhold
      </p>

      <ul className="space-y-1">
        {items.map(({ id, label }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block rounded-md px-3 py-1.5 text-[13px] leading-snug transition-colors font-sans ${
                  isActive
                    ? "bg-accent/15 font-semibold text-primary"
                    : "text-text-muted hover:text-text-main hover:bg-card/60"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
