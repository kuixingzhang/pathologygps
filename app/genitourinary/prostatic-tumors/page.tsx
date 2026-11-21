"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  category: string;
  site: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  diff: [string, string][];
  mol: string[];
  pit: string[];
};

const entities: Entity[] = [
  {
    name: "Prostatic Cystadenoma",
    category: "Benign glandular neoplasm",
    site: "Prostate, periprostatic/retrovesical region, or rarely retroperitoneum.",
    clinical: [
      "Reported across the third to ninth decades; approximately 30 cases have been described.",
      "May cause urinary obstruction, constipation, abdominal distention, or pain.",
      "Imaging often shows a large multiseptated mass; serum PSA is commonly elevated.",
    ],
    criteria: [
      "Large multiloculated cystic mass in or around the prostate.",
      "Cysts lined by bland prostatic secretory cells with an outer basal-cell layer.",
      "Fibrous or fibromuscular septa separate the cysts.",
      "No marked epithelial atypia.",
    ],
    histology: [
      "Cysts have a dual epithelial lining: low columnar or atrophic secretory cells and flattened outer basal cells.",
      "Focal bland papillae may be present.",
      "The surrounding stroma is fibromuscular or fibrotic and may be hyalinized or chronically inflamed.",
      "Squamous metaplasia may occur.",
    ],
    ihc: [
      "Secretory epithelium: PSA, PAP, and other prostate-lineage markers are positive.",
      "Basal cells: high-molecular-weight cytokeratin and p63 are positive.",
    ],
    diff: [
      [
        "Ductal adenocarcinoma / cystadenocarcinoma-like carcinoma",
        "Prominent intracystic papillary growth and cytologic atypia favor carcinoma rather than bland cystadenoma.",
      ],
      [
        "Seminal vesicle lesion",
        "Use prostate-lineage markers to confirm prostatic epithelial origin when the site is uncertain.",
      ],
    ],
    mol: ["No clinically useful diagnostic molecular test is established."],
    pit: [
      "Incomplete excision may lead to local recurrence; complete surgical excision is the treatment of choice.",
      "Rare coexistence with HGPIN or acinar adenocarcinoma has been reported.",
    ],
  },
  {
    name: "High-Grade Prostatic Intraepithelial Neoplasia (HGPIN)",
    category: "Glandular precursor lesion",
    site: "Most often peripheral zone; less commonly central or transition zones.",
    clinical: [
      "Usually identified incidentally in biopsies obtained during evaluation for prostate carcinoma.",
      "Isolated HGPIN does not cause clinical symptoms.",
      "Incidence increases with age.",
    ],
    criteria: [
      "Atypical, crowded, stratified secretory cells within pre-existing normal-sized or expanded ducts/acini.",
      "Enlarged hyperchromatic nuclei with conspicuous nucleoli.",
      "Basal-cell layer remains identifiable, although it may be discontinuous or attenuated.",
      "No necrosis, marked nuclear pleomorphism, or brisk mitotic activity.",
    ],
    histology: [
      "Tufting, micropapillary, and flat patterns are recognized; routine pattern designation is not clinically useful.",
      "Cells are multilayered with enlarged hyperchromatic nuclei and amphophilic cytoplasm.",
      "Prominent nucleoli are a key diagnostic requirement.",
      "Cribriform HGPIN is controversial; atypical intraductal proliferation is preferred for intraductal lesions that fall short of IDC-P.",
    ],
    ihc: [
      "High-molecular-weight cytokeratin and/or p63 can demonstrate residual basal cells.",
      "Basal-cell stains may help distinguish HGPIN from PIN-like adenocarcinoma and other mimics.",
    ],
    diff: [
      [
        "Intraductal carcinoma of the prostate (IDC-P)",
        "IDC-P has more complex expansile architecture, dense/solid cribriform growth and/or marked cytologic atypia; comedonecrosis may be present.",
      ],
      [
        "PIN-like adenocarcinoma",
        "PIN-like carcinoma shows crowded discrete glands lacking basal cells; HGPIN retains at least a discontinuous basal layer.",
      ],
      [
        "Benign glandular hyperplasia",
        "HGPIN has stratification, enlarged hyperchromatic nuclei, and conspicuous nucleoli.",
      ],
    ],
    mol: [
      "Somatic alterations overlap with prostate carcinoma, including GSTP1 epigenetic silencing, MYC amplification, TMPRSS2::ERG fusion (reported in 20–30%), and PTEN loss.",
      "Molecular testing is not clinically relevant for routine diagnosis.",
    ],
    pit: [
      "Do not diagnose low-grade PIN as a separate entity; it is not reproducibly distinguishable from benign glandular hyperplasia.",
      "Do not use the term cribriform HGPIN on needle biopsy; consider atypical intraductal proliferation when criteria for IDC-P are not met.",
    ],
  },
  {
    name: "Intraductal Carcinoma of the Prostate (IDC-P)",
    category: "Intraductal neoplasm",
    site: "Usually peripheral zone, commonly accompanying high-grade and high-volume invasive carcinoma.",
    clinical: [
      "Most often occurs with high-grade, high-stage invasive prostate cancer.",
      "Detected in prostate biopsy or prostatectomy specimens; isolated IDC-P is exceedingly rare.",
      "Its presence has adverse prognostic and clinical-management implications.",
    ],
    criteria: [
      "Expansile neoplastic epithelial proliferation within pre-existing ducts/acini, with at least partial basal-cell preservation.",
      "Lumen-spanning solid or dense cribriform architecture is the most widely accepted diagnostic pattern.",
      "Loose cribriform or micropapillary architecture requires marked cytologic atypia for diagnosis under commonly used criteria.",
      "Comedonecrosis strongly supports IDC-P.",
      "Atypical intraductal proliferation is preferred when an intraductal lesion falls short of IDC-P criteria.",
    ],
    histology: [
      "Solid and dense cribriform growth are characteristic; dense cribriform growth has more epithelial than luminal area (>50%).",
      "Loose cribriform and micropapillary patterns are more controversial and require careful assessment of cytologic atypia.",
      "Tumor cells may show enlarged pleomorphic or hyperchromatic nuclei, mitoses, and apoptotic bodies.",
      "Residual basal cells are at least partially retained.",
      "Cribriform architecture without cytologic atypia may occur in benign central-zone glands or prostatic hyperplasia.",
    ],
    ihc: [
      "Basal-cell markers (high-molecular-weight cytokeratin and/or p63) demonstrate residual basal cells.",
      "Basal-cell IHC is recommended for isolated IDC-P on biopsy without concomitant invasive carcinoma.",
      "Prostate-specific and urothelial markers can help in difficult cases involving possible urothelial intraductal spread.",
    ],
    diff: [
      [
        "HGPIN",
        "IDC-P is more architecturally complex and/or cytologically atypical; solid/dense cribriform growth and comedonecrosis favor IDC-P.",
      ],
      [
        "Atypical intraductal proliferation",
        "Use this descriptive category when intraductal atypia is greater than HGPIN but insufficient for IDC-P.",
      ],
      [
        "Invasive cribriform acinar carcinoma",
        "Basal-cell layer is absent in invasive carcinoma; IDC-P retains at least partial basal cells.",
      ],
      [
        "Urothelial carcinoma involving prostatic ducts",
        "Use prostate-lineage and urothelial markers; correlate with urothelial in situ disease.",
      ],
      [
        "Ductal adenocarcinoma",
        "Tall pseudostratified columnar cells and papillae with fibrovascular cores favor ductal adenocarcinoma.",
      ],
    ],
    mol: [
      "IDC-P commonly shares genomic alterations with aggressive invasive prostate carcinoma, including PTEN loss, MYC gain, and ERG rearrangement.",
      "PTEN loss is reported in up to approximately 85% of cases; ERG rearrangement is present in a majority of cases.",
      "Molecular testing is not routinely required to establish the diagnosis.",
    ],
    pit: [
      "Report IDC-P when present because it is associated with adverse outcome.",
      "Do not grade isolated IDC-P on biopsy; describe its presence and the usual association with aggressive invasive carcinoma.",
      "Whether IDC-P should be incorporated into Gleason grading when invasive carcinoma is present remains controversial.",
    ],
  },
  {
    name: "Prostatic Acinar Adenocarcinoma",
    category: "Malignant glandular neoplasm",
    site: "Most commonly posterior or posterolateral peripheral zone; less often anterior peripheral or transition zone.",
    clinical: [
      "Predominantly affects older men; many cases are asymptomatic and detected through elevated serum PSA.",
      "May be found incidentally in tissue sampled for benign prostatic hyperplasia.",
      "Multifocality is common; urinary symptoms are not specific for carcinoma.",
    ],
    criteria: [
      "Infiltrative malignant glands with secretory differentiation and absence of a substantial component of another prostatic carcinoma type.",
      "Basal cells are typically absent in invasive carcinoma.",
      "Diagnosis is primarily morphologic; prostate-lineage IHC supports difficult cases but does not replace morphology.",
      "Recognize and report adverse patterns including cribriform architecture and associated IDC-P.",
    ],
    histology: [
      "Architecture ranges from well-formed small glands to fused, poorly formed, cribriform, and solid patterns.",
      "Infiltrative growth, variation in gland size/shape, and absence of a basal layer support malignancy.",
      "Special morphologic subtypes include signet-ring cell-like, pleomorphic giant cell, sarcomatoid, and PIN-like carcinoma.",
      "Additional patterns include atrophic, pseudohyperplastic, microcystic, foamy-gland, and mucinous (colloid) patterns.",
      "PIN-like carcinoma shows large discrete flat or tufted glands lined by pseudostratified or cuboidal cells; it lacks basal cells and lacks true fibrovascular papillae, complex cribriform glands, and necrosis.",
    ],
    ihc: [
      "NKX3.1 is generally more sensitive and specific for prostatic adenocarcinoma than PSA.",
      "PSA, PAP, PSMA, and other prostate-lineage markers may support prostatic origin; a panel is recommended in difficult cases.",
      "ERG is positive in fewer than 50% of cases and is not a universal marker.",
      "Basal-cell markers (p63 and high-molecular-weight cytokeratin) help distinguish invasive carcinoma from benign glands and HGPIN.",
    ],
    diff: [
      [
        "Benign mimics (atrophy, adenosis, crowded benign glands)",
        "Assess infiltrative architecture, cytology, basal-cell retention, and a panel of basal-cell markers.",
      ],
      [
        "HGPIN",
        "HGPIN is confined to pre-existing glands and retains basal cells; invasive carcinoma lacks basal cells.",
      ],
      [
        "IDC-P",
        "IDC-P is intraductal and retains at least partial basal cells; invasive acinar carcinoma lacks basal cells.",
      ],
      [
        "Ductal adenocarcinoma",
        "Ductal morphology shows tall pseudostratified columnar cells with papillary or complex cribriform architecture.",
      ],
      [
        "Urothelial or non-prostatic carcinoma",
        "Use a panel including NKX3.1/PSA/PAP and appropriate urothelial or organ-specific markers, with clinical correlation.",
      ],
      [
        "PIN-like adenocarcinoma versus HGPIN",
        "PIN-like carcinoma has crowded glands without basal cells; HGPIN retains a basal layer.",
      ],
    ],
    mol: [
      "TMPRSS2::ERG fusion is a recurrent molecular event; ERG rearrangement is found in a subset of tumors.",
      "DNA-repair gene alterations (including BRCA1, BRCA2, ATM, CHEK2, PALB2, FANCI, and MSH2) are clinically important in aggressive and metastatic disease.",
      "Mismatch-repair deficiency and homologous-recombination repair defects may guide therapeutic testing; germline/somatic testing is clinically relevant in selected patients.",
      "PIN-like adenocarcinoma frequently shows activating RAF/RAS-pathway mutations, differing from usual acinar and ductal carcinoma.",
    ],
    pit: [
      "Do not diagnose carcinoma on IHC alone; morphology remains primary.",
      "Cribriform architecture and/or IDC-P should be documented because of prognostic and potential genetic-testing implications.",
      "Sarcomatoid differentiation is a subtype/pattern of acinar adenocarcinoma, not a separate stromal sarcoma.",
    ],
  },
  {
    name: "Prostatic Ductal Adenocarcinoma",
    category: "Malignant glandular neoplasm",
    site: "Often periurethral/central; may involve peripheral prostate and present as an exophytic urethral lesion.",
    clinical: [
      "Usually affects older men; may present with urinary obstruction or hematuria, but can be asymptomatic.",
      "Serum PSA may be elevated or normal.",
      "May be mixed with acinar adenocarcinoma; pure ductal carcinoma is less common.",
    ],
    criteria: [
      "Papillary and/or complex cribriform glands lined by tall pseudostratified columnar cells.",
      "Papillae have true fibrovascular cores; cribriform lumina are often slit-like.",
      "In prostatectomy, report the percentage of ductal component; the WHO criterion uses >50% for ductal adenocarcinoma designation.",
      "On needle biopsy, even a pure lesion is termed prostate adenocarcinoma with ductal features.",
    ],
    histology: [
      "Tall columnar cells have abundant amphophilic or pale cytoplasm and elongated enlarged nuclei with prominent nucleoli.",
      "Papillary and large cribriform patterns are most characteristic; solid foci, comedonecrosis, and invasive single glands may coexist.",
      "Desmoplastic stroma and intraductal growth are frequent.",
      "Ductal carcinoma is graded using Gleason grading; ductal areas are assigned pattern 4 except comedonecrosis, which is pattern 5.",
    ],
    ihc: [
      "Usually positive for PSA, PAP, PSMA, NKX3.1, and AMACR.",
      "There is no IHC stain that reliably distinguishes ductal from acinar adenocarcinoma.",
      "CK20 is patchy positive in a subset (reported 23–60%).",
      "Use basal-cell markers when distinguishing intraductal growth from invasive carcinoma.",
      "GATA3 and p63 favor urothelial carcinoma; TTF1 supports lung adenocarcinoma in the appropriate differential.",
    ],
    diff: [
      [
        "Acinar adenocarcinoma",
        "Ductal carcinoma has tall pseudostratified columnar cells, elongated nuclei, and papillary fibrovascular cores; prostate markers overlap.",
      ],
      [
        "IDC-P / HGPIN",
        "Basal-cell markers and architecture are key; ductal carcinoma shows tall columnar epithelium and true papillae.",
      ],
      [
        "Urothelial carcinoma involving ducts",
        "GATA3/p63 positivity and lack of prostate-lineage markers support urothelial origin.",
      ],
      [
        "Colorectal or bladder adenocarcinoma",
        "Correlate with clinical/radiologic findings and use prostate-lineage markers; CDX2/villin are not reliable discriminators by themselves.",
      ],
    ],
    mol: [
      "Molecular findings overlap with acinar adenocarcinoma; shared ERG rearrangements support clonal relationship in many cases.",
      "Occasional molecular discordance has been reported; molecular findings are not required for routine diagnosis.",
    ],
    pit: [
      "Ductal carcinoma may be under-sampled or under-staged on biopsy.",
      "Preserve the term ductal adenocarcinoma as a separate type in this WHO edition.",
      "Report ductal component percentage in prostatectomy; use 'adenocarcinoma with ductal features' on biopsy.",
    ],
  },
  {
    name: "Treatment-Related Neuroendocrine Prostatic Carcinoma (t-NEPC)",
    category: "Treatment-related carcinoma",
    site: "Prostate and metastatic sites; may show heterogeneous involvement.",
    clinical: [
      "Arises after androgen-deprivation therapy, often in castration-resistant prostate cancer.",
      "May present with rapid progression despite androgen-receptor-directed therapy.",
      "Accounts for approximately 10–15% of castration-resistant prostate adenocarcinomas.",
    ],
    criteria: [
      "Prostatic carcinoma showing complete neuroendocrine differentiation or partial neuroendocrine differentiation admixed with adenocarcinoma after androgen-deprivation therapy.",
      "Correlate with a history of antiandrogen/androgen-deprivation therapy.",
      "Confirm neuroendocrine differentiation with synaptophysin and/or chromogranin in the appropriate morphology.",
    ],
    histology: [
      "Most commonly shows small-cell neuroendocrine carcinoma morphology; large-cell and mixed patterns also occur.",
      "May be pure neuroendocrine carcinoma or mixed with poorly differentiated adenocarcinoma.",
      "The transition between neuroendocrine and adenocarcinoma components is often abrupt.",
      "Metastatic deposits may show marked intratumoral heterogeneity.",
    ],
    ihc: [
      "Synaptophysin and chromogranin support neuroendocrine differentiation.",
      "The small-cell component is typically negative for PSA and PAP.",
      "AR may be retained in a subset; TTF1 is positive in approximately half of small-cell components.",
      "p53 nuclear staining is common in small-cell carcinoma.",
    ],
    diff: [
      [
        "Conventional acinar adenocarcinoma with focal neuroendocrine differentiation",
        "Focal neuroendocrine marker expression alone is common and does not establish t-NEPC; require appropriate morphology and clinical context.",
      ],
      [
        "Primary small-cell or large-cell NEC",
        "Treatment history and clinical evolution support treatment-related disease; morphology/IHC may otherwise be similar.",
      ],
      [
        "Metastatic small-cell carcinoma from another site",
        "Correlate with clinical history and imaging; prostate markers may be absent in the neuroendocrine component.",
      ],
    ],
    mol: [
      "Losses of TP53, RB1, and PTEN and epigenetic alterations are implicated in lineage plasticity.",
      "EZH2 overexpression and altered DNA methylation profiles have been reported.",
      "Molecular testing is not required for routine morphologic diagnosis.",
    ],
    pit: [
      "Do not perform routine neuroendocrine IHC on every conventional prostate biopsy; focal neuroendocrine differentiation alone has no established routine prognostic/therapeutic role.",
      "Do not include the small-cell component in Gleason grading.",
    ],
  },
  {
    name: "Adenosquamous Carcinoma of the Prostate",
    category: "Malignant mixed epithelial neoplasm",
    site: "Prostate.",
    clinical: [
      "Very rare; median reported age approximately 67–74 years.",
      "May arise de novo or after hormonal and/or radiation therapy for prostate adenocarcinoma.",
      "Patients commonly present with urinary obstruction/frequency; PSA may be elevated or normal; metastases may be present.",
    ],
    criteria: [
      "Both malignant glandular (acinar) and malignant squamous components must be present.",
      "The components may be admixed, distinct, or show transition.",
      "Exclude urothelial carcinoma with divergent differentiation.",
    ],
    histology: [
      "Glandular component is commonly grade group 2 or higher.",
      "Squamous component varies widely in proportion and differentiation; nuclear pleomorphism is often more pronounced.",
      "A sarcomatous component is reported in a substantial subset (20–57%).",
      "The glandular component expresses prostate markers; the squamous component expresses basal-cell markers and is usually PSA-negative.",
    ],
    ihc: [
      "Glandular component: PSA and/or PAP positive; ERG may be strong in the glandular component in ERG-rearranged cases.",
      "Squamous component: basal-cell markers positive and usually PSA-negative.",
      "NKX3.1 expression is not sufficiently characterized to serve as a defining feature.",
    ],
    diff: [
      [
        "Urothelial carcinoma with divergent squamous/glandular differentiation",
        "Assess morphology and IHC of the non-squamous component, prior history, and radiologic findings.",
      ],
      [
        "Pure squamous cell carcinoma",
        "Adenosquamous carcinoma requires a malignant glandular component as well as squamous carcinoma.",
      ],
      [
        "Acinar adenocarcinoma with focal squamous differentiation",
        "Confirm a bona fide malignant squamous component and correlate with treatment history.",
      ],
    ],
    mol: [
      "Reported alterations include TMPRSS2::ERG fusion, PTEN deletion, and SPOP mutation.",
      "A FAM131A::BRAF fusion has been reported in an individual case; molecular testing may help in selected cases.",
    ],
    pit: [
      "Do not classify as pure squamous carcinoma if a malignant glandular component is present.",
      "Document the components and consider a sarcomatous component.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma of the Prostate",
    category: "Malignant squamous neoplasm",
    site: "Prostate.",
    clinical: [
      "Extremely rare; most reported patients are older than 70 years.",
      "Often occurs after hormone or radiation therapy for prostatic adenocarcinoma.",
      "Presents with urinary obstruction, dysuria, hematuria, or bone pain; PSA is usually not elevated.",
      "Pelvic nodal and osteolytic bone metastases are common.",
    ],
    criteria: [
      "Malignant squamous architecture with keratinization and/or intercellular bridges and cellular anaplasia.",
      "No glandular component should be present.",
      "Exclude prostatic adenocarcinoma with squamous differentiation, direct extension of bladder carcinoma, and metastatic squamous carcinoma.",
    ],
    histology: [
      "Keratin pearls, intercellular bridges, and cytologic anaplasia resemble squamous carcinoma at other sites.",
      "Glandular elements should be absent.",
      "Grade as well, moderately, or poorly differentiated; Gleason grading/grade groups do not apply.",
    ],
    ihc: [
      "Usually positive for p63, 34βE12, CK5/6, and CK14.",
      "Usually negative for PSA, PAP, and PSMA.",
      "AMACR may be positive.",
    ],
    diff: [
      [
        "Adenosquamous carcinoma",
        "Adenosquamous carcinoma contains a malignant glandular component.",
      ],
      [
        "Urothelial carcinoma with squamous differentiation",
        "Use urothelial markers and assess for associated urothelial carcinoma/in situ disease.",
      ],
      [
        "Bladder SCC extending into prostate",
        "Correlate with tumor epicenter and clinical/radiologic findings.",
      ],
      [
        "Metastatic SCC",
        "Exclude a primary squamous carcinoma elsewhere; TMPRSS2::ERG fusion strongly supports prostatic origin in the appropriate setting.",
      ],
    ],
    mol: [
      "Limited case data report TMPRSS2::ERG fusion in 3 of 4 cases and SPOP mutation in one case.",
      "PTEN loss or mutation has also been reported; molecular testing is not routinely established.",
    ],
    pit: [
      "Do not use PSA level alone to exclude prostate origin; serum PSA is usually not elevated.",
      "Gleason grading is not applicable.",
      "Prostatic origin should be established by exclusion and, in selected cases, molecular findings.",
    ],
  },
  {
    name: "Adenoid Cystic (Basal Cell) Carcinoma of the Prostate",
    category: "Malignant basal-cell neoplasm",
    site: "Prostate.",
    clinical: [
      "Reported age range 42–93 years.",
      "Often presents with urinary obstruction and is diagnosed on transurethral resection; serum PSA is usually normal unless concurrent acinar carcinoma is present.",
    ],
    criteria: [
      "Basal-cell morphology and immunophenotype.",
      "Identify malignant features: cytoarchitectural atypia, stromal infiltration/between benign acini, perineural invasion, necrosis, or extraprostatic extension.",
      "Exclude metastatic adenoid cystic carcinoma from another primary site, including Cowper glands.",
    ],
    histology: [
      "Variable admixture of adenoid cystic/cribriform areas with inspissated secretions and basaloid solid nests.",
      "Less commonly, cords or small tubules with hyaline rims are present.",
      "Stroma may be desmoplastic; mitotic activity and Ki-67 vary widely.",
    ],
    ihc: [
      "Basal-cell markers highlight the outermost cell layers; CK7 labels adluminal cells.",
      "PSA is positive in a minority; AMACR and androgen receptor are negative to weak.",
      "ERG is negative; BCL2 may be strongly positive and Ki-67 elevated.",
      "ERBB2/HER2 overexpression has been reported, but protein findings are inconsistent.",
    ],
    diff: [
      [
        "Florid basal-cell hyperplasia",
        "Carcinoma shows atypia, infiltrative growth, perineural invasion, necrosis, or extraprostatic extension.",
      ],
      [
        "Urothelial carcinoma",
        "Use morphology and prostate/basal-cell versus urothelial marker profile.",
      ],
      [
        "High-grade acinar adenocarcinoma or NEC",
        "Basal-cell morphology and immunophenotype support adenoid cystic/basal-cell carcinoma.",
      ],
      [
        "Metastatic adenoid cystic carcinoma",
        "Exclude a primary elsewhere, including salivary gland or Cowper gland.",
      ],
    ],
    mol: [
      "MYB::NFIB fusion is detected in approximately 17–47% by FISH and is not found in benign basal-cell proliferations.",
      "TMPRSS2::ERG fusion has not been identified in this entity.",
    ],
    pit: [
      "The term 'basal cell carcinoma' can be confused with cutaneous basal cell carcinoma; use the full prostatic entity name.",
      "A subset is locally aggressive and can metastasize.",
    ],
  },
  {
    name: "Prostatic Stromal Tumor of Uncertain Malignant Potential (STUMP)",
    category: "Prostate-specific mesenchymal tumor",
    site: "Transition or peripheral zone of the prostate.",
    clinical: [
      "Rare; median age approximately 57.5 years (range 25–86).",
      "Usually presents with lower urinary tract obstruction; less commonly palpable mass, hematuria, hematospermia, or rectal fullness.",
      "May be incidental or form a large solid/partly cystic mass.",
    ],
    criteria: [
      "Extensive proliferation of atypical prostatic stromal cells, without the nodularity and thick-walled vessels typical of benign prostatic hyperplasia.",
      "One or more characteristic stromal patterns may be present.",
      "Exclude prostatic stromal sarcoma and other mesenchymal tumors.",
    ],
    histology: [
      "Five patterns may occur alone or in combination: hypercellular atypical stromal cells with degenerative-appearing nuclei; hypercellular bland fusiform cells; phyllodes-like architecture; myxoid stroma with bland cells; and epithelioid stromal pattern.",
      "Benign prostatic glands may be admixed and may show crowding or other benign/proliferative changes.",
      "Extensive sampling is required to assess cellularity, atypia, mitotic activity, and possible sarcoma.",
    ],
    ihc: [
      "Vimentin and progesterone receptor are positive.",
      "CD34, SMA, and desmin are variably positive; ER is uncommon.",
      "KIT, S100, and STAT6 are negative.",
    ],
    diff: [
      [
        "Florid benign prostatic hyperplasia",
        "STUMP shows extensive hypercellular atypical stroma and lacks the nodularity and thick-walled vessels typical of BPH.",
      ],
      [
        "Prostatic stromal sarcoma",
        "Sarcoma shows increased mitoses, atypical mitoses, necrosis, marked hypercellularity, and non-degenerative nuclear pleomorphism.",
      ],
      [
        "Other spindle-cell tumors",
        "Exclude solitary fibrous tumor, inflammatory myofibroblastic tumor, smooth-muscle tumors, rhabdomyosarcoma, GIST, sarcomatoid carcinoma, and seminal-vesicle tumors.",
      ],
    ],
    mol: [
      "Recurrent losses of chromosomes 13, 14, and 1p have been reported, supporting a distinct neoplastic entity.",
      "Molecular testing is not routinely required for diagnosis.",
    ],
    pit: [
      "Clinical behavior is unpredictable; most cases are not aggressive, but recurrence after resection occurs in approximately 15%.",
      "Histologic pattern does not reliably predict clinical behavior or concurrent stromal sarcoma.",
    ],
  },
  {
    name: "Prostatic Stromal Sarcoma",
    category: "Malignant prostate-specific mesenchymal tumor",
    site: "Transition and peripheral zones of the prostate.",
    clinical: [
      "Very rare (<0.1% of prostatic cancers); mean age approximately 51.5 years (range 25–86).",
      "Approximately half of reported patients are younger than 50 years.",
      "Presents with lower urinary tract obstruction; other symptoms include palpable mass, hematuria, hematospermia, or rectal fullness.",
    ],
    criteria: [
      "Diffuse stromal neoplasm with hypercellularity and cytologic atypia.",
      "Increased mitotic activity and/or atypical mitoses; necrosis may be present.",
      "Exclude STUMP, sarcomatoid carcinoma, postirradiation sarcoma, and other primary mesenchymal malignancies.",
    ],
    histology: [
      "May be circumscribed or infiltrate between benign prostatic glands.",
      "Patterns include storiform, epithelioid, fibrosarcomatous, leaf-like/phyllodes-like, or patternless growth.",
      "Tumor cells show hypercellularity, atypia, increased mitoses, and atypical mitotic figures; necrosis may occur.",
    ],
    ihc: [
      "Vimentin is positive; CD34 is variable.",
      "SMA and desmin are usually negative; ER and PR are uncommon.",
      "Pancytokeratin is rarely positive.",
    ],
    diff: [
      [
        "STUMP",
        "Sarcoma shows increased/atypical mitoses, necrosis, and more overt non-degenerative cytologic atypia.",
      ],
      [
        "Sarcomatoid prostate carcinoma",
        "Often occurs after prostate carcinoma and treatment; focal pancytokeratin expression in the sarcomatoid component supports epithelial lineage.",
      ],
      [
        "Postirradiation sarcoma",
        "A history of pelvic radiation raises this possibility.",
      ],
      [
        "Other sarcomas",
        "Exclude leiomyosarcoma, rhabdomyosarcoma, and other lineage-defined mesenchymal tumors.",
      ],
    ],
    mol: [
      "Molecular alterations are heterogeneous and largely non-recurrent; chromosome 13/14 losses have been reported.",
      "MED12 mutations were not detected in the cited specialized prostatic stromal tumor series.",
      "No routine diagnostic molecular test is established.",
    ],
    pit: [
      "STUMP and stromal sarcoma may coexist; thorough sampling is important.",
      "Do not classify a sarcomatoid carcinoma as stromal sarcoma without excluding epithelial differentiation.",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-700">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProstaticTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(entities.map((entity) => entity.category))),
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const categoryMatch = category === "All" || entity.category === category;
      const content = [
        entity.name,
        entity.category,
        entity.site,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.histology,
        ...entity.ihc,
        ...entity.mol,
        ...entity.diff.flat(),
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && (!q || content.includes(q));
    });
  }, [query, category]);

  const toggle = (name: string) => {
    setOpened((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            PathologyGPS / Genitourinary Pathology
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-9 px-5 py-9 sm:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-teal-950 to-slate-900 p-7 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            WHO Classification of tumors · Prostate
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Prostatic Tumors
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-200 md:text-base">
            A practical, morphology-first reference to epithelial neoplasms and
            prostate-specific stromal tumors. Emphasis is placed on essential
            diagnostic criteria, focused immunohistochemistry, and the
            distinction between closely related entities.
          </p>
          <div className="mt-6 inline-flex rounded-xl bg-white/10 px-4 py-3">
            <div>
              <div className="text-2xl font-bold">{entities.length}</div>
              <div className="text-xs text-slate-300">Diagnostic profiles</div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-950">Diagnostic priorities</h2>
          <Bullets
            items={[
              "Start with architecture and cytology; prostate carcinoma diagnosis is primarily morphologic.",
              "Use basal-cell markers to distinguish benign glands, HGPIN, and IDC-P from invasive carcinoma when the distinction is consequential.",
              "For suspected prostatic origin in a poorly differentiated or metastatic carcinoma, use a prostate-lineage panel rather than relying on PSA alone; NKX3.1 is particularly useful.",
              "Recognize treatment-related neuroendocrine carcinoma in the clinical context of androgen-deprivation therapy and appropriate neuroendocrine morphology.",
              "For stromal lesions, assess stromal cellularity, atypia, mitotic activity, necrosis, and the presence or absence of benign prostatic glands.",
            ]}
          />
        </section>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Entity reference
              </p>
              <h2 className="mt-1 text-2xl font-bold">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Expand an entity for clinical profile, essential criteria,
                histopathology, immunophenotype, molecular pathology, and key
                mimics.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search entity, stain, gene, or morphology..."
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
                    : "border border-slate-300 bg-white text-slate-600 hover:border-teal-400"
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
                    aria-expanded={isOpen}
                    className="flex w-full flex-col gap-2 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                        {entity.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold">{entity.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {entity.site}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-teal-800">
                      {isOpen
                        ? "Collapse profile −"
                        : "View diagnostic profile +"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={entity.clinical} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={entity.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology and Immunophenotype
                        </h4>
                        <h5 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Histopathology
                        </h5>
                        <Bullets items={entity.histology} />
                        <h5 className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Immunophenotype
                        </h5>
                        <Bullets items={entity.ihc} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Molecular Pathology
                        </h4>
                        <Bullets items={entity.mol} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.diff.map(
                                ([diagnosis, distinction], i) => (
                                  <tr key={i}>
                                    <td className="w-1/3 py-3 pr-3 align-top font-semibold">
                                      {diagnosis}
                                    </td>
                                    <td className="py-3 leading-6 text-slate-700">
                                      {distinction}
                                    </td>
                                  </tr>
                                ),
                              )}
                            </tbody>
                          </table>
                        </div>
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={entity.pit} />
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

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-bold">
            Practical diagnostic workflow
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold">
                Atypical glandular / intraductal proliferation
              </h3>
              <Bullets
                items={[
                  "First determine whether the proliferation is confined to pre-existing ducts/acini or shows invasive growth.",
                  "Use p63 and high-molecular-weight cytokeratin to assess basal-cell retention.",
                  "HGPIN has atypical stratified secretory cells with prominent nucleoli; IDC-P has more complex architecture and/or greater cytologic atypia.",
                  "Use atypical intraductal proliferation when the lesion is more complex than HGPIN but does not meet IDC-P criteria.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                Acinar versus ductal adenocarcinoma
              </h3>
              <Bullets
                items={[
                  "Ductal features include true papillae with fibrovascular cores, tall pseudostratified columnar cells, and elongated nuclei.",
                  "Prostate-lineage IHC overlaps; morphology is the key discriminator.",
                  "Report the percentage of ductal component in prostatectomy; on biopsy use 'adenocarcinoma with ductal features'.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                High-grade / treatment-associated carcinoma
              </h3>
              <Bullets
                items={[
                  "After androgen-deprivation therapy, consider t-NEPC when rapid progression and small-cell/large-cell neuroendocrine morphology emerge.",
                  "Confirm neuroendocrine differentiation with synaptophysin and/or chromogranin in the appropriate setting.",
                  "Do not assign Gleason grade to the neuroendocrine component.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                Prostate-specific stromal lesions
              </h3>
              <Bullets
                items={[
                  "STUMP shows atypical or hypercellular specialized stroma, often with benign glands, but lacks overt sarcomatous features.",
                  "Sarcoma is favored by increased/atypical mitoses, necrosis, and non-degenerative nuclear pleomorphism.",
                  "Exclude sarcomatoid carcinoma and other lineage-defined mesenchymal tumors with morphology and targeted IHC.",
                ]}
              />
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope:</b> This section covers prostatic
          glandular epithelial neoplasms, treatment-related neuroendocrine
          prostatic carcinoma, squamous and adenoid cystic carcinomas, and
          prostate-specific stromal tumors. Other genitourinary tumor categories
          are addressed in their respective sections.
        </footer>
      </div>
    </main>
  );
}
