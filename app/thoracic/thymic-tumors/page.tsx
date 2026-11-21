"use client";

import { useMemo, useState } from "react";

type Differential =
  | [name: string, distinction: string]
  | { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  clinical: string;
  criteria: string[];
  histology: string[];
  ihc: string[];
  diff: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Type A Thymoma (Including Atypical Type A Thymoma)",
    group: "Thymomas",
    clue: "Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
    clinical:
      "Usually adults in the sixth to seventh decades; slight female predominance. Anterior (prevascular) mediastinum; may be incidental or cause mass symptoms. Myasthenia gravis occurs in a minority.",
    criteria: [
      "Thymic epithelial neoplasm composed predominantly of bland spindle and/or oval cells, occasionally polygonal.",
      "Fascicular, storiform, or hemangiopericytoma-like growth; rosettes, glandular structures, microcysts, or whorls may occur.",
      "Immature lymphocytes are absent or very sparse; no lymphocyte-dense component that meets criteria for type AB.",
      "Conventional cases have low mitotic activity and usually lack necrosis. Atypical type A may show hypercellularity, increased mitoses, and focal necrosis; these features alone do not establish carcinoma.",
    ],
    histology: [
      "Fibrous capsule may be complete or incomplete, with lobulation and thick fibrous bands.",
      "Tumor cells have bland nuclei, finely dispersed powdery chromatin, and inconspicuous nucleoli.",
      "Perivascular spaces are less frequent than in other thymoma types; Hassall corpuscles are absent.",
    ],
    ihc: [
      "Tumor cells express cytokeratins and p63/p40; FOXN1 and CD205 are supportive.",
      "CD5 and KIT (CD117) are generally negative in epithelial cells.",
      "Aberrant focal CD20 expression by neoplastic epithelial cells is a useful clue.",
      "TdT highlights absent or very sparse immature T cells; use it when type AB is a consideration.",
    ],
    diff: [
      [
        "Type AB thymoma",
        "Type AB contains a lymphocyte-rich component with numerous TdT-positive immature T cells; even focal dense areas or a meaningful moderate infiltrate favor AB.",
      ],
      [
        "Solitary fibrous tumor",
        "STAT6 and usually CD34 are positive; epithelial markers are negative.",
      ],
      [
        "Synovial sarcoma",
        "SS18::SSX fusion or surrogate immunostaining supports synovial sarcoma; thymoma retains thymic epithelial differentiation.",
      ],
      [
        "Metaplastic thymoma",
        "Metaplastic thymoma is biphasic, with anastomosing squamoid epithelial islands and a vimentin-positive spindle-cell stroma.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
    molecular: [
      "GTF2I p.L424H is highly characteristic, particularly in type A/AB thymoma, and can support the diagnosis in difficult cases; it is not independently diagnostic.",
    ],
    pitfalls: [
      "Do not classify a tumor as type A if a lymphocyte-rich component meets type AB criteria.",
      "Anaplasia or focal necrosis in an otherwise conventional thymoma does not, by itself, justify a diagnosis of thymic carcinoma.",
    ],
  },
  {
    name: "Type AB Thymoma",
    group: "Thymomas",
    clue: "A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
    clinical:
      "Adults, mean age approximately 57 years, with slight female predominance. Anterior mediastinum; myasthenia gravis occurs in approximately one fifth of cases.",
    criteria: [
      "Lobulated thymic epithelial tumor with variable proportions of spindle-cell, lymphocyte-poor type A-like areas and lymphocyte-rich type B-like areas.",
      "The two components may form separate lobules or be intricately intermingled.",
      "The lymphocyte-rich component contains a significant population of immature TdT-positive T cells and a keratin-positive epithelial network.",
      "The lymphocyte-rich areas are not simply type B1, B2, or B3 thymoma.",
    ],
    histology: [
      "Type A-like areas may show fascicular, storiform, or other patterns typical of type A thymoma.",
      "Lymphocyte-rich areas contain small oval, plump spindle, or polygonal epithelial cells among abundant lymphocytes.",
      "Medullary islands and Hassall corpuscles are usually absent or inconspicuous.",
    ],
    ihc: [
      "Pancytokeratin, CK19, and p63/p40 highlight the epithelial network, particularly in lymphocyte-rich areas.",
      "TdT and CD3 highlight immature T lymphocytes.",
      "Epithelial CD5 is absent; aberrant epithelial CD20 may be present.",
      "Ki-67 should be assessed in epithelial cells separately from proliferating thymocytes.",
    ],
    diff: [
      [
        "Type A thymoma",
        "Type A lacks a lymphocyte-rich component; TdT staining helps quantify immature T cells.",
      ],
      [
        "Micronodular thymoma with lymphoid stroma",
        "Micronodular thymoma has epithelial nodules separated by lymphoid stroma that is largely devoid of keratin-positive epithelial cells and contains abundant B cells.",
      ],
      [
        "Type B1 thymoma",
        "B1 recapitulates thymic cortex with dense lymphocytes, dispersed epithelial cells, and obligatory medullary islands; AB has distinct type A-like areas.",
      ],
      [
        "Metaplastic thymoma",
        "Metaplastic thymoma has a true biphasic epithelial/spindle-cell pattern rather than type A-like and immature-T-cell-rich compartments.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
    molecular: [
      "GTF2I p.L424H is recurrent and supports the A/AB molecular family; molecular testing is not required for routine diagnosis.",
    ],
  },
  {
    name: "Type B1 Thymoma",
    group: "Thymomas",
    clue: "Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
    clinical:
      "Typically adults; anterior mediastinum, with occasional ectopic tumors in the neck and other sites. Myasthenia gravis is a common presentation.",
    criteria: [
      "Lobulated tumor recapitulating non-involuted thymic cortex, with accompanying medullary differentiation.",
      "Dense small lymphocytes dominate; epithelial cells are individually dispersed and not clustered.",
      "Pale medullary islands are obligatory; Hassall corpuscles and myoid cells are optional.",
      "Epithelial cell clusters or increased epithelial density favor type B2 rather than B1.",
    ],
    histology: [
      "Lobules are separated by delicate collagenous septa and are often larger than normal thymic lobules.",
      "Epithelial cells have pale cytoplasm, round-to-oval nuclei, clear chromatin, and small nucleoli.",
      "Medullary islands contain less densely packed lymphocytes; poorly formed perivascular spaces are common.",
    ],
    ihc: [
      "Pancytokeratin highlights sparse, dispersed epithelial cells and the medullary epithelial network.",
      "TdT and CD3 highlight abundant immature T cells.",
      "Cytokeratin staining helps identify epithelial clusters that would favor B2.",
    ],
    diff: [
      [
        "Type B2 thymoma",
        "B2 has increased epithelial density and clusters of polygonal epithelial cells; medullary islands are less consistently conspicuous.",
      ],
      [
        "Type AB thymoma",
        "AB contains recognizable spindle-cell, lymphocyte-poor type A-like areas.",
      ],
      [
        "T-lymphoblastic lymphoma",
        "Lymphoblastic lymphoma is a destructive lymphoid neoplasm without a preserved thymic epithelial network; cytokeratin stains reveal the epithelial framework of B1 thymoma.",
      ],
      [
        "Normal or hyperplastic thymus",
        "Thymoma typically forms an expansile, lobulated mass with enlarged lobules and altered epithelial density; correlate with imaging and gross findings.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
  },
  {
    name: "Type B2 Thymoma",
    group: "Thymomas",
    clue: "Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
    clinical:
      "Usually adults in midlife; anterior mediastinum. Myasthenia gravis is frequent.",
    criteria: [
      "Lymphocyte-rich thymic epithelial tumor with epithelial cells present at a density greater than normal thymus or type B1 thymoma.",
      "Polygonal neoplastic epithelial cells occur singly and in clusters among numerous immature T cells.",
      "Lobulated thymic architecture and perivascular spaces support thymoma.",
      "Anaplastic foci do not establish carcinoma if thymoma architecture, immature T cells, and absence of epithelial CD5/KIT are retained.",
    ],
    histology: [
      "Polygonal epithelial cells have vesicular nuclei and conspicuous nucleoli, with pale-to-eosinophilic cytoplasm.",
      "Epithelial clusters are readily identified at low or intermediate power.",
      "Medullary islands may be present but are less defining than in B1.",
    ],
    ihc: [
      "Pancytokeratin highlights increased epithelial cells and clusters.",
      "TdT and CD3 highlight abundant immature T lymphocytes.",
      "Epithelial CD5 and KIT are generally negative; positivity should prompt careful consideration of thymic carcinoma.",
    ],
    diff: [
      [
        "Type B1 thymoma",
        "B1 has fewer, individually dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B3 thymoma",
        "B3 is epithelial-cell rich and lymphocyte poor, producing a pink rather than blue appearance on H&E.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Carcinoma shows overt malignant cytology and destructive growth; thymoma retains lobulation, perivascular spaces, immature TdT-positive T cells, and usually lacks epithelial CD5/KIT.",
      ],
      [
        "T-lymphoblastic lymphoma",
        "Lymphoblastic lymphoma lacks the organized keratin-positive thymic epithelial network.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
    pitfalls: [
      "At the B2/B3 boundary, acknowledge a morphologic continuum and sample extensively rather than forcing an artificial distinction.",
    ],
  },
  {
    name: "Type B3 Thymoma",
    group: "Thymomas",
    clue: "Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
    clinical:
      "Usually adults; anterior mediastinum. Myasthenia gravis may occur but is less characteristic than in B1/B2.",
    criteria: [
      "Lobulated thymic epithelial tumor composed predominantly of polygonal neoplastic cells in sheets.",
      "Small numbers of non-neoplastic immature T cells are usually scattered among tumor cells.",
      "Perivascular spaces with epithelial palisading are prominent.",
      "The diagnosis requires distinction from thymic squamous cell carcinoma, particularly when cytologic atypia is marked.",
    ],
    histology: [
      "Tumor is usually pink on H&E because epithelial cells predominate over lymphocytes.",
      "Cells have eosinophilic or clear cytoplasm and mildly to moderately atypical round, elongated, grooved, or raisinoid nuclei.",
      "Intercellular bridges are generally absent; sparse immature T cells are usually present.",
      "Lymphoid follicles may accompany perivascular spaces, especially in tumors associated with myasthenia gravis.",
    ],
    ihc: [
      "Pancytokeratin and p63/p40 highlight epithelial sheets.",
      "TdT highlights the sparse immature T-cell population, when present.",
      "Epithelial CD5 and KIT are usually absent in thymoma; their expression supports carcinoma in the appropriate context.",
    ],
    diff: [
      [
        "Type B2 thymoma",
        "B2 is lymphocyte rich, with numerous immature T cells and epithelial cells in a less dominant population.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Carcinoma shows destructive invasion, more overt malignant cytology, and often epithelial CD5 and/or KIT; thymoma retains thymic architecture and immature T cells.",
      ],
      [
        "Type A thymoma",
        "Type A is composed of bland spindle/oval cells with very few immature lymphocytes.",
      ],
      [
        "Metaplastic thymoma",
        "Metaplastic thymoma has a biphasic pattern with bland spindle-cell stroma and anastomosing squamoid epithelial islands.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
    molecular: [
      "Type B3 thymoma shows greater chromosomal instability than type A/AB tumors; TP53 alterations are more frequent toward the B2/B3 and carcinoma spectrum.",
    ],
  },
  {
    name: "Micronodular Thymoma with Lymphoid Stroma",
    group: "Thymomas",
    clue: "Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
    clinical:
      "Typically middle-aged to older adults; anterior mediastinum. Often discovered as a localized mass; myasthenia gravis is uncommon.",
    criteria: [
      "Thymic epithelial tumor composed of multiple discrete micronodules or islands of bland epithelial cells.",
      "Nodules are separated by abundant lymphoid stroma, often with reactive follicles and germinal centers.",
      "The lymphoid stroma is largely devoid of a keratin-positive epithelial network and contains numerous B cells.",
      "Atypia and destructive invasion are not features of the conventional lesion.",
    ],
    histology: [
      "Epithelial nodules may be spindle, oval, or polygonal and may show type A-like or other thymoma morphology.",
      "Lymphoid stroma contains mature lymphocytes, plasma cells, and reactive germinal centers.",
      "Perivascular spaces may be present.",
    ],
    ihc: [
      "Pancytokeratin highlights epithelial nodules and helps demonstrate separation from lymphoid stroma.",
      "CD20 highlights abundant B cells and germinal centers; CD3 highlights background T cells.",
      "TdT-positive immature T cells are not a dominant feature of the lymphoid stroma.",
    ],
    diff: [
      [
        "Type AB thymoma",
        "AB lymphocyte-rich areas contain a keratin-positive epithelial meshwork and predominantly immature TdT-positive T cells; micronodular stroma is B-cell rich and epithelial-poor.",
      ],
      [
        "Thymic carcinoma with micronodular/lymphoid pattern",
        "Carcinoma shows malignant epithelial cytology and destructive invasion; assess epithelial atypia, mitoses, necrosis, and invasion.",
      ],
      [
        "Reactive lymphoid hyperplasia",
        "Reactive thymic tissue retains normal corticomedullary organization rather than discrete neoplastic epithelial micronodules.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Metaplastic Thymoma",
        "Distinguish from Metaplastic Thymoma by its defining pattern: Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
      ],
    ],
  },
  {
    name: "Metaplastic Thymoma",
    group: "Thymomas",
    clue: "Biphasic tumor with anastomosing squamoid epithelial islands and bland spindle-cell stroma.",
    clinical:
      "Usually adults, often middle-aged; anterior mediastinum. Usually localized and indolent.",
    criteria: [
      "Biphasic thymic neoplasm composed of anastomosing islands or cords of polygonal squamoid epithelial cells and a background of bland spindle cells.",
      "Epithelial component may show variable nuclear atypia but lacks the high-grade features of sarcomatoid carcinoma.",
      "Spindle-cell component is cytologically bland and typically low proliferative.",
      "TdT-positive immature T cells are usually absent.",
    ],
    histology: [
      "Epithelial islands form complex anastomosing networks within a spindle-cell-rich stroma.",
      "Spindle cells are bland, often with elongated nuclei and a fibromyxoid background.",
      "Rare high-grade sarcomatoid transformation has been reported; evaluate any abrupt atypical spindle-cell component.",
    ],
    ihc: [
      "Epithelial islands express cytokeratins and p63/p40.",
      "Spindle cells express vimentin and may show focal EMA or actin; keratin and p63/p40 are absent or only focal.",
      "Both components are generally negative for CD5, CD20, CD34, and KIT.",
      "Ki-67 is typically low in both components.",
    ],
    diff: [
      [
        "Type A thymoma",
        "Type A may show varied growth patterns but is essentially monophasic; it lacks anastomosing squamoid epithelial islands and its spindle cells retain epithelial keratin expression.",
      ],
      [
        "Sarcomatoid carcinoma / carcinosarcoma",
        "Sarcomatoid carcinoma has a high-grade spindle component with marked atypia, frequent mitoses, necrosis, and sometimes heterologous elements.",
      ],
      [
        "Biphasic thymic tumor, NOS",
        "Metaplastic thymoma is the defined biphasic entity with anastomosing squamoid epithelial islands and bland spindle stroma.",
      ],
      [
        "Type A Thymoma (Including Atypical Type A Thymoma)",
        "Distinguish from Type A Thymoma (Including Atypical Type A Thymoma) by its defining pattern: Bland spindle/oval epithelial cells with very few immature T cells; classify as type AB if a substantial TdT-positive lymphocyte-rich component is present.",
      ],
      [
        "Type AB Thymoma",
        "Distinguish from Type AB Thymoma by its defining pattern: A mixture of lymphocyte-poor type A-like areas and lymphocyte-rich areas containing immature T cells.",
      ],
      [
        "Type B1 Thymoma",
        "Distinguish from Type B1 Thymoma by its defining pattern: Organotypic thymic cortex-like architecture with dispersed epithelial cells and conspicuous medullary islands.",
      ],
      [
        "Type B2 Thymoma",
        "Distinguish from Type B2 Thymoma by its defining pattern: Lymphocyte-rich tumor with more numerous, clustered polygonal epithelial cells than type B1.",
      ],
      [
        "Type B3 Thymoma",
        "Distinguish from Type B3 Thymoma by its defining pattern: Predominantly epithelial sheets of mildly to moderately atypical polygonal cells with sparse immature T cells.",
      ],
      [
        "Micronodular Thymoma with Lymphoid Stroma",
        "Distinguish from Micronodular Thymoma with Lymphoid Stroma by its defining pattern: Multiple epithelial nodules separated by abundant lymphoid stroma rich in B cells and follicles.",
      ],
    ],
    pitfalls: [
      "Do not diagnose sarcomatoid carcinoma solely because spindle cells are vimentin positive; assess cytologic grade, mitoses, necrosis, and the epithelial component.",
    ],
  },
  {
    name: "Lipofibroadenoma of the Thymus",
    group: "Other Benign Thymic Tumors",
    clue: "Fibrous/hyalinized stroma predominates over adipocytes, with delicate strands of bland thymic epithelial cells.",
    clinical:
      "Exceptionally rare; reported in men aged approximately 20–62 years. Anterior mediastinum; often asymptomatic or causes cough/dyspnea.",
    criteria: [
      "Well-circumscribed benign thymic tumor resembling breast fibroadenoma.",
      "Predominantly fibrous or hyalinized stroma with delicate strands of bland epithelial cells and variable adipocytes.",
      "Thymic remnants, Hassall corpuscles, or calcification may be present.",
      "No significant epithelial atypia or destructive invasion.",
    ],
    histology: [
      "Fibrous stroma predominates over adipose tissue.",
      "Bland epithelial strands are single or multiple and may be accompanied by few lymphocytes.",
      "Some cases are adjacent to type B1 thymoma.",
    ],
    ihc: [
      "Epithelial cells express AE1/AE3 and CK19.",
      "Lymphocytes are mature CD3-positive or CD20-positive; TdT-positive immature T cells are not a feature.",
    ],
    diff: [
      [
        "Thymolipoma / thymofibrolipoma",
        "Thymolipoma is predominantly mature adipose tissue with scattered thymic strands; lipofibroadenoma is fibrous-stroma predominant.",
      ],
      [
        "Sclerosing thymoma",
        "Sclerosing thymoma has epithelial islands in dense collagen but lacks the characteristic admixed adipose component.",
      ],
      [
        "Type B1 thymoma",
        "B1 has dense immature T lymphocytes and organotypic thymic architecture rather than fibroadenoma-like fibrous stroma.",
      ],
    ],
  },
  {
    name: "Thymic Squamous Cell Carcinoma",
    group: "Thymic Carcinomas",
    clue: "Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
    clinical:
      "Usually older adults, with male predominance in many series; anterior mediastinum. Often symptomatic from a bulky invasive mass; autoimmune syndromes are uncommon.",
    criteria: [
      "Primary thymic carcinoma with unequivocal squamous differentiation and destructive invasion.",
      "Tumor forms nests, sheets, or cords of atypical squamous cells; keratinization may be present or absent.",
      "Establish thymic origin by excluding direct extension from lung and metastasis from another site.",
      "A thymoma component may coexist; if any carcinoma component is present, report as thymic carcinoma and quantify associated thymoma components.",
    ],
    histology: [
      "Conventional tumors show polygonal cells with intercellular bridges, dyskeratosis, or keratin pearls in variable combinations.",
      "Necrosis, mitotic activity, desmoplasia, and infiltrative growth are common.",
      "Micronodular thymic carcinoma with lymphoid hyperplasia is a recognized pattern/subtype; evaluate the epithelial component for malignancy.",
    ],
    ihc: [
      "p40, p63, and CK5/6 support squamous differentiation.",
      "CD5 and KIT (CD117) expression in tumor cells supports thymic carcinoma over thymoma, but neither is universally positive.",
      "PAX8 (polyclonal) may support thymic origin but is not fully specific; interpret with clinical and radiologic findings.",
    ],
    diff: [
      [
        "Type B3 thymoma",
        "B3 retains thymoma architecture, perivascular spaces, and usually scattered TdT-positive immature T cells; carcinoma shows overt destructive invasion and more malignant cytology.",
      ],
      [
        "Pulmonary squamous cell carcinoma invading thymus",
        "Assess epicenter, radiologic relationship to lung, and clinical staging; immunophenotype alone may not distinguish.",
      ],
      [
        "Metastatic squamous cell carcinoma",
        "Exclude a primary elsewhere by clinical history and imaging.",
      ],
      [
        "Basaloid carcinoma of thymus",
        "Basaloid carcinoma has basaloid nests with peripheral palisading and limited squamous maturation.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
    molecular: [
      "Thymic squamous carcinoma commonly shows copy-number alterations; molecular profiling is not required for routine diagnosis.",
    ],
  },
  {
    name: "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
    group: "Thymic Carcinomas",
    clue: "Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
    clinical: "Very rare; adults with an anterior mediastinal mass.",
    criteria: [
      "Thymic squamous carcinoma showing a micronodular growth pattern with associated lymphoid hyperplasia.",
      "Identify cytologic malignancy and/or destructive invasion in the epithelial component.",
      "Do not diagnose benign micronodular thymoma when the epithelial component shows unequivocal carcinoma.",
    ],
    histology: [
      "Multiple epithelial nodules are set in lymphoid stroma, which may contain reactive follicles.",
      "Carcinoma cells show squamous differentiation and malignant cytologic features.",
    ],
    ihc: [
      "Pancytokeratin highlights epithelial nodules.",
      "p40/p63 and CK5/6 support squamous differentiation.",
      "CD5 and KIT may support thymic carcinoma in the appropriate context.",
    ],
    diff: [
      [
        "Micronodular thymoma with lymphoid stroma",
        "Benign thymoma has bland epithelial cells and lymphoid stroma rich in B cells without destructive invasion.",
      ],
      [
        "Conventional thymic squamous cell carcinoma",
        "Conventional SCC lacks the distinctive micronodular/lymphoid-hyperplasia pattern.",
      ],
      [
        "Metastatic carcinoma with lymphoid response",
        "Establish thymic origin and exclude an extrathymic primary.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Basaloid Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
    clinical: "Rare; typically adults with an anterior mediastinal mass.",
    criteria: [
      "Thymic carcinoma composed of basaloid neoplastic cells in nests, lobules, or cystic structures.",
      "Peripheral nuclear palisading is characteristic.",
      "Establish primary thymic origin and exclude metastasis or direct extension.",
    ],
    histology: [
      "Compact basaloid cells have scant cytoplasm, hyperchromatic nuclei, and peripheral palisading.",
      "Comedo-type necrosis or cystic spaces may occur.",
      "Assess for squamous maturation and other carcinoma components.",
    ],
    ihc: [
      "p40, p63, and CK5/6 support basal/squamous differentiation.",
      "CD5 and KIT may support thymic origin but are not universally expressed.",
    ],
    diff: [
      [
        "Thymic squamous cell carcinoma",
        "Conventional SCC shows more overt squamous maturation, keratinization, or intercellular bridges.",
      ],
      [
        "Adenoid cystic carcinoma-like thymic carcinoma",
        "Adenoid cystic-like tumors show cribriform-basaloid islands and hyaline basement-membrane-like material.",
      ],
      [
        "Metastatic basaloid carcinoma",
        "Exclude a primary in lung, head and neck, or another site.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Lymphoepithelial Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
    clinical:
      "Rare; usually adults with an anterior mediastinal mass. May be associated with EBV.",
    criteria: [
      "Thymic carcinoma with syncytial sheets, nests, or cords of undifferentiated epithelial cells.",
      "Prominent lymphoplasmacytic infiltrate is characteristic but may be sparse in some cases.",
      "EBER positivity supports the diagnosis, particularly when the lymphoid background is limited.",
      "Exclude metastatic nasopharyngeal or other lymphoepithelial carcinoma.",
    ],
    histology: [
      "Tumor cells have vesicular chromatin, prominent nucleoli, and syncytial cytoplasm.",
      "Dense lymphocytes and plasma cells permeate the tumor in classic examples.",
    ],
    ihc: [
      "Pancytokeratin and EMA highlight carcinoma cells.",
      "p40/p63 may be positive depending on differentiation.",
      "EBER in situ hybridization is supportive; a negative result does not exclude cases with otherwise typical morphology.",
    ],
    diff: [
      [
        "Thymic squamous cell carcinoma",
        "Conventional SCC has more overt squamous differentiation and usually lacks the dense lymphoplasmacytic background.",
      ],
      [
        "Metastatic nasopharyngeal lymphoepithelial carcinoma",
        "Correlate with nasopharyngeal evaluation and imaging; EBV positivity is not site-specific.",
      ],
      [
        "Lymphoma",
        "Carcinoma cells express epithelial markers; lymphoma cells express lineage-specific hematolymphoid markers.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
    group: "Thymic Carcinomas",
    clue: "Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
    clinical:
      "Often adolescents or young-to-middle-aged adults, but any age is possible. Mediastinal/thoracic mass, frequently aggressive and rapidly progressive.",
    criteria: [
      "Poorly differentiated carcinoma, often with monotonous primitive cells and focal abrupt squamous differentiation.",
      "Nuclear NUT immunoreactivity or molecular demonstration of NUTM1 rearrangement establishes the diagnosis.",
      "Assign thymic origin only after excluding another thoracic or extrathoracic primary.",
    ],
    histology: [
      "Sheets and nests of monotonous small-to-intermediate cells with high N:C ratios and brisk mitotic activity.",
      "Abrupt keratinization or squamous differentiation may occur.",
      "Necrosis is common.",
    ],
    ihc: [
      "NUT shows characteristic speckled nuclear staining in most cases.",
      "Pancytokeratin and p63/p40 are commonly positive; CD34 may be variable.",
      "Use molecular testing for NUTM1 rearrangement when immunohistochemistry is equivocal.",
    ],
    diff: [
      [
        "Thymic squamous cell carcinoma",
        "Conventional SCC lacks NUT protein expression and NUTM1 rearrangement.",
      ],
      [
        "Small cell carcinoma",
        "Small cell carcinoma shows neuroendocrine morphology and neuroendocrine marker expression; NUT carcinoma is defined by NUTM1 alteration.",
      ],
      [
        "Lymphoma",
        "Lymphoma lacks epithelial marker expression and NUTM1-driven carcinoma phenotype.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
    molecular: [
      "NUTM1 rearrangement, commonly involving BRD4, is defining and diagnostically actionable.",
    ],
  },
  {
    name: "Clear Cell Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
    clinical: "Rare; adults with an anterior mediastinal mass.",
    criteria: [
      "Primary thymic carcinoma composed of clear or pale epithelial cells in nests, islands, or trabeculae.",
      "Hyalinizing clear cell carcinoma shows abundant hyalinized stroma.",
      "Exclude metastatic clear cell renal cell carcinoma and other clear-cell primaries.",
      "Confirm thymic origin clinically and radiologically.",
    ],
    histology: [
      "Tumor cells have clear or pale cytoplasm and form nests, islands, or trabeculae.",
      "Hyalinizing subtype shows conspicuous hyalinized stromal material.",
    ],
    ihc: [
      "Pancytokeratin and epithelial markers support carcinoma.",
      "p40/p63 may be expressed in thymic clear cell carcinoma.",
      "Use renal-lineage markers and PAX8 in a focused panel when renal metastasis is a concern.",
    ],
    diff: [
      [
        "Metastatic clear cell renal cell carcinoma",
        "Renal carcinoma typically expresses PAX8, CAIX, and renal markers; correlate with renal imaging and clinical history.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Squamous carcinoma shows overt squamous morphology rather than clear-cell predominance.",
      ],
      [
        "Hyalinizing clear cell carcinoma of salivary type",
        "Morphology overlaps; EWSR1 rearrangement supports the hyalinizing subtype, while site assignment requires clinical exclusion of another primary.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
    molecular: [
      "EWSR1 rearrangement is characteristic of the hyalinizing clear cell subtype and supports the diagnosis.",
    ],
  },
  {
    name: "Low-Grade Papillary Adenocarcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
    clinical: "Exceptionally rare; adults with an anterior mediastinal mass.",
    criteria: [
      "Primary thymic adenocarcinoma with papillary and tubulopapillary architecture.",
      "Tumor shows invasive growth and epithelial atypia, even when cytologically low grade.",
      "Exclude metastatic papillary adenocarcinoma from lung, thyroid, kidney, or other sites.",
    ],
    histology: [
      "Complex papillae and tubules are lined by neoplastic epithelial cells.",
      "Assess stromal invasion, architectural complexity, and cytologic atypia.",
    ],
    ihc: [
      "Use a focused epithelial panel to confirm adenocarcinoma.",
      "Select organ-specific markers according to the differential; no single immunostain establishes thymic origin.",
    ],
    diff: [
      [
        "Metastatic papillary thyroid carcinoma",
        "Thyroglobulin and TTF1 support thyroid origin; correlate with thyroid imaging.",
      ],
      [
        "Metastatic pulmonary adenocarcinoma",
        "TTF1 and Napsin A may support lung origin, interpreted with clinical findings.",
      ],
      [
        "Thymic carcinoma, NOS",
        "A specific papillary adenocarcinoma pattern should be assigned when criteria are met; NOS is a diagnosis of exclusion.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
  },
  {
    name: "Mucoepidermoid Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
    clinical: "Rare; adults with anterior mediastinal mass.",
    criteria: [
      "Primary thymic carcinoma composed of mucous, intermediate, and squamoid cells.",
      "Cells form nests, solid areas, and cystic structures.",
      "Exclude metastatic mucoepidermoid carcinoma, particularly from salivary gland or lung.",
    ],
    histology: [
      "Mucous cells contain intracytoplasmic mucin and may line cystic spaces.",
      "Intermediate cells have smaller, less differentiated morphology.",
      "Squamoid cells show eosinophilic cytoplasm and squamous differentiation.",
    ],
    ihc: [
      "Pancytokeratin and p63/p40 support epithelial and squamoid differentiation.",
      "Mucicarmine or PAS-D highlights intracellular mucin.",
      "CD5/KIT may support thymic origin in the appropriate setting.",
    ],
    diff: [
      [
        "Thymic squamous cell carcinoma",
        "SCC lacks the characteristic mucous and intermediate cell mixture.",
      ],
      [
        "Adenosquamous carcinoma",
        "Adenosquamous carcinoma has distinct malignant glandular and squamous components rather than the characteristic triphasic mucoepidermoid pattern.",
      ],
      [
        "Metastatic mucoepidermoid carcinoma",
        "Exclude salivary gland and pulmonary primaries.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
    molecular: [
      "CRTC1::MAML2 or related MAML2 rearrangement supports mucoepidermoid carcinoma.",
    ],
  },
  {
    name: "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
    group: "Thymic Carcinomas",
    clue: "Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
    clinical: "Very rare; adults with anterior mediastinal mass.",
    criteria: [
      "Thymic carcinoma showing cribriform or basaloid architecture resembling adenoid cystic carcinoma.",
      "Hyaline basement-membrane-like material may be present.",
      "True glands are generally absent within the cribriform-basaloid islands.",
      "Exclude metastatic adenoid cystic carcinoma from salivary gland or other sites.",
    ],
    histology: [
      "Basaloid cells form cribriform, solid, or tubular-appearing islands.",
      "Hyaline globules or basement-membrane-like material may mimic adenoid cystic carcinoma.",
      "True ductal lumina are generally lacking.",
    ],
    ihc: [
      "pancytokeratin and p63/p40 support epithelial/basal differentiation.",
      "CD117 may be expressed but is not specific.",
      "Use MYB-related studies when the differential with true adenoid cystic carcinoma remains unresolved.",
    ],
    diff: [
      [
        "Adenoid cystic carcinoma metastatic to thymus",
        "True adenoid cystic carcinoma has dual cell populations and genuine ductal structures; search for an extrathymic primary.",
      ],
      [
        "Basaloid thymic carcinoma",
        "Basaloid carcinoma may show peripheral palisading but lacks the characteristic cribriform-like hyaline pattern.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Conventional SCC shows overt squamous maturation.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Enteric-Type Adenocarcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
    clinical: "Rare; adults with anterior mediastinal mass.",
    criteria: [
      "Primary thymic adenocarcinoma with intestinal/enteric morphology.",
      "Tumor resembles colorectal adenocarcinoma, often with gland formation and mucin production.",
      "Exclude metastatic colorectal or other gastrointestinal adenocarcinoma with clinical and radiologic evaluation.",
    ],
    histology: [
      "Irregular glands lined by columnar cells with intestinal differentiation.",
      "Mucin production, dirty necrosis, and cribriform architecture may be present.",
    ],
    ihc: [
      "CDX2, CK20, and SATB2 may be expressed and do not by themselves establish a gastrointestinal primary.",
      "Use CK7, CD5, PAX8, and other markers as a panel; interpret in clinical context.",
    ],
    diff: [
      [
        "Metastatic colorectal adenocarcinoma",
        "Clinical history, colonoscopy, imaging, and distribution are essential; enteric immunophenotype overlaps.",
      ],
      [
        "Thymic adenocarcinoma, NOS",
        "Assign enteric type when characteristic intestinal differentiation is present.",
      ],
      [
        "Thymic mucoepidermoid carcinoma",
        "Mucoepidermoid carcinoma has mucous, intermediate, and squamoid cell populations.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Adenocarcinoma, NOS, of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
    clinical: "Exceptionally rare; adults with anterior mediastinal mass.",
    criteria: [
      "Primary thymic adenocarcinoma lacking features of a defined subtype.",
      "Exclude metastasis from lung, gastrointestinal tract, thyroid, kidney, and other sites.",
      "Establish thymic origin through anatomic epicenter and integrated clinical, radiologic, and pathologic assessment.",
    ],
    histology: [
      "Gland-forming or mucin-producing carcinoma without a specific defining pattern.",
      "Document grade, invasion, necrosis, and any associated thymoma component.",
    ],
    ihc: [
      "Use a focused panel guided by morphology and clinical differential.",
      "No single immunohistochemical marker is specific for thymic adenocarcinoma.",
    ],
    diff: [
      [
        "Low-grade papillary adenocarcinoma of thymus",
        "Papillary/tubulopapillary architecture supports the defined low-grade papillary type.",
      ],
      [
        "Enteric-type adenocarcinoma of thymus",
        "Intestinal morphology and phenotype support enteric type.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Exclude an extrathymic primary before assigning thymic origin.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Adenosquamous Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
    clinical: "Rare; adults with anterior mediastinal mass.",
    criteria: [
      "Primary thymic carcinoma with distinct malignant glandular and squamous components.",
      "Both components should be morphologically convincing and malignant.",
      "Exclude mucoepidermoid carcinoma and metastasis from another site.",
    ],
    histology: [
      "Glandular component forms malignant glands and/or mucin-producing structures.",
      "Squamous component shows keratinization, intercellular bridges, or squamous nests.",
      "The two components may be intermingled or spatially distinct.",
    ],
    ihc: [
      "Pancytokeratin highlights both components.",
      "p40/p63/CK5/6 highlight squamous differentiation.",
      "Mucicarmine or PAS-D highlights mucin in glandular areas.",
    ],
    diff: [
      [
        "Mucoepidermoid carcinoma",
        "Mucoepidermoid carcinoma contains mucous, intermediate, and squamoid cells in a characteristic triphasic pattern; MAML2 rearrangement supports it.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Pure SCC lacks a genuine malignant glandular component.",
      ],
      [
        "Metastatic adenosquamous carcinoma",
        "Exclude pulmonary, pancreaticobiliary, and other primary sites.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Sarcomatoid Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
    clinical: "Rare; adults with an invasive anterior mediastinal mass.",
    criteria: [
      "Malignant thymic epithelial neoplasm with a prominent sarcomatoid/spindle-cell component.",
      "Spindle cells show significant atypia, mitotic activity, and often necrosis.",
      "Demonstrate epithelial differentiation by immunohistochemistry or identify an associated conventional carcinoma/thymoma component.",
      "Exclude primary mediastinal sarcoma and metastatic sarcomatoid carcinoma.",
    ],
    histology: [
      "Malignant spindle cells form fascicles or sheets and may show marked pleomorphism.",
      "Coagulative necrosis and brisk mitotic activity are common.",
      "Heterologous differentiation may occur.",
    ],
    ihc: [
      "Broad-spectrum cytokeratin and/or EMA may be focal in spindle cells; extensive sampling may be required.",
      "p40/p63 may highlight an epithelial component.",
      "CD5 and KIT may support thymic carcinoma in the appropriate context.",
    ],
    diff: [
      [
        "Metaplastic thymoma",
        "Metaplastic thymoma has bland spindle cells and low-grade squamoid epithelial islands without high-grade spindle-cell atypia or necrosis.",
      ],
      [
        "Primary mediastinal sarcoma",
        "Sarcoma lacks convincing epithelial differentiation; use lineage-specific markers and molecular testing as indicated.",
      ],
      [
        "Type A thymoma",
        "Type A spindle cells are bland and epithelial-marker positive, with low mitotic activity.",
      ],
      [
        "Metastatic sarcomatoid carcinoma",
        "Exclude an extrathymic primary clinically and radiologically.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Undifferentiated Carcinoma of the Thymus",
    group: "Thymic Carcinomas",
    clue: "High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
    clinical: "Rare; adults with an aggressive anterior mediastinal mass.",
    criteria: [
      "Primary malignant thymic epithelial tumor showing no specific squamous, glandular, neuroendocrine, or other defined differentiation.",
      "Confirm epithelial nature and exclude lymphoma, melanoma, germ cell tumor, and sarcoma.",
      "Exclude metastasis or direct extension from another primary site.",
    ],
    histology: [
      "High-grade sheets, nests, or diffuse growth of markedly atypical cells.",
      "Necrosis and brisk mitotic activity are common.",
      "No defining morphologic pattern of another thymic carcinoma subtype.",
    ],
    ihc: [
      "Broad-spectrum cytokeratin confirms epithelial differentiation.",
      "Use a broad but morphology-directed exclusion panel, including lymphoid, melanocytic, germ-cell, and neuroendocrine markers as appropriate.",
    ],
    diff: [
      [
        "NUT carcinoma",
        "NUT immunohistochemistry and NUTM1 testing identify this genetically defined carcinoma.",
      ],
      [
        "Thymic neuroendocrine carcinoma",
        "Neuroendocrine morphology and synaptophysin/chromogranin/INSM1 expression support neuroendocrine carcinoma.",
      ],
      [
        "Lymphoma",
        "CD45 and lineage markers support hematolymphoid neoplasia.",
      ],
      [
        "Sarcoma",
        "Mesenchymal lineage markers and molecular studies support sarcoma.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Thymic Carcinoma, NOS",
        "Distinguish from Thymic Carcinoma, NOS by its defining pattern: A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
      ],
    ],
  },
  {
    name: "Thymic Neuroendocrine Tumor (Carcinoid)",
    group: "Thymic Neuroendocrine Neoplasms",
    clue: "Well-differentiated neuroendocrine morphology; classify as typical or atypical carcinoid using mitoses and necrosis.",
    clinical:
      "Adults, often middle-aged; anterior mediastinum. May be associated with MEN1 and endocrine syndromes; symptoms may reflect mass effect or hormone production.",
    criteria: [
      "Well-differentiated neuroendocrine neoplasm with organoid, trabecular, nested, or rosette-like architecture.",
      "Typical carcinoid: fewer than 2 mitoses per 2 mm² and no necrosis.",
      "Atypical carcinoid: 2–10 mitoses per 2 mm² and/or focal necrosis.",
      "Report mitotic count per 2 mm² and necrosis; Ki-67 is supportive, especially in limited/crushed biopsies.",
      "Carcinoid-like tumors with more than 10 mitoses per 2 mm² fall outside the conventional atypical carcinoid threshold; report the carcinoid morphology and increased mitotic activity if classified as LCNEC.",
    ],
    histology: [
      "Uniform cells with finely stippled salt-and-pepper chromatin and moderate cytoplasm.",
      "Organoid nests, trabeculae, rosettes, or ribbons are common.",
      "Atypical carcinoid shows increased mitoses and/or necrosis.",
    ],
    ihc: [
      "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation.",
      "Cytokeratin confirms epithelial nature.",
      "Ki-67 helps distinguish carcinoid from high-grade neuroendocrine carcinoma, particularly in small biopsies.",
    ],
    diff: [
      [
        "Small cell carcinoma of thymus",
        "Small cell carcinoma has small cells, nuclear molding, crush artifact, extensive necrosis, and brisk mitotic activity.",
      ],
      [
        "Large cell neuroendocrine carcinoma",
        "LCNEC has large cells, high-grade cytology, extensive mitoses/necrosis, and neuroendocrine architecture.",
      ],
      [
        "Paraganglioma",
        "Paraganglioma is usually keratin negative and shows sustentacular cells with S100/SOX10; correlate with site and immunophenotype.",
      ],
      [
        "Thymoma",
        "Thymoma has a thymic epithelial network with immature T cells rather than diffuse neuroendocrine marker expression.",
      ],
      [
        "Small Cell Carcinoma of the Thymus",
        "Distinguish from Small Cell Carcinoma of the Thymus by its defining pattern: High-grade small-cell neuroendocrine carcinoma with nuclear molding, crush artifact, brisk mitoses, and necrosis.",
      ],
      [
        "Large Cell Neuroendocrine Carcinoma of the Thymus",
        "Distinguish from Large Cell Neuroendocrine Carcinoma of the Thymus by its defining pattern: High-grade neuroendocrine carcinoma with large-cell cytology, organoid architecture, brisk mitoses, and necrosis.",
      ],
    ],
    molecular: [
      "MEN1 alterations and association with multiple endocrine neoplasia type 1 may be relevant in selected patients.",
    ],
    pitfalls: [
      "Carcinoid-like tumors with more than 10 mitoses per 2 mm² are currently classified as LCNEC, but should be described as having carcinoid morphology with increased mitotic activity because they may differ biologically from conventional LCNEC.",
    ],
  },
  {
    name: "Small Cell Carcinoma of the Thymus",
    group: "Thymic Neuroendocrine Neoplasms",
    clue: "High-grade small-cell neuroendocrine carcinoma with nuclear molding, crush artifact, brisk mitoses, and necrosis.",
    clinical:
      "Usually adults; anterior mediastinal mass. Aggressive clinical course; exclude pulmonary small cell carcinoma.",
    criteria: [
      "High-grade neuroendocrine carcinoma composed of small cells with scant cytoplasm and finely granular chromatin.",
      "Nuclear molding, extensive necrosis, crush artifact, and brisk mitotic activity are characteristic.",
      "Confirm neuroendocrine differentiation and establish thymic origin by excluding lung primary.",
    ],
    histology: [
      "Sheets or nests of small cells with high N:C ratios and inconspicuous nucleoli.",
      "Nuclear molding and crush artifact are common.",
      "Apoptosis, extensive necrosis, and numerous mitoses are typical.",
    ],
    ihc: [
      "Synaptophysin, chromogranin, and/or INSM1 support neuroendocrine differentiation.",
      "Cytokeratin is positive, often with a dot-like pattern.",
      "TTF1 may be positive and does not reliably distinguish thymic from pulmonary origin.",
    ],
    diff: [
      [
        "Thymic carcinoid",
        "Carcinoid has well-differentiated organoid architecture, lower mitotic activity, and less necrosis.",
      ],
      [
        "Large cell neuroendocrine carcinoma",
        "LCNEC has larger cells, more abundant cytoplasm, and prominent nucleoli.",
      ],
      [
        "Lymphoma",
        "Lymphoma is CD45 positive and lacks epithelial cytokeratin expression.",
      ],
      [
        "Pulmonary small cell carcinoma",
        "Imaging and clinical evaluation are required; TTF1 is not site-specific.",
      ],
      [
        "Thymic Neuroendocrine Tumor (Carcinoid)",
        "Distinguish from Thymic Neuroendocrine Tumor (Carcinoid) by its defining pattern: Well-differentiated neuroendocrine morphology; classify as typical or atypical carcinoid using mitoses and necrosis.",
      ],
      [
        "Large Cell Neuroendocrine Carcinoma of the Thymus",
        "Distinguish from Large Cell Neuroendocrine Carcinoma of the Thymus by its defining pattern: High-grade neuroendocrine carcinoma with large-cell cytology, organoid architecture, brisk mitoses, and necrosis.",
      ],
    ],
  },
  {
    name: "Large Cell Neuroendocrine Carcinoma of the Thymus",
    group: "Thymic Neuroendocrine Neoplasms",
    clue: "High-grade neuroendocrine carcinoma with large-cell cytology, organoid architecture, brisk mitoses, and necrosis.",
    clinical:
      "Adults with an anterior mediastinal mass; aggressive behavior. Exclude pulmonary primary.",
    criteria: [
      "High-grade neuroendocrine carcinoma with large cells and recognizable neuroendocrine architecture.",
      "Tumor shows high mitotic activity and extensive necrosis.",
      "Neuroendocrine differentiation is supported by immunohistochemistry.",
      "Establish thymic origin by excluding a pulmonary or other primary.",
    ],
    histology: [
      "Large polygonal cells with moderate-to-abundant cytoplasm and vesicular nuclei with prominent nucleoli.",
      "Organoid nests, trabeculae, rosettes, or peripheral palisading may be present.",
      "Mitoses are numerous and necrosis is common.",
    ],
    ihc: [
      "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation.",
      "Cytokeratin confirms epithelial differentiation.",
      "Ki-67 is high and supports separation from well-differentiated carcinoid in limited samples.",
    ],
    diff: [
      [
        "Thymic carcinoid",
        "Carcinoid has lower mitotic activity, less necrosis, and well-differentiated cytology.",
      ],
      [
        "Small cell carcinoma",
        "Small cell carcinoma has smaller cells, scant cytoplasm, nuclear molding, and more prominent crush artifact.",
      ],
      [
        "Pulmonary LCNEC metastatic to thymus",
        "Exclude a lung primary with imaging and clinical correlation.",
      ],
      [
        "Thymic Neuroendocrine Tumor (Carcinoid)",
        "Distinguish from Thymic Neuroendocrine Tumor (Carcinoid) by its defining pattern: Well-differentiated neuroendocrine morphology; classify as typical or atypical carcinoid using mitoses and necrosis.",
      ],
      [
        "Small Cell Carcinoma of the Thymus",
        "Distinguish from Small Cell Carcinoma of the Thymus by its defining pattern: High-grade small-cell neuroendocrine carcinoma with nuclear molding, crush artifact, brisk mitoses, and necrosis.",
      ],
    ],
  },
  {
    name: "Thymic Carcinoma, NOS",
    group: "Thymic Carcinomas",
    clue: "A thymic carcinoma that cannot be assigned to a defined histologic subtype after appropriate exclusionary workup.",
    clinical:
      "Adults with an anterior mediastinal mass; often locally advanced or symptomatic. Clinical and radiologic evaluation is required to establish thymic origin.",
    criteria: [
      "Primary thymic carcinoma of epithelial lineage that does not meet criteria for a defined thymic carcinoma subtype.",
      "Exclude thymoma, thymic neuroendocrine neoplasm, lymphoma, germ cell tumor, melanoma, and sarcoma.",
      "Exclude direct extension from lung and metastasis from an extrathymic primary.",
      "Rare morphologic variants may show hepatoid, rhabdoid, sebaceous, or undifferentiated large-cell features; describe the pattern when present.",
    ],
    histology: [
      "Morphology is heterogeneous and may show solid nests, sheets, cords, or other carcinoma patterns.",
      "Undifferentiated large-cell carcinoma with Castleman-like lymphoid stroma and carcinomas with sebaceous differentiation are rare patterns described within this spectrum.",
      "Document necrosis, mitotic activity, invasion, and any associated thymoma component.",
    ],
    ihc: [
      "Broad-spectrum cytokeratin confirms epithelial differentiation.",
      "Use morphology-directed markers to exclude neuroendocrine, squamous, glandular, germ-cell, melanocytic, and hematolymphoid neoplasms.",
      "NUT and SMARCA4 studies are useful in selected poorly differentiated tumors.",
    ],
    diff: [
      [
        "Undifferentiated carcinoma of thymus",
        "Undifferentiated carcinoma is a defined high-grade category showing only epithelial differentiation without another recognizable subtype.",
      ],
      [
        "Thymic squamous cell carcinoma",
        "Squamous carcinoma shows convincing squamous differentiation and can be classified specifically.",
      ],
      [
        "Thymic neuroendocrine carcinoma",
        "Neuroendocrine morphology and marker expression support a neuroendocrine neoplasm.",
      ],
      [
        "Metastatic carcinoma",
        "Exclude an extrathymic primary using clinical, radiologic, and focused immunohistochemical assessment.",
      ],
      [
        "Thymic Squamous Cell Carcinoma",
        "Distinguish from Thymic Squamous Cell Carcinoma by its defining pattern: Invasive squamous carcinoma in the thymus; exclude pulmonary primary and metastasis.",
      ],
      [
        "Micronodular Thymic Carcinoma with Lymphoid Hyperplasia",
        "Distinguish from Micronodular Thymic Carcinoma with Lymphoid Hyperplasia by its defining pattern: Malignant epithelial micronodules in a prominent lymphoid background; distinguish from benign micronodular thymoma.",
      ],
      [
        "Basaloid Carcinoma of the Thymus",
        "Distinguish from Basaloid Carcinoma of the Thymus by its defining pattern: Basaloid nests with peripheral palisading, sometimes surrounding cystic spaces.",
      ],
      [
        "Lymphoepithelial Carcinoma of the Thymus",
        "Distinguish from Lymphoepithelial Carcinoma of the Thymus by its defining pattern: Syncytial carcinoma cells with prominent nucleoli in a dense lymphoplasmacytic background; EBER may support the diagnosis.",
      ],
      [
        "NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma)",
        "Distinguish from NUT Carcinoma of the Thorax (Including Thymic NUT Carcinoma) by its defining pattern: Poorly differentiated carcinoma with abrupt squamous differentiation; confirm NUTM1 rearrangement or convincing nuclear NUT staining.",
      ],
      [
        "Clear Cell Carcinoma of the Thymus",
        "Distinguish from Clear Cell Carcinoma of the Thymus by its defining pattern: Clear-cell epithelial nests or trabeculae; hyalinizing subtype may harbor EWSR1 rearrangement.",
      ],
      [
        "Low-Grade Papillary Adenocarcinoma of the Thymus",
        "Distinguish from Low-Grade Papillary Adenocarcinoma of the Thymus by its defining pattern: Primary thymic adenocarcinoma with low-grade tubulopapillary architecture; exclude metastasis.",
      ],
      [
        "Mucoepidermoid Carcinoma of the Thymus",
        "Distinguish from Mucoepidermoid Carcinoma of the Thymus by its defining pattern: Combination of mucous, intermediate, and squamoid cells in nests and cystic structures; MAML2 rearrangement is supportive.",
      ],
      [
        "Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features",
        "Distinguish from Thymic Carcinoma with Adenoid Cystic Carcinoma-Like Features by its defining pattern: Cribriform-basaloid morphology resembling adenoid cystic carcinoma, often without true glandular lumina.",
      ],
      [
        "Enteric-Type Adenocarcinoma of the Thymus",
        "Distinguish from Enteric-Type Adenocarcinoma of the Thymus by its defining pattern: Thymic primary mimicking colorectal adenocarcinoma; establish origin by excluding gastrointestinal metastasis.",
      ],
      [
        "Adenocarcinoma, NOS, of the Thymus",
        "Distinguish from Adenocarcinoma, NOS, of the Thymus by its defining pattern: Use only after excluding defined thymic adenocarcinoma types and metastatic adenocarcinoma.",
      ],
      [
        "Adenosquamous Carcinoma of the Thymus",
        "Distinguish from Adenosquamous Carcinoma of the Thymus by its defining pattern: Unequivocal malignant glandular and squamous components in the same primary thymic carcinoma.",
      ],
      [
        "Sarcomatoid Carcinoma of the Thymus",
        "Distinguish from Sarcomatoid Carcinoma of the Thymus by its defining pattern: High-grade spindle-cell malignancy with epithelial differentiation or an associated thymic carcinoma component.",
      ],
      [
        "Undifferentiated Carcinoma of the Thymus",
        "Distinguish from Undifferentiated Carcinoma of the Thymus by its defining pattern: High-grade epithelial malignancy without a definable line of differentiation or recognized thymic carcinoma subtype.",
      ],
    ],
    molecular: [
      "Molecular testing is selected according to morphology; NUTM1 rearrangement and SMARCA4 status may resolve specific mimics.",
    ],
  },
];

const thymomaComparison = [
  {
    type: "Type A",
    epithelialCells: "Bland spindle/oval cells",
    lymphocytes: "Absent or very sparse",
    architecture:
      "Fascicular, storiform, hemangiopericytoma-like; variable patterns",
    keyPoint: "No substantial TdT-positive lymphocyte-rich component",
  },
  {
    type: "Type AB",
    epithelialCells:
      "Spindle/oval cells in type A-like and lymphocyte-rich areas",
    lymphocytes:
      "Variable; substantial immature T-cell population in rich areas",
    architecture:
      "Lobulated; type A-like and type B-like components separate or intermingled",
    keyPoint:
      "Keratin-positive epithelial network within lymphocyte-rich areas",
  },
  {
    type: "Type B1",
    epithelialCells: "Scattered, individually dispersed epithelial cells",
    lymphocytes: "Very abundant",
    architecture: "Organotypic thymic cortex with medullary islands",
    keyPoint: "Medullary islands are required; epithelial clusters favor B2",
  },
  {
    type: "Type B2",
    epithelialCells: "Increased density; polygonal cells form clusters",
    lymphocytes: "Abundant immature T cells",
    architecture: "Lobulated, lymphocyte-rich thymic pattern",
    keyPoint: "More epithelial cells and clusters than B1",
  },
  {
    type: "Type B3",
    epithelialCells: "Sheets of polygonal neoplastic epithelial cells",
    lymphocytes: "Sparse immature T cells",
    architecture:
      "Lobules separated by fibrous septa; prominent perivascular spaces",
    keyPoint: "Epithelial-rich, pink appearance on H&E",
  },
  {
    type: "Micronodular thymoma with lymphoid stroma",
    epithelialCells: "Discrete bland epithelial micronodules",
    lymphocytes: "Abundant mature lymphoid stroma, often B-cell rich",
    architecture: "Epithelial nodules separated by lymphoid stroma",
    keyPoint:
      "Lymphoid stroma lacks a continuous keratin-positive epithelial meshwork",
  },
  {
    type: "Metaplastic thymoma",
    epithelialCells: "Anastomosing squamoid epithelial islands",
    lymphocytes: "Usually absent or sparse",
    architecture: "Biphasic epithelial islands and bland spindle-cell stroma",
    keyPoint:
      "Low-grade spindle component; distinguish from sarcomatoid carcinoma",
  },
];

const groups = [
  "All categories",
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
      <h3 className="mb-2 border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function ThymicTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All categories");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter(
      (e) =>
        (group === "All categories" || e.group === group) &&
        (!q ||
          [
            e.name,
            e.group,
            e.clue,
            e.clinical,
            ...e.criteria,
            ...e.histology,
            ...e.ihc,
            ...e.diff.flatMap((d) =>
              Array.isArray(d) ? [d[0], d[1]] : [d.name, d.distinction],
            ),
            ...(e.molecular || []),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
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
      <div className="mb-8">
        <a
          href="/"
          className="text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Home
        </a>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
          PathologyGPS · Mediastinum
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Thymic Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">
          Diagnostic reference for thymomas, thymic carcinomas, and thymic
          neuroendocrine neoplasms. Interpret morphology, immunophenotype,
          molecular findings, and clinical-radiologic distribution together.
        </p>
      </div>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-slate-950">
          WHO Thymoma Types: Side-by-Side Diagnostic Comparison
        </h2>
        <p className="mb-4 text-sm leading-6 text-slate-600">
          The most useful distinction is the balance and organization of
          neoplastic epithelial cells and immature T lymphocytes. Use
          pancytokeratin to map the epithelial network and TdT to assess
          immature T-cell density when classification is difficult.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-200 p-3">WHO type</th>
                <th className="border border-slate-200 p-3">
                  Epithelial cells
                </th>
                <th className="border border-slate-200 p-3">Lymphocytes</th>
                <th className="border border-slate-200 p-3">Architecture</th>
                <th className="border border-slate-200 p-3">
                  Key discriminator
                </th>
              </tr>
            </thead>
            <tbody>
              {thymomaComparison.map((r) => (
                <tr key={r.type} className="align-top even:bg-slate-50">
                  <td className="border border-slate-200 p-3 font-semibold text-slate-900">
                    {r.type}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    {r.epithelialCells}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    {r.lymphocytes}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    {r.architecture}
                  </td>
                  <td className="border border-slate-200 p-3 text-slate-700">
                    {r.keyPoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl bg-teal-50 p-4 text-sm leading-6 text-teal-950">
          <strong>Practical threshold:</strong> A tumor resembling type A but
          containing a lymphocyte-dense area with numerous TdT-positive immature
          T cells should be classified as type AB. In type B1, epithelial cells
          are dispersed and non-clustered; epithelial clusters or increased
          epithelial density favor type B2.
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <h2 className="mb-2 font-bold text-slate-900">Thymoma Reporting</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
            <li>
              For tumors with more than one thymoma pattern, list all types
              beginning with the predominant component.
            </li>
            <li>Quantify minor thymoma components in 10% increments.</li>
            <li>
              Type AB retains its designation regardless of the relative
              proportions of type A-like and lymphocyte-rich areas.
            </li>
            <li>
              If any thymic carcinoma component is present, diagnose thymic
              carcinoma and specify its type and percentage, followed by the
              associated thymoma components.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <h2 className="mb-2 font-bold text-slate-900">
            Staging and Clinical Context
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Stage thymic epithelial tumors using the current TNM system;
              Masaoka–Koga staging may also be reported where clinically used.
            </li>
            <li>
              All thymoma types have potential for invasion or metastasis; stage
              and completeness of resection are major prognostic factors.
            </li>
            <li>
              Myasthenia gravis is particularly associated with thymopoietically
              active type AB, B1, and B2 thymomas.
            </li>
            <li>
              Consider Good syndrome, pure red cell aplasia, and other
              autoimmune or immunodeficiency-associated conditions.
            </li>
          </ul>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="thymic-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and differential points
          </label>
          <input
            id="thymic-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: TdT, GTF2I, CD5, MAML2, NUTM1..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="thymic-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="thymic-group"
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
        <span>{filtered.length} diagnostic entities</span>
        <span>
          Expand a diagnosis for criteria, morphology, IHC, and differentials.
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
                    {e.clinical}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <Section title="Clinical Profile">
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                      {e.clinical.split("; ").map((x, j) => (
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
                    <div>
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
                          {e.diff.map((d, j) => {
                            const name = Array.isArray(d) ? d[0] : d.name;
                            const distinction = Array.isArray(d)
                              ? d[1]
                              : d.distinction;
                            return (
                              <div
                                key={j}
                                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                              >
                                <div className="text-sm font-bold text-slate-900">
                                  {name}
                                </div>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                  {distinction}
                                </p>
                              </div>
                            );
                          })}
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
        immunohistochemical and molecular findings with morphology, clinical
        history, and tumor location.
      </footer>
    </main>
  );
}
