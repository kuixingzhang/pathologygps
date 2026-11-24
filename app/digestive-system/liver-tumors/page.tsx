"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const items: Item[] = [
  {
    name: "Focal nodular hyperplasia (FNH)",
    group: "Benign",
    behavior: "Non-neoplastic; no malignant potential",
    clinical: [
      "Usually solitary and incidental; may occur at any hepatic site.",
      "Predominantly affects middle-aged women (female-to-male ratio approximately 9:1).",
      "Large lesions may cause abdominal pain or compression; hemorrhage is not an established risk.",
    ],
    criteria: [
      "Unencapsulated, nodular hepatocellular lesion.",
      "Fibrous septa and/or central stellate scar with dystrophic vessels.",
      "No cytoarchitectural features of malignancy.",
      "A map-like (geographic) glutamine synthetase (GS) staining pattern is desirable.",
    ],
    histology: [
      "Benign hepatocytes form nodules, usually in plates one to two cells thick.",
      "Central scar and radiating fibrous septa contain large dystrophic vessels and numerous small arteries.",
      "Arteries are not accompanied by portal veins or bile ducts.",
      "Ductular reaction is common at the interface of fibrous septa and hepatocellular nodules.",
      "Cholestatic changes, steatosis, or large-cell change may be present.",
    ],
    ihc: [
      "GS shows broad, anastomosing, map-like areas of staining.",
      "CK7 and CK19 highlight the ductular reaction.",
      "CD34 may show patchy to diffuse sinusoidal staining.",
      "SAA and CRP are generally not diffusely expressed; focal or periseptal staining can occur.",
    ],
    molecular: [
      "FNH is polyclonal and lacks the pathogenic driver mutations characteristic of HCA.",
      "WNT pathway activation is focal and occurs without CTNNB1 or AXIN1 mutation.",
    ],
    differential: [
      [
        "Inflammatory HCA",
        "Usually lacks map-like GS staining and shows diffuse SAA and/or CRP; sinusoidal dilatation and isolated arteries favor HCA.",
      ],
      [
        "β-catenin–activated HCA",
        "Usually shows diffuse or mutation-pattern GS staining; CTNNB1 mutation supports HCA.",
      ],
      [
        "Well-differentiated HCC",
        "Cytologic/architectural atypia and reticulin disruption favor HCC; diffuse GS and GPC3 support HCC.",
      ],
    ],
    pitfalls: [
      "A limited biopsy may not show the full map-like GS pattern.",
      "Do not label a CTNNB1-mutated nodule with diffuse GS as FNH-like; classify it as β-catenin–activated HCA or an atypical hepatocellular neoplasm as appropriate.",
    ],
  },
  {
    name: "Hepatocellular adenoma (HCA)",
    group: "Benign",
    behavior:
      "Benign; subtype-dependent hemorrhage and malignant transformation risk",
    clinical: [
      "About 85% occur in women of childbearing age; oral contraceptive exposure is a major risk factor.",
      "Associated factors include obesity/metabolic syndrome, anabolic steroids, glycogen storage disease, and other inherited disorders.",
      "Usually incidental; may present with abdominal pain, palpable mass, or hemorrhage.",
      "Hemorrhage occurs in approximately 20–25%; malignant transformation is uncommon (approximately 4–8%) and occurs mainly in men.",
      "Multiple lesions (>10) are termed hepatocellular adenomatosis.",
    ],
    criteria: [
      "Benign hepatocellular neoplasm arising in a non-cirrhotic liver in the usual setting.",
      "Hepatocytes are arranged in plates one to two cells thick, often with unpaired arteries.",
      "Subtype assignment requires integration of morphology, subtype-defining IHC, and molecular findings when indicated.",
      "Assess for atypia, reticulin loss, β-catenin activation, and other features associated with malignant transformation.",
    ],
    histology: [
      "HCA is generally composed of bland hepatocytes in plates one to two cells thick, with occasional pseudoglands.",
      "HNF1A-inactivated HCA: diffuse steatosis, clear or ballooned hepatocytes, and lobulated contours are typical.",
      "Inflammatory HCA: sinusoidal dilatation/congestion, inflammation, thick arteries, and variable ductular reaction; steatosis may occur.",
      "β-catenin–activated HCA: no specific H&E pattern; pseudoglands, irregular nuclei, pigment, or abnormal vessels may occur.",
      "β-catenin–activated inflammatory HCA combines inflammatory morphology with β-catenin pathway activation.",
      "Sonic hedgehog HCA: bland, often small hepatocytes with clear or retracted eosinophilic cytoplasm; hemorrhagic foci and blood-filled or empty cavities are frequent.",
      "Unclassified HCA lacks defining morphologic, immunophenotypic, or molecular features of the recognized subtypes.",
    ],
    ihc: [
      "HNF1A-inactivated HCA: complete loss of L-FABP in lesional hepatocytes.",
      "Inflammatory HCA: diffuse SAA and CRP expression.",
      "β-catenin–activated HCA: GS pattern reflects the strength and type of pathway activation; nuclear β-catenin may be focal or absent.",
      "Strong β-catenin activation (usually non-Ser45 exon 3 mutation): diffuse homogeneous GS.",
      "Moderate activation (e.g., exon 3 Ser45): diffuse heterogeneous, starry-sky GS; peripheral accentuation may occur.",
      "Weak activation (often exon 7/8 mutation): weak, patchy GS; a strong peripheral rim may occur.",
      "β-catenin–activated inflammatory HCA expresses inflammatory markers and shows a β-catenin activation pattern.",
      "Sonic hedgehog HCA: PTGDS is specific but insensitive; ASS1 is more sensitive but not entirely specific.",
    ],
    molecular: [
      "H-HCA: biallelic HNF1A inactivation; accounts for approximately 30–35% of HCA.",
      "IHCA: activating alterations in the IL6/JAK/STAT3 pathway; approximately 35–40%.",
      "β-HCA: CTNNB1 mutation/deletion activates WNT/β-catenin signaling; approximately 10%.",
      "β-IHCA: combined inflammatory-pathway and CTNNB1 alterations; approximately 10–15%.",
      "shHCA: INHBE deletions generating INHBE::GLI1 fusions; approximately 5–10%.",
      "CTNNB1 exon 3 non-Ser45 mutations carry increased malignant transformation risk; exon 7/8 mutations have low or absent risk in the cited classification.",
      "TERT promoter mutations and HCC-like copy-number alterations support progression/malignant transformation in an appropriate β-catenin–activated lesion.",
      "Unclassified HCA represents fewer than 5% after exclusion of all recognized subtypes.",
    ],
    differential: [
      [
        "FNH",
        "Map-like GS and ductular reaction/fibrous septa favor FNH; diffuse SAA/CRP and absent map-like GS favor IHCA.",
      ],
      [
        "HCC",
        "Thick plates, frequent pseudoglands, small-cell change, mitoses, and reticulin loss/fragmentation favor HCC; GPC3 may support HCC.",
      ],
      [
        "Well-differentiated HCC in β-HCA",
        "If morphology/IHC is equivocal, assess CTNNB1, TERT promoter, and copy-number alterations.",
      ],
      [
        "Epithelioid angiomyolipoma / small vessel neoplasm",
        "Consider a non-epithelial lesion and use lineage-directed markers rather than assuming hepatocellular differentiation.",
      ],
    ],
    pitfalls: [
      "GS is a surrogate for CTNNB1 mutation class, not a perfect substitute for sequencing when the pattern is equivocal or risk assessment changes management.",
      "Nuclear β-catenin can be focal or absent despite pathway activation.",
      "Different HCA subtypes can coexist in one liver; multiple nodules may not share the same subtype.",
      "SAA/CRP and L-FABP subtyping stains do not distinguish HCA from HCC by themselves.",
    ],
  },
  {
    name: "Hepatocellular carcinoma (HCC)",
    group: "Malignant",
    behavior: "Malignant; vascular invasion and metastasis may occur",
    clinical: [
      "Usually arises in a background of chronic liver disease or cirrhosis; chronic viral hepatitis, alcohol-related liver disease, and metabolic dysfunction–associated steatotic liver disease are important settings.",
      "Most common primary liver malignancy (approximately 75–85% of primary liver cancers).",
      "Symptoms include right upper quadrant pain, weight loss, jaundice, hepatomegaly, and worsening ascites; symptomatic disease is often advanced.",
      "No preferential intrahepatic location.",
    ],
    criteria: [
      "Primary malignant epithelial neoplasm with hepatocytic differentiation.",
      "Establish malignancy by architecture and cytology, including thickened plates, pseudoglands, stromal invasion, and/or reticulin framework disruption.",
      "Integrate background liver, imaging, and appropriate hepatocellular and malignancy-associated markers.",
      "Sample heterogeneous areas and assess vascular invasion, satellites, and grade.",
    ],
    histology: [
      "Architectural patterns include trabecular, pseudoglandular, and solid growth.",
      "Thickened trabeculae, often more than two cells thick, and pseudogland formation are common.",
      "Cytologic atypia, small-cell change, increased nuclear-to-cytoplasmic ratio, and mitotic activity support malignancy.",
      "Reticulin loss or fragmentation and stromal invasion are important diagnostic features.",
      "Recognized patterns include macrotrabecular-massive, steatohepatitic, scirrhous, clear cell, fibrolamellar, lymphocyte-rich, and sarcomatoid forms.",
    ],
    ihc: [
      "Arginase-1, HepPar-1, and canalicular polyclonal CEA/CD10 support hepatocellular differentiation.",
      "Glypican-3 supports HCC but has limited sensitivity.",
      "GS may be diffuse in β-catenin–activated HCC.",
      "CK19 expression occurs in a subset and may be associated with a more aggressive phenotype.",
    ],
    molecular: [
      "TERT promoter and CTNNB1 mutations are recurrent alterations.",
      "Other recurrent pathway alterations include TP53 and changes in chromatin-remodeling and oxidative-stress pathways.",
      "Copy-number changes may include gains of 1q, 7q, and 8q and losses of 6p and 17q.",
    ],
    differential: [
      [
        "HCA",
        "HCA usually retains a benign reticulin framework and lacks significant atypia, mitoses, and stromal invasion.",
      ],
      [
        "FNH",
        "Map-like GS, ductular reaction, fibrous septa, and absence of malignant cytology favor FNH.",
      ],
      [
        "Metastatic carcinoma / iCCA",
        "Use morphology, clinical/radiologic correlation, and lineage-directed IHC; hepatocellular markers support HCC.",
      ],
    ],
    pitfalls: [
      "Focal reticulin loss can occur in HCA near hemorrhage or steatosis; interpret with the overall architecture.",
      "CD34 sinusoidal capillarization is not specific for HCC.",
      "GPC3 negativity does not exclude HCC.",
    ],
  },
  {
    name: "Hepatoblastoma (HBL)",
    group: "Malignant",
    behavior: "Malignant pediatric liver tumor",
    clinical: [
      "Predominantly affects infants and young children, usually before 3 years of age.",
      "Often presents as an enlarging abdominal mass or distension; serum AFP is commonly elevated.",
      "Usually arises in an otherwise non-cirrhotic liver.",
    ],
    criteria: [
      "Primary malignant embryonal liver tumor in the appropriate pediatric setting.",
      "Recognize epithelial and/or mixed epithelial-mesenchymal patterns.",
      "Correlate morphology with AFP and the characteristic WNT/β-catenin pathway context.",
    ],
    histology: [
      "Epithelial patterns include fetal, embryonal, and small-cell undifferentiated components.",
      "Fetal areas resemble developing hepatocytes and may be well differentiated or mitotically active.",
      "Embryonal areas show smaller, more basophilic cells in acinar, trabecular, or rosette-like patterns.",
      "Mixed tumors contain mesenchymal elements, including osteoid, cartilage, or fibrous tissue.",
      "Post-treatment specimens may show extensive necrosis, fibrosis, and cystic degeneration.",
    ],
    ihc: [
      "Hepatocellular markers support epithelial differentiation.",
      "Nuclear β-catenin may be present in tumor cells.",
      "IHC should be interpreted with morphology; no single stain is independently diagnostic.",
    ],
    molecular: [
      "CTNNB1 mutations and WNT/β-catenin pathway activation occur in up to approximately 90% of cases.",
      "NFE2L2 mutations (approximately 2–5%) and TERT promoter mutations have been associated with poor prognosis in reported studies.",
    ],
    differential: [
      [
        "HCC in a child",
        "HCC generally shows greater genomic complexity and malignant hepatocellular features; molecular context can help in difficult cases.",
      ],
      [
        "Metastatic neuroblastoma",
        "Clinical history and neuroendocrine/neural markers distinguish neuroblastoma from hepatocellular differentiation.",
      ],
      [
        "Pediatric HCN, NOS",
        "Consider when morphology and molecular findings do not meet criteria for HBL or HCC.",
      ],
    ],
    pitfalls: [
      "Small-cell undifferentiated areas require careful exclusion of other pediatric small round cell tumors.",
      "Treatment effect can markedly alter morphology; review pretreatment material when available.",
    ],
  },
  {
    name: "Bile duct adenoma (BDA)",
    group: "Benign",
    behavior:
      "Benign; malignant transformation not established for classic lesions",
    clinical: [
      "Usually a solitary, incidental, subcapsular nodule (approximately 90%).",
      "Occurs predominantly in adults without a specific sex predilection.",
      "Often discovered during surgery, autopsy, or examination of a resection specimen.",
    ],
    criteria: [
      "Small, nodular proliferation of benign small bile ducts.",
      "Frequent inclusion of portal tracts.",
      "No infiltrative or pushing growth margin.",
    ],
    histology: [
      "Disordered collection of uniform small tubules in fibrous stroma.",
      "Tubules have absent or narrow lumina and are lined by bland cuboidal cells.",
      "Chronic inflammation and collagenization vary in degree.",
      "Portal tracts are typically entrapped within the nodule.",
      "Oncocytic and clear-cell patterns have been described.",
    ],
    ihc: [
      "Biliary epithelium expresses CK7 and CK19.",
      "Ki-67 is low (average approximately 2%; reported not to exceed 10%).",
      "Strong p53 staining is not expected; EZH2 favors carcinoma, whereas p16 expression favors BDA in the cited differential.",
    ],
    molecular: [
      "BRAF p.Val600Glu has been detected in a subset (8 of 15 cases in one cited series); molecular testing is not routinely clinically relevant.",
    ],
    differential: [
      [
        "Small duct iCCA",
        "Invasive growth, larger size, atypia, and higher proliferation favor carcinoma.",
      ],
      [
        "Reactive ductular proliferation",
        "Usually lacks a discrete, circumscribed nodular configuration.",
      ],
      [
        "Von Meyenburg complex / biliary adenofibroma",
        "Look for multiple microhamartomatous cystic ducts or the solid-microcystic architecture and stromal scaffold of adenofibroma.",
      ],
    ],
    pitfalls: [
      "BDA can mimic metastatic adenocarcinoma at frozen section; avoid overcalling a small bland subcapsular nodule.",
      "Albumin in situ hybridization and CRP can be positive and do not independently establish malignancy.",
    ],
  },
  {
    name: "Biliary adenofibroma (BAF)",
    group: "Benign",
    behavior:
      "Benign epithelial neoplasm; rare malignant transformation has been described",
    clinical: [
      "Very rare; fewer than 35 cases had been reported in the cited literature.",
      "May present with abdominal pain or be discovered incidentally.",
      "No preferential location within the liver.",
    ],
    criteria: [
      "Solid-microcystic intrahepatic epithelial neoplasm.",
      "Variably dilated tubular structures lined by non-mucin-secreting biliary epithelium.",
      "Fibrotic stromal scaffolding supports the epithelial component.",
    ],
    histology: [
      "Tubules and variably dilated cystic spaces are lined by bland biliary epithelium.",
      "The intervening stroma forms a conspicuous fibrotic scaffold.",
      "Assess carefully for cytologic atypia, complex architecture, and invasive growth when considering malignant transformation.",
    ],
    ihc: [
      "Epithelial cells show biliary differentiation, typically including CK7 and CK19.",
      "Use IHC to characterize the epithelial component and exclude mimics; no single defining marker is specified in the supplied excerpt.",
    ],
    molecular: [],
    differential: [
      [
        "Bile duct adenoma",
        "BDA is a small, solid nodular proliferation of tightly packed ducts and typically lacks the microcystic architecture and prominent stromal scaffold.",
      ],
      [
        "Von Meyenburg complex",
        "Usually consists of multiple small, bile-containing ductal microhamartomas.",
      ],
      [
        "Mucinous cystic neoplasm",
        "MCN has mucinous epithelium and ovarian-type stroma; BAF is lined by non-mucin-secreting biliary epithelium.",
      ],
    ],
    pitfalls: [
      "The supplied source does not identify a clinically useful molecular test; do not add nonvalidated molecular claims.",
    ],
  },
  {
    name: "Mucinous cystic neoplasm of the liver (MCN)",
    group: "Benign / potentially malignant",
    behavior: "Usually non-invasive; invasive carcinoma occurs in a minority",
    clinical: [
      "Occurs overwhelmingly in women, typically in middle age.",
      "Usually a solitary, large, multilocular cystic mass, most often in the left hepatic lobe.",
      "May cause abdominal pain, fullness, or be found incidentally.",
    ],
    criteria: [
      "Cyst-forming hepatic neoplasm lined by mucin-producing epithelium.",
      "Ovarian-type subepithelial stroma is required for diagnosis.",
      "Assess for dysplasia and associated invasive carcinoma.",
    ],
    histology: [
      "Multiloculated cystic spaces are lined by mucinous columnar or cuboidal epithelium.",
      "Subepithelial ovarian-type stroma is the defining feature and may be inconspicuous in limited samples.",
      "Epithelial dysplasia ranges from low grade to high grade.",
      "Invasive carcinoma, when present, is usually associated with high-grade dysplasia.",
    ],
    ihc: [
      "Ovarian-type stroma commonly expresses ER, PR, and inhibin; stromal markers support the diagnosis.",
      "Epithelial cells express biliary markers such as CK7 and CK19.",
    ],
    molecular: [],
    differential: [
      [
        "Intraductal papillary neoplasm of the bile duct",
        "IPNB communicates with bile ducts and shows intraductal papillary growth; MCN has ovarian-type stroma and usually does not communicate with ducts.",
      ],
      [
        "Simple hepatic cyst",
        "Lacks mucinous neoplastic epithelium and ovarian-type stroma.",
      ],
      [
        "Biliary adenofibroma",
        "BAF has bland non-mucinous biliary epithelium and a fibrotic scaffold, not ovarian-type stroma.",
      ],
    ],
    pitfalls: [
      "Ovarian-type stroma may be focal; extensive sampling is important.",
      "Do not use the obsolete terms biliary cystadenoma or cystadenocarcinoma.",
    ],
  },
  {
    name: "Small duct intrahepatic cholangiocarcinoma (SD-iCCA)",
    group: "Malignant",
    behavior: "Malignant biliary carcinoma",
    clinical: [
      "Usually a peripheral, mass-forming tumor; often diagnosed at a relatively large size.",
      "Approximately half of patients have underlying chronic liver disease or cirrhosis.",
      "Mean age for iCCA overall is approximately 55–75 years; iCCA is more frequent in men.",
      "May be detected during surveillance or resection for suspected HCC.",
    ],
    criteria: [
      "Malignant epithelial neoplasm with biliary differentiation.",
      "Typically composed of small tubules with narrow lumina and no significant mucin production.",
      "Demonstrate infiltrative growth or other unequivocal evidence of malignancy.",
    ],
    histology: [
      "Anastomosing small tubular glands are typical; trabecular, cord-like, solid, or other patterns may coexist.",
      "Tubular lumina are small or slit-like and generally lack significant mucin.",
      "Tumor cells are cuboidal to low columnar with variable nuclear atypia.",
      "Desmoplastic stroma is common; replacement growth can mimic HCC.",
      "Subtypes include cholangiolocellular, ductal plate malformation-like, lymphoepithelioma-like, and solid-tubulocystic patterns.",
    ],
    ihc: [
      "CK7 and CK19 commonly support biliary differentiation.",
      "Albumin RNA in situ hybridization supports a primary hepatic origin in the appropriate context but is not specific for malignancy.",
      "CRP may be expressed and does not by itself distinguish SD-iCCA from benign lesions.",
    ],
    molecular: [
      "IDH1/2 mutations and FGFR2 fusions are characteristic actionable alterations in subsets of small duct iCCA.",
      "BAP1 and other chromatin-remodeling gene alterations occur in subsets.",
      "Molecular profiling can identify therapeutic targets; no molecular test is required for diagnosis.",
    ],
    differential: [
      [
        "HCC",
        "HCC shows hepatocellular differentiation; SD-iCCA shows small glands and biliary phenotype, although replacement growth can mimic trabecular HCC.",
      ],
      [
        "Bile duct adenoma",
        "BDA is small, circumscribed, bland, and noninfiltrative with low proliferation.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Correlate with clinical history and imaging; albumin ISH may support primary hepatic origin but is not definitive alone.",
      ],
    ],
    pitfalls: [
      "Albumin ISH and CRP positivity do not prove carcinoma.",
      "Some SD-iCCAs show trabecular or replacement growth and can mimic HCC.",
    ],
  },
  {
    name: "Large duct intrahepatic cholangiocarcinoma (LD-iCCA)",
    group: "Malignant",
    behavior: "Malignant biliary carcinoma",
    clinical: [
      "Often arises in association with large-duct cholangiopathies, including primary sclerosing cholangitis, hepatolithiasis, and liver-fluke infection.",
      "May present with abdominal pain, weight loss, jaundice, or biliary obstruction.",
      "Upstream bile duct dilatation and periductal growth are more characteristic than in SD-iCCA.",
    ],
    criteria: [
      "Malignant epithelial neoplasm with large-duct biliary differentiation.",
      "Mucin-producing glands and/or large-duct morphology are typical.",
      "Periductal infiltrative growth and desmoplasia support the diagnosis.",
    ],
    histology: [
      "Glandular and papillary structures are lined by mucin-producing columnar cells.",
      "Periductal infiltrative growth, desmoplastic stroma, and perineural/vascular invasion may be present.",
      "Large duct tumors may show biliary intraepithelial neoplasia or intraductal papillary precursor lesions.",
      "Tumor cells often show more abundant mucin than SD-iCCA.",
    ],
    ihc: [
      "CK7 and CK19 support biliary differentiation.",
      "Mucin markers may be expressed; interpret in conjunction with morphology.",
    ],
    molecular: [
      "KRAS and TP53 alterations are frequent in large duct iCCA.",
      "SMAD4 and other alterations may occur; IDH1/2 mutations and FGFR2 fusions are less characteristic than in SD-iCCA.",
    ],
    differential: [
      [
        "SD-iCCA",
        "SD-iCCA typically has small non-mucinous tubules, a peripheral mass-forming pattern, and more frequent IDH1/2 mutations or FGFR2 fusions.",
      ],
      [
        "Metastatic pancreaticobiliary adenocarcinoma",
        "Clinical history, imaging, and anatomic relationship to major ducts are essential.",
      ],
      [
        "Biliary intraepithelial neoplasia / IPNB",
        "Precursor lesions lack destructive stromal invasion.",
      ],
    ],
    pitfalls: [
      "Do not infer large duct type from location alone; integrate growth pattern, mucin production, and clinical context.",
    ],
  },
  {
    name: "Combined hepatocellular-cholangiocarcinoma (cHCC-CCA)",
    group: "Malignant",
    behavior: "Malignant primary liver carcinoma",
    clinical: [
      "Rare; accounts for fewer than 1% of primary liver carcinomas.",
      "Clinical setting and imaging overlap with HCC and SD-iCCA.",
      "Often arises in a background of chronic liver disease; age and sex distribution resemble HCC.",
    ],
    criteria: [
      "Unequivocal hepatocellular and cholangiocytic differentiation must both be present in the same primary liver carcinoma.",
      "Each component must meet the established morphologic criteria for HCC or CCA.",
      "IHC may confirm the respective morphologies but cannot establish the diagnosis without supportive H&E findings.",
      "Estimate the proportion of each component and grade each separately when possible.",
    ],
    histology: [
      "HCC and CCA components may be juxtaposed, intermingled, or show a transition zone.",
      "Hepatocellular areas show characteristic HCC architecture and cytology.",
      "Cholangiocytic areas show glandular differentiation, often with desmoplastic stroma.",
      "Stem-cell-like areas may occur but are not required for diagnosis.",
    ],
    ihc: [
      "Use hepatocellular markers (e.g., arginase-1, HepPar-1) to support hepatocytic areas.",
      "Use biliary markers (e.g., CK7, CK19) to support cholangiocytic areas.",
      "IHC alone, without the corresponding morphologic components, is insufficient.",
    ],
    molecular: [
      "Molecular studies support a shared clonal origin of the two components.",
      "The profile is often closer to HCC, with TERT promoter and CTNNB1 alterations more common than typical iCCA alterations such as KRAS and IDH1.",
    ],
    differential: [
      [
        "HCC with aberrant CK19 expression",
        "Biliary-marker expression alone does not establish a CCA component; unequivocal glandular morphology is required.",
      ],
      [
        "iCCA with hepatocellular marker expression",
        "Hepatocellular-marker positivity alone does not establish HCC differentiation; require unequivocal HCC morphology.",
      ],
      [
        "Collision tumor",
        "Careful sampling and assessment of transition/intermingling help distinguish a combined carcinoma from two independent tumors.",
      ],
    ],
    pitfalls: [
      "Do not diagnose cHCC-CCA solely from immunophenotypic co-expression.",
      "There is no minimum percentage cutoff for either component; report their estimated proportions.",
    ],
  },
];

const hcaRows = [
  [
    "HNF1A-inactivated HCA (H-HCA)",
    "Diffuse macro-/microsteatosis; clear or ballooned hepatocytes; lobulated contour; occasional pseudoglands.",
    "Complete loss of L-FABP in lesional hepatocytes.",
    "Biallelic HNF1A inactivation; approximately 30–35% of HCA.",
  ],
  [
    "Inflammatory HCA (IHCA)",
    "Sinusoidal dilatation/congestion, inflammation, thick arteries, variable ductular reaction; steatosis may occur.",
    "Diffuse SAA and CRP expression.",
    "Activating alterations in IL6/JAK/STAT3 pathway; approximately 35–40%.",
  ],
  [
    "β-catenin–activated HCA (β-HCA)",
    "No specific H&E pattern; pseudoglands, irregular nuclei, pigment, or abnormal vessels may occur.",
    "GS pattern depends on mutation strength; nuclear β-catenin may be focal or absent.",
    "CTNNB1 mutation/deletion; approximately 10%. Non-Ser45 exon 3 mutations carry increased malignant transformation risk; exon 7/8 mutations have low/absent risk.",
  ],
  [
    "β-catenin–activated inflammatory HCA (β-IHCA)",
    "Inflammatory HCA morphology combined with β-catenin pathway activation.",
    "SAA/CRP positive; GS shows a β-catenin activation pattern.",
    "Combined inflammatory-pathway and CTNNB1 alterations; approximately 10–15%.",
  ],
  [
    "Sonic hedgehog HCA (shHCA)",
    "Bland small hepatocytes with clear or retracted eosinophilic cytoplasm; hemorrhagic foci and blood-filled/empty cavities are frequent.",
    "PTGDS is specific but insensitive; ASS1 is more sensitive but not entirely specific; L-FABP may be reduced.",
    "INHBE deletion generating INHBE::GLI1 fusion; approximately 5–10%; associated with increased hemorrhage risk.",
  ],
  [
    "Unclassified HCA",
    "No defining morphologic pattern after exclusion of recognized subtypes.",
    "No defining subtype-specific profile.",
    "No defining molecular alteration; fewer than 5%.",
  ],
];

const cats = ["All", "Benign", "Benign / potentially malignant", "Malignant"];
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
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          {v}
        </li>
      ))}
    </ul>
  );
}

export default function LiverTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Hepatocellular adenoma (HCA)",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            ...x.clinical,
            ...x.criteria,
            ...x.histology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI & Liver / Liver Tumors
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Liver Tumors
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Hepatocellular adenoma: integrated subtype classification">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            The table integrates the WHO-described morphology, defining
            immunophenotype, and molecular basis. Percentages are approximate
            proportions among HCAs; they are not diagnostic criteria.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="w-[19%] py-3 pr-4">HCA subtype</th>
                  <th className="w-[29%] py-3 pr-4">Histology</th>
                  <th className="w-[24%] py-3 pr-4">Defining / useful IHC</th>
                  <th className="py-3">
                    Molecular basis and clinical relevance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {hcaRows.map((r, i) => (
                  <tr key={i} className="align-top">
                    <td className="py-3 pr-4 font-semibold text-slate-900">
                      {r[0]}
                    </td>
                    <td className="py-3 pr-4 leading-6 text-slate-700">
                      {r[1]}
                    </td>
                    <td className="py-3 pr-4 leading-6 text-slate-700">
                      {r[2]}
                    </td>
                    <td className="py-3 leading-6 text-slate-700">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <b>Interpretive point:</b> GS is a useful surrogate for the
            strength/pattern of β-catenin pathway activation, but nuclear
            β-catenin may be focal or absent. If the GS pattern is
            equivocal—especially on biopsy—and risk assessment will affect
            management, perform molecular analysis of CTNNB1.
          </div>
        </Panel>

        <Panel title="HCA: practical interpretation of the GS pattern">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-4">GS pattern</th>
                  <th className="py-2 pr-4">Likely molecular context</th>
                  <th className="py-2">Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Diffuse homogeneous
                  </td>
                  <td className="py-3 pr-4">
                    Strong β-catenin activation, commonly non-Ser45 exon 3
                    CTNNB1 mutation or large deletion
                  </td>
                  <td className="py-3">
                    Higher-risk β-HCA pattern; correlate with molecular testing
                    and morphology.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Diffuse heterogeneous / starry-sky
                  </td>
                  <td className="py-3 pr-4">
                    Moderate activation, e.g., CTNNB1 exon 3 Ser45
                  </td>
                  <td className="py-3">
                    β-catenin activation; assess exact mutation because risk
                    differs by mutation class.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">Weak patchy</td>
                  <td className="py-3 pr-4">Often CTNNB1 exon 7/8</td>
                  <td className="py-3">
                    Usually weak pathway activation with low/absent malignant
                    transformation risk in the cited classification.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Strong peripheral rim
                  </td>
                  <td className="py-3 pr-4">
                    May occur with exon 3 Ser45 or exon 7/8 mutations
                  </td>
                  <td className="py-3">
                    Can mimic FNH map-like GS; evaluate the overall pattern and
                    CD34 distribution, and consider sequencing.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Map-like geographic
                  </td>
                  <td className="py-3 pr-4">
                    FNH-associated focal WNT activation without CTNNB1 mutation
                  </td>
                  <td className="py-3">
                    Supports FNH when the morphology is concordant.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile and diagnostic criteria
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, site, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. CTNNB1, GS, L-FABP, CK19..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.histology} />
                        {p.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunohistochemistry
                            </h4>
                            <Bullets items={p.ihc} />
                          </>
                        )}
                        {p.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular Pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
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

        <Panel title="Hepatocellular adenoma: risk-oriented checklist">
          <Bullets
            items={[
              "Record sex, tumor size, multiplicity, oral contraceptive/anabolic steroid exposure, pregnancy, obesity/metabolic syndrome, and relevant inherited disease.",
              "Carefully assess lesions ≥50 mm, hemorrhage, atypia, reticulin abnormalities, and any β-catenin activation.",
              "Male sex, androgen-associated HCA, β-catenin activation (particularly exon 3), and borderline features increase concern for malignant transformation.",
              "When lesions are multiple, subtype each nodule when possible; different subtypes may coexist in the same liver.",
              "If GS is equivocal and subtype assignment will affect management, confirm CTNNB1 status molecularly.",
              "Sample heterogeneous and hemorrhagic areas; a limited core may not represent the entire lesion.",
            ]}
          />
        </Panel>
        <Panel title="High-yield molecular and ancillary tests">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-4">Clinical / diagnostic question</th>
                  <th className="py-2 pr-4">Test</th>
                  <th className="py-2">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "H-HCA",
                    "L-FABP IHC; HNF1A testing if needed",
                    "Loss of L-FABP supports HNF1A-inactivated HCA.",
                  ],
                  [
                    "IHCA",
                    "SAA and CRP IHC",
                    "Diffuse expression supports inflammatory pathway activation.",
                  ],
                  [
                    "β-HCA / β-IHCA",
                    "GS IHC; CTNNB1 sequencing when equivocal",
                    "Classifies pathway activation and refines malignant transformation risk.",
                  ],
                  [
                    "shHCA",
                    "PTGDS and ASS1 IHC; INHBE::GLI1 testing",
                    "Supports sonic hedgehog subtype; PTGDS specific but insensitive.",
                  ],
                  [
                    "HCC vs HCA",
                    "Reticulin, GPC3, hepatocellular markers; TERT promoter / copy-number analysis in selected cases",
                    "Integrate morphology and ancillary findings; no single stain is definitive.",
                  ],
                  [
                    "iCCA",
                    "Comprehensive molecular profiling",
                    "May identify actionable IDH1/2 mutations or FGFR2 fusions, particularly in SD-iCCA.",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4 font-semibold">{r[0]}</td>
                    <td className="py-3 pr-4 text-slate-700">{r[1]}</td>
                    <td className="py-3 text-slate-700">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Prepared from the
          supplied WHO liver tumor excerpt. Molecular findings are included only
          where they support classification, differential diagnosis, risk
          assessment, or targeted treatment. IHC and molecular results must be
          interpreted with morphology and clinical/radiologic correlation.
        </footer>
      </div>
    </main>
  );
}
