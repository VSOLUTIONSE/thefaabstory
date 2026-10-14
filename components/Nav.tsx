"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, navItems } from "@/lib/data";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-200 ease-out ${
        scrolled
          ? "border-b border-silver-line bg-surface/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex w-full flex-col items-center gap-2 px-4 py-3 md:h-[76px] md:flex-row md:justify-between md:gap-0 md:px-8 md:py-0 ${
          scrolled ? "text-ink" : "text-on-primary"
        }`}
      >
        <Link
          href="/"
          className="font-display text-[16px] tracking-[0.5px] text-primary transition-colors duration-200 hover:opacity-80 md:text-[20px]"
        >
          {BRAND}
        </Link>

        <ul className="flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 md:gap-x-8 md:gap-y-0">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={active}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link whitespace-nowrap text-center text-[10px] leading-[14px] tracking-[1.5px] uppercase transition-colors duration-200 hover:opacity-70 md:text-[11px] md:leading-none md:tracking-[2px] ${
                    active
                      ? scrolled
                        ? "text-primary"
                        : "text-on-primary"
                      : scrolled
                        ? "text-muted"
                        : "text-silver-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
