import { PageHero } from "@/components/Hero";
import { TimelineSection } from "@/components/Timeline";
import { FeatureCards } from "@/components/FeatureCards";
import { Directions } from "@/components/Directions";
import { schedule } from "@/lib/data";

export default function DetailsPage() {
  return (
    <>
      <PageHero
        image="/images/details-hero.png"
        overlayColor="#1E2A4A73"
        title="Celebrating Our Love"
        subtitle="Join us in sharing the joy as we prepare to say 'I do'"
      />

      <TimelineSection
        paperSlug="schedule"
        eyebrow="Schedule of Events"
        title="The Big Day"
        rows={schedule}
        minHeight="md:min-h-[600px]"
      />

      <FeatureCards />
      <Directions />
    </>
  );
}
