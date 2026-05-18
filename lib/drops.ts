// Drop catalog — data-driven. Add a new entry here each month.
// All site sections (Hero, CurrentDrop, Vault, JSON-LD, etc.) read
// from this array. No component-level edits needed for a new drop.
//
// releaseDate drives the entire pricing ladder via lib/pricing.ts:
//   day 0-6   → early-bird ($27)
//   day 7-29  → regular ($37)
//   day 30-59 → vault tier 1 ($50)
//   day 60-179→ vault tier 2 ($70)
//   day 180+  → vault tier 3 ($90)
//
// Stripe Payment Link env vars are per-drop per-currency. Until you
// create the actual links in Stripe Dashboard, the placeholders fall
// back to "#" and the buttons stay inert.

import type { Currency } from "./currency";

export type DropSlug = "sahara";

export type Drop = {
  slug: DropSlug;
  name: string;            // Conceptual name only ("Sahara")
  monthLabel: string;      // Pairing label ("May 26")
  fullTitle: string;       // Display title ("Sahara · May 26")
  cover: string;           // /public path
  releaseDate: string;     // ISO 8601 UTC
  tagline: string;         // 6-10 word sound description
  description: string;     // 1-2 sentence pitch for the drop section
  bpmRange: [number, number];
  keys: string[];
  contents: {
    oneShots: number;
    drumLoops: number;
    melodyLoops: number;
    bassLoops: number;
    pads: number;
  };
  previewUrl: string;      // SoundCloud / hosted MP3 — env-overridable
  // Stripe Payment Link env-var keys. The actual URLs live in Vercel
  // env vars so they can be swapped without redeploy.
  buyEnv: {
    usd: string;           // env key name, e.g. "NEXT_PUBLIC_BUY_SAHARA_USD"
    eur: string;
  };
};

export const DROPS: Drop[] = [
  {
    slug: "sahara",
    name: "Sahara",
    monthLabel: "May 26",
    fullTitle: "Sahara · May 26",
    cover: "/images/sahara-cover.png",
    releaseDate: "2026-05-15T00:00:00Z",
    tagline: "Log drums, marimba, and the heat of the dunes.",
    description:
      "Hand-tuned log drums, marimba leads with airy reverbs, atmospheric pads that breathe, and percussion that actually sits in the pocket. Studio-grade afro house, engineered for dancefloor mixes.",
    bpmRange: [120, 125],
    keys: ["A minor", "C minor", "G minor", "F minor"],
    contents: {
      oneShots: 100,
      drumLoops: 25,
      melodyLoops: 15,
      bassLoops: 8,
      pads: 5,
    },
    previewUrl: process.env.NEXT_PUBLIC_SAHARA_PREVIEW_URL || "",
    buyEnv: {
      usd: "NEXT_PUBLIC_BUY_SAHARA_USD",
      eur: "NEXT_PUBLIC_BUY_SAHARA_EUR",
    },
  },
];

/** Returns the most recent drop with releaseDate in the past. */
export function getCurrentDrop(now: number = Date.now()): Drop {
  const released = DROPS.filter(
    (d) => new Date(d.releaseDate).getTime() <= now,
  );
  return released[released.length - 1] || DROPS[0];
}

/** All drops past their 30-day window — for the Vault section (hidden until populated). */
export function getVaultDrops(now: number = Date.now()): Drop[] {
  const THIRTY_DAYS = 30 * 86_400_000;
  return DROPS.filter(
    (d) => now - new Date(d.releaseDate).getTime() >= THIRTY_DAYS,
  );
}

/** Resolves the Stripe Payment Link for a drop based on detected currency. */
export function getDropBuyUrl(drop: Drop, currency: Currency): string {
  const envKey = currency === "EUR" ? drop.buyEnv.eur : drop.buyEnv.usd;
  return process.env[envKey] || "#";
}
