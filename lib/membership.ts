// Inner Circle subscription config — single source of truth.
// Stripe Subscription Payment Link URL lives in Vercel env var so it
// can be created/swapped without redeploy.

export const INNER_CIRCLE_BENEFITS = [
  {
    title: "Monthly drop included",
    description:
      "The new pack lands in your account on release day. No extra checkout.",
  },
  {
    title: "Exclusive Serum presets",
    description:
      "10–15 afrohouse presets every month. Never sold separately. Members only.",
  },
  {
    title: "Exclusive MIDI pack",
    description:
      "5–8 chord progressions and lead melodies a month. Members only.",
  },
  {
    title: "24h early access",
    description:
      "New drops unlock for members a day before the public link goes live.",
  },
  {
    title: "Cancel anytime",
    description:
      "Stripe-powered. Cancel from your dashboard in two clicks. Keep every pack you've downloaded.",
  },
];

export function getInnerCircleBuyUrl(): string {
  return process.env.NEXT_PUBLIC_INNER_CIRCLE_URL || "#";
}
