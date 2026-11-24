"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  clinical: string[];
  criteria: string[];
  hist: string[];
  ihc: string[];
  molecular: string[];
  differential: Differential[];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Choroid Plexus Papilloma",
    group: "Choroid Plexus Tumors",
    clue: "Well-formed fibrovascular papillae lined by a single layer of bland choroid plexus epithelium; mitoses are absent or very rare.",
    clinical: [
      "Most common in children, particularly during infancy and early childhood; adults may also be affected.",
      "Lateral ventricles are the most frequent site; fourth and third ventricular tumors also occur.",
      "Hydrocephalus and raised intracranial pressure are common presenting features.",
    ],
    criteria: [
      "Intraventricular papillary neoplasm with a recognizable choroid plexus epithelial phenotype.",
      "Well-developed papillae with delicate fibrovascular cores covered by a single layer of uniform cuboidal-to-columnar cells.",
      "Mitotic activity is absent or very low: typically <1 mitosis/mm².",
      "No combination of malignant architectural and cytologic features sufficient for carcinoma.",
    ],
    hist: [
      "Papillae have delicate fibrovascular cores and a continuous epithelial covering.",
      "Tumor cells have round-to-oval monomorphic nuclei and moderate cytoplasm.",
      "Mitoses are absent or rare; Ki-67 is usually <5%, often <1%.",
      "Focal tubular, glandular, oncocytic, mucinous, or stromal metaplastic changes may occur.",
    ],
    ihc: [
      "Cytokeratins, usually CK7, are positive.",
      "Vimentin and S100 are commonly positive.",
      "Kir7.1 shows apical/membranous staining in most cases and supports choroid plexus differentiation.",
      "EAAT1 is commonly positive; transthyretin is variable.",
      "GFAP and EMA may be weak or focal.",
    ],
    molecular: [
      "Molecular testing is not routinely required for a morphologically typical case.",
      "Copy-number analysis may show hyperdiploidy with whole-chromosome gains.",
      "DNA methylation profiling can separate most papillomas from carcinomas in difficult cases.",
    ],
    pitfalls: [
      "Do not grade a papilloma using Ki-67 alone.",
      "CSF seeding can rarely occur despite bland histology; correlate with imaging and clinical staging when indicated.",
    ],
    differential: [
      {
        name: "Atypical Choroid Plexus Papilloma",
        distinction:
          "Retains papillary architecture but has ≥1 mitosis/mm²; does not meet the ≥4-of-5 histologic criteria for carcinoma.",
      },
      {
        name: "Choroid Plexus Carcinoma",
        distinction:
          "At least four of five malignant features, including frequent mitoses, increased cellularity, pleomorphism, loss of papillary pattern, and necrosis; invasion supports malignancy.",
      },
    ],
  },
  {
    name: "Atypical Choroid Plexus Papilloma",
    group: "Choroid Plexus Tumors",
    clue: "Choroid plexus papilloma with increased mitotic activity, without the full constellation required for carcinoma.",
    clinical: [
      "Predominantly affects infants and young children; reported median age is under 1 year in pediatric series.",
      "Usually arises in the lateral ventricles.",
      "May cause hydrocephalus and raised intracranial pressure; metastatic dissemination can occur.",
    ],
    criteria: [
      "Choroid plexus epithelial neoplasm with recognizable papillary architecture.",
      "Mitotic count ≥1 mitosis/mm² (approximately ≥2 mitoses per 10 HPF using a 0.23-mm² field) supports the diagnosis.",
      "Increased cellularity, nuclear pleomorphism, blurring of papillary architecture, or necrosis may be present but are not required.",
      "Does not meet the threshold of at least four of five defining histologic features of choroid plexus carcinoma.",
    ],
    hist: [
      "Papillary architecture is generally retained, although focal solid growth or blurring may occur.",
      "Mitotic activity is increased and is the defining grading feature.",
      "Cellularity and nuclear pleomorphism may be increased focally.",
      "Necrosis may be present but is not independently diagnostic of carcinoma.",
      "Median Ki-67 is higher than in conventional papilloma; reported median is approximately 9%.",
    ],
    ihc: [
      "Immunophenotype generally parallels choroid plexus papilloma.",
      "Cytokeratins, vimentin, and S100 are commonly expressed.",
      "Kir7.1 may be retained.",
      "Ki-67 supports increased proliferation but does not replace mitotic counting.",
    ],
    molecular: [
      "Usually shares the hyperploid copy-number profile of choroid plexus papilloma.",
      "Genome-wide copy-number profiling may help distinguish atypical papilloma from carcinoma in selected cases.",
      "Methylation profiling may be useful in diagnostically difficult cases.",
    ],
    pitfalls: [
      "Count mitoses in an adequately sampled viable tumor and report the area used.",
      "Do not diagnose carcinoma based on a single atypical feature.",
    ],
    differential: [
      {
        name: "Choroid Plexus Papilloma",
        distinction:
          "Bland single-layered papillae with <1 mitosis/mm²; lacks the increased mitotic activity of atypical papilloma and the multiple malignant features of carcinoma.",
      },
      {
        name: "Choroid Plexus Carcinoma",
        distinction:
          "At least four of five malignant features, including frequent mitoses, increased cellularity, pleomorphism, loss of papillary pattern, and necrosis; invasion supports malignancy.",
      },
    ],
  },
  {
    name: "Choroid Plexus Carcinoma",
    group: "Choroid Plexus Tumors",
    clue: "A malignant choroid plexus epithelial tumor showing at least four of five characteristic histologic features.",
    clinical: [
      "Approximately 80% occur in children; many present in early childhood.",
      "Most arise in the lateral ventricles.",
      "Hydrocephalus, increased head circumference in infants, vomiting, and raised intracranial pressure are common.",
      "A substantial subset is associated with germline TP53 pathogenic variants and Li-Fraumeni syndrome.",
    ],
    criteria: [
      "At least four of five features: increased cellular density, nuclear pleomorphism, blurring/loss of papillary architecture with poorly formed sheets, necrosis, and frequent mitoses.",
      "Frequent mitoses are usually >2.5/mm² (approximately >5 per 10 HPF using a 0.23-mm² field).",
      "Infiltrative growth into adjacent brain strongly supports malignancy.",
      "Assess for CSF dissemination and systemic metastasis.",
    ],
    hist: [
      "Tumor is highly cellular with poorly structured sheets and loss of the orderly papillary pattern.",
      "Nuclear pleomorphism and frequent mitotic figures are conspicuous.",
      "Necrosis is common.",
      "Diffuse brain invasion may be present.",
      "Tumors are often highly vascular and may show hemorrhage.",
    ],
    ihc: [
      "Cytokeratins are positive; S100 and transthyretin are less frequently expressed than in papilloma.",
      "Kir7.1 is retained in approximately half of cases.",
      "p53 may show strong diffuse nuclear accumulation in TP53-mutant tumors.",
      "SMARCB1 and SMARCA4 nuclear expression are retained.",
      "Ki-67 is usually substantially increased; reported median is approximately 20%.",
    ],
    molecular: [
      "Offer genetic counseling and germline TP53 testing to patients and families.",
      "Somatic TP53 mutations occur in approximately half of cases.",
      "Copy-number profiling often shows complex alterations and hypoploidy.",
      "DNA methylation profiling can support classification in difficult cases.",
    ],
    pitfalls: [
      "Do not diagnose carcinoma from invasion alone without considering the defining histologic criteria and overall context.",
      "Recommend germline TP53 evaluation because of the strong Li-Fraumeni association.",
    ],
    differential: [
      {
        name: "Choroid Plexus Papilloma",
        distinction:
          "Bland single-layered papillae with <1 mitosis/mm²; lacks the increased mitotic activity of atypical papilloma and the multiple malignant features of carcinoma.",
      },
      {
        name: "Atypical Choroid Plexus Papilloma",
        distinction:
          "Retains papillary architecture but has ≥1 mitosis/mm²; does not meet the ≥4-of-5 histologic criteria for carcinoma.",
      },
    ],
  },
  {
    name: "Medulloblastoma, WNT-Activated",
    group: "Medulloblastomas",
    clue: "Medulloblastoma with WNT pathway activation, usually CTNNB1-mutant and showing nuclear β-catenin.",
    clinical: [
      "Typically affects children aged 7–14 years; rare in infants.",
      "Slight female predominance.",
      "Often arises near the cerebellar midline or foramen of Luschka, with close relationship to the dorsal brainstem.",
      "Usually presents with obstructive hydrocephalus and raised intracranial pressure.",
    ],
    criteria: [
      "Embryonal cerebellar tumor with compatible medulloblastoma morphology.",
      "Demonstrate WNT pathway activation by nuclear β-catenin and/or molecular testing.",
      "CTNNB1 exon 3 mutation is common; monosomy 6 is a characteristic supportive finding.",
      "DNA methylation profiling is the preferred method for molecular group assignment when available.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Most show classic medulloblastoma morphology with densely packed small round cells, high N:C ratio, brisk mitoses, and apoptosis.",
      "Large-cell/anaplastic morphology is uncommon.",
      "Desmoplastic/nodular morphology is not expected in this group.",
    ],
    ihc: [
      "Nuclear β-catenin is a key indicator of WNT pathway activation.",
      "YAP1 is commonly positive.",
      "GAB1 is generally negative, helping distinguish from SHH-activated tumors.",
      "Synaptophysin and other neuronal markers are variable.",
    ],
    molecular: [
      "DNA methylation profiling is preferred for group/subgroup assignment.",
      "CTNNB1 exon 3 mutation is present in most cases.",
      "Monosomy 6 on an otherwise diploid background is characteristic and supportive.",
      "If CTNNB1 is wild-type, consider germline APC-associated disease and evaluate APC as clinically indicated.",
    ],
    pitfalls: [
      "Nuclear β-catenin must be distinguished from cytoplasmic staining.",
      "TP53 mutation in WNT medulloblastoma does not carry the same adverse implication as TP53 mutation in SHH-activated disease.",
    ],
    differential: [
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Wildtype",
        distinction:
          "GAB1-positive SHH pathway profile with wild-type TP53; desmoplastic/nodular morphology is common.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Mutant",
        distinction:
          "SHH pathway profile plus TP53 mutation; p53 may show diffuse strong nuclear staining and large-cell/anaplastic morphology is frequent.",
      },
      {
        name: "Medulloblastoma, Non-WNT/Non-SHH",
        distinction:
          "Lacks WNT and SHH activation; YAP1 and GAB1 are generally negative; methylation profiling assigns Group 3 or 4.",
      },
      {
        name: "Medulloblastoma, Histologically Defined",
        distinction:
          "Morphologic descriptor (classic, desmoplastic/nodular, extensive nodularity, or large-cell/anaplastic); molecular group must be assigned separately when possible.",
      },
    ],
  },
  {
    name: "Medulloblastoma, SHH-Activated and TP53-Wildtype",
    group: "Medulloblastomas",
    clue: "SHH pathway activation with wild-type TP53; desmoplastic/nodular or extensive nodularity patterns are common.",
    clinical: [
      "Occurs in infants, children, and adults; age distribution is broader than WNT-activated disease.",
      "Often arises in the cerebellar hemispheres.",
      "Presents with symptoms of posterior fossa mass and obstructive hydrocephalus.",
    ],
    criteria: [
      "Medulloblastoma morphology with molecular evidence of SHH pathway activation.",
      "TP53 must be wild-type by appropriate molecular testing.",
      "DNA methylation profiling is preferred for definitive group/subgroup assignment.",
      "Evaluate SHH pathway alterations, including PTCH1, SUFU, and SMO, as appropriate.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Desmoplastic/nodular morphology and medulloblastoma with extensive nodularity are common.",
      "Classic morphology may occur; large-cell/anaplastic morphology is uncommon.",
      "Internodular areas may show increased cellularity and mitotic activity; nodules show neurocytic differentiation.",
    ],
    ihc: [
      "GAB1 is positive in tumor cells and supports SHH activation.",
      "YAP1 is commonly positive.",
      "Nuclear β-catenin is absent.",
      "p53 typically shows weak-to-moderate staining in scattered cells when TP53 is wild-type.",
      "p75-NGFR may highlight internodular areas in desmoplastic tumors.",
    ],
    molecular: [
      "DNA methylation profiling is preferred for molecular classification.",
      "Sequence TP53 to establish wild-type status.",
      "Assess SHH pathway genes such as PTCH1, SUFU, and SMO when relevant.",
      "Consider germline predisposition testing, particularly PTCH1, SUFU, TP53, ELP1, and GPR161, with genetic counseling.",
    ],
    pitfalls: [
      "Do not infer TP53 status from p53 IHC alone when definitive classification is required.",
      "Distinguish true desmoplastic/nodular medulloblastoma from reactive nodularity or other embryonal tumors.",
    ],
    differential: [
      {
        name: "Medulloblastoma, WNT-Activated",
        distinction:
          "Nuclear β-catenin and CTNNB1 alteration support WNT activation; GAB1 is negative.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Mutant",
        distinction:
          "SHH pathway profile plus TP53 mutation; p53 may show diffuse strong nuclear staining and large-cell/anaplastic morphology is frequent.",
      },
      {
        name: "Medulloblastoma, Non-WNT/Non-SHH",
        distinction:
          "Lacks WNT and SHH activation; YAP1 and GAB1 are generally negative; methylation profiling assigns Group 3 or 4.",
      },
      {
        name: "Medulloblastoma, Histologically Defined",
        distinction:
          "Morphologic descriptor (classic, desmoplastic/nodular, extensive nodularity, or large-cell/anaplastic); molecular group must be assigned separately when possible.",
      },
    ],
  },
  {
    name: "Medulloblastoma, SHH-Activated and TP53-Mutant",
    group: "Medulloblastomas",
    clue: "SHH pathway activation with TP53 mutation; large-cell/anaplastic morphology and MYCN amplification are important adverse features.",
    clinical: [
      "Occurs predominantly in children and adolescents, including older children.",
      "Often arises in the cerebellar hemispheres.",
      "Strongly associated with Li-Fraumeni syndrome in a subset.",
    ],
    criteria: [
      "Medulloblastoma with molecular evidence of SHH pathway activation.",
      "Demonstrate TP53 mutation by sequencing or validated molecular assay.",
      "DNA methylation profiling supports subgroup assignment; TP53-mutant cases commonly map to SHH-3.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Large-cell/anaplastic morphology is frequent, with large cells, prominent nucleoli, nuclear pleomorphism, and high mitotic activity.",
      "Diffuse anaplasia may coexist with a large-cell phenotype.",
      "Other cases may show desmoplastic/nodular architecture with focal anaplasia.",
    ],
    ihc: [
      "GAB1 and YAP1 support SHH pathway activation.",
      "Nuclear β-catenin is absent.",
      "Diffuse strong nuclear p53 staining supports TP53 mutation but requires molecular confirmation.",
      "Ki-67 is typically high.",
    ],
    molecular: [
      "TP53 sequencing is essential to establish the defining alteration.",
      "Assess MYCN amplification; GLI2 amplification and chromosome 17p loss may also occur.",
      "DNA methylation profiling can refine subgroup assignment.",
      "Offer germline TP53 testing and genetic counseling; evaluate for Li-Fraumeni syndrome.",
    ],
    pitfalls: [
      "TP53 mutation has context-dependent significance; do not extrapolate the adverse association in SHH tumors to WNT tumors.",
      "Distinguish from SHH-activated, TP53-wildtype medulloblastoma using molecular TP53 status.",
    ],
    differential: [
      {
        name: "Medulloblastoma, WNT-Activated",
        distinction:
          "Nuclear β-catenin and CTNNB1 alteration support WNT activation; GAB1 is negative.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Wildtype",
        distinction:
          "GAB1-positive SHH pathway profile with wild-type TP53; desmoplastic/nodular morphology is common.",
      },
      {
        name: "Medulloblastoma, Non-WNT/Non-SHH",
        distinction:
          "Lacks WNT and SHH activation; YAP1 and GAB1 are generally negative; methylation profiling assigns Group 3 or 4.",
      },
      {
        name: "Medulloblastoma, Histologically Defined",
        distinction:
          "Morphologic descriptor (classic, desmoplastic/nodular, extensive nodularity, or large-cell/anaplastic); molecular group must be assigned separately when possible.",
      },
    ],
  },
  {
    name: "Medulloblastoma, Non-WNT/Non-SHH",
    group: "Medulloblastomas",
    clue: "Medulloblastoma lacking WNT and SHH pathway activation; molecular classification resolves Group 3 versus Group 4.",
    clinical: [
      "Occurs across childhood and adulthood, with most cases in children.",
      "Often arises in the cerebellar vermis or hemispheres.",
      "May present with hydrocephalus or leptomeningeal dissemination.",
    ],
    criteria: [
      "Embryonal tumor with medulloblastoma morphology.",
      "No evidence of WNT or SHH pathway activation by integrated IHC/molecular workup.",
      "DNA methylation profiling or validated gene-expression classifier is preferred to assign Group 3 versus Group 4.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Classic morphology is common; large-cell/anaplastic morphology occurs in a subset, especially some Group 3 tumors.",
      "Tumor is densely cellular with small blue cells, brisk mitoses, and apoptosis.",
      "Desmoplastic/nodular morphology is uncommon.",
    ],
    ihc: [
      "YAP1 is generally negative, unlike WNT and SHH groups.",
      "GAB1 is negative.",
      "Nuclear β-catenin is absent.",
      "OTX2 is commonly expressed; interpret with the full panel.",
    ],
    molecular: [
      "DNA methylation profiling is preferred for Group 3 versus Group 4 assignment.",
      "MYC amplification is associated with a subset of Group 3 tumors.",
      "MYCN amplification can occur in Group 4 and must be interpreted in molecular-group context.",
      "Use copy-number and gene-expression data when methylation profiling is unavailable.",
    ],
    pitfalls: [
      "Do not assign Group 3 or Group 4 from morphology alone.",
      "MYCN amplification is not specific to SHH tumors and must be interpreted with the full molecular profile.",
    ],
    differential: [
      {
        name: "Medulloblastoma, WNT-Activated",
        distinction:
          "Nuclear β-catenin and CTNNB1 alteration support WNT activation; GAB1 is negative.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Wildtype",
        distinction:
          "GAB1-positive SHH pathway profile with wild-type TP53; desmoplastic/nodular morphology is common.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Mutant",
        distinction:
          "SHH pathway profile plus TP53 mutation; p53 may show diffuse strong nuclear staining and large-cell/anaplastic morphology is frequent.",
      },
      {
        name: "Medulloblastoma, Histologically Defined",
        distinction:
          "Morphologic descriptor (classic, desmoplastic/nodular, extensive nodularity, or large-cell/anaplastic); molecular group must be assigned separately when possible.",
      },
    ],
  },
  {
    name: "Medulloblastoma, Histologically Defined",
    group: "Medulloblastomas",
    clue: "Use when describing the morphologic pattern; molecular group should still be established whenever possible.",
    clinical: [
      "Most common in children, with a median age around 9 years; adults may also be affected.",
      "Typically arises in the cerebellum and may extend into the fourth ventricle.",
      "Symptoms commonly reflect posterior fossa mass effect and obstructive hydrocephalus.",
    ],
    criteria: [
      "Small-cell embryonal neoplasm of the cerebellum with medulloblastoma morphology.",
      "Describe the histologic pattern: classic, desmoplastic/nodular, medulloblastoma with extensive nodularity, or large-cell/anaplastic.",
      "Assign WNT-activated, SHH-activated (with TP53 status), or non-WNT/non-SHH molecular type when supported.",
      "All medulloblastomas are CNS WHO grade 4.",
    ],
    hist: [
      "Classic pattern: densely packed small round cells with scant cytoplasm, hyperchromatic nuclei, brisk mitoses, and apoptosis.",
      "Desmoplastic/nodular pattern: reticulin-rich internodular zones and pale nodules with neurocytic differentiation.",
      "Medulloblastoma with extensive nodularity: prominent interconnected pale nodules with advanced neuronal differentiation.",
      "Large-cell/anaplastic pattern: large cells, marked nuclear pleomorphism, prominent nucleoli, and frequent mitoses.",
    ],
    ihc: [
      "Synaptophysin and NeuN are often positive, particularly in differentiated nodules, but may be variable.",
      "GAB1 and p75-NGFR support SHH activation in the appropriate context.",
      "Nuclear β-catenin supports WNT activation.",
      "SMARCB1 and SMARCA4 are retained; loss should prompt consideration of AT/RT.",
    ],
    molecular: [
      "DNA methylation profiling is preferred for molecular group and subgroup assignment.",
      "Use β-catenin, GAB1, YAP1, OTX2, p75-NGFR, and p53 as a practical IHC screening panel.",
      "Perform TP53 sequencing in SHH-activated tumors and assess MYC/MYCN amplification when clinically indicated.",
      "CSF cytology and neuraxis imaging are used for staging.",
    ],
    pitfalls: [
      "Histologic pattern does not substitute for molecular group assignment.",
      "Exclude ETMR and AT/RT in poorly differentiated tumors; LIN28A and SMARCB1/SMARCA4 are useful discriminators.",
    ],
    differential: [
      {
        name: "Medulloblastoma, WNT-Activated",
        distinction:
          "Nuclear β-catenin and CTNNB1 alteration support WNT activation; GAB1 is negative.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Wildtype",
        distinction:
          "GAB1-positive SHH pathway profile with wild-type TP53; desmoplastic/nodular morphology is common.",
      },
      {
        name: "Medulloblastoma, SHH-Activated and TP53-Mutant",
        distinction:
          "SHH pathway profile plus TP53 mutation; p53 may show diffuse strong nuclear staining and large-cell/anaplastic morphology is frequent.",
      },
      {
        name: "Medulloblastoma, Non-WNT/Non-SHH",
        distinction:
          "Lacks WNT and SHH activation; YAP1 and GAB1 are generally negative; methylation profiling assigns Group 3 or 4.",
      },
    ],
  },
  {
    name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
    group: "Other Embryonal Tumors",
    clue: "CNS embryonal tumor with loss of nuclear SMARCB1 or, rarely, SMARCA4.",
    clinical: [
      "Predominantly affects infants and young children, but can occur at any age.",
      "May arise anywhere in the CNS, including posterior fossa, cerebral hemispheres, and spinal cord.",
      "Often presents with rapidly progressive symptoms related to mass effect.",
    ],
    criteria: [
      "Malignant CNS neoplasm with rhabdoid cells and/or compatible embryonal morphology.",
      "Loss of nuclear SMARCB1 (INI1) or SMARCA4 (BRG1) in tumor cells, with retained staining in internal non-neoplastic controls.",
      "Molecular confirmation of SMARCB1 or SMARCA4 inactivation is useful, particularly in atypical cases.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Rhabdoid cells have eccentric nuclei, prominent nucleoli, and abundant eosinophilic cytoplasm with hyaline inclusions.",
      "Primitive small-cell areas, epithelioid areas, and mesenchymal-appearing components may coexist.",
      "Mitoses, apoptosis, necrosis, and hemorrhage are common.",
      "Rhabdoid morphology may be focal or absent in some molecularly defined cases.",
    ],
    ihc: [
      "Loss of nuclear SMARCB1 is the usual defining finding; SMARCA4 loss defines a small subset.",
      "Rhabdoid cells may express EMA, SMA, and vimentin.",
      "GFAP, synaptophysin, and cytokeratins are variably expressed.",
      "Internal endothelial and inflammatory cells must retain nuclear INI1/BRG1 as positive controls.",
    ],
    molecular: [
      "Assess SMARCB1 and SMARCA4 by IHC; perform sequencing/copy-number analysis when needed.",
      "DNA methylation profiling can support classification in diagnostically challenging cases.",
      "Consider germline evaluation when age, family history, or multiple tumors suggest rhabdoid tumor predisposition syndrome.",
    ],
    pitfalls: [
      "Loss of INI1 is not unique to AT/RT; correlate with site and morphology and exclude other SMARCB1-deficient tumors.",
      "Do not interpret absent staining without an intact internal positive control.",
    ],
    differential: [
      {
        name: "Cribriform Neuroepithelial Tumor (CRINET)",
        distinction:
          "Cribriform architecture with SMARCB1 loss; Kir7.1 is generally absent, helping separate it from choroid plexus carcinoma.",
      },
      {
        name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
        distinction:
          "Multilayered rosettes, diffuse LIN28A, and usually C19MC alteration; SMARCB1 is retained.",
      },
      {
        name: "CNS Neuroblastoma, FOXR2-Activated",
        distinction:
          "FOXR2 activation/rearrangement with OLIG2 expression; confirm with molecular profiling.",
      },
      {
        name: "CNS Tumor with BCOR Internal Tandem Duplication",
        distinction:
          "BCOR exon 15 ITD with diffuse nuclear BCOR, dense capillary network, and spindle/oval cells.",
      },
      {
        name: "CNS Embryonal Tumor, NEC/NOS",
        distinction:
          "Diagnosis of exclusion after molecularly defined embryonal tumors and high-grade glioma mimics have been excluded.",
      },
    ],
  },
  {
    name: "Cribriform Neuroepithelial Tumor (CRINET)",
    group: "Other Embryonal Tumors",
    clue: "Cribriform neuroepithelial architecture with SMARCB1 loss; typically lacks choroid plexus marker Kir7.1.",
    clinical: [
      "Reported mainly in infants and young children.",
      "Usually arises in the supratentorial compartment, often near the lateral ventricles.",
      "Clinical presentation reflects mass effect and raised intracranial pressure.",
    ],
    criteria: [
      "Embryonal/neuroepithelial tumor with characteristic cribriform or sieve-like architecture.",
      "Loss of nuclear SMARCB1 expression in tumor cells.",
      "Distinguish from choroid plexus carcinoma using morphology and absence of a convincing choroid plexus phenotype.",
      "Methylation profiling may assist in difficult cases.",
    ],
    hist: [
      "Cribriform and trabecular structures are characteristic, often with pseudoglandular spaces.",
      "Tumor cells may be epithelioid with clear-to-eosinophilic cytoplasm.",
      "Necrosis and brisk proliferation may be present; reported Ki-67 ranges approximately 5–35%.",
    ],
    ihc: [
      "Nuclear SMARCB1 is lost in tumor cells.",
      "EMA, tyrosinase, MAP2, synaptophysin, and vimentin may be expressed.",
      "Kir7.1 is generally absent, unlike most choroid plexus tumors.",
      "GFAP, S100, and cytokeratins are variable.",
    ],
    molecular: [
      "SMARCB1 loss is a key diagnostic clue.",
      "DNA methylation profiling may help distinguish CRINET from AT/RT and choroid plexus carcinoma.",
    ],
    pitfalls: [
      "Do not classify as choroid plexus carcinoma solely because of ventricular location and epithelial appearance.",
      "Confirm SMARCB1 loss with internal controls and assess Kir7.1.",
    ],
    differential: [
      {
        name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
        distinction:
          "Loss of SMARCB1 or SMARCA4; rhabdoid cells may express EMA, SMA, and vimentin.",
      },
      {
        name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
        distinction:
          "Multilayered rosettes, diffuse LIN28A, and usually C19MC alteration; SMARCB1 is retained.",
      },
      {
        name: "CNS Neuroblastoma, FOXR2-Activated",
        distinction:
          "FOXR2 activation/rearrangement with OLIG2 expression; confirm with molecular profiling.",
      },
      {
        name: "CNS Tumor with BCOR Internal Tandem Duplication",
        distinction:
          "BCOR exon 15 ITD with diffuse nuclear BCOR, dense capillary network, and spindle/oval cells.",
      },
      {
        name: "CNS Embryonal Tumor, NEC/NOS",
        distinction:
          "Diagnosis of exclusion after molecularly defined embryonal tumors and high-grade glioma mimics have been excluded.",
      },
    ],
  },
  {
    name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
    group: "Other Embryonal Tumors",
    clue: "Embryonal tumor with multilayered rosettes, strong LIN28A, and usually C19MC alteration.",
    clinical: [
      "Predominantly affects infants and very young children.",
      "Usually supratentorial, often cerebral hemispheres.",
      "Rapidly enlarging mass with seizures, focal deficits, or raised intracranial pressure.",
    ],
    criteria: [
      "Highly cellular embryonal neoplasm with multilayered ependymoblastic or medulloepithelial rosettes and/or tubular structures.",
      "Strong diffuse cytoplasmic LIN28A expression supports the diagnosis.",
      "C19MC amplification/rearrangement is highly specific and present in approximately 90% of cases.",
      "If C19MC is absent, assess DICER1; classify as ETMR only when morphology and molecular findings support it.",
    ],
    hist: [
      "Primitive small round cells form multilayered rosettes, ependymoblastic rosettes, or tubular structures.",
      "Neuropil-like matrix may separate embryonal cell-rich areas.",
      "Mitoses and apoptosis are brisk; necrosis may occur.",
      "Morphology may be heterogeneous, and classic rosettes may be absent in limited samples.",
    ],
    ihc: [
      "LIN28A shows strong diffuse cytoplasmic staining.",
      "Nestin and vimentin are strong in embryonal components.",
      "Neuropil-like matrix is positive for synaptophysin, NFP, and NeuN.",
      "SMARCB1 expression is retained.",
    ],
    molecular: [
      "Test for C19MC amplification/rearrangement at 19q13.42 by FISH or copy-number profiling.",
      "If C19MC-negative, assess DICER1 and consider germline testing because compound heterozygous alterations may occur.",
      "DNA methylation profiling can support classification.",
      "LIN28A is supportive but not specific by itself.",
    ],
    pitfalls: [
      "LIN28A positivity alone does not establish ETMR.",
      "A DICER1 alteration alone is insufficient; correlate with morphology and methylation profile.",
    ],
    differential: [
      {
        name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
        distinction:
          "Loss of SMARCB1 or SMARCA4; rhabdoid cells may express EMA, SMA, and vimentin.",
      },
      {
        name: "Cribriform Neuroepithelial Tumor (CRINET)",
        distinction:
          "Cribriform architecture with SMARCB1 loss; Kir7.1 is generally absent, helping separate it from choroid plexus carcinoma.",
      },
      {
        name: "CNS Neuroblastoma, FOXR2-Activated",
        distinction:
          "FOXR2 activation/rearrangement with OLIG2 expression; confirm with molecular profiling.",
      },
      {
        name: "CNS Tumor with BCOR Internal Tandem Duplication",
        distinction:
          "BCOR exon 15 ITD with diffuse nuclear BCOR, dense capillary network, and spindle/oval cells.",
      },
      {
        name: "CNS Embryonal Tumor, NEC/NOS",
        distinction:
          "Diagnosis of exclusion after molecularly defined embryonal tumors and high-grade glioma mimics have been excluded.",
      },
    ],
  },
  {
    name: "CNS Neuroblastoma, FOXR2-Activated",
    group: "Other Embryonal Tumors",
    clue: "Embryonal neuroepithelial tumor with FOXR2 activation, commonly showing OLIG2 and neuronal differentiation.",
    clinical: [
      "Usually affects children and adolescents; rare adult cases occur.",
      "Most often supratentorial, particularly cerebral hemispheres.",
      "Presents with seizures, focal neurologic deficits, or raised intracranial pressure.",
    ],
    criteria: [
      "CNS embryonal/neuroepithelial neoplasm with compatible morphology.",
      "Demonstrate FOXR2 activation, usually by structural rearrangement or other molecular evidence.",
      "DNA methylation or gene-expression profiling can establish the entity when morphology is nonspecific.",
      "Exclude other molecularly defined embryonal tumors and high-grade gliomas.",
    ],
    hist: [
      "Tumor is often well demarcated but may show infiltration.",
      "Primitive round-to-oval cells form sheets, nests, or lobules.",
      "Neurocytic or ganglion-cell differentiation may be present.",
      "Mitotic activity and Ki-67 are high; necrosis may occur.",
    ],
    ihc: [
      "OLIG2 is strongly expressed in most tumor cells.",
      "Synaptophysin may highlight neuronal differentiation.",
      "GFAP and vimentin are generally absent in tumor cells; GFAP may highlight reactive astrocytes.",
    ],
    molecular: [
      "Detect FOXR2 rearrangement/activation using RNA-based NGS or another assay capable of detecting complex structural variants.",
      "Copy-number analysis may show FOXR2 locus alteration and frequent chromosome 1q gain.",
      "DNA methylation profiling supports definitive classification.",
    ],
    pitfalls: [
      "FOXR2 rearrangements may be complex and can be missed by limited DNA panels.",
      "Do not diagnose from OLIG2 positivity alone.",
    ],
    differential: [
      {
        name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
        distinction:
          "Loss of SMARCB1 or SMARCA4; rhabdoid cells may express EMA, SMA, and vimentin.",
      },
      {
        name: "Cribriform Neuroepithelial Tumor (CRINET)",
        distinction:
          "Cribriform architecture with SMARCB1 loss; Kir7.1 is generally absent, helping separate it from choroid plexus carcinoma.",
      },
      {
        name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
        distinction:
          "Multilayered rosettes, diffuse LIN28A, and usually C19MC alteration; SMARCB1 is retained.",
      },
      {
        name: "CNS Tumor with BCOR Internal Tandem Duplication",
        distinction:
          "BCOR exon 15 ITD with diffuse nuclear BCOR, dense capillary network, and spindle/oval cells.",
      },
      {
        name: "CNS Embryonal Tumor, NEC/NOS",
        distinction:
          "Diagnosis of exclusion after molecularly defined embryonal tumors and high-grade glioma mimics have been excluded.",
      },
    ],
  },
  {
    name: "CNS Tumor with BCOR Internal Tandem Duplication",
    group: "Other Embryonal Tumors",
    clue: "BCOR exon 15 internal tandem duplication in a tumor with solid growth, spindle/oval cells, and dense capillary network.",
    clinical: [
      "Predominantly affects infants and young children; reported median age is approximately 3.5 years.",
      "Usually arises in cerebral or cerebellar hemispheres.",
      "Presents with mass effect, seizures, focal deficits, or raised intracranial pressure.",
    ],
    criteria: [
      "Predominantly solid CNS tumor composed of uniform oval or spindle cells.",
      "Dense capillary network and focal perivascular pseudorosettes may be present.",
      "Demonstrate BCOR internal tandem duplication in exon 15.",
      "Nuclear BCOR IHC is supportive but not specific.",
    ],
    hist: [
      "Uniform oval-to-spindle cells have round-to-oval nuclei and delicate chromatin.",
      "A dense branching capillary network is characteristic.",
      "Perivascular pseudorosettes may occur but lack the GFAP-positive processes typical of ependymoma.",
      "Mitotic activity and Ki-67 are often increased.",
    ],
    ihc: [
      "Strong diffuse nuclear BCOR is a sensitive supportive marker but is not specific.",
      "Vimentin and CD56 are commonly positive.",
      "OLIG2, GFAP, and S100 are absent or limited to scattered cells rather than diffusely expressed.",
      "Perivascular pseudorosettes are typically GFAP-negative.",
    ],
    molecular: [
      "Demonstrate BCOR exon 15 ITD by sequencing or validated molecular assay.",
      "DNA methylation profiling can distinguish this tumor from other BCOR-altered and embryonal neoplasms.",
      "BCOR ITD is distinct from BCOR fusion-associated tumors.",
    ],
    pitfalls: [
      "Nuclear BCOR staining alone is insufficient because other neoplasms can express BCOR.",
      "Exclude ependymoma and FOXR2-activated CNS neuroblastoma with molecular testing.",
    ],
    differential: [
      {
        name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
        distinction:
          "Loss of SMARCB1 or SMARCA4; rhabdoid cells may express EMA, SMA, and vimentin.",
      },
      {
        name: "Cribriform Neuroepithelial Tumor (CRINET)",
        distinction:
          "Cribriform architecture with SMARCB1 loss; Kir7.1 is generally absent, helping separate it from choroid plexus carcinoma.",
      },
      {
        name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
        distinction:
          "Multilayered rosettes, diffuse LIN28A, and usually C19MC alteration; SMARCB1 is retained.",
      },
      {
        name: "CNS Neuroblastoma, FOXR2-Activated",
        distinction:
          "FOXR2 activation/rearrangement with OLIG2 expression; confirm with molecular profiling.",
      },
      {
        name: "CNS Embryonal Tumor, NEC/NOS",
        distinction:
          "Diagnosis of exclusion after molecularly defined embryonal tumors and high-grade glioma mimics have been excluded.",
      },
    ],
  },
  {
    name: "CNS Embryonal Tumor, NEC/NOS",
    group: "Other Embryonal Tumors",
    clue: "Diagnosis of exclusion for a CNS embryonal tumor lacking a defining molecular alteration or lacking adequate molecular workup.",
    clinical: [
      "Most occur in infancy and childhood, although adults may be affected.",
      "Can arise throughout the neuraxis; most are supratentorial.",
      "Often present acutely with raised intracranial pressure, seizures, or focal neurologic deficits.",
    ],
    criteria: [
      "CNS neoplasm with embryonal morphology and compatible immunophenotype.",
      "Exclude medulloblastoma, ETMR, AT/RT, pineoblastoma, FOXR2-activated CNS neuroblastoma, and BCOR ITD tumor.",
      "Use NEC when adequate molecular workup excludes recognized entities but classification remains unresolved.",
      "Use NOS when further molecular analysis is unavailable or technically unsuccessful.",
    ],
    hist: [
      "Sheets of densely packed immature cells with high N:C ratios and round, oval, or angulated hyperchromatic nuclei.",
      "Mitoses and apoptosis are typically numerous.",
      "Foci of neurocytic or ganglion-cell differentiation may occur.",
      "Necrosis and hemorrhage may be present.",
    ],
    ihc: [
      "Synaptophysin and OLIG2 are variably expressed.",
      "Ki-67 is high.",
      "GFAP and vimentin are generally absent in tumor cells, although reactive astrocytes may stain.",
      "SMARCB1 and SMARCA4 status should be assessed to exclude AT/RT.",
    ],
    molecular: [
      "Perform broad molecular profiling, including DNA methylation profiling, when available.",
      "Use RNA sequencing or targeted fusion testing to identify rare defining alterations.",
      "A diagnosis of NEC/NOS should follow exclusion of molecularly defined mimics.",
    ],
    pitfalls: [
      "Avoid premature NEC/NOS classification before appropriate molecular testing.",
      "A small biopsy may obscure diagnostic differentiation; correlate with imaging and obtain additional tissue when feasible.",
    ],
    differential: [
      {
        name: "Atypical Teratoid/Rhabdoid Tumor (AT/RT)",
        distinction:
          "Loss of SMARCB1 or SMARCA4; rhabdoid cells may express EMA, SMA, and vimentin.",
      },
      {
        name: "Cribriform Neuroepithelial Tumor (CRINET)",
        distinction:
          "Cribriform architecture with SMARCB1 loss; Kir7.1 is generally absent, helping separate it from choroid plexus carcinoma.",
      },
      {
        name: "Embryonal Tumor with Multilayered Rosettes (ETMR)",
        distinction:
          "Multilayered rosettes, diffuse LIN28A, and usually C19MC alteration; SMARCB1 is retained.",
      },
      {
        name: "CNS Neuroblastoma, FOXR2-Activated",
        distinction:
          "FOXR2 activation/rearrangement with OLIG2 expression; confirm with molecular profiling.",
      },
      {
        name: "CNS Tumor with BCOR Internal Tandem Duplication",
        distinction:
          "BCOR exon 15 ITD with diffuse nuclear BCOR, dense capillary network, and spindle/oval cells.",
      },
    ],
  },
  {
    name: "Pineocytoma",
    group: "Pineal Region Tumors",
    clue: "Well-differentiated pineal parenchymal tumor with pineocytomatous rosettes and mature neuronal phenotype.",
    clinical: [
      "Usually affects adults; median age is approximately 44 years, but a wide age range is reported.",
      "Arises in the pineal region.",
      "Aqueductal obstruction may cause hydrocephalus; Parinaud syndrome and other neuro-ophthalmologic symptoms may occur.",
    ],
    criteria: [
      "Well-differentiated pineal parenchymal neoplasm.",
      "Uniform mature cells arranged in sheets and/or large pineocytomatous rosettes.",
      "Low proliferative activity and absence of embryonal morphology.",
      "CNS WHO grade 1.",
    ],
    hist: [
      "Moderately cellular tumor composed of uniform mature pinealocyte-like cells.",
      "Large pineocytomatous rosettes contain delicate neuropil-like processes.",
      "Nuclei are round with finely stippled chromatin; mitotic activity is low.",
      "Pleomorphic/gangliocytic areas may occur but do not imply a separate glial component.",
    ],
    ihc: [
      "Synaptophysin, NSE, and neurofilament proteins are usually strongly positive.",
      "CRX supports pineal lineage.",
      "Chromogranin A and other neuronal markers are variable.",
      "No neoplastic glial component is expected.",
    ],
    molecular: [
      "No recurrent defining genetic alteration is established.",
      "DNA methylation profiling shows a distinct profile and may help in difficult cases.",
      "KBTBD4 alterations are not characteristic; their presence should prompt consideration of PPTID.",
    ],
    pitfalls: [
      "Distinguish pineocytomatous rosettes from normal pineal parenchyma and pineal cyst wall.",
      "Pleomorphic pineocytoma lacks the neoplastic glial component and tumor-cell CD34 expression expected in ganglioglioma.",
    ],
    differential: [
      {
        name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
        distinction:
          "Intermediate cellularity and atypia; diffuse sheets/lobules, CRX positivity, and KBTBD4 alteration support the diagnosis.",
      },
      {
        name: "Pineoblastoma",
        distinction:
          "Primitive high-grade embryonal sheets with brisk mitoses, diffuse CRX, and retained SMARCB1/SMARCA4.",
      },
      {
        name: "Papillary Tumor of the Pineal Region (PTPR)",
        distinction:
          "Epithelial papillary/solid pattern with CK18 and SPDEF; usually Kir7.1-negative, unlike choroid plexus tumors.",
      },
      {
        name: "Desmoplastic Myxoid Tumor of the Pineal Region, SMARCB1-Mutant",
        distinction:
          "Collagenized and myxoid matrix with SMARCB1 loss; usually low mitotic activity and no overt malignant morphology.",
      },
    ],
  },
  {
    name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
    group: "Pineal Region Tumors",
    clue: "Intermediate-grade pineal parenchymal tumor with moderate-to-high cellularity, neuronal phenotype, and often KBTBD4 alteration.",
    clinical: [
      "Usually affects adolescents and adults; median age is approximately 33 years.",
      "Arises in the pineal region.",
      "Presents with aqueductal obstruction, hydrocephalus, Parinaud syndrome, or other local mass effects.",
    ],
    criteria: [
      "Pineal parenchymal neoplasm composed of diffuse sheets and/or large lobules of monomorphic round cells.",
      "Cellularity and cytologic atypia exceed those of pineocytoma but are less primitive than pineoblastoma.",
      "CNS WHO grade 2 or 3, based on histologic features and proliferative activity.",
      "KBTBD4 alteration is highly desirable as molecular support.",
    ],
    hist: [
      "Diffuse neurocytoma-like or oligodendroglioma-like sheets and/or lobulated architecture.",
      "Moderate-to-high cellularity with round nuclei, mild-to-moderate atypia, and salt-and-pepper chromatin.",
      "Cytoplasm is more discernible than in pineoblastoma.",
      "Mitotic activity is variable and contributes to grading.",
    ],
    ihc: [
      "Synaptophysin is usually positive.",
      "CRX shows diffuse nuclear expression in most cases.",
      "Neurofilament and chromogranin A are variable.",
      "NeuN is typically negative, helping distinguish from central neurocytoma.",
      "OLIG2 is generally negative.",
    ],
    molecular: [
      "KBTBD4 alteration is highly desirable and supports PPTID.",
      "DNA methylation profiling may resolve cases with overlapping morphology.",
      "IDH mutation and whole-arm 1p/19q codeletion are not expected.",
    ],
    pitfalls: [
      "Do not classify a tumor as PPTID solely because it lies in the pineal region; exclude central neurocytoma and oligodendroglioma.",
      "A mixed pineocytoma-pineoblastoma tumor should not be labeled PPTID.",
    ],
    differential: [
      {
        name: "Pineocytoma",
        distinction:
          "Well-differentiated mature pinealocytes with pineocytomatous rosettes, low mitotic activity, and strong neuronal marker expression.",
      },
      {
        name: "Pineoblastoma",
        distinction:
          "Primitive high-grade embryonal sheets with brisk mitoses, diffuse CRX, and retained SMARCB1/SMARCA4.",
      },
      {
        name: "Papillary Tumor of the Pineal Region (PTPR)",
        distinction:
          "Epithelial papillary/solid pattern with CK18 and SPDEF; usually Kir7.1-negative, unlike choroid plexus tumors.",
      },
      {
        name: "Desmoplastic Myxoid Tumor of the Pineal Region, SMARCB1-Mutant",
        distinction:
          "Collagenized and myxoid matrix with SMARCB1 loss; usually low mitotic activity and no overt malignant morphology.",
      },
    ],
  },
  {
    name: "Pineoblastoma",
    group: "Pineal Region Tumors",
    clue: "Highly cellular pineal embryonal tumor with primitive small cells, high mitotic activity, and diffuse CRX expression.",
    clinical: [
      "Predominantly affects infants and children; median age is approximately 6 years.",
      "Arises in the pineal region.",
      "Aqueductal obstruction, hydrocephalus, and raised intracranial pressure are common; CSF dissemination may occur.",
    ],
    criteria: [
      "Poorly differentiated embryonal neoplasm arising in the pineal parenchyma.",
      "Highly cellular sheets of primitive cells with high N:C ratios, brisk mitoses, and apoptosis.",
      "Pineal lineage is supported by diffuse nuclear CRX expression.",
      "SMARCB1 and SMARCA4 are retained; exclude AT/RT.",
      "CNS WHO grade 4.",
    ],
    hist: [
      "Patternless sheets of densely packed small cells with scant cytoplasm and hyperchromatic nuclei.",
      "Mitotic activity and apoptosis are brisk; necrosis may be present.",
      "Homer Wright or Flexner-Wintersteiner rosettes may occur; pineocytomatous rosettes are absent.",
      "Mixed pineocytoma-pineoblastoma tumors may show sharply demarcated differentiated and primitive components.",
    ],
    ihc: [
      "Synaptophysin and NSE are positive.",
      "CRX is typically diffusely nuclear positive in >50% of tumor cells.",
      "SMARCB1 and SMARCA4 nuclear expression are retained.",
      "LIN28A is typically negative, unlike ETMR.",
      "Neurofilament and chromogranin A are less frequently positive than in pineocytoma.",
    ],
    molecular: [
      "DNA methylation profiling identifies molecular subgroups.",
      "Assess DICER1, DROSHA, and DGCR8 alterations in miRNA-processing subgroups.",
      "Evaluate RB1 in infantile tumors and MYC/FOXR2 activation when indicated.",
      "Germline assessment may be appropriate for RB1- or DICER1-associated contexts.",
    ],
    pitfalls: [
      "Confirm pineal location; morphology overlaps with other CNS embryonal tumors.",
      "Do not confuse with PPTID; KBTBD4 alteration supports PPTID, not pineoblastoma.",
    ],
    differential: [
      {
        name: "Pineocytoma",
        distinction:
          "Well-differentiated mature pinealocytes with pineocytomatous rosettes, low mitotic activity, and strong neuronal marker expression.",
      },
      {
        name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
        distinction:
          "Intermediate cellularity and atypia; diffuse sheets/lobules, CRX positivity, and KBTBD4 alteration support the diagnosis.",
      },
      {
        name: "Papillary Tumor of the Pineal Region (PTPR)",
        distinction:
          "Epithelial papillary/solid pattern with CK18 and SPDEF; usually Kir7.1-negative, unlike choroid plexus tumors.",
      },
      {
        name: "Desmoplastic Myxoid Tumor of the Pineal Region, SMARCB1-Mutant",
        distinction:
          "Collagenized and myxoid matrix with SMARCB1 loss; usually low mitotic activity and no overt malignant morphology.",
      },
    ],
  },
  {
    name: "Papillary Tumor of the Pineal Region (PTPR)",
    group: "Pineal Region Tumors",
    clue: "Papillary and solid epithelial-like tumor with CK18 expression and a characteristic pineal-region location.",
    clinical: [
      "Occurs in children and adults; reported median age is approximately 35 years.",
      "Arises in the pineal region.",
      "Symptoms reflect aqueductal obstruction, hydrocephalus, and local mass effect.",
    ],
    criteria: [
      "Neuroepithelial tumor of the pineal region with papillary and solid components.",
      "Epithelial-like tumor cells with cytokeratin expression, particularly CK18.",
      "CNS WHO grade 2 or 3, depending on histologic features.",
    ],
    hist: [
      "Papillary structures contain vessels covered by layers of large pale-to-eosinophilic columnar cells.",
      "Solid areas may predominate, with ependymal-like rosettes or tubules.",
      "Nuclear atypia and mitotic activity are variable.",
      "True choroid plexus-type papillae with a conspicuous basement membrane are not typical.",
    ],
    ihc: [
      "CK18 and other cytokeratins are characteristic, especially in papillary areas.",
      "SPDEF is frequently positive.",
      "Vimentin, S100, NSE, MAP2, and CD56 may be positive.",
      "GFAP is less frequent than in ependymoma; dot-like EMA is uncommon.",
      "Kir7.1 and E-cadherin are usually absent or limited.",
    ],
    molecular: [
      "DNA methylation profiling distinguishes PTPR from ependymoma and pineal parenchymal tumors.",
      "No single recurrent alteration is required for routine diagnosis.",
    ],
    pitfalls: [
      "Exclude metastatic adenocarcinoma using clinical history, imaging, and a focused IHC panel.",
      "Distinguish from choroid plexus papilloma using Kir7.1, E-cadherin, and morphology.",
    ],
    differential: [
      {
        name: "Pineocytoma",
        distinction:
          "Well-differentiated mature pinealocytes with pineocytomatous rosettes, low mitotic activity, and strong neuronal marker expression.",
      },
      {
        name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
        distinction:
          "Intermediate cellularity and atypia; diffuse sheets/lobules, CRX positivity, and KBTBD4 alteration support the diagnosis.",
      },
      {
        name: "Pineoblastoma",
        distinction:
          "Primitive high-grade embryonal sheets with brisk mitoses, diffuse CRX, and retained SMARCB1/SMARCA4.",
      },
      {
        name: "Desmoplastic Myxoid Tumor of the Pineal Region, SMARCB1-Mutant",
        distinction:
          "Collagenized and myxoid matrix with SMARCB1 loss; usually low mitotic activity and no overt malignant morphology.",
      },
    ],
  },
  {
    name: "Desmoplastic Myxoid Tumor of the Pineal Region, SMARCB1-Mutant",
    group: "Pineal Region Tumors",
    clue: "Pineal-region tumor with collagenized and myxoid stroma and loss of nuclear SMARCB1.",
    clinical: [
      "Reported in adolescents and adults; median age is approximately 40 years.",
      "All reported cases have arisen in the pineal region.",
      "Clinical symptoms reflect local mass effect and aqueductal obstruction.",
    ],
    criteria: [
      "Pineal-region neoplasm with desmoplastic and myxoid stromal components.",
      "Cords, nests, or fascicles of oval, spindle, and epithelioid cells in collagenized and myxoid matrix.",
      "Loss of nuclear SMARCB1 (INI1) in tumor cells with intact internal controls.",
      "Assess SMARCB1 locus alteration to support the diagnosis.",
    ],
    hist: [
      "Variably dense cords and fascicles of small-to-medium oval, spindle, or epithelioid cells.",
      "Heavily collagenized stroma alternates with pale basophilic myxoid matrix.",
      "Irregular elongated vessels and prominent fibrosis are common.",
      "Rhabdoid cells are rare; mitoses are usually exceptional and overt malignant features are lacking.",
    ],
    ihc: [
      "Loss of nuclear SMARCB1 is defining.",
      "CD34 and EMA are often expressed.",
      "Interpret staining with internal positive controls.",
    ],
    molecular: [
      "Assess SMARCB1 deficiency by IHC and confirm alteration at the molecular level when feasible.",
      "DNA methylation profiling may support classification in difficult cases.",
    ],
    pitfalls: [
      "Do not confuse with AT/RT: both may lose SMARCB1, but location and characteristic desmoplastic/myxoid morphology support this pineal-region entity.",
      "The reported case number is small; interpret biologic behavior cautiously.",
    ],
    differential: [
      {
        name: "Pineocytoma",
        distinction:
          "Well-differentiated mature pinealocytes with pineocytomatous rosettes, low mitotic activity, and strong neuronal marker expression.",
      },
      {
        name: "Pineal Parenchymal Tumor of Intermediate Differentiation (PPTID)",
        distinction:
          "Intermediate cellularity and atypia; diffuse sheets/lobules, CRX positivity, and KBTBD4 alteration support the diagnosis.",
      },
      {
        name: "Pineoblastoma",
        distinction:
          "Primitive high-grade embryonal sheets with brisk mitoses, diffuse CRX, and retained SMARCB1/SMARCA4.",
      },
      {
        name: "Papillary Tumor of the Pineal Region (PTPR)",
        distinction:
          "Epithelial papillary/solid pattern with CK18 and SPDEF; usually Kir7.1-negative, unlike choroid plexus tumors.",
      },
    ],
  },
];

const diagnosticGroups = [
  "Choroid Plexus Tumors",
  "Medulloblastomas",
  "Other Embryonal Tumors",
  "Pineal Region Tumors",
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="border-b border-slate-200 pb-2 text-sm font-extrabold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      <div className="pt-3">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function ChoroidPlexusEmbryonalPinealTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All Categories");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const groupMatch = group === "All Categories" || e.group === group;
      const haystack = [
        e.name,
        e.group,
        e.clue,
        ...e.clinical,
        ...e.criteria,
        ...e.hist,
        ...e.ihc,
        ...e.molecular,
        ...e.differential.flatMap((d) => [d.name, d.distinction]),
      ]
        .join(" ")
        .toLowerCase();
      return groupMatch && (!q || haystack.includes(q));
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
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                Central Nervous System Pathology
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Choroid Plexus, Embryonal, and Pineal Tumors
              </h1>
            </div>
          </div>
        </header>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-950">
            Integrated Diagnostic Approach
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use anatomic site, morphology, targeted immunohistochemistry, and
            molecular classification in sequence.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 p-3">
                    Diagnostic setting
                  </th>
                  <th className="border border-slate-300 p-3">
                    Key histologic clues
                  </th>
                  <th className="border border-slate-300 p-3">
                    Initial IHC / molecular workup
                  </th>
                  <th className="border border-slate-300 p-3">
                    Integrated interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-3 font-semibold">
                    Intraventricular papillary tumor
                  </td>
                  <td className="border border-slate-300 p-3">
                    Single-layered papillae; count mitoses; assess cellularity,
                    pleomorphism, necrosis, papillary blurring, and brain
                    invasion.
                  </td>
                  <td className="border border-slate-300 p-3">
                    CK7, Kir7.1, EAAT1, S100, transthyretin, Ki-67; consider
                    copy-number or methylation profiling if atypical.
                  </td>
                  <td className="border border-slate-300 p-3">
                    Papilloma: &lt;1 mitosis/mm². Atypical papilloma: ≥1
                    mitosis/mm². Carcinoma: at least 4 of 5 malignant histologic
                    features.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3 font-semibold">
                    Cerebellar embryonal tumor
                  </td>
                  <td className="border border-slate-300 p-3">
                    Small blue cells, brisk mitoses/apoptosis; describe classic,
                    desmoplastic/nodular, extensive nodularity, or
                    large-cell/anaplastic pattern.
                  </td>
                  <td className="border border-slate-300 p-3">
                    β-catenin, GAB1, YAP1, OTX2, p75-NGFR, p53; DNA methylation
                    profiling; TP53 sequencing in SHH tumors; MYC/MYCN
                    amplification as indicated.
                  </td>
                  <td className="border border-slate-300 p-3">
                    Classify as WNT, SHH with TP53 status, or non-WNT/non-SHH;
                    all medulloblastomas are CNS WHO grade 4.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3 font-semibold">
                    Supratentorial embryonal tumor
                  </td>
                  <td className="border border-slate-300 p-3">
                    Assess rosettes, rhabdoid cells, cribriform pattern,
                    capillary network, neurocytic differentiation, and mitotic
                    activity.
                  </td>
                  <td className="border border-slate-300 p-3">
                    INI1/SMARCB1, BRG1/SMARCA4, LIN28A, OLIG2, BCOR; broad
                    DNA/RNA profiling and methylation classifier.
                  </td>
                  <td className="border border-slate-300 p-3">
                    Identify AT/RT, CRINET, ETMR, FOXR2-activated CNS
                    neuroblastoma, or BCOR ITD tumor before using NEC/NOS.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3 font-semibold">
                    Pineal-region neoplasm
                  </td>
                  <td className="border border-slate-300 p-3">
                    Separate mature pinealocyte-like rosettes, intermediate
                    cellularity, primitive embryonal sheets, papillary
                    epithelial growth, and desmoplastic/myxoid pattern.
                  </td>
                  <td className="border border-slate-300 p-3">
                    Synaptophysin, neurofilament, CRX, CK18, SPDEF, INI1;
                    KBTBD4, DICER1/DROSHA/DGCR8, RB1, MYC/FOXR2, and methylation
                    profiling as indicated.
                  </td>
                  <td className="border border-slate-300 p-3">
                    Integrate morphology and site to distinguish pineocytoma,
                    PPTID, pineoblastoma, PTPR, and SMARCB1-mutant desmoplastic
                    myxoid tumor.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="text-sm font-bold text-amber-950">
              Practical Guardrails
            </h3>
            <BulletList
              items={[
                "Do not use Ki-67 as a substitute for mitotic counting in choroid plexus tumors.",
                "For medulloblastoma, histologic pattern does not replace molecular group assignment.",
                "Loss of INI1 or BRG1 requires an intact internal positive control and clinicopathologic correlation.",
                "LIN28A is supportive but not specific for ETMR; C19MC alteration is much more specific.",
                "A CNS embryonal tumor NEC/NOS diagnosis should follow an appropriate molecular exclusion workup.",
              ]}
            />
          </div>
        </section>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label
              htmlFor="cns-tumor-search"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Search diagnoses and diagnostic features
            </label>
            <input
              id="cns-tumor-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: INI1, LIN28A, CTNNB1, KBTBD4, mitoses..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>
          <div className="sm:w-72">
            <label
              htmlFor="cns-tumor-group"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>
            <select
              id="cns-tumor-group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option>All Categories</option>
              {diagnosticGroups.map((g) => (
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
          <span>
            {filtered.length} of {entities.length} entities
          </span>
          <span>
            Expand a diagnosis for criteria, histology, IHC, molecular
            pathology, and differentials.
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
                      Key diagnostic clue: {e.clue}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                    {isOpen ? "− Hide" : "＋ Details"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 p-4 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <Section title="Clinical Profile">
                          <BulletList items={e.clinical} />
                        </Section>
                        <Section title="Essential Diagnostic Criteria">
                          <BulletList items={e.criteria} />
                        </Section>
                        <Section title="Histopathology">
                          <BulletList items={e.hist} />
                        </Section>
                      </div>
                      <div>
                        <Section title="Immunophenotype">
                          <BulletList items={e.ihc} />
                        </Section>
                        <Section title="Molecular Pathology">
                          <BulletList items={e.molecular} />
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
                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <BulletList items={e.pitfalls} />
                    </div>
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
          morphology, immunohistochemistry, and molecular findings in
          conjunction with tumor location, imaging, and clinical context.
        </footer>
      </div>
    </main>
  );
}
