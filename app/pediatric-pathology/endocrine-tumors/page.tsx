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
    name: "Follicular Adenoma of the Thyroid",
    group: "Thyroid Tumors",
    clue: "Completely encapsulated, noninvasive follicular-cell neoplasm without papillary thyroid carcinoma-type nuclei.",
    summary:
      "A benign, encapsulated thyroid follicular-cell neoplasm. The diagnosis depends on thorough assessment of the entire tumor–capsule interface to exclude invasion.",
    clinical: [
      "Usually presents in children and adolescents around 11–12 years; mean age is younger than in adults.",
      "Female predominance (approximately 3–4:1).",
      "May arise anywhere in the thyroid; usually a solitary or dominant palpable nodule.",
      "Most patients are euthyroid; compressive symptoms occur in a minority. Hyperfunctioning adenomas cause thyrotoxicosis.",
    ],
    criteria: [
      "A well-circumscribed, encapsulated neoplasm distinct from the surrounding thyroid.",
      "No capsular or lymphovascular invasion after adequate examination of the entire tumor periphery.",
      "No convincing papillary thyroid carcinoma-type nuclear features.",
      "Follicular-cell differentiation is supported by thyroglobulin, TTF1, and PAX8 expression.",
    ],
    histology: [
      "A thin, well-formed fibrous capsule separates the tumor from adjacent thyroid.",
      "Follicular architecture ranges from microfollicular to macrofollicular, often mixed.",
      "Tumor cells are cuboidal with pale to eosinophilic cytoplasm and small, round, regular nuclei.",
      "Mitotic figures are rare; true tumor necrosis and invasion are absent.",
      "Papillary hyperplasia may produce pseudopapillary projections, but nuclei remain polarized, regular, and non-overlapping.",
      "Toxic adenomas may show columnar cells, vacuolated cytoplasm, and scalloped colloid.",
    ],
    ihc: [
      "Tumor cells express thyroglobulin, TTF1, and PAX8.",
      "Calcitonin and PTH are negative.",
      "HBME1 and CD56 may support distinction from malignant follicular lesions; galectin-3 may be positive in benign lesions and is not independently diagnostic.",
      "Loss of nuclear PTEN may prompt evaluation for PTEN hamartoma tumor syndrome in the appropriate setting.",
    ],
    differential: [
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Shows characteristic papillary thyroid carcinoma nuclear features; papillary architecture alone is insufficient. PTC may also be infiltrative or show lymphatic invasion.",
      },
      {
        name: "Cribriform-Morular Thyroid Carcinoma",
        distinction:
          "Shows complex cribriform and morular architecture with aberrant nuclear/cytoplasmic β-catenin, rather than a conventional encapsulated follicular adenoma.",
      },
      {
        name: "Medullary Thyroid Carcinoma",
        distinction:
          "Shows C-cell differentiation with calcitonin, CEA, and neuroendocrine marker expression; amyloid may be present.",
      },
      {
        name: "Spindle Epithelial Tumor with Thymus-Like Elements",
        distinction:
          "Has a biphasic spindle-cell and glandular epithelial pattern, diffuse keratin and p40/p63 expression, and lacks thyroglobulin.",
      },
    ],
    molecular: [
      "No molecular marker reliably distinguishes follicular adenoma from follicular carcinoma, follicular-variant PTC, or NIFTP.",
      "Activating TSHR or GNAS mutations, sometimes with EZH1 mutations, may occur in hyperfunctioning adenomas.",
    ],
    pitfalls: [
      "Examine the entire capsule and tumor–parenchyma interface; minimally invasive follicular carcinoma may be missed in a limited sample.",
      "Distinguishing adenoma from a hyperplastic nodule may be difficult; a discrete capsule and clear demarcation favor adenoma.",
      "A pediatric follicular carcinoma may be a sentinel finding for a hereditary tumor-predisposition syndrome.",
    ],
  },
  {
    name: "Papillary Thyroid Carcinoma",
    group: "Thyroid Tumors",
    clue: "Thyroid follicular-cell tumor with characteristic nuclear features, regardless of its predominant growth pattern.",
    summary:
      "The most common pediatric thyroid malignancy. Pediatric tumors show a relatively high frequency of gene fusions and may present with cervical lymph-node metastases.",
    clinical: [
      "Most often presents during the second decade; adolescent girls are affected more often than boys.",
      "Female predominance is pronounced in adolescents but less evident in younger children.",
      "Arises anywhere in the thyroid; may also occur in ectopic thyroid tissue or a thyroglossal duct cyst.",
      "Typically presents as a thyroid nodule or cervical lymphadenopathy; hoarseness and dysphagia are uncommon presentations.",
    ],
    criteria: [
      "A malignant follicular-cell neoplasm with characteristic papillary thyroid carcinoma nuclear features.",
      "Nuclear enlargement and elongation, chromatin clearing, grooves, and intranuclear cytoplasmic inclusions are key findings.",
      "Architecture may be papillary, follicular, solid/trabecular, or diffuse sclerosing; well-formed papillae are not required.",
      "Assess tumor capsule, lymphovascular invasion, extrathyroidal extension, and cervical lymph nodes.",
      "For an encapsulated follicular-patterned tumor, evaluate the entire tumor periphery for invasion before considering NIFTP.",
    ],
    histology: [
      "Classic PTC has papillae with fibrovascular cores lined by cuboidal to low-columnar cells.",
      "Psammoma bodies, stromal fibrosis, cystic change, and lymphatic invasion may be present.",
      "Follicular-variant PTC is composed of follicles without well-formed papillae but retains PTC-type nuclei.",
      "Diffuse sclerosing PTC diffusely involves one or both lobes and shows numerous papillary foci, psammoma bodies, fibrosis, lymphocytic thyroiditis, and squamous morules.",
      "Solid/trabecular PTC shows predominant solid, nested, insular, or trabecular growth while retaining PTC-type nuclei; necrosis and high mitotic activity are not typical.",
      "Tall-cell PTC has cells at least two to three times taller than wide in at least 30% of the tumor.",
      "Oncocytic PTC shows abundant granular eosinophilic cytoplasm while retaining PTC nuclear features.",
      "Papillary microcarcinoma is defined by a maximum tumor diameter of 10 mm.",
    ],
    ihc: [
      "Tumor cells express thyroglobulin, TTF1, PAX8, and cytokeratins.",
      "Galectin-3 and HBME1 are commonly expressed and may support the diagnosis in selected cases.",
      "Loss of CD56 expression is frequent, particularly in classic PTC.",
      "Calcitonin, CEA, and neuroendocrine markers are generally negative.",
      "VE1 immunohistochemistry can identify BRAF p.V600E-mutated tumors.",
    ],
    differential: [
      {
        name: "Follicular Adenoma of the Thyroid",
        distinction:
          "Lacks PTC-type nuclear features and is noninvasive; papillary hyperplasia in adenoma retains polarized, regular nuclei.",
      },
      {
        name: "Cribriform-Morular Thyroid Carcinoma",
        distinction:
          "Shows cribriform architecture and morules with strong nuclear β-catenin; often associated with APC-related familial adenomatous polyposis.",
      },
      {
        name: "Medullary Thyroid Carcinoma",
        distinction:
          "Shows C-cell phenotype with calcitonin, CEA, and neuroendocrine markers; thyroglobulin is absent.",
      },
      {
        name: "Spindle Epithelial Tumor with Thymus-Like Elements",
        distinction:
          "Shows long spindle-cell fascicles merging with complex glands; diffuse keratin and p40/p63 positivity with thyroglobulin negativity.",
      },
    ],
    molecular: [
      "Gene fusions are more frequent in pediatric PTC than in adult PTC; RET fusions are particularly common, especially after radiation exposure.",
      "Other recurrent fusions involve NTRK1, NTRK3, BRAF, ALK, PAX8, and MET.",
      "BRAF p.V600E is the most common point mutation but is less frequent in children than in adults and is uncommon in the youngest patients.",
      "RAS, PTEN, DICER1, and PIK3CA alterations occur in a subset; these are not uniformly specific for PTC.",
    ],
    pitfalls: [
      "Do not diagnose PTC from papillary architecture alone; evaluate the nuclear features.",
      "Solid/trabecular PTC retains PTC-type nuclei and usually lacks the necrosis and elevated mitotic activity expected in poorly differentiated thyroid carcinoma.",
      "In pediatric thyroid nodules, a fusion or BRAF alteration can strongly support PTC, whereas RAS, PTEN, and DICER1 alterations are less specific.",
    ],
  },
  {
    name: "Cribriform-Morular Thyroid Carcinoma",
    group: "Thyroid Tumors",
    clue: "Cribriform and morular architecture with diffuse nuclear β-catenin; consider APC-associated familial adenomatous polyposis.",
    summary:
      "A distinctive thyroid carcinoma driven by WNT/β-catenin pathway activation. It may be the first manifestation of familial adenomatous polyposis.",
    clinical: [
      "Usually affects young women; most patients are younger than 40 years, but pediatric cases occur.",
      "Marked female predominance.",
      "Often multifocal and bilateral in familial adenomatous polyposis; sporadic cases are usually solitary.",
      "May present as a painless thyroid mass, hoarseness, or dysphagia, or be detected incidentally.",
    ],
    criteria: [
      "A well-circumscribed or locally invasive thyroid neoplasm with complex cribriform architecture and squamoid morules.",
      "Diffuse nuclear β-catenin expression is a hallmark diagnostic feature.",
      "Cribriform, follicular, papillary, trabecular, and solid patterns may be admixed.",
      "Evaluate for APC-associated familial adenomatous polyposis and recommend germline assessment when appropriate.",
    ],
    histology: [
      "Tumors are circumscribed or encapsulated and may be lobulated by fibrous septa.",
      "Cribriform structures consist of anastomosing bars and arches without intervening fibrous stroma.",
      "Follicle-like structures typically lack colloid.",
      "Squamoid morules are whorls of spindle-to-ovoid cells without keratinization.",
      "Papillary, pseudopapillary, trabecular, and solid patterns may be present.",
      "Capsular and vascular invasion can occur; high-grade tumors may show increased mitoses and necrosis.",
    ],
    ihc: [
      "Strong nuclear and cytoplasmic β-catenin staining is characteristic.",
      "Cribriform areas commonly express TTF1, keratins, ER, and PR.",
      "Thyroglobulin is typically negative; PAX8 is absent or only weak/focal.",
      "Morules express CD10, CDX2, CD5, and CK5 and are negative for TTF1, PAX8, thyroglobulin, ER, and PR.",
      "Ki-67 is usually below 5% in conventional tumors; high-grade examples may show substantially higher indices.",
    ],
    differential: [
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Usually shows classic PTC nuclear features and lacks the characteristic morules and diffuse nuclear β-catenin pattern of cribriform-morular carcinoma.",
      },
      {
        name: "Follicular Adenoma of the Thyroid",
        distinction:
          "Lacks the complex cribriform/morular architecture and diffuse nuclear β-catenin expression.",
      },
      {
        name: "Medullary Thyroid Carcinoma",
        distinction:
          "Shows calcitonin-positive C-cell differentiation and may contain amyloid; cribriform-morular carcinoma is calcitonin-negative.",
      },
      {
        name: "Spindle Epithelial Tumor with Thymus-Like Elements",
        distinction:
          "Shows spindle-cell fascicles merging with complex glands and diffuse keratin/p40/p63 expression rather than cribriform growth with morules and nuclear β-catenin.",
      },
    ],
    molecular: [
      "Germline APC pathogenic variants underlie familial cases; somatic APC second hits drive individual tumors.",
      "Sporadic tumors also show WNT/β-catenin pathway activation.",
      "BRAF alterations are absent in this entity.",
    ],
    pitfalls: [
      "Do not assume every case is sporadic; identify the association with familial adenomatous polyposis.",
      "Morules have a different immunophenotype from the cribriform component and should be interpreted separately.",
    ],
  },
  {
    name: "Medullary Thyroid Carcinoma",
    group: "Thyroid Tumors",
    clue: "Invasive parafollicular C-cell neoplasm expressing calcitonin, often with amyloid stroma.",
    summary:
      "A malignant thyroid C-cell neoplasm. Pediatric cases are frequently hereditary and may be the presenting manifestation of MEN2A or MEN2B.",
    clinical: [
      "Can occur from infancy through adolescence; MEN2B-associated disease may arise during the first year of life.",
      "Overall sex distribution is approximately equal.",
      "Usually a solitary thyroid nodule when sporadic; familial tumors are often bilateral and multicentric.",
      "May present with a thyroid nodule or cervical lymphadenopathy; advanced disease can cause diarrhea, flushing, or ectopic hormone syndromes.",
    ],
    criteria: [
      "An invasive neoplasm showing parafollicular C-cell differentiation.",
      "Confirm calcitonin expression and correlate with serum calcitonin when appropriate.",
      "Amyloid stroma supports the diagnosis but is not obligatory.",
      "In hereditary cases, assess for associated primary C-cell hyperplasia and multifocal/bilateral disease.",
      "Recommend germline RET testing and genetic counseling for every pediatric patient.",
    ],
    histology: [
      "Growth patterns include solid, trabecular, and insular arrangements; numerous variant patterns may occur.",
      "Tumor cells may be epithelioid, spindle-shaped, plasmacytoid, or small, with finely granular cytoplasm.",
      "Nuclear atypia may be variable, but overt anaplasia is usually absent.",
      "Amyloid stroma is present in approximately 90% of cases.",
      "Familial tumors are often small, bilateral, and multicentric, with associated primary C-cell hyperplasia.",
      "Invasive growth beyond the follicular basement membrane, with stromal sclerosis or amyloid, distinguishes carcinoma from C-cell hyperplasia.",
    ],
    ihc: [
      "Tumor cells express calcitonin, CGRP, synaptophysin, chromogranins, and CEA.",
      "Keratins, TTF1, and PAX8 are typically positive.",
      "Calcitonin may be absent in a small subset of tumors, including some small-cell examples; correlate with other markers and morphology.",
    ],
    differential: [
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Shows PTC-type nuclear features and thyroglobulin expression; MTC is calcitonin- and CEA-positive with neuroendocrine differentiation.",
      },
      {
        name: "Cribriform-Morular Thyroid Carcinoma",
        distinction:
          "Shows morules and diffuse nuclear β-catenin; it lacks the C-cell marker profile of MTC.",
      },
      {
        name: "Follicular Adenoma of the Thyroid",
        distinction:
          "Shows follicular-cell differentiation with thyroglobulin expression and no invasive C-cell neoplasm.",
      },
      {
        name: "Parasympathetic Paraganglioma",
        distinction:
          "Usually lacks keratins and CEA and has sustentacular cells; MTC is epithelial and typically expresses calcitonin, CEA, TTF1, and keratins.",
      },
    ],
    molecular: [
      "Germline activating RET variants cause MEN2A, MEN2B, and familial medullary thyroid carcinoma.",
      "RET p.M918T is strongly associated with MEN2B and very early, aggressive disease.",
      "Somatic RET mutations occur in a subset of apparently sporadic tumors; germline testing is required to establish hereditary status.",
    ],
    pitfalls: [
      "A presumed sporadic pediatric MTC may still carry a germline RET pathogenic variant.",
      "Interpret calcitonin carefully in infants because physiologic serum levels are higher during the first two years of life.",
    ],
  },
  {
    name: "Spindle Epithelial Tumor with Thymus-Like Elements",
    group: "Thyroid Tumors",
    clue: "Biphasic tumor with spindle-cell fascicles merging into complex glandular structures; diffuse keratin and p40/p63.",
    summary:
      "A rare, slow-growing malignant tumor of the thyroid or mediastinum with a characteristic biphasic epithelial architecture and potential for late metastasis.",
    clinical: [
      "Predominantly affects children and young adults; median age is approximately 19 years.",
      "Slight male predominance.",
      "Usually arises in the thyroid; rarely occurs in the lateral neck or superior mediastinum.",
      "Typically presents as a painless thyroid mass; cervical nodal disease may be present, and distant metastases can occur after long latency.",
    ],
    criteria: [
      "A biphasic neoplasm composed of spindle-cell fascicles merging with complex glandular elements.",
      "Spindle cells are cytologically bland in most cases.",
      "Reticulated or sieve-like areas may be present.",
      "Diffuse keratin expression, particularly high-molecular-weight keratins, supports epithelial differentiation.",
      "Absence of SS18 or SS18L1 rearrangement helps exclude synovial sarcoma in selected cases.",
    ],
    histology: [
      "Tumor is highly cellular and vaguely lobulated by fibrous septa.",
      "Long interlacing or reticulated spindle-cell fascicles merge imperceptibly with tubulopapillary and gland-like structures.",
      "Glandular elements may form tubules, papillae, glomeruloid structures, cords, or cystic spaces.",
      "Spindle cells have elongated nuclei, fine chromatin, inconspicuous nucleoli, and scant cytoplasm.",
      "Mitoses are usually rare; necrosis and increased mitotic activity are uncommon but may occur.",
      "Mucinous or ciliated glandular cells and focal squamous differentiation may be present.",
    ],
    ihc: [
      "Both spindle and glandular components show diffuse pancytokeratin expression.",
      "High-molecular-weight cytokeratins are often more extensive than low-molecular-weight keratins.",
      "p40 and/or p63 are commonly positive.",
      "Thyroglobulin, calcitonin, CEA, TTF1, S100, and CD5 are negative.",
    ],
    differential: [
      {
        name: "Synovial Sarcoma",
        distinction:
          "Usually has a higher-grade spindle-cell component and is defined by an SS18::SSX fusion; SETTLE lacks SS18/SS18L1 rearrangement and shows its characteristic complex glandular component.",
      },
      {
        name: "Ectopic Type A Thymoma",
        distinction:
          "Shows jigsaw-puzzle lobulation, haphazard spindle fascicles, more frequent pericytomatous vessels, and less complex glandular elements.",
      },
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Shows follicular-cell nuclear features and thyroglobulin expression; SETTLE lacks thyroglobulin and has spindle-cell/glandular biphasic architecture.",
      },
      {
        name: "Medullary Thyroid Carcinoma",
        distinction:
          "Expresses calcitonin and neuroendocrine markers; SETTLE is keratin-positive but calcitonin- and neuroendocrine-marker negative.",
      },
      {
        name: "Follicular Adenoma of the Thyroid",
        distinction:
          "Is an encapsulated follicular-cell neoplasm with thyroglobulin expression and no biphasic spindle-cell/glandular architecture.",
      },
      {
        name: "Cribriform-Morular Thyroid Carcinoma",
        distinction:
          "Shows cribriform and morular architecture with diffuse nuclear β-catenin rather than the biphasic spindle-cell/glandular pattern of SETTLE.",
      },
    ],
    molecular: [
      "SETTLE lacks the SS18 or SS18L1 rearrangements characteristic of synovial sarcoma.",
      "The GTF2I mutation characteristic of type A/AB thymoma is absent.",
      "Rare cases have reported KRAS, NRAS, SMYD1, or KMT2C mutations; these are not defining diagnostic alterations.",
    ],
    pitfalls: [
      "Late metastases may occur; long-term clinical follow-up is important.",
      "Do not mistake extracellular metachromatic material on cytology for amyloid.",
    ],
  },
  {
    name: "Parathyroid Adenoma",
    group: "Parathyroid Tumors",
    clue: "Enlarged, hypercellular, stromal fat-depleted parathyroid tissue in a patient with primary hyperparathyroidism.",
    summary:
      "A benign parathyroid epithelial neoplasm. Pediatric parathyroid adenomas warrant consideration of hereditary hyperparathyroidism syndromes.",
    clinical: [
      "True adenomas are more typical in older adolescents; infancy more often raises consideration of calcium-sensing receptor disorders.",
      "Childhood hyperparathyroidism affects both sexes approximately equally.",
      "May be orthotopic or ectopic, including thyroid, mediastinum, retroesophageal space, and thymus; multigland disease is relatively common.",
      "Children are more likely than adults to present symptomatically with marked hypercalcemia and hypercalciuria.",
    ],
    criteria: [
      "Enlarged, hypercellular parathyroid tissue with depletion or absence of stromal fat.",
      "A rim of normal or compressed, atrophic parathyroid tissue supports adenoma over hyperplasia.",
      "A marked postoperative fall in PTH (greater than 50%) is a desirable clinical correlate.",
      "Malignancy requires unequivocal invasive growth and/or vascular space invasion; atypia alone is insufficient.",
      "A parathyroid adenoma or hyperplasia in a child should prompt genetic evaluation.",
    ],
    histology: [
      "Most tumors are composed predominantly of chief cells with reduced or absent stromal fat.",
      "Oxyphil or water-clear cell predominance may occur.",
      "A rim of normal or suppressed parathyroid tissue may be present at the periphery.",
      "CDC73-associated tumors may show sheet-like growth, eosinophilic cells, perinuclear clearing, nuclear enlargement, and arborizing or staghorn vessels.",
      "Biopsy-related change or renal secondary hyperplasia may cause fibrosis and reactive atypia that mimic invasion.",
    ],
    ihc: [
      "PTH and GATA3 support parathyroid differentiation.",
      "Loss of parafibromin expression supports CDC73 pathway inactivation and should prompt evaluation for hyperparathyroidism-jaw tumor syndrome.",
      "Parafibromin immunohistochemistry is not completely sensitive or specific and does not replace germline testing.",
    ],
    differential: [
      {
        name: "Parathyroid Hyperplasia",
        distinction:
          "Often involves multiple glands and lacks a discrete adenoma with a rim of compressed or normal parathyroid tissue; clinical and operative correlation is essential.",
      },
      {
        name: "Parathyroid Carcinoma",
        distinction:
          "Requires unequivocal invasive growth and/or vascular space invasion; cytologic atypia or fibrosis alone is insufficient.",
      },
      {
        name: "Follicular Adenoma of the Thyroid",
        distinction:
          "May mimic parathyroid adenoma architecturally but expresses thyroglobulin, TTF1, and PAX8 rather than PTH; thyroid follicles contain colloid.",
      },
    ],
    molecular: [
      "Germline CDC73 variants are associated with hyperparathyroidism-jaw tumor syndrome; parafibromin loss is a useful screening clue.",
      "MEN1 and MEN4 are important hereditary associations; somatic alterations in CCND1, MEN1, and CDC73 have been reported.",
      "Molecular testing does not replace morphologic assessment or germline evaluation.",
    ],
    pitfalls: [
      "Do not diagnose parathyroid carcinoma on atypia or fibrosis alone.",
      "A single gland may be difficult to classify as adenoma versus hyperplasia without clinical and operative correlation.",
    ],
  },
  {
    name: "Adrenal Cortical Adenoma",
    group: "Adrenal Cortical Tumors",
    clue: "Well-circumscribed, noninvasive cortical neoplasm with low mitotic activity and no tumor necrosis.",
    summary:
      "A benign adrenal cortical neoplasm. Pediatric adrenal cortical tumors are strongly associated with germline predisposition, particularly TP53 and chromosome 11p15 abnormalities.",
    clinical: [
      "Pediatric cases cluster in the first five years of life, with a smaller adolescent peak.",
      "No consistent sex predilection is emphasized.",
      "Usually a unilateral adrenal mass.",
      "Often presents with hormone excess, especially virilization; cortisol, estrogen, or aldosterone excess may also occur. Nonfunctioning tumors are more common in adolescents.",
    ],
    criteria: [
      "Tumor is usually small and well circumscribed, without extra-adrenal extension or vascular invasion.",
      "No capsular invasion, tumor necrosis, or atypical mitoses.",
      "Mitotic count is generally no more than 3 mitoses/mm² in 5 mm².",
      "Tumor weight below 400 g and size below 105 mm support adenoma but are not absolute criteria.",
      "Integrate all morphologic parameters; tumors with an intermediate number of adverse features may be of uncertain malignant potential.",
    ],
    histology: [
      "Nested or trabecular architecture with a mixture of lipid-rich and lipid-poor cortical cells.",
      "Nuclei are relatively small and uniform.",
      "Mitotic activity is absent or low.",
      "True tumor necrosis and invasive growth are absent.",
      "Reticulin framework is generally preserved.",
    ],
    ihc: [
      "Tumor cells express SF1, α-inhibin, Melan-A, and synaptophysin.",
      "Chromogranin is negative.",
      "p53 usually shows a wild-type pattern with weak nuclear staining.",
      "Ki-67 below 10% supports a benign clinical course but should not be used in isolation.",
    ],
    differential: [
      {
        name: "Adrenal Cortical Carcinoma",
        distinction:
          "Shows a constellation of adverse features, including invasion, necrosis, atypical mitoses, elevated mitotic activity, and often increased Ki-67; no single feature should be interpreted alone.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Shows nested chromaffin-cell architecture and neuroendocrine markers; adrenal cortical tumors are SF1-positive and chromogranin-negative.",
      },
    ],
    molecular: [
      "Germline TP53 alterations (Li-Fraumeni syndrome) and chromosome 11p15 abnormalities with IGF2 overexpression are important pediatric associations.",
      "Somatic CTNNB1 and ATRX alterations may occur during tumor progression.",
    ],
    pitfalls: [
      "Pediatric adrenal cortical tumors should be evaluated using pediatric criteria such as the Wieneke/AFIP algorithm rather than adult criteria alone.",
      "Some histologically malignant-appearing tumors may have favorable outcomes after complete resection; stage is a major prognostic determinant.",
      "Genetic counseling and testing are recommended for pediatric adrenal cortical tumors.",
    ],
  },
  {
    name: "Adrenal Cortical Carcinoma",
    group: "Adrenal Cortical Tumors",
    clue: "Adrenal cortical malignancy supported by invasion, necrosis, atypical mitoses, and increased proliferative activity.",
    summary:
      "A rare but important pediatric malignancy with a strong association with germline TP53 and 11p15 abnormalities. Hormone secretion frequently leads to early clinical detection.",
    clinical: [
      "Most often occurs in children younger than five years, with a second peak during adolescence.",
      "No consistent sex predilection is emphasized.",
      "Arises in the adrenal cortex, usually as a unilateral mass.",
      "Commonly causes virilization; Cushing syndrome, feminization, and mineralocorticoid excess may occur. Nonfunctioning tumors tend to be larger at detection.",
    ],
    criteria: [
      "Assess tumor size and weight, extra-adrenal extension, vena cava and venous invasion, capsular invasion, necrosis, mitotic count, and atypical mitoses.",
      "Invasion, tumor necrosis, and atypical mitoses are major adverse findings.",
      "Mitotic count greater than 3 mitoses/mm² in 5 mm² supports carcinoma.",
      "Tumor weight above 400 g and size above 105 mm support carcinoma but are not sufficient alone.",
      "Ki-67 above 15% correlates with malignant behavior; interpret with morphology and stage.",
    ],
    histology: [
      "Architecture becomes disorganized, with loss of the normal reticulin framework.",
      "Tumor cells may show enlarged, hyperchromatic, and markedly pleomorphic nuclei.",
      "Mitotic activity is increased and atypical mitoses may be present.",
      "Tumor necrosis is common.",
      "Oncocytic and myxoid changes may occur.",
    ],
    ihc: [
      "Tumor cells express SF1, α-inhibin, Melan-A, and synaptophysin.",
      "Chromogranin is negative.",
      "Aberrant p53 staining (diffuse strong expression or complete loss) correlates with TP53 mutation.",
      "Ki-67 above 15% correlates with malignant behavior but is not a stand-alone criterion.",
    ],
    differential: [
      {
        name: "Adrenal Cortical Adenoma",
        distinction:
          "Lacks invasion, tumor necrosis, atypical mitoses, and substantial proliferative activity; assess the complete tumor and apply pediatric criteria.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Shows chromaffin-cell morphology and neuroendocrine markers; adrenal cortical carcinoma is SF1-positive and typically chromogranin-negative.",
      },
    ],
    molecular: [
      "Germline TP53 pathogenic variants are a major association, particularly in Li-Fraumeni syndrome.",
      "Chromosome 11p15 abnormalities and IGF2 overexpression are frequent in pediatric adrenal cortical tumors.",
      "TP53 and ATRX alterations are associated with adverse biological behavior in molecular subgroups.",
    ],
    pitfalls: [
      "Do not apply adult size, weight, or mitotic thresholds to pediatric tumors without considering the pediatric algorithm.",
      "Stage is the strongest predictor of outcome; completely resected localized tumors may have a favorable course despite adverse histology.",
    ],
  },
  {
    name: "Sympathetic Paraganglioma",
    group: "Pheochromocytoma and Paraganglioma",
    clue: "Extra-adrenal sympathetic paraganglionic tumor with Zellballen architecture and neuroendocrine phenotype.",
    summary:
      "A neuroendocrine neoplasm arising from sympathetic paraganglia. Correctly establishing an extra-adrenal location is important because it has genetic and clinical implications.",
    clinical: [
      "Pediatric cases typically present in the second decade, with reported median ages around 12–13 years.",
      "Sex distribution is approximately equal in children.",
      "Usually arises in the abdomen, retroperitoneum, pelvis, or thorax; cervical sympathetic-chain sites are less common.",
      "May be catecholamine-secreting and present with sustained hypertension, headache, diaphoresis, or an abdominal mass.",
    ],
    criteria: [
      "A neuroendocrine neoplasm with nested (Zellballen) architecture.",
      "Tumor cells have stippled neuroendocrine chromatin.",
      "Establish that the tumor is extra-adrenal and arises in sympathetic paraganglia.",
      "Use neuroendocrine immunohistochemistry and sustentacular-cell markers to support the diagnosis.",
      "Consider germline testing, particularly for SDHB and VHL alterations.",
    ],
    histology: [
      "Small nests of chief cells are separated by delicate fibrovascular stroma.",
      "Tumor cells have basophilic, amphophilic, or clear cytoplasm and stippled to coarse chromatin.",
      "Marked nuclear pleomorphism may occur but is not independently predictive of metastatic behavior.",
      "Necrosis and increased mitoses are uncommon.",
      "Capsular extension and lymphovascular invasion may be present.",
    ],
    ihc: [
      "Chief cells express chromogranin, synaptophysin, and INSM1.",
      "Tyrosine hydroxylase, DBH, and GATA3 are commonly positive.",
      "S100 and SOX10 highlight sustentacular cells.",
      "Keratin is generally negative.",
      "Loss of granular cytoplasmic SDHB staining supports an SDH-deficient tumor; SDHA loss may indicate SDHA alteration.",
    ],
    differential: [
      {
        name: "Parasympathetic Paraganglioma",
        distinction:
          "Arises in head and neck parasympathetic-associated paraganglia and is usually nonfunctional; sympathetic tumors more often arise in the thoracoabdominal compartment and secrete catecholamines.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Has the same basic morphology and immunophenotype but arises in the adrenal medulla; confirm the anatomic site.",
      },
      {
        name: "Composite Pheochromocytoma/Paraganglioma",
        distinction:
          "Requires a second, well-developed neural or nerve-sheath tumor component comprising at least 5% of the tumor.",
      },
    ],
    molecular: [
      "Germline pathogenic variants are common in pediatric cases; SDHB and VHL are frequent associations.",
      "SDHB immunohistochemistry is a useful screening surrogate for SDH-pathway alterations.",
    ],
    pitfalls: [
      "Do not use benign or malignant terminology; all paragangliomas have metastatic potential.",
      "Do not classify a tumor as pheochromocytoma without confirming adrenal medullary origin.",
      "Fine-needle aspiration is generally avoided because of hemorrhage and catecholamine-related hypertensive crisis risk.",
    ],
  },
  {
    name: "Parasympathetic Paraganglioma (Head and Neck Paraganglioma)",
    group: "Pheochromocytoma and Paraganglioma",
    clue: "Zellballen-pattern tumor associated with carotid body, jugulotympanic region, or vagal paraganglia.",
    summary:
      "A head and neck paraganglionic neoplasm, usually nonfunctional. Pediatric cases have a strong hereditary association, particularly with SDH gene variants.",
    clinical: [
      "Pediatric cases may present in childhood or adolescence; a reported pediatric series had a median age of approximately 13 years.",
      "Female predominance is reported.",
      "Common sites are carotid body, jugulotympanic region, and vagal paraganglia; laryngeal and other head and neck sites are less common.",
      "Usually presents as an asymptomatic mass; carotid body tumors cause a neck mass, jugulotympanic tumors cause pulsatile tinnitus or hearing symptoms, and vagal tumors may cause cranial nerve deficits.",
      "Only a small minority are biochemically functional, often producing dopamine.",
    ],
    criteria: [
      "A neuroendocrine neoplasm with nested architecture and round nuclei with stippled chromatin.",
      "Establish the anatomic association with parasympathetic-related head and neck paraganglia.",
      "Confirm neuroendocrine differentiation and assess epithelial markers in the differential diagnosis.",
      "Consider SDHB immunohistochemistry and germline evaluation, particularly for SDHD and SDHB.",
    ],
    histology: [
      "Carotid body tumors show prominent Zellballen nests separated by delicate, sometimes cavernous, vascular channels.",
      "Chief cells range from epithelioid to spindled and have amphophilic to eosinophilic cytoplasm.",
      "Nuclei show hyperchromatic, stippled chromatin.",
      "Sustentacular cells may be inconspicuous on H&E.",
      "Necrosis, pleomorphism, or local invasion may occur and do not independently establish aggressive behavior.",
      "Glands and mucin are absent.",
    ],
    ihc: [
      "Chromogranin and synaptophysin are variably expressed; INSM1 may be positive when chromogranin is negative.",
      "GATA3 is useful in distinguishing paraganglioma from many epithelial neuroendocrine tumors.",
      "Tyrosine hydroxylase may be focal or absent, especially in nonfunctional tumors.",
      "S100 and SOX10 highlight sustentacular cells.",
      "Keratins are generally negative.",
    ],
    differential: [
      {
        name: "Sympathetic Paraganglioma",
        distinction:
          "Arises in thoracoabdominal sympathetic paraganglia and is more often catecholamine-secreting; head and neck parasympathetic tumors are usually nonfunctional.",
      },
      {
        name: "Pheochromocytoma",
        distinction:
          "Arises in the adrenal medulla and has a similar Zellballen pattern; anatomic localization distinguishes the entities.",
      },
      {
        name: "Medullary Thyroid Carcinoma",
        distinction:
          "Usually expresses calcitonin, CEA, TTF1, and keratins; paraganglioma is typically keratin-negative and GATA3-positive.",
      },
      {
        name: "Epithelial Neuroendocrine Tumor",
        distinction:
          "Usually expresses keratins; paraganglioma is generally keratin-negative and often has a sustentacular-cell network.",
      },
      {
        name: "Composite Pheochromocytoma/Paraganglioma",
        distinction:
          "Requires a second, well-developed neural or nerve-sheath tumor component comprising at least 5% of the tumor.",
      },
    ],
    molecular: [
      "Hereditary predisposition is common; SDHD, SDHB, and SDHC are frequent susceptibility genes.",
      "SDHB loss supports an SDH-deficient pathway and is associated with increased metastatic risk.",
    ],
    pitfalls: [
      "Do not use the terms glomus tumor or chemodectoma as diagnostic names.",
      "Metastasis may occur after a long latency, particularly in SDHB-associated disease; lifelong surveillance may be needed.",
      "Avoid fine-needle aspiration when possible because of hemorrhage and catecholamine-related risk.",
    ],
  },
  {
    name: "Pheochromocytoma",
    group: "Pheochromocytoma and Paraganglioma",
    clue: "Adrenal medullary chromaffin-cell neoplasm with Zellballen architecture and neuroendocrine marker expression.",
    summary:
      "An adrenal medullary neuroendocrine neoplasm. Pediatric cases have a high rate of germline susceptibility and are frequently bilateral or multifocal.",
    clinical: [
      "Usually presents in the second decade; reported pediatric median ages range from 11 to 16 years.",
      "A slight male predominance is reported in some pediatric series.",
      "Arises in the adrenal medulla; bilateral and multifocal tumors are relatively common in hereditary disease.",
      "Sustained hypertension is the most common presenting sign, often with headache and diaphoresis; abdominal pain, palpitations, tremor, or incidental detection may occur.",
    ],
    criteria: [
      "A neuroendocrine neoplasm arising in the adrenal medulla with nested architecture.",
      "Tumor cells have basophilic to amphophilic granular cytoplasm and neuroendocrine marker expression.",
      "Keratin negativity supports the diagnosis in selected cases.",
      "Assess mitotic count and Ki-67 index for risk stratification, but no single histologic feature reliably predicts metastasis.",
      "Consider germline testing in all pediatric patients; SDHB immunohistochemistry and other pathway markers can guide triage.",
    ],
    histology: [
      "Most tumors show a nested Zellballen pattern; trabecular or diffuse patterns may occur.",
      "Chief cells resemble normal chromaffin cells and have granular basophilic to amphophilic cytoplasm.",
      "Clear-cell change, intracytoplasmic vacuoles, and eosinophilic cytoplasm may occur.",
      "Adrenal medullary hyperplasia may accompany hereditary disease; medullary tissue extending into the alae or involving more than one third of gland thickness supports hyperplasia.",
      "Metastasis is defined by tumor at sites where normal paraganglia are absent, such as lymph nodes or bone.",
    ],
    ihc: [
      "Tumor cells express chromogranin A, synaptophysin, INSM1, tyrosine hydroxylase, DBH, and GATA3 in most cases.",
      "S100 and SOX10 highlight sustentacular cells.",
      "Keratin is generally negative.",
      "Loss of granular cytoplasmic SDHB staining supports SDH deficiency; SDHA loss correlates with SDHA mutation.",
      "Membranous CAIX may support VHL-associated disease; 2-succinocysteine and fumarate hydratase can support FH-pathway evaluation.",
    ],
    differential: [
      {
        name: "Sympathetic Paraganglioma",
        distinction:
          "Has similar morphology and immunophenotype but is extra-adrenal; confirm adrenal medullary origin for pheochromocytoma.",
      },
      {
        name: "Parasympathetic Paraganglioma",
        distinction:
          "Arises in head and neck paraganglia and is usually nonfunctional; pheochromocytoma is adrenal and commonly catecholamine-secreting.",
      },
      {
        name: "Adrenal Cortical Adenoma",
        distinction:
          "Shows cortical differentiation with SF1, inhibin, and Melan-A expression; pheochromocytoma expresses neuroendocrine markers and lacks SF1.",
      },
      {
        name: "Adrenal Cortical Carcinoma",
        distinction:
          "Shows cortical differentiation and may have necrosis, invasion, and atypical mitoses; pheochromocytoma has Zellballen architecture and neuroendocrine phenotype.",
      },
      {
        name: "Composite Pheochromocytoma/Paraganglioma",
        distinction:
          "Contains a second well-developed neural or nerve-sheath component, not merely scattered ganglion cells or limited Schwannian stroma.",
      },
    ],
    molecular: [
      "Germline pathogenic variants are identified in a large proportion of pediatric cases; common genes include VHL, SDHB/SDHD, RET, NF1, and MAX.",
      "Pseudohypoxia-pathway alterations (including SDHx, VHL, FH, and EPAS1) and kinase-signaling alterations (including RET and NF1) define major molecular groups.",
      "SDHB loss by immunohistochemistry is a useful surrogate for SDH-pathway alteration.",
      "Germline testing is recommended because apparently sporadic pediatric tumors may carry pathogenic variants.",
    ],
    pitfalls: [
      "Do not diagnose metastasis solely from a liver or lung lesion; primary paraganglia can occur at unusual sites.",
      "Do not use PASS, GAPP, or other adult scoring systems as validated pediatric prognostic tools.",
      "Avoid aspiration biopsy because catecholamine release can precipitate a life-threatening hypertensive crisis.",
    ],
  },
  {
    name: "Composite Pheochromocytoma/Paraganglioma",
    group: "Pheochromocytoma and Paraganglioma",
    clue: "Pheochromocytoma or paraganglioma with a second, morphologically distinct neural or nerve-sheath tumor component.",
    summary:
      "A rare composite neoplasm combining a chromaffin-cell tumor with a developmentally related neural tumor, most often neuroblastoma in pediatric patients.",
    clinical: [
      "Extremely rare; only a small minority of reported cases occur in children.",
      "Slight female predominance is reported in pediatric cases.",
      "Most pediatric examples are adrenal composite pheochromocytomas; extra-adrenal composite paragangliomas may occur in the retroperitoneum or mediastinum.",
      "Often functional, with hypertension, headache, diaphoresis, or an abdominal mass; VIP secretion may cause watery diarrhea, hypokalemia, and achlorhydria.",
    ],
    criteria: [
      "Both a recognizable pheochromocytoma/paraganglioma component and a second developmentally related neural or nerve-sheath tumor component must be present.",
      "Each component should show convincing cytologic and architectural features of its respective tumor type.",
      "The minor component should constitute at least 5% of tumor volume.",
      "A few isolated ganglion cells or limited Schwannian stroma in an otherwise typical pheochromocytoma/paraganglioma does not qualify.",
      "Sample the tumor extensively to identify and characterize each component.",
    ],
    histology: [
      "The chromaffin component shows conventional Zellballen architecture.",
      "The neural component may be neuroblastoma, ganglioneuroblastoma, ganglioneuroma, or a peripheral nerve sheath tumor.",
      "Neuroblastoma shows immature neuroblastic cells, focal rosette-like arrangements, and neuropil.",
      "Ganglioneuroma/ganglioneuroblastoma shows Schwannian stroma and maturing or mature ganglion cells.",
      "A malignant peripheral nerve sheath component may show streaming fascicles of elongated cells in myxoid stroma.",
      "Metastases may contain one or both components.",
    ],
    ihc: [
      "The pheochromocytoma/paraganglioma component expresses neuroendocrine markers.",
      "Sustentacular cells in the chromaffin component may express S100 and GFAP.",
      "The neural component is characterized with lineage-appropriate neuronal, Schwannian, or nerve-sheath markers.",
      "VIP immunoreactivity may be demonstrable in tumors associated with WDHA syndrome.",
    ],
    differential: [
      {
        name: "Pheochromocytoma",
        distinction:
          "Lacks a second well-developed neural or nerve-sheath tumor component; scattered ganglion cells or limited Schwannian stroma are insufficient.",
      },
      {
        name: "Sympathetic Paraganglioma",
        distinction:
          "Is an extra-adrenal chromaffin tumor without a qualifying second neural component.",
      },
      {
        name: "Parasympathetic Paraganglioma",
        distinction:
          "Arises in head and neck paraganglia and lacks a distinct second neural tumor component.",
      },
    ],
    molecular: [
      "Germline testing is indicated because any pheochromocytoma/paraganglioma component warrants evaluation for hereditary susceptibility.",
      "NF1, MAX, and SDHB alterations have been reported in composite tumors.",
      "MYCN amplification may be present in the neuroblastoma component and should be assessed in that component when clinically indicated.",
    ],
    pitfalls: [
      "Do not overcall a composite tumor based on a few ganglion cells or scant Schwannian stroma.",
      "Metastatic deposits may contain only one of the two components; sample and characterize metastatic lesions when feasible.",
    ],
  },
  {
    name: "Other Neuroendocrine Tumors",
    group: "Epithelial Neuroendocrine Tumors",
    clue: "Well-differentiated epithelial neuroendocrine neoplasm; classify by site, differentiation, grade, and hormone/cell type.",
    summary:
      "A site-diverse group of well-differentiated epithelial neuroendocrine neoplasms. Pediatric examples most often involve the gastrointestinal tract and pancreas, but may arise in other organs.",
    clinical: [
      "Most gastroenteropancreatic cases present in adolescence, with an average age of approximately 12–15 years.",
      "A female predominance is reported for pediatric gastroenteropancreatic NETs.",
      "Most commonly arise in the gut and pancreas; lung, thymus, pituitary, thyroid, parathyroid, gonads, and teratomas are additional sites.",
      "Symptoms depend on site and hormone production: obstruction or intussusception, hypoglycemia (insulinoma), gastrin-related symptoms, carcinoid syndrome, or rarely ectopic ACTH-related Cushing syndrome.",
    ],
    criteria: [
      "A well-differentiated epithelial neoplasm with neuroendocrine morphology.",
      "Confirm epithelial nature and neuroendocrine differentiation by immunohistochemistry.",
      "Grade as G1, G2, or G3 using site-appropriate mitotic count and Ki-67 criteria.",
      "Assess site-specific hormone production and cell lineage where relevant.",
      "Examine adjacent non-neoplastic parenchyma or mucosa for hyperplasia, dysplasia, multifocal microtumors, or syndromic changes.",
      "Use the site-specific AJCC/UICC staging system.",
    ],
    histology: [
      "Most tumors show nested or insular architecture composed of polygonal cells.",
      "Nuclei are round to oval with finely stippled salt-and-pepper chromatin.",
      "Peripheral palisading may be present.",
      "Gastric type 2 enterochromaffin-like cell NETs are common in children; classify with clinical context, serum gastrin, and background mucosal changes.",
      "Ampullary duodenal NETs may show tubuloacinar architecture and psammoma bodies, often with somatostatin-producing D cells.",
      "Ileal NETs show enterochromaffin-cell differentiation and may have brightly eosinophilic cytoplasm.",
      "Rectal NETs often show trabecular architecture and infiltrate mucosa and submucosa.",
      "Pancreatic NETs may be functional; insulinoma is an important pediatric functional subtype.",
      "Pulmonary and thymic NETs may be spindle-cell or polygonal; atypical carcinoid is assessed using mitotic activity and necrosis.",
    ],
    ihc: [
      "General neuroendocrine markers include INSM1, synaptophysin, and chromogranins.",
      "Keratins support epithelial differentiation and help distinguish NET from paraganglioma.",
      "Gastric ECL-cell tumors express VMAT2 and histidine decarboxylase.",
      "Ileal enterochromaffin-cell tumors may express serotonin, substance P, CDX2, and VMAT1.",
      "Rectal L-cell tumors may express glicentin, GLP-1/GLP-2, pancreatic polypeptide, PYY, SATB2, and prostatic acid phosphatase.",
      "Pancreatic NETs may express ISL1, PDX1, PAX6, polyclonal PAX8, CDX2, and site-appropriate hormones.",
      "Pulmonary NETs may express TTF1; hormone markers vary with site and cell type.",
    ],
    differential: [
      {
        name: "Pheochromocytoma",
        distinction:
          "A chromaffin-cell neoplasm with Zellballen architecture, sustentacular cells, GATA3/tyrosine hydroxylase expression, and usually absent keratin; epithelial NETs are keratin-positive.",
      },
      {
        name: "Sympathetic Paraganglioma",
        distinction:
          "Is an extra-adrenal neural crest-derived paraganglionic neoplasm, usually keratin-negative; epithelial NETs show epithelial differentiation.",
      },
      {
        name: "Parasympathetic Paraganglioma",
        distinction:
          "Usually arises in head and neck paraganglia and is keratin-negative; GATA3 and sustentacular cells support paraganglioma.",
      },
      {
        name: "Pancreatoblastoma",
        distinction:
          "Shows acinar differentiation and characteristic squamoid nests; trypsin, chymotrypsin, and BCL10 support acinar lineage.",
      },
      {
        name: "Pancreatic Acinar Cell Carcinoma",
        distinction:
          "Shows acinar architecture and zymogen granules with trypsin, chymotrypsin, and BCL10 expression.",
      },
      {
        name: "Solid Pseudopapillary Neoplasm",
        distinction:
          "Shows discohesive cells around delicate vessels, pseudopapillary structures, and nuclear β-catenin; lacks a true neuroendocrine phenotype.",
      },
    ],
    molecular: [
      "Molecular testing is not required to establish the diagnosis.",
      "Germline testing should be guided by age, site, multifocality, associated precursor changes, and syndromic clinical findings.",
      "Pancreatic NET multifocality and adjacent islet dysplasia/microtumors may indicate MEN1, MEN4, or von Hippel–Lindau syndrome.",
    ],
    pitfalls: [
      "Do not diagnose paraganglioma solely from neuroendocrine marker positivity; epithelial keratin expression and GATA3/sustentacular-cell pattern are useful in context.",
      "Do not apply a single grading system across all anatomic sites; use site-specific criteria.",
      "For pancreatic NETs, evaluate non-neoplastic pancreas for islet dysplasia, microtumors, ductuloinsular complexes, and other clues to hereditary disease.",
    ],
  },
];

const overview = [
  {
    name: "Follicular Adenoma of the Thyroid",
    group: "Thyroid epithelial",
    clue: "Encapsulated follicular-cell neoplasm",
    key: "No capsular/vascular invasion; no PTC-type nuclei",
  },
  {
    name: "Papillary Thyroid Carcinoma",
    group: "Thyroid epithelial",
    clue: "Follicular-cell carcinoma with characteristic nuclei",
    key: "PTC-type nuclear features across diverse patterns",
  },
  {
    name: "Cribriform-Morular Thyroid Carcinoma",
    group: "Thyroid epithelial",
    clue: "Cribriform growth and squamoid morules",
    key: "Diffuse nuclear β-catenin; assess APC/FAP",
  },
  {
    name: "Medullary Thyroid Carcinoma",
    group: "Thyroid C-cell/neuroendocrine",
    clue: "Invasive C-cell neoplasm",
    key: "Calcitonin, CEA, and neuroendocrine phenotype",
  },
  {
    name: "Spindle Epithelial Tumor with Thymus-Like Elements",
    group: "Thyroid epithelial",
    clue: "Biphasic spindle and glandular tumor",
    key: "Diffuse keratin; p40/p63; thyroglobulin-negative",
  },
  {
    name: "Parathyroid Adenoma",
    group: "Parathyroid",
    clue: "Hypercellular, fat-depleted parathyroid",
    key: "PTH/GATA3; correlate with hyperparathyroidism",
  },
  {
    name: "Adrenal Cortical Adenoma",
    group: "Adrenal cortical",
    clue: "Noninvasive cortical neoplasm",
    key: "No necrosis, invasion, or atypical mitoses",
  },
  {
    name: "Adrenal Cortical Carcinoma",
    group: "Adrenal cortical",
    clue: "Malignant cortical neoplasm",
    key: "Integrate invasion, necrosis, mitoses, and Ki-67",
  },
  {
    name: "Sympathetic Paraganglioma",
    group: "Paraganglionic",
    clue: "Extra-adrenal sympathetic paraganglion tumor",
    key: "Zellballen; neuroendocrine; site is extra-adrenal",
  },
  {
    name: "Parasympathetic Paraganglioma",
    group: "Paraganglionic",
    clue: "Head and neck paraganglion tumor",
    key: "Carotid body, jugulotympanic, or vagal site",
  },
  {
    name: "Pheochromocytoma",
    group: "Paraganglionic",
    clue: "Adrenal medullary chromaffin-cell tumor",
    key: "Zellballen; adrenal origin; hereditary workup",
  },
  {
    name: "Composite Pheochromocytoma/Paraganglioma",
    group: "Paraganglionic",
    clue: "Chromaffin tumor plus neural/nerve-sheath component",
    key: "Each component well developed; minor component ≥5%",
  },
  {
    name: "Other Neuroendocrine Tumors",
    group: "Epithelial neuroendocrine",
    clue: "Well-differentiated epithelial NET",
    key: "Site-specific lineage, grade, and hormone profile",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function EndocrineTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  const toggleAll = () =>
    setExpanded(
      expanded.length === entities.length ? [] : entities.map((e) => e.name),
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Endocrine Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic classification of pediatric endocrine neoplasms,
          integrating anatomic site, cellular lineage, defining morphology,
          immunophenotype, hereditary predisposition, and diagnostically
          relevant molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            First establish the organ and cell lineage; then use the defining
            architecture, invasion, immunophenotype, and syndrome associations
            to classify the tumor.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical pattern</th>
                <th className="px-4 py-3">Key diagnostic point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.group}</td>
                  <td className="px-4 py-3 text-slate-600">{item.clue}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Establish the organ and lineage.</strong> Separate
            follicular-cell, C-cell, parathyroid, adrenal cortical,
            chromaffin/paraganglionic, and epithelial neuroendocrine tumors.
          </li>
          <li>
            <strong>2. Identify the defining architecture.</strong> Evaluate
            encapsulation and invasion in follicular lesions; papillary-type
            nuclei; Zellballen pattern; and biphasic or composite components.
          </li>
          <li>
            <strong>3. Apply lineage-directed immunohistochemistry.</strong> Use
            thyroglobulin/TTF1, calcitonin/CEA, PTH/GATA3, SF1/inhibin, and
            neuroendocrine/sustentacular markers in a targeted panel.
          </li>
          <li>
            <strong>4. Assess hereditary risk.</strong> Pediatric endocrine
            tumors may be sentinel manifestations of MEN syndromes, FAP,
            Li-Fraumeni syndrome, VHL, or SDHx-related disease.
          </li>
          <li>
            <strong>5. Separate diagnosis from risk assessment.</strong>{" "}
            Integrate invasion, proliferation, stage, biochemical findings, and
            molecular results without relying on a single marker.
          </li>
          <li>
            <strong>6. Sample adequately.</strong> Examine the entire
            capsule/periphery of follicular and adrenal cortical tumors and
            sample distinct components of composite tumors.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, morphology, markers, or genes..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button
          onClick={toggleAll}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    <section>
                      <h3 className="mb-2 text-base font-semibold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <div className="space-y-3">
                        {entity.differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {d.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {d.distinction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
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
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>

      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Diagnostic interpretation should integrate morphology, anatomic site,
        biochemical findings, clinical context, and hereditary risk. Use
        site-specific staging and risk-assessment systems.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
