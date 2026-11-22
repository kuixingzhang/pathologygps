"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9+.-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(value: string): string {
  return normalize(value).replace(/\s+/g, "-").slice(0, 90);
}

function visible(element: HTMLElement): boolean {
  if (!element.isConnected) return false;
  const style = window.getComputedStyle(element);
  return style.display !== "none" && style.visibility !== "hidden" && element.getClientRects().length > 0;
}

function titleMatches(text: string, wanted: string): boolean {
  const value = normalize(text);
  return value === wanted || (value.startsWith(`${wanted} `) && value.length <= wanted.length + 45);
}

function findTarget(wanted: string): HTMLElement | null {
  const marked = Array.from(document.querySelectorAll<HTMLElement>("[data-search-entity]"))
    .filter((el) => visible(el) && titleMatches(el.dataset.searchEntity || "", wanted));
  if (marked.length) return marked.sort((a, b) => (a.innerText || "").length - (b.innerText || "").length)[0];

  const headings = Array.from(document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main h4, main h5, main h6, article h1, article h2, article h3, article h4"))
    .filter((el) => visible(el) && titleMatches(el.innerText || el.textContent || "", wanted));
  if (headings.length) return headings.sort((a, b) => (a.innerText || "").length - (b.innerText || "").length)[0];

  // Fallback for pages that render diagnosis titles as div/span rather than headings.
  const candidates = Array.from(document.querySelectorAll<HTMLElement>("main *"))
    .filter((el) => {
      if (!visible(el) || el.children.length > 2) return false;
      const text = (el.innerText || el.textContent || "").trim();
      return text.length <= 180 && titleMatches(text, wanted);
    });
  return candidates.sort((a, b) => (a.innerText || "").length - (b.innerText || "").length)[0] || null;
}

function findCard(title: HTMLElement): HTMLElement {
  const semantic = title.closest<HTMLElement>("[data-entity-card], article, li, [role='listitem']");
  if (semantic) return semantic;

  let current = title;
  for (let i = 0; i < 5 && current.parentElement; i += 1) {
    const parent = current.parentElement;
    if (parent === document.body || parent === document.documentElement) break;
    if ((parent.innerText || "").length > 4500) break;
    current = parent;
  }
  return current;
}

function expandCard(card: HTMLElement): boolean {
  const controls = Array.from(card.querySelectorAll<HTMLButtonElement>("button,[role='button']"));
  const collapsed = controls.find((control) => {
    const label = normalize(`${control.innerText || ""} ${control.getAttribute("aria-label") || ""}`);
    return control.getAttribute("aria-expanded") === "false" || /\b(view|show|expand|open)\b/.test(label);
  });
  if (!collapsed) return false;
  collapsed.click();
  return true;
}

export default function SearchTargetLocator() {
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawTarget = params.get("gpsTarget");
    if (!rawTarget) return;

    const wanted = normalize(rawTarget);
    if (!wanted) return;

    let attempts = 0;
    let timer: number | undefined;
    let scrollTimer: number | undefined;
    let finished = false;

    const locate = () => {
      if (finished) return;
      attempts += 1;
      const title = findTarget(wanted);

      if (title) {
        const card = findCard(title);
        const didExpand = expandCard(card);
        if (didExpand) {
          // Let React render the expanded diagnostic profile before scrolling.
          scrollTimer = window.setTimeout(() => scrollToTarget(card), 220);
        } else {
          scrollToTarget(card);
        }
        finished = true;
        return;
      }

      if (attempts < 60) timer = window.setTimeout(locate, 250);
    };

    const scrollToTarget = (card: HTMLElement) => {
      const anchorId = `gps-${slugify(rawTarget)}`;
      card.id = anchorId;
      card.setAttribute("data-search-entity", rawTarget);
      card.classList.add("gps-search-target");
      card.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => card.classList.remove("gps-search-target"), 4200);

      const nextParams = new URLSearchParams(window.location.search);
      nextParams.delete("gpsTarget");
      const nextUrl = window.location.pathname + (nextParams.toString() ? `?${nextParams}` : "") + `#${anchorId}`;
      window.history.replaceState({}, "", nextUrl);
    };

    // Next.js client navigation changes the pathname without remounting the root layout.
    // This effect depends on usePathname so the target lookup runs after each route change.
    timer = window.setTimeout(locate, 180);

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      if (scrollTimer !== undefined) window.clearTimeout(scrollTimer);
    };
  }, [pathname]);

  return null;
}
