"use client";

import { useMemo, useState, type ReactNode } from "react";

type Pair = [string, string];
type Entity = {
  name: string;
  group: string;
  behavior: string;
  clinical: string[];
  criteria: string[];
  histology: Pair[];
  ihc: Pair[];
  differential: Pair[];
  molecular: string[];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Hairy polyp",
    group: "Nasopharyngeal hamartoma",
    behavior: "Benign developmental lesion",
    clinical: [
      "Usually presents in neonates or young children; adult cases are exceptionally rare.",
      "Marked female predominance (male-to-female ratio approximately 1:6).",
      "Most often arises from the lateral nasopharyngeal wall; may also involve the oropharynx, palate, tongue, lip, or middle ear.",
      "Symptoms reflect size and mobility: airway obstruction, stridor, feeding or swallowing difficulty, hypersalivation, and vomiting.",
    ],
    criteria: [
      "Polypoid lesion with an external ectodermal covering resembling skin.",
      "Underlying tissue contains mesodermal elements, with fibroadipose tissue consistently present.",
      "No endodermal tissue is identified.",
      "Clinical and radiologic correlation may show a smooth fat-containing polyp with a fibrovascular stalk.",
    ],
    histology: [
      [
        "Surface",
        "Keratinizing stratified squamous epithelium with skin adnexa, including hair follicles and sebaceous units.",
      ],
      ["Stroma", "Fibroadipose tissue is uniformly present."],
      [
        "Additional mesodermal elements",
        "Cartilage, bone, skeletal muscle, and/or smooth muscle may be present.",
      ],
      [
        "Uncommon elements",
        "Meningothelial, minor salivary gland, or odontogenic elements are rarely encountered.",
      ],
    ],
    ihc: [
      [
        "IHC",
        "No diagnostic immunohistochemical panel is required; diagnosis is based on the characteristic ectodermal and mesodermal components.",
      ],
    ],
    differential: [
      [
        "Dermoid cyst",
        "A cystic lesion with keratinizing squamous lining and skin adnexa; hairy polyp is a polypoid, predominantly solid structure with mesodermal tissue.",
      ],
      [
        "Teratoma",
        "Contains derivatives of all three germ layers; endodermal elements are not a component of hairy polyp.",
      ],
      [
        "Other nasopharyngeal polyps",
        "Lack the combination of skin-like ectodermal covering and underlying mesodermal tissues.",
      ],
    ],
    molecular: ["Molecular testing is not diagnostically relevant."],
    pitfalls: [
      "Do not use the obsolete terms dermoid polyp or teratoid polyp.",
      "Recognize that congenital airway symptoms may be the dominant clinical presentation.",
    ],
  },
  {
    name: "Salivary gland anlage tumor",
    group: "Nasopharyngeal hamartoma",
    behavior: "Benign; recurrence has not been reported after excision",
    clinical: [
      "Predominantly affects infants, usually diagnosed by 3 months of age.",
      "Male predominance; prenatal presentation has been reported.",
      "Arises in the posterior nasal septum or posterior nasopharyngeal wall.",
      "May cause feeding difficulty and respiratory distress from nasal airway obstruction; polyhydramnios may be detected prenatally.",
    ],
    criteria: [
      "Polypoid lesion showing a complex network of ducts and solid-cystic squamous nests.",
      "Ducts and squamous nests are continuous with the surface squamous epithelium.",
      "Subepithelial stroma ranges from hypocellular to cellular and spindle-cell rich.",
      "Cytologic atypia and mitotic activity are absent.",
      "Cytokeratin and SMA expression in stromal spindle cells is supportive in selected cases.",
    ],
    histology: [
      [
        "Ductal architecture",
        "Complex network of tubules and ducts in the submucosa.",
      ],
      [
        "Squamous component",
        "Solid and cystic squamous nests show variable keratinization and continuity with surface epithelium.",
      ],
      [
        "Stroma",
        "Subepithelial stroma is often hypocellular, with more cellular stromal nodules centrally.",
      ],
      ["Cytology", "Atypia and mitoses are absent."],
    ],
    ihc: [
      [
        "Cytokeratins",
        "Highlight epithelial ducts and nests; stromal spindle cells may also be positive.",
      ],
      [
        "SMA",
        "Positive in the myoepithelial-like stromal cells; supports the diagnosis in selected cases.",
      ],
    ],
    differential: [
      [
        "Pleomorphic adenoma",
        "Usually occurs in older patients and shows a conventional salivary neoplasm with ductal and myoepithelial components in chondromyxoid stroma.",
      ],
      [
        "Embryonal rhabdomyosarcoma",
        "Shows malignant primitive cells, mitotic activity, and skeletal muscle differentiation; these features are absent in salivary gland anlage tumor.",
      ],
      [
        "Sinonasal teratoma",
        "Contains a broader range of mature or immature tissue types rather than the characteristic epithelial-stromal pattern.",
      ],
    ],
    molecular: [
      "Whole-exome sequencing of a small number of cases has not identified plausible driver mutations; no diagnostic molecular test is established.",
    ],
    pitfalls: [
      "The term congenital pleomorphic adenoma is not recommended.",
      "The combination of surface continuity, bland squamous nests/ducts, and characteristic stroma is more useful than any single immunostain.",
    ],
  },
  {
    name: "Low-grade nasopharyngeal papillary adenocarcinoma",
    group: "Nasopharyngeal carcinoma",
    behavior: "Low-grade malignant; indolent",
    clinical: [
      "Occurs across a wide age range, from the first through eighth decades.",
      "No sex predilection.",
      "Most often involves the posterior nasopharyngeal wall or roof; may arise elsewhere in the nasopharynx.",
      "Common presentations include nasal obstruction and blood-stained rhinorrhea.",
    ],
    criteria: [
      "Unencapsulated epithelial neoplasm with complex papillary and glandular architecture.",
      "Papillae show arborization and fibrovascular cores; complex glands may be back-to-back, cribriform, or microcystic.",
      "Tumor infiltrates the submucosa and shows low-grade cytology.",
      "A transition from surface epithelium to tumor supports a primary nasopharyngeal origin.",
      "TTF1 positivity with negative thyroglobulin and PAX8 supports the diagnosis in selected cases.",
    ],
    histology: [
      [
        "Architecture",
        "Complex arborizing papillae with fibrovascular cores, admixed with glandular, cribriform, and microcystic patterns.",
      ],
      [
        "Cytology",
        "Pseudostratified columnar to cuboidal cells with round-to-oval nuclei, vesicular or optically clear chromatin, and eosinophilic cytoplasm.",
      ],
      [
        "Atypia / mitoses",
        "Mild-to-moderate nuclear pleomorphism; scattered mitoses may occur, but atypical mitoses are absent.",
      ],
      [
        "Invasion",
        "Infiltrative growth into the submucosa; surface epithelial transition may be seen.",
      ],
    ],
    ihc: [
      ["Pancytokeratin / EMA", "Diffuse positivity."],
      [
        "TTF1",
        "Positive, including in spindle and squamous components when present.",
      ],
      [
        "Thyroglobulin / PAX8",
        "Negative; useful in excluding metastatic papillary thyroid carcinoma.",
      ],
      ["EBER", "Negative."],
      ["p16 / p40 / p63 / S100", "Negative in the described profile."],
      ["Ki-67", "Consistently low, typically below 5%."],
    ],
    differential: [
      [
        "Papillary thyroid carcinoma",
        "Usually expresses thyroglobulin and PAX8; nasopharyngeal papillary adenocarcinoma is negative for both and may show surface epithelial transition.",
      ],
      [
        "Sinonasal papilloma",
        "Usually lacks the extensive submucosal infiltrative growth and complex glandular architecture of this carcinoma.",
      ],
      [
        "Metastatic thyroid-like carcinoma",
        "Correlate with thyroid imaging and use a thyroid-lineage panel; TTF1 alone is not specific.",
      ],
    ],
    molecular: [
      "A ROS1::GOPC fusion has been reported in an individual case; no recurrent defining molecular alteration is established.",
    ],
    pitfalls: [
      "TTF1 positivity alone does not establish thyroid origin.",
      "Demonstrating submucosal invasion is important in distinguishing this carcinoma from a benign papillomatous lesion.",
    ],
  },
  {
    name: "Nasopharyngeal carcinoma",
    group: "Nasopharyngeal carcinoma",
    behavior: "Malignant epithelial neoplasm",
    clinical: [
      "Occurs across age groups; incidence is strongly influenced by geographic and ethnic background.",
      "Nonkeratinizing carcinoma is associated with EBV and is common in endemic regions; keratinizing carcinoma is more strongly associated with tobacco and alcohol exposure.",
      "Most often arises from the lateral nasopharyngeal wall, especially the fossa of Rosenmüller.",
      "Common presentation is a painless enlarging upper neck mass; nasal obstruction, blood-stained postnasal drip, epistaxis, otologic symptoms, and cranial neuropathies may occur.",
    ],
    criteria: [
      "Infiltrative poorly differentiated carcinoma, usually with limited overt squamous differentiation, for nonkeratinizing carcinoma.",
      "Variable admixture of lymphocytes and plasma cells is common in nonkeratinizing carcinoma.",
      "Pancytokeratin confirms epithelial differentiation; EBER positivity strongly supports nonkeratinizing nasopharyngeal carcinoma.",
      "Keratinizing carcinoma shows invasive squamous cell carcinoma with overt keratinization.",
      "Basaloid squamous cell carcinoma shows invasive high-grade basaloid nests with comedonecrosis and an identifiable squamous component.",
    ],
    histology: [
      [
        "Nonkeratinizing, undifferentiated",
        "Syncytial sheets, irregular islands, trabeculae, or discohesive cells; large vesicular nuclei and prominent nucleoli.",
      ],
      [
        "Nonkeratinizing, differentiated",
        "More cellular stratification and pavementing, often with plexiform growth; smaller cells and more distinct borders.",
      ],
      [
        "Inflammatory background",
        "Variable lymphocytes and plasma cells may fragment tumor nests into tiny clusters or single cells.",
      ],
      [
        "Keratinizing",
        "Invasive squamous carcinoma with intercellular bridges and variable keratinization, often with desmoplastic stroma.",
      ],
      [
        "Basaloid",
        "High-grade basaloid nests, often with comedonecrosis; abrupt keratinization or an associated conventional SCC / surface dysplasia establishes squamous differentiation.",
      ],
    ],
    ihc: [
      ["Pancytokeratin", "Strong tumor-cell positivity."],
      [
        "p40 / p63 / high-molecular-weight cytokeratins",
        "Usually positive and support squamous differentiation.",
      ],
      [
        "EBER ISH",
        "Positive in practically all nonkeratinizing carcinomas; variable in keratinizing and basaloid carcinomas.",
      ],
      ["CK7 / CK20", "Usually negative."],
      [
        "SOX10",
        "May be positive in basaloid nasopharyngeal carcinoma; interpret in morphologic context.",
      ],
    ],
    differential: [
      [
        "Lymphoma",
        "Tumor cells are epithelial and pancytokeratin-positive; lymphoma expresses lineage-specific hematolymphoid markers.",
      ],
      [
        "Oropharyngeal HPV-associated SCC metastatic to nasopharynx / node",
        "Use p16 and high-risk HPV testing as appropriate, and correlate with the primary site; EBER supports EBV-associated NPC.",
      ],
      [
        "Sinonasal undifferentiated carcinoma",
        "May be poorly differentiated but lacks the characteristic EBV association in most cases; use a broad lineage-directed panel and EBER.",
      ],
      [
        "Metastatic carcinoma",
        "Correlate with imaging and clinical history; EBER positivity in tumor cells supports NPC in the appropriate setting.",
      ],
      [
        "Hodgkin lymphoma",
        "Large NPC cells may resemble Reed–Sternberg cells, but epithelial markers and EBER pattern establish carcinoma.",
      ],
    ],
    molecular: [
      "EBER in situ hybridization is diagnostically useful, particularly in nonkeratinizing carcinoma and metastatic specimens.",
      "Plasma EBV DNA is useful for disease assessment and surveillance but is not a tissue-based histologic diagnostic test.",
      "Somatic alterations frequently affect CDKN2A, NF-κB signaling, chromatin modifiers, PI3K/MAPK, NOTCH, and TGF-beta pathways; these are not individually diagnostic.",
    ],
    pitfalls: [
      "Do not diagnose NPC from a lymphocyte-rich background alone; demonstrate epithelial tumor cells.",
      "EBER is usually positive in nonkeratinizing NPC but may be variable or negative in keratinizing and basaloid subtypes.",
      "The historical distinction between differentiated and undifferentiated nonkeratinizing carcinoma has no established clinical or prognostic value.",
    ],
  },
  {
    name: "Squamous papilloma and papillomatosis",
    group: "Precursor and benign epithelial lesions",
    behavior:
      "Benign; recurrence may occur, especially with multifocal disease",
    clinical: [
      "Can occur at any age; recurrent respiratory papillomatosis often begins in childhood, while adult-onset disease also occurs.",
      "Larynx is the most common site; lesions may involve the hypopharynx, trachea, and other respiratory mucosa.",
      "Presents with hoarseness, dysphonia, cough, stridor, or airway obstruction depending on site and burden.",
    ],
    criteria: [
      "Exophytic papillary proliferation with fibrovascular cores covered by mature squamous epithelium.",
      "Koilocytosis may be present, particularly in HPV-associated lesions.",
      "No destructive stromal invasion or high-grade cytologic atypia.",
      "Papillomatosis is characterized by multiple or recurrent papillomas involving the respiratory tract.",
    ],
    histology: [
      ["Architecture", "Papillary fronds with fibrovascular cores."],
      [
        "Epithelium",
        "Mature stratified squamous epithelium, often with orderly maturation.",
      ],
      ["Viral cytopathic effect", "Koilocytosis may be present."],
      [
        "Invasion",
        "Destructive stromal invasion is absent in benign papilloma.",
      ],
    ],
    ihc: [
      [
        "p16",
        "Not a reliable stand-alone surrogate for HPV in laryngeal papilloma; interpret with morphology and, when needed, HPV-specific testing.",
      ],
      [
        "HPV testing",
        "Low-risk HPV, particularly types 6 and 11, is associated with respiratory papillomatosis; molecular or in situ testing may be used in selected cases.",
      ],
    ],
    differential: [
      [
        "Papillary squamous cell carcinoma",
        "Shows cytologic atypia, loss of maturation, and invasive growth.",
      ],
      [
        "Verrucous carcinoma",
        "Shows broad pushing invasion and a verruciform architecture rather than delicate benign papillary fronds.",
      ],
      [
        "Squamous dysplasia",
        "Shows disordered maturation and cytologic atypia rather than orderly maturation in a benign papilloma.",
      ],
    ],
    molecular: [
      "Low-risk HPV, especially types 6 and 11, is associated with recurrent respiratory papillomatosis.",
    ],
    pitfalls: [
      "Assess the epithelial-stromal interface carefully in fragmented or superficial biopsies.",
      "Extensive or recurrent disease warrants evaluation for dysplasia or invasive carcinoma.",
    ],
  },
  {
    name: "Laryngeal and hypopharyngeal epithelial dysplasia",
    group: "Precursor and benign epithelial lesions",
    behavior: "Precursor lesion with variable risk of progression",
    clinical: [
      "Occurs predominantly in adults, with strong association with tobacco and alcohol exposure.",
      "Most commonly involves the true vocal folds; hypopharyngeal mucosa may also be affected.",
      "Presents with persistent hoarseness, dysphonia, or a mucosal white or erythematous lesion.",
    ],
    criteria: [
      "Squamous epithelial atypia and disordered maturation without stromal invasion.",
      "Grade according to the extent and severity of architectural disorder and cytologic atypia.",
      "Exclude reactive atypia, tangential sectioning, and inflammation-related changes.",
      "No stromal invasion is present; any suspicious interface requires deeper levels or additional sampling.",
    ],
    histology: [
      [
        "Low-grade dysplasia",
        "Atypia and disordered maturation are predominantly confined to the lower epithelial layers.",
      ],
      [
        "High-grade dysplasia",
        "More extensive architectural disorder and cytologic atypia involve much of the epithelial thickness.",
      ],
      [
        "Keratinization",
        "Hyperkeratosis and parakeratosis may accompany dysplasia.",
      ],
      [
        "Invasion",
        "Basement membrane remains intact; stromal invasion establishes carcinoma.",
      ],
    ],
    ihc: [
      [
        "p53",
        "Aberrant overexpression or null pattern may support dysplasia in selected cases but is not independently diagnostic.",
      ],
      [
        "Ki-67",
        "Expansion of proliferative activity above the basal/parabasal compartment may support dysplasia; interpret with morphology.",
      ],
      [
        "p16",
        "Not a universal grading marker for laryngeal / hypopharyngeal dysplasia.",
      ],
    ],
    differential: [
      [
        "Reactive / inflammatory atypia",
        "Usually retains maturation and lacks the degree of architectural disorder seen in true dysplasia.",
      ],
      [
        "Carcinoma in situ",
        "Full-thickness severe atypia without stromal invasion; distinguish from invasive SCC by the epithelial-stromal interface.",
      ],
      [
        "Invasive squamous cell carcinoma",
        "Irregular nests or single cells infiltrate the stroma, often with desmoplasia.",
      ],
    ],
    molecular: [
      "No single molecular alteration is required for histologic diagnosis; molecular testing is not routinely necessary.",
    ],
    pitfalls: [
      "Tangentially sectioned epithelium can simulate loss of maturation.",
      "Do not use p16 or p53 in isolation to assign dysplasia grade.",
    ],
  },
  {
    name: "Conventional squamous cell carcinoma",
    group: "Squamous cell carcinoma",
    behavior: "Malignant",
    clinical: [
      "Predominantly affects adults, especially older adults; strong association with tobacco and alcohol exposure.",
      "Most often arises in the true vocal cords; supraglottic, subglottic, and hypopharyngeal sites are also involved.",
      "Glottic tumors commonly present with hoarseness; advanced lesions may cause dysphagia, odynophagia, airway symptoms, or neck mass.",
    ],
    criteria: [
      "Invasive malignant squamous epithelial proliferation.",
      "Irregular nests, cords, or single cells infiltrate the stroma.",
      "Cytologic atypia, mitotic activity, and variable keratinization / intercellular bridges support squamous differentiation.",
      "Assess depth, extent, cartilage involvement, lymphovascular invasion, perineural invasion, and margins.",
    ],
    histology: [
      [
        "Well differentiated",
        "Prominent keratinization, intercellular bridges, and recognizable squamous maturation.",
      ],
      [
        "Moderately differentiated",
        "Infiltrative nests with variable keratinization and cytologic atypia.",
      ],
      [
        "Poorly differentiated",
        "Marked atypia and limited overt squamous maturation; immunohistochemistry may be needed to establish epithelial / squamous lineage.",
      ],
      [
        "Stroma",
        "Desmoplasia, inflammation, necrosis, and perineural or lymphovascular invasion may be present.",
      ],
    ],
    ihc: [
      ["Pancytokeratin", "Positive in tumor cells."],
      [
        "p40 / p63",
        "Support squamous differentiation, especially in poorly differentiated tumors.",
      ],
      ["High-molecular-weight cytokeratins", "Usually positive."],
      [
        "p16",
        "Should not be interpreted as an automatic surrogate for HPV-driven disease at laryngeal / hypopharyngeal sites.",
      ],
    ],
    differential: [
      [
        "Verrucous carcinoma",
        "Broad pushing fronts, bland cytology, and minimal atypia; conventional SCC shows destructive infiltrative nests.",
      ],
      [
        "Basaloid SCC",
        "Predominantly basaloid nests with comedonecrosis and a demonstrable squamous component.",
      ],
      [
        "Spindle cell SCC",
        "Malignant spindle-cell component, often with a conventional SCC or dysplastic surface component.",
      ],
      [
        "Adenosquamous carcinoma",
        "Distinct malignant glandular and squamous components, often with mucin production.",
      ],
      [
        "Reactive pseudoepitheliomatous hyperplasia",
        "Lacks destructive invasion and significant cytologic atypia; correlate with underlying inflammation or infection.",
      ],
    ],
    molecular: [
      "No single molecular alteration is required for diagnosis; molecular testing is not routinely needed for conventional laryngeal / hypopharyngeal SCC.",
    ],
    pitfalls: [
      "Small superficial biopsies may not include the invasive front.",
      "Evaluate cartilage and deep soft tissue when imaging suggests extension beyond the mucosa.",
    ],
  },
  {
    name: "Verrucous carcinoma",
    group: "Squamous cell carcinoma",
    behavior:
      "Low-grade malignant; locally destructive, metastasis exceptionally uncommon",
    clinical: [
      "Usually affects older adults, with a strong association with tobacco exposure.",
      "Occurs in the larynx, hypopharynx, trachea, and rarely parapharyngeal space.",
      "Presents as a slowly enlarging, exophytic or verruciform lesion; hoarseness and dysphagia depend on site.",
    ],
    criteria: [
      "Highly differentiated squamous proliferation with a verruciform / papillomatous surface.",
      "Broad bulbous pushing invasion at the base rather than jagged infiltrative nests.",
      "Cytologic atypia is minimal and mitoses are generally inconspicuous.",
      "Adequate deep sampling is essential to demonstrate the pushing interface and exclude conventional SCC.",
    ],
    histology: [
      [
        "Surface",
        "Marked hyperkeratosis and parakeratosis with papillomatosis.",
      ],
      [
        "Epithelium",
        "Thick, well-differentiated squamous epithelium with minimal cytologic atypia.",
      ],
      [
        "Invasion",
        "Broad, bulbous, pushing rete-like fronts extend into underlying stroma.",
      ],
      [
        "Inflammation",
        "Chronic inflammation may be present at the tumor-stroma interface.",
      ],
    ],
    ihc: [
      [
        "Pancytokeratin / p40",
        "Positive but not specific; diagnosis is architectural and requires assessment of the deep interface.",
      ],
      [
        "Ki-67",
        "May show a basal/parabasal distribution; not a substitute for morphologic evaluation.",
      ],
    ],
    differential: [
      [
        "Conventional SCC",
        "Shows irregular destructive infiltrative nests and greater cytologic atypia.",
      ],
      ["Papilloma", "Lacks broad pushing invasion into underlying stroma."],
      [
        "Pseudoepitheliomatous hyperplasia",
        "Usually associated with inflammation or infection and lacks a well-developed pushing tumor front.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    pitfalls: [
      "A superficial biopsy may be indistinguishable from papilloma or hyperkeratosis; obtain deep tissue.",
      "Hybrid lesions with conventional SCC must be excluded because their behavior and management differ.",
    ],
  },
  {
    name: "Basaloid squamous cell carcinoma",
    group: "Squamous cell carcinoma",
    behavior: "High-grade malignant",
    clinical: [
      "Occurs predominantly in adults and is rare in the nasopharynx / laryngeal region.",
      "May arise in the larynx, hypopharynx, or nasopharynx.",
      "Presents with site-dependent symptoms such as hoarseness, dysphagia, odynophagia, or a neck mass.",
    ],
    criteria: [
      "Invasive high-grade basaloid carcinoma with nested growth.",
      "Comedonecrosis is frequent.",
      "A squamous component must be identified as abrupt keratinization within basaloid nests, conventional invasive SCC, or surface dysplasia / carcinoma in situ.",
      "Variable myxoid-to-hyaline stroma may be present.",
    ],
    histology: [
      [
        "Architecture",
        "Nests and lobules of basaloid cells, often with peripheral palisading.",
      ],
      [
        "Cytology",
        "Small-to-intermediate cells with scant cytoplasm and hyperchromatic nuclei.",
      ],
      ["Necrosis", "Comedonecrosis is common."],
      [
        "Squamous differentiation",
        "Abrupt keratinization, conventional SCC, or surface dysplasia / carcinoma in situ provides evidence of squamous lineage.",
      ],
    ],
    ihc: [
      ["Pancytokeratin", "Positive."],
      ["p40 / p63", "Usually positive and supports squamous differentiation."],
      [
        "SOX10",
        "May be positive in basaloid nasopharyngeal carcinoma; interpret in the appropriate anatomic and morphologic context.",
      ],
      [
        "EBER",
        "May be positive in nasopharyngeal basaloid SCC, particularly in high-incidence populations.",
      ],
    ],
    differential: [
      [
        "Small cell neuroendocrine carcinoma",
        "Shows neuroendocrine morphology and marker expression; basaloid SCC has demonstrable squamous differentiation.",
      ],
      [
        "Adenoid cystic carcinoma",
        "Shows cribriform / tubular architecture and a biphasic ductal-myoepithelial phenotype.",
      ],
      [
        "Basal cell adenocarcinoma / other basaloid carcinoma",
        "Use site, ductal differentiation, and a directed IHC panel; establish a squamous component for basaloid SCC.",
      ],
      [
        "Nonkeratinizing NPC",
        "Often has lymphoplasmacytic background and EBER positivity; basaloid SCC requires basaloid morphology with a squamous component.",
      ],
    ],
    molecular: [
      "EBV may be present in nasopharyngeal basaloid SCC; no defining molecular alteration is established.",
    ],
    pitfalls: [
      "Basaloid morphology alone is insufficient; demonstrate squamous differentiation.",
      "SOX10 positivity does not exclude basaloid NPC; interpret with EBER and the complete phenotype.",
    ],
  },
  {
    name: "Papillary squamous cell carcinoma",
    group: "Squamous cell carcinoma",
    behavior: "Malignant",
    clinical: [
      "Usually affects adults, often older adults.",
      "Most often involves the larynx; may occur at other upper aerodigestive mucosal sites.",
      "Presents with hoarseness or a papillary / exophytic mucosal mass.",
    ],
    criteria: [
      "Exophytic papillary tumor with fibrovascular cores.",
      "Papillae are lined by dysplastic or frankly malignant squamous epithelium.",
      "Identify invasion when present; a superficial biopsy may not show the invasive component.",
      "Distinguish from benign squamous papilloma by cytologic atypia and loss of orderly maturation.",
    ],
    histology: [
      [
        "Architecture",
        "Papillary fronds with fibrovascular cores; may be predominantly exophytic.",
      ],
      [
        "Epithelium",
        "Dysplastic or malignant squamous epithelium with nuclear atypia and disordered maturation.",
      ],
      [
        "Invasion",
        "Invasive nests or irregular epithelial tongues may be present beneath the papillary surface.",
      ],
    ],
    ihc: [
      ["Pancytokeratin", "Positive."],
      ["p40 / p63", "Positive and supports squamous differentiation."],
      [
        "p16 / HPV",
        "Use only when clinically indicated; do not infer HPV-driven biology from morphology alone.",
      ],
    ],
    differential: [
      [
        "Squamous papilloma",
        "Shows orderly maturation and lacks significant cytologic atypia or destructive invasion.",
      ],
      [
        "Verrucous carcinoma",
        "Shows broad pushing invasion and highly differentiated cytology rather than malignant papillary epithelium.",
      ],
      [
        "Conventional SCC with papillary surface",
        "May show an exophytic component, but the dominant architecture and invasive pattern may be conventional rather than papillary.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    pitfalls: [
      "A superficial biopsy may sample only the papillary surface; assess the base for invasion.",
      "Papillary architecture alone does not establish a papillary SCC.",
    ],
  },
  {
    name: "Spindle cell squamous cell carcinoma",
    group: "Squamous cell carcinoma",
    behavior: "Malignant; often high grade",
    clinical: [
      "Predominantly affects older adults, with strong association with tobacco and alcohol exposure.",
      "Most often arises in the larynx, especially the glottic region.",
      "Presents with hoarseness, dysphonia, or an exophytic / polypoid mass.",
    ],
    criteria: [
      "Malignant spindle-cell neoplasm arising in a mucosal site.",
      "A conventional SCC, surface dysplasia / carcinoma in situ, or transition between epithelial and spindle-cell components is desirable but may be absent in a limited sample.",
      "Demonstrate epithelial differentiation with keratin and/or p40 when possible; expression may be focal or lost in the spindle component.",
      "Exclude a primary mesenchymal sarcoma and a reactive spindle-cell proliferation.",
    ],
    histology: [
      [
        "Architecture",
        "Polypoid or infiltrative spindle-cell proliferation, often with fascicular or storiform growth.",
      ],
      [
        "Cytology",
        "Atypical spindle cells with variable pleomorphism and mitotic activity.",
      ],
      [
        "Epithelial component",
        "Surface dysplasia, carcinoma in situ, conventional SCC, or transition to spindle cells may be present.",
      ],
      [
        "Heterologous elements",
        "Benign or malignant cartilage / bone differentiation may occur.",
      ],
    ],
    ihc: [
      [
        "Pancytokeratin",
        "May be focal or absent in the spindle component; a negative result does not exclude the diagnosis.",
      ],
      ["p40 / p63", "May be focal and support squamous differentiation."],
      ["Vimentin", "Usually positive but nonspecific."],
      [
        "Differential-directed markers",
        "Use a panel to exclude melanoma, vascular, neural, and specific mesenchymal neoplasms when morphology warrants.",
      ],
    ],
    differential: [
      [
        "Undifferentiated pleomorphic sarcoma",
        "Lacks an epithelial component and usually lacks convincing keratin / p40 expression; correlate with mucosal origin and surface dysplasia.",
      ],
      [
        "Leiomyosarcoma",
        "Shows smooth muscle differentiation with desmin, SMA, and h-caldesmon.",
      ],
      [
        "Melanoma",
        "Expresses melanocytic markers such as SOX10, S100, and Melan-A.",
      ],
      [
        "Reactive granulation tissue / inflammatory myofibroblastic proliferation",
        "Usually lacks marked malignant atypia and destructive growth; correlate with clinical setting.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    pitfalls: [
      "Keratin and p40 may be focal or absent in the spindle component.",
      "A superficial or ulcerated biopsy may contain only spindle cells; search for an epithelial component and use a focused exclusionary panel.",
    ],
  },
  {
    name: "Adenosquamous carcinoma",
    group: "Squamous cell carcinoma",
    behavior: "High-grade malignant",
    clinical: [
      "Occurs in adults, usually older adults.",
      "May arise in the larynx or hypopharynx.",
      "Presents with hoarseness, dysphagia, odynophagia, or a mucosal mass.",
    ],
    criteria: [
      "Invasive carcinoma with unequivocal malignant squamous and glandular components.",
      "The glandular component shows true gland formation and/or mucin production.",
      "Both components must be malignant; entrapped benign glands or focal mucin alone are insufficient.",
      "Extensive sampling may be required to identify both components.",
    ],
    histology: [
      [
        "Squamous component",
        "Conventional invasive SCC, often moderately or poorly differentiated.",
      ],
      [
        "Glandular component",
        "Malignant glands, duct-like structures, and/or mucin-producing cells.",
      ],
      [
        "Relationship",
        "The two malignant components may be intermingled or present in separate areas.",
      ],
      ["Invasion", "Destructive stromal invasion is present."],
    ],
    ihc: [
      ["Pancytokeratin", "Positive in both components."],
      ["p40 / p63", "Highlights the squamous component."],
      [
        "Mucin stains",
        "Can demonstrate intracellular or extracellular mucin in the glandular component.",
      ],
      [
        "Glandular markers",
        "CK7 and other glandular markers may highlight the glandular component; interpret in context.",
      ],
    ],
    differential: [
      [
        "Conventional SCC with focal mucin",
        "Does not show a distinct malignant glandular component.",
      ],
      [
        "Mucoepidermoid carcinoma",
        "Typically shows a mixture of mucous, intermediate, and squamoid cells; assess architecture and, when needed, MAML2 rearrangement.",
      ],
      [
        "Salivary-type carcinoma",
        "Consider site and salivary differentiation; establish whether the tumor is a primary mucosal adenosquamous carcinoma.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis; MAML2 testing may help in the differential with mucoepidermoid carcinoma.",
    ],
    pitfalls: [
      "Do not diagnose adenosquamous carcinoma from focal mucin alone.",
      "Adequate sampling is necessary to establish unequivocal malignant glandular and squamous components.",
    ],
  },
  {
    name: "Lymphoepithelial carcinoma of the larynx",
    group: "Squamous cell carcinoma",
    behavior: "Malignant; rare",
    clinical: [
      "Very rare; reported in adults.",
      "Arises in the larynx, often supraglottic.",
      "May present with hoarseness, dysphagia, or a laryngeal mass.",
    ],
    criteria: [
      "Undifferentiated carcinoma with syncytial epithelial cells in a dense lymphoplasmacytic background.",
      "Tumor cells show epithelial differentiation by pancytokeratin.",
      "EBER status should be assessed; unlike nasopharyngeal lymphoepithelial carcinoma, laryngeal cases are generally EBV-negative in the described entity.",
      "Exclude metastatic nasopharyngeal carcinoma and lymphoma.",
    ],
    histology: [
      [
        "Tumor cells",
        "Large undifferentiated cells with syncytial growth, vesicular nuclei, and prominent nucleoli.",
      ],
      [
        "Background",
        "Dense lymphocytes and plasma cells intimately admixed with tumor cells.",
      ],
      [
        "Architecture",
        "Sheets, nests, or irregular islands may be obscured by the inflammatory infiltrate.",
      ],
    ],
    ihc: [
      [
        "Pancytokeratin",
        "Positive in carcinoma cells and establishes epithelial lineage.",
      ],
      ["p40 / p63", "May support squamous differentiation."],
      [
        "EBER ISH",
        "Typically negative in reported laryngeal lymphoepithelial carcinoma; positive staining should prompt careful exclusion of NPC.",
      ],
      [
        "CD45",
        "Highlights background lymphocytes; carcinoma cells are negative.",
      ],
    ],
    differential: [
      [
        "Nasopharyngeal carcinoma",
        "Usually arises in nasopharynx and is EBER-positive in nearly all nonkeratinizing cases; correlate with imaging and clinical examination.",
      ],
      [
        "Lymphoma",
        "Tumor cells express hematolymphoid markers and lack pancytokeratin.",
      ],
      [
        "Conventional poorly differentiated SCC",
        "Usually has more obvious squamous differentiation and less prominent lymphoepithelial morphology.",
      ],
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    pitfalls: [
      "A dense lymphoid background can obscure the epithelial nature of the tumor.",
      "Assess EBER and the nasopharynx to exclude metastatic or contiguous NPC.",
    ],
  },
  {
    name: "Laryngeal cartilaginous tumors",
    group: "Mesenchymal tumors",
    behavior: "Chondroma benign; chondrosarcoma malignant",
    clinical: [
      "Usually affects middle-aged to older adults, with male predominance in reported series.",
      "Most often arises in the cricoid cartilage; thyroid and arytenoid cartilages are less common sites.",
      "Presents with hoarseness, dyspnea, dysphagia, or airway obstruction.",
    ],
    criteria: [
      "Chondroma: lobular cartilaginous tumor without pleomorphism, binucleation, or destructive growth; size 20 mm or less is supportive.",
      "Chondrosarcoma: malignant cartilaginous neoplasm with lobular disarray and destructive invasion of native cartilage and/or bone.",
      "Chondrosarcoma shows increased cellularity, binucleation, nuclear pleomorphism, and hyperchromasia.",
      "Imaging may show an expansile destructive intracartilaginous mass with ring-like, arc-like, or popcorn calcifications.",
    ],
    histology: [
      [
        "Chondroma",
        "Mature hyaline cartilage, hypocellular, with evenly distributed bland chondrocytes; one cell per lacuna; no mitoses or binucleation.",
      ],
      [
        "Grade 1 chondrosarcoma",
        "Lobular disarray and destructive invasion; increased cellularity, binucleation, mild pleomorphism, and hyperchromasia.",
      ],
      [
        "Grade 2 chondrosarcoma",
        "Greater cellularity and nuclear pleomorphism; scattered mitoses may be present.",
      ],
      [
        "Grade 3 chondrosarcoma",
        "High cellularity, marked pleomorphism and multinucleation, increased mitoses, and tumor necrosis.",
      ],
      [
        "Dedifferentiated subtype",
        "Biphasic tumor with conventional chondrosarcoma juxtaposed to high-grade noncartilaginous sarcoma.",
      ],
    ],
    ihc: [
      ["S100", "Positive in chondroid tumor cells."],
      ["SOX9", "Positive in chondroid tumor cells."],
      ["D2-40", "May be positive."],
      [
        "Keratin / EMA",
        "Negative in chondroid cells; helps distinguish epithelial tumors with cartilaginous differentiation.",
      ],
    ],
    differential: [
      [
        "Chondroma",
        "Bland hypocellular cartilage without binucleation, pleomorphism, or destructive invasion.",
      ],
      [
        "Chondrosarcoma",
        "Destructive growth, lobular disarray, increased cellularity, binucleation, and nuclear atypia; size greater than 20 mm favors but does not establish malignancy.",
      ],
      [
        "Chondrometaplasia",
        "Usually multiple elastic cartilage nodules in the vocal cord blending with adjacent stroma.",
      ],
      [
        "Spindle cell SCC with cartilage",
        "Cartilage is embedded within a malignant spindle-cell epithelial population.",
      ],
    ],
    molecular: [
      "Molecular testing is not considered diagnostically relevant in the described laryngeal cartilaginous tumors.",
    ],
    pitfalls: [
      "A size cutoff greater than 20 mm is supportive but not definitive for chondrosarcoma.",
      "Incisional biopsies may not capture destructive invasion; correlate with imaging and sample the tumor-cartilage interface.",
      "Do not use atypical cartilaginous neoplasm terminology for laryngeal lesions without a site-specific evidence basis.",
    ],
  },
];

const categories = [
  "All",
  "Nasopharyngeal hamartoma",
  "Nasopharyngeal carcinoma",
  "Precursor and benign epithelial lesions",
  "Squamous cell carcinoma",
  "Mesenchymal tumors",
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
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ rows }: { rows: Pair[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-sm">
        <tbody className="divide-y divide-slate-100">
          {rows.map(([label, detail], index) => (
            <tr key={index}>
              <th className="w-1/4 py-3 pr-4 align-top font-semibold text-slate-900">
                {label}
              </th>
              <td className="py-3 leading-6 text-slate-700">{detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PharyngealLaryngealTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Nasopharyngeal carcinoma",
    "Conventional squamous cell carcinoma",
    "Laryngeal cartilaginous tumors",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const categoryMatch = category === "All" || entity.group === category;
      const searchable = [
        entity.name,
        entity.group,
        entity.behavior,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.histology.flat(),
        ...entity.ihc.flat(),
        ...entity.differential.flat(),
        ...entity.molecular,
        ...entity.pitfalls,
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && searchable.includes(q);
    });
  }, [query, category]);

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck Pathology / Pharyngeal, Laryngeal,
            Tracheal, and Parapharyngeal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Pharyngeal, Laryngeal, Tracheal, and Parapharyngeal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A practical, morphology-first diagnostic reference covering
                nasopharyngeal, hypopharyngeal, laryngeal, tracheal, and
                parapharyngeal lesions.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic priority
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the anatomic site, epithelial phenotype, and invasive
                pattern.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use targeted immunohistochemistry to establish lineage or
                resolve a specific differential; do not substitute marker panels
                for adequate sampling of the invasive interface.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: practical sequence">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Confirm the site",
                "Nasopharynx, hypopharynx, larynx, trachea, or parapharyngeal space; correlate with imaging and endoscopy.",
              ],
              [
                "Classify the lesion",
                "Hamartomatous, papillary, dysplastic, conventional squamous, basaloid, spindle-cell, glandular, or cartilaginous.",
              ],
              [
                "Find the interface",
                "Distinguish orderly maturation, pushing invasion, and destructive infiltrative growth.",
              ],
              [
                "Apply focused IHC",
                "Use epithelial / squamous markers, EBER, thyroid-lineage markers, or cartilage markers according to morphology.",
              ],
              [
                "Use molecular tests selectively",
                "EBER is especially useful in NPC; other molecular tests are not routinely required for most entities on this page.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Nasopharyngeal lesions: high-yield distinction">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2 pr-3">Key morphology</th>
                    <th className="py-2">Useful discriminator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Hairy polyp</td>
                    <td className="py-3 pr-3">
                      Skin-like ectoderm over mesodermal tissue
                    </td>
                    <td className="py-3">No endodermal elements</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Salivary gland anlage tumor
                    </td>
                    <td className="py-3 pr-3">
                      Surface-connected ducts and squamous nests in spindle-cell
                      stroma
                    </td>
                    <td className="py-3">Stromal cytokeratin and SMA</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Low-grade papillary adenocarcinoma
                    </td>
                    <td className="py-3 pr-3">
                      Complex papillary / glandular growth with submucosal
                      invasion
                    </td>
                    <td className="py-3">TTF1+, thyroglobulin−, PAX8−</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Nonkeratinizing NPC
                    </td>
                    <td className="py-3 pr-3">
                      Poorly differentiated carcinoma with variable
                      lymphoplasmacytic background
                    </td>
                    <td className="py-3">EBER+ in nearly all cases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="Squamous carcinoma: invasion-pattern comparison">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2 pr-3">Growth pattern</th>
                    <th className="py-2">Diagnostic anchor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Conventional SCC
                    </td>
                    <td className="py-3 pr-3">
                      Destructive infiltrative nests / cords
                    </td>
                    <td className="py-3">Cytologic malignancy and invasion</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Verrucous carcinoma
                    </td>
                    <td className="py-3 pr-3">Broad pushing fronts</td>
                    <td className="py-3">
                      Highly differentiated cytology; deep biopsy
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Basaloid SCC</td>
                    <td className="py-3 pr-3">High-grade basaloid nests</td>
                    <td className="py-3">
                      Comedonecrosis plus squamous component
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Papillary SCC</td>
                    <td className="py-3 pr-3">Malignant papillary fronds</td>
                    <td className="py-3">Dysplastic epithelium / invasion</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Spindle cell SCC
                    </td>
                    <td className="py-3 pr-3">
                      Malignant spindle-cell proliferation
                    </td>
                    <td className="py-3">
                      Epithelial component or focal keratin / p40
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">
                      Adenosquamous carcinoma
                    </td>
                    <td className="py-3 pr-3">
                      Malignant squamous and glandular components
                    </td>
                    <td className="py-3">
                      True malignant glands / mucin production
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, immunomarker, or molecular
                alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. EBER, pushing invasion, TTF1, cartilage..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === item ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((entity) => {
              const isOpen = opened.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(entity.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {entity.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {entity.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {entity.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="space-y-6 border-t border-slate-100 p-5">
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Clinical Profile
                          </h4>
                          <Bullets items={entity.clinical} />
                        </div>
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Essential Diagnostic Criteria
                          </h4>
                          <Bullets items={entity.criteria} />
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Histopathology
                          </h4>
                          <DataTable rows={entity.histology} />
                        </div>
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Immunophenotype
                          </h4>
                          <DataTable rows={entity.ihc} />
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <DataTable rows={entity.differential} />
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Molecular Pathology
                          </h4>
                          <Bullets items={entity.molecular} />
                        </div>
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic Pitfalls
                          </h4>
                          <Bullets items={entity.pitfalls} />
                        </div>
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

        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Document the precise anatomic epicenter and correlate with endoscopy and cross-sectional imaging.",
              "For verrucous carcinoma, papillomatous lesions, and suspected invasion, obtain tissue deep enough to evaluate the epithelial-stromal interface.",
              "For nasopharyngeal carcinoma, use EBER in situ hybridization in the appropriate morphologic setting, particularly for metastatic lymph node specimens.",
              "For low-grade nasopharyngeal papillary adenocarcinoma, use TTF1, thyroglobulin, and PAX8 as a focused panel when thyroid origin is in the differential.",
              "For spindle-cell and poorly differentiated lesions, establish lineage with a focused panel and do not exclude spindle cell SCC solely because keratin is focal or absent.",
              "For laryngeal cartilaginous lesions, correlate biopsy findings with imaging and assess destructive invasion at the cartilage interface.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Diagnostic note:</b> Interpret
          immunohistochemical and molecular findings in conjunction with
          morphology, anatomic site, and imaging. Ancillary tests described as
          supportive are not stand-alone diagnostic criteria.
        </footer>
      </div>
    </main>
  );
}
