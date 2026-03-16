interface ComparisonOption {
  name: string;
  pros: string[];
  cons: string[];
  price?: string;
}

interface ComparisonTableProps {
  optionA: ComparisonOption;
  optionB: ComparisonOption;
  title?: string;
  className?: string;
}

function formatPrice(price: string) {
  return price;
}

export function ComparisonTable({
  optionA,
  optionB,
  title,
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`my-8 ${className}`}>
      {title && (
        <h3 className="font-serif text-xl font-bold text-text-main mb-5 text-center">
          {title}
        </h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <ComparisonCard option={optionA} />
        <ComparisonCard option={optionB} />
      </div>
    </div>
  );
}

function ComparisonCard({ option }: { option: ComparisonOption }) {
  return (
    <div className="rounded-lg border border-card bg-white p-5">
      <h4 className="font-serif text-lg font-bold text-text-main">
        {option.name}
      </h4>

      {option.price && (
        <p className="mt-1 text-sm font-semibold text-primary font-sans">
          {formatPrice(option.price)}
        </p>
      )}

      {/* Pros */}
      {option.pros.length > 0 && (
        <ul className="mt-4 space-y-2">
          {option.pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-sans">
              <svg
                className="h-4 w-4 shrink-0 mt-0.5 text-[#4A8C5C]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="text-text-main">{pro}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Cons */}
      {option.cons.length > 0 && (
        <ul className="mt-3 space-y-2">
          {option.cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-sans">
              <svg
                className="h-4 w-4 shrink-0 mt-0.5 text-[#C0392B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="text-text-main">{con}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
