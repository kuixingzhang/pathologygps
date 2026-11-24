"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  essential: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Gastrointestinal stromal tumor (GIST)",
    group: "Malignant / variable behavior",
    behavior:
      "Risk ranges from clinically insignificant to aggressive; use risk stratification, not sarcoma grading",
    site: "Most often stomach (~55%) and small bowel (~32%); less often colon/rectum and esophagus; peak incidence in the sixth decade, median age 60–65 years, slight male predominance.",
    clinical: [
      "Often presents with vague abdominal symptoms, bleeding, anemia, or an abdominal mass.",
      "Small lesions may be incidental; advanced tumors spread within the peritoneal cavity and commonly metastasize to the liver.",
    ],
    essential: [
      "Intramural, submucosal, or subserosal gastrointestinal mass.",
      "Spindle cell, epithelioid, or mixed morphology.",
      "KIT (CD117) and/or DOG1 expression.",
      "KIT or PDGFRA mutation is desirable for confirmation and therapeutic stratification.",
    ],
    morphology: [
      "Spindle cell morphology predominates, particularly in gastric and intestinal tumors.",
      "Epithelioid morphology occurs in approximately 20–25% of gastric GISTs; mixed patterns also occur.",
      "Small intestinal tumors may show skeinoid collagen fibers, nuclear palisading, or perivascular hyalinization.",
      "Hemorrhage, cystic degeneration, and necrosis may occur in larger tumors.",
      "Nuclear pleomorphism is uncommon; mitotic activity is a key risk parameter.",
    ],
    ihc: [
      "KIT is strongly and diffusely positive in most tumors; fewer than 5% are negative or only focally positive.",
      "DOG1 is highly sensitive and may identify KIT-negative GISTs.",
      "CD34 is common, especially in gastric spindle cell GIST.",
      "SMA, h-caldesmon, or S100 may be expressed; desmin and keratins are uncommon.",
    ],
    molecular: [
      "Approximately 85% harbor mutually exclusive activating KIT or PDGFRA mutations.",
      "KIT mutations occur in about 75%; exon 11 is most common, followed by exon 9.",
      "PDGFRA mutations account for about 10%; exon 18, including p.Asp842Val, predominates.",
      "Mutation testing predicts response: KIT exon 11 often responds to imatinib; PDGFRA p.Asp842Val is primarily resistant.",
      "Rare alternative drivers include NF1, BRAF, KRAS, and NTRK3, FGFR1, or ALK fusions.",
    ],
    differential: [
      [
        "Leiomyoma / leiomyosarcoma",
        "Smooth muscle markers are more consistent; GIST typically expresses KIT and/or DOG1.",
      ],
      [
        "Schwannoma",
        "S100/SOX10-positive nerve sheath phenotype; usually KIT/DOG1-negative.",
      ],
      [
        "Desmoid-type fibromatosis",
        "Infiltrative bland spindle-cell proliferation with nuclear β-catenin; lacks the usual GIST phenotype.",
      ],
      [
        "Metastatic melanoma or carcinoma",
        "Use clinical context and lineage markers; GIST is typically KIT/DOG1-positive.",
      ],
    ],
    pitfalls: [
      "Do not grade GIST using the FNCLCC system.",
      "Record tumor size, mitotic count per 5 mm², site, and tumor rupture; these drive risk assessment.",
      "A small core may not represent the mitotic hot spot or heterogeneous tumor.",
    ],
  },
  {
    name: "SDH-deficient gastrointestinal stromal tumor",
    group: "Malignant / variable behavior",
    behavior:
      "Distinct GIST subtype; often indolent but may metastasize, including to lymph nodes",
    site: "Almost exclusively gastric; enriched in children and young adults, median age about 22 years, with female predominance.",
    clinical: [
      "Young age, gastric location, multifocality, and lymph node metastases are useful clues.",
      "Symptoms resemble those of conventional GIST, including bleeding, abdominal pain, and mass effect.",
    ],
    essential: [
      "GIST morphology in the appropriate clinical setting.",
      "Loss of SDHB immunoreactivity in tumor cells, with retained internal controls.",
      "Evaluate SDHA expression to help identify SDHA-deficient cases.",
    ],
    morphology: [
      "Often multinodular, multifocal, or plexiform growth centered in the muscularis propria.",
      "Epithelioid morphology is common, sometimes with nested architecture and a rich capillary network.",
      "Lymph node metastases are more frequent than in conventional GIST.",
    ],
    ihc: [
      "SDHB loss is the defining immunohistochemical feature.",
      "SDHA loss supports an SDHA-deficient subset; SDHA is retained in other SDH-deficient tumors.",
      "KIT and DOG1 are generally expressed, so they do not distinguish this subtype from conventional GIST.",
    ],
    molecular: [
      "About 30% are associated with germline SDHA pathogenic variants and about 20% with germline SDHB, SDHC, or SDHD variants.",
      "Approximately half show SDHC promoter hypermethylation (epimutation), associated with Carney triad.",
      "SDH-deficient GIST should prompt evaluation for an SDH-deficient tumor syndrome and genetic counseling.",
    ],
    differential: [
      [
        "Conventional KIT/PDGFRA-mutant GIST",
        "Usually retains SDHB; often has KIT or PDGFRA driver mutation.",
      ],
      [
        "Other gastric epithelioid tumors",
        "Integrate KIT/DOG1, SDHB, keratins, neuroendocrine markers, and clinical setting.",
      ],
    ],
    pitfalls: [
      "SDHB loss is more informative than KIT/DOG1 for subclassification.",
      "Do not assume a young patient’s gastric GIST is sporadic; assess syndromic associations.",
    ],
  },
  {
    name: "Inflammatory myofibroblastic tumor",
    group: "Intermediate",
    behavior:
      "Rarely metastasizing; local recurrence is more common than distant spread",
    site: "Most often small intestine and colon, followed by stomach; children and young adults are commonly affected, but age range is broad.",
    clinical: [
      "May present with abdominal pain, obstruction, hematemesis, intussusception, or fever.",
      "Leukocytosis, anemia, elevated ESR, and hypergammaglobulinemia may occur.",
    ],
    essential: [
      "Loose fascicles of plump spindle cells without substantial pleomorphism.",
      "Prominent lymphoplasmacytic inflammatory infiltrate.",
      "SMA expression, often with ALK or, less commonly, ROS1 expression.",
    ],
    morphology: [
      "Uniform plump spindle cells form loose fascicles in myxoid or collagenous stroma.",
      "Lymphocytes and plasma cells are prominent; eosinophils may also be present.",
      "Epithelioid inflammatory myofibroblastic sarcoma shows a more epithelioid morphology and aggressive behavior.",
    ],
    ihc: [
      "SMA is positive in nearly all cases.",
      "ALK is expressed in approximately 60%, often with diffuse cytoplasmic staining.",
      "A small subset is ROS1-positive.",
    ],
    molecular: [
      "About two thirds harbor tyrosine kinase receptor gene rearrangements, most often ALK; ROS1 and other kinase fusions occur.",
      "ALK or ROS1 immunoreactivity is usually sufficient for diagnosis; fusion testing is useful in selected cases and for targeted therapy.",
    ],
    differential: [
      [
        "GIST",
        "Usually KIT/DOG1-positive and lacks the characteristic inflammatory background.",
      ],
      [
        "Desmoid-type fibromatosis",
        "Long sweeping fascicles and nuclear β-catenin; lacks ALK expression and prominent plasma-cell-rich inflammation.",
      ],
      [
        "Reactive inflammatory pseudotumor",
        "No defining kinase fusion; correlate with morphology and clinical context.",
      ],
      [
        "Epithelioid inflammatory myofibroblastic sarcoma",
        "Epithelioid cytology, often intra-abdominal, with more aggressive behavior.",
      ],
    ],
    pitfalls: [
      "ALK-negative disease does not exclude inflammatory myofibroblastic tumor.",
      "Do not use inflammatory pseudotumor as a synonym for this neoplasm.",
    ],
  },
  {
    name: "Inflammatory fibroid polyp",
    group: "Benign",
    behavior: "Benign",
    site: "Most often gastric antrum, followed by ileum; slight female predominance and peak incidence in middle-aged adults.",
    clinical: [
      "Often incidental when small; larger lesions may cause pain, bleeding, or obstruction.",
      "Small intestinal lesions may present with intussusception.",
    ],
    essential: [
      "Hypocellular lesion of short spindle to stellate cells in edematous or myxoid stroma.",
      "Prominent eosinophilic and lymphocytic infiltrate.",
      "CD34 expression is supportive.",
    ],
    morphology: [
      "Poorly marginated, hypocellular proliferation centered in the submucosa.",
      "Short spindle and stellate cells have fine chromatin, inconspicuous nucleoli, and scant eosinophilic cytoplasm.",
      "Perivascular concentric or onion-skin arrangement may be present.",
      "Eosinophils are a conspicuous component of the inflammatory infiltrate.",
    ],
    ihc: [
      "CD34 and PDGFRA are positive in most cases.",
      "SMA is positive in a minority.",
      "KIT, DOG1, desmin, S100, SOX10, and keratins are negative.",
    ],
    molecular: [
      "Activating PDGFRA mutations occur in many cases; exon 18 mutations predominate in gastric tumors, whereas exon 12 mutations are common in small intestinal tumors.",
      "Routine molecular testing is not required for a typical lesion.",
    ],
    differential: [
      [
        "GIST",
        "GIST is usually KIT/DOG1-positive; inflammatory fibroid polyp is typically negative.",
      ],
      [
        "Inflammatory myofibroblastic tumor",
        "More cellular fascicular spindle-cell proliferation; ALK/ROS1 may be positive.",
      ],
      [
        "Mucosal prolapse / reactive polyp",
        "Lacks the characteristic submucosal spindle-cell proliferation and eosinophil-rich infiltrate.",
      ],
    ],
    pitfalls: [
      "Familial PDGFRA-associated cases may be multiple and may coexist with GIST.",
      "Do not mistake the perivascular pattern for a vascular neoplasm.",
    ],
  },
  {
    name: "Plexiform fibromyxoma",
    group: "Benign",
    behavior: "Benign; no reported recurrence or metastasis",
    site: "Predominantly gastric, especially the antrum and pyloric region; rarely the duodenum. Reported across a wide age range, including children, with equal sex distribution.",
    clinical: [
      "May present with gastrointestinal bleeding, ulceration, weight loss, or pyloric obstruction.",
      "Usually arises in the muscularis propria and may extend toward the mucosa or serosa.",
    ],
    essential: [
      "Multinodular and plexiform architecture at low power.",
      "Uniform bland spindle cells in myxoid, fibromyxoid, or collagenous stroma.",
      "Prominent delicate arborizing capillary network.",
      "Low mitotic activity without substantial cytologic atypia.",
    ],
    morphology: [
      "Bland spindle cells, likely myofibroblastic, form interconnected nodules and plexiform fascicles.",
      "The stroma is myxoid, fibromyxoid, or collagenous.",
      "A prominent arborizing network of thin-walled capillaries is characteristic.",
      "Venous extension may occur and is not considered clinically significant.",
    ],
    ihc: [
      "SMA is positive; desmin is occasionally positive.",
      "ALK, CD34, KIT, DOG1, and keratins are negative.",
    ],
    molecular: [
      "MALAT1::GLI1 fusion or PTCH1 inactivation may occur, leading to GLI1 overexpression; molecular testing is not routinely required for diagnosis.",
    ],
    differential: [
      [
        "GIST",
        "Usually KIT and/or DOG1-positive; lacks the characteristic plexiform myxoid architecture and arborizing capillary network.",
      ],
      [
        "Inflammatory fibroid polyp",
        "Typically submucosal, eosinophil-rich, and often CD34-positive, with concentric perivascular fibrosis.",
      ],
      [
        "Inflammatory myofibroblastic tumor",
        "Usually has a prominent lymphoplasmacytic infiltrate and may express ALK or ROS1.",
      ],
      [
        "Myxoid leiomyoma",
        "Shows smooth muscle differentiation and typically expresses desmin and h-caldesmon.",
      ],
    ],
    pitfalls: [
      "Do not interpret venous extension alone as evidence of malignant behavior.",
      "The plexiform architecture and delicate arborizing vasculature are more useful than isolated immunostains.",
    ],
  },
  {
    name: "Calcifying fibrous tumor",
    group: "Benign",
    behavior:
      "Benign; local recurrence in approximately 10%; no metastatic potential",
    site: "GI tract, especially stomach and small intestine; also mesentery and peritoneum. Broad age range, peak in young to middle-aged adults.",
    clinical: [
      "Usually asymptomatic; occasional anemia or abdominal discomfort.",
      "Multifocality occurs in a minority, particularly in the peritoneum.",
    ],
    essential: [
      "Circumscribed, hypocellular, densely collagenous mass.",
      "Sparse lymphoplasmacytic infiltrate.",
      "Dystrophic and/or psammomatous calcifications are usually present.",
    ],
    morphology: [
      "Slender bland spindle cells are sparse within abundant hyalinized collagen.",
      "Chronic lymphoplasmacytic inflammation is present.",
      "Psammomatous and dystrophic calcifications are variably prominent.",
    ],
    ihc: ["IHC is not usually required; staining profile is not defining."],
    molecular: [
      "No clinically useful diagnostic molecular alteration is established.",
    ],
    differential: [
      ["GIST", "More cellular spindle-cell tumor; KIT/DOG1-positive."],
      [
        "Inflammatory myofibroblastic tumor",
        "Myxoid/cellular spindle-cell proliferation with prominent inflammation; ALK may be positive.",
      ],
      [
        "Sclerosing mesenteritis",
        "Usually broader fibroinflammatory process with fat necrosis and characteristic anatomic distribution.",
      ],
    ],
    pitfalls: [
      "The dense collagen and calcifications may dominate a small biopsy; search for the sparse spindle cells and inflammatory infiltrate.",
    ],
  },
  {
    name: "Vascular tumors and malformations of the GI tract and liver",
    group: "Benign / variable",
    behavior:
      "Ranges from benign vascular lesions and malformations to malignant vascular neoplasms",
    site: "GI tract and liver; hepatic hemangiomas and vascular malformations are the most common hepatic mesenchymal lesions.",
    clinical: [
      "GI lesions may present with bleeding or anemia; hepatic lesions are often incidental.",
      "Clinical context, multiplicity, syndromic associations, and imaging are important.",
    ],
    essential: [
      "Classify as a vascular neoplasm versus a vascular malformation using architecture and endothelial proliferation.",
      "Assess endothelial atypia, mitotic activity, and destructive growth.",
      "Use GLUT1 to support infantile hemangioma in the appropriate setting.",
    ],
    morphology: [
      "Vascular lesions span capillary, cavernous, and other architectural patterns; malformations show abnormal vascular channels without a true proliferative neoplasm.",
      "Infantile hemangioma shows a characteristic proliferative vascular lesion with low-to-absent atypia.",
      "Evaluate for infiltrative growth, endothelial multilayering, cytologic atypia, and mitotic activity when malignancy is a concern.",
    ],
    ihc: [
      "CD31, ERG, and CD34 support endothelial differentiation.",
      "GLUT1 expression supports infantile hemangioma.",
      "D2-40 may highlight lymphatic differentiation.",
    ],
    molecular: [
      "Selected vascular anomalies harbor pathway alterations; molecular testing is reserved for cases in which classification or management may change.",
    ],
    differential: [
      [
        "Epithelioid hemangioendothelioma",
        "Epithelioid endothelial cells in cords/nests within myxohyaline stroma; CAMTA1 or fusion testing can support.",
      ],
      [
        "Angiosarcoma",
        "Marked atypia, destructive infiltrative growth, mitoses, and complex architecture.",
      ],
      [
        "Metastatic vascular tumor",
        "Correlate with clinical history and exclude an extrahepatic primary.",
      ],
    ],
    pitfalls: [
      "Do not equate vascular channel complexity with malignancy; assess endothelial cytology and proliferative activity.",
      "The supplied chapter distinguishes vascular tumors and malformations by morphology and selected ancillary tests.",
    ],
  },
  {
    name: "Epithelioid hemangioendothelioma",
    group: "Malignant",
    behavior: "Malignant vascular neoplasm with variable clinical course",
    site: "May arise in liver and other organs; clinical presentation depends on site and extent.",
    clinical: [
      "May be incidental or present with pain, mass effect, or multifocal disease.",
      "Clinical and radiologic correlation is essential, particularly for hepatic lesions.",
    ],
    essential: [
      "Cords or nests of epithelioid cells with intracytoplasmic vacuoles.",
      "Myxohyaline or fibrous stroma.",
      "Expression of endothelial markers such as ERG, CD31, or CD34.",
    ],
    morphology: [
      "Epithelioid cells form cords, strands, and nests in a myxohyaline stroma.",
      "Intracytoplasmic vacuoles may contain erythrocytes and mimic signet-ring cells.",
      "Mild-to-moderate atypia is typical; assess mitoses and necrosis.",
    ],
    ihc: [
      "CD31, ERG, CD34, and D2-40 support endothelial differentiation.",
      "CAMTA1 is positive in approximately 90% of cases and correlates with the underlying fusion.",
      "Keratin may be expressed in a subset and can mimic carcinoma.",
    ],
    molecular: [
      "Most conventional cases harbor WWTR1::CAMTA1 fusion; a smaller subset has YAP1::TFE3 fusion.",
      "CAMTA1 IHC or fusion testing is useful in unusual or diagnostically challenging cases.",
    ],
    differential: [
      [
        "Angiosarcoma",
        "More overtly malignant cytology, destructive vascular channels, and higher mitotic activity.",
      ],
      [
        "Carcinoma with signet-ring features",
        "Epithelial markers may overlap; endothelial markers and characteristic fusion support EHE.",
      ],
      [
        "Other epithelioid vascular lesions",
        "Integrate architecture, cytology, endothelial markers, and molecular findings.",
      ],
    ],
    pitfalls: [
      "Focal keratin expression does not establish carcinoma.",
      "Use CAMTA1/fusion testing when morphology and endothelial phenotype are equivocal.",
    ],
  },
  {
    name: "Glomus tumor",
    group: "Benign / rarely malignant",
    behavior: "Usually benign; malignant glomus tumor is rare",
    site: "GI tract, particularly stomach; may occur elsewhere in digestive system.",
    clinical: [
      "Often presents as a submucosal mass; symptoms may include pain or GI bleeding.",
      "Clinical behavior depends on site, size, mitotic activity, and atypical features.",
    ],
    essential: [
      "Glomus-like morphology with uniform round cells surrounding branching vessels.",
      "Smooth muscle differentiation, especially strong SMA expression.",
    ],
    morphology: [
      "Uniform round to oval cells are arranged in nests or cuffs around branching, often dilated vessels.",
      "Cytoplasm is pale to eosinophilic; nuclei are generally uniform.",
      "Malignant examples show increased mitotic activity, atypia, and/or necrosis.",
    ],
    ihc: [
      "SMA is typically strong and diffuse.",
      "Collagen IV and other smooth muscle-associated markers may be supportive.",
      "KIT/DOG1 are not expected; use to exclude GIST when needed.",
    ],
    molecular: [
      "No routine diagnostic molecular test is established in the supplied chapter.",
    ],
    differential: [
      [
        "GIST",
        "Usually KIT/DOG1-positive spindle or epithelioid tumor; glomus tumor shows perivascular glomus cells and SMA.",
      ],
      [
        "PEComa",
        "Coexpresses melanocytic markers and smooth muscle markers; glomus tumor lacks melanocytic differentiation.",
      ],
      [
        "Paraganglioma",
        "Zellballen architecture and neuroendocrine markers; glomus tumor is SMA-positive.",
      ],
    ],
    pitfalls: [
      "Recognize the perivascular architecture; avoid classifying a glomus tumor as a generic epithelioid mesenchymal neoplasm.",
    ],
  },
  {
    name: "Perivascular epithelioid cell tumor (PEComa) and angiomyolipoma",
    group: "Variable / malignant potential",
    behavior:
      "PEComa ranges from benign to malignant; most hepatic angiomyolipomas are benign",
    site: "GI PEComas most often colon, liver, small intestine, and pancreas; hepatic angiomyolipoma predominantly affects middle-aged women.",
    clinical: [
      "GI lesions may cause abdominal pain or bleeding; hepatic angiomyolipoma is often incidental.",
      "Multifocal hepatic and renal lesions may be associated with tuberous sclerosis.",
    ],
    essential: [
      "PEComa: epithelioid and/or spindle cells with granular eosinophilic-to-clear cytoplasm in nested, trabecular, or sheet-like architecture.",
      "Angiomyolipoma: variable admixture of adipocytes, thick-walled vessels, and epithelioid cells.",
      "Demonstration of melanocytic and smooth muscle markers is desirable.",
    ],
    morphology: [
      "PEComa cells are arranged in nests, trabeculae, or sheets; sclerosing patterns may show cords in dense collagen.",
      "Angiomyolipoma contains variable proportions of lipid-rich cells, conventional perivascular epithelioid cells, and thick-walled vessels.",
      "Malignant PEComas may show marked atypia, diffuse pleomorphism, increased mitoses, and necrosis.",
    ],
    ihc: [
      "Melanocytic markers include HMB45, Melan-A, PNL2, MITF, and tyrosinase.",
      "Smooth muscle markers include SMA and desmin; expression is variable.",
      "Cathepsin K is frequently positive.",
      "Hepatocellular markers are negative in hepatic angiomyolipoma; HMB45 is useful in apparent hepatic lipomas.",
    ],
    molecular: [
      "TSC2 biallelic inactivation is common; TSC1 alterations are less frequent and activate mTOR signaling.",
      "A minority harbor TFE3 fusions, often involving SFPQ or ASPSCR1.",
      "Molecular testing may support classification and identify potential mTOR-pathway therapeutic relevance.",
    ],
    differential: [
      [
        "GIST",
        "May express KIT; PEComa can occasionally be KIT-positive but shows melanocytic and smooth muscle differentiation.",
      ],
      [
        "Hepatocellular adenoma",
        "GS or LFABP patterns alone can mislead; HepPar1 and arginase-1 are negative in angiomyolipoma.",
      ],
      [
        "Leiomyoma / leiomyosarcoma",
        "Smooth muscle phenotype without melanocytic marker expression.",
      ],
      [
        "Metastatic melanoma",
        "Melanocytic markers overlap; smooth muscle markers and characteristic morphology support PEComa.",
      ],
    ],
    pitfalls: [
      "Hepatic angiomyolipoma can be fat-poor and mimic hepatocellular lesions.",
      "Histologic atypia alone is not a reliable criterion for malignancy in hepatic angiomyolipoma.",
    ],
  },
  {
    name: "Mesenchymal hamartoma of the liver",
    group: "Benign",
    behavior: "Benign; excellent prognosis after complete excision",
    site: "Exclusively hepatic, usually right lobe; approximately 85% present before age 3 years, with slight male predominance in children.",
    clinical: [
      "Usually presents with abdominal distension or an upper abdominal mass; may be detected prenatally or incidentally.",
      "Large lesions in infants may cause respiratory or circulatory compromise.",
      "May be associated with Beckwith–Wiedemann syndrome or placental mesenchymal dysplasia.",
    ],
    essential: [
      "Abundant hypocellular fibromyxoid stroma with bland stellate or spindle cells.",
      "Bile duct-like structures surrounded by collagen collars.",
      "Numerous blood vessels of variable caliber.",
    ],
    morphology: [
      "Lobulated mass with abundant hypocellular myxoid stroma.",
      "Anastomosing, tortuous, linear, or branching bile duct-like structures may be cystically dilated.",
      "Thick-walled arterioles and thin-walled ectatic capillaries are abundant.",
      "Extramedullary hematopoiesis is present in most cases.",
      "Cystic degeneration may occur without an epithelial lining.",
    ],
    ihc: [
      "Spindle cells express vimentin and actin; desmin is focal.",
      "Bile duct-like structures express CK7 and CK19.",
      "Nuclear β-catenin is absent.",
      "Glypican-3 may be expressed and can mimic hepatoblastoma.",
    ],
    molecular: [
      "A subset has chromosome 19q13.4 rearrangements involving the MHLB1 breakpoint and activation of the C19MC microRNA cluster.",
      "Molecular findings are supportive in selected cases, not required for routine diagnosis.",
    ],
    differential: [
      [
        "Mixed epithelial-mesenchymal hepatoblastoma",
        "Shows malignant epithelial/hepatocellular or embryonal components; correlate with age, morphology, and immunophenotype.",
      ],
      [
        "Infantile hepatic hemangioma",
        "Predominantly vascular proliferation without characteristic bile duct-like structures and fibromyxoid stroma.",
      ],
      [
        "Undifferentiated embryonal sarcoma",
        "Markedly atypical pleomorphic cells in myxoid stroma, often with PAS-positive hyaline globules.",
      ],
    ],
    pitfalls: [
      "Glypican-3 positivity does not by itself establish hepatoblastoma.",
      "Cystic degeneration can obscure the characteristic stromal and ductal components.",
    ],
  },
  {
    name: "Calcifying nested stromal-epithelial tumor (CNSET) of the liver",
    group: "Malignant / uncertain behavior",
    behavior:
      "Low-grade neoplasm; usually cured by excision, but recurrence and metastasis are reported",
    site: "Usually right hepatic lobe; rare; female predominance, often children, adolescents, and young adults.",
    clinical: [
      "Often incidental; may present with abdominal pain, palpable mass, nausea, or Cushing syndrome.",
      "Frequently large at diagnosis.",
    ],
    essential: [
      "Nested architecture surrounded by cellular myofibroblastic stroma.",
      "Bland, uniform epithelioid and spindle cells.",
      "Psammomatous calcifications and/or bone formation.",
      "Nuclear WT1 and β-catenin expression and cytokeratin positivity are desirable.",
    ],
    morphology: [
      "Ovoid to irregular nests of epithelioid-to-spindle cells separated by cellular myofibroblastic stroma.",
      "Psammomatous calcifications and occasional ossification are characteristic.",
      "Tumor cells are usually bland, but mitotic activity can be variable and occasionally high.",
      "Bile ductular proliferation may surround tumor nests.",
    ],
    ihc: [
      "Tumor cells express broad-spectrum keratins and usually nuclear WT1.",
      "Nuclear and cytoplasmic β-catenin expression is typical.",
      "CD56, EMA, PR, NSE, and KIT are variable.",
      "Hepatocellular markers, synaptophysin, chromogranin, and desmin are negative; stromal spindle cells express SMA.",
    ],
    molecular: [
      "Activating CTNNB1 alterations, including exon 3 deletions and point mutations, have been identified in tested cases.",
      "TERT promoter mutations have also been reported.",
    ],
    differential: [
      [
        "Hepatoblastoma",
        "Usually shows recognizable hepatocellular/embryonal differentiation and lacks the characteristic nested calcifying pattern.",
      ],
      [
        "Neuroendocrine neoplasm",
        "CNSET is typically keratin/WT1/β-catenin-positive and chromogranin/synaptophysin-negative.",
      ],
      [
        "Metastatic carcinoma",
        "Correlate with clinical history; CNSET has characteristic stromal and calcification pattern.",
      ],
    ],
    pitfalls: [
      "Do not interpret keratin positivity as proof of carcinoma.",
      "Mitotic activity alone does not define behavior; integrate size, invasion, multifocality, and clinical course.",
    ],
  },
  {
    name: "Malignant gastrointestinal neuroectodermal tumor (GNET)",
    group: "Malignant",
    behavior: "Malignant; aggressive with metastatic potential",
    site: "Most often small intestine; also stomach and other GI sites; typically adults.",
    clinical: [
      "May present with abdominal pain, bleeding, obstruction, or an abdominal mass.",
      "Metastases may be present at diagnosis or develop during follow-up.",
    ],
    essential: [
      "Compatible epithelioid, spindle, or round-cell morphology.",
      "S100 and SOX10 positivity.",
      "EWSR1 gene rearrangement.",
    ],
    morphology: [
      "Tumor cells are arranged in sheets, nests, or fascicles; clear-to-eosinophilic cytoplasm may be present.",
      "Melanin is generally absent, unlike clear cell sarcoma of soft tissue.",
      "Osteoclast-like giant cells may occur.",
    ],
    ihc: [
      "S100 and SOX10 are typically positive.",
      "Melanocytic markers may be variable; the phenotype is not equivalent to conventional melanoma.",
      "Neuroendocrine markers are generally not defining.",
    ],
    molecular: [
      "EWSR1 rearrangement is essential; common partners include ATF1 or CREB1.",
      "Molecular confirmation is important to distinguish GNET from other S100/SOX10-positive tumors.",
    ],
    differential: [
      [
        "Clear cell sarcoma of soft tissue / GI clear cell sarcoma",
        "Overlapping EWSR1::ATF1/CREB1 and S100/SOX10 phenotype; GNET is a primary GI tumor and usually lacks melanocytic differentiation.",
      ],
      [
        "Melanoma",
        "Clinical history and melanocytic marker profile; GNET often lacks convincing melanocytic differentiation.",
      ],
      [
        "MPNST",
        "Often associated with a nerve or NF1; morphology and molecular profile differ.",
      ],
    ],
    pitfalls: [
      "Do not diagnose melanoma solely from S100/SOX10 positivity.",
      "Exclude metastatic clear cell sarcoma and melanoma using clinical history and molecular context.",
    ],
  },
  {
    name: "Undifferentiated embryonal sarcoma of the liver",
    group: "Malignant",
    behavior: "High-grade malignant sarcoma",
    site: "Predominantly children, usually 6–10 years; rare adult cases; typically a large hepatic mass.",
    clinical: [
      "Often presents with abdominal mass, pain, fever, or constitutional symptoms.",
      "May be cystic or solid on imaging and can mimic a benign cystic lesion.",
    ],
    essential: [
      "Spindled, stellate, and pleomorphic giant cells loosely arranged in myxoid stroma.",
      "No convincing specific line of differentiation.",
      "Exclude other defined hepatic sarcomas and sarcomatoid malignancies.",
    ],
    morphology: [
      "Loose myxoid stroma contains pleomorphic spindle and stellate cells, bizarre giant cells, and rhabdoid forms.",
      "Characteristic PAS-positive, diastase-resistant hyaline globules may be present.",
      "Mitotic activity and necrosis are often prominent.",
    ],
    ihc: [
      "No single lineage-specific IHC profile is defining.",
      "Vimentin is commonly expressed; keratin and other markers may be variable.",
    ],
    molecular: [
      "Complex genomic alterations are described; no single defining recurrent molecular alteration is established in the supplied chapter.",
    ],
    differential: [
      [
        "Mesenchymal hamartoma",
        "Bland hypocellular fibromyxoid stroma with bile duct-like structures and no marked pleomorphism.",
      ],
      [
        "Hepatoblastoma",
        "Demonstrable epithelial/hepatocellular differentiation.",
      ],
      [
        "Rhabdomyosarcoma / other sarcoma",
        "Use morphology and lineage-specific IHC/molecular testing to exclude defined entities.",
      ],
    ],
    pitfalls: [
      "Large cystic appearance does not imply benignity.",
      "Sample extensively to identify diagnostic pleomorphic areas and exclude a more specific sarcoma.",
    ],
  },
  {
    name: "GLI1-altered neoplasms (including gastroblastoma)",
    group: "Malignant / variable",
    behavior: "Behavior varies by subtype; some cases metastasize",
    site: "Gastroblastoma is gastric and typically affects adolescents or young adults; other GLI1-altered tumors occur in soft tissue and viscera.",
    clinical: [
      "Gastroblastoma presents as a gastric mass, often in younger patients.",
      "Clinical behavior is variable and long-term data are limited.",
    ],
    essential: [
      "For gastroblastoma: gastric origin and biphasic epithelial and spindle-cell histology.",
      "Cytokeratin expression in the epithelial component.",
      "Demonstration of GLI1 fusion is desirable.",
    ],
    morphology: [
      "Gastroblastoma shows a biphasic arrangement of epithelial and spindle-cell components.",
      "Other GLI1-altered neoplasms may show nested, epithelioid, or spindle-cell patterns.",
    ],
    ihc: [
      "Cytokeratins highlight the epithelial component in gastroblastoma.",
      "GLI1 nuclear expression may support the diagnosis but is not a substitute for molecular confirmation.",
    ],
    molecular: [
      "GLI1 fusions or amplification define the molecular group; fusion partners vary by tumor type.",
      "Molecular testing is particularly useful for confirming gastroblastoma and separating it from other biphasic gastric tumors.",
    ],
    differential: [
      [
        "GIST",
        "Usually KIT/DOG1-positive and lacks the characteristic biphasic epithelial/spindle architecture.",
      ],
      [
        "Synovial sarcoma",
        "May be biphasic and keratin-positive; SS18::SSX fusion establishes synovial sarcoma.",
      ],
      [
        "Carcinoma with sarcomatoid change",
        "Look for a conventional carcinoma component and broader epithelial differentiation.",
      ],
    ],
    pitfalls: [
      "Do not classify all GLI1-altered neoplasms as gastroblastoma; site and morphology matter.",
    ],
  },
  {
    name: "NUT-rearranged sarcoma",
    group: "Malignant",
    behavior: "High-grade malignant sarcoma",
    site: "Rare; reported in deep soft tissue and visceral sites, including the digestive system; age range is broad.",
    clinical: [
      "Usually presents as a rapidly enlarging mass; clinical behavior is aggressive.",
    ],
    essential: [
      "Monomorphic spindle, epithelioid, and rhabdoid cells in a partially hyalinized background.",
      "Evidence of NUTM1 or NUTM2 rearrangement.",
    ],
    morphology: [
      "Monomorphic spindle, epithelioid, or rhabdoid cells are arranged in sheets or fascicles.",
      "A partially hyalinized or collagenous background may be present.",
      "High-grade cytologic features and mitotic activity are common.",
    ],
    ihc: [
      "NUT immunohistochemistry can support the diagnosis; interpret nuclear staining in morphologic context.",
      "Cytokeratin expression may occur and can lead to confusion with carcinoma.",
    ],
    molecular: [
      "NUTM1 or NUTM2 rearrangement is defining; identify the fusion by FISH or sequencing when needed.",
    ],
    differential: [
      [
        "NUT carcinoma",
        "Usually epithelial carcinoma with squamous differentiation; sarcoma shows mesenchymal morphology and defining rearrangement.",
      ],
      [
        "Synovial sarcoma",
        "SS18::SSX fusion; morphology and immunophenotype overlap.",
      ],
      [
        "Ewing sarcoma",
        "CD99/NKX2.2 phenotype and EWSR1::FLI1 or related fusion; molecular testing distinguishes.",
      ],
    ],
    pitfalls: [
      "NUT expression is not interpreted in isolation; confirm the defining rearrangement when the diagnosis is uncertain.",
    ],
  },
  {
    name: "Undifferentiated sarcoma of the GI tract",
    group: "Malignant",
    behavior: "Malignant; diagnosis of exclusion",
    site: "Primary GI tract; exclude secondary involvement and extra-GI primary tumor.",
    clinical: [
      "Usually presents as a mass with pain, bleeding, obstruction, or constitutional symptoms.",
      "Diagnosis requires exclusion of metastatic sarcoma and a defined line of differentiation.",
    ],
    essential: [
      "Spindle, pleomorphic, epithelioid, or round-cell tumor, usually high grade.",
      "No evidence of specific cellular differentiation by morphology or immunohistochemistry.",
      "No defining molecular alteration or translocation of another well-characterized sarcoma.",
      "No tumor outside the GI tract.",
    ],
    morphology: [
      "Highly variable morphology, including spindle, pleomorphic, epithelioid, and round-cell patterns.",
      "Often high-grade with brisk mitotic activity and necrosis.",
      "Extensive sampling is required to exclude a differentiated component.",
    ],
    ihc: [
      "No specific lineage-specific immunophenotype is present.",
      "Use a broad, morphology-directed panel to exclude epithelial, melanocytic, myogenic, vascular, neural, and hematolymphoid differentiation.",
    ],
    molecular: [
      "No defining molecular alteration is identified; molecular testing is used to exclude specific sarcoma entities.",
    ],
    differential: [
      [
        "GIST",
        "KIT/DOG1 and/or characteristic KIT/PDGFRA/SDH molecular findings.",
      ],
      [
        "Leiomyosarcoma",
        "Smooth muscle morphology and SMA, desmin, and h-caldesmon expression.",
      ],
      ["Angiosarcoma", "Endothelial morphology and ERG/CD31 expression."],
      [
        "GNET / clear cell sarcoma",
        "S100/SOX10 expression and EWSR1 rearrangement.",
      ],
      [
        "Metastatic sarcoma",
        "Clinical/radiologic exclusion of an extra-GI primary is mandatory.",
      ],
    ],
    pitfalls: [
      "Undifferentiated sarcoma is a diagnosis of exclusion, not a default label for an unclassified biopsy.",
      "Exclude metastatic disease and molecularly defined sarcomas before signing out.",
    ],
  },
];

const categories = ["All", "Benign", "Intermediate", "Malignant"];

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
  if (!items.length) return null;
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

export default function MesenchymalTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Gastrointestinal stromal tumor (GIST)",
    "SDH-deficient gastrointestinal stromal tumor",
    "Epithelioid hemangioendothelioma",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const categoryMatch =
        category === "All" ||
        (category === "Benign" &&
          entity.group.toLowerCase().includes("benign")) ||
        (category === "Intermediate" &&
          entity.group.toLowerCase().includes("intermediate")) ||
        (category === "Malignant" &&
          entity.group.toLowerCase().includes("malignant"));
      const text = [
        entity.name,
        entity.group,
        entity.behavior,
        entity.site,
        ...entity.clinical,
        ...entity.essential,
        ...entity.morphology,
        ...entity.ihc,
        ...entity.molecular,
        ...entity.pitfalls,
        ...entity.differential.flat(),
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && (!q || text.includes(q));
    });
  }, [query, category]);

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((value) => value !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Digestive System / Mesenchymal Tumors
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Mesenchymal Tumors of the Digestive System
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Behavior categories are not interchangeable with grade">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Benign:</b> usually cured by local excision; recurrence is
                uncommon or related to incomplete removal.
              </p>
              <p>
                <b>Intermediate, locally aggressive:</b> may infiltrate or recur
                locally but has little or no metastatic potential.
              </p>
              <p>
                <b>Intermediate, rarely metastasizing:</b> has a low but
                definite metastatic risk; inflammatory myofibroblastic tumor is
                an example.
              </p>
              <p>
                <b>Malignant:</b> has destructive growth and metastatic
                potential. GIST requires a separate risk-stratification
                approach.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield diagnostic IHC and molecular tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["GIST", "KIT, DOG1; KIT / PDGFRA mutation testing"],
                    ["SDH-deficient GIST", "Loss of SDHB; assess SDHA"],
                    [
                      "Inflammatory myofibroblastic tumor",
                      "ALK / ROS1; kinase fusion testing when indicated",
                    ],
                    [
                      "Inflammatory fibroid polyp",
                      "CD34; PDGFRA mutation in selected cases",
                    ],
                    [
                      "Epithelioid hemangioendothelioma",
                      "ERG, CD31, CAMTA1; WWTR1::CAMTA1",
                    ],
                    [
                      "PEComa / angiomyolipoma",
                      "HMB45, Melan-A, SMA, desmin; TSC1/TSC2 or TFE3",
                    ],
                    ["GNET", "S100, SOX10; EWSR1 rearrangement"],
                    [
                      "NUT-rearranged sarcoma",
                      "NUT IHC; NUTM1/NUTM2 rearrangement",
                    ],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 text-slate-600">{row[1]}</td>
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
                Clinical profile and diagnostic criteria
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, marker, or gene.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. DOG1, SDHB, ALK, CAMTA1, EWSR1..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((value) => (
              <button
                key={value}
                onClick={() => setCategory(value)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === value
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
              >
                {value}
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
                      <p className="mt-1 text-sm text-slate-500">
                        {entity.site}
                      </p>
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
                        <Bullets items={[entity.site, ...entity.clinical]} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={entity.essential} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Histopathology
                        </h4>
                        <Bullets items={entity.morphology} />
                        {entity.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                              Immunophenotype
                            </h4>
                            <Bullets items={entity.ihc} />
                          </>
                        )}
                        {entity.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                              Molecular Pathology
                            </h4>
                            <Bullets items={entity.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map((item, index) => (
                                <tr key={index}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold text-slate-900">
                                    {item[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-600">
                                    {item[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={entity.pitfalls} />
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

        <Panel title="Practical reporting checklist">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Document the site",
                "Specify organ, exact segment, mural layer, and whether the lesion is primary or secondary.",
              ],
              [
                "Sample heterogeneity",
                "Target viable solid areas, necrosis, hemorrhage, and interfaces; do not rely on a limited biopsy alone.",
              ],
              [
                "Use a focused panel",
                "Select markers to establish lineage and distinguish close mimics; avoid indiscriminate broad panels.",
              ],
              [
                "State the basis for behavior",
                "Apply entity-specific criteria, and include size, mitotic activity, necrosis, invasion, margins, and molecular results as appropriate.",
              ],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{item[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>
        <p className="text-xs leading-5 text-slate-500">
          This reference summarizes the supplied WHO chapter excerpt. Ancillary
          testing should be selected in the context of morphology, anatomic
          site, and clinical findings.
        </p>
      </div>
    </main>
  );
}
