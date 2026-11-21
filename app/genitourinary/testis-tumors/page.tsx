"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const items: Item[] = [
  {
    name: "Germ cell neoplasia in situ (GCNIS)",
    group: "Germ cell precursor",
    behavior: "Preinvasive",
    site: "Seminiferous tubules of the postpubertal testis",
    clinical: [
      "Usually asymptomatic; may be detected during infertility workup or in the background testicular parenchyma adjacent to an invasive germ cell tumor.",
      "May be bilateral in a small minority of cases.",
    ],
    criteria: [
      "Atypical gonocyte-like cells occupy the spermatogonial niche along the seminiferous tubular basement membrane.",
      "Cells show clear cytoplasm, enlarged angulated nuclei, coarse chromatin, and prominent nucleoli.",
      "A reliable diagnosis requires immunohistochemistry in the appropriate clinical setting.",
    ],
    histology: [
      "Neoplastic cells line the tubules in a characteristic single-layer, string-of-beads arrangement.",
      "Affected tubules may show multilayering, luminal floating cells, or pagetoid spread into adjacent tubules and rete testis.",
    ],
    ihc: [
      "OCT3/4, SALL4, PLAP, SOX17, AP-2γ, and KIT are useful positive markers; expression may be heterogeneous.",
      "OCT3/4 and SOX17 support GCNIS over normal or maturing germ cells.",
    ],
    molecular: [
      "GCNIS is typically hypomethylated and shares an embryonic germ-cell-like molecular profile.",
      "Gain of chromosome 12p is characteristic of invasive germ cell tumors and is generally absent in GCNIS.",
    ],
    differential: [
      [
        "Normal/delayed-maturation gonocytes",
        "Interpret age and developmental context; immature gonocytes may retain embryonic markers in prepubertal testes.",
      ],
      [
        "Arrested spermatogonia",
        "Usually lack the full GCNIS immunophenotype and cytologic atypia.",
      ],
      [
        "Intratubular seminoma",
        "Shows more extensive intratubular growth; correlate with adjacent invasive tumor and immunophenotype.",
      ],
    ],
    pitfalls: [
      "GCNIS can be patchy; a negative small biopsy does not exclude a focal lesion.",
      "Pagetoid rete testis involvement remains in situ and should not be mistaken for invasive tumor.",
    ],
  },

  {
    name: "Gonadoblastoma",
    group: "Germ cell / sex cord-stromal tumor",
    behavior: "Potential for malignant germ cell tumor development",
    site: "Dysgenetic gonad, including testis; often associated with disorders/differences of sex development",
    clinical: [
      "Usually occurs in individuals with a dysgenetic gonad and a disorder/difference of sex development.",
      "May present as a gonadal mass; bilateral or multifocal disease can occur.",
    ],
    criteria: [
      "Characteristic nests containing germ cells admixed with sex cord-stromal cells.",
      "Calcification is common and may be extensive.",
      "Assess for an associated invasive germ cell tumor, particularly dysgerminoma/seminoma.",
    ],
    histology: [
      "Nests of large germ cells are surrounded by smaller sex cord cells resembling Sertoli or granulosa cells.",
      "Hyaline basement-membrane-like material and calcification may be conspicuous.",
    ],
    ihc: [
      "Germ cells express OCT3/4, SALL4, and other germ cell markers.",
      "Sex cord cells express inhibin, calretinin, and SF1.",
    ],
    molecular: [
      "Often associated with Y-chromosome material, including TSPY, in the setting of gonadal dysgenesis.",
      "Molecular findings depend on the underlying disorder/difference of sex development.",
    ],
    differential: [
      [
        "Seminoma/dysgerminoma",
        "Usually lacks the characteristic intimate admixture of germ cells and sex cord cells in nests.",
      ],
      [
        "Mixed germ cell tumor",
        "Contains distinct germ cell tumor components rather than the characteristic gonadoblastoma nests.",
      ],
      [
        "Large cell calcifying Sertoli cell tumor",
        "Lacks the neoplastic germ cell component and gonadoblastoma-type architecture.",
      ],
    ],
    pitfalls: [
      "Search carefully for an invasive germ cell tumor component; its presence changes classification and clinical implications.",
    ],
  },

  {
    name: "Seminoma",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis; typically young to middle-aged adults",
    clinical: [
      "Most common invasive testicular germ cell tumor; median age is in the late 30s.",
      "Usually presents as a painless testicular mass; serum AFP should not be elevated by pure seminoma.",
    ],
    criteria: [
      "Uniform large germ cells with clear-to-pale cytoplasm and distinct cell borders.",
      "Nests, sheets, or lobules separated by fibrous septa containing lymphocytes.",
      "GCNIS is usually present in adjacent testicular parenchyma.",
      "Syncytiotrophoblastic cells may be present and can account for a modest serum β-hCG elevation.",
    ],
    histology: [
      "Classic architecture is lobulated with fibrous septa and lymphocytic infiltrates.",
      "Tumor cells have round nuclei, prominent nucleoli, and glycogen-rich clear cytoplasm.",
      "Granulomatous reaction and scattered syncytiotrophoblastic giant cells may occur.",
    ],
    ihc: [
      "OCT3/4, SALL4, SOX17, PLAP, KIT, and D2-40 are typically positive.",
      "CD30 and SOX2 are generally negative, helping distinguish seminoma from embryonal carcinoma.",
      "β-hCG highlights syncytiotrophoblastic cells when present.",
    ],
    molecular: [
      "Gain of chromosome 12p, commonly i(12p), supports invasive GCNIS-derived germ cell tumor.",
      "KIT, KRAS, NRAS, and other pathway mutations occur in subsets; no single mutation is required for diagnosis.",
    ],
    differential: [
      [
        "Embryonal carcinoma",
        "More pleomorphic cells, epithelial/glandular or papillary architecture, brisk mitoses; CD30 and SOX2 positive.",
      ],
      [
        "Spermatocytic tumor",
        "Older patients, three distinct cell sizes, lack of GCNIS, and absence of typical seminoma immunophenotype.",
      ],
      [
        "Lymphoma",
        "Discohesive cells in older men; leukocyte markers positive and germ cell markers negative.",
      ],
      [
        "Yolk sac tumor",
        "Reticular/microcystic or other characteristic patterns; AFP and glypican-3 positive, OCT3/4 negative.",
      ],
    ],
    pitfalls: [
      "Any elevated serum AFP argues against a diagnosis of pure seminoma and should prompt additional sampling/review for a nonseminomatous component.",
      "A small syncytiotrophoblastic component does not convert seminoma into choriocarcinoma.",
    ],
  },
  {
    name: "Embryonal carcinoma",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis; commonly part of a mixed germ cell tumor",
    clinical: [
      "Typically affects younger adults than seminoma.",
      "Often associated with elevated AFP or β-hCG only when other components are present.",
    ],
    criteria: [
      "Primitive malignant epithelial cells with marked nuclear atypia and brisk mitotic activity.",
      "Solid, glandular, papillary, or alveolar architecture; necrosis and hemorrhage may occur.",
      "GCNIS is usually present.",
    ],
    histology: [
      "Cells are crowded with overlapping nuclei, prominent nucleoli, and scant basophilic cytoplasm.",
      "Glandular and papillary patterns may show central necrosis; solid areas may mimic lymphoma or seminoma.",
    ],
    ihc: [
      "OCT3/4, SALL4, SOX2, CD30, and cytokeratins are typically positive.",
      "SOX17 is generally negative, distinguishing it from seminoma and yolk sac tumor.",
      "CD117 is usually negative.",
    ],
    molecular: [
      "Gain of chromosome 12p is characteristic of invasive GCNIS-derived tumors.",
      "Recurrent mutations are uncommon; molecular testing is not routinely needed.",
    ],
    differential: [
      [
        "Seminoma",
        "More uniform cells with clear cytoplasm and lymphocyte-rich septa; CD30/SOX2 negative and SOX17 positive.",
      ],
      [
        "Yolk sac tumor",
        "Usually OCT3/4 negative, often glypican-3 and AFP positive; broader architectural patterns.",
      ],
      [
        "Diffuse large B-cell lymphoma",
        "CD45 and B-cell markers positive; germ cell markers negative.",
      ],
    ],
    pitfalls: [
      "Mixed tumors may contain small embryonal carcinoma foci that are easily missed without generous sampling.",
      "Do not classify a tumor as seminoma if a convincing embryonal carcinoma component is present.",
    ],
  },
  {
    name: "Yolk sac tumor, postpubertal type",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis; commonly mixed with other germ cell components",
    clinical: [
      "Usually occurs in young adult men.",
      "Serum AFP is commonly elevated and is useful for clinical correlation.",
    ],
    criteria: [
      "Diverse patterns including reticular/microcystic, microcystic, glandular, papillary, solid, and hepatoid patterns.",
      "Schiller-Duval bodies, hyaline globules, or intracellular/extracellular basement-membrane-like material may be present.",
      "GCNIS is usually present in adjacent parenchyma.",
    ],
    histology: [
      "Reticular/microcystic architecture is common, with anastomosing spaces lined by primitive tumor cells.",
      "Schiller-Duval bodies are highly characteristic but not required.",
      "Hyaline globules may be PAS-positive and diastase-resistant.",
    ],
    ihc: [
      "SALL4, glypican-3, and AFP are commonly positive; AFP may be focal.",
      "Cytokeratins are usually positive.",
      "OCT3/4 and CD30 are negative.",
    ],
    molecular: [
      "Gain of chromosome 12p supports a GCNIS-derived tumor.",
      "No specific molecular alteration is required for diagnosis.",
    ],
    differential: [
      [
        "Embryonal carcinoma",
        "OCT3/4, SOX2, and CD30 positive; yolk sac tumor is typically glypican-3 positive and OCT3/4 negative.",
      ],
      [
        "Hepatoid carcinoma/metastasis",
        "Use clinical context and germ cell markers; AFP alone is not specific.",
      ],
      [
        "Prepubertal-type yolk sac tumor",
        "Occurs in young children and is generally not associated with GCNIS or 12p gain.",
      ],
    ],
    pitfalls: [
      "AFP immunostaining can be focal; a negative result does not exclude yolk sac tumor.",
      "In mixed tumors, estimate and report each component after extensive sampling.",
    ],
  },
  {
    name: "Choriocarcinoma",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Highly malignant",
    site: "Testis; usually a component of a mixed germ cell tumor",
    clinical: [
      "Usually occurs in young adults.",
      "Often presents with markedly elevated serum β-hCG and early hematogenous metastases.",
    ],
    criteria: [
      "Biphasic trophoblastic proliferation composed of mononuclear cytotrophoblasts and multinucleated syncytiotrophoblasts.",
      "Prominent hemorrhage and necrosis are characteristic.",
      "Pure testicular choriocarcinoma is rare.",
    ],
    histology: [
      "Biphasic trophoblastic cells surround hemorrhagic areas.",
      "Syncytiotrophoblasts have abundant eosinophilic cytoplasm and multiple hyperchromatic nuclei.",
    ],
    ihc: [
      "β-hCG strongly highlights syncytiotrophoblasts.",
      "GATA3, inhibin, and cytokeratins may be positive in trophoblastic cells.",
      "SALL4 may be variable; interpret with morphology and other components.",
    ],
    molecular: [
      "Usually GCNIS-derived with chromosome 12p gain.",
      "No specific molecular assay is required.",
    ],
    differential: [
      [
        "Seminoma with syncytiotrophoblastic cells",
        "Scattered syncytiotrophoblasts are present in a seminoma background without a biphasic trophoblastic tumor or extensive hemorrhagic pattern.",
      ],
      [
        "Placental site trophoblastic tumor",
        "Monomorphic intermediate trophoblasts, usually without the classic biphasic cytotrophoblast/syncytiotrophoblast pattern.",
      ],
      [
        "Metastatic trophoblastic neoplasm",
        "Correlate with clinical history and testicular GCNIS-associated components.",
      ],
    ],
    pitfalls: [
      "Extensive hemorrhage may obscure the viable tumor; thoroughly sample the peripheral viable areas.",
      "A few β-hCG-positive giant cells in seminoma are not sufficient for choriocarcinoma.",
    ],
  },
  {
    name: "Placental site trophoblastic tumor",
    group: "GCNIS-derived trophoblastic tumor",
    behavior: "Malignant",
    site: "Testis; exceptionally rare",
    clinical: [
      "Extremely rare testicular trophoblastic neoplasm in men.",
      "Serum β-hCG may be elevated but is not uniformly markedly increased.",
    ],
    criteria: [
      "Proliferation of intermediate trophoblasts in cords, sheets, or infiltrative patterns.",
      "Cells have abundant eosinophilic cytoplasm and irregular nuclei.",
      "Distinguish from choriocarcinoma by the absence of a classic biphasic trophoblastic population.",
    ],
    histology: [
      "Mononuclear intermediate trophoblast-like cells infiltrate testicular tissue.",
      "Vascular wall involvement and necrosis may be seen.",
    ],
    ihc: [
      "Cytokeratins and GATA3 are typically positive.",
      "Human placental lactogen and inhibin may be positive; β-hCG is variable.",
    ],
    molecular: [
      "No defining molecular test is established for routine diagnosis.",
    ],
    differential: [
      [
        "Choriocarcinoma",
        "Biphasic cytotrophoblast and syncytiotrophoblast with prominent hemorrhage; strong β-hCG in syncytiotrophoblasts.",
      ],
      [
        "Epithelioid trophoblastic tumor",
        "Nodular epithelioid growth with hyaline-like material and a different trophoblastic phenotype.",
      ],
    ],
    pitfalls: [
      "Given the extreme rarity, exclude metastatic trophoblastic neoplasia and other testicular germ cell tumor components.",
    ],
  },
  {
    name: "Epithelioid trophoblastic tumor",
    group: "GCNIS-derived trophoblastic tumor",
    behavior: "Malignant",
    site: "Testis; exceptionally rare",
    clinical: [
      "Very rare testicular tumor; clinical presentation is generally an intratesticular mass.",
    ],
    criteria: [
      "Nodular or nested growth of epithelioid intermediate trophoblast-like cells.",
      "Hyaline-like material and geographic necrosis may be present.",
      "The diagnosis requires exclusion of other trophoblastic tumors and metastatic disease.",
    ],
    histology: [
      "Tumor cells have distinct borders, eosinophilic cytoplasm, and relatively uniform nuclei.",
      "Nests and cords may be surrounded by hyaline-like material.",
    ],
    ihc: [
      "Cytokeratins and GATA3 are typically positive.",
      "p63 is often positive; β-hCG is usually limited or focal compared with choriocarcinoma.",
    ],
    molecular: [
      "No routinely used defining molecular alteration is established.",
    ],
    differential: [
      [
        "Placental site trophoblastic tumor",
        "More infiltrative intermediate trophoblasts with hPL expression; epithelioid trophoblastic tumor is more nodular and often p63 positive.",
      ],
      [
        "Choriocarcinoma",
        "Biphasic trophoblastic cells and extensive hemorrhage with prominent β-hCG.",
      ],
      [
        "Metastatic carcinoma",
        "Use clinical history and a broad epithelial/trophoblastic panel.",
      ],
    ],
    pitfalls: [
      "The testicular occurrence is exceptionally uncommon; do not diagnose without excluding metastasis.",
    ],
  },
  {
    name: "Cystic trophoblastic tumor",
    group: "GCNIS-derived trophoblastic tumor",
    behavior: "Malignant trophoblastic component",
    site: "Testis; usually encountered in mixed germ cell tumors",
    clinical: [
      "Usually identified as a component of a testicular germ cell tumor.",
    ],
    criteria: [
      "Cystic spaces lined by trophoblastic cells, often with cytotrophoblastic and syncytiotrophoblastic differentiation.",
      "Interpret in the context of associated germ cell tumor components.",
    ],
    histology: [
      "Cystic architecture is the defining pattern.",
      "Trophoblastic lining cells may show variable cytologic atypia and β-hCG expression.",
    ],
    ihc: [
      "β-hCG highlights syncytiotrophoblastic differentiation.",
      "Cytokeratins are generally expressed by trophoblastic cells.",
    ],
    molecular: ["No specific molecular test is required."],
    differential: [
      [
        "Choriocarcinoma",
        "Shows a solid biphasic trophoblastic proliferation with hemorrhage rather than a predominantly cystic pattern.",
      ],
      [
        "Yolk sac tumor",
        "May be microcystic but shows yolk sac tumor morphology and glypican-3/SALL4 profile.",
      ],
    ],
    pitfalls: [
      "Assess the complete tumor because cystic trophoblastic areas may coexist with other germ cell components.",
    ],
  },
  {
    name: "Teratoma, postpubertal type",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant potential in postpubertal setting",
    site: "Testis; often mixed with other germ cell tumor components",
    clinical: [
      "Occurs in postpubertal males, usually young adults.",
      "May present as a solid or cystic testicular mass; serum markers depend on associated components.",
    ],
    criteria: [
      "Mature and/or immature tissues derived from more than one germ layer, often with organoid differentiation.",
      "In postpubertal patients, teratoma is considered a malignant germ cell tumor even when composed entirely of mature tissues.",
      "GCNIS is usually present.",
    ],
    histology: [
      "Heterogeneous admixture of somatic tissues, including epithelial, mesenchymal, neural, and other differentiated elements.",
      "Immature neuroepithelium may be present; somatic-type malignancy must be actively sought.",
    ],
    ihc: [
      "IHC is lineage-directed to characterize specific components rather than to establish teratoma itself.",
      "SALL4 may highlight associated germ cell components but is not expected in most mature somatic tissues.",
    ],
    molecular: [
      "Chromosome 12p gain supports GCNIS-derived postpubertal teratoma.",
      "Somatic-type malignancies may acquire molecular alterations characteristic of the corresponding carcinoma or sarcoma.",
    ],
    differential: [
      [
        "Prepubertal-type teratoma",
        "Occurs in young children, lacks GCNIS, and generally lacks chromosome 12p gain; usually benign.",
      ],
      [
        "Somatic-type malignancy",
        "A distinct expansile malignant component must be identified and classified separately.",
      ],
      [
        "Mixed germ cell tumor",
        "Identify and quantify any accompanying seminoma, embryonal carcinoma, yolk sac tumor, or trophoblastic component.",
      ],
    ],
    pitfalls: [
      "Do not call a postpubertal testicular teratoma benign solely because all sampled tissues are mature.",
      "Extensive sampling is required to identify small malignant components.",
    ],
  },
  {
    name: "Teratoma with somatic-type malignancy",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis, usually arising in postpubertal teratoma",
    clinical: [
      "Usually occurs in adults and may present in a primary testicular tumor or metastatic site.",
      "The somatic-type malignancy may become clinically dominant, particularly after chemotherapy.",
    ],
    criteria: [
      "Teratoma-associated component showing unequivocal carcinoma, sarcoma, embryonic-type neuroectodermal tumor, or another somatic malignancy.",
      "Classify the somatic malignancy according to its differentiation.",
      "Distinguish from ordinary immature teratoma and from a separate primary malignancy.",
    ],
    histology: [
      "A discrete malignant somatic component is present within or adjacent to teratoma.",
      "Common patterns include adenocarcinoma, sarcoma, and embryonic-type neuroectodermal tumor.",
    ],
    ihc: [
      "Use lineage-specific markers according to the somatic malignancy; no single IHC profile defines the entity.",
      "Germ cell markers may be absent in the somatic-type malignant component.",
    ],
    molecular: [
      "Chromosome 12p gain or i(12p) can support germ cell tumor origin, especially in a metastatic somatic-type malignancy.",
      "Additional alterations may reflect the specific somatic malignancy.",
    ],
    differential: [
      [
        "Metastatic carcinoma or sarcoma to testis",
        "Look for an associated teratoma/germ cell tumor and chromosome 12p gain; correlate with clinical history.",
      ],
      [
        "Immature teratoma",
        "Immature tissue alone is not equivalent to a somatic-type malignancy.",
      ],
      [
        "Embryonal carcinoma",
        "Primitive germ cell phenotype with OCT3/4 and CD30, unlike a differentiated somatic malignancy.",
      ],
    ],
    pitfalls: [
      "Do not use the obsolete term PNET; use embryonic-type neuroectodermal tumor for the relevant somatic-type malignancy.",
      "A somatic-type malignancy may be the only component sampled in a metastasis.",
    ],
  },
  {
    name: "Mixed germ cell tumor",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis; typically young adult men",
    clinical: [
      "Commonly presents as a testicular mass in young adults.",
      "Serum AFP and β-hCG depend on the component types and proportions.",
    ],
    criteria: [
      "Two or more distinct germ cell tumor components are present.",
      "Identify and estimate the percentage of each component.",
      "Any seminoma mixed with a nonseminomatous component is managed and classified as a nonseminomatous germ cell tumor.",
    ],
    histology: [
      "Morphology varies according to the combination of components.",
      "Sampling should identify small embryonal carcinoma, yolk sac tumor, trophoblastic, and teratomatous foci.",
    ],
    ihc: [
      "Use component-directed panels; OCT3/4/SOX17 support seminoma, OCT3/4/SOX2/CD30 support embryonal carcinoma, and glypican-3/AFP support yolk sac tumor.",
    ],
    molecular: [
      "Chromosome 12p gain is typical of GCNIS-derived components.",
      "No single molecular alteration defines mixed germ cell tumor.",
    ],
    differential: [
      [
        "Seminoma",
        "A pure seminoma diagnosis requires exclusion of nonseminomatous components and correlation with serum AFP.",
      ],
      [
        "Teratoma with somatic-type malignancy",
        "Requires a distinct somatic malignant component rather than multiple germ cell tumor lineages.",
      ],
      [
        "Gonadoblastoma",
        "Contains germ cells and sex cord elements in a characteristic nested pattern, often in a dysgenetic gonad.",
      ],
    ],
    pitfalls: [
      "Report the percentage of each component; even a small nonseminomatous component changes classification and clinical management.",
    ],
  },
  {
    name: "Regressed (burned-out) germ cell tumor",
    group: "GCNIS-derived germ cell tumor",
    behavior: "Evidence of a regressed malignant germ cell tumor",
    site: "Testicular scar; may present with retroperitoneal or distant metastasis",
    clinical: [
      "May present with metastatic germ cell tumor despite no obvious viable testicular primary.",
      "Often associated with a small scar or calcified focus in the testis.",
    ],
    criteria: [
      "Fibrous scar with tubular atrophy, hemosiderin, coarse calcification, and/or chronic inflammation.",
      "Residual GCNIS or viable germ cell tumor may be present at the periphery.",
      "Clinical and imaging correlation is essential.",
    ],
    histology: [
      "A hyalinized scar replaces testicular parenchyma.",
      "Germ cell neoplasia in situ may persist in adjacent seminiferous tubules.",
    ],
    ihc: [
      "IHC may identify residual GCNIS using OCT3/4, PLAP, and other germ cell markers.",
      "No IHC marker proves regression in the absence of residual tumor.",
    ],
    molecular: [
      "Chromosome 12p gain in a metastatic lesion can support germ cell tumor origin.",
    ],
    differential: [
      [
        "Nonspecific testicular scar",
        "Requires correlation with metastatic germ cell tumor and characteristic regressive changes.",
      ],
      [
        "Infarct",
        "Usually shows geographic coagulative necrosis and reparative change.",
      ],
      [
        "Granulomatous orchitis",
        "Shows granulomatous inflammation rather than a typical regressed tumor scar.",
      ],
    ],
    pitfalls: [
      "A scar may be subtle; extensively sample suspicious fibrotic or calcified areas.",
    ],
  },
  {
    name: "Spermatocytic tumor",
    group: "Non–GCNIS-derived germ cell tumor",
    behavior: "Usually indolent; rare sarcomatous transformation",
    site: "Testis; typically older men",
    clinical: [
      "Usually occurs in men older than 50 years, unlike conventional GCNIS-derived germ cell tumors.",
      "Often presents as a slowly enlarging testicular mass.",
    ],
    criteria: [
      "Three characteristic cell populations: small, intermediate, and large cells.",
      "Absence of GCNIS and lack of typical 12p gain.",
      "Rare cases show sarcomatous transformation, which drives aggressive behavior.",
    ],
    histology: [
      "Diffuse sheets of cells with variable size and chromatin; intermediate cells predominate.",
      "Large cells may have filamentous or thread-like chromatin.",
      "Lymphocytes and fibrous septa typical of seminoma are generally absent.",
    ],
    ihc: [
      "SALL4 and OCT2 are commonly positive.",
      "OCT3/4, PLAP, KIT, and SOX17 are typically negative, distinguishing from seminoma/GCNIS.",
      "DMRT1 and MAGE-A4 may support germ cell differentiation.",
    ],
    molecular: [
      "No chromosome 12p gain; recurrent mutations involving FGFR3 and HRAS have been described.",
      "Sarcomatous transformation may acquire additional complex genomic alterations.",
    ],
    differential: [
      [
        "Seminoma",
        "Younger age, uniform clear cells, lymphocyte-rich septa, OCT3/4 and KIT positivity.",
      ],
      [
        "Lymphoma",
        "Older age overlaps; lymphoma is CD45 positive and lacks germ cell marker expression.",
      ],
      [
        "Spermatocytic tumor with sarcoma",
        "Look for an abrupt or distinct high-grade sarcomatous component.",
      ],
    ],
    pitfalls: [
      "Do not misclassify as seminoma based on the word 'spermatocytic'; it is biologically and immunophenotypically distinct.",
      "Metastasis is exceptional in conventional spermatocytic tumor; search for sarcomatous transformation in aggressive cases.",
    ],
  },
  {
    name: "Teratoma, prepubertal type",
    group: "Non–GCNIS-derived germ cell tumor",
    behavior: "Usually benign",
    site: "Testis of infants and young children",
    clinical: [
      "Typically occurs in infants and prepubertal boys.",
      "Usually presents as a painless testicular mass.",
    ],
    criteria: [
      "Mature and/or immature tissues derived from multiple germ layers.",
      "No associated GCNIS.",
      "Usually lacks chromosome 12p gain.",
    ],
    histology: [
      "Mature organoid tissues are common; immature elements may occur.",
      "A mixed teratoma and yolk sac tumor may occur in the prepubertal setting.",
    ],
    ihc: [
      "IHC is directed at specific tissue components; no single marker defines prepubertal teratoma.",
    ],
    molecular: [
      "Usually lacks chromosome 12p gain, supporting distinction from postpubertal-type teratoma.",
    ],
    differential: [
      [
        "Postpubertal-type teratoma",
        "Occurs in adults, is GCNIS-derived, and has malignant potential regardless of mature morphology.",
      ],
      [
        "Yolk sac tumor",
        "Shows primitive reticular/glandular patterns and AFP/glypican-3 expression.",
      ],
      [
        "Mixed prepubertal teratoma and yolk sac tumor",
        "Identify and separately document both components.",
      ],
    ],
    pitfalls: [
      "Age and absence of GCNIS are critical; do not extrapolate the behavior of postpubertal teratoma to this entity.",
    ],
  },
  {
    name: "Yolk sac tumor, prepubertal type",
    group: "Non–GCNIS-derived germ cell tumor",
    behavior: "Malignant",
    site: "Testis of infants and young children",
    clinical: [
      "Typically occurs in infants and young children.",
      "Often presents as a testicular mass with elevated serum AFP.",
    ],
    criteria: [
      "Yolk sac tumor morphology in a prepubertal patient.",
      "No associated GCNIS.",
      "Usually lacks chromosome 12p gain.",
    ],
    histology: [
      "Reticular/microcystic, glandular, papillary, and other yolk sac patterns may occur.",
      "Schiller-Duval bodies and hyaline globules may be present.",
    ],
    ihc: [
      "SALL4, glypican-3, and AFP are commonly positive.",
      "OCT3/4 is negative.",
    ],
    molecular: [
      "Usually lacks chromosome 12p gain, distinguishing it from postpubertal-type yolk sac tumor.",
    ],
    differential: [
      [
        "Postpubertal-type yolk sac tumor",
        "Occurs in adults and is generally GCNIS-associated with chromosome 12p gain.",
      ],
      [
        "Embryonal carcinoma",
        "OCT3/4, SOX2, and CD30 positive; yolk sac tumor is OCT3/4 negative.",
      ],
      [
        "Hepatoblastoma/metastatic tumor",
        "Use clinical context and a panel including germ cell markers.",
      ],
    ],
    pitfalls: [
      "Age, GCNIS status, and chromosome 12p status are important for classification.",
    ],
  },
  {
    name: "Testicular neuroendocrine tumor, prepubertal type",
    group: "Non–GCNIS-derived germ cell tumor",
    behavior: "Usually indolent; behavior depends on context",
    site: "Testis; commonly associated with prepubertal-type teratoma",
    clinical: [
      "Rare; may occur in children or adults as a component of prepubertal-type teratoma.",
      "Often discovered incidentally within a teratoma.",
    ],
    criteria: [
      "Well-differentiated neuroendocrine tumor morphology.",
      "Most cases arise in association with prepubertal-type teratoma.",
      "Usually not associated with GCNIS.",
    ],
    histology: [
      "Organoid nests, trabeculae, or ribbons of uniform neuroendocrine cells.",
      "Salt-and-pepper chromatin and granular cytoplasm.",
    ],
    ihc: [
      "Synaptophysin, chromogranin, and INSM1 are typically positive.",
      "Cytokeratin is usually positive; assess associated teratomatous elements.",
    ],
    molecular: ["No defining molecular test is routinely required."],
    differential: [
      [
        "GCNIS-associated neuroendocrine tumor",
        "Consider teratoma with somatic-type malignancy and evidence of GCNIS-derived germ cell tumor.",
      ],
      [
        "Metastatic neuroendocrine tumor",
        "Clinical history and imaging are essential; a teratoma association supports a primary testicular lesion.",
      ],
      [
        "Leydig cell tumor",
        "Steroidogenic markers such as inhibin and SF1 support Leydig differentiation rather than neuroendocrine lineage.",
      ],
    ],
    pitfalls: [
      "Do not assume every testicular neuroendocrine tumor is a primary conventional NET; search for an associated teratoma.",
    ],
  },
  {
    name: "Mixed teratoma and yolk sac tumor, prepubertal type",
    group: "Non–GCNIS-derived germ cell tumor",
    behavior: "Malignant because of yolk sac tumor component",
    site: "Testis of infants and young children",
    clinical: [
      "Occurs in prepubertal boys.",
      "Presents as a testicular mass; serum AFP may be elevated.",
    ],
    criteria: [
      "Distinct teratoma and yolk sac tumor components.",
      "No associated GCNIS.",
      "Classify and report both components.",
    ],
    histology: [
      "Teratomatous tissues are admixed with yolk sac tumor showing reticular, microcystic, or other patterns.",
      "The yolk sac tumor component may be focal and requires adequate sampling.",
    ],
    ihc: [
      "Yolk sac tumor component is typically SALL4 and glypican-3 positive, with variable AFP.",
      "IHC in teratoma is component-directed.",
    ],
    molecular: [
      "Usually lacks chromosome 12p gain, consistent with non–GCNIS-derived pathogenesis.",
    ],
    differential: [
      [
        "Postpubertal mixed germ cell tumor",
        "Usually GCNIS-associated and often shows chromosome 12p gain.",
      ],
      [
        "Pure prepubertal teratoma",
        "Lacks a yolk sac tumor component and has a different clinical risk profile.",
      ],
    ],
    pitfalls: [
      "Extensively sample to identify a small yolk sac tumor component.",
    ],
  },
  {
    name: "Leydig cell tumor",
    group: "Sex cord-stromal tumor",
    behavior:
      "Usually indolent; malignant behavior is established by metastasis",
    site: "Testis; intratesticular interstitial compartment",
    clinical: [
      "Occurs across a wide age range, with peaks in children and adults.",
      "May present with a testicular mass, gynecomastia, precocious puberty, or hormonal symptoms.",
      "Bilateral lesions require evaluation for an underlying endocrine cause, including congenital adrenal hyperplasia.",
    ],
    criteria: [
      "Well-circumscribed tumor composed of polygonal cells with abundant eosinophilic or granular cytoplasm.",
      "Reinke crystals may be present but are not required.",
      "Assess size, necrosis, vascular invasion, infiltrative margins, mitotic activity, and nuclear atypia for risk stratification.",
    ],
    histology: [
      "Sheets, nests, or trabeculae of steroidogenic cells with round nuclei and prominent nucleoli.",
      "Lipofuscin pigment and Reinke crystals may be seen.",
      "Reticulin fibers typically surround individual tumor cells.",
    ],
    ihc: [
      "SF1, inhibin, calretinin, and Melan-A are commonly positive.",
      "Steroidogenic enzymes such as CYP11A1 may support Leydig differentiation.",
      "Cytokeratin is usually negative or only focal.",
    ],
    molecular: [
      "Recurrent molecular alterations are not required for routine diagnosis.",
      "Selected cases may show alterations in pathways associated with sex cord-stromal tumors; no single defining test is established.",
    ],
    differential: [
      [
        "Sertoli cell tumor",
        "Tubular/cord-like architecture and Sertoli phenotype; typically lacks the classic steroidogenic cytoplasm and Reinke crystals.",
      ],
      [
        "Metastatic adrenal cortical neoplasm",
        "Clinical history and adrenal markers; correlate with bilateral or multifocal disease.",
      ],
      [
        "Adrenogenital syndrome-related nodules",
        "Often bilateral/multifocal and associated with congenital adrenal hyperplasia; biochemical evaluation is essential.",
      ],
    ],
    pitfalls: [
      "No single histologic feature reliably establishes malignancy; metastasis is the definitive criterion.",
      "Use mitotic counts per mm² rather than HPF counts when documenting risk features.",
    ],
  },
  {
    name: "Sertoli cell tumor",
    group: "Sex cord-stromal tumor",
    behavior:
      "Usually indolent; malignant behavior is established by metastasis",
    site: "Testis; intratesticular",
    clinical: [
      "Occurs in adults and less commonly in children.",
      "Usually presents as a painless testicular mass; some cases are associated with endocrine manifestations.",
    ],
    criteria: [
      "Tubules, cords, trabeculae, or nests of Sertoli-type cells.",
      "Cells have pale to eosinophilic cytoplasm and oval nuclei.",
      "Evaluate necrosis, vascular invasion, infiltrative margins, atypia, mitotic activity, and tumor size.",
    ],
    histology: [
      "Tubular or cord-like structures are characteristic, with variable stromal hyalinization.",
      "Reticulin generally surrounds groups or nests of tumor cells rather than individual cells.",
    ],
    ihc: [
      "SF1, inhibin, calretinin, and nuclear WT1 are commonly positive.",
      "Cytokeratin may be positive, often in a variable pattern.",
      "Sertoli tumors are usually negative for germ cell markers such as OCT3/4.",
    ],
    molecular: [
      "Most cases do not require molecular confirmation.",
      "Selected subtypes have syndrome associations or characteristic molecular findings; interpret in subtype context.",
    ],
    differential: [
      [
        "Leydig cell tumor",
        "More diffuse steroidogenic cytoplasm, Reinke crystals, and Leydig immunophenotype.",
      ],
      [
        "Granulosa cell tumor",
        "Grooved nuclei and Call-Exner bodies in adult type; juvenile type has distinct follicular architecture.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Epithelial markers and clinical correlation; Sertoli tumor typically expresses sex cord markers.",
      ],
    ],
    pitfalls: [
      "Sertoliform cystadenoma is classified within the Sertoli cell tumor spectrum when no convincing distinction is demonstrated.",
      "Do not equate bland cytology with zero metastatic risk.",
    ],
  },
  {
    name: "Large cell calcifying Sertoli cell tumor",
    group: "Sex cord-stromal tumor",
    behavior:
      "Variable; may be associated with Carney complex or other syndromes",
    site: "Testis; often multifocal or bilateral in syndromic cases",
    clinical: [
      "Occurs in children and young adults; may be associated with Carney complex or Peutz-Jeghers syndrome.",
      "May be multifocal, bilateral, or hormonally active.",
    ],
    criteria: [
      "Large Sertoli cells with abundant eosinophilic cytoplasm.",
      "Prominent intratumoral calcification, often extensive.",
      "Assess for multifocality, bilaterality, and syndromic context.",
    ],
    histology: [
      "Large polygonal cells form nests, cords, or tubules around calcified material.",
      "Calcification may be psammomatous or coarse.",
    ],
    ihc: [
      "Sex cord markers including SF1, inhibin, and calretinin are commonly positive.",
      "S100 and other markers may be variable.",
    ],
    molecular: [
      "Consider germline evaluation in the appropriate syndromic setting, including PRKAR1A-associated Carney complex and STK11-associated Peutz-Jeghers syndrome.",
    ],
    differential: [
      [
        "Leydig cell tumor with calcification",
        "Leydig morphology and steroidogenic phenotype; calcification is not typically as defining.",
      ],
      [
        "Sertoli cell tumor, NOS",
        "Lacks the characteristic large-cell and calcifying morphology.",
      ],
      [
        "Metastatic or paratesticular calcifying lesion",
        "Correlate with site and sex cord immunophenotype.",
      ],
    ],
    pitfalls: [
      "Recognize syndromic associations and evaluate for bilateral/multifocal disease.",
    ],
  },
  {
    name: "Adult granulosa cell tumor",
    group: "Sex cord-stromal tumor",
    behavior: "Potentially malignant",
    site: "Testis; adult men",
    clinical: [
      "Rare testicular tumor, usually in middle-aged or older men.",
      "Presents as an intratesticular mass.",
    ],
    criteria: [
      "Microfollicular, trabecular, insular, or diffuse growth of granulosa cells.",
      "Grooved nuclei and Call-Exner bodies may be present.",
      "Assess size, necrosis, vascular invasion, infiltrative growth, mitotic activity, and atypia.",
    ],
    histology: [
      "Cells have scant to moderate cytoplasm and characteristic longitudinal nuclear grooves.",
      "Call-Exner bodies may be seen but are not required.",
    ],
    ihc: [
      "Inhibin, calretinin, SF1, and FOXL2 are commonly positive.",
      "Cytokeratin may be variable.",
    ],
    molecular: [
      "FOXL2 mutation status may be useful in selected cases, but ovarian-type FOXL2 mutation should not be assumed in every testicular tumor.",
    ],
    differential: [
      [
        "Sertoli cell tumor",
        "Tubular/cord-like architecture and Sertoli morphology; granulosa tumor shows grooved nuclei and possible Call-Exner bodies.",
      ],
      [
        "Leydig cell tumor",
        "Steroidogenic cytoplasm and Reinke crystals; different marker profile.",
      ],
      [
        "Metastatic granulosa cell tumor",
        "Clinical history and comparison with any prior ovarian or other primary tumor.",
      ],
    ],
    pitfalls: [
      "Histologic features associated with aggressive behavior are imperfect predictors; metastasis remains definitive.",
    ],
  },
  {
    name: "Juvenile granulosa cell tumor",
    group: "Sex cord-stromal tumor",
    behavior: "Usually benign",
    site: "Testis of infants and young children",
    clinical: [
      "Predominantly occurs in infants, often in the first year of life.",
      "May present as a testicular mass or hydrocele.",
    ],
    criteria: [
      "Macrofollicular or irregular follicular structures filled with eosinophilic or basophilic material.",
      "Granulosa cells show round nuclei without the prominent grooves typical of adult granulosa cell tumor.",
    ],
    histology: [
      "Follicles vary markedly in size and shape and may be cystically dilated.",
      "Solid and trabecular areas may be present.",
    ],
    ihc: [
      "Inhibin, calretinin, and SF1 support sex cord differentiation.",
      "Cytokeratin may be variable.",
    ],
    molecular: ["No defining molecular test is routinely required."],
    differential: [
      [
        "Yolk sac tumor",
        "Reticular/microcystic architecture and glypican-3/SALL4 expression; juvenile granulosa tumor shows sex cord markers.",
      ],
      [
        "Adult granulosa cell tumor",
        "Nuclear grooves and Call-Exner bodies are more characteristic of adult type.",
      ],
      ["Sertoli cell tumor", "More uniform tubular architecture."],
    ],
    pitfalls: [
      "Age is a major diagnostic clue; avoid misclassifying as yolk sac tumor based on a cystic/follicular pattern alone.",
    ],
  },
  {
    name: "Fibroma-thecoma group",
    group: "Sex cord-stromal tumor",
    behavior: "Usually benign",
    site: "Testis; rare",
    clinical: [
      "Rare tumors occurring across a broad age range.",
      "Usually present as a well-circumscribed testicular mass.",
    ],
    criteria: [
      "Spindle-cell fibroma or lipid-rich thecomatous differentiation.",
      "Reticulin stain helps distinguish thecoma/fibroma patterns from other sex cord tumors.",
    ],
    histology: [
      "Fibroma shows bland spindle cells in collagenous stroma.",
      "Thecoma shows cells with pale or lipid-rich cytoplasm.",
      "Reticulin may surround individual cells in this family.",
    ],
    ihc: [
      "SF1 and inhibin may support sex cord-stromal differentiation.",
      "SMA and desmin may be variable depending on stromal differentiation.",
    ],
    molecular: ["No routine defining molecular test."],
    differential: [
      [
        "Sex cord stromal tumor, NOS",
        "Reticulin surrounds groups of cells rather than individual tumor cells in many NOS tumors.",
      ],
      [
        "Myoid gonadal stromal tumor",
        "Coexpression of actin and S100 with spindle morphology; SOX9 negativity and lack of hyaline plaques support myoid tumor.",
      ],
      [
        "Leiomyoma",
        "Broad fascicles, cigar-shaped nuclei, and perinuclear vacuoles with smooth muscle marker expression.",
      ],
    ],
    pitfalls: [
      "Use reticulin architecture together with morphology and IHC; no single marker is specific.",
    ],
  },
  {
    name: "Mixed sex cord-stromal tumor",
    group: "Sex cord-stromal tumor",
    behavior: "Variable; malignant cases occur",
    site: "Testis; any age",
    clinical: [
      "Rare; may occur in children or adults.",
      "Presents as an intratesticular mass.",
    ],
    criteria: [
      "Two or more recognizable sex cord-stromal components, such as Sertoli, Leydig, or granulosa cell elements.",
      "The components should be morphologically distinct and identifiable.",
    ],
    histology: [
      "Admixture of recognizable sex cord-stromal patterns.",
      "Reticulin and architecture may help identify individual components.",
    ],
    ihc: [
      "Use a panel including SF1, inhibin, calretinin, and lineage-directed markers.",
      "IHC supports sex cord-stromal differentiation but may not resolve every component.",
    ],
    molecular: ["No defining molecular test is routinely required."],
    differential: [
      [
        "Sex cord-stromal tumor, NOS",
        "NOS lacks recognizable specific differentiation; mixed tumor has two or more identifiable components.",
      ],
      [
        "Gonadoblastoma",
        "Germ cells are admixed with sex cord elements in characteristic nests, often in a dysgenetic gonad.",
      ],
      [
        "Mixed germ cell/sex cord tumor",
        "Identify a genuine germ cell component and assess for gonadoblastoma-like architecture.",
      ],
    ],
    pitfalls: [
      "Do not use NOS when distinct Sertoli, Leydig, or granulosa components are recognizable.",
    ],
  },
  {
    name: "Signet ring stromal tumor",
    group: "Sex cord-stromal tumor",
    behavior: "Reported cases have behaved benignly",
    site: "Testis; adults",
    clinical: [
      "Reported in adults, approximately 29–69 years.",
      "Usually an asymptomatic intratesticular mass.",
    ],
    criteria: [
      "Solid, well-circumscribed tumor composed predominantly of signet-ring-like cells.",
      "Cytoplasmic vacuoles are mucin-negative.",
      "Vimentin-positive and cytokeratin/EMA-negative profile supports the diagnosis.",
    ],
    histology: [
      "Thick fibrous capsule and thin septa divide the tumor into lobules.",
      "Tumor cells form nests and trabeculae in loose edematous stroma.",
      "Large cytoplasmic vacuoles displace eccentric nuclei; mucin is absent.",
    ],
    ihc: [
      "Vimentin, nuclear β-catenin, cyclin D1, S100, CD10, NSE, and synaptophysin are reported positive.",
      "Inhibin, calretinin, actin, desmin, and Melan-A are typically negative.",
      "Cytokeratins and EMA are negative, helping exclude metastatic signet-ring carcinoma.",
    ],
    molecular: ["CTNNB1 mutations have been identified."],
    differential: [
      [
        "Metastatic signet-ring cell carcinoma",
        "Usually cytokeratin/EMA positive and mucin-producing; correlate with gastrointestinal history and imaging.",
      ],
      [
        "Sertoli cell tumor",
        "Usually expresses sex cord markers such as inhibin/SF1; signet-ring stromal tumor is typically inhibin negative.",
      ],
      [
        "Solid pseudopapillary neoplasm metastasis",
        "Pancreatic primary history and epithelial/β-catenin profile; testicular stromal tumor is mucin-negative and keratin-negative.",
      ],
    ],
    pitfalls: [
      "Do not diagnose metastatic signet-ring carcinoma from vacuolated cells alone; demonstrate mucin and epithelial phenotype.",
    ],
  },
  {
    name: "Myoid gonadal stromal tumor",
    group: "Sex cord-stromal tumor",
    behavior: "Benign in reported cases",
    site: "Testis; mainly adults",
    clinical: [
      "Usually occurs in adults, with a mean age around 40 years; rare pediatric cases are reported.",
      "Presents as a small intratesticular mass.",
    ],
    criteria: [
      "Pure spindle-cell tumor lacking sex cord differentiation.",
      "Coexpression of actin and S100 supports the diagnosis.",
      "No or only mild atypia; lymphovascular invasion and necrosis are absent in reported cases.",
    ],
    histology: [
      "Short fascicles of fusiform cells with scant to moderate lightly eosinophilic cytoplasm.",
      "Residual seminiferous tubules may be surrounded, particularly at the periphery.",
      "Broad fascicles, cigar-shaped nuclei, and perinuclear vacuoles of leiomyoma are absent.",
    ],
    ihc: [
      "Actin, S100, FOXL2, SF1, vimentin, and desmin are reported positive.",
      "Inhibin may be focal.",
      "SOX9 is negative; fibroma-like hyaline collagen plaques are absent.",
    ],
    molecular: ["No diagnostic molecular alteration is established."],
    differential: [
      [
        "Leiomyoma",
        "Broad intersecting fascicles, cigar-shaped nuclei, and perinuclear vacuoles; usually lacks S100/FOXL2 coexpression.",
      ],
      [
        "Fibroma",
        "Collagen bundles and hyaline plaques; SOX9 may be positive.",
      ],
      [
        "Sertoli cell tumor",
        "Shows recognizable sex cord differentiation and a different architectural pattern.",
      ],
    ],
    pitfalls: [
      "The essential pattern is a pure spindle-cell neoplasm with both actin and S100 positivity.",
    ],
  },
  {
    name: "Sex cord-stromal tumor, NOS",
    group: "Sex cord-stromal tumor",
    behavior: "Usually benign in children; malignant cases occur in adults",
    site: "Testis; children and adults",
    clinical: [
      "Approximately half occur in children; the remainder occur in men of any age.",
      "Usually presents as a painless intratesticular mass.",
    ],
    criteria: [
      "Tumor with incomplete or undifferentiated sex cord-stromal elements.",
      "Specific Sertoli, Leydig, granulosa, or other defined tumors must be excluded.",
      "Assess invasive margins, vascular invasion, atypia, mitotic activity, necrosis, and size.",
    ],
    histology: [
      "Variable epithelioid, ovoid, or spindle cells in nests, compact sheets, or fascicles.",
      "Reticulin fibers typically surround aggregates of cells rather than individual cells.",
      "Marked pleomorphism is uncommon in clinically benign tumors.",
    ],
    ihc: [
      "SF1, desmin, vimentin, actin, S100, CD99, FOXL2, inhibin, and calretinin may be positive.",
      "Cytokeratins are generally negative in neoplastic cells, with rare focal staining.",
      "IHC supports lineage but does not reliably distinguish NOS from other sex cord-stromal tumors.",
    ],
    molecular: ["No routinely useful defining molecular test is established."],
    differential: [
      [
        "Fibroma-thecoma group",
        "Reticulin may surround individual cells; correlate with collagenous or lipid-rich morphology.",
      ],
      [
        "Sertoli/Leydig/granulosa cell tumor",
        "A specific line of differentiation should be recognizable morphologically and supported by IHC.",
      ],
      [
        "Myoid gonadal stromal tumor",
        "Pure spindle-cell morphology with actin and S100 coexpression.",
      ],
    ],
    pitfalls: [
      "Do not use NOS until specific sex cord-stromal entities have been excluded.",
      "Metastasis is the definitive criterion of malignancy; histologic risk features are not perfectly predictive.",
    ],
  },
];

const germHistology = [
  [
    "GCNIS",
    "Single layer of atypical gonocyte-like cells in the spermatogonial niche; string-of-beads pattern.",
  ],
  [
    "Gonadoblastoma",
    "Nests of germ cells admixed with sex cord cells, often with hyaline material and calcification.",
  ],
  [
    "Seminoma",
    "Uniform clear cells in nests/lobules with fibrous septa and lymphocytes.",
  ],
  [
    "Embryonal carcinoma",
    "Pleomorphic primitive epithelial cells; solid, glandular, papillary, or alveolar growth.",
  ],
  [
    "Postpubertal yolk sac tumor",
    "Reticular/microcystic and variable patterns; Schiller-Duval bodies and hyaline globules may occur.",
  ],
  [
    "Choriocarcinoma",
    "Biphasic cytotrophoblast and syncytiotrophoblast with hemorrhage and necrosis.",
  ],
  [
    "Placental site trophoblastic tumor",
    "Intermediate trophoblast-like cells in infiltrative cords/sheets.",
  ],
  [
    "Epithelioid trophoblastic tumor",
    "Nodular epithelioid trophoblastic cells with hyaline-like material.",
  ],
  ["Cystic trophoblastic tumor", "Cystic spaces lined by trophoblastic cells."],
  [
    "Postpubertal teratoma",
    "Mature and/or immature somatic tissues from multiple germ layers; search for somatic-type malignancy.",
  ],
  [
    "Teratoma with somatic-type malignancy",
    "Teratoma with a distinct carcinoma, sarcoma, or embryonic-type neuroectodermal malignant component.",
  ],
  [
    "Mixed germ cell tumor",
    "Two or more distinct germ cell tumor components; quantify each component.",
  ],
  [
    "Regressed germ cell tumor",
    "Hyalinized scar, tubular atrophy, hemosiderin, calcification, and/or residual GCNIS.",
  ],
  [
    "Spermatocytic tumor",
    "Three cell populations of different sizes; diffuse growth, usually without lymphocyte-rich septa.",
  ],
  [
    "Prepubertal teratoma",
    "Mature and/or immature organoid tissues in a young child; no GCNIS.",
  ],
  [
    "Prepubertal yolk sac tumor",
    "Yolk sac tumor patterns in a child; no GCNIS.",
  ],
  [
    "Prepubertal-type testicular NET",
    "Organoid nests, trabeculae, or ribbons; often associated with prepubertal teratoma.",
  ],
  [
    "Mixed prepubertal teratoma/YST",
    "Distinct teratoma and yolk sac tumor components in a prepubertal patient.",
  ],
];
const germIHC = [
  [
    "GCNIS",
    "OCT3/4+, SALL4+, PLAP+, SOX17+, AP-2γ+, KIT+; variable intensity.",
  ],
  [
    "Gonadoblastoma",
    "Germ cells: OCT3/4+/SALL4+; sex cord cells: inhibin+/calretinin+/SF1+.",
  ],
  ["Seminoma", "OCT3/4+, SALL4+, SOX17+, PLAP+, KIT+, D2-40+; CD30−, SOX2−."],
  [
    "Embryonal carcinoma",
    "OCT3/4+, SALL4+, SOX2+, CD30+, cytokeratin+; SOX17−, KIT usually−.",
  ],
  [
    "Postpubertal yolk sac tumor",
    "SALL4+, glypican-3+, AFP often focal+, cytokeratin+; OCT3/4−.",
  ],
  [
    "Choriocarcinoma",
    "β-hCG highlights syncytiotrophoblasts; cytokeratin and GATA3 may be positive.",
  ],
  [
    "Placental site trophoblastic tumor",
    "Cytokeratin+, GATA3+, hPL may be+, β-hCG variable.",
  ],
  [
    "Epithelioid trophoblastic tumor",
    "Cytokeratin+, GATA3+, p63 often+; β-hCG usually limited/focal.",
  ],
  [
    "Cystic trophoblastic tumor",
    "Cytokeratin+; β-hCG highlights syncytiotrophoblastic differentiation.",
  ],
  [
    "Teratoma / somatic-type malignancy",
    "No single profile; use lineage-directed markers for each differentiated or malignant component.",
  ],
  [
    "Mixed germ cell tumor",
    "Component-directed: seminoma OCT3/4/SOX17; embryonal carcinoma OCT3/4/SOX2/CD30; YST glypican-3/AFP.",
  ],
  [
    "Regressed germ cell tumor",
    "OCT3/4/PLAP may identify residual GCNIS; no IHC proves regression by itself.",
  ],
  ["Spermatocytic tumor", "SALL4+, OCT2+; OCT3/4−, PLAP−, KIT−, SOX17−."],
  [
    "Prepubertal teratoma",
    "Component-directed; no single defining IHC profile.",
  ],
  [
    "Prepubertal yolk sac tumor",
    "SALL4+, glypican-3+, AFP variable/focal+; OCT3/4−.",
  ],
  [
    "Prepubertal-type NET",
    "Synaptophysin+, chromogranin+, INSM1+; cytokeratin usually+.",
  ],
  [
    "Mixed prepubertal teratoma/YST",
    "Yolk sac component: SALL4+, glypican-3+, AFP variable; teratoma component is lineage-directed.",
  ],
];
const sexHistology = [
  [
    "Leydig cell tumor",
    "Sheets/nests of polygonal steroidogenic cells; eosinophilic or granular cytoplasm; Reinke crystals may occur.",
  ],
  [
    "Sertoli cell tumor",
    "Tubules, cords, trabeculae, or nests of Sertoli-type cells; reticulin often surrounds cell groups.",
  ],
  [
    "Large cell calcifying Sertoli cell tumor",
    "Large eosinophilic Sertoli cells with prominent intratumoral calcification; may be multifocal/bilateral.",
  ],
  [
    "Adult granulosa cell tumor",
    "Microfollicular, trabecular, insular, or diffuse growth; grooved nuclei and Call-Exner bodies may occur.",
  ],
  [
    "Juvenile granulosa cell tumor",
    "Irregular, variably sized macrofollicles; round nuclei without prominent grooves.",
  ],
  [
    "Fibroma-thecoma group",
    "Bland spindle-cell fibroma or lipid-rich thecomatous cells; reticulin may surround individual cells.",
  ],
  [
    "Mixed sex cord-stromal tumor",
    "Two or more recognizable Sertoli, Leydig, or granulosa cell components.",
  ],
  [
    "Signet ring stromal tumor",
    "Signet-ring-like vacuolated cells in nests/trabeculae, loose edematous stroma, and fibrous capsule; mucin negative.",
  ],
  [
    "Myoid gonadal stromal tumor",
    "Pure spindle-cell tumor in short fascicles; may surround residual seminiferous tubules.",
  ],
  [
    "Sex cord-stromal tumor, NOS",
    "Undifferentiated epithelioid, ovoid, or spindle cells in nests, sheets, or fascicles; reticulin surrounds aggregates.",
  ],
];
const sexIHC = [
  [
    "Leydig cell tumor",
    "SF1+, inhibin+, calretinin+, Melan-A+; steroidogenic enzymes may support differentiation.",
  ],
  [
    "Sertoli cell tumor",
    "SF1+, inhibin+, calretinin+, WT1+; cytokeratin variable; germ cell markers usually−.",
  ],
  [
    "Large cell calcifying Sertoli cell tumor",
    "SF1+, inhibin+, calretinin+; other markers variable.",
  ],
  [
    "Adult granulosa cell tumor",
    "Inhibin+, calretinin+, SF1+, FOXL2+; cytokeratin variable.",
  ],
  [
    "Juvenile granulosa cell tumor",
    "Inhibin+, calretinin+, SF1+; cytokeratin variable.",
  ],
  [
    "Fibroma-thecoma group",
    "SF1 and inhibin may support sex cord-stromal differentiation; SMA/desmin variable.",
  ],
  [
    "Mixed sex cord-stromal tumor",
    "Use SF1, inhibin, calretinin and component-directed markers; no single profile.",
  ],
  [
    "Signet ring stromal tumor",
    "Vimentin+, nuclear β-catenin+, cyclin D1+, S100+, CD10+, synaptophysin+; inhibin−, calretinin−, cytokeratin−, EMA−.",
  ],
  [
    "Myoid gonadal stromal tumor",
    "Actin+, S100+, FOXL2+, SF1+, vimentin+, desmin+; inhibin focal; SOX9−.",
  ],
  [
    "Sex cord-stromal tumor, NOS",
    "SF1, desmin, vimentin, actin, S100, CD99, FOXL2, inhibin, and calretinin may be positive; keratins generally negative.",
  ],
];

const cats = [
  "All",
  "Germ cell precursor",
  "GCNIS-derived germ cell tumor",
  "GCNIS-derived trophoblastic tumor",
  "Non–GCNIS-derived germ cell tumor",
  "Sex cord-stromal tumor",
];
function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h3 className="mb-3 font-bold text-slate-900">{title}</h3>
        {children}
      </div>
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          {v}
        </li>
      ))}
    </ul>
  );
}
function Matrix({
  title,
  rows,
  first = "Entity",
  second = "Key features",
}: {
  title: string;
  rows: string[][];
  first?: string;
  second?: string;
}) {
  return (
    <Panel title={title}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th className="py-2 pr-4">{first}</th>
              <th className="py-2">{second}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="w-1/4 py-3 pr-4 align-top font-semibold text-slate-900">
                  {r[0]}
                </td>
                <td className="py-3 leading-6 text-slate-700">{r[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
export default function TestisTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Seminoma",
    "Embryonal carcinoma",
    "Leydig cell tumor",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            x.site,
            ...x.clinical,
            ...x.criteria,
            ...x.histology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Genitourinary / Testis Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Testis Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing essential
                criteria, immunophenotypic patterns, and practical differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify germ cell tumors by lineage and pathogenesis; classify
                sex cord-stromal tumors by recognizable differentiation.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Age, GCNIS status, chromosome 12p, serum markers, morphology,
                and targeted IHC must be integrated.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: start with age, lineage, and GCNIS status">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "1. Clinical setting",
                "Age, laterality, endocrine symptoms, serum AFP/β-hCG/LDH, and imaging.",
              ],
              [
                "2. Germ cell or sex cord-stromal",
                "Use architecture and cytology; select lineage-directed IHC rather than a broad indiscriminate panel.",
              ],
              [
                "3. GCNIS-related or not",
                "GCNIS and chromosome 12p gain support the postpubertal GCNIS-derived pathway.",
              ],
              [
                "4. Sample and classify",
                "Extensively sample heterogeneous tumors; identify and quantify every distinct component.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Germ cell tumor classification">
            <Bullets
              items={[
                "GCNIS-derived tumors: seminoma and most postpubertal nonseminomatous germ cell tumors.",
                "Non–GCNIS-derived tumors: prepubertal-type teratoma, prepubertal-type yolk sac tumor, spermatocytic tumor, and prepubertal-type testicular neuroendocrine tumor.",
                "Any seminoma mixed with a nonseminomatous component is classified and managed as a nonseminomatous germ cell tumor.",
                "Postpubertal-type teratoma has malignant potential even when all sampled tissues are mature.",
              ]}
            />
          </Panel>
          <Panel title="Sex cord-stromal tumor behavior">
            <Bullets
              items={[
                "Most sex cord-stromal tumors are indolent, but metastasis may occur in tumors with deceptively bland cytology.",
                "Metastasis is the definitive criterion of malignancy; size, necrosis, atypia, vascular invasion, infiltrative margins, and mitotic activity are risk features.",
                "For mitotic assessment, report mitoses per mm² rather than relying on HPF counts.",
                "Bilateral Leydig cell–type lesions warrant biochemical evaluation for congenital adrenal hyperplasia and other endocrine causes.",
              ]}
            />
          </Panel>
        </div>
        <Matrix
          title="Germ cell tumors: histologic features"
          rows={germHistology}
        />
        <Matrix
          title="Germ cell tumors: immunohistochemical profiles"
          rows={germIHC}
          second="Typical profile / diagnostic use"
        />
        <Matrix
          title="Sex cord-stromal tumors: histologic features"
          rows={sexHistology}
        />
        <Matrix
          title="Sex cord-stromal tumors: immunohistochemical profiles"
          rows={sexIHC}
          second="Typical profile / diagnostic use"
        />
        <Panel title="High-yield molecular pathology">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "GCNIS-derived invasive germ cell tumors",
                    "Gain of chromosome 12p, commonly isochromosome 12p; generally absent in GCNIS itself.",
                  ],
                  [
                    "Seminoma",
                    "KIT, KRAS, NRAS, and PIK3CA mutations occur in subsets; no single mutation is diagnostic.",
                  ],
                  [
                    "Spermatocytic tumor",
                    "FGFR3 and HRAS mutations have been reported; chromosome 12p gain is typically absent.",
                  ],
                  [
                    "Signet ring stromal tumor",
                    "CTNNB1 mutations have been identified.",
                  ],
                  [
                    "Large cell calcifying Sertoli cell tumor",
                    "Consider germline PRKAR1A or STK11 testing when clinical features suggest Carney complex or Peutz-Jeghers syndrome.",
                  ],
                  [
                    "Teratoma with somatic-type malignancy",
                    "12p gain in the malignant component can support germ cell tumor origin; additional alterations may reflect the somatic malignancy.",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="w-1/3 py-3 pr-4 align-top font-semibold">
                      {r[0]}
                    </td>
                    <td className="py-3 leading-6 text-slate-700">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile, diagnostic criteria, and differential
                diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by tumor, morphology, site, immunomarker, or molecular
                alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. OCT3/4, CD30, 12p, Reinke crystals..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.histology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching entity.
              </div>
            )}
          </div>
        </section>
        <Panel title="Reporting and sampling checklist">
          <Bullets
            items={[
              "Document tumor laterality, size, focality, tunica albuginea, rete testis, epididymis, hilar soft tissue, spermatic cord, and lymphovascular invasion.",
              "Sample heterogeneous, hemorrhagic, necrotic, cystic, and solid areas to identify minor germ cell components and somatic-type malignancy.",
              "Report each germ cell tumor component and its estimated percentage; identify any seminoma/nonseminoma mixture.",
              "Correlate post-orchiectomy serum AFP, β-hCG, and LDH with histology; elevated AFP is incompatible with pure seminoma.",
              "For sex cord-stromal tumors, document size, necrosis, mitotic count per mm², atypia, vascular invasion, and infiltrative margins.",
              "For bilateral Leydig cell–type lesions, recommend clinical and biochemical correlation when appropriate.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Diagnostic note:</b> Immunohistochemical
          profiles are typical patterns, not absolute rules. Interpret stains
          with morphology, age, clinical findings, serum markers, and adequate
          sampling. Risk features in sex cord-stromal tumors are not fully
          reliable predictors of behavior.
        </footer>
      </div>
    </main>
  );
}
