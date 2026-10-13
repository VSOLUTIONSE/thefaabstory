import type { TimelineRow } from "@/lib/data";

interface TimelineSectionProps {
  paperSlug: string;
  eyebrow: string;
  title: string;
  rows: TimelineRow[];
  minHeight: string;
}

/**
 * Centered timeline band — used for the wedding schedule and the journey.
 */
export function TimelineSection({
  paperSlug,
  eyebrow,
  title,
  rows,
  minHeight,
}: TimelineSectionProps) {
  return (
    <section
      data-paper={paperSlug}
      className={`flex flex-col items-center justify-center bg-surface px-6 py-20 md:px-20 ${minHeight}`}
    >
      <div className="t-eyebrow mb-5 text-primary">{eyebrow}</div>

      <h2 className="t-heading mb-12 text-center text-ink">{title}</h2>

      <ol className="flex w-full max-w-[700px] flex-col">
        {rows.map((row, index) => (
          <li
            key={`${row.time}-${row.title}`}
            className={`flex items-center gap-4 py-6 sm:gap-8 ${
              index < rows.length - 1 ? "border-b border-wine-line" : ""
            }`}
          >
            <span className="w-[92px] shrink-0 font-display text-[17px] leading-6 text-primary sm:w-[140px] sm:text-[20px]">
              {row.time}
            </span>

            <span
              aria-hidden="true"
              className={`h-3 w-3 shrink-0 rounded-full ${
                row.dot === "primary" ? "bg-primary" : "bg-navy"
              }`}
            />

            <span className="min-w-0">
              <span className="mb-1 block font-display text-[18px] leading-6 text-ink sm:text-[20px]">
                {row.title}
              </span>
              <span className="block text-[13px] leading-4 text-muted">
                {row.sub.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
