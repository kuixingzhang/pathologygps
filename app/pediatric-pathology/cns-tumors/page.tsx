"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  profile: string[];
  clue: string;
  summary: string;
  essential: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
};

const entities: Entity[] = [
  {
    name: "Diffuse astrocytoma, MYB- or MYBL1-altered",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    profile: [
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is a rare tumor.",
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is most commonly a cerebral tumor with cortical and subcortical components.",
      "Patients typically present with drug-resistant epileptic seizures, which often have been present since childhood .",
    ],
    clue: "Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
    summary:
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1). ICD-O coding 9421/1 Diffuse astrocytoma, MYB- or MYBL1-altered 9421/1 Diffuse astrocytoma, MYB-altered 9421/1 Diffuse astrocytoma, MYBL1-altered…",
    essential: [
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic .",
      "Sequencing demonstrates a structural variation that results in a fusion between MYB or MYBL1 and a partner gene .",
    ],
    histology: [
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic .",
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic . Frequently, tumor cells barely raise the normal cell density of infiltrated parenchyma and may therefore be difficult to recognize as neoplastic .",
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic . Frequently, tumor cells barely raise the normal cell density of infiltrated parenchyma and may therefore be difficult to recognize as neoplastic . A vague angiocentric polarity may be regionally evident, particularly in the…",
    ],
    ihc: [
      "Immunoreactivity for GFAP and low Ki-67 labeling index values are typical.",
      "Immunoreactivity for GFAP and low Ki-67 labeling index values are typical. One study reported that expression of MAP2 is limited to residual neurons and neuronal processes and that tumor cells are negative for OLIG2 and CD34 .",
      "Immunoreactivity for GFAP and low Ki-67 labeling index values are typical. One study reported that expression of MAP2 is limited to residual neurons and neuronal processes and that tumor cells are negative for OLIG2 and CD34 . IDH1 p.R132H is negative, and nuclear ATRX expression is retained .",
    ],
    molecular: [
      "Sequencing demonstrates a structural variation that results in a fusion between MYB or MYBL1 and a partner gene . The most frequently reported partner genes are PCDHGA1, MMP16, and MAML2 .",
    ],
    differential: [
      "Some areas in angiocentric gliomas have the same architectural and cytological features that characterize MYB- or MYBL1-altered diffuse astrocytoma, and these two tumor types are considered to have overlapping morphology. A histogenetic relationship between these tumor types is reinforced at the genetic level; practically all angiocentric gliomas have a rearrangement of MYB, most commonly associated with a MYB::QKI fusion.",
      "Angiocentric glioma: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
      "Polymorphous low-grade neuroepithelial tumor of the young: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth…",
      "Diffuse low-grade glioma, MAPK pathway-altered: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a…",
    ],
  },
  {
    name: "Angiocentric glioma",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    profile: [
      "Population-based epidemiological data are not yet available for this uncommon tumor.",
      "Angiocentric gliomas are typically located in the cerebral cortex, but the brainstem is an increasingly recognized site for this tumor .",
      "Patients with angiocentric gliomas typically present with chronic and intractable partial epilepsy.",
    ],
    clue: "Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
    summary:
      "Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces. Almost all angiocentric gliomas have a MYB::QKI gene fusion, and the remainder generally have another MYB alteration (CNS WHO grade 1).",
    essential: [
      "Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every caliber; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes.",
      "Practically all angiocentric gliomas show rearrangements and/or copy-number alterations, including deletion or amplification , at the MYB locus on 6q23.3 .",
    ],
    histology: [
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every caliber; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes.",
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every caliber; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes. Spindle cell elements can permeate the parenchyma extensively and at variable density, fashion compact nodules…",
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every caliber; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes. Spindle cell elements can permeate the parenchyma extensively and at variable density, fashion compact nodules…",
    ],
    ihc: [
      "On immunohistochemical study, GFAP expression is the rule, and a near-constant finding is at least regional EMA immunolabeling of the cytoplasm in a dot-like or ring-like (microlumen) pattern .",
      "On immunohistochemical study, GFAP expression is the rule, and a near-constant finding is at least regional EMA immunolabeling of the cytoplasm in a dot-like or ring-like (microlumen) pattern . Membranous EMA expression characterizes some epithelioid cells in perivascular and subpial locations.",
      "On immunohistochemical study, GFAP expression is the rule, and a near-constant finding is at least regional EMA immunolabeling of the cytoplasm in a dot-like or ring-like (microlumen) pattern . Membranous EMA expression characterizes some epithelioid cells in perivascular and subpial locations. Tumor cells do not label for…",
    ],
    molecular: [
      "Practically all angiocentric gliomas show rearrangements and/or copy-number alterations, including deletion or amplification , at the MYB locus on 6q23.3 . Most rearrangements involve fusions between the MYB and QKI genes .",
    ],
    differential: [
      "Compare with Diffuse astrocytoma, MYB- or MYBL1-altered; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Diffuse astrocytoma, MYB- or MYBL1-altered: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
      "Polymorphous low-grade neuroepithelial tumor of the young: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth…",
      "Diffuse low-grade glioma, MAPK pathway-altered: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a…",
    ],
  },
  {
    name: "Polymorphous low-grade neuroepithelial tumor of the young",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    profile: [
      "Population-based incidence data are unavailable.",
      "PLNTYs are cerebral tumors that usually have cortical and subcortical components.",
      "PLNTYs typically cause seizures and are associated in many cases with refractory epilepsy (particularly partial complex epilepsy), but they can also cause headache or dizziness .",
    ],
    clue: "Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth…",
    summary:
      "Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent presence of oligodendroglioma-like components, calcification, CD34 immunoreactivity, and MAPK pathway–activating genetic…",
    essential: [
      "Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent presence of oligodendroglioma-like components, calcification, CD34 immunoreactivity, and…",
      "PLNTYs exhibit both infiltrative and compact growth patterns.",
      "PLNTYs are consistently associated with MAPK pathway–activating abnormalities, which must be demonstrated for confident diagnosis.",
    ],
    histology: [
      "PLNTYs exhibit both infiltrative and compact growth patterns.",
      "PLNTYs exhibit both infiltrative and compact growth patterns. Usually present and often dominant are oligodendroglioma-like components, which range from elements having uniformly small and round nuclei with perinuclear haloes to populations exhibiting obvious variation in nuclear size and shape with wrinkled or grooved nuclear membranes and intranuclear pseudoinclusions .",
      "PLNTYs exhibit both infiltrative and compact growth patterns. Usually present and often dominant are oligodendroglioma-like components, which range from elements having uniformly small and round nuclei with perinuclear haloes to populations exhibiting obvious variation in nuclear size and shape with wrinkled or grooved nuclear membranes and intranuclear pseudoinclusions . PLNTYs may also contain elements of…",
    ],
    ihc: [
      "On immunohistochemical assessment, PLNTYs exhibit expression of GFAP (this may be regional or generalized), OLIG2, and CD34 ; the last may be patchy, or diffuse and intense.",
      "On immunohistochemical assessment, PLNTYs exhibit expression of GFAP (this may be regional or generalized), OLIG2, and CD34 ; the last may be patchy, or diffuse and intense. CD34 labeling is displayed both by tumor cells and by ramified neural elements in the associated cerebral cortex.",
      "On immunohistochemical assessment, PLNTYs exhibit expression of GFAP (this may be regional or generalized), OLIG2, and CD34 ; the last may be patchy, or diffuse and intense. CD34 labeling is displayed both by tumor cells and by ramified neural elements in the associated cerebral cortex. There is retained tumor cell expression…",
    ],
    molecular: [
      "PLNTYs are consistently associated with MAPK pathway–activating abnormalities, which must be demonstrated for confident diagnosis. These specifically include BRAF p.V600E mutations , as well as fusions involving FGFR2 or FGFR3 .",
    ],
    differential: [
      "PLNTYs may be histologically indistinguishable from oligodendrogliomas or diffuse astrocytomas, but the latter are generally CD34-negative (whereas PLNTYs are CD34-positive) and PLNTYs do not manifest IDH mutations or 1p/19q codeletion like the other tumor types, and they display MAPK pathway–activating genetic abnormalities typically foreign to the adult-type infiltrating gliomas (see Diagnostic molecular pathology). An oligodendroglioma-like entity…",
      "Diffuse astrocytoma, MYB- or MYBL1-altered: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
      "Angiocentric glioma: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
      "Diffuse low-grade glioma, MAPK pathway-altered: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a…",
    ],
  },
  {
    name: "Diffuse low-grade glioma, MAPK pathway-altered",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    profile: [
      "There are no epidemiological studies of this specific tumor type.",
      "MAPK pathway–altered diffuse low-grade gliomas are described throughout the craniospinal axis, particularly the cerebral hemispheres.",
      "Symptoms and signs depend on location.",
    ],
    clue: "Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a…",
    summary:
      "Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in a gene that codes for a MAPK pathway protein. Typically, these tumors have an internal tandem duplication (ITD) or…",
    essential: [
      "Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in a gene that codes for a MAPK pathway protein.",
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma.",
      "The diagnosis requires evidence of a MAPK pathway alteration in the absence of an IDH or H3 p.K28M (K27M) mutation and without homozygous deletion of CDKN2A.",
    ],
    histology: [
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma.",
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma. The pattern of infiltration is not as extensive as seen in some IDH-mutant low-grade gliomas; it is more in line with the degree of infiltration found in angiocentric gliomas and polymorphous low-grade neuroepithelial tumor of the…",
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma. The pattern of infiltration is not as extensive as seen in some IDH-mutant low-grade gliomas; it is more in line with the degree of infiltration found in angiocentric gliomas and polymorphous low-grade neuroepithelial tumor of the…",
    ],
    ihc: [],
    molecular: [
      "The diagnosis requires evidence of a MAPK pathway alteration in the absence of an IDH or H3 p.K28M (K27M) mutation and without homozygous deletion of CDKN2A. The most commonly observed genetic alterations in these tumors occur in BRAF (generally a p.V600E mutation) and in FGFR1 (TKD duplication, one or sometimes two single-nucleotide variants, or a fusion gene) .",
    ],
    differential: [
      "Compare with Diffuse astrocytoma, MYB- or MYBL1-altered; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Diffuse astrocytoma, MYB- or MYBL1-altered: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
      "Angiocentric glioma: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
      "Polymorphous low-grade neuroepithelial tumor of the young: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth…",
    ],
  },
  {
    name: "Diffuse midline glioma, H3 K27-altered",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    profile: [
      "Epidemiological data remain scarce for this recently described entity.",
      "Pediatric diffuse midline gliomas (DMGs) are preferentially located in the brainstem or pons (the latter making it a diffuse intrinsic pontine glioma [DIPG]), or they are bithalamic, whereas DMGs in adolescents and…",
      "Most patients with DIPG present with a short medical history (< 2 months), with the classic triad: cranial nerve palsy (82%), long tract signs such as pyramidal tract impairment (51%), and ataxia (62%) .",
    ],
    clue: "Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone…",
    summary:
      "Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberrant overexpression of EZHIP, or an EGFR mutation (CNS WHO grade 4). ICD-O coding 9385/3 Diffuse midline glioma, H3…",
    essential: [
      "Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberrant overexpression of EZHIP, or an EGFR mutation (CNS WHO grade 4).",
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism.",
      "Distinct patterns of biological features (methylation profiling, gene expression, co-segregating mutations) and clinical correlations (age, location, outcome) suggest the presence of four subtypes of DMGs that are defined by the driving oncohistone alteration : (1) H3.3 p.K28M (K27M)-mutant, (2)…",
    ],
    histology: [
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism.",
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism. Most cells are small and monomorphic, but they can be polymorphous, showing astrocytic, piloid, oligodendroglial, giant cell, undifferentiated, or epithelioid cytology .",
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism. Most cells are small and monomorphic, but they can be polymorphous, showing astrocytic, piloid, oligodendroglial, giant cell, undifferentiated, or epithelioid cytology . Even though mitotic figures are frequent and microvascular proliferation and/or necrosis may be observed, these features are not required…",
    ],
    ihc: [
      "DMGs typically express OLIG2, MAP2, and S100, whereas immunoreactivity for GFAP is variable apart from in the EGFR-mutant subtype, which is typically GFAP-positive but may lack OLIG2 and SOX10.",
      "DMGs typically express OLIG2, MAP2, and S100, whereas immunoreactivity for GFAP is variable apart from in the EGFR-mutant subtype, which is typically GFAP-positive but may lack OLIG2 and SOX10. Neurofilament and synaptophysin stains highlight the infiltrated neuropil in the background, but they are negative in the tumor cells.",
      "DMGs typically express OLIG2, MAP2, and S100, whereas immunoreactivity for GFAP is variable apart from in the EGFR-mutant subtype, which is typically GFAP-positive but may lack OLIG2 and SOX10. Neurofilament and synaptophysin stains highlight the infiltrated neuropil in the background, but they are negative in the tumor cells.…",
    ],
    molecular: [
      "Distinct patterns of biological features (methylation profiling, gene expression, co-segregating mutations) and clinical correlations (age, location, outcome) suggest the presence of four subtypes of DMGs that are defined by the driving oncohistone alteration : (1) H3.3 p.K28M (K27M)-mutant, (2) H3.1 or 3.2 p.K28M (K27M)-mutant, (3) H3-wildtype with EZHIP overexpression, and (4) EGFR-mutant (see Pathogenesis). No significant…",
    ],
    differential: [
      "Brainstem tumors constitute a heterogeneous group ranging from low-grade primary CNS tumors (e.g. pilocytic astrocytoma, ganglioglioma, and MYB- or MYBL1-altered diffuse astrocytoma) to high-grade tumors comprising H3 K27–altered DMG as well as H3-wildtype tumors (e.g. the diffuse pediatric-type high-grade glioma MYCN subtype, atypical teratoid/rhabdoid tumor, and embryonal tumor with multilayered rosettes) . This reinforces the role of biopsy in the…",
      "Diffuse hemispheric glioma, H3 G34-mutant: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following…",
      "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or…",
      "Infant-type hemispheric glioma: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including…",
    ],
  },
  {
    name: "Diffuse hemispheric glioma, H3 G34-mutant",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    profile: [
      "H3 G34–mutant diffuse hemispheric gliomas typically affect adolescents and young adults (median age:15–19 years).",
      "Diffuse hemispheric glioma, H3 G34–mutant, arises in the cerebral hemispheres.",
      "Patients develop clinical symptoms according to the anatomical structures involved, including seizures and motor or sensory deficits.",
    ],
    clue: "Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following…",
    summary:
      "Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histone H3 protein: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V) (CNS WHO grade 4). ICD-O coding…",
    essential: [
      "Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histone H3 protein: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V)…",
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity.",
      "The molecularly defining diagnostic criterion is a missense mutation replacing glycine (G) with arginine (R) (in > 94% of cases) or valine (V) (< 6%) at p.G35 (G34) of the histone variant H3.3, encoded by the H3-3A (H3F3A) gene: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V…",
    ],
    histology: [
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity.",
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity. Additionally, microvascular proliferation and/or necrosis are usually seen, although the presence of these features is not required for the diagnosis.",
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity. Additionally, microvascular proliferation and/or necrosis are usually seen, although the presence of these features is not required for the diagnosis. In some cases, multinucleated and pleomorphic cells can be observed.",
    ],
    ihc: [
      "The typical immunohistochemical pattern of H3 G34–mutant diffuse hemispheric glioma comprises MAP2 positivity, FOXG1 positivity, loss of ATRX expression, and nuclear accumulation of p53 in the majority of tumor cells.",
      "The typical immunohistochemical pattern of H3 G34–mutant diffuse hemispheric glioma comprises MAP2 positivity, FOXG1 positivity, loss of ATRX expression, and nuclear accumulation of p53 in the majority of tumor cells. A further notable feature is OLIG2 negativity.",
      "The typical immunohistochemical pattern of H3 G34–mutant diffuse hemispheric glioma comprises MAP2 positivity, FOXG1 positivity, loss of ATRX expression, and nuclear accumulation of p53 in the majority of tumor cells. A further notable feature is OLIG2 negativity. GFAP expression is variable and can be negative, especially in…",
    ],
    molecular: [
      "The molecularly defining diagnostic criterion is a missense mutation replacing glycine (G) with arginine (R) (in > 94% of cases) or valine (V) (< 6%) at p.G35 (G34) of the histone variant H3.3, encoded by the H3-3A (H3F3A) gene: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V) . So far, the p.G35R (G34R) or p.G35V (G34V) substitution in diffuse hemispheric gliomas has been exclusively identified in…",
    ],
    differential: [
      "Compare with Diffuse midline glioma, H3 K27-altered; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Diffuse midline glioma, H3 K27-altered: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone…",
      "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or…",
      "Infant-type hemispheric glioma: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including…",
    ],
  },
  {
    name: "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    profile: [
      "Epidemiological data for pHGG, H3-wildtype and IDH-wildtype, do not yet exist.",
      "pHGGs, H3-wildtype and IDH-wildtype, have been reported to arise throughout the supratentorial brain, brainstem, and cerebellum .",
      "Like with other high-grade gliomas, patients develop clinical symptoms according to the anatomical structures involved.",
    ],
    clue: "Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or…",
    summary:
      "Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which is wildtype for histone H3, IDH1, and IDH2 (CNS WHO grade 4). ICD-O coding 9385/3 Diffuse pediatric-type high-grade…",
    essential: [
      "Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which is wildtype for histone H3, IDH1, and IDH2 (CNS WHO grade 4).",
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology.",
      "Initial testing should exclude alterations in histone H3 and in IDH1 or IDH2.",
    ],
    histology: [
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology.",
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology. Areas of glial differentiation and primitive differentiation can often be found in the same specimen.",
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology. Areas of glial differentiation and primitive differentiation can often be found in the same specimen. In some cases, vascular proliferation and necrosis may be absent.",
    ],
    ihc: [
      "Data on the immunophenotype of pHGG, H3-wildtype and IDH-wildtype, have not been specifically reported.",
      "Data on the immunophenotype of pHGG, H3-wildtype and IDH-wildtype, have not been specifically reported. Most reported cases were identified molecularly among series of pediatric glioblastomas or high-grade gliomas, and an immunophenotype compatible with such a diagnosis can therefore be expected, including at least focal…",
      "Data on the immunophenotype of pHGG, H3-wildtype and IDH-wildtype, have not been specifically reported. Most reported cases were identified molecularly among series of pediatric glioblastomas or high-grade gliomas, and an immunophenotype compatible with such a diagnosis can therefore be expected, including at least focal…",
    ],
    molecular: [
      "Initial testing should exclude alterations in histone H3 and in IDH1 or IDH2. Alterations frequently encountered in these tumors include PDGFRA amplification or mutation, TP53 mutation, NF1 alterations, EGFR amplification or mutation, or MYCN amplification.",
    ],
    differential: [
      "Depending on the age of the patient and the location of the tumor, a large number of differential diagnoses should be considered. In particular, for infants, infant-type hemispheric glioma and desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma should be excluded; these typically harbour alterations of BRAF or fusions involving NTRK genes, ROS1, ALK, or MET.",
      "Diffuse midline glioma, H3 K27-altered: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone…",
      "Diffuse hemispheric glioma, H3 G34-mutant: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following…",
      "Infant-type hemispheric glioma: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including…",
    ],
  },
  {
    name: "Infant-type hemispheric glioma",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    profile: [
      "All reported cases have occurred early in childhood, mostly in the first year of life.",
      "These gliomas appear in the supratentorial compartment, usually as large masses .",
      "The presentation is usually acute.",
    ],
    clue: "Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including…",
    summary:
      "Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family or in ROS1, ALK, or MET. ICD-O coding 9385/3 Infant-type hemispheric glioma 9385/3 Infant-type hemispheric glioma,…",
    essential: [
      "Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family or in ROS1, ALK, or MET.",
      "The histological descriptions derive from two large studies and a few case reports .",
      "RTK fusions can be therapeutically targeted and are present in 60–80% of cases.",
    ],
    histology: [
      "The histological descriptions derive from two large studies and a few case reports .",
      "The histological descriptions derive from two large studies and a few case reports . The original diagnoses were often glioblastomas or other high-grade gliomas (84%) but also included anaplastic gangliogliomas, desmoplastic infantile ganglioglioma/astrocytoma, ependymomas, and CNS primitive neuroectodermal tumors .",
      "The histological descriptions derive from two large studies and a few case reports . The original diagnoses were often glioblastomas or other high-grade gliomas (84%) but also included anaplastic gangliogliomas, desmoplastic infantile ganglioglioma/astrocytoma, ependymomas, and CNS primitive neuroectodermal tumors . The tumors are frequently cellular, are well demarcated from the adjacent brain parenchyma, and…",
    ],
    ihc: [
      "The glial component shows immunoreactivity for GFAP but does not usually express neuronal markers .",
      "The glial component shows immunoreactivity for GFAP but does not usually express neuronal markers . ALK immunostaining can be found in at least some tumors with ALK fusions .",
      "The glial component shows immunoreactivity for GFAP but does not usually express neuronal markers . ALK immunostaining can be found in at least some tumors with ALK fusions . NTRK immunostaining is not helpful because of the high level of NTRK expression in normal brain.",
    ],
    molecular: [
      "RTK fusions can be therapeutically targeted and are present in 60–80% of cases. Therefore, where possible, in infants, routine testing for such fusions should be considered , both to establish the diagnosis and to provide options for therapy.",
    ],
    differential: [
      "The differential diagnosis includes other high-grade gliomas, desmoplastic infantile ganglioglioma/astrocytoma, ganglioglioma, and ependymomas in infants.",
      "Diffuse midline glioma, H3 K27-altered: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone…",
      "Diffuse hemispheric glioma, H3 G34-mutant: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following…",
      "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or…",
    ],
  },
  {
    name: "Pilocytic astrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    profile: [
      "Pilocytic astrocytoma accounts for 5% of all primary brain tumors .",
      "Pilocytic astrocytomas can arise throughout the neuraxis, but they are most common in the cerebellum, especially in children .",
      "Presenting signs and symptoms, which are usually due to mass effect or ventricular obstruction, include macrocephaly, headache, endocrinopathy, and evidence of increased intracranial pressure.",
    ],
    clue: "Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic…",
    summary:
      "Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies. Pilocytic astrocytoma is associated with MAPK pathway gene alterations (most often KIAA1549::BRAF gene fusions) (CNS WHO grade…",
    essential: [
      "Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
      "Pilocytic astrocytomas have low to moderate cellularity.",
      "The most frequent genetic alteration in pilocytic astrocytoma is a chromosome 7q34 rearrangement resulting in a KIAA1549::BRAF tandem duplication and fusion .",
    ],
    histology: [
      "Pilocytic astrocytomas have low to moderate cellularity.",
      "Pilocytic astrocytomas have low to moderate cellularity. Neoplastic cells range widely in their morphology and include varying proportions of piloid and oligodendrocyte-like cells.",
      "Pilocytic astrocytomas have low to moderate cellularity. Neoplastic cells range widely in their morphology and include varying proportions of piloid and oligodendrocyte-like cells. Nuclei are round to elongate.",
    ],
    ihc: [
      "Immunohistochemistry demonstrates strong diffuse positivity for GFAP, S100, and OLIG2.",
      "Immunohistochemistry demonstrates strong diffuse positivity for GFAP, S100, and OLIG2. Many cases are positive for synaptophysin but negative for NFP, NeuN, and chromogranin.",
      "Immunohistochemistry demonstrates strong diffuse positivity for GFAP, S100, and OLIG2. Many cases are positive for synaptophysin but negative for NFP, NeuN, and chromogranin. CD34 is usually negative, although expression has been reported in the hypothalamic/chiasmatic region .",
    ],
    molecular: [
      "The most frequent genetic alteration in pilocytic astrocytoma is a chromosome 7q34 rearrangement resulting in a KIAA1549::BRAF tandem duplication and fusion . In small numbers of cases, alternate BRAF fusions have also been identified, occurring by various genetic rearrangements (including deletions and translocations) but all resulting in loss of the N-terminal regulatory region of the BRAF protein, with retention of the…",
    ],
    differential: [
      "A relevant differential diagnosis in the presence of microvascular proliferation and/or necrosis is a high-grade astrocytic glioma including glioblastoma. Solid growth pattern, low mitotic activity, and bipolar cells, in addition to molecular features, help resolve this differential diagnosis.",
      "High-grade astrocytoma with piloid features: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
      "Pleomorphic xanthoastrocytoma: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular…",
      "Subependymal giant cell astrocytoma: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade…",
    ],
  },
  {
    name: "High-grade astrocytoma with piloid features",
    group: "Circumscribed Astrocytic Gliomas",
    profile: [
      "Comprehensive epidemiological data are not available, but several case series suggest that HGAPs are rare.",
      "HGAP may occur throughout the entire CNS.",
      "Clinical signs and symptoms depend largely on tumor location.",
    ],
    clue: "High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
    summary:
      "High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features. Alterations of MAPK pathway genes are often combined with homozygous deletion involving the CDKN2A and/or CDKN2B locus, and/or ATRX…",
    essential: [
      "High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing.",
      "Currently, DNA methylation profiling is the only method for definitively establishing a diagnosis of HGAP .",
    ],
    histology: [
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing.",
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing. In general, tumors appear as moderately cell-dense and moderately pleomorphic astrocytic gliomas.",
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing. In general, tumors appear as moderately cell-dense and moderately pleomorphic astrocytic gliomas. The growth pattern may resemble that of glioblastoma or pleomorphic xanthoastrocytoma, or the tissue may be enriched for thin, hair-like (piloid) cytoplasmic processes…",
    ],
    ihc: [
      "A suggestive immunohistochemical marker observed in about 40% of HGAPs is loss of nuclear ATRX expression in the tumor cells, with non-neoplastic cell nuclei remaining ATRX-positive .",
      "A suggestive immunohistochemical marker observed in about 40% of HGAPs is loss of nuclear ATRX expression in the tumor cells, with non-neoplastic cell nuclei remaining ATRX-positive . IDH1 p.R132H immunohistochemistry is negative.",
      "A suggestive immunohistochemical marker observed in about 40% of HGAPs is loss of nuclear ATRX expression in the tumor cells, with non-neoplastic cell nuclei remaining ATRX-positive . IDH1 p.R132H immunohistochemistry is negative. Very rare tumors with expression of the H3 p.K28M (K27M)-mutant protein have been reported, but…",
    ],
    molecular: [
      "Currently, DNA methylation profiling is the only method for definitively establishing a diagnosis of HGAP . The molecular class is included in widely used machine learning–based classifiers .",
    ],
    differential: [
      "Because of the broad and diagnostically ambiguous spectrum of histological features, a wide range of gliomas represent relevant differential diagnoses, including IDH-wildtype glioblastoma, pleomorphic xanthoastrocytoma (CNS WHO grade 2 or 3), and pilocytic astrocytoma (especially tumors with histological features of anaplasia). The first study of HGAP demonstrated that in a predominantly adult population, about 80% of tumors histologically considered to…",
      "Pilocytic astrocytoma: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic…",
      "Pleomorphic xanthoastrocytoma: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular…",
      "Subependymal giant cell astrocytoma: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade…",
    ],
  },
  {
    name: "Pleomorphic xanthoastrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    profile: [
      "PXA accounts for < 0.3% of primary CNS tumors, with an annual incidence of < 0.7 cases per 100 000 population .",
      "A superficial location involving the leptomeninges and cerebrum is typical.",
      "Many patients present with a long history of seizures.",
    ],
    clue: "Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular…",
    summary:
      "Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin deposition, and characteristically with BRAF p.V600E mutation (or other MAPK pathway gene alterations) and homozygous…",
    essential: [
      "Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin deposition, and characteristically with BRAF p.V600E mutation (or other MAPK pathway…",
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common.",
      "MAPK pathway gene alterations Essentially all PXAs harbour genetic alterations in a MAPK pathway gene causing aberrant activation of this pathway.",
    ],
    histology: [
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common.",
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common. Tumors are composed of a mixture of spindled, epithelioid, pleomorphic, and multinucleated astrocytes that are sometimes filled with lipid droplets (xanthomatous cells).",
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common. Tumors are composed of a mixture of spindled, epithelioid, pleomorphic, and multinucleated astrocytes that are sometimes filled with lipid droplets (xanthomatous cells). Intranuclear pseudoinclusions, prominent nucleoli, and lymphocytic infiltration are frequent .",
    ],
    ihc: [
      "PXAs typically express GFAP and S100 .",
      "PXAs typically express GFAP and S100 . S100 is often diffusely positive, whereas at least focal positivity for GFAP is common.",
      "PXAs typically express GFAP and S100 . S100 is often diffusely positive, whereas at least focal positivity for GFAP is common. Most tumors are positive for CD34 and focally express neuronal markers (synaptophysin, neurofilament, class III β-tubulin, and MAP2) , although the positive cells do not resemble neurons.",
    ],
    molecular: [
      "MAPK pathway gene alterations Essentially all PXAs harbour genetic alterations in a MAPK pathway gene causing aberrant activation of this pathway. By far the most frequent alteration is BRAF p.V600E (accounting for ~60% of cases in previous series and as many as 80% in combined data from two recent studies ).",
    ],
    differential: [
      "The most frequent differential diagnosis is ganglioglioma, which can have a glial component resembling PXA. Rare cases of composite tumors have also been reported .",
      "Pilocytic astrocytoma: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic…",
      "High-grade astrocytoma with piloid features: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
      "Subependymal giant cell astrocytoma: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade…",
    ],
  },
  {
    name: "Subependymal giant cell astrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    profile: [
      "Incidence SEGA is the most common CNS neoplasm in patients with TS .",
      "SEGAs typically arise from the subependymal tissue of the lateral ventricles adjacent to the foramen of Monro.",
      "Most patients present with signs and symptoms of increased intracranial pressure.",
    ],
    clue: "Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade…",
    summary:
      "Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1). ICD-O coding 9384/1 Subependymal giant cell astrocytoma ICD-11 coding 2A00.0Y & XH1L48 Other specified gliomas of brain & Subependymal…",
    essential: [
      "Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes.",
      "Molecular analyses are usually not needed to establish the diagnosis of SEGA.",
    ],
    histology: [
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes.",
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes. Typical appearances range from polygonal cells with abundant, glassy cytoplasm to smaller spindle cells and gemistocyte-like cells arranged in sweeping fascicles, sheets, or nests with intervening fibrillary septa.",
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes. Typical appearances range from polygonal cells with abundant, glassy cytoplasm to smaller spindle cells and gemistocyte-like cells arranged in sweeping fascicles, sheets, or nests with intervening fibrillary septa. Giant pyramidal-like cells with a ganglionic-like appearance (without Nissl substance)…",
    ],
    ihc: [
      "SEGA has been designated as a distinctive, well-circumscribed astrocytoma, but because of its usually mixed glioneuronal phenotype it has also been termed “subependymal giant cell tumor” .",
      "SEGA has been designated as a distinctive, well-circumscribed astrocytoma, but because of its usually mixed glioneuronal phenotype it has also been termed “subependymal giant cell tumor” . Tumor cells demonstrate variable immunoreactivity for GFAP and a uniform and intense immunoreactivity for S100 .",
      "SEGA has been designated as a distinctive, well-circumscribed astrocytoma, but because of its usually mixed glioneuronal phenotype it has also been termed “subependymal giant cell tumor” . Tumor cells demonstrate variable immunoreactivity for GFAP and a uniform and intense immunoreactivity for S100 . Variable immunoreactivity…",
    ],
    molecular: [
      "Molecular analyses are usually not needed to establish the diagnosis of SEGA. In histologically ambiguous cases, DNA methylome profiling and analyses for TSC1 or TSC2 alterations may help to establish the diagnosis.",
    ],
    differential: [
      "Compare with Pilocytic astrocytoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Pilocytic astrocytoma: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic…",
      "High-grade astrocytoma with piloid features: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
      "Pleomorphic xanthoastrocytoma: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular…",
    ],
  },
  {
    name: "Astroblastoma, MN1-altered",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "Patient ages range from 3 months to 40 years at clinical presentation (median: 15 years) .",
      "Astroblastoma, MN1-altered, occurs predominantly in the cerebral hemispheres, most often in the frontal and parietal lobes, but also in occipital and temporal regions .",
      "Presenting symptoms include headache, seizures, paralysis, nausea, and vomiting .",
    ],
    clue: "Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
    summary:
      "Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucleate zones, and vascular and pericellular hyalinization. ICD-O coding 9430/3 Astroblastoma, MN1-altered ICD-11 coding…",
    essential: [
      "Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucleate zones, and vascular and pericellular hyalinization.",
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views .",
      "Astroblastoma, MN1-altered, is characterized by structural rearrangements of the MN1 gene at chromosome band 22q12.1.",
    ],
    histology: [
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views .",
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views . In the classic form, tumor cells are anchored to centrally positioned blood vessels by eosinophilic…",
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views . In the classic form, tumor cells are anchored to centrally positioned blood vessels by eosinophilic…",
    ],
    ihc: [
      "Cytoplasmic immunoreactivity for GFAP is characteristic, although the extent varies considerably.",
      "Cytoplasmic immunoreactivity for GFAP is characteristic, although the extent varies considerably. The large majority of MN1-altered astroblastomas display at least focal nuclear OLIG2 expression .",
      "Cytoplasmic immunoreactivity for GFAP is characteristic, although the extent varies considerably. The large majority of MN1-altered astroblastomas display at least focal nuclear OLIG2 expression . Cytoplasmic EMA labeling is regularly seen but varies in its distribution as diffuse, membranous, dot-like, or ring-like .",
    ],
    molecular: [
      "Astroblastoma, MN1-altered, is characterized by structural rearrangements of the MN1 gene at chromosome band 22q12.1. MN1 fusions most often occur in-frame with BEND2 at chromosome band Xp22.13, but other partners (including CXXC5) have also been described .",
    ],
    differential: [
      "The histological features noted in MN1-altered astroblastoma are not entity-specific and may be displayed focally or extensively by other tumors that are proved, on molecular diagnostic assessment, to represent ZFTA (C11orf95) fusion–positive ependymomas, BRAF-mutant epithelioid glioblastomas, BRAF-mutant pleomorphic xanthoastrocytomas, embryonal neoplasms, IDH-wildtype glioblastomas, or other gliomas . ZFTA (C11orf95) fusion and BRAF mutation are…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Ganglioglioma",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "A population-based study calculated a yearly incidence rate of ganglioglioma of 0.186 cases per 100 000 population worldwide, without significant ethnicity proclivity .",
      "These tumors can occur throughout the CNS, including in the cerebrum, brainstem, cerebellum, spinal cord, and optic nerves, as well as within the ventricular system, although the majority (> 70%) occur in the temporal…",
      "The symptoms vary according to tumor size and site.",
    ],
    clue: "Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
    summary:
      "Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause MAPK pathway activation (CNS WHO grade 1). ICD-O coding 9505/1 Ganglioglioma ICD-11 coding 2A00.21 & XH5FJ3 Mixed…",
    essential: [
      "Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause MAPK pathway activation (CNS WHO grade 1).",
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity.",
      "For patients with ganglioglioma with a typical clinical and histological presentation, molecular testing may not be critical.",
    ],
    histology: [
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity.",
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity. The two components may be intermixed or geographically separate.",
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity. The two components may be intermixed or geographically separate. The neuronal element is composed of dysmorphic ganglion cells that may demonstrate abnormal clustering, a lack of cytoarchitectural organization, cytomegaly, perimembranous aggregation of Nissl substance, or…",
    ],
    ihc: [
      "Neuronal markers such as MAP2, neurofilament, chromogranin A, and synaptophysin highlight the neuronal component in gangliogliomas .",
      "Neuronal markers such as MAP2, neurofilament, chromogranin A, and synaptophysin highlight the neuronal component in gangliogliomas . However, to date, there is no specific marker to unequivocally differentiate neoplastic neurons from their normal counterparts.",
      "Neuronal markers such as MAP2, neurofilament, chromogranin A, and synaptophysin highlight the neuronal component in gangliogliomas . However, to date, there is no specific marker to unequivocally differentiate neoplastic neurons from their normal counterparts. Chromogranin A expression is usually very weak or absent in normal…",
    ],
    molecular: [
      "For patients with ganglioglioma with a typical clinical and histological presentation, molecular testing may not be critical. However, for cases with diagnostic uncertainty, the initial molecular workup should focus on BRAF p.V600E mutation testing either by sequencing or by immunohistochemistry using the mutant-specific antibody VE1 .",
    ],
    differential: [
      "The diagnosis of ganglioglioma requires the histological identification of a neuronal component, but the near-normal morphology of the neuronal component in some cases remains a challenging issue because there is no specific marker protein for differentiating the neoplastic ganglion cells from native neurons. The diagnosis of ganglioglioma should be considered in all cases of low-grade neuroepithelial tumors associated with focal seizures that are…",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "DIG/DIAs are rare primary brain tumors, but their true incidence is not well defined, because they are usually included in the large group of glioneuronal tumors.",
      "DIG/DIAs typically arise in the cerebral hemispheres, involving the superficial cortex and leptomeninges, often with attachment to the dura.",
      "The most frequent clinical signs are increased head circumference, bulging of the fontanelles, lethargy, and the sunset sign .",
    ],
    clue: "Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
    summary:
      "Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven by MAPK pathway activation and composed of a mixed astrocytic and neuronal component (DIG) or an astrocytic component…",
    essential: [
      "Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven by MAPK pathway activation and composed of a mixed astrocytic and neuronal component (DIG)…",
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component.",
      "DIG/DIAs are IDH- and histone H3-wildtype tumors characterized by genetic alterations causing activation of the MAPK signalling pathway, most commonly via mutation or fusion involving BRAF or RAF1 .",
    ],
    histology: [
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component.",
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component. The desmoplastic leptomeningeal component consists of a mixture of fibroblast-like, spindle-shaped cells intermixed with a collagen matrix.",
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component. The desmoplastic leptomeningeal component consists of a mixture of fibroblast-like, spindle-shaped cells intermixed with a collagen matrix. Reticulin-rich basal lamina classically surrounds almost every cell .",
    ],
    ihc: [
      "The glial component strongly expresses GFAP, whereas neuronal markers (synaptophysin, neurofilament, NeuN) are observed in neoplastic ganglion cells as well as in cells lacking obvious neuronal differentiation .",
      "The glial component strongly expresses GFAP, whereas neuronal markers (synaptophysin, neurofilament, NeuN) are observed in neoplastic ganglion cells as well as in cells lacking obvious neuronal differentiation . The Ki-67 proliferation index within the desmoplastic component ranges from < 0.5% to 5%, with the majority of…",
      "The glial component strongly expresses GFAP, whereas neuronal markers (synaptophysin, neurofilament, NeuN) are observed in neoplastic ganglion cells as well as in cells lacking obvious neuronal differentiation . The Ki-67 proliferation index within the desmoplastic component ranges from < 0.5% to 5%, with the majority of…",
    ],
    molecular: [
      "DIG/DIAs are IDH- and histone H3-wildtype tumors characterized by genetic alterations causing activation of the MAPK signalling pathway, most commonly via mutation or fusion involving BRAF or RAF1 . BRAF mutations can include p.V600E and other variants at the same codon, such as p.V600D, in addition to variants at other locations or fusions involving partners other than KIAA1549.",
    ],
    differential: [
      "The major differential diagnoses for DIG/DIA are ganglioglioma, pleomorphic xanthoastrocytoma, and the newly defined tumor type infant-type hemispheric glioma. Like DIG/DIA, ganglioglioma and pleomorphic xanthoastrocytoma are typically solid and cystic tumors with frequent BRAF mutations, but ganglioglioma and pleomorphic xanthoastrocytoma are typically much smaller and occur in older children, in contrast to the very large size and the infantile onset of…",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Dysembryoplastic neuroepithelial tumor",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "Incidence The estimated incidence of DNT is 0.03 cases per 100 000 person-years.",
      "DNTs can be located in any part of the cerebral cortex, but they show a predilection for the temporal lobe (67.3% of cases, preferentially involving mesial structures) and the frontal lobe (16.3% of cases); the…",
      "Patients with DNTs typically present with drug-resistant focal epilepsy with an onset in childhood, adolescence, or early adulthood.",
    ],
    clue: "Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
    summary:
      "Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be associated with glial nodules and activating mutations of FGFR1 (CNS WHO grade 1). ICD-O coding 9413/0 Dysembryoplastic…",
    essential: [
      "Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be associated with glial nodules and activating mutations of FGFR1 (CNS WHO grade 1).",
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells.",
      "Among FGFR1 alterations, intragenic duplication (internal tandem duplication [ITD]) of the tyrosine kinase domain (TKD) of FGFR1 is the most prevalent aberration (accounting for ~40–60% of cases) , followed by missense mutations at mutation hotspots in FGFR1 .",
    ],
    histology: [
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells.",
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells. Between these columns, neurons with normal cytology appear to float in a mucoid matrix (floating neurons) .",
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells. Between these columns, neurons with normal cytology appear to float in a mucoid matrix (floating neurons) . Dysplastic ganglionic cells…",
    ],
    ihc: [
      "The small oligodendroglia-like cells express glial markers including S100, the glial transcription factor OLIG2, and PDGFRA, but not GFAP.",
      "The small oligodendroglia-like cells express glial markers including S100, the glial transcription factor OLIG2, and PDGFRA, but not GFAP. MAP2 expression is typically faint in these cells; the strong perinuclear expression found in oligodendrogliomas is not detectable .",
      "The small oligodendroglia-like cells express glial markers including S100, the glial transcription factor OLIG2, and PDGFRA, but not GFAP. MAP2 expression is typically faint in these cells; the strong perinuclear expression found in oligodendrogliomas is not detectable . The floating normal neurons can be depicted by…",
    ],
    molecular: [
      "Among FGFR1 alterations, intragenic duplication (internal tandem duplication [ITD]) of the tyrosine kinase domain (TKD) of FGFR1 is the most prevalent aberration (accounting for ~40–60% of cases) , followed by missense mutations at mutation hotspots in FGFR1 . FGFR1 mutations were identified in both familial and sporadic cases, with double or multiple mutations often present on the same allele (in cis) .",
    ],
    differential: [
      "Sampling artefacts may make the diagnosis challenging. Clusters of abnormal neurons not otherwise explicable by anatomical localization may be focal and detectable only in some cases.",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "The majority of DGONC cases occur in pediatric patients, with a median age of 9 years in the 23 cases for which the age of initial diagnosis is known.",
      "All cases reported so far were supratentorial.",
      "There are currently no known tumor-specific symptoms.",
    ],
    clue: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
    summary:
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells frequently showing perinuclear haloes, scattered multinucleated cells, and nuclear clusters, with a distinct DNA methylation…",
    essential: [
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells frequently showing perinuclear haloes, scattered multinucleated cells, and nuclear clusters,…",
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analyzed .",
      "DGONCs show a distinct DNA methylation profile.",
    ],
    histology: [
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analyzed .",
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analyzed . Subsequently, histological features were investigated in a supervised fashion on 13 samples of this cluster, for which histology slides were available.",
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analyzed . Subsequently, histological features were investigated in a supervised fashion on 13 samples of this cluster, for which histology slides were available. The histological characterization in the literature may therefore not cover…",
    ],
    ihc: [
      "The tumor cells are diffusely OLIG2-positive in most cases, and GFAP-negative.",
      "The tumor cells are diffusely OLIG2-positive in most cases, and GFAP-negative. Synaptophysin reveals a neuropil background.",
      "The tumor cells are diffusely OLIG2-positive in most cases, and GFAP-negative. Synaptophysin reveals a neuropil background. NeuN and MAP2 are expressed in a small proportion of cells .",
    ],
    molecular: [
      "DGONCs show a distinct DNA methylation profile. In t-distributed stochastic neighbour embedding (t-SNE) analysis with the reference samples of Capper et al. , DGONCs form a distinct cluster close to FOXR2-activated CNS neuroblastoma.",
    ],
    differential: [
      "Compare with Astroblastoma, MN1-altered; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Diffuse leptomeningeal glioneuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "DLGNTs are rare, and data on incidence are not available, but these tumors mostly affect pediatric patients.",
      "These tumors preferentially involve the spinal and intracranial leptomeninges, although there are rare parenchymal examples without a leptomeningeal component, most often located in the spinal cord but occasionally also…",
      "Patients often present with acute onset of signs and symptoms of increased intracranial pressure due to obstructive hydrocephalus, including headache, nausea, and vomiting.",
    ],
    clue: "Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
    summary:
      "Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by chromosome arm 1p deletion and a mitogen-activated protein kinase (MAPK) pathway gene alteration, most commonly…",
    essential: [
      "Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by chromosome arm 1p deletion and a mitogen-activated protein kinase (MAPK) pathway gene…",
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions.",
      "For cases with typical clinical and histological features, molecular testing may be less critical.",
    ],
    histology: [
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions.",
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions. DLGNTs are low- to moderate-cellularity neoplasms composed of relatively monomorphic oligodendrocyte-like tumor cells with uniform, medium-sized round nuclei and inconspicuous nucleoli.",
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions. DLGNTs are low- to moderate-cellularity neoplasms composed of relatively monomorphic oligodendrocyte-like tumor cells with uniform, medium-sized round nuclei and inconspicuous nucleoli. Like in oligodendrogliomas, clear perinuclear haloes are sometimes seen in DLGNTs as an artefact in formalin-fixed,…",
    ],
    ihc: [
      "The oligodendroglial-like tumor cells typically express OLIG2, MAP2, and S100 .",
      "The oligodendroglial-like tumor cells typically express OLIG2, MAP2, and S100 . GFAP immunoreactivity in tumor cells is seen in < 50% of cases and is often restricted to a minor proportion of neoplastic cells.",
      "The oligodendroglial-like tumor cells typically express OLIG2, MAP2, and S100 . GFAP immunoreactivity in tumor cells is seen in < 50% of cases and is often restricted to a minor proportion of neoplastic cells. Expression of synaptophysin is detectable in as many as two thirds of the tumors, and it is particularly common in…",
    ],
    molecular: [
      "For cases with typical clinical and histological features, molecular testing may be less critical. However, for any cases with diagnostic uncertainty, the initial molecular workup should include chromosome 1p status and KIAA1549::BRAF fusion testing.",
    ],
    differential: [
      "The main differential diagnosed are intraparenchymal astrocytic or oligodendroglial gliomas with leptomeningeal dissemination; for instance, pilocytic astrocytoma may also show leptomeningeal dissemination. An absence of (or only focal) GFAP immunoreactivity, the presence of synaptophysin-positive cells, and the characteristic molecular profile of KIAA1549::BRAF fusion with isolated 1p deletion or 1p/19q codeletion in the absence of IDH mutation…",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Multinodular and vacuolating neuronal tumor: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    ],
  },
  {
    name: "Multinodular and vacuolating neuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    profile: [
      "Population-based incidence data are not available.",
      "MVNTs typically involve the deep cortical ribbon and superficial white matter, predominantly of the temporal lobes (75–80%), followed by the frontal lobes (10–15%), and then the parietal and occipital lobes .",
      "Seizures, particularly of complex partial type with or without secondary generalization, are the most common manifestation (~60% of cases), followed by headache (10–15%), episodic confusion, and dizziness.",
    ],
    clue: "The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and…",
    summary:
      "The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO grade 1). ICD-O coding 9509/0 Multinodular and vacuolating neuronal tumor ICD-11 coding 2A00.21 Mixed neuronal-glial…",
    essential: [
      "The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO grade 1).",
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm .",
      "MVNTs harbour MAPK pathway–activating abnormalities that most commonly involve small indels and hotspot mutations in MAP2K1, followed by pathogenic mutations in BRAF (excluding the common p.V600E mutations, which have not been documented in this tumor to date) and FGFR2 fusions .",
    ],
    histology: [
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm .",
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm . These lie in a delicate fibrillar matrix that usually exhibits conspicuous vacuolar change, with tumor cells…",
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm . These lie in a delicate fibrillar matrix that usually exhibits conspicuous vacuolar change, with tumor cells…",
    ],
    ihc: [
      "Tumor cells consistently express OLIG2, HuC/HuD, non-phosphorylated 200-kDa NFP, and doublecortin on immunohistochemistry, and they often express MAP2 and synaptophysin (although weakly, with much less labeling of the nodular matrix than the cortex) .",
      "Tumor cells consistently express OLIG2, HuC/HuD, non-phosphorylated 200-kDa NFP, and doublecortin on immunohistochemistry, and they often express MAP2 and synaptophysin (although weakly, with much less labeling of the nodular matrix than the cortex) . Strong matrix labeling for α-internexin is present , but tumor cells do not…",
      "Tumor cells consistently express OLIG2, HuC/HuD, non-phosphorylated 200-kDa NFP, and doublecortin on immunohistochemistry, and they often express MAP2 and synaptophysin (although weakly, with much less labeling of the nodular matrix than the cortex) . Strong matrix labeling for α-internexin is present , but tumor cells do not…",
    ],
    molecular: [
      "MVNTs harbour MAPK pathway–activating abnormalities that most commonly involve small indels and hotspot mutations in MAP2K1, followed by pathogenic mutations in BRAF (excluding the common p.V600E mutations, which have not been documented in this tumor to date) and FGFR2 fusions .",
    ],
    differential: [
      "Compare with Astroblastoma, MN1-altered; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Astroblastoma, MN1-altered: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular…",
      "Ganglioglioma: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic…",
      "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of…",
      "Dysembryoplastic neuroepithelial tumor: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal…",
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably…",
      "Diffuse leptomeningeal glioneuronal tumor: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is…",
    ],
  },
  {
    name: "Supratentorial ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "Supratentorial ependymomas of all types affect children and adults, and they account for approximately one third of intracranial ependymomas .",
      "Supratentorial ependymomas are localized to the cerebral hemispheres and may or may not have an obvious connection to the ventricular system.",
      "Common clinical manifestations include focal neurological deficits or seizures.",
    ],
    clue: "Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
    summary:
      "Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary matrix. The diagnosis of supratentorial ependymoma should be used either when genetic analysis has not detected a…",
    essential: [
      "Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "The histopathological features of supratentorial ependymomas are quite heterogeneous.",
      "Molecular analysis of supratentorial ependymomas should be directed towards determining ZFTA (C11orf95) and YAP1 status and excluding tumors with similar histopathological features, such as BCOR-altered tumors and MN1-altered astroblastomas.",
    ],
    histology: [
      "The histopathological features of supratentorial ependymomas are quite heterogeneous.",
      "The histopathological features of supratentorial ependymomas are quite heterogeneous. Most have a relatively abrupt interface with adjacent CNS parenchyma.",
      "The histopathological features of supratentorial ependymomas are quite heterogeneous. Most have a relatively abrupt interface with adjacent CNS parenchyma. Diffuse infiltration of adjacent normal tissue is rare and tends to be seen after multiple recurrences.",
    ],
    ihc: [
      "Most supratentorial ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels and perivascular pseudorosettes.",
      "Most supratentorial ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels and perivascular pseudorosettes. Characteristic immunoreactivity for EMA, with a paranuclear dot-like pattern and along luminal surfaces of true ependymal rosettes, can be found in many, but not all, ependymomas.",
      "Most supratentorial ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels and perivascular pseudorosettes. Characteristic immunoreactivity for EMA, with a paranuclear dot-like pattern and along luminal surfaces of true ependymal rosettes, can be found in many, but not all, ependymomas.…",
    ],
    molecular: [
      "Molecular analysis of supratentorial ependymomas should be directed towards determining ZFTA (C11orf95) and YAP1 status and excluding tumors with similar histopathological features, such as BCOR-altered tumors and MN1-altered astroblastomas. A variety of diagnostic tests can be used to detect the presence or absence of ZFTA (C11orf95) or YAP1 rearrangements, including interphase FISH, RT-PCR–based sequencing methods, and…",
    ],
    differential: [
      "The differential diagnosis of fusion-negative supratentorial ependymomas includes histopathological mimics such as tumors with BCOR internal tandem duplication (ITD) and astroblastomas. These entities should be excluded by appropriate immunohistological and molecular analyses .",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Supratentorial ependymoma, ZFTA fusion-positive",
    group: "Ependymal Tumors",
    profile: [
      "ZFTA fusion–positive tumors account for the majority of supratentorial ependymomas and may occur both in children and in adults.",
      "Most ZFTA fusion–positive cerebral ependymomas arise in the frontal or parietal lobe .",
      "Clinical symptoms and signs include focal neurological deficits or seizures, as well as features of raised intracranial pressure.",
    ],
    clue: "Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
    summary:
      "Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix. In most of these supratentorial ependymomas, ZFTA…",
    essential: [
      "Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm.",
      "Diagnostic tests for detecting ZFTA fusions include several sequencing methods, interphase FISH, and molecular inversion profiling .",
    ],
    histology: [
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm.",
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm. Pseudorosettes are not prominent in most cases, and true ependymal rosettes are rare.",
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm. Pseudorosettes are not prominent in most cases, and true ependymal rosettes are rare. These tumors often have a network of branching capillary blood vessels and a clear cell phenotype.",
    ],
    ihc: [
      "The immunophenotype of ZFTA fusion–positive ependymomas is similar to that of other ependymomas.",
      "The immunophenotype of ZFTA fusion–positive ependymomas is similar to that of other ependymomas. Ependymomas with a ZFTA::RELA fusion show nuclear accumulation of p65 protein (encoded by RELA) and universal cytoplasmic expression of L1CAM .",
      "The immunophenotype of ZFTA fusion–positive ependymomas is similar to that of other ependymomas. Ependymomas with a ZFTA::RELA fusion show nuclear accumulation of p65 protein (encoded by RELA) and universal cytoplasmic expression of L1CAM . Immunoreactivity for p65 has been found to have a slightly higher specificity for this…",
    ],
    molecular: [
      "Diagnostic tests for detecting ZFTA fusions include several sequencing methods, interphase FISH, and molecular inversion profiling . An RT-PCR method targeting the different types of ZFTA::RELA fusion has been proposed for detecting the most frequent fusions .",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Supratentorial ependymoma, YAP1 fusion-positive",
    group: "Ependymal Tumors",
    profile: [
      "YAP1 fusion–positive ependymomas are uncommon and appear to be restricted to young children.",
      "Most YAP1 fusion–positive tumors are located within or adjacent to the lateral ventricle.",
      "YAP1 fusion–positive supratentorial ependymomas are often large by the time of presentation.",
    ],
    clue: "Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
    summary:
      "Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix. In most of these supratentorial ependymomas, YAP1 is fused with…",
    essential: [
      "Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain.",
      "Molecular testing for YAP1 fusions includes several sequencing strategies and interphase FISH .",
    ],
    histology: [
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain.",
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain. They are composed of relatively uniform cells with small to medium-sized round or angulated nuclei.",
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain. They are composed of relatively uniform cells with small to medium-sized round or angulated nuclei. Ependymal rosettes are present in some tumors.",
    ],
    ihc: [
      "Supratentorial ependymomas with a YAP1 fusion show widespread and strong immunoreactivity for EMA .",
      "Supratentorial ependymomas with a YAP1 fusion show widespread and strong immunoreactivity for EMA . There is no expression of L1CAM, and tumor cell nuclei are negative for p65 (RELA).",
      "Supratentorial ependymomas with a YAP1 fusion show widespread and strong immunoreactivity for EMA . There is no expression of L1CAM, and tumor cell nuclei are negative for p65 (RELA).",
    ],
    molecular: [
      "Molecular testing for YAP1 fusions includes several sequencing strategies and interphase FISH . DNA methylation–based classification can complement tests directed towards identification of the fusion.",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Posterior fossa ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "Posterior fossa ependymomas of all types can develop at any age.",
      "Posterior fossa ependymomas mainly arise in the region of the fourth ventricle, including the floor, lateral aspect (cerebellar peduncles), and roof.",
      "Common clinical presentations relate to mass effect on surrounding posterior fossa structures and include secondary hydrocephalus.",
    ],
    clue: "Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
    summary:
      "Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix. The diagnosis of posterior fossa ependymoma should be used when molecular analysis either cannot assign a…",
    essential: [
      "Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei.",
      "If feasible, posterior fossa ependymomas should be assigned to a molecular group (PFA, PFB, or subependymoma) .",
    ],
    histology: [
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei.",
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei. Nodules of tumor cells, in which the cell density is higher than in surrounding syncytial areas, are common.",
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei. Nodules of tumor cells, in which the cell density is higher than in surrounding syncytial areas, are common. Perivascular pseudorosettes are almost always present and are characterized by tumor cells arranged in a radial fashion around blood vessels to create an…",
    ],
    ihc: [
      "Most posterior fossa ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels in perivascular pseudorosettes.",
      "Most posterior fossa ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels in perivascular pseudorosettes. EMA expression can be seen in most ependymomas as a paranuclear dot-like pattern or ring-like structures.",
      "Most posterior fossa ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels in perivascular pseudorosettes. EMA expression can be seen in most ependymomas as a paranuclear dot-like pattern or ring-like structures. However, this is not an entirely specific finding .",
    ],
    molecular: [
      "If feasible, posterior fossa ependymomas should be assigned to a molecular group (PFA, PFB, or subependymoma) . Absence of immunoreactivity for H3 p.K28me3 (K27me3) in the nuclei of tumor cells is a surrogate marker for PFA ependymoma , but classification using DNA methylation profiling is considered the standard method, because nuclear expression of H3 p.K28me3 (K27me3) is present in both PFB tumors and subependymomas.",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Posterior fossa group A (PFA) ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "PFA ependymomas predominantly occur in infants and children, with a median age of 3 years .",
      "Studies correlating neuroimaging with molecular group have suggested that PFA ependymomas more frequently arise from the roof or lateral aspect of the fourth ventricle than from its floor .",
      "The clinical features of PFA ependymomas are similar to those described for posterior fossa ependymomas in general.",
    ],
    clue: "Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
    summary:
      "Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix. An ependymoma can be classified as PFA by identifying a…",
    essential: [
      "Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "Demonstration of loss of H3 p.K28me3 (K27me3) by immunohistochemistry, or assignment to the PFA molecular group by DNA methylation profiling, is required for a diagnosis of PFA ependymoma.",
    ],
    histology: [
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general. High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 64% of PFA ependymomas in one study .",
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general. High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 64% of PFA ependymomas in one study . Clear cell, papillary, and tanycytic patterns can be focally present .",
    ],
    ihc: [
      "PFA ependymomas exhibit a reduction in H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry .",
      "PFA ependymomas exhibit a reduction in H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry . Retained H3 p.K28me3 (K27me3) immunoreactivity in endothelial cells can be used as an internal control for the method.",
      "PFA ependymomas exhibit a reduction in H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry . Retained H3 p.K28me3 (K27me3) immunoreactivity in endothelial cells can be used as an internal control for the method. In most PFA ependymomas, tumor cells show a global reduction in H3 p.K28me3 (K27me3)…",
    ],
    molecular: [
      "Demonstration of loss of H3 p.K28me3 (K27me3) by immunohistochemistry, or assignment to the PFA molecular group by DNA methylation profiling, is required for a diagnosis of PFA ependymoma. Because of its prognostic significance across all posterior fossa ependymomas , gain of chromosome 1q is often assessed in PFA ependymomas, even though molecular subtypes of PFA ependymoma with or without 1q gain can be associated with a…",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Posterior fossa group B (PFB) ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "PFB ependymomas occur in adults and are more common in adolescents than in children and infants .",
      "PFB ependymomas can occur anywhere in the region of the fourth ventricle and its exit foramina, but they are thought to arise more frequently from the floor of the fourth ventricle than from the roof or lateral recesses…",
      "Clinical manifestations are similar to those observed in posterior fossa ependymomas in general.",
    ],
    clue: "Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
    summary:
      "Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix. An ependymoma can be classified as PFB by DNA…",
    essential: [
      "Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "Demonstration of H3 p.K28me3 (K27me3) retention by immunohistochemistry or assignment to the PFB molecular group by DNA methylation profiling is required for a diagnosis of PFB ependymoma.",
    ],
    histology: [
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general. High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 41% of PFB ependymomas in a study of 51 patients .",
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general. High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 41% of PFB ependymomas in a study of 51 patients . Practically all PFB ependymomas exhibit retention of H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry .",
    ],
    ihc: [],
    molecular: [
      "Demonstration of H3 p.K28me3 (K27me3) retention by immunohistochemistry or assignment to the PFB molecular group by DNA methylation profiling is required for a diagnosis of PFB ependymoma. Nuclear expression of H3 p.K28me3 (K27me3) is retained in PFB ependymomas, but this finding is not specific.",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Spinal ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "Ependymal tumors represent 20.6% of primary spinal tumors in children and adolescents and 17.6% of those in adults aged ≥ 20 years, according to a statistical report from the Central Brain Tumor Registry of the United…",
      "Spinal ependymomas occur along the spinal canal and are intramedullary tumors .",
      "Spinal ependymomas do not have clinical features specific enough to differentiate them from other intramedullary spinal cord tumors.",
    ],
    clue: "Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
    summary:
      "Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low level of mitotic activity. By definition, the tumor lacks features of myxopapillary ependymoma or subependymoma.",
    essential: [
      "Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low level of mitotic activity.",
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes.",
      "Spinal ependymomas with a typical morphology are easily recognized.",
    ],
    histology: [
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes.",
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes. The cells are embedded in a fibrillary glial matrix and have a moderate to high cell density.",
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes. The cells are embedded in a fibrillary glial matrix and have a moderate to high cell density. A characteristic feature is the anucleate perivascular zone (pseudorosette); tumor cells are radially arranged around a blood vessel, with fibrillary processes creating the perivascular…",
    ],
    ihc: [
      "Immunoreactivity for GFAP, S100, and vimentin is characteristic, as is focal dot-like or ring-like intracytoplasmic immunoreactivity for EMA.",
      "Immunoreactivity for GFAP, S100, and vimentin is characteristic, as is focal dot-like or ring-like intracytoplasmic immunoreactivity for EMA. In contrast to astrocytic spinal neoplasms, spinal ependymomas are largely negative for OLIG2.",
      "Immunoreactivity for GFAP, S100, and vimentin is characteristic, as is focal dot-like or ring-like intracytoplasmic immunoreactivity for EMA. In contrast to astrocytic spinal neoplasms, spinal ependymomas are largely negative for OLIG2. They do not express SOX10, which is found in schwannoma, pilocytic astrocytoma, and most…",
    ],
    molecular: [
      "Spinal ependymomas with a typical morphology are easily recognized. They are also readily distinguished from myxopapillary ependymomas, subependymomas, and MYCN-amplified spinal ependymoma by their DNA methylation profile .",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Spinal ependymoma, MYCN-amplified",
    group: "Ependymal Tumors",
    profile: [
      "MYCN-amplified spinal ependymoma is rare, with only 27 reported cases (17 in women and 10 in men; M:F ratio: 1:1.7).",
      "Tumors are localized to the spinal cord, primarily to the cervical or thoracic levels (in 78% of cases) and less frequently to lumbar levels (in 7% of cases) .",
      "Presenting symptoms depend on tumor location, but they typically include neck or back pain and progressive numbness and weakness in the extremities.",
    ],
    clue: "Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
    summary:
      "Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibrillary matrix. Practically all tumors display microvascular proliferation, necrosis, and a high mitotic count.",
    essential: [
      "Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibrillary matrix.",
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture .",
      "High-level MYCN amplification is present and remains stable at relapse .",
    ],
    histology: [
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture .",
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture . Most have high-grade histopathological features, such as a high N:C ratio, plentiful mitotic activity, microvascular proliferation, and necrosis.",
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture . Most have high-grade histopathological features, such as a high N:C ratio, plentiful mitotic activity, microvascular proliferation, and necrosis. Two of four tumors with CNS WHO grade 2 histopathological features at presentation progressed to CNS WHO grade 3 at recurrence…",
    ],
    ihc: [
      "On immunohistochemistry, tumor cells express GFAP and show a focal cytoplasmic dot-like pattern of EMA expression .",
      "On immunohistochemistry, tumor cells express GFAP and show a focal cytoplasmic dot-like pattern of EMA expression . MYCN protein expression can be detected by immunohistochemistry .",
      "On immunohistochemistry, tumor cells express GFAP and show a focal cytoplasmic dot-like pattern of EMA expression . MYCN protein expression can be detected by immunohistochemistry . Cells are immunonegative for OLIG2 .",
    ],
    molecular: [
      "High-level MYCN amplification is present and remains stable at relapse . Additional chromosomal copy-number alterations occur with variable frequency and include loss of chromosome 10 (in 32% of cases) and focal losses on chromosome 11q (in 26% of cases).",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Myxopapillary ependymoma: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    ],
  },
  {
    name: "Myxopapillary ependymoma",
    group: "Ependymal Tumors",
    profile: [
      "Incidence rates of 0.6–1.0 cases per 1 million person-years have been reported from the USA and Europe, with an M:F ratio of 1.4–2:1 .",
      "Myxopapillary ependymomas arise almost exclusively in, and are the most common tumors of, the conus medullaris and filum terminale, accounting for 83% of 320 filum terminale ependymomas in one study .",
      "Lower back pain, often chronic, is an almost constant manifestation of myxopapillary ependymomas, and it can be accompanied by sciatica, sensorimotor deficits indicative of myelopathy, impotence, or urinary and faecal incontinence.",
    ],
    clue: "Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and…",
    summary:
      "Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO grade 2). ICD-O coding 9394/1 Myxopapillary ependymoma ICD-11 coding 2A00.0Y & XH15U1 Other specified gliomas of brain…",
    essential: [
      "Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO grade 2).",
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts.",
      "Myxopapillary ependymomas with a classic morphology are easily recognized, but these tumors also have a unique DNA methylation profile .",
    ],
    histology: [
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts.",
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts. Myxoid material, highlighted by PAS and Alcian blue positivity, is useful in the identification of examples manifesting little, if any, papillary structure and composed instead of epithelioid…",
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts. Myxoid material, highlighted by PAS and Alcian blue positivity, is useful in the identification of examples manifesting little, if any, papillary structure and composed instead of epithelioid…",
    ],
    ihc: [
      "Diffuse immunoreactivity for GFAP distinguishes myxopapillary ependymomas from metastatic carcinomas, paragangliomas, schwannomas, chordomas, and myxoid chondrosarcomas .",
      "Diffuse immunoreactivity for GFAP distinguishes myxopapillary ependymomas from metastatic carcinomas, paragangliomas, schwannomas, chordomas, and myxoid chondrosarcomas . Immunolabeling for S100 is also typical, and reactivity for CD99 and CD56 is frequent .",
      "Diffuse immunoreactivity for GFAP distinguishes myxopapillary ependymomas from metastatic carcinomas, paragangliomas, schwannomas, chordomas, and myxoid chondrosarcomas . Immunolabeling for S100 is also typical, and reactivity for CD99 and CD56 is frequent . Tumor cell nuclei are not immunoreactive for OLIG2, and dot-like…",
    ],
    molecular: [
      "Myxopapillary ependymomas with a classic morphology are easily recognized, but these tumors also have a unique DNA methylation profile . However, tumors with the histopathological features of classic ependymoma, particularly lumbosacral lesions with tanycytic or papillary patterns, may also cluster with myxopapillary ependymomas .",
    ],
    differential: [
      "Compare with Supratentorial ependymoma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Supratentorial ependymoma: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei…",
      "Supratentorial ependymoma, ZFTA fusion-positive: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal…",
      "Supratentorial ependymoma, YAP1 fusion-positive: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising…",
      "Posterior fossa ependymoma: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei…",
      "Posterior fossa group A (PFA) ependymoma: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Posterior fossa group B (PFB) ependymoma: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes…",
      "Spinal ependymoma: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and,…",
      "Spinal ependymoma, MYCN-amplified: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei…",
    ],
  },
  {
    name: "Choroid plexus papilloma",
    group: "Choroid Plexus Tumors",
    profile: [
      "Although choroid plexus tumors constitute 0.3–0.8% of all brain tumors overall, they account for 2–4% of those that occur in children aged < 15 years, and for 10–20% of those occurring in the first year of life .",
      "Choroid plexus papillomas are located within the ventricular system where normal choroid plexus can be found.",
      "By blocking cerebrospinal fluid (CSF) pathways, choroid plexus papillomas tend to cause hydrocephalus and increased intracranial pressure.",
    ],
    clue: "Choroid plexus papilloma is an intraventricular papillary neoplasm derived from choroid plexus epithelium, with very low or absent mitotic activity (CNS WHO grade 1).",
    summary:
      "Choroid plexus papilloma is an intraventricular papillary neoplasm derived from choroid plexus epithelium, with very low or absent mitotic activity (CNS WHO grade 1). ICD-O coding 9390/0 Choroid plexus papilloma ICD-11 coding 2A00.22 & XH0RF9 Choroid plexus papilloma & Choroid plexus papilloma, NOS Related terminology None…",
    essential: [
      "Choroid plexus papilloma is an intraventricular papillary neoplasm derived from choroid plexus epithelium, with very low or absent mitotic activity (CNS WHO grade 1).",
      "The well-developed papillary pattern is composed of fibrovascular fronds that are covered by a single layer of uniform cuboidal to columnar epithelial cells with round or oval, monomorphic nuclei.",
    ],
    histology: [
      "The well-developed papillary pattern is composed of fibrovascular fronds that are covered by a single layer of uniform cuboidal to columnar epithelial cells with round or oval, monomorphic nuclei.",
      "The well-developed papillary pattern is composed of fibrovascular fronds that are covered by a single layer of uniform cuboidal to columnar epithelial cells with round or oval, monomorphic nuclei. Mitotic activity is absent or very low: < 1 mitosis/mm2 (equating to < 2 mitoses/10 HPF of 0.23 mm2) .",
      "The well-developed papillary pattern is composed of fibrovascular fronds that are covered by a single layer of uniform cuboidal to columnar epithelial cells with round or oval, monomorphic nuclei. Mitotic activity is absent or very low: < 1 mitosis/mm2 (equating to < 2 mitoses/10 HPF of 0.23 mm2) . Brain invasion with cell clusters or single cells, high cellularity, necrosis, nuclear pleomorphism, and focal blurring…",
    ],
    ihc: [
      "More than 90% of choroid plexus tumors are positive for cytokeratins (usually CK7-positive and CK20-negative), vimentin, and S100 .",
      "More than 90% of choroid plexus tumors are positive for cytokeratins (usually CK7-positive and CK20-negative), vimentin, and S100 . GFAP and EMA may be expressed, but staining is often weak or focal .",
      "More than 90% of choroid plexus tumors are positive for cytokeratins (usually CK7-positive and CK20-negative), vimentin, and S100 . GFAP and EMA may be expressed, but staining is often weak or focal . Membranous staining (mainly) of the apical border for the inward-rectifier potassium channel Kir7.1 is typical for…",
    ],
    molecular: [
      "Choroid plexus papillomas are easily recognized by their histology. Genome-wide chromosomal copy-number analysis can demonstrate characteristic hyperploidy .",
    ],
    differential: [
      "Compare with Atypical choroid plexus papilloma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Atypical choroid plexus papilloma: Atypical choroid plexus papilloma is a choroid plexus papilloma that has increased mitotic activity but does not fulfil the criteria for choroid plexus carcinoma (CNS WHO grade 2).",
      "Choroid plexus carcinoma: Choroid plexus carcinoma (CPC) is a malignant epithelial neoplasm of the choroid plexus that shows at least four of the following five histological features: frequent mitoses, increased…",
    ],
  },
  {
    name: "Atypical choroid plexus papilloma",
    group: "Choroid Plexus Tumors",
    profile: [
      "In two pediatric studies of choroid plexus tumors, patients with atypical choroid plexus papilloma were on average younger (median age: 8 months in one study, 0.84 years in the other) than those with choroid plexus…",
      "Atypical choroid plexus papillomas arise in locations where normal choroid plexus can be found.",
      "Like choroid plexus papillomas, atypical choroid plexus papillomas tend to block cerebrospinal fluid pathways, and patients present with hydrocephalus and raised intracranial pressure.",
    ],
    clue: "Atypical choroid plexus papilloma is a choroid plexus papilloma that has increased mitotic activity but does not fulfil the criteria for choroid plexus carcinoma (CNS WHO grade 2).",
    summary:
      "Atypical choroid plexus papilloma is a choroid plexus papilloma that has increased mitotic activity but does not fulfil the criteria for choroid plexus carcinoma (CNS WHO grade 2). ICD-O coding 9390/1 Atypical choroid plexus papilloma ICD-11 coding 2A00.22 & XH3Y57 Choroid plexus papilloma & Atypical choroid plexus papilloma…",
    essential: [
      "Atypical choroid plexus papilloma is a choroid plexus papilloma that has increased mitotic activity but does not fulfil the criteria for choroid plexus carcinoma (CNS WHO grade 2).",
      "Atypical choroid plexus papilloma is a choroid plexus papilloma with increased mitotic activity.",
    ],
    histology: [
      "Atypical choroid plexus papilloma is a choroid plexus papilloma with increased mitotic activity.",
      "Atypical choroid plexus papilloma is a choroid plexus papilloma with increased mitotic activity. A mitotic count of ≥ 1 mitosis/mm2 (equating to ≥ 2 mitoses/10 HPF of 0.23 mm2) has been used to establish this diagnosis .",
      "Atypical choroid plexus papilloma is a choroid plexus papilloma with increased mitotic activity. A mitotic count of ≥ 1 mitosis/mm2 (equating to ≥ 2 mitoses/10 HPF of 0.23 mm2) has been used to establish this diagnosis . One or two of the following four features may also be present: increased cellularity, nuclear pleomorphism, blurring of the papillary pattern (solid growth), and areas of necrosis; however, these…",
    ],
    ihc: [
      "The expression pattern corresponds to that of choroid plexus papilloma.",
      "The expression pattern corresponds to that of choroid plexus papilloma. Prognostic correlates have been described for various antigens, such as S100, transthyretin, and CD44, but these markers are not helpful in grading choroid plexus tumors in individual cases.",
      "The expression pattern corresponds to that of choroid plexus papilloma. Prognostic correlates have been described for various antigens, such as S100, transthyretin, and CD44, but these markers are not helpful in grading choroid plexus tumors in individual cases. The median Ki-67 index is 9.1% .",
    ],
    molecular: [
      "Atypical choroid plexus papillomas are recognized by their histology. Genome-wide chromosomal copy-number analysis can demonstrate characteristic hyperploidy , which may be helpful in the diagnostic differentiation from choroid plexus carcinomas.",
    ],
    differential: [
      "Compare with Choroid plexus papilloma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Choroid plexus papilloma: Choroid plexus papilloma is an intraventricular papillary neoplasm derived from choroid plexus epithelium, with very low or absent mitotic activity (CNS WHO grade 1).",
      "Choroid plexus carcinoma: Choroid plexus carcinoma (CPC) is a malignant epithelial neoplasm of the choroid plexus that shows at least four of the following five histological features: frequent mitoses, increased…",
    ],
  },
  {
    name: "Choroid plexus carcinoma",
    group: "Choroid Plexus Tumors",
    profile: [
      "In the SEER database, CPCs accounted for 34.4% of choroid plexus tumors .",
      "Most CPCs are located in the lateral ventricles .",
      "CPCs tend to block cerebrospinal fluid pathways and cause symptoms related to hydrocephalus, such as increased intracranial pressure, increased head size, nausea, and vomiting .",
    ],
    clue: "Choroid plexus carcinoma (CPC) is a malignant epithelial neoplasm of the choroid plexus that shows at least four of the following five histological features: frequent mitoses, increased…",
    summary:
      "Choroid plexus carcinoma (CPC) is a malignant epithelial neoplasm of the choroid plexus that shows at least four of the following five histological features: frequent mitoses, increased cellular density, nuclear pleomorphism, blurring of the papillary pattern with poorly structured sheets of tumor cells, and necrotic areas (CNS…",
    essential: [
      "Choroid plexus carcinoma (CPC) is a malignant epithelial neoplasm of the choroid plexus that shows at least four of the following five histological features: frequent mitoses, increased cellular density, nuclear pleomorphism, blurring of the papillary pattern with poorly structured sheets of tumor…",
      "CPCs demonstrate frank signs of malignancy, defined as showing at least four of the following five histological features: increased cellular density; nuclear pleomorphism; blurring of the papillary pattern with poorly structured sheets of tumor cells; necrotic areas; and frequent mitoses, usually > 2.5 mitoses/mm2 (equating to > 5 mitoses/10 HPF of 0.23 mm2) .",
      "CPCs can usually be identified by histological and immunophenotypic analysis.",
    ],
    histology: [
      "CPCs demonstrate frank signs of malignancy, defined as showing at least four of the following five histological features: increased cellular density; nuclear pleomorphism; blurring of the papillary pattern with poorly structured sheets of tumor cells; necrotic areas; and frequent mitoses, usually > 2.5 mitoses/mm2 (equating to > 5 mitoses/10 HPF of 0.23 mm2) .",
      "CPCs demonstrate frank signs of malignancy, defined as showing at least four of the following five histological features: increased cellular density; nuclear pleomorphism; blurring of the papillary pattern with poorly structured sheets of tumor cells; necrotic areas; and frequent mitoses, usually > 2.5 mitoses/mm2 (equating to > 5 mitoses/10 HPF of 0.23 mm2) . Diffuse brain invasion is common.",
      "CPCs demonstrate frank signs of malignancy, defined as showing at least four of the following five histological features: increased cellular density; nuclear pleomorphism; blurring of the papillary pattern with poorly structured sheets of tumor cells; necrotic areas; and frequent mitoses, usually > 2.5 mitoses/mm2 (equating to > 5 mitoses/10 HPF of 0.23 mm2) . Diffuse brain invasion is common.",
    ],
    ihc: [
      "Like choroid plexus papillomas, CPCs express cytokeratins, but they are less frequently positive for S100 and transthyretin.",
      "Like choroid plexus papillomas, CPCs express cytokeratins, but they are less frequently positive for S100 and transthyretin. There is usually no membranous positivity for EMA.",
      "Like choroid plexus papillomas, CPCs express cytokeratins, but they are less frequently positive for S100 and transthyretin. There is usually no membranous positivity for EMA. Distinct membranous staining for the potassium channel Kir7.1 is seen in about 50% of CPCs.",
    ],
    molecular: [
      "CPCs can usually be identified by histological and immunophenotypic analysis. Genome-wide chromosomal copy-number analysis shows complex chromosomal alterations and characteristic hypoploidy , which may be helpful in the diagnostic differentiation from atypical choroid plexus papillomas.",
    ],
    differential: [
      "Compare with Choroid plexus papilloma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Choroid plexus papilloma: Choroid plexus papilloma is an intraventricular papillary neoplasm derived from choroid plexus epithelium, with very low or absent mitotic activity (CNS WHO grade 1).",
      "Atypical choroid plexus papilloma: Atypical choroid plexus papilloma is a choroid plexus papilloma that has increased mitotic activity but does not fulfil the criteria for choroid plexus carcinoma (CNS WHO grade 2).",
    ],
  },
  {
    name: "Medulloblastoma, WNT-activated",
    group: "Medulloblastoma",
    profile: [
      "WNT-activated tumors account for about 10% of all medulloblastomas .",
      "WNT-activated medulloblastomas are located either around the foramen of Luschka, appearing to arise from the brainstem or cerebellum, or in the cerebellar midline, generally contiguous with the brainstem .",
      "Most patients present with symptoms and signs of raised intracranial pressure from non-communicating hydrocephalus due to occlusion of the fourth ventricle by the primary tumor.",
    ],
    clue: "Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
    summary:
      "Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway. ICD-O coding 9475/3 Medulloblastoma, WNT-activated ICD-11 coding 2A00.10 & XH0ZP6 Medulloblastoma of brain & Medulloblastoma, WNT-activated, NOS Related terminology None Subtype(s) None",
    essential: [
      "Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
      "Nearly all WNT-activated medulloblastomas have a classic morphology.",
      "CTNNB1 exon 3 mutations and monosomy 6 on the background of a diploid genome are present in > 80% of WNT-activated medulloblastomas .",
    ],
    histology: [
      "Nearly all WNT-activated medulloblastomas have a classic morphology.",
      "Nearly all WNT-activated medulloblastomas have a classic morphology. Anaplastic WNT-activated tumors have been reported but are rare .",
      "Nearly all WNT-activated medulloblastomas have a classic morphology. Anaplastic WNT-activated tumors have been reported but are rare . Desmoplastic/nodular medulloblastomas do not occur in this group.",
    ],
    ihc: [
      "Activation of the WNT pathway can be demonstrated by universal or patchy β-catenin immunoreactivity in tumor cell nuclei .",
      "Activation of the WNT pathway can be demonstrated by universal or patchy β-catenin immunoreactivity in tumor cell nuclei . Medulloblastomas in other molecular groups show cytoplasmic expression of β-catenin.",
      "Activation of the WNT pathway can be demonstrated by universal or patchy β-catenin immunoreactivity in tumor cell nuclei . Medulloblastomas in other molecular groups show cytoplasmic expression of β-catenin.",
    ],
    molecular: [
      "CTNNB1 exon 3 mutations and monosomy 6 on the background of a diploid genome are present in > 80% of WNT-activated medulloblastomas . These alterations have been used to identify WNT-activated medulloblastomas, but DNA methylation profiling is considered the standard method for determining medulloblastoma group or subgroup status .",
    ],
    differential: [
      "Compare with Medulloblastoma, SHH-activated and TP53-wildtype; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Medulloblastoma, SHH-activated and TP53-wildtype: Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a…",
      "Medulloblastoma, SHH-activated and TP53-mutant: Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant…",
      "Medulloblastoma, non-WNT/non-SHH: Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
      "Medulloblastoma, histologically defined: Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high…",
    ],
  },
  {
    name: "Medulloblastoma, SHH-activated and TP53-wildtype",
    group: "Medulloblastoma",
    profile: [
      "SEER data from 1973–2007 show annual medulloblastoma incidence rates of 6 cases per 1 million children aged 1–9 years and 0.6 cases per 1 million adults aged > 19 years .",
      "SHH-activated medulloblastomas arise in the cerebellar hemisphere or vermis and can sometimes involve both structures.",
      "Most patients present with symptoms and signs of raised intracranial pressure from non-communicating hydrocephalus due to occlusion of the fourth ventricle by the primary tumor.",
    ],
    clue: "Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a…",
    summary:
      "Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a wildtype TP53 gene (CNS WHO grade 4). ICD-O coding 9471/3 Medulloblastoma, SHH-activated and TP53-wildtype ICD-11 coding 2A00.10 & XH9M38…",
    essential: [
      "Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a wildtype TP53 gene (CNS WHO grade 4).",
      "Most SHH-activated and TP53-wildtype medulloblastomas have a desmoplastic/nodular morphology or are MBENs .",
      "DNA methylation profiling is considered the gold-standard method for determining medulloblastoma group or subgroup status .",
    ],
    histology: [
      "Most SHH-activated and TP53-wildtype medulloblastomas have a desmoplastic/nodular morphology or are MBENs .",
      "Most SHH-activated and TP53-wildtype medulloblastomas have a desmoplastic/nodular morphology or are MBENs . Others are classic or large cell / anaplastic, although the latter is rare .",
      "Most SHH-activated and TP53-wildtype medulloblastomas have a desmoplastic/nodular morphology or are MBENs . Others are classic or large cell / anaplastic, although the latter is rare . However, recurrence of desmoplastic/nodular SHH-activated and TP53-wildtype tumors can be associated with transformation to a focal anaplastic morphology .",
    ],
    ihc: [
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) .",
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) . SHH-activated tumors express GAB1.",
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) . SHH-activated tumors express GAB1. Both SHH-activated and WNT-activated medulloblastomas express YAP1, but SHH-activated medulloblastomas do not show nuclear immunoreactivity for…",
    ],
    molecular: [
      "DNA methylation profiling is considered the gold-standard method for determining medulloblastoma group or subgroup status . Array-based DNA methylation analysis, array- and sequencing-based RNA expression analysis, NanoString analysis, and minimal methylation classifier assays have all been used for assignment of molecular group .",
    ],
    differential: [
      "Compare with Medulloblastoma, WNT-activated; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Medulloblastoma, WNT-activated: Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
      "Medulloblastoma, SHH-activated and TP53-mutant: Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant…",
      "Medulloblastoma, non-WNT/non-SHH: Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
      "Medulloblastoma, histologically defined: Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high…",
    ],
  },
  {
    name: "Medulloblastoma, SHH-activated and TP53-mutant",
    group: "Medulloblastoma",
    profile: [
      "SEER data from 1973–2007 show annual medulloblastoma incidence rates of 6 cases per 1 million children aged 1–9 years and 0.6 cases per 1 million adults aged > 19 years .",
      "Insufficient data exist to derive confident conclusions about the localization of TP53-mutant, SHH-activated medulloblastomas.",
      "Most patients present with symptoms and signs of raised intracranial pressure from non-communicating hydrocephalus due to occlusion of the fourth ventricle by the primary tumor.",
    ],
    clue: "Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant…",
    summary:
      "Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant TP53 gene (CNS WHO grade 4). ICD-O coding 9476/3 Medulloblastoma, SHH-activated and TP53-mutant ICD-11 coding 2A00.10 & XH1SH4…",
    essential: [
      "Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant TP53 gene (CNS WHO grade 4).",
      "Diffuse anaplasia accompanied by a substantial large-cell phenotype occurs in approximately 70% of SHH-activated and TP53-mutant medulloblastomas.",
      "SHH-activated medulloblastomas comprise four provisional molecular subgroups (SHH-1, SHH-2, SHH-3, SHH-4), which can be demonstrated by DNA methylation or transcriptome profiling (see #36283Fig. 3.XXX).",
    ],
    histology: [
      "Diffuse anaplasia accompanied by a substantial large-cell phenotype occurs in approximately 70% of SHH-activated and TP53-mutant medulloblastomas.",
      "Diffuse anaplasia accompanied by a substantial large-cell phenotype occurs in approximately 70% of SHH-activated and TP53-mutant medulloblastomas. Other tumors are generally desmoplastic/nodular with focal anaplasia .",
      "Diffuse anaplasia accompanied by a substantial large-cell phenotype occurs in approximately 70% of SHH-activated and TP53-mutant medulloblastomas. Other tumors are generally desmoplastic/nodular with focal anaplasia .",
    ],
    ihc: [
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) .",
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) . SHH-activated tumors express GAB1.",
      "A panel of immunohistochemical markers can be used to identify SHH-activated tumors among medulloblastomas (but not other embryonal tumors) . SHH-activated tumors express GAB1. Both SHH-activated and WNT-activated medulloblastomas express YAP1, but SHH-activated medulloblastomas do not show nuclear immunoreactivity for…",
    ],
    molecular: [
      "SHH-activated medulloblastomas comprise four provisional molecular subgroups (SHH-1, SHH-2, SHH-3, SHH-4), which can be demonstrated by DNA methylation or transcriptome profiling (see #36283Fig. 3.XXX). SHH-activated and TP53-mutant medulloblastomas almost always belong to subgroup SHH-3 .",
    ],
    differential: [
      "Compare with Medulloblastoma, WNT-activated; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Medulloblastoma, WNT-activated: Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
      "Medulloblastoma, SHH-activated and TP53-wildtype: Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a…",
      "Medulloblastoma, non-WNT/non-SHH: Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
      "Medulloblastoma, histologically defined: Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high…",
    ],
  },
  {
    name: "Medulloblastoma, non-WNT/non-SHH",
    group: "Medulloblastoma",
    profile: [
      "Group 3 tumors account for approximately 25% of all medulloblastomas, and for a higher proportion of cases (~40%) in infants.",
      "Non-WNT/non-SHH medulloblastomas arise exclusively in the cerebellum (usually in the midline), and almost always in its inferior portion.",
      "Most patients present with symptoms and signs of raised intracranial pressure from non-communicating hydrocephalus due to occlusion of the fourth ventricle by the primary tumor.",
    ],
    clue: "Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
    summary:
      "Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway. Non-WNT/non-SHH medulloblastomas are classified as group 3 or group 4 tumors and comprise eight molecular subgroups, demonstrated by DNA…",
    essential: [
      "Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
      "Most non-WNT/non-SHH medulloblastomas have a classic morphology.",
      "Analysis of DNA methylation profiles, either alone or in combination with transcriptomic data, has identified molecularly heterogeneous subgroups among group 3 and group 4 medulloblastomas with distinct clinical and genetic associations .",
    ],
    histology: [
      "Most non-WNT/non-SHH medulloblastomas have a classic morphology.",
      "Most non-WNT/non-SHH medulloblastomas have a classic morphology. Such tumors occasionally exhibit areas of Homer Wright (neuroblastic) rosette formation, or a palisading pattern of tumor cell nuclei or even nodule formation, in the absence of desmoplasia (which has been termed “biphasic classic” morphology) .",
      "Most non-WNT/non-SHH medulloblastomas have a classic morphology. Such tumors occasionally exhibit areas of Homer Wright (neuroblastic) rosette formation, or a palisading pattern of tumor cell nuclei or even nodule formation, in the absence of desmoplasia (which has been termed “biphasic classic” morphology) . Large cell / anaplastic tumors can belong to either group 3 or group 4.",
    ],
    ihc: [
      "A panel of immunohistochemical markers can be used to identify non-WNT/non-SHH tumors among medulloblastomas .",
      "A panel of immunohistochemical markers can be used to identify non-WNT/non-SHH tumors among medulloblastomas . Unlike WNT and SHH medulloblastomas, non-WNT/non-SHH tumors do not express YAP1.",
      "A panel of immunohistochemical markers can be used to identify non-WNT/non-SHH tumors among medulloblastomas . Unlike WNT and SHH medulloblastomas, non-WNT/non-SHH tumors do not express YAP1. They do not express GAB1 and show no nuclear immunoreactivity for β-catenin.",
    ],
    molecular: [
      "Analysis of DNA methylation profiles, either alone or in combination with transcriptomic data, has identified molecularly heterogeneous subgroups among group 3 and group 4 medulloblastomas with distinct clinical and genetic associations . A large meta-analysis of 1501 medulloblastomas studied by DNA methylation profiling supports the existence of eight robust group 3 or group 4 subgroups, designated group 3/4 subgroups 1–8…",
    ],
    differential: [
      "Compare with Medulloblastoma, WNT-activated; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Medulloblastoma, WNT-activated: Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
      "Medulloblastoma, SHH-activated and TP53-wildtype: Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a…",
      "Medulloblastoma, SHH-activated and TP53-mutant: Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant…",
      "Medulloblastoma, histologically defined: Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high…",
    ],
  },
  {
    name: "Medulloblastoma, histologically defined",
    group: "Medulloblastoma",
    profile: [
      "Classic medulloblastomas account for 70–80% of all medulloblastomas .",
      "Classic medulloblastomas are typically located in the cerebellar midline, involving the fourth ventricle cavity, with or without close contact with the brainstem.",
      "Most patients present with symptoms and signs of raised intracranial pressure from non-communicating hydrocephalus due to occlusion of the fourth ventricle by the primary tumor.",
    ],
    clue: "Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high…",
    summary:
      "Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high levels of mitotic activity and apoptosis. ICD-O coding 9470/3 Classic medulloblastoma 9471/3 Desmoplastic nodular medulloblastoma 9471/3…",
    essential: [
      "Medulloblastoma is an embryonal neuroepithelial tumor arising in the posterior fossa, histologically characterized by small, poorly differentiated cells with a high N:C ratio and high levels of mitotic activity and apoptosis.",
      "There are four established morphological subtypes of medulloblastoma.",
    ],
    histology: [
      "There are four established morphological subtypes of medulloblastoma.",
      "There are four established morphological subtypes of medulloblastoma. Each of these histologically defined subtypes has particular clinical and molecular associations .",
      "There are four established morphological subtypes of medulloblastoma. Each of these histologically defined subtypes has particular clinical and molecular associations . Architectural and cytological diversity can manifest not only as nodule formation but also as neurocytic or ganglion cell differentiation.",
    ],
    ihc: [
      "Classic medulloblastomas express various nonspecific neural markers, such as CD56 (NCAM1), MAP2, and NSE.",
      "Classic medulloblastomas express various nonspecific neural markers, such as CD56 (NCAM1), MAP2, and NSE. Most cases are immunopositive for synaptophysin and NeuN, but these neuronal markers may also be absent.",
      "Classic medulloblastomas express various nonspecific neural markers, such as CD56 (NCAM1), MAP2, and NSE. Most cases are immunopositive for synaptophysin and NeuN, but these neuronal markers may also be absent. Immunoreactivity for NFPs is very rare.",
    ],
    molecular: [
      "See the sections on section Medulloblastomas, molecularly defined . In most cases, the molecular type of medulloblastoma can be identified by immunohistochemistry, particularly for β-catenin, GAB1, YAP1, OTX2, p75-NGFR, and p53 (see Immunophenotype, above).",
    ],
    differential: [
      "Embryonal tumors with multilayered rosettes and atypical teratoid/rhabdoid tumors may show histomorphological overlap with medulloblastomas. Unlike medulloblastomas, embryonal tumors with multilayered rosettes are typically LIN28A-immunoreactive.",
      "Medulloblastoma, WNT-activated: Medulloblastoma, WNT-activated, is an embryonal tumor arising from the dorsal brainstem demonstrating activation of the WNT signalling pathway.",
      "Medulloblastoma, SHH-activated and TP53-wildtype: Medulloblastoma, SHH-activated and TP53-wildtype, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a…",
      "Medulloblastoma, SHH-activated and TP53-mutant: Medulloblastoma, SHH-activated and TP53-mutant, is an embryonal tumor of the cerebellum demonstrating activation of the sonic hedgehog (SHH) signalling pathway in combination with a mutant…",
      "Medulloblastoma, non-WNT/non-SHH: Medulloblastoma, non-WNT/non-SHH, is an embryonal tumor of the cerebellum without a molecular signature associated with activation of the WNT or sonic hedgehog (SHH) signalling pathway.",
    ],
  },
  {
    name: "Atypical teratoid/rhabdoid tumor",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "In a US study using data from the Central Brain Tumor Registry of the United States (CBTRUS), AT/RTs accounted for 1.6% of all pediatric CNS tumors and for 10.1% of CNS tumors in children aged < 1 year, with an M:F…",
      "AT/RTs occur throughout the neuraxis.",
      "The clinical presentation is variable, depending on the age of the patient and on the location and size of the tumor.",
    ],
    clue: "Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
    summary:
      "Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate along neuroepithelial, epithelial, and mesenchymal lines. Genetically, these tumors are characterized by biallelic inactivation of SMARCB1 (also…",
    essential: [
      "Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate along neuroepithelial, epithelial, and mesenchymal lines.",
      "AT/RTs are heterogeneous tumors that can be difficult to recognize solely on the basis of histopathological findings .",
      "Due to the high risk of germline mutations in the setting of AT/RT, particularly with very young children, molecular analyses of SMARCB1 or SMARCA4 should be performed and genetic counselling and germline analysis recommended.",
    ],
    histology: [
      "AT/RTs are heterogeneous tumors that can be difficult to recognize solely on the basis of histopathological findings .",
      "AT/RTs are heterogeneous tumors that can be difficult to recognize solely on the basis of histopathological findings . Characteristically, a population of rhabdoid cells and variable components with primitive neuroectodermal, mesenchymal, and epithelial features are present.",
      "AT/RTs are heterogeneous tumors that can be difficult to recognize solely on the basis of histopathological findings . Characteristically, a population of rhabdoid cells and variable components with primitive neuroectodermal, mesenchymal, and epithelial features are present. Rhabdoid cells fall along a spectrum from small cells with scant cytoplasm to large, typical rhabdoid cells with eccentrically located nuclei…",
    ],
    ihc: [
      "AT/RTs demonstrate a broad spectrum of immunoreactivities.",
      "AT/RTs demonstrate a broad spectrum of immunoreactivities. Rhabdoid cells characteristically demonstrate expression of EMA, SMA, and vimentin.",
      "AT/RTs demonstrate a broad spectrum of immunoreactivities. Rhabdoid cells characteristically demonstrate expression of EMA, SMA, and vimentin. Immunoreactivity for GFAP, NFP, synaptophysin, and cytokeratins is also commonly observed.",
    ],
    molecular: [
      "Due to the high risk of germline mutations in the setting of AT/RT, particularly with very young children, molecular analyses of SMARCB1 or SMARCA4 should be performed and genetic counselling and germline analysis recommended. SMARCB1 alterations comprise biallelic structural variations, a structural variation combined with a mutation, or compound heterozygous mutations .",
    ],
    differential: [
      "Compare with Cribriform neuroepithelial tumor; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "Cribriform neuroepithelial tumor",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "The median age of 10 children harbouring CRINET was 20 months (range: 10–129 months).",
      "CRINET is located in the vicinity of the fourth, third, or lateral ventricles .",
      "The clinical features of CRINET are nonspecific and related to tumor location.",
    ],
    clue: "Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
    summary:
      "Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear SMARCB1 expression. ICD-O coding None ICD-11 coding 2A00.2Y Other specified tumors of neuroepithelial tissue of brain Related terminology None…",
    essential: [
      "Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear SMARCB1 expression.",
      "CRINET is a highly cellular tumor characterized by the presence of cribriform strands and ribbons.",
    ],
    histology: [
      "CRINET is a highly cellular tumor characterized by the presence of cribriform strands and ribbons.",
      "CRINET is a highly cellular tumor characterized by the presence of cribriform strands and ribbons. In more compact areas, small lumina and true rosettes are also present, but rhabdoid tumor cells showing eosinophilic cytoplasms and eccentric nuclei with prominent nucleoli are not encountered.",
      "CRINET is a highly cellular tumor characterized by the presence of cribriform strands and ribbons. In more compact areas, small lumina and true rosettes are also present, but rhabdoid tumor cells showing eosinophilic cytoplasms and eccentric nuclei with prominent nucleoli are not encountered.",
    ],
    ihc: [
      "Loss of nuclear SMARCB1 protein expression in tumor cells is a feature shared with AT/RT .",
      "Loss of nuclear SMARCB1 protein expression in tumor cells is a feature shared with AT/RT . There is distinct expression of EMA , and there is frequent expression of tyrosinase , MAP2, and synaptophysin as well as vimentin.",
      "Loss of nuclear SMARCB1 protein expression in tumor cells is a feature shared with AT/RT . There is distinct expression of EMA , and there is frequent expression of tyrosinase , MAP2, and synaptophysin as well as vimentin. Expression of S100, GFAP, and cytokeratins is variable .",
    ],
    molecular: ["CRINETs should be assessed for SMARCB1 deficiency."],
    differential: [
      "Compare with Atypical teratoid/rhabdoid tumor; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "Embryonal tumor with multilayered rosettes",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "The true incidence of ETMR is difficult to determine because of its rarity.",
      "Most ETMRs are intracranial; examples in the spinal cord are rare.",
      "ETMRs commonly produce symptoms and signs of raised intracranial pressure (e.g. headache, nausea, vomiting, and visual disturbances).",
    ],
    clue: "A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
    summary:
      "A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true rosettes, ependymoblastoma, or medulloepithelioma – and typically having a C19MC alteration or (rarely) a DICER1 mutation (CNS WHO grade 4). ICD-O…",
    essential: [
      "A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true rosettes, ependymoblastoma, or medulloepithelioma – and typically having a C19MC alteration or (rarely) a DICER1…",
      "By definition, rosettes are a characteristic histological feature of ETMRs.",
      "A limited range of recurrent molecular alterations is displayed by ETMRs.",
    ],
    histology: [
      "By definition, rosettes are a characteristic histological feature of ETMRs.",
      "By definition, rosettes are a characteristic histological feature of ETMRs. They are multilayered structures consisting of embryonal cells in a pseudostratified neuroepithelium with a central round or slit-like lumen.",
      "By definition, rosettes are a characteristic histological feature of ETMRs. They are multilayered structures consisting of embryonal cells in a pseudostratified neuroepithelium with a central round or slit-like lumen. The cells facing the lumen have a defined apical surface, with a prominent internal limiting membrane.",
    ],
    ihc: [
      "Most of the embryonal component of ETMR (the rosettes and tubular structures) is intensely immunoreactive for nestin and vimentin .",
      "Most of the embryonal component of ETMR (the rosettes and tubular structures) is intensely immunoreactive for nestin and vimentin . Embryonal cells and rosettes may also show focal expression of cytokeratins (particularly in the medulloepithelioma pattern), EMA, and CD99, but they are usually negative for neuronal and glial…",
      "Most of the embryonal component of ETMR (the rosettes and tubular structures) is intensely immunoreactive for nestin and vimentin . Embryonal cells and rosettes may also show focal expression of cytokeratins (particularly in the medulloepithelioma pattern), EMA, and CD99, but they are usually negative for neuronal and glial…",
    ],
    molecular: [
      "A limited range of recurrent molecular alterations is displayed by ETMRs. To date, structural variants of the C19MC microRNA cluster at 19q13.42 have been found only in ETMRs, occurring in approximately 90% of cases.",
    ],
    differential: [
      "Intraocular medulloepithelioma and sacrococcygeal ependymoblastoma share some histopathological features with CNS ETMR but harbour striking molecular differences and consequently deserve a separate nosological designation.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "CNS neuroblastoma, FOXR2-activated",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "FOXR2-activated CNS neuroblastoma is a rare, recently described tumor, and epidemiological data are incomplete.",
      "FOXR2-activated CNS neuroblastoma is typically located in the cerebral hemisphere, with intraventricular location observed in occasional cases .",
      "Clinical data on FOXR2-activated CNS neuroblastoma, as diagnosed by current molecular criteria, are limited.",
    ],
    clue: "CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
    summary:
      "CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich stroma. It is characterized by activation of the transcription factor FOXR2 by structural rearrangements (CNS WHO grade 4).",
    essential: [
      "CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich stroma.",
      "In many microscopic regions, FOXR2-activated CNS neuroblastoma consists of sheets of poorly differentiated cells with a high N:C ratio; round, oval, or angulated hyperchromatic nuclei; and abundant mitotic activity.",
      "Structural rearrangements of FOXR2 are frequent and usually complex, requiring next-generation sequencing methods for detection.",
    ],
    histology: [
      "In many microscopic regions, FOXR2-activated CNS neuroblastoma consists of sheets of poorly differentiated cells with a high N:C ratio; round, oval, or angulated hyperchromatic nuclei; and abundant mitotic activity.",
      "In many microscopic regions, FOXR2-activated CNS neuroblastoma consists of sheets of poorly differentiated cells with a high N:C ratio; round, oval, or angulated hyperchromatic nuclei; and abundant mitotic activity. Infiltration of adjacent CNS parenchyma is variable.",
      "In many microscopic regions, FOXR2-activated CNS neuroblastoma consists of sheets of poorly differentiated cells with a high N:C ratio; round, oval, or angulated hyperchromatic nuclei; and abundant mitotic activity. Infiltration of adjacent CNS parenchyma is variable. Areas of necrosis are common.",
    ],
    ihc: [
      "Most cells in FOXR2-activated CNS neuroblastomas strongly express OLIG2.",
      "Most cells in FOXR2-activated CNS neuroblastomas strongly express OLIG2. Immunoreactivity for synaptophysin can be found in some embryonal cells, but its expression is accentuated in regions of neurocytic or ganglion cell differentiation .",
      "Most cells in FOXR2-activated CNS neuroblastomas strongly express OLIG2. Immunoreactivity for synaptophysin can be found in some embryonal cells, but its expression is accentuated in regions of neurocytic or ganglion cell differentiation . Immunoreactivities for GFAP and vimentin are generally absent, although staining for the…",
    ],
    molecular: [
      "Structural rearrangements of FOXR2 are frequent and usually complex, requiring next-generation sequencing methods for detection. Furthermore, alterations affecting the FOXR2 locus on chromosome Xp11.21 may be visible by copy-number analysis.",
    ],
    differential: [
      "Compare with Atypical teratoid/rhabdoid tumor; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "CNS tumor with BCOR internal tandem duplication",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "Limited data are available, but the median age at presentation of reported patients is 3.5 years (range: 0–22 years), with a balanced M:F ratio .",
      "CNS tumor with BCOR ITD most commonly occurs in a cerebral or cerebellar hemisphere.",
      "The clinical presentation is based on the location of the tumor and encompasses symptoms of raised intracranial pressure (e.g. headache, vomiting, nausea, visual disturbances), focal neurological deficits, and seizures.",
    ],
    clue: "CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
    summary:
      "CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval nuclei, a dense capillary network, focal pseudorosette formation, and an ITD in exon 15 of the BCOR gene. ICD-O coding 9500/3 CNS tumor…",
    essential: [
      "CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval nuclei, a dense capillary network, focal pseudorosette formation, and an ITD in exon 15 of the BCOR gene.",
      "CNS tumors with BCOR ITD are generally demarcated at the interface with adjacent CNS parenchyma, although infiltration of the brain may sometimes occur .",
      "The defining diagnostic finding is a heterozygous ITD in exon 15 of the BCOR gene.",
    ],
    histology: [
      "CNS tumors with BCOR ITD are generally demarcated at the interface with adjacent CNS parenchyma, although infiltration of the brain may sometimes occur .",
      "CNS tumors with BCOR ITD are generally demarcated at the interface with adjacent CNS parenchyma, although infiltration of the brain may sometimes occur . Histological features can be variable .",
      "CNS tumors with BCOR ITD are generally demarcated at the interface with adjacent CNS parenchyma, although infiltration of the brain may sometimes occur . Histological features can be variable . Tumors are generally composed of uniform oval or spindle-shaped cells, with round or oval nuclei showing a delicate chromatin pattern.",
    ],
    ihc: [
      "In the immunohistochemical assessment of CNS tumors with BCOR ITD, expression of vimentin and CD56 is universal.",
      "In the immunohistochemical assessment of CNS tumors with BCOR ITD, expression of vimentin and CD56 is universal. A few tumor cells can be immunopositive for OLIG2, GFAP, or S100 , but their widespread expression, as found in gliomas, is absent.",
      "In the immunohistochemical assessment of CNS tumors with BCOR ITD, expression of vimentin and CD56 is universal. A few tumor cells can be immunopositive for OLIG2, GFAP, or S100 , but their widespread expression, as found in gliomas, is absent. Perivascular pseudorosettes are GFAP-negative, unlike in ependymomas.",
    ],
    molecular: [
      "The defining diagnostic finding is a heterozygous ITD in exon 15 of the BCOR gene. This BCOR ITD appears to be mutually exclusive with BCOR or BCORL1 fusions and hotspot mutations in H3 or IDH genes (as found in infiltrating gliomas), ZFTA (C11orf95) or YAP1 fusions (as found in supratentorial ependymomas), or alterations in FOXR2 or MN1 (as found in other neuroepithelial tumors) .",
    ],
    differential: [
      "Compare with Atypical teratoid/rhabdoid tumor; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "CNS embryonal tumor NEC/NOS",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "Shifting diagnostic criteria and nomenclature complicate analysis of the epidemiology of the spectrum of CNS embryonal tumors.",
      "CNS embryonal tumors occur throughout the neuraxis, but most are supratentorial.",
      "Patients with CNS embryonal tumors generally present acutely with symptoms and signs of raised intracranial pressure, epilepsy, or focal neurological deficit.",
    ],
    clue: "CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
    summary:
      "CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly defined CNS embryonal tumors (not elsewhere classified; NEC) or not susceptible to further analysis (not otherwise specified; NOS). ICD-O…",
    essential: [
      "CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly defined CNS embryonal tumors (not elsewhere classified; NEC) or not susceptible to further analysis (not…",
      "CNS embryonal tumors are characterized by sheets of densely packed, immature cells that have a high N:C ratio and round, oval, or angulated hyperchromatic nuclei.",
      "CNS embryonal tumor NEC/NOS shares a morphology and immunophenotype with many other poorly differentiated embryonal tumors and high-grade gliomas and is a diagnosis of exclusion, pending a greater understanding of the molecular alterations that characterize this heterogeneous group of tumors.",
    ],
    histology: [
      "CNS embryonal tumors are characterized by sheets of densely packed, immature cells that have a high N:C ratio and round, oval, or angulated hyperchromatic nuclei.",
      "CNS embryonal tumors are characterized by sheets of densely packed, immature cells that have a high N:C ratio and round, oval, or angulated hyperchromatic nuclei. Foci of neurocytic or ganglion cell differentiation can be present.",
      "CNS embryonal tumors are characterized by sheets of densely packed, immature cells that have a high N:C ratio and round, oval, or angulated hyperchromatic nuclei. Foci of neurocytic or ganglion cell differentiation can be present. Mitotic activity is typically high.",
    ],
    ihc: [
      "The neoplastic cells in CNS embryonal tumors are variably immunopositive for synaptophysin and OLIG2.",
      "The neoplastic cells in CNS embryonal tumors are variably immunopositive for synaptophysin and OLIG2. They demonstrate a high Ki-67 proliferation index.",
      "The neoplastic cells in CNS embryonal tumors are variably immunopositive for synaptophysin and OLIG2. They demonstrate a high Ki-67 proliferation index. GFAP and vimentin are generally absent, although staining for the former can pick out reactive astrocytes.",
    ],
    molecular: [
      "CNS embryonal tumor NEC/NOS shares a morphology and immunophenotype with many other poorly differentiated embryonal tumors and high-grade gliomas and is a diagnosis of exclusion, pending a greater understanding of the molecular alterations that characterize this heterogeneous group of tumors. Examples with rare gene fusions are emerging, such as tumors with a BRD4::CREBBP fusion or ganglioneuroblastomas with a MYO5A::NTRK3…",
    ],
    differential: [
      "The differential diagnosis of CNS embryonal tumors encompasses many poorly differentiated embryonal tumors and high-grade gliomas with specific molecular alterations. Just a few examples are FOXR2-activated CNS neuroblastoma, atypical teratoid/rhabdoid tumor, and H3 G34–mutant diffuse hemispheric glioma, all of which can have similar morphological features, especially in limited biopsies.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "Pineoblastoma: Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    ],
  },
  {
    name: "Pineoblastoma",
    group: "Other CNS Embryonal Tumors",
    profile: [
      "Pineoblastomas account for approximately 35% of all pineal parenchymal tumors .",
      "Pineoblastomas are found in the pineal region.",
      "The clinical presentation is similar to that of other tumors of the pineal parenchyma (see the section Pineocytoma in the Central Nervous System Tumors volume).",
    ],
    clue: "Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
    summary:
      "Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4). ICD-O coding 9362/3 Pineoblastoma 9362/3 Pineoblastoma, miRNA processing-altered_1 9362/3 Pineoblastoma, miRNA processing-altered_2 9362/3 Pineoblastoma, RB1-altered (pineal retinoblastoma) 9362/3…",
    essential: [
      "Pineoblastoma is a poorly differentiated cellular embryonal neoplasm arising in the pineal parenchyma (CNS WHO grade 4).",
      "Pineoblastomas resemble other embryonal tumors of the CNS and are composed of highly cellular, patternless sheets of densely packed small cells.",
      "Copy-number alterations and/or mutually exclusive mutations targeting DICER1, DROSHA, or DGCR8 have been described .",
    ],
    histology: [
      "Pineoblastomas resemble other embryonal tumors of the CNS and are composed of highly cellular, patternless sheets of densely packed small cells.",
      "Pineoblastomas resemble other embryonal tumors of the CNS and are composed of highly cellular, patternless sheets of densely packed small cells. The cells feature somewhat irregular nuclear shapes, a high N:C ratio, hyperchromatic nuclei with an occasional small nucleolus, scant cytoplasm, and indistinct cell borders.",
      "Pineoblastomas resemble other embryonal tumors of the CNS and are composed of highly cellular, patternless sheets of densely packed small cells. The cells feature somewhat irregular nuclear shapes, a high N:C ratio, hyperchromatic nuclei with an occasional small nucleolus, scant cytoplasm, and indistinct cell borders. The diffuse growth pattern is interrupted only by occasional rosettes.",
    ],
    ihc: [
      "Pineoblastomas stain positively for synaptophysin and NSE.",
      "Pineoblastomas stain positively for synaptophysin and NSE. Staining for NFP and chromogranin A is less frequent than in pineocytomas .",
      "Pineoblastomas stain positively for synaptophysin and NSE. Staining for NFP and chromogranin A is less frequent than in pineocytomas . SMARCB1 staining is consistently retained .",
    ],
    molecular: [
      "Copy-number alterations and/or mutually exclusive mutations targeting DICER1, DROSHA, or DGCR8 have been described . DNA methylation profiling segregates pineoblastoma into four molecular subgroups showing distinct genetic and clinical features : Pineoblastoma, miRNA processing-altered_1 arises in children and is characterized by copy-number alterations and/or mutually exclusive mutations targeting DICER1, DROSHA, or DGCR8,…",
    ],
    differential: [
      "The histopathology of pineoblastomas is not distinctive, as they are composed of sheets of poorly differentiated embryonal neoplastic cells. Confirming the location of the tumor in the pineal region is thus a first critical step in ruling out other non-pineal embryonal tumors, especially medulloblastomas.",
      "Atypical teratoid/rhabdoid tumor: Atypical teratoid/rhabdoid tumor (AT/RT) is a high-grade malignancy composed of poorly differentiated cells and a variable number of rhabdoid cells, with the potential to differentiate…",
      "Cribriform neuroepithelial tumor: Cribriform neuroepithelial tumor (CRINET) is provisionally defined as a non-rhabdoid neuroectodermal tumor characterized by cribriform strands and ribbons, and showing loss of nuclear…",
      "Embryonal tumor with multilayered rosettes: A CNS embryonal tumor with multilayered rosettes (ETMR) is an embryonal neoplasm conforming to one of three morphological patterns – embryonal tumor with abundant neuropil and true…",
      "CNS neuroblastoma, FOXR2-activated: CNS neuroblastoma, FOXR2-activated, is an embryonal neoplasm exhibiting varying degrees of neuroblastic and/or neuronal differentiation, including foci of ganglion cells and neuropil-rich…",
      "CNS tumor with BCOR internal tandem duplication: CNS tumor with BCOR internal tandem duplication (ITD) is a malignant CNS tumor characterized by a predominantly solid growth pattern, uniform oval or spindle-shaped cells with round to oval…",
      "CNS embryonal tumor NEC/NOS: CNS embryonal tumor NEC/NOS is a tumor arising in the CNS with embryonal morphology and immunophenotype and either lacking an alteration that would classify it as one of the molecularly…",
    ],
  },
  {
    name: "Diffuse meningeal melanocytic neoplasms: Melanocytosis and melanomatosis",
    group: "Pineal Tumors",
    profile: [
      "Diffuse meningeal melanocytic neoplasms are rare, so a population-based incidence is difficult to estimate.",
      "Meningeal melanocytosis and melanomatosis involve the leptomeninges, often extending into Virchow–Robin spaces.",
      "Neurological symptoms associated with meningeal melanocytosis or melanomatosis arise secondarily to either hydrocephalus or local effects on the CNS parenchyma.",
    ],
    clue: "Meningeal melanocytosis is a diffuse or multifocal meningeal proliferation of cytologically bland melanocytic cells that arises from leptomeningeal melanocytes.",
    summary:
      "Meningeal melanocytosis is a diffuse or multifocal meningeal proliferation of cytologically bland melanocytic cells that arises from leptomeningeal melanocytes. Meningeal melanomatosis is a diffuse or multifocal meningeal proliferation of melanoma cells that arises from leptomeningeal melanocytes and often shows CNS invasion.",
    essential: [
      "Meningeal melanocytosis is a diffuse or multifocal meningeal proliferation of cytologically bland melanocytic cells that arises from leptomeningeal melanocytes.",
      "The pathological proliferation of leptomeningeal melanocytes and their production of melanin account for the main microscopic findings in meningeal melanocytosis and melanomatosis.",
      "See the section Circumscribed meningeal melanocytic neoplasms: Melanocytoma and melanoma in the Central Nervous System Tumors volume.",
    ],
    histology: [
      "The pathological proliferation of leptomeningeal melanocytes and their production of melanin account for the main microscopic findings in meningeal melanocytosis and melanomatosis.",
      "The pathological proliferation of leptomeningeal melanocytes and their production of melanin account for the main microscopic findings in meningeal melanocytosis and melanomatosis. The tumor cells may assume a variety of shapes, including spindled, round, oval, and cuboidal.",
      "The pathological proliferation of leptomeningeal melanocytes and their production of melanin account for the main microscopic findings in meningeal melanocytosis and melanomatosis. The tumor cells may assume a variety of shapes, including spindled, round, oval, and cuboidal. In meningeal melanocytosis, individual cells are cytologically bland and accumulate within the subarachnoid and Virchow–Robin spaces.",
    ],
    ihc: [],
    molecular: [
      "See the section Circumscribed meningeal melanocytic neoplasms: Melanocytoma and melanoma in the Central Nervous System Tumors volume. Mutation and DNA methylation profile analyses often help distinguish metastatic cutaneous melanoma from primary meningeal melanocytic tumors.",
    ],
    differential: [],
  },
  {
    name: "Pituitary adenoma / pituitary neuroendocrine tumor",
    group: "Meningeal Melanocytic Tumors",
    profile: [
      "Pituitary adenomas / PitNETs are identified incidentally in up to 20% of the population .",
      "These tumors are usually identified in the sellar region, often with suprasellar extension, but ectopic locations include the sphenoid sinus, and rare clival and suprasellar tumors have also been described .",
      "Pituitary adenomas / PitNETs have a spectrum of clinical features.",
    ],
    clue: "Pituitary adenoma / pituitary neuroendocrine tumor (PitNET) is a clonal neoplastic proliferation of anterior pituitary hormone–producing cells.",
    summary:
      "Pituitary adenoma / pituitary neuroendocrine tumor (PitNET) is a clonal neoplastic proliferation of anterior pituitary hormone–producing cells. ICD-O coding 8272/3 Pituitary adenoma / pituitary neuroendocrine tumor (PitNET) 8272/3 Densely granulated somatotroph tumor 8272/3 Sparsely granulated somatotroph tumor 8271/3 Sparsely…",
    essential: [
      "Pituitary adenoma / pituitary neuroendocrine tumor (PitNET) is a clonal neoplastic proliferation of anterior pituitary hormone–producing cells.",
      "Pituitary adenomas / PitNETs are generally monomorphic, with cells arranged in a variety of histological patterns, including diffuse, papillary, and trabecular arrangements.",
    ],
    histology: [
      "Pituitary adenomas / PitNETs are generally monomorphic, with cells arranged in a variety of histological patterns, including diffuse, papillary, and trabecular arrangements.",
      "Pituitary adenomas / PitNETs are generally monomorphic, with cells arranged in a variety of histological patterns, including diffuse, papillary, and trabecular arrangements. Cytologically, tumor cells may be acidophilic, basophilic, or chromophobic; however, these tinctorial characteristics are nonspecific.",
      "Pituitary adenomas / PitNETs are generally monomorphic, with cells arranged in a variety of histological patterns, including diffuse, papillary, and trabecular arrangements. Cytologically, tumor cells may be acidophilic, basophilic, or chromophobic; however, these tinctorial characteristics are nonspecific. Cells may show densely or sparsely granulated cytoplasm according to the tumor subtype (see Histopathological…",
    ],
    ihc: [],
    molecular: [
      "Pituitary adenomas / PitNETs do not yet have specific molecular characteristics that are applied to routine diagnostic algorithms (see Prognosis and prediction, below, for prognostic biomarkers).",
    ],
    differential: [
      "Tumor metastases to the sellar region, such as carcinomas (especially breast and lung) and neuroendocrine tumors, can mimic pituitary adenomas / PitNETs. Metastases are immunonegative for pituitary transcription factors, with the exception of ER, GATA3, and SF1, which can be expressed in some metastatic carcinomas .",
    ],
  },
  {
    name: "Pituitary blastoma",
    group: "Sellar Region Tumors",
    profile: [
      "Pituitary blastoma is an extremely rare tumor, with fewer than 20 published cases.",
      "Pituitary blastoma originates within the sellar region and frequently extends into the suprasellar region and invades the cavernous sinus .",
      "Cushing syndrome is one of the most common presenting symptoms; the elevated and non-suppressible serum ACTH level is due to its overexpression by tumor cells .",
    ],
    clue: "Pituitary blastoma is an embryonal neoplasm of the sellar region, composed of primitive blastemal cells, neuroendocrine cells, and Rathke pouch epithelium.",
    summary:
      "Pituitary blastoma is an embryonal neoplasm of the sellar region, composed of primitive blastemal cells, neuroendocrine cells, and Rathke pouch epithelium. ICD-O coding 8273/3 Pituitary blastoma ICD-11 coding 2D12.Y & XH5QV8 Other specified malignant neoplasms of other endocrine glands or related structures & Pituitary blastoma…",
    essential: [
      "Pituitary blastoma is an embryonal neoplasm of the sellar region, composed of primitive blastemal cells, neuroendocrine cells, and Rathke pouch epithelium.",
      "Pituitary blastomas are composed of three cellular components: (1) large, anterior pituitary neuroendocrine cells arranged in lobules or diffuse sheets; (2) cuboidal or columnar primitive Rathke pouch epithelium with rosette or gland/follicle formation; and (3) small undifferentiated blastemal cells .",
    ],
    histology: [
      "Pituitary blastomas are composed of three cellular components: (1) large, anterior pituitary neuroendocrine cells arranged in lobules or diffuse sheets; (2) cuboidal or columnar primitive Rathke pouch epithelium with rosette or gland/follicle formation; and (3) small undifferentiated blastemal cells .",
      "Pituitary blastomas are composed of three cellular components: (1) large, anterior pituitary neuroendocrine cells arranged in lobules or diffuse sheets; (2) cuboidal or columnar primitive Rathke pouch epithelium with rosette or gland/follicle formation; and (3) small undifferentiated blastemal cells . Ultrastructurally, pituitary blastomas resemble fetal pituitary gland of 10–12 weeks, but they are distinguished by…",
      "Pituitary blastomas are composed of three cellular components: (1) large, anterior pituitary neuroendocrine cells arranged in lobules or diffuse sheets; (2) cuboidal or columnar primitive Rathke pouch epithelium with rosette or gland/follicle formation; and (3) small undifferentiated blastemal cells . Ultrastructurally, pituitary blastomas resemble fetal pituitary gland of 10–12 weeks, but they are distinguished by…",
    ],
    ihc: [],
    molecular: [
      "DICER1 variants may be considered a diagnostic molecular marker of pituitary blastoma. Germline and tumor sequencing should be performed.",
    ],
    differential: [
      "Compare with Adamantinomatous craniopharyngioma; integrate the defining morphology, anatomic site, immunophenotype, and entity-specific molecular alteration.",
      "Adamantinomatous craniopharyngioma: Adamantinomatous craniopharyngioma is a mixed solid and cystic squamous epithelial tumor with stellate reticulum and wet keratin, usually localized to the hypothalamic–pituitary axis and…",
    ],
  },
  {
    name: "Adamantinomatous craniopharyngioma",
    group: "Sellar Region Tumors",
    profile: [
      "Craniopharyngiomas constitute 1.2–4.6% of all intracranial tumors, with an incidence of 0.5–2.5 cases per 1 million person-years .",
      "Adamantinomatous craniopharyngiomas arise anywhere along the craniopharyngeal canal, but most occur in the sellar and infundibulotuberal region .",
      "Craniopharyngiomas are rarely detected incidentally (in < 2% of cases) .",
    ],
    clue: "Adamantinomatous craniopharyngioma is a mixed solid and cystic squamous epithelial tumor with stellate reticulum and wet keratin, usually localized to the hypothalamic–pituitary axis and…",
    summary:
      "Adamantinomatous craniopharyngioma is a mixed solid and cystic squamous epithelial tumor with stellate reticulum and wet keratin, usually localized to the hypothalamic–pituitary axis and characterized by activating CTNNB1 mutations. ICD-O coding 9351/1 Adamantinomatous craniopharyngioma ICD-11 coding 2F7A.Y & XH15X9 Other…",
    essential: [
      "Adamantinomatous craniopharyngioma is a mixed solid and cystic squamous epithelial tumor with stellate reticulum and wet keratin, usually localized to the hypothalamic–pituitary axis and characterized by activating CTNNB1 mutations.",
      "The well-differentiated tumor epithelium forms cords, lobules, ribbons, nodular whorls, and irregular trabeculae.",
      "Demonstration of CTNNB1 mutation, as well as an absence of BRAF p.V600E, may be helpful in selected cases.",
    ],
    histology: [
      "The well-differentiated tumor epithelium forms cords, lobules, ribbons, nodular whorls, and irregular trabeculae.",
      "The well-differentiated tumor epithelium forms cords, lobules, ribbons, nodular whorls, and irregular trabeculae. Peripheral crowding and palisading are prominent.",
      "The well-differentiated tumor epithelium forms cords, lobules, ribbons, nodular whorls, and irregular trabeculae. Peripheral crowding and palisading are prominent. Degenerative features such as fibrosis, calcification, and nodules/whorls of anucleate remnants of ghost-like squamous cells (termed “wet keratin”) are common.",
    ],
    ihc: [
      "p63 is expressed in all epithelial layers of adamantinomatous craniopharyngiomas ; high–molecular weight cytokeratins (34βE12 [K903], CK5/6) and low- to intermediate-molecular-weight cytokeratins (CK7, CK17, and CK19) are also expressed .",
      "p63 is expressed in all epithelial layers of adamantinomatous craniopharyngiomas ; high–molecular weight cytokeratins (34βE12 [K903], CK5/6) and low- to intermediate-molecular-weight cytokeratins (CK7, CK17, and CK19) are also expressed . In contrast to Rathke cleft cysts, craniopharyngiomas in some studies lack CK8 and CK20…",
      "p63 is expressed in all epithelial layers of adamantinomatous craniopharyngiomas ; high–molecular weight cytokeratins (34βE12 [K903], CK5/6) and low- to intermediate-molecular-weight cytokeratins (CK7, CK17, and CK19) are also expressed . In contrast to Rathke cleft cysts, craniopharyngiomas in some studies lack CK8 and CK20…",
    ],
    molecular: [
      "Demonstration of CTNNB1 mutation, as well as an absence of BRAF p.V600E, may be helpful in selected cases.",
    ],
    differential: [
      "The differential diagnosis includes papillary craniopharyngioma, xanthogranuloma, Rathke cleft cyst, epidermoid and dermoid cysts, and pilocytic astrocytoma. Xanthogranuloma of the sellar region is a reactive lesion resulting from leakage, rupture, or hemorrhage of a Rathke cleft cyst, indicated by strips of columnar or ciliated columnar epithelium in the resected material .",
      "Pituitary blastoma: Pituitary blastoma is an embryonal neoplasm of the sellar region, composed of primitive blastemal cells, neuroendocrine cells, and Rathke pouch epithelium.",
    ],
  },
];

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-5">
    <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-900">
      {title}
    </h3>
    {children}
  </section>
);

export default function PediatricCNSTumorsPage() {
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
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const text = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.profile,
          ...e.essential,
          ...e.histology,
          ...e.ihc,
          ...e.molecular,
          ...e.differential,
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All Categories" || e.group === group) &&
          text.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          PathologyGPS · Pediatric Pathology
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Pediatric CNS Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
          Integrated diagnostic reference based on the fifth-edition WHO
          framework. Begin with the tumor family and anatomic compartment, then
          integrate histology, immunophenotype, and defining molecular findings.
          Pediatric-type diffuse gliomas should not be classified using
          adult-type glioma assumptions.
        </p>
      </header>

      <section className="mb-9 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-950">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            A rapid orientation to the entities covered below. Age and site are
            typical patterns, not exclusion criteria.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">WHO group</th>
                <th className="px-4 py-3">Tumor entity</th>
                <th className="px-4 py-3">Clinical / anatomic orientation</th>
                <th className="px-4 py-3">Key diagnostic anchor</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((e) => (
                <tr
                  key={e.name}
                  className="border-t border-slate-100 align-top"
                >
                  <td className="px-4 py-3 font-medium text-slate-700">
                    {e.group}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {e.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {e.profile.slice(0, 2).join(" ") ||
                      "Age and site vary; correlate with imaging and clinical context."}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {e.clue || e.summary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the compartment and site",
              "Separate intra-axial parenchymal, ventricular, leptomeningeal, pineal, sellar, and skull-base lesions. Age and location strongly shape the differential.",
            ],
            [
              "2. Determine the growth pattern",
              "Distinguish diffuse infiltration from circumscribed growth; identify glial, glioneuronal, neuronal, ependymal, embryonal, epithelial, or melanocytic differentiation.",
            ],
            [
              "3. Assess grade-defining morphology",
              "Evaluate mitotic activity, microvascular proliferation, necrosis, anaplasia, and proliferative index in the context of the specific entity.",
            ],
            [
              "4. Apply entity-directed immunohistochemistry",
              "Use lineage markers and surrogate markers such as H3 K27 alteration, β-catenin, INI1/BRG1, BRAF V600E, and pituitary transcription factors as appropriate.",
            ],
            [
              "5. Confirm molecularly defined entities",
              "Use sequencing, fusion testing, copy-number analysis, and DNA methylation profiling when required for an integrated diagnosis.",
            ],
            [
              "6. Consider germline predisposition",
              "Young age, characteristic tumor types, multifocality, and selected molecular findings should prompt appropriate genetic evaluation.",
            ],
          ].map(([h, t]) => (
            <li
              key={h}
              className="rounded-xl border border-teal-100 bg-white p-3"
            >
              <div className="font-semibold text-slate-900">{h}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Critical principle:</strong> For many pediatric CNS tumors,
          morphology alone is insufficient. The final diagnosis may require an
          integrated interpretation of histology, immunophenotype, molecular
          alterations, and DNA methylation class.
        </p>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="cns-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic features
          </label>
          <input
            id="cns-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: H3 K27, BRAF, INI1, methylation, medulloblastoma..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="cns-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Tumor group
          </label>
          <select
            id="cns-group"
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
        <span>
          {filtered.length} of {entities.length} entities
        </span>
        <span>
          Open an entity for diagnostic criteria, morphology, IHC, and
          differentials.
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
                          {(e.profile.length
                            ? e.profile
                            : [
                                "Age, sex distribution, and presentation vary; interpret in the context of the tumor site and imaging.",
                              ]
                          ).map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.essential.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunohistochemistry and Immunophenotype">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.length ? (
                            e.ihc.map((x, j) => <li key={j}>{x}</li>)
                          ) : (
                            <li>
                              No entity-specific immunophenotype is detailed
                              here; select markers according to morphology and
                              differential diagnosis.
                            </li>
                          )}
                        </ul>
                      </Section>
                      {e.molecular.length > 0 && (
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      )}
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, j) => (
                            <div
                              key={j}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                            >
                              <p className="text-sm leading-6 text-slate-700">
                                {d}
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
            No matching diagnoses. Try another search term or tumor group.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Pediatric CNS tumor diagnostic reference. Interpret all
        immunohistochemical and molecular findings in conjunction with
        morphology, age, clinical history, imaging, and tumor location.
      </footer>
    </main>
  );
}
