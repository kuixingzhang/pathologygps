import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

type Item = { title: string; href: string; description: string };
type Group = { title: string; items: Item[] };

const groups: Group[] = [
  {
    title: "Genome Integrity and Cell Fate",
    items: [
      {
        title: "Cell-Cycle and Apoptosis Pathways",
        href: "/genetic-tumor-syndromes/cell-cycle-and-apoptosis-pathways",
        description:
          "Tumor-suppressor checkpoints, cell-cycle control, and programmed cell death, including TP53, RB1, CDKN2A, and FAS-related disorders.",
      },
      {
        title: "DNA Repair and Genomic Stability",
        href: "/genetic-tumor-syndromes/dna-repair-and-genomic-stability",
        description:
          "Inherited defects in DNA damage recognition and repair, homologous recombination, mismatch repair, and chromosome stability.",
      },
      {
        title: "Telomere Maintenance",
        href: "/genetic-tumor-syndromes/telomere-maintenance",
        description:
          "Telomere biology disorders and shelterin-related predisposition, with emphasis on marrow failure, pulmonary disease, and malignancy risk.",
      },
    ],
  },
  {
    title: "Gene Expression and RNA–Protein Regulation",
    items: [
      {
        title: "Epigenetic Drivers and Chromatin Remodeling",
        href: "/genetic-tumor-syndromes/epigenetic-drivers-and-chromatin-remodeling",
        description:
          "Disorders involving genomic imprinting, chromatin remodeling complexes, histone modification, and epigenetic regulation.",
      },
      {
        title: "RNA Regulation",
        href: "/genetic-tumor-syndromes/rna-regulation",
        description:
          "MicroRNA processing and RNA splicing disorders, including DICER1, DROSHA, DGCR8, and SF3B2-associated conditions.",
      },
      {
        title: "Protein Regulation",
        href: "/genetic-tumor-syndromes/protein-regulation",
        description:
          "Ubiquitin pathway and deubiquitination defects, with a focus on BAP1-related tumor predisposition syndrome.",
      },
    ],
  },
  {
    title: "Growth Signaling and Receptor Pathways",
    items: [
      {
        title: "Growth-Factor Receptor and Related Pathways",
        href: "/genetic-tumor-syndromes/growth-factor-receptor-and-related",
        description:
          "Inherited and mosaic alterations affecting growth-factor receptors and downstream signaling pathways that regulate proliferation and tissue growth.",
      },
    ],
  },
  {
    title: "Cellular Metabolism and Stress Responses",
    items: [
      {
        title: "Oxidative Stress Response and Metabolism",
        href: "/genetic-tumor-syndromes/oxidative-stress-response-and-metabolism",
        description:
          "Tumor predisposition associated with hypoxia signaling, mitochondrial metabolism, oncometabolites, and metabolic enzyme defects.",
      },
    ],
  },
];

export default function GeneticTumorSyndromesDirectoryPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Hereditary Cancer and Molecular Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Genetic Tumor Syndromes
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            A pathway-based diagnostic directory of inherited and mosaic
            tumor-predisposition disorders. Each section connects characteristic
            tumor patterns and pathology clues with the responsible genes,
            molecular mechanisms, and clinically relevant syndromes.
          </p>
        </div>

        <div className="mt-8 max-w-3xl">
          <PathologySearch compact />
        </div>

        <section className="mt-8 rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal-800">
            Diagnostic Approach
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Start with the tumor, anatomic site, multiplicity, bilaterality,
            age, and distinctive morphology. Use these findings to identify a
            candidate syndrome, then assess the relevant gene and molecular
            mechanism. Distinguish germline predisposition from postzygotic
            mosaicism and tumor-restricted alterations; immunohistochemical loss
            may guide testing but does not, by itself, establish a germline
            diagnosis.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            {["Pathology Clues", "Syndrome", "Gene", "Molecular Mechanism"].map(
              (step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-full bg-teal-50 px-3 py-1.5 text-teal-800">
                    {step}
                  </span>
                  {index < 3 && (
                    <span aria-hidden="true" className="text-slate-400">
                      →
                    </span>
                  )}
                </span>
              ),
            )}
          </div>
        </section>

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
                    className="group flex items-center justify-between gap-4 px-5 py-4 hover:bg-slate-50"
                  >
                    <span>
                      <span className="block text-sm font-semibold leading-5 text-slate-700 group-hover:text-teal-800">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
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

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-400">
          PathologyGPS · Diagnostic Navigation System
        </footer>
      </div>
    </main>
  );
}
