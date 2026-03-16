import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { StickyTOC, type TOCItem } from "./StickyTOC";
import { CTABox } from "./CTABox";
import { SPECIALIST_URL } from "@/lib/constants";
import Link from "next/link";

interface RelatedArticle {
  title: string;
  href: string;
  description?: string;
}

interface ArticleLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  intro: string;
  readingTime: number;
  children: React.ReactNode;
  relatedArticles?: RelatedArticle[];
  tocItems?: TOCItem[];
}

export function ArticleLayout({
  breadcrumbs,
  title,
  intro,
  readingTime,
  children,
  relatedArticles,
  tocItems = [],
}: ArticleLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
        {/* Main content */}
        <article className="min-w-0">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mb-10">
            <h1 className="font-serif text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-muted font-sans">
              {intro}
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-text-muted font-sans">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readingTime} min. læsetid
              </span>
            </div>
          </header>

          <div className="prose max-w-none text-text-main font-sans">
            {children}
          </div>

          {/* CTA after content */}
          <div className="mt-12">
            <CTABox variant="inline" />
          </div>

          {/* Related articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <section className="mt-14 border-t border-card pt-10">
              <h2 className="font-serif text-xl font-bold text-text-main">
                Relaterede artikler
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group rounded-lg border border-card bg-white p-5 transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-serif text-base font-bold text-text-main group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    {article.description && (
                      <p className="mt-1.5 text-sm text-text-muted line-clamp-2 font-sans">
                        {article.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            {tocItems.length > 0 && <StickyTOC items={tocItems} />}

            {/* Sidebar CTA card */}
            <div className="rounded-lg bg-card p-5">
              <p className="font-serif text-base font-bold text-text-main">
                Brug for en dygtig badeværelse-specialist?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted font-sans">
                KvaliBad matcher dig med kvalitetssikrede håndværkere
                i dit lokalområde.
              </p>
              <a
                href={SPECIALIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-sans"
              >
                Få gratis tilbud
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
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
