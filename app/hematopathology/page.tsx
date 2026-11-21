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
                    <span className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-teal-700">
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

export default function HematopathologyDirectoryPage() {
  return (
    <DirectoryPage
      title="Hematopathology"
      subtitle="Hematopathology Diagnostic Reference"
      intro="An organized diagnostic directory covering myeloid neoplasms, lymphoid neoplasms, plasma cell disorders, histiocytic and dendritic cell neoplasms, and the genetic syndromes associated with hematolymphoid tumors. Use the search tool to navigate diagnostic entities, morphologic patterns, immunophenotypes, and molecular findings."
      groups={[
        {
          title: "Myeloid Neoplasms",
          items: [
            {
              title: "Acute Myeloid Leukemia",
              href: "/hematopathology/aml",
              description:
                "Classification, defining genetic abnormalities, morphology, immunophenotype, and diagnostic workup.",
            },
            {
              title: "Myeloid Precursors, MPN, and MDS",
              href: "/hematopathology/myeloid-precursors-mpn-mds",
              description:
                "Myeloid precursor lesions, myeloproliferative neoplasms, and myelodysplastic neoplasms.",
            },
          ],
        },
        {
          title: "B-Cell Lymphomas and Lymphoid Neoplasms",
          items: [
            {
              title: "Large B-Cell Lymphomas",
              href: "/hematopathology/lymphoma/large-b-cell-lymphoma",
              description:
                "Large B-cell lymphoma entities and their key morphologic, immunophenotypic, and molecular distinctions.",
            },
            {
              title: "Mature B-Cell Small Lymphocytic Neoplasms",
              href: "/hematopathology/lymphoma/mature-b-cell-small-lymphocytic-neoplasms",
              description:
                "Small B-cell neoplasms with an integrated approach to morphology, flow cytometry, and IHC.",
            },
            {
              title: "Precursor B- and T-Cell Neoplasms",
              href: "/hematopathology/lymphoma/precursor-b-and-t-neoplasms",
              description:
                "B- and T-lymphoblastic leukemia/lymphoma, genetic subgroups, and lineage assignment.",
            },
            {
              title: "Special Lymphomas",
              href: "/hematopathology/lymphoma/special-lymphomas",
              description:
                "Selected virus-associated, immune deficiency/dysregulation-associated, and Hodgkin lymphoid neoplasms.",
            },
            {
              title: "Tumor-Like Lymphocytic Lesions",
              href: "/hematopathology/lymphoma/tumor-like-lymphocytic-lesions",
              description:
                "Reactive and non-neoplastic lymphoid proliferations that may mimic lymphoma.",
            },
          ],
        },
        {
          title: "T-Cell and NK-Cell Neoplasms",
          items: [
            {
              title: "Mature T- and NK-Cell Neoplasms",
              href: "/hematopathology/lymphoma/mature-t-and-nk-cell-neoplasms",
              description:
                "Mature T-cell and NK-cell lymphomas, including anaplastic large cell, nodal T-follicular helper, and cutaneous T-cell entities.",
            },
          ],
        },
        {
          title: "Plasma Cell Neoplasms and Related Disorders",
          items: [
            {
              title: "Plasma Cell Neoplasms",
              href: "/hematopathology/plasma-cell-neoplasms",
              description:
                "Plasma cell myeloma, plasmacytoma, monoclonal gammopathies, paraprotein-associated diseases, and deposition disorders.",
            },
          ],
        },
        {
          title: "Histiocytic, Dendritic, and Stromal Neoplasms",
          items: [
            {
              title: "Histiocytic and Dendritic Cell Neoplasms",
              href: "/hematopathology/histiocytic-dendritic-cell-neoplasms",
              description:
                "Histiocytic and dendritic cell proliferations and neoplasms with lineage-oriented diagnostic panels.",
            },
            {
              title: "Stroma-Derived Neoplasms of Lymphoid Tissues",
              href: "/hematopathology/stroma-derived-neoplasms-lymphoid",
              description:
                "Mesenchymal dendritic cell neoplasms, myofibroblastic tumors, and splenic vascular-stromal tumors.",
            },
          ],
        },
        {
          title: "Genetic Predisposition",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/hematopathology/genetic-tumor-syndromes",
              description:
                "Inherited syndromes and germline predisposition relevant to hematolymphoid neoplasms.",
            },
          ],
        },
      ]}
    />
  );
}
