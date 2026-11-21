import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

type Item = { title: string; href: string; description?: string };
type Group = { title: string; items: Item[] };

function DirectoryPage({
  title,
  subtitle,
  intro,
  groups,
}: {
  title: string;
  subtitle: string;
  intro: string;
  groups: Group[];
}) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-bold">
            Pathology GPS
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <nav className="mb-5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          / {title}
        </nav>

        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            {subtitle}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{intro}</p>
        </div>

        <div className="mt-8 max-w-3xl">
          <PathologySearch compact />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <section
              key={group.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
                <h2 className="text-base font-extrabold tracking-tight text-slate-950">
                  {group.title}
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 px-5 py-3 hover:bg-slate-50"
                  >
                    <span>
                      <span className="block text-sm font-medium leading-5 text-slate-700 group-hover:text-teal-800">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {item.description}
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-teal-700"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-400">
          PathologyGPS · Diagnostic Navigation System
        </footer>
      </div>
    </main>
  );
}

export default function CNSDirectoryPage() {
  return (
    <DirectoryPage
      title="Central Nervous System"
      subtitle="CNS Pathology"
      intro="An organized diagnostic directory of central nervous system tumors, including glial, neuronal, embryonal, meningeal, mesenchymal, cranial, paraspinal, sellar, and genetically associated neoplasms."
      groups={[
        {
          title: "Glial, Neuronal and Embryonal Tumors",
          items: [
            {
              title: "Gliomas, Glioneuronal and Neuronal Tumors",
              href: "/cns/gliomas-glioneuronal-neuronal-tumors",
              description:
                "Diffuse gliomas, circumscribed astrocytic tumors, glioneuronal tumors, and neuronal tumors.",
            },
            {
              title: "Choroid Plexus, Embryonal and Pineal Tumors",
              href: "/cns/choroid-plexus-embryonal-pineal-tumors",
              description:
                "Choroid plexus tumors, embryonal neoplasms, and pineal region tumors.",
            },
          ],
        },
        {
          title: "Meningeal, Mesenchymal and Regional Tumors",
          items: [
            {
              title: "Meningioma and Mesenchymal Tumors",
              href: "/cns/meningioma-mesenchymal-tumors",
              description:
                "Meningioma classification and grading, chordoma, and other CNS mesenchymal tumors.",
            },
            {
              title: "Cranial, Paraspinal and Sellar Tumors",
              href: "/cns/cranial-paraspinal-sellar-tumors",
              description:
                "Tumors arising in cranial nerves, paraspinal structures, and the sellar region.",
            },
          ],
        },
        {
          title: "Hereditary and Genetic Tumor Predisposition",
          items: [
            {
              title: "CNS Genetic Tumor Syndromes",
              href: "/cns/cns-genetic-tumor-syndromes",
              description:
                "Inherited tumor predisposition syndromes and their characteristic CNS manifestations.",
            },
          ],
        },
      ]}
    />
  );
}
