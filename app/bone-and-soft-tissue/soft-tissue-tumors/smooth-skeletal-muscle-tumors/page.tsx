"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  family: string;
  behavior: string;
  site: string;
  definition: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
  prognosis: string[];
  coding?: string;
};

const entities: Entity[] = [
  {
    name: "Leiomyoma",
    family: "Smooth muscle tumors",
    behavior: "Benign",
    site: "Somatic type: deep subcutis or skeletal muscle of the extremities. Gynecological type: pelvis, abdomen, retroperitoneum, abdominal wall, omentum, mesentery, peritoneal surface, and round ligament.",
    definition:
      "Benign smooth muscle tumor of deep somatic soft tissue, including retroperitoneal and abdominal sites.",
    coding: "ICD-O 8890/0",
    clinical: [
      "Somatic tumors occur mainly in middle-aged adults without sex predilection; gynecological-type tumors occur predominantly in women, often around perimenopause.",
      "Somatic lesions are usually solitary and may calcify. Gynecological-type retroperitoneal/abdominal lesions may be multiple and are associated in some patients with concurrent uterine leiomyomas or prior hysterectomy for leiomyomas.",
      "Local recurrence is not expected for somatic leiomyoma; recurrence is reported in fewer than 10% of gynecological-type retroperitoneal/abdominal lesions.",
    ],
    criteria: [
      "Essential: intersecting fascicles and bundles of benign, mature smooth muscle with essentially no mitotic activity.",
      "Somatic type: essentially no atypia, no necrosis, and less than 1 mitosis/7.95 mm² (equivalent to <1/50 HPF using a 0.45-mm field).",
      "Gynecological type: up to 10 mitoses/7.95 mm² may be acceptable only in the absence of necrosis and significant cytological atypia; focal degenerative atypia requires careful search for mitoses and additional sampling.",
    ],
    morphology: [
      "Somatic tumors are circumscribed, tan-grey to white, often rubbery and whorled; stromal hyalinization and calcification are frequent. Occasional mucoid-cystic degeneration occurs.",
      "Somatic-type cells closely resemble normal smooth muscle: abundant eosinophilic cytoplasm and uniform blunt-ended, cigar-shaped nuclei in orderly intersecting and perpendicular fascicles.",
      "Gynecological-type tumors resemble uterine leiomyoma and are often paucicellular, with richer vascular stroma and sometimes greater cellularity. Macrotrabecular/microtrabecular patterns, fibrosis, hyalinization, calcification, myxoid/cystic change, focal epithelioid or clear-cell change, nuclear palisading, metaplastic bone, and fatty differentiation may occur.",
      "Deep leiomyoma should not show tumor necrosis. Focal degenerative nuclear atypia must trigger additional sampling and a deliberate search for mitotic activity.",
    ],
    ihc: [
      "Both types: usually strong, diffuse SMA, desmin, and h-caldesmon; S100 is negative.",
      "Gynecological type: ER, PR, and WT1 are almost always expressed.",
      "Somatic soft-tissue type: ER and PR are negative. Interpret hormone-receptor status in the context of site and morphology.",
    ],
    molecular: [
      "Routine diagnostic molecular testing is not clinically relevant.",
      "Gynecological-type retroperitoneal/abdominal leiomyomas may share uterine leiomyoma alterations: HMGA2 or PLAG1 rearrangements, MED12 exon 2 mutations, and rare KAT6B::KANSL1 or EWSR1::PBX3 fusions.",
    ],
    differential: [
      [
        "Leiomyosarcoma",
        "Any mitotic activity or atypia in a somatic smooth-muscle tumor warrants concern; assess the entire lesion for atypia, mitoses, necrosis, and infiltrative growth. Gynecological-type lesions have a different accepted mitotic range, but necrosis or significant atypia is not acceptable.",
      ],
      [
        "EBV-associated smooth muscle tumor",
        "Consider in immunosuppressed patients, unusual/multifocal sites, or tumors with primitive round-cell areas; EBER in situ hybridization is required.",
      ],
      [
        "GIST or other spindle-cell neoplasm",
        "Use site, morphology, and a context-directed panel; smooth-muscle markers should be interpreted as a panel rather than individually.",
      ],
    ],
    pitfalls: [
      "Do not apply uterine/gynecological-type mitotic thresholds to somatic deep soft-tissue leiomyoma.",
      "Focal degenerative atypia in gynecological-type lesions is not automatically malignant, but requires adequate sampling.",
      "Recurrence of gynecological-type retroperitoneal leiomyoma has been reported without subsequent progression or metastasis.",
    ],
    prognosis: [
      "Benign regardless of type; complete excision is curative. There is no metastatic risk. Rare local recurrences occur in gynecological-type retroperitoneal/abdominal lesions.",
    ],
  },
  {
    name: "EBV-Associated Smooth Muscle Tumor",
    family: "Smooth muscle tumors",
    behavior: "Uncertain behavior; clinical course is immune-status dependent",
    site: "Any site. HIV-associated tumors favor intra- or extra-axial CNS; post-transplant tumors most often involve liver, followed by lung, gastrointestinal tract, and spleen. Head/neck and lymph nodes may also be involved.",
    definition:
      "Smooth muscle neoplasm associated with EBV infection, usually in the setting of T-lymphocyte immunosuppression.",
    coding: "ICD-O 8897/1",
    clinical: [
      "Strongly associated with HIV/AIDS, solid-organ transplantation, and less commonly congenital/primary immunodeficiency (including GATA2 or CARMIL2 deficiency). Rare cases occur in immunocompetent or iatrogenically immunosuppressed patients.",
      "May arise months to years after onset of immunodeficiency or transplantation. Presentation depends on site and may include mass effect, neurological deficits, GI obstruction/bleeding/perforation, or endobronchial symptoms.",
      "Multicentric distribution is not uncommon. Multiple lesions should not automatically be interpreted as metastases.",
    ],
    criteria: [
      "Essential: clinical history of immunosuppression; neoplasm with smooth-muscle differentiation; EBER-positive tumor cells by in situ hybridization.",
      "EBER in situ hybridization is necessary for diagnosis; smooth-muscle immunophenotype alone is insufficient.",
    ],
    morphology: [
      "Intersecting fascicles of spindle cells with abundant eosinophilic cytoplasm and elongated nuclei often resemble leiomyoma. A second population of primitive-appearing round/oval smooth-muscle cells is common and may be admixed.",
      "Patterns may be epithelioid, tightly packed, or hemangiopericytoma-like. Atypia is usually mild to moderate but may be marked, particularly in HIV-positive patients; mitotic activity is generally low but hotspots may exceed 10/2 mm².",
      "Tumor infiltration is common, usually sparse but occasionally more pronounced. Intratumoral lymphocytes are mainly CD8-positive and EBER-negative; the neoplastic smooth-muscle cells are EBER-positive.",
    ],
    ihc: [
      "Neoplastic cells are consistently and diffusely positive for SMA and h-caldesmon; desmin is variable and often focal.",
      "EBER in situ hybridization is consistently positive in tumor cells and is essential. Do not mistake EBER-negative intratumoral lymphocytes for the neoplastic population.",
    ],
    molecular: [
      "EBV demonstration, especially EBER in situ hybridization, is the diagnostic molecular pathology test.",
      "Multicentric lesions may represent independent EBV infection events rather than metastases from one clone. Post-transplant tumors may be donor- or recipient-derived.",
      "MYC overexpression and AKT/mTOR pathway activation have been implicated; these are pathogenetic observations, not routine diagnostic requirements.",
    ],
    differential: [
      [
        "Leiomyoma / leiomyosarcoma",
        "Smooth-muscle morphology overlaps. Clinical immunosuppression and EBER positivity in tumor cells establish EBV-SMT.",
      ],
      [
        "Metastatic smooth-muscle tumor",
        "Multifocality is common and may reflect independent infection events; do not assume dissemination of one clone.",
      ],
      [
        "Other spindle-cell neoplasm",
        "Demonstrate smooth-muscle differentiation and localize EBER signal to neoplastic cells.",
      ],
    ],
    pitfalls: [
      "Do not use the discouraged labels AIDS-associated EBV-positive SMT, post-transplant EBV-positive SMT, EBV-associated leiomyoma, or EBV-associated leiomyosarcoma.",
      "Histological grade is not a reliable predictor of behavior or outcome.",
      "EBER must be positive in tumor cells; intratumoral CD8-positive lymphocytes are generally EBER-negative.",
    ],
    prognosis: [
      "Outcome depends mainly on the patient's immune status; histological grading is not a reliable prognostic indicator.",
      "Overall prognosis may be more favorable than conventional leiomyosarcoma, but multifocal organ involvement and intracranial disease correlate with worse survival.",
      "Surgery is used for symptomatic or critical-site lesions. Immune restoration (antiretroviral optimization or reduction of immunosuppression when feasible) is central; mTOR inhibitors have shown reported benefit. Chemotherapy and radiotherapy are generally considered ineffective.",
    ],
  },
  {
    name: "Leiomyosarcoma",
    family: "Smooth muscle tumors",
    behavior: "Malignant",
    site: "Deep soft tissue of extremities and retroperitoneal/intra-abdominal cavities, frequently with vascular origin (especially IVC and tributaries). Visceral LMS arises in smooth-muscle-rich organs and has distinct biology.",
    definition:
      "Malignant mesenchymal neoplasm with smooth-muscle differentiation.",
    coding: "ICD-O 8890/3",
    clinical: [
      "Usually presents with a mass effect and/or pain. IVC tumors may cause Budd–Chiari syndrome, leg edema, or deep-vein thrombosis.",
      "Most cases occur in the fifth to seventh decades. Retroperitoneal tumors are more common in women; extremity tumors show a slight male predominance.",
      "Most are sporadic. Predisposition settings include Li–Fraumeni syndrome, retinoblastoma, and genomic-instability syndromes; radiation and cyclophosphamide are reported risk factors.",
    ],
    criteria: [
      "Essential: neoplasm with morphological and/or immunohistochemical evidence of smooth-muscle differentiation, with variable nuclear pleomorphism and mitotic activity.",
      "Recognize intersecting fascicles of spindle cells with eosinophilic/fibrillary cytoplasm, blunt-ended nuclei, variable pleomorphism, and usually conspicuous mitotic activity; atypical mitoses and tumor necrosis support malignancy.",
      "Any mitoses in an adult smooth-muscle tumor warrant careful evaluation for malignancy in the supplied source.",
    ],
    morphology: [
      "Usually intersecting fascicles of spindle cells; focal storiform or microcystic patterns and rare epithelioid morphology occur. Cells have eosinophilic, sometimes fibrillary cytoplasm, elongated ovoid nuclei with blunt ends, small nucleoli, and variable pleomorphism.",
      "Mitotic activity is usually conspicuous and atypical mitoses may be present. Necrosis, hemorrhage, cystic degeneration, lymphovascular invasion, and occasional chronic inflammation may occur.",
      "Poorly differentiated/dedifferentiated areas may resemble undifferentiated pleomorphic sarcoma and may be spindled, polygonal, epithelioid, or rhabdoid with bizarre multinucleated cells and brisk mitoses. A typical LMS component or prior history is needed to support this interpretation.",
      "Visceral LMS (uterus, GI tract, dermis) should be considered separately because of distinct biology.",
    ],
    ihc: [
      "Typically positive for desmin, SMA, smooth-muscle myosin, and h-caldesmon. h-Caldesmon is the most specific of these, but no single marker is entirely lineage-specific; concordant expression of multiple markers is more persuasive.",
      "Expression may decrease or be lost in poorly differentiated/dedifferentiated areas.",
      "Focal or weak CD34, KIT, DOG1, keratin, or EMA can occur and should not override morphology.",
    ],
    molecular: [
      "No consistent disease-defining genetic alteration; routine diagnostic molecular testing is not clinically relevant.",
      "Complex genomes commonly show widespread copy-number gains/losses, chromothripsis, and whole-genome duplication. TP53 and RB1 are frequently biallelically inactivated; PTEN, CDKN2A, ATRX, ATM, BRCA2, MYOCD, and other pathway alterations are reported.",
      "Gene-expression studies describe molecular groups with smooth-muscle differentiation enrichment, less differentiated/immunogenic features, and visceral/uterine enrichment; these are not routine diagnostic classifiers.",
    ],
    differential: [
      [
        "Leiomyoma",
        "Compare mitotic activity, cytological atypia, tumor necrosis, and infiltrative growth; site-specific criteria matter, particularly for gynecological-type leiomyoma.",
      ],
      [
        "EBV-associated smooth muscle tumor",
        "Look for immunosuppression, primitive round-cell component, and EBER positivity in tumor cells.",
      ],
      [
        "Undifferentiated pleomorphic sarcoma",
        "In poorly differentiated tumors, require a recognizable LMS component or prior LMS history; smooth-muscle markers may be lost in dedifferentiated areas.",
      ],
      [
        "GIST / other spindle-cell tumors",
        "Focal/weak KIT, DOG1, CD34, keratin, or EMA can occur in LMS; interpret the complete panel and morphology.",
      ],
    ],
    pitfalls: [
      "Do not diagnose LMS from SMA positivity alone; use multiple smooth-muscle markers and morphology.",
      "Dedifferentiated areas may lose smooth-muscle markers, so sample and search for a conventional component.",
      "Visceral LMS is biologically distinct from primary soft-tissue LMS and should not be casually pooled with it.",
      "Prognostic variables include age, retroperitoneal location, size (>4–5 cm), bone/neurovascular involvement, prior disruptive surgery, mitotic activity, FNCLCC grade, and intratumoral vascular invasion.",
    ],
    prognosis: [
      "Aggressive tumor with significant risk of local recurrence, metastasis, and disease-related mortality.",
      "Metastatic risk is associated with older age, retroperitoneal location, larger size, bone/neurovascular involvement, mitotic activity, FNCLCC grade, and intratumoral vascular invasion.",
      "Disease-specific survival is associated with age, metastases at presentation, AJCC stage, size >50 mm, FNCLCC grade, and RB1/ATRX alterations.",
    ],
  },
  {
    name: "Rhabdomyoma (Adult, Fetal, and Genital)",
    family: "Skeletal muscle tumors",
    behavior: "Benign",
    site: "Adult and fetal types predominantly head and neck (parapharyngeal space, salivary glands, larynx, oral cavity); other sites include bladder, mediastinum, abdomen/pelvis, extremities, vulva, and scrotum. Genital type arises in genital tract, especially vagina, or paratesticular region.",
    definition:
      "Benign extracardiac mesenchymal tumor with skeletal-muscle differentiation.",
    coding: "ICD-O 8903/0 fetal; 8904/0 adult; 8905/0 genital",
    clinical: [
      "Usually a slow-growing painless mass, although rapid growth and local compressive symptoms may occur. Adult rhabdomyoma may be unifocal or multifocal; fetal tumors are usually solitary.",
      "Adult type: median age about 60 years, male predominance. Fetal type occurs at all ages with peaks below 3 years and around 60 years; about one quarter are congenital.",
      "Multicentric fetal rhabdomyoma is associated with Gorlin syndrome (PTCH1); cases have also been reported with Birt–Hogg–Dubé syndrome (FLCN).",
    ],
    criteria: [
      "Essential: well-circumscribed mass without invasion, composed of cells showing skeletal-muscle differentiation.",
      "Strong desmin, MYOD1, and myogenin expression supports skeletal-muscle lineage; MYOD1 and myogenin label primitive spindle cells.",
    ],
    morphology: [
      "Unencapsulated lobular mass.",
      "Adult type: large polygonal cells with abundant granular eosinophilic cytoplasm, small round vesicular nuclei, and distinct borders. Spider-cell vacuoles, rod-like inclusions, or cross-striations may occur; mitoses and clear-cell change are rare.",
      "Classic fetal type: irregular bundles of immature skeletal-muscle fibers in myxoid stroma; fetal myotube-like spindle cells have central oblong nuclei and eosinophilic cytoplasm. Intermediate/juvenile lesions are more cellular with less myxoid stroma and differentiated rhabdomyoblasts. Cellular fetal type is more uniform and may show mitoses (up to 5/50 mm²), but lacks atypia, infiltrative margins, atypical mitoses, and necrosis.",
      "Female genital type: small polypoid lesions with loose fibrous tissue and differentiated spindle, polygonal, or elongated rhabdomyoblasts; cross-striations may be seen. Vaginal lesions lack a cambium layer. Male genital lesions resemble adult or fetal type and may be markedly sclerotic.",
    ],
    ihc: [
      "Desmin, MYOD1, and myogenin are positive; desmin is generally strong and diffuse.",
      "Focal SMA expression may occur.",
    ],
    molecular: [
      "Routine molecular testing is not clinically relevant.",
      "Fetal rhabdomyoma may involve Hedgehog pathway activation; PTCH1 loss-of-function underlies Gorlin syndrome-associated cases. A few adult tumors also show evidence of Hedgehog pathway activation.",
    ],
    differential: [
      [
        "Embryonal rhabdomyosarcoma",
        "Rhabdomyoma is circumscribed and lacks invasion; fetal rhabdomyoma may be cellular and mitotically active but lacks atypical mitoses, necrosis, and infiltrative margins.",
      ],
      [
        "Vaginal embryonal rhabdomyosarcoma",
        "Genital rhabdomyoma is polypoid but lacks the subepithelial cambium layer characteristic of botryoid ERMS.",
      ],
      [
        "Parathyroid adenoma",
        "Rare head-and-neck rhabdomyomas may mimic parathyroid lesions; skeletal-muscle markers and morphology clarify lineage.",
      ],
    ],
    pitfalls: [
      "Do not use the discouraged term rhabdomyomatous hamartoma for these extracardiac neoplasms.",
      "Mitotic activity in cellular fetal rhabdomyoma does not by itself establish malignancy.",
      "Genital rhabdomyoma may show some cytological atypia; correlate with circumscription, lack of invasion, and absence of mitoses.",
    ],
    prognosis: [
      "Benign. Local growth may cause site-related symptoms; multicentric fetal lesions may be associated with syndromic disease.",
    ],
  },
  {
    name: "Inflammatory Rhabdomyoblastic Tumor",
    family: "Skeletal muscle tumors",
    behavior: "Usually indolent; malignant progression is recognized",
    site: "Predominantly deep soft tissue of extremities and trunk; may occur at other soft-tissue sites.",
    definition:
      "A skeletal-muscle-lineage neoplasm with prominent inflammatory infiltrate and distinctive rhabdomyoblastic tumor cells.",
    coding:
      "WHO source lists uncertain-behavior and malignant-progression codes as xxx/1 and xxx/3",
    clinical: [
      "Typically presents as a slowly growing mass. The supplied source describes a spectrum from tumors with indolent behavior to rare tumors with malignant progression.",
      "Clinical context and adequate sampling are important because the inflammatory background may obscure the neoplastic cells.",
    ],
    criteria: [
      "Recognize a neoplasm with skeletal-muscle differentiation in a conspicuous inflammatory background.",
      "Assess cytological atypia, mitotic activity, necrosis, infiltrative growth, and any evidence of progression; do not infer benignity from the inflammatory component alone.",
    ],
    morphology: [
      "Inflammatory background is a prominent component and may obscure the neoplastic population.",
      "Rhabdomyoblastic cells show variable size and shape, with eosinophilic cytoplasm and skeletal-muscle differentiation; the supplied source emphasizes the inflammatory and rhabdomyoblastic combination.",
      "Near-haploidization or widespread loss of heterozygosity may be demonstrable in selected cases.",
    ],
    ihc: [
      "Use skeletal-muscle lineage markers (desmin, MYOD1, and myogenin) to establish rhabdomyoblastic differentiation, interpreted with the morphology.",
      "The supplied source does not establish a single immunophenotypic marker as independently diagnostic.",
    ],
    molecular: [
      "Near-haploidization or widespread loss of heterozygosity is a desirable finding in selected cases, not a universal requirement.",
    ],
    differential: [
      [
        "Rhabdomyosarcoma",
        "Compare the inflammatory-rich architecture and clinical behavior with conventional ERMS, ARMS, and spindle/sclerosing RMS; establish skeletal-muscle lineage.",
      ],
      [
        "Inflammatory myofibroblastic tumor",
        "A dense inflammatory infiltrate can overlap; demonstrate skeletal-muscle differentiation rather than assuming myofibroblastic lineage.",
      ],
      [
        "Pleomorphic sarcoma with rhabdomyoblastic differentiation",
        "Correlate the extent and distribution of skeletal-muscle markers with the characteristic inflammatory-rhabdomyoblastic morphology.",
      ],
    ],
    pitfalls: [
      "Do not equate inflammatory background with reactive lesion.",
      "Distinguish the usual indolent course from the recognized malignant-progression category.",
      "Ancillary molecular findings are desirable in selected cases, not required in every case.",
    ],
    prognosis: [
      "The source recognizes uncertain-behavior and malignant-progression categories; behavior must be assessed in the context of morphology and clinical follow-up.",
    ],
  },
  {
    name: "Embryonal Rhabdomyosarcoma",
    family: "Skeletal muscle tumors",
    behavior: "Malignant; generally more favorable than other RMS subtypes",
    site: "Common in children and adolescents; can arise at many sites. Botryoid pattern occurs on mucosal surfaces; paratesticular tumors often show spindle-cell morphology.",
    definition:
      "Malignant skeletal-muscle neoplasm recapitulating embryonic skeletal-muscle differentiation.",
    coding: "ICD-O 8910/3",
    clinical: [
      "Occurs predominantly in children. ERMS is associated with RAS-pathway predisposition syndromes including Costello (HRAS), NF1, and Noonan; associations also include Beckwith–Wiedemann, DICER1-related predisposition, and Li–Fraumeni syndrome.",
      "About 7% of patients with RMS may harbor a germline cancer-predisposition variant; ERMS is more likely than ARMS to be associated with one.",
    ],
    criteria: [
      "Essential: primitive round and spindle-cell morphology with scattered differentiated rhabdomyoblasts; desmin positivity with heterogeneous nuclear myogenin and/or MYOD1; absence of FOXO1 fusion.",
      "Desirable: exclude MYOD1 p.(Leu122Arg) mutation and recurrent VGLL2/VGLL3- or NCOA2/NCOA3-related fusions, especially in spindle-cell lesions.",
    ],
    morphology: [
      "Primitive mesenchymal cells span stages of myogenesis: stellate cells with sparse amphophilic cytoplasm, differentiating tadpole/spider cells, and occasional terminal differentiation with cross-striations or myotubes.",
      "Typical tumors contain variably differentiated rhabdomyoblasts in loose myxoid mesenchyme with alternating dense and loose cellularity. Poorly differentiated dense areas may mimic ARMS.",
      "Botryoid ERMS is polypoid and has a subepithelial cambium layer of condensed tumor cells over hypocellular myxoid stroma with radially oriented capillaries.",
      "Spindle-cell morphology is particularly seen in paratesticular tumors. Cartilaginous differentiation may occur, especially in female genitourinary tumors and DICER1-altered cases.",
      "Anaplastic ERMS contains markedly enlarged atypical cells with hyperchromatic nuclei and often bizarre multipolar mitoses. In children, extensively pleomorphic tumors are classified as anaplastic ERMS rather than pleomorphic RMS.",
      "A small subset has neuroectodermal elements ranging from ganglion cells/neuropil to mature ganglioneuroma, ganglioneuroblastoma, or primitive neuroblastoma; this component may be focal and missed in biopsy.",
    ],
    ihc: [
      "Desmin is essentially always positive, with variable extent. Myogenin and MYOD1 are positive in essentially all cases, but the number of positive nuclei is variable and may be extensive in dense-cellular ERMS.",
      "SMA and muscle-specific actin are frequently positive. Aberrant keratin, S100, CD56, synaptophysin, or neurofilament expression may occur; do not infer neural differentiation without corresponding morphology and neural-marker profile.",
      "p53 IHC may help identify anaplastic cases for further TP53 evaluation. H3K27me3 loss occurs in more than half and does not distinguish ERMS from malignant Triton tumor.",
    ],
    molecular: [
      "Absence of PAX3::FOXO1 and PAX7::FOXO1 distinguishes ERMS from fusion-positive ARMS.",
      "RAS-pathway alterations (NRAS, KRAS, HRAS, NF1, FGFR4), PI3K-pathway alterations (PTEN, PIK3CA), and cell-cycle pathway alterations (FBXW7, CTNNB1) are reported. HRAS/KRAS variants are enriched in infants; NRAS variants in adolescents.",
      "11p15.5 loss of heterozygosity and IGF2/H19/CDKN1C imprinting-region dysregulation are common pathogenetic themes. TP53 alterations occur in a subset and may associate with anaplasia.",
      "Exclude MYOD1 p.(Leu122Arg) and defining fusions in spindle-cell tumors when indicated.",
    ],
    differential: [
      [
        "Alveolar RMS",
        "ARMS typically has strong homogeneous nuclear myogenin and a PAX3/7::FOXO1 or alternative defining fusion; ERMS has heterogeneous myogenin/MYOD1 and lacks FOXO1 fusion.",
      ],
      [
        "MYOD1-mutant spindle/sclerosing RMS",
        "Requires MYOD1 p.(Leu122Arg); may show spindle/sclerosing morphology and aggressive behavior.",
      ],
      [
        "Fusion-associated spindle-cell RMS",
        "Monomorphic spindle-cell morphology with a defining fusion; test VGLL2/VGLL3, NCOA2/NCOA3-related groups as appropriate.",
      ],
      [
        "Neuroblastoma / ganglioneuroblastic tumor",
        "A true neuroectodermal component requires morphologic and immunophenotypic evidence; aberrant neural-marker expression alone in ERMS is insufficient.",
      ],
    ],
    pitfalls: [
      "Primitive dense-cellular ERMS may mimic ARMS; do not diagnose ARMS by morphology alone.",
      "Botryoid ERMS has a cambium layer; genital rhabdomyoma does not.",
      "Anaplasia in a child remains an ERMS pattern, not adult-type pleomorphic RMS.",
      "Neuroectodermal differentiation can be focal and may be missed in small biopsies.",
    ],
    prognosis: [
      "ERMS is highly chemotherapy-sensitive and generally has a more favorable outcome than other RMS types.",
      "Risk stratification incorporates fusion status, IRSG group, primary site, stage, size, and age. Ages 1–9 years generally fare better than adolescents or adults.",
      "TP53 and MYOD1 alterations are important high-risk features in clinical-trial/risk assessment.",
    ],
  },
  {
    name: "Alveolar Rhabdomyosarcoma",
    family: "Skeletal muscle tumors",
    behavior:
      "High-grade malignant; fusion-positive disease has adverse prognosis",
    site: "Most often deep soft tissue of extremities; also head/neck, genitourinary and gynecological tracts, paraspinal tissue, and perineum.",
    definition:
      "Malignant neoplasm of monomorphic primitive round cells with skeletal-muscle differentiation, defined by a recurrent fusion, usually PAX3::FOXO1 or PAX7::FOXO1.",
    coding: "ICD-O 8920/3",
    clinical: [
      "Rapidly growing and highly aggressive. Approximately 25–30% have locoregional or distant metastases at diagnosis.",
      "Peak incidence is around ages 10–25 years (median 15); roughly equal sex distribution. A subset occurs in adults over 40 years.",
    ],
    criteria: [
      "Essential: uniform primitive round-cell morphology, often with rare rhabdomyoblasts; strong homogeneous nuclear myogenin; evidence of PAX3::FOXO1, PAX7::FOXO1, or another qualifying fusion.",
      "Absence of PAX3/7::FOXO1 and alternative fusion suggests ERMS with primitive phenotype rather than fusion-negative ARMS.",
    ],
    morphology: [
      "Highly cellular primitive round cells with scant cytoplasm and hyperchromatic nuclei, arranged in nests separated by fibrovascular septa. Central discohesion produces irregular alveolar spaces and variable cystic change.",
      "Solid ARMS retains cytomorphology but lacks septa and discohesion. Mitoses are often brisk; wreath-like multinucleated tumor giant cells are common.",
      "Rhabdomyoblastic differentiation may be present. Treatment may reduce cellularity and increase rhabdomyoblastic differentiation and stromal fibrosis.",
    ],
    ihc: [
      "Desmin, myogenin, and MYOD1 support skeletal-muscle differentiation. Nuclear myogenin is typically strong and diffuse/homogeneous, unlike the more heterogeneous or focal pattern in ERMS and other RMS subtypes; MYOD1 may be limited.",
      "Keratin, MUC4, ALK, OLIG2, and neuroendocrine markers (synaptophysin, chromogranin, CD56, INSM1) may be expressed and are diagnostic pitfalls.",
    ],
    molecular: [
      "PAX3::FOXO1 accounts for approximately 70–90% and PAX7::FOXO1 for 10–30% of fusions.",
      "Detect by RNA-based sequencing, other molecular methods, or fusion-protein IHC targeting the junctional region/FOXO1 C-terminus. Rare alternative fusions are reported.",
      "Formerly described fusion-negative ARMS is biologically and clinically closer to ERMS; do not retain 'fusion-negative ARMS' as a separate entity.",
    ],
    differential: [
      [
        "Dense-cellular ERMS",
        "ERMS lacks the defining fusion and usually shows heterogeneous myogenin/MYOD1; molecular testing resolves the overlap.",
      ],
      [
        "Ewing sarcoma / other round-cell sarcoma",
        "Use morphology and a lineage-directed panel; ARMS may show aberrant ALK, keratin, MUC4, OLIG2, or neuroendocrine markers.",
      ],
      [
        "Neuroendocrine neoplasm",
        "Neuroendocrine-marker expression can occur in ARMS; establish skeletal-muscle differentiation and defining fusion.",
      ],
    ],
    pitfalls: [
      "Alveolar architecture alone is not sufficient: solid ARMS lacks alveolar spaces, and ERMS can mimic ARMS.",
      "Strong diffuse nuclear myogenin is a useful clue but fusion confirmation is essential.",
      "Do not use 'mixed embryonal and alveolar RMS' or 'fusion-negative ARMS' as recommended terminology.",
    ],
    prognosis: [
      "Fusion-positive ARMS has worse prognosis than fusion-negative RMS/ERMS; PAX3::FOXO1 generally has worse outcome than PAX7::FOXO1.",
      "MYCN, CDK4, and MIR17HG amplification and rare pathogenic TP53 alterations correlate with poor outcomes.",
    ],
  },
  {
    name: "Pleomorphic Rhabdomyosarcoma",
    family: "Skeletal muscle tumors",
    behavior: "Highly aggressive malignant sarcoma of adults",
    site: "Deep soft tissue, most often lower extremity; also chest/abdominal wall, upper extremity, abdomen/retroperitoneum, and head/neck.",
    definition:
      "High-grade pleomorphic sarcoma of adults with variable numbers of bizarre eosinophilic polygonal, round, and spindle cells showing skeletal-muscle differentiation.",
    coding: "ICD-O 8901/3",
    clinical: [
      "Usually rapidly growing, deep, variably painful mass.",
      "Most common in the sixth to seventh decades (mean age about 72 years), with male predominance. Similar tumors in children are considered ERMS.",
    ],
    criteria: [
      "Essential: high-grade pleomorphic sarcoma composed of pleomorphic spindle, epithelioid, round, and/or polygonal cells with a variable population of brightly eosinophilic rhabdomyoblastic cells and variable desmin, myogenin, and/or MYOD1 expression.",
    ],
    morphology: [
      "Markedly atypical spindle, epithelioid, round, and pleomorphic cells with variable focal or extensive multinucleated, polygonal, spindle, or rhabdoid cells containing abundant eosinophilic cytoplasm.",
      "Usually large and well-marginated with pseudocapsule; cut surface is whitish/fleshy and often necrotic.",
      "Some tumors that resemble pleomorphic RMS represent other tumor types with divergent rhabdomyoblastic differentiation; exclude a definable alternative entity.",
    ],
    ihc: [
      "Desmin is positive to variable extent, sometimes diffuse. MYOD1 and myogenin are positive, sometimes only focally.",
      "Interpret skeletal-muscle markers in the context of the pleomorphic sarcoma; focal expression alone should prompt consideration of divergent differentiation in another sarcoma.",
    ],
    molecular: [
      "Routine diagnostic molecular testing is not clinically relevant.",
      "Complex karyotypes with TP53 mutations, RB1 alterations, and CDKN2A deletions are reported; genomic profiles resemble undifferentiated pleomorphic sarcoma.",
    ],
    differential: [
      [
        "Undifferentiated pleomorphic sarcoma with rhabdomyoblastic differentiation",
        "Determine whether skeletal-muscle differentiation is an integral defining component or focal divergent differentiation in another tumor type.",
      ],
      [
        "Dedifferentiated leiomyosarcoma",
        "Search for conventional smooth-muscle component and assess smooth-muscle markers; dedifferentiated LMS may lose lineage markers.",
      ],
      [
        "Anaplastic ERMS",
        "In children, extensively pleomorphic/anaplastic RMS is classified as anaplastic ERMS rather than pleomorphic RMS.",
      ],
    ],
    pitfalls: [
      "Age is critical: pediatric pleomorphic tumors should not be classified as adult-type pleomorphic RMS.",
      "Some apparent pleomorphic RMS cases are other sarcomas with divergent rhabdomyoblastic differentiation.",
      "Necrosis and atypical mitoses are common; correlate with the high-grade morphology.",
    ],
    prognosis: [
      "Highly aggressive. The largest cited study reported median survival of 7.3 months, with approximately 80% dying of disease.",
      "Lung metastases are common.",
    ],
  },
  {
    name: "Fusion-Associated Spindle Cell Rhabdomyosarcoma",
    family: "Skeletal muscle tumors",
    behavior: "Molecularly heterogeneous; behavior varies by fusion group",
    site: "Infantile group: trunk and head/neck. ZFP64::NCOA2/3 group: lower extremities and trunk. VGLL3-rearranged group: head/neck, especially tongue. Other fusions occur at varied sites, including viscera.",
    definition:
      "Heterogeneous group of skeletal-muscle sarcomas with fascicular spindle-cell morphology, defined by recurrent pathognomonic gene fusions.",
    coding: "ICD-O 8912/3",
    clinical: [
      "Usually rapidly growing, localized, deep-seated mass; pain may result from local compression.",
      "Congenital/infantile group presents at birth or within the first year. ZFP64- and VGLL3-associated tumors tend to occur in middle-aged or older adults, with male predilection.",
    ],
    criteria: [
      "Essential: monomorphic spindle-cell morphology; expression of at least two skeletal-muscle markers (e.g. desmin and MYOD1/myogenin); confirmation of the characteristic gene fusion.",
      "RNA-based targeted sequencing or FISH can detect the defining fusion.",
    ],
    morphology: [
      "Congenital/infantile tumors: cellular intersecting or herringbone fascicles of monomorphic spindle cells, resembling leiomyosarcoma or infantile fibrosarcoma; hypocellular zones may mimic myofibromatosis.",
      "ZFP64::NCOA2/3 tumors: monomorphic spindle cells in long herringbone fascicles; extensive chondro-osseous differentiation may occur.",
      "VGLL3-rearranged tumors: bland spindle cells diffusely infiltrate skeletal muscle, usually without significant mitoses or necrosis.",
      "Other fusion-defined groups have variable morphology. Large solid masses and necrosis may occur in some groups.",
    ],
    ihc: [
      "Infantile tumors: diffuse desmin with heterogeneous MYOD1 and myogenin.",
      "ZFP64::NCOA2/3: variable MYOD1 and desmin; myogenin usually negative.",
      "VGLL3-rearranged: diffuse desmin with scattered myogenin/MYOD1; patchy SMA may occur.",
    ],
    molecular: [
      "Infantile group: NCOA2 or CITED2 fusions, commonly SRF::NCOA2, VGLL2::NCOA2, VGLL2::CITED2; less often TEAD1::NCOA2.",
      "ZFP64 group: ZFP64 rearranged with NCOA2 or NCOA3.",
      "VGLL3 group: VGLL3 fusions with TCF12, EP300, or PPARGC1A.",
      "Other reported fusions include MEIS1::NCOA2, MEIS1::FOXO1, DCTN1::ALK, and EWSR1::NF2. EWSR1::TFCP2, FUS::TFCP2, and MEIS1::NCOA2 tumors are discussed separately as TFCP2-rearranged RMS in the source.",
    ],
    differential: [
      [
        "Infantile fibrosarcoma",
        "Infantile spindle-cell RMS expresses skeletal-muscle markers and has a defining fusion; morphology can overlap with fascicular spindle-cell tumors.",
      ],
      [
        "Leiomyosarcoma",
        "Smooth-muscle morphology overlaps, but skeletal-muscle markers and a defining RMS-associated fusion establish this category.",
      ],
      [
        "Myofibroma / myofibromatosis",
        "Hypocellular areas may mimic myofibroma; demonstrate skeletal-muscle differentiation and fusion.",
      ],
      [
        "MYOD1-mutant spindle/sclerosing RMS",
        "MYOD1 p.(Leu122Arg) defines a separate aggressive entity; test mutation status in appropriate spindle/sclerosing lesions.",
      ],
    ],
    pitfalls: [
      "Do not classify all spindle-cell RMS as one biologic group; prognosis differs substantially by fusion partner.",
      "Infantile tumors may be indolent, whereas ZFP64::NCOA2/3 tumors have substantial recurrence/metastatic potential.",
      "Fusion confirmation is essential; morphology and immunostains alone do not define the molecular group.",
    ],
    prognosis: [
      "Congenital/infantile tumors usually behave indolently, with exceptional metastases or fatal outcomes.",
      "Most VGLL3-rearranged tumors follow an indolent course.",
      "ZFP64::NCOA2/3 tumors have high potential for local recurrence, distant metastasis, and death. Outcome data for rarer fusion groups are limited.",
    ],
  },
  {
    name: "MYOD1-Mutant Spindle Cell / Sclerosing Rhabdomyosarcoma",
    family: "Skeletal muscle tumors",
    behavior: "Aggressive malignant",
    site: "Occurs in children and adults; may arise in soft tissue at varied sites.",
    definition:
      "Spindle-cell and/or sclerosing rhabdomyosarcoma defined by MYOD1 p.(Leu122Arg) mutation.",
    coding: "ICD-O 8912/3",
    clinical: [
      "Recognized in both children and adults. The source emphasizes aggressive clinical behavior despite multimodal therapy.",
    ],
    criteria: [
      "Essential: spindle cells in fascicles and/or oval-to-spindle cells with variable sclerotic stroma; typically diffuse, intense MYOD1 immunoreactivity; demonstration of MYOD1 p.(Leu122Arg) mutation.",
      "Desirable: variable desmin and myogenin staining.",
    ],
    morphology: [
      "Spindle-cell pattern: hypercellular intersecting fascicles of long spindle cells with pale eosinophilic cytoplasm and oval, fusiform, or blunt hyperchromatic nuclei; herringbone/fibrosarcomatous growth may occur.",
      "Sclerosing pattern: round, oval, or short spindle cells in cords, nests, trabeculae, or microalveoli in striking hyaline to pseudochondroid stroma; pseudoangiomatous architecture may mimic osteosarcoma or extraskeletal myxoid chondrosarcoma.",
      "Hybrid spindle/sclerosing forms occur. Primitive round-cell areas, lipoblast-like cells, and multinucleated giant cells are rare. Rhabdomyoblastic differentiation may be more evident after chemotherapy.",
    ],
    ihc: [
      "MYOD1 is diffusely positive and is the most consistent marker.",
      "Desmin ranges from diffuse to focal; myogenin is usually focal.",
      "Do not rely on desmin or myogenin alone; molecular confirmation is required.",
    ],
    molecular: [
      "Demonstration of MYOD1 p.(Leu122Arg) is required for diagnosis.",
      "MYOD1-mutant spindle/sclerosing RMS is distinct from fusion-associated spindle-cell RMS; assess defining fusion status when morphology/context warrants.",
    ],
    differential: [
      [
        "Fusion-associated spindle-cell RMS",
        "Fusion-defined groups require recurrent fusions (e.g. VGLL2/VGLL3/NCOA2-related); MYOD1-mutant entity requires p.(Leu122Arg).",
      ],
      [
        "Embryonal RMS with spindle-cell component",
        "ERMS lacks MYOD1 p.(Leu122Arg) and defining spindle-cell RMS fusions; it usually shows heterogeneous myogenin/MYOD1.",
      ],
      [
        "Extraskeletal myxoid chondrosarcoma / osteosarcoma",
        "Sclerosing RMS can mimic these through pseudochondroid/hyaline stroma and pseudoangiomatous pattern; establish skeletal-muscle differentiation and MYOD1 mutation.",
      ],
    ],
    pitfalls: [
      "Diffuse MYOD1 staining is supportive but mutation demonstration is required.",
      "Spindle and sclerosing patterns may coexist; both belong to the same molecularly defined entity when MYOD1 p.(Leu122Arg) is present.",
      "Do not mistake focal myogenin for absence of skeletal-muscle differentiation.",
    ],
    prognosis: [
      "Associated with aggressive clinical course, recurrence, metastasis, and fatal outcomes in children and adults despite multimodal treatment.",
      "The source reports 5-year event-free survival below 10% in MYOD1-mutant tumors.",
    ],
  },
];

const groups = ["All", "Smooth muscle tumors", "Skeletal muscle tumors"];
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
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
export default function SmoothAndSkeletalMuscleTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Leiomyoma",
    "Leiomyosarcoma",
    "Embryonal Rhabdomyosarcoma",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (cat === "All" || x.family === cat) &&
          [
            x.name,
            x.family,
            x.behavior,
            x.site,
            x.definition,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flat(),
            ...x.pitfalls,
            ...x.prognosis,
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
            PathologyGPS / Soft Tissue Tumors / Smooth and Skeletal Muscle
            Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Smooth and Skeletal Muscle Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first reference integrating smooth-muscle
                differentiation, skeletal-muscle lineage, defining molecular
                alterations, and behavior-specific diagnostic pitfalls.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the lineage, then classify the pattern and molecular
                subgroup.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Smooth-muscle markers overlap across entities; skeletal-muscle
                markers establish lineage but do not replace fusion or mutation
                testing when required.
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
                "1. Establish the setting",
                "Record age, anatomic site, depth, immune status/transplant history, multiplicity, and whether the lesion is visceral or somatic soft tissue.",
              ],
              [
                "2. Identify the muscle lineage",
                "Smooth muscle: eosinophilic fascicles and blunt-ended nuclei. Skeletal muscle: rhabdomyoblasts, granular/eosinophilic cytoplasm, cross-striations, or primitive myogenic cells.",
              ],
              [
                "3. Read the architecture",
                "Mature intersecting fascicles; primitive round/oval EBV-SMT component; embryonal myxoid/dense zones; alveolar nests/septa; spindle fascicles; or sclerosing cords in hyaline matrix.",
              ],
              [
                "4. Assess behavior",
                "Evaluate atypia, mitoses, atypical mitoses, necrosis, infiltrative growth, vascular invasion, and distribution. Apply site- and entity-specific thresholds.",
              ],
              [
                "5. Order defining tests",
                "EBER for suspected EBV-SMT; PAX3/7::FOXO1 for ARMS; MYOD1 p.(Leu122Arg) for spindle/sclerosing RMS; targeted RNA/FISH for fusion-associated spindle-cell RMS.",
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
          <Panel title="High-yield classification">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Smooth muscle:</b> leiomyoma (benign), EBV-associated smooth
                muscle tumor (immune-status-dependent, uncertain behavior), and
                leiomyosarcoma (malignant).
              </p>
              <p>
                <b>Skeletal muscle:</b> rhabdomyoma (benign); inflammatory
                rhabdomyoblastic tumor; and rhabdomyosarcoma groups—embryonal,
                alveolar, pleomorphic, fusion-associated spindle-cell, and
                MYOD1-mutant spindle/sclerosing.
              </p>
              <p>
                <b>Do not collapse molecular groups:</b> infantile and
                VGLL3-rearranged spindle-cell RMS are usually indolent, whereas
                ZFP64::NCOA2/3 and MYOD1-mutant spindle/sclerosing RMS have
                aggressive behavior.
              </p>
            </div>
          </Panel>
          <Panel title="Marker and molecular quick guide">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Smooth-muscle phenotype",
                      "SMA, desmin, h-caldesmon; use a panel, not one marker",
                    ],
                    [
                      "Gynecological leiomyoma",
                      "ER, PR, WT1 usually positive; somatic leiomyoma ER/PR negative",
                    ],
                    [
                      "EBV-SMT",
                      "EBER ISH positive in neoplastic cells (required)",
                    ],
                    [
                      "Skeletal-muscle lineage",
                      "Desmin, MYOD1, myogenin; distribution/intensity varies by RMS subtype",
                    ],
                    [
                      "Alveolar RMS",
                      "PAX3::FOXO1 / PAX7::FOXO1 or alternative defining fusion",
                    ],
                    ["MYOD1-mutant RMS", "MYOD1 p.(Leu122Arg) required"],
                    [
                      "Fusion-associated spindle RMS",
                      "RNA-based sequencing or FISH for recurrent fusion",
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
                Search by entity, morphology, site, marker, fusion, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. EBER, MYOD1, FOXO1, h-caldesmon..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((c) => (
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
                          {p.family}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                        {p.coding && (
                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                            {p.coding}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t border-slate-100 p-5 space-y-6">
                      <div className="rounded-xl bg-slate-50 p-4">
                        <h4 className="mb-1 text-sm font-bold uppercase tracking-wider text-slate-800">
                          Definition
                        </h4>
                        <p className="text-sm leading-6 text-slate-700">
                          {p.definition}
                        </p>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Clinical profile
                          </h4>
                          <Bullets items={p.clinical} />
                          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                            Essential diagnostic criteria
                          </h4>
                          <Bullets items={p.criteria} />
                          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                            Prognosis and behavior
                          </h4>
                          <Bullets items={p.prognosis} />
                        </div>
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Histopathology
                          </h4>
                          <Bullets items={p.morphology} />
                          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                            Immunohistochemistry
                          </h4>
                          <Bullets items={p.ihc} />
                          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                            Molecular pathology
                          </h4>
                          <Bullets items={p.molecular} />
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Differential diagnosis
                          </h4>
                          <div className="space-y-3">
                            {p.differential.map(([n, d], i) => (
                              <div
                                key={i}
                                className="rounded-xl border border-slate-200 p-3"
                              >
                                <div className="font-semibold text-slate-900">
                                  {n}
                                </div>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                  {d}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Diagnostic pitfalls
                          </h4>
                          <Bullets items={p.pitfalls} />
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                No entities match this search.
              </div>
            )}
          </div>
        </section>
        <Panel title="Practical sign-out checklist">
          <div className="grid gap-3 md:grid-cols-2">
            <Bullets
              items={[
                "Document exact anatomic site, depth, size, and relationship to vessel, organ, mucosal surface, or skeletal muscle.",
                "For smooth-muscle tumors, record atypia, mitotic count with area, atypical mitoses, necrosis, and infiltrative/vascular invasion.",
                "For suspected EBV-SMT, document immune/transplant history and confirm EBER in tumor cells.",
                "For RMS, document age, site, subtype-defining morphology, skeletal-muscle marker distribution, and molecular test status.",
              ]}
            />
            <Bullets
              items={[
                "For ARMS, report FOXO1 fusion status and fusion partner when available.",
                "For spindle-cell RMS, consider fusion testing and MYOD1 p.(Leu122Arg) according to morphology and age.",
                "For pleomorphic RMS, exclude another sarcoma with divergent rhabdomyoblastic differentiation.",
                "Correlate molecular subgroup with behavior; do not infer prognosis from spindle-cell morphology alone.",
              ]}
            />
          </div>
        </Panel>
        <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          Educational diagnostic reference based on the supplied WHO source
          excerpt. Ancillary tests and clinical management should be interpreted
          in the full clinical and radiologic context. This page is not a
          substitute for institutional protocols or multidisciplinary review.
        </footer>
      </div>
    </main>
  );
}
