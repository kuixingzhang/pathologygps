import React from "react";

type Tier = {
  label: string;
  criteria: string[];
  ihc?: string[];
  pitfalls?: string[];
};
type Tumor = {
  family: string;
  lineage: string;
  benign?: Tier;
  borderline?: Tier;
  malignant?: Tier;
  keyDifferential: { diagnosis: string; findings: string }[];
  pearls?: string[];
};

const tumors: Tumor[] = [
  {
    family: "Serous tumors",
    lineage:
      "Tubal-type serous epithelium; the key malignant distinction is low-grade versus high-grade cytology and, above all, the presence or absence of destructive stromal invasion.",
    benign: {
      label: "Serous cystadenoma / adenofibroma / cystadenofibroma",
      criteria: [
        "Simple, non-stratified cuboidal or columnar epithelium resembling tubal secretory or ciliated cells; flattened lining may occur.",
        "Cystadenoma is predominantly cystic. Adenofibroma contains small glands/cysts in prominent fibromatous stroma. Cystadenofibroma combines cysts with broad-based papillary projections and fibromatous stroma.",
        "No significant epithelial stratification, tufting, hierarchical branching, or destructive invasion. A cyst should be greater than 1 cm to be designated a cystadenoma rather than a cortical inclusion cyst.",
        "A minor focus of borderline-type proliferation involving less than 10% of total tumor volume (or less than 0.5 cm³) may be designated focal epithelial proliferation; surface involvement or micropapillary architecture should prompt consideration of SBT.",
      ],
      ihc: [
        "Tubal-type epithelium typically expresses PAX8 and CK7; WT1 and ER are usually supportive of serous differentiation, but the supplied source does not define an obligatory IHC panel for benign serous tumors.",
      ],
    },
    borderline: {
      label:
        "Serous borderline tumor (SBT), including micropapillary/cribriform subtype",
      criteria: [
        "Usual SBT: hierarchical branching papillae with variable stromal cores, stratified epithelium, tufting, and cell detachment; epithelial cell types may include ciliated, non-ciliated, eosinophilic, hobnail, or mesothelial-like cells. Nuclear heterogeneity is typical, but cytology remains low grade.",
        "A 10% threshold is commonly used for the minimum epithelial proliferation required to distinguish an early SBT from cystadenoma/adenofibroma with focal proliferation.",
        "Micropapillary/cribriform SBT: elongated micropapillae at least five times longer than wide, usually without stromal cores, arising directly from larger papillae (Medusa-head pattern), and/or punched-out cribriform spaces. At least 5 mm of pure micropapillary/cribriform growth is required for this subtype.",
        "Micropapillary cells are more monotonous, with high N:C ratios and small uniform nuclei; high-grade nuclear features and frequent mitoses should not be present.",
        "Stromal microinvasion (individual cells/small clusters or simple papillae, usually less than 5 mm) is not equivalent to destructive LGSC invasion and is not associated with adverse prognosis in the source framework.",
        "Non-invasive implants involve peritoneal surfaces or submesothelial invaginations. Epithelial implants show branching papillae or detached clusters in smoothly contoured epithelial/mesothelial-lined spaces; desmoplastic implants show cells/clusters in reactive granulation tissue-like or desmoplastic stroma attached to the surface.",
      ],
      ihc: [
        "The supplied source does not define a required IHC profile for SBT. Use morphology and adequate sampling as the primary criteria; molecular alterations in the RAS/MAPK pathway (KRAS or BRAF, usually mutually exclusive) are common but not required for diagnosis.",
      ],
      pitfalls: [
        "An extraovarian implant with destructive infiltrative growth is LGSC, not an invasive implant.",
        "A nodular intraparenchymal lymph-node aggregate resembling LGSC should be classified as LGSC; isolated subcapsular papillary/glandular SBT-like involvement is not equivalent to metastatic carcinoma.",
      ],
    },
    malignant: {
      label:
        "Low-grade serous carcinoma (LGSC) and high-grade serous carcinoma (HGSC)",
      criteria: [
        "LGSC: invasive serous tumor with low-grade nuclear atypia (less than threefold variation in nuclear size) and low mitotic activity, typically no more than 5 mitoses/mm² (approximately 12 mitoses per 10 HPF using the specified field area). Patterns include small nests, glands, papillae/micropapillae, solid sheets, and inverted macropapillae. Psammoma bodies are common; necrosis is rare. Search carefully for stromal invasion in micropapillary SBT-like areas.",
        "LGSC may arise de novo, with SBT, or as recurrence/progression of SBT. Destructive extraovarian implants are extraovarian LGSC.",
        "HGSC: high-grade serous tumor with marked nuclear atypia (greater than threefold nuclear size variation) and/or high mitotic activity, typically greater than 5 mitoses/mm² (approximately more than 12 per 10 HPF using the specified field area). Solid, papillary, labyrinthine/slit-like, glandular, and cribriform patterns occur; atypical mitoses, necrosis, and multinucleated cells are common.",
        "HGSC is commonly bilateral, large, exophytic, and advanced stage. Exclude a tubal primary, including STIC, before assigning an ovarian primary site.",
        "A small subset of serous carcinomas is morphologically ambiguous between LGSC and HGSC; integrate nuclear grade, mitotic activity, p53, and clinical/pathologic context.",
      ],
      ihc: [
        "LGSC: typically diffuse CK7, PAX8, ER, and WT1; PR and p16 are variable or patchy; p53 shows a wild-type pattern.",
        "HGSC: WT1 is nuclear-positive in about 90%; p53 shows a mutation-type pattern in about 95% (diffuse strong overexpression in at least 80%, null with intact internal control, or rarely cytoplasmic pattern). CK7, CA125, and PAX8 are typically positive; ER is frequent; p16 is often block-positive. CK20, CEA, HNF1β, and napsin A are typically negative.",
        "p53 is a surrogate for TP53 status, but a minority of HGSCs show discordance between IHC and mutation testing.",
      ],
      pitfalls: [
        "SBT and LGSC cannot be reliably separated by cytology alone; invasion is a tissue diagnosis.",
        "A high mitotic count or greater than threefold nuclear size variation in a presumed LGSC should trigger evaluation for HGSC.",
        "The micropapillary/cribriform pattern alone does not establish invasion.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Endometrioid carcinoma",
        findings:
          "Usually forms confluent back-to-back glands with smooth luminal contours; squamous/morular differentiation is common. PAX8 and ER/PR are often positive, but WT1 is usually negative. Endometriosis and a coexisting endometrioid precursor support this lineage.",
      },
      {
        diagnosis: "Mesothelial proliferation / mesothelioma",
        findings:
          "May mimic papillary serous tumor on peritoneal surfaces. Use a panel including epithelial/Müllerian markers (PAX8, claudin-4) and mesothelial markers (calretinin, D2-40, WT1); WT1 alone is not discriminatory.",
      },
      {
        diagnosis: "Metastatic serous carcinoma",
        findings:
          "Correlate with distribution and history. A tubal STIC or fimbrial mucosal involvement supports tubo-ovarian HGSC; primary peritoneal disease may be morphologically identical and requires clinicopathologic assignment.",
      },
    ],
    pearls: [
      "KRAS/BRAF pathway alterations are common in SBT and LGSC; TP53 mutation and complex copy-number changes characterize nearly all HGSC.",
      "The most important prognostic distinction in SBT is non-invasive implant versus destructive invasive extraovarian LGSC.",
    ],
  },
  {
    family: "Mucinous tumors",
    lineage:
      "Gastrointestinal-type (intestinal or gastric/foveolar) or Müllerian-type mucinous epithelium. Establish primary ovarian origin before diagnosing primary ovarian mucinous carcinoma.",
    benign: {
      label: "Mucinous cystadenoma / mucinous adenofibroma",
      criteria: [
        "Multiple cysts and glands lined by simple, non-stratified mucinous epithelium resembling Müllerian, gastric foveolar, or intestinal epithelium. Intestinal-type areas may contain goblet cells, neuroendocrine cells, or Paneth cells.",
        "Nuclei are small, basally located, and cytologically bland; mitoses are absent or minimal. Rare simple papillae may occur, but there is no architectural complexity or cytologic atypia.",
        "Adenofibroma has small glands/cysts embedded in prominent fibromatous stroma. Focal extravasated mucin or mucin granulomas may follow cyst rupture.",
        "Usually unilateral (about 95%) and multilocular with smooth outer surface; bilateral or relatively small tumors raise concern for metastasis.",
      ],
      ihc: [
        "The supplied source does not specify a mandatory benign mucinous IHC profile. Interpret intestinal and Müllerian differentiation in context; IHC becomes particularly important when excluding a metastatic gastrointestinal primary.",
      ],
    },
    borderline: {
      label: "Mucinous borderline tumor",
      criteria: [
        "Mucinous epithelial proliferation with stratification, tufting, or papillary complexity beyond a benign cystadenoma, but without confluent/expansile or infiltrative/destructive invasion.",
        "Extensively sample large multilocular tumors, especially solid areas, mural nodules, and areas of complex glandular crowding, to exclude invasion.",
        "The supplied source emphasizes the diagnostic overlap between crowded intraepithelial proliferation in mucinous borderline tumor and confluent/expansile invasion; the distinction can be difficult and has interobserver variability.",
      ],
      ihc: [
        "The source does not provide a dedicated required IHC panel for mucinous borderline tumor. In difficult cases, a mutation-type p53 pattern involving a large proportion of tumor tissue (>30%) favors mucinous carcinoma over borderline tumor with complex epithelial proliferation.",
      ],
    },
    malignant: {
      label: "Mucinous carcinoma",
      criteria: [
        "Invasive mucinous neoplasm composed of gastrointestinal-type epithelium. Two invasive patterns are recognized, each requiring at least 5 mm linear extent.",
        "Confluent/expansile invasion: marked glandular crowding with little or no intervening stroma, producing a labyrinthine appearance; papillary and cribriform areas may occur.",
        "Infiltrative/destructive invasion: irregular glands, nests, and single malignant cells infiltrating stroma, often with desmoplasia. Estimate the proportion of this component among all carcinomatous areas.",
        "A minute infiltrative focus in a tumor with expansile invasion should not automatically reclassify the whole tumor as infiltrative/destructive type. The proportion of infiltrative invasion is prognostically important; a 10% threshold separates low from high proportion in the recommended growth-pattern grading approach.",
        "Usually large, unilateral, and predominantly ovarian. Bilaterality and/or size below 13 cm should raise suspicion for metastasis; advanced-stage disease is uncommon in primary ovarian mucinous carcinoma.",
      ],
      ihc: [
        "Typically diffuse CK7; CK20, CEA, and CDX2 are variable; CA19-9 is often diffuse.",
        "CA125, WT1, napsin A, vimentin, ER, and PR are usually negative. PAX8 is usually focal/weak in a subset. p16 is usually negative or non-block; p53 may be wild-type or mutation-type.",
        "Diffuse strong SATB2 is present in fewer than 10% of primary ovarian mucinous carcinomas; in the absence of teratoma, it should raise concern for lower gastrointestinal/appendiceal metastasis.",
        "A CK7/SATB2 panel is useful for primary ovarian versus colorectal/appendiceal origin; PAX8 and CDX2 are secondary markers. Upper GI and pancreatobiliary metastases may overlap immunophenotypically.",
      ],
      pitfalls: [
        "Do not equate mucin extravasation or mucin granulomas with stromal invasion.",
        "Infiltrative invasion, especially with bilateral ovarian involvement, should trigger a search for an extraovarian primary.",
        "A mutation-type p53 pattern in >30% of tumor tissue favors mucinous carcinoma in borderline-versus-expansile invasion dilemmas.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Metastatic colorectal / appendiceal adenocarcinoma",
        findings:
          "Often bilateral and/or smaller; infiltrative glands, single cells, or signet-ring cells may be present. Diffuse SATB2 and CDX2 with absent or limited CK7 support lower GI origin; primary ovarian mucinous carcinoma is usually diffusely CK7-positive and SATB2 is rarely diffuse.",
      },
      {
        diagnosis: "Metastatic upper GI / pancreatobiliary carcinoma",
        findings:
          "May be CK7-positive and overlap with primary ovarian mucinous carcinoma. Bilaterality, surface/hilar involvement, multinodular growth, signet-ring cells, and clinical/radiologic evidence of a GI primary are important clues.",
      },
      {
        diagnosis: "Endometrioid carcinoma with mucinous differentiation",
        findings:
          "Look for conventional endometrioid glands, squamous morules, endometriosis, and ER/PR expression; diffuse CK20/CDX2 or intestinal morphology alone does not establish a primary mucinous carcinoma.",
      },
    ],
    pearls: [
      "Primary ovarian mucinous carcinoma is usually unilateral, large, and stage I; a bilateral small tumor should be treated as metastatic until proven otherwise.",
      "The source defines invasive growth by at least 5 mm linear extent for either expansile or infiltrative pattern.",
    ],
  },
  {
    family: "Endometrioid tumors",
    lineage:
      "Müllerian endometrioid differentiation, often arising in endometriosis. Evaluate the endometrium because synchronous endometrial hyperplasia/carcinoma is common.",
    benign: {
      label: "Endometrioid adenofibroma",
      criteria: [
        "Widely spaced, cytologically bland endometrioid glands in a fibromatous stroma.",
        "Often associated with endometriosis or an endometriotic cyst. Morular, squamous, and mucinous differentiation may occur; dystrophic stromal calcifications may be present.",
        "No glandular crowding, cytologic atypia, confluent growth, or destructive stromal invasion.",
      ],
      ihc: [
        "The source does not specify a mandatory IHC profile for benign endometrioid adenofibroma. In practice, glands generally show Müllerian/endometrioid differentiation; correlate with endometriosis and morphology.",
      ],
    },
    borderline: {
      label: "Endometrioid borderline tumor",
      criteria: [
        "Crowded endometrioid glands or simple papillae with low-grade cytologic atypia, but without confluent/expansile growth or infiltrative/destructive stromal invasion.",
        "Two patterns: intracystic proliferation protruding into an endometriotic cyst (glandular or simple papillary architecture with pseudostratified columnar cells), and the more common adenofibromatous pattern (crowded, irregular glands in fibromatous stroma with lobular architecture).",
        "Mild-to-moderate atypia and usually low mitotic activity. Morular/squamous metaplasia is common; mucinous metaplasia may occur. Confluent morular metaplasia alone does not establish carcinoma.",
        "Extensive sampling is recommended to exclude endometrioid carcinoma; these tumors are very rarely encountered without associated endometriosis or another endometrioid lesion.",
      ],
      ihc: [
        "PAX8, CK7, ER, and PR positive; WT1 variable. Morules typically show nuclear β-catenin.",
      ],
      pitfalls: [
        "Coexisting endometrial hyperplasia or carcinoma is common; evaluate the endometrium.",
        "Do not mistake confluent morular metaplasia for confluent glandular invasion.",
      ],
    },
    malignant: {
      label: "Endometrioid carcinoma",
      criteria: [
        "Confluent back-to-back or cribriform glandular proliferation is the most common pattern; less commonly destructive glands/nests with desmoplastic stroma occur.",
        "Neoplastic glands have smooth luminal borders and round-to-oval nuclei with open chromatin and low-to-moderate atypia. Solid growth is usually a minor component but may predominate in a subset.",
        "Morular or squamous differentiation occurs in about half; mucinous, secretory, clear-cell-like, sex-cord-like, spindle-cell, oxyphilic, ciliated, and corded/hyalinized patterns may occur.",
        "Grade using the FIGO grading system for endometrial endometrioid carcinoma. Grade 3 is a diagnosis of exclusion after excluding HGSC and metastasis.",
        "Most are unilateral and large, frequently associated with endometriosis/endometriotic cyst. Concurrent endometrial hyperplasia or carcinoma may be present.",
      ],
      ihc: [
        "PAX8 and ER/PR are positive in most cases (approximately 81–85%). WT1 and napsin A are usually negative, although exceptions occur.",
        "CDX2 and SATB2 may be expressed in subsets, particularly with intestinal/mucinous differentiation. Nuclear β-catenin may be present with CTNNB1 alterations.",
        "MMR IHC should be performed where possible for Lynch syndrome screening. p53, MMR, and POLE testing can classify molecular subgroups; mutation-type p53 suggests a copy-number-high subgroup.",
      ],
      pitfalls: [
        "High-grade endometrioid carcinoma can overlap with HGSC; HGSC is more common and typically shows WT1 and mutation-type p53.",
        "Sex-cord-like endometrioid carcinoma may mimic sex cord-stromal tumors; use PAX8, ER/PR, and appropriate sex cord markers in a panel.",
        "Synchronous low-grade endometrial and ovarian endometrioid carcinomas may be clonally related yet behave indolently; apply current FIGO criteria and clinicopathologic correlation.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "High-grade serous carcinoma",
        findings:
          "Usually marked pleomorphism, brisk mitoses, atypical mitoses, and mutation-type p53; WT1 is commonly diffuse. Endometrioid carcinoma more often has smooth back-to-back glands, squamous morules, and ER/PR positivity.",
      },
      {
        diagnosis: "Clear cell carcinoma",
        findings:
          "Hobnail cells, tubulocystic/papillary/solid patterns, hyalinized stroma, and napsin A/HNF1β positivity with ER/PR/WT1 negativity favor clear cell carcinoma.",
      },
      {
        diagnosis: "Sex cord-stromal tumor",
        findings:
          "Sertoli-like tubules, cords, or trabeculae may mimic endometrioid carcinoma. Demonstrate epithelial/Müllerian differentiation (PAX8, keratins, ER/PR) and use inhibin, calretinin, SF1, and other sex cord markers as needed.",
      },
    ],
    pearls: [
      "Endometriosis is a common precursor/background association but is not by itself diagnostic.",
      "MMR IHC is important not only diagnostically but also for Lynch syndrome screening.",
    ],
  },
  {
    family: "Clear cell tumors",
    lineage:
      "Müllerian clear cell differentiation, frequently associated with endometriosis. The key borderline-versus-malignant distinction is adenofibromatous architecture without papillary growth or stromal invasion versus a characteristic malignant tubulocystic/papillary/solid tumor.",
    benign: {
      label: "Clear cell adenofibroma",
      criteria: [
        "Adenofibromatous tumor with variably sized glands in fibromatous stroma; low cuboidal cells have clear or eosinophilic cytoplasm.",
        "In the bland form, nuclei are small without chromatin abnormalities or nucleoli and mitoses are typically absent.",
        "No papillary architecture, densely aggregated glands, tubulocystic/solid carcinoma-like architecture, or stromal invasion.",
      ],
      ihc: [
        "The source does not provide a required IHC profile for clear cell adenofibroma. ER/PR may be negative or weakly positive in clear cell borderline tumors.",
      ],
    },
    borderline: {
      label: "Clear cell borderline tumor (CCBT)",
      criteria: [
        "Adenofibromatous clear cell tumor with variable nuclear atypia but no papillary architecture and no stromal invasion.",
        "Glands are embedded in fibromatous stroma; cells are low cuboidal with clear or eosinophilic cytoplasm. Enlarged nuclei and occasional nucleoli are permitted; minimal nuclear stratification may occur.",
        "Densely aggregated glands, papillary or tubulocystic architecture, and a stromal response to invasion are absent by definition.",
        "Extensive sampling is required to exclude an associated clear cell carcinoma; CCBT is often a component rather than the sole element of a tumor.",
      ],
      ihc: [
        "ER and PR may be negative or weakly positive. The source does not define a required borderline-specific panel.",
      ],
    },
    malignant: {
      label: "Clear cell carcinoma (CCC)",
      criteria: [
        "Characteristic admixture of tubulocystic, papillary, and solid architecture. Tubulocystic areas show tubules/cysts, sometimes with dense eosinophilic luminal secretions, lined by hobnail, cuboidal, or attenuated cells.",
        "Papillary pattern: simple, non-branching papillae with round stromal cores; some hierarchical branching is permitted. Cells are cuboidal and/or hobnail, usually single-layered with minimal stratification.",
        "Solid pattern: sheets of polyhedral cells separated by delicate septa. Cytoplasm is clear (glycogen-rich, PAS-positive and diastase-sensitive) or eosinophilic; targetoid cells may occur.",
        "Nuclei are enlarged and monomorphic, with rounded-to-angulated contours, hyperchromasia, and prominent nucleoli. Pleomorphism may be focal; mitotic activity is variable and often low. Stromal hyalinization and myxoid stroma are frequent.",
        "Usually unilateral and associated with endometriosis; grading is not applicable.",
      ],
      ihc: [
        "Typically PAX8, napsin A, HNF1β, and AMACR positive.",
        "Typically WT1, ER, and PR negative. ARID1A loss occurs in about half and often correlates with ARID1A mutation; PIK3CA alterations are common.",
        "p53 mutation is less common than in HGSC; use the full morphologic/IHC profile rather than a single stain.",
      ],
      pitfalls: [
        "Clear/eosinophilic cytoplasm alone is not enough: require the characteristic architecture and cytology.",
        "Endometrioid carcinoma with clear-cell change often retains ER/PR and may show squamous morules; napsin A/ HNF1β support CCC.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Endometrioid carcinoma with clear-cell/secretory change",
        findings:
          "Often has conventional endometrioid glands, squamous morules, and ER/PR expression. CCC is typically ER/PR-negative and napsin A/HNF1β-positive, with hobnail cells and tubulocystic architecture.",
      },
      {
        diagnosis: "Metastatic renal cell carcinoma",
        findings:
          "Can show clear cells and delicate vasculature. Correlate with renal history/imaging and use PAX8 with renal markers (e.g., CAIX, CD10, RCC marker); ovarian CCC typically expresses napsin A/HNF1β and has Müllerian morphology.",
      },
      {
        diagnosis: "Yolk sac tumor",
        findings:
          "Reticular/microcystic and glandular patterns can overlap. Yolk sac tumor typically expresses SALL4, AFP, and glypican-3, whereas CCC expresses PAX8 and napsin A/HNF1β.",
      },
    ],
    pearls: [
      "Endometriosis is present in a substantial proportion of CCCs.",
      "ARID1A loss is supportive in context but is not specific to CCC.",
    ],
  },
  {
    family: "Seromucinous tumors",
    lineage:
      "Müllerian-type epithelial admixture, often associated with endometriosis. WHO classification no longer recognizes a distinct seromucinous carcinoma entity.",
    benign: {
      label: "Seromucinous cystadenoma / adenofibroma",
      criteria: [
        "Cysts or glands lined by bland Müllerian-type epithelium: endocervical-type mucinous, ciliated/serous, and/or endometrioid cells in varying proportions.",
        "Predominantly single-layered lining; occasional mild stratification and broad papillae with no or minimal hierarchical branching may occur.",
        "Adenofibroma has widely spaced bland glands in prominent hypocellular fibromatous stroma. If epithelial stratification or hierarchical branching exceeds 10% of the lining, a borderline designation is appropriate.",
        "Endometriosis is common; bilateral involvement may occur.",
      ],
      ihc: [
        "PAX8, ER, PR, and CK7 are generally positive; WT1 and CK20 are generally negative.",
      ],
    },
    borderline: {
      label: "Seromucinous borderline tumor (SMBT)",
      criteria: [
        "Architecturally complex papillary neoplasm with hierarchical branching papillae and variably edematous or fibrous stromal cores.",
        "Low-grade stratified and often tufted epithelium showing an admixture of Müllerian cell types: endocervical-type mucinous, ciliated/serous, endometrioid, hobnail, clear, squamous, and eosinophilic cells.",
        "Conspicuous neutrophils may infiltrate edematous papillary cores and epithelium. No confluent/expansile or destructive invasion.",
        "Endometriosis and an associated benign serous or mucinous cystadenoma are common. Bilaterality can occur.",
      ],
      ihc: [
        "PAX8, ER, PR, and CK7 generally positive; WT1 and CK20 negative; p53 wild-type pattern. KRAS and PIK3CA mutations are frequent; ARID1A loss occurs in a subset.",
      ],
      pitfalls: [
        "The previously recognized malignant counterpart, seromucinous carcinoma, is not a distinct entity in the WHO fifth/sixth edition framework; reclassify malignant cases according to morphology and molecular findings, most often as endometrioid carcinoma.",
      ],
    },
    keyDifferential: [
      {
        diagnosis:
          "Endometrioid borderline tumor / carcinoma with mucinous or serous metaplasia",
        findings:
          "Endometrioid glands, morular/squamous metaplasia, and endometriosis may overlap. The distinction may require architectural review and a panel; the source notes clinicopathologic and molecular overlap.",
      },
      {
        diagnosis: "Serous borderline tumor",
        findings:
          "SBT is composed of tubal-type serous epithelium and typically expresses WT1; SMBT shows a Müllerian epithelial admixture, often with endocervical-type mucinous and endometrioid components, and is generally WT1-negative.",
      },
      {
        diagnosis: "Mucinous borderline tumor",
        findings:
          "Gastrointestinal-type goblet-cell/foveolar differentiation supports mucinous borderline tumor; SMBT is defined by Müllerian-type admixture and lacks gastrointestinal-type differentiation.",
      },
    ],
    pearls: [
      "Do not diagnose seromucinous carcinoma as a separate histotype under the supplied WHO framework.",
      "SMBT commonly arises in or alongside endometriosis.",
    ],
  },
  {
    family: "Brenner tumors",
    lineage:
      "Urothelial-type epithelium in fibrous ovarian stroma. Benign and borderline lesions are often associated with a benign Brenner component; malignant Brenner tumor requires unequivocal stromal invasion.",
    benign: {
      label: "Benign Brenner tumor",
      criteria: [
        "Well-circumscribed nests of bland urothelial/transitional-type epithelium embedded in dense fibrous stroma.",
        "Nests may show central lumina or microcysts; nuclei are uniform with longitudinal grooves. No significant atypia, brisk mitoses, complex papillary proliferation, or stromal invasion.",
      ],
      ihc: [
        "Typically p63 and GATA3 positive; ER, PR, and WT1 negative. p53 shows a wild-type pattern; p16 may be lost in a subset.",
      ],
    },
    borderline: {
      label: "Borderline Brenner tumor",
      criteria: [
        "Complex papillary growth resembling a low-grade papillary urothelial neoplasm, but without stromal invasion.",
        "Cells are usually uniform with elongated nuclei, fine chromatin, and visible nucleoli; moderate-to-severe atypia may occasionally occur. Mucinous or squamous metaplasia is common.",
        "Benign Brenner tumor areas are nearly always present. Crowded, tortuous nests and increased mitoses may occur, but invasion must be absent.",
        "Typically unilateral and confined to the ovary; often a large cystic tumor with papillary masses projecting into the lumen.",
      ],
      ihc: [
        "Usually p63 and GATA3 positive; ER, PR, and WT1 negative. p53 wild-type; p16 loss may occur.",
      ],
    },
    malignant: {
      label: "Malignant Brenner tumor",
      criteria: [
        "Invasive carcinoma resembling urothelial carcinoma, with irregularly shaped masses of atypical urothelial-type cells and often focal squamous differentiation.",
        "Cystic areas may be lined by multilayered atypical epithelium with hyperchromatic pleomorphic nuclei, prominent nucleoli, dense eosinophilic cytoplasm, and brisk mitotic activity.",
        "Desmoplastic stromal reaction helps identify unequivocal invasion in a densely fibromatous background.",
        "A benign or borderline Brenner component is essential. If absent, consider HGSC or endometrioid carcinoma with transitional-cell-like differentiation, primary urothelial carcinoma, or squamous carcinoma.",
      ],
      ihc: [
        "WT1 negative; ER/PR negative or weak. p53 is usually wild-type but variable; p16 may be lost with CDKN2A deletion. GATA3 data are limited and may be positive or negative; p63 may be positive.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "HGSC with transitional-cell-like morphology",
        findings:
          "Usually has mutation-type p53 and WT1 expression and lacks a convincing benign/borderline Brenner component. Extensive sampling and a broad panel are required.",
      },
      {
        diagnosis: "Endometrioid carcinoma with squamous differentiation",
        findings:
          "Look for conventional endometrioid glands, squamous morules, ER/PR expression, and endometriosis; a true Brenner tumor shows urothelial nests in fibrous stroma and GATA3/p63 expression.",
      },
      {
        diagnosis: "Metastatic urothelial carcinoma",
        findings:
          "Requires clinical history and exclusion of a urinary tract primary. A benign/borderline Brenner component supports primary ovarian malignant Brenner tumor; GATA3/p63 alone cannot establish ovarian origin.",
      },
    ],
    pearls: [
      "A benign or borderline Brenner component is a required diagnostic anchor for malignant Brenner tumor.",
      "Invasion may be subtle in dense fibrous stroma; look for irregular infiltrative nests and desmoplasia.",
    ],
  },
  {
    family: "Mesonephric-like carcinoma",
    lineage:
      "Adenocarcinoma with mesonephric differentiation but without mesonephric remnants; considered a Müllerian carcinoma with secondary mesonephric transdifferentiation.",
    malignant: {
      label: "Mesonephric-like carcinoma",
      criteria: [
        "Usually unilateral, solid or mixed solid-cystic ovarian mass. Histology shows a mixture of tubular, glandular/pseudoendometrioid, ductal (slit-like or angulated glands), papillary, and solid patterns.",
        "Eosinophilic colloid-like luminal material may be present. Nuclei are often angulated with open/vesicular chromatin; nuclear overlap and grooves are frequent.",
        "No squamous or mucinous elements. Other Müllerian components (e.g., endometrioid carcinoma) may coexist; if distinct, classify as mixed carcinoma.",
        "Essential diagnosis is prototypical mesonephric carcinoma morphology; GATA3 or TTF1 expression and reduced/absent ER/PR are desirable.",
      ],
      ihc: [
        "Most cases express GATA3 and/or TTF1; CD10 may show luminal staining; PAX8 may be positive. WT1 is negative. ER/PR are significantly reduced or absent; p53 is typically wild-type and MMR proficient.",
      ],
      pitfalls: [
        "KRAS codon 12 (most common) or codon 13 mutation may help in challenging cases.",
        "The lack of mesonephric remnants is part of the definition; do not require a remnant.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Endometrioid carcinoma with tubular/sex-cord-like pattern",
        findings:
          "Usually expresses ER/PR and may show squamous/morular differentiation; mesonephric-like carcinoma is typically ER/PR-negative, WT1-negative, and GATA3/TTF1-positive with angulated nuclei and colloid-like luminal material.",
      },
      {
        diagnosis: "Clear cell carcinoma",
        findings:
          "CCC has hobnail cells, characteristic tubulocystic/papillary/solid architecture, and napsin A/HNF1β positivity; mesonephric-like carcinoma more often has angulated nuclei, luminal colloid, GATA3/TTF1, and reduced ER/PR.",
      },
      {
        diagnosis: "Metastatic mesonephric carcinoma from cervix",
        findings:
          "Review clinical history and cervical pathology; ovarian mesonephric-like carcinoma is defined by ovarian presentation without mesonephric remnants and requires exclusion of a cervical primary.",
      },
    ],
  },
  {
    family: "Undifferentiated / dedifferentiated carcinoma",
    lineage:
      "High-grade malignant epithelial neoplasm lacking overt differentiation (undifferentiated) or showing an abrupt transition from a differentiated component, usually low-grade endometrioid carcinoma (dedifferentiated).",
    malignant: {
      label: "Undifferentiated carcinoma / dedifferentiated carcinoma",
      criteria: [
        "Undifferentiated carcinoma: sheet-like growth of monotonous, discohesive, round cells with minimal cytoplasm, often with geographic necrosis, brisk mitotic activity, and prominent tumor-infiltrating lymphocytes. Rhabdoid features and focal spindle cells may occur.",
        "Dedifferentiated carcinoma: biphasic tumor with a differentiated component (usually FIGO grade 1 or 2 endometrioid carcinoma) and an undifferentiated component; the interface may be abrupt.",
        "Large, often advanced-stage solid masses with extensive necrosis are typical. Exclude small cell carcinoma of hypercalcemic type and other mimics.",
      ],
      ihc: [
        "Undifferentiated component often shows only focal EMA, pancytokeratin, and CK18; PAX8 is focal or absent. ER, PR, and E-cadherin are usually negative.",
        "Loss of SMARCA4 (BRG1), concurrent ARID1A/ARID1B loss, and sometimes SMARCB1 (INI1) loss occur. dMMR is frequent in a subset.",
        "ARID1A loss alone is not evidence of dedifferentiation because it is common in endometrioid and clear cell carcinomas. p53 is usually wild-type unless the differentiated component is HGSC.",
      ],
      pitfalls: [
        "CD138 can be expressed and should not be used alone to diagnose plasmacytoid differentiation.",
        "MMR proficiency may help distinguish from small cell carcinoma of hypercalcemic type, which is typically MMR proficient; correlate with SMARCA4 and clinical context.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Small cell carcinoma of the ovary, hypercalcemic type",
        findings:
          "Often occurs in young patients and may show small blue cells, follicle-like spaces, and rhabdoid cells; SMARCA4/BRG1 loss is characteristic. Distinguish with age, morphology, calcium status, and molecular/IHC profile.",
      },
      {
        diagnosis: "High-grade serous carcinoma",
        findings:
          "Usually retains epithelial cohesion and shows mutation-type p53, WT1, and PAX8 more consistently. Undifferentiated carcinoma is discohesive with only focal epithelial markers and often loss of SWI/SNF proteins.",
      },
      {
        diagnosis: "Lymphoma / melanoma / sarcoma",
        findings:
          "The undifferentiated morphology may mimic non-epithelial malignancies. Use broad lineage exclusion (CD45, SOX10/S100, desmin, myogenin, etc.) alongside epithelial markers.",
      },
    ],
  },
  {
    family: "Carcinosarcoma",
    lineage:
      "Biphasic malignant neoplasm of epithelial origin with high-grade carcinoma and sarcoma components; molecular findings support a monoclonal origin.",
    malignant: {
      label: "Ovarian carcinosarcoma",
      criteria: [
        "Distinct but usually intermingled high-grade carcinomatous and sarcomatous components; either may predominate.",
        "Carcinomatous component is most often HGSC, but endometrioid and other carcinoma types occur.",
        "Sarcomatous component is homologous when nonspecific stromal sarcoma is present; heterologous when rhabdomyosarcoma (most common), chondrosarcoma, osteosarcoma, or rarely liposarcoma/angiosarcoma is identified.",
        "Usually a large predominantly solid mass with hemorrhage and necrosis; often advanced stage.",
      ],
      ihc: [
        "IHC should demonstrate epithelial differentiation in the carcinoma component and characterize the sarcomatous component with morphology-directed markers. Concordant TP53 abnormalities in both components support a common clonal origin; no single required panel is specified in the supplied source.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Dedifferentiated carcinoma",
        findings:
          "Dedifferentiated carcinoma has an undifferentiated epithelial component, often with focal keratin/EMA, and usually a low-grade endometrioid differentiated component. Carcinosarcoma has a true sarcomatous component, sometimes with heterologous differentiation.",
      },
      {
        diagnosis: "Collision carcinoma and sarcoma",
        findings:
          "A collision tumor is spatially distinct and may lack shared molecular alterations. Carcinosarcoma typically has intimately admixed components and concordant molecular abnormalities.",
      },
      {
        diagnosis: "Carcinoma with reactive/desmoplastic stroma",
        findings:
          "Reactive stroma lacks a morphologically malignant mesenchymal population and does not show heterologous sarcomatous differentiation.",
      },
    ],
  },
  {
    family: "Mixed carcinoma",
    lineage:
      "Two or more unequivocally distinct ovarian carcinoma histotypes in one tumor; confirm components morphologically and, when available, immunohistochemically.",
    malignant: {
      label: "Mixed ovarian carcinoma",
      criteria: [
        "At least two clearly recognizable histological types must be present on H&E. Any confidently demonstrable proportion of a second histotype is sufficient; report the types and percentage of each component.",
        "Confirm distinct components with IHC when available. The most common combination is endometrioid and clear cell carcinoma; napsin A highlights clear cell differentiation and PR supports endometrioid differentiation.",
        "Distinguish from a single histotype with ambiguous/heterogeneous morphology and from independent collision tumors, which are usually spatially distinct and do not share molecular alterations.",
        "Dedifferentiated carcinoma and carcinosarcoma are classified separately rather than as mixed carcinoma.",
      ],
      ihc: [
        "Use component-directed panels. Examples: napsin A-positive clear cell component versus PR-positive endometrioid component. MMR deficiency may be present, especially in mixed endometrioid/clear cell carcinoma.",
      ],
    },
    keyDifferential: [
      {
        diagnosis: "Single histotype with morphologic mimicry",
        findings:
          "A single carcinoma may show clear, mucinous, sex-cord-like, or transitional-like areas without representing a second true histotype. Require distinct, reproducible morphologic and preferably immunophenotypic components.",
      },
      {
        diagnosis: "Collision tumors",
        findings:
          "Two spatially separate neoplasms without shared molecular alterations favor collision tumors rather than a mixed carcinoma.",
      },
      {
        diagnosis: "Carcinosarcoma / dedifferentiated carcinoma",
        findings:
          "Carcinosarcoma contains malignant sarcoma; dedifferentiated carcinoma has a differentiated plus undifferentiated epithelial component. Both are separate diagnostic categories.",
      },
    ],
  },
];

const quickRules = [
  [
    "Serous",
    "Tubal-type epithelium; SBT is hierarchical papillary and non-invasive; LGSC requires invasion with low-grade nuclei; HGSC requires high-grade nuclei and/or high mitotic activity, usually with mutation-type p53.",
  ],
  [
    "Mucinous",
    "Simple mucinous lining → benign; epithelial complexity without invasion → borderline; ≥5 mm confluent/expansile or infiltrative/destructive invasion → carcinoma. Always exclude metastasis.",
  ],
  [
    "Endometrioid",
    "Bland spaced glands in fibrous stroma → adenofibroma; crowded glands/simple papillae without invasion → borderline; confluent back-to-back glands or destructive invasion → carcinoma.",
  ],
  [
    "Clear cell",
    "Adenofibromatous glands without papillae/invasion → clear cell adenofibroma/CCBT; characteristic tubulocystic, papillary, and solid patterns with malignant nuclei → CCC.",
  ],
  [
    "Seromucinous",
    "Bland Müllerian admixture → benign; complex hierarchical papillae without invasion → SMBT; no separate seromucinous carcinoma category in current WHO framework.",
  ],
  [
    "Brenner",
    "Bland urothelial nests → benign; complex papillary urothelial proliferation without invasion → borderline; invasive urothelial carcinoma plus benign/borderline Brenner component → malignant.",
  ],
];

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
          Ovarian epithelial pathology
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
function TierCard({
  tier,
  color,
}: {
  tier: Tier;
  color: "emerald" | "amber" | "rose";
}) {
  const styles = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    rose: "border-rose-200 bg-rose-50 text-rose-950",
  };
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className={`mb-4 rounded-xl border p-3 ${styles[color]}`}>
        <div className="text-[11px] font-bold uppercase tracking-[0.18em]">
          {tier.label.split(" (")[0]}
        </div>
        <div className="mt-1 text-sm font-semibold">{tier.label}</div>
      </div>
      <h4 className="mb-2 text-sm font-bold text-slate-800">
        Diagnostic criteria
      </h4>
      <BulletList items={tier.criteria} />
      {tier.ihc && (
        <>
          <h4 className="mb-2 mt-5 text-sm font-bold text-slate-800">
            Immunohistochemistry
          </h4>
          <BulletList items={tier.ihc} />
        </>
      )}
      {tier.pitfalls && (
        <>
          <h4 className="mb-2 mt-5 text-sm font-bold text-slate-800">
            Pitfalls
          </h4>
          <BulletList items={tier.pitfalls} />
        </>
      )}
    </div>
  );
}

export default function OvarianEpithelialTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
            PathologyGPS · Female Genital Tract
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Ovarian Epithelial Tumors
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-600">
            A histotype-based diagnostic guide focused on the distinction
            between benign, borderline, and malignant ovarian epithelial tumors.
            The central diagnostic questions are: What is the epithelial
            lineage? Is the proliferation merely complex, or is there
            unequivocal stromal invasion? Does the tumor fit a specific
            molecular and immunophenotypic profile?
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step 1
              </div>
              <div className="mt-1 font-semibold">Identify histotype</div>
              <div className="mt-1 text-sm text-slate-600">
                Serous · mucinous · endometrioid · clear cell · other
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step 2
              </div>
              <div className="mt-1 font-semibold">Assess architecture</div>
              <div className="mt-1 text-sm text-slate-600">
                Simple lining · epithelial proliferation · stromal invasion
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Step 3
              </div>
              <div className="mt-1 font-semibold">Use targeted IHC</div>
              <div className="mt-1 text-sm text-slate-600">
                Confirm lineage and exclude metastasis or mimics
              </div>
            </div>
          </div>
        </header>

        <Section
          title="The diagnostic hierarchy"
          subtitle="Borderline tumors are not simply 'low-grade carcinomas.' They are epithelial proliferations that lack destructive stromal invasion. Invasion must be assessed in the context of the histotype-specific architecture and cytology."
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200 bg-white p-5">
              <div className="font-bold text-emerald-800">Benign</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Simple or minimally proliferative epithelium, bland nuclei,
                absent/minimal mitoses, and no invasion. Fibromatous stroma
                defines adenofibromatous forms.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <div className="font-bold text-amber-800">Borderline</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Architecturally complex epithelial proliferation with low-grade
                cytology, but no confluent/expansile or destructive stromal
                invasion. Adequate sampling is essential.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-white p-5">
              <div className="font-bold text-rose-800">Malignant</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Histotype-specific malignant cytology and/or unequivocal stromal
                invasion. The pattern and extent of invasion may carry
                prognostic significance.
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="Rapid histotype recognition"
          subtitle="Use these high-yield patterns to orient the differential before applying the benign/borderline/malignant criteria."
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[900px] w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold">Histotype</th>
                  <th className="px-4 py-3 font-semibold">
                    Recognition pattern
                  </th>
                </tr>
              </thead>
              <tbody>
                {quickRules.map((r) => (
                  <tr
                    key={r[0]}
                    className="border-t border-slate-200 align-top"
                  >
                    <td className="px-4 py-3 font-semibold">{r[0]}</td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {r[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {tumors.map((t, i) => (
          <Section
            key={t.family}
            title={`${i + 1}. ${t.family}`}
            subtitle={t.lineage}
          >
            <div className="grid gap-5 xl:grid-cols-3">
              {t.benign ? (
                <TierCard tier={t.benign} color="emerald" />
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
                  <div className="font-bold text-slate-700">
                    Benign category
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Not defined by WHO classification.
                  </p>
                </div>
              )}
              {t.borderline ? (
                <TierCard tier={t.borderline} color="amber" />
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
                  <div className="font-bold text-slate-700">
                    Borderline category
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Not defined by WHO classification.
                  </p>
                </div>
              )}
              {t.malignant ? (
                <TierCard tier={t.malignant} color="rose" />
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
                  <div className="font-bold text-slate-700">
                    Malignant category
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Not defined by WHO classification.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-4 text-base font-bold">
                Differential diagnosis: characteristic findings
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {t.keyDifferential.map((d) => (
                  <div key={d.diagnosis} className="rounded-xl bg-slate-50 p-4">
                    <div className="font-semibold text-slate-800">
                      {d.diagnosis}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {d.findings}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {t.pearls && (
              <div className="mt-4 rounded-2xl border border-teal-200 bg-teal-50 p-5">
                <h3 className="font-bold text-teal-950">Diagnostic pearls</h3>
                <div className="mt-2">
                  <BulletList items={t.pearls} />
                </div>
              </div>
            )}
          </Section>
        ))}

        <Section
          title="Practical work-up and sampling strategy"
          subtitle="The most frequent diagnostic error is under-sampling a large heterogeneous tumor or diagnosing invasion from cytologic atypia alone."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "Gross examination",
                "Document laterality, size, surface involvement, capsule integrity, solid versus cystic components, papillary excrescences, mural nodules, necrosis, and relationship to the ovarian hilum. Bilaterality and smaller size are important warning signs for metastatic mucinous carcinoma.",
              ],
              [
                "Sampling",
                "Extensively sample large multilocular mucinous tumors, solid areas, mural nodules, papillary areas, thickened cyst walls, surface lesions, and interfaces between benign/borderline and suspicious areas. For clear cell adenofibroma/borderline tumor, extensive sampling is specifically required to exclude carcinoma.",
              ],
              [
                "Determine invasion",
                "For serous tumors, distinguish non-invasive implants from destructive infiltrative LGSC. For mucinous carcinoma, identify and measure expansile and infiltrative patterns; each requires at least 5 mm linear extent. For endometrioid tumors, distinguish crowded glands from confluent back-to-back growth or destructive invasion.",
              ],
              [
                "Select IHC by differential",
                "PAX8/WT1/ER for serous lineage; CK7/SATB2/CDX2/PAX8 for mucinous origin; PAX8/ER/PR/β-catenin for endometrioid; napsin A/HNF1β for clear cell; GATA3/TTF1/CD10 for mesonephric-like; p63/GATA3 for Brenner. Interpret panels, not single stains.",
              ],
              [
                "Exclude extraovarian primary",
                "For mucinous tumors, correlate with appendix and GI tract. For HGSC, examine the fallopian tubes, especially fimbria, for STIC or invasive tubal carcinoma. For endometrioid carcinoma, evaluate the endometrium and apply current criteria to synchronous tumors.",
              ],
              [
                "Report precisely",
                "State histotype, grade where applicable, invasion pattern and extent, surface/capsule involvement, implants, laterality, and percentage of each component in mixed carcinoma. Do not use 'microinvasion' for SBT stromal foci under the supplied terminology.",
              ],
            ].map(([h, p]) => (
              <div
                key={h}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold">{h}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Important terminology and classification notes">
          <BulletList
            items={[
              "The supplied WHO material uses American spelling in this page: tumor, tumor cells, edema, and tumor-associated terminology.",
              "Seromucinous carcinoma is not retained as a distinct entity in the WHO fifth/sixth edition framework described in the source. Reclassify according to the actual morphology, most often as endometrioid carcinoma.",
              "For serous borderline tumors, the term 'microinvasion' is no longer recommended for small stromal foci of individual cells or small clusters that are considered biologically inert; describe the finding instead.",
              "For serous borderline tumors, an extraovarian lesion with destructive infiltrative growth is designated low-grade serous carcinoma rather than an invasive implant.",
              "For mucinous carcinoma, primary ovarian origin must be established; bilateral or relatively small tumors and infiltrative invasion should prompt careful exclusion of a gastrointestinal or pancreatobiliary primary.",
              "When a benign or borderline tier is not recognized, it is labeled “Not defined by WHO classification.”",
            ]}
          />
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
          <p>
            <strong>Educational use only.</strong> This page is a diagnostic
            reference and does not replace review of the complete clinical
            history, imaging, gross findings, histologic sampling,
            immunohistochemistry, molecular testing, and current staging
            criteria. Apply the current WHO classification and institutional
            reporting standards. When the source material does not establish a
            required immunophenotype or a benign/borderline counterpart, this
            page explicitly avoids creating one.
          </p>
        </footer>
      </div>
    </main>
  );
}
