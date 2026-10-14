import { PageHero } from "@/components/Hero";
import { PerspectiveSection } from "@/components/PerspectiveSection";
import { StoryProse } from "@/components/StoryProse";
import { TimelineSection } from "@/components/Timeline";
import { QASection } from "@/components/QASection";
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

      <StoryProse />

      <PerspectiveSection
        paperSlug="her-perspective"
        image="/images/my-almost-husband.jpeg"
        imageAlt="Abisoye and Favour when they met"
        imageSide="left"
        title="How I Met My Almost-Husband"
        lede="The Confession of His Team Lead 😂"
        openingParagraphs={[
          "If anybody had told me my husband was hiding in my church fellowship group chat, I would have asked them to face their front. 😂",
          "I was the team lead of Team Radiant in the Votage Singles Fellowship when Favour Emmanuel joined. I asked him to post a picture like every new member, and I told the guys how handsome they all looked. Please, I was only welcoming them! Abeg. 😂 Then I assigned him Word of the Day, and whenever he forgot, his humble team lead would slide into his DM: \"Ah, bro, we never see Word of the Day o!\" Little did I know those DMs were quietly opening a door.",
        ]}
        restParagraphs={[
          "I'd once called him Favour Thomas (don't ask), rejected his offer to fix my faulty phone, and was deep in my \"I will not collect gifts from men and fall in love foolishly\" era. Then on November 2nd, he said he wanted to get to know me better. He commented \"Pretty\" on my picture, and I had to remind him that admiring me is not knowing me. 😂 We finally talked for hours, and when a rash he said would dry up by morning actually did, I thought, \"I love me a prophetic man, a priest!\" Kaman de Kapa!! 😂😭",
          "Then Pastor Mercy caught him following me around and asked if he liked me. \"Like like, or marrying like?\" He said marrying like! She told him to take me on a date fast, before I got hijacked, because I was hot cake. 😂 I was wishing the ground would swallow me.",
          "On our first date (shawarma, rice and chicken), Favour spoke words that echoed a Scripture I'd received months earlier about the love my future husband would show me, like Christ's love for the Church. I still took him to God in prayer, but my heart was softening.",
          "Then he asked how long I could court a man before marriage. \"One year at most,\" I said. He said he'd court me for one year and marry me immediately after.",
          "Sir, excuse me? Who sent you? 😂😭❤️",
          "From group chat to forever, my almost-husband became my answered prayer. On November 14th, our forever begins. ❤️💍",
          "I can't wait to do life with BEE'S!! 🫣",
        ]}
      />

      <PerspectiveSection
        paperSlug="his-perspective"
        image="/images/tomboy.jpeg"
        imagePosition="object-[50%_38%]"
        imageAlt="Abisoye, Favour's priceless treasure"
        imageSide="right"
        title="From a Tomboy to My Priceless Treasure"
        openingParagraphs={[
          "When I joined Voltage Church, I was looking for a place to grow in my faith, fellowship with other believers, and hopefully find the love of my life. I knew the kind of woman I wanted: someone who loved God, had a beautiful heart, was caring, respectful, and fun to be around.",
          "Little did I know that my search would lead me to her. 🥰",
          "It all began in the Voltage Singles Fellowship, where she served as a group leader. When I joined the WhatsApp group, she welcomed me warmly. It was a simple conversation, but her name stuck with me, and I found myself wanting to know more about her.",
        ]}
        restParagraphs={[
          "When we eventually met at a Connect meeting, I discovered her playful side. She teased me, we exchanged greetings, and then she ran off! 😂 Funny enough, this became a pattern. Whenever I got the chance to talk to her, she somehow disappeared before we could have a proper conversation.",
          "Looking back, perhaps love was quietly calling before either of us knew it. ❤️",
          "As I followed her WhatsApp status, I began to see the beautiful person behind the playful personality. Her love for God, her sweet soul, and especially her story of moving from Lagos to Benin in obedience to God's instruction deeply impressed me. Her faith made me think, \"This is someone I can walk through life with, trusting God together even when we don't have all the answers.\"",
          "So, I reached out, and our story began to unfold. WhatsApp chats turned into longer conversations and phone calls. The more we talked, the more natural everything felt, as though we'd known each other for years.",
          "What truly touched me was how thoughtful and loving she was, even when she had challenges of her own. It was never about the gifts, but the heart behind them. I saw someone who loved genuinely and gave from the heart.",
          "And then, there was her smile. Oh, that smile! 😊 It had a way of getting to me and making every moment feel special. Beyond it, I fell in love with her faith, kindness, playful nature, and the warmth she brought into my life.",
          "She wasn't perfect, but she was right for me. ❤️",
          "What began with a simple welcome message became a love story more beautiful than I imagined. I came looking for someone to build a life with, and in her, I found my friend, my partner, and the woman I want beside me through every season of life.",
          "Today, she's no longer just the girl who kept running away whenever I wanted to say hello. She's my baby, my wife-to-be, and the woman I look forward to spending forever with. 💍",
          "And if I could go back to that first day in the WhatsApp group, knowing what I know now, I'd do it all over again.",
          "Because it led me to her, my love, my answered prayer, and my forever. ❤️",
        ]}
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
