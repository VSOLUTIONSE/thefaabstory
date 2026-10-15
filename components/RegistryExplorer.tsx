"use client";

import { useState } from "react";
import { registryCategories, type RegistryCategory } from "@/lib/data";

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer border px-6 py-2.5 text-[12px] leading-4 tracking-[2px] uppercase transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.97] ${
        active
          ? "border-primary bg-primary text-on-primary"
          : "border-primary bg-transparent text-primary hover:bg-primary hover:text-on-primary"
      }`}
    >
      {label}
    </button>
  );
}

function CategoryBand({
  category,
  onGift,
}: {
  category: RegistryCategory;
  onGift: () => void;
}) {
  const dark = category.theme === "dark";

  return (
    <section
      id={category.id}
      data-paper={`registry-${category.id}`}
      className={`flex scroll-mt-20 flex-col items-center px-6 py-15 md:px-15 ${
        dark ? "bg-primary" : "bg-surface"
      }`}
    >
      <div
        className={`t-eyebrow mb-4 ${dark ? "text-silver" : "text-primary"}`}
      >
        {category.label}
      </div>

      {category.intro && (
        <p
          className={`mb-10 max-w-[640px] text-center text-[14px] leading-5 ${
            dark ? "text-silver-soft" : "text-muted"
          }`}
        >
          {category.intro}
        </p>
      )}

      <div className="grid w-full max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
        {category.groups.map((group) => (
          <article
            key={group.title}
            className={`flex flex-col overflow-hidden border ${
              dark
                ? "border-silver-border bg-surface-dim"
                : "border-silver-line bg-white"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={group.image}
              alt={group.title}
              loading="lazy"
              className="h-[240px] w-full object-cover"
            />

            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="flex flex-col gap-3">
                <h3
                  className={`font-display text-[18px] leading-[22px] ${
                    dark ? "text-on-primary" : "text-ink"
                  }`}
                >
                  {group.title}
                </h3>

                <p
                  className={`text-[13px] leading-5 ${
                    dark ? "text-silver-soft" : "text-muted"
                  }`}
                >
                  {group.description ?? group.fundDesc}
                </p>

                {group.items && (
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-2 text-[13px] leading-4 ${
                          dark ? "text-silver-soft" : "text-muted"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={dark ? "text-silver" : "text-primary"}
                        >
                          &middot;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {group.price && (
                <div
                  className={`mt-auto flex items-center justify-between border-t pt-4 ${
                    dark ? "border-silver-border" : "border-silver-line"
                  }`}
                >
                  <span
                    className={`text-[10px] leading-3 tracking-[2px] uppercase ${
                      dark ? "text-silver" : "text-muted"
                    }`}
                  >
                    Price
                  </span>
                  <span
                    className={`font-display text-[18px] leading-6 ${
                      dark ? "text-silver" : "text-primary"
                    }`}
                  >
                    {group.price}
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={onGift}
                className="btn btn-solid w-fit cursor-pointer"
              >
                Gift Us
              </button>
            </div>
          </article>
        ))}
      </div>

      {category.footnote && (
        <p
          className={`mt-10 max-w-[640px] text-center text-[13px] leading-5 ${
            dark ? "text-silver" : "text-primary"
          }`}
        >
          {category.footnote}
        </p>
      )}
    </section>
  );
}

/**
 * Category chips + accordion: items render only for the clicked category
 * (Home & Living first and open by default; clicking the active chip collapses).
 * Each card shows description, items, price, and a Gift Us button directly —
 * no modal. "Gift Us" opens the Cash Gifts category below.
 */
export function RegistryExplorer() {
  const [openId, setOpenId] = useState<string | null>(
    registryCategories[0].id
  );

  const handleGift = () => {
    setOpenId("cash-gifts");
    window.setTimeout(() => {
      document
        .getElementById("cash-gifts")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const visible = openId
    ? registryCategories.filter((c) => c.id === openId)
    : [];

  return (
    <>
      <section
        data-paper="registry-categories"
        className="flex flex-col items-center justify-center bg-surface px-6 py-15 text-center md:min-h-[200px]"
      >
        <div className="t-eyebrow mb-4 text-primary">Browse by Category</div>

        <div className="flex flex-wrap justify-center gap-3">
          {registryCategories.map((category) => (
            <Chip
              key={category.id}
              label={category.label}
              active={openId === category.id}
              onClick={() => toggle(category.id)}
            />
          ))}
        </div>
      </section>

      {visible.length === 0 ? (
        <section className="flex min-h-[200px] items-center justify-center bg-surface px-6 pb-15 text-center">
          <p className="max-w-[420px] text-[14px] leading-5 text-muted">
            Tap a category above to see the gifts we&apos;d love as we start
            our new home together.
          </p>
        </section>
      ) : (
        visible.map((category) => (
          <CategoryBand
            key={category.id}
            category={category}
            onGift={handleGift}
          />
        ))
      )}
    </>
  );
}
