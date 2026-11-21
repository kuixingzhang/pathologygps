"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  family: string;
  summary: string;
  histology: string[];
  ihc: string[];
  differential: string[];
  molecular?: string[];
  pitfall?: string;
};

const entities: Entity[] = [
  {
    name: "Leiomyoma (including morphologic patterns)",
    family: "Smooth muscle tumors",
    summary:
      "Benign smooth muscle neoplasm. Cellular, mitotically active, hydropic, ischemic, bizarre-nuclei, lipoleiomyoma, epithelioid, myxoid, dissecting, and diffuse leiomyomatosis are patterns—not separate biological entities in this classification.",
    histology: [
      "Usual pattern: well-demarcated, intersecting fascicles of spindle cells with indistinct borders, eosinophilic fibrillary cytoplasm, cigar-shaped nuclei, small nucleoli, and rare mitoses.",
      "No tumor cell necrosis. Ischemic/infarct-type necrosis may occur: a band of granulation tissue, with or without hemorrhage or fibrosis, separates viable from nonviable tumor; nonviable cells and vessels appear devitalized/mummified.",
      "Cellular pattern: increased cellularity compared with myometrium; diffuse central or fascicular peripheral growth, often thick-walled vessels and cleft-like spaces; scant cytoplasm, no atypia, rare mitoses; border may merge with myometrium.",
      "Mitotically active pattern: increased mitoses (up to 8.4/mm² in the source) without cytologic atypia or tumor cell necrosis; associated with reproductive age, secretory endometrium, pregnancy, progestogens, or tamoxifen.",
      "Hydropic pattern: zonal watery edema separates cells into delicate cords/nests, sometimes perinodular around thick-walled vessels.",
      "Ischemic/apoplectic pattern: stellate hemorrhagic zones with a hypercellular rim and reactive degenerative cells; away from these zones, smooth muscle cells lack atypia.",
      "Bizarre nuclei pattern: focal, multifocal, or diffuse bizarre mono-/multinucleated cells, smudged chromatin, pseudoinclusions, or prominent nucleoli; mitotic count typically <2.1/mm²; karyorrhectic nuclei can mimic atypical mitoses.",
      "Epithelioid pattern: round/polygonal cells with eosinophilic granular or clear cytoplasm in sheets, cords, trabeculae, or nests; no tumor cell necrosis and usually <0.8 mitoses/mm² for benign epithelioid leiomyoma.",
      "Myxoid pattern: well-circumscribed, hypocellular tumor with widely separated bland cells in Alcian blue–positive myxoid matrix; no atypia, mitotic activity, or tumor cell necrosis. Diagnosis is one of exclusion.",
      "Other patterns: lipoleiomyoma contains mature adipocytes; dissecting leiomyoma has bland smooth muscle nodules dissecting myometrium, often with hydropic change; diffuse leiomyomatosis consists of innumerable poorly circumscribed bland nodules diffusely involving myometrium.",
    ],
    ihc: [
      "Smooth muscle differentiation: desmin, h-caldesmon, SMA, MSA, calponin, transgelin, and SMMHC.",
      "ER, PR, and nuclear WT1 are commonly positive. CD10 may be positive, particularly in cellular leiomyoma; it is not by itself evidence of endometrial stromal differentiation.",
      "FH-deficient pattern: 2SC positive; FH may be completely lost, but retained FH does not exclude missense mutation. 2SC is more sensitive in the supplied source.",
      "p16 and abnormal p53 are uncommon in usual leiomyoma but may occur in leiomyoma with bizarre nuclei or FH-deficient tumors. Increased p16 may occur in hypercellular areas of apoplectic leiomyoma.",
      "ALK should be negative; ALK positivity should prompt consideration of inflammatory myofibroblastic tumor.",
    ],
    differential: [
      "Leiomyosarcoma: assess the combination of tumor cell necrosis, moderate-to-marked atypia, and mitotic activity using subtype-specific thresholds; benign leiomyoma has no tumor cell necrosis.",
      "STUMP: one or more worrisome features exceed the benign range but do not meet criteria for leiomyosarcoma; diagnosis of exclusion.",
      "Endometrial stromal tumor: delicate arteriolar vasculature and stromal-type cells; CD10/IFITM1 and hormone receptor profile may support ESS, while h-caldesmon/desmin support smooth muscle differentiation. Some overlap exists.",
      "PEComa: clear-to-eosinophilic epithelioid/spindle cells with melanocytic marker expression (HMB45/PNL2, often cathepsin K) in addition to smooth muscle markers.",
      "Inflammatory myofibroblastic tumor: consider especially in myxoid lesions; ALK testing is useful.",
    ],
    molecular: [
      "Common leiomyoma alterations include MED12 mutation, HMGA2 aberration, RAD51B alteration, or biallelic FH loss; these are generally mutually exclusive patterns.",
      "FH-deficient morphology may include staghorn vessels, alveolar edema, scattered bizarre nuclei, chain-like ovoid nuclei, rhabdoid inclusions, and prominent eosinophilic nucleoli with perinucleolar halos. Correlate with possible HLRCC syndrome; morphology/IHC cannot distinguish germline from somatic FH alteration.",
    ],
    pitfall:
      "Do not call tumor cell necrosis based on infarct-type/ischemic necrosis. Do not use mitotic count alone to diagnose leiomyosarcoma without considering atypia, necrosis, and subtype.",
  },
  {
    name: "Smooth muscle tumor of uncertain malignant potential (STUMP)",
    family: "Smooth muscle tumors",
    summary:
      "A smooth muscle neoplasm exceeding the criteria for leiomyoma but insufficient for leiomyosarcoma. It is a diagnosis of exclusion.",
    histology: [
      "The category is heterogeneous. A tumor may qualify when one key leiomyosarcoma feature is present—diffuse moderate/severe atypia, tumor cell necrosis, or elevated mitotic activity—but the complete criteria for leiomyosarcoma are not met.",
      "Spindle-cell examples may show focal/multifocal/diffuse atypia with 2–4 mitoses/mm² and no tumor cell necrosis.",
      "A bland-appearing smooth muscle tumor with unequivocal tumor cell necrosis, or necrosis of uncertain type, may be classified as STUMP after excluding treatment- or pregnancy-related ischemic change.",
      "A tumor without atypia or tumor cell necrosis but with ≥8.4 mitoses/mm² (≥20 mitoses/10 HPF using the source field diameter) falls into the STUMP framework.",
      "Atypical mitoses, vascular intrusion, and irregular/infiltrative margins may be present but are not independent recurrence predictors in the cited data.",
      "Epithelioid and myxoid STUMP are exceedingly rare; exclude inflammatory myofibroblastic tumor, PEComa, and other mimics.",
    ],
    ihc: [
      "No defining immunophenotype or validated diagnostic IHC algorithm.",
      "p16, p53, Ki-67, PR, ATRX, and DAXX have been explored for risk stratification, but protocols and cutoffs are not standardized.",
      "Abnormal p53 and/or diffuse p16 and loss of ATRX/DAXX may identify higher-risk subsets in published studies; these findings should not independently establish STUMP or dictate management.",
    ],
    differential: [
      "Leiomyoma with a recognized pattern: exclude bizarre nuclei, FH deficiency, mitotically active, ischemic/apoplectic, cellular, epithelioid, and myxoid patterns before using STUMP.",
      "Leiomyosarcoma: apply the specific criteria for spindle, epithelioid, or myxoid subtype; if criteria are met, do not downgrade to STUMP.",
      "Treatment-related necrosis: correlate with pregnancy, progestins, GnRH agonists, tranexamic acid, or uterine artery embolization.",
      "PEComa and inflammatory myofibroblastic tumor: especially important in epithelioid or myxoid tumors.",
    ],
    pitfall:
      "The source recommends a mitotic threshold of ≥8.4/mm² (≥20/10 HPF) for the high-mitotic-count subset, replacing the older 6.31/mm² threshold. The criteria support, rather than replace, integrated judgment.",
  },
  {
    name: "Leiomyosarcoma (spindle cell / conventional)",
    family: "Smooth muscle tumors",
    summary:
      "Malignant smooth muscle neoplasm. For conventional spindle-cell uterine LMS, at least two of three criteria are required.",
    histology: [
      "Long intersecting and/or compact, disorganized cellular fascicles of spindle cells with eosinophilic fibrillary cytoplasm.",
      "Moderate-to-marked nuclear atypia is common; multinucleated tumor cells or osteoclast-like giant cells may occur. Some tumors are deceptively bland at low power.",
      "Mitotic activity is usually high; atypical mitoses are common. Tumor cell necrosis, infiltrative growth, and vascular invasion are common.",
      "Diagnostic threshold: at least two of (1) tumor cell necrosis, (2) moderate-to-marked nuclear atypia, and (3) ≥4 mitoses/mm² (≥10 mitoses/10 HPF using the source field diameter).",
      "Tumor cell necrosis shows an abrupt transition from viable to necrotic tumor without intervening hyalinization or granulation tissue.",
    ],
    ihc: [
      "Desmin, h-caldesmon, and SMA are usually positive, but may be weak or patchy in poorly differentiated, myxoid, or epithelioid areas.",
      "CD10, EMA, and broad-spectrum cytokeratins may be positive; EMA/keratin expression is frequent in epithelioid tumors.",
      "ER and PR are frequently positive. Abnormal p53, RB1, ATRX, and PTEN pathways are common molecularly; selected alterations may be reflected by IHC.",
      "Diffuse nuclear NR4A3 supports an NR4A3-rearranged subset. Diffuse nuclear PLAG1 may correlate with PLAG1 fusion but is not fully specific.",
    ],
    differential: [
      "STUMP: fails to meet at least two conventional LMS criteria; sample extensively and distinguish tumor cell necrosis from ischemic/infarct-type necrosis.",
      "Mitotically active leiomyoma: increased mitoses without atypia or tumor cell necrosis.",
      "Cellular leiomyoma: increased cellularity but bland cytology and rare mitoses.",
      "Endometrial stromal sarcoma: delicate arteriolar network, characteristic permeative pattern, and stromal IHC/molecular profile.",
      "Dedifferentiated LMS: pleomorphic component may lose smooth muscle markers; consider when a conventional smooth muscle tumor is associated with a high-grade pleomorphic component.",
    ],
    pitfall:
      "A low-power bland appearance does not exclude LMS. Search for the most atypical and mitotically active areas and sample the tumor–myometrium interface.",
  },
  {
    name: "Epithelioid leiomyosarcoma",
    family: "Smooth muscle tumors",
    summary:
      "LMS with ≥50% epithelioid cytomorphology; requires at least two of three subtype-specific malignant criteria.",
    histology: [
      "At least 50% round/polygonal, often discohesive cells with eosinophilic cytoplasm in nested, corded, nodular, or diffuse arrangements; spindle areas may blend with epithelioid areas.",
      "Rhabdoid or signet-ring-like cells, cytoplasmic clearing, pseudoglandular spaces, and stromal hyalinization may occur.",
      "At least two of: (1) tumor cell necrosis, (2) moderate-to-marked nuclear atypia, and (3) ≥1.7 mitoses/mm² (≥4 mitoses/10 HPF using the source field diameter).",
    ],
    ihc: [
      "Desmin, h-caldesmon, and SMA may be weak or patchy; smooth muscle differentiation should be assessed with a panel.",
      "EMA and broad-spectrum cytokeratins may be positive and can create an epithelial mimic.",
      "ER/PR may be positive. NR4A3 or PLAG1 rearrangement testing may be useful in selected morphologically uniform epithelioid/myxoid tumors.",
    ],
    differential: [
      "Benign epithelioid leiomyoma: usually <0.8 mitoses/mm², no tumor cell necrosis, and no significant atypia.",
      "PEComa: HMB45/PNL2 and cathepsin K support melanocytic differentiation; TFE3-rearranged tumors may lack smooth muscle markers.",
      "UTROSCT: polyphenotypic sex cord-like architecture and markers.",
      "Carcinoma: keratin/EMA positivity can overlap; correlate with smooth muscle markers and morphology.",
    ],
  },
  {
    name: "Myxoid leiomyosarcoma",
    family: "Smooth muscle tumors",
    summary:
      "Malignant smooth muscle tumor with prominent myxoid stroma; diagnosis requires at least two of four criteria.",
    histology: [
      "Myxoid matrix is prominent; two studies cited in the source suggest ≥50% of tumor volume.",
      "Spindle and/or epithelioid tumor cells with scant-to-moderate eosinophilic cytoplasm, arranged singly, in bundles/thin fascicles, or broader intersecting fascicles.",
      "Bulbous nested, tongue-like, or irregular destructive myometrial infiltration is common, but some tumors are circumscribed.",
      "At least two of: (1) tumor cell necrosis, (2) at least focal moderate nuclear atypia, (3) ≥0.8 mitoses/mm² (≥2 mitoses/10 HPF), and (4) infiltrative growth.",
    ],
    ihc: [
      "Desmin, h-caldesmon, and SMA may be weak or patchy in myxoid areas.",
      "NR4A3 or PLAG1 rearrangement testing can be helpful in epithelioid and/or myxoid tumors with cytologic uniformity.",
      "Diffuse nuclear PLAG1 can occur in PLAG1-rearranged sarcoma but may also occur in a subset without detectable rearrangement.",
    ],
    differential: [
      "Myxoid leiomyoma: circumscribed, hypocellular, bland cells, no mitoses, no atypia, and no tumor cell necrosis.",
      "STUMP: falls below the required two malignant criteria.",
      "Endometrial stromal sarcoma: evaluate delicate arterioles, tongue-like permeation, lymphovascular invasion, CD10/IFITM1/ER/PR, and defining fusions.",
      "Inflammatory myofibroblastic tumor and other myxoid sarcomas: exclude with appropriate morphology, IHC, and molecular work-up.",
    ],
  },
  {
    name: "Intravenous leiomyomatosis (IVL)",
    family: "Smooth muscle tumors",
    summary:
      "Benign smooth muscle proliferation growing intravascularly, outside or beyond the confines of a leiomyoma; may extend into pelvic veins, IVC, heart, or pulmonary vessels.",
    histology: [
      "Intravascular plugs or worm-like cords of benign smooth muscle cells resembling leiomyoma, sometimes free-floating within vascular lumina.",
      "Hydropic change, hyalinization, and thick-walled vessels are frequent.",
      "Uncommon patterns include adipocytes (intravenous lipoleiomyomatosis), vascular-rich forms, or benign endometrial glands/stroma (intravenous adenomyomatosis).",
    ],
    ihc: [
      "Desmin and h-caldesmon are generally positive; ER and PR are usually positive.",
      "CD10 is negative to variably positive.",
    ],
    differential: [
      "Leiomyosarcoma with vascular invasion: look for malignant cytology, tumor cell necrosis, and mitotic activity; IVL is cytologically benign.",
      "Endometrial stromal sarcoma with vascular invasion: small stromal cells and characteristic arteriolar pattern; CD10/IFITM1 and fusion profile support ESS.",
      "Other intravascular spindle-cell lesions: correlate with morphology and smooth muscle lineage markers.",
    ],
    pitfall:
      "The intravascular location does not itself mean malignancy. The defining feature is benign smooth muscle growing within vessels.",
  },
  {
    name: "Metastasizing leiomyoma",
    family: "Smooth muscle tumors",
    summary:
      "Extrauterine, well-demarcated proliferation of benign-appearing gynecologic smooth muscle, most often involving lung.",
    histology: [
      "Well-demarcated intersecting fascicles of bland spindle cells with moderate eosinophilic cytoplasm and blunt-ended nuclei.",
      "Minimal-to-absent mitoses; no significant atypia or tumor cell necrosis.",
      "Pulmonary lesions may show a peribronchiolar pattern with peripheral entrapment of alveolar spaces.",
    ],
    ihc: ["ER and PR are positive; smooth muscle markers support lineage."],
    differential: [
      "Metastatic leiomyosarcoma: history of LMS or STUMP, atypia, mitoses, and/or necrosis argue against metastasizing leiomyoma.",
      "Primary pulmonary smooth muscle neoplasm: correlate with gynecologic history and compare with prior uterine tumor.",
      "Other spindle-cell pulmonary lesions: use morphology and a lineage-directed panel.",
    ],
    pitfall:
      "The source essential criteria include absence of a history of gynecologic or non-gynecologic LMS or STUMP. Compare the extrauterine lesion with the prior uterine tumor whenever possible.",
  },
  {
    name: "Leiomyomatosis peritonealis disseminata (LPD)",
    family: "Smooth muscle tumors",
    summary:
      "Multiple benign smooth muscle nodules studding pelvic/abdominal peritoneal surfaces.",
    histology: [
      "Multiple, often miliary, well-circumscribed superficial peritoneal or omental nodules.",
      "Nodules resemble typical or cellular leiomyoma, with fascicles of bland smooth muscle, absent-to-mild atypia, and low mitotic activity.",
      "No destructive invasion is expected; endometriosis or endosalpingiosis may coexist.",
    ],
    ihc: ["Smooth muscle markers confirm differentiation."],
    differential: [
      "Peritoneal dissemination of leiomyosarcoma: atypia, mitotic activity, tumor cell necrosis, and destructive invasion argue against LPD.",
      "Implantation after morcellation: correlate with surgical history and distribution.",
      "Other peritoneal spindle-cell proliferations: confirm smooth muscle lineage and exclude mimics.",
    ],
  },
  {
    name: "Endometrial stromal nodule (ESN)",
    family: "Endometrial stromal and related tumors",
    summary:
      "Benign, well-circumscribed endometrial stromal neoplasm; distinction from LGESS requires examination of the entire tumor–myometrium interface.",
    histology: [
      "Well-circumscribed nodule composed of densely cellular, uniform small cells resembling proliferative endometrial stroma, with scant cytoplasm and round-to-oval nuclei.",
      "Arterioles may be hyalinized and surrounded by whorled tumor cells; scattered large vessels may occur at the periphery.",
      "Up to three finger-like projections extending <3 mm from the tumor border have been permitted in the source criteria.",
      "Mitotic activity is usually low but an increased count alone does not exclude ESN.",
      "Other patterns may include smooth muscle, fibromyxoid, sex cord-like, endometrioid glandular, epithelioid, or rhabdoid differentiation.",
    ],
    ihc: [
      "The immunophenotype mirrors LGESS; CD10, ER, and PR are desirable supportive markers.",
      "Molecular fusion (e.g., JAZF1::SUZ12 or PHF1-related) does not distinguish ESN from ESS.",
    ],
    differential: [
      "LGESS: permeative myometrial invasion and/or lymphovascular invasion; irregularity exceeding the limited ESN border allowance.",
      "Cellular leiomyoma: smooth muscle fascicles and h-caldesmon/desmin support smooth muscle differentiation.",
      "UTROSCT: sex cord-like patterns without a conventional endometrial stromal tumor component.",
    ],
    pitfall:
      "ESN cannot be reliably separated from LGESS on curettage or a limited biopsy because the tumor–myometrium interface is required.",
  },
  {
    name: "Low-grade endometrial stromal sarcoma (LGESS)",
    family: "Endometrial stromal and related tumors",
    summary:
      "Infiltrative neoplasm of endometrial stromal-type cells, typically with low-grade cytology and a delicate arteriolar network.",
    histology: [
      "Irregular, densely cellular islands of small uniform spindle cells with scant cytoplasm, oval/fusiform nuclei, inconspicuous nucleoli, and minimal atypia.",
      "Delicate arteriolar network; tumor cells may form perivascular whorls. Vessels may be hyalinized or curvilinear.",
      "Uterine tumors show tongue-like myometrial permeation and/or lymphovascular invasion. Extrauterine tumors may be multinodular and associated with endometriosis.",
      "Even a predominantly circumscribed tumor with >3 finger-like projections exceeding 3 mm is classified as LGESS/limited infiltration in the source framework.",
      "Mitotic activity is usually low (<2.1/mm²) but can occasionally be brisk. Variant differentiation includes smooth muscle, fibromyxoid, sex cord-like, epithelioid, skeletal muscle, and fatty patterns.",
    ],
    ihc: [
      "Typically strong/diffuse CD10, IFITM1, WT1, ER, and PR; cyclin D1 absent or limited (<50% of tumor nuclei).",
      "Broad-spectrum keratin may be positive. Desmin/SMA/h-caldesmon may highlight smooth muscle-differentiated areas.",
      "Sex cord-like areas may express inhibin and calretinin. TSC2-mutant epithelioid areas may express HMB45, Melan-A, or cathepsin K.",
    ],
    differential: [
      "ESN: sharply circumscribed with only limited permitted finger-like projections; no lymphovascular invasion and no extensive myometrial permeation.",
      "HGESS: monomorphic high-grade round/spindle cells, brisk mitoses, often necrosis/LVI, and cyclin D1/BCOR-associated molecular profile.",
      "Cellular leiomyoma: smooth muscle phenotype; CD10 can be positive in cellular leiomyoma, so no single marker is definitive.",
      "UTROSCT: sex cord architecture with polyphenotypic immunoprofile but without a component of conventional endometrial stromal tumor.",
    ],
    molecular: [
      "JAZF1::SUZ12 is the most common fusion; other JAZF1/PHF1-related fusions occur. Molecular confirmation is useful in unusual morphology but does not separate ESN from LGESS.",
      "ESR1 mutation testing is recommended in LGESS with high-grade transformation or altered hormone receptor status. TSC2 alterations may underlie epithelioid/sex cord-like morphology.",
    ],
    pitfall:
      "A low mitotic count does not make a tumor benign. The key distinction from ESN is the infiltrative interface and/or lymphovascular invasion.",
  },
  {
    name: "High-grade endometrial stromal sarcoma (HGESS)",
    family: "Endometrial stromal and related tumors",
    summary:
      "High-grade endometrial stromal neoplasm defined by characteristic molecular subsets, including YWHAE-, BCOR-, and BCORL1-altered tumors.",
    histology: [
      "Expansile, permeative, or infiltrative growth; more than one invasion pattern may coexist.",
      "Round-cell, spindle-cell, or mixed morphology with monomorphic mild-to-moderate atypia and readily identifiable mitoses (>4.21/mm² in the source); lymphovascular invasion and necrosis are usually present.",
      "A low-grade component may coexist and can predominate, so extensive sampling is essential.",
      "YWHAE::NUTM2 tumors: round cells with eosinophilic cytoplasm, irregular high-grade nuclei, vesicular chromatin, and high mitotic activity; may coexist with fibromyxoid or conventional LGESS.",
      "ZC3H7B::BCOR / variant BCOR::BCORL1 tumors: haphazard fascicular spindle cells in fibrous-to-fibromyxoid stroma, mild-to-moderate atypia, and at least focal high mitotic activity.",
      "BCOR ITD tumors: round/spindle or haphazard spindle-cell growth; may contain a bland low-grade component.",
    ],
    ihc: [
      "YWHAE::NUTM2 high-grade component: diffuse strong nuclear cyclin D1 and BCOR; may express KIT, CD56, and CD99; DOG1 negative.",
      "ZC3H7B::BCOR: strong diffuse cyclin D1 and CD10; ER/PR variable; BCOR positive in only about half of cases; desmin negative, focal SMA/caldesmon may occur.",
      "BCOR ITD: diffuse strong nuclear cyclin D1 and/or BCOR; CD10 variable; usually ER/PR negative; may express desmin but is usually SMA/caldesmon negative.",
      "Fusion/ITD-defined HGESS is consistently TP53 wild type in the supplied source; a TP53 mutation/high copy-number complexity should prompt reconsideration.",
    ],
    differential: [
      "LGESS with high-grade transformation: a low-grade component and a characteristic LGESS fusion may be present; ESR1 hotspot mutation may accompany transformation.",
      "Undifferentiated uterine sarcoma, NCF: diagnosis of exclusion; lacks defining HGESS fusion/ITD and may show pleomorphic morphology and mutant-pattern p53.",
      "Undifferentiated endometrial carcinoma: exclude with epithelial markers and appropriate morphology.",
      "SMARCA4-deficient uterine sarcoma: exclude with SMARCA4/BRG1 assessment in the appropriate setting.",
    ],
    molecular: [
      "Defining alterations include YWHAE::NUTM2A/B, ZC3H7B::BCOR, variant BCOR/BCORL1 fusions, and BCOR internal tandem duplication; less common KDM2B fusions are emerging.",
      "Molecular confirmation is particularly important when morphology or IHC is equivocal.",
    ],
    pitfall:
      "Diffuse cyclin D1 or BCOR is a surrogate, not a substitute for molecular confirmation when the diagnosis is uncertain. Pan-TRK staining can occur without an NTRK rearrangement in BCOR/YWHAE-altered tumors.",
  },
  {
    name: "Endometrial polyp",
    family: "Mixed epithelial and mesenchymal tumors",
    summary:
      "Benign polypoid endometrial lesion with altered/fibrotic stroma, thick-walled vessels, and disorganized glands.",
    histology: [
      "Polypoid architecture with altered, often fibrotic stroma, scattered thick-walled vessels, and embedded disorganized glands.",
      "Glands may be proliferative, atrophic, or secretory; endocervical-type mucinous and ciliated/tubal metaplasia are common.",
      "Torsion may cause hemorrhagic infarction, epithelial metaplasia, and reactive atypia.",
      "Unlike adenosarcoma, there is no atypical mitotically active periglandular stromal cuff and typically no leaf-like projections into cystically dilated glands.",
      "Polyps with unusual stromal features overlap with low-grade adenosarcoma but do not meet full criteria; the source describes these as benign if completely excised.",
    ],
    ihc: [
      "No specific IHC profile is required in the supplied source; use targeted stains when evaluating a stromal or epithelial mimic.",
    ],
    differential: [
      "Adenosarcoma: leaf-like architecture and periglandular cuffing by hypercellular neoplastic stroma, often with mitotic activity.",
      "Adenomyomatous polyp: prominent smooth muscle component; do not label an ordinary polyp with only minor smooth muscle as adenomyoma.",
      "Atypical hyperplasia/carcinoma: inspect glands carefully, particularly in postmenopausal or tamoxifen-associated polyps.",
    ],
  },
  {
    name: "Adenomyoma",
    family: "Mixed epithelial and mesenchymal tumors",
    summary:
      "A mass of endometrioid-type glands, endometrioid-type stroma, and smooth muscle; cervical endocervical-type adenomyoma is a distinct glandular pattern.",
    histology: [
      "Corpus, broad ligament, or ovarian adenomyoma: nodules/polyps of predominantly bland endometrioid-type glands/cysts surrounded by endometrioid-type stroma and smooth muscle, with smooth muscle usually predominant.",
      "Tubal, mucinous, or squamous metaplasia may occur. Endometrioid stroma may be inconspicuous in parts of the lesion.",
      "Smooth muscle is usually bland, without increased cellularity; occasional bizarre nuclei may occur without mitotic activity.",
      "Cervical endocervical-type adenomyoma: predominantly or exclusively endocervical-type mucinous glands with intracellular mucin and basal nuclei, surrounded by bland smooth muscle; endometrial stroma is absent.",
    ],
    ihc: [
      "Endometrioid-type stromal component: CD10 positive; SATB2 may be positive.",
      "Smooth muscle component: desmin, SMA, and h-caldesmon positive.",
    ],
    differential: [
      "Endometrial polyp with smooth muscle: a minor smooth muscle component is insufficient for adenomyoma.",
      "Adenosarcoma: neoplastic hypercellular periglandular stroma, leaf-like architecture, and mitotic activity.",
      "Atypical glandular lesion/carcinoma: evaluate glandular cytology and architecture independently.",
    ],
  },
  {
    name: "Müllerian adenosarcoma",
    family: "Mixed epithelial and mesenchymal tumors",
    summary:
      "Biphasic neoplasm with benign or mildly atypical epithelial glands and malignant mesenchymal stroma.",
    histology: [
      "Broad leaf-like (phyllodes-like) architecture and/or dilated glands lined by benign endometrial or ciliated epithelium, each surrounded by a distinct cuff of neoplastic stroma hypercellular relative to adjacent stroma.",
      "Stromal atypia and mitoses are variable and may be subtle; extensive sampling is important.",
      "Sarcomatous overgrowth is defined as pure sarcoma without epithelium occupying ≥25% of tumor volume. Sex cord differentiation does not count as sarcomatous overgrowth.",
      "Heterologous rhabdomyosarcomatous differentiation may occur.",
      "High-grade sarcoma may show marked pleomorphism, brisk mitoses (often >4.21/mm² in the source), and necrosis; it may occur with or without sarcomatous overgrowth.",
    ],
    ihc: [
      "CD10, ER, and PR are often positive in the stromal component, but may be lost in sarcomatous overgrowth.",
      "Myogenin and MYOD1 help confirm heterologous rhabdomyosarcomatous differentiation.",
      "High-grade areas may show mutation-type p53.",
    ],
    differential: [
      "Endometrial polyp with unusual stromal features: lacks the full combination of leaf-like architecture and atypical mitotically active periglandular stromal cuffing.",
      "Adenofibroma: the historical category is no longer retained; prior cases should be reconsidered as benign polyp with atypical architecture or low-grade adenosarcoma.",
      "Carcinosarcoma: both epithelial and mesenchymal components are malignant; in adenosarcoma the epithelial component is benign or only mildly atypical.",
      "Adenomyoma: bland smooth muscle predominates; no neoplastic periglandular stromal cuff.",
    ],
    pitfall:
      "Sarcomatous overgrowth is a quantitative definition (≥25% pure sarcoma). Do not count sex cord differentiation as sarcomatous overgrowth.",
  },
  {
    name: "Genital rhabdomyoma",
    family: "Skeletal muscle tumors",
    summary:
      "Benign mature skeletal muscle neoplasm, typically subepithelial in the lower genital tract.",
    histology: [
      "Well-circumscribed subepithelial proliferation of polygonal, spindle, and/or elongated mature rhabdomyoblasts in fibrous stroma.",
      "Some cells show cross-striations. A cambium layer and mitotic activity are absent; scattered atypical cells may occur.",
    ],
    ihc: [
      "Desmin positive; myogenin and MYOD1 support skeletal muscle differentiation.",
    ],
    differential: [
      "Embryonal rhabdomyosarcoma: primitive cells, subepithelial cambium layer, frequent mitoses/apoptosis, and immature rhabdomyoblasts.",
      "Atypical smooth muscle tumor: use myogenin/MYOD1 to establish skeletal muscle differentiation.",
    ],
  },
  {
    name: "Rhabdomyosarcoma (ERMS, ARMS, PRMS)",
    family: "Skeletal muscle tumors",
    summary:
      "Malignant skeletal muscle neoplasm; classify by morphology as embryonal, alveolar, or pleomorphic when it arises as a primary rhabdomyosarcoma.",
    histology: [
      "Embryonal RMS (ERMS): often polypoid and partly covered by squamous or glandular epithelium; primitive dark ovoid-to-spindled cells in edematous or collagenous stroma. A subepithelial cambium layer or peritheliomatous condensation around glands may be present. Strap cells, rounded rhabdomyoblasts, and rare spider cells may occur; overt rhabdomyoblasts can be inconspicuous. Mitoses and apoptosis are frequent.",
      "ERMS may show focal anaplasia; fetal-type cartilage occurs in about 40% in the supplied source and is mostly associated with DICER1 alterations.",
      "Alveolar RMS (ARMS): small round blue cells in loose cohesive nests/alveoli separated by collagenous septa; central cells lose cohesion while peripheral cells adhere to septa. A solid pattern may lack fibrous septa.",
      "Pleomorphic RMS (PRMS): admixture of round, polygonal, bizarre, and spindle cells with marked atypia, with or without giant cells.",
      "When rhabdomyoblastic differentiation occurs within another neoplasm (e.g., adenosarcoma or carcinosarcoma), do not classify the entire tumor as a primary RMS subtype.",
    ],
    ihc: [
      "Myogenin and MYOD1 are specific nuclear markers; often diffuse in ARMS and PRMS, but may be focal in ERMS.",
      "Desmin, myoglobin, myosin, and MSA may be positive; SMA is negative in the source description.",
    ],
    differential: [
      "Benign genital rhabdomyoma: mature cells, no cambium layer, no mitotic activity.",
      "Adenosarcoma with rhabdomyoblastic differentiation: identify the biphasic phyllodes-like architecture and benign epithelial component.",
      "Carcinosarcoma with heterologous rhabdomyosarcoma: identify malignant epithelial and mesenchymal components.",
      "Other small round-cell tumors: establish skeletal muscle differentiation with nuclear myogenin/MYOD1 and use molecular testing as appropriate.",
    ],
    molecular: [
      "DICER1 mutation analysis is recommended when available in uterine and tubo-ovarian ERMS.",
      "PAX3::FOXO1 and PAX7::FOXO1 account for most fusion-positive ARMS; fusion testing may be helpful in selected cases.",
    ],
  },
  {
    name: "Ovarian myxoma",
    family: "Miscellaneous mesenchymal tumors",
    summary:
      "Benign intraparenchymal ovarian myxoid neoplasm with bland spindle/stellate cells and abundant capillary-type vessels.",
    histology: [
      "Typically well-circumscribed but unencapsulated intraparenchymal lesion; abundant myxoid matrix displaces follicles and their derivatives.",
      "Spindle-to-stellate cells with long tapering processes and bland oval, sometimes indented nuclei; occasional pseudoinclusions; absent-to-minimal mitoses.",
      "Small capillary-type vessels, sometimes plexiform; small cysts/pseudocysts and hemorrhage with or without fibrin may occur.",
    ],
    ihc: [
      "Alcian blue highlights abundant hyaluronic-acid-rich matrix.",
      "Tumor cells typically express vimentin and SMA; negative for inhibin, desmin, S100, cytokeratins, and EMA.",
    ],
    differential: [
      "Sex cord-stromal tumor: inhibin and other sex cord markers support this lineage; ovarian myxoma is typically inhibin negative.",
      "Myxoid smooth muscle tumor: desmin/h-caldesmon and smooth muscle morphology support smooth muscle differentiation.",
      "Nerve sheath myxoma: S100 positivity would argue against ovarian myxoma.",
    ],
  },
  {
    name: "Uterine tumor resembling ovarian sex cord tumor (UTROSCT)",
    family: "Miscellaneous mesenchymal tumors",
    summary:
      "Uterine tumor with sex cord-like patterns and no conventional endometrial stromal tumor component; most behave indolently but recurrence is possible.",
    histology: [
      "Usually well-circumscribed, but an irregular edge with entrapment of surrounding smooth muscle may occur.",
      "Sheets, cords, nests, insulae, trabeculae, or tubules; occasionally retiform. The proportion of sex cord-like morphology varies.",
      "Cells have scant-to-abundant pale/foamy or eosinophilic cytoplasm, sometimes rhabdoid; nuclei are usually ovoid with minimal atypia and low mitotic activity.",
      "A subset shows atypia, brisk mitoses, necrosis, and vascular invasion—features associated with malignant behavior.",
    ],
    ihc: [
      "Polyphenotypic profile: variable inhibin, calretinin, WT1, CD56, CD99, SF1, FOXL2, Melan-A, epithelial markers, ER/PR, smooth muscle markers, and CD10.",
      "GREB1 or ESR1 rearrangements may be detected; absence of recurrent LGESS rearrangements supports distinction in the appropriate context.",
    ],
    differential: [
      "LGESS with sex cord-like differentiation: look for a conventional endometrial stromal component and characteristic LGESS molecular alterations.",
      "Ovarian sex cord-stromal tumor involving uterus: correlate with ovarian primary and clinical/radiologic findings.",
      "Epithelioid smooth muscle tumor: smooth muscle morphology and marker profile may predominate.",
    ],
    pitfall:
      "No single sex cord marker is specific. The essential criterion is sex cord pattern without a component of endometrial stromal tumor.",
  },
  {
    name: "Perivascular epithelioid cell tumor (PEComa)",
    family: "Miscellaneous mesenchymal tumors",
    summary:
      "Myomelanocytic neoplasm composed of epithelioid and/or spindle cells, often arranged around delicate vessels.",
    histology: [
      "Often circumscribed but may show permeative tongue-like or infiltrative growth.",
      "Epithelioid and/or spindle cells with clear-to-eosinophilic granular cytoplasm; nests, sheets, cords, or fascicles.",
      "Delicate thin-walled vessels and radial/perivascular arrangement are characteristic clues; multinucleated, lipid-rich, rhabdoid, or melanin-containing cells and stromal hyalinization may occur.",
      "Atypia, mitoses, and necrosis may be present. Sclerosing PEComa has extensive stromal hyalinization.",
      "Rare patterns include LAM-like morphology, PEComa/leiomyosarcoma biphasic tumors, and PEComa/LGESS hybrid morphology.",
    ],
    ihc: [
      "Conventional PEComa: melanocytic markers HMB45 and PNL2 are most sensitive; Melan-A may be focal or negative; cathepsin K often strong/diffuse but not specific.",
      "Smooth muscle markers (desmin, h-caldesmon, SMA) are variably expressed.",
      "TFE3-rearranged PEComa: uniform epithelioid cells with clear/eosinophilic cytoplasm; diffuse TFE3, HMB45, and cathepsin K; Melan-A and smooth muscle markers often rare/absent.",
    ],
    differential: [
      "Epithelioid leiomyoma/LMS: smooth muscle markers without melanocytic marker profile; PEComa usually has myomelanocytic differentiation.",
      "TSC2-mutant LGESS: may show epithelioid areas expressing HMB45, Melan-A, or cathepsin K; look for conventional LGESS component and stromal markers/fusions.",
      "Clear cell carcinoma: epithelial markers and organ-specific context; PEComa usually lacks keratin expression.",
      "TFE3-rearranged tumors of other lineages: confirm with morphology, marker panel, and molecular testing.",
    ],
    molecular: [
      "TSC1/TSC2 inactivating alterations support PEComa but their absence does not exclude it.",
      "TFE3 rearrangement testing is useful when TFE3 IHC is equivocal or the phenotype is unusual.",
    ],
  },
  {
    name: "Undifferentiated uterine sarcoma, not classified further (NCF)",
    family: "Miscellaneous mesenchymal tumors",
    summary:
      "High-grade malignant mesenchymal tumor with no identifiable line of differentiation after extensive sampling, IHC, and appropriate molecular exclusion.",
    histology: [
      "Destructive myometrial invasion.",
      "More often sheets of variably pleomorphic epithelioid and/or spindle cells with brisk mitotic activity; necrosis and lymphovascular invasion are common.",
      "Uniform monomorphic tumors should trigger a careful search for HGESS, SMARCA4-deficient uterine sarcoma, or undifferentiated endometrial carcinoma.",
      "The entity is heterogeneous and is a diagnosis of exclusion; adequate sampling is essential to exclude a recognizable differentiated component.",
    ],
    ihc: [
      "May show focal nonspecific SMA; should be negative for desmin and caldesmon in the source description.",
      "Some cases show ER/PR or variable nonspecific CD10.",
      "Many pleomorphic tumors show mutant-pattern p53, unlike molecularly defined fusion-driven HGESS, which is consistently TP53 wild type in the source.",
    ],
    differential: [
      "HGESS: exclude YWHAE, BCOR/BCORL1 fusions or BCOR ITD; use cyclin D1/BCOR as surrogates and molecular confirmation.",
      "SMARCA4-deficient uterine sarcoma: assess BRG1/SMARCA4.",
      "Undifferentiated endometrial carcinoma: exclude epithelial differentiation with morphology and IHC.",
      "Other fusion-driven sarcomas: exclude JAZF1, PHF1, YWHAE, BCOR, ALK, RET, ROS1, NTRK, TFE3, COL1A1, KAT6A/B::KANSL1, and related alterations as appropriate.",
    ],
    molecular: [
      "No pathognomonic molecular alteration. Molecular work-up is primarily exclusionary and should target alterations defining other recognized or provisional entities.",
    ],
    pitfall:
      "Do not use this label as a shortcut for an unclassified high-grade uterine tumor. Exclude better-defined sarcomas and carcinoma first.",
  },
];

const smoothMuscleCriteria = [
  [
    "Conventional spindle-cell LMS",
    "At least 2 of 3",
    "Tumor cell necrosis; moderate-to-marked atypia; ≥4 mitoses/mm² (≥10/10 HPF)",
  ],
  [
    "Epithelioid LMS",
    "At least 2 of 3",
    "Tumor cell necrosis; moderate-to-marked atypia; ≥1.7 mitoses/mm² (≥4/10 HPF)",
  ],
  [
    "Myxoid LMS",
    "At least 2 of 4",
    "Tumor cell necrosis; at least focal moderate atypia; ≥0.8 mitoses/mm² (≥2/10 HPF); infiltrative growth",
  ],
  [
    "STUMP high-mitotic subset",
    "Threshold-based category",
    "No atypia or tumor cell necrosis but ≥8.4 mitoses/mm² (≥20/10 HPF)",
  ],
];

const essComparison = [
  [
    "Interface",
    "Well-circumscribed; up to 3 finger-like projections <3 mm permitted",
    "Permeative/tongue-like myometrial invasion and/or lymphovascular invasion",
    "Infiltrative or expansile; often necrosis/LVI",
  ],
  [
    "Cells",
    "Small uniform stromal cells",
    "Small uniform spindle cells, minimal atypia",
    "Monomorphic high-grade round and/or spindle cells",
  ],
  [
    "Vessels",
    "Arterioles, sometimes hyalinized, with perivascular whorling",
    "Delicate arteriolar network; hyalinized/curvilinear vessels",
    "Variable; depends on molecular subset",
  ],
  [
    "Mitotic activity",
    "Usually low; increased count alone does not exclude",
    "Usually low, occasionally brisk",
    "Usually brisk, at least focally",
  ],
  [
    "IHC pattern",
    "Mirrors LGESS; CD10/ER/PR supportive",
    "CD10, IFITM1, WT1, ER, PR diffuse; cyclin D1 limited",
    "Cyclin D1 and/or BCOR often diffuse/strong in defined subsets",
  ],
  [
    "Molecular",
    "Fusion may be shared with LGESS; cannot distinguish by fusion alone",
    "JAZF1::SUZ12 and related JAZF1/PHF1 fusions",
    "YWHAE::NUTM2, BCOR/BCORL1 fusions, or BCOR ITD",
  ],
];

function Panel({
  title,
  children,
  tone = "teal",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "teal" | "amber" | "rose" | "slate";
}) {
  const tones = {
    teal: "border-teal-200 bg-teal-50/60",
    amber: "border-amber-200 bg-amber-50/60",
    rose: "border-rose-200 bg-rose-50/60",
    slate: "border-slate-200 bg-white",
  };
  return (
    <section className={`rounded-2xl border ${tones[tone]} p-5 shadow-sm`}>
      <h3 className="mb-3 font-semibold text-slate-900">{title}</h3>
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

export default function MesenchymalTumorsPage() {
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Leiomyoma (including morphologic patterns)",
    "Smooth muscle tumor of uncertain malignant potential (STUMP)",
    "Leiomyosarcoma (spindle cell / conventional)",
  ]);
  const families = [
    "All",
    ...Array.from(new Set(entities.map((e) => e.family))),
  ];
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (family === "All" || e.family === family) &&
          (search.trim() === "" ||
            [
              e.name,
              e.summary,
              ...e.histology,
              ...e.ihc,
              ...e.differential,
              ...(e.molecular || []),
            ]
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase())),
      ),
    [family, search],
  );
  const toggle = (name: string) =>
    setOpen((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white shadow-lg md:p-10">
          <div className="mb-3 inline-flex rounded-full border border-teal-300/40 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
            PathologyGPS · Female Genital Tract
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Mesenchymal Tumors
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-200 md:text-base">
            A morphology-first diagnostic guide to mesenchymal tumors of the
            female genital tract, emphasizing criteria for benignity, uncertain
            malignant potential, and malignancy; lineage-directed
            immunohistochemistry; and molecularly defined mimics.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <b className="text-2xl text-teal-200">1</b>
              <p className="mt-1 text-sm text-slate-200">
                Establish the line of differentiation
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <b className="text-2xl text-teal-200">2</b>
              <p className="mt-1 text-sm text-slate-200">
                Apply subtype-specific morphologic thresholds
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <b className="text-2xl text-teal-200">3</b>
              <p className="mt-1 text-sm text-slate-200">
                Use molecular testing to resolve defined entities
              </p>
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 lg:grid-cols-3">
          <Panel title="Classification map">
            <div className="space-y-2 text-sm leading-6">
              <p>
                <b>Smooth muscle tumors</b>
                <br />
                Leiomyoma and patterns · STUMP · leiomyosarcoma · IVL ·
                metastasizing leiomyoma · LPD
              </p>
              <p>
                <b>Endometrial stromal tumors</b>
                <br />
                Endometrial stromal nodule · LGESS · HGESS
              </p>
              <p>
                <b>Mixed epithelial and mesenchymal tumors</b>
                <br />
                Endometrial polyp · adenomyoma · adenosarcoma
              </p>
              <p>
                <b>Skeletal muscle tumors</b>
                <br />
                Rhabdomyoma · rhabdomyosarcoma
              </p>
              <p>
                <b>Miscellaneous</b>
                <br />
                Ovarian myxoma · UTROSCT · PEComa · undifferentiated uterine
                sarcoma NCF
              </p>
            </div>
          </Panel>
          <Panel title="First-pass diagnostic GPS" tone="slate">
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>
                <b>Identify the dominant morphology:</b> fascicular spindle,
                stromal-type small cells, myxoid, epithelioid, sex cord-like,
                myomelanocytic, or rhabdomyoblastic.
              </li>
              <li>
                <b>Assess the interface:</b> circumscribed, limited
                irregularity, tongue-like permeation, destructive invasion, or
                vascular growth.
              </li>
              <li>
                <b>Evaluate cytology and mitoses:</b> atypia grade, mitotic
                density in the hotspot, and atypical mitoses.
              </li>
              <li>
                <b>Classify necrosis:</b> tumor cell necrosis versus
                ischemic/infarct-type or treatment-related change.
              </li>
              <li>
                <b>Apply a lineage-directed IHC panel</b> and targeted molecular
                testing where indicated.
              </li>
            </ol>
          </Panel>
          <Panel title="Sampling is part of diagnosis" tone="amber">
            <Bullets
              items={[
                "Sample the tumor–myometrium interface to distinguish ESN from LGESS and to assess destructive invasion.",
                "Sample heterogeneous smooth muscle tumors extensively, including soft, hemorrhagic, necrotic, myxoid, and most atypical areas.",
                "Look for a low-grade component in suspected HGESS and for a differentiated component before diagnosing undifferentiated sarcoma.",
                "For suspected IVL, carefully examine peripheral myometrium, adjacent vessels, and lower uterine segment soft tissue.",
              ]}
            />
          </Panel>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            Smooth muscle malignancy: criteria are subtype-specific
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-4 py-3">Tumor type</th>
                  <th className="px-4 py-3">Diagnostic rule</th>
                  <th className="px-4 py-3">Criteria</th>
                </tr>
              </thead>
              <tbody>
                {smoothMuscleCriteria.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className="border-t border-slate-200 px-4 py-3 align-top leading-6 text-slate-700"
                      >
                        {j === 0 ? <b className="text-slate-900">{c}</b> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Mitotic counts are based on the field diameter specified in the
            supplied source (0.55 mm). Use calibrated microscope area and report
            the counting method consistently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            Endometrial stromal tumor: the interface is decisive
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  {["Feature", "ESN", "LGESS", "HGESS"].map((x) => (
                    <th
                      key={x}
                      className="px-4 py-3 font-semibold text-slate-900"
                    >
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {essComparison.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className="border-t border-slate-200 px-4 py-3 align-top leading-6 text-slate-700"
                      >
                        {j === 0 ? <b className="text-slate-900">{c}</b> : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Entity reference
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              Histologic diagnosis, IHC & differential
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Search by entity, pattern, marker, or diagnostic feature. Expand
              each entry for criteria and common mimics.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search: tumor cell necrosis, CD10, BCOR, HMB45, cambium layer..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            />
            <select
              value={family}
              onChange={(e) => setFamily(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            >
              {families.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 space-y-3">
            {filtered.map((entity) => {
              const isOpen = open.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-xl border border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(entity.name)}
                    className="flex w-full items-center justify-between gap-4 bg-slate-50 px-4 py-4 text-left hover:bg-teal-50"
                  >
                    <span>
                      <span className="block font-semibold text-slate-900">
                        {entity.name}
                      </span>
                      <span className="mt-1 block text-xs text-teal-700">
                        {entity.family}
                      </span>
                    </span>
                    <span className="text-xl text-slate-500">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="space-y-4 p-4">
                      <p className="text-sm leading-6 text-slate-700">
                        {entity.summary}
                      </p>
                      <div className="grid gap-4 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-2 text-sm font-bold text-slate-900">
                            Histologic criteria
                          </h4>
                          <Bullets items={entity.histology} />
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm font-bold text-slate-900">
                            Immunohistochemistry
                          </h4>
                          <Bullets items={entity.ihc} />
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Differential diagnosis
                        </h4>
                        <Bullets items={entity.differential} />
                      </div>
                      {entity.molecular && (
                        <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4">
                          <h4 className="mb-2 text-sm font-bold text-sky-950">
                            Molecular / ancillary studies
                          </h4>
                          <Bullets items={entity.molecular} />
                        </div>
                      )}
                      {entity.pitfall && (
                        <p className="rounded-lg bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700">
                          <b>GPS pitfall:</b> {entity.pitfall}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <p className="rounded-xl bg-slate-50 p-6 text-center text-sm text-slate-500">
                No matching entity or feature. Try a broader search term.
              </p>
            )}
          </div>
        </section>

        <section className="mb-8 grid gap-4 lg:grid-cols-2">
          <Panel title="Lineage-directed IHC: practical starting panels">
            <Bullets
              items={[
                "Smooth muscle: desmin, h-caldesmon, SMA, calponin; add ER/PR and selected p53, p16, FH, and 2SC according to morphology.",
                "Endometrial stromal: CD10, IFITM1, ER, PR, WT1; add cyclin D1 and BCOR for suspected HGESS; pursue fusion/ITD testing where indicated.",
                "PEComa: HMB45, PNL2, Melan-A, cathepsin K plus smooth muscle markers; TFE3 IHC/rearrangement testing for the TFE3-associated subset.",
                "Rhabdomyoblastic: desmin with nuclear myogenin and MYOD1.",
                "UTROSCT: broad panel of sex cord markers, epithelial markers, ER/PR, smooth muscle markers, and CD10; interpret the polyphenotypic pattern.",
              ]}
            />
          </Panel>
          <Panel title="Molecular testing: when it changes classification">
            <Bullets
              items={[
                "FH-deficient leiomyoma: 2SC/FH IHC prompts consideration of HLRCC and genetic counseling; IHC cannot establish germline status.",
                "HGESS: confirm YWHAE, BCOR/BCORL1 fusion or BCOR ITD when suspected; cyclin D1/BCOR are supportive surrogates.",
                "LGESS: JAZF1/PHF1-related fusions support the diagnosis in unusual cases but do not distinguish ESN from LGESS.",
                "Epithelioid/myxoid smooth muscle tumors: consider NR4A3 and PLAG1 rearrangements in cytologically uniform cases.",
                "PEComa: TSC1/TSC2 alterations support the diagnosis; TFE3 rearrangement testing can resolve selected cases.",
                "ERMS: consider DICER1 testing; ARMS: evaluate PAX3::FOXO1 / PAX7::FOXO1 in selected cases.",
              ]}
            />
          </Panel>
        </section>

        <section className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
          <h2 className="text-lg font-bold text-rose-950">
            High-yield diagnostic safeguards
          </h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-rose-950 md:grid-cols-2">
            <li>
              • Separate tumor cell necrosis from ischemic/infarct-type necrosis
              before classifying a smooth muscle tumor.
            </li>
            <li>
              • Apply different mitotic thresholds to spindle, epithelioid, and
              myxoid LMS.
            </li>
            <li>
              • STUMP is a diagnosis of exclusion—not a synonym for atypical
              leiomyoma.
            </li>
            <li>
              • ESN versus LGESS requires the tumor–myometrium interface;
              curettage cannot reliably settle the distinction.
            </li>
            <li>
              • LGESS can have low mitotic activity and still be malignant
              because invasion is decisive.
            </li>
            <li>
              • HGESS is a molecularly refined category; exclude defined
              fusion/ITD tumors before undifferentiated sarcoma NCF.
            </li>
            <li>
              • Adenosarcoma has benign/mildly atypical epithelium and malignant
              stroma; carcinosarcoma has malignant epithelial and mesenchymal
              components.
            </li>
            <li>
              • Myogenin/MYOD1 nuclear staining establishes rhabdomyoblastic
              differentiation, but first determine whether it is a component of
              another tumor.
            </li>
          </ul>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          <p>
            <b>Source scope:</b> This page follows the supplied WHO
            mesenchymal-tumor excerpt. It covers the entities with detailed
            descriptions in that source: smooth muscle tumors and related
            lesions, endometrial stromal tumors, mixed epithelial/mesenchymal
            tumors, skeletal muscle tumors, ovarian myxoma, UTROSCT, PEComa, and
            undifferentiated uterine sarcoma NCF. Provisional fusion-defined
            entities and SMARCB1-deficient vulvar neoplasms are mentioned in the
            source introduction but are not expanded here because the supplied
            excerpt does not provide full entity-level diagnostic descriptions.
          </p>
          <p className="mt-2">
            Educational reference for pathologists. Integrate morphology,
            immunophenotype, molecular findings, sampling, and clinical context.
            For rare tumors and borderline categories, expert gynecologic
            pathology consultation is appropriate.
          </p>
        </footer>
      </div>
    </main>
  );
}
