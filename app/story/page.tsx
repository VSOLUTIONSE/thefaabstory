import { PageHero } from "@/components/Hero";
import { SplitSection } from "@/components/SplitSection";
import { TimelineSection } from "@/components/Timeline";
import { QASection } from "@/components/QASection";
import { ClockIcon, HeartIcon } from "@/components/icons";
import { journey } from "@/lib/data";

export default function StoryPage() {
  return (
    <>
      <PageHero
        image="/images/our-love-story.jpeg"
        imagePosition="object-[50%_12%]"
        overlayColor="#1E2A4A66"
        title="The FAAB Love Story"
        subtitle="A journey of love, laughter, and happily ever after"
      />

      <SplitSection
        paperSlug="her-perspective"
        image="/images/how-we-met.png"
        imageAlt="Abisoye and Favour when they met"
        imageSide="left"
        theme="light"
        eyebrow="Her Perspective"
        title="Where it all began"
        body="From Abisoye's lens: I still remember the first time I saw Favour. There was something about his energy, his smile, the way he carried himself that drew me in. What started as a casual conversation quickly became the highlight of my day. He made me laugh like no one else, and with every passing moment, I found myself falling deeper. Looking back, I can see how every moment was leading us here — to this beautiful love story we're writing together."
        chip={{ icon: <HeartIcon className="h-5 w-5" />, text: "[Date you met]" }}
        chipPosition="after-body"
      />

      <SplitSection
        paperSlug="his-perspective"
        image="/images/proposal.png"
        imageAlt="Favour's proposal to Abisoye"
        imageSide="right"
        theme="dark"
        eyebrow="His Perspective"
        title="from a tom boy to my priceless treasure"
        chip={{ icon: <ClockIcon className="h-5 w-5" />, text: "[Proposal date]" }}
        chipPosition="after-title"
        body="From Favour's lens: I knew Abisoye was the one from our very first conversation. Her laugh, her warmth, the way she saw the world — everything about her felt like home. Planning the proposal was both thrilling and nerve-wracking. I wanted it to be perfect, a moment she'd treasure forever. When I got down on one knee and saw the tears in her eyes, hearing her say yes was the greatest moment of my life. That day, I promised her forever, and I've never looked back."
      />

      <TimelineSection
        paperSlug="journey"
        eyebrow="Our Journey"
        title="The road to forever"
        rows={journey}
        minHeight="md:min-h-[700px]"
      />

      <QASection />
    </>
  );
}
