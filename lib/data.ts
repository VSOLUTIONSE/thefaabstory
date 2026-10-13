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
    time: "[Date]",
    title: "First Meeting",
    sub: ["[Describe your first encounter]"],
    dot: "primary",
  },
  {
    time: "[Date]",
    title: "First Date",
    sub: ["[Describe your first date]"],
    dot: "navy",
  },
  {
    time: "[Date]",
    title: "Made It Official",
    sub: ["[When did you become a couple?]"],
    dot: "primary",
  },
  {
    time: "Nov 14, 2026",
    title: "Wedding Day",
    sub: ["The beginning of forever"],
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
  answerB: string;
}

export const qaItems: QAItem[] = [
  {
    question: "What is your favorite thing about each other?",
    answerA: "[Abisoye: share what you love most about Favour]",
    answerB: "[Favour: share what you love most about Abisoye]",
  },
  {
    question: "What are you most excited about for the wedding?",
    answerA: "[Abisoye: what are you looking forward to?]",
    answerB: "[Favour: what are you looking forward to?]",
  },
  {
    question: "What is your vision for your future together?",
    answerA: "[Abisoye: share your dreams]",
    answerB: "[Favour: share your dreams]",
  },
  {
    question: "How did you know they were the one?",
    answerA: "[Abisoye: share the moment you knew]",
    answerB: "[Favour: share the moment you knew]",
  },
  {
    question: "What is your favorite memory together?",
    answerA: "[Abisoye: share a favorite memory]",
    answerB: "[Favour: share a favorite memory]",
  },
];

export interface RegistryGroup {
  title: string;
  image: string;
  items?: string[];
  fundDesc?: string;
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
        title: "Bedroom essentials",
        image: "/registry/bedroom.jpg",
        items: [
          "Bedsheets and duvet sets",
          "Pillows and pillowcases",
          "Mattress topper",
          "Bedside lamps",
          "Curtains and blinds",
        ],
      },
      {
        title: "Living room",
        image: "/registry/living-room.jpg",
        items: [
          "Throw pillows and blankets",
          "Area rug",
          "Wall art and decorative frames",
          "Floor lamp",
          "Curtains",
          "Wall clock",
        ],
      },
      {
        title: "Home appliances",
        image: "/registry/home-appliances.jpg",
        items: [
          "Rechargeable standing fan",
          "Air conditioner",
          "Washing machine",
          "Pressing iron or garment steamer",
          "Vacuum cleaner",
          "Generator or inverter contribution",
        ],
      },
      {
        title: "Home finishing touches",
        image: "/registry/finishing.jpg",
        items: [
          "Dining set",
          "Laundry basket",
          "Storage organisers",
          "Bathroom accessories",
          "Doormats",
          "Cleaning supplies",
        ],
      },
    ],
  },
  {
    id: "experiences",
    label: "Experiences",
    theme: "dark",
    intro:
      "This category is lovely because not every gift has to be a physical item. Your friends and family can contribute to experiences that help you build beautiful memories together.",
    footnote:
      "Other ideas: a spa day for two, a weekend staycation, a cooking class, or a contribution towards a trip you have both dreamed of taking.",
    groups: [
      {
        title: "Honeymoon fund",
        image: "/registry/honeymoon.jpg",
        fundDesc:
          "Help us create beautiful memories on our first trip as a married couple.",
      },
      {
        title: "Date night fund",
        image: "/registry/date-night.jpg",
        fundDesc:
          "For dinner dates, movie nights and intentional time together.",
      },
      {
        title: "Couples' spiritual growth",
        image: "/registry/spiritual.jpg",
        items: [
          "Couples' devotional books",
          "Marriage enrichment programmes",
          "Christian marriage conferences",
          "Christian counselling sessions",
        ],
      },
      {
        title: "Memories fund",
        image: "/registry/memories.jpg",
        items: [
          "Anniversary photoshoot",
          "Couples' portrait",
          "Short getaway",
          "First wedding anniversary celebration",
        ],
      },
    ],
  },
  {
    id: "cash-gifts",
    label: "Cash Gifts",
    theme: "light",
    intro:
      "Cash gifts are particularly useful for couples setting up a home because you can direct the money towards the things you need most.",
    footnote:
      "You can also choose a contribution amount — for example ₦10,000, ₦25,000, ₦50,000, ₦100,000, or enter a custom amount. Every contribution is appreciated, regardless of size.",
    groups: [
      {
        title: "Our Home Fund",
        image: "/registry/home-fund.jpg",
        fundDesc:
          "For furniture, rent-related expenses or setting up our home.",
      },
      {
        title: "Honeymoon Fund",
        image: "/registry/honeymoon-fund.jpg",
        fundDesc: "Help us fund our first adventure together.",
      },
      {
        title: "Our Future Fund",
        image: "/registry/future-fund.jpg",
        fundDesc:
          "A contribution towards our shared future and long-term goals.",
      },
      {
        title: "Bless Our Marriage",
        image: "/registry/bless-marriage.jpg",
        fundDesc:
          "A monetary gift to support us as we begin this new chapter.",
      },
      {
        title: "Power & Comfort Fund",
        image: "/registry/power-fund.jpg",
        fundDesc:
          "Towards an inverter, solar setup or other home essentials.",
      },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    theme: "dark",
    intro:
      "For a Nigerian household, this category can be one of the most useful parts of your registry.",
    groups: [
      {
        title: "Cooking essentials",
        image: "/registry/cookware.jpg",
        items: [
          "Quality pots and pans",
          "Pressure cooker",
          "Non-stick frying pan",
          "Cooking utensils",
          "Chopping boards and knives",
          "Mixing bowls and measuring cups",
        ],
      },
      {
        title: "Kitchen appliances",
        image: "/registry/kitchen-appliances.jpg",
        items: [
          "Blender",
          "Air fryer",
          "Microwave",
          "Toaster",
          "Electric kettle",
          "Rice cooker",
          "Food processor",
          "Stand mixer",
        ],
      },
      {
        title: "Dining & serving",
        image: "/registry/dining-serving.jpg",
        items: [
          "Dinner plates and bowls",
          "Cutlery set",
          "Drinking glasses and mugs",
          "Serving trays and bowls",
          "Food flasks",
          "Water dispenser",
          "Food storage containers",
        ],
      },
      {
        title: "Everyday Nigerian kitchen needs",
        image: "/registry/kitchen-everyday.jpg",
        items: [
          "Airtight containers for rice, beans and garri",
          "Spice jars and seasoning organisers",
          "Large food storage bowls",
          "Gas cooker or contribution towards one",
          "Gas cylinder and accessories",
          "Pantry restocking fund",
        ],
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
