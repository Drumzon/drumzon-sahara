// SoundCloud embed wrapper — Server Component, zero JS.
// Reads URL from NEXT_PUBLIC_SOUNDCLOUD_URL. If empty, renders a stylish
// placeholder with setup instructions so the section never looks broken.
//
// To wire: drop your SoundCloud track URL into .env.local:
//   NEXT_PUBLIC_SOUNDCLOUD_URL=https://soundcloud.com/your-name/sahara-preview

const PlayIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="currentColor" aria-hidden>
    <path d="M1 1 L12 7 L1 13 Z" />
  </svg>
);

export default function AudioPreview() {
  const trackUrl = process.env.NEXT_PUBLIC_SOUNDCLOUD_URL;

  if (!trackUrl) {
    return (
      <div
        className="flex items-center gap-4 p-3 pr-5 rounded-full w-full max-w-[520px] mx-auto"
        style={{
          background: "rgba(250, 247, 242, 0.7)",
          border: "1px solid rgba(26, 26, 26, 0.08)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow:
            "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px rgba(26,26,26,0.06)",
        }}
      >
        <span
          className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/30 text-white/70 flex items-center justify-center"
          aria-hidden
        >
          <PlayIcon />
        </span>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-[11px] text-ash uppercase tracking-[0.14em] font-semibold">
            Preview · Coming
          </span>
          <span className="text-[12px] text-stone leading-tight mt-0.5">
            Set <code className="font-mono text-[11px]">NEXT_PUBLIC_SOUNDCLOUD_URL</code> in .env.local
          </span>
        </div>
      </div>
    );
  }

  // SoundCloud "classic" player — compact 140px height, brand-orange color,
  // minimal chrome (no related/comments/user/reposts/teaser).
  const params = new URLSearchParams({
    url: trackUrl,
    color: "ff6b35",
    auto_play: "false",
    hide_related: "true",
    show_comments: "false",
    show_user: "false",
    show_reposts: "false",
    show_teaser: "false",
    visual: "false",
  }).toString();

  return (
    <div
      className="overflow-hidden rounded-[18px] w-full max-w-[600px] mx-auto"
      style={{
        background: "rgba(250, 247, 242, 0.7)",
        border: "1px solid rgba(26, 26, 26, 0.08)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        boxShadow:
          "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px rgba(26,26,26,0.06)",
      }}
    >
      <iframe
        title="Sahara preview"
        width="100%"
        height="140"
        scrolling="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?${params}`}
        style={{ display: "block", border: 0 }}
      />
    </div>
  );
}
