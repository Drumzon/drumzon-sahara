"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

// Custom audio player using WaveSurfer.js — single most important UI on
// the page. Plays the 60-90s Sahara demo. If NEXT_PUBLIC_SAHARA_DEMO_URL
// is not set, renders a placeholder card with the same dimensions so the
// layout doesn't shift when audio lands.

const PlayIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ size = 22 }: { size?: number }) => (
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
  label = "Listen to \"Sahara\" — Month 1 drop",
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
      waveColor: "rgba(245,245,240,0.28)",
      progressColor: "#e07a3c",
      cursorColor: "rgba(245,245,240,0.6)",
      cursorWidth: 1,
      barWidth: 2,
      barGap: 2,
      barRadius: 1,
      height: 72,
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

  const togglePlay = () => {
    if (!wavesurferRef.current) return;
    wavesurferRef.current.playPause();
  };

  // Placeholder state — no audio URL provided yet
  if (!src) {
    return (
      <div className="w-full max-w-[640px] mx-auto card-elev p-6 sm:p-7">
        <p className="eyebrow mb-3">{label}</p>
        <div
          className="h-[72px] w-full rounded flex items-center justify-center text-text-subtle text-[13px]"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          Audio drops May 31 · Set NEXT_PUBLIC_SAHARA_DEMO_URL when ready
        </div>
        <div className="flex items-center justify-between mt-3 text-text-subtle text-[11px] font-mono uppercase tracking-[0.12em]">
          <span>0:00</span>
          <span>—:—</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[640px] mx-auto card-elev p-6 sm:p-7">
      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="text-text text-[13px] sm:text-[14px] font-medium leading-snug">
          {label}
        </p>
        <span className="eyebrow shrink-0">Demo</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          disabled={!isReady}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="shrink-0 w-12 h-12 rounded-full bg-accent text-bg grid place-items-center transition-all hover:scale-105 hover:bg-accent-bright disabled:opacity-40 disabled:cursor-wait"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-bg)",
            boxShadow: "0 0 0 0 rgba(224,122,60,0.4)",
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>

        <div ref={containerRef} className="waveform-canvas flex-1 min-w-0" />
      </div>

      <div className="flex items-center justify-between mt-3 text-text-subtle text-[11px] font-mono uppercase tracking-[0.12em] tabular-nums">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}
