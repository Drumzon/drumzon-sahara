// Hormozi bonus stack — REWRITTEN to be 100% music assets.
// Producer makes music; bonuses are curated by-products of that music
// creation. Zero videos, zero PDFs, zero email replies, zero templates.
// Everything here is "create music" output, packaged differently.
//
// Per $100M Leads: even free / bonus offers must be Grand Slam quality.
// "Make your lead magnet so insanely good people feel stupid saying no."

export type Bonus = {
  name: string;
  what: string;
  solves: string;
  value: number;
};

export const BONUS_STACK: Bonus[] = [
  {
    name: "The Quick-Start Pack",
    what: "5 hand-picked loops, 1 melody MIDI and 1 Serum preset from the producer's vault. Delivered instantly on signup so you can build a track within the first hour.",
    solves: "I want to start producing the moment I subscribe, not wait for the next drop.",
    value: 30,
  },
  {
    name: "The MIDI Vault",
    what: "30+ MIDI files of chord progressions, basslines and lead melodies in the keys producers actually use in the genre (A min, C min, G min, F min, D min).",
    solves: "I run out of melodic ideas. I need a starting point I can take in any direction.",
    value: 40,
  },
  {
    name: "The Preset Vault",
    what: "25+ Serum, Vital and Diva presets curated from past monthly drops — log drums, marimbas, plucks, pads, bass synths. Plug in, tweak, ship.",
    solves: "I want more synth palette without designing patches from scratch.",
    value: 50,
  },
  {
    name: "The B-Sides Drop",
    what: "Quarterly bonus pack of ~30 loops and one-shots that didn't make the monthly cut — same studio-grade quality, different aesthetic angles.",
    solves: "I want extra material between monthly drops, not just one batch per month.",
    value: 120,
  },
  {
    name: "The Sahara Vault",
    what: "The Month 1 drop (4 kits + ~80 sounds) added permanently to your library — only for members joining May 31 – June 30.",
    solves: "I want the launch drop even if I subscribe after it released.",
    value: 35,
  },
];

export function totalBonusValue(): number {
  return BONUS_STACK.reduce((sum, b) => sum + b.value, 0);
}

// The Quick-Start Pack is ALSO usable as a standalone free lead magnet
// (separate path: capture email via Kit → free download → nurture to
// subscription). Export the spec separately so the LeadMagnet
// component can reference it.
export const LEAD_MAGNET = {
  name: "The Quick-Start Pack",
  tagline: "5 loops · 1 MIDI · 1 preset — instant download",
  description:
    "A genuine taste of the monthly drop quality. No watermarks, no time limits, no card required. Use them in a track today.",
  perceived_value: 30,
};
