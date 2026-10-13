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
        className={`mx-auto flex h-[60px] w-full items-center justify-between px-4 md:h-[76px] md:px-8 ${
          scrolled ? "text-ink" : "text-on-primary"
        }`}
      >
        <Link
          href="/"
          className="font-display text-[17px] tracking-[0.5px] transition-colors duration-200 hover:opacity-80 md:text-[20px]"
        >
          {BRAND}
        </Link>

        <ul className="flex items-center gap-3 md:gap-8">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={active}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link text-[10px] tracking-[1.5px] uppercase transition-colors duration-200 hover:opacity-70 md:text-[11px] md:tracking-[2px] ${
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
