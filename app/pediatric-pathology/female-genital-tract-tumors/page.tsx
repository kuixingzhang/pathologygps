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
    name: "Ovarian Fibroma",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Bland spindle-cell fascicles in collagenous or hyalinized stroma; sex cord elements, if present, comprise less than 10%.",
    summary:
      "A benign fibroblastic stromal neoplasm composed of bland spindle cells in variably collagenous stroma; cellular and mitotically active variants are recognized.",
    clinical: [
      "Usually occurs in adults, most often after age 30; uncommon in children and adolescents.",
      "No consistent sex issue applies; the tumor occurs in the ovary.",
      "Usually unilateral; bilateral tumors should raise consideration of nevoid basal cell carcinoma syndrome (Gorlin syndrome), particularly in young patients.",
      "Presents as an ovarian mass; hormonal manifestations and Meigs syndrome (ascites with pleural effusion) are less common.",
    ],
    criteria: [
      "Intersecting fascicles of bland spindle-to-ovoid fibroblastic cells are present.",
      "The stroma is variably collagenous or hyalinized.",
      "Any sex cord component is minor and comprises less than 10% of the tumor.",
      "Mitoses are usually absent or inconspicuous; assess cellular and mitotically active areas carefully.",
      "Exclude significant atypia, destructive invasion, and tumor cell necrosis before classifying a cellular lesion.",
    ],
    histology: [
      "Spindle or ovoid cells with scant cytoplasm form intersecting fascicles.",
      "Nuclei are bland and elongated.",
      "Collagenous and hyalinized stroma is variable in amount.",
      "Calcification may be present, particularly in syndromic cases.",
      "Cellular fibroma shows increased cellularity; mitotically active cellular fibroma has increased mitotic activity without the features of fibrosarcoma.",
      "Infarct-type necrosis or hemorrhage may occur with torsion and should not be mistaken for coagulative tumor cell necrosis.",
      "Rare tumors contain luteinized cells or a minor sex cord component.",
    ],
    ihc: [
      "Tumor cells commonly express SF1 and WT1.",
      "FOXL2, CD56, and hormone receptors are often positive.",
      "Inhibin and calretinin may be positive, usually focally or weakly.",
    ],
    differential: [
      {
        name: "Ovarian fibrosarcoma",
        distinction:
          "Shows significant cytologic atypia, increased mitotic activity, and often tumor cell necrosis; conventional fibroma is bland.",
      },
      {
        name: "Sclerosing stromal tumor",
        distinction:
          "Has pseudolobular architecture, alternating cellular and hypocellular zones, and prominent thin-walled vessels.",
      },
      {
        name: "Sex cord-stromal tumors",
        distinction:
          "Usually show a recognizable sex cord pattern and a more convincing sex cord immunophenotype; sex cord elements in fibroma remain under 10%.",
      },
    ],
    molecular: [
      "Young patients, bilateral tumors, or multiple calcified fibromas warrant clinical consideration of Gorlin syndrome (PTCH1 or SUFU) or, less commonly, other predisposition syndromes; molecular testing is not routinely required for diagnosis.",
    ],
    pitfalls: [
      "Do not overcall infarct-type necrosis associated with torsion as tumor cell necrosis.",
      "In a young patient, especially with bilateral tumors, consider an underlying predisposition syndrome.",
    ],
  },
  {
    name: "Sclerosing Stromal Tumor",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Pseudolobules of epithelioid and spindle cells separated by hypocellular stroma, with prominent thin-walled vessels.",
    summary:
      "A benign ovarian stromal neoplasm characterized by pseudolobular architecture, a prominent vascular network, and mixed epithelioid and spindle-cell populations.",
    clinical: [
      "Typically affects adolescents and young women, but can occur in premenarchal children and rarely in infants.",
      "Occurs in the ovary; paraovarian examples are rare.",
      "Usually unilateral.",
      "May present with menstrual abnormalities, abnormal uterine bleeding, or abdominal pain; precocious puberty, virilization, and Meigs syndrome are occasional presentations.",
    ],
    criteria: [
      "Pseudolobular architecture is present.",
      "Cellular pseudolobules contain a mixture of epithelioid and spindle cells.",
      "Pseudolobules are separated by hypocellular edematous, collagenous, or occasionally myxoid stroma.",
      "Prominent thin-walled, branching, hemangiopericytoma-like vessels are characteristic.",
      "The immunophenotype supports sex cord-stromal differentiation.",
    ],
    histology: [
      "Cellular nodules are arranged in a pseudolobular pattern.",
      "Thin-walled, dilated vessels are prominent within and between pseudolobules.",
      "Epithelioid cells have clear to eosinophilic, often vacuolated cytoplasm.",
      "Spindle cells are admixed with epithelioid cells.",
      "Hypocellular intervening stroma is edematous, collagenous, or occasionally myxoid.",
      "Luteinization may be prominent, particularly during pregnancy.",
      "Mitotic activity is usually low but may be increased in a small subset.",
    ],
    ihc: [
      "Inhibin and calretinin support sex cord-stromal differentiation.",
      "SF1 and FOXL2 are commonly expressed.",
      "Cytokeratins and EMA are typically negative.",
    ],
    differential: [
      {
        name: "Ovarian fibroma",
        distinction:
          "Shows uniform intersecting fascicles of bland spindle cells and collagenous stroma without the characteristic pseudolobular pattern and prominent vascularity.",
      },
      {
        name: "Juvenile granulosa cell tumor",
        distinction:
          "Shows irregular follicles and primitive granulosa cells rather than the characteristic pseudolobular, vascular pattern.",
      },
      {
        name: "Sertoli-Leydig cell tumor",
        distinction:
          "Shows Sertoli cell tubules or cords with Leydig cells; androgenic manifestations and DICER1 alterations may support this diagnosis.",
      },
    ],
    molecular: [
      "GLI2 rearrangements occur in more than 80% of cases; FHL2::GLI2 is a recurrent fusion. This finding can support the diagnosis in difficult cases.",
    ],
    pitfalls: [
      "Prominent vascularity and vacuolated cells may mimic other ovarian stromal or perivascular tumors; interpret the complete pseudolobular architecture and sex cord markers.",
    ],
  },
  {
    name: "Juvenile Granulosa Cell Tumor of the Ovary",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Primitive granulosa cells in diffuse or nodular growth with irregular follicles; nuclei lack the grooves typical of adult-type granulosa cell tumor.",
    summary:
      "A sex cord-stromal tumor composed of primitive granulosa cells arranged in solid and follicular patterns, usually arising in children and young women.",
    clinical: [
      "Usually occurs in the first three decades; mean age is approximately 13 years, and about half of patients are prepubertal.",
      "Arises in the ovary and is overwhelmingly unilateral.",
      "Often presents as a pelvic mass; estrogenic effects may cause precocious pseudopuberty or menstrual disturbance.",
      "Virilization and tumor rupture with hemoperitoneum are less common presentations.",
    ],
    criteria: [
      "Primitive granulosa cells show diffuse or nodular growth.",
      "Irregularly shaped follicles of variable size are interspersed within the tumor.",
      "Follicles may contain basophilic secretions and are lined by variable numbers of tumor-cell layers.",
      "Tumor cells have round, vesicular, non-grooved nuclei.",
      "Sex cord-stromal immunomarkers support the diagnosis.",
      "Do not require a FOXL2 mutation; the characteristic adult-type FOXL2 p.C134W mutation is not a defining feature.",
    ],
    histology: [
      "Growth is diffuse, nodular, or mixed.",
      "Follicles are irregular in shape and variable in size.",
      "Follicular lumina often contain basophilic secretions.",
      "Tumor cells have round vesicular nuclei without the longitudinal grooves typical of adult granulosa cell tumor.",
      "Cytoplasm is usually abundant and pale or eosinophilic.",
      "Nuclear atypia and mitotic activity are variable.",
      "The stroma may be inconspicuous, sclerotic, or myxoid.",
      "Luteinized or spindle-shaped theca cells may be present.",
    ],
    ihc: [
      "SF1, inhibin, and calretinin commonly support sex cord-stromal differentiation.",
      "WT1, CD99, and CD56 are often positive.",
      "FOXL2 immunoreactivity may occur but does not establish an adult-type granulosa cell tumor.",
    ],
    differential: [
      {
        name: "Adult-type granulosa cell tumor",
        distinction:
          "Typically shows grooved coffee-bean nuclei, microfollicular Call-Exner bodies, and a FOXL2 c.402C>G (p.C134W) mutation; juvenile tumors have round nongrooved nuclei and irregular follicles.",
      },
      {
        name: "Sertoli-Leydig cell tumor",
        distinction:
          "Shows Sertoli cell tubules, cords, or sheets with Leydig cells; retiform architecture and DICER1 mutation support this entity.",
      },
      {
        name: "Sclerosing stromal tumor",
        distinction:
          "Has pseudolobules, prominent hemangiopericytoma-like vessels, and alternating cellular and hypocellular zones.",
      },
      {
        name: "Gynandroblastoma",
        distinction:
          "Contains distinct or admixed Sertoli-Leydig and juvenile granulosa cell tumor components rather than a pure juvenile granulosa cell tumor.",
      },
    ],
    molecular: [
      "Activating AKT1 alterations occur in approximately 60% and GNAS alterations in approximately 30% of tumors.",
      "Somatic mosaic IDH1 or IDH2 mutations may be present in tumors associated with Ollier disease or Maffucci syndrome.",
      "Somatic DICER1 mutations are rare; germline predisposition testing may be considered when clinical features suggest a syndrome.",
    ],
    pitfalls: [
      "Do not diagnose adult-type granulosa cell tumor based on FOXL2 immunostaining alone; morphology and, when needed, FOXL2 mutation testing are more discriminating.",
      "Assess rupture, positive peritoneal cytology, and extraovarian spread because these affect recurrence risk.",
    ],
  },
  {
    name: "Sex Cord Tumor with Annular Tubules",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Rounded nests of ring-like tubules surrounding hyaline basement membrane-like material; tall cells show antipodal nuclear orientation.",
    summary:
      "A sex cord-stromal tumor defined by simple or complex annular tubules surrounding basement membrane-like material; it may be associated with Peutz-Jeghers syndrome.",
    clinical: [
      "Can occur at any age.",
      "Arises in the ovary; Peutz-Jeghers syndrome-associated lesions are often bilateral, multifocal, and small.",
      "Approximately one third of cases are associated with Peutz-Jeghers syndrome; non-syndromic tumors are usually unilateral.",
      "May be incidental; estrogenic effects can cause precocious pseudopuberty or menstrual disturbance.",
    ],
    criteria: [
      "Tumor is composed of rounded nests of simple or complex ring-like tubules.",
      "Tubules encircle central hyaline basement membrane-like material.",
      "Tumor cells are tall, with pale cytoplasm and basally located round nuclei.",
      "Nuclei show an antipodal arrangement within the tubules.",
      "Correlate with clinical features of Peutz-Jeghers syndrome, especially in bilateral or multifocal lesions.",
    ],
    histology: [
      "Rounded nests contain simple or complex annular tubules.",
      "Hyaline basement membrane-like material is encircled by the tubules and may also surround them.",
      "Tall cells have pale cytoplasm and round basally located nuclei.",
      "Nuclei often show antipodal orientation.",
      "Peutz-Jeghers-associated lesions may show intratubular calcification and solid areas of indifferent sex cord cells.",
      "Non-syndromic tumors may show focal granulosa-cell or Sertoli-cell morphology.",
    ],
    ihc: [
      "Calretinin, WT1, inhibin, and SF1 commonly support sex cord-stromal differentiation.",
      "FOXL2 and CD56 are typically positive.",
      "EMA and CD10 are typically negative.",
    ],
    differential: [
      {
        name: "Juvenile granulosa cell tumor",
        distinction:
          "Shows irregular follicles with primitive granulosa cells rather than annular tubules encircling hyaline material.",
      },
      {
        name: "Sertoli-Leydig cell tumor",
        distinction:
          "Shows Sertoli tubules or cords with Leydig cells; annular tubules and antipodal nuclei are not the defining pattern.",
      },
      {
        name: "Gynandroblastoma",
        distinction:
          "Contains a composite Sertoli-Leydig and granulosa-cell component rather than a uniform annular-tubule pattern.",
      },
      {
        name: "Ovarian fibroma",
        distinction:
          "Is composed predominantly of bland spindle cells in collagenous stroma and lacks annular tubules.",
      },
    ],
    molecular: [
      "Peutz-Jeghers syndrome-associated tumors are linked to germline STK11 alterations. SCTAT is not associated with DICER1 mutations.",
    ],
    pitfalls: [
      "Syndromic and non-syndromic tumors may differ in size, laterality, and behavior; document the clinical context.",
    ],
  },
  {
    name: "Papillary Cystadenoma",
    group: "Ovarian and Paraovarian Epithelial/ Mesonephric-Type Tumors",
    clue: "Benign cystic or lobulated mass with complex tubulopapillary growth of nonciliated cuboidal cells; often associated with von Hippel-Lindau syndrome.",
    summary:
      "A benign papillary-cystic neoplasm, usually arising in the uterine ligaments, with features suggesting mesonephric origin and a strong association with von Hippel-Lindau syndrome.",
    clinical: [
      "Reported predominantly in adults older than 20 years; pediatric cases are exceptional.",
      "Usually arises in the uterine ligaments rather than the ovary proper.",
      "Most patients have von Hippel-Lindau syndrome.",
      "May cause abdominal pain or be detected incidentally.",
    ],
    criteria: [
      "A cystic or lobulated mass is present.",
      "Complex tubulopapillary architecture is formed by nonciliated cuboidal epithelial cells.",
      "Stromal hyalinization and prominent subepithelial vessels may be present.",
      "The immunophenotype supports mesonephric-type differentiation.",
      "Consider germline VHL assessment in the appropriate clinical setting.",
    ],
    histology: [
      "Complex tubulopapillary structures show broad-based and delicate branching papillae.",
      "Stromal hyalinization is often prominent.",
      "Focal tubular or solid growth may occur.",
      "The lining cells are nonciliated and cuboidal with scant clear-to-eosinophilic cytoplasm.",
      "Prominent subepithelial blood vessels are common.",
    ],
    ihc: [
      "CK7 and PAX8 are commonly positive.",
      "PAX2 and CD10 support mesonephric-type differentiation.",
      "WT1 and calretinin are variably positive.",
      "ER and PR are typically negative.",
    ],
    differential: [
      {
        name: "Müllerian papilloma",
        distinction:
          "Is a mucosal papillary lesion lined by bland cuboidal or columnar Müllerian epithelium, usually in the cervix or vagina; papillary cystadenoma is a cystic/lobulated ligament-associated mass with mesonephric phenotype.",
      },
      {
        name: "Mesonephric remnants and hyperplasia",
        distinction:
          "Consist of small bland tubules, usually in the lateral cervical wall, without the complex cystic and tubulopapillary mass-forming pattern.",
      },
    ],
    molecular: [
      "Allelic loss or germline mutation of VHL may support the diagnosis, particularly in patients with von Hippel-Lindau syndrome.",
    ],
    pitfalls: [
      "Confirm the anatomic site: this lesion is typically ligament-associated, not a conventional ovarian epithelial cystadenoma.",
    ],
  },
  {
    name: "Sertoli-Leydig Cell Tumor",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Admixture of Sertoli-cell and Leydig-cell components; classify differentiation and assess for retiform or heterologous elements.",
    summary:
      "A sex cord-stromal tumor composed of variable proportions of Sertoli and Leydig cells, with well-, moderately, and poorly differentiated forms and recognized retiform and heterologous patterns.",
    clinical: [
      "Occurs across a wide age range; pediatric patients have a median age of approximately 14 years.",
      "Arises in the ovary and is usually unilateral.",
      "Often presents with pelvic pain or a mass; androgenic manifestations such as hirsutism, clitoromegaly, menstrual irregularity, or amenorrhea occur in about half of patients.",
      "Most pediatric cases are moderately or poorly differentiated and may show retiform or heterologous elements.",
    ],
    criteria: [
      "Identify Sertoli-cell and Leydig-cell components within a sex cord-stromal tumor.",
      "Grade as well, moderately, or poorly differentiated based on Sertoli-cell tubular differentiation and cytologic features.",
      "Search for retiform architecture, particularly in younger patients.",
      "Document heterologous elements, especially mucinous epithelium or mesenchymal differentiation.",
      "Use sex cord markers to support lineage and consider DICER1 testing, particularly in pediatric cases.",
    ],
    histology: [
      "Well-differentiated tumors contain open or compressed Sertoli-cell tubules with minimal atypia and low mitotic activity.",
      "Leydig cells occur singly, in clusters, or in cords and may contain lipofuscin or Reinke crystals.",
      "Moderately differentiated tumors show compressed tubules, cords, or diffuse sheets of Sertoli cells with mild-to-moderate atypia.",
      "Poorly differentiated tumors consist of diffuse sheets of immature sarcomatoid Sertoli cells with conspicuous mitoses.",
      "Retiform areas form anastomosing slit-like spaces, sieve-like cysts, or papillary structures.",
      "Heterologous elements may include intestinal- or gastric-type mucinous epithelium, cartilage, skeletal muscle, neuroendocrine tissue, or hepatocyte-like cells.",
    ],
    ihc: [
      "Sertoli cells commonly express inhibin, calretinin, SF1, WT1, and FOXL2.",
      "Vimentin and pancytokeratin may be positive in Sertoli cells.",
      "CK7 and EMA are typically negative, helping distinguish the tumor from epithelial ovarian neoplasms.",
      "Leydig cells typically express inhibin and melan-A, with little or no FOXL2 and WT1.",
    ],
    differential: [
      {
        name: "Juvenile granulosa cell tumor",
        distinction:
          "Shows irregular follicles and primitive granulosa cells without a convincing Sertoli-Leydig cell admixture; SLCT often has androgenic manifestations and DICER1 alterations.",
      },
      {
        name: "Gynandroblastoma",
        distinction:
          "Contains both Sertoli-Leydig and juvenile granulosa cell tumor components; identify the distinct granulosa-cell component.",
      },
      {
        name: "Sclerosing stromal tumor",
        distinction:
          "Shows pseudolobules and prominent hemangiopericytoma-like vessels rather than Sertoli tubules and Leydig cells.",
      },
      {
        name: "Sex cord tumor with annular tubules",
        distinction:
          "Shows annular tubules surrounding hyaline basement membrane-like material and antipodal nuclei.",
      },
    ],
    molecular: [
      "DICER1 RNase IIIb hotspot missense mutations are frequent, particularly in moderately and poorly differentiated pediatric tumors.",
      "A subset of tumors has FOXL2 c.402C>G (p.C134W); this molecular subtype is associated with older/postmenopausal patients.",
      "Pediatric patients should be considered for germline DICER1 evaluation and genetic counseling when appropriate.",
    ],
    pitfalls: [
      "Do not overlook small Leydig-cell clusters in moderately differentiated tumors.",
      "Retiform architecture and heterologous elements should be specifically documented because they may affect prognosis.",
    ],
  },
  {
    name: "Gynandroblastoma",
    group: "Ovarian Sex Cord-Stromal Tumors",
    clue: "Composite sex cord-stromal tumor with both Sertoli-Leydig cell tumor and granulosa-cell tumor components, commonly juvenile granulosa cell type.",
    summary:
      "A rare composite ovarian sex cord-stromal tumor containing Sertoli-Leydig cell tumor and granulosa-cell tumor elements.",
    clinical: [
      "Reported age range is approximately 13–80 years, with a median in the mid-to-late twenties.",
      "Arises in the ovary and is usually unilateral.",
      "May present with abdominal pain, distension, or androgenic symptoms.",
      "Most reported tumors are low stage at diagnosis.",
    ],
    criteria: [
      "Demonstrate both Sertoli-Leydig cell tumor and granulosa-cell tumor components.",
      "Identify Sertoli-cell areas, Leydig cells, and a distinct granulosa-cell component with follicular structures.",
      "Specify whether the granulosa-cell component is juvenile or adult type.",
      "Use immunohistochemistry and molecular testing to characterize the components when morphology is ambiguous.",
      "Do not classify as gynandroblastoma when only heterologous differentiation is present in an otherwise typical Sertoli-Leydig cell tumor.",
    ],
    histology: [
      "Sertoli-cell areas form solid lobules, nests, or cords.",
      "Leydig cells occur in small clusters and have abundant eosinophilic cytoplasm.",
      "Granulosa-cell areas form pale nodules with small cell clusters and follicles of variable size.",
      "Juvenile granulosa-cell areas may contain follicles with pink or basophilic flocculent material.",
      "The relative proportions of the two components vary.",
    ],
    ihc: [
      "Both components may express sex cord markers including inhibin, calretinin, and SF1.",
      "Interpret FOXL2 in conjunction with morphology and mutation status; immunoreactivity alone does not establish adult granulosa-cell differentiation.",
      "Component-directed staining may help map Sertoli, Leydig, and granulosa-cell areas.",
    ],
    differential: [
      {
        name: "Sertoli-Leydig cell tumor",
        distinction:
          "May show heterologous elements and varied architecture, but lacks a distinct juvenile or adult granulosa-cell tumor component.",
      },
      {
        name: "Juvenile granulosa cell tumor",
        distinction:
          "Lacks a convincing Sertoli-Leydig component with Sertoli tubules/cords and Leydig cells.",
      },
      {
        name: "Sex cord tumor with annular tubules",
        distinction:
          "Shows annular tubules encircling hyaline material rather than a composite Sertoli-Leydig and granulosa-cell pattern.",
      },
    ],
    molecular: [
      "A subset of tumors with Sertoli-Leydig and juvenile granulosa-cell components harbors DICER1 RNase IIIb hotspot mutations in both components.",
      "Most reported tumors with an adult granulosa-cell component are FOXL2 wildtype, unlike conventional adult-type granulosa cell tumors, which commonly harbor FOXL2 c.402C>G (p.C134W).",
    ],
    pitfalls: [
      "Extensively sample the tumor to identify both components.",
      "Distinguish a true granulosa-cell tumor component from focal heterologous or nonspecific follicle-like differentiation.",
    ],
  },
  {
    name: "Small Cell Carcinoma of the Ovary, Hypercalcemic Type",
    group: "Other Ovarian Tumors",
    clue: "Aggressive undifferentiated ovarian tumor, usually composed of monomorphic small cells with follicle-like spaces; typically SMARCA4-deficient.",
    summary:
      "A highly aggressive ovarian carcinoma occurring predominantly in adolescents and young adults, characterized by small-cell morphology, frequent hypercalcemia, and loss of SWI/SNF complex proteins.",
    clinical: [
      "Almost exclusively affects adolescents and young adults, although older patients can be affected.",
      "Arises in the ovary and is usually unilateral and large.",
      "Often presents with a pelvic or abdominal mass and hypercalcemia; serum calcium may be normal in a minority.",
      "A substantial proportion of young patients have a germline SMARCA4 pathogenic variant.",
    ],
    criteria: [
      "Undifferentiated ovarian tumor is composed predominantly of monomorphic small cells.",
      "Follicle-like spaces containing eosinophilic or basophilic secretions are often present.",
      "A large-cell component may be present; when predominant, classify as the large-cell subtype.",
      "Demonstrate loss of SMARCA4 and/or SMARCA2 in tumor cells with retained internal controls.",
      "Correlate with serum calcium and consider germline SMARCA4 testing, particularly in young patients.",
    ],
    histology: [
      "Tumor cells grow in sheets, nests, cords, and trabeculae with scant intervening stroma.",
      "Small cells have round, ovoid, or occasionally spindle-shaped nuclei, fine or vesicular chromatin, small nucleoli, and scant cytoplasm.",
      "Follicle-like spaces with eosinophilic or basophilic secretions are common.",
      "Mitotic activity is brisk.",
      "Large cells may have eccentric nuclei, prominent nucleoli, and abundant eosinophilic cytoplasm with a rhabdoid appearance.",
      "Focal mucinous differentiation may occur.",
      "Rare tumors contain teratomatous or yolk sac tumor-like foci.",
    ],
    ihc: [
      "SMARCA4 (BRG1) expression is lost in almost all tumors.",
      "SMARCA2 (BRM) is also commonly lost.",
      "WT1 is often diffusely positive.",
      "Epithelial markers, CD10, and calretinin are variably expressed.",
      "SALL4 may be positive; OCT3/4, inhibin, and TTF1 are typically negative.",
    ],
    differential: [
      {
        name: "Malignant rhabdoid tumor",
        distinction:
          "May share SWI/SNF deficiency and rhabdoid morphology; integrate ovarian site, clinical setting, SMARCA4/SMARCA2 profile, and broader molecular findings.",
      },
      {
        name: "Yolk sac tumor",
        distinction:
          "Usually expresses SALL4 and often shows characteristic reticular/microcystic or other yolk sac patterns; SMARCA4 loss supports hypercalcemic-type small cell carcinoma.",
      },
      {
        name: "Dysgerminoma",
        distinction:
          "Shows large cells with clear cytoplasm and lymphocyte-rich septa and is typically positive for OCT3/4 and SALL4.",
      },
      {
        name: "Juvenile granulosa cell tumor",
        distinction:
          "Shows sex cord differentiation with irregular follicles and usually expresses inhibin and SF1; SMARCA4 loss is not typical.",
      },
      {
        name: "Poorly differentiated Sertoli-Leydig cell tumor",
        distinction:
          "Usually retains sex cord marker expression and may show DICER1 alterations; assess for Sertoli/Leydig differentiation.",
      },
    ],
    molecular: [
      "Inactivating SMARCA4 mutations occur in almost all tumors.",
      "SMARCA2 loss may accompany SMARCA4 deficiency.",
      "Germline SMARCA4 variants are clinically important because of rhabdoid tumor predisposition syndrome.",
    ],
    pitfalls: [
      "A normal serum calcium level does not exclude the diagnosis.",
      "SALL4 positivity can occur and should not by itself lead to a diagnosis of germ cell tumor.",
      "Use internal non-neoplastic cells as controls when interpreting loss of SMARCA4 or SMARCA2.",
    ],
  },
  {
    name: "Mesonephric Remnants and Hyperplasia",
    group: "Lower Female Genital Tract Benign Epithelial Lesions",
    clue: "Small bland tubules with dense eosinophilic intraluminal secretions, typically in the lateral cervical wall.",
    summary:
      "Embryonic mesonephric duct remnants and their benign proliferations, most often encountered incidentally in the lateral wall of the uterine cervix.",
    clinical: [
      "Usually identified in adults as an incidental microscopic finding; can occur in patients of any age.",
      "Most often located in the lateral cervical wall; may occur along the lateral urogenital tract.",
      "Usually asymptomatic; hyperplasia rarely presents as abnormal cervical cytology or cervical wall expansion.",
      "Mesonephric remnants are relatively common and may be present in up to 20% of cervixes.",
    ],
    criteria: [
      "Small-to-medium tubules are lined by bland cuboidal cells with scant eosinophilic cytoplasm.",
      "Round-to-ovoid nuclei are bland, and mitoses are inconspicuous.",
      "Dense eosinophilic, often PAS-positive intraluminal secretions are characteristic.",
      "The typical location is the lateral wall of the cervix, vagina, or uterus.",
      "Hyperplasia shows a more extensive proliferation of otherwise similar mesonephric tubules.",
    ],
    histology: [
      "Tubules occur in clusters or linear arrays.",
      "The lining cells are cuboidal with scant eosinophilic cytoplasm.",
      "Nuclei are round to ovoid with fine chromatin.",
      "Dense eosinophilic PAS-positive intraluminal secretions are usually present.",
      "Lobular hyperplasia is most common; diffuse, ductal, and mixed patterns also occur.",
      "Ductal hyperplasia may show cleft-like spaces and associated peripheral tubules.",
    ],
    ihc: [
      "CD10 often highlights the luminal/apical surface.",
      "GATA3 and PAX8 are frequently positive.",
      "Calretinin and TTF1 may be positive.",
      "ER, PR, and p16 are typically negative.",
    ],
    differential: [
      {
        name: "Müllerian papilloma",
        distinction:
          "Shows branching papillae lined by bland Müllerian epithelium rather than small mesonephric tubules with eosinophilic secretions.",
      },
      {
        name: "Papillary cystadenoma",
        distinction:
          "Forms a cystic/lobulated mass with complex tubulopapillary growth, often in the uterine ligaments and associated with VHL syndrome.",
      },
      {
        name: "Mesonephric adenocarcinoma",
        distinction:
          "Shows infiltrative malignant glands, cytologic atypia, and often destructive growth; benign remnants/hyperplasia lack invasion and significant atypia.",
      },
    ],
    molecular: [
      "No molecular test is routinely required for diagnosis; molecular testing is not clinically relevant in typical remnants or hyperplasia.",
    ],
    pitfalls: [
      "In a cervical biopsy, distinguish benign mesonephric tubules from mesonephric adenocarcinoma by assessing atypia, infiltrative growth, and destructive invasion.",
    ],
  },
  {
    name: "Müllerian Papilloma",
    group: "Lower Female Genital Tract Benign Epithelial Lesions",
    clue: "Benign branching papillae with fibrovascular cores lined by bland cuboidal or columnar Müllerian epithelium.",
    summary:
      "A benign papillary lesion of the cervix or vagina, most often seen in prepubertal girls and unrelated to HPV infection.",
    clinical: [
      "Typically occurs in prepubertal girls aged 2–5 years; reported age range extends from infancy to young adulthood.",
      "Arises in the cervix and/or vagina; some vaginal lesions are intramural.",
      "Most patients present with vaginal bleeding.",
      "May appear as a friable mucosal polyp or, when intramural, a solid-cystic vaginal wall mass.",
    ],
    criteria: [
      "Papillary architecture with branching fibrovascular cores is present.",
      "Papillae are lined by bland cuboidal or columnar epithelium.",
      "Cytologic atypia and significant mitotic activity are absent.",
      "There is no stromal atypia or cambium layer.",
      "The lesion is not associated with HPV infection.",
    ],
    histology: [
      "Branching papillae contain fibrovascular stromal cores.",
      "The lining epithelium is cuboidal or columnar and resembles Müllerian epithelium.",
      "Nuclei are bland with fine chromatin.",
      "Hobnail morphology and cytologic atypia are absent.",
      "Mitoses are usually absent.",
      "Squamous metaplasia may be present.",
      "Stromal atypia or a cambium layer should prompt evaluation for embryonal rhabdomyosarcoma.",
    ],
    ihc: [
      "The lining epithelium expresses Müllerian epithelial markers such as cytokeratins.",
      "Interpret immunostains in conjunction with the benign papillary morphology; no specific immunophenotype is required for diagnosis.",
    ],
    differential: [
      {
        name: "Condyloma acuminatum",
        distinction:
          "Shows squamous papillomatosis, acanthosis, and koilocytosis associated with HPV rather than bland Müllerian-type glandular epithelium.",
      },
      {
        name: "Mesonephric remnants and hyperplasia",
        distinction:
          "Consist of bland tubules with eosinophilic secretions, usually in the lateral cervical wall, without branching papillary fibrovascular cores.",
      },
      {
        name: "Embryonal rhabdomyosarcoma",
        distinction:
          "Shows malignant stromal cells and often a cambium layer; Müllerian papilloma has bland stroma without atypia.",
      },
    ],
    molecular: [
      "No diagnostic molecular alteration is established; molecular testing is not clinically relevant.",
    ],
    pitfalls: [
      "Do not mistake the lesion for condyloma based on papillary architecture alone; identify the epithelial lineage and assess for koilocytosis.",
      "A cambium layer or stromal atypia is not a feature of Müllerian papilloma.",
    ],
  },
  {
    name: "Condyloma Acuminatum",
    group: "Lower Female Genital Tract Benign Epithelial Lesions",
    clue: "Exophytic squamous papillomatosis with acanthosis and koilocytosis, usually associated with low-risk HPV types 6 and 11.",
    summary:
      "A benign HPV-associated verrucous papillary lesion of anogenital skin and mucosa, including the lower female genital tract.",
    clinical: [
      "Occurs in children, adolescents, and adults; HPV infection is common in young women.",
      "Involves anogenital skin and mucosa, including the vulva, vagina, and cervix.",
      "Often asymptomatic and detected as one or more papillary or verrucous lesions.",
      "In children, transmission may be sexual or nonsexual; histology alone cannot establish the route of transmission.",
    ],
    criteria: [
      "Squamous epithelium shows acanthosis and papillomatosis with papillary architecture.",
      "Koilocytic atypia is present to a variable degree.",
      "Hyperkeratosis and/or parakeratosis may be present.",
      "Low-risk HPV, particularly types 6 and 11, is commonly implicated.",
      "Block-type p16 staining should prompt evaluation for high-grade squamous intraepithelial lesion rather than routine condyloma.",
    ],
    histology: [
      "The epithelium shows acanthosis, papillomatosis, and thickened rete ridges.",
      "Hyperkeratosis and parakeratosis are variable.",
      "Koilocytes show nuclear enlargement, hyperchromasia, irregular nuclear membranes, and perinuclear halos.",
      "Basal/parabasal-like proliferation is generally limited to the lower third of the epithelium in LSIL-pattern lesions.",
      "Mitoses are generally confined to the lower epithelial zone.",
      "Immature papillary squamous metaplasia may occur.",
      "Marked basal atypia or abnormal mitotic figures should raise concern for HSIL.",
    ],
    ihc: [
      "p16 is generally non-block or patchy in low-grade condylomatous lesions.",
      "Block-positive p16 involving a substantial contiguous epithelial thickness supports HSIL in the appropriate morphologic context.",
    ],
    differential: [
      {
        name: "Müllerian papilloma",
        distinction:
          "Is lined by bland cuboidal or columnar Müllerian epithelium over fibrovascular cores; condyloma is a squamous lesion with acanthosis and koilocytosis.",
      },
      {
        name: "High-grade squamous intraepithelial lesion",
        distinction:
          "Shows marked basal/parabasal atypia, increased N:C ratio through a greater epithelial thickness, abnormal mitoses, and often block-positive p16.",
      },
      {
        name: "Verrucous squamous carcinoma",
        distinction:
          "Shows broad pushing invasive fronts and destructive stromal invasion; condyloma lacks invasion.",
      },
    ],
    molecular: [
      "Low-risk HPV types 6 and 11 are most commonly associated with condyloma acuminatum.",
      "HPV typing by sequencing may be useful in selected cases; HPV genome generally remains episomal in condyloma.",
    ],
    pitfalls: [
      "Histology cannot reliably distinguish sexually transmitted anogenital HPV types from common cutaneous wart types, particularly in children.",
      "A block-positive p16 pattern is not typical of simple condyloma and should prompt assessment for HSIL.",
    ],
  },
  {
    name: "Peritoneal Inclusion Cyst",
    group: "Peritoneal Mesothelial Lesions",
    clue: "One or more cysts lined by bland mesothelial cells, without invasion; BAP1 expression is retained.",
    summary:
      "A benign mesothelial-lined cystic lesion of the peritoneum, sometimes congenital and sometimes reactive to surgery, inflammation, or hemorrhage.",
    clinical: [
      "Occurs from the prenatal period through adolescence; there is a slight female predominance.",
      "Usually arises in the peritoneum but may involve the spleen, liver, or testis.",
      "May be incidental or present with abdominal/pelvic pain, distension, or an inguinal hernia.",
      "Some cases are associated with prior surgery, inflammation, bleeding, or developmental abnormalities.",
    ],
    criteria: [
      "Single or multiple unilocular or multilocular cysts are lined by bland mesothelial cells.",
      "No destructive invasion into adjacent tissue is present.",
      "Septa consist of fibroconnective tissue without smooth muscle bundles.",
      "Mesothelial markers support the diagnosis.",
      "Retained BAP1 expression is typical; interpret in the context of morphology and internal controls.",
    ],
    histology: [
      "Cysts are lined by a single layer of flat or cuboidal mesothelial cells.",
      "Reactive or metaplastic changes, including hobnail cells, may occur.",
      "Adenomatoid areas may be present.",
      "Septa are composed of fibroconnective tissue without smooth muscle bundles.",
      "Destructive invasion is absent.",
    ],
    ihc: [
      "Calretinin and CK5/6 support mesothelial differentiation.",
      "PAX8, ER, and PR may be variably positive.",
      "BAP1 expression is retained.",
    ],
    differential: [
      {
        name: "Multicystic mesothelioma",
        distinction:
          "The term is historically used for overlapping lesions; classify according to current terminology and carefully exclude atypia, invasion, and features of malignant mesothelioma.",
      },
      {
        name: "Lymphatic malformation",
        distinction:
          "Shows endothelial-lined spaces and expresses endothelial markers such as ERG and CD31 rather than mesothelial markers.",
      },
      {
        name: "Cystic metastatic or primary epithelial neoplasm",
        distinction:
          "Shows epithelial atypia or tumor-specific epithelial markers and may demonstrate destructive invasion; peritoneal inclusion cysts are lined by bland mesothelium.",
      },
    ],
    molecular: [
      "CDKN2A (p16) deletion is not identified by FISH in typical peritoneal inclusion cysts; molecular testing is not routinely required.",
    ],
    pitfalls: [
      "Do not use the discouraged term benign cystic mesothelioma as a synonym in the diagnostic heading.",
      "Careful sampling is required to exclude an atypical or invasive mesothelial neoplasm.",
    ],
  },
];

const peerDifferentials: Record<string, string> = {
  "Ovarian Fibroma":
    "Compare the dominant spindle-cell fascicles, collagen content, and absence of a defining sex cord pattern.",
  "Sclerosing Stromal Tumor":
    "Look for pseudolobules, alternating cellularity, and prominent thin-walled vessels.",
  "Juvenile Granulosa Cell Tumor of the Ovary":
    "Look for primitive granulosa cells and irregular follicles; assess for estrogenic manifestations.",
  "Sex Cord Tumor with Annular Tubules":
    "Look for annular tubules encircling hyaline basement membrane-like material and antipodal nuclei.",
  "Sertoli-Leydig Cell Tumor":
    "Look for Sertoli-cell tubules/cords and Leydig cells; assess differentiation, retiform pattern, and DICER1 status.",
  Gynandroblastoma:
    "Requires a composite Sertoli-Leydig and granulosa-cell tumor pattern.",
  "Papillary Cystadenoma":
    "A ligament-associated cystic/lobulated mass with complex tubulopapillary growth and mesonephric phenotype.",
  "Mesonephric Remnants and Hyperplasia":
    "Small bland tubules with eosinophilic secretions, usually in the lateral cervical wall.",
  "Müllerian Papilloma":
    "Branching fibrovascular papillae lined by bland Müllerian epithelium.",
  "Condyloma Acuminatum":
    "Squamous papillomatosis with acanthosis and koilocytosis, usually HPV-associated.",
};

const overview = entities.map((e) => ({
  name: e.name,
  group: e.group,
  clue: e.clue,
  key: e.criteria.slice(0, 2).join(" "),
}));
const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function FemaleGenitalTractTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
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
          Female Genital Tract Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic overview of pediatric and adolescent non-germ cell tumors
          of the female genital tract, emphasizing sex cord-stromal
          differentiation, defining architecture, immunophenotype, and
          diagnostically relevant molecular alterations.
        </p>
      </header>
      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use the dominant architecture, cell type, anatomic site, and
            defining molecular findings to narrow the differential diagnosis.
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
            <strong>1. Confirm the anatomic compartment.</strong> Separate
            ovarian sex cord-stromal tumors from lower genital tract epithelial
            lesions and peritoneal mesothelial lesions.
          </li>
          <li>
            <strong>2. Identify the dominant architecture.</strong> Look for
            spindle-cell fascicles, pseudolobules, follicles, annular tubules,
            Sertoli tubules, papillae, or squamous papillomatosis.
          </li>
          <li>
            <strong>3. Establish lineage with a focused panel.</strong> Use sex
            cord markers, epithelial markers, mesonephric markers,
            HPV-associated findings, or mesothelial markers as indicated by
            morphology.
          </li>
          <li>
            <strong>4. Apply molecular testing selectively.</strong> Consider
            DICER1, STK11, VHL, SMARCA4/SMARCA2, and GLI2-related alterations
            when they resolve classification or identify a tumor predisposition
            syndrome.
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
          const isOpen = expanded.includes(entity.name);
          const peers = entities.filter(
            (other) =>
              other.group === entity.group && other.name !== entity.name,
          );
          const peerItems = peers.map((p) => ({
            name: p.name,
            distinction: peerDifferentials[p.name] ?? p.clue,
          }));
          const merged = [
            ...entity.differential.filter(
              (d) => !peerItems.some((p) => p.name === d.name),
            ),
            ...peerItems,
          ];
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
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
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
                        {merged.map((d) => (
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
        Diagnostic interpretation should integrate patient age, anatomic site,
        imaging, clinical findings, and adequately sampled tissue. Molecular
        testing is most useful when it resolves a morphologic differential or
        identifies a clinically relevant tumor predisposition syndrome.
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
