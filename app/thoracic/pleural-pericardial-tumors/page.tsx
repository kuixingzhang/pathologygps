"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  profile: string[];
  criteria: string[];
  hist: string[];
  ihc: string[];
  diff: Differential[];
  molecular: string[];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Adenomatoid Tumor of the Pleura",
    group: "Benign and Preinvasive Mesothelial Tumors",
    clue: "A small, circumscribed mesothelial nodule with bland tubules, slit-like spaces, and vacuolated cells.",
    profile: [
      "Usually incidental; reported age range approximately 40–70 years.",
      "May arise on visceral or parietal pleura; fewer than 20 cases have been reported.",
      "Often discovered during surgery or at autopsy; asbestos association is uncertain.",
    ],
    criteria: [
      "Circumscribed, focal proliferation of tubular spaces, pseudoglands, or vacuoles lined by flattened or cuboidal mesothelial cells in fibrous stroma.",
      "Bland cytology without tumor necrosis or a sarcomatoid component.",
      "No diffuse or multifocal pleural spread; exclude destructive invasion by thorough sampling of the entire lesion.",
      "Mesothelial differentiation supported by cytokeratins and markers such as calretinin, D2-40, and WT1.",
    ],
    hist: [
      "Interanastomosing pseudoglands, pseudovascular spaces, tubules, signet-ring-like spaces, and papillae may coexist.",
      "Cells are flat to cuboidal with scant epithelioid or vacuolated cytoplasm and bland nuclei.",
      "Vacuolated cells may contain bridging cytoplasmic strands forming a delicate network within tubular or slit-like lumina.",
      "Basophilic luminal material and lymphoid aggregates may be present.",
      "The lesion is usually circumscribed and nodular; limited adjacent soft-tissue entrapment can occur, so evaluate the overall interface.",
    ],
    ihc: [
      "Cytokeratins are positive.",
      "Calretinin, D2-40, and WT1 support mesothelial differentiation.",
      "BAP1 expression is retained in reported cases.",
      "L1CAM may be useful as a surrogate marker in the context of TRAF7 alterations, but its role in pleural tumors is not fully established.",
    ],
    diff: [
      {
        name: "Diffuse pleural mesothelioma",
        distinction:
          "Usually shows diffuse pleural involvement, destructive invasion, cytologic atypia, necrosis, or sarcomatoid morphology; sample the entire adenomatoid lesion.",
      },
      {
        name: "Localized pleural mesothelioma",
        distinction:
          "A malignant mesothelial tumor forming a circumscribed mass; look for malignant cytology and invasion beyond the mass.",
      },
      {
        name: "Well-differentiated papillary mesothelial tumor",
        distinction:
          "Shows true papillae with bland surface mesothelium and myxoid/fibrovascular cores rather than the characteristic tubular and vacuolated network.",
      },
      {
        name: "Mesothelioma in situ",
        distinction:
          "A surface-based single-layer neoplastic proliferation with BAP1 and/or MTAP loss or CDKN2A homozygous deletion in the appropriate clinical setting.",
      },
      {
        name: "Lymphangioma / epithelioid hemangioendothelioma",
        distinction:
          "Use endothelial markers and morphology to establish vascular rather than mesothelial differentiation.",
      },
      {
        name: "Metastatic signet-ring cell carcinoma",
        distinction:
          "Usually expresses epithelial/site-specific carcinoma markers and lacks a convincing mesothelial profile; correlate clinically.",
      },
      {
        name: "Well-Differentiated Papillary Mesothelial Tumor (WDPMT) of the Pleura",
        distinction: "Shows bland papillae with no stromal invasion.",
      },
    ],
    molecular: [
      "No established diagnostic molecular alteration is defined for pleural adenomatoid tumor.",
      "TRAF7 mutations are described in genital-tract adenomatoid tumors; their significance in thoracic lesions remains uncertain.",
    ],
    pitfalls: [
      "Do not diagnose mesothelioma from focal entrapment alone; assess the entire lesion and the presence or absence of malignant features.",
      "Do not assume that a mesothelial immunophenotype alone establishes malignancy.",
    ],
  },
  {
    name: "Well-Differentiated Papillary Mesothelial Tumor (WDPMT) of the Pleura",
    group: "Benign and Preinvasive Mesothelial Tumors",
    clue: "Bland papillae with paucicellular myxoid or fibrovascular cores and no stromal invasion.",
    profile: [
      "Median age approximately 62 years; broad age range and no apparent sex predilection.",
      "Arises from visceral and/or parietal pleura; extremely rare, with fewer than 50 reported cases.",
      "May present with dyspnea and recurrent unilateral pleural effusion or be discovered incidentally.",
    ],
    criteria: [
      "Papillary stromal formations covered by a single layer of bland flattened-to-cuboidal mesothelial cells.",
      "No stromal invasion; examination of the entire lesion is required to exclude focal invasion.",
      "Mesothelial immunophenotype supports the diagnosis; BAP1 is usually retained.",
    ],
    hist: [
      "Papillae range from thin to broad and contain paucicellular myxoid or fibrovascular cores.",
      "Surface cells are bland, with inconspicuous nucleoli and rare or absent mitoses.",
      "Inflammation is typically absent from papillary cores; occasional hyalinization, foamy macrophages, or rare psammomatous calcifications may occur.",
      "Crowded back-to-back papillae can simulate invasion; keratin staining may demonstrate preserved papillary architecture.",
      "Multifocal millimeter-sized pleural nodules may impart a granular or velvety pleural surface; a solitary arborescent mass may reach 5 cm.",
    ],
    ihc: [
      "Mesothelial markers are positive.",
      "BAP1 is usually retained; retention does not independently establish benign behavior.",
    ],
    diff: [
      {
        name: "Diffuse pleural mesothelioma, epithelioid type",
        distinction:
          "Shows invasion into deep pleural connective tissue or beyond, often with diffuse pleural thickening; papillary architecture alone does not exclude invasion.",
      },
      {
        name: "Mesothelioma in situ",
        distinction:
          "Usually presents with persistent unexplained effusion and a single-layer surface proliferation; BAP1 and/or MTAP loss or CDKN2A deletion supports neoplasia.",
      },
      {
        name: "Reactive mesothelial hyperplasia / reactive papillary mesothelial proliferation",
        distinction:
          "Papillae are generally stubby and accompanied by inflammation and reactive cytologic features; no defining molecular loss pattern.",
      },
      {
        name: "Adenomatoid tumor of the pleura",
        distinction:
          "Usually a circumscribed tubulocystic/vacuolated nodule rather than a surface-based papillary proliferation.",
      },
      {
        name: "Localized pleural mesothelioma",
        distinction:
          "Forms a circumscribed malignant mass with mesothelioma morphology and invasion within or beyond its borders.",
      },
    ],
    molecular: [
      "Molecular data are limited; BAP1 is usually retained.",
      "CDKN2A homozygous deletion has not been observed in reported pleural WDPMT.",
    ],
    pitfalls: [
      "Do not use the historical term well-differentiated papillary mesothelioma as the preferred diagnostic name.",
      "Do not diagnose WDPMT on cytology alone because invasion cannot be assessed.",
      "Focal invasion in a WDPMT-like lesion remains a difficult category; invasion criteria and biological classification are not fully established.",
    ],
  },
  {
    name: "Mesothelioma in Situ",
    group: "Benign and Preinvasive Mesothelial Tumors",
    clue: "A noninvasive surface mesothelial proliferation with BAP1 and/or MTAP loss or CDKN2A homozygous deletion in a carefully selected clinical setting.",
    profile: [
      "Reported pleural cases are very rare, predominantly in men aged approximately 67–79 years.",
      "Usually presents with persistent, unexplained pleural effusion without a mass on imaging or thoracoscopy.",
      "Risk context may include heavy asbestos exposure, prior irradiation, or familial predisposition.",
    ],
    criteria: [
      "Persistent, nonresolving pleural effusion with no mass or gross tumor identified by imaging or thoracoscopy.",
      "Single-layer surface proliferation of mesothelial cells, with or without cytologic atypia, and no histologic evidence of invasion.",
      "Demonstration of BAP1 nuclear loss and/or MTAP cytoplasmic loss and/or CDKN2A homozygous deletion by validated assays with appropriate controls.",
      "Adequate, preferably multisite thoracoscopic pleural biopsies; ideally 100–200 mm² of tissue from different pleural areas.",
      "Clinicoradiologic correlation and multidisciplinary review; small biopsies and cytology alone are insufficient.",
    ],
    hist: [
      "Flat or cuboidal mesothelial cells line the pleural surface in a single layer.",
      "Cytologic atypia may be absent or minimal; nuclei may be bland with occasional prominent nucleoli.",
      "Mitoses are typically absent.",
      "Small papillary projections or tiny nodules may occur and can show moderate-to-severe atypia.",
      "No stromal invasion should be identified; exclude surface spread from an adjacent invasive mesothelioma.",
    ],
    ihc: [
      "Loss of nuclear BAP1 expression is a useful marker of neoplastic mesothelial proliferation.",
      "Loss of cytoplasmic MTAP is a surrogate for CDKN2A homozygous deletion.",
      "CDKN2A homozygous deletion can be demonstrated by FISH.",
      "Interpret all stains with intact internal controls; isolated marker loss is not a diagnosis without the appropriate clinical, imaging, and morphologic context.",
    ],
    diff: [
      {
        name: "Reactive mesothelial proliferation",
        distinction:
          "Usually retains BAP1 and MTAP and lacks CDKN2A homozygous deletion; correlate with inflammation and clinical context.",
      },
      {
        name: "Diffuse pleural mesothelioma with surface spread",
        distinction:
          "May be indistinguishable in a limited surface sample; imaging, thoracoscopic findings, and adequate multisite sampling are essential to exclude an invasive mass.",
      },
      {
        name: "Well-differentiated papillary mesothelial tumor",
        distinction:
          "Often forms multiple millimeter-sized papillary nodules and a granular/velvety pleural surface; papillary stromal cores are characteristic.",
      },
      {
        name: "Adenomatoid tumor of the pleura",
        distinction:
          "A circumscribed tubulocystic/vacuolated nodule rather than a single-layer surface proliferation.",
      },
      {
        name: "Localized pleural mesothelioma",
        distinction:
          "Presents as a discrete mass with malignant mesothelial morphology rather than a purely preinvasive surface lesion.",
      },
      {
        name: "Well-Differentiated Papillary Mesothelial Tumor (WDPMT) of the Pleura",
        distinction: "Shows bland papillae with no stromal invasion.",
      },
    ],
    molecular: [
      "BAP1 inactivation and CDKN2A homozygous deletion are early events in mesothelioma development.",
      "MTAP immunohistochemistry can serve as a surrogate for deletion involving the CDKN2A/MTAP region.",
      "The diagnosis is not based on molecular testing alone; clinical, imaging, and histologic criteria are required.",
    ],
    pitfalls: [
      "Do not diagnose mesothelioma in situ in an effusion specimen or small biopsy alone; invasion cannot be excluded.",
      "BAP1/MTAP loss or CDKN2A deletion in isolation does not establish mesothelioma in situ.",
      "Do not overlook surface spread from an unsampled invasive tumor.",
    ],
  },
  {
    name: "Localized Pleural Mesothelioma",
    group: "Malignant Mesothelial Tumors",
    clue: "A solitary, circumscribed mesothelial malignancy without clinical or histologic evidence of diffuse serosal spread.",
    profile: [
      "Mean age approximately 59 years; reported range 6–82 years, with male predominance (M:F approximately 2.7:1).",
      "Usually an intrathoracic mass involving pleura, chest wall, lung, or mediastinum; most cases are pleural in origin.",
      "May be asymptomatic or cause chest pain, dyspnea, or symptoms from compression of adjacent structures.",
    ],
    criteria: [
      "A solitary, localized, circumscribed mass established by imaging, operative findings, and histology.",
      "Resection specimen demonstrates no diffuse serosal spread and no invasion beyond the circumscribed tumor border.",
      "Histology is that of mesothelioma, with epithelioid, sarcomatoid (including desmoplastic), or biphasic morphology.",
      "Immunohistochemistry confirms mesothelial differentiation.",
      "Pleural fluid cytology should be negative for malignant cells by definition; multidisciplinary clinicoradiologic correlation is desirable.",
    ],
    hist: [
      "Approximately 55% are epithelioid; the remainder include biphasic and sarcomatoid tumors.",
      "Rare epithelioid tumors may show pleomorphic, microcystic, or rhabdoid features.",
      "Sarcomatoid tumors may show desmoplastic or lymphohistiocytoid differentiation.",
      "Histologic and immunophenotypic features otherwise parallel diffuse mesothelioma.",
    ],
    ihc: [
      "Use a panel of at least two mesothelial markers and two carcinoma markers, interpreted with morphology.",
      "Calretinin, WT1, D2-40, and CK5/6 support mesothelial differentiation in epithelioid tumors.",
      "Claudin-4, BerEP4/MOC31, CEA, and other carcinoma markers help exclude metastatic carcinoma.",
      "Sarcomatoid tumors are usually at least focally positive for pancytokeratin, although rare keratin-negative examples occur; D2-40 may be more sensitive than calretinin.",
      "BAP1 loss, MTAP loss, or CDKN2A homozygous deletion may support malignant mesothelial proliferation but do not distinguish localized from diffuse growth.",
    ],
    diff: [
      {
        name: "Diffuse pleural mesothelioma",
        distinction:
          "Shows diffuse pleural thickening or rind-like spread rather than a solitary circumscribed mass.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "Usually STAT6 nuclear positive and lacks a mesothelial immunophenotype.",
      },
      {
        name: "Metastatic carcinoma to pleura",
        distinction:
          "Often expresses claudin-4 and epithelial/site-specific markers; mesothelial markers are absent or limited.",
      },
      {
        name: "Primary pleural or pulmonary sarcoma, including synovial sarcoma",
        distinction:
          "Use lineage markers and molecular testing; SS18 rearrangement supports synovial sarcoma.",
      },
      {
        name: "Adenomatoid tumor of the pleura",
        distinction:
          "Bland, small, circumscribed tubulocystic lesion without malignant cytology or destructive invasion.",
      },
      {
        name: "WDPMT",
        distinction:
          "Bland papillary surface lesion without invasion, not a malignant mass-forming mesothelioma.",
      },
      {
        name: "Mesothelioma in situ",
        distinction:
          "Surface-confined preinvasive proliferation without a gross mass.",
      },
      {
        name: "Diffuse Pleural and Pericardial Mesothelioma",
        distinction:
          "Shows diffuse serosal involvement and invasion rather than a circumscribed or preinvasive pattern.",
      },
    ],
    molecular: [
      "Potential pathogenetic alterations include BAP1 and TRAF7 mutations and genomic near-haploidization.",
      "Ancillary molecular studies used for diffuse mesothelioma may support mesothelial malignancy but do not define localized growth.",
    ],
    pitfalls: [
      "A circumscribed appearance alone is insufficient; confirm mesothelioma histology and absence of diffuse serosal disease.",
      "Do not confuse localized mesothelioma with solitary fibrous tumor or metastatic sarcoma.",
    ],
  },
  {
    name: "Diffuse Pleural and Pericardial Mesothelioma",
    group: "Malignant Mesothelial Tumors",
    clue: "Diffuse serosal malignancy with epithelioid, sarcomatoid, or biphasic morphology; invasion is the most robust criterion of malignancy.",
    profile: [
      "Usually affects older adults, with a strong male predominance related in part to asbestos exposure.",
      "Pleural disease is more common on the right; bilateral disease at diagnosis is unusual.",
      "Presents with unilateral pleural effusion, dyspnea, chest pain, cough, weight loss, or circumferential pleural thickening.",
      "Primary pericardial mesothelioma is exceptionally rare and may cause pericardial effusion, cardiac compression, or tamponade.",
    ],
    criteria: [
      "Diffuse pleural or pericardial involvement by a malignant neoplasm with epithelioid, sarcomatoid, or biphasic morphology.",
      "Unequivocal invasion into adjacent adipose tissue, skeletal muscle, lung parenchyma, or other structures; alternatively, convincing malignant tumor nodules or tumor necrosis in the appropriate context.",
      "Immunohistochemical panel supports mesothelial differentiation and excludes carcinoma and other mimics.",
      "Biphasic mesothelioma in a definitive resection contains at least 10% epithelioid and at least 10% sarcomatoid components; any demonstrable proportion of both components may be diagnosed as biphasic in a small biopsy.",
      "Desmoplastic mesothelioma requires dense collagenized tissue with malignant mesothelial cells in storiform or patternless arrays in at least 50% of a definitive resection; in small biopsies, report desmoplastic features.",
      "BAP1 and/or MTAP loss or CDKN2A homozygous deletion are desirable ancillary findings, not mandatory in every case.",
    ],
    hist: [
      "Epithelioid mesothelioma: tubulopapillary, trabecular, acinar, solid, micropapillary, and other patterns may occur; cells range from bland to markedly pleomorphic.",
      "Sarcomatoid mesothelioma: infiltrative spindle cells in intersecting fascicles or haphazard arrays, often with marked atypia and desmoplastic stroma.",
      "Desmoplastic mesothelioma: dense hyalinized collagen with sparse malignant spindle cells in storiform or patternless architecture; bland necrosis and invasion are important clues.",
      "Biphasic mesothelioma: unequivocal epithelioid and sarcomatoid components; report the percentage of sarcomatoid component.",
      "Pericardial mesothelioma is usually diffuse and is classified as epithelioid, sarcomatoid, or biphasic.",
      "Report architectural, cytologic, and stromal features with prognostic relevance, including solid, micropapillary, pleomorphic, transitional, rhabdoid, lymphohistiocytoid, and myxoid features where present.",
      "Invasion of adipose tissue is particularly useful in distinguishing sarcomatoid/desmoplastic mesothelioma from organizing pleuritis.",
    ],
    ihc: [
      "For epithelioid tumors, use at least two mesothelial markers (calretinin, WT1, D2-40, CK5/6) and at least two carcinoma markers (claudin-4, BerEP4/MOC31, CEA, or others).",
      "Claudin-4 is a sensitive and specific marker supporting carcinoma over mesothelioma in the appropriate context.",
      "Pancytokeratin is usually positive in epithelioid mesothelioma; a negative result should prompt consideration of non-epithelial mimics.",
      "Sarcomatoid mesothelioma is generally at least focally positive for pancytokeratin, but occasional tumors are keratin negative.",
      "D2-40 is more often positive than calretinin in sarcomatoid mesothelioma; WT1 and CK5/6 are relatively insensitive in this subtype.",
      "Loss of nuclear BAP1, loss of cytoplasmic MTAP, and CDKN2A homozygous deletion support malignant mesothelial proliferation over benign reactive mesothelium.",
      "Strong diffuse GATA3 may favor sarcomatoid/desmoplastic mesothelioma over sarcomatoid carcinoma, with important exceptions including breast and urothelial carcinoma.",
      "TTF1 and/or p40 expression supports sarcomatoid carcinoma; interpret with a broad panel and clinical/radiologic findings.",
    ],
    diff: [
      {
        name: "Reactive mesothelial hyperplasia / organizing pleuritis",
        distinction:
          "Reactive lesions lack unequivocal destructive invasion; organizing pleuritis may show zonation and capillaries. BAP1/MTAP retention and absence of CDKN2A deletion support a benign process but do not replace morphology.",
      },
      {
        name: "Metastatic lung adenocarcinoma or squamous cell carcinoma",
        distinction:
          "Usually expresses claudin-4 and lineage/site-specific carcinoma markers; use at least two carcinoma markers and two mesothelial markers.",
      },
      {
        name: "Metastatic carcinoma from breast, kidney, ovary, prostate, pancreas, or gastrointestinal tract",
        distinction:
          "Use morphology-directed site-specific markers and clinical correlation; mesothelial markers alone are insufficient.",
      },
      {
        name: "Sarcomatoid carcinoma",
        distinction:
          "Carcinoma markers, TTF1 or p40, and/or molecular findings such as MET exon 14 alterations may support carcinoma; strong diffuse GATA3 can favor sarcomatoid mesothelioma in context.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "STAT6 nuclear expression supports solitary fibrous tumor; mesothelioma typically shows keratin and mesothelial marker expression.",
      },
      {
        name: "Synovial sarcoma",
        distinction:
          "SS18 rearrangement / t(X;18) supports synovial sarcoma; TLE1 alone is not sufficiently specific.",
      },
      {
        name: "Epithelioid hemangioendothelioma / angiosarcoma",
        distinction:
          "Endothelial markers and characteristic CAMTA1::WWTR1 or YAP1::TFE3 fusions support epithelioid hemangioendothelioma; vascular morphology and endothelial markers support angiosarcoma.",
      },
      {
        name: "Melanoma",
        distinction:
          "SOX10, S100, HMB45, and Melan-A support melanocytic differentiation; BRAF p.V600E may be supportive in selected cases.",
      },
      {
        name: "Desmoid-type fibromatosis",
        distinction:
          "Usually keratin negative with nuclear beta-catenin and/or CTNNB1 alteration; can mimic desmoplastic mesothelioma.",
      },
      {
        name: "Localized pleural mesothelioma",
        distinction:
          "Same mesothelial morphology and immunophenotype but a solitary circumscribed mass without diffuse pleural spread.",
      },
      {
        name: "Adenomatoid tumor / WDPMT / mesothelioma in situ",
        distinction:
          "These mesothelial lesions are separated by architecture, absence of invasion, and clinical/radiologic setting; BAP1/MTAP/CDKN2A results should be interpreted in context.",
      },
    ],
    molecular: [
      "BAP1 inactivation, NF2 alterations, and CDKN2A homozygous deletion are recurrent events; BAP1 loss and CDKN2A/MTAP loss are useful diagnostic adjuncts.",
      "CDKN2A homozygous deletion can be detected by FISH; MTAP loss by immunohistochemistry is a surrogate for deletion involving the 9p21 region.",
      "Blood biomarkers such as soluble mesothelin-related peptide, HMGB1, fibulin-3, and calretinin are not recommended for routine diagnosis or monitoring because sensitivity and specificity are inadequate.",
      "For selected mimics, molecular testing is useful: SS18 rearrangement for synovial sarcoma, CAMTA1::WWTR1 or YAP1::TFE3 for epithelioid hemangioendothelioma, and IDH1/2 mutations in selected chondrosarcoma differentials.",
    ],
    pitfalls: [
      "BAP1/MTAP loss or CDKN2A deletion distinguishes malignant from benign mesothelial proliferation but does not distinguish mesothelioma from other malignant tumors.",
      "Do not diagnose sarcomatoid mesothelioma from D2-40 or calretinin alone; confirm keratin/mesothelial differentiation and exclude sarcoma.",
      "Do not mistake organizing pleuritis for desmoplastic mesothelioma; invasion of adjacent tissue, especially adipose tissue, is the most reliable criterion.",
      "Before diagnosing primary pericardial mesothelioma, exclude direct extension from a pleural primary.",
    ],
  },
  {
    name: "Primary Effusion Lymphoma (PEL)",
    group: "Hematolymphoid Tumors",
    clue: "HHV8-positive large B-cell lymphoma presenting predominantly as a serous cavity effusion, usually without a solid mass or nodal disease.",
    profile: [
      "Most often affects immunosuppressed patients, particularly HIV-positive men in the fifth decade with low CD4 counts.",
      "Involves pleural, pericardial, or peritoneal cavities; classic disease presents as an effusion without a tumor mass or lymphadenopathy.",
      "Kaposi sarcoma or multicentric Castleman disease may coexist; extracavitary PEL forms solid tumors in sites such as lung, gastrointestinal tract, skin, or CNS.",
    ],
    criteria: [
      "Large malignant lymphoid cells in a serous effusion or an appropriate extracavitary mass, with plasmablastic, immunoblastic, pleomorphic, or anaplastic morphology.",
      "HHV8 positivity in tumor cells, usually demonstrated by LANA immunohistochemistry, is required.",
      "Plasmablastic/terminally differentiated phenotype, commonly expressing CD38, CD138, MUM1/IRF4, VS38c, EMA, and HLA-DR, with frequent absence of conventional B-cell markers.",
      "Classic PEL usually lacks surface and cytoplasmic immunoglobulins and may lack CD45.",
      "EBV is supportive but is neither required nor sufficient for diagnosis.",
    ],
    hist: [
      "Effusion cytology commonly shows large immunoblastic or plasmablastic cells with pleomorphic or anaplastic nuclei and prominent nucleoli.",
      "Cytoplasm is abundant, basophilic to amphophilic, and may show a perinuclear hof or vacuoles.",
      "Some cells resemble Reed–Sternberg cells.",
      "Extracavitary tumors form sheets of large malignant cells, often with apoptosis and necrosis; sinusoidal growth may mimic carcinoma or anaplastic large cell lymphoma.",
    ],
    ihc: [
      "LANA (HHV8) nuclear positivity in tumor cells is required for diagnosis.",
      "Plasma cell/activation markers commonly include CD38, CD138, MUM1/IRF4, VS38c, EMA, HLA-DR, CD30, and PD-L1.",
      "Conventional B-cell markers CD19, CD20, PAX5, OCT2, BOB1, and CD79a are usually absent in classic PEL.",
      "Surface and cytoplasmic immunoglobulins are usually absent.",
      "EBER is positive in most cases, particularly in HIV-associated PEL, but EBV is not required.",
      "Aberrant CD4 or CD7 expression may occur; T-cell marker expression should not override the required HHV8 result.",
    ],
    diff: [
      {
        name: "Effusion-based large B-cell lymphoma / HHV8-negative PEL-like lymphoma",
        distinction:
          "Usually HHV8 negative, often CD20 positive with a mature B-cell phenotype, occurs in older immunocompetent patients with fluid overload, and generally has a more favorable prognosis.",
      },
      {
        name: "DLBCL associated with chronic inflammation (pyothorax-associated lymphoma)",
        distinction:
          "Forms a solid pleural mass in longstanding chronic inflammation, is EBV positive but HHV8 negative, and commonly expresses B-cell markers.",
      },
      {
        name: "Primary mediastinal (thymic) large B-cell lymphoma",
        distinction:
          "Usually expresses B-cell markers and lacks HHV8; often presents as a mediastinal mass with secondary pleural/pericardial involvement.",
      },
      {
        name: "HHV8-positive DLBCL associated with multicentric Castleman disease",
        distinction:
          "Often involves lymph nodes, is usually EBER negative and CD138 negative, and commonly expresses IgM.",
      },
      {
        name: "Anaplastic large cell lymphoma",
        distinction:
          "Can show large pleomorphic cells and CD30 expression but is HHV8 negative and has a T-cell/null-cell phenotype; assess ALK and T-cell markers.",
      },
      {
        name: "ALK-positive large B-cell lymphoma",
        distinction:
          "May have plasmablastic morphology and plasma-cell phenotype but is ALK positive and HHV8/EBV negative; immunoglobulin is often expressed.",
      },
      {
        name: "Diffuse Large B-Cell Lymphoma Associated with Chronic Inflammation (Pyothorax-Associated Lymphoma)",
        distinction:
          "Arises in longstanding chronic inflammation as a solid pleural mass, is EBV-positive, and is HHV8-negative.",
      },
    ],
    molecular: [
      "HHV8 detection by LANA immunohistochemistry is required; EBER in situ hybridization is supportive.",
      "PEL is clonal with somatic hypermutation of IGH variable-region genes; complex karyotypes may include trisomies 7 and 12 and 1q abnormalities.",
      "MYC, BCL2, and BCL6 translocations are generally absent, although MYC protein may be deregulated.",
    ],
    pitfalls: [
      "Do not diagnose PEL based on effusion cytology and plasmablastic phenotype without demonstrating HHV8.",
      "EBV positivity alone does not establish PEL.",
      "Classic PEL may be negative for CD20 and other B-cell markers; their absence does not exclude B-cell lineage.",
    ],
  },
  {
    name: "Diffuse Large B-Cell Lymphoma Associated with Chronic Inflammation (Pyothorax-Associated Lymphoma)",
    group: "Hematolymphoid Tumors",
    clue: "EBV-positive mass-forming large B-cell lymphoma arising after decades of chronic inflammation in a confined pleural space; HHV8 negative.",
    profile: [
      "Typically affects older adults, with median age approximately 65–70 years and male predominance.",
      "Usually arises in the pleural cavity after longstanding pyothorax, classically following artificial pneumothorax for tuberculosis treatment decades earlier.",
      "Presents with chest or back pain, fever, chest-wall swelling, productive cough, hemoptysis, or dyspnea; serum LDH is often elevated.",
    ],
    criteria: [
      "Mass-forming pleural tumor in the setting of longstanding chronic inflammation or pyothorax.",
      "Large-cell lymphoma with B-lineage differentiation, usually CD20 and/or CD79a positive.",
      "EBV positivity in tumor cells, typically EBER positive with type III latency (LMP1 and EBNA2 expression).",
      "HHV8 negative.",
      "Exclude PEL, which is typically HHV8 positive and effusion-based rather than a solid pleural mass.",
    ],
    hist: [
      "Morphology resembles DLBCL-NOS, most often centroblastic or immunoblastic with large round nuclei and prominent single or multiple nucleoli.",
      "Extensive necrosis and angiocentric growth may be present.",
      "Tumor forms a fleshy pleural mass, often larger than 10 cm.",
    ],
    ihc: [
      "Most cases express CD20 and CD79a.",
      "A subset shows plasmacytic differentiation with loss of CD20 and/or CD79a and expression of MUM1/IRF4 and CD138.",
      "Usually has an activated B-cell/non-germinal-center phenotype; CD30 may be positive.",
      "EBER is positive in tumor cells; type III latency is characteristic, with LMP1 and EBNA2 expression.",
      "HHV8 is negative.",
      "Occasional aberrant T-cell marker expression (CD2, CD3, CD4, or CD7) may complicate lineage assignment.",
    ],
    diff: [
      {
        name: "Primary effusion lymphoma",
        distinction:
          "PEL is HHV8 positive and typically presents as an effusion without a solid tumor mass; classic cases often lack CD20/CD79a.",
      },
      {
        name: "Effusion-based large B-cell lymphoma / HHV8-negative PEL-like lymphoma",
        distinction:
          "Usually presents as a cavity effusion without a solid mass, is HHV8 negative, and often retains a mature B-cell phenotype; chronic pyothorax history and EBV latency III favor chronic-inflammation-associated DLBCL.",
      },
      {
        name: "Other DLBCL, including DLBCL-NOS",
        distinction:
          "Requires correlation with the characteristic confined-site chronic inflammatory background and EBV association; the morphology may otherwise be indistinguishable.",
      },
      {
        name: "Fibrin-associated DLBCL",
        distinction:
          "Occurs in association with fibrin in confined spaces and is a separate entity; it is not synonymous with DLBCL associated with chronic inflammation.",
      },
      {
        name: "Primary Effusion Lymphoma (PEL)",
        distinction:
          "Is HHV8-positive and predominantly effusion-based, usually without a solid mass.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is useful and usually positive; EBV latency is typically type III.",
      "Clonal IG gene rearrangements and somatic hypermutation are present.",
      "TP53 mutations occur in a substantial proportion; MYC amplification and TNFAIP3 deletion may occur; complex karyotypes are common.",
    ],
    pitfalls: [
      "Do not classify this tumor as PEL: the defining clinical pattern is a solid pleural mass after chronic inflammation, with EBV positivity and HHV8 negativity.",
      "Do not confuse fibrin-associated DLBCL with chronic-inflammation-associated DLBCL; they are distinct entities.",
    ],
  },
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export default function PleuralPericardialTumorsPage() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const groups = useMemo(
    () => [
      "All",
      ...Array.from(new Set(entities.map((entity) => entity.group))),
    ],
    [],
  );
  const filtered = useMemo(() => {
    const q = normalize(query);
    return entities.filter((entity) => {
      const groupMatch = activeGroup === "All" || entity.group === activeGroup;
      const searchable = normalize(
        [
          entity.name,
          entity.group,
          entity.clue,
          ...entity.profile,
          ...entity.criteria,
          ...entity.hist,
          ...entity.ihc,
          ...entity.diff.flatMap((item) => [item.name, item.distinction]),
          ...entity.molecular,
          ...entity.pitfalls,
        ].join(" "),
      );
      return groupMatch && (!q || searchable.includes(q));
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
            href="/thoracic-tumors"
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
          / Pleural and Pericardial Tumors
        </nav>
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Thoracic Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Pleural and Pericardial Tumors
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A morphology-first diagnostic reference for mesothelial and
            hematolymphoid tumors involving the pleura and pericardium,
            emphasizing invasion, mesothelial lineage, validated ancillary
            studies, and the distinction between effusion-based and mass-forming
            lymphomas.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search diagnosis, morphology, immunohistochemistry, or molecular marker..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 md:max-w-2xl"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setExpanded(filtered.map((entity) => entity.name))}
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
                    <span className="mt-2 block text-sm leading-6 text-slate-600">
                      {entity.clue}
                    </span>
                  </span>
                  <span className="mt-1 shrink-0 text-xl text-slate-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="space-y-5 border-t border-slate-100 px-5 py-5">
                    <Section title="Clinical Profile" items={entity.profile} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.hist} />
                    <Section title="Immunophenotype" items={entity.ihc} />
                    <section>
                      <h3 className="text-sm font-bold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                        {entity.diff.map((item, index) => (
                          <li key={index}>
                            <strong>{item.name}:</strong> {item.distinction}
                          </li>
                        ))}
                      </ul>
                    </section>
                    <Section
                      title="Molecular Pathology"
                      items={entity.molecular}
                    />
                    <Section
                      title="Diagnostic Pitfalls"
                      items={entity.pitfalls}
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
