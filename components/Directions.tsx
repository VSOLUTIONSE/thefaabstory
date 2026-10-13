import { directionsText, mapsUrl } from "@/lib/data";
import { MapIcon, MapPinIcon } from "./icons";

/**
 * Directions band — copy left, venue tile + maps button right.
 */
export function Directions() {
  return (
    <section
      data-paper="directions"
      className="flex items-center bg-surface px-6 py-16 md:min-h-[500px] md:px-20 md:py-20"
    >
      <div className="flex w-full flex-col gap-12 md:flex-row md:gap-0">
        <div className="md:w-1/2 md:pr-12">
          <div className="t-eyebrow mb-5 text-primary">Directions</div>

          <h2 className="t-heading mb-6 text-ink">Getting There</h2>

          <p className="t-body mb-8 whitespace-pre-line text-muted">
            {directionsText}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:w-1/2">
          <div className="g1 flex h-[280px] w-full flex-col items-center justify-center gap-4 px-6 text-center">
            <MapPinIcon className="h-12 w-12 text-silver" />
            <div className="font-display text-[20px] leading-6 text-on-primary">
              Powelife Christian Faith International
            </div>
            <div className="text-[13px] leading-4 text-silver-dim">
              Iyànà, Ilogbo
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            <MapIcon className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
