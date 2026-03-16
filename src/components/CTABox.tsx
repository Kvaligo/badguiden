import { SPECIALIST_URL, KVALIGO_URL } from "@/lib/constants";

interface CTABoxProps {
  variant?: "inline" | "section";
  heading?: string;
  text?: string;
  className?: string;
}

export function CTABox({
  variant = "inline",
  heading = "Klar til at renovere dit badeværelse?",
  text = "Få 3 uforpligtende tilbud fra kvalitetssikrede håndværkere via KvaliBad.dk — eller find den rette fagmand gennem Kvaligo.dk.",
  className = "",
}: CTABoxProps) {
  if (variant === "section") {
    return (
      <section
        className={`bg-primary-dark py-16 px-6 text-center ${className}`}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 font-sans">
            {text}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SPECIALIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-primary-dark transition-opacity hover:opacity-90 font-sans"
            >
              Få tilbud via KvaliBad
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
            <a
              href={KVALIGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 font-sans"
            >
              Se alle services via Kvaligo
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Inline variant
  return (
    <div
      className={`rounded-lg border-l-4 border-accent bg-card/60 px-6 py-5 ${className}`}
    >
      <h3 className="font-serif text-lg font-bold text-text-main">
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans">
        {text}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={SPECIALIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-sans"
        >
          Få tilbud via KvaliBad
          <svg
            className="h-3.5 w-3.5"
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
        <a
          href={KVALIGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 font-sans"
        >
          Kvaligo.dk
        </a>
      </div>
    </div>
  );
}
