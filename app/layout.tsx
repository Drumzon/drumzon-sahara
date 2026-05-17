import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import SaharaBackdrop from "@/components/SaharaBackdrop";
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
    default: "Drumzon — Afro House sample packs, one drop a month",
    template: "%s | Drumzon",
  },
  description:
    "Premium Afro House sample packs in the palette of Black Coffee, Keinemusik, Hugel & ME. One drop a month, stems on every loop, MIDI on every melody. Royalty-free.",
  keywords: [
    "afro house sample pack",
    "afro house drums",
    "afro house serum presets",
    "keinemusik sample pack",
    "hugel sample pack",
    "black coffee samples",
    "afro house percussion",
    "afro house ableton template",
    "royalty-free afro house",
    "monthly sample pack subscription",
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
    title: "Drumzon — Afro House sample packs, one drop a month",
    description:
      "Premium Afro House drops every month, plus exclusive Serum presets, MIDIs, and Ableton templates for Inner Circle members. Royalty-free, all DAWs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumzon — Afro House, one drop a month",
    description:
      "Premium Afro House sample packs in the Keinemusik / Black Coffee / Hugel palette. Royalty-free.",
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
      <body className="min-h-full flex flex-col font-sans">
        <SaharaBackdrop />
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
