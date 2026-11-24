import Link from "next/link";
import SearchHighlight from "@/components/pathology/SearchHighlight";

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+.-]+/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 90);
}

const diagnosticSteps = [
  {
    number: "01",
    title: "Confirm true papillary architecture",
    detail:
      "Identify discrete papillary aggregates with fibrovascular cores. Focal papillary features in apocrine metaplasia or usual ductal hyperplasia alone should not be overcalled as papilloma.",
  },
  {
    number: "02",
    title: "Map myoepithelial cells",
    detail:
      "Assess the fibrovascular cores and the periphery of the involved duct or lesion separately. Core staining and peripheral staining answer different questions.",
  },
  {
    number: "03",
    title: "Characterize the epithelial proliferation",
    detail:
      "Assess cytologic uniformity, nuclear grade, mitotic activity, usual ductal hyperplasia, and any monotonous atypical population.",
  },
  {
    number: "04",
    title: "Assess lesion boundary and invasion",
    detail:
      "Look for a cystic space or fibrous capsule, a rounded or pushing border, and unequivocal infiltrative growth beyond the lesion boundary.",
  },
  {
    number: "05",
    title: "Use targeted IHC and integrate",
    detail:
      "Select stains to answer a specific morphologic question. Interpret staining distribution, internal controls, and potential mimics before assigning a diagnostic category.",
  },
];

const comparisonRows = [
  {
    entity: "Intraductal papilloma",
    architecture: "Arborescent papillae; often broad fibrovascular cores",
    cores: "Present",
    periphery: "Continuous layer expected",
    discriminator:
      "Bland or heterogeneous epithelial proliferation without atypia; sclerosis can entrap epithelium and mimic invasion.",
  },
  {
    entity: "Papilloma with ADH / DCIS",
    architecture: "Papilloma containing a monotonous atypical epithelial focus",
    cores:
      "Present along benign papilloma cores; may be absent in atypical foci",
    periphery: "Usually retained around the papilloma",
    discriminator:
      "For low-grade atypia, < 3 mm supports ADH and ≥ 3 mm supports DCIS in a papilloma; intermediate/high-grade atypia is classified as DCIS regardless of extent.",
  },
  {
    entity: "Papillary DCIS",
    architecture: "Neoplastic epithelium lining arborizing fibrovascular cores",
    cores: "Absent",
    periphery: "Present around the involved duct",
    discriminator:
      "Neoplastic papillary proliferation within a duct with a retained peripheral myoepithelial layer.",
  },
  {
    entity: "Encapsulated papillary carcinoma (EPC)",
    architecture:
      "Delicate papillae in a cystic space, usually with a fibrous capsule and rounded or pushing border",
    cores: "Absent",
    periphery: "Usually absent; may be focally present",
    discriminator:
      "Usually low/intermediate nuclear grade. Do not infer invasion from absent myoepithelium, high grade, or phenotype alone.",
  },
  {
    entity: "Solid papillary carcinoma (SPC)",
    architecture:
      "Expansile solid nodules with inconspicuous delicate fibrovascular cores",
    cores: "Not the defining criterion",
    periphery: "Presence/absence alone does not determine in situ status",
    discriminator:
      "Monotonous round-to-spindle cells; palisading, mucin, and neuroendocrine differentiation may occur.",
  },
  {
    entity: "Invasive papillary carcinoma",
    architecture:
      "Entirely papillary architecture with unequivocal invasive growth",
    cores: "Absent in invasive areas",
    periphery: "Absent in invasive areas",
    discriminator:
      "Extremely rare. Exclude EPC/SPC, high-grade carcinoma with pseudopapillary growth, and metastasis when appropriate.",
  },
];

const ihcRows = [
  {
    question: "Are myoepithelial cells present?",
    markers:
      "p63 plus a smooth-muscle/myoepithelial marker panel, e.g. SMMHC, calponin, or SMA",
    interpretation:
      "Evaluate the papillary cores and lesion periphery separately. Use morphology and internal controls; no single marker is definitive in every setting.",
  },
  {
    question: "Low-grade atypical proliferation or usual ductal hyperplasia?",
    markers: "ER, CK5/6 and/or CK14",
    interpretation:
      "Low-grade atypical foci are typically strongly and diffusely ER-positive and lack high-molecular-weight cytokeratin expression, whereas usual ductal hyperplasia typically shows a heterogeneous pattern. Correlate with morphology.",
  },
  {
    question: "Is neuroendocrine differentiation present in a suspected SPC?",
    markers: "Synaptophysin, INSM1, chromogranin, as appropriate",
    interpretation:
      "Neuroendocrine differentiation is common in SPC, but it is a supporting feature rather than a substitute for the characteristic architecture and cytology.",
  },
  {
    question: "What is the phenotype of a suspected EPC?",
    markers: "ER, PR, HER2; Ki-67 when appropriate",
    interpretation:
      "Typical EPC is usually ER-positive, often PR-positive, HER2-negative, and has low-to-moderate proliferation. Phenotype alone must not be used to diagnose invasion.",
  },
];

const pitfalls = [
  "Absence of myoepithelial cells along papillary cores does not by itself establish invasive carcinoma.",
  "Reactive myofibroblasts may express calponin and SMA; vascular pericytes may express actin, calponin, or SMMHC; scattered neoplastic cells may express p63.",
  "Sclerosing papilloma can entrap epithelium and mimic invasion. A panel of myoepithelial markers may be helpful.",
  "On core biopsy, fragmentation may prevent assessment of the full epithelial–stromal interface or lesion boundary.",
  "Displaced epithelium at a recent biopsy site may mimic invasion. Myoepithelial IHC can be non-contributory if myoepithelial cells were not displaced.",
  "Infarction or poor tissue preservation can obscure architecture; absent staining in compromised tissue should not automatically be interpreted as a true negative.",
];

export default function BreastPapillaryLesionsPage() {
  return (
    <SearchHighlight>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <nav className="text-sm text-slate-500">
              <Link href="/" className="hover:text-blue-700">
                PathologyGPS
              </Link>
              {" / Breast / Epithelial Lesions / Papillary Lesions"}
            </nav>
            <div className="mt-7 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Breast · Epithelial lesions
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Breast Papillary Lesions
              </h1>
            </div>
            <nav className="mt-6 flex flex-wrap gap-2 text-sm">
              <a
                href="#histology"
                className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
              >
                Histology table
              </a>
              <a
                href="#ihc"
                className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
              >
                IHC guide
              </a>
              <a
                href="#pitfalls"
                className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
              >
                Pitfalls
              </a>
              <a
                href="#core-biopsy"
                className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
              >
                Core biopsy
              </a>
            </nav>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="min-w-0 space-y-12">
            <section id="histology" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Histology: rapid differential table
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Use this table to organize the differential; the final diagnosis
                depends on the complete morphology and adequate sampling.
              </p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-3 font-semibold">Entity</th>
                      <th className="p-3 font-semibold">Architecture</th>
                      <th className="p-3 font-semibold">
                        Myoepithelium on cores
                      </th>
                      <th className="p-3 font-semibold">Peripheral layer</th>
                      <th className="p-3 font-semibold">Key discriminator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.entity}
                        id={`gps-${slugify(row.entity)}`}
                        className="scroll-mt-24 border-t border-slate-200 align-top"
                      >
                        <td className="p-3 font-semibold text-slate-950">
                          {row.entity}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {row.architecture}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {row.cores}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {row.periphery}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {row.discriminator}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="ihc" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                IHC: answer a specific question
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Select stains to resolve a morphologic uncertainty. Interpret
                staining distribution and quality rather than relying on
                positive or negative results alone.
              </p>
              <div className="mt-5 space-y-4">
                {ihcRows.map((row) => (
                  <article
                    key={row.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <h3 className="border-b border-slate-200 bg-slate-100/70 px-5 py-3 font-semibold">
                      {row.question}
                    </h3>
                    <div className="grid gap-4 p-5 md:grid-cols-[220px_minmax(0,1fr)]">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Markers / approach
                        </p>
                        <p className="mt-2 leading-6 text-slate-800">
                          {row.markers}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Interpretation
                        </p>
                        <p className="mt-2 leading-7 text-slate-600">
                          {row.interpretation}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <strong>IHC pitfall:</strong> Reactive myofibroblasts, vascular
                pericytes, and occasional neoplastic cells can mimic
                myoepithelial staining. Correlate with cell location,
                morphology, and controls.
              </div>
            </section>

            <section id="pitfalls" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                High-yield diagnostic pitfalls
              </h2>
              <ul className="mt-5 space-y-3">
                {pitfalls.map((pitfall) => (
                  <li
                    key={pitfall}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="mt-0.5 font-bold text-amber-700">!</span>
                    <span className="leading-7 text-slate-700">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="core-biopsy"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-bold">
                Core biopsy: minimum review checklist
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                <li>
                  Is a discrete papillary lesion present, rather than focal
                  papillary features in another process?
                </li>
                <li>
                  Are myoepithelial cells identified along the cores and at the
                  periphery, where assessable?
                </li>
                <li>
                  Is the epithelial proliferation heterogeneous/bland or
                  monotonous and atypical?
                </li>
                <li>
                  If low-grade atypia is present in a papilloma, what is its
                  measured extent?
                </li>
                <li>
                  Is there a capsule or pushing border, and is frank invasion
                  unequivocally demonstrated?
                </li>
                <li>
                  Are the tissue quality and internal controls adequate for IHC
                  interpretation?
                </li>
                <li>
                  Does the limited sample require a qualified diagnosis or
                  excision for full classification?
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h2 className="font-semibold">Diagnostic focus</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This page focuses on diagnostic morphology, myoepithelial
                distribution, targeted immunohistochemistry, and the practical
                differential diagnosis. Interpret findings in the context of the
                complete specimen and clinical-radiologic correlation.
              </p>
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold">On this page</h2>
              <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="#histology" className="hover:text-blue-700">
                  Histology table
                </a>
                <a href="#ihc" className="hover:text-blue-700">
                  IHC guide
                </a>
                <a href="#pitfalls" className="hover:text-blue-700">
                  Diagnostic pitfalls
                </a>
                <a href="#core-biopsy" className="hover:text-blue-700">
                  Core biopsy checklist
                </a>
              </nav>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-sm font-bold">Core principle</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  H&amp;E architecture → map myoepithelium → characterize
                  epithelium → assess boundary/invasion → targeted IHC →
                  integrate or qualify.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </SearchHighlight>
  );
}
