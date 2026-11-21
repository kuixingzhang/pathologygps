"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  profile: string[];
  criteria: string[];
  hist: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Li-Fraumeni Syndrome (TP53-Associated Cancer Predisposition)",
    group: "Core Thoracic Tumor-Predisposition Syndromes",
    clue: "A germline pathogenic TP53 variant in a patient or family with early-onset, multiple primary cancers, especially sarcoma, breast cancer, brain tumor, or adrenocortical carcinoma.",
    summary:
      "Autosomal dominant cancer predisposition with a broad tumor spectrum and important implications for radiation exposure, surveillance, and family testing.",
    profile: [
      "Usually presents in childhood, adolescence, or young adulthood, although cancers may occur at any age.",
      "Affects both sexes; lifetime cancer risk is higher in females, partly because of breast cancer.",
      "Thoracic manifestations include lung adenocarcinoma (often in nonsmokers), thymic carcinoma, and mediastinal or cardiac sarcoma; these are uncommon relative to the core tumor spectrum.",
      "Patients may present with multiple primary malignancies or a striking family history of early-onset cancers.",
    ],
    criteria: [
      "Identify a constitutional pathogenic or likely pathogenic TP53 variant by germline testing.",
      "Assess personal and family history against established LFS/Chompret clinical criteria; clinical criteria guide testing but do not replace molecular confirmation.",
      "Distinguish a germline variant from a somatic tumor variant or clonal hematopoiesis, particularly when variant allele fraction is low or testing uses blood-derived DNA.",
      "A variant of uncertain significance does not establish the syndrome.",
    ],
    hist: [
      "Thoracic tumors arising in LFS generally show the same histopathology as their sporadic counterparts.",
      "No syndrome-specific histologic pattern is established; the diagnostic clue is the clinical context of early-onset or multiple primary cancers.",
    ],
    ihc: [
      "Tumor p53 immunohistochemistry may show aberrant overexpression or complete loss, but neither pattern establishes germline LFS.",
      "A tumor p53 abnormality must be followed by constitutional testing; somatic TP53 alterations are common in many cancers.",
    ],
    molecular: [
      "Germline pathogenic variants in TP53 establish the molecular diagnosis.",
      "Tumor-only sequencing may identify a TP53 variant, but constitutional status requires confirmatory germline testing using an appropriate non-tumor specimen.",
      "EGFR activating alterations have been reported in LFS-associated lung adenocarcinomas, but they are not diagnostic of LFS.",
    ],
    pitfalls: [
      "Do not diagnose LFS from tumor-only TP53 sequencing or p53 immunohistochemistry alone.",
      "Consider clonal hematopoiesis and mosaicism when a TP53 variant is detected in blood at an atypical allele fraction.",
      "Radiation-associated second malignancies are a relevant management concern; the syndrome itself does not change histologic classification of an individual tumor.",
    ],
    differential: [
      {
        name: "BAP1 Tumor Predisposition Syndrome",
        distinction:
          "TP53-associated broad early-onset cancer spectrum, especially sarcoma and breast/brain/adrenocortical tumors, rather than the BAP1-associated combination of mesothelioma, melanocytic tumors, and RCC.",
      },
      {
        name: "Carney Complex",
        distinction:
          "LFS is defined by germline TP53 and early-onset malignancies; Carney complex is recognized by lentigines, myxomas, and endocrine manifestations, usually with PRKAR1A involvement.",
      },
    ],
  },
  {
    name: "BAP1 Tumor Predisposition Syndrome",
    group: "Core Thoracic Tumor-Predisposition Syndromes",
    clue: "Germline BAP1 pathogenic variant with mesothelioma, uveal/cutaneous melanoma, renal cell carcinoma, or characteristic cutaneous melanocytic tumors, often at a younger age.",
    summary:
      "Autosomal dominant predisposition to mesothelioma and several melanocytic and epithelial malignancies; confirmation requires germline testing.",
    profile: [
      "Typically recognized in adults; BAP1-associated mesothelioma is diagnosed at a younger median age (approximately 55–58 years) than sporadic mesothelioma.",
      "Affects both sexes.",
      "Thoracic hallmark is pleural mesothelioma; peritoneal mesothelioma also occurs.",
      "Other associated tumors include uveal and cutaneous melanoma, clear cell renal cell carcinoma, cholangiocarcinoma, basal cell carcinoma, and melanocytic BAP1-mutated atypical intradermal tumors (MBAITs).",
    ],
    criteria: [
      "Demonstrate a heterozygous germline pathogenic or likely pathogenic BAP1 variant.",
      "Consider testing in patients with multiple BAP1-associated tumors or one such tumor plus a first- or second-degree relative with a BAP1-associated tumor.",
      "Loss of nuclear BAP1 expression in a tumor supports BAP1 pathway inactivation and may prompt germline evaluation, but does not by itself prove a hereditary syndrome.",
      "A variant of uncertain significance is not diagnostic.",
    ],
    hist: [
      "Mesotheliomas and other tumors arising in this syndrome are histologically similar to their sporadic counterparts.",
      "Cutaneous MBAITs are benign melanocytic neoplasms and may be a useful clinical clue to the syndrome.",
    ],
    ihc: [
      "Loss of nuclear BAP1 staining in tumor cells, with retained staining in internal non-neoplastic controls, supports somatic BAP1 inactivation.",
      "BAP1 loss in mesothelioma or a melanocytic tumor is a screening clue for germline evaluation, not a substitute for germline testing.",
    ],
    molecular: [
      "Confirm with germline BAP1 sequencing and deletion/duplication analysis on peripheral blood or another appropriate constitutional specimen.",
      "Most reported pathogenic germline variants are sequence variants; copy-number changes are less common.",
    ],
    pitfalls: [
      "BAP1 loss in a tumor is not synonymous with BAP1 tumor predisposition syndrome; sporadic tumors may also lose BAP1.",
      "Do not use tumor IHC alone to classify a patient or relatives as germline carriers.",
    ],
    differential: [
      {
        name: "Li-Fraumeni Syndrome (TP53-Associated Cancer Predisposition)",
        distinction:
          "BAP1 syndrome is characterized by mesothelioma, uveal/cutaneous melanoma, RCC, and MBAITs; LFS has a broader TP53-associated spectrum dominated by early-onset sarcomas and breast cancer.",
      },
      {
        name: "Carney Complex",
        distinction:
          "BAP1 syndrome is associated with mesothelioma and melanocytic/renal tumors; Carney complex features myxomas, lentigines, and endocrine tumors.",
      },
    ],
  },
  {
    name: "Carney Complex",
    group: "Core Thoracic Tumor-Predisposition Syndromes",
    clue: "Spotty lentiginous pigmentation plus cardiac or extracardiac myxomas, endocrine overactivity/neoplasia, or characteristic associated tumors.",
    summary:
      "Autosomal dominant multisystem syndrome most often caused by PRKAR1A inactivation, with cardiac myxomas, pigmented lesions, and endocrine manifestations.",
    profile: [
      "Manifestations often begin around puberty; primary pigmented nodular adrenocortical disease commonly presents in the second or third decade.",
      "Affects both sexes; large cell calcifying Sertoli cell tumors occur in boys and men.",
      "Cardiac myxomas occur across the age spectrum and are present in more than half of affected individuals.",
      "Other sites include skin and mucosa, endocrine organs, testes, thyroid, breast, bone, and peripheral nerve sheath.",
    ],
    criteria: [
      "Establish at least two major diagnostic criteria, or one major criterion plus a supplemental criterion, using accepted Carney complex criteria.",
      "Major manifestations include spotty pigmentation, cardiac/cutaneous/breast myxomas, primary pigmented nodular adrenocortical disease, acromegaly from GH-producing pituitary adenoma, large cell calcifying Sertoli cell tumor, thyroid tumors, psammomatous melanotic schwannoma, and osteochondromyxoma.",
      "A germline pathogenic PRKAR1A variant supports the diagnosis; absence of an identified variant does not exclude clinically established Carney complex.",
      "Evaluate for affected relatives and de novo disease.",
    ],
    hist: [
      "Cardiac and extracardiac myxomas have the same histologic features as their sporadic counterparts.",
      "Other associated neoplasms retain their site-specific morphology; the syndrome is recognized by the constellation of lesions rather than a single pathognomonic histologic pattern.",
    ],
    ihc: [
      "Loss of PRKAR1A expression in a tumor may raise suspicion for Carney complex and should prompt germline evaluation.",
      "PRKAR1A immunohistochemistry is supportive rather than independently diagnostic.",
    ],
    molecular: [
      "Germline inactivating PRKAR1A variants account for approximately two thirds of cases; sequencing detects most, with targeted deletion/duplication analysis identifying additional cases.",
      "A second susceptibility locus at 2p16 has been implicated, but the responsible gene remains unidentified.",
    ],
    pitfalls: [
      "Do not confuse Carney complex with Carney triad, which is non-hereditary and comprises GIST, pulmonary chondroma, and paraganglioma.",
      "A cardiac myxoma, particularly if recurrent, multiple, or occurring in a young patient, should prompt assessment for Carney complex.",
    ],
    differential: [
      {
        name: "Li-Fraumeni Syndrome (TP53-Associated Cancer Predisposition)",
        distinction:
          "Carney complex is defined by myxomas, spotty pigmentation, and endocrinopathy; LFS is defined by germline TP53 and a broad early-onset malignancy spectrum.",
      },
      {
        name: "BAP1 Tumor Predisposition Syndrome",
        distinction:
          "Carney complex features cardiac/cutaneous myxomas and endocrine disease; BAP1 syndrome features mesothelioma, melanocytic tumors, and clear cell RCC.",
      },
    ],
  },
  {
    name: "Germline EGFR p.T790M-Associated Lung Cancer Predisposition",
    group: "Additional Hereditary Thoracic Tumor-Predisposition Conditions",
    clue: "A pretreatment lung adenocarcinoma or family history of lung adenocarcinoma with EGFR p.T790M detected before exposure to an EGFR tyrosine kinase inhibitor.",
    summary:
      "Emerging autosomal dominant lung cancer predisposition associated with constitutional EGFR p.T790M; penetrance and lifetime risk remain incompletely defined.",
    profile: [
      "Reported across adulthood; the precise age distribution and lifetime penetrance are not established.",
      "Affects both sexes; lung adenocarcinoma may occur in never-smokers.",
      "Primarily involves the lung, often with adenocarcinoma.",
      "A family history of lung cancer or an EGFR p.T790M variant in a pretreatment specimen should raise suspicion.",
    ],
    criteria: [
      "Identify EGFR p.T790M in a tumor or other specimen obtained before EGFR tyrosine kinase inhibitor therapy.",
      "Confirm constitutional status with germline testing; approximately half of de novo EGFR p.T790M findings have been estimated to be germline.",
      "Interpret p.T790M in the context of treatment history because it is a well-known acquired resistance mutation after EGFR inhibitor therapy.",
      "Familial penetrance and lifetime risk are not sufficiently characterized to use a definitive clinical threshold.",
    ],
    hist: [
      "Associated lung cancers are generally lung adenocarcinomas and are not defined by a unique histologic pattern.",
      "The tumor may harbor an additional EGFR-activating mutation.",
    ],
    ihc: [
      "No syndrome-specific immunohistochemical profile is established; classify the lung tumor by conventional morphologic and immunophenotypic criteria.",
    ],
    molecular: [
      "Germline EGFR p.T790M is the best-characterized variant in this emerging hereditary lung cancer predisposition.",
      "Other germline EGFR variants within or adjacent to the kinase domain have been reported as potential predisposition variants.",
      "Germline ERBB2 mutations have also been associated with rare familial lung cancer predisposition, but the clinical spectrum is less well characterized.",
    ],
    pitfalls: [
      "Do not interpret EGFR p.T790M as germline without constitutional confirmation, particularly after EGFR inhibitor exposure.",
      "Do not infer a defined penetrance estimate or surveillance threshold from the limited available data.",
    ],
    differential: [
      {
        name: "Peutz-Jeghers Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "DICER1 Tumor Predisposition Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Tuberous Sclerosis Complex",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Carney Triad",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
    ],
  },
  {
    name: "Peutz-Jeghers Syndrome",
    group: "Additional Hereditary Thoracic Tumor-Predisposition Conditions",
    clue: "Mucocutaneous pigmentation and gastrointestinal hamartomatous polyps with a germline STK11 pathogenic variant; lung carcinoma is an uncommon associated malignancy.",
    summary:
      "Autosomal dominant STK11-associated syndrome with gastrointestinal polyposis, characteristic pigmentation, and increased risk of multiple carcinomas.",
    profile: [
      "Often recognized in childhood or adolescence because of pigmentation and gastrointestinal polyps; cancer risk increases with age.",
      "Affects both sexes.",
      "Thoracic manifestation is an increased risk of lung carcinoma, although it is not the defining tumor of the syndrome.",
      "Clinical presentation commonly includes perioral/buccal pigmentation and gastrointestinal polyps.",
    ],
    criteria: [
      "Demonstrate a germline pathogenic STK11 variant, or establish the syndrome using accepted clinical criteria.",
      "Integrate characteristic mucocutaneous pigmentation and gastrointestinal hamartomatous polyposis with personal and family history.",
      "Do not diagnose the syndrome from lung carcinoma alone.",
    ],
    hist: [
      "Gastrointestinal polyps classically show arborizing smooth muscle extending into the lamina propria beneath the epithelium.",
      "Associated lung carcinomas are classified and evaluated according to their usual histologic criteria.",
    ],
    ihc: [
      "No thoracic tumor-specific immunophenotype establishes Peutz-Jeghers syndrome.",
      "STK11/LKB1 loss in a tumor may support pathway inactivation but requires germline confirmation for hereditary classification.",
    ],
    molecular: [
      "Germline pathogenic variants in STK11 (LKB1) establish the molecular basis of the syndrome.",
    ],
    pitfalls: [
      "Do not confuse Peutz-Jeghers syndrome with other pigmentary or gastrointestinal polyposis syndromes; the STK11 result and characteristic polyp morphology are useful discriminators.",
    ],
    differential: [
      {
        name: "Germline EGFR p.T790M-Associated Lung Cancer Predisposition",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "DICER1 Tumor Predisposition Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Tuberous Sclerosis Complex",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Carney Triad",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
    ],
  },
  {
    name: "DICER1 Tumor Predisposition Syndrome",
    group: "Additional Hereditary Thoracic Tumor-Predisposition Conditions",
    clue: "Pleuropulmonary blastoma or lung cysts in a child, particularly with cystic nephroma, Sertoli-Leydig cell tumor, or thyroid neoplasia.",
    summary:
      "Autosomal dominant predisposition caused by germline loss-of-function DICER1 variants, with a characteristic spectrum of pediatric and young-adult tumors.",
    profile: [
      "Most characteristic thoracic presentation is in infancy or childhood.",
      "Affects both sexes.",
      "Thoracic manifestations include pleuropulmonary blastoma and lung cysts.",
      "Associated tumors include cystic nephroma, Sertoli-Leydig cell tumor, and thyroid neoplasms.",
    ],
    criteria: [
      "Identify a germline pathogenic loss-of-function DICER1 variant in an appropriate clinical context.",
      "Recognize pleuropulmonary blastoma as a major sentinel tumor and assess for associated neoplasms in other organ systems.",
      "A second, acquired DICER1 variant is commonly present in the tumor, often a missense alteration affecting the RNase IIIb domain.",
    ],
    hist: [
      "Pleuropulmonary blastoma has cystic, solid, or mixed patterns depending on tumor type and stage; interpret in the context of age and associated lesions.",
      "Lung cysts may be an early manifestation and warrant clinical correlation.",
    ],
    ihc: [
      "No single immunohistochemical marker establishes DICER1 tumor predisposition syndrome; diagnosis is molecular and clinicopathologic.",
    ],
    molecular: [
      "The typical mechanism is a germline loss-of-function variant with a second somatic hit in the tumor.",
      "The acquired second hit is often a missense variant in the DICER1 RNase IIIb domain.",
    ],
    pitfalls: [
      "Do not assume every pediatric lung cyst is pleuropulmonary blastoma; integrate imaging, histology, age, and DICER1 status.",
    ],
    differential: [
      {
        name: "Germline EGFR p.T790M-Associated Lung Cancer Predisposition",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Peutz-Jeghers Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Tuberous Sclerosis Complex",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Carney Triad",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
    ],
  },
  {
    name: "Tuberous Sclerosis Complex",
    group: "Additional Hereditary Thoracic Tumor-Predisposition Conditions",
    clue: "Multisystem hamartomatous disease with characteristic skin, brain, kidney, cardiac, and pulmonary findings; consider TSC in pulmonary LAM or PEComa.",
    summary:
      "Autosomal dominant disorder caused by TSC1 or TSC2 loss-of-function variants, resulting in mTOR pathway activation.",
    profile: [
      "Often recognized in infancy or childhood, although manifestations vary widely and may be diagnosed in adulthood.",
      "Affects both sexes.",
      "Thoracic manifestations include pulmonary lymphangioleiomyomatosis and PEComa; cardiac rhabdomyomas are strongly associated, especially in children.",
      "Other common sites include brain, skin, and kidneys.",
    ],
    criteria: [
      "Establish clinical diagnosis using accepted major and minor features and/or identify a germline pathogenic TSC1 or TSC2 variant.",
      "Consider TSC in patients with LAM, pulmonary PEComa, or cardiac rhabdomyoma, particularly when additional multisystem findings are present.",
      "A pathogenic variant in either TSC1 or TSC2 is sufficient for molecular diagnosis.",
    ],
    hist: [
      "Pulmonary LAM shows proliferation of abnormal smooth muscle-like cells along lymphatics, vessels, and airways, often with cystic lung destruction.",
      "Pulmonary PEComas show perivascular epithelioid cell differentiation and may express melanocytic and smooth muscle markers.",
      "Cardiac rhabdomyomas are often multiple and may regress during childhood.",
    ],
    ihc: [
      "LAM and PEComa typically express melanocytic markers (such as HMB45 or Melan-A) and smooth muscle markers, interpreted as a panel.",
      "No tumor immunostain alone establishes germline TSC.",
    ],
    molecular: [
      "Germline loss-of-function variants in TSC1 or TSC2 disrupt the hamartin–tuberin complex and activate mTOR signaling.",
      "Tumor-specific second-hit inactivation may occur in TSC-associated lesions.",
    ],
    pitfalls: [
      "LAM and PEComa can occur sporadically as well as in TSC; assess for clinical criteria and germline findings.",
      "Do not mistake the presence of a single TSC-associated tumor for a confirmed hereditary syndrome.",
    ],
    differential: [
      {
        name: "Germline EGFR p.T790M-Associated Lung Cancer Predisposition",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Peutz-Jeghers Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "DICER1 Tumor Predisposition Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Carney Triad",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
    ],
  },
  {
    name: "Carney Triad",
    group: "Additional Hereditary Thoracic Tumor-Predisposition Conditions",
    clue: "The characteristic combination of gastrointestinal stromal tumor, pulmonary chondroma, and paraganglioma; this is not a hereditary syndrome.",
    summary:
      "Non-hereditary tumor association, classically affecting young women, with SDHC promoter hypermethylation in associated tumors.",
    profile: [
      "Usually presents in adolescents or young adults; predominantly affects females.",
      "Pulmonary chondroma is the characteristic thoracic lesion.",
      "Associated tumors are gastrointestinal stromal tumor and paraganglioma.",
      "The complete triad may develop metachronously; not all components are necessarily present at initial diagnosis.",
    ],
    criteria: [
      "Recognize the association of pulmonary chondroma, GIST, and paraganglioma; any two components strongly support the diagnosis in the appropriate setting.",
      "Establish each component by its own morphologic and immunophenotypic criteria.",
      "Do not require a germline pathogenic variant; Carney triad is non-hereditary.",
    ],
    hist: [
      "Pulmonary chondroma is a benign cartilage-forming tumor, often well circumscribed.",
      "GIST and paraganglioma show their respective conventional morphologic patterns.",
    ],
    ihc: [
      "Use site-specific immunohistochemical panels for chondroma, GIST, and paraganglioma; no single immunophenotype defines the triad.",
    ],
    molecular: [
      "SDHC promoter hypermethylation has been identified in the tumors; this is an epigenetic event rather than evidence of a germline SDHC mutation.",
    ],
    pitfalls: [
      "Do not confuse Carney triad with Carney complex: the former is non-hereditary and features GIST, pulmonary chondroma, and paraganglioma; the latter is associated with PRKAR1A, myxomas, pigmentation, and endocrinopathy.",
    ],
    differential: [
      {
        name: "Germline EGFR p.T790M-Associated Lung Cancer Predisposition",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Peutz-Jeghers Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "DICER1 Tumor Predisposition Syndrome",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
      {
        name: "Tuberous Sclerosis Complex",
        distinction:
          "Distinguish by the defining clinical tumor spectrum and confirmatory molecular finding.",
      },
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="mb-2 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function ThoracicGeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    entities[0].name,
    entities[1].name,
    entities[2].name,
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (
            e.name +
            " " +
            e.group +
            " " +
            e.clue +
            " " +
            e.summary +
            " " +
            e.profile.join(" ") +
            " " +
            e.criteria.join(" ") +
            " " +
            e.hist.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.differential.map((d) => d.name + " " + d.distinction).join(" ")
          )
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((v) =>
      v.includes(name) ? v.filter((x) => x !== name) : [...v, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Thoracic Pathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Genetic Tumor-Predisposition Syndromes of the Thorax
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to hereditary and familial
          tumor-predisposition conditions with thoracic manifestations,
          emphasizing clinical recognition, essential diagnostic criteria, tumor
          morphology, immunohistochemistry, molecular confirmation, and key
          differential diagnoses.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Recognize the Pattern, Confirm the Germline
          Finding
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Identify the tumor pattern",
              "Consider age, multiplicity, unusual tumor combinations, and personal/family history. A thoracic tumor may be the first clue to a multisystem syndrome.",
            ],
            [
              "2. Separate tumor phenotype from syndrome diagnosis",
              "Histology and tumor IHC characterize the neoplasm; constitutional testing establishes a hereditary predisposition when indicated.",
            ],
            [
              "3. Interpret tumor sequencing cautiously",
              "A pathogenic variant detected in tumor-only sequencing may be somatic. Confirm constitutional status using an appropriate germline specimen.",
            ],
            [
              "4. Use IHC as a screening clue",
              "BAP1 or PRKAR1A loss may prompt germline evaluation, but neither alone establishes a hereditary syndrome.",
            ],
            [
              "5. Recognize non-hereditary associations",
              "Carney triad is non-hereditary and must be distinguished from PRKAR1A-associated Carney complex.",
            ],
            [
              "6. Refer for genetic counseling",
              "A confirmed germline pathogenic variant has implications for relatives, surveillance, and sometimes treatment selection.",
            ],
          ].map(([h, d]) => (
            <li
              key={h}
              className="rounded-xl border border-teal-100 bg-white p-3"
            >
              <div className="font-semibold text-slate-900">{h}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Critical principle:</strong> A tumor-associated alteration or
          abnormal IHC result does not by itself establish a germline syndrome.
          Confirm constitutional status and interpret the result with the
          clinical phenotype and family history.
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="syndrome-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search syndromes and differential points
          </label>
          <input
            id="syndrome-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: TP53, BAP1, PRKAR1A, mesothelioma, LAM..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-80">
          <label
            htmlFor="syndrome-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="syndrome-group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setOpen(allOpen ? [] : filtered.map((e) => e.name))}
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} syndromes / predisposition entities</span>
        <span>
          Expand a card for diagnostic criteria, morphology, IHC, and
          differential diagnosis.
        </span>
      </div>

      <div className="space-y-3">
        {filtered.map((e, i) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700">
                    Key clue: {e.clue}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {e.summary}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Clinical Profile">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.profile.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.criteria.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.hist.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      {e.molecular && (
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      )}
                    </div>
                    <div>
                      <Section title="Immunohistochemistry">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, j) => (
                            <div
                              key={j}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                            >
                              <div className="text-sm font-bold text-slate-900">
                                {d.name}
                              </div>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {d.distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Section>
                    </div>
                  </div>
                  {e.pitfalls && (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
                        {e.pitfalls.map((x, j) => (
                          <li key={j}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching diagnoses. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for anatomic pathology. Interpret
        molecular and immunohistochemical findings in conjunction with
        morphology, clinical history, and appropriate genetic counseling.
      </footer>
    </main>
  );
}
