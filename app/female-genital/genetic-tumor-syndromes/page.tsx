"use client";

import { useMemo, useState } from "react";

type Syndrome = {
  name: string;
  gene: string;
  inheritance: string;
  sites: string;
  signature: string;
  pathology: string[];
  workup: string[];
  pitfalls: string[];
  risk: string;
  category: string;
};

const syndromes: Syndrome[] = [
  {
    name: "BRCA1-/BRCA2-related cancer predisposition",
    gene: "BRCA1 / BRCA2",
    inheritance:
      "Autosomal dominant; tumorigenesis generally follows a two-hit model",
    sites:
      "Breast, fallopian tube, ovary, and peritoneum; additional reported sites include prostate, pancreas, and endometrium",
    signature:
      "High-grade serous carcinoma (HGSC), often with a fallopian-tube origin; serous tubal intraepithelial carcinoma (STIC) may be identified in risk-reducing salpingo-oophorectomy specimens.",
    pathology: [
      "The predominant female genital tract malignancy is HGSC of tubo-ovarian or peritoneal origin. Carcinosarcoma is also associated.",
      "Endometrioid, clear cell, and undifferentiated carcinomas have been reported, but the relationship to biallelic BRCA inactivation is less firmly documented.",
      "With SEE-FIM examination, localized STIC or STIC with limited invasion/spread is found in approximately 5–10% of risk-reducing salpingo-oophorectomy specimens.",
      "The SET (solid, endometrial-like, transitional) architectural pattern, tumor-infiltrating lymphocytes, stromal-infiltrating lymphocytes, and necrosis may correlate variably with homologous recombination deficiency (HRD) or BRCA status. These features are not sufficiently reliable to replace molecular testing.",
    ],
    workup: [
      "Confirm a pathogenic constitutional (germline) BRCA1 or BRCA2 variant; this is the essential syndrome-level criterion.",
      "When evaluating risk-reducing specimens, use the SEE-FIM protocol to thoroughly examine the fimbria and identify occult STIC or early invasive carcinoma.",
      "Do not infer germline status from HGSC morphology or an HRD phenotype alone. Tumor testing and constitutional testing answer different questions.",
      "Tumor HRD assays may incorporate genomic scar measures such as loss of heterozygosity, telomeric allelic imbalance, and large-scale transitions; assay methods and thresholds vary.",
    ],
    pitfalls: [
      "SET morphology and lymphocyte-rich stroma are supportive associations, not diagnostic surrogates for a BRCA pathogenic variant.",
      "A tumor BRCA alteration does not by itself establish an inherited syndrome.",
      "The source describes increased endometrial carcinoma risk in some studies, but the association is less settled than the tubo-ovarian/breast association.",
    ],
    risk: "The source estimates tubo-ovarian cancer risk at 40–60% for BRCA1 and 11–35% for BRCA2 carriers, with average diagnosis ages around 50–53 and 55–58 years, respectively. Estimates vary by variant and population.",
    category: "DNA repair",
  },
  {
    name: "Lynch syndrome",
    gene: "MLH1 / MSH2 / MSH6 / PMS2; also EPCAM-associated MSH2 silencing",
    inheritance: "Autosomal dominant",
    sites:
      "Endometrium most commonly, followed by ovary; rare extraovarian endometriosis-associated tumors. Other associated sites include colorectum and multiple gastrointestinal, urinary tract, skin, and brain sites.",
    signature:
      "Endometrial carcinoma is often the sentinel cancer. Gynecologic tumors are most often endometrioid carcinomas, but clear cell, mixed, undifferentiated/dedifferentiated, and carcinosarcoma histotypes are also reported.",
    pathology: [
      "Most gynecologic cancers in Lynch syndrome are endometrial or ovarian endometrioid carcinomas.",
      "dMMR endometrial carcinomas may show tumor heterogeneity, morphologic ambiguity, and increased tumor-infiltrating or peritumoral lymphocytes. These findings are nonspecific.",
      "The histologic spectrum is broad; no single morphology establishes Lynch syndrome.",
    ],
    workup: [
      "Perform MMR immunohistochemistry (MLH1, PMS2, MSH2, and MSH6) as a screening approach where indicated. Interpret loss patterns in the context of the MMR heterodimers: MLH1/PMS2 and MSH2/MSH6.",
      "MLH1/PMS2 loss should prompt MLH1 promoter hypermethylation testing. Methylation is usually associated with a sporadic mechanism, although rare co-occurrence with Lynch syndrome has been reported.",
      "If MLH1 methylation is absent, or if MSH2/MSH6, isolated MSH6, or isolated PMS2 loss is present, proceed to constitutional testing directed by the pattern or a broader germline panel.",
      "MSI testing is an alternative/adjunct, but the source notes reduced sensitivity in endometrial cancers compared with colorectal cancers, particularly for MSH6-associated disease.",
      "Abnormal tumor MMR IHC or MSI does not distinguish a germline syndrome from sporadic MLH1 methylation or biallelic somatic alterations. Somatic sequencing may clarify selected germline-negative cases.",
    ],
    pitfalls: [
      "MMR protein loss is not synonymous with Lynch syndrome; most dMMR endometrial carcinomas are sporadic.",
      "Retained IHC does not absolutely exclude a nonfunctional missense-mutant protein because antigenicity may be preserved.",
      "A negative germline result with tumor dMMR may reflect double-somatic events or, in some cases, another molecular mechanism.",
    ],
    risk: "The source gives cumulative endometrial cancer risks of approximately 40–60% and ovarian cancer risks of 9–17%, with substantial gene-dependent variation; MSH6 carriers have the highest incidence in the cited data.",
    category: "DNA repair",
  },
  {
    name: "Peutz–Jeghers syndrome",
    gene: "STK11 (LKB1)",
    inheritance: "Autosomal dominant",
    sites:
      "Cervix, ovary, and broad ligament; synchronous mucinous metaplasia/neoplasia may involve multiple genital tract sites",
    signature:
      "Gastric-type cervical adenocarcinoma, sex cord tumor with annular tubules (SCTAT), STK11 adnexal tumor, and Sertoli cell tumor.",
    pathology: [
      "Gastric-type cervical adenocarcinoma ranges from well-differentiated/minimal-deviation morphology to overtly malignant tumors. The defining cells have abundant apical pale eosinophilic or clear cytoplasm and distinct cell borders.",
      "Lobular endocervical glandular hyperplasia (LEGH), including atypical forms, occurs in PJS and is considered a precursor to gastric-type cervical adenocarcinoma.",
      "Syndromic SCTATs are typically bilateral and multifocal and may contain microcalcifications, unlike most non-syndromic tumors.",
      "STK11 adnexal tumors commonly show interanastomosing cords and trabeculae in a myxoid matrix.",
      "Sertoli cell tumors may be oxyphilic or lipid-rich. Gastric-type mucinous lesions may occur synchronously at multiple genital tract sites.",
    ],
    workup: [
      "Recognize the combination of mucocutaneous pigmentation and gastrointestinal polyposis with the characteristic gynecologic tumor spectrum.",
      "Demonstrate a germline STK11 pathogenic variant by sequencing when clinically indicated; the source states that the essential syndrome criterion is fulfillment of clinical PJS diagnostic criteria.",
      "For a cervical glandular lesion, evaluate the gastric phenotype and distinguish LEGH/atypical LEGH from invasive gastric-type adenocarcinoma using the full morphologic context.",
      "In an ovarian/broad-ligament mass, consider SCTAT, STK11 adnexal tumor, and Sertoli cell tumor in the differential.",
    ],
    pitfalls: [
      "Gastric-type cervical adenocarcinoma is HPV-independent; do not assume an HPV-associated pathway.",
      "Syndromic SCTATs are often bilateral/multifocal, but morphology alone does not establish PJS.",
      "The source describes aggressive behavior for gastric-type cervical adenocarcinoma and STK11 adnexal tumor, but generally excellent prognosis for SCTAT.",
    ],
    risk: "The source reports a cumulative risk of approximately 10% for gastric-type cervical adenocarcinoma and 21% for ovarian tumors; estimates are drawn from cited cohorts.",
    category: "Tumor suppressor",
  },
  {
    name: "DICER1-related tumor predisposition syndrome",
    gene: "DICER1",
    inheritance:
      "Autosomal dominant; de novo variants and somatic mosaicism are also described",
    sites: "Ovary and uterine cervix",
    signature:
      "Sertoli–Leydig cell tumor (SLCT), often moderately/poorly differentiated or retiform, and cervical embryonal rhabdomyosarcoma (ERMS), sometimes with fetal-type cartilage.",
    pathology: [
      "DICER1-associated SLCTs may be moderately to poorly differentiated or retiform and may contain heterologous elements, including mucinous epithelium, fetal-type cartilage, and/or skeletal muscle.",
      "Embryonal rhabdomyosarcoma of the female genital tract most often arises in the cervix. Fetal-type cartilage is a highly characteristic clue to DICER1 association.",
      "These tumors are histologically indistinguishable from their non-syndromic counterparts; the syndrome is not diagnosed by morphology alone.",
      "Gynandroblastoma is another rare reported gynecologic tumor in DICER1 syndrome.",
    ],
    workup: [
      "In a young patient with SLCT—especially moderately/poorly differentiated, retiform, or heterologous—or cervical ERMS with fetal-type cartilage, consider DICER1 predisposition.",
      "Confirm a constitutional DICER1 pathogenic variant. Tumor sequencing may identify a second somatic missense event, typically affecting the RNase IIIb domain.",
      "Interpret the characteristic tumor phenotype as a trigger for genetic evaluation, not as proof of a germline variant.",
    ],
    pitfalls: [
      "DICER1-associated and sporadic counterparts are morphologically indistinguishable.",
      "The characteristic RNase IIIb second hit is a tumor-pathogenesis feature; it does not replace germline confirmation.",
      "The source describes generally favorable outcomes for SLCT and genital tract ERMS, while noting that selected SLCT features may confer adverse risk.",
    ],
    risk: "The source reports higher neoplasm incidence in female carriers than male carriers in one cohort, with gynecologic neoplasms predominating in older female patients; overall incidence remains incompletely defined.",
    category: "RNA processing",
  },
  {
    name: "Hereditary leiomyomatosis and renal cell carcinoma syndrome",
    gene: "FH (fumarate hydratase)",
    inheritance:
      "Autosomal dominant; incomplete penetrance and no established genotype–phenotype correlation",
    sites:
      "Cutaneous and uterine leiomyomas; renal cell carcinoma, predominantly renal cortex",
    signature:
      "FH-deficient uterine leiomyoma with distinctive vascular/stromal patterns and cytologic features; rare FH-deficient STUMP or leiomyosarcoma has been described.",
    pathology: [
      "Uterine leiomyomas may show staghorn vessels, alveolar-pattern edema, and ovoid smooth muscle cells arranged in chains rather than intersecting fascicles.",
      "Tumor cells may have prominent eosinophilic nucleoli with perinucleolar halos and eosinophilic cytoplasmic globules. Bizarre nuclei are common.",
      "These features may occur in conventional, cellular, and leiomyoma-with-bizarre-nuclei patterns.",
      "Rare FH-deficient STUMP and leiomyosarcoma have been reported, but the source notes that these were not confirmed in carriers with germline FH variants.",
    ],
    workup: [
      "Use FH immunohistochemistry and 2SC immunohistochemistry when morphology raises suspicion for FH deficiency.",
      "Loss of FH staining is specific for FH deficiency but has limited sensitivity; some FH-deficient tumors retain FH expression, including with missense variants.",
      "Positive 2SC staining is highly sensitive and specific for FH deficiency and may identify cases with retained FH protein.",
      "FH/2SC IHC establishes a deficient tumor phenotype, not hereditary syndrome status. Confirm a germline FH pathogenic variant or deletion for definitive HLRCC diagnosis.",
    ],
    pitfalls: [
      "Most FH-deficient uterine leiomyomas are caused by sporadic genetic alterations; FH deficiency alone does not prove HLRCC.",
      "Retained FH IHC does not exclude FH deficiency; interpret with 2SC and morphology.",
      "Atypia or bizarre nuclei in an FH-deficient leiomyoma should not automatically be equated with leiomyosarcoma.",
    ],
    risk: "Renal carcinomas arising in HLRCC are aggressive. Smooth muscle tumors may be cytologically atypical, but biologically malignant behavior is rarely reported in the source.",
    category: "Metabolic enzyme",
  },
  {
    name: "Li–Fraumeni syndrome",
    gene: "TP53",
    inheritance: "Autosomal dominant; de novo pathogenic variants are reported",
    sites:
      "Broad tumor spectrum; female genital tract involvement is uncommon. Core sites include breast, soft tissue, bone, brain, and adrenal cortex.",
    signature:
      "No single gynecologic histotype is characteristic. Reported tumors include endometrioid and serous endometrial carcinomas, ovarian small cell carcinoma of hypercalcemic type, yolk sac tumor, and fallopian tube/peritoneal carcinomas.",
    pathology: [
      "Gynecologic tumors are rare and histologically diverse; available evidence is largely from larger tumor-spectrum studies and case reports.",
      "Reported lesions include endometrioid endometrial adenocarcinoma, uterine serous carcinoma, mixed endometrioid/serous carcinoma, ovarian small cell carcinoma of hypercalcemic type, yolk sac tumor, undifferentiated and endometrioid carcinomas of fallopian tube/peritoneum, and cervical pleomorphic liposarcoma.",
      "Incidental bilateral STIC and distal tubal p53 signatures have been reported, but the natural history and implications in LFS are uncertain.",
    ],
    workup: [
      "Consider TP53 germline evaluation in the context of early-onset cancers, multiple primary tumors, and a suggestive personal/family history; the source references Chompret and NCCN testing frameworks.",
      "Distinguish pathogenic germline variants from somatic variants, polymorphisms, variants of uncertain significance, and clonal hematopoiesis.",
      "A pathogenic TP53 variant and/or an appropriate clinical history are the essential criteria stated in the source.",
      "Because of the increased risk of radiation-induced secondary malignancies, diagnostic and therapeutic radiation exposure should be minimized or avoided when clinically appropriate, balancing cancer-control needs.",
    ],
    pitfalls: [
      "A gynecologic malignancy alone does not establish LFS; the syndrome is defined by germline TP53 status and/or appropriate clinical criteria.",
      "Tumor-only TP53 sequencing cannot establish constitutional status.",
      "The source notes that some individuals meeting clinical criteria may lack a detectable TP53 pathogenic variant.",
    ],
    risk: "Gynecologic malignancies account for a small fraction of LFS-associated tumors. The source reports earlier median age for ovarian cancer in LFS than sporadic cases, but emphasizes that site-specific histology data are sparse.",
    category: "Genome surveillance",
  },
];

const overviewOnly = [
  [
    "Carney complex",
    "PRKAR1A-related; listed in the source overview, without a detailed syndrome section in the supplied excerpt.",
  ],
  [
    "PTEN hamartoma tumor syndrome (Cowden syndrome)",
    "PTEN-related; listed in the source overview, without detailed gynecologic pathology criteria in the supplied excerpt.",
  ],
  [
    "Ataxia-telangiectasia syndrome",
    "Listed in the source overview; specific gynecologic tumor details are not provided in the supplied excerpt.",
  ],
  [
    "Ovarian dysgenesis",
    "Listed in the source overview; specific gene/pathology details are not provided in the supplied excerpt.",
  ],
  [
    "von Hippel–Lindau syndrome",
    "VHL-related; listed in the source overview, without a detailed syndrome section in the supplied excerpt.",
  ],
];

const workflow = [
  {
    title: "1. Recognize the tumor phenotype",
    detail:
      "Start with the actual neoplasm and its morphology. Examples include tubo-ovarian HGSC/STIC, endometrioid carcinoma with dMMR, gastric-type cervical adenocarcinoma, bilateral/multifocal SCTAT, cervical ERMS with fetal-type cartilage, FH-deficient leiomyoma, or an unusually early/multiple primary cancer pattern.",
  },
  {
    title: "2. Ask whether the pattern is syndrome-enriched",
    detail:
      "Integrate age, tumor site, multiplicity, bilateral disease, precursor lesions, associated non-gynecologic tumors, and personal/family history. No single morphologic feature is sufficient for most syndromes.",
  },
  {
    title: "3. Select the tumor-level ancillary test",
    detail:
      "Use the test matched to the phenotype: MMR IHC ± MLH1 promoter methylation/MSI; FH and 2SC IHC; or appropriate tumor sequencing. For risk-reducing tubes, apply SEE-FIM.",
  },
  {
    title: "4. Separate tumor phenotype from inherited status",
    detail:
      "Abnormal tumor IHC, HRD, or a tumor-only variant may be somatic. A constitutional/germline pathogenic variant (or the specific clinical criteria stated for PJS/LFS) is required to establish the inherited syndrome.",
  },
  {
    title: "5. Recommend genetics correlation",
    detail:
      "Communicate the histologic clue and tumor test result, and recommend genetic counseling/constitutional testing when indicated. Do not label a patient as having a hereditary syndrome based only on tumor morphology or IHC.",
  },
];

function Panel({
  title,
  children,
  accent = "teal",
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const border =
    accent === "amber"
      ? "border-amber-200"
      : accent === "violet"
        ? "border-violet-200"
        : "border-teal-200";
  const bar =
    accent === "amber"
      ? "bg-amber-500"
      : accent === "violet"
        ? "bg-violet-500"
        : "bg-teal-600";
  return (
    <section
      className={`overflow-hidden rounded-2xl border ${border} bg-white shadow-sm`}
    >
      <div className={`h-1 ${bar}`} />
      <div className="p-5">
        <h3 className="mb-3 text-base font-bold text-slate-900">{title}</h3>
        {children}
      </div>
    </section>
  );
}

export default function GeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [expanded, setExpanded] = useState<string[]>(["Lynch syndrome"]);
  const categories = [
    "All",
    "DNA repair",
    "Tumor suppressor",
    "RNA processing",
    "Metabolic enzyme",
    "Genome surveillance",
  ];
  const filtered = useMemo(
    () =>
      syndromes.filter((s) => {
        const text = [s.name, s.gene, s.sites, s.signature, s.category]
          .join(" ")
          .toLowerCase();
        return (
          text.includes(query.toLowerCase()) &&
          (active === "All" || s.category === active)
        );
      }),
    [query, active],
  );
  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            <span>PathologyGPS</span>
            <span className="text-slate-300">/</span>
            <span>Female genital tract</span>
            <span className="text-slate-300">/</span>
            <span>Genetic tumor syndromes</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Genetic Tumor Syndromes of the Female Genital Tract
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-led diagnostic guide to hereditary cancer
                predisposition: recognize syndrome-associated tumor patterns,
                choose the appropriate tumor-level tests, and distinguish
                somatic findings from constitutional disease.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                A tumor phenotype can raise suspicion. Germline testing
                establishes inherited predisposition.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Most syndromes follow a two-hit tumor-suppressor model, but the
                diagnostic evidence required differs by syndrome.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from morphology to hereditary diagnosis">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {workflow.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">
                  {step.title.replace(/^\d+\.\s*/, "")}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Panel title="Core diagnostic distinction" accent="violet">
            <div className="space-y-4 text-sm leading-6">
              <div>
                <span className="font-bold text-slate-900">
                  Tumor-level finding
                </span>
                <p className="text-slate-600">
                  MMR protein loss, HRD, FH loss/2SC positivity, or a tumor
                  sequence variant identifies a pathway or tumor phenotype. It
                  does not, by itself, prove inherited disease.
                </p>
              </div>
              <div className="border-t border-slate-200 pt-4">
                <span className="font-bold text-slate-900">
                  Constitutional finding
                </span>
                <p className="text-slate-600">
                  A pathogenic germline variant (or the syndrome-specific
                  clinical criteria stated in the source) establishes the
                  hereditary predisposition diagnosis.
                </p>
              </div>
              <div className="rounded-lg bg-violet-50 p-3 text-violet-950">
                <strong>Practical rule:</strong> report the tumor finding
                precisely, then recommend genetic counseling/testing when
                indicated. Avoid diagnosing a hereditary syndrome from
                morphology or tumor IHC alone.
              </div>
            </div>
          </Panel>
          <Panel title="High-yield morphology-to-syndrome map">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-3">Tumor / clue</th>
                    <th className="py-2 pr-3">Syndrome to consider</th>
                    <th className="py-2">Key next step</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      Tubo-ovarian HGSC / STIC
                    </td>
                    <td className="py-3 pr-3">BRCA1/BRCA2</td>
                    <td className="py-3">
                      Constitutional testing; SEE-FIM for risk-reducing
                      specimens
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      Endometrial carcinoma with MMR loss
                    </td>
                    <td className="py-3 pr-3">Lynch syndrome</td>
                    <td className="py-3">
                      MMR pattern, MLH1 methylation when appropriate, germline
                      workup
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      Gastric-type cervical adenocarcinoma; SCTAT
                    </td>
                    <td className="py-3 pr-3">Peutz–Jeghers</td>
                    <td className="py-3">
                      Clinical PJS assessment and STK11 testing
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      SLCT; cervical ERMS with fetal cartilage
                    </td>
                    <td className="py-3 pr-3">DICER1</td>
                    <td className="py-3">Constitutional DICER1 testing</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      Leiomyoma with FH-deficient morphology
                    </td>
                    <td className="py-3 pr-3">HLRCC</td>
                    <td className="py-3">
                      FH + 2SC IHC, then germline FH testing if indicated
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-medium">
                      Early/multiple primary tumors, suggestive family history
                    </td>
                    <td className="py-3 pr-3">Li–Fraumeni</td>
                    <td className="py-3">
                      Clinical criteria and constitutional TP53 testing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Syndrome reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Detailed diagnostic profiles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by syndrome, gene, site, or characteristic tumor. Expand
                a profile for pathology and workup.
              </p>
            </div>
            <div className="w-full md:max-w-sm">
              <label
                htmlFor="syndrome-search"
                className="mb-1 block text-xs font-semibold text-slate-600"
              >
                Search
              </label>
              <input
                id="syndrome-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. MMR, STIC, DICER1, FH..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${active === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600 hover:border-teal-500 hover:text-teal-800"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((s, i) => {
              const open = expanded.includes(s.name);
              return (
                <article
                  key={s.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(s.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-800">
                          {s.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          #{String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{s.gene}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}
                      <span className="text-xl">{open ? "−" : "+"}</span>
                    </span>
                  </button>
                  <div className="grid gap-3 border-t border-slate-100 bg-slate-50 px-5 py-4 md:grid-cols-3">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Inheritance
                      </div>
                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {s.inheritance}
                      </p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Genital tract sites
                      </div>
                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {s.sites}
                      </p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Signature phenotype
                      </div>
                      <p className="mt-1 text-sm leading-5 text-slate-700">
                        {s.signature}
                      </p>
                    </div>
                  </div>
                  {open && (
                    <div className="grid gap-6 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Histopathology
                        </h4>
                        <ul className="space-y-2">
                          {s.pathology.map((x, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm leading-6 text-slate-700"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Diagnostic workup
                        </h4>
                        <ul className="space-y-2">
                          {s.workup.map((x, j) => (
                            <li
                              key={j}
                              className="flex gap-2 text-sm leading-6 text-slate-700"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                              {x}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:col-span-2 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic pitfalls
                          </h4>
                          <ul className="space-y-1.5">
                            {s.pitfalls.map((x, j) => (
                              <li
                                key={j}
                                className="text-sm leading-5 text-amber-950"
                              >
                                • {x}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <h4 className="mb-2 text-sm font-bold text-slate-900">
                            Risk / outcome context
                          </h4>
                          <p className="text-sm leading-6 text-slate-700">
                            {s.risk}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching syndrome. Try another gene, tumor type, or site.
              </div>
            )}
          </div>
        </section>

        <Panel
          title="Additional syndromes listed in the source overview"
          accent="amber"
        >
          <p className="mb-3 text-sm leading-6 text-slate-600">
            The supplied source names the following syndromes as having
            established gynecologic cancer associations, but the excerpt does
            not provide detailed entity-level diagnostic criteria for them. They
            are therefore listed here without adding unsupported pathology
            details.
          </p>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {overviewOnly.map(([name, detail]) => (
              <div
                key={name}
                className="rounded-xl border border-amber-100 bg-amber-50/60 p-4"
              >
                <h4 className="font-bold text-slate-900">{name}</h4>
                <p className="mt-1 text-sm leading-5 text-slate-600">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Reporting and communication checklist">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "State the exact tumor histotype and site; describe the morphology that triggered hereditary consideration.",
              "Report tumor-level ancillary findings (MMR IHC, MLH1 methylation, FH/2SC, or tumor sequencing) without equating them with germline status.",
              "For STIC/risk-reducing tubo-ovarian specimens, document the examination protocol and relevant tubal findings.",
              "Recommend genetic counseling/constitutional testing when the phenotype or tumor testing warrants it.",
              "Correlate with age, personal history, family history, multiplicity, and extra-gynecologic tumors.",
              "Avoid assigning a hereditary syndrome based solely on a suggestive histologic pattern.",
            ].map((x, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700">
                  {i + 1}
                </span>
                {x}
              </div>
            ))}
          </div>
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <p>
            <strong className="text-slate-700">Scope note:</strong> This page
            follows the supplied source excerpt. It focuses on BRCA-related
            cancer predisposition, Lynch syndrome, Peutz–Jeghers syndrome,
            DICER1-related tumor predisposition, HLRCC, and Li–Fraumeni
            syndrome. The source excerpt provides only overview-level mentions
            of several additional syndromes; no unsupported entity criteria have
            been added. This educational reference does not replace genetic
            counseling, clinical criteria, or current testing guidelines.
          </p>
          <p className="mt-2">
            PathologyGPS · Female Genital Tract · Genetic Tumor Syndromes
          </p>
        </footer>
      </div>
    </main>
  );
}
