import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface SplitSectionProps {
  paperSlug: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  theme: "light" | "dark";
  eyebrow: string;
  title: string;
  body?: string;
  rows?: { label: string; value: string[] }[];
  chip?: { icon: ReactNode; text: string };
  chipPosition?: "after-body" | "after-title";
  button?: { label: string; href: string };
}

/**
 * The recurring 55/45 photo + copy band (5 instances across the site).
 * Exact at the 1351px reference width; stacks photo-first on mobile.
 */
export function SplitSection({
  paperSlug,
  image,
  imageAlt,
  imageSide,
  theme,
  eyebrow,
  title,
  body,
  rows,
  chip,
  chipPosition = "after-body",
  button,
}: SplitSectionProps) {
  const dark = theme === "dark";

  const chipEl = chip && (
    <div
      className={`flex items-center gap-4 ${
        chipPosition === "after-title" && body ? "mb-4" : ""
      }`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
        {chip.icon}
      </span>
      <span
        className={`font-display text-[16px] leading-5 ${
          dark ? "text-on-primary" : "text-ink"
        }`}
      >
        {chip.text}
      </span>
    </div>
  );

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
        className="object-cover object-[50%_28%]"
      />
    </figure>
  );

  const copy = (
    <div
      className={`flex w-full flex-col justify-center px-6 py-14 md:basis-[45%] md:px-16 md:py-16`}
    >
      <div className="max-w-[560px]">
        <div className={`t-eyebrow mb-5 ${dark ? "text-silver" : "text-primary"}`}>
          {eyebrow}
        </div>

        <h2
          className={`t-heading ${rows ? "mb-8" : "mb-6"} ${
            dark ? "text-on-primary" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {chip && chipPosition === "after-title" && chipEl}

        {body && (
          <p className={`t-body mb-8 whitespace-pre-line ${dark ? "text-silver-soft" : "text-muted"}`}>
            {body}
          </p>
        )}

        {rows && (
          <div className="mb-9 flex flex-col gap-5">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-silver-ring"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-silver" />
                </span>
                <span>
                  <span className="mb-1 block text-[10px] leading-3 tracking-[2px] text-silver-dim uppercase">
                    {row.label}
                  </span>
                  <span
                    className={`block font-display text-[18px] leading-[22px] ${
                      dark ? "text-on-primary" : "text-ink"
                    }`}
                  >
                    {row.value.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}

        {chip && chipPosition === "after-body" && chipEl}

        {button && (
          <Link
            href={button.href}
            className={`btn w-fit ${dark ? "btn-outline-silver" : "btn-outline-wine"}`}
          >
            {button.label}
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <section
      data-paper={paperSlug}
      className={`flex flex-col md:min-h-[640px] md:flex-row ${
        dark ? "bg-primary" : "bg-surface"
      }`}
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
