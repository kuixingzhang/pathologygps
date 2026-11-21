"use client";

import { useMemo, useState } from "react";
import PathologySearch from "@/components/PathologySearch";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinicalProfile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Parathyroid Hyperplasia",
    group: "Parathyroid Proliferative Disorders",
    clue: "Require involvement of multiple glands and interpret the architecture in the clinical setting of secondary or tertiary hyperparathyroidism.",
    summary:
      "A non-neoplastic increase in parathyroid parenchymal cells, most often a compensatory response to chronic renal disease; advanced tertiary disease may show clonal and highly nodular growth.",
    clinicalProfile: [
      "Any age; secondary disease is common in patients with chronic kidney disease, particularly those receiving long-term dialysis.",
      "Both sexes; no consistent sex predilection is established.",
      "Multiple eutopic or ectopic parathyroid glands are involved, often asymmetrically.",
      "Secondary disease is associated with hypocalcemia, hyperphosphatemia, and reduced active vitamin D; tertiary disease presents with autonomous PTH secretion and hypercalcemia after longstanding secondary disease.",
    ],
    criteria: [
      "Demonstrate increased parathyroid parenchymal cellularity in more than one gland.",
      "Show reduced stromal and intracellular adipose tissue relative to normal parathyroid tissue.",
      "Correlate with a recognized physiologic stimulus, especially chronic renal insufficiency, vitamin D deficiency, or malabsorption.",
      "Classify as secondary when the proliferation is compensatory; classify as tertiary when longstanding secondary hyperparathyroidism has progressed to autonomous PTH secretion.",
      "Do not classify MEN-associated or other hereditary multiglandular nodular disease as primary hyperplasia by default; these lesions are generally multiple adenomas.",
      "In renal failure-associated disease, do not diagnose carcinoma on the basis of nodularity, fibrosis, pseudoinvasion, cytological atypia, or increased proliferation alone.",
    ],
    histology: [
      "Chief-cell hyperplasia may be diffuse, nodular, or mixed, with increased parenchymal cells and depletion of stromal fat.",
      "Secondary and tertiary hyperplasia commonly involve multiple glands asymmetrically.",
      "Growth patterns include diffuse, trabecular, acinar, pseudofollicular, and cord-like arrangements.",
      "Increasing disease severity is associated with greater nodularity; advanced glands may show hemorrhage, cyst formation, fibrosis, and chronic inflammation.",
      "Water-clear cell hyperplasia is a rare diffuse proliferation composed of clear cells with distinct cell borders.",
      "Tertiary hyperplasia may show striking architectural atypia, pseudoinvasion, and a high proliferation index despite the absence of carcinoma-defining invasion.",
      "Parathyromatosis may produce multiple fibrotic deposits of parathyroid tissue in the neck or mediastinum, sometimes with a buckshot pattern of fat entrapment.",
    ],
    ihc: [
      "PTH and GATA3 support parathyroid differentiation when the site of origin is uncertain.",
      "Loss of menin may support MEN1-associated disease but is not specific and can occur in sporadic lesions.",
      "Parafibromin, menin, and p27 may help screen for CDC73-, MEN1-, and CDKN1B-related disease, respectively; interpret in the clinical and morphologic context.",
      "No immunohistochemical marker independently establishes carcinoma in a hyperplastic gland.",
    ],
    differential: [
      {
        name: "Parathyroid adenoma",
        distinction:
          "Adenoma is usually a discrete clonal neoplasm, often with a rim of compressed or atrophic non-neoplastic parathyroid tissue at the vascular pole; hyperplasia requires evidence of multigland involvement and appropriate clinical context. A single gland may not be classifiable with certainty.",
      },
      {
        name: "Parathyroid lipoadenoma",
        distinction:
          "Lipoadenoma is a discrete neoplasm with a definite increase in parenchymal tissue despite abundant adipose tissue, usually exceeding 50% of gland volume; hyperplasia is characterized by parenchymal expansion and fat depletion.",
      },
      {
        name: "Atypical parathyroid tumor",
        distinction:
          "Atypical parathyroid tumor is a neoplasm with worrisome cytological or architectural atypia but no unequivocal invasive growth; hyperplasia, especially tertiary disease, can mimic it but is supported by multigland involvement and the renal disease history.",
      },
      {
        name: "Parathyroid carcinoma",
        distinction:
          "Carcinoma requires unequivocal angioinvasion, lymphatic invasion, perineural invasion, destructive invasion of adjacent structures, or metastasis. These findings are absent in hyperplasia; pseudoinvasion in renal failure-associated disease is not sufficient.",
      },
    ],
    molecular: [
      "Routine molecular testing is not indicated for established secondary or tertiary hyperplasia.",
      "For apparently primary multiglandular disease, evaluate for germline predisposition; identification of a syndrome such as MEN1 generally favors classification as multiglandular adenomas.",
      "Clonal chromosomal abnormalities and somatic alterations may occur in tertiary disease, reflecting progression along a hyperplasia-to-neoplasia continuum.",
    ],
    pitfalls: [
      "A single enlarged, cellular gland cannot always be separated from adenoma by morphology alone; examine the hilum and correlate with the other glands and postoperative biochemical response.",
      "In chronic renal failure, distant metastasis is exceptional. Reserve carcinoma for unequivocal invasion or metastatic disease.",
      "Parathyromatosis may mimic invasive carcinoma locally, but vascular invasion, perineural invasion, and distant spread are not features of parathyromatosis.",
    ],
  },
  {
    name: "Parathyroid Adenoma",
    group: "Parathyroid Proliferative Disorders",
    clue: "A circumscribed parathyroid neoplasm with depleted intratumoral fat and, in many cases, a rim of suppressed non-neoplastic parathyroid tissue.",
    summary:
      "A benign neoplasm composed of chief, transitional oncocytic, oncocytic, clear cells, or a mixture; the most common cause of primary hyperparathyroidism.",
    clinicalProfile: [
      "Most often diagnosed in adults, with incidence increasing with age.",
      "Sporadic tumors show a female predominance (male-to-female ratio approximately 1:2–3).",
      "Usually arises in an inferior or superior parathyroid gland; ectopic sites include intrathyroidal, retroesophageal, thymic, and mediastinal locations.",
      "Usually causes primary hyperparathyroidism, with hypercalcemia, nephrolithiasis, bone disease, or nonspecific fatigue and weakness; some patients are asymptomatic.",
      "Multiglandular adenomas may occur in MEN1, MEN2A, MEN4, CDC73-related disease, and other familial syndromes.",
    ],
    criteria: [
      "Identify a discrete, well-circumscribed or encapsulated parathyroid neoplasm composed of chief, oncocytic, transitional, and/or clear cells.",
      "Show absent or markedly reduced stromal fat within the neoplastic component.",
      "A rim of compressed or atrophic non-neoplastic parathyroid tissue, particularly at the vascular hilum, supports adenoma over hyperplasia but is not invariably present.",
      "Correlate with clinical and biochemical evidence of primary hyperparathyroidism and, when available, intraoperative PTH decline or postoperative biochemical cure.",
      "Exclude unequivocal vascular, lymphatic, or perineural invasion, destructive invasion of adjacent structures, and metastasis before diagnosing a benign adenoma.",
      "Do not diagnose adenoma versus hyperplasia with certainty from a single gland when the clinical and gross findings do not establish the status of the remaining glands.",
    ],
    histology: [
      "The tumor is usually well circumscribed or surrounded by a thin fibrous pseudocapsule.",
      "Intratumoral stromal fat is absent or sparse.",
      "A rim of atrophic non-neoplastic parathyroid tissue is identifiable in more than half of cases and is best assessed by sectioning through the vascular hilum.",
      "Chief cells typically form sheets, nests, or lobules in a delicate capillary network; palisading around vessels may be present.",
      "Follicular structures may occur, occasionally as the predominant pattern; papillary growth is rare.",
      "Oncocytic cells may be focal; an adenoma with more than 75% oncocytic cells is classified as oncocytic (oxyphil cell) adenoma.",
      "Water-clear cell adenomas are rare and show a proliferation of cells with abundant clear cytoplasm and distinct borders.",
      "Cystic change is present when cysts occupy more than 50% of the tumor; hemorrhage, infarction, fibrosis, cholesterol clefts, and calcification may also occur.",
      "Occasional mitoses, multinucleated cells, and patchy endocrine nuclear atypia may be seen and do not independently establish malignancy.",
    ],
    ihc: [
      "PTH and GATA3 are typically positive and support parathyroid differentiation.",
      "Chromogranin A and synaptophysin are usually positive.",
      "Thyroglobulin, TTF1, and monoclonal PAX8 are negative, helping distinguish parathyroid from thyroid follicular lesions.",
      "Nuclear parafibromin expression is retained in the vast majority of sporadic adenomas.",
      "Routine immunohistochemistry is not required in an otherwise typical adenoma; parafibromin assessment is useful when morphology or clinical history raises concern for CDC73-related disease.",
    ],
    differential: [
      {
        name: "Parathyroid hyperplasia",
        distinction:
          "Hyperplasia involves multiple glands and is usually associated with a physiologic stimulus such as chronic renal disease. A single-gland adenoma often has a rim of compressed non-neoplastic tissue, although this feature is not completely specific.",
      },
      {
        name: "Parathyroid lipoadenoma",
        distinction:
          "Lipoadenoma contains abundant adipose tissue, generally more than 50% of gland volume, together with unequivocal expansion of parathyroid parenchyma; conventional adenoma is usually fat-depleted.",
      },
      {
        name: "Atypical parathyroid tumor",
        distinction:
          "Atypical parathyroid tumor has a constellation of concerning architectural or cytological features, such as broad fibrosis, monotonous sheet-like growth, increased mitoses, or capsular extension, but lacks definitive invasion.",
      },
      {
        name: "Parathyroid carcinoma",
        distinction:
          "Carcinoma is defined by angioinvasion, lymphatic or perineural invasion, destructive invasion of adjacent structures, or metastasis—not by size, fibrosis, adherence, or cytological atypia alone.",
      },
    ],
    molecular: [
      "Sporadic adenomas commonly show 11q13 loss of heterozygosity and/or biallelic MEN1 inactivation; CCND1 overexpression is another recurrent pathway alteration.",
      "Germline predisposition includes MEN1, RET-associated MEN2A, CDKN1B-associated MEN4, CDC73-related disorders, MAX-related MEN5, and familial isolated hyperparathyroidism.",
      "CDC73 alterations are uncommon in conventional adenomas but should be considered in parafibromin-deficient lesions or patients with a compatible family history.",
    ],
    pitfalls: [
      "Section through the vascular hilum to search for a rim of suppressed non-neoplastic parathyroid tissue.",
      "A rim-like area can occasionally be seen in hyperplasia; interpret it with clinical, radiologic, and biochemical findings.",
      "Do not mistake an intrathyroidal or ectopic parathyroid adenoma for a thyroid neoplasm; use a focused lineage panel.",
    ],
  },
  {
    name: "Parathyroid Lipoadenoma",
    group: "Parathyroid Proliferative Disorders",
    clue: "Require unequivocal expansion of parathyroid parenchyma together with abundant adipose tissue, generally more than 50% of gland volume.",
    summary:
      "A rare benign parathyroid neoplasm in which abundant adipose tissue is a major component but the parenchymal component is also genuinely increased.",
    clinicalProfile: [
      "Usually occurs in middle-aged to older adults; reported mean age is approximately 56 years.",
      "Slight female predominance.",
      "Usually arises in a normally positioned gland, with a reported left-sided predilection; ectopic mediastinal examples occur.",
      "Most lesions are functioning and produce mild biochemical hyperparathyroidism with typical symptoms.",
      "Two or more affected glands may occur; multiglandular lesions with abundant fat are termed lipohyperplasia.",
    ],
    criteria: [
      "Demonstrate a definite increase in both parathyroid parenchymal tissue and adipose tissue.",
      "Adipose tissue should generally comprise more than 50% of the glandular volume.",
      "Confirm that the parenchymal component is expanded; enlargement caused solely by increased adipose tissue is not lipoadenoma.",
      "A rim of compressed non-neoplastic parathyroid tissue supports a neoplastic process.",
      "A significant intraoperative PTH decline or postoperative biochemical cure is desirable supportive evidence.",
    ],
    histology: [
      "The lesion is usually encapsulated and contains abundant mature adipose tissue admixed with increased parathyroid parenchyma.",
      "Adipose tissue generally accounts for more than half of the gland volume.",
      "The parenchymal component may be composed of chief cells with variable oncocytic or transitional cells.",
      "The stromal component may include brown fat and myxoid or fibrous differentiation.",
      "A rim of compressed non-neoplastic parathyroid tissue is usually present.",
      "The cut surface is often yellow, reflecting the abundant adipose component.",
    ],
    ihc: [
      "PTH and GATA3 support parathyroid lineage when needed.",
      "Chromogranin A and synaptophysin may highlight the parenchymal component.",
      "Thyroglobulin, TTF1, and monoclonal PAX8 are negative in parathyroid cells and can help exclude thyroid lesions.",
      "No specific immunohistochemical profile distinguishes lipoadenoma from conventional parathyroid adenoma; diagnosis is architectural and quantitative.",
    ],
    differential: [
      {
        name: "Parathyroid hyperplasia",
        distinction:
          "Hyperplasia shows increased parenchymal cellularity with depletion of stromal fat in multiple glands. Lipoadenoma is a discrete lesion with increased parenchyma despite abundant fat, usually exceeding 50% of gland volume.",
      },
      {
        name: "Parathyroid adenoma",
        distinction:
          "Conventional adenoma is typically fat-depleted; lipoadenoma requires abundant adipose tissue plus unequivocal parenchymal expansion. A few adipocytes in an otherwise typical adenoma are insufficient.",
      },
      {
        name: "Atypical parathyroid tumor",
        distinction:
          "Atypical parathyroid tumor is defined by worrisome cytological or architectural atypia without definitive invasion; lipoadenoma is defined by its distinctive adipose-rich composition and lacks the required atypical features.",
      },
      {
        name: "Parathyroid carcinoma",
        distinction:
          "Carcinoma requires unequivocal invasive growth or metastasis. Abundant adipose tissue does not indicate malignancy; assess specifically for vascular, perineural, and destructive soft-tissue invasion.",
      },
    ],
    molecular: [
      "The molecular pathogenesis is unknown.",
      "No established hereditary predisposition or diagnostic molecular test is recognized.",
    ],
    pitfalls: [
      "Do not use the term lipoadenoma for a gland enlarged solely by adipose accumulation without increased parenchymal tissue.",
      "Do not apply the diagnosis when adipose tissue is only a minor component of an otherwise conventional adenoma.",
      "The term parathyroid hamartoma is not recommended.",
    ],
  },
  {
    name: "Atypical Parathyroid Tumor",
    group: "Parathyroid Proliferative Disorders",
    clue: "A parathyroid neoplasm with concerning cytological or architectural atypia but no unequivocal carcinoma-defining invasion.",
    summary:
      "A neoplasm of uncertain malignant potential that occupies the diagnostic boundary between conventional adenoma and carcinoma; the diagnosis requires a constellation of worrisome features.",
    clinicalProfile: [
      "Usually occurs in adults; sporadic cases have a mean age of approximately 48 years, with a broad reported age range.",
      "Sporadic cases show a slight female predominance; familial cases have a more equal sex distribution and occur at a younger age.",
      "Arises in a parathyroid gland and may be adherent to adjacent structures.",
      "Usually presents with primary hyperparathyroidism; calcium elevation is often less marked than in carcinoma.",
      "A palpable neck mass is uncommon compared with parathyroid carcinoma.",
    ],
    criteria: [
      "Establish that the lesion is a parathyroid neoplasm.",
      "Identify significant atypical cytological and/or architectural features that are worrisome for carcinoma.",
      "Document the absence of unequivocal full-thickness capsular invasion with extension into soft tissue, vascular invasion, lymphatic invasion, perineural invasion, destructive invasion of adjacent organs, and metastasis.",
      "Base the diagnosis on the overall constellation of findings and clinical context, not on a single minor feature.",
      "Small foci of fibrosis, occasional mitoses below 5 per 10 mm², limited extension into but not through a thickened capsule, or minor contour irregularity alone are insufficient.",
      "Consider prior biopsy, needle washout, ethanol injection, or other manipulation before interpreting fibrosis, fat necrosis, hemosiderin, and irregularity as neoplastic invasion.",
    ],
    histology: [
      "The tumor is composed of chief cells with variable oncocytic and transitional cells.",
      "Growth may be monotonous and sheet-like, trabecular, or composed of closely packed nests.",
      "Broad or band-like fibrosis may be present.",
      "Tumor cells may extend into, but not through, a thickened capsule.",
      "Adherence to adjacent structures, cytological atypia, and increased mitotic activity may be present.",
      "Mitotic activity greater than 5 per 10 mm², Ki-67 greater than 5%, coagulative necrosis, macronucleoli, or atypical mitoses increase concern but do not independently establish carcinoma.",
      "Fat necrosis and hemosiderin deposition accompanying fibrosis or contour irregularity favor post-traumatic/reactive change in an appropriately manipulated gland.",
      "Definitive carcinoma requires unequivocal invasive growth or metastasis.",
    ],
    ihc: [
      "PTH, GATA3, and chromogranin A support parathyroid differentiation.",
      "Parafibromin loss, with an intact internal control, indicates parafibromin deficiency and strongly raises concern for CDC73 inactivation.",
      "Ki-67, cyclin D1, p27, RB1, BCL2, MDM2, p53, galectin-3, E-cadherin, and PGP9.5 may contribute to risk assessment, but no single marker reliably separates adenoma, atypical tumor, and carcinoma.",
      "Parafibromin deficiency is clinically important because it is associated with increased risk of recurrence or metachronous parathyroid tumors.",
    ],
    differential: [
      {
        name: "Parathyroid hyperplasia",
        distinction:
          "Hyperplasia is supported by involvement of multiple glands and a physiologic driver, particularly chronic renal disease. Tertiary hyperplasia may be markedly atypical, but pseudoinvasion and high proliferation alone do not establish carcinoma.",
      },
      {
        name: "Parathyroid adenoma",
        distinction:
          "Conventional adenoma may show focal fibrosis, occasional mitoses, or limited capsular thickening, especially when large. Atypical tumor requires a more substantial constellation of worrisome architectural or cytological findings.",
      },
      {
        name: "Parathyroid lipoadenoma",
        distinction:
          "Lipoadenoma is defined by abundant adipose tissue with definite parenchymal expansion, usually more than 50% adipose volume; atypical tumor is defined by worrisome atypia without unequivocal invasion.",
      },
      {
        name: "Parathyroid carcinoma",
        distinction:
          "Carcinoma requires at least one unequivocal criterion: angioinvasion, lymphatic invasion, perineural invasion, destructive invasion into adjacent structures, or metastasis. Atypical tumor lacks these findings.",
      },
    ],
    molecular: [
      "CDC73 alterations occur in a subset; parafibromin-deficient tumors should undergo germline CDC73 testing.",
      "Other reported alterations include changes involving CDKN1A, CDC73, PTEN, RB1, EZH2, HIC1, and CDKN2A, but no molecular profile independently defines atypical parathyroid tumor.",
      "Germline evaluation is particularly important when there is parafibromin deficiency, young age, multiglandular disease, or a suggestive family history.",
    ],
    pitfalls: [
      "Do not use atypical parathyroid tumor as a substitute for careful assessment of the entire capsule and tumor interface.",
      "Do not diagnose carcinoma solely because of adherence, fibrosis, mitotic activity, necrosis, or parafibromin loss.",
      "Parafibromin-deficient atypical tumors warrant long-term follow-up and consideration of germline testing.",
    ],
  },
  {
    name: "Parathyroid Carcinoma",
    group: "Parathyroid Malignancy",
    clue: "Malignancy is defined by unequivocal angioinvasion, lymphatic invasion, perineural invasion, destructive invasion of adjacent structures, or metastasis.",
    summary:
      "A rare malignant parathyroid neoplasm; neither cytological atypia, fibrosis, tumor size, nor adherence alone is sufficient for diagnosis.",
    clinicalProfile: [
      "Usually occurs in middle-aged adults; mean age at diagnosis is approximately 51–57 years, but any age may be affected.",
      "Most cohorts show a near-equal sex distribution; parafibromin-deficient tumors have a male predilection and tend to occur at younger ages.",
      "May arise in any eutopic or ectopic parathyroid location, including the thyroid, retroesophageal space, thymus, mediastinum, or pericardium.",
      "Typically presents with symptomatic primary hyperparathyroidism, marked hypercalcemia, and markedly elevated PTH; nephrolithiasis and bone disease are common.",
      "A palpable neck mass, hoarseness, recurrent laryngeal nerve dysfunction, or radiologic/intraoperative invasion raises concern for carcinoma.",
      "Rare nonfunctioning carcinomas occur; a history of hyperparathyroidism–jaw tumor syndrome is an important risk factor.",
    ],
    criteria: [
      "Diagnose carcinoma only when at least one unequivocal malignant criterion is present: angioinvasion, lymphatic invasion, perineural invasion, destructive invasion into adjacent structures or organs, or regional/distant metastasis.",
      "Angioinvasion should show tumor invading through a vessel wall and/or intravascular tumor admixed with thrombus or fibrin; assess the tumor periphery and capsule.",
      "Lymphatic invasion and perineural invasion are independently diagnostic when unequivocal.",
      "Direct destructive extension into thyroid, esophagus, skeletal muscle, or other adjacent structures establishes malignancy.",
      "Metastatic parathyroid tumor in lymph nodes or distant organs establishes carcinoma.",
      "Submit and examine the complete parathyroidectomy specimen, with multiple levels and careful evaluation of the capsule and tumor–soft tissue interface.",
      "Record mitotic count and Ki-67 proliferation index in all carcinomas; increased proliferation supports risk assessment but is not a substitute for invasive criteria.",
    ],
    histology: [
      "Most tumors are large, poorly circumscribed, variably encapsulated, and firm, with broad fibrous bands and a lobulated cut surface.",
      "Broad bands of fibrosis are common but are not diagnostic of malignancy by themselves.",
      "Angioinvasion is characterized by tumor penetrating a vessel wall and/or intravascular tumor admixed with thrombus or fibrin, often in small veins.",
      "CD61 or Martius Scarlet Blue may highlight subtle fibrin–platelet material; ERG, CD31, or CD34 can outline vascular endothelium.",
      "D2-40 may help highlight lymphatic channels when lymphatic invasion is suspected.",
      "Perineural invasion may be microscopic; gross involvement of a large nerve, including the recurrent laryngeal nerve, may also occur.",
      "Cytological atypia is variable; some carcinomas are cytologically bland and resemble adenoma.",
      "Coagulative tumor necrosis, atypical mitoses, prominent macronucleoli, and increased mitotic activity are worrisome ancillary features.",
      "An increased mitotic count is greater than 5 mitoses per 10 mm²; Ki-67 is often greater than 5%, but neither threshold independently defines carcinoma.",
      "CDC73-mutated tumors may show sheet-like growth, eosinophilic cytoplasm with perinuclear clearing, nuclear enlargement, microcystic change, and arborizing vasculature.",
    ],
    ihc: [
      "PTH and GATA3 support parathyroid differentiation; chromogranin A and synaptophysin commonly show neuroendocrine differentiation.",
      "Loss of nuclear parafibromin, with a positive internal control, is the most reliable ancillary biomarker associated with malignancy in the appropriate morphologic setting.",
      "Parafibromin deficiency can also occur in benign tumors in patients with germline CDC73 alterations; it is not independently diagnostic of carcinoma.",
      "Other reported abnormalities include loss of APC, E-cadherin, p27, BCL2, MDM2, and 5-hydroxymethylcytosine; positivity for PGP9.5, galectin-3, and TERT; p53 overexpression; and increased Ki-67.",
      "Use a panel rather than a single ancillary marker; integrate results with strict morphologic criteria.",
      "Thyroglobulin, TTF1, and monoclonal PAX8 are generally negative and help exclude thyroid follicular carcinoma.",
    ],
    differential: [
      {
        name: "Parathyroid hyperplasia",
        distinction:
          "Secondary/tertiary hyperplasia may show nodularity, fibrosis, pseudoinvasion, and high proliferation, especially in chronic renal failure. Carcinoma requires unequivocal vascular, lymphatic, perineural, destructive adjacent-organ invasion, or metastasis.",
      },
      {
        name: "Parathyroid adenoma",
        distinction:
          "Adenomas may be large, fibrotic, hemorrhagic, infarcted, or adherent after manipulation. Without unequivocal invasive growth or metastasis, these findings do not establish carcinoma.",
      },
      {
        name: "Parathyroid lipoadenoma",
        distinction:
          "Lipoadenoma is a benign adipose-rich neoplasm with definite parenchymal expansion; carcinoma is diagnosed by unequivocal invasion or metastasis, not by adipose content or tumor size.",
      },
      {
        name: "Atypical parathyroid tumor",
        distinction:
          "Atypical tumor has worrisome cytological or architectural features but lacks definitive invasion. Any unequivocal angioinvasion, lymphatic/perineural invasion, destructive adjacent-organ invasion, or metastasis upgrades the diagnosis to carcinoma.",
      },
    ],
    molecular: [
      "CDC73 inactivation is the principal molecular alteration; approximately 40–80% of sporadic carcinomas harbor inactivating CDC73 alterations, often with loss of heterozygosity at 1q25–q31.",
      "Germline CDC73 alterations are associated with hyperparathyroidism–jaw tumor syndrome and a substantially increased risk of parathyroid carcinoma; germline testing should be considered, particularly in parafibromin-deficient tumors.",
      "Other reported alterations include TP53 and RB1 loss, CCND1 amplification, rare TERT promoter mutations, and alterations involving PTEN, NF1, KDR, PIK3CA, and DICER1.",
      "Record mitotic count and Ki-67 index for prognostic assessment; molecular profiling may identify potentially actionable alterations in advanced disease.",
    ],
    pitfalls: [
      "Do not diagnose carcinoma based only on broad fibrous bands, capsular irregularity, adherence, tumor size, cytological atypia, necrosis, or an elevated Ki-67 index.",
      "Prior fine-needle aspiration, PTH washout, ethanol injection, or surgical manipulation can cause fibrosis, fat necrosis, hemosiderin, and pseudoinvasion.",
      "The upper parathyroid gland may be embedded in the thyroid capsule or parenchyma; this anatomic relationship should not be mistaken for destructive invasion.",
      "In chronic renal failure-associated hyperparathyroidism, apply particularly strict criteria because pseudoinvasion and high proliferation can occur in tertiary disease.",
    ],
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function ParathyroidTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All Categories");
  const [open, setOpen] = useState<string[]>([]);
  const groups = useMemo(
    () => [
      "All Categories",
      ...Array.from(new Set(entities.map((e) => e.group))),
    ],
    [],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const groupMatch = group === "All Categories" || e.group === group;
      const text = [
        e.name,
        e.group,
        e.clue,
        e.summary,
        ...e.clinicalProfile,
        ...e.criteria,
        ...e.histology,
        ...e.ihc,
        ...(e.molecular ?? []),
        ...(e.pitfalls ?? []),
        ...e.differential.flatMap((d) => [d.name, d.distinction]),
      ]
        .join(" ")
        .toLowerCase();
      return groupMatch && (!q || text.includes(q));
    });
  }, [query, group]);
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-7">
        <a
          href="/"
          className="text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Home
        </a>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          PathologyGPS · Endocrine Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Parathyroid Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference emphasizing the distinction between
          multiglandular hyperplasia, benign parathyroid neoplasms, tumors of
          uncertain malignant potential, and carcinoma.
        </p>
        <div className="mt-5">
          <PathologySearch />
        </div>
      </div>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Core Diagnostic Principles
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Interpret the specimen with serum calcium, PTH, renal function,
              imaging, operative findings, and the status of other parathyroid
              glands.
            </li>
            <li>
              Section through the vascular hilum when evaluating a suspected
              adenoma to identify a rim of suppressed non-neoplastic parathyroid
              tissue.
            </li>
            <li>
              Hyperplasia is fundamentally a multiglandular diagnosis;
              MEN-associated multiglandular disease is generally classified as
              multiple adenomas.
            </li>
            <li>
              Parathyroid carcinoma requires unequivocal invasion or metastasis.
              Cytological atypia, fibrosis, adherence, tumor size, and
              proliferation alone are insufficient.
            </li>
            <li>
              Parafibromin immunohistochemistry is particularly useful in
              atypical tumors and carcinomas and should prompt consideration of
              germline CDC73 testing when deficient.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield Diagnostic Separation
          </h2>
          <div className="mt-3 space-y-3 text-sm">
            {[
              [
                "Hyperplasia",
                "Multiple glands; clinical stimulus; diffuse/nodular parenchymal expansion with fat depletion.",
              ],
              [
                "Adenoma",
                "Discrete fat-depleted neoplasm; often a rim of compressed non-neoplastic tissue at the hilum.",
              ],
              [
                "Lipoadenoma",
                "Definite parenchymal expansion with abundant fat, generally >50% of gland volume.",
              ],
              [
                "Atypical parathyroid tumor",
                "Concerning cytology/architecture without unequivocal invasive growth.",
              ],
              [
                "Carcinoma",
                "Angioinvasion, lymphatic/perineural invasion, destructive adjacent-organ invasion, or metastasis.",
              ],
            ].map(([name, description]) => (
              <div
                key={name}
                className="grid gap-1 border-b border-slate-100 pb-2 sm:grid-cols-[minmax(0,0.8fr)_1.5fr]"
              >
                <strong className="text-slate-900">{name}</strong>
                <span className="text-slate-600">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="parathyroid-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic criteria
          </label>
          <input
            id="parathyroid-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: parafibromin, vascular invasion, lipoadenoma, hyperplasia..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-64">
          <label
            htmlFor="parathyroid-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="parathyroid-group"
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
        <span>{filtered.length} entities</span>
        <span>Expand a diagnosis to review the complete diagnostic card.</span>
      </div>

      <div className="space-y-3">
        {filtered.map((e, index) => {
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
                  {index + 1}
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
                          {e.clinicalProfile.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.criteria.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, i) => (
                            <div
                              key={i}
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
                      {e.molecular && (
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, i) => (
                              <li key={i}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      )}
                    </div>
                  </div>
                  {e.pitfalls && (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
                        {e.pitfalls.map((x, i) => (
                          <li key={i}>{x}</li>
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
        PathologyGPS · Diagnostic reference for endocrine pathology. Interpret
        morphologic, immunohistochemical, and molecular findings in conjunction
        with clinical, biochemical, radiologic, and operative information.
      </footer>
    </main>
  );
}
