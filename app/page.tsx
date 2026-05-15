import CountdownStrip from "@/components/CountdownStrip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatsIncluded from "@/components/WhatsIncluded";
import Preview from "@/components/Preview";
import LeadMagnet from "@/components/LeadMagnet";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Drumzon Vol. 1: Sahara",
  description:
    "Premium Afro House drums & percussion sample pack. 160+ royalty-free sounds with full stems and MIDI.",
  brand: { "@type": "Brand", "name": "Drumzon" },
  category: "Music / Sample Pack",
  offers: {
    "@type": "Offer",
    price: "27.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <CountdownStrip />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <WhatsIncluded />
        <Preview />
        <LeadMagnet />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
