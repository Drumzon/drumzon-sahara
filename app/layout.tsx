import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drumzon Vol. 1: Sahara — Afro House Sample Pack",
    template: "%s | Drumzon",
  },
  description:
    "A premium Afro House drums & percussion pack — inspired by Keinemusik, Hugel, and Black Coffee. 160+ royalty-free sounds for producers.",
  keywords: [
    "afro house sample pack",
    "afro house drums",
    "keinemusik sample pack",
    "hugel sample pack",
    "black coffee samples",
    "afro house percussion",
    "royalty-free afro house",
    "drumzon",
  ],
  authors: [{ name: "Drumzon" }],
  creator: "Drumzon",
  publisher: "Drumzon",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Drumzon",
    title: "Drumzon Vol. 1: Sahara — Afro House Sample Pack",
    description:
      "160+ premium Afro House sounds. Inspired by Keinemusik, Hugel, and Black Coffee. Royalty-free, all DAWs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumzon Vol. 1: Sahara",
    description:
      "160+ premium Afro House sounds. Royalty-free, all DAWs.",
    creator: "@drumzon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
