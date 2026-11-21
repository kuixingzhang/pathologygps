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
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Seminoma of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "Uniform clear-to-eosinophilic germ cells in lobules with a lymphocytic or granulomatous background; OCT4 and KIT are typically positive.",
    summary:
      "A primary postpubertal mediastinal malignant germ cell tumor; exclude a gonadal primary with clinical examination and imaging.",
    clinical: [
      "Usually postpubertal males; median age in reported series is approximately 28–47 years.",
      "Typically arises in the anterior (prevascular) mediastinum; middle mediastinal presentation is rare.",
      "Often presents as a bulky mass with chest pain, cough, or dyspnea; serum AFP should be normal in pure seminoma.",
    ],
    criteria: [
      "Lobules, nests, cords, or sheets of large, relatively uniform polygonal germ cells with clear or lightly eosinophilic cytoplasm.",
      "Lymphocytic and/or granulomatous background, often with fibrous septa.",
      "Tumor cells express OCT4, SALL4, and usually KIT (CD117); correlate with serum AFP and testicular imaging to establish primary mediastinal origin.",
    ],
    histology: [
      "Tumor cells have round-to-oval vesicular nuclei, conspicuous nucleoli, distinct cell borders, and glycogen-rich clear cytoplasm; eosinophilic cytoplasm may occur.",
      "Growth is commonly lobular or multinodular, separated by fibrous septa containing lymphocytes and sometimes granulomas.",
      "Cystic change and necrosis may occur; extensive hemorrhage is less characteristic than in choriocarcinoma.",
    ],
    ihc: [
      "OCT4 and SALL4 are typically strong and diffuse.",
      "KIT (CD117), D2-40, and PLAP are commonly positive; CD99 may be positive.",
      "Keratin can be focally positive, often with a paranuclear dot-like pattern; CD30 is generally negative.",
      "Exclude lymphoma with CD45 and consider TdT cautiously because background immature T cells may be present.",
    ],
    differential: [
      {
        name: "Embryonal carcinoma",
        distinction:
          "Usually more pleomorphic, with indistinct cell borders, prominent mitotic activity, necrosis, and solid, glandular, or papillary growth; CD30 and SOX2 support embryonal carcinoma.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Shows more varied reticular, microcystic, glandular, or hepatoid patterns; GPC3 and glypican-3 support yolk sac tumor, whereas OCT4 is negative.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Biphasic cytotrophoblast and syncytiotrophoblast with extensive hemorrhage and markedly elevated β-hCG.",
      },
      {
        name: "Teratoma",
        distinction:
          "Contains mature or immature somatic tissues from one or more germ layers rather than a monotonous seminomatous population.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Contains two or more distinct germ cell tumor components; identify and report each component, including any nonseminomatous component.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "Shows a recognizable somatic carcinoma or sarcoma arising in association with a germ cell tumor; sample extensively for the conventional germ cell component.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "Shows a distinct clonal hematologic neoplasm, often acute leukemia; establish the hematologic lineage with a dedicated panel and correlate with marrow/blood findings.",
      },
    ],
    molecular: [
      "Postpubertal type II mediastinal germ cell tumors commonly show 12p gain or isochromosome 12p; FISH is rarely required in a morphologically and immunophenotypically typical seminoma.",
      "Activating KIT mutations are reported in a subset; a rare KRAS-mutated case has been described.",
    ],
    pitfalls: [
      "A seminoma with any nonseminomatous component is classified as a nonseminomatous germ cell tumor.",
      "Exclude a testicular primary because testicular seminoma can metastasize to mediastinal lymph nodes.",
      "Do not interpret scattered TdT-positive background T cells as lymphoblastic lymphoma.",
    ],
  },
  {
    name: "Embryonal Carcinoma of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "Highly atypical epithelial-like germ cells with brisk mitoses and necrosis; OCT4, CD30, SOX2, and SALL4 are typically positive.",
    summary:
      "An uncommon, aggressive nonseminomatous germ cell tumor, usually occurring in young men.",
    clinical: [
      "Predominantly affects young men; reported median age is approximately 28 years.",
      "Arises in the anterior (prevascular) mediastinum.",
      "May present with chest pain, dyspnea, cough, or superior vena cava syndrome; elevated AFP usually indicates an associated yolk sac tumor component.",
    ],
    criteria: [
      "Large polygonal or columnar malignant cells with prominent nucleoli, indistinct cell borders, and brisk mitotic activity.",
      "Solid, papillary, and/or tubular-glandular architecture, often with necrosis.",
      "A supportive panel includes OCT4, SALL4, CD30, SOX2, and keratin; interpret in conjunction with morphology.",
    ],
    histology: [
      "Tumor cells have moderate eosinophilic, amphophilic, basophilic, or clear cytoplasm and large single or multiple nucleoli.",
      "Solid, papillary, tubular, and glandular patterns may coexist.",
      "Mitoses, including atypical forms, are numerous; hemorrhage and geographic necrosis are common.",
      "Scattered syncytiotrophoblasts may be present and can express β-hCG without establishing choriocarcinoma.",
    ],
    ihc: [
      "OCT4 and SALL4 are usually positive.",
      "CD30 and SOX2 are typically positive; keratins are commonly expressed.",
      "KIT (CD117) is generally negative, helping distinguish embryonal carcinoma from seminoma.",
      "CD45 is negative; use a panel because individual markers overlap with other mediastinal tumors.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "More uniform cells with clear cytoplasm and lymphocyte-rich septa; typically KIT-positive and CD30-negative.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "More diverse architecture, including reticular/microcystic areas and Schiller–Duval bodies; GPC3 is typically positive and OCT4/SOX2 are negative.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Biphasic trophoblastic population, prominent syncytiotrophoblasts, extensive hemorrhage, and very high β-hCG.",
      },
      {
        name: "Teratoma",
        distinction:
          "Mature or immature somatic tissue elements are present; immature neuroepithelium alone does not establish embryonal carcinoma.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Contains additional germ cell tumor components; search extensively for yolk sac tumor, teratoma, seminoma, and trophoblastic elements.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "A differentiated carcinoma or sarcoma component shows somatic lineage rather than the primitive OCT4-positive embryonal phenotype.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "A separate blast population expresses hematolymphoid lineage markers and should be classified as an associated hematologic neoplasm.",
      },
    ],
    molecular: [
      "No specific molecular test is established for routine diagnosis of primary mediastinal embryonal carcinoma.",
      "12p gain/isochromosome 12p may support a postpubertal type II germ cell tumor in selected cases.",
    ],
    pitfalls: [
      "AFP elevation usually reflects an associated yolk sac tumor component rather than embryonal carcinoma itself.",
      "Scattered β-hCG-positive syncytiotrophoblasts do not by themselves establish choriocarcinoma.",
    ],
  },
  {
    name: "Yolk Sac Tumor of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "Diverse reticular, microcystic, glandular, or hepatoid patterns with GPC3 and SALL4 expression; serum AFP is usually markedly elevated.",
    summary:
      "A malignant nonseminomatous germ cell tumor showing differentiation toward yolk sac and extraembryonic structures.",
    clinical: [
      "In adults, occurs predominantly in men and peaks in the third decade; in young children it is the most common malignant mediastinal germ cell tumor and favors girls.",
      "Usually arises in the anterior (prevascular) mediastinum; posterior mediastinal cases are rare.",
      "Presents with chest pain, dyspnea, fever, or superior vena cava syndrome; serum AFP is almost always elevated.",
    ],
    criteria: [
      "A malignant germ cell neoplasm with one or more characteristic yolk sac patterns, commonly reticular/microcystic, glandular-alveolar, endodermal sinus, myxomatous, hepatoid, or solid.",
      "Schiller–Duval bodies are a hallmark but may be absent.",
      "Coexpression of keratin, SALL4, and GPC3, with variable AFP; OCT4 is negative.",
    ],
    histology: [
      "Reticular/microcystic areas show anastomosing spaces lined by flattened or cuboidal tumor cells.",
      "Schiller–Duval bodies, hyaline globules, and pseudopapillary endodermal sinus structures may be present.",
      "Additional patterns include macrocystic, glandular-alveolar, myxomatous, hepatoid, enteric, polyvesicular-vitelline, solid, and spindle-cell areas.",
      "Hepatoid areas contain cells with abundant eosinophilic cytoplasm resembling hepatocytes; solid areas may mimic seminoma or embryonal carcinoma.",
      "Rare syncytiotrophoblasts may occur without changing the diagnosis to mixed germ cell tumor.",
    ],
    ihc: [
      "Keratin, SALL4, GPC3, and LIN28 are typically positive.",
      "AFP and PLAP are variable and may be absent in a substantial subset.",
      "OCT4, NANOG, SOX2, and D2-40 are typically negative.",
      "Rare syncytiotrophoblasts may be β-hCG-positive; interpret staining in the context of the overall tumor.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "Uniform polygonal cells with lymphocytic septa; OCT4 and D2-40 are typically positive, whereas GPC3 is negative.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "More pleomorphic cells with brisk mitoses and less architectural diversity; OCT4, SOX2, and CD30 are usually positive.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Biphasic trophoblastic morphology with extensive hemorrhage and strong β-hCG; isolated syncytiotrophoblasts can occur in yolk sac tumor.",
      },
      {
        name: "Teratoma",
        distinction:
          "Contains recognizable mature or immature somatic tissues; focal GPC3 or AFP in endodermal elements does not establish yolk sac tumor.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Contains a second distinct germ cell component; identify and quantify each component rather than classifying a single-pattern yolk sac tumor as mixed.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "Shows a distinct somatic carcinoma or sarcoma, often with loss of the usual germ cell phenotype in the transformed component.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "Contains a separate clonal hematologic neoplasm; the hematologic component is not simply a primitive solid pattern of yolk sac tumor.",
      },
    ],
    molecular: [
      "In children younger than 8 years, characteristic chromosome gains and losses may occur without 12p isochromosome; older patients more often show 12p abnormalities.",
      "12p testing can support a postpubertal germ cell tumor in selected cases but is not usually required for diagnosis.",
    ],
    pitfalls: [
      "AFP may be only focally expressed by tumor cells despite markedly elevated serum AFP.",
      "Hepatoid morphology requires exclusion of metastatic hepatocellular or hepatoid carcinoma.",
      "A solid pattern can mimic seminoma or embryonal carcinoma; use a panel rather than a single marker.",
    ],
  },
  {
    name: "Choriocarcinoma of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "Biphasic trophoblastic tumor with syncytiotrophoblasts and cytotrophoblasts, extensive hemorrhage, and markedly elevated β-hCG.",
    summary:
      "A rare, highly aggressive nonseminomatous germ cell tumor, usually presenting in adult men.",
    clinical: [
      "Almost all reported patients are adult men, with a broad reported age range of approximately 17–63 years.",
      "Usually arises in the anterior mediastinum, but posterior mediastinal cases occur.",
      "Rapid growth, lung invasion, hemorrhage, and very high serum β-hCG are characteristic; gynecomastia or thyrotoxicosis may occur.",
    ],
    criteria: [
      "Biphasic proliferation of cytotrophoblasts and syncytiotrophoblasts, with or without intermediate trophoblast-like cells.",
      "Prominent vascular spaces, extensive hemorrhage, and necrosis.",
      "Strong β-hCG expression in syncytiotrophoblasts and markedly elevated serum β-hCG support the diagnosis.",
    ],
    histology: [
      "Cytotrophoblasts are relatively uniform polygonal cells with clear or eosinophilic cytoplasm and prominent nucleoli.",
      "Syncytiotrophoblasts are large multinucleated cells with abundant dense eosinophilic or amphophilic cytoplasm and pleomorphic nuclei.",
      "The two cell populations form bilaminar plexiform arrangements or disordered sheets, often associated with dilated vascular sinusoids.",
      "Extensive hemorrhage, necrosis, vascular wall involvement, and atypical mitoses are common.",
    ],
    ihc: [
      "Syncytiotrophoblasts show strong β-hCG expression.",
      "SALL4 and LIN28 may be expressed and are not specific for choriocarcinoma.",
      "Keratin is typically positive; interpret trophoblastic markers with the characteristic biphasic morphology.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "Monomorphic germ cells with lymphocytic septa; lacks the biphasic trophoblastic population and extensive hemorrhagic pattern.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "Primitive epithelial cells with CD30/OCT4/SOX2 expression; scattered syncytiotrophoblasts may occur but do not form a true biphasic choriocarcinoma.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Shows reticular and other yolk sac patterns with GPC3; occasional β-hCG-positive syncytiotrophoblasts do not establish choriocarcinoma.",
      },
      {
        name: "Teratoma",
        distinction:
          "Contains mature or immature somatic tissues rather than a pure trophoblastic neoplasm.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Contains additional distinct germ cell components; choriocarcinoma is often one component of a mixed tumor.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "A somatic carcinoma or sarcoma is morphologically distinct from trophoblastic differentiation and may lack β-hCG.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "A separate hematologic blast population is present and requires lineage-specific immunophenotyping.",
      },
    ],
    molecular: [
      "Isochromosome 12p or other 12p gain may be identified, supporting a postpubertal type II germ cell tumor.",
    ],
    pitfalls: [
      "Do not diagnose choriocarcinoma solely because scattered syncytiotrophoblasts stain for β-hCG.",
      "Correlate with serum β-hCG and exclude a gonadal primary.",
    ],
  },
  {
    name: "Teratoma of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "A mixture of mature or immature tissues from one or more germ layers; radiologic fat, fluid, or bone strongly supports teratoma.",
    summary:
      "Mediastinal teratomas span mature benign lesions and immature or malignant tumors; age and histologic sampling are critical.",
    clinical: [
      "Mature teratomas occur across a broad age range, including infants and young adults; malignant germ cell tumors are more typical after puberty.",
      "Predominantly located in the anterior (prevascular) mediastinum.",
      "May be incidental or cause chest pain, cough, dyspnea, or compressive symptoms; fat-fluid levels or bone on imaging are highly characteristic.",
    ],
    criteria: [
      "Recognizable derivatives of one or more germ layers, including mature somatic tissues and/or immature embryonal elements.",
      "Assess for immature neuroepithelium and extensively sample for yolk sac tumor or other malignant germ cell components.",
      "Distinguish a pure teratoma from a mixed germ cell tumor and from teratoma with somatic-type malignancy.",
    ],
    histology: [
      "Mature teratoma contains well-differentiated tissues such as skin and adnexa, respiratory or gastrointestinal epithelium, cartilage, bone, adipose tissue, and neural tissue.",
      "Immature teratoma contains immature embryonal tissues, most often neuroepithelium, in variable amounts.",
      "Cystic change is common; mature and immature components may be heterogeneous and unevenly distributed.",
      "A somatic-type carcinoma or sarcoma arising in teratoma should be separately recognized and reported.",
    ],
    ihc: [
      "Immunophenotype depends on the tissue components; use lineage-directed stains only for a specific suspicious component.",
      "SALL4, OCT4, or GPC3 may label selected primitive or endodermal elements and should not be interpreted as proof of a separate germ cell tumor without matching morphology.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "A monotonous population of OCT4-positive germ cells with lymphocytic septa; lacks mature somatic tissue derivatives.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "A highly atypical OCT4/CD30/SOX2-positive primitive epithelial tumor without the diverse mature tissue components of teratoma.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Shows characteristic reticular or other yolk sac patterns with GPC3/SALL4; focal marker expression in teratomatous endoderm is insufficient.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Biphasic trophoblastic cells with hemorrhage and β-hCG expression, rather than differentiated somatic tissues.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Contains a distinct malignant germ cell component in addition to teratoma; extensive sampling is essential.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "A recognizable carcinoma or sarcoma arising in a germ cell tumor is classified separately as somatic-type malignancy.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "Shows a separate clonal hematologic neoplasm rather than immature hematopoietic tissue intrinsic to a teratoma.",
      },
    ],
    molecular: [
      "Type I teratomas, especially in infants and young children, generally lack the 12p gain characteristic of postpubertal type II germ cell tumors.",
      "12p gain may support a postpubertal germ cell tumor when a malignant component is suspected.",
    ],
    pitfalls: [
      "Do not overcall immature neuroepithelium as embryonal carcinoma.",
      "Extensively sample solid, hemorrhagic, or unusually firm areas to exclude a malignant germ cell component or somatic-type malignancy.",
    ],
  },
  {
    name: "Mixed Germ Cell Tumor of the Mediastinum",
    group: "Germ Cell Tumors",
    clue: "Two or more distinct germ cell tumor components; any nonseminomatous component makes the overall tumor nonseminomatous.",
    summary:
      "A heterogeneous germ cell neoplasm, more common in adults and strongly male-predominant.",
    clinical: [
      "Most often affects adult men; mixed tumors are more common in adults than in young children.",
      "Usually arises in the anterior (prevascular) mediastinum.",
      "Presents as a large heterogeneous mass; serum AFP and β-hCG depend on the component composition.",
    ],
    criteria: [
      "At least two morphologically distinct germ cell tumor components are present.",
      "Identify and estimate the proportion of each component, including seminoma, embryonal carcinoma, yolk sac tumor, choriocarcinoma, and teratoma.",
      "A seminoma admixed with any nonseminomatous component is classified as a nonseminomatous germ cell tumor.",
    ],
    histology: [
      "The tumor shows a combination of recognizable patterns, which may be sharply demarcated or intimately admixed.",
      "Different areas may show seminomatous, embryonal, yolk sac, trophoblastic, or teratomatous morphology.",
      "Extensive sampling is required because small components may determine classification, serum marker interpretation, and prognosis.",
      "Somatic-type malignancy and associated hematologic malignancy may arise in tumors with a yolk sac component.",
    ],
    ihc: [
      "Use a morphology-directed panel; no single immunostain reliably identifies all components.",
      "OCT4 and KIT support seminoma/embryonal carcinoma; CD30 and SOX2 support embryonal carcinoma; GPC3 and AFP support yolk sac tumor; β-hCG highlights trophoblastic cells.",
      "SALL4 is a broad germ cell marker and is not sufficient to classify the component by itself.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "A pure seminoma lacks any distinct nonseminomatous component; even a small unequivocal nonseminomatous component changes the overall classification.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "A pure embryonal carcinoma lacks a second germ cell component; identify additional yolk sac, teratomatous, seminomatous, or trophoblastic areas.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "A pure yolk sac tumor may show multiple patterns but does not contain a separate, unequivocal second germ cell tumor type.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "A pure choriocarcinoma is dominated by biphasic trophoblastic morphology; other germ cell components establish a mixed tumor.",
      },
      {
        name: "Teratoma",
        distinction:
          "A pure teratoma contains mature/immature somatic tissues without a separate malignant germ cell component.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "A differentiated somatic carcinoma or sarcoma arising in a germ cell tumor is not simply another conventional germ cell component.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "A clonally related hematologic neoplasm is a separate associated malignancy and should be documented independently.",
      },
    ],
    molecular: [
      "Postpubertal mixed germ cell tumors commonly show 12p gain or isochromosome 12p.",
      "Molecular testing is not required when the components are morphologically and immunophenotypically established.",
    ],
    pitfalls: [
      "Do not classify a seminoma-containing mixed tumor as pure seminoma.",
      "Do not mistake the multiple architectural patterns of yolk sac tumor for multiple germ cell tumor components.",
    ],
  },
  {
    name: "Mediastinal Germ Cell Tumor with Somatic-Type Malignancy",
    group: "Germ Cell Tumors",
    clue: "A conventional germ cell tumor associated with a morphologically distinct carcinoma or sarcoma showing somatic differentiation.",
    summary:
      "A rare, clinically important transformation arising in a mediastinal germ cell tumor, often associated with teratoma or yolk sac tumor.",
    clinical: [
      "Usually occurs in adolescents or adults with a postpubertal germ cell tumor.",
      "Typically involves the anterior mediastinum.",
      "May present as a recurrent or enlarging mass despite treatment directed at conventional germ cell tumor; outcome is often driven by the somatic malignancy.",
    ],
    criteria: [
      "A recognizable germ cell tumor component is present or established in the clinical/pathologic history.",
      "A distinct sarcoma or carcinoma component shows somatic-type differentiation.",
      "Immunophenotype should support the corresponding germ cell and somatic components separately.",
    ],
    histology: [
      "The germ cell component may be teratoma, yolk sac tumor, or another conventional germ cell tumor.",
      "The somatic-type malignancy may be sarcoma or carcinoma and should be classified according to its morphology when possible.",
      "The transformed component may dominate the specimen; extensive sampling may be required to identify residual germ cell tumor.",
      "Atypical spindle-cell, pleomorphic, epithelial, or gland-forming areas should prompt targeted sampling and immunohistochemistry.",
    ],
    ihc: [
      "The conventional germ cell component retains a component-appropriate phenotype, such as SALL4, OCT4, GPC3, or β-hCG.",
      "The somatic malignancy expresses markers appropriate to its lineage; no single universal immunophenotype defines this category.",
      "Compare the immunophenotype of each component rather than assuming all tumor cells share germ cell marker expression.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "Seminoma is composed of germ cells without a distinct somatic carcinoma or sarcoma component.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "Embryonal carcinoma is a primitive germ cell component, usually OCT4/CD30/SOX2-positive, rather than a differentiated somatic malignancy.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Yolk sac tumor can show hepatoid or enteric morphology, but a separate somatic carcinoma/sarcoma requires convincing lineage-specific morphology and immunophenotype.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Trophoblastic differentiation is characterized by cytotrophoblast and syncytiotrophoblast, not conventional somatic carcinoma or sarcoma.",
      },
      {
        name: "Teratoma",
        distinction:
          "Teratoma contains mature or immature somatic tissues; malignant transformation requires a frankly malignant somatic component.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "A mixed tumor contains multiple conventional germ cell components; a somatic-type malignancy is a distinct transformed component and should be separately designated.",
      },
      {
        name: "Germ cell tumor with associated hematologic malignancy",
        distinction:
          "The associated hematologic neoplasm is a clonally related leukemia/MDS-type process rather than a somatic carcinoma or sarcoma.",
      },
    ],
    molecular: [
      "12p gain/isochromosome 12p in the germ cell component can support a postpubertal germ cell origin.",
      "Molecular comparison may help establish clonal relatedness between the germ cell and somatic-type malignant components in selected cases.",
    ],
    pitfalls: [
      "Do not classify a somatic-type carcinoma or sarcoma as a conventional germ cell component.",
      "The transformed component may lose expression of germ cell markers.",
    ],
  },
  {
    name: "Mediastinal Germ Cell Tumor with Associated Hematologic Malignancy",
    group: "Germ Cell Tumors",
    clue: "A germ cell tumor accompanied by a distinct clonal hematologic neoplasm, most often acute leukemia or myeloid neoplasia.",
    summary:
      "A rare association, particularly with yolk sac tumor-containing mediastinal germ cell tumors in adults.",
    clinical: [
      "Predominantly affects adults with mediastinal nonseminomatous germ cell tumors, especially tumors containing yolk sac tumor.",
      "Usually accompanies an anterior mediastinal germ cell tumor; hematologic disease may be intratumoral, marrow-based, or systemic.",
      "May present with cytopenias, leukocytosis, circulating blasts, or an enlarging mediastinal mass.",
    ],
    criteria: [
      "A malignant mediastinal germ cell tumor is identified.",
      "A distinct hematologic malignancy is present within the tumor and/or at an extramediastinal site.",
      "Use morphology, lineage-specific immunophenotyping, cytogenetics, and clinical/marrow correlation to classify both components.",
    ],
    histology: [
      "The germ cell component may be mixed or pure yolk sac tumor.",
      "The hematologic component commonly resembles acute myeloid leukemia or a myeloid neoplasm and may be intermingled with or adjacent to the germ cell tumor.",
      "The hematologic component is a separate neoplastic population, not merely inflammatory cells or immature elements within a yolk sac tumor.",
      "Compare the morphologic and immunophenotypic profiles of the two populations on serial sections or with targeted studies.",
    ],
    ihc: [
      "The germ cell component is characterized with an appropriate panel, including SALL4, GPC3, OCT4, and other morphology-directed markers.",
      "The hematologic component is evaluated with myeloid and lineage markers such as MPO, CD34, CD117, CD33, CD43, and lysozyme as appropriate.",
      "Flow cytometry and marrow examination are important when systemic hematologic disease is suspected.",
    ],
    differential: [
      {
        name: "Seminoma",
        distinction:
          "A pure seminoma lacks a separate clonal hematologic neoplasm; confirm that the second population is truly hematologic and not background thymic lymphocytes.",
      },
      {
        name: "Embryonal carcinoma",
        distinction:
          "Embryonal carcinoma cells are primitive epithelial germ cells expressing OCT4/CD30/SOX2, not a distinct myeloid or lymphoid blast population.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Yolk sac tumor may contain varied primitive-appearing cells, but an associated hematologic malignancy has a separate lineage-specific phenotype and clonal profile.",
      },
      {
        name: "Choriocarcinoma",
        distinction:
          "Trophoblastic cells are β-hCG-positive and show characteristic biphasic morphology, unlike hematopoietic blasts.",
      },
      {
        name: "Teratoma",
        distinction:
          "Teratoma may contain hematopoietic tissue as a differentiated component, but this is not equivalent to a clonal hematologic malignancy.",
      },
      {
        name: "Mixed germ cell tumor",
        distinction:
          "Multiple conventional germ cell components do not constitute a hematologic malignancy; establish a separate hematopoietic clone.",
      },
      {
        name: "Germ cell tumor with somatic-type malignancy",
        distinction:
          "Somatic-type malignancy is carcinoma or sarcoma; this category requires a distinct hematologic neoplasm.",
      },
    ],
    molecular: [
      "Cytogenetic studies can be helpful in selected cases to characterize the hematologic neoplasm and assess clonal relationships.",
      "The associated hematologic malignancy may share a common precursor with the germ cell tumor; molecular/cytogenetic comparison can support this relationship.",
    ],
    pitfalls: [
      "Do not mistake hematopoietic differentiation within teratoma for a hematologic malignancy.",
      "Do not overlook a second blast population in a yolk sac tumor-containing mediastinal mass.",
    ],
  },
  {
    name: "Primary Mediastinal Large B-Cell Lymphoma",
    group: "Mediastinal Lymphomas",
    clue: "Anterior mediastinal large B-cell lymphoma with sclerosis and a mature B-cell phenotype; CD23 and/or CD30 is often expressed.",
    summary:
      "A distinct large B-cell lymphoma arising in the thymic mediastinum, usually in young adults.",
    clinical: [
      "Usually affects young adults, with a female predominance.",
      "Presents as a bulky anterior (prevascular) mediastinal mass, often with local invasion or superior vena cava syndrome.",
      "Extramediastinal disease is absent or limited at presentation; lung, pleural, or pericardial involvement may occur.",
    ],
    criteria: [
      "Large B-cell lymphoma centered in the anterior mediastinum with no or only minor extramediastinal spread.",
      "Mature B-cell phenotype, with at least partial expression of CD23 and/or CD30.",
      "Characteristic compartmentalizing sclerosis supports the diagnosis in the appropriate clinical setting.",
    ],
    histology: [
      "Sheets of large cells with clear-to-pale cytoplasm, vesicular nuclei, and prominent nucleoli are separated by broad or delicate fibrous bands.",
      "Compartmentalizing sclerosis is common and may be prominent.",
      "Tumor cells may have a diffuse growth pattern with variable clear-cell change; inflammatory background is usually less prominent than in classic Hodgkin lymphoma.",
    ],
    ihc: [
      "CD20, CD79a, PAX5, OCT2, and BOB1 support a mature B-cell phenotype.",
      "CD23 is commonly positive; CD30 is variably positive, often weaker or more heterogeneous than in classic Hodgkin lymphoma.",
      "MAL and CD200 may be helpful; CD15 is usually negative.",
      "CD45 is generally positive, unlike classic Hodgkin/Reed–Sternberg cells.",
    ],
    differential: [
      {
        name: "MALT lymphoma of the mediastinum",
        distinction:
          "Small B cells, lymphoepithelial lesions, plasmacytic differentiation, and a cystic thymic background; lacks sheets of large B cells.",
      },
      {
        name: "Mediastinal T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Immature T-cell phenotype with TdT and cytoplasmic CD3; lacks a mature B-cell program.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "Scattered H/RS cells in a mixed inflammatory background with weak PAX5, strong CD30, frequent CD15, and usually absent/weak CD20.",
      },
      {
        name: "Mediastinal grey zone lymphoma",
        distinction:
          "Shows overlapping CHL-like cytology and PMBCL-like B-cell marker expression, often with greater pleomorphism and CD30.",
      },
    ],
    molecular: [
      "Recurrent alterations involving 9p24.1/JAK2 and immune-checkpoint genes are characteristic biological features; molecular testing is not routinely required for diagnosis.",
      "Molecular profiling may help in selected difficult cases but must be interpreted with morphology and phenotype.",
    ],
    pitfalls: [
      "A mediastinal mass alone is insufficient; establish the mature B-cell phenotype and appropriate distribution.",
      "When morphology and phenotype are discordant between PMBCL and classic Hodgkin lymphoma, consider mediastinal grey zone lymphoma only after excluding other defined entities.",
    ],
  },
  {
    name: "MALT Lymphoma of the Mediastinum (Thymic Extranodal Marginal Zone Lymphoma)",
    group: "Mediastinal Lymphomas",
    clue: "Small B-cell infiltrate with lymphoepithelial lesions in a cystic thymic lesion; commonly associated with Sjögren syndrome.",
    summary:
      "A rare thymic extranodal marginal zone lymphoma, often presenting as a multilocular cystic anterior mediastinal mass.",
    clinical: [
      "Usually affects adults in the sixth or seventh decade; female predominance and increased frequency in Asian populations are reported.",
      "Arises in the thymus/anterior (prevascular) mediastinum.",
      "Often incidental or associated with chest symptoms; Sjögren syndrome and monoclonal gammopathy, often IgA, are important associations.",
    ],
    criteria: [
      "Interfollicular or diffuse infiltrate of centrocyte-like and small lymphoid cells effacing thymic architecture.",
      "B-lineage phenotype with exclusion of other small B-cell lymphomas.",
      "Lymphoepithelial lesions and plasmacytic differentiation with monotypic immunoglobulin support the diagnosis.",
    ],
    histology: [
      "Residual thymic cysts and epithelial structures are often present within an effaced thymic architecture.",
      "Centrocyte-like, monocytoid, plasmacytoid lymphocytes, and plasma cells surround reactive follicles.",
      "Lymphoma cells infiltrate and expand thymic epithelium, forming lymphoepithelial lesions.",
      "Large-cell transformation is very rare; assess for confluent sheets of large cells if cytologic progression is suspected.",
    ],
    ihc: [
      "CD20, CD19, and CD79a are positive; CD5, CD10, CD23, BCL6, and cyclin D1 are typically negative.",
      "Plasmacytic cells may show monotypic cytoplasmic immunoglobulin, commonly IgA.",
      "Flow cytometry can demonstrate a CD5-negative/CD10-negative clonal B-cell population with light-chain restriction.",
    ],
    differential: [
      {
        name: "Primary mediastinal large B-cell lymphoma",
        distinction:
          "Large B cells with sclerosis and CD23/CD30 expression; MALT lymphoma is composed mainly of small B cells with lymphoepithelial lesions.",
      },
      {
        name: "Mediastinal T-lymphoblastic leukemia/lymphoma",
        distinction:
          "TdT-positive immature T cells with cytoplasmic CD3, rather than a clonal mature B-cell population.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "Scattered CD30-positive H/RS cells in a mixed inflammatory background; lacks a diffuse monotypic small B-cell infiltrate.",
      },
      {
        name: "Mediastinal grey zone lymphoma",
        distinction:
          "Confluent pleomorphic large cells with overlapping CHL/PMBCL phenotype, rather than a small-cell marginal zone pattern.",
      },
    ],
    molecular: [
      "Clonal IG gene rearrangement can support the diagnosis in difficult cases.",
      "MALT1 or IGH translocations common in MALT lymphoma at other sites are generally absent in thymic MALT lymphoma.",
    ],
    pitfalls: [
      "A multilocular thymic cyst with reactive lymphoid hyperplasia can mimic MALT lymphoma; demonstrate a clonal B-cell population and destructive lymphoepithelial lesions.",
      "Correlate with Sjögren syndrome and evaluate for MALT lymphoma at other sites.",
    ],
  },
  {
    name: "Mediastinal T-Lymphoblastic Leukemia/Lymphoma",
    group: "Mediastinal Lymphomas",
    clue: "Thymic mass of immature T cells expressing TdT and cytoplasmic CD3, often with a high proliferative index.",
    summary:
      "A precursor T-cell neoplasm presenting as a mediastinal mass (T-LBL) or with extensive blood/marrow disease (T-ALL).",
    clinical: [
      "Most often affects children, adolescents, and young adults; male predominance is typical.",
      "Usually involves the thymus/anterior (prevascular) mediastinum and may involve peripheral lymph nodes.",
      "Rapidly enlarging mass may cause dyspnea, chest pain, pleural/pericardial effusions, or respiratory distress; leukocytosis and marrow involvement favor T-ALL.",
    ],
    criteria: [
      "Diffuse proliferation of lymphoblasts replacing thymic tissue or lymph node.",
      "Immature T-cell phenotype with cytoplasmic CD3 and usually TdT; evaluate CD1a, CD2, CD5, CD7, CD4, and CD8.",
      "Distinguish T-LBL from T-ALL by the extent of peripheral blood and bone marrow involvement.",
    ],
    histology: [
      "Small-to-medium lymphoblasts have scant cytoplasm, fine-to-moderately condensed chromatin, and inconspicuous nucleoli.",
      "Nuclei may be irregular, convoluted, clefted, or round; mitoses are frequent.",
      "Tingible-body macrophages may create a starry-sky appearance; eosinophils should prompt consideration of a myeloid/lymphoid neoplasm with kinase fusion.",
    ],
    ihc: [
      "TdT and cytoplasmic CD3 are typically positive; CD7 is commonly expressed.",
      "CD1a, CD2, CD5, CD4, and CD8 are variably expressed; CD4/CD8 double positivity is common.",
      "CD34 and CD10 may be positive; flow cytometry is essential for defining the maturation phenotype.",
      "MPO and mature B-cell markers are negative in typical cases.",
    ],
    differential: [
      {
        name: "Primary mediastinal large B-cell lymphoma",
        distinction:
          "Mature B-cell markers (CD20, PAX5, CD79a) are expressed; TdT and cytoplasmic CD3 are absent.",
      },
      {
        name: "MALT lymphoma of the mediastinum",
        distinction:
          "Mature clonal small B cells with lymphoepithelial lesions; no precursor T-cell phenotype.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "H/RS cells in a mixed inflammatory background with CD30/CD15 and weak PAX5; not a diffuse TdT-positive blast population.",
      },
      {
        name: "Mediastinal grey zone lymphoma",
        distinction:
          "Pleomorphic large cells with retained B-cell antigens and CD30, rather than uniform immature T lymphoblasts.",
      },
    ],
    molecular: [
      "Clonal TRB or TRG rearrangement is typical; cytogenetic and molecular abnormalities include NOTCH1/FBXW7, CDKN2A/B, TAL/LMO, TLX1/TLX3, HOXA, and MYB pathway alterations.",
      "Molecular/cytogenetic testing should follow the standard workup for T-ALL/LBL; test for kinase fusions when eosinophilia or an atypical phenotype is present.",
    ],
    pitfalls: [
      "Do not diagnose T-LBL based on TdT alone; immature thymocytes in thymic tissue can be TdT-positive.",
      "Distinguish T-LBL from T-ALL using blood and marrow involvement, not the mediastinal mass alone.",
    ],
  },
  {
    name: "Classic Hodgkin Lymphoma of the Mediastinum",
    group: "Mediastinal Lymphomas",
    clue: "Scattered H/RS cells in a mixed inflammatory background; CD30-positive, CD15-positive in many cases, and weak PAX5-positive.",
    summary:
      "Nodular sclerosis classic Hodgkin lymphoma is the predominant lymphoma subtype involving the mediastinum.",
    clinical: [
      "Most often affects adolescents and young adults, particularly ages 15–34; nodular sclerosis subtype shows a slight female predominance.",
      "Commonly involves anterior mediastinal and cervical/supraclavicular/hilar lymph nodes.",
      "May be incidental or present with bulky mass, dyspnea, superior vena cava syndrome, or B symptoms.",
    ],
    criteria: [
      "Scattered Hodgkin/Reed–Sternberg cells or variants with characteristic cytology.",
      "Appropriate mixed inflammatory background, often with lymphocytes, eosinophils, histiocytes, and plasma cells.",
      "Typical phenotype: CD30-positive, CD15-positive/variable, weak PAX5-positive, CD20-negative/weak, and ALK-negative.",
    ],
    histology: [
      "Classic H/RS cells are large mono- or binucleate cells with prominent eosinophilic nucleoli and abundant cytoplasm.",
      "Nodular sclerosis shows cellular nodules separated by broad collagen bands; lacunar cells are common.",
      "The inflammatory background varies and may include lymphocytes, eosinophils, neutrophils, histiocytes, and plasma cells.",
      "Thymic involvement may be associated with multilocular cystic change; fibrosis can obscure sparse tumor cells in core biopsies.",
    ],
    ihc: [
      "CD30 is strongly positive in nearly all cases; CD15 is positive in approximately 75–85%.",
      "PAX5 is weakly positive; CD20, OCT2, and BOB1 are usually negative or weak/variable.",
      "IRF4/MUM1 is positive; CD45, ALK, and EMA are negative.",
      "EBER/LMP1 is positive in a subset, depending on subtype and clinical context.",
    ],
    differential: [
      {
        name: "Primary mediastinal large B-cell lymphoma",
        distinction:
          "Confluent sheets of large B cells with preserved CD20/PAX5/OCT2/BOB1 and CD45; H/RS cells in CHL show weak PAX5 and strong CD30.",
      },
      {
        name: "MALT lymphoma of the mediastinum",
        distinction:
          "Small clonal B cells with lymphoepithelial lesions and plasmacytic differentiation, not scattered H/RS cells in a mixed background.",
      },
      {
        name: "Mediastinal T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Diffuse TdT-positive immature T-cell population with cytoplasmic CD3; no characteristic H/RS phenotype.",
      },
      {
        name: "Mediastinal grey zone lymphoma",
        distinction:
          "Confluent pleomorphic tumor cells with retained B-cell antigens and CD30, showing intermediate features between CHL and PMBCL.",
      },
    ],
    molecular: [
      "Molecular studies are not required for routine diagnosis.",
      "EBV detection by EBER in situ hybridization can support EBV association; interpret in the context of H/RS cell staining.",
    ],
    pitfalls: [
      "H/RS-like cells occur in other lymphomas and reactive EBV-associated proliferations; interpret the full background and phenotype.",
      "Distinct separate areas of CHL and PMBCL should be considered composite lymphoma rather than automatically classified as grey zone lymphoma.",
    ],
  },
  {
    name: "Mediastinal Grey Zone Lymphoma",
    group: "Mediastinal Lymphomas",
    clue: "Pleomorphic Hodgkin-like cells in sheets with retained B-cell antigens and CD30 expression; diagnosis requires exclusion of CHL and PMBCL.",
    summary:
      "An uncommon B-cell lymphoma with intermediate morphologic and immunophenotypic features between classic Hodgkin lymphoma and PMBCL.",
    clinical: [
      "Usually affects adults aged 20–40 years, with male predominance.",
      "Typically presents as a large anterior (prevascular) mediastinal mass, sometimes with supraclavicular nodal involvement.",
      "May cause superior vena cava syndrome or respiratory distress; widespread non-lymphoid organ involvement is uncommon.",
    ],
    criteria: [
      "Confluent sheets of pleomorphic tumor cells, including cells resembling lacunar and Hodgkin cells.",
      "Expression of B-cell antigens, often with CD20 and CD79a, in a tumor showing CHL-like features.",
      "CD30 is usually positive; assign only when criteria for CHL, PMBCL, and EBV-positive DLBCL are not met.",
    ],
    histology: [
      "Confluent sheet-like growth of large pleomorphic cells in a diffusely fibrotic stroma.",
      "Hodgkin-like and lacunar-like cells are readily identified; cytologic appearance may vary between tumor areas.",
      "The inflammatory background is less prominent than in typical nodular sclerosis CHL; necrosis is often present.",
      "Focal fibrous bands may be present, but the architecture is generally more sheet-like than classic nodular sclerosis CHL.",
    ],
    ihc: [
      "CD20 and CD79a are often positive; PAX5, OCT2, and BOB1 usually support a preserved B-cell program.",
      "CD30 and MUM1/IRF4 are usually positive; CD15 is less commonly positive.",
      "CD10 and ALK are negative; BCL6 is variable.",
      "Background lymphocytes are often CD3/CD4-positive.",
    ],
    differential: [
      {
        name: "Primary mediastinal large B-cell lymphoma",
        distinction:
          "PMBCL usually has more uniform large B-cell morphology and a stronger, more coherent B-cell phenotype with less prominent H/RS-like cytology.",
      },
      {
        name: "MALT lymphoma of the mediastinum",
        distinction:
          "MALT lymphoma is a small B-cell proliferation with lymphoepithelial lesions and plasmacytic differentiation, not a pleomorphic large-cell tumor.",
      },
      {
        name: "Mediastinal T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Shows immature T-cell markers, TdT, and cytoplasmic CD3 rather than a preserved B-cell program.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "CHL has scattered H/RS cells in a mixed inflammatory background and typically weak PAX5 with absent/weak CD20; grey zone lymphoma has confluent tumor sheets and stronger B-cell antigen expression.",
      },
    ],
    molecular: [
      "Clonal IG gene rearrangement is often demonstrable.",
      "Alterations involving 2p16.1/REL and 9p24.1/JAK2/PD-L1/PD-L2 are common but are not independently diagnostic.",
    ],
    pitfalls: [
      "Do not use this diagnosis for any mediastinal lymphoma with partial marker overlap; strict morphologic and immunophenotypic criteria are required.",
      "EBV positivity should prompt careful exclusion of EBV-positive DLBCL.",
    ],
  },
  {
    name: "Follicular Dendritic Cell Sarcoma of the Mediastinum",
    group: "Mediastinal Dendritic and Myeloid Neoplasms",
    clue: "Spindled-to-ovoid neoplastic cells with admixed lymphocytes and expression of follicular dendritic cell markers.",
    summary:
      "A rare stromal neoplasm that may arise in association with hyaline-vascular Castleman disease.",
    clinical: [
      "Usually affects adults; median age is approximately 50 years, with no clear sex predilection.",
      "May arise in mediastinum, mediastinal lymph nodes, or other thoracic structures.",
      "Often presents as a slowly enlarging localized mass with chest discomfort, dyspnea, or mediastinal symptoms; paraneoplastic pemphigus is occasional.",
    ],
    criteria: [
      "Spindled-to-ovoid cell neoplasm with fascicular, storiform, whorled, sheet-like, or nodular architecture and admixed small lymphocytes.",
      "Demonstration of one or more follicular dendritic cell markers, such as CD21, CD23, CD35, CXCL13, podoplanin, FDCSP, or SRGN.",
      "Exclude other dendritic cell neoplasms, lymphoma, thymoma, melanoma, and peripheral nerve sheath tumor.",
    ],
    histology: [
      "Neoplastic cells have indistinct borders, moderate eosinophilic cytoplasm, oval or elongated nuclei, fine chromatin, and small distinct nucleoli.",
      "Growth may be fascicular, storiform, whorled, diffuse, or vaguely nodular; multinucleated cells and nuclear pseudoinclusions may occur.",
      "Small lymphocytes are typically intermingled; some cases show scattered tumor cells in a lymphocyte-rich background.",
      "Atypia, mitotic activity, atypical mitoses, and coagulative necrosis vary; high-grade features may predict aggressive behavior.",
    ],
    ihc: [
      "At least one of CD21, CD23, CD35, CXCL13, podoplanin, FDCSP, or SRGN is typically positive.",
      "Clusterin, fascin, desmoplakin, vimentin, and HLA-DR are commonly expressed.",
      "S100, EMA, and CD68 are variable; CD1a, MPO, lysozyme, CD3, CD79a, and HMB45 are typically negative.",
      "PD-L1 expression is common; interpret with the overall phenotype.",
    ],
    differential: [
      {
        name: "Myeloid sarcoma of the mediastinum",
        distinction:
          "Myeloid blasts express MPO, CD33, CD34, CD117, or lysozyme; FDC sarcoma expresses FDC markers and lacks myeloid lineage markers.",
      },
    ],
    molecular: [
      "BRAF p.V600E occurs in a small subset; recurrent alterations in NF-κB regulatory genes have been reported.",
      "Molecular testing is not routinely required; use selectively in diagnostically difficult cases.",
    ],
  },
  {
    name: "Myeloid Sarcoma of the Mediastinum",
    group: "Mediastinal Dendritic and Myeloid Neoplasms",
    clue: "Mass-forming proliferation of myeloblasts or monoblasts; confirm myeloid lineage with MPO and a complementary myeloid marker panel.",
    summary:
      "An extramedullary myeloid neoplasm, frequently associated with concurrent or subsequent acute myeloid leukemia.",
    clinical: [
      "Can occur at any age; mediastinal cases are documented in children and adults.",
      "Most often arises in the anterior (prevascular) mediastinum.",
      "May cause superior vena cava syndrome and often accompanies or precedes acute myeloid leukemia; evaluate peripheral blood and bone marrow.",
    ],
    criteria: [
      "A mass-forming infiltrate of myeloblasts or monoblasts, with or without maturation.",
      "Demonstration of myeloid differentiation by morphology, cytochemistry, flow cytometry, and immunohistochemistry.",
      "Correlate with blood/marrow findings and perform cytogenetic/molecular workup according to AML guidelines.",
    ],
    histology: [
      "Tumor is composed of myeloblasts and promyelocytes with variable maturation; blastic cases may be entirely immature.",
      "Monoblastic/monocytic differentiation may occur.",
      "Cases associated with myeloproliferative neoplasms may contain more mature granulocytes or trilineage extramedullary hematopoiesis.",
      "Prominent sclerosis may occur and can mimic PMBCL.",
    ],
    ihc: [
      "MPO, CD33, CD43, lysozyme, CD117, and CD34 are useful myeloid markers; expression varies with maturation and subtype.",
      "CAE cytochemistry may highlight granulocytic differentiation; flow cytometry is valuable.",
      "Use CD61/CD42b for megakaryoblastic differentiation and CD71/E-cadherin for erythroid differentiation when indicated.",
      "If blastic plasmacytoid dendritic cell neoplasm is considered, add CD123, TCL1 and/or CD303, CD4, and CD56.",
    ],
    differential: [
      {
        name: "Follicular dendritic cell sarcoma of the mediastinum",
        distinction:
          "FDC sarcoma shows spindled/ovoid cells and FDC markers (CD21/CD23/CD35/CXCL13); myeloid sarcoma expresses myeloid lineage markers such as MPO and CD33.",
      },
    ],
    molecular: [
      "Cytogenetic abnormalities may be complex and overlap with those seen in AML.",
      "Perform AML-directed cytogenetic and molecular studies to classify the underlying myeloid neoplasm and guide risk assessment.",
    ],
    pitfalls: [
      "A mediastinal mass may precede overt AML; a normal peripheral blood count does not exclude myeloid sarcoma.",
      "Prominent sclerosis can mimic PMBCL; establish lineage with a broad immunohistochemical panel.",
    ],
  },
];

const sameGroupDifferentials: Record<string, Record<string, string>> = {
  "Germ Cell Tumors": {
    "Seminoma of the Mediastinum":
      "A pure seminoma is composed of uniform OCT4-positive germ cells; the alternative diagnosis requires its defining distinct component or morphology.",
    "Embryonal Carcinoma of the Mediastinum":
      "Embryonal carcinoma shows marked cytologic atypia, brisk mitoses, and CD30/SOX2 expression rather than the defining morphology of this entity.",
    "Yolk Sac Tumor of the Mediastinum":
      "Yolk sac tumor shows characteristic reticular/microcystic or other yolk sac patterns with GPC3 expression; distinguish it from the current component by morphology and panel.",
    "Choriocarcinoma of the Mediastinum":
      "Choriocarcinoma requires a biphasic trophoblastic population with syncytiotrophoblasts and strong β-hCG expression.",
    "Teratoma of the Mediastinum":
      "Teratoma contains mature or immature somatic tissues; identify whether these are the sole components or coexist with another germ cell tumor.",
    "Mixed Germ Cell Tumor of the Mediastinum":
      "Mixed germ cell tumor requires at least two distinct conventional germ cell tumor components; multiple patterns within one yolk sac tumor do not qualify.",
    "Mediastinal Germ Cell Tumor with Somatic-Type Malignancy":
      "This category requires a distinct somatic carcinoma or sarcoma arising in association with a germ cell tumor, not simply a conventional germ cell component.",
    "Mediastinal Germ Cell Tumor with Associated Hematologic Malignancy":
      "This category requires a separate clonal hematologic neoplasm, established by lineage-specific studies and clinical/marrow correlation.",
  },
  "Mediastinal Lymphomas": {
    "Primary Mediastinal Large B-Cell Lymphoma":
      "Large B-cell sheets with a mature B-cell program and sclerosis; assess CD20, PAX5, OCT2/BOB1, CD23, and CD30.",
    "MALT Lymphoma of the Mediastinum (Thymic Extranodal Marginal Zone Lymphoma)":
      "Small clonal B cells with lymphoepithelial lesions and plasmacytic differentiation; exclude other small B-cell lymphomas.",
    "Mediastinal T-Lymphoblastic Leukemia/Lymphoma":
      "Immature T-cell blasts express TdT and cytoplasmic CD3, unlike mature B-cell or H/RS-cell neoplasms.",
    "Classic Hodgkin Lymphoma of the Mediastinum":
      "Scattered H/RS cells in a mixed inflammatory background, usually CD30-positive and weak PAX5-positive.",
    "Mediastinal Grey Zone Lymphoma":
      "Confluent pleomorphic cells with overlapping CHL-like morphology and a retained B-cell program; diagnose only after excluding CHL and PMBCL.",
  },
  "Mediastinal Dendritic and Myeloid Neoplasms": {
    "Follicular Dendritic Cell Sarcoma of the Mediastinum":
      "Spindled/ovoid cells express one or more FDC markers such as CD21, CD23, CD35, or CXCL13.",
    "Myeloid Sarcoma of the Mediastinum":
      "A mass-forming blast population expresses myeloid markers such as MPO, CD33, CD117, or lysozyme.",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="mb-2 border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function MediastinalTumorsPage() {
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
  const enriched = useMemo(
    () =>
      entities.map((e) => {
        const existing = new Set(e.differential.map((d) => d.name));
        const reciprocal = Object.entries(sameGroupDifferentials[e.group] ?? {})
          .filter(([name]) => name !== e.name && !existing.has(name))
          .map(([name, distinction]) => ({ name, distinction }));
        return { ...e, differential: [...e.differential, ...reciprocal] };
      }),
    [],
  );
  const filtered = useMemo(
    () =>
      enriched.filter((e) => {
        const matchesGroup = group === "All Categories" || e.group === group;
        const haystack = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.flatMap((d) => [d.name, d.distinction]),
          ...(e.molecular ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return matchesGroup && haystack.includes(query.toLowerCase());
      }),
    [enriched, group, query],
  );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((prev) =>
      prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name],
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <a
          href="/thoracic"
          className="text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Thoracic Pathology
        </a>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          PathologyGPS · Diagnostic Reference
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Mediastinal Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
          A practical diagnostic reference focused on clinical context,
          essential morphologic criteria, immunophenotype, and the key
          distinctions among mediastinal germ cell tumors, lymphomas, and
          dendritic cell/myeloid neoplasms.
        </p>
      </div>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="mb-3 text-lg font-bold text-slate-950">
          Diagnostic Approach
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-slate-800">
              Anatomic compartment
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Most primary mediastinal germ cell tumors and several key
              lymphomas arise in the anterior (prevascular) compartment.
              Integrate imaging with the biopsy pattern.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Serology and clinical data
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              AFP, β-hCG, and LDH are important in germ cell tumors. Exclude a
              gonadal primary before diagnosing a primary mediastinal germ cell
              tumor.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">
              Panel-based immunophenotyping
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              No single germ cell marker is fully specific. Select a panel based
              on morphology and distinguish mature B-cell, precursor T-cell,
              myeloid, and dendritic cell lineages.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
        <div className="bg-slate-900 px-5 py-3 text-white">
          <h2 className="font-bold">
            Quick Comparison: Mediastinal Germ Cell Tumors
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-800">
              <tr>
                <th className="p-3">Entity</th>
                <th className="p-3">Key morphology</th>
                <th className="p-3">Useful markers</th>
                <th className="p-3">Clinical clue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-semibold">Seminoma</td>
                <td className="p-3">Uniform clear cells; lymphocytic septa</td>
                <td className="p-3">OCT4+, SALL4+, KIT+</td>
                <td className="p-3">Postpubertal male; AFP normal</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Embryonal carcinoma</td>
                <td className="p-3">
                  Pleomorphic cells; solid/glandular/papillary; necrosis
                </td>
                <td className="p-3">OCT4+, CD30+, SOX2+</td>
                <td className="p-3">Young man; aggressive mass</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Yolk sac tumor</td>
                <td className="p-3">
                  Reticular/microcystic; Schiller–Duval bodies
                </td>
                <td className="p-3">GPC3+, SALL4+, LIN28+</td>
                <td className="p-3">Serum AFP elevated</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Choriocarcinoma</td>
                <td className="p-3">Biphasic trophoblast; hemorrhage</td>
                <td className="p-3">β-hCG+, keratin+</td>
                <td className="p-3">Very high β-hCG; rapid growth</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Teratoma</td>
                <td className="p-3">Mature/immature somatic tissues</td>
                <td className="p-3">Component-dependent</td>
                <td className="p-3">Fat, fluid, or bone on imaging</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Mixed germ cell tumor</td>
                <td className="p-3">
                  Two or more distinct germ cell components
                </td>
                <td className="p-3">Component-dependent panel</td>
                <td className="p-3">Adult male; heterogeneous mass</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="mediastinal-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic criteria
          </label>
          <input
            id="mediastinal-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: OCT4, AFP, CD30, TdT, sclerosis..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="mediastinal-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="mediastinal-group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
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
        <span>Expand a diagnosis for the complete diagnostic profile.</span>
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
                              key={`${d.name}-${j}`}
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
        morphology, clinical history, imaging, and tumor distribution.
      </footer>
    </main>
  );
}
