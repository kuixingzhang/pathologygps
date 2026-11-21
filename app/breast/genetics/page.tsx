import Link from "next/link";

type Syndrome = {
  id: string;
  name: string;
  gene: string;
  risk: string;
  clues: string[];
  pathology: string[];
  testing: string[];
  pearl: string;
};

const syndromes: Syndrome[] = [
  {
    id: "brca",
    name: "BRCA-Related Hereditary Cancer",
    gene: "BRCA1 / BRCA2",
    risk: "High-penetrance autosomal dominant predisposition to breast and tubo-ovarian cancer; also associated with prostate and pancreatic cancer.",
    clues: [
      "Consider with young-onset or bilateral breast cancer, a relevant family history, male breast cancer, or triple-negative disease.",
      "BRCA1-associated tumors are more often high-grade, triple-negative, and lymphocyte-rich.",
      "BRCA2-associated tumors are more often hormone receptor–positive; no single morphology reliably identifies a carrier.",
    ],
    pathology: [
      "BRCA1-associated tumors may show invasive carcinoma of no special type, a medullary pattern, or metaplastic carcinoma.",
      "A pushing border, prominent lymphoplasmacytic infiltrate, marked atypia, and high mitotic activity can support suspicion but are not diagnostic.",
      "Pathology cannot establish hereditary status; germline testing is required.",
    ],
    testing: [
      "A germline pathogenic or likely pathogenic variant establishes the molecular diagnosis.",
      "A variant of uncertain significance (VUS) should not be used by itself to direct clinical management.",
      "Homologous recombination deficiency may predict sensitivity to PARP inhibitors in an appropriate clinical setting.",
    ],
    pearl:
      "Do not use morphology, basal markers, or triple-negative status alone to assign BRCA status.",
  },
  {
    id: "pten",
    name: "PTEN Hamartoma Tumor Syndrome",
    gene: "PTEN",
    risk: "Autosomal dominant syndrome with hamartomas and increased risks of breast, thyroid, endometrial, renal, and other cancers.",
    clues: [
      "Cowden syndrome is associated with macrocephaly, mucocutaneous lesions, and multiple hamartomas.",
      "Benign breast findings may include hamartomas, fibroadenomas, adenosis, ductal hyperplasia, papillomatosis, and fibrocystic change.",
      "Lifetime breast cancer risk in women may be as high as approximately 85% in reported series.",
    ],
    pathology: [
      "Breast cancers are usually conventional invasive carcinoma of no special type, often with associated DCIS.",
      "Apocrine differentiation has been reported, but a specific breast cancer morphology is not consistently present.",
    ],
    testing: [
      "Diagnosis is supported by a germline pathogenic PTEN variant and clinical features within the PHTS spectrum.",
      "Clinical criteria and genetics consultation help determine who should undergo testing.",
    ],
    pearl:
      "A hamartomatous or unusual benign breast lesion may be a clue only when interpreted with the patient's broader phenotype.",
  },
  {
    id: "atm",
    name: "ATM-Related Cancer Predisposition",
    gene: "ATM",
    risk: "Heterozygous pathogenic variants confer a moderate increase in breast cancer risk. Biallelic pathogenic variants cause ataxia-telangiectasia.",
    clues: [
      "Ataxia-telangiectasia features progressive ataxia, telangiectasia, immunodeficiency, and increased malignancy risk.",
      "Breast cancer risk is elevated in heterozygous carriers; risk may vary substantially by variant.",
    ],
    pathology: [
      "No reproducible, distinctive breast tumor morphology has been established.",
      "Reported tumors are often hormone receptor–positive and may show a luminal phenotype; a BRCA1-like lymphocyte-rich pattern is not typical.",
    ],
    testing: [
      "Confirm a suspected hereditary predisposition with germline testing and variant-specific interpretation.",
      "Do not assume ATM-associated tumors have homologous recombination deficiency or will respond to PARP inhibitors.",
    ],
    pearl:
      "Distinguish heterozygous breast cancer susceptibility from biallelic ATM-related ataxia-telangiectasia.",
  },
  {
    id: "tp53",
    name: "Li-Fraumeni Syndrome",
    gene: "TP53",
    risk: "Autosomal dominant predisposition to early and multiple primary cancers, including breast cancer, soft-tissue and bone sarcomas, brain tumors, and adrenocortical carcinoma.",
    clues: [
      "Very early-onset breast cancer, especially before age 31, may warrant consideration even without a striking family history.",
      "Look for multiple primary tumors and a family history of core Li-Fraumeni cancers.",
      "Breast cancer risk is high, and many affected patients develop cancer at young ages.",
    ],
    pathology: [
      "Most associated breast cancers are invasive carcinoma of no special type.",
      "HER2-positive disease is overrepresented; DCIS and malignant phyllodes tumors are also reported.",
    ],
    testing: [
      "Consider germline TP53 testing using established clinical criteria and genetics consultation.",
      "Germline findings must be distinguished from somatic variants and clonal hematopoiesis when interpreting tumor-only sequencing.",
    ],
    pearl:
      "A confirmed TP53 germline variant affects surveillance and treatment planning, including careful consideration of radiation exposure.",
  },
  {
    id: "chek2",
    name: "CHEK2-Related Breast Cancer Predisposition",
    gene: "CHEK2",
    risk: "Moderate-penetrance predisposition; risk depends on variant type and family history.",
    clues: [
      "The best-studied truncating variant is c.1100del.",
      "Risk is more strongly associated with ER-positive than ER-negative breast cancer.",
      "Some variants may also be associated with contralateral breast cancer risk.",
    ],
    pathology: [
      "No consistent, pathognomonic morphology has been established.",
      "Many reported tumors are hormone receptor–positive; reported luminal A/B associations vary by variant.",
    ],
    testing: [
      "A germline pathogenic variant supports the diagnosis; interpret missense variants according to current clinical classification.",
      "Do not treat every CHEK2 variant as conferring the same level of risk.",
    ],
    pearl:
      "Variant-specific interpretation matters; a VUS is not equivalent to a pathogenic variant.",
  },
  {
    id: "cdh1",
    name: "Hereditary Diffuse Gastric and Lobular Breast Cancer",
    gene: "CDH1 / CTNNA1",
    risk: "Associated primarily with diffuse gastric cancer and invasive lobular breast carcinoma, particularly with CDH1 pathogenic variants.",
    clues: [
      "Consider in families with diffuse gastric cancer and/or lobular breast cancer, especially at younger ages.",
      "CDH1 carriers have a substantial lifetime risk of lobular breast cancer.",
      "CTNNA1-associated gastric cancer risk is recognized, while the magnitude of lobular breast cancer risk is less certain.",
    ],
    pathology: [
      "The characteristic breast tumor type is invasive lobular carcinoma.",
      "Loss of E-cadherin expression is a hallmark of lobular differentiation but does not by itself prove a germline CDH1 variant.",
    ],
    testing: [
      "Germline testing is guided by personal and family history and appropriate clinical criteria.",
      "A pathogenic germline variant should prompt genetics-led assessment of gastric and breast cancer risks.",
    ],
    pearl:
      "Do not equate loss of E-cadherin in a tumor with hereditary CDH1 syndrome.",
  },
  {
    id: "palb2",
    name: "PALB2-Related Cancer Predisposition",
    gene: "PALB2",
    risk: "Important breast cancer susceptibility gene; pathogenic variants can confer substantial lifetime risk, modified by family history and other factors.",
    clues: [
      "Consider in familial breast cancer and in patients meeting criteria for hereditary cancer testing.",
      "PALB2 participates in the BRCA-related DNA repair pathway.",
    ],
    pathology: [
      "No specific histologic appearance is sufficient to identify a PALB2 carrier.",
      "PALB2-associated tumors are reported more often in ER-negative and/or triple-negative groups than some moderate-risk gene–associated tumors.",
    ],
    testing: [
      "Diagnosis requires a germline pathogenic or likely pathogenic PALB2 variant.",
      "Risk estimates and management should be individualized using current guidance and family history.",
    ],
    pearl:
      "PALB2 is a key high-risk gene and should not be treated as equivalent to a low-penetrance risk allele.",
  },
  {
    id: "stk11",
    name: "Peutz-Jeghers Syndrome",
    gene: "STK11",
    risk: "Autosomal dominant syndrome with mucocutaneous pigmentation, gastrointestinal hamartomatous polyposis, and increased risk of breast and several other cancers.",
    clues: [
      "Characteristic findings include mucocutaneous melanin pigmentation and gastrointestinal polyposis.",
      "Breast cancer risk in women is high and may be in the range reported for BRCA1/BRCA2 carriers.",
    ],
    pathology: [
      "Breast cancers do not have a specific, reliably diagnostic histologic phenotype.",
    ],
    testing: [
      "A germline pathogenic STK11 variant supports molecular confirmation.",
      "Management includes syndrome-specific surveillance for breast, gastrointestinal, pancreatic, gynecologic, and other cancers.",
    ],
    pearl:
      "Recognize the syndromic phenotype; the breast tumor itself may look like a sporadic carcinoma.",
  },
  {
    id: "nf1",
    name: "Neurofibromatosis Type 1",
    gene: "NF1",
    risk: "Autosomal dominant tumor-predisposition syndrome; women with NF1 have increased breast cancer risk, particularly at younger ages.",
    clues: [
      "Look for café-au-lait macules, axillary or inguinal freckling, neurofibromas, optic pathway glioma, Lisch nodules, or characteristic bone lesions.",
      "Breast cancer may occur at younger ages and may have a less favorable outcome.",
    ],
    pathology: [
      "Most associated breast cancers are invasive carcinoma of no special type; lobular tumors also occur.",
      "No consistent ER, PR, or HER2 phenotype has been established.",
    ],
    testing: [
      "Diagnosis integrates clinical criteria and/or a pathogenic germline NF1 variant.",
      "Breast cancer screening should follow appropriate risk-based guidance.",
    ],
    pearl:
      "The cutaneous and neurologic phenotype may be more informative than the breast tumor morphology.",
  },
];

const workflow = [
  {
    title: "1. Recognize the trigger",
    body: "Young age, bilateral or multiple primary cancers, male breast cancer, a relevant family history, or a syndrome-associated phenotype.",
  },
  {
    title: "2. Interpret the tumor in context",
    body: "Use histologic type, grade, ER/PR/HER2 status, and lymphocytic response as clues—not as proof of a germline variant.",
  },
  {
    title: "3. Refer for germline assessment",
    body: "Apply current testing criteria and involve genetics professionals. Tumor-only sequencing does not establish germline status.",
  },
  {
    title: "4. Interpret the result correctly",
    body: "Separate pathogenic/likely pathogenic variants from VUSs. A VUS should not independently determine treatment or preventive surgery.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default function BreastGeneticsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav
          className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/breast" className="hover:text-teal-700">
            Breast
          </Link>
          <span>/</span>
          <span className="text-slate-800">Genetics</span>
        </nav>

        <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-sm">
          <div className="grid gap-8 px-6 py-9 sm:px-10 sm:py-12 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                Breast Pathology • Diagnostic Reference
              </p>
              <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Hereditary Breast Cancer Genetics
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                A concise, pathology-focused guide to inherited breast cancer
                susceptibility: when to suspect a syndrome, what morphology
                can—and cannot—tell you, and how to interpret germline findings.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Germline risk",
                  "Morphology clues",
                  "IHC context",
                  "VUS interpretation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-teal-200">
                Core principle
              </p>
              <p className="mt-2 text-lg leading-7 text-white">
                Histology can raise suspicion. Germline testing and clinical
                context establish hereditary predisposition.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "High penetrance",
              t: "BRCA1, BRCA2, PALB2, TP53, PTEN, CDH1, STK11",
              d: "Risk and management depend on the gene, variant, and family context.",
            },
            {
              n: "Moderate risk",
              t: "ATM, CHEK2 and others",
              d: "Penetrance varies; evidence and recommendations are gene- and variant-specific.",
            },
            {
              n: "Polygenic risk",
              t: "Many common low-penetrance alleles",
              d: "Combined effects may refine risk estimates but do not replace assessment of high-risk variants.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                {item.n}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-950">
                {item.t}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.d}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <SectionTitle
            eyebrow="Diagnostic workflow"
            title="From morphology to hereditary risk"
            description="Use pathology findings as part of a broader assessment—not as a stand-alone genetic test."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {workflow.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle
            eyebrow="Quick comparison"
            title="Genes and the clues that matter"
            description="These are associations, not diagnostic rules. Tumor phenotype overlaps substantially with sporadic breast cancer."
          />
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[760px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Gene / syndrome</th>
                  <th className="px-4 py-3 font-semibold">Main association</th>
                  <th className="px-4 py-3 font-semibold">Pathology clue</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "BRCA1",
                    "Breast, tubo-ovarian, prostate, pancreatic cancers",
                    "Often high-grade, triple-negative, lymphocyte-rich",
                  ],
                  [
                    "BRCA2",
                    "Breast, tubo-ovarian, prostate, pancreatic cancers",
                    "Often ER-positive; no specific morphology",
                  ],
                  [
                    "PTEN",
                    "Breast, thyroid, endometrial, renal cancers; hamartomas",
                    "Benign hamartomatous lesions may be a clue",
                  ],
                  [
                    "TP53",
                    "Early multiple primaries; sarcoma, brain, adrenal, breast",
                    "HER2-positive breast cancer is overrepresented",
                  ],
                  [
                    "CHEK2 / ATM",
                    "Moderate breast cancer susceptibility",
                    "Often hormone receptor–positive; no pathognomonic pattern",
                  ],
                  [
                    "CDH1",
                    "Diffuse gastric and lobular breast cancer",
                    "Invasive lobular carcinoma",
                  ],
                  [
                    "PALB2",
                    "Familial breast cancer; DNA repair pathway",
                    "No specific morphology; ER-negative/TNBC association reported",
                  ],
                  [
                    "STK11",
                    "Peutz-Jeghers syndrome; breast and GI/pancreatic cancers",
                    "Syndromic mucocutaneous pigmentation and polyposis",
                  ],
                  [
                    "NF1",
                    "Neurofibromatosis; increased breast cancer risk",
                    "Often NST; clinical phenotype is key",
                  ],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-100 align-top"
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {row[0]}
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {row[1]}
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle
            eyebrow="Syndrome profiles"
            title="Practical diagnostic notes"
            description="Select the relevant syndrome profile for concise clinical, morphologic, and molecular reminders."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {syndromes.map((item) => (
              <article
                id={item.id}
                key={item.id}
                className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                      {item.gene}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      {item.name}
                    </h3>
                  </div>
                  <a
                    href={`#${item.id}`}
                    className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 hover:border-teal-300 hover:text-teal-700"
                  >
                    Profile
                  </a>
                </div>
                <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                  {item.risk}
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Clinical clues
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                      {item.clues.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-950">
                      Pathology
                    </h4>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                      {item.pathology.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <h4 className="text-sm font-semibold text-slate-950">
                    Molecular testing and interpretation
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                    {item.testing.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 rounded-xl border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
                  <strong>Diagnostic pearl:</strong> {item.pearl}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <SectionTitle
              eyebrow="Beyond single genes"
              title="Polygenic risk scores"
            />
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li>
                • Common low-penetrance variants each contribute a small effect;
                their combined contribution can be meaningful.
              </li>
              <li>
                • A polygenic risk score (PRS) combines weighted risk alleles
                and may refine risk estimates alongside family history, breast
                density, and other clinical factors.
              </li>
              <li>
                • The 313-variant PRS has been extensively studied, particularly
                in people of European ancestry. Performance and calibration may
                differ across ancestry groups.
              </li>
              <li>
                • PRS is a risk-stratification tool, not a diagnosis of a
                hereditary cancer syndrome.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <SectionTitle
              eyebrow="Sign-out checklist"
              title="Before you close the case"
            />
            <ul className="space-y-3 text-sm leading-6 text-slate-600">
              <li>
                □ Confirm age, personal history, bilateral disease, and multiple
                primary cancers.
              </li>
              <li>
                □ Review relevant family history, including breast, ovarian,
                pancreatic, prostate, diffuse gastric cancer, and sarcoma.
              </li>
              <li>
                □ Document histologic type, grade, ER, PR, and HER2 status
                accurately.
              </li>
              <li>
                □ Recommend genetics evaluation when indicated by current
                criteria or clinical context.
              </li>
              <li>
                □ Distinguish germline results from tumor-only findings and
                interpret VUSs cautiously.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-2xl border border-teal-100 bg-teal-50 p-6">
          <h2 className="text-lg font-semibold text-slate-950">
            Key takeaways
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <p className="text-sm leading-6 text-slate-700">
              1. Hereditary risk is established by germline testing and clinical
              interpretation—not morphology alone.
            </p>
            <p className="text-sm leading-6 text-slate-700">
              2. Tumor subtype can guide suspicion, but phenotype overlaps and
              is never fully specific.
            </p>
            <p className="text-sm leading-6 text-slate-700">
              3. A VUS is not a pathogenic result; management should follow
              current guidance and expert review.
            </p>
          </div>
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 text-xs text-slate-500">
          <p>PathologyGPS • Breast Genetics</p>
          <div className="flex gap-4">
            <Link
              href="/breast/non-invasive-neoplasia"
              className="hover:text-teal-700"
            >
              Non-invasive neoplasia
            </Link>
            <Link
              href="/breast/common-invasive-carcinoma"
              className="hover:text-teal-700"
            >
              Common invasive carcinoma
            </Link>
            <Link
              href="/breast/rare-invasive-neoplasms"
              className="hover:text-teal-700"
            >
              Rare invasive neoplasms
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
