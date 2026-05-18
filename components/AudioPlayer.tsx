"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

// Custom audio player using WaveSurfer.js. Cream/warm aesthetic, glass-card
// container. When NEXT_PUBLIC_SAHARA_DEMO_URL is empty, renders placeholder
// to preserve layout.

const PlayIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
  </svg>
);

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function AudioPlayer({
  src,
  label = "Listen to Sahara — May 31 drop",
}: {
  src?: string;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgba(26,26,26,0.18)",
      progressColor: "#ff6b35",
      cursorColor: "rgba(26,26,26,0.4)",
      cursorWidth: 1,
      barWidth: 2,
      barGap: 2,
      barRadius: 1,
      height: 64,
      normalize: true,
      backend: "MediaElement",
      url: src,
    });

    wavesurferRef.current = ws;

    ws.on("ready", () => {
      setIsReady(true);
      setDuration(ws.getDuration());
    });
    ws.on("audioprocess", () => setCurrentTime(ws.getCurrentTime()));
    ws.on("seeking", () => setCurrentTime(ws.getCurrentTime()));
    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));

    return () => {
      ws.destroy();
      wavesurferRef.current = null;
    };
  }, [src]);

  const togglePlay = () => wavesurferRef.current?.playPause();

  const containerClass =
    "w-full max-w-[560px] mx-auto rounded-[20px] overflow-hidden";
  const containerStyle = {
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(20px) saturate(160%)",
    WebkitBackdropFilter: "blur(20px) saturate(160%)",
    border: "1px solid rgba(26,26,26,0.08)",
    boxShadow:
      "0 20px 40px -12px rgba(26,17,8,0.10), 0 4px 12px -4px rgba(26,17,8,0.06)",
  };

  // Placeholder state
  if (!src) {
    return (
      <div className={containerClass + " p-6"} style={containerStyle}>
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="text-stone text-[13px] font-medium">{label}</p>
          <span className="text-ash text-[12px]">Demo</span>
        </div>
        <div
          className="h-[64px] w-full rounded flex items-center justify-center text-ash text-[12px]"
          style={{ background: "rgba(26,26,26,0.03)" }}
        >
          Audio drops May 31
        </div>
        <div className="flex items-center justify-between mt-3 text-ash text-[12px] tabular-nums">
          <span>0:00</span>
          <span>—:—</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClass + " p-6"} style={containerStyle}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-stone text-[13px] font-medium leading-snug">{label}</p>
        <span className="text-ash text-[12px] shrink-0">Demo</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          disabled={!isReady}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="shrink-0 w-11 h-11 rounded-full grid place-items-center text-white transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-wait"
          style={{
            background: "linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)",
            boxShadow: "0 6px 16px -4px rgba(255,107,53,0.5)",
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div ref={containerRef} className="flex-1 min-w-0" />
      </div>

      <div className="flex items-center justify-between mt-3 text-ash text-[12px] tabular-nums">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
