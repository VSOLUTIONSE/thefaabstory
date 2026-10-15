"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MusicNoteIcon } from "./icons";

/**
 * Global music for the whole site.
 *
 * - One <audio> element lives in this provider (mounted once in the root
 *   layout), so the song keeps playing across route changes.
 * - Plays automatically on visit; if the browser blocks autoplay, playback
 *   starts on the visitor's first interaction (browser policy — can't be
 *   avoided).
 * - Stops when the visitor leaves the page (pagehide).
 */

interface MusicState {
  playing: boolean;
  toggle: () => void;
}

const MusicContext = createContext<MusicState>({ playing: false, toggle: () => {} });

export function useMusic() {
  return useContext(MusicContext);
}

const SOFT_VOLUME = 0.25;
const FADE_MS = 2800;

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const dismissedRef = useRef(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/audio/the-best-part.m4a");
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";
    audioRef.current = audio;

    let fadeFrame = 0;
    const fadeIn = () => {
      const start = performance.now();
      const step = (now: number) => {
        if (audio.paused) return;
        const t = Math.min((now - start) / FADE_MS, 1);
        audio.volume = SOFT_VOLUME * t;
        if (t < 1) fadeFrame = requestAnimationFrame(step);
      };
      cancelAnimationFrame(fadeFrame);
      fadeFrame = requestAnimationFrame(step);
    };

    const onPlay = () => {
      startedRef.current = true;
      setPlaying(true);
      if (!audio.muted && audio.volume < SOFT_VOLUME) fadeIn();
    };
    const onPause = () => setPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // Desktop: play immediately on load, sound fading in. Mobile: autoplay
    // with sound is blocked by browsers, so start muted and unmute (from the
    // top, with a fade) on the visitor's first interaction. If desktop
    // autoplay is blocked too (e.g. fresh browser profile), the first
    // interaction retries below.
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (coarsePointer) audio.muted = true;
    else audio.volume = 0;

    const attempt = () => {
      if (dismissedRef.current) return;
      audio.play().catch(() => {
        /* autoplay blocked — first interaction will retry */
      });
    };

    attempt();

    const onGesture = () => {
      if (dismissedRef.current) return;
      if (audio.muted) {
        // First interaction (mobile): kick off from the top of the song, with sound.
        audio.muted = false;
        audio.currentTime = 0;
        audio.volume = 0;
        if (!audio.paused) fadeIn();
      }
      if (!startedRef.current || audio.paused) attempt();
    };
    window.addEventListener("pointerdown", onGesture, { once: true });
    window.addEventListener("keydown", onGesture, { once: true });
    window.addEventListener("touchstart", onGesture, { once: true });

    // Stop when the visitor leaves the site.
    const onLeave = () => {
      audio.pause();
      audio.currentTime = 0;
    };
    window.addEventListener("pagehide", onLeave);

    return () => {
      cancelAnimationFrame(fadeFrame);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("pagehide", onLeave);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      dismissedRef.current = false;
      audio.play().catch(() => {});
    } else {
      dismissedRef.current = true;
      audio.pause();
    }
  }, []);

  return (
    <MusicContext.Provider value={{ playing, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}

/** Floating global toggle, visible on every screen. */
export function MusicFab() {
  const { playing, toggle } = useMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
      className="fixed right-4 bottom-4 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-silver-line bg-ink/50 text-silver backdrop-blur-sm transition-[background-color,color,transform] duration-150 ease-out hover:bg-ink/80 hover:text-on-primary active:scale-[0.97] md:right-8 md:bottom-8"
    >
      {playing ? (
        <span className="flex h-3.5 items-end gap-[3px]" aria-hidden="true">
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "0ms" }} />
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "150ms" }} />
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "300ms" }} />
        </span>
      ) : (
        <MusicNoteIcon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
