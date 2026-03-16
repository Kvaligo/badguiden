"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import { navCategories, type NavCategory } from "@/data/navigation";

export default function MagazineHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 44);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  return (
    <>
      {/* Layer 1: Utility bar */}
      <div className="bg-primary-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-5 px-4 py-2 sm:px-6 lg:px-8">
          <Link
            href="/om-os"
            className="text-xs text-white/60 transition-colors hover:text-white/90 font-sans"
          >
            Om os
          </Link>
          <Link
            href="/kontakt"
            className="text-xs text-white/60 transition-colors hover:text-white/90 font-sans"
          >
            Kontakt
          </Link>
        </div>
      </div>

      {/* Layer 2 + 3: Logo + Navigation (sticky unit) */}
      <header
        ref={headerRef}
        className={`bg-surface transition-shadow duration-200 ${
          isSticky ? "sticky top-0 z-50 shadow-sm" : ""
        }`}
      >
        {/* Logo area */}
        <div className="border-b border-card">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1 text-text-main"
              aria-label="Åbn menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {/* Centered logo block */}
            <div className="flex-1 text-center">
              <Link href="/" className="inline-block">
                <span className="font-serif text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
                  {SITE_NAME}
                </span>
              </Link>
              <p className="mt-0.5 text-xs text-text-muted font-sans hidden sm:block">
                {SITE_TAGLINE}
              </p>
            </div>

            {/* Spacer to balance hamburger on mobile */}
            <div className="w-6 lg:hidden" />
          </div>
        </div>

        {/* Layer 3: Desktop category navigation */}
        <nav className="hidden lg:block border-b border-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center justify-center gap-0">
              {navCategories.map((category) => (
                <li
                  key={category.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(category.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={category.href}
                    className={`flex items-center gap-1 px-5 py-3 text-sm font-medium transition-colors font-sans ${
                      activeDropdown === category.label
                        ? "text-primary"
                        : "text-text-main hover:text-primary"
                    }`}
                  >
                    {category.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-150 ${
                        activeDropdown === category.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Mega dropdown */}
                  {activeDropdown === category.label && (
                    <MegaDropdown category={category} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Mega dropdown (desktop)                                            */
/* ------------------------------------------------------------------ */

function MegaDropdown({ category }: { category: NavCategory }) {
  return (
    <div className="absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 pt-0">
      <div className="rounded-b-lg border border-t-0 border-card bg-white shadow-lg">
        <div className="p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted font-sans">
            {category.description}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {category.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="group rounded-md px-3 py-2.5 transition-colors hover:bg-card/70"
              >
                <span className="block text-sm font-medium text-text-main group-hover:text-primary font-sans">
                  {child.label}
                </span>
                <span className="block text-xs text-text-muted mt-0.5 font-sans">
                  {child.description}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-card pt-3">
            <Link
              href={category.href}
              className="text-xs font-semibold text-primary hover:underline font-sans"
            >
              Se alle {category.label.toLowerCase()} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile fullscreen menu                                             */
/* ------------------------------------------------------------------ */

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[60] bg-surface overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-card px-4 py-4">
        <span className="font-serif text-2xl font-bold text-primary-dark">
          {SITE_NAME}
        </span>
        <button
          onClick={onClose}
          className="p-1 text-text-main"
          aria-label="Luk menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Category grid */}
      <div className="p-4 space-y-3">
        {navCategories.map((category) => {
          const isExpanded = expanded === category.label;
          return (
            <div
              key={category.label}
              className="rounded-lg border border-card bg-white overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpanded(isExpanded ? null : category.label)
                }
                className="flex w-full items-center justify-between px-5 py-4"
              >
                <div className="text-left">
                  <span className="block text-base font-serif font-bold text-text-main">
                    {category.label}
                  </span>
                  <span className="block text-xs text-text-muted mt-0.5 font-sans">
                    {category.description}
                  </span>
                </div>
                <svg
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isExpanded && (
                <div className="border-t border-card px-5 py-3 space-y-1">
                  {category.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block rounded-md px-3 py-2 text-sm text-text-main hover:bg-card/70 font-sans"
                    >
                      {child.label}
                    </Link>
                  ))}
                  <Link
                    href={category.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-xs font-semibold text-primary font-sans"
                  >
                    Se alle {category.label.toLowerCase()} &rarr;
                  </Link>
                </div>
              )}
            </div>
          );
        })}

        {/* Utility links */}
        <div className="pt-4 border-t border-card flex gap-4">
          <Link
            href="/om-os"
            onClick={onClose}
            className="text-sm text-text-muted hover:text-text-main font-sans"
          >
            Om os
          </Link>
          <Link
            href="/kontakt"
            onClick={onClose}
            className="text-sm text-text-muted hover:text-text-main font-sans"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
