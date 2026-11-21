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

export default function GenitourinaryDirectoryPage() {
  return (
    <DirectoryPage
      title="Genitourinary Pathology"
      subtitle="Renal, Urinary Tract, Prostate & Male Genital Pathology"
      intro="An organ-based diagnostic directory covering renal tumors, urinary tract neoplasms, prostate, testis and adnexa, seminal vesicle, penis and scrotum, and hereditary genitourinary tumor syndromes."
      groups={[
        {
          title: "Kidney",
          items: [
            {
              title: "Renal Tumors",
              href: "/genitourinary/renal-tumors",
              description:
                "Renal epithelial and other primary renal neoplasms.",
            },
          ],
        },
        {
          title: "Urinary Tract",
          items: [
            {
              title: "Urothelial Tumors",
              href: "/genitourinary/urinary-tract/urothelial-tumors",
              description:
                "Urothelial lesions of the renal pelvis, ureter, bladder, and urethra.",
            },
            {
              title: "Non-Urothelial Neoplasms",
              href: "/genitourinary/urinary-tract/non-urothelial-neoplasms",
              description:
                "Primary and secondary non-urothelial tumors of the urinary tract.",
            },
          ],
        },
        {
          title: "Prostate and Seminal Vesicle",
          items: [
            {
              title: "Prostatic Tumors",
              href: "/genitourinary/prostatic-tumors",
            },
            {
              title: "Seminal Vesicle Tumors",
              href: "/genitourinary/seminal-vesicle-tumors",
            },
          ],
        },
        {
          title: "Testis and Testicular Adnexa",
          items: [
            {
              title: "Testis Tumors",
              href: "/genitourinary/testis-tumors",
            },
            {
              title: "Testicular Adnexa Tumors",
              href: "/genitourinary/testicular-adnexa-tumors",
            },
          ],
        },
        {
          title: "Penis and Scrotum",
          items: [
            {
              title: "Penis and Scrotum Tumors",
              href: "/genitourinary/penis-scrotum-tumors",
            },
          ],
        },
        {
          title: "Cross-Organ Categories",
          items: [
            {
              title: "Genitourinary Genetic Tumor Syndromes",
              href: "/genitourinary/gu-genetic-tumor-syndromes",
              description:
                "Hereditary renal, urinary tract, adrenal, and male genital tumor predisposition syndromes.",
            },
          ],
        },
      ]}
    />
  );
}
