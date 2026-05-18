import { headers } from "next/headers";
import CountdownStrip from "@/components/CountdownStrip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CurrentDrop from "@/components/CurrentDrop";
import WhatsIncluded from "@/components/WhatsIncluded";
import Preview from "@/components/Preview";
import LeadMagnet from "@/components/LeadMagnet";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { detectCurrency } from "@/lib/currency";
import { getCurrentDrop } from "@/lib/drops";
import { getDropPrice } from "@/lib/pricing";

// Per-request rendering so Vercel geo headers + price tier are always fresh.
// Cheap pages — perf cost is negligible.
export const dynamic = "force-dynamic";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

export default async function Home() {
  const h = await headers();
  const currency = detectCurrency(h.get("x-vercel-ip-country"));
  const drop = getCurrentDrop();
  const price = getDropPrice(drop);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Drumzon — ${drop.fullTitle}`,
    description: drop.description,
    image: `${siteUrl}${drop.cover}`,
    brand: { "@type": "Brand", name: "Drumzon" },
    category: "Music / Sample Pack",
    offers: {
      "@type": "Offer",
      price: price.amount.toFixed(2),
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      priceValidUntil: price.nextTierDate || "2027-12-31",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <CountdownStrip currency={currency} />
      <Navbar />
      <main>
        <Hero currency={currency} />
        <Marquee />
        <CurrentDrop currency={currency} />
        <WhatsIncluded />
        <Preview />
        <LeadMagnet />
        <About />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA currency={currency} />
    </>
  );
}
