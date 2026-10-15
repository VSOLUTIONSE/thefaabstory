"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { qaItems } from "@/lib/data";

const GAP = 24;
const SPEED = 0.35;
const HOLD_TOGGLE_MS = 300;

/**
 * Horizontal snap carousel of Q&A cards with dot indicators.
 * Desktop: prev/next arrows. Mobile: slow auto-scroll that pauses while held
 * (a short tap toggles it off/on).
 */
export function QASection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const pointerStartRef = useRef(0);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [truncated, setTruncated] = useState<Record<string, boolean>>({});

  const measure = (key: string) => (el: HTMLParagraphElement | null) => {
    if (!el) return;
    const over = el.scrollHeight > el.clientHeight + 4;
    setTruncated((prev) => (prev[key] === over ? prev : { ...prev, [key]: over }));
  };

  const toggleExpand = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  const scrollByDir = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + GAP), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const cards = Array.from(track.children) as HTMLElement[];
        if (!cards.length) return;
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        cards.forEach((card, i) => {
          const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2;
          const dist = Math.abs(cardCenter - center);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setActive(best);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mq = window.matchMedia("(max-width: 767px)");
    let mobile = mq.matches;
    let direction = 1;
    let raf = 0;

    const onMqChange = () => {
      mobile = mq.matches;
    };
    mq.addEventListener("change", onMqChange);

    const tick = () => {
      const max = track.scrollWidth - track.clientWidth;
      if (mobile && !pausedRef.current && max > 1) {
        let next = track.scrollLeft + SPEED * direction;
        if (next >= max) {
          next = max;
          direction = -1;
        } else if (next <= 0) {
          next = 0;
          direction = 1;
        }
        track.scrollLeft = next;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      pausedRef.current = true;
      pointerStartRef.current = Date.now();
    };
    const release = () => {
      const held = Date.now() - pointerStartRef.current;
      if (held < HOLD_TOGGLE_MS) {
        pausedRef.current = !pausedRef.current;
      } else {
        pausedRef.current = false;
      }
    };

    const cancelHold = () => {
      pausedRef.current = false;
    };

    track.addEventListener("pointerdown", pause);
    track.addEventListener("pointerup", release);
    track.addEventListener("pointercancel", cancelHold);

    return () => {
      cancelAnimationFrame(raf);
      mq.removeEventListener("change", onMqChange);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("pointerup", release);
      track.removeEventListener("pointercancel", cancelHold);
    };
  }, []);

  return (
    <section
      data-paper="qa"
      className="flex flex-col items-center justify-center bg-primary px-6 py-15 md:min-h-[500px] md:px-15"
    >
      <div className="t-eyebrow mb-4 text-silver">Q&amp;A With The Couple</div>

      <h2 className="t-heading mb-10 text-on-primary">Get to know us</h2>

      <div
        ref={trackRef}
        className="no-scrollbar flex w-full max-w-[1200px] snap-x snap-mandatory max-md:snap-none gap-6 overflow-x-auto py-[10px]"
      >
        {qaItems.map((item, i) => {
          const keyA = `${i}-a`;
          const keyB = `${i}-b`;
          return (
            <article
              key={item.question}
              className="flex w-[380px] max-w-[85vw] shrink-0 snap-start flex-col border border-silver-border bg-surface-dim p-8 transition-colors duration-200 hover:border-silver-line"
            >
              <h3 className="mb-4 font-display text-[18px] leading-[22px] text-silver">
                {item.question}
              </h3>

              <div className="mb-6">
                <p
                  ref={measure(keyA)}
                  className={`${
                    expanded[keyA] ? "line-clamp-none" : "line-clamp-4"
                  } whitespace-pre-line text-[14px] leading-[1.7] text-silver-soft`}
                >
                  {item.answerA}
                </p>
                {expanded[keyA] ? (
                  <button
                    type="button"
                    onClick={() => toggleExpand(keyA)}
                    className="mt-2 cursor-pointer text-[11px] leading-4 tracking-[2px] text-silver-soft uppercase transition-colors duration-150 hover:underline"
                  >
                    Read less
                  </button>
                ) : (
                  truncated[keyA] && (
                    <button
                      type="button"
                      onClick={() => toggleExpand(keyA)}
                      className="mt-2 cursor-pointer text-[11px] leading-4 tracking-[2px] text-silver-soft uppercase transition-colors duration-150 hover:underline"
                    >
                      Read more
                    </button>
                  )
                )}
              </div>

              {item.answerB && (
                <>
                  <div className="mb-6 h-px w-full bg-silver-hair" aria-hidden="true" />
                  <div>
                    <p
                      ref={measure(keyB)}
                      className={`${
                        expanded[keyB] ? "line-clamp-none" : "line-clamp-4"
                      } whitespace-pre-line text-[14px] leading-[1.7] text-silver-soft`}
                    >
                      {item.answerB}
                    </p>
                    {expanded[keyB] ? (
                      <button
                        type="button"
                        onClick={() => toggleExpand(keyB)}
                        className="mt-2 cursor-pointer text-[11px] leading-4 tracking-[2px] text-silver-soft uppercase transition-colors duration-150 hover:underline"
                      >
                        Read less
                      </button>
                    ) : (
                      truncated[keyB] && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(keyB)}
                          className="mt-2 cursor-pointer text-[11px] leading-4 tracking-[2px] text-silver-soft uppercase transition-colors duration-150 hover:underline"
                        >
                          Read more
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => scrollByDir(-1)}
          aria-label="Previous question"
          className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-silver-line text-silver transition-colors duration-200 hover:border-silver hover:text-on-primary md:flex"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex gap-2" role="group" aria-label="Q&A cards">
          {qaItems.map((item, i) => (
            <button
              key={item.question}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to card ${i + 1}`}
              aria-current={active === i}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-200 ${
                active === i ? "bg-silver" : "bg-silver-line hover:bg-silver-dim"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByDir(1)}
          aria-label="Next question"
          className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-silver-line text-silver transition-colors duration-200 hover:border-silver hover:text-on-primary md:flex"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
