// Hormozi "anti-guarantee" — named, explained, with logic that
// reverses risk WITHOUT offering refunds. The full demo above is the
// guarantee: blind purchase is impossible because the product was
// already heard.

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      className="px-6 md:px-10 py-[clamp(56px,8vw,110px)]"
    >
      <div className="mx-auto max-w-[760px] text-center">
        <p className="text-ash text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
          The guarantee
        </p>
        <h2 className="display-2 text-ink mx-auto">
          The <span className="text-chroma">listen-first</span> promise.
        </h2>

        <p className="display-subhead mx-auto mt-6">
          No refunds — because there&apos;s nothing to risk.
        </p>

        <div className="mt-10 max-w-[620px] mx-auto flex flex-col gap-5 text-stone text-[16px] leading-[1.7] text-left">
          <p>
            Most subscriptions ask you to pay first and find out later. We
            flipped it.
          </p>
          <p>
            The full <span className="text-ink font-medium">90-second Sahara demo</span>{" "}
            is right there on this page. That&apos;s the actual sound of the
            actual May 31 drop — same kits, same mix, same character. Not a
            trailer, not a teaser, not a curated highlight. The product.
          </p>
          <p>
            If that sound is what you want, subscribe. If it isn&apos;t,
            don&apos;t — no friction to walk away.
          </p>
          <p className="text-ink font-medium">
            No risk because no blind purchases. That&apos;s a stronger
            guarantee than money back, because nothing is back to give.
          </p>
        </div>

        {/* Secondary results-oriented promise — Hormozi conditional
            "better than money back" guarantee */}
        <div
          className="mt-10 mx-auto max-w-[640px] p-7 rounded-[20px] text-left"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,107,53,0.07) 0%, rgba(255,140,66,0.03) 100%)",
            border: "1px solid rgba(255,107,53,0.20)",
          }}
        >
          <p className="text-orange-deep text-[11px] font-semibold tracking-[0.22em] uppercase mb-3">
            The Producer&apos;s Pact
          </p>
          <p className="text-ink text-[16px] leading-[1.6] mb-3 font-medium">
            If you don&apos;t use a single sample from your first drop in a
            track within 30 days — email us.
          </p>
          <p className="text-stone text-[14px] leading-[1.6]">
            We&apos;ll personally help you find what&apos;s blocking you,
            AND extend your subscription one full month free. Because the
            real goal isn&apos;t the subscription. It&apos;s the track you
            ship.
          </p>
        </div>

        {/* Three pillars of zero risk */}
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-6 mt-14 max-w-[680px] mx-auto">
          {[
            {
              title: "Hear it first",
              body: "Full demo above. The product is the demo.",
            },
            {
              title: "Cancel anytime",
              body: "Stripe portal, two clicks. No call, no email.",
            },
            {
              title: "Keep your files",
              body: "Downloads stay yours forever. Royalty-free.",
            },
          ].map((p) => (
            <div key={p.title} className="flex flex-col gap-1.5 items-center text-center">
              <h3 className="text-ink text-[14px] font-semibold tracking-[-0.012em]">
                {p.title}
              </h3>
              <p className="text-stone text-[13px] leading-[1.55]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
