import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import SaharaBackdrop from "@/components/SaharaBackdrop";
import GrainOverlay from "@/components/GrainOverlay";
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
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drumzon Pro — Curated Afro House label, every month",
    template: "%s | Drumzon Pro",
  },
  description:
    "The first curated digital label for Afro House producers who want the sound, not the search. Every month: one drop. Four complete construction kits. Drag, drop, you're inside the track.",
  keywords: [
    "afro house construction kits",
    "afro house subscription",
    "afro house sample label",
    "afro house drum kits",
    "afro house producer subscription",
    "underground afro house",
    "european afro house",
    "drumzon pro",
    "drumzon",
  ],
  authors: [{ name: "Drumzon" }],
  creator: "Drumzon",
  publisher: "Drumzon",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Drumzon Pro",
    title: "Drumzon Pro — Curated Afro House label, every month",
    description:
      "Every month: one drop. Four complete construction kits. Drag, drop, you're inside the track. Founding tier €7/month — limited to 100 producers.",
    images: [
      {
        url: "/images/sahara-cover.png",
        width: 1080,
        height: 1350,
        alt: "Drumzon Pro — Sahara, the May 31 drop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drumzon Pro — Curated Afro House label",
    description:
      "One drop a month. Four construction kits. Drag, drop, you're inside the track.",
    creator: "@drumzon",
    images: ["/images/sahara-cover.png"],
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
  themeColor: "#ffffff",
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
