"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  definition: string[];
  clinical: string[];
  hist: string[];
  ihc: string[];
  diff: string[];
  molecular: string[];
  criteria: string[];
};

const entities: Entity[] = [
  {
    name: "Bronchial papillomas",
    definition: [
      "Squamous cell papilloma is a papillary tumor consisting of delicate connective tissue fronds lined with squamous epithelium; it can be solitary or multiple, and exophytic or inverted. Glandular papilloma is a benign papillary tumor lined by non-ciliated columnar cells, with varying numbers of cuboidal and goblet cells. Mixed squamous and glandular papilloma is an endobronchial papillary tumor showing an admixture of squamous and glandular epithelium; each epithelial type should constitute at least one third of the epithelium.",
    ],
    clinical: [
      "Most patients present with obstructive symptoms or hemoptysis, but as many as 25% may be asymptomatic, presenting with incidental radiographic detection . High-resolution CT findings demonstrate endobronchial plaques, nodules, or airway thickening in addition to air trapping, atelectasis, consolidation, and bronchiectasis . PET avidity is reported in several studied glandular and mixed papillomas . Lung involvement by squamous papillomatosis demonstrates diffuse, poorly defined, non-calcified parenchymal centrilobular opacities, as well as cavitated thick-walled nodules .",
    ],
    hist: [
      "Squamous cell papilloma",
      "Squamous cell papillomas feature arborizing loose fibrovascular cores covered by stratified squamous epithelium. Exophytic tumors have orderly epithelial maturation and often keratinized surface cells. Acanthosis, parakeratosis, and intraepithelial neutrophils are common . Less than 25% of solitary papillomas feature typical HPV viral cytopathic effect, including binucleate forms, wrinkled nuclei, and perinuclear haloes. Occasional dyskeratotic cells, large atypical cells, and mitotic figures above the basal layer can be seen. Dysplasia is graded according to the current WHO classification (see section Squamous dysplasia and carcinoma in situ of the lung).",
      "Inverted papillomas are also exophytic, but they have squamous epithelial invaginations. Cells may extend into seromucinous glands, but basal lamina invests the endophytic nests. Cells are usually non-keratinizing and demonstrate orderly maturation .",
      "Squamous cell papillomas may occasionally infiltrate beyond the bronchial wall, with parenchymal involvement featuring either solid intra-alveolar nests of cytologically bland non-keratinizing cells or large cysts lined by similar cells. Reactive type II pneumocytes lining alveolar walls may be prominent. Surrounding lung may be inflamed or fibrotic. Viral cytopathic effect is usually seen in instances of pulmonary laryngotracheal papillomatosis. Immunohistochemical or in situ DNA hybridization studies correlate with the morphological finding of koilocytosis.",
      "The differential diagnosis includes inflammatory polyp and squamous cell carcinoma (SCC). Endobronchial inflammatory polyps show conspicuous inflammation and, despite focal squamous metaplasia, they lack true papillary architecture, stromal cores, and proliferative epithelium. SCCs, which can be endobronchial and papillary, feature malignant cytological features even when stromal invasion and desmoplasia are not apparent. Inverted papillomas can be indistinguishable from invasive SCC; however, parenchymal destruction and overt cytological atypia favor a diagnosis of malignancy. The recognition of even focal carcinoma within a papilloma warrants a diagnosis of carcinoma; therefore, small biopsy samples showing mature papillary squamous epithelium may not exclude the diagnosis of SCC.",
      "Glandular papilloma",
      "Glandular papillomas feature broad epithelial-lined fronds with vascular or hyalinized stromal cores. Stratified or pseudostratified columnar epithelium may form micropapillary tufts. Uniform non-ciliated columnar cells have eosinophilic cytoplasm and round regular nuclei, and interspersed mucinous cells may be seen. The cytoplasm can be clear, but nuclear atypia, mitoses, and necrosis are absent. Stromal cores often contain sheets of plasma cells .",
    ],
    ihc: [],
    diff: [
      "Sclerosing pneumocytoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Alveolar adenoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Not relevant"],
    criteria: [
      "Squamous cell papilloma: papillary fronds with delicate connective tissue fibrovascular cores lined by mature squamous epithelium",
      "Glandular papilloma: papillary tumor lined by non-ciliated columnar, cuboidal, and/or goblet cells",
      "Mixed squamous and glandular papilloma: papillary tumor lined by mixed squamous and glandular epithelium – each type should constitute at least one third of the epithelium",
      "Usually in an endobronchial location",
      "Complete excision with thorough histological evaluation to exclude carcinoma",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Sclerosing pneumocytoma",
    definition: [
      "Sclerosing pneumocytoma is a tumor of pneumocytic origin composed of a dual population of surface cells resembling type II pneumocytes and round cells. The tumor demonstrates varying amounts of solid, papillary, sclerotic, and hemorrhagic patterns.",
    ],
    clinical: [
      "Patients are typically asymptomatic, with the tumor often discovered incidentally. Radiographs show a solitary circumscribed mass, which may rarely be calcified or cystic .",
    ],
    hist: [
      "The key feature of sclerosing pneumocytoma is the presence of two cell types: cuboidal surface cells and round stromal cells, both of which are considered neoplastic. The surface cells are cuboidal and morphologically similar to type II pneumocytes. The round cells are small, with well-defined borders and central bland nuclei with fine chromatin and scant small nucleoli. The tumors typically have a combination of growth patterns: papillary, sclerotic, solid, and hemorrhagic. In the papillary pattern, complex papillary structures are covered by surface cells overlying a core of round cells as opposed to true fibrovascular cores. The sclerotic area is composed of fibrosis with hyalinized collagen, in which variable inflammatory cells, haemosiderin deposition, cholesterol clefts, calcification, and ossification may be seen. The solid pattern is composed of sheets of round cells, in which there may be tubular or incomplete adenoid structures surrounded by surface cells. In the hemorrhagic pattern, large blood-filled spaces may be present, lined by cuboidal epithelial cells . Fusion of surface cells into multinucleated giant cells, formation of sclerotic papillae due to the replacement of round cells by collagen, delicate papillary structures mimicking true papillae with fibrovascular cores, a spindle or signet-ring morphology of the round cells, and myxoid matrix surrounding round cell cords may be present as diagnostic pitfalls .",
    ],
    ihc: [
      "Both surface and round cells are positive for EMA and TTF1. Pancytokeratin, CAM5.2, CK7, and napsin A stain the surface cells diffusely, but the round cells are usually negative or weakly positive. Neuroendocrine markers are negative. ER and PR staining has also been reported in some cases in the round cells .",
    ],
    diff: [
      "The differential diagnosis consists primarily of carcinoid tumors and papillary adenocarcinoma. Rarely, either may coexist with sclerosing pneumocytoma . In general, the multiple growth patterns, presence of bland cytological features, a dual cell population, and the characteristic immunostaining profile discriminate sclerosing pneumocytoma from other entities. However, accurate diagnosis on small biopsy, cytology, or frozen section may be difficult .",
      "Bronchial papillomas: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Alveolar adenoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Molecular data have demonstrated the same monoclonal pattern in both the round and surface cells, consistent with a true neoplasm . AKT1 alterations are present in nearly all sclerosing pneumocytomas and may be useful for diagnosis in selected cases.",
    ],
    criteria: [
      "Well-circumscribed lesion composed of a dual population of surface and round cells",
      "A mixture of papillary, sclerotic, solid, and hemorrhagic growth patterns is usually present",
      "Distinctive immunostaining profile: TTF1 and EMA being positive in surface and round cells and cytokeratin staining being positive in the surface cells but weak or absent in the round cells",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Alveolar adenoma",
    definition: [
      "Alveolar adenoma is a well-circumscribed tumor consisting of cystic spaces lined by a single layer of type II pneumocytes overlying a spindle-rich stroma.",
    ],
    clinical: [
      "Tumors are usually incidental findings in asymptomatic patients. Radiologically, the tumors are well circumscribed, homogeneous, and non-calcified. Cystic spaces may be seen on CT or MRI, and low-level PET positivity has been reported .",
    ],
    hist: [
      "Alveolar adenomas are well circumscribed; composed of multiple cystic spaces frequently resembling alveolar spaces that are filled with eosinophilic granular material; and lined by cytologically bland, flattened to cuboidal epithelial cells, which correspond to type II pneumocytes by immunohistochemical and electron microscopic evaluation . Associated stroma may be myxoid or collagenous, containing cytologically bland spindle cells .",
      "Cyst lining cells are positive for cytokeratin, TTF1, napsin A, and surfactant protein. Stromal cells are negative for these markers and may show focal staining for SMA and MSA and rare staining for S100 and CD34 . Cytokeratin and TTF1 staining of the pneumocytes differentiates alveolar adenoma from lymphangioma, where the endothelial cells are keratin-negative. Lack of staining for TTF1 in stromal cells, along with the absence of a spectrum of solid papillary, sclerotic, and hemorrhagic patterns, helps differentiate alveolar adenoma from sclerosing pneumocytoma, which typically lacks cystic structures and shows TTF1-positive stromal cells.",
    ],
    ihc: [],
    diff: [
      "Bronchial papillomas: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Sclerosing pneumocytoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Well-circumscribed tumor composed of cystic spaces frequently resembling alveolar spaces, lined by a single layer of type II pneumocytes overlying a mesenchymal, sometimes myxoid, stroma of variable thickness",
      "The pneumocytes are characteristically positive for TTF1",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Papillary adenoma of the lung",
    definition: [
      "Papillary adenoma is a circumscribed papillary neoplasm composed of cytologically bland, cuboidal to columnar cells lining fibrovascular cores.",
    ],
    clinical: [
      "There is typically an incidental radiological finding of a well-defined nodule.",
    ],
    hist: [
      "Papillary adenomas are circumscribed nodules composed of papillary structures with fibrovascular cores lined by a single layer of cuboidal epithelium without nuclear atypia or mitoses and with a low Ki-67 proliferation index .",
    ],
    ihc: [
      "Surface epithelial cells, but not stromal cells, are positive for TTF1, CK7, pancytokeratin, surfactant protein, and EMA .",
    ],
    diff: [
      "Sclerosing pneumocytoma is composed of two cell types, with papillary structures containing a TTF1-positive cellular rather than a fibrovascular core and more-varied growth patterns, including papillary, sclerotic, hemorrhagic, and solid growth .",
      "Alveolar adenomas are usually encapsulated and comprise multiple cysts lined by type II pneumocytes with characteristic spindle/inflammatory stroma and without papillary morphology .",
      "Papillary adenocarcinomas generally show a greater degree of cellular proliferation, nuclear atypia, complex branching architecture, and infiltrative growth. Mitotic activity and necrosis may be present.",
      "Bronchial papillomas: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Diagnostic molecular pathology is not clinically required ."],
    criteria: [
      "Unencapsulated circumscribed peripheral papillary glandular neoplasm with a single layer of cytologically bland cuboidal to columnar cells lining fibrovascular cores",
      "No nuclear atypia, minimal to no mitoses, no necrosis, no complex branching architecture, and absence of invasion",
      "Expression of TTF1",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Bronchiolar adenoma / ciliated muconodular papillary tumor",
    definition: [
      "Bronchiolar adenoma / ciliated muconodular papillary tumor (BA/CMPT) is a benign peripheral lung tumor composed of bilayered bronchiolar-type epithelium containing a continuous basal cell layer.",
    ],
    clinical: [
      "These tumors are typically incidental findings. They may appear as solid or ground-glass nodules on CT, with some showing cavitation .",
    ],
    hist: [
      "BA/CMPTs are nodular proliferations involving peribronchiolar lung parenchyma. The tumors show papillary and/or flat (glandular) architecture and are composed of bilayered cellular elements with luminal epithelial cells and subjacent basal cells. The luminal cells may consist of mucous cells and ciliated cells (referred to by some as proximal-type BA or classic CMPT), whereas cells resembling type II pneumocytes and club cells (formerly known as Clara cells) may predominate (referred to by some as distal-type BA or non-classic CMPT) . Micropapillary tufts of ciliated cells and a minor degree of discontinuous spread are common and should not be regarded as features of malignancy. Some cases have overlapping features between distal and proximal types. Nuclear atypia is absent and mitoses are rare. The diagnosis is difficult to make on a small biopsy, although it may be suspected.",
      "Although there is a spectrum of varying morphological and immunohistochemical features ranging from proximal (papillary or flat, mainly mucinous and ciliated cells, TTF1− or rarely weakly +) to distal (flat, mainly cuboidal type II pneumocytes and club cells, TTF1+) tumors, there may be overlapping features. The main reason for appreciating this spectrum is to aid in diagnosis rather than to categorize each tumor into a specific proximal or distal pattern.",
    ],
    ihc: [
      "The continuous basal cell layer is highlighted by p40 or CK5/6. The luminal epithelial cells tend to be diffusely positive for TTF1 in distal-type BA, while only focally positive or negative in proximal-type BA (classic CMPT).",
    ],
    diff: [
      "The continuous basal cell layer, ciliated cells, and the lack of nuclear atypia are features that may be useful in distinguishing this tumor from adenocarcinoma (including adenocarcinoma in situ). This distinction can be very difficult on frozen section or small biopsies . The bilayered cellular elements with luminal epithelial cells and subjacent basal cells are the most useful criteria to favor BA over adenocarcinoma in situ. Both mucinous and non-mucinous adenocarcinomas in situ also lack cytological atypia, similar to BA, and some distal BAs lack ciliated cells, show tumor cells growing along alveolar wall surfaces (resembling lepidic growth), and may resemble mucinous adenocarcinoma in situ. p40 and/or CK5/6 may be very helpful in such cases. Papillomas are characteristically central and endobronchial, unlike BA/CMPTs, which are peripheral and bronchiolocentric; the histological findings can be otherwise indistinguishable, although glandular papillomas should lack ciliated cells (see section Bronchial papillomas). Peribronchiolar metaplasia tends to show ill-defined borders and is usually a multifocal process, often in the setting of interstitial lung disease or small airway injury. Foci are generally small and consistently demonstrate ciliated cells. BA/CMPT is unrelated to atypical adenomatous hyperplasia, previously referred to as bronchioloalveolar adenoma .",
      "Sclerosing pneumocytoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Detection of driver alterations is not necessary for diagnosis.",
    ],
    criteria: [
      "Circumscribed peribronchiolar lung nodule of papillary and/or flat glandular epithelium",
      "A bilayered cellular proliferation of luminal epithelial cells and subjacent basal cells",
      "Luminal cells consisting of mainly mucous cells and ciliated cells in proximal-type areas, but mainly type II pneumocytes and club cells in distal-type areas",
      "Lack of nuclear atypia and inconspicuous or absent mitoses",
      "p40 and CK5/6 expression in basal layer",
      "TTF1-positive luminal cells with more-diffuse staining in distal-type areas and either focal or negative staining in proximal-type areas",
      "positive BRAF immunohistochemistry or BRAF mutation may be confirmatory in the appropriate morphological context",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Mucinous cystadenoma of the lung",
    definition: [
      "Mucinous cystadenoma is a localized cystic mass filled with mucin and surrounded by columnar mucinous epithelium without significant atypia or invasive growth.",
    ],
    clinical: [
      "The lesions are usually found incidentally in asymptomatic patients.",
    ],
    hist: [
      "The tumor consists of a localized cyst filled with mucin, which may be surrounded by a fibrous wall . The lining of the cyst wall consists of a discontinuous single layer of low-cuboidal to tall columnar mucin-secreting epithelium. Nuclear atypia is absent or at most mild, and mitoses are absent or rare . Mild papillary folding may be present , but micropapillary fronds, necrosis, overt cytological atypia, or invasive growth is absent. Extravasated acellular mucin may be associated with foreign body giant cell reaction and chronic inflammation .",
    ],
    ihc: [
      "The lining cells are positive for pancytokeratin and are rarely positive for CEA . TTF1 and surfactant protein are usually negative .",
    ],
    diff: [
      "The primary entity in the differential diagnosis is colloid carcinoma of the lung, which includes what was previously known as mucinous cystadenocarcinoma. The spread of the tumor beyond the wall of the cyst in either a lepidic or an invasive fashion, significant cytological atypia, and necrosis are indicators of malignancy . Thorough sampling is necessary, because malignant histology may be only focally present within a tumor that otherwise appears benign . Metastatic carcinoma from the gastrointestinal tract or ovary should be excluded by extensive workup. Developmental and postinfectious bronchogenic cysts may also be a consideration. They usually show coexistent ciliated cells, in contrast to mucinous cystadenoma. A subset of mucinous cystic neoplasms harbouring borderline histology with regard to nuclear and architectural atypia has been described, although there is no consensus on diagnostic criteria, and cases have been reported to behave in a benign fashion .",
      "Bronchial papillomas: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Sclerosing pneumocytoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Alveolar adenoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucous gland adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Genetic abnormalities have not been reported."],
    criteria: [
      "Circumscribed mucin-filled lung cyst surrounded by mucinous cells",
      "Overt cytological atypia and invasion are absent",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Mucous gland adenoma of the lung",
    definition: [
      "Mucous gland adenoma is a benign, predominantly exophytic tumor of the bronchus, resembling seromucinous bronchial glands.",
    ],
    clinical: [
      "Patients typically present with symptoms of obstruction, including cough, hemoptysis, dyspnea, and recurrent pneumonia . Imaging shows a well-defined mass .",
    ],
    hist: [
      "Mucous gland adenomas are well circumscribed and comprise numerous mucin-filled cystic spaces, and they may include non-dilated microacinar, glandular, or tubular structures. Papillary architecture is less common. The tumor cells are cytologically bland columnar, cuboidal, or flattened mucus-secreting cells. Oncocytic cells, clear cells, or ciliated cells may be present. Hyperchromasia, pleomorphism, and mitoses are generally absent. A usually minor component of spindle cell stroma may be hyalinized or contain inflammatory cells.",
    ],
    ihc: [
      "The epithelial cells are positive for EMA, keratin, and CEA, whereas they are negative for TTF1. The stromal cells may show occasional expression of keratins, SMA, and S100, indicating a myoepithelial component .",
    ],
    diff: [
      "The lack of intermediate cells discriminates mucous gland adenoma from low-grade mucoepidermoid carcinoma. Cellular composition and location are different from endobronchial papillomas and other adenomas. Endobronchial metastasis from extraneous sites should be excluded by clinical history and cellular atypia. Invasive mucinous adenocarcinomas involve the alveolar parenchyma rather than showing exclusive endobronchial growth.",
      "Sclerosing pneumocytoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Alveolar adenoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Papillary adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Bronchiolar adenoma / ciliated muconodular papillary tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucinous cystadenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Well-circumscribed endobronchial tumor",
      "Acini / tubules / papillary growth of mucous cells with no atypia",
      "At least focal resemblance to normal seromucinous glands",
    ],
    group: "Benign Epithelial Tumors",
  },
  {
    name: "Atypical adenomatous hyperplasia of the lung",
    definition: [
      "Atypical adenomatous hyperplasia (AAH) is a small (usually ≤ 5 mm), localized proliferation of mildly to moderately atypical type II pneumocytes and/or club cells lining alveolar walls and sometimes respiratory bronchioles. Within the category of preinvasive lesions, AAH is a putative precursor of adenocarcinoma in situ (AIS).",
    ],
    clinical: [
      "AAH is usually undetectable by imaging techniques, but larger lesions may be visible as faint, non-solid, focal nodules of a few millimetres, sometimes retrospectively noted, on high-resolution CT. The lesions are typically incidentally found during examination of surgical specimens, most of which bear lung cancer, especially adenocarcinoma. In rare autopsy studies, precursor lesions have been reported in 2–4% of patients not bearing cancer . The rate is higher in surgical specimens from patients with lung cancer (as high as 19% for women and 9.3% for men), particularly in cases of pulmonary adenocarcinoma (as high as 30.2% for women and 18.8% for men) . When the lesions are completely resected, the disease-free survival rate is 100% – see below . AAH is not included in TNM staging.",
    ],
    hist: [
      "AAH is a small localized lesion (usually ≤ 5 mm) often arising in the centriacinar region, close to respiratory bronchioles. Mildly to moderately atypical type II pneumocytes and/or club cells proliferate along alveolar walls. Inconspicuous pseudopapillae may also be present . Club cells are recognized as columnar, with cytoplasmic snouts and pale eosinophilic cytoplasm. Type II pneumocytes are cuboidal or dome-shaped, with fine cytoplasmic vacuoles or clear to foamy cytoplasm. Intranuclear eosinophilic inclusions may be present. The lining of rounded, cuboidal, low columnar cells with round to oval nuclei shows gaps between cells located on the alveolar wall basement membrane. Double nuclei are common, but mitoses are extremely rare. There is a continuum of morphological changes between AAH and AIS . A spectrum of cellularity and atypia occurs in AAH. Although AAH has sometimes been classified into low-grade and high-grade types , such grading is not recommended . AAH expresses TTF1 .",
    ],
    ihc: [],
    diff: [
      "Distinction between cellular and cytologically anomalous AAH and non-mucinous AIS can be difficult. AIS is usually larger (> 5 mm), but the size is not an absolute criterion; thus, multiple characteristics in addition to size, including architectural and cytological features, are needed to make this distinction. AIS typically exhibits a more cellular, crowded, homogeneous, cuboidal or columnar cell population. There is usually a less graded, more abrupt transition to the adjacent non-neoplastic alveolar lining cells in AIS. Columnar cells are taller in AIS, and overlapping and mild stratification of cells may be seen – features not seen in AAH. AAH also needs to be distinguished from reactive pneumocyte hyperplasia secondary to parenchymal inflammation or fibrosis in which the alveolar lining cells are not the dominant feature and are more diffusely distributed. In addition, in reactive conditions, the inflammatory changes are usually more widely distributed than the reactive alveolar lining cells. AAH also needs to be distinguished from micronodular pneumocyte hyperplasia, which shows less cytological atypia and characteristically occurs in women with lymphangioleiomyomatosis and/or tuberous sclerosis.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Increased numbers of type II pneumocytes and club cells lining alveoli in a discontinuous monolayer",
      "Mild atypia",
      "Small localized lesion, usually ≤ 5 mm, discrete from surrounding alveolar parenchyma",
      "Surrounding parenchyma devoid of inflammation or fibrosis",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Adenocarcinoma in situ of the lung",
    definition: [
      "Adenocarcinoma in situ (AIS) is a small (≤ 30 mm), localized adenocarcinoma with growth restricted to neoplastic cells along pre-existing alveolar structures (pure lepidic growth with no invasive features). The diagnosis of AIS requires a resection specimen where the lesion has been completely sampled, and it cannot be made based on small biopsy or cytology specimens.",
    ],
    clinical: [
      "AIS is usually an incidental finding on CT performed for other medical reasons, including screening. The tumors are usually ≤ 20 mm but can be as large as 30 mm. By CT they are characteristically non-solid, but they may be part-solid or even solid, especially in mucinous AIS. AIS may have a so-called bubble-like appearance on CT . Preinvasive lesions are locally slow-growing tumors without lymphatic or vascular invasion or distant metastases.",
    ],
    hist: [
      "AIS is a localized, small (≤ 30 mm) adenocarcinoma with growth restricted to neoplastic cells along pre-existing alveolar structures (lepidic growth), lacking stromal, vascular, alveolar space or pleural invasion or necrosis . Tumor cells are arranged in continuous monolayers, sometimes with evidence of cell overlap or mild stratification. Papillary or micropapillary patterns are absent, similar to in AAH, although minor cellular tufting may be seen. Intra-alveolar tumor cells, either within the tumor or spread in airspaces in the surrounding parenchyma, are absent. AIS is subdivided into non-mucinous and mucinous subtypes. Virtually all cases of AIS are non-mucinous, typically showing type II pneumocyte and/or club cell differentiation. However, there is no recognized clinical significance to the distinction between type II pneumocytes and club cells, so this morphological distinction is not recommended. The exceptionally rare cases of mucinous AIS that occur as a solitary nodule (≤ 30 mm) consist of tall columnar cells with basal nuclei and abundant cytoplasmic mucin; sometimes these cells resemble goblet cells. Nuclear atypia is usually minimal and low-grade in non-mucinous AIS, but it is virtually absent in mucinous AIS. Alveolar septal widening with sclerosis/elastosis is common in AIS, particularly the non-mucinous subtype. The criteria for AIS can be applied in the setting of multiple tumors only if the other tumors are regarded as synchronous primaries rather than intrapulmonary metastases. In the setting of multiple non-mucinous adenocarcinomas, irrespective of the clonality of the other tumors, a lesion that is morphologically qualified as AIS should be classified as AIS – see below. AIS expresses TTF1 and napsin A.",
      "The diagnosis of AIS requires a resection specimen where the lesion has been completely sampled, and it cannot be made based on small biopsy or cytology specimens.",
    ],
    ihc: [],
    diff: [
      "Non-mucinous AIS must be distinguished from MIA, lepidic-predominant adenocarcinoma, and AAH. The lepidic pattern should be distinguished from the acinar or the papillary pattern in the setting of parenchymal collapse and/or emphysema . The distinction between mucinous AIS and MIA is similar, in that invasive foci should be identified in the latter. Mucinous AIS also needs to be differentiated from bronchiolar adenoma based on the absence of the continuous basal layer in the former. Clinical correlation is needed to exclude a metastatic mucinous adenocarcinoma from sites such as the pancreas. Solitary lesions of small size (≤ 30 mm) and a discrete circumscribed border support AIS, whereas larger, irregular lesions are more likely to be invasive. Where growth shows a pattern of lobar consolidation, particularly for mucinous lesions, invasive disease is more likely. AIS can appear as multiple (often subtly different) synchronous primary lesions, and it is important to distinguish this scenario from airspace spread of invasive disease, in the context of either invasive mucinous adenocarcinoma or, even more rarely, multifocal, monotonously similar, non-mucinous adenocarcinoma. There is insufficient evidence that a 100% disease-free survival rate can occur with tumors that morphologically fit the criteria for AIS but measure > 30 mm. These tumors should be classified as lepidic-predominant adenocarcinoma (and staged as T1a), with a comment that they may represent AIS.",
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "See #19728 and #19729 .",
      "A small (≤ 30 mm diameter) localized lesion comprising pure lepidic growth",
      "Stromal, vascular, or pleural invasion, as well as spread through airspaces and invasive adenocarcinoma patterns, all absent",
      "Adenocarcinoma cells line alveolar walls in a continuous layer; tufting and overlapping may be present",
      "A completely resected tumor that is entirely sampled and evaluated histologically",
      "Nuclear atypia and alveolar septal thickening are variable",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Minimally invasive adenocarcinoma of the lung",
    definition: [
      "Minimally invasive adenocarcinoma (MIA) is a small (≤ 30 mm), solitary adenocarcinoma with a predominantly lepidic pattern and ≤ 5 mm invasion. The diagnosis of MIA requires a resection specimen where the lesion has been completely sampled and evaluated histologically. This diagnosis cannot be made on the basis of small biopsy or cytology specimens.",
    ],
    clinical: [
      "MIAs are usually discovered by CT screening or as an incidental finding on CT performed for other medical reasons. MIA is variable in its CT presentations, but when the tumor is non-mucinous, most often it shows a part-solid nodule, with a ≤ 5 mm solid component . In contrast, mucinous MIA usually shows a solid-dominant nodule by CT .",
    ],
    hist: [
      "MIA is a small, solitary adenocarcinoma (≤ 30 mm), with a predominantly lepidic pattern and ≤ 5 mm invasion . If the invasive area is in a single focus on one slide, the size of the invasive area should be measured in the largest dimension with a ruler . If (1) there are multiple foci of invasion, (2) the invasive areas are on more than one slide, or (3) invasive size is difficult to measure, the invasive size can be estimated by multiplying the total size of the tumor by the total percentage of the non-lepidic or invasive components . If the estimated invasive size is ≤ 5 mm, a diagnosis of MIA is warranted. Additional issues regarding the distinction between lepidic versus invasive patterns are discussed in section Invasive non-mucinous adenocarcinoma of the lung .",
      "MIA is usually non-mucinous but rarely may be mucinous or mixed . Non-mucinous MIA typically shows type II pneumocyte and/or club cell differentiation. Mucinous MIA shows columnar cells with abundant apical mucin and small, often basally oriented nuclei, and it may show goblet cell morphology. By definition, MIA is solitary and discrete. The invasive component to be measured in MIA is defined as histological subtypes other than a lepidic pattern (i.e. acinar, papillary, micropapillary, or solid, or less often colloid, enteric, fetal, and/or invasive mucinous adenocarcinoma) or tumor cells infiltrating the myofibroblastic stroma. MIA is excluded if the tumor invades lymphatics, blood vessels, or pleura; contains tumor necrosis; or spreads through airspaces (outside the tumor). Tangential sectioning or collapse of lung tissue in lepidic adenocarcinoma can be difficult to distinguish from papillary or acinar patterns. Issues of differential diagnosis between lepidic, acinar, and papillary patterns, as well as reproducibility, are addressed in section Invasive non-mucinous adenocarcinoma of the lung .",
    ],
    ihc: [
      "Non-mucinous MIA is positive for pneumocyte markers, including TTF1 and napsin A. Mucinous MIA is usually negative for pneumocyte markers, whereas CK20 and HNF4α are often positive .",
    ],
    diff: [
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Molecular testing is not required for the diagnosis. Whether to perform molecular testing on MIAs is best determined by each institution .",
    ],
    criteria: [
      "See #14957 and #14960 .",
      "A small (≤ 30 mm) lepidic-predominant adenocarcinoma with an invasive component ≤ 5 mm",
      "Invasive component to be measured includes any histological subtype other than a lepidic pattern (e.g. acinar, papillary, micropapillary, or solid, or less often colloid, enteric, fetal, or invasive mucinous adenocarcinoma) and tumor cells infiltrating myofibroblastic stroma",
      "The following should be absent: invasion of lymphatics, blood vessels, or pleura, as well as tumor necrosis or spread through airspaces",
      "A completely resected tumor that is entirely sampled and evaluated histologically",
      "The percentage of each of the invasive components should be recorded",
      "The tumor can be non-mucinous (type II pneumocytes or club cells) and rarely can be mucinous or mixed mucinous and non-mucinous",
      "If a tumor with pure lepidic growth has only been partly sampled, the diagnosis of lepidic adenocarcinoma should be rendered with a comment that the diagnosis of AIS or MIA cannot be made without complete histological sampling",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Invasive non-mucinous adenocarcinoma of the lung",
    definition: [
      "Invasive non-mucinous adenocarcinoma is a non-small cell lung carcinoma (NSCLC) with morphological or immunohistochemical evidence of glandular differentiation.",
    ],
    clinical: [
      "In general, clinical manifestations of lung cancer relate to local growth of the primary lesion, locoregional extension into neighbouring structures or lymph nodes, distant spread, or paraneoplastic syndromes. Clinically, adenocarcinomas are not different from other types of lung cancers, although paraneoplastic symptoms (see section Tumors of the lung: Introduction) are less common than in squamous cell or small cell carcinoma. Most patients present with locoregionally advanced or metastatic disease, apart from those identified through screening programmes. Commonly occurring symptoms are cough, dyspnea, hemoptysis, or symptoms related to distant spread, such as central neurological symptoms due to brain metastases or peripheral pain due to bone metastases (see also section Tumors of the lung: Introduction).",
      "Imaging",
    ],
    hist: [
      "Non-mucinous lung adenocarcinomas usually consist of a complex admixture of architectural patterns (lepidic, acinar, papillary, micropapillary, and solid) and are classified into subtypes according to the predominant architectural pattern using comprehensive histological subtyping . In resection specimens, each pattern should be estimated in a semiquantitative manner and recorded in 5–10% increments totalling 100%. Using 5% increments allows for greater flexibility in choosing a predominant pattern when tumors have two patterns of relatively similar percentages. Although it is possible to have equal percentages of two prominent components, a single predominant component should be chosen. In such cases, recording all percentages in the report will makes it clear that the tumor had a relatively even mixture of several patterns . Using 5% increments also avoids the need to use 10% for small amounts of components, such as micropapillary or solid patterns, where even small amounts of 5% have consistently been shown to correlate with poor prognosis .",
      "Lepidic",
      "This pattern consists of bland pneumocytic cells (type II pneumocytes or club cells) growing along the surface of alveolar walls. In lepidic-predominant adenocarcinoma, there is also an invasive component measuring > 5 mm in greatest dimension. The invasive component is defined as a histological pattern other than a lepidic pattern (i.e. acinar; papillary; micropapillary; solid; or less commonly, colloid, fetal, enteric, and/or invasive mucinous adenocarcinoma [IMA]) and/or myofibroblastic stroma associated with invasive tumor cells. Diagnostic features that help distinguish minimally invasive adenocarcinoma (MIA) from lepidic-predominant adenocarcinoma are presented in #14129Table 1.XX . A diagnosis of lepidic adenocarcinoma rather than MIA should be made if the cancer (1) invades the lymphatic system, blood vessels, or pleura; (2) exhibits tumor necrosis; (3) contains an invasive component > 5 mm; or (4) shows spread through airspaces (STAS). If the invasive area is in a single focus on one slide, the size of the invasive area should be measured in the largest dimension microscopically . If (1) there are multiple foci of invasion, (2) the invasive areas are on more than one slide, or (3) invasive size is difficult to measure, the invasive size can be estimated by multiplying the total size of the tumor by the total percentage of the non-lepidic or invasive components . Alveolar wall collapse can result in thickening of alveolar walls, with increased interstitial connective tissue raising the consideration of the acinar pattern; however, clear invasive growth is lacking. Some lepidic tumors have prominent hyperplastic lymphoid stroma. It is understood that lepidic growth can occur in metastatic tumors to the lung as well as in IMAs. However, the specific term “lepidic adenocarcinoma” refers to a non-mucinous adenocarcinoma showing lepidic growth as its predominant component, distinguishing these tumors from IMAs. Lepidic growth may also be composed of neoplastic cells with more-marked nuclear atypia resembling that of the adjacent invasive patterns. Diagnostic features that help distinguish lepidic / in situ growth of adenocarcinoma from invasive adenocarcinoma are presented in #14130Table 1.XX . Compared with tumors with lepidic components resembling type II pneumocytes or club cells (“precursor lepidic”), those with marked nuclear atypia (“outgrowth lepidic”) show increased Ki-67 proliferation index and p53 immunohistochemistry alterations . Despite evidence that these forms of lepidic growth are biologically distinct, it is not recommended to make this distinction in clinical practice, because of the lack of sufficient evidence, that adjusts for the impact of the invasive components, to indicate a worse overall survival for the outgrowth versus the precursor cases .",
      "Acinar",
      "This pattern is characterized by glands that may be round to oval or have a more jagged outline with central luminal spaces surrounded by tumor cells . The tumor cells and/or glandular spaces may contain mucin. The neoplastic glands invade through myofibroblastic stroma and/or replace the background alveolar architecture of the lung. In contrast, in lepidic adenocarcinoma, the background alveolar architecture is intact. Acinar adenocarcinoma can occasionally be difficult to distinguish from lepidic adenocarcinoma, particularly when there is lung parenchymal collapse in which the lepidic pattern appears as nests or strands of tumor cells mimicking the neoplastic glands of acinar adenocarcinoma. The presence of alveolar macrophages in residual compressed alveolar spaces, preservation of the underlying alveolar architecture, and absence of myofibroblastic stroma are helpful features in favor of lepidic adenocarcinoma, whereas neoplastic glands invading through myofibroblastic stroma indicate acinar adenocarcinoma. The cribriform pattern is defined by invasive back-to-back fused tumor glands with multiple spaces lacking intervening stroma . Cribriform arrangements are regarded as a pattern of acinar adenocarcinoma that is associated with poor prognosis .",
      "Papillary",
      "This pattern is characterized by growth of glandular tumor cells along the surface of fibrovascular cores . The presence of myofibroblastic stroma, as is seen in acinar adenocarcinoma, is not needed to diagnose this pattern. Accordingly, lepidic adenocarcinoma may mimic papillary adenocarcinoma, particularly in areas of lepidic pattern in which there has been tangential sectioning of alveolar walls or lung parenchymal collapse as can be seen after surgery . Papillary adenocarcinoma shows a morphological spectrum based on size of papillary structures and nuclear grade, which corresponds to prognosis . If papillary structures are noted filling airspaces surrounded by acinar or lepidic patterns, the tumor pattern is classified as papillary adenocarcinoma, rather than acinar or lepidic adenocarcinoma.",
    ],
    ihc: [
      "Immunohistochemistry can be a useful ancillary technique to confirm a primary lung adenocarcinoma rather than a pulmonary metastasis (see section Metastases) and is also required for the diagnosis of solid-predominant lung adenocarcinoma (unless histochemical staining confirms the presence of intracytoplasmic mucin), or to make a diagnosis of “non-small cell lung carcinoma, favor adenocarcinoma” in a morphologically undifferentiated tumor in small biopsy or cytology specimens (see section Small diagnostic samples). Although there is no immunohistochemical marker with 100% sensitivity or specificity for pulmonary adenocarcinomas, the pneumocyte markers TTF1 and napsin A are positive in the majority of cases (~75–80%) , and TTF1 is recommended when a limited panel is used . The currently available antibody clones for TTF1 have a variable staining performance, with clone 8G7G3/1 being the most specific and SPT24 being more sensitive . Even focal positivity for TTF1 is sufficient to favor glandular differentiation in the appropriate context . Double positivity in the same tumor for TTF1 and p40 usually indicates an adenocarcinoma , although adenosquamous carcinoma should also be considered (see section Adenosquamous carcinoma of the lung). When evaluating tumors, positive immunoreaction for TTF1 in entrapped pneumocytes must be carefully excluded. Tumors other than lung adenocarcinomas also express TTF1 (e.g. neuroendocrine tumors [NETs], thyroid tumors, and some female genital tract carcinomas) and napsin A (e.g. renal cell carcinomas) . CK7 is not specific for pulmonary adenocarcinomas .",
      "Grading",
      "The predominant histological pattern of lung adenocarcinoma is associated with prognosis, with lepidic-predominant tumors having the best prognosis, acinar and papillary-predominant tumors having an intermediate prognosis, and solid-predominant and micropapillary-predominant tumors having the worst prognosis . Significant efforts have been made to build on these data and develop a robust histological grading scheme for lung adenocarcinoma. In a recent large study undertaken by the International Association for the Study of Lung Cancer (IASLC) Pathology Committee, a combination of predominant histological pattern plus worst pattern (≥ 20% of a high-grade solid, micropapillary, cribriform, or complex glandular pattern [fused glands or single cells infiltrating in a desmoplastic stroma]) significantly improved prediction of patient outcome in a training cohort and an independent validation cohort of early-stage resected lung adenocarcinomas, and it was superior to other models incorporating mitotic count, nuclear grade, cytological grade, STAS, or necrosis . This has led to the recommendation of a three-tiered grading system for resected early-stage lung adenocarcinoma (see #14795).",
    ],
    diff: [
      "The differential diagnosis of pulmonary adenocarcinomas involves (1) distinction from other lung cancer types, (2) distinction from mesothelioma, (3) distinction of multiple lung primaries from intrapulmonary metastasis, and (4) distinction from metastases from extrapulmonary sites.",
      "For the distinction from other lung cancers, particularly squamous cell carcinoma or large cell neuroendocrine carcinoma (LCNEC), close attention to morphological features, as well as appropriate immunohistochemical stains, is usually sufficient.",
      "For multiple lung adenocarcinomas, essential factors include comprehensive histological subtyping considering the predominant and secondary/tertiary growth patterns, the presence/absence of lepidic growth, cytological characteristics (e.g. cell size, clear cell change, nuclear atypia, mitotic count), and stromal features (e.g. degree of desmoplasia and inflammation) . Comparative molecular profiling can also be helpful . A multidisciplinary approach with clinical, radiological, morphological, and molecular correlation may be needed in difficult cases .",
      "Separation of lung adenocarcinomas from metastases from extrapulmonary sites is based on respective clinical and radiological information, along with comparative morphological criteria, immunophenotyping, and/or molecular testing (see section Metastases).",
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Several oncogenic driver gene alterations are now known in lung adenocarcinomas, including in EGFR , KRAS , BRAF , ALK , ROS1 , RET , NTRK1–3 , MET , ERBB2 (HER2) , MAP2K1 (MEK1) , NRAS , and NRG1 . Targeted therapies are available for patients whose tumors harbour EGFR, ALK, ROS1, BRAF, MET, RET, and NTRK-family alterations. Clinical trials of targeted agents for KRAS p.G12C mutations are showing significant promise. Thus, optimal management of patients with lung adenocarcinomas requires comprehensive analysis of a substantial number of oncogenes.",
      "Notably, EGFR and ERBB2 mutations and ALK, ROS1, RET, and NTRK-family fusions are enriched in TTF1-positive adenocarcinomas arising in never smokers , and EGFR mutations are uniquely enriched in women and in eastern Asian populations . In contrast, KRAS, NRAS, and MAP2K1 (MEK1) mutations are highly enriched in smokers, whereas BRAF and MET mutations (specifically those leading to MET exon 14 skipping) are observed in both smokers and never-smokers. About two thirds of lung adenocarcinomas harbour an oncogenic mutation or fusion within one of the aforementioned genes, all of which drive signalling through the RAS/MAPK pathway. Of the remaining “oncogene-negative” tumors, a small subset may contain rare fusion events, enriched in never-smokers; others show a combination of tumor suppressor gene alterations and focal amplifications in members of the RAS/MAPK pathway, enriched in smokers . High tumor mutation burden tends to correlate with smoking status; accordingly, smoking mutation signatures are highly enriched in lung tumors, including adenocarcinomas. Other mutation processes implicated in development and progression of adenocarcinoma include DNA cytosine deaminase (APOBEC) activity and, rarely, mismatch repair deficiency . Hypermutation processes such as APOBEC, as well as acquisition of additional oncogenic mutations in genes such as PIK3CA and NF1, contribute to tumor clonal heterogeneity and adenocarcinoma progression .",
      "Unlike the specific genetic alterations seen in other tumors (e.g. sarcomas, lymphomas, and leukaemias), there are no specific histological–molecular correlations in lung cancer , although statistical associations have been drawn between KRAS mutations and IMA and tumors with a predominantly solid pattern and between EGFR mutation and lepidic-predominant non-mucinous adenocarcinomas , as well as between ALK and ROS1 rearrangements and cribriform pattern, signet-ring cell features, and psammomatous calcification .",
    ],
    criteria: [
      "Malignant epithelial tumor with glandular differentiation by architecture (lepidic, acinar, papillary, micropapillary, cribriform) or a pure solid pattern with (1) immunohistochemical expression of pneumocyte markers associated with adenocarcinoma (e.g. TTF1 or napsin A) or (2) histochemical demonstration of intracytoplasmic mucin (e.g. PASD) in a solid tumor in ≥ 5 tumor cells in each of two high-power fields (~0.4 mm2)",
      "The tumor does not fulfil criteria of other types of adenocarcinoma (e.g. IMA), although minor components of other types may be present (up to 5%)",
      "After comprehensive histological subtyping in 5–10% increments, the tumors are classified according to their predominant pattern",
      "Record the percentages of each histological pattern in pathology reports to document the predominant histological pattern (subtype) and any components of high-grade patterns to determine the tumor grade (see #14795)",
      "Immunohistochemical and/or molecular characterization of driver mutations",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Invasive mucinous adenocarcinoma of the lung",
    definition: [
      "Invasive mucinous adenocarcinoma (IMA) is a primary lung adenocarcinoma with tumor cells showing goblet cell or columnar cell morphology with abundant intracytoplasmic mucin.",
    ],
    clinical: [
      "Signs and symptoms",
      "See section Tumors of the lung: Introduction . Patients may also present with bronchorrhoea .",
    ],
    hist: [
      "Tumor cells show a goblet and/or columnar cell morphology with abundant intracytoplasmic mucin and small, basally oriented nuclei. Nuclear atypia is usually inconspicuous or absent. The surrounding alveolar spaces are often mucin-filled. Although IMAs often show lepidic-predominant growth, extensive sampling usually reveals invasive foci, including an acinar, papillary, micropapillary, solid, or cribriform growth pattern . Tumors with a mixture of mucinous and non-mucinous components should be classified as mixed invasive mucinous and non-mucinous adenocarcinoma if there is ≥ 10% of each component. It should be noted that the invasive component of invasive mucinous carcinomas often contains less intracytoplasmic mucin than lepidic components.",
    ],
    ihc: [
      "IMAs express CK7 and may show focal coexpression of CK20 and/or CDX2 but are usually negative for TTF1 and napsin A . HNF4α and GATA6 have recently been described in this type of adenocarcinoma, but neither of these markers is specific.",
      "Grading",
      "There is no established grading system for IMAs.",
    ],
    diff: [
      "IMAs are separated from mucinous adenocarcinoma in situ and minimally invasive adenocarcinoma on the basis of specified criteria (see section Adenocarcinoma in situ of the lung, and section Minimally invasive adenocarcinoma of the lung), although such tumors are extremely rare. Due to their similar morphology, IMAs must be specifically separated from metastatic adenocarcinomas from extrapulmonary sites including the pancreatobiliary system, gastrointestinal tract, and ovary. Mucinous breast carcinomas usually express GATA3 and ER . SATB2 expression and strong CK20 and CDX2 can help in distinction from mucinous colorectal adenocarcinomas, which occasionally also express TTF1 . Clinical and radiological correlation is important, particularly in difficult cases. Differences between IMAs and non-mucinous adenocarcinoma in situ, minimally invasive adenocarcinoma, and lepidic-predominant adenocarcinoma are presented in #14096 .",
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "The commonest molecular alterations in IMAs are KRAS mutations (~60% of cases), mostly p.G12D and p.G12V, similar to in gastrointestinal carcinomas . Unlike in non-mucinous adenocarcinomas, EGFR mutations are rare (~1% of cases) . Oncogenic fusions that are mutually exclusive with KRAS mutations occur in about 12% of cases and provide therapeutic (or potentially therapeutic) targets. The commonest fusions involve NRG1, followed by ALK, ERBB2, ERBB4, BRAF, RET, ROS1, and NTRK1 .",
    ],
    criteria: [
      "Adenocarcinoma composed of goblet and/or columnar cells with abundant apical intracytoplasmic mucin frequently with small basally oriented nuclei",
      "Exclusion of metastatic mucinous adenocarcinoma from other sites",
      "Does not fulfil criteria for mucinous adenocarcinoma in situ or minimally invasive adenocarcinoma",
      "Confirmation of intracytoplasmic mucin with a histochemical stain (e.g. PASD)",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Colloid adenocarcinoma of the lung",
    definition: [
      "Colloid adenocarcinoma is an invasive adenocarcinoma where extensive pools of extracellular mucin distend alveolar spaces and destroy alveolar walls, up to the complete effacement of underlying lung parenchyma.",
    ],
    clinical: [
      "These are commonly incidentally detected localized masses on imaging .",
    ],
    hist: [
      "Colloid adenocarcinoma shows abundant extracellular mucin in pools, which distend alveolar spaces and destroy their walls, showing an overtly invasive growth pattern into the alveolar spaces. Mucin deposits enlarge and dissect through the lung parenchyma, creating pools of mucin-rich matrix. The tumor cells are mucin-laden cuboidal to tall columnar cells, sometimes exhibiting signet-ring morphology. They can float in mucin pools or focally line residual alveolar walls or fibrous tissue surrounding mucin pools . Tumor cells can be inconspicuous and well differentiated, making diagnosis difficult, particularly in small biopsies and frozen sections. They may show pseudostratification and cytological atypia; however, typically the mitotic count is low and necrosis is absent. An inflammatory infiltrate with histiocytes and a giant cell reaction to the mucin may be seen. The extremely rare tumors previously classified as mucinous cystadenocarcinoma are now included in colloid adenocarcinoma.",
    ],
    ihc: [
      "Colloid adenocarcinoma exhibits admixed intestinal markers (CDX2, MUC2, CK20). However, colloid adenocarcinomas are also consistently CK7-positive. Staining for TTF1, napsin A, and EMA (MUC1) is either negative or weak and focal .",
    ],
    diff: [
      "The differential diagnosis comprises metastases of mucinous carcinoma from other organs, including the gastrointestinal tract, pancreas, and breast. For lung primary tumors, invasive mucinous adenocarcinoma generally shows preserved alveolar walls lacking the large pools of mucin destroying alveolar walls characteristic of colloid adenocarcinoma. Although colloid adenocarcinoma is rarely mixed with other adenocarcinoma subtypes, ≥ 50% of the tumor should have this appearance to warrant the diagnosis of colloid adenocarcinoma.",
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "About one half of tumors show KRAS mutations , with molecular similarities to invasive mucinous adenocarcinoma of the lung and mucin-producing gastrointestinal and pancreatic intraductal papillary mucinous neoplasms . Other frequently detected mutations are in STK11 and PARP1 .",
    ],
    criteria: [
      "Abundant pools of extracellular mucin that distend alveolar spaces and destroy their walls",
      "Tumor cells are mucin-filled, cuboidal to columnar, and either floating within the mucin pools or lining fibrous walls of mucin-filled spaces",
      "≥ 50% colloid pattern when mixed with other adenocarcinoma subtypes",
      "Distinction from metastases from the other organs",
      "Bland cytology of tumor cells in mucin pools",
      "Frequent positivity for CK7 and CDX2",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Fetal adenocarcinoma of the lung",
    definition: [
      "Fetal adenocarcinoma of the lung is pulmonary adenocarcinoma resembling developing fetal lung in its pseudoglandular stage.",
    ],
    clinical: [
      "Low-grade fetal adenocarcinomas are often discovered incidentally . On imaging, fetal adenocarcinomas are peripherally located, well-demarcated tumors ranging from 10 to 120 mm in size . Low-grade fetal adenocarcinoma occurs in younger individuals, with an almost equal sex ratio , whereas high-grade fetal adenocarcinoma is more common in elderly men who are heavy smokers .",
    ],
    hist: [
      "The tumors resemble airway epithelium of the fetal lung, displaying complex glandular, papillotubular, or cribriform structures composed of pseudostratified columnar cells with glycogen-rich clear to mildly eosinophilic cytoplasm forming subnuclear vacuoles . Sheet-like growth may also be present .",
      "Low-grade fetal adenocarcinomas typically show relatively small, round, and monotonous nuclei and morule formation, with low nuclear atypia and inconspicuous nuclei . Necrosis is usually punctate, if present. High-grade fetal adenocarcinoma displays more diffuse nuclear atypia, absence of morule formation, and broad necrosis. High-grade fetal adenocarcinoma is commonly mixed with other adenocarcinoma patterns, such as hepatoid and enteric, high-grade neuroendocrine, and conventional adenocarcinomas . At least 50% of the entire tumor should display the histology of high-grade fetal adenocarcinoma for the diagnosis.",
      "Nuclear/cytoplasmic expression of β-catenin is observed in low-grade fetal adenocarcinoma, whereas membranous expression of β-catenin is predominant in high-grade fetal adenocarcinoma . Low-grade fetal adenocarcinoma is positive for TTF1, whereas approximately 50% of high-grade fetal adenocarcinomas are negative. Both are frequently positive for neuroendocrine markers. High-grade fetal adenocarcinoma commonly expresses oncofetal proteins such as AFP, SALL4, and glypican-3 (GPC3) .",
      "The differentiation between low-grade fetal adenocarcinoma and high-grade fetal adenocarcinoma is essential because of the marked difference in prognosis. They need to be differentiated from pulmonary blastoma, carcinosarcoma with a high-grade fetal adenocarcinoma component, and metastatic endometrioid carcinoma .",
    ],
    ihc: [],
    diff: [
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Enteric-type adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "In low-grade fetal adenocarcinoma, CTNNB1 mutations are common . DICER1 mutation has been reported . Other major driver mutations, including KRAS, EGFR, BRAF, and PIK3CA mutations, are rare to absent.",
    ],
    criteria: [
      "Adenocarcinoma resembling fetal lung airway epithelium of pseudoglandular stage",
      "Low-grade fetal adenocarcinoma shows mild nuclear atypia and aberrant nuclear/cytoplasmic β-catenin expression",
      "High-grade fetal adenocarcinoma shows severe nuclear atypia",
      "High-grade fetal adenocarcinomas are frequently mixed with other adenocarcinoma patterns and should constitute ≥ 50% of the entire tumor",
      "Low-grade fetal adenocarcinoma should express TTF1",
      "High-grade fetal adenocarcinoma should have predominantly membranous β-catenin expression",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Enteric-type adenocarcinoma of the lung",
    definition: [
      "Enteric-type adenocarcinoma is a primary pulmonary adenocarcinoma that resembles colorectal adenocarcinoma.",
    ],
    clinical: [
      "The clinical features are not substantially different from those of other lung adenocarcinomas. According to the few reports available in the literature, most of the patients are elderly men and smokers with advanced-stage disease . It is crucial to exclude metastatic colorectal carcinoma, which is more common than primary enteric-type adenocarcinoma in the lung, by careful clinical evaluation .",
    ],
    hist: [
      "The histological features of this tumor resemble those of colorectal adenocarcinoma. It displays acinar, cribriform, or papillotubular structures with common intraluminal necrotic cellular debris . The cells are columnar in shape, with cigar-shaped nuclei. The luminal surfaces of tumor glands are flat with occasional brush borders. Mitotic figures are frequently observed. The stroma is often desmoplastic, commonly with prominent inflammatory cell infiltrates. The enteric pattern can be admixed with other patterns of adenocarcinomas; diagnosis of enteric adenocarcinoma should be made when the enteric component is ≥ 50% of the tumor .",
    ],
    ihc: [
      "The morphological features are supported by positive intestinal markers; CK20 and MUC2 are expressed in about half and one third of cases, respectively, whereas CDX2, villin, and HNF4α are expressed in the majority . New intestinal markers, SATB2 and cadherin 17, are expressed rarely . CK7 expression in > 80% of tumors cells helps differential diagnosis from colorectal adenocarcinoma. TTF1 expression can be absent in more than half of cases .",
    ],
    diff: [
      "Tumors that resemble colorectal carcinoma but express only pneumocytic markers are better classified as pulmonary adenocarcinoma with enteric morphology, and not as enteric adenocarcinoma .",
      "Atypical adenomatous hyperplasia of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenocarcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Minimally invasive adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive non-mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Invasive mucinous adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Colloid adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Fetal adenocarcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "KRAS mutations are more frequent in enteric adenocarcinoma than in usual adenocarcinoma . Recent reports suggested molecular features shared with lung cancer (mutation profile and DNA methylation pattern), as well as with colorectal cancer (high tumor mutation burden and DNA mismatch repair gene mutations), but without APC mutations .",
    ],
    criteria: [
      "Histology resembling that of colorectal adenocarcinoma in ≥ 50% of tumor",
      "Expression of at least one intestinal marker (CDX2, CK20, HNF4α, or MUC2)",
      "Clinical exclusion of metastasis from colorectal carcinoma",
      "A tumor with enteric morphology and expression of intestinal markers (CDX2, CK20, HNF4α, or MUC2) and coexpression of TTF1 or CK7",
    ],
    group: "Adenocarcinoma and Precursor Lesions",
  },
  {
    name: "Squamous dysplasia and carcinoma in situ of the lung",
    definition: [
      "Squamous dysplasia and squamous carcinoma in situ (SCIS) are preinvasive squamous lesions that are precursors of squamous cell carcinoma (SCC), arising in the bronchial epithelium. They are part of a continuum of recognizable neoplastic histological changes in airway epithelium and associated with accumulation of somatic genetic alterations.",
    ],
    clinical: [
      "Signs and symptoms",
      "Squamous dysplasia and SCIS are asymptomatic and diagnosed incidentally on bronchoscopy. Squamous dysplasia occurs in 40% of heavy smokers (> 30 pack-years) or in patients with obstructive airway disease . Preinvasive squamous lesions are more frequent in men and in patients exposed to asbestos and other occupational carcinogens .",
    ],
    hist: [
      "In response to irritants and carcinogens, the bronchial epithelium may show basal cell hyperplasia or squamous metaplasia with loss of normal goblet and ciliated cells. These lesions are not considered preneoplastic per se. Further exposure leads to their progression to mild, moderate, and severe dysplasia and ultimately to SCIS. Dysplasia can be graded as low-grade (mild and moderate dysplasia) and high-grade (severe dysplasia) – see #14685 . Dysplasia may be angiogenic and papillary , but these features have no known prognostic significance. Distinction between different subtypes of dysplasia and SCIS is based on cell size and maturation, nuclear features, cell orientation, and epithelial thickness. This grading system is somewhat theoretical, because morphological changes are a continuum, but the reproducibility of histological criteria among trained observers has been good .",
    ],
    ihc: [
      "Preinvasive squamous lesions demonstrate a diagnostic immunohistochemical profile similar to that of invasive SCCs (CK5/6+, p63/p40+). Proliferative activity increases along with severity of dysplasia, as evidenced by expression of Ki-67 . Increased expression of p53 protein is often present . Expression of markers such as cyclin D1 and cyclin E , VEGF , and MDM2 , as well as BCL2:BAX ratio , reflecting oncogene activation, gradually increases along with the severity of the lesions, whereas expression of tumor suppressor gene markers (i.e. FHIT, p16, p14ARF) is gradually lost .",
    ],
    diff: [
      "Mild dysplasia must be distinguished from basal cell (reserve cell) hyperplasia and squamous metaplasia. The distinction between SCIS and invasive carcinoma may be difficult on small fragments, because SCIS can extend to bronchial gland ducts, mimicking invasion; however, necrosis and the presence of an endoscopic mass favor an invasive process . Dysplasia and SCIS can coexist with small cell lung carcinoma, with pagetoid migration of small cells within the dysplastic epithelium.",
      "Squamous cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Not relevant"],
    criteria: [
      "Squamous differentiation of bronchial epithelium accompanied by progressive abnormalities in nuclear features, cell size and maturation, cell orientation, and epithelial thickness associated with degree of dysplasia (mild, moderate, severe) and carcinoma in situ",
      "See also #14685 .",
    ],
    group: "Squamous Precursor and Carcinoma",
  },
  {
    name: "Squamous cell carcinoma of the lung",
    definition: [
      "Squamous cell carcinoma (SCC) is a malignant epithelial tumor characterized by the presence of keratinization, intercellular bridges, or immunohistochemical markers of squamous cell differentiation.",
    ],
    clinical: [
      "The signs and symptoms of SCC are similar to those of other non-small cell lung carcinomas (see section Tumors of the lung: Introduction) but are generally related to the tumor location. SCC has a tendency to be locally aggressive, with progressive involvement of peribronchial structures through direct invasion, but distant metastases occur similarly to other non-small cell lung carcinomas. Symptoms are related to endobronchial obstruction, leading to hemoptysis, cough, and recurrent pneumonitis. With central tumors, the proximity to the carina is a crucial factor for planning surgical treatment . Peripherally, SCC may show cavitation with superimposed fungal and bacterial infections .",
    ],
    hist: [
      "Keratinizing, non-keratinizing, and basaloid SCC subtypes are recognized, with the same histomorphological features as SCCs at other anatomical regions.",
      "Keratinizing SCC is characterized by morphological features of keratinization (presence of keratinization, pearl formation, and/or intercellular bridges). The extent of keratinization varies with the degree of differentiation: it is prominent in better-differentiated tumors where there is typically widespread keratinization, although it may be present only focally or be less apparent in those that are more poorly differentiated.",
      "Non-keratinizing SCC is a solid non-small cell carcinoma that lacks keratinization. In these tumors, the squamous cell differentiation requires confirmation by immunohistochemical markers (see below). The presence of intracellular mucin in a few cells does not exclude tumors from this category. The issue of small-sample diagnosis is addressed in section Small diagnostic samples . Some non-keratinizing SCCs may morphologically resemble urothelial transitional cell carcinoma.",
      "Basaloid SCC is characterized by small to intermediate-sized cells with lobular architecture and peripheral palisading that lack squamous morphology, but it shows immunohistochemical expression of squamous markers. Cytoplasm is scant but well defined. Mitotic count is high (15–50 mitoses/2 mm2) and the Ki-67 index is very high (50–80%). Keratin pearl formation may be seen. Rosettes can be seen. Stroma may show a hyaline or mucoid appearance. Carcinoma in situ is frequent. SCCs (whether keratinizing or non-keratinizing) with a basaloid component of ≥ 50% are classified as basaloid SCC.",
      "Other histological features",
      "All histological subtypes of SCC can show a variety of unusual patterns, including spindle cell morphology and clear cell cytological changes, as well as papillary, pseudovascular, or alveolar-filling patterns.",
      "There is currently no established grading system for SCC of the lung.",
    ],
    ihc: [
      "Diffuse positive staining with a squamous cell marker and negative staining for TTF1 confirm the diagnosis of SCC, although some markedly keratinized tumors may show lack of staining with squamous cell markers. In biopsies, the p40-positive staining rate of tumors cells should be > 50% . p40 is considered the most specific marker for SCCs, whereas high-molecular-weight cytokeratins (CK5/6, 34βE12), desmocollin, desmoglein, and p63 are less specific markers of squamous cell differentiation . Neuroendocrine markers can occasionally be positive (especially CD56), but if p40 is diffusely positive, the tumor is classified as SCC.",
    ],
    diff: [
      "The differential diagnosis of SCC varies depending on the histological subtype.",
      "The main differential diagnoses are between poorly differentiated or basaloid SCC versus poorly differentiated non-small cell lung carcinoma NOS, particularly on small biopsy specimens with limited tumor tissue (see section Small diagnostic samples), or large cell carcinoma with a null phenotype in resection specimens. In these cases, phenotyping by a limited panel of immunomarkers, including the most specific and sensitive primary antibodies indicating squamous cell (p40) and adenocarcinoma (TTF1) histology, is required . Mucin stains may be misleading, because SCC cells may be focally positive. Tumor entrapment of bronchial cells or peribronchial salivary glands may erroneously lead to a diagnosis of adenocarcinoma or adenosquamous carcinoma. It is well known that a subset of adenocarcinomas can show (although rarely) a pseudosquamous appearance, and some SCC has a pseudoadenocarcinomatous morphology .",
      "Mucoepidermoid carcinoma may be challenging in small biopsy or cytology. However, it should show a mucin-producing glandular component and/or a MAML2 translocation .",
      "Basaloid SCC must be differentiated from large cell neuroendocrine carcinoma (LCNEC), small cell carcinoma (small cell lung carcinoma), high-grade adenoid cystic carcinoma, NUT carcinoma, and poorly differentiated squamous cell or adenocarcinoma. Palisading and rosette-like structures, as well as some degree of neuroendocrine marker expression, can be seen in basaloid SCCs mimicking LCNEC. Some basaloid SCCs have very small tumor cells, morphologically resembling or identical to small cell lung carcinoma. However, diffuse p40 expression favors basaloid SCC and excludes LCNEC or small cell lung carcinoma. High-grade adenoid cystic carcinomas can express SOX10, and if better-differentiated areas are present, these may show dual staining of CAM5.2, which is strong in ductal/luminal cells but weak in myoepithelial cells, with positive p63 and S100 in myoepithelial cells. Adenoid cystic carcinomas also can have MYB-NFIB or MYBL1-NFIB fusions by FISH (see section Adenoid cystic carcinoma of the lung). NUT carcinomas express positive staining with the NUT antibody or NUT gene fusion by molecular analysis (see section NUT carcinoma of the thorax) and are more likely to be encountered in young and/or never-smoker patients.",
      "Lymphoepithelial carcinoma has a squamous phenotype but is usually clearly recognized by the dense intratumoral inflammatory cells, positive in situ hybridization for EBV, and frequent lack of strong smoking history in most cases (see section Lymphoepithelial carcinoma of the lung).",
      "Squamous dysplasia and carcinoma in situ of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "EGFR mutation or ALK rearrangement can occur in lung SCC. This possibility should be considered in young never-smoking patients, in particular those with a history of lung adenocarcinoma with one of these genetic alterations .",
    ],
    criteria: [
      "Definitive morphological features such as intercellular bridges and/or keratinization, or a poorly differentiated tumor with immunohistochemical evidence of squamous cell differentiation (positive p40 and negative TTF1)",
      "Keratinizing SCC can be diagnosed without the use of immunostains",
      "The basaloid component should be ≥ 50% for the diagnosis of basaloid SCC",
      "Exclusion of possible metastasis from SCC at extrapulmonary sites or other primary neoplasms with squamous cell differentiation (e.g. NUT carcinoma, mucoepidermoid carcinoma, SMARCA4-deficient tumor, or thymic SCC)",
    ],
    group: "Squamous Precursor and Carcinoma",
  },
  {
    name: "Lymphoepithelial carcinoma of the lung",
    definition: [
      "Lymphoepithelial carcinoma is a poorly differentiated squamous cell carcinoma (SCC) admixed with variable amounts of lymphoplasmacytic infiltrate, frequently associated with EBV.",
    ],
    clinical: [
      "Signs and symptoms",
      "As many as one third of cases are identified by an incidental radiographic finding . Cough with or without blood-tinged sputum is the most common presenting symptom . Others include chest pain, body-weight loss, and hemoptysis .",
    ],
    hist: [
      "Histology",
      "Most tumors show a syncytial pattern of growth and a marked lymphoplasmacytic infiltration within and between the tumor islands. In a minority of cases, lymphoplasmacytic infiltration is not so prominent, resulting in a morphology resembling that of non-keratinizing SCC . Tumor cells show a moderate amount of eosinophilic cytoplasm, large vesicular nuclei, and prominent eosinophilic nucleoli. Focal keratinization, spindle cell growth, and intratumoral amyloid deposition can occur . The mitotic count is variable . The tumor mostly has pushing borders at the interface with the adjacent lung parenchyma and grows in the form of irregularly shaped islands or diffuse sheets with infrequent necrosis . Spread through alveolar spaces (spread through airspaces) of the tumor cells can be observed . The stroma may show a non-necrotizing granulomatous reaction .",
    ],
    ihc: [
      "The tumor cells show diffuse staining for pancytokeratin, CK5/6, p40, and p63, indicating squamous differentiation. Diffuse positive staining for p40/p63 is characteristic, and negative staining for these markers is exceptional. The accompanying lymphoid infiltrate comprises a mixture of CD3-positive T cells and CD20-positive B cells.",
    ],
    diff: [
      "The tumor can mimic metastatic non-keratinizing SCC of the nasopharynx, poorly differentiated non-small cell carcinoma and NUT carcinoma arising in the lung, and non-Hodgkin lymphomas. This diagnosis should be considered when a pulmonary non-keratinizing SCC is encountered in a young never-smoker, particularly if the patient is from Asia. Metastatic carcinoma must be excluded by careful evaluation of the nasopharynx in addition to correlation with a history of any known previous neoplasm. NUT carcinoma can show prominent infiltrating neutrophils and positivity for NUT by immunohistochemical staining (see section NUT carcinoma of the thorax). Lymphoma is negative for epithelial markers but positive for lymphoid markers (see the sections on section haematolymphoid tumors) .",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinosarcoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Thoracic SMARCA4-deficient undifferentiated tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Demonstration of EBV is usually by in situ hybridization for EBER.",
    ],
    criteria: [
      "Non-keratinizing SCC with syncytial-appearing tumor cells, vesicular nuclei, and distinct nucleoli",
      "Lymphoplasmacytic infiltrate between and within tumor islands",
      "Exclusion of metastatic nasopharyngeal carcinoma clinically",
      "EBER in situ hybridization positive in EBV-associated tumors, but negative in EBV-independent tumors",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Large cell carcinoma of the lung",
    definition: [
      "Large cell carcinoma (LCC) is an undifferentiated non-small cell carcinoma (NSCC) that lacks the cytological, architectural, immunohistochemical, and histochemical features of small cell carcinoma, adenocarcinoma, or squamous cell carcinoma (SCC), in addition to giant cell, spindle cell, or pleomorphic carcinoma. The diagnosis requires a thoroughly sampled resected tumor and cannot be made on non-surgical biopsy or cytology.",
    ],
    clinical: [
      "The symptoms, imaging, and tumor spread of LCC are similar to those of other NSCCs (see section Tumors of the lung: Introduction).",
    ],
    hist: [
      "LCC is a diagnosis of exclusion in a surgically resected NSCC with no clear-cut small cell carcinoma, SCC, or adenocarcinoma in addition to giant cell, spindle cell, or pleomorphic carcinoma on morphology or after immunohistochemistry and/or mucin stains. The tumor comprises sheets or nests of large polygonal cells with vesicular nuclei, prominent nucleoli, and moderate amounts of cytoplasm. Clear cell and/or rhabdoid cytological features may be present, and these should be documented in percentage increments within the LCC .",
      "Immunohistochemistry and histochemistry",
      "Immunohistochemistry should be undertaken, unless not feasible for logistical reasons. In regard to sensitivity and specificity, the immunohistochemical markers of first choice to detect adenocarcinomatous and squamous cell differentiation are TTF1 and p40, respectively . The diagnosis also requires mucin staining to be negative or show < 5 positive cells in two high-power fields (~0.4 mm2). Cytokeratin staining should also be undertaken to confirm epithelial differentiation as required. Cases that are negative for TTF1 and p40 should be termed “LCC (null immunophenotype)”. If staining does not provide a clear answer (see #14629), then cases should be termed “LCC (unclear immunophenotype)”. If immunohistochemistry cannot be undertaken due to lack of available blocks or unstained slides, cases should be termed “LCC (additional stains unavailable)”.",
    ],
    ihc: [],
    diff: [
      "The main differential diagnosis of LCC is presented in Table #14437. Adenocarcinomas with a solid pattern, which stain with TTF1 (and/or napsin A), and non-keratinizing SCC, which stains with p40 (and/or CK5/6), require exclusion. Negative mucin stains are also needed to exclude solid adenocarcinoma with mucin. Most cases of adenosquamous carcinoma show morphological evidence of both lines of differentiation, but rare cases may show separate areas of TTF1 and p40 expression in a morphologically undifferentiated NSCC. Large cell neuroendocrine carcinoma (LCNEC) is excluded through recognition of neuroendocrine morphology and positive immunohistochemical staining for neuroendocrine markers (chromogranin, synaptophysin, and/or CD56). Neuroendocrine markers are not recommended on cases lacking neuroendocrine morphology. However, if a morphologically undifferentiated NSCC is stained and shows a profile of cytokeratin+, TTF1−, p40−, and neuroendocrine marker+, it should be termed “LCC with neuroendocrine differentiation (or LCC with neuroendocrine immunophenotype)” (see section Lung neuroendocrine neoplasms: Introduction) . Rhabdoid cells sometimes raise the possibility of a carcinosarcoma showing areas of rhabdomyosarcomatous differentiation, but LCC with rhabdoid cytology is positive for cytokeratins and negative for desmin and myogenin . The presence of rhabdoid morphology in a tumor resembling LCC should raise the consideration of thoracic SMARCA4-deficient undifferentiated tumor (see section Thoracic SMARCA4-deficient undifferentiated tumor). Cytokeratin positivity and other markers, as well as clinicoradiological correlation, are often needed, on a case-by-case basis, to exclude the possibility of extrathoracic unsuspected poorly differentiated carcinoma, lymphoma, melanoma, or mesothelioma. Metastatic carcinoma from elsewhere should be excluded, depending on patient sex and tumor morphology, on the basis of clinical correlation (see section Chapter 9: Metastases). A tumor showing > 10% of pleomorphic features (spindle and/or giant cells) should be classified as a pleomorphic carcinoma.",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinosarcoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "In tumors diagnosed as LCC on surgical resection but that relapse with advanced disease, molecular testing aimed at identification of targetable genetic therapy is recommended if it was not carried out at the time of initial surgical resection and diagnosis.",
    ],
    criteria: [
      "Undifferentiated NSCC, lacking any evidence of glandular, squamous cell, or neuroendocrine differentiation",
      "The diagnosis should only be rendered on surgical resection and cannot be made on small biopsy or cytology",
      "Negative immunohistochemistry with markers associated with adenocarcinoma (TTF1 or napsin A), SCC (p40 or CK5/6), and neuroendocrine carcinoma (NEC; only when there is neuroendocrine morphology as well as positive chromogranin, synaptophysin, CD56)",
      "If available, molecular analysis to look for genetic alterations that may guide therapy",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Adenosquamous carcinoma of the lung",
    definition: [
      "Adenosquamous carcinoma is a carcinoma showing components of both squamous cell carcinoma (SCC) and adenocarcinoma, with each accounting for ≥ 10% of the tumor.",
    ],
    clinical: [
      "Patients with adenosquamous lung cancers present with manifestations similar to those of patients with other NSCCs (see section Tumors of the lung: Introduction); adenosquamous lung cancers are more commonly peripheral than central, and they have heterogeneous attenuation on contrast CT . Peripheral tumors may show central scarring and spiculation or pleural indentation, and some may have a peripheral ground-glass opacity and air bronchogram . None of these features are specific.",
    ],
    hist: [
      "Adenosquamous carcinoma is composed of a mixture of variable proportions of adenocarcinoma and SCC components, with each accounting for ≥ 10% of the tumor. This can occur in four different ways, depending on whether the differentiation is detectable by H&E light microscopy and/or immunohistochemistry (see #15193). Any histological pattern of adenocarcinoma can be seen in the adenocarcinoma component, and the squamous component can be of keratinizing or non-keratinizing subtype. It is easier to diagnose adenosquamous cell carcinoma if well-differentiated components of each carcinoma are present. Diagnosis is more difficult if the tumor has a partly solid adenocarcinoma component or a non-keratinizing SCC component. Diagnosis is easier if the components are regionally discrete within the tumor, more difficult if they are merged and intermingled.",
      "The criterion of 10% for each component is arbitrary, but if a minor component of adenocarcinoma that does not reach the threshold of 10% is present, it should be reported, because the tumor may carry actionable mutations regardless of the adenocarcinoma proportion . The identification of both components is dependent on the extent of histological sampling of the tumor. For tumors < 30 mm it is appropriate to sample the entire tumor and for larger tumors at least one section per 10 mm of tumor diameter. Definitive diagnosis requires a resection specimen, although it may be suggested on the basis of findings in small biopsies or cytology or excisional biopsies.",
    ],
    ihc: [
      "Each component shows the immunoprofile of conventional adenocarcinoma or SCC, respectively, although if the morphology is unequivocal on H&E stains, immunohistochemistry is not required for diagnosis. The best immunohistochemical marker for adenocarcinoma is TTF1 and for SCC p40. Because 10–20% of lung adenocarcinomas are TTF1-negative, positive mucin stains would be required to confirm adenocarcinoma differentiation in a solid, TTF1-negative component. It is not clear how to classify the exceptionally rare tumors where there is coexpression of TTF1 and p40 in the same tumor cells; however, these cases do not meet the current criteria for adenosquamous carcinoma . Some poorly differentiated, solid adenocarcinomas may focally express p40 as well as TTF1. An additional partly solid component with a null immunoprofile may exist in a tumor that is otherwise adenosquamous carcinoma, but its presence does not change the diagnosis.",
      "The topic of NSCCs with adenocarcinoma and SCC components in small biopsies and/or cytology specimens is addressed in section Small diagnostic samples .",
    ],
    diff: [
      "The differential diagnosis includes SCC, adenocarcinoma, high-grade mucoepidermoid carcinoma, and reactive non-neoplastic lesions. When SCCs or adenocarcinomas have an extensive solid (undifferentiated) component, it can be useful to perform TTF1 and/or a mucin stain or p40 to investigate whether this may represent a second component, thus qualifying for adenosquamous carcinoma. If this solid component is negative for all of these markers, the tumor should be classified according to the glandular or keratinizing squamous component. In addition, entrapped TTF1-positive pneumocytes and squamous metaplasia of entrapped bronchiolar structures should be differentiated from a possible adenosquamous carcinoma component. A distinction should be made from morules or morule-like components that can be seen in association with papillary-pattern adenocarcinoma , and immunohistochemical stains are particularly important to differentiate from mimics, such as solid-type adenocarcinoma with squamoid features and pseudogland formation in SCC .",
      "Mucoepidermoid carcinoma, in particular high-grade type, constitutes a major differential diagnosis for adenosquamous carcinoma. Mucoepidermoid carcinoma more often shows (1) a characteristic mixed cellular composition of mucinous, squamoid, and intermediate cells; (2) a proximal exophytic endobronchial location; (3) areas of classic low-grade mucoepidermoid carcinoma; (4) a lack of keratinization or squamous pearl formation; (5) no overlying SCC in situ ; and (6) absence of a tubular, acinar, and papillary growth pattern. A lack of TTF1 in a mucoepidermoid carcinoma may also be useful for differential diagnosis . MAML2 rearrangement is exclusively seen in mucoepidermoid carcinoma . Rare adenosquamous carcinomas have morphological overlap with mucoepidermoid carcinomas in that they have a squamous component with cells positive for p63 or p40 at the periphery of tumor cell nests and a mucin-producing adenocarcinoma component showing a cribriform or tubular pattern that lacks TTF1 or napsin A, and MAML2 rearrangement . Some of these tumors have ALK rearrangements .",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinosarcoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Thoracic SMARCA4-deficient undifferentiated tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "The genetic characteristics of adenosquamous carcinoma are intermediate between those of adenocarcinoma and SCC; thus, adenosquamous carcinoma does not have definite diagnostic molecular findings. Adenosquamous carcinoma may harbour gene rearrangements in ALK , ROS1 , or RET ; gene mutations in EGFR , KRAS , AKT1 , ERBB2 (HER2) , PIK3CA , or STK11 (LKB1) ; or FGFR1 amplification .",
    ],
    criteria: [
      "A tumor with distinct cell populations of adenocarcinoma and SCC, each accounting for ≥ 10% of tumor cells",
      "Immunohistochemistry and/or mucin stains are required when the tumor contains a non-keratinizing or basaloid squamous component (i.e. p40) or a solid adenocarcinoma component (i.e. TTF1 or mucin stains)",
      "Exclusion of mucoepidermoid carcinoma and other mimics with immunohistochemistry and molecular testing",
      "Molecular testing for lung adenocarcinoma driver mutations may be useful",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Pleomorphic carcinoma of the lung",
    definition: [
      "Pleomorphic carcinoma is a poorly differentiated non-small cell lung carcinoma (non-small cell carcinoma [NSCC], including adenocarcinoma, squamous cell carcinoma [SCC], and/or large cell carcinoma [LCC]) containing at least a 10% component of spindle and/or giant cells, or a carcinoma that consists entirely of spindle and/or neoplastic giant cells. The definitive diagnosis of pleomorphic carcinoma may be rendered only in surgical specimens.",
    ],
    clinical: [
      "The signs and symptoms of pleomorphic carcinoma are similar to those of other NSCCs (see section Tumors of the lung: Introduction). Presenting symptoms include cough, pain, hemoptysis, and dyspnea . Imaging shows a large central or peripheral mass, usually in the upper lobe, showing low-attenuation central necrosis, frequent pleural invasion, ill-defined borders with a ground-glass halo, and intense PET avidity .",
    ],
    hist: [
      "Pleomorphic carcinoma is composed of ≥ 10% spindle and/or giant cells admixed with components of adenocarcinoma (31–72% of cases), SCC (12–26%), or LCC (up to 43%) . Some tumors are composed only of spindle cells and/or tumor giant cells. The epithelial and spindle/giant cells may be intimately admixed or sharply demarcated from one another. When present, adenocarcinoma, SCC, or LCC components should be mentioned in the pathology report (e.g. “pleomorphic carcinoma with adenocarcinoma”). Sometimes, osteoclast-type giant cells are scattered throughout the tumor, and these may be keratin-negative and positive for macrophage markers . Variable amounts of stroma are present in pleomorphic carcinoma, which may be collagenous or myxoid. Necrosis, hemorrhage, and vascular invasion are common. Pleomorphic carcinoma may exhibit spread through airspaces . Giant cell carcinoma consists solely of highly pleomorphic giant cells with multiple irregular, sometimes multilobate nuclei and abundant eosinophilic to granular cytoplasm with frequent leukocyte emperipolesis. Spindle cell carcinoma consists solely of neoplastic spindled cells of variable morphology, lacking differentiated elements. The elongated tumor cells may be markedly atypical or deceptively bland, featuring fascicular or storiform growth along with variable chronic inflammation sometimes resembling inflammatory myofibroblastic tumor . The approach to tumors with these features found in small biopsies and cytology specimens is discussed in section Small diagnostic samples .",
    ],
    ihc: [
      "Immunohistochemistry is helpful to highlight the different cell components. The NSCC components are usually positive for pancytokeratin while the spindle and giant cell components are variably reactive or negative for pancytokeratin . In some cases, multiple keratins may be needed to confirm epithelial differentiation. Other lineage markers, such as napsin A, TTF1, or p40, are variably expressed depending on the direction of differentiation and are usually more prominent in the NSCC component, if present .",
    ],
    diff: [
      "The differential diagnosis includes carcinosarcoma, pulmonary blastoma, metastatic sarcomatoid carcinoma from various sites (breast, gastrointestinal tract, bladder, uterus, ovary), sarcoma (synovial sarcoma, epithelioid haemangioendothelioma, myxoid sarcoma, rhabdomyosarcoma), inflammatory myofibroblastic tumor, germ cell tumors, melanoma, dendritic cell sarcoma, and biphasic/sarcomatoid mesothelioma . If definite adenocarcinoma, SCC, or LCC components are present, even if keratins are completely negative in the spindle and/or giant cell component, the tumor is regarded as pleomorphic carcinoma, because malignant heterologous elements such as osteosarcoma, chondrosarcoma, or rhabdomyosarcoma are needed to diagnose carcinosarcoma (see section Carcinosarcoma of the lung). In contrast to the conventional adenocarcinoma morphology of pleomorphic carcinoma, the adenocarcinoma component of pulmonary blastoma should show endometrioid morphology (see section Pulmonary blastoma). Strong diffuse positivity for GATA3 may support the diagnosis of sarcomatoid/desmoplastic mesothelioma over pleomorphic carcinoma, but it is not entirely specific . Infrequently, reactive fibrotic processes (i.e. organizing pneumonia, scar, etc.) may also enter the differential diagnosis of bland-looking spindle cell carcinoma with prominent inflammation . If tumors with spindle and/or giant cell components have components of small cell lung carcinoma or large cell neuroendocrine carcinoma (LCNEC), rather than pleomorphic carcinoma, the tumors should be classified as combined small cell lung carcinoma or LCNEC with mention of the additional histological components.",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Thoracic SMARCA4-deficient undifferentiated tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Genetic events mirror those found in other NSCCs, particularly pulmonary adenocarcinoma . Complex chromosomal abnormalities and TP53 mutations are common . The frequency of KRAS and EGFR mutations is similar to pulmonary adenocarcinoma, when patient ethnicity and smoking history are taken into account . ALK rearrangements rarely occur . MET exon 14 skipping mutations are present in a subset . Pleomorphic carcinomas have a high incidence of PDL1 expression (60–90%), which is often stronger in the sarcomatoid areas .",
    ],
    criteria: [
      "Resection specimen showing NSCC including adenocarcinoma, SCC, and/or LCC, composed of ≥ 10% spindled and/or tumor giant cells or a carcinoma consisting entirely of spindle and giant cells",
      "Spindle cell carcinoma consists purely of malignant spindle cells",
      "Giant cell carcinoma consists purely of malignant giant cells with or without multinucleated giant cells",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Pulmonary blastoma",
    definition: [
      "Pulmonary blastoma is a biphasic tumor that consists of low-grade fetal adenocarcinoma / well-differentiated fetal adenocarcinoma and primitive mesenchymal stroma. Foci of specific mesenchymal differentiation (osteosarcoma, chondrosarcoma, or rhabdomyosarcoma) may also be present but are not required for the diagnosis.",
    ],
    clinical: [
      "The signs, symptoms, and imaging are similar to those of other non-small cell lung carcinomas (see section Tumors of the lung: Introduction). Cough, pain, and hemoptysis are common presenting symptoms . On imaging, pulmonary blastomas typically appear as well-demarcated large masses. Pulmonary blastomas are aggressive and may extend to the mediastinum or show intrapulmonary metastases . Lymph node involvement is relatively uncommon (~10%) at presentation .",
    ],
    hist: [
      "Pulmonary blastoma shows a biphasic pattern including branching glandular structures and primitive mesenchymal cells. The tumor may show extensive intermingling of these two components or may be composite with areas of solely epithelial differentiation. The glandular structures consist of pseudostratified columnar cells with relatively small, uniform, round to oval nuclei and clear to slightly eosinophilic cytoplasm, resembling endometrioid carcinoma . The cells may demonstrate subnuclear cytoplasmic vacuoles, reminiscent of secretory endometrium. Morule formation is seen in about 40% of cases . Focal keratinization is rarely observed . These features are essentially identical to those of low-grade fetal adenocarcinoma / well-differentiated fetal adenocarcinoma . One third to half of cases display areas of high-grade progression with more atypical glands resembling conventional adenocarcinoma or poorly differentiated sheet-like growth . The mesenchymal component shows closely packed primitive, oval to spindle-shaped, small blastema-like cells, with various amounts of more mature and loosely arranged fibroblast-like cells in gradual transition with the blastemal cells. The mesenchymal cells may focally show bizarre nuclei. Foci of immature striated muscle, cartilage, and bone are observed in 25% . Rare cases with unusual differentiation have been reported, including elements of various germ cell tumors, small cell carcinoma, and melanoma .",
    ],
    ihc: [
      "The epithelial component shows an immunophenotype identical to that of low-grade fetal adenocarcinoma / well-differentiated fetal adenocarcinoma, with expression of keratin (AE1/AE3, CAM5.2, CK7), EMA, and TTF1 . Neuroendocrine markers are commonly expressed in scattered cells. The mesenchymal component expresses vimentin, and tissue-specific antigens such as S100 and desmin are expressed in chondrosarcomatous and rhabdomyosarcomatous elements, respectively. Glandular elements, morules, and blastema show cytoplasmic and nuclear expression of β-catenin.",
    ],
    diff: [
      "The differential diagnosis includes fetal adenocarcinoma , carcinosarcoma , pleomorphic carcinoma, and even endometriosis. Carcinosarcoma with an adenocarcinoma component resembling high-grade fetal adenocarcinoma may be easily mistaken for pulmonary blastoma; careful examination of morphology (high-grade atypia and absence of morules) and immunohistochemistry (predominantly membranous expression of β-catenin and absence/reduction of TTF1 expression), as well as genetic analysis (no CTNNB1 mutation), may be useful in this distinction .",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinosarcoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Thoracic SMARCA4-deficient undifferentiated tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Pulmonary blastomas frequently harbour missense mutations in exon 3 of CTNNB1; this may be helpful in diagnosis and is the cause of aberrant nuclear localization of β-catenin protein, which may be detected by immunohistochemistry .",
    ],
    criteria: [
      "Biphasic morphology including low-grade fetal adenocarcinoma / well-differentiated fetal adenocarcinoma and primitive mesenchymal stroma",
      "Expression of TTF1 and nuclear/cytoplasmic localization of β-catenin in the fetal adenocarcinoma component",
      "CTNNB1 mutation",
      "Malignant heterologous elements such as osteosarcoma, chondrosarcoma, or rhabdomyosarcoma may be present",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Carcinosarcoma of the lung",
    definition: [
      "Carcinosarcoma is a malignant tumor consisting of non-small cell carcinoma (NSCC) components (usually squamous carcinoma or adenocarcinoma) combined with at least one sarcomatous heterologous element such as rhabdomyosarcoma, chondrosarcoma, or osteosarcoma.",
    ],
    clinical: [
      "Patients with carcinosarcoma may present with cough. Haemoptysis is reported for central tumors, and chest wall pain for peripheral tumors . Imaging is similar to that for other NSCCs (see section Tumors of the lung: Introduction). It typically shows a large, inhomogeneous tumor with contrast enhancement, necrosis, and occasionally calcification . Most patients (> 75%) have more than locoregional disease at presentation .",
    ],
    hist: [
      "These biphasic tumors are primarily carcinomas containing histological elements of both carcinoma and sarcoma, the latter demonstrating specific heterologous elements. A minimum proportion for the minority component is not described. Carcinomatous components include squamous cell carcinoma most commonly, followed by adenocarcinoma and large cell carcinoma . Small cell carcinoma and large cell neuroendocrine carcinoma (LCNEC) are rare in tumors with heterologous elements and should be classified as combined small cell carcinoma or LCNEC, not carcinosarcoma.",
      "The sarcomatous component includes rhabdomyosarcoma, chondrosarcoma, and osteosarcoma , alone or in combination, and rarely liposarcoma or angiosarcoma . These components are distinctive in H&E-stained sections by light microscopy, but they may require extensive sampling to be identified. Heterologous elements distinguish carcinosarcoma from pleomorphic carcinoma.",
      "High-grade fetal-type or clear cell adenocarcinoma with heterologous elements and lacking the molecular features of blastoma has been described as “blastomatoid variant of carcinosarcoma”; however, the term “blastomatoid” is not encouraged, because it could lead to confusion with pulmonary blastoma . The diagnosis of carcinosarcoma should be rendered with a comment about which specific epithelial and sarcomatous elements are present.",
    ],
    ihc: [
      "The immunohistochemistry of the carcinomatous component is that of the conventional tumors of the same type: TTF1 and napsin A in adenocarcinoma and p40 in squamous carcinoma . Heterologous sarcomatous components can be highlighted by desmin or myogenin for rhabdomyosarcoma or by S100 for chondrosarcoma, but care must be taken not to overinterpret spurious staining in undifferentiated tumor cells. The spindled areas may stain for cytokeratin or may be cytokeratin-negative. These areas are usually negative for TTF1, napsin A, or p40/p63; however, given some reactivity of sarcomas for p63, p40 may perform better, avoiding this pitfall.",
      "Pulmonary blastomas show nuclear staining for β-catenin in fetal-type and mesenchymal areas; carcinosarcomas show membranous staining, including cases with high-grade areas and clear cells, resembling fetal-type adenocarcinoma . These areas may be CDX2-positive .",
    ],
    diff: [
      "The differential diagnosis includes pleomorphic carcinoma, pulmonary blastoma, sarcoma, and mesothelioma. Pleomorphic carcinomas lack heterologous elements. Pulmonary blastomas have fetal adenocarcinoma (β-catenin nuclear-positive) and blastema-like areas. Sarcomas can have high-grade epithelioid areas, but no glands or keratinization. Mesenchymal tumors can have reactive pneumocyte entrapment, mimicking carcinoma. A notable exception is the biphasic synovial sarcoma; however, the glandular elements of these tumors lack TTF1, and the spindle component is not generally heterologous. If doubt remains, demonstration of SS18-SSX fusion would favor synovial sarcoma.",
      "Mesotheliomas that enter the differential diagnosis will be biphasic, and mesothelial markers will be demonstrable in the epithelioid elements. It is important to perform the immunohistochemistry on sections with significant amounts of the epithelioid component.",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Thoracic SMARCA4-deficient undifferentiated tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "An adenocarcinoma component may require predictive molecular profiling to identify actionable mutations.",
    ],
    criteria: [
      "Elements of both NSCC (usually squamous cell carcinoma or adenocarcinoma) and sarcoma with heterologous elements (rhabdomyosarcoma, chondrosarcoma, and osteosarcoma) must be present",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Thoracic SMARCA4-deficient undifferentiated tumor",
    definition: [
      "Thoracic SMARCA4-deficient undifferentiated tumor (SMARCA4-UT) is a high-grade malignant neoplasm that significantly involves the thorax of adults and shows undifferentiated or rhabdoid phenotype and deficiency of SMARCA4, a key member of the BAF chromatin-remodelling complex.",
    ],
    clinical: [
      "Presenting symptoms include dyspnea, pain, superior vena cava syndrome, weight loss, and symptoms referable to metastasis. Imaging typically shows a large, ill-defined and invasive PET-avid mass that compresses adjacent structures, especially when centerd in the mediastinum, but primary lung tumors may rarely be small . The tumor is aggressive, with frequent metastases at initial presentation, to lymph nodes, bones, adrenal glands, brain, and abdominal cavity/pelvis . Coexisting bulky abdominal disease may make determination of primary site difficult .",
    ],
    hist: [
      "SMARCA4-UTs consist of diffuse sheets of variably discohesive, large round to epithelioid cells with vesicular chromatin and prominent nucleoli. The nuclei are relatively monotonous, with occasional cells displaying mild to moderate pleomorphism. Rhabdoid cells may be present, although they are often a focal finding and may be absent in small specimens. Mitoses are numerous and necrosis is common. Rare findings include spindling, myxoid change, sclerosis, alveolar pattern, and clear cell change . Unequivocal evidence of epithelial differentiation (e.g. gland, papilla, or keratinization) is absent in most cases, but about 5% of cases show a combined histology with juxtaposed conventional NSCLC .",
    ],
    ihc: [
      "Complete loss of SMARCA4 (BRG1) expression is typical. However, about 25% of cases show diffuse severe reduction of SMARCA4 staining rather than complete loss . SMARCA2 (BRM) staining is lost in most cases . SMARCB1 (INI1) expression is retained. Many cases express CD34, SOX2, and/or SALL4 . p53 is overexpressed in the majority of cases . Cytokeratins are often expressed in a focal or weak manner and may be entirely negative, whereas strong and diffuse expression is lacking. Synaptophysin expression may be prominent . Claudin-4 is negative or only focally positive in virtually all cases . Rare cases may focally express TTF1, p63, p40, or WT1 . Mismatch repair proteins show a proficient pattern .",
    ],
    diff: [
      "Differential diagnosis includes lymphoma, NUT carcinoma, germ cell tumor, neuroendocrine carcinoma (NEC), large cell carcinoma, and melanoma, as well as various types of sarcomas, such as CIC-rearranged sarcoma, malignant rhabdoid tumor, and epithelioid sarcoma. SMARCA4 deficiency is observed in about 5% of conventional NSCLCs , which should be distinguished by epithelial architecture (e.g. glands), cellular cohesion, and diffuse strong keratin expression. Ancillary markers (SMARCA2, claudin-4, CD34, SALL4, and SOX2) may also be helpful, although none is entirely sensitive or specific. Because SMARCA4-UTs with a similar phenotype may metastasize to the thorax from extraneous sites (e.g. uterus, ovary, stomach, kidney, and pancreas), clinical correlation is mandatory.",
      "Lymphoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenosquamous carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pleomorphic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinosarcoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Sequencing can confirm the presence of SMARCA4 mutation, but it is not necessary for the diagnosis, because immunohistochemistry shows complete loss in most cases and is sufficient to document SMARCA4 deficiency. However, sequencing can be helpful to clarify the significance of reduced expression of SMARCA4. The mutation may not be detectable, depending on the methods used, despite SMARCA4 immunohistochemical loss . Because the second hit is often copy-neutral loss of heterozygosity, SMARCA4 FISH assay is of limited utility .",
    ],
    criteria: [
      "Tumor in adults, with significant thoracic involvement",
      "Diffuse sheets of variably discohesive, round to epithelioid, relatively monotonous cells with vesicular nuclei and prominent nucleoli",
      "No clear evidence of epithelial differentiation (except juxtaposed carcinoma in combined cases)",
      "SMARCA4 (BRG1) deficiency by immunohistochemistry",
      "SMARCA2 (BRM) deficiency by immunohistochemistry",
      "Expression of CD34, SOX2, and/or SALL4",
      "Absent or focal claudin-4 expression",
    ],
    group: "Other Primary Carcinomas",
  },
  {
    name: "Pleomorphic adenoma of the lung",
    definition: [
      "Pleomorphic adenoma is a benign tumor with epithelial and modified myoepithelial cells intermingled with a chondromyxoid stroma.",
    ],
    clinical: [
      "Patients with endobronchial tumors may present with dyspnea or hemoptysis, often associated with postobstructive pneumonia and/or atelectasis . Intraparenchymal tumors are frequently asymptomatic. Imaging shows well-circumscribed solid masses . The heterogeneity of CT and MRI corresponds to different histological elements. Tumors may be PET-positive .",
    ],
    hist: [
      "Pulmonary pleomorphic adenomas are histologically similar to pleomorphic adenomas in salivary glands. They have a prominent tubular or ductal component associated with spindled to plasmacytoid myoepithelial cells embedded in a chondromyxoid stroma. Squamous metaplasia may also be seen . Solid islands of epithelial cells with a focal myxoid stroma can be seen. Immunohistochemistry is not specific but supports a biphasic tumor. A panel of cytokeratin, S100, GFAP, p40, p63, calponin, α-SMA, and SMMHC will be variably positive. The key differential diagnosis is a metastatic salivary gland tumor (so-called benign metastasizing pleomorphic adenoma). Other differential diagnoses include pulmonary hamartoma and carcinosarcoma. Hamartomas comprise well-developed mesenchymal elements. Pulmonary carcinosarcomas have overtly malignant elements. Exceptionally, a malignancy may arise within a pleomorphic adenoma. The carcinoma component can be epithelial, myoepithelial, or mixed in origin and shows malignant features including necrosis, cellular atypia, ≥ 5 mitoses/2 mm2, and vascular and/or perineural invasion. These tumors should be called carcinoma ex pleomorphic adenoma, and the type of carcinoma should be reported .",
    ],
    ihc: [],
    diff: [
      "Adenoid cystic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Epithelial-myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucoepidermoid carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Hyalinizing clear cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Myoepithelioma and myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "A benign mixed salivary gland–type neoplasm with ductal cells, myoepithelial cells, and a chondromyxoid stromal component",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Adenoid cystic carcinoma of the lung",
    definition: [
      "Adenoid cystic carcinoma is a malignant biphasic salivary gland–type tumor consisting of epithelial and myoepithelial cells. There are three main architectural growth patterns: tubular, cribriform, and solid.",
    ],
    clinical: [
      "Common symptoms include shortness of breath, cough, wheezing, and hemoptysis due to airway obstruction . Imaging typically shows a centrally located mass that may have an endobronchial component. Adenoid cystic carcinomas are larger, more frequently involve the central airways, and have a higher median FDG uptake than mucoepidermoid carcinomas . Adenoid cystic carcinoma grows insidiously and infiltratively, sometimes extending to the lung parenchyma and mediastinum. Perineural invasion makes complete surgical resection difficult, and local recurrence is common. Metastases to remote organs are uncommon.",
    ],
    hist: [
      "Adenoid cystic carcinoma is composed of small, angulated cells with scant cytoplasm and usually homogeneous hyperchromatic nuclei, showing frequent perineural invasion and infrequent mitosis. Architecturally, it shows three growth patterns: cribriform, tubular, and solid. The most common pattern is the cribriform, characterized by nests of tumor cells with punched-out luminal spaces containing basophilic matrix. When forming tubules with two layers of cells, the luminal cells show a cuboidal appearance and the peripheral cells form a myoepithelial layer. The solid pattern consists of tumor nests without lumen formation.",
      "Immunohistochemistry demonstrates both ductal and myoepithelial phenotypes, including cytokeratin, vimentin, actin, S100, and KIT. The matrix recapitulates basement membrane–like characteristics such as collagen IV, laminin, and heparin sulfate. The differential diagnoses include carcinoid tumors, basaloid squamous cell carcinoma, and small cell carcinoma – all of which can typically be distinguished by immunohistochemical staining. Additionally, basaloid squamous cell carcinoma has a high proliferation rate, unlike most adenoid cystic carcinomas. Pleomorphic adenoma with a focally cribriform architecture may resemble adenoid cystic carcinoma. Metastasis from other organs should be carefully ruled out.",
    ],
    ihc: [],
    diff: [
      "Pleomorphic adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Epithelial-myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucoepidermoid carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Hyalinizing clear cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Myoepithelioma and myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Testing for MYB-NFIB and MYBL1-NFIB gene fusions by FISH or next-generation sequencing can help to establish the diagnosis of adenoid cystic carcinoma .",
    ],
    criteria: [
      "Adenoid cystic carcinoma is a biphasic salivary gland–type carcinoma with hyperchromatic and angulated nuclei demonstrating both ductal and myoepithelial phenotypes",
      "Metastasis from other organs should be carefully ruled out",
      "Demonstration of MYB-NFIB gene fusion",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Epithelial-myoepithelial carcinoma of the lung",
    definition: [
      "Epithelial-myoepithelial carcinoma is a biphasic malignant salivary gland–type tumor composed of an inner layer of epithelial cells forming duct-like structures and an outer layer of myoepithelial cells.",
    ],
    clinical: [
      "Owing to the common central location of epithelial-myoepithelial carcinoma of the lung, the presenting symptoms are those of bronchial obstruction, including productive cough, fever, and dyspnea. Epithelial-myoepithelial carcinoma may also be asymptomatic, especially if located in the parenchyma. Imaging shows a well-demarcated homogeneous tumor, most often with no FDG uptake on FDG PET-CT .",
    ],
    hist: [
      "Epithelial-myoepithelial carcinoma is biphasic, with epithelial and myoepithelial components. The most common pattern consists of an inner layer of cuboidal epithelial cells forming duct-like structures and an outer layer of myoepithelial cells. The epithelial cells have uniform small nuclei surrounded by eosinophilic cytoplasm. The outer myoepithelial cells often have clear cytoplasm. Mitoses are rare and there is no necrosis. In the second most common pattern, the myoepithelial cells are more eosinophilic and spindled, and they form solid areas. In the least common pattern, the myoepithelial cells predominate, with increased nuclear atypia (called myoepithelial anaplasia), which tends to correlate with a more malignant behavior .",
      "The inner epithelial cells are strongly positive for cytokeratins and negative for myoepithelial markers. The myoepithelial cells are usually strongly positive for S100 (although S100-negative cases have been reported), p40, p63, and actins and negative for CEA and HMB45 . Occasionally, there is exuberant pneumocytic hyperplasia associated with myoepithelial neoplasms (originally termed pneumocytic adenomyoepitheliomas) .",
    ],
    ihc: [],
    diff: [
      "Pleomorphic adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenoid cystic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucoepidermoid carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Hyalinizing clear cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Myoepithelioma and myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Low-grade salivary gland–type tumor",
      "Biphasic morphology with inner epithelial cells forming ducts and outer myoepithelial cells in varying proportions",
      "Myoepithelial cell positivity for S100, p40/p63, and actins",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Mucoepidermoid carcinoma of the lung",
    definition: [
      "Mucoepidermoid carcinoma (MEC) is a malignant salivary gland–type tumor that is composed of mucin-secreting cells, squamoid cells, and intermediate-type cells.",
    ],
    clinical: [
      "Presentation is usually secondary to obstruction or irritation of the airways, with symptoms of cough, hemoptysis, and recurrent infection. Symptoms are sometimes mistaken for asthma. Some patients are asymptomatic. On CT, the tumors are rounded or lobulated masses, with features of associated obstruction commonly seen .",
    ],
    hist: [
      "Low-grade tumors comprise varying numbers of mucin-secreting, squamoid, and intermediate cells. Cystic areas are typically lined by mucin-secreting cells. Solid areas comprise intermediate cells and/or non-keratinizing squamoid cells. Clear cell and oncocytic changes are often focally seen and may rarely predominate. Mitoses are rare. Background stroma may show calcification, ossification, a granulomatous reaction to extravasated mucin, and sometimes a florid inflammatory host response. High-grade tumors are rare and are mainly composed of atypical squamoid and intermediate cells, with frequent mitosis and necrosis, accompanied by variable numbers of mucin-secreting cells. All cell types are positive for cytokeratins and negative for TTF1, napsin A, SMA, and S100 . Squamoid cells are positive for p40, p63, and CK5/6.",
      "The important differential diagnosis is metastasis from a head and neck salivary gland tumor. Clinical correlation is necessary because MECs arising in other anatomical sites show MAML2 gene rearrangement and a similar morphology. MAML2 gene rearrangement is seen almost exclusively in MEC and can exclude adenosquamous carcinoma in some cases . Criteria more typical of high-grade MEC than adenosquamous carcinoma include (1) proximal exophytic endobronchial location; (2) transitional areas from low grade to high grade; (3) no overlying squamous cell carcinoma in situ; (4) lack of individual cell keratinization or squamous pearl formation; and (5) absence of tubular, acinar, and papillary growth pattern . The lack of intermediate and squamoid cells discriminates mucous gland adenoma from low-grade MEC.",
    ],
    ihc: [],
    diff: [
      "Pleomorphic adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenoid cystic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Epithelial-myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Hyalinizing clear cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Myoepithelioma and myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Testing for CRTC1-MAML2 gene fusion by FISH can help to establish the diagnosis of MEC .",
    ],
    criteria: [
      "Essential – low-grade:",
      "Cytologically bland mucin-secreting, squamoid, and intermediate cells",
      "Essential – high-grade:",
      "Atypical mucin-secreting, squamoid, and intermediate cells",
      "Transition from low-grade to high-grade areas, absence of keratinization, central location, and absence of carcinoma in situ",
      "Identification of CRTC1-MAML2 gene fusion.",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Hyalinizing clear cell carcinoma of the lung",
    definition: [
      "Hyalinizing clear cell carcinoma is a low-grade malignant epithelial tumor with cords, trabeculae, and nests of clear and eosinophilic cells infiltrating within a background of myxohyaline and cellular fibrous stroma.",
    ],
    clinical: [
      "The central location predominantly causes symptoms of obstruction, cough, and dyspnea. Haemoptysis is rare .",
    ],
    hist: [
      "Hyalinizing clear cell carcinomas are composed of small to medium-sized cells with clear or pale eosinophilic cytoplasm infiltrating in cords, nests, and trabeculae. The cells infiltrate within a background of alternating myxohyaline and fibrous stroma. Mitotic activity is minimal and necrosis is not seen. Occasional cells have intracytoplasmic mucin. Perineural invasion can be present, and peritumoral lymphocytic infiltrations are seen . Tumor cells are positive for CK7, high-molecular-weight cytokeratin (34βE12), CK5/6, p63, and p40. Positivity for EMA, CAM5.2, CK19, and CK14 has been reported . Tumor cells are negative for TTF1, napsin A, CK20, S100, SMA, synaptophysin, and chromogranin .",
    ],
    ihc: [],
    diff: [
      "Pleomorphic adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenoid cystic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Epithelial-myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucoepidermoid carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Myoepithelioma and myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "The EWSR1-ATF1 fusion is present in all reported cases . One case reports an EWSR1-CREM fusion by FISH, which is also found in head and neck primaries .",
    ],
    criteria: [
      "Low-grade epithelial cells with variable areas of cells with clear cytoplasm and cells with eosinophilic cytoplasm, within myxohyaline and sclerotic stroma",
      "Demonstration of EWSR1-ATF1 fusion",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Myoepithelioma and myoepithelial carcinoma of the lung",
    definition: [
      "Myoepithelial neoplasms of the thoracic cavity are very rare tumors that share morphological, immunophenotypic, and genetic features with their counterparts in soft tissue, salivary gland, bone, and skin. The term “myoepithelioma” is applied to benign myoepithelial tumors, whereas malignant myoepithelial tumors are designated “myoepithelial carcinoma”.",
    ],
    clinical: [
      "Imaging shows central endobronchial tumors to be well circumscribed, homogeneous, polypoid, and sessile, whereas intraparenchymal tumors are either well-defined nodules or irregular masses with calcifications. Presenting features include cough with or without hemoptysis and dyspnea, indicating obstruction in central tumors. Intraparenchymal tumors may be asymptomatic.",
    ],
    hist: [
      "In contrast to mixed tumors, myoepitheliomas and myoepithelial carcinomas are composed exclusively of myoepithelial cells, without ductal or tubular structures. Myoepithelial tumors are multilobulated, with cells that vary from epithelioid or round and clear to plasmacytoid to spindled and that may be arranged in sheets or nests or have a reticular or trabecular pattern, embedded in myxoid, myxochondroid, or hyalinized matrix. Entrapped type II pneumocytes can be hypertrophic and resemble glands . Myoepithelial carcinomas often show marked nuclear atypia, significant pleomorphism, increased mitoses, necrosis, and infiltrative growth ; some pediatric examples contain sheets of round cells . The tumor cells express keratins, EMA, and S100 and variably p63, p40, SOX10, SMA, and GFAP.",
    ],
    ihc: [],
    diff: [
      "Pleomorphic adenoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Adenoid cystic carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Epithelial-myoepithelial carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Mucoepidermoid carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Hyalinizing clear cell carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Rearrangements of EWSR1 or FUS can be detected."],
    criteria: [
      "Trabecular, reticular, nested, and/or solid growth of variably epithelioid or spindled cells, with a frequent myxoid or hyalinized stroma",
      "Myoepithelial carcinomas show increased nuclear atypia, mitotic activity, and necrosis",
      "Positivity for EMA/keratins and S100, SOX10, or GFAP",
      "Exclusion of metastasis from other sites",
      "EWSR1 rearrangements may be helpful in selected cases",
    ],
    group: "Salivary Gland-Type Tumors",
  },
  {
    name: "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia",
    definition: [
      "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia (DIPNECH) is a multifocal hyperplasia of pulmonary neuroendocrine cells associated with tumorlets. It is a preinvasive condition that may develop into carcinoid tumors. DIPNECH may be accompanied by bronchiolar fibrosis with constrictive features.",
    ],
    clinical: [
      "DIPNECH manifests as a continuous spectrum of pathological , clinical, and radiological features .",
      "Signs and symptoms",
    ],
    hist: [
      "Pathological DIPNECH is characterized by proliferation of neuroendocrine cells and/or tumorlets involving small airways. Neuroendocrine cell hyperplasia consists of individual cells or cellular aggregates designated as neuroendocrine bodies within the bronchiolar mucosa. The neuroendocrine cells have round, oval, or spindle-shaped nuclei with salt-and pepper chromatin and a moderate amount of amphophilic or eosinophilic cytoplasm. Nodular proliferations of neuroendocrine cells that invade beyond the bronchiolar wall measuring < 5 mm are classified as tumorlets. It has been proposed that neuroendocrine cell hyperplasia consists of the presence of ≥ 5 neuroendocrine cells, singly or in clusters, located within the basement membrane of the bronchiolar epithelium, and that there is multifocal neuroendocrine cell hyperplasia when ≥ 3 bronchioles are involved , but this requires further validation. In DIPNECH syndrome, bronchiolar fibrosis with luminal narrowing or constrictive bronchiolitis is present. DIPNECH associated with carcinoid tumors shows one or more carcinoid tumors in the lung parenchyma in addition to neuroendocrine cell hyperplasia and tumorlets meeting the above criteria . Pathological confirmation of DIPNECH requires a surgical lung biopsy or resection specimen; a definitive pathological diagnosis cannot be made on small biopsies.",
    ],
    ihc: [
      "DIPNECH expresses neuroendocrine markers (chromogranin, synaptophysin, CD56), pancytokeratins, and TTF1 (generally less intensively than pneumocytes), while negative for p40/p63 and high-molecular-weight cytokeratins.",
    ],
    diff: [
      "DIPNECH must be separated from localized reactive neuroendocrine cell hyperplasia associated with carcinoid tumors or with neuroendocrine cell hyperplasia/tumorlets secondary to airway inflammation, granulomas, fibrosis, or high altitude. Incidental tumorlets and/or neuroendocrine cell hyperplasia can be seen in the non-neoplastic lung parenchyma surrounding 75% of carcinoid tumors . Nodular proliferations of neuroendocrine cells measuring ≥ 5 mm are diagnosed as carcinoid tumors. DIPNECH should be distinguished from neuroendocrine cell hyperplasia of infancy, which occurs in young children .",
      "Carcinoid/neuroendocrine tumor of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Small cell lung carcinoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell neuroendocrine carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Clinicopathological DIPNECH can be suspected without biopsy in patients with characteristic clinical and radiological findings. The diagnosis of DIPNECH may also be primarily based on pathological findings rather than clinical or imaging findings; this usually occurs in asymptomatic patients.",
      "Pathological DIPNECH",
      "Neuroendocrine cell hyperplasia and/or tumorlets, both usually multifocal",
      "Constrictive bronchiolitis is frequent, particularly in clinical DIPNECH",
      "Carcinoid tumors, single or multiple, may be present",
      "Multidisciplinary exclusion of reactive neuroendocrine cell hyperplasia and tumorlets either associated with lung neoplasms other than carcinoids or due to non-neoplastic lung disorders such as interstitial fibrosis or small airway disease other than constrictive bronchiolitis",
      "Clinical DIPNECH",
      "Symptoms related to airway obstruction such as cough, breathlessness, and wheezing, often misdiagnosed as asthma",
    ],
    group: "Neuroendocrine Lesions and Tumors",
  },
  {
    name: "Carcinoid/neuroendocrine tumor of the lung",
    definition: [
      "Carcinoid tumors are neuroendocrine malignancies with a well-differentiated organoid architecture. There are two subtypes: typical carcinoids (TCs; carcinoid tumors with < 2 mitoses/2 mm2 and lacking necrosis) and atypical carcinoids (ACs; carcinoid tumors with 2–10 mitoses/2 mm2 and/or foci of necrosis, usually punctate).",
    ],
    clinical: [
      "Signs and symptoms",
      "Patients with central carcinoids involving segmental and larger airways may present with symptoms related to bronchial obstruction, including cough, wheezing, hemoptysis, and recurrent pneumonia. In addition, symptoms may mimic asthma. At bronchoscopy, central carcinoids appear as endobronchial, polypoid, and hypervascular lesions. Peripheral carcinoids are generally asymptomatic and are typically detected as an incidental finding on chest imaging. Symptoms related to hormone secretion (e.g. carcinoid syndrome or Cushing syndrome) are rare .",
    ],
    hist: [
      "TCs and ACs are well-differentiated NETs at the level of both tumor architecture and cytological features. However, clinically, TCs are low-grade and ACs are intermediate-grade. Differences are only related to mitosis and/or necrosis. TCs (G1 NETs) have a mitotic count of < 2 mitoses/2 mm2 and lack necrosis. ACs (G2 NETs) have 2–10 mitoses/2 mm2 and/or may have necrosis, which is usually focal and punctate. See section Lung neuroendocrine neoplasms: Introduction for details on methods of counting mitoses. Neuroendocrine morphology is defined by organoid patterns of growth with trabecular, rosette formation, insular, palisading, ribbon, follicular, pseudoglandular, or solid arrangements, while true glandular spaces or papillae are uncommon. Oncocytic, clear cell, and melanin-laden carcinoids can occur. Tumor cells are uniform, featuring finely granular nuclear chromatin, moderate to abundant eosinophilic cytoplasm, inconspicuous to variably evident nucleoli, and fine to coarsely granular chromatin texture. Tumor cells are small to intermediate in size and cuboidal to polygonal or fusiform. Fusiform cells are especially seen in peripheral lesions . Unlike for SCLC and LCNEC, the combination of carcinoids with adenocarcinoma or squamous cell carcinoma is exceptional . In addition, carcinoid tumors characteristically do not occur in combination with SCLC and LCNEC .",
      "Carcinoid tumors / NETs with elevated mitotic counts and/or Ki-67 proliferation index",
      "Rare lung carcinoids (NETs) have morphological features of AC but higher mitotic counts (> 10 mitoses/2 mm2) than defined in the present WHO classification and/or a higher Ki-67 proliferation index than expected (> 30%) . Genomic analysis is available for only a few such cases, but it supports a relationship with carcinoids rather than SCLC or LCNEC, based on lack of RB1 or TP53 mutations, low total mutation burden, and/or presence of MEN1 mutations . These tumors generally correspond to those regarded as grade 3 (G3) NETs in the pancreas (PanNET); however, in the lung, more clinical, pathological, and genetic studies are needed to determine how to fit these tumors into the classification. Currently, such tumors are usually classified as LCNEC, but their prognosis has been suggested to be different from that of conventional LCNEC. Until these tumors are better defined, we suggest adding a note stating the presence of histological features of a carcinoid tumor and documenting the mitotic counts and if available the Ki-67 index. The optimal approach to systemic management (e.g. the effectiveness of immunotherapies) needs to be addressed. Careful attention to the method of mitosis counting is needed, as outlined in section Lung neuroendocrine neoplasms: Introduction , because mitotic counts can be artefactually elevated by failure to adjust for the varying microscope fields of view depending on the microscope manufacturer and model or by lack of a strict definition of a mitotic figure .",
    ],
    ihc: [
      "Carcinoid tumors are positive for low-molecular-weight cytokeratins, but they lack reactivity to high-molecular-weight cytokeratins . They are strongly reactive for neuroendocrine markers such as chromogranin A, synaptophysin, CD56, and INSM1 . TTF1 tends to be positive in peripheral but negative in central tumors .",
      "The proliferation marker Ki-67 is not part of the diagnostic criteria for lung carcinoids, particularly in the distinction of TC from AC . Although tumors with a Ki-67 index > 5% are more likely to be ACs, this is not an absolute cut-off value . The main role of Ki-67 is in crushed cytology or biopsy samples to exclude SCLC or LCNEC . Further work is needed to address the clinical significance and optimal role of Ki-67 index in the diagnosis and prognostic evaluation of pulmonary carcinoids .",
    ],
    diff: [
      "The differential diagnosis of pulmonary carcinoids includes metastatic carcinoids from elsewhere, especially those originating in the gastrointestinal tract . Glandular structures are unusual in pulmonary carcinoids but a frequent finding in gastrointestinal carcinoids. Gastrointestinal and pancreatic carcinoids are usually negative for TTF1 but frequently express CDX2 or PAX8 . Mitotic counts are the most important morphological feature for distinguishing carcinoids from SCLC and LCNEC (see section Lung neuroendocrine neoplasms: Introduction), but they may be difficult to determine in small crushed biopsies. In this setting, Ki-67 plays an important role, because tumors with a high labelling index (> 30%) are more likely to be SCLC or LCNEC, and tumors with a Ki-67 proliferation index < 30% are more likely to be carcinoids . The monotonous nuclear appearance of carcinoids may also be seen in salivary gland–type tumors, metastases of lobular breast carcinoma, paraganglioma, melanoma, and glomus tumors. Salivary gland–type tumors are usually negative for neuroendocrine markers. Mucoepidermoid carcinomas usually express p40 and have intracytoplasmic mucin. Adenoid cystic carcinomas show a dual pattern of cellular staining with CAM5.2, which is strong in ductal/luminal cells but weak in myoepithelial cells, and both p63 and S100 are positive in myoepithelial cells. Adenoid cystic carcinomas also have MYB-NFIB or MYBL1-NFIB fusions by FISH in 60–90% of cases (see section Adenoid cystic carcinoma of the lung). Breast carcinomas may be positive for ER and/or PR, and they are usually negative for neuroendocrine markers. However, positive staining for ER and PR has been reported in some carcinoid tumors . Metastases from thyroid carcinoma are positive for TTF1, thyroglobulin, and PAX8. The distinction of carcinoids from paragangliomas is based mainly on morphology; although paragangliomas are pancytokeratin-negative, so are about 20% of carcinoid tumors, and S100-positive sustentacular cells can be seen in both entities . Melanomas are positive for melanoma markers (HMB45, S100, and SOX10) but negative for neuroendocrine markers, although melanocytic carcinoids may express both . Glomus tumors are positive for SMA but negative for neuroendocrine markers.",
      "Diagnosis in non-resection specimens and metastases",
      "The diagnosis of carcinoid tumors can be readily made on the basis of small biopsies and cytology specimens in most cases. The distinction between TC and AC cannot be made in small biopsies, and resection is required. In this setting, the term “carcinoid tumor NOS” is recommended. If a few mitotic figures and/or foci of punctate necrosis are identified, this may be suggestive of AC, and this can be mentioned in a comment. If there is any doubt about the diagnosis of carcinoid tumor, immunohistochemistry should be performed. Ki-67 may be helpful in the distinction from SCLC and LCNEC, particularly in small crushed specimens. Notably, in metastatic carcinoids, Ki-67 may occasionally exceed 30%, usually in hotspots .",
      'In pathological specimens from patients with metastatic pulmonary carcinoids, the term “metastatic carcinoid tumor NOS" (NET) should be used rather than specifying TC or AC, because proliferation rates may vary at different sites and many core biopsies from metastatic tumors may be too small to allow accurate mitotic counts per 2 mm2 . These tumors should be reported as “metastatic carcinoid tumor NOS”, and the mitotic counts and presence of any necrosis should be documented. Metastatic pulmonary carcinoid (NET) patients are often treated by medical oncologists who also manage gastrointestinal/pancreatic carcinoids (NETs), where Ki-67 is used to stratify patients for therapeutic decisions . In summary, documenting Ki-67 may be useful in metastatic pulmonary carcinoids (NETs), although mitotic counts and necrosis remain the main diagnostic criteria in primary resected tumors. In metastatic pulmonary carcinoids (NETs), further study is needed to determine the role of Ki-67 in classification, prognostication, and therapeutic management .',
      "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Small cell lung carcinoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell neuroendocrine carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["There is no recognized molecular test for lung carcinoids."],
    criteria: [
      "A NET with a well-differentiated architecture, often consisting of organoid nesting, trabeculae, rosettes, and palisading arrangements",
      "Tumor cells with moderate to abundant cytoplasm with an eosinophilic hue and finely granular nuclear chromatin",
      "Low-grade TC has < 2 mitoses/2 mm2 and lacks necrosis, and intermediate-grade AC has 2–10 mitoses/2 mm2 and/or foci of necrosis",
      "The number of high-power fields used for mitosis counting should be adjusted to achieve 2 mm2 according to the microscope field of view, which varies depending on the microscope manufacturer and model (see #19646Table A)",
      "Neuroendocrine marker immunoexpression (chromogranin A, synaptophysin, CD56, INSM1)",
      "Ki-67 can be useful in distinguishing carcinoids from high-grade LCNEC and SCLC, particularly in small crushed biopsies",
      "Although Ki-67 may be useful in lung carcinoids (NETs) and documenting it in reports is considered desirable, the primary diagnostic criteria for separating these tumors remain mitotic count per 2 mm2 and/or presence of necrosis",
      "In non-resection specimens, including biopsies of metastases, the diagnosis of “carcinoid tumor NOS” rather than TC or AC is recommended, with specification of the mitotic counts per 2 mm2, presence or absence of necrosis (including extent – punctate or extensive), and (if available) Ki-67 index; the distinction between TC and AC requires a resection specimen",
    ],
    group: "Neuroendocrine Lesions and Tumors",
  },
  {
    name: "Small cell lung carcinoma",
    definition: [
      "Small cell lung carcinoma (SCLC) is a malignant epithelial tumor composed of small cells with scant cytoplasm, finely granular nuclear chromatin, and absent or inconspicuous nucleoli, with a high mitotic count and frequent necrosis. Most SCLCs express neuroendocrine markers. Combined SCLC has an additional component of non-small cell carcinoma (NSCC), which may include large cell neuroendocrine carcinoma (LCNEC), adenocarcinoma, squamous cell carcinoma (SCC), large cell carcinoma (LCC), spindle cell carcinoma, or giant cell carcinoma.",
    ],
    clinical: [
      "Signs and symptoms",
      "Patients often present with rapid-onset signs or symptoms due to local intrathoracic tumor growth, extrapulmonary distant spread, paraneoplastic syndromes, or a combination of these features. The symptoms of SCLC are similar to those of other lung cancers (see section Tumors of the lung: Introduction). Paraneoplastic effects are more frequent in SCLC than in other histological types, and they can be the presenting symptoms. Ectopic hormone secretion can cause hyponatraemia or Cushing syndrome, and immune-mediated paraneoplastic syndromes can cause Lambert–Eaton myasthenic syndrome, peripheral neuropathy, or limbic encephalopathy . Serum tumor markers for diagnosis, monitoring, and evaluation of SCLC response to therapy have had little clinical impact to date.",
    ],
    hist: [
      "Tumor cells have scant cytoplasm, poorly defined cell borders, and finely granular nuclear chromatin. The cells are usually less than the diameter of 3 small resting lymphocytes and are oval to spindle in shape. Nucleoli are absent or inconspicuous. Nuclear moulding is common. The tumor cells are usually densely packed and commonly grow in a sheet-like pattern. Necrosis and apoptotic cells are frequent and often extensive. Crush artefact and encrustation of basophilic nuclear DNA around blood vessels (the Azzopardi effect) may be encountered. Neuroendocrine growth patterns (organoid, trabecular, rosette formation, etc.) are typically absent in biopsies but may be prominent in resected tumors . Occasional larger cells, including pleomorphic tumor giant cells, may be admixed but should not make up > 10% of the tumor. Mitotic count is high; by definition, it is > 10 mitoses/2 mm2, but the average is 60 mitoses/2 mm2 and the median is 80 mitoses/2 mm2 .",
      "Combined SCLCs are tumors consisting of SCLC with an additional component of NSCC, including LCNEC. Most commonly, the second component is LCC, adenocarcinoma, or SCC, but it rarely may consist of spindle or giant cell carcinoma . A diagnosis of combined SCLC should include mention of each of the NSCC components present. As noted above, SCLC may show occasional larger cells. Therefore, large cells should make up ≥ 10% of the tumor for a tumor to be classified as combined SCLC/LCNEC or combined SCLC and LCC. The percentage requirement is not applicable to other non-small cell elements, such as adenocarcinoma and SCC. The presence of an adenocarcinoma component in a combined SCLC or a new diagnosis of SCLC in a never-smoker should prompt molecular testing and consideration of a driver mutation such as an EGFR mutation or ALK rearrangement. This occurs most often as a manifestation of resistance to targeted therapy in known EGFR-mutated or ALK-rearranged lung adenocarcinomas, but it can be found de novo in untreated patients. Tumors with mixtures of SCLC and equal or greater amounts of spindle cell and/or giant cell carcinoma or heterologous sarcomatous components should be classified as combined SCLC with mention of the various histologies identified.",
    ],
    ihc: [
      "Classically, SCLC is considered a light-microscopic diagnosis, and immunostains are not required to confirm a diagnosis of SCLC. However, immunostains are commonly used and are of particular utility in excluding or confirming an alternate diagnosis.",
      "SCLC typically stains for cytokeratins such as AE1/AE3 and CAM5.2, often with a rim-and-dot–type pattern, but it is negative for high-molecular-weight cytokeratins . CK7 is positive in < 50% of cases and CK20 is usually negative . Most SCLCs will stain for neuroendocrine markers such as chromogranin, synaptophysin, and CD56 (NCAM), the last of which is most sensitive but less specific . Staining for chromogranin may be weak and focal . SCLC may be negative for all three of these markers in approximately 5–10% of cases. Studies have shown variable results in regard to whether INSM1 is more or less specific than a combination of chromogranin, synaptophysin, and CD56, but INSM1 has been shown to be a consistently reliable marker, particularly in the setting of SCLC . ASCL1 (hASH1) is emerging as an additional marker of neuroendocrine differentiation, but its value in SCLC needs further evaluation . TTF1 expression has been reported in 90–95% of SCLCs, depending on the clone used, but it is not specific for pulmonary origin in the setting of a small cell carcinoma . Napsin A is negative in SCLC . p63 and p40 are generally negative in SCLC. Focal staining has been reported in some series, but diffuse nuclear staining is not observed . The vast majority of SCLCs show loss of RB1 protein and p53 overexpression or null expression . Ki-67, although not part of the diagnostic criteria for SCLC or neuroendocrine tumors (NETs) in general, may be useful in the setting of crushed biopsies to avoid misdiagnosing carcinoid tumors, which may also show crush artefact. The reported Ki-67 index for SCLC is 65–100% and for typical carcinoids is < 5%, although proliferation rates as high as 30% have been reported in atypical carcinoid (see section Lung neuroendocrine neoplasms: Introduction) . In virtually all cases, a very high proliferation rate would exclude a carcinoid tumor, whereas a very low rate would exclude SCLC . In cytology specimens, it has been reported that CytoLyt fixation reduces Ki-67 when the MIB1 clone is used, but not with the Ki-67 30-9 antibody . Orthopedia homeobox protein (OTP) has been shown to preferentially stain carcinoids as opposed to high-grade tumors .",
    ],
    diff: [
      "The differential diagnosis of SCLC includes other neuroendocrine carcinomas (NECs), particularly LCNEC, as well as basaloid SCC, small round cell sarcomas, and lymphoma.",
      "SCLC should be differentiated from other pulmonary NETs (i.e. carcinoids and LCNEC). Immunostains are generally not useful in this regard, because all of these tumors will be positive for cytokeratins and neuroendocrine markers. The differentiation from carcinoid tumors is based primarily on morphology and mitotic count (see #14462), although, as noted above, Ki-67 may aid in discriminating SCLC from carcinoid tumors in crushed biopsies. The discrimination of SCLC from LCNEC is based primarily on light-microscopic features, with LCNEC usually having more abundant cytoplasm, polygonal cell shape, distinct cell borders, and vesicular nuclear chromatin (often with nucleoli). Owing to the spectrum of cell sizes that may occur in both tumors, discriminating SCLC from LCNEC may be particularly challenging, and there is currently no immunohistochemical stain or genetic marker to discriminate between the two . Because the diagnosis depends primarily on morphological features, good-quality H&E sections elucidating these features are critical. Merkel cell carcinoma, a NEC of the skin, is typically positive for CK20, NFP, and Merkel cell polyomavirus but negative for TTF1, which can help distinguish it from SCLC .",
      "Basaloid squamous carcinoma is characterized by nests of basaloid cells, often with peripheral palisading around tumor nests and a high mitotic count. Although most tumors show cytological features of an NSCC, some have small tumor cell size along with palisading and focal rosette-like structures morphologically identical to SCLC. Basaloid squamous carcinoma is characterized by strong diffuse staining for p40 or p63 (which are only rarely focally positive in SCLC ) and is positive for keratin 34βE12, which is negative in SCLC . Of note, CD56 may rarely be diffusely and strongly positive in basaloid SCC. In TTF1-negative tumors that appear to be SCLC, a p40 stain should be performed to exclude basaloid SCC.",
      "SMARCA4-deficient thoracic undifferentiated tumors may have small-sized tumor cells. These tumors frequently express synaptophysin and may have focal TTF1 expression (see section Thoracic SMARCA4-deficient undifferentiated tumor) . Diagnosis is facilitated by immunohistochemistry demonstrating loss of SMARCA4 protein (also known as BRG1).",
      "Small round cell sarcomas, both in the Ewing sarcoma family (e.g. Ewing sarcoma) and recently described morphologically similar tumors lacking EWSR1 gene rearrangement (e.g. CIC-DUX4–rearranged and BCOR-CCNB3–rearranged tumors ), may enter the differential diagnosis because they may occasionally show positive staining for neuroendocrine markers, particularly CD56. Patient age, tumor morphology, and smoking history, as well as lack of cytokeratin immunoreactivity, should raise the index of suspicion for an alternate diagnosis from SCLC. Appropriate FISH studies should confirm the diagnosis in most cases.",
      "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Carcinoid/neuroendocrine tumor of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Large cell neuroendocrine carcinoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "There is no established role for molecular testing in the diagnosis of SCLC. Whole-genome sequencing of SCLC demonstrates biallelic alteration of both TP53 and RB1.",
    ],
    criteria: [
      "Essential – SCLC:",
      "Tumor composed of small cells (usually less than the size of 3 resting lymphocytes) with scant cytoplasm, oval to spindle shape, and high mitotic count (> 10 mitoses/2 mm2 but usually higher, ~60 mitoses/2 mm2), often with necrosis",
      "Tumor cells have finely granular nuclear chromatin",
      "Nucleoli are absent or inconspicuous",
      "Essential – combined SCLC:",
      "Features of SCLC but with a component of a non-small cell lung carcinoma (LCC, LCNEC, adenocarcinoma, SCC, or less commonly spindle and/or giant cell carcinoma)",
      "In the case of SCLC combined with LCNEC or LCC, but not the other histological types, the second component should make up ≥ 10% of the tumor",
      "Positive immunohistochemistry for low-molecular-weight cytokeratin",
    ],
    group: "Neuroendocrine Lesions and Tumors",
  },
  {
    name: "Large cell neuroendocrine carcinoma of the lung",
    definition: [
      "Large cell neuroendocrine carcinoma (LCNEC) is a high-grade non-small cell carcinoma with neuroendocrine morphology and a mitotic count of > 10 mitoses/2 mm2, that expresses one or more neuroendocrine immunohistochemical markers. Combined LCNEC is an LCNEC with components of adenocarcinoma, squamous cell carcinoma, or spindle or giant cell carcinoma.",
    ],
    clinical: [
      "Signs and symptoms",
      "The clinical presentation of LCNEC is usually similar to that of non-small cell lung carcinoma (NSCLC; see section Tumors of the lung: Introduction). Patients with LCNEC are more likely to present with operable disease (~50%) than patients with small cell lung carcinoma (SCLC). Distant metastases are present in 40–50% of patients at presentation . Common sites of metastasis include brain, liver, and bone, and metastases may result in constitutional symptoms such as weight loss or fatigue, or symptoms such as pain or neurological deficits attributable to specific metastatic sites . Brain metastases occur in approximately 50% of patients with LCNEC, which is similar to the frequency in SCLC . Although associated paraneoplastic syndromes are a feature of small cell carcinoma, they are rare in LCNEC.",
    ],
    hist: [
      "Histology",
      "LCNEC is characterized by an organoid nesting trabecular growth pattern, peripheral palisading, and rosettes – the patterns that can be encountered in other neuroendocrine tumors . The cytological characteristics of LCNEC are those of NSCLC, which include frequent moderate to prominent nucleoli and/or moderate to abundant cytoplasm with distinct cell borders such that intercellular membranes are visible. Cell size of LCNEC is usually more than the size of 3 small resting lymphocytes, exceeding that of SCLC. Chromatin is generally coarsely granular/stippled, but it may be vesicular or have intermediate quality. Some LCNECs have nuclear characteristics that are analogous to SCLC (granular chromatin without prominent nucleoli), but they qualify for the diagnosis of LCNEC by virtue of abundant cytoplasm. Necrosis is present in virtually all LCNECs and is typically extensive, with large confluent areas, but in some cases necrosis may be more limited. Associated stromal desmoplasia and marked stromal inflammation are common. By definition, mitotic counts in LCNEC are > 10 mitoses/2 mm2, and generally they are substantially above this threshold (median: 70 mitoses/2 mm2), although less commonly LCNECs can have < 30 mitoses/2 mm2 .",
    ],
    ihc: [
      "Expression of a neuroendocrine marker is required for the diagnosis of LCNEC. Most tumors express two or three of the three standard neuroendocrine markers (synaptophysin, chromogranin A, CD56 [NCAM1]), and expression of at least one marker is typically diffuse . However, if morphological features are convincing for LCNEC, any extent of expression of even a single neuroendocrine marker is accepted to support the diagnosis . Caution should be exercised in interpreting cases labelling for CD56 alone because of its lower specificity . Although additional neuroendocrine markers have been emerging in recent years, especially ASCL1 (hASH1) and INSM1, their role in the diagnosis of LCNEC remains to be clarified. Importantly, NSE should not be used, because of its low specificity .",
      "Approximately 50% of LCNECs express TTF1. Napsin A is usually entirely negative, but it is expressed weakly/focally in a minority of LCNECs . The combination of diffuse/strong TTF1 with negative or minimal napsin A is a distinctive feature of LCNEC (or SCLC), given that such a profile is uncommon for lung adenocarcinoma . Labelling for squamous markers (p40/p63, CK5/6, 34βE12) can be seen in scattered cells in LCNEC, but diffuse labelling is not expected unless there is a combined LCNEC with squamous cell carcinoma . Pankeratins usually have strong and diffuse labelling in LCNEC; however, some LCNECs have granular (dot-like) labelling analogous to that of SCLC . The Ki-67 proliferation index in LCNEC is consistently > 30% and usually > 40%, with some cases reaching the typical range of SCLC, of ≥ 80% .",
    ],
    diff: [
      "LCNEC is distinguished from SCLC by the presence of prominent nucleoli and/or abundant cytoplasm, and in most cases by larger cell size. Nested architecture or larger cell size alone should not be used as the sole criterion for the diagnosis of LCNEC over SCLC . Due to the spectrum of nucleocytoplasmic morphology that exists in both tumors, distinguishing LCNEC from SCLC can be challenging in a subset of cases, and there is no immunohistochemical or genetic marker that can reliably distinguish LCNEC from SCLC . The presence of any amount of SCLC in a predominant LCNEC qualifies a tumor for the diagnosis of combined SCLC and LCNEC (see section Small cell lung carcinoma).",
      "LCNEC is distinguished from pulmonary adenocarcinomas with a solid/nested or cribriform pattern and solid/nested large cell carcinoma by the presence of nuclear palisading and rosettes and by neuroendocrine marker expression. Although 10–20% of NSCLCs lacking neuroendocrine morphology express neuroendocrine markers, such expression is usually focal and limited to a single marker .",
      "LCNEC is distinguished from atypical carcinoid by a higher mitotic count (> 10 mitoses/2 mm2) together with greater nuclear membrane irregularities, moderate to prominent nucleoli, and in most cases extensive necrosis. Tumors with carcinoid morphology that qualify as LCNEC due to mitotic counts exceeding 10 mitoses/2 mm2 – usually only mildly – occur rarely as lung primary tumors, but they are relatively common in the metastatic setting . Emerging data suggest that such tumors have genomic and clinical characteristics similar to those of carcinoid tumors , but more data are needed (see section Lung neuroendocrine neoplasms: Introduction, and section Carcinoid/neuroendocrine tumor of the lung).",
      "Basaloid squamous cell carcinomas can have nests, palisading, and rosette-like structures. They are distinguished from LCNEC by consistent expression of squamous markers (p40/p63, high-molecular-weight cytokeratin 34βE12) even though some neuroendocrine markers (especially CD56) may be occasionally positive .",
      "Thoracic SMARCA4-deficient undifferentiated tumors commonly express synaptophysin and may mimic LCNEC clinically and pathologically, especially in small biopsies . They are distinguished from LCNEC by the loss of SMARCA4 (BRG1) expression and by several other distinctive morphological and immunohistochemical features (see section Thoracic SMARCA4-deficient undifferentiated tumor).",
      "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Given that the effect on patient management and the tools of distinguishing LCNEC subsets remain investigational, performing molecular studies or RB1/p53 immunohistochemistry to identify subtypes of LCNEC in routine practice is not currently recommended. The prevalence of targetable NSCLC oncogenic drivers, such as EGFR and ALK alterations, is low in LCNEC, but such alterations do occur, and patients with these alterations may respond to targeted therapies .",
    ],
    criteria: [
      "Neuroendocrine morphology: organoid nesting, trabeculae, peripheral palisading, rosettes",
      "Non-small cell cytology: prominent nucleoli and/or moderate to abundant cytoplasm, larger cell size than SCLC (> 3 lymphocytes), and chromatin may be either granular/stippled or vesicular",
      "High proliferation rate: > 10 mitoses/2 mm2, with a median of 70 mitoses/2 mm2",
      "Positive immunohistochemical staining for one or more neuroendocrine markers (other than NSE)",
      "Necrosis: generally in large confluent zones but may be limited to the centers of tumor nests",
      "High Ki-67 index: > 30%, generally 40–80%",
      "Negative p40 immunohistochemistry",
    ],
    group: "Neuroendocrine Lesions and Tumors",
  },
  {
    name: "Melanoma of the lung",
    definition: [
      "Melanoma of the lung is a malignant melanocytic neoplasm arising in the lung.",
    ],
    clinical: [
      "Primary pulmonary melanoma usually occurs either as a unifocal polypoid obstructing lesion within the tracheobronchial tree or as a mass within the lung parenchyma . The presenting symptoms are determined by the site and size of the tumor . Pigment in sputum has been reported . Careful clinical evaluation is necessary to assess the possibility of previous or current extrapulmonary primary melanoma, including cutaneous and extracutaneous melanomas.",
    ],
    hist: [
      "The tumor is usually formed by sheets or expansive nodules of large pleomorphic epithelioid or, less commonly, spindle malignant melanocytic cells . The bronchial epithelium is unusually ulcerated. Necrosis is often present. The nuclei often have vesicular chromatin and prominent nucleoli . An intramucosal in situ component with pagetoid scatter may be seen in the bronchial or tracheal epithelium adjacent to the invasive component . This feature has also been reported in the vicinity of metastases . However, an intramucosal component is lacking in many reported cases.",
    ],
    ihc: [],
    diff: [
      "Meningioma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary hamartoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary chondroma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Diffuse pulmonary lymphangiomatosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "A recent study of lung-only melanomas showed frequent mutations known to be associated with cutaneous melanoma, including BRAF, NRAS, NF1, KIT, and KRAS mutations and UV mutation signatures, suggesting that these neoplasms represented cutaneous melanoma metastases to the lung . Previous studies reported that most cases lack BRAF, NRAS, or KIT mutations, although one case harbouring an oncogenic NRAS mutation has been described .",
    ],
    criteria: [
      "Demonstration of malignancy and melanocytic differentiation",
      "Relation to mucosa of the lung",
      "Absence of evidence for previous or synchronous melanoma outside the lung",
    ],
    group: "Other Primary Pulmonary Tumors",
  },
  {
    name: "Meningioma of the lung",
    definition: [
      "Pulmonary meningiomas are identical to meningothelial (arachnoidal) cell neoplasms that typically arise from dura mater of the CNS but are without a demonstrable CNS lesion.",
    ],
    clinical: [
      "Most cases are incidental, although some patients present with respiratory symptoms including hemoptysis . Images shows slow-growing, well-circumscribed nodules on CT, with high metabolic activity on FDG PET .",
    ],
    hist: [
      "Most tumors are well circumscribed and consist of a solid proliferation of tumor cells growing in whorls and lobular nests, most often with transitional or fibrous patterns. Rare examples of anaplastic and chordoid meningiomas are reported . CNS criteria have been used for grading. Cells are positive for vimentin, EMA, PR, SSTR2A , and (rarely) S100 . CD56 can be positive. Cytokeratin, other melanoma markers, and neuroendocrine markers are negative. Increased proliferation may be seen in anaplastic meningiomas . Metastatic meningioma requires exclusion, as do spindle cell thymoma, solitary fibrous tumor, and monophasic synovial sarcoma, using appropriate immunohistochemistry . Meningothelioid nodules are distinguished from meningiomas by their interstitial and frequently perivenular pattern of growth and ill-defined borders. In contrast to meningiomas, they typically lack a solid growth pattern and a sharply circumscribed border. Most meningothelioid nodules are ≤ 3 mm in size, but they can be as large as 5 mm .",
    ],
    ihc: [],
    diff: [
      "Melanoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary hamartoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary chondroma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Diffuse pulmonary lymphangiomatosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "In the CNS, most meningiomas have allelic loss on chromosome 22 and NF2 mutations .",
    ],
    criteria: [
      "A circumscribed solid proliferation of tumor cells growing in whorls and lobular nests, most often with transitional or fibrous patterns",
      "Absence of CNS disease with histological and immunohistochemical features of CNS meningioma",
      "Lack of predominant interstitial or perivenular distribution, ill-defined borders",
      "Size usually > 4 mm",
    ],
    group: "Other Primary Pulmonary Tumors",
  },
  {
    name: "Pulmonary hamartoma",
    definition: [
      "Pulmonary hamartomas are benign mesenchymal neoplasms with variable amounts of at least two mesenchymal elements and entrapped respiratory epithelium.",
    ],
    clinical: [
      "Peripheral pulmonary hamartomas are usually asymptomatic, solitary, well-circumscribed nodules; multifocality is rare . Endobronchial hamartomas often produce signs and symptoms of obstruction .",
      "Imaging",
    ],
    hist: [
      "Pulmonary hamartomas are usually composed predominantly of hyaline cartilage, which may show myxoid change, intermixed with variable amounts of other mesenchymal components, including fat, bland myxoid spindle cells, smooth muscle, fibrous tissue, and bone . Clefts of entrapped respiratory epithelial cells invaginate between the lobules of cartilage and connective tissue. Endobronchial hamartomas may have prominent adipose tissue (termed lipomatous hamartoma), whereas epithelial inclusions tend to be inconspicuous . In some cases, other mesenchymal elements may dominate, such as smooth muscle (termed adenoleiomyomatous hamartoma) or rarely fibrous tissue. Immunohistochemistry is usually not necessary, because hamartomas would show the expected staining pattern for the represented mesenchymal elements.",
    ],
    ihc: [],
    diff: [
      "Pulmonary hamartomas are differentiated from monomorphic soft tissue tumors by the presence of more than one mesenchymal component. Other soft tissue neoplasms may enter the differential diagnosis on small biopsies where only one mesenchymal component is represented. Pulmonary chondromas typically arise in patients with Carney triad (i.e. gastrointestinal stromal tumors, pulmonary chondromas, paragangliomas); sporadic examples are very uncommon. Chondromas lack entrapped epithelium, frequently show calcification / bone metaplasia, and are bounded by a fibrous pseudocapsule . SDHB immunohistochemistry may be useful; it shows abnormal loss in Carney-associated chondromas but not in hamartomas . Endobronchial lipoma may show overlapping morphological and genetic features with hamartoma , but the distinction between hamartoma and lipoma is generally not critical. The differential diagnosis may be particularly challenging if only the myxoid spindle cell component is sampled, which could lead to consideration of myxoid peripheral nerve sheath tumor or even myxoid sarcoma; however, unlike those of sarcomas, the spindle cells of hamartoma are generally very bland, without atypia, and they have very low cellularity.",
      "Melanoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Meningioma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Diffuse pulmonary lymphangiomatosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Not relevant"],
    criteria: [
      "At least two types of benign mesenchymal tissue, most commonly hyaline cartilage, fat, and/or myxoid spindle cells, with entrapped invaginated bronchial epithelium",
    ],
    group: "Other Primary Pulmonary Tumors",
  },
  {
    name: "Pulmonary chondroma",
    definition: ["Chondroma is a benign neoplasm of hyaline cartilage."],
    clinical: [
      "Patients are usually asymptomatic, but reported symptoms include cough, chest pain, dyspnea, and pneumonia . Chondromas occur in all pulmonary lobes; they tend to be multiple (averaging three) in Carney triad and solitary in sporadic cases . Imaging shows well-delineated nodules that may be calcified, most commonly with a popcorn-like or central pattern .",
    ],
    hist: [
      "Chondromas are circumscribed nodules of pure hyaline cartilage with frequent myxoid change. The cartilage is moderately cellular without atypia and is surrounded by a fibrous pseudocapsule without invagination of the overlying bronchial epithelium. Calcification and ossification are common, and ossification may be accompanied by adipose tissue.",
      "The differential diagnosis includes pulmonary hamartoma and chondrosarcoma. Hamartomas have entrapped respiratory epithelium between the lobules of cartilage, and they frequently contain other mesenchymal elements (fat, smooth muscle, myxoid spindle cells). Primary pulmonary chondrosarcomas are exceptionally rare; chondrosarcomas in the lung are more often metastases from high-grade skeletal tumors, with significantly increased cellularity and atypia .",
      "Carney-associated chondromas show frequent loss of SDHB by immunohistochemistry, in contrast to hamartomas , and this can be a useful diagnostic adjunct when the distinction is difficult.",
    ],
    ihc: [],
    diff: [
      "Melanoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Meningioma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary hamartoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Diffuse pulmonary lymphangiomatosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Bland cartilaginous stroma",
      "Absence of invaginated epithelium",
      "Absence of other mesenchymal components",
      "Carney triad",
    ],
    group: "Other Primary Pulmonary Tumors",
  },
  {
    name: "Diffuse pulmonary lymphangiomatosis",
    definition: [
      "Diffuse pulmonary lymphangiomatosis is a diffuse proliferation of lymphatic channels and smooth muscle along otherwise normal lymphatic vessels of the lungs, pleura, and mediastinum.",
    ],
    clinical: [
      "Diffuse pulmonary lymphangiomatosis usually presents in children. It can result in mass effect from infiltrative disease, restrictive and obstructive pulmonary physiology, chylous effusions, and respiratory failure. In pediatric patients the disease has an aggressive course, with progressive respiratory failure and death. Adult patients may present with mild wheezing, non-productive cough, recurrent chylous pleural effusions, or respiratory failure .",
      "Imaging",
    ],
    hist: [
      "Increased numbers of anastomosing, variably sized, endothelial-lined spaces containing acellular eosinophilic material are distributed along the lymphatic routes and lined by a layer of flattened lymphatic endothelial cells. Collagen layers or spindle cells resembling smooth muscle cells are present between channels. The adjacent lung tissue shows various quantities of haemosiderin-laden macrophages .",
      "The lining cells are positive for D2-40, CD31, and ERG, and the stromal spindle cells express vimentin, desmin, actin, and PR but not ER, keratin, or HMB45 .",
      "The differential diagnoses include lymphangioleiomyomatosis, lymphangiectasis, haemangiomatosis, and Kaposi sarcoma. Lymphangioleiomyomatosis contains HMB45-positive spindle cells. Lymphangiectasis does not show an increased number of anastomosing lymphatic vessels. Kaposi sarcoma does not show the complex anastomosing lymphatic canals. In haemangiomatosis, vascular spaces are blood-filled.",
    ],
    ihc: [],
    diff: [
      "Melanoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Meningioma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary hamartoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary chondroma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Increased numbers of cytologically bland anastomosing lymphatic channels distributed along the lymphatic routes",
      "Positive staining for lymphatic markers (e.g. D2-40)",
      "No cytological features of malignancy",
    ],
    group: "Other Primary Pulmonary Tumors",
  },
  {
    name: "Pleuropulmonary blastoma",
    definition: [
      "Pleuropulmonary blastoma (PPB) is an embryonal tumor that forms a cystic and/or solid mass in the lung in infants and young children.",
    ],
    clinical: [
      "Signs and symptoms",
      "The clinical presentation of PPB varies by age and tumor type. Children with type I PPB present at a median age of 9 months, with shortness of breath with or without pneumothorax secondary to cyst rupture. Some children are asymptomatic, and a cyst is diagnosed as an incidental finding on chest X-ray. Children with type II or III PPB are typically older (median: 36 and 42 months, respectively) and present with shortness of breath, weight loss, and fever .",
    ],
    hist: [
      "Pathology of type I PPB",
      "Microscopically, type I PPB has a characteristic architecture of expanded airspaces and wider-than-normal alveolar septa lined by alveolar or bronchiolar-type epithelium . In classic cases, small nodules of primitive mesenchymal cells are found beneath the epithelium in the cyst wall. These cells may be localized to a single focus or several foci or can be arranged more diffusely in layers beneath the epithelium, as seen in botryoid-type embryonal rhabdomyosarcoma. The primitive small cells may display cytoplasmic tails of pink cytoplasm with striations (rhabdomyosarcomatous differentiation), which is more prominent in the layers most distant from the epithelium. Small nodules of immature cartilage or mature spindle cells may also be found in the septa and are not necessarily accompanied by the small primitive cells. Because the small primitive cells or nodules of cartilage are present only focally in some cases, it may be necessary to submit an entire cyst specimen for microscopic examination.",
      "Pathology of type Ir PPB",
      "In the course of the family linkage study, it became apparent that there were relatives of children with PPB who had lung cysts for years, sometimes decades, without malignant transformation. Some of these cysts from older relatives had been resected and were available for microscopic examination . These purely cystic lesions show the architecture of type I PPB but lack primitive mesenchymal elements. These cysts were termed “type I regressed”, although it is not known whether these lesions ever contained a primitive mesenchymal component. Given the lack of a primitive mesenchymal component, it is thought that the biological potential of type Ir PPB is limited. Differentiating type Ir PPB from blebs or postinfectious cysts can be difficult.",
      "Pathology of type II and III PPBs",
      "Type II PPBs differ from type I tumors in that the primitive tumor cells are no longer limited to a subepithelial distribution and expand the septa to form solid sarcomatous nodules . Type III tumors represent complete overgrowth of the cystic portions of the tumor and are purely solid. Microscopically, the solid portions of a type II PPB and type III PPB show a multipatterned sarcoma that typically includes areas with (1) solid, cohesive nests of undifferentiated cells with nuclear hyperchromatism and high N:C ratios (blastemal pattern); (2) spindle-shaped, stellate, and ovoid cells with variable amounts of eosinophilic cytoplasm in a pale-blue, myxoid matrix (embryonal rhabdomyosarcoma pattern); (3) compact arrangements of spindle cells with hyperchromatic nuclei in fascicular or herringbone pattern (spindle cell or fibrosarcoma pattern); and/or (4) cartilage, often with immature or overtly chondrosarcomatous features. One or more of these elements may predominate in any one tumor. Anaplasia, defined as in Wilms tumor, occurs in 75% of type II and 90% of type III tumors.",
    ],
    ihc: [],
    diff: [
      "Chest wall or mediastinal rhabdomyosarcoma can be challenging to distinguish from PPB. Limited core biopsies of PPB may show a rhabdomyosarcomatous pattern. Attention to the primary location of the mass in the chest wall, diaphragm, or mediastinum rather than lung parenchyma may help to determine the correct diagnosis, because the lung parenchyma is a rare site for a primary embryonal rhabdomyosarcoma. DICER1 mutation testing of tumor tissue can also be used to confirm a diagnosis of PPB. Almost all PPBs in infancy are purely cystic. Nevertheless, spongy tumors such as the fetal lung interstitial tumor and solid tumors such as the congenital peribronchial myofibroblastic tumor, which occur in infants, may present a diagnostic challenge. One of the more common diagnostic dilemmas occurs when a cystic mass is encountered with a subepithelial spindle cell component in an adolescent. It is uncommon for PPBs with a primitive cell component to occur in adolescence or adulthood. The primary differential diagnosis for this situation is with cystic synovial sarcoma. PPBs are typically more heterogeneous than synovial sarcomas, but the spindle cell components of PPB and synovial sarcoma can be remarkably similar. Immunohistochemistry demonstrating epithelial markers or identification of a fusion protein involving the gene product SS18 (SYT) is helpful for making a diagnosis of synovial sarcoma.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Identification of pathogenic loss of function and RNase IIIb missense DICER1 variation in tumor tissue is diagnostic of PPB. In older children with cystic sarcomatous masses, RT-PCR or FISH for synovial sarcoma gene fusions may also be helpful to rule out PPB.",
    ],
    criteria: [
      "Essential – purely cystic tumors:",
      "Young age (usually < 1 year)",
      "Identification of a subepithelial collection of primitive cells or a nodule of cartilage in a multilocular cyst that has been adequately sampled",
      "For those that lack a primitive cellular component, the type Ir tumor, the diagnosis may remain challenging",
      "Essential – cystic and solid / solid lung mass:",
      "Young age",
      "Primitive sarcoma with multiple patterns, including rhabdomyosarcoma, cartilage, blastema, and anaplasia",
      "Evidence of germline DICER1 mutation",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "Pulmonary artery intimal sarcoma",
    definition: [
      "Pulmonary artery intimal sarcoma is a malignant mesenchymal tumor arising in the large vessels of the pulmonary circulation with predominantly intraluminal growth, obstruction of the lumen of the vessel of origin, and seeding of emboli to peripheral organs.",
    ],
    clinical: [
      "The most common presenting symptom is dyspnea, followed by chest or back pain, cough, hemoptysis, weight loss, malaise, syncope, and fever. The clinical manifestations mimic those of acute or chronic thromboembolism and pulmonary hypertension, because of obstruction of the pulmonary circulation . Recurrent pulmonary embolic disease is the most common primary diagnosis, with diagnosis of malignancy often delayed or made after death.",
      "Imaging",
    ],
    hist: [
      "Intimal sarcomas are mesenchymal neoplasms composed of spindle cells with varying degrees of atypia and variable cellularity. Higher-grade components show a high mitotic count, necrosis, and nuclear pleomorphism. Epithelioid morphology may be seen . Lower-grade components are less cellular and can show myxoid change . A small proportion of cases show heterologous elements in the form of osteosarcoma or chondrosarcoma. Rare tumors contain rhabdomyosarcomatous or angiosarcomatous features . Variable positivity for SMA is found, and some tumors exhibit positivity for desmin. Overall, the diagnosis does not require immunohistochemistry, but nuclear expression of MDM2 can be observed in ≥ 70% of cases and may be a defining feature .",
    ],
    ihc: [],
    diff: [
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Congenital peribronchial myofibroblastic tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "MDM2 amplification has been observed in most pulmonary artery intimal sarcomas, along with immunohistochemical overexpression of the protein product, often coexisting with amplification of PDGFRA .",
    ],
    criteria: [
      "Presentation in the lumen of a large vessel of the pulmonary circulation",
      "Primary high-grade sarcoma, with or without heterologous elements",
      "MDM2 amplification (in selected cases)",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "Congenital peribronchial myofibroblastic tumor",
    definition: [
      "Congenital peribronchial myofibroblastic tumor is a solid fibroblastic/myofibroblastic tumor developing in utero or in infancy, composed of mitotically active but histologically bland myofibroblasts arranged in fascicles and resembling congenital mesoblastic nephroma / infantile fibrosarcoma.",
    ],
    clinical: [
      "The tumor may be evident on antenatal imaging, and it may be associated with hydrops fetalis. Other presentations range from fetal demise to respiratory distress in the newborn period to incidental radiological mass in an asymptomatic infant. Large size (> 50 mm) and unilateral involvement are typical.",
    ],
    hist: [
      "The tumor is composed of interlacing fascicles of uniform spindle cells with eosinophilic cytoplasm and ill-defined cell borders. Nuclei are mitotically active but histologically bland; a rare atypical mitosis has been reported . Growth mainly surrounds bronchi and extends along interlobular septa and the pleura; there is some extension into alveolar septa. Large islands of benign cartilage located mainly within peribronchial regions are characteristic. The spindle cells are generally positive for SMA; they may also be positive for desmin and S100. Congenital peribronchial myofibroblastic tumor lacks the epithelium-lined cysts and small islands of primitive cartilage that can be observed in the cyst walls of type I pleuropulmonary blastoma; it also lacks the subepithelial condensation of cells (“cambium layer”), areas of dense cellularity, myogenic differentiation, and anaplasia that can be observed in types II and III pleuropulmonary blastoma. The cells of congenital peribronchial myofibroblastic tumor lack the pulmonary interstitial glycogenosis–like appearance of the spindle cells in fetal lung interstitial tumor, which have small delicate nuclei and variably clear cytoplasm .",
    ],
    ihc: [],
    diff: [
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "No firm molecular diagnostic criteria are available, although demonstration of ETV6-NTRK3 rearrangement may be helpful.",
    ],
    criteria: [
      "Interlacing fascicles of uniform histologically bland spindle cells that are mitotically active",
      "Peribronchial accentuation of growth",
      "Associated proliferation of benign-appearing bronchial cartilage",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion",
    definition: [
      "Primary pulmonary myxoid sarcoma (PPMS) is a low-grade malignant tumor of the lung that consists of multinodular growth of typically uniform spindle, stellate, or rounded cells in a reticular pattern within a prominent myxoid stroma. Most cases harbour EWSR1-CREB1 gene fusions.",
    ],
    clinical: [
      "Patients may present with cough, hemoptysis, systemic symptoms such as weight loss, or (more rarely) symptoms from metastases . The tumor may be detected incidentally . Imaging studies typically show a well-circumscribed mass, often with an endobronchial component. Obstructive changes may be present . Clinical and radiological correlation is needed to exclude a metastasis from an extrapulmonary site such as the soft tissue.",
    ],
    hist: [
      "PPMSs have a lobulated architecture, often with an endobronchial location. A partial fibrous pseudocapsule may be present. Tumors are composed of spindle, round, stellate, or polygonal cells, with a predominant reticular network of delicate lace-like strands and cords within prominent myxoid stroma. The myxoid stroma is positive with Alcian blue, with staining sensitive to treatment with hyaluronidase . More compact areas may be found, which may have collagenous stroma. A minority have a predominantly compact architecture, with a more patternless distribution of cells. Cellular atypia is generally mild to sometimes focally moderate, and mitotic counts are < 5 mitoses/2 mm2. Focal necrosis can be present. Most cases have a chronic inflammatory cell infiltrate of mainly lymphocytes and plasma cells. Vascular invasion is rare. Unusual histology has been reported in a small subset of cases lacking EWSR1-CREB1, including focal multinucleation, severe nuclear atypia, and high mitotic activity with atypical forms . About 60% show typical weak and focal expression of EMA. The tumor is consistently negative for cytokeratin, S100, desmin, CD34, and neuroendocrine markers.",
    ],
    ihc: [],
    diff: [
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Congenital peribronchial myofibroblastic tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "The EWSR1-CREB1 fusion is detectable by a variety of molecular methods and is helpful to confirm the diagnosis, although occasional tumors may harbour a different genetic alteration.",
    ],
    criteria: [
      "Primary involvement of the lung",
      "Spindle to round cells in a reticular pattern within prominent myxoid stroma",
      "Exclusion of other tumor types with similar histology, such as extraskeletal myxoid chondrosarcoma and myoepithelial tumors",
      "Presence of an endobronchial component",
      "Demonstration of EWSR1-CREB1 fusion",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "Lymphangioleiomyomatosis of the lung",
    definition: [
      "Pulmonary lymphangioleiomyomatosis (LAM) is a locally destructive mesenchymal neoplasm consisting of abnormal smooth muscle proliferation along lymphatic routes, producing a bilateral interstitial infiltrate that results in cystic transformation of airspaces and respiratory failure.",
    ],
    clinical: [
      "Most affected patients experience progressive exertional dyspnea and pneumothorax; chylous pleural effusions and hemoptysis are less common findings . Patients with LAM may have renal angiomyolipomas. Associated retroperitoneal lymphadenopathy is common .",
      "Imaging",
    ],
    hist: [
      "The lung contains variably sized cysts. Within the cyst walls, there are nodules or a subtle interstitial distribution of spindle cells with fine chromatin, small nucleoli, and granular eosinophilic cytoplasm . The spindle cells may infiltrate the walls of veins. Interstitial or intra-alveolar haemosiderin-laden macrophages may be seen. LAM in TS patients may be associated with micronodular type II pneumocyte hyperplasia .",
      "By immunohistochemistry, the spindle cells are consistently positive for SMA and HMB45 , although the extent of staining for HMB45 may be limited. ER, PR, and melan-A are also often positive, whereas S100 is negative.",
    ],
    ihc: [],
    diff: [
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Congenital peribronchial myofibroblastic tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: ["Not relevant"],
    criteria: [
      "Most cases are diagnosed clinically without the need for biopsy, via the following:",
      "Characteristic findings on high-resolution CT of uniform diffuse, thin-walled cysts, accompanied by any of the following clinical features: TS, renal angiomyolipoma, chylous pleural effusions, or cystic lymphangioleiomyoma",
      "When these clinical features are absent, elevated serum levels of VEGF-D",
      "When biopsied",
      "Lung cysts with nodules or bundles of cytologically bland myoid spindle cells with granular eosinophilic cytoplasm in the cyst walls",
      "Expression of SMA and HMB45",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "PEComa of the lung",
    definition: [
      "Perivascular epithelioid cell tumors (PEComas) are neoplasms with perivascular epithelioid-cell differentiation: mesenchymal tumors composed of distinctive cells that are often associated with blood vessel walls and usually express melanocytic and smooth muscle markers.",
    ],
    clinical: [
      "Most primary lung PEComas are incidental findings in asymptomatic patients.",
    ],
    hist: [
      "PEComa of lung shows a nested or sheet-like architecture and is composed of uniform round/ovoid cells with abundant clear or granular eosinophilic cytoplasm and distinct cell borders. Within the lung, the growth pattern is often predominantly sheet-like. Thin-walled sinusoidal vessels are characteristic. The tumor cells typically show an association with blood vessel walls, with tumor cells arranged radially around thin-walled vessels and showing subendothelial growth, consistent with their perivascular nature. The nuclei are round, with small nucleoli, and usually show at most mild atypia or pleomorphism. Mitotic activity is usually absent or low .",
      "Diffuse PEComatosis shows features overlapping between lymphangioleiomyomatosis and conventional PEComa . Angiomyolipoma, a member of the PEComa family of tumors, may rarely occur in the lung and is composed of admixed mature fat and thin and thick-walled blood vessels, along with abnormal spindle to epithelioid smooth muscle cells, similar to its renal counterpart.",
      "Malignant PEComa is characterized by mitotic activity, marked atypia, pleomorphism, and necrosis . The lung is a common site of metastasis for malignant PEComas of extrapulmonary sites. The presence of multiple nodules, marked atypia, and spindled morphology is suggestive of a metastatic rather than primary lung neoplasm.",
    ],
    ihc: [
      "PEComas show myomelanocytic differentiation and therefore typically express melanocytic markers, such as HMB45 (most sensitive), melan-A, and MITF, and muscle markers, such as SMA, desmin, and caldesmon . Some tumors lack expression of muscle markers. About 10% of tumors show focal expression of S100 .",
    ],
    diff: [
      "PEComas may mimic several different tumor types, depending on their predominant cytomorphology (epithelioid or spindled) and the presence or absence of atypia. Within the lung, the most likely differential diagnostic considerations are metastases, including carcinoma (especially renal cell or hepatocellular), melanoma, alveolar soft part sarcoma, pure smooth muscle tumors, and myoepithelial tumors. The broad differential underscores the role of immunohistochemistry in confirming this diagnosis.",
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Congenital peribronchial myofibroblastic tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "MALT lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Approximately 80% of PEComas show TSC2 mutations, and a small subset show TFE3 gene rearrangement.",
    ],
    criteria: [
      "Epithelioid cells with clear or granular cytoplasm, in sheets or nests, with expression of myoid or melanocytic markers",
      "Expression of both myoid and melanocytic markers",
      "TSC2 mutation",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "MALT lymphoma of the lung",
    definition: [
      "Pulmonary extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma) is a low-grade primary extranodal lymphoma recapitulating the morphological features of mucosa-associated lymphoid tissue (MALT).",
    ],
    clinical: [
      "Patients may present asymptomatically with lesions identified incidentally on imaging studies. About 55–67% of patients show nonspecific respiratory symptoms such as cough, dyspnea, or chest pain . Systemic symptoms, such as fever and night sweats, are uncommon . Serum monoclonal proteins were reported in 43% of patients .",
      "Imaging",
    ],
    hist: [
      "The lymphomatous infiltrate is heterogeneous, with varying proportions of small lymphocytes, centrocyte-like cells, monocytoid B cells, occasional large transformed cells, and plasma cells . The infiltrate surrounds and, in some cases, colonizes reactive germinal centers. At the periphery of the lesion, the neoplastic cells track bronchovascular bundles, but the center of the lesion often shows alveolar destruction . Lymphoepithelial lesions are common. Airways are frequently spared, correlating with the air bronchograms observed on imaging studies. Necrosis is rare and its presence should raise concern for transformation to diffuse large B-cell lymphoma. Amyloidosis, light chain deposition disease, and/or crystal-storing histiocytosis may coexist with MALT lymphoma.",
    ],
    ihc: [
      "The neoplastic B cells express CD20 and CD79a. Flow cytometric studies may show monotypic B cells, although these may in some cases be masked by benign germinal center cells or other background polytypic B cells. The B cells are negative for CD10, BCL6, and other germinal center markers. Aberrant CD43 expression has been reported in 30–80% of cases . Rare cases may express CD5 . Follicular dendritic cell markers (CD21, CD35) highlight dendritic cell meshworks, which may be disrupted and colonized by the neoplastic cells. The Ki-67 index is typically low (< 20%). Kappa and lambda stains reveal clonal plasma cells or plasmacytoid cells in a subset of cases . Keratin stains may be useful to identify lymphoepithelial lesions.",
    ],
    diff: [
      "Pulmonary MALT lymphoma must be distinguished from reactive lymphoid proliferations, including nodular lymphoid hyperplasia and lymphocytic interstitial pneumonia. The presence of aberrant CD43 expression on B cells or plasma cells with light chain restriction may be helpful, although each of these findings is present in only a subset of cases. Flow cytometric studies or molecular clonality testing may be helpful to demonstrate the presence of a clonal B-cell population. Other small B-cell neoplasms that may mimic marginal zone lymphoma must also be excluded, using a thorough panel of immunophenotypic markers.",
      "Pleuropulmonary blastoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary artery intimal sarcoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Congenital peribronchial myofibroblastic tumor: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Primary pulmonary myxoid sarcoma with EWSR1-CREB1 fusion: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphangioleiomyomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "PEComa of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Detection of clonal IG gene arrangements and/or MALT1-associated translocations is useful for diagnosis in problematic cases .",
    ],
    criteria: [
      "Destructive infiltrate of small lymphocytes, centrocyte-like cells, monocytoid cells, and/or plasmacytic cells",
      "B-cell phenotype",
      "Exclusion of other small B-cell neoplasms",
      "Neoplastic B cells surround and/or colonize germinal centers",
      "Lymphoepithelial lesions",
      "Demonstration of a monoclonal B-cell population",
    ],
    group: "Mesenchymal and Histiocytic Tumors",
  },
  {
    name: "Pulmonary diffuse large B-cell lymphoma",
    definition: [
      "Primary pulmonary diffuse large B-cell lymphoma (DLBCL) is a non-Hodgkin lymphoma composed of a diffuse proliferation of large B cells with centroblastic or immunoblastic morphology, confined to the lung with or without hilar lymph node involvement at presentation or during the subsequent 3 months.",
    ],
    clinical: [
      "Patients are usually symptomatic and present with cough or dyspnea, or rarely with hemoptysis and systemic B symptoms, which include fever, night sweats, and weight loss .",
      "Imaging",
    ],
    hist: [
      "Endobronchial ultrasound–guided transbronchial needle aspiration and percutaneous CT-guided or bronchoscopic biopsy may be sufficient to make a diagnosis in a solid lesion; however, a surgical biopsy may be required . Morphologically, primary pulmonary DLBCL is similar to DLBCL in other sites. The tumor comprises diffuse sheets of large cells that destroy and replace the normal lung parenchyma. The large cells resemble centroblasts and/or immunoblasts and are 2–4 times the size of normal lymphocytes.",
      "The immunophenotype is that of a B cell, with expression of pan–B cell markers (CD20, CD79a). There is variable staining for CD10, BCL6, IRF4 (MUM1), BCL2, and MYC, which is performed to aid in prognostication. Subclassification into germinal-center B-cell and activated B-cell subtypes should be accomplished through the use of gene expression profiling or immunohistochemical algorithms . The presence of EBV should be investigated using in situ hybridization for EBV-encoded small RNA (EBER).",
      "The differential diagnoses include undifferentiated carcinoma, anaplastic large cell lymphoma, primary mediastinal large B-cell lymphoma, and rarely germ cell tumors. The most difficult differential diagnosis is between EBV-positive DLBCL-NOS and pulmonary lymphomatoid granulomatosis. The latter shows more reactive T cells, marked angiocentricity, and a greater variability in the number of EBV-positive cells .",
    ],
    ihc: [],
    diff: [
      "Lymphomatoid granulomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Intravascular large B-cell lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Langerhans cell histiocytosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Erdheim-Chester disease: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "IG genes are clonally rearranged. Little is known about other genetic abnormalities in primary pulmonary DLBCL; however, a molecular classification for DLBCL, in general, has been proposed .",
    ],
    criteria: [
      "Large lymphoid cells (tumor cells 2–4 times the size of normal lymphocytes) resembling centroblasts or immunoblasts",
      "Diffuse infiltration with destruction of lung parenchyma",
      "Immunophenotyping to confirm B-cell lineage (e.g. CD20, PAX5, CD79a)",
      "Immunophenotype or gene expression profiling to determine germinal-center B-cell or activated B-cell subtype",
      "EBER in situ hybridization and/or LMP1 stain",
    ],
    group: "Lymphoid and Histiocytic Proliferations",
  },
  {
    name: "Lymphomatoid granulomatosis of the lung",
    definition: [
      "Lymphomatoid granulomatosis is characterized by an angiocentric/angiodestructive polymorphous lymphoid infiltrate composed of EBV-positive B cells admixed with a large number of reactive T cells.",
    ],
    clinical: [
      "Presenting symptoms are variable (i.e. cough, dyspnea, and/or chest pain) and may be accompanied by constitutional symptoms. Only one third to two thirds of patients present with overt respiratory symptoms; the rest are identified incidentally by imaging. Other symptoms are related to the site of involvement, such as CNS or skin .",
      "Imaging",
    ],
    hist: [
      "Lymphomatoid granulomatosis is characterized by nodules containing a polymorphous lymphoid infiltrate with an angiocentric distribution. The majority of the cells are small T cells admixed with a variable number of histiocytes, plasma cells, and immunoblasts. Central necrosis is often (although variably) present. The EBV-positive cells vary in size and may show cytological atypia. They may have an appearance of immunoblasts but can rarely resemble Reed–Sternberg cells with multinucleated forms. Despite the name of the lesion, well-formed granulomas are absent. The inflammatory infiltrate affecting the vessels is rich in T cells.",
      "Lymphomatoid granulomatosis is graded by comparing the proportion of EBV-positive B cells and their degree of cytological atypia to the background population of reactive T cells. Three grades are recognized, offering guidance to therapy, notwithstanding issues with reproducibility of the grading system. Grade 1 lesions are composed of a polymorphous lymphoid infiltrate without significant atypia; necrosis may be absent or focal. Large EBV-positive lymphoid cells are rare. In grade 2 lesions, large EBV-positive cells are typically present (40–400/mm2; 5–50/HPF of 0.12 mm2); necrosis is more common. Grade 3 lesions are characterized by a greater number of EBV-positive cells (> 400/mm2; > 50/HPF of 0.12 mm2); necrosis is common and often extensive . The large atypical cells may occur in clusters. However, if there is a uniform population of large atypical cells beyond the acceptable morphological spectrum of lymphomatoid granulomatosis, a diagnosis of EBV-positive large B-cell lymphoma is more appropriate.",
    ],
    ihc: [
      "The large atypical cells are positive for CD20 and EBV by in situ hybridization using EBV-encoded small RNA (EBER) probes. A subset of these positive cells may also stain for EBV LMP1. The cells may be variably positive for CD30 and are negative for CD15. Staining for kappa and lambda light chains is of limited utility, although rare cases may show light chain restriction in the plasma cells. The majority of lymphoid cells in the background are CD3+ T cells, with CD4+ cells outnumbering CD8+ cells .",
    ],
    diff: [
      "Pulmonary diffuse large B-cell lymphoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Intravascular large B-cell lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Langerhans cell histiocytosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Erdheim-Chester disease: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Clonal IG gene rearrangements may be identified in most grade 2 and grade 3 lesions. Different clonal rearrangements may be identified in different lesions or from different sites of involvement. B-cell clonality may not be detected in grade 1 lesions, most likely due to the paucity of EBV-positive cells. Clonal TR gene rearrangements are usually not present, although restricted patterns may be observed .",
    ],
    criteria: [
      "Polymorphous lymphoid infiltrate with striking angiocentricity",
      "Transmural involvement of small to medium-sized arteries by small T lymphocytes",
      "Presence of variable numbers of large B cells positive for EBV by in situ hybridization",
    ],
    group: "Lymphoid and Histiocytic Proliferations",
  },
  {
    name: "Intravascular large B-cell lymphoma of the lung",
    definition: [
      "Intravascular large B-cell lymphoma (IVLBCL) is an aggressive extranodal non-Hodgkin lymphoma, characterized by the presence of large neoplastic B cells within, if not exclusive to, different-sized vessels, particularly capillaries.",
    ],
    clinical: [
      "IVLBCL is a systemic disorder and thus may show various symptoms according to the involved organs. Haemophagocytic syndrome is observed predominantly in Asian populations (haemophagocytic subtype). IVLBCL may cause pulmonary hypertension, hypoxaemia, and pulmonary embolism. A random skin biopsy and transbronchial lung biopsy are useful to make the diagnosis .",
    ],
    hist: [
      "Large lymphoid cells with vesicular nuclei and often showing mitotic figures are observed within small vessels, especially capillaries, sometimes showing minimal extravasation. Rarely, the lymphoid cells can be anaplastic. Mature B-cell markers are expressed, often with CD5 and PDL1 (CD274) expression (20–40%) . Most cases have a non–germinal-center B-cell immunophenotype, but approximately 13% are CD10-positive .",
    ],
    ihc: [],
    diff: [
      "Pulmonary diffuse large B-cell lymphoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphomatoid granulomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Langerhans cell histiocytosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Erdheim-Chester disease: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [],
    criteria: [
      "Large lymphoid cells resembling centroblasts or immunoblasts in blood vessels, especially capillaries",
      "Mature B-cell markers (e.g. CD20, CD79a, PAX5) are positive",
    ],
    group: "Lymphoid and Histiocytic Proliferations",
  },
  {
    name: "Pulmonary Langerhans cell histiocytosis",
    definition: [
      "Pulmonary Langerhans cell histiocytosis (PLCH) is a proliferative, usually clonal, disorder of Langerhans cells, with associated interstitial changes in the lung tissue, manifesting as a variable combination of cellular, cystic, and fibrotic lesions.",
    ],
    clinical: [
      "PLCH in adults usually occurs in one of three clinical settings: (1) respiratory symptoms (cough and dyspnea), in about two thirds of patients, with or without constitutional symptoms (fever, malaise, sweats, and weight loss, seen in 15–20% of patients); (2) acute presentation with spontaneous pneumothorax, in 15–20% of cases, which can be bilateral or recurrent; or (3) as an incidental finding on routine chest X-ray, in 5–25% of cases . Haemoptysis is rare but should raise the possibility of complications or alternative diagnosis (e.g. infection and cancer). Approximately 15% of adults with PLCH have extrapulmonary involvement, including bone involvement, hypothalamic–pituitary axis involvement causing diabetes insipidus, and rarely skin disease . The systemic form of Langerhans cell histiocytosis (LCH) may have secondary lung involvement .",
      "Pulmonary function abnormalities vary according to the extent of cystic involvement and disease duration. Reduction of diffusing capacity of the lung for carbon monoxide (DLCO) is observed in 80–90% of cases. Obstructive ventilatory defects are more common than restrictive patterns, and mixed restrictive and obstructive patterns may be seen. The severity of airflow limitation on lung function testing correlates with the extent of cystic lesions on high-resolution CT .",
    ],
    hist: [
      "The histological hallmark of PLCH is accumulation of Langerhans cells forming loose aggregates. The Langerhans cells have convoluted nuclei and pale, lightly eosinophilic cytoplasm. The cellular lesions are mainly present along the bronchioles and alveolar ducts. The aggregates of Langerhans cells may rarely be in the alveolar spaces. Variable numbers of lymphocytes, monocytes/macrophages, and eosinophils are admixed in the cellular lesions. As the lesions enlarge, rounded or stellate nodules develop and the bronchiolocentricity becomes less apparent. The nodules tend to progress from cellular lesions with abundant Langerhans cells to more-fibrotic (often stellate) scars with sparse to absent Langerhans cells at the end stage. Thus, the diagnosis of healed PLCH may be based on the presence of stellate centrilobular scarring in the appropriate clinical and radiological setting. Cystic changes are prominent in late stages of the disease. Background lung tissue usually shows concomitant features of smoking, including emphysema, respiratory bronchiolitis, smoking-related interstitial fibrosis, and even desquamative interstitial pneumonia in some cases.",
    ],
    ihc: [
      "Langerhans cells are positive for S100, CD1a, and langerin. Cellular PLCH shows numerous Langerhans cells, but burnt-out or healed PLCH may not show any identifiable Langerhans cells even on immunohistochemical stains. BRAF p.V600E immunohistochemical stain correlates well with the mutation status of BRAF in both PLCH and systemic LCH cases .",
    ],
    diff: [
      "Pulmonary diffuse large B-cell lymphoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphomatoid granulomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Intravascular large B-cell lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Erdheim-Chester disease: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "BRAF p.V600E immunohistochemical stain correlates well with the mutation status of this gene .",
    ],
    criteria: [
      "Langerhans cell aggregates, usually in a centriacinar distribution",
      "Immunohistochemical confirmation of Langerhans cells (e.g. CD1a, langerin)",
      "Associated cystic and fibrotic changes may be present",
      "Background of smoking-related changes",
      "Assessment of BRAF mutation status if targeted therapy contemplated",
    ],
    group: "Lymphoid and Histiocytic Proliferations",
  },
  {
    name: "Pulmonary Erdheim-Chester disease",
    definition: [
      "Erdheim–Chester disease (ECD) is a systemic histiocytic neoplasm characterized by multiorgan accumulation of mature histiocytes in a background of fibrosis.",
    ],
    clinical: [
      "Patients mostly present with non-respiratory symptoms (see #14216). Lung involvement may be asymptomatic or may cause cough and/or progressive dyspnea . Pleural effusion and/or mediastinal infiltration is also common . Pulmonary function studies can show a restrictive pattern or may be normal. ECD can rarely be associated with Langerhans cell histiocytosis and Rosai–Dorfman disease, as well as autoimmune diseases . Myeloid neoplasms can be present in as many as 10% of cases .",
      "Imaging",
    ],
    hist: [
      "Lung involvement has a characteristic lymphangitic distribution, along with involvement of the visceral pleura, interlobular septa, and perivascular interstitium as well as lesser involvement of the peribronchiolar areas. The disease typically spares perialveolar spaces . The lesional histiocytes have foamy and/or eosinophilic cytoplasm, but they can be sparse and may have a distorted shape due to marked fibrosis admixed with chronic inflammatory cells. Eosinophils are rare to absent. Touton giant cells can be seen occasionally.",
    ],
    ihc: [
      "The lesional cells are positive for histiocytic markers (CD163, CD68, CD14, CD4, and factor XIIIa) and negative for CD1a and CD207 (langerin). S100 is variably positive. Immunostaining with BRAF p.V600E antibody (VE1) is not an optimal method to demonstrate BRAF p.V600E mutation in Erdheim–Chester disease .",
    ],
    diff: [
      "Pulmonary diffuse large B-cell lymphoma: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Lymphomatoid granulomatosis of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Intravascular large B-cell lymphoma of the lung: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
      "Pulmonary Langerhans cell histiocytosis: distinguish by the defining architecture, cytology, immunophenotype, and evidence of invasion or lineage-specific differentiation.",
    ],
    molecular: [
      "Demonstration of a corroborating genomic alteration may aid in diagnosis and treatment.",
    ],
    criteria: ["See #14068 ."],
    group: "Lymphoid and Histiocytic Proliferations",
  },
];

/** Diagnostic tables for the pulmonary adenocarcinoma spectrum. */
const adenocarcinomaTables = [
  {
    title: "Size and invasion criteria across the adenocarcinoma spectrum",
    columns: [
      "Lesion",
      "Total size",
      "Invasive component",
      "Key diagnostic boundary",
    ],
    rows: [
      [
        "Atypical adenomatous hyperplasia (AAH)",
        "Usually ≤ 5 mm",
        "No invasion",
        "Localized proliferation of mildly to moderately atypical pneumocytes/club cells along alveolar walls.",
      ],
      [
        "Adenocarcinoma in situ (AIS)",
        "≤ 30 mm",
        "No invasion",
        "Pure lepidic growth; no stromal, vascular, lymphatic, or pleural invasion; no STAS or tumor necrosis.",
      ],
      [
        "Minimally invasive adenocarcinoma (MIA)",
        "≤ 30 mm",
        "≤ 5 mm",
        "Predominantly lepidic with a single invasive focus or aggregate invasion ≤ 5 mm; no lymphovascular/pleural invasion, necrosis, or STAS.",
      ],
      [
        "Invasive adenocarcinoma",
        "Any size",
        "> 5 mm or other exclusion criterion",
        "Invasion exceeds 5 mm or there is lymphovascular/pleural invasion, necrosis, or STAS; classify by predominant pattern.",
      ],
    ],
  },
  {
    title: "Histologic patterns of invasive non-mucinous adenocarcinoma",
    columns: [
      "Pattern",
      "Defining morphology",
      "How to recognize invasion / practical note",
    ],
    rows: [
      [
        "Lepidic",
        "Neoplastic type II pneumocytes or club cells line pre-existing alveolar walls.",
        "Alveolar architecture is preserved. A lepidic-predominant invasive tumor has an invasive component > 5 mm or another exclusion feature.",
      ],
      [
        "Acinar",
        "Neoplastic glands with round, oval, or irregular lumina.",
        "Glands infiltrate through myofibroblastic stroma; cribriform fused glands are included in the acinar pattern.",
      ],
      [
        "Papillary",
        "Glandular tumor cells cover fibrovascular cores.",
        "True papillae have fibrovascular cores; tangentially sectioned lepidic growth can mimic papillary architecture.",
      ],
      [
        "Micropapillary",
        "Small tufts or nests of tumor cells lack fibrovascular cores and float in air spaces.",
        "Often associated with spread through air spaces and increased risk of recurrence.",
      ],
      [
        "Solid",
        "Sheets of tumor cells without recognizable acinar, papillary, or lepidic architecture.",
        "Require convincing cytologic or immunohistochemical evidence of glandular differentiation, such as intracellular mucin or pneumocyte markers.",
      ],
    ],
  },
  {
    title: "Pattern recording in resection specimens",
    columns: ["Reporting element", "Recommended approach"],
    rows: [
      [
        "Predominant pattern",
        "Assign the single pattern with the largest proportion, even when two patterns are close.",
      ],
      [
        "Percentage of each pattern",
        "Estimate lepidic, acinar, papillary, micropapillary, and solid components in 5–10% increments; percentages should total 100%.",
      ],
      [
        "Invasive size",
        "For non-mucinous adenocarcinoma with a lepidic component, pathologic T size is based on the invasive component, not the total lesion size.",
      ],
      [
        "Additional adverse features",
        "Document lymphovascular invasion, visceral pleural invasion, tumor necrosis, and spread through air spaces (STAS).",
      ],
    ],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export default function LungTumorsPage() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const groups = useMemo(
    () => ["All", ...Array.from(new Set(entities.map((e) => e.group)))],
    [],
  );
  const filtered = useMemo(() => {
    const q = normalize(query);
    return entities.filter((entity) => {
      const matchesGroup =
        activeGroup === "All" || entity.group === activeGroup;
      const searchable = normalize(
        [
          entity.name,
          entity.group,
          ...entity.definition,
          ...entity.clinical,
          ...entity.hist,
          ...entity.ihc,
          ...entity.diff,
          ...entity.molecular,
          ...entity.criteria,
        ].join(" "),
      );
      return matchesGroup && (!q || searchable.includes(q));
    });
  }, [query, activeGroup]);

  function toggle(name: string) {
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Pathology GPS
          </Link>
          <Link
            href="/thoracic"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Thoracic Pathology
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <nav className="mb-5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          / Lung Tumors
        </nav>
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Thoracic Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Lung Tumors
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Diagnostic reference for primary pulmonary epithelial,
            neuroendocrine, mesenchymal, lymphoid, and histiocytic lesions. The
            adenocarcinoma section emphasizes precursor lesions, size
            thresholds, invasive components, and comprehensive histologic
            pattern assessment.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold">
            Pulmonary adenocarcinoma: key size thresholds
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Apply these criteria only after complete sampling and careful
            assessment of the entire lesion.
          </p>
          {adenocarcinomaTables.map((table) => (
            <div key={table.title} className="mt-5">
              <h3 className="mb-2 text-sm font-bold text-slate-800">
                {table.title}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-xs">
                  <thead>
                    <tr className="bg-slate-100">
                      {table.columns.map((column) => (
                        <th
                          key={column}
                          className="border border-slate-200 px-3 py-2 font-semibold"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 ? "bg-slate-50" : "bg-white"}
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-slate-200 px-3 py-2 align-top leading-5"
                          >
                            {cellIndex === 0 ? <strong>{cell}</strong> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search diagnosis, morphology, IHC, molecular marker..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 md:max-w-xl"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setExpanded(filtered.map((e) => e.name))}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium hover:bg-slate-100"
            >
              Expand all
            </button>
            <button
              onClick={() => setExpanded([])}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium hover:bg-slate-100"
            >
              Collapse all
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                activeGroup === group
                  ? "bg-teal-700 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <p className="mt-5 text-xs text-slate-500">
          Showing {filtered.length} of {entities.length} diagnostic entities.
        </p>

        <div className="mt-4 space-y-3">
          {filtered.map((entity) => {
            const isOpen = expanded.includes(entity.name);
            return (
              <article
                key={entity.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(entity.name)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
                      {entity.group}
                    </span>
                    <span className="mt-1 block text-base font-bold text-slate-950">
                      {entity.name}
                    </span>
                    {entity.definition[0] && (
                      <span className="mt-2 block text-sm leading-6 text-slate-600">
                        {entity.definition[0]}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 shrink-0 text-xl text-slate-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="space-y-5 border-t border-slate-100 px-5 py-5">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.hist} />
                    <Section title="Immunophenotype" items={entity.ihc} />
                    <Section
                      title="Differential Diagnosis"
                      items={entity.diff}
                    />
                    <Section
                      title="Molecular Pathology"
                      items={entity.molecular}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-400">
          PathologyGPS · Diagnostic Navigation System
        </footer>
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
