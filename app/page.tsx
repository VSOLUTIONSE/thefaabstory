import { HomeHero } from "@/components/Hero";
import { SplitSection } from "@/components/SplitSection";
import { homeDetailRows } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HomeHero image="/images/hero-actual.jpeg" />

      <SplitSection
        paperSlug="home-love-story"
        image="/images/love-story-photo.png"
        imageAlt="Abisoye and Favour together"
        imageSide="left"
        theme="light"
        eyebrow="Our Love Story"
        title="A love written in the stars"
        body="From the first hello to forever — this is the story of how Abisoye and Favour found each other, fell in love, and decided to spend the rest of their lives together."
        button={{ label: "Read Our Love Story", href: "/story" }}
      />

      <SplitSection
        paperSlug="home-details"
        image="/images/wedding-details-photo.png"
        imageAlt="Wedding celebration details"
        imageSide="right"
        theme="dark"
        eyebrow="Wedding Details"
        title="Save the Date"
        rows={homeDetailRows}
        button={{ label: "View Details", href: "/details" }}
      />

      <SplitSection
        paperSlug="home-registry"
        image="/images/registry-photo.png"
        imageAlt="A gift for the couple"
        imageSide="left"
        theme="light"
        eyebrow="Help set our new home"
        title="Your presence is our present"
        body="The greatest gift you can give us is your presence on our special day. However, if you wish to bless us with a gift, we have prepared a registry with a few items we would love as we begin this new chapter together."
        button={{ label: "Gift Us", href: "/registry" }}
      />
    </>
  );
}
