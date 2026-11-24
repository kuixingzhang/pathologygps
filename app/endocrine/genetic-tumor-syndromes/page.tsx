"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  clue: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: { name: string; distinction: string }[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Multiple Endocrine Neoplasia Type 1 (MEN1)",
    group: "Multiple Endocrine Neoplasia Syndromes",
    clue: "Multigland parathyroid disease plus pituitary and/or duodenopancreatic NETs; confirm with germline MEN1 testing.",
    profile: [
      "Usually recognized in the second to fifth decades; manifestations accumulate with age.",
      "Affects all sexes; no consistent sex predominance for the syndrome overall.",
      "Parathyroids, anterior pituitary, duodenum and pancreas; may also involve stomach, lungs, thymus, adrenals, skin, CNS, and soft tissue.",
      "Primary hyperparathyroidism is the most frequent manifestation; functioning NETs may cause Zollinger–Ellison syndrome or hypoglycemia.",
    ],
    criteria: [
      "Clinical: at least two MEN1-associated tumors (parathyroid, anterior pituitary, or gastroenteropancreatic NET).",
      "Familial: at least one MEN1-associated tumor in a first-degree relative of a patient with MEN1.",
      "Molecular: pathogenic germline MEN1 variant; a negative result does not fully exclude a clinically convincing syndrome.",
    ],
    histology: [
      "Parathyroids: usually asymmetric multiglandular, multinodular chief-cell proliferations; individual glands may represent multiple clonal microadenomas and typically lack a true atrophic rim.",
      "Pituitary: PitNETs are morphologically similar to sporadic tumors; PIT1-lineage tumors are common, but TPIT- and SF1-lineage tumors and multiple distinct PitNETs may occur.",
      "Pancreas: multifocal PanNETs or a PanNET arising with multiple 0.5–5 mm neuroendocrine microtumors (microadenomatosis) are characteristic.",
      "Duodenum: multiple small gastrin-producing NETs, often with gastrin- and somatostatin-cell hyperplasia in crypts and Brunner glands.",
      "Stomach: multifocal ECL-cell NETs arise in a background of oxyntic ECL-cell hyperplasia associated with hypergastrinemia.",
      "Lung: multifocal neuroendocrine cell hyperplasia, microtumors, and well-differentiated NETs may form a continuum; thymic NETs may also occur.",
    ],
    ihc: [
      "Loss of nuclear menin in tumor cells can support MEN1 pathway inactivation; interpret in the context of multifocal disease because somatic MEN1 alterations also occur in sporadic PanNETs.",
      "Endocrine lineage and hormone stains classify individual PitNETs and NETs but do not independently establish the hereditary syndrome.",
    ],
    molecular: [
      "Autosomal dominant germline loss-of-function MEN1 variants; tumors commonly acquire loss of the wild-type allele (two-hit tumor-suppressor mechanism).",
      "Sequence analysis plus deletion/duplication analysis is appropriate; consider CDKN1B and other MEN1-like genes when testing is negative.",
    ],
    pitfalls: [
      "MEN1-associated parathyroid disease may be asymmetric and asynchronous; a single dominant gland does not exclude multigland disease.",
      "Loss of menin in one tumor is not by itself proof of a germline MEN1 syndrome.",
    ],
    differential: [
      {
        name: "Multiple Endocrine Neoplasia Type 4 (MEN4)",
        distinction:
          "MEN1-like parathyroid, pituitary, and gastroenteropancreatic tumors, but caused by germline CDKN1B rather than MEN1 variants.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5 (MEN5)",
        distinction:
          "MAX-associated phenotype is centered on PPGL and may include pituitary/parathyroid disease and neural-crest tumors; establish the germline gene.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 1 (MEN1) is distinguished by multigland parathyroid disease plus pituitary and/or duodenopancreatic nets; confirm with germline men1 testing.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 1 (MEN1) is distinguished by multigland parathyroid disease plus pituitary and/or duodenopancreatic nets; confirm with germline men1 testing.",
      },
    ],
  },
  {
    name: "Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B)",
    group: "Multiple Endocrine Neoplasia Syndromes",
    clue: "Medullary thyroid carcinoma (often with C-cell hyperplasia) in a patient with a germline activating RET variant.",
    profile: [
      "Often presents in adolescence or adulthood; MEN2B may present early and behave aggressively.",
      "Both sexes are affected.",
      "Thyroid C cells, adrenal medulla, and parathyroid glands; MEN2B also features mucosal and gastrointestinal ganglioneuromas and skeletal abnormalities.",
      "MEN2A: MTC with pheochromocytoma and/or parathyroid disease. MEN2B: MTC, pheochromocytoma, mucosal neuromas, and marfanoid habitus; Hirschsprung disease may occur in selected RET-associated families.",
    ],
    criteria: [
      "Essential molecular criterion: pathogenic germline activating RET variant.",
      "MTC or C-cell hyperplasia in a patient with a known familial RET pathogenic variant is diagnostic of hereditary involvement.",
      "Evaluate for bilateral/multifocal pheochromocytoma and parathyroid disease; distinguish MEN2A from MEN2B by the clinical phenotype and RET genotype.",
    ],
    histology: [
      "Thyroid: bilateral/multifocal C-cell hyperplasia, often progressing to multifocal MTC; tumor distribution commonly favors the upper lateral lobes.",
      "MTC may show nests, trabeculae, or sheets of plasmacytoid or spindle cells with stromal amyloid.",
      "Adrenal: pheochromocytomas are often bilateral and multifocal; extra-adrenal paragangliomas are not typical.",
      "Parathyroids: hyperplasia or adenoma may occur, usually involving multiple glands in MEN2A.",
      "MEN2B may show mucosal neuromas and diffuse ganglioneuromatous proliferations of the gastrointestinal tract.",
    ],
    ihc: [
      "MTC: calcitonin, CEA, chromogranin, synaptophysin, and INSM1 support C-cell/neuroendocrine differentiation; thyroglobulin is negative in tumor cells.",
      "C-cell hyperplasia is highlighted by calcitonin; distinguish a diffuse/increased C-cell population from small nests of invasive MTC by architecture and stromal relationship.",
    ],
    molecular: [
      "Autosomal dominant activating RET proto-oncogene variants; genotype correlates with MEN2A/MEN2B phenotype and clinical risk.",
      "Germline RET testing is indicated in MTC and suspected MEN2; test relatives for the familial variant.",
    ],
    pitfalls: [
      "Do not diagnose MTC solely from C-cell hyperplasia; demonstrate an invasive neoplastic component for carcinoma.",
      "Pheochromocytoma in MEN2 must be recognized before thyroid or parathyroid surgery.",
    ],
    differential: [
      {
        name: "Sporadic Medullary Thyroid Carcinoma",
        distinction:
          "Usually lacks the bilateral C-cell hyperplasia/multifocal pattern and germline RET variant; somatic RET or RAS alterations may occur.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 1 (MEN1)",
        distinction:
          "MEN1 is defined by parathyroid, pituitary, and duodenopancreatic tumors and MEN1 loss, not RET-driven MTC.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 4 (MEN4)",
        distinction:
          "MEN4 mimics MEN1 and is CDKN1B-related; MTC is not a defining manifestation.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B) is distinguished by medullary thyroid carcinoma (often with c-cell hyperplasia) in a patient with a germline activating ret variant.",
      },
    ],
  },
  {
    name: "Multiple Endocrine Neoplasia Type 4 (MEN4)",
    group: "Multiple Endocrine Neoplasia Syndromes",
    clue: "MEN1-like endocrine tumor spectrum with a germline CDKN1B pathogenic variant.",
    profile: [
      "Usually recognized in adulthood; reported manifestations may occur later than in MEN1.",
      "Both sexes are affected.",
      "Parathyroids most commonly, followed by pituitary and gastroenteropancreatic tract; lung and gastric NETs have also been reported.",
      "Primary hyperparathyroidism is the most frequent presentation; pituitary tumors occur in approximately one third of reported patients.",
    ],
    criteria: [
      "Clinical suspicion: MEN1-like endocrine tumors, particularly primary hyperparathyroidism with pituitary and/or gastroenteropancreatic NETs, but negative MEN1 testing.",
      "Essential molecular criterion: pathogenic germline inactivating CDKN1B variant.",
      "A compatible phenotype without molecular confirmation should be described as MEN1-like rather than assumed to be MEN4.",
    ],
    histology: [
      "Parathyroid lesions may be adenomas or multiglandular proliferations and are histologically indistinguishable from MEN1-associated lesions.",
      "Pituitary tumors are morphologically indistinguishable from sporadic PitNETs and MEN1-associated PitNETs.",
      "Pancreatic and other NETs resemble their sporadic counterparts; multiplicity and clinical context raise suspicion.",
    ],
    ihc: [
      "There is no established syndrome-specific immunohistochemical profile that reliably distinguishes MEN4 from MEN1 or sporadic tumors.",
      "Menin expression is generally retained when MEN1 is not inactivated; p27 loss may support CDKN1B pathway disruption but is not a substitute for germline testing.",
    ],
    molecular: [
      "Autosomal dominant germline loss-of-function CDKN1B variants affecting p27Kip1, a cyclin-dependent kinase inhibitor.",
      "Confirm with germline sequencing and appropriate variant interpretation; assess MEN1 and other phenocopy genes when negative.",
    ],
    differential: [
      {
        name: "Multiple Endocrine Neoplasia Type 1 (MEN1)",
        distinction:
          "The phenotype overlaps substantially; MEN1 is caused by MEN1 variants and often shows menin loss in associated tumors.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5 (MEN5)",
        distinction:
          "MEN5 is MAX-related and more characteristically includes PPGL and neural-crest tumors.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 4 (MEN4) is distinguished by men1-like endocrine tumor spectrum with a germline cdkn1b pathogenic variant.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 4 (MEN4) is distinguished by men1-like endocrine tumor spectrum with a germline cdkn1b pathogenic variant.",
      },
    ],
  },
  {
    name: "Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome)",
    group: "Multiple Endocrine Neoplasia Syndromes",
    clue: "Germline MAX pathogenic variant with PPGL and possible pituitary, parathyroid, or neural-crest tumors.",
    profile: [
      "Age at presentation is variable; available cases are limited.",
      "Both sexes may be affected.",
      "Adrenal medulla/extra-adrenal paraganglia, pituitary, parathyroids, and neural-crest-derived sites including ganglioneuroma and neuroblastoma.",
      "PPGL is a central manifestation; patients may also have pituitary or parathyroid disease.",
    ],
    criteria: [
      "Essential: demonstration of a germline pathogenic MAX sequence variant.",
      "Desirable: personal or family history of MEN5-associated lesions, particularly PPGL with pituitary/parathyroid or neural-crest tumors.",
      "A MAX alteration confined to tumor tissue does not establish a hereditary syndrome.",
    ],
    histology: [
      "Pheochromocytoma/paraganglioma morphology is not reliably distinguishable from sporadic or other hereditary PPGLs.",
      "Pituitary and parathyroid tumors generally resemble their sporadic counterparts.",
      "Ganglioneuroma and neuroblastoma show their conventional neural-crest morphology; their occurrence with PPGL should prompt genetic evaluation.",
    ],
    ihc: [
      "PPGLs should be evaluated with standard neuroendocrine markers and SDHB/SDHA when indicated; these stains do not specifically identify MAX syndrome.",
      "No validated MAX-specific immunohistochemical surrogate establishes the germline diagnosis.",
    ],
    molecular: [
      "Autosomal dominant germline MAX loss-of-function variants; MAX is a MYC-associated transcriptional regulator and tumor suppressor in this setting.",
      "Germline testing is required; correlate with tumor sequencing and family history.",
    ],
    differential: [
      {
        name: "Multiple Endocrine Neoplasia Type 1 (MEN1)",
        distinction:
          "MEN1 is characterized by parathyroid, pituitary, and duodenopancreatic tumors and germline MEN1 variants; PPGL is less central.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 4 (MEN4)",
        distinction:
          "MEN4 is CDKN1B-related and typically mimics MEN1 rather than presenting as a MAX-associated PPGL syndrome.",
      },
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Both can cause hereditary PPGL; SDH-associated tumors show SDHB/SDHA loss when the corresponding complex is deficient and are linked to SDHx/SDHAF2 alterations.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B)",
        distinction:
          "Consider Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B) when its defining clinical and molecular pattern is present; Multiple Endocrine Neoplasia Type 5 (MEN5; MAX-Related Tumor Syndrome) is distinguished by germline max pathogenic variant with ppgl and possible pituitary, parathyroid, or neural-crest tumors.",
      },
    ],
  },
  {
    name: "Hyperparathyroidism–Jaw Tumor Syndrome (CDC73-Related Disorder)",
    group: "Parathyroid-Predominant Syndromes",
    clue: "Primary hyperparathyroidism with an ossifying fibroma of the jaw and/or a CDC73 pathogenic variant.",
    profile: [
      "Often presents in young or middle adulthood.",
      "Both sexes are affected.",
      "Parathyroid glands, maxilla/mandible, kidneys, and uterus.",
      "Primary hyperparathyroidism is the usual presentation; parathyroid carcinoma risk is substantially increased compared with sporadic disease.",
    ],
    criteria: [
      "Essential molecular criterion: pathogenic germline CDC73 variant or deletion.",
      "Clinical suspicion: primary hyperparathyroidism, particularly at a young age, with jaw ossifying fibroma or a family history of parathyroid tumors.",
      "Renal and uterine lesions are supportive but are less frequent and not required.",
    ],
    histology: [
      "Parathyroid tumors include adenoma, atypical parathyroid tumor, and carcinoma; carcinoma may show thick fibrous bands, trabecular growth, and capsular/vascular invasion.",
      "Jaw lesions are typically cemento-ossifying fibromas rather than the brown tumors of hyperparathyroidism.",
      "Renal lesions include cystic and neoplastic lesions; uterine lesions may include adenomyosis, leiomyomas, and rare malignant tumors.",
    ],
    ihc: [
      "Loss of nuclear parafibromin in parathyroid tumor cells strongly supports CDC73 pathway inactivation; internal non-neoplastic cells should retain staining.",
      "Parafibromin loss is not absolutely specific for germline disease and should prompt molecular correlation.",
    ],
    molecular: [
      "Autosomal dominant germline inactivating CDC73 variants; tumors commonly show a second hit involving the wild-type allele.",
      "CDC73 encodes parafibromin; germline testing is important in young patients and in parathyroid carcinoma/atypical tumors.",
    ],
    differential: [
      {
        name: "MEN1-Associated Parathyroid Disease",
        distinction:
          "MEN1 typically produces multigland parathyroid proliferations with pituitary and duodenopancreatic NETs; jaw ossifying fibromas and parafibromin loss favor CDC73-related disease.",
      },
      {
        name: "MEN4-Associated Parathyroid Disease",
        distinction:
          "MEN4 is CDKN1B-related and has an MEN1-like phenotype without the characteristic jaw tumor association.",
      },
      {
        name: "Sporadic Parathyroid Adenoma/Carcinoma",
        distinction:
          "Sporadic lesions lack the syndromic jaw/renal/uterine context; parafibromin loss can occur but warrants CDC73 evaluation.",
      },
    ],
  },
  {
    name: "Von Hippel–Lindau Syndrome (VHL)",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "Hemangioblastoma, clear cell renal cell carcinoma, pancreatic serous lesions/PanNET, or PPGL in a patient with germline VHL alteration.",
    profile: [
      "Lesions may arise from childhood through adulthood; surveillance detects many asymptomatic tumors.",
      "Both sexes are affected.",
      "Retina and CNS, kidneys, pancreas, adrenal/extra-adrenal paraganglia, inner ear endolymphatic sac, and reproductive tract.",
      "Major manifestations include retinal/CNS hemangioblastomas, clear cell RCC, pancreatic cysts/serous cystadenomas, PanNETs, pheochromocytoma, and endolymphatic sac tumors.",
    ],
    criteria: [
      "Essential: pathogenic germline VHL variant, or established clinical diagnostic criteria based on characteristic VHL-associated lesions and family history.",
      "In a patient without a family history, multiple characteristic VHL lesions or a highly characteristic lesion with appropriate clinical context warrants genetic assessment.",
      "Classify VHL clinical subtype (types 1, 2A, 2B, 2C) using phenotype and genotype; absence of one manifestation does not exclude VHL.",
    ],
    histology: [
      "CNS/retinal hemangioblastoma: rich capillary network with lipidized stromal cells; stromal cells are the neoplastic component.",
      "Kidney: clear cell RCC, often multifocal and bilateral; renal cysts and precursor lesions may coexist.",
      "Pancreas: serous cystadenomas/cysts and PanNETs; PanNETs may be multiple and show clear-cell change.",
      "Endolymphatic sac tumor: papillary-cystic architecture with oncocytic/clear epithelial cells and a vascular/fibrous stroma.",
      "PPGL morphology overlaps with sporadic tumors; bilateral or multifocal adrenal lesions are important clinical clues.",
    ],
    ihc: [
      "Hemangioblastoma stromal cells typically express inhibin-alpha, S100, and brachyury; endothelial cells outline the vascular network with CD31/CD34.",
      "Clear cell RCC typically expresses PAX8, CAIX (often diffuse box-like), and CD10; interpret within renal morphology.",
      "Endolymphatic sac tumor often expresses CK7 and markers of epithelial differentiation; correlate with its characteristic site and morphology.",
    ],
    molecular: [
      "Autosomal dominant germline VHL tumor-suppressor gene inactivation followed by somatic second-hit loss in tumors.",
      "VHL protein loss dysregulates hypoxia-inducible factor signaling; germline testing confirms hereditary disease.",
    ],
    differential: [
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Both may include PPGL and renal tumors; SDH-deficient tumors show loss of SDHB (or SDHA) and arise in an SDHx context, whereas VHL has a broader hemangioblastoma/RCC/pancreatic cystic phenotype.",
      },
      {
        name: "MEN2",
        distinction:
          "MEN2 is RET-driven and defined by MTC/C-cell hyperplasia with pheochromocytoma; VHL does not cause MTC.",
      },
      {
        name: "Sporadic Clear Cell RCC",
        distinction:
          "VHL pathway alterations are common somatically in sporadic clear cell RCC; germline status and multisystem lesions distinguish VHL syndrome.",
      },
      {
        name: "Neurofibromatosis Type 1 (NF1)",
        distinction:
          "Consider Neurofibromatosis Type 1 (NF1) when its defining clinical and molecular pattern is present; Von Hippel–Lindau Syndrome (VHL) is distinguished by hemangioblastoma, clear cell renal cell carcinoma, pancreatic serous lesions/pannet, or ppgl in a patient with germline vhl alteration.",
      },
      {
        name: "Carney Complex",
        distinction:
          "Consider Carney Complex when its defining clinical and molecular pattern is present; Von Hippel–Lindau Syndrome (VHL) is distinguished by hemangioblastoma, clear cell renal cell carcinoma, pancreatic serous lesions/pannet, or ppgl in a patient with germline vhl alteration.",
      },
      {
        name: "McCune–Albright Syndrome (MAS)",
        distinction:
          "Consider McCune–Albright Syndrome (MAS) when its defining clinical and molecular pattern is present; Von Hippel–Lindau Syndrome (VHL) is distinguished by hemangioblastoma, clear cell renal cell carcinoma, pancreatic serous lesions/pannet, or ppgl in a patient with germline vhl alteration.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "Consider DICER1 Syndrome when its defining clinical and molecular pattern is present; Von Hippel–Lindau Syndrome (VHL) is distinguished by hemangioblastoma, clear cell renal cell carcinoma, pancreatic serous lesions/pannet, or ppgl in a patient with germline vhl alteration.",
      },
    ],
  },
  {
    name: "SDH-Deficient Tumor Syndromes",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "PPGL and/or SDH-deficient GIST with loss of SDHB (and sometimes SDHA) on immunohistochemistry.",
    profile: [
      "Age and presentation vary by the affected SDH gene; tumors may occur in childhood or adulthood.",
      "Both sexes are affected; penetrance and tumor distribution vary among SDHA, SDHB, SDHC, SDHD, and SDHAF2 carriers.",
      "Paraganglia/adrenal medulla, stomach/intestine, and occasionally lung (pulmonary chondroma in Carney triad).",
      "Manifestations include paraganglioma/pheochromocytoma and SDH-deficient GIST; Carney triad includes GIST, paraganglioma, and pulmonary chondroma without an identified germline SDH pathogenic variant.",
    ],
    criteria: [
      "Essential: an SDH-deficient tumor phenotype with a pathogenic germline variant in SDHA, SDHB, SDHC, SDHD, or SDHAF2, or an SDHC promoter epimutation where applicable.",
      "Carney triad is reserved for the clinical combination of SDH-deficient GIST, SDH-deficient paraganglioma, and pulmonary chondroma when no germline SDH pathogenic variant is identified.",
      "Use gene-based terminology when a germline alteration is identified; do not use the historical Carney–Stratakis dyad label.",
    ],
    histology: [
      "PPGLs may be multifocal and/or extra-adrenal; morphology alone does not reliably identify the underlying SDH gene.",
      "SDH-deficient GISTs are often gastric, may be multifocal, and can show epithelioid or mixed morphology with distinctive clinical behavior.",
      "Pulmonary chondroma in Carney triad is a benign cartilaginous lesion; the complete triad may be asynchronous.",
    ],
    ihc: [
      "Loss of granular cytoplasmic SDHB staining in tumor cells, with retained staining in endothelial/stromal internal controls, supports SDH deficiency.",
      "Loss of SDHA together with SDHB supports SDHA-deficient tumors; retained SDHA with loss of SDHB suggests another SDH-complex defect.",
      "SDHB immunohistochemistry is a screening surrogate for dysfunction of the SDH complex, not a gene-specific test.",
    ],
    molecular: [
      "Germline pathogenic variants in SDHA, SDHB, SDHC, SDHD, or SDHAF2; SDHC promoter hypermethylation can produce a non-hereditary Carney triad phenotype.",
      "SDH loss causes succinate accumulation and pseudohypoxic/epigenetic signaling; molecular testing assigns the specific hereditary syndrome.",
    ],
    differential: [
      {
        name: "Von Hippel–Lindau Syndrome",
        distinction:
          "VHL can cause PPGL, but SDH-deficient tumors lose SDHB/SDHA and may be associated with GIST; VHL commonly includes hemangioblastoma and clear cell RCC.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 2",
        distinction:
          "MEN2-associated pheochromocytoma occurs with RET-driven MTC and C-cell hyperplasia; SDH-deficient PPGL lacks this defining thyroid phenotype.",
      },
      {
        name: "Multiple Endocrine Neoplasia Type 5",
        distinction:
          "MAX-related MEN5 may present with PPGL but requires germline MAX alteration; SDH immunophenotype and gene testing distinguish it.",
      },
      {
        name: "Von Hippel–Lindau Syndrome (VHL)",
        distinction:
          "Consider Von Hippel–Lindau Syndrome (VHL) when its defining clinical and molecular pattern is present; SDH-Deficient Tumor Syndromes is distinguished by ppgl and/or sdh-deficient gist with loss of sdhb (and sometimes sdha) on immunohistochemistry.",
      },
      {
        name: "Neurofibromatosis Type 1 (NF1)",
        distinction:
          "Consider Neurofibromatosis Type 1 (NF1) when its defining clinical and molecular pattern is present; SDH-Deficient Tumor Syndromes is distinguished by ppgl and/or sdh-deficient gist with loss of sdhb (and sometimes sdha) on immunohistochemistry.",
      },
      {
        name: "Carney Complex",
        distinction:
          "Consider Carney Complex when its defining clinical and molecular pattern is present; SDH-Deficient Tumor Syndromes is distinguished by ppgl and/or sdh-deficient gist with loss of sdhb (and sometimes sdha) on immunohistochemistry.",
      },
      {
        name: "McCune–Albright Syndrome (MAS)",
        distinction:
          "Consider McCune–Albright Syndrome (MAS) when its defining clinical and molecular pattern is present; SDH-Deficient Tumor Syndromes is distinguished by ppgl and/or sdh-deficient gist with loss of sdhb (and sometimes sdha) on immunohistochemistry.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "Consider DICER1 Syndrome when its defining clinical and molecular pattern is present; SDH-Deficient Tumor Syndromes is distinguished by ppgl and/or sdh-deficient gist with loss of sdhb (and sometimes sdha) on immunohistochemistry.",
      },
    ],
  },
  {
    name: "Neurofibromatosis Type 1 (NF1)",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "Multiple café-au-lait macules, neurofibromas/plexiform neurofibroma, and an NF1 pathogenic variant or accepted clinical criteria.",
    profile: [
      "Usually apparent in childhood; tumor burden and complications accumulate through adulthood.",
      "Both sexes are affected.",
      "Skin, peripheral nerves, optic pathway/CNS, adrenal medulla, gastrointestinal tract, and pancreas.",
      "Cutaneous/plexiform neurofibromas, optic pathway glioma, MPNST, pheochromocytoma, and duodenal or pancreatic NETs are recognized manifestations.",
    ],
    criteria: [
      "Clinical diagnosis is based on accepted NF1 criteria, including multiple café-au-lait macules, axillary/inguinal freckling, neurofibromas or a plexiform neurofibroma, Lisch nodules/choroidal abnormalities, optic pathway glioma, characteristic osseous lesions, or an affected first-degree relative.",
      "Molecular: a pathogenic germline NF1 variant supports confirmation, particularly in atypical or young presentations.",
      "A solitary neurofibroma or isolated café-au-lait macule is insufficient by itself.",
    ],
    histology: [
      "Cutaneous neurofibroma: unencapsulated dermal proliferation of wavy spindle cells in a collagenous/myxoid matrix with mast cells and variable axons.",
      "Plexiform neurofibroma: expanded nerve fascicles with a multinodular, plexiform growth pattern; this lesion is strongly associated with NF1.",
      "MPNST may arise in a plexiform neurofibroma and shows increased cellularity, atypia, mitotic activity, and often necrosis; sampling is critical.",
      "Endocrine lesions include pheochromocytoma and duodenal somatostatin-producing NETs; pancreatic NETs may also occur.",
    ],
    ihc: [
      "Neurofibromas commonly express S100 and SOX10 in Schwannian cells, with CD34-positive stromal cells; neurofilament highlights entrapped axons.",
      "MPNST may show only focal/patchy S100 and SOX10; loss of H3K27me3 can support MPNST in an appropriate context but is not fully sensitive or specific.",
      "Pheochromocytoma/NETs require standard neuroendocrine marker panels; no IHC stain alone establishes NF1 syndrome.",
    ],
    molecular: [
      "Autosomal dominant germline loss-of-function NF1 variants; biallelic inactivation causes loss of neurofibromin and RAS pathway activation.",
      "Tumor testing may demonstrate a second hit; germline testing is appropriate when clinical criteria or tumor pattern suggest NF1.",
    ],
    differential: [
      {
        name: "Carney Complex",
        distinction:
          "Both can include endocrine tumors and skin findings; Carney complex features lentigines, myxomas, PPNAD, and PRKAR1A-related disease rather than neurofibromas and café-au-lait criteria.",
      },
      {
        name: "Von Hippel–Lindau Syndrome",
        distinction:
          "VHL features hemangioblastomas, clear cell RCC, pancreatic lesions, and PPGL; NF1 is distinguished by neurofibromas, café-au-lait macules, and optic pathway glioma.",
      },
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Both can include PPGL; SDH-deficient tumors show SDHB/SDHA loss and often occur with GIST, whereas NF1 has characteristic cutaneous/nerve manifestations.",
      },
      {
        name: "Von Hippel–Lindau Syndrome (VHL)",
        distinction:
          "Consider Von Hippel–Lindau Syndrome (VHL) when its defining clinical and molecular pattern is present; Neurofibromatosis Type 1 (NF1) is distinguished by multiple café-au-lait macules, neurofibromas/plexiform neurofibroma, and an nf1 pathogenic variant or accepted clinical criteria.",
      },
      {
        name: "McCune–Albright Syndrome (MAS)",
        distinction:
          "Consider McCune–Albright Syndrome (MAS) when its defining clinical and molecular pattern is present; Neurofibromatosis Type 1 (NF1) is distinguished by multiple café-au-lait macules, neurofibromas/plexiform neurofibroma, and an nf1 pathogenic variant or accepted clinical criteria.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "Consider DICER1 Syndrome when its defining clinical and molecular pattern is present; Neurofibromatosis Type 1 (NF1) is distinguished by multiple café-au-lait macules, neurofibromas/plexiform neurofibroma, and an nf1 pathogenic variant or accepted clinical criteria.",
      },
    ],
  },
  {
    name: "Carney Complex",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "Spotty pigmentation, cardiac/cutaneous myxomas, PPNAD, and/or characteristic endocrine tumors with PRKAR1A alteration.",
    profile: [
      "Pigmentation often appears before puberty; additional manifestations accumulate from childhood through adulthood.",
      "Both sexes are affected.",
      "Skin and mucosa, heart, adrenal cortex, pituitary, thyroid, gonads, peripheral nerve sheath, and bone.",
      "Cardinal findings include lentigines/blue nevi, myxomas, primary pigmented nodular adrenocortical disease (PPNAD), growth hormone-producing pituitary lesions, and large-cell calcifying Sertoli cell tumors.",
    ],
    criteria: [
      "Clinical diagnosis: two or more major diagnostic criteria, or one major criterion plus an affected first-degree relative or a pathogenic germline PRKAR1A variant, according to accepted clinical criteria.",
      "Major features include characteristic spotty pigmentation, cardiac/cutaneous/breast myxomas, PPNAD or paradoxical glucocorticoid response, acromegaly from GH-producing pituitary tumor, and characteristic gonadal tumors.",
      "Molecular: pathogenic germline inactivating PRKAR1A variant is confirmatory in a compatible phenotype.",
    ],
    histology: [
      "PPNAD: multiple small, pigmented cortical nodules with atrophy of intervening cortex; nodules contain eosinophilic/clear cells and lipofuscin pigment.",
      "Cardiac myxoma: stellate or polygonal cells in abundant myxoid stroma; cutaneous myxomas may be multiple.",
      "Pituitary lesions may include somatotroph hyperplasia or GH-producing PitNETs.",
      "Thyroid lesions include follicular nodular disease and follicular/oncocytic tumors; assess for the broader syndrome context.",
      "Large-cell calcifying Sertoli cell tumor shows large Sertoli cells, calcification, and may be bilateral/multifocal.",
    ],
    ihc: [
      "PPNAD and other cortical lesions are evaluated with standard adrenocortical markers; no single stain is syndrome-specific.",
      "Myxoma cells are typically vimentin-positive and may express calretinin; morphology and location are key.",
      "PRKAR1A immunohistochemistry may show loss in lesional cells in some cases, but germline testing is required.",
    ],
    molecular: [
      "Autosomal dominant inactivating PRKAR1A variants; loss of PKA regulatory subunit 1-alpha leads to increased cAMP-dependent protein kinase signaling.",
      "A subset of clinically diagnosed patients lack an identifiable PRKAR1A variant; clinical criteria remain important.",
    ],
    differential: [
      {
        name: "McCune–Albright Syndrome",
        distinction:
          "Both can cause endocrine hyperfunction and pigmented skin lesions; MAS has mosaic GNAS activation, large irregular café-au-lait patches, and polyostotic fibrous dysplasia.",
      },
      {
        name: "Neurofibromatosis Type 1",
        distinction:
          "NF1 shows café-au-lait macules, freckling, neurofibromas, and optic pathway glioma; Carney complex is characterized by lentigines, myxomas, and PPNAD.",
      },
      {
        name: "Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
        distinction:
          "Carney complex is one recognized syndromic context for familial thyroid tumors; distinguish by its broader pigmentary, myxomatous, adrenal, pituitary, and gonadal phenotype.",
      },
      {
        name: "Von Hippel–Lindau Syndrome (VHL)",
        distinction:
          "Consider Von Hippel–Lindau Syndrome (VHL) when its defining clinical and molecular pattern is present; Carney Complex is distinguished by spotty pigmentation, cardiac/cutaneous myxomas, ppnad, and/or characteristic endocrine tumors with prkar1a alteration.",
      },
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Consider SDH-Deficient Tumor Syndromes when its defining clinical and molecular pattern is present; Carney Complex is distinguished by spotty pigmentation, cardiac/cutaneous myxomas, ppnad, and/or characteristic endocrine tumors with prkar1a alteration.",
      },
      {
        name: "Neurofibromatosis Type 1 (NF1)",
        distinction:
          "Consider Neurofibromatosis Type 1 (NF1) when its defining clinical and molecular pattern is present; Carney Complex is distinguished by spotty pigmentation, cardiac/cutaneous myxomas, ppnad, and/or characteristic endocrine tumors with prkar1a alteration.",
      },
      {
        name: "McCune–Albright Syndrome (MAS)",
        distinction:
          "Consider McCune–Albright Syndrome (MAS) when its defining clinical and molecular pattern is present; Carney Complex is distinguished by spotty pigmentation, cardiac/cutaneous myxomas, ppnad, and/or characteristic endocrine tumors with prkar1a alteration.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "Consider DICER1 Syndrome when its defining clinical and molecular pattern is present; Carney Complex is distinguished by spotty pigmentation, cardiac/cutaneous myxomas, ppnad, and/or characteristic endocrine tumors with prkar1a alteration.",
      },
    ],
  },
  {
    name: "McCune–Albright Syndrome (MAS)",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "Mosaic activating GNAS mutation with café-au-lait pigmentation, fibrous dysplasia, and endocrine hyperfunction.",
    profile: [
      "Usually presents in childhood; endocrine manifestations may be evident in infancy or early childhood.",
      "Both sexes are affected; gonadal manifestations differ by sex.",
      "Skin, skeleton, ovaries/testes, thyroid, pituitary, and occasionally adrenal glands.",
      "Classic triad: café-au-lait macules, polyostotic fibrous dysplasia, and precocious puberty or other endocrine hyperfunction.",
    ],
    criteria: [
      "Essential molecular evidence: somatic activating GNAS variant in affected tissue; variant may be absent from peripheral blood because of mosaicism.",
      "Clinical diagnosis is based on characteristic combinations of fibrous dysplasia, café-au-lait pigmentation, and one or more hyperfunctioning endocrinopathies.",
      "A negative blood test does not exclude MAS; test affected tissue when clinically appropriate.",
    ],
    histology: [
      "Fibrous dysplasia: irregular curvilinear woven bone trabeculae in bland fibroblastic stroma, typically without osteoblastic rimming.",
      "Thyroid may show nodular hyperplasia and follicular neoplasms; pituitary lesions may show somatotroph hyperplasia/PitNET.",
      "Ovarian lesions may include autonomous cysts and estrogen-producing follicular activity; adrenal hyperplasia or nodular disease is less common.",
      "Skin shows café-au-lait pigmentation with irregular, jagged borders that often respect the midline.",
    ],
    ihc: [
      "No syndrome-specific immunohistochemical profile; endocrine lesions are characterized using organ-specific markers.",
      "GNAS mutation testing in affected tissue is more useful than IHC for confirming the mosaic disorder.",
    ],
    molecular: [
      "Postzygotic activating GNAS variants cause constitutive Gs-alpha signaling; mosaic distribution determines phenotype and tissue involvement.",
      "The same GNAS pathway can be altered somatically in sporadic endocrine tumors, so the clinical mosaic phenotype is essential.",
    ],
    differential: [
      {
        name: "Carney Complex",
        distinction:
          "Carney complex features lentigines, myxomas, PPNAD, and germline PRKAR1A variants; MAS features fibrous dysplasia and mosaic GNAS activation.",
      },
      {
        name: "Neurofibromatosis Type 1",
        distinction:
          "NF1 café-au-lait macules are often multiple and accompanied by freckling/neurofibromas; MAS patches are typically large, jagged, and associated with fibrous dysplasia.",
      },
      {
        name: "Von Hippel–Lindau Syndrome (VHL)",
        distinction:
          "Consider Von Hippel–Lindau Syndrome (VHL) when its defining clinical and molecular pattern is present; McCune–Albright Syndrome (MAS) is distinguished by mosaic activating gnas mutation with café-au-lait pigmentation, fibrous dysplasia, and endocrine hyperfunction.",
      },
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Consider SDH-Deficient Tumor Syndromes when its defining clinical and molecular pattern is present; McCune–Albright Syndrome (MAS) is distinguished by mosaic activating gnas mutation with café-au-lait pigmentation, fibrous dysplasia, and endocrine hyperfunction.",
      },
      {
        name: "Neurofibromatosis Type 1 (NF1)",
        distinction:
          "Consider Neurofibromatosis Type 1 (NF1) when its defining clinical and molecular pattern is present; McCune–Albright Syndrome (MAS) is distinguished by mosaic activating gnas mutation with café-au-lait pigmentation, fibrous dysplasia, and endocrine hyperfunction.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "Consider DICER1 Syndrome when its defining clinical and molecular pattern is present; McCune–Albright Syndrome (MAS) is distinguished by mosaic activating gnas mutation with café-au-lait pigmentation, fibrous dysplasia, and endocrine hyperfunction.",
      },
    ],
  },
  {
    name: "DICER1 Syndrome",
    group: "Multisystem Tumor-Predisposition Syndromes",
    clue: "Germline DICER1 pathogenic variant with characteristic thyroid, pulmonary, renal, ovarian, or pituitary lesions.",
    profile: [
      "Often presents in childhood or adolescence, although adult manifestations occur.",
      "Both sexes are affected; ovarian tumors occur in female patients and testicular lesions in male patients.",
      "Thyroid, lung/pleura, kidney, ovary/testis, cervix, and pituitary.",
      "Recognized lesions include multinodular goiter/thyroid neoplasia, pleuropulmonary blastoma, cystic nephroma, ovarian Sertoli–Leydig cell tumor, cervical embryonal rhabdomyosarcoma, and pituitary blastoma.",
    ],
    criteria: [
      "Essential: pathogenic germline DICER1 variant.",
      "A characteristic DICER1-associated tumor, especially in a young patient or with multiple primary lesions/family history, should prompt germline evaluation.",
      "Mosaic DICER1 alterations may produce a broader GLOW phenotype (global developmental delay, lung cysts, overgrowth, and Wilms tumor).",
    ],
    histology: [
      "Thyroid: multinodular goiter and follicular-patterned neoplasms, including pediatric-onset multinodular disease; evaluate for characteristic architectural and cytologic features.",
      "Pleuropulmonary blastoma: cystic (type I), mixed solid/cystic (type II), or solid (type III) primitive mesenchymal neoplasm.",
      "Ovary: Sertoli–Leydig cell tumor, often with heterologous elements; assess in young patients.",
      "Kidney: cystic nephroma and other characteristic pediatric renal lesions.",
      "Cervix: embryonal rhabdomyosarcoma may present as a cervical polypoid mass in children/adolescents; pituitary blastoma is a rare infantile manifestation.",
    ],
    ihc: [
      "Thyroid lesions are evaluated with standard follicular-cell markers; no thyroid IHC profile alone establishes DICER1 syndrome.",
      "Sertoli–Leydig cell tumors may express inhibin, calretinin, SF1, and other sex cord-stromal markers.",
      "Rhabdomyoblastic components express desmin, myogenin, and MyoD1; interpret with morphology and age.",
    ],
    molecular: [
      "Autosomal dominant germline loss-of-function DICER1 variant with a second somatic RNase IIIb hotspot mutation in many tumors.",
      "DICER1 encodes a microRNA-processing endoribonuclease; tumor testing may reveal characteristic RNase IIIb hotspot variants.",
    ],
    differential: [
      {
        name: "Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
        distinction:
          "DICER1 is one syndromic cause of familial thyroid neoplasia; associated PPB, cystic nephroma, and sex cord-stromal tumors favor DICER1 syndrome.",
      },
      {
        name: "Non-Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
        distinction:
          "NSFNMTC is familial thyroid cancer without a defining extra-thyroid syndrome; DICER1 has a characteristic multisystem tumor spectrum.",
      },
      {
        name: "Carney Complex",
        distinction:
          "Both can include thyroid lesions; Carney complex is associated with lentigines, myxomas, PPNAD, and PRKAR1A alterations.",
      },
      {
        name: "Von Hippel–Lindau Syndrome (VHL)",
        distinction:
          "Consider Von Hippel–Lindau Syndrome (VHL) when its defining clinical and molecular pattern is present; DICER1 Syndrome is distinguished by germline dicer1 pathogenic variant with characteristic thyroid, pulmonary, renal, ovarian, or pituitary lesions.",
      },
      {
        name: "SDH-Deficient Tumor Syndromes",
        distinction:
          "Consider SDH-Deficient Tumor Syndromes when its defining clinical and molecular pattern is present; DICER1 Syndrome is distinguished by germline dicer1 pathogenic variant with characteristic thyroid, pulmonary, renal, ovarian, or pituitary lesions.",
      },
      {
        name: "Neurofibromatosis Type 1 (NF1)",
        distinction:
          "Consider Neurofibromatosis Type 1 (NF1) when its defining clinical and molecular pattern is present; DICER1 Syndrome is distinguished by germline dicer1 pathogenic variant with characteristic thyroid, pulmonary, renal, ovarian, or pituitary lesions.",
      },
      {
        name: "McCune–Albright Syndrome (MAS)",
        distinction:
          "Consider McCune–Albright Syndrome (MAS) when its defining clinical and molecular pattern is present; DICER1 Syndrome is distinguished by germline dicer1 pathogenic variant with characteristic thyroid, pulmonary, renal, ovarian, or pituitary lesions.",
      },
    ],
  },
  {
    name: "Glucagon Cell Hyperplasia and Neoplasia (GCHN)",
    group: "Familial Pancreatic Endocrine Proliferations",
    clue: "Diffuse pancreatic glucagon-cell hyperplasia with multifocal glucagon-positive PanNETs, usually due to germline GCGR variants.",
    profile: [
      "Usually recognized in adulthood, although age at presentation varies.",
      "Both sexes are affected.",
      "Diffuse pancreas; lesions may be distributed throughout the gland.",
      "Patients may have markedly elevated serum glucagon without the expected glucagonoma syndrome because receptor signaling is impaired; symptoms may include abdominal pain, altered bowel habits, fatigue, diabetes, or pancreatitis.",
    ],
    criteria: [
      "Essential: diffuse glucagon-cell hyperplasia with multifocal glucagon-expressing pancreatic neuroendocrine neoplasms in the appropriate clinical setting.",
      "Molecular confirmation: pathogenic germline GCGR variant; inherited in an autosomal recessive manner in most reported cases.",
      "Assess serum glucagon and clinical phenotype; high glucagon alone is insufficient without the characteristic pancreatic pathology.",
    ],
    histology: [
      "Diffuse/islet-associated glucagon-cell hyperplasia is present throughout the pancreas.",
      "Multiple PanNETs arise in the background of glucagon-cell hyperplasia; tumors are typically well differentiated and express glucagon almost exclusively.",
      "Evaluate the entire pancreas carefully because microscopic hyperplastic and neoplastic foci may be widespread.",
    ],
    ihc: [
      "Glucagon highlights the expanded alpha-cell population and the associated PanNETs.",
      "Synaptophysin, chromogranin, and INSM1 confirm neuroendocrine differentiation; hormone profile helps establish glucagon-cell phenotype.",
    ],
    molecular: [
      "Usually autosomal recessive germline loss-of-function GCGR variants, resulting in impaired glucagon receptor signaling and compensatory alpha-cell proliferation.",
      "Germline GCGR testing distinguishes inherited GCHN from other multifocal pancreatic NET settings.",
    ],
    differential: [
      {
        name: "MAFA-Related Familial Insulinomatosis",
        distinction:
          "GCHN is glucagon-cell predominant with high serum glucagon; MAFA-related disease produces multiple insulin-secreting tumors and hypoglycemia or diabetes.",
      },
      {
        name: "MEN1-Associated PanNETs",
        distinction:
          "MEN1 shows multifocal PanNETs with neuroendocrine microadenomatosis and other endocrine tumors; GCHN is characterized by diffuse glucagon-cell hyperplasia and GCGR variants.",
      },
      {
        name: "Sporadic Glucagonoma",
        distinction:
          "Sporadic glucagonoma is usually a solitary functioning tumor with glucagonoma syndrome; GCHN is diffuse/multifocal and often lacks the expected hormone-excess syndrome.",
      },
    ],
  },
  {
    name: "MAFA-Related Familial Insulinomatosis",
    group: "Familial Pancreatic Endocrine Proliferations",
    clue: "Multiple insulin-producing pancreatic neuroendocrine tumors with a germline MAFA pathogenic variant.",
    profile: [
      "Usually presents in adulthood.",
      "Both sexes are affected; hyperinsulinemic hypoglycemia is reported more often in women, whereas diabetes is more often reported in men.",
      "Pancreas; multifocal lesions may involve multiple regions of the gland.",
      "Clinical presentation may be adult-onset hyperinsulinemic hypoglycemia or diabetes; these phenotypes are generally distinct.",
    ],
    criteria: [
      "Essential: demonstration of a pathogenic germline MAFA variant in a patient with compatible pancreatic endocrine disease.",
      "Pathologic support: multiple insulin-producing PanNETs and/or insulin-cell proliferations in the pancreas.",
      "A single sporadic insulinoma without a familial/genetic context does not establish familial insulinomatosis.",
    ],
    histology: [
      "Multiple insulin-producing PanNETs may be present throughout the pancreas.",
      "Insulin-cell hyperplasia and multifocal proliferations may accompany the tumors.",
      "Individual lesions resemble conventional well-differentiated PanNETs; multifocality and clinical context are key.",
    ],
    ihc: [
      "Insulin immunoreactivity supports beta-cell differentiation; synaptophysin, chromogranin, and INSM1 confirm neuroendocrine differentiation.",
      "Other pancreatic hormones should be assessed when needed to document the predominant insulin phenotype.",
    ],
    molecular: [
      "Autosomal dominant pathogenic MAFA variants; MAFA is a transcription factor involved in pancreatic beta-cell function and proliferation.",
      "Germline sequencing confirms the syndrome and distinguishes it from sporadic insulinomatosis.",
    ],
    differential: [
      {
        name: "Glucagon Cell Hyperplasia and Neoplasia (GCHN)",
        distinction:
          "GCHN shows diffuse glucagon-cell hyperplasia and glucagon-positive multifocal tumors with GCGR variants; MAFA disease is insulin-cell predominant.",
      },
      {
        name: "MEN1-Associated PanNETs",
        distinction:
          "MEN1 often includes multiple hormone-expressing PanNETs with microadenomatosis and parathyroid/pituitary tumors; MAFA disease is defined by germline MAFA and insulinomatosis.",
      },
      {
        name: "Sporadic Insulinoma",
        distinction:
          "Usually solitary and without germline MAFA variant or multifocal insulin-cell proliferations.",
      },
    ],
  },
  {
    name: "Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
    group: "Familial Thyroid Tumor Syndromes",
    clue: "Familial non-medullary thyroid neoplasia accompanied by characteristic extra-thyroid tumors or a defined cancer-predisposition syndrome.",
    profile: [
      "Age depends on the underlying syndrome; thyroid lesions may present in childhood or adulthood.",
      "Both sexes are affected, with syndrome-specific patterns.",
      "Thyroid gland plus syndrome-specific sites including skin, breast, endometrium, colon, kidney, lung, ovary, adrenal, and heart.",
      "Includes thyroid tumors associated with PTEN hamartoma tumor syndrome, familial adenomatous polyposis, DICER1 syndrome, Carney complex, and Werner syndrome.",
    ],
    criteria: [
      "Establish a familial follicular-cell derived thyroid tumor phenotype and identify the associated extra-thyroid clinical features.",
      "Confirm the underlying syndrome with its appropriate germline pathogenic variant when available (e.g., PTEN, APC, DICER1, PRKAR1A, WRN).",
      "Do not use this umbrella category when the family has thyroid cancer alone without a recognizable syndromic phenotype; consider NSFNMTC.",
    ],
    histology: [
      "PTEN hamartoma tumor syndrome: follicular-patterned thyroid lesions, multinodular goiter, adenomatous nodules, and increased risk of follicular and papillary thyroid carcinoma; associated hamartomas and mucocutaneous lesions are clues.",
      "Familial adenomatous polyposis: cribriform-morular thyroid carcinoma is a characteristic, often young-onset lesion; assess for colonic polyposis.",
      "DICER1 syndrome: multinodular goiter and follicular thyroid neoplasms may occur with PPB, cystic nephroma, and ovarian Sertoli–Leydig cell tumor.",
      "Carney complex: follicular nodular disease and thyroid neoplasms occur with lentigines, myxomas, and PPNAD.",
      "Werner syndrome: follicular thyroid carcinoma and other neoplasms may occur in the setting of premature aging.",
    ],
    ihc: [
      "Use organ-specific IHC to classify the thyroid tumor; no single thyroid immunostain establishes a familial syndrome.",
      "Cribriform-morular thyroid carcinoma typically shows nuclear/cytoplasmic beta-catenin due to Wnt pathway activation; correlate with APC/FAP evaluation.",
    ],
    molecular: [
      "Syndrome-specific germline testing includes PTEN, APC, DICER1, PRKAR1A, or WRN according to phenotype.",
      "The thyroid tumor genotype may support pathway assignment but does not replace germline testing.",
    ],
    differential: [
      {
        name: "Non-Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
        distinction:
          "Familial thyroid cancer without a recognizable extra-thyroid syndrome; syndromic cases have defining associated lesions or germline syndrome.",
      },
      {
        name: "DICER1 Syndrome",
        distinction:
          "DICER1 is one specific syndromic subtype; associated PPB, cystic nephroma, and sex cord-stromal tumors help identify it.",
      },
      {
        name: "Carney Complex",
        distinction:
          "Carney complex is recognized by pigmentation, myxomas, PPNAD, and PRKAR1A; thyroid lesions are one part of a multisystem phenotype.",
      },
      {
        name: "Non-Syndromic Familial Follicular Cell-Derived Thyroid Tumors (NSFNMTC)",
        distinction:
          "Consider Non-Syndromic Familial Follicular Cell-Derived Thyroid Tumors (NSFNMTC) when its defining clinical and molecular pattern is present; Syndromic Familial Follicular Cell-Derived Thyroid Tumors is distinguished by familial non-medullary thyroid neoplasia accompanied by characteristic extra-thyroid tumors or a defined cancer-predisposition syndrome.",
      },
    ],
  },
  {
    name: "Non-Syndromic Familial Follicular Cell-Derived Thyroid Tumors (NSFNMTC)",
    group: "Familial Thyroid Tumor Syndromes",
    clue: "Follicular-cell derived thyroid carcinoma in multiple first-degree relatives without radiation exposure or a recognized cancer syndrome.",
    profile: [
      "Often presents younger than sporadic thyroid carcinoma, by approximately five years on average.",
      "Both sexes are affected.",
      "Thyroid gland; tumors are often multifocal and bilateral and may coexist with thyroiditis and benign nodules.",
      "Family history is the defining clinical clue; papillary thyroid carcinoma is the most common histotype.",
    ],
    criteria: [
      "Clinical criterion commonly used: papillary thyroid carcinoma in at least two first-degree relatives, in the absence of prior ionizing radiation exposure or a recognized cancer syndrome; this threshold is controversial because sporadic clustering can occur.",
      "A more specific threshold is follicular-cell derived thyroid carcinoma in at least three first-degree relatives, which substantially lowers the probability of coincidental sporadic cases.",
      "Desirable: identification of a pathogenic germline variant in a susceptibility gene; genetic heterogeneity remains substantial.",
    ],
    histology: [
      "Tumors are morphologically similar to sporadic follicular-cell derived thyroid carcinomas; no unique histologic subtype defines NSFNMTC.",
      "Multifocality, bilaterality, background thyroiditis, and benign nodular disease may be prominent.",
      "Familial papillary thyroid carcinoma may show increased nodal metastases, extrathyroidal extension, and recurrence in some series, particularly in families with three or more affected members.",
    ],
    ihc: [
      "No specific immunohistochemical profile distinguishes NSFNMTC from sporadic thyroid carcinoma.",
      "Use routine lineage and subtype markers to classify the thyroid tumor; IHC cannot establish familial status.",
    ],
    molecular: [
      "Multiple susceptibility loci/genes have been proposed, including variants involving FOXE1, SRGAP1, HABP2, CHEK2, and other candidates; many associations remain incompletely validated.",
      "Germline testing may be informative in selected families, but a negative panel does not exclude NSFNMTC.",
    ],
    differential: [
      {
        name: "Syndromic Familial Follicular Cell-Derived Thyroid Tumors",
        distinction:
          "Syndromic cases have extra-thyroid manifestations and a defined predisposition syndrome; NSFNMTC is familial thyroid cancer without a recognized syndrome.",
      },
      {
        name: "Sporadic Follicular Cell-Derived Thyroid Carcinoma",
        distinction:
          "A single affected individual or a family with only two affected relatives may represent chance clustering; family structure, age, and additional affected relatives matter.",
      },
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-5">
      <h3 className="mb-2 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function GeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Multiple Endocrine Neoplasia Type 1 (MEN1)",
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
            e.profile.join(" ") +
            " " +
            e.criteria.join(" ") +
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
          PathologyGPS · Endocrine and Neuroendocrine Pathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Genetic Tumor Syndromes
        </h1>
      </header>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield Syndrome Markers
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              [
                "MEN1",
                "Multigland parathyroid disease and multifocal PanNET/microadenomatosis; menin loss may support.",
              ],
              [
                "MEN2",
                "RET germline activation; MTC/C-cell hyperplasia, with pheochromocytoma ± parathyroid disease.",
              ],
              [
                "CDC73-related HPT-JT",
                "Parathyroid neoplasm with jaw ossifying fibroma; parafibromin loss is a key clue.",
              ],
              [
                "SDH-deficient tumors",
                "Loss of SDHB, with SDHA loss in SDHA-deficient tumors; confirm the gene or epigenetic mechanism.",
              ],
              [
                "VHL",
                "Hemangioblastoma, clear cell RCC, pancreatic lesions, and PPGL in a multisystem pattern.",
              ],
              [
                "NF1 / Carney complex",
                "NF1: café-au-lait macules and neurofibromas. Carney: lentigines, myxomas, and PPNAD.",
              ],
            ].map(([a, b]) => (
              <div
                key={a}
                className="grid gap-1 border-b border-slate-100 pb-2 sm:grid-cols-[minmax(0,1fr)_1.4fr]"
              >
                <strong>{a}</strong>
                <span className="text-slate-600">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Important Diagnostic Guardrails
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              Do not equate multifocality with a germline syndrome without
              clinical or molecular correlation.
            </li>
            <li>
              Loss of a tumor-suppressor protein by IHC is a triage clue, not a
              replacement for germline testing.
            </li>
            <li>
              For SDH-deficient tumors, use the gene-based syndrome designation
              when a pathogenic germline variant is identified; reserve Carney
              triad for the non-hereditary clinical syndrome.
            </li>
            <li>
              For familial non-medullary thyroid carcinoma, two affected
              first-degree relatives is a commonly used but debated threshold;
              three affected relatives provide stronger evidence.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="genetic-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses
          </label>
          <input
            id="genetic-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search syndrome, gene, tumor, morphology, or marker..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="genetic-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="genetic-group"
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
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:self-end"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </section>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} syndromes / entities</span>
        <span>
          Expand an entity for diagnostic criteria and detailed findings.
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
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
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
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
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
        immunohistochemical and molecular findings in conjunction with
        morphology, clinical history, and germline testing.
      </footer>
    </main>
  );
}
