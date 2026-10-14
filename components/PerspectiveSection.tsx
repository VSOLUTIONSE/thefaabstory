"use client";

import { useState } from "react";
import Image from "next/image";

interface PerspectiveSectionProps {
  paperSlug: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  imagePosition?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  openingParagraphs: string[];
  restParagraphs: string[];
}

/**
 * Photo + long-form perspective story with expand-in-place.
 */
export function PerspectiveSection({
  paperSlug,
  image,
  imageAlt,
  imageSide,
  imagePosition = "object-center",
  eyebrow,
  title,
  lede,
  openingParagraphs,
  restParagraphs,
}: PerspectiveSectionProps) {
  const [expanded, setExpanded] = useState(false);

  const photo = (
    <figure
      className={`relative min-h-[300px] w-full shrink-0 overflow-hidden md:min-h-full md:basis-[55%] ${
        imageSide === "right" ? "max-md:order-first" : ""
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 55vw"
        className={`object-cover ${imagePosition}`}
      />
    </figure>
  );

  const copy = (
    <div className="flex w-full flex-col justify-center px-6 py-14 md:basis-[45%] md:px-14 md:py-16">
      <div className="max-w-[560px]">
        {eyebrow && (
          <div className="t-eyebrow mb-5 text-primary">{eyebrow}</div>
        )}

        <h2 className="t-heading mb-4 text-ink">{title}</h2>

        {lede && (
          <p className="mb-7 font-display text-[18px] leading-7 text-primary italic">
            {lede}
          </p>
        )}

        <div className="relative flex flex-col gap-5">
          {openingParagraphs.map((paragraph) => (
            <p key={paragraph} className="t-body text-muted">
              {paragraph}
            </p>
          ))}

          {expanded ? (
            restParagraphs.map((paragraph) => (
              <p key={paragraph} className="t-body text-muted">
                {paragraph}
              </p>
            ))
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
      </div>
    </div>
  );

  return (
    <section
      data-paper={paperSlug}
      className="flex flex-col bg-surface md:min-h-[640px] md:flex-row"
    >
      {imageSide === "left" ? (
        <>
          {photo}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {photo}
        </>
      )}
    </section>
  );
}
