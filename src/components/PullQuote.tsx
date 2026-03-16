interface PullQuoteProps {
  quote: string;
  author?: string;
}

export function PullQuote({ quote, author }: PullQuoteProps) {
  return (
    <figure className="my-10 px-2">
      <div className="relative mx-auto max-w-2xl">
        {/* Decorative opening quote mark */}
        <span
          className="absolute -top-6 -left-2 font-serif text-7xl leading-none text-accent/40 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="relative pl-6">
          <p className="font-serif text-xl italic leading-relaxed text-text-main sm:text-2xl">
            {quote}
          </p>
        </blockquote>

        {/* Decorative closing quote mark */}
        <span
          className="absolute -bottom-8 right-0 font-serif text-7xl leading-none text-accent/40 select-none"
          aria-hidden="true"
        >
          &rdquo;
        </span>
      </div>

      {author && (
        <figcaption className="mt-5 text-center text-sm text-text-muted font-sans">
          &mdash; {author}
        </figcaption>
      )}
    </figure>
  );
}
