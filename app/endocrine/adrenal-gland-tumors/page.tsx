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
    name: "Adrenal Rests",
    group: "Adrenal Developmental and Cystic Lesions",
    clue: "Recognize ectopic adrenal cortical tissue by its characteristic location, bland cortical morphology, and SF1 expression.",
    summary:
      "Benign ectopic adrenal cortical tissue, sometimes accompanied by adrenomedullary cells; lesions arising in rests may be hormonally active.",
    clinicalProfile: [
      "Usually incidental at any age; may be detected during evaluation of congenital adrenal hyperplasia (CAH) or infertility.",
      "Testicular rests occur in males with CAH, often bilaterally near the mediastinum testis; other sites include the broad ligament, ovary, kidney, retroperitoneum, and pituitary region.",
      "Most are microscopic or only a few millimeters; hyperplasia or a neoplasm may produce a mass.",
    ],
    criteria: [
      "Identify a discrete cluster or nodule of adrenal cortical cells outside the orthotopic adrenal gland.",
      "Confirm adrenal cortical differentiation, preferably with nuclear SF1; Melan-A and steroidogenic enzymes provide additional support.",
      "Assess for associated chromaffin cells, which may be present but are not required.",
      "Exclude a primary neoplasm of the involved organ and metastatic clear cell or steroid-producing tumors.",
    ],
    histology: [
      "Composed of large polygonal cells with clear or eosinophilic cytoplasm, round uniform nuclei, and finely dispersed chromatin.",
      "Cells resemble zona fasciculata or zona reticularis cortical cells and may be admixed with fibroadipose tissue or native organ parenchyma.",
      "Adrenomedullary chromaffin cells are rarely admixed.",
      "Rests may undergo hyperplasia or give rise to adrenocortical neoplasms.",
    ],
    ihc: [
      "SF1 is the most useful marker of adrenal cortical differentiation.",
      "Melan-A and inhibin-alpha are commonly positive.",
      "CYP11B1 and CYP11B2 may help establish steroidogenic differentiation in selected cases.",
      "Chromogranin and synaptophysin highlight associated chromaffin cells, if present.",
    ],
    differential: [
      {
        name: "Congenital adrenal hyperplasia",
        distinction:
          "CAH affects the orthotopic adrenal glands bilaterally and is associated with steroidogenic enzyme deficiency and ACTH-driven cortical hyperplasia; a rest is ectopic adrenal cortical tissue.",
      },
      {
        name: "Adrenocortical adenoma",
        distinction:
          "An adenoma is a true neoplasm arising within an adrenal gland or rest, usually forming a discrete expansile mass; a rest is typically a small, non-neoplastic ectopic aggregate.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma contains mature adipose tissue and trilineage hematopoietic elements, rather than a pure aggregate of adrenal cortical cells.",
      },
      {
        name: "Adrenocortical nodular disease",
        distinction:
          "Nodular disease involves multiple cortical nodules within one or both adrenal glands, not isolated ectopic adrenal tissue.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma shows malignant architecture and/or unequivocal invasion; adrenal rests are cytologically bland and lack destructive growth.",
      },
      {
        name: "Adrenal cyst",
        distinction:
          "A cyst is a fluid-containing cavity with a defined wall; an adrenal rest is a solid aggregate of ectopic cortical cells.",
      },
    ],
    molecular: [
      "No diagnostic molecular test is required for an otherwise typical adrenal rest.",
      "In patients with CAH, germline testing of the relevant steroidogenic enzyme gene may establish the underlying disorder.",
    ],
    pitfalls: [
      "In the testis, an adrenal rest tumor can closely mimic a Leydig cell tumor; clinical history of CAH, bilaterality, and steroidogenic enzyme expression are useful clues.",
    ],
  },
  {
    name: "Adrenal Cysts",
    group: "Adrenal Developmental and Cystic Lesions",
    clue: "Classify the cyst by its lining: endothelial, mesothelial, parasitic, or absent in a pseudocyst.",
    summary:
      "Benign, circumscribed, fluid-containing adrenal lesions; pseudocysts are the most common, while true epithelial and endothelial cysts are uncommon.",
    clinicalProfile: [
      "Most often detected in adults in the third to sixth decades.",
      "No consistent sex predilection is established.",
      "Usually unilateral and incidental; large lesions may cause abdominal pain or compression of adjacent structures.",
      "Imaging identifies a cystic adrenal mass but often cannot reliably determine its histologic subtype.",
    ],
    criteria: [
      "Establish that the lesion is a circumscribed cystic process centered in or arising from the adrenal gland.",
      "Identify the lining, if present, and use targeted immunohistochemistry to distinguish endothelial from mesothelial differentiation.",
      "Diagnose pseudocyst when there is no true lining and the cavity contains hemorrhagic or fibrinous material.",
      "Identify parasitic structures or characteristic laminated membranes to diagnose hydatid disease.",
      "Thoroughly sample the wall and any solid or mural component to exclude cystic degeneration in an adrenocortical neoplasm or pheochromocytoma.",
    ],
    histology: [
      "Endothelial cysts have a thin fibrous wall lined by flattened endothelial cells; lymphatic-type cysts may show papillary intraluminal projections.",
      "Epithelial cysts are lined by mesothelial cells, often in a single flattened layer.",
      "Pseudocysts lack a cellular lining and have a dense fibrous wall with hemorrhage, fibrin, cholesterol clefts, and hemosiderin-laden macrophages.",
      "Parasitic cysts are often unilocular or multilocular and show a fibrous, sometimes calcified wall with laminated parasitic membranes.",
      "Cystic adrenal neoplasms may show residual viable tumor in the wall or mural nodules.",
    ],
    ihc: [
      "ERG, CD31, CD34, and D2-40 support endothelial differentiation; D2-40 may highlight lymphatic endothelium.",
      "Calretinin, WT1, and cytokeratins support mesothelial lining in an epithelial cyst.",
      "SF1 and Melan-A may identify residual adrenocortical neoplasm in the cyst wall.",
      "Chromogranin and synaptophysin may identify residual pheochromocytoma in a cystic tumor.",
    ],
    differential: [
      {
        name: "Adrenocortical adenoma",
        distinction:
          "A cystic adenoma has residual cortical neoplastic cells in the wall or mural nodules; a primary cyst lacks a neoplastic cortical component.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma may undergo extensive cystic degeneration, but viable areas show malignant cortical proliferation, necrosis, or invasion.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Cystic pheochromocytoma retains chromaffin tumor in the wall or solid areas, typically positive for chromogranin and synaptophysin.",
      },
      {
        name: "Adrenal rests",
        distinction:
          "An adrenal rest is a solid aggregate of ectopic adrenal cortical cells, usually SF1 positive, rather than a fluid-filled cystic lesion.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma contains mature fat and hematopoietic tissue rather than a true cyst cavity; extensive hemorrhage may complicate the distinction.",
      },
    ],
    molecular: [
      "Molecular testing is not clinically relevant for the diagnosis of a primary adrenal cyst.",
    ],
    pitfalls: [
      "Endothelialization of a pseudocyst can mimic a true endothelial cyst; require a convincing, continuous endothelial lining and confirmatory markers.",
      "Do not mistake hemorrhagic pseudocyst contents for tumor necrosis without extensive sampling of the wall.",
    ],
  },
  {
    name: "Adrenal Myelolipoma",
    group: "Other Adrenal Tumors",
    clue: "A circumscribed admixture of mature adipose tissue and trilineage hematopoietic elements.",
    summary:
      "Benign adrenal lesion composed of mature fat and bone marrow-type hematopoietic tissue; usually nonfunctioning and incidental.",
    clinicalProfile: [
      "Usually diagnosed in adults aged 50–60 years.",
      "No sex predilection.",
      "Usually unilateral; bilateral lesions are more frequent in patients with CAH.",
      "Most are asymptomatic and hormonally inactive; large tumors may cause pain, compression, hemorrhage, or rupture.",
    ],
    criteria: [
      "Identify a well-circumscribed adrenal lesion composed of mature adipocytes admixed with hematopoietic tissue.",
      "Confirm representation of erythroid, myeloid, and megakaryocytic lineages.",
      "Exclude a lipomatous neoplasm or metastatic tumor when the morphology is atypical or the lesion is unusually infiltrative.",
      "Evaluate the background adrenal cortex and clinical history for CAH or another source of chronic ACTH stimulation.",
    ],
    histology: [
      "Mature adipocytes are admixed with all three hematopoietic lineages in variable proportions.",
      "Megakaryocytes are readily identifiable among myeloid and erythroid precursors.",
      "Calcification, hemorrhage, and osseous metaplasia may occur.",
      "Extensive hemorrhage may obscure the characteristic components.",
      "Myelolipoma may coexist with cortical adenoma, cortical hyperplasia, ganglioneuroma, or other adrenal lesions.",
    ],
    ihc: [
      "Hematopoietic elements express lineage-appropriate markers, including myeloperoxidase in myeloid cells, glycophorin A in erythroid cells, and CD61 in megakaryocytes.",
      "SF1 and Melan-A may highlight entrapped or associated adrenal cortical tissue but are not required to diagnose myelolipoma.",
      "MDM2 and CDK4 are useful when excluding well-differentiated or dedifferentiated liposarcoma.",
    ],
    differential: [
      {
        name: "Adrenal rests",
        distinction:
          "Adrenal rests are composed of adrenal cortical cells and lack the characteristic admixture of mature fat and trilineage hematopoiesis.",
      },
      {
        name: "Adrenal cyst",
        distinction:
          "A cyst is a fluid-filled cavity with a defined wall; myelolipoma is a solid admixture of mature adipocytes and hematopoietic cells.",
      },
      {
        name: "Adrenocortical adenoma",
        distinction:
          "Adenoma is composed of a clonal adrenal cortical proliferation; myelolipoma is dominated by mature fat and hematopoietic elements.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma shows malignant cortical cells and may contain extensive hemorrhage or necrosis; myelolipoma lacks a malignant cortical component.",
      },
      {
        name: "Adrenal sex cord-stromal tumor",
        distinction:
          "Sex cord-stromal tumors are composed of neoplastic sex cord-type cells; myelolipoma contains mature adipocytes and trilineage hematopoietic tissue.",
      },
      {
        name: "Adrenal adenomatoid tumor",
        distinction:
          "Adenomatoid tumor is a mesothelial neoplasm with tubules and slit-like spaces; myelolipoma is an adipocytic and hematopoietic admixture.",
      },
      {
        name: "Adrenal melanoma",
        distinction:
          "Melanoma shows malignant melanocytic differentiation with SOX10/S100/HMB45 expression; myelolipoma contains mature fat and hematopoietic elements.",
      },
    ],
    molecular: [
      "No clinically useful molecular test is required for a conventional adrenal myelolipoma.",
    ],
    pitfalls: [
      "Do not interpret hemorrhage in a large myelolipoma as tumor necrosis without identifying the characteristic hematopoietic and adipocytic components.",
      "Bilateral or unusually large lesions should prompt consideration of underlying CAH.",
    ],
  },
  {
    name: "Congenital Adrenal Hyperplasia",
    group: "Adrenal Cortical Lesions",
    clue: "Bilateral cortical hyperplasia in the setting of a steroidogenic enzyme defect and characteristic biochemical abnormalities.",
    summary:
      "A group of autosomal recessive disorders caused by impaired adrenal steroidogenesis, resulting in ACTH-driven adrenal cortical hyperplasia and variable androgen excess.",
    clinicalProfile: [
      "Classic forms present in the neonatal period or infancy; nonclassic disease may first become apparent in childhood, adolescence, or adulthood.",
      "Both sexes are affected; virilization may cause ambiguous external genitalia in affected females and genital enlargement in males.",
      "Adrenal glands are bilaterally enlarged; testicular adrenal rest tumors may develop in males, often near the mediastinum testis.",
      "Classic 21-hydroxylase deficiency may cause salt wasting, dehydration, hypotension, hyponatremia, and hyperkalemia; nonclassic disease may cause precocious puberty, hirsutism, menstrual irregularity, or infertility.",
    ],
    criteria: [
      "Establish the clinical and biochemical diagnosis of CAH, including elevated 17-hydroxyprogesterone in 21-hydroxylase deficiency and appropriate dynamic testing when indicated.",
      "Identify bilateral adrenal enlargement with cortical hyperplasia in the appropriate clinical setting.",
      "Recognize compact-cell hyperplasia and lipid depletion in untreated disease.",
      "Use molecular testing to identify biallelic pathogenic variants in the relevant steroidogenic enzyme gene.",
      "In male patients, consider testicular adrenal rest tumors in the setting of longstanding or poorly controlled CAH.",
    ],
    histology: [
      "Untreated adrenal glands show marked bilateral cortical hyperplasia with expansion by lipid-depleted compact cells.",
      "The cortex may have a dark, compact-cell appearance resembling zona reticularis.",
      "Incomplete glucocorticoid replacement may produce a mixture of lipid-rich zona fasciculata-like cells and compact-cell hyperplasia.",
      "Testicular adrenal rest tumors comprise sheets and nests of large vacuolated cells with granular eosinophilic cytoplasm and lipofuscin pigment.",
      "Testicular adrenal rest tumors may be bilateral and centered near or within the mediastinum testis.",
    ],
    ihc: [
      "SF1 and Melan-A support adrenal cortical differentiation in adrenal and ectopic adrenal rest tissue.",
      "CYP11B1 and CYP21A2 may support adrenal steroidogenic differentiation in testicular adrenal rest tumors.",
      "DLK1 may be abundant and INSL3 is typically absent in testicular adrenal rest tumors, helping distinguish them from Leydig cell tumors.",
      "Leydig cell tumors may express inhibin and calretinin; Reinke crystals, when present, support Leydig cell differentiation.",
    ],
    differential: [
      {
        name: "Adrenal rests",
        distinction:
          "Adrenal rests are ectopic aggregates of otherwise bland cortical cells; CAH produces bilateral orthotopic adrenal hyperplasia and may stimulate ectopic rests.",
      },
      {
        name: "Adrenocortical nodular disease",
        distinction:
          "Nodular disease is defined by multiple clonal cortical nodules, often with bilateral micronodular or macronodular architecture; CAH is diffuse ACTH-driven hyperplasia caused by an enzyme defect.",
      },
      {
        name: "Adrenocortical adenoma",
        distinction:
          "Adenoma is a discrete clonal neoplasm, whereas CAH produces bilateral diffuse cortical hyperplasia in a biochemical setting of impaired steroid synthesis.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma is a malignant cortical neoplasm with atypical architecture and/or invasion; CAH shows diffuse bilateral hyperplasia and a characteristic endocrine phenotype.",
      },
    ],
    molecular: [
      "CYP21A2 accounts for approximately 95–99% of CAH and causes 21-hydroxylase deficiency.",
      "Other relevant genes include CYP11B1, HSD3B2, CYP17A1, POR, and STAR, depending on the enzymatic defect.",
      "CYP21A2 analysis requires methods that account for the nearby CYP21A1P pseudogene and complex rearrangements.",
      "Biallelic pathogenic variants establish the molecular diagnosis and support genetic counseling.",
    ],
    pitfalls: [
      "Do not diagnose a testicular Leydig cell tumor without considering testicular adrenal rest tumor in a patient with CAH.",
      "Clinical, biochemical, and genetic findings are central; adrenal morphology alone does not define the specific enzymatic subtype.",
    ],
  },
  {
    name: "Adrenocortical Nodular Disease",
    group: "Adrenal Cortical Lesions",
    clue: "Multiple cortical nodules—micronodular or macronodular—with clinical and genetic correlation; avoid the outdated blanket term nodular hyperplasia.",
    summary:
      "A group of benign clonal cortical proliferations that may be sporadic or bilateral and genetically driven, sometimes causing autonomous cortisol or aldosterone excess.",
    clinicalProfile: [
      "Can present from childhood to adulthood; bilateral micronodular disease often presents in children or young adults, whereas macronodular disease is usually recognized in adults.",
      "Both sexes are affected; sex distribution varies by molecular subtype.",
      "Micronodular and macronodular forms are bilateral; sporadic nodular disease may be unilateral or bilateral.",
      "May cause ACTH-independent Cushing syndrome, subclinical cortisol excess, or primary aldosteronism; some nodules are incidental and nonfunctioning.",
    ],
    criteria: [
      "Identify multiple cortical nodules and determine whether the pattern is micronodular or macronodular.",
      "Distinguish diffuse ACTH-driven cortical hyperplasia from clonal nodular proliferations.",
      "Correlate with endocrine testing to establish cortisol or aldosterone autonomy.",
      "Evaluate for a hereditary syndrome when disease is bilateral, occurs at a young age, or is associated with syndromic findings.",
      "Use CYP11B2 immunohistochemistry in primary aldosteronism to map aldosterone-producing micronodules and nodules according to the HISTALDO approach.",
    ],
    histology: [
      "Sporadic nodular disease shows one or more small cortical nodules, sometimes with intervening cortex that is otherwise unremarkable.",
      "Bilateral micronodular disease shows numerous small cortical nodules, often pigmented in primary pigmented nodular adrenocortical disease.",
      "Bilateral macronodular disease shows multiple larger nodules with variable intervening cortical atrophy or hyperplasia.",
      "Nodules may be composed of compact eosinophilic cells, lipid-rich clear cells, or a mixture.",
      "Aldosterone-producing micronodules may be microscopic and difficult to identify on routine H&E.",
      "Diffuse ACTH-driven hyperplasia expands the cortex without the discrete clonal nodules characteristic of nodular disease.",
    ],
    ihc: [
      "SF1 confirms adrenal cortical lineage.",
      "CYP11B2 identifies aldosterone-producing cell clusters, micronodules, and adenomas in primary aldosteronism.",
      "CYP11B1 and CYP17A1 may help characterize cortisol-producing cortical compartments in selected cases.",
      "Melan-A may highlight pigmented cortical nodules but is not specific for a particular genetic subtype.",
    ],
    differential: [
      {
        name: "Congenital adrenal hyperplasia",
        distinction:
          "CAH causes diffuse bilateral cortical hyperplasia driven by impaired steroidogenesis and ACTH; nodular disease is characterized by multiple clonal cortical proliferations and may be ACTH independent.",
      },
      {
        name: "Adrenocortical adenoma",
        distinction:
          "Adenoma is a discrete dominant neoplasm; nodular disease is multifocal and often bilateral, although a dominant nodule may be present.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma shows malignant features by validated scoring systems or unequivocal invasion; nodular disease consists of benign-appearing cortical proliferations without destructive invasion.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma contains mature adipose tissue and trilineage hematopoietic elements rather than multiple cortical nodules.",
      },
    ],
    molecular: [
      "Bilateral micronodular disease is associated with PRKAR1A, PRKACA, PDE11A, PDE8B, and alterations at the 2p16 CNC2 locus.",
      "Bilateral macronodular disease is associated with germline ARMC5, MEN1, FH, and APC alterations, somatic GNAS mosaicism, and less commonly PDE11A, PDE8B, or EDNRA variants.",
      "Germline susceptibility is often followed by a somatic second hit in the remaining allele.",
      "Genetic testing is appropriate for bilateral disease, early onset, or a syndromic presentation.",
    ],
    pitfalls: [
      "Do not use 'nodular hyperplasia' as a generic label for all bilateral nodular cortical disease; distinguish diffuse ACTH-related hyperplasia from clonal nodular disease.",
      "Small aldosterone-producing micronodules may be missed without CYP11B2 immunohistochemistry.",
    ],
  },
  {
    name: "Adrenocortical Adenoma",
    group: "Adrenal Cortical Lesions",
    clue: "A circumscribed cortical neoplasm with bland cytology and no convincing malignant criteria; establish cortical lineage with SF1.",
    summary:
      "Benign epithelial neoplasm of adrenal cortical cells; may be nonfunctioning or produce cortisol, aldosterone, or sex steroids.",
    clinicalProfile: [
      "Usually occurs in adults, with increasing detection in older patients as an adrenal incidentaloma.",
      "Both sexes are affected; hormonal phenotype varies with the secreted steroid.",
      "Usually unilateral and well circumscribed within the adrenal gland.",
      "May cause primary aldosteronism, autonomous cortisol secretion, Cushing syndrome, or rarely virilization/feminization; many are nonfunctioning.",
    ],
    criteria: [
      "Confirm adrenal cortical differentiation, preferably with nuclear SF1.",
      "Identify a circumscribed cortical neoplasm without unequivocal invasion or metastasis.",
      "Assess tumor size, weight, mitotic activity, necrosis, capsular and vascular invasion, and architecture.",
      "For conventional tumors, apply the Weiss system or a validated alternative; interpret borderline cases with the reticulin algorithm and/or Helsinki score.",
      "For pure oncocytic tumors, use the Lin–Weiss–Bisceglia system rather than the conventional Weiss score.",
      "For aldosterone-producing lesions, CYP11B2 immunohistochemistry can establish the site of aldosterone production.",
    ],
    histology: [
      "Usually well circumscribed and encapsulated, with a golden-yellow cut surface due to abundant lipid.",
      "Cells resemble zona fasciculata, with clear or vacuolated cytoplasm, or zona reticularis, with compact eosinophilic cytoplasm.",
      "Growth is commonly nested or alveolar in a delicate capillary network.",
      "Nuclear atypia may be present but should be interpreted with the full architectural and proliferative profile.",
      "Necrosis, atypical mitoses, diffuse architecture, capsular invasion, and vascular invasion are not features of an uncomplicated adenoma.",
      "Oncocytic and myxoid variants require variant-appropriate criteria.",
    ],
    ihc: [
      "SF1 is the most specific marker for adrenal cortical origin.",
      "Melan-A, inhibin-alpha, and calretinin commonly support cortical differentiation.",
      "Chromogranin is generally negative, helping distinguish cortical lesions from pheochromocytoma.",
      "CYP11B2 identifies aldosterone-producing lesions; steroidogenic enzyme panels can characterize functional differentiation.",
      "Ki-67 is generally low in adenoma; a markedly elevated index raises concern for carcinoma but must be interpreted with morphology.",
    ],
    differential: [
      {
        name: "Adrenocortical nodular disease",
        distinction:
          "Nodular disease is multifocal and often bilateral; adenoma is a discrete dominant neoplasm. Functional mapping with CYP11B2 may reveal multiple aldosterone-producing foci.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma is supported by a qualifying Weiss/Lin–Weiss–Bisceglia score, reticulin disruption with additional adverse features, a high Helsinki score, or unequivocal invasion.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma is a chromaffin neoplasm positive for chromogranin and synaptophysin and negative for SF1; adenoma shows cortical markers.",
      },
      {
        name: "Metastatic clear cell renal cell carcinoma",
        distinction:
          "Renal cell carcinoma may mimic a lipid-rich cortical tumor; use SF1 and a renal marker panel including PAX8, CAIX, and CD10.",
      },
    ],
    molecular: [
      "Somatic alterations vary by functional subtype; aldosterone-producing adenomas commonly harbor KCNJ5, CACNA1D, ATP1A1, or ATP2B3 alterations.",
      "Cortisol-producing adenomas may show PRKACA, GNAS, or PRKAR1A pathway alterations.",
      "Molecular testing is not routinely required for a morphologically and clinically typical adenoma but may help in selected functional or hereditary cases.",
    ],
    pitfalls: [
      "Do not use tumor size alone to diagnose malignancy.",
      "Do not apply the conventional Weiss system to a pure oncocytic cortical tumor; use Lin–Weiss–Bisceglia criteria.",
      "Always establish cortical lineage in a nonfunctioning adrenal neoplasm when the origin is uncertain.",
    ],
  },
  {
    name: "Adrenocortical Carcinoma",
    group: "Adrenal Cortical Lesions",
    clue: "Diagnose malignancy using validated multiparameter criteria or unequivocal invasion/metastasis—not a single adverse feature.",
    summary:
      "Malignant adrenal cortical neoplasm; conventional, oncocytic, myxoid, and sarcomatoid forms are recognized.",
    clinicalProfile: [
      "Usually occurs in adults, with a peak in middle age; pediatric cases also occur.",
      "Both sexes are affected; some series show a female predominance.",
      "Usually presents as a large unilateral adrenal mass; locally advanced tumors may involve adjacent organs or the renal vein/IVC.",
      "May produce cortisol, androgens, estrogens, or multiple steroid classes; nonfunctioning tumors often present with mass effect or metastatic disease.",
    ],
    criteria: [
      "Confirm adrenal cortical lineage, preferably with SF1.",
      "For conventional tumors, apply the Weiss score and integrate the reticulin algorithm and/or Helsinki score when appropriate.",
      "For pure oncocytic tumors (>90% oncocytic cells), apply the Lin–Weiss–Bisceglia system.",
      "For pediatric tumors, use the Wieneke criteria rather than adult scoring systems alone.",
      "Document mitotic count per 10 mm² and Ki-67 proliferation index in every case.",
      "Identify unequivocal capsular, vascular, or adjacent-organ invasion and assess for metastatic disease.",
      "Sample extensively to evaluate heterogeneous areas, necrosis, mitotic hot spots, and possible adenoma-like regions.",
    ],
    histology: [
      "Tumors are often large, heterogeneous, and invasive, with a variegated cut surface containing hemorrhage and necrosis.",
      "Growth may be diffuse, nested, trabecular, or sheet-like, with loss of normal cortical zonation.",
      "Tumor cells may be clear, eosinophilic, oncocytic, or pleomorphic.",
      "High-grade features include increased mitotic activity, atypical mitoses, coagulative necrosis, and marked nuclear atypia.",
      "Capsular invasion, venous invasion, and direct invasion into adjacent organs are decisive malignant features.",
      "Myxoid carcinoma shows abundant myxoid stroma and may lack some conventional Weiss features.",
      "Sarcomatoid carcinoma contains a malignant spindle-cell component and may show heterologous differentiation.",
    ],
    ihc: [
      "SF1 is the most specific marker for adrenal cortical differentiation.",
      "Melan-A, inhibin-alpha, and calretinin are commonly positive but may be reduced or lost in high-grade tumors.",
      "Ki-67 is a key prognostic marker; a high index, often above 5% and frequently above 15% in clearly malignant tumors, supports aggressive behavior.",
      "p53 overexpression or an aberrant pattern may support malignancy in selected cases.",
      "IGF2 overexpression, often with paranuclear staining, is a useful translational biomarker in the distinction from adenoma.",
      "Chromogranin is generally negative, helping exclude pheochromocytoma.",
    ],
    differential: [
      {
        name: "Adrenocortical adenoma",
        distinction:
          "Adenoma lacks sufficient malignant criteria; carcinoma is supported by a qualifying Weiss, Lin–Weiss–Bisceglia, reticulin, or Helsinki assessment, or by unequivocal invasion.",
      },
      {
        name: "Adrenocortical nodular disease",
        distinction:
          "Nodular disease is multifocal and generally lacks malignant cytology, destructive invasion, and a qualifying carcinoma score.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma expresses chromaffin/neuroendocrine markers and lacks SF1; adrenocortical carcinoma shows cortical lineage markers.",
      },
      {
        name: "Metastatic carcinoma",
        distinction:
          "Exclude renal, lung, and other primaries with clinical history and a focused panel; SF1 strongly supports adrenal cortical origin.",
      },
    ],
    molecular: [
      "Common molecular events include alterations in TP53, CTNNB1, ZNRF3, CDKN2A, and the IGF2 locus.",
      "Germline TP53, MEN1, APC, MSH2, and other cancer-predisposition genes may be implicated in selected patients.",
      "Molecular profiling may assist in difficult cases and identify potential therapeutic targets, but it does not replace histologic criteria.",
    ],
    pitfalls: [
      "Record both mitotic count and Ki-67 index in all carcinomas.",
      "Myxoid and oncocytic variants require appropriate scoring systems to avoid underdiagnosis or overdiagnosis.",
      "Adenoma-like areas do not exclude carcinoma; extensively sample the tumor.",
    ],
  },
  {
    name: "Adrenal Sex Cord-Stromal Tumor",
    group: "Other Adrenal Tumors",
    clue: "A rare adrenal neoplasm with sex cord-stromal differentiation; distinguish it from cortical and metastatic tumors by morphology and lineage markers.",
    summary:
      "Rare adrenal tumors resembling ovarian or testicular sex cord-stromal neoplasms, including Leydig cell and granulosa cell tumor types.",
    clinicalProfile: [
      "Reported across a broad age range; no reliable age peak is established.",
      "Both sexes may be affected.",
      "Arises within the adrenal gland and may be hormonally active.",
      "May present as an incidental adrenal mass or with endocrine manifestations related to steroid production.",
    ],
    criteria: [
      "Identify a sex cord-stromal morphology rather than conventional adrenal cortical or chromaffin differentiation.",
      "Use a panel supporting sex cord-stromal lineage and exclude adrenal cortical, melanocytic, and metastatic neoplasms.",
      "Classify by the dominant pattern, such as Leydig cell or granulosa cell tumor-like differentiation.",
      "Assess mitotic activity, necrosis, atypia, and invasion; the biological behavior of these rare adrenal tumors is not fully established.",
    ],
    histology: [
      "Leydig cell tumor-like areas are composed of polygonal cells with abundant eosinophilic or vacuolated cytoplasm.",
      "Granulosa cell tumor-like areas may show microfollicular, trabecular, or diffuse growth.",
      "Reinke crystalloids may be present in Leydig cell tumor-like areas but are not invariably identified.",
      "Call-Exner bodies and grooved nuclei may support granulosa cell tumor-like differentiation.",
    ],
    ihc: [
      "Inhibin-alpha, calretinin, and SF1 may support sex cord-stromal differentiation, but overlap with adrenal cortical tumors requires a panel and morphologic correlation.",
      "Melan-A may be positive and is not specific for adrenal cortical lineage in this setting.",
      "Chromogranin and synaptophysin are generally negative.",
      "Use FOXL2 and other sex cord-stromal markers selectively when granulosa cell differentiation is suspected.",
    ],
    differential: [
      {
        name: "Adrenocortical adenoma",
        distinction:
          "Both may express SF1, inhibin, and Melan-A; evaluate the architecture and use a broader sex cord-stromal panel rather than relying on a single marker.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Carcinoma shows cortical differentiation and qualifying malignant features; sex cord-stromal tumors show a distinct sex cord pattern and immunophenotype.",
      },
      {
        name: "Adrenal rest",
        distinction:
          "Adrenal rest is bland ectopic cortical tissue without a true sex cord-stromal neoplastic pattern.",
      },
      {
        name: "Metastatic gonadal sex cord-stromal tumor",
        distinction:
          "Correlate with prior gonadal tumors and imaging; a primary adrenal origin requires exclusion of an extra-adrenal primary.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma contains mature adipocytes and trilineage hematopoietic elements, not a neoplastic sex cord-stromal proliferation.",
      },
      {
        name: "Adrenal adenomatoid tumor",
        distinction:
          "Adenomatoid tumor expresses mesothelial markers and forms tubules or slit-like spaces rather than sex cord-type structures.",
      },
      {
        name: "Adrenal melanoma",
        distinction:
          "Melanoma shows melanocytic differentiation with SOX10, S100, and HMB45; sex cord-stromal tumors lack this melanocytic profile.",
      },
    ],
    molecular: [
      "No recurrent molecular alteration is established as a routine diagnostic marker for adrenal sex cord-stromal tumors.",
    ],
    pitfalls: [
      "Because SF1, inhibin, and Melan-A can overlap with adrenal cortical tumors, interpret them as a panel and in conjunction with architecture.",
    ],
  },
  {
    name: "Adrenal Adenomatoid Tumor",
    group: "Other Adrenal Tumors",
    clue: "A benign mesothelial neoplasm with vacuolated cells forming tubules, channels, and slit-like spaces.",
    summary:
      "Rare benign mesothelial tumor of the adrenal gland, usually incidental and cured by complete excision.",
    clinicalProfile: [
      "Usually occurs in adults; reported cases span a broad age range.",
      "No established sex predilection.",
      "May arise in either adrenal gland.",
      "Usually an incidental, nonfunctioning mass without specific symptoms.",
    ],
    criteria: [
      "Identify a well-circumscribed tumor with characteristic adenomatoid architecture.",
      "Demonstrate mesothelial differentiation with an appropriate immunohistochemical panel.",
      "Exclude vascular neoplasms, metastatic carcinoma, and other vacuolated-cell tumors.",
      "Assess for destructive invasion or significant atypia, which are not features of conventional adenomatoid tumor.",
    ],
    histology: [
      "Composed of epithelioid cells with vacuolated cytoplasm arranged in tubules, anastomosing channels, cords, and slit-like spaces.",
      "Intracytoplasmic vacuoles may create signet-ring-like cells.",
      "The stroma is often fibrous or hyalinized.",
      "Nuclei are generally bland, with low mitotic activity and no destructive invasion.",
    ],
    ihc: [
      "Calretinin, WT1, D2-40, and cytokeratins support mesothelial differentiation.",
      "CK5/6 is commonly positive.",
      "ERG and CD31 are generally negative in tumor cells, helping exclude vascular neoplasms.",
      "BAP1 expression is usually retained; loss may be assessed in selected cases but is not required for diagnosis.",
    ],
    differential: [
      {
        name: "Adrenal cyst",
        distinction:
          "Adenomatoid tumor is a solid mesothelial neoplasm with a characteristic cellular architecture; mesothelial cyst is a fluid-filled lesion lined by a flattened mesothelial layer.",
      },
      {
        name: "Adrenal sex cord-stromal tumor",
        distinction:
          "Sex cord-stromal tumors show Leydig or granulosa cell-like morphology and a different immunophenotypic profile; adenomatoid tumor expresses mesothelial markers.",
      },
      {
        name: "Vascular neoplasm",
        distinction:
          "Vascular tumors express endothelial markers such as ERG and CD31; adenomatoid tumor is mesothelial-marker positive.",
      },
      {
        name: "Metastatic signet-ring carcinoma",
        distinction:
          "Carcinoma shows epithelial malignancy and organ-specific markers; adenomatoid tumor has bland mesothelial cells and mesothelial marker expression.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma is a benign admixture of mature fat and trilineage hematopoietic cells, without mesothelial tubules or channels.",
      },
      {
        name: "Adrenal melanoma",
        distinction:
          "Melanoma is a malignant melanocytic neoplasm expressing SOX10/S100/HMB45; adenomatoid tumor expresses mesothelial markers.",
      },
    ],
    molecular: [
      "BAP1 immunohistochemistry may be informative in selected cases; no routine molecular test is required.",
    ],
    pitfalls: [
      "Intracytoplasmic vacuoles can mimic signet-ring carcinoma; confirm mesothelial differentiation and assess cytologic blandness.",
    ],
  },
  {
    name: "Adrenal Melanoma",
    group: "Other Adrenal Tumors",
    clue: "A primary adrenal melanocytic malignancy is a diagnosis of exclusion; rigorously exclude metastatic melanoma.",
    summary:
      "Exceptionally rare malignant melanocytic neoplasm arising in the adrenal gland, requiring clinical exclusion of a cutaneous, ocular, or mucosal primary.",
    clinicalProfile: [
      "Reported mainly in adults; the number of cases is too small to define a reliable age or sex distribution.",
      "Arises in one adrenal gland and may present as a large mass.",
      "May be nonfunctioning and discovered incidentally or present with abdominal symptoms or metastatic disease.",
      "A prior or concurrent melanoma elsewhere must be excluded.",
    ],
    criteria: [
      "Demonstrate a malignant neoplasm with melanocytic differentiation.",
      "Confirm melanocytic lineage with a panel including SOX10, S100, HMB45, and Melan-A.",
      "Exclude metastatic melanoma through complete clinical history, skin and mucosal examination, and appropriate imaging.",
      "Exclude a melanotic nerve sheath tumor and other adrenal neoplasms with melanocytic marker expression.",
    ],
    histology: [
      "May show epithelioid, spindle-cell, or mixed morphology.",
      "Tumor cells may contain variable amounts of melanin pigment.",
      "Marked nuclear atypia, mitotic activity, necrosis, and invasive growth support malignancy.",
      "Amelanotic examples may lack visible pigment and require immunohistochemistry for recognition.",
    ],
    ihc: [
      "SOX10 and S100 are commonly positive.",
      "HMB45 and Melan-A support melanocytic differentiation.",
      "SF1 and chromogranin are negative, helping exclude cortical and chromaffin tumors.",
      "PRAME may be supportive in selected cases but is not independently diagnostic.",
    ],
    differential: [
      {
        name: "Metastatic melanoma",
        distinction:
          "The distinction is clinical rather than purely morphologic; exclude a primary melanoma elsewhere before assigning primary adrenal origin.",
      },
      {
        name: "Adrenocortical carcinoma",
        distinction:
          "Adrenocortical carcinoma expresses SF1 and often Melan-A, but typically lacks SOX10 and S100; use a complete lineage panel.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma expresses chromogranin and synaptophysin and lacks a convincing melanocytic immunophenotype.",
      },
      {
        name: "Malignant melanotic nerve sheath tumor",
        distinction:
          "Consider a nerve-associated tumor with melanocytic markers and assess for PRKAR1A loss and characteristic psammomatous or schwannian features.",
      },
      {
        name: "Adrenal myelolipoma",
        distinction:
          "Myelolipoma contains mature adipose tissue and trilineage hematopoietic elements and lacks melanocytic differentiation.",
      },
      {
        name: "Adrenal sex cord-stromal tumor",
        distinction:
          "Sex cord-stromal tumors show sex cord differentiation and typically lack the SOX10/S100/HMB45 profile of melanoma.",
      },
      {
        name: "Adrenal adenomatoid tumor",
        distinction:
          "Adenomatoid tumor is a bland mesothelial neoplasm expressing calretinin, WT1, and D2-40 rather than melanocytic markers.",
      },
    ],
    molecular: [
      "No molecular alteration is established as a defining diagnostic feature of primary adrenal melanoma.",
    ],
    pitfalls: [
      "Primary adrenal melanoma should be diagnosed only after a thorough search for a primary melanoma elsewhere.",
    ],
  },
  {
    name: "Neuroblastoma",
    group: "Neuroblastic Tumors",
    clue: "A neuroblastic tumor with neuropil and neuroblasts; classify differentiation and Schwannian stroma using the International Neuroblastoma Pathology Classification.",
    summary:
      "Malignant embryonal tumor of sympathetic nervous system lineage, commonly arising in the adrenal medulla in young children.",
    clinicalProfile: [
      "Predominantly affects infants and young children, usually before 5 years of age.",
      "Both sexes are affected, with a slight male predominance in many series.",
      "Commonly arises in the adrenal medulla; extra-adrenal sites include paraspinal sympathetic chains.",
      "May present with an abdominal mass, bone pain, periorbital ecchymoses, or systemic symptoms; catecholamine metabolites are often elevated.",
    ],
    criteria: [
      "Identify a neuroblastic neoplasm composed of neuroblasts in a neuropil-rich background.",
      "Classify as undifferentiated, poorly differentiated, or differentiating neuroblastoma according to neuroblastic differentiation.",
      "Assess Schwannian stroma content and classify the tumor within the International Neuroblastoma Pathology Classification.",
      "Record mitosis-karyorrhexis index and age-related histologic risk features.",
      "Integrate MYCN status, DNA ploidy, segmental chromosomal aberrations, and clinical stage for risk stratification.",
    ],
    histology: [
      "Undifferentiated neuroblastoma is composed of small round blue cells with scant cytoplasm and inconspicuous neuropil.",
      "Poorly differentiated neuroblastoma shows neuroblasts with neuropil and occasional Homer Wright rosettes.",
      "Differentiating neuroblastoma contains cells with recognizable ganglion-cell maturation and more abundant eosinophilic cytoplasm.",
      "Schwannian stroma is absent or scant in conventional neuroblastoma.",
      "The mitosis-karyorrhexis index is assessed in representative tumor areas and contributes to histologic risk classification.",
    ],
    ihc: [
      "PHOX2B is a highly useful nuclear marker of peripheral neuroblastic differentiation.",
      "Synaptophysin, chromogranin, and INSM1 support neuronal/neuroendocrine differentiation.",
      "CD56 and NB84 may be positive but are less specific.",
      "S100 highlights Schwannian stroma and sustentacular elements rather than the neuroblasts.",
      "Tyrosine hydroxylase may support catecholaminergic differentiation.",
    ],
    differential: [
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Intermixed ganglioneuroblastoma is Schwannian stroma-rich and contains maturing ganglion cells with scattered neuroblasts; neuroblastoma is stroma-poor and neuroblast-dominant.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Nodular ganglioneuroblastoma contains a discrete neuroblastoma nodule within a Schwannian stroma-rich background; extensively sample to identify the nodule.",
      },
      {
        name: "Ganglioneuroma",
        distinction:
          "Ganglioneuroma is Schwannian stroma-dominant and contains mature or maturing ganglion cells without neuroblast clusters.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma is composed of chromaffin cells with nested architecture and sustentacular cells; neuroblastoma shows neuropil and small neuroblasts and is typically PHOX2B positive.",
      },
    ],
    molecular: [
      "MYCN amplification is a major adverse prognostic feature.",
      "ALK activating mutations or amplification occur in a subset and may be therapeutically relevant.",
      "Segmental chromosomal aberrations, including 1p and 11q loss and 17q gain, contribute to risk stratification.",
      "Telomere maintenance mechanisms, including TERT rearrangements or ATRX alterations, are associated with aggressive biology in selected tumors.",
    ],
    pitfalls: [
      "Do not classify a neuroblastic tumor without assessing Schwannian stroma and the presence or absence of neuroblastoma nodules.",
      "Molecular risk markers are essential to clinical risk stratification but do not replace histologic classification.",
    ],
  },
  {
    name: "Ganglioneuroblastoma, Intermixed",
    group: "Neuroblastic Tumors",
    clue: "Schwannian stroma-rich tumor with maturing ganglion cells and scattered neuroblasts, without discrete neuroblastoma nodules.",
    summary:
      "Intermediate-category neuroblastic tumor composed of intermixed Schwannian stroma, ganglion cells, and neuroblastic elements.",
    clinicalProfile: [
      "Usually occurs in children, often older than those with neuroblastoma.",
      "Both sexes are affected.",
      "Commonly arises in the adrenal gland or sympathetic chain.",
      "May present as an abdominal mass; symptoms and catecholamine findings overlap with other neuroblastic tumors.",
    ],
    criteria: [
      "Demonstrate a Schwannian stroma-rich tumor with maturing ganglion cells and scattered neuroblastic cells.",
      "Confirm the absence of discrete neuroblastoma nodules after adequate sampling.",
      "Classify as intermixed rather than nodular ganglioneuroblastoma based on the distribution of neuroblastic elements.",
      "Integrate age, histology, and molecular risk factors for clinical risk assignment.",
    ],
    histology: [
      "Schwannian stroma is abundant and distributed throughout the tumor.",
      "Maturing ganglion cells are scattered within the Schwannian stroma.",
      "Neuroblastic cells are present as small clusters or scattered cells rather than forming discrete nodules.",
      "The tumor is usually solid and well defined with a pale gray cut surface.",
    ],
    ihc: [
      "S100 and SOX10 highlight Schwannian stroma.",
      "Synaptophysin, chromogranin, and PHOX2B highlight neuroblastic/ganglion cell components.",
      "Neurofilament may highlight neuronal processes and neuropil.",
    ],
    differential: [
      {
        name: "Neuroblastoma",
        distinction:
          "Neuroblastoma is Schwannian stroma-poor and neuroblast-dominant, without the diffuse stroma-rich maturation pattern of intermixed ganglioneuroblastoma.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Nodular ganglioneuroblastoma contains one or more discrete neuroblastoma nodules; intermixed disease lacks such nodules after adequate sampling.",
      },
      {
        name: "Ganglioneuroma",
        distinction:
          "Ganglioneuroma contains mature or maturing ganglion cells in abundant Schwannian stroma without neuroblast clusters.",
      },
    ],
    molecular: [
      "Molecular testing is not required to establish the histologic category but genomic profiling of any neuroblastic component may inform risk assessment.",
    ],
    pitfalls: [
      "Extensively sample the tumor to exclude a discrete neuroblastoma nodule, which changes classification to nodular ganglioneuroblastoma.",
    ],
  },
  {
    name: "Ganglioneuroblastoma, Nodular",
    group: "Neuroblastic Tumors",
    clue: "A discrete neuroblastoma nodule arising within a Schwannian stroma-rich ganglioneuromatous component.",
    summary:
      "Heterogeneous neuroblastic tumor containing a neuroblastoma nodule within a Schwannian stroma-rich background; behavior is driven by the neuroblastoma component.",
    clinicalProfile: [
      "Usually occurs in children; age and presentation vary with the neuroblastoma nodule and risk group.",
      "Both sexes are affected.",
      "Most often arises in the adrenal gland or sympathetic chain.",
      "May present as an abdominal mass or metastatic disease; catecholamine metabolites may be elevated.",
    ],
    criteria: [
      "Identify a Schwannian stroma-rich component with ganglion-cell maturation.",
      "Identify one or more discrete nodules of neuroblastoma within that background.",
      "Classify and risk-stratify the neuroblastoma nodule using the International Neuroblastoma Pathology Classification.",
      "Sample extensively because the nodular component may be focal and determine prognosis.",
    ],
    histology: [
      "The background component resembles ganglioneuroma or intermixed ganglioneuroblastoma.",
      "Discrete nodules show neuroblastoma morphology, with neuroblasts and neuropil and little Schwannian stroma.",
      "The neuroblastoma nodule may be sharply demarcated from the Schwannian stroma-rich component.",
      "Mitotic-karyorrhectic activity and differentiation are assessed within the neuroblastoma nodule.",
    ],
    ihc: [
      "S100 and SOX10 highlight the Schwannian stroma-rich component.",
      "PHOX2B, synaptophysin, and chromogranin highlight the neuroblastic nodule.",
      "Neurofilament highlights neuropil and neuronal processes.",
    ],
    differential: [
      {
        name: "Neuroblastoma",
        distinction:
          "Neuroblastoma lacks the substantial Schwannian stroma-rich ganglioneuromatous component that characterizes nodular ganglioneuroblastoma.",
      },
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Intermixed ganglioneuroblastoma has scattered neuroblasts without discrete neuroblastoma nodules; a discrete nodule establishes the nodular subtype.",
      },
      {
        name: "Ganglioneuroma",
        distinction:
          "Ganglioneuroma lacks neuroblastoma nodules and contains mature or maturing ganglion cells in dominant Schwannian stroma.",
      },
    ],
    molecular: [
      "Genomic/molecular testing of the neuroblastoma component is desirable for risk stratification, including MYCN and segmental chromosomal aberrations.",
    ],
    pitfalls: [
      "The neuroblastoma nodule may be small; generous sampling is essential because it determines classification and risk.",
    ],
  },
  {
    name: "Ganglioneuroma",
    group: "Neuroblastic Tumors",
    clue: "Schwannian stroma-dominant tumor with mature or maturing ganglion cells and no neuroblast clusters.",
    summary:
      "Benign, differentiated neuroblastic tumor composed of mature Schwannian stroma and ganglion cells.",
    clinicalProfile: [
      "Usually occurs in children, adolescents, and young adults, but may be diagnosed at any age.",
      "Both sexes are affected.",
      "Commonly arises in the adrenal medulla or paraspinal sympathetic chain.",
      "Often incidental; may cause symptoms from mass effect or, rarely, hormone secretion.",
    ],
    criteria: [
      "Demonstrate a dominant Schwannian stromal component.",
      "Identify mature and/or maturing ganglion cells.",
      "Exclude neuroblast clusters in neuropil and discrete neuroblastoma nodules after adequate sampling.",
      "Classify as maturing or mature ganglioneuroma according to the degree of ganglion-cell maturation.",
    ],
    histology: [
      "Abundant Schwannian stroma forms the dominant component.",
      "Mature ganglion cells are scattered singly or in small groups.",
      "Maturing ganglion cells may show intermediate forms and residual neuroblastic features.",
      "Neuroblast clusters and discrete neuroblastoma nodules are absent.",
      "The tumor is typically well circumscribed and solid.",
    ],
    ihc: [
      "S100 and SOX10 highlight the Schwannian stroma.",
      "Synaptophysin and chromogranin highlight ganglion cells and neuronal elements.",
      "PHOX2B may label ganglion cells and supports peripheral neuroblastic lineage.",
      "Neurofilament highlights neuronal processes.",
    ],
    differential: [
      {
        name: "Neuroblastoma",
        distinction:
          "Neuroblastoma is composed of immature neuroblasts in neuropil and lacks the dominant mature Schwannian stroma and mature ganglion cells.",
      },
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Intermixed ganglioneuroblastoma contains scattered neuroblasts within Schwannian stroma; ganglioneuroma lacks neuroblast clusters.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Nodular ganglioneuroblastoma contains discrete neuroblastoma nodules; ganglioneuroma has no such nodules.",
      },
    ],
    molecular: [
      "Molecular testing is not clinically relevant for a conventional ganglioneuroma.",
    ],
    pitfalls: [
      "The absence of neuroblastoma requires adequate sampling, particularly in a large heterogeneous tumor.",
    ],
  },
  {
    name: "Pheochromocytoma",
    group: "Paraganglioma and Pheochromocytoma",
    clue: "An adrenal medullary chromaffin neoplasm; confirm neuroendocrine differentiation and assess hereditary risk and metastatic potential.",
    summary:
      "Intra-adrenal sympathetic paraganglioma composed of chromaffin cells; all tumors have metastatic potential, although risk varies.",
    clinicalProfile: [
      "Can occur at any age, with many cases diagnosed in adults; hereditary cases may present earlier.",
      "Both sexes are affected.",
      "Arises in the adrenal medulla and may be unilateral or bilateral.",
      "May cause episodic or sustained hypertension, headache, palpitations, diaphoresis, tremor, and anxiety; some tumors are clinically silent.",
      "Biochemical testing typically demonstrates elevated plasma free or urinary fractionated metanephrines.",
    ],
    criteria: [
      "Identify a chromaffin neoplasm arising within the adrenal gland.",
      "Confirm neuroendocrine differentiation with chromogranin and synaptophysin or INSM1.",
      "Assess sustentacular cells with S100 or SOX10, recognizing that they may be reduced in some tumors.",
      "Document tumor size, necrosis, mitotic activity, vascular/capsular invasion, and extension into surrounding tissue.",
      "Do not classify a pheochromocytoma as benign solely on morphology; metastatic disease is defined by tumor at sites where paraganglial tissue is normally absent.",
      "Consider germline testing in all patients, given the substantial hereditary fraction.",
    ],
    histology: [
      "Classic zellballen architecture consists of nests of tumor cells separated by delicate fibrovascular septa.",
      "Tumor cells have granular amphophilic or eosinophilic cytoplasm and round nuclei with finely stippled chromatin.",
      "A sustentacular cell network may surround tumor nests.",
      "Pseudorosettes, diffuse growth, spindle-cell areas, and degenerative atypia may occur.",
      "Necrosis, increased mitotic activity, and vascular invasion may be present but do not alone establish metastatic behavior.",
    ],
    ihc: [
      "Chromogranin A and synaptophysin are usually strongly positive in tumor cells.",
      "INSM1 is a useful nuclear marker of neuroendocrine differentiation.",
      "GATA3 and tyrosine hydroxylase may support catecholaminergic differentiation.",
      "S100 and SOX10 highlight sustentacular cells, which may be sparse or absent in some tumors.",
      "Keratin is usually negative or only focally positive; diffuse keratin expression should prompt consideration of a neuroendocrine carcinoma or another mimic.",
      "SDHB loss, with intact internal controls, suggests SDH complex dysfunction.",
    ],
    differential: [
      {
        name: "Sympathetic paraganglioma",
        distinction:
          "Pheochromocytoma is intra-adrenal; sympathetic paraganglioma is extra-adrenal, usually along the thoracoabdominal sympathetic chain.",
      },
      {
        name: "Parasympathetic paraganglioma",
        distinction:
          "Parasympathetic paragangliomas usually arise in the head and neck and are often nonsecretory; pheochromocytoma is adrenal and commonly catecholamine-producing.",
      },
      {
        name: "Composite pheochromocytoma",
        distinction:
          "Composite pheochromocytoma contains a second recognizable component, most often ganglioneuroma, ganglioneuroblastoma, neuroblastoma, or rarely MPNST.",
      },
      {
        name: "Adrenocortical adenoma/carcinoma",
        distinction:
          "Cortical tumors express SF1 and commonly Melan-A/inhibin; pheochromocytoma expresses chromaffin markers and lacks SF1.",
      },
    ],
    molecular: [
      "A substantial proportion are hereditary; relevant genes include RET, VHL, NF1, SDHA, SDHB, SDHC, SDHD, SDHAF2, MAX, TMEM127, FH, and other susceptibility genes.",
      "SDHB immunohistochemistry is a useful screening tool for SDH-deficient tumors; loss of SDHA may identify SDHA-associated disease.",
      "Molecular classification includes pseudohypoxia, kinase-signaling, and Wnt-altered pathways.",
      "Germline testing is recommended or strongly considered for all patients with pheochromocytoma/paraganglioma.",
    ],
    pitfalls: [
      "Do not use the terms benign and malignant based solely on histologic appearance; metastatic behavior is established by metastases to sites lacking normal paraganglia.",
      "A negative family history does not exclude a germline predisposition.",
    ],
  },
  {
    name: "Sympathetic Paraganglioma",
    group: "Paraganglioma and Pheochromocytoma",
    clue: "An extra-adrenal paraganglial neoplasm arising along the sympathetic chain, often catecholamine-secreting.",
    summary:
      "Extra-adrenal sympathetic paraganglioma, typically arising in the thoracoabdominal retroperitoneum or organ of Zuckerkandl.",
    clinicalProfile: [
      "Usually occurs in adults but may present at younger ages in hereditary disease.",
      "Both sexes are affected.",
      "Common sites include the para-aortic retroperitoneum, organ of Zuckerkandl, thorax, and pelvis.",
      "May produce catecholamine-related hypertension, palpitations, headache, and diaphoresis; some tumors are nonsecretory.",
    ],
    criteria: [
      "Identify a paraganglial neoplasm outside the adrenal gland in a sympathetic distribution.",
      "Confirm neuroendocrine differentiation and evaluate sustentacular cells.",
      "Correlate with plasma or urinary metanephrines and functional imaging where indicated.",
      "Assess for hereditary predisposition and metastatic disease.",
      "Do not infer benign behavior from bland morphology; metastatic disease is defined by tumor at sites without normal paraganglia.",
    ],
    histology: [
      "Nested zellballen architecture with delicate vascular septa is typical.",
      "Tumor cells have granular eosinophilic cytoplasm and round nuclei with stippled chromatin.",
      "Sustentacular cells may surround nests but can be reduced in SDHx-related tumors.",
      "Necrosis, mitoses, and vascular invasion may occur but are not independently definitive for metastasis.",
    ],
    ihc: [
      "Chromogranin, synaptophysin, and INSM1 are positive in chief cells.",
      "S100 and SOX10 highlight sustentacular cells.",
      "GATA3 and tyrosine hydroxylase may support sympathetic differentiation.",
      "SDHB loss suggests SDH deficiency; SDHA loss may point to SDHA-related disease.",
    ],
    differential: [
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma is intra-adrenal; sympathetic paraganglioma is extra-adrenal along the sympathetic chain.",
      },
      {
        name: "Parasympathetic paraganglioma",
        distinction:
          "Parasympathetic tumors typically arise in the head and neck and are commonly nonsecretory, whereas sympathetic tumors are usually thoracoabdominal and more often functional.",
      },
      {
        name: "Composite paraganglioma",
        distinction:
          "Composite tumors contain an additional neuroblastic or nerve sheath component; conventional sympathetic paraganglioma has a single paraganglial component.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Neuroblastoma is an immature neuroblastic tumor with neuropil and small neuroblasts; paraganglioma shows mature chromaffin-type zellballen nests.",
      },
    ],
    molecular: [
      "Hereditary susceptibility genes include SDHA, SDHB, SDHC, SDHD, SDHAF2, VHL, RET, NF1, MAX, TMEM127, and FH.",
      "SDHB immunohistochemistry is a useful screen for SDH pathway deficiency.",
      "Genetic evaluation is particularly important for young age, multifocality, family history, or metastatic disease.",
    ],
    pitfalls: [
      "Do not use 'extra-adrenal pheochromocytoma'; the preferred term is sympathetic paraganglioma.",
      "Metastatic potential cannot be reliably determined by routine histology alone.",
    ],
  },
  {
    name: "Parasympathetic Paraganglioma",
    group: "Paraganglioma and Pheochromocytoma",
    clue: "A head and neck paraganglial tumor, commonly associated with the carotid body, jugulotympanic region, or vagal nerve.",
    summary:
      "Usually nonsecretory head and neck paraganglioma arising from parasympathetic paraganglia.",
    clinicalProfile: [
      "Usually occurs in adults, often in the fifth to sixth decades; hereditary cases may present earlier and multifocally.",
      "Both sexes are affected; some sites show a female predominance.",
      "Common sites include carotid body, jugulotympanic region, and vagal paraganglia.",
      "Usually presents as a slowly enlarging painless neck mass, pulsatile mass, hearing symptoms, tinnitus, or lower cranial nerve dysfunction.",
      "Most are nonsecretory, although biochemical evaluation is appropriate when clinically indicated.",
    ],
    criteria: [
      "Identify a paraganglial neoplasm at a characteristic head and neck parasympathetic site.",
      "Confirm chief-cell neuroendocrine differentiation and assess the sustentacular network.",
      "Correlate with imaging to define the anatomic site and extent.",
      "Evaluate for multifocal disease and hereditary susceptibility, particularly SDHx-related disease.",
      "Do not assign benign or malignant status based on histology alone; metastatic disease establishes malignancy.",
    ],
    histology: [
      "Tumor cells form nests and trabeculae separated by a rich capillary network.",
      "Chief cells have granular eosinophilic cytoplasm and round nuclei with finely stippled chromatin.",
      "Sustentacular cells surround nests and may be reduced in SDH-deficient tumors.",
      "Hyaline globules, degenerative atypia, and variable cellularity may occur.",
    ],
    ihc: [
      "Chromogranin, synaptophysin, and INSM1 are positive in chief cells.",
      "S100 and SOX10 highlight sustentacular cells.",
      "GATA3 is often positive.",
      "SDHB loss supports an SDH-deficient tumor and should prompt genetic evaluation.",
      "Keratin is usually negative; diffuse keratin expression raises concern for a carcinoma mimic.",
    ],
    differential: [
      {
        name: "Pheochromocytoma",
        distinction:
          "Pheochromocytoma arises in the adrenal medulla and is often catecholamine-secreting; parasympathetic paraganglioma arises in head and neck paraganglia and is usually nonsecretory.",
      },
      {
        name: "Sympathetic paraganglioma",
        distinction:
          "Sympathetic paraganglioma arises along the thoracoabdominal sympathetic chain and is more often functional; parasympathetic tumors are usually in the head and neck.",
      },
      {
        name: "Composite paraganglioma",
        distinction:
          "Composite tumors contain a second distinct neural/neuroblastic or nerve sheath component not present in conventional parasympathetic paraganglioma.",
      },
      {
        name: "Metastatic neuroendocrine tumor",
        distinction:
          "Use site, clinical history, keratin expression, and a focused panel; paraganglioma typically has a sustentacular network and lacks diffuse epithelial keratin.",
      },
    ],
    molecular: [
      "Germline SDHD, SDHB, SDHC, SDHA, and SDHAF2 variants are important causes of hereditary head and neck paraganglioma.",
      "Other susceptibility genes include VHL, RET, NF1, MAX, and TMEM127.",
      "SDHB immunohistochemistry is useful for screening SDH pathway deficiency.",
    ],
    pitfalls: [
      "Head and neck paragangliomas may be multifocal, particularly in SDHD-associated disease.",
      "Do not infer metastatic behavior from pleomorphism or mitotic activity alone.",
    ],
  },
  {
    name: "Composite Pheochromocytoma or Paraganglioma",
    group: "Paraganglioma and Pheochromocytoma",
    clue: "A paraganglial neoplasm with a second, morphologically distinct neural, neuroblastic, or nerve sheath component.",
    summary:
      "Composite tumors combine pheochromocytoma or paraganglioma with ganglioneuroma, ganglioneuroblastoma, neuroblastoma, or rarely malignant peripheral nerve sheath tumor.",
    clinicalProfile: [
      "Usually occurs in adults, although age varies with the associated component and hereditary setting.",
      "Both sexes are affected.",
      "Pheochromocytoma composites arise in the adrenal gland; paraganglioma composites arise at extra-adrenal paraganglial sites.",
      "Clinical presentation is often driven by catecholamine secretion; symptoms related to mass effect or metastatic disease may occur.",
    ],
    criteria: [
      "Identify a conventional pheochromocytoma or paraganglioma component.",
      "Identify a second, distinct and recognizable neural/neuroblastic or nerve sheath component.",
      "Classify the composite tumor according to the paraganglial component and the specific associated component.",
      "Sample extensively to establish the presence and relative distribution of each component.",
      "Assess each component for its own malignant features and evaluate metastatic disease.",
    ],
    histology: [
      "The paraganglial component shows typical zellballen architecture and chromaffin cytology.",
      "The second component may be ganglioneuroma, ganglioneuroblastoma, neuroblastoma, or malignant peripheral nerve sheath tumor.",
      "The two components may be intimately admixed or occur as distinct areas.",
      "The neuroblastic component may show neuropil and immature neuroblasts; ganglioneuroma shows mature ganglion cells in Schwannian stroma.",
      "A sarcomatous component requires careful evaluation for malignant spindle-cell morphology and nerve sheath differentiation.",
    ],
    ihc: [
      "Chromogranin and synaptophysin highlight the pheochromocytoma/paraganglioma component.",
      "S100 and SOX10 highlight sustentacular cells and Schwannian stroma.",
      "PHOX2B may highlight neuroblastic and ganglion-cell components.",
      "A malignant peripheral nerve sheath component may show S100/SOX10 only focally or may lose these markers.",
      "Use component-specific markers to map the two populations rather than interpreting the tumor as a single uniform neoplasm.",
    ],
    differential: [
      {
        name: "Pheochromocytoma",
        distinction:
          "Conventional pheochromocytoma lacks a second morphologically distinct neural, neuroblastic, or nerve sheath component.",
      },
      {
        name: "Sympathetic paraganglioma",
        distinction:
          "Conventional sympathetic paraganglioma is extra-adrenal and lacks a second distinct component; a composite paraganglioma contains an additional neural/neuroblastic element.",
      },
      {
        name: "Parasympathetic paraganglioma",
        distinction:
          "Conventional parasympathetic paraganglioma is a single-component head and neck tumor; composite tumors show a second recognizable component.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Nodular ganglioneuroblastoma is a neuroblastic tumor with a neuroblastoma nodule in Schwannian stroma; composite paraganglial tumors retain a distinct pheochromocytoma/paraganglioma component.",
      },
    ],
    molecular: [
      "Molecular testing should be guided by the paraganglioma component and the clinical context.",
      "Evaluate for hereditary PPGL susceptibility genes, particularly SDHx, RET, VHL, NF1, MAX, and TMEM127.",
      "The associated neural or neuroblastic component may warrant component-directed molecular assessment when clinically indicated.",
    ],
    pitfalls: [
      "Do not label a tumor composite merely because sustentacular cells or ordinary Schwannian stroma are present; the second component must be morphologically distinct and recognizable.",
      "Extensively sample to avoid missing a small neuroblastoma or sarcomatous component.",
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

export default function AdrenalGlandTumorsPage() {
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
          Adrenal Gland Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for adrenal cortical lesions,
          neuroblastic tumors, and adrenal and extra-adrenal paraganglial
          neoplasms, emphasizing lineage confirmation and criteria for
          malignancy.
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
              Confirm adrenal cortical lineage with SF1 in nonfunctioning
              adrenal neoplasms when the origin is uncertain.
            </li>
            <li>
              Use CYP11B2 immunohistochemistry to identify aldosterone-producing
              micronodules and nodules in primary aldosteronism.
            </li>
            <li>
              Apply variant-appropriate criteria: Weiss for conventional
              cortical tumors, Lin–Weiss–Bisceglia for pure oncocytic tumors,
              and Wieneke for pediatric cortical tumors.
            </li>
            <li>
              Record mitotic count and Ki-67 index in every adrenocortical
              carcinoma.
            </li>
            <li>
              Do not infer benign behavior in pheochromocytoma or paraganglioma
              from bland morphology; metastatic disease defines malignant
              behavior.
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
                "Adrenal cortical lesions",
                "Establish SF1-positive cortical lineage; distinguish diffuse hyperplasia, nodular disease, adenoma, and carcinoma.",
              ],
              [
                "Myelolipoma",
                "Mature adipocytes admixed with trilineage hematopoietic elements.",
              ],
              [
                "Neuroblastic tumors",
                "Classify by Schwannian stroma and neuroblastic maturation; search for discrete neuroblastoma nodules.",
              ],
              [
                "Pheochromocytoma / paraganglioma",
                "Chromaffin lineage with zellballen architecture; consider hereditary testing in all patients.",
              ],
              [
                "Composite tumors",
                "Require a second morphologically distinct neural, neuroblastic, or nerve sheath component.",
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
            htmlFor="adrenal-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic criteria
          </label>
          <input
            id="adrenal-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: SF1, CYP11B2, Weiss score, MYCN, SDHB..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-64">
          <label
            htmlFor="adrenal-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="adrenal-group"
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
