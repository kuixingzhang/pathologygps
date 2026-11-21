"use client";
import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clinical: string;
  clue: string;
  histology: string[];
  ihc: string[];
  criteria: string[];
  molecular: string[];
  differential: Differential[];
};
const entities: Entity[] = [
  {
    name: "AML with PML::RARA Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Adults; acute bleeding, bruising, cytopenias or leukocytosis; DIC is a critical presentation.",
    clue: "Abnormal promyelocytes with heavy granulation or bilobed nuclei; bundles of Auer rods; microgranular variant may be hypogranular with bilobed nuclei.",
    histology: [
      "Hypergranular promyelocytes have abundant azurophilic granules and folded/bilobed nuclei.",
      "Microgranular APL may show leukocytosis and inconspicuous granules.",
      "MPO is typically strong.",
    ],
    ihc: [
      "CD33, CD13, MPO, and CD117 are common.",
      "HLA-DR and CD34 are usually absent in classic APL, but may be variable in microgranular cases.",
      "CD64 may be expressed; no single marker replaces fusion testing.",
    ],
    criteria: [
      "Demonstrate PML::RARA by FISH, RT-PCR, or RNA sequencing.",
      "Suspected APL is a hematologic emergency; start ATRA when clinically indicated before molecular confirmation.",
      "Use an orthogonal assay if morphology is compelling but initial FISH is negative.",
    ],
    molecular: [
      "PML::RARA, usually t(15;17); monitor fusion transcript for MRD.",
    ],
    differential: [
      {
        name: "AML with other RARA fusions",
        distinction:
          "morphology may overlap, but ATRA response varies by partner.",
      },
      {
        name: "AML with RUNX1",
        distinction:
          ":RUNX1T1: maturation and Auer rods may occur, but PML::RARA is absent.",
      },
      {
        name: "AML with NPM1 mutation",
        distinction:
          "cup-like nuclei may mimic APL, but NPM1 mutation/cytoplasmic NPM1 defines that entity.",
      },
    ],
  },
  {
    name: "AML with RUNX1::RUNX1T1 Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Often younger adults, but any age; cytopenias, infection, bleeding, or extramedullary disease.",
    clue: "Myeloblasts with granulocytic maturation, frequent Auer rods, and sometimes aberrant B-cell antigens.",
    histology: [
      "Marrow often shows blasts with maturation through granulocytic stages.",
      "Auer rods may be numerous.",
      "Abnormal eosinophils can occur but are more characteristic of CBFB::MYH11 AML.",
    ],
    ihc: [
      "MPO, CD13, CD33, CD117, and often CD34 are positive.",
      "Aberrant CD19, PAX5, or CD79a may occur and does not by itself establish B-lineage.",
      "CD56 may be aberrantly expressed.",
    ],
    criteria: [
      "Demonstrate RUNX1::RUNX1T1, usually t(8;21).",
      "Classify by the defining fusion even when blast percentages are below the conventional AML threshold, according to the applied classification.",
    ],
    molecular: [
      "RUNX1::RUNX1T1; KIT and RAS-pathway co-mutations may affect relapse risk; fusion transcript supports MRD monitoring.",
    ],
    differential: [
      {
        name: "AML with CBFB",
        distinction:
          ":MYH11: abnormal eosinophils and myelomonocytic differentiation favor CBFB::MYH11.",
      },
      { name: "AML with maturation", distinction: "lacks RUNX1::RUNX1T1." },
      {
        name: "B-ALL",
        distinction:
          "aberrant CD19 alone is insufficient; require a coherent B-lineage phenotype.",
      },
    ],
  },
  {
    name: "AML with CBFB::MYH11 Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Often younger or middle-aged adults; leukocytosis, tissue infiltration, or cytopenias.",
    clue: "Myelomonocytic proliferation with abnormal marrow eosinophils and inv(16)/t(16;16).",
    histology: [
      "Myelomonocytic differentiation is common.",
      "Abnormal eosinophils contain coarse basophilic-purple granules and may be most apparent in marrow.",
      "Auer rods may be present.",
    ],
    ihc: [
      "MPO highlights granulocytic cells.",
      "CD64, CD14, CD11c, and lysozyme support monocytic differentiation.",
      "CD34/CD117 highlight blasts; aberrant CD2 may occur.",
    ],
    criteria: [
      "Demonstrate CBFB::MYH11, usually inv(16)(p13.1q22) or t(16;16).",
      "Identify abnormal eosinophils and quantify blasts.",
      "Evaluate extramedullary myeloid sarcoma when present.",
    ],
    molecular: [
      "CBFB::MYH11; KIT and RAS-pathway co-mutations may affect relapse risk; fusion transcript supports MRD.",
    ],
    differential: [
      {
        name: "AML with RUNX1",
        distinction:
          ":RUNX1T1: Auer rods and maturation may overlap, but abnormal eosinophils favor CBFB::MYH11.",
      },
      {
        name: "AML with myelomonocytic differentiation",
        distinction: "lacks the defining fusion.",
      },
      {
        name: "CMML",
        distinction: "persistent monocytosis with blasts below AML threshold.",
      },
    ],
  },
  {
    name: "AML with DEK::NUP214 Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Usually adults, often younger to middle-aged; cytopenias, leukocytosis, or basophilia.",
    clue: "t(6;9), often with basophilia, multilineage dysplasia, and adverse-risk biology.",
    histology: [
      "Hypercellular marrow with increased blasts and variable multilineage dysplasia.",
      "Basophilia may be present.",
      "Auer rods may occur.",
    ],
    ihc: [
      "MPO, CD13, CD33, CD117, and CD34 are variable.",
      "CD123 may be increased.",
      "Use flow cytometry to characterize blasts and exclude basophilic leukemia.",
    ],
    criteria: [
      "Demonstrate DEK::NUP214, usually t(6;9)(p22;q34).",
      "Fusion defines the AML category; assess blast count and co-mutations.",
    ],
    molecular: ["DEK::NUP214; FLT3-ITD and other mutations may coexist."],
    differential: [
      {
        name: "AML with MECOM rearrangement",
        distinction:
          "often abnormal megakaryocytes and inv(3)/t(3;3), not t(6;9).",
      },
      {
        name: "AML-MR",
        distinction:
          "dysplasia may overlap, but DEK::NUP214 defines a distinct entity.",
      },
      {
        name: "CML blast phase",
        distinction: "requires BCR::ABL1 and compatible history.",
      },
    ],
  },
  {
    name: "AML with RBM15::MRTFA Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Predominantly infants; hepatosplenomegaly, cytopenias, and marrow failure may occur.",
    clue: "Infantile megakaryoblastic leukemia with t(1;22).",
    histology: [
      "Marrow may be fibrotic with a dry tap.",
      "Megakaryoblasts show basophilic cytoplasm and cytoplasmic blebs.",
      "Blasts may be small lymphoblast-like or large and pleomorphic.",
    ],
    ihc: [
      "CD41, CD61, and CD42b establish megakaryocytic differentiation.",
      "CD34/CD117 are variable.",
      "MPO is usually negative; factor VIII-related antigen is less sensitive.",
    ],
    criteria: [
      "Demonstrate RBM15::MRTFA, usually t(1;22)(p13;q13).",
      "Confirm megakaryocytic lineage with platelet glycoproteins.",
      "Exclude Down syndrome-associated myeloid proliferation.",
    ],
    molecular: ["RBM15::MRTFA fusion."],
    differential: [
      {
        name: "AML megakaryoblastic differentiation, NOS",
        distinction: "lacks the defining fusion.",
      },
      {
        name: "Transient abnormal myelopoiesis",
        distinction:
          "neonatal Down syndrome setting with GATA1 mutation and frequent spontaneous regression.",
      },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "lacks megakaryocyte-lineage markers.",
      },
    ],
  },
  {
    name: "AML with BCR::ABL1 Fusion",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Usually adults; de novo presentation or possible previously unrecognized CML; splenomegaly/basophilia may be clues.",
    clue: "Myeloid blasts with BCR::ABL1 after excluding CML in myeloid blast phase.",
    histology: [
      "Blasts may show granulocytic differentiation.",
      "Basophilia, dwarf megakaryocytes, and chronic-phase CML features raise concern for blast-phase CML.",
      "No morphology alone reliably separates de novo AML from CML blast phase.",
    ],
    ihc: [
      "MPO supports myeloid lineage; CD34/CD117 assess blasts.",
      "CD13/CD33 are common.",
      "Flow phenotype cannot independently distinguish de novo AML from CML blast phase.",
    ],
    criteria: [
      "Demonstrate BCR::ABL1.",
      "Review prior CBCs, marrow history, basophilia, splenomegaly, and chronic-phase features.",
      "Apply classification-specific blast criteria.",
    ],
    molecular: [
      "BCR::ABL1; determine transcript type and additional cytogenetic abnormalities.",
    ],
    differential: [
      {
        name: "CML in myeloid blast phase",
        distinction:
          "antecedent chronic phase, basophilia, and dwarf megakaryocytes.",
      },
      {
        name: "B-ALL with BCR",
        distinction: ":ABL1: coherent B-lineage markers.",
      },
      {
        name: "AML with other defining genetics",
        distinction: "lacks BCR::ABL1.",
      },
    ],
  },
  {
    name: "AML with KMT2A Rearrangement",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "All ages; infants/children and adults; leukocytosis, gingival/skin infiltration, or cytopenias.",
    clue: "Often monoblastic or myelomonocytic morphology; fusion partner influences phenotype.",
    histology: [
      "Monoblasts/promonocytes may have folded nuclei and abundant gray-blue cytoplasm.",
      "Myelomonocytic differentiation and extramedullary infiltration are common.",
      "Morphology varies with fusion partner.",
    ],
    ihc: [
      "CD33, CD64, CD11c, CD14, lysozyme, and CD4 support monocytic differentiation.",
      "CD34 is variable; CD117 may be positive.",
      "NG2/CSPG4 may be expressed in some cases.",
    ],
    criteria: [
      "Demonstrate KMT2A rearrangement and identify fusion partner when possible.",
      "Exclude MPAL if B/T lineage-defining criteria are met.",
    ],
    molecular: [
      "KMT2A fusion; RNA-based fusion testing may identify cryptic partners.",
    ],
    differential: [
      {
        name: "AML with NPM1 mutation",
        distinction:
          "often monocytic but NPM1 mutation/cytoplasmic NPM1 distinguishes it.",
      },
      {
        name: "MPAL with KMT2A rearrangement",
        distinction: "requires B/myeloid or T/myeloid lineage criteria.",
      },
      {
        name: "AML with monocytic differentiation, NOS",
        distinction: "lacks KMT2A rearrangement.",
      },
    ],
  },
  {
    name: "AML with MECOM Rearrangement",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Usually adults; cytopenias, leukocytosis or thrombocytosis; often adverse-risk disease.",
    clue: "inv(3)/t(3;3), abnormal megakaryocytes, multilineage dysplasia, and increased blasts.",
    histology: [
      "Marrow may show multilineage dysplasia and increased blasts.",
      "Megakaryocytes may be small with separated nuclear lobes or monolobated forms.",
      "Erythroid and granulocytic dysplasia may coexist.",
    ],
    ihc: [
      "CD34/CD117 highlight blasts; MPO supports myeloid differentiation.",
      "CD61/CD42b demonstrate dysplastic megakaryocytes.",
      "MECOM/EVI1 IHC may be supportive but does not replace genetic confirmation.",
    ],
    criteria: [
      "Demonstrate MECOM rearrangement, classically inv(3)(q21.3q26.2) or t(3;3).",
      "Recognize genetic AML entity even with lower blast percentages when classification criteria permit.",
    ],
    molecular: [
      "MECOM rearrangement; classic enhancer relocation leads to MECOM overexpression.",
    ],
    differential: [
      { name: "AML with DEK", distinction: ":NUP214: t(6;9), not MECOM." },
      {
        name: "MDS/MPN with thrombocytosis",
        distinction: "lacks AML-defining MECOM rearrangement.",
      },
      {
        name: "MDS with increased blasts",
        distinction:
          "MECOM rearrangement defines a distinct category when criteria are met.",
      },
    ],
  },
  {
    name: "AML with NUP98 Rearrangement",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Children, adolescents, and adults; acute marrow failure, leukocytosis, or tissue infiltration.",
    clue: "Often immature morphology; phenotype varies with NUP98 fusion partner.",
    histology: [
      "Blasts often show limited maturation.",
      "Some cases show monocytic or megakaryoblastic differentiation.",
      "No single histologic pattern is specific.",
    ],
    ihc: [
      "CD34/CD117 often positive; MPO variable.",
      "CD13/CD33 support myeloid lineage.",
      "Apply lineage-specific markers when monocytic or megakaryocytic differentiation is suspected.",
    ],
    criteria: [
      "Demonstrate NUP98 rearrangement and identify fusion partner, preferably by RNA-based testing.",
      "Exclude other defining fusions and ambiguous-lineage leukemia.",
    ],
    molecular: ["NUP98::NSD1, NUP98::KDM5A, and other fusions."],
    differential: [
      {
        name: "AML with KMT2A rearrangement",
        distinction: "distinct fusion, often monocytic.",
      },
      {
        name: "AML with other defining genetics",
        distinction: "classify by specific lesion.",
      },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "lacks convincing lineage-specific differentiation.",
      },
    ],
  },
  {
    name: "AML with NPM1 Mutation",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Usually adults, especially middle-aged/older; cytopenias, leukocytosis, or monocytic tissue infiltration.",
    clue: "Cup-like nuclear invaginations, often monocytic differentiation, and cytoplasmic NPM1 protein.",
    histology: [
      "Blasts may show deep nuclear invaginations/cup-like nuclei.",
      "Monocytic/myelomonocytic differentiation is common.",
      "Auer rods may occur; morphology is not specific.",
    ],
    ihc: [
      "NPM1 IHC shows cytoplasmic mislocalization in most mutation-positive cases.",
      "MPO and CD33 commonly positive; CD34/HLA-DR may be absent or dim but exceptions occur.",
      "CD64/CD11c/CD14 may be positive in monocytic cases.",
    ],
    criteria: [
      "Demonstrate pathogenic NPM1 mutation by sequencing or validated assay.",
      "Cytoplasmic NPM1 IHC is a useful surrogate, not a substitute for molecular confirmation when needed.",
      "Assess FLT3-ITD and other co-mutations.",
    ],
    molecular: [
      "NPM1 mutation, usually exon 12; FLT3-ITD, DNMT3A and other co-mutations; NPM1 is useful for MRD.",
    ],
    differential: [
      {
        name: "AML with monocytic differentiation, NOS",
        distinction: "lacks NPM1 mutation.",
      },
      {
        name: "AML with KMT2A rearrangement",
        distinction: "often monocytic but has KMT2A fusion.",
      },
      {
        name: "AML-MR",
        distinction:
          "apply current hierarchy when NPM1 defines a more specific category.",
      },
    ],
  },
  {
    name: "AML with CEBPA Mutation",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Often younger/middle-aged adults; familial cases can occur; acute cytopenias or leukocytosis.",
    clue: "Granulocytic differentiation and maturation; occasional bilobed blasts and Auer rods.",
    histology: [
      "Blasts may show granulocytic maturation.",
      "Auer rods may be present.",
      "Morphology alone cannot establish CEBPA subtype.",
    ],
    ihc: [
      "MPO, CD13, CD33, CD117, and CD34 are variable.",
      "CD7 may be aberrant.",
      "No IHC stain establishes CEBPA mutation.",
    ],
    criteria: [
      "Demonstrate qualifying in-frame bZIP CEBPA mutation under the selected classification.",
      "Assess germline status when family history or age suggests predisposition.",
    ],
    molecular: [
      "Qualifying CEBPA bZIP mutation; distinguish germline from somatic variants.",
    ],
    differential: [
      {
        name: "AML with RUNX1",
        distinction:
          ":RUNX1T1: may show Auer rods/maturation but fusion differs.",
      },
      {
        name: "AML with maturation, NOS",
        distinction: "lacks defining CEBPA lesion.",
      },
      {
        name: "Familial CEBPA-associated myeloid neoplasm",
        distinction: "germline variant and family history.",
      },
    ],
  },
  {
    name: "AML, Myelodysplasia-Related",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Usually older adults; antecedent MDS/MDS-MPN or de novo disease; cytopenias common.",
    clue: "Multilineage dysplasia and qualifying MR cytogenetic/molecular abnormalities or antecedent disease.",
    histology: [
      "Dysmegakaryopoiesis includes micromegakaryocytes and hypolobated forms.",
      "Granulocytes may be hypogranular or pseudo-Pelger-Huët.",
      "Dyserythropoiesis and increased blasts may be present.",
    ],
    ihc: [
      "CD34/CD117 assess blasts; MPO supports myeloid lineage.",
      "CD61/CD42b highlight megakaryocytic dysplasia.",
      "No unique IHC phenotype defines AML-MR.",
    ],
    criteria: [
      "Meet AML criteria and establish qualifying MR genetic abnormalities and/or antecedent MDS/MDS-MPN under the selected classification.",
      "Exclude AML-defining genetic entities that take precedence.",
    ],
    molecular: [
      "MR-associated genes include ASXL1, BCOR, EZH2, SF3B1, SRSF2, STAG2, U2AF1, ZRSR2; qualifying cytogenetics are classification-specific.",
    ],
    differential: [
      {
        name: "AML with NPM1 mutation",
        distinction: "hierarchy may favor the NPM1-defined entity.",
      },
      {
        name: "AML with MECOM rearrangement",
        distinction: "specific genetic entity takes precedence.",
      },
      {
        name: "Post-cytotoxic therapy AML",
        distinction: "exposure qualifier may coexist.",
      },
    ],
  },
  {
    name: "AML with Other Defined Genetic Abnormalities",
    group: "AML with Defining Genetic Abnormalities",
    clinical:
      "Age and presentation vary by lesion; acute marrow failure, leukocytosis, or extramedullary disease.",
    clue: "Morphology varies; assign the specific genetic category whenever a recognized lesion is identified.",
    histology: [
      "Describe blast morphology, maturation, dysplasia, and tissue involvement.",
      "Some lesions have characteristic patterns but none is independently diagnostic.",
      "Quantify blasts and assess lineage.",
    ],
    ihc: [
      "Use MPO, CD34/CD117, monocytic markers, and lineage-specific markers as indicated.",
      "No universal IHC phenotype defines this residual group.",
    ],
    criteria: [
      "Identify the exact recognized genetic lesion and apply current entity hierarchy.",
      "Do not use this residual label when a more specific named entity applies.",
    ],
    molecular: [
      "Karyotype, FISH, RNA fusion testing, and myeloid NGS guided by phenotype.",
    ],
    differential: [
      {
        name: "Named AML genetic entities",
        distinction: "assign the specific category.",
      },
      {
        name: "AML defined by differentiation",
        distinction: "use only when no genetic entity supersedes morphology.",
      },
    ],
  },
  {
    name: "AML with Minimal Differentiation",
    group: "AML Defined by Differentiation",
    clinical:
      "Usually adults; cytopenias, infections, bleeding, or leukocytosis.",
    clue: "Lymphoblast-like blasts with absent or very limited MPO and no convincing maturation.",
    histology: [
      "Blasts have high N:C ratio, fine chromatin, scant agranular cytoplasm, and inconspicuous nucleoli.",
      "Granulocytic maturation is absent.",
      "Auer rods are generally absent.",
    ],
    ihc: [
      "CD34, CD117, CD13, and CD33 support immaturity/myeloid phenotype.",
      "MPO is negative or present only in a small subset.",
      "CD7 may be aberrant; exclude B/T lineage with lineage-defining markers.",
    ],
    criteria: [
      "Meet AML criteria and establish myeloid lineage despite absent/very limited MPO.",
      "Exclude acute undifferentiated leukemia and MPAL.",
    ],
    molecular: [
      "No defining molecular lesion; perform comprehensive cytogenetic and molecular testing.",
    ],
    differential: [
      {
        name: "AML without maturation",
        distinction: "MPO-positive myeloid differentiation is demonstrable.",
      },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "no lineage-defining evidence.",
      },
      { name: "MPAL", distinction: "requires two lineage-defining programs." },
    ],
  },
  {
    name: "AML without Maturation",
    group: "AML Defined by Differentiation",
    clinical:
      "Usually adults; acute marrow failure, cytopenias, or leukocytosis.",
    clue: "Predominantly myeloblasts with little maturation and demonstrable myeloid lineage.",
    histology: [
      "Marrow is replaced by myeloblasts with scant cytoplasm, fine chromatin, and nucleoli.",
      "Granulocytic maturation is minimal.",
      "Auer rods may be present.",
    ],
    ihc: [
      "MPO is positive in blasts.",
      "CD13, CD33, CD117, and often CD34 are positive.",
      "CD7/CD56 may be aberrant.",
    ],
    criteria: [
      "Meet AML criteria and show myeloid differentiation with minimal granulocytic maturation.",
      "Exclude genetically defined AML.",
    ],
    molecular: [
      "No defining molecular lesion; karyotype and myeloid NGS guide classification.",
    ],
    differential: [
      {
        name: "AML with minimal differentiation",
        distinction: "MPO absent/very limited.",
      },
      {
        name: "AML with maturation",
        distinction: "appreciable granulocytic maturation.",
      },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "lacks MPO and other lineage evidence.",
      },
    ],
  },
  {
    name: "AML with Maturation",
    group: "AML Defined by Differentiation",
    clinical:
      "Usually adults; anemia, thrombocytopenia, neutropenia, infection, or leukocytosis.",
    clue: "Myeloblasts accompanied by substantial granulocytic maturation.",
    histology: [
      "Blasts coexist with promyelocytes, myelocytes, and metamyelocytes.",
      "Auer rods may occur.",
      "Dysplasia may coexist but does not alone define subtype.",
    ],
    ihc: [
      "MPO positive in blasts and granulocytic precursors.",
      "CD13/CD33/CD117 common; CD34 variable.",
      "Monocytic markers are not dominant unless mixed differentiation is present.",
    ],
    criteria: [
      "Meet AML criteria and show appreciable granulocytic maturation.",
      "Exclude defining genetic AML categories and AML-MR as applicable.",
    ],
    molecular: [
      "No defining molecular alteration; perform cytogenetic and molecular workup.",
    ],
    differential: [
      {
        name: "AML without maturation",
        distinction: "few maturing granulocytes.",
      },
      {
        name: "AML with minimal differentiation",
        distinction: "MPO absent/limited.",
      },
      {
        name: "AML with myelomonocytic differentiation",
        distinction: "substantial monocytic component.",
      },
    ],
  },
  {
    name: "Acute Basophilic Leukemia",
    group: "AML Defined by Differentiation",
    clinical:
      "Rare; mainly adults; cytopenias, leukocytosis, basophilia, skin lesions, or organ involvement.",
    clue: "Predominant basophilic blasts with coarse metachromatic granules.",
    histology: [
      "Blasts show basophilic differentiation and coarse metachromatic cytoplasmic granules.",
      "Granules may obscure nuclear detail.",
      "Immature and mature basophils may be increased.",
    ],
    ihc: [
      "CD123, CD203c, FcεRI and metachromatic stains support basophilic lineage.",
      "CD34/CD117 variable; MPO often negative/weak.",
      "Use tryptase and KIT studies when mast-cell neoplasm is in the differential.",
    ],
    criteria: [
      "Demonstrate predominant basophilic differentiation and acute blast burden.",
      "Exclude CML with basophilia, systemic mastocytosis, and other myeloid neoplasms.",
    ],
    molecular: [
      "No single defining molecular lesion; test BCR::ABL1 and relevant myeloid alterations.",
    ],
    differential: [
      {
        name: "CML",
        distinction:
          "BCR::ABL1-positive chronic myeloproliferation with left shift.",
      },
      {
        name: "Systemic mastocytosis/mast-cell leukemia",
        distinction: "tryptase-positive, KIT-mutated mast cells.",
      },
      {
        name: "AML with minimal differentiation",
        distinction: "lacks basophil-specific granules/markers.",
      },
    ],
  },
  {
    name: "Acute Myelomonocytic Leukemia",
    group: "AML Defined by Differentiation",
    clinical:
      "Children and adults; cytopenias, leukocytosis, gingival/skin infiltration, or hepatosplenomegaly.",
    clue: "Substantial granulocytic and monocytic differentiation, with both components represented.",
    histology: [
      "Both granulocytic and monocytic lineages are increased.",
      "Monoblasts/promonocytes show folded nuclei and abundant gray-blue cytoplasm.",
      "Auer rods may be present in myeloid component.",
    ],
    ihc: [
      "MPO highlights granulocytic cells.",
      "CD64, CD14, CD11c, lysozyme and CD163 support monocytic differentiation.",
      "CD34/CD117 variable; promonocytes are part of blast-equivalent count.",
    ],
    criteria: [
      "Demonstrate both granulocytic and monocytic differentiation and meet AML criteria.",
      "Count promonocytes as blast equivalents where applicable.",
      "Exclude CBFB::MYH11 and KMT2A-defined entities.",
    ],
    molecular: [
      "CBFB::MYH11, KMT2A rearrangement, and NPM1 mutation are important subsets.",
    ],
    differential: [
      {
        name: "Acute monocytic leukemia",
        distinction: "monocytic component predominates.",
      },
      {
        name: "AML with maturation",
        distinction: "no substantial monocytic component.",
      },
      {
        name: "CMML",
        distinction:
          "persistent monocytosis with blasts plus promonocytes below AML threshold.",
      },
    ],
  },
  {
    name: "Acute Monocytic Leukemia",
    group: "AML Defined by Differentiation",
    clinical:
      "All ages; gingival hypertrophy, skin lesions, CNS involvement, leukocytosis, or cytopenias.",
    clue: "Predominant monoblasts/promonocytes with strong monocytic differentiation.",
    histology: [
      "Monoblasts have round nuclei, delicate chromatin, prominent nucleoli, and abundant basophilic cytoplasm.",
      "Promonocytes have folded/convoluted nuclei.",
      "Gingival and skin infiltration are characteristic.",
    ],
    ihc: [
      "At least two monocytic markers: CD11c, CD14, CD64, lysozyme, CD163, or nonspecific esterase.",
      "MPO often negative in monoblasts.",
      "CD4/CD36/CD68 may be expressed; CD34 often absent.",
    ],
    criteria: [
      "Establish monocytic lineage with at least two accepted markers/cytochemical stains.",
      "Include monoblasts and promonocytes in blast-equivalent counts.",
      "Exclude BPDCN, histiocytic neoplasms, and MPAL.",
    ],
    molecular: [
      "KMT2A rearrangement and NPM1 mutation occur in subsets; perform broad molecular testing.",
    ],
    differential: [
      {
        name: "Acute myelomonocytic leukemia",
        distinction: "substantial granulocytic component.",
      },
      {
        name: "BPDCN",
        distinction:
          "CD4/CD56/CD123/TCF4 positive, without monocytic lineage program.",
      },
      {
        name: "Histiocytic sarcoma",
        distinction: "mature histiocytic phenotype and destructive mass.",
      },
    ],
  },
  {
    name: "Acute Erythroid Leukemia",
    group: "AML Defined by Differentiation",
    clinical:
      "Usually older adults; severe anemia, pancytopenia, transfusion dependence, and aggressive course.",
    clue: "Predominantly immature erythroid proliferation, often with TP53 abnormalities and complex karyotype.",
    histology: [
      "Marrow often shows sheets of immature erythroid precursors and marked erythroid predominance.",
      "Proerythroblasts have deeply basophilic cytoplasm, round nuclei, prominent nucleoli, and vacuoles.",
      "Multinucleation, nuclear irregularity, and maturation arrest may occur.",
    ],
    ihc: [
      "E-cadherin, CD71, CD36, and glycophorin A support erythroid lineage; very immature cells may lack glycophorin A.",
      "MPO is negative in erythroid blasts.",
      "Use a panel because no single marker is fully sensitive across maturation stages.",
    ],
    criteria: [
      "Apply current classification-specific criteria and quantify immature erythroid cells relative to total marrow cellularity.",
      "Distinguish from erythroid-predominant MDS.",
      "Assess TP53 allelic status and complex karyotype.",
    ],
    molecular: ["TP53 multi-hit and complex karyotype are common."],
    differential: [
      {
        name: "Erythroid-predominant MDS",
        distinction: "lacks acute erythroid leukemia criteria.",
      },
      {
        name: "Acute megakaryoblastic leukemia",
        distinction:
          "platelet glycoproteins positive, erythroid markers absent.",
      },
      {
        name: "AML-MR",
        distinction:
          "may show dysplasia but not the defining erythroid-predominant pattern.",
      },
    ],
  },
  {
    name: "Acute Megakaryoblastic Leukemia",
    group: "AML Defined by Differentiation",
    clinical:
      "Adults and children; Down syndrome-associated cases in young children; pancytopenia, hepatosplenomegaly, or dry tap.",
    clue: "Megakaryoblasts expressing platelet glycoproteins; marrow fibrosis is common.",
    histology: [
      "Blasts show cytoplasmic blebs and basophilic cytoplasm.",
      "Marrow reticulin fibrosis is common and aspirate may be unobtainable.",
      "Blasts may be small lymphoblast-like or large with abundant cytoplasm.",
    ],
    ihc: [
      "CD41, CD61, and CD42b establish megakaryocytic lineage; ensure staining is in blasts, not adherent platelets.",
      "CD34/CD117 variable; factor VIII-related antigen may be positive.",
      "MPO usually negative; CD36 may be positive.",
    ],
    criteria: [
      "Demonstrate acute blast burden and megakaryocytic differentiation by platelet glycoproteins.",
      "Exclude metastatic carcinoma, lymphoma, and erythroid leukemia.",
      "In children, assess Down syndrome and GATA1 mutation.",
    ],
    molecular: [
      "GATA1 mutation in Down syndrome-associated disease; RBM15::MRTFA in a distinct infantile subset.",
    ],
    differential: [
      { name: "AML with RBM15", distinction: ":MRTFA: defining fusion." },
      {
        name: "Transient abnormal myelopoiesis",
        distinction: "neonatal Down syndrome, GATA1-mutated, often regresses.",
      },
      {
        name: "Acute erythroid leukemia",
        distinction: "erythroid markers rather than platelet glycoproteins.",
      },
    ],
  },
  {
    name: "Myeloid Sarcoma",
    group: "Myeloid Sarcoma",
    clinical:
      "Any age; skin, bone, lymph node, soft tissue, orbit, GI tract, or other sites; may precede or accompany marrow AML.",
    clue: "Mass-forming tissue infiltration by myeloid blasts, with or without concurrent marrow AML.",
    histology: [
      "Destructive mass of blasts in diffuse sheets or nodules.",
      "Cells may be myeloblastic, monoblastic, or poorly differentiated.",
      "Crush artifact can mimic lymphoma; architecture is replaced by tumor.",
    ],
    ihc: [
      "MPO supports granulocytic differentiation.",
      "Lysozyme, CD68, CD163, CD64, and CD14 support monocytic differentiation.",
      "CD34/CD117/CD33/CD13 variable; exclude lymphoma, carcinoma, melanoma, BPDCN.",
    ],
    criteria: [
      "Establish myeloid lineage by morphology and IHC/flow.",
      "Correlate with blood/marrow and molecular profile.",
      "Can occur without overt marrow AML.",
    ],
    molecular: [
      "May share NPM1, KMT2A, RUNX1::RUNX1T1, CBFB::MYH11, or other AML lesions.",
    ],
    differential: [
      {
        name: "Lymphoma",
        distinction: "CD45/lineage markers; myeloid markers support sarcoma.",
      },
      {
        name: "BPDCN",
        distinction: "CD4/CD56/CD123/TCF4 positive, usually MPO-negative.",
      },
      {
        name: "Small round cell tumor",
        distinction:
          "use keratin, desmin, myogenin, and site-specific markers.",
      },
    ],
  },
  {
    name: "Myeloid Neoplasm Post Cytotoxic Therapy",
    group: "Secondary Myeloid Neoplasms",
    clinical:
      "Usually adults/older adults; latency varies; cytopenias, MDS, or AML after chemotherapy/radiation.",
    clue: "A myeloid neoplasm arising after qualifying cytotoxic exposure; morphology is that of the underlying MDS/AML.",
    histology: [
      "May range from MDS with multilineage dysplasia to overt AML.",
      "Complex karyotype and increased blasts are common.",
      "No single histologic pattern defines the therapy-related context.",
    ],
    ihc: [
      "IHC follows the underlying neoplasm; CD34/CD117 assess blasts and lineage markers characterize differentiation.",
      "No IHC marker identifies therapy-related disease.",
    ],
    criteria: [
      "Document qualifying prior cytotoxic exposure and classify the current neoplasm separately.",
      "Apply current post-cytotoxic therapy qualifier/category and entity hierarchy.",
    ],
    molecular: [
      "TP53, PPM1D, complex karyotype, and chromosome 5/7 abnormalities are enriched.",
    ],
    differential: [
      {
        name: "De novo AML/MDS",
        distinction: "same morphology without qualifying exposure.",
      },
      {
        name: "AML-MR",
        distinction: "may coexist with therapy-related context.",
      },
      {
        name: "Metastatic prior malignancy",
        distinction: "epithelial markers and clinical correlation.",
      },
    ],
  },
  {
    name: "Myeloid Neoplasm with Germline Predisposition",
    group: "Secondary Myeloid Neoplasms",
    clinical:
      "Children or adults; lifelong cytopenias, congenital features, family history, or multiple affected relatives may be clues.",
    clue: "Myeloid neoplasm arising in a patient with a pathogenic germline predisposition variant.",
    histology: [
      "Morphology is determined by the acquired neoplasm: MDS, AML, or MDS/MPN.",
      "Hypocellularity, dysplasia, increased blasts, or fibrosis may occur.",
      "Review prior CBCs and extrahematologic phenotype.",
    ],
    ihc: [
      "IHC is directed by the acquired neoplasm; no stain establishes germline predisposition.",
      "CD34/CD117 and lineage markers assess the acquired neoplasm.",
    ],
    criteria: [
      "Confirm germline variant using nonhematopoietic tissue when needed; blood/marrow may be confounded by clonal hematopoiesis.",
      "Classify acquired neoplasm and append predisposition qualifier.",
      "Genetic counseling and family assessment are important.",
    ],
    molecular: [
      "Germline genes include DDX41, RUNX1, GATA2, CEBPA, ETV6, ANKRD26, SAMD9/SAMD9L.",
    ],
    differential: [
      {
        name: "CHIP",
        distinction: "somatic mutation without germline status.",
      },
      {
        name: "GATA2 deficiency",
        distinction: "monocytopenia, B/NK-cell deficiency and infections.",
      },
      {
        name: "Familial platelet disorder with RUNX1",
        distinction: "lifelong thrombocytopenia/platelet dysfunction.",
      },
    ],
  },
  {
    name: "Myeloid Proliferations Associated with Down Syndrome",
    group: "Secondary Myeloid Neoplasms",
    clinical:
      "Neonates and young children with constitutional/mosaic trisomy 21; blasts, hepatosplenomegaly, effusions, or cytopenias.",
    clue: "Transient abnormal myelopoiesis or myeloid leukemia associated with trisomy 21 and GATA1 mutation.",
    histology: [
      "Transient abnormal myelopoiesis shows circulating/marrow megakaryoblasts, often with cytoplasmic blebs.",
      "Myeloid leukemia of Down syndrome often has megakaryoblastic differentiation and fibrosis.",
      "Blasts can mimic non-Down syndrome AMKL.",
    ],
    ihc: [
      "CD41/CD61/CD42b support megakaryocytic differentiation.",
      "CD34/CD117 variable; MPO generally negative in megakaryoblasts.",
      "GATA1 mutation testing is important.",
    ],
    criteria: [
      "Establish trisomy 21 and GATA1 mutation in the appropriate setting.",
      "Distinguish neonatal transient abnormal myelopoiesis from persistent/progressive myeloid leukemia of Down syndrome.",
    ],
    molecular: [
      "GATA1 truncating mutations; constitutional or mosaic trisomy 21.",
    ],
    differential: [
      { name: "Non-Down syndrome AMKL", distinction: "no trisomy 21." },
      {
        name: "Transient abnormal myelopoiesis",
        distinction: "neonatal and often self-limited.",
      },
      {
        name: "JMML",
        distinction:
          "monocytosis/RAS-pathway lesion rather than GATA1-mutated megakaryoblasts.",
      },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with Eosinophilia and Tyrosine Kinase Gene Fusions",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "All ages, often adults; eosinophilia, splenomegaly, cytopenias, MPN-like disease, lymphadenopathy, or organ injury.",
    clue: "Clonal fusion-driven neoplasm; eosinophilia may be absent and presentation may be myeloid or lymphoid.",
    histology: [
      "Marrow may show eosinophilic proliferation, myeloproliferation, mast-cell increase, or blasts.",
      "Some cases present as lymphoblastic lymphoma/leukemia.",
      "Morphology may mimic MPN, MDS/MPN, AML, or ALL.",
    ],
    ihc: [
      "IHC follows lineage: MPO, CD34/CD117, B/T markers, and mast-cell markers as indicated.",
      "No IHC stain defines the fusion category.",
    ],
    criteria: [
      "Demonstrate defining kinase fusion by karyotype, FISH, RT-PCR, or RNA sequencing.",
      "Do not require eosinophilia if a defining fusion is present.",
      "Identify fusion partner for classification and targeted therapy.",
    ],
    molecular: [
      "PDGFRA, PDGFRB, FGFR1, JAK2, FLT3, ETV6::ABL1, and other kinase fusions.",
    ],
    differential: [
      { name: "CEL", distinction: "no defining kinase fusion." },
      {
        name: "Reactive eosinophilia",
        distinction: "no clonal fusion and secondary cause identified.",
      },
      {
        name: "MPN/AML/ALL",
        distinction: "may be presenting phenotype of fusion-defined neoplasm.",
      },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with PDGFRA Rearrangement",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Usually adult men; eosinophilia, splenomegaly, cardiac injury, skin/GI symptoms, or mast-cell mediator symptoms.",
    clue: "Often FIP1L1::PDGFRA with eosinophilia and increased marrow mast cells.",
    histology: [
      "Marrow shows eosinophilic proliferation and variable myeloid hyperplasia.",
      "Spindle-shaped mast cells may be increased; fibrosis can occur.",
      "May mimic systemic mastocytosis.",
    ],
    ihc: [
      "CD117/tryptase highlight mast cells; CD25 is usually not the defining aberrancy of systemic mastocytosis.",
      "MPO/CD34 assess myeloid proliferation/blasts.",
      "Fusion requires molecular/FISH testing.",
    ],
    criteria: [
      "Demonstrate PDGFRA rearrangement, commonly FIP1L1::PDGFRA.",
      "CHIC2 deletion FISH or RNA fusion assay may be used.",
      "Exclude systemic mastocytosis and other kinase fusions.",
    ],
    molecular: ["FIP1L1::PDGFRA; many cases are highly imatinib-sensitive."],
    differential: [
      {
        name: "Systemic mastocytosis",
        distinction: "KIT mutation and aberrant CD25/CD2/CD30.",
      },
      { name: "CEL", distinction: "lacks PDGFRA fusion." },
      {
        name: "PDGFRB-rearranged neoplasm",
        distinction: "distinct locus, often monocytosis.",
      },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with PDGFRB Rearrangement",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Adults, often middle-aged men; eosinophilia, monocytosis, splenomegaly, leukocytosis, or lymphadenopathy.",
    clue: "CMML-like or eosinophilic MPN phenotype with PDGFRB fusion, commonly ETV6::PDGFRB.",
    histology: [
      "Marrow shows myeloproliferation with eosinophilia and monocytosis.",
      "May resemble CMML; fibrosis and atypical megakaryocytes can occur.",
      "Blast or lymphoblastic transformation may develop.",
    ],
    ihc: [
      "CD34/CD117 assess blasts; MPO highlights myeloid cells.",
      "CD14/CD64/CD163 may highlight monocytic component.",
      "No IHC marker identifies PDGFRB fusion.",
    ],
    criteria: [
      "Demonstrate PDGFRB rearrangement, commonly ETV6::PDGFRB.",
      "Perform karyotype/FISH or RNA fusion testing.",
    ],
    molecular: [
      "ETV6::PDGFRB and other PDGFRB fusions; many respond to imatinib.",
    ],
    differential: [
      {
        name: "CMML",
        distinction:
          "no PDGFRB fusion; fusion-positive disease is classified here.",
      },
      { name: "PDGFRA rearrangement", distinction: "often FIP1L1::PDGFRA." },
      { name: "CEL", distinction: "excludes defining PDGFRB fusion." },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with FGFR1 Rearrangement",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Usually adults; eosinophilia, MPN-like disease, lymphadenopathy, T/B-lymphoblastic lymphoma, or AML.",
    clue: "Aggressive stem-cell neoplasm with myeloid and/or lymphoblastic presentations.",
    histology: [
      "Marrow may show MPN, MDS/MPN, or acute leukemia.",
      "Lymph nodes may show T-lymphoblastic lymphoma with concurrent myeloid neoplasm.",
      "Multiple lineage phenotypes may occur over time.",
    ],
    ihc: [
      "Myeloid component: MPO/CD33/CD117.",
      "Lymphoblastic component: TdT, CD34, and B/T lineage markers.",
      "IHC identifies phenotype, not the fusion.",
    ],
    criteria: [
      "Demonstrate FGFR1 rearrangement and identify partner.",
      "Consider multi-lineage disease; assess marrow and extramedullary lesions.",
    ],
    molecular: ["FGFR1 fusions include ZMYM2::FGFR1 and others."],
    differential: [
      {
        name: "MPAL",
        distinction:
          "requires simultaneous lineage-defining criteria in acute leukemia; FGFR1 fusion defines underlying neoplasm.",
      },
      {
        name: "PDGFRA/B neoplasms",
        distinction: "different fusion and therapeutic profile.",
      },
      { name: "De novo T-ALL", distinction: "lacks FGFR1 rearrangement." },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with JAK2 Rearrangement",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Adults; anemia, eosinophilia, splenomegaly, leukocytosis, or lymphoblastic lymphoma/leukemia.",
    clue: "MPN-like disease or lymphoblastic neoplasm with JAK2 fusion, commonly PCM1::JAK2.",
    histology: [
      "Marrow resembles MPN with granulocytic proliferation, eosinophilia, and atypical megakaryocytes.",
      "Fibrosis may be prominent.",
      "Lymphoblastic transformation may occur.",
    ],
    ihc: [
      "MPO/CD34/CD117 assess myeloid blasts.",
      "TdT and B/T markers characterize lymphoblastic lesions.",
      "Molecular confirmation is required.",
    ],
    criteria: [
      "Demonstrate JAK2 rearrangement, commonly PCM1::JAK2.",
      "Do not confuse rearrangement with JAK2 V617F mutation.",
    ],
    molecular: [
      "PCM1::JAK2 and other JAK2 fusions; JAK inhibition may be relevant.",
    ],
    differential: [
      {
        name: "PMF with JAK2 V617F",
        distinction: "point mutation, not rearrangement.",
      },
      { name: "FGFR1-rearranged neoplasm", distinction: "distinct fusion." },
      {
        name: "MPAL",
        distinction: "lineage criteria are independent of JAK2 fusion.",
      },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with FLT3 Rearrangement",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Adults; eosinophilia, cytopenias, leukocytosis, or lymphoid neoplasm.",
    clue: "Rare fusion-driven neoplasm with variable myeloid/lymphoid presentation.",
    histology: [
      "Marrow shows variable myeloid proliferation, eosinophilia, or increased blasts.",
      "Morphology is nonspecific.",
      "Document lineage and blast burden.",
    ],
    ihc: [
      "IHC follows lineage; MPO, CD34/CD117, TdT, and B/T markers as appropriate.",
      "No IHC assay substitutes for fusion testing.",
    ],
    criteria: [
      "Demonstrate FLT3 rearrangement by cytogenetic or RNA-based assay.",
      "Distinguish fusion from FLT3-ITD/TKD mutations.",
    ],
    molecular: ["FLT3 fusion; identify exact partner."],
    differential: [
      {
        name: "AML with FLT3-ITD",
        distinction: "mutation, not rearrangement.",
      },
      {
        name: "Other kinase-fusion neoplasms",
        distinction: "classify by fusion partner.",
      },
      { name: "MPAL", distinction: "lineage criteria are independent." },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with ETV6::ABL1 Fusion",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "Adults/children; leukocytosis, eosinophilia, splenomegaly, or B-lymphoblastic leukemia/lymphoma.",
    clue: "MPN-like or lymphoid presentation with ETV6::ABL1 fusion.",
    histology: [
      "Marrow may resemble CML with granulocytic hyperplasia and left shift.",
      "Lymphoblastic transformation or concurrent lymphoid disease may occur.",
      "Eosinophilia is variable.",
    ],
    ihc: [
      "Myeloid phenotype: MPO/CD13/CD33.",
      "Lymphoid phenotype: TdT and B-lineage markers as appropriate.",
      "Fusion confirmation is molecular/cytogenetic.",
    ],
    criteria: [
      "Demonstrate ETV6::ABL1 fusion.",
      "Exclude BCR::ABL1-positive CML and other ABL-class fusions.",
    ],
    molecular: ["ETV6::ABL1; ABL-class inhibitor sensitivity may be relevant."],
    differential: [
      { name: "CML", distinction: "BCR::ABL1 rather than ETV6::ABL1." },
      {
        name: "Other kinase fusion neoplasms",
        distinction: "distinct partner.",
      },
      {
        name: "B-ALL",
        distinction: "assess underlying fusion-defined disease.",
      },
    ],
  },
  {
    name: "Myeloid/Lymphoid Neoplasm with Other Tyrosine Kinase Gene Fusions",
    group:
      "Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions",
    clinical:
      "All ages; chronic MPN, AML, lymphoblastic neoplasm, or eosinophilia may be presenting features.",
    clue: "Fusion-driven myeloid/lymphoid neoplasm involving another kinase gene.",
    histology: [
      "Morphology is fusion- and lineage-dependent.",
      "May show MPN, MDS/MPN, AML, or lymphoblastic disease.",
      "Assess marrow and extramedullary sites.",
    ],
    ihc: [
      "Use lineage-directed panel: MPO, CD34/CD117, CD13/CD33, TdT, B/T markers, monocytic markers.",
      "No universal IHC phenotype.",
    ],
    criteria: [
      "Demonstrate qualifying kinase fusion and identify partners.",
      "Exclude named PDGFRA/B, FGFR1, JAK2, FLT3, and ETV6::ABL1 categories.",
    ],
    molecular: [
      "RNA fusion sequencing is useful when karyotype/FISH is unrevealing.",
    ],
    differential: [
      {
        name: "Named kinase-fusion entities",
        distinction: "assign specific category.",
      },
      {
        name: "De novo AML/ALL",
        distinction: "exclude underlying fusion-defined disease.",
      },
      { name: "Reactive eosinophilia", distinction: "no defining fusion." },
    ],
  },
  {
    name: "MPAL, BCR::ABL1-Positive",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Usually adults; acute marrow failure, lymphadenopathy, or organomegaly.",
    clue: "Acute leukemia meeting both B-lineage and myeloid lineage criteria with BCR::ABL1 fusion.",
    histology: [
      "Bilineal disease has separate B-lymphoblast and myeloid blast populations.",
      "Biphenotypic disease has one population coexpressing lineage-defining markers.",
      "Morphology may be lymphoblast-like or myeloblast-like.",
    ],
    ihc: [
      "B-lineage: strong CD19 plus additional B markers (CD10, CD79a, cytoplasmic CD22) at qualifying intensity.",
      "Myeloid: MPO or at least two monocytic markers.",
      "BCR::ABL1 detected in leukemic clone.",
    ],
    criteria: [
      "Fulfill MPAL lineage criteria and demonstrate BCR::ABL1.",
      "Exclude CML blast phase and B-ALL with aberrant myeloid antigens.",
    ],
    molecular: [
      "BCR::ABL1; determine transcript and additional genomic lesions.",
    ],
    differential: [
      {
        name: "B-ALL with BCR",
        distinction: ":ABL1: lacks definitive myeloid lineage criteria.",
      },
      {
        name: "CML blast phase",
        distinction:
          "antecedent chronic phase/basophilia/dwarf megakaryocytes.",
      },
      {
        name: "MPAL KMT2A-rearranged",
        distinction: "different defining lesion.",
      },
    ],
  },
  {
    name: "MPAL, KMT2A-Rearranged",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Infants, children, and adults; acute cytopenias, leukocytosis, organomegaly, or tissue infiltration.",
    clue: "MPAL meeting B/myeloid or T/myeloid criteria with KMT2A rearrangement.",
    histology: [
      "Bilineal or biphenotypic populations may be present.",
      "Monocytic morphology and tissue infiltration may occur.",
      "Document whether markers are on the same or separate populations.",
    ],
    ihc: [
      "B-lineage requires CD19 plus additional B markers; T-lineage requires cytoplasmic/surface CD3.",
      "Myeloid requires MPO or monocytic marker combination.",
      "CD34/CD117/CD33/CD64/TdT variable.",
    ],
    criteria: [
      "Meet MPAL lineage criteria and demonstrate KMT2A rearrangement.",
      "Identify B/myeloid versus T/myeloid phenotype.",
      "Exclude AML with aberrant lymphoid antigens.",
    ],
    molecular: ["KMT2A rearrangement; identify fusion partner."],
    differential: [
      {
        name: "AML with KMT2A rearrangement",
        distinction: "lacks B/T lineage-defining criteria.",
      },
      {
        name: "B-ALL with KMT2A rearrangement",
        distinction: "lacks myeloid lineage criteria.",
      },
      { name: "MPAL BCR", distinction: ":ABL1: different genetic category." },
    ],
  },
  {
    name: "MPAL with Other Defined Genetic Abnormalities",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Age/presentation vary by genetic lesion; acute marrow failure or extramedullary disease.",
    clue: "MPAL with lineage-defining B/T and myeloid differentiation plus another recognized genetic lesion.",
    histology: [
      "Bilineal or biphenotypic morphology.",
      "Describe each blast population and marker distribution.",
      "Genetic lesion may define a distinct biologic subgroup.",
    ],
    ihc: [
      "Apply strict B-, T-, and myeloid-lineage criteria.",
      "Flow cytometry is central; IHC complements tissue assessment.",
      "Nonspecific CD13/CD33/CD7 alone does not establish lineage.",
    ],
    criteria: [
      "Fulfill MPAL criteria and demonstrate the specific genetic abnormality.",
      "Exclude named BCR::ABL1 and KMT2A categories.",
    ],
    molecular: [
      "Karyotype, FISH, RNA fusion testing, and NGS guided by phenotype.",
    ],
    differential: [
      {
        name: "AML with aberrant lymphoid markers",
        distinction: "lacks B/T lineage criteria.",
      },
      {
        name: "B/T-ALL with aberrant myeloid markers",
        distinction: "lacks MPO/monocytic criteria.",
      },
      {
        name: "Named MPAL genetic subtypes",
        distinction: "use specific category.",
      },
    ],
  },
  {
    name: "MPAL, B/Myeloid",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "All ages; cytopenias, circulating blasts, lymphadenopathy, or hepatosplenomegaly.",
    clue: "Unequivocal B-lineage and myeloid lineage in same or separate blast populations.",
    histology: [
      "Bilineal cases show distinct B-lymphoblast and myeloid populations.",
      "Biphenotypic cases show coexpression in one population.",
      "Morphology may be lymphoblastoid or myeloblastic.",
    ],
    ihc: [
      "Strong CD19 plus additional strong B marker(s) per current criteria.",
      "Myeloid lineage requires MPO or at least two monocytic markers.",
      "CD34/CD117/CD13/CD33 alone are not lineage-defining.",
    ],
    criteria: [
      "Fulfill both B-lineage and myeloid-lineage criteria.",
      "Exclude B-ALL with aberrant myeloid antigens and AML with aberrant CD19.",
    ],
    molecular: ["Test BCR::ABL1, KMT2A, and other recurrent lesions."],
    differential: [
      {
        name: "B-ALL with aberrant CD13/CD33",
        distinction: "no MPO/monocytic lineage program.",
      },
      {
        name: "AML with aberrant CD19",
        distinction: "no qualifying B-lineage phenotype.",
      },
      {
        name: "MPAL with BCR",
        distinction: ":ABL1/KMT2A: classify genetically.",
      },
    ],
  },
  {
    name: "MPAL, T/Myeloid",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Children/adults; cytopenias, mediastinal mass, lymphadenopathy, or organomegaly.",
    clue: "Unequivocal T-lineage and myeloid lineage differentiation.",
    histology: [
      "Bilineal or biphenotypic populations.",
      "Mediastinal mass may accompany T-lineage component.",
      "Morphology alone cannot distinguish T-ALL with aberrant myeloid markers.",
    ],
    ihc: [
      "T lineage requires cytoplasmic or surface CD3.",
      "Myeloid lineage requires MPO or monocytic marker combination.",
      "CD7/CD2/CD5/CD13/CD33 alone are not defining.",
    ],
    criteria: [
      "Fulfill T-lineage and myeloid-lineage criteria.",
      "Exclude T-ALL with aberrant CD13/CD33 but no myeloid-defining marker.",
    ],
    molecular: [
      "Perform cytogenetic and molecular testing, including BCR::ABL1 and KMT2A.",
    ],
    differential: [
      {
        name: "T-ALL with aberrant myeloid antigens",
        distinction: "no MPO/monocytic lineage criteria.",
      },
      {
        name: "AML with aberrant CD7",
        distinction: "no cytoplasmic/surface CD3.",
      },
      {
        name: "MPAL B/myeloid",
        distinction: "B markers rather than CD3 define lymphoid component.",
      },
    ],
  },
  {
    name: "MPAL, Rare Types",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Any age; presentation depends on lineage combination and genetic lesion.",
    clue: "Rare lineage combinations such as B/T or other combinations meeting strict MPAL criteria.",
    histology: [
      "Distinct or overlapping blast populations may be present.",
      "Document morphology and distribution of lineage markers.",
      "Multiple antigens without lineage-defining criteria do not establish MPAL.",
    ],
    ihc: [
      "Apply strict B-lineage, T-lineage, and myeloid definitions.",
      "Cytoplasmic/surface CD3 defines T lineage; CD19 plus additional B markers defines B lineage.",
      "MPO or monocytic marker combination defines myeloid lineage.",
    ],
    criteria: [
      "Demonstrate at least two lineage-defining programs.",
      "Exclude lineage infidelity in otherwise defined AML/ALL.",
    ],
    molecular: ["Karyotype, FISH, and RNA fusion testing."],
    differential: [
      {
        name: "B/T-ALL with aberrant myeloid antigens",
        distinction: "no myeloid criteria.",
      },
      {
        name: "AML with aberrant lymphoid antigens",
        distinction: "no B/T criteria.",
      },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "no lineage-defining markers.",
      },
    ],
  },
  {
    name: "Acute Leukemia of Ambiguous Lineage, NOS",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "All ages; acute marrow failure, circulating blasts, or extramedullary disease.",
    clue: "Acute leukemia that does not meet criteria for a specific genetically defined MPAL category or lineage-defined leukemia.",
    histology: [
      "Blasts may be morphologically undifferentiated or show limited nonspecific features.",
      "No reliable morphology assigns lineage.",
      "Requires exclusion of AML, B-ALL, T-ALL, and MPAL.",
    ],
    ihc: [
      "No lineage-defining MPO, monocytic combination, cytoplasmic/surface CD3, or qualifying B-lineage combination.",
      "CD34/CD117/TdT/CD7/CD13/CD33 alone are insufficient.",
    ],
    criteria: [
      "Meet acute leukemia criteria and lack lineage-specific criteria after comprehensive testing.",
      "Exclude genetically defined AML/ALL and MPAL.",
    ],
    molecular: ["No defining lesion; comprehensive genomic workup."],
    differential: [
      { name: "MPAL", distinction: "requires two lineage-defining programs." },
      {
        name: "Acute undifferentiated leukemia",
        distinction: "no lineage differentiation at all.",
      },
      {
        name: "AML/ALL with aberrant antigens",
        distinction: "a single aberrant marker is insufficient.",
      },
    ],
  },
  {
    name: "Acute Undifferentiated Leukemia",
    group: "Acute Leukemias of Mixed or Ambiguous Lineage",
    clinical:
      "Any age; rare; cytopenias, circulating blasts, or marrow replacement.",
    clue: "Blasts lack definitive myeloid, B-cell, or T-cell lineage markers.",
    histology: [
      "Monomorphic blasts, usually medium-sized with scant-to-moderate cytoplasm.",
      "No convincing granules, Auer rods, monocytic morphology, or lymphoid differentiation.",
      "Marrow is replaced by undifferentiated blasts.",
    ],
    ihc: [
      "CD34/CD117/HLA-DR may be positive but are not lineage-specific.",
      "MPO, cytoplasmic CD3, and B-lineage criteria are negative.",
      "Exclude epithelial, melanocytic, and other nonhematolymphoid tumors in tissue.",
    ],
    criteria: [
      "Meet acute leukemia criteria and lack lineage-defining markers after extensive evaluation.",
      "Exclude MPAL and genetically defined AML/ALL.",
    ],
    molecular: [
      "No defining molecular alteration; broad cytogenetic and molecular studies are required.",
    ],
    differential: [
      {
        name: "AML with minimal differentiation",
        distinction: "myeloid lineage markers support AML.",
      },
      { name: "MPAL", distinction: "two lineage programs are present." },
      {
        name: "B/T-ALL",
        distinction: "lineage-defining lymphoid markers are present.",
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
    <section className="mt-4">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
const lineageRows = [
  [
    "Granulocytic",
    "MPO-positive blasts; azurophilic granules; Auer rods; maturation through promyelocytes, myelocytes, and metamyelocytes.",
    "MPO supports myeloid lineage. Minimal maturation suggests AML with minimal differentiation/without maturation; substantial maturation suggests AML with maturation. Abnormal eosinophils suggest CBFB::MYH11.",
  ],
  [
    "Monocytic",
    "Folded or convoluted nuclei; abundant gray-blue cytoplasm; fine chromatin; vacuoles; promonocytes; tissue infiltration.",
    "Use at least two monocytic markers (CD11c, CD14, CD64, lysozyme, CD163, or nonspecific esterase). Promonocytes count as blast equivalents. Gingival/skin infiltration suggests monocytic AML or myeloid sarcoma.",
  ],
  [
    "Erythroid",
    "Proerythroblasts with deeply basophilic cytoplasm, round nuclei, prominent nucleoli, vacuoles, multinucleation, and maturation arrest.",
    "E-cadherin, CD71, CD36, and glycophorin A support erythroid differentiation. Immature erythroid proliferation with TP53/complex karyotype raises acute erythroid leukemia.",
  ],
  [
    "Megakaryocytic",
    "Blasts with cytoplasmic blebs, basophilic cytoplasm, variable granularity; marrow reticulin fibrosis and dry tap.",
    "CD41, CD61, and CD42b are lineage-defining when expressed by blasts. In infants, consider RBM15::MRTFA; in Down syndrome, assess GATA1.",
  ],
  [
    "Basophilic",
    "Coarse metachromatic cytoplasmic granules; basophilic immature forms; granules may obscure nuclear detail.",
    "CD123, CD203c, FcεRI, and metachromatic stains support basophilic differentiation. Exclude CML and mast-cell neoplasms.",
  ],
  [
    "Undifferentiated / ambiguous",
    "Monomorphic blasts without convincing lineage-specific morphology; lymphoblast-like and myeloblast-like patterns may overlap.",
    "CD34/CD117/TdT are not lineage-defining. Apply strict MPO, monocytic, cytoplasmic/surface CD3, and B-lineage criteria; CD13/CD33/CD7 alone are insufficient.",
  ],
];
export default function AMLDiagnosticReferencePage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "AML with PML::RARA Fusion",
    "AML with Minimal Differentiation",
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
            e.clinical +
            " " +
            e.clue +
            " " +
            e.histology.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.criteria.join(" ") +
            " " +
            e.molecular.join(" ") +
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
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Acute Myeloid Leukemia and Related Acute Leukemias
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-7 text-slate-600">
          A morphology-first reference to genetically defined AML, AML
          classified by differentiation, secondary myeloid neoplasms,
          kinase-fusion myeloid/lymphoid neoplasms, and acute leukemias of
          ambiguous lineage. Integrate marrow morphology, flow cytometry,
          immunohistochemistry, cytogenetics, and molecular testing.
        </p>
      </header>
      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          AML Classification: Practical Diagnostic Sequence
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish acute leukemia",
              "Quantify blasts in blood and marrow. Account for classification-specific genetic AML entities that may be diagnosed below the conventional 20% blast threshold.",
            ],
            [
              "2. Assign lineage",
              "Use MPO for granulocytic lineage; at least two monocytic markers for monocytic lineage; CD41/CD61/CD42b for megakaryocytic lineage; and an erythroid marker panel for erythroid differentiation.",
            ],
            [
              "3. Exclude genetically defined AML first",
              "Prioritize PML::RARA, RUNX1::RUNX1T1, CBFB::MYH11, KMT2A, MECOM, NUP98, NPM1, CEBPA, BCR::ABL1, and other recognized defining lesions.",
            ],
            [
              "4. Evaluate myelodysplasia-related status",
              "Review antecedent MDS/MDS-MPN, multilineage dysplasia, cytogenetics, and myelodysplasia-related mutations. Apply the selected classification hierarchy.",
            ],
            [
              "5. Consider secondary context",
              "Document prior cytotoxic therapy, germline predisposition, and Down syndrome-associated myeloid proliferation.",
            ],
            [
              "6. Assess tissue disease and ambiguous lineage",
              "Myeloid sarcoma may precede marrow AML. For MPAL, require strict lineage-defining criteria rather than nonspecific antigen coexpression.",
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
          <strong>Classification note:</strong> WHO-HAEM5 and ICC differ in some
          names, blast thresholds, and entity hierarchies. State the
          classification framework used and report the exact genetic lesion.
        </p>
      </section>
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-lg font-bold text-slate-950">
          Lineage-Specific Histology and Immunophenotype
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Pattern-recognition guide for identifying lineage and selecting
          confirmatory tests.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 p-3">Lineage</th>
                <th className="border border-slate-200 p-3">
                  Histologic Features
                </th>
                <th className="border border-slate-200 p-3">
                  IHC / Diagnostic Direction
                </th>
              </tr>
            </thead>
            <tbody>
              {lineageRows.map((r) => (
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
            High-Yield Genetic Associations
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              ["APL", "PML::RARA; urgent ATRA-sensitive leukemia."],
              ["Core-binding factor AML", "RUNX1::RUNX1T1 or CBFB::MYH11."],
              [
                "Other recurrent fusions",
                "DEK::NUP214, RBM15::MRTFA, KMT2A, MECOM, NUP98.",
              ],
              ["Mutation-defined AML", "NPM1 and qualifying CEBPA mutation."],
              [
                "Myelodysplasia-related AML",
                "MR gene mutations and/or qualifying cytogenetic abnormalities.",
              ],
              [
                "Acute erythroid leukemia",
                "TP53 multi-hit and complex karyotype are frequent.",
              ],
              [
                "Down syndrome-associated disease",
                "Trisomy 21 with GATA1 mutation.",
              ],
              [
                "Kinase-fusion neoplasms",
                "PDGFRA/B, FGFR1, JAK2, FLT3, ETV6::ABL1, and other kinase fusions.",
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
            Immunophenotypic Guardrails
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              CD13, CD33, CD7, CD34, and CD117 are not individually
              lineage-defining.
            </li>
            <li>
              MPO establishes myeloid differentiation when convincingly
              expressed in blasts.
            </li>
            <li>
              Monocytic lineage requires at least two accepted monocytic
              markers.
            </li>
            <li>
              MPAL requires strict B-, T-, and myeloid-lineage criteria;
              aberrant antigen expression alone is insufficient.
            </li>
            <li>
              CD41/CD61/CD42b must label blasts, not merely adherent platelets.
            </li>
            <li>
              In tissue, exclude lymphoma, carcinoma, melanoma, BPDCN, and
              histiocytic neoplasms before diagnosing myeloid sarcoma.
            </li>
          </ul>
        </div>
      </section>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="aml-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, fusions, mutations, morphology, or markers
          </label>
          <input
            id="aml-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: PML::RARA, MPO, CD41, NPM1, KMT2A, promonocytes..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-80">
          <label
            htmlFor="aml-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="aml-group"
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
        <span>
          Open an entity for clinical, diagnostic, morphologic,
          immunophenotypic, and molecular details.
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
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Clinical Profile">
                        <p className="text-sm leading-6 text-slate-700">
                          {e.clinical}
                        </p>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <Bullets items={e.criteria} />
                      </Section>
                      <Section title="Histopathology">
                        <Bullets items={e.histology} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype">
                        <Bullets items={e.ihc} />
                      </Section>
                      <Section title="Molecular Pathology">
                        <Bullets items={e.molecular} />
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
            No matching entities. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for hematopathology. Interpret
        morphology, immunophenotype, cytogenetic findings, and molecular results
        in conjunction with clinical history and laboratory findings.
      </footer>
    </main>
  );
}
