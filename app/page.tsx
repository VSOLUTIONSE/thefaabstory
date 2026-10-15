import { HomeHero } from "@/components/Hero";
import { HomeStory } from "@/components/HomeStory";
import { SplitSection } from "@/components/SplitSection";
import { homeDetailRows } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HomeHero image="/images/hero-actual.jpeg" />

      <HomeStory />

      <SplitSection
        paperSlug="home-details"
        image="/images/tomboy.jpeg"
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
        title="A GIFT to our Journey together"
        body={`As we prepare to begin this beautiful new chapter together, we'd greatly appreciate your love, prayers, and support of our family and friends.

Your presence at our wedding means so much to us. If you'd also love to bless us with a gift, we've put together a small selection of things we'd appreciate as we build our life together.

Please know that every gift, prayer, and expression of love is deeply appreciated.`}
        button={{ label: "Gift Us", href: "/registry" }}
      />
    </>
  );
}
