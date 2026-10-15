"use client";

import { useEffect, useState } from "react";
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

const GIFT_DETAILS = [
  { label: "Account Name", value: "Gabriel Christiana Abisoye" },
  { label: "Account Number", value: "2286093563" },
  { label: "Bank", value: "Zenith Bank" },
];

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GiftModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);

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

  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(label);
    window.setTimeout(() => {
      setCopied((current) => (current === label ? null : current));
    }, 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gift Us — account details"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/60"
      />

      <div className="relative z-10 flex max-h-[85vh] w-full max-w-[440px] flex-col overflow-y-auto bg-white">
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

        <div className="flex flex-col gap-5 p-6">
          <div>
            <div className="t-eyebrow mb-3 text-primary">Gift Us</div>
            <h3 className="font-display text-[22px] leading-7 text-ink">
              Send your gift
            </h3>
            <p className="mt-2 text-[14px] leading-6 text-muted">
              Bank transfer details — tap the copy icon to copy any field.
            </p>
          </div>

          <div className="flex flex-col border-t border-silver-line">
            {GIFT_DETAILS.map((row) => {
              const isCopied = copied === row.label;
              return (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-silver-line py-3.5"
                >
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="text-[10px] leading-3 tracking-[2px] text-muted uppercase">
                      {row.label}
                    </span>
                    <span className="truncate font-display text-[16px] leading-5 text-ink">
                      {row.value}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(row.label, row.value)}
                    aria-label={`Copy ${row.label}`}
                    title="Copy"
                    className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-colors duration-150 ${
                      isCopied
                        ? "border-primary bg-primary text-on-primary"
                        : "border-silver-line text-primary hover:border-primary"
                    }`}
                  >
                    {isCopied ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              );
            })}
          </div>

          <a
            href="https://paystack.shop/pay/thefaabstory"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid w-full justify-center"
          >
            Pay Online
          </a>
        </div>
      </div>
    </div>
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
 * Each card shows description, items, price, and a Gift Us button directly.
 * "Gift Us" opens a popup with bank account details (copy per field) and a
 * Pay Online link.
 */
export function RegistryExplorer() {
  const [openId, setOpenId] = useState<string | null>(
    registryCategories[0].id
  );
  const [giftOpen, setGiftOpen] = useState(false);

  const handleGift = () => setGiftOpen(true);

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
      {giftOpen && <GiftModal onClose={() => setGiftOpen(false)} />}
    </>
  );
}
