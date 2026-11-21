"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Differential = { name: string; points?: string[]; distinction?: string };
type Entity = {
  name: string;
  source_diff?: string[];
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
    name: "Astrocytoma, IDH-mutant",
    group: "Adult-Type Diffuse Gliomas",
    clue: "Astrocytoma, IDH-mutant, is a diffusely infiltrating IDH1- or IDH2-mutant glioma with frequent ATRX and/or TP53 mutation and absence of 1p/19q codeletion (CNS WHO grade 2, 3, or 4).",
    summary:
      "Astrocytomas with IDH1 or IDH2 mutation can be located in any region of the CNS, including the brainstem and spinal cord, but they most commonly develop in the supratentorial compartment and are usually centered near or within the frontal lobes . This localization is similar to that of IDH-mutant and 1p/19q-codeleted o",
    clinical: [
      "The majority of patients present in their thirties or forties (median age: 38 years) with CNS WHO grade 2 or 3 tumors .",
      "CNS WHO grade 2 and 3 astrocytomas have similar age distributions , whereas patients with CNS WHO grade 4 tumors tend to be slightly older .",
      "IDH-mutant astrocytomas are uncommon in patients aged > 55 years .",
      "There is a slight male predominance among CNS WHO grade 2 and 3 IDH-mutant astrocytomas .",
      "One study of CNS WHO grade 4 tumors found that their M:F ratio is significantly lower than that of IDH-wildtype glioblastomas .",
    ],
    criteria: [
      "Astrocytoma, IDH-mutant, is a diffusely infiltrating IDH1- or IDH2-mutant glioma with frequent ATRX and/or TP53 mutation and absence of 1p/19q codeletion (CNS WHO grade 2, 3, or 4).",
      "IDH-mutant astrocytomas range from well-differentiated, low-cell-density, and slow-growing tumors (CNS WHO grade 2) to highly anaplastic, hypercellular, and rapidly progressive tumors (CNS WHO grade 4).",
      "CNS WHO grade 2 tumors are composed of well-differentiated fibrillary glial cells that diffusely infiltrate the CNS parenchyma individually, usually without cellular cohesion, generating a loosely structured, often microcystic matrix .",
      "Cellularity is mildly to moderately increased compared with that of normal brain, and mild nuclear atypia is characteristic.",
      "Tumor cell density and cellular morphology may vary, the latter with respect to cell size, cytoplasmic abundance, and prominence of cellular processes.",
      "Histological recognition of neoplastic astrocytes depends mainly on nuclear characteristics.",
      "Compared with those in normal astrocytes, the nuclei in IDH-mutant astrocytomas are enlarged, and they display irregular nuclear contours, an uneven chromatin pattern, and hyperchromasia.",
      "Overall, monomorphic nuclei and rounded nuclear contours may be seen, occasionally showing morphological overlap with oligodendroglial tumors.",
      "Nucleoli are typically indistinct and are most often not visible.",
      "Unlike in cells undergoing reactive astrocytosis, cellular processes in IDH-mutant astrocytomas usually vary from one tumor cell to the next.",
      "Mitotic activity is absent or uncommon in CNS WHO grade 2 tumors; a single mitosis within a resection specimen is compatible with a CNS WHO grade 2 designation .",
      "Many of the signature molecular characteristics of IDH-mutant astrocytoma can be demonstrated immunohistochemically.",
      "A routine immunohistochemical panel for the initial diagnostic workup of diffuse gliomas in adults involves IDH1 p.R132H, p53, and ATRX .",
    ],
    histology: [
      "IDH-mutant astrocytomas range from well-differentiated, low-cell-density, and slow-growing tumors (CNS WHO grade 2) to highly anaplastic, hypercellular, and rapidly progressive tumors (CNS WHO grade 4).",
      "CNS WHO grade 2 tumors are composed of well-differentiated fibrillary glial cells that diffusely infiltrate the CNS parenchyma individually, usually without cellular cohesion, generating a loosely structured, often microcystic matrix .",
      "Cellularity is mildly to moderately increased compared with that of normal brain, and mild nuclear atypia is characteristic.",
      "Tumor cell density and cellular morphology may vary, the latter with respect to cell size, cytoplasmic abundance, and prominence of cellular processes.",
      "Histological recognition of neoplastic astrocytes depends mainly on nuclear characteristics.",
      "Compared with those in normal astrocytes, the nuclei in IDH-mutant astrocytomas are enlarged, and they display irregular nuclear contours, an uneven chromatin pattern, and hyperchromasia.",
      "Overall, monomorphic nuclei and rounded nuclear contours may be seen, occasionally showing morphological overlap with oligodendroglial tumors.",
      "Nucleoli are typically indistinct and are most often not visible.",
      "Unlike in cells undergoing reactive astrocytosis, cellular processes in IDH-mutant astrocytomas usually vary from one tumor cell to the next.",
      "Mitotic activity is absent or uncommon in CNS WHO grade 2 tumors; a single mitosis within a resection specimen is compatible with a CNS WHO grade 2 designation .",
      "The principal feature distinguishing CNS WHO grade 3 astrocytomas from CNS WHO grade 2 astrocytomas is increased mitotic activity and histological anaplasia (see Grading, below).",
      "However, the threshold for a CNS WHO grade 3 designation has not been established in IDH-mutant astrocytoma cohorts.",
      "One mitotic figure may be sufficient for assigning grade 3 within a very small biopsy, whereas more mitoses are required in larger resection specimens .",
      "Grade 3 tumors also often display increased cell density and greater nuclear atypia, including variation in nuclear size and shape, chromatin coarseness, and dispersion.",
      "Multinucleated tumor cells and abnormal mitoses may be seen.",
      "By definition, microvascular proliferation (multilayered endothelia within vessels) and necrosis are absent.",
      "CNS WHO grade 4 tumors must manifest necrosis and/or microvascular proliferation in addition to the features of CNS WHO grade 3 lesions, but the designation of CNS WHO grade 4 IDH-mutant astrocytoma is also warranted if the tumor shows homozygous deletion of CDKN2A and/or CDKN2B, even in the absence of necrosis or microvascular proliferation (see Grading and Diagnostic molecular pathology) .",
      "For more information about the histopathology of microvascular proliferation, see the Histopathology subsection in Glioblastoma, IDH-wildtype.",
      "The term “glioblastoma” is no longer applied to CNS WHO grade 4 IDH-mutant astrocytoma.",
      "Morphologically, however, the histology of individual cells of CNS WHO grade 4 IDH-mutant astrocytoma has considerable overlap with that of IDH-wildtype glioblastoma, and distinguishing between them requires testing for IDH mutations.",
      "Nevertheless, some features differ.",
      "Areas of ischaemic zonal and/or palisading necrosis have been observed in 50% of CNS WHO grade 4 IDH-mutant astrocytomas, considerably less frequently than in IDH-wildtype glioblastoma, where they are found in as many as 90% of cases .",
      "Focal oligodendroglioma-like components are more common in CNS WHO grade 4 IDH-mutant astrocytoma than in IDH-wildtype glioblastoma .",
    ],
    ihc: [
      "Individual tumor cells of IDH-mutant astrocytoma reliably express GFAP, although to varying degrees .",
      "Gemistocytic tumor cells are typically strongly and uniformly positive for GFAP .",
      "OLIG2 is a transcription factor that shows strong nuclear immunoreactivity in most forms of diffuse gliomas, including IDH-mutant astrocytomas.",
      "One study concluded that OLIG2 expression was lower in high-grade IDH-mutant astrocytomas than in other IDH-mutant gliomas .",
      "Vimentin is often positive in tumor cells, with a labelling pattern similar to that of GFAP .",
      "Immunohistochemical assays used as surrogates for genetic alterations (e.g. IDH1 p.R132H, p53, ATRX) are discussed below, in the Diagnostic molecular pathology subsection.",
    ],
    source_diff: [
      "For CNS WHO grade 2 tumors, the main differential diagnostic considerations are normal brain and reactive astrocytosis. The cytoplasm of normal human astrocytes, in contrast to that of IDH-mutant astrocytoma cells, is not distinct from the background neuropil. Their nuclei are small and regular, displaying delicate and uniform chromatin patterns. Reactive astrocytes are defined by enlarged nuclei (often with a single prominent nucleolus) and clearly distinguished cytoplasm. Reactive gemistocytes are a specific type of astrocytes that are characterized by abundant eosinophilic cytoplasm, eccentric nuclei, and prominent glial processes. Reactive astrocytes are often uniformly distributed throughout tissue and often show similar nuclear and cytoplasmic features, unlike neoplastic cells. Microcystic change strongly favours neoplasia over reactive astrocytosis. Because most IDH-mutant diffuse astrocytomas have IDH1 p.R132H mutations, the finding of positive immunostaining for IDH1 p.R132H excludes reactive astrocytosis . Prior freezing of tissue for intraoperative diagnosis, however, may abrogate IDH1 p.R132H immunostaining and can distort nuclear cytological features.",
      "IDH-mutant astrocytoma has a wide differential diagnosis with other diffusely growing brain tumors. The primary considerations are oligodendroglioma, IDH-mutant and 1p/19q-codeleted; glioblastoma, IDH-wildtype; diffuse midline glioma, H3 K27–altered; diffuse hemispheric glioma, H3 G34–mutant; diffuse astrocytoma, MYB- or MYBL1-altered; diffuse low-grade glioma, MAPK pathway–altered; and high-grade astrocytoma with piloid features.",
    ],
    molecular: [
      "Many of the signature molecular characteristics of IDH-mutant astrocytoma can be demonstrated immunohistochemically.",
      "A routine immunohistochemical panel for the initial diagnostic workup of diffuse gliomas in adults involves IDH1 p.R132H, p53, and ATRX .",
      "Immunohistochemical staining for IDH1 p.R132H is highly sensitive and specific for the IDH1 p.R132H mutation, and immunopositivity is strong evidence of IDH-mutant glioma .",
      "IDH1 p.R132H immunohistochemistry has become a critical initial test for the classification of gliomas and also helps to distinguish true neoplasia from reactive gliosis .",
      "The p.R132H variant accounts for approximately 90% of all IDH mutations in supratentorial astrocytomas.",
      "Of note, more rarely occurring primary infratentorial IDH-mutant astrocytomas show a distinctively different spectrum of IDH mutations, and about 80% are of the non-p.R132H type .",
      "Gene sequencing analysis of IDH1 codon 132 and IDH2 codon 172 is recommended in the event of a negative or indeterminate result with the IDH1 p.R132H immunohistochemical stain, in order to rule out the possibility of a non-p.R132H IDH mutation .",
      "Given the low frequency of IDH1 and IDH2 mutations in CNS WHO grade 4 gliomas arising in patients aged ≥ 55 years, sequencing analysis need not follow a negative IDH1 p.R132H immunostain in this patient population .",
      "In the setting of an IDH-mutant glioma, the detection of strong and diffuse p53 immunopositivity can be used as a surrogate for TP53 mutations and in support of the diagnosis of IDH-mutant astrocytoma.",
      "TP53 mutation often leads to reduced degradation of the protein, and to its nuclear accumulation; however, not all TP53 mutations manifest as strong nuclear immunoreactivity, and nonsense mutations in particular can sometimes be associated with a complete absence of staining.",
      "Strong nuclear p53 immunohistochemical positivity in > 10% of tumor nuclei correlates well with TP53 mutations in the setting of an IDH-mutant glioma, but it is best evaluated in the context of morphology and other immunohistochemistry in the diagnostic panel, such as ATRX .",
      "Most IDH-mutant astrocytomas show even more widespread (> 50%) p53 expression .",
      "Inactivating ATRX alterations commonly co-occur with TP53 mutations in IDH-mutant astrocytomas .",
      "These often result in a truncated protein and abrogated protein expression, leading to loss of nuclear ATRX immunoreactivity .",
      "ATRX immunopositivity in the nuclei of endothelial cells and neurons serves as an internal positive control because ATRX protein is prone to rapid degradation in tissue with even minimal hypoxic damage, so areas of tissue showing nuclear ATRX immunopositivity in these cells should be assessed.",
      "Loss of nuclear ATRX expression in neoplastic cells strongly supports the diagnosis of IDH-mutant astrocytoma but is not a surrogate for IDH assessment because loss of nuclear ATRX is also found in H3-altered diffuse gliomas and occasionally in IDH-wildtype gliomas.",
      "In addition, although the rate of ATRX loss is > 90% in supratentorial IDH-mutant astrocytomas, the rate in infratentorial IDH-mutant astrocytomas is only about 50% .",
      "The combination of mutations in IDH1 or IDH2 and ATRX in a diffuse glioma (including by immunohistochemistry) is sufficient for the diagnosis of IDH-mutant astrocytoma, obviating the need for 1p/19q testing in order to exclude oligodendroglioma.",
    ],
    differential: [
      {
        name: "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted",
        points: [
          "Consider Oligodendroglioma, IDH-mutant and 1p/19q-codeleted when its defining profile is present: Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, is a diffusely infiltrating glioma with IDH1 or IDH2 mutation and codeletion of chromosome arms 1p and 19q (CNS WHO grade 2 or 3).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Glioblastoma, IDH-wildtype",
        points: [
          "Consider Glioblastoma, IDH-wildtype when its defining profile is present: Glioblastoma, IDH-wildtype, is a diffuse, astrocytic glioma that is IDH-wildtype and H3-wildtype and has one or more of the following histological or genetic features: microvascular proliferation, necrosis, TER The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "For CNS WHO grade 2 tumors, the main differential diagnostic considerations are normal brain and rea",
        points: [
          "For CNS WHO grade 2 tumors, the main differential diagnostic considerations are normal brain and reactive astrocytosis.",
          "The cytoplasm of normal human astrocytes, in contrast to that of IDH-mutant astrocytoma cells, is not distinct from the background neuropil.",
          "Their nuclei are small and regular, displaying delicate and uniform chromatin patterns.",
          "Reactive astrocytes are defined by enlarged nuclei (often with a single prominent nucleolus) and clearly distinguished cytoplasm.",
          "Reactive gemistocytes are a specific type of astrocytes that are characterized by abundant eosinophilic cytoplasm, eccentric nuclei, and prominent glial processes.",
          "Reactiv",
        ],
      },
      {
        name: "IDH-mutant astrocytoma has a wide differential diagnosis with other diffusely growing brain tumors. ",
        points: [
          "IDH-mutant astrocytoma has a wide differential diagnosis with other diffusely growing brain tumors.",
          "The primary considerations are oligodendroglioma, IDH-mutant and 1p/19q-codeleted; glioblastoma, IDH-wildtype; diffuse midline glioma, H3 K27–altered; diffuse hemispheric glioma, H3 G34–mutant; diffuse astrocytoma, MYB- or MYBL1-altered; diffuse low-grade glioma, MAPK pathway–altered; and high-grade astrocytoma with piloid features.",
        ],
      },
    ],
  },
  {
    name: "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted",
    group: "Adult-Type Diffuse Gliomas",
    clue: "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, is a diffusely infiltrating glioma with IDH1 or IDH2 mutation and codeletion of chromosome arms 1p and 19q (CNS WHO grade 2 or 3).",
    summary:
      "Among 5542 histologically defined oligodendrogliomas registered in the Central Brain Tumor Registry of the United States (CBTRUS) database, 59% were located in the frontal lobe, 14% in the temporal lobe, 10% in the parietal lobe, and 1% in the occipital lobe [[Central Brain Tumor Registry of the United States [Internet",
    clinical: [
      "Among 5542 histologically defined oligodendrogliomas registered in the Central Brain Tumor Registry of the United States (CBTRUS) database, 59% were located in the frontal lobe, 14% in the temporal lobe, 10% in the parietal lobe, and 1% in the occipital lobe [[Central Brain Tumor Registry of the United States [Internet].",
      "Among 470 genetically defined CNS WHO grade 3 oligodendrogliomas of the French national POLA network, 62% were frontal tumors, 16% were temporal, 15% were parietal, and 6% were occipital [[Portail Epidemiologie France: Health Databases [Internet].",
      "Other studies have also shown a clear predilection for the frontal lobes in IDH-mutant and 1p/19q-codeleted oligodendrogliomas .",
      "Less common locations include the posterior fossa, basal ganglia, and brainstem.",
      "Rare cases of intramedullary spinal oligodendroglioma are on record, but data on genotype are usually lacking .",
    ],
    criteria: [
      "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, is a diffusely infiltrating glioma with IDH1 or IDH2 mutation and codeletion of chromosome arms 1p and 19q (CNS WHO grade 2 or 3).",
      "Cellular composition Classic oligodendroglioma cells have uniformly round nuclei that are slightly larger than those of normal oligodendrocytes and show an increase in chromatin density or a delicate salt-and-pepper pattern.",
      "A distinct nuclear membrane is often apparent.",
      "In formalin-fixed, paraffin-embedded tissue, tumor cells often appear as rounded cells with well-defined cell membranes and clear cytoplasm around the central spherical nucleus.",
      "This creates the typical honeycomb or fried-egg appearance, which, although artefactual, is a helpful diagnostic feature.",
      "This artefact is not seen in smear preparations or frozen sections, and it may also be absent in rapidly fixed tissue and in formalin-fixed, paraffin-embedded sections made from frozen material.",
      "Reactive astrocytes are scattered throughout oligodendrogliomas and are particularly prominent at the tumor borders.",
      "Oligodendrogliomas may contain tumor cells that look like small gemistocytes with a rounded belly of eccentric cytoplasm that is positive for GFAP, which are termed “minigemistocytes” or “microgemistocytes”.",
      "Gliofibrillary oligodendrocytes are typical-looking oligodendroglioma cells with a thin perinuclear rim of positivity for GFAP .",
      "Gliofibrillary oligodendrocytes and minigemistocytes are more commonly seen in CNS WHO grade 3 tumors.",
      "GFAP-negative mucocytes or even signet-ring cells are occasionally present, with individual cases reported to consist largely of signet-ring cells .",
      "Eosinophilic granular cells occur in some oligodendrogliomas .",
      "Rare cases with neurocytic or ganglioglioma-like differentiation have also been reported .",
      "Occasional CNS WHO grade 3 oligodendrogliomas feature multinucleated giant cells , and rare cases contain sarcomatous areas .",
      "The presence of these various cellular phenotypes does not preclude an oligodendroglioma diagnosis if the tumor is IDH-mutant and 1p/19q-codeleted.",
      "Tumor cells with fibrillary or gemistocytic astrocytic morphology are also compatible with this diagnosis when IDH mutation and 1p/19q codeletion are present.",
      "Thus, irrespective of oligodendroglial, oligoastrocytic, astrocytic, or ambiguous features on histology, detection of combined IDH mutation and 1p/19q codeletion indicates an IDH-mutant and 1p/19q-codeleted oligodendroglioma .",
      "Mineralization and other degenerative features Microcalcifications are frequent, found within the tumor itself or in the invaded brain.",
      "Calcifications were recorded in 71 (45%) of 157 CNS WHO grade 3 IDH-mutant and 1p/19q-codeleted oligodendrogliomas, .",
      "Mineralization along blood vessels typically takes the form of small, punctate calcifications, whereas microcalcifications in the brain (called calcospherites) tend to be larger, with an irregular and sometimes laminated appearance.",
      "However, this feature is not specific for oligodendroglioma, and because of incomplete tumor sampling, it is sometimes not found histologically even when clearly demonstrated on CT.",
      "Areas characterized by extracellular mucin deposition and/or microcyst formation are frequent.",
      "Rare tumors are characterized by marked desmoplasia .",
      "Oligodendrogliomas are molecularly defined by IDH1 or IDH2 mutations and 1p/19q codeletion.",
      "Nearly all tumors have a TERT promoter mutation, lack ATRX mutation, and show preserved nuclear ATRX expression.",
      "TP53 mutations are uncommon .",
      "Diagnosis of oligodendrogliomas requires demonstration of IDH mutation by IDH1 p.R132H immunohistochemistry and/or sequencing of the IDH1 or IDH2 gene, as well as demonstration of 1p/19q codeletion by FISH, chromogenic in situ hybridization, or molecular genetic testing.",
      "In the absence of IDH1 p.R132H-positive immunohistochemistry, sequencing for less common mutations in IDH1 (codon 132) and IDH2 (codon 172) should be performed.",
      "No particular method for molecular testing for 1p/19q codeletion is required, but it is recommended that 1p/19q assays be able to detect whole-arm chromosomal losses.",
      "Only complete losses of both chromosome arms are diagnostic for oligodendroglioma, because partial or isolated loss of 1p or 19q may be present in some IDH-wildtype glioblastomas and IDH-mutant astrocytomas.",
      "FISH probes in commonly deleted regions or loss of only a few PCR probes in loss-of-heterozygosity analysis may not reflect whole-arm losses and thus may lead to false positive results .",
      "In addition, any copy-number analysis requires sufficient tumor cell content, preferably > 30%, to avoid false negative results when assessing 1p/19q codeletion.",
      "Immunohistochemical detection of IDH1 p.R132H expression and preserved nuclear ATRX expression, without demonstration of 1p/19q codeletion, is not sufficient to diagnose an IDH-mutant and 1p/19q-codeleted oligodendroglioma, even with classic histology.",
      "In IDH-mutant gliomas with preserved nuclear ATRX expression by immunohistochemistry, 1p/19q analysis remains critical for accurate molecular diagnosis.",
      "Most IDH-mutant and 1p/19q-codeleted oligodendrogliomas carry TERT promoter mutations ; however, detection of a TERT promoter mutation in an IDH-mutant glioma is not sufficient for an oligodendroglioma diagnosis, because rare cases are TERT-wildtype, including tumors in teenage patients .",
      "TERT promoter mutations are also observed in a subset of 1p/19q-intact IDH-mutant astrocytomas .",
      "DNA methylation array analysis reveals a diagnostic molecular profile by combining the detection of an oligodendroglioma-associated methylation signature and 1p/19q codeletion .",
      "Copy-number analysis by FISH also provides information on polysomy of 1q and 19p, which has been detected in subsets of 1p/19q-codeleted oligodendrogliomas of CNS WHO grades 2 and 3 and is associated with shorter survival .",
      "Homozygous deletion of CDKN2A has been detected in a small proportion of CNS WHO grade 3 IDH-mutant and 1p/19q-codeleted oligodendrogliomas, but not in those of CNS WHO grade 2, and it was reported to be an independent marker of shorter survival .",
    ],
    histology: [
      "Cellular composition Classic oligodendroglioma cells have uniformly round nuclei that are slightly larger than those of normal oligodendrocytes and show an increase in chromatin density or a delicate salt-and-pepper pattern.",
      "A distinct nuclear membrane is often apparent.",
      "In formalin-fixed, paraffin-embedded tissue, tumor cells often appear as rounded cells with well-defined cell membranes and clear cytoplasm around the central spherical nucleus.",
      "This creates the typical honeycomb or fried-egg appearance, which, although artefactual, is a helpful diagnostic feature.",
      "This artefact is not seen in smear preparations or frozen sections, and it may also be absent in rapidly fixed tissue and in formalin-fixed, paraffin-embedded sections made from frozen material.",
      "Reactive astrocytes are scattered throughout oligodendrogliomas and are particularly prominent at the tumor borders.",
      "Oligodendrogliomas may contain tumor cells that look like small gemistocytes with a rounded belly of eccentric cytoplasm that is positive for GFAP, which are termed “minigemistocytes” or “microgemistocytes”.",
      "Gliofibrillary oligodendrocytes are typical-looking oligodendroglioma cells with a thin perinuclear rim of positivity for GFAP .",
      "Gliofibrillary oligodendrocytes and minigemistocytes are more commonly seen in CNS WHO grade 3 tumors.",
      "GFAP-negative mucocytes or even signet-ring cells are occasionally present, with individual cases reported to consist largely of signet-ring cells .",
      "Eosinophilic granular cells occur in some oligodendrogliomas .",
      "Rare cases with neurocytic or ganglioglioma-like differentiation have also been reported .",
      "Occasional CNS WHO grade 3 oligodendrogliomas feature multinucleated giant cells , and rare cases contain sarcomatous areas .",
      "The presence of these various cellular phenotypes does not preclude an oligodendroglioma diagnosis if the tumor is IDH-mutant and 1p/19q-codeleted.",
      "Tumor cells with fibrillary or gemistocytic astrocytic morphology are also compatible with this diagnosis when IDH mutation and 1p/19q codeletion are present.",
      "Thus, irrespective of oligodendroglial, oligoastrocytic, astrocytic, or ambiguous features on histology, detection of combined IDH mutation and 1p/19q codeletion indicates an IDH-mutant and 1p/19q-codeleted oligodendroglioma .",
      "Mineralization and other degenerative features Microcalcifications are frequent, found within the tumor itself or in the invaded brain.",
      "Calcifications were recorded in 71 (45%) of 157 CNS WHO grade 3 IDH-mutant and 1p/19q-codeleted oligodendrogliomas, .",
      "Mineralization along blood vessels typically takes the form of small, punctate calcifications, whereas microcalcifications in the brain (called calcospherites) tend to be larger, with an irregular and sometimes laminated appearance.",
      "However, this feature is not specific for oligodendroglioma, and because of incomplete tumor sampling, it is sometimes not found histologically even when clearly demonstrated on CT.",
      "Areas characterized by extracellular mucin deposition and/or microcyst formation are frequent.",
      "Rare tumors are characterized by marked desmoplasia .",
      "Vasculature Oligodendrogliomas typically show a dense network of branching capillaries resembling chicken wire.",
      "In some cases, the capillary stroma tends to subdivide the tumor into lobules.",
      "In CNS WHO grade 3 tumors, focal or dispersed pathological microvascular proliferation is frequent.",
      "Oligodendrogliomas have a tendency to develop intratumoral hemorrhages.",
      "Growth pattern Oligodendrogliomas grow diffusely in the cortex and white matter; however, some tumors feature distinct nodules of higher cellularity against a background of diffuse infiltration.",
      "Occasional tumors show a gliomatosis cerebri–like pattern involving more than two cerebral lobes .",
      "Within the cortex, tumor cells often form secondary structures such as perineuronal satellitosis, perivascular aggregates, and subpial accumulations.",
      "Circumscribed leptomeningeal infiltration may induce a desmoplastic reaction.",
      "Oligodendrogliomas can have a rare spongioblastic growth pattern consisting of parallel rows of tumor cells with somewhat elongated nuclei forming rhythmic palisades.",
      "Occasionally, perivascular pseudorosettes are seen, although some of these are a result of perivascular neuropil formation within foci of neurocytic differentiation .",
      "These patterns are generally present only focally.",
      "Proliferation Mitotic activity is low or absent in CNS WHO grade 2 oligodendrogliomas, but it is usually prominent in CNS WHO grade 3 tumors.",
      "Accordingly, the Ki-67 (MIB1) proliferation index is usually low (< 5%) in CNS WHO grade 2 oligodendrogliomas and elevated in CNS WHO grade 3 oligodendrogliomas, being generally > 10% in the large French national POLA cohort of CNS WHO grade 3 tumors .",
      "However, a definitive Ki-67 (MIB1) cut-off value has not been established due to marked variability in staining results between institutions and non-uniform counting approaches.",
      "One study reported a Ki-67 index of ≥ 15% as an independent marker of shorter survival in patients with IDH-mutant and 1p/19q-codeleted CNS WHO grade 3 oligodendrogliomas .",
      "A mitotic count of ≥ 5 mitoses/mm2 was also associated with shorter survival but only on univariate, not multivariate, analysis .",
      "Another study showed that mitotic count was not associated with outcome in patients with IDH-mutant and 1p/19q-codeleted oligodendrogliomas .",
      "Other proliferation markers, such as PCNA , TOP2A , MCM2 , and MCM6 , also correlate with CNS WHO grade and/or survival but do not provide clear advantages over Ki-67 (MIB1).",
    ],
    ihc: [
      "Most oligodendrogliomas demonstrate immunoreactivity with the antibody against IDH1 p.R132H , which facilitates the differential diagnosis versus other clear cell tumors as well as non-neoplastic and reactive lesions .",
      "IDH-mutant and 1p/19q-codeleted oligodendrogliomas retain nuclear expression of ATRX and typically lack widespread nuclear p53 staining, consistent with the near exclusivity of ATRX and TP53 mutation versus 1p/19q codeletion in IDH-mutant gliomas .",
      "Oligodendrogliomas are immunopositive for MAP2, S100, and CD57 (LEU7) ; however, these markers are also positive in astrocytic gliomas.",
      "Similarly, the oligodendrocyte lineage transcription factors OLIG1, OLIG2, and SOX10 are expressed in oligodendrogliomas but also in astrocytic gliomas .",
      "GFAP is detectable in intermingled reactive astrocytes but may also stain neoplastic cells such as minigemistocytes and gliofibrillary oligodendrocytes .",
      "Antigens expressed by normal oligodendrocytes, including myelin basic protein (MBP), myelin proteolipid protein (PLP), myelin-associated glycoprotein (MAG), galactolipids (e.g. galactocerebroside and galactosulfatide), certain gangliosides, and several enzymes (e.g. CAII [carbonic anhydrase C], CNP, glycerol-3-phosphate dehydrogenase, and LDH) are not diagnostically useful markers for oligodendrogliomas .",
      "Synaptophysin immunoreactivity of residual neuropil between the tumor cells is frequent and should not be mistaken for neuronal or neurocytic differentiation.",
      "However, oligodendrogliomas may also contain neoplastic cells that express synaptophysin and/or NeuN and neurofilaments .",
      "Immunostaining for α-internexin protein is frequent (e.g. in one study it was found in 88.5% of IDH-mutant and 1p/19q-codeleted CNS WHO grade 3 oligodendrogliomas ), but it cannot be considered a surrogate marker for 1p/19q codeletion .",
      "Similarly, NOGO-A positivity is common but not exclusive .",
      "Reduced nuclear expression of H3 p.K28me3 (K27me3) has been associated with 1p/19q codeletion in IDH-mutant gliomas , but it cannot substitute for 1p/19q testing .",
    ],
    source_diff: [
      "IDH-mutant and 1p/19q-codeleted oligodendrogliomas may histologically mimic various other lesions. Macrophage-rich lesions such as those characteristic of demyelinating diseases or resulting from cerebral infarction are readily distinguished by immunostaining for macrophage markers and lack of IDH mutation. The relative increase of oligodendrocytes sometimes seen in partial lobectomy specimens performed for intractable seizures also lack IDH mutation. IDH-mutant astrocytomas lack 1p/19q codeletion and show frequent nuclear p53 immunostaining and loss of nuclear ATRX. In fact, loss of nuclear ATRX is sufficient to diagnose an IDH-mutant astrocytoma without additional testing for 1p/19q codeletion . TERT promoter mutations are common in IDH-mutant and 1p/19q-codeleted oligodendrogliomas, although rare cases have been reported to lack TERT promoter mutation, and some IDH-mutant but 1p/19q-intact astrocytomas may carry TERT promoter mutations . Other morphological mimics, like neurocytoma, liponeurocytoma, and dysembryoplastic neuroepithelial tumor, can be ruled out by their lack of IDH mutation. Ependymomas containing clear cells differ from oligodendrogliomas by their perivascular pseudorosettes and dot-like or ring-shaped EMA immunoreactivity, as well as a lack of IDH mutation and frequent ZFTA (C11orf95) fusions. Clear cell meningioma can be distinguished by EMA and desmoplakin positivity, IDH-wildtype status, and loss of nuclear SMARCE1 . Metastatic clear cell carcinomas differ from oligodendrogliomas by their sharp tumor borders, cytokeratin and EMA positivity, and lack of IDH mutation. Pilocytic astrocytomas with oligodendroglial features are IDH-wildtype and carry MAPK pathway gene alterations, in particular FGFR1 alterations . However, rare cases of IDH-mutant and 1p/19q-codeleted oligodendrogliomas with KIAA1549::BRAF fusions have been reported . In children, diffuse gliomas with MYB, MYBL1, FGFR1, or BRAF alterations may have histological features of oligodendroglioma or oligoastrocytoma but are biologically distinct tumors . The differential diagnosis of diffuse leptomeningeal glioneuronal tumor is facilitated by the clinical presentation and the combination of MAPK pathway gene alteration (in particular KIAA1549::BRAF fusion) and 1p deletion (or 1p/19q codeletion) but absence of IDH mutation . Malignant small cell astrocytic tumors, including IDH-wildtype glioblastomas and H3 G34–mutant diffuse hemispheric gliomas, must be separated from highly cellular oligodendrogliomas by their IDH-wildtype status and specific alterations, including frequent EGFR amplification and chromosome 10 loss , or mutations leading to H3 p.G35 (G34) variants.",
      "Oligodendroglioma NOS, oligoastrocytoma NOS, and oligoastrocytoma NEC Rare cases of diffuse gliomas with classic oligodendroglioma histology in which molecular testing for combined IDH mutation and 1p/19q codeletion failed (e.g. because of limited tissue availability, low tumor cell content, inconclusive test results, or other circumstances impeding molecular testing) or could not be completed can be histologically classified as oligodendroglioma NOS and designated as CNS WHO grade 2 or 3 depending on the presence or absence of histological features of anaplasia. Immunohistochemical demonstration of IDH mutation and retained nuclear positivity for ATRX may support the oligodendroglioma diagnosis. However, unless successfully tested for 1p/19q codeletion, such tumors cannot be classified as oligodendroglioma, IDH-mutant and 1p/19q-codeleted. Immunohistochemical positivity for oligodendroglioma-associated markers such as α-internexin and NOGO-A , reduced nuclear H3 p.K28me3 (K27me3) immunostaining , and immunohistochemical loss of nuclear CIC or FUBP1 expression are not sufficient to substitute for 1p/19q codeletion testing.",
      "The diagnosis of oligoastrocytoma NOS is reserved for diffuse gliomas that are composed of a conspicuous mixture of two distinct neoplastic cell types morphologically resembling tumor cells with either oligodendroglial or astrocytic features, and in which testing for IDH mutation, nuclear ATRX expression, and 1p/19q codeletion failed or could not be completed. In such cases, tumor cells with oligodendroglial or astroglial features can be either diffusely intermingled or separated into distinct, biphasic areas. However, the diagnosis of oligoastrocytoma is discouraged because molecular analyses have shown that these tumors carry a genetic profile typical of either IDH-mutant astrocytoma or IDH-mutant and 1p/19q-codeleted oligodendroglioma . Thus, diffuse gliomas with mixed or ambiguous histological features should be evaluated for IDH mutation and loss of nuclear ATRX expression, as well as for 1p/19q codeletion when nuclear ATRX is retained .",
      "Rare cases of dual-genotype oligoastrocytomas have been reported. These are characterized by two distinct IDH-mutant tumor cell populations: one showing astrocytoma-associated alterations, such as ATRX loss and TP53 mutation, and the other showing oligodendroglioma-associated 1p/19q codeletion . The WHO Classification of Tumors does not consider these tumors to be a distinct type or subtype of IDH-mutant diffuse glioma, but they may be tentatively classified as dual-genotype oligoastrocytoma NEC .",
    ],
    molecular: [
      "Oligodendrogliomas are molecularly defined by IDH1 or IDH2 mutations and 1p/19q codeletion.",
      "Nearly all tumors have a TERT promoter mutation, lack ATRX mutation, and show preserved nuclear ATRX expression.",
      "TP53 mutations are uncommon .",
      "Diagnosis of oligodendrogliomas requires demonstration of IDH mutation by IDH1 p.R132H immunohistochemistry and/or sequencing of the IDH1 or IDH2 gene, as well as demonstration of 1p/19q codeletion by FISH, chromogenic in situ hybridization, or molecular genetic testing.",
      "In the absence of IDH1 p.R132H-positive immunohistochemistry, sequencing for less common mutations in IDH1 (codon 132) and IDH2 (codon 172) should be performed.",
      "No particular method for molecular testing for 1p/19q codeletion is required, but it is recommended that 1p/19q assays be able to detect whole-arm chromosomal losses.",
      "Only complete losses of both chromosome arms are diagnostic for oligodendroglioma, because partial or isolated loss of 1p or 19q may be present in some IDH-wildtype glioblastomas and IDH-mutant astrocytomas.",
      "FISH probes in commonly deleted regions or loss of only a few PCR probes in loss-of-heterozygosity analysis may not reflect whole-arm losses and thus may lead to false positive results .",
      "In addition, any copy-number analysis requires sufficient tumor cell content, preferably > 30%, to avoid false negative results when assessing 1p/19q codeletion.",
      "Immunohistochemical detection of IDH1 p.R132H expression and preserved nuclear ATRX expression, without demonstration of 1p/19q codeletion, is not sufficient to diagnose an IDH-mutant and 1p/19q-codeleted oligodendroglioma, even with classic histology.",
      "In IDH-mutant gliomas with preserved nuclear ATRX expression by immunohistochemistry, 1p/19q analysis remains critical for accurate molecular diagnosis.",
      "Most IDH-mutant and 1p/19q-codeleted oligodendrogliomas carry TERT promoter mutations ; however, detection of a TERT promoter mutation in an IDH-mutant glioma is not sufficient for an oligodendroglioma diagnosis, because rare cases are TERT-wildtype, including tumors in teenage patients .",
      "TERT promoter mutations are also observed in a subset of 1p/19q-intact IDH-mutant astrocytomas .",
      "DNA methylation array analysis reveals a diagnostic molecular profile by combining the detection of an oligodendroglioma-associated methylation signature and 1p/19q codeletion .",
      "Copy-number analysis by FISH also provides information on polysomy of 1q and 19p, which has been detected in subsets of 1p/19q-codeleted oligodendrogliomas of CNS WHO grades 2 and 3 and is associated with shorter survival .",
      "Homozygous deletion of CDKN2A has been detected in a small proportion of CNS WHO grade 3 IDH-mutant and 1p/19q-codeleted oligodendrogliomas, but not in those of CNS WHO grade 2, and it was reported to be an independent marker of shorter survival .",
      "Tumors that cannot be fully analysed for IDH mutation and 1p/19q codeletion but demonstrate classic histological features of oligodendroglioma are classified as oligodendroglioma NOS .",
      "This indicates that the tumor is a histologically classic oligodendroglioma that will probably exhibit clinical behavior similar to that of an IDH-mutant and 1p/19q-codeleted oligodendroglioma, but that it could not be molecularly analysed or that its test results were inconclusive or uninformative .",
      "Tumors that demonstrate oligodendroglial histology but lack IDH mutation and 1p/19q codeletion should not be classified as oligodendroglioma NOS but must be further evaluated to exclude histological mimics, such as dysembryoplastic neuroepithelial tumor, clear cell ependymoma, neurocytoma, polymorphous low-grade neuroepithelial tumor of the young, and pilocytic astrocytoma, as well as molecularly distinct diffuse gliomas that are characterized by BRAF, FGFR1, MYB, or MYBL1 alterations .",
    ],
    differential: [
      {
        name: "Astrocytoma, IDH-mutant",
        points: [
          "Consider Astrocytoma, IDH-mutant when its defining profile is present: Astrocytoma, IDH-mutant, is a diffusely infiltrating IDH1- or IDH2-mutant glioma with frequent ATRX and/or TP53 mutation and absence of 1p/19q codeletion (CNS WHO grade 2, 3, or 4).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Glioblastoma, IDH-wildtype",
        points: [
          "Consider Glioblastoma, IDH-wildtype when its defining profile is present: Glioblastoma, IDH-wildtype, is a diffuse, astrocytic glioma that is IDH-wildtype and H3-wildtype and has one or more of the following histological or genetic features: microvascular proliferation, necrosis, TER The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "IDH-mutant and 1p/19q-codeleted oligodendrogliomas may histologically mimic various other lesions. M",
        points: [
          "IDH-mutant and 1p/19q-codeleted oligodendrogliomas may histologically mimic various other lesions.",
          "Macrophage-rich lesions such as those characteristic of demyelinating diseases or resulting from cerebral infarction are readily distinguished by immunostaining for macrophage markers and lack of IDH mutation.",
          "The relative increase of oligodendrocytes sometimes seen in partial lobectomy specimens performed for intractable seizures also lack IDH mutation.",
          "IDH-mutant astrocytomas lack 1p/19q codeletion and show frequent nuclear p53 immunostaining and loss of nuclear ATRX.",
          "In fact, loss of nuclear ATRX is sufficient to diagnose an IDH-mutant astroc",
        ],
      },
      {
        name: "Oligodendroglioma NOS, oligoastrocytoma NOS, and oligoastrocytoma NEC Rare cases of diffuse gliomas ",
        points: [
          "Oligodendroglioma NOS, oligoastrocytoma NOS, and oligoastrocytoma NEC Rare cases of diffuse gliomas with classic oligodendroglioma histology in which molecular testing for combined IDH mutation and 1p/19q codeletion failed (e.g. because of limited tissue availability, low tumor cell content, inconclusive test results, or other circumstances impeding molecular testing) or could not be completed can be histologically classified as oligodendroglioma NOS and designated as CNS WHO grade 2 or 3 depending on the presence or absence of histological features of anaplasia.",
          "Immunohistochemical demonstration of IDH mutation and retained nuclear positivit",
        ],
      },
      {
        name: "The diagnosis of oligoastrocytoma NOS is reserved for diffuse gliomas that are composed of a conspic",
        points: [
          "The diagnosis of oligoastrocytoma NOS is reserved for diffuse gliomas that are composed of a conspicuous mixture of two distinct neoplastic cell types morphologically resembling tumor cells with either oligodendroglial or astrocytic features, and in which testing for IDH mutation, nuclear ATRX expression, and 1p/19q codeletion failed or could not be completed.",
          "In such cases, tumor cells with oligodendroglial or astroglial features can be either diffusely intermingled or separated into distinct, biphasic areas.",
          "However, the diagnosis of oligoastrocytoma is discouraged because molecular analyses have shown that these tumors carry a genetic prof",
        ],
      },
    ],
  },
  {
    name: "Glioblastoma, IDH-wildtype",
    group: "Adult-Type Diffuse Gliomas",
    clue: "Glioblastoma, IDH-wildtype, is a diffuse, astrocytic glioma that is IDH-wildtype and H3-wildtype and has one or more of the following histological or genetic features: microvascular proliferation, necrosis, TER",
    summary:
      "Glioblastoma, IDH-wildtype, is most often centered in the subcortical white matter and deeper gray matter of the cerebral hemispheres, affecting all cerebral lobes . In many cases, tumor infiltration extends into the adjacent cortex and through the corpus callosum into the contralateral hemisphere. Glioblastoma, IDH-wi",
    clinical: [
      "It can manifest in patients of any age but preferentially affects older adults, with peak incidence in patients aged 55–85 years.",
      "In children, it accounts for approximately 3% of all CNS tumors .",
      "The M:F ratio for glioblastoma is 1.60:1 in the USA and 1.28:1 in Switzerland .",
      "In many cases, tumor infiltration extends into the adjacent cortex and through the corpus callosum into the contralateral hemisphere.",
      "Glioblastoma, IDH-wildtype, also affects the brainstem, cerebellum, and spinal cord; however, in midline locations, other diffuse gliomas should also be considered (e.g. diffuse midline glioma, H3 K27–altered).",
    ],
    criteria: [
      "Glioblastoma, IDH-wildtype, is a diffuse, astrocytic glioma that is IDH-wildtype and H3-wildtype and has one or more of the following histological or genetic features: microvascular proliferation, necrosis, TERT promoter mutation, EGFR gene amplification, +7/−10 chromosome copy-number changes (CNS WHO grade 4).",
      "Glioblastoma, IDH-wildtype, is typically a diffusely infiltrating, highly cellular glioma composed of astrocytic, usually poorly differentiated tumor cells that show nuclear atypia and often marked pleomorphism.",
      "Mitotic activity is readily identifiable in most cases and is often brisk.",
      "Microvascular proliferation and necrosis, with or without perinecrotic palisading, are characteristic diagnostic features.",
      "In an IDH- and H3-wildtype diffuse glioma, at least one of these features (i.e. microvascular proliferation or necrosis) is sufficient for the diagnosis of glioblastoma.",
      "In specimens from treated patients, therapy-induced necrosis, in particular radionecrosis, must be distinguished from innate tumor necrosis.",
      "As the outdated term “glioblastoma multiforme” suggests, the histopathology of this tumor is highly variable, which sometimes makes histopathological diagnosis difficult on specimens obtained by stereotactic needle biopsy .",
      "Some lesions show a high degree of cellular and nuclear polymorphism, with numerous multinucleated giant cells; others are markedly cellular but relatively monomorphic.",
      "The astrocytic nature of the neoplasms is easily identifiable (at least focally) in some tumors, but it may be difficult to recognize in poorly differentiated lesions.",
      "IDH-wildtype glioblastomas lack mutations in IDH1 codon 132 and IDH2 codon 172, and they do not carry H3 p.K28 (K27) or H3 p.G35 (G34) mutations.",
      "Absence of immunoreactivity for IDH1 p.R132H is sufficient (i.e. without further sequencing) to diagnose IDH-wildtype glioblastoma in a patient aged ≥ 55 years at diagnosis who has a histologically classic glioblastoma not located in midline structures and no history of a pre-existing lower-grade glioma .",
      "This practical approach is possible because the probability of a non-canonical IDH mutation is < 1% in glioblastomas from patients aged ≥ 55 years .",
      "In patients aged < 55 years, or in patients with a history of lower-grade glioma and/or whose tumors show immunohistochemical loss of nuclear ATRX expression, negative IDH1 p.R132H immunostaining should be followed by DNA sequencing for less common IDH1 or IDH2 mutations.",
      "When no IDH mutations are detected by sequencing, such tumors are classified as glioblastoma, IDH-wildtype.",
      "However, tumors located in midline structures should additionally be evaluated for H3 p.K28M (K27M) mutation to exclude diffuse midline glioma, H3 K27–altered.",
      "In hemispheric tumors, particularly in younger patients, H3 G34–mutant diffuse hemispheric gliomas should be excluded by immunohistochemistry for H3.3 p.G35R (G34R) or H3.3 p.G35V (G34V) mutation or by H3-3A (H3F3A) sequencing.",
    ],
    histology: [
      "Glioblastoma, IDH-wildtype, is typically a diffusely infiltrating, highly cellular glioma composed of astrocytic, usually poorly differentiated tumor cells that show nuclear atypia and often marked pleomorphism.",
      "Mitotic activity is readily identifiable in most cases and is often brisk.",
      "Microvascular proliferation and necrosis, with or without perinecrotic palisading, are characteristic diagnostic features.",
      "In an IDH- and H3-wildtype diffuse glioma, at least one of these features (i.e. microvascular proliferation or necrosis) is sufficient for the diagnosis of glioblastoma.",
      "In specimens from treated patients, therapy-induced necrosis, in particular radionecrosis, must be distinguished from innate tumor necrosis.",
      "As the outdated term “glioblastoma multiforme” suggests, the histopathology of this tumor is highly variable, which sometimes makes histopathological diagnosis difficult on specimens obtained by stereotactic needle biopsy .",
      "Some lesions show a high degree of cellular and nuclear polymorphism, with numerous multinucleated giant cells; others are markedly cellular but relatively monomorphic.",
      "The astrocytic nature of the neoplasms is easily identifiable (at least focally) in some tumors, but it may be difficult to recognize in poorly differentiated lesions.",
      "The distribution of histological features within a glioblastoma is variable, but large necrotic areas usually occupy the tumor centre, whereas viable tumor cells tend to be found in the tumor periphery.",
      "The circumferential region of high cellularity and abnormal vessels corresponds to the contrast-enhancing ring seen radiologically and is therefore an appropriate target for biopsy.",
      "Microvascular proliferation is seen throughout the lesion but is usually most marked around necrotic foci and in the peripheral zone of infiltration.",
      "Cellular heterogeneity and glioblastoma patterns Few human neoplasms are as morphologically heterogeneous as glioblastoma.",
      "Poorly differentiated, fusiform, round, or pleomorphic cells may prevail, but better-differentiated neoplastic astrocytes are often discernible, at least focally .",
      "The transition between areas that still have recognizable astrocytic differentiation and highly anaplastic (small, round, primitive-appearing) cells may be either continuous or abrupt.",
      "In gemistocytic lesions, anaplastic tumor cells may be diffusely mixed with differentiated gemistocytes.",
      "An abrupt change in morphology may reflect the emergence of a distinct tumor clone due to subclonal molecular diversification during tumor evolution (see Primitive neuronal cells and glioblastoma with a primitive neuronal component, below) .",
      "Cellular pleomorphism includes the formation of small, undifferentiated, spindled, lipidized, granular, epithelioid, and/or giant cells.",
      "In some tumors, these patterns can dominate, for example in areas of bipolar, fusiform cells that form intersecting bundles and fascicles resembling a spindle cell sarcoma.",
      "The accumulation of epithelioid tumor cells with well-delineated plasma membranes and a lack of cell processes, such as in epithelioid glioblastomas (see below), may mimic metastatic carcinoma or melanoma.",
    ],
    ihc: [
      "By definition, IDH-wildtype glioblastomas lack immunostaining for IDH1 p.R132H and do not demonstrate positivity with mutation-specific antibodies against H3 p.K28M (K27M), H3.3 p.G35R (G34R), or H3.3 p.G35V (G34V).",
      "Nuclear immunostaining for ATRX is retained in the vast majority of tumors, and widespread nuclear positivity for p53 is seen in approximately 25–30% of tumors.",
      "Nuclear p53 positivity is particularly frequent in the giant cell glioblastoma subtype.",
      "Glioblastomas often express GFAP, but the degree of reactivity differs markedly between cases; for example, gemistocytic areas are frequently strongly positive, whereas primitive cellular components are often negative.",
      "S100 expression is also common.",
      "OLIG2 is a highly specific glioma marker and may be of diagnostic utility, being strongly positive more commonly in astrocytomas and oligodendrogliomas than in ependymomas and non-glial tumors ; tumors with low nuclear expression of OLIG2 (< 30%) after adjuvant treatments may have a shorter time to recurrence and be associated with shorter survival .",
      "Cytokeratin positivity may primarily indicate cross-reactivity with GFAP; immunostaining with the keratin antibody cocktail AE1/AE3 is most often positive, in contrast to the lack of positivity detected for most other keratins .",
      "However, glioblastomas with epithelial metaplasia may show expression of epithelial markers including cytokeratins in the epithelial component.",
      "Sarcomatous components in gliosarcoma typically lack expression of glial markers but react positively for vimentin.",
      "Rare cases may show expression of markers indicating differentiation along myogenic or other mesenchymal lineages (see Gliosarcoma, above).",
      "Cancer stem cell biomarkers such as CD133, CD44, SOX2, OCT4, and nestin may be found in glioblastomas but are of limited significance in diagnostic work.",
      "Notably, intratumoral heterogeneity for immunohistochemical positivity is common in glioblastomas, with differential expression of markers such as nestin, MAP2, and GFAP within different regions of the same tumor .",
      "Expression of EGFR is frequent in IDH-wildtype glioblastoma and particularly strong in tumors with EGFR amplification, approximately half of which additionally show immunopositivity for EGFRvIII .",
    ],
    source_diff: [],
    molecular: [
      "IDH-wildtype glioblastomas lack mutations in IDH1 codon 132 and IDH2 codon 172, and they do not carry H3 p.K28 (K27) or H3 p.G35 (G34) mutations.",
      "Absence of immunoreactivity for IDH1 p.R132H is sufficient (i.e. without further sequencing) to diagnose IDH-wildtype glioblastoma in a patient aged ≥ 55 years at diagnosis who has a histologically classic glioblastoma not located in midline structures and no history of a pre-existing lower-grade glioma .",
      "This practical approach is possible because the probability of a non-canonical IDH mutation is < 1% in glioblastomas from patients aged ≥ 55 years .",
      "In patients aged < 55 years, or in patients with a history of lower-grade glioma and/or whose tumors show immunohistochemical loss of nuclear ATRX expression, negative IDH1 p.R132H immunostaining should be followed by DNA sequencing for less common IDH1 or IDH2 mutations.",
      "When no IDH mutations are detected by sequencing, such tumors are classified as glioblastoma, IDH-wildtype.",
      "However, tumors located in midline structures should additionally be evaluated for H3 p.K28M (K27M) mutation to exclude diffuse midline glioma, H3 K27–altered.",
      "In hemispheric tumors, particularly in younger patients, H3 G34–mutant diffuse hemispheric gliomas should be excluded by immunohistochemistry for H3.3 p.G35R (G34R) or H3.3 p.G35V (G34V) mutation or by H3-3A (H3F3A) sequencing.",
      "Frequent and diagnostically relevant molecular alterations in IDH-wildtype glioblastomas include TERT promoter mutations, EGFR gene amplification, and a +7/−10 genotype .",
      "The presence of at least one of these aberrations in an IDH- and H3-wildtype diffuse glioma allows for the diagnosis of IDH-wildtype glioblastoma even in the absence of microvascular proliferation and/or necrosis .",
      "In addition, demonstration of a DNA methylation profile of IDH-wildtype glioblastoma with a significant calibrated score is sufficient for the diagnosis .",
      "DNA methylation profiles may further stratify molecular subgroups, with the RTK1, RTK2/classic, and mesenchymal subgroups being most common in adult patients .",
      "In this age group, the clinical relevance of methylation-based subgroups is still limited.",
      "In contrast, high-grade gliomas of children and adolescents may demonstrate less common DNA methylation profiles that have been linked to significantly longer survival .",
      "DNA methylation profiling can also facilitate the diagnosis of challenging cases by helping to distinguish glioblastoma from histologically similar entities .",
      "BRAF p.V600E mutation is rare in IDH-wildtype glioblastoma but is detectable in as many as 50% of glioblastomas with epithelioid histology : BRAF p.V600E is found in 79% of pleomorphic xanthoastrocytoma–like tumors and 35% of adult-type IDH-wildtype glioblastomas, but 0% of pediatric RTK1 tumors .",
      "TP53 mutations are detectable in about a quarter of all IDH-wildtype glioblastomas but are found in > 80% of giant cell glioblastomas , which less commonly carry EGFR amplification and TERT promoter mutations .",
      "EGFR amplification appears to be frequent in small cell glioblastomas , whereas MYC or MYCN amplification has been linked to primitive neuronal components .",
      "However, none of these alterations is specific or sufficient for the respective morphological subtypes or patterns.",
      "Gliosarcomas rarely demonstrate EGFR amplification but otherwise lack distinguishing genetic alterations .",
      "Novel predictive biomarkers for molecularly targeted therapies in subsets of glioblastoma patients are under evaluation; these include high tumor mutation burden, BRAF p.V600E mutation, NTRK or FGFR gene family fusions, and MET amplification or fusions .",
    ],
    differential: [
      {
        name: "Astrocytoma, IDH-mutant",
        points: [
          "Consider Astrocytoma, IDH-mutant when its defining profile is present: Astrocytoma, IDH-mutant, is a diffusely infiltrating IDH1- or IDH2-mutant glioma with frequent ATRX and/or TP53 mutation and absence of 1p/19q codeletion (CNS WHO grade 2, 3, or 4).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted",
        points: [
          "Consider Oligodendroglioma, IDH-mutant and 1p/19q-codeleted when its defining profile is present: Oligodendroglioma, IDH-mutant and 1p/19q-codeleted, is a diffusely infiltrating glioma with IDH1 or IDH2 mutation and codeletion of chromosome arms 1p and 19q (CNS WHO grade 2 or 3).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Diffuse astrocytoma, MYB- or MYBL1-altered",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    clue: "Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
    summary:
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is most commonly a cerebral tumor with cortical and subcortical components. In 40 reported cases, the tumor was centered in the temporal (42.5%), frontal (27.5%), occipital (20%), and parietal (10%) lobes . Rare brainstem cases have also been reported .",
    clinical: [
      "Patients typically present with drug-resistant epileptic seizures, which often have been present since childhood .",
      "In one series, 81% of patients with MYB- or MYBL1-altered diffuse astrocytoma developed epilepsy during childhood, and the median age at onset of epilepsy was 10 years (range: 1–35 years) .",
      "However, only 23% of patients had a resection as children, with the median age at surgery being 29 years and the median time to operation after epilepsy onset being 15 years.",
      "Pediatric series each described < 10 cases , with no clear sex predilection.",
      "The largest series to date includes data on 20 patients with a MYB or MYBL1 alteration , with a median age of 29 years (range: 4–50 years) and a male preponderance (M:F ratio: 3:1).",
    ],
    criteria: [
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic .",
      "Frequently, tumor cells barely raise the normal cell density of infiltrated parenchyma and may therefore be difficult to recognize as neoplastic .",
      "A vague angiocentric polarity may be regionally evident, particularly in the MYB-altered subtype.",
      "Entrapped neurons often attest to the infiltrative nature of these astrocytomas.",
      "Mitotic activity is typically absent or low, and microvascular proliferation and necrosis are not seen.",
      "Occasionally, cases with more pleomorphic nuclei and slightly elevated proliferation are observed, especially in pediatric patients.",
      "Sequencing demonstrates a structural variation that results in a fusion between MYB or MYBL1 and a partner gene .",
      "The most frequently reported partner genes are PCDHGA1, MMP16, and MAML2 .",
      "MYB rarely partners with QKI in this tumor; a MYB::QKI fusion is typically found in angiocentric glioma .",
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is IDH- and H3-wildtype.",
      "Although sequencing determines the nature of the gene fusion, other methods (e.g. interphase FISH) can also demonstrate a rearrangement of MYB or MYBL1.",
    ],
    histology: [
      "A proliferation of relatively monomorphic glial cells with bland, round to ovoid or spindled nuclei, diffusely disposed in a fibrillar matrix or permeating neuropil, is characteristic .",
      "Frequently, tumor cells barely raise the normal cell density of infiltrated parenchyma and may therefore be difficult to recognize as neoplastic .",
      "A vague angiocentric polarity may be regionally evident, particularly in the MYB-altered subtype.",
      "Entrapped neurons often attest to the infiltrative nature of these astrocytomas.",
      "Mitotic activity is typically absent or low, and microvascular proliferation and necrosis are not seen.",
      "Occasionally, cases with more pleomorphic nuclei and slightly elevated proliferation are observed, especially in pediatric patients.",
    ],
    ihc: [
      "Immunoreactivity for GFAP and low Ki-67 labelling index values are typical.",
      "One study reported that expression of MAP2 is limited to residual neurons and neuronal processes and that tumor cells are negative for OLIG2 and CD34 .",
      "IDH1 p.R132H is negative, and nuclear ATRX expression is retained .",
    ],
    source_diff: [
      "Some areas in angiocentric gliomas have the same architectural and cytological features that characterize MYB- or MYBL1-altered diffuse astrocytoma, and these two tumor types are considered to have overlapping morphology. A histogenetic relationship between these tumor types is reinforced at the genetic level; practically all angiocentric gliomas have a rearrangement of MYB, most commonly associated with a MYB::QKI fusion. It is more important to distinguish MYB- or MYBL1-altered diffuse astrocytoma from adult-type IDH-mutant or IDH-wildtype diffuse astrocytic gliomas, given their distinct biological behavior.",
    ],
    molecular: [
      "Sequencing demonstrates a structural variation that results in a fusion between MYB or MYBL1 and a partner gene .",
      "The most frequently reported partner genes are PCDHGA1, MMP16, and MAML2 .",
      "MYB rarely partners with QKI in this tumor; a MYB::QKI fusion is typically found in angiocentric glioma .",
      "Diffuse astrocytoma, MYB- or MYBL1-altered, is IDH- and H3-wildtype.",
      "Although sequencing determines the nature of the gene fusion, other methods (e.g. interphase FISH) can also demonstrate a rearrangement of MYB or MYBL1.",
    ],
    differential: [
      {
        name: "Angiocentric glioma",
        points: [
          "Consider Angiocentric glioma when its defining profile is present: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
          "Almost all angiocentric gliomas have a MYB::QKI gene fusio The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Polymorphous low-grade neuroepithelial tumor of the young",
        points: [
          "Consider Polymorphous low-grade neuroepithelial tumor of the young when its defining profile is present: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent pre The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse low-grade glioma, MAPK pathway-altered",
        points: [
          "Consider Diffuse low-grade glioma, MAPK pathway-altered when its defining profile is present: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Some areas in angiocentric gliomas have the same architectural and cytological features that charact",
        points: [
          "Some areas in angiocentric gliomas have the same architectural and cytological features that characterize MYB- or MYBL1-altered diffuse astrocytoma, and these two tumor types are considered to have overlapping morphology.",
          "A histogenetic relationship between these tumor types is reinforced at the genetic level; practically all angiocentric gliomas have a rearrangement of MYB, most commonly associated with a MYB::QKI fusion.",
          "It is more important to distinguish MYB- or MYBL1-altered diffuse astrocytoma from adult-type IDH-mutant or IDH-wildtype diffuse astrocytic gliomas, given their distinct biological behavior.",
        ],
      },
    ],
  },
  {
    name: "Angiocentric glioma",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    clue: "Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces. Almost all angiocentric gliomas have a MYB::QKI gene fusio",
    summary:
      "Angiocentric gliomas are typically located in the cerebral cortex, but the brainstem is an increasingly recognized site for this tumor .",
    clinical: [
      "Most cases occur in children and young adults, with a median age of 13 years (range: 2–79 years) at presentation.",
      "No clear sex predilection is yet apparent, although slightly more male patients than female patients with angiocentric glioma are described in the literature .",
      "Angiocentric gliomas are typically located in the cerebral cortex, but the brainstem is an increasingly recognized site for this tumor .",
      "Imaging In the cerebral cortex, angiocentric gliomas are commonly located in the temporal or frontal lobes.",
      "Brainstem examples have also been reported .",
    ],
    criteria: [
      "Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
      "Almost all angiocentric gliomas have a MYB::QKI gene fusion, and the remainder generally have another MYB alteration (CNS WHO grade 1).",
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every calibre; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes.",
      "Spindle cell elements can permeate the parenchyma extensively and at variable density, fashion compact nodules of schwannoma-like appearance, be disposed in tight and intersecting fascicles, and aggregate beneath the pial surface in horizontal streams or in a perpendicular and palisading alignment.",
      "Myxoid and microcystic alterations may be conspicuous.",
      "Entrapped neurons are not conspicuously dysmorphic .",
      "Some angiocentric gliomas harbour epithelioid elements that may contain rounded paranuclear structures with an internal granular stippling , which correspond to EMA-immunoreactive microlumina of the type seen in ependymomas and demonstrated in angiocentric gliomas at the ultrastructural level .",
      "Although histologically typical examples with apparent mitotic activity occur , mitoses are sparse in most cases, and neither microvascular proliferation nor necrosis is seen.",
      "Increased proliferative activity and other anaplastic features have been reported rarely, but the clinical significance of such findings is uncertain .",
      "Practically all angiocentric gliomas show rearrangements and/or copy-number alterations, including deletion or amplification , at the MYB locus on 6q23.3 .",
      "Most rearrangements involve fusions between the MYB and QKI genes .",
      "In data taken from several studies, a MYB alteration was found in 73 (99%) of 74 angiocentric gliomas .",
      "Where appropriate analyses could be undertaken, a MYB::QKI fusion was demonstrated in 41 (87%) of 47 tumors from these series.",
      "Rarely, MYB has been shown to fuse with several other genes, such as PCDHGA1 .",
      "Angiocentric gliomas lack mutations in TP53, ATRX, IDH1, IDH2, and histone H3 genes .",
      "Another CNS tumor with a relatively high frequency of MYB alterations is pediatric diffuse astrocytoma, MYB- or MYBL1-altered.",
    ],
    histology: [
      "Typically, angiocentric gliomas have cytologically uniform, bipolar spindle cells with slender nuclei and granular chromatin oriented around blood vessels of every calibre; these cells are radially arrayed in a rosette-like pattern or form monolayered or multilayered sleeves lengthwise along vascular axes.",
      "Spindle cell elements can permeate the parenchyma extensively and at variable density, fashion compact nodules of schwannoma-like appearance, be disposed in tight and intersecting fascicles, and aggregate beneath the pial surface in horizontal streams or in a perpendicular and palisading alignment.",
      "Myxoid and microcystic alterations may be conspicuous.",
      "Entrapped neurons are not conspicuously dysmorphic .",
      "Some angiocentric gliomas harbour epithelioid elements that may contain rounded paranuclear structures with an internal granular stippling , which correspond to EMA-immunoreactive microlumina of the type seen in ependymomas and demonstrated in angiocentric gliomas at the ultrastructural level .",
      "Although histologically typical examples with apparent mitotic activity occur , mitoses are sparse in most cases, and neither microvascular proliferation nor necrosis is seen.",
      "Increased proliferative activity and other anaplastic features have been reported rarely, but the clinical significance of such findings is uncertain .",
    ],
    ihc: [
      "On immunohistochemical study, GFAP expression is the rule, and a near-constant finding is at least regional EMA immunolabelling of the cytoplasm in a dot-like or ring-like (microlumen) pattern .",
      "Membranous EMA expression characterizes some epithelioid cells in perivascular and subpial locations.",
      "Tumor cells do not label for neuronal markers and are, in contrast to most other low-grade astrocytomas, predominantly OLIG2-negative.",
      "Ki-67 immunolabelling index values are generally < 5% (frequently < 1%), but a labelling index of 10% was found in an otherwise typical lesion that had not recurred 6 years after surgery .",
    ],
    source_diff: [],
    molecular: [
      "Practically all angiocentric gliomas show rearrangements and/or copy-number alterations, including deletion or amplification , at the MYB locus on 6q23.3 .",
      "Most rearrangements involve fusions between the MYB and QKI genes .",
      "In data taken from several studies, a MYB alteration was found in 73 (99%) of 74 angiocentric gliomas .",
      "Where appropriate analyses could be undertaken, a MYB::QKI fusion was demonstrated in 41 (87%) of 47 tumors from these series.",
      "Rarely, MYB has been shown to fuse with several other genes, such as PCDHGA1 .",
      "Angiocentric gliomas lack mutations in TP53, ATRX, IDH1, IDH2, and histone H3 genes .",
      "Another CNS tumor with a relatively high frequency of MYB alterations is pediatric diffuse astrocytoma, MYB- or MYBL1-altered.",
    ],
    differential: [
      {
        name: "Diffuse astrocytoma, MYB- or MYBL1-altered",
        points: [
          "Consider Diffuse astrocytoma, MYB- or MYBL1-altered when its defining profile is present: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Polymorphous low-grade neuroepithelial tumor of the young",
        points: [
          "Consider Polymorphous low-grade neuroepithelial tumor of the young when its defining profile is present: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent pre The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse low-grade glioma, MAPK pathway-altered",
        points: [
          "Consider Diffuse low-grade glioma, MAPK pathway-altered when its defining profile is present: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Polymorphous low-grade neuroepithelial tumor of the young",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    clue: "Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent pre",
    summary:
      "PLNTYs are cerebral tumors that usually have cortical and subcortical components. Approximately 80% have involved the temporal lobes, mostly on the right side and with frequent involvement of medial/posteroinferior structures . Other reported locations include the frontal, parietal, and occipital lobes as well as the t",
    clinical: [
      "PLNTYs have been reported in patients ranging in age from 4 to 57 years , with most occurring in the second and third decades of life (median age at diagnosis: 16 years).",
      "There is no clear sex predilection.",
      "PLNTYs are cerebral tumors that usually have cortical and subcortical components.",
      "Approximately 80% have involved the temporal lobes, mostly on the right side and with frequent involvement of medial/posteroinferior structures .",
      "Other reported locations include the frontal, parietal, and occipital lobes as well as the third ventricular region .",
    ],
    criteria: [
      "Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent presence of oligodendroglioma-like components, calcification, CD34 immunoreactivity, and MAPK pathway–activating genetic abnormalities (CNS WHO grade 1).",
      "PLNTYs exhibit both infiltrative and compact growth patterns.",
      "Usually present and often dominant are oligodendroglioma-like components, which range from elements having uniformly small and round nuclei with perinuclear haloes to populations exhibiting obvious variation in nuclear size and shape with wrinkled or grooved nuclear membranes and intranuclear pseudoinclusions .",
      "PLNTYs may also contain elements of astrocytic or morphologically ambiguous appearance, the former including fibrillary, spindled, and pleomorphic forms.",
      "Some examples display subtle perivascular pseudorosettes.",
      "Calcifications are present in the large majority and may be coarse and confluent.",
      "Generally absent are foci of necrosis, microvascular proliferation, gemistocytic elements, myxoid microcysts, neurocytic rosettes, and Rosenthal fibres.",
      "Eosinophilic granular bodies are only occasionally present .",
      "Patently neoplastic neuronal components are typically not in evidence, although modestly dysmorphic neurons in small numbers may be encountered.",
      "The nosological position of neoplasms otherwise qualifying as PLNTYs but having nodular ganglion cell aggregates is unclear.",
      "PLNTYs characteristically manifest little, if any, mitotic activity.",
      "However, one study described an example with increased mitotic activity and illustrated an unusually pleomorphic case with atypical mitoses .",
      "PLNTYs are consistently associated with MAPK pathway–activating abnormalities, which must be demonstrated for confident diagnosis.",
      "These specifically include BRAF p.V600E mutations , as well as fusions involving FGFR2 or FGFR3 .",
      "One such fusion, FGFR2::CTNNA3, has yet to be reported in any other CNS neoplasm , whereas others, including FGFR2::SHTN1 (KIAA1598), FGFR2::INA, and FGFR3::TACC3, are also encountered in various other entities.",
      "One FGFR3::TACC3–fused PLNTY also manifested low-level FGFR3 amplification, but whether these changes involved the same allele was not clear .",
      "A partial duplication of NTRK2 was detected in a single case .",
      "PLNTYs do not harbour IDH or ATRX mutations, do not exhibit 1p/19q codeletion, and have a distinct DNA methylation profile most closely aligned to that of ganglioglioma .",
    ],
    histology: [
      "PLNTYs exhibit both infiltrative and compact growth patterns.",
      "Usually present and often dominant are oligodendroglioma-like components, which range from elements having uniformly small and round nuclei with perinuclear haloes to populations exhibiting obvious variation in nuclear size and shape with wrinkled or grooved nuclear membranes and intranuclear pseudoinclusions .",
      "PLNTYs may also contain elements of astrocytic or morphologically ambiguous appearance, the former including fibrillary, spindled, and pleomorphic forms.",
      "Some examples display subtle perivascular pseudorosettes.",
      "Calcifications are present in the large majority and may be coarse and confluent.",
      "Generally absent are foci of necrosis, microvascular proliferation, gemistocytic elements, myxoid microcysts, neurocytic rosettes, and Rosenthal fibres.",
      "Eosinophilic granular bodies are only occasionally present .",
      "Patently neoplastic neuronal components are typically not in evidence, although modestly dysmorphic neurons in small numbers may be encountered.",
      "The nosological position of neoplasms otherwise qualifying as PLNTYs but having nodular ganglion cell aggregates is unclear.",
      "PLNTYs characteristically manifest little, if any, mitotic activity.",
      "However, one study described an example with increased mitotic activity and illustrated an unusually pleomorphic case with atypical mitoses .",
    ],
    ihc: [
      "On immunohistochemical assessment, PLNTYs exhibit expression of GFAP (this may be regional or generalized), OLIG2, and CD34 ; the last may be patchy, or diffuse and intense.",
      "CD34 labelling is displayed both by tumor cells and by ramified neural elements in the associated cerebral cortex.",
      "There is retained tumor cell expression of ATRX but no labelling of IDH1 p.R132H.",
      "PLNTYs are typically negative for EMA, synaptophysin, chromogranin, NeuN, and HuC/HuD.",
      "Immunoreactivity for BRAF p.V600E may be encountered, reflecting the presence of these mutations in a subset of PLNTYs.",
      "Ki-67 labelling index values are generally low (≤ 1–2%), but higher values (up to 5%) have been reported .",
    ],
    source_diff: [
      "PLNTYs may be histologically indistinguishable from oligodendrogliomas or diffuse astrocytomas, but the latter are generally CD34-negative (whereas PLNTYs are CD34-positive) and PLNTYs do not manifest IDH mutations or 1p/19q codeletion like the other tumor types, and they display MAPK pathway–activating genetic abnormalities typically foreign to the adult-type infiltrating gliomas (see Diagnostic molecular pathology). An oligodendroglioma-like entity closely resembling PLNTY in morphology, immunophenotype, clinical presentation, and demonstration of BRAF p.V600E mutations, but manifesting chromosomal instability, has been described and could represent a PLNTY subtype . Also resembling PLNTYs at the morphological level, potentially expressing CD34 and (like select PLNTYs) exhibiting FGFR3::TACC3 gene fusions (see Diagnostic molecular pathology), is a group of aggressive gliomas that principally arise in middle-aged and older adults, generally harbour high-grade components that would qualify as anaplastic astrocytoma or glioblastoma, and display copy-number abnormalities and other genetic alterations associated with IDH-wildtype glioblastomas .",
    ],
    molecular: [
      "PLNTYs are consistently associated with MAPK pathway–activating abnormalities, which must be demonstrated for confident diagnosis.",
      "These specifically include BRAF p.V600E mutations , as well as fusions involving FGFR2 or FGFR3 .",
      "One such fusion, FGFR2::CTNNA3, has yet to be reported in any other CNS neoplasm , whereas others, including FGFR2::SHTN1 (KIAA1598), FGFR2::INA, and FGFR3::TACC3, are also encountered in various other entities.",
      "One FGFR3::TACC3–fused PLNTY also manifested low-level FGFR3 amplification, but whether these changes involved the same allele was not clear .",
      "A partial duplication of NTRK2 was detected in a single case .",
      "PLNTYs do not harbour IDH or ATRX mutations, do not exhibit 1p/19q codeletion, and have a distinct DNA methylation profile most closely aligned to that of ganglioglioma .",
    ],
    differential: [
      {
        name: "Diffuse astrocytoma, MYB- or MYBL1-altered",
        points: [
          "Consider Diffuse astrocytoma, MYB- or MYBL1-altered when its defining profile is present: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Angiocentric glioma",
        points: [
          "Consider Angiocentric glioma when its defining profile is present: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
          "Almost all angiocentric gliomas have a MYB::QKI gene fusio The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse low-grade glioma, MAPK pathway-altered",
        points: [
          "Consider Diffuse low-grade glioma, MAPK pathway-altered when its defining profile is present: Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "PLNTYs may be histologically indistinguishable from oligodendrogliomas or diffuse astrocytomas, but ",
        points: [
          "PLNTYs may be histologically indistinguishable from oligodendrogliomas or diffuse astrocytomas, but the latter are generally CD34-negative (whereas PLNTYs are CD34-positive) and PLNTYs do not manifest IDH mutations or 1p/19q codeletion like the other tumor types, and they display MAPK pathway–activating genetic abnormalities typically foreign to the adult-type infiltrating gliomas (see Diagnostic molecular pathology).",
          "An oligodendroglioma-like entity closely resembling PLNTY in morphology, immunophenotype, clinical presentation, and demonstration of BRAF p.V600E mutations, but manifesting chromosomal instability, has been described and could",
        ],
      },
    ],
  },
  {
    name: "Diffuse low-grade glioma, MAPK pathway-altered",
    group: "Pediatric-Type Diffuse Low-Grade Gliomas",
    clue: "Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in",
    summary:
      "MAPK pathway–altered diffuse low-grade gliomas are described throughout the craniospinal axis, particularly the cerebral hemispheres. Among pediatric low-grade gliomas, specific alterations are more common in specific locations , raising the possibility that there may be regional differences in subtypes.",
    clinical: [
      "In a series of 843 patients aged < 19 years with low-grade gliomas and without neurofibromatosis type 1 (NF1), 5.9% of tumors had the morphology of a diffuse astrocytoma and 3.0% had that of an oligodendroglioma .",
      "Reports of this tumor have, by definition, focused on tumors affecting children.",
    ],
    criteria: [
      "Diffuse low-grade glioma, MAPK pathway–altered, is a low-grade glioma with diffuse astrocytic or oligodendroglial morphology that generally occurs in childhood and is characterized by a pathogenic alteration in a gene that codes for a MAPK pathway protein.",
      "Typically, these tumors have an internal tandem duplication (ITD) or mutation in the tyrosine kinase domain (TKD) of FGFR1, or a BRAF p.V600E mutation.",
      "The tumor is IDH-wildtype and H3-wildtype and does not have a homozygous deletion of CDKN2A.",
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma.",
      "The pattern of infiltration is not as extensive as seen in some IDH-mutant low-grade gliomas; it is more in line with the degree of infiltration found in angiocentric gliomas and polymorphous low-grade neuroepithelial tumor of the young (PLNTY), yet exceeds the peripheral incorporation of normal cells sometimes found in other low-grade gliomas, such as pilocytic astrocytoma and pleomorphic xanthoastrocytoma.",
      "Diffuse low-grade glioma, FGFR1 TKD–duplicated or FGFR1-mutant Diffuse low-grade gliomas with FGFR1 alterations typically have the morphological features of an oligodendroglioma , although astrocytomas can also have this genetic profile.",
      "A nodular architecture is occasionally present, and there is some overlap with the morphology of dysembryoplastic neuroepithelial tumor, which shares these genetic alterations .",
      "Mitotic activity is rare or absent, and there is no microvascular proliferation or necrosis.",
      "These tumors are diffusely immunopositive for OLIG2 and show variable expression of GFAP.",
      "Immunoreactivity for CD34 is typically restricted to a few cells, unlike the widespread expression evident in PLNTY.",
      "The diagnosis requires evidence of a MAPK pathway alteration in the absence of an IDH or H3 p.K28M (K27M) mutation and without homozygous deletion of CDKN2A.",
      "The most commonly observed genetic alterations in these tumors occur in BRAF (generally a p.V600E mutation) and in FGFR1 (TKD duplication, one or sometimes two single-nucleotide variants, or a fusion gene) .",
      "Further rare alterations are seen in a variety of other MAPK genes, including FGFR2, NTRK1, NTRK2, NTRK3, MAP2K1, and MET .",
      "Although there is emerging evidence that they may also result in MAPK pathway activation , diffuse astrocytomas with MYB or MYBL1 alterations are listed separately under the family of pediatric-type diffuse low-grade gliomas.",
    ],
    histology: [
      "MAPK pathway–altered diffuse low-grade gliomas typically have a bland appearance, being composed of mildly atypical glial cells at relatively low density and entrapped normal parenchyma.",
      "The pattern of infiltration is not as extensive as seen in some IDH-mutant low-grade gliomas; it is more in line with the degree of infiltration found in angiocentric gliomas and polymorphous low-grade neuroepithelial tumor of the young (PLNTY), yet exceeds the peripheral incorporation of normal cells sometimes found in other low-grade gliomas, such as pilocytic astrocytoma and pleomorphic xanthoastrocytoma.",
      "Diffuse low-grade glioma, FGFR1 TKD–duplicated or FGFR1-mutant Diffuse low-grade gliomas with FGFR1 alterations typically have the morphological features of an oligodendroglioma , although astrocytomas can also have this genetic profile.",
      "A nodular architecture is occasionally present, and there is some overlap with the morphology of dysembryoplastic neuroepithelial tumor, which shares these genetic alterations .",
      "Mitotic activity is rare or absent, and there is no microvascular proliferation or necrosis.",
      "These tumors are diffusely immunopositive for OLIG2 and show variable expression of GFAP.",
      "Immunoreactivity for CD34 is typically restricted to a few cells, unlike the widespread expression evident in PLNTY.",
      "The differential diagnosis for diffuse low-grade glioma with FGFR1 alterations includes dysembryoplastic neuroepithelial tumor, PLNTY, and adult-type IDH-mutant oligodendroglioma.",
      "Dysembryoplastic neuroepithelial tumors can only be distinguished by the presence of their defining specific glioneuronal element and, in complex cases, glial nodules.",
      "PLNTYs have a distinctive cytology and show widespread strong expression of CD34.",
      "Adult-type oligodendroglioma is distinguished by the presence of an IDH mutation combined with 1p/19q codeletion.",
      "Diffuse low-grade glioma, BRAF p.V600E–mutant Diffuse low-grade gliomas with a BRAF p.V600E mutation are composed of well-differentiated glial cells with bland, ovoid to spindle-shaped nuclei and fine fibrillary processes.",
      "Neither Rosenthal fibres nor eosinophilic granular bodies are typically found.",
      "Subpial aggregation of tumor cells, a typical secondary structure of diffuse gliomas, may be present.",
      "Tumor cells are typically immunopositive for OLIG2 and GFAP, which highlights the fine cell processes.",
      "Immunoreactivity for BRAF p.V600E illustrates the BRAF mutation.",
      "The differential diagnosis of diffuse low-grade glioma with a BRAF p.V600E mutation includes pilocytic astrocytoma, ganglioglioma, and pleomorphic xanthoastrocytoma.",
      "In addition, it is important to exclude IDH-mutant and H3 K27–altered diffuse midline gliomas, which can have histopathological features identical to those of a BRAF p.V600E–mutant diffuse low-grade glioma.",
    ],
    ihc: [
      "Use a focused immunohistochemical panel guided by morphology and the differential diagnosis; no single marker should replace integrated classification.",
    ],
    source_diff: [],
    molecular: [
      "The diagnosis requires evidence of a MAPK pathway alteration in the absence of an IDH or H3 p.K28M (K27M) mutation and without homozygous deletion of CDKN2A.",
      "The most commonly observed genetic alterations in these tumors occur in BRAF (generally a p.V600E mutation) and in FGFR1 (TKD duplication, one or sometimes two single-nucleotide variants, or a fusion gene) .",
      "Further rare alterations are seen in a variety of other MAPK genes, including FGFR2, NTRK1, NTRK2, NTRK3, MAP2K1, and MET .",
      "Although there is emerging evidence that they may also result in MAPK pathway activation , diffuse astrocytomas with MYB or MYBL1 alterations are listed separately under the family of pediatric-type diffuse low-grade gliomas.",
      "DNA methylation profiling has not demonstrated a single cluster for MAPK pathway–altered diffuse low-grade gliomas.",
      "Instead, some data suggest that they cluster with other tumor types that have shared genetic alterations .",
      "Therefore, care is required to exclude other tumor types with distinct morphological features, and DNA methylation analysis can be helpful when histopathological examination is difficult or inconclusive .",
    ],
    differential: [
      {
        name: "Diffuse astrocytoma, MYB- or MYBL1-altered",
        points: [
          "Consider Diffuse astrocytoma, MYB- or MYBL1-altered when its defining profile is present: Diffuse astrocytoma, MYB- or MYBL1-altered, is a diffusely infiltrative astroglial neoplasm composed of monomorphic cells with genetic alterations in MYB or MYBL1 (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Angiocentric glioma",
        points: [
          "Consider Angiocentric glioma when its defining profile is present: Angiocentric glioma is a diffuse glioma composed mainly of thin, cytologically bland, bipolar cells aggregating at least partly in perivascular spaces.",
          "Almost all angiocentric gliomas have a MYB::QKI gene fusio The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Polymorphous low-grade neuroepithelial tumor of the young",
        points: [
          "Consider Polymorphous low-grade neuroepithelial tumor of the young when its defining profile is present: Polymorphous low-grade neuroepithelial tumor of the young (PLNTY) is an indolent cerebral neoplasm characterized by a strong association with seizures in young individuals, diffuse growth patterns, frequent pre The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Diffuse midline glioma, H3 K27-altered",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    clue: "Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberran",
    summary:
      "Pediatric diffuse midline gliomas (DMGs) are preferentially located in the brainstem or pons (the latter making it a diffuse intrinsic pontine glioma [DIPG]), or they are bithalamic, whereas DMGs in adolescents and adults predominantly arise unilaterally in the thalamus, or in the spinal cord . Localization in other m",
    clinical: [
      "The incidence of DIPG is estimated to be 0.54 cases per 1 million person-years overall, and 2.32 cases per 1 million person-years in people aged ≤ 20 years, with no sex predilection .",
      "Spinal DMGs represent about 40% of spinal astrocytomas in pediatric and adult series .",
      "Pediatric diffuse midline gliomas (DMGs) are preferentially located in the brainstem or pons (the latter making it a diffuse intrinsic pontine glioma [DIPG]), or they are bithalamic, whereas DMGs in adolescents and adults predominantly arise unilaterally in the thalamus, or in the spinal cord .",
      "Localization in other midline sites, such as the pineal region, hypothalamus, and cerebellum, is exceptional .",
      "Large autopsy-based studies of DIPG have described leptomeningeal involvement in 40% of cases, as well as diffuse spread to involve the thalamus, cervical cord, and even the frontal lobe .",
    ],
    criteria: [
      "Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberrant overexpression of EZHIP, or an EGFR mutation (CNS WHO grade 4).",
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism.",
      "Most cells are small and monomorphic, but they can be polymorphous, showing astrocytic, piloid, oligodendroglial, giant cell, undifferentiated, or epithelioid cytology .",
      "Even though mitotic figures are frequent and microvascular proliferation and/or necrosis may be observed, these features are not required for diagnosis and they are not independent predictors of survival .",
      "Rosenthal fibres and eosinophilic granular bodies are not typically encountered.",
      "In EGFR-mutant DMGs, mitotic activity is often present, but necrosis or microvascular proliferation is rare.",
      "DMGs are considered CNS WHO grade 4, irrespective of the presence of microvascular proliferation or necrosis.",
      "Distinct patterns of biological features (methylation profiling, gene expression, co-segregating mutations) and clinical correlations (age, location, outcome) suggest the presence of four subtypes of DMGs that are defined by the driving oncohistone alteration : (1) H3.3 p.K28M (K27M)-mutant, (2) H3.1 or 3.2 p.K28M (K27M)-mutant, (3) H3-wildtype with EZHIP overexpression, and (4) EGFR-mutant (see Pathogenesis).",
      "No significant histological differences have been noted between these subtypes.",
    ],
    histology: [
      "DMGs diffusely infiltrate the CNS parenchyma, usually without particular perivascular or perineuronal tropism.",
      "Most cells are small and monomorphic, but they can be polymorphous, showing astrocytic, piloid, oligodendroglial, giant cell, undifferentiated, or epithelioid cytology .",
      "Even though mitotic figures are frequent and microvascular proliferation and/or necrosis may be observed, these features are not required for diagnosis and they are not independent predictors of survival .",
      "Rosenthal fibres and eosinophilic granular bodies are not typically encountered.",
      "In EGFR-mutant DMGs, mitotic activity is often present, but necrosis or microvascular proliferation is rare.",
      "DMGs are considered CNS WHO grade 4, irrespective of the presence of microvascular proliferation or necrosis.",
    ],
    ihc: [
      "DMGs typically express OLIG2, MAP2, and S100, whereas immunoreactivity for GFAP is variable apart from in the EGFR-mutant subtype, which is typically GFAP-positive but may lack OLIG2 and SOX10.",
      "Neurofilament and synaptophysin stains highlight the infiltrated neuropil in the background, but they are negative in the tumor cells.",
      "The combination of H3 p.K28M (K27M) and H3 p.K28me3 (K27me3) antibodies is highly effective as a diagnostic aid.",
      "Positive H3 p.K28M (K27M) nuclear staining (for the H3 K27–altered subtypes) in combination with the loss of nuclear H3 p.K28me3 (K27me3) immunoreactivity enables the detection of single tumor cells in infiltrating zones .",
      "Although no H3 p.K28M (K27M) staining is observed in DMGs with H3 p.K28I (K27I) mutation or EZHIP overexpression, these cases can be recognized by the loss of nuclear H3 p.K28me3 (K27me3) immunostaining and should be further evaluated by molecular analyses .",
      "In addition, EZHIP (CXorf67) antibodies are available that highlight EZHIP overexpression , which is usually absent in H3 p.K28M (K27M)-altered DMGs.",
      "About 50% of cases show nuclear accumulation of p53, suggesting an underlying TP53 mutation, and 15% of cases show a loss of nuclear ATRX expression .",
    ],
    source_diff: [
      "Brainstem tumors constitute a heterogeneous group ranging from low-grade primary CNS tumors (e.g. pilocytic astrocytoma, ganglioglioma, and MYB- or MYBL1-altered diffuse astrocytoma) to high-grade tumors comprising H3 K27–altered DMG as well as H3-wildtype tumors (e.g. the diffuse pediatric-type high-grade glioma MYCN subtype, atypical teratoid/rhabdoid tumor, and embryonal tumor with multilayered rosettes) . This reinforces the role of biopsy in the accurate diagnosis of brainstem tumors. Various midline circumscribed glial or glioneuronal tumors, including pilocytic astrocytomas , subependymomas , and gangliogliomas , have been described as having the same H3 p.K28 (K27) mutations; although the H3 p.K28M (K27M) mutation probably imparts a poorer prognosis in these entities, they should not be given a diagnosis of H3 K27–altered DMG. In posterior fossa group A (PFA) ependymomas, H3 p.K28 (K27) mutations are extremely rare , but loss of H3 p.K28me3 (K27me3) or EZHIP overexpression occurs ; these tumors can be distinguished from DMGs on a morphological basis.",
      "Exceedingly rare, non-midline, cortical or hemispheric diffuse gliomas with H3 p.K28M (K27M) mutation have been described . To date, the biology and prognosis for such tumors remain unknown, and the current recommendation is to report them as “diffuse hemispheric glioma with H3 p.K28M (K27M) mutation not elsewhere classified (NEC)”.",
      "EGFR-mutant DMG must be distinguished from pilocytic astrocytoma of the tectum (tectal glioma), which is an exophytic tumor emanating from the tectum of the midbrain into the posterior third ventricle. Tectal gliomas may occasionally show T2-FLAIR hyperintensity extending into the bilateral thalami, mimicking bithalamic glioma. Tectal gliomas can be distinguished from EGFR-mutant DMG on the basis of histological features and molecular signatures, with tectal gliomas typically displaying intact H3 p.K28me3 (K27me3) staining, wildtype EGFR alleles, and frequent KRAS p.G12R mutations, often with accompanying BRAF mutation or fusion .",
    ],
    molecular: [
      "Distinct patterns of biological features (methylation profiling, gene expression, co-segregating mutations) and clinical correlations (age, location, outcome) suggest the presence of four subtypes of DMGs that are defined by the driving oncohistone alteration : (1) H3.3 p.K28M (K27M)-mutant, (2) H3.1 or 3.2 p.K28M (K27M)-mutant, (3) H3-wildtype with EZHIP overexpression, and (4) EGFR-mutant (see Pathogenesis).",
      "No significant histological differences have been noted between these subtypes.",
      "For the H3 K27–mutant subtypes, a somatic heterozygous mutation in one of the genes encoding histone H3 variants leads to the amino acid substitution of lysine (K) to methionine (M) or, rarely, isoleucine (I) at position 27 (as measured from the start of the processed H3, i.e. after the cleavage of the initiating methionine) .",
      "However, genomic sequencing reports may list these mutations as H3 p.K28M (K27M) or H3 p.K28I (K27I).",
      "It is exceptional for H3 p.K28M (K27M) or H3 p.K28I (K27I) mutations to co-occur with mutations in IDH1 or IDH2 or with H3.3 p.G35R (G34R) or H3.3 p.G35V (G34V) mutations.",
      "Similarly, CDKN2A and/or CDKN2B deletions, TERT promoter mutations, and MGMT promoter methylation represent rare events in DMGs .",
      "EGFR-mutant DMG is genetically defined by abnormalities in the EGFR oncogene on chromosome band 7p11.2.",
      "Most tumors harbour small in-frame insertions/duplications within exon 20, which encodes the intracellular tyrosine kinase domain (TKD), whereas others harbour missense mutations in exons encoding parts of the extracellular domain, most commonly p.A289T or p.A289V.",
      "Rare instances of EGFR gene amplification occurring in the absence of an identifiable mutation have also been reported .",
      "H3-wildtype DMGs with EZHIP overexpression represent the rarest subtype .",
      "In addition to immunohistochemical analyses, EZHIP overexpression can be measured by molecular analyses, such as RNA expression microarrays.",
    ],
    differential: [
      {
        name: "Diffuse hemispheric glioma, H3 G34-mutant",
        points: [
          "Consider Diffuse hemispheric glioma, H3 G34-mutant when its defining profile is present: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histon The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
        points: [
          "Consider Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype when its defining profile is present: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Infant-type hemispheric glioma",
        points: [
          "Consider Infant-type hemispheric glioma when its defining profile is present: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Brainstem tumors constitute a heterogeneous group ranging from low-grade primary CNS tumors (e.g. pi",
        points: [
          "Brainstem tumors constitute a heterogeneous group ranging from low-grade primary CNS tumors (e.g. pilocytic astrocytoma, ganglioglioma, and MYB- or MYBL1-altered diffuse astrocytoma) to high-grade tumors comprising H3 K27–altered DMG as well as H3-wildtype tumors (e.g. the diffuse pediatric-type high-grade glioma MYCN subtype, atypical teratoid/rhabdoid tumor, and embryonal tumor with multilayered rosettes) .",
          "This reinforces the role of biopsy in the accurate diagnosis of brainstem tumors.",
          "Various midline circumscribed glial or glioneuronal tumors, including pilocytic astrocytomas , subependymomas , and gangliogliomas , have been described as",
        ],
      },
      {
        name: "Exceedingly rare, non-midline, cortical or hemispheric diffuse gliomas with H3 p.K28M (K27M) mutatio",
        points: [
          "Exceedingly rare, non-midline, cortical or hemispheric diffuse gliomas with H3 p.K28M (K27M) mutation have been described .",
          "To date, the biology and prognosis for such tumors remain unknown, and the current recommendation is to report them as “diffuse hemispheric glioma with H3 p.K28M (K27M) mutation not elsewhere classified (NEC)”.",
        ],
      },
      {
        name: "EGFR-mutant DMG must be distinguished from pilocytic astrocytoma of the tectum (tectal glioma), whic",
        points: [
          "EGFR-mutant DMG must be distinguished from pilocytic astrocytoma of the tectum (tectal glioma), which is an exophytic tumor emanating from the tectum of the midbrain into the posterior third ventricle.",
          "Tectal gliomas may occasionally show T2-FLAIR hyperintensity extending into the bilateral thalami, mimicking bithalamic glioma.",
          "Tectal gliomas can be distinguished from EGFR-mutant DMG on the basis of histological features and molecular signatures, with tectal gliomas typically displaying intact H3 p.K28me3 (K27me3) staining, wildtype EGFR alleles, and frequent KRAS p.G12R mutations, often with accompanying BRAF mutation or fusion .",
        ],
      },
    ],
  },
  {
    name: "Diffuse hemispheric glioma, H3 G34-mutant",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    clue: "Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histon",
    summary:
      "Diffuse hemispheric glioma, H3 G34–mutant, arises in the cerebral hemispheres. Occasional spread to midline structures and leptomeningeal dissemination have been observed .",
    clinical: [
      "H3 G34–mutant diffuse hemispheric gliomas typically affect adolescents and young adults (median age:15–19 years).",
      "There is a male predominance, with an M:F ratio of 1.4:1 .",
      "Occasional spread to midline structures and leptomeningeal dissemination have been observed .",
      "Imaging MRI characteristics of H3 G34–mutant diffuse hemispheric glioma are similar to those of other high-grade non-midline gliomas.",
      "MRI typically reveals a contrast-enhancing tumor with mass effect in cortical areas, often involving the parietal or temporal lobe, with occasional multifocal manifestation, including leptomeningeal dissemination.",
    ],
    criteria: [
      "Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histone H3 protein: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V) (CNS WHO grade 4).",
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity.",
      "Additionally, microvascular proliferation and/or necrosis are usually seen, although the presence of these features is not required for the diagnosis.",
      "In some cases, multinucleated and pleomorphic cells can be observed.",
      "An alternative pattern resembles the morphology of CNS embryonal tumors, where tumor cells are rather small and monomorphic, with hyperchromatic nuclei and scant cytoplasm.",
      "Here, Homer Wright rosettes are occasionally present, whereas microvascular proliferation and necrosis are less prominent .",
      "Ganglion cell differentiation has also been reported in rare cases .",
      "The molecularly defining diagnostic criterion is a missense mutation replacing glycine (G) with arginine (R) (in > 94% of cases) or valine (V) (< 6%) at p.G35 (G34) of the histone variant H3.3, encoded by the H3-3A (H3F3A) gene: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V) .",
      "So far, the p.G35R (G34R) or p.G35V (G34V) substitution in diffuse hemispheric gliomas has been exclusively identified in H3-3A and not in other histone genes .",
      "About 90% of tumors bear TP53 mutations and approximately 95% have alterations in the ATRX gene .",
      "The H3.3 p.G35 (G34) mutations in diffuse hemispheric gliomas are mutually exclusive with IDH1 or IDH2 and H3 p.K28M (K27M) or p.K28I (K27I) mutations .",
      "DNA methylation patterns and gene expression signatures can be used to differentiate H3 G34–mutant diffuse hemispheric gliomas from other entities.",
      "Although H3 G34–mutant diffuse hemispheric gliomas show widespread DNA hypomethylation, MGMT is often methylated .",
      "So far, no differences between p.G35R (G34R) and p.G35V (G34V) mutations have been reported.",
    ],
    histology: [
      "H3 G34–mutant diffuse hemispheric glioma typically has a glioblastoma-like pattern, characterized by a highly cellular, infiltrative astrocytic tumor with brisk mitotic activity.",
      "Additionally, microvascular proliferation and/or necrosis are usually seen, although the presence of these features is not required for the diagnosis.",
      "In some cases, multinucleated and pleomorphic cells can be observed.",
      "An alternative pattern resembles the morphology of CNS embryonal tumors, where tumor cells are rather small and monomorphic, with hyperchromatic nuclei and scant cytoplasm.",
      "Here, Homer Wright rosettes are occasionally present, whereas microvascular proliferation and necrosis are less prominent .",
      "Ganglion cell differentiation has also been reported in rare cases .",
    ],
    ihc: [
      "The typical immunohistochemical pattern of H3 G34–mutant diffuse hemispheric glioma comprises MAP2 positivity, FOXG1 positivity, loss of ATRX expression, and nuclear accumulation of p53 in the majority of tumor cells.",
      "A further notable feature is OLIG2 negativity.",
      "GFAP expression is variable and can be negative, especially in cases with more primitive embryonal-like morphology .",
      "The Ki-67 proliferation index is usually high.",
      "Mutation-specific antibodies against H3.3 p.G35R (G34R)- and p.G35V (G34V)-mutant proteins are available .",
      "However, false negative immunoreactivity in H3 G34–mutant cases has been described [[Gianno F, Antonelli M, Ferretti E, et al.",
      "Pediatric high-grade glioma: a heterogeneous group of neoplasms with different molecular drivers.",
      "Glioma.",
      "2018;1:117–24. doi:10.4103/glioma.glioma_27_18.]].",
    ],
    source_diff: [],
    molecular: [
      "The molecularly defining diagnostic criterion is a missense mutation replacing glycine (G) with arginine (R) (in > 94% of cases) or valine (V) (< 6%) at p.G35 (G34) of the histone variant H3.3, encoded by the H3-3A (H3F3A) gene: c.103G>A p.G35R (G34R), c.103G>C p.G35R (G34R), or c.104G>T p.G35V (G34V) .",
      "So far, the p.G35R (G34R) or p.G35V (G34V) substitution in diffuse hemispheric gliomas has been exclusively identified in H3-3A and not in other histone genes .",
      "About 90% of tumors bear TP53 mutations and approximately 95% have alterations in the ATRX gene .",
      "The H3.3 p.G35 (G34) mutations in diffuse hemispheric gliomas are mutually exclusive with IDH1 or IDH2 and H3 p.K28M (K27M) or p.K28I (K27I) mutations .",
      "DNA methylation patterns and gene expression signatures can be used to differentiate H3 G34–mutant diffuse hemispheric gliomas from other entities.",
      "Although H3 G34–mutant diffuse hemispheric gliomas show widespread DNA hypomethylation, MGMT is often methylated .",
      "So far, no differences between p.G35R (G34R) and p.G35V (G34V) mutations have been reported.",
      "In addition to cerebral imaging, radiological investigation of the spine should be performed.",
    ],
    differential: [
      {
        name: "Diffuse midline glioma, H3 K27-altered",
        points: [
          "Consider Diffuse midline glioma, H3 K27-altered when its defining profile is present: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberran The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
        points: [
          "Consider Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype when its defining profile is present: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Infant-type hemispheric glioma",
        points: [
          "Consider Infant-type hemispheric glioma when its defining profile is present: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    clue: "Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which ",
    summary:
      "pHGGs, H3-wildtype and IDH-wildtype, have been reported to arise throughout the supratentorial brain, brainstem, and cerebellum . The molecular subtypes have slightly different site predilections: pHGG RTK2 tumors mostly involve supratentorial structures (in 96% of cases), pHGG RTK1 tumors involve the supratentorial br",
    clinical: [
      "In a clinical trial of non-brainstem pediatric high-grade gliomas in children aged 3–18 years, 32 (~40%) of 74 tumors with DNA methylation data corresponded to pHGG, H3-wildtype and IDH-wildtype .",
      "The median age of patients with pHGG, H3-wildtype and IDH-wildtype, is currently unclear because published series have focused on pediatric cases and the occurrence in the adult population may therefore be underestimated.",
      "pHGGs, H3-wildtype and IDH-wildtype, have been reported to arise throughout the supratentorial brain, brainstem, and cerebellum .",
      "The molecular subtypes have slightly different site predilections: pHGG RTK2 tumors mostly involve supratentorial structures (in 96% of cases), pHGG RTK1 tumors involve the supratentorial brain (in 82% of cases) and infratentorial/brainstem sites (in 18% of cases), and pHGG MYCN tumors involve the supratentorial brain (in 86% of cases) and infratentorial/brainstem structures (in 14% of cases) .",
    ],
    criteria: [
      "Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which is wildtype for histone H3, IDH1, and IDH2 (CNS WHO grade 4).",
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology.",
      "Areas of glial differentiation and primitive differentiation can often be found in the same specimen.",
      "In some cases, vascular proliferation and necrosis may be absent.",
      "For the pHGG MYCN subtype, a biphasic pattern with areas of diffuse infiltration and highly cellular circumscribed nodules has been described .",
      "Tumors are often composed of large cells with distinct nucleoli and may show a mix of spindle-shaped and epithelioid cells .",
      "Initial testing should exclude alterations in histone H3 and in IDH1 or IDH2.",
      "Alterations frequently encountered in these tumors include PDGFRA amplification or mutation, TP53 mutation, NF1 alterations, EGFR amplification or mutation, or MYCN amplification.",
      "DNA methylation profiling is used for the identification of pHGG, H3-wildtype and IDH-wildtype, and it may be useful in guiding additional molecular testing .",
      "Three molecular subgroups may be recognized by their distinct DNA methylation profiles or enrichment for molecular alterations: pHGG RTK1, pHGG RTK2, and pHGG MYCN. pHGG RTK1 is enriched for PDGFRA amplifications (~33% of cases), pHGG RTK2 is enriched for EGFR amplifications (~50% of cases) and TERT promoter mutations (~64% of cases) , and pHGG MYCN is enriched for MYCN amplifications (~50% of cases) .",
      "Tumors associated with CMMRD or Lynch syndrome are typically of the pHGG RTK1 subtype.",
    ],
    histology: [
      "Histopathology typically shows features of either a glioblastoma-like malignant tumor (with mitotic activity, vascular proliferation, and necrosis) or a primitive, undifferentiated morphology.",
      "Areas of glial differentiation and primitive differentiation can often be found in the same specimen.",
      "In some cases, vascular proliferation and necrosis may be absent.",
      "For the pHGG MYCN subtype, a biphasic pattern with areas of diffuse infiltration and highly cellular circumscribed nodules has been described .",
      "Tumors are often composed of large cells with distinct nucleoli and may show a mix of spindle-shaped and epithelioid cells .",
    ],
    ihc: [
      "Data on the immunophenotype of pHGG, H3-wildtype and IDH-wildtype, have not been specifically reported.",
      "Most reported cases were identified molecularly among series of pediatric glioblastomas or high-grade gliomas, and an immunophenotype compatible with such a diagnosis can therefore be expected, including at least focal positivity for GFAP and/or OLIG2 .",
      "However, tumors of the pHGG MYCN molecular subtype may be largely negative for glial markers and instead express neuronal markers.",
      "All cases should have preserved expression of H3 p.K28me3 (K27me3) .",
    ],
    source_diff: [
      "Depending on the age of the patient and the location of the tumor, a large number of differential diagnoses should be considered. In particular, for infants, infant-type hemispheric glioma and desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma should be excluded; these typically harbour alterations of BRAF or fusions involving NTRK genes, ROS1, ALK, or MET. H3 p.K28me3 (K27me3) is retained in pHGGs, H3-wildtype and IDH-wildtype, distinguishing them from diffuse midline gliomas. Tumors with glioblastoma morphology but the DNA methylation profile of pleomorphic xanthoastrocytoma or a combination of BRAF mutation and CDKN2A and/or CDKN2B deletion are more likely to be adult-type epithelioid glioblastomas . The chromosomal pattern of +7/−10 and/or EGFRvIII mutations typical of adult-type glioblastoma are typically absent in pHGG, H3-wildtype and IDH-wildtype . Other differentials to consider include CNS embryonal tumors and, for posterior fossa tumors, medulloblastomas. Medulloblastomas are typically negative for OLIG2, whereas most pHGGs, H3-wildtype and IDH-wildtype, express this marker. CNS embryonal tumors should be considered less likely in older children and adults than in young children, and molecular alterations compatible with this diagnosis should be clearly demonstrated in these cases. In the postirradiation setting, the possibility of a pHGG versus relapse of an embryonal tumor should be considered .",
    ],
    molecular: [
      "Initial testing should exclude alterations in histone H3 and in IDH1 or IDH2.",
      "Alterations frequently encountered in these tumors include PDGFRA amplification or mutation, TP53 mutation, NF1 alterations, EGFR amplification or mutation, or MYCN amplification.",
      "DNA methylation profiling is used for the identification of pHGG, H3-wildtype and IDH-wildtype, and it may be useful in guiding additional molecular testing .",
      "Three molecular subgroups may be recognized by their distinct DNA methylation profiles or enrichment for molecular alterations: pHGG RTK1, pHGG RTK2, and pHGG MYCN. pHGG RTK1 is enriched for PDGFRA amplifications (~33% of cases), pHGG RTK2 is enriched for EGFR amplifications (~50% of cases) and TERT promoter mutations (~64% of cases) , and pHGG MYCN is enriched for MYCN amplifications (~50% of cases) .",
      "Tumors associated with CMMRD or Lynch syndrome are typically of the pHGG RTK1 subtype.",
    ],
    differential: [
      {
        name: "Diffuse midline glioma, H3 K27-altered",
        points: [
          "Consider Diffuse midline glioma, H3 K27-altered when its defining profile is present: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberran The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse hemispheric glioma, H3 G34-mutant",
        points: [
          "Consider Diffuse hemispheric glioma, H3 G34-mutant when its defining profile is present: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histon The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Infant-type hemispheric glioma",
        points: [
          "Consider Infant-type hemispheric glioma when its defining profile is present: Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Depending on the age of the patient and the location of the tumor, a large number of differential di",
        points: [
          "Depending on the age of the patient and the location of the tumor, a large number of differential diagnoses should be considered.",
          "In particular, for infants, infant-type hemispheric glioma and desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma should be excluded; these typically harbour alterations of BRAF or fusions involving NTRK genes, ROS1, ALK, or MET.",
          "H3 p.K28me3 (K27me3) is retained in pHGGs, H3-wildtype and IDH-wildtype, distinguishing them from diffuse midline gliomas.",
          "Tumors with glioblastoma morphology but the DNA methylation profile of pleomorphic xanthoastrocytoma or a combination of BRAF mutation and CDKN",
        ],
      },
    ],
  },
  {
    name: "Infant-type hemispheric glioma",
    group: "Pediatric-Type Diffuse High-Grade Gliomas",
    clue: "Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family",
    summary:
      "These gliomas appear in the supratentorial compartment, usually as large masses . There is frequently superficial involvement that includes the leptomeninges .",
    clinical: [
      "During infancy, children with infant-type hemispheric glioma may present with nonspecific signs and symptoms ranging from agitation to lethargy.",
      "All reported cases have occurred early in childhood, mostly in the first year of life.",
      "In one cohort, the median age at presentation was 2.8 months (range: 0–12 months) .",
      "These gliomas appear in the supratentorial compartment, usually as large masses .",
    ],
    criteria: [
      "Infant-type hemispheric glioma is a cerebral hemispheric, high-grade cellular astrocytoma that arises in early childhood, typically with receptor tyrosine kinase (RTK) fusions including those in the NTRK family or in ROS1, ALK, or MET.",
      "The histological descriptions derive from two large studies and a few case reports .",
      "The original diagnoses were often glioblastomas or other high-grade gliomas (84%) but also included anaplastic gangliogliomas, desmoplastic infantile ganglioglioma/astrocytoma, ependymomas, and CNS primitive neuroectodermal tumors .",
      "The tumors are frequently cellular, are well demarcated from the adjacent brain parenchyma, and involve the leptomeninges .",
      "Astrocytic, often spindle-shaped, cells with mild to moderate pleomorphism are arranged in fascicles or uniform sheets.",
      "There is frequently palisading necrosis, mitotic activity, and microvascular proliferation.",
      "More rarely, a gemistocytic morphology is seen.",
      "Some tumors (including some with ALK fusions) may be more heterogeneous, with ependymal differentiation or a biphasic appearance with low-grade and high-grade components or occasional ganglion cells .",
      "This tumor type is not currently graded.",
      "RTK fusions can be therapeutically targeted and are present in 60–80% of cases.",
      "Therefore, where possible, in infants, routine testing for such fusions should be considered , both to establish the diagnosis and to provide options for therapy.",
    ],
    histology: [
      "The histological descriptions derive from two large studies and a few case reports .",
      "The original diagnoses were often glioblastomas or other high-grade gliomas (84%) but also included anaplastic gangliogliomas, desmoplastic infantile ganglioglioma/astrocytoma, ependymomas, and CNS primitive neuroectodermal tumors .",
      "The tumors are frequently cellular, are well demarcated from the adjacent brain parenchyma, and involve the leptomeninges .",
      "Astrocytic, often spindle-shaped, cells with mild to moderate pleomorphism are arranged in fascicles or uniform sheets.",
      "There is frequently palisading necrosis, mitotic activity, and microvascular proliferation.",
      "More rarely, a gemistocytic morphology is seen.",
      "Some tumors (including some with ALK fusions) may be more heterogeneous, with ependymal differentiation or a biphasic appearance with low-grade and high-grade components or occasional ganglion cells .",
      "This tumor type is not currently graded.",
    ],
    ihc: [
      "The glial component shows immunoreactivity for GFAP but does not usually express neuronal markers .",
      "ALK immunostaining can be found in at least some tumors with ALK fusions .",
      "NTRK immunostaining is not helpful because of the high level of NTRK expression in normal brain.",
    ],
    source_diff: [
      "The differential diagnosis includes other high-grade gliomas, desmoplastic infantile ganglioglioma/astrocytoma, ganglioglioma, and ependymomas in infants.",
    ],
    molecular: [
      "RTK fusions can be therapeutically targeted and are present in 60–80% of cases.",
      "Therefore, where possible, in infants, routine testing for such fusions should be considered , both to establish the diagnosis and to provide options for therapy.",
      "These tumors form a distinct subgroup by methylation array profiling regardless of formal tumor grading or RTK fusion type .",
      "This can also be used to establish the diagnosis but it may not be sufficient to enable targeted therapy.",
      "Occasional cases show leptomeningeal dissemination , so craniospinal imaging is prudent.",
      "However, a formal staging system is not available.",
    ],
    differential: [
      {
        name: "Diffuse midline glioma, H3 K27-altered",
        points: [
          "Consider Diffuse midline glioma, H3 K27-altered when its defining profile is present: Diffuse midline glioma, H3 K27–altered, is an infiltrative midline glioma with loss of H3 p.K28me3 (K27me3) and usually either an H3 c.83A>T p.K28M (K27M) substitution in one of the histone H3 isoforms, aberran The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse hemispheric glioma, H3 G34-mutant",
        points: [
          "Consider Diffuse hemispheric glioma, H3 G34-mutant when its defining profile is present: Diffuse hemispheric glioma, H3 G34–mutant, is an infiltrative glioma involving the cerebral hemispheres, with missense mutation of the H3-3A gene that results in one of the following substitutions of the histon The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
        points: [
          "Consider Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype when its defining profile is present: Diffuse pediatric-type high-grade glioma (pHGG), H3-wildtype and IDH-wildtype, is a diffuse glioma with histological features of malignancy, typically occurring in children, adolescents, or young adults, which The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The differential diagnosis includes other high-grade gliomas, desmoplastic infantile ganglioglioma/a",
        points: [
          "The differential diagnosis includes other high-grade gliomas, desmoplastic infantile ganglioglioma/astrocytoma, ganglioglioma, and ependymomas in infants.",
        ],
      },
    ],
  },
  {
    name: "Pilocytic astrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies. Pilocyt",
    summary:
      "Pilocytic astrocytomas can arise throughout the neuraxis, but they are most common in the cerebellum, especially in children . Other preferred sites are the optic nerve, midline locations (brainstem, optic chiasm / hypothalamus, basal ganglia), and spinal cord. Tumors in the cerebral hemispheres are rare in children, ",
    clinical: [
      "Pilocytic astrocytomas can arise throughout the neuraxis, but they are most common in the cerebellum, especially in children .",
      "Tumors in the cerebral hemispheres are rare in children, but in adults they occur here with equal frequency as in the cerebellum .",
      "Primary dissemination at diagnosis may also be more common in this age group .",
      "It is most common during the first two decades of life, with an average annual age-adjusted incidence rate of 0.91 cases per 100 000 population .",
      "Pilocytic astrocytoma accounts for 17.6% of all childhood primary brain tumors and is the most common glioma in children.",
    ],
    criteria: [
      "Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
      "Pilocytic astrocytoma is associated with MAPK pathway gene alterations (most often KIAA1549::BRAF gene fusions) (CNS WHO grade 1).",
      "Pilocytic astrocytomas have low to moderate cellularity.",
      "Neoplastic cells range widely in their morphology and include varying proportions of piloid and oligodendrocyte-like cells.",
      "Nuclei are round to elongate.",
      "Multinucleated cells with horseshoe-shaped nuclear clusters (pennies-on-a-plate pattern) are often seen.",
      "In some cases, hyperchromasia and pleomorphism are obvious but mitotic figures are rare .",
      "Rare cases have brisk mitotic activity, which may imply aggressive behavior .",
      "Rosenthal fibres and eosinophilic granular bodies are common, but they vary in prominence.",
      "Myxoid background with microcystic change is common, as are degenerative changes, including calcifications, hyalinized vessels, and hemorrhages .",
      "Various histological patterns can be seen in pilocytic astrocytomas: (1) a biphasic pattern, in which compact areas rich in bipolar cells and Rosenthal fibres alternate with loose and microcystic regions rich in oligodendrocyte-like cells; (2) a predominantly compact, piloid pattern, with abundant Rosenthal fibres; and (3) a more dispersed pattern, rich in oligodendrocyte-like cells, mimicking oligodendroglioma.",
      "The biphasic pattern is common in cerebellar tumors.",
      "The compact pattern is often seen in adults, and the oligodendrocyte-like pattern may be associated with FGFR1 alterations .",
      "Occasionally, typical pilocytic astrocytomas have foci that resemble pilomyxoid astrocytoma; these are called intermediate tumors.",
      "Rare examples also demonstrate the regimented palisaded (spongioblastoma) pattern.",
      "Pilocytic astrocytomas show highly vascular areas with thin glomerular capillaries often arranged in a linear fashion and associated with cystic structures, or they have thick-walled, hyalinized vessels and regressive changes.",
      "Glomeruloid microvascular proliferations line the cyst wall and should not prompt a higher grade designation.",
      "Infarct-like necrosis can occur, but palisading necrosis is exceptional.",
      "Leptomeningeal involvement can occur in any location, sometimes with extensive desmoplastic reaction.",
      "Some tumors may mimic diffuse astrocytomas on histopathology because of a surprising degree of infiltration, despite often appearing solid radiologically.",
      "Entrapped neurons can also be mistaken for a neuronal component (e.g. ganglioglioma).",
      "The most frequent genetic alteration in pilocytic astrocytoma is a chromosome 7q34 rearrangement resulting in a KIAA1549::BRAF tandem duplication and fusion .",
      "In small numbers of cases, alternate BRAF fusions have also been identified, occurring by various genetic rearrangements (including deletions and translocations) but all resulting in loss of the N-terminal regulatory region of the BRAF protein, with retention of the kinase domain .",
      "Other MAPK pathway gene alterations also occur (see Table 2.03) .",
    ],
    histology: [
      "Pilocytic astrocytomas have low to moderate cellularity.",
      "Neoplastic cells range widely in their morphology and include varying proportions of piloid and oligodendrocyte-like cells.",
      "Nuclei are round to elongate.",
      "Multinucleated cells with horseshoe-shaped nuclear clusters (pennies-on-a-plate pattern) are often seen.",
      "In some cases, hyperchromasia and pleomorphism are obvious but mitotic figures are rare .",
      "Rare cases have brisk mitotic activity, which may imply aggressive behavior .",
      "Rosenthal fibres and eosinophilic granular bodies are common, but they vary in prominence.",
      "Myxoid background with microcystic change is common, as are degenerative changes, including calcifications, hyalinized vessels, and hemorrhages .",
      "Various histological patterns can be seen in pilocytic astrocytomas: (1) a biphasic pattern, in which compact areas rich in bipolar cells and Rosenthal fibres alternate with loose and microcystic regions rich in oligodendrocyte-like cells; (2) a predominantly compact, piloid pattern, with abundant Rosenthal fibres; and (3) a more dispersed pattern, rich in oligodendrocyte-like cells, mimicking oligodendroglioma.",
      "The biphasic pattern is common in cerebellar tumors.",
      "The compact pattern is often seen in adults, and the oligodendrocyte-like pattern may be associated with FGFR1 alterations .",
      "Occasionally, typical pilocytic astrocytomas have foci that resemble pilomyxoid astrocytoma; these are called intermediate tumors.",
      "Rare examples also demonstrate the regimented palisaded (spongioblastoma) pattern.",
      "Pilocytic astrocytomas show highly vascular areas with thin glomerular capillaries often arranged in a linear fashion and associated with cystic structures, or they have thick-walled, hyalinized vessels and regressive changes.",
      "Glomeruloid microvascular proliferations line the cyst wall and should not prompt a higher grade designation.",
      "Infarct-like necrosis can occur, but palisading necrosis is exceptional.",
      "Leptomeningeal involvement can occur in any location, sometimes with extensive desmoplastic reaction.",
      "Some tumors may mimic diffuse astrocytomas on histopathology because of a surprising degree of infiltration, despite often appearing solid radiologically.",
      "Entrapped neurons can also be mistaken for a neuronal component (e.g. ganglioglioma).",
    ],
    ihc: [
      "Immunohistochemistry demonstrates strong diffuse positivity for GFAP, S100, and OLIG2.",
      "Many cases are positive for synaptophysin but negative for NFP, NeuN, and chromogranin.",
      "CD34 is usually negative, although expression has been reported in the hypothalamic/chiasmatic region .",
      "IDH1 p.R132H expression is absent and the H3 p.K28M (K27M) stain is negative, with rare exceptions.",
      "Most tumors show strong and diffuse SOX10 and p16 staining, with SOX10 and OLIG2 positivity helping to distinguish pilocytic astrocytoma from ependymoma .",
      "The Ki-67 index is usually low, with only focal increases.",
      "Subtypes Pilomyxoid astrocytoma Pilomyxoid astrocytoma shares many features with classic pilocytic astrocytoma but differs in some important clinicopathological respects .",
      "It is a tumor of infancy occurring in the hypothalamic/chiasmatic region, has a higher rate of recurrence and a poorer outcome than classic pilocytic astrocytoma, and shows a propensity for cerebrospinal dissemination .",
      "Pilomyxoid astrocytoma is defined as a tumor with monomorphic piloid cytology, a diffusely myxoid background, and increased cellularity compared with that of classic pilocytic astrocytoma .",
      "It also has a prominent angiocentric arrangement of tumor cells and typically lacks Rosenthal fibres and eosinophilic granular bodies.",
      "On neuroimaging, pilomyxoid astrocytomas appear similar to classic pilocytic astrocytomas, but they are more often solid and uniformly enhancing .",
      "Some pilomyxoid astrocytomas develop into a classic pilocytic astrocytoma on recurrence.",
      "Rare hybrid pilomyxoid/pilocytic astrocytomas have been reported, but their biological behavior is poorly defined .",
      "Molecular studies identify MAPK pathway gene alterations similar to those in classic pilocytic astrocytoma, but differences have been reported .",
      "Further studies are needed to elucidate the precise molecular profile of pilomyxoid astrocytomas .",
      "Pilocytic astrocytoma with histological features of anaplasia Pilocytic astrocytomas are remarkable in that they maintain their CNS WHO grade 1 status over decades.",
      "The terms “anaplastic pilocytic astrocytoma” and “pilocytic astrocytoma with histological anaplasia” have been proposed for tumors with morphological features of pilocytic astrocytoma but showing brisk mitotic activity with or without necrosis .",
      "Anaplastic changes may be present at initial diagnosis or at recurrence.",
      "In a study of 36 pilocytic astrocytomas with anaplasia defined histologically, they predominantly occurred in adults (mean age: 32 years; range: 3–75 years), mostly involved the posterior fossa, and showed heterogeneous genetic features with alterations typical of pilocytic astrocytoma and other gliomas , including BRAF duplications (30%), germline or somatic NF1 mutations (33%), loss of nuclear ATRX expression (57%), and an alternative-lengthening-of-telomeres phenotype (69%).",
      "Features associated with worse overall survival included necrosis, subtotal resection, alternative lengthening of telomeres, and ATRX loss (P < 0.05).",
      "The overlap between pilocytic astrocytoma with histological anaplasia and the rare midline pilocytic astrocytoma with double mutant FGFR1, BRAF, or NF1 and H3 p.K28M (K27M) remains to be determined, although both have been associated with aggressive behavior .",
      "In a cohort of predominantly adult patients across > 20 institutions worldwide, who were considered to have histologically defined anaplastic pilocytic astrocytoma, 81% of the tumors harboured a distinct methylome signature, referred to as “DNA methylation class anaplastic astrocytoma with piloid features” .",
      "These tumors are now considered a distinct type, designated as “high-grade astrocytoma with piloid features”.",
      "A similar DNA methylation profile was found in 36% of histologically defined cerebellar glioblastomas .",
      "Although this methylation class is enriched for neoplasms pathologically diagnosed as pilocytic astrocytoma with histological anaplasia, the two categories do not overlap completely and their relationship remains to be elucidated.",
    ],
    source_diff: [
      "A relevant differential diagnosis in the presence of microvascular proliferation and/or necrosis is a high-grade astrocytic glioma including glioblastoma. Solid growth pattern, low mitotic activity, and bipolar cells, in addition to molecular features, help resolve this differential diagnosis. Rosenthal fibre–rich piloid gliosis may also mimic pilocytic astrocytoma, but it lacks the loose component. In the midline, an H3 K27–altered diffuse midline glioma must be excluded, although rare pilocytic astrocytomas acquire an H3 p.K28M (K27M) mutation in addition to their MAPK gene alteration. Other differential diagnoses include ganglioglioma, dysembryoplastic neuroepithelial tumor, pleomorphic xanthoastrocytoma, rosette-forming glioneuronal tumor, ependymoma (especially tanycytic), and diffuse leptomeningeal glioneuronal tumor. Some tumors of this last type may be virtually indistinguishable from pilocytic astrocytoma on routine histology.",
      "A note of caution is warranted in regard to anaplastic transformation after radiation therapy, especially with a long interval and without the presence of a pilocytic component: some of these tumors may instead be a second primary, i.e. radiation-induced high-grade glioma .",
    ],
    molecular: [
      "The most frequent genetic alteration in pilocytic astrocytoma is a chromosome 7q34 rearrangement resulting in a KIAA1549::BRAF tandem duplication and fusion .",
      "In small numbers of cases, alternate BRAF fusions have also been identified, occurring by various genetic rearrangements (including deletions and translocations) but all resulting in loss of the N-terminal regulatory region of the BRAF protein, with retention of the kinase domain .",
      "Other MAPK pathway gene alterations also occur (see Table 2.03) .",
      "The presence of the KIAA1549::BRAF fusion (or other MAPK gene alterations) supports the diagnosis of pilocytic astrocytoma in an appropriate morphological context.",
      "However, the KIAA1549::BRAF fusion also occurs in diffuse leptomeningeal glioneuronal tumors .",
      "Other MAPK gene alterations similarly overlap with other tumor types.",
      "For infratentorial and spinal tumors, pilocytic astrocytoma staging involves cerebral and spinal MRI, whereas for supratentorial tumors, spinal MRI is only performed if there is evidence of intracranial dissemination.",
      "Cerebrospinal fluid cytology is only done if radiological findings indicate disseminated disease .",
    ],
    differential: [
      {
        name: "High-grade astrocytoma with piloid features",
        points: [
          "Consider High-grade astrocytoma with piloid features when its defining profile is present: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
          "Alterations of MAPK The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Pleomorphic xanthoastrocytoma",
        points: [
          "Consider Pleomorphic xanthoastrocytoma when its defining profile is present: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymal giant cell astrocytoma",
        points: [
          "Consider Subependymal giant cell astrocytoma when its defining profile is present: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Chordoid glioma",
        points: [
          "Consider Chordoid glioma when its defining profile is present: Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Astroblastoma, MN1-altered",
        points: [
          "Consider Astroblastoma, MN1-altered when its defining profile is present: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "A relevant differential diagnosis in the presence of microvascular proliferation and/or necrosis is ",
        points: [
          "A relevant differential diagnosis in the presence of microvascular proliferation and/or necrosis is a high-grade astrocytic glioma including glioblastoma.",
          "Solid growth pattern, low mitotic activity, and bipolar cells, in addition to molecular features, help resolve this differential diagnosis.",
          "Rosenthal fibre–rich piloid gliosis may also mimic pilocytic astrocytoma, but it lacks the loose component.",
          "In the midline, an H3 K27–altered diffuse midline glioma must be excluded, although rare pilocytic astrocytomas acquire an H3 p.K28M (K27M) mutation in addition to their MAPK gene alteration.",
          "Other differential diagnoses include ganglioglioma, dys",
        ],
      },
      {
        name: "A note of caution is warranted in regard to anaplastic transformation after radiation therapy, espec",
        points: [
          "A note of caution is warranted in regard to anaplastic transformation after radiation therapy, especially with a long interval and without the presence of a pilocytic component: some of these tumors may instead be a second primary, i.e. radiation-induced high-grade glioma .",
        ],
      },
    ],
  },
  {
    name: "High-grade astrocytoma with piloid features",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features. Alterations of MAPK ",
    summary:
      "HGAP may occur throughout the entire CNS. Most frequently, tumors originate in the posterior fossa, where they typically affect the cerebellum (in 74% of cases). They can also be localized in the supratentorial (17%) and spinal (7%) regions .",
    clinical: [
      "In the combined data from three studies, the median age of reported patients was 40 years (range: 4–88 years), and the M:F ratio was balanced (1:1) .",
      "Most frequently, tumors originate in the posterior fossa, where they typically affect the cerebellum (in 74% of cases).",
      "They can also be localized in the supratentorial (17%) and spinal (7%) regions .",
    ],
    criteria: [
      "High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
      "Alterations of MAPK pathway genes are often combined with homozygous deletion involving the CDKN2A and/or CDKN2B locus, and/or ATRX mutation or loss of nuclear ATRX expression.",
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing.",
      "In general, tumors appear as moderately cell-dense and moderately pleomorphic astrocytic gliomas.",
      "The growth pattern may resemble that of glioblastoma or pleomorphic xanthoastrocytoma, or the tissue may be enriched for thin, hair-like (piloid) cytoplasmic processes (hence the name “high-grade astrocytoma with piloid features”).",
      "In about a third of cases, eosinophilic granular bodies or Rosenthal fibres are observed.",
      "Almost 90% show alterations of vasculature, either in the form of hypertrophy and/or multilayering, or as glomeruloid proliferation.",
      "One third of the tumors show necrosis (with or without palisading), and about 80% have ≥ 0.42 mitoses/mm2 (equating to ≥ 1 mitosis/10 HPF of 0.55 mm in diameter and 0.24 mm2 in area).",
      "Areas of solid tumor growth are frequent, but invasive growth into the adjacent parenchyma may also be observed .",
      "Currently, DNA methylation profiling is the only method for definitively establishing a diagnosis of HGAP .",
      "The molecular class is included in widely used machine learning–based classifiers .",
      "A combination of histology with certain genetic markers may be suggestive of the diagnosis but may not clearly distinguish these tumors from other gliomas such as pleomorphic xanthoastrocytoma or glioblastoma.",
    ],
    histology: [
      "The histological features of HGAP vary considerably and are not sufficiently distinct to diagnose this glioma type without additional molecular testing.",
      "In general, tumors appear as moderately cell-dense and moderately pleomorphic astrocytic gliomas.",
      "The growth pattern may resemble that of glioblastoma or pleomorphic xanthoastrocytoma, or the tissue may be enriched for thin, hair-like (piloid) cytoplasmic processes (hence the name “high-grade astrocytoma with piloid features”).",
      "In about a third of cases, eosinophilic granular bodies or Rosenthal fibres are observed.",
      "Almost 90% show alterations of vasculature, either in the form of hypertrophy and/or multilayering, or as glomeruloid proliferation.",
      "One third of the tumors show necrosis (with or without palisading), and about 80% have ≥ 0.42 mitoses/mm2 (equating to ≥ 1 mitosis/10 HPF of 0.55 mm in diameter and 0.24 mm2 in area).",
      "Areas of solid tumor growth are frequent, but invasive growth into the adjacent parenchyma may also be observed .",
    ],
    ihc: [
      "A suggestive immunohistochemical marker observed in about 40% of HGAPs is loss of nuclear ATRX expression in the tumor cells, with non-neoplastic cell nuclei remaining ATRX-positive .",
      "IDH1 p.R132H immunohistochemistry is negative.",
      "Very rare tumors with expression of the H3 p.K28M (K27M)-mutant protein have been reported, but the definitive classification of these tumors has yet to be established .",
    ],
    source_diff: [
      "Because of the broad and diagnostically ambiguous spectrum of histological features, a wide range of gliomas represent relevant differential diagnoses, including IDH-wildtype glioblastoma, pleomorphic xanthoastrocytoma (CNS WHO grade 2 or 3), and pilocytic astrocytoma (especially tumors with histological features of anaplasia).",
      "The first study of HGAP demonstrated that in a predominantly adult population, about 80% of tumors histologically considered to be anaplastic pilocytic astrocytomas represented HGAP upon DNA methylation analysis . In contrast, in a purely pediatric population of anaplastic pilocytic astrocytoma, only 1 (3%) of 31 tumors was molecularly confirmed as HGAP . It was further shown that about one third of histologically defined cerebellar glioblastomas molecularly represented HGAP .",
    ],
    molecular: [
      "Currently, DNA methylation profiling is the only method for definitively establishing a diagnosis of HGAP .",
      "The molecular class is included in widely used machine learning–based classifiers .",
      "A combination of histology with certain genetic markers may be suggestive of the diagnosis but may not clearly distinguish these tumors from other gliomas such as pleomorphic xanthoastrocytoma or glioblastoma.",
      "A variety of MAPK pathway gene alterations have been reported , the most frequent being NF1 alterations, KIAA1549::BRAF fusions, and FGFR1 mutations (Table 2.04).",
      "In one tumor, an NF1 alteration was combined with an FGFR1 mutation, but MAPK pathway gene mutations otherwise occur in a mutually exclusive fashion .",
      "The rate of occurrence of BRAF p.V600E is notably low, and the overall frequencies of reported MAPK pathway gene alterations are remarkably different from those of pleomorphic xanthoastrocytoma and pilocytic astrocytoma.",
      "In one study of 74 cases, homozygous deletion (or, very rarely, mutation) of CDKN2A and/or CDKN2B occurred in about 80% of tumors .",
      "Alternatively, CDK4 amplifications were observed in some cases .",
      "ATRX mutations and/or loss of ATRX expression was observed in 33 (45%) of cases.",
      "In rare instances without ATRX alteration, TERT promoter mutations were detected (2 [3%] of 74, both p.C228T mutations) .",
      "In 2 (3%) of the 74 tumors, H3 p.K28M (K27M) mutations were identified, but the definitive classification of these tumors has yet to be established .",
    ],
    differential: [
      {
        name: "Pilocytic astrocytoma",
        points: [
          "Consider Pilocytic astrocytoma when its defining profile is present: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
          "Pilocyt The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Pleomorphic xanthoastrocytoma",
        points: [
          "Consider Pleomorphic xanthoastrocytoma when its defining profile is present: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymal giant cell astrocytoma",
        points: [
          "Consider Subependymal giant cell astrocytoma when its defining profile is present: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Chordoid glioma",
        points: [
          "Consider Chordoid glioma when its defining profile is present: Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Astroblastoma, MN1-altered",
        points: [
          "Consider Astroblastoma, MN1-altered when its defining profile is present: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Because of the broad and diagnostically ambiguous spectrum of histological features, a wide range of",
        points: [
          "Because of the broad and diagnostically ambiguous spectrum of histological features, a wide range of gliomas represent relevant differential diagnoses, including IDH-wildtype glioblastoma, pleomorphic xanthoastrocytoma (CNS WHO grade 2 or 3), and pilocytic astrocytoma (especially tumors with histological features of anaplasia).",
        ],
      },
      {
        name: "The first study of HGAP demonstrated that in a predominantly adult population, about 80% of tumors h",
        points: [
          "The first study of HGAP demonstrated that in a predominantly adult population, about 80% of tumors histologically considered to be anaplastic pilocytic astrocytomas represented HGAP upon DNA methylation analysis .",
          "In contrast, in a purely pediatric population of anaplastic pilocytic astrocytoma, only 1 (3%) of 31 tumors was molecularly confirmed as HGAP .",
          "It was further shown that about one third of histologically defined cerebellar glioblastomas molecularly represented HGAP .",
        ],
      },
    ],
  },
  {
    name: "Pleomorphic xanthoastrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin",
    summary:
      "A superficial location involving the leptomeninges and cerebrum is typical. The majority of tumors (98%) occur supratentorially, most often in the temporal lobe . PXAs involving the cerebellum and spinal cord have been reported , as well as 2 childhood cases in the retina .",
    clinical: [
      "PXAs involving the cerebellum and spinal cord have been reported , as well as 2 childhood cases in the retina .",
      "It occurs equally in male and female patients and typically develops in children and young adults .",
      "Mean age at diagnosis is 26.3 years (median: 20.5 years) .",
      "There are few data on the relative prevalence of CNS WHO grade 2 versus CNS WHO grade 3 tumors, but in one series, anaplasia was present in 31% of cases at first diagnosis (in 23% of pediatric patients and 37% of adult patients) .",
      "The majority of tumors (98%) occur supratentorially, most often in the temporal lobe .",
    ],
    criteria: [
      "Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin deposition, and characteristically with BRAF p.V600E mutation (or other MAPK pathway gene alterations) and homozygous CDKN2A and/or CDKN2B deletion (CNS WHO grade 2 or 3).",
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common.",
      "Tumors are composed of a mixture of spindled, epithelioid, pleomorphic, and multinucleated astrocytes that are sometimes filled with lipid droplets (xanthomatous cells).",
      "Intranuclear pseudoinclusions, prominent nucleoli, and lymphocytic infiltration are frequent .",
      "Granular bodies, both pale and brightly eosinophilic, are characteristic .",
      "Reticulin fibres surrounding individual tumor cells are mainly encountered in leptomeningeal areas.",
      "Most PXAs have low mitotic activity.",
      "Anaplasia manifests as brisk mitotic activity, either focally or diffusely, and occurs at first diagnosis or at recurrence.",
      "Necrosis is frequent as well, whereas microvascular proliferation is uncommon .",
      "CNS WHO grade 3 PXAs may demonstrate less pleomorphism and a more diffusely infiltrative pattern than their grade 2 counterparts.",
      "Among the common cytological patterns of anaplasia, small cell, fibrillary, and epithelioid/rhabdoid subtypes have been reported .",
      "MAPK pathway gene alterations Essentially all PXAs harbour genetic alterations in a MAPK pathway gene causing aberrant activation of this pathway.",
      "By far the most frequent alteration is BRAF p.V600E (accounting for ~60% of cases in previous series and as many as 80% in combined data from two recent studies ).",
      "In most cases, this missense mutation is detectable using immunohistochemistry .",
      "Tumors without BRAF p.V600E mutation can harbour a wide variety of alternative MAPK pathway gene alterations, mostly affecting BRAF (non-p.V600E mutations, non–KIAA1549::BRAF fusions), NTRK1, NTRK2, NTRK3, RAF1, and NF1, and possibly additional genes.",
      "The frequency of BRAF mutation is unrelated to CNS WHO grade or elevated mitotic activity .",
    ],
    histology: [
      "PXA typically demonstrates a mostly solid, non-infiltrative growth pattern, although microscopic invasion at the periphery is common.",
      "Tumors are composed of a mixture of spindled, epithelioid, pleomorphic, and multinucleated astrocytes that are sometimes filled with lipid droplets (xanthomatous cells).",
      "Intranuclear pseudoinclusions, prominent nucleoli, and lymphocytic infiltration are frequent .",
      "Granular bodies, both pale and brightly eosinophilic, are characteristic .",
      "Reticulin fibres surrounding individual tumor cells are mainly encountered in leptomeningeal areas.",
      "Most PXAs have low mitotic activity.",
      "Anaplasia manifests as brisk mitotic activity, either focally or diffusely, and occurs at first diagnosis or at recurrence.",
      "Necrosis is frequent as well, whereas microvascular proliferation is uncommon .",
      "CNS WHO grade 3 PXAs may demonstrate less pleomorphism and a more diffusely infiltrative pattern than their grade 2 counterparts.",
      "Among the common cytological patterns of anaplasia, small cell, fibrillary, and epithelioid/rhabdoid subtypes have been reported .",
    ],
    ihc: [
      "PXAs typically express GFAP and S100 .",
      "S100 is often diffusely positive, whereas at least focal positivity for GFAP is common.",
      "Most tumors are positive for CD34 and focally express neuronal markers (synaptophysin, neurofilament, class III β-tubulin, and MAP2) , although the positive cells do not resemble neurons.",
      "BRAF p.V600E expression (VE1 antibody) is present in 60–80% of PXAs .",
      "Focal SMARCB1 (INI1) loss has been reported in rare cases that transformed into malignant neoplasms resembling atypical teratoid/rhabdoid tumors .",
    ],
    source_diff: [
      "The most frequent differential diagnosis is ganglioglioma, which can have a glial component resembling PXA. Rare cases of composite tumors have also been reported . Both PXA and ganglioglioma exhibit accumulation of eosinophilic granular bodies, lymphocytic infiltration, CD34 expression, and BRAF p.V600E; however, true ganglion cells are usually absent in PXA. Given this overlap, the diagnosis of ganglioglioma should be regarded with caution in cases with homozygous deletion of CDKN2A and/or CDKN2B.",
      "PXA should be distinguished from giant cell glioblastoma, with which it shares the features of gross circumscription, reticulin deposition, marked pleomorphism, multinucleated giant cells, and lymphocytic infiltration. However, the immunophenotype – in particular p53 and neuronal antigen expression – and the molecular profile are markedly different (see section Glioblastoma, IDH-wildtype).",
      "In cases showing a dominant population of epithelioid cells and frank anaplasia, especially in the absence of a history of a CNS WHO grade 2 PXA, the main differential diagnosis is epithelioid glioblastoma, because these tumors often carry a BRAF p.V600E mutation. Approximately 60% of epithelioid glioblastomas (the PXA-like epithelioid glioblastoma subset) were shown to cluster by methylation profiling with canonical PXAs . These tumors frequently carried a BRAF p.V600E mutation (79%), CDKN2A homozygous deletion (61%), and TERT promoter mutations (30%); they lacked oncogene amplifications and showed a low frequency of 10q loss. Although such tumors have a more favorable outcome than typical IDH-wildtype glioblastomas, it is unclear whether they are truly equivalent to PXA and will have similar outcomes.",
    ],
    molecular: [
      "MAPK pathway gene alterations Essentially all PXAs harbour genetic alterations in a MAPK pathway gene causing aberrant activation of this pathway.",
      "By far the most frequent alteration is BRAF p.V600E (accounting for ~60% of cases in previous series and as many as 80% in combined data from two recent studies ).",
      "In most cases, this missense mutation is detectable using immunohistochemistry .",
      "Tumors without BRAF p.V600E mutation can harbour a wide variety of alternative MAPK pathway gene alterations, mostly affecting BRAF (non-p.V600E mutations, non–KIAA1549::BRAF fusions), NTRK1, NTRK2, NTRK3, RAF1, and NF1, and possibly additional genes.",
      "The frequency of BRAF mutation is unrelated to CNS WHO grade or elevated mitotic activity .",
      "CDKN2A and/or CDKN2B homozygous deletion As many as 94% of PXAs harbour alterations of CDKN2A and/or CDKN2B, in most cases in the form of homozygous deletion .",
      "In one study, 18 of 19 tumors showed homozygous CDKN2A and/or CDKN2B deletions, and the remaining tumor showed loss of protein expression, indicating that inactivation of CDKN2A and/or CDKN2B may be even more prevalent than previously thought, and possibly a defining molecular alteration of PXA .",
      "The combination of BRAF p.V600E mutation and CDKN2A and/or CDKN2B homozygous deletion is highly suggestive of a diagnosis of PXA, although other rare examples of gangliogliomas, epithelioid glioblastomas, and high-grade astrocytomas with piloid features have also been reported to have this molecular constellation .",
      "TERT alterations TERT promoter mutation and (less frequently) TERT amplification have been identified in PXA in varying proportions; they are more common in anaplastic tumors than in other PXAs .",
      "DNA methylation profiling A DNA methylation profile for PXA has been reported , which may be particularly useful in tumors with ambiguous morphology, but it is largely confirmatory in those with classic histology .",
      "Tumors with a methylation profile of PXA (and harbouring combined BRAF p.V600E mutation and CDKN2A and/or CDKN2B deletion) can be identified in substantial numbers among histological series of pediatric glioblastomas , epithelioid glioblastomas , and astroblastomas , as well as in occasional embryonal tumors , gangliogliomas , and atypical teratoid/rhabdoid tumors .",
      "Although it has been suggested that the morphological spectrum of molecularly defined PXA could therefore be substantially wider than previously thought, further studies are required before a conclusion can be drawn regarding the definitive classification of such cases .",
    ],
    differential: [
      {
        name: "Pilocytic astrocytoma",
        points: [
          "Consider Pilocytic astrocytoma when its defining profile is present: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
          "Pilocyt The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "High-grade astrocytoma with piloid features",
        points: [
          "Consider High-grade astrocytoma with piloid features when its defining profile is present: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
          "Alterations of MAPK The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymal giant cell astrocytoma",
        points: [
          "Consider Subependymal giant cell astrocytoma when its defining profile is present: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Chordoid glioma",
        points: [
          "Consider Chordoid glioma when its defining profile is present: Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Astroblastoma, MN1-altered",
        points: [
          "Consider Astroblastoma, MN1-altered when its defining profile is present: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The most frequent differential diagnosis is ganglioglioma, which can have a glial component resembli",
        points: [
          "The most frequent differential diagnosis is ganglioglioma, which can have a glial component resembling PXA.",
          "Rare cases of composite tumors have also been reported .",
          "Both PXA and ganglioglioma exhibit accumulation of eosinophilic granular bodies, lymphocytic infiltration, CD34 expression, and BRAF p.V600E; however, true ganglion cells are usually absent in PXA.",
          "Given this overlap, the diagnosis of ganglioglioma should be regarded with caution in cases with homozygous deletion of CDKN2A and/or CDKN2B.",
        ],
      },
      {
        name: "PXA should be distinguished from giant cell glioblastoma, with which it shares the features of gross",
        points: [
          "PXA should be distinguished from giant cell glioblastoma, with which it shares the features of gross circumscription, reticulin deposition, marked pleomorphism, multinucleated giant cells, and lymphocytic infiltration.",
          "However, the immunophenotype – in particular p53 and neuronal antigen expression – and the molecular profile are markedly different (see section Glioblastoma, IDH-wildtype).",
        ],
      },
      {
        name: "In cases showing a dominant population of epithelioid cells and frank anaplasia, especially in the a",
        points: [
          "In cases showing a dominant population of epithelioid cells and frank anaplasia, especially in the absence of a history of a CNS WHO grade 2 PXA, the main differential diagnosis is epithelioid glioblastoma, because these tumors often carry a BRAF p.V600E mutation.",
          "Approximately 60% of epithelioid glioblastomas (the PXA-like epithelioid glioblastoma subset) were shown to cluster by methylation profiling with canonical PXAs .",
          "These tumors frequently carried a BRAF p.V600E mutation (79%), CDKN2A homozygous deletion (61%), and TERT promoter mutations (30%); they lacked oncogene amplifications and showed a low frequency of 10q loss.",
          "Although such",
        ],
      },
    ],
  },
  {
    name: "Subependymal giant cell astrocytoma",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
    summary:
      "SEGAs typically arise from the subependymal tissue of the lateral ventricles adjacent to the foramen of Monro. Rare locations include the third ventricle and the retina .",
    clinical: [
      "Most patients present with signs and symptoms of increased intracranial pressure.",
      "Tumor growth at the foramen of Monro can block cerebrospinal fluid circulation, leading to obstructive hydrocephalus .",
    ],
    criteria: [
      "Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes.",
      "Typical appearances range from polygonal cells with abundant, glassy cytoplasm to smaller spindle cells and gemistocyte-like cells arranged in sweeping fascicles, sheets, or nests with intervening fibrillary septa.",
      "Giant pyramidal-like cells with a ganglionic-like appearance (without Nissl substance) are common; these large cells have often eccentric, vesicular nuclei with distinct nucleoli.",
      "Nuclear pseudoinclusions can be seen in some cases.",
      "Considerable nuclear pleomorphism and multinucleated cells are frequent.",
      "Clustering of tumor cells and a perivascular rosette-like pattern resembling that of ependymoma are common features.",
      "A rich vascular stroma with frequent hyalinized vessels and infiltration by mast cells and lymphocytes, predominantly T lymphocytes, is a constant feature .",
      "Parenchymal or vascular calcifications are frequently seen .",
      "The presence of mitoses, vascular proliferation, or necrosis does not indicate anaplastic progression .",
      "Proliferation The proliferation index as measured by Ki-67 (MIB1) immunostaining is generally low (mean: 3.0%), providing further support for the benign nature of these neoplasms .",
      "The topoisomerase II labelling index is also reportedly low (mean: 2.9%) .",
      "Although extremely uncommon, craniospinal dissemination has been reported in SEGAs with increased Ki-67 (MIB1) index values but without other malignant features .",
      "Molecular analyses are usually not needed to establish the diagnosis of SEGA.",
      "In histologically ambiguous cases, DNA methylome profiling and analyses for TSC1 or TSC2 alterations may help to establish the diagnosis.",
    ],
    histology: [
      "Histologically, SEGAs are circumscribed, moderately cellular tumors composed of a wide spectrum of glial phenotypes.",
      "Typical appearances range from polygonal cells with abundant, glassy cytoplasm to smaller spindle cells and gemistocyte-like cells arranged in sweeping fascicles, sheets, or nests with intervening fibrillary septa.",
      "Giant pyramidal-like cells with a ganglionic-like appearance (without Nissl substance) are common; these large cells have often eccentric, vesicular nuclei with distinct nucleoli.",
      "Nuclear pseudoinclusions can be seen in some cases.",
      "Considerable nuclear pleomorphism and multinucleated cells are frequent.",
      "Clustering of tumor cells and a perivascular rosette-like pattern resembling that of ependymoma are common features.",
      "A rich vascular stroma with frequent hyalinized vessels and infiltration by mast cells and lymphocytes, predominantly T lymphocytes, is a constant feature .",
      "Parenchymal or vascular calcifications are frequently seen .",
      "The presence of mitoses, vascular proliferation, or necrosis does not indicate anaplastic progression .",
      "Proliferation The proliferation index as measured by Ki-67 (MIB1) immunostaining is generally low (mean: 3.0%), providing further support for the benign nature of these neoplasms .",
      "The topoisomerase II labelling index is also reportedly low (mean: 2.9%) .",
      "Although extremely uncommon, craniospinal dissemination has been reported in SEGAs with increased Ki-67 (MIB1) index values but without other malignant features .",
    ],
    ihc: [
      "SEGA has been designated as a distinctive, well-circumscribed astrocytoma, but because of its usually mixed glioneuronal phenotype it has also been termed “subependymal giant cell tumor” .",
      "Tumor cells demonstrate variable immunoreactivity for GFAP and a uniform and intense immunoreactivity for S100 .",
      "Variable immunoreactivity for neuronal markers and neuropeptides has been detected.",
      "Neuron-associated class III β-tubulin appears more widespread in its distribution than any other neuronal epitope, whereas neurofilament is more restricted and mainly highlights cellular processes and a few ganglionic cells .",
      "SEGAs are variably immunoreactive for synaptophysin , NeuN , and neuropeptides .",
      "Neural stem cell markers including nestin and SOX2 are also expressed in SEGAs , but unlike in cortical dysplasias, CD34 immunoreactivity is not seen.",
      "Loss of either hamartin or tuberin immunoexpression alone is commonly seen in SEGAs, and rarely a combined loss may be present .",
      "In addition, SEGAs show strong immunoreactivity for phosphorylated S6, consistent with mTOR pathway activation .",
      "SEGAs show nuclear immunoreactivity for TTF1, a feature shared by other tumors arising from ventral forebrain structures .",
      "This helps differentiate SEGA from its close morphological mimics , thus widening the spectrum of TTF1-positive CNS tumors.",
      "Ultrastructure Ultrastructural features of neuronal differentiation, including microtubules, occasional dense-core granules, and (rarely) synapses, may be detectable; bundles of intermediate filaments are seen in the cytoplasmic processes of the spindled astrocytic cells .",
    ],
    source_diff: [],
    molecular: [
      "Molecular analyses are usually not needed to establish the diagnosis of SEGA.",
      "In histologically ambiguous cases, DNA methylome profiling and analyses for TSC1 or TSC2 alterations may help to establish the diagnosis.",
    ],
    differential: [
      {
        name: "Pilocytic astrocytoma",
        points: [
          "Consider Pilocytic astrocytoma when its defining profile is present: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
          "Pilocyt The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "High-grade astrocytoma with piloid features",
        points: [
          "Consider High-grade astrocytoma with piloid features when its defining profile is present: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
          "Alterations of MAPK The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Pleomorphic xanthoastrocytoma",
        points: [
          "Consider Pleomorphic xanthoastrocytoma when its defining profile is present: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Chordoid glioma",
        points: [
          "Consider Chordoid glioma when its defining profile is present: Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Astroblastoma, MN1-altered",
        points: [
          "Consider Astroblastoma, MN1-altered when its defining profile is present: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Chordoid glioma",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec",
    summary:
      "Chordoid gliomas have a stereotypical location in the anterior portion of the third ventricle, with larger tumors filling the middle and posterior aspects . They arise in the midline and displace normal structures as they enlarge. Neuroimaging findings suggest an origin in the region of the lamina terminalis in the ven",
    clinical: [
      "They most frequently occur in adults, with a median age of approximately 45 years, although age at presentation varies widely (5–71 years).",
      "A female predominance has been noted (M:F ratio: 1:2) .",
      "They arise in the midline and displace normal structures as they enlarge.",
      "Presenting signs and symptoms typically reflect obstructive hydrocephalus, with headache, nausea, vomiting, and ataxia .",
      "Other features may include endocrine abnormalities reflecting hypothalamic compression (hypothyroidism, amenorrhoea, diabetes insipidus); visual field disturbances due to compression of the optic chiasm; and personality changes, psychiatric symptoms, or memory abnormalities.",
    ],
    criteria: [
      "Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a recurrent p.D463H missense mutation in the PRKCA gene (CNS WHO grade 2).",
      "Chordoid gliomas are solid neoplasms, most often composed of clusters and cords of epithelioid cells within a variably mucinous stroma.",
      "Three less common histological patterns have been reported: a solid pattern with sheets of polygonal epithelioid cells without appreciable mucinous stroma, a fusiform pattern with groups of spindle-shaped cells among loose collagen, and a fibrosing pattern with abundant collagenization.",
      "The fibrosing pattern tends to be more common in older patients .",
      "Individual tumor cells have abundant eosinophilic cytoplasm.",
      "Nuclei are moderate in size, ovoid, and relatively uniform.",
      "Mitoses are usually rare or absent.",
      "A stromal lymphoplasmacytic infiltrate, often containing numerous Russell bodies, is a common finding.",
      "Consistent with the imaging appearance, there is little tendency for brain infiltration.",
      "Reactive astrocytes, Rosenthal fibres, and chronic inflammatory cells may be seen in adjacent non-neoplastic tissue.",
      "The p.D463H missense mutation in the PRKCA gene is nearly ubiquitous in chordoid glioma, having been found in 28 of 29 tumors studied to date .",
      "This mutation has not been identified in any other human tumor, although the PRKCA gene is involved in fusions in papillary glioneuronal tumor .",
      "Therefore, the PRKCA p.D463H mutation is a diagnostic hallmark.",
      "Chordoid gliomas have lacked accompanying pathogenic alterations in genes characteristic of other brain tumor entities (e.g. IDH1, IDH2, H3-3A, H3C2 [HIST1H3B], FGFR1, BRAF, NF1, CDKN2A, TP53).",
      "A distinct epigenetic signature of chordoid glioma has also been identified, and DNA methylation profiling represents an ancillary method for diagnostic confirmation .",
    ],
    histology: [
      "Chordoid gliomas are solid neoplasms, most often composed of clusters and cords of epithelioid cells within a variably mucinous stroma.",
      "Three less common histological patterns have been reported: a solid pattern with sheets of polygonal epithelioid cells without appreciable mucinous stroma, a fusiform pattern with groups of spindle-shaped cells among loose collagen, and a fibrosing pattern with abundant collagenization.",
      "The fibrosing pattern tends to be more common in older patients .",
      "Individual tumor cells have abundant eosinophilic cytoplasm.",
      "Nuclei are moderate in size, ovoid, and relatively uniform.",
      "Mitoses are usually rare or absent.",
      "A stromal lymphoplasmacytic infiltrate, often containing numerous Russell bodies, is a common finding.",
      "Consistent with the imaging appearance, there is little tendency for brain infiltration.",
      "Reactive astrocytes, Rosenthal fibres, and chronic inflammatory cells may be seen in adjacent non-neoplastic tissue.",
    ],
    ihc: [
      "Chordoid gliomas show strong, diffuse expression of GFAP and consistently express the transcription factor TTF1 (NKX2-1).",
      "The percentage and intensity of nuclear TTF1 staining vary depending on the antibody clone used , with rare examples showing minimal to no expression.",
      "Expression of vimentin and CD34 is strong.",
      "Expression of S100 and EMA is variable.",
      "Neuronal and neuroendocrine markers (synaptophysin, neurofilament, chromogranin A) are consistently negative .",
      "The Ki-67 proliferation index is usually < 2% .",
    ],
    source_diff: [
      "The principal tumor types in the differential diagnosis are other chordoid neoplasms, including chordoma and chordoid meningioma.",
      "Chordomas can be differentiated based on their consistent expression of brachyury and cytokeratins, with lack of GFAP and CD34 expression.",
      "Chordoid meningiomas usually display small foci of whorl formation and psammoma bodies, and they are immunopositive for EMA and SSTR2A, but negative for GFAP and CD34 , as well as being negative for TTF1 .",
      "The differential diagnosis also includes epithelioid haemangioendothelioma, which is composed of cords of cells, sometimes with a myxoid/mucinous background. Although both tumors share immunoreactivity for CD34, epithelioid haemangioendothelioma is additionally positive for CD31, VEGF, and factor VIII, but negative for GFAP .",
    ],
    molecular: [
      "The p.D463H missense mutation in the PRKCA gene is nearly ubiquitous in chordoid glioma, having been found in 28 of 29 tumors studied to date .",
      "This mutation has not been identified in any other human tumor, although the PRKCA gene is involved in fusions in papillary glioneuronal tumor .",
      "Therefore, the PRKCA p.D463H mutation is a diagnostic hallmark.",
      "Chordoid gliomas have lacked accompanying pathogenic alterations in genes characteristic of other brain tumor entities (e.g. IDH1, IDH2, H3-3A, H3C2 [HIST1H3B], FGFR1, BRAF, NF1, CDKN2A, TP53).",
      "A distinct epigenetic signature of chordoid glioma has also been identified, and DNA methylation profiling represents an ancillary method for diagnostic confirmation .",
    ],
    differential: [
      {
        name: "Pilocytic astrocytoma",
        points: [
          "Consider Pilocytic astrocytoma when its defining profile is present: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
          "Pilocyt The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "High-grade astrocytoma with piloid features",
        points: [
          "Consider High-grade astrocytoma with piloid features when its defining profile is present: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
          "Alterations of MAPK The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Pleomorphic xanthoastrocytoma",
        points: [
          "Consider Pleomorphic xanthoastrocytoma when its defining profile is present: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymal giant cell astrocytoma",
        points: [
          "Consider Subependymal giant cell astrocytoma when its defining profile is present: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Astroblastoma, MN1-altered",
        points: [
          "Consider Astroblastoma, MN1-altered when its defining profile is present: Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The principal tumor types in the differential diagnosis are other chordoid neoplasms, including chor",
        points: [
          "The principal tumor types in the differential diagnosis are other chordoid neoplasms, including chordoma and chordoid meningioma.",
        ],
      },
      {
        name: "Chordomas can be differentiated based on their consistent expression of brachyury and cytokeratins, ",
        points: [
          "Chordomas can be differentiated based on their consistent expression of brachyury and cytokeratins, with lack of GFAP and CD34 expression.",
        ],
      },
      {
        name: "Chordoid meningiomas usually display small foci of whorl formation and psammoma bodies, and they are",
        points: [
          "Chordoid meningiomas usually display small foci of whorl formation and psammoma bodies, and they are immunopositive for EMA and SSTR2A, but negative for GFAP and CD34 , as well as being negative for TTF1 .",
        ],
      },
    ],
  },
  {
    name: "Astroblastoma, MN1-altered",
    group: "Circumscribed Astrocytic Gliomas",
    clue: "Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucle",
    summary:
      "Astroblastoma, MN1-altered, occurs predominantly in the cerebral hemispheres, most often in the frontal and parietal lobes, but also in occipital and temporal regions . Intraventricular, brainstem, and spinal cord examples have been documented .",
    clinical: [
      "These tumors have a striking female predominance, with women accounting for 39 of 41 reported cases included in a recent meta-analysis .",
      "Astroblastoma, MN1-altered, occurs predominantly in the cerebral hemispheres, most often in the frontal and parietal lobes, but also in occipital and temporal regions .",
      "Intraventricular, brainstem, and spinal cord examples have been documented .",
      "Presenting symptoms include headache, seizures, paralysis, nausea, and vomiting .",
    ],
    criteria: [
      "Astroblastoma, MN1-altered, is a circumscribed glial neoplasm with MN1 alteration that is composed of round, cuboidal, or columnar cells with variable pseudopapillary or perivascular growth, perivascular anucleate zones, and vascular and pericellular hyalinization.",
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views .",
      "In the classic form, tumor cells are anchored to centrally positioned blood vessels by eosinophilic cytoplasmic processes that are well defined, stout, or only slightly tapered.",
      "These lend inverted columnar or low cuboidal profiles to neoplastic elements.",
      "Round cell elements may also be found, which may mimic a primitive or embryonal neoplasm in hypercellular regions.",
      "Rhabdoid cytology can also be encountered .",
      "Astroblastic pseudorosettes may only focally emerge against a background of sheet-like tumor growth.",
      "Spindled cells forming fascicles may be encountered.",
      "A typical (though inconstant) and especially prominent feature of MN1-altered astroblastomas in some studies is vascular and stromal sclerosis, which may be limited or extensive, with broad regions of hyalinization containing only remnant tumor cell cords.",
      "Circumscription is the rule, with pushing borders or only limited CNS invasion being characteristic.",
      "Permeative growth in the manner of diffuse gliomas is not a feature.",
      "Mitotic activity is highly variable and some cases exhibit necrosis and microvascular proliferation.",
      "Histological features for grading have not been clearly defined and a definitive CNS WHO grade has not been established for MN1-altered astroblastoma.",
      "Electron microscopy An ultrastructural study of an MN1-altered astroblastoma revealed intercellular lumina containing microvilli and framed by elongated, zonula adherens–type cytoplasmic junctions .",
      "Such features have also been noted in histologically defined astroblastomas, as have cell body polarization with investing basement membranes, lamellar cytoplasmic interdigitations (pleating), and apical cytoplasmic blebs with purse-string constrictions and capping microvilli .",
      "Astroblastoma, MN1-altered, is characterized by structural rearrangements of the MN1 gene at chromosome band 22q12.1.",
      "MN1 fusions most often occur in-frame with BEND2 at chromosome band Xp22.13, but other partners (including CXXC5) have also been described .",
      "MN1 alterations can be detected by a variety of methodologies, including FISH, RT-PCR, RNA sequencing, and next-generation DNA sequencing .",
      "Although MN1 fusion is often the solitary pathogenic alteration identified, a subset of MN1-altered astroblastomas harbour accompanying CDKN2A homozygous deletion .",
      "Recurrent chromosomal copy-number changes in MN1-altered astroblastoma include monosomy 16 and partial losses of 22q and X, probably reflecting the chromosomal rearrangement process leading to MN1::BEND2 fusion .",
      "Individual examples of astroblastoma-like tumors harbouring EWSR1::BEND2 fusion instead of MN1::BEND2 in the spinal cord have been reported .",
      "However, the biological nature and clinical outcomes of these rare cases have not been elucidated to date, and the designation “not elsewhere classified (NEC)” is recommended for such tumors at present.",
      "MN1 fusions occur in as many as 70% of histologically defined astroblastomas, and > 60% of MN1 fusion–positive CNS tumors show astroblastoma morphology .",
      "MN1-altered astroblastomas display a distinct DNA methylation pattern that reliably distinguishes them from other tumor types with astroblastomatous rosettes (see Differential diagnosis, above).",
    ],
    histology: [
      "The histological hallmark of MN1-altered astroblastoma is the astroblastic pseudorosette, a perivascular structuring of neoplastic cells that appear radially arrayed, often forming papillary or pseudopapillary formations in cross-section, and regimented in ribbon-like/trabecular alignment in tangential views .",
      "In the classic form, tumor cells are anchored to centrally positioned blood vessels by eosinophilic cytoplasmic processes that are well defined, stout, or only slightly tapered.",
      "These lend inverted columnar or low cuboidal profiles to neoplastic elements.",
      "Round cell elements may also be found, which may mimic a primitive or embryonal neoplasm in hypercellular regions.",
      "Rhabdoid cytology can also be encountered .",
      "Astroblastic pseudorosettes may only focally emerge against a background of sheet-like tumor growth.",
      "Spindled cells forming fascicles may be encountered.",
      "A typical (though inconstant) and especially prominent feature of MN1-altered astroblastomas in some studies is vascular and stromal sclerosis, which may be limited or extensive, with broad regions of hyalinization containing only remnant tumor cell cords.",
      "Circumscription is the rule, with pushing borders or only limited CNS invasion being characteristic.",
      "Permeative growth in the manner of diffuse gliomas is not a feature.",
      "Mitotic activity is highly variable and some cases exhibit necrosis and microvascular proliferation.",
      "Histological features for grading have not been clearly defined and a definitive CNS WHO grade has not been established for MN1-altered astroblastoma.",
      "Electron microscopy An ultrastructural study of an MN1-altered astroblastoma revealed intercellular lumina containing microvilli and framed by elongated, zonula adherens–type cytoplasmic junctions .",
      "Such features have also been noted in histologically defined astroblastomas, as have cell body polarization with investing basement membranes, lamellar cytoplasmic interdigitations (pleating), and apical cytoplasmic blebs with purse-string constrictions and capping microvilli .",
    ],
    ihc: [
      "Cytoplasmic immunoreactivity for GFAP is characteristic, although the extent varies considerably.",
      "The large majority of MN1-altered astroblastomas display at least focal nuclear OLIG2 expression .",
      "Cytoplasmic EMA labelling is regularly seen but varies in its distribution as diffuse, membranous, dot-like, or ring-like .",
      "Immunoreactivity for podoplanin (D2-40) is typical .",
      "The MN1-altered astroblastomas studied to date were not immunoreactive for L1CAM (a surrogate marker of ZFTA [C11orf95] fusion–positive ependymomas) .",
      "A broad range of Ki-67 labelling index values has been communicated .",
    ],
    source_diff: [
      "The histological features noted in MN1-altered astroblastoma are not entity-specific and may be displayed focally or extensively by other tumors that are proved, on molecular diagnostic assessment, to represent ZFTA (C11orf95) fusion–positive ependymomas, BRAF-mutant epithelioid glioblastomas, BRAF-mutant pleomorphic xanthoastrocytomas, embryonal neoplasms, IDH-wildtype glioblastomas, or other gliomas . ZFTA (C11orf95) fusion and BRAF mutation are mutually exclusive with MN1 alterations and do not support a diagnosis of MN1-altered astroblastoma. Although a small subset of MN1-altered astroblastomas may harbour genetic alterations typical of IDH-wildtype glioblastoma (e.g. EGFR amplification, or homozygous deletion involving the CDKN2A and/or CDKN2B locus), IDH-wildtype glioblastomas are characterized by an infiltrative pattern of growth, distinctive cellular morphology, additional genetic alterations (e.g. TERT promoter mutations, gain of chromosome 7, loss of chromosome 10), and an absence of MN1 alterations. A subset of histologically defined astroblastomas do not share a molecular signature with currently established molecular CNS tumor types .",
    ],
    molecular: [
      "Astroblastoma, MN1-altered, is characterized by structural rearrangements of the MN1 gene at chromosome band 22q12.1.",
      "MN1 fusions most often occur in-frame with BEND2 at chromosome band Xp22.13, but other partners (including CXXC5) have also been described .",
      "MN1 alterations can be detected by a variety of methodologies, including FISH, RT-PCR, RNA sequencing, and next-generation DNA sequencing .",
      "Although MN1 fusion is often the solitary pathogenic alteration identified, a subset of MN1-altered astroblastomas harbour accompanying CDKN2A homozygous deletion .",
      "Recurrent chromosomal copy-number changes in MN1-altered astroblastoma include monosomy 16 and partial losses of 22q and X, probably reflecting the chromosomal rearrangement process leading to MN1::BEND2 fusion .",
      "Individual examples of astroblastoma-like tumors harbouring EWSR1::BEND2 fusion instead of MN1::BEND2 in the spinal cord have been reported .",
      "However, the biological nature and clinical outcomes of these rare cases have not been elucidated to date, and the designation “not elsewhere classified (NEC)” is recommended for such tumors at present.",
      "MN1 fusions occur in as many as 70% of histologically defined astroblastomas, and > 60% of MN1 fusion–positive CNS tumors show astroblastoma morphology .",
      "MN1-altered astroblastomas display a distinct DNA methylation pattern that reliably distinguishes them from other tumor types with astroblastomatous rosettes (see Differential diagnosis, above).",
    ],
    differential: [
      {
        name: "Pilocytic astrocytoma",
        points: [
          "Consider Pilocytic astrocytoma when its defining profile is present: Pilocytic astrocytoma is an astrocytic neoplasm with variable proportions of bipolar hair-like (pilocytic) cells, compact and loose or myxoid regions, Rosenthal fibres, and eosinophilic granular bodies.",
          "Pilocyt The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "High-grade astrocytoma with piloid features",
        points: [
          "Consider High-grade astrocytoma with piloid features when its defining profile is present: High-grade astrocytoma with piloid features (HGAP) is an astrocytoma showing a distinct DNA methylation profile, often with high-grade piloid and/or glioblastoma-like histological features.",
          "Alterations of MAPK The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Pleomorphic xanthoastrocytoma",
        points: [
          "Consider Pleomorphic xanthoastrocytoma when its defining profile is present: Pleomorphic xanthoastrocytoma (PXA) is an astrocytoma with large pleomorphic (frequently multinucleated) cells, spindle cells, and lipidized cells, often with numerous eosinophilic granular bodies and reticulin The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymal giant cell astrocytoma",
        points: [
          "Consider Subependymal giant cell astrocytoma when its defining profile is present: Subependymal giant cell astrocytoma (SEGA) is a periventricular tumor composed partly of large ganglion-like astrocytes, and strongly associated with tuberous sclerosis (TS) (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Chordoid glioma",
        points: [
          "Consider Chordoid glioma when its defining profile is present: Chordoid glioma is a well-circumscribed glial neoplasm that arises in the anterior third ventricle, is histologically characterized by clusters and cords of GFAP-expressing epithelioid cells, and exhibits a rec The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The histological features noted in MN1-altered astroblastoma are not entity-specific and may be disp",
        points: [
          "The histological features noted in MN1-altered astroblastoma are not entity-specific and may be displayed focally or extensively by other tumors that are proved, on molecular diagnostic assessment, to represent ZFTA (C11orf95) fusion–positive ependymomas, BRAF-mutant epithelioid glioblastomas, BRAF-mutant pleomorphic xanthoastrocytomas, embryonal neoplasms, IDH-wildtype glioblastomas, or other gliomas .",
          "ZFTA (C11orf95) fusion and BRAF mutation are mutually exclusive with MN1 alterations and do not support a diagnosis of MN1-altered astroblastoma.",
          "Although a small subset of MN1-altered astroblastomas may harbour genetic alterations typical of",
        ],
      },
    ],
  },
  {
    name: "Ganglioglioma",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause ",
    summary:
      "These tumors can occur throughout the CNS, including in the cerebrum, brainstem, cerebellum, spinal cord, and optic nerves, as well as within the ventricular system, although the majority (> 70%) occur in the temporal lobes (Table 2.05) .",
    clinical: [
      "Gangliogliomas have been reported in patients ranging from 0 to 70 years of age, most occurring in the first and second decades of life (median age at diagnosis: 12 years) .",
      "In a single-centre study, ganglioglioma was more prevalent in male patients (59.8%) than in female patients (40.2%), and there was a similar ratio in the European Epilepsy Brain Bank cohort .",
      "These tumors can occur throughout the CNS, including in the cerebrum, brainstem, cerebellum, spinal cord, and optic nerves, as well as within the ventricular system, although the majority (> 70%) occur in the temporal lobes (Table 2.05) .",
      "For tumors involving the brainstem and spinal cord, the mean duration of symptoms before diagnosis is 1.25 years and 1.4 years, respectively .",
      "They are the tumors most commonly associated with chronic temporal lobe epilepsy .",
    ],
    criteria: [
      "Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause MAPK pathway activation (CNS WHO grade 1).",
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity.",
      "The two components may be intermixed or geographically separate.",
      "The neuronal element is composed of dysmorphic ganglion cells that may demonstrate abnormal clustering, a lack of cytoarchitectural organization, cytomegaly, perimembranous aggregation of Nissl substance, or binucleated forms (seen in < 50% of cases).",
      "The glial component, which constitutes the proliferative cell population of the tumor, may resemble fibrillary astrocytoma, oligodendroglioma, or pilocytic astrocytoma .",
      "Eosinophilic granular bodies are encountered more often than Rosenthal fibres .",
      "Although gangliogliomas are generally well demarcated on imaging, they often demonstrate an infiltrative growth pattern microscopically .",
      "Extension into the subarachnoid space is common.",
      "Gangliogliomas may uncommonly develop a reticulin fibre network apart from the vasculature (which is a feature more typical of pleomorphic xanthoastrocytoma).",
      "Mitotic activity is typically low or absent.",
      "Additional histopathological features frequently include dystrophic calcification, either within the matrix or as neuronal/capillary incrustation; extensive lymphoid infiltrates along perivascular spaces; and a prominent capillary network .",
      "Focal cortical dysplasia (FCD) arising in association with ganglioglioma is a frequently reported finding, but it remains controversial whether this actually represents infiltration of ganglioglioma or non-neoplastic dysplasia in most cases .",
      "It should be diagnosed only in areas of cortical abnormalities without tumor cell infiltration and classified as FCD type 3b according to the classification proposed by the International League Against Epilepsy (ILAE) .",
      "For patients with ganglioglioma with a typical clinical and histological presentation, molecular testing may not be critical.",
      "However, for cases with diagnostic uncertainty, the initial molecular workup should focus on BRAF p.V600E mutation testing either by sequencing or by immunohistochemistry using the mutant-specific antibody VE1 .",
      "Many gangliogliomas have low tumor cell content, so the selection of areas for molecular testing should be made cautiously, and sensitive sequencing methods capable of detecting variants at low allele frequencies should be employed.",
      "In gangliogliomas negative for BRAF p.V600E mutation, other BRAF alterations including mutations and fusions are commonly found, as well as various other genetic alterations causing activation of the MAPK signalling pathway, such as RAF1 fusion, KRAS mutation, and NF1 mutation or deletion .",
      "Most commonly, gangliogliomas harbour a solitary pathogenic alteration causing activation of the MAPK pathway.",
      "However, rare gangliogliomas have been reported with dual BRAF p.V600E mutation and CDKN2A homozygous deletion, which may potentially represent an adverse prognostic factor in ganglioglioma .",
      "However, this genetic pattern is far more common in pleomorphic xanthoastrocytoma and should prompt consideration of this alternative diagnosis .",
      "A small number of ganglioglioma-like tumors centered in midline structures of the CNS have been reported with dual BRAF p.V600E and H3 p.K28M (K27M) mutations ; however, the exact nature of these tumors is unknown at present.",
      "A small subset of histologically defined gangliogliomas have been reported with FGFR1 or FGFR2 mutations or fusions .",
      "However, FGFR1 alterations are more characteristic of other glioneuronal tumor entities (e.g. DNT, rosette-forming glioneuronal tumor, and extraventricular neurocytoma), and the finding of FGFR1 alteration in a low-grade neuroepithelial tumor should prompt consideration of these alternative entities.",
      "Additionally, FGFR2 fusions are characteristic of PLNTY, and the finding of FGFR2 fusion in a low-grade glioneuronal tumor should prompt consideration of this alternative diagnosis.",
      "IDH mutation (either IDH1 p.R132 or IDH2 p.R172), MYB or MYBL1 fusion, and PRKCA fusion are not compatible with the diagnosis of ganglioglioma.",
      "Lastly, genome-wide DNA methylation profiling has established a distinct epigenetic signature of ganglioglioma that may aid in the classification of diagnostically challenging tumors .",
      "However, the low tumor cell content in ganglioglioma often limits the applicability of DNA methylation profiling .",
    ],
    histology: [
      "Gangliogliomas are biphasic tumors composed of a variable admixture of neuronal and glial elements, which may exhibit marked heterogeneity.",
      "The two components may be intermixed or geographically separate.",
      "The neuronal element is composed of dysmorphic ganglion cells that may demonstrate abnormal clustering, a lack of cytoarchitectural organization, cytomegaly, perimembranous aggregation of Nissl substance, or binucleated forms (seen in < 50% of cases).",
      "The glial component, which constitutes the proliferative cell population of the tumor, may resemble fibrillary astrocytoma, oligodendroglioma, or pilocytic astrocytoma .",
      "Eosinophilic granular bodies are encountered more often than Rosenthal fibres .",
      "Although gangliogliomas are generally well demarcated on imaging, they often demonstrate an infiltrative growth pattern microscopically .",
      "Extension into the subarachnoid space is common.",
      "Gangliogliomas may uncommonly develop a reticulin fibre network apart from the vasculature (which is a feature more typical of pleomorphic xanthoastrocytoma).",
      "Mitotic activity is typically low or absent.",
      "Additional histopathological features frequently include dystrophic calcification, either within the matrix or as neuronal/capillary incrustation; extensive lymphoid infiltrates along perivascular spaces; and a prominent capillary network .",
      "Focal cortical dysplasia (FCD) arising in association with ganglioglioma is a frequently reported finding, but it remains controversial whether this actually represents infiltration of ganglioglioma or non-neoplastic dysplasia in most cases .",
      "It should be diagnosed only in areas of cortical abnormalities without tumor cell infiltration and classified as FCD type 3b according to the classification proposed by the International League Against Epilepsy (ILAE) .",
    ],
    ihc: [
      "Neuronal markers such as MAP2, neurofilament, chromogranin A, and synaptophysin highlight the neuronal component in gangliogliomas .",
      "However, to date, there is no specific marker to unequivocally differentiate neoplastic neurons from their normal counterparts.",
      "Chromogranin A expression is usually very weak or absent in normal neurons, whereas diffuse and strong expression suggests a neoplastic neuron.",
      "Additionally, neoplastic neurons typically have low or absent NeuN expression, in contrast to normal cortical neurons.",
      "Immunohistochemistry for GFAP and OLIG2 highlights the neoplastic glial cell component .",
      "As many as 80% of gangliogliomas contain ramified cells either within the tumor or in the adjacent cortex that express the oncofetal epitope CD34, which is not normally expressed outside of vascular endothelial cells in the mature brain .",
      "Ki-67 labelling is typically low (< 5%) and usually limited to the glial component .",
      "The VE1 antibody that recognizes BRAF p.V600E-mutant protein can be used with appropriate controls to identify the subset of gangliogliomas that are positive for this genetic alteration .",
      "However, the immunostaining intensity levels are typically lower than those observed in BRAF-mutant melanomas and other tumors, and in some gangliogliomas the positivity is most prominent in or exclusively limited to the ganglion cell component .",
    ],
    source_diff: [
      "The diagnosis of ganglioglioma requires the histological identification of a neuronal component, but the near-normal morphology of the neuronal component in some cases remains a challenging issue because there is no specific marker protein for differentiating the neoplastic ganglion cells from native neurons. The diagnosis of ganglioglioma should be considered in all cases of low-grade neuroepithelial tumors associated with focal seizures that are difficult to classify, especially when located in the temporal lobe.",
      "The differential diagnosis for ganglioglioma can include FCD, diffuse gliomas, and other glioneuronal tumors, specifically dysembryoplastic neuroepithelial tumor (DNT), polymorphous low-grade neuroepithelial tumor of the young (PLNTY), and multinodular and vacuolating neuronal tumor. The differentiation from FCD rests principally on the presence of a convincing neoplastic glial component in ganglioglioma; in challenging cases, the identification of BRAF p.V600E mutation or other MAPK pathway alterations provides support for a diagnosis of ganglioglioma, because FCD is genetically characterized by alterations in the PI3K/AKT/mTOR pathway and an absence of MAPK alterations . As discussed above, identifying the neoplastic neuronal component of ganglioglioma can be challenging, and diffuse gliomas with entrapped native neurons can enter the differential diagnosis in such cases. Reduced or absent NeuN expression in the neuronal cells, eosinophilic granular bodies, and CD34-positive ramified cells can all provide support for a diagnosis of ganglioglioma instead of diffuse glioma. Additionally, gangliogliomas harbour BRAF p.V600E mutation or other MAPK pathway alterations and lack the IDH mutation that characterizes IDH-mutant adult-type diffuse gliomas and the MYB or MYBL1 fusion that characterizes angiocentric glioma and pediatric-type diffuse low-grade gliomas . In low-grade glioneuronal tumors with an oligodendrocyte-like glial component, the differential diagnosis should include both DNT and PLNTY. Multinodular growth pattern, the presence of a specific glioneuronal element, absence of CD34 immunoreactivity, and pathogenic FGFR1 alteration all provide support for a diagnosis of DNT over ganglioglioma . Abundant calcifications, diffuse strong CD34 staining of tumor cells, and FGFR2 or FGFR3 fusions all provide support for a diagnosis of PLNTY over ganglioglioma . Multinodular growth pattern, stromal and neuronal vacuolation, OLIG2 positivity of neoplastic neuronal cells, and MAP2K1 mutation all provide support for a diagnosis of multinodular and vacuolating neuronal tumor over ganglioglioma . Lastly, ganglion cell differentiation has been reported in a wide spectrum of CNS tumor entities (e.g. central and extraventricular neurocytoma, diffuse leptomeningeal glioneuronal tumor, papillary glioneuronal tumor, pleomorphic xanthoastrocytoma, paraganglioma of the cauda equina, H3 G34–mutant diffuse hemispheric glioma, CNS neuroblastoma), which require differentiation from ganglioglioma. The presence of xanthomatous tumor cells, intercellular basement membrane deposition (as highlighted by reticulin staining), and focal CDKN2A homozygous/biallelic deletion all provide support for a diagnosis of pleomorphic xanthoastrocytoma over ganglioglioma.",
    ],
    molecular: [
      "For patients with ganglioglioma with a typical clinical and histological presentation, molecular testing may not be critical.",
      "However, for cases with diagnostic uncertainty, the initial molecular workup should focus on BRAF p.V600E mutation testing either by sequencing or by immunohistochemistry using the mutant-specific antibody VE1 .",
      "Many gangliogliomas have low tumor cell content, so the selection of areas for molecular testing should be made cautiously, and sensitive sequencing methods capable of detecting variants at low allele frequencies should be employed.",
      "In gangliogliomas negative for BRAF p.V600E mutation, other BRAF alterations including mutations and fusions are commonly found, as well as various other genetic alterations causing activation of the MAPK signalling pathway, such as RAF1 fusion, KRAS mutation, and NF1 mutation or deletion .",
      "Most commonly, gangliogliomas harbour a solitary pathogenic alteration causing activation of the MAPK pathway.",
      "However, rare gangliogliomas have been reported with dual BRAF p.V600E mutation and CDKN2A homozygous deletion, which may potentially represent an adverse prognostic factor in ganglioglioma .",
      "However, this genetic pattern is far more common in pleomorphic xanthoastrocytoma and should prompt consideration of this alternative diagnosis .",
      "A small number of ganglioglioma-like tumors centered in midline structures of the CNS have been reported with dual BRAF p.V600E and H3 p.K28M (K27M) mutations ; however, the exact nature of these tumors is unknown at present.",
      "A small subset of histologically defined gangliogliomas have been reported with FGFR1 or FGFR2 mutations or fusions .",
      "However, FGFR1 alterations are more characteristic of other glioneuronal tumor entities (e.g. DNT, rosette-forming glioneuronal tumor, and extraventricular neurocytoma), and the finding of FGFR1 alteration in a low-grade neuroepithelial tumor should prompt consideration of these alternative entities.",
      "Additionally, FGFR2 fusions are characteristic of PLNTY, and the finding of FGFR2 fusion in a low-grade glioneuronal tumor should prompt consideration of this alternative diagnosis.",
      "IDH mutation (either IDH1 p.R132 or IDH2 p.R172), MYB or MYBL1 fusion, and PRKCA fusion are not compatible with the diagnosis of ganglioglioma.",
      "Lastly, genome-wide DNA methylation profiling has established a distinct epigenetic signature of ganglioglioma that may aid in the classification of diagnostically challenging tumors .",
      "However, the low tumor cell content in ganglioglioma often limits the applicability of DNA methylation profiling .",
    ],
    differential: [
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The diagnosis of ganglioglioma requires the histological identification of a neuronal component, but",
        points: [
          "The diagnosis of ganglioglioma requires the histological identification of a neuronal component, but the near-normal morphology of the neuronal component in some cases remains a challenging issue because there is no specific marker protein for differentiating the neoplastic ganglion cells from native neurons.",
          "The diagnosis of ganglioglioma should be considered in all cases of low-grade neuroepithelial tumors associated with focal seizures that are difficult to classify, especially when located in the temporal lobe.",
        ],
      },
      {
        name: "The differential diagnosis for ganglioglioma can include FCD, diffuse gliomas, and other glioneurona",
        points: [
          "The differential diagnosis for ganglioglioma can include FCD, diffuse gliomas, and other glioneuronal tumors, specifically dysembryoplastic neuroepithelial tumor (DNT), polymorphous low-grade neuroepithelial tumor of the young (PLNTY), and multinodular and vacuolating neuronal tumor.",
          "The differentiation from FCD rests principally on the presence of a convincing neoplastic glial component in ganglioglioma; in challenging cases, the identification of BRAF p.V600E mutation or other MAPK pathway alterations provides support for a diagnosis of ganglioglioma, because FCD is genetically characterized by alterations in the PI3K/AKT/mTOR pathway and a",
        ],
      },
    ],
  },
  {
    name: "Gangliocytoma",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
    summary:
      "Like gangliogliomas, these tumors can occur throughout the CNS. In a large series of seizure-associated tumors, > 80% of gangliocytomas were located in the temporal lobe . Dysplastic cerebellar gangliocytoma is discussed in a separate section – see section Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) ",
    clinical: [
      "Gangliocytomas are rare tumors that predominantly affect children.",
      "In a large series of seizure-associated tumors, > 80% of gangliocytomas were located in the temporal lobe .",
    ],
    criteria: [
      "Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
      "Gangliocytomas are composed of large, patently neuronal cells that lie singly or irregularly clustered in a matrix that may be indistinguishable from normal neuropil or may be more coarsely fibrillar and vacuolated.",
      "Binucleation and cytoplasmic ballooning or vacuolization are common.",
      "Microcalcifications can be present.",
      "The discrete micronodular substructure of the multinodular and vacuolating neuronal tumor is not seen.",
      "Glial elements are only sparsely represented and free of atypia.",
      "Because a variety of CNS tumors can exhibit gangliocytomatous maturation (including neuroblastomas, medulloblastomas, and embryonal tumors with multilayered rosettes), the presence of proliferative small cell components or neuroblasts must be excluded.",
      "Mitotic activity is absent and Ki-67 labelling is negligible.",
      "To date, no signature molecular abnormalities have been ascribed to gangliocytoma specifically, although histopathologically related entities, including ganglioglioma and multinodular and vacuolating neuronal tumor, frequently harbour alterations in constituents of the RAS/MAPK signalling pathway.",
    ],
    histology: [
      "Gangliocytomas are composed of large, patently neuronal cells that lie singly or irregularly clustered in a matrix that may be indistinguishable from normal neuropil or may be more coarsely fibrillar and vacuolated.",
      "Binucleation and cytoplasmic ballooning or vacuolization are common.",
      "Microcalcifications can be present.",
      "The discrete micronodular substructure of the multinodular and vacuolating neuronal tumor is not seen.",
      "Glial elements are only sparsely represented and free of atypia.",
      "Because a variety of CNS tumors can exhibit gangliocytomatous maturation (including neuroblastomas, medulloblastomas, and embryonal tumors with multilayered rosettes), the presence of proliferative small cell components or neuroblasts must be excluded.",
      "Mitotic activity is absent and Ki-67 labelling is negligible.",
    ],
    ihc: [
      "Neoplastic ganglion cells exhibit variable immunoreactivity for synaptophysin, chromogranin, NFPs, and MAP2.",
      "NeuN expression may be diminished or lost.",
      "GFAP labelling is restricted to reactive astroglia.",
    ],
    source_diff: [
      "Among non-neoplastic neuronal lesions, focal cortical dysplasia (FCD), primarily type 2, should be considered in the differential diagnosis of gangliocytoma. FCD type 2a is characterized by the disruption of cortical lamination with dysmorphic neurons that have enlarged cell bodies and prominent accumulation of Nissl substance and that lack anatomical orientation. The dysmorphic neurons in FCD show cytoplasmic accumulation of neurofilaments (SMI32) and, unlike in gangliocytoma, typically retain NeuN expression. In FCD type 2b, in addition to dysmorphic neurons, balloon cells with ample eosinophilic and glassy cytoplasm, at times multinucleated, are present, particularly in the deep layers of the cortex and the underlying white matter. Balloon cells are highlighted by vimentin and αB-crystallin. Although FCD type 2b is associated with a thickening of the cortex and blurring of the gray matter–white matter junction macroscopically, it lacks the mass-like circumscribed appearance of gangliocytoma. In the suprasellar region, gangliocytoma should be distinguished from sporadic hypothalamic hamartoma (also referred to as “hamartoblastoma”), a congenital mass-like lesion that is characteristically located in the floor of the hypothalamus, involving the tuber cinereum and the mammillary bodies posteriorly and extending inferiorly into the interpeduncular cistern. Hypothalamic hamartoma consists of collections of small to medium-sized neurons typically arranged in nodules and separated by hypocellular neuropil resembling normal CNS neuropil. The glial/neuronal composition varies widely, with some lesions comprising predominantly neurons, and others predominantly glial cells (both astrocytes and oligodendrocytes) . Hypothalamic hamartoma is the pathognomonic manifestation of Pallister–Hall syndrome, a rare autosomal dominant malformative disorder that includes (in addition to hypothalamic hamartoma) polydactyly and imperforate anus as well as abnormalities of the pituitary, larynx, and genitourinary tract . GLI3 germline mutations have been associated with Pallister–Hall syndrome . Mutations in GLI3 and a variety of other genes often related to the SHH pathway have been reported in a subset of sporadic hypothalamic hamartomas . Mixed gangliocytoma–adenoma, also known as “pituitary adenoma with gangliocytic differentiation” or “pituitary adenoma–neuronal choristoma”, typically involves the sella turcica and suprasellar region without connection with the hypothalamus. In addition to its gangliocytic component, mixed gangliocytoma–adenoma is characterized by the presence of an adenomatous component, most often a somatotroph adenoma manifesting as acromegaly or a mixed tumor producing prolactin and growth hormone .",
    ],
    molecular: [
      "To date, no signature molecular abnormalities have been ascribed to gangliocytoma specifically, although histopathologically related entities, including ganglioglioma and multinodular and vacuolating neuronal tumor, frequently harbour alterations in constituents of the RAS/MAPK signalling pathway.",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Among non-neoplastic neuronal lesions, focal cortical dysplasia (FCD), primarily type 2, should be c",
        points: [
          "Among non-neoplastic neuronal lesions, focal cortical dysplasia (FCD), primarily type 2, should be considered in the differential diagnosis of gangliocytoma.",
          "FCD type 2a is characterized by the disruption of cortical lamination with dysmorphic neurons that have enlarged cell bodies and prominent accumulation of Nissl substance and that lack anatomical orientation.",
          "The dysmorphic neurons in FCD show cytoplasmic accumulation of neurofilaments (SMI32) and, unlike in gangliocytoma, typically retain NeuN expression.",
          "In FCD type 2b, in addition to dysmorphic neurons, balloon cells with ample eosinophilic and glassy cytoplasm, at times multinucleate",
        ],
      },
    ],
  },
  {
    name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b",
    summary:
      "DIG/DIAs typically arise in the cerebral hemispheres, involving the superficial cortex and leptomeninges, often with attachment to the dura. Rare cases have been reported in other locations (spinal, posterior fossa, intraventricular, suprasellar), but extensive genetic analysis of such cases has not been performed .",
    clinical: [
      "DIG/DIAs account for 0.4% of brain tumors, with an M:F ratio of 1.8:1 .",
      "They represent 1.25% of intracranial tumors in children and 1.3–15.8% of infantile brain tumors .",
      "The vast majority of cases occur before the age of 24 months.",
      "DIG/DIAs typically arise in the cerebral hemispheres, involving the superficial cortex and leptomeninges, often with attachment to the dura.",
      "Rare cases have been reported in other locations (spinal, posterior fossa, intraventricular, suprasellar), but extensive genetic analysis of such cases has not been performed .",
    ],
    criteria: [
      "Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven by MAPK pathway activation and composed of a mixed astrocytic and neuronal component (DIG) or an astrocytic component only (DIA) embedded in an extensive desmoplastic stroma, often containing foci of undifferentiated embryonal-like tumor cells (CNS WHO grade 1).",
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component.",
      "The desmoplastic leptomeningeal component consists of a mixture of fibroblast-like, spindle-shaped cells intermixed with a collagen matrix.",
      "Reticulin-rich basal lamina classically surrounds almost every cell .",
      "In DIA, the neuroepithelial component comprises an astrocytic population only; in DIG, a neoplastic neuronal component with ganglionic differentiation is also observed .",
      "The neoplastic astrocytes are arranged in fascicles or demonstrate storiform or whorled patterns.",
      "In addition, DIG/DIAs often contain foci of primitive, embryonal-like tumor cells.",
      "This immature component, lacking desmoplasia, may predominate in some areas.",
      "There is a sharp demarcation between the cortical surface and the desmoplastic tumor, although Virchow–Robin spaces are often filled with tumor cells.",
      "Calcifications are common, but perivascular mononuclear inflammatory infiltrates and xanthomatous cells are usually absent.",
      "Necrosis is uncommon and is typically restricted to the foci of primitive, embryonal-like cells.",
      "Glomeruloid microvascular proliferation is usually absent .",
      "In most cases, mitotic figures are limited to the foci of embryonal-like tumor cells and do not exceed 0.8 mitoses/mm2 (equating to < 2 mitoses/10 HPF of 0.55 mm in diameter and 0.24 mm2 in area) in the desmoplastic component.",
      "DIG/DIAs are IDH- and histone H3-wildtype tumors characterized by genetic alterations causing activation of the MAPK signalling pathway, most commonly via mutation or fusion involving BRAF or RAF1 .",
      "BRAF mutations can include p.V600E and other variants at the same codon, such as p.V600D, in addition to variants at other locations or fusions involving partners other than KIAA1549.",
      "These BRAF or RAF1 mutations or fusions are typically present as the sole pathogenic alteration identified, and DIG/DIAs lack the CDKN2A and/or CDKN2B homozygous deletion that commonly accompanies BRAF alterations in pleomorphic xanthoastrocytoma .",
      "Although individual cases of histologically defined DIG/DIAs harbouring ALK or NTRK fusions have been reported , most hemispheric gliomas occurring in infants that harbour ALK, ROS1, MET, or NTRK fusions have been shown to epigenetically cluster with infant-type hemispheric glioma .",
      "Whether there are true DIG/DIAs that also harbour fusions in receptor tyrosine kinase genes (ALK, ROS1, MET, NTRK1, NTRK2, NTRK3, or FGFR1) remains to be established.",
      "DNA methylation profiling has revealed that DIG/DIAs have an epigenetic signature distinct from all other primary CNS tumor entities characterized to date, including pleomorphic xanthoastrocytoma and the aforementioned infant-type hemispheric glioma .",
    ],
    histology: [
      "DIG/DIAs are biphasic tumors composed of a prominent desmoplastic leptomeningeal stroma and a variable proportion of neuroepithelial component.",
      "The desmoplastic leptomeningeal component consists of a mixture of fibroblast-like, spindle-shaped cells intermixed with a collagen matrix.",
      "Reticulin-rich basal lamina classically surrounds almost every cell .",
      "In DIA, the neuroepithelial component comprises an astrocytic population only; in DIG, a neoplastic neuronal component with ganglionic differentiation is also observed .",
      "The neoplastic astrocytes are arranged in fascicles or demonstrate storiform or whorled patterns.",
      "In addition, DIG/DIAs often contain foci of primitive, embryonal-like tumor cells.",
      "This immature component, lacking desmoplasia, may predominate in some areas.",
      "There is a sharp demarcation between the cortical surface and the desmoplastic tumor, although Virchow–Robin spaces are often filled with tumor cells.",
      "Calcifications are common, but perivascular mononuclear inflammatory infiltrates and xanthomatous cells are usually absent.",
      "Necrosis is uncommon and is typically restricted to the foci of primitive, embryonal-like cells.",
      "Glomeruloid microvascular proliferation is usually absent .",
      "In most cases, mitotic figures are limited to the foci of embryonal-like tumor cells and do not exceed 0.8 mitoses/mm2 (equating to < 2 mitoses/10 HPF of 0.55 mm in diameter and 0.24 mm2 in area) in the desmoplastic component.",
    ],
    ihc: [
      "The glial component strongly expresses GFAP, whereas neuronal markers (synaptophysin, neurofilament, NeuN) are observed in neoplastic ganglion cells as well as in cells lacking obvious neuronal differentiation .",
      "The Ki-67 proliferation index within the desmoplastic component ranges from < 0.5% to 5%, with the majority of reported values being < 2% .",
      "However, the Ki-67 index can be significantly elevated (as high as 20%) in the foci of embryonal-like tumor cells .",
      "Immunohistochemistry using the VE1 clone is useful for detecting DIG/DIAs that harbour BRAF p.V600E mutation, but this mutation-specific antibody does not recognize the p.V600D mutation or any of the other BRAF mutations or rearrangements found in DIG/DIAs without p.V600E mutation .",
    ],
    source_diff: [
      "The major differential diagnoses for DIG/DIA are ganglioglioma, pleomorphic xanthoastrocytoma, and the newly defined tumor type infant-type hemispheric glioma. Like DIG/DIA, ganglioglioma and pleomorphic xanthoastrocytoma are typically solid and cystic tumors with frequent BRAF mutations, but ganglioglioma and pleomorphic xanthoastrocytoma are typically much smaller and occur in older children, in contrast to the very large size and the infantile onset of DIG/DIA. Infant-type hemispheric glioma shares the characteristics of infantile onset and hemispheric location with DIG/DIA, but infant-type hemispheric gliomas usually lack desmoplasia and demonstrate an infiltrative growth pattern (unlike DIG/DIAs), and they are genetically characterized by fusions involving receptor tyrosine kinase genes (ALK, ROS1, MET, NTRK1, NTRK2, and/or NTRK3) .",
    ],
    molecular: [
      "DIG/DIAs are IDH- and histone H3-wildtype tumors characterized by genetic alterations causing activation of the MAPK signalling pathway, most commonly via mutation or fusion involving BRAF or RAF1 .",
      "BRAF mutations can include p.V600E and other variants at the same codon, such as p.V600D, in addition to variants at other locations or fusions involving partners other than KIAA1549.",
      "These BRAF or RAF1 mutations or fusions are typically present as the sole pathogenic alteration identified, and DIG/DIAs lack the CDKN2A and/or CDKN2B homozygous deletion that commonly accompanies BRAF alterations in pleomorphic xanthoastrocytoma .",
      "Although individual cases of histologically defined DIG/DIAs harbouring ALK or NTRK fusions have been reported , most hemispheric gliomas occurring in infants that harbour ALK, ROS1, MET, or NTRK fusions have been shown to epigenetically cluster with infant-type hemispheric glioma .",
      "Whether there are true DIG/DIAs that also harbour fusions in receptor tyrosine kinase genes (ALK, ROS1, MET, NTRK1, NTRK2, NTRK3, or FGFR1) remains to be established.",
      "DNA methylation profiling has revealed that DIG/DIAs have an epigenetic signature distinct from all other primary CNS tumor entities characterized to date, including pleomorphic xanthoastrocytoma and the aforementioned infant-type hemispheric glioma .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The major differential diagnoses for DIG/DIA are ganglioglioma, pleomorphic xanthoastrocytoma, and t",
        points: [
          "The major differential diagnoses for DIG/DIA are ganglioglioma, pleomorphic xanthoastrocytoma, and the newly defined tumor type infant-type hemispheric glioma.",
          "Like DIG/DIA, ganglioglioma and pleomorphic xanthoastrocytoma are typically solid and cystic tumors with frequent BRAF mutations, but ganglioglioma and pleomorphic xanthoastrocytoma are typically much smaller and occur in older children, in contrast to the very large size and the infantile onset of DIG/DIA.",
          "Infant-type hemispheric glioma shares the characteristics of infantile onset and hemispheric location with DIG/DIA, but infant-type hemispheric gliomas usually lack desmoplasia and",
        ],
      },
    ],
  },
  {
    name: "Dysembryoplastic neuroepithelial tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as",
    summary:
      "DNTs can be located in any part of the cerebral cortex, but they show a predilection for the temporal lobe (67.3% of cases, preferentially involving mesial structures) and the frontal lobe (16.3% of cases); the remaining cases (16.4%) are located in other regions .",
    clinical: [
      "Patients with DNTs typically present with drug-resistant focal epilepsy with an onset in childhood, adolescence, or early adulthood.",
      "DNTs can be located in any part of the cerebral cortex, but they show a predilection for the temporal lobe (67.3% of cases, preferentially involving mesial structures) and the frontal lobe (16.3% of cases); the remaining cases (16.4%) are located in other regions .",
      "Imaging DNTs usually encompass the thickness of the normal cortex.",
      "Marked high signal intensity within the mass (soap-bubble appearance) with intracystic septa, thin FLAIR hyperintensity surrounding the tumor (rim sign) , triangular cortical based, and remodelling of the adjacent inner table of bone (indicating a slow-growing lesion) are common findings .",
    ],
    criteria: [
      "Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be associated with glial nodules and activating mutations of FGFR1 (CNS WHO grade 1).",
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells.",
      "Between these columns, neurons with normal cytology appear to float in a mucoid matrix (floating neurons) .",
      "Dysplastic ganglionic cells are absent.",
      "Intranodular glial components can be highly heterogeneous, with oligodendroglia-like, neuronal, or piloid or stellate astrocytic cells.",
      "The oligodendroglia-like component generally predominates .",
      "Mitoses are rare.",
      "High cellularity, necrosis, significant perivascular lymphoid infiltrates, and eosinophilic granular bodies are absent.",
      "The microvascular network is also heterogeneous, varying from meagre to extensive, and it may include glomerular formations as seen in pilocytic astrocytomas.",
      "Focal cortical dysplasia type 3b has been described in association with DNTs but remains controversial; it may be diagnosed only if areas of focal cortical dysplasia type 1 without tumor cell infiltration can be identified .",
      "Recognized histopathological patterns Several histological forms of DNT, without clinical or therapeutic implications, have been described .",
      "Among FGFR1 alterations, intragenic duplication (internal tandem duplication [ITD]) of the tyrosine kinase domain (TKD) of FGFR1 is the most prevalent aberration (accounting for ~40–60% of cases) , followed by missense mutations at mutation hotspots in FGFR1 .",
      "FGFR1 mutations were identified in both familial and sporadic cases, with double or multiple mutations often present on the same allele (in cis) .",
      "FGFR1::TACC1 fusion and complete duplication of FGFR1 have also been reported .",
      "FGFR1 alterations are characteristic of DNT (although not specific for it), and they are considered to be the main molecular driver of this tumor .",
      "In particular, TKD duplication is known to be relatively specific to DNT .",
    ],
    histology: [
      "The histopathological hallmarks are the multinodular intracortical growth pattern and the pathognomonic specific glioneuronal element, i.e. the presence of columns oriented perpendicularly to the cortical surface, formed by bundles of axons lined by small oligodendroglia-like cells.",
      "Between these columns, neurons with normal cytology appear to float in a mucoid matrix (floating neurons) .",
      "Dysplastic ganglionic cells are absent.",
      "Intranodular glial components can be highly heterogeneous, with oligodendroglia-like, neuronal, or piloid or stellate astrocytic cells.",
      "The oligodendroglia-like component generally predominates .",
      "Mitoses are rare.",
      "High cellularity, necrosis, significant perivascular lymphoid infiltrates, and eosinophilic granular bodies are absent.",
      "The microvascular network is also heterogeneous, varying from meagre to extensive, and it may include glomerular formations as seen in pilocytic astrocytomas.",
      "Focal cortical dysplasia type 3b has been described in association with DNTs but remains controversial; it may be diagnosed only if areas of focal cortical dysplasia type 1 without tumor cell infiltration can be identified .",
      "Recognized histopathological patterns Several histological forms of DNT, without clinical or therapeutic implications, have been described .",
      "The simple form consists of the unique glioneuronal element.",
      "The complex form consists of the specific glioneuronal element in combination with glial nodules, and it resembles other gliomas such as pilocytic astrocytomas or oligodendrogliomas .",
      "Within the glial components, calcified vessels are common and can cause hemorrhage .",
      "The diffuse/nonspecific form, which lacks the specific glioneuronal element , remains controversial; numerous terms have been used for it in the past, including “diffuse oligodendroglial tumor” , “DNT-like tumor” , “glioneuronal tumor NOS” , “pediatric oligodendroglioma” , and “diffuse glioneuronal tumor” .",
      "The variability of its histomorphological appearance is related to a low interobserver diagnostic concordance .",
      "Recent data have shown that clear phenotype–genotype correlations are difficult to establish, even for experienced neuropathologists using advanced molecular techniques .",
    ],
    ihc: [
      "The small oligodendroglia-like cells express glial markers including S100, the glial transcription factor OLIG2, and PDGFRA, but not GFAP.",
      "MAP2 expression is typically faint in these cells; the strong perinuclear expression found in oligodendrogliomas is not detectable .",
      "The floating normal neurons can be depicted by immunostaining for NeuN, but they are usually negative for chromogranin A.",
      "BRAF p.V600E-mutant protein and CD34 have been described with variable incidences in DNT , but they seem more characteristic of gangliogliomas .",
      "DNT cells do not label with antibodies against IDH1 p.R132H .",
    ],
    source_diff: [
      "Sampling artefacts may make the diagnosis challenging. Clusters of abnormal neurons not otherwise explicable by anatomical localization may be focal and detectable only in some cases. In addition, the architectural heterogeneity of DNT (which generates inherent sampling bias) and the semiliquid consistency of the specific glioneuronal element, which can be lost during the neurosurgical procedure, pose further challenges.",
      "DNTs do not contain dysplastic ganglion cells such as those described in gangliogliomas (i.e. binucleated neurons and large neuron clusters not otherwise explicable by anatomical region) . Ganglioglioma should be suspected when the tumor shows perivascular lymphocytic infiltration, a desmoplastic component, eosinophilic granular bodies, a large cystic component, or a prominent component of CD34-positive satellite cells. The strong perinuclear expression of MAP2 found in diffuse oligodendrogliomas is not detectable in the oligodendroglia-like cells of DNT .",
      "Myxoid glioneuronal tumor, formerly known as DNT of the septum pellucidum , has been separated from conventional DNT because it harbours a specific molecular alteration (PDGFRA p.K385 mutation) not found in conventional DNT, and it has the potential for ventricular dissemination .",
      "The spectrum of low-grade epilepsy-associated brain tumors is widening rapidly with new descriptions of various rare histomolecular tumor types; therefore, the differential diagnosis requires a combined histological, neuroradiological, and molecular diagnostic approach. Multinodular and vacuolating neuronal tumors have a multinodular architecture but a predominant neuronal (i.e. gangliocytoma-like) component with vacuolating cells, mainly in the subcortical white matter . MAP2K1 mutation or (more rarely) BRAF mutations are found instead of the FGFR1 alterations typical of DNT . Polymorphous low-grade neuroepithelial tumor of the young is a morphologically variable entity and is mainly oligodendroglia-like, similar to DNT but with a more infiltrative growth pattern, calcifications, and intense CD34 immunopositivity of tumor cells. They harbour either BRAF p.V600E mutations or fusion events involving FGFR2 or FGFR3 . Diffuse astrocytoma, MYB- or MYBL1-altered, is a more monomorphic tumor, where the regular astrocytic cells are scattered in a fine bubbly neuropil. Unlike in angiocentric gliomas with MYB::QKI fusion transcripts, angiocentric patterns are absent or focal .",
    ],
    molecular: [
      "Among FGFR1 alterations, intragenic duplication (internal tandem duplication [ITD]) of the tyrosine kinase domain (TKD) of FGFR1 is the most prevalent aberration (accounting for ~40–60% of cases) , followed by missense mutations at mutation hotspots in FGFR1 .",
      "FGFR1 mutations were identified in both familial and sporadic cases, with double or multiple mutations often present on the same allele (in cis) .",
      "FGFR1::TACC1 fusion and complete duplication of FGFR1 have also been reported .",
      "FGFR1 alterations are characteristic of DNT (although not specific for it), and they are considered to be the main molecular driver of this tumor .",
      "In particular, TKD duplication is known to be relatively specific to DNT .",
      "BRAF p.V600E mutation has been reported in as many as 50% of DNTs in some studies.",
      "The wide range in incidence of the various alterations probably stems from differences in the morphological criteria used to make the diagnosis of DNT across the various studies; of note, several studies have shown marked variation in the reported frequencies of DNTs, as well as marked interobserver variability in making this diagnosis .",
      "In contrast to FGFR1 alterations, several studies failed to identify BRAF mutations in DNTs containing the specific glioneuronal element .",
      "Therefore, alternative diagnoses, including ganglioglioma or MAPK pathway–altered diffuse low-grade glioma, should be carefully considered in the presence of a BRAF p.V600E mutation.",
      "In support of this, DNA methylation or transcriptional profiling identifies different molecular groups of epilepsy-associated tumors , and although these groups correlate only partially with histological patterns, they separate epilepsy-associated tumors into those with FGFR1 mutations and those with BRAF mutations, with the former being enriched for morphologically defined DNTs.",
      "These data suggest that, according to molecular criteria, DNTs have a distinct methylation and transcriptional profile, and most carry FGFR1 mutations.",
      "Regarding copy-number aberrations, gains at chromosomes 5–7 and loss of chromosome 22 have been reported in a few cases .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Sampling artefacts may make the diagnosis challenging. Clusters of abnormal neurons not otherwise ex",
        points: [
          "Sampling artefacts may make the diagnosis challenging.",
          "Clusters of abnormal neurons not otherwise explicable by anatomical localization may be focal and detectable only in some cases.",
          "In addition, the architectural heterogeneity of DNT (which generates inherent sampling bias) and the semiliquid consistency of the specific glioneuronal element, which can be lost during the neurosurgical procedure, pose further challenges.",
        ],
      },
      {
        name: "DNTs do not contain dysplastic ganglion cells such as those described in gangliogliomas (i.e. binucl",
        points: [
          "DNTs do not contain dysplastic ganglion cells such as those described in gangliogliomas (i.e. binucleated neurons and large neuron clusters not otherwise explicable by anatomical region) .",
          "Ganglioglioma should be suspected when the tumor shows perivascular lymphocytic infiltration, a desmoplastic component, eosinophilic granular bodies, a large cystic component, or a prominent component of CD34-positive satellite cells.",
          "The strong perinuclear expression of MAP2 found in diffuse oligodendrogliomas is not detectable in the oligodendroglia-like cells of DNT .",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor, formerly known as DNT of the septum pellucidum , has been separated from ",
        points: [
          "Myxoid glioneuronal tumor, formerly known as DNT of the septum pellucidum , has been separated from conventional DNT because it harbours a specific molecular alteration (PDGFRA p.K385 mutation) not found in conventional DNT, and it has the potential for ventricular dissemination .",
        ],
      },
    ],
  },
  {
    name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque",
    summary:
      "All cases reported so far were supratentorial. Of 21 cases with data available, 11 were located in the temporal lobe, 4 in the parieto-occipital region, 5 in the frontal lobe, and 1 in a lateral ventricle .",
    clinical: [
      "The majority of DGONC cases occur in pediatric patients, with a median age of 9 years in the 23 cases for which the age of initial diagnosis is known.",
      "However, the age range is wide (1 patient was aged 75 years).",
      "There is an equal sex distribution (13 male patients and 11 female patients reported) .",
      "All cases reported so far were supratentorial.",
      "Of 21 cases with data available, 11 were located in the temporal lobe, 4 in the parieto-occipital region, 5 in the frontal lobe, and 1 in a lateral ventricle .",
    ],
    criteria: [
      "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells frequently showing perinuclear haloes, scattered multinucleated cells, and nuclear clusters, with a distinct DNA methylation profile and frequent monosomy of chromosome 14.",
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analysed .",
      "Subsequently, histological features were investigated in a supervised fashion on 13 samples of this cluster, for which histology slides were available.",
      "The histological characterization in the literature may therefore not cover the entire spectrum .",
      "Another study reported 4 samples from 3 additional patients .",
      "The tumors show a variation in differentiation and cellularity ranging from moderate to high in some cases.",
      "They are composed of small to medium-sized cells with scant cytoplasm, and they commonly show perinuclear haloes like in oligodendroglioma.",
      "In addition to small round nuclei, larger irregular nuclei are present, the latter showing marked nuclear pleomorphism in some cases.",
      "A characteristic feature is the presence of scattered multinucleated cells (pennies on a plate) and nuclear clusters composed of large pleomorphic nuclei.",
      "Mitotic frequency is variable, ranging from single mitotic figures in well-differentiated tumors to brisk mitotic activity in undifferentiated tumors.",
      "Microcalcifications and larger confluent calcifications are commonly encountered.",
      "The tumors infiltrate diffusely into the brain.",
      "DGONCs show a distinct DNA methylation profile.",
      "In t-distributed stochastic neighbour embedding (t-SNE) analysis with the reference samples of Capper et al. , DGONCs form a distinct cluster close to FOXR2-activated CNS neuroblastoma.",
      "Monosomy of chromosome 14 has been reported in 30 of 31 investigated cases.",
      "No other specific recurrent alteration is known .",
    ],
    histology: [
      "DGONCs were described by Capper et al. in 2018, identified by the detection of a global DNA methylation profile that is distinct from that of all brain tumor entities previously analysed .",
      "Subsequently, histological features were investigated in a supervised fashion on 13 samples of this cluster, for which histology slides were available.",
      "The histological characterization in the literature may therefore not cover the entire spectrum .",
      "Another study reported 4 samples from 3 additional patients .",
      "The tumors show a variation in differentiation and cellularity ranging from moderate to high in some cases.",
      "They are composed of small to medium-sized cells with scant cytoplasm, and they commonly show perinuclear haloes like in oligodendroglioma.",
      "In addition to small round nuclei, larger irregular nuclei are present, the latter showing marked nuclear pleomorphism in some cases.",
      "A characteristic feature is the presence of scattered multinucleated cells (pennies on a plate) and nuclear clusters composed of large pleomorphic nuclei.",
      "Mitotic frequency is variable, ranging from single mitotic figures in well-differentiated tumors to brisk mitotic activity in undifferentiated tumors.",
      "Microcalcifications and larger confluent calcifications are commonly encountered.",
      "The tumors infiltrate diffusely into the brain.",
    ],
    ihc: [
      "The tumor cells are diffusely OLIG2-positive in most cases, and GFAP-negative.",
      "Synaptophysin reveals a neuropil background.",
      "NeuN and MAP2 are expressed in a small proportion of cells .",
    ],
    source_diff: [],
    molecular: [
      "DGONCs show a distinct DNA methylation profile.",
      "In t-distributed stochastic neighbour embedding (t-SNE) analysis with the reference samples of Capper et al. , DGONCs form a distinct cluster close to FOXR2-activated CNS neuroblastoma.",
      "Monosomy of chromosome 14 has been reported in 30 of 31 investigated cases.",
      "No other specific recurrent alteration is known .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Papillary glioneuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA ",
    summary:
      "PGNTs are supratentorial, most frequently affecting the temporal lobe (28%), and they are often in close proximity to the lateral ventricles (28%) .",
    clinical: [
      "It is a tumor of young adults, with a median patient age at diagnosis of 16 years (range: 6–54 years) .",
      "No sex predilection was found in a cohort of patients with PGNT with PRKCA fusion .",
      "PGNTs are supratentorial, most frequently affecting the temporal lobe (28%), and they are often in close proximity to the lateral ventricles (28%) .",
    ],
    criteria: [
      "Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA gene fusion (mainly SLC44A1::PRKCA fusion) (CNS WHO grade 1).",
      "PGNT is characterized by a distinctive biphasic pattern, consisting of (1) a glial pseudopapillary architecture and (2) an interpapillary component, heterogeneously distributed, with considerable variation in size between cases.",
      "In a series of 14 molecularly confirmed PGNTs, the pseudopapillary structures were constant except in 1 case .",
      "The cuboidal tumor cells cover hyalinized blood vessels in a single or pseudostratified layer.",
      "The glial cells have round nuclei and scant cytoplasm.",
      "Cellularity varies from case to case.",
      "Monomorphic neurocytes or medium-sized neurons are distributed in a neuropil background .",
      "Ganglion cells are not frequent (seen in 3 of the 14 cases), microcalcifications were present in 5 of 14 cases , and eosinophilic granular bodies are rare .",
      "Occasional mitoses may be seen, but microvascular proliferation and necrosis are absent .",
      "A few reports have described anaplastic features in PGNT, but those cases were not molecularly confirmed .",
      "PRKCA gene fusion (mainly SLC44A1::PRKCA) is the hallmark of PGNT .",
      "To date, SLC44A1::PRKCA fusion has not been observed in other brain tumor types except one neurocytoma .",
      "Two alternative fusions, PRKCA::FAT1 and PRKCA::FAM91A1, have been described in the diffuse glioma MYB- or MYBL1-altered methylation cluster .",
      "The fusion gene can be detected by simple interphase FISH on formalin-fixed, paraffin-embedded sections , but RNA sequencing can also be used .",
      "No PRKCA recurrent mutation point has been reported in PGNT.",
    ],
    histology: [
      "PGNT is characterized by a distinctive biphasic pattern, consisting of (1) a glial pseudopapillary architecture and (2) an interpapillary component, heterogeneously distributed, with considerable variation in size between cases.",
      "In a series of 14 molecularly confirmed PGNTs, the pseudopapillary structures were constant except in 1 case .",
      "The cuboidal tumor cells cover hyalinized blood vessels in a single or pseudostratified layer.",
      "The glial cells have round nuclei and scant cytoplasm.",
      "Cellularity varies from case to case.",
      "Monomorphic neurocytes or medium-sized neurons are distributed in a neuropil background .",
      "Ganglion cells are not frequent (seen in 3 of the 14 cases), microcalcifications were present in 5 of 14 cases , and eosinophilic granular bodies are rare .",
      "Occasional mitoses may be seen, but microvascular proliferation and necrosis are absent .",
      "A few reports have described anaplastic features in PGNT, but those cases were not molecularly confirmed .",
    ],
    ihc: [
      "The immunophenotype is usually biphenotypic: glial in pseudopapillary structures and neuronal in interpapillary areas.",
      "The cuboidal glial cells draping vessels are positive for GFAP and S100.",
      "In some cases, oligodendrocyte-like cells that express OLIG2 but are GFAP-negative may be seen .",
      "The neuronal cells and fibrillary background (neuropil) express neuronal markers such as synaptophysin and NeuN.",
      "However, neurofilament is mostly confined to ganglioid cells, and chromogranin A is not widely expressed .",
      "Extravascular CD34 expression may be observed but only focally .",
      "The Ki-67 proliferation index generally does not exceed 2%, but elevated activity (ranging from 10% to > 50%) has been reported in non–molecularly confirmed cases .",
    ],
    source_diff: [
      "PGNT diagnosis is challenging. In a series of 28 histologically diagnosed PGNTs , 17 (60%) clustered with an alternative methylation class (mainly dysembryoplastic neuroepithelial tumor, pilocytic astrocytoma, or pleomorphic xanthoastrocytoma). This may reflect the morphological heterogeneity of PGNT: the neuronal component may be limited, making it challenging to differentiate from astroblastoma, ependymoma, pilocytic astrocytoma, or pleomorphic xanthoastrocytoma; conversely, the neuronal component can be prominent with only focal papillary architecture (mimicking extraventricular neurocytoma or ganglioglioma). Moreover, perivascular tropism is not specific to PGNT and is shared by various glial or glioneuronal tumors such as pilomyxoid astrocytoma, astroblastoma, ependymoma, dysembryoplastic neuroepithelial tumor, ganglioglioma, and angiocentric glioma.",
    ],
    molecular: [
      "PRKCA gene fusion (mainly SLC44A1::PRKCA) is the hallmark of PGNT .",
      "To date, SLC44A1::PRKCA fusion has not been observed in other brain tumor types except one neurocytoma .",
      "Two alternative fusions, PRKCA::FAT1 and PRKCA::FAM91A1, have been described in the diffuse glioma MYB- or MYBL1-altered methylation cluster .",
      "The fusion gene can be detected by simple interphase FISH on formalin-fixed, paraffin-embedded sections , but RNA sequencing can also be used .",
      "No PRKCA recurrent mutation point has been reported in PGNT.",
      "PGNTs exhibit a highly characteristic and diagnostic methylation profile .",
      "Copy-number variation analysis in the PGNT methylation group reveals flat profiles or only focal gains in a region of 17q that includes PRKCA (in 50% of cases) .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "PGNT diagnosis is challenging. In a series of 28 histologically diagnosed PGNTs , 17 (60%) clustered",
        points: [
          "PGNT diagnosis is challenging.",
          "In a series of 28 histologically diagnosed PGNTs , 17 (60%) clustered with an alternative methylation class (mainly dysembryoplastic neuroepithelial tumor, pilocytic astrocytoma, or pleomorphic xanthoastrocytoma).",
          "This may reflect the morphological heterogeneity of PGNT: the neuronal component may be limited, making it challenging to differentiate from astroblastoma, ependymoma, pilocytic astrocytoma, or pleomorphic xanthoastrocytoma; conversely, the neuronal component can be prominent with only focal papillary architecture (mimicking extraventricular neurocytoma or ganglioglioma).",
          "Moreover, perivascular tropism",
        ],
      },
    ],
  },
  {
    name: "Rosette-forming glioneuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the",
    summary:
      "RGNTs arise in the midline. They usually occupy the fourth ventricle and/or aqueduct and can involve adjacent brainstem, cerebellar vermis, quadrigeminal plate, pineal gland, or thalamus. Localization outside the fourth ventricle (e.g. in the pineal region, spinal cord, optic chiasm, septum pellucidum, and diencephalic",
    clinical: [
      "RGNTs are slow-growing; they preferentially affect young adults, adolescents, and children; and they are rare.",
      "RGNTs arise in the midline.",
      "They usually occupy the fourth ventricle and/or aqueduct and can involve adjacent brainstem, cerebellar vermis, quadrigeminal plate, pineal gland, or thalamus.",
      "Localization outside the fourth ventricle (e.g. in the pineal region, spinal cord, optic chiasm, septum pellucidum, and diencephalic region) has been described .",
      "Patients most commonly present with headache and diminished vision / papilledema and/or ataxia, vertigo, diplopia, and dysarthria.",
    ],
    criteria: [
      "Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the other being glial in nature, with piloid and oligodendroglia-like cells, resembling pilocytic astrocytoma.",
      "These tumors are characterized by FGFR1 mutation with frequent co-occurrence of a PIK3CA and/or NF1 mutation (CNS WHO grade 1).",
      "RGNTs are generally demarcated, but limited infiltration may be seen.",
      "They are characterized by a biphasic neurocytic and glial architecture .",
      "The neurocytic component consists of a uniform population of neurocytes forming neurocytic rosettes and/or perivascular pseudorosettes.",
      "Neurocytic rosettes feature ring-shaped arrays of neurocytic nuclei around delicate eosinophilic neuropil cores.",
      "Perivascular pseudorosettes feature delicate cell processes radiating towards vessels.",
      "Both patterns, when viewed longitudinally, may show a columnar arrangement.",
      "Neurocytic tumor cells have spherical nuclei with finely granular chromatin and inconspicuous nucleoli, scant cytoplasm, and delicate cytoplasmic processes.",
      "These neurocytic structures may lie in a partly microcystic, mucinous matrix.",
      "The glial component of RGNT typically dominates and in most areas resembles pilocytic astrocytoma.",
      "Astrocytic tumor cells are spindle to stellate in shape, with elongated or oval nuclei and moderately dense chromatin.",
      "Cytoplasmic processes often form a compact to loosely textured fibrillary background.",
      "In some areas, the glial component may be microcystic, containing round to oval, oligodendrocyte-like cells with perinuclear haloes.",
      "Rosenthal fibres, eosinophilic granular bodies, microcalcifications, and haemosiderin deposits may be encountered.",
      "Overall, cellularity is low and necrosis is absent.",
      "Vessels may be thin-walled and dilated or hyalinized.",
      "Thrombosed vessels and glomeruloid vasculature may also be seen.",
      "Ganglion cells are occasionally present, but adjacent perilesional cerebellar cortex does not show dysplastic changes.",
      "Proliferation The Ki-67 proliferation index is low (< 3% in reported cases) and mitoses are usually absent.",
      "RGNTs are defined by a distinct DNA methylation profile.",
      "They are also characterized by FGFR1 hotspot mutation (FGFR1 p.N546 or p.K656) in combination with either PIK3CA or PIK3R1 mutation .",
      "Accompanying NF1 mutation can also occur, but this does not provide diagnostic specificity for RGNT because it can also be encountered in dysembryoplastic neuroepithelial tumor or pilocytic astrocytoma .",
      "Because of the high number of misdiagnoses, molecular testing is highly recommended to confirm RGNT diagnosis .",
    ],
    histology: [
      "RGNTs are generally demarcated, but limited infiltration may be seen.",
      "They are characterized by a biphasic neurocytic and glial architecture .",
      "The neurocytic component consists of a uniform population of neurocytes forming neurocytic rosettes and/or perivascular pseudorosettes.",
      "Neurocytic rosettes feature ring-shaped arrays of neurocytic nuclei around delicate eosinophilic neuropil cores.",
      "Perivascular pseudorosettes feature delicate cell processes radiating towards vessels.",
      "Both patterns, when viewed longitudinally, may show a columnar arrangement.",
      "Neurocytic tumor cells have spherical nuclei with finely granular chromatin and inconspicuous nucleoli, scant cytoplasm, and delicate cytoplasmic processes.",
      "These neurocytic structures may lie in a partly microcystic, mucinous matrix.",
      "The glial component of RGNT typically dominates and in most areas resembles pilocytic astrocytoma.",
      "Astrocytic tumor cells are spindle to stellate in shape, with elongated or oval nuclei and moderately dense chromatin.",
      "Cytoplasmic processes often form a compact to loosely textured fibrillary background.",
      "In some areas, the glial component may be microcystic, containing round to oval, oligodendrocyte-like cells with perinuclear haloes.",
      "Rosenthal fibres, eosinophilic granular bodies, microcalcifications, and haemosiderin deposits may be encountered.",
      "Overall, cellularity is low and necrosis is absent.",
      "Vessels may be thin-walled and dilated or hyalinized.",
      "Thrombosed vessels and glomeruloid vasculature may also be seen.",
      "Ganglion cells are occasionally present, but adjacent perilesional cerebellar cortex does not show dysplastic changes.",
      "Proliferation The Ki-67 proliferation index is low (< 3% in reported cases) and mitoses are usually absent.",
    ],
    ihc: [
      "Immunoreactivity for synaptophysin is present at the centres of neurocytic rosettes and in the neuropil of perivascular pseudorosettes .",
      "Both the cytoplasm and processes of neurocytic tumor cells may express MAP2.",
      "In some cases, NeuN positivity can be observed in neurocytic tumor cells.",
      "Tumor cells show nuclear expression of OLIG2.",
      "GFAP and S100 immunoreactivity is present in the glial component but absent in rosettes and pseudorosettes.",
      "Electron microscopy Astrocytic cells of the glial component contain dense bundles of glial filaments.",
      "Rosette-forming neurocytic cells are intimately apposed and feature spherical nuclei with delicate chromatin, cytoplasm containing free ribosomes, scattered profiles of rough endoplasmic reticulum, prominent Golgi complexes, and occasional mitochondria.",
      "Loosely arranged cytoplasmic processes form the centres of rosettes and contain aligned microtubules as well as occasional dense-core granules.",
      "Presynaptic specializations may be seen, and mature synaptic terminals may form surface contacts with perikarya and other cytoplasmic processes .",
    ],
    source_diff: [
      "The main differential diagnosis is pilocytic astrocytoma. Diffuse leptomeningeal glioneuronal tumor may also be a differential diagnosis.",
    ],
    molecular: [
      "RGNTs are defined by a distinct DNA methylation profile.",
      "They are also characterized by FGFR1 hotspot mutation (FGFR1 p.N546 or p.K656) in combination with either PIK3CA or PIK3R1 mutation .",
      "Accompanying NF1 mutation can also occur, but this does not provide diagnostic specificity for RGNT because it can also be encountered in dysembryoplastic neuroepithelial tumor or pilocytic astrocytoma .",
      "Because of the high number of misdiagnoses, molecular testing is highly recommended to confirm RGNT diagnosis .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The main differential diagnosis is pilocytic astrocytoma. Diffuse leptomeningeal glioneuronal tumor ",
        points: [
          "The main differential diagnosis is pilocytic astrocytoma.",
          "Diffuse leptomeningeal glioneuronal tumor may also be a differential diagnosis.",
        ],
      },
    ],
  },
  {
    name: "Myxoid glioneuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter. The tumor is characterized by a prolifera",
    summary:
      "Myxoid glioneuronal tumors are most commonly centered in the septal nuclei and septum pellucidum, but examples have also been reported in the genu of the corpus callosum and the periventricular white matter of the lateral ventricles .",
    clinical: [
      "They have an approximately equal sex distribution and predominantly occur in children and young adults, with a peak incidence in the second and third decades of life .",
      "Tumors centered in the septal nuclei and septum pellucidum are often associated with obstructive hydrocephalus, whereas tumors centered in the corpus callosum and periventricular white matter have not been associated with hydrocephalus.",
    ],
    criteria: [
      "Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
      "The tumor is characterized by a proliferation of oligodendrocyte-like tumor cells embedded in a prominent myxoid stroma, often including admixed floating neurons, neurocytic rosettes, and/or perivascular neuropil.",
      "There is a recurrent dinucleotide mutation at codon p.K385 in the PDGFRA gene (CNS WHO grade 1).",
      "Myxoid glioneuronal tumor is a mostly circumscribed, non-infiltrative glioneuronal neoplasm that is histologically characterized by a proliferation of oligodendrocyte-like tumor cells embedded in a prominent myxoid stroma.",
      "Some examples contain admixed floating neurons and perivascular neuropil resembling dysembryoplastic neuroepithelial tumor, whereas others contain neurocytic rosettes and perivascular neuropil resembling rosette-forming glioneuronal tumor.",
      "Myxoid glioneuronal tumors lack the multinodularity with patterned mucin-rich nodules that is characteristic of dysembryoplastic neuroepithelial tumors of the cerebral cortex.",
      "Rosenthal fibres, eosinophilic granular bodies, and microcalcifications typical of other low-grade neuroepithelial tumor entities are not commonly observed in myxoid glioneuronal tumors.",
      "Mitotic activity is typically very low or absent .",
      "Myxoid glioneuronal tumors are genetically characterized by a dinucleotide mutation in the PDGFRA gene that results in an amino acid substitution, either p.K385L or p.K385I, within the extracellular ligand-binding domain of the protein .",
      "Less commonly, other mutations in the extracellular domain of PDGFRA occur .",
      "Most cases have had balanced diploid genomes without recurrent cytogenetic alterations.",
      "Myxoid glioneuronal tumors lack genetic alterations that are characteristic of other glioneuronal tumors and pilocytic astrocytoma (e.g. BRAF, FGFR1, PIK3CA, PIK3R1, NF1, PTPN11, or MAP2K1 alterations).",
      "Genome-wide DNA methylation profiling has revealed that myxoid glioneuronal tumors harbour a distinct epigenetic signature that is closely related to that of dysembryoplastic neuroepithelial tumor of the cerebral cortex .",
    ],
    histology: [
      "Myxoid glioneuronal tumor is a mostly circumscribed, non-infiltrative glioneuronal neoplasm that is histologically characterized by a proliferation of oligodendrocyte-like tumor cells embedded in a prominent myxoid stroma.",
      "Some examples contain admixed floating neurons and perivascular neuropil resembling dysembryoplastic neuroepithelial tumor, whereas others contain neurocytic rosettes and perivascular neuropil resembling rosette-forming glioneuronal tumor.",
      "Myxoid glioneuronal tumors lack the multinodularity with patterned mucin-rich nodules that is characteristic of dysembryoplastic neuroepithelial tumors of the cerebral cortex.",
      "Rosenthal fibres, eosinophilic granular bodies, and microcalcifications typical of other low-grade neuroepithelial tumor entities are not commonly observed in myxoid glioneuronal tumors.",
      "Mitotic activity is typically very low or absent .",
    ],
    ihc: [
      "By immunohistochemistry, myxoid glioneuronal tumors are characterized by diffuse strong positivity for OLIG2, SOX10, GFAP, and MAP2 in the oligodendrocyte-like tumor cells.",
      "Synaptophysin staining is typically absent in the oligodendrocyte-like cells, but it is found in the floating neurons, neurocytic rosettes, and perivascular neuropil.",
      "CD34 staining is typically limited to the endothelial cells of the delicate capillary network.",
      "The Ki-67 labelling index is uniformly low (< 5%) .",
    ],
    source_diff: [],
    molecular: [
      "Myxoid glioneuronal tumors are genetically characterized by a dinucleotide mutation in the PDGFRA gene that results in an amino acid substitution, either p.K385L or p.K385I, within the extracellular ligand-binding domain of the protein .",
      "Less commonly, other mutations in the extracellular domain of PDGFRA occur .",
      "Most cases have had balanced diploid genomes without recurrent cytogenetic alterations.",
      "Myxoid glioneuronal tumors lack genetic alterations that are characteristic of other glioneuronal tumors and pilocytic astrocytoma (e.g. BRAF, FGFR1, PIK3CA, PIK3R1, NF1, PTPN11, or MAP2K1 alterations).",
      "Genome-wide DNA methylation profiling has revealed that myxoid glioneuronal tumors harbour a distinct epigenetic signature that is closely related to that of dysembryoplastic neuroepithelial tumor of the cerebral cortex .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Diffuse leptomeningeal glioneuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch",
    summary:
      "These tumors preferentially involve the spinal and intracranial leptomeninges, although there are rare parenchymal examples without a leptomeningeal component, most often located in the spinal cord but occasionally also in the cerebral hemispheres . In the intracranial compartment, leptomeningeal growth is most commonl",
    clinical: [
      "In the largest published series (36 patients) , the median age at diagnosis was 5 years (range: 5 months to 46 years).",
      "Another study found that the median age for DLGNT-MC-1 (5 years; range: 2–23 years) was lower than that for DLGNT-MC-2 (14 years; range: 5–47 years) .",
      "The M:F ratio is roughly 1.6:1 .",
      "These tumors preferentially involve the spinal and intracranial leptomeninges, although there are rare parenchymal examples without a leptomeningeal component, most often located in the spinal cord but occasionally also in the cerebral hemispheres .",
      "In the intracranial compartment, leptomeningeal growth is most commonly seen in the posterior fossa, around the brainstem, and along the base of the brain.",
    ],
    criteria: [
      "Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by chromosome arm 1p deletion and a mitogen-activated protein kinase (MAPK) pathway gene alteration, most commonly KIAA1549::BRAF fusion.",
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions.",
      "DLGNTs are low- to moderate-cellularity neoplasms composed of relatively monomorphic oligodendrocyte-like tumor cells with uniform, medium-sized round nuclei and inconspicuous nucleoli.",
      "Like in oligodendrogliomas, clear perinuclear haloes are sometimes seen in DLGNTs as an artefact in formalin-fixed, paraffin-embedded tissue sections.",
      "The tumor cells grow diffusely or in small nests in the leptomeninges, with desmoplastic and myxoid changes commonly present.",
      "A storiform pattern may be observed in desmoplastic areas.",
      "Histological features of anaplasia are rare and include increased cytological atypia, brisk mitotic activity, microvascular proliferation, and/or palisading necrosis at primary presentation or after tumor progression ; one example also featured a spongioblastic pattern with rhythmic nuclear palisades .",
      "A small subset of tumors contain overt neuronal differentiation, in the form of neurocytic rosettes, delicate perivascular pseudorosettes, neuropil-like islands, and/or ganglion cells.",
      "Rarely, eosinophilic granular bodies are observed.",
      "Rosenthal fibres are usually absent.",
      "The intraparenchymal component may resemble a dysembryoplastic neuroepithelial tumor or a diffusely infiltrative glioma, mostly oligodendroglioma, although astrocytic features occasionally predominate.",
      "For cases with typical clinical and histological features, molecular testing may be less critical.",
      "However, for any cases with diagnostic uncertainty, the initial molecular workup should include chromosome 1p status and KIAA1549::BRAF fusion testing.",
      "If 1p deletion is not detected, the diagnosis of DLGNT is unlikely.",
      "If KIAA1549::BRAF fusion is not detected, the possibility of less frequent MAPK alterations should be explored.",
      "For prognostic purposes, chromosome 1q status should also be tested.",
      "Alternatively, DNA methylation profiling can be performed for DLGNT class assignment, as well as for chromosome 1p and 1q copy-number alterations.",
    ],
    histology: [
      "The diagnosis is most often made on meningeal biopsy or a biopsy taken from discrete intraparenchymal lesions.",
      "DLGNTs are low- to moderate-cellularity neoplasms composed of relatively monomorphic oligodendrocyte-like tumor cells with uniform, medium-sized round nuclei and inconspicuous nucleoli.",
      "Like in oligodendrogliomas, clear perinuclear haloes are sometimes seen in DLGNTs as an artefact in formalin-fixed, paraffin-embedded tissue sections.",
      "The tumor cells grow diffusely or in small nests in the leptomeninges, with desmoplastic and myxoid changes commonly present.",
      "A storiform pattern may be observed in desmoplastic areas.",
      "Histological features of anaplasia are rare and include increased cytological atypia, brisk mitotic activity, microvascular proliferation, and/or palisading necrosis at primary presentation or after tumor progression ; one example also featured a spongioblastic pattern with rhythmic nuclear palisades .",
      "A small subset of tumors contain overt neuronal differentiation, in the form of neurocytic rosettes, delicate perivascular pseudorosettes, neuropil-like islands, and/or ganglion cells.",
      "Rarely, eosinophilic granular bodies are observed.",
      "Rosenthal fibres are usually absent.",
      "The intraparenchymal component may resemble a dysembryoplastic neuroepithelial tumor or a diffusely infiltrative glioma, mostly oligodendroglioma, although astrocytic features occasionally predominate.",
    ],
    ihc: [
      "The oligodendroglial-like tumor cells typically express OLIG2, MAP2, and S100 .",
      "GFAP immunoreactivity in tumor cells is seen in < 50% of cases and is often restricted to a minor proportion of neoplastic cells.",
      "Expression of synaptophysin is detectable in as many as two thirds of the tumors, and it is particularly common in those containing neuropil aggregates and ganglion cells.",
      "NeuN, neurofilament, and chromogranin stains are usually positive in only those tumors with more overt neuronal features on routine histopathology.",
      "EMA and IDH1 p.R132H stains are negative.",
    ],
    source_diff: [
      "The main differential diagnosed are intraparenchymal astrocytic or oligodendroglial gliomas with leptomeningeal dissemination; for instance, pilocytic astrocytoma may also show leptomeningeal dissemination. An absence of (or only focal) GFAP immunoreactivity, the presence of synaptophysin-positive cells, and the characteristic molecular profile of KIAA1549::BRAF fusion with isolated 1p deletion or 1p/19q codeletion in the absence of IDH mutation distinguish DLGNT from pilocytic astrocytoma, dysembryoplastic neuroepithelial tumor, oligodendroglioma, ganglioglioma, and diffuse astrocytoma. Pleomorphic xanthoastrocytomas can typically be distinguished by their pleomorphic histology, often with associated BRAF p.V600E mutation and CDKN2A and/or CDKN2B homozygous deletion .",
    ],
    molecular: [
      "For cases with typical clinical and histological features, molecular testing may be less critical.",
      "However, for any cases with diagnostic uncertainty, the initial molecular workup should include chromosome 1p status and KIAA1549::BRAF fusion testing.",
      "If 1p deletion is not detected, the diagnosis of DLGNT is unlikely.",
      "If KIAA1549::BRAF fusion is not detected, the possibility of less frequent MAPK alterations should be explored.",
      "For prognostic purposes, chromosome 1q status should also be tested.",
      "Alternatively, DNA methylation profiling can be performed for DLGNT class assignment, as well as for chromosome 1p and 1q copy-number alterations.",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The main differential diagnosed are intraparenchymal astrocytic or oligodendroglial gliomas with lep",
        points: [
          "The main differential diagnosed are intraparenchymal astrocytic or oligodendroglial gliomas with leptomeningeal dissemination; for instance, pilocytic astrocytoma may also show leptomeningeal dissemination.",
          "An absence of (or only focal) GFAP immunoreactivity, the presence of synaptophysin-positive cells, and the characteristic molecular profile of KIAA1549::BRAF fusion with isolated 1p deletion or 1p/19q codeletion in the absence of IDH mutation distinguish DLGNT from pilocytic astrocytoma, dysembryoplastic neuroepithelial tumor, oligodendroglioma, ganglioglioma, and diffuse astrocytoma.",
          "Pleomorphic xanthoastrocytomas can typically be disting",
        ],
      },
    ],
  },
  {
    name: "Multinodular and vacuolating neuronal tumor",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO",
    summary:
      "MVNTs typically involve the deep cortical ribbon and superficial white matter, predominantly of the temporal lobes (75–80%), followed by the frontal lobes (10–15%), and then the parietal and occipital lobes . A case involving the basal ganglia has been reported .",
    clinical: [
      "However, pathologically confirmed cases have been encountered mainly in adults (age range: 5–71 years; median: 42 years), with few pediatric examples recorded; the M:F ratio is 1.5:1 .",
      "MVNTs typically involve the deep cortical ribbon and superficial white matter, predominantly of the temporal lobes (75–80%), followed by the frontal lobes (10–15%), and then the parietal and occipital lobes .",
      "Imaging Highly characteristic on MRI, although not always apparent, is the clustering of discrete or coalescent T2-FLAIR–hyperintense nodules in deep cortex and superficial white matter, typically without associated mass effects, edema, restricted diffusion, or contrast enhancement .",
      "Seizures, particularly of complex partial type with or without secondary generalization, are the most common manifestation (~60% of cases), followed by headache (10–15%), episodic confusion, and dizziness.",
    ],
    criteria: [
      "The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO grade 1).",
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm .",
      "These lie in a delicate fibrillar matrix that usually exhibits conspicuous vacuolar change, with tumor cells often displaying cytoplasmic/pericellular vacuolization as well.",
      "A more diffuse distribution of neurons producing a band-like or gyriform expansion of the cortex or hippocampus may be evident, and some examples comprise small neuronal elements.",
      "Tumor cells are haphazardly distributed within nodules and some may align along capillary vessels.",
      "In select cases, small, oligodendrocyte-like cells are intermingled or clustered.",
      "Conspicuously dysmorphic and multinucleated neuronal forms are typically absent, as are Rosenthal fibres, eosinophilic granular bodies, myxoid microcysts and microcalcifications, although some tumors with MVNT-type and gangliogliomatous components have been described .",
      "Mitotic figures, vascular proliferation, and necrosis have not been identified.",
      "MVNTs can be associated with regional cortical disorganization and hippocampal sclerosis .",
      "MVNTs harbour MAPK pathway–activating abnormalities that most commonly involve small indels and hotspot mutations in MAP2K1, followed by pathogenic mutations in BRAF (excluding the common p.V600E mutations, which have not been documented in this tumor to date) and FGFR2 fusions .",
    ],
    histology: [
      "MVNTs are typically composed of pale, hypomyelinated nodules containing monomorphic neuronal elements that are most frequently of intermediate to large size (but generally not achieving ganglion cell proportions) with round and vesicular nuclei, distinct nucleoli, and amphophilic to eosinophilic cytoplasm .",
      "These lie in a delicate fibrillar matrix that usually exhibits conspicuous vacuolar change, with tumor cells often displaying cytoplasmic/pericellular vacuolization as well.",
      "A more diffuse distribution of neurons producing a band-like or gyriform expansion of the cortex or hippocampus may be evident, and some examples comprise small neuronal elements.",
      "Tumor cells are haphazardly distributed within nodules and some may align along capillary vessels.",
      "In select cases, small, oligodendrocyte-like cells are intermingled or clustered.",
      "Conspicuously dysmorphic and multinucleated neuronal forms are typically absent, as are Rosenthal fibres, eosinophilic granular bodies, myxoid microcysts and microcalcifications, although some tumors with MVNT-type and gangliogliomatous components have been described .",
      "Mitotic figures, vascular proliferation, and necrosis have not been identified.",
      "MVNTs can be associated with regional cortical disorganization and hippocampal sclerosis .",
    ],
    ihc: [
      "Tumor cells consistently express OLIG2, HuC/HuD, non-phosphorylated 200-kDa NFP, and doublecortin on immunohistochemistry, and they often express MAP2 and synaptophysin (although weakly, with much less labelling of the nodular matrix than the cortex) .",
      "Strong matrix labelling for α-internexin is present , but tumor cells do not express phosphorylated NFPs or chromogranin, and they are negative or only weakly reactive for NeuN.",
      "Thus, they appear to have an incompletely matured neuronal immunophenotype.",
      "CD34 expression by ramified neural elements in associated cortex is common.",
      "GFAP labelling is restricted to reactive astrocytes.",
    ],
    source_diff: [],
    molecular: [
      "MVNTs harbour MAPK pathway–activating abnormalities that most commonly involve small indels and hotspot mutations in MAP2K1, followed by pathogenic mutations in BRAF (excluding the common p.V600E mutations, which have not been documented in this tumor to date) and FGFR2 fusions .",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS",
    summary:
      "The tumor develops in the cerebellum, usually unilaterally (without preference for side) . Rarely, bilateral tumors have been reported .",
    clinical: [
      "Because of the rarity of dysplastic cerebellar gangliocytoma, there has not been a systematic study to determine the distribution of patient age at onset, but most cases have been identified in adults.",
      "PTEN mutations have been identified in virtually all cases of adult-onset dysplastic cerebellar gangliocytoma but not in childhood-onset cases , suggesting that the two differ in their biology.",
      "Sur un ganglioneurome diffus du cortex du cervelet.",
      "Patients with dysplastic cerebellar gangliocytoma most commonly present with dysmetria or other cerebellar signs, and/or signs and symptoms of obstructive hydrocephalus and increased intracranial pressure.",
      "Cranial nerve deficits, macrocephaly, and seizures are also often present.",
    ],
    criteria: [
      "Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS WHO grade 1).",
      "Dysplastic cerebellar gangliocytoma causes diffuse enlargement of the molecular and internal granular layers of the cerebellum, which are filled by ganglionic cells of various sizes .",
      "An important diagnostic feature is the relative preservation of the cerebellar architecture; the folia are enlarged and distorted but not obliterated.",
      "A layer of abnormally myelinated axon bundles in parallel arrays is often observed in the outer molecular layer.",
      "Scattered cells morphologically consistent with granule neurons are sometimes found under the pia or in the molecular layer.",
      "The resulting structure of these dysmorphic cerebellar folia has been referred to as inverted cerebellar cortex.",
      "Purkinje cells are reduced in number or absent.",
      "Calcification and ectatic vessels are commonly present within the lesion.",
      "Vacuoles are sometimes observed in the molecular layer and white matter .",
    ],
    histology: [
      "Dysplastic cerebellar gangliocytoma causes diffuse enlargement of the molecular and internal granular layers of the cerebellum, which are filled by ganglionic cells of various sizes .",
      "An important diagnostic feature is the relative preservation of the cerebellar architecture; the folia are enlarged and distorted but not obliterated.",
      "A layer of abnormally myelinated axon bundles in parallel arrays is often observed in the outer molecular layer.",
      "Scattered cells morphologically consistent with granule neurons are sometimes found under the pia or in the molecular layer.",
      "The resulting structure of these dysmorphic cerebellar folia has been referred to as inverted cerebellar cortex.",
      "Purkinje cells are reduced in number or absent.",
      "Calcification and ectatic vessels are commonly present within the lesion.",
      "Vacuoles are sometimes observed in the molecular layer and white matter .",
    ],
    ihc: [
      "The dysplastic neuronal cells are immunopositive for synaptophysin.",
      "Antibodies specific to the Purkinje cell antigens CD3 (LEU4), PCP2, PCP4, and calbindin have been found to label a minor subpopulation of large atypical ganglion cells, but not to react with the majority of the neuronal elements, suggesting that only a small proportion of neurons are derived from a Purkinje cell source .",
      "Immunohistochemistry also demonstrates loss of PTEN protein expression in most dysplastic cells and increased expression of phosphorylated AKT and S6, reflecting aberrant signalling that is predicted to result in increased cell size and lack of apoptosis .",
      "Undetectable or very low proliferative activity has been reported in the few cases analysed with proliferation markers .",
    ],
    source_diff: [],
    molecular: [
      "Select molecular testing according to the suspected entity and the integrated diagnostic differential; use sequencing, fusion testing, copy-number analysis, or DNA methylation profiling as indicated.",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Central neurocytoma",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
    summary:
      "Central neurocytomas are typically located supratentorially in the lateral ventricle(s) and/or the third ventricle. The most common site is the anterior portion of one of the lateral ventricles, followed by combined extension into the lateral and third ventricles, and then by a bilateral intraventricular location. Cent",
    clinical: [
      "In an analysis of > 100 cases, the mean patient age at clinical manifestation was 28.5 years; 46% of patients were diagnosed in the third decade of life and 70% were diagnosed between the ages of 20 and 40 years.",
      "Both sexes are equally affected, with an M:F ratio of 1.02:1.",
      "Most patients present with symptoms of increased intracranial pressure, rather than with a distinct neurological deficit.",
    ],
    criteria: [
      "Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
      "Central neurocytoma is a neuroepithelial tumor composed of uniform round cells with a rounded nucleus with finely speckled chromatin and variably present nucleoli.",
      "Additional features include fibrillary areas mimicking neuropil, an oligodendroglioma-like honeycomb architecture, large fibrillary areas mimicking the irregular rosettes in pineocytomas, cells arranged in straight lines, and perivascular pseudorosettes as observed in ependymomas.",
      "Capillary blood vessels, usually arranged in an arborizing pattern, give the tumors a neuroendocrine appearance.",
      "Calcifications are seen in half of all cases, usually distributed throughout the tumor.",
      "Occasionally, lipomatous changes can be observed .",
      "Rarer findings include Homer Wright rosettes and ganglioid cells .",
      "Some cases show increased vascularity with substantial intratumoral hemorrhage (5–10% of cases), and early organizing hematoma can be present, which results in heterogeneity on T2-weighted images .",
      "In rare instances, anaplastic histological features (i.e. brisk mitotic activity, microvascular proliferation, and necrosis) can occur in combination, and tumors with these features are called atypical central neurocytomas .",
    ],
    histology: [
      "Central neurocytoma is a neuroepithelial tumor composed of uniform round cells with a rounded nucleus with finely speckled chromatin and variably present nucleoli.",
      "Additional features include fibrillary areas mimicking neuropil, an oligodendroglioma-like honeycomb architecture, large fibrillary areas mimicking the irregular rosettes in pineocytomas, cells arranged in straight lines, and perivascular pseudorosettes as observed in ependymomas.",
      "Capillary blood vessels, usually arranged in an arborizing pattern, give the tumors a neuroendocrine appearance.",
      "Calcifications are seen in half of all cases, usually distributed throughout the tumor.",
      "Occasionally, lipomatous changes can be observed .",
      "Rarer findings include Homer Wright rosettes and ganglioid cells .",
      "Some cases show increased vascularity with substantial intratumoral hemorrhage (5–10% of cases), and early organizing hematoma can be present, which results in heterogeneity on T2-weighted images .",
      "In rare instances, anaplastic histological features (i.e. brisk mitotic activity, microvascular proliferation, and necrosis) can occur in combination, and tumors with these features are called atypical central neurocytomas .",
    ],
    ihc: [
      "Synaptophysin expression is the most suitable and reliable diagnostic marker, with immunoreactivity diffusely present in the tumor matrix, especially in fibrillary zones and perivascular nucleus-free cuffs .",
      "Most cases are also immunoreactive for NeuN, although the intensity and extent of the labelling vary .",
      "Thyroid transcription factor 1 (TTF1; clone SPT24) may also be positive in the tumor cell nuclei .",
      "Other neuronal epitopes (e.g. class III β-tubulin and MAP2) are usually expressed.",
      "In addition, L1CAM can be positive in the tumor cells.",
      "In contrast, expression of chromogranin A, NFP, and α-internexin is absent, except in sporadic cases showing gangliocytic differentiation.",
      "Although most studies have found GFAP to be expressed only in entrapped reactive astrocytes, this antigen has been reported in tumor cells by some authors .",
      "OLIG2 is usually positive in occasional cells in central neurocytoma .",
      "However, a strong and diffuse OLIG2 immunoreactivity would favour a diagnosis of intraventricular oligodendroglioma .",
    ],
    source_diff: [],
    molecular: [
      "Select molecular testing according to the suspected entity and the integrated diagnostic differential; use sequencing, fusion testing, copy-number analysis, or DNA methylation profiling as indicated.",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Extraventricular neurocytoma",
        points: [
          "Consider Extraventricular neurocytoma when its defining profile is present: Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Extraventricular neurocytoma",
    group: "Glioneuronal and Neuronal Tumors",
    clue: "Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central n",
    summary:
      "Extraventricular neurocytomas can arise in almost any location in the CNS without contact with the ventricular system. The most frequently documented locations are the cerebral hemispheres and cerebellum . However, there are also reports of these tumors arising in the spinal cord, thalamus, hypothalamic region, and pon",
    clinical: [
      "They generally affect patients of any age, with peak incidence in the third to fourth decades of life.",
      "There is no significant sex predilection .",
      "However, there are also reports of these tumors arising in the spinal cord, thalamus, hypothalamic region, and pons, with single cases reported in cranial nerves, the cauda equina, and even in the sellar region , although these cases were reported in the pre-genetics era.",
      "Patients may present with headache, seizures, visual disturbances, hemiparesis, and cognitive disturbances, but they can also display motor, sensory, and sphincter dysfunction, as well as epilepsy .",
      "Intratumoral hemorrhage may be present.",
    ],
    criteria: [
      "Extraventricular neurocytoma is a usually well-circumscribed neuronal neoplasm that arises throughout the CNS outside the ventricular system, with histopathological characteristics resembling those of central neurocytoma but demonstrating a much wider morphological spectrum, and with frequent FGFR1::TACC1 fusions (CNS WHO grade 2).",
      "Although some histopathological characteristics resemble central neurocytoma, a much wider morphological spectrum has been described in extraventricular neurocytomas.",
      "Histologically, extraventricular neurocytomas are usually moderate- to high-cellularity neoplasms often composed of relatively monomorphic oligodendroglia-like tumor cells with small, uniform nuclei and sparse cytoplasm, frequently with clear perinuclear haloes.",
      "Tumor cells are often arranged in sheets or cell clusters with neuropil islands; less frequent patterns include neurocytic rosettes or ribbons.",
      "A subset of tumors contain ganglion or ganglioid cells.",
      "Microcalcifications and hyalinized vessels may be present .",
      "A rare case with lipomatous changes has been reported .",
      "Mitotic activity is usually low.",
      "More recently, molecular investigations of extraventricular neurocytomas revealed a high rate of histologically misinterpreted cases and underlined the wide range of morphological heterogeneity in this entity .",
      "Genome-wide DNA methylation profiling has provided evidence for a specific epigenetic signature of extraventricular neurocytoma that is clearly distinct from that of other CNS tumors; it has also indicated that many cases diagnosed histologically (without additional molecular analysis) may represent misdiagnoses.",
      "FGFR1::TACC1 fusion is a highly frequent event in molecularly defined extraventricular neurocytoma, in addition to a small number of other FGFR alterations .",
      "Therefore, additional molecular analyses are strongly advised for a precise diagnosis of extraventricular neurocytoma.",
    ],
    histology: [
      "Although some histopathological characteristics resemble central neurocytoma, a much wider morphological spectrum has been described in extraventricular neurocytomas.",
      "Histologically, extraventricular neurocytomas are usually moderate- to high-cellularity neoplasms often composed of relatively monomorphic oligodendroglia-like tumor cells with small, uniform nuclei and sparse cytoplasm, frequently with clear perinuclear haloes.",
      "Tumor cells are often arranged in sheets or cell clusters with neuropil islands; less frequent patterns include neurocytic rosettes or ribbons.",
      "A subset of tumors contain ganglion or ganglioid cells.",
      "Microcalcifications and hyalinized vessels may be present .",
      "A rare case with lipomatous changes has been reported .",
      "Mitotic activity is usually low.",
      "More recently, molecular investigations of extraventricular neurocytomas revealed a high rate of histologically misinterpreted cases and underlined the wide range of morphological heterogeneity in this entity .",
    ],
    ihc: [
      "Diffuse cytoplasmic immunoreactivity for synaptophysin is characteristic of extraventricular neurocytoma and is present in the tumor cells and neuropil islands .",
      "Chromogranin A and NeuN labelling in some cases confirms neuronal differentiation, but it might be very focal.",
      "In nearly half of the cases, immunopositivity for GFAP has been reported .",
      "Expression of OLIG2 has been observed in a subset of extraventricular neurocytoma, but it is more typically negative in the neoplastic cells .",
      "Immunohistochemistry for IDH1 p.R132H is negative .",
      "The Ki-67 proliferation index is usually low (1–3%), but it can be elevated in a subset of cases .",
    ],
    source_diff: [
      "Differential diagnostic considerations usually include oligodendroglioma and other glioneuronal and neuronal tumors. The diffuse cytoplasmic immunoreactivity for synaptophysin in the absence of IDH mutation and 1p/19q codeletion distinguishes extraventricular neurocytoma from oligodendroglioma. Central neurocytomas can typically be distinguished by their intraventricular localization. Because of a wide overlap with various glioneuronal entities, additional molecular analyses are highly recommended in cases with diagnostic uncertainty.",
    ],
    molecular: [
      "Genome-wide DNA methylation profiling has provided evidence for a specific epigenetic signature of extraventricular neurocytoma that is clearly distinct from that of other CNS tumors; it has also indicated that many cases diagnosed histologically (without additional molecular analysis) may represent misdiagnoses.",
      "FGFR1::TACC1 fusion is a highly frequent event in molecularly defined extraventricular neurocytoma, in addition to a small number of other FGFR alterations .",
      "Therefore, additional molecular analyses are strongly advised for a precise diagnosis of extraventricular neurocytoma.",
    ],
    differential: [
      {
        name: "Ganglioglioma",
        points: [
          "Consider Ganglioglioma when its defining profile is present: Ganglioglioma is a well-differentiated, slow-growing glioneuronal neoplasm composed of a combination of neoplastic ganglion and glial cells, which is molecularly characterized by genetic alterations that cause The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Gangliocytoma",
        points: [
          "Consider Gangliocytoma when its defining profile is present: Gangliocytoma is a neuroepithelial neoplasm composed of irregular clusters of mostly mature neoplastic ganglion cells, often with dysplastic features (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma",
        points: [
          "Consider Desmoplastic infantile ganglioglioma / desmoplastic infantile astrocytoma when its defining profile is present: Desmoplastic infantile ganglioglioma (DIG) and desmoplastic infantile astrocytoma (DIA) are benign glioneuronal or glial tumors, occurring predominantly in the cerebral hemispheres of infants, that are driven b The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysembryoplastic neuroepithelial tumor",
        points: [
          "Consider Dysembryoplastic neuroepithelial tumor when its defining profile is present: Dysembryoplastic neuroepithelial tumor (DNT) is a glioneuronal neoplasm in the cerebral cortex of children or young adults, characterized by the occurrence of a pathognomonic glioneuronal element that may be as The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters",
        points: [
          "Consider Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters when its defining profile is present: Diffuse glioneuronal tumor with oligodendroglioma-like features and nuclear clusters (DGONC) is a provisional tumor type proposed as a neuroepithelial tumor characterized by variably differentiated cells freque The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Papillary glioneuronal tumor",
        points: [
          "Consider Papillary glioneuronal tumor when its defining profile is present: Papillary glioneuronal tumor (PGNT) is a glioneuronal tumor exhibiting a biphasic pattern with variable representation of pseudopapillary glial structures and interpapillary neuronal components, and with PRKCA The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Rosette-forming glioneuronal tumor",
        points: [
          "Consider Rosette-forming glioneuronal tumor when its defining profile is present: Rosette-forming glioneuronal tumor (RGNT) is a glioneuronal tumor composed of two distinct histological components: one containing uniform neurocytes forming rosettes and/or perivascular pseudorosettes, and the The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxoid glioneuronal tumor",
        points: [
          "Consider Myxoid glioneuronal tumor when its defining profile is present: Myxoid glioneuronal tumor is a low-grade glioneuronal tumor typically arising in the septal nuclei, septum pellucidum, corpus callosum, or periventricular white matter.",
          "The tumor is characterized by a prolifera The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Diffuse leptomeningeal glioneuronal tumor",
        points: [
          "Consider Diffuse leptomeningeal glioneuronal tumor when its defining profile is present: Diffuse leptomeningeal glioneuronal tumor (DLGNT) is a glioneuronal neoplasm that commonly involves the leptomeninges diffusely, is composed of oligodendrocyte-like cells, and is molecularly characterized by ch The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Multinodular and vacuolating neuronal tumor",
        points: [
          "Consider Multinodular and vacuolating neuronal tumor when its defining profile is present: The multinodular and vacuolating neuronal tumor (MVNT) is composed of monomorphic neuronal elements distributed in discrete and coalescent nodules, with vacuolar changes in tumor cells and their matrix (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease)",
        points: [
          "Consider Dysplastic cerebellar gangliocytoma (Lhermitte-Duclos disease) when its defining profile is present: Dysplastic cerebellar gangliocytoma (Lhermitte–Duclos disease) is a cerebellar mass composed of dysplastic ganglion cells that conform to the existing cortical architecture and thicken the cerebellar folia (CNS The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Central neurocytoma",
        points: [
          "Consider Central neurocytoma when its defining profile is present: Central neurocytoma is an intraventricular neuroepithelial tumor composed of uniform round cells with a neuronal immunophenotype and low proliferation index (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Differential diagnostic considerations usually include oligodendroglioma and other glioneuronal and ",
        points: [
          "Differential diagnostic considerations usually include oligodendroglioma and other glioneuronal and neuronal tumors.",
          "The diffuse cytoplasmic immunoreactivity for synaptophysin in the absence of IDH mutation and 1p/19q codeletion distinguishes extraventricular neurocytoma from oligodendroglioma.",
          "Central neurocytomas can typically be distinguished by their intraventricular localization.",
          "Because of a wide overlap with various glioneuronal entities, additional molecular analyses are highly recommended in cases with diagnostic uncertainty.",
        ],
      },
    ],
  },
  {
    name: "Cerebellar liponeurocytoma",
    group: "Ependymal Tumors",
    clue: "Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
    summary:
      "Cerebellar liponeurocytoma most commonly involves the cerebellar hemispheres, but it can also be located in the paramedian region or vermis and extend to the cerebellopontine angle or fourth ventricle . Recent reports have described a series of cases of liponeurocytoma-like tumors occurring in the cerebellum and in sup",
    clinical: [
      "The mean patient age is 50 years (range: 24–77 years), with peak incidence in the third to sixth decades of life.",
      "There is no significant sex predilection .",
      "Recent reports have described a series of cases of liponeurocytoma-like tumors occurring in the cerebellum and in supratentorial locations, causing confusion between bona fide cerebellar liponeurocytoma and central or extraventricular neurocytoma with lipomatous changes.",
      "There are also reports of multifocal tumors: a principal lesion with a satellite lesion in the opposite hemisphere , multiple bilateral lesions , and even a case associated with leptomeningeal spinal cord nodules at presentation .",
      "Headache and other symptoms and signs of raised intracranial pressure (either from the lesion itself or due to obstructive hydrocephalus) are common presentations.",
    ],
    criteria: [
      "Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
      "Cerebellar liponeurocytoma is composed of a uniform population of small neurocytic cells arranged in sheets and lobules and with regular round to oval nuclei, clear cytoplasm, and poorly defined cell membranes.",
      "The histological hallmark of this entity is focal accumulation of lipid-laden cells that resemble adipocytes but constitute lipid accumulation in neuroepithelial tumor cells.",
      "Features of anaplasia, such as nuclear atypia, necrosis, and microvascular proliferation, are typically absent in primary lesions, but they may be found in recurrent tumors .",
      "The lipidized component may be markedly reduced or even absent in recurrent lesions.",
      "However, some tumor recurrences lack these atypical histopathological features .",
    ],
    histology: [
      "Cerebellar liponeurocytoma is composed of a uniform population of small neurocytic cells arranged in sheets and lobules and with regular round to oval nuclei, clear cytoplasm, and poorly defined cell membranes.",
      "The histological hallmark of this entity is focal accumulation of lipid-laden cells that resemble adipocytes but constitute lipid accumulation in neuroepithelial tumor cells.",
      "Features of anaplasia, such as nuclear atypia, necrosis, and microvascular proliferation, are typically absent in primary lesions, but they may be found in recurrent tumors .",
      "The lipidized component may be markedly reduced or even absent in recurrent lesions.",
      "However, some tumor recurrences lack these atypical histopathological features .",
    ],
    ihc: [
      "Immunohistochemically, there is consistent expression of neuronal markers, including synaptophysin, NeuN, and MAP2.",
      "Focal GFAP expression by tumor cells, which indicates astrocytic differentiation, is observed in most cases .",
      "One report mentioned immunoreactivity for desmin and morphological features of incipient myogenic differentiation .",
    ],
    source_diff: [],
    molecular: [
      "Select molecular testing according to the suspected entity and the integrated diagnostic differential; use sequencing, fusion testing, copy-number analysis, or DNA methylation profiling as indicated.",
    ],
    differential: [
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Supratentorial ependymoma",
    group: "Ependymal Tumors",
    clue: "Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat",
    summary:
      "Supratentorial ependymomas are localized to the cerebral hemispheres and may or may not have an obvious connection to the ventricular system. They occur more frequently in the frontal or parietal lobe than in the temporal or occipital lobe .",
    clinical: [
      "Supratentorial ependymomas of all types affect children and adults, and they account for approximately one third of intracranial ependymomas .",
      "The proportion of ependymomas arising in the supratentorial compartment decreases with age: 41% in children, 27% in adolescents, 12% in young adults, and 11% in adults aged > 45 years ; the declining numbers reflect the increasing frequency of spinal ependymomas with age.",
      "The overall M:F ratio for supratentorial ependymomas is 1.32:1 .",
      "Supratentorial ependymomas are localized to the cerebral hemispheres and may or may not have an obvious connection to the ventricular system.",
      "They occur more frequently in the frontal or parietal lobe than in the temporal or occipital lobe .",
    ],
    criteria: [
      "Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "The diagnosis of supratentorial ependymoma should be used either when genetic analysis has not detected a pathogenic fusion gene involving ZFTA (C11orf95) or YAP1 (not elsewhere classified; NEC) or when such analysis has been unsuccessful or is not feasible (not otherwise specified; NOS) (CNS WHO grade 2 or 3).",
      "The histopathological features of supratentorial ependymomas are quite heterogeneous.",
      "Most have a relatively abrupt interface with adjacent CNS parenchyma.",
      "Diffuse infiltration of adjacent normal tissue is rare and tends to be seen after multiple recurrences.",
      "Perivascular anucleate zones (pseudorosettes) are generally present, but they can be subtle in some examples.",
      "True ependymal rosettes are found in only a minority of cases.",
      "Hyalinization of blood vessels and calcification are frequent.",
      "A vascular pattern seen in supratentorial ependymomas, but not other ependymal tumors, manifests as a branching network of capillary blood vessels .",
      "A clear cell phenotype is found more often in supratentorial ependymomas than in tumors in the posterior fossa or spinal cord.",
      "Tumor cells have round or oval nuclei, which generally show speckled chromatin.",
      "Ultrastructurally, ependymal features (including intracytoplasmic villi, cilia, and complex intercellular zipper-like junctions) are present .",
      "Molecular analysis of supratentorial ependymomas should be directed towards determining ZFTA (C11orf95) and YAP1 status and excluding tumors with similar histopathological features, such as BCOR-altered tumors and MN1-altered astroblastomas.",
      "A variety of diagnostic tests can be used to detect the presence or absence of ZFTA (C11orf95) or YAP1 rearrangements, including interphase FISH, RT-PCR–based sequencing methods, and next-generation sequencing (including transcriptome sequencing) .",
      "In 17–30% of supratentorial ependymomas, ZFTA (C11orf95) and YAP1 fusion genes cannot be detected ; a diagnosis of supratentorial ependymoma can be used in this context.",
      "The detection of a genetic alteration not involving ZFTA (C11orf95) or YAP1 should prompt the use of the suffix “NEC”.",
      "An inability to perform the appropriate analysis prompts the addition of “NOS” .",
    ],
    histology: [
      "The histopathological features of supratentorial ependymomas are quite heterogeneous.",
      "Most have a relatively abrupt interface with adjacent CNS parenchyma.",
      "Diffuse infiltration of adjacent normal tissue is rare and tends to be seen after multiple recurrences.",
      "Perivascular anucleate zones (pseudorosettes) are generally present, but they can be subtle in some examples.",
      "True ependymal rosettes are found in only a minority of cases.",
      "Hyalinization of blood vessels and calcification are frequent.",
      "A vascular pattern seen in supratentorial ependymomas, but not other ependymal tumors, manifests as a branching network of capillary blood vessels .",
      "A clear cell phenotype is found more often in supratentorial ependymomas than in tumors in the posterior fossa or spinal cord.",
      "Tumor cells have round or oval nuclei, which generally show speckled chromatin.",
      "Ultrastructurally, ependymal features (including intracytoplasmic villi, cilia, and complex intercellular zipper-like junctions) are present .",
    ],
    ihc: [
      "Most supratentorial ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels and perivascular pseudorosettes.",
      "Characteristic immunoreactivity for EMA, with a paranuclear dot-like pattern and along luminal surfaces of true ependymal rosettes, can be found in many, but not all, ependymomas.",
      "Expression of OLIG2 is usually present in only a small percentage of tumor cells .",
    ],
    source_diff: [
      "The differential diagnosis of fusion-negative supratentorial ependymomas includes histopathological mimics such as tumors with BCOR internal tandem duplication (ITD) and astroblastomas. These entities should be excluded by appropriate immunohistological and molecular analyses .",
    ],
    molecular: [
      "Molecular analysis of supratentorial ependymomas should be directed towards determining ZFTA (C11orf95) and YAP1 status and excluding tumors with similar histopathological features, such as BCOR-altered tumors and MN1-altered astroblastomas.",
      "A variety of diagnostic tests can be used to detect the presence or absence of ZFTA (C11orf95) or YAP1 rearrangements, including interphase FISH, RT-PCR–based sequencing methods, and next-generation sequencing (including transcriptome sequencing) .",
      "In 17–30% of supratentorial ependymomas, ZFTA (C11orf95) and YAP1 fusion genes cannot be detected ; a diagnosis of supratentorial ependymoma can be used in this context.",
      "The detection of a genetic alteration not involving ZFTA (C11orf95) or YAP1 should prompt the use of the suffix “NEC”.",
      "An inability to perform the appropriate analysis prompts the addition of “NOS” .",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "The differential diagnosis of fusion-negative supratentorial ependymomas includes histopathological ",
        points: [
          "The differential diagnosis of fusion-negative supratentorial ependymomas includes histopathological mimics such as tumors with BCOR internal tandem duplication (ITD) and astroblastomas.",
          "These entities should be excluded by appropriate immunohistological and molecular analyses .",
        ],
      },
    ],
  },
  {
    name: "Supratentorial ependymoma, ZFTA fusion-positive",
    group: "Ependymal Tumors",
    clue: "Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u",
    summary:
      "Most ZFTA fusion–positive cerebral ependymomas arise in the frontal or parietal lobe . Less common sites are the thalamus or the region of the hypothalamus / third ventricle. Intracranial extra-axial ZFTA fusion–positive supratentorial ependymomas have been reported .",
    clinical: [
      "ZFTA fusion–positive tumors account for the majority of supratentorial ependymomas and may occur both in children and in adults.",
      "The percentage of supratentorial ependymomas with a ZFTA fusion varies between retrospective studies: 20–58% in adults, 66–84% in children .",
      "Most ZFTA fusion–positive cerebral ependymomas arise in the frontal or parietal lobe .",
      "Intracranial extra-axial ZFTA fusion–positive supratentorial ependymomas have been reported .",
    ],
    criteria: [
      "Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "In most of these supratentorial ependymomas, ZFTA is fused with RELA.",
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm.",
      "Pseudorosettes are not prominent in most cases, and true ependymal rosettes are rare.",
      "These tumors often have a network of branching capillary blood vessels and a clear cell phenotype.",
      "Diagnostic tests for detecting ZFTA fusions include several sequencing methods, interphase FISH, and molecular inversion profiling .",
      "An RT-PCR method targeting the different types of ZFTA::RELA fusion has been proposed for detecting the most frequent fusions .",
      "DNA methylation–based classification can be helpful, complementing assays directed towards identification of the fusion.",
    ],
    histology: [
      "Supratentorial ependymomas with a ZFTA fusion are demarcated from adjacent brain and composed of cells characterized mainly by round uniform nuclei with speckled chromatin and poorly defined fibrillary cytoplasm.",
      "Pseudorosettes are not prominent in most cases, and true ependymal rosettes are rare.",
      "These tumors often have a network of branching capillary blood vessels and a clear cell phenotype.",
    ],
    ihc: [
      "The immunophenotype of ZFTA fusion–positive ependymomas is similar to that of other ependymomas.",
      "Ependymomas with a ZFTA::RELA fusion show nuclear accumulation of p65 protein (encoded by RELA) and universal cytoplasmic expression of L1CAM .",
      "Immunoreactivity for p65 has been found to have a slightly higher specificity for this molecularly defined ependymoma than does L1CAM expression .",
    ],
    source_diff: [],
    molecular: [
      "Diagnostic tests for detecting ZFTA fusions include several sequencing methods, interphase FISH, and molecular inversion profiling .",
      "An RT-PCR method targeting the different types of ZFTA::RELA fusion has been proposed for detecting the most frequent fusions .",
      "DNA methylation–based classification can be helpful, complementing assays directed towards identification of the fusion.",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Supratentorial ependymoma, YAP1 fusion-positive",
    group: "Ependymal Tumors",
    clue: "Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w",
    summary:
      "Most YAP1 fusion–positive tumors are located within or adjacent to the lateral ventricle.",
    clinical: [
      "YAP1 fusion–positive ependymomas are uncommon and appear to be restricted to young children.",
      "The M:F ratio is 0.3:1 .",
      "YAP1 fusion–positive supratentorial ependymomas are often large by the time of presentation.",
      "In pediatric cohorts, they account for 6–7.4% of supratentorial ependymomas.",
    ],
    criteria: [
      "Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "In most of these supratentorial ependymomas, YAP1 is fused with MAMLD1.",
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain.",
      "They are composed of relatively uniform cells with small to medium-sized round or angulated nuclei.",
      "Ependymal rosettes are present in some tumors.",
      "Clear cell, papillary, or tanycytic phenotypes have not been recorded.",
      "Mitotic activity is highly variable.",
      "In most cases, the fibrillary matrix contains PAS-positive eosinophilic granular bodies .",
      "Frequent findings are vascular endothelial proliferation, dystrophic calcification, and necrosis.",
      "Molecular testing for YAP1 fusions includes several sequencing strategies and interphase FISH .",
      "DNA methylation–based classification can complement tests directed towards identification of the fusion.",
    ],
    histology: [
      "Like other ependymal tumors, YAP1-fused supratentorial ependymomas are demarcated from adjacent brain.",
      "They are composed of relatively uniform cells with small to medium-sized round or angulated nuclei.",
      "Ependymal rosettes are present in some tumors.",
      "Clear cell, papillary, or tanycytic phenotypes have not been recorded.",
      "Mitotic activity is highly variable.",
      "In most cases, the fibrillary matrix contains PAS-positive eosinophilic granular bodies .",
      "Frequent findings are vascular endothelial proliferation, dystrophic calcification, and necrosis.",
    ],
    ihc: [
      "Supratentorial ependymomas with a YAP1 fusion show widespread and strong immunoreactivity for EMA .",
      "There is no expression of L1CAM, and tumor cell nuclei are negative for p65 (RELA).",
    ],
    source_diff: [],
    molecular: [
      "Molecular testing for YAP1 fusions includes several sequencing strategies and interphase FISH .",
      "DNA methylation–based classification can complement tests directed towards identification of the fusion.",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Posterior fossa ependymoma",
    group: "Ependymal Tumors",
    clue: "Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill",
    summary:
      "Posterior fossa ependymomas mainly arise in the region of the fourth ventricle, including the floor, lateral aspect (cerebellar peduncles), and roof. They can also occur in the cerebellopontine angle .",
    clinical: [
      "Clinical presentations vary by age and are often nonspecific (e.g. headache, vomiting, and lethargy).",
      "Posterior fossa ependymomas of all types can develop at any age.",
      "However, they are most frequent in children, with a median age at presentation of 6 years.",
      "They are slightly more frequent in male patients (52–62%) .",
      "According to the Central Brain Tumor Registry of the United States (CBTRUS), approximately 8% of all neuroepithelial neoplasms in children and adolescents (birth to 19 years) are ependymomas .",
    ],
    criteria: [
      "Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "The diagnosis of posterior fossa ependymoma should be used when molecular analysis either cannot assign a molecular group (not elsewhere classified; NEC) or is not feasible (not otherwise specified; NOS) (CNS WHO grade 2 or 3).",
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei.",
      "Nodules of tumor cells, in which the cell density is higher than in surrounding syncytial areas, are common.",
      "Perivascular pseudorosettes are almost always present and are characterized by tumor cells arranged in a radial fashion around blood vessels to create an intervening anucleate zone.",
      "True ependymal rosettes are composed of columnar or cuboidal cells surrounding a central lumen.",
      "They are observed in a minority of cases.",
      "Regions of nuclear pleomorphism, increased mitotic activity in nodules, microcystic change, calcification, and hyalinization of blood vessels can be observed.",
      "Rarely, cartilaginous or osseous metaplasia is present.",
      "Some posterior fossa ependymomas can have a focal papillary or pseudopapillary architecture, including finger-like projections lined by a single layer of cuboidal cells or papillae in which a central blood vessel is covered by layers of tumor cells.",
      "Clear cell change mimicking oligodendroglioma-like cytoplasmic clearing can be present, but this is more common in supratentorial ependymomas.",
      "Tumor cells with elongated nuclei focally arranged in fascicles represent the tanycytic pattern.",
      "If feasible, posterior fossa ependymomas should be assigned to a molecular group (PFA, PFB, or subependymoma) .",
      "Absence of immunoreactivity for H3 p.K28me3 (K27me3) in the nuclei of tumor cells is a surrogate marker for PFA ependymoma , but classification using DNA methylation profiling is considered the standard method, because nuclear expression of H3 p.K28me3 (K27me3) is present in both PFB tumors and subependymomas.",
      "If appropriate molecular testing was successfully performed but did not assign a molecular group, a diagnosis of posterior fossa ependymoma can be used with the suffix “NEC” .",
      "An inability to perform the appropriate analysis prompts the addition of “NOS”.",
    ],
    histology: [
      "Generally, posterior fossa ependymomas are circumscribed tumors composed of uniform small cells with indistinct cytoplasmic borders and round nuclei.",
      "Nodules of tumor cells, in which the cell density is higher than in surrounding syncytial areas, are common.",
      "Perivascular pseudorosettes are almost always present and are characterized by tumor cells arranged in a radial fashion around blood vessels to create an intervening anucleate zone.",
      "True ependymal rosettes are composed of columnar or cuboidal cells surrounding a central lumen.",
      "They are observed in a minority of cases.",
      "Regions of nuclear pleomorphism, increased mitotic activity in nodules, microcystic change, calcification, and hyalinization of blood vessels can be observed.",
      "Rarely, cartilaginous or osseous metaplasia is present.",
      "Some posterior fossa ependymomas can have a focal papillary or pseudopapillary architecture, including finger-like projections lined by a single layer of cuboidal cells or papillae in which a central blood vessel is covered by layers of tumor cells.",
      "Clear cell change mimicking oligodendroglioma-like cytoplasmic clearing can be present, but this is more common in supratentorial ependymomas.",
      "Tumor cells with elongated nuclei focally arranged in fascicles represent the tanycytic pattern.",
    ],
    ihc: [
      "Most posterior fossa ependymomas show immunoreactivity for S100 or GFAP, which is accentuated around blood vessels in perivascular pseudorosettes.",
      "EMA expression can be seen in most ependymomas as a paranuclear dot-like pattern or ring-like structures.",
      "However, this is not an entirely specific finding .",
      "OLIG2 expression is usually absent, and some tumors can show focal immunoreactivity for cytokeratins (including CK7 and CK20) .",
      "Ultrastructure Ependymomas demonstrate characteristic ultrastructural features, including cilia (9 + 2 microtubular pattern), junctional complexes on lateral surfaces of cells, and microvilli on luminal surfaces .",
    ],
    source_diff: [],
    molecular: [
      "If feasible, posterior fossa ependymomas should be assigned to a molecular group (PFA, PFB, or subependymoma) .",
      "Absence of immunoreactivity for H3 p.K28me3 (K27me3) in the nuclei of tumor cells is a surrogate marker for PFA ependymoma , but classification using DNA methylation profiling is considered the standard method, because nuclear expression of H3 p.K28me3 (K27me3) is present in both PFB tumors and subependymomas.",
      "If appropriate molecular testing was successfully performed but did not assign a molecular group, a diagnosis of posterior fossa ependymoma can be used with the suffix “NEC” .",
      "An inability to perform the appropriate analysis prompts the addition of “NOS”.",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Posterior fossa group A (PFA) ependymoma",
    group: "Ependymal Tumors",
    clue: "Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform ",
    summary:
      "Studies correlating neuroimaging with molecular group have suggested that PFA ependymomas more frequently arise from the roof or lateral aspect of the fourth ventricle than from its floor .",
    clinical: [
      "PFA ependymomas predominantly occur in infants and children, with a median age of 3 years .",
      "The proportion of posterior fossa ependymomas classified as PFA aligns with age: > 95% of posterior fossa ependymomas in children aged < 6 years are PFA tumors, and PFB ependymomas are rare in this age group; the proportion of posterior fossa ependymomas classified as PFA decreases to 45–50% in adolescents and 5–11% in adults .",
      "PFA ependymomas are slightly more prevalent in male patients (59–62%) than in female patients .",
      "The clinical features of PFA ependymomas are similar to those described for posterior fossa ependymomas in general.",
    ],
    criteria: [
      "Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "An ependymoma can be classified as PFA by identifying a loss of nuclear H3 p.K28me3 (K27me3) expression in tumor cells or by DNA methylation profiling.",
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 64% of PFA ependymomas in one study .",
      "Clear cell, papillary, and tanycytic patterns can be focally present .",
      "Demonstration of loss of H3 p.K28me3 (K27me3) by immunohistochemistry, or assignment to the PFA molecular group by DNA methylation profiling, is required for a diagnosis of PFA ependymoma.",
      "Because of its prognostic significance across all posterior fossa ependymomas , gain of chromosome 1q is often assessed in PFA ependymomas, even though molecular subtypes of PFA ependymoma with or without 1q gain can be associated with a poor outcome .",
    ],
    histology: [
      "PFA ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 64% of PFA ependymomas in one study .",
      "Clear cell, papillary, and tanycytic patterns can be focally present .",
    ],
    ihc: [
      "PFA ependymomas exhibit a reduction in H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry .",
      "Retained H3 p.K28me3 (K27me3) immunoreactivity in endothelial cells can be used as an internal control for the method.",
      "In most PFA ependymomas, tumor cells show a global reduction in H3 p.K28me3 (K27me3) expression, but variability in the proportion of immunonegative cells can be encountered.",
      "A cut-off value of 80% immunopositive cells has been proposed, above which an ependymoma is more likely to fall into the PFB molecular group .",
    ],
    source_diff: [],
    molecular: [
      "Demonstration of loss of H3 p.K28me3 (K27me3) by immunohistochemistry, or assignment to the PFA molecular group by DNA methylation profiling, is required for a diagnosis of PFA ependymoma.",
      "Because of its prognostic significance across all posterior fossa ependymomas , gain of chromosome 1q is often assessed in PFA ependymomas, even though molecular subtypes of PFA ependymoma with or without 1q gain can be associated with a poor outcome .",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Posterior fossa group B (PFB) ependymoma",
    group: "Ependymal Tumors",
    clue: "Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform ",
    summary:
      "PFB ependymomas can occur anywhere in the region of the fourth ventricle and its exit foramina, but they are thought to arise more frequently from the floor of the fourth ventricle than from the roof or lateral recesses .",
    clinical: [
      "PFB ependymomas occur in adults and are more common in adolescents than in children and infants .",
      "The median age at presentation is 30 years (range: 1–72 years).",
      "The relative frequency of the PFB molecular group among ependymomas is closely related to age: 90% in adults, 20–50% in adolescents, and < 5% in infants and children aged < 5 years .",
      "PFB ependymomas are slightly more prevalent in female patients (55–59%) .",
      "Among the five molecular subgroups of PFB ependymoma , PFB-1, PFB-2, and PFB-3 tumors tend to occur in patients aged 25–30 years.",
    ],
    criteria: [
      "Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix.",
      "An ependymoma can be classified as PFB by DNA methylation profiling.",
      "Retention of nuclear H3 p.K28me3 (K27me3) expression is observed, but it is not specific for PFB ependymomas.",
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 41% of PFB ependymomas in a study of 51 patients .",
      "Practically all PFB ependymomas exhibit retention of H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry .",
      "Rare ependymomas with a DNA methylation profile that classifies them as PFB show reduced H3 p.K28me3 (K27me3), but the significance of these findings is unclear .",
      "Demonstration of H3 p.K28me3 (K27me3) retention by immunohistochemistry or assignment to the PFB molecular group by DNA methylation profiling is required for a diagnosis of PFB ependymoma.",
      "Nuclear expression of H3 p.K28me3 (K27me3) is retained in PFB ependymomas, but this finding is not specific.",
      "PFB ependymomas exhibit widespread cytogenetic abnormalities, with many chromosomal aberrations , the most common of which include loss of 22q, monosomy 6, and trisomy 18 (in 50–60% of cases).",
    ],
    histology: [
      "PFB ependymomas show the histopathological features described for posterior fossa ependymomas in general.",
      "High-grade features, including prominent mitotic activity and microvascular proliferation, were observed in 41% of PFB ependymomas in a study of 51 patients .",
      "Practically all PFB ependymomas exhibit retention of H3 p.K28me3 (K27me3), which can be readily assessed by immunohistochemistry .",
      "Rare ependymomas with a DNA methylation profile that classifies them as PFB show reduced H3 p.K28me3 (K27me3), but the significance of these findings is unclear .",
      "PFB ependymomas show varying degrees of anaplasia and have been regarded as CNS WHO grade 2 or 3 on this basis.",
      "Such information should be included in an integrated diagnosis .",
    ],
    ihc: [
      "Use a focused immunohistochemical panel guided by morphology and the differential diagnosis; no single marker should replace integrated classification.",
    ],
    source_diff: [],
    molecular: [
      "Demonstration of H3 p.K28me3 (K27me3) retention by immunohistochemistry or assignment to the PFB molecular group by DNA methylation profiling is required for a diagnosis of PFB ependymoma.",
      "Nuclear expression of H3 p.K28me3 (K27me3) is retained in PFB ependymomas, but this finding is not specific.",
      "PFB ependymomas exhibit widespread cytogenetic abnormalities, with many chromosomal aberrations , the most common of which include loss of 22q, monosomy 6, and trisomy 18 (in 50–60% of cases).",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Spinal ependymoma",
    group: "Ependymal Tumors",
    clue: "Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve",
    summary:
      "Spinal ependymomas occur along the spinal canal and are intramedullary tumors . A cervical or cervicothoracic localization is common, in contrast to myxopapillary ependymomas, which nearly always arise in the lumbar region .",
    clinical: [
      "Ependymal tumors represent 20.6% of primary spinal tumors in children and adolescents and 17.6% of those in adults aged ≥ 20 years, according to a statistical report from the Central Brain Tumor Registry of the United States (CBTRUS) .",
      "Across various studies, the median age at diagnosis of patients with spinal ependymoma ranges from 25 to 45 years.",
      "The reported M:F ratio ranges from 1:1.3 to 2.16:1 .",
      "Spinal ependymomas occur along the spinal canal and are intramedullary tumors .",
      "Spinal ependymomas do not have clinical features specific enough to differentiate them from other intramedullary spinal cord tumors.",
    ],
    criteria: [
      "Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low level of mitotic activity.",
      "By definition, the tumor lacks features of myxopapillary ependymoma or subependymoma.",
      "When testing is feasible, MYCN amplification is absent.",
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes.",
      "The cells are embedded in a fibrillary glial matrix and have a moderate to high cell density.",
      "A characteristic feature is the anucleate perivascular zone (pseudorosette); tumor cells are radially arranged around a blood vessel, with fibrillary processes creating the perivascular anucleate zone.",
      "True ependymal rosettes with a central lumen or ependymal tubules are present in only a minority of cases.",
      "Mitotic activity in the classic form is usually low.",
      "The rare tanycytic pattern with prominent spindle-shaped cells and bipolar processes, often in the absence of pseudorosettes, is overrepresented in spinal ependymomas and must be distinguished from pilocytic astrocytoma and schwannoma.",
      "Ependymomas can show calcification, hemorrhage, necrosis, cystic change, metaplastic cartilage, and bone and myxoid degeneration.",
      "Spinal ependymomas with a typical morphology are easily recognized.",
      "They are also readily distinguished from myxopapillary ependymomas, subependymomas, and MYCN-amplified spinal ependymoma by their DNA methylation profile .",
      "Occasionally, a spinal ependymoma with a classic morphology exhibits the DNA methylation profile of myxopapillary ependymoma .",
      "The prognostic significance of a myxopapillary DNA methylation profile in the face of an ostensibly discordant morphological diagnosis remains to be clarified.",
      "Frequent loss of chromosome 22q and mutations of NF2 are characteristic of spinal ependymomas .",
      "By definition, MYCN amplification is absent.",
    ],
    histology: [
      "The classic form of spinal ependymoma is composed of isomorphic glial cells with round to oval nuclei and indistinct cytoplasmic membranes.",
      "The cells are embedded in a fibrillary glial matrix and have a moderate to high cell density.",
      "A characteristic feature is the anucleate perivascular zone (pseudorosette); tumor cells are radially arranged around a blood vessel, with fibrillary processes creating the perivascular anucleate zone.",
      "True ependymal rosettes with a central lumen or ependymal tubules are present in only a minority of cases.",
      "Mitotic activity in the classic form is usually low.",
      "The rare tanycytic pattern with prominent spindle-shaped cells and bipolar processes, often in the absence of pseudorosettes, is overrepresented in spinal ependymomas and must be distinguished from pilocytic astrocytoma and schwannoma.",
      "Ependymomas can show calcification, hemorrhage, necrosis, cystic change, metaplastic cartilage, and bone and myxoid degeneration.",
    ],
    ihc: [
      "Immunoreactivity for GFAP, S100, and vimentin is characteristic, as is focal dot-like or ring-like intracytoplasmic immunoreactivity for EMA.",
      "In contrast to astrocytic spinal neoplasms, spinal ependymomas are largely negative for OLIG2.",
      "They do not express SOX10, which is found in schwannoma, pilocytic astrocytoma, and most diffuse gliomas.",
      "Electron microscopy Ultrastructurally, ependymal features including intracytoplasmic villi, cilia, and complex intercellular zipper-like junctions are present .",
    ],
    source_diff: [],
    molecular: [
      "Spinal ependymomas with a typical morphology are easily recognized.",
      "They are also readily distinguished from myxopapillary ependymomas, subependymomas, and MYCN-amplified spinal ependymoma by their DNA methylation profile .",
      "Occasionally, a spinal ependymoma with a classic morphology exhibits the DNA methylation profile of myxopapillary ependymoma .",
      "The prognostic significance of a myxopapillary DNA methylation profile in the face of an ostensibly discordant morphological diagnosis remains to be clarified.",
      "Frequent loss of chromosome 22q and mutations of NF2 are characteristic of spinal ependymomas .",
      "By definition, MYCN amplification is absent.",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Spinal ependymoma, MYCN-amplified",
    group: "Ependymal Tumors",
    clue: "Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril",
    summary:
      "Tumors are localized to the spinal cord, primarily to the cervical or thoracic levels (in 78% of cases) and less frequently to lumbar levels (in 7% of cases) .",
    clinical: [
      "MYCN-amplified spinal ependymoma is rare, with only 27 reported cases (17 in women and 10 in men; M:F ratio: 1:1.7).",
      "The median age at presentation was 31 years (range: 12–56 years) .",
      "Tumors are localized to the spinal cord, primarily to the cervical or thoracic levels (in 78% of cases) and less frequently to lumbar levels (in 7% of cases) .",
      "Presenting symptoms depend on tumor location, but they typically include neck or back pain and progressive numbness and weakness in the extremities.",
    ],
    criteria: [
      "Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibrillary matrix.",
      "Practically all tumors display microvascular proliferation, necrosis, and a high mitotic count.",
      "By definition, MYCN amplification is demonstrated in tumor cells.",
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture .",
      "Most have high-grade histopathological features, such as a high N:C ratio, plentiful mitotic activity, microvascular proliferation, and necrosis.",
      "Two of four tumors with CNS WHO grade 2 histopathological features at presentation progressed to CNS WHO grade 3 at recurrence .",
      "High-level MYCN amplification is present and remains stable at relapse .",
      "Additional chromosomal copy-number alterations occur with variable frequency and include loss of chromosome 10 (in 32% of cases) and focal losses on chromosome 11q (in 26% of cases).",
      "Demonstration of H3 p.K28me3 (K27me3) loss by immunohistochemistry requires assessment of histone H3 genes for genetic alterations, because MYCN amplification can be found in diffuse midline gliomas with H3 p.K28M (K27M) mutation .",
    ],
    histology: [
      "MYCN-amplified spinal ependymomas display perivascular anucleate zones (pseudorosettes) and can have a papillary or pseudopapillary architecture .",
      "Most have high-grade histopathological features, such as a high N:C ratio, plentiful mitotic activity, microvascular proliferation, and necrosis.",
      "Two of four tumors with CNS WHO grade 2 histopathological features at presentation progressed to CNS WHO grade 3 at recurrence .",
    ],
    ihc: [
      "On immunohistochemistry, tumor cells express GFAP and show a focal cytoplasmic dot-like pattern of EMA expression .",
      "MYCN protein expression can be detected by immunohistochemistry .",
      "Cells are immunonegative for OLIG2 .",
      "Nuclear immunoreactivity for H3 p.K28me3 (K27me3) was variably present in the 4 tumors from one study , but was retained in all tumors from another .",
    ],
    source_diff: [],
    molecular: [
      "High-level MYCN amplification is present and remains stable at relapse .",
      "Additional chromosomal copy-number alterations occur with variable frequency and include loss of chromosome 10 (in 32% of cases) and focal losses on chromosome 11q (in 26% of cases).",
      "Demonstration of H3 p.K28me3 (K27me3) loss by immunohistochemistry requires assessment of histone H3 genes for genetic alterations, because MYCN amplification can be found in diffuse midline gliomas with H3 p.K28M (K27M) mutation .",
      "MYCN-amplified spinal ependymoma has a DNA methylation profile distinct from that of other ependymal tumor types, as well as from that of neuroblastoma and MYCN-amplified pediatric-type glioblastoma .",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Myxopapillary ependymoma",
    group: "Ependymal Tumors",
    clue: "Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO ",
    summary:
      "Myxopapillary ependymomas arise almost exclusively in, and are the most common tumors of, the conus medullaris and filum terminale, accounting for 83% of 320 filum terminale ependymomas in one study . Multifocality has been described , as have examples originating in the cervicothoracic spinal cord , lateral ventricle ",
    clinical: [
      "Incidence rates of 0.6–1.0 cases per 1 million person-years have been reported from the USA and Europe, with an M:F ratio of 1.4–2:1 .",
      "Myxopapillary ependymomas occur at all ages but most commonly affect adults; peak case rates were found in patients aged 25–29 years and 45–59 years in one SEER Program analysis (USA, 2004–2012, n = 773) .",
      "In another SEER Program study (of cases in patients aged ≤ 21 years; USA, 1973–2012, n = 122), the median patient age was 16 years, and 63% of cases occurred in male patients .",
      "Multifocality has been described , as have examples originating in the cervicothoracic spinal cord , lateral ventricle , fourth ventricle , and brain .",
    ],
    criteria: [
      "Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO grade 2).",
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts.",
      "Myxoid material, highlighted by PAS and Alcian blue positivity, is useful in the identification of examples manifesting little, if any, papillary structure and composed instead of epithelioid cells in confluent sheets.",
      "Tumor cell spindling and fascicular growth are common, and subpopulations of pleomorphic tumor giant cells can be seen in otherwise typical cases .",
      "Eosinophilic, PAS-positive spherules (balloons) that exhibit spiculated reticulin staining are an occasional feature.",
      "Common secondary alterations include fibrosis, hemorrhage, and haemosiderin deposition.",
      "Typical myxopapillary ependymomas show, at most, only low-level mitotic activity, and the Ki-67 labelling index usually does not exceed 2–3% .",
      "Exceptional examples termed “anaplastic myxopapillary ependymomas” manifest regional hypercellularity and reduced mucin in association with at least two of the following features: ≥ 5 mitoses/mm2, Ki-67 labelling index ≥ 10%, microvascular proliferation, and spontaneous necrosis .",
      "Myxopapillary ependymomas with a classic morphology are easily recognized, but these tumors also have a unique DNA methylation profile .",
      "However, tumors with the histopathological features of classic ependymoma, particularly lumbosacral lesions with tanycytic or papillary patterns, may also cluster with myxopapillary ependymomas .",
      "This reflects the fact that myxopapillary ependymomas can exhibit little myxoid change, form pseudorosettes of the usual ependymal type, and manifest spindle cell (tanycytic) features.",
      "The prognostic significance of a myxopapillary ependymoma methylation profile in the context of uncharacteristic histopathological features remains to be clarified.",
      "Recurrent gains of chromosome 16 and losses of chromosome 10 have been documented .",
    ],
    histology: [
      "Prototypical is the radial arrangement of cuboidal to elongated tumor cells around hyalinized fibrovascular cores in papillary fashion, with accumulation of basophilic, myxoid material around blood vessels and in microcysts.",
      "Myxoid material, highlighted by PAS and Alcian blue positivity, is useful in the identification of examples manifesting little, if any, papillary structure and composed instead of epithelioid cells in confluent sheets.",
      "Tumor cell spindling and fascicular growth are common, and subpopulations of pleomorphic tumor giant cells can be seen in otherwise typical cases .",
      "Eosinophilic, PAS-positive spherules (balloons) that exhibit spiculated reticulin staining are an occasional feature.",
      "Common secondary alterations include fibrosis, hemorrhage, and haemosiderin deposition.",
      "Typical myxopapillary ependymomas show, at most, only low-level mitotic activity, and the Ki-67 labelling index usually does not exceed 2–3% .",
      "Exceptional examples termed “anaplastic myxopapillary ependymomas” manifest regional hypercellularity and reduced mucin in association with at least two of the following features: ≥ 5 mitoses/mm2, Ki-67 labelling index ≥ 10%, microvascular proliferation, and spontaneous necrosis .",
    ],
    ihc: [
      "Diffuse immunoreactivity for GFAP distinguishes myxopapillary ependymomas from metastatic carcinomas, paragangliomas, schwannomas, chordomas, and myxoid chondrosarcomas .",
      "Immunolabelling for S100 is also typical, and reactivity for CD99 and CD56 is frequent .",
      "Tumor cell nuclei are not immunoreactive for OLIG2, and dot-like cytoplasmic EMA labelling is typically absent.",
      "Myxopapillary ependymomas are often labeled by the AE1/AE3 pancytokeratin cocktail, but they are generally negative for CAM5.2, CK5/6, CK7, and CK20 .",
    ],
    source_diff: [],
    molecular: [
      "Myxopapillary ependymomas with a classic morphology are easily recognized, but these tumors also have a unique DNA methylation profile .",
      "However, tumors with the histopathological features of classic ependymoma, particularly lumbosacral lesions with tanycytic or papillary patterns, may also cluster with myxopapillary ependymomas .",
      "This reflects the fact that myxopapillary ependymomas can exhibit little myxoid change, form pseudorosettes of the usual ependymal type, and manifest spindle cell (tanycytic) features.",
      "The prognostic significance of a myxopapillary ependymoma methylation profile in the context of uncharacteristic histopathological features remains to be clarified.",
      "Recurrent gains of chromosome 16 and losses of chromosome 10 have been documented .",
      "Because myxopapillary ependymomas may exhibit leptomeningeal dissemination, some groups have recommended that craniospinal MRI and cerebrospinal fluid cytology should be performed after initial surgery and diagnosis .",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Subependymoma",
        points: [
          "Consider Subependymoma when its defining profile is present: Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
  {
    name: "Subependymoma",
    group: "Ependymal Tumors",
    clue: "Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
    summary:
      "The most frequent sites of origin are the fourth ventricle (in 50–60% of cases) and lateral ventricles (30–35%), followed distantly by the third ventricle and spinal cord, where subependymomas preferentially arise as eccentric masses in cervicothoracic segments . Cerebral, cerebellar, bulbar, and cerebellopontine angle",
    clinical: [
      "A SEER Program analysis of 466 intracranial cases (USA, 2004–2013) found an overall incidence of 0.055 cases per 100 000 person-years, an M:F ratio of approximately 2.5:1, and peak incidence in adults aged 40–84 years .",
      "The most frequent sites of origin are the fourth ventricle (in 50–60% of cases) and lateral ventricles (30–35%), followed distantly by the third ventricle and spinal cord, where subependymomas preferentially arise as eccentric masses in cervicothoracic segments .",
    ],
    criteria: [
      "Subependymoma is a glioma characterized by the clustering of uniform to mildly pleomorphic tumor cell nuclei in an abundant fibrillary matrix prone to microcystic change (CNS WHO grade 1).",
      "Typical is the clustering of small, euchromatic, and round to oval nuclei (resembling those of subependymal glia) in a voluminous matrix of fibrillary cytoplasmic processes.",
      "Microcystic changes are common, particularly in lateral ventricular subependymomas, as are calcifications.",
      "Nuclear pleomorphism and proliferative microvascular abnormalities may be encountered, with exceptional cases exhibiting low-level mitotic activity and even non-palisading necrosis .",
      "Just as classic ependymomas can focally exhibit subependymoma-type histology, so may subependymomas focally manifest perivascular pseudorosettes.",
      "Subependymoma-predominant neoplasms with nodules of classic ependymoma (termed “mixed ependymoma–subependymoma”) are well recognized and mentioned below (see Prognosis and prediction).",
      "Otherwise typical examples may also harbour elements of fibrillary astroglial or (rarely) gemistocytic morphology.",
      "Sclerotic and ectatic blood vessels, hemorrhage, and haemosiderin deposits are common.",
      "Oddities include melanotic pigmentation and sarcomatous change .",
      "Molecular analyses have shown subependymomas in the supratentorial, posterior fossa, and spinal anatomical compartments to have distinct DNA methylation profiles .",
      "However, although tumors at each site with the histopathological features of subependymoma cluster together in these analyses and are not placed in other molecular groups, some tumors eliciting the morphological diagnosis of classic ependymoma may also cluster with typical subependymomas .",
      "The prognostic significance of a subependymoma DNA methylation profile in the face of an ostensibly discordant morphological diagnosis remains to be clarified.",
    ],
    histology: [
      "Typical is the clustering of small, euchromatic, and round to oval nuclei (resembling those of subependymal glia) in a voluminous matrix of fibrillary cytoplasmic processes.",
      "Microcystic changes are common, particularly in lateral ventricular subependymomas, as are calcifications.",
      "Nuclear pleomorphism and proliferative microvascular abnormalities may be encountered, with exceptional cases exhibiting low-level mitotic activity and even non-palisading necrosis .",
      "Just as classic ependymomas can focally exhibit subependymoma-type histology, so may subependymomas focally manifest perivascular pseudorosettes.",
      "Subependymoma-predominant neoplasms with nodules of classic ependymoma (termed “mixed ependymoma–subependymoma”) are well recognized and mentioned below (see Prognosis and prediction).",
      "Otherwise typical examples may also harbour elements of fibrillary astroglial or (rarely) gemistocytic morphology.",
      "Sclerotic and ectatic blood vessels, hemorrhage, and haemosiderin deposits are common.",
      "Oddities include melanotic pigmentation and sarcomatous change .",
    ],
    ihc: [
      "Subependymomas manifest diffuse GFAP immunoreactivity and can display focal dot-like EMA expression, but they do so less frequently than ependymomas .",
      "Some are reported to express OLIG2 or synaptophysin , but this appears to be exceptional .",
      "SOX10 labelling, if present, is limited .",
      "Also reported is the expression of HIF1α, TOP2B, MDM2, nucleolin, and phosphorylated STAT3 , as well as aquaporin-1 and aquaporin-4 .",
      "Subependymomas retain ATRX expression, do not express the mutant IDH1 p.R132H or BRAF p.V600E gene products, and (except for rare bulbar lesions) are negative for H3 p.K28M (K27M), but they retain H3 p.K28me3 (K27me3) expression .",
    ],
    source_diff: [],
    molecular: [
      "Molecular analyses have shown subependymomas in the supratentorial, posterior fossa, and spinal anatomical compartments to have distinct DNA methylation profiles .",
      "However, although tumors at each site with the histopathological features of subependymoma cluster together in these analyses and are not placed in other molecular groups, some tumors eliciting the morphological diagnosis of classic ependymoma may also cluster with typical subependymomas .",
      "The prognostic significance of a subependymoma DNA methylation profile in the face of an ostensibly discordant morphological diagnosis remains to be clarified.",
      "Recurrent copy-number abnormalities are chromosome 19 loss and partial chromosome 6 loss (infratentorial cases) .",
      "TRPS1 mutations have been documented .",
      "Rare brainstem gliomas exhibiting subependymoma-type histology are H3 p.K28M (K27M)–mutant .",
    ],
    differential: [
      {
        name: "Cerebellar liponeurocytoma",
        points: [
          "Consider Cerebellar liponeurocytoma when its defining profile is present: Cerebellar liponeurocytoma is a cerebellar neoplasm with advanced neuronal or neurocytic differentiation, variable glial differentiation, and focal lipoma-like changes (CNS WHO grade 2).",
          "The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma",
        points: [
          "Consider Supratentorial ependymoma when its defining profile is present: Supratentorial ependymoma is a circumscribed supratentorial glioma that focally demonstrates pseudorosettes or ependymal rosettes and comprises uniform small cells with round nuclei embedded in a fibrillary mat The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, ZFTA fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, ZFTA fusion-positive when its defining profile is present: Supratentorial ependymoma, ZFTA fusion–positive, is a circumscribed supratentorial glioma with a ZFTA (formerly C11orf95) fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising u The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Supratentorial ependymoma, YAP1 fusion-positive",
        points: [
          "Consider Supratentorial ependymoma, YAP1 fusion-positive when its defining profile is present: Supratentorial ependymoma, YAP1 fusion–positive, is a circumscribed supratentorial glioma with a YAP1 fusion gene, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells w The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa ependymoma",
        points: [
          "Consider Posterior fossa ependymoma when its defining profile is present: Posterior fossa ependymoma is a circumscribed glioma in the posterior fossa, focally demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrill The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group A (PFA) ependymoma",
        points: [
          "Consider Posterior fossa group A (PFA) ependymoma when its defining profile is present: Posterior fossa group A (PFA) ependymoma is a circumscribed posterior fossa glioma aligned with the PFA molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Posterior fossa group B (PFB) ependymoma",
        points: [
          "Consider Posterior fossa group B (PFB) ependymoma when its defining profile is present: Posterior fossa group B (PFB) ependymoma is a circumscribed posterior fossa glioma aligned with the PFB molecular group of ependymomas, demonstrating pseudorosettes or ependymal rosettes and comprising uniform The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma",
        points: [
          "Consider Spinal ependymoma when its defining profile is present: Spinal ependymoma is a demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform small cells with round nuclei embedded in a fibrillary matrix and, typically, a low leve The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Spinal ependymoma, MYCN-amplified",
        points: [
          "Consider Spinal ependymoma, MYCN-amplified when its defining profile is present: Spinal ependymoma, MYCN-amplified, is a well-demarcated spinal glioma demonstrating pseudorosettes or ependymal rosettes and comprising uniform, densely packed small cells with round nuclei embedded in a fibril The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
      {
        name: "Myxopapillary ependymoma",
        points: [
          "Consider Myxopapillary ependymoma when its defining profile is present: Myxopapillary ependymoma is a glial neoplasm characterized by the radial arrangement of spindled or epithelioid tumor cells around blood vessels with perivascular myxoid change and microcyst formation (CNS WHO The current diagnosis is favored when its own defining molecular and morphologic criteria are met.",
        ],
      },
    ],
  },
];

const groups = [
  "All Categories",
  ...Array.from(new Set(entities.map((e) => e.group))),
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
      <h3 className="mb-2 border-b border-slate-200 pb-2 text-sm font-extrabold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      {children}
    </section>
  );
}

const diagnosticWorkflow = [
  [
    "1. Establish the clinical-radiologic context",
    "Record age, tumor location (hemispheric, midline, posterior fossa, ventricular, spinal, or leptomeningeal), growth pattern, imaging features, and seizure history. Distinguish an infiltrating lesion from a circumscribed mass.",
  ],
  [
    "2. Classify the growth pattern and lineage",
    "Determine whether the tumor is an adult-type diffuse glioma, pediatric-type diffuse glioma, circumscribed astrocytic glioma, glioneuronal/neuronal tumor, or ependymal tumor. Assess astrocytic, oligodendroglial, neuronal, ependymal, and embryonal features.",
  ],
  [
    "3. Perform the initial immunohistochemical screen",
    "For diffuse gliomas, begin with IDH1 p.R132H, ATRX, and p53; add OLIG2 and GFAP to support glial lineage. Use H3 K27M and H3K27me3 for midline tumors, H3 G34R/V for hemispheric high-grade tumors, and lineage-directed markers for circumscribed or glioneuronal lesions.",
  ],
  [
    "4. Apply entity-defining molecular tests",
    "Use IDH1/IDH2 sequencing, whole-arm 1p/19q assessment, CDKN2A/B copy-number analysis, TERT promoter/EGFR/+7/−10 testing, histone mutation testing, fusion analysis, and DNA methylation profiling according to the diagnostic branch.",
  ],
  [
    "5. Assign the integrated diagnosis and CNS WHO grade",
    "Integrate histology, immunophenotype, molecular findings, age, and site. For entities with molecularly defined grading criteria, do not assign grade from morphology alone. State limitations when testing is incomplete.",
  ],
];

const adultMolecular = [
  [
    "Astrocytoma, IDH-mutant",
    "Diffuse infiltrating astrocytic glioma; grade 2–4 spectrum. Grade 2: low cellularity and absent/rare mitoses. Grade 3: increased mitotic activity and anaplasia; necrosis and microvascular proliferation are absent. Grade 4: necrosis and/or microvascular proliferation, OR CDKN2A/B homozygous deletion even without these histologic features.",
    "IDH1/IDH2 mutation; ATRX loss and TP53 alteration support astrocytic lineage; exclude whole-arm 1p/19q codeletion. Assess CDKN2A/B copy number in all relevant cases, particularly when grade 4 is not morphologically apparent.",
    "An IDH1- or IDH2-mutant diffuse glioma without whole-arm 1p/19q codeletion is classified as astrocytoma, IDH-mutant. Assign CNS WHO grade 2, 3, or 4 using histology and CDKN2A/B status; do not use the term glioblastoma for grade 4 IDH-mutant astrocytoma.",
  ],
  [
    "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted",
    "Grade 2: generally lower cellularity, mild atypia, and absent/low mitotic activity. Grade 3: usually increased cellularity and cytologic atypia with brisk mitotic activity; microvascular proliferation and/or necrosis may be present. No universally validated mitotic cutoff separates grades; rare mitoses alone do not establish grade 3.",
    "Both an IDH1/IDH2 mutation and whole-arm 1p/19q codeletion are required. TERT promoter mutation is common and ATRX is usually retained. Consider CDKN2A/B homozygous deletion in borderline or high-grade cases.",
    "The combination of IDH mutation and whole-arm 1p/19q codeletion defines oligodendroglioma. Grade according to the overall histologic pattern; integrate mitotic activity, cellularity, atypia, microvascular proliferation, necrosis, and clinical-radiologic context.",
  ],
  [
    "Glioblastoma, IDH-wildtype",
    "Highly cellular, diffusely infiltrating astrocytic glioma with cytologic atypia and usually brisk mitotic activity. Necrosis (often with pseudopalisading) and/or microvascular proliferation with multilayered endothelial cells or glomeruloid tufts is diagnostic histology. Either necrosis or microvascular proliferation is sufficient in an IDH- and H3-wildtype diffuse astrocytic glioma.",
    "Confirm IDH-wildtype and H3-wildtype status. In an adult diffuse astrocytic glioma, test TERT promoter, EGFR amplification, and whole-chromosome +7/−10 when histologic grade 4 features are absent. MGMT promoter methylation is predictive, not a defining diagnostic criterion.",
    "CNS WHO grade 4 is assigned when an IDH-wildtype, H3-wildtype adult diffuse astrocytic glioma shows necrosis, microvascular proliferation, TERT promoter mutation, EGFR amplification, or +7/−10. Exclude pediatric-type and other molecularly defined high-grade gliomas when age, site, or morphology is atypical.",
  ],
];

const pediatricMolecular = [
  [
    "Diffuse low-grade glioma, MYB/MYBL1-altered / angiocentric glioma",
    "Test for MYB or MYBL1 rearrangements/fusions (including MYB::QKI in angiocentric glioma); use RNA-based fusion testing or DNA sequencing as appropriate.",
  ],
  [
    "Diffuse low-grade glioma, MAPK pathway-altered / PLNTY / related lesions",
    "Assess MAPK pathway alterations, including BRAF, FGFR1, FGFR2/3, NF1, and other relevant genes; methylation profiling may resolve overlapping entities.",
  ],
  [
    "Diffuse midline glioma, H3 K27-altered",
    "Assess H3 K27 alteration (H3 K27M or alternative mechanisms), H3K27me3 loss, and relevant EZHIP/EGFR alterations; integrate anatomic midline location.",
  ],
  [
    "Diffuse hemispheric glioma, H3 G34-mutant",
    "Test H3-3A (H3F3A) G34R/V mutations; ATRX loss and TP53 alteration are common supportive findings.",
  ],
  [
    "Diffuse pediatric-type high-grade glioma, H3-wildtype and IDH-wildtype",
    "Exclude IDH and H3 alterations; use DNA methylation profiling and assess molecular subgroups including PDGFRA, EGFR, MYCN, and relevant pathway alterations.",
  ],
  [
    "Infant-type hemispheric glioma",
    "Prioritize fusion testing for NTRK1/2/3, ALK, ROS1, and MET; BRAF and other kinase alterations may occur. RNA-based fusion panels are useful.",
  ],
];

const circumscribedMolecular = [
  [
    "Pilocytic astrocytoma",
    "Assess MAPK pathway activation, especially KIAA1549::BRAF fusion and BRAF alterations; test other MAPK genes when the presentation is atypical.",
  ],
  [
    "High-grade astrocytoma with piloid features",
    "DNA methylation profiling is central to classification; common alterations include CDKN2A/B loss and MAPK pathway changes, with ATRX alterations in a subset.",
  ],
  [
    "Pleomorphic xanthoastrocytoma",
    "BRAF p.V600E is common; assess CDKN2A/B homozygous deletion, particularly in high-grade tumors. Methylation profiling can assist in difficult cases.",
  ],
  [
    "Subependymal giant cell astrocytoma",
    "Evaluate TSC1/TSC2 alterations in the appropriate clinical setting; correlate with tuberous sclerosis complex.",
  ],
  [
    "Astroblastoma, MN1-altered",
    "Demonstrate MN1 alteration/fusion; DNA methylation profiling can support classification.",
  ],
];

const glioneuronalMolecular = [
  [
    "Ganglioglioma / pleomorphic xanthoastrocytoma",
    "BRAF p.V600E and other MAPK pathway alterations are common; CDKN2A/B deletion may prompt consideration of pleomorphic xanthoastrocytoma.",
  ],
  [
    "Dysembryoplastic neuroepithelial tumor",
    "FGFR1 alterations, including mutations or duplications, support the diagnosis in the appropriate specific glioneuronal element.",
  ],
  [
    "PLNTY",
    "FGFR2/FGFR3 fusions and strong diffuse CD34 expression are characteristic clues; BRAF alterations may also occur.",
  ],
  [
    "Myxoid glioneuronal tumor",
    "PDGFRA p.K385 alteration is characteristic and helps separate this entity from conventional dysembryoplastic neuroepithelial tumor.",
  ],
  [
    "Diffuse leptomeningeal glioneuronal tumor",
    "KIAA1549::BRAF and 1p loss (sometimes 1p/19q codeletion) are common; IDH mutation is absent. Methylation profiling is useful.",
  ],
  [
    "Multinodular and vacuolating neuronal tumor",
    "MAP2K1 alterations are common; BRAF alterations occur less often.",
  ],
  [
    "Rosette-forming glioneuronal tumor",
    "FGFR1 alterations, including tyrosine kinase domain duplication, may be present.",
  ],
];

const ependymalMolecular = [
  [
    "Supratentorial ependymoma",
    "Classify by fusion-defined group: ZFTA fusion-positive or YAP1 fusion-positive. RNA fusion testing and/or DNA methylation profiling may be required.",
  ],
  [
    "Posterior fossa ependymoma",
    "Use DNA methylation profiling to distinguish PFA from PFB; H3K27me3 loss supports PFA, whereas retention is typical of PFB.",
  ],
  [
    "Spinal ependymoma",
    "Assess MYCN amplification when high-grade/aggressive behavior or morphology raises concern for the MYCN-amplified type.",
  ],
  [
    "Myxopapillary ependymoma / subependymoma",
    "Molecular testing is not routinely required in morphologically and anatomically typical cases; use methylation profiling for diagnostically challenging tumors.",
  ],
];

export default function GliomasGlioneuronalNeuronalPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All Categories");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const inGroup = group === "All Categories" || e.group === group;
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
        ...e.differential.flatMap((d) => [
          d.name,
          ...(d.points ?? []),
          d.distinction ?? "",
        ]),
      ]
        .join(" ")
        .toLowerCase();
      return inGroup && (!q || text.includes(q));
    });
  }, [query, group]);
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-bold">
            Pathology GPS
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Home
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <nav className="mb-5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          / Brain and CNS Tumors / Gliomas, Glioneuronal and Neuronal Tumors
        </nav>
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Central Nervous System Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Gliomas, Glioneuronal and Neuronal Tumors
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Integrated diagnostic reference for adult-type and pediatric-type
            diffuse gliomas, circumscribed astrocytic gliomas, glioneuronal and
            neuronal tumors, and ependymal tumors. Classification follows the
            WHO CNS5 framework.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">
            Diagnostic Workflow for Diffuse Gliomas
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3">Step</th>
                  <th className="border p-3">Diagnostic question</th>
                  <th className="border p-3">Action and interpretation</th>
                </tr>
              </thead>
              <tbody>
                {diagnosticWorkflow.map(([h, t], i) => (
                  <tr key={h}>
                    <td className="border p-3 align-top font-semibold">
                      {i + 1}
                    </td>
                    <td className="border p-3 align-top font-semibold">
                      {h.replace(/^\\d+\\. /, "")}
                    </td>
                    <td className="border p-3 align-top">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">
            Adult-Type Diffuse Glioma: Histologic Grading Criteria
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Assess mitotic activity, microvascular proliferation, and necrosis
            in the context of the integrated molecular type. Mitotic thresholds
            are not interchangeable across entities.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3">Entity / grade</th>
                  <th className="border p-3">Cellularity and cytology</th>
                  <th className="border p-3">Mitoses</th>
                  <th className="border p-3">Microvascular proliferation</th>
                  <th className="border p-3">Necrosis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Astrocytoma, IDH-mutant, grade 2
                  </td>
                  <td className="border p-3 align-top">
                    Mild–moderate hypercellularity; mildly atypical infiltrating
                    fibrillary astrocytic cells.
                  </td>
                  <td className="border p-3 align-top">
                    Absent or uncommon; an isolated mitosis in a resection
                    specimen may still be compatible with grade 2.
                  </td>
                  <td className="border p-3 align-top">Absent.</td>
                  <td className="border p-3 align-top">Absent.</td>
                </tr>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Astrocytoma, IDH-mutant, grade 3
                  </td>
                  <td className="border p-3 align-top">
                    Increased cellularity and anaplasia; greater nuclear
                    size/shape variation and coarser chromatin.
                  </td>
                  <td className="border p-3 align-top">
                    Increased mitotic activity; no universally validated numeric
                    cutoff. Interpret relative to specimen size and sampling.
                  </td>
                  <td className="border p-3 align-top">
                    Absent by definition.
                  </td>
                  <td className="border p-3 align-top">
                    Absent by definition.
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Astrocytoma, IDH-mutant, grade 4
                  </td>
                  <td className="border p-3 align-top">
                    Grade 3 morphology with high-grade features.
                  </td>
                  <td className="border p-3 align-top">
                    Often increased, but not independently defining.
                  </td>
                  <td className="border p-3 align-top">
                    Present and/or necrosis; alternatively, CDKN2A/B homozygous
                    deletion establishes grade 4 without either feature.
                  </td>
                  <td className="border p-3 align-top">
                    Present and/or microvascular proliferation; alternatively,
                    CDKN2A/B homozygous deletion establishes grade 4 without
                    either feature.
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Oligodendroglioma, grade 2
                  </td>
                  <td className="border p-3 align-top">
                    Generally lower cellularity and less cytologic atypia.
                  </td>
                  <td className="border p-3 align-top">
                    Absent, low, or scattered; rare mitoses alone do not
                    establish grade 3.
                  </td>
                  <td className="border p-3 align-top">Usually absent.</td>
                  <td className="border p-3 align-top">Usually absent.</td>
                </tr>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Oligodendroglioma, grade 3
                  </td>
                  <td className="border p-3 align-top">
                    Usually increased cellularity and cytologic atypia.
                  </td>
                  <td className="border p-3 align-top">
                    Brisk mitotic activity supports grade 3; ≥2.5 mitoses/mm²
                    has been reported as an adverse feature, not a universally
                    definitive cutoff.
                  </td>
                  <td className="border p-3 align-top">
                    May be present; a significant high-grade feature.
                  </td>
                  <td className="border p-3 align-top">
                    May be present, with or without pseudopalisading.
                  </td>
                </tr>
                <tr>
                  <td className="border p-3 align-top font-semibold">
                    Glioblastoma, IDH-wildtype, grade 4
                  </td>
                  <td className="border p-3 align-top">
                    Highly cellular infiltrating astrocytic tumor with atypia
                    and often marked pleomorphism.
                  </td>
                  <td className="border p-3 align-top">
                    Usually readily identifiable and often brisk.
                  </td>
                  <td className="border p-3 align-top">
                    Characteristic; multilayered endothelial cells and/or
                    glomeruloid vascular tufts.
                  </td>
                  <td className="border p-3 align-top">
                    Characteristic; may show pseudopalisading around geographic
                    necrosis.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Important: vascular hyalinization or simple increased vascularity is
            not equivalent to microvascular proliferation. For pilocytic
            astrocytoma, glomeruloid vessels along cyst walls or hyalinized
            vessels should not by themselves trigger a high-grade designation.
          </p>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">
            Adult-Type Diffuse Glioma: Integrated Diagnostic and Molecular
            Testing
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            The molecular workup is not optional when required to define the
            tumor type or grade.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[1200px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3">Diagnostic entity</th>
                  <th className="border p-3">
                    Typical histology and grading features
                  </th>
                  <th className="border p-3">Required / key molecular tests</th>
                  <th className="border p-3">Integrated interpretation</th>
                </tr>
              </thead>
              <tbody>
                {adultMolecular.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td key={i} className="border p-3 align-top">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold">
            Molecular Testing Matrix Beyond Adult-Type Diffuse Gliomas
          </h2>
          <div className="mt-4 space-y-6">
            {[
              ["Pediatric-Type Diffuse Gliomas", pediatricMolecular],
              ["Circumscribed Astrocytic Gliomas", circumscribedMolecular],
              ["Glioneuronal and Neuronal Tumors", glioneuronalMolecular],
              ["Ependymal Tumors", ependymalMolecular],
            ].map(([title, rows]) => (
              <div key={title as string}>
                <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-teal-800">
                  {title as string}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="w-[32%] border p-3">
                          Diagnostic entity / group
                        </th>
                        <th className="border p-3">
                          Recommended molecular assessment and diagnostic value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {(rows as string[][]).map((r) => (
                        <tr key={r[0]}>
                          <td className="border p-3 align-top font-semibold">
                            {r[0]}
                          </td>
                          <td className="border p-3 align-top">{r[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-sm font-extrabold uppercase tracking-wide text-amber-900">
            Critical Diagnostic Guardrails
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
            <li>
              Do not diagnose oligodendroglioma without both an IDH1/IDH2
              mutation and whole-arm 1p/19q codeletion.
            </li>
            <li>
              Astrocytoma, IDH-mutant, is CNS WHO grade 4 if CDKN2A and/or
              CDKN2B homozygous deletion is present, even without necrosis or
              microvascular proliferation.
            </li>
            <li>
              In an adult IDH-wildtype diffuse astrocytic glioma, TERT promoter
              mutation, EGFR amplification, or +7/−10 can establish
              glioblastoma, IDH-wildtype in the appropriate context.
            </li>
            <li>
              For pediatric-type diffuse gliomas, age is a clue, not a defining
              criterion; molecular classification is essential.
            </li>
            <li>
              Use DNA methylation profiling when morphology, immunophenotype,
              and targeted molecular findings do not yield a secure integrated
              diagnosis.
            </li>
            <li>
              Do not include choroid plexus tumors in this diagnostic category;
              they are classified separately.
            </li>
          </ul>
        </section>

        <div className="mt-9 mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label
              htmlFor="glioma-search"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Search diagnoses and diagnostic criteria
            </label>
            <input
              id="glioma-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: IDH, ATRX, H3 K27, BRAF, FGFR, methylation..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>
          <div className="sm:w-80">
            <label
              htmlFor="glioma-group"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>
            <select
              id="glioma-group"
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
          <span>
            {filtered.length} of {entities.length} entities
          </span>
          <span>
            Same-group entities are included as reciprocal differential
            diagnoses.
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
                      Key diagnostic concept: {e.clue}
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
                          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                            {e.clinical.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                        <Section title="Essential Diagnostic Criteria">
                          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                            {e.criteria.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                        <Section title="Histopathology">
                          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                            {e.histology.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      </div>
                      <div>
                        <Section title="Immunophenotype">
                          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                            {e.ihc.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                        <Section title="Differential Diagnosis">
                          <div className="space-y-2">
                            {e.differential.map((d, j) => (
                              <div
                                key={`${d.name}-${j}`}
                                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                              >
                                <div className="text-sm font-bold text-slate-900">
                                  {d.name}
                                </div>
                                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                                  {(d.points?.length
                                    ? d.points
                                    : d.distinction
                                      ? [d.distinction]
                                      : []
                                  ).map((point, k) => (
                                    <li key={k}>{point}</li>
                                  ))}
                                </ul>
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
              No matching diagnoses. Try another search term or category.
            </div>
          )}
        </div>
        <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          PathologyGPS · Diagnostic reference for CNS pathology. Interpret
          histology, immunohistochemistry, molecular findings, imaging, and
          clinical context together.
        </footer>
      </div>
    </main>
  );
}
