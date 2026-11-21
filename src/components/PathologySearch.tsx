"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { searchPathology } from "../../lib/pathology-index";

type Props = { compact?: boolean };

export default function PathologySearch({ compact = false }: Props) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => searchPathology(query, 10), [query]);
  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node))
        setOpen(false);
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => setActiveIndex(0), [query]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!hasQuery || !results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => (current + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex(
        (current) => (current - 1 + results.length) % results.length,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const target = results[activeIndex];
      if (target && typeof window !== "undefined")
        window.location.href = target.href;
    }
  }

  return (
    <div ref={rootRef} className="relative w-full">
      <label className="sr-only" htmlFor="pathology-global-search">
        Search PathologyGPS
      </label>
      <div
        className={`flex items-center gap-3 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-950/10 transition focus-within:border-cyan-300 focus-within:ring-4 focus-within:ring-cyan-100 ${compact ? "px-4 py-3" : "px-5 py-4 md:px-6 md:py-5"}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="10.8" cy="10.8" r="6.8" />
          <path d="m16 16 4.2 4.2" strokeLinecap="round" />
        </svg>
        <input
          id="pathology-global-search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search any diagnosis, morphology, stain, gene, or molecular finding..."
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="pathology-search-results"
          aria-expanded={open && hasQuery}
          className={`min-w-0 flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 ${compact ? "text-sm" : "text-base md:text-lg"}`}
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className="rounded-full px-2 py-1 text-lg leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        )}
      </div>

      {open && hasQuery && (
        <div
          id="pathology-search-results"
          role="listbox"
          className="absolute z-50 mt-2 max-h-[70vh] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/15"
        >
          {results.length ? (
            <>
              <div className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {results.length} matching{" "}
                {results.length === 1 ? "topic" : "topics"} · use ↑ ↓ and Enter
              </div>
              {results.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => {
                    setQuery("");
                    setOpen(false);
                  }}
                  className={`block rounded-xl px-4 py-3 transition ${index === activeIndex ? "bg-sky-50" : "hover:bg-slate-50"}`}
                >
                  <span className="block text-sm font-semibold text-slate-900">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500">
                    {item.section} · {item.group}
                  </span>
                </Link>
              ))}
            </>
          ) : (
            <div className="px-4 py-5">
              <p className="text-sm font-semibold text-slate-700">
                No matching topic found
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Try a shorter term, a common abbreviation, a gene symbol, or an
                alternative spelling.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
