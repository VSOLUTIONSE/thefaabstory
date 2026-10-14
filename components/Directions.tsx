import { directionsText, mapsUrl } from "@/lib/data";
import { MapIcon } from "./icons";

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
          <div className="flex h-[280px] w-full items-center justify-center border border-silver-line">
            <iframe
              title="Powelife Christian Faith International on Google Maps"
              src="https://maps.google.com/maps?q=Powelife%20Christian%20Faith%20International%20153%20Shibiri%20road%20Ojo%20Lagos&z=16&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
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
