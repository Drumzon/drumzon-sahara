// Drumzon brand seal — "Sahara Solar Seal".
// Wax-stamp / vinyl-label aesthetic: engraved double frame, radiating sun
// disc with bright halo, crisp horizon line, sculpted dune silhouette
// with texture stripes. Designed to scale from 16px favicon to 400px+
// album cover without losing identity.
export default function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden
      className="flex-shrink-0"
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id="dz-sun" cx="0.5" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#fff5ed" />
          <stop offset="0.45" stopColor="#ff6b35" />
          <stop offset="1" stopColor="#c44518" />
        </radialGradient>
        <linearGradient id="dz-field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#faf7f2" />
          <stop offset="1" stopColor="#f0e8da" />
        </linearGradient>
        <clipPath id="dz-clip">
          <circle cx="32" cy="32" r="29" />
        </clipPath>
      </defs>

      {/* Engraved double frame — wax-seal feel */}
      <circle
        cx="32"
        cy="32"
        r="31"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="1.25"
      />
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="0.5"
        strokeOpacity="0.35"
      />

      <g clipPath="url(#dz-clip)">
        {/* Cream sky field */}
        <rect x="0" y="0" width="64" height="40" fill="url(#dz-field)" />

        {/* Sun rays — thin asymmetric strokes, only above horizon */}
        <g
          stroke="#c44518"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeOpacity="0.55"
        >
          <line x1="32" y1="5" x2="32" y2="11" />
          <line x1="20" y1="9" x2="22.5" y2="13" />
          <line x1="44" y1="9" x2="41.5" y2="13" />
          <line x1="11" y1="20" x2="15" y2="22" />
          <line x1="53" y1="20" x2="49" y2="22" />
        </g>

        {/* Sun disc with halo */}
        <circle
          cx="32"
          cy="22"
          r="11"
          fill="rgba(255,107,53,0.18)"
        />
        <circle cx="32" cy="22" r="8" fill="url(#dz-sun)" />

        {/* Horizon hairline */}
        <line
          x1="4"
          y1="38"
          x2="60"
          y2="38"
          stroke="#1a1a1a"
          strokeWidth="0.75"
        />

        {/* Sculpted dune silhouette — not flat, has wave */}
        <path
          d="M 4,38 Q 16,33 26,37 Q 34,40 42,35 Q 52,30 60,38 L 60,64 L 4,64 Z"
          fill="#1a1a1a"
          fillOpacity="0.94"
        />

        {/* Dune texture — subtle wind ripples */}
        <g stroke="#fff" strokeWidth="0.4" strokeOpacity="0.14" fill="none">
          <path d="M 8,46 Q 22,44 32,45 T 56,46" />
          <path d="M 10,51 Q 24,49 32,50 T 54,51" />
          <path d="M 12,56 Q 26,54 32,55 T 52,56" />
        </g>
      </g>
    </svg>
  );
}
