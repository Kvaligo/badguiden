import Link from "next/link";
import type { CategoryCard as CategoryCardType } from "@/data/types";

interface CategoryCardProps {
  card: CategoryCardType;
  className?: string;
}

export function CategoryCard({ card, className = "" }: CategoryCardProps) {
  return (
    <Link
      href={card.href}
      className={`group block overflow-hidden rounded-lg bg-white border border-card transition-all duration-200 hover:border-primary/20 hover:shadow-lg ${className}`}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-card">
        {card.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/15">
            <span className="font-serif text-4xl font-bold text-primary/20 select-none">
              {card.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Badge overlay */}
        {card.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary-dark font-sans shadow-sm">
            {card.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-lg font-bold text-primary-dark transition-colors group-hover:text-primary">
          {card.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-muted line-clamp-2 font-sans">
          {card.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {card.count > 0 && (
            <span className="inline-block rounded-full bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary font-sans">
              {card.count} {card.count === 1 ? "artikel" : "artikler"}
            </span>
          )}
          <svg
            className="h-4 w-4 text-text-muted/30 transition-all group-hover:translate-x-0.5 group-hover:text-primary ml-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Default export for backward compatibility
export default CategoryCard;
