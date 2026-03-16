interface Swatch {
  name: string;
  hex: string;
}

interface MaterialSwatchProps {
  swatches: Swatch[];
  className?: string;
}

export function MaterialSwatch({ swatches, className = "" }: MaterialSwatchProps) {
  if (swatches.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {swatches.map((swatch) => (
        <div
          key={swatch.hex}
          className="flex items-center gap-2 rounded-full bg-white border border-card pl-1 pr-3 py-1"
        >
          <span
            className="inline-block h-6 w-6 rounded-full border border-black/10 shrink-0"
            style={{ backgroundColor: swatch.hex }}
            aria-label={swatch.name}
          />
          <span className="text-sm text-text-main font-sans whitespace-nowrap">
            {swatch.name}
          </span>
        </div>
      ))}
    </div>
  );
}
