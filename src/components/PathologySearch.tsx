"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { searchPathology } from "../../lib/pathology-index";

export default function PathologySearch({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchPathology(query), [query]);

  return (
    <div className="relative w-full">
      <label className="sr-only" htmlFor="pathology-global-search">
        Search PathologyGPS
      </label>
      <input
        id="pathology-global-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search diagnosis, morphology, stain, gene..."
        autoComplete="off"
        className={`w-full rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-100 ${compact ? "px-5 py-3 text-sm" : "px-6 py-5 text-lg"}`}
      />
      {query.trim() && (
        <div className="absolute z-30 mt-2 max-h-[26rem] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          {results.length ? (
            results.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setQuery("")}
                className="block rounded-xl px-4 py-3 hover:bg-slate-50"
              >
                <span className="block text-sm font-semibold text-slate-900">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {item.section} Â· {item.group}
                </span>
              </Link>
            ))
          ) : (
            <p className="px-4 py-5 text-sm text-slate-500">
              No matching topic found. Try a diagnosis, tumor type, or gene
              symbol.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

