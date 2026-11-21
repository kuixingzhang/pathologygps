"use client";

import { useMemo, useState, type ReactNode } from "react";

type Syndrome = {
  name: string;
  genes: string;
  pattern: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const syndromes: Syndrome[] = [
  {
    name: "Von Hippel–Lindau Syndrome",
    genes: "VHL",
    pattern:
      "Autosomal dominant | Renal, adrenal, pancreatic, CNS, and retinal lesions",
    clinical: [
      "Often recognized in young or middle adulthood; manifestations may begin earlier.",
      "Renal findings include multiple bilateral cysts and an approximately 30% lifetime risk of renal cell carcinoma, usually clear cell type.",
      "Epididymal cystadenomas occur in up to 60% of affected men; bilateral lesions are highly characteristic.",
      "Associated findings include retinal and CNS hemangioblastomas, pheochromocytoma, pancreatic neuroendocrine tumors, and endolymphatic sac tumors.",
      "Type 1 is not associated with pheochromocytoma; type 2 includes pheochromocytoma and is subdivided by renal cancer risk.",
    ],
    criteria: [
      "In an at-risk relative, one characteristic VHL-associated tumor is sufficient for clinical recognition.",
      "Without a positive family history, the presence of two characteristic tumors supports the diagnosis.",
      "A heterozygous germline pathogenic VHL variant establishes the molecular diagnosis when clinical findings are inconclusive.",
      "Bilateral or multifocal clear cell RCC at a young age, especially with renal cysts or other syndrome-associated lesions, should prompt evaluation.",
    ],
    histology: [
      "Renal cysts are lined by clear cells with low-grade nuclei; atypical cysts may show two to three epithelial layers and focal papillary tufting.",
      "RCC is usually clear cell type, often low nuclear grade, and may be multifocal and bilateral.",
      "Some tumors show tubulopapillary or branched tubular architecture resembling clear cell papillary renal cell tumor, but retain a clear cell RCC immunophenotype and 3p loss.",
      "Epididymal cystadenoma and pheochromocytoma are histologically similar to their sporadic counterparts.",
    ],
    ihc: [
      "VHL-associated clear cell RCC typically shows diffuse CAIX and CD10, with negative or only focal CK7.",
      "A clear cell papillary-like pattern does not establish clear cell papillary renal cell tumor when the immunophenotype and molecular findings support clear cell RCC.",
    ],
    molecular: [
      "Germline VHL pathogenic variants include deletions, truncating variants, and missense variants.",
      "Type 1 is more often associated with deletion or truncating variants; type 2 is more often associated with missense variants.",
      "Loss of chromosome 3p is characteristic of VHL-associated clear cell RCC and can be assessed by FISH or copy-number analysis.",
      "Tumor-only VHL sequencing cannot establish hereditary disease; compare with uninvolved tissue or blood through germline testing.",
    ],
    differential: [
      [
        "Sporadic clear cell RCC",
        "Usually lacks the clinical pattern of early-onset, bilateral/multifocal renal tumors and other VHL-associated lesions; tumor VHL alterations alone do not prove germline disease.",
      ],
      [
        "Clear cell papillary renal cell tumor",
        "Usually shows diffuse CK7 and lacks the typical diffuse CD10/CAIX pattern of VHL-associated clear cell RCC.",
      ],
      [
        "Sporadic epididymal cystadenoma",
        "A unilateral lesion may be sporadic; bilateral epididymal cystadenomas strongly favor VHL.",
      ],
    ],
    pitfalls: [
      "Do not infer VHL syndrome from a VHL alteration detected only in tumor tissue.",
      "Correlate renal morphology with immunophenotype and chromosome 3p status when a clear cell papillary-like pattern is present.",
    ],
  },
  {
    name: "Birt–Hogg–Dubé Syndrome",
    genes: "FLCN",
    pattern: "Autosomal dominant | Skin, lung, and kidney",
    clinical: [
      "Usually manifests after age 20; renal tumors occur at a mean age of approximately 45 years.",
      "Facial, neck, or scalp papules represent fibrofolliculomas, trichodiscomas, or acrochordons.",
      "Basal-predominant pulmonary cysts may be asymptomatic or present with spontaneous pneumothorax.",
      "Approximately 15–30% of patients develop renal tumors; lesions are often multiple and bilateral.",
      "Renal tumor burden may range from a single lesion to numerous tumors.",
    ],
    criteria: [
      "A characteristic combination of facial/neck papules, pulmonary cysts, and renal tumors should raise strong suspicion.",
      "One or more of the following are supportive: characteristic skin papules, lung cysts, hybrid oncocytic/chromophobe renal tumor, or a pathogenic FLCN variant.",
      "Germline FLCN testing is used to confirm the diagnosis and guide family counseling.",
      "Multifocal or bilateral oncocytic renal neoplasms, particularly with pulmonary cysts or characteristic skin lesions, warrant evaluation.",
    ],
    histology: [
      "Renal tumors show a spectrum of oncocytic and chromophobe differentiation.",
      "Hybrid oncocytic/chromophobe tumors contain intermixed oncocytoma-like cells and chromophobe cells within the same nests.",
      "Chromophobe-like cells may have pale or clear cytoplasm, crisp cell borders, perinuclear halos, and round dark nuclei.",
      "Tumors are generally well circumscribed, unencapsulated, and composed of solid, nested, alveolar, or sheet-like areas.",
      "Oncocytoma-like tumors and clear cell RCC may also occur.",
    ],
    ihc: [
      "PAX8 is positive in renal epithelial tumors.",
      "KIT is patchy in hybrid tumors but typically diffuse in oncocytoma.",
      "CK7 preferentially highlights clear/chromophobe-like cells and is often absent in oncocytic cells.",
      "Ki-67 is usually low; p53 is limited to scattered nuclei.",
    ],
    molecular: [
      "A heterozygous germline pathogenic FLCN variant confirms the syndrome.",
      "FLCN alterations include insertions, deletions, and nonsense variants that can truncate folliculin.",
      "Copy-neutral loss of heterozygosity/uniparental disomy is a common secondary event in BHD-associated renal tumors.",
    ],
    differential: [
      [
        "Sporadic renal oncocytoma",
        "Usually solitary; multifocal/bilateral oncocytic tumors and hybrid morphology should prompt assessment for BHD.",
      ],
      [
        "Chromophobe RCC",
        "May be morphologically indistinguishable from the chromophobe component of BHD-associated tumors; clinical and germline context is decisive.",
      ],
      [
        "Clear cell RCC",
        "Can occur in BHD but should not be assumed to represent the characteristic hybrid oncocytic/chromophobe phenotype.",
      ],
    ],
    pitfalls: [
      "The renal morphology is heterogeneous; not every BHD-associated tumor is a hybrid tumor.",
      "A negative or subtle skin phenotype does not exclude BHD, particularly when pulmonary and renal findings are present.",
    ],
  },
  {
    name: "Hereditary Papillary Renal Carcinoma",
    genes: "MET",
    pattern:
      "Autosomal dominant | Bilateral, multifocal papillary renal tumors",
    clinical: [
      "Presents with multiple, often bilateral renal cortical tumors.",
      "A family history of renal cancer is characteristic, although some relatives may be asymptomatic.",
      "No consistent extrarenal tumor spectrum is established.",
    ],
    criteria: [
      "Suspect the syndrome when multiple family members have low-grade papillary RCC.",
      "An individual with bilateral, multifocal, low-grade papillary RCC also warrants evaluation.",
      "A germline pathogenic MET variant confirms hereditary papillary renal carcinoma.",
    ],
    histology: [
      "Most tumors show conventional low-grade papillary RCC morphology.",
      "Papillae are lined by a single layer of tumor cells with scant pale cytoplasm.",
      "Psammoma bodies and hemosiderin deposition are frequent.",
      "Papillary adenomas may coexist with invasive papillary RCC.",
    ],
    ihc: [
      "The histologic phenotype is that of conventional papillary RCC; no syndrome-specific immunohistochemical profile is established.",
    ],
    molecular: [
      "Germline missense variants in MET on chromosome 7q31 cause constitutive activation of the MET receptor tyrosine kinase.",
      "Tumor MET alterations alone do not establish a germline syndrome; confirmation requires germline testing.",
    ],
    differential: [
      [
        "Sporadic papillary RCC",
        "Usually lacks the family history or bilateral/multifocal pattern; most papillary RCCs overall are sporadic.",
      ],
      [
        "Other hereditary renal tumor syndromes",
        "BHD, VHL, FH-deficient RCC, and SDH-deficient RCC have different morphologic, immunophenotypic, and extrarenal clues.",
      ],
    ],
    pitfalls: [
      "Do not equate a papillary RCC diagnosis with hereditary MET-associated disease.",
      "The combination of low-grade papillary morphology and bilateral/multifocal disease is more informative than papillary morphology alone.",
    ],
  },
  {
    name: "Hereditary Leiomyomatosis and Renal Cell Carcinoma Syndrome",
    genes: "FH",
    pattern:
      "Autosomal dominant | Cutaneous and uterine leiomyomas; FH-deficient RCC",
    clinical: [
      "Cutaneous leiomyomas often appear around age 30 and may be painful or sensitive to cold or light touch.",
      "Uterine leiomyomas are common in affected women and may cause symptoms or require surgery before age 35.",
      "FH-deficient RCC occurs in approximately 15% of patients, with a median age of onset around 44 years.",
      "Rare associations include pheochromocytoma/paraganglioma and testicular or ovarian Leydig cell tumors.",
    ],
    criteria: [
      "A germline pathogenic FH variant establishes the syndrome.",
      "Multiple histologically confirmed FH-deficient leiomyomas or FH-deficient RCCs support the diagnosis.",
      "Two or more of the following support the diagnosis: FH-deficient leiomyoma, FH-deficient RCC, or a first-degree relative with FH-deficient neoplasia.",
      "An FH-deficient RCC, especially in a younger patient, should trigger genetic counseling and germline assessment.",
    ],
    histology: [
      "FH-deficient RCC is a distinct renal tumor entity and may show variable morphology.",
      "FH-deficient uterine leiomyomas may show symplastic nuclear atypia, multinucleation, prominent eosinophilic nucleoli, staghorn vessels, stromal edema, and eosinophilic cytoplasmic inclusions.",
      "Some FH-deficient uterine leiomyomas and most cutaneous leiomyomas lack distinctive morphology and resemble conventional leiomyomas.",
      "Prominent inclusion-like nucleoli, sometimes with a perinucleolar halo, may be a clue in renal tumor cytology.",
    ],
    ihc: [
      "Loss of FH staining with retained staining in internal non-neoplastic controls is highly specific but incompletely sensitive for FH deficiency.",
      "Positive 2-succinocysteine (2SC) staining is highly sensitive but less specific, particularly in renal carcinoma.",
      "Use both markers in difficult-to-classify renal carcinomas and selected leiomyomas; interpret staining with morphology and clinical context.",
    ],
    molecular: [
      "Germline pathogenic FH variants establish hereditary disease.",
      "Biallelic FH inactivation causes fumarate accumulation and an oncometabolite-associated tumor phenotype.",
      "FH/2SC immunohistochemistry identifies FH-deficient tumors but cannot distinguish germline from purely somatic biallelic inactivation.",
      "Genetic testing is required to establish hereditary HLRCC syndrome and clarify variants of uncertain significance.",
    ],
    differential: [
      [
        "Conventional leiomyoma",
        "May be morphologically identical; multiplicity, young age, associated RCC, and FH/2SC results guide further evaluation.",
      ],
      [
        "Leiomyosarcoma",
        "Symplastic atypia or multinucleation in FH-deficient leiomyoma does not by itself establish malignant behavior; assess mitotic activity, tumor cell necrosis, and overall features.",
      ],
      [
        "Sporadic FH-deficient neoplasm",
        "Somatic biallelic FH loss can occur, especially in uterine leiomyoma; germline testing is needed to diagnose the syndrome.",
      ],
    ],
    pitfalls: [
      "Retained FH does not fully exclude FH deficiency; 2SC is more sensitive.",
      "A single FH-deficient uterine leiomyoma in an older patient is less predictive of germline disease than multiple lesions or early-onset disease.",
      "Do not diagnose HLRCC from FH/2SC immunohistochemistry alone.",
    ],
  },
  {
    name: "Succinate Dehydrogenase–Deficient Tumor Syndromes",
    genes: "SDHA, SDHB, SDHC, SDHD, SDHAF2",
    pattern:
      "Usually autosomal dominant | PPGL, GIST, renal carcinoma, and selected other tumors",
    clinical: [
      "May present at a young age with multifocal or extra-adrenal paragangliomas; hereditary predisposition is common among adult PPGLs.",
      "Genitourinary sites include urinary bladder and periaortic sympathetic-chain paragangliomas.",
      "Other associated tumors include pheochromocytoma, gastric GIST, renal carcinoma, pituitary neuroendocrine tumor, and pulmonary chondroma.",
      "Pulmonary chondromas are particularly associated with Carney triad and are typically seen in young women.",
      "SDHB-associated disease has a higher morbidity and mortality than disease associated with other SDH genes.",
    ],
    criteria: [
      "A pathogenic variant in an SDH gene establishes a hereditary SDH-associated predisposition.",
      "More than one SDH-deficient neoplasm in an individual or family is strongly supportive.",
      "Even a single SDH-deficient neoplasm is a strong indication for genetic counseling and testing.",
      "When no germline SDH variant is identified in a patient with syndromic SDH-deficient tumors, consider Carney triad; SDHC epimutation or low-level mosaicism may be present.",
    ],
    histology: [
      "SDH-deficient paragangliomas may show rounded nests of monotonous epithelioid cells with clear or vacuolated cytoplasm; morphology is variable and cannot replace immunohistochemistry.",
      "SDH-deficient GISTs are usually gastric and may be multilobulated or plexiform; lymph node metastases are more frequent than in conventional GIST.",
      "SDH-deficient renal carcinomas form a distinct renal tumor entity and may show variant morphology.",
      "Pulmonary chondromas are bland and often calcified; they lack entrapped respiratory epithelium and the mixed mesenchymal elements typical of hamartoma.",
    ],
    ihc: [
      "Loss of granular cytoplasmic SDHB staining indicates SDH-complex deficiency; non-neoplastic endothelial cells and fibroblasts should retain staining as internal controls.",
      "Loss of SDHA in addition to SDHB supports SDHA-associated deficiency.",
      "Weak diffuse SDHB staining relative to strongly granular internal controls should be interpreted as loss.",
      "SDHB screening is recommended in pheochromocytomas and paragangliomas and should be considered in gastric GIST.",
    ],
    molecular: [
      "Germline pathogenic variants may involve SDHA, SDHB, SDHC, SDHD, or SDHAF2; SDHC promoter epimutation and constitutional mosaicism are additional mechanisms.",
      "Biallelic SDH-complex inactivation causes accumulation of oncometabolites and pseudohypoxic signaling.",
      "SDHA/SDHB immunohistochemistry can help assess the pathogenicity of a variant of uncertain significance.",
      "A germline SDHA variant identified incidentally has low penetrance and requires careful clinical interpretation.",
    ],
    differential: [
      [
        "Conventional paraganglioma",
        "May be morphologically identical; SDHB/SDHA immunohistochemistry and germline assessment identify SDH-deficient disease.",
      ],
      [
        "Conventional gastric GIST",
        "SDH-deficient GIST is usually gastric, often plexiform/multilobulated, and has loss of SDHB; clinical context and molecular workup distinguish it.",
      ],
      [
        "Pulmonary hamartoma",
        "Hamartoma contains entrapped respiratory epithelium and other mesenchymal elements; SDH-deficient chondroma is a relatively pure bland cartilage lesion.",
      ],
    ],
    pitfalls: [
      "A normal-appearing or nonspecific morphology does not exclude SDH deficiency.",
      "Interpret SDHB only when internal non-neoplastic controls are positive.",
      "Do not use Carney–Stratakis syndrome or dyad as the preferred terminology; use Carney triad for the non-hereditary syndromic setting.",
    ],
  },
  {
    name: "BAP1 Tumor Predisposition Syndrome",
    genes: "BAP1",
    pattern:
      "Autosomal dominant | RCC, melanocytic tumors, mesothelioma, and melanoma",
    clinical: [
      "Tumors often arise earlier than their sporadic counterparts; reported RCC age at onset ranges from 36 to 72 years, with a median around 47 years.",
      "Associated tumors include clear cell RCC, BAP1-inactivated melanocytic tumors, uveal and cutaneous melanoma, mesothelioma, basal cell carcinoma, meningioma, and cholangiocarcinoma.",
      "Multifocal clear cell RCC and atypical renal cysts have been reported.",
    ],
    criteria: [
      "A heterozygous germline pathogenic BAP1 variant is required to establish the syndrome.",
      "Consider germline testing in patients with two or more associated tumors, or one associated tumor plus a first- or second-degree relative with an associated tumor.",
      "Loss of nuclear BAP1 expression in an associated tumor can help identify patients who warrant germline testing.",
      "There are no formal phenotypic diagnostic criteria; clinical suspicion should be based on the tumor spectrum and family history.",
    ],
    histology: [
      "Renal tumors are most commonly clear cell RCC, although non-clear cell subtypes have been reported.",
      "Multifocal clear cell RCC and atypical renal cysts may occur.",
      "The histology of BAP1-associated RCC may resemble sporadic RCC; morphology alone does not establish hereditary disease.",
    ],
    ihc: [
      "Complete loss of nuclear BAP1 expression in tumor cells, with retained nuclear staining in non-neoplastic internal controls, supports BAP1 inactivation.",
      "BAP1 loss in tumor tissue is a screening clue, not proof of a germline variant.",
    ],
    molecular: [
      "Germline heterozygous pathogenic BAP1 variant testing is required for syndrome confirmation.",
      "Tumor BAP1 loss reflects biallelic inactivation but may also occur in sporadic clear cell RCC.",
      "Tumor-only sequencing cannot distinguish somatic from germline BAP1 alteration.",
    ],
    differential: [
      [
        "Sporadic BAP1-deficient clear cell RCC",
        "May show identical BAP1 loss; germline testing and personal/family tumor history distinguish inherited predisposition.",
      ],
      [
        "Other hereditary clear cell RCC syndromes",
        "VHL and other renal cancer syndromes have different associated clinical findings and germline genes.",
      ],
      [
        "BAP1-inactivated melanocytic tumor",
        "A cutaneous sentinel lesion can prompt evaluation, but germline testing is required to diagnose the syndrome.",
      ],
    ],
    pitfalls: [
      "BAP1 loss by immunohistochemistry does not by itself diagnose BAP1 tumor predisposition syndrome.",
      "The penetrance and natural history remain incompletely defined.",
    ],
  },
  {
    name: "Hereditary Pheochromocytoma–Paraganglioma Syndromes",
    genes:
      "RET, NF1, VHL, SDHx, MAX, TMEM127, FH, and other susceptibility genes",
    pattern:
      "Inherited PPGL predisposition | Adrenal medulla, sympathetic chain, and head and neck",
    clinical: [
      "A substantial proportion of adult pheochromocytomas and paragangliomas are associated with germline pathogenic variants.",
      "Presentation may occur at a young age with multifocal, bilateral, or extra-adrenal tumors.",
      "Symptoms may include hypertension, tachycardia, sweating, anxiety, palpitations, and headache.",
      "Urinary bladder paraganglioma may cause micturition-associated hypertension, syncope, hematuria, or palpitations.",
      "Parasympathetic head and neck paragangliomas are usually nonsecretory.",
    ],
    criteria: [
      "A personal or family history of PPGL or a recognized PPGL syndrome is an essential clinical clue.",
      "Morphologic and immunohistochemical features suggesting inherited disease should prompt germline evaluation.",
      "All patients with PPGL should be considered for germline testing in the context of clinical and pathologic findings.",
      "Multifocality, bilateral adrenal tumors, young age, extra-adrenal location, or an associated syndrome strengthens suspicion.",
    ],
    histology: [
      "Hereditary PPGLs are generally histologically similar to sporadic tumors.",
      "MEN2-associated pheochromocytomas may be multifocal and accompanied by adrenal medullary nodules/hyperplasia and hyaline globules.",
      "VHL-associated pheochromocytomas may show a thick vascular capsule, edematous stroma, and small-to-medium cells with clear or amphophilic cytoplasm.",
      "SDH-associated tumors may show rounded nests or pseudorosettes of monotonous epithelioid cells with vacuolated cytoplasm.",
      "NF1- and MAX-associated tumors may show a conventional or composite pattern.",
    ],
    ihc: [
      "Tumor cells express chromogranin A, synaptophysin, INSM1, tyrosine hydroxylase, and dopamine beta-hydroxylase; keratin is usually negative.",
      "Sustentacular cells are highlighted by S100 and SOX10.",
      "Loss of SDHB supports SDH-complex deficiency; loss of SDHA in addition to SDHB supports SDHA-associated disease.",
      "CAIX may be positive in VHL-associated tumors; FH and 2SC can identify FH-deficient tumors.",
    ],
    molecular: [
      "Susceptibility genes include RET, NF1, VHL, SDHA/B/C/D, SDHAF2, MAX, TMEM127, FH, and additional genes.",
      "Tumor immunohistochemistry can direct germline testing, but germline analysis is needed to establish inherited predisposition.",
      "Consider biochemical assessment of metanephrine, normetanephrine, and 3-methoxytyramine in the appropriate clinical setting.",
    ],
    differential: [
      [
        "Sporadic pheochromocytoma/paraganglioma",
        "May be morphologically identical; young age, multifocality, family history, and pathway-specific IHC support hereditary evaluation.",
      ],
      [
        "Metastatic neuroendocrine tumor",
        "Usually differs by site-specific clinical context and epithelial/neuroendocrine phenotype; correlate with adrenal/paraganglionic location and sustentacular network.",
      ],
      [
        "SDH-deficient tumor syndrome",
        "Overlaps with hereditary PPGL; SDH-deficient tumors are a defined molecular subset and should be assessed with SDHB/SDHA IHC.",
      ],
    ],
    pitfalls: [
      "No single histologic feature or biomarker reliably predicts metastatic behavior.",
      "Avoid fine-needle aspiration of suspected PPGL because of bleeding and catecholamine-related hypertensive crisis risk.",
      "Do not assume a negative family history excludes germline disease.",
    ],
  },
  {
    name: "Tuberous Sclerosis Complex",
    genes: "TSC1, TSC2",
    pattern:
      "Autosomal dominant, with frequent de novo cases | Multisystem hamartomatous disorder",
    clinical: [
      "Neurologic and cardiac manifestations often appear in infancy or childhood; skin lesions may occur at any age.",
      "Renal involvement occurs in approximately 60–80% of patients and includes angiomyolipomas, cysts, and rarely renal malignancy.",
      "Renal angiomyolipomas are often multiple and bilateral and are more prevalent and clinically consequential in women.",
      "Young women may develop pulmonary lymphangioleiomyomatosis.",
      "TSC2-related disease often has more clinical manifestations than TSC1-related disease.",
    ],
    criteria: [
      "A pathogenic TSC1 or TSC2 variant is independently diagnostic.",
      "Clinical diagnosis can be made with two major features or one major feature plus at least two minor features.",
      "Major features include hypomelanotic macules, angiofibromas/fibrous cephalic plaque, ungual fibromas, shagreen patch, retinal hamartomas, cortical dysplasia, subependymal nodules/giant cell astrocytoma, cardiac rhabdomyoma, lymphangioleiomyomatosis, and angiomyolipomas.",
      "Minor features include confetti skin lesions, dental enamel pits, intraoral fibromas, retinal achromic patch, multiple renal cysts, and nonrenal hamartomas.",
      "One major feature or at least two minor features suggests possible TSC.",
    ],
    histology: [
      "Renal angiomyolipoma is a PEComa composed of abnormal thick-walled vessels, smooth muscle cells, and adipose tissue.",
      "Epithelioid angiomyolipoma may mimic RCC and can show a predominantly epithelioid pattern.",
      "A range of renal carcinomas has been reported, including papillary, eosinophilic/cystic, oncocytic/chromophobe-like, and tumors with smooth muscle stroma.",
      "Renal cystic disease may be prominent, particularly with contiguous TSC2–PKD1 deletion.",
    ],
    ihc: [
      "Epithelioid angiomyolipoma expresses melanocytic markers such as HMB45 and is typically negative for cytokeratin.",
      "Use epithelial and PEComa-directed markers to distinguish an epithelioid renal lesion from RCC.",
    ],
    molecular: [
      "Pathogenic variants in TSC1 or TSC2 establish molecular diagnosis; a negative conventional test does not exclude TSC.",
      "TSC1/hamartin and TSC2/tuberin form a complex that suppresses mTOR signaling.",
      "Contiguous deletion involving TSC2 and PKD1 can produce a combined cystic renal phenotype.",
    ],
    differential: [
      [
        "Sporadic angiomyolipoma",
        "May be solitary; multiple/bilateral angiomyolipomas with multisystem findings favor TSC.",
      ],
      [
        "Renal cell carcinoma",
        "Epithelioid angiomyolipoma is HMB45-positive and cytokeratin-negative; RCC shows epithelial differentiation.",
      ],
      [
        "Birt–Hogg–Dubé renal tumors",
        "BHD tumors are typically oncocytic/chromophobe-spectrum epithelial neoplasms, not PEComas.",
      ],
    ],
    pitfalls: [
      "Morphologically similar renal tumors may occur sporadically; diagnose TSC by integrated clinicopathologic and genetic criteria.",
      "The absence of an identifiable TSC1/TSC2 variant does not exclude the syndrome.",
    ],
  },
  {
    name: "Lynch Syndrome",
    genes: "MLH1, MSH2, MSH6, PMS2; EPCAM deletions",
    pattern:
      "Autosomal dominant | Upper urinary tract urothelial carcinoma and multisystem cancer predisposition",
    clinical: [
      "Upper urinary tract urothelial carcinoma (renal pelvis or ureter) is the most characteristic genitourinary malignancy.",
      "Risk of upper tract urothelial carcinoma is substantially increased, particularly with MSH2 pathogenic variants.",
      "Affected patients may be younger and more often female than patients with sporadic upper tract urothelial carcinoma.",
      "Bladder urothelial carcinoma and prostate carcinoma have also been associated; renal cell carcinoma and testicular germ cell tumors are less established associations.",
      "Other common syndrome-associated sites include colorectum and endometrium.",
    ],
    criteria: [
      "A germline pathogenic variant in MLH1, MSH2, MSH6, or PMS2, or an EPCAM deletion, establishes Lynch syndrome.",
      "Mismatch repair immunohistochemistry or microsatellite instability testing of upper tract urothelial carcinoma can identify candidates for germline evaluation.",
      "Clinical suspicion is strengthened by young age, personal/family history of Lynch-associated tumors, and mismatch repair deficiency.",
      "Muir–Torre syndrome is a Lynch syndrome phenotype that includes sebaceous neoplasms.",
    ],
    histology: [
      "Lynch-associated urothelial carcinomas generally resemble their sporadic counterparts.",
      "Tumor-infiltrating lymphocytes, inverted growth, a noninfiltrative stromal interface, limited nuclear pleomorphism, and lack of differentiation have been described but are neither sensitive nor specific.",
      "Morphology alone cannot reliably identify Lynch-associated urothelial carcinoma.",
    ],
    ihc: [
      "Perform mismatch repair IHC for MLH1, PMS2, MSH2, and MSH6 in appropriate upper tract urothelial carcinomas.",
      "Loss of one or more mismatch repair proteins supports mismatch repair deficiency and should prompt appropriate molecular/genetic evaluation.",
      "Interpret loss patterns in the context of internal controls and the possibility of sporadic mechanisms.",
    ],
    molecular: [
      "Germline pathogenic variants involve MLH1, MSH2, MSH6, or PMS2; EPCAM deletions can cause MSH2 silencing.",
      "Somatic loss of the second allele produces mismatch repair deficiency and microsatellite instability.",
      "Tumor mismatch repair deficiency or MSI-high status does not alone prove germline Lynch syndrome; germline testing is required.",
    ],
    differential: [
      [
        "Sporadic mismatch repair-deficient urothelial carcinoma",
        "May show the same IHC/MSI phenotype; germline testing and clinical/family history distinguish Lynch syndrome.",
      ],
      [
        "Mismatch repair-proficient sporadic urothelial carcinoma",
        "Retains mismatch repair protein expression and lacks the characteristic MMR-deficient phenotype.",
      ],
      [
        "Muir–Torre syndrome",
        "A cutaneous sebaceous tumor phenotype within the Lynch syndrome spectrum, not a separate molecular syndrome.",
      ],
    ],
    pitfalls: [
      "MMR deficiency in a tumor is a screening result, not a germline diagnosis.",
      "The described morphologic clues are not sufficiently sensitive or specific to replace MMR IHC.",
    ],
  },
  {
    name: "Hereditary Homologous Recombination Repair Gene Syndromes",
    genes: "BRCA1, BRCA2, ATM, CHEK2",
    pattern:
      "Germline DNA-repair predisposition | Prostate, urothelial, breast, ovarian, and other cancers",
    clinical: [
      "There is no single distinctive phenotype; presentation depends on the tumor type and gene involved.",
      "BRCA1/BRCA2 variants are associated with breast, ovarian, pancreatic, prostate, urothelial, and selected other cancers.",
      "ATM and CHEK2 variants are associated with increased risk of prostate cancer and other malignancies.",
      "A first-degree relative with prostate cancer is associated with increased risk, particularly when diagnosed at a younger age.",
      "Men with advanced or metastatic prostate cancer are enriched for germline DNA-repair alterations.",
    ],
    criteria: [
      "A pathogenic or likely pathogenic germline variant in BRCA1, BRCA2, ATM, or CHEK2 in the appropriate clinical setting establishes inherited predisposition.",
      "Tumor sequencing that identifies an HR-pathway variant should prompt consideration of germline assessment.",
      "Personal and family history of prostate, breast, ovarian, pancreatic, or related cancers should guide genetic evaluation.",
    ],
    histology: [
      "Prostate carcinomas associated with BRCA1/BRCA2 alterations more often have Gleason score 8 or higher, higher stage, and lymph node metastases.",
      "A consistent distinctive histologic pattern has not been established; ductal or intraductal morphology is not a reliable discriminator.",
    ],
    ihc: [
      "No syndrome-specific immunohistochemical profile is established for routine histologic diagnosis.",
      "IHC findings should not substitute for germline testing or validated tumor molecular assays.",
    ],
    molecular: [
      "Germline testing is generally performed on blood or another uninvolved tissue using targeted or multigene sequencing.",
      "Tumor-only HR-gene alterations may be somatic or germline; paired germline assessment is needed to establish inherited predisposition.",
      "Tumor HR-pathway alterations may predict response to PARP inhibitors and platinum-based chemotherapy, depending on tumor type and clinical context.",
    ],
    differential: [
      [
        "Sporadic prostate carcinoma",
        "May share the same morphology; germline testing and personal/family cancer history establish inherited predisposition.",
      ],
      [
        "Somatic HR-deficient tumor",
        "A tumor-only BRCA1/2, ATM, or CHEK2 alteration may be acquired; it does not establish a hereditary syndrome.",
      ],
      [
        "Lynch syndrome",
        "Both may involve prostate or urothelial cancer, but Lynch is defined by mismatch repair gene defects and MMR deficiency.",
      ],
    ],
    pitfalls: [
      "Do not classify a tumor as hereditary solely because tumor sequencing detects an HR-pathway mutation.",
      "Histologic grade and stage may be higher, but no unique morphology reliably identifies germline HR deficiency.",
    ],
  },
  {
    name: "Carney Complex",
    genes: "PRKAR1A (most cases)",
    pattern:
      "Autosomal dominant | Endocrine, cardiac, cutaneous, and gonadal neoplasms",
    clinical: [
      "May be diagnosed in infancy but most commonly becomes apparent around puberty.",
      "Pigmented lentigines affect the lips, conjunctiva, canthi, and sometimes genital epithelium.",
      "Large cell calcifying Sertoli cell tumors occur in approximately one-third of boys and are nearly universal in affected men.",
      "Associated findings include cardiac myxomas, blue nevi, pituitary adenomas, thyroid lesions, and primary pigmented nodular adrenocortical disease.",
      "Endocrine manifestations may include acromegaly or Cushing syndrome.",
    ],
    criteria: [
      "Diagnosis requires two major criteria, or one major criterion plus one supplemental criterion.",
      "Large cell calcifying Sertoli cell tumor, characteristic lentigines, cardiac myxoma, and selected endocrine tumors are important syndrome clues.",
      "A germline pathogenic PRKAR1A variant supports molecular confirmation.",
      "Loss of PRKAR1A immunoreactivity in an appropriate neoplasm may prompt molecular testing.",
    ],
    histology: [
      "Large cell calcifying Sertoli cell tumor is a key genitourinary manifestation; detailed tumor morphology is addressed in the dedicated entity reference.",
      "Other associated lesions include cardiac myxoma, blue nevus, thyroid follicular lesions, and endocrine neoplasms.",
      "The syndrome is characterized by multiple benign neoplasms and hyperplasias, although malignant tumors have been reported.",
    ],
    ihc: [
      "PRKAR1A immunohistochemistry may demonstrate loss in selected associated neoplasms and can guide genetic testing.",
      "No single IHC profile is diagnostic across the diverse tumor spectrum.",
    ],
    molecular: [
      "Most cases are associated with inactivating germline PRKAR1A variants at 17q24.2.",
      "DNA sequencing and targeted deletion/duplication analysis can detect PRKAR1A alterations.",
      "A subset of patients have no identified PRKAR1A variant.",
    ],
    differential: [
      [
        "Sporadic large cell calcifying Sertoli cell tumor",
        "Rare outside Carney complex; assess for lentigines, cardiac myxoma, endocrine lesions, and family history.",
      ],
      [
        "Peutz–Jeghers syndrome-associated Sertoli cell neoplasia",
        "Typically intratubular large cell hyalinizing Sertoli cell neoplasia with prominent basement membrane deposits and gastrointestinal polyposis/pigmentation.",
      ],
      [
        "Other endocrine tumor syndromes",
        "MEN2, VHL, and SDH-associated syndromes have distinct tumor combinations and molecular drivers.",
      ],
    ],
    pitfalls: [
      "Large cell calcifying Sertoli cell tumor is a strong clue but should be interpreted with the broader clinical criteria.",
      "Do not conflate Carney complex with Carney triad, which refers to a distinct SDH-deficient, usually non-hereditary tumor association.",
    ],
  },
  {
    name: "Peutz–Jeghers Syndrome",
    genes: "STK11 (LKB1)",
    pattern:
      "Autosomal dominant | GI polyposis, mucocutaneous pigmentation, and testicular Sertoli cell neoplasia",
    clinical: [
      "Intestinal polyps commonly cause abdominal pain, bleeding, anemia, or intussusception, often in the first two decades.",
      "Mucocutaneous melanin pigmentation is characteristic.",
      "Prepubertal boys may present with bilateral gynecomastia, elevated estrogen, and advanced bone age due to intratubular Sertoli cell neoplasia.",
      "Testicular lesions may cause bilateral enlargement without a discrete mass and may be multifocal and subcentimeter on ultrasound.",
      "Genitourinary tumors outside the testis are rare and their relationship to the syndrome is uncertain.",
    ],
    criteria: [
      "A pathogenic germline STK11 variant supports molecular confirmation.",
      "The syndrome is recognized clinically by mucocutaneous pigmentation and gastrointestinal hamartomatous polyposis, with characteristic family history.",
      "In the testis, expanded seminiferous tubules with thickened basement membranes and intratubular Sertoli cell proliferation are desirable diagnostic findings.",
      "Do not diagnose Peutz–Jeghers syndrome from the testicular lesion alone without clinical/genetic correlation.",
    ],
    histology: [
      "The process is predominantly intratubular, with patchily expanded seminiferous tubules approximately two to four times normal size.",
      "Tubules are surrounded by markedly thickened basement membranes that protrude into the lumen as globular eosinophilic deposits.",
      "Large Sertoli cells have pale eosinophilic, often fibrillary cytoplasm and round-to-oval nuclei with fine chromatin and visible nucleoli.",
      "Mitoses are absent; calcific foci may be present.",
      "Rare stromal invasion may occur and can resemble large cell calcifying Sertoli cell tumor.",
    ],
    ihc: [
      "Tumor cells express inhibin, aromatase, and cytokeratin AE1/AE3.",
      "Aromatase expression explains estrogen excess and the associated prepubertal gynecomastia.",
    ],
    molecular: [
      "Germline pathogenic variants in STK11 (LKB1) on chromosome 19p13.3 are identified in more than 90% of patients.",
      "No specific molecular alteration has been established for the characteristic testicular intratubular lesion beyond the underlying STK11 syndrome.",
    ],
    differential: [
      [
        "Large cell calcifying Sertoli cell tumor",
        "Usually has a more prominent invasive component, dense eosinophilic cytoplasm, neutrophilic infiltrate, and conspicuous calcification.",
      ],
      [
        "Sporadic Sertoli cell tumor",
        "Usually forms a discrete mass rather than patchy intratubular expansion with globular basement membrane deposits.",
      ],
      [
        "Carney complex-associated Sertoli cell tumor",
        "Carney complex is associated with large cell calcifying Sertoli cell tumors and lentigines/cardiac/endocrine lesions; PJS shows GI polyposis and mucocutaneous pigmentation.",
      ],
    ],
    pitfalls: [
      "Do not misclassify the intratubular lesion as an invasive Sertoli cell tumor in the absence of stromal invasion.",
      "Reported renal, prostate, and penile carcinomas in PJS cohorts may be incidental; a causal association is not established.",
    ],
  },
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

export default function GUGeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [opened, setOpened] = useState<string[]>([
    "Von Hippel–Lindau Syndrome",
    "Hereditary Leiomyomatosis and Renal Cell Carcinoma Syndrome",
    "Succinate Dehydrogenase–Deficient Tumor Syndromes",
    "Lynch Syndrome",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return syndromes;
    return syndromes.filter((item) =>
      [
        item.name,
        item.genes,
        item.pattern,
        ...item.clinical,
        ...item.criteria,
        ...item.histology,
        ...item.ihc,
        ...item.molecular,
        ...item.differential.flat(),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

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
            PathologyGPS / Genitourinary Pathology / Genetic Tumor Syndromes
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Genitourinary Genetic Tumor Syndromes
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference to hereditary tumor
                predisposition involving the kidney, urinary tract, adrenal
                gland, testis, and male genital tract.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Recognize the tumor, identify the syndrome clue, then confirm
                germline status.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Tumor morphology and immunohistochemistry can trigger hereditary
                evaluation, but a tumor-only sequence result does not establish
                a germline diagnosis.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from tumor phenotype to hereditary diagnosis">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Recognize the pattern",
                "Young age, bilateral or multifocal tumors, unusual histology, multiple primary tumors, or a suggestive family history.",
              ],
              [
                "Review the associated organs",
                "Look for characteristic skin, lung, CNS, endocrine, gastrointestinal, and reproductive manifestations.",
              ],
              [
                "Use targeted IHC",
                "Apply pathway-directed markers such as FH/2SC, SDHB/SDHA, BAP1, mismatch repair proteins, and selected lineage markers.",
              ],
              [
                "Interpret tumor sequencing carefully",
                "A pathogenic variant in tumor tissue may be somatic or germline; tumor-only testing cannot resolve constitutional status.",
              ],
              [
                "Confirm germline status",
                "Use genetic counseling and testing of blood or other uninvolved tissue when hereditary predisposition is suspected.",
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
          <Panel title="High-yield renal tumor associations">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["VHL", "Clear cell RCC; often bilateral/multifocal"],
                    [
                      "FLCN / Birt–Hogg–Dubé",
                      "Hybrid oncocytic/chromophobe tumors; oncocytoma-like and chromophobe RCC",
                    ],
                    [
                      "MET / hereditary papillary RCC",
                      "Bilateral/multifocal low-grade papillary RCC",
                    ],
                    [
                      "FH / HLRCC",
                      "FH-deficient RCC; clinically important aggressive potential",
                    ],
                    ["SDH genes", "SDH-deficient RCC"],
                    ["BAP1", "Most often clear cell RCC; BAP1 nuclear loss"],
                    [
                      "TSC1/TSC2",
                      "Angiomyolipoma, cysts, and diverse renal epithelial tumors",
                    ],
                  ].map(([gene, phenotype]) => (
                    <tr key={gene}>
                      <td className="py-2 pr-3 font-semibold">{gene}</td>
                      <td className="py-2 text-slate-600">{phenotype}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="High-yield ancillary tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["FH-deficient neoplasm", "FH loss; 2SC positivity"],
                    [
                      "SDH-deficient neoplasm",
                      "SDHB loss; add SDHA to assess SDHA-associated deficiency",
                    ],
                    [
                      "Lynch syndrome candidate",
                      "MLH1, PMS2, MSH2, and MSH6 IHC; MSI testing as appropriate",
                    ],
                    ["BAP1-associated tumor", "Loss of nuclear BAP1"],
                    [
                      "VHL-associated clear cell RCC",
                      "CAIX/CD10 diffuse; CK7 negative or focal; 3p loss",
                    ],
                    [
                      "BHD-associated renal tumor",
                      "PAX8, KIT, and CK7 pattern interpreted with morphology",
                    ],
                  ].map(([entity, test]) => (
                    <tr key={entity}>
                      <td className="py-2 pr-3 font-semibold">{entity}</td>
                      <td className="py-2 text-slate-600">{test}</td>
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
                Syndrome reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Essential diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by syndrome, gene, clinical feature, morphology,
                immunostain, or differential diagnosis.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. FH, SDHB, bilateral RCC, MSH2..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>

          <div className="space-y-4">
            {filtered.map((item) => {
              const isOpen = opened.includes(item.name);
              return (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(item.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {item.genes}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {item.pattern}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse" : "View diagnostic profile"}{" "}
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Clinical Profile
                        </h4>
                        <Bullets items={item.clinical} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={item.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Histopathology
                        </h4>
                        <Bullets items={item.histology} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={item.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Molecular Pathology
                        </h4>
                        <Bullets items={item.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {item.differential.map(
                                ([diagnosis, distinction]) => (
                                  <tr key={diagnosis}>
                                    <td className="w-1/4 py-3 pr-3 align-top font-semibold text-slate-900">
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
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={item.pitfalls} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching syndrome.
              </div>
            )}
          </div>
        </section>

        <Panel title="Practical reporting and workup checklist">
          <Bullets
            items={[
              "Document age, exact anatomic site, laterality, multifocality, and prior or synchronous tumors.",
              "Correlate the tumor with characteristic extra-genitourinary findings and personal/family cancer history.",
              "Use internal positive controls when interpreting loss of FH, SDHB/SDHA, BAP1, or mismatch repair proteins.",
              "State clearly whether a molecular result is from tumor-only sequencing or germline testing.",
              "Recommend genetic counseling and germline testing when a syndrome-associated tumor, immunophenotype, or clinical pattern raises suspicion.",
              "Do not assign a hereditary syndrome solely from tumor morphology, immunohistochemistry, or a tumor-only pathogenic variant.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference
          emphasizes morphologic recognition, targeted immunohistochemistry, and
          criteria for hereditary evaluation. Definitive diagnosis of a germline
          tumor predisposition generally requires appropriate germline testing
          and clinical correlation.
        </footer>
      </div>
    </main>
  );
}
