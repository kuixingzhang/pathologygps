"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular: string[];
};

const entities: Entity[] = [
  {
    name: "Neurofibromatosis Type 1",
    group: "RAS/MAPK Predisposition",
    clue: "Multiple café-au-lait macules, intertriginous freckling, neurofibromas, or an optic pathway glioma.",
    summary:
      "Autosomal dominant NF1-related syndrome with cutaneous, osseous, peripheral nerve, and CNS manifestations.",
    clinical: [
      "Children and adults; both sexes; skin, peripheral nerves, optic pathways, brainstem, and bone. Cutaneous findings often emerge in childhood; plexiform neurofibromas may be congenital.",
    ],
    criteria: [
      "Clinical diagnosis: at least 2 of 7 features: ≥6 café-au-lait macules (>5 mm prepubertal or >15 mm postpubertal); axillary/inguinal freckling; ≥2 neurofibromas or one plexiform neurofibroma; optic pathway glioma; ≥2 Lisch nodules or choroidal abnormalities; characteristic osseous lesion; pathogenic NF1 variant in normal tissue; or an affected parent with one qualifying criterion. Apply age- and context-specific consensus criteria.",
    ],
    histology: [
      "Plexiform neurofibroma expands and incorporates multiple nerve fascicles in a multinodular pattern. ANNUBP is supported by at least 2 of cytologic atypia, hypercellularity, loss of neurofibroma architecture, and increased mitotic activity. MPNST shows infiltrative malignant spindle cells, brisk mitoses, and often necrosis. Associated gliomas are commonly pilocytic astrocytomas.",
    ],
    ihc: [
      "Neurofibromas usually express S100 and SOX10 in Schwannian cells; CD34 highlights a subset of stromal cells. MPNST may show reduced/patchy S100 and SOX10; loss of H3K27me3 supports PRC2-deficient MPNST but is not universal. p16 loss may occur in ANNUBP/MPNST.",
    ],
    differential: [
      {
        name: "NF2-Related Schwannomatosis",
        distinction:
          "Bilateral vestibular schwannomas, multiple meningiomas, and spinal ependymomas favor NF2-related disease; plexiform neurofibromas and the NF1 pigmentary phenotype favor NF1.",
      },
      {
        name: "Schwannomatosis (SMARCB1- or LZTR1-Related)",
        distinction:
          "Multiple painful schwannomas without the characteristic NF1 pigmentary findings or plexiform neurofibromas favor schwannomatosis.",
      },
    ],
    molecular: [
      "NF1 loss-of-function; neurofibromin is a RAS-GAP. Tumors commonly acquire biallelic NF1 inactivation. ANNUBP may acquire CDKN2A/B and other 9p alterations; MPNST may show PRC2 (SUZ12/EED), TP53, and CDKN2A/B abnormalities.",
    ],
  },
  {
    name: "NF2-Related Schwannomatosis",
    group: "RAS/MAPK and Chromatin-Related Predisposition",
    clue: "Bilateral vestibular schwannomas, multiple meningiomas, and spinal ependymomas.",
    summary:
      "Autosomal dominant tumor predisposition caused by NF2 inactivation; mosaic disease is common among de novo presentations.",
    clinical: [
      "Adolescents and young adults; both sexes; vestibular nerves, other cranial nerves, spinal roots, meninges, and spinal cord. Hearing loss, tinnitus, imbalance, or multiple nerve tumors.",
    ],
    criteria: [
      "Diagnosis can be established by bilateral vestibular schwannomas; an identical pathogenic NF2 variant in 2 or more anatomically distinct NF2-related tumors; or accepted consensus combinations of major/minor criteria. Major features include unilateral vestibular schwannoma, a first-degree relative with NF2-related schwannomatosis, and multiple meningiomas; minor features include schwannomas, ependymomas, and characteristic ocular/dermal findings. Confirm with germline or mosaic-sensitive testing when possible.",
    ],
    histology: [
      "Schwannomas may be multinodular or plexiform and may coexist with meningiomas and multiple spinal ependymomas. Hybrid schwannoma-neurofibroma tumors can occur. Meningioangiomatosis and glial hamartias are recognized associated lesions.",
    ],
    ihc: [
      "Schwannomas express S100 and SOX10; mosaic/patchy loss of INI1 may occur but is not specific. Meningiomas may show loss of merlin/NF2 expression. Retinal and lens abnormalities are clinical clues rather than diagnostic tumor stains.",
    ],
    differential: [
      {
        name: "Neurofibromatosis Type 1",
        distinction:
          "Plexiform neurofibromas, multiple café-au-lait macules, and intertriginous freckling favor NF1.",
      },
      {
        name: "Schwannomatosis (SMARCB1- or LZTR1-Related)",
        distinction:
          "Multiple painful schwannomas without bilateral vestibular schwannomas or the characteristic NF2 tumor combination favor SMARCB1/LZTR1-related schwannomatosis.",
      },
    ],
    molecular: [
      "NF2 pathogenic variants; merlin tumor-suppressor loss. Tumors typically show biallelic NF2 inactivation. Mosaicism can cause low variant allele fractions and negative routine blood testing.",
    ],
  },
  {
    name: "Schwannomatosis (SMARCB1- or LZTR1-Related)",
    group: "RAS/MAPK and Chromatin-Related Predisposition",
    clue: "Multiple schwannomas with chronic pain, usually without bilateral vestibular schwannomas.",
    summary:
      "Predisposition to multiple schwannomas associated with germline SMARCB1 or LZTR1 variants; tumor-specific NF2 inactivation is common.",
    clinical: [
      "Usually second to fourth decades; both sexes; peripheral nerves, spinal roots, and occasionally cranial nerves or meninges. Pain or a palpable mass is common; neurologic deficits are less frequent.",
    ],
    criteria: [
      "Establish a clinical diagnosis using accepted criteria for multiple pathologically confirmed schwannomas or characteristic imaging plus family history, while excluding NF2-related schwannomatosis. Molecular classification requires a pathogenic germline SMARCB1 or LZTR1 variant; assess NF2 in the differential, especially with vestibular tumors.",
    ],
    histology: [
      "Schwannomas resemble sporadic counterparts and may be multiple, segmental, or plexiform. Hybrid schwannoma-neurofibroma lesions may occur. SMARCB1-related cases can include meningiomas and rarely malignant peripheral nerve sheath tumors.",
    ],
    ihc: [
      "Schwannomas are diffusely positive for S100 and SOX10. INI1 may show mosaic loss in tumor cells; interpret with internal controls and germline testing. LZTR1-related tumors do not have a defining routine IHC surrogate.",
    ],
    differential: [
      {
        name: "Neurofibromatosis Type 1",
        distinction:
          "Plexiform neurofibromas and pigmentary diagnostic criteria favor NF1.",
      },
      {
        name: "NF2-Related Schwannomatosis",
        distinction:
          "Bilateral vestibular schwannomas, meningiomas, and spinal ependymomas favor NF2-related disease.",
      },
    ],
    molecular: [
      "Germline SMARCB1 or LZTR1 pathogenic variants; schwannomas commonly acquire chromosome 22q/NF2 alterations as part of a multi-hit mechanism. Tumor testing alone cannot establish germline status.",
    ],
  },
  {
    name: "Von Hippel-Lindau Syndrome",
    group: "Tumor Suppressor Predisposition",
    clue: "Hemangioblastomas with retinal, renal, pancreatic, or adrenal manifestations.",
    summary:
      "Autosomal dominant VHL tumor predisposition syndrome involving highly vascular CNS and retinal hemangioblastomas and multiple visceral neoplasms.",
    clinical: [
      "Childhood through adulthood; both sexes; cerebellum, brainstem, spinal cord, retina, kidney, pancreas, and adrenal medulla. Symptoms depend on tumor location; renal tumors may be multifocal/bilateral.",
    ],
    criteria: [
      "A heterozygous germline pathogenic VHL variant establishes the molecular diagnosis. Clinical diagnosis can be made using accepted criteria based on a characteristic VHL-associated lesion plus family history, or multiple characteristic lesions in a person without family history. Consider VHL with CNS/retinal hemangioblastoma, clear cell renal cell carcinoma, pheochromocytoma, pancreatic neuroendocrine tumor, or multiple pancreatic/renal cysts.",
    ],
    histology: [
      "Hemangioblastoma has a rich capillary network and stromal cells with lipid-rich clear cytoplasm. Associated tumors include clear cell renal cell carcinoma, pancreatic neuroendocrine neoplasms, and pheochromocytoma/paraganglioma.",
    ],
    ihc: [
      "Hemangioblastoma stromal cells commonly express inhibin-alpha, S100, and CAIX; endothelial cells express CD31/CD34. VHL-associated paragangliomas may show CAIX and inhibin. Use lineage-specific panels to distinguish metastatic clear cell RCC.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "Sporadic hemangioblastoma: may be morphologically identical; multiplicity, younger age, and associated visceral lesions prompt VHL testing. Metastatic clear cell RCC: epithelial nests express pancytokeratin/PAX8 and lack the typical stromal-cell phenotype. Other vascular lesions: lack the characteristic stromal cell population.",
      },
    ],
    molecular: [
      "Germline VHL inactivation with somatic second hit; HIF pathway dysregulation and angiogenic signaling. Tumor VHL alterations alone do not prove hereditary disease.",
    ],
  },
  {
    name: "Tuberous Sclerosis Complex",
    group: "mTOR Pathway Predisposition",
    clue: "Subependymal nodules, subependymal giant cell astrocytoma, cortical tubers, and renal angiomyolipomas.",
    summary:
      "Autosomal dominant multisystem disorder caused by TSC1 or TSC2 pathogenic variants and mTOR pathway activation.",
    clinical: [
      "Often recognized in infancy or childhood; both sexes; cerebral cortex, subependymal region, kidney, heart, skin, lung, and retina. Seizures, developmental delay, and skin lesions are common presentations.",
    ],
    criteria: [
      "Clinical diagnosis: definite TSC with 2 major features or 1 major plus ≥2 minor features; possible TSC with 1 major or ≥2 minor features. Major features include ≥3 hypomelanotic macules, facial angiofibromas or fibrous cephalic plaque, ungual fibromas, shagreen patch, multiple retinal hamartomas, cortical dysplasias, subependymal nodules, SEGA, cardiac rhabdomyoma, LAM, and ≥2 angiomyolipomas. A pathogenic TSC1/TSC2 variant in normal tissue is independently diagnostic.",
    ],
    histology: [
      "Cortical tubers show disorganized cortex, dysmorphic neurons, and balloon cells. SEGA is a circumscribed subependymal tumor with large ganglioid cells and variable spindle-cell/astrocytic areas. Renal angiomyolipomas contain dysmorphic vessels, smooth muscle, and adipose tissue.",
    ],
    ihc: [
      "SEGA and cortical lesions may express GFAP, neuronal markers, and phospho-S6; HMB45/Melan-A and smooth muscle markers highlight angiomyolipoma cells. No single IHC stain establishes TSC.",
    ],
    differential: [
      {
        name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
        distinction:
          "Odontogenic keratocysts, early/multiple BCCs, and SHH medulloblastoma favor Gorlin syndrome; cortical tubers and SEGA favor TSC.",
      },
    ],
    molecular: [
      "Germline TSC1 or TSC2 loss with somatic second hit; loss of hamartin/tuberin activates RHEB-mTORC1. Mosaic variants may require deep sequencing.",
    ],
  },
  {
    name: "Li-Fraumeni Syndrome",
    group: "DNA Damage Response Predisposition",
    clue: "Multiple early-onset primary cancers, especially sarcoma, breast cancer, brain tumors, and adrenocortical carcinoma.",
    summary:
      "Autosomal dominant cancer predisposition syndrome caused by germline TP53 pathogenic variants.",
    clinical: [
      "Children, adolescents, and young adults; both sexes; multiple organs. Classic tumors include soft-tissue/bone sarcomas, premenopausal breast carcinoma, CNS tumors, and adrenocortical carcinoma.",
    ],
    criteria: [
      "A germline pathogenic TP53 variant establishes the diagnosis. Use modified Chompret criteria to select patients for testing: a core tumor before age 46 plus an affected close relative with a core tumor before age 56 or multiple tumors; multiple primary tumors with the first before 46; rare tumors such as adrenocortical carcinoma or choroid plexus carcinoma; or breast cancer at a young age in appropriate family context.",
    ],
    histology: [
      "Tumors are histologically diverse and generally resemble sporadic counterparts. CNS tumors include choroid plexus carcinoma, high-grade gliomas, and medulloblastoma. Choroid plexus carcinoma may show marked atypia, brisk mitoses, and necrosis.",
    ],
    ihc: [
      "p53 often shows diffuse strong nuclear overexpression or complete null pattern, but wild-type staining does not exclude germline TP53. Interpret p53 in the context of morphology and molecular testing.",
    ],
    differential: [
      {
        name: "Constitutional Mismatch Repair Deficiency Syndrome",
        distinction:
          "Childhood malignancies with biallelic MMR deficiency, MMR protein loss, and ultrahypermutation favor CMMRD.",
      },
      {
        name: "Familial Retinoblastoma (RB1-Related Predisposition)",
        distinction:
          "Retinoblastoma, especially bilateral or multifocal, and pineoblastoma favor RB1-related predisposition.",
      },
    ],
    molecular: [
      "Germline TP53 pathogenic variant; somatic second hit and genomic instability. Clonal hematopoiesis can complicate blood-based testing; confirm suspected germline findings in nonhematopoietic tissue when indicated.",
    ],
  },
  {
    name: "PTEN Hamartoma Tumor Syndrome (Cowden Syndrome)",
    group: "PI3K-AKT-mTOR Pathway Predisposition",
    clue: "Macrocephaly, mucocutaneous lesions, hamartomas, and increased breast, thyroid, endometrial, and renal tumor risk.",
    summary:
      "Autosomal dominant PTEN-related syndrome encompassing Cowden syndrome and related phenotypes.",
    clinical: [
      "Usually recognized in adolescence or adulthood; both sexes; skin, oral mucosa, thyroid, breast, endometrium, kidney, and CNS. Macrocephaly and mucocutaneous lesions are prominent clues.",
    ],
    criteria: [
      "A germline pathogenic PTEN variant establishes the molecular diagnosis. Clinical diagnosis uses accepted operational criteria, including combinations of pathognomonic mucocutaneous lesions, macrocephaly, hamartomatous gastrointestinal polyps, characteristic breast/thyroid/endometrial/renal cancers, and relevant family history. Lhermitte-Duclos disease is a major clue.",
    ],
    histology: [
      "CNS manifestation includes dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease), with enlarged cerebellar folia and a characteristic striated or tigroid architecture. Other lesions include hamartomatous polyps and diverse benign/malignant tumors.",
    ],
    ihc: [
      "Lhermitte-Duclos lesions show abnormal neuronal and glial elements; synaptophysin highlights dysplastic ganglion cells and GFAP highlights associated glia. PTEN IHC may be reduced but is not a substitute for germline testing.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "Tuberous sclerosis: cortical tubers and SEGA with TSC-associated systemic findings. Sporadic cerebellar dysplastic gangliocytoma: morphology may overlap; macrocephaly and mucocutaneous/systemic criteria support PTEN syndrome. Cowden-like phenotypes from other genes require molecular distinction.",
      },
    ],
    molecular: [
      "Germline PTEN loss-of-function; PI3K-AKT-mTOR pathway activation. Tumors may show somatic second hits or pathway alterations.",
    ],
  },
  {
    name: "Constitutional Mismatch Repair Deficiency Syndrome",
    group: "DNA Repair Predisposition",
    clue: "Childhood brain tumors, hematologic malignancies, and gastrointestinal cancers with café-au-lait-like skin lesions.",
    summary:
      "Autosomal recessive cancer predisposition caused by biallelic pathogenic variants in an MMR gene.",
    clinical: [
      "Infancy through adolescence; both sexes; brain, gastrointestinal tract, and hematolymphoid system. Multiple malignancies at unusually young ages are typical.",
    ],
    criteria: [
      "Diagnosis requires biallelic pathogenic variants in MLH1, MSH2, MSH6, or PMS2, or compelling functional evidence of constitutional MMR deficiency. Suspect in children with multiple malignancies, high-grade glioma, hematologic cancer, or early colorectal cancer, particularly with consanguinity or Lynch syndrome in relatives.",
    ],
    histology: [
      "CNS tumors include high-grade gliomas and other embryonal/neuroepithelial tumors. Histology is variable; extreme tumor mutational burden and lymphocytic response may be encountered in some tumors.",
    ],
    ihc: [
      "Loss of the relevant MMR protein pair by IHC (MLH1/PMS2 or MSH2/MSH6) in tumor is a screening clue; constitutional testing in non-neoplastic tissue is required to establish the syndrome. MSI and tumor mutational burden can support the workup.",
    ],
    differential: [
      {
        name: "Li-Fraumeni Syndrome",
        distinction:
          "Germline TP53 alteration and the characteristic sarcoma, breast, brain, and adrenocortical tumor spectrum favor Li-Fraumeni syndrome.",
      },
      {
        name: "Familial Adenomatous Polyposis (APC-Associated)",
        distinction:
          "Profuse colorectal adenomas and APC-associated WNT medulloblastoma favor FAP.",
      },
    ],
    molecular: [
      "Biallelic germline MMR gene variants; tumors acquire additional MMR loss and often show microsatellite instability and ultrahypermutation.",
    ],
  },
  {
    name: "Familial Adenomatous Polyposis (APC-Associated)",
    group: "WNT Pathway Predisposition",
    clue: "Colonic adenomatous polyposis with risk of medulloblastoma, especially the WNT-activated subtype.",
    summary:
      "Autosomal dominant APC-associated syndrome; the historical Turcot label should not replace a molecular diagnosis.",
    clinical: [
      "Childhood through adulthood; both sexes; colon, duodenum, brain, thyroid, and other organs. Hundreds to thousands of colorectal adenomas typically develop in classic FAP.",
    ],
    criteria: [
      "A germline pathogenic APC variant establishes the diagnosis. Clinical diagnosis is supported by ≥100 colorectal adenomas, a known familial pathogenic variant, or characteristic extracolonic manifestations with a compatible family history. Attenuated FAP has fewer adenomas and later presentation.",
    ],
    histology: [
      "Associated CNS tumor is most often medulloblastoma, particularly WNT-activated medulloblastoma. Desmoid-type fibromatosis, osteomas, and other extracolonic lesions may occur.",
    ],
    ihc: [
      "WNT-activated medulloblastoma typically shows nuclear β-catenin and may show monosomy 6. APC-related tumors may show loss of APC pathway function; correlate with germline testing.",
    ],
    differential: [
      {
        name: "Constitutional Mismatch Repair Deficiency Syndrome",
        distinction:
          "Childhood cancers with biallelic MMR loss and no classic adenomatous polyposis favor CMMRD.",
      },
      {
        name: "Li-Fraumeni Syndrome",
        distinction:
          "Multiple early-onset core tumors and germline TP53 alteration favor Li-Fraumeni syndrome.",
      },
    ],
    molecular: [
      "Germline APC pathogenic variant with somatic second hit; constitutive WNT/β-catenin signaling. APC genotype can influence phenotype and desmoid risk.",
    ],
  },
  {
    name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
    group: "Hedgehog Pathway Predisposition",
    clue: "Early/multiple basal cell carcinomas, odontogenic keratocysts, falx calcification, and childhood SHH medulloblastoma.",
    summary:
      "Autosomal dominant PTCH1- or SUFU-related tumor predisposition syndrome.",
    clinical: [
      "Childhood through adulthood; both sexes; skin, jaw, falx, and cerebellum. Odontogenic keratocysts often arise in childhood/adolescence; BCCs increase with age and sun exposure.",
    ],
    criteria: [
      "Clinical diagnosis requires accepted combinations of major and minor criteria, including multiple BCCs or early-onset BCC, odontogenic keratocysts, palmar/plantar pits, falx calcification, rib anomalies, and first-degree family history. A constitutional pathogenic PTCH1 or SUFU variant establishes the molecular diagnosis.",
    ],
    histology: [
      "Jaw odontogenic keratocysts resemble sporadic counterparts. Associated medulloblastomas are usually SHH-activated; desmoplastic/nodular morphology is common, particularly in young children.",
    ],
    ihc: [
      "Medulloblastoma may show GAB1/SFRP1 patterns supporting SHH subgroup; β-catenin is generally not nuclear. BCC and odontogenic keratocyst findings are morphologic; PTCH1/SUFU testing is definitive.",
    ],
    differential: [
      {
        name: "ELP1-Associated Medulloblastoma Predisposition",
        distinction:
          "Both may present with childhood SHH medulloblastoma; ELP1 requires germline ELP1 alteration and loss of ELP1 expression, whereas Gorlin syndrome is supported by PTCH1/SUFU variants and characteristic skin/jaw findings.",
      },
      {
        name: "Tuberous Sclerosis Complex",
        distinction:
          "SEGA and cortical tubers with TSC-associated systemic findings favor TSC rather than Gorlin syndrome.",
      },
    ],
    molecular: [
      "Germline PTCH1 or SUFU loss activates Hedgehog signaling. SUFU-associated cases have particularly increased medulloblastoma risk; avoid radiotherapy when feasible because of secondary BCC risk.",
    ],
  },
  {
    name: "Rhabdoid Tumor Predisposition Syndrome",
    group: "SWI/SNF Chromatin Remodeling Predisposition",
    clue: "Atypical teratoid/rhabdoid tumor or malignant rhabdoid tumor in an infant or young child, sometimes with multiple primary tumors.",
    summary:
      "Autosomal dominant predisposition caused by germline SMARCB1 (RTPS1) or SMARCA4 (RTPS2) pathogenic variants.",
    clinical: [
      "Infants and young children; both sexes; CNS, kidney, soft tissue, and other sites. Very early onset and synchronous/metachronous rhabdoid tumors are key clues.",
    ],
    criteria: [
      "Suspect with AT/RT, renal or extrarenal malignant rhabdoid tumor, especially in infancy, multiple tumors, or family history. Tumor loss of INI1 or BRG1 prompts germline evaluation; diagnosis of the syndrome requires constitutional pathogenic variant confirmation.",
    ],
    histology: [
      "AT/RT and malignant rhabdoid tumors show sheets of primitive cells, eccentric nuclei, prominent nucleoli, and variable rhabdoid cytoplasm. Morphology can be heterogeneous and may lack overt rhabdoid cells.",
    ],
    ihc: [
      "Loss of nuclear INI1 (SMARCB1) or BRG1 (SMARCA4) in tumor cells with retained internal controls is a key screening finding. The absent protein identifies the affected pathway but does not itself prove germline status.",
    ],
    differential: [
      {
        name: "Schwannomatosis (SMARCB1- or LZTR1-Related)",
        distinction:
          "SMARCB1-related schwannomatosis shares a gene with RTPS1 but presents with multiple schwannomas rather than infantile rhabdoid tumors; confirm the germline variant and phenotype.",
      },
    ],
    molecular: [
      "Germline SMARCB1 or SMARCA4 pathogenic variant with somatic second hit. AT/RT molecular groups include TYR, SHH, and MYC; subgroup does not by itself define germline predisposition.",
    ],
  },
  {
    name: "Carney Complex",
    group: "PRKAR1A / cAMP-PKA Predisposition",
    clue: "Spotty pigmentation, cardiac myxomas, endocrine overactivity, and melanotic nerve sheath tumors.",
    summary:
      "Autosomal dominant multisystem syndrome, most often due to PRKAR1A inactivation.",
    clinical: [
      "Childhood through adulthood; both sexes; skin/mucosa, heart, endocrine organs, and peripheral nerves. Lentigines often become prominent around puberty; cardiac myxomas may occur in childhood.",
    ],
    criteria: [
      "Clinical diagnosis uses accepted major criteria, including spotty pigmentation, cardiac or cutaneous myxomas, primary pigmented nodular adrenocortical disease, acromegaly from GH-producing pituitary adenoma, large-cell calcifying Sertoli cell tumor, thyroid tumors, and psammomatous melanotic schwannoma. A pathogenic PRKAR1A variant supports/establishes the molecular diagnosis.",
    ],
    histology: [
      "Psammomatous melanotic schwannoma (now often termed malignant melanotic nerve sheath tumor) shows pigmented spindle/epithelioid cells, psammoma bodies, and may show infiltrative growth. Myxomas are hypocellular with abundant myxoid matrix.",
    ],
    ihc: [
      "Melanotic nerve sheath tumors express S100 and SOX10 and melanocytic markers (HMB45/Melan-A); PRKAR1A loss may support Carney complex. Myxomas are typically vimentin-positive and lack a specific diagnostic IHC profile.",
    ],
    differential: [
      {
        name: "BAP1 Tumor Predisposition Syndrome",
        distinction:
          "Both can include melanocytic/nerve sheath tumors; BAP1 loss, uveal melanoma, mesothelioma, and BAP1-inactivated melanocytic tumors favor BAP1 syndrome, whereas lentigines, cardiac myxomas, and endocrine disease favor Carney complex.",
      },
    ],
    molecular: [
      "Germline PRKAR1A loss disrupts PKA regulation and increases cAMP/PKA signaling. A subset of cases lack an identified PRKAR1A variant.",
    ],
  },
  {
    name: "DICER1 Tumor Predisposition Syndrome",
    group: "MicroRNA Processing Predisposition",
    clue: "Pleuropulmonary blastoma, cystic nephroma, ovarian Sertoli-Leydig cell tumor, and multinodular goiter.",
    summary:
      "Autosomal dominant predisposition caused by germline pathogenic DICER1 variants, with characteristic tumors across multiple organs.",
    clinical: [
      "Mostly infants, children, and young adults; both sexes; lung, kidney, thyroid, ovary, CNS, and eye. Pleuropulmonary blastoma is a sentinel manifestation.",
    ],
    criteria: [
      "A heterozygous germline pathogenic DICER1 variant establishes the diagnosis. Offer testing for pleuropulmonary blastoma or other characteristic manifestations, including cystic nephroma, ovarian Sertoli-Leydig cell tumor, thyroid nodular disease, and selected CNS embryonal tumors.",
    ],
    histology: [
      "CNS tumors include DICER1-associated intracranial sarcoma and other rare embryonal/neuroepithelial tumors. Histology varies by tumor type; correlate with the characteristic extracranial spectrum rather than expecting a single morphology.",
    ],
    ihc: [
      "No single IHC marker is diagnostic. DICER1-deficient tumors may show loss of DICER1 protein in some settings, but germline sequencing and tumor second-hit analysis are required.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "Gorlin syndrome: SHH medulloblastoma with PTCH1/SUFU alterations. Rhabdoid tumor predisposition: INI1/BRG1 loss and rhabdoid morphology. Sporadic pediatric sarcoma: age/site overlap; DICER1 testing and associated tumor history distinguish.",
      },
    ],
    molecular: [
      "Germline loss-of-function DICER1 variant plus a somatic RNase IIIb hotspot mutation is a common two-hit pattern. Tumor sequencing may identify the second hit.",
    ],
  },
  {
    name: "Familial Paraganglioma-Pheochromocytoma Syndromes",
    group: "Mitochondrial / Pseudohypoxia Predisposition",
    clue: "Multifocal or early-onset paragangliomas, especially head-and-neck tumors, with possible pheochromocytoma and other SDH-associated tumors.",
    summary:
      "Inherited predisposition involving SDHx genes and other susceptibility genes; includes SDHA, SDHB, SDHC, SDHD, and SDHAF2-related disease.",
    clinical: [
      "Adolescents and adults; both sexes; head and neck, thorax, abdomen, pelvis, adrenal medulla, and occasionally CNS/cauda equina. Symptoms include catecholamine excess, mass effect, or incidental detection.",
    ],
    criteria: [
      "Suspect with paraganglioma/pheochromocytoma at young age, multifocality, bilateral disease, family history, or associated GIST/renal cancer. Germline testing identifies the syndrome and gene; SDHD often shows parent-of-origin effects.",
    ],
    histology: [
      "Paragangliomas show nested Zellballen architecture with chief cells and sustentacular cells. SDH-related head-and-neck tumors may have clear/vacuolated chief cells and prominent nests; VHL-related tumors may also show clear cytoplasm.",
    ],
    ihc: [
      "Chief cells express synaptophysin, chromogranin, and INSM1; sustentacular cells highlight with S100/SOX10. Loss of SDHB is a screening marker for SDH deficiency; loss of SDHA suggests SDHA alteration. GATA3 and tyrosine hydroxylase may be positive. Cytokeratins are usually negative.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "Sporadic paraganglioma: morphology overlaps; germline testing and SDHB/SDHA IHC identify hereditary SDH deficiency. Metastatic neuroendocrine tumor: often keratin-positive and lacks the classic sustentacular pattern. VHL: clear-cell paraganglioma may overlap; assess VHL-associated lesions and molecular findings.",
      },
    ],
    molecular: [
      "Germline SDHx variants cause succinate accumulation, inhibition of α-ketoglutarate-dependent enzymes, and pseudohypoxia. SDHB loss is a useful surrogate but does not identify the specific germline gene.",
    ],
  },
  {
    name: "Melanoma-Astrocytoma Syndrome",
    group: "CDKN2A Cell-Cycle Predisposition",
    clue: "Multiple dysplastic nevi or melanoma together with astrocytoma or nerve sheath tumors.",
    summary:
      "Rare inherited cancer predisposition associated with germline CDKN2A pathogenic variants, often affecting p16INK4A and/or p14ARF.",
    clinical: [
      "Adolescents and adults; both sexes; skin, brain, peripheral nerves, and pancreas. Multiple atypical nevi/melanoma may precede CNS tumors.",
    ],
    criteria: [
      "Diagnosis requires identification of a pathogenic germline CDKN2A variant in constitutional DNA. Consider testing with familial melanoma plus astrocytoma, multiple melanomas, or a compatible family history of pancreatic cancer and CNS tumors.",
    ],
    histology: [
      "Associated astrocytomas include pleomorphic xanthoastrocytoma and diffuse astrocytic gliomas from low to high grade. Nerve sheath tumors may resemble schwannoma or neurofibroma; morphology may not distinguish syndromic from sporadic lesions.",
    ],
    ihc: [
      "Astrocytomas show lineage-dependent markers (GFAP/OLIG2); p16 loss may be present. Melanocytic lesions express SOX10, S100, and melanocytic markers. IHC does not replace germline testing.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "BAP1 tumor predisposition: BAP1-inactivated melanocytic tumors, mesothelioma, uveal melanoma, and meningioma; BAP1 IHC distinguishes deficient tumors. NF1: neurofibromas and pigmentary signs, with different clinical criteria. Sporadic PXA: BRAF V600E/CDKN2A alterations can occur without germline syndrome.",
      },
    ],
    molecular: [
      "Germline CDKN2A pathogenic variant; tumors commonly inactivate the remaining allele. Somatic BRAF V600E may occur in PXA but is not specific for the syndrome.",
    ],
  },
  {
    name: "Familial Retinoblastoma (RB1-Related Predisposition)",
    group: "Cell-Cycle Predisposition",
    clue: "Bilateral or multifocal retinoblastoma, early onset, and risk of pineoblastoma (trilateral retinoblastoma).",
    summary:
      "Autosomal dominant cancer predisposition caused by a germline RB1 pathogenic variant; tumors develop after loss of the remaining functional allele.",
    clinical: [
      "Infants and young children; both sexes; retina, pineal region, and other tissues at risk for secondary malignancies. Leukocoria and strabismus are typical presenting signs.",
    ],
    criteria: [
      "A germline pathogenic RB1 variant establishes hereditary retinoblastoma predisposition. Bilateral, multifocal, or very early-onset retinoblastoma strongly suggests germline disease. Trilateral retinoblastoma denotes bilateral ocular retinoblastoma with an intracranial midline neuroblastic tumor, usually pineoblastoma.",
    ],
    histology: [
      "Retinoblastoma is a small round blue cell tumor with brisk mitoses, necrosis, calcification, and Flexner-Wintersteiner rosettes. Pineoblastoma in trilateral disease resembles retinoblastoma histologically.",
    ],
    ihc: [
      "Tumor cells show loss of RB protein; synaptophysin and other neuronal markers may be positive. RB IHC is a screening aid; germline testing confirms hereditary predisposition.",
    ],
    differential: [
      {
        name: "Key syndromic differential",
        distinction:
          "Pineoblastoma without retinoblastoma: may be sporadic or associated with other predisposition syndromes. Medulloblastoma: cerebellar origin and distinct molecular groups. Other small round blue cell tumors: use site, morphology, and lineage markers.",
      },
    ],
    molecular: [
      "Germline RB1 pathogenic variant plus somatic second hit; loss of RB1 function dysregulates G1/S cell-cycle control. Genetic counseling and testing of relatives are important.",
    ],
  },
  {
    name: "BAP1 Tumor Predisposition Syndrome",
    group: "Chromatin / DNA Repair-Related Predisposition",
    clue: "Uveal melanoma, mesothelioma, cutaneous melanoma, BAP1-inactivated melanocytic tumors, and rhabdoid/papillary meningioma.",
    summary:
      "Autosomal dominant cancer predisposition caused by germline BAP1 pathogenic variants.",
    clinical: [
      "Adolescents through adults; both sexes; eye, skin, pleura/peritoneum, kidney, and meninges. Multiple early-onset primary tumors and characteristic melanocytic lesions are clues.",
    ],
    criteria: [
      "Consider germline testing with ≥2 BAP1-associated tumors, one such tumor plus an affected close relative, or unusually young onset. Loss of BAP1 in a relevant tumor supports testing but is not proof of germline disease. A constitutional pathogenic BAP1 variant establishes the syndrome.",
    ],
    histology: [
      "BAP1-associated meningiomas may show rhabdoid, epithelioid, or papillary morphology and can behave aggressively. BAP1-inactivated melanocytic tumors show epithelioid melanocytes and may be multiple.",
    ],
    ihc: [
      "Complete loss of nuclear BAP1 in tumor cells with retained internal controls supports BAP1 deficiency. Melanocytic lesions express SOX10/S100 and melanocytic markers; BAP1 loss is the key surrogate stain.",
    ],
    differential: [
      {
        name: "Carney Complex",
        distinction:
          "Psammomatous melanotic nerve sheath tumor with lentigines, cardiac myxoma, and endocrine overactivity favors Carney complex; nuclear BAP1 loss and BAP1-associated tumor spectrum favor BAP1 syndrome.",
      },
    ],
    molecular: [
      "Germline BAP1 loss with somatic second hit. IHC and sequencing are highly concordant but not completely; interpret missense variants carefully.",
    ],
  },
  {
    name: "Fanconi Anemia",
    group: "DNA Interstrand Crosslink Repair Predisposition",
    clue: "Congenital anomalies, progressive bone marrow failure, and early cancers including medulloblastoma.",
    summary:
      "Genetically heterogeneous inherited DNA repair disorder, usually autosomal recessive; biallelic BRCA2 or PALB2 variants are particularly associated with CNS tumor predisposition.",
    clinical: [
      "Infancy through adulthood; both sexes; bone marrow, head and neck, kidney, and CNS. Short stature, thumb/radial anomalies, skin pigmentation, and marrow failure may be present but can be absent.",
    ],
    criteria: [
      "Diagnosis is established by increased chromosome breakage in patient cells after diepoxybutane or mitomycin C exposure and/or biallelic pathogenic variants in an FA pathway gene. Germline BRCA2/PALB2 testing is important in children with medulloblastoma and compatible features.",
    ],
    histology: [
      "Associated medulloblastomas are often large-cell/anaplastic or desmoplastic/nodular with superimposed anaplasia. Other malignancies include MDS/AML and squamous cell carcinoma of the head and neck.",
    ],
    ihc: [
      "No defining tumor IHC profile. Assess tumor morphology and molecular subtype; constitutional chromosome-breakage testing and germline sequencing establish the predisposition.",
    ],
    differential: [
      {
        name: "ELP1-Associated Medulloblastoma Predisposition",
        distinction:
          "ELP1 syndrome is characterized by SHH-activated, TP53-wildtype medulloblastoma without the Fanconi chromosome-breakage phenotype.",
      },
      {
        name: "Li-Fraumeni Syndrome",
        distinction:
          "Germline TP53 alteration and the broader Li-Fraumeni tumor spectrum favor Li-Fraumeni syndrome.",
      },
    ],
    molecular: [
      "Defective DNA interstrand crosslink repair; biallelic FANC gene variants. Medulloblastomas may show complex chromosomal rearrangements, SHH activation, and TP53 alterations. Heterozygous BRCA2/PALB2 carriers can also develop medulloblastoma after tumor-specific second hit.",
    ],
  },
  {
    name: "ELP1-Associated Medulloblastoma Predisposition",
    group: "RNA Processing / SHH Pathway Predisposition",
    clue: "Childhood SHH-activated, TP53-wildtype medulloblastoma, often desmoplastic/nodular.",
    summary:
      "Rare inherited predisposition associated with biallelic or specific pathogenic germline ELP1 variants and a characteristic medulloblastoma phenotype.",
    clinical: [
      "Children; median diagnosis around 6 years; both sexes; cerebellum. Family history of medulloblastoma may be present.",
    ],
    criteria: [
      "Suspect in childhood SHH-activated, TP53-wildtype medulloblastoma, particularly desmoplastic/nodular morphology or family history. Confirm with germline ELP1 testing and correlate with tumor ELP1 expression.",
    ],
    histology: [
      "Most tumors are desmoplastic/nodular; a minority are classic or large-cell/anaplastic. Histology overlaps with other SHH-activated medulloblastomas.",
    ],
    ihc: [
      "Loss of ELP1 expression in tumor tissue supports the diagnosis but should be followed by germline testing. SHH pathway markers help establish molecular subgroup; TP53 is typically wild-type.",
    ],
    differential: [
      {
        name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
        distinction:
          "SHH medulloblastoma overlaps; germline PTCH1/SUFU variants and jaw cysts/BCCs favor Gorlin syndrome.",
      },
      {
        name: "Fanconi Anemia",
        distinction:
          "Chromosome-breakage phenotype and biallelic FANC variants favor Fanconi anemia; ELP1-associated tumors are typically SHH-activated and TP53-wildtype.",
      },
    ],
    molecular: [
      "Rare germline ELP1 pathogenic variants, usually truncating or canonical splice variants. Tumors commonly show 9q loss and somatic PTCH1 mutation without germline PTCH1 alteration.",
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
    <section className="mb-5">
      <h3 className="mb-2 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function CNSGeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All categories");
  const [open, setOpen] = useState<string[]>([]);
  const groups = useMemo(
    () => [
      "All categories",
      ...Array.from(new Set(entities.map((e) => e.group))),
    ],
    [],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const matchesGroup = group === "All categories" || e.group === group;
      const text = [
        e.name,
        e.group,
        e.clue,
        e.summary,
        ...e.clinical,
        ...e.criteria,
        ...e.histology,
        ...e.ihc,
        ...e.molecular,
        ...e.differential.flatMap((d) => [d.name, d.distinction]),
      ]
        .join(" ")
        .toLowerCase();
      return matchesGroup && (!q || text.includes(q));
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
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          Central and Peripheral Nervous System
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          CNS Genetic Tumor Syndromes
        </h1>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
          Diagnostic reference to inherited tumor-predisposition syndromes with
          central or peripheral nervous system manifestations. Recognition of a
          syndromic pattern should prompt appropriate clinical evaluation and
          germline testing; tumor findings alone do not establish hereditary
          status.
        </p>
      </header>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Practical Diagnostic Approach
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Recognize tumor multiplicity, unusually young age, characteristic
              combinations of lesions, and relevant family history.
            </li>
            <li>
              Use morphology and targeted immunohistochemistry to identify
              pathway-deficient tumors, including loss of INI1, BRG1, BAP1,
              SDHB, or SDHA when appropriate.
            </li>
            <li>
              Distinguish tumor-level alterations from constitutional variants.
              A tumor-only pathogenic variant or loss of protein expression does
              not independently prove a germline syndrome.
            </li>
            <li>
              Recommend genetic counseling and constitutional testing when the
              clinical or pathologic pattern warrants it; consider mosaicism and
              nonhematopoietic testing when indicated.
            </li>
            <li>
              Do not use the historical term “Turcot syndrome” as a molecular
              diagnosis. Evaluate APC-associated FAP and constitutional mismatch
              repair deficiency as distinct conditions.
            </li>
          </ol>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield Tumor / Syndrome Associations
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              ["Plexiform neurofibroma / ANNUBP / MPNST", "NF1"],
              [
                "Bilateral vestibular schwannomas, meningiomas, spinal ependymomas",
                "NF2-related schwannomatosis",
              ],
              [
                "Multiple painful schwannomas",
                "SMARCB1- or LZTR1-related schwannomatosis",
              ],
              ["CNS or retinal hemangioblastoma", "VHL"],
              ["Cortical tubers / SEGA", "Tuberous sclerosis complex"],
              [
                "SHH medulloblastoma",
                "Gorlin, ELP1, and selected Fanconi anemia cases",
              ],
              [
                "AT/RT or malignant rhabdoid tumor",
                "SMARCB1 / SMARCA4-related RTPS",
              ],
              ["Paraganglioma with SDHB loss", "SDHx-related predisposition"],
              [
                "Rhabdoid/papillary meningioma with BAP1 loss",
                "BAP1 tumor predisposition",
              ],
            ].map(([tumor, syndrome]) => (
              <div
                key={tumor}
                className="grid gap-1 border-b border-slate-100 pb-2 sm:grid-cols-[1.2fr_1fr]"
              >
                <strong className="text-slate-800">{tumor}</strong>
                <span className="text-slate-600">{syndrome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="cns-syndrome-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search syndromes, genes, tumors, criteria, or markers
          </label>
          <input
            id="cns-syndrome-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: NF1, INI1, hemangioblastoma, medulloblastoma, SDHB..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="cns-syndrome-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="cns-syndrome-group"
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
        <span>{filtered.length} syndromes</span>
        <span>Expand a syndrome for clinical and diagnostic details.</span>
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
                          {e.clinical.map((x, j) => (
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
                      <Section title="Molecular Pathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.molecular.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    </div>
                    <div>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Immunophenotype">
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
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching syndromes. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for anatomic pathology. Interpret
        tumor morphology, immunophenotype, and molecular findings in conjunction
        with clinical history, family history, and germline evaluation.
      </footer>
    </main>
  );
}
