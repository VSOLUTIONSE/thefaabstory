"use client";

import { useEffect, useState } from "react";
import { registryCategories, type RegistryCategory, type RegistryGroup } from "@/lib/data";

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

function GroupModal({
  group,
  onClose,
  onGift,
}: {
  group: RegistryGroup;
  onClose: () => void;
  onGift: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={group.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/60"
      />

      <div className="relative z-10 flex max-h-[85vh] w-full max-w-[480px] flex-col overflow-y-auto bg-white">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-surface/90 text-ink transition-colors duration-150 hover:bg-surface"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4.5 w-4.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={group.image}
          alt={group.title}
          className="h-[200px] w-full shrink-0 object-cover"
        />

        <div className="flex flex-col gap-4 p-6">
          <h3 className="font-display text-[22px] leading-7 text-ink">
            {group.title}
          </h3>

          <p className="text-[14px] leading-6 text-muted">
            {group.description ?? group.fundDesc}
          </p>

          {group.items && (
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[13px] leading-5 text-muted"
                >
                  <span aria-hidden="true" className="text-primary">
                    &middot;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {group.price && (
            <div className="mt-1 flex items-center justify-between border-t border-silver-line pt-4">
              <span className="text-[10px] leading-3 tracking-[2px] text-muted uppercase">
                Price
              </span>
              <span className="font-display text-[18px] leading-6 text-primary">
                {group.price}
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={onGift}
            className="btn btn-solid mt-1 w-fit cursor-pointer"
          >
            Gift Us
          </button>
        </div>
      </div>
    </div>
  );
}

function CategoryBand({
  category,
  onSelect,
}: {
  category: RegistryCategory;
  onSelect: (group: RegistryGroup) => void;
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
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => onSelect(group)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(group);
              }
            }}
            className={`flex cursor-pointer flex-col overflow-hidden border transition-colors duration-200 ${
              dark
                ? "border-silver-border bg-surface-dim hover:border-silver-line"
                : "border-silver-line bg-white hover:border-primary"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={group.image}
              alt={group.title}
              loading="lazy"
              className="h-[180px] w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-5">
              <h3
                className={`mb-3 font-display text-[18px] leading-[22px] ${
                  dark ? "text-on-primary" : "text-ink"
                }`}
              >
                {group.title}
              </h3>

              {group.fundDesc && (
                <p
                  className={`text-[13px] leading-5 ${
                    dark ? "text-silver-soft" : "text-muted"
                  }`}
                >
                  {group.fundDesc}
                </p>
              )}

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
                        className={
                          dark ? "text-silver" : "text-primary"
                        }
                      >
                        &middot;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
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
 */
export function RegistryExplorer() {
  const [openId, setOpenId] = useState<string | null>(
    registryCategories[0].id
  );
  const [activeGroup, setActiveGroup] = useState<RegistryGroup | null>(null);

  const handleGift = () => {
    setActiveGroup(null);
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
            onSelect={setActiveGroup}
          />
        ))
      )}

      {activeGroup && (
        <GroupModal
          group={activeGroup}
          onClose={() => setActiveGroup(null)}
          onGift={handleGift}
        />
      )}
    </>
  );
}
