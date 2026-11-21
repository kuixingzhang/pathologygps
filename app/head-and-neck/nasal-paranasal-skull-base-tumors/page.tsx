"use client";

import { useMemo, useState, type ReactNode } from "react";

type Row = [string, string];

type Entity = {
  name: string;
  category: string;
  behavior: string;
  clinical: string[];
  criteria: string[];
  histology: Row[];
  ihc: Row[];
  differential: Row[];
  molecular: string[];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Sinonasal papilloma, inverted",
    category: "Sinonasal papilloma",
    behavior: "Benign; locally recurrent; malignant transformation risk",
    clinical: [
      "Typically affects older adults, with peak incidence in the sixth decade.",
      "Marked male predominance (approximately 3–5:1).",
      "Usually arises from the lateral nasal wall and/or ethmoid or maxillary sinus.",
      "Presents with unilateral nasal obstruction; rhinorrhea, epistaxis, facial pressure, headache, anosmia, or epiphora may occur.",
    ],
    criteria: [
      "Predominantly endophytic, non-destructive epithelial growth.",
      "Rounded nests and ribbons of hyperplastic immature squamous (Schneiderian) epithelium within edematous, hypocellular stroma.",
      "Intact basement membrane around epithelial nests.",
      "Prominent transmigrating intraepithelial neutrophils are a characteristic clue.",
      "Assess carefully for severe dysplasia or an associated invasive carcinoma.",
    ],
    histology: [
      [
        "Architecture",
        "Endophytic ribbons and rounded nests; broad mucosal attachment; basement membrane remains intact.",
      ],
      [
        "Epithelium",
        "Hyperplastic immature squamous/transitional-type epithelium; scattered ciliated or mucous columnar cells may be present superficially.",
      ],
      [
        "Inflammation",
        "Prominent transmigrating intraepithelial neutrophils are characteristic.",
      ],
      [
        "Dysplasia",
        "Uncommon; may be keratinizing or nonkeratinizing. Severe dysplasia / carcinoma in situ should be identified and reported.",
      ],
      [
        "Carcinoma warning",
        "Basaloid growth, conspicuous atypia, increased or atypical mitoses, and loss of intraepithelial neutrophils raise concern for nonkeratinizing SCC.",
      ],
    ],
    ihc: [
      [
        "High-risk HPV RNA ISH",
        "Usually negative for transcriptionally active high-risk HPV; useful when distinguishing from high-risk HPV-associated nonkeratinizing SCC.",
      ],
      [
        "Low-risk HPV",
        "A subset shows transcriptionally active low-risk HPV; not required for diagnosis.",
      ],
      [
        "EGFR",
        "No routine diagnostic IHC marker; EGFR mutation testing is molecular rather than immunohistochemical.",
      ],
    ],
    differential: [
      [
        "Nonkeratinizing squamous cell carcinoma",
        "May also grow endophytically but more often shows basaloid cytology, pleomorphism, increased/atypical mitoses, predominantly exophytic growth, and loss of transmigrating neutrophils; high-risk HPV RNA ISH is often positive in HPV-associated SCC.",
      ],
      [
        "Oncocytic sinonasal papilloma",
        "Shows multilayered oncocytic cuboidal-to-columnar cells and characteristic mucinous microcysts / neutrophilic microabscesses.",
      ],
      [
        "Exophytic sinonasal papilloma",
        "Predominantly papillary, exophytic fronds with fibrovascular cores, usually arising from the anterior nasal septum.",
      ],
    ],
    molecular: [
      "Somatic EGFR mutations, usually exon 20 in-frame insertions/deletions, occur in a large subset.",
      "A subset is associated with transcriptionally active low-risk HPV; EGFR mutation and low-risk HPV appear mutually exclusive.",
      "TP53 and/or CDKN2A alterations are associated with malignant progression.",
    ],
    pitfalls: [
      "Do not equate endophytic growth alone with carcinoma; assess cytology, mitoses, neutrophilic inflammation, and invasion.",
      "High-risk HPV negativity does not establish inverted papilloma without the characteristic morphology.",
      "Recurrence and synchronous/metachronous carcinoma are clinically important; thoroughly sample suspicious solid or atypical areas.",
    ],
  },
  {
    name: "Sinonasal papilloma, oncocytic",
    category: "Sinonasal papilloma",
    behavior: "Benign; recurrence and malignant transformation may occur",
    clinical: [
      "Typically occurs in older adults, peaking in the sixth to seventh decades; uncommon below age 30.",
      "Sex distribution is approximately equal.",
      "Usually involves the lateral nasal wall and/or paranasal sinuses, most often the maxillary sinus.",
      "Presents with unilateral nasal obstruction; rhinorrhea, epistaxis, and anosmia may occur.",
    ],
    criteria: [
      "Noninvasive papillary epithelial neoplasm with mixed exophytic and endophytic growth.",
      "Multiple layers of cuboidal-to-columnar cells with abundant oncocytic cytoplasm.",
      "Intraepithelial microcysts containing mucin and/or neutrophilic microabscesses are characteristic.",
      "Dysplasia is uncommon; assess for increased atypia and mitotic activity.",
    ],
    histology: [
      ["Architecture", "Mixed exophytic and endophytic papillary growth."],
      [
        "Epithelium",
        "Multilayered cuboidal-to-columnar cells with abundant oncocytic cytoplasm and centrally placed, mildly enlarged / irregular nuclei.",
      ],
      ["Inflammation", "Intraepithelial neutrophils are common."],
      [
        "Microcysts",
        "Mucin-containing microcysts and/or neutrophilic microabscesses are characteristic.",
      ],
      [
        "Dysplasia",
        "Uncommon; increased nuclear atypia and mitotic activity warrant careful evaluation.",
      ],
    ],
    ihc: [
      [
        "Diagnostic IHC",
        "No defining immunohistochemical profile is specified; morphology is central to diagnosis.",
      ],
      ["HPV", "HPV is not considered an etiologic factor."],
    ],
    differential: [
      [
        "Inverted sinonasal papilloma",
        "Predominantly endophytic ribbons/nests of immature squamous epithelium with prominent transmigrating neutrophils; oncocytic cells and mucinous microcysts favor oncocytic papilloma.",
      ],
      [
        "Exophytic sinonasal papilloma",
        "Anterior septal origin and multilayered squamous/respiratory-type epithelium without oncocytic cytoplasm or characteristic microcysts.",
      ],
      [
        "Papillary squamous cell carcinoma",
        "Shows cytologic malignancy, destructive invasion, and/or atypical mitotic activity rather than bland noninvasive papillomatous epithelium.",
      ],
    ],
    molecular: [
      "Activating KRAS mutations in exon 2 or 3 are reported.",
      "TP53 and CDKN2A alterations are associated with malignant progression.",
    ],
    pitfalls: [
      "Do not diagnose carcinoma based on papillary complexity alone; assess cytologic atypia and invasion.",
      "Recurrence and malignant transformation are reported; thoroughly sample large, heterogeneous, or atypical areas.",
    ],
  },
  {
    name: "Sinonasal papilloma, exophytic",
    category: "Sinonasal papilloma",
    behavior: "Benign; malignant change is extremely rare",
    clinical: [
      "Typically affects adults aged 20–50 years, with a range extending from childhood to old age.",
      "Male predominance (approximately 2–10:1).",
      "Usually arises from the lower anterior nasal septum; paranasal sinus origin is extremely rare.",
      "Presents with epistaxis and unilateral nasal obstruction.",
    ],
    criteria: [
      "Exophytic papillary proliferation with broad fronds and delicate fibrovascular cores.",
      "Fronds are covered by multilayered sinonasal-type epithelium, approximately 5–20 cells thick.",
      "No high-grade squamous dysplasia and no destructive infiltrative growth.",
      "Low-risk HPV, especially types 6 and 11, is present in most cases.",
    ],
    histology: [
      [
        "Architecture",
        "Broad exophytic papillary fronds with delicate fibrovascular cores.",
      ],
      [
        "Epithelium",
        "Maturing multilayered epithelium, ranging from squamous to ciliated pseudostratified respiratory type; transitional forms occur.",
      ],
      [
        "Additional cells",
        "Scattered mucocytes and intraepithelial neutrophils are common.",
      ],
      [
        "Keratinization",
        "Absent or scant unless secondary to trauma or drying.",
      ],
      [
        "Cytology",
        "Mitoses are rare and nonatypical; high-grade dysplasia is not a feature.",
      ],
    ],
    ihc: [
      [
        "Diagnostic IHC",
        "No defining IHC profile is specified; diagnosis is based on architecture and epithelial maturation.",
      ],
      [
        "HPV",
        "Low-risk HPV (usually types 6 and 11) is detected in most tumors; this is generally assessed by molecular / in situ methods rather than routine IHC.",
      ],
    ],
    differential: [
      [
        "Cutaneous squamous papilloma",
        "More often arises in the nasal vestibule and shows keratinizing cutaneous-type squamous epithelium.",
      ],
      [
        "Inverted sinonasal papilloma",
        "Shows endophytic nests/ribbons of immature squamous epithelium rather than broad exophytic fronds.",
      ],
      [
        "Papillary squamous cell carcinoma",
        "Shows significant cytologic atypia, increased / atypical mitoses, and destructive invasion.",
      ],
    ],
    molecular: [
      "Most cases harbor low-risk HPV, predominantly types 6 and 11.",
    ],
    pitfalls: [
      "Confirm the site of origin; a vestibular lesion may be a cutaneous squamous papilloma.",
      "Do not overcall scant surface keratinization as dysplasia when it is attributable to trauma or drying.",
    ],
  },
  {
    name: "Sinonasal glomangiopericytoma",
    category: "Mesenchymal tumor",
    behavior: "Usually indolent; locally recurrent in a subset",
    clinical: [
      "Can occur at any age but peaks in the sixth to seventh decades.",
      "Slight female predominance.",
      "Usually unilateral in the nasal cavity, involving the turbinates or septum; may extend into ethmoid or maxillary sinuses.",
      "Typically presents with nasal obstruction and/or epistaxis.",
    ],
    criteria: [
      "Well-delineated submucosal proliferation of ovoid-to-spindle myoid cells in a richly vascularized stroma.",
      "Complex branching thin-walled vessels, including staghorn-like channels, with characteristic perivascular hyalinization.",
      "Tumor cells show a syncytial arrangement with blunt-ended nuclei and eosinophilic-to-clear cytoplasm.",
      "Mild atypia and limited mitotic activity are typical; necrosis is usually absent.",
      "Actin and nuclear beta-catenin expression support the diagnosis in the appropriate morphologic setting.",
    ],
    histology: [
      [
        "Growth pattern",
        "Unencapsulated but well-delineated submucosal tumor, often separated from intact surface epithelium by a tumor-free zone.",
      ],
      [
        "Tumor cells",
        "Syncytial ovoid-to-spindle cells with blunt-ended nuclei, coarse chromatin, and slightly eosinophilic-to-clear cytoplasm.",
      ],
      [
        "Vasculature",
        "Ramifying capillary-sized to large, patulous staghorn vessels.",
      ],
      [
        "Vessel walls",
        "Peritheliomatous hyalinization is a characteristic clue.",
      ],
      [
        "Background",
        "Extravasated erythrocytes, mast cells, and eosinophils are common.",
      ],
      [
        "Cytologic grade",
        "Usually mild pleomorphism, few mitoses, and no necrosis; marked atypia, atypical / increased mitoses, or necrosis suggest aggressive behavior.",
      ],
    ],
    ihc: [
      [
        "SMA",
        "Strong tumor-cell positivity; muscle-specific actin is also commonly positive.",
      ],
      ["Beta-catenin", "Nuclear staining supports the diagnosis."],
      ["LEF1 / cyclin D1", "Often positive; reflect the beta-catenin pathway."],
      ["Factor XIIIa", "Often positive."],
      ["STAT6", "Negative; helps exclude solitary fibrous tumor."],
      [
        "S100 / SOX10",
        "Negative; helps exclude neural and biphenotypic sinonasal tumors.",
      ],
      [
        "CD31 / ERG",
        "Negative in tumor cells; helps exclude an endothelial neoplasm.",
      ],
      ["Desmin / pancytokeratin", "Usually negative."],
    ],
    differential: [
      [
        "Solitary fibrous tumor",
        "Nuclear STAT6 and NAB2::STAT6 fusion support SFT; glomangiopericytoma typically shows nuclear beta-catenin and myoid marker expression.",
      ],
      [
        "Smooth muscle tumor",
        "Leiomyoma / leiomyosarcoma shows smooth muscle fascicles and more complete smooth muscle differentiation; correlate morphology and desmin / h-caldesmon.",
      ],
      [
        "Schwannoma",
        "Usually S100 and SOX10 positive, unlike glomangiopericytoma.",
      ],
      [
        "Biphenotypic sinonasal sarcoma",
        "Typically S100 and SMA positive but SOX10 negative; fascicular infiltrative spindle-cell morphology and PAX3 rearrangement favor BSNS.",
      ],
      [
        "Meningioma",
        "Meningothelial whorls and EMA / SSTR2A expression support meningioma; correlate with imaging for intracranial connection.",
      ],
    ],
    molecular: [
      "Recurrent activating CTNNB1 exon 3 mutations are characteristic and lead to nuclear beta-catenin accumulation.",
      "CTNNB1 testing can support diagnosis but is rarely necessary when morphology and IHC are characteristic.",
      "NAB2::STAT6, MIR143::NOTCH, and GLI1 alterations are not expected.",
    ],
    pitfalls: [
      "CD34 is variable and clone dependent; do not use it as a decisive discriminator.",
      "Bone destruction can occur and does not by itself establish high-grade malignancy.",
      "Late local recurrence may occur; prolonged follow-up is appropriate.",
    ],
  },
  {
    name: "Biphenotypic sinonasal sarcoma",
    category: "Mesenchymal tumor",
    behavior: "Low-grade malignant; locally recurrent; metastasis not reported",
    clinical: [
      "Occurs in adults, mean age approximately 53 years (reported range 24–85).",
      "Notable female predominance.",
      "Primarily involves the nasal cavity and ethmoid sinus; any sinonasal site may be affected.",
      "Presents with nasal obstruction, pain, epistaxis, or rhinorrhea; orbital or skull-base extension may cause diplopia or neurologic complications.",
    ],
    criteria: [
      "Unencapsulated, infiltrative, monotonous spindle-cell neoplasm with medium-to-long fascicles, often in a herringbone pattern.",
      "Tumor cells have uniform ovoid or wavy nuclei, fine chromatin, inconspicuous nucleoli, and scant pale eosinophilic cytoplasm.",
      "S100 and SMA are consistently positive; SOX10 is consistently negative.",
      "Mitotic activity is usually low (<2/mm²); necrosis is absent.",
      "PAX3 rearrangement is desirable for confirmation in selected cases.",
    ],
    histology: [
      [
        "Architecture",
        "Infiltrative, unencapsulated spindle-cell proliferation in medium-to-long fascicles, often herringbone.",
      ],
      [
        "Cytology",
        "Uniform ovoid or wavy nuclei with fine chromatin and small / inconspicuous nucleoli; scant pale eosinophilic cytoplasm.",
      ],
      [
        "Entrapped epithelium",
        "Hyperplastic respiratory epithelium is commonly entrapped within the tumor.",
      ],
      [
        "Vessels / stroma",
        "Hypocellular fibrous areas and thin-walled hemangiopericytoma-like vessels are common.",
      ],
      [
        "Invasion",
        "Bone infiltration is common; extension to the orbit, anterior skull base, cribriform plate, and brain may occur.",
      ],
      [
        "Proliferation",
        "Mitotic activity is consistently low, usually <2/mm²; necrosis is absent.",
      ],
    ],
    ihc: [
      ["S100", "Consistently positive, sometimes heterogeneous."],
      [
        "SOX10",
        "Consistently negative; an important distinction from schwannian tumors.",
      ],
      ["SMA", "Consistently positive."],
      ["Desmin", "Positive in approximately one-half to two-thirds of cases."],
      [
        "MYOD1 / myogenin",
        "Usually negative or only patchy / focal; rhabdomyoblastic differentiation is uncommon.",
      ],
      [
        "PAX3",
        "Nuclear staining is present in most cases with an appropriate antibody clone.",
      ],
      ["Pan-TRK", "Commonly positive but not specific."],
      ["Beta-catenin", "Focal nuclear staining may occur."],
    ],
    differential: [
      [
        "Synovial sarcoma",
        "Can be spindle-cell and keratin / EMA positive; SS18::SSX fusion or specific fusion IHC supports synovial sarcoma.",
      ],
      [
        "Cellular schwannoma",
        "Usually diffuse SOX10 and S100 positivity; BSNS is SOX10 negative and SMA positive.",
      ],
      [
        "Sinonasal glomangiopericytoma",
        "Shows a prominent branching vascular network, perivascular hyalinization, and nuclear beta-catenin; BSNS is infiltrative and PAX3-rearranged.",
      ],
      [
        "Respiratory epithelial adenomatoid hamartoma",
        "Benign ciliated glandular proliferation with thick basement membranes, not an infiltrative spindle-cell sarcoma.",
      ],
      [
        "Solitary fibrous tumor",
        "Nuclear STAT6 and NAB2::STAT6 fusion favor SFT.",
      ],
    ],
    molecular: [
      "PAX3::MAML3 is the most common fusion (approximately 60%).",
      "Alternative PAX3 partners include NCOA1, NCOA2, FOXO1, and WWTR1.",
      "PAX3 break-apart FISH is useful; RNA-based next-generation sequencing can identify alternative fusion partners.",
      "A minority of morphologically compatible tumors may lack a detectable fusion.",
    ],
    pitfalls: [
      "The bland cytology belies malignant behavior; local infiltration and recurrence are important.",
      "S100 positivity alone may suggest a neural tumor; the combination of SMA positivity and SOX10 negativity is highly useful.",
      "Decalcification can cause FISH failure; consider RNA-based sequencing when tissue permits.",
    ],
  },
  {
    name: "Sinonasal ameloblastoma",
    category: "Other sinonasal tumor",
    behavior: "Benign but locally aggressive",
    clinical: [
      "Very rare; typically adults in the sixth to seventh decades.",
      "Strong male predominance.",
      "Arises in the nasal cavity (septum or lateral wall) and/or paranasal sinuses.",
      "Presents with nasal obstruction and/or epistaxis; advanced lesions may extend into the vestibule or cause orbitofacial deformity.",
    ],
    criteria: [
      "Confirm a sinonasal epicenter and radiographically exclude an intraosseous maxillary alveolar / jaw primary.",
      "Basaloid epithelial neoplasm with plexiform or follicular architecture.",
      "Central loosely arranged stellate reticulum-like material.",
      "Peripheral palisading with reverse nuclear polarity and subnuclear vacuolization.",
      "Direct continuity with surface epithelium may be identified.",
    ],
    histology: [
      [
        "Architecture",
        "Plexiform or follicular basaloid epithelial proliferation.",
      ],
      [
        "Central component",
        "Loosely arranged stellate reticulum-like cells / material.",
      ],
      [
        "Peripheral cells",
        "Palisading with reverse polarity and subnuclear vacuolization.",
      ],
      [
        "Surface relationship",
        "Direct continuity with sinonasal surface epithelium may be present.",
      ],
    ],
    ihc: [
      [
        "Diagnostic IHC",
        "No defining IHC profile is specified; diagnosis rests on morphology and radiologic exclusion of a gnathic primary.",
      ],
    ],
    differential: [
      [
        "Gnathic ameloblastoma",
        "Radiographic intraosseous maxillary alveolar bone origin precludes a primary sinonasal ameloblastoma.",
      ],
      [
        "Basal cell carcinoma",
        "Usually shows cutaneous / mucosal context and different architecture; correlate with site and clinical findings.",
      ],
      [
        "Basaloid squamous cell carcinoma",
        "Shows squamous differentiation, cytologic atypia, mitoses, and/or invasive growth.",
      ],
      [
        "Salivary gland neoplasm",
        "Use architecture, cytology, mucin / ductal differentiation, and site to exclude a salivary-type tumor.",
      ],
      [
        "Adamantinomatous craniopharyngioma",
        "Wet keratin and focal nuclear beta-catenin-positive epithelial whorls favor craniopharyngioma; clinicoradiographic correlation is essential.",
      ],
    ],
    molecular: [
      "No diagnostically useful molecular alteration is established for sinonasal cases in the available classification data.",
      "BRAF and RAS alterations are described mainly in gnathic ameloblastomas and should not be assumed in sinonasal tumors.",
    ],
    pitfalls: [
      "Do not diagnose sinonasal ameloblastoma without excluding extension from an intraosseous jaw primary.",
      "Keratin and cholesterol crystals are not expected features.",
    ],
  },
  {
    name: "Adamantinomatous craniopharyngioma",
    category: "Other sinonasal tumor",
    behavior: "CNS WHO grade 1; malignant progression exceedingly rare",
    clinical: [
      "Sinonasal / nasopharyngeal presentation is extremely rare and may occur at any age.",
      "No sex predilection is established for sinonasal cases.",
      "May arise along the craniopharyngeal canal and extend into the sinonasal tract.",
      "Sinonasal presentation causes nonspecific local symptoms rather than the typical visual, endocrine, or headache symptoms of sellar / suprasellar tumors.",
    ],
    criteria: [
      "Benign nonkeratinizing squamous epithelium arranged in cords, lobules, ribbons, whorls, or irregular trabeculae.",
      "Prominent peripheral basal palisading.",
      "Stellate reticulum-like microcystic areas and characteristic anucleate ghost cells / wet keratin.",
      "Focal nuclear beta-catenin accumulation in small epithelial whorls is a desirable supportive finding.",
      "Correlate imaging to establish the relationship to the craniopharyngeal canal and exclude other lesions.",
    ],
    histology: [
      [
        "Architecture",
        "Cords, lobules, ribbons, nodular whorls, and irregular trabeculae of squamous epithelium.",
      ],
      ["Peripheral cells", "Prominent basal palisading."],
      [
        "Wet keratin",
        "Nodules of anucleate ghost-like squamous cells are common and highly characteristic.",
      ],
      [
        "Stellate reticulum",
        "Loose microcystic stellate reticulum-like areas intermingle with denser epithelial areas and wet keratin.",
      ],
      [
        "Cystic / degenerative change",
        "Cysts may have flattened lining; fibrosis, calcification, and xanthogranulomatous reaction may occur.",
      ],
    ],
    ihc: [
      [
        "Beta-catenin",
        "Nuclear accumulation is restricted to small epithelial whorls and involves only a small fraction of tumor cells.",
      ],
      [
        "Interpretation",
        "A negative result in a limited sample does not replace morphologic and radiologic assessment.",
      ],
    ],
    differential: [
      [
        "Sinonasal ameloblastoma",
        "May show ameloblastic peripheral palisading and stellate reticulum-like centers, but wet keratin / ghost cells and focal nuclear beta-catenin whorls favor craniopharyngioma.",
      ],
      [
        "Papillary craniopharyngioma",
        "Lacks the characteristic wet keratin and stellate reticulum pattern; typically has papillary squamous epithelium.",
      ],
      [
        "Rathke cleft cyst",
        "Cyst lined by ciliated / cuboidal epithelium, sometimes with squamous metaplasia, without the characteristic neoplastic epithelial whorls and wet keratin.",
      ],
      [
        "Epidermoid / dermoid cyst",
        "Cystic lesion with keratinizing squamous lining; dermoid contains skin adnexa; lacks the characteristic craniopharyngioma architecture.",
      ],
      [
        "Xanthogranuloma",
        "Predominantly histiocytic / inflammatory lesion rather than an epithelial neoplasm.",
      ],
      [
        "Teratocarcinosarcoma",
        "Shows a heterogeneous admixture of epithelial, mesenchymal, and neuroectodermal components.",
      ],
    ],
    molecular: [
      "Activating CTNNB1 exon 3 mutations are characteristic and drive beta-catenin pathway activation.",
      "CTNNB1 testing may help in selected morphologically equivocal cases.",
    ],
    pitfalls: [
      "Beta-catenin nuclear staining is focal and restricted to epithelial whorls; do not expect diffuse nuclear labeling.",
      "The sinonasal location is unusual; carefully assess imaging and clinical relationship to the craniopharyngeal canal.",
    ],
  },
  {
    name: "Olfactory neuroblastoma",
    category: "Other sinonasal tumor",
    behavior: "Malignant; grade and stage inform prognosis",
    clinical: [
      "Can occur from childhood to old age (reported range 2–90 years), with a peak in the fifth to sixth decades.",
      "Slight male predominance.",
      "Arises in the specialized olfactory mucosa: cribriform plate, superior turbinate, or superior half of the nasal septum.",
      "Presents most often with nasal obstruction; epistaxis, discharge, pain, anosmia, orbital symptoms, or intracranial symptoms may occur.",
    ],
    criteria: [
      "Tumor centered at the superior nasal cavity / ethmoid cribriform plate region; reconsider the diagnosis when the cribriform plate is uninvolved and another site is proposed.",
      "Small round cell neoplasm with lobular / nested architecture and variable neuropil.",
      "Neuroendocrine marker expression with S100-positive sustentacular cells in a characteristic peripheral pattern (may be absent in high-grade tumors).",
      "Assess Hyams grade using architecture, pleomorphism, neuropil / rosettes, mitotic activity, necrosis, and calcification.",
    ],
    histology: [
      [
        "Low-grade pattern",
        "Submucosal, sharply demarcated nests, lobules, or sheets separated by richly vascular stroma.",
      ],
      [
        "Cytology",
        "Uniform cells with salt-and-pepper chromatin and fibrillary cytoplasm.",
      ],
      [
        "Neuropil",
        "Interdigitating neuronal processes form a fibrillary neuropil background.",
      ],
      [
        "Rosettes",
        "Homer Wright pseudorosettes and Flexner–Wintersteiner rosettes may be present; rosettes alone are not diagnostic.",
      ],
      [
        "High-grade pattern",
        "More sheet-like growth, loss of sustentacular cells, increased pleomorphism and mitotic activity, and tumor necrosis.",
      ],
      [
        "Other findings",
        "Concretion-like / psammomatous calcifications may occur, especially in lower-grade tumors.",
      ],
    ],
    ihc: [
      [
        "Synaptophysin / chromogranin / other neuroendocrine markers",
        "Typically diffuse tumor-cell expression.",
      ],
      [
        "S100",
        "Highlights sustentacular cells in a peripheral pattern around nests; the pattern may be reduced or lost in high-grade tumors.",
      ],
      [
        "Pancytokeratin",
        "Focal staining occurs in up to approximately one-third; occasional diffuse epithelial staining can complicate distinction from NEC or adenocarcinoma.",
      ],
      ["Ki-67", "Variable and associated with grade."],
      [
        "SSTR2",
        "Consistently expressed; may be useful for somatostatin-receptor imaging and targeted approaches.",
      ],
    ],
    differential: [
      [
        "Sinonasal neuroendocrine carcinoma",
        "Often shows more overt epithelial cytology, necrosis, and mitotic activity; keratin is usually more extensive. ONB typically has neuropil and sustentacular S100 pattern.",
      ],
      [
        "Small cell / large cell neuroendocrine carcinoma",
        "Use epithelial markers, neuroendocrine markers, morphology, and sustentacular-cell pattern; do not rely on neuroendocrine markers alone.",
      ],
      [
        "Ewing sarcoma",
        "CD99 / NKX2.2 and EWSR1::ETS fusion support Ewing sarcoma; neuropil and sustentacular S100 pattern favor ONB.",
      ],
      [
        "Rhabdomyosarcoma",
        "Desmin, myogenin, and MyoD1 support skeletal muscle differentiation; ONB may rarely show focal rhabdomyoblastic differentiation.",
      ],
      [
        "Lymphoma",
        "Leukocyte markers establish hematolymphoid lineage; ONB shows neuroendocrine differentiation and neuropil.",
      ],
      [
        "Sinonasal undifferentiated carcinoma",
        "Usually lacks convincing neuropil and sustentacular architecture; broad epithelial marker expression and molecular context help classification.",
      ],
    ],
    molecular: [
      "No single recurrent molecular alteration is diagnostic; ONB is genetically heterogeneous.",
      "Subsets harbor TP53, PIK3CA, NF1, or CDKN2A mutations; FGFR3 and CCND1 copy-number alterations / amplifications are reported.",
      "Molecular profiling is not routinely required to establish the diagnosis.",
    ],
    pitfalls: [
      "A small round cell tumor in the sinonasal tract requires active exclusion of other entities because treatment differs substantially.",
      "Rosettes alone do not establish ONB; integrate site, neuropil, neuroendocrine markers, and sustentacular S100 pattern.",
      "Focal keratin positivity does not exclude ONB.",
      "Hyams grade is prognostically important; sample adequately to assess high-grade areas.",
    ],
  },
];

const categories = [
  "All",
  "Sinonasal papilloma",
  "Mesenchymal tumor",
  "Other sinonasal tumor",
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
          {item}
        </li>
      ))}
    </ul>
  );
}

function DataTable({ rows }: { rows: Row[] }) {
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

export default function NasalParanasalSkullBaseTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Sinonasal papilloma, inverted",
    "Sinonasal glomangiopericytoma",
    "Biphenotypic sinonasal sarcoma",
    "Olfactory neuroblastoma",
  ]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const matchesCategory =
        category === "All" || entity.category === category;
      const searchable = [
        entity.name,
        entity.category,
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
      return matchesCategory && searchable.includes(normalized);
    });
  }, [query, category]);

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck Pathology / Nasal, Paranasal, and Skull
            Base Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Nasal, Paranasal, and Skull Base Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing essential
                criteria, focused immunohistochemistry, molecular findings, and
                practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the site and growth pattern before interpreting the
                panel.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Sinonasal tumors overlap morphologically. Integrate the anatomic
                epicenter, imaging, architecture, cytology, and targeted
                ancillary tests.
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
                "Confirm the epicenter",
                "Anterior septum, lateral nasal wall, olfactory cleft / cribriform plate, paranasal sinus, or skull base.",
              ],
              [
                "Classify the architecture",
                "Papillary / inverted epithelial, basaloid, spindle-cell, perivascular myoid, or small round-cell.",
              ],
              [
                "Assess behavior",
                "Look for destructive invasion, cytologic atypia, mitoses, necrosis, and bone / skull-base extension.",
              ],
              [
                "Use focused IHC",
                "Select markers to resolve lineage: myoid, neural, neuroendocrine, epithelial, or beta-catenin pathway.",
              ],
              [
                "Confirm selectively",
                "Use targeted molecular testing when it resolves a key differential or supports a characteristic entity.",
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
          <Panel title="Sinonasal papillomas: pattern-based distinction">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                    <th className="py-2 pr-3">Type</th>
                    <th className="py-2 pr-3">Typical site</th>
                    <th className="py-2 pr-3">Defining pattern</th>
                    <th className="py-2">Molecular clue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Inverted</td>
                    <td className="py-3 pr-3">
                      Lateral wall / ethmoid / maxillary
                    </td>
                    <td className="py-3 pr-3">
                      Endophytic nests and ribbons; intraepithelial neutrophils
                    </td>
                    <td className="py-3">EGFR; low-risk HPV subset</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Oncocytic</td>
                    <td className="py-3 pr-3">
                      Lateral wall / maxillary sinus
                    </td>
                    <td className="py-3 pr-3">
                      Oncocytic multilayered epithelium; mucin microcysts /
                      neutrophilic microabscesses
                    </td>
                    <td className="py-3">KRAS</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-3 font-semibold">Exophytic</td>
                    <td className="py-3 pr-3">Lower anterior septum</td>
                    <td className="py-3 pr-3">
                      Exophytic fibrovascular papillae; maturing multilayered
                      epithelium
                    </td>
                    <td className="py-3">Low-risk HPV 6 / 11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="High-yield IHC and molecular markers">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Glomangiopericytoma",
                      "SMA+, nuclear beta-catenin+, LEF1+, cyclin D1+; STAT6, S100, SOX10, ERG negative.",
                    ],
                    [
                      "Biphenotypic sinonasal sarcoma",
                      "S100+, SMA+, SOX10−; PAX3 fusion supports diagnosis.",
                    ],
                    [
                      "Olfactory neuroblastoma",
                      "Neuroendocrine markers diffuse; S100 highlights sustentacular cells.",
                    ],
                    [
                      "Adamantinomatous craniopharyngioma",
                      "Focal nuclear beta-catenin in epithelial whorls; CTNNB1 mutation.",
                    ],
                    [
                      "Sinonasal papillomas / ameloblastoma",
                      "No defining routine IHC profile established; morphology and site are central.",
                    ],
                  ].map(([name, markers]) => (
                    <tr key={name}>
                      <th className="py-3 pr-3 align-top font-semibold">
                        {name}
                      </th>
                      <td className="py-3 leading-6 text-slate-600">
                        {markers}
                      </td>
                    </tr>
                  ))}
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
                Search by entity, site, morphology, immunomarker, or gene.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. beta-catenin, PAX3, neuropil, neutrophils..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === item
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
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
                          {entity.category}
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
                            Immunohistochemistry
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

        <Panel title="Practical biopsy and reporting checklist">
          <Bullets
            items={[
              "Document the exact anatomic epicenter and correlate with CT / MRI, especially for cribriform plate, skull-base, orbital, and intracranial extension.",
              "For papillomas, sample the attachment and all areas with altered architecture, atypia, or suspected invasion.",
              "For spindle-cell lesions, assess infiltrative growth, bone involvement, mitotic activity, and necrosis; use a focused panel rather than a broad indiscriminate panel.",
              "For suspected olfactory neuroblastoma, document Hyams grade and evaluate for sustentacular cells, neuropil, and high-grade areas.",
              "State limitations when decalcification or small biopsy material may compromise fusion testing or assessment of invasion.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Diagnostic note:</b> Immunohistochemical
          and molecular findings should be interpreted in the context of
          morphology and anatomic site. A marker result alone is not a
          substitute for adequate sampling and clinicoradiologic correlation.
        </footer>
      </div>
    </main>
  );
}
