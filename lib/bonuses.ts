// Hormozi bonus stack — each bonus is a named asset that solves a
// specific producer objection. Per Hormozi:
//   1. Give them a benefit-in-title name
//   2. Tell them what they get
//   3. Solve a specific objection
//   4. Anchor a perceived value
//   5. Stack value should eclipse the main offer
//
// These are deliverable assets Carlos can ship within his first month:
// no vapor bonuses, no "$997 worth of training" inflated nonsense.

export type Bonus = {
  name: string;
  what: string;          // 1-line description of what the bonus contains
  solves: string;        // the producer objection it removes
  value: number;         // honest perceived value in EUR
};

export const BONUS_STACK: Bonus[] = [
  {
    name: "The 60-Second Setup Guide",
    what: "15-minute video showing how to load a kit, route stems, replace the kick with your own, and have a track skeleton in your DAW within a minute.",
    solves: "I don't know how to use construction kits efficiently.",
    value: 67,
  },
  {
    name: "The Afro House Reference Library",
    what: "Curated playlist of 50 reference tracks in the exact palette, each with a one-line note on what makes it work.",
    solves: "I don't have a clear reference for what 'great' sounds like in this genre.",
    value: 37,
  },
  {
    name: "The Quick-Start Pack",
    what: "Free at signup. 5 hand-picked loops, 1 MIDI, 1 preset from the producer's archive. Use them in a track within 24 hours.",
    solves: "I want to start producing the moment I subscribe, not wait for the next drop.",
    value: 47,
  },
  {
    name: "The Drumzon Ableton Template",
    what: "Pre-routed channels, busses, sends, parallel compression — ready for any monthly kit. Drop, play, mix.",
    solves: "I lose hours setting up a mix session from scratch every time.",
    value: 97,
  },
  {
    name: "The Founder's Inbox",
    what: "Direct email access for genre/production questions. Personally answered by the producer within 48h.",
    solves: "I'm stuck on a track and don't know who to ask.",
    value: 197,
  },
];

export function totalBonusValue(): number {
  return BONUS_STACK.reduce((sum, b) => sum + b.value, 0);
}
