import { createClient } from "@/lib/supabase/server";
import SaharaBackdrop from "@/components/SaharaBackdrop";
import GrainOverlay from "@/components/GrainOverlay";
import Hero from "@/components/blocks/Hero";
import Promise from "@/components/blocks/Promise";
import WhatYouGet from "@/components/blocks/WhatYouGet";
import HowItWorks from "@/components/blocks/HowItWorks";
import PricingCard from "@/components/blocks/PricingCard";
import DropPreview from "@/components/blocks/DropPreview";
import About from "@/components/blocks/About";
import FAQ from "@/components/blocks/FAQ";
import FinalCTA from "@/components/blocks/FinalCTA";
import Footer from "@/components/blocks/Footer";
import { FOUNDING_MAX_SLOTS } from "@/lib/pricing";

// Revalidate every 30s so the live counter stays fresh without per-request cost.
export const revalidate = 30;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drumzon.com";

// JSON-LD for SEO — Product schema for the subscription.
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
  // Until Supabase is wired (env vars set), return mocked counter so the
  // landing renders without crashing in local dev.
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

    if (!data) return { slotsClaimed: 0, isFoundingOpen: true };

    return {
      slotsClaimed: data.slots_claimed,
      isFoundingOpen: data.slots_claimed < data.max_slots,
    };
  } catch {
    // Failsoft to Founding open if DB unreachable, so checkout still attempts
    // and the API route validates again before Stripe call.
    return { slotsClaimed: 0, isFoundingOpen: true };
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
      <SaharaBackdrop />
      <main>
        <Hero />
        <Promise />
        <WhatYouGet />
        <HowItWorks />
        <PricingCard
          slotsClaimed={slotsClaimed}
          isFoundingOpen={isFoundingOpen}
        />
        <DropPreview />
        <About />
        <FAQ />
        <FinalCTA isFoundingOpen={isFoundingOpen} />
      </main>
      <Footer />
      <GrainOverlay />
    </>
  );
}
