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
    what: "50+ MIDI files: chord progressions, basslines, lead melodies, plus 10 song-starter templates in the 5 keys producers actually use in the genre (A, C, G, F, D minor).",
    solves: "I run out of melodic ideas. I need starting points I can take in any direction.",
    value: 80,
  },
  {
    name: "The Preset Lab",
    what: "50+ Serum, Vital, Diva and Massive presets curated from past drop kits — log drums, marimbas, plucks, pads, bass synths, FX. Plug, tweak, ship.",
    solves: "I want a full synth palette without designing patches from scratch.",
    value: 100,
  },
  {
    name: "The Quarterly Vault Drop",
    what: "Four times a year, a bonus mega-pack of ~150 loops + one-shots that didn't make the monthly cut. Same studio quality, different aesthetic angles. Members-only — never sold separately.",
    solves: "One drop a month isn't enough — I want extra material between releases.",
    value: 240,
  },
  {
    name: "The Sahara Vault",
    what: "The Month 1 drop (4 kits + ~80 sounds + presets + MIDIs) added permanently to your library. Only for members joining May 31 – June 30.",
    solves: "I want the launch drop even if I subscribe after it released.",
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
    "20 individual samples (kicks, percs, hats, marimba, perc loops)",
    "5 MIDI files (chord progressions, basslines, melodies)",
    "3 Serum / Vital presets used in the kit",
    "24-bit / 44.1 kHz WAV · royalty-free for personal use",
  ],
  perceived_value: 40,
};
