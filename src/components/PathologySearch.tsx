"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = { compact?: boolean };

type SearchResult = {
  title: string;
  section: string;
  group: string;
  href: string;
  snippet: string;
  matchType: "entity" | "diagnosis" | "page";
};

type SearchHistoryEntry = {
  query: string;
  count: number;
  lastUsed: number;
};

const SEARCH_HISTORY_KEY = "pathologygps:local-search-history:v1";
const MAX_HISTORY_ITEMS = 50;
const MAX_VISIBLE_HISTORY = 6;

export default function PathologySearch({ compact = false }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [history, setHistory] = useState<SearchHistoryEntry[]>([]);
  const [historyReady, setHistoryReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const hasQuery = query.trim().length > 0;
  const canSearch = query.trim().length >= 2;

  // Search history is read from and written only to this browser's localStorage.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as unknown;
        if (Array.isArray(parsed)) {
          const valid = parsed.filter(
            (item): item is SearchHistoryEntry =>
              item !== null &&
              typeof item === "object" &&
              typeof (item as SearchHistoryEntry).query === "string" &&
              typeof (item as SearchHistoryEntry).count === "number" &&
              typeof (item as SearchHistoryEntry).lastUsed === "number",
          );
          setHistory(valid.slice(0, MAX_HISTORY_ITEMS));
        }
      }
    } catch {
      // If local storage is unavailable or malformed, search still works without history.
    } finally {
      setHistoryReady(true);
    }
  }, []);

  useEffect(() => {
    if (!historyReady) return;
    try {
      window.localStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(history.slice(0, MAX_HISTORY_ITEMS)),
      );
    } catch {
      // Private browsing or storage restrictions must not break search.
    }
  }, [history, historyReady]);

  useEffect(() => {
    if (!canSearch) {
      setResults([]);
      setLoading(false);
      setSearched(false);
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query.trim())}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Search request failed");
        const data = (await response.json()) as { results?: SearchResult[] };
        setResults(data.results ?? []);
        setSearched(true);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          setResults([]);
          setSearched(true);
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 140);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, canSearch]);

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

  useEffect(() => setActiveIndex(0), [query, results.length]);

  function recordSearch(rawQuery: string) {
    const normalized = rawQuery.trim().replace(/\s+/g, " ");
    if (!normalized) return;

    const now = Date.now();
    setHistory((current) => {
      const existing = current.find(
        (item) => item.query.toLowerCase() === normalized.toLowerCase(),
      );
      const updated: SearchHistoryEntry = existing
        ? { ...existing, count: existing.count + 1, lastUsed: now }
        : { query: normalized, count: 1, lastUsed: now };
      return [
        updated,
        ...current.filter(
          (item) => item.query.toLowerCase() !== normalized.toLowerCase(),
        ),
      ]
        .sort((a, b) => b.lastUsed - a.lastUsed)
        .slice(0, MAX_HISTORY_ITEMS);
    });
  }

  function selectHistorySearch(searchTerm: string) {
    setQuery(searchTerm);
    setOpen(true);
    setSearched(false);
  }

  function clearSearchHistory() {
    setHistory([]);
    try {
      window.localStorage.removeItem(SEARCH_HISTORY_KEY);
    } catch {
      // Ignore storage restrictions.
    }
  }

  const recentHistory = [...history]
    .sort((a, b) => b.lastUsed - a.lastUsed)
    .slice(0, MAX_VISIBLE_HISTORY);

  const frequentHistory = [...history]
    .sort((a, b) => b.count - a.count || b.lastUsed - a.lastUsed)
    .slice(0, MAX_VISIBLE_HISTORY);

  const matchingHistory = hasQuery
    ? history
        .filter((item) =>
          item.query.toLowerCase().includes(query.trim().toLowerCase()),
        )
        .sort((a, b) => b.count - a.count || b.lastUsed - a.lastUsed)
        .slice(0, 4)
    : [];

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;
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
      const target = results[activeIndex];
      if (target) {
        event.preventDefault();
        recordSearch(query);
        window.location.href = target.href;
      }
    }
  }

  function renderHistoryButton(item: SearchHistoryEntry) {
    return (
      <button
        key={item.query}
        type="button"
        onClick={() => selectHistorySearch(item.query)}
        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-slate-700 transition hover:bg-sky-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 12a9 9 0 1 0 2.64-6.36L3 8" strokeLinecap="round" />
          <path
            d="M3 3v5h5M12 7v5l3 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="min-w-0 flex-1 truncate">{item.query}</span>
        <span className="shrink-0 text-xs text-slate-400">
          {item.count} {item.count === 1 ? "search" : "searches"}
        </span>
      </button>
    );
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
          aria-expanded={open}
          className={`min-w-0 flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 ${compact ? "text-sm" : "text-base md:text-lg"}`}
        />
        {loading && (
          <span className="text-xs text-slate-400" aria-live="polite">
            Searching…
          </span>
        )}
        {hasQuery && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults([]);
              setOpen(true);
              setSearched(false);
            }}
            aria-label="Clear search"
            className="rounded-full px-2 py-1 text-lg leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        )}
      </div>

      {open && (
        <div
          id="pathology-search-results"
          role="listbox"
          className="absolute z-50 mt-2 max-h-[70vh] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-2xl shadow-slate-950/15"
        >
          {!hasQuery ? (
            history.length ? (
              <div className="p-2">
                <div className="flex items-center justify-between px-2 pb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Recent searches
                  </span>
                  <button
                    type="button"
                    onClick={clearSearchHistory}
                    className="text-xs font-medium text-slate-400 hover:text-rose-600"
                  >
                    Clear history
                  </button>
                </div>
                {recentHistory.map(renderHistoryButton)}
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Frequent searches
                  </div>
                  {frequentHistory.map(renderHistoryButton)}
                </div>
                <p className="px-2 pt-3 text-[10px] leading-4 text-slate-400">
                  Stored only in this browser on this device. Search history is
                  not uploaded or synced.
                </p>
              </div>
            ) : (
              <div className="px-4 py-5">
                <p className="text-sm font-medium text-slate-600">
                  Your search history will appear here.
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  History is stored locally in this browser only.
                </p>
              </div>
            )
          ) : (
            <>
              {matchingHistory.length > 0 && (
                <div className="mb-2 border-b border-slate-100 pb-2">
                  <div className="px-3 pb-1 pt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Past searches
                  </div>
                  {matchingHistory.map(renderHistoryButton)}
                </div>
              )}
              {!canSearch ? (
                <p className="px-4 py-4 text-sm text-slate-500">
                  Type at least 2 letters to see matching diagnoses and topics.
                </p>
              ) : loading && !searched ? (
                <p className="px-4 py-5 text-sm text-slate-500">
                  Searching the pathology library…
                </p>
              ) : results.length ? (
                <>
                  <div className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {results.length} suggested{" "}
                    {results.length === 1 ? "result" : "results"} · use ↑ ↓ and
                    Enter
                  </div>
                  {results.map((item, index) => (
                    <Link
                      key={`${item.href}:${item.title}`}
                      href={item.href}
                      role="option"
                      aria-selected={index === activeIndex}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => {
                        recordSearch(query);
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
                        {item.matchType === "entity" ||
                        item.matchType === "diagnosis"
                          ? " · diagnosis"
                          : " · topic"}
                      </span>
                      {item.snippet && (
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {item.snippet}
                        </span>
                      )}
                    </Link>
                  ))}
                </>
              ) : searched ? (
                <div className="px-4 py-5">
                  <p className="text-sm font-semibold text-slate-700">
                    No matching topic found
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Try a shorter term, abbreviation, gene symbol, or a slightly
                    different spelling.
                  </p>
                </div>
              ) : null}
            </>
          )}
        </div>
      )}
    </div>
  );
}
