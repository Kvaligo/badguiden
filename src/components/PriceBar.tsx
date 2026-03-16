interface PriceBarProps {
  from: number;
  to: number;
  unit: string;
  label?: string;
  className?: string;
}

function formatPrice(n: number): string {
  return n.toLocaleString("da-DK");
}

export function PriceBar({ from, to, unit, label, className = "" }: PriceBarProps) {
  return (
    <div className={`my-6 ${className}`}>
      {label && (
        <p className="mb-2 text-sm font-semibold text-text-muted uppercase tracking-wider font-sans">
          {label}
        </p>
      )}
      <div className="rounded-lg bg-white border border-card p-4">
        {/* Price range text */}
        <div className="flex items-baseline justify-between mb-3">
          <span className="font-serif text-xl font-bold text-primary">
            {formatPrice(from)} &ndash; {formatPrice(to)} {unit}
          </span>
        </div>

        {/* Gradient bar */}
        <div className="relative h-3 w-full rounded-full overflow-hidden bg-card">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(to right, #2D5A63, #E8B86D)",
            }}
          />
        </div>

        {/* Labels under bar */}
        <div className="flex justify-between mt-1.5">
          <span className="text-xs text-text-muted font-sans">Budget</span>
          <span className="text-xs text-text-muted font-sans">Luksus</span>
        </div>
      </div>
    </div>
  );
}
