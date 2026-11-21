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

export default function GILiverPancreasDirectoryPage() {
  return (
    <DirectoryPage
      title="GI, Liver & Pancreas"
      subtitle="Gastrointestinal, Hepatobiliary & Pancreatic Pathology"
      intro="Organ-based directory of gastrointestinal, hepatobiliary, and pancreatic tumors, with dedicated sections for mesenchymal tumors, neuroendocrine neoplasms, and hereditary tumor syndromes."
      groups={[
        {
          title: "Gastrointestinal Tract",
          items: [
            {
              title: "Esophageal Tumors",
              href: "/gi-liver-pancreas/gi/esophageal-tumors",
            },
            {
              title: "Gastric Tumors",
              href: "/gi-liver-pancreas/gi/gastric-tumors",
            },
            {
              title: "Small Intestine Tumors",
              href: "/gi-liver-pancreas/gi/small-intestine-tumors",
            },
            {
              title: "Colorectal Tumors",
              href: "/gi-liver-pancreas/gi/colorectal-tumors",
            },
            {
              title: "Appendiceal Tumors",
              href: "/gi-liver-pancreas/gi/appendiceal-tumors",
            },
            {
              title: "Anal Canal Tumors",
              href: "/gi-liver-pancreas/gi/anal-canal-tumors",
            },
          ],
        },
        {
          title: "Hepatobiliary System",
          items: [
            { title: "Liver Tumors", href: "/gi-liver-pancreas/liver-tumors" },
            {
              title: "Gallbladder and Extrahepatic Bile Duct Tumors",
              href: "/gi-liver-pancreas/gallbladder-extrahepatic-bile-duct-tumors",
            },
          ],
        },
        {
          title: "Pancreas",
          items: [
            {
              title: "Pancreatic Lesions",
              href: "/gi-liver-pancreas/pancreatic-lesions",
            },
          ],
        },
        {
          title: "Cross-Organ Tumor Categories",
          items: [
            {
              title: "Mesenchymal Tumors",
              href: "/gi-liver-pancreas/mesenchymal-tumors",
            },
            {
              title: "Neuroendocrine Neoplasms",
              href: "/gi-liver-pancreas/neuroendocrine-neoplasms",
            },
            {
              title: "Genetic Tumor Syndromes",
              href: "/gi-liver-pancreas/genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
