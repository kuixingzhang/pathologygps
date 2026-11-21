"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: string[];
  molecular?: string[];
  pattern?: string;
  pitfall?: string;
  cytology?: string[];
  isBiphasicFocus?: boolean;
};

type TableProps = { headers: string[]; rows: string[][] };

const entities: Entity[] = [
  {
    name: "Nodular oncocytic hyperplasia",
    group: "Non-neoplastic epithelial lesions",
    clinical: [
      "NOH is almost exclusively found in the parotid gland; it is rarely seen in the submandibular gland",
      "Patients with NOH present with a palpable painless mass, often present for years",
      "NOH constitutes < 1% of salivary tumors but accounts for approximately 7% of bilateral salivary lesions",
      "The peak incidence is in the fifth and sixth decades of life, and there is a slight female predilection",
    ],
    criteria: [
      "Essential: circumscribed but unencapsulated nodules of oncocytic and/or clear cells",
      "Desirable: multifocality",
    ],
    histology: [
      "NOH consists of irregularly shaped unencapsulated nodules of oncocytes in solid to tubulotrabecular patterns distributed throughout the salivary parenchyma",
      "Lobular architecture is preserved",
      "Clear cell change is frequent and can form small satellite foci that mimic invasive clear cell tumors",
      "Unifocality and encapsulation can separate NOH from oncocytoma",
      "Entrapped normal acini, ducts, and adipocytes within nodules and non-perivascular p63-positive basal cells distinguish NOH from acinic cell carcinoma or metastatic renal cell carcinoma",
    ],
    ihc: [
      "Pancytokeratin highlights native ductal structures and helps demonstrate the relationship of oncocytic nodules to residual salivary parenchyma.",
      "p63 may highlight non-perivascular basal cells within nodules; interpret the distribution rather than isolated positive cells.",
      "SOX10 and S100 are generally not diffuse in the oncocytic nodules; use a focused panel only when acinic cell carcinoma or a myoepithelial neoplasm is considered.",
    ],
    differential: [
      "Absence of MAML2 rearrangement can rule out oncocytic mucoepidermoid carcinoma",
      "Negativity for SOX10, S100, and PLAG1 rearrangement helps distinguish NOH from pleomorphic adenoma and myoepithelioma with oncocytic metaplasia",
    ],
    molecular: [],
    pattern: "",
    pitfall: "",
    isBiphasicFocus: false,
  },
  {
    name: "Lymphoepithelial sialadenitis",
    group: "Non-neoplastic epithelial lesions",
    clinical: [
      "Typically, all salivary (and other mucosal) glands are affected",
      "Minor glands are affected mostly microscopically, without enlargement, whereas the parotid glands often show bilateral enlargement",
      "Clinical symptoms of sicca syndrome (dry mouth, dry eye), frequently associated with bilateral parotid swelling",
      "Patients are predominantly female (M:F ratio: 1:4) and in their sixth or seventh decade of life",
    ],
    criteria: [
      "Essential: a dense benign lymphocytic infiltrate, in salivary glands, with lymphoepithelial lesions",
    ],
    histology: [
      "Early lesions show a minor to moderate degree of T cell–dominated periductal lymphocytic infiltration, rarely with reactive follicles and usually without lymphoepithelial lesions",
      "They are typically encountered in minor labial glands and sampled for diagnostic purposes in cases of suspected Sjögren disease",
      "A positive focus is defined as ≥ 1 dense periductal aggregate of > 50 lymphocytes, representing a histological criterion within a diagnostic score",
      "Focus score is calculated as the number of lymphocytic foci per 4 mm²",
      "Advanced lesions typically manifest as a tumorous enlargement of parotid (or, rarely, the submandibular or lacrimal) glands",
      "They show intense, B cell–dominated, lymphoplasmacytic infiltrates with preserved lobular architecture; a variable (often massive) degree of parenchymal atrophy; multiple reactive follicles; and multiple, densely aggregated, partly cystic lymphoepithelial lesions",
    ],
    ihc: [
      "A keratin stain can be helpful for pattern analysis of preserved glandular architecture, including the frequency and distribution of lymphoepithelial lesions",
      "Immunohistological staining for kappa/lambda light chains or, alternatively, in situ hybridization detecting corresponding mRNA may demonstrate their polyclonal nature in lymphoepithelial sialadenitis, while molecular evidence of B-cell monoclonality may occur, but in the absence of further histological evidence it does not necessarily represent a malignant transformation",
      "There is no association with EBV",
    ],
    differential: [
      "Cases with ductal dilatation, predominantly diffuse lymphocytic infiltration, and fibrosis represent nonspecific (e.g. traumatic or obstructive) sialadenitis of minor/labial glands",
      "Sclerosis, obliterative phlebitis, and numerous IgG4-positive plasma cells, as seen in IgG4-associated sialadenitis of the submandibular glands, are absent",
      "HIV-associated cystic lymphoepithelial lesion is histologically similar but is usually bilateral, characterized by bizarre, enlarged follicles and massive cystically dilated lymphoepithelial lesions",
      "Salivary lymphoepithelial carcinoma may show irregular lymphoepithelial lesions in a lobular arrangement but represents a bluntly infiltrating neoplasia with increased proliferation, cellular atypia, and the presence of EBV in a significant subset of cases",
      "Clinical information is usually indispensable for correct differential diagnosis",
    ],
    molecular: [],
    pattern: "",
    pitfall: "",
    isBiphasicFocus: false,
  },
  {
    name: "Pleomorphic adenoma",
    group: "Benign epithelial tumors",
    clinical: [
      "Most PAs arise in the parotid gland (~70–80%), followed by the oral cavity and submandibular gland",
      "In the oral cavity, the palate is the most common location",
      "Generally, PA presents as a slowly growing, painless mass",
      "Deep parotid lobe tumors present as parapharyngeal space masses; parotid tail tumors present as level II neck lesions; and minor salivary gland PAs may present with dysphagia, airway obstruction, or obstructive sleep apnoea",
      "PA is the most common salivary gland neoplasm worldwide, accounting for 50–70% of all salivary gland tumors",
    ],
    criteria: [
      "Essential: an admixture of bilayered ducts, myoepithelial cells, and chondromyxoid/fibrous stroma; absence of invasion and malignant cytomorphological features",
      "Desirable: PLAG1 or HMGA2 alterations (in selected cases)",
    ],
    histology: [
      "Well circumscribed and often encapsulated; the capsule may be incomplete or absent, particularly in minor salivary gland and stroma-rich tumors.",
      "Characteristic admixture of bilayered ducts, myoepithelial cells, and chondromyxoid or fibrous stroma. Ducts typically have an inner luminal layer and an outer myoepithelial layer.",
      "Myoepithelial cells show broad morphology: plasmacytoid, spindle, epithelioid, basaloid, clear, stellate, or oncocytic. They may merge imperceptibly into the myxoid stroma.",
      "Stroma ranges from myxoid and chondromyxoid to hyalinized, collagenous, osseous, or lipomatous. Either cellular or stromal components may predominate.",
      "Squamous, mucinous, sebaceous, adipocytic, and osseous metaplasia may occur. Cellular pleomorphic adenoma can be very cellular but should lack destructive invasion.",
      "Pseudopodia, satellite nodules, capsular irregularity, and multinodular growth alone do not establish malignancy. Bizarre degenerative (ancient) atypia and post-biopsy infarct-type necrosis may occur.",
      "The histological hallmark of PA is its morphological diversity derived from an admixture of bilayered ducts, myoepithelial cells, and stroma",
      "PAs are well delineated and/or encapsulated",
      "The capsule may be absent in minor salivary gland and chondromyxoid-predominant PAs",
      "The ductal and myoepithelial cells are commonly arranged in bilayered tubular structures, with the myoepithelial cells melding with the stroma",
      "The cellular phenotype, particularly of the myoepithelial cells, is broad and includes epithelioid, basaloid, stellate, spindled, clear, oncocytic, and plasmacytoid morphology",
      "The stroma can be mucoid, myxoid, hyalinized, chondroid, osseous, or lipomatous",
      "A variable admixture of bilayered ducts, myoepithelial cells, and myxoid, chondroid, chondromyxoid, fibrous, or hyalinized stroma.",
      "Metaplastic changes can include adipose, osseous, squamous, sebaceous, or mucinous differentiation. Pseudopods and satellite nodules may extend beyond the main contour.",
    ],
    ihc: [
      "Luminal/ductal cells: pancytokeratin, CK7, CAM5.2.",
      "Myoepithelial cells: calponin (sensitive), SMA, S100, SOX10, p40 (often more useful than p63), CK5/6.",
      "GFAP often highlights myxoid and myoepithelial areas.",
      "PLAG1 or HMGA2 immunohistochemistry can support the diagnosis; interpret in the morphologic context.",
      "PLAG1, and HMGA2, respectively, are emerging as sensitive immunohistochemical markers for PA",
      "There is usually strong and diffuse reactivity for pancytokeratin, AE1/AE3, CAM5.2, and CK7, which is often accentuated in the ductal or luminal cell areas, with various muscle, myoepithelial, and basal markers reactive, including calponin (most sensitive), SMA, S100, SOX10, p40 (better than p63), and CK5/6",
      "GFAP is usually more strongly expressed in myxoid and myoepithelial areas",
      "The immunoexpression of S100 and SOX10 helps to differentiate oncocytic PA from other oncocytic tumors",
      "Ductal cells express epithelial markers; myoepithelial cells may express S100, SOX10, p63, calponin, and SMA.",
      "Interpret staining by cell compartment rather than treating the tumor as uniformly positive or negative.",
    ],
    differential: [
      "Basal cell adenoma: more monotonous basaloid cells, peripheral palisading, basement-membrane-like material, and no characteristic chondromyxoid matrix.",
      "Myoepithelioma: almost exclusively myoepithelial cells, with absent or very rare ducts and usually no classic ductal–myxoid admixture.",
      "Adenoid cystic carcinoma: cribriform architecture may overlap; look for infiltrative growth, perineural invasion, and characteristic basement membrane material rather than a benign pleomorphic pattern.",
      "Mucoepidermoid carcinoma: mucous, intermediate, and epidermoid cells with infiltrative growth; MAML2 rearrangement supports MEC. PA may show squamous or mucinous metaplasia but retains myoepithelial differentiation and lacks destructive invasion.",
      "PAs can show squamous metaplasia and mucocytes, and mimic squamous cell carcinoma or mucoepidermoid carcinoma",
      "PA can be distinguished from squamous cell carcinoma by the absence of infiltrative growth, marked pleomorphism, and increased mitoses, and it can be separated from mucoepidermoid carcinoma by the identification of well-formed keratin pearls, the presence of myoepithelial differentiation, and the absence of MAML2 rearrangements",
      "PA can exhibit cribriform architecture mimicking adenoid cystic carcinoma, as well as areas of compact biphasic tubular structures reminiscent of epithelial-myoepithelial carcinoma",
      "Myoepithelial carcinoma is often cytologically bland and may therefore be underrecognized as malignant and misclassified as a myoepithelial-rich PA",
    ],
    molecular: [
      "Not applicable",
      "PLAG1 rearrangements are reported in more than half of cases; HMGA2 rearrangements occur in a smaller subset.",
      "PLAG1 or HMGA2 alterations are useful in selected cases.",
    ],
    pattern:
      "Biphasic ductal–myoepithelial tumor with variable chondromyxoid stroma",
    pitfall:
      "Do not mistake hyalinized PA stroma for AdCC pseudocysts. Seek the broader chondromyxoid/myoepithelial context and true ductal component.",
    cytology: [
      "Epithelial/ductal groups admixed with plasmacytoid or spindle myoepithelial cells.",
      "Fibrillary or chondromyxoid matrix is a major clue. When matrix is scant, distinction from AdCC or other basaloid lesions can be difficult.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Basal cell adenoma",
    group: "Benign epithelial tumors",
    clinical: [
      "BCAs are largely restricted to major salivary glands, especially the parotid gland (> 80%)",
      "BCA usually presents as a well-defined, mobile, solitary mass, although syndromic cases may be multiple and associated with dermal cylindromas or trichoepitheliomas",
      "BCAs account for about 1–4% of all salivary gland tumors",
      "They present more frequently in the sixth and seventh decades of life, with a slight female predilection",
    ],
    criteria: [
      "Essential: non-invasive; biphasic basaloid morphology; peripheral palisading; variable amount of collagenous stroma",
      "Desirable: dual population immunophenotype; nuclear β-catenin reactivity",
    ],
    histology: [
      "Well circumscribed or encapsulated tumor with solid, trabecular, tubular, cribriform, or membranous architecture; more than one pattern commonly coexists.",
      "Basaloid cells form nests, trabeculae, or tubules. Darker peripheral cells often show palisading, while inner/luminal cells are paler.",
      "Tubules contain a central lumen and one or two layers of cuboidal/basaloid cells; luminal secretions may be eosinophilic and PAS positive.",
      "Hyaline basement-membrane-like material may be present between nests or as rounded droplets. In the membranous subtype, thick eosinophilic hyaline material surrounds and separates tumor nests; a membranous pattern involving more than 50% supports this subtype.",
      "Cystic change is common. A chondromyxoid matrix is not a feature. There should be no destructive or perineural invasion.",
      "BCAs are encapsulated or well circumscribed and show tubulotrabecular, cribriform, membranous, or solid growth",
      "A subset show a distinct spindled S100-positive myoepithelial cell-derived stromal component",
      "The tumor shows peripheral palisading of dark cells with luminal paler cells and ducts",
      "Nuclei are vesicular",
      "Tumors demonstrate stroma of variable amount and collagenous density, sometimes in drop-like hyaline material",
      "A lipomatous subtype has been described",
      "Darker peripheral basaloid cells often show palisading, with paler inner cells and ducts. Tubules may have central lumina with eosinophilic/PAS-positive secretion.",
    ],
    ihc: [
      "Luminal cells express epithelial markers, including keratins, EMA, CEA, and CD117.",
      "Basaloid/abluminal cells may express p63, calponin, SMA, actin, S100, and GFAP.",
      "Nuclear β-catenin and LEF1 coexpression supports BCA, particularly in the appropriate morphologic setting.",
      "A stromal spindle-cell component, when present, may be S100 positive and p63 negative.",
      "Epithelial and myoepithelial markers highlight the dual cell composition",
      "Coexpression of nuclear β-catenin and LEF1 is detected in BCAs",
    ],
    differential: [
      "Cellular pleomorphic adenoma: lacks the monotonous basaloid pattern and prominent peripheral palisading; often shows myxochondroid stroma and blending myoepithelial cells.",
      "Basal cell adenocarcinoma: the decisive feature is invasion, including infiltrative growth beyond the circumscribed border or perineural invasion.",
      "Adenoid cystic carcinoma: may show cribriform architecture and hyaline material, but is infiltrative and may show perineural invasion.",
      "BCAs are distinguished from cellular pleomorphic adenoma by their basaloid appearance, peripheral palisading, and lack of blending with associated myoepithelial-type stroma",
      "BCAs are differentiated from basal cell adenocarcinoma by the absence of invasion",
    ],
    molecular: [
      "CTNNB1/β-catenin pathway alterations are relevant; a subset has CYLD alterations. No single molecular test independently establishes benign behavior.",
    ],
    pattern: "Biphasic basaloid and luminal cells; peripheral palisading",
    pitfall:
      "On FNA or a small biopsy, BCA may not be separable from BCAC or AdCC. If invasion cannot be assessed, use a descriptive diagnosis such as basaloid neoplasm and recommend excision/correlation.",
    cytology: [
      "Often markedly cellular, with small sheets and round, trabecular, or solid fragments of monomorphic small basaloid cells.",
      "Cells have scant cytoplasm, uniform fine hyperchromasia, and frequent naked nuclei in a relatively clean background.",
      "Thin dense hyaline material may surround or interdigitate with fragments; small rounded stromal droplets may be present. Squamoid or sebaceous foci can occasionally be seen.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Warthin tumor",
    group: "Benign epithelial tumors",
    clinical: [
      "Tumors are almost exclusively restricted to parotid glands, especially the inferior pole, and periparotid lymph nodes; < 1% are found in the deep lobe",
      "Tumors are multifocal in 12–20% of patients, either synchronously or metachronously, and are bilateral in 5–17%",
      "Patients present with painless, slow-growing, and fluctuant swellings",
      "Pain or facial nerve palsy may occur in metaplastic/infarcted variants",
      "Warthin tumor accounts for 5–20% of all salivary tumors, except in Black Africans, in whom it is rare",
    ],
    criteria: [
      "Essential: a circumscribed mass with spaces lined by papillary bilayered oncocytic cells; lymphoid stroma",
    ],
    histology: [
      "Well-circumscribed, often cystic tumor with papillary-cystic spaces lined by a characteristic bilayered oncocytic epithelium.",
      "The luminal layer consists of tall columnar oncocytes; the outer layer is composed of smaller cuboidal/basal cells.",
      "Underlying lymphoid stroma commonly contains well-formed germinal centers. The combination of bilayered oncocytic lining and lymphoid stroma is the key diagnostic pattern.",
      "Focal squamous, mucous, ciliated, or sebaceous metaplasia may occur.",
      "In infarcted/metaplastic Warthin tumor, the bilayered lining may be replaced by bland squamous metaplasia, with necrosis, ghost papillary architecture, granulation tissue, and granulomatous reaction.",
      "Warthin tumor is composed of varying proportions of papillary-cystic structures lined by bilayered oncocytic epithelial cells, surrounded by a lymphoid stroma including germinal centers",
      "The epithelial component comprises inner columnar and outer cuboidal cells",
      "Limited foci of squamous, mucous, ciliated, and sebaceous cells can be present",
      "Subtype In the infarcted/metaplastic subtype of Warthin tumor, the bilayered epithelium is replaced by squamous metaplastic epithelium without atypia",
      "Mucinous metaplasia may also be present",
      "The infarcted/metaplastic subtype, which may follow FNA or trauma, shows areas of necrosis, in which a ghost papillary architecture may be discerned (highlighted with reticulin staining)",
    ],
    ihc: [
      "The oncocytic luminal and basal epithelial layers are cytokeratin positive; basal cells can be highlighted by p63/p40.",
      "IHC is usually not required in classic cases. MAML2 rearrangement supports mucoepidermoid carcinoma rather than Warthin tumor.",
    ],
    differential: [
      "Warthin-like mucoepidermoid carcinoma: may have cysts, lymphoid stroma, and squamous/mucinous epithelium, but lacks the orderly bilayered oncocytic lining; MAML2 rearrangement supports MEC.",
      "Oncocytic cystadenoma: lacks the prominent lymphoid stroma with germinal centers and characteristic bilayered oncocytic epithelium.",
      "Metaplastic Warthin tumor vs. MEC: seek residual classic bilayered oncocytic epithelium and infarct-related ghost papillae; do not diagnose MEC from squamous metaplasia alone.",
      "The main differential diagnosis of the metaplastic Warthin tumor subtype is Warthin-like mucoepidermoid carcinoma; however, Warthin tumors lack MAML2 gene rearrangement",
    ],
    molecular: [
      "Diagnostic molecular pathology is not directly relevant, but an absence of MAML2 alteration can exclude mucoepidermoid carcinoma",
    ],
    pattern: "Bilayered oncocytic epithelium in lymphoid stroma",
    pitfall:
      "After FNA or trauma, infarction and extensive squamous metaplasia can obscure the classic appearance. Search for residual bilayered oncocytic epithelium and lymphoid stroma.",
    isBiphasicFocus: false,
  },
  {
    name: "Oncocytoma",
    group: "Benign epithelial tumors",
    clinical: [
      "More than 80% of cases occur in the parotid, approximately 10% occur in the submandibular gland, and the rest occur in minor salivary glands and the sublingual gland",
      "Symptoms depend on anatomical location",
      "Oncocytoma usually presents as a unilateral painless swelling",
      "Oncocytomas represent < 1.5% of salivary gland tumors",
      "The incidence peak is in the seventh decade of life, with no sex predilection",
    ],
    criteria: [
      "Essential: a circumscribed mass composed of large oncocytic epithelial cells; lack of entrapped normal parenchyma",
      "Desirable: basal cells positive for p63; absence of SOX10 and S100 (in selected cases)",
    ],
    histology: [
      "Well-circumscribed, usually encapsulated tumor composed of large oncocytes arranged in nests and sheets separated by delicate fibrovascular stroma.",
      "Cells have abundant, dense, finely granular eosinophilic cytoplasm; nuclei are centrally placed, uniform, and vesicular, often with a single prominent nucleolus.",
      "Scattered dark cells with pyknotic nuclei may represent degenerating oncocytes.",
      "Unlike nodular oncocytic hyperplasia, a true oncocytoma forms a discrete mass and lacks entrapped normal salivary parenchyma.",
      "Clear cell change may occur due to glycogen and fixation-related effects.",
      "The nuclei are uniform, vesicular, and centrally placed, with prominent single nucleoli",
      "Tumors lack entrapped normal parenchyma",
      "Subtype In clear cell oncocytoma, the presence of glycogen and fixation artefacts causes the clear cell change",
      "Immunohistochemistry and differential diagnosis The presence of p63-positive basal cells excludes metastatic renal cell carcinoma and acinic cell carcinoma",
    ],
    ihc: [
      "p63-positive basal cells may be present and help exclude metastatic renal cell carcinoma and acinic cell carcinoma in the appropriate differential.",
      "PAX2 and PAX8 are generally absent; positivity should prompt consideration of metastatic renal cell carcinoma.",
      "S100 and SOX10 are typically absent in conventional oncocytoma; their expression and PLAG1 alteration favor oncocytic PA or myoepithelioma.",
      "MAML2 rearrangement supports oncocytic mucoepidermoid carcinoma.",
    ],
    differential: [
      "Nodular oncocytic hyperplasia: multiple non-encapsulated nodules with intervening/entrapped normal gland; cytology may be indistinguishable.",
      "Metastatic renal cell carcinoma: consider PAX8/PAX2 and clinical history; oncocytoma generally lacks these markers.",
      "Acinic cell carcinoma: may show granular cytoplasm but often has finely vacuolated cytoplasm and lacks the p63-positive basal layer.",
      "Oncocytic PA/myoepithelioma: S100/SOX10 expression and PLAG1 rearrangement support myoepithelial lineage.",
    ],
    molecular: [],
    pattern: "Circumscribed proliferation of mitochondria-rich oncocytes",
    pitfall:
      "Do not diagnose oncocytoma from oncocytic cytology alone. Confirm a circumscribed neoplasm and distinguish it from nodular oncocytic hyperplasia.",
    isBiphasicFocus: false,
  },
  {
    name: "Salivary gland myoepithelioma",
    group: "Benign epithelial tumors",
    clinical: [
      "Most MEs occur in the parotid gland, followed by the palate; less commonly, they occur in submandibular gland",
      "The tumor usually presents as a painless slow-growing mass",
      "ME accounts for 1.5% of all salivary gland tumors",
      "It constitutes 2.2% and 5.7% of major and minor salivary gland tumors, respectively",
    ],
    criteria: [
      "Essential: almost exclusive myoepithelial differentiation and absence of invasion",
      "Desirable: tumor encapsulation (except in minor salivary glands)",
    ],
    histology: [
      "Well-circumscribed and often encapsulated, although encapsulation is less common in minor salivary gland tumors.",
      "Composed almost entirely of myoepithelial cells, usually of one dominant type: spindle, epithelioid, plasmacytoid, or clear; mixed patterns may occur.",
      "Cells form nests, cords, trabeculae, reticular networks, or solid sheets.",
      "Stroma may be myxoid, mucoid, hyalinized, collagenous, or vascular. Classic bilayered ducts are absent or very rare.",
      "Mucin-rich cytoplasm is rare and can mimic signet-ring cell carcinoma. Oncocytic change may also occur.",
      "ME shows well-circumscribed and often encapsulated borders",
      "The myoepithelial cells can be spindled, epithelioid, plasmacytoid, or clear, or in variable combinations thereof, and they may be arranged in nested, cord-like, trabeculated, or reticular patterns",
      "The stroma can be myxoid, collagenous, or vascular",
      "Abundant intracellular mucin is a rare reported finding, and oncocytic changes may be found",
      "Stroma may be myxoid, collagenous, hyalinized, or vascular. Oncocytic change and rare mucin-rich cells may occur.",
    ],
    ihc: [
      "Broad-spectrum keratins are positive.",
      "Myoepithelial markers commonly include S100, SOX10, p63, calponin, and SMA.",
      "GFAP and CD10 may be positive; expression can vary by cell type.",
      "ME is positive for keratins, S100, SOX10, and myoepithelial markers such as p63, calponin, and SMA",
      "GFAP and CD10 may also be expressed.",
    ],
    differential: [
      "Pleomorphic adenoma: shows a recognizable ductal component and characteristic chondromyxoid stroma with a broader range of epithelial and stromal differentiation.",
      "Basal cell adenoma: has a biphasic basaloid/luminal pattern, peripheral palisading, and often hyaline basement-membrane material.",
      "Myoepithelial carcinoma: cytology may be deceptively bland; destructive infiltrative growth is the key discriminator. Necrosis and significant atypia are concerning but invasion must be assessed.",
      "The well-defined borders of the tumor and the lack of invasive growth distinguish ME from myoepithelial carcinoma",
      "The characteristic basaloid biphasic pattern, peripheral palisading, and minimal to absent myxoid stroma of basal cell adenoma help to separate it from ME",
      "Monomorphic histology and rare or absent ductal structures in ME separate it from pleomorphic adenoma",
      "Distinguishing from soft tissue ME may be difficult, given the overlapping histological features and the presence of PLAG1 gene rearrangements in both",
    ],
    molecular: [
      "Detection of PLAG1 rearrangement by cytogenetics or other methods can be helpful",
      "A few cases show EWSR1 rearrangements. Selected oncocytic myoepitheliomas have reported PLAG1-related fusions.",
    ],
    pattern:
      "Predominantly or exclusively myoepithelial cells; no meaningful ductal component",
    pitfall:
      "A bland cytology does not establish benignity. The distinction from myoepithelial carcinoma is architectural and requires evaluation for invasion.",
    cytology: [
      "Variable cellularity; bland spindle, epithelioid, clear, or plasmacytoid cells occur singly or in loosely cohesive fragments.",
      "Hyaline stromal strands may be present; classic myxofibrillary PA matrix is absent. Cytology cannot reliably exclude myoepithelial carcinoma because invasion cannot be assessed.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Canalicular adenoma",
    group: "Benign epithelial tumors",
    clinical: [
      "Canalicular adenomas occur in the upper lip (80%), followed by the buccal mucosa, lower lip, hard palate, and soft palate",
      "Patients present with a slowly growing, mobile, painless, non-ulcerated mass",
      "Multifocal tumors are seen in 9% of cases",
      "Canalicular adenoma accounts for < 1% of all salivary gland tumors and 4–6% of all benign minor salivary gland neoplasms",
      "There is an M:F ratio of 1:1.7, with a wide age range (33–91 years) but a peak in the seventh decade of life",
    ],
    criteria: [
      "Essential: minor salivary gland location; monotonous, isomorphic syncytium of cuboidal to columnar cells anastomosing in a lattice of cords and canaliculi; no basal/myoepithelial layer",
    ],
    histology: [
      "Usually a well-circumscribed minor salivary gland tumor, most often in the upper lip; multifocality can occur.",
      "Monomorphic cuboidal-to-columnar cells form delicate branching and anastomosing cords, ribbons, strands, and canaliculi in a loose, edematous, highly vascular stroma.",
      "The cords often show a characteristic beaded appearance, with club-ended strands and focal pseudostratification.",
      "Cystic spaces and papillary projections may occur. Microliths, tyrosine crystals, squamoid morules, and luminal histiocytes may be seen.",
      "There is no true outer myoepithelial/basal layer. Atypia, brisk mitoses, and necrosis are generally absent.",
      "Tumors have a bosselated or lobulated surface and are occasionally multifocal",
      "The tumor cells are relatively monotonous, high cuboidal to columnar, and arranged in one or two cell layers",
      "These layers anastomose to create a lattice of cords, canaliculi, tubules, and/or strands",
      "Papillary projections into cystic spaces are common",
      "The cell ribbons frequently abut one another (termed “beading”) with knots of cells joining parallel rows",
      "The nuclei appear pseudostratified",
      "Microliths, tyrosine crystals, squamoid morules, and luminal histiocytes may be seen. Atypia, brisk mitoses, and necrosis are generally absent.",
    ],
    ihc: [
      "Tumor cells: pancytokeratin, CK7, S100, SOX10, and CD117 positive.",
      "DOG1, desmin, and actins are typically negative.",
      "GFAP may show a distinctive linear peripheral staining pattern near the stromal interface.",
      "The cells are immunoreactive for pancytokeratin, CK7, S100, SOX10, and KIT (CD117), but non-reactive for DOG1, desmin, and actins",
      "There is a characteristic linear peripheral GFAP immunoreactivity",
    ],
    differential: [
      "Basal cell adenoma: has a true biphasic population with peripheral palisading and basement-membrane-like material; canalicular adenoma lacks an outer myoepithelial layer.",
      "Polymorphous adenocarcinoma: infiltrative growth, diverse architecture, and perineural invasion favor carcinoma.",
      "Adenoid cystic carcinoma: infiltrative growth, angulated hyperchromatic cells, and basement-membrane-type material favor ACC.",
      "Reticulated myoepithelioma: myoepithelial phenotype and different stromal/cellular pattern.",
      "The entities in the differential diagnosis include basal cell adenoma, polymorphous adenocarcinoma, adenoid cystic carcinoma, reticulated myoepithelioma, selected odontogenic tumors, and skin basal cell carcinoma",
    ],
    molecular: [
      "No defining recurrent molecular alteration has been established for routine diagnosis.",
    ],
    pattern:
      "Monomorphic columnar cells in beaded, anastomosing cords within loose vascular stroma",
    pitfall:
      "The delicate branching cords can resemble a reticular myoepithelial lesion. Confirm the epithelial phenotype and absence of a true outer myoepithelial layer.",
    cytology: [
      "Cytology may show monomorphic epithelial groups, but tissue architecture is more reliable for recognition. Correlate any monomorphic epithelial groups with the characteristic beaded cords and vascular stroma in tissue.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Cystadenoma of the salivary glands",
    group: "Benign epithelial tumors",
    clinical: [
      "Cystadenomas seem equally distributed between major and minor salivary glands",
      "Almost half of all cases originate in the parotid, followed by minor glands of the lip and buccal mucosa",
      "Cystadenomas present as slowly growing, painless nodules or masses",
      "Minor salivary gland tumors are covered by smooth mucosa, frequently mimicking mucocoele",
      "Cystadenomas represent 1–4% of all salivary gland neoplasms",
    ],
    criteria: [
      "Essential: a unicystic or multicystic non-invasive bland neoplasm with an oncocytic or mixed epithelial lining; no lymphoid stroma; exclusion of other cystic salivary gland tumors",
      "Desirable: oncocytic cells and other variable cell types; a variable papillary component; a demonstrable basal cell layer",
    ],
    histology: [
      "Well-circumscribed but often unencapsulated lesion; peripheral entrapment of normal salivary tissue may be present. Multicystic architecture is common, although some are unicystic.",
      "Cysts are lined by variable combinations of columnar, cuboidal, and oncocytic cells; mucinous, squamous, apocrine, or ciliated cells may occur.",
      "Papillary projections may be simple and delicate. Complex arborizing papillae or hierarchical epithelial tufting should prompt consideration of another entity.",
      "The lining is cytologically bland, without significant atypia, mitotic activity, or invasive growth.",
      "Oncocytic, papillary, and mucinous patterns are recognized; mucinous cystadenoma is uncommon.",
      "Cystadenomas are well circumscribed but unencapsulated, with entrapment of salivary tissue at the periphery",
      "As many as 20% of cases are unicystic",
      "The cysts are variably sized and lined by epithelial cells of different types with a variable papillary configuration",
      "The lining epithelium shows an admixture of columnar, cuboidal, and oncocytic cells in variable combinations",
      "Mucinous, squamous, apocrine, and ciliated epithelia are uncommon",
    ],
    ihc: [
      "Luminal cells: CK8/18 positive.",
      "A p63-positive basal cell layer may be demonstrable.",
      "S100 and SOX10 are usually negative or only focally/patchily positive; mammaglobin and GATA3 are typically negative.",
      "IHC is useful mainly to exclude macrocystic secretory carcinoma and intercalated-type intraductal carcinoma.",
      "The lining cells show a simple luminal phenotype (CK8/18+), supported by a p63+ basal cell layer",
      "S100 and SOX10 are usually absent or only focally expressed",
    ],
    differential: [
      "Macrocystic secretory carcinoma: S100, SOX10, mammaglobin, and MUC4 positivity support secretory carcinoma; ETV6 rearrangement is a useful molecular discriminator.",
      "Intercalated-type intraductal carcinoma: more complex papillary tufting and S100/SOX10/mammaglobin expression favor this entity.",
      "Warthin tumor: requires bilayered oncocytic epithelium and lymphoid stroma with germinal centers.",
      "Unicystic mucoepidermoid carcinoma: look for mucous, intermediate, and epidermoid cells, cytologic atypia, infiltrative growth, and MAML2 rearrangement.",
      "Cystadenoma should be distinguished from other papillary ductal proliferations by established criteria",
      "Immunohistochemistry may help to exclude macrocystic secretory carcinoma (S100+, SOX10+, mammaglobin+, MUC4+) and intercalated-type intraductal carcinoma (S100+, SOX10+, mammaglobin+)",
      "The mucinous subtype has organoid epithelium lacking the irregularly distributed intermediate and epidermoid cells and distorted mucous cell component seen in purely cystic mucoepidermoid carcinoma",
    ],
    molecular: [
      "Diagnostic molecular pathology is not directly relevant",
      "However, testing can exclude other cystic tumor entities (i.e",
      "ETV6 for secretory carcinoma, NR4A3 for acinic cell carcinoma, and MAML2 for mucoepidermoid carcinoma)",
    ],
    pattern:
      "Uni- or multicystic bland epithelial neoplasm with simple papillary projections",
    pitfall:
      "Simple papillae are compatible with cystadenoma; complex papillary tufting is not. Sample adequately to exclude an associated carcinoma or a cystic malignant mimic.",
    isBiphasicFocus: false,
  },
  {
    name: "Ductal papillomas",
    group: "Benign epithelial tumors",
    clinical: [
      "Preferential sites are intraoral minor salivary glands, with the lower lip, buccal mucosa, and palate being the most frequent",
      "Rare DPs affect the parotid or unusual sites",
      "DPs present as slowly growing, painless submucosal lesions or as polypoid intraoral lesions",
      "The duration of symptoms ranges from a few weeks to several years",
      "DPs constitute about 0.3% of oral salivary gland tumors",
    ],
    criteria: [
      "Intraductal papilloma Essential: a unicystic lesion with internal papillae, lined by columnar cells lacking atypia",
      "Inverted ductal papilloma Essential: well-delineated borders and endophytic growth, composed of squamous and mucoid cells devoid of atypia",
    ],
    histology: [
      "Intraductal papilloma is typically a well-defined unicystic lesion containing internal papillary projections lined by bland columnar cells, sometimes with scattered mucous cells.",
      "Inverted ductal papilloma is an endophytic, well-demarcated epithelial proliferation, often with a central opening communicating with the surface mucosa.",
      "The inverted type contains nonkeratinizing squamous and mucinous cells. Cytologic atypia is absent and mitoses are rare.",
      "The lesion is generally small and often arises in minor salivary glands.",
      "DP may be described as intraductal papilloma or inverted ductal papilloma, according to the growth pattern",
      "Intraductal papillomas are usually located at the ostia of the salivary excretory ducts, presenting as a unicystic lesion with well-defined borders and filled with papillary projections",
      "Papillae are lined by columnar cells intermingled with rare mucoid cells",
      "It is composed of mucinous and non-keratinizing squamous cells",
      "No atypia is seen, and mitoses are rare",
    ],
    ihc: [
      "IHC has limited diagnostic value and is usually not necessary in a classic lesion.",
      "Use ancillary studies only when morphology raises a specific malignant differential.",
      "Immunohistochemistry is of little help in the diagnosis",
    ],
    differential: [
      "Mucinous adenocarcinoma: branching papillae lined by numerous pale gastric-type cells and atypia favor carcinoma.",
      "Mucoepidermoid carcinoma: atypia, infiltrative borders, and MAML2 fusion support MEC.",
      "Cystadenoma: usually multicystic with a broader mixture of lining cell types rather than a duct-centered papilloma.",
      "The entities include other salivary gland papillary lesions such as mucinous adenocarcinoma and mucoepidermoid carcinoma",
      "Atypia, invasive borders, and the presence of MAML2 fusion favor the diagnosis of mucoepidermoid carcinoma",
    ],
    molecular: [],
    pattern:
      "Benign papillary proliferation arising in a salivary excretory duct",
    pitfall:
      "The key is bland ductal or squamous-mucinous epithelium without atypia or invasion. IHC is not a substitute for assessing architecture.",
    isBiphasicFocus: false,
  },
  {
    name: "Sialadenoma papilliferum",
    group: "Benign epithelial tumors",
    clinical: [
      "Most SPs occur in the hard palate, followed by the buccal mucosa",
      "Other sites include the soft palate, tongue, mouth floor, parotid gland, bronchus, and oesophagus",
      "SP usually presents as a raised sessile or pedunculated mucosal lesion",
      "SP is rare and tends to occur in older adults",
      "The age range is 2–91 years (median: 62 years)",
    ],
    criteria: [
      "Essential: surface exophytic mucosal squamous proliferation and submucosal ductal cystic-like spaces",
      "Desirable: evidence of BRAF p.V600E mutation (in selected cases)",
    ],
    histology: [
      "A polypoid mucosal lesion with two directly connected components: exophytic papillary squamous proliferation at the surface and endophytic papillary proliferation of submucosal salivary ducts.",
      "The ductal component forms papillary infoldings and cyst-like spaces and shows a biphasic lining: luminal cuboidal/columnar cells and basal cells.",
      "Lymphoplasmacytic stromal inflammation is common; luminal cells may show oncocytic metaplasia.",
      "The characteristic continuity between surface squamous epithelium and submucosal ductal proliferation is a major diagnostic clue. Overt atypia and invasion are absent.",
      "SP is characterized by the presence of both exophytic surface squamous and endophytic ductal papillary proliferation",
      "The exophytic squamous proliferation is directly contiguous with submucosal salivary gland ductal epithelium that shows endophytic papillary infoldings and cystic-like spaces",
      "A lymphoplasmacytic stromal infiltrate is common",
      "Cases with endophytic ductal proliferation with BRAF mutation but no exophytic component are called “SP-like intraductal papillary tumors”",
    ],
    ihc: [
      "Ductal luminal cells: CK7 and SOX10 positive.",
      "Basal cells: p63 positive.",
      "Surface squamous component: p63 and CK13 positive; CK7 may be focally positive.",
      "BRAF V600E immunostaining may be positive in both squamous and ductal components.",
      "The ductal cells are positive for CK7 and SOX10; the basal cells are positive for p63",
    ],
    differential: [
      "Squamous papilloma: lacks the characteristic connected endophytic ductal papillary component.",
      "Ductal papilloma/cystadenoma: lack the combined exophytic surface squamous and endophytic ductal pattern.",
      "Adenosquamous carcinoma: cytologic atypia and invasive growth favor carcinoma.",
      "The presence of a typical exophytic and endophytic growth pattern can distinguish SP from other salivary duct papillary tumors including squamous cell papilloma, ductal papilloma, or cystadenoma",
      "A lack of invasion and overt atypia distinguishes SP from adenosquamous carcinoma",
    ],
    molecular: [
      "Demonstration of BRAF p.V600E mutation by PCR or other methods may be helpful",
      "BRAF V600E mutation is consistently reported and can be demonstrated by immunohistochemistry or molecular testing.",
    ],
    pattern:
      "Combined exophytic squamous and endophytic ductal papillary proliferation",
    pitfall:
      "Recognize both components and their continuity. A BRAF V600E-positive intraductal papillary proliferation without an exophytic squamous component may be described as an SP-like intraductal papillary tumor in this pattern.",
    isBiphasicFocus: false,
  },
  {
    name: "Intercalated duct adenoma and hyperplasia",
    group: "Benign epithelial tumors",
    clinical: [
      "The majority (85%) of cases arise in the parotid gland, followed by the submandibular gland (11%) and the oral cavity (4%)",
      "Most cases are incidental, identified concurrently with other salivary gland lesions (e.g. basal cell adenoma, epithelial-myoepithelial carcinoma)",
      "Intercalated duct adenoma and hyperplasia are rarely reported",
      "There is an M:F ratio of 2:3, occurring in middle age (mean age: 52 years)",
    ],
    criteria: [
      "Essential: a monotonous proliferation of cuboidal ductal cells surrounded by myoepithelial cells, sometimes with acinic cells",
    ],
    histology: [
      "Nodular, sometimes multinodular proliferation of small cuboidal ductal cells surrounded by attenuated myoepithelial cells; acinar cells may be admixed.",
      "Adenoma is well circumscribed or encapsulated. Hyperplasia blends with adjacent acini and lacks a discrete expansile border.",
      "Lesions are often tiny and incidental, sometimes identified adjacent to another salivary neoplasm.",
      "Intercalated duct lesions are subdivided into adenoma when well circumscribed or encapsulated, and hyperplasia when blending with adjacent acini",
    ],
    ihc: [
      "Luminal epithelial cells express keratins.",
      "Abluminal myoepithelial cells can be highlighted by myoepithelial markers such as p63, calponin, or SMA.",
      "The demonstrable myoepithelial layer helps distinguish the lesion from striated duct adenoma.",
      "Abluminal myoepithelial cells can be highlighted by p63, calponin, or SMA; look for a continuous attenuated layer rather than scattered cells.",
    ],
    differential: [
      "Striated duct adenoma: lacks a true myoepithelial layer and is composed of single-layered eosinophilic columnar ducts.",
      "Basal cell adenoma: forms a larger, more overt neoplasm with basaloid proliferation, peripheral palisading, and often hyaline material.",
      "If well circumscribed, it should be distinguished from striated duct adenoma (which lacks myoepithelial cells)",
    ],
    molecular: [
      "HRAS hotspot variants have been reported in adenomas; CTNNB1 mutations are often reported in hyperplasia.",
    ],
    pattern: "Small bilayered intercalated duct proliferation",
    pitfall:
      "The adenoma-versus-hyperplasia distinction is primarily architectural: circumscribed nodule versus blending with native acini.",
    cytology: [
      "Cohesive large tissue fragments of epithelial cells with high N:C ratios and bland oval nuclei; thin stromal strands may be admixed.",
      "The small size and incidental nature of many lesions limit cytologic recognition.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Striated duct adenoma",
    group: "Benign epithelial tumors",
    clinical: [
      "SDA can involve both the major and minor salivary glands, with a predominance in the parotid",
      "SDA presents as a painless mass",
      "SDAs are rare tumors",
      "Those described have been in adults (age range: 47–78 years), with a slight female predominance",
    ],
    criteria: [
      "Essential: closely spaced ducts with minimal intervening stroma lined by a single layer of eosinophilic luminal cells",
      "Desirable: absence of myoepithelial cells by immunohistochemistry (in selected cases)",
    ],
    histology: [
      "Well-circumscribed and encapsulated tumor composed of numerous closely spaced ducts with very little intervening stroma; small cysts may be present.",
      "Ducts are lined by a single layer of columnar cells with eosinophilic cytoplasm, resembling normal striated ducts. Duct caliber is similar to native striated ducts.",
      "The tumor may be highly vascular, with staghorn vessels; lumina may contain eosinophilic colloid-like material or red blood cells.",
      "Hyalinization may create an oncocytoma-like appearance, but the cells lack the deeply granular eosinophilic cytoplasm of oncocytes.",
      "There is no morphologically apparent bilayering or chondromyxoid matrix.",
      "SDAs are well circumscribed and encapsulated",
      "They are composed of small, closely spaced ducts with minimal intervening stroma",
      "Small cysts can also be seen",
      "The tumor may be highly vascular, and some contain staghorn blood vessels",
      "Occasionally, the luminal spaces may contain eosinophilic material reminiscent of colloid, as well as red blood cells",
    ],
    ihc: [
      "Strong keratin expression, including CK7 and CK5/6.",
      "S100 is often strongly nuclear and cytoplasmic.",
      "Calponin, SMA, SMMHC, and p63 may highlight only scattered abluminal cells, not a continuous basal/myoepithelial layer.",
      "TTF1 and thyroglobulin are negative.",
      "Most tumors show strong nuclear and cytoplasmic staining for S100 (unlike oncocytoma)",
      "Markers of thyroid differentiation, such as thyroid transcription factor 1 (TTF1) and thyroglobulin, are negative",
    ],
    differential: [
      "Intercalated duct adenoma: has a true bilayered duct with myoepithelial cells; striated duct adenoma is single layered.",
      "Oncocytoma: has large cells with dense granular eosinophilic cytoplasm and typically lacks the strong S100 pattern described for striated duct adenoma.",
      "Thyroid tissue/metastasis: TTF1 and thyroglobulin negativity helps exclude thyroid differentiation.",
      "SDAs do not show chondromyxoid stroma or any other matrix",
      "They do not show morphologically visible bilayering",
      "They do not have the deeply eosinophilic cytoplasm characteristic of oncocytoma",
    ],
    molecular: [
      "IDH2 mutations may help to confirm the diagnosis in selected cases",
      "IDH2 p.R172 pathogenic variants were found in all cases tested in one cited study; the finding is promising but should be interpreted in the context of the limited evidence base.",
    ],
    pattern:
      "Closely packed single-layered striated-type ducts with minimal stroma",
    pitfall:
      "Scattered p63-, SMA-, or calponin-positive cells do not establish a continuous myoepithelial layer.",
    cytology: [
      "Cytologic findings are variable and are less reliable than the architectural pattern in tissue. Tissue architecture is more reliable for recognition.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Sclerosing polycystic adenoma",
    group: "Benign epithelial tumors",
    clinical: [
      "The majority (80%) arise in the parotid gland, with occasional sinonasal, submandibular, and lacrimal gland involvement",
      "SPA is a slow-growing, painless mass",
      "It is rarely multifocal",
      "SPA is rare",
      "The mean age at presentation is 40 years (range: 7–84 years), and there is a slight female predominance",
    ],
    criteria: [
      "Essential: mixtures of ductal and myoepithelial cells, with acinar cells containing large hypereosinophilic cytoplasmic granules",
      "Desirable: apocrine metaplasia and intraductal proliferation creating a resemblance to low-grade ductal carcinoma in situ; cystic appearance; PTEN loss by immunohistochemistry (in selected cases)",
    ],
    histology: [
      "Well-circumscribed, often encapsulated, multilobular lesion with variably sized ducts and cysts embedded in dense sclerotic collagenous stroma; focal lymphoid aggregates may be present.",
      "The hallmark is acinar cells with large, brightly eosinophilic cytoplasmic granules or globules.",
      "Ducts may be lined by flattened, columnar, foamy, vacuolated, or apocrine cells. Solid, cribriform, and micropapillary intraductal proliferations may occur.",
      "Cytologic atypia is variable. Intraductal proliferations may mimic low-grade ductal carcinoma; rare cases are associated with invasive carcinoma.",
      "SPA is characterized by a cystic and multilobular pattern, composed of variably sized and shaped ducts lined by flattened, cylindrical, or apocrine foamy or vacuolated epithelium, embedded in a sclerotic collagenous stroma with focal lymphoid aggregates",
      "SPA often display solid, cribriform, and micropapillary proliferations with variable degrees of cytological atypia, surrounded by myoepithelial cells, resembling intraductal carcinoma",
      "SPA is rarely associated with invasive carcinoma",
    ],
    ihc: [
      "SOX10 highlights ductules, myoepithelial cells, and acini.",
      "SMA, p40, and calponin highlight myoepithelial cells.",
      "AR and GCDFP-15 highlight apocrine cells.",
      "PTEN loss is frequent in ductal and acinar cells but is generally retained in myoepithelial cells.",
      "Each cellular component demonstrates its expected immunophenotype: SOX10 in ductules, myoepithelial cells, and acini; SMA, p40, and calponin in myoepithelial cells; and AR and GCDFP-15 in apocrine cells",
    ],
    differential: [
      "Apocrine intraductal carcinoma/salivary duct carcinoma: SPA may show intraductal cribriform or micropapillary proliferation, but the background mixture of sclerotic stroma, cysts, and distinctive granular acini supports SPA.",
      "Acinic cell carcinoma: evaluate the overall circumscribed, sclerosing, mixed ductal/acinar architecture and myoepithelial boundaries rather than relying on granular cells alone.",
      "Other cystic salivary lesions: the characteristic large eosinophilic acinar granules and mixed epithelial components are helpful.",
    ],
    molecular: [],
    pattern:
      "Multilobular sclerosing lesion with acinar, ductal, cystic, and apocrine components",
    pitfall:
      "Do not dismiss atypical intraductal proliferations. Carefully assess for an associated invasive carcinoma and sample the lesion extensively.",
    isBiphasicFocus: false,
  },
  {
    name: "Keratocystoma",
    group: "Benign epithelial tumors",
    clinical: [
      "All reported tumors arose in the parotid gland",
      "The tumor manifests as a painless, slowly growing parotid gland mass",
      "The patient age range is 8–49 years",
    ],
    criteria: [
      "Essential: multicystic structures containing keratinized lamellae; bland stratified squamous epithelial lining without a granular layer",
      "Desirable: the presence of sharply defined solid squamous cell islands",
    ],
    histology: [
      "Predominantly multicystic lesion containing keratotic lamellae; cysts are lined by stratified squamous epithelium with an orderly basal-to-surface maturation pattern.",
      "The surface is parakeratotic or orthokeratotic, usually without a granular cell layer.",
      "Focal bud-like protrusions and sharply demarcated solid squamous nests may occur in adjacent parotid parenchyma, often near an excretory duct. These nests should not automatically be interpreted as invasion.",
      "Tumor cells have bland, uniform nuclei and abundant eosinophilic cytoplasm. No mucous or oncocytic differentiation and no myxochondroid matrix are expected.",
      "Foreign-body reaction to keratin and dense lymphoid inflammation may be present.",
      "The tumor consists mainly of multiple cysts containing keratotic lamellae",
      "The stratification of the epithelium is oriented regularly from the outer basal to the inner keratotic cell layers",
      "Focally, the outer layer demonstrates bud-like protrusions, but no skin appendages are seen",
      "In some areas, solid squamous cell islands with sharply defined margins are surrounded by collagenous stroma",
      "The solid areas of squamous cell nests are localized partly within the parenchyma of the parotid gland adjacent to an excretory duct and should not be interpreted as invasive growth",
    ],
    ihc: ["S100, SMA, and calponin are negative."],
    differential: [
      "Squamous cell carcinoma: significant atypia, destructive invasion, and necrosis favor carcinoma.",
      "Mucoepidermoid carcinoma: mucous/intermediate cells and MAML2 rearrangement support MEC.",
      "Metaplastic Warthin tumor: residual bilayered oncocytic epithelium and lymphoid stroma with germinal centers support Warthin tumor.",
      "Necrotizing sialometaplasia: lobular architecture and ischemic necrosis are expected rather than a keratin-filled multicystic neoplasm.",
      "The differential diagnoses include primary and metastatic squamous cell carcinoma, mucoepidermoid carcinoma, metaplastic Warthin tumor, and necrotizing sialometaplasia",
      "The absence of necrosis, invasion, and cytological atypia in keratocystoma weighs against malignancy",
    ],
    molecular: [],
    pattern:
      "Multicystic parotid lesion lined by bland keratinizing squamous epithelium",
    pitfall:
      "Solid squamous nests adjacent to an excretory duct may be part of the lesion and are not, by themselves, proof of invasion. Assess cytology and the interface.",
    isBiphasicFocus: false,
  },
  {
    name: "Mucoepidermoid carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Approximately half of all MECs occur in major salivary glands, predominantly in the parotid gland, followed by the submandibular and sublingual glands",
      "Intraorally, the most frequent site is the palate, followed by the buccal mucosa and other sites",
      "MEC usually presents as a firm and fixed tumor, but occasional tumors may be largely cystic with only minor solid areas",
      "Tumors situated below an intact oral surface epithelium may have a bluish appearance and mimic vascular lesions or mucocoele",
      "MEC is reported as the most frequent salivary malignancy in North America, many European countries, and Brazil",
    ],
    criteria: [
      "Essential: salivary gland carcinoma with mucous, intermediate, and squamoid cells",
      "Desirable: MAML2 rearrangement (in selected cases)",
    ],
    histology: [
      "The defining population comprises mucous, intermediate, and epidermoid (squamoid) cells.",
      "Architecture ranges from predominantly cystic lesions with mucous-cell-lined spaces to solid tumors rich in intermediate and squamoid cells.",
      "Mucous cells have abundant mucinous cytoplasm and peripheral nuclei; intracellular mucin is mucicarmine-positive and PAS-positive with diastase resistance.",
      "Intermediate cells are often the most numerous.",
      "Extracellular mucin may be present.",
      "Significant keratinization is exceptional.",
      "Clear-cell, oncocytic, Warthin-like, sclerosing, spindle-cell, ciliated, and mucoacinar patterns are recognized.",
      "MEC is characterized by mucous (mucin-producing), intermediate, and squamoid cells",
      "Architectural configurations include cystic and solid areas where proportions of tumor cell types vary widely",
    ],
    ihc: [
      "p63 and/or p40 expression, particularly without S100/SOX10 staining, can support MEC.",
      "A subset of solid/trabecular MECs may be negative for both p63 and p40.",
      "Mucicarmine and PAS-D highlight mucous cells.",
      "Immunohistochemical p63 or p40 expression in the absence of S100/SOX10 staining may help to differentiate MEC from other salivary tumors; however, a subset of solid/trabecular MECs may be entirely negative for p63 and p40",
    ],
    differential: [
      "Mucous retention phenomenon / mucocele — A mucocele is a mucin extravasation or retention lesion, not an epithelial neoplasm. Look for mucin pools and histiocytes without a neoplastic mixture of mucous, intermediate, and squamoid cells. A cystic MEC may have only a small diagnostic epithelial component, so extensively sample the wall and any solid areas.",
      "Necrotizing sialometaplasia — Shows lobular necrosis and squamous metaplasia of ducts/acini while preserving the overall lobular architecture; it should not show a destructive infiltrative carcinoma composed of the characteristic MEC cell mixture.",
      "Sclerosing sialadenitis with mucous metaplasia — Ductal mucous metaplasia occurs in a background of chronic inflammation and fibrosis; evaluate the native glandular architecture and absence of a destructive neoplastic population.",
      "Pleomorphic adenoma — Look for chondromyxoid/fibrillary stroma and a mixed epithelial-myoepithelial population rather than mucous, intermediate, and squamoid cells in cystic and solid arrangements.",
      "Warthin tumor with squamous or oncocytic metaplasia — The background of lymphoid stroma and residual bilayered oncocytic epithelium supports Warthin tumor. Metaplastic squamous cells alone do not establish MEC; search for mucous and intermediate cells.",
      "Sclerosing polycystic adenoma — Usually retains a lobulated, sclerosing, polycystic architecture with acinar/ductal changes; it lacks the defining infiltrative mixture of MEC cell types.",
      "Secretory carcinoma — Usually has a monophasic population with vacuolated/granular cytoplasm and eosinophilic bubbly luminal secretions; S100, SOX10, and mammaglobin are positive, while p40/p63 are negative. MEC has mucous, intermediate, and squamoid cells and often p63/p40 expression.",
      "High-grade mimics — Poorly differentiated SCC shows overt squamous differentiation and keratinization without the characteristic mucous/intermediate cell mixture. Salivary duct carcinoma shows apocrine cytology, complex cribriform/solid or papillary-cystic architecture, and often comedonecrosis. Carcinoma ex PA requires a residual PA component or convincing history; metastatic carcinoma must be excluded clinically.",
      "The entities in the differential diagnosis of low-grade MEC include mucocoele, necrotizing sialometaplasia, sclerosing sialadenitis with mucous metaplasia, pleomorphic adenoma and Warthin tumor with oncocytic or squamous metaplasia, sclerosing polycystic adenoma, and secretory carcinoma",
      "High-grade MEC must be distinguished from carcinoma ex pleomorphic adenoma, poorly differentiated squamous cell carcinoma, adenosquamous carcinoma, salivary duct carcinoma, and metastatic carcinomas",
    ],
    molecular: [
      "Among salivary tumors, the CRTC1::MAML2 fusion gene is specific for MEC and useful in diagnostic workups",
      "A FISH result positive for MAML2 rearrangement should be validated by MAML2 PCR or next-generation sequencing",
    ],
    pattern: "Mucous + intermediate + squamoid cells; cystic-to-solid spectrum",
    pitfall:
      "Cystic, mucin-rich aspirates may contain few diagnostic tumor cells. Mucin alone is not sufficient to diagnose MEC; any salivary FNA yielding mucin should be considered atypical. MAML2 rearrangement is useful in selected cases; validate a positive FISH result with PCR or sequencing.",
    isBiphasicFocus: false,
  },
  {
    name: "Adenoid cystic carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Approximately 60% of AdCCs occur in the major salivary glands and 30% occur in the minor salivary glands",
      "The parotid, submandibular, and minor glands of the palate are the predominant sites",
      "Patients usually present with a swelling or a slow-growing mass",
      "Neural symptoms like pain, numbness, and paraesthesia are commonly reported",
      "The incidence of AdCC is 1–2 cases per 100 000 person-years",
    ],
    criteria: [
      "Essential: hyperchromatic, angulated nuclei; a mixture of tubular, cribriform, and solid patterns associated with a basophilic matrix and reduplicated basement membrane material",
      "Desirable: perineural invasion; demonstration of MYB or MYBL1 rearrangements (in selected cases)",
    ],
    histology: [
      "Biphasic ductal and myoepithelial neoplasm.",
      "Ductal cells have eosinophilic cytoplasm and uniform round nuclei; myoepithelial cells are basaloid with clear cytoplasm and angular hyperchromatic nuclei.",
      "Tubular areas contain true ducts with luminal and abluminal layers.",
      "Cribriform areas show nests with pseudocystic spaces containing hyaline or basophilic basement-membrane-like material.",
      "Solid areas consist of basaloid sheets without obvious ducts or cribriform spaces.",
      "Both true lumina and pseudocysts are important clues.",
      "Perineural invasion is characteristic but sampling-dependent.",
      "Any solid component is an adverse histologic feature; >30% solid growth has traditionally indicated more aggressive behavior.",
      "AdCC consists of two main cell types: ductal cells and myoepithelial cells",
      "Mitotic figures are infrequent",
      "AdCC shows three growth patterns: tubular, cribriform, and solid",
      "The tubular pattern consists of well-formed ducts and tubules lined with luminal ductal and abluminal myoepithelial cells",
      "Tubular areas contain well-formed ducts. Cribriform areas contain pseudocystic spaces filled with hyaline or basophilic matrix contiguous with the stroma; identifying both true glandular lumina and pseudolumina is highly useful.",
      "Perineural invasion is a characteristic clue but is sampling-dependent. A solid component, particularly when substantial, is associated with more aggressive behavior; high-grade transformation shows a pleomorphic, mitotically active component that may lose myoepithelial markers.",
    ],
    ihc: [
      "Luminal cells: CK7 and KIT/CD117.",
      "Abluminal cells: p63, p40, calponin, and SMA.",
      "Pancytokeratin is strong in ductal cells and weaker in myoepithelial cells.",
      "MYB overexpression is common but not sufficiently specific by itself.",
      "CK7 and KIT (CD117) are typically positive in ductal cells, whereas p63, p40, calponin, and α-SMA are positive in myoepithelial cells",
      "MYB protein overexpression is common in AdCC, but its diagnostic value is limited by its suboptimal specificity",
      "p63, p40, calponin, and α-SMA highlight the abluminal myoepithelial component.",
      "MYB protein overexpression is common but has suboptimal specificity; interpret with morphology and, when needed, molecular testing.",
    ],
    differential: [
      "Pleomorphic adenoma (PA) — PA usually has a circumscribed or pushing border and characteristic chondromyxoid/myxoid or fibrillary stroma. Ductal and myoepithelial cells may be present, but the angular hyperchromatic basaloid cells and basement-membrane-like pseudocysts of AdCC are not the defining pattern. Infiltration and perineural invasion favor AdCC.",
      "Polymorphous adenocarcinoma (conventional PmA) — PmA is usually a minor-gland tumor with cytologic uniformity but striking architectural diversity (single-file, fascicular, tubular, trabecular, and microcystic patterns). Its cells are generally bland with open chromatin; targetoid perineural growth may occur. AdCC more typically has angular hyperchromatic basaloid nuclei, a true biphasic ductal/abluminal population, and hyaline basement-membrane-like pseudocysts.",
      "Cribriform polymorphous adenocarcinoma (CASG) — CASG often shows multinodular growth, clear nuclei, glomeruloid and papillary structures, peripheral palisading, and clefting. Do not call a cribriform tumor AdCC on architecture alone; assess the cell population, nuclear quality, stromal material, and PRKD-family alteration when needed.",
      "Epithelial-myoepithelial carcinoma (EMC) — EMC has conspicuous, well-formed ducts with an inner eosinophilic luminal layer and an outer layer of larger clear myoepithelial cells. The outer cells are usually more abundant and cytologically clear than the abluminal cells of AdCC. AdCC more often shows compact basaloid nests and cribriform pseudocysts.",
      "Basal cell adenoma (BCA) / basal cell adenocarcinoma (BCAC) — These tumors show basaloid nests with peripheral palisading, often with paler central cells and ducts; membranous or hyaline material may be present. Cribriform BCA is a particularly important benign mimic. Look for a circumscribed border in BCA versus destructive infiltration, perineural/vascular invasion, or other unequivocal invasive features in BCAC. AdCC has characteristic true ducts plus pseudocysts and more angular hyperchromatic myoepithelial-type cells.",
      "Solid-pattern AdCC versus other basaloid tumors — Solid AdCC may lack recognizable cribriform or tubular structures and can be difficult on a limited sample. Search for focal conventional AdCC, basement-membrane-like matrix, ductal differentiation, and perineural invasion; use a compartment-specific panel (luminal CK7/KIT; abluminal p63/p40/calponin/SMA) and MYB/MYBL1 testing in unresolved cases.",
      "The main salivary gland tumors to be distinguished from AdCC include pleomorphic adenoma, polymorphous adenocarcinoma, epithelial-myoepithelial carcinoma, and basal cell adenoma/adenocarcinoma",
      "Because AdCC often shows mild cytological atypia and a cribriform pattern, its distinction from benign tumors with a cribriform pattern, especially the cribriform subtype of basal cell adenoma, is critical",
    ],
    molecular: [
      "Demonstration of MYB/MYBL1 rearrangements or gene fusions by FISH or other methods can help establish a diagnosis of AdCC",
      "MYB::NFIB is a key recurrent fusion; MYBL1 rearrangements/fusions or MYB amplification may occur in cases without the canonical fusion. Selected tumors also show alterations involving NOTCH, chromatin-remodeling, and growth-signaling pathways.",
    ],
    pattern: "Tubular / cribriform / solid basaloid tumor with pseudocysts",
    pitfall:
      "Cribriform architecture or hyaline globules alone do not establish AdCC. Look for true ducts plus pseudocysts, infiltrative growth, and the overall cytologic pattern.",
    cytology: [
      "Usually cellular, with cohesive sheets, tubular/complex fragments, or cribriform groups containing hard-edged stromal balls.",
      "Uniform basaloid cells have high N:C ratios, oval-to-angulated hyperchromatic nuclei, and usually limited atypia in conventional tumors.",
      "Romanowsky–Giemsa-type stains can highlight discrete spheres and branching tubules of magenta matrix. Solid-basaloid cases may be difficult to distinguish from other basaloid neoplasms on FNA.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Acinic cell carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "About 90–95% of cases arise in the parotid gland",
      "The remainder involve intraoral sites, the submandibular gland, and (exceptionally) the sinonasal tract",
      "Patients typically present with slow-growing, painless masses",
      "High-grade tumors may be rapidly growing and fixed to adjacent structures, with facial nerve paralysis",
      "Acinic cell carcinoma represents 10% of all salivary gland malignancies and as many as 18.7% of parotid carcinomas",
    ],
    criteria: [
      "Essential: a salivary gland carcinoma with serous acinar differentiation",
      "Desirable: nuclear staining for NR4A3 (NOR1) or NR4A2 (NURR1), or molecular demonstration of NR4A3 rearrangement (in selected cases)",
    ],
    histology: [
      "Architectures include solid, microcystic, follicular, and less commonly papillary-cystic patterns, sometimes with prominent lymphoid stroma.",
      "The most characteristic cells are serous acinar-type cells with basophilic, granular cytoplasm containing PAS-positive, diastase-resistant zymogen granules.",
      "Nuclei are small and often eccentrically placed; cell borders may be indistinct.",
      "Intercalated duct-like, vacuolated, oncocytic, clear, and nonspecific glandular cells may be admixed.",
      "High-grade transformation adds a high-grade adenocarcinoma or poorly differentiated component with nuclear enlargement, pleomorphism, necrosis, increased mitoses, and increased Ki-67.",
      "Neoplastic cells are heterogeneous with the most common cell type being the serous acinar cell which features PAS-positive, diastase-resistant basophilic cytoplasmic zymogen granules, with variable intercalated duct–type, nonspecific glandular, vacuolated, oncocytic, and (rarely) clear cells",
      "Cytoplasmic borders are poorly defined and nuclei are small and peripherally placed",
      "High-grade (HG) tumors exhibit, in addition to conventional areas, a component of high-grade adenocarcinoma (with variable cribriform, solid, trabecular growth patterns) or poorly differentiated/undifferentiated carcinoma",
      "Acinic cell carcinomas with high-grade transformation show nuclear enlargement and pleomorphism, coarse chromatin, necrosis, increased mitotic activity and Ki-67 index, and more frequent perineural and lymphovascular invasion",
      "Increased expression of cyclin-D1 and membranous β-catenin have been described",
    ],
    ihc: [
      "SOX10 and DOG1 are typically positive. p40/p63, mammaglobin, and S100 are generally negative (S100 may label intercalated cells).",
      "Nuclear NR4A3 (NOR1) is highly sensitive and specific in the reported series; NR4A2 is rarely positive.",
      "Nuclear staining for NR4A3 (NOR1) or NR4A2 (NURR1) have been identified in 98% and 2% of cases, respectively",
      "The sensitivity and specificity of immunohistochemistry for NR4A3 are 94.4% and 99%, respectively",
    ],
    differential: [
      "Secretory carcinoma — The key distinction is the nature of the secretory material. Acinic cell carcinoma has intracellular PAS-positive, diastase-resistant zymogen granules and serous acinar differentiation; secretory carcinoma has abundant luminal eosinophilic/bubbly secretions that are PAS-positive before and after diastase and Alcian blue-positive, but lacks true zymogen granules. DOG1 (often apical/luminal) and nuclear NR4A3 support acinic cell carcinoma; mammaglobin and S100 support secretory carcinoma.",
      "Warthin tumor — A prominent lymphoid background can be misleading. Warthin tumor has bilayered oncocytic epithelium lining cystic spaces with lymphoid stroma, rather than a neoplastic serous acinar population with zymogen granules.",
      "Metastatic carcinoma in an intraparotid lymph node — Consider a nodal location, residual lymphoid tissue, and clinical history; lymphoid stroma can accompany acinic cell carcinoma but does not by itself establish a primary salivary tumor.",
      "High-grade transformation — Identify conventional acinic cell carcinoma, if present, and look for abrupt or recognizable high-grade adenocarcinoma/poorly differentiated areas with pleomorphism, necrosis, brisk mitoses, and increased Ki-67.",
    ],
    molecular: [
      "Molecular pathology is typically not needed for diagnosis",
      "However, demonstrating NR4A subfamily rearrangements or positive immunohistochemistry for NR4A3 or NR4A2 may be confirmatory in challenging cases",
    ],
    pattern: "Serous acinar differentiation with zymogen granules",
    pitfall:
      "Do not confuse PAS-D-positive cytoplasmic zymogen granules with the luminal secretions of secretory carcinoma. DOG1 highlights apical luminal membranes in acinic cell carcinoma; NR4A3 nuclear staining is a useful confirmatory marker.",
    isBiphasicFocus: false,
  },
  {
    name: "Secretory carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "The most common site of occurrence is the parotid gland, followed by the oral cavity and submandibular gland",
      "In the oral cavity, the lip, soft palate, and buccal mucosa are the most commonly affected subsites",
      "SC most commonly presents as a painless, slowly growing mass",
      "SC with high-grade transformation is associated with an aggressive clinical behavior, a high propensity for cervical lymph node metastasis, a risk of distant metastasis, and a poor prognosis",
      "SC usually occurs in adults, with a mean patient age of 46.5 years (range: 10–86 years) and an equal sex distribution",
    ],
    criteria: [
      "Essential: a malignant salivary gland neoplasm of a single cell type with vacuolated, colloid-like secretory material; no zymogen cytoplasmic granules; immunohistochemical positivity for S100, SOX10, and mammaglobin; lack of immunohistochemical staining for p40 and/or p63",
      "Desirable: ETV6 or RET rearrangement demonstrated by FISH, RNA sequencing, or PCR (in selected cases)",
    ],
    histology: [
      "Usually well-circumscribed but unencapsulated and lobulated, with fibrous septa.",
      "Patterns include microcystic, tubular, follicular, solid, and papillary-cystic growth; macrocystic areas may occur.",
      "Tumor cells are relatively uniform, with round-to-oval vesicular nuclei, finely granular chromatin, distinct central nucleoli, and pale pink granular-to-vacuolated cytoplasm.",
      "Luminal secretions are abundant, eosinophilic to bubbly, and PAS-positive before and after diastase digestion as well as Alcian blue-positive.",
      "True zymogen granules are absent.",
      "Atypia and mitoses are usually limited; infiltrative growth and occasional perineural invasion can occur.",
      "The tumors have a lobulated growth pattern separated by fibrous septa and are composed of microcystic/solid, tubular, follicular, and papillary-cystic structures with distinctive luminal secretions",
      "It may have an infiltrative pattern with occasional perineural invasion and may show abundant fibrosclerotic stroma with prominent, thick, hyalinized septa",
      "Some SCs show a macrocystic morphology",
      "The tumor cells have low-grade vesicular round to oval nuclei with finely granular chromatin and distinctive, centrally located nucleoli",
      "The pale pink cytoplasm is granular to vacuolated",
    ],
    ihc: [
      "CK7, S100, SOX10, vimentin, and mammaglobin are typically positive. p63, p40, NR4A3, and DOG1 are negative.",
    ],
    differential: [
      "Acinic cell carcinoma — The most important mimic. Acinic cell carcinoma shows serous acinar cytoplasm with PAS-D-positive zymogen granules, often apical membranous DOG1, and nuclear NR4A3. Secretory carcinoma has vacuolated/granular cells and extracellular/luminal bubbly secretions, lacks zymogen granules, and is typically mammaglobin/S100/SOX10-positive and DOG1/NR4A3-negative.",
      "Mucoepidermoid carcinoma — MEC is heterogeneous and contains mucous, intermediate, and squamoid cells; secretory carcinoma is usually monophasic. Mucous cells in MEC contain intracellular mucin, whereas SC shows characteristic luminal secretions and a mammaglobin-positive phenotype.",
      "Microsecretory adenocarcinoma — MSA has monotonous intercalated duct-like cells, abundant basophilic (blue) secretions, fibromyxoid stroma, and a p63-positive/p40-negative/mammaglobin-negative phenotype. SC more often has abundant vacuolated cytoplasm, pink/bubbly secretions, and mammaglobin positivity.",
      "Other microcystic tumors — Correlate cytology and secretions with the full architecture; a microcystic pattern alone is not specific. ETV6 or RET fusion testing can resolve selected cases.",
      "In contrast to SC, acinic cell carcinomas demonstrate intense apical membranous staining for DOG1 around lumina and variable cytoplasmic positivity in most cases",
    ],
    molecular: [
      "Approximately 90% of SCs harbour a characteristic chromosomal rearrangement, t(12;15)(p13;q25), resulting in an ETV6::NTRK3 fusion",
      "A small subset of cases demonstrate divergent molecular findings, with alternate ETV6::RET, ETV6::MET, ETV6::MAML3, and VIM::RET gene fusions",
    ],
    pattern: "Monophasic vacuolated cells with eosinophilic luminal secretions",
    pitfall:
      "The pale vacuolated cytoplasm can resemble acinic cell carcinoma. Focus on the nature and location of secretions, absence of zymogen granules, DOG1/NR4A3 negativity, and mammaglobin positivity. ETV6 or RET fusion testing is useful in selected cases.",
    isBiphasicFocus: false,
  },
  {
    name: "Microsecretory adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Almost all MSAs have arisen in the oral cavity, with palate and buccal mucosa being the most frequently affected subsites",
      "A single case involved the parotid gland",
      "Patients present with a painless, slow-growing mass",
      "Fewer than 30 cases have been reported",
      "The mean patient age is 49.5 years (range: 17–83 years), and there is a slight female predominance",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with a microcystic-predominant growth pattern; bluish secretions; fibromyxoid stroma; monotonous tumor cells; positivity for S100 and p63 but not p40 or mammaglobin",
      "Desirable: SS18 rearrangement demonstrated by FISH, RNA sequencing, or PCR (in selected cases)",
    ],
    histology: [
      "A highly consistent pattern: microcystic-predominant architecture with occasional cribriform structures or cords; uniform intercalated duct-like cells with attenuated eosinophilic-to-clear cytoplasm; monotonous oval hyperchromatic nuclei with indistinct nucleoli; abundant basophilic luminal secretions; and variably cellular fibromyxoid stroma.",
      "Rounded borders may show subtle infiltration into skeletal muscle, fat, or minor salivary glands.",
      "Perineural invasion is rare, necrosis is absent, and mitotic activity is low.",
      "MSA has very consistent morphological features: (1) a microcystic-predominant growth pattern with occasional cribriform structures or cords",
      "(2) uniform intercalated duct-like tumor cells with attenuated eosinophilic to clear cytoplasm",
      "(3) monotonous oval hyperchromatic nuclei with indistinct nucleoli",
      "(4) abundant basophilic luminal secretions",
      "(5) a variably cellular fibromyxoid stroma",
    ],
    ihc: [
      "S100, SOX10, and p63 are positive. p40, mammaglobin, and calponin are negative; SMA may be focally positive.",
      "MSA has a consistent immunophenotype",
      "It is positive for S100, SOX10, and p63, and negative for p40, mammaglobin, and calponin",
      "Occasional cases are focally positive for SMA",
    ],
    differential: [
      "Secretory carcinoma — SC has more abundant granular/vacuolated cytoplasm and eosinophilic or pink bubbly luminal secretions, with mammaglobin positivity and usually ETV6::NTRK3 (or an alternate ETV6/RET-related fusion). MSA has monotonous intercalated duct-like cells, basophilic/blue secretions, fibromyxoid stroma, p63 positivity, and is typically p40- and mammaglobin-negative.",
      "Polymorphous adenocarcinoma — PmA shows much greater architectural diversity (single-file, fascicular, tubular, trabecular, and targetoid perineural patterns) and often targetoid perineural invasion; MSA is predominantly microcystic with a more uniform cell population and basophilic luminal material. PRKD alterations support PmA; MEF2C::SS18 supports MSA.",
      "Adenoid cystic carcinoma — AdCC is biphasic, with ductal and basaloid myoepithelial cells, basement-membrane-like pseudocysts, and typically more extensive infiltrative growth/perineural invasion. MSA is more monotonous and lacks the characteristic biphasic AdCC pattern.",
      "Sclerosing microcystic adenocarcinoma — This is less cellular, has more abundant sclerotic/fibrous stroma and cord-like growth, and may show a subtle biphasic population; MSA is microcystic-predominant with basophilic secretions and monotonous cells.",
      "Secretory carcinoma has more abundant cytoplasm, pink secretions, mammaglobin positivity, and harbours different fusions (usually ETV6::NTRK3)",
      "Polymorphous adenocarcinoma shows more architectural diversity and different genetic alterations (mutations or rearrangements of PRKD1, PRKD2, or PRKD3)",
      "Adenoid cystic carcinoma has two cell populations, is far more infiltrative, and harbours rearrangements of MYB, MYBL1, and/or NFIB",
      "Sclerosing microcystic adenocarcinoma is less cellular, with more stroma, more cord-like growth, and a subtly biphasic tumor population",
    ],
    molecular: [
      "MEF2C::SS18 fusion can be demonstrated by RNA sequencing, RT-PCR, or SS18 break-apart FISH",
    ],
    pattern:
      "Microcystic-predominant intercalated duct-like tumor with blue secretions",
    pitfall:
      "The p63-positive/p40-negative phenotype is useful. Do not mistake MSA for secretory carcinoma solely because both are microcystic and S100/SOX10-positive. MEF2C::SS18 fusion supports MSA.",
    isBiphasicFocus: false,
  },
  {
    name: "Polymorphous adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "More than 95% of PmAs involve minor salivary glands or seromucous glands of the upper aerodigestive tract",
      "The palate is the most common site",
      "PmA typically presents as a slowly growing, painless mass of variable duration",
      "Very few patients with PmA present with lymph node metastasis, but cervical lymph node metastases are common in CASG",
      "PmA is the second most common intraoral salivary gland carcinoma, with an incidence rate of 0.051 cases per 100 000 person-years",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with cytological uniformity; architectural diversity; infiltrative border",
      "Desirable: immunopositivity for S100; PRKD1 hotspot mutation (for PmA) or translocation of PRKD1, PRKD2, or PRKD3 (for CASG) in selected cases",
    ],
    histology: [
      "Conventional PmA is an unencapsulated infiltrative tumor composed of uniform cells with scant cytoplasm, bland oval nuclei, open chromatin, occasional small nucleoli, and sometimes nuclear grooves.",
      "Architecture is diverse: single-file, fascicular, trabecular, tubular, microcystic, solid, and occasionally papillary-cystic.",
      "Stroma may be myxoid, mucinous, or hyalinized.",
      "Perineural invasion is frequent and often targetoid; perivascular targetoid growth may also occur.",
      "Cribriform PmA (cribriform adenocarcinoma of salivary glands, CASG) shows multinodular growth, solid/cribriform/microcystic patterns, optically clear nuclei, glomeruloid and papillary structures, peripheral palisading, and clefting.",
      "The conventional subtype of PmA is typically an unencapsulated submucosal mass",
      "The tumors are characterized by cytological uniformity, histological diversity, and an infiltrative growth pattern",
      "Streaming or eddy-like formations can be present at the peripheral boundary of the tumor",
      "Foci of oncocytic, clear, squamous, apocrine, or mucous cells and microcalcifications can be observed",
    ],
    ihc: [
      "Usually a single tumor-cell population positive for cytokeratins (including CK7) and S100. p63 is often positive, whereas p40 is typically negative.",
      "Mammaglobin and KIT may also be positive.",
      "PmA is immunoreactive as a single population for cytokeratins (e.g",
      "CK7, in 100% of cases) and S100 (97–100%)",
      "Staining for p63 is reported in 78–100% of cases, whereas p40 is typically negative; this pattern is helpful in the differential diagnosis",
      "Other positive immunomarkers include mammaglobin (67–100%), KIT (CD117) (60%), CEA (54%), GFAP (15%), MSA (13%), and EMA (12%)",
    ],
    differential: [
      "Adenoid cystic carcinoma — AdCC typically has a biphasic ductal/abluminal population, angular hyperchromatic basaloid nuclei, and cribriform pseudocysts containing basement-membrane-like material. PmA is cytologically uniform with open chromatin and a broad range of patterns; targetoid perineural growth is common.",
      "Pleomorphic adenoma — PA generally has chondromyxoid or fibrillary stroma and a circumscribed/pushing interface. PmA is infiltrative, often with single-file or targetoid growth and without the characteristic chondromyxoid matrix.",
      "Secretory carcinoma — SC usually has more abundant vacuolated cytoplasm and eosinophilic/bubbly secretions, with mammaglobin positivity. PmA has scant cytoplasm, open chromatin, architectural diversity, and typically p40 negativity despite p63 positivity.",
      "Microsecretory adenocarcinoma — MSA is microcystic-predominant with basophilic secretions and fibromyxoid stroma; it is typically p63-positive/p40-negative and mammaglobin-negative. PmA has a wider range of architectures and often targetoid perineural growth.",
      "Cribriform adenocarcinoma of salivary glands (CASG) — Recognize the cribriform subtype by multinodular growth, clear nuclei, glomeruloid/papillary structures, peripheral palisading, and clefting. Cervical nodal metastases are more common than in conventional PmA; PRKD rearrangement is frequent.",
      "Metastatic papillary thyroid carcinoma — In a limited cytology sample, nuclear grooves and pseudopapillary fragments may be misleading. Correlate with the clinical/radiologic thyroid evaluation and use a directed thyroid-lineage panel when indicated.",
    ],
    molecular: [
      "Detection of a PRKD1 p.E710D hotspot mutation or translocation of PRKD1, PRKD2, or PRKD3 is highly specific for the diagnosis of PmA",
    ],
    pattern:
      "Cytologic uniformity + architectural diversity + infiltrative growth",
    pitfall:
      "Do not equate bland cytology with benignity. The combination of cytologic uniformity, architectural diversity, infiltrative edges, and targetoid perineural growth is highly characteristic. PRKD1 hotspot mutation or PRKD1/2/3 rearrangement can support diagnosis.",
    isBiphasicFocus: false,
  },
  {
    name: "Hyalinizing clear cell carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most HCCCs arise from oral minor salivary glands in locations including the soft palate, tongue, floor of the mouth, lips, buccal mucosa, retromolar trigone, and gingival sites",
      "A minority develop in other sites including the oropharynx, nasopharynx, parotid, sinonasal tract, larynx, and hypopharynx",
      "Most HCCCs present with localized swelling",
      "The overlying mucosa may be ulcerated",
      "HCCC has a slight female predominance",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with nests, cords, and trabeculae of clear and/or eosinophilic cells in a hyalinized stroma",
      "Desirable: EWSR1 fusion (in selected cases)",
    ],
    histology: [
      "Composed of clear and/or eosinophilic cells arranged in nests, cords, and trabeculae; ducts and small cysts may be present.",
      "Squamous differentiation and mucocytes are common.",
      "Tumors are unencapsulated and infiltrate surrounding tissue, especially skeletal muscle; oral tumors may connect with surface epithelium and show pagetoid spread.",
      "Perineural invasion occurs in about half of cases.",
      "Stroma ranges from dense basement-membrane-like hyalinization to desmoplastic or fibrocellular areas; juxtaposition of these stromal types is a useful clue.",
      "Clear cells are PAS-positive and diastase-sensitive.",
      "HCCC is composed of clear or eosinophilic cells",
      "Despite its name, tumors composed entirely of clear cells are rare, and some completely lack clear cells",
      "The tumor is arranged in nests, cords, and trabeculae",
      "Ducts and small cysts may be seen",
      "Increased mitoses, marked atypia, and necrosis are rare; when seen, they represent high-grade transformation",
    ],
    ihc: [
      "Epithelial markers include CK7, CK19, CK14, CAM5.2, and EMA. p63, p40, and CK5/6 are usually positive.",
      "Myoepithelial markers (S100, MSA, SMA, calponin) are negative. p16 may be positive in oropharyngeal tumors, but transcriptionally active HPV is absent.",
      "The tumor cells express epithelial markers including CK7, CK19, CK14, CAM5.2, and EMA",
      "They also usually express p63, p40, and CK5/6, supporting squamous differentiation",
      "Myoepithelial markers including S100, MSA, SMA, and calponin are negative",
      "Some tumors express p16, which can be a diagnostic dilemma when the tumor arises in the oropharynx; however they lack transcriptionally active HPV",
    ],
    differential: [
      "Clear cell mucoepidermoid carcinoma — Search for mucous, intermediate, and squamoid cells and mucicarmine-positive intracellular mucin; HCCC is typically a monophasic clear/eosinophilic cell tumor with hyalinized stroma and squamous differentiation.",
      "Epithelial-myoepithelial carcinoma — EMC has a conspicuous biphasic duct with inner eosinophilic luminal cells and an outer clear myoepithelial layer; HCCC lacks this organized ductal double layer and is negative for myoepithelial markers.",
      "Myoepithelial carcinoma / myoepithelioma — These show myoepithelial differentiation and commonly express S100, SOX10, and/or muscle markers; HCCC typically expresses p63/p40/CK5/6 but lacks S100, SMA, and calponin.",
      "Metastatic clear cell carcinoma (especially renal) — Correlate with history and imaging; a directed renal-lineage panel is appropriate when clinically indicated.",
      "Clear cell odontogenic carcinoma — Consider a primary intraosseous jaw lesion; it is morphologically and genetically related to HCCC, so anatomic origin is essential.",
      "The entities include clear cell mucoepidermoid carcinoma, epithelial-myoepithelial carcinoma, myoepithelial carcinoma, oncocytoma, myoepithelioma, and metastatic clear cell carcinoma, with distinction sometimes requiring molecular studies",
    ],
    molecular: [
      "Demonstration of an EWSR1 fusion gene is helpful in selected cases",
    ],
    pattern: "Clear/eosinophilic nests and cords in hyalinized stroma",
    pitfall:
      "Despite the name, tumors composed entirely of clear cells are uncommon. Do not infer HPV-driven carcinoma from p16 positivity alone. EWSR1::ATF1 is the typical fusion; EWSR1::CREM has also been described.",
    isBiphasicFocus: false,
  },
  {
    name: "Basal cell adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most BCACs occur in the parotid gland (> 90%)",
      "BCAC usually presents as a slow-growing nodule in the parotid gland",
      "Patients with syndromic BCAC may also have multiple skin adnexal tumors",
      "BCAC accounts for < 3% of malignant salivary tumors",
      "Most affected patients are in their sixth or seventh decade of life",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with invasive growth; basaloid morphology; peripheral palisading with paler inner cells and ducts; dual population immunophenotype",
    ],
    histology: [
      "Tubulotrabecular, membranous, or solid growth, with membranous and solid patterns common.",
      "Nests show peripheral palisading of dark basaloid cells, paler inner cells, and centrally located ducts.",
      "Squamous and sebaceous elements may occur.",
      "Invasion is the defining distinction from basal cell adenoma; perineural and vascular invasion are reported.",
      "Anaplasia is uncommon.",
      "Nuclei are vesicular",
      "About 25% show perineural and vascular invasion; anaplasia is rare",
      "Often unencapsulated and infiltrative; tubulotrabecular, membranous, or solid patterns may be present.",
      "Perineural and vascular invasion are reported. Cytologic atypia may be modest; invasion is the decisive feature.",
    ],
    ihc: [
      "Epithelial and myoepithelial markers demonstrate the dual cell composition.",
      "Nuclear beta-catenin is present in a subset.",
      "Nuclear β-catenin is present in a subset; this does not distinguish benign from malignant behavior.",
    ],
    differential: [
      "Basal cell adenoma (BCA) — The key distinction is invasion. BCA is generally circumscribed/encapsulated and lacks destructive infiltration. BCAC shows infiltrative growth; perineural or vascular invasion and tumor necrosis support malignancy. Increased mitotic activity (particularly >4 mitoses/2 mm² in some diagnostic criteria) is concerning.",
      "Adenoid cystic carcinoma — AdCC more typically has angular hyperchromatic basaloid cells, true ducts plus basement-membrane-like pseudocysts, and often perineural invasion. BCAC commonly shows peripheral palisading, paler inner cells, and ducts; squamous or sebaceous differentiation may be present.",
      "Cribriform BCA versus cribriform AdCC — Do not diagnose AdCC from cribriform architecture alone. Evaluate the tumor border, cell morphology, true lumina versus pseudocysts, stromal material, and invasion. A circumscribed cribriform lesion may be BCA.",
      "Pleomorphic adenoma — PA has characteristic chondromyxoid/fibrillary stroma and a mixed epithelial-myoepithelial phenotype rather than a predominantly basaloid tumor with peripheral palisading.",
      "The presence of peripheral palisading and focal squamous metaplasia can help to separate BCAC from adenoid cystic carcinoma",
      "BCAC is distinguished from BCA by infiltration, necrosis, and mitoses (especially when > 4 mitoses/2 mm²)",
    ],
    molecular: [
      "A subset shows CYLD or CTNNB1 alterations. No defining molecular alteration has been established for BCAC.",
    ],
    pattern:
      "Infiltrative basaloid tumor with peripheral palisading and ductal differentiation",
    pitfall:
      "Do not diagnose BCAC from cytologic atypia or β-catenin alone. Establish infiltrative growth, perineural invasion, or vascular invasion.",
    cytology: [
      "Can closely resemble BCA, with basaloid fragments and hyaline material.",
      "Squamoid or sebaceous features may provide a clue, but FNA generally cannot demonstrate destructive invasion or reliably separate BCA from BCAC.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Intraductal carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "IDC arises predominantly in the parotid gland, with uncommon involvement of the intraparotid lymph nodes, submandibular gland, and oral cavity",
      "Patients present with longstanding painless swellings",
      "IDCs are indolent neoplasms, but rare cases of invasive carcinoma ex IDC have been reported",
      "IDC is rare",
      "It affects adults, with a wide age range (25–93 years) and an even sex distribution",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with rounded lobules of ductal neoplastic cells; a surrounding rim of myoepithelial cells; ductal cells positive for S100, SOX10, and mammaglobin and/or AR",
      "Desirable: a cystic component; identification of RET fusion (for intercalated duct, oncocytic, or mixed IDC), BRAF p.V600E mutations (for oncocytic IDC), or PI3K pathway mutations (for apocrine IDC) in selected cases",
    ],
    histology: [
      "Rounded cysts and lobules contain variable solid, cribriform, micropapillary, or Roman-bridge-like ductal proliferations, surrounded by a continuous flattened myoepithelial layer.",
      "Intercalated duct type has small amphophilic-to-eosinophilic cells with oval nuclei.",
      "Apocrine type has large cells with bubbly eosinophilic cytoplasm, apical snouts, and decapitation secretion.",
      "Oncocytic type has abundant granular eosinophilic cytoplasm and round nuclei with prominent nucleoli.",
      "Mixed tumors combine patterns.",
      "Intercalated duct and oncocytic types are generally low grade; apocrine components may be low or high grade.",
      "Invasive carcinoma is indicated by loss of the peripheral myoepithelial layer.",
      "The ductal cells vary with each subtype (see #25851Table 4.03)",
    ],
    ihc: [
      "Intercalated duct and oncocytic ductal cells: S100, SOX10, and mammaglobin positive; AR and GCDFP-15 negative.",
      "Apocrine IDC shows the reciprocal apocrine profile.",
      "Myoepithelial rim: p40/p63, CK14, SMA, and calponin positive.",
      "Mixed IDC shows mixed immunoprofiles of the components present",
    ],
    differential: [
      "Carcinoma ex pleomorphic adenoma — Look for residual pleomorphic adenoma with chondromyxoid stroma and characteristic ductal/myoepithelial components; this background is not a feature of a pure IDC.",
      "Sclerosing polycystic adenoma — Look for its characteristic sclerosing/polyclonal acinar and ductal background rather than a discrete intraductal neoplastic proliferation.",
      "Cystadenoma — Cystadenoma lacks the fenestrated/cribriform ductal proliferation and complete surrounding myoepithelial layer characteristic of IDC.",
      "Mucoepidermoid carcinoma, secretory carcinoma, and salivary duct carcinoma — These do not show a continuous circumferential myoepithelial layer around the neoplastic ducts.",
      "Epithelial-myoepithelial carcinoma — EMC has larger, more conspicuous outer myoepithelial cells and an invasive biphasic ductal pattern; in IDC the myoepithelial rim is flattened and confines the intraductal proliferation.",
      "Invasive carcinoma arising in IDC — Loss of the peripheral myoepithelial layer with stromal invasion identifies an invasive component; assess each focus separately.",
      "Intraductal proliferations seen in carcinoma ex pleomorphic adenoma and sclerosing polycystic adenoma are distinguished by their background elements (chondromyxoid stroma and acinar cells, respectively)",
    ],
    molecular: [
      "Demonstration of molecular alteration can assist in diagnosis",
      "Routine break-apart FISH is often falsely negative in IDC with NCOA4::RET, which is a tight inversion due to an intrachromosomal rearrangement",
    ],
    pattern: "Ductal proliferation enclosed by a continuous myoepithelial rim",
    pitfall:
      "The continuous myoepithelial layer is the key feature supporting intraductal status. Carefully examine the entire lesion for focal invasion. Routine break-apart FISH may be falsely negative for NCOA4::RET because of its intrachromosomal inversion.",
    isBiphasicFocus: false,
  },
  {
    name: "Salivary duct carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most tumors involve major salivary glands",
      "SDC presents as a rapidly growing tumor, with facial nerve palsy, pain, and cervical lymphadenopathy",
      "If arising from pleomorphic adenoma, a rapid increase in size of a longstanding pre-existing mass is common",
      "SDC has a distinct male predilection and a peak incidence in the fifth to seventh decades of life",
    ],
    criteria: [
      "Essential: a high-grade carcinoma, most typically with apocrine features",
      "Desirable: AR expression",
    ],
    histology: [
      "Complex solid, cribriform, and papillary-cystic architecture with frequent comedonecrosis.",
      "Cells have large pleomorphic nuclei, coarse chromatin, prominent nucleoli, and abundant eosinophilic, often apocrine cytoplasm.",
      "Lymphovascular and perineural invasion are common.",
      "A residual or hyalinized pleomorphic adenoma component may be present.",
      "Variants include sarcomatoid, mucin-rich, micropapillary, basal-like, and oncocytic patterns.",
      "Micropapillary SDC shows small nests without fibrovascular cores, retraction spaces, and an inside-out EMA pattern.",
      "Rarely, SDC may be purely in situ",
      "Subtypes The sarcomatoid subtype of SDC contains areas of highly atypical spindle cells, occasionally with foci of heterologous differentiation (e.g. osteoid production)",
    ],
    ihc: [
      "AR is positive in about 90%; strong diffuse ERBB2/HER2 immunoreactivity occurs in about one third.",
      "CK7 is consistently positive; S100 and SOX10 are negative. p63 may highlight basal/myoepithelial cells around an intraductal component.",
      "AR is expressed in about 90% of SDCs, indicative of an apocrine immunophenotype",
      "Diffuse and strong immunoreactivity for ERBB2 is identified in about one third of SDCs",
      "CK7 is consistently positive, whereas S100 and SOX10 are negative",
      "Staining for p63 may help to identify the intraductal component by highlighting basal/myoepithelial cells surrounding neoplastic cells",
    ],
    differential: [
      "Carcinoma ex pleomorphic adenoma — Search for residual PA, including hyalinized/chondromyxoid nodules and PLAG1/HMGA2-associated background. SDC may arise in PA, but the high-grade apocrine carcinoma component should be recognized separately.",
      "High-grade mucoepidermoid carcinoma — MEC should contain at least focal mucous and intermediate cells; extensive keratinization favors SCC. SDC more often shows apocrine cytoplasm, marked pleomorphism, complex cribriform/papillary-cystic growth, and comedonecrosis.",
      "Adenoid cystic carcinoma with high-grade transformation — Conventional AdCC may be present at the periphery or in a separate component; the high-grade transformed area loses myoepithelial marker expression. Look for residual classic cribriform/tubular AdCC.",
      "Metastatic breast carcinoma — SDC resembles apocrine breast carcinoma morphologically and immunophenotypically. Clinical history and imaging are essential; no single marker establishes salivary origin.",
      "Metastatic cutaneous SCC or other carcinoma — Exclude a non-salivary primary based on clinical history, examination, and imaging, especially for parotid tumors.",
      "The differential diagnosis includes other salivary carcinomas with high-grade transformation",
    ],
    molecular: [
      "Because systemic therapies targeting AR, ERRB2 amplification, the PI3K pathway (including PIK3CA mutations and PTEN loss), and BRAF p.V600E are being investigated, molecular analysis may be warranted",
    ],
    pattern:
      "High-grade apocrine carcinoma with cribriform/comedonecrotic architecture",
    pitfall:
      "A rapidly enlarging mass in a longstanding PA is a clinical clue. Do not overlook comedonecrosis, marked cytologic atypia, and infiltrative growth. AR/HER2 testing has therapeutic relevance but does not replace morphologic classification.",
    isBiphasicFocus: false,
  },
  {
    name: "Myoepithelial carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most tumors occur in the parotid gland, followed by the palate and the submandibular gland",
      "Patients often present with a painless mass, sometimes with recent rapid growth",
      "MECA is underrecognized",
      "It may present at any age and has no sex predilection",
    ],
    criteria: [
      "Essential: a salivary gland malignancy showing nearly exclusively myoepithelial differentiation; invasive growth",
      "Desirable: a zonal pattern with a hypercellular periphery and a hypocellular center",
    ],
    histology: [
      "May arise de novo or in pleomorphic adenoma.",
      "Cells may be spindle, epithelioid, plasmacytoid, vacuolated, oncocytic, or clear, in solid, trabecular, or reticular patterns.",
      "Stroma may be myxoid, myxochondroid, or hyalinized.",
      "A uniform myoepithelial proliferation with multinodular architecture and transition from peripheral hypercellular zones to central hypocellular areas is characteristic and helps distinguish it from pleomorphic adenoma.",
      "Focal duct-like or squamous differentiation may occur.",
      "MECA may arise de novo or within a pre-existing PA and is the second most common histological subtype of carcinoma ex PA",
      "The uniform cellular myoepithelial proliferation with the multinodular pattern and the transition from peripheral hypercellular zones to central hypocellular areas are characteristic and help to differentiate MECA from PA",
      "The presence of PA and tumor necrosis correlates with a worse outcome",
    ],
    ihc: [
      "Cytokeratins, SOX10, S100, and myoepithelial markers including SMA, calponin, and p63/p40 are expressed.",
    ],
    differential: [
      "Myoepithelioma — A circumscribed lesion without destructive infiltration supports myoepithelioma; myoepithelial carcinoma requires unequivocal invasion and/or malignant cytologic features in the appropriate context.",
      "Pleomorphic adenoma — PA shows chondromyxoid/fibrillary stroma and a mixed ductal/myoepithelial population. Myoepithelial carcinoma may show myxoid or hyalinized stroma but is infiltrative and may show plasmacytoid, epithelioid, spindle, or clear cells.",
      "Epithelial-myoepithelial carcinoma — EMC has a recognizable biphasic duct with inner ductal cells and outer clear myoepithelial cells. Myoepithelial carcinoma is often predominantly or entirely myoepithelial without the orderly ductal double layer.",
      "Hyalinizing clear cell carcinoma — HCCC is typically p63/p40/CK5/6-positive but S100/SMA/calponin-negative and often has EWSR1 rearrangement; myoepithelial carcinoma usually expresses one or more myoepithelial markers.",
      "Metastatic melanoma or clear cell carcinoma — Use clinical history and a directed lineage panel when morphology is clear-cell or epithelioid and epithelial differentiation is uncertain.",
      "MECA is often cytologically bland and may therefore be underrecognized as malignant and misclassified as a myoepithelial-rich PA",
    ],
    molecular: [],
    pattern:
      "Infiltrative myoepithelial proliferation with multinodular architecture",
    pitfall:
      "Myoepithelial carcinoma can be intracapsular or minimally invasive in the setting of PA and still show clinically significant behavior. Necrosis and an associated PA component are adverse features.",
    isBiphasicFocus: false,
  },
  {
    name: "Epithelial-myoepithelial carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "The majority of EMCs develop in the parotid gland; the remainder affect the other major or minor salivary glands, sinonasal tract, and bronchus",
      "EMC usually presents as a slow-growing, painless mass",
      "Lymphadenopathy is rare",
      "EMC is an uncommon neoplasm, accounting for 1% of all salivary gland tumors",
      "It mostly occurs in the sixth and seventh decades of life, with a slight female predilection",
    ],
    criteria: [
      "Essential: a salivary gland malignancy, usually with multinodular invasive growth; at least partly with a dual arrangement of inner ductal cells and outer prominent, usually clear, myoepithelial cells",
    ],
    histology: [
      "Usually multinodular and invasive.",
      "The hallmark is a biphasic arrangement of inner luminal eosinophilic ductal cells and outer abluminal, often clear, myoepithelial cells.",
      "The outer component may be a single layer, multilayered, or solid.",
      "Nuclear atypia is usually mild to moderate.",
      "Patterns include cribriform, basaloid, sebaceous, apocrine/oncocytic, and double-clear appearances; squamous differentiation may occur.",
      "High-grade transformation is rare.",
      "EMC generally exhibits multinodular invasive growth",
      "The myoepithelial component may be single-layered, multilayered, or solid. Clear cells are common, but cribriform, basaloid, sebaceous, apocrine/oncocytic, double-clear, and squamous patterns can occur.",
      "Nuclear atypia is often mild to moderate. High-grade transformation is rare.",
    ],
    ihc: [
      "Luminal cells: CK7.",
      "Abluminal cells: SMA, calponin, and p63/p40.",
      "RAS p.Q61R staining is reported in a subset.",
      "The luminal cells are positive for CK7, whereas abluminal cells are usually positive for SMA, calponin, and p63/p40",
      "Diffuse and membranous/cytoplasmic RAS p.Q61R expression is observed in 65% of EMCs",
      "RAS p.Q61R immunoreactivity has been reported in a substantial subset, but it is not a substitute for morphology or sequencing.",
    ],
    differential: [
      "Adenoid cystic carcinoma — AdCC has compact basaloid abluminal cells with angular hyperchromatic nuclei and cribriform pseudocysts containing basement-membrane-like material. EMC shows conspicuous ducts with an inner eosinophilic luminal layer and a thick outer layer of clear myoepithelial cells.",
      "Myoepithelial carcinoma — Myoepithelial carcinoma lacks the orderly, repeated inner ductal/outer myoepithelial configuration and is often predominantly myoepithelial.",
      "Pleomorphic adenoma — PA is usually circumscribed and has characteristic chondromyxoid/fibrillary stroma; EMC is infiltrative and has a more consistently organized biphasic ductal pattern.",
      "Basal cell adenoma/adenocarcinoma — These are basaloid tumors with peripheral palisading and may show ducts, but the typical broad clear-cell outer myoepithelial layer of EMC is a key distinction. Assess invasion to separate adenoma from adenocarcinoma.",
      "The differential diagnosis includes other salivary gland tumors with biphasic and/or clear cell morphology, such as adenoid cystic carcinoma, basal cell adenocarcinoma, pleomorphic adenoma, myoepithelial carcinoma, and clear cell carcinoma",
    ],
    molecular: [
      "Assessment of HRAS mutations is useful for discriminating EMC from mimics",
      "HRAS mutations, commonly involving codon 61, occur in a significant subset and can help distinguish EMC from mimics.",
    ],
    pattern:
      "Biphasic ducts with inner luminal and outer clear myoepithelial cells",
    pitfall:
      "Do not call a tumor EMC merely because it is biphasic. Demonstrate the characteristic inner ductal/outer myoepithelial tubular arrangement and assess invasion.",
    cytology: [
      "Classically shows three-dimensional clusters with dual epithelial and myoepithelial populations.",
      "The two populations may be less obvious in scant or crushed samples; correlate with the tubular biphasic pattern in tissue.",
    ],
    isBiphasicFocus: true,
  },
  {
    name: "Mucinous adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "MA is most common in intraoral minor salivary glands",
      "Most patients have painless masses or swellings",
      "Nodal metastases are occasionally seen at presentation",
      "MA has a peak incidence in the eighth decade of life and a relatively equal sex distribution",
    ],
    criteria: [
      "Essential: a salivary gland malignancy with abundant intracellular or extracellular mucin; CK7+, CK20−; no features of other mucin-producing salivary gland neoplasms",
      "Desirable: AKT1 p.E17K mutation (in selected cases)",
    ],
    histology: [
      "Abundant mucin occurs as goblet-like vacuoles, apical caps, foveolar-type droplets, or extracellular stromal pools.",
      "Patterns include papillary, colloid, and signet-ring; mixed patterns are common.",
      "Papillary fronds often project into cystic spaces.",
      "In the colloid pattern, tumor nests are suspended in pools of mucin.",
      "Discohesive signet-ring cells are uncommon.",
      "Cytologic atypia varies.",
      "MA is defined by abundant intracellular and/or extracellular mucin production in multiple forms, including goblet cell–like vacuoles, apical caps, foveolar-type cytoplasmic droplets, or stromal pools",
      "Tumors show variable papillary, colloid, or signet-ring architecture, with 40% displaying mixed patterns",
    ],
    ihc: [
      "CK7 positive; CK20, CDX2, p63, p40, TTF1, S100, calponin, SMA, and AR negative.",
      "AKT1 p.E17K may support the diagnosis.",
    ],
    differential: [
      "Mucoepidermoid carcinoma — MEC contains mucous, intermediate, and squamoid cells, often with cystic and solid components. Mucinous adenocarcinoma is dominated by extensive extracellular mucin pools containing floating tumor cells; look for absence of a defining MEC cell mixture.",
      "Metastatic mucinous adenocarcinoma — Exclude gastrointestinal, breast, lung, and other mucinous primaries with clinical history, imaging, and site-directed immunohistochemistry. A salivary location alone does not prove primary origin.",
      "Mucin-producing adenocarcinoma NOS — If the tumor has significant mucinous differentiation but does not meet criteria for a defined entity, classify only after excluding MEC and metastasis.",
      "To diagnose MA, other mucin-producing salivary gland carcinomas must be excluded, including mucin-rich mucoepidermoid carcinoma (epidermoid/intermediate cells; p63/p40+), mucinous and rhabdoid variants of salivary duct carcinoma (apocrine cytology; AR+), and the mucinous/secretory pattern of myoepithelial carcinoma (nested/corded pattern; S100, calponin, or SMA+)",
      "Metastasis from gastrointestinal, pancreaticobiliary, or lung adenocarcinomas should be ruled out clinically",
    ],
    molecular: [
      "The identification of AKT1 p.E17K mutation can support the diagnosis",
    ],
    pattern:
      "Prominent intracellular and/or extracellular mucin with papillary/colloid patterns",
    pitfall:
      "Do not classify a mucin-producing tumor as primary salivary MA until other salivary carcinoma types and metastatic adenocarcinoma have been excluded. Colloid and signet-ring predominant patterns are associated with recurrence/metastasis.",
    isBiphasicFocus: false,
  },
  {
    name: "Sclerosing microcystic adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "SMA arises from intraoral minor salivary glands in sites including the tongue, lip mucosa, floor of the mouth, and buccal mucosa",
      "A single case was reported in the nasopharynx",
      "Patients most commonly present with a painless mass or swelling; less common symptoms include dysphagia, numbness, and diplopia",
      "SMA is more common in women than men and occurs from the fifth to the eighth decades of life (mean age: 56 years)",
    ],
    criteria: [
      "Essential: an infiltrative low-grade adenocarcinoma embedded in a dense sclerotic stroma; a biphasic cell population with an attenuated myoepithelial cell layer",
      "Desirable: perineural invasion",
    ],
    histology: [
      "Deeply infiltrative ducts/tubules, strands/cords, nests, and occasionally single cells are embedded in dense collagenous stroma.",
      "A biphasic population is present: bland luminal ductal cells with round-to-oval monotonous nuclei and eosinophilic-to-clear cytoplasm, surrounded by flattened peripheral myoepithelial cells.",
      "Mitoses are inconspicuous.",
      "Perineural invasion is common; apposition to or invasion of minor salivary glands may occur.",
      "The tumor is composed of a biphasic cell population including luminal-lining bland-appearing ductal cells with round to oval monotonous nuclei, evenly dispersed chromatin, occasional nucleoli, and eosinophilic to clear cytoplasm",
      "Ductal lining cells are peripherally surrounded by flattened myoepithelial cells",
    ],
    ihc: [
      "Luminal cells: pancytokeratin and CK7.",
      "Peripheral myoepithelial cells: p40/p63, S100, SMA, and calponin.",
      "KIT/CD117 is negative; Ki-67 is low.",
      "Duct lining cells are positive for pancytokeratin and CK7, and the peripheral myoepithelial cell population expresses p40/p63, S100, SMA (smooth muscle actin), and calponin",
      "Low proliferation indexes are seen with Ki-67 (MIB1) staining",
    ],
    differential: [
      "Microsecretory adenocarcinoma — MSA is more cellular and microcystic-predominant, with monotonous intercalated duct-like cells and abundant basophilic secretions; it is typically S100/SOX10/p63-positive and p40/mammaglobin-negative. Sclerosing microcystic adenocarcinoma has more abundant sclerotic stroma, more cord-like growth, and a subtly biphasic population.",
      "Secretory carcinoma — SC has more abundant vacuolated cytoplasm, pink/bubbly secretions, and mammaglobin positivity; correlate with ETV6/RET fusions when needed.",
      "Adenoid cystic carcinoma — AdCC shows a true biphasic basaloid/ductal population and basement-membrane-like pseudocysts, often with more overt infiltrative and perineural growth.",
      "The biphasic cell population, bland cytology, immunoreactive staining pattern, and lack of keratinization are helpful features in the differentiation from squamous cell carcinoma, polymorphous adenocarcinoma, adenoid cystic carcinoma, mucoepidermoid carcinoma, and hyalinizing clear cell carcinoma",
    ],
    molecular: [],
    pattern: "Deeply infiltrative ducts and cords in dense collagenous stroma",
    pitfall:
      "Despite bland cytology and low mitotic activity, the tumor is deeply infiltrative and commonly perineural. Do not mistake it for a benign sclerosing process or a noninvasive ductal lesion.",
    isBiphasicFocus: false,
  },
  {
    name: "Carcinoma ex pleomorphic adenoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most CXPAs arise in the parotid gland, but they may originate from the submandibular gland or minor salivary glands",
      "The typical clinical presentation is that of a longstanding painless mass with recent rapid progression, or of a previous diagnosis of a PA",
      "Occasionally, the tumor may be asymptomatic",
      "CXPA accounts for 3.6% of all salivary gland tumors and 12% of all salivary gland malignancies",
      "It occurs in the setting of a recurrent PA in about 12% of cases",
    ],
    criteria: [
      "Essential: evidence of a pre-existing PA, clinically or histologically, with a carcinoma (epithelial and/or myoepithelial)",
    ],
    histology: [
      "A residual PA component may be intermixed with carcinoma or form a discrete, often hyalinized/sclerotic nodule.",
      "The malignant component may be any carcinoma type, most commonly salivary duct carcinoma, followed by myoepithelial carcinoma and adenocarcinoma NOS.",
      "Classify invasion relative to the PA capsule: intracapsular (including in situ growth retaining myoepithelial cells), minimally invasive (<4–6 mm beyond PA borders), and invasive (≥6 mm beyond the capsule, in commonly used criteria).",
      "Report the histologic type of the carcinoma and extent of invasion.",
      "In most cases, the carcinoma component constitutes > 50% of the tumor volume",
      "CXPA can be subclassified according to the extent of invasion beyond the PA borders as follows: (1) intracapsular, when the carcinoma is confined within the PA capsule",
      "in situ intracapsular, when the malignant tumor cells replace the ductal cells while retaining an intact myoepithelial layer",
      "(2) minimally invasive, when the carcinoma invades < 4–6 mm beyond the PA borders",
      "and (3) invasive, when the invasion beyond the PA capsule measures ≥ 6 mm",
    ],
    ihc: [
      "PLAG1 and HMGA2 may help identify the PA component.",
      "AR may support a salivary duct carcinoma component.",
      "Additional markers should be selected according to the carcinoma subtype.",
      "Staining for AR may be indicative of salivary duct CXPA",
    ],
    differential: [
      "Pleomorphic adenoma — A conventional PA is usually circumscribed and contains chondromyxoid/fibrillary stroma. CXPA requires carcinoma arising in or associated with PA; identify residual PA and carefully assess for invasive carcinoma beyond the PA boundary.",
      "Metastasizing pleomorphic adenoma — This may look cytologically benign, but requires a history of PA and documented metastasis; it is distinct from CXPA, which contains a malignant epithelial component.",
      "De novo salivary carcinoma — If no residual PA is identified, use morphology and molecular findings to assess whether a specific carcinoma type is present; PLAG1/HMGA2 alterations may support PA lineage but do not alone prove invasion.",
      "SDC, AdCC, MEC, and myoepithelial carcinoma — These may represent the malignant component of CXPA. Classify the carcinoma component by its own morphology rather than using CXPA as a substitute for subtype designation.",
      "Myoepithelial carcinoma and epithelial-myoepithelial carcinoma ex PA can mimic cellular PA especially when intracapsular or minimally invasive",
      "The invasive multinodular pattern helps to differentiate these tumors from PA",
    ],
    molecular: [
      "PLAG1 or HMGA2 rearrangements detected by FISH serve as a marker of pre-existing PA and can assist in the diagnosis of CXPA",
    ],
    pattern: "Carcinoma arising in a demonstrable pleomorphic adenoma",
    pitfall:
      "Sampling may capture only PA or only carcinoma. Extensive sampling is essential, especially in a longstanding or recurrent mass with recent rapid enlargement. State the carcinoma subtype and measure invasion beyond the PA boundary.",
    isBiphasicFocus: false,
  },
  {
    name: "Carcinosarcoma of the salivary glands",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most cases of carcinosarcoma manifest in major salivary glands (parotid, 70%; submandibular, 19%); minor gland occurrences are rare",
      "Carcinosarcomas are typically rapidly growing, large, and infiltrative tumors",
      "The mean age at presentation is 58 years (range: 14–87 years), with no sex predilection",
    ],
    criteria: [
      "Essential: a combined salivary gland tumor with malignant epithelial and mesenchymal components; exclusion of sarcomatoid subtypes of other salivary gland malignancies",
    ],
    histology: [
      "A combined malignancy with carcinomatous and sarcomatous components.",
      "The epithelial component is most often SCC or adenocarcinoma; the sarcomatous component is commonly chondrosarcoma and may dominate.",
      "About half arise in a pre-existing PA, often with a residual sclerotic PA nodule.",
      "Both components should be identified and sampled; a purely intracapsular carcinosarcoma ex PA is very rare.",
      "The sarcomatous components frequently dominate",
      "Approximately half of the tumors show a pre-existing, often sclerotic pleomorphic adenoma, usually with a carcinomatous (rarely sarcomatous) intracapsular component",
      "Pure intracapsular carcinosarcoma ex pleomorphic adenoma is very rare",
    ],
    ihc: [
      "Use immunohistochemistry to characterize the sarcomatous component and distinguish true carcinosarcoma from other salivary carcinomas with high-grade transformation.",
      "Select epithelial and mesenchymal markers according to the morphology.",
    ],
    differential: [
      "Sarcomatoid carcinoma — Usually shows a malignant epithelial neoplasm with spindle-cell or heterologous sarcomatoid transformation; demonstrate epithelial differentiation in the spindle component and assess whether there are truly distinct malignant epithelial and mesenchymal components.",
      "Carcinoma ex pleomorphic adenoma — A residual pleomorphic adenoma or convincing history supports carcinoma ex PA; a separate malignant mesenchymal component is required for carcinosarcoma.",
      "High-grade transformation of a salivary carcinoma — High-grade areas retain or evolve from the epithelial lineage rather than forming a distinct malignant sarcomatous component.",
      "Metastatic carcinosarcoma or sarcoma involving the salivary gland — Correlate with clinical history, imaging, and evidence of a primary tumor elsewhere.",
    ],
    molecular: [],
    pattern: "Malignant epithelial and malignant mesenchymal components",
    pitfall:
      "A spindle-cell or heterologous component alone does not establish carcinosarcoma. Confirm malignant mesenchymal differentiation and exclude a sarcomatoid subtype of another salivary carcinoma.",
    isBiphasicFocus: false,
  },
  {
    name: "Sebaceous adenocarcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Most (~70%) arise in the parotid gland, but they may occur in the sublingual, submandibular, or minor glands",
      "Patients present with painful masses, varying degrees of facial nerve paralysis, and occasional skin fixation",
      "Rare patients present with tumor metastasis (head/neck or lung) or a non-tender mass",
      "Sebaceous adenocarcinoma is rare and shows two peak incidences, in the third and seventh/eighth decades of life (age range: 6–93 years)",
      "There is a slight female predominance",
    ],
    criteria: [
      "Essential: an invasive salivary gland malignancy; neoplastic sebaceous cells of varying maturity",
      "Desirable: tumor necrosis",
    ],
    histology: [
      "Multiple invasive nests and/or sheets of variably sized cells with hyperchromatic nuclei and abundant clear, vacuolated-to-eosinophilic sebaceous cytoplasm.",
      "Cellular pleomorphism ranges from mild to marked; necrosis is frequent.",
      "Perineural invasion occurs in a subset; vascular invasion is rare.",
      "A lymphocytic infiltrate is common.",
      "Oncocytes and foreign-body giant cells are uncommon.",
      "Necrosis is frequent",
    ],
    ihc: [
      "Sebaceous/basal cells: CK5/6, CK7, CK14, and EMA.",
      "Sebocytes: CD15, lactoferrin, GCDFP-2, and adipophilin.",
      "Sebaceous/basal epithelial cells are positive for CK5/6, CK7, CK14, and EMA; sebocytes are positive for CD15, lactoferrin, GCDFP-2, and adipophilin",
    ],
    differential: [
      "Sebaceous adenoma or sebaceoma — Benign sebaceous neoplasms are generally circumscribed and lack destructive invasion, significant atypia, and tumor necrosis. Sebaceous adenocarcinoma shows invasive nests/sheets of sebocytes with variable pleomorphism and often necrosis.",
      "Metastatic or directly extending cutaneous sebaceous carcinoma — Correlate with skin examination, prior history, and anatomic relationship to the gland; morphology and sebaceous markers alone do not establish a primary salivary origin.",
      "Other salivary carcinomas with lymphoid stroma — Recognize the dual population of basaloid/basal epithelial cells and sebocytes; the sebaceous component should be confirmed morphologically and with adipophilin/CD15/lactoferrin/GCDFP-2 as appropriate.",
      "The differential diagnosis includes other salivary carcinomas with dense lymphoid reaction and sebaceous differentiation",
    ],
    molecular: [
      "Loss of MSH2 expression is uncommon and may characterize tumors in Muir–Torre syndrome",
    ],
    pattern:
      "Invasive sebocytic nests with vacuolated cytoplasm and pleomorphism",
    pitfall:
      "Recognize both sebaceous and basaloid cell populations. In patients with suspected Muir-Torre syndrome, mismatch-repair protein loss (MLH1, MSH2, MSH6) may be relevant; this is not typical of sporadic tumors.",
    isBiphasicFocus: false,
  },
  {
    name: "Lymphoepithelial carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "The majority (> 90%) of LECs arise in the major salivary glands, with the parotid gland predominating (> 75%), as well in the larynx (see section Lymphoepithelial carcinoma of the larynx) and sinonasal cavities (see section Sinonasal lymphoepithelial carcinoma)",
      "Patients present with a mass of varying duration; pain (occurring in ~5% of cases) and nerve findings (~2.5%) are rare",
      "Cervical lymphadenopathy is noted in about 17% of cases",
      "In some ethnic groups (in particular, in Inuit, southern Chinese, Japanese, northern African, and Mongolian populations), LEC accounts for 3.6–92% of malignant tumors, but in non-endemic regions it represents only 0.3–0.7% of malignancies",
      "It affects a wide age range (median: 46 years; patients in non-endemic regions tend to be a decade older)",
    ],
    criteria: [
      "Essential: a salivary gland malignancy of undifferentiated morphology with lymphoid stroma; exclusion of other tumors with associated lymphoid proliferation; exclusion of metastasis",
      "Desirable: EBER positivity",
    ],
    histology: [
      "Morphology resembles nonkeratinizing nasopharyngeal carcinoma: nests of large anaplastic carcinoma cells embedded in a dense lymphoid stroma.",
      "A basaloid variant may show sclerotic stroma, less lymphoid tissue, and angulated cords or syringoma-like nests.",
      "Adjacent salivary parenchyma may show lymphoepithelial sialadenitis.",
    ],
    ihc: [
      "EBER in situ hybridization establishes EBV status.",
      "No defining immunohistochemical panel has been established; use stains to characterize the specific tumor components and exclude mimics.",
    ],
    differential: [
      "Metastatic nasopharyngeal carcinoma — This is the critical exclusion because the morphology may be indistinguishable from salivary LEC. Examine the nasopharynx and correlate with imaging/clinical history; EBER positivity supports EBV association but does not by itself prove the salivary gland is the primary site.",
      "Large-cell undifferentiated carcinoma — LEC has a prominent non-neoplastic lymphoplasmacytic stroma accompanying nests/syncytia of undifferentiated carcinoma cells. If the lymphoid background is absent or scant, consider other undifferentiated carcinomas.",
      "High-grade MEC — Look for mucous and intermediate cells or other recognizable MEC differentiation; a dense lymphoid background alone is not sufficient for LEC.",
      "Lymphoepithelial sialadenitis — Shows reactive lymphoepithelial lesions and lymphoid infiltrates involving ducts, but lacks destructive nests of malignant epithelial cells with marked cytologic atypia.",
      "LEC must be distinguished from large cell undifferentiated carcinoma and from metastasis from the nasopharynx",
    ],
    molecular: [
      "In situ hybridization for EBV-encoded small RNA (EBER) establishes EBV status",
    ],
    pattern:
      "Undifferentiated carcinoma nests in prominent lymphoplasmacytic stroma",
    pitfall:
      "The lymphoid background can obscure the epithelial component. Do not diagnose LEC without excluding metastatic/non-salivary primary carcinoma; consider the patient's geographic/ethnic and EBV context without using it as a substitute for testing.",
    isBiphasicFocus: false,
  },
  {
    name: "Squamous cell carcinoma",
    group: "Malignant epithelial tumors",
    clinical: [
      "Approximately 80% of cases occur in the parotid gland, with the remainder primarily in the submandibular gland",
      "Patient presentations include a mass (with or without pain) and facial nerve palsy",
      "Primary salivary SCC is very rare",
      "The majority of reported cases of salivary SCC are cutaneous SCC with secondary invasion or metastasis to the salivary gland",
    ],
    criteria: [
      "Essential: a primary salivary gland malignancy with exclusively squamous differentiation; no history of another primary SCC",
      "Desirable: presence of salivary duct dysplasia",
    ],
    histology: [
      "Usually infiltrating well- to moderately differentiated carcinoma with desmoplasia, intracellular keratin, keratin pearls, and intercellular bridges.",
      "Poorly differentiated tumors may contain spindle/sarcomatoid cells.",
      "Acantholytic (adenoid) features are uncommon.",
      "Invasion may involve gland parenchyma, extraglandular soft tissue, nerves, vessels, or bone.",
      "Ductal squamous metaplasia/dysplasia with transition to carcinoma may occasionally be seen.",
      "Intracellular keratin, keratin pearl formation, and intercellular bridges are seen",
      "Invasion includes infiltration of salivary gland parenchyma, infiltration of extraglandular fibroconnective tissues, neurotropism, lymphovascular invasion, and/or osseous invasion",
      "Direct invasion and/or metastasis to intraparotid lymph nodes may be present",
    ],
    ihc: [
      "Cytokeratins and p63/p40 are positive.",
      "AR, S100, mammaglobin, and DOG1 are negative. p16 may be overexpressed, but High-risk HPV RNA is generally negative.",
      "SCCs are immunoreactive for cytokeratins and p63/p40 and are negative for AR, S100, mammaglobin, and DOG1",
      "SCCs may overexpress p16 but are negative for high-risk HPV RNA",
    ],
    differential: [
      "Metastatic cutaneous SCC — This is the most important exclusion in a parotid-region tumor. Review history and examine the scalp, face, and ear; intraparotid lymph node involvement may represent metastasis. Morphology and p40/p63 positivity cannot distinguish primary from metastatic SCC.",
      "Metastatic mucosal SCC — Exclude an oral cavity, oropharyngeal, laryngeal, or other mucosal primary by clinical examination and imaging. p16 expression alone is not proof of transcriptionally active HPV in this setting.",
      "High-grade mucoepidermoid carcinoma — MEC contains mucous and intermediate cells, even if sparse in high-grade tumors; mucicarmine/PAS-D may help identify mucous cells. Extensive keratinization and absence of mucous/intermediate cells favor SCC.",
      "Adenoid cystic carcinoma with high-grade transformation — Search for a conventional AdCC component; the transformed component may be pleomorphic and lose myoepithelial markers.",
      "Primary salivary SCC — A diagnosis of exclusion. A transition from normal/squamous-metaplastic duct epithelium through dysplasia to carcinoma may support salivary origin, but clinical exclusion of another primary remains essential.",
      "Primary SCC must be distinguished from metastases (cutaneous or mucosal), as well as from high-grade transformation of adenoid cystic carcinoma with squamoid pattern",
      "A lack of mucous and intermediate cells and the presence of keratinization are most helpful in differentiating SCC from a mucoepidermoid carcinoma",
    ],
    molecular: [],
    pattern:
      "Infiltrative keratinizing squamous carcinoma; primary diagnosis of exclusion",
    pitfall:
      "Primary salivary SCC cannot be reliably distinguished from metastasis by morphology or immunohistochemistry alone. Clinical history, skin and mucosal examination, and exclusion of another primary are mandatory.",
    isBiphasicFocus: false,
  },
  {
    name: "Sialoblastoma",
    group: "Other malignant tumors",
    clinical: [
      "The majority (two thirds) of tumors arise in the parotid gland, followed by the submandibular gland; there are only rare reports of tumors in the minor salivary glands",
      "Patients present with painless facial swelling; rare cases show nerve involvement or skin ulceration",
      "Other tumors (naevi and hepatoblastoma) may be coexistent",
      "The vast majority of tumors are identified at birth or within the first few months of life, with only rare reports in adults",
      "There is no sex predilection",
    ],
    criteria: [
      "Essential: a salivary gland malignancy showing primitive solid organoid nests; basaloid epithelial cells with vesicular chromatin; cuboidal to columnar ductal cells",
      "Desirable: dividing fibrous stroma and peripheral palisading",
    ],
    histology: [
      "Usually a lobulated tumor composed of solid organoid nests of primitive basaloid epithelial cells separated by dense fibrous stroma.",
      "Cells have indistinct borders, scant cytoplasm, a high N:C ratio, and round-to-oval vesicular nuclei, sometimes with nucleoli.",
      "Differentiated budding ducts lined by cuboidal-to-columnar cells with basophilic luminal secretions or cribriform structures may be present.",
      "Peripheral palisading is occasional.",
      "Apoptosis, necrosis, pleomorphism, and increased mitoses may occur.",
      "The tumor is not graded.",
      "Sialoblastoma is not graded",
    ],
    ihc: [
      "SOX10, p63, and beta-catenin are reactive.",
      "Cytokeratins (CK5/6, CK7, CK19), S100, SMA, KIT/CD117, and calponin are variable.",
      "Tumors are reactive for SOX10, p63, and β-catenin, and variably reactive with cytokeratins (including CK5/6, CK7, and CK19), S100, SMA, KIT (CD117), and calponin",
    ],
    differential: [
      "Basal cell adenoma/adenocarcinoma — These occur predominantly in adults and show more mature basaloid architecture; sialoblastoma occurs characteristically in neonates or very young children and has primitive organoid nests with budding ducts.",
      "Adenoid cystic carcinoma — AdCC shows a more recognizable biphasic ductal/myoepithelial population and basement-membrane-like pseudocysts; sialoblastoma has primitive basaloid cells with ductal budding and immature organoid architecture.",
      "Adamantinoma-like Ewing sarcoma — Consider in a primitive basaloid tumor; use an appropriate immunohistochemical and molecular workup to exclude Ewing sarcoma rather than relying on morphology alone.",
      "Cellular pleomorphic adenoma — May show basaloid cells and hyaline matrix, but usually has chondromyxoid/fibrillary stroma and lacks the characteristic neonatal presentation and primitive duct-budding pattern.",
      "The primitive histological features and the patients’ young age help to differentiate sialoblastoma from other basaloid salivary gland tumors such as basal cell adenoma/adenocarcinoma, adenoid cystic carcinoma, and adamantinoma-like Ewing sarcoma",
    ],
    molecular: [],
    pattern:
      "Primitive basaloid organoid nests with budding ducts in an infant/child",
    pitfall:
      "The neonatal/early childhood presentation is highly informative. Avoid overcalling based only on mitotic activity; the entity is not graded. Careful pediatric biopsy planning is important.",
    isBiphasicFocus: false,
  },
  {
    name: "Salivary gland carcinoma NOS",
    group: "Other malignant tumors",
    clinical: [
      "More than 50% of cases arise in the parotid gland, and 40% arise in minor glands, most often in the hard palate, buccal mucosa, and lips",
      "Patients with tumors of major glands usually present with asymptomatic, solitary, firm or cystic masses",
      "Occasionally, they may be painful",
      "Because of morphogenetic identification of new types of salivary gland adenocarcinoma, the entity adenocarcinoma NOS now accounts for only 5–10% of salivary gland carcinomas",
      "The average patient age is 58 years, with a wide age range",
    ],
    criteria: [
      "Essential: a salivary gland carcinoma lacking the morphological, immunohistochemical, and molecular features of other salivary carcinomas; exclusion of metastasis is mandatory",
    ],
    histology: [
      "A diagnosis of exclusion for tumors with variable ductal or glandular patterns, with or without cystic change or necrosis.",
      "Architecture may include small confluent nests or cords, large islands, and densely cellular stroma.",
      "Tumor cells may be cuboidal, columnar, polygonal, clear, mucinous, oncocytoid, or plasmacytoid.",
      "Ductal/glandular structures are more common in low- and intermediate-grade tumors and less frequent in high-grade tumors.",
      "Oncocytic and intestinal-type variants are described.",
      "Proof of an intraductal component supports a salivary gland origin",
      "Subtypes These include oncocytic adenocarcinoma and intestinal-type adenocarcinoma, the latter of which is often positive for CK20 and CDX2",
    ],
    ihc: [
      "Use a directed panel to exclude specific salivary entities: NR4A3 and DOG1 for acinic cell carcinoma; calponin, CK5/6, and p63 for basal/myoepithelial differentiation; site-specific markers to evaluate metastasis.",
      "Intestinal-type tumors may express CK20 and CDX2.",
      "Immunohistochemistry is helpful in distinguishing adenocarcinoma NOS from acinic cell carcinoma (NR4A3, DOG1), tumors with myoepithelial/basal cell composition (calponin, CK5/6, p63), and metastatic adenocarcinoma (site-specific markers)",
    ],
    differential: [
      "Salivary duct carcinoma — Look for apocrine cytoplasm, marked nuclear pleomorphism, complex cribriform/solid or papillary-cystic architecture, and comedonecrosis; assess AR and HER2 as appropriate.",
      "Mucoepidermoid carcinoma — Search for mucous, intermediate, and squamoid cells; MAML2 rearrangement may support MEC in selected cases.",
      "Polymorphous adenocarcinoma — Characterized by cytologic uniformity, architectural diversity, infiltrative growth, and often targetoid perineural invasion; S100-positive/p63-positive/p40-negative phenotype is supportive.",
      "Acinic cell carcinoma — Look for serous acinar differentiation, PAS-D-positive zymogen granules, DOG1, and nuclear NR4A3.",
      "Myoepithelial/basal cell neoplasms — Determine whether there is a basal/myoepithelial population using p63/p40, CK5/6, calponin, SMA, and other directed markers; assess the architecture and invasion.",
      "High-grade transformation of a defined salivary carcinoma — Search extensively for a conventional low-grade component at the tumor edge or in less pleomorphic areas.",
      "Metastatic adenocarcinoma — Exclude lung, gastrointestinal, breast, renal, and other primaries with clinical history, imaging, and site-directed markers. An intraductal component may support salivary origin but is not a substitute for clinicopathologic correlation.",
      "For the diagnosis of adenocarcinoma NOS to be rendered, other primary carcinoma types must be excluded, including salivary duct carcinoma, mucoepidermoid carcinoma, polymorphous adenocarcinoma, and high-grade transformation of other types of salivary carcinoma",
      "Tumors with significant mucinous differentiation may be better regarded as mucinous adenocarcinoma",
    ],
    molecular: ["Molecular alterations are heterogeneous and not diagnostic"],
    pattern:
      "Malignant glandular/ductal carcinoma lacking defining features of a specific entity",
    pitfall:
      "NOS should be reserved for cases in which morphology, immunophenotype, and molecular findings do not support a defined entity. Exclusion of metastasis is mandatory.",
    isBiphasicFocus: false,
  },
  {
    name: "Sialolipoma",
    group: "Benign mixed epithelial and adipocytic tumors",
    clinical: [
      "Conventional lipomas (see section Lipomas) predominate in parotid glands (≥ 80%), whereas sialolipoma and oncocytic lipoadenoma manifest in minor glands (50%) and in parotid glands (40%)",
      "In the oral cavity, the lower lip and tongue are the most common locations",
      "Patients typically present with a slow-growing swelling",
      "The salivary gland location is verified by radiological or intraoperative localization and/or by histological demonstration of a rim of salivary parenchyma",
      "The mean age at presentation regardless of site is 51.5 years, with an equal sex distribution",
    ],
    criteria: [
      "Essential: a lipoma with benign salivary epithelial components",
    ],
    histology: [
      "Combined lipoepithelial salivary gland lesions comprise a spectrum of morphological subtypes from sialolipoma to oncocytic lipoadenoma",
      "Sialolipoma combines lobules of salivary parenchyma with dominating and evenly interspersed adipose tissue",
      "The salivary parenchyma rarely shows focal sebaceous differentiation and is usually devoid of oncocytic epithelium",
      "The term “sialolipoma” indicates that the adipocytic component is regarded as neoplastic",
      "Subtype The rare oncocytic lipoadenoma subtype typically demonstrates a predominance of epithelial elements with a varying oncocytic component, reminiscent of oncocytoma",
      "A minor sebaceous component may occur",
    ],
    ihc: [
      "Pancytokeratin and CK7 highlight the entrapped salivary ducts and acini within the mature adipose tissue.",
      "p63 and smooth muscle actin may outline the basal/myoepithelial layer of native ducts when confirmation is needed.",
      "IHC is usually unnecessary when mature adipose tissue and well-formed native salivary elements are readily identified.",
    ],
    differential: [
      "Lipoma with entrapped salivary tissue — Sialolipoma shows a substantial, organized salivary gland component distributed within the adipose lesion; a few peripheral entrapped ducts in an ordinary lipoma are insufficient.",
      "Diffuse lipomatosis of the salivary gland — Lipomatosis is a diffuse replacement or infiltration of gland parenchyma by fat rather than a circumscribed tumor-like lesion.",
      "Pleomorphic adenoma with lipomatous or adipocytic metaplasia — Look for the characteristic epithelial-myoepithelial neoplasm and chondromyxoid matrix rather than a predominantly mature adipocytic lesion.",
    ],
    molecular: [],
    pattern: "",
    pitfall: "",
    isBiphasicFocus: false,
  },
];
const comparison: string[][] = [
  [
    "Adenoid cystic carcinoma (AdCC)",
    "Malignant",
    "Ductal + abluminal basaloid/myoepithelial",
    "Tubular, cribriform, solid; true ducts plus pseudocysts",
    "Basophilic/hyaline basement-membrane material",
    "Infiltrative; perineural invasion is an important clue",
    "MYB::NFIB; MYBL1-related alterations",
  ],
  [
    "Basal cell adenoma (BCA)",
    "Benign",
    "Luminal + basaloid/abluminal",
    "Solid, trabecular, tubular, cribriform, membranous",
    "Hyaline basement-membrane-like material; no characteristic chondromyxoid matrix",
    "Circumscribed/encapsulated; no destructive invasion",
    "CTNNB1/β-catenin pathway; subset with CYLD",
  ],
  [
    "Basal cell adenocarcinoma (BCAC)",
    "Malignant",
    "Luminal + basaloid/abluminal",
    "BCA-like tubulotrabecular, membranous, or solid growth",
    "Hyaline material may be present",
    "Infiltrative growth; PNI/LVI may occur",
    "Subset with CYLD or CTNNB1 alterations; no defining molecular test",
  ],
  [
    "Epithelial-myoepithelial carcinoma (EMC)",
    "Malignant",
    "Inner ductal + prominent outer myoepithelial, often clear",
    "Biphasic tubules; may be solid, cribriform, or multinodular",
    "Variable; not defined by extensive AdCC-like pseudocysts",
    "Usually multinodular invasive growth",
    "HRAS, commonly codon 61",
  ],
  [
    "Pleomorphic adenoma (PA)",
    "Benign",
    "Ductal + diverse myoepithelial cells",
    "Ducts, nests, sheets, trabeculae",
    "Myxoid/chondromyxoid, hyalinized, or fibrous",
    "Usually circumscribed; pseudopods/satellites can occur",
    "PLAG1 or HMGA2 alterations",
  ],
  [
    "Myoepithelioma",
    "Benign",
    "Predominantly / almost exclusively myoepithelial",
    "Solid, nested, cords, trabeculae, reticular",
    "Myxoid, hyalinized, collagenous, or vascular",
    "Well circumscribed; no destructive invasion",
    "Rare EWSR1; selected oncocytic cases with PLAG1 fusions",
  ],
  [
    "Intercalated duct adenoma",
    "Benign",
    "Cuboidal luminal cells + attenuated myoepithelial layer",
    "Small nodular or multinodular ductal proliferation",
    "Usually inconspicuous",
    "Circumscribed or encapsulated",
    "HRAS hotspot variants reported",
  ],
  [
    "Intercalated duct hyperplasia",
    "Benign proliferation",
    "Ductal + myoepithelial",
    "Small ducts blending with native acini",
    "Native gland tissue intermingled",
    "No discrete expansile border",
    "CTNNB1 mutations often reported",
  ],
  [
    "Striated duct adenoma",
    "Benign",
    "Single-layered ductal cells",
    "Closely packed small ducts, minimal stroma",
    "Minimal; may be vascular or hyalinized",
    "Circumscribed/encapsulated",
    "IDH2 p.R172 reported in tested cases",
  ],
  [
    "Canalicular adenoma",
    "Benign",
    "Monomorphic ductal cells; no true outer myoepithelial layer",
    "Beaded, branching, anastomosing cords/canaliculi",
    "Loose, edematous, highly vascular stroma",
    "Usually well circumscribed",
    "No defining recurrent alteration has been established.",
  ],
  [
    "Polymorphous adenocarcinoma (PAC)",
    "Malignant",
    "Usually cytologically uniform, not a classic biphasic tumor",
    "Architectural diversity; cords, tubules, targetoid patterns",
    "Variable",
    "Infiltrative; perineural invasion may occur",
    "Not established as a routine diagnostic test.",
  ],
];
const adccVsBca: string[][] = [
  [
    "Biologic behavior",
    "Malignant carcinoma",
    "Benign neoplasm",
    "The key distinction is not cytologic atypia alone; it is the presence or absence of destructive invasion.",
  ],
  [
    "Border / interface",
    "Typically infiltrative; perineural invasion is a characteristic, sampling-dependent clue.",
    "Well circumscribed or encapsulated; no destructive or perineural invasion.",
    "A limited core or FNA may not include the interface. Do not infer benignity from a bland sample.",
  ],
  [
    "Overall architecture",
    "Tubular, cribriform, and/or solid patterns; mixed patterns are common.",
    "Solid, trabecular, tubular, cribriform, or membranous patterns; more than one may coexist.",
    "Cribriform architecture occurs in both and is not independently diagnostic.",
  ],
  [
    "Cell populations",
    "Ductal luminal cells plus abluminal myoepithelial/basaloid cells; in classic AdCC, the two populations are usually recognizable.",
    "Luminal cells plus basaloid/abluminal cells; darker peripheral cells commonly show palisading and inner cells are paler.",
    "Both are biphasic. Identify the arrangement and correlate with the matrix and tumor border.",
  ],
  [
    "Cribriform spaces",
    "True glandular lumina coexist with pseudolumina; pseudolumina are filled with hyaline/basophilic stromal matrix and are contiguous with the stroma.",
    "Cribriform spaces may be present; hyaline basement-membrane-like material may occur between nests or as rounded droplets.",
    "In AdCC, look for both true ducts and matrix-filled pseudocysts, not just round spaces.",
  ],
  [
    "Hyaline material",
    "Often conspicuous within pseudocysts; represents stromal matrix/basement membrane material.",
    "May be present as thick bands, droplets, or membranous material around and between nests.",
    "Hyaline globules are not specific for AdCC.",
  ],
  [
    "Cytology",
    "Basaloid cells in tissue fragments, often surrounding larger, rounder, more numerous hyaline balls; stripped oval myoepithelial nuclei may be present in the background.",
    "Markedly cellular smears with small sheets and round, trabecular, or solid fragments of monomorphic small basaloid cells; scant cytoplasm, frequent naked nuclei, and thin dense hyaline material around/interdigitating with fragments.",
    "There is overlap. Cytology may favor one entity but cannot always separate AdCC from BCA.",
  ],
  [
    "IHC: luminal compartment",
    "CK7 and CD117/KIT typically highlight luminal ductal cells.",
    "Luminal cells express keratins; EMA, CEA, and CD117 may be positive.",
    "CD117 is supportive in the right pattern, not a stand-alone discriminator.",
  ],
  [
    "IHC: abluminal compartment",
    "p63, p40, calponin, and α-SMA highlight myoepithelial cells.",
    "Basaloid/abluminal cells may express p63, calponin, SMA/actin, S100, and GFAP.",
    "The shared basal/myoepithelial phenotype means a basic dual-cell panel does not by itself distinguish them.",
  ],
  [
    "Additional IHC",
    "MYB protein overexpression is common but has suboptimal specificity.",
    "Nuclear β-catenin and LEF1 coexpression supports BCA in the appropriate morphologic context.",
    "Interpret MYB and β-catenin/LEF1 as supportive patterns, not substitutes for morphology and invasion assessment.",
  ],
  [
    "Molecular",
    "MYB::NFIB is a key recurrent fusion; MYBL1 rearrangements or MYB amplification occur in some cases lacking the canonical fusion.",
    "CTNNB1 pathway alterations and CYLD alterations are reported; no single molecular test independently establishes benign behavior.",
    "A defining AdCC-associated fusion supports AdCC; molecular results must be interpreted with the histology.",
  ],
  [
    "Most important pitfall",
    "Do not diagnose AdCC from cribriform architecture or hyaline globules alone.",
    "Do not call BCA solely because the cells are bland or the lesion appears circumscribed in a limited sample.",
    "If invasion cannot be evaluated, a descriptive diagnosis such as basaloid neoplasm may be safer, with excision recommended for definitive classification.",
  ],
];
const fnaAdccVsBca: string[][] = [
  [
    "Cellularity",
    "Moderately to highly cellular; cohesive tissue fragments are common.",
    "Usually markedly cellular; many small sheets and round, trabecular, or solid fragments.",
    "High cellularity is common to both and is not a reliable separator.",
  ],
  [
    "Cell groups",
    "Basaloid cells form tissue fragments and may surround hyaline balls; cribriform/tubular fragments can be present.",
    "Monomorphic small basaloid cells form compact sheets, round groups, trabeculae, and solid fragments.",
    "Look for the relationship between the basaloid cells and the stromal material, not merely the presence of basaloid groups.",
  ],
  [
    "Hyaline / stromal material",
    "Often larger, rounder, and more numerous hyaline balls; basaloid epithelium may rim or surround the balls.",
    "Dense, thin hyaline material often wraps around or interdigitates with fragments; small rounded stromal droplets may occur.",
    "This is a useful tendency, not an absolute rule. Both tumors can yield hyaline material.",
  ],
  [
    "Nuclei and cytoplasm",
    "Small basaloid cells with high N:C ratio; oval-to-angulated hyperchromatic nuclei; stripped oval myoepithelial nuclei may lie in the clean background.",
    "Uniform round nuclei with fine hyperchromasia, scant cytoplasm, and frequent naked nuclei; cytology is often monotonous.",
    "Angulated hyperchromatic nuclei and stripped oval nuclei may favor AdCC, whereas a monotonous population favors BCA, but overlap is substantial.",
  ],
  [
    "Background",
    "Often relatively clean; hyaline matrix is conspicuous. A proteinaceous background is not required.",
    "Usually clean background with frequent naked nuclei; myxofibrillary stroma is absent.",
    "Absence of chondromyxoid/myxofibrillary matrix argues against PA, but does not by itself distinguish AdCC from BCA.",
  ],
  [
    "Cell-block IHC",
    "KIT/CD117 typically highlights luminal cells; p63/p40 and calponin/SMA highlight abluminal cells. MYB may be positive but is not fully specific.",
    "Basal/myoepithelial markers may highlight abluminal cells; nuclear β-catenin and LEF1 coexpression supports BCA in context.",
    "Shared biphasic marker expression limits the value of a small panel. Interpret staining by compartment and correlate with the smear pattern.",
  ],
  [
    "Molecular testing",
    "MYB::NFIB or MYBL1-related rearrangement supports AdCC when morphology is equivocal.",
    "CTNNB1 or CYLD alterations may be encountered, but testing is not a routine stand-alone cytologic classifier.",
    "Use molecular testing selectively; a negative result does not resolve the differential.",
  ],
  [
    "What FNA cannot establish",
    "Cannot reliably demonstrate the full infiltrative interface; absence of sampled PNI does not exclude AdCC.",
    "Cannot establish absence of invasion or reliably exclude basal cell adenocarcinoma.",
    "If the distinction remains unresolved, report a basaloid neoplasm with AdCC/BCA in the differential and recommend histologic evaluation of the excision.",
  ],
];
const workflow: string[][] = [
  [
    "Define the cell layers",
    "Is there a true luminal/abluminal arrangement? Separate true biphasic tumors from monophasic ductal tumors and predominantly myoepithelial lesions.",
  ],
  [
    "Read the matrix",
    "Chondromyxoid/fibrillary matrix favors PA; basement-membrane-like hyaline material raises BCA or AdCC; loose vascular stroma with beaded cords favors canalicular adenoma.",
  ],
  [
    "Assess the interface",
    "Destructive infiltration, perineural invasion, or vascular invasion changes the diagnostic category. Cytologic blandness does not exclude malignancy.",
  ],
  [
    "Map IHC by compartment",
    "Use CK7/CD117 for luminal differentiation and p63/p40/SMA/calponin for basal-myoepithelial differentiation. Interpret β-catenin, LEF1, MYB, S100, and SOX10 in context.",
  ],
  [
    "Use molecular testing to answer a defined question",
    "MYB/MYBL1 for AdCC; HRAS for EMC or intercalated duct adenoma in the appropriate morphology; CTNNB1 for selected BCA/hyperplasia; IDH2 p.R172 for striated duct adenoma.",
  ],
];
const ihcRows: string[][] = [
  [
    "CK / pancytokeratin",
    "Ductal and often basaloid cells",
    "Luminal + basaloid cells",
    "Both compartments",
    "Both compartments",
    "Ductal cells; myoepithelial cells also keratin-positive",
    "Positive",
    "Luminal ductal cells",
    "Positive",
    "Positive",
  ],
  [
    "CK7",
    "Luminal cells",
    "Luminal cells",
    "Luminal cells",
    "Inner ductal cells",
    "Ductal cells",
    "Variable",
    "Luminal cells",
    "Positive",
    "Positive",
  ],
  [
    "CD117 / KIT",
    "Typically luminal positive",
    "May label luminal cells",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not established",
    "Not established",
    "Positive",
  ],
  [
    "p63 / p40",
    "Abluminal myoepithelial cells",
    "Basaloid/abluminal cells",
    "Abluminal cells",
    "Outer myoepithelial layer",
    "Myoepithelial cells",
    "Often positive",
    "Myoepithelial layer",
    "Scattered cells only",
    "Not defining",
  ],
  [
    "SMA / calponin",
    "Abluminal myoepithelial cells",
    "Abluminal cells",
    "Abluminal cells",
    "Outer myoepithelial layer",
    "Myoepithelial cells",
    "Often positive",
    "Myoepithelial layer",
    "Scattered cells only",
    "Typically negative",
  ],
  [
    "S100 / SOX10",
    "Variable / often supportive",
    "Variable",
    "Variable",
    "Variable",
    "Myoepithelial component",
    "Often positive",
    "Not specified",
    "S100 often strong",
    "Both commonly positive",
  ],
  [
    "β-catenin / LEF1",
    "Not defining",
    "Nuclear coexpression supports BCA",
    "β-catenin in a subset; not discriminating",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
  ],
  [
    "MYB",
    "Often overexpressed; limited specificity",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
    "Not defining",
  ],
];
const molecularRows: string[][] = [
  [
    "AdCC",
    "MYB::NFIB; MYBL1 rearrangements/fusions; MYB amplification",
    "Supports AdCC in a compatible morphologic setting; canonical fusion is not present in every case.",
  ],
  [
    "BCA",
    "CTNNB1 / β-catenin pathway; subset with CYLD",
    "Supports pathway biology; not a stand-alone benignity test.",
  ],
  [
    "BCAC",
    "Subset with CYLD or CTNNB1 alterations",
    "No defining molecular test; invasion remains decisive.",
  ],
  [
    "EMC",
    "HRAS, commonly codon 61",
    "Useful in selected cases to distinguish EMC from mimics.",
  ],
  ["PA", "PLAG1 or HMGA2 alterations", "Helpful in selected cases."],
  [
    "Myoepithelioma",
    "Rare EWSR1 rearrangements; selected oncocytic cases with PLAG1-related fusions",
    "Supportive in selected morphologic contexts.",
  ],
  [
    "Intercalated duct adenoma",
    "HRAS hotspot variants",
    "Reported in adenomas; not routinely required.",
  ],
  [
    "Intercalated duct hyperplasia",
    "CTNNB1 mutations",
    "Reported more often in hyperplasia; not a routine diagnostic requirement.",
  ],
  [
    "Striated duct adenoma",
    "IDH2 p.R172",
    "Reported in all tested cases in one study; evidence base remains limited.",
  ],
  [
    "Canalicular adenoma",
    "No defining alteration specified",
    "Molecular testing is not established as a routine diagnostic tool.",
  ],
];

const filters = [
  "All entities",
  "Non-neoplastic lesions",
  "Benign tumors",
  "Malignant tumors",
  "Biphasic / ductal focus",
];

function classFor(group: string) {
  if (group.includes("Non-neoplastic")) return "Non-neoplastic";
  if (group.includes("Malignant")) return "Malignant";
  return "Benign";
}

function matchesFilter(entity: Entity, filter: string) {
  if (filter === "All entities") return true;
  if (filter === "Non-neoplastic lesions")
    return entity.group.includes("Non-neoplastic");
  if (filter === "Benign tumors") return entity.group.includes("Benign");
  if (filter === "Malignant tumors") return entity.group.includes("Malignant");
  if (filter === "Biphasic / ductal focus")
    return Boolean(entity.isBiphasicFocus);
  return true;
}

function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
        {kicker}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}

function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <tr>
            {headers.map((h) => (
              <th key={h} className="whitespace-nowrap px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-t border-slate-200 align-top dark:border-slate-800"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 leading-6 ${j === 0 ? "min-w-40 font-semibold text-slate-900 dark:text-slate-100" : "min-w-44 text-slate-600 dark:text-slate-300"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (!items?.length)
    return (
      <p className="text-sm text-slate-400">
        No additional feature-specific details listed.
      </p>
    );
  return (
    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
      {items.map((item, i) => (
        <li key={`${i}-${item.slice(0, 30)}`}>{item}</li>
      ))}
    </ul>
  );
}

export default function SalivaryGlandTumorsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All entities");
  const [opened, setOpened] = useState<string[]>([
    "Pleomorphic adenoma",
    "Mucoepidermoid carcinoma",
    "Adenoid cystic carcinoma",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      if (!matchesFilter(e, filter)) return false;
      if (!q) return true;
      const searchable = [
        e.name,
        e.group,
        e.pattern ?? "",
        ...e.clinical,
        ...e.criteria,
        ...e.histology,
        ...e.ihc,
        ...e.differential,
        ...(e.molecular ?? []),
        ...(e.cytology ?? []),
        e.pitfall ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return searchable.includes(q);
    });
  }, [query, filter]);

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
          <Link
            href="/head-and-neck/salivary-glands"
            className="text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300"
          >
            ← Salivary Glands
          </Link>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
                PathologyGPS · Head & Neck · Salivary Glands
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Salivary Gland Tumors
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
                A unified, morphology-first reference to non-neoplastic
                epithelial lesions, benign neoplasms, and malignant salivary
                gland tumors, with focused comparison of biphasic and related
                ductal tumors.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white dark:bg-black">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Diagnostic priority
              </p>
              <p className="mt-2 text-xl font-semibold leading-7">
                Architecture, cell lineage, matrix, and invasion drive
                classification.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Assess the tumor interface whenever possible. In limited
                biopsies and FNA, the absence of sampled invasion does not
                establish benignity.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Clinical Profile",
              "Essential Criteria",
              "Histopathology",
              "IHC",
              "Differential Diagnosis",
              "Molecular Pathology",
              "Cytology",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-10 px-5 py-8 sm:px-8">
        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              First question
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              What is the dominant architecture?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Recognize biphasic, oncocytic, acinar, papillary-cystic,
              cribriform, tubular, solid, and mucin-producing patterns.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Second question
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              What is the matrix and cell lineage?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Separate chondromyxoid stroma, basement-membrane-like hyaline
              material, loose vascular stroma, and true ductal or myoepithelial
              differentiation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Third question
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Is there destructive invasion?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Evaluate the interface, perineural invasion, lymphovascular
              invasion, and infiltrative growth before assigning biologic
              behavior.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <SectionTitle
            kicker="Diagnostic workflow"
            title="A practical morphology-first approach"
            description="Use a small number of high-yield observations to narrow the differential before ordering a broad ancillary panel."
          />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {workflow.map(([title, body], i) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle
            kicker="Cross-cutting diagnostic focus"
            title="Biphasic and related ductal tumors"
            description="These entities are grouped here because they share a practical differential diagnosis involving luminal, abluminal, basal, or myoepithelial differentiation. This is a diagnostic comparison group, not a separate biologic category."
          />
          <Table
            headers={[
              "Entity",
              "Behavior",
              "Cell populations",
              "Architecture",
              "Matrix / stroma",
              "Interface",
              "Molecular clue",
            ]}
            rows={comparison}
          />
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <SectionTitle
              kicker="Critical basaloid differential"
              title="Adenoid cystic carcinoma vs. basal cell adenoma"
              description="Both tumors may be biphasic, cribriform, and contain hyaline material. Cribriform architecture or hyaline globules alone are not diagnostic; evaluate the cell arrangement and tumor interface."
            />
            <Table
              headers={[
                "Feature",
                "AdCC",
                "Basal cell adenoma",
                "Diagnostic point",
              ]}
              rows={adccVsBca}
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <SectionTitle
              kicker="Fine-needle aspiration"
              title="Cytologic distinction: AdCC vs. basal cell adenoma"
              description="These are pattern-recognition clues, not absolute criteria. FNA cannot reliably demonstrate the complete invasive interface or exclude basal cell adenocarcinoma."
            />
            <Table
              headers={[
                "FNA feature",
                "AdCC",
                "Basal cell adenoma",
                "Practical interpretation",
              ]}
              rows={fnaAdccVsBca}
            />
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
              <strong>Suggested wording when unresolved:</strong> “Basaloid
              neoplasm. The differential diagnosis includes adenoid cystic
              carcinoma and basal cell adenoma. Cytologic material cannot
              reliably assess invasion; definitive classification requires
              histologic evaluation of the lesion and its interface.”
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <SectionTitle
              kicker="Compartment-based interpretation"
              title="IHC comparison matrix"
              description="Use staining to map compartments rather than as a binary checklist. Expression varies by tumor and antibody; correlate with H&E."
            />
            <Table
              headers={[
                "Marker",
                "AdCC",
                "BCA",
                "BCAC",
                "EMC",
                "PA",
                "Myoepithelioma",
                "Intercalated duct lesion",
                "Striated duct adenoma",
                "Canalicular adenoma",
              ]}
              rows={ihcRows}
            />
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <SectionTitle
              kicker="Molecular pathology"
              title="Alterations that may resolve a defined differential"
              description="Molecular results are supportive in the appropriate morphologic context; no alteration replaces assessment of invasion when behavior is the key question."
            />
            <Table
              headers={[
                "Entity",
                "Reported alteration",
                "Diagnostic interpretation",
              ]}
              rows={molecularRows}
            />
          </div>
        </section>

        <section>
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
                Complete entity reference
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                All {entities.length} entities appear once. Search by
                morphology, immunomarker, molecular alteration, anatomic site,
                or differential diagnosis.
              </p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. PLAG1, ETV6, cribriform, oncocytic..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900 md:max-w-sm"
            />
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${filter === item ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600 hover:border-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"}`}
              >
                {item}
                {item === "Biphasic / ductal focus"
                  ? ` (${entities.filter((x) => x.isBiphasicFocus).length})`
                  : ""}
              </button>
            ))}
          </div>
          <p className="mb-3 text-xs text-slate-500">
            Showing {filtered.length} of {entities.length} entities
          </p>
          <div className="space-y-4">
            {filtered.map((e, i) => {
              const open = opened.includes(e.name);
              return (
                <article
                  key={e.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    aria-expanded={open}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                          {classFor(e.group)}
                        </span>
                        <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                          {e.group}
                        </span>
                        {e.isBiphasicFocus && (
                          <span className="rounded-md bg-sky-50 px-2 py-1 text-[10px] font-bold uppercase text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                            Biphasic / ductal focus
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950 dark:text-slate-100">
                        {i + 1}. {e.name}
                      </h3>
                      {e.pattern && (
                        <p className="mt-1 text-sm font-medium text-teal-800 dark:text-teal-300">
                          {e.pattern}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800 dark:text-teal-300">
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="space-y-6 border-t border-slate-100 p-5 dark:border-slate-800">
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Clinical Profile
                          </h4>
                          <BulletList items={e.clinical} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Essential Diagnostic Criteria
                          </h4>
                          <BulletList items={e.criteria} />
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Histopathology
                          </h4>
                          <BulletList items={e.histology} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Immunohistochemistry
                          </h4>
                          <BulletList items={e.ihc} />
                        </div>
                      </div>
                      {e.cytology?.length ? (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Cytology
                          </h4>
                          <BulletList items={e.cytology} />
                        </div>
                      ) : null}
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <BulletList items={e.differential} />
                      </div>
                      {e.molecular?.length ? (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
                          <h4 className="text-sm font-bold uppercase tracking-wider">
                            Molecular Pathology
                          </h4>
                          <BulletList items={e.molecular} />
                        </div>
                      ) : null}
                      {e.pitfall ? (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                            Diagnostic Pitfall
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-amber-950 dark:text-amber-100">
                            {e.pitfall}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900">
                No matching entity.
              </div>
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
          <SectionTitle
            kicker="Specimen handling"
            title="Sampling and reporting checklist"
          />
          <BulletList
            items={[
              "Record the exact gland and anatomic subsite; distinguish major from minor salivary gland origin.",
              "Sample heterogeneous tumors extensively, including solid, cystic, papillary, hemorrhagic, necrotic, and firm areas.",
              "Document tumor size, margins, extraparenchymal extension, perineural invasion, lymphovascular invasion, and nodal status as applicable.",
              "For biphasic neoplasms, assess the entire tumor–host interface when distinguishing adenoma from carcinoma.",
              "For carcinoma ex pleomorphic adenoma, extensively sample the interface between residual PA and carcinoma and document the extent of invasion beyond the PA border when applicable.",
              "Use tumor-specific grading only where validated; report high-grade transformation explicitly.",
              "Correlate morphology with targeted IHC and molecular testing; do not overinterpret isolated marker positivity.",
            ]}
          />
        </section>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500 dark:border-slate-800">
          <strong className="text-slate-700 dark:text-slate-300">
            Diagnostic note:
          </strong>{" "}
          Interpret ancillary findings with morphology, anatomic site, and
          clinical context. A negative molecular result does not exclude an
          entity unless the alteration is required by its diagnostic definition.
        </footer>
      </div>
    </main>
  );
}
