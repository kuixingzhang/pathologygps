"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const items: Item[] = [
  {
    name: "Lipoma",
    group: "Benign",
    behavior: "Benign",
    site: "Usually superficial subcutis of upper back, proximal extremity, and abdomen; deep variants include intramuscular, parosteal, and tendon-sheath lesions.",
    morphology: [
      "Well-circumscribed proliferation of uniform mature adipocytes.",
      "Variable paucicellular fibrous septa and fat necrosis may be present; atypical hyperchromatic stromal cells are absent.",
      "Intramuscular lipomas may infiltrate skeletal muscle; atrophic entrapped muscle fibers can mimic atypical stromal cells.",
    ],
    ihc: ["No routine IHC is required for a typical lipoma."],
    molecular: [
      "HMGA2 rearrangements involving 12q13–q15 occur in a subset; HMGA2::LPP is a common fusion.",
      "MDM2 amplification testing is reserved for selected deep, large, recurrent, or retroperitoneal fatty tumors.",
    ],
    differential: [
      [
        "ALT/WDLPS",
        "Shows at least focal atypical hyperchromatic stromal/adipocytic nuclei, often in septa; MDM2 amplification supports the diagnosis.",
      ],
      [
        "Intramuscular lipoma",
        "Muscle infiltration alone is not malignancy; distinguish atrophic entrapped muscle nuclei from true atypical stromal cells.",
      ],
      [
        "Lipomatosis",
        "A discrete neoplasm versus diffuse regional overgrowth of mature fat.",
      ],
    ],
    pitfalls: [
      "Adipocyte size variation alone does not establish ALT/WDLPS.",
      "Deep location and large size warrant careful evaluation but are not independently diagnostic.",
    ],
  },
  {
    name: "Lipomatosis",
    group: "Benign",
    behavior: "Diffuse overgrowth; subtype depends on clinical distribution",
    site: "Trunk/extremity, head and neck, abdomen/pelvis, bowel, or symmetric upper-body/neck fat.",
    morphology: [
      "Diffuse, poorly circumscribed overgrowth of mature adipose tissue in a characteristic anatomic distribution.",
      "Histology shows lobules and sheets of mature adipocytes, sometimes infiltrating adjacent structures.",
      "Clinical patterns include diffuse, multiple symmetric, pelvic, steroid-associated, and HIV-associated lipodystrophy.",
    ],
    ihc: ["No specific IHC profile is established."],
    molecular: [
      "Multiple symmetric lipomatosis has been associated with mitochondrial DNA variants.",
      "Some infiltrating/facial lipomatoses and overgrowth phenotypes harbor somatic PIK3CA variants.",
    ],
    differential: [
      ["Lipoma", "Discrete mass versus diffuse regional overgrowth."],
      [
        "ALT/WDLPS",
        "Lipomatosis lacks atypical hyperchromatic stromal cells and the MDM2-amplified neoplastic phenotype.",
      ],
    ],
    pitfalls: [
      "Massive regional fat accumulation can mimic a neoplasm radiologically; distribution and imaging are important.",
    ],
  },
  {
    name: "Lipomatosis of nerve",
    group: "Benign",
    behavior: "Benign, often progressive hamartomatous overgrowth",
    site: "Appendicular nerves, especially median nerve; upper extremity predominates.",
    morphology: [
      "Epineurium is expanded by mature adipose tissue, separating and widely spacing nerve fascicles.",
      "Perineurial thickening and pseudo-onion-bulb-like hypertrophic change may occur; nerve fiber loss can be present.",
      "MRI: coaxial cable-like on cross-section and spaghetti-like longitudinally.",
    ],
    ihc: [
      "EMA, S100, and neurofilament protein may help characterize perineurial and nerve-fiber changes; anatomic relationship is defining.",
    ],
    molecular: [
      "Activating somatic PIK3CA hotspot variants occur in a subset.",
    ],
    differential: [
      [
        "Intraneural perineurioma",
        "A perineurial neoplasm versus epineurial mature fat separating nerve fascicles.",
      ],
      [
        "Diffuse lipomatosis",
        "Nerve-centered epineurial expansion and nerve-territory overgrowth distinguish this entity.",
      ],
    ],
    pitfalls: [
      "Treatment should balance decompression/debulking with preservation of nerve function.",
    ],
  },
  {
    name: "Lipoblastoma / lipoblastomatosis",
    group: "Benign",
    behavior: "Benign; localized or diffuse/infiltrative",
    site: "Predominantly trunk and extremities in infants/young children; also abdomen, pelvis, retroperitoneum, head/neck, and perineum.",
    morphology: [
      "Lobulated tumor with adipocytic cells at different stages of maturation: primitive stellate/spindled cells, multivacuolated or signet-ring lipoblasts, and mature adipocytes.",
      "Fibrovascular septa divide lobules; myxoid zones show plexiform vasculature and primitive mesenchymal cells.",
      "Zonal maturation may be present, with immature peripheral myxoid areas and mature central adipocytes.",
      "Mitoses are very rare; atypical mitoses and tumor necrosis are absent.",
    ],
    ihc: [
      "Adipocytes may express S100, CD56, and CD34; primitive mesenchymal cells may express CD34 and desmin.",
      "Nuclear PLAG1 IHC can support diagnosis but has limited sensitivity and is not a stand-alone test.",
    ],
    molecular: [
      "PLAG1 rearrangement/copy-number gain supports diagnosis in selected cases; 8q11–q13 rearrangements occur in about 60%.",
      "HMGA2 alterations are less common; negative PLAG1 does not exclude lipoblastoma.",
    ],
    differential: [
      [
        "Myxoid liposarcoma",
        "Usually older patient/deep extremity; uniform primitive cells, chicken-wire capillaries, DDIT3 alteration. Lipoblastoma shows maturation spectrum and lobular zonation.",
      ],
      [
        "Lipoma",
        "Mature adipocytes only, without primitive mesenchymal-to-lipoblast maturation.",
      ],
      [
        "ALT/WDLPS",
        "Atypical stromal cells and MDM2 amplification, unlike pediatric lipoblastoma.",
      ],
    ],
    pitfalls: [
      "Lipoblastoma may mature over time and later specimens may show few or no lipoblasts.",
      "Lipoblastomatosis is more diffuse/infiltrative and harder to excise, but does not metastasize.",
    ],
  },
  {
    name: "Lipoblastoma-like tumor",
    group: "Benign",
    behavior: "Benign; infrequent local recurrence",
    site: "Often genital/perigenital, especially vulva; also extremities, trunk, pelvis, and retroperitoneum.",
    morphology: [
      "Multinodular/lobulated growth separated by variably thick acellular fibrous bands.",
      "Lobules contain mature adipocytes, small uni-/bivacuolated lipoblasts, and bland spindle cells with fibrillary cytoplasm and blunt-to-tapered nuclei.",
      "Matrix is variably myxoid to collagenous, with conspicuous thin-walled plexiform vasculature.",
      "Mitoses are infrequent; necrosis is absent.",
    ],
    ihc: [
      "RB1 nuclear expression is often lost or mosaic.",
      "Desmin and/or S100 may be expressed; CD34 is positive in a minority.",
      "Weak PLAG1, DDIT3, MDM2, or CDK4 IHC may occur without corresponding gene rearrangement/amplification.",
    ],
    molecular: [
      "No recurrent RB1 loss, DDIT3 rearrangement, or PLAG1 rearrangement is established; molecular testing may exclude mimics.",
    ],
    differential: [
      [
        "Myxoid liposarcoma",
        "LLT spindle cells are bland and mature adipocytes/lipoblasts are admixed; conventional MLPS has uniform primitive cells and DDIT3 rearrangement.",
      ],
      [
        "Lipoblastoma",
        "Usually infancy/early childhood with maturation spectrum; PLAG1 rearrangement in a subset.",
      ],
      [
        "ASLT",
        "Requires atypical hyperchromatic spindle cells; LLT spindle cells are bland.",
      ],
    ],
    pitfalls: [
      "Do not diagnose MLPS from plexiform vessels and myxoid matrix alone.",
      "One metastatic case is reported, but dissemination otherwise has not been described in series.",
    ],
  },
  {
    name: "Angiolipoma",
    group: "Benign",
    behavior: "Benign",
    site: "Usually subcutaneous extremities, especially forearm, then trunk.",
    morphology: [
      "Well-circumscribed nodule of mature adipocytes and clusters of branching capillary-sized vessels.",
      "Fibrin thrombi within small vessels are a characteristic clue; vascularity may be peripheral.",
      "Cellular angiolipoma may be predominantly vascular.",
    ],
    ihc: ["No specific IHC panel is usually required."],
    molecular: [
      "Low-frequency PRKD2 variants are reported in many cases; no routine molecular test.",
    ],
    differential: [
      [
        "Ordinary lipoma",
        "Lacks conspicuous capillary clusters and fibrin thrombi.",
      ],
      [
        "Intramuscular hemangioma / visceral vascular lesions",
        "Distinct lesions with larger-caliber vessels.",
      ],
      [
        "Angiosarcoma",
        "Angiolipoma lacks endothelial atypia and destructive malignant vascular proliferation.",
      ],
    ],
    pitfalls: [
      "Usually small, painful/tender, and subcutaneous; do not mislabel other vascular lesions as angiolipoma.",
    ],
  },
  {
    name: "Myolipoma of soft tissue",
    group: "Benign",
    behavior: "Benign",
    site: "Usually deep retroperitoneal, abdominal, pelvic, or inguinal soft tissue; less often trunk wall, pleura, or extremities.",
    morphology: [
      "Intimate admixture of mature adipose tissue and well-differentiated smooth muscle.",
      "Smooth muscle forms intersecting fascicles of bland spindle cells with eosinophilic cytoplasm and cigar-shaped nuclei; mitoses absent or rare.",
      "Fat lacks atypical hyperchromatic stromal cells, significant fibrous septation, or convincing lipoblasts.",
    ],
    ihc: [
      "Smooth muscle expresses SMA, desmin, and h-caldesmon.",
      "ER/PR often positive; HMGA2 nuclear staining in a subset.",
      "MDM2, CDK4, and HMB45 are negative in source-described cases.",
    ],
    molecular: [
      "No routine molecular test; HMGA2 alterations reported in some cases.",
    ],
    differential: [
      [
        "Angiomyolipoma",
        "Myolipoma lacks PEComa phenotype/HMB45; angiomyolipoma typically has dysmorphic vessels and melanocytic markers.",
      ],
      [
        "ALT/WDLPS with smooth muscle differentiation",
        "Look for atypical adipocytic/stromal cells and MDM2 amplification.",
      ],
      [
        "Leiomyoma with entrapped fat",
        "Myolipoma has substantial intimate admixture of fat and smooth muscle.",
      ],
    ],
    pitfalls: [
      "Large retroperitoneal lesions can mimic aggressive tumors radiologically; bland cytology and absence of ALT features are important.",
    ],
  },
  {
    name: "Chondroid lipoma",
    group: "Benign",
    behavior: "Benign",
    site: "Usually deep subcutis abutting muscular fascia or skeletal muscle; limbs, limb girdles, and trunk.",
    morphology: [
      "Circumscribed, usually encapsulated/lobulated mass with mature adipose tissue and chondroid-appearing areas.",
      "Chondroid zones contain small lipoblasts at different maturation stages, with uni- to multivacuolated droplets indenting bland or convoluted nuclei.",
      "Myxoid/chondroid/hyalinized matrix creates lacuna-like spaces and sharp cell borders; calcification/ossification may occur.",
    ],
    ihc: [
      "S100 reflects maturation: mature adipocytes stain strongly; lipoblastic cells may be weak/negative.",
      "Keratin and EMA usually negative; rare focal positivity.",
    ],
    molecular: [
      "ZFTA::MRTFB fusion can confirm selected cases; ZFTA::NCOA1 also reported.",
      "A distinct malignant chondroid-lipoma-like sarcoma with ZFTA::RELA has been reported.",
    ],
    differential: [
      [
        "Chondrolipoma/osteolipoma",
        "Mature lipoma with metaplastic cartilage/bone; chondroid lipoma has immature lipoblasts in myxohyaline matrix.",
      ],
      [
        "Extraskeletal chondrosarcoma",
        "Chondroid lipoma is bland and adipocytic; chondrosarcoma shows malignant cytology/destructive growth.",
      ],
      [
        "Myxoid liposarcoma",
        "Uniform primitive cells and DDIT3 alteration versus chondroid matrix and lipoblastic maturation.",
      ],
    ],
    pitfalls: [
      "Identify the adipocytic/lipoblastic component; use molecular confirmation in atypical cases.",
    ],
  },
  {
    name: "Spindle cell lipoma / pleomorphic lipoma",
    group: "Benign",
    behavior: "Benign",
    site: "Classically subcutaneous posterior neck, back, and shoulder in older men; other sites, particularly in women.",
    morphology: [
      "Spindle cell lipoma: bland spindle cells, mature adipocytes, and ropey collagen in fibrous or myxoid stroma; mast cells are consistent.",
      "Spindle cells are uniform, elongated, randomly distributed or in short fascicles; mitoses absent/rare and necrosis absent.",
      "Pleomorphic lipoma additionally contains pleomorphic spindle cells and multinucleated floret-like giant cells.",
      "Fat-poor, myxoid, pseudoangiomatous, and plexiform patterns occur.",
    ],
    ihc: [
      "Spindle/floret cells typically CD34-positive; S100 and desmin variable/focal.",
      "Nuclear RB1 loss is common and supportive.",
    ],
    molecular: [
      "Heterozygous RB1 loss, often with 13q deletion; molecular confirmation usually unnecessary.",
    ],
    differential: [
      [
        "ASLT/APLT",
        "Require true atypical hyperchromatic spindle cells and/or broader pleomorphism; spindle cell lipoma cells are bland.",
      ],
      [
        "ALT/WDLPS",
        "Atypical stromal/adipocytic cells and MDM2 amplification versus RB1 loss and no MDM2 amplification.",
      ],
      [
        "DFSP",
        "Dermal storiform infiltrative spindle-cell tumor with honeycomb fat entrapment; spindle cell lipoma has ropey collagen, mature fat, CD34-positive bland cells.",
      ],
    ],
    pitfalls: [
      "Floret cells in pleomorphic lipoma do not by themselves indicate malignancy.",
      "Avoid obsolete term dendritic fibromyxolipoma.",
    ],
  },
  {
    name: "Hibernoma",
    group: "Benign",
    behavior: "Benign; no malignant subtype",
    site: "Often thigh, trunk, chest, upper extremity, and head/neck; usually deep/intramuscular.",
    morphology: [
      "Highly vascular tumor of polygonal brown-fat cells with abundant finely multivacuolated cytoplasm.",
      "Central round bland nuclei with small nucleoli; scattered univacuolated white-fat cells common.",
      "Classic hibernoma contains >70% brown-fat cells; myxoid and spindle-cell patterns occur.",
      "Nuclear atypia and mitotic activity are absent.",
    ],
    ihc: [
      "UCP1 strongly highlights brown-fat cells.",
      "S100 and CD10 commonly positive; SOX10, CD68, keratin, EMA, and nuclear MDM2 generally negative; Ki-67 low/absent.",
    ],
    molecular: [
      "Rearrangements involving 11q, particularly 11q13; MDM2/CDK4/HMGA2 amplification is not typical.",
    ],
    differential: [
      [
        "ALT/WDLPS with hibernoma-like areas",
        "Atypical hyperchromatic stromal cells and MDM2 amplification versus bland UCP1-positive brown fat.",
      ],
      [
        "Lipoma",
        "Lacks abundant multivacuolated brown-fat cells and UCP1 expression.",
      ],
    ],
    pitfalls: [
      "Can be intensely FDG-avid and hypervascular; imaging avidity alone does not indicate malignancy.",
    ],
  },
  {
    name: "Atypical spindle cell lipomatous tumor (ASLT) / atypical pleomorphic lipomatous tumor (APLT)",
    group: "Intermediate",
    behavior:
      "Low local recurrence if incompletely excised; no metastases in source series",
    site: "More often subcutaneous than deep; ASLT more often distal extremities.",
    morphology: [
      "Lobulated/nodular, often poorly circumscribed lesion, sometimes infiltrative.",
      "ASLT: variable mature adipocytes, atypical spindle cells, lipoblasts, and collagenous/myxoid matrix; ropey collagen and mast cells may occur.",
      "Essential ASLT feature: at least focal mild-to-moderate spindle-cell atypia with enlarged hyperchromatic irregular nuclei; adipocytes often show marked size variation and focal binucleation/multinucleation.",
      "APLT: more extensive bizarre pleomorphic/hyperchromatic cells, often floret-like giant cells and/or pleomorphic lipoblasts; typically more cellular than pleomorphic lipoma.",
      "Mitoses generally <1/mm²; necrosis absent.",
    ],
    ihc: [
      "CD34, S100, and desmin variably expressed.",
      "RB1 nuclear loss in approximately 50–70%; focal MDM2/CDK4 staining can occur but is not amplification.",
    ],
    molecular: [
      "MDM2/CDK4 amplification absent; 13q14/RB1 loss common; TP53 alterations more frequent in APLT in cited studies.",
    ],
    differential: [
      [
        "Spindle/pleomorphic lipoma",
        "Bland spindle cells and classic posterior neck/back/shoulder site; ASLT requires genuine atypical spindle nuclei; APLT has broader pleomorphism and higher cellularity.",
      ],
      [
        "ALT/WDLPS or DDLPS",
        "MDM2-amplified; ASLT/APLT lack MDM2 amplification and are often superficial.",
      ],
      [
        "Myxoid liposarcoma",
        "Uniform primitive cells and chicken-wire vessels with DDIT3 alteration; ASLT/APLT show atypical spindle/pleomorphic cells.",
      ],
    ],
    pitfalls: [
      "Adipocyte size variation alone is insufficient; atypical spindle-cell nuclei are essential for ASLT.",
      "Floret cells alone do not distinguish APLT from pleomorphic lipoma; assess cellularity and extent of pleomorphism.",
      "Rare sarcomatous transformation is reported; significance remains uncertain.",
    ],
  },
  {
    name: "ALT / well-differentiated liposarcoma (WDLPS)",
    group: "Intermediate",
    behavior:
      "Locally aggressive; no metastatic potential unless dedifferentiation occurs",
    site: "ALT: deep proximal extremity/trunk. WDLPS: retroperitoneum, spermatic cord, mediastinum.",
    morphology: [
      "At least focal nuclear atypia in adipocytes and/or stromal cells.",
      "Lipoma-like: mature adipocytes with variable fibrous septa and scattered hyperchromatic atypical stromal cells, often in septa or vessel walls.",
      "Sclerosing: low-cellularity, extensive fibrillary collagen with scattered bizarre hyperchromatic stromal cells; lipoblasts may be present and fat may be inconspicuous.",
      "Inflammatory: chronic lymphoplasmacytic infiltrate, sometimes follicles, may obscure atypical cells and mimic lymphoma.",
      "Lipoblasts are not required; patterns may coexist.",
    ],
    ihc: [
      "MDM2 and/or CDK4 typically strong diffuse nuclear expression; staining may be difficult in lipoma-like lesions.",
      "MDM2-positive histiocytes in fat necrosis are a pitfall.",
    ],
    molecular: [
      "MDM2 amplification, often with CDK4 co-amplification, is defining; MDM2 FISH is the preferred confirmatory test in difficult cases.",
      "Consider testing for recurrent lesions, deep extremity lesions >10 cm, patients >50 years, equivocal atypia, and retroperitoneal/pelvic/abdominal fatty tumors.",
    ],
    differential: [
      [
        "Lipoma",
        "No atypical stromal/adipocytic nuclei and no MDM2 amplification.",
      ],
      [
        "ASLT/APLT",
        "Lack MDM2 amplification; often superficial with atypical spindle cells/lipoblasts.",
      ],
      [
        "Cellular WDLPS vs bland DDLPS",
        "Source: 0–4 mitoses/10 HPF favors cellular WDLPS; ≥5 favors DDLPS. HPF diameter was not consistently reported.",
      ],
      [
        "Perinephric myxoid pseudotumor of fat",
        "Mature fat, myxoid degeneration, bland spindle/stellate cells and lymphoplasmacytic inflammation; lacks atypical hyperchromatic stromal cells and MDM2 amplification.",
      ],
    ],
    pitfalls: [
      "Use ALT for surgically amenable sites; WDLPS for retroperitoneum, spermatic cord, and mediastinum.",
      "Do not use 'atypical lipoma'.",
      "Atypia may be focal; sample thick septa and solid areas.",
    ],
  },
  {
    name: "Dedifferentiated liposarcoma (DDLPS)",
    group: "Malignant",
    behavior: "Malignant; local recurrence and metastatic potential",
    site: "Most often retroperitoneum; also spermatic cord, abdomen/pelvis, mediastinum, and less often extremities.",
    morphology: [
      "Non-lipogenic malignant mesenchymal component arising with ALT/WDLPS or in a characteristic site with MDM2 amplification.",
      "Transition from WDLPS is usually abrupt but may be gradual; WDLPS component may be unsampled or not obvious.",
      "High-grade areas commonly resemble UPS/pleomorphic spindle-cell sarcoma; may mimic myxofibrosarcoma, SFT, or inflammatory myofibroblastic tumor.",
      "Multiple patterns, including bland and high-grade areas, are common; heterologous myogenic or osteo-/chondrosarcomatous differentiation occurs in a minority.",
      "Bland DDLPS may be difficult to distinguish from non-lipogenic cellular WDLPS. Source: 0–4 mitoses/10 HPF favors cellular WDLPS; ≥5 favors DDLPS. 'Low-grade DDLPS' is no longer recommended.",
    ],
    ihc: [
      "MDM2 and/or CDK4 typically strong diffuse nuclear expression.",
      "STAT6 can be expressed in a subset due to STAT6 amplification and may mimic SFT.",
    ],
    molecular: [
      "MDM2 amplification is central; FISH is commonly used.",
      "High-amplitude copy-number gains involving MDM2 and other 12q13–q15 oncogenes support diagnosis.",
    ],
    differential: [
      [
        "UPS / pleomorphic sarcoma",
        "At characteristic sites, search for WDLPS and test MDM2 amplification.",
      ],
      [
        "Pleomorphic liposarcoma",
        "Has pleomorphic lipoblasts but typically lacks MDM2/CDK4 amplification; DDLPS with homologous lipoblastic differentiation is amplified.",
      ],
      ["ASLT/APLT", "Usually superficial and MDM2 non-amplified."],
      [
        "Solitary fibrous tumor",
        "STAT6 alone is not specific in this setting; integrate morphology and MDM2 amplification.",
      ],
    ],
    pitfalls: [
      "Sample both fatty and solid components; core biopsy may sample only dedifferentiated area.",
      "Do not use 'low-grade DDLPS'.",
      "Retroperitoneal disease can recur late.",
    ],
  },
  {
    name: "Myxoid liposarcoma (MLPS)",
    group: "Malignant",
    behavior:
      "Malignant; >5% round-cell component defines higher-grade disease in supplied source",
    site: "Deep soft tissue of extremities, especially thigh; primary retroperitoneal MLPS is exceedingly rare.",
    morphology: [
      "Lobulated tumor with abundant myxoid stroma, uniform small spindle cells, variable lipoblasts, and delicate arborizing chicken-wire capillaries.",
      "Tumor cells often cluster around capillaries; mucin pools may create microcystic/pulmonary-edema-like areas.",
      "Classic areas are relatively uniform, without substantial atypia or mitotic activity; lipoblasts may be sparse or absent.",
      "Higher-grade MLPS: round-cell areas >5% of tumor, usually with diminished myxoid matrix and increased cellularity; record percentage.",
      "Pure higher-grade areas may mimic other round-cell sarcomas.",
    ],
    ihc: [
      "Strong diffuse nuclear DDIT3 IHC is highly sensitive/specific in source-cited studies and can be an alternative to molecular testing.",
    ],
    molecular: [
      "Most cases harbor FUS::DDIT3; a small subset has EWSR1::DDIT3.",
      "DDIT3 break-apart FISH, RT-PCR, or sequencing can confirm; DDIT3 is more specific than FUS/EWSR1 alone.",
    ],
    differential: [
      [
        "Lipoblastoma",
        "Infant/young child, maturation spectrum and PLAG1 alteration in subset; MLPS is usually deep extremity tumor with DDIT3 fusion.",
      ],
      [
        "Lipoblastoma-like tumor",
        "Bland spindle cells/mature adipocytes; lacks DDIT3 rearrangement.",
      ],
      [
        "Myxofibrosarcoma",
        "Pleomorphic spindle cells/curvilinear vessels versus uniform MLPS cells/chicken-wire network.",
      ],
      [
        "Other round-cell sarcomas",
        "Higher-grade MLPS may be morphologically indistinguishable; demonstrate DDIT3 alteration or diffuse DDIT3 protein.",
      ],
    ],
    pitfalls: [
      "Modest hypercellularity without round-cell morphology is not sufficient for higher-grade MLPS.",
      "Adequate sampling is essential; round-cell percentage is prognostically important.",
      "Metastases may involve soft tissue and bone/spine rather than predominantly lung.",
    ],
  },
  {
    name: "Pleomorphic liposarcoma",
    group: "Malignant",
    behavior:
      "High-grade malignant; substantial local recurrence and metastatic risk",
    site: "Usually deep extremity soft tissue, especially lower limb; also trunk/head-neck; minority subcutaneous.",
    morphology: [
      "High-grade sarcoma with variable numbers of unequivocal pleomorphic lipoblasts; number varies within tumor, so extensive sampling is essential.",
      "Non-lipogenic component often resembles UPS, with markedly pleomorphic spindle cells, giant cells, brisk/atypical mitoses, and frequent necrosis.",
      "Myxofibrosarcoma-like areas may occur; approximately one quarter show epithelioid pattern.",
      "Epithelioid areas may mimic poorly differentiated carcinoma, renal clear cell carcinoma, adrenocortical carcinoma, or melanoma.",
    ],
    ihc: [
      "MDM2/CDK4 typically negative, separating from DDLPS with lipoblastic differentiation.",
      "Epithelioid cases may express keratins and Melan-A; use differential-directed panel.",
    ],
    molecular: [
      "No pathognomonic recurrent rearrangement; absence of MDM2 amplification supports distinction from DDLPS.",
    ],
    differential: [
      [
        "DDLPS with homologous lipoblastic differentiation",
        "DDLPS is MDM2-amplified; pleomorphic liposarcoma typically is not.",
      ],
      [
        "UPS with entrapped fat",
        "Entrapped adipocytes are not pleomorphic lipoblasts; identify tumor-cell lipid vacuoles indenting atypical nuclei.",
      ],
      [
        "Myxofibrosarcoma",
        "Pleomorphic liposarcoma requires pleomorphic lipoblasts.",
      ],
      [
        "Carcinoma/melanoma in epithelioid cases",
        "Use keratin, melanocytic and organ-specific markers, and demonstrate pleomorphic lipoblasts.",
      ],
    ],
    pitfalls: [
      "Pleomorphic lipoblasts can be focal; generous sampling is mandatory.",
      "Do not infer DDLPS from pleomorphic lipoblasts alone; MDM2 status and site matter.",
    ],
  },
  {
    name: "Myxoid pleomorphic liposarcoma",
    group: "Malignant",
    behavior: "Extremely aggressive malignant tumor",
    site: "Strong predilection for serosal-lined cavities, especially mediastinum; also abdominopelvic cavity, head/neck, chest wall, trunk, and extremities.",
    morphology: [
      "Usually children/young adults; often large deep mass in a serosal-lined cavity.",
      "Extensively myxoid, relatively hypocellular zones resembling MLPS juxtaposed with hypercellular pleomorphic-liposarcoma-like areas.",
      "Myxoid zones may show pseudocysts, elaborate capillaries, and small lipoblasts, but greater spindling, nuclear irregularity, and hyperchromasia than true MLPS.",
      "Hypercellular areas show severe atypia, bizarre pleomorphic lipoblasts, increased mitoses, and necrosis.",
    ],
    ihc: ["IHC does not play a defining diagnostic role."],
    molecular: [
      "Widespread loss of heterozygosity with near-haploid or pseudohyperdiploid profiles is characteristic in reported cases.",
      "Absence of FUS/EWSR1::DDIT3 helps exclude conventional MLPS; absence of MDM2 amplification helps exclude myxoid WDLPS/DDLPS.",
    ],
    differential: [
      [
        "Myxoid liposarcoma",
        "Conventional MLPS has uniform primitive cells/chicken-wire capillaries/DDIT3 fusion; myxoid pleomorphic tumor has greater atypia and pleomorphic lipoblast-rich high-grade zones.",
      ],
      [
        "Pleomorphic liposarcoma with myxoid change",
        "Myxoid pleomorphic tumor more often affects younger patients and serosal cavities and has juxtaposed MLPS-like and pleomorphic areas.",
      ],
      [
        "DDLPS with myxoid morphology",
        "DDLPS is MDM2-amplified; myxoid pleomorphic liposarcoma lacks MDM2 amplification and shows widespread LOH.",
      ],
    ],
    pitfalls: [
      "Do not diagnose conventional MLPS from myxoid matrix and delicate vessels alone.",
      "Source describes aggressive behavior; adequate sampling and margin assessment are critical.",
    ],
  },
];

const cats = ["All", "Benign", "Intermediate", "Malignant"];
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

export default function AdipocyticTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "ALT / well-differentiated liposarcoma (WDLPS)",
    "Myxoid liposarcoma (MLPS)",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.site,
            x.behavior,
            ...x.morphology,
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
            PathologyGPS / Soft Tissue Tumors / Adipocytic Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Adipocytic Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference focused on essential
                criteria, ancillary testing, and practical differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Interpret atypia, architecture, site, and molecular findings
                together.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Adipocyte size variation alone does not establish ALT/WDLPS.
                MDM2 amplification is decisive in the appropriate setting.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: morphology to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Establish setting",
                "Age, site, depth, size, imaging, circumscribed versus infiltrative/diffuse.",
              ],
              [
                "Identify dominant pattern",
                "Mature fat; maturation spectrum; spindle/myxoid; brown fat; vascular; smooth muscle; or pleomorphic sarcoma.",
              ],
              [
                "Search for atypia",
                "Inspect fibrous septa, vessel walls, and solid areas for hyperchromatic stromal nuclei, lipoblasts, mitoses, and necrosis.",
              ],
              [
                "Order targeted tests",
                "MDM2 for ALT/WDLPS or DDLPS; DDIT3 for MLPS; PLAG1 in selected lipoblastoma; RB1 in selected spindle-cell lesions.",
              ],
              [
                "Integrate whole lesion",
                "Correlate with imaging and sampling; a core may miss WDLPS, dedifferentiation, or focal pleomorphic lipoblasts.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Behavior categories are not histologic grade">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Benign:</b> usually cured by local excision; recurrence is
                uncommon or related to incomplete removal.
              </p>
              <p>
                <b>Intermediate, locally aggressive:</b> may recur/infiltrate
                locally but has little or no metastatic potential. ALT/WDLPS at
                resectable sites is locally aggressive.
              </p>
              <p>
                <b>Intermediate, rarely metastasizing:</b> locally aggressive
                with a small metastatic risk; the supplied adipocytic excerpt
                does not assign a principal example.
              </p>
              <p>
                <b>Malignant:</b> destructive growth with metastatic potential;
                risk varies by histotype and grade.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield molecular tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["ALT/WDLPS; DDLPS", "MDM2 amplification (FISH)"],
                    [
                      "Myxoid liposarcoma",
                      "DDIT3 rearrangement / diffuse DDIT3 IHC",
                    ],
                    [
                      "Lipoblastoma",
                      "PLAG1 rearrangement (supportive; incomplete sensitivity)",
                    ],
                    [
                      "Spindle cell / pleomorphic lipoma",
                      "RB1 loss (supportive)",
                    ],
                    ["Hibernoma", "UCP1 IHC"],
                    [
                      "Chondroid lipoma",
                      "ZFTA::MRTFB or ZFTA::NCOA1 in selected cases",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 text-slate-600">{r[1]}</td>
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
                Search by entity, morphology, site, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. MDM2, DDIT3, RB1, lipoblast..."
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
            {filtered.map((p, i) => {
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
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}　
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Essential morphology / criteria
                        </h4>
                        <Bullets items={p.morphology} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
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
                          Diagnostic pitfalls
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
        <Panel title="High-stakes comparison: lipoma, ALT/WDLPS, ASLT/APLT, and DDLPS">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Lipoma</th>
                  <th className="py-2 pr-3">ALT/WDLPS</th>
                  <th className="py-2 pr-3">ASLT/APLT</th>
                  <th className="py-2">DDLPS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Atypical nuclei</td>
                  <td className="py-2 pr-3">Absent</td>
                  <td className="py-2 pr-3">Present, often focal</td>
                  <td className="py-2 pr-3">
                    Atypical spindle/pleomorphic cells
                  </td>
                  <td className="py-2">
                    Variable; malignant non-lipogenic component
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    MDM2 amplification
                  </td>
                  <td className="py-2 pr-3">Absent</td>
                  <td className="py-2 pr-3">Present</td>
                  <td className="py-2 pr-3">Absent</td>
                  <td className="py-2">Present</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Typical site</td>
                  <td className="py-2 pr-3">Often superficial</td>
                  <td className="py-2 pr-3">
                    Deep extremity / retroperitoneum
                  </td>
                  <td className="py-2 pr-3">Often subcutaneous</td>
                  <td className="py-2">Predominantly retroperitoneal</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Metastatic potential
                  </td>
                  <td className="py-2 pr-3">None</td>
                  <td className="py-2 pr-3">Only after dedifferentiation</td>
                  <td className="py-2 pr-3">
                    Not established in source series
                  </td>
                  <td className="py-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Correlate with imaging: exact site, depth, size, and fatty/nonfatty solid components.",
              "Sample radiologically enhancing solid nodules, thick septa, and heterogeneous areas.",
              "For suspected ALT/WDLPS or DDLPS, target atypical septa/solid areas and consider MDM2 FISH when morphology is equivocal or sampling is limited.",
              "In core biopsies, state limitations: a small sample may miss a WDLPS component, dedifferentiation, or focal pleomorphic lipoblasts.",
              "For MLPS, quantify round-cell component; >5% defines higher-grade disease in the supplied source.",
              "Report histotype, grade where applicable, necrosis, mitotic activity per mm² when feasible, and margins.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO source excerpt. Ancillary tests described as supportive or
          selectively useful are not stand-alone criteria. The page does not
          replace radiologic correlation, adequate sampling, or expert
          soft-tissue pathology review.
        </footer>
      </div>
    </main>
  );
}
