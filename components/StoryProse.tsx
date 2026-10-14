"use client";

import { useState } from "react";
import {
  storyClosingLine,
  storyOpeningParagraphs,
  storyRestParagraphs,
} from "@/lib/story";

/**
 * Editorial prose band — the couple's story with expand-in-place.
 */
export function StoryProse() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      data-paper="story-prose"
      className="flex flex-col items-center bg-surface px-6 py-20 md:px-20"
    >
      <div className="t-eyebrow mb-5 text-primary">From VSF · Team Radiant</div>

      <h2 className="t-heading mb-10 text-center text-ink">Our Love Story</h2>

      <div className="relative flex w-full max-w-[900px] flex-col gap-6">
        {storyOpeningParagraphs.map((paragraph) => (
          <p key={paragraph} className="t-body text-muted">
            {paragraph}
          </p>
        ))}

        {expanded ? (
          <>
            {storyRestParagraphs.map((paragraph) => (
              <p key={paragraph} className="t-body text-muted">
                {paragraph}
              </p>
            ))}
            <p className="mt-2 text-center font-display text-[22px] leading-8 text-primary italic">
              {storyClosingLine}
            </p>
          </>
        ) : (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
          />
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="btn btn-outline-wine mt-8 w-fit cursor-pointer"
      >
        {expanded ? "Show less" : "Continue reading"}
      </button>
    </section>
  );
}
