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
                      className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-teal-700"
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

export default function OphthalmicPathologyDirectoryPage() {
  return (
    <DirectoryPage
      title="Ophthalmic Pathology"
      subtitle="Ophthalmic Pathology"
      intro="An anatomic diagnostic directory covering tumors and tumor-like lesions of the ocular surface, eyelid, globe, lacrimal gland and drainage system, and orbit, together with hereditary tumor predisposition syndromes relevant to ophthalmic pathology."
      groups={[
        {
          title: "Ocular Surface",
          items: [
            {
              title: "Conjunctival and Caruncular Tumors",
              href: "/ophthalmic-pathology/conjunctiva-caruncle-tumors",
              description:
                "Epithelial, melanocytic, lymphoid, and other lesions of the conjunctiva and caruncle.",
            },
          ],
        },
        {
          title: "Eyelid",
          items: [
            {
              title: "Eyelid Tumors",
              href: "/ophthalmic-pathology/eyelid-tumors",
              description:
                "Cystic, epithelial, adnexal, sebaceous, and melanocytic lesions of the eyelid.",
            },
          ],
        },
        {
          title: "Globe",
          items: [
            {
              title: "Eyeball Tumors",
              href: "/ophthalmic-pathology/eyeball-tumors",
              description:
                "Tumors of the uveal tract, retina and neuroepithelium, and optic disc and optic nerve.",
            },
          ],
        },
        {
          title: "Lacrimal Gland and Drainage System",
          items: [
            {
              title: "Lacrimal Gland and Drainage System Tumors",
              href: "/ophthalmic-pathology/lacrimal-gland-and-drainage-tumors",
              description:
                "Epithelial and other neoplasms arising in the lacrimal gland and lacrimal drainage apparatus.",
            },
          ],
        },
        {
          title: "Orbit",
          items: [
            {
              title: "Orbital Tumors and Tumor-Like Lesions",
              href: "/ophthalmic-pathology/orbital-tumors",
              description:
                "Developmental lesions, vascular malformations, hamartomas, germ cell tumors, and melanocytic tumors of the orbit.",
            },
          ],
        },
        {
          title: "Hereditary and Genetic Conditions",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/ophthalmic-pathology/genetic-tumor-syndromes",
              description:
                "Inherited and mosaic syndromes associated with ocular and orbital tumors or characteristic ophthalmic lesions.",
            },
          ],
        },
      ]}
    />
  );
}
