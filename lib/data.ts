import type { ReactNode } from "react";

export type DotColor = "primary" | "navy";

export interface TimelineRow {
  time: string;
  title: string;
  sub: string[];
  dot: DotColor;
}

export const schedule: TimelineRow[] = [
  {
    time: "8AM",
    title: "Engagement",
    sub: ["2 Kewugnbemi Close, Elemijaiye Shibiri, Ojo Lagos"],
    dot: "primary",
  },
  {
    time: "10AM",
    title: "Wedding",
    sub: [
      "Powelife Christian Faith International",
      "153,Shibiri road,iyana school b/stop Ojo Lagos",
    ],
    dot: "navy",
  },
  {
    time: "12PM",
    title: "Reception",
    sub: ["Council, Opposite goodness hospital by ìyànà Ilogbo bustop, Ọjọ Lagos"],
    dot: "primary",
  },
  {
    time: "when you want",
    title: "Close",
    sub: ["Sparkler exit and farewell"],
    dot: "navy",
  },
];

export const journey: TimelineRow[] = [
  {
    time: "August 2025",
    title: "First Meeting",
    sub: [
      "Team Radiant, Votage Singles Fellowship.",
      "The team lead assigned Word of the Day, and the rest is history. 😂",
    ],
    dot: "primary",
  },
  {
    time: "December 6, 2025",
    title: "First Date",
    sub: ["Shawarma, rice, chicken and a Scripture I could never forget. ❤️"],
    dot: "navy",
  },
  {
    time: "December 2025",
    title: "Made It Official",
    sub: ["He asked to court me for one year and marry me immediately after."],
    dot: "primary",
  },
  {
    time: "Nov 14, 2026",
    title: "Wedding Day",
    sub: ["From group chat to forever."],
    dot: "primary",
  },
];

export interface FeatureCard {
  label: string;
  main: string;
  sub?: string;
}

export const featureCards: FeatureCard[] = [
  { label: "Date", main: "Saturday", sub: "November 14, 2026" },
  { label: "Time", main: "10AM", sub: "CHURCH" },
  { label: "Venue", main: "Powelife Christian Faith International" },
];

export const homeDetailRows: { label: string; value: string[] }[] = [
  { label: "Date", value: ["November 14, 2026"] },
  { label: "Time", value: ["10AM"] },
  {
    label: "Venue",
    value: [
      "Powelife Christian Faith International",
      "153,Shibiri road,iyana school b/stop Ojo Lagos",
    ],
  },
];

export const directionsText = `For the Church Wedding:
 From Oshodi, get a bus to Mile Two. From Mile Two, enter a bus going to Volks. Cross to the other side and enter Shibiri. Alight at Iyànà School.

 For the Reception:
 Alight at Iyànà Ilogbo.

 Please avoid entering a bus going to Shibiri through Ilogbo.`;

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Powelife+Christian+Faith+International+153+Shibiri+road+Ojo+Lagos";

export interface QAItem {
  question: string;
  answerA: string;
  answerB?: string;
}

export const qaItems: QAItem[] = [
  {
    question: "What is your favorite thing about each other?",
    answerA:
      "My favorite thing is how intentional he is about me...bro listens!!",
    answerB:
      "My favourite thing about her is how selfless she can be and its shows in every of her actions, also her smile",
  },
  {
    question: "What are you most excited about for the wedding?",
    answerA:
      "Honestly, I cant pick one thing, but it sure feels good to be seen, loved, CHOSEN.....Feels surreal",
    answerB:
      "Well, I’m excited about the fact that I’ll get the chance to love and cherish my Bee as we both grow into the future and the plans God has for us. ❤️",
  },
  {
    question: "What is your vision for your future together?",
    answerA:
      "My future is to build a beautiful and God centered home with Bee's. where love, friendship peace and purpose thrive. I want to grow together, fulfill God's plan for our lives, while choosing each other through every season.",
    answerB: "To build a future to helps us fulfill purpose and one where christ is king",
  },
  {
    question: "How did you know they were the one?",
    answerA:
      'It was clear, pure, and obvious. ❤️\n\nWhen Favour said, "I was taking my time because I am learning to love you as my woman, as Christ taught us, loving you as my own body," something struck me. I immediately flipped through my book and searched the notes on my phone. There it was, the very word God had given me months earlier. In that moment, I knew.',
    answerB:
      "I knew she was the kind of woman I wanted. First, she was what I call my G-S3: God-fearing, Sacrificial, Submissive, and Single at heart. Those were the boxes… wasn’t much, I guess. 😅",
  },
  {
    question: "What is your favorite memory together?",
    answerA:
      "My favourite memory has to be when he told me he wanted us to go somewhere, only for us to end up at a FINE DINING RESTAURANT! 😭😂\n\nGuys, I felt crazy brazy! Because tell me why my first fine-dining date had me wearing FLAT SLIP-ONS?! 😭😂 I was embarrassed and blushing inside, but at the same time, it was so sweet.\n\nBut this man? Bro still took me out, treated me like a QUEEN all through, and made me feel so special! 🥹\n\nThe shoes may not have understood the assignment, but the man definitely did! 😭❤️",
    answerB:
      "it was when i asked her out...lol, funny how i could almost know she'd give me a Yes, not because of anything i just knew i had some peace anytime i prayed about us, and also i think i ticked a bit of her box😉.....i'm not proud. it's what it is. 😇",
  },
];

export interface RegistryGroup {
  title: string;
  image: string;
  items?: string[];
  fundDesc?: string;
  description?: string;
  price?: string;
}

export interface RegistryCategory {
  id: string;
  label: string;
  theme: "light" | "dark";
  intro?: string;
  footnote?: string;
  groups: RegistryGroup[];
}

export const registryCategories: RegistryCategory[] = [
  {
    id: "home-living",
    label: "Home & Living",
    theme: "light",
    groups: [
      {
        title: "Bedroom & comfort",
        image: "/registry/bedroom.jpg",
        description:
          "A soft place to land — fresh linens, warm light, and proper rest after long days.",
        price: "₦120,000 – ₦250,000",
        items: [
          "Quality bedsheet and duvet set",
          "Decorative throw pillows",
          "Bedside lamps",
        ],
      },
      {
        title: "Home appliances",
        image: "/registry/home-appliances.jpg",
        description:
          "The practical pieces that keep a household running comfortably through every season.",
        price: "₦250,000 – ₦800,000",
        items: ["Blender", "Air fryer", "Rechargeable standing fan", "Washing machine"],
      },
      {
        title: "Dining & hosting",
        image: "/registry/dining-serving.jpg",
        description:
          "Tableware for quiet dinners at home and the guests we love hosting.",
        price: "₦60,000 – ₦150,000",
        items: ["Dinnerware and cutlery set"],
      },
    ],
  },
  {
    id: "experiences",
    label: "Honeymoon contribution",
    theme: "dark",
    groups: [
      {
        title: "Honeymoon contribution",
        image: "/registry/honeymoon.jpg",
        description:
          "A little help towards creating beautiful memories on our first trip as a married couple.",
        price: "Any amount",
      },
      {
        title: "Date night experiences",
        image: "/registry/date-night.jpg",
        description:
          "For intentional time together, special dinners, and beautiful memories.",
        price: "Any amount",
      },
      {
        title: "Growing together in faith",
        image: "/registry/spiritual.jpg",
        description:
          "Marriage devotionals, enrichment programmes, and resources to strengthen our walk with God.",
        price: "₦30,000 – ₦150,000",
      },
    ],
  },
  {
    id: "gift-of-choice",
    label: "Gift of Choice",
    theme: "light",
    groups: [
      {
        title: "A monetary gift",
        image: "/registry/future-fund.jpg",
        description:
          "For those who prefer to give cash, your gift will be thoughtfully directed towards our shared plans and the things we value as a couple.",
        price: "Any amount",
      },
    ],
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/story" },
  { label: "Details", href: "/details" },
  { label: "Gift Us", href: "/registry" },
];

export const COUPLE = "Abisoye & Favour";
export const WEDDING_DATE = "November 14, 2026";
export const BRAND = "theFAABstory";

export type { ReactNode };
