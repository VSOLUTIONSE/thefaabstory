import Image from "next/image";
import { BRAND, COUPLE, WEDDING_DATE } from "@/lib/data";

interface OverlayVariant {
  gradient?: boolean;
  color?: string;
}

/**
 * Home hero — 820px tall, full-bleed photo, design gradient overlay.
 */
export function HomeHero({
  image,
  overlay = { gradient: true },
}: {
  image: string;
  overlay?: OverlayVariant;
}) {
  return (
    <section
      data-paper="hero"
      className="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden md:min-h-[820px]"
    >
      <Image
        src={image}
        alt={`${COUPLE}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${overlay.gradient ? "hero-gradient" : ""}`}
        style={overlay.color ? { backgroundColor: overlay.color } : undefined}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div
          className="t-eyebrow t-eyebrow-hero rise mb-7 text-silver"
          style={{ animationDelay: "0ms" }}
        >
          {BRAND}
        </div>

        <h1
          className="t-hero-title flex flex-wrap justify-center text-on-primary"
          style={{ animationDelay: "70ms" }}
        >
          <span className="rise">{COUPLE}</span>
        </h1>

        <div
          className="rise mt-9 mb-7 h-px w-[60px] bg-silver opacity-80"
          style={{ animationDelay: "140ms" }}
          aria-hidden="true"
        />

        <div
          className="rise font-display text-[22px] leading-7 tracking-[2px] text-silver italic"
          style={{ animationDelay: "210ms" }}
        >
          {WEDDING_DATE}
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] leading-[14px] tracking-[3px] text-silver-dim uppercase md:bottom-10"
        aria-hidden="true"
      >
        Scroll to explore
      </div>
    </section>
  );
}

/**
 * Inner-page hero (details / story / registry) — 820px, flat overlay.
 */
export function PageHero({
  image,
  overlayColor,
  title,
  subtitle,
  imagePosition = "object-center",
  minHeight = "min-h-[640px] md:min-h-[820px]",
}: {
  image: string;
  overlayColor: string;
  title: string;
  subtitle: string;
  imagePosition?: string;
  minHeight?: string;
}) {
  return (
    <section
      data-paper="page-hero"
      className={`relative flex flex-col items-center justify-center overflow-hidden px-6 text-center ${minHeight}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${imagePosition}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />

      <div className="relative flex flex-col items-center">
        <div
          className="t-eyebrow rise mb-5 text-silver"
          style={{ animationDelay: "0ms" }}
        >
          {BRAND}
        </div>

        <h1
          className="t-page-title rise mb-4 text-on-primary"
          style={{ animationDelay: "70ms" }}
        >
          {title}
        </h1>

        <p
          className="rise max-w-[90vw] font-display text-[20px] leading-6 text-silver italic md:max-w-3xl"
          style={{ animationDelay: "140ms" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
