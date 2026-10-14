"use client";

import Link from "next/link";
import { BRAND, COUPLE, WEDDING_DATE, navItems } from "@/lib/data";
import { useMusic } from "./music";
import { MusicNoteIcon } from "./icons";

function FooterMusicButton() {
  const { playing, toggle } = useMusic();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      aria-pressed={playing}
      className="absolute top-6 right-6 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-silver-line text-silver transition-[background-color,color,transform] duration-150 ease-out hover:bg-silver hover:text-ink active:scale-[0.97] md:right-8"
    >
      {playing ? (
        <span className="flex h-3 items-end gap-[2px]" aria-hidden="true">
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "0ms" }} />
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "150ms" }} />
          <span className="eq-bar h-full w-[2px] bg-current" style={{ animationDelay: "300ms" }} />
        </span>
      ) : (
        <MusicNoteIcon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export function Footer() {
  return (
    <footer
      data-paper="footer"
      className="relative flex min-h-[200px] flex-col items-center justify-center bg-ink px-6 py-12 text-center"
    >
      <FooterMusicButton />

      <div className="font-display text-[24px] leading-[30px] text-on-primary md:text-[28px] md:leading-[34px]">
        {BRAND}
      </div>

      <div className="mt-3 mb-6 text-[12px] leading-4 tracking-[2px] text-silver-faint">
        {COUPLE} · {WEDDING_DATE}
      </div>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {navItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-6">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="h-1 w-1 shrink-0 rounded-full bg-silver-line"
                />
              )}
              <Link
                href={item.href}
                className="text-[11px] leading-[14px] tracking-[1px] text-silver-faint transition-colors duration-200 hover:text-silver"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 text-[11px] leading-4 tracking-[1px] text-silver-faint">
        © 2026 {BRAND}. All rights reserved.
      </div>

      <div className="mt-2 text-[11px] leading-4 tracking-[1px] text-silver-faint">
        Designed by VarySoft Technologies · +234 9014535419
      </div>
    </footer>
  );
}
