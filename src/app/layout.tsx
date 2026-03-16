import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";
import MagazineHeader from "@/components/MagazineHeader";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Alt Om Badeværelse, Materialer & Priser`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: { da: SITE_URL },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/images/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "BadGuiden — Alt om badeværelse, materialer og priser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-surface text-text-main">
        <MagazineHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
