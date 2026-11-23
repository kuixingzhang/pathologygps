import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

const specialties = [
  { title: "Breast", href: "/breast" },
  { title: "Central Nervous System", href: "/cns" },
  { title: "Digestive System", href: "/digestive-system" },
  { title: "Endocrine", href: "/endocrine" },
  { title: "Eye and Orbit", href: "/eye-orbit" },
  { title: "Female Genital", href: "/female-genital" },
  { title: "Genitourinary", href: "/genitourinary" },
  { title: "Head & Neck", href: "/head-and-neck" },
  { title: "Hematopathology", href: "/hematopathology" },
  { title: "Pediatric Pathology", href: "/pediatric-pathology" },
  { title: "Skin", href: "/skin" },
  { title: "Soft Tissue and Bone", href: "/soft-tissue-and-bone" },
  { title: "Thoracic", href: "/thoracic" },
  { title: "Genetic Tumor Syndromes", href: "/genetic-tumor-syndromes" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#243B5A]">
      <section className="bg-[#E9EEF5] px-5 pb-12 pt-9 md:px-8 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#425873]">
            Morphology · Immunohistochemistry · Molecular
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#172B4D] md:text-6xl">
            Pathology GPS
          </h1>
          <div className="mx-auto mt-8 max-w-4xl text-left">
            <PathologySearch />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-9 md:px-8 md:pb-14 md:pt-11">
        <div className="mb-5">
          <h2 className="text-xl font-bold tracking-tight text-[#172B4D] md:text-2xl">
            Browse by Organ System
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {specialties.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-[72px] items-center rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#9BAFC8] hover:bg-[#F0F4F9] hover:shadow-md"
            >
              <span className="text-sm font-semibold leading-5 text-[#344B68] md:text-base">
                {item.title}
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
