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
  { title: "Eye and orbit", href: "/ophthalmic-pathology" },
  { title: "Pediatric", href: "/pediatric-pathology" },
  { title: "Thoracic", href: "/thoracic" },
  { title: "Genetic Tumor Syndromes", href: "/genetic-tumor-syndromes" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Pathology GPS
          </Link>
          <span className="text-xs font-medium text-slate-500">
            Diagnostic Navigation System
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:px-8 md:pt-10">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Pathology GPS
          </h1>
          <p className="mt-2 text-base text-slate-500 md:text-lg">
            Diagnostic Navigation System
          </p>
          <div className="mt-6 text-left">
            <PathologySearch />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Search by diagnosis, morphology, immunohistochemistry, molecular
            marker, or gene.
          </p>
        </section>

        <section className="mt-9">
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Knowledge Library
              </p>
              <h2 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
                Browse by Organ System
              </h2>
            </div>
            <p className="hidden text-xs text-slate-500 sm:block">
              Select an organ system to explore.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {specialties.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[66px] items-center justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:border-teal-300 hover:bg-teal-50 hover:shadow-sm"
              >
                <span className="text-sm font-semibold leading-5 text-slate-700 group-hover:text-teal-800 md:text-base">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-sm text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-teal-700"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-400">
          PathologyGPS · Diagnostic Excellence
        </footer>
      </div>
    </main>
  );
}
