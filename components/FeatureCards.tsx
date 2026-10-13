import { featureCards } from "@/lib/data";

/**
 * Navy "big day" band with the three fact cards.
 */
export function FeatureCards() {
  return (
    <section
      data-paper="feature-band"
      className="flex flex-col items-center justify-center bg-navy px-6 py-20 text-center md:min-h-[700px] md:px-20"
    >
      <div className="t-eyebrow mb-5 text-silver">church wedding/blessing</div>

      <h2
        className="mb-4 font-display text-on-primary"
        style={{ fontSize: "clamp(34px, 3.8vw, 48px)", lineHeight: 1.2 }}
      >
        November 14, 2026
      </h2>

      <p className="mb-12 max-w-[973px] font-display text-[18px] leading-[22px] text-silver-soft italic">
        Join us on our special day at the beautiful venue, where our love story
        continues in a celebration of joy and togetherness
      </p>

      <div className="flex w-full max-w-[900px] flex-col gap-6 md:flex-row md:gap-12">
        {featureCards.map((card) => (
          <div
            key={card.label}
            className="flex flex-1 flex-col items-center border border-silver-border bg-surface-dim p-8 md:p-10"
          >
            <div className="mb-4 text-[10px] leading-3 tracking-[3px] text-silver uppercase">
              {card.label}
            </div>
            <div className="mb-2 font-display text-[28px] leading-[34px] text-on-primary">
              {card.main}
            </div>
            {card.sub && (
              <div className="font-display text-[22px] leading-7 text-silver-soft">
                {card.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
