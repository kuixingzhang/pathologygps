"use client";

import { useMemo, useState } from "react";

type Diff = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Diff[];
  molecular: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Clonal Hematopoiesis (CH / CHIP / VEXAS Syndrome)",
    group: "Myeloid Precursor States",
    clue: "A myeloid-associated somatic clone without unexplained cytopenia or morphologic evidence of a defined myeloid neoplasm is CHIP; cytopenia changes the category to CCUS.",
    summary:
      "Clonal expansion of hematopoietic stem/progenitor cells, ranging from incidental CHIP to inflammatory VEXAS syndrome.",
    clinical: [
      "Usually older adults; prevalence rises substantially after age 65.",
      "Usually incidental, with normal blood counts and no disease-specific symptoms.",
      "VEXAS typically affects older men and causes systemic inflammation involving skin, lungs, vessels, joints, and cartilage, often with cytopenias.",
    ],
    criteria: [
      "CHIP: one or more somatic mutations in recognized myeloid/CH driver genes at VAF ≥2% (≥4% for X-linked mutations in men).",
      "No unexplained cytopenia and no diagnostic morphologic or genetic criteria for a defined myeloid neoplasm.",
      "VEXAS: compatible inflammatory/hematologic phenotype with a somatic UBA1 mutation; vacuoles in myeloid and erythroid precursors are a useful clue, not a stand-alone criterion.",
      "If persistent unexplained cytopenia is present with clonality but without MDS or another defined neoplasm, classify as CCUS rather than CHIP.",
    ],
    histology: [
      "CHIP has no defining marrow morphology; absence of diagnostic features of a myeloid neoplasm is integral.",
      "VEXAS marrow may be hypercellular and show cytoplasmic vacuoles in myeloid and erythroid precursors, often without significant dysplasia.",
      "Vacuoles are not specific and require correlation with UBA1 testing and clinical inflammation.",
    ],
    ihc: [
      "No immunohistochemical or flow-cytometric assay is recommended to establish CHIP.",
      "Use morphology and lineage markers only to investigate a suspected overt neoplasm or an alternative cause of cytopenia.",
    ],
    differential: [
      {
        name: "Clonal Cytopenia of Undetermined Significance (CCUS)",
        distinction:
          "CCUS requires persistent unexplained cytopenia plus a clonal mutation or cytogenetic abnormality; CHIP does not.",
      },
      {
        name: "Myelodysplastic Neoplasm (MDS)",
        distinction:
          "MDS requires qualifying dysplasia, increased blasts, or an MDS-defining genetic abnormality; CHIP lacks diagnostic MDS features.",
      },
      {
        name: "Reactive / age-related marrow changes",
        distinction:
          "Reactive changes lack a demonstrable clonal driver; age alone does not establish CHIP.",
      },
      {
        name: "Systemic Mastocytosis",
        distinction:
          "Mast-cell aggregates and aberrant mast-cell phenotype define mastocytosis; incidental CH mutations may coexist but do not establish it.",
      },
    ],
    molecular: [
      "Common CHIP drivers include DNMT3A, TET2, and ASXL1; higher-risk genes include TP53, SRSF2, SF3B1, U2AF1, IDH1/2, and RUNX1.",
      "VEXAS is associated with acquired UBA1 mutations, commonly affecting the p.Met41 residue.",
      "CHIP is generally defined by VAF ≥2%; for X-linked mutations in males, the threshold is ≥4%.",
    ],
    pitfalls: [
      "A mutation alone does not diagnose MDS.",
      "Do not label a patient with unexplained cytopenia as CHIP; evaluate for CCUS and MDS.",
      "VEXAS can coexist with MDS; diagnose MDS when its criteria are met.",
    ],
  },
  {
    name: "Clonal Cytopenia of Undetermined Significance (CCUS)",
    group: "Myeloid Precursor States",
    clue: "Persistent unexplained cytopenia plus a clonal mutation or cytogenetic abnormality, but no diagnostic MDS morphology or defining neoplasm.",
    summary:
      "A clonal cytopenic state that falls short of criteria for a defined myeloid neoplasm.",
    clinical: [
      "Typically adults, often older; one or more cytopenias persist for approximately 4 months or longer.",
      "May present with anemia, neutropenia, thrombocytopenia, or combinations thereof.",
      "Clinical workup must exclude nutritional, medication-related, infectious, autoimmune, renal, and other causes.",
    ],
    criteria: [
      "One or more persistent, otherwise unexplained cytopenias.",
      "A somatic mutation in a CH/myeloid neoplasia-associated driver gene at VAF ≥2% (≥4% for X-linked mutations in men), or a clonal chromosomal abnormality.",
      "Bone marrow lacks diagnostic features of MDS or another defined myeloid neoplasm.",
      "Dysplasia, if present, is below the diagnostic threshold; blasts are not increased.",
    ],
    histology: [
      "Marrow examination is required to exclude MDS and other causes of cytopenia.",
      "Dysplastic changes may be present but do not reach the required threshold for MDS.",
      "Blasts are not increased; no MDS-defining morphologic pattern is present.",
    ],
    ihc: [
      "No IHC marker establishes CCUS.",
      "Use CD34 or lineage-specific stains when needed to assess blast distribution or clarify an equivocal marrow, not as a substitute for morphology.",
    ],
    differential: [
      {
        name: "Clonal Hematopoiesis / CHIP",
        distinction:
          "CHIP has no unexplained cytopenia; CCUS requires persistent unexplained cytopenia.",
      },
      {
        name: "MDS with Low Blasts",
        distinction:
          "MDS requires qualifying dysplasia, an MDS-defining genetic lesion, or another accepted defining feature; CCUS falls short.",
      },
      {
        name: "Idiopathic Cytopenia of Undetermined Significance (ICUS)",
        distinction:
          "ICUS has persistent unexplained cytopenia without demonstrable clonality.",
      },
      {
        name: "Aplastic Anemia",
        distinction:
          "Aplastic anemia shows hypocellular marrow with markedly reduced hematopoiesis; clonal mutations can occur but do not alone establish CCUS.",
      },
    ],
    molecular: [
      "Detect clonality by sequencing blood or marrow and/or by karyotype, FISH, or validated genomic methods.",
      "Higher-risk mutations include TP53, PPM1D, JAK2, RUNX1, SF3B1, SRSF2, U2AF1, IDH1/2; isolated DNMT3A generally carries lower progression risk.",
    ],
    pitfalls: [
      "Do not diagnose CCUS until common nonclonal causes of cytopenia are excluded.",
      "A low-level mutation must be interpreted in the context of VAF, gene, age, and marrow findings.",
    ],
  },
  {
    name: "Chronic Myeloid Leukemia (CML), BCR::ABL1-Positive",
    group: "Myeloproliferative Neoplasms",
    clue: "Marked granulocytic proliferation with left shift, basophilia, and BCR::ABL1 fusion; granulocytic dysplasia is generally absent in chronic phase.",
    summary: "A BCR::ABL1-driven MPN with chronic and blast phases.",
    clinical: [
      "Usually middle-aged or older adults, with slight male predominance; rare in children.",
      "Often incidental leukocytosis; fatigue, weight loss, night sweats, and splenomegaly may occur.",
      "Blast phase may involve marrow, blood, lymph nodes, skin, bone, or CNS.",
    ],
    criteria: [
      "Demonstrate BCR::ABL1 fusion by karyotype, FISH, or molecular testing.",
      "Chronic phase typically has <10% blasts in blood and marrow; blast phase is ≥20% blasts in blood or marrow, or extramedullary blast proliferation.",
      "The characteristic blood picture is leukocytosis with granulocytes at all stages of maturation and absolute basophilia.",
      "Assess additional chromosomal abnormalities and kinase-domain mutations when clinically indicated.",
    ],
    histology: [
      "Blood: neutrophilic leukocytosis with a full spectrum of granulocytic maturation, often with myelocyte predominance; basophilia and eosinophilia are common.",
      "Marrow: marked hypercellularity with granulocytic hyperplasia, decreased erythropoiesis, and increased small hypolobated 'dwarf' megakaryocytes.",
      "Granulocytic dysplasia should be absent in typical chronic phase.",
      "Blast phase shows sheets or aggregates of blasts; classify lineage by flow cytometry and IHC.",
    ],
    ihc: [
      "CD34 and CD117 help quantify blasts in tissue; MPO supports myeloid differentiation.",
      "TdT, CD10, CD19, and other B-lineage markers are used when lymphoid blast phase is suspected.",
      "Basophils can be highlighted by CD123 or other lineage markers in selected cases.",
    ],
    differential: [
      {
        name: "Chronic Neutrophilic Leukemia (CNL)",
        distinction:
          "CNL has predominantly mature neutrophilia, little left shift, and usually CSF3R mutation; BCR::ABL1 is absent.",
      },
      {
        name: "Chronic Myelomonocytic Leukemia (CMML)",
        distinction:
          "CMML requires persistent absolute and relative monocytosis with dysplasia or clonality; CML usually has granulocytic predominance and BCR::ABL1.",
      },
      {
        name: "Essential Thrombocythemia (ET)",
        distinction:
          "ET is megakaryocyte-predominant with large mature hyperlobulated forms; CML has granulocytic hyperplasia and BCR::ABL1.",
      },
      {
        name: "Reactive leukemoid reaction",
        distinction:
          "Reactive neutrophilia lacks BCR::ABL1 and typically resolves or tracks with the underlying stimulus.",
      },
    ],
    molecular: [
      "BCR::ABL1 is defining; most cases have t(9;22), the Philadelphia chromosome.",
      "Monitor transcript burden by quantitative PCR; ABL1 kinase-domain mutations can mediate TKI resistance.",
      "Additional abnormalities such as +8, +19, i(17q), −7, or MECOM rearrangement may signal clonal evolution.",
    ],
  },
  {
    name: "Chronic Neutrophilic Leukemia (CNL)",
    group: "Myeloproliferative Neoplasms",
    clue: "Persistent mature neutrophilia, segmented/band neutrophils ≥80% of leukocytes, few precursors, and frequent activating CSF3R mutation.",
    summary:
      "A rare MPN characterized by sustained neutrophilic proliferation without significant dysgranulopoiesis.",
    clinical: [
      "Typically older adults; slight male predominance.",
      "Often presents with persistent leukocytosis, splenomegaly, fatigue, or constitutional symptoms.",
      "Exclude reactive neutrophilia and cytokine-producing tumors.",
    ],
    criteria: [
      "Persistent leukocytosis with WBC ≥25 × 10⁹/L in the classic threshold framework; segmented and band neutrophils ≥80% of leukocytes.",
      "Neutrophil precursors are <10%; monocytes <10%; blasts are rare.",
      "Bone marrow shows hypercellularity with granulocytic proliferation and orderly maturation.",
      "Activating CSF3R mutation strongly supports the diagnosis; exclude BCR::ABL1 and other tyrosine kinase fusions.",
    ],
    histology: [
      "Blood: predominantly mature neutrophils, with limited left shift and no significant dysgranulopoiesis.",
      "Marrow: hypercellular with increased granulopoiesis and preserved maturation; erythroid and megakaryocytic compartments are relatively unremarkable.",
      "Significant granulocytic dysplasia argues against CNL and raises MDS/MPN with neutrophilia.",
    ],
    ihc: [
      "MPO highlights granulocytic expansion but is not specific.",
      "CD34-positive blasts should be low; use CD34 to assess suspected blast increase.",
    ],
    differential: [
      {
        name: "CML, BCR::ABL1-positive",
        distinction:
          "CML shows BCR::ABL1, more prominent left shift, basophilia, and dwarf megakaryocytes.",
      },
      {
        name: "MDS/MPN with Neutrophilia",
        distinction:
          "Shows ≥10% immature granulocytes and conspicuous dysgranulopoiesis; CNL has mature neutrophilia and little dysplasia.",
      },
      {
        name: "Reactive neutrophilia",
        distinction:
          "Infection, inflammation, drugs, smoking, or cytokine-producing tumors cause reactive neutrophilia; exclude these clinically.",
      },
      {
        name: "CMML",
        distinction:
          "CMML is defined by persistent monocytosis, not neutrophil-predominant leukocytosis.",
      },
    ],
    molecular: [
      "CSF3R activating mutations, particularly T618I, are characteristic.",
      "SETBP1, ASXL1, and other mutations may occur but are not independently defining.",
    ],
  },
  {
    name: "Chronic Eosinophilic Leukemia (CEL)",
    group: "Myeloproliferative Neoplasms",
    clue: "Persistent eosinophilia with clonal marrow findings and exclusion of tyrosine kinase fusion-associated neoplasms and reactive causes.",
    summary:
      "A clonal eosinophilic MPN; distinguish from hypereosinophilic syndrome and fusion-defined myeloid/lymphoid neoplasms.",
    clinical: [
      "Usually adults; broad age range.",
      "May present with eosinophilia, splenomegaly, constitutional symptoms, or tissue injury involving heart, lung, skin, and gastrointestinal tract.",
      "Organ damage may be driven by eosinophil infiltration and degranulation.",
    ],
    criteria: [
      "Persistent blood eosinophilia (typically ≥1.5 × 10⁹/L) with marrow eosinophilia and evidence of clonality or increased blasts/dysplasia.",
      "Exclude BCR::ABL1 and rearrangements involving PDGFRA, PDGFRB, FGFR1, JAK2, FLT3, and other relevant kinase genes.",
      "Exclude reactive eosinophilia, including parasites, allergy, drugs, autoimmune disease, and solid tumors.",
      "The diagnosis requires integrated clinical, morphologic, cytogenetic, and molecular assessment.",
    ],
    histology: [
      "Marrow is often hypercellular with increased eosinophils at different stages of maturation.",
      "Dysplasia in one or more lineages, abnormal megakaryocytes, fibrosis, or increased blasts may be present.",
      "Eosinophil granule abnormalities and immature forms can be seen but are not specific.",
    ],
    ihc: [
      "MPO highlights myeloid cells; CD34 and CD117 assess blasts.",
      "Use lineage-specific stains and flow cytometry to exclude an associated acute leukemia or lymphoid neoplasm.",
    ],
    differential: [
      {
        name: "Myeloid/Lymphoid Neoplasm with Tyrosine Kinase Gene Fusions",
        distinction:
          "A defining kinase fusion (PDGFRA/B, FGFR1, JAK2, FLT3, ABL1, etc.) assigns a fusion-defined entity rather than CEL.",
      },
      {
        name: "Hypereosinophilic Syndrome",
        distinction:
          "HES is a clinical syndrome of eosinophilia and organ injury without the defining clonal marrow/genetic features of CEL.",
      },
      {
        name: "Reactive eosinophilia",
        distinction:
          "Identify an allergic, infectious, drug-related, autoimmune, or neoplastic driver; marrow lacks a convincing clonal myeloid pattern.",
      },
      {
        name: "CNL",
        distinction:
          "CNL is neutrophil-predominant and often CSF3R-mutated; CEL is eosinophil-predominant.",
      },
    ],
    molecular: [
      "Perform targeted testing for PDGFRA, PDGFRB, FGFR1, JAK2, FLT3, ABL1, and other kinase fusions before diagnosing CEL.",
      "Clonal mutations in myeloid genes support CEL in the appropriate setting but are not individually specific.",
    ],
  },
  {
    name: "Polycythemia Vera (PV)",
    group: "Classical BCR::ABL1-Negative MPNs",
    clue: "Panmyelosis with increased red cell mass/hemoglobin or hematocrit and a JAK2 mutation; serum erythropoietin is usually low.",
    summary:
      "A JAK2-driven MPN characterized by erythrocytosis and trilineage marrow proliferation.",
    clinical: [
      "Usually adults, median age in later adulthood; slight male predominance.",
      "Headache, dizziness, pruritus after bathing, erythromelalgia, thrombosis, or splenomegaly.",
      "Iron deficiency can mask erythrocytosis and produce microcytosis.",
    ],
    criteria: [
      "Elevated hemoglobin/hematocrit or increased red cell mass using current sex-specific thresholds.",
      "Marrow panmyelosis with erythroid, granulocytic, and pleomorphic mature megakaryocytic proliferation.",
      "JAK2 V617F or JAK2 exon 12 mutation.",
      "Subnormal serum erythropoietin is a supportive minor criterion; integrate all criteria and exclude secondary erythrocytosis.",
    ],
    histology: [
      "Marrow is hypercellular for age with trilineage proliferation (panmyelosis).",
      "Erythroid precursors show increased islands and maturation; granulopoiesis is increased.",
      "Megakaryocytes are increased, pleomorphic, mature, and often form loose clusters; nuclei are hyperlobulated.",
      "Reticulin is usually MF-0 or MF-1 at diagnosis; advanced fibrosis suggests post-PV myelofibrosis.",
    ],
    ihc: [
      "CD61/CD42b highlight megakaryocyte number and distribution.",
      "MPO and glycophorin A/CD71 can help demonstrate granulocytic and erythroid expansion.",
      "CD34 helps assess blast increase in suspected progression.",
    ],
    differential: [
      {
        name: "Essential Thrombocythemia",
        distinction:
          "ET shows predominantly megakaryocytic proliferation without PV-type panmyelosis; hemoglobin/hematocrit and red cell mass are not increased.",
      },
      {
        name: "Prefibrotic Primary Myelofibrosis",
        distinction:
          "Pre-PMF shows atypical megakaryocytes with dense clusters and granulocytic proliferation; PV has panmyelosis and mature pleomorphic megakaryocytes.",
      },
      {
        name: "Secondary erythrocytosis",
        distinction:
          "Usually elevated or normal EPO with hypoxia, renal disease, or exogenous EPO; lacks characteristic JAK2-mutated panmyelosis.",
      },
      {
        name: "Masked PV / iron deficiency",
        distinction:
          "Microcytosis may conceal elevated red cell mass; review RBC count, iron studies, JAK2 status, and marrow.",
      },
    ],
    molecular: [
      "JAK2 V617F occurs in the vast majority; JAK2 exon 12 mutations account for most V617F-negative cases.",
      "Additional mutations (TET2, ASXL1, DNMT3A, etc.) may affect progression risk but are not PV-defining.",
    ],
  },
  {
    name: "Essential Thrombocythemia (ET)",
    group: "Classical BCR::ABL1-Negative MPNs",
    clue: "Sustained thrombocytosis with enlarged mature hyperlobulated megakaryocytes and no significant granulocytic/erythroid proliferation or relevant fibrosis.",
    summary:
      "A megakaryocyte-predominant MPN driven commonly by JAK2, CALR, or MPL.",
    clinical: [
      "Usually adults; incidence increases with age and slight female predominance.",
      "May be asymptomatic or present with thrombosis, bleeding, erythromelalgia, or microvascular symptoms.",
      "Splenomegaly is absent or mild in most cases.",
    ],
    criteria: [
      "Platelet count ≥450 × 10⁹/L.",
      "Marrow proliferation mainly of enlarged mature megakaryocytes with hyperlobulated staghorn-like nuclei; no significant increase or left shift of granulopoiesis/erythropoiesis.",
      "No significant reticulin fibrosis (usually MF-0; rarely MF-1).",
      "JAK2, CALR, or MPL mutation, or other evidence of clonality; exclude BCR::ABL1-positive CML, PV, PMF, and reactive thrombocytosis.",
    ],
    histology: [
      "Megakaryocytes are increased, large to giant, with mature hyperlobulated nuclei and abundant cytoplasm.",
      "Megakaryocytes are usually dispersed or in loose clusters; dense atypical clusters are not typical.",
      "Granulopoiesis and erythropoiesis are generally age-appropriate; no significant left shift.",
      "Reticulin is usually MF-0; significant fibrosis or marked granulocytic proliferation argues against ET.",
    ],
    ihc: [
      "CD61 and CD42b highlight megakaryocyte morphology and clustering.",
      "MPO and glycophorin A can help assess whether granulocytic or erythroid proliferation is disproportionate.",
    ],
    differential: [
      {
        name: "PV",
        distinction:
          "PV has panmyelosis and JAK2 mutation with erythrocytosis; ET lacks PV-type erythroid expansion.",
      },
      {
        name: "Prefibrotic PMF",
        distinction:
          "Pre-PMF shows atypical megakaryocytes with bulbous/cloud-like nuclei, dense clusters, and granulocytic proliferation.",
      },
      {
        name: "CML",
        distinction:
          "CML is BCR::ABL1-positive with granulocytic hyperplasia and often dwarf megakaryocytes.",
      },
      {
        name: "Reactive thrombocytosis",
        distinction:
          "Iron deficiency, inflammation, infection, malignancy, or splenectomy can cause thrombocytosis without characteristic clonal megakaryocytic morphology.",
      },
    ],
    molecular: [
      "JAK2 V617F (~50–60%), CALR (~25–35%), or MPL (~5–10%) mutations are common.",
      "CALR type 1-like mutations are relatively enriched in PMF compared with ET; mutation type must be interpreted with morphology.",
    ],
  },
  {
    name: "Primary Myelofibrosis (PMF), Prefibrotic and Overt",
    group: "Classical BCR::ABL1-Negative MPNs",
    clue: "Atypical megakaryocytic proliferation with abnormal dense clustering; prefibrotic PMF has granulocytic proliferation with MF-0/1, while overt PMF has MF-2/3 fibrosis.",
    summary:
      "A clonal MPN with megakaryocytic atypia, progressive marrow fibrosis, extramedullary hematopoiesis, and risk of leukemic transformation.",
    clinical: [
      "Usually older adults; slight male predominance.",
      "Anemia, fatigue, weight loss, night sweats, splenomegaly, and leukoerythroblastosis.",
      "Prefibrotic PMF may present with thrombocytosis and mimic ET.",
    ],
    criteria: [
      "Prefibrotic PMF: megakaryocytic proliferation and atypia, increased age-adjusted cellularity, granulocytic proliferation, and often decreased erythropoiesis; fibrosis MF-0/1.",
      "Overt PMF: megakaryocytic atypia with reticulin and/or collagen fibrosis MF-2/3.",
      "JAK2, CALR, or MPL mutation, or another clonal marker; exclude reactive fibrosis and other myeloid neoplasms.",
      "At least one supporting clinical feature is required, such as anemia, leukocytosis, palpable splenomegaly, elevated LDH, or leukoerythroblastosis, as applicable to the subtype.",
    ],
    histology: [
      "Megakaryocytes show abnormal maturation, bulbous/cloud-like or hypolobated nuclei, irregular chromatin, and abnormal nuclear-to-cytoplasmic ratios.",
      "Dense clusters of atypical megakaryocytes are characteristic; granulocytic proliferation is prominent in prefibrotic disease.",
      "Prefibrotic PMF has MF-0 or MF-1 reticulin; overt PMF has MF-2 or MF-3 reticulin/collagen fibrosis.",
      "Overt disease may show osteosclerosis, intrasinusoidal hematopoiesis, and reduced hematopoietic space.",
    ],
    ihc: [
      "CD61/CD42b highlight atypical megakaryocytes and abnormal clusters.",
      "Reticulin and trichrome stains are essential to grade fibrosis and identify collagen.",
      "CD34 helps assess blasts and abnormal paratrabecular or diffuse blast increase.",
    ],
    differential: [
      {
        name: "ET",
        distinction:
          "ET has mature hyperlobulated megakaryocytes in loose clusters and lacks granulocytic proliferation and significant atypia.",
      },
      {
        name: "PV",
        distinction:
          "PV shows panmyelosis and JAK2-associated erythrocytosis; post-PV MF requires a documented antecedent PV.",
      },
      {
        name: "MDS with Fibrosis",
        distinction:
          "MDS-F often has multilineage dysplasia, ineffective hematopoiesis, and cytogenetic abnormalities; PMF has characteristic megakaryocytic atypia and MPN driver mutations.",
      },
      {
        name: "Secondary myelofibrosis",
        distinction:
          "Exclude autoimmune, infectious, metastatic, and other reactive causes; post-ET/PV MF requires a prior established MPN.",
      },
    ],
    molecular: [
      "JAK2, CALR, or MPL mutations occur in most cases; triple-negative cases require careful exclusion of other entities.",
      "ASXL1, SRSF2, EZH2, IDH1/2, U2AF1, and TP53 mutations may carry adverse prognostic significance.",
    ],
  },
  {
    name: "Juvenile Myelomonocytic Leukemia (JMML)",
    group: "Myeloproliferative Neoplasms",
    clue: "Young child with persistent monocytosis, splenomegaly, circulating myeloid precursors, and RAS-pathway mutation; BCR::ABL1 is absent.",
    summary: "A childhood MPN driven by dysregulated RAS/MAPK signaling.",
    clinical: [
      "Predominantly infants and young children, usually under 5 years.",
      "Fever, pallor, infections, failure to thrive, lymphadenopathy, hepatosplenomegaly, and skin lesions.",
      "Associated with NF1, Noonan syndrome, or germline predisposition in some patients.",
    ],
    criteria: [
      "Persistent peripheral blood monocytosis (absolute monocytes ≥1 × 10⁹/L).",
      "Blasts and promonocytes <20% in blood and marrow.",
      "Splenomegaly and evidence of clonal RAS-pathway activation or characteristic cytogenetic findings.",
      "Exclude BCR::ABL1 and other defining rearrangements; evaluate for NF1 and germline RASopathy.",
    ],
    histology: [
      "Marrow is usually hypercellular with granulocytic and monocytic proliferation; dysplasia may be variable.",
      "Peripheral blood shows monocytosis, immature granulocytes, and often nucleated red cells.",
      "Monocytes may infiltrate skin, liver, spleen, and lymph nodes.",
    ],
    ihc: [
      "CD68, CD163, and lysozyme highlight monocytic differentiation in tissue.",
      "MPO highlights granulocytic cells; CD34 helps assess blast burden.",
    ],
    differential: [
      {
        name: "CMML",
        distinction:
          "JMML occurs in young children and is driven by RAS-pathway lesions; CMML is predominantly an adult disease.",
      },
      {
        name: "Reactive monocytosis",
        distinction:
          "Reactive cases lack the characteristic clonal RAS-pathway lesion and persistent clinical/morphologic pattern.",
      },
      {
        name: "CML",
        distinction:
          "CML is BCR::ABL1-positive and typically shows marked granulocytic left shift rather than the JMML monocytic phenotype.",
      },
      {
        name: "MDS of childhood",
        distinction:
          "Childhood MDS is primarily dysplastic/cytopenic; JMML is proliferative with monocytosis and RAS-pathway activation.",
      },
    ],
    molecular: [
      "Somatic PTPN11, KRAS, NRAS, or CBL mutations and NF1 loss are common; germline variants may underlie predisposition.",
      "A single acquired RAS-pathway mutation is typical; multiple mutations can indicate more aggressive biology.",
    ],
  },
  {
    name: "Myeloproliferative Neoplasm, NOS (MPN-NOS)",
    group: "Myeloproliferative Neoplasms",
    clue: "Convincing clinical, laboratory, marrow, and/or molecular evidence of MPN, but criteria for a specific MPN subtype are not met.",
    summary:
      "A diagnosis of exclusion for an MPN phenotype that cannot be classified as a defined subtype.",
    clinical: [
      "Adults; age and presentation depend on the dominant proliferating lineage.",
      "May show leukocytosis, erythrocytosis, thrombocytosis, splenomegaly, or overlapping features.",
      "Often used when disease is evolving, treatment-altered, or incompletely characterized.",
    ],
    criteria: [
      "Clinical, hematologic, morphologic, and/or molecular findings support an MPN.",
      "Criteria for CML, PV, ET, PMF, CNL, CEL, or another defined entity are not fulfilled.",
      "Exclude reactive processes and MDS/MPN overlap neoplasms.",
    ],
    histology: [
      "Marrow may show mixed or lineage-predominant proliferation that does not meet a specific subtype pattern.",
      "Document cellularity, lineage proportions, megakaryocyte morphology/clustering, fibrosis grade, and blast percentage.",
      "Treatment effect or an evolving phenotype may obscure classification.",
    ],
    ihc: [
      "Use CD34, CD117, MPO, glycophorin A/CD71, CD61/CD42b, and reticulin/trichrome stains according to the morphologic question.",
    ],
    differential: [
      {
        name: "PV, ET, or PMF",
        distinction:
          "Reassess the defining marrow pattern, blood counts, EPO, fibrosis grade, and JAK2/CALR/MPL status.",
      },
      {
        name: "CML",
        distinction: "Exclude BCR::ABL1 by molecular or cytogenetic testing.",
      },
      {
        name: "MDS/MPN",
        distinction:
          "MDS/MPN requires dysplasia and proliferative features at presentation; MPN-NOS lacks a defining overlap category.",
      },
      {
        name: "Reactive myeloproliferation",
        distinction:
          "Exclude infection, inflammation, growth factors, hypoxia, and other secondary drivers.",
      },
    ],
    molecular: [
      "Test JAK2, CALR, MPL, BCR::ABL1, and other mutations/fusions guided by phenotype.",
      "Molecular findings support clonality but do not override defining morphologic criteria for a specific entity.",
    ],
  },
  {
    name: "Cutaneous Mastocytosis",
    group: "Mast Cell Neoplasms",
    clue: "Clonal mast-cell infiltrates confined to skin, with characteristic aggregates or increased mast cells and activating KIT mutation in many cases.",
    summary:
      "A skin-limited mast-cell disorder, most often presenting in childhood.",
    clinical: [
      "Most often infants and young children; adult-onset disease warrants evaluation for systemic mastocytosis.",
      "Maculopapular lesions, urticaria pigmentosa, blistering in infants, pruritus, and Darier sign.",
      "Lesions commonly involve trunk and extremities.",
    ],
    criteria: [
      "Typical clinical cutaneous lesions with increased dermal mast cells.",
      "Demonstrate mast-cell aggregates or increased mast-cell density in the appropriate clinical setting.",
      "Assess for systemic disease when adult onset, mediator symptoms, elevated tryptase, organomegaly, or KIT mutation raises concern.",
    ],
    histology: [
      "Dermis shows increased mast cells, often in perivascular and interstitial aggregates.",
      "Mast cells have round to oval nuclei and abundant granular cytoplasm; epidermal changes may be subtle.",
      "In children, lesions may be more cellular and can show spindled or atypical forms.",
    ],
    ihc: [
      "CD117 and tryptase highlight mast cells.",
      "CD25 and CD2 are usually absent in purely cutaneous mastocytosis; aberrant expression raises concern for systemic disease.",
      "CD30 may be expressed in advanced systemic mastocytosis, not as a routine marker of cutaneous disease.",
    ],
    differential: [
      {
        name: "Systemic Mastocytosis",
        distinction:
          "Systemic disease requires extracutaneous involvement, typically marrow aggregates and/or other WHO criteria; skin findings alone do not establish it.",
      },
      {
        name: "Mast Cell Sarcoma",
        distinction:
          "Mast cell sarcoma is a destructive, cytologically malignant mass with atypia and invasive growth.",
      },
      {
        name: "Urticaria / inflammatory dermatosis",
        distinction:
          "Reactive lesions lack dense clonal mast-cell aggregates and aberrant phenotype.",
      },
    ],
    molecular: [
      "Activating KIT mutations, especially KIT D816V, are common in systemic disease; pediatric cutaneous lesions may have different KIT variants.",
      "KIT testing alone does not distinguish cutaneous from systemic mastocytosis.",
    ],
  },
  {
    name: "Systemic Mastocytosis",
    group: "Mast Cell Neoplasms",
    clue: "Multifocal dense aggregates of ≥15 mast cells in marrow or another extracutaneous organ, with atypical morphology and/or aberrant CD25/CD2/CD30 and KIT mutation.",
    summary:
      "A clonal mast-cell neoplasm involving bone marrow and/or other extracutaneous organs.",
    clinical: [
      "Usually adults; may occur at any age.",
      "Flushing, anaphylaxis, pruritus, gastrointestinal symptoms, osteoporosis, cytopenias, hepatosplenomegaly, and mediator-related symptoms.",
      "Skin lesions may be absent, particularly in advanced disease.",
    ],
    criteria: [
      "Major criterion: multifocal dense aggregates of ≥15 mast cells in marrow or another extracutaneous organ.",
      "Minor criteria include ≥25% atypical/spindled mast cells, KIT activating mutation, aberrant CD25/CD2/CD30, and persistently elevated baseline serum tryptase (with appropriate caveats).",
      "Diagnosis requires the major criterion plus at least one minor, or at least three minor criteria.",
      "Classify subtype and assess B- and C-findings; evaluate associated hematologic neoplasm.",
    ],
    histology: [
      "Marrow shows multifocal dense aggregates of mast cells, often paratrabecular or perivascular.",
      "Neoplastic mast cells are frequently spindle-shaped with eccentric nuclei and hypogranular cytoplasm.",
      "Advanced disease may show diffuse sheets, fibrosis, and associated hematologic neoplasm.",
    ],
    ihc: [
      "CD117 and tryptase are sensitive mast-cell markers.",
      "CD25 and/or CD2 aberrant expression supports clonality; CD30 can be aberrant, particularly in advanced disease.",
      "KIT D816V-specific antibody may be useful but molecular testing is more sensitive.",
    ],
    differential: [
      {
        name: "Cutaneous Mastocytosis",
        distinction:
          "Cutaneous mastocytosis is skin-limited; systemic mastocytosis requires extracutaneous diagnostic criteria.",
      },
      {
        name: "Mast Cell Sarcoma",
        distinction:
          "Sarcoma shows destructive growth and overt cytologic malignancy rather than typical systemic mast-cell aggregates.",
      },
      {
        name: "Reactive mast-cell hyperplasia",
        distinction:
          "Reactive mast cells lack aberrant CD25/CD2 and KIT mutation; aggregates are generally less compact and atypia is absent.",
      },
      {
        name: "MDS with increased mast cells",
        distinction:
          "Determine whether a separate myeloid neoplasm is present; systemic mastocytosis with an associated hematologic neoplasm is a recognized category.",
      },
    ],
    molecular: [
      "KIT D816V is the most common driver; other activating KIT variants occur.",
      "Assess high-sensitivity KIT mutation in blood or marrow; additional mutations (SRSF2, ASXL1, RUNX1, TET2) may influence risk.",
      "Baseline tryptase can be elevated but may be confounded by hereditary alpha-tryptasemia or an associated myeloid neoplasm.",
    ],
  },
  {
    name: "Mast Cell Sarcoma",
    group: "Mast Cell Neoplasms",
    clue: "A destructive mass of highly atypical mast cells with invasive growth and malignant cytology.",
    summary:
      "An exceptionally rare, locally destructive mast-cell malignancy that may progress to systemic mastocytosis or mast-cell leukemia.",
    clinical: [
      "Any age; very rare.",
      "Presents as a localized mass in skin, soft tissue, bone, or visceral sites.",
      "May recur locally or disseminate.",
    ],
    criteria: [
      "Mass-forming destructive proliferation of mast cells with marked cytologic atypia.",
      "Confirm mast-cell lineage with tryptase and CD117.",
      "Exclude other mast-cell neoplasms and myeloid sarcomas with aberrant mast-cell differentiation.",
    ],
    histology: [
      "Sheets of atypical mast cells with pleomorphism, prominent nucleoli, increased mitoses, and destructive infiltration.",
      "Granules may be sparse, so morphology can resemble poorly differentiated carcinoma, melanoma, or histiocytic sarcoma.",
    ],
    ihc: [
      "Tryptase and CD117 support mast-cell differentiation.",
      "CD25/CD2 may be aberrant; phenotype can be variable.",
      "Exclude epithelial, melanocytic, histiocytic, and myeloid lineages with a focused panel.",
    ],
    differential: [
      {
        name: "Systemic Mastocytosis",
        distinction:
          "Systemic mastocytosis typically has compact aggregates of atypical but more differentiated mast cells; sarcoma is overtly malignant and destructive.",
      },
      {
        name: "Myeloid Sarcoma",
        distinction:
          "Myeloid sarcoma expresses myeloid markers such as MPO, CD33, and CD117 but lacks convincing mast-cell tryptase expression.",
      },
      {
        name: "Poorly differentiated carcinoma / melanoma",
        distinction:
          "Use broad keratin and melanocytic markers; mast-cell lineage is supported by tryptase.",
      },
    ],
    molecular: [
      "KIT mutations, including D816V, may be present but are not required for morphologic diagnosis.",
    ],
  },
  {
    name: "MDS with Low Blasts and 5q Deletion",
    group: "Myelodysplastic Neoplasms",
    clue: "Macrocytic anemia, often normal or increased platelets, hypolobated megakaryocytes, and isolated del(5q) or qualifying 5q deletion pattern.",
    summary:
      "A genetically defined MDS characterized by del(5q), low blasts, and distinctive megakaryocytes.",
    clinical: [
      "Usually older adults, with female predominance.",
      "Macrocytic anemia, fatigue, and often normal or increased platelet count.",
      "Usually indolent but requires exclusion of TP53-mutated disease and other cytogenetic abnormalities.",
    ],
    criteria: [
      "Low blast count: <5% marrow and <2% blood blasts.",
      "Del(5q) as the defining cytogenetic abnormality, isolated or with one additional abnormality other than −7/del(7q), according to classification criteria.",
      "Exclude biallelic TP53 inactivation and other entities that supersede this category.",
    ],
    histology: [
      "Megakaryocytes are often small to medium-sized with hypolobated or nonlobated nuclei, sometimes described as monolobated forms.",
      "Erythroid dysplasia and ring sideroblasts may occur but are not required.",
      "Marrow is often normocellular or hypercellular with increased megakaryocytes.",
    ],
    ihc: [
      "CD61/CD42b highlight characteristic megakaryocytes.",
      "CD34 is used to quantify blasts; iron stain identifies ring sideroblasts when present.",
    ],
    differential: [
      {
        name: "MDS with Low Blasts",
        distinction:
          "The 5q-deleted subtype requires the defining cytogenetic lesion; otherwise use the appropriate morphologic/genetic MDS category.",
      },
      {
        name: "MDS with Biallelic TP53 Inactivation",
        distinction:
          "Biallelic TP53 disease takes precedence when its defining criteria are met.",
      },
      {
        name: "ET",
        distinction:
          "ET has large mature hyperlobulated megakaryocytes and lacks the characteristic dysplastic small hypolobated forms and anemia pattern.",
      },
    ],
    molecular: [
      "Detection of del(5q) by karyotype, FISH, or genomic testing is defining.",
      "Assess TP53 mutation and allelic state because TP53-mutated subclones may alter classification and prognosis.",
    ],
  },
  {
    name: "MDS with Low Blasts and SF3B1 Mutation",
    group: "Myelodysplastic Neoplasms",
    clue: "Macrocytic anemia with erythroid dysplasia and ring sideroblasts, or qualifying SF3B1 mutation, with low blasts.",
    summary:
      "A genetically defined low-blast MDS associated with SF3B1 mutation and ineffective erythropoiesis.",
    clinical: [
      "Usually older adults; anemia is the dominant presentation.",
      "Often macrocytic anemia with normal or mildly reduced leukocytes and platelets.",
      "May have transfusion dependence and iron overload.",
    ],
    criteria: [
      "Blood blasts <2% and marrow blasts <5%.",
      "SF3B1 mutation meeting the classification-specific VAF threshold; assess exclusionary cytogenetic/genetic findings.",
      "Ring sideroblasts are common but are not required when the defining SF3B1 mutation is present under current criteria.",
      "Exclude MDS with biallelic TP53 inactivation and other genetically defined MDS categories.",
    ],
    histology: [
      "Erythroid dysplasia is prominent, including megaloblastoid change, nuclear budding, multinuclearity, and irregular nuclear contours.",
      "Ring sideroblasts show perinuclear mitochondrial iron granules on Prussian blue stain.",
      "Megakaryocytic and granulocytic dysplasia may be present but are not the dominant feature.",
    ],
    ihc: [
      "No specific IHC marker establishes SF3B1-mutated MDS.",
      "Prussian blue iron stain is essential to identify and quantify ring sideroblasts.",
      "CD34 assesses blast percentage.",
    ],
    differential: [
      {
        name: "MDS with Low Blasts",
        distinction:
          "SF3B1 mutation defines a distinct subtype when criteria are met; without it, classify by morphology and other genetics.",
      },
      {
        name: "MDS/MPN with SF3B1 Mutation and Thrombocytosis",
        distinction:
          "The overlap entity requires thrombocytosis and proliferative megakaryocytic features in addition to SF3B1 mutation.",
      },
      {
        name: "Copper deficiency / alcohol / drug effect",
        distinction:
          "These can produce dysplasia or sideroblasts but lack the defining clonal SF3B1-associated profile.",
      },
    ],
    molecular: [
      "SF3B1 mutation is defining; common co-mutations include TET2, DNMT3A, and ASXL1.",
      "Exclude del(5q), complex karyotype, and biallelic TP53 alterations as required by current classification.",
    ],
  },
  {
    name: "MDS with Biallelic TP53 Inactivation",
    group: "Myelodysplastic Neoplasms",
    clue: "MDS morphology with two TP53 hits or a TP53 mutation plus deletion/copy-neutral LOH; often complex karyotype and high-grade disease.",
    summary: "A genetically defined, biologically aggressive MDS category.",
    clinical: [
      "Usually older adults; may follow cytotoxic therapy.",
      "Often presents with severe cytopenias, transfusion dependence, and rapidly progressive disease.",
      "High risk of progression and poor overall outcome.",
    ],
    criteria: [
      "MDS with low or increased blasts, as defined by the classification framework.",
      "Biallelic TP53 inactivation: two or more TP53 mutations, or one TP53 mutation with deletion or copy-neutral loss of heterozygosity affecting the other allele.",
      "A high VAF and complex karyotype are common but are not substitutes for demonstrating biallelic status.",
    ],
    histology: [
      "Often multilineage dysplasia with increased blasts, although blast percentage varies.",
      "Marrow may be hypercellular or hypocellular; dysplastic megakaryocytes and abnormal erythroid precursors are common.",
      "Complex cytogenetic abnormalities are frequent.",
    ],
    ihc: [
      "p53 IHC may show diffuse strong overexpression or complete null pattern; it is a screening clue, not proof of biallelic inactivation.",
      "CD34 highlights increased blasts; correlate with aspirate differential and flow cytometry.",
    ],
    differential: [
      {
        name: "MDS with Increased Blasts",
        distinction:
          "TP53 biallelic status defines a distinct genetic category and takes precedence when criteria are fulfilled.",
      },
      {
        name: "Therapy-related MDS",
        distinction:
          "Prior cytotoxic exposure is a clinical qualifier/context; TP53 allelic status and current classification criteria determine the disease category.",
      },
      {
        name: "AML with TP53 mutation",
        distinction:
          "Assess blast thresholds and current classification rules; TP53 mutation alone does not establish AML.",
      },
    ],
    molecular: [
      "Demonstrate two TP53 hits or one TP53 mutation plus deletion/copy-neutral LOH.",
      "Use sequencing with copy-number/LOH assessment; p53 IHC alone cannot establish biallelic inactivation.",
    ],
  },
  {
    name: "MDS with Low Blasts",
    group: "Myelodysplastic Neoplasms",
    clue: "Persistent cytopenia with ≥10% dysplasia in at least one lineage and low blasts, after excluding defining genetic subtypes and mimics.",
    summary:
      "Morphologically defined MDS with low blast counts and no defining genetic subtype.",
    clinical: [
      "Usually older adults; male predominance overall.",
      "One or more persistent cytopenias, commonly macrocytic anemia; may be asymptomatic initially.",
      "Symptoms reflect anemia, infection from neutropenia, or bleeding from thrombocytopenia.",
    ],
    criteria: [
      "Persistent cytopenia(s) not explained by another condition.",
      "Dysplasia in ≥10% of cells in at least one myeloid lineage, or another accepted MDS-defining feature.",
      "Blood blasts <2% and marrow blasts <5%.",
      "Exclude MDS-defining genetic subtypes, MDS/MPN, AML, and reactive/nutritional/drug causes.",
    ],
    histology: [
      "Assess erythroid, granulocytic, and megakaryocytic dysplasia systematically; quantify each lineage.",
      "Marrow cellularity may be increased, normal, or reduced; ineffective hematopoiesis is typical.",
      "Blasts remain below the MDS increased-blast thresholds.",
    ],
    ihc: [
      "CD34 helps estimate blasts and identify abnormal localization of immature precursors.",
      "CD61/CD42b, MPO, glycophorin A, and CD71 can help assess lineage distribution.",
      "Iron stain is useful when ring sideroblasts are suspected.",
    ],
    differential: [
      {
        name: "CCUS",
        distinction:
          "CCUS has clonality and cytopenia but does not meet morphologic or genetic criteria for MDS.",
      },
      {
        name: "MDS with Low Blasts and SF3B1 Mutation",
        distinction:
          "SF3B1 mutation meeting criteria assigns the genetically defined subtype.",
      },
      {
        name: "MDS with 5q Deletion",
        distinction: "A qualifying del(5q) pattern defines a separate subtype.",
      },
      {
        name: "Nutritional deficiency / toxic effect",
        distinction:
          "B12, folate, copper deficiency, alcohol, and medications can mimic multilineage dysplasia; correct/exclude before diagnosis.",
      },
    ],
    molecular: [
      "Cytogenetic and molecular studies identify defining MDS subtypes and support clonality.",
      "Common mutations include TET2, ASXL1, DNMT3A, SF3B1, SRSF2, U2AF1, and RUNX1; none alone establishes MDS without the appropriate context.",
    ],
  },
  {
    name: "MDS, Hypoplastic",
    group: "Myelodysplastic Neoplasms",
    clue: "Hypocellular marrow with persistent cytopenia and qualifying dysplasia or clonal genetic abnormalities; distinguish from aplastic anemia.",
    summary: "A hypocellular form of MDS with dysplastic and clonal features.",
    clinical: [
      "Usually older adults, but can occur in younger patients.",
      "Pancytopenia or bi-/unilineage cytopenia; may resemble aplastic anemia.",
      "Often presents with fatigue, infections, or bleeding.",
    ],
    criteria: [
      "Age-adjusted hypocellular marrow with persistent cytopenia.",
      "Qualifying dysplasia and/or clonal cytogenetic or molecular abnormalities supporting MDS.",
      "Exclude aplastic anemia, inherited marrow failure, PNH, nutritional deficiencies, and therapy effects.",
    ],
    histology: [
      "Markedly hypocellular marrow with reduced hematopoietic elements and increased fat spaces.",
      "Residual hematopoiesis shows dysplasia, often megakaryocytic or erythroid.",
      "Abnormal megakaryocytes, clusters of CD34-positive precursors, or increased blasts favor MDS over aplastic anemia.",
    ],
    ihc: [
      "CD34 highlights abnormal clusters or increased precursors.",
      "CD61/CD42b help assess megakaryocyte dysplasia; CD117 may help identify immature cells.",
    ],
    differential: [
      {
        name: "Aplastic Anemia",
        distinction:
          "Aplastic anemia has profoundly hypocellular marrow without convincing dysplasia or MDS-defining clonality; small PNH clones may occur.",
      },
      {
        name: "MDS with Low Blasts",
        distinction:
          "Both have dysplasia and cytopenia; hypoplastic MDS is specifically hypocellular for age.",
      },
      {
        name: "Inherited marrow failure",
        distinction:
          "Consider age, family history, congenital findings, telomere biology, and germline testing.",
      },
    ],
    molecular: [
      "Cytogenetic abnormalities and somatic mutations support clonality but must be interpreted carefully because clonal hematopoiesis can occur in aplastic anemia.",
      "Assess PNH clone and germline predisposition when clinically indicated.",
    ],
  },
  {
    name: "MDS with Increased Blasts",
    group: "Myelodysplastic Neoplasms",
    clue: "Cytopenia and dysplasia with increased blasts: 5–9% marrow or 2–4% blood (IB1), and 10–19% marrow or 5–19% blood (IB2) in the WHO framework.",
    summary:
      "MDS with increased blasts, with substantial risk of progression to AML.",
    clinical: [
      "Usually older adults; may present with worsening cytopenias, infections, bleeding, or constitutional symptoms.",
      "May evolve from lower-risk MDS or arise de novo.",
      "Blast burden and cytogenetic/molecular profile drive risk assessment.",
    ],
    criteria: [
      "Persistent cytopenia with MDS-defining dysplasia or genetic findings.",
      "Increased blasts in blood and/or marrow within the MDS-IB range; quantify aspirate and correlate with CD34 IHC.",
      "Exclude AML-defining genetic abnormalities and other categories that supersede MDS-IB.",
    ],
    histology: [
      "Marrow is commonly hypercellular with multilineage dysplasia and increased immature myeloid precursors.",
      "CD34-positive blasts may form clusters or abnormal localization of immature precursors.",
      "Auer rods may be present and should prompt careful classification and genetic workup.",
    ],
    ihc: [
      "CD34 and CD117 assist blast quantification; flow cytometry provides complementary assessment.",
      "MPO supports myeloid lineage; lineage-specific markers are needed if blasts are ambiguous.",
    ],
    differential: [
      {
        name: "MDS with Biallelic TP53 Inactivation",
        distinction:
          "When biallelic TP53 criteria are met, classify in the TP53-defined category.",
      },
      {
        name: "AML",
        distinction:
          "Apply current blast thresholds and AML-defining genetic criteria; some genetic AML entities do not require 20% blasts.",
      },
      {
        name: "CCUS",
        distinction:
          "CCUS has no increased blasts and does not meet MDS criteria.",
      },
      {
        name: "MDS/MPN",
        distinction:
          "MDS/MPN has proliferative features such as leukocytosis, monocytosis, or thrombocytosis at presentation.",
      },
    ],
    molecular: [
      "Perform karyotype and myeloid NGS to identify adverse-risk lesions and exclude AML-defining abnormalities.",
      "TP53, RUNX1, ASXL1, and signaling pathway mutations may influence progression and prognosis.",
    ],
  },
  {
    name: "Childhood MDS with Low Blasts",
    group: "Childhood Myelodysplastic Neoplasms",
    clue: "Persistent cytopenia with hypocellular or normocellular marrow, low blasts, and dysplasia/clonality in a child; exclude inherited marrow failure.",
    summary: "A childhood-onset MDS category with low blasts.",
    clinical: [
      "Children and adolescents; often presents with persistent cytopenias.",
      "May have infections, pallor, bruising, or failure to thrive.",
      "Evaluate for congenital abnormalities and inherited marrow-failure syndromes.",
    ],
    criteria: [
      "Persistent cytopenia with marrow findings supporting MDS.",
      "Low blast count: <5% marrow and <2% blood.",
      "Exclude aplastic anemia, inherited marrow failure, germline predisposition, and transient/reactive cytopenias.",
    ],
    histology: [
      "Marrow is often hypocellular, although cellularity may vary.",
      "Dysplasia may involve one or more lineages; megakaryocytic abnormalities can be conspicuous.",
      "Blasts are not increased.",
    ],
    ihc: [
      "CD34 helps assess blast burden and distribution.",
      "CD61/CD42b and lineage markers help characterize dysplasia in residual hematopoiesis.",
    ],
    differential: [
      {
        name: "Aplastic Anemia",
        distinction:
          "Aplastic anemia lacks convincing dysplasia and MDS-defining clonal abnormalities; evaluate PNH and inherited causes.",
      },
      {
        name: "Childhood MDS with Increased Blasts",
        distinction:
          "The increased-blast subtype has elevated marrow and/or blood blasts and a different risk profile.",
      },
      {
        name: "JMML",
        distinction:
          "JMML is proliferative with monocytosis, splenomegaly, and RAS-pathway mutations rather than predominantly cytopenic.",
      },
    ],
    molecular: [
      "Karyotype and molecular testing help identify clonal abnormalities and germline predisposition.",
      "Germline testing should be considered before transplantation or related-donor selection.",
    ],
  },
  {
    name: "Childhood MDS with Increased Blasts",
    group: "Childhood Myelodysplastic Neoplasms",
    clue: "Childhood MDS with increased marrow and/or blood blasts, after excluding AML and JMML.",
    summary:
      "A childhood MDS category defined by increased blasts and clonal marrow disease.",
    clinical: [
      "Children and adolescents.",
      "Presents with cytopenias, infections, bleeding, and sometimes hepatosplenomegaly.",
      "May progress to AML; inherited predisposition assessment is important.",
    ],
    criteria: [
      "MDS with increased blasts in marrow and/or blood using childhood-specific thresholds.",
      "Exclude AML-defining genetic entities and JMML.",
      "Assess germline predisposition and cytogenetic/molecular abnormalities.",
    ],
    histology: [
      "Marrow is commonly hypercellular or variably cellular with dysplasia and increased blasts.",
      "CD34-positive precursors may form clusters; quantify blasts on aspirate and biopsy.",
      "Multilineage dysplasia may be present.",
    ],
    ihc: [
      "CD34 and CD117 assist blast assessment; MPO and other lineage markers characterize blasts.",
      "Flow cytometry is important for excluding acute leukemia and defining lineage.",
    ],
    differential: [
      {
        name: "Childhood MDS with Low Blasts",
        distinction:
          "Low-blast disease lacks the increased blast burden required for this category.",
      },
      {
        name: "AML",
        distinction:
          "Apply AML blast thresholds and genetic definitions; some AML entities are genetically defined below 20% blasts.",
      },
      {
        name: "JMML",
        distinction:
          "JMML is characterized by persistent monocytosis, splenomegaly, and RAS-pathway activation.",
      },
      {
        name: "Inherited marrow failure",
        distinction:
          "Germline syndromes can cause cytopenias and clonal evolution; clinical/genetic evaluation is essential.",
      },
    ],
    molecular: [
      "Karyotype, FISH, and myeloid NGS characterize clonal disease.",
      "Germline testing for inherited marrow failure and predisposition syndromes is important.",
    ],
  },
  {
    name: "Chronic Myelomonocytic Leukemia (CMML)",
    group: "Myelodysplastic/Myeloproliferative Neoplasms",
    clue: "Persistent absolute and relative monocytosis with dysplasia and/or clonality; blasts plus promonocytes remain <20%.",
    summary:
      "An MDS/MPN overlap neoplasm with sustained monocytosis and variable proliferative phenotype.",
    clinical: [
      "Usually older adults, with male predominance.",
      "Monocytosis, anemia, fatigue, weight loss, splenomegaly, and constitutional symptoms.",
      "May be dysplastic (lower WBC) or proliferative (higher WBC).",
    ],
    criteria: [
      "Persistent absolute monocyte count ≥0.5 × 10⁹/L and monocytes ≥10% of leukocytes.",
      "Blasts plus promonocytes <20% in blood and marrow.",
      "Exclude BCR::ABL1 and tyrosine kinase fusion neoplasms; demonstrate dysplasia, clonality, or other supporting criteria.",
      "Subdivide by WBC count and blast percentage according to current classification.",
    ],
    histology: [
      "Marrow is usually hypercellular with granulocytic and monocytic proliferation.",
      "Dysplasia may affect granulocytic, erythroid, and megakaryocytic lineages.",
      "Monocytes and promonocytes must be included in blast-equivalent counts.",
      "Tissue infiltration by monocytes/histiocytes may occur in skin, spleen, and other organs.",
    ],
    ihc: [
      "CD68, CD163, lysozyme, and CD14 support monocytic differentiation.",
      "CD34 and CD117 assess blasts; MPO highlights granulocytic lineage.",
    ],
    differential: [
      {
        name: "JMML",
        distinction:
          "JMML is a childhood RAS-pathway neoplasm; CMML is primarily an adult disease.",
      },
      {
        name: "CML with monocytosis",
        distinction:
          "CML is BCR::ABL1-positive; CMML is BCR::ABL1-negative and requires sustained monocytosis.",
      },
      {
        name: "MDS/MPN with Neutrophilia",
        distinction:
          "That entity is neutrophil-predominant with dysgranulopoiesis and ≥10% immature granulocytes; CMML is monocytic.",
      },
      {
        name: "Reactive monocytosis",
        distinction:
          "Exclude infection, inflammation, autoimmune disease, and recovery from marrow suppression; clonality and persistent criteria support CMML.",
      },
    ],
    molecular: [
      "Common mutations include TET2, SRSF2, ASXL1, and RAS-pathway genes; combinations support clonality.",
      "Monocyte subset repartitioning with expansion of classical monocytes can be supportive but is not independently diagnostic.",
    ],
  },
  {
    name: "MDS/MPN with Neutrophilia",
    group: "Myelodysplastic/Myeloproliferative Neoplasms",
    clue: "Leukocytosis with ≥10% immature granulocytes and conspicuous dysgranulopoiesis; historically termed atypical CML, BCR::ABL1-negative.",
    summary:
      "An overlap neoplasm with neutrophilic proliferation and significant granulocytic dysplasia.",
    clinical: [
      "Usually older adults, with male predominance.",
      "Leukocytosis, anemia, splenomegaly, fatigue, and constitutional symptoms.",
      "Progressive disease may evolve to AML.",
    ],
    criteria: [
      "WBC ≥13 × 10⁹/L with neutrophils and precursors; immature granulocytes (promyelocytes, myelocytes, metamyelocytes) ≥10%.",
      "Prominent dysgranulopoiesis, including abnormal chromatin clumping and hypogranulation.",
      "Monocytes <10%; blasts <20%.",
      "BCR::ABL1 and defining tyrosine kinase fusions are absent; exclude CSF3R-mutated CNL and other MPNs.",
    ],
    histology: [
      "Marrow is hypercellular with granulocytic hyperplasia and left shift.",
      "Granulocytes show hypogranulation, abnormal nuclear segmentation, and chromatin clumping.",
      "Dysplasia may also affect erythroid and megakaryocytic lineages.",
      "Blasts are increased but remain below 20%.",
    ],
    ihc: [
      "MPO highlights granulocytic expansion.",
      "CD34 and CD117 assess blasts; use CD61/CD42b if megakaryocytic dysplasia is difficult to evaluate.",
    ],
    differential: [
      {
        name: "CNL",
        distinction:
          "CNL has predominantly mature neutrophils, <10% precursors, minimal dysplasia, and often CSF3R mutation.",
      },
      {
        name: "CML",
        distinction:
          "CML is BCR::ABL1-positive and typically has basophilia and a broader maturation spectrum.",
      },
      {
        name: "CMML",
        distinction:
          "CMML requires absolute and relative monocytosis; this entity has monocytes <10%.",
      },
      {
        name: "MDS with Increased Blasts",
        distinction:
          "MDS lacks the prominent proliferative leukocytosis and immature granulocyte expansion characteristic of this overlap neoplasm.",
      },
    ],
    molecular: [
      "Exclude BCR::ABL1 and kinase fusions involving PDGFRA/B, FGFR1, JAK2, FLT3, and ABL1.",
      "SETBP1 and ASXL1 mutations are common; CSF3R mutations favor CNL.",
    ],
  },
  {
    name: "MDS/MPN with SF3B1 Mutation and Thrombocytosis",
    group: "Myelodysplastic/Myeloproliferative Neoplasms",
    clue: "Anemia with thrombocytosis, erythroid dysplasia/ring sideroblasts, proliferative large atypical megakaryocytes, and SF3B1 mutation.",
    summary:
      "An overlap neoplasm combining ineffective erythropoiesis with megakaryocytic proliferation.",
    clinical: [
      "Usually older adults; slight female predominance.",
      "Anemia and thrombocytosis are both present at diagnosis.",
      "May present with thrombotic or microvascular symptoms as well as transfusion-dependent anemia.",
    ],
    criteria: [
      "Anemia and platelet count ≥450 × 10⁹/L at presentation.",
      "SF3B1 mutation meeting current criteria; ring sideroblasts are frequent but may not be mandatory in mutation-defined cases.",
      "Marrow shows erythroid dysplasia and MPN-like megakaryocytes.",
      "Exclude BCR::ABL1, del(5q) MDS, PV/ET/PMF, and other MDS/MPN categories.",
    ],
    histology: [
      "Erythroid dysplasia with ring sideroblasts is common; perform iron stain.",
      "Megakaryocytes are increased, large, and often have hyperlobulated nuclei, resembling ET.",
      "Marrow combines dysplastic erythropoiesis with proliferative megakaryocytic morphology.",
    ],
    ihc: [
      "CD61/CD42b highlight megakaryocytic proliferation.",
      "Prussian blue stain identifies ring sideroblasts.",
      "CD34 assesses blast percentage.",
    ],
    differential: [
      {
        name: "MDS with Low Blasts and SF3B1 Mutation",
        distinction:
          "That subtype lacks the defining thrombocytosis and MPN-like megakaryocytic proliferation at presentation.",
      },
      {
        name: "ET with coincidental anemia",
        distinction:
          "ET lacks prominent erythroid dysplasia and SF3B1-associated ring sideroblast biology; investigate alternative causes of anemia.",
      },
      {
        name: "MDS with 5q Deletion",
        distinction:
          "A qualifying del(5q) pattern defines a separate MDS subtype and often shows small hypolobated megakaryocytes.",
      },
    ],
    molecular: [
      "SF3B1 mutation is defining; JAK2 V617F may coexist in a subset.",
      "Assess cytogenetics and TP53 status; exclude del(5q) and other defining abnormalities.",
    ],
  },
  {
    name: "MDS/MPN, NOS (Unclassifiable)",
    group: "Myelodysplastic/Myeloproliferative Neoplasms",
    clue: "Concurrent dysplastic cytopenia and proliferative blood-count features, but criteria for CMML, MDS/MPN with neutrophilia, or SF3B1/thrombocytosis subtype are not met.",
    summary: "A diagnosis of exclusion for an MDS/MPN overlap phenotype.",
    clinical: [
      "Usually adults; presentation varies with the dominant cytopenia and proliferative component.",
      "May show anemia with leukocytosis, thrombocytosis, or both.",
      "Splenomegaly and constitutional symptoms may occur.",
    ],
    criteria: [
      "At least one cytopenia and at least one proliferative feature at presentation.",
      "Morphologic dysplasia in one or more lineages with evidence of myeloproliferation.",
      "Blasts <20% in blood and marrow.",
      "Exclude BCR::ABL1, relevant kinase fusions, CMML, MDS/MPN with neutrophilia, MDS/MPN with SF3B1 mutation and thrombocytosis, and defined MPN/MDS entities.",
    ],
    histology: [
      "Marrow is usually hypercellular with variable dysplasia and increased granulopoiesis and/or megakaryopoiesis.",
      "Document the lineage responsible for cytopenia and the lineage driving proliferation.",
      "Megakaryocytes may be atypical; fibrosis and blast burden vary.",
    ],
    ihc: [
      "CD34/CD117 assess blasts; MPO, glycophorin A/CD71, and CD61/CD42b help characterize lineage abnormalities.",
      "Reticulin stain is appropriate when fibrosis is suspected.",
    ],
    differential: [
      {
        name: "CMML",
        distinction:
          "CMML requires persistent absolute and relative monocytosis.",
      },
      {
        name: "MDS/MPN with Neutrophilia",
        distinction:
          "Requires neutrophilic leukocytosis, ≥10% immature granulocytes, and prominent dysgranulopoiesis.",
      },
      {
        name: "MDS/MPN with SF3B1 Mutation and Thrombocytosis",
        distinction:
          "Requires anemia, thrombocytosis, SF3B1 mutation, and characteristic marrow findings.",
      },
      {
        name: "MPN-NOS",
        distinction:
          "MPN-NOS lacks defining dysplasia at presentation; MDS/MPN-NOS requires both dysplastic and proliferative features.",
      },
    ],
    molecular: [
      "Perform karyotype and broad myeloid NGS; molecular findings support clonality and may reveal a more specific entity.",
      "Exclude BCR::ABL1 and relevant tyrosine kinase fusions.",
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
    <section className="mt-4">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

const dysplasiaRows = [
  [
    "Erythroid",
    "Megaloblastoid nuclear maturation; nuclear budding, multinuclearity, irregular nuclear contours; internuclear bridging; ring sideroblasts (iron stain).",
    "Think MDS when ≥10% of erythroid precursors are dysplastic with persistent cytopenia. Ring sideroblasts prompt SF3B1 testing; exclude B12/folate/copper deficiency, alcohol, and drugs.",
  ],
  [
    "Granulocytic",
    "Hypogranulation or agranularity; pseudo–Pelger-Huët hyposegmentation; abnormal hypersegmentation; abnormal chromatin clumping; nuclear-cytoplasmic asynchrony.",
    "Think MDS with granulocytic dysplasia; with leukocytosis, ≥10% immature granulocytes, and marked dysgranulopoiesis, consider MDS/MPN with neutrophilia.",
  ],
  [
    "Megakaryocytic",
    "Micromegakaryocytes; monolobated or hypolobated nuclei; separated nuclear lobes; multiple small nuclei; abnormal clustering and maturation.",
    "Small hypolobated forms with del(5q) suggest MDS with low blasts and 5q deletion. Large hyperlobulated forms with thrombocytosis suggest ET or MDS/MPN with SF3B1 mutation and thrombocytosis. Dense atypical clusters with bulbous/cloud-like nuclei suggest PMF.",
  ],
  [
    "Monocytic",
    "Abnormal monocyte maturation, atypical/promonocytic forms, and increased monocytes; assess absolute and relative counts.",
    "Persistent absolute monocytes ≥0.5 × 10⁹/L and ≥10% of leukocytes raise CMML; in children with splenomegaly and RAS-pathway lesions, consider JMML.",
  ],
  [
    "Blast compartment",
    "Increased CD34-positive precursors, abnormal localization of immature precursors, and aggregates or sheets; count blasts on aspirate and correlate with biopsy.",
    "MDS increased-blast categories depend on exact blood and marrow blast percentages. Include promonocytes in blast-equivalent counts in CMML; apply AML-defining genetic criteria where relevant.",
  ],
];

export default function MyeloidPrecursorsMPNMDSPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Clonal Hematopoiesis (CH / CHIP / VEXAS Syndrome)",
    "MDS with Low Blasts",
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
            e.clinical.join(" ") +
            " " +
            e.criteria.join(" ") +
            " " +
            e.histology.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.differential.map((d) => d.name + " " + d.distinction).join(" ") +
            " " +
            e.molecular.join(" ")
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
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Myeloid Precursors, Myeloproliferative Neoplasms and Myelodysplastic
          Neoplasms
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-7 text-slate-600">
          A morphology-first diagnostic reference covering clonal hematopoiesis,
          myeloproliferative neoplasms, mast-cell neoplasms, myelodysplastic
          neoplasms, and myelodysplastic/myeloproliferative overlap neoplasms.
          Integrate peripheral blood findings, marrow architecture,
          lineage-specific dysplasia, blast assessment, cytogenetics, and
          molecular results.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the clinical blood-count pattern",
              "Identify persistent cytopenia, erythrocytosis, thrombocytosis, neutrophilia, eosinophilia, monocytosis, or a combination. Review prior CBCs and exclude secondary causes.",
            ],
            [
              "2. Assess marrow cellularity and lineage balance",
              "Record age-adjusted cellularity, myeloid-to-erythroid ratio, erythroid and granulocytic maturation, megakaryocyte number/morphology, fibrosis, and blast percentage.",
            ],
            [
              "3. Quantify dysplasia by lineage",
              "Score erythroid, granulocytic, and megakaryocytic dysplasia separately. A threshold of ≥10% dysplastic cells in a lineage is generally required for morphologic MDS; do not count isolated nonspecific atypia.",
            ],
            [
              "4. Classify the proliferative phenotype",
              "Use BCR::ABL1 for CML; JAK2/CALR/MPL and marrow pattern for PV/ET/PMF; CSF3R for CNL; RAS-pathway testing for JMML; and kinase-fusion testing for eosinophilic neoplasms.",
            ],
            [
              "5. Determine whether an overlap neoplasm is present",
              "Persistent monocytosis suggests CMML; neutrophilia with ≥10% immature granulocytes and dysgranulopoiesis suggests MDS/MPN with neutrophilia; anemia plus thrombocytosis and SF3B1 suggests the SF3B1/thrombocytosis subtype.",
            ],
            [
              "6. Apply genetic categories before finalizing",
              "Identify del(5q), SF3B1, biallelic TP53, BCR::ABL1, KIT, and relevant kinase fusions. A defining genetic category may supersede a purely morphologic label.",
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
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Interpretive guardrail:</strong> Dysplasia is not synonymous
          with MDS. Nutritional deficiencies (especially B12, folate, and
          copper), alcohol, medications, infection, growth factors, and recent
          chemotherapy can produce dysplastic-appearing changes. Establish
          persistence, quantify dysplasia, and integrate cytogenetic/molecular
          findings.
        </div>
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-lg font-bold text-slate-950">
          Lineage-Specific Dysplastic Features: What Should They Make You
          Consider?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use this table as a pattern-recognition aid. Dysplasia should be
          quantified in the appropriate lineage and interpreted with the blood
          counts, marrow context, and exclusion of mimics.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-200 p-3">Lineage</th>
                <th className="border border-slate-200 p-3">
                  Dysplastic Features
                </th>
                <th className="border border-slate-200 p-3">
                  Diagnostic Implications
                </th>
              </tr>
            </thead>
            <tbody>
              {dysplasiaRows.map((r) => (
                <tr
                  key={r[0]}
                  className="align-top odd:bg-white even:bg-slate-50"
                >
                  {r.map((v, i) => (
                    <td
                      key={i}
                      className="border border-slate-200 p-3 leading-6"
                    >
                      {i === 0 ? <strong>{v}</strong> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield Molecular / Cytogenetic Map
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              ["CML", "BCR::ABL1 fusion (Philadelphia chromosome)."],
              [
                "PV / ET / PMF",
                "JAK2 V617F or exon 12; CALR and MPL in ET/PMF.",
              ],
              ["CNL", "Activating CSF3R, especially T618I."],
              [
                "CEL / eosinophilia",
                "Exclude PDGFRA, PDGFRB, FGFR1, JAK2, FLT3, and ABL1 fusions.",
              ],
              ["JMML", "PTPN11, KRAS, NRAS, CBL, or NF1 pathway alterations."],
              ["MDS with 5q deletion", "del(5q); assess TP53 allelic state."],
              [
                "MDS with low blasts and SF3B1",
                "SF3B1 mutation; correlate with ring sideroblasts.",
              ],
              [
                "MDS with biallelic TP53",
                "Two TP53 hits or mutation plus deletion/copy-neutral LOH.",
              ],
              [
                "Systemic mastocytosis",
                "KIT mutation, most often D816V; aberrant CD25/CD2/CD30.",
              ],
              ["CHIP / CCUS / VEXAS", "CH driver mutations; UBA1 for VEXAS."],
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
            Critical Diagnostic Guardrails
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              Do not diagnose MDS from a mutation alone; integrate persistent
              cytopenia, morphology, blast count, and defining genetics.
            </li>
            <li>
              Distinguish CHIP from CCUS by the presence or absence of
              unexplained cytopenia.
            </li>
            <li>
              For PV, ET, and PMF, marrow morphology is essential; JAK2/CALR/MPL
              results are not interchangeable with subtype assignment.
            </li>
            <li>
              For suspected eosinophilic neoplasms, exclude kinase fusions
              before diagnosing CEL.
            </li>
            <li>In CMML, include promonocytes in blast-equivalent counts.</li>
            <li>
              In MDS/MPN, document both the dysplastic cytopenic component and
              the proliferative blood-count component.
            </li>
            <li>
              Use p53 IHC as a screening clue only; demonstrate biallelic TP53
              inactivation molecularly.
            </li>
          </ul>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label
            htmlFor="myeloid-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, morphology, mutations, and differential points
          </label>
          <input
            id="myeloid-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: dysmegakaryopoiesis, JAK2, SF3B1, CSF3R, del(5q), ring sideroblasts..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="myeloid-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="myeloid-group"
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
      </div>

      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} diagnoses</span>
        <span>
          Expand a diagnosis for clinical, morphologic, immunophenotypic,
          molecular, and differential criteria.
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
                onClick={() =>
                  setOpen((v) =>
                    isOpen ? v.filter((x) => x !== e.name) : [...v, e.name],
                  )
                }
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
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.map((x, j) => (
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
        PathologyGPS · Diagnostic reference for hematopathology. Interpret
        morphology, immunophenotype, cytogenetic findings, and molecular results
        in conjunction with clinical history, blood counts, and marrow findings.
      </footer>
    </main>
  );
}
