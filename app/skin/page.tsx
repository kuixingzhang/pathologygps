"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category = {
  title: string;
  route: string;
  description: string;
  focus: string[];
  countLabel: string;
};

const categories: Category[] = [
  {
    title: "Epidermal Tumors",
    route: "/skin/epidermal-tumors",
    description:
      "A morphology-first guide to epidermal neoplasms, from benign proliferations and precursor lesions to invasive carcinomas.",
    focus: [
      "Keratinocytic differentiation",
      "In situ and invasive lesions",
      "Histologic grading and invasion",
    ],
    countLabel: "Tumor classification",
  },
  {
    title: "Melanocytic Tumors",
    route: "/skin/melanocytic-tumors",
    description:
      "An integrated approach to melanocytic nevi, tumors of intermediate potential, and melanoma, emphasizing architecture, cytology, and molecular classification.",
    focus: [
      "Nevus vs. melanocytoma vs. melanoma",
      "Melanoma subtypes",
      "Ancillary and molecular studies",
    ],
    countLabel: "Diagnostic classification",
  },
  {
    title: "Skin Adnexal Tumors",
    route: "/skin/adnexal-tumors",
    description:
      "A site-oriented reference to follicular, sebaceous, apocrine, and eccrine neoplasms, with emphasis on differentiation and architectural patterns.",
    focus: [
      "Follicular differentiation",
      "Sebaceous differentiation",
      "Apocrine and eccrine differentiation",
    ],
    countLabel: "Adnexal differentiation",
  },
  {
    title: "Cutaneous Soft Tissue Tumors",
    route: "/skin/cutaneous-soft-tissue-tumors",
    description:
      "A practical classification of cutaneous and superficial soft tissue tumors, organized by lineage and biologic behavior.",
    focus: [
      "Fibroblastic and adipocytic tumors",
      "Vascular and perivascular tumors",
      "Intermediate-behavior neoplasms",
    ],
    countLabel: "Lineage and behavior",
  },
  {
    title: "Cutaneous Hematopoietic and Lymphoid Tumors",
    route: "/skin/cutaneous-hematopoietic-lymphoid-tumors",
    description:
      "A clinicopathologic framework for primary and secondary cutaneous hematolymphoid proliferations, integrating distribution, cytology, immunophenotype, and classification.",
    focus: [
      "Cutaneous lymphomas",
      "Leukemic and myeloid infiltrates",
      "Reactive mimics and immunophenotyping",
    ],
    countLabel: "Hematolymphoid classification",
  },
  {
    title: "Cutaneous Genetic Tumor Syndromes",
    route: "/skin/cutaneous-genetic-tumor-syndromes",
    description:
      "A gene-centered reference linking inherited susceptibility, cutaneous findings, associated internal tumors, and diagnostic pathology.",
    focus: [
      "Inheritance and susceptibility genes",
      "Cutaneous and visceral manifestations",
      "Histology and molecular diagnosis",
    ],
    countLabel: "Syndrome-based reference",
  },
  {
    title: "Nail Bed Epithelial Tumors",
    route: "/skin/nail-bed-epithelial-tumors",
    description:
      "A focused guide to epithelial tumors of the nail unit, emphasizing anatomic orientation, longitudinal sampling, and key histologic distinctions.",
    focus: [
      "Nail unit anatomy",
      "Longitudinal sampling and orientation",
      "Onychomatricoma and related lesions",
    ],
    countLabel: "Nail unit pathology",
  },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" strokeLinecap="round" />
    </svg>
  );
}

export default function DermatopathologyPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter((item) =>
      [item.title, item.description, item.countLabel, ...item.focus]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Pathology GPS
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </div>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:py-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Skin Pathology
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Dermatopathology
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              A practical, morphology-first diagnostic reference to cutaneous
              neoplasms and related genetic syndromes. Navigate by tumor
              lineage, anatomic compartment, and biologic behavior.
            </p>
          </div>

          <aside className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Diagnostic approach
            </p>
            <h2 className="mt-3 text-xl font-bold leading-7">
              Start with the site. Define the pattern. Confirm the lineage.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Integrate clinical distribution, tissue architecture, cytology,
              immunophenotype, and selected molecular findings to narrow the
              differential diagnosis.
            </p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Diagnostic library
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
              Browse by category
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Select a section to open its classification, comparison tables,
              and detailed diagnostic profiles.
            </p>
          </div>
          <label className="relative block w-full sm:max-w-sm">
            <span className="sr-only">Search dermatopathology categories</span>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories or topics..."
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            {filtered.length} of {categories.length} sections
          </p>
          <p className="text-xs text-slate-500">American English terminology</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, index) => (
            <Link
              key={item.route}
              href={item.route}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-800">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                  {item.countLabel}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-7 text-slate-950 transition group-hover:text-teal-800">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Key topics
                </p>
                <ul className="space-y-1.5">
                  {item.focus.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-teal-800">
                <span>Explore section</span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <p className="font-semibold text-slate-800">No matching category</p>
            <p className="mt-2 text-sm text-slate-500">
              Try another tumor type, lineage, or diagnostic topic.
            </p>
          </div>
        )}
      </section>

      <footer className="mt-4 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs leading-5 text-slate-500 sm:px-8">
          <p className="font-semibold text-slate-700">
            PathologyGPS · Dermatopathology
          </p>
          <p>
            A morphology-first educational reference. Interpret diagnostic
            findings in conjunction with clinical, radiologic, and molecular
            information as appropriate.
          </p>
        </div>
      </footer>
    </main>
  );
}
