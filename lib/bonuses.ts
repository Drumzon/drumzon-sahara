// Grand Slam Offer bonus stack — Hormozi $100M Offers rule:
// "The value of bonuses should eclipse the value of the main offer."
// AND Decap "Drums That Knock" lesson: build the FREE thing to the
// same studio quality as the paid thing. People will think "if this
// is what they GIVE AWAY, the paid stuff must be insane."
//
// 100% music assets — every bonus is a curated by-product of the
// producer's monthly drop creation. Zero videos, zero PDFs, zero
// email replies, zero templates.

export type Bonus = {
  name: string;
  what: string;
  solves: string;
  value: number;
};

export const BONUS_STACK: Bonus[] = [
  {
    name: "The MIDI Lab",
    what: "50+ MIDI files: chord progressions, basslines, lead melodies in 5 keys.",
    solves: "Out of melodic ideas.",
    value: 80,
  },
  {
    name: "The Preset Lab",
    what: "50+ Serum, Vital, Diva and Massive presets curated from past drop kits.",
    solves: "Sound design from scratch.",
    value: 100,
  },
  {
    name: "The Sahara Vault",
    what: "The Month 1 drop (4 kits + ~80 sounds) permanent. May 31 – June 30 signups only.",
    solves: "Missing the launch drop.",
    value: 40,
  },
];

export function totalBonusValue(): number {
  return BONUS_STACK.reduce((sum, b) => sum + b.value, 0);
}

// THE LEAD MAGNET — separate from member bonuses. Free in exchange
// for email. Built to Decap-quality so prospects think "if the FREE
// version is this good, the paid must be insane."
//
// "The First Drop" = one full construction kit + 20 isolated samples
// + 5 MIDIs + 3 presets. A complete starting point — the producer
// can write a track using ONLY this. Standalone value comparable to
// a small standalone pack on PML/Loopmasters (€25-35).
//
// Per Hormozi $100M Leads: "Your lead magnet should be valuable
// enough on its own that you could charge for it."
export const LEAD_MAGNET = {
  name: "The First Drop",
  tagline:
    "A complete construction kit + 20 samples + 5 MIDIs + 3 presets — instant download",
  description:
    "Not a teaser. Not a watermarked clip. One full construction kit pulled directly from the producer's vault — same studio-grade quality as the monthly drops, free for the asking. Write a finished track using only this pack.",
  inclusions: [
    "1 complete construction kit (stems + arrangement)",
    "20 individual samples",
    "5 MIDI files",
    "3 Serum / Vital presets",
    "24-bit / 44.1 kHz WAV · royalty-free for personal use",
  ],
  perceived_value: 40,
};
