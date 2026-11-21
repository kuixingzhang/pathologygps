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
  grade?: string;
  pitfalls?: string[];
};

const meningiomaGrading = [
  {
    grade: "CNS WHO grade 1",
    category: "Benign",
    criteria:
      "Does not meet criteria for grade 2 or 3; most conventional histologic subtypes are grade 1.",
    note: "Includes meningothelial, fibrous, transitional, psammomatous, angiomatous, microcystic, secretory, lymphoplasmacyte-rich, metaplastic, papillary, and rhabdoid patterns when higher-grade criteria are absent.",
  },
  {
    grade: "CNS WHO grade 2",
    category: "Atypical",
    criteria:
      "4–19 mitoses per 10 high-power fields (approximately 1.6 mm²); OR brain invasion; OR at least 3 of 5 atypical features: increased cellularity, small cells with high N:C ratio, prominent nucleoli, sheet-like growth, and spontaneous geographic necrosis.",
    note: "Chordoid and clear cell meningiomas are assigned grade 2 by subtype, independent of the usual atypical criteria.",
  },
  {
    grade: "CNS WHO grade 3",
    category: "Anaplastic / malignant",
    criteria:
      "At least 20 mitoses per 10 high-power fields; OR frank malignant cytology resembling carcinoma, melanoma, or high-grade sarcoma. TERT promoter mutation or homozygous CDKN2A/B deletion independently supports grade 3.",
    note: "Papillary or rhabdoid morphology alone is not sufficient for grade 3 under current grading principles.",
  },
];

const entities: Entity[] = [
  {
    name: "Meningioma, Meningothelial",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Syncytial lobules of meningothelial cells with nuclear pseudoinclusions and intranuclear holes.",
    summary:
      "A common conventional meningioma subtype, usually CNS WHO grade 1 unless independent grade 2 or 3 criteria are met.",
    clinical: [
      "Usually adults, with increasing incidence in older age; female predominance.",
      "Commonly arises along the cerebral convexity, skull base, falx, and parasagittal dura.",
      "Slow-growing mass causing headache, seizures, or focal neurologic symptoms according to location.",
    ],
    criteria: [
      "Well-circumscribed meningothelial neoplasm with lobular or syncytial architecture.",
      "Round to oval nuclei with characteristic pseudoinclusions and nuclear holes.",
      "Apply CNS WHO grading criteria independently of the histologic subtype.",
    ],
    histology: [
      "Epithelioid cells form lobules or syncytial sheets with indistinct cell borders.",
      "Cells have abundant eosinophilic cytoplasm and relatively uniform round-to-oval nuclei.",
      "Nuclear pseudoinclusions and intranuclear holes are frequent.",
      "Whorls and psammoma bodies are usually less prominent than in transitional or psammomatous types.",
    ],
    ihc: [
      "EMA and SSTR2A are usually positive; SSTR2A is often strong and diffuse.",
      "Vimentin is commonly positive but nonspecific.",
      "Progesterone receptor is frequently expressed, particularly in lower-grade tumors.",
      "Ki-67 varies; interpret with mitotic count and morphology.",
    ],
    differential: [
      {
        name: "Fibrous meningioma",
        distinction:
          "Fibrous type is dominated by spindle cells in collagen-rich fascicles rather than syncytial meningothelial lobules.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and typically lacks diffuse SSTR2A; look for Antoni A/B areas and Verocay bodies.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows nuclear STAT6 and usually lacks the characteristic diffuse SSTR2A/EMA combination.",
      },
    ],
    molecular: [
      "Often carries AKT1 p.E17K, frequently with TRAF7; SMO and PIK3CA alterations also occur.",
      "NF2 alterations and broad copy-number changes are less common than in fibrous/transitional meningioma.",
    ],
  },
  {
    name: "Meningioma, Fibrous (Fibroblastic)",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Spindle-cell fascicles in abundant collagen; STAT6 negativity helps separate it from solitary fibrous tumor.",
    summary:
      "A conventional meningioma subtype usually assigned CNS WHO grade 1 in the absence of higher-grade criteria.",
    clinical: [
      "Usually middle-aged or older adults; female predominance overall.",
      "Often arises at the cerebral convexity or spinal dura.",
      "Symptoms reflect compression of adjacent brain, spinal cord, or nerve roots.",
    ],
    criteria: [
      "Spindle cells in parallel, storiform, or interlacing fascicles.",
      "Collagen-rich stroma is prominent.",
      "Do not mistake collagen abundance alone for solitary fibrous tumor; use nuclear STAT6 and meningioma markers.",
    ],
    histology: [
      "Elongated cells form fascicles with variable amounts of intercellular collagen.",
      "Collagen may be abundant and densely hyalinized.",
      "Whorls may be inconspicuous; focal meningothelial areas may be present.",
    ],
    ihc: [
      "SSTR2A is often strong and diffuse.",
      "EMA may be weak, focal, or absent.",
      "S100 may be unexpectedly strong; SOX10 is generally not a diffuse tumor-cell marker.",
      "STAT6 is negative in tumor nuclei, unlike SFT.",
    ],
    differential: [
      {
        name: "Meningothelial meningioma",
        distinction:
          "Meningothelial type forms syncytial epithelioid lobules; fibrous type is spindle-cell and collagen-rich.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows nuclear STAT6 due to NAB2::STAT6 fusion; meningioma is typically SSTR2A/EMA-positive.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and often shows Antoni A/B architecture; fibrous meningioma commonly expresses SSTR2A.",
      },
    ],
    molecular: [
      "Frequently shows chromosome 22q loss and NF2 inactivation.",
      "Methylation profiles overlap with transitional and psammomatous meningiomas.",
    ],
  },
  {
    name: "Meningioma, Transitional",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Combination of meningothelial lobules, spindle-cell fascicles, whorls, and psammoma bodies.",
    summary:
      "A mixed conventional meningioma subtype, usually CNS WHO grade 1 unless higher-grade criteria are present.",
    clinical: [
      "Usually adults; female predominance.",
      "Often arises from cerebral convexity or parasagittal dura.",
      "Presents with site-dependent mass effect, seizures, or headache.",
    ],
    criteria: [
      "Both meningothelial and fibrous patterns are present.",
      "Whorl formation and psammoma bodies are common.",
      "Grade according to mitoses, brain invasion, atypical features, and molecular grade-defining alterations.",
    ],
    histology: [
      "Lobular syncytial areas alternate with spindle-cell fascicles.",
      "Transitional zones show intermediate morphology.",
      "Whorls and concentric psammoma bodies are frequent.",
    ],
    ihc: [
      "EMA and SSTR2A are generally positive.",
      "Vimentin is positive.",
      "PR is often positive in lower-grade tumors.",
    ],
    differential: [
      {
        name: "Meningothelial meningioma",
        distinction:
          "Predominantly syncytial lobules without substantial collagen-rich spindle-cell fascicles.",
      },
      {
        name: "Fibrous meningioma",
        distinction:
          "Predominantly spindle-cell fascicles with collagen and limited meningothelial lobules.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and shows Antoni A/B areas rather than meningioma-type whorls and psammoma bodies.",
      },
    ],
    molecular: [
      "Frequently carries NF2 mutation and chromosome 22q loss.",
      "Molecular profile overlaps with fibrous and psammomatous meningiomas.",
    ],
  },
  {
    name: "Meningioma, Psammomatous",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Numerous confluent psammoma bodies dominate the lesion, sometimes leaving very sparse viable tumor cells.",
    summary:
      "A calcified conventional meningioma subtype, often spinal and usually CNS WHO grade 1.",
    clinical: [
      "Typically middle-aged to older women.",
      "Often arises in the thoracic spinal canal; may also occur intracranially.",
      "Can cause slowly progressive myelopathy or radiculopathy.",
    ],
    criteria: [
      "Psammoma bodies predominate over viable meningothelial cells.",
      "Residual tumor cells can be sparse and may require SSTR2A or EMA to identify.",
      "Exclude dystrophic calcification and other calcified lesions.",
    ],
    histology: [
      "Numerous concentric lamellated psammoma bodies may coalesce into large calcified masses.",
      "Residual viable areas commonly show fibrous or transitional meningioma morphology.",
      "Tumor cells may be sparse at the periphery of calcified aggregates.",
    ],
    ihc: [
      "SSTR2A and EMA highlight residual meningioma cells.",
      "Vimentin is commonly positive in viable tumor cells.",
    ],
    differential: [
      {
        name: "Metaplastic meningioma, osseous",
        distinction:
          "Metaplastic bone formation shows osteoid or mature bone rather than concentric lamellated psammoma bodies.",
      },
      {
        name: "Calcifying pseudoneoplasm of the neuraxis",
        distinction:
          "CAPNON is a non-neoplastic calcified lesion with chondromyxoid matrix, palisading spindle cells, and foreign-body reaction; meningioma cells express SSTR2A/EMA.",
      },
      {
        name: "Fibrous meningioma",
        distinction:
          "Fibrous meningioma has collagen-rich spindle-cell fascicles without psammoma bodies dominating the lesion.",
      },
    ],
    molecular: [
      "Frequently shows NF2 inactivation and chromosome 22q loss.",
      "Molecular features overlap with fibrous and transitional meningiomas.",
    ],
  },
  {
    name: "Meningioma, Angiomatous",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Numerous vascular channels, often hyalinized, with interspersed meningothelial tumor cells.",
    summary:
      "A vascular-rich meningioma subtype, usually grade 1; prominent edema may be seen.",
    clinical: [
      "Usually adults; female predominance similar to other meningiomas.",
      "Commonly intracranial, often convexity.",
      "May produce disproportionate peritumoral edema and symptoms from mass effect.",
    ],
    criteria: [
      "Vascular channels occupy a substantial proportion of the tumor.",
      "Meningioma cells are present between vascular spaces and retain a meningioma immunophenotype.",
      "Degenerative atypia alone does not warrant upgrading.",
    ],
    histology: [
      "Numerous thin- or thick-walled vascular channels dominate the architecture.",
      "Hyalinized vessel walls are common.",
      "Meningothelial cells form small nests, cords, or sheets between vessels.",
      "Peritumoral edema may be prominent.",
    ],
    ihc: [
      "SSTR2A and EMA highlight the meningothelial component.",
      "CD34 and CD31 highlight vascular endothelium, not the tumor cells.",
      "Ki-67 is generally low in grade 1 lesions.",
    ],
    differential: [
      {
        name: "Hemangioblastoma",
        distinction:
          "Hemangioblastoma has a rich capillary network with lipidized stromal cells that express inhibin-alpha and S100; meningioma cells express SSTR2A/EMA.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows patternless spindle cells, staghorn vessels, and nuclear STAT6.",
      },
      {
        name: "Microcystic meningioma",
        distinction:
          "Microcystic type has prominent intercellular spaces and stellate cells rather than vascular channels dominating the tumor.",
      },
    ],
    molecular: [
      "Chromosome 5 gain is frequent.",
      "NF2 alterations may occur but are not defining.",
    ],
  },
  {
    name: "Meningioma, Microcystic",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Loose stellate cells with long processes create a cobweb-like microcystic architecture.",
    summary:
      "A conventional meningioma subtype, often with prominent peritumoral edema and degenerative nuclear atypia.",
    clinical: [
      "Usually adults; female predominance.",
      "Typically intracranial, often convexity.",
      "Peritumoral edema can be prominent relative to tumor size.",
    ],
    criteria: [
      "Abundant microcystic spaces formed by stellate tumor cells and delicate processes.",
      "Confirm meningothelial lineage with SSTR2A and/or EMA.",
      "Do not overgrade based on degenerative atypia without qualifying mitoses or other grade criteria.",
    ],
    histology: [
      "Tumor cells are stellate with elongated cytoplasmic processes.",
      "Numerous intercellular spaces create a loose, reticular or cobweb-like appearance.",
      "Focal conventional meningothelial areas may coexist.",
      "Degenerative nuclear atypia can be striking but is not by itself a grading criterion.",
    ],
    ihc: [
      "SSTR2A and EMA label tumor cells.",
      "Vimentin is positive.",
      "Ki-67 is usually low in otherwise grade 1 tumors.",
    ],
    differential: [
      {
        name: "Angiomatous meningioma",
        distinction:
          "Angiomatous type is dominated by vascular channels; microcystic type is dominated by stellate cells and intercellular spaces.",
      },
      {
        name: "Hemangioblastoma",
        distinction:
          "Hemangioblastoma has inhibin-alpha-positive stromal cells among capillaries and lacks the typical diffuse meningioma SSTR2A pattern.",
      },
      {
        name: "Metastatic clear cell renal cell carcinoma",
        distinction:
          "Metastatic RCC shows epithelial differentiation and renal markers; microcystic meningioma retains SSTR2A/EMA and lacks a carcinoma phenotype.",
      },
    ],
    molecular: [
      "Chromosome 5 gain is common.",
      "Molecular profile may overlap with angiomatous and metaplastic meningiomas.",
    ],
  },
  {
    name: "Meningioma, Secretory",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Epithelial/gland-like differentiation with eosinophilic pseudopsammoma bodies that are CEA-positive.",
    summary:
      "A distinctive meningioma subtype often associated with prominent peritumoral edema and KLF4/TRAF7 mutations.",
    clinical: [
      "Usually middle-aged adults, with female predominance.",
      "Often arises in the cerebral convexity or skull base.",
      "Peritumoral edema may be prominent; serum CEA elevation is rare.",
    ],
    criteria: [
      "Meningothelial tumor with gland-like epithelial differentiation and/or characteristic pseudopsammoma bodies.",
      "Pseudopsammoma bodies contain eosinophilic secretions and are often PAS-positive and CEA-positive.",
      "Combined KLF4 p.K409Q and TRAF7 mutations strongly support the subtype.",
    ],
    histology: [
      "Conventional meningioma areas contain focal glandular or luminal epithelial structures.",
      "Eosinophilic intraluminal secretions form pseudopsammoma bodies.",
      "Secretions may be surrounded by cells with clear or eosinophilic cytoplasm.",
      "Peritumoral edema is often conspicuous.",
    ],
    ihc: [
      "CEA highlights pseudopsammoma bodies and may label surrounding tumor cells.",
      "Cytokeratins can be positive in secretory areas.",
      "SSTR2A and EMA support the underlying meningioma.",
      "PR may be positive.",
    ],
    differential: [
      {
        name: "Chordoid meningioma",
        distinction:
          "Chordoid type has cords of epithelioid cells in abundant mucin-rich stroma; secretory type has gland-like lumina and CEA-positive pseudopsammoma bodies.",
      },
      {
        name: "Metastatic adenocarcinoma",
        distinction:
          "Carcinoma typically shows diffuse epithelial marker expression and lacks the broader meningioma phenotype; assess SSTR2A/EMA and clinical history.",
      },
      {
        name: "Pituitary neuroendocrine tumor",
        distinction:
          "PitNET shows neuroendocrine markers and pituitary lineage transcription factors rather than meningioma architecture and SSTR2A/EMA profile.",
      },
    ],
    molecular: [
      "Combined KLF4 p.K409Q and TRAF7 mutations are characteristic.",
      "KLF4 mutation may occasionally occur without an identified TRAF7 alteration.",
    ],
  },
  {
    name: "Meningioma, Lymphoplasmacyte-Rich",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Dense chronic inflammatory infiltrates overshadow a relatively sparse meningothelial component.",
    summary:
      "A rare inflammatory-pattern meningioma, usually grade 1 after excluding inflammatory mimics.",
    clinical: [
      "Usually adults; no consistent sex predilection.",
      "Most often intracranial, including convexity and skull base.",
      "May present with mass effect, seizures, or symptoms related to edema; systemic inflammatory or hematologic associations can occur.",
    ],
    criteria: [
      "Extensive lymphocytic and plasma-cell infiltrates dominate the lesion.",
      "Identify an underlying meningothelial component, sometimes sparse.",
      "Exclude inflammatory disorders with reactive meningothelial hyperplasia.",
    ],
    histology: [
      "Dense chronic inflammatory infiltrates may obscure the neoplastic meningothelial cells.",
      "Lymphocytes and macrophages may predominate; plasma cells can be sparse despite the name.",
      "Fibrosis and reactive changes may be present.",
      "Meningothelial cells may form small whorls or nests.",
    ],
    ihc: [
      "SSTR2A and EMA highlight the meningothelial component.",
      "CD3 and CD20 characterize T- and B-cell populations.",
      "CD138 highlights plasma cells; kappa/lambda studies assess clonality when indicated.",
      "IgG4 staining may be useful in selected inflammatory differentials but is not diagnostic alone.",
    ],
    differential: [
      {
        name: "Inflammatory pseudotumor / IgG4-related disease",
        distinction:
          "Inflammatory lesions lack a convincing clonal meningothelial component; assess IgG4-related morphology and systemic context.",
      },
      {
        name: "Reactive meningothelial hyperplasia",
        distinction:
          "Reactive meningothelial cells are typically patchy, perivascular, and ill-defined rather than forming a discrete mass.",
      },
      {
        name: "Conventional meningioma with secondary inflammation",
        distinction:
          "Conventional meningioma has a dominant meningothelial component with inflammation as a secondary feature.",
      },
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
  },
  {
    name: "Meningioma, Metaplastic",
    group: "Meningioma — CNS WHO Grade 1 Patterns",
    clue: "Meningioma with focal or extensive osseous, cartilaginous, lipomatous, myxoid, or xanthomatous elements.",
    summary:
      "A conventional meningioma with mesenchymal-appearing components; usually grade 1 unless independent higher-grade criteria are met.",
    clinical: [
      "Usually adults; female predominance.",
      "Typically intracranial, often convexity.",
      "Symptoms are location-dependent; imaging may show calcification or ossification.",
    ],
    criteria: [
      "A recognizable meningioma component is present.",
      "One or more mesenchymal-appearing components are admixed with the tumor.",
      "Distinguish true metaplastic tissue from lipid accumulation, psammoma body ossification, and bone invasion.",
    ],
    histology: [
      "Osseous, cartilaginous, lipomatous, myxoid, or xanthomatous areas may be present singly or in combination.",
      "Conventional meningothelial, fibrous, or transitional areas establish the underlying tumor.",
      "Ossification may resemble dystrophic calcification of psammoma bodies.",
    ],
    ihc: [
      "SSTR2A and EMA highlight the meningothelial component.",
      "Vimentin is positive.",
      "Use lineage-specific stains only when a distinct heterologous component raises a specific differential.",
    ],
    differential: [
      {
        name: "Psammomatous meningioma",
        distinction:
          "Psammomatous type contains concentric calcified psammoma bodies; metaplastic type shows mature bone or other mesenchymal elements.",
      },
      {
        name: "Angiomatous meningioma",
        distinction:
          "Angiomatous type is dominated by vascular channels rather than mature mesenchymal tissue.",
      },
      {
        name: "Primary intracranial sarcoma",
        distinction:
          "A primary sarcoma lacks a conventional meningioma component and requires entity-specific molecular or immunophenotypic support.",
      },
    ],
    molecular: [
      "Chromosome 5 gain is frequent and overlaps with angiomatous and microcystic meningiomas.",
    ],
  },
  {
    name: "Meningioma, Chordoid",
    group: "Meningioma — CNS WHO Grade 2 Subtypes",
    clue: "Epithelioid or spindle cells in cords and trabeculae within a mucin-rich matrix; can closely mimic chordoma.",
    summary:
      "A meningioma subtype assigned CNS WHO grade 2 because of increased recurrence risk, even without other atypical criteria.",
    grade: "CNS WHO grade 2 by subtype.",
    clinical: [
      "Often presents in younger adults than conventional meningioma; reported mean age around the mid-40s.",
      "Usually supratentorial, often large.",
      "May cause headache, seizures, or focal deficits; chronic inflammatory infiltrates may be prominent.",
    ],
    criteria: [
      "Cords or trabeculae of epithelioid or spindle cells embedded in abundant mucin-rich matrix.",
      "A conventional meningioma component may be interspersed but can be absent in a sampled fragment.",
      "Chordoid subtype is CNS WHO grade 2 regardless of mitotic count when the defining morphology is present.",
    ],
    histology: [
      "Small epithelioid or spindle cells form cords, trabeculae, or clusters in a myxoid matrix.",
      "Cytoplasm may be vacuolated.",
      "Chronic lymphoplasmacytic inflammation may be prominent.",
      "Conventional meningioma areas may be present at the periphery.",
    ],
    ihc: [
      "EMA and SSTR2A support meningioma differentiation.",
      "Vimentin is positive.",
      "Brachyury and broad-spectrum cytokeratin are generally negative in tumor cells, helping separate chordoma.",
    ],
    differential: [
      {
        name: "Chordoma",
        distinction:
          "Chordoma shows physaliphorous cells, strong nuclear brachyury, and cytokeratin expression; chordoid meningioma expresses SSTR2A/EMA and lacks nuclear brachyury.",
      },
      {
        name: "Myxoid chondrosarcoma",
        distinction:
          "Chondrosarcoma shows chondroid matrix and appropriate cartilage differentiation; meningioma markers support chordoid meningioma.",
      },
      {
        name: "Secretory meningioma",
        distinction:
          "Secretory type shows gland-like lumina and CEA-positive pseudopsammoma bodies rather than diffuse chordoid matrix.",
      },
    ],
    molecular: [
      "Chromosome 2p deletions are overrepresented.",
      "DNA methylation profiles overlap with other meningioma subtypes.",
    ],
  },
  {
    name: "Meningioma, Clear Cell",
    group: "Meningioma — CNS WHO Grade 2 Subtypes",
    clue: "Patternless sheets of glycogen-rich clear cells with prominent perivascular and interstitial collagen.",
    summary:
      "A meningioma subtype with increased recurrence risk, assigned CNS WHO grade 2 by subtype.",
    grade: "CNS WHO grade 2 by subtype.",
    clinical: [
      "Often affects children and young adults, although adults can be affected.",
      "Predilection for cerebellopontine angle and spinal canal, particularly cauda equina.",
      "May recur locally and occasionally disseminate through cerebrospinal fluid.",
    ],
    criteria: [
      "Predominantly patternless sheets or fascicles of round-to-polygonal clear cells.",
      "Prominent perivascular and interstitial collagen, sometimes amianthoid.",
      "Cytoplasmic glycogen is PAS-positive and diastase-sensitive.",
      "Clear cell meningioma is CNS WHO grade 2 by subtype.",
    ],
    histology: [
      "Tumor cells have abundant clear cytoplasm and round-to-oval nuclei.",
      "Perivascular and interstitial collagen is prominent and may form broad acellular zones.",
      "Whorls are vague and psammoma bodies are inconspicuous.",
      "PAS-positive cytoplasmic glycogen is diastase-sensitive.",
    ],
    ihc: [
      "EMA and SSTR2A support meningioma.",
      "Vimentin is positive.",
      "PR may be variable.",
      "STAT6 is negative, helping exclude solitary fibrous tumor.",
    ],
    differential: [
      {
        name: "Metastatic clear cell renal cell carcinoma",
        distinction:
          "RCC expresses epithelial markers and renal markers such as PAX8/CAIX and lacks the typical meningioma SSTR2A profile.",
      },
      {
        name: "Chordoma",
        distinction:
          "Chordoma shows physaliphorous cells, myxoid matrix, nuclear brachyury, and cytokeratin.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows nuclear STAT6 and NAB2::STAT6 fusion; clear cell meningioma is typically SSTR2A/EMA-positive.",
      },
    ],
    molecular: [
      "SMARCE1 inactivation is characteristic, particularly in familial clear cell meningioma.",
      "Germline SMARCE1 testing should be considered in young patients and multifocal cases.",
    ],
  },
  {
    name: "Meningioma, Papillary",
    group: "Meningioma — Other Histologic Patterns",
    clue: "Predominant perivascular pseudopapillary growth; grade according to current atypical/anaplastic criteria, not papillary pattern alone.",
    summary:
      "An uncommon architectural pattern of meningioma that may be associated with aggressive behavior.",
    clinical: [
      "Usually adults, but may occur in children and young adults.",
      "Often intracranial and may be associated with brain invasion.",
      "Clinical behavior is variable; assess grade and molecular risk factors.",
    ],
    criteria: [
      "Predominant perivascular pseudopapillary architecture.",
      "Tumor cells radiate around vessels with intervening edema or connective tissue.",
      "Papillary architecture alone does not automatically establish CNS WHO grade 3.",
    ],
    histology: [
      "Tumor cells form perivascular pseudopapillae with radial orientation.",
      "Perivascular spaces may contain edema or hyalinized material.",
      "Additional conventional meningioma patterns may coexist.",
      "Assess for brisk mitoses, malignant cytology, brain invasion, and necrosis.",
    ],
    ihc: [
      "EMA and SSTR2A support meningioma.",
      "Vimentin is commonly positive.",
      "Ki-67 may be elevated in aggressive tumors but is not a stand-alone grading criterion.",
    ],
    differential: [
      {
        name: "Chordoid meningioma",
        distinction:
          "Chordoid type is defined by cords and trabeculae in mucin-rich matrix rather than perivascular pseudopapillae.",
      },
      {
        name: "Metastatic carcinoma",
        distinction:
          "Carcinoma often expresses broad epithelial markers and lacks the meningioma SSTR2A/EMA profile; correlate with clinical history.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT has patternless spindle-cell growth and nuclear STAT6.",
      },
    ],
    molecular: [
      "Molecular alterations are heterogeneous; assess TERT promoter mutation and CDKN2A/B homozygous deletion when grading or risk stratification is relevant.",
    ],
  },
  {
    name: "Meningioma, Rhabdoid",
    group: "Meningioma — Other Histologic Patterns",
    clue: "Plump cells with eccentric nuclei, prominent nucleoli, and eosinophilic paranuclear inclusions.",
    summary:
      "A rare meningioma pattern that can be aggressive, but rhabdoid morphology alone does not automatically confer grade 3.",
    clinical: [
      "Usually adults; may occur across a broad age range.",
      "Often intracranial, including convexity and skull base.",
      "Recurrence risk depends on associated grade-defining features and molecular alterations.",
    ],
    criteria: [
      "Rhabdoid tumor cells with eccentric nuclei and abundant eosinophilic cytoplasm.",
      "Paranuclear inclusions may be fibrillary or compact and hyaline.",
      "Assign CNS WHO grade using mitotic activity, malignant cytology, and molecular criteria rather than rhabdoid morphology alone.",
    ],
    histology: [
      "Large plump cells have eccentric vesicular nuclei and prominent nucleoli.",
      "Cytoplasm is abundant and eosinophilic with paranuclear inclusions.",
      "Rhabdoid areas may be focal or extensive and may coexist with conventional meningioma.",
    ],
    ihc: [
      "EMA and SSTR2A support meningioma differentiation.",
      "Vimentin is positive.",
      "INI1 is generally retained in conventional rhabdoid meningioma; loss should prompt consideration of other SMARCB1-deficient tumors.",
    ],
    differential: [
      {
        name: "Atypical teratoid/rhabdoid tumor",
        distinction:
          "AT/RT typically shows INI1 or BRG1 loss and lacks a convincing meningioma immunophenotype.",
      },
      {
        name: "Poorly differentiated chordoma",
        distinction:
          "Poorly differentiated chordoma retains brachyury but loses INI1; meningioma is usually brachyury-negative.",
      },
      {
        name: "Anaplastic meningioma",
        distinction:
          "Anaplastic meningioma is defined by frank malignant cytology or grade 3 mitotic/molecular criteria; rhabdoid morphology alone is insufficient.",
      },
    ],
    molecular: [
      "BAP1 inactivation occurs in a subset and is associated with aggressive behavior; loss of BAP1 may support risk assessment.",
      "TERT promoter mutation or homozygous CDKN2A/B deletion independently establishes CNS WHO grade 3.",
    ],
  },
  {
    name: "Meningioma, Atypical",
    group: "Meningioma — CNS WHO Grade 2 by Criteria",
    clue: "Grade 2 by mitotic threshold, brain invasion, or at least three specified atypical histologic features.",
    summary: "An intermediate-grade meningioma with increased recurrence risk.",
    grade: "CNS WHO grade 2.",
    clinical: [
      "Usually adults, often middle-aged or older.",
      "More common at cerebral convexity and non-skull-base sites.",
      "May recur locally after resection; extent of resection and molecular profile influence outcome.",
    ],
    criteria: [
      "4–19 mitoses per 10 high-power fields (approximately 1.6 mm²); OR unequivocal brain invasion; OR at least 3 of 5 features: increased cellularity, small cells with high N:C ratio, prominent nucleoli, sheet-like growth, and spontaneous necrosis.",
      "Brain invasion requires irregular tongues or nests of tumor infiltrating brain parenchyma without an intervening leptomeningeal boundary.",
      "Exclude infarct-like or treatment-related necrosis from spontaneous tumor necrosis.",
    ],
    histology: [
      "Increased cellularity with crowded tumor cells may be present.",
      "Small cells with high N:C ratio and prominent nucleoli are qualifying atypical features.",
      "Sheet-like growth lacks the usual whorled or lobular architecture.",
      "Spontaneous geographic necrosis is a qualifying feature.",
      "Mitotic activity must be counted in the most active areas and reported per standardized area.",
    ],
    ihc: [
      "EMA and SSTR2A support meningioma.",
      "Ki-67 is often increased but has no universally accepted independent grading cutoff.",
      "H3K27me3 may be retained or lost; loss is not a formal grading criterion.",
      "pHH3 may help identify mitoses but should not replace routine mitotic counting.",
    ],
    differential: [
      {
        name: "Grade 1 meningioma with degenerative atypia",
        distinction:
          "Degenerative atypia lacks qualifying mitotic activity, brain invasion, or the required combination of atypical features.",
      },
      {
        name: "Anaplastic meningioma",
        distinction:
          "Grade 3 requires at least 20 mitoses per 10 HPF, frank malignant cytology, TERT promoter mutation, or CDKN2A/B homozygous deletion.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows nuclear STAT6 and NAB2::STAT6 fusion; meningioma is usually SSTR2A/EMA-positive.",
      },
    ],
    molecular: [
      "NF2 loss and chromosome 22q deletion are common.",
      "Additional losses involving 1p, 6q, 10q, 14q, and 18q are associated with progression.",
      "TERT promoter mutation and homozygous CDKN2A/B deletion upgrade to CNS WHO grade 3.",
    ],
  },
  {
    name: "Meningioma, Anaplastic (Malignant)",
    group: "Meningioma — CNS WHO Grade 3 by Criteria",
    clue: "Frank malignant cytology, ≥20 mitoses per 10 HPF, TERT promoter mutation, or homozygous CDKN2A/B deletion.",
    summary:
      "A high-grade malignant meningioma with a substantial risk of recurrence, local invasion, and metastasis.",
    grade: "CNS WHO grade 3.",
    clinical: [
      "Usually adults; often older than patients with grade 1 meningioma.",
      "Frequently arises at convexity and other non-skull-base sites.",
      "Rapid growth, neurologic decline, brain invasion, and recurrence are common; extracranial metastases are uncommon but recognized.",
    ],
    criteria: [
      "At least 20 mitoses per 10 high-power fields (approximately 1.6 mm²); OR frank malignant cytology resembling carcinoma, melanoma, or high-grade sarcoma.",
      "TERT promoter mutation independently supports CNS WHO grade 3.",
      "Homozygous CDKN2A and/or CDKN2B deletion independently supports CNS WHO grade 3.",
      "Brain invasion alone is grade 2, not grade 3.",
    ],
    histology: [
      "Marked cellularity, diffuse sheet-like growth, and severe nuclear pleomorphism may be present.",
      "Tumor may show carcinoma-like, melanoma-like, or sarcoma-like morphology.",
      "Brisk mitotic activity, atypical mitoses, and geographic necrosis are common.",
      "Destructive brain invasion and soft tissue or bone invasion may be extensive.",
    ],
    ihc: [
      "EMA and SSTR2A may be reduced or heterogeneous but often remain useful.",
      "Ki-67 is frequently high and may be markedly elevated.",
      "p53 may show aberrant expression in a subset.",
      "BAP1 loss may identify a biologically aggressive subset but is not by itself a universal grade criterion.",
    ],
    differential: [
      {
        name: "Atypical meningioma",
        distinction:
          "Grade 2 lacks the grade 3 mitotic threshold, frank malignant cytology, and grade-defining molecular alterations.",
      },
      {
        name: "Metastatic carcinoma or melanoma",
        distinction:
          "Use broad epithelial and melanocytic markers and clinical imaging; meningioma markers and molecular context support primary meningioma.",
      },
      {
        name: "Solitary fibrous tumor, high grade",
        distinction:
          "SFT shows nuclear STAT6 and NAB2::STAT6 fusion; meningioma usually expresses SSTR2A and EMA.",
      },
      {
        name: "Primary intracranial sarcoma",
        distinction:
          "Sarcoma requires entity-specific morphologic, immunophenotypic, and molecular evidence and lacks a conventional meningioma component.",
      },
    ],
    molecular: [
      "TERT promoter mutation is an independent CNS WHO grade 3 criterion.",
      "Homozygous CDKN2A/B deletion is an independent CNS WHO grade 3 criterion.",
      "NF2 inactivation and complex copy-number losses are common in high-grade progression.",
    ],
  },
  {
    name: "Haemangioma and Vascular Malformations",
    group: "CNS Mesenchymal and Vascular Lesions",
    clue: "Classify by vessel architecture and relationship to brain parenchyma: AVM, cavernous malformation, capillary telangiectasia, or developmental venous anomaly.",
    summary:
      "A spectrum of vascular lesions that may mimic neoplasms radiologically but are defined by vascular architecture rather than a solid neoplastic cell population.",
    clinical: [
      "Can occur at any age; presentation depends on lesion type and location.",
      "AVMs and cavernous malformations commonly present in cerebral hemispheres, brainstem, or cerebellum.",
      "Symptoms include seizures, headache, focal deficits, or intracranial hemorrhage; capillary telangiectasia is often incidental.",
    ],
    criteria: [
      "AVM: abnormal arteries and veins with direct arteriovenous shunting and no normal intervening capillary bed.",
      "Cavernous malformation: back-to-back dilated thin-walled vascular spaces without intervening neural parenchyma.",
      "Capillary telangiectasia: dilated capillary-type vessels with intervening normal brain parenchyma and no significant gliosis.",
      "Developmental venous anomaly: radially converging medullary veins draining into a collector vein; usually a benign venous drainage variant.",
    ],
    histology: [
      "AVM contains variably sized thick- and thin-walled arteries and veins with irregular muscular and elastic layers.",
      "Gliosis and hemosiderin may surround AVM vessels.",
      "Cavernous malformation consists of closely packed, dilated, thin-walled vascular channels lined by endothelium and lacking intervening brain tissue.",
      "Capillary telangiectasia consists of dispersed dilated capillaries with preserved intervening neural tissue.",
      "Developmental venous anomaly shows ectatic veins separated by normal brain parenchyma.",
    ],
    ihc: [
      "CD31 and ERG highlight endothelial cells.",
      "CD34 highlights vascular endothelium.",
      "Elastic stains and SMA help characterize arterial walls in AVM.",
      "No tumor-cell immunophenotype is expected in these malformations.",
    ],
    differential: [
      {
        name: "Hemangioblastoma",
        distinction:
          "Hemangioblastoma is a true neoplasm with inhibin-alpha-positive stromal cells among a capillary network; vascular malformations lack a neoplastic stromal cell population.",
      },
      {
        name: "Angiomatous meningioma",
        distinction:
          "Angiomatous meningioma contains SSTR2A/EMA-positive meningothelial cells between vascular channels.",
      },
      {
        name: "Capillary hemangioma",
        distinction:
          "A capillary hemangioma is a vascular neoplasm with lobular endothelial proliferation, unlike the abnormal but non-neoplastic vascular architecture of a malformation.",
      },
    ],
    molecular: [
      "Familial cavernous malformations may be associated with pathogenic variants in KRIT1, CCM2, or PDCD10.",
      "Sporadic AVMs are not defined by a single routine diagnostic molecular alteration.",
    ],
  },
  {
    name: "Hemangioblastoma",
    group: "CNS Mesenchymal and Vascular Lesions",
    clue: "Dense capillary network with lipidized stromal cells expressing inhibin-alpha and S100; consider VHL disease.",
    summary:
      "A highly vascular neoplasm of the CNS, most commonly cerebellar, with sporadic and VHL-associated forms.",
    clinical: [
      "Usually adults in the third to fifth decades; VHL-associated tumors may present earlier.",
      "Most commonly cerebellum; also spinal cord, brainstem, and retina.",
      "May present with ataxia, headache, hydrocephalus, or spinal cord symptoms; often cyst-associated.",
    ],
    criteria: [
      "Rich capillary network with characteristic vacuolated stromal cells.",
      "Stromal cells, not endothelial cells, are the neoplastic component.",
      "Inhibin-alpha and S100 support stromal cell differentiation.",
      "Multiple lesions or young age should prompt evaluation for VHL disease.",
    ],
    histology: [
      "Numerous thin-walled capillaries form a dense vascular network.",
      "Intervening stromal cells have foamy, lipid-rich, vacuolated cytoplasm.",
      "Stromal cell nuclei are round to oval and may show variable atypia.",
      "Hemosiderin and cystic change may be present.",
    ],
    ihc: [
      "Inhibin-alpha and S100 are positive in stromal cells.",
      "CAIX and PAX8 may be expressed in stromal cells.",
      "CD31 and CD34 highlight endothelial cells rather than stromal cells.",
      "Cytokeratin is generally negative in stromal cells.",
    ],
    differential: [
      {
        name: "Angiomatous meningioma",
        distinction:
          "Meningioma has SSTR2A/EMA-positive meningothelial cells and lacks the characteristic inhibin-alpha-positive lipidized stromal cells.",
      },
      {
        name: "Metastatic clear cell renal cell carcinoma",
        distinction:
          "RCC is cytokeratin/PAX8-positive and usually shows epithelial architecture; hemangioblastoma stromal cells are inhibin-alpha-positive and typically keratin-negative.",
      },
      {
        name: "Vascular malformation",
        distinction:
          "Vascular malformation lacks a neoplastic stromal cell population and shows abnormal vascular channels without hemangioblastoma-type stromal cells.",
      },
    ],
    molecular: [
      "Biallelic VHL inactivation is characteristic.",
      "Germline VHL testing is indicated when clinical or pathologic features suggest von Hippel–Lindau disease.",
    ],
  },
  {
    name: "Intracranial Mesenchymal Tumor, FET::CREB Fusion-Positive",
    group: "CNS Mesenchymal and Vascular Lesions",
    clue: "Rare meningeal mesenchymal tumor requiring demonstration of a FET::CREB family fusion for confident classification.",
    summary:
      "A rare intracranial mesenchymal neoplasm with a broad morphologic spectrum and recurrent EWSR1/FUS::CREB-family fusions.",
    clinical: [
      "Often children, adolescents, or young adults, although adults can be affected.",
      "Usually extra-axial and dural-based, commonly supratentorial.",
      "Presents with headache, seizures, or focal neurologic symptoms from mass effect.",
    ],
    criteria: [
      "Meningeal-based mesenchymal neoplasm with variable spindle, epithelioid, or round-cell morphology.",
      "Morphology and immunophenotype are not sufficiently specific; demonstrate a FET::CREB family fusion.",
      "EWSR1 break-apart positivity alone is insufficient; identify the fusion partner.",
    ],
    histology: [
      "Architecture ranges from sheets and nests to reticular cords and spindle-cell fascicles.",
      "Collagenous or myxoid stroma may be present.",
      "Hemangioma-like dilated vessels and peripheral lymphoplasmacytic cuffing are common.",
      "Tumor cells may be epithelioid, rhabdoid, stellate, spindle-shaped, or monotonous round cells.",
      "Mitotic activity is often low but clinical behavior ranges from indolent to recurrent.",
    ],
    ihc: [
      "EMA, CD99, and desmin are commonly positive, with variable intensity and distribution.",
      "CD68 and CD163 may be positive.",
      "SSTR2A, OLIG2, GFAP, and cytokeratin CAM5.2 are generally negative.",
      "SMARCB1 and SMARCA4 are retained.",
      "S100, synaptophysin, and MUC4 are variable and not defining.",
    ],
    differential: [
      {
        name: "Chordoid meningioma",
        distinction:
          "Chordoid meningioma has a meningioma immunophenotype with SSTR2A/EMA and lacks a FET::CREB fusion.",
      },
      {
        name: "Microcystic or rhabdoid meningioma",
        distinction:
          "Meningioma subtypes retain a convincing meningothelial phenotype and lack the defining FET::CREB fusion.",
      },
      {
        name: "CIC-rearranged sarcoma",
        distinction:
          "CIC sarcoma is typically high-grade, with ETV4/WT1 expression and a CIC fusion; FET::CREB fusion defines this entity.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction: "SFT shows nuclear STAT6 and NAB2::STAT6 fusion.",
      },
    ],
    molecular: [
      "FET::CREB family fusions include EWSR1::ATF1, EWSR1::CREB1, and less commonly FUS::CREB3L2 or related partners.",
      "Confirm the CREB-family partner by RNA sequencing or an equivalent fusion assay; EWSR1 rearrangement alone is not specific.",
    ],
  },
  {
    name: "CIC-Rearranged Sarcoma of the Neural Axis",
    group: "CNS Mesenchymal and Vascular Lesions",
    clue: "High-grade small round-cell sarcoma with CIC fusion; ETV4 and WT1 are often positive, NKX2-2 usually negative.",
    summary:
      "A high-grade sarcoma of the craniospinal axis defined by CIC rearrangement.",
    clinical: [
      "Most often adolescents and young adults, but older patients can be affected.",
      "May arise intra-axially or extra-axially anywhere along the craniospinal axis.",
      "Presents with focal neurologic deficits or raised intracranial pressure.",
    ],
    criteria: [
      "High-grade poorly differentiated sarcoma with round-cell, epithelioid, or spindle-cell areas.",
      "Confirm a CIC gene fusion; morphology and immunophenotype alone are insufficient.",
      "CNS CIC-rearranged sarcoma is designated CNS WHO grade 4.",
    ],
    grade: "CNS WHO grade 4.",
    histology: [
      "Sheets of undifferentiated small round cells with prominent nucleoli and eosinophilic cytoplasm.",
      "Lobulated growth and desmoplastic stroma may be present.",
      "Myxoid change and geographic necrosis are common.",
      "Epithelioid or spindle-cell areas may be admixed.",
    ],
    ihc: [
      "ETV4 and WT1 are frequently positive.",
      "CD99 may be patchy and weak.",
      "NKX2-2 is typically negative, unlike many Ewing sarcomas.",
      "NUT is positive in CIC::NUTM1 fusion cases.",
      "SMARCB1 and SMARCA4 are retained.",
    ],
    differential: [
      {
        name: "Ewing sarcoma",
        distinction:
          "Ewing sarcoma typically has diffuse strong membranous CD99, NKX2-2 expression, and an EWSR1::ETS fusion; CIC sarcoma often shows ETV4/WT1 and CIC fusion.",
      },
      {
        name: "FET::CREB-positive intracranial mesenchymal tumor",
        distinction:
          "FET::CREB-positive tumors are often lower grade and have a collagenous/reticular meningeal pattern; CIC sarcoma is high-grade and CIC-rearranged.",
      },
      {
        name: "DICER1-mutant primary intracranial sarcoma",
        distinction:
          "DICER1-mutant sarcoma is often spindle/pleomorphic with eosinophilic globules and myogenic differentiation; confirm DICER1 alterations.",
      },
      {
        name: "AT/RT",
        distinction:
          "AT/RT commonly shows INI1 or BRG1 loss; CIC sarcoma retains both.",
      },
    ],
    molecular: [
      "CIC::DUX4 is common in extracranial tumors; CNS cases frequently involve CIC::NUTM1.",
      "Other partners include FOXO4, LEUTX, and NUTM2A.",
      "RNA sequencing or anchored multiplex PCR is preferred to confirm the fusion partner; DNA methylation profiling can assist in difficult cases.",
    ],
  },
  {
    name: "Primary Intracranial Sarcoma, DICER1-Mutant",
    group: "CNS Mesenchymal and Vascular Lesions",
    clue: "Pleomorphic or spindle-cell sarcoma with eosinophilic cytoplasmic globules, myogenic differentiation, and DICER1 alterations.",
    summary:
      "A rare primary intracranial sarcoma defined by DICER1 mutation, sometimes associated with germline DICER1 tumor predisposition syndrome.",
    clinical: [
      "Median age is approximately 6 years, but the reported age range extends into adulthood.",
      "Usually supratentorial, often with leptomeningeal and dural involvement.",
      "Presents with headache, seizures, or focal neurologic deficits; consider germline predisposition.",
    ],
    criteria: [
      "Primary intracranial pleomorphic or spindle-cell sarcoma with compatible morphology.",
      "Eosinophilic cytoplasmic globules and evidence of myogenic differentiation are characteristic clues.",
      "Demonstrate pathogenic DICER1 alteration, often with a two-hit pattern.",
      "Exclude metastatic pleuropulmonary blastoma and other DICER1-associated tumors.",
    ],
    histology: [
      "Malignant spindle or pleomorphic cells grow in fascicles or patternless sheets.",
      "Eosinophilic cytoplasmic globules are often present and may be PAS-positive.",
      "Myxoid stroma and focal chondroid differentiation may occur.",
      "Leptomeningeal and dural involvement is common; invasion into brain may be present.",
    ],
    ihc: [
      "Desmin and SMA are commonly positive, often focally; myogenin may be focal.",
      "TLE1 nuclear staining is frequent.",
      "H3K27me3 loss may occur.",
      "GFAP, OLIG2, cytokeratins, EMA, S100, and SOX10 are typically negative.",
      "ATRX loss and aberrant p53 may occur in subsets.",
    ],
    differential: [
      {
        name: "CIC-rearranged sarcoma",
        distinction:
          "CIC sarcoma is usually a small round-cell tumor with ETV4/WT1 expression and CIC fusion; DICER1-mutant sarcoma often has spindle/pleomorphic morphology and myogenic differentiation.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows nuclear STAT6 and NAB2::STAT6 fusion; DICER1-mutant sarcoma lacks this fusion.",
      },
      {
        name: "Pleuropulmonary blastoma metastasis",
        distinction:
          "Metastatic PPB may closely resemble this tumor; correlate with clinical history, chest imaging, and DICER1 status.",
      },
      {
        name: "Rhabdomyosarcoma",
        distinction:
          "Rhabdomyosarcoma shows more convincing skeletal muscle differentiation and subtype-specific molecular alterations; DICER1-mutant sarcoma has a broader pleomorphic/spindle-cell pattern.",
      },
      {
        name: "Anaplastic meningioma",
        distinction:
          "Anaplastic meningioma retains meningioma differentiation and may express SSTR2A/EMA; DICER1-mutant sarcoma is a mesenchymal malignancy with myogenic markers.",
      },
    ],
    molecular: [
      "Typically contains a loss-of-function DICER1 alteration plus a second RNase IIIb hotspot mutation in trans.",
      "TP53, ATRX, KRAS, NF1, or PDGFRA alterations may be additional events.",
      "DNA methylation profiling can support classification; consider germline testing and genetic counseling.",
    ],
  },
  {
    name: "Chordoma, Conventional",
    group: "Chordoma",
    clue: "Lobulated myxoid tumor with physaliphorous cells and strong nuclear brachyury; cytokeratin and EMA are positive.",
    summary:
      "A primary malignant bone tumor of notochordal differentiation, usually arising in the clivus or sacrococcygeal region.",
    clinical: [
      "Usually adults, with peak incidence in middle to later adulthood; slight male predominance.",
      "Arises along the axial skeleton, especially clivus, mobile spine, and sacrococcygeal region.",
      "Presents with pain and site-specific neurologic deficits; clival tumors may cause cranial neuropathies and diplopia.",
    ],
    criteria: [
      "Midline destructive bone tumor with lobulated architecture and myxoid matrix.",
      "Physaliphorous cells with vacuolated or bubbly cytoplasm are characteristic.",
      "Nuclear brachyury expression is the key diagnostic marker.",
      "Cytokeratin and EMA expression support notochordal epithelial differentiation.",
    ],
    histology: [
      "Fibrous septa divide the tumor into lobules.",
      "Tumor cells form cords, ribbons, and nests in abundant myxoid matrix.",
      "Large cells have abundant clear-to-eosinophilic vacuolated cytoplasm (physaliphorous cells).",
      "Nuclear atypia may be present, but mitoses are often sparse in conventional tumors.",
      "Chondroid chordoma shows areas of hyaline cartilage-like matrix while retaining chordoma cells.",
    ],
    ihc: [
      "Brachyury shows strong nuclear expression and is the most specific lineage marker.",
      "Broad-spectrum cytokeratins and EMA are usually positive.",
      "S100 is commonly positive but less specific.",
      "INI1/SMARCB1 is retained in conventional chordoma.",
    ],
    differential: [
      {
        name: "Chordoid meningioma",
        distinction:
          "Chordoid meningioma is SSTR2A/EMA-positive but brachyury-negative and generally lacks physaliphorous cells.",
      },
      {
        name: "Chondrosarcoma",
        distinction:
          "Chondrosarcoma is usually off-midline, shows chondrocytes in lacunae, and lacks brachyury and broad cytokeratin expression.",
      },
      {
        name: "Benign notochordal cell tumor",
        distinction:
          "Benign notochordal cell tumor is typically intraosseous, non-destructive, and lacks a soft-tissue mass or overt cytologic atypia.",
      },
      {
        name: "Metastatic mucinous carcinoma",
        distinction:
          "Metastatic carcinoma may be cytokeratin-positive but is generally brachyury-negative; correlate with clinical history and imaging.",
      },
    ],
    molecular: [
      "TBXT (brachyury) gene duplication or copy-number gain occurs in a subset.",
      "PIK3CA pathway alterations occur in a subset but are not required for diagnosis.",
      "No single routine molecular alteration defines conventional chordoma.",
    ],
  },
  {
    name: "Chordoma, Poorly Differentiated",
    group: "Chordoma",
    clue: "Epithelioid/rhabdoid chordoma with retained nuclear brachyury and loss of INI1/SMARCB1.",
    summary:
      "A highly aggressive chordoma subtype characterized by SMARCB1 deficiency.",
    clinical: [
      "Usually children, adolescents, and young adults, although adults can be affected.",
      "Strong predilection for skull base, particularly clivus.",
      "Often presents with cranial neuropathy, headache, or rapidly progressive neurologic symptoms.",
    ],
    criteria: [
      "Solid sheets or aggregates of atypical epithelioid-to-rhabdoid cells.",
      "Physaliphorous cells and prominent myxoid matrix are absent or inconspicuous.",
      "Retained nuclear brachyury establishes notochordal differentiation.",
      "Complete loss of INI1/SMARCB1 in tumor cells with retained internal controls is characteristic.",
    ],
    histology: [
      "Tumor grows in solid sheets or nests of epithelioid cells.",
      "Cells may have rhabdoid morphology with eccentric nuclei and abundant eosinophilic cytoplasm.",
      "Conventional chordoma-like myxoid areas and physaliphorous cells are lacking.",
      "Mitoses and necrosis may be more conspicuous than in conventional chordoma.",
    ],
    ihc: [
      "Brachyury is retained and nuclear.",
      "INI1/SMARCB1 is completely lost in tumor cells.",
      "Cytokeratin and EMA are usually positive.",
      "S100 is variable.",
    ],
    differential: [
      {
        name: "AT/RT",
        distinction:
          "AT/RT also loses INI1 but lacks nuclear brachyury and the chordoma epithelial phenotype; clinical age/site and morphology are essential.",
      },
      {
        name: "Conventional chordoma",
        distinction:
          "Conventional chordoma shows physaliphorous cells and myxoid matrix with retained INI1.",
      },
      {
        name: "Rhabdoid meningioma",
        distinction:
          "Rhabdoid meningioma usually retains INI1 and expresses SSTR2A; poorly differentiated chordoma is brachyury-positive and INI1-deficient.",
      },
    ],
    molecular: [
      "Homozygous deletion of SMARCB1 is characteristic.",
      "FISH or sequencing can confirm SMARCB1 deletion when needed.",
    ],
  },
  {
    name: "Chordoma, Dedifferentiated",
    group: "Chordoma",
    clue: "Conventional chordoma juxtaposed with an abrupt high-grade sarcomatous component that loses brachyury and cytokeratin.",
    summary:
      "A biphasic, highly aggressive chordoma subtype with conventional notochordal and high-grade sarcomatous components.",
    clinical: [
      "Usually adults, often with a history of recurrent conventional chordoma.",
      "Occurs in clivus, mobile spine, or sacrococcygeal region.",
      "Rapid enlargement, pain, and neurologic deterioration may signal dedifferentiation.",
    ],
    criteria: [
      "Biphasic tumor with recognizable conventional chordoma and an abrupt transition to high-grade sarcoma.",
      "Conventional component retains brachyury and cytokeratin.",
      "Sarcomatous component typically loses brachyury and cytokeratin.",
      "Extensive sampling is essential to identify the conventional component.",
    ],
    histology: [
      "Conventional chordoma areas show physaliphorous cells in myxoid matrix.",
      "High-grade component is composed of pleomorphic spindle or round cells, often with brisk mitoses and necrosis.",
      "An abrupt transition between the two components may be seen.",
    ],
    ihc: [
      "Brachyury is positive in the conventional component and typically lost in the dedifferentiated component.",
      "Cytokeratin and EMA are retained in conventional chordoma and usually lost in sarcomatous areas.",
      "INI1 is generally retained unless a separate molecular event is present.",
    ],
    differential: [
      {
        name: "Primary bone sarcoma",
        distinction:
          "A primary sarcoma lacks an adjacent conventional chordoma component; extensive sampling and clinical history are critical.",
      },
      {
        name: "Conventional chordoma with high-grade areas",
        distinction:
          "Dedifferentiation requires a distinct high-grade sarcomatous component, not simply increased atypia or mitoses in conventional chordoma.",
      },
      {
        name: "Poorly differentiated chordoma",
        distinction:
          "Poorly differentiated chordoma is an epithelioid/rhabdoid, INI1-deficient tumor with retained brachyury, rather than a biphasic conventional-plus-sarcoma tumor.",
      },
    ],
    molecular: [
      "Molecular alterations may include TBXT amplification and additional genomic complexity.",
      "The sarcomatous component may acquire alterations distinct from the conventional component.",
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

export default function MeningiomaMesenchymalTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Meningioma, Atypical",
    "Chordoma, Conventional",
  ]);
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
    setOpen((v) =>
      v.includes(name) ? v.filter((x) => x !== name) : [...v, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Central Nervous System
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Meningioma and Mesenchymal Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference covering meningioma classification
          and CNS WHO grading, vascular lesions, intracranial mesenchymal
          sarcomas, and chordoma. Emphasis is placed on morphology,
          lineage-defining immunohistochemistry, molecular confirmation, and
          focused differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Meningioma Classification and CNS WHO Grading
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Histologic subtype and grade are related but distinct. Most
          morphologic subtypes are grade 1 unless independent grade 2 or grade 3
          criteria are met. Chordoid and clear cell meningiomas are grade 2 by
          subtype.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-teal-100 bg-white">
          <table className="min-w-[850px] w-full border-collapse text-left text-sm">
            <thead className="bg-teal-900 text-white">
              <tr>
                <th className="p-3">CNS WHO grade</th>
                <th className="p-3">Category</th>
                <th className="p-3">Diagnostic criteria</th>
                <th className="p-3">Key notes</th>
              </tr>
            </thead>
            <tbody>
              {meningiomaGrading.map((r) => (
                <tr
                  key={r.grade}
                  className="border-t border-slate-200 align-top"
                >
                  <td className="p-3 font-bold whitespace-nowrap">{r.grade}</td>
                  <td className="p-3">{r.category}</td>
                  <td className="p-3 leading-6">{r.criteria}</td>
                  <td className="p-3 leading-6">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="mt-5 font-bold text-slate-900">
          WHO-recognized histologic subtypes and usual grade
        </h3>
        <div className="mt-2 overflow-x-auto rounded-xl border border-teal-100 bg-white">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3">Histologic subtype / pattern</th>
                <th className="p-3">Usual grade assignment</th>
                <th className="p-3">Defining feature</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Meningothelial",
                  "Grade 1",
                  "Syncytial lobules; nuclear pseudoinclusions",
                ],
                [
                  "Fibrous (fibroblastic)",
                  "Grade 1",
                  "Spindle-cell fascicles in collagen",
                ],
                [
                  "Transitional",
                  "Grade 1",
                  "Mixed meningothelial and fibrous patterns; whorls",
                ],
                ["Psammomatous", "Grade 1", "Psammoma bodies predominate"],
                ["Angiomatous", "Grade 1", "Numerous vascular channels"],
                [
                  "Microcystic",
                  "Grade 1",
                  "Stellate cells and cobweb-like microcysts",
                ],
                [
                  "Secretory",
                  "Grade 1",
                  "Gland-like differentiation and CEA-positive pseudopsammoma bodies",
                ],
                [
                  "Lymphoplasmacyte-rich",
                  "Grade 1",
                  "Dense chronic inflammatory infiltrate",
                ],
                [
                  "Metaplastic",
                  "Grade 1",
                  "Osseous, cartilaginous, lipomatous, myxoid, or xanthomatous elements",
                ],
                [
                  "Chordoid",
                  "Grade 2 by subtype",
                  "Cords of epithelioid cells in mucin-rich matrix",
                ],
                [
                  "Clear cell",
                  "Grade 2 by subtype",
                  "Glycogen-rich clear cells with prominent collagen",
                ],
                [
                  "Papillary",
                  "Grade by criteria",
                  "Predominant perivascular pseudopapillary pattern",
                ],
                [
                  "Rhabdoid",
                  "Grade by criteria",
                  "Rhabdoid cytology; morphology alone is not grade 3",
                ],
                [
                  "Atypical",
                  "Grade 2",
                  "Mitotic, brain invasion, or specified atypical-feature criteria",
                ],
                [
                  "Anaplastic (malignant)",
                  "Grade 3",
                  "High mitotic activity, frank malignant cytology, or molecular grade-defining alteration",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-slate-200 align-top">
                  <td className="p-3 font-semibold">{r[0]}</td>
                  <td className="p-3">{r[1]}</td>
                  <td className="p-3">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Grading cautions:</strong> Brain invasion qualifies for grade
          2, not grade 3. Papillary or rhabdoid morphology alone does not
          automatically establish grade 3. TERT promoter mutation or homozygous
          CDKN2A/B deletion independently establishes grade 3. Ki-67 is useful
          for risk assessment but is not a stand-alone formal grading criterion.
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Meningioma: Practical IHC and Molecular Panel
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              <strong>EMA:</strong> commonly positive, sometimes weak or absent
              in fibrous and high-grade tumors.
            </li>
            <li>
              <strong>SSTR2A:</strong> strong diffuse staining is highly useful;
              interpret cautiously because some neuroendocrine tumors also
              express it.
            </li>
            <li>
              <strong>PR:</strong> frequently positive in grade 1 tumors;
              expression may decrease with grade.
            </li>
            <li>
              <strong>STAT6:</strong> nuclear positivity supports solitary
              fibrous tumor, not meningioma.
            </li>
            <li>
              <strong>
                TERT promoter mutation / CDKN2A/B homozygous deletion:
              </strong>{" "}
              each independently supports CNS WHO grade 3.
            </li>
            <li>
              <strong>SMARCE1:</strong> loss supports clear cell meningioma;{" "}
              <strong>BAP1</strong> loss identifies a subset with aggressive
              behavior.
            </li>
            <li>
              <strong>NF2, TRAF7, AKT1, KLF4, SMO, PIK3CA:</strong> alterations
              help define molecular subgroups and may support diagnosis in
              selected settings.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Chordoma: Diagnostic Essentials
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              <strong>Brachyury:</strong> nuclear expression is the key
              notochordal lineage marker.
            </li>
            <li>
              <strong>Cytokeratin and EMA:</strong> usually positive in
              conventional chordoma.
            </li>
            <li>
              <strong>Physaliphorous cells:</strong> large vacuolated cells in a
              myxoid matrix are characteristic of conventional chordoma.
            </li>
            <li>
              <strong>Chondroid chordoma:</strong> cartilage-like matrix does
              not negate chordoma if brachyury-positive tumor cells are present.
            </li>
            <li>
              <strong>Poorly differentiated chordoma:</strong> retained
              brachyury with complete INI1 loss.
            </li>
            <li>
              <strong>Dedifferentiated chordoma:</strong> conventional chordoma
              juxtaposed with high-grade sarcoma; the sarcomatous component
              often loses brachyury and cytokeratin.
            </li>
            <li>
              Always distinguish chordoma from chordoid meningioma and
              chondrosarcoma using anatomic site, morphology, and a focused
              panel.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tumors, markers, morphology, grading criteria, or differential diagnoses..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() =>
                setOpen(allOpen ? [] : filtered.map((e) => e.name))
              }
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            <button
              onClick={() => {
                setQuery("");
                setGroup("All");
              }}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${group === g ? "bg-teal-700 text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-800"}`}
            >
              {g}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Showing {filtered.length} of {entities.length} diagnostic entities
        </p>
      </section>

      <section className="space-y-4">
        {filtered.map((e) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-teal-800">
                      {e.group}
                    </span>
                    {e.grade && (
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800">
                        {e.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{e.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {e.clue}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {e.summary}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-xl font-light text-teal-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 px-5 pb-6">
                  <Section title="Clinical Profile">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.clinical.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Essential Diagnostic Criteria">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.criteria.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Histopathology">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.histology.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Immunophenotype">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.ihc.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Differential Diagnosis">
                    <div className="space-y-2">
                      {e.differential.map((d, i) => (
                        <div
                          key={`${d.name}-${i}`}
                          className="rounded-lg border border-slate-100 bg-slate-50/70 p-3"
                        >
                          <div className="text-sm font-semibold text-slate-900">
                            {d.name}
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {d.distinction}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                  <Section title="Molecular Pathology">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.molecular.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  {e.pitfalls && (
                    <Section title="Diagnostic Pitfalls">
                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                        {e.pitfalls.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No entities match the current search. Try another term or reset the
            filters.
          </div>
        )}
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Meningioma and Mesenchymal Tumors · Diagnostic reference
        for professional use. Interpret morphology, immunohistochemistry,
        molecular findings, and imaging together.
      </footer>
    </main>
  );
}
