import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueStack from "@/components/ValueStack";
import HowItWorks from "@/components/HowItWorks";
import Preview from "@/components/Preview";
import LeadMagnet from "@/components/LeadMagnet";
import PricingCard from "@/components/PricingCard";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

// Revalidate every 30s so the live Founding counter stays fresh.
export const revalidate = 30;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Drumzon Pro — Curated Afro House Label Subscription",
  description:
    "Monthly Afro House construction kits, samples, presets, and MIDIs. Curated digital label for producers who want the sound, not the search.",
  brand: { "@type": "Brand", name: "Drumzon" },
  category: "Music / Subscription / Sample Pack",
  offers: [
    {
      "@type": "Offer",
      name: "Founding tier",
      price: "7.00",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: siteUrl + "/#pricing",
    },
    {
      "@type": "Offer",
      name: "Standard tier",
      price: "14.95",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: siteUrl + "/#pricing",
    },
  ],
};

async function getFoundingCounter() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return { slotsClaimed: 27, isFoundingOpen: true };
  }
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("founding_counter")
      .select("slots_claimed, max_slots")
      .single();
    if (!data) {
      return { slotsClaimed: FOUNDING_MAX_SLOTS, isFoundingOpen: false };
    }
    return {
      slotsClaimed: data.slots_claimed,
      isFoundingOpen: data.slots_claimed < data.max_slots,
    };
  } catch (err) {
    console.error("[page] founding_counter read failed:", err);
    return { slotsClaimed: FOUNDING_MAX_SLOTS, isFoundingOpen: false };
  }
}

export default async function Home() {
  const { slotsClaimed, isFoundingOpen } = await getFoundingCounter();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Navbar />

      <main>
        {/* Apple/Elon-style flow: show the product, name the price, ship.
            Deleted: Problem (the audio is the proof), Guarantee (one line
            in pricing footnote is enough), "why" rationale blocks. */}
        <Hero isFoundingOpen={isFoundingOpen} slotsClaimed={slotsClaimed} />
        <ValueStack />
        <HowItWorks />
        <Preview />
        <LeadMagnet />
        <PricingCard
          slotsClaimed={slotsClaimed}
          isFoundingOpen={isFoundingOpen}
        />
        <About />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
