"use client";

import { useMemo, useState } from "react";

type Syndrome = {
  name: string;
  group: string;
  genes: string;
  pathway: string;
  inheritance: string;
  summary: string;
  diagnostic: string;
};

const syndromes: Syndrome[] = [
  {
    name: "Neurofibromatosis Type 1 (NF1)",
    group: "Neural tumor predisposition",
    genes: "NF1",
    pathway:
      "RAS–MAPK signaling (neurofibromin, a RAS GTPase-activating protein)",
    inheritance: "Autosomal dominant; approximately 50% de novo",
    summary:
      "Neurofibromas (including plexiform neurofibromas), optic pathway glioma, other gliomas, and additional neoplasms. Clinical diagnosis is based on established clinical criteria; mosaic forms occur.",
    diagnostic:
      "Neurofibromas may progress through atypical neurofibroma / ANNUBP to MPNST. Loss of p16 and H3K27me3 can support progression in the appropriate setting; molecular confirmation identifies NF1 alterations.",
  },
  {
    name: "Neurofibromatosis Type 2 (NF2)",
    group: "Neural tumor predisposition",
    genes: "NF2",
    pathway:
      "Hippo signaling / merlin-mediated contact inhibition; cytoskeletal and growth regulation",
    inheritance:
      "Autosomal dominant; mosaicism is common in apparently sporadic cases",
    summary:
      "Bilateral vestibular schwannomas, other schwannomas, meningiomas, and spinal ependymomas; ocular and other hamartomatous lesions may occur.",
    diagnostic:
      "Multiple or bilateral nerve-sheath tumors and meningiomas at a young age are important clues. Molecular testing helps distinguish NF2-related disease from LZTR1- or SMARCB1-related schwannomatosis.",
  },
  {
    name: "Tuberous Sclerosis Complex (TSC)",
    group: "Neural tumor predisposition",
    genes: "TSC1, TSC2",
    pathway: "TSC1–TSC2 complex; negative regulation of mTORC1 signaling",
    inheritance: "Autosomal dominant; many cases are de novo",
    summary:
      "Multisystem hamartoma syndrome with cortical tubers, subependymal nodules / giant cell astrocytoma, renal angiomyolipomas, cardiac rhabdomyomas, and skin lesions.",
    diagnostic:
      "Subependymal giant cell astrocytoma and characteristic multisystem findings should prompt consideration. TSC1/TSC2 loss activates mTOR signaling.",
  },
  {
    name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
    group: "Neural tumor predisposition",
    genes: "PTCH1; less commonly SUFU",
    pathway: "Hedgehog signaling (PTCH1–SMO–SUFU axis)",
    inheritance: "Autosomal dominant; de novo variants occur",
    summary:
      "Predisposition to basal cell carcinomas, odontogenic keratocysts, and characteristic skeletal and intracranial findings; medulloblastoma risk is particularly associated with SUFU.",
    diagnostic:
      "Multiple or early-onset basal cell carcinomas, jaw keratocysts, and characteristic skeletal findings are clues. PTCH1 or SUFU testing supports diagnosis.",
  },
  {
    name: "Hereditary Retinoblastoma Syndrome",
    group: "Neural tumor predisposition",
    genes: "RB1",
    pathway: "RB1–E2F cell-cycle checkpoint (G1/S transition)",
    inheritance:
      "Autosomal dominant cancer predisposition with a highly penetrant inherited allele; de novo germline variants occur",
    summary:
      "Hereditary predisposition to unilateral or bilateral retinoblastoma, multifocal disease, and second primary malignancies.",
    diagnostic:
      "Bilateral, multifocal, or familial retinoblastoma strongly suggests a germline RB1 alteration. Tumors show biallelic RB1 inactivation.",
  },
  {
    name: "Hereditary Pheochromocytoma–Paraganglioma Syndromes",
    group: "Endocrine tumor predisposition",
    genes:
      "SDHA, SDHB, SDHC, SDHD, SDHAF2; SDHC promoter hypermethylation in some cases",
    pathway:
      "Succinate dehydrogenase / mitochondrial complex II; pseudohypoxia and impaired α-ketoglutarate-dependent dioxygenase activity",
    inheritance:
      "Gene-dependent; generally autosomal dominant. SDHD and SDHAF2 show parent-of-origin effects; SDHC epimutation is not a conventional Mendelian sequence variant",
    summary:
      "Pheochromocytoma and paraganglioma, sometimes multifocal, with additional SDH-deficient tumors including GIST, renal cell carcinoma, pituitary neuroendocrine tumors, and pulmonary chondromas.",
    diagnostic:
      "Loss of SDHB immunoreactivity is a useful screen for SDH deficiency; add SDHA when appropriate. Germline testing defines the syndrome and informs family testing.",
  },
  {
    name: "WAGR Syndrome",
    group: "Wilms tumor predisposition",
    genes:
      "Contiguous deletion at 11p13 involving WT1 and PAX6 (sometimes extending to BDNF in WAGRO)",
    pathway:
      "WT1-related renal / genitourinary development and nephrogenesis; PAX6-related ocular development",
    inheritance:
      "Usually de novo contiguous-gene deletion; not typically inherited as a single-gene Mendelian trait",
    summary:
      "Wilms tumor predisposition with aniridia, genitourinary anomalies, and developmental differences; WAGRO includes obesity related to BDNF deletion.",
    diagnostic:
      "Aniridia should prompt evaluation for a 11p13 deletion including both PAX6 and WT1. Wilms tumors may be bilateral and associated with intralobar nephrogenic rests.",
  },
  {
    name: "Beckwith–Wiedemann Spectrum",
    group: "Wilms tumor predisposition",
    genes:
      "11p15.5 imprinting region: CDKN1C, IGF2, H19, KCNQ1OT1; mechanisms include paternal uniparental disomy and imprinting defects",
    pathway:
      "Genomic imprinting / IGF2 growth signaling and CDKN1C cell-cycle restraint",
    inheritance:
      "Usually sporadic and epigenetic; a subset is due to inherited or de novo CDKN1C variants (autosomal dominant with parent-of-origin effects)",
    summary:
      "Overgrowth spectrum with macroglossia, omphalocele, lateralized overgrowth, hyperinsulinism, and predisposition to Wilms tumor and hepatoblastoma.",
    diagnostic:
      "Use the clinical scoring system and molecular testing of 11p15.5. Mosaicism may require testing tissues other than blood; perilobar nephrogenic rests are a relevant renal finding.",
  },
  {
    name: "Familial Adenomatous Polyposis (FAP)",
    group: "Gastrointestinal tumor predisposition",
    genes: "APC",
    pathway: "WNT/β-catenin signaling (APC destruction complex)",
    inheritance: "Autosomal dominant; de novo variants occur",
    summary:
      "Numerous colorectal adenomas with risk of colorectal carcinoma; gastric and duodenal polyps, desmoid tumors, and other extracolonic manifestations may occur. Attenuated FAP is a recognized phenotype.",
    diagnostic:
      "Adenomatous polyposis, especially in adolescence, should prompt APC evaluation. Somatic second-hit APC inactivation drives adenoma formation.",
  },
  {
    name: "Lynch Syndrome",
    group: "Gastrointestinal tumor predisposition",
    genes: "MLH1, MSH2, MSH6, PMS2; EPCAM deletions can silence MSH2",
    pathway: "DNA mismatch repair (MMR)",
    inheritance:
      "Autosomal dominant; cancer risk reflects a heterozygous germline pathogenic variant with somatic second-hit inactivation",
    summary:
      "Predisposition to colorectal and endometrial carcinoma and other cancers, often at younger ages and with a characteristic tumor spectrum.",
    diagnostic:
      "Tumor MMR immunohistochemistry and/or microsatellite instability testing guide evaluation; germline testing establishes Lynch syndrome. Distinguish from constitutional mismatch repair deficiency, which is biallelic.",
  },
  {
    name: "Xeroderma Pigmentosum (XP)",
    group: "Other cancer predisposition syndromes",
    genes:
      "XPA, ERCC3 (XPB), XPC, ERCC2 (XPD), DDB2 (XPE), ERCC4 (XPF), ERCC5 (XPG); POLH (XPV)",
    pathway:
      "Nucleotide excision repair (XPA–XPG); translesion DNA synthesis (POLH / XPV)",
    inheritance: "Autosomal recessive",
    summary:
      "Marked UV sensitivity, early freckling, and very high risk of multiple cutaneous and ocular malignancies; internal tumors and neurologic abnormalities occur in subsets.",
    diagnostic:
      "Clinical findings plus molecular testing identify the complementation group. XPV has intact nucleotide excision repair but defective translesion polymerase η.",
  },
  {
    name: "Rothmund–Thomson Syndrome (RTS)",
    group: "Other cancer predisposition syndromes",
    genes: "RECQL4 (RTS type 2); ANAPC1 (a subset of RTS type 1)",
    pathway:
      "DNA replication and repair / RECQ helicase; APC/C-mediated cell-cycle regulation",
    inheritance: "Autosomal recessive",
    summary:
      "Poikiloderma beginning in infancy, short stature, sparse hair, and skeletal abnormalities; RTS type 2 carries an increased osteosarcoma risk.",
    diagnostic:
      "Poikiloderma is the hallmark. Biallelic RECQL4 variants establish RTS type 2; a negative RECQL4 result does not exclude clinically convincing RTS type 1.",
  },
  {
    name: "Li–Fraumeni Syndrome (LFS)",
    group: "Other cancer predisposition syndromes",
    genes: "TP53",
    pathway:
      "p53 DNA-damage response: cell-cycle arrest, apoptosis, and senescence",
    inheritance: "Autosomal dominant; de novo germline variants occur",
    summary:
      "Early-onset, broad-spectrum cancer predisposition including sarcomas, breast cancer, brain tumors, and adrenocortical carcinoma.",
    diagnostic:
      "A pathogenic germline TP53 alteration is essential. Childhood tumors in the LFS spectrum should raise suspicion; radiation exposure may increase the risk of secondary malignancies.",
  },
  {
    name: "DICER1 Syndrome",
    group: "Other cancer predisposition syndromes",
    genes: "DICER1",
    pathway: "MicroRNA biogenesis / RNA interference (RNase III processing)",
    inheritance:
      "Autosomal dominant with reduced/incomplete penetrance; de novo variants and postzygotic mosaicism occur",
    summary:
      "Predisposition to pleuropulmonary blastoma, cystic nephroma, thyroid neoplasia, ovarian Sertoli–Leydig cell tumor, cervical embryonal rhabdomyosarcoma, and selected CNS tumors.",
    diagnostic:
      "Most syndrome-associated tumors carry a germline loss-of-function variant plus a somatic RNase IIIb hotspot mutation. Mosaic RNase IIIb variants may produce an earlier, more extensive phenotype.",
  },
  {
    name: "BAP1 Tumor Predisposition Syndrome",
    group: "Other cancer predisposition syndromes",
    genes: "BAP1",
    pathway:
      "Ubiquitin-mediated protein regulation / deubiquitination; chromatin regulation and DNA-damage response",
    inheritance:
      "Autosomal dominant; most cases are inherited, with de novo variants reported",
    summary:
      "Predisposition to uveal and cutaneous melanoma, mesothelioma, renal cell carcinoma, and other tumors; BAP1-inactivated melanocytic tumors may be an early clue.",
    diagnostic:
      "Loss of nuclear BAP1 by immunohistochemistry identifies BAP1-deficient tumors but does not alone prove a germline syndrome; confirm with germline testing.",
  },
  {
    name: "Constitutional Mismatch Repair Deficiency (CMMRD)",
    group: "Other cancer predisposition syndromes",
    genes: "Biallelic pathogenic variants in MLH1, MSH2, MSH6, or PMS2",
    pathway: "DNA mismatch repair (MMR)",
    inheritance:
      "Autosomal recessive; parents are typically heterozygous carriers",
    summary:
      "Childhood-onset brain tumors, hematologic malignancies, gastrointestinal polyposis and cancers, often with café-au-lait-like skin macules.",
    diagnostic:
      "Loss of the relevant MMR protein in both tumor and normal tissues is a key clue. Tumors may be ultrahypermutated despite limited MSI; confirm biallelic germline variants or appropriate functional criteria.",
  },
  {
    name: "Rhabdoid Tumor Predisposition Syndrome (RTPS)",
    group: "Other cancer predisposition syndromes",
    genes: "SMARCB1 (RTPS1); SMARCA4 (RTPS2)",
    pathway: "SWI/SNF (BAF) chromatin-remodeling complex",
    inheritance:
      "Autosomal dominant cancer predisposition; de novo and postzygotic mosaic variants occur",
    summary:
      "Predisposition to malignant rhabdoid tumors, including atypical teratoid/rhabdoid tumor, often at very young ages; synchronous or metachronous tumors may occur.",
    diagnostic:
      "Loss of INI1 (SMARCB1) or BRG1 (SMARCA4) supports the corresponding tumor pathway defect; germline testing is required to establish predisposition syndrome.",
  },
];

const groups = [
  "All",
  "Neural tumor predisposition",
  "Endocrine tumor predisposition",
  "Wilms tumor predisposition",
  "Gastrointestinal tumor predisposition",
  "Other cancer predisposition syndromes",
];

export default function PediatricGeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      syndromes.filter((s) => {
        const haystack = [
          s.name,
          s.group,
          s.genes,
          s.pathway,
          s.inheritance,
          s.summary,
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All" || s.group === group) &&
          haystack.includes(query.trim().toLowerCase())
        );
      }),
    [query, group],
  );
  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );
  const allOpen =
    filtered.length > 0 && filtered.every((s) => expanded.includes(s.name));
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          Pediatric Pathology · Hereditary Cancer Predisposition
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Genetic Tumor Syndromes
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A practical pathology reference to pediatric and hereditary tumor
          predisposition syndromes, organized by their predominant tumor
          associations. The summary matrix links each syndrome to its principal
          gene, biologic pathway, and inheritance pattern.
        </p>
      </header>

      <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Syndrome–Gene–Pathway Matrix
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {syndromes.length} syndromes · genes and inheritance summarized
              for quick reference
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setExpanded(allOpen ? [] : filtered.map((s) => s.name))
            }
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <div className="mb-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search syndrome, gene, pathway, or inheritance…"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-sky-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            {groups.map((g) => (
              <option key={g} value={g}>
                {g === "All" ? "All categories" : g}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-[980px] w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3">Syndrome</th>
                <th className="px-4 py-3">Associated gene(s)</th>
                <th className="px-4 py-3">Pathway</th>
                <th className="px-4 py-3">Inheritance</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr
                  key={s.name}
                  className="border-t border-slate-200 align-top dark:border-slate-800"
                >
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                    {s.name}
                    <div className="mt-1 text-xs font-normal text-slate-500">
                      {s.group}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-sky-800 dark:text-sky-300">
                    {s.genes}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                    {s.pathway}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                    {s.inheritance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="p-6 text-center text-sm text-slate-500">
              No syndromes match this search.
            </p>
          )}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
          The chapter groups syndromes by predominant tumor association; pathway
          labels below summarize the gene function/pathobiology described in the
          text.
        </p>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Diagnostic Reference
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Expand each syndrome for its tumor spectrum and practical diagnostic
            clues.
          </p>
        </div>
        <div className="space-y-3">
          {filtered.map((s) => (
            <article
              key={s.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <button
                type="button"
                onClick={() => toggle(s.name)}
                aria-expanded={expanded.includes(s.name)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
              >
                <span>
                  <span className="block font-semibold text-slate-900 dark:text-white">
                    {s.name}
                  </span>
                  <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                    {s.group} · {s.genes}
                  </span>
                </span>
                <span className="text-xl text-slate-400">
                  {expanded.includes(s.name) ? "−" : "+"}
                </span>
              </button>
              {expanded.includes(s.name) && (
                <div className="grid gap-4 border-t border-slate-200 px-4 py-4 dark:border-slate-800 sm:grid-cols-2 sm:px-5">
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Tumor spectrum and clinical context
                    </h3>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {s.summary}
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Pathology / diagnostic considerations
                    </h3>
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                      {s.diagnostic}
                    </p>
                  </div>
                  <div className="sm:col-span-2 grid gap-3 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-950 sm:grid-cols-3">
                    <div>
                      <span className="block text-xs font-semibold uppercase text-slate-500">
                        Gene(s)
                      </span>
                      <span className="mt-1 block text-slate-800 dark:text-slate-200">
                        {s.genes}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase text-slate-500">
                        Pathway
                      </span>
                      <span className="mt-1 block text-slate-800 dark:text-slate-200">
                        {s.pathway}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase text-slate-500">
                        Inheritance
                      </span>
                      <span className="mt-1 block text-slate-800 dark:text-slate-200">
                        {s.inheritance}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      <footer className="mt-10 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Educational reference for pathology practice. Syndrome diagnosis and
        family risk assessment require correlation with clinical criteria and
        appropriate germline testing. Inheritance patterns may vary by gene,
        molecular mechanism, and parent of origin.
      </footer>
    </main>
  );
}
