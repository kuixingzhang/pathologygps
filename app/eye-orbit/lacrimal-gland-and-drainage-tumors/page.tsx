"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  site: "Lacrimal gland" | "Lacrimal drainage system" | "Both / site-dependent";
  category: string;
  clinical: string[];
  criteria: string[];
  histo: string[];
  ihc: string[];
  diff: string[];
  molecular: string[];
};

const entities: Entity[] = [
  {
    name: "Dacryops cyst",
    site: "Lacrimal gland",
    category: "Benign cystic lesion",
    clinical: [
      "Usually adults in the fourth to fifth decades, but any age; no consistent sex predilection.",
      "Most often arises in the palpebral lobe; typically presents as painless eyelid fullness, localized swelling, or mild irritation.",
    ],
    criteria: [
      "Cyst lined by nonkeratinizing, two-layered columnar-to-cuboidal epithelium with scattered goblet cells.",
      "Residual lacrimal acini and variably dilated ducts are present in the cyst wall.",
      "Imaging typically shows a well-defined fluid-filled lesion without a solid enhancing nodule.",
    ],
    histo: [
      "The lining is composed of two layers of bland columnar or cuboidal cells.",
      "Scattered goblet cells and apical projections may be present.",
      "The lumen may contain eosinophilic or mucoid secretions.",
      "The cyst wall may show residual acini, dilated ducts, chronic inflammation, and fibrosis.",
    ],
    ihc: [
      "CK7 and CK18 highlight the lining epithelium.",
      "The lining is generally negative for CK17, SMA, S100, and GCDFP-15.",
    ],
    diff: [
      "Conjunctival inclusion cyst: usually squamous epithelial lining and no residual lacrimal acini in the wall.",
      "Respiratory epithelial cyst: ciliated respiratory-type lining.",
      "Lymphoma or epithelial neoplasm: solid tissue component or nodular enhancement rather than a simple cyst.",
    ],
    molecular: ["No established diagnostic molecular alteration."],
  },
  {
    name: "Pleomorphic adenoma",
    site: "Lacrimal gland",
    category: "Benign epithelial-myoepithelial neoplasm",
    clinical: [
      "Mean age approximately 40 years; broad age range; no established sex predilection.",
      "Usually arises in the orbital lobe and presents as a slowly enlarging, painless superotemporal mass with proptosis or globe displacement; diplopia may occur.",
    ],
    criteria: [
      "Well-circumscribed lacrimal fossa mass, usually with smooth bony remodeling rather than destructive erosion.",
      "Admixture of ductal epithelial cells, myoepithelial cells, and variable chondromyxoid or fibrous stroma.",
      "No destructive invasion or overt malignant cytology.",
      "Intact excision is important; avoid incisional biopsy when pleomorphic adenoma is strongly suspected clinically.",
    ],
    histo: [
      "Bilayered ducts are admixed with variable epithelial and myoepithelial components.",
      "Myoepithelial cells may be spindle, plasmacytoid, clear, epithelioid, or squamoid.",
      "Stroma may be myxoid, chondroid, hyaline, fibrous, or osseous.",
      "Pseudocapsular protrusions and satellite nodules explain the risk of recurrence after incomplete excision.",
    ],
    ihc: [
      "Luminal cells express CK7 and CAM5.2.",
      "Myoepithelial cells express p40, p63, SMA, and calponin.",
      "Nuclear PLAG1 and/or HMGA2 expression may support the diagnosis; Ki-67 is usually very low.",
    ],
    diff: [
      "Myoepithelioma: predominantly or exclusively myoepithelial cells with little or no ductal component.",
      "Adenoid cystic carcinoma: infiltrative biphasic growth, basaloid cytology, and frequent perineural invasion.",
      "Carcinoma ex pleomorphic adenoma: malignant component, atypia, and/or invasion in association with pleomorphic adenoma.",
    ],
    molecular: [
      "PLAG1 rearrangements are common; HMGA2 rearrangements occur in a subset.",
      "These alterations can help establish a pleomorphic adenoma component in selected cases.",
    ],
  },
  {
    name: "Lacrimal gland oncocytoma",
    site: "Both / site-dependent",
    category: "Benign oncocytic epithelial neoplasm",
    clinical: [
      "Typically adults in the sixth to eighth decades; slight female predominance.",
      "May arise in main or accessory lacrimal glands; presents as a well-defined mass, proptosis, eyelid fullness, caruncular enlargement, or lacrimal drainage obstruction depending on site.",
    ],
    criteria: [
      "Well-delineated epithelial neoplasm composed of oncocytes with abundant granular eosinophilic cytoplasm.",
      "Solid, papillary, or cystic architecture may be present.",
      "Absence of destructive invasion, significant atypia, and brisk mitotic activity supports oncocytoma rather than oncocytic carcinoma.",
    ],
    histo: [
      "Polygonal cells have abundant finely granular eosinophilic cytoplasm rich in mitochondria.",
      "Cells form sheets, nests, trabeculae, or papillary/cystic structures.",
      "Nuclei are generally bland with vesicular chromatin and a conspicuous nucleolus.",
      "Oncocytic carcinoma shows atypia, mitoses, and invasion of adjacent soft tissue or bone.",
    ],
    ihc: [
      "Antimitochondrial staining may highlight the abundant mitochondria.",
      "CK7 and other ductal cytokeratins and EMA are typically positive.",
      "Ki-67 is usually very low in oncocytoma.",
    ],
    diff: [
      "Oncocytic carcinoma: destructive invasion, cytologic atypia, and mitotic activity.",
      "Ductal adenocarcinoma: malignant ductal growth with pleomorphism and often comedonecrosis, without the characteristic mitochondrial accumulation.",
      "Metastatic oncocytic neoplasm: exclude a nonocular primary clinically.",
    ],
    molecular: [
      "No recurrent, diagnostically established molecular alteration is defined for lacrimal oncocytoma.",
    ],
  },
  {
    name: "Myoepithelioma and myoepithelial carcinoma",
    site: "Lacrimal gland",
    category: "Myoepithelial neoplasms",
    clinical: [
      "Rare; broad age range; both sexes are affected.",
      "Usually a slow-growing, painless superotemporal orbital mass causing proptosis, globe displacement, or ptosis; carcinoma may show more rapid growth or fixation.",
    ],
    criteria: [
      "Myoepithelial neoplasm composed of a relatively uniform population of cells with myoepithelial differentiation.",
      "Myoepithelioma is circumscribed and lacks destructive invasion.",
      "Myoepithelial carcinoma is diagnosed by invasion into gland, orbital soft tissue, bone, or perineural spaces; cytologic atypia may be variable.",
    ],
    histo: [
      "Cells may be spindle, plasmacytoid, epithelioid, or clear and grow in sheets or trabeculae.",
      "Ducts, microcysts, mucinous foci, and hyalinized fibrous areas may occur.",
      "Carcinoma may be cytologically bland; infiltrative growth is the key malignant feature.",
    ],
    ihc: [
      "Tumor cells express cytokeratins, including CK7 and CK14.",
      "S100, p63, SMA, muscle-specific actin, and calponin are variably positive.",
      "GFAP may be positive in a subset.",
    ],
    diff: [
      "Pleomorphic adenoma: conspicuous chondromyxoid stroma and a more evident ductal component.",
      "Adenoid cystic carcinoma: dual ductal/myoepithelial population with characteristic cribriform or tubular architecture and hyaline basement-membrane material.",
      "Epithelial-myoepithelial carcinoma: distinct inner ductal and outer myoepithelial cell layers.",
    ],
    molecular: [
      "No validated lacrimal-specific molecular test is established; EWSR1 rearrangements and 12q alterations are described mainly in salivary counterparts and should be interpreted cautiously.",
    ],
  },
  {
    name: "Intraductal carcinoma",
    site: "Lacrimal gland",
    category: "In situ / intraductal carcinoma",
    clinical: [
      "Exceptionally rare in the lacrimal gland; only isolated cases reported.",
      "Reported presentation includes proptosis and inferomedial globe displacement.",
    ],
    criteria: [
      "Well-circumscribed lobules of neoplastic ductal cells are completely surrounded by a continuous peripheral myoepithelial layer.",
      "No stromal invasion should be identified.",
    ],
    histo: [
      "Round lobules show solid, cribriform, papillary-cystic, or micropapillary architecture.",
      "Ductal cells are large and polygonal with amphophilic or oncocytic cytoplasm and usually low-grade atypia.",
      "Eosinophilic secretions may fill cystic spaces.",
    ],
    ihc: [
      "Intercalated-duct and oncocytic types may express CK19, S100, SOX10, and mammaglobin.",
      "Apocrine-type tumors may express AR and GCDFP-15.",
      "The peripheral myoepithelial layer expresses p63, p40, CK5/6, calponin, and SMA.",
    ],
    diff: [
      "Invasive carcinoma: loss of the continuous peripheral myoepithelial layer and stromal invasion.",
      "Adenoid cystic carcinoma: infiltrative growth and characteristic basement-membrane-rich cribriform pattern.",
      "Pleomorphic adenoma: mixed epithelial-myoepithelial proliferation with chondromyxoid stroma.",
    ],
    molecular: [
      "RET rearrangements, including NCOA4::RET, are described in salivary intraductal carcinoma; molecular confirmation may support the diagnosis, but FISH can be falsely negative.",
    ],
  },
  {
    name: "Carcinoma ex pleomorphic adenoma",
    site: "Lacrimal gland",
    category: "Malignant epithelial neoplasm arising in pleomorphic adenoma",
    clinical: [
      "Median age approximately 56 years; no clear sex predilection.",
      "A longstanding or recurrent lacrimal fossa mass may suddenly enlarge, become painful or fixed, or cause proptosis, globe displacement, or skin ulceration.",
    ],
    criteria: [
      "Malignant epithelial and/or myoepithelial component arising in association with a primary or recurrent pleomorphic adenoma.",
      "Identify residual or hyalinized remnants of pleomorphic adenoma; extensive sampling may be required.",
      "Document capsular and extracapsular invasion when assessable.",
    ],
    histo: [
      "A transition between residual pleomorphic adenoma and carcinoma may be demonstrable.",
      "The malignant component may show ductal adenocarcinoma, squamous, mucoepidermoid, myoepithelial, or adenoid cystic differentiation.",
      "Perineural, lymphovascular, and bone invasion may be present.",
    ],
    ihc: [
      "PLAG1 and HMGA2 may highlight the underlying pleomorphic adenoma component.",
      "The carcinoma component may show increased Ki-67, p53, or MYC expression.",
      "AR may support ductal/apocrine differentiation.",
    ],
    diff: [
      "De novo ductal adenocarcinoma or other primary carcinoma: lacks an associated pleomorphic adenoma component or convincing molecular evidence of one.",
      "Recurrent benign pleomorphic adenoma: lacks malignant cytology and destructive invasion.",
      "Metastatic carcinoma: correlate with clinical history and imaging.",
    ],
    molecular: [
      "PLAG1 or HMGA2 rearrangements support an underlying pleomorphic adenoma and may help distinguish carcinoma ex pleomorphic adenoma from de novo carcinoma.",
    ],
  },
  {
    name: "Adenoid cystic carcinoma",
    site: "Lacrimal gland",
    category: "Malignant epithelial neoplasm",
    clinical: [
      "Most often middle-aged adults, with a smaller childhood peak; slight female predominance.",
      "Usually orbital lobe; rapidly progressive superotemporal mass with proptosis and inferomedial globe displacement. Pain or paresthesia strongly raises concern for perineural invasion.",
    ],
    criteria: [
      "Malignant biphasic epithelial and myoepithelial neoplasm with tubular, cribriform, and/or solid-basaloid growth.",
      "Basophilic or hyalinized basement-membrane-like material is characteristic.",
      "Perineural invasion is common and should be actively sought.",
    ],
    histo: [
      "Cribriform architecture contains pseudocystic spaces filled with basophilic or hyaline material.",
      "Tubular areas show small glandular structures with dual cell populations.",
      "Solid-basaloid areas are associated with more aggressive behavior.",
      "High-grade transformation may show comedonecrosis, marked atypia, and increased mitoses.",
    ],
    ihc: [
      "Luminal cells express cytokeratins; abluminal cells express myoepithelial markers.",
      "MYB and KIT may be positive but are not fully sensitive or specific.",
      "Ki-67 is often increased, particularly in solid areas.",
    ],
    diff: [
      "Pleomorphic adenoma: circumscribed, noninvasive, with chondromyxoid stroma.",
      "Myoepithelial carcinoma: lacks the characteristic dual ductal/basaloid pattern and basement-membrane-rich cribriform structures.",
      "Basal cell adenocarcinoma and epithelial-myoepithelial carcinoma: compare architecture and immunophenotype.",
    ],
    molecular: [
      "MYB::NFIB or MYBL1::NFIB fusions are recurrent and diagnostically useful in selected cases.",
      "NOTCH pathway alterations occur in a subset and are associated with more aggressive, often solid-pattern tumors.",
    ],
  },
  {
    name: "Primary ductal adenocarcinoma",
    site: "Lacrimal gland",
    category: "High-grade malignant epithelial neoplasm",
    clinical: [
      "Typically older adults, mean age approximately 58 years; reported male predominance.",
      "Presents with a painless or painful lacrimal fossa mass, proptosis, ptosis, diplopia, or visual decline; imaging often shows an irregular heterogeneous mass with possible bone erosion.",
    ],
    criteria: [
      "Invasive adenocarcinoma with ductal differentiation arising de novo in the lacrimal gland.",
      "Exclude carcinoma ex pleomorphic adenoma and metastasis, particularly breast carcinoma.",
      "Comedonecrosis and an apocrine phenotype support the diagnosis.",
    ],
    histo: [
      "Polygonal cells with granular eosinophilic cytoplasm, pleomorphic vesicular nuclei, and prominent nucleoli.",
      "Glandular, cribriform, and solid ductal patterns are common.",
      "Central comedonecrosis is frequent; perineural, lymphovascular, and bone invasion may occur.",
    ],
    ihc: [
      "Tumor cells express pancytokeratin, CK7, EMA, AR, and GCDFP-15.",
      "ERBB2/HER2 may be overexpressed or amplified.",
      "Myoepithelial markers are usually negative; ER and PR are generally negative.",
    ],
    diff: [
      "Carcinoma ex pleomorphic adenoma: residual PA component or PLAG1/HMGA2 alteration.",
      "Metastatic breast ductal carcinoma: clinical/radiologic correlation and appropriate breast markers.",
      "Adenocarcinoma NOS: lacks the characteristic ductal/apocrine phenotype and comedonecrosis.",
    ],
    molecular: [
      "ERBB2 amplification is present in a subset and may have therapeutic relevance.",
    ],
  },
  {
    name: "Secretory carcinoma",
    site: "Both / site-dependent",
    category: "Rare malignant epithelial neoplasm",
    clinical: [
      "Reported lacrimal gland cases include adults in the third to sixth decades; sex distribution is uncertain.",
      "May present as a circumscribed lacrimal fossa mass with painless proptosis or diplopia; also reported in eyelid/accessory lacrimal tissue.",
    ],
    criteria: [
      "Monophasic carcinoma with secretory/vacuolated cytoplasm and luminal secretions.",
      "S100, mammaglobin, and pan-TRK/NTRK immunoreactivity support the diagnosis.",
      "Confirm an ETV6-related fusion when needed.",
    ],
    histo: [
      "Papillary-cystic, solid, and microfollicular patterns may coexist.",
      "Cells are round to ovoid with pale eosinophilic, often focally vacuolated cytoplasm.",
      "Intracytoplasmic zymogen granules and goblet cells are absent.",
    ],
    ihc: [
      "S100, mammaglobin, CK18, and NTRK are typically positive.",
      "p63, CK5, DOG1, and AR are generally negative.",
      "Ki-67 is often low in reported cases.",
    ],
    diff: [
      "Acinic cell carcinoma: zymogen granules and NR4A3 expression/rearrangement; usually lacks the secretory carcinoma immunophenotype.",
      "Myoepithelial neoplasm: broader myoepithelial marker expression.",
      "Metastatic secretory carcinoma: exclude a primary elsewhere.",
    ],
    molecular: [
      "ETV6::NTRK3 is the characteristic fusion in most cases; other ETV6 partners are possible.",
      "NTRK fusion identification may guide TRK inhibitor therapy in unresectable or metastatic disease.",
    ],
  },
  {
    name: "Mucoepidermoid carcinoma",
    site: "Both / site-dependent",
    category: "Malignant epithelial neoplasm",
    clinical: [
      "Lacrimal gland cases typically present around the fifth decade; younger patients may be affected.",
      "Usually a slowly enlarging lacrimal fossa mass; occasionally painful proptosis. Drainage-system tumors typically cause unilateral epiphora and a medial canthal mass.",
    ],
    criteria: [
      "Mixture of mucous, epidermoid/squamoid, and intermediate cells in variable proportions.",
      "Low-grade tumors are often cystic and mucous-cell rich; high-grade tumors are more solid with increased squamoid/intermediate cells.",
      "Use mucin stains when mucous cells are inconspicuous.",
    ],
    histo: [
      "Mucous cells form glands and cysts containing mucin.",
      "Epidermoid cells have eosinophilic cytoplasm and intercellular bridges; keratinization is variable.",
      "Intermediate cells have oval nuclei and scant to faintly eosinophilic cytoplasm.",
      "Grade using architecture, cystic component, necrosis, mitoses, atypia, and invasion.",
    ],
    ihc: [
      "CK5/6, CK7, and CK14 are commonly positive.",
      "Mucin markers may highlight mucous cells; p63 may be focal.",
      "Myoepithelial markers are generally negative.",
    ],
    diff: [
      "Squamous cell carcinoma: lacks a convincing mucous-cell component.",
      "Adenosquamous carcinoma: true glandular and squamous differentiation, often with an in situ component.",
      "Pleomorphic adenoma with mucous/squamous metaplasia: bland architecture and myoepithelial/chondromyxoid component.",
    ],
    molecular: [
      "CRTC1::MAML2 is a useful recurrent alteration in lacrimal gland mucoepidermoid carcinoma.",
      "A CRTC1/3::MAML2 fusion has not been identified in reported lacrimal sac tumors; do not assume the fusion is present in drainage-system cases.",
    ],
  },
  {
    name: "Epithelial-myoepithelial carcinoma",
    site: "Lacrimal gland",
    category: "Low-grade malignant biphasic epithelial neoplasm",
    clinical: [
      "Usually middle-aged or older adults; reported median age approximately 60 years, with slight male predominance.",
      "Slow-growing painless orbital mass with proptosis; some cases show pain, diplopia, or restricted ocular motility.",
    ],
    criteria: [
      "Usually multinodular invasive tumor with a biphasic ductal and myoepithelial arrangement.",
      "Inner ductal cells are surrounded by larger outer myoepithelial cells, often clear.",
      "Assess for high-grade transformation, necrosis, and perineural invasion.",
    ],
    histo: [
      "Tubules have inner eosinophilic ductal cells and outer clear or pale myoepithelial cells.",
      "The outer layer may be single or multilayered; solid areas and variant patterns may occur.",
      "Invasion is often multinodular; high-grade transformation is uncommon.",
    ],
    ihc: [
      "Inner cells express pancytokeratin and CK7.",
      "Outer cells express p63, SMA, calponin, and S100.",
      "RAS p.Q61R immunoreactivity may be present in the myoepithelial component.",
    ],
    diff: [
      "Adenoid cystic carcinoma: basaloid cells and basement-membrane-rich cribriform/tubular structures, often MYB altered.",
      "Pleomorphic adenoma: chondromyxoid stroma and lack of infiltrative growth.",
      "Myoepithelial carcinoma: lacks the orderly inner ductal/outer myoepithelial arrangement.",
    ],
    molecular: [
      "HRAS mutations, particularly codon 61 alterations, support the diagnosis.",
      "MYB fusion testing may help exclude adenoid cystic carcinoma in difficult cases.",
    ],
  },
  {
    name: "Acinic cell carcinoma",
    site: "Lacrimal gland",
    category: "Malignant epithelial neoplasm with acinar differentiation",
    clinical: [
      "Extremely rare; most reported patients are in their fifties, with slight female predominance.",
      "May be asymptomatic or present as a slowly growing painless lacrimal fossa mass with proptosis or globe displacement.",
    ],
    criteria: [
      "Malignant epithelial tumor showing serous acinar differentiation.",
      "Look for basophilic cytoplasmic granules that are PAS-positive and diastase-resistant.",
      "In challenging cases, exclude secretory carcinoma with immunohistochemistry and molecular testing.",
    ],
    histo: [
      "Solid, acinar, microcystic, papillary-cystic, or follicular patterns may occur.",
      "Cells are polygonal with abundant basophilic granular cytoplasm and small central or eccentric nuclei.",
      "High-grade transformation shows pleomorphism, increased mitoses, necrosis, and possible perineural or vascular invasion.",
    ],
    ihc: [
      "DOG1 and SOX10 may be positive, particularly with acinar/intercalated duct differentiation.",
      "Nuclear NR4A3 or NR4A2 is highly useful in difficult cases.",
      "p63, S100, and mammaglobin are usually negative.",
    ],
    diff: [
      "Secretory carcinoma: often S100/mammaglobin positive and ETV6::NTRK3 fusion-positive; NR4A3 usually negative.",
      "Normal lacrimal acini: preserved lobular architecture without an infiltrative neoplasm.",
      "Mucoepidermoid carcinoma: mucous, epidermoid, and intermediate cell populations.",
    ],
    molecular: [
      "NR4A3 rearrangement is diagnostically useful; NR4A3 immunohistochemistry is a practical surrogate.",
      "Salivary acinic cell carcinoma commonly shows enhancer-hijacking rearrangements involving NR4A3; apply molecular findings in the appropriate lacrimal context.",
    ],
  },
  {
    name: "Adenocarcinoma, NOS",
    site: "Both / site-dependent",
    category: "Malignant epithelial neoplasm",
    clinical: [
      "Lacrimal gland cases usually affect older adults, mean age approximately 50–52 years, with reported male predominance.",
      "Presents with upper eyelid swelling, ptosis, nonaxial proptosis, diplopia, pain, or visual decline; imaging may show irregular margins and bone erosion.",
      "Drainage-system cases typically present in the sixth to seventh decades with epiphora and an immobile medial canthal mass; bloody tearing is concerning.",
    ],
    criteria: [
      "Invasive gland-forming malignant epithelial neoplasm that does not meet criteria for a more specific carcinoma type.",
      "Exclude metastasis and carcinoma arising in pleomorphic adenoma or oncocytoma.",
      "For drainage-system tumors, document mucosal relationship, invasion, and any associated precursor lesion.",
    ],
    histo: [
      "Glands, tubules, cribriform structures, cords, nests, or single infiltrating cells may be present.",
      "Cytologic atypia ranges from mild to marked; eosinophilic granular cytoplasm and prominent nucleoli may occur.",
      "Mucin production, oncocytic/apocrine features, mitoses, perineural invasion, and lymphovascular invasion are variable.",
    ],
    ihc: [
      "Pancytokeratin and CK7 are commonly positive.",
      "AR and GCDFP-15 support apocrine/ductal differentiation, particularly in drainage-system tumors.",
      "ERBB2 expression is variable; use a panel to exclude specific salivary-type carcinomas and metastases.",
    ],
    diff: [
      "Primary ductal adenocarcinoma: more characteristic apocrine phenotype, comedonecrosis, and possible ERBB2 amplification.",
      "Carcinoma ex pleomorphic adenoma: residual PA or PLAG1/HMGA2 alteration.",
      "Metastatic carcinoma: clinical history, imaging, and site-directed immunohistochemistry.",
    ],
    molecular: [
      "No defining alteration; fusion testing or targeted sequencing may help exclude fusion-defined carcinomas such as adenoid cystic or mucoepidermoid carcinoma.",
    ],
  },
  {
    name: "Squamous and inverted papillomas",
    site: "Lacrimal drainage system",
    category:
      "Benign epithelial neoplasms with recurrence / malignant potential considerations",
    clinical: [
      "Usually adults; often presents with epiphora, recurrent dacryocystitis, or a medial canthal/lacrimal sac mass.",
      "May extend along the nasolacrimal duct; unilateral obstruction is typical.",
    ],
    criteria: [
      "Papillary or inverted epithelial proliferation arising from the lacrimal sac or nasolacrimal duct mucosa.",
      "Evaluate the entire lesion for dysplasia, carcinoma in situ, and invasive squamous cell carcinoma.",
      "Inverted lesions show endophytic epithelial growth into the underlying stroma.",
    ],
    histo: [
      "Squamous papilloma shows exophytic papillary fronds with fibrovascular cores.",
      "Inverted papilloma shows broad endophytic nests and ribbons of squamous/transitional epithelium.",
      "Mucocytes, microcysts, and variable inflammation may be present; atypia and invasion indicate progression.",
    ],
    ihc: [
      "Broad-spectrum cytokeratins and p40/p63 highlight squamous differentiation.",
      "Ki-67 and p53 may be increased in dysplastic or malignant areas but are not independently diagnostic.",
    ],
    diff: [
      "Invasive squamous cell carcinoma: destructive stromal invasion, atypia, and mitotic activity.",
      "Reactive epithelial hyperplasia: lacks organized papillomatous or inverted architecture.",
      "Sinonasal papilloma extending into the drainage system: assess anatomic epicenter and sinonasal involvement.",
    ],
    molecular: [
      "HPV has been investigated in papillomatous lesions, but no single molecular test is required for routine diagnosis.",
    ],
  },
  {
    name: "Squamous cell carcinoma of the lacrimal drainage system",
    site: "Lacrimal drainage system",
    category: "Malignant epithelial neoplasm",
    clinical: [
      "Usually middle-aged or older adults; often presents with unilateral epiphora, recurrent dacryocystitis, and a firm medial canthal mass.",
      "Bloody tearing, pain, fixation, or extension beyond the sac raises concern for malignancy.",
    ],
    criteria: [
      "Malignant squamous epithelial tumor arising from lacrimal sac or nasolacrimal duct mucosa.",
      "Distinguish keratinizing from nonkeratinizing morphology and assess invasion, grade, and extent.",
      "Exclude direct extension from conjunctival, cutaneous, or sinonasal carcinoma.",
    ],
    histo: [
      "Keratinizing tumors show nests and tongues of atypical squamous cells, intercellular bridges, and variable keratinization.",
      "Nonkeratinizing tumors show large nests, lobules, or ribbons of malignant cells with less overt keratinization.",
      "Comedonecrosis, desmoplasia, mitoses, and inflammatory background may be present.",
    ],
    ihc: [
      "Pancytokeratin, CK5/6, p40, and p63 are typically positive.",
      "BerEP4, CK20, adipophilin, and melanocytic/neuroendocrine markers are generally negative.",
    ],
    diff: [
      "Mucoepidermoid carcinoma: contains mucous and intermediate cells.",
      "Sebaceous carcinoma: adipophilin-positive sebaceous differentiation.",
      "Lymphoepithelial carcinoma: prominent accompanying lymphoplasmacytic infiltrate.",
      "Metastatic or directly extending SCC: establish the primary site clinically and radiologically.",
    ],
    molecular: [
      "HPV testing is not routinely used to classify squamous cell carcinoma at this site.",
    ],
  },
  {
    name: "Lymphoepithelial carcinoma",
    site: "Lacrimal drainage system",
    category: "Malignant epithelial neoplasm with lymphoid stroma",
    clinical: [
      "Typically adults; limited case numbers preclude a reliable sex or age profile.",
      "Often presents over 1–24 months with epiphora and a hard, nontender, immobile mass above the medial canthal tendon.",
    ],
    criteria: [
      "Undifferentiated malignant epithelial cells occur in a dense, heterogeneous lymphoid and plasma-cell background.",
      "Confirm epithelial lineage and assess for EBV association.",
      "Exclude metastasis or direct extension from a nasopharyngeal or other primary lymphoepithelial carcinoma.",
    ],
    histo: [
      "Large polygonal malignant cells form sheets, clusters, and isolated cells.",
      "Tumor cells have vesicular nuclei and prominent central nucleoli.",
      "The background contains mixed lymphocytes, plasma cells, and macrophages.",
    ],
    ihc: [
      "Tumor cells express pancytokeratin, CK5/6, CK14, EMA, and p63.",
      "EBER in situ hybridization may demonstrate EBV in tumor cells.",
    ],
    diff: [
      "Lymphoma: lymphoid cells are the neoplastic population and lack epithelial marker expression.",
      "Chronic dacryocystitis: reactive mixed inflammation without malignant epithelial cells.",
      "Metastatic nasopharyngeal carcinoma: correlate with nasopharyngeal examination and imaging.",
    ],
    molecular: [
      "EBER in situ hybridization is useful for establishing EBV association; no other defining molecular test is established.",
    ],
  },
  {
    name: "Other salivary gland-type carcinomas of the lacrimal drainage system",
    site: "Lacrimal drainage system",
    category: "Salivary-type malignant epithelial neoplasms",
    clinical: [
      "Usually adults; often presents with unilateral tearing and a firm, immobile medial canthal/lacrimal sac mass.",
      "Sanguineous reflux on irrigation, a noncompressible mass above the medial canthal tendon, or persistent dacryocystitis is concerning for malignancy.",
    ],
    criteria: [
      "Classify according to the specific salivary-type carcinoma morphology: adenoid cystic, epithelial-myoepithelial, carcinoma ex pleomorphic adenoma, ductal adenocarcinoma, oncocytic carcinoma, or sebaceous carcinoma.",
      "Determine whether the lesion is primary to the drainage system or represents direct extension/metastasis.",
      "Assess perineural, lymphovascular, and bone invasion.",
    ],
    histo: [
      "Ductal adenocarcinoma shows pleomorphic polygonal cells in glandular, cribriform, or solid patterns, often with comedonecrosis.",
      "Adenoid cystic carcinoma, epithelial-myoepithelial carcinoma, and carcinoma ex pleomorphic adenoma reproduce their characteristic counterparts at other sites.",
      "Oncocytic carcinoma shows atypical oncocytes with invasion; sebaceous carcinoma shows sebaceous differentiation.",
    ],
    ihc: [
      "Ductal adenocarcinoma often expresses CK7, AR, GCDFP-15, and may express ERBB2.",
      "Use subtype-directed panels: MYB for adenoid cystic carcinoma, myoepithelial markers for biphasic tumors, and adipophilin for sebaceous differentiation.",
    ],
    diff: [
      "Adenocarcinoma NOS: lacks defining morphology of a specific salivary-type carcinoma.",
      "Oncocytic carcinoma versus ductal adenocarcinoma: the former shows abundant abnormal mitochondria.",
      "Direct extension from conjunctival or caruncular sebaceous carcinoma must be excluded.",
    ],
    molecular: [
      "MYB or MYBL1 rearrangements/fusions may support adenoid cystic carcinoma.",
      "ERBB2 amplification and AR expression may have therapeutic relevance in ductal adenocarcinoma.",
    ],
  },
  {
    name: "Melanoma involving the lacrimal drainage system",
    site: "Lacrimal drainage system",
    category: "Malignant melanocytic neoplasm",
    clinical: [
      "Extremely rare; mean age approximately 59 years.",
      "Usually arises in the lacrimal sac and presents with unilateral epiphora, medial canthal mass, bloody discharge, or epistaxis; may be mistaken for dacryocystitis.",
    ],
    criteria: [
      "Malignant melanocytic neoplasm involving the lacrimal sac/duct mucosa.",
      "Demonstrate melanocytic differentiation and exclude a previous or synchronous melanoma elsewhere.",
      "Assess extension into nasolacrimal duct, adjacent soft tissue, bone, and sinonasal structures.",
    ],
    histo: [
      "Mucosa and adjacent soft tissue are infiltrated by atypical spindle and/or epithelioid melanocytes.",
      "Cells contain variable granular melanin and show nuclear pleomorphism, prominent nucleoli, and mitotic activity.",
    ],
    ihc: ["Tumor cells express SOX10, S100, Melan-A, and HMB45."],
    diff: [
      "Pigmented epithelial carcinoma: cytokeratin-positive and melanocytic-marker negative.",
      "Metastatic melanoma: exclude a cutaneous, uveal, or other mucosal primary.",
      "Benign melanosis: lacks destructive invasion and malignant cytology.",
    ],
    molecular: [
      "BRAF p.V600E has been reported in an individual case; molecular testing may help guide therapy but is not defining.",
    ],
  },
];

const overview = [
  {
    group: "Cystic and benign epithelial lesions",
    overview:
      "Usually localized, slow-growing or incidental lesions. Diagnosis relies on the epithelial lining or the combination of ductal, myoepithelial, and stromal components.",
    entities: "Dacryops cyst; pleomorphic adenoma; oncocytoma; myoepithelioma",
  },
  {
    group: "Intraductal and low-grade biphasic neoplasms",
    overview:
      "Show organized ductal and myoepithelial populations. Demonstrating an intact peripheral myoepithelial layer or an invasive interface is central to classification.",
    entities: "Intraductal carcinoma; epithelial-myoepithelial carcinoma",
  },
  {
    group: "Primary lacrimal gland carcinomas",
    overview:
      "A heterogeneous group ranging from indolent secretory and acinic cell carcinomas to aggressive adenoid cystic and ductal adenocarcinomas. Molecular findings can be highly useful for selected subtypes.",
    entities:
      "Carcinoma ex pleomorphic adenoma; adenoid cystic carcinoma; primary ductal adenocarcinoma; secretory carcinoma; mucoepidermoid carcinoma; acinic cell carcinoma; adenocarcinoma NOS",
  },
  {
    group: "Lacrimal drainage epithelial tumors",
    overview:
      "Usually arise in the lacrimal sac or nasolacrimal duct and commonly present with unilateral epiphora or a medial canthal mass. Persistent obstruction, bloody tearing, or a firm immobile mass warrants tissue diagnosis.",
    entities:
      "Squamous/inverted papillomas; squamous cell carcinoma; lymphoepithelial carcinoma; mucoepidermoid carcinoma; salivary gland-type carcinomas; adenocarcinoma NOS",
  },
  {
    group: "Lacrimal drainage melanocytic tumor",
    overview:
      "Exceptionally rare mucosal melanoma, most often involving the lacrimal sac; exclude a primary melanoma elsewhere.",
    entities: "Melanoma involving the lacrimal drainage system",
  },
];

export default function LacrimalGlandAndDrainageTumorsPage() {
  const [query, setQuery] = useState("");
  const [siteFilter, setSiteFilter] = useState("All sites");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [expanded, setExpanded] = useState<string[]>([]);

  const categories = useMemo(
    () => [
      "All categories",
      ...Array.from(new Set(entities.map((e) => e.category))),
    ],
    [],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const matchesQuery =
        !q ||
        [
          e.name,
          e.site,
          e.category,
          ...e.clinical,
          ...e.criteria,
          ...e.histo,
          ...e.ihc,
          ...e.diff,
          ...e.molecular,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesSite = siteFilter === "All sites" || e.site === siteFilter;
      const matchesCategory =
        categoryFilter === "All categories" || e.category === categoryFilter;
      return matchesQuery && matchesSite && matchesCategory;
    });
  }, [query, siteFilter, categoryFilter]);

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );
  const expandAll = () => setExpanded(filtered.map((e) => e.name));
  const collapseAll = () => setExpanded([]);

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 text-slate-800">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          Ophthalmic Pathology
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
          Lacrimal Gland and Drainage System Tumors
        </h1>
        <p className="max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for epithelial, myoepithelial, and
          melanocytic lesions of the lacrimal gland, lacrimal sac, and
          nasolacrimal drainage pathway. The anatomic site is essential because
          the tumor spectrum, presentation, and differential diagnosis differ
          between the gland and drainage system.
        </p>
      </header>

      <section className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Diagnostic Overview
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Major groups, their typical behavior, and representative entities.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Tumor group</th>
                <th className="px-4 py-3">Overview</th>
                <th className="px-4 py-3">Representative entities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {overview.map((row) => (
                <tr key={row.group} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {row.group}
                  </td>
                  <td className="px-4 py-3 leading-6">{row.overview}</td>
                  <td className="px-4 py-3 leading-6">{row.entities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          <label className="block md:col-span-1">
            <span className="mb-1 block text-sm font-medium text-slate-700">
              Search diagnoses, morphology, markers, or molecular findings
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. MYB, epiphora, PLAG1, perineural invasion"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">
              Anatomic site
            </span>
            <select
              value={siteFilter}
              onChange={(e) => setSiteFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              <option>All sites</option>
              <option>Lacrimal gland</option>
              <option>Lacrimal drainage system</option>
              <option>Both / site-dependent</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">
              Tumor category
            </span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{entities.length}</strong> entities
          </p>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50"
            >
              Collapse all
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <span className="min-w-0">
                  <span className="block text-lg font-semibold text-slate-900">
                    {entity.name}
                  </span>
                  <span className="mt-1 flex flex-wrap gap-2">
                    <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">
                      {entity.site}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700">
                      {entity.category}
                    </span>
                  </span>
                </span>
                <span className="mt-1 text-xl text-slate-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="grid gap-x-8 gap-y-6 border-t border-slate-200 px-5 py-5 md:grid-cols-2">
                  <InfoSection
                    title="Clinical Profile"
                    items={entity.clinical}
                  />
                  <InfoSection
                    title="Essential Diagnostic Criteria"
                    items={entity.criteria}
                  />
                  <InfoSection title="Histopathology" items={entity.histo} />
                  <InfoSection title="Immunophenotype" items={entity.ihc} />
                  <InfoSection
                    title="Differential Diagnosis"
                    items={entity.diff}
                  />
                  <InfoSection
                    title="Molecular Pathology"
                    items={entity.molecular}
                  />
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500">
            No entities match the current search and filters.
          </div>
        )}
      </section>
      <p className="text-xs leading-5 text-slate-500">
        Diagnostic interpretation should integrate morphology, immunophenotype,
        molecular findings, imaging, and clinical history. Lacrimal drainage
        tumors should be distinguished from lacrimal gland primaries and from
        direct extension or metastasis.
      </p>
    </main>
  );
}

function InfoSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="min-w-0">
      <h3 className="mb-2 border-b border-slate-200 pb-1 text-sm font-semibold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
