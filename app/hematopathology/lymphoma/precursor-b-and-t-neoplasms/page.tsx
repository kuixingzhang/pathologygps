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
  prognosis: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "B-Lymphoblastic Leukemia/Lymphoma (B-ALL/LBL)",
    group: "B-Cell Precursor Neoplasms",
    clue: "A monotonous immature B-lineage population with marrow/blood disease or a dominant tissue mass; confirm lineage and immaturity, then classify genetically.",
    summary:
      "A precursor B-cell neoplasm involving bone marrow and usually blood (B-ALL), or presenting primarily in nodal/extranodal tissue (B-LBL).",
    clinical: [
      "Predominantly children; peak before age 6, with a smaller adult peak.",
      "Marrow failure, cytopenias, leukocytosis or leukopenia, bone pain, lymphadenopathy, and hepatosplenomegaly.",
      "CNS, testes, skin, soft tissue, liver, spleen, and lymph nodes may be involved; mediastinal masses are uncommon.",
    ],
    criteria: [
      "Abnormal lymphoblasts in blood/marrow or an architecture-effacing tissue infiltrate.",
      "B-lineage supported by CD19, CD22, cytoplasmic CD79a, and/or PAX5; interpret markers as a panel.",
      "Immaturity supported by TdT and/or CD34, bright CD10, low CD45, low/absent CD20, and absent surface light chains; rare cases lack TdT or CD34.",
      "Establish the genetic subtype with appropriate karyotype, FISH, DNA/RNA sequencing, copy-number, and/or expression studies; use NOS only after comprehensive exclusion of defined types.",
    ],
    histology: [
      "Blasts range from small cells with scant cytoplasm and condensed chromatin to larger cells with dispersed chromatin and visible nucleoli.",
      "Nuclei are round, oval, indented, or convoluted; mitoses are variable and macrophages may produce a starry-sky pattern.",
      "Marrow shows diffuse sheets or loose collections that replace or intermingle with hematopoiesis; tissue lesions often efface architecture.",
    ],
    ihc: [
      "PAX5 is the most sensitive tissue B-lineage marker; CD79a and CD19 support lineage but are not individually specific.",
      "TdT is present in most cases; CD34 is variable. CD10 is often positive, CD20 is usually dim/negative, and CD45 is dim.",
      "Compare with hematogones: leukemia shows aberrant antigen intensity/coexpression, including increased CD58/CD10/CD19 or decreased CD38/CD81; use flow cytometry for MRD.",
      "CD13/CD33 may be aberrantly expressed, especially in selected genetic subtypes, and do not establish myeloid lineage.",
    ],
    differential: [
      {
        name: "T-Lymphoblastic Leukemia/Lymphoma",
        distinction:
          "T-lineage requires cytoplasmic or surface CD3; CD7/CD2/CD5 support T differentiation. B-lineage markers in combination favor B-ALL/LBL.",
      },
      {
        name: "Hematogone-rich marrow",
        distinction:
          "Normal B-cell precursors show orderly maturation with a spectrum of phenotypes; leukemia forms an aberrant, relatively uniform population.",
      },
      {
        name: "AML with t(8;21)",
        distinction:
          "May express CD19, PAX5, or cytoplasmic CD79a; establish myeloid differentiation with MPO and the full phenotype/genetic context.",
      },
      {
        name: "B/myeloid mixed-phenotype acute leukemia",
        distinction:
          "Requires convincing lineage-defining myeloid differentiation, particularly moderate/strong MPO or monocytic differentiation; isolated CD13/CD33 is insufficient.",
      },
      {
        name: "Mature B-cell neoplasms (including Burkitt lymphoma)",
        distinction:
          "Mature B-cell markers and surface immunoglobulin/light-chain restriction, absent precursor phenotype, and entity-specific morphology/genetics favor a mature neoplasm.",
      },
    ],
    molecular: [
      "Genetic classification is essential: evaluate aneuploidy and recurrent fusions/rearrangements, including BCR::ABL1, KMT2A, ETV6::RUNX1, TCF3::PBX1, and TCF3::HLF.",
      "RNA sequencing or expression profiling may be required for cryptic fusions and BCR::ABL1-like or ETV6::RUNX1-like disease.",
      "Consider germline predisposition testing (e.g., PAX5, ETV6, TP53) when family history or phenotype raises concern.",
    ],
    prognosis: [
      "Risk-adapted therapy has produced long-term remission in more than 90% of children in contemporary settings; outcomes in adults are less favorable.",
      "Adverse factors include age under 1 or over 10 years, WBC above 50,000/µL, hypodiploidy, CNS disease, slow early response, and measurable residual disease (MRD).",
      "Genetic subtype and MRD at defined treatment time points are central to risk assignment; CNS/testicular involvement has treatment implications.",
    ],
    pitfalls: [
      "Do not use B-ALL/LBL for mature B-cell neoplasms.",
      "A blast percentage threshold is not an absolute prerequisite for diagnosis; interpret low-level disease cautiously and in context.",
    ],
  },
  {
    name: "B-ALL/LBL with High Hyperdiploidy",
    group: "B-Cell Precursor Neoplasms",
    clue: "A childhood B-ALL phenotype with 51–65 chromosomes and characteristic whole-chromosome gains.",
    summary:
      "A genetically defined B-ALL/LBL with recurrent non-random gains of whole chromosomes.",
    clinical: [
      "Most common in children; approximately 25–35% of pediatric B-ALL and 7–8% of adult cases.",
      "Often presents with a relatively low WBC count.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate 51–65 chromosomes with characteristic non-random gains.",
      "Exclude a doubled hypodiploid clone (masked hypodiploidy) and other defining genetic lesions.",
    ],
    histology: [
      "No distinctive morphology; the appearance is that of conventional B-lymphoblasts.",
    ],
    ihc: [
      "No defining immunophenotype; use the B-ALL/LBL precursor B-cell panel.",
      "Flow cytometric DNA index may show increased DNA content.",
    ],
    differential: [
      {
        name: "Hypodiploid B-ALL/LBL with masked doubling",
        distinction:
          "A doubled hypodiploid clone may mimic hyperdiploidy; SNP array/copy-neutral LOH and DNA-index analysis reveal the underlying monosomies.",
      },
      {
        name: "Other genetically defined B-ALL/LBL",
        distinction:
          "Exclude subtype-defining fusions and rearrangements before assigning high hyperdiploidy.",
      },
    ],
    molecular: [
      "Karyotype demonstrates 51–65 chromosomes, often with gains of X, 4, 6, 10, 14, 17, 18, and 21.",
      "FISH, DNA index, and SNP array help when metaphases are unavailable or pseudohyperdiploidy is suspected.",
    ],
    prognosis: [
      "Very favorable in children; long-term overall survival exceeds 90% in many series, particularly with favorable clinical risk and low MRD.",
      "Specific chromosome-gain patterns, age, WBC count, and MRD modify risk.",
    ],
  },
  {
    name: "B-ALL/LBL with Hypodiploidy",
    group: "B-Cell Precursor Neoplasms",
    clue: "A B-ALL clone with 43 or fewer chromosomes; actively exclude a doubled, deceptively hyperdiploid clone.",
    summary:
      "Includes near-haploid, low-hypodiploid, and high-hypodiploid subgroups.",
    clinical: [
      "Near-haploid disease is rare and mainly pediatric; low-hypodiploidy becomes more frequent with age.",
      "Low-hypodiploid disease accounts for more than 10% of adult B-ALL in some series.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate ≤43 chromosomes.",
      "Assess for masked hypodiploidy when the karyotype appears near-triploid/pseudohyperdiploid.",
    ],
    histology: [
      "No distinctive morphology; conventional B-lymphoblast morphology.",
    ],
    ihc: [
      "No defining IHC profile beyond precursor B-lineage markers.",
      "p53 staining may be aberrant in low-hypodiploid cases but does not replace genetic testing.",
    ],
    differential: [
      {
        name: "High-hyperdiploid B-ALL/LBL",
        distinction:
          "A doubled hypodiploid clone can mimic high hyperdiploidy; SNP array demonstrates copy-neutral LOH across chromosomes that were originally monosomic.",
      },
      {
        name: "Near-diploid B-ALL",
        distinction:
          "Cases with 44–45 chromosomes are not included in the ≤43 chromosome hypodiploid category.",
      },
    ],
    molecular: [
      "Near-haploid: 24–31 chromosomes; low-hypodiploid: 32–39; high-hypodiploid: 40–43.",
      "Near-haploid cases often have RTK/RAS pathway alterations, IKZF3 deletions, and 6p22 histone-cluster deletions.",
      "Low-hypodiploid cases show TP53 alterations in more than 90%; approximately half may be germline, associated with Li-Fraumeni syndrome. IKZF2 and RB1 alterations also occur.",
      "Use karyotype, FISH, DNA index, and SNP array to detect masked doubling.",
    ],
    prognosis: [
      "Poor prognosis across hypodiploid subgroups; lower chromosome number generally correlates with worse outcome.",
      "Germline TP53 findings have major hereditary cancer implications.",
    ],
  },
  {
    name: "B-ALL/LBL with Intrachromosomal Amplification of Chromosome 21 (iAMP21)",
    group: "B-Cell Precursor Neoplasms",
    clue: "Multiple RUNX1 signals clustered on abnormal chromosome 21 in a B-ALL case, often with a relatively low blast burden.",
    summary:
      "A rare B-ALL subtype defined by complex intrachromosomal amplification of chromosome 21.",
    clinical: [
      "Usually occurs in children, often school-age; uncommon in adults.",
      "May have a relatively low WBC count.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate characteristic amplification of chromosome 21/RUNX1, typically with at least five RUNX1 signals in the abnormal clone, interpreted with the assay pattern and cytogenetics.",
      "Distinguish from simple trisomy/tetrasomy 21 in high-hyperdiploid B-ALL.",
    ],
    histology: ["No reliable morphologic distinction from other B-ALL."],
    ihc: [
      "No defining IHC phenotype; standard precursor B-cell markers apply.",
    ],
    differential: [
      {
        name: "High-hyperdiploid B-ALL/LBL",
        distinction:
          "Usually shows whole-chromosome gains; iAMP21 has complex intrachromosomal RUNX1 amplification.",
      },
      {
        name: "B-ALL with ETV6::RUNX1",
        distinction:
          "ETV6::RUNX1 FISH shows fusion and residual ETV6/RUNX1 signals; multiple RUNX1 signals can also flag iAMP21, which requires targeted confirmation.",
      },
    ],
    molecular: [
      "FISH using RUNX1 probes is central; karyotype and chromosomal microarray can characterize the complex chromosome 21 structure.",
    ],
    prognosis: [
      "Historically associated with poor outcome, particularly with standard-risk treatment; risk-adapted intensification improves outcomes.",
    ],
  },
  {
    name: "B-ALL/LBL with BCR::ABL1 Fusion",
    group: "B-Cell Precursor Neoplasms",
    clue: "B-ALL with Philadelphia chromosome/BCR::ABL1; test even without a known history of CML.",
    summary:
      "A genetically defined B-ALL subtype with constitutive ABL1 tyrosine kinase signaling.",
    clinical: [
      "Occurs in children and adults; frequency increases with age.",
      "May present with high WBC count and occasionally a CML-like blood picture.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate BCR::ABL1 fusion by karyotype, FISH, or molecular testing.",
      "Distinguish de novo B-ALL from CML in lymphoid blast phase using clinical history, marrow background, and genomic context.",
    ],
    histology: [
      "Morphology is variable and not specific; some cases show increased myeloid-associated antigen expression.",
    ],
    ihc: [
      "Precursor B-cell phenotype; CD13, CD33, and CD66c may be expressed.",
      "CRLF2 or other aberrancies may be present but are not defining.",
    ],
    differential: [
      {
        name: "BCR::ABL1-positive CML in lymphoid blast phase",
        distinction:
          "Prior CML, basophilia, splenomegaly, granulocytic hyperplasia, and BCR::ABL1 in non-blast hematopoietic cells support CML blast phase.",
      },
      {
        name: "BCR::ABL1-like B-ALL",
        distinction:
          "Similar expression profile but lacks BCR::ABL1 fusion; has alternative kinase-activating lesions.",
      },
    ],
    molecular: [
      "Detect BCR::ABL1 by karyotype, FISH, RT-PCR, or RNA sequencing; characterize transcript type when clinically relevant.",
    ],
    prognosis: [
      "Historically adverse, but outcomes have improved substantially with addition of ABL1 tyrosine kinase inhibitors to ALL therapy.",
      "MRD response and kinase-domain resistance mutations influence management.",
    ],
  },
  {
    name: "B-ALL/LBL with BCR::ABL1-Like Features",
    group: "B-Cell Precursor Neoplasms",
    clue: "A Ph-like expression profile without BCR::ABL1 fusion, often with CRLF2 overexpression or another kinase-activating lesion.",
    summary:
      "A heterogeneous B-ALL group that molecularly resembles BCR::ABL1-positive disease but lacks the defining fusion.",
    clinical: [
      "Occurs in children, adolescents, and adults; often associated with high-risk clinical features.",
      "CRLF2-rearranged cases are enriched in patients with Down syndrome and in some populations.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate a BCR::ABL1-like gene-expression profile or a defining kinase-activating genetic lesion.",
      "Exclude actual BCR::ABL1 fusion.",
    ],
    histology: ["No distinctive morphology."],
    ihc: [
      "CRLF2 overexpression by flow cytometry or IHC can screen for a substantial subset, but a negative result does not exclude the group.",
      "Standard precursor B-cell phenotype.",
    ],
    differential: [
      {
        name: "BCR::ABL1-positive B-ALL",
        distinction:
          "BCR::ABL1-like disease lacks the BCR::ABL1 fusion and instead carries alternative kinase lesions.",
      },
      {
        name: "Other B-ALL with defined genetic alterations",
        distinction:
          "Assign a more specific genetic entity when a defining lesion is identified.",
      },
    ],
    molecular: [
      "Diverse lesions activate ABL-class or JAK-STAT signaling, including ABL1, ABL2, CSF1R, PDGFRB, JAK2, EPOR, and CRLF2 rearrangements or mutations.",
      "RNA sequencing, targeted fusion panels, and gene-expression profiling are often required.",
    ],
    prognosis: [
      "Generally associated with an unfavorable outcome and increased relapse risk, particularly with persistent MRD.",
      "Potential sensitivity to kinase inhibitors depends on the specific kinase lesion; molecular definition is essential.",
    ],
  },
  {
    name: "B-ALL/LBL with KMT2A Rearrangement",
    group: "B-Cell Precursor Neoplasms",
    clue: "Infant B-ALL with very immature phenotype and KMT2A rearrangement; consider also in older patients with a compatible fusion.",
    summary:
      "A genetically defined B-ALL subtype driven by KMT2A rearrangement with numerous possible fusion partners.",
    clinical: [
      "Strongly associated with infancy; can occur at other ages.",
      "Often presents with high WBC count and aggressive disease.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate KMT2A rearrangement by break-apart FISH, karyotype, or RNA sequencing.",
    ],
    histology: [
      "Blasts may be larger with more abundant cytoplasm and variable monocytic-like features; morphology is not diagnostic.",
    ],
    ihc: [
      "Often a pro-B phenotype: CD10 negative or dim, CD34 variable, and strong CD19/cytoplasmic CD79a.",
      "Aberrant myeloid/monocytic markers may occur.",
    ],
    differential: [
      {
        name: "B-ALL with ZNF384 rearrangement",
        distinction:
          "Both may show lineage plasticity and myeloid/monocytic antigen expression; defining fusion testing separates them.",
      },
      {
        name: "AML with KMT2A rearrangement",
        distinction:
          "Establish lineage using the complete phenotype; B-lineage-defining marker combination supports B-ALL.",
      },
    ],
    molecular: [
      "KMT2A has more than 90 reported fusion partners; break-apart FISH detects rearrangement, while RNA sequencing identifies the partner.",
    ],
    prognosis: [
      "Generally adverse, especially in infants; age, fusion partner, treatment response, and MRD affect outcome.",
    ],
  },
  {
    name: "B-ALL/LBL with ETV6::RUNX1 Fusion",
    group: "B-Cell Precursor Neoplasms",
    clue: "Childhood B-ALL with ETV6::RUNX1 fusion, often with a favorable-risk profile.",
    summary: "A common pediatric B-ALL subtype defined by t(12;21)(p13;q22.1).",
    clinical: [
      "Predominantly young children; rare in infants and adults.",
      "Often presents with a relatively low WBC count.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate ETV6::RUNX1 fusion by FISH, RT-PCR, or RNA sequencing.",
    ],
    histology: [
      "No specific morphology; blasts resemble conventional B-lymphoblasts.",
    ],
    ihc: [
      "Often CD10-positive/common B phenotype; no IHC marker substitutes for fusion detection.",
    ],
    differential: [
      {
        name: "ETV6::RUNX1-like B-ALL",
        distinction:
          "Similar phenotype/expression profile but lacks ETV6::RUNX1 fusion and carries alternative genetic lesions.",
      },
      {
        name: "High-hyperdiploid B-ALL",
        distinction:
          "Chromosome 21 gains may produce multiple FISH signals; assess the actual fusion pattern and chromosome copy number.",
      },
    ],
    molecular: [
      "Cryptic t(12;21) is commonly detected by ETV6/RUNX1 dual-fusion FISH or molecular assays.",
    ],
    prognosis: [
      "Favorable prognosis in children, with high cure rates; relapse can occur late and requires appropriate follow-up.",
    ],
  },
  {
    name: "B-ALL/LBL with ETV6::RUNX1-Like Features",
    group: "B-Cell Precursor Neoplasms",
    clue: "ETV6::RUNX1-like expression pattern without the fusion, often with IKZF1 or other B-cell developmental lesions.",
    summary:
      "A heterogeneous group phenocopying ETV6::RUNX1-positive B-ALL at the expression level.",
    clinical: [
      "Primarily pediatric and adolescent; clinical risk varies with the underlying lesion.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate ETV6::RUNX1-like gene-expression profile without ETV6::RUNX1 fusion.",
      "Identify the underlying genetic alteration when possible.",
    ],
    histology: ["No defining morphologic pattern."],
    ihc: [
      "No specific IHC surrogate reliably establishes this entity; use standard B-ALL panel.",
    ],
    differential: [
      {
        name: "ETV6::RUNX1-positive B-ALL",
        distinction: "The defining fusion is absent in the like-feature group.",
      },
      {
        name: "BCR::ABL1-like B-ALL",
        distinction:
          "Both are expression-defined heterogeneous groups; use the relevant expression classifier and kinase/genetic testing.",
      },
    ],
    molecular: [
      "Gene-expression profiling defines the phenotype; underlying lesions may include alterations in genes involved in B-cell development and signaling.",
    ],
    prognosis: [
      "Outcome is heterogeneous; some cases have adverse features. Risk assessment requires the specific genomic lesion and MRD.",
    ],
  },
  {
    name: "B-ALL/LBL with TCF3::PBX1 Fusion",
    group: "B-Cell Precursor Neoplasms",
    clue: "B-ALL with t(1;19), often showing strong CD9 and a pre-B phenotype with cytoplasmic μ.",
    summary: "A recurrent fusion-defined B-ALL subtype.",
    clinical: [
      "Occurs mainly in children but also in adults.",
      "May show CNS involvement at presentation.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate TCF3::PBX1 fusion, typically t(1;19)(q23;p13.3).",
    ],
    histology: [
      "No specific histologic pattern; occasional convoluted nuclei or cytoplasmic vacuoles may be seen.",
    ],
    ihc: [
      "Often CD10-positive and CD34-negative; cytoplasmic μ may be expressed.",
      "CD9 is commonly strong; interpret with the full phenotype.",
    ],
    differential: [
      {
        name: "Other pre-B ALL",
        distinction:
          "Cytoplasmic μ and CD9 are supportive but not specific; demonstrate TCF3::PBX1 fusion.",
      },
      {
        name: "B-ALL with TCF3::HLF fusion",
        distinction:
          "Both involve TCF3 but have distinct partners and markedly different prognoses; fusion testing is decisive.",
      },
    ],
    molecular: [
      "Detect t(1;19)/TCF3::PBX1 by karyotype, FISH, or RNA-based testing.",
    ],
    prognosis: [
      "Historically associated with adverse outcome, particularly with CNS disease, but modern risk-adapted therapy has improved survival.",
    ],
  },
  {
    name: "B-ALL/LBL with IGH::IL3 Fusion",
    group: "B-Cell Precursor Neoplasms",
    clue: "Marked eosinophilia with a B-lymphoblastic population and an apparent myeloproliferative presentation.",
    summary:
      "A rare B-ALL subtype in which IGH regulatory elements drive IL3 overexpression.",
    clinical: [
      "Usually presents in adolescents or adults; marked peripheral blood eosinophilia is a major clue.",
      "May mimic a myeloproliferative neoplasm.",
    ],
    criteria: [
      "Demonstrate B-lineage lymphoblasts.",
      "Confirm IGH::IL3 rearrangement.",
    ],
    histology: [
      "Marrow may show prominent eosinophilia and features that resemble a myeloproliferative process.",
    ],
    ihc: [
      "Establish B-lineage with PAX5/CD19/cCD79a/CD22 and immaturity markers.",
      "Eosinophils are reactive and do not represent the neoplastic lineage.",
    ],
    differential: [
      {
        name: "Myeloid/lymphoid neoplasm with eosinophilia and tyrosine kinase fusion",
        distinction:
          "These are myeloid neoplasms with characteristic kinase fusions; molecular testing and lineage assessment distinguish them.",
      },
      {
        name: "T-ALL/LBL with eosinophilia",
        distinction:
          "T-lineage is defined by cCD3; IGH::IL3 supports the rare B-ALL subtype.",
      },
    ],
    molecular: [
      "FISH or RNA sequencing identifies IGH::IL3 fusion; assess IL3 rearrangement in the appropriate eosinophilic presentation.",
    ],
    prognosis: [
      "Rare entity with limited outcome data; prognosis and treatment should be guided by specialist hematologic evaluation and response.",
    ],
  },
  {
    name: "B-ALL/LBL with TCF3::HLF Fusion",
    group: "B-Cell Precursor Neoplasms",
    clue: "Rare B-ALL with t(17;19), often with severe coagulopathy, hypercalcemia, or unusual immunophenotype.",
    summary: "A rare, distinct TCF3-rearranged B-ALL subtype.",
    clinical: [
      "Usually occurs in children and adolescents.",
      "May present with hypercalcemia, coagulopathy, disseminated intravascular coagulation, or thrombosis.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate TCF3::HLF fusion, typically t(17;19)(q22;p13).",
    ],
    histology: [
      "Morphology is variable and may show unusual blast features; no single pattern is diagnostic.",
    ],
    ihc: [
      "Precursor B-cell markers are present, but CD10/CD34 may be absent and myeloid-associated antigens may be aberrantly expressed.",
    ],
    differential: [
      {
        name: "B-ALL with TCF3::PBX1",
        distinction:
          "Different fusion partner; TCF3::HLF has a much more adverse clinical course.",
      },
      {
        name: "AML or MPAL",
        distinction:
          "Aberrant myeloid markers alone do not establish myeloid lineage; evaluate MPO and monocytic differentiation.",
      },
    ],
    molecular: ["Confirm TCF3::HLF by karyotype, FISH, or RNA sequencing."],
    prognosis: [
      "Very poor-risk subtype with frequent treatment resistance and relapse; early specialist-directed risk-adapted therapy is essential.",
    ],
  },
  {
    name: "B-ALL with DUX4 Rearrangement",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "Often CD2-positive B-ALL with a characteristic DUX4 expression signature; ERG deletion is a supportive associated finding.",
    summary:
      "A molecularly defined subtype within B-ALL with other genetic alterations.",
    clinical: [
      "Usually occurs in children and adolescents; can occur in adults.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate DUX4 rearrangement or a validated DUX4-associated expression signature.",
    ],
    histology: ["No defining morphology."],
    ihc: [
      "CD2 may be aberrantly expressed; CD371 (CLEC12A) can be a useful surrogate in some settings.",
      "ERG protein expression may be reduced or absent in association with ERG deletion.",
    ],
    differential: [
      {
        name: "Other B-ALL with aberrant CD2",
        distinction:
          "CD2 alone is not diagnostic; confirm DUX4-associated molecular findings.",
      },
      {
        name: "ZNF384-rearranged B-ALL",
        distinction:
          "May share lineage plasticity; defining fusion/expression profiling distinguishes the entities.",
      },
    ],
    molecular: [
      "DUX4 rearrangement is often cryptic and may require RNA sequencing or expression profiling; ERG deletion is frequent.",
    ],
    prognosis: [
      "Generally favorable outcome in children in contemporary series, despite some adverse presenting features; MRD remains important.",
    ],
  },
  {
    name: "B-ALL with MEF2D Rearrangement",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "Often older children/adolescents with CD10-dim/negative phenotype and strong cytoplasmic/nuclear MEF2D expression.",
    summary:
      "A recurrent fusion-defined B-ALL subtype, commonly involving MEF2D::BCL9 or other partners.",
    clinical: ["Often affects older children, adolescents, and young adults."],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate MEF2D rearrangement/fusion or a validated molecular signature.",
    ],
    histology: ["No specific morphology."],
    ihc: [
      "CD10 may be dim or absent; CD38 may be bright.",
      "MEF2D immunohistochemistry can be a useful screening adjunct where validated.",
    ],
    differential: [
      {
        name: "B-ALL with ZNF384 rearrangement",
        distinction:
          "Both may show reduced CD10; molecular testing defines the subtype.",
      },
      {
        name: "B-ALL NOS",
        distinction: "A defined MEF2D lesion excludes NOS.",
      },
    ],
    molecular: [
      "Common fusions include MEF2D::BCL9 and MEF2D::HNRNPUL1; RNA sequencing is useful.",
    ],
    prognosis: [
      "Often associated with an unfavorable outcome and increased relapse risk; MRD response is important.",
    ],
  },
  {
    name: "B-ALL with ZNF384 Rearrangement",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "CD10-negative/dim B-ALL with myeloid or monocytic antigen expression and potential lineage plasticity.",
    summary:
      "A fusion-defined B-ALL subtype with a broad range of fusion partners.",
    clinical: ["Occurs across pediatric and adult age groups."],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate ZNF384 rearrangement by molecular testing.",
    ],
    histology: [
      "No specific morphology; some cases show monocytic differentiation or mixed morphologic features.",
    ],
    ihc: [
      "CD10 is often absent or dim.",
      "CD13, CD33, CD65, or monocytic markers may be expressed; interpret in context of lineage-defining markers.",
    ],
    differential: [
      {
        name: "KMT2A-rearranged B-ALL",
        distinction:
          "Both may show lineage plasticity and myeloid/monocytic antigens; fusion testing separates them.",
      },
      {
        name: "B/myeloid MPAL",
        distinction:
          "Aberrant myeloid markers alone do not meet MPAL criteria; establish a second lineage-defining component.",
      },
    ],
    molecular: [
      "Rearrangements involve multiple partners, including EP300, TAF15, and other genes; RNA sequencing is often required.",
    ],
    prognosis: [
      "Outcome is variable; some cohorts show intermediate or adverse outcomes. Lineage switch/phenotypic change may complicate MRD monitoring.",
    ],
  },
  {
    name: "B-ALL with PAX5 Alterations (PAX5alt)",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "B-ALL with a PAX5-altered genomic profile, often with reduced expression of B-cell differentiation markers.",
    summary:
      "A heterogeneous genetic subtype defined by diverse PAX5 alterations.",
    clinical: ["Occurs in children, adolescents, and adults."],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate a qualifying PAX5 alteration profile; do not infer the subtype from reduced PAX5 staining alone.",
    ],
    histology: ["No defining morphologic pattern."],
    ihc: [
      "PAX5 expression may be reduced or heterogeneous; retained PAX5 does not exclude a genomic PAX5 alteration.",
      "Use the complete precursor B-cell panel.",
    ],
    differential: [
      {
        name: "PAX5 p.P80R B-ALL",
        distinction:
          "PAX5 p.P80R is a distinct subtype and should not be subsumed under PAX5alt.",
      },
      {
        name: "B-ALL NOS",
        distinction:
          "A qualifying PAX5 alteration excludes NOS after adequate molecular characterization.",
      },
    ],
    molecular: [
      "Includes diverse PAX5 rearrangements, amplifications, deletions, and other structural alterations; DNA/RNA sequencing and copy-number analysis may be required.",
    ],
    prognosis: [
      "Heterogeneous; outcome depends on the specific genomic profile, age, and MRD response.",
    ],
  },
  {
    name: "B-ALL with PAX5 p.P80R",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "B-ALL with the recurrent PAX5 p.P80R missense mutation and characteristic altered B-cell differentiation program.",
    summary: "A distinct PAX5-mutant B-ALL subtype.",
    clinical: [
      "Predominantly pediatric and adolescent, but can occur in adults.",
    ],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate PAX5 p.P80R mutation; distinguish from other PAX5 alterations.",
    ],
    histology: ["No specific morphology."],
    ihc: [
      "PAX5 staining may be retained; immunohistochemistry cannot establish the specific mutation.",
      "Interpret aberrant B-cell maturation markers as supportive only.",
    ],
    differential: [
      {
        name: "PAX5alt B-ALL",
        distinction:
          "PAX5 p.P80R is a separate molecular subtype, not simply a member of the broader PAX5alt category.",
      },
      {
        name: "B-ALL NOS",
        distinction: "The defining mutation assigns the case to this subtype.",
      },
    ],
    molecular: [
      "PAX5 p.P80R is the defining missense alteration; targeted DNA sequencing or broader sequencing can detect it.",
    ],
    prognosis: [
      "Reported outcomes are generally intermediate to favorable in pediatric cohorts, but risk is modified by MRD and coexisting lesions.",
    ],
  },
  {
    name: "B-ALL with NUTM1 Rearrangement",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "Infant B-ALL with NUTM1 fusion; often retains CD10 and may show a distinctive immature phenotype.",
    summary:
      "A rare fusion-defined B-ALL subtype, frequently involving ZNF or other partners.",
    clinical: ["Most often described in infants and young children."],
    criteria: [
      "Meets criteria for B-ALL/LBL.",
      "Demonstrate NUTM1 rearrangement/fusion.",
    ],
    histology: ["No defining morphology."],
    ihc: [
      "Precursor B-cell phenotype; CD10 is often expressed.",
      "NUT immunohistochemistry may support a rearrangement in selected contexts but molecular confirmation is preferred.",
    ],
    differential: [
      {
        name: "KMT2A-rearranged B-ALL",
        distinction:
          "Both occur in infants; defining rearrangement testing is required.",
      },
      {
        name: "B-ALL NOS",
        distinction: "A NUTM1 fusion establishes a defined genetic subtype.",
      },
    ],
    molecular: [
      "NUTM1 rearrangements have multiple partners; RNA sequencing or targeted fusion testing is useful.",
    ],
    prognosis: [
      "Reported pediatric outcomes are often favorable, but data are limited and depend on age, partner, and treatment response.",
    ],
  },
  {
    name: "B-ALL with MYC Rearrangement",
    group: "B-ALL with Other Defined Genetic Alterations",
    clue: "A precursor B-cell phenotype with MYC rearrangement; distinguish carefully from mature Burkitt lymphoma.",
    summary:
      "A rare B-ALL subtype defined by MYC rearrangement in an immature B-cell neoplasm.",
    clinical: [
      "Occurs in children and adults; adult cases have particularly poor reported outcomes.",
    ],
    criteria: [
      "Demonstrate precursor B-cell lineage and immaturity rather than a mature B-cell phenotype.",
      "Confirm MYC rearrangement and exclude mature B-cell lymphoma.",
    ],
    histology: [
      "May show medium-sized blasts and a starry-sky pattern, overlapping morphologically with Burkitt lymphoma.",
    ],
    ihc: [
      "TdT and other immaturity markers support B-ALL; CD34 may be variable.",
      "Mature surface immunoglobulin/light-chain expression and a mature phenotype favor Burkitt lymphoma.",
    ],
    differential: [
      {
        name: "Burkitt lymphoma/leukemia",
        distinction:
          "Burkitt lymphoma is a mature B-cell neoplasm, typically with surface light-chain expression and no precursor phenotype; MYC rearrangement alone does not distinguish it.",
      },
      {
        name: "Other B-ALL genetic subtypes",
        distinction:
          "Assign MYC-rearranged subtype only when MYC rearrangement is demonstrated and precursor phenotype is secure.",
      },
    ],
    molecular: [
      "Confirm MYC rearrangement by karyotype, FISH, or sequencing; identify partner where possible.",
    ],
    prognosis: [
      "Adults have a very poor reported outcome, with 5-year overall survival below 20% in cited series.",
      "Children treated with Burkitt-type regimens have reported better outcomes; treatment strategy is evolving.",
    ],
  },
  {
    name: "B-ALL/LBL, Not Otherwise Specified (NOS)",
    group: "B-Cell Precursor Neoplasms",
    clue: "Use only after comprehensive testing excludes all currently defined genetic subtypes.",
    summary:
      "A diagnosis of exclusion for B-ALL/LBL without an assignable defining genetic abnormality.",
    clinical: [
      "Clinical features are heterogeneous and reflect the underlying unclassified biology.",
    ],
    criteria: [
      "Meets general diagnostic criteria for B-ALL/LBL.",
      "Exclude all defined and provisional genetic subtypes with appropriate cytogenetic, FISH, DNA/RNA sequencing, and/or gene-expression studies.",
      "If testing is incomplete, use 'not further classified' rather than NOS.",
    ],
    histology: ["No distinctive morphology."],
    ihc: [
      "Precursor B-cell phenotype as described for B-ALL/LBL; no specific IHC profile defines NOS.",
    ],
    differential: [
      {
        name: "All genetically defined B-ALL/LBL subtypes",
        distinction:
          "NOS requires comprehensive exclusion; an identified defining lesion takes precedence.",
      },
      {
        name: "B-ALL/LBL, not further classified",
        distinction:
          "Use when comprehensive genetic testing has not been completed or is unavailable.",
      },
    ],
    molecular: [
      "No defining alteration; comprehensive testing is required before assigning NOS.",
    ],
    prognosis: [
      "In children, reported outcome is intermediate, with 5-year event-free survival around 86%; the category is biologically heterogeneous.",
    ],
  },
  {
    name: "T-Lymphoblastic Leukemia/Lymphoma (T-ALL/LBL)",
    group: "T-Cell Precursor Neoplasms",
    clue: "Immature T-lineage blasts with cytoplasmic CD3; commonly a mediastinal/thymic mass in an adolescent or young adult.",
    summary:
      "A precursor T-cell neoplasm involving marrow/blood (T-ALL) or primarily nodal/mediastinal/extranodal sites (T-LBL).",
    clinical: [
      "Predominantly adolescents and young adults, with male predominance.",
      "T-LBL commonly presents with an anterior mediastinal/thymic mass, often with lymphadenopathy or pleural/pericardial effusions.",
      "Marrow/blood disease may cause cytopenias, leukocytosis, and circulating blasts.",
    ],
    criteria: [
      "Demonstrate an aberrant population of T-lineage hematopoietic precursors.",
      "Cytoplasmic or surface CD3 establishes T-lineage; the phenotype must not meet ETP-ALL criteria.",
      "A blast percentage above 20% is desirable in blood/marrow but is not an absolute prerequisite; interpret low-level involvement cautiously.",
    ],
    histology: [
      "Diffuse sheets of monotonous medium-sized lymphoblasts with scant cytoplasm, fine chromatin, and inconspicuous nucleoli.",
      "Frequent mitoses, apoptosis, lymphoglandular bodies, and tingible-body macrophages may be present.",
      "Thymic involvement may efface architecture; cytologic appearance overlaps with B-ALL.",
    ],
    ihc: [
      "Cytoplasmic CD3 is the most lineage-specific marker; surface CD3 is less often expressed and may be dim.",
      "CD7 is usually bright; CD5 and CD2 are variable. TdT is present in most cases.",
      "CD1a, CD34, CD99, and KIT/CD117 are variably expressed; CD4/CD8 coexpression is common in cortical-stage cases.",
      "CD79a, CD19, CD13, or CD33 may be aberrantly expressed; none alone changes lineage assignment.",
    ],
    differential: [
      {
        name: "ETP-ALL",
        distinction:
          "ETP phenotype has absent CD1a/CD8, absent or dim CD5, and stem-cell/myeloid marker expression; classify separately.",
      },
      {
        name: "T/myeloid mixed-phenotype acute leukemia",
        distinction:
          "Requires myeloid lineage-defining MPO or monocytic differentiation; isolated CD13/CD33 is insufficient.",
      },
      {
        name: "Mature T-cell lymphoma/leukemia",
        distinction:
          "Usually lacks TdT/CD34/CD1a and has a mature antigen profile; use morphology, flow, and molecular context.",
      },
      {
        name: "Indolent T-lymphoblastic proliferation",
        distinction:
          "Usually preserves architecture, shows normal maturation spectrum and polyclonal TR rearrangements, and lacks LMO2.",
      },
      {
        name: "NK-lineage neoplasm",
        distinction:
          "cCD3 (epsilon chain) can overlap; assess true lineage-specific cCD3, surface CD3, phenotype, and clonality.",
      },
    ],
    molecular: [
      "Common alterations include NOTCH1/FBXW7, TAL1/TAL2, TLX1, TLX3, HOXA, LMO1/LMO2, and NKX2-1 pathway lesions.",
      "Additional alterations affect JAK/STAT, PI3K/AKT, RAS/MAPK, epigenetic regulators, and cell-cycle genes including CDKN2A/B and PTEN.",
    ],
    prognosis: [
      "Long-term response rates approach 85% in children/adolescents and about 60% in adults.",
      "MRD at the end of consolidation is the strongest outcome predictor; relapse remains difficult to treat.",
      "NOTCH1/FBXW7 mutations have been associated with better outcomes, whereas PTEN alterations and some other genomic lesions may be adverse.",
    ],
  },
  {
    name: "Early T-Precursor Lymphoblastic Leukemia/Lymphoma (ETP-ALL)",
    group: "T-Cell Precursor Neoplasms",
    clue: "cCD3-positive blasts lacking CD1a/CD8, with dim/absent CD5 and stem-cell or myeloid markers.",
    summary:
      "A distinct T-precursor neoplasm with an immature phenotype and multilineage/stem-cell features.",
    clinical: [
      "Occurs in children and adults; often presents with marrow disease and may have a high-risk clinical profile.",
      "The phenotype reflects an early thymic precursor with retained stem-cell/myeloid differentiation potential.",
    ],
    criteria: [
      "Morphology consistent with lymphoblastic leukemia/lymphoma.",
      "cCD3 positive.",
      "CD1a and CD8 absent in fewer than 5% positive blasts.",
      "CD5 absent or dim in fewer than 75% positive blasts.",
      "At least one myeloid marker (CD11b, CD13, CD33, CD65, KIT/CD117) and/or stem-cell marker (CD34, HLA-DR) expressed in at least 25% of blasts.",
      "MPO negative; the source-defined ETP threshold is less than 3% positive.",
    ],
    histology: [
      "Morphology overlaps with other T-ALL; blasts may be small to medium-sized with scant cytoplasm and fine chromatin.",
      "No unique histologic pattern; immunophenotype is essential.",
    ],
    ihc: [
      "cCD3 is required, although expression may be heterogeneous; surface CD3 is usually absent.",
      "CD7 is consistently positive.",
      "CD1a and CD8 are absent; CD5 is absent or dim.",
      "CD34, CD117/KIT, HLA-DR, CD13, CD33, CD11b, or CD65 may be expressed.",
      "CD123 may be expressed in a subset.",
    ],
    differential: [
      {
        name: "T-ALL, not otherwise specified",
        distinction:
          "ETP-ALL meets the specific primitive immunophenotypic criteria; conventional T-ALL more often expresses CD1a and/or CD8 and stronger CD5.",
      },
      {
        name: "T/myeloid mixed-phenotype acute leukemia",
        distinction:
          "ETP-ALL is MPO-negative by the defined threshold and lacks definitive myeloid lineage assignment; carefully apply MPAL criteria.",
      },
      {
        name: "AML with aberrant T-cell markers",
        distinction:
          "True cCD3 is required for T-lineage; myeloid lineage is established by MPO/monocytic differentiation.",
      },
    ],
    molecular: [
      "Gene-expression profile resembles early thymic progenitors and hematopoietic stem/myeloid progenitors; MEF2C is often increased and BCL11B/GATA3 decreased.",
      "Mutations commonly affect FLT3, RAS pathway, IL7R/JAK signaling, GATA3, ETV6, RUNX1, IKZF1, and chromatin modifiers (EZH2, EED, SUZ12, SETD2, EP300).",
      "NOTCH1 mutations are less common than in conventional T-ALL.",
    ],
    prognosis: [
      "Initially reported as adverse risk, but later studies show outcomes can approach those of other T-ALL with contemporary intensified therapy.",
      "MRD after induction may remain positive more often; response after consolidation and treatment strategy are important.",
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
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      {children}
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

export default function PrecursorBAndTNeoplasmsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([]);
  const groups = useMemo(
    () => ["All", ...Array.from(new Set(entities.map((e) => e.group)))],
    [],
  );
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          [
            e.name,
            e.group,
            e.clue,
            e.summary,
            ...e.clinical,
            ...e.criteria,
            ...e.histology,
            ...e.ihc,
            ...e.molecular,
            ...e.prognosis,
            ...e.differential.flatMap((d) => [d.name, d.distinction]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    );
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
          PathologyGPS · Hematopathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          B- and T-Precursor Neoplasms
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic reference focused on lineage assignment, defining genetic
          abnormalities, immunophenotypic mimics, differential diagnosis, and
          prognostic implications in precursor B- and T-cell neoplasms.
        </p>
      </header>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Diagnostic Workflow</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Establish precursor morphology and determine whether disease is
              marrow/blood-predominant or tissue-predominant.
            </li>
            <li>
              Assign lineage with lineage-defining markers: B-lineage panel or
              cytoplasmic/surface CD3 for T-lineage.
            </li>
            <li>
              Confirm immaturity and compare with normal precursors (hematogones
              or thymocytes).
            </li>
            <li>
              Perform comprehensive genetic classification; use NOS only after
              exclusion of defined entities.
            </li>
            <li>
              Integrate genetic subtype with MRD, clinical risk factors, and
              treatment response for prognosis.
            </li>
          </ol>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">
            High-Yield Diagnostic Distinctions
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
            <p>
              <strong>B-ALL vs T-ALL:</strong> PAX5/CD19/CD22/cCD79a in
              combination versus cCD3.
            </p>
            <p>
              <strong>B-ALL vs hematogones:</strong> orderly maturation spectrum
              versus aberrant uniform phenotype; flow cytometry is essential.
            </p>
            <p>
              <strong>High hyperdiploidy vs masked hypodiploidy:</strong> use
              SNP array/copy-neutral LOH and DNA index.
            </p>
            <p>
              <strong>BCR::ABL1-like vs BCR::ABL1:</strong> similar biology, but
              only the latter carries the defining fusion.
            </p>
            <p>
              <strong>ETP-ALL vs T/myeloid MPAL:</strong> apply strict MPO and
              monocytic lineage criteria; myeloid-associated antigens alone are
              insufficient.
            </p>
            <p>
              <strong>MYC-rearranged B-ALL vs Burkitt lymphoma:</strong>{" "}
              precursor phenotype, not MYC status alone, establishes the
              distinction.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">
            B-ALL Genetic Subtypes: Defining Features and Prognosis
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Prognostic labels are broad group-level summaries. Age, presenting
            WBC count, CNS status, treatment response, and MRD remain essential
            for individual risk assignment.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="p-3">Subtype</th>
                  <th className="p-3">Defining feature</th>
                  <th className="p-3">Prognosis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "High hyperdiploidy",
                    "51–65 chromosomes; non-random whole-chromosome gains, commonly X, 4, 6, 10, 14, 17, 18, and 21. Exclude doubled hypodiploidy.",
                    "Favorable in children; long-term survival often exceeds 90%, especially with favorable clinical factors and low MRD.",
                  ],
                  [
                    "Hypodiploidy",
                    "≤43 chromosomes: near-haploid 24–31; low-hypodiploid 32–39; high-hypodiploid 40–43.",
                    "Adverse; lower chromosome number generally correlates with worse outcome. Low-hypodiploid disease often has TP53 alterations; consider germline predisposition.",
                  ],
                  [
                    "iAMP21",
                    "Intrachromosomal amplification of chromosome 21; typically ≥5 RUNX1 signals with characteristic clustering/pattern on abnormal chromosome 21.",
                    "Higher relapse risk with standard-risk therapy; treatment intensification improves outcome.",
                  ],
                  [
                    "BCR::ABL1",
                    "Philadelphia chromosome, t(9;22), producing BCR::ABL1 fusion.",
                    "Historically adverse; outcomes substantially improved with addition of ABL tyrosine kinase inhibitors, but MRD remains important.",
                  ],
                  [
                    "BCR::ABL1-like",
                    "Ph-like gene-expression profile without BCR::ABL1; kinase-activating lesions include ABL-class and JAK-STAT pathway alterations, often CRLF2-associated.",
                    "Generally higher risk and heterogeneous; depends on the kinase lesion, targeted treatment availability, and MRD.",
                  ],
                  [
                    "ETV6::RUNX1",
                    "t(12;21) with ETV6::RUNX1 fusion, often cryptic by conventional karyotype.",
                    "Very favorable in children; chemosensitive, although late relapse can occur. MRD and clinical factors still matter.",
                  ],
                  [
                    "ETV6::RUNX1-like",
                    "Expression profile resembles ETV6::RUNX1-positive disease but the defining fusion is absent.",
                    "Do not assume the favorable prognosis of ETV6::RUNX1; risk varies with underlying lesions and MRD.",
                  ],
                  [
                    "KMT2A-rearranged",
                    "KMT2A rearrangement with variable fusion partners; particularly associated with infant B-ALL.",
                    "Usually adverse, especially in infants; age, partner, WBC count, and treatment response modify risk.",
                  ],
                  [
                    "TCF3::PBX1",
                    "t(1;19), producing TCF3::PBX1 fusion; often pre-B phenotype with cytoplasmic μ.",
                    "Modern treatment has improved outcome; assess CNS status and MRD rather than automatically assigning very-high risk.",
                  ],
                  [
                    "TCF3::HLF",
                    "t(17;19), producing TCF3::HLF fusion.",
                    "Very poor prognosis; early relapse and resistance to conventional therapy are concerns.",
                  ],
                  [
                    "IGH::IL3",
                    "IGH::IL3 fusion; may cause marked eosinophilia and mimic a myeloproliferative neoplasm.",
                    "Very rare; outcome data are limited.",
                  ],
                  [
                    "DUX4-rearranged",
                    "DUX4 rearrangement/signature, often with ERG deletion; CD371 may be expressed.",
                    "Generally favorable relative to many other subtypes; TP53 mutation is an adverse feature.",
                  ],
                  [
                    "MEF2D-rearranged",
                    "MEF2D fusion, commonly MEF2D::BCL9 or other partners.",
                    "Often unfavorable/intermediate-to-poor; outcome varies by age and treatment context.",
                  ],
                  [
                    "ZNF384-rearranged",
                    "ZNF384 fusion; often CD10-dim/negative with myeloid/monocytic antigen expression.",
                    "Heterogeneous; lineage plasticity and lineage switch are clinically important concerns.",
                  ],
                  [
                    "PAX5alt",
                    "Diverse PAX5 alterations, including rearrangements and intragenic amplification; excludes PAX5 p.P80R category.",
                    "Heterogeneous; depends on specific alteration, co-lesions, and MRD.",
                  ],
                  [
                    "PAX5 p.P80R",
                    "Recurrent PAX5 p.P80R missense mutation affecting the DNA-binding domain.",
                    "Outcome data continue to evolve; avoid assigning risk from this mutation alone.",
                  ],
                  [
                    "NUTM1-rearranged",
                    "NUTM1 fusion, often in infant/young-child B-ALL; identify by RNA-based testing/FISH as appropriate.",
                    "Rare with limited outcome data; age, fusion partner, and treatment response matter.",
                  ],
                  [
                    "MYC-rearranged",
                    "MYC rearrangement in a demonstrably immature B-cell neoplasm; distinguish from mature Burkitt lymphoma.",
                    "Poor in adults in reported series; pediatric outcomes may be better with Burkitt-type treatment approaches.",
                  ],
                  [
                    "B-ALL/LBL, NOS",
                    "Meets B-ALL/LBL criteria but lacks a defined genetic subtype after comprehensive testing.",
                    "Heterogeneous/intermediate-risk group; pediatric 5-year EFS reported around 86% in the cited classification data.",
                  ],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="p-3 font-semibold text-slate-900">{r[0]}</td>
                    <td className="p-3 leading-6 text-slate-700">{r[1]}</td>
                    <td className="p-3 leading-6 text-slate-700">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">
            Precursor vs. Mature Lymphoid Neoplasms: Histology and
            Immunophenotype
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            No single marker is sufficient. Interpret immaturity, lineage,
            maturation-associated antigens, surface immunoglobulin/TCR,
            morphology, and molecular findings together.
          </p>
          <h3 className="mt-5 mb-2 font-bold text-slate-900">B-cell lineage</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Precursor B-cell neoplasm (B-ALL/LBL)</th>
                  <th className="p-3">Mature B-cell neoplasm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Cells / nuclei",
                    "Lymphoblasts; usually monotonous, high N:C ratio, fine chromatin, inconspicuous nucleoli.",
                    "Variable: small mature lymphocytes, centrocyte-like cells, immunoblasts, plasmacytoid or plasmablastic cells; chromatin and nucleoli depend on entity.",
                  ],
                  [
                    "Cytoplasm / architecture",
                    "Scant cytoplasm; marrow often shows diffuse sheets or interstitial collections; tissue lesions may efface architecture.",
                    "Variable cytoplasm; may show follicular, marginal-zone, mantle-zone, diffuse, sinusoidal, or other entity-specific patterns.",
                  ],
                  [
                    "TdT / CD34",
                    "TdT usually positive; CD34 variable; both may be absent in a minority.",
                    "Usually negative; aberrant expression can occur in selected mature neoplasms.",
                  ],
                  [
                    "CD10",
                    "Often positive; common B-ALL frequently expresses CD10.",
                    "Can also be positive in follicular lymphoma and Burkitt lymphoma; not a precursor-specific marker.",
                  ],
                  [
                    "B-lineage markers",
                    "CD19, CD22, cCD79a, PAX5 support B-lineage; use a panel.",
                    "Usually express mature B-cell markers such as CD20, CD79a, PAX5, and CD19, with entity-specific exceptions.",
                  ],
                  [
                    "CD20 / CD45",
                    "CD20 often dim/negative; CD45 typically dim.",
                    "CD20 usually positive (may be lost in plasmablastic differentiation); CD45 generally stronger.",
                  ],
                  [
                    "Surface immunoglobulin",
                    "Usually absent; surface light chains typically absent.",
                    "Usually present; flow cytometry may demonstrate monotypic κ or λ light chain.",
                  ],
                  [
                    "Ki-67",
                    "Often increased, but variable and not independently diagnostic.",
                    "Highly variable; may be extremely high in Burkitt lymphoma, so proliferation alone does not establish precursor status.",
                  ],
                  [
                    "Most useful distinction",
                    "Immature phenotype with TdT/CD34 and absent surface Ig, interpreted with morphology and B-lineage markers.",
                    "Mature differentiation with surface Ig/light-chain restriction and entity-specific architecture/phenotype.",
                  ],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="p-3 font-semibold">{r[0]}</td>
                    <td className="p-3 leading-6">{r[1]}</td>
                    <td className="p-3 leading-6">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-6 mb-2 font-bold text-slate-900">T-cell lineage</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3">Feature</th>
                  <th className="p-3">Precursor T-cell neoplasm (T-ALL/LBL)</th>
                  <th className="p-3">Mature T-cell neoplasm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Cells / nuclei",
                    "Lymphoblasts, usually small to medium; fine chromatin, inconspicuous nucleoli; nuclei may be convoluted.",
                    "Mature small lymphocytes or atypical pleomorphic cells; nuclear irregularity, chromatin, and nucleoli vary by entity.",
                  ],
                  [
                    "Growth pattern",
                    "Diffuse sheets of blasts; T-LBL commonly forms an anterior mediastinal/thymic mass.",
                    "Variable patterns including diffuse, vascular/perivascular, sinusoidal, or TFH-associated patterns.",
                  ],
                  [
                    "TdT / CD34 / CD99",
                    "TdT usually positive; CD34 in a subset; CD99 often expressed.",
                    "TdT and CD34 usually absent; CD99 is not a general mature T-cell marker.",
                  ],
                  [
                    "cCD3 / sCD3",
                    "cCD3 is the key lineage-defining marker; sCD3 often absent or dim, although some cases express it.",
                    "Usually show mature surface CD3 and TCR expression.",
                  ],
                  [
                    "CD7 / CD5",
                    "CD7 often bright/uniform; CD5 often dimmer than mature T cells or absent.",
                    "CD7 and/or CD5 may be aberrantly dim or lost; pattern depends on entity.",
                  ],
                  [
                    "CD1a / CD4 / CD8",
                    "CD1a may be positive; CD4/CD8 coexpression is common in cortical-stage cases; ETP-ALL lacks CD1a and CD8.",
                    "Usually mature subset phenotype; CD4 or CD8 single-positive patterns common, but exceptions occur.",
                  ],
                  [
                    "TCR",
                    "May show an immature/partial TCR program; clonality can support neoplasia but must be interpreted in context.",
                    "Usually express mature TCR; clonal TR rearrangement supports a clonal T-cell process.",
                  ],
                  [
                    "Key distinction",
                    "Immaturity markers plus cCD3 and aberrant thymocyte maturation pattern.",
                    "Mature surface T-cell phenotype, absence of a convincing precursor program, and entity-specific morphology/genetics.",
                  ],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="p-3 font-semibold">{r[0]}</td>
                    <td className="p-3 leading-6">{r[1]}</td>
                    <td className="p-3 leading-6">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-950">
            B-cell vs. T-cell Precursor Neoplasms: Histology, IHC, and Prognosis
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="p-3">Feature</th>
                  <th className="p-3">B-ALL/LBL</th>
                  <th className="p-3">T-ALL/LBL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Typical age",
                    "Predominantly children, especially young children; adults also affected.",
                    "Children, adolescents, and young adults; male predominance.",
                  ],
                  [
                    "Typical sites / presentation",
                    "Marrow and blood; cytopenias, bone pain, lymphadenopathy, hepatosplenomegaly; CNS/testes are important sites. Mediastinal mass uncommon.",
                    "Marrow and blood or thymic/anterior mediastinal mass; may cause dyspnea, chest pain, pleural/pericardial effusions; lymphadenopathy common.",
                  ],
                  [
                    "Histology",
                    "Monotonous lymphoblasts; high N:C ratio, fine to variably condensed chromatin, scant cytoplasm; diffuse marrow replacement or tissue effacement.",
                    "Small-to-medium lymphoblasts; high N:C ratio, fine chromatin, inconspicuous nucleoli, sometimes convoluted nuclei; diffuse sheets, often mediastinal mass.",
                  ],
                  [
                    "Lineage-defining IHC",
                    "CD19, CD22, cCD79a, PAX5 in a coherent B-lineage profile.",
                    "cCD3 is the most lineage-specific marker; CD7, CD2, and CD5 commonly support T-lineage.",
                  ],
                  [
                    "Immaturity markers",
                    "TdT, CD34 (variable), CD10; CD45 dim, CD20 often dim/negative, surface light chains absent.",
                    "TdT, CD1a (subset), CD34 (about one third), CD99 and/or CD117; sCD3 often absent/dim; CD7 often bright.",
                  ],
                  [
                    "Phenotypic pitfalls",
                    "CD10 also occurs in mature follicular and Burkitt lymphomas. CD13/CD33 do not independently establish myeloid lineage.",
                    "CD13/CD33/CD117 may be expressed without MPAL; cCD3 establishes T-lineage. Exclude thymoma and T/myeloid MPAL.",
                  ],
                  [
                    "Genetic classification",
                    "Defined primarily by recurrent genetic abnormalities; subtype and MRD strongly influence risk.",
                    "NOTCH1/FBXW7, RAS/PTEN and other pathway alterations; ETP-ALL has a more stem-cell/myeloid-like mutation profile.",
                  ],
                  [
                    "Prognosis",
                    "Children: contemporary long-term survival often >90%, but strongly subtype- and MRD-dependent. Adults generally have less favorable outcomes.",
                    "Children/adolescents: long-term response around 85%; adults around 60% in reported series. Relapsed disease has poor outcomes.",
                  ],
                  [
                    "Most important prognostic considerations",
                    "Genetic subtype, age, WBC count, CNS status, early response, and MRD at protocol-defined time points.",
                    "MRD, particularly after consolidation, is highly informative; NOTCH1/FBXW7 with wild-type RAS/PTEN may identify a favorable group.",
                  ],
                ].map((r, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="p-3 font-semibold">{r[0]}</td>
                    <td className="p-3 leading-6">{r[1]}</td>
                    <td className="p-3 leading-6">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6 text-teal-950">
            <strong>ETP-ALL diagnostic phenotype:</strong> cCD3 positive; CD1a
            and CD8 absent (&lt;5% blasts); CD5 absent/dim (&lt;75% blasts); at
            least one stem-cell marker (CD34/HLA-DR) and/or myeloid-associated
            marker (CD11b/CD13/CD33/CD65/CD117) in ≥25% blasts; MPO negative
            (&lt;3%). Contemporary outcomes may approach those of other T-ALL
            despite more frequent MRD positivity after induction.
          </div>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="precursor-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, markers, genes, and differential points
          </label>
          <input
            id="precursor-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: TdT, PAX5, CD3, BCR::ABL1, hypodiploidy, MRD..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="precursor-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="precursor-group"
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
          Expand an entity for diagnostic criteria, morphology, IHC, molecular
          findings, and prognosis.
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
                    When to consider: {e.clue}
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
                        <Bullets items={e.clinical} />
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <Bullets items={e.criteria} />
                      </Section>
                      <Section title="Histopathology">
                        <Bullets items={e.histology} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype and Immunohistochemistry">
                        <Bullets items={e.ihc} />
                      </Section>
                      <Section title="Molecular Pathology">
                        <Bullets items={e.molecular} />
                      </Section>
                      <Section title="Prognosis and Predictive Factors">
                        <Bullets items={e.prognosis} />
                      </Section>
                    </div>
                  </div>
                  <Section title="Differential Diagnosis">
                    <div className="grid gap-3 md:grid-cols-2">
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
                  {e.pitfalls && (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <Bullets items={e.pitfalls} />
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
        morphology, immunophenotype, molecular findings, clinical presentation,
        and measurable residual disease together.
      </footer>
    </main>
  );
}
