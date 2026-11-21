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
                    className="group flex items-center justify-between gap-4 px-5 py-2.5 hover:bg-slate-50"
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
                    <span className="shrink-0 text-slate-400 group-hover:translate-x-1 group-hover:text-teal-700">
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

export default function HeadAndNeckDirectoryPage() {
  return (
    <DirectoryPage
      title="Head and Neck"
      subtitle="Head and Neck Pathology"
      intro="An organized diagnostic directory covering tumors and tumor-like lesions of the oral cavity and oropharynx, salivary glands, ear, sinonasal tract, skull base, pharynx, larynx, trachea, and maxillofacial region, with a dedicated section for hereditary tumor syndromes."
      groups={[
        {
          title: "Oral Cavity and Oropharynx",
          items: [
            {
              title: "Oral Cavity and Oropharyngeal Tumors",
              href: "/head-and-neck/oral-cavity-oropharyngeal-tumors",
              description:
                "Mucosal epithelial lesions, odontogenic mimics, and malignant tumors",
            },
          ],
        },
        {
          title: "Salivary Glands",
          items: [
            {
              title: "Salivary Gland Tumors",
              href: "/head-and-neck/salivary-gland-tumors",
              description: "Major and minor salivary gland neoplasms",
            },
          ],
        },
        {
          title: "Ear",
          items: [
            {
              title: "Ear Tumors",
              href: "/head-and-neck/ear-tumors",
              description: "External ear, middle ear, and inner ear lesions",
            },
          ],
        },
        {
          title: "Sinonasal Tract and Skull Base",
          items: [
            {
              title: "Nasal, Paranasal Sinus, and Skull Base Tumors",
              href: "/head-and-neck/nasal-paranasal-skull-base-tumors",
              description: "Sinonasal tract and skull base neoplasms",
            },
          ],
        },
        {
          title: "Pharynx, Larynx, Trachea, and Parapharyngeal Space",
          items: [
            {
              title:
                "Pharyngeal, Laryngeal, Tracheal, and Parapharyngeal Tumors",
              href: "/head-and-neck/pharyngeal-laryngeal-tracheal-parapharyngeal-tumors",
              description:
                "Tumors across the upper aerodigestive tract and parapharyngeal space",
            },
          ],
        },
        {
          title: "Odontogenic and Maxillofacial Region",
          items: [
            {
              title: "Odontogenic and Maxillofacial Tumors",
              href: "/head-and-neck/odontogenic-maxillofacial-tumors",
              description:
                "Jaw cysts, odontogenic tumors, and maxillofacial bone lesions",
            },
          ],
        },
        {
          title: "Cross-Category",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/head-and-neck/genetic-tumor-syndromes",
              description:
                "Hereditary syndromes associated with head and neck tumors",
            },
          ],
        },
      ]}
    />
  );
}
