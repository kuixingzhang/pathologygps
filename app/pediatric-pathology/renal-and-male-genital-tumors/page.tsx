"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Pediatric Cystic Nephroma",
    group: "Nephroblastic and Related Tumors",
    clue: "Multilocular cystic renal neoplasm with bland epithelial lining and fibrous septa; no blastema.",
    summary:
      "A benign pediatric renal cystic neoplasm strongly associated with DICER1 syndrome.",
    clinical: [
      "Usually affects infants and children younger than 2 years (median, 16 months).",
      "Slight male predominance; approximately one quarter of cases are bilateral.",
      "Presents as an abdominal mass or is detected during surveillance in a child with a DICER1 alteration or pleuropulmonary blastoma.",
    ],
    criteria: [
      "A well-circumscribed, multilocular cystic renal neoplasm.",
      "Cysts are separated by fibrous septa containing bland mesenchymal cells.",
      "No blastemal component or expansile solid nodule is present.",
      "Consider germline evaluation in the appropriate clinical setting.",
    ],
    histology: [
      "Cysts are lined by flattened, cuboidal, or hobnail epithelium.",
      "Septa are usually thin and hypocellular, with focal cellular condensations and well-differentiated tubules.",
      "Blastema is absent; its presence favors cystic partially differentiated nephroblastoma.",
    ],
    ihc: [
      "The epithelial lining may show variable epithelial marker expression.",
      "ER and PR may be absent, unlike in adult cystic nephroma.",
    ],
    differential: [
      {
        name: "Nephroblastoma",
        distinction:
          "Blastema and/or immature epithelial or stromal components support nephroblastoma; cystic nephroma lacks blastema.",
      },
    ],
    molecular: [
      "DICER1 alterations are identified in approximately 90% of cases; assess for a germline pathogenic variant.",
    ],
    pitfalls: [
      "Thoroughly sample septa and any solid areas to exclude blastemal or sarcomatous components.",
    ],
  },
  {
    name: "Nephroblastoma (Wilms Tumor)",
    group: "Nephroblastic and Related Tumors",
    clue: "Embryonal renal tumor with blastemal, epithelial, and stromal differentiation; assess anaplasia and treatment effect.",
    summary:
      "A malignant renal tumor recapitulating developing kidney, most often occurring in young children.",
    clinical: [
      "Most often presents at 3–4 years of age; slight female predominance.",
      "Usually unilateral; bilateral disease occurs in approximately 5–10%.",
      "Typically presents as an abdominal mass; pain, hematuria, hypertension, and anemia occur in a minority.",
      "Associated with predisposition syndromes including WAGR, Denys–Drash, Beckwith–Wiedemann, and DICER1 syndromes.",
    ],
    criteria: [
      "Identify at least two of the three components: blastemal, epithelial, and stromal.",
      "Document the relative proportions and any heterologous differentiation.",
      "Assess for anaplasia; diagnosis requires nuclear enlargement, hyperchromasia, and atypical multipolar mitotic figures.",
      "Distinguish focal from diffuse anaplasia using the applicable COG or SIOP criteria.",
      "Interpret viable tumor and treatment effect in the context of preoperative chemotherapy.",
    ],
    histology: [
      "Blastema comprises primitive small-to-medium cells with frequent mitoses.",
      "Epithelial differentiation ranges from primitive rosettes to tubules and glomeruloid structures.",
      "Stromal differentiation ranges from primitive mesenchyme to rhabdomyoblastic, cartilaginous, or adipocytic elements.",
      "Anaplasia may occur in any component and is defined by marked nuclear enlargement, hyperchromasia, and atypical mitoses.",
    ],
    ihc: [
      "Blastemal cells typically express nuclear WT1 and PAX8.",
      "Epithelial components express cytokeratins and EMA; WT1 and PAX8 are variable.",
      "Stromal components express vimentin; desmin may be variable.",
      "Use a panel guided by morphology to exclude mimics in monophasic tumors.",
    ],
    differential: [
      {
        name: "Metanephric Adenoma",
        distinction:
          "Usually occurs in older patients and shows monotonous small epithelial cells, low mitotic activity, WT1/CD57 expression, and often BRAF p.V600E.",
      },
      {
        name: "Clear Cell Sarcoma of the Kidney",
        distinction:
          "Shows arborizing fibrovascular septa and diffuse BCOR/cyclin D1 expression; molecular alterations involve BCOR or YWHAE.",
      },
      {
        name: "Malignant Rhabdoid Tumor of the Kidney",
        distinction:
          "Typically affects infants and shows rhabdoid cells with loss of SMARCB1 (INI1) or, rarely, SMARCA4.",
      },
    ],
    molecular: [
      "WT1, CTNNB1, IGF2/11p15, TP53, and MYCN alterations occur in subsets.",
      "TP53 alterations are associated with anaplasia.",
      "Chromosome 1q gain is associated with increased risk of relapse and adverse outcome.",
    ],
    pitfalls: [
      "A biopsy may miss focal or diffuse anaplasia; nephrectomy sampling is essential for definitive assessment.",
      "Blastemal predominance in an untreated tumor is not equivalent to the post-chemotherapy blastemal-type high-risk category.",
    ],
  },
  {
    name: "TFE3-Rearranged Renal Cell Carcinoma",
    group: "Molecularly Defined Renal Cell Carcinomas",
    clue: "Renal epithelial neoplasm with TFE3 nuclear expression and a TFE3 gene fusion; often papillary with clear cells and psammoma bodies.",
    summary:
      "A MiT family translocation-associated renal cell carcinoma that is disproportionately represented in children and young adults.",
    clinical: [
      "Occurs in children, adolescents, and adults; younger age is typical compared with conventional adult RCC.",
      "No consistent sex predilection is established.",
      "Presents as a renal mass; clinical features are otherwise nonspecific.",
    ],
    criteria: [
      "Establish renal epithelial differentiation, including PAX8 expression.",
      "Demonstrate a TFE3 rearrangement or fusion for definitive classification.",
      "Strong diffuse nuclear TFE3 staining is a useful screening finding but should be confirmed molecularly when possible.",
      "Consider RNA sequencing when morphology and immunophenotype are convincing but break-apart FISH is negative.",
    ],
    histology: [
      "A characteristic pattern is papillary architecture lined by epithelioid clear cells.",
      "Psammoma bodies may be numerous.",
      "Other patterns may mimic clear cell RCC, papillary RCC, oncocytoma, or epithelioid angiomyolipoma.",
      "Rare tumors contain melanin pigment.",
    ],
    ihc: [
      "TFE3 shows strong nuclear staining in many cases.",
      "PAX8 and other renal epithelial markers are retained.",
      "Cytokeratin and EMA may be weaker than in conventional RCC.",
      "Cathepsin K is positive in a subset; melan-A and HMB45 are variably expressed.",
    ],
    differential: [
      {
        name: "TFEB-Rearranged Renal Cell Carcinoma",
        distinction:
          "Often shows a biphasic large-cell/small-cell pattern and TFEB nuclear expression; confirm the specific rearrangement.",
      },
      {
        name: "Epithelioid PEComa",
        distinction:
          "Typically lacks PAX8 and epithelial architecture and expresses melanocytic and smooth muscle markers.",
      },
      {
        name: "Eosinophilic Solid and Cystic Renal Cell Carcinoma",
        distinction:
          "Shows eosinophilic cells with basophilic cytoplasmic stippling and patchy CK20; TSC1/TSC2 alterations are characteristic.",
      },
    ],
    molecular: [
      "TFE3 fusions involve partners such as ASPSCR1, PRCC, SFPQ, NONO, and others.",
      "Xp11 paracentric inversions may be missed by conventional break-apart FISH; RNA-based testing can resolve selected cases.",
    ],
  },
  {
    name: "TFEB-Rearranged Renal Cell Carcinoma",
    group: "Molecularly Defined Renal Cell Carcinomas",
    clue: "Biphasic nests of large epithelioid cells and smaller cells around basement membrane material; TFEB rearrangement.",
    summary:
      "A MiT family translocation-associated RCC characterized by TFEB rearrangement, classically t(6;11).",
    clinical: [
      "Occurs in children and adults, with a tendency toward younger patients than conventional RCC.",
      "No consistent sex predilection is established.",
      "Presents as a renal mass with nonspecific symptoms.",
    ],
    criteria: [
      "Identify a renal epithelial neoplasm with compatible morphology.",
      "Strong nuclear TFEB immunoreactivity supports the diagnosis.",
      "Confirm TFEB rearrangement by FISH or sequencing.",
    ],
    histology: [
      "Classic tumors show nests of large epithelioid cells and smaller cells clustered around basement membrane material.",
      "Native renal tubules may be entrapped at the tumor periphery.",
      "The small-cell component may be inconspicuous or absent, broadening the differential diagnosis.",
    ],
    ihc: [
      "TFEB shows nuclear immunoreactivity.",
      "PAX8 and renal epithelial markers are expressed.",
      "Melan-A, HMB45, and cathepsin K are commonly positive.",
      "Cytokeratin and EMA expression may be limited.",
    ],
    differential: [
      {
        name: "TFE3-Rearranged Renal Cell Carcinoma",
        distinction:
          "Shares MiT-family features but is defined by TFE3 rather than TFEB rearrangement; papillary clear-cell morphology is common.",
      },
      {
        name: "Clear Cell Renal Cell Carcinoma",
        distinction:
          "Usually shows diffuse membranous CAIX and lacks the characteristic biphasic architecture and TFEB rearrangement.",
      },
      {
        name: "Oncocytic Renal Neoplasms",
        distinction:
          "May overlap when the small-cell component is absent; use TFEB testing and the melanocytic marker profile.",
      },
    ],
    molecular: [
      "The characteristic alteration is MALAT1::TFEB fusion from t(6;11)(p21;q12).",
      "TFEB amplification is a distinct mechanism of TFEB overexpression and is more often encountered in adults.",
    ],
  },
  {
    name: "ALK-Rearranged Renal Cell Carcinoma",
    group: "Molecularly Defined Renal Cell Carcinomas",
    clue: "Renal carcinoma with an ALK fusion, including VCL::ALK in patients with sickle cell trait.",
    summary:
      "A rare molecularly defined RCC requiring demonstration of an ALK rearrangement.",
    clinical: [
      "Reported age range is 3–85 years; cases occur in children and adults.",
      "Sex distribution is approximately equal.",
      "VCL::ALK tumors are associated with young patients with sickle cell trait; other cases have no distinctive clinical profile.",
    ],
    criteria: [
      "Identify a renal carcinoma with compatible morphology and ALK immunoreactivity.",
      "Confirm an ALK rearrangement or fusion by FISH or sequencing; immunohistochemistry alone is insufficient.",
    ],
    histology: [
      "VCL::ALK tumors are often well circumscribed and composed of polygonal cells with abundant eosinophilic, markedly vacuolated cytoplasm.",
      "Other fusion subtypes show heterogeneous patterns, including papillary or cribriform architecture and mucinous stroma.",
      "Some cases mimic metanephric adenoma or mucinous tubular and spindle cell carcinoma.",
    ],
    ihc: [
      "ALK immunohistochemistry is a useful screening tool.",
      "SMARCB1 (INI1) expression is retained, helping distinguish VCL::ALK RCC from renal medullary carcinoma.",
      "TFE3 immunoreactivity may occur with some staining protocols but does not establish TFE3 rearrangement.",
    ],
    differential: [
      {
        name: "SMARCB1-Deficient Renal Medullary Carcinoma",
        distinction:
          "Usually occurs with sickle cell trait, shows high-grade infiltrative carcinoma and loss of INI1; ALK-rearranged RCC retains INI1.",
      },
      {
        name: "TFE3-Rearranged Renal Cell Carcinoma",
        distinction:
          "Requires TFE3 fusion; ALK-rearranged RCC is defined by an ALK fusion.",
      },
      {
        name: "Metanephric Adenoma",
        distinction:
          "Shows uniform embryonal epithelial cells, WT1/CD57 expression, and often BRAF p.V600E rather than an ALK fusion.",
      },
    ],
    molecular: [
      "ALK fusions involve partners including VCL, TPM3, EML4, STRN, and HOOK1.",
      "Demonstration of an ALK fusion is required for diagnosis.",
    ],
  },
  {
    name: "Eosinophilic Solid and Cystic Renal Cell Carcinoma",
    group: "Molecularly Defined Renal Cell Carcinomas",
    clue: "Solid and cystic tumor with voluminous eosinophilic cells, basophilic cytoplasmic stippling, and often patchy CK20.",
    summary:
      "A renal carcinoma frequently associated with somatic TSC1 or TSC2 alterations and mTOR pathway activation.",
    clinical: [
      "Reported age range is 14–75 years.",
      "Originally described predominantly in women, but also occurs in men and children.",
      "Usually presents as a renal mass; multifocality and metastases are uncommon but reported.",
    ],
    criteria: [
      "Identify a renal epithelial neoplasm with solid and cystic architecture and eosinophilic cytoplasm.",
      "Look for basophilic cytoplasmic stippling and hobnail cyst lining.",
      "Patchy CK20 expression is a key immunophenotypic clue.",
      "Correlate with TSC1/TSC2 alterations when needed.",
    ],
    histology: [
      "Tumor cells are polygonal with abundant eosinophilic cytoplasm and basophilic stippling.",
      "Cysts are often lined by hobnail cells, sometimes multinucleated.",
      "Cytoplasmic vacuoles may create a clear-cell appearance.",
      "Psammoma bodies and binucleated cells are common.",
    ],
    ihc: [
      "PAX8 is typically positive.",
      "CK20 is patchy in many cases.",
      "Cathepsin K is often patchy positive.",
      "CK7 and CD117 are usually negative.",
    ],
    differential: [
      {
        name: "TFE3-Rearranged Renal Cell Carcinoma",
        distinction:
          "May show papillae, psammoma bodies, and cathepsin K; confirm TFE3 rearrangement and assess the distinctive cytoplasmic stippling of ESC-RCC.",
      },
      {
        name: "Chromophobe Renal Cell Carcinoma",
        distinction:
          "May show binucleation and perinuclear halos but typically expresses CK7 and CD117 and lacks the characteristic CK20 pattern.",
      },
      {
        name: "High-Grade Oncocytic Renal Tumor",
        distinction:
          "May overlap morphologically and molecularly; integrate CK20, TSC/mTOR pathway alterations, and current classification criteria.",
      },
    ],
    molecular: [
      "Biallelic somatic TSC1 or TSC2 mutations are present in a majority of cases and activate mTOR signaling.",
    ],
  },
  {
    name: "SMARCB1-Deficient Renal Medullary Carcinoma",
    group: "Molecularly Defined Renal Cell Carcinomas",
    clue: "High-grade infiltrative renal medullary carcinoma with loss of SMARCB1 (INI1), usually in a patient with sickle cell trait or disease.",
    summary:
      "An aggressive renal carcinoma strongly associated with sickling hemoglobinopathies and SMARCB1 inactivation.",
    clinical: [
      "Typically affects adolescents and young adults; median age is approximately 21 years.",
      "Male predominance (approximately 2:1).",
      "Almost all patients are symptomatic, commonly with hematuria, flank pain, abdominal pain, or a mass.",
      "Strongly associated with sickle cell trait or hemoglobin SC disease.",
    ],
    criteria: [
      "High-grade infiltrative renal carcinoma, usually centered in the medulla.",
      "Loss of nuclear SMARCB1 (INI1) in tumor cells with intact internal controls.",
      "Clinical or laboratory evidence of a sickling hemoglobinopathy is supportive but not absolutely required.",
    ],
    histology: [
      "Infiltrating cords, nests, sheets, tubules, and microcysts are typical.",
      "Individual cell necrosis may create a cribriform pattern.",
      "Prominent myxoid desmoplasia and chronic inflammation are common.",
      "Tumor cells may have rhabdoid cytology and brisk mitotic activity.",
      "Sickled erythrocytes may be present, especially in extravasated blood.",
    ],
    ihc: [
      "SMARCB1 (INI1) nuclear expression is lost.",
      "PAX8, broad-spectrum cytokeratins, EMA, and vimentin are typically positive.",
      "OCT3/4 may be positive and can mimic germ cell tumor in metastatic sites.",
    ],
    differential: [
      {
        name: "Malignant Rhabdoid Tumor of the Kidney",
        distinction:
          "Usually affects infants and young children and shows rhabdoid morphology with INI1 loss; clinical age and overall morphology are key.",
      },
      {
        name: "ALK-Rearranged Renal Cell Carcinoma",
        distinction:
          "May occur in patients with sickle cell trait but retains INI1 and is defined by an ALK fusion.",
      },
      {
        name: "High-Grade Urothelial Carcinoma",
        distinction:
          "May show INI1 loss; urothelial carcinoma in situ and CK20 expression support urothelial origin.",
      },
    ],
    molecular: [
      "SMARCB1 inactivation occurs through mutation, deletion, or translocation, often with biallelic loss.",
    ],
  },
  {
    name: "Metanephric Adenoma",
    group: "Metanephric Tumors",
    clue: "Cellular renal epithelial neoplasm of uniform embryonal cells, usually mitotically inactive, often BRAF p.V600E-mutated.",
    summary:
      "A benign epithelial metanephric neoplasm that can mimic epithelial-predominant nephroblastoma or papillary RCC.",
    clinical: [
      "Most patients are adults, often in the fifth or sixth decade; reported range is 5–83 years.",
      "Female predominance.",
      "About half are incidental; others present with abdominal pain or hematuria.",
      "Polycythemia occurs in approximately 10% due to erythropoietin production.",
    ],
    criteria: [
      "A highly cellular epithelial neoplasm composed of small, uniform embryonal cells.",
      "Mitotic activity is absent or very low.",
      "WT1 nuclear expression and CD57 expression support the diagnosis.",
      "BRAF p.V600E mutation strongly supports the diagnosis in the appropriate morphology.",
    ],
    histology: [
      "Small uniform cells form crowded acini and branching, elongated tubules.",
      "Hyalinized or edematous stroma is typically scant.",
      "Psammoma bodies may be numerous.",
      "Vascular invasion is absent and mitoses are rare.",
    ],
    ihc: [
      "WT1 shows diffuse nuclear staining.",
      "CD57 is typically positive.",
      "CK7 is negative or patchy; EMA and AMACR are typically negative.",
      "BRAF VE1 is positive in most cases.",
    ],
    differential: [
      {
        name: "Nephroblastoma, Epithelial-Predominant",
        distinction:
          "Usually occurs in younger children and shows a pseudocapsule, more elongated nuclei, and greater mitotic activity.",
      },
      {
        name: "Papillary Renal Cell Carcinoma",
        distinction:
          "Usually has more abundant cytoplasm, diffuse CK7/EMA, absent WT1, and chromosome 7/17 gains.",
      },
      {
        name: "Metanephric Adenofibroma",
        distinction:
          "Contains both metanephric adenoma-like epithelium and metanephric stromal tumor-like spindle stroma.",
      },
    ],
    molecular: [
      "BRAF p.V600E is present in approximately 90% of cases; rare KANK1::NTRK3 fusions occur.",
    ],
  },
  {
    name: "Metanephric Adenofibroma",
    group: "Metanephric Tumors",
    clue: "Biphasic renal neoplasm combining metanephric adenoma-like epithelium and metanephric stromal tumor-like stroma.",
    summary: "A rare benign biphasic metanephric neoplasm.",
    clinical: [
      "Reported from infancy to adulthood (approximately 13 months to 36 years).",
      "No established sex predilection.",
      "May present with hematuria or polycythemia; some tumors are incidental.",
    ],
    criteria: [
      "A biphasic renal neoplasm with epithelial and spindle-cell stromal components.",
      "Epithelial areas resemble metanephric adenoma.",
      "Stromal areas resemble metanephric stromal tumor and entrap native tubules and glomeruli.",
      "BRAF p.V600E supports the diagnosis.",
    ],
    histology: [
      "The proportions of epithelial and stromal components vary.",
      "The stromal component may entrap native tubules and glomeruli.",
      "Epithelial components show small uniform cells forming acini and tubules.",
      "The tumor-kidney interface is often irregular.",
    ],
    ihc: [
      "Stromal cells frequently express CD34.",
      "Epithelial elements show an immunophenotype similar to metanephric adenoma, including WT1 and CD57.",
    ],
    differential: [
      {
        name: "Metanephric Adenoma",
        distinction:
          "Purely epithelial without a substantial metanephric stromal tumor-like component.",
      },
      {
        name: "Metanephric Stromal Tumor",
        distinction:
          "Predominantly spindle-cell stromal neoplasm without the characteristic metanephric adenoma-like epithelial component.",
      },
    ],
    molecular: [
      "BRAF p.V600E has been identified in reported cases and is shared with other metanephric neoplasms.",
    ],
  },
  {
    name: "Metanephric Stromal Tumor",
    group: "Metanephric Tumors",
    clue: "Bland spindle-cell neoplasm with concentric onion-skin-like collars around native tubules and vessels; often BRAF-mutated.",
    summary:
      "A benign renal stromal neoplasm with a characteristic interaction with entrapped native renal structures.",
    clinical: [
      "Usually occurs in infants and young children; mean age approximately 24 months, although adult cases occur.",
      "No established sex predilection.",
      "Presents with an abdominal mass; hematuria, hypertension, or hemorrhage from extrarenal vasculopathy may occur.",
    ],
    criteria: [
      "A bland, predominantly spindle-cell renal neoplasm.",
      "Concentric collars of tumor cells surround and entrap native tubules and blood vessels.",
      "Angiodysplasia of entrapped arterioles and juxtaglomerular cell hyperplasia are supportive.",
      "No vascular invasion.",
    ],
    histology: [
      "Spindle or stellate cells have thin hyperchromatic nuclei and indistinct cytoplasmic processes.",
      "Concentric onion-skin-like collars surround tubules and vessels in a myxoid background.",
      "Angiodysplasia and juxtaglomerular cell hyperplasia may be present.",
      "Heterologous glial or cartilaginous differentiation occurs in a subset.",
      "Necrosis is unusual; mitoses are usually rare.",
    ],
    ihc: [
      "CD34 is typically positive, often accentuated in peritubular and perivascular collars.",
      "Desmin, cytokeratins, PAX8, and S100 are generally negative.",
      "Heterologous glial areas may express GFAP and S100.",
      "BCOR is typically negative.",
    ],
    differential: [
      {
        name: "Metanephric Adenofibroma",
        distinction:
          "Contains a substantial metanephric adenoma-like epithelial component in addition to the stromal component.",
      },
      {
        name: "Cellular Mesoblastic Nephroma",
        distinction:
          "Often shows ETV6::NTRK3 fusion and lacks the characteristic concentric peritubular/perivascular collars.",
      },
      {
        name: "Clear Cell Sarcoma of the Kidney",
        distinction:
          "Typically expresses BCOR and cyclin D1 and has characteristic arborizing fibrovascular septa.",
      },
    ],
    molecular: [
      "BRAF p.V600E is present in most cases and supports the diagnosis.",
      "ETV6::NTRK3 fusion is absent, helping distinguish it from cellular mesoblastic nephroma.",
    ],
  },
  {
    name: "Ossifying Renal Tumor of Infancy",
    group: "Mesenchymal Renal Tumors",
    clue: "Benign intracalyceal lesion composed of osteoid, osteoblast-like cells, and peripheral spindle cells.",
    summary:
      "A rare benign renal pelvic neoplasm of infancy with a characteristic osteoid-forming pattern.",
    clinical: [
      "Occurs in neonates and infants, from 6 days to approximately 2.5 years.",
      "Marked male predominance (approximately 7:1).",
      "Often presents with gross hematuria and a calcified mass protruding into the renal pelvis.",
    ],
    criteria: [
      "A renal pelvic/intracalyceal lesion with osteoid, osteoblast-like cells, and spindle cells.",
      "Cytologic features are bland, without malignant osteoid or overt sarcomatous atypia.",
    ],
    histology: [
      "Osteoblast-like cells are located between and around osteoid deposits.",
      "A bland spindle-cell component is usually peripheral.",
      "Both cellular components lack significant malignant atypia.",
    ],
    ihc: ["Osteoblast-like cells are usually positive for EMA and vimentin."],
    differential: [
      {
        name: "Metanephric Stromal Tumor",
        distinction:
          "Shows concentric collars around native tubules and vessels rather than a dominant osteoid-forming intracalyceal lesion.",
      },
      {
        name: "Mesoblastic Nephroma",
        distinction:
          "Forms an infiltrative spindle-cell renal mass and lacks the defining combination of osteoid and osteoblast-like cells.",
      },
      {
        name: "Anaplastic Sarcoma of the Kidney",
        distinction:
          "Shows malignant spindle-cell sarcoma, diffuse anaplasia, and often heterologous cartilage or rhabdomyoblastic differentiation.",
      },
    ],
    molecular: [
      "Clonal trisomy 4 has been reported in a small number of cases.",
    ],
  },
  {
    name: "Mesoblastic Nephroma",
    group: "Mesenchymal Renal Tumors",
    clue: "Spindle-cell renal tumor of infancy; classic, cellular, and mixed patterns have distinct molecular profiles.",
    summary:
      "A renal spindle-cell neoplasm that predominantly occurs in the first year of life.",
    clinical: [
      "Most cases occur in the first year, especially the first 3 months; rare after age 3 years.",
      "No established sex predilection.",
      "Usually presents as an abdominal mass; hypertension and hematuria may occur.",
      "May be detected prenatally and associated with polyhydramnios.",
    ],
    criteria: [
      "A renal spindle-cell neoplasm in an infant, usually younger than 3 years.",
      "Classify as classic, cellular, or mixed based on morphology.",
      "Classic tumors are infiltrative and relatively hypocellular; cellular tumors are more cellular with increased mitotic activity.",
      "Use molecular testing when needed to distinguish cellular mesoblastic nephroma from other spindle-cell tumors.",
    ],
    histology: [
      "Classic type shows interlacing spindle-cell fascicles, collagen, low mitotic activity, and dilated thin-walled vessels.",
      "Cellular type shows sheets of plump cells with vesicular nuclei, increased mitotic activity, and sometimes necrosis or hemorrhage.",
      "Mixed type contains both patterns.",
      "Entrapped renal elements, cartilage, and extramedullary hematopoiesis may occur.",
    ],
    ihc: [
      "SMA and cyclin D1 are typically positive.",
      "Desmin is usually negative.",
      "Nuclear pan-TRK staining supports cellular tumors with ETV6::NTRK3 fusion.",
    ],
    differential: [
      {
        name: "Metanephric Stromal Tumor",
        distinction:
          "Shows characteristic concentric collars around native tubules and vessels, CD34 positivity, and usually BRAF p.V600E.",
      },
      {
        name: "Clear Cell Sarcoma of the Kidney",
        distinction:
          "Shows arborizing fibrovascular septa and BCOR/cyclin D1 expression rather than typical mesoblastic nephroma architecture.",
      },
      {
        name: "Anaplastic Sarcoma of the Kidney",
        distinction:
          "Shows diffuse anaplasia and a multipatterned malignant sarcoma, often with DICER1 alterations.",
      },
    ],
    molecular: [
      "Cellular type commonly harbors ETV6::NTRK3 fusion.",
      "Classic type is associated with EGFR internal tandem duplication.",
      "Mixed tumors may show either alteration.",
    ],
  },
  {
    name: "Clear Cell Sarcoma of the Kidney",
    group: "Mesenchymal Renal Tumors",
    clue: "Malignant renal tumor with arborizing fibrovascular septa and BCOR/cyclin D1 expression.",
    summary:
      "A malignant pediatric renal sarcoma with a broad morphologic spectrum and characteristic BCOR-related molecular alterations.",
    clinical: [
      "Usually occurs in young children; mean age approximately 3 years.",
      "Male predominance (approximately 2:1).",
      "Presents with abdominal distension, pain, a palpable mass, or gross hematuria.",
      "Metastases may involve bone, brain, and orbit.",
    ],
    criteria: [
      "Identify characteristic arborizing fibrovascular septa separating nests or trabeculae of tumor cells.",
      "Tumor cells often show at least focal nuclear or cytoplasmic clearing.",
      "Diffuse nuclear BCOR and cyclin D1 support the diagnosis.",
      "Confirm BCOR or YWHAE-related molecular alteration in atypical cases.",
    ],
    histology: [
      "Classic pattern shows plump ovoid cells separated by arborizing fibrovascular septa.",
      "Additional patterns include cellular, myxoid, sclerosing, epithelioid, palisading, and spindle-cell patterns.",
      "Tumor cells have monomorphic nuclei with dispersed chromatin and inconspicuous nucleoli.",
      "Post-treatment recurrences may resemble myxoma or fibromatosis.",
    ],
    ihc: [
      "BCOR and cyclin D1 show diffuse nuclear staining in most cases.",
      "Vimentin, BCL2, TLE1, p75-NGFR, and SATB2 may be positive.",
      "CD34, S100, desmin, cytokeratins, and EMA are generally negative.",
      "Cyclin B3 is expressed in BCOR::CCNB3-fused tumors.",
    ],
    differential: [
      {
        name: "Metanephric Stromal Tumor",
        distinction:
          "Typically CD34-positive and BCOR-negative, with concentric collars around entrapped renal tubules.",
      },
      {
        name: "Mesoblastic Nephroma",
        distinction:
          "Occurs in infants and shows classic or cellular spindle-cell patterns; cellular type may harbor ETV6::NTRK3.",
      },
      {
        name: "Nephroblastoma, Stromal-Predominant",
        distinction:
          "Usually contains other nephroblastomatous components and may show heterologous differentiation; integrate WT1 and clinical context.",
      },
    ],
    molecular: [
      "Characteristic mutually exclusive alterations include BCOR exon 15 internal tandem duplication, YWHAE::NUTM2 fusion, and BCOR::CCNB3 fusion.",
    ],
  },
  {
    name: "Malignant Rhabdoid Tumor of the Kidney",
    group: "Mesenchymal Renal Tumors",
    clue: "Aggressive renal tumor with rhabdoid cells and loss of SMARCB1 (INI1); usually affects infants.",
    summary:
      "A highly malignant renal tumor defined by loss of SWI/SNF complex function, most often through SMARCB1 inactivation.",
    clinical: [
      "Usually affects infants and children younger than 2 years (median age approximately 1 year).",
      "No strong sex predilection is established.",
      "Presents with hematuria or an abdominal mass.",
      "A synchronous or metachronous atypical teratoid/rhabdoid tumor of the brain occurs in a subset.",
    ],
    criteria: [
      "Typical rhabdoid morphology in a renal malignancy.",
      "Loss of nuclear SMARCB1 (INI1) with intact internal controls.",
      "If INI1 is retained but morphology is convincing, assess SMARCA4 (BRG1).",
      "Consider germline testing and genetic counseling when SMARCB1 or SMARCA4 alterations are identified.",
    ],
    histology: [
      "Discohesive sheets of large cells grow in a diffuse infiltrative pattern.",
      "Tumor cells have eccentric vesicular nuclei and prominent eosinophilic nucleoli.",
      "Eosinophilic cytoplasmic inclusions are characteristic but may be focal or absent.",
      "Necrosis is often extensive; architecture may be solid, sclerosing, epithelioid, spindle-cell, cystic, vascular, or myxoid.",
    ],
    ihc: [
      "Tumor cells lose nuclear SMARCB1 (INI1) in most cases.",
      "Rare SMARCA4-deficient tumors lose nuclear BRG1.",
      "Normal stromal, endothelial, and inflammatory cells provide internal positive controls.",
    ],
    differential: [
      {
        name: "SMARCB1-Deficient Renal Medullary Carcinoma",
        distinction:
          "Typically occurs in older patients with sickle cell trait and shows epithelial differentiation with PAX8 and keratin expression.",
      },
      {
        name: "Clear Cell Sarcoma of the Kidney",
        distinction:
          "Shows arborizing fibrovascular septa and BCOR/cyclin D1 expression rather than classic rhabdoid morphology.",
      },
      {
        name: "Nephroblastoma",
        distinction:
          "Usually shows blastemal, epithelial, and/or stromal differentiation and retains SMARCB1.",
      },
    ],
    molecular: [
      "Biallelic SMARCB1 inactivation is characteristic; a small subset has biallelic SMARCA4 inactivation.",
      "Germline SMARCB1 alterations occur in a substantial minority and indicate rhabdoid tumor predisposition syndrome.",
    ],
  },
  {
    name: "Anaplastic Sarcoma of the Kidney",
    group: "Mesenchymal Renal Tumors",
    clue: "Multipatterned cystic and solid sarcoma with diffuse anaplasia, often associated with DICER1.",
    summary: "A rare malignant renal sarcoma within the DICER1 tumor spectrum.",
    clinical: [
      "Reported age ranges from 10 months to 41 years; median age approximately 9 years.",
      "No established sex predilection.",
      "Usually presents as a large renal mass, sometimes with flank pain or hematuria.",
    ],
    criteria: [
      "A multipatterned renal sarcoma with spindle-cell areas and diffuse anaplasia.",
      "Malignant cartilage and/or embryonal rhabdomyosarcomatous areas may be present.",
      "Residual cystic nephroma may be identified at the tumor periphery.",
      "Biallelic DICER1 alterations support the diagnosis.",
    ],
    histology: [
      "Spindle-cell sarcoma is the predominant pattern.",
      "Scattered large cells show hyperchromatic irregular nuclei and atypical multipolar mitotic figures.",
      "Malignant cartilage nodules and embryonal rhabdomyosarcomatous areas may occur.",
      "Residual cystic nephroma may be present.",
    ],
    ihc: [
      "Immunophenotype is variable and reflects the divergent sarcomatous components.",
      "Use lineage-specific markers to characterize rhabdomyoblastic or cartilaginous differentiation.",
    ],
    differential: [
      {
        name: "Mesoblastic Nephroma",
        distinction:
          "Usually occurs in infants and lacks diffuse anaplasia and the multipatterned malignant sarcomatous component.",
      },
      {
        name: "Malignant Rhabdoid Tumor of the Kidney",
        distinction:
          "Defined by rhabdoid morphology and SMARCB1/SMARCA4 deficiency rather than DICER1-associated multipatterned sarcoma.",
      },
      {
        name: "Pediatric Cystic Nephroma",
        distinction:
          "A benign purely cystic lesion without malignant spindle-cell sarcoma, cartilage, or diffuse anaplasia.",
      },
    ],
    molecular: [
      "Biallelic DICER1 alterations, typically including a loss-of-function variant and an RNase IIIb hotspot mutation, are characteristic.",
    ],
  },
  {
    name: "Renal Ewing Sarcoma",
    group: "Mesenchymal Renal Tumors",
    clue: "Small round cell renal sarcoma with diffuse membranous CD99 and a FET::ETS-family fusion.",
    summary:
      "An extraosseous Ewing sarcoma arising in the kidney; molecular confirmation is recommended.",
    clinical: [
      "Often affects adolescents and young adults; reported median age approximately 27 years.",
      "Slight male predominance.",
      "Presents with hematuria, pain, or a palpable renal mass; symptoms are nonspecific.",
    ],
    criteria: [
      "A highly cellular small round cell tumor, sometimes with rosette formation.",
      "Diffuse strong membranous CD99 expression supports the diagnosis.",
      "Confirm a FET::ETS fusion by molecular testing.",
    ],
    histology: [
      "Sheets of uniform small round cells with scant cytoplasm are typical.",
      "Rosettes may be present.",
      "Keratin expression can occur and does not exclude Ewing sarcoma.",
    ],
    ihc: [
      "CD99 shows strong diffuse membranous staining.",
      "NKX2-2 is often nuclear positive but is not fully specific.",
      "Use a broad panel to exclude nephroblastoma, neuroblastoma, rhabdoid tumor, and desmoplastic small round cell tumor.",
    ],
    differential: [
      {
        name: "Nephroblastoma, Blastemal-Predominant",
        distinction:
          "WT1 and PAX8 expression and other nephroblastomatous components support nephroblastoma; molecular testing distinguishes Ewing sarcoma.",
      },
      {
        name: "Malignant Rhabdoid Tumor of the Kidney",
        distinction: "Shows rhabdoid cytology and loss of INI1 or BRG1.",
      },
      {
        name: "Clear Cell Sarcoma of the Kidney",
        distinction:
          "Shows arborizing fibrovascular septa and BCOR-related alterations rather than a FET::ETS fusion.",
      },
    ],
    molecular: [
      "Approximately 90% harbor EWSR1::FLI1; other EWSR1::ETS or FUS::ETS fusions account for most remaining cases.",
    ],
  },
  {
    name: "Juvenile Granulosa Cell Tumor of the Testis",
    group: "Non-Germ Cell Testicular Tumors",
    clue: "Infantile intratesticular sex cord-stromal tumor with variably sized follicles and cysts.",
    summary:
      "A usually benign testicular sex cord-stromal tumor that occurs almost exclusively in neonates and infants.",
    clinical: [
      "Usually congenital or diagnosed within the first 6 months of life; cases after 1 year are exceptional.",
      "Occurs in male infants; no established later-life sex distribution applies.",
      "Presents as a testicular mass or enlargement; hormonal manifestations are very rare.",
      "Occasional associations with karyotypic abnormalities or cryptorchidism have been reported.",
    ],
    criteria: [
      "An intratesticular, partially macrocystic or microcystic neoplasm.",
      "Primitive granulosa cells show diffuse or lobular growth with variably sized follicles.",
      "A sex cord-stromal immunophenotype supports the diagnosis.",
      "Interpret serum AFP cautiously in neonates and young infants because physiologic elevation is expected.",
    ],
    histology: [
      "Lobulated architecture with macrocystic and microcystic areas is characteristic.",
      "Follicles contain eosinophilic or basophilic fluid.",
      "A solid component is usually present.",
      "Tumor cells are polygonal with vacuolated or eosinophilic cytoplasm and ovoid nuclei without grooves.",
      "Fibrous or fibromyxoid stroma is present; mitotic activity may be high.",
    ],
    ihc: [
      "Tumor cells express SF1, inhibin, calretinin, SOX9, WT1, and FOXL2.",
      "Low-molecular-weight cytokeratins may be focally positive.",
      "SALL4, AFP, and glypican-3 are typically negative, helping exclude yolk sac tumor.",
    ],
    differential: [
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Usually occurs beyond infancy and expresses SALL4, AFP, and glypican-3; follicular structures are not characteristic.",
      },
      {
        name: "Sertoli Cell Tumor, NOS",
        distinction:
          "Usually lacks the characteristic follicular architecture; CTNNB1 mutation with nuclear beta-catenin may support Sertoli cell tumor.",
      },
    ],
    molecular: [
      "FOXL2 mutations have not been systematically demonstrated in juvenile granulosa cell tumor; available data are limited.",
    ],
  },
];

const overview = entities.map((e) => ({
  name: e.name,
  group: e.group,
  clue: e.clue,
  key: e.criteria[0],
}));
const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

function buildDifferentials(entity: Entity): Differential[] {
  const sameGroup = entities
    .filter((e) => e.group === entity.group && e.name !== entity.name)
    .map((e) => ({ name: e.name, distinction: e.clue }));
  const explicit = entity.differential.filter(
    (d) => !sameGroup.some((s) => s.name === d.name),
  );
  return [...sameGroup, ...explicit];
}

export default function RenalAndMaleGenitalTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const d = buildDifferentials(e);
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...d.map((x) => `${x.name} ${x.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );
  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Renal and Male Genital Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic overview of pediatric renal and non-germ cell testicular
          neoplasms, emphasizing defining morphology, immunophenotype, molecular
          alterations, and practical differential diagnosis.
        </p>
      </header>
      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use age, architecture, lineage markers, and defining molecular
            alterations to classify pediatric renal and testicular tumors.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical pattern</th>
                <th className="px-4 py-3">Key diagnostic point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.group}</td>
                  <td className="px-4 py-3 text-slate-600">{item.clue}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Start with age and site.</strong> An infant renal mass
            raises mesoblastic nephroma and rhabdoid tumor; a renal mass in an
            older child or adolescent requires consideration of RCC and sarcoma.
          </li>
          <li>
            <strong>2. Define the dominant pattern.</strong> Determine whether
            the lesion is cystic, triphasic/blastemal, epithelial, spindle-cell,
            small round cell, or rhabdoid.
          </li>
          <li>
            <strong>3. Apply a focused immunohistochemical panel.</strong> Use
            WT1/PAX8 for renal epithelial or nephroblastic differentiation,
            INI1/BRG1 for SWI/SNF deficiency, and lineage-specific markers for
            sarcomas.
          </li>
          <li>
            <strong>4. Confirm defining molecular alterations.</strong> Consider
            DICER1, BRAF, TFE3/TFEB, ALK, TSC1/TSC2, BCOR/YWHAE, ETV6::NTRK3,
            and FET::ETS fusions as appropriate.
          </li>
        </ol>
      </section>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, markers, or differentials..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button
          onClick={() =>
            setExpanded(
              expanded.length === entities.length
                ? []
                : entities.map((e) => e.name),
            )
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>
      <div className="space-y-4">
        {filtered.map((entity) => {
          const open = expanded.includes(entity.name);
          const differential = buildDifferentials(entity);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    <section>
                      <h3 className="mb-2 text-base font-semibold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <div className="space-y-3">
                        {differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {d.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {d.distinction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Interpret morphology and ancillary studies in the context of patient
        age, tumor location, treatment history, and clinical findings. Molecular
        confirmation is recommended when required to define an entity.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
