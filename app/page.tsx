import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

const specialties = [
  { title: "Bone & Soft Tissue", href: "/bone-and-soft-tissue" },
  { title: "Breast", href: "/breast" },
  { title: "Central Nervous System", href: "/cns" },
  { title: "Dermatopathology", href: "/skin" },
  { title: "Endocrine", href: "/endocrine" },
  { title: "Female Genital", href: "/female-genital" },
  { title: "Genitourinary", href: "/genitourinary" },
  { title: "GI, Liver & Pancreas", href: "/gi-liver-pancreas" },
  { title: "Head & Neck", href: "/head-and-neck" },
  { title: "Hematopathology", href: "/hematopathology" },
  { title: "Eye and Orbit", href: "/ophthalmic-pathology" },
  { title: "Pediatric", href: "/pediatric-pathology" },
  { title: "Thoracic", href: "/thoracic" },
  { title: "Genetic Tumor Syndromes", href: "/genetic-tumor-syndromes" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-white/15 bg-[#173B63] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-5 py-3 md:px-8">
          <span className="text-xs font-medium tracking-wide text-blue-100">
            Diagnostic Navigation System
          </span>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#173B63] via-[#1E4A73] to-[#285B7D] px-5 pb-12 pt-9 text-white md:px-8 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Morphology · Immunohistochemistry · Molecular Pathology
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Pathology GPS
          </h1>
          <div className="mx-auto mt-8 max-w-4xl text-left">
            <PathologySearch />
          </div>
          <p className="mt-3 text-xs text-blue-100/85 md:text-sm">
            Search diagnoses, morphology, immunohistochemistry, molecular
            markers, genes, and more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-9 md:px-8 md:pb-14 md:pt-11">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
              Knowledge Library
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Browse by Organ System
            </h2>
          </div>
          <p className="hidden text-xs text-slate-500 sm:block">
            Select an area to explore.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {specialties.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-[72px] items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:shadow-md"
            >
              <span className="text-sm font-semibold leading-5 text-slate-700 group-hover:text-sky-900 md:text-base">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-base text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-700"
              >
                →
              </span>
            </Link>
          ))}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-5 text-xs text-slate-500">
          PathologyGPS · Diagnostic Excellence
        </footer>
      </section>
    </main>
  );
}
