import type { Metadata } from "next";
import { Lora, Open_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MusicFab, MusicProvider } from "@/components/music";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "theFAABstory — Abisoye & Favour | November 14, 2026",
  description:
    "Join Abisoye & Favour as they say 'I do' on November 14, 2026 at Powelife Christian Faith International, Ojo Lagos. Wedding details, our love story, and gift registry.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MusicProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <MusicFab />
        </MusicProvider>
      </body>
    </html>
  );
}
