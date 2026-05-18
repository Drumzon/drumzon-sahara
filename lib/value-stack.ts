// Hormozi value-stack anchoring. Each item in the monthly drop has a
// market-comparable perceived value. The price the user pays is
// presented AGAINST this total, not in absolute terms.
//
// Source comparisons:
// - Construction kit: top labels charge $40-60 per kit (Production Music
//   Live, Cymatics premium tiers, Splice exclusives).
// - Sample pack of ~80 sounds: $25-40 standalone on Loopmasters/Splice.
// - Serum preset pack 10-15 patches: $15-30 on Reveal Sound store etc.
// - MIDI pack: $10-20 standalone (Hooky, Equinox).
// Conservatively rounded to keep the math honest, not inflated.

export type StackItem = {
  title: string;
  what: string;        // 1-line description
  solves: string;      // pain the item removes
  value: number;       // perceived market value in EUR
};

export const VALUE_STACK: StackItem[] = [
  {
    title: "4 Construction kits",
    what: "Full track stems, pre-mixed and key-compatible.",
    solves: "Hours wasted starting tracks from scratch.",
    value: 180,
  },
  {
    title: "~80 Individual samples",
    what: "Every kick, perc, vocal chop and one-shot isolated. BPM/key tagged.",
    solves: "Endless Splice scrolling for the right sound.",
    value: 80,
  },
  {
    title: "~12 Synth presets",
    what: "The exact Serum, Vital and Diva patches used in the kits.",
    solves: "Sound design from a blank patch.",
    value: 60,
  },
  {
    title: "~8 MIDI files",
    what: "Melodies, basslines, chord progressions ready to drop in.",
    solves: "Writer's block at 2 AM.",
    value: 40,
  },
  {
    title: "Lifetime download access",
    what: "Every file you've downloaded stays in your library forever.",
    solves: "Subscription fatigue — paying to keep access.",
    value: 60,
  },
  {
    title: "Royalty-free commercial license",
    what: "Release on Spotify, Beatport, sync to anything.",
    solves: "Legal risk on every release.",
    value: 40,
  },
];

// Total perceived value of the monthly stack.
export function totalPerceivedValue(): number {
  return VALUE_STACK.reduce((sum, item) => sum + item.value, 0);
}
