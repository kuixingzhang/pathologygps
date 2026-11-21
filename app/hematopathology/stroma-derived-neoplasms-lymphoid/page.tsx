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
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Follicular Dendritic Cell Sarcoma (FDCS)",
    group: "Mesenchymal Dendritic Cell Neoplasms",
    clue: "Spindled-to-ovoid syncytial cells in whorls, fascicles, or storiform arrays with at least two follicular dendritic cell markers.",
    summary:
      "A malignant stromal neoplasm showing follicular dendritic cell differentiation; it is not a B-cell lymphoma despite its frequent lymphocyte-rich background.",
    clinical: [
      "Median age approximately 50 years; occurs across a broad age range.",
      "No consistent sex predilection.",
      "Nodal and extranodal disease; common extranodal sites include abdomen/retroperitoneum and upper aerodigestive tract.",
      "Usually a slowly enlarging, painless mass or isolated lymphadenopathy; abdominal tumors may cause pain.",
      "A subset is associated with hyaline-vascular Castleman disease or autoimmune/paraneoplastic syndromes.",
    ],
    criteria: [
      "Identify a spindle, ovoid, or epithelioid neoplasm with a storiform, fascicular, whorled, or syncytial growth pattern.",
      "Look for indistinct cell borders, unevenly spaced nuclei, vesicular chromatin, small nucleoli, and intranuclear pseudoinclusions.",
      "Recognize admixed small lymphocytes, which may be T-cell predominant, B-cell predominant, or mixed; this background does not establish lymphoma.",
      "Confirm follicular dendritic differentiation with at least two FDC markers, preferably including CD21, CD23, CD35, or CXCL13.",
      "Show that the atypical spindle/epithelioid cells themselves express FDC markers; do not mistake reactive FDC meshworks for tumor-cell staining.",
      "Exclude a lymphoid neoplasm by demonstrating that the lesional spindle cells are not a clonal B- or T-cell population and by correlating lineage markers with morphology.",
    ],
    histology: [
      "Tumor cells are spindle, ovoid, or epithelioid and may vary in morphology within one tumor.",
      "Growth patterns include whorls, fascicles, syncytial sheets, nodules, and storiform arrays.",
      "Moderate eosinophilic cytoplasm and indistinct cell borders produce a syncytial appearance.",
      "Nuclei are elongated with vesicular chromatin, delicate membranes, and small but distinct nucleoli.",
      "Intranuclear pseudoinclusions and binucleated cells resembling benign FDCs are useful clues.",
      "Pleomorphism, multinucleation, necrosis, and increased mitotic activity occur in more aggressive examples.",
      "Small lymphocytes are typically interspersed; peripheral or perivascular lymphoid aggregates may be present.",
    ],
    ihc: [
      "CD21, CD23, and CD35 highlight follicular dendritic differentiation; expression may be variable or focal.",
      "CXCL13 and clusterin are among the most frequently expressed and useful FDC markers.",
      "D2-40, SSTR2, fascin, FDCSP, and serglycin (SRGN) may provide additional support.",
      "Vimentin and EGFR are commonly expressed but are not lineage-specific.",
      "Cytokeratin, CD20, and TTF1 are usually negative; rare aberrant expression is reported.",
      "S100 is generally negative or only occasional/focal; interpret with a panel.",
      "Ki-67 is variable and is not independently diagnostic.",
    ],
    differential: [
      {
        name: "EBV-positive inflammatory FDCS",
        distinction:
          "Usually liver or spleen, marked lymphoplasmacytic inflammation, EBER positivity, and often less extensive/variable FDC-marker expression; compare the separate entity below.",
      },
      {
        name: "Fibroblastic reticular cell tumor",
        distinction:
          "May overlap morphologically, but favors cytokeratin, SMA, and desmin; lacks the usual FDC marker profile and is generally S100-negative.",
      },
      {
        name: "Lymphoma (including Hodgkin lymphoma and large B-cell lymphoma)",
        distinction:
          "The neoplastic cells of FDCS are spindle/ovoid stromal cells expressing FDC markers, not a population expressing a coherent B- or T-cell lineage phenotype. Background lymphocytes may be reactive.",
      },
      {
        name: "Inflammatory myofibroblastic tumor",
        distinction:
          "Typically has myofibroblastic cytology and SMA expression; ALK or other kinase alterations may be present, while FDC markers are absent.",
      },
      {
        name: "Meningioma, thymoma, carcinoma, GIST, or undifferentiated sarcoma",
        distinction:
          "Use site, architecture, and a focused epithelial, mesenchymal, and FDC-marker panel; no single morphology mimic is reliably excluded by appearance alone.",
      },
    ],
    molecular: [
      "Recurrent alterations involve NF-κB pathway genes (including BIRC3, NFKBIA, TRAF3, CYLD, and TNFAIP3) and tumor suppressors such as CDKN2A, RB1, and TP53.",
      "BRAF p.V600E and other alterations occur only in subsets and are not required for diagnosis.",
    ],
    pitfalls: [
      "Do not diagnose lymphoma solely because the lesion contains numerous lymphocytes.",
      "Require FDC-marker expression in the neoplastic spindle/epithelioid cells, not merely in entrapped reactive follicles.",
      "A single positive FDC marker is insufficient when morphology is atypical; use a panel.",
    ],
  },
  {
    name: "EBV-Positive Inflammatory Follicular Dendritic Cell Sarcoma",
    group: "Mesenchymal Dendritic Cell Neoplasms",
    clue: "EBER-positive spindle/oval tumor cells in a prominent lymphoplasmacytic background, usually in liver or spleen.",
    summary:
      "An EBV-associated, generally indolent stromal neoplasm distinct from conventional FDCS, with characteristic inflammatory and clinicopathologic features.",
    clinical: [
      "Predominantly young- to middle-aged adults; median age approximately 50–58 years.",
      "Marked female predominance in hepatic and splenic cases; sex distribution is less distinctive in colonic cases.",
      "Almost always liver or spleen; rare sites include colon, tonsil, bronchus, pancreas, and mesentery.",
      "Often asymptomatic or presents with abdominal pain/distention; fever, weight loss, malaise, anemia, or inflammatory laboratory abnormalities may occur.",
    ],
    criteria: [
      "Identify atypical spindle-to-oval cells dispersed singly or in loose whorls/fascicles within a prominent lymphoplasmacytic infiltrate.",
      "Demonstrate EBV in the neoplastic cells by EBER in situ hybridization; both bland and pleomorphic tumor cells may be positive.",
      "Show FDC differentiation with CD21, CD23, CD35, CXCL13, D2-40, or CNA.42; staining may be focal or variable.",
      "Recognize rare cases with an SMA-positive fibroblastic/myoid phenotype and absent conventional FDC markers.",
      "Exclude lymphoma by confirming that the atypical spindle cells, rather than background lymphocytes, are EBER-positive stromal cells; background B cells, T cells, and plasma cells are usually mixed/polytypic.",
    ],
    histology: [
      "Spindle-to-oval tumor cells are singly dispersed or form loose whorls and fascicles.",
      "A dense lymphoplasmacytic infiltrate is a defining background feature; reactive follicles may be present.",
      "Tumor cells have indistinct borders, scant-to-moderate cytoplasm, vesicular nuclei, stippled chromatin, and small central nucleoli.",
      "Atypia is variable, with bland cells admixed with enlarged, folded, or hyperchromatic forms; Reed–Sternberg-like cells may occur.",
      "Mitotic figures are usually rare; hemorrhage and necrosis may be present.",
      "Fibrinoid vascular wall deposits, granulomas, eosinophils, xanthomatous histiocytes, or monocytoid B-cell aggregates may be seen.",
    ],
    ihc: [
      "CD21, CD23, CD35, CXCL13, D2-40, and CNA.42 are variably positive in tumor cells.",
      "SMA may be positive in rare cases with a fibroblastic/myoid phenotype.",
      "LMP1 is frequently expressed in tumor cells.",
      "EBER in situ hybridization is consistently positive in the neoplastic spindle/oval cells.",
      "Background lymphocytes comprise mixed CD20-positive B cells and CD3-positive T cells.",
      "Plasma cells are polytypic; IgG4-rich plasma cells may be conspicuous in some cases.",
    ],
    differential: [
      {
        name: "Conventional follicular dendritic cell sarcoma",
        distinction:
          "Usually more tumor-cell-rich with classic syncytial, whorled, fascicular, or storiform growth; EBV is not a defining feature. Inflammatory EBV-positive FDCS is typically liver/spleen-centered and lymphoplasmacytic.",
      },
      {
        name: "Fibroblastic reticular cell tumor",
        distinction:
          "May show spindle cells and inflammation, but usually expresses cytokeratin/SMA/desmin and lacks the consistent tumor-cell EBER positivity characteristic of this entity.",
      },
      {
        name: "EBV-positive lymphoma",
        distinction:
          "Lymphoma shows EBV-positive atypical lymphoid cells with B-, T-, or other hematolymphoid lineage markers; here EBER labels the spindle stromal tumor cells and the background lymphocytes are mixed and generally non-atypical.",
      },
      {
        name: "Inflammatory myofibroblastic tumor",
        distinction:
          "Often has well-defined amphophilic cytoplasm and SMA expression, may harbor ALK or another kinase rearrangement, and is generally EBER-negative.",
      },
      {
        name: "Florid lymphoid hyperplasia / inflammatory polyp",
        distinction:
          "Predominantly lymphoid without a significant atypical spindle-cell component; usually lacks tumor-cell EBER and FDC-marker expression.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is the key diagnostic assay; clonal EBV is consistently associated with the neoplastic cells.",
      "LMP1 alterations have been reported, but broader genomic findings are not sufficiently established for routine diagnosis.",
    ],
    pitfalls: [
      "Interpret EBER at the cellular level: positivity must involve the spindle/oval tumor cells, not only scattered background lymphocytes.",
      "A lymphoplasmacytic background does not establish lymphoma; assess the lineage and clonality of the atypical cells.",
    ],
  },
  {
    name: "Fibroblastic Reticular Cell Tumor (FRCT)",
    group: "Mesenchymal Dendritic Cell Neoplasms",
    clue: "Spindle-to-ovoid stromal tumor with myofibroblastic differentiation, often cytokeratin-positive, but negative for FDC markers and S100.",
    summary:
      "A rare neoplasm of putative fibroblastic reticular cell origin with morphologic overlap with other dendritic stromal tumors.",
    clinical: [
      "Usually presents in the sixth to seventh decade; reported age range is broad (13–80 years).",
      "No sex predilection.",
      "Most often an isolated lymph node mass; extranodal sites include spleen, soft tissue, liver, lung, kidney, breast, adrenal gland, and bone.",
      "Typically presents as lymphadenopathy or a newly developed mass.",
    ],
    criteria: [
      "Identify a spindle-to-ovoid cell neoplasm arranged in whorls, fascicles, sheets, or storiform arrays.",
      "Look for an accompanying lymphoplasmacytic infiltrate and variable nuclear pleomorphism or multinucleated tumor cells.",
      "Demonstrate one or more of cytokeratin, actin/SMA, or desmin in the lesional cells, often accentuating delicate cell processes.",
      "Show absence of the usual FDC markers (CD21, CD23, CD35, CXCL13) and interdigitating dendritic cell marker S100.",
      "Exclude metastatic carcinoma when cytokeratin is positive by integrating site, morphology, and a focused epithelial panel.",
      "The diagnosis is stromal, not lymphoid: the spindle cells should not show a coherent B- or T-cell lineage phenotype.",
    ],
    histology: [
      "Spindle-to-oval cells form whorled, fascicular, sheet-like, or storiform patterns.",
      "A lymphoplasmacytic infiltrate commonly accompanies the tumor cells.",
      "Nuclear pleomorphism is variable; multinucleated or giant cells may be present.",
      "Intercellular collagen fibrils are a helpful but neither constant nor specific feature.",
      "Morphology overlaps with FDCS and interdigitating dendritic cell sarcoma.",
    ],
    ihc: [
      "Cytokeratin is positive in approximately two thirds of cases and may highlight delicate cell processes.",
      "SMA/actin and desmin are variably positive.",
      "Vimentin, fascin, L-caldesmon, and EMA are often positive.",
      "CD21, CD23, CD35, and CXCL13 are typically negative, arguing against FDC differentiation.",
      "S100 is typically negative, arguing against interdigitating dendritic cell differentiation.",
    ],
    differential: [
      {
        name: "Follicular dendritic cell sarcoma",
        distinction:
          "Shares spindle/ovoid morphology and lymphocytes, but FDCS expresses FDC markers (CD21, CD23, CD35, CXCL13, clusterin); FRCT generally does not.",
      },
      {
        name: "EBV-positive inflammatory FDCS",
        distinction:
          "Usually EBER-positive in tumor cells with a prominent lymphoplasmacytic background; FRCT lacks consistent EBV association and favors a myofibroblastic/cytokeratin phenotype.",
      },
      {
        name: "Interdigitating dendritic cell sarcoma",
        distinction:
          "Typically S100-positive and often expresses other histiocytic/dendritic markers; FRCT is usually S100-negative and may express cytokeratin, SMA, and desmin.",
      },
      {
        name: "Metastatic carcinoma",
        distinction:
          "Can be cytokeratin-positive; use clinical history, epithelial differentiation markers, and the characteristic stromal spindle-cell morphology. Cytokeratin alone does not establish carcinoma.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Lymphoma is composed of neoplastic lymphoid cells expressing lineage markers; FRCT is a spindle-cell stromal proliferation with myofibroblastic/reticular-cell markers.",
      },
    ],
    pitfalls: [
      "Cytokeratin positivity does not automatically indicate metastatic carcinoma.",
      "Do not diagnose FRCT without excluding FDCS and interdigitating dendritic cell sarcoma with appropriate lineage markers.",
    ],
  },
  {
    name: "Intranodal Palisaded Myofibroblastoma",
    group: "Myofibroblastic Tumors",
    clue: "Benign intranodal spindle-cell lesion with palisading around amianthoid-like collagen bodies and a myoid immunophenotype.",
    summary:
      "A benign lymph node-based smooth muscle/myofibroblastic stromal neoplasm, usually involving an inguinal node.",
    clinical: [
      "Usually adults in the fifth or sixth decade; reported age range 19–78 years.",
      "Male predominance (approximately 2:1).",
      "Predominantly inguinal lymph nodes; rare axillary, cervical, submandibular, mediastinal, and retroperitoneal sites.",
      "Solitary, slowly growing, mobile, usually painless mass.",
    ],
    criteria: [
      "Confirm that the lesion is centered in a lymph node and forms a benign spindle-cell proliferation.",
      "Identify short fascicles and whorls of bland spindle cells with variably shaped dense collagenous (amianthoid-like) bodies.",
      "Look for focal vague nuclear palisading around hyalinized vessels or collagenous bodies.",
      "Demonstrate myoid differentiation with SMA and muscle-specific actin; nuclear beta-catenin and cyclin D1 are desirable supportive findings.",
      "Exclude Kaposi sarcoma and other vascular lesions with HHV8 and endothelial markers when indicated.",
      "The lesion is not lymphoma: the proliferating cells are bland myofibroblastic spindle cells rather than a clonal lymphoid population.",
    ],
    histology: [
      "Tumor nodules are composed of moderately to highly cellular short fascicles and whorls of spindle cells.",
      "Dense, variably shaped collagenous bodies are characteristic.",
      "Hyalinized blood vessels may be surrounded by vague nuclear palisading.",
      "Tumor cells have scant, lightly eosinophilic cytoplasm and bland elongated or focally wavy nuclei.",
      "Perinuclear vacuoles and rounded salmon-colored intracytoplasmic inclusions are common.",
      "Extravasated erythrocytes and hemosiderin are frequent; mitotic activity is usually low.",
    ],
    ihc: [
      "Diffuse vimentin, SMA, and muscle-specific actin support myofibroblastic differentiation.",
      "Calponin, D2-40, factor XIIIa, nuclear beta-catenin, and cyclin D1 are variably positive.",
      "Desmin is usually focal or variable.",
      "Ki-67 is typically low (less than 5%).",
      "Cytokeratins, S100, CD21/CD23/CD35, CD31/CD34, factor VIII, and HHV8 are negative.",
    ],
    differential: [
      {
        name: "Kaposi sarcoma",
        distinction:
          "Shows slit-like vascular spaces and HHV8 positivity; intranodal palisaded myofibroblastoma is HHV8-negative and contains characteristic collagenous bodies.",
      },
      {
        name: "Follicular dendritic cell sarcoma",
        distinction:
          "Usually has syncytial spindle/ovoid cells with FDC-marker expression and greater cytologic variability; this lesion is bland and myoid-marker-positive.",
      },
      {
        name: "Schwannoma / other nerve sheath tumor",
        distinction:
          "Usually expresses S100 and/or SOX10 and shows characteristic nerve-sheath architecture; intranodal palisaded myofibroblastoma is generally negative.",
      },
      {
        name: "Vascular neoplasm",
        distinction:
          "Endothelial markers (CD31, ERG, CD34) highlight lesional cells in vascular tumors; they are negative in this myofibroblastic lesion.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Lymphoma replaces nodal tissue with atypical lymphoid cells and lineage-marker expression; here the lesional component is a bland spindle-cell myofibroblastic proliferation.",
      },
    ],
    molecular: [
      "CTNNB1 exon 3 gain-of-function mutations have been reported and may explain nuclear beta-catenin expression; molecular testing is not required for routine diagnosis.",
    ],
    pitfalls: [
      "Do not mistake extravasated erythrocytes and hemosiderin for a vascular neoplasm.",
      "The collagenous bodies and myofibroblastic phenotype are more diagnostically useful than focal palisading alone.",
    ],
  },
  {
    name: "Littoral Cell Angioma",
    group: "Splenic Vascular-Stromal Tumors",
    clue: "Anastomosing, variably dilated splenic sinus-like channels with a dual endothelial and histiocytic phenotype.",
    summary:
      "A benign vascular tumor unique to the spleen, derived from or resembling red-pulp littoral cells.",
    clinical: [
      "Usually adults in the fourth to seventh decades; any age is possible.",
      "No sex predilection.",
      "Unique to the spleen; often multiple and associated with splenomegaly.",
      "Usually incidental; symptomatic cases may show abdominal pain, fever, anemia, thrombocytopenia, or hypersplenism.",
      "Concurrent malignancy or immune dysregulatory conditions have been reported, although ascertainment bias may contribute.",
    ],
    criteria: [
      "Identify a circumscribed splenic red-pulp lesion composed of variably sized, blood-filled anastomosing channels, often cystically dilated.",
      "Recognize plump cuboidal or tall endothelial lining cells with abundant eosinophilic cytoplasm and possible intraluminal sloughing.",
      "Look for hemophagocytosis, hemosiderin, and hyaline globules within tumor cells.",
      "Confirm dual endothelial and histiocytic differentiation: CD31/ERG/von Willebrand factor together with CD163/CD68/lysozyme.",
      "Exclude lymphoma by confirming a vascular channel-forming lesion rather than a mass of atypical lymphoid cells; the lesional cells express endothelial/histiocytic markers, not B- or T-cell lineage markers.",
    ],
    histology: [
      "Discrete red-pulp lesion with blood-filled anastomosing channels resembling expanded splenic sinuses.",
      "Channels vary markedly in caliber and may be cystically dilated.",
      "Lining cells are plump cuboidal or tall, with abundant eosinophilic cytoplasm and protrusion into the lumen.",
      "Tumor cells may slough into lumina and show hemophagocytosis, hemosiderin, or eosinophilic hyaline globules.",
      "Papillary fronds may project into vascular spaces.",
      "Atypia, necrosis, and mitotic figures are generally absent; extramedullary hematopoiesis may coexist.",
    ],
    ihc: [
      "Endothelial markers: CD31, ERG, and von Willebrand factor are positive.",
      "Histiocytic markers: CD163, CD68, and lysozyme are positive.",
      "SIRP-alpha is a useful littoral-cell-associated marker.",
      "CD8 and CD34 are often negative in tumor cells; WT1 is also often negative.",
      "CD207, CD21, claudin-5, and VEGFR2 may be expressed; interpret in the context of the dual phenotype.",
    ],
    differential: [
      {
        name: "Splenic hamartoma",
        distinction:
          "Hamartoma is disorganized red-pulp tissue with mixed sinus, capillary, and venous channels and macrophages; it lacks the characteristic expansile anastomosing littoral-cell channels with dual endothelial-histiocytic tumor-cell phenotype.",
      },
      {
        name: "Sclerosing angiomatoid nodular transformation (SANT)",
        distinction:
          "Shows multiple angiomatoid nodules separated by dense fibrosclerotic stroma and a characteristic mixture of sinusoidal, capillary, and venous vessels.",
      },
      {
        name: "Splenic hemangioma",
        distinction:
          "Usually comprises one predominant vessel type (commonly CD31+/CD34+/CD8− capillaries) and lacks the characteristic histiocytic marker expression of littoral cell angioma.",
      },
      {
        name: "Littoral cell hemangioendothelioma / angiosarcoma",
        distinction:
          "Consider when there are solid areas, cytologic atypia, mitotic activity, destructive growth, or metastases; ordinary littoral cell angioma is cytologically bland and benign.",
      },
      {
        name: "Splenic lymphoma",
        distinction:
          "Lymphoma forms a lymphoid infiltrate or mass with B-/T-cell lineage markers and often architectural effacement; littoral cell angioma forms vascular channels with endothelial and histiocytic differentiation.",
      },
    ],
    pitfalls: [
      "Do not interpret CD31 positivity alone as proof of conventional hemangioma; the histiocytic component is a defining clue.",
      "Atypia, solid growth, or metastatic behavior should prompt reconsideration of littoral cell hemangioendothelioma or angiosarcoma.",
    ],
  },
  {
    name: "Splenic Hamartoma",
    group: "Splenic Vascular-Stromal Tumors",
    clue: "Circumscribed but microscopically often ill-defined nodule of disorganized red pulp without well-formed white pulp.",
    summary:
      "A benign splenic parenchymal lesion composed of disorganized red-pulp elements.",
    clinical: [
      "Can occur at any age, including childhood; median age approximately 40 years.",
      "No sex predilection.",
      "Spleen only.",
      "Usually incidental; a minority present with mass-related discomfort, rupture, splenomegaly, or hypersplenism-related cytopenias.",
    ],
    criteria: [
      "Identify a circumscribed splenic nodule composed of disorganized red-pulp elements.",
      "Confirm the absence of a well-formed white-pulp component.",
      "Recognize irregular sinusoidal channels lined by plump endothelium with loose macrophage aggregates and fibrovascular stroma.",
      "Use CD8 to highlight splenic sinusoidal endothelium; CD31 highlights the vascular channels, while CD68/CD163 highlight admixed macrophages.",
      "Exclude lymphoma by identifying disorganized but recognizable red-pulp vascular and macrophage components rather than a monomorphic or atypical lymphoid proliferation.",
    ],
    histology: [
      "Grossly circumscribed nodule, although the microscopic interface may be less sharply defined.",
      "Irregularly distributed sinusoidal channels are lined by plump endothelial cells.",
      "Loose aggregates of macrophages and fibrovascular stroma reproduce disorganized red-pulp architecture.",
      "A well-formed white-pulp component is absent; small lymphoid aggregates may still be present.",
      "Additional findings may include sclerosis, calcification, hemorrhage, peliosis, plasmacytosis, extramedullary hematopoiesis, and xanthomatous histiocytes.",
      "Rare bizarre stromal/reticulum cells may show cytokeratin, actin, or desmin expression.",
    ],
    ihc: [
      "Splenic sinusoids: CD8-positive, CD31-positive, CD34-negative.",
      "Capillaries: CD34-positive and CD31-positive, CD8-negative.",
      "Small veins: CD31-positive, CD34-negative, CD8-negative.",
      "Admixed macrophages are CD68-positive and CD163-positive.",
      "CD8 is particularly useful to demonstrate disorganized splenic sinusoidal elements.",
    ],
    differential: [
      {
        name: "Littoral cell angioma",
        distinction:
          "Shows more discrete, often multiple anastomosing and dilated vascular channels lined by cells with dual endothelial-histiocytic phenotype; hamartoma recapitulates disorganized red pulp.",
      },
      {
        name: "Sclerosing angiomatoid nodular transformation",
        distinction:
          "Has discrete angiomatoid nodules with concentric collagen/fibrinoid rims and intervening fibrosclerotic stroma; hamartoma lacks this nodular architecture.",
      },
      {
        name: "Splenic hemangioma",
        distinction:
          "Usually a proliferation of one vessel type, commonly CD31+/CD34+/CD8− capillaries, rather than mixed disorganized red-pulp elements.",
      },
      {
        name: "EBV-positive inflammatory FDCS",
        distinction:
          "Contains atypical spindle cells in a lymphoplasmacytic background with tumor-cell EBER and FDC markers; hamartoma is a vascular-red-pulp lesion.",
      },
      {
        name: "Splenic lymphoma",
        distinction:
          "Shows a clonal lymphoid population with lineage-marker expression and often architectural replacement; hamartoma retains a disorganized red-pulp vascular framework.",
      },
    ],
    pitfalls: [
      "A few lymphoid aggregates do not constitute a white-pulp component or establish lymphoma.",
      "Assess the vascular subtypes with CD8, CD31, and CD34 rather than relying on a single endothelial marker.",
    ],
  },
  {
    name: "Sclerosing Angiomatoid Nodular Transformation (SANT) of the Spleen",
    group: "Splenic Vascular-Stromal Tumors",
    clue: "Multiple angiomatoid nodules with concentric collagenous/fibrinoid rims and intervening fibrosclerotic stroma.",
    summary:
      "A benign, circumscribed splenic lesion characterized by a multinodular vascular architecture and central stellate fibrosis.",
    clinical: [
      "Most often middle-aged adults; median age approximately 46 years, but any age may be affected.",
      "Female predominance.",
      "Spleen only.",
      "Usually incidental on imaging; symptomatic cases may have abdominal discomfort, a palpable mass, or hypersplenism-related cytopenias.",
    ],
    criteria: [
      "Identify a circumscribed splenic lesion composed of multiple round or convoluted angiomatoid nodules.",
      "Look for concentric collagenous or fibrinoid material surrounding the nodules and intervening fibrosclerotic stroma.",
      "Demonstrate a mixture of splenic red-pulp vessel types: sinusoidal, capillary, and venous channels.",
      "Use CD31 with CD8 and CD34 to characterize the three vascular components; the mixed profile supports SANT.",
      "Exclude lymphoma by recognizing a structured angiomatoid vascular lesion with sclerosis rather than a clonal lymphoid proliferation.",
    ],
    histology: [
      "Multiple round or convoluted angiomatoid nodules may coalesce.",
      "Nodules are surrounded by concentric layers of collagen or fibrinoid material.",
      "Vascular spaces are slit-like, ectatic, or irregular and contain abundant erythrocytes.",
      "Lining endothelial cells are attenuated or plump without significant cytologic atypia or mitotic activity.",
      "Intervening stroma is densely fibrotic or fibromyxoid and may contain lymphocytes, plasma cells, eosinophils, and hemosiderin-laden macrophages.",
    ],
    ihc: [
      "All vascular components express CD31.",
      "Sinusoidal vessels: CD8-positive and CD34-negative.",
      "Capillaries: CD8-negative and CD34-positive.",
      "Venous channels: CD8-negative and CD34-negative.",
      "The characteristic mixed vascular immunophenotype is more informative than any single marker.",
    ],
    differential: [
      {
        name: "Splenic hamartoma",
        distinction:
          "Lacks discrete angiomatoid nodules and concentric collagenous rims; instead shows disorganized red-pulp tissue without a well-formed white-pulp component.",
      },
      {
        name: "Littoral cell angioma",
        distinction:
          "Shows anastomosing, often cystically dilated sinus-like channels with dual endothelial-histiocytic phenotype; SANT has nodules with concentric sclerosis and mixed vessel types.",
      },
      {
        name: "Splenic hemangioma",
        distinction:
          "Usually comprises a single vessel type, commonly capillaries (CD31+/CD34+/CD8−), rather than the three-vessel pattern of SANT.",
      },
      {
        name: "Splenic lymphoma",
        distinction:
          "Lymphoma is a lymphoid proliferation with lineage-marker expression; SANT is a non-lymphoid vascular-stromal lesion with angiomatoid nodules and fibrosis.",
      },
    ],
    molecular: [
      "CTNNB1 exon 3 deletions have been reported in a subset, but molecular testing is not established as a routine diagnostic requirement.",
    ],
    pitfalls: [
      "Do not call SANT a multinodular hemangioma; the defining architecture is angiomatoid nodules with intervening sclerosis and a mixed vascular phenotype.",
      "IgG4-related disease and EBV infection are not established etiologies.",
    ],
  },
];

const mesenchymalRows = [
  [
    "Conventional FDCS",
    "Spindle/ovoid syncytial cells; whorls, fascicles, storiform sheets; admixed small lymphocytes",
    "CD21/CD23/CD35, CXCL13, clusterin; often D2-40/SSTR2; usually S100−",
    "Tumor cells are stromal and FDC-marker-positive, not a clonal B-/T-cell population.",
  ],
  [
    "EBV-positive inflammatory FDCS",
    "Spindle/oval cells singly or in loose fascicles amid dense lymphoplasmacytic inflammation",
    "EBER+ in tumor cells; variable CD21/CD23/CD35/CXCL13/D2-40; LMP1 often+",
    "EBER labels atypical spindle cells; background lymphocytes are mixed and plasma cells polytypic.",
  ],
  [
    "Fibroblastic reticular cell tumor",
    "Spindle/ovoid cells in whorls, fascicles, sheets; lymphoplasmacytic background; collagen fibrils may occur",
    "Variable cytokeratin, SMA/actin, desmin; often vimentin/fascin/EMA; CD21/CD35/CXCL13−, S100−",
    "Myofibroblastic/reticular stromal phenotype rather than lymphoid lineage; exclude metastatic carcinoma if keratin+.",
  ],
];
const splenicRows = [
  [
    "Littoral cell angioma",
    "Anastomosing, dilated red-pulp sinus-like channels; plump lining cells; hemophagocytosis/hemosiderin",
    "Endothelial: CD31/ERG/vWF+; histiocytic: CD163/CD68/lysozyme+; often CD34−/CD8−",
    "Dual endothelial-histiocytic phenotype in vascular channels; no clonal lymphoid mass.",
  ],
  [
    "Splenic hamartoma",
    "Disorganized red-pulp sinusoids, macrophages, and fibrovascular stroma; no well-formed white pulp",
    "Sinusoids CD8+/CD31+/CD34−; capillaries CD34+/CD31+; macrophages CD68+/CD163+",
    "Mixed red-pulp architecture with sinusoidal CD8; not a monomorphic lymphoid proliferation.",
  ],
  [
    "SANT",
    "Multiple angiomatoid nodules with concentric collagen/fibrinoid rims and fibrosclerotic septa",
    "All vessels CD31+; sinusoids CD8+/CD34−; capillaries CD34+/CD8−; veins CD8−/CD34−",
    "Three-vessel phenotype in a sclerosing multinodular architecture, not lymphoma.",
  ],
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
function ComparisonTable({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <h3 className="border-b border-slate-200 bg-slate-50 px-4 py-3 font-bold text-slate-900">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
            <tr>
              {[
                "Entity",
                "Typical histology",
                "Key immunophenotype",
                "How to distinguish from lymphoma",
              ].map((x) => (
                <th key={x} className="border-b border-slate-200 px-3 py-3">
                  {x}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r[0]} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                {r.map((v, j) => (
                  <td
                    key={j}
                    className="align-top border-b border-slate-100 px-3 py-3 leading-6"
                  >
                    <span
                      className={
                        j === 0
                          ? "font-semibold text-slate-900"
                          : "text-slate-700"
                      }
                    >
                      {v}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function StromaDerivedNeoplasmsPage() {
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
      entities.filter(
        (e) =>
          (group === "All Categories" || e.group === group) &&
          `${e.name} ${e.group} ${e.clue} ${e.summary} ${e.clinical.join(" ")} ${e.criteria.join(" ")} ${e.histology.join(" ")} ${e.ihc.join(" ")} ${e.differential.map((d) => d.name + " " + d.distinction).join(" ")} ${(e.molecular || []).join(" ")}`
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
      <header className="mb-8 border-b-2 border-teal-700 pb-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          PathologyGPS · Hematopathology
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Stroma-Derived Neoplasms of Lymphoid Tissues
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic reference to mesenchymal dendritic cell neoplasms,
          intranodal myofibroblastic tumors, and splenic vascular-stromal
          lesions. These entities arise from stromal or vascular elements rather
          than hematopoietic lymphoid cells.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-slate-900">
          Diagnostic Framework: Stromal Neoplasm or Lymphoma?
        </h2>
        <p className="mb-4 text-sm leading-6 text-slate-700">
          The key distinction is the identity of the neoplastic cells. In
          stromal tumors, the lesional cells express follicular dendritic,
          fibroblastic/myofibroblastic, endothelial, or histiocytic markers.
          Lymphocytes may be numerous in the background but should be separately
          characterized rather than assumed to be the tumor population.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            [
              "1 · Identify the lesional cell",
              "Determine whether the atypical population is spindle/epithelioid stromal, endothelial, histiocytic, or lymphoid.",
            ],
            [
              "2 · Apply lineage-directed IHC",
              "Use FDC markers, SMA/desmin/cytokeratin, endothelial markers, and histiocytic markers according to morphology.",
            ],
            [
              "3 · Exclude lymphoma",
              "Assess CD45, B- and T-cell markers, light-chain pattern, EBER localization, and clonality when indicated; interpret these in the actual atypical cells.",
            ],
          ].map(([a, b]) => (
            <div
              key={a}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <h3 className="font-bold text-slate-900">{a}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <ComparisonTable
        title="Mesenchymal Dendritic Cell Neoplasms: Histology, IHC, and Exclusion of Lymphoma"
        rows={mesenchymalRows}
      />
      <ComparisonTable
        title="Splenic Vascular-Stromal Tumors: Histology, IHC, and Exclusion of Lymphoma"
        rows={splenicRows}
      />

      <section className="mb-8 rounded-xl border border-teal-200 bg-teal-50/50 p-4 sm:p-5">
        <h2 className="font-bold text-slate-900">Practical IHC Strategy</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>
            <strong>Spindle-cell lesion with lymphocytes:</strong> start with
            CD21, CD23, CD35, CXCL13, clusterin, S100, cytokeratin, SMA, and
            desmin; add EBER when inflammatory FDCS is considered.
          </li>
          <li>
            <strong>Splenic vascular lesion:</strong> use CD31/ERG with CD8 and
            CD34 to map vessel types; add CD163/CD68/lysozyme when littoral cell
            angioma is considered.
          </li>
          <li>
            <strong>Possible lymphoma:</strong> apply CD45, CD20/PAX5, CD3, and
            appropriate subtype markers to the atypical population. EBER must be
            localized to tumor cells, not simply reported as positive in the
            section.
          </li>
          <li>
            <strong>Do not overinterpret isolated markers:</strong> CD31 alone
            does not classify a splenic vascular lesion; cytokeratin alone does
            not prove carcinoma; CD21 in reactive follicles does not prove FDCS.
          </li>
        </ul>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="stroma-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic features
          </label>
          <input
            id="stroma-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: CD21, EBER, CD8, SANT, lymphoma..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="stroma-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="stroma-group"
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
          Open an entity for clinical profile, diagnostic criteria, histology,
          IHC, and differential diagnosis.
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
                  {isOpen ? "− Hide" : "+ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
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
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Histopathology">
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        {e.histology.map((x, j) => (
                          <li key={j}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Immunophenotype / IHC">
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        {e.ihc.map((x, j) => (
                          <li key={j}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  </div>
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
                  {e.molecular && (
                    <Section title="Molecular Pathology">
                      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                        {e.molecular.map((x, j) => (
                          <li key={j}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                  )}
                  {e.pitfalls && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
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
            No matching entities. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for anatomic pathology. Interpret
        immunohistochemical and molecular findings in conjunction with
        morphology, clinical history, and anatomic distribution.
      </footer>
    </main>
  );
}
