import Link from "next/link";
import { SITE_NAME, SPECIALIST_URL, KVALIGO_URL } from "@/lib/constants";
import { navCategories } from "@/data/navigation";

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA banner */}
      <section className="border-t border-accent/20 bg-card py-12 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-text-main">
            Klar til dit nye badeværelse?
          </h2>
          <p className="mt-3 text-base text-text-muted font-sans">
            Sammenlign priser og find kvalitetssikrede badeværelse-specialister
            i dit område.
          </p>
          <a
            href={SPECIALIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-primary-dark transition-opacity hover:opacity-90 font-sans"
          >
            Få 3 gratis tilbud via KvaliBad
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-primary-dark">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {navCategories.map((category) => (
              <div key={category.label}>
                <Link
                  href={category.href}
                  className="text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-accent font-sans"
                >
                  {category.label}
                </Link>
                <ul className="mt-3 space-y-2">
                  {category.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="text-sm text-white/55 transition-colors hover:text-white/90 font-sans"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-white">
                {SITE_NAME}
              </span>
              <span className="text-sm text-white/40 font-sans">
                &mdash; del af{" "}
                <a
                  href={KVALIGO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 transition-colors hover:text-white/70"
                >
                  Kvaligo-netværket
                </a>
              </span>
            </div>
            <nav className="flex items-center gap-5 text-sm text-white/50 font-sans">
              <Link
                href="/om-os"
                className="transition-colors hover:text-white/80"
              >
                Om os
              </Link>
              <Link
                href="/kontakt"
                className="transition-colors hover:text-white/80"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
