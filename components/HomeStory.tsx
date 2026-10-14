import Image from "next/image";
import Link from "next/link";

/**
 * Homepage love-story band — photo + condensed teaser linking to /story.
 */
export function HomeStory() {
  return (
    <section
      data-paper="home-love-story"
      className="flex flex-col bg-surface md:min-h-[640px] md:flex-row"
    >
      <figure className="relative min-h-[300px] w-full shrink-0 overflow-hidden md:min-h-full md:basis-[55%]">
        <Image
          src="/images/love-story-photo.png"
          alt="Abisoye and Favour together"
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-center"
        />
      </figure>

      <div className="flex w-full flex-col justify-center px-6 py-14 md:basis-[45%] md:px-16 md:py-16">
        <div className="max-w-[560px]">
          <div className="t-eyebrow mb-5 text-primary">Our Love Story</div>

          <h2 className="t-heading mb-6 text-ink">A Love Written by God</h2>

          <p className="t-body mb-8 text-muted">
            It started in a Vintage Singles fellowship group chat called Team
            Radiant, where Abisoye was team lead and Favour was just a member
            she gave Word of the Day duties to. 😂 A few rejected offers of
            help, one very long phone call and a nudge from Pastor Mercy later,
            friendship turned into a love we&apos;d only prayed about. From
            Team Radiant to forever, our next chapter begins November 14th. 💍
          </p>

          <Link href="/story" className="btn btn-outline-wine w-fit">
            Read our full story
          </Link>
        </div>
      </div>
    </section>
  );
}
