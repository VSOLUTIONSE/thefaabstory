"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { qaItems } from "@/lib/data";

/**
 * Horizontal snap carousel of Q&A cards with dot indicators.
 */
export function QASection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
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

  return (
    <section
      data-paper="qa"
      className="flex flex-col items-center justify-center bg-navy px-6 py-15 md:min-h-[500px] md:px-15"
    >
      <div className="t-eyebrow mb-4 text-silver">Q&amp;A With The Couple</div>

      <h2 className="t-heading mb-10 text-on-primary">Get to know us</h2>

      <div
        ref={trackRef}
        className="no-scrollbar flex w-full max-w-[1200px] snap-x snap-mandatory gap-6 overflow-x-auto py-[10px]"
      >
        {qaItems.map((item) => (
          <article
            key={item.question}
            className="w-[380px] max-w-[85vw] shrink-0 snap-start border border-silver-border bg-surface-dim p-8 transition-colors duration-200 hover:border-silver-line"
          >
            <h3 className="mb-4 font-display text-[18px] leading-[22px] text-silver">
              {item.question}
            </h3>
            <p className="mb-6 text-[14px] leading-[1.7] text-silver-soft">
              {item.answerA}
            </p>
            <div className="mb-6 h-px w-full bg-silver-hair" aria-hidden="true" />
            <p className="text-[14px] leading-[1.7] text-silver-soft">
              {item.answerB}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex gap-2" role="group" aria-label="Q&A cards">
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
    </section>
  );
}
