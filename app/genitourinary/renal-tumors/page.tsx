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
  differential: [string, string][];
  molecular: string[];
  pitfalls: string[];
};

const rccEntities: Entity[] = [
  {
    name: "Clear cell renal cell carcinoma (CCRCC)",
    category: "Morphologically defined RCC",
    site: "Usually solitary, unilateral renal cortical mass.",
    clinical: [
      "Most common sporadic RCC (60–75%).",
      "Usually adults aged ≥60 years; median age approximately 62 years.",
      "More common in men.",
      "May present with hematuria or flank pain; many are detected incidentally.",
      "May first present with hematogenous metastasis.",
    ],
    criteria: [
      "Renal mass with nested, tubular, or alveolar architecture.",
      "Predominantly clear cells with delicate arborizing vasculature.",
      "Diffuse membranous CAIX or VHL pathway alteration is supportive, especially in atypical cases.",
    ],
    histology: [
      "Nested, alveolar, tubular, or cystic architecture.",
      "Optically clear cytoplasm is typical; eosinophilic cells may increase with grade.",
      "A rich capillary network surrounds tumor nests.",
      "High-grade tumors may show necrosis, sarcomatoid change, or rhabdoid differentiation.",
    ],
    ihc: [
      "CAIX: strong, diffuse, circumferential membranous staining.",
      "PAX8: positive; supports renal epithelial origin.",
      "CD10 and RCC antigen: commonly positive.",
      "CK7: usually negative or focal.",
      "Vimentin: commonly positive.",
      "KIT (CD117): typically negative.",
    ],
    differential: [
      [
        "Clear cell papillary renal cell tumor",
        "CK7 is usually diffuse and CAIX has a cup-shaped pattern; CCRCC usually has diffuse box-like CAIX and limited CK7.",
      ],
      [
        "MiT family translocation RCC",
        "Consider in younger patients or tumors with papillary/nested architecture; use TFE3/TFEB IHC and molecular confirmation.",
      ],
      [
        "Chromophobe RCC",
        "Perinuclear halos and distinct cell borders; usually KIT-positive and CAIX-negative.",
      ],
      [
        "Metastatic clear cell carcinoma",
        "PAX8 supports renal origin but is not specific; correlate with clinical history and organ-specific markers.",
      ],
    ],
    molecular: [
      "3p loss and VHL inactivation occur in >90% of sporadic cases.",
      "PBRM1, SETD2, and BAP1 are recurrently altered; BAP1 alteration is associated with more aggressive biology.",
      "VHL pathway activation drives CAIX and other hypoxia-inducible proteins.",
    ],
    pitfalls: [
      "Grade heterogeneity is common; report the highest grade represented by at least one high-power field.",
      "Sarcomatoid and rhabdoid differentiation are grade 4 features, not separate RCC entities.",
    ],
  },
  {
    name: "Papillary renal cell carcinoma (PRCC)",
    category: "Morphologically defined RCC",
    site: "Renal cortex; often well circumscribed.",
    clinical: [
      "Usually adults; male predominance.",
      "May be multifocal or bilateral, particularly in hereditary settings.",
      "Often detected as an incidental renal mass.",
    ],
    criteria: [
      "Papillary or tubulopapillary architecture with fibrovascular cores.",
      "Foamy macrophages and psammoma bodies may be present.",
      "Classic papillary morphology is the defining pattern; do not retain the former type 2 category as a single entity.",
    ],
    histology: [
      "Papillae are lined by cuboidal to columnar tumor cells.",
      "Foamy macrophages may accumulate within papillary cores.",
      "Psammoma bodies may be present.",
      "Eosinophilic and high-grade patterns broaden the differential diagnosis.",
    ],
    ihc: [
      "AMACR: typically diffuse and strong.",
      "CK7: commonly positive, often substantial; may be reduced or absent in eosinophilic tumors.",
      "CD10 and vimentin: often positive.",
      "PAX8: positive.",
    ],
    differential: [
      [
        "FH-deficient RCC",
        "High-grade cytology and prominent viral inclusion-like nucleoli; assess FH and 2SC.",
      ],
      [
        "TFE3/TFEB-rearranged RCC",
        "Consider in younger patients or unusual papillary tumors; confirm rearrangement.",
      ],
      [
        "Collecting duct carcinoma",
        "Infiltrative high-grade tubules in desmoplastic stroma, often medullary.",
      ],
      [
        "Eosinophilic solid and cystic RCC",
        "Solid/cystic architecture and characteristic CK20/cathepsin K profile.",
      ],
    ],
    molecular: [
      "MET pathway alterations occur in a subset, especially in hereditary and some sporadic tumors.",
      "Molecular testing may be useful in high-grade or morphologically atypical papillary-pattern tumors to exclude distinct molecularly defined entities.",
    ],
    pitfalls: [
      "The historical type 2 papillary RCC category is heterogeneous and should prompt exclusion of other defined entities.",
    ],
  },
  {
    name: "Chromophobe renal cell carcinoma (ChRCC)",
    category: "Morphologically defined RCC",
    site: "Renal cortex.",
    clinical: [
      "Usually adults, commonly in the sixth decade.",
      "Often an incidental renal mass; may be large at presentation.",
    ],
    criteria: [
      "Solid sheets, nests, or trabeculae of pale or eosinophilic cells.",
      "Distinct cell borders, perinuclear halos, and irregular wrinkled nuclei.",
      "A characteristic chromosomal-loss profile supports the diagnosis.",
    ],
    histology: [
      "Classic cells have pale reticulated cytoplasm and sharply defined borders.",
      "Eosinophilic variant has abundant granular eosinophilic cytoplasm.",
      "Perinuclear halos and raisinoid nuclear contours are characteristic.",
      "Sarcomatoid transformation may occur.",
    ],
    ihc: [
      "KIT (CD117): typically positive.",
      "CK7: usually diffuse or broad, although distribution can vary.",
      "CAIX: generally negative.",
      "CD10: usually negative or limited.",
    ],
    differential: [
      [
        "Renal oncocytoma",
        "Oncocytoma typically has diffuse KIT and absent or scattered CK7; ChRCC usually shows broader CK7 and perinuclear halos.",
      ],
      [
        "Eosinophilic solid and cystic RCC",
        "Often CK20-positive and KIT-negative; molecularly associated with TSC pathway alterations.",
      ],
      ["SDH-deficient RCC", "Loss of SDHB is defining; often KIT-negative."],
      [
        "Eosinophilic papillary RCC",
        "AMACR and CK7 profile plus papillary architecture favor papillary RCC.",
      ],
    ],
    molecular: [
      "Multiple chromosome losses are characteristic.",
      "TP53 and PTEN alterations occur in subsets.",
      "WHO/ISUP grading is not applicable to ChRCC.",
    ],
    pitfalls: [
      "Oncocytoma-like areas may occur; a limited core biopsy may not permit a definitive distinction.",
    ],
  },
  {
    name: "Collecting duct carcinoma (CDC)",
    category: "Morphologically defined RCC",
    site: "Renal medulla.",
    clinical: [
      "Rare, aggressive carcinoma, usually in adults.",
      "Often presents at an advanced stage with hematuria, flank pain, or a renal mass.",
    ],
    criteria: [
      "Infiltrative high-grade carcinoma centered in the renal medulla.",
      "Irregular tubules, glands, or tubulopapillary structures in desmoplastic stroma.",
      "Exclude FH-deficient RCC, upper tract urothelial carcinoma, and metastasis.",
    ],
    histology: [
      "Angulated tubules and glands infiltrate a desmoplastic stroma.",
      "High-grade cytology and prominent nucleoli are common.",
      "Necrosis and sarcomatoid features may occur.",
    ],
    ihc: [
      "PAX8: typically positive.",
      "High- and low-molecular-weight cytokeratins (including 34βE12, CK7, CK19): commonly positive.",
      "SMARCB1/INI1: retained in conventional CDC.",
      "FH: retained; loss should prompt FH-deficient RCC.",
      "p63 and GATA3: useful in evaluating urothelial carcinoma.",
    ],
    differential: [
      [
        "FH-deficient RCC",
        "FH loss and 2SC positivity support FH-deficient RCC; a substantial fraction of historical CDC diagnoses may be reclassified.",
      ],
      [
        "Upper tract urothelial carcinoma",
        "GATA3/p63 positivity and associated urothelial in situ disease favor urothelial origin.",
      ],
      [
        "Metastatic carcinoma",
        "PAX8 and clinical/radiologic correlation help establish renal origin.",
      ],
      [
        "Mucinous tubular and spindle cell carcinoma",
        "Usually lower-grade, with mucinous stroma and spindle-cell areas.",
      ],
    ],
    molecular: [
      "No single defining molecular alteration is established in the supplied source.",
      "Molecular studies have identified FH and SMARCB1 alterations in tumors previously classified as CDC, emphasizing the need to exclude defined entities.",
    ],
    pitfalls: [
      "Careful sampling of the renal pelvis and tumor is important.",
      "Use FH and 2SC when morphology or clinical context raises concern for FH-deficient RCC.",
    ],
  },
  {
    name: "Clear cell papillary renal cell tumor (CCPRCT)",
    category: "Other morphologically defined renal tumor",
    site: "Renal cortex.",
    clinical: [
      "Usually small, localized tumors in adults.",
      "Often detected incidentally.",
      "No metastatic events have been reported in the source; hence the term tumor rather than carcinoma.",
    ],
    criteria: [
      "Tubular, papillary, or branching architecture lined by clear cells.",
      "Low-grade nuclei are aligned away from the basement membrane (apically oriented).",
      "Diffuse CK7 and cup-shaped CAIX are characteristic.",
    ],
    histology: [
      "Tubules and papillae are lined by cells with clear cytoplasm.",
      "Nuclei are characteristically aligned toward the luminal/apical surface.",
      "High-grade features and necrosis argue against this diagnosis.",
    ],
    ihc: [
      "CK7: diffuse, strong positivity.",
      "CAIX: cup-shaped/basolateral staining rather than circumferential box-like staining.",
      "PAX8: positive.",
      "CD10 and AMACR: usually negative or limited.",
    ],
    differential: [
      [
        "CCRCC",
        "Usually CK7-negative/focal, CD10-positive, and circumferential CAIX-positive.",
      ],
      [
        "Papillary RCC",
        "Usually AMACR-positive and lacks the characteristic apically aligned nuclei/cup-shaped CAIX pattern.",
      ],
      [
        "MiT family translocation RCC",
        "Can show papillary architecture; use appropriate molecular workup when atypical.",
      ],
    ],
    molecular: [
      "Typically lacks the VHL/3p alterations characteristic of CCRCC.",
      "No defining recurrent molecular alteration is established in the supplied source.",
    ],
    pitfalls: [
      "Do not diagnose this indolent tumor when high-grade cytology, necrosis, or destructive invasion is present.",
    ],
  },
  {
    name: "Mucinous tubular and spindle cell carcinoma (MTSCC)",
    category: "Other morphologically defined RCC",
    site: "Usually renal cortex.",
    clinical: [
      "Usually adults, with female predominance in many series.",
      "Often presents as a localized renal mass.",
    ],
    criteria: [
      "Tightly packed elongated tubules and spindle-cell areas.",
      "Mucinous/myxoid stroma is a key feature.",
      "Foamy macrophages may be present.",
    ],
    histology: [
      "Tubules are lined by bland cuboidal cells.",
      "Spindle-cell fascicles merge with tubular areas.",
      "Mucinous stroma separates tumor structures.",
      "High-grade transformation may occur and alters the differential diagnosis.",
    ],
    ihc: [
      "PAX8: positive.",
      "CK7: commonly positive.",
      "AMACR: commonly positive.",
      "CD10: variable; interpret as part of a panel.",
    ],
    differential: [
      [
        "Papillary RCC",
        "Papillary RCC has true fibrovascular papillae and often foamy macrophages; MTSCC shows elongated tubules/spindled areas in mucinous stroma.",
      ],
      [
        "Collecting duct carcinoma",
        "CDC is high-grade and infiltrative with desmoplasia.",
      ],
      [
        "FH-deficient RCC",
        "Exclude in high-grade or atypical cases using FH and 2SC.",
      ],
    ],
    molecular: [
      "No single defining molecular alteration is established in the supplied source.",
    ],
    pitfalls: [
      "High-grade transformation may obscure the characteristic low-grade component.",
    ],
  },
  {
    name: "Tubulocystic renal cell carcinoma",
    category: "Other morphologically defined RCC",
    site: "Renal cortex.",
    clinical: [
      "Usually adults, with male predominance.",
      "Often presents as a small, well-circumscribed renal mass.",
    ],
    criteria: [
      "Tubules and cysts of variable size with a hobnail lining.",
      "Eosinophilic cells with prominent nucleoli.",
      "Exclude FH-deficient RCC, which may show overlapping tubulocystic morphology.",
    ],
    histology: [
      "Tubules and cysts are separated by fibrous septa.",
      "Tumor cells have abundant eosinophilic cytoplasm and apical protrusions.",
      "Nucleoli are often prominent.",
      "High-grade areas may be present.",
    ],
    ihc: [
      "PAX8: positive.",
      "AMACR: commonly positive.",
      "CK7: variable, often limited.",
      "CD10: commonly positive.",
    ],
    differential: [
      [
        "FH-deficient RCC",
        "May show tubulocystic architecture but has heterogeneous patterns and high-grade cytology; assess FH and 2SC.",
      ],
      [
        "Collecting duct carcinoma",
        "Typically infiltrative, medullary, and desmoplastic.",
      ],
      ["MTSCC", "MTSCC has spindle-cell areas and mucinous stroma."],
    ],
    molecular: [
      "No clinically useful defining molecular alteration is established in the supplied source.",
    ],
    pitfalls: [
      "Tubulocystic architecture is not specific; actively exclude FH-deficient RCC.",
    ],
  },
  {
    name: "Acquired cystic disease-associated RCC (ACD-RCC)",
    category: "Other morphologically defined RCC",
    site: "Kidneys with end-stage renal disease and acquired cystic disease.",
    clinical: [
      "Occurs in patients with long-standing end-stage renal disease, often on dialysis.",
      "Usually arises in a background of acquired renal cysts.",
      "May be multifocal or bilateral.",
    ],
    criteria: [
      "Renal carcinoma arising in acquired cystic disease/end-stage renal disease.",
      "Tubular, papillary, tubulocystic, microcystic, or solid patterns.",
      "Eosinophilic cells with prominent nucleoli and characteristic cribriform/sieve-like spaces may be seen.",
    ],
    histology: [
      "Mixed tubular, papillary, microcystic, and solid patterns are common.",
      "Eosinophilic tumor cells may contain intracytoplasmic lumina.",
      "Cribriform spaces and calcium oxalate crystals may be present.",
    ],
    ihc: [
      "PAX8: supports renal epithelial differentiation.",
      "AMACR: commonly positive.",
      "CK7: variable; often limited.",
      "CD10: may be positive.",
      "Use a panel because no single stain is defining.",
    ],
    differential: [
      [
        "Papillary RCC",
        "Clinical background of end-stage renal disease and characteristic crystals/cribriform spaces support ACD-RCC.",
      ],
      [
        "Eosinophilic solid and cystic RCC",
        "ESC-RCC typically shows CK20 and cathepsin K expression and TSC pathway alterations.",
      ],
      ["ChRCC", "KIT and CK7 pattern plus morphology help distinguish."],
    ],
    molecular: [
      "No defining molecular alteration is established in the supplied source.",
    ],
    pitfalls: [
      "Do not assume every RCC in end-stage renal disease is ACD-RCC; other RCC subtypes also occur.",
    ],
  },
  {
    name: "Eosinophilic solid and cystic RCC (ESC-RCC)",
    category: "Other morphologically defined RCC",
    site: "Renal cortex.",
    clinical: [
      "Predominantly adults; female predominance is reported.",
      "Usually localized renal mass.",
    ],
    criteria: [
      "Solid and cystic architecture with eosinophilic cells.",
      "Characteristic cytoplasmic stippling and/or coarse granularity.",
      "CK20 and cathepsin K are commonly positive; CK7 and KIT are usually negative.",
    ],
    histology: [
      "Solid and cystic areas are present, often with papillary or tubular foci.",
      "Tumor cells have voluminous eosinophilic cytoplasm with coarse stippling.",
      "Binucleation and cytoplasmic vacuolization may occur.",
      "Psammoma bodies may be present.",
    ],
    ihc: [
      "PAX8: typically positive.",
      "CK20: patchy, sometimes extensive; may be negative in a minority.",
      "Cathepsin K: usually patchy positive.",
      "CK7: usually negative or only focal.",
      "KIT (CD117): usually negative.",
      "Melan-A: occasional positivity.",
    ],
    differential: [
      [
        "MiT family translocation RCC",
        "May express cathepsin K and melanocytic markers; confirm TFE3/TFEB rearrangement when suspected.",
      ],
      [
        "ChRCC",
        "Can show binucleation and solid growth; ChRCC is typically KIT-positive and CK20-negative.",
      ],
      [
        "FH-deficient RCC",
        "Assess FH and 2SC in high-grade or unusual eosinophilic tumors.",
      ],
    ],
    molecular: [
      "TSC1/TSC2 mutations or biallelic losses occur in a subset.",
      "MTOR pathway alterations are relevant in the broader group of eosinophilic oncocytic tumors.",
    ],
    pitfalls: [
      "The CK20/cathepsin K profile is supportive, not individually diagnostic.",
    ],
  },
  {
    name: "Renal cell carcinoma, not otherwise specified (RCC-NOS)",
    category: "Unclassified RCC",
    site: "Any renal location.",
    clinical: [
      "Adults; presentation depends on stage and tumor burden.",
      "Use only after exclusion of recognized morphologic and molecularly defined entities.",
    ],
    criteria: [
      "Malignant renal epithelial neoplasm that cannot be classified into a defined RCC entity after adequate sampling and ancillary workup.",
      "Document unusual morphology and relevant negative/positive ancillary findings.",
    ],
    histology: [
      "Morphology is variable and may include oncocytic, eosinophilic, clear-cell, papillary, or high-grade patterns.",
      "Some tumors harbor TSC2 or MTOR alterations but remain morphologically heterogeneous.",
    ],
    ihc: [
      "No defining IHC profile.",
      "Use a differential-directed panel including PAX8, CK7, CAIX, KIT, AMACR, FH/2SC, SDHB, and melanocytic markers as indicated.",
    ],
    differential: [
      [
        "Defined molecular RCC",
        "Perform targeted IHC and molecular testing for TFE3, TFEB, ALK, FH, SDH, SMARCB1, and ELOC-associated tumors as indicated.",
      ],
      [
        "Metastatic carcinoma",
        "Correlate with clinical history and site-specific markers.",
      ],
      [
        "Renal mesenchymal tumor",
        "Establish epithelial differentiation with morphology and keratin/PAX8 panel.",
      ],
    ],
    molecular: [
      "TSC2-inactivating mutations and MTOR-activating mutations are reported in subsets of oncocytic/eosinophilic RCC-NOS.",
      "Molecular findings should be interpreted with morphology and IHC; do not force a defined entity from a single alteration.",
    ],
    pitfalls: [
      "RCC-NOS is a diagnosis of exclusion, not a default label for an unusual tumor.",
    ],
  },
  {
    name: "TFE3-rearranged RCC",
    category: "Molecularly defined RCC",
    site: "Kidney.",
    clinical: [
      "Often affects children, adolescents, and young adults, but occurs across a broad age range.",
      "May present at advanced stage.",
    ],
    criteria: [
      "RCC with compatible morphology and strong nuclear TFE3 expression or demonstrated TFE3 rearrangement/fusion.",
      "Molecular confirmation is preferred when IHC is equivocal or morphology is atypical.",
    ],
    histology: [
      "Papillary, nested, alveolar, or mixed architecture.",
      "Cells may have clear or eosinophilic cytoplasm.",
      "Psammoma bodies and hyalinized stroma may occur.",
    ],
    ihc: [
      "PAX8: consistently positive.",
      "TFE3: strong nuclear staining is supportive but fixation-sensitive.",
      "Cathepsin K: positive in approximately 60%.",
      "Melan-A/HMB45: occasional expression.",
      "Cytokeratins and EMA may be weak or underexpressed.",
    ],
    differential: [
      [
        "TFEB-rearranged RCC",
        "Use TFEB IHC and break-apart FISH; morphology may overlap.",
      ],
      [
        "ESC-RCC",
        "Can express cathepsin K and melanocytic markers; ESC-RCC often CK20-positive and lacks TFE3 rearrangement.",
      ],
      [
        "Papillary RCC",
        "AMACR/CK7 profile and absence of TFE3 rearrangement favor papillary RCC.",
      ],
    ],
    molecular: [
      "TFE3 gene fusion/rearrangement is defining.",
      "TFE3 break-apart FISH is useful; RNA sequencing can detect cryptic inversions/fusions missed by conventional FISH.",
      "Strong TFE3 IHC alone is not sufficient in problematic cases.",
    ],
    pitfalls: [
      "Paracentric inversions involving Xp11 may yield false-negative conventional break-apart FISH.",
    ],
  },
  {
    name: "TFEB-altered RCC",
    category: "Molecularly defined RCC",
    site: "Kidney.",
    clinical: [
      "Occurs across a broad age range, including children and adults.",
      "Clinical behavior varies with the underlying alteration and tumor features.",
    ],
    criteria: [
      "RCC with TFEB rearrangement or amplification.",
      "TFEB nuclear IHC may support the diagnosis; establish the alteration molecularly.",
    ],
    histology: [
      "TFEB-rearranged tumors may show a biphasic pattern of large epithelioid cells and smaller cells clustered around basement membrane material.",
      "Nests and papillary or solid patterns may occur.",
      "TFEB-amplified tumors may be high grade and morphologically variable.",
    ],
    ihc: [
      "TFEB: nuclear expression is highly specific for TFEB-rearranged RCC in the appropriate setting.",
      "PAX8: supports renal epithelial origin.",
      "Cathepsin K and melanocytic markers may be expressed, but are less consistent in TFEB-amplified tumors.",
    ],
    differential: [
      [
        "TFE3-rearranged RCC",
        "Both are MiT family tumors; distinguish with specific molecular testing.",
      ],
      [
        "Epithelioid angiomyolipoma",
        "Use PAX8 and melanocytic markers with morphology; PEComa typically lacks PAX8.",
      ],
      [
        "CCRCC/oncocytic tumors",
        "Use morphology, CAIX/CK7/KIT and molecular testing.",
      ],
    ],
    molecular: [
      "TFEB rearrangement or amplification defines this group.",
      "TFEB break-apart FISH is preferred over IHC alone in FFPE tissue.",
      "Distinguish rearranged from amplified tumors where possible.",
    ],
    pitfalls: [
      "TFEB amplification and rearrangement are not interchangeable; document the specific alteration.",
    ],
  },
  {
    name: "ELOC-mutated RCC",
    category: "Molecularly defined RCC",
    site: "Kidney.",
    clinical: [
      "Usually adults; clinical features are not distinctive.",
      "May overlap with hereditary tuberous sclerosis-associated renal tumors.",
    ],
    criteria: [
      "Compatible renal epithelial neoplasm with ELOC (formerly TCEB1) mutation.",
      "A definitive diagnosis requires molecular analysis; morphology and IHC alone are insufficient.",
    ],
    histology: [
      "Often clear-cell morphology with prominent fibromuscular stroma.",
      "May overlap with clear cell RCC and clear cell papillary renal cell tumor.",
      "Some tumors resemble renal angiomyoadenomatous tumor-like or TSC-associated papillary-type RCC.",
    ],
    ihc: [
      "CK7 may be positive, particularly in fibromuscular-septal areas.",
      "CAIX and other clear-cell markers may overlap with CCRCC.",
      "No IHC profile is specific enough to establish ELOC mutation.",
    ],
    differential: [
      [
        "CCRCC",
        "VHL/3p status and characteristic diffuse CAIX help; ELOC-mutated RCC requires molecular demonstration.",
      ],
      [
        "Clear cell papillary renal cell tumor",
        "Typically diffuse CK7 and cup-shaped CAIX; ELOC-mutated RCC requires molecular confirmation.",
      ],
      [
        "TSC-associated RCC",
        "Morphologic overlap is substantial; molecular findings define the entity.",
      ],
    ],
    molecular: [
      "ELOC (formerly TCEB1) mutation is defining.",
      "Complex molecular analysis is required for a clear diagnosis.",
      "TSC1, TSC2, and MTOR alterations may coexist in related morphologic groups.",
    ],
    pitfalls: [
      "Do not diagnose ELOC-mutated RCC from morphology or CK7 alone.",
    ],
  },
  {
    name: "Fumarate hydratase-deficient RCC (FH-deficient RCC)",
    category: "Molecularly defined RCC",
    site: "Renal cortex.",
    clinical: [
      "Often affects adults at a relatively young age.",
      "May be associated with hereditary leiomyomatosis and RCC syndrome.",
      "Can present with aggressive disease, including metastasis from a small primary tumor.",
    ],
    criteria: [
      "Renal carcinoma with compatible morphology and FH deficiency.",
      "Loss of FH staining with retained internal control is highly specific but not fully sensitive.",
      "Aberrant 2SC staining is highly sensitive but less specific.",
    ],
    histology: [
      "Architecture is heterogeneous: papillary, tubulocystic, cribriform, solid, and infiltrative patterns may coexist.",
      "High-grade nuclei with prominent inclusion-like nucleoli are characteristic but not universal.",
      "Perinucleolar halos may be seen.",
    ],
    ihc: [
      "FH: loss of tumor-cell staining with positive internal control supports deficiency.",
      "2SC: aberrant positive staining is sensitive for fumarate accumulation.",
      "PAX8: supports renal epithelial origin.",
      "Use both FH and 2SC when suspicion remains despite retained FH.",
    ],
    differential: [
      [
        "Collecting duct carcinoma",
        "FH/2SC profile and broader heterogeneous architecture help identify FH-deficient RCC.",
      ],
      [
        "Papillary RCC",
        "FH-deficient RCC often has high-grade cytology and mixed patterns.",
      ],
      [
        "Tubulocystic RCC",
        "Exclude FH deficiency in tubulocystic tumors, especially with high-grade features.",
      ],
    ],
    molecular: [
      "Biallelic FH inactivation is defining.",
      "Germline FH pathogenic variants underlie hereditary leiomyomatosis and RCC syndrome; consider genetic counseling/testing.",
    ],
    pitfalls: [
      "Retained FH IHC does not completely exclude FH-deficient RCC.",
      "2SC is sensitive but less specific; interpret with morphology and FH.",
    ],
  },
  {
    name: "Succinate dehydrogenase-deficient RCC (SDH-deficient RCC)",
    category: "Molecularly defined RCC",
    site: "Kidney.",
    clinical: [
      "Often affects adults; may occur in younger patients.",
      "Can be associated with germline SDHx variants and hereditary paraganglioma-pheochromocytoma syndromes.",
    ],
    criteria: [
      "Renal epithelial neoplasm with loss of SDHB expression.",
      "Internal non-neoplastic cells must show granular mitochondrial SDHB staining as a positive control.",
      "Consider genetic counseling and germline testing.",
    ],
    histology: [
      "Often shows bland eosinophilic cells with flocculent or vacuolated cytoplasm.",
      "Inclusion-like cytoplasmic vacuoles may be present.",
      "High-grade, papillary, solid, cribriform, or desmoplastic patterns can occur, particularly in SDHA-associated tumors.",
    ],
    ihc: [
      "SDHB: complete loss of granular cytoplasmic/mitochondrial staining is required.",
      "SDHA: also lost in SDHA-mutated tumors; retained in SDHB/C/D-associated tumors.",
      "KIT: usually negative in tumor cells.",
      "CK7: frequently negative.",
      "FH: retained.",
    ],
    differential: [
      [
        "ChRCC/oncocytoma",
        "SDHB loss is defining; morphology alone may overlap.",
      ],
      [
        "ESC-RCC",
        "ESC-RCC often expresses CK20/cathepsin K and may show TSC pathway alterations.",
      ],
      [
        "Other eosinophilic RCC",
        "Use SDHB IHC in unusual eosinophilic tumors, especially in young patients.",
      ],
    ],
    molecular: [
      "Biallelic inactivation of SDHA, SDHB, SDHC, or SDHD.",
      "Germline testing is indicated; large deletions should be considered.",
      "SDHA variants may be incidental because penetrance is low; correlate with IHC and phenotype.",
    ],
    pitfalls: [
      "Weak diffuse cytoplasmic SDHB staining without granular mitochondrial pattern should be interpreted as loss when internal controls are strong.",
    ],
  },
  {
    name: "ALK-rearranged RCC",
    category: "Molecularly defined RCC",
    site: "Often renal medulla.",
    clinical: [
      "Rare; reported across a range of ages.",
      "Clinical associations vary by fusion partner and patient background.",
    ],
    criteria: [
      "RCC with ALK protein expression and demonstrated ALK rearrangement.",
      "Positive ALK IHC is a screening result; molecular confirmation is required.",
    ],
    histology: [
      "Morphology is variable and may include mucinous, signet-ring, papillary, or solid patterns.",
      "Some cases show medullary involvement.",
    ],
    ihc: [
      "ALK: tumor-cell expression is a useful screening marker.",
      "PAX8: supports renal epithelial origin.",
      "SMARCB1/INI1: retained.",
      "HMB45 and Melan-A: negative.",
      "TFE3 may show nonspecific staining with some automated protocols.",
    ],
    differential: [
      [
        "SMARCB1-deficient renal medullary carcinoma",
        "INI1 loss and sickle cell trait favor renal medullary carcinoma; ALK-rearranged RCC retains INI1.",
      ],
      [
        "Metastatic ALK-positive carcinoma",
        "Establish renal epithelial origin with PAX8 and clinical correlation.",
      ],
      ["Other molecular RCC", "Use targeted fusion testing."],
    ],
    molecular: [
      "ALK rearrangement is required for definitive classification.",
      "Fusion partners are variable; use RNA sequencing or an appropriate rearrangement assay.",
    ],
    pitfalls: ["Do not diagnose ALK-rearranged RCC on ALK IHC alone."],
  },
  {
    name: "SMARCB1-deficient renal medullary carcinoma",
    category: "Molecularly defined RCC",
    site: "Renal medulla.",
    clinical: [
      "Typically affects adolescents and young adults.",
      "Strong association with sickle cell trait or other sickling hemoglobinopathies.",
      "Usually aggressive and advanced at presentation.",
    ],
    criteria: [
      "High-grade renal medullary carcinoma in the appropriate clinical setting.",
      "Loss of SMARCB1/INI1 expression in tumor cells with retained internal controls.",
      "PAX8 and broad-spectrum cytokeratin positivity support renal epithelial origin.",
    ],
    histology: [
      "High-grade infiltrative carcinoma with reticular, cribriform, tubular, or solid patterns.",
      "Prominent inflammation and desmoplastic stroma may be present.",
      "Rhabdoid or sarcomatoid features may occur.",
    ],
    ihc: [
      "SMARCB1/INI1: complete loss in tumor cells.",
      "PAX8: typically diffuse positive.",
      "Broad-spectrum cytokeratin and EMA: typically positive.",
      "Vimentin: commonly positive.",
      "OCT3/4: strongly positive in approximately half of cases.",
      "GATA3: positivity favors urothelial carcinoma in the differential.",
    ],
    differential: [
      [
        "Collecting duct carcinoma",
        "Usually retains INI1; CDC is a diagnosis of exclusion.",
      ],
      [
        "Upper tract urothelial carcinoma",
        "GATA3 and p63 positivity or associated in situ disease favor urothelial origin.",
      ],
      [
        "FH-deficient RCC with secondary INI1 loss",
        "Classify by the primary FH-deficient entity when FH loss/2SC supports it.",
      ],
      [
        "Metastatic germ cell tumor",
        "OCT3/4 may be positive; PAX8, keratins, clinical setting, and germ-cell markers help distinguish.",
      ],
    ],
    molecular: [
      "SMARCB1 inactivation/deficiency is the defining molecular-pathologic event.",
      "Loss of INI1 IHC is the key surrogate; secondary SMARCB1 loss in another RCC subtype should not be relabeled as renal medullary carcinoma.",
    ],
    pitfalls: [
      "Clinical history of sickle cell trait/hemoglobinopathy is essential.",
      "OCT3/4 positivity can mimic germ cell tumor.",
    ],
  },
];

// Additional WHO renal tumour entities outside the RCC family. Profiles are intentionally
// concise where the supplied WHO excerpt provides limited ancillary data.
const additionalEntities: Entity[] = [
  {
    name: "Multilocular cystic renal neoplasm of low malignant potential",
    category: "Clear cell renal tumor",
    site: "Renal cortex; usually a well-circumscribed multicystic mass.",
    clinical: ["Usually adults; often detected incidentally."],
    criteria: [
      "Multiloculated cystic renal neoplasm composed of clear cells in cyst septa, without expansile solid nodules.",
    ],
    histology: [
      "Multiple cysts lined by clear cells or containing small clusters of clear cells in fibrous septa.",
      "No expansile solid growth; careful sampling is essential.",
    ],
    ihc: [
      "Typically shares the clear-cell phenotype: PAX8+, CAIX+, CD10 often+; CK7 variable.",
    ],
    differential: [
      [
        "Clear cell RCC with cystic change",
        "Any expansile solid nodule or infiltrative solid component favors clear cell RCC.",
      ],
      [
        "Cystic nephroma",
        "Cystic nephroma lacks the characteristic clear-cell epithelial clusters.",
      ],
    ],
    molecular: [
      "VHL pathway alterations may be present; the supplied excerpt does not establish a separate defining molecular test.",
    ],
    pitfalls: [
      "Do not use this diagnosis when expansile solid nodules are identified.",
    ],
  },
  {
    name: "Oncocytoma of the kidney",
    category: "Oncocytic and chromophobe renal tumors",
    site: "Renal cortex.",
    clinical: [
      "Benign renal neoplasm; broad adult age range, mean age approximately 62 years; male predominance.",
      "Often incidental; may be large and may show a central or peripheral scar.",
    ],
    criteria: [
      "Well-circumscribed oncocytic neoplasm with nested/solid architecture and bland round nuclei.",
      "No significant mitotic activity, atypical mitoses, or coagulative tumor necrosis.",
    ],
    histology: [
      "Round to polygonal cells with densely granular eosinophilic cytoplasm rich in mitochondria.",
      "Uniform nuclei with smoothly dispersed chromatin and small central nucleoli.",
      "Solid nests, tubules, and microcysts in hypocellular hyalinized or myxoid stroma.",
      "Degenerative atypia may occur; fat or vascular invasion does not alter benign classification in the WHO description.",
    ],
    ihc: [
      "KIT/CD117 usually positive; CK7 typically negative or limited to scattered cells.",
      "S100A1 is commonly positive; CD10 and vimentin are usually negative or limited.",
    ],
    differential: [
      [
        "Chromophobe RCC",
        "ChRCC usually has broader CK7, raisinoid nuclei, perinuclear halos, and distinct cell borders.",
      ],
      [
        "Other oncocytic renal tumors",
        "Use CK7 distribution, KIT, S100A1, morphology, and molecular context; no single stain is sufficient.",
      ],
      [
        "Oncocytoma-like angiomyolipoma",
        "HMB45/Melan-A/cathepsin K positivity and PAX8/keratin negativity favor PEComa.",
      ],
    ],
    molecular: [
      "Recurrent chromosomal losses (including 1, 14, 21, X, Y) occur; a subgroup has CCND1 rearrangement.",
      "Mitochondrial gene mutations have been reported; no routine molecular test is required for classic cases.",
    ],
    pitfalls: [
      "Focal CK7 positivity does not exclude oncocytoma.",
      "Oncocytoma-like areas may occur in other renal tumors; correlate with the whole tumor.",
    ],
  },
  {
    name: "Other oncocytic tumors of the kidney",
    category: "Oncocytic and chromophobe renal tumors",
    site: "Kidney.",
    clinical: [
      "A heterogeneous group of oncocytic renal neoplasms that cannot be assigned to classic oncocytoma or chromophobe RCC on morphology alone.",
    ],
    criteria: [
      "Use only after considering oncocytoma, ChRCC, hybrid oncocytic/chromophobe tumor, and molecularly defined oncocytic RCC entities.",
    ],
    histology: [
      "Variable oncocytic cytology and architecture; some show hybrid or overlapping features.",
    ],
    ihc: [
      "A panel including CK7, KIT, S100A1, PAX8, SDHB, FH/2SC, and cathepsin K may be appropriate, guided by morphology.",
    ],
    differential: [
      ["Oncocytoma", "Usually scattered CK7-positive cells and diffuse KIT."],
      [
        "Chromophobe RCC",
        "Usually broad CK7 and characteristic cytologic features.",
      ],
      [
        "SDH-deficient RCC",
        "Loss of SDHB is diagnostic in the appropriate setting.",
      ],
      [
        "ESC-RCC",
        "CK20 and cathepsin K expression with solid/cystic morphology may support ESC-RCC.",
      ],
    ],
    molecular: [
      "Molecular findings are entity-dependent; the supplied WHO excerpt describes a heterogeneous group rather than one defining alteration.",
    ],
    pitfalls: [
      "Avoid using a generic oncocytic category before excluding molecularly defined tumors.",
    ],
  },
  {
    name: "Metanephric adenoma",
    category: "Metanephric tumors",
    site: "Kidney; usually unicentric.",
    clinical: [
      "Benign epithelial neoplasm; broad age range, including children and adults; may be sizeable.",
    ],
    criteria: [
      "Highly cellular proliferation of small, uniform, embryonic-appearing cells in tightly packed acini/tubules.",
      "WT1 and CD57 expression support the diagnosis; BRAF V600E is frequent.",
    ],
    histology: [
      "Small uniform cells with scant cytoplasm and inconspicuous nucleoli.",
      "Acinar, tubular, glomeruloid, and papillary patterns may occur; psammoma bodies can be present.",
    ],
    ihc: [
      "WT1 diffuse nuclear+; CD57 cytoplasmic/membranous+.",
      "CK7 patchy or negative; EMA and AMACR typically negative.",
      "BRAF VE1 may be positive in many, but not all, cases.",
    ],
    differential: [
      [
        "Papillary RCC",
        "Papillary RCC is usually AMACR+/EMA+ and lacks the typical diffuse WT1/CD57 combination.",
      ],
      [
        "Nephroblastoma",
        "Correlate with age, architecture, blastemal/epithelial/stromal components, and WT1 pattern.",
      ],
    ],
    molecular: [
      "BRAF V600E mutations are common and diagnostically supportive.",
    ],
    pitfalls: ["BRAF VE1 negativity does not exclude metanephric adenoma."],
  },
  {
    name: "Metanephric adenofibroma",
    category: "Metanephric tumors",
    site: "Kidney; often solitary and partly cystic.",
    clinical: ["Rare biphasic renal neoplasm; may present with hematuria."],
    criteria: [
      "Biphasic lesion combining metanephric adenoma-like epithelium and metanephric stromal tumor-like stroma.",
    ],
    histology: [
      "Small uniform metanephric-type epithelial tubules/acini embedded in spindle-cell stroma.",
      "The stromal component resembles metanephric stromal tumor.",
    ],
    ihc: [
      "Epithelial component: WT1 and CD57 may label as in metanephric adenoma.",
      "Stromal component: CD34 commonly positive; interpret component by component.",
    ],
    differential: [
      [
        "Metanephric adenoma",
        "Lacks the substantial characteristic stromal component.",
      ],
      [
        "Metanephric stromal tumor",
        "Lacks the metanephric adenoma-like epithelial component.",
      ],
    ],
    molecular: [
      "The supplied excerpt does not establish a single routine defining molecular test.",
    ],
    pitfalls: [
      "Recognize both components; limited sampling may capture only one.",
    ],
  },
  {
    name: "Metanephric stromal tumor",
    category: "Metanephric tumors",
    site: "Typically renal medulla; may be lobulated and cystic.",
    clinical: [
      "Benign stromal neoplasm; most often pediatric but may occur across age groups.",
      "Rare renin-mediated hypertension may occur due to juxtaglomerular cell hyperplasia.",
    ],
    criteria: [
      "Spindle-cell stromal neoplasm with characteristic concentric onion-skin cuffs around entrapped tubules and vessels.",
      "Angiodysplasia of entrapped arterioles is a helpful feature.",
    ],
    histology: [
      "Moderately cellular spindle-to-stellate cells with thin hyperchromatic nuclei in myxoid background.",
      "Entrapped tubules and vessels surrounded by concentric rings/collarettes.",
      "Heterologous glial or cartilaginous differentiation may occur.",
    ],
    ihc: [
      "CD34 typically positive; cytokeratins and desmin generally negative.",
      "GFAP and S100 may label heterologous glial elements.",
    ],
    differential: [
      [
        "Congenital mesoblastic nephroma",
        "CMN is an infantile renal sinus fibroblastic neoplasm with distinct molecular subsets.",
      ],
      [
        "Metanephric adenofibroma",
        "Contains metanephric adenoma-like epithelial component.",
      ],
    ],
    molecular: [
      "The supplied excerpt does not establish a routine defining molecular alteration.",
    ],
    pitfalls: [
      "Vascular invasion is absent in the described entity; evaluate unusual vascular involvement carefully.",
    ],
  },
  {
    name: "Mixed epithelial and stromal tumor of the kidney",
    category: "Mixed epithelial and stromal renal tumors",
    site: "Usually renal parenchyma; often well-circumscribed and partly cystic.",
    clinical: [
      "Typically adults, with a strong female predominance; may be associated with estrogen exposure.",
    ],
    criteria: [
      "Biphasic neoplasm with epithelial cysts/tubules and ovarian-type spindle-cell stroma.",
    ],
    histology: [
      "Cystic spaces and tubules lined by cuboidal/columnar epithelium.",
      "Stroma ranges from cellular spindle-cell areas to hyalinized or smooth-muscle-rich zones; ovarian-type morphology may be conspicuous.",
    ],
    ihc: [
      "Epithelial component expresses keratins and PAX8.",
      "Stromal component may express ER, PR, SMA, and desmin.",
    ],
    differential: [
      [
        "Cystic nephroma",
        "Cystic nephroma has less prominent ovarian-type stroma and lacks the characteristic mixed pattern.",
      ],
      [
        "Adult cystic nephroma / mixed epithelial-stromal spectrum",
        "Consider the morphologic continuum described in the WHO classification.",
      ],
    ],
    molecular: [
      "No single routine molecular alteration is established in the supplied excerpt.",
    ],
    pitfalls: [
      "Sample solid and cystic areas to assess both epithelial and stromal components.",
    ],
  },
  {
    name: "Paediatric cystic nephroma",
    category: "Paediatric renal tumors",
    site: "Kidney; multicystic lesion.",
    clinical: ["Occurs in children; may present as an abdominal mass."],
    criteria: [
      "Multiloculated cystic renal lesion with non-communicating cysts and septa, without a solid expansile nephroblastomatous component.",
    ],
    histology: [
      "Cysts are lined by flattened, cuboidal, or hobnail epithelium.",
      "Septal stroma may contain cellular areas; evaluate carefully for diagnostic solid components.",
    ],
    ihc: [
      "Epithelial and stromal staining is variable; no single IHC marker is defining in the supplied excerpt.",
    ],
    differential: [
      [
        "Cystic partially differentiated nephroblastoma",
        "Contains blastemal cells within septa or cyst lining.",
      ],
      [
        "Multilocular cystic renal neoplasm of low malignant potential",
        "Clear-cell clusters in septa support the latter.",
      ],
    ],
    molecular: [
      "DICER1 alterations are relevant in the cystic nephroma spectrum; correlate with age and clinical context.",
    ],
    pitfalls: [
      "Extensively sample septa to exclude cystic partially differentiated nephroblastoma.",
    ],
  },
  {
    name: "Classic angiomyolipoma / PEComa of the kidney",
    category: "Renal mesenchymal tumors",
    site: "Usually renal cortex or medulla; may be multifocal or bilateral in tuberous sclerosis complex.",
    clinical: [
      "Usually benign; sporadic tumors more often occur in women, while syndromic tumors may be multiple and bilateral.",
    ],
    criteria: [
      "Variable admixture of mature adipose tissue, thick-walled vessels, and smooth-muscle cells (classic triphasic pattern).",
    ],
    histology: [
      "Mature adipose tissue, dysmorphic thick-walled vessels, and perivascular smooth-muscle cells in variable proportions.",
      "Spindle or epithelioid morphology; adipose-poor variants may mimic RCC.",
    ],
    ihc: [
      "HMB45, Melan-A, MITF, and cathepsin K commonly positive.",
      "SMA and calponin support smooth-muscle differentiation; epithelial markers and PAX8 are negative.",
    ],
    differential: [
      [
        "RCC",
        "PAX8 and epithelial markers support RCC; melanocytic markers support PEComa.",
      ],
      [
        "Liposarcoma",
        "Evaluate atypical stromal cells and MDM2 when morphology/site raises concern.",
      ],
    ],
    molecular: [
      "TSC1/TSC2 pathway alterations are associated with angiomyolipoma; mTOR pathway is relevant.",
    ],
    pitfalls: [
      "Fat-poor angiomyolipoma may be radiologically and histologically mistaken for RCC.",
    ],
  },
  {
    name: "Epithelioid angiomyolipoma / epithelioid PEComa of the kidney",
    category: "Renal mesenchymal tumors",
    site: "Kidney; may arise in association with tuberous sclerosis complex.",
    clinical: [
      "Potentially malignant PEComa; behavior relates to tumor size, necrosis, mitotic activity, atypia, and invasion.",
    ],
    criteria: [
      "Predominantly epithelioid perivascular cells with melanocytic and smooth-muscle differentiation.",
    ],
    histology: [
      "Sheets and nests of epithelioid cells with abundant eosinophilic or clear cytoplasm, often around vessels.",
      "Marked atypia, mitoses, necrosis, and infiltrative growth should be documented.",
    ],
    ihc: [
      "HMB45 and Melan-A commonly positive; cathepsin K often positive.",
      "SMA may be positive; PAX8 and epithelial markers are typically negative.",
    ],
    differential: [
      [
        "RCC with clear/eosinophilic cytoplasm",
        "PAX8/keratin positivity favors RCC; melanocytic markers favor PEComa.",
      ],
      [
        "Melanoma",
        "Use morphology and broad melanocytic panel; renal PEComa shows myoid differentiation.",
      ],
    ],
    molecular: [
      "TSC1/TSC2 pathway alterations are common in PEComa family tumors.",
    ],
    pitfalls: [
      "Do not assume benign behavior based solely on the presence of angiomyolipoma-like morphology.",
    ],
  },
  {
    name: "Renal haemangioblastoma",
    category: "Renal mesenchymal tumors",
    site: "Any renal location.",
    clinical: [
      "Very rare; reported in adults, often incidentally; may cause hematuria or flank/back pain.",
      "Unlike CNS hemangioblastoma, renal cases are not associated with von Hippel–Lindau syndrome in the supplied WHO text.",
    ],
    criteria: [
      "Sheets of clear to slightly eosinophilic stromal cells associated with a network of arborizing thin-walled capillaries.",
    ],
    histology: [
      "Round-to-oval nuclei and clear/vacuolated cytoplasm; occasional eosinophilic globules.",
      "Low mitotic activity; diffuse atypia is not typical.",
    ],
    ihc: [
      "PAX8, S100, α-inhibin, NSE, and vimentin may be positive.",
      "Keratin is usually negative; CAIX and partial CD10 may be positive.",
    ],
    differential: [
      [
        "CCRCC",
        "CCRCC is usually keratin-positive and shows typical CAIX pattern; renal hemangioblastoma often expresses inhibin/S100.",
      ],
      [
        "Metastatic CNS hemangioblastoma",
        "Correlate clinically; renal primary is not linked to VHL in the source.",
      ],
    ],
    molecular: [
      "No diagnostic molecular abnormality is established; VHL alterations are absent in the described tumors.",
    ],
    pitfalls: [
      "PAX8 positivity can misleadingly suggest RCC; interpret the full immunophenotype.",
    ],
  },
  {
    name: "Juxtaglomerular cell tumor",
    category: "Renal mesenchymal tumors",
    site: "Renal cortex, associated with juxtaglomerular apparatus.",
    clinical: [
      "Rare renin-secreting tumor, often in adolescents or young adults; may cause hypertension and hypokalemia.",
      "Functioning and non-functioning forms are described.",
    ],
    criteria: [
      "Well-circumscribed proliferation of bland polygonal or spindle cells with renin production in the appropriate clinical setting.",
    ],
    histology: [
      "Uniform cells in sheets, nests, or trabeculae with delicate vasculature; cytoplasmic granularity may be present.",
    ],
    ihc: ["Renin, CD34, and vimentin may be positive; SMA may be variable."],
    differential: [
      [
        "Glomus tumor",
        "Morphology and renin immunoreactivity support juxtaglomerular cell tumor.",
      ],
      [
        "Other renal mesenchymal tumors",
        "Correlate with renin/hypertension and appropriate marker panel.",
      ],
    ],
    molecular: [
      "No routine defining molecular alteration is established in the supplied excerpt.",
    ],
    pitfalls: [
      "Clinical correlation with renin and blood pressure is important.",
    ],
  },
  {
    name: "Renomedullary interstitial cell tumor",
    category: "Renal mesenchymal tumors",
    site: "Renal medulla / papilla.",
    clinical: [
      "Commonly incidental, small medullary lesion; usually clinically insignificant.",
    ],
    criteria: [
      "Small, bland spindle-cell proliferation in renal medullary interstitium.",
    ],
    histology: [
      "Well-circumscribed or poorly defined hypocellular lesion of bland spindle cells in collagenous/myxoid stroma.",
    ],
    ihc: [
      "Typically vimentin positive; other markers are not consistently diagnostic.",
    ],
    differential: [
      [
        "Metanephric stromal tumor",
        "Metanephric stromal tumor has characteristic concentric cuffs around tubules/vessels and CD34 positivity.",
      ],
      [
        "Leiomyoma",
        "Smooth-muscle morphology and marker profile support leiomyoma.",
      ],
    ],
    molecular: [
      "No diagnostic molecular alteration established in the supplied excerpt.",
    ],
    pitfalls: [
      "Usually a microscopic incidental lesion; avoid overcalling malignancy.",
    ],
  },
  {
    name: "Ossifying renal tumor of infancy",
    category: "Paediatric renal mesenchymal tumors",
    site: "Renal pelvis; intracalyceal.",
    clinical: [
      "Extremely rare; infants, predominantly boys; often gross hematuria and calcified pelvic mass.",
    ],
    criteria: [
      "Combination of osteoid, osteoblast-like cells, and bland spindle cells.",
    ],
    histology: [
      "Osteoblast-like cells around osteoid with peripheral blastema-like spindle-cell component.",
      "Both cell populations are bland without malignant features.",
    ],
    ihc: [
      "Osteoblast-like cells often EMA and vimentin positive; SATB2 and WT1 have been reported.",
    ],
    differential: [
      [
        "Malignant bone-forming tumor",
        "Bland cytology and characteristic intracalyceal setting favor this benign entity.",
      ],
      [
        "Congenital mesoblastic nephroma",
        "Different morphology and molecular profile.",
      ],
    ],
    molecular: [
      "Clonal trisomy 4 has been reported in a small number of cases.",
    ],
    pitfalls: ["Recognize the benign morphology despite bone formation."],
  },
  {
    name: "Congenital mesoblastic nephroma",
    category: "Paediatric renal mesenchymal tumors",
    site: "Renal sinus; unifocal and unilateral by definition.",
    clinical: [
      "Usually presents in infancy; classic, cellular, and mixed subtypes are recognized.",
    ],
    criteria: [
      "Infantile low-grade fibroblastic renal neoplasm with classic or cellular morphology.",
    ],
    histology: [
      "Classic type: intersecting fascicles of bland spindle cells resembling fibromatosis.",
      "Cellular type: more cellular, mitotically active spindle-cell neoplasm; may show hemangiopericytoma-like vessels.",
    ],
    ihc: [
      "Vimentin commonly positive; SMA may be positive. IHC is not sufficient to subtype.",
    ],
    differential: [
      [
        "Wilms tumor",
        "CMN is predominantly spindle-cell; Wilms tumor has blastemal/epithelial/stromal differentiation.",
      ],
      [
        "Clear cell sarcoma of kidney",
        "CCSK has distinct morphology and BCOR-associated molecular alterations.",
      ],
    ],
    molecular: [
      "Cellular CMN is commonly associated with ETV6::NTRK3 fusion; alternative kinase fusions occur. Classic CMN may show EGFR internal tandem duplication.",
    ],
    pitfalls: [
      "Molecular testing can support diagnosis and identify potential targeted therapy in cellular tumors.",
    ],
  },
  {
    name: "Rhabdoid tumor of the kidney",
    category: "Paediatric renal malignant tumors",
    site: "Kidney; often large and infiltrative.",
    clinical: [
      "Highly aggressive malignant tumor of infancy and early childhood; consider synchronous/metachronous CNS rhabdoid tumor.",
    ],
    criteria: [
      "Malignant renal neoplasm with rhabdoid cytology and loss of SMARCB1/INI1 expression.",
    ],
    histology: [
      "Large cells with eccentric nuclei, prominent nucleoli, and abundant eosinophilic cytoplasm with hyaline inclusions.",
      "Sheets, nests, or infiltrative growth; necrosis and brisk mitotic activity common.",
    ],
    ihc: [
      "Complete loss of INI1/SMARCB1 in tumor cells with retained internal controls; keratin and vimentin often positive.",
    ],
    differential: [
      [
        "Renal medullary carcinoma",
        "Both may lose INI1; clinical context, sickle trait, age, and morphology distinguish.",
      ],
      [
        "Wilms tumor with rhabdoid features",
        "INI1 status and molecular context are essential.",
      ],
    ],
    molecular: [
      "Biallelic SMARCB1 inactivation is characteristic; germline evaluation is important in young patients.",
    ],
    pitfalls: ["INI1 loss is not exclusive to renal medullary carcinoma."],
  },
  {
    name: "Clear cell sarcoma of the kidney",
    category: "Paediatric renal malignant tumors",
    site: "Kidney; usually unilateral renal mass in children.",
    clinical: [
      "Typically affects young children; malignant tumor with potential for bone and other metastases.",
    ],
    criteria: [
      "Renal malignant neoplasm with characteristic delicate branching vasculature and cords/nests of uniform cells; confirm BCOR-associated alteration when needed.",
    ],
    histology: [
      "Classic pattern: uniform cells in cords, nests, or anastomosing trabeculae separated by delicate arborizing vasculature.",
      "Variant patterns include myxoid, sclerosing, cellular, epithelioid, and spindle-cell areas.",
    ],
    ihc: [
      "BCOR nuclear expression is commonly strong; cyclin D1 and SATB2 may be positive. PAX8 is generally negative.",
    ],
    differential: [
      [
        "Wilms tumor",
        "Lacks typical triphasic nephroblastoma pattern; molecular findings help.",
      ],
      [
        "Rhabdoid tumor",
        "INI1 loss supports rhabdoid tumor; CCSK usually retains INI1.",
      ],
    ],
    molecular: [
      "Most cases harbor BCOR internal tandem duplication; a subset has YWHAE::NUTM2 fusion.",
    ],
    pitfalls: [
      "Do not mistake the delicate vascular pattern for a vascular tumor.",
    ],
  },
  {
    name: "Nephrogenic rests",
    category: "Nephroblastic lesions",
    site: "Renal parenchyma; may be perilobar or intralobar.",
    clinical: [
      "Developmental precursor lesions associated with increased risk of nephroblastoma; may be multifocal or bilateral.",
    ],
    criteria: [
      "Foci of persistent embryonal nephrogenic tissue, classified by location and morphology.",
    ],
    histology: [
      "Perilobar rests are typically peripheral and sharply demarcated; intralobar rests are embedded within parenchyma and may be fibrous or hyperplastic.",
    ],
    ihc: [
      "WT1 may be positive; immunophenotype overlaps with nephroblastoma and is not independently diagnostic.",
    ],
    differential: [
      [
        "Nephroblastoma",
        "Nephrogenic rests lack the expansile destructive growth and cytologic features of an established tumor.",
      ],
    ],
    molecular: [
      "Molecular findings vary with associated predisposition syndromes; no single routine diagnostic alteration.",
    ],
    pitfalls: ["Nephrogenic rests are precursor lesions, not nephroblastoma."],
  },
  {
    name: "Cystic partially differentiated nephroblastoma",
    category: "Nephroblastic lesions",
    site: "Kidney; multicystic renal mass, usually in young children.",
    clinical: [
      "Pediatric cystic renal neoplasm; typically presents as an abdominal mass.",
    ],
    criteria: [
      "Multicystic lesion with blastemal cells in septa or as focal aggregates; no expansile solid nephroblastoma component.",
    ],
    histology: [
      "Cysts lined by flattened or cuboidal epithelium.",
      "Septa contain blastemal cells, sometimes with epithelial or stromal differentiation.",
    ],
    ihc: [
      "WT1 may label blastemal/epithelial elements; interpret with morphology.",
    ],
    differential: [
      [
        "Paediatric cystic nephroma",
        "Cystic nephroma lacks blastemal cells in septa.",
      ],
      ["Nephroblastoma", "Solid expansile component favors nephroblastoma."],
    ],
    molecular: [
      "DICER1 alterations may be relevant in the cystic nephroma/nephroblastic spectrum; source-specific correlation required.",
    ],
    pitfalls: ["Extensive sampling of septa is mandatory."],
  },
  {
    name: "Nephroblastoma (Wilms tumor)",
    category: "Nephroblastic tumors",
    site: "Kidney; usually unilateral, occasionally bilateral.",
    clinical: [
      "Predominantly children younger than 10 years; mean age approximately 3–4 years.",
      "Often presents as abdominal mass; hematuria, pain, hypertension, or anemia may occur.",
    ],
    criteria: [
      "Embryonal renal malignancy with blastemal, epithelial, and stromal differentiation in variable proportions.",
      "Triphasic morphology is characteristic but biphasic and monophasic tumors occur.",
    ],
    histology: [
      "Blastema: sheets of small blue cells with scant cytoplasm.",
      "Epithelial differentiation: primitive tubules and glomeruloid structures.",
      "Stromal differentiation: spindle cells and possible heterologous elements.",
      "Anaplasia is an important adverse histologic feature.",
    ],
    ihc: [
      "WT1 commonly labels blastemal and epithelial components; cytokeratins label epithelial differentiation.",
    ],
    differential: [
      [
        "Nephrogenic rest",
        "Cannot be distinguished from nephroblastoma by cytology alone; architecture and growth pattern are key.",
      ],
      [
        "Clear cell sarcoma of kidney",
        "Distinct vascular pattern and BCOR-associated alteration.",
      ],
      ["Rhabdoid tumor", "Rhabdoid cytology and INI1 loss."],
    ],
    molecular: [
      "1p/16q loss of heterozygosity and 1q gain have prognostic relevance in risk stratification; molecular testing is protocol-dependent.",
    ],
    pitfalls: [
      "Treatment effect and sampling may alter component proportions; report anaplasia and treatment response where applicable.",
    ],
  },
  {
    name: "Germ cell tumors of the kidney",
    category: "Miscellaneous renal tumors",
    site: "Renal parenchyma; primary intrarenal location must be established.",
    clinical: [
      "Usually prepubertal-type teratoma; yolk sac tumor or mixed teratoma–yolk sac tumor is exceptional.",
    ],
    criteria: [
      "Germ cell tumor arising within renal parenchyma; exclude a metastatic or contiguous primary elsewhere.",
    ],
    histology: [
      "Teratoma shows mature or immature tissues from multiple germ layers.",
      "Yolk sac tumor shows reticular/microcystic, papillary, or other patterns with characteristic tumor cells.",
    ],
    ihc: [
      "Yolk sac tumor: SALL4, glypican-3, and AFP may support diagnosis; use morphology and serum markers as appropriate.",
    ],
    differential: [
      [
        "Nephroblastoma",
        "Age and primitive morphology overlap; germ cell differentiation markers and teratomatous elements help.",
      ],
      [
        "Metastatic germ cell tumor",
        "Clinical and radiologic exclusion of gonadal/mediastinal primary is essential.",
      ],
    ],
    molecular: [
      "The supplied WHO text notes absence of chromosome 12p abnormalities in renal germ cell tumors.",
    ],
    pitfalls: [
      "Do not assume a renal germ cell tumor is primary without excluding another primary site.",
    ],
  },
];

const entities: Entity[] = [...rccEntities, ...additionalEntities];

const molecularRows = [
  [
    "TFE3-rearranged RCC",
    "TFE3 gene rearrangement/fusion",
    "TFE3 nuclear IHC; break-apart FISH; RNA sequencing for cryptic inversions",
    "TFE3 rearrangement or fusion demonstrated",
  ],
  [
    "TFEB-altered RCC",
    "TFEB rearrangement or amplification",
    "TFEB nuclear IHC; TFEB break-apart FISH",
    "Specify rearranged versus amplified when possible",
  ],
  [
    "ELOC-mutated RCC",
    "ELOC (formerly TCEB1) mutation",
    "Complex molecular analysis / sequencing",
    "Molecular demonstration required; morphology and IHC are insufficient",
  ],
  [
    "FH-deficient RCC",
    "Biallelic FH inactivation",
    "FH loss and/or aberrant 2SC IHC; confirm genetically as appropriate",
    "FH loss is highly specific but not fully sensitive; 2SC is more sensitive but less specific",
  ],
  [
    "SDH-deficient RCC",
    "SDHA/B/C/D inactivation",
    "SDHB IHC (± SDHA); germline testing",
    "Loss of SDHB with valid internal positive control is required",
  ],
  [
    "ALK-rearranged RCC",
    "ALK gene rearrangement/fusion",
    "ALK IHC screen followed by molecular confirmation",
    "ALK IHC alone is not definitive",
  ],
  [
    "SMARCB1-deficient renal medullary carcinoma",
    "SMARCB1 inactivation",
    "INI1/SMARCB1 IHC; molecular testing as needed",
    "Complete tumor-cell INI1 loss in the characteristic clinicopathologic setting",
  ],
];

const ihcMarkers = [
  "Pankeratin",
  "PAX8",
  "CAIX",
  "CK7",
  "CD117/KIT",
  "CD10",
  "RCC",
  "AMACR",
  "Vimentin",
  "HMB45",
  "Melan-A",
  "Cathepsin K",
  "FH",
  "2SC",
  "SDHB",
  "TFE3",
  "TFEB",
  "ALK",
  "INI1",
  "WT1",
  "CD34",
  "α-inhibin",
  "HMWCK",
  "GATA3",
];
const ihcRows: string[][] = [
  [
    "Clear cell RCC",
    "+",
    "+",
    "+ (box-like)",
    "−",
    "−",
    "+",
    "+",
    "−/+",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Papillary RCC",
    "+",
    "+",
    "+/−",
    "+",
    "−",
    "+",
    "+",
    "+",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Clear cell papillary renal cell tumor",
    "+",
    "+",
    "+ (cup-like)",
    "+",
    "−",
    "−",
    "+/−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Oncocytoma",
    "+",
    "+",
    "−",
    "−/+",
    "+",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Chromophobe RCC",
    "+",
    "+",
    "−",
    "+",
    "+",
    "−/+",
    "+/−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Mucinous tubular and spindle cell carcinoma",
    "+",
    "+",
    "−/+",
    "+",
    "−",
    "−/+",
    "+/−",
    "+",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Tubulocystic RCC",
    "+",
    "+",
    "+/−",
    "−/+",
    "−",
    "+",
    "+",
    "+",
    "−/+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "TFE3-rearranged RCC",
    "+",
    "+",
    "−/+",
    "−/+",
    "−",
    "+/−",
    "+/−",
    "+/−",
    "+",
    "+/−",
    "+/−",
    "+",
    "retained",
    "−",
    "retained",
    "+",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "TFEB-altered RCC",
    "+",
    "+",
    "−/+",
    "−/+",
    "−",
    "+/−",
    "+/−",
    "+/−",
    "+",
    "+/−",
    "+/−",
    "+",
    "retained",
    "−",
    "retained",
    "−",
    "+",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "ELOC-mutated RCC",
    "+",
    "+",
    "+",
    "+/−",
    "−",
    "+",
    "+/−",
    "−/+",
    "−/+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "FH-deficient RCC",
    "+",
    "+",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "+/−",
    "+",
    "−",
    "−",
    "−",
    "loss",
    "+",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "SDH-deficient RCC",
    "+",
    "+",
    "−",
    "−/+",
    "−",
    "−/+",
    "−/+",
    "−/+",
    "−/+",
    "−",
    "−",
    "−/+",
    "retained",
    "−",
    "loss",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "ALK-rearranged RCC",
    "+",
    "+",
    "−",
    "+/−",
    "−",
    "−/+",
    "+/−",
    "−/+",
    "+/−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "+",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "SMARCB1-deficient renal medullary carcinoma",
    "+",
    "+",
    "−",
    "+",
    "−",
    "−/+",
    "+/−",
    "−/+",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "loss",
    "−",
    "−",
    "−",
    "+/−",
    "−",
  ],
  [
    "Metanephric adenoma",
    "+",
    "−/+",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "+",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Metanephric stromal tumor",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "+",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Angiomyolipoma / PEComa",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "+",
    "+",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Renal hemangioblastoma",
    "−",
    "+",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "+",
    "+",
    "−",
    "−",
  ],
  [
    "Rhabdoid tumor of kidney",
    "+/−",
    "−/+",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "loss",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Clear cell sarcoma of kidney",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Nephroblastoma",
    "+/−",
    "+/−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Multilocular cystic renal neoplasm of low malignant potential",
    "+",
    "+",
    "+ (box-like)",
    "−/+",
    "−",
    "+",
    "+",
    "−/+",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Other oncocytic tumors of kidney",
    "+",
    "+",
    "variable",
    "variable",
    "variable",
    "variable",
    "variable",
    "variable",
    "variable",
    "−",
    "−",
    "variable",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Metanephric adenofibroma",
    "+/−",
    "+",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "+",
    "+",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Mixed epithelial and stromal tumor",
    "+ (epithelial)",
    "+ (epithelial)",
    "−",
    "+ (epithelial)",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Paediatric cystic nephroma",
    "+/−",
    "variable",
    "−",
    "variable",
    "−",
    "−",
    "−",
    "−",
    "variable",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Epithelioid angiomyolipoma / PEComa",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−/+",
    "+",
    "+",
    "+",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Juxtaglomerular cell tumor",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "+",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Renomedullary interstitial cell tumor",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Ossifying renal tumor of infancy",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Congenital mesoblastic nephroma",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Nephrogenic rests",
    "+/−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "+",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Cystic partially differentiated nephroblastoma",
    "+/−",
    "+/−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
  [
    "Germ cell tumors of kidney",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "+/−",
    "−",
    "−",
    "−",
    "retained",
    "−",
    "retained",
    "−",
    "−",
    "−",
    "−/+",
    "−",
    "−",
    "−",
    "−",
    "−",
  ],
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default function RenalTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const matchesCategory = category === "All" || e.category === category;
        const haystack = [
          e.name,
          e.category,
          e.site,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.molecular,
          ...e.differential.flat(),
        ]
          .join(" ")
          .toLowerCase();
        return matchesCategory && haystack.includes(query.trim().toLowerCase());
      }),
    [query, category],
  );
  const toggle = (name: string) =>
    setOpened((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            PathologyGPS / Genitourinary Pathology
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-10 px-5 py-9 sm:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-teal-950 to-slate-900 p-7 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
            WHO renal tumors
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Renal Tumors
          </h1>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-200 md:text-base">
            A morphology-first reference covering the full spectrum of WHO renal
            tumor entities: renal epithelial, oncocytic, metanephric,
            mesenchymal, nephroblastic, and miscellaneous tumors. Use
            morphology, IHC, molecular findings, and clinical context together.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-bold">{entities.length}</div>
              <div className="text-xs text-slate-300">Diagnostic entities</div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-bold">{molecularRows.length}</div>
              <div className="text-xs text-slate-300">
                Molecularly defined groups in comparison table
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-2xl font-bold">{ihcRows.length}</div>
              <div className="text-xs text-slate-300">
                Entities in IHC comparison table
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-950">Diagnostic priorities</h2>
          <Bullets
            items={[
              "First establish renal epithelial differentiation (PAX8) and correlate with imaging and clinical history.",
              "Use architecture and cytology to orient the differential; avoid diagnosing a subtype from one architectural pattern alone.",
              "In eosinophilic or high-grade tumors, actively exclude FH-deficient RCC, SDH-deficient RCC, MiT family tumors, ESC-RCC, and collecting duct carcinoma as appropriate.",
              "Apply entity-directed IHC panels and confirm molecularly defined entities with the appropriate genetic assay.",
              "WHO/ISUP grading has validated clinical applicability for clear cell and papillary RCC; it is not applicable to chromophobe RCC.",
            ]}
          />
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">
            Expanded comparative IHC matrix: renal tumor differential
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            High-yield patterns from the supplied WHO excerpt. These are
            comparative profiles, not stand-alone diagnostic rules.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[2000px] text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="sticky left-0 bg-white py-2 pr-3">Entity</th>
                  {ihcMarkers.map((m) => (
                    <th key={m} className="px-2 py-2 text-center">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ihcRows.map((r, i) => (
                  <tr key={i}>
                    <td className="sticky left-0 bg-white py-2 pr-3 font-semibold text-slate-900">
                      {r[0]}
                    </td>
                    {r.slice(1).map((v, j) => (
                      <td
                        key={j}
                        className="px-2 py-2 text-center text-slate-700"
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Legend: + usually positive; − usually negative; +/− variable or
            frequent positivity; −/+ occasional positivity; “loss” indicates
            loss of tumor-cell expression with retained internal controls.
            Empty/uncertain patterns are not inferred. Pankeratin denotes
            broad-spectrum cytokeratin; positivity may be restricted to
            epithelial components in mixed lesions. Marker profiles are
            screening summaries and must be interpreted with morphology and
            valid internal controls.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-2 text-xl font-bold">
            Molecularly defined renal cell carcinomas
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            The defining alteration, practical screening/confirmation strategy,
            and diagnostic requirement.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-4">Entity</th>
                  <th className="py-3 pr-4">Defining alteration</th>
                  <th className="py-3 pr-4">IHC / molecular workup</th>
                  <th className="py-3">Diagnostic point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {molecularRows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className={`py-3 pr-4 align-top leading-6 ${j === 0 ? "font-semibold text-slate-900" : "text-slate-700"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Entity reference
              </p>
              <h2 className="mt-1 text-2xl font-bold">
                Essential diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Expand an entity for concise clinical, morphologic, IHC,
                molecular, and differential features.
              </p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entity, marker, gene, or morphology..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {[
              "All",
              ...Array.from(new Set(entities.map((e) => e.category))),
            ].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((e) => {
              const open = opened.includes(e.name);
              return (
                <article
                  key={e.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    className="flex w-full flex-col gap-2 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                        {e.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold">{e.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{e.site}</p>
                    </div>
                    <span className="text-sm font-semibold text-teal-800">
                      {open
                        ? "Collapse profile −"
                        : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={e.clinical} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={e.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={e.histology} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={e.ihc} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Molecular Pathology
                        </h4>
                        <Bullets items={e.molecular} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {e.differential.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/3 py-3 pr-3 align-top font-semibold">
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
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={e.pitfalls} />
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
            Practical differential diagnosis workflow
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold">Clear-cell tumors</h3>
              <Bullets
                items={[
                  "Diffuse box-like CAIX with limited CK7 and CD10 positivity favors CCRCC.",
                  "Diffuse CK7 with cup-shaped CAIX favors clear cell papillary renal cell tumor.",
                  "In younger patients or unusual papillary/nested tumors, exclude TFE3/TFEB-rearranged RCC.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                Eosinophilic / oncocytic tumors
              </h3>
              <Bullets
                items={[
                  "KIT and CK7 patterns help separate ChRCC from oncocytoma, but sampling heterogeneity can limit core biopsy.",
                  "Use SDHB in unusual eosinophilic tumors; loss is required for SDH-deficient RCC.",
                  "Use FH and 2SC for high-grade, papillary, or tubulocystic tumors suspicious for FH deficiency.",
                  "CK20 and cathepsin K support ESC-RCC in the appropriate morphology.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                High-grade medullary tumors
              </h3>
              <Bullets
                items={[
                  "CDC is a diagnosis of exclusion; assess PAX8, 34βE12, p63/GATA3, FH, and INI1.",
                  "INI1 loss in a young patient with sickle cell trait strongly supports renal medullary carcinoma.",
                  "ALK-positive renal carcinoma requires molecular confirmation of ALK rearrangement.",
                ]}
              />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">
                When morphology is not classifiable
              </h3>
              <Bullets
                items={[
                  "Do not default to RCC-NOS before excluding molecularly defined entities.",
                  "Choose molecular tests based on age, site, morphology, and IHC pattern.",
                  "Interpret negative IHC only when internal controls are valid.",
                ]}
              />
            </div>
          </div>
        </section>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This page is based on
          the supplied WHO renal cell tumor excerpt and the supplied
          PathologyGPS page template. IHC patterns are summarized for
          differential diagnosis; no single stain should be interpreted in
          isolation. Entity coverage follows the supplied WHO Renal Cell Tumours
          excerpt, including epithelial, oncocytic, metanephric, mesenchymal,
          nephroblastic, and miscellaneous renal tumors. Some rare entities have
          limited IHC data in the source; no unsupported marker profile is
          implied.
        </footer>
      </div>
    </main>
  );
}
