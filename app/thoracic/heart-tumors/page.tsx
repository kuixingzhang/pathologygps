"use client";

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
    name: "Papillary Fibroelastoma",
    group: "Benign Cardiac Neoplasms",
    clue: "Small mobile endocardial lesion with branching avascular fibroelastic fronds.",
    profile: [
      "Usually adults aged 60\u201370 years; reported from neonates to older adults.",
      "No clear sex predilection.",
      "Usually arises on a left-sided valve, especially the aortic valve; may involve other endocardial surfaces.",
      "Often incidental; may cause embolic events, syncope, valvular obstruction, or sudden death.",
    ],
    criteria: [
      "Endocardial-based papillary lesion composed of avascular fibroelastic fronds.",
      "Each frond is covered by a single layer of endothelium.",
      "Fibroelastic core is essential; papillary architecture may be obscured by fibrosis or thrombus.",
    ],
    hist: [
      "Delicate, branching papillary fronds have collagenous and elastic cores.",
      "Fronds may be fused by fibrosis or coated by surface thrombus.",
      "Grossly, the lesion may unfurl in fluid into a sea-anemone-like configuration.",
    ],
    ihc: [
      "Surface endothelial cells express CD31, CD34, and factor VIII-related antigen.",
      "S100 may label scattered deeper dendritic cells; it is not a defining marker.",
    ],
    diff: [
      {
        name: "Lambl excrescence",
        distinction:
          "Simple, usually nonbranching filiform strands on the valve closure line; fibroelastoma has more complex branching and may arise away from the closure line.",
      },
      {
        name: "Cardiac myxoma",
        distinction:
          "Myxoma contains stellate or spindle myxoma cells in myxoid matrix; fibroelastoma has avascular fibroelastic fronds and is usually valvular.",
      },
      {
        name: "Infective or nonbacterial thrombotic vegetation",
        distinction:
          "Vegetations are composed of fibrin, platelets, inflammation, and/or organisms rather than orderly endothelial-covered fibroelastic fronds.",
      },
      {
        name: "Valvular calcification",
        distinction:
          "Calcification is mineralized and lacks branching endothelial-covered fronds.",
      },
      {
        name: "Cardiac Fibroma",
        distinction:
          "Bland fibroblasts in dense collagenous stroma, often with microcalcifications and ventricular location.",
      },
      {
        name: "Cardiac Rhabdomyoma",
        distinction:
          "Glycogen-rich cardiac myocytes with spider cells, commonly in infants and associated with TSC1/TSC2.",
      },
      {
        name: "Adult Cellular Rhabdomyoma",
        distinction:
          "Adult-type proliferation of granular eosinophilic mature striated muscle cells without classic spider cells.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
      {
        name: "Lipomatous Hamartoma of the Atrioventricular Valve",
        distinction:
          "Nonencapsulated mature adipose tissue admixed with native AV valve fibroconnective tissue and thin-walled vessels.",
      },
    ],
    molecular: [
      "KRAS exon 2 or 3 driver mutations occur in a subset (reported in up to approximately 80%); testing is not required for diagnosis.",
    ],
    pitfalls: [
      "Do not use 'giant Lambl excrescence' as a synonym when the lesion has complex branching fibroelastic fronds.",
    ],
  },
  {
    name: "Cardiac Myxoma",
    group: "Benign Cardiac Neoplasms",
    clue: "Intracavitary myxoid neoplasm, usually attached to the left atrial side of the fossa ovalis.",
    profile: [
      "Most common in adults in the fourth to seventh decades; may occur at any age.",
      "Approximately twice as common in women as men in sporadic cases.",
      "Usually arises in the left atrium near the fossa ovalis; right atrial, ventricular, and multicentric tumors occur.",
      "May cause obstruction, embolization, constitutional symptoms, or sudden death.",
    ],
    criteria: [
      "Appropriate intracavitary endocardial location, usually with a stalk.",
      "Bland stellate, ovoid, or plump spindle myxoma cells in abundant myxoid stroma.",
      "Perivascular rings or cords of myxoma cells and calretinin reactivity are desirable supportive findings.",
    ],
    hist: [
      "Myxoma cells occur singly or in cords, nests, rings, or perivascular cuffs.",
      "Abundant mucopolysaccharide-rich myxoid matrix is Alcian blue positive.",
      "Hemorrhage, hemosiderin-laden macrophages, Gamna\u2013Gandy bodies, fibrosis, calcification, and thrombosis may occur.",
      "Villiform tumors may be friable and embolize; solid tumors are more smooth and globular.",
    ],
    ihc: [
      "Calretinin is positive in most myxoma cells.",
      "SMA, desmin, S100, synaptophysin, and NSE may show variable staining.",
      "Loss of PRKAR1A expression should prompt evaluation for Carney complex.",
    ],
    diff: [
      {
        name: "Organizing thrombus",
        distinction:
          "Thrombus shows laminated fibrin, organization, and recanalization without characteristic myxoma cells in myxoid matrix; calretinin supports myxoma.",
      },
      {
        name: "Papillary fibroelastoma",
        distinction:
          "Usually valvular with avascular endothelial-covered fibroelastic fronds; myxoma is typically chamber-based with myxoid matrix and myxoma cells.",
      },
      {
        name: "Calcified amorphous tumor",
        distinction:
          "Predominantly calcified nodules in fibrinous material rather than myxoma cells in myxoid stroma.",
      },
      {
        name: "Metastatic adenocarcinoma involving a myxoma",
        distinction:
          "True infiltrative malignant glands with epithelial markers differ from rare bland entrapped or heterotopic glands; correlate clinically.",
      },
      {
        name: "Cardiac fibrin-associated DLBCL",
        distinction:
          "Atypical large B cells are confined to fibrin/thrombus within or on a myxoma rather than forming the myxoma itself.",
      },
      {
        name: "Cardiac Fibroma",
        distinction:
          "Bland fibroblasts in dense collagenous stroma, often with microcalcifications and ventricular location.",
      },
      {
        name: "Cardiac Rhabdomyoma",
        distinction:
          "Glycogen-rich cardiac myocytes with spider cells, commonly in infants and associated with TSC1/TSC2.",
      },
      {
        name: "Adult Cellular Rhabdomyoma",
        distinction:
          "Adult-type proliferation of granular eosinophilic mature striated muscle cells without classic spider cells.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
      {
        name: "Lipomatous Hamartoma of the Atrioventricular Valve",
        distinction:
          "Nonencapsulated mature adipose tissue admixed with native AV valve fibroconnective tissue and thin-walled vessels.",
      },
    ],
    molecular: [
      "PRKAR1A alterations occur in Carney complex-associated tumors and in a subset of sporadic myxomas.",
      "Germline PRKAR1A testing is appropriate when clinical features suggest Carney complex.",
    ],
    pitfalls: [
      "A non-left atrial or multiple myxoma should raise suspicion for Carney complex.",
      "Do not mistake a fibrin-associated lymphoma arising in a myxoma for diffuse lymphoma involving the heart.",
    ],
  },
  {
    name: "Cardiac Fibroma",
    group: "Benign Cardiac Neoplasms",
    clue: "Well-circumscribed, often calcified ventricular mass composed of bland fibroblasts in collagenous stroma.",
    profile: [
      "Approximately 90% occur in children; one third present before age 1 year.",
      "No sex predilection.",
      "Usually involves the ventricular septum or ventricular free wall, more often left than right.",
      "May cause arrhythmia, obstruction, murmur, or heart failure.",
    ],
    criteria: [
      "Nodular collection of bland fibroblasts in variably collagenized stroma.",
      "Ventricular location and microcalcifications are supportive.",
      "Entrapment or infiltration of adjacent cardiac muscle may occur and does not by itself imply malignancy.",
    ],
    hist: [
      "Bland spindle fibroblasts are embedded in dense collagenous or hyalinized stroma.",
      "Cellularity tends to decrease and collagen increase with patient age.",
      "Microcalcifications and elastic fibers may be present.",
      "Adjacent myocardium may be entrapped at the periphery.",
    ],
    ihc: [
      "Lesional cells show myofibroblastic SMA expression.",
      "Desmin is generally absent or limited; interpret in conjunction with morphology.",
    ],
    diff: [
      {
        name: "Cardiac rhabdomyoma",
        distinction:
          "Rhabdomyoma is composed of glycogen-rich myocytes with spider cells and is often multiple; fibroma is collagen-rich and commonly calcified.",
      },
      {
        name: "Hamartoma of mature cardiac myocytes",
        distinction:
          "Hamartoma contains enlarged disorganized striated cardiomyocytes; fibroma is a fibroblastic/collagenous mass.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Hamartoma is a disorganized admixture of multiple mature tissue types rather than a predominantly collagenous fibroblastic nodule.",
      },
      {
        name: "Cardiac leiomyosarcoma",
        distinction:
          "Leiomyosarcoma shows atypical intersecting smooth-muscle fascicles, mitoses, and often necrosis; fibroma is cytologically bland.",
      },
      {
        name: "Papillary Fibroelastoma",
        distinction:
          "Avascular, endothelial-covered branching fibroelastic fronds on an endocardial surface.",
      },
      {
        name: "Cardiac Myxoma",
        distinction:
          "Bland stellate or spindle myxoma cells in abundant myxoid matrix, usually attached near the fossa ovalis.",
      },
      {
        name: "Adult Cellular Rhabdomyoma",
        distinction:
          "Adult-type proliferation of granular eosinophilic mature striated muscle cells without classic spider cells.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
      {
        name: "Lipomatous Hamartoma of the Atrioventricular Valve",
        distinction:
          "Nonencapsulated mature adipose tissue admixed with native AV valve fibroconnective tissue and thin-walled vessels.",
      },
    ],
    molecular: [
      "PTCH1 alterations may occur in sporadic tumors or in the setting of germline PTCH1-associated Gorlin syndrome.",
    ],
    pitfalls: [
      "Myocardial entrapment at the edge of an otherwise bland fibroma is not equivalent to destructive malignant invasion.",
    ],
  },
  {
    name: "Cardiac Rhabdomyoma",
    group: "Benign Cardiac Neoplasms",
    clue: "Most common cardiac tumor of infancy and childhood; often multiple and associated with tuberous sclerosis.",
    profile: [
      "Usually detected prenatally, in infancy, or early childhood.",
      "No consistent sex predilection.",
      "Usually arises in ventricular myocardium; atrial and intracavitary lesions also occur.",
      "May cause arrhythmia, conduction abnormalities, outflow obstruction, or heart failure; many regress spontaneously.",
    ],
    criteria: [
      "Benign proliferation of cardiac striated myocytes with characteristic glycogen-rich spider cells.",
      "Often multiple and associated with tuberous sclerosis complex.",
      "Intramyocardial or intracavitary location and typical imaging support the diagnosis.",
    ],
    hist: [
      "Large polygonal myocytes have clear or vacuolated cytoplasm with radiating strands extending to the cell membrane (spider cells).",
      "Cells may be arranged in sheets or nodules within myocardium.",
      "Glycogen-rich cytoplasm is PAS positive and diastase sensitive.",
      "Regression with age may produce residual fibrous tissue.",
    ],
    ihc: [
      "Desmin, muscle-specific actin, myoglobin, and other skeletal/cardiac muscle markers are positive.",
      "HMB45 and melanocytic markers are not expected; use a focused panel if PEComa is considered.",
    ],
    diff: [
      {
        name: "Cardiac fibroma",
        distinction:
          "Fibroma is collagen-rich with bland fibroblasts and often calcification; rhabdomyoma contains spider cells and glycogen-rich myocytes.",
      },
      {
        name: "Adult cellular rhabdomyoma",
        distinction:
          "Adult cellular rhabdomyoma is a distinct adult-type lesion with granular eosinophilic cells, usually without classic spider cells.",
      },
      {
        name: "Hamartoma of mature cardiac myocytes",
        distinction:
          "Hamartoma shows enlarged bizarre mature myocytes with disorganization and vacuolization, but lacks the characteristic spider-cell population.",
      },
      {
        name: "Conduction system hamartoma",
        distinction:
          "Conduction system hamartoma comprises histiocytoid/Purkinje-type cells tracking along conduction tissue and often involves valve cusps.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Contains multiple mature mesenchymal and cardiac tissue types rather than a relatively uniform rhabdomyocyte proliferation.",
      },
      {
        name: "Papillary Fibroelastoma",
        distinction:
          "Avascular, endothelial-covered branching fibroelastic fronds on an endocardial surface.",
      },
      {
        name: "Cardiac Myxoma",
        distinction:
          "Bland stellate or spindle myxoma cells in abundant myxoid matrix, usually attached near the fossa ovalis.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
      {
        name: "Lipomatous Hamartoma of the Atrioventricular Valve",
        distinction:
          "Nonencapsulated mature adipose tissue admixed with native AV valve fibroconnective tissue and thin-walled vessels.",
      },
    ],
    molecular: [
      "TSC1 or TSC2 loss activates mTORC1 and underlies the association with tuberous sclerosis complex.",
      "Consider germline evaluation when clinical features or family history suggest tuberous sclerosis.",
    ],
    pitfalls: [
      "Do not confuse spontaneous regression with sampling-related disappearance; correlate with age, imaging, and TSC status.",
    ],
  },
  {
    name: "Adult Cellular Rhabdomyoma",
    group: "Benign Cardiac Neoplasms",
    clue: "Rare adult cardiac mass of large granular eosinophilic striated muscle cells, often atrial or ventricular.",
    profile: [
      "Predominantly adults; reported in both sexes.",
      "May arise in atrial or ventricular myocardium.",
      "May be incidental or present with obstruction, arrhythmia, or heart failure.",
    ],
    criteria: [
      "Well-circumscribed or infiltrative proliferation of mature striated muscle cells with abundant granular eosinophilic cytoplasm.",
      "Cells show skeletal/cardiac muscle differentiation and lack the classic spider-cell pattern of childhood rhabdomyoma.",
    ],
    hist: [
      "Large polygonal cells have abundant granular eosinophilic cytoplasm and centrally located nuclei.",
      "Cross-striations may be demonstrable.",
      "Mature muscle cells are arranged in sheets or bundles; cytologic atypia and mitotic activity are not prominent.",
    ],
    ihc: [
      "Desmin, myoglobin, and muscle-specific markers are positive.",
      "Mitochondrial markers may highlight granular cytoplasm.",
    ],
    diff: [
      {
        name: "Cardiac rhabdomyoma",
        distinction:
          "Childhood rhabdomyoma typically shows glycogen-rich spider cells, often multiple and TSC-associated; adult cellular rhabdomyoma has granular eosinophilic cells.",
      },
      {
        name: "Hamartoma of mature cardiac myocytes",
        distinction:
          "Hamartoma shows bizarre enlarged myocytes, disorganized whorls, and interstitial fibrosis rather than a relatively uniform granular-cell proliferation.",
      },
      {
        name: "Cardiac granular cell tumor",
        distinction:
          "Granular cell tumor is S100/SOX10 positive and lacks convincing striated muscle differentiation.",
      },
      {
        name: "Cardiac fibroma",
        distinction:
          "Fibroma is composed of fibroblasts in collagen and lacks myocyte marker expression.",
      },
      {
        name: "Papillary Fibroelastoma",
        distinction:
          "Avascular, endothelial-covered branching fibroelastic fronds on an endocardial surface.",
      },
      {
        name: "Cardiac Myxoma",
        distinction:
          "Bland stellate or spindle myxoma cells in abundant myxoid matrix, usually attached near the fossa ovalis.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
      {
        name: "Lipomatous Hamartoma of the Atrioventricular Valve",
        distinction:
          "Nonencapsulated mature adipose tissue admixed with native AV valve fibroconnective tissue and thin-walled vessels.",
      },
    ],
    molecular: ["No defining recurrent molecular alteration is established."],
    pitfalls: [],
  },
  {
    name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
    group: "Benign Cardiac Neoplasms",
    clue: "Distinguish a circumscribed mature-fat neoplasm from nonencapsulated fat expansion of the atrial septum.",
    profile: [
      "Usually adults; lipomatous hypertrophy is most often recognized in older or overweight adults.",
      "No consistent sex predilection.",
      "Lipoma may occur in any cardiac chamber, myocardium, or pericardium; lipomatous hypertrophy characteristically involves the interatrial septum while sparing the fossa ovalis.",
      "Often incidental; large lesions may cause obstruction or arrhythmia.",
    ],
    criteria: [
      "Lipoma: circumscribed mass of mature adipocytes, usually with a capsule or discrete border.",
      "Lipomatous hypertrophy: nonencapsulated, unencapsulated accumulation of mature and brown fat in the interatrial septum, classically sparing the fossa ovalis and producing a dumbbell configuration.",
      "Exclude atypical stromal cells, lipoblasts, and infiltrative atypical lipomatous tumor/well-differentiated liposarcoma.",
    ],
    hist: [
      "Lipoma consists of mature adipocytes with uniform size and no atypical stromal cells.",
      "Lipomatous hypertrophy shows mature adipose tissue admixed with hypertrophic cardiac myocytes and brown-fat cells.",
      "Lipomatous hypertrophy is nonencapsulated and centered in the atrial septum.",
    ],
    ihc: [
      "S100 highlights adipocytes; desmin and myoglobin highlight admixed cardiomyocytes in lipomatous hypertrophy.",
      "MDM2 and CDK4 should be negative in ordinary lipoma/lipomatous hypertrophy; amplification testing is appropriate if atypical lipomatous tumor is suspected.",
    ],
    diff: [
      {
        name: "Lipomatous hamartoma of the atrioventricular valve",
        distinction:
          "Valve hamartoma contains adipocytes mixed with native valve mesenchymal elements and lacks a capsule; it is localized to an AV valve.",
      },
      {
        name: "Lipoma",
        distinction:
          "A circumscribed, usually encapsulated mature-fat mass contrasts with nonencapsulated septal lipomatous hypertrophy.",
      },
      {
        name: "Well-differentiated liposarcoma",
        distinction:
          "Atypical hyperchromatic stromal cells, lipoblasts, and MDM2 amplification support well-differentiated liposarcoma; these are absent in benign lipomatous lesions.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Contains a heterogeneous mixture of myocardium, vessels, nerves, smooth muscle, and fat rather than predominantly adipose tissue.",
      },
      {
        name: "Papillary Fibroelastoma",
        distinction:
          "Avascular, endothelial-covered branching fibroelastic fronds on an endocardial surface.",
      },
      {
        name: "Cardiac Myxoma",
        distinction:
          "Bland stellate or spindle myxoma cells in abundant myxoid matrix, usually attached near the fossa ovalis.",
      },
      {
        name: "Cardiac Fibroma",
        distinction:
          "Bland fibroblasts in dense collagenous stroma, often with microcalcifications and ventricular location.",
      },
      {
        name: "Cardiac Rhabdomyoma",
        distinction:
          "Glycogen-rich cardiac myocytes with spider cells, commonly in infants and associated with TSC1/TSC2.",
      },
      {
        name: "Adult Cellular Rhabdomyoma",
        distinction:
          "Adult-type proliferation of granular eosinophilic mature striated muscle cells without classic spider cells.",
      },
    ],
    molecular: [
      "Lipomatous hypertrophy may harbor molecular alterations similar to those in lipoma; molecular findings support a clonal process in some cases but are not required for diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Lipomatous Hamartoma of the Atrioventricular Valve",
    group: "Benign Cardiac Neoplasms",
    clue: "Rare nonencapsulated valve lesion composed of mature fat admixed with native atrioventricular valve mesenchymal tissues.",
    profile: [
      "Reported across a wide age range, approximately 2\u201376 years.",
      "No established sex predilection.",
      "Arises in an atrioventricular valve, usually as a localized valvular lesion.",
      "May be incidental or cause valvular dysfunction or obstruction.",
    ],
    criteria: [
      "Mature adipocytes admixed with native AV valve components, including fibroconnective tissue and thin-walled vessels.",
      "Absence of a fibrous capsule is a useful distinguishing feature.",
      "No atypical stromal cells, lipoblasts, or malignant features.",
    ],
    hist: [
      "Mature adipose tissue is intermingled with fibrous connective tissue and thin-walled vasculature native to the valve.",
      "The lesion lacks a discrete fibrous capsule.",
      "Cytologic atypia and mitotic activity are absent.",
    ],
    ihc: [
      "Adipocytes express S100.",
      "Native valve stromal and vascular components show their expected lineage markers; no specific IHC profile is required.",
    ],
    diff: [
      {
        name: "Cardiac lipoma",
        distinction:
          "Lipoma is usually a circumscribed/encapsulated mature-fat neoplasm; lipomatous valve hamartoma is nonencapsulated and contains native valve mesenchymal elements.",
      },
      {
        name: "Lipomatous hypertrophy of the atrial septum",
        distinction:
          "Occurs in the interatrial septum, classically sparing the fossa ovalis, and contains brown fat and hypertrophic cardiomyocytes.",
      },
      {
        name: "Well-differentiated liposarcoma",
        distinction:
          "Shows atypical stromal cells and often MDM2 amplification; these are absent in lipomatous hamartoma.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Shows a broader admixture of cardiac muscle, nerves, smooth muscle, vessels, and adipose tissue, usually in ventricular myocardium.",
      },
      {
        name: "Papillary Fibroelastoma",
        distinction:
          "Avascular, endothelial-covered branching fibroelastic fronds on an endocardial surface.",
      },
      {
        name: "Cardiac Myxoma",
        distinction:
          "Bland stellate or spindle myxoma cells in abundant myxoid matrix, usually attached near the fossa ovalis.",
      },
      {
        name: "Cardiac Fibroma",
        distinction:
          "Bland fibroblasts in dense collagenous stroma, often with microcalcifications and ventricular location.",
      },
      {
        name: "Cardiac Rhabdomyoma",
        distinction:
          "Glycogen-rich cardiac myocytes with spider cells, commonly in infants and associated with TSC1/TSC2.",
      },
      {
        name: "Adult Cellular Rhabdomyoma",
        distinction:
          "Adult-type proliferation of granular eosinophilic mature striated muscle cells without classic spider cells.",
      },
      {
        name: "Cardiac Lipoma and Lipomatous Hypertrophy of the Atrial Septum",
        distinction:
          "Mature adipose lesion; distinguish circumscribed lipoma from nonencapsulated septal fat expansion sparing the fossa ovalis.",
      },
    ],
    molecular: [
      "No clinically useful defining molecular alteration is established.",
    ],
    pitfalls: [],
  },
  {
    name: "Hamartoma of Mature Cardiac Myocytes",
    group: "Cardiac Hamartomatous and Developmental Lesions",
    clue: "Discrete nodular collection of enlarged, disorganized mature cardiomyocytes with vacuolization and bizarre nuclei.",
    profile: [
      "Usually occurs in younger patients; median age approximately 24 years, reported from infancy to 76 years.",
      "Approximately two thirds occur in men.",
      "Usually ventricular; atrial lesions are reported.",
      "Often incidental, but may cause palpitations, syncope, chest pain, arrhythmia, or sudden death.",
    ],
    criteria: [
      "Discrete nodular collection of enlarged, disorganized cardiac myocytes forming a myocardial mass.",
      "Myocytes show striations, sarcoplasmic vacuolization, and nuclear enlargement/atypia without proliferative activity.",
      "Interstitial fibrosis is characteristic.",
    ],
    hist: [
      "Enlarged striated cardiomyocytes are arranged in disorganized whorls or a herringbone-like pattern.",
      "Sarcoplasmic vacuolization and bizarre nuclei are common.",
      "Interstitial fibrosis is present; fat and nerves may be intermixed.",
      "Ki-67 proliferation is very low or absent.",
    ],
    ihc: [
      "Desmin, troponin, actin, and myosin highlight cardiac muscle differentiation.",
      "Ki-67 is very low, supporting a nonproliferative hamartomatous lesion.",
    ],
    diff: [
      {
        name: "Cardiac rhabdomyoma",
        distinction:
          "Rhabdomyoma shows spider cells with glycogen-rich clear cytoplasm, often in infants and with TSC; mature myocyte hamartoma shows enlarged bizarre myocytes and fibrosis.",
      },
      {
        name: "Cardiac fibroma",
        distinction:
          "Fibroma is a fibroblastic collagenous mass and lacks a dominant population of striated myocytes.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Mesenchymal hamartoma contains a complex mixture of multiple mature tissues, not predominantly disorganized hypertrophic cardiomyocytes.",
      },
      {
        name: "Adult cellular rhabdomyoma",
        distinction:
          "Adult cellular rhabdomyoma has uniform granular eosinophilic muscle cells rather than bizarre, vacuolated myocytes in disorganized whorls.",
      },
      {
        name: "Conduction System Hamartoma",
        distinction:
          "Multifocal subendocardial proliferation of histiocytoid/Purkinje-type cells tracking along the cardiac conduction system.",
      },
      {
        name: "Cystic Tumor of the Atrioventricular Node",
        distinction:
          "Endodermal inclusion cyst centered in the atrioventricular septum within the triangle of Koch.",
      },
    ],
    molecular: [
      "No established diagnostic molecular alteration; a nonproliferative profile is characteristic.",
    ],
    pitfalls: [],
  },
  {
    name: "Mesenchymal Cardiac Hamartoma",
    group: "Cardiac Hamartomatous and Developmental Lesions",
    clue: "Benign disorganized admixture of mature cardiac and mesenchymal tissues within ventricular myocardium.",
    profile: [
      "Reported in adults of both sexes; age range is not well defined.",
      "Occurs in ventricular septum and free walls.",
      "May cause dyspnea, fatigue, syncope, ventricular arrhythmia, or sudden death.",
    ],
    criteria: [
      "Admixture of mature cardiac myocytes and multiple mesenchymal components in a disorganized architecture.",
      "Low mitotic activity, absence of necrosis, and lack of significant cytologic atypia support benign behavior.",
    ],
    hist: [
      "Mature cardiomyocytes, smooth muscle, fibroblasts, vessels of varying caliber, nerves, fibrous tissue, and adipose tissue are variably admixed.",
      "Cardiomyocytes may show hypertrophy, myocytolysis, and haphazard arrangement.",
      "Vessels may show intimal myxoid narrowing.",
      "Inflammatory cells may be scattered; necrosis and significant atypia are absent.",
    ],
    ihc: [
      "Desmin, myoglobin, and other muscle markers label cardiomyocytes.",
      "SMA highlights smooth muscle and myofibroblastic components.",
      "CD31 and ERG highlight vascular endothelium; S100/SOX10 may highlight neural elements.",
    ],
    diff: [
      {
        name: "Hamartoma of mature cardiac myocytes",
        distinction:
          "Predominantly enlarged, disorganized cardiomyocytes with vacuolization and fibrosis, without the broad mesenchymal admixture.",
      },
      {
        name: "Cardiac fibroma",
        distinction:
          "Predominantly bland fibroblasts in collagenous stroma, often calcified; lacks the diverse mature tissue components.",
      },
      {
        name: "Cardiac lipoma / lipomatous hypertrophy",
        distinction:
          "Predominantly mature adipose tissue; does not show the complex admixture of myocardium, smooth muscle, vessels, and nerves.",
      },
      {
        name: "Cardiac rhabdomyoma",
        distinction:
          "Glycogen-rich spider cells, often in infants and associated with TSC, rather than a polymorphic mature-tissue hamartoma.",
      },
      {
        name: "Conduction System Hamartoma",
        distinction:
          "Multifocal subendocardial proliferation of histiocytoid/Purkinje-type cells tracking along the cardiac conduction system.",
      },
      {
        name: "Cystic Tumor of the Atrioventricular Node",
        distinction:
          "Endodermal inclusion cyst centered in the atrioventricular septum within the triangle of Koch.",
      },
    ],
    molecular: ["No established diagnostic molecular alteration is known."],
    pitfalls: [],
  },
  {
    name: "Cardiac Hemangiomas",
    group: "Benign Vascular Tumors",
    clue: "Benign vascular tumor with capillary, cavernous, or arteriovenous architecture.",
    profile: [
      "Can occur from fetal life through old age; approximately 10% occur in children and some are diagnosed prenatally or in infancy.",
      "Slight male predominance.",
      "May arise in endocardium, myocardium, or pericardium; ventricular free walls are common, while congenital lesions often involve the right atrium.",
      "Usually incidental; may cause dyspnea, palpitations, arrhythmia, effusion, hemopericardium, or tamponade.",
    ],
    criteria: [
      "Benign proliferation of vascular channels lined by bland endothelial cells.",
      "Recognize capillary, cavernous, and arteriovenous patterns; mixed patterns occur.",
      "No significant endothelial atypia, destructive growth, or atypical mitotic activity.",
    ],
    hist: [
      "Capillary type: small thin-walled vessels clustered around a larger feeder vessel.",
      "Cavernous type: dilated blood-filled vascular spaces separated by fibrous septa.",
      "Arteriovenous type: admixture of thick-walled arteries and veins with intervening vascular channels.",
      "Thrombosis, hemorrhage, and secondary fibrosis may occur.",
    ],
    ihc: [
      "Endothelial cells express CD31, CD34, ERG, and factor VIII-related antigen.",
      "ERG and CD31 are useful to confirm endothelial differentiation.",
    ],
    diff: [
      {
        name: "Cardiac angiosarcoma",
        distinction:
          "Angiosarcoma shows infiltrative anastomosing vascular channels or solid atypical endothelial cells, pleomorphism, mitoses, and often necrosis.",
      },
      {
        name: "Epithelioid hemangioendothelioma",
        distinction:
          "Shows cords/nests of epithelioid endothelial cells in myxohyaline stroma and characteristic molecular fusions; hemangioma is cytologically bland.",
      },
      {
        name: "Papillary fibroelastoma",
        distinction:
          "Endocardial papillary fronds with fibroelastic cores rather than a true vascular proliferation.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Contains multiple mature tissue types, including vessels, myocardium, nerves, and fat, rather than a predominantly vascular neoplasm.",
      },
    ],
    molecular: ["No defining molecular alteration is required for diagnosis."],
    pitfalls: [],
  },
  {
    name: "Conduction System Hamartoma",
    group: "Cardiac Hamartomatous and Developmental Lesions",
    clue: "Multifocal subendocardial proliferation of histiocytoid/Purkinje-type cells tracking along the cardiac conduction system.",
    profile: [
      "Usually presents in infancy; more than 60% are diagnosed in the first year and it is extremely rare after age 2 years.",
      "Female predominance (male-to-female ratio approximately 1:3).",
      "Involves the sinoatrial and atrioventricular conduction systems, predominantly subendocardially; valve cusps may also be involved.",
      "Arrhythmias, conduction abnormalities, sudden death, or presentation initially labeled as sudden infant death syndrome.",
    ],
    criteria: [
      "Collections of pale eosinophilic Purkinje-type cells distributed along the endocardium and cardiac conduction system.",
      "Multifocal distribution and involvement of valve cusps support the diagnosis.",
      "Exclude rhabdomyoma and other histiocytoid lesions.",
    ],
    hist: [
      "Large polygonal histiocytoid cells have granular eosinophilic sarcoplasm containing glycogen and lipid.",
      "Lesional cells are interspersed among conduction system fibers.",
      "Ultrastructurally, abundant abnormal mitochondria displace myofibrils to the cell periphery.",
    ],
    ihc: [
      "Muscle markers including desmin and muscle-specific actin are positive.",
      "Mitochondrial stains may highlight the abundant abnormal mitochondria.",
      "NDUFB11-related immunohistochemical/genetic findings may support selected cases but are not routine.",
    ],
    diff: [
      {
        name: "Cardiac rhabdomyoma",
        distinction:
          "Rhabdomyoma forms discrete myocardial nodules with spider cells and is often TSC-associated; conduction system hamartoma tracks along conduction tissue and may involve valve cusps.",
      },
      {
        name: "Adult cellular rhabdomyoma",
        distinction:
          "Usually an adult mass-forming lesion of granular eosinophilic striated muscle cells, not an infantile conduction-system proliferation.",
      },
      {
        name: "Hamartoma of mature cardiac myocytes",
        distinction:
          "Shows enlarged disorganized striated myocytes with bizarre nuclei and fibrosis rather than histiocytoid Purkinje-type cells along conduction tissue.",
      },
      {
        name: "Mesenchymal cardiac hamartoma",
        distinction:
          "Contains diverse mesenchymal tissues and usually forms a ventricular mass.",
      },
      {
        name: "Cystic Tumor of the Atrioventricular Node",
        distinction:
          "Endodermal inclusion cyst centered in the atrioventricular septum within the triangle of Koch.",
      },
    ],
    molecular: [
      "NDUFB11 or other NDUF-family gene mutations have been reported and may support the diagnosis in selected cases; testing is not widely used clinically.",
    ],
    pitfalls: [],
  },
  {
    name: "Cystic Tumor of the Atrioventricular Node",
    group: "Cardiac Hamartomatous and Developmental Lesions",
    clue: "Endodermal inclusion cyst centered in the atrioventricular septum within the triangle of Koch.",
    profile: [
      "Mean age approximately 38 years; reported from birth to 95 years.",
      "More common in women.",
      "Located in the triangle of Koch/AV septum.",
      "May cause palpitations, syncope, dizziness, partial or complete heart block, or sudden cardiac death.",
    ],
    criteria: [
      "Endodermal inclusion forming a cystic lesion within the atrioventricular septum.",
      "Cyst lining is bland and may be columnar, transitional, or squamous.",
      "No significant cytologic atypia and mitoses are rare.",
    ],
    hist: [
      "Cysts are lined by columnar, transitional, or squamous epithelium; goblet and sebaceous cells may occur.",
      "Lining cells are bland, with rare mitoses.",
      "Mucin is demonstrable by Alcian blue and PAS stains.",
    ],
    ihc: [
      "Cytokeratin AE1/AE3, CK5, and CEA are positive in the epithelial lining.",
      "Scattered cells may express serotonin, chromogranin, or calcitonin.",
      "Mesothelial, endothelial, and lymphatic markers are negative.",
    ],
    diff: [
      {
        name: "Mesothelial cyst",
        distinction:
          "Mesothelial cysts express calretinin, WT1, and D2-40; AV node cyst lining is epithelial and typically cytokeratin/CEA positive.",
      },
      {
        name: "Lymphangioma",
        distinction:
          "Shows endothelial-lined lymphatic spaces with D2-40/ERG positivity rather than epithelial cyst lining.",
      },
      {
        name: "Cardiac myxoma",
        distinction:
          "Myxoma is a solid intracavitary myxoid neoplasm with calretinin-positive myxoma cells, not a bland epithelial cyst.",
      },
      {
        name: "Conduction system hamartoma",
        distinction:
          "Composed of histiocytoid Purkinje cells tracking along conduction tissue, not an epithelial-lined cyst.",
      },
      {
        name: "Hamartoma of Mature Cardiac Myocytes",
        distinction:
          "Nodular enlarged, disorganized striated cardiomyocytes with vacuolization, bizarre nuclei, and interstitial fibrosis.",
      },
      {
        name: "Mesenchymal Cardiac Hamartoma",
        distinction:
          "Benign disorganized admixture of mature cardiac and mesenchymal tissues within ventricular myocardium.",
      },
    ],
    molecular: ["No clinically relevant molecular alteration is established."],
    pitfalls: [],
  },
  {
    name: "Cardiac Angiosarcoma",
    group: "Primary Cardiac Sarcomas",
    clue: "High-grade malignant endothelial tumor, usually arising in the right atrium and often associated with hemorrhagic pericardial effusion.",
    profile: [
      "Usually adults in the fourth to sixth decades; broad reported age range.",
      "More common in men.",
      "Most often arises in the right atrium/atrioventricular groove, with frequent extension into adjacent chambers and pericardium.",
      "Dyspnea, chest pain, syncope, right-sided heart failure, arrhythmia, hemopericardium, or tamponade; metastases often involve lung, liver, brain, and bone.",
    ],
    criteria: [
      "Malignant neoplasm with vascular differentiation demonstrated morphologically and/or immunophenotypically.",
      "Infiltrative vasoformative channels or solid epithelioid/spindle-cell growth with significant atypia.",
      "Endothelial lineage must be established and metastatic angiosarcoma excluded clinically.",
    ],
    hist: [
      "Anastomosing irregular vascular channels lined by pleomorphic hyperchromatic endothelial cells are typical.",
      "Vascular spaces may become slit-like or inconspicuous, producing solid spindle-cell areas.",
      "Epithelioid areas contain plump polygonal cells in cords, nests, or papillae.",
      "Hemorrhage and necrosis are common; biphasic conventional and epithelioid patterns may coexist.",
    ],
    ihc: [
      "CD31 and ERG are the most useful endothelial markers; CD34 and factor VIII-related antigen may also be positive.",
      "Cytokeratin may be expressed, particularly in epithelioid areas, and does not exclude angiosarcoma.",
    ],
    diff: [
      {
        name: "Cardiac hemangioma",
        distinction:
          "Hemangioma has bland endothelial cells and well-formed benign vascular channels without destructive invasion, marked atypia, or necrosis.",
      },
      {
        name: "Epithelioid hemangioendothelioma",
        distinction:
          "Usually has cords/nests of epithelioid cells in myxohyaline stroma and defining fusion; angiosarcoma is more overtly high grade and vasoformative.",
      },
      {
        name: "Metastatic angiosarcoma",
        distinction:
          "Exclude a cutaneous, breast, hepatic, or other primary by clinical history and imaging.",
      },
      {
        name: "Undifferentiated pleomorphic sarcoma",
        distinction:
          "UPS lacks convincing endothelial differentiation; angiosarcoma expresses ERG/CD31 and may show vasoformation.",
      },
      {
        name: "Cardiac leiomyosarcoma",
        distinction:
          "Shows smooth-muscle fascicles and desmin/SMA/h-caldesmon expression rather than endothelial differentiation.",
      },
      {
        name: "Cardiac Undifferentiated Pleomorphic Sarcoma",
        distinction:
          "High-grade pleomorphic spindle/epithelioid sarcoma, usually a left atrial mass, diagnosed only after excluding definable lines of differentiation.",
      },
    ],
    molecular: [
      "No single defining molecular alteration is required for diagnosis.",
      "POT1 alterations have been reported in a subset of familial/Li\u2013Fraumeni-like contexts; assess clinical/family history when appropriate.",
    ],
    pitfalls: [],
  },
  {
    name: "Cardiac Leiomyosarcoma",
    group: "Primary Cardiac Sarcomas",
    clue: "Malignant smooth-muscle tumor, most often arising in the left atrium.",
    profile: [
      "Median age approximately 48 years; reported from infancy to older adulthood.",
      "No sex predilection.",
      "Usually arises from the left atrial free wall; right atrial and ventricular tumors occur.",
      "Left-sided tumors may cause dyspnea, hemoptysis, and atrial fibrillation; right-sided tumors may cause edema and ascites.",
    ],
    criteria: [
      "Malignant spindle-cell neoplasm with intersecting fascicles of eosinophilic cells and blunt-ended nuclei.",
      "Moderate-to-marked nuclear atypia, mitotic activity (including atypical forms), and often necrosis.",
      "Smooth-muscle differentiation must be confirmed immunohistochemically.",
    ],
    hist: [
      "Long intersecting fascicles of spindle cells have pale to brightly eosinophilic fibrillary cytoplasm.",
      "Nuclei are plump and blunt-ended with variable pleomorphism.",
      "Tumors are usually hypercellular; myxoid, hyalinized, or fibrotic areas may occur.",
      "Mitotic figures and tumor necrosis are common in high-grade tumors.",
    ],
    ihc: [
      "SMA, desmin, and h-caldesmon support smooth-muscle differentiation.",
      "Calponin may be positive; use a panel because SMA alone is nonspecific.",
    ],
    diff: [
      {
        name: "Undifferentiated pleomorphic sarcoma",
        distinction:
          "UPS lacks a convincing specific line of differentiation; leiomyosarcoma shows smooth-muscle fascicles and diffuse desmin/h-caldesmon.",
      },
      {
        name: "Synovial sarcoma",
        distinction:
          "May show spindle-cell fascicles but is supported by SS18::SSX fusion and TLE1/keratin expression.",
      },
      {
        name: "Angiosarcoma",
        distinction:
          "Shows malignant endothelial channels or epithelioid vascular differentiation with ERG/CD31 positivity.",
      },
      {
        name: "Cardiac fibroma",
        distinction:
          "Bland fibroblasts in collagenous stroma without significant atypia, mitoses, or smooth-muscle phenotype.",
      },
      {
        name: "Cardiac Angiosarcoma",
        distinction:
          "High-grade malignant endothelial tumor, usually arising in the right atrium and often associated with hemorrhagic pericardial effusion.",
      },
      {
        name: "Cardiac Undifferentiated Pleomorphic Sarcoma",
        distinction:
          "High-grade pleomorphic spindle/epithelioid sarcoma, usually a left atrial mass, diagnosed only after excluding definable lines of differentiation.",
      },
    ],
    molecular: [
      "No defining recurrent molecular alteration is established; molecular testing is mainly used to exclude mimics such as synovial sarcoma.",
    ],
    pitfalls: [],
  },
  {
    name: "Cardiac Undifferentiated Pleomorphic Sarcoma",
    group: "Primary Cardiac Sarcomas",
    clue: "High-grade pleomorphic spindle/epithelioid sarcoma, usually a left atrial mass, diagnosed only after excluding definable lines of differentiation.",
    profile: [
      "Mean age approximately 50\u201355 years; no sex predilection.",
      "Most often arises in the left atrium, commonly posterior or lateral wall; may involve atrial appendage, septum, or mitral valve.",
      "Presents with dyspnea, pulmonary congestion, arrhythmia, heart failure, fever, constitutional symptoms, or metastatic disease.",
    ],
    criteria: [
      "High-grade pleomorphic spindle and/or epithelioid sarcoma involving the heart.",
      "No convincing morphologic, immunophenotypic, or molecular evidence of a specific sarcoma such as leiomyosarcoma or synovial sarcoma.",
      "Exclude pulmonary artery intimal sarcoma extending into the heart and metastatic sarcoma.",
    ],
    hist: [
      "Markedly pleomorphic spindle and epithelioid cells in sheets, fascicles, or haphazard arrays.",
      "Mitotic activity is usually brisk and necrosis is common.",
      "Myxoid areas with curvilinear vessels may mimic myxofibrosarcoma.",
      "Heterologous malignant bone or cartilage may be present.",
      "Surface fibrin and hemorrhage may be prominent.",
    ],
    ihc: [
      "No lineage-specific immunophenotype; broad panel should exclude endothelial, smooth-muscle, epithelial, melanocytic, and hematolymphoid differentiation.",
      "ERG/CD31, desmin/h-caldesmon, broad-spectrum keratin, and lymphoid markers are selected according to morphology.",
    ],
    diff: [
      {
        name: "Cardiac leiomyosarcoma",
        distinction:
          "Leiomyosarcoma shows intersecting eosinophilic fascicles, blunt-ended nuclei, and smooth-muscle marker expression.",
      },
      {
        name: "Cardiac angiosarcoma",
        distinction:
          "Angiosarcoma shows vasoformative growth and endothelial markers such as ERG and CD31.",
      },
      {
        name: "Synovial sarcoma",
        distinction:
          "SS18::SSX fusion establishes synovial sarcoma; TLE1 and keratin may support it.",
      },
      {
        name: "Cardiac myxoma",
        distinction:
          "Myxoma is composed of bland myxoma cells in myxoid matrix and usually attaches near the fossa ovalis; UPS is destructive and high grade.",
      },
      {
        name: "Metastatic sarcoma",
        distinction:
          "Clinical history and imaging should exclude an extracardiac primary.",
      },
    ],
    molecular: [
      "Molecular testing may identify alterations characteristic of intimal sarcoma, including MDM2 amplification; such cases may be better classified as intimal sarcoma when criteria are met.",
      "Use targeted molecular testing to exclude specific sarcoma entities rather than treating UPS as a molecularly defined tumor.",
    ],
    pitfalls: [],
  },
  {
    name: "Cardiac Diffuse Large B-Cell Lymphoma",
    group: "Cardiac Hematolymphoid Neoplasms",
    clue: "Large B-cell lymphoma involving the heart, usually the right atrium, with no or only minor extracardiac disease.",
    profile: [
      "Usually older adults; median age approximately 63 years, with reported pediatric cases.",
      "Male predominance (approximately 2:1).",
      "Right atrium is the most common site; pericardial involvement occurs in about one third.",
      "Dyspnea, chest pain, heart failure, arrhythmia, pulmonary embolism, or sudden cardiac death.",
    ],
    criteria: [
      "Large B-cell lymphoma involving the heart/pericardium with no or only minor extracardiac component.",
      "Large atypical lymphoid cells with a mature B-cell phenotype.",
      "Classify by cell of origin, MYC/BCL2 expression, and EBV status as appropriate.",
    ],
    hist: [
      "Diffuse sheets or aggregates of large discohesive lymphoid cells with vesicular nuclei and prominent nucleoli.",
      "Immunoblastic or centroblastic morphology may occur.",
      "Necrosis and apoptosis may be prominent.",
    ],
    ihc: [
      "CD20, PAX5, CD79a, and other B-cell markers establish B-cell lineage.",
      "CD10, BCL6, and MUM1/IRF4 help assign cell-of-origin phenotype.",
      "EBER in situ hybridization assesses EBV association.",
      "Assess MYC and BCL2 protein expression and perform rearrangement studies when indicated.",
    ],
    diff: [
      {
        name: "Primary effusion lymphoma",
        distinction:
          "PEL is HHV8/LANA positive and presents predominantly as a serous cavity effusion, often without a solid cardiac mass; conventional B-cell markers are often absent.",
      },
      {
        name: "Fibrin-associated DLBCL",
        distinction:
          "Tumor cells are confined to fibrin/thrombus in a cyst, myxoma, or prosthetic material without invasion of normal tissue.",
      },
      {
        name: "Pyothorax-associated DLBCL",
        distinction:
          "Arises in a chronically inflamed pleural space, usually as a solid mass, and is EBV positive; cardiac DLBCL is not defined by this setting.",
      },
      {
        name: "Metastatic/systemic DLBCL involving heart",
        distinction:
          "Systemic nodal or extranodal disease is present; primary cardiac lymphoma has no or only minimal extracardiac disease.",
      },
      {
        name: "Cardiac myxoma with reactive lymphoid infiltrate",
        distinction:
          "Myxoma has characteristic bland myxoma cells and myxoid matrix; lymphoma forms sheets of clonal large B cells.",
      },
      {
        name: "Cardiac Fibrin-Associated Diffuse Large B-Cell Lymphoma",
        distinction:
          "EBV-associated large B-cell proliferation confined to fibrin or thrombus in a cardiac cyst, myxoma, graft, or prosthetic valve.",
      },
    ],
    molecular: [
      "MYC and BCL2 FISH and EBER in situ hybridization assist classification.",
      "IGH clonality and broader molecular subtyping may be useful in selected cases.",
    ],
    pitfalls: [],
  },
  {
    name: "Cardiac Fibrin-Associated Diffuse Large B-Cell Lymphoma",
    group: "Cardiac Hematolymphoid Neoplasms",
    clue: "EBV-associated large B-cell proliferation confined to fibrin or thrombus in a cardiac cyst, myxoma, graft, or prosthetic valve.",
    profile: [
      "Adults, reported age range approximately 25\u201391 years; median about 56.5 years.",
      "Reported more often in men, partly reflecting associated cardiac lesions and devices.",
      "Occurs in chronic fibrin deposits, including atrial myxomas, intracardiac thrombi, prosthetic valves, and endovascular grafts.",
      "Often incidental; presentation is usually determined by the underlying lesion, although embolic events may occur.",
    ],
    criteria: [
      "Atypical large B-cell population associated with fibrin/thrombus and the characteristic immunophenotype.",
      "Lymphoma cells remain confined to fibrinous material and do not infiltrate histologically normal surrounding tissue.",
      "EBV positivity is characteristic; assess the full clinical and morphologic context.",
    ],
    hist: [
      "Loose aggregates of large atypical lymphoid cells are embedded in fibrin and cellular debris.",
      "Cells often have immunoblastic morphology, irregular nuclei, prominent nucleoli, and amphophilic cytoplasm.",
      "Mitoses and apoptosis are frequent; inflammation is usually sparse.",
      "Focal extension into myxomatous stroma or a fibrous capsule may occur, but invasion into normal tissue is absent.",
    ],
    ihc: [
      "CD20 and other B-cell markers are usually positive; plasmablastic differentiation may alter the phenotype in some cases.",
      "EBER is typically positive in tumor cells.",
      "CD30 and MUM1/IRF4 may be expressed; interpret with B-cell markers and morphology.",
    ],
    diff: [
      {
        name: "Cardiac DLBCL",
        distinction:
          "Conventional cardiac DLBCL forms a mass infiltrating cardiac tissue; fibrin-associated DLBCL is restricted to fibrin/thrombus without invasion of normal tissue.",
      },
      {
        name: "Primary effusion lymphoma",
        distinction:
          "PEL is HHV8/LANA positive and effusion-based; fibrin-associated DLBCL is generally HHV8 negative and attached to fibrinous material.",
      },
      {
        name: "DLBCL associated with chronic inflammation",
        distinction:
          "This forms a destructive mass in a longstanding chronically inflamed space; fibrin-associated DLBCL remains noninvasive and localized to fibrin.",
      },
      {
        name: "Reactive lymphoid proliferation in thrombus",
        distinction:
          "Reactive cells lack the cytologic atypia and EBV-associated clonal large B-cell proliferation characteristic of fibrin-associated DLBCL.",
      },
      {
        name: "Cardiac myxoma",
        distinction:
          "Myxoma is a myxoid mesenchymal neoplasm; fibrin-associated lymphoma consists of atypical B cells confined to overlying fibrin.",
      },
      {
        name: "Cardiac Diffuse Large B-Cell Lymphoma",
        distinction:
          "Large B-cell lymphoma involving the heart, usually the right atrium, with no or only minor extracardiac disease.",
      },
    ],
    molecular: [
      "EBER is usually positive; clonal IGH rearrangement is common but not required.",
      "No specific recurrent genetic abnormality is established; MYC and BCL2 rearrangements are generally absent, with rare BCL6 rearrangements reported.",
    ],
    pitfalls: [],
  },
];

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function HeartTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([]);
  const groups = useMemo(
    () => [
      "All",
      ...Array.from(new Set(entities.map((entity) => entity.group))),
    ],
    [],
  );
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return entities.filter((entity) => {
      const groupMatch = group === "All" || entity.group === group;
      const searchable = [
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
      ]
        .join(" ")
        .toLowerCase();
      return groupMatch && (!q || searchable.includes(q));
    });
  }, [query, group]);
  const allOpen =
    filtered.length > 0 &&
    filtered.every((entity) => open.includes(entity.name));

  function toggle(name: string) {
    setOpen((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Thoracic Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Heart Tumors
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Morphology-first diagnostic reference for primary cardiac neoplasms
            and tumor-like lesions, integrating clinical presentation, anatomic
            site, histopathology, immunophenotype, and diagnostically relevant
            molecular findings. Because even histologically benign cardiac
            lesions can cause major hemodynamic or electrical complications,
            location and clinical correlation are essential.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <h2 className="text-sm font-bold text-slate-900">
            Diagnostic approach
          </h2>
          <ul className="mt-2 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
            <li>
              • Metastatic involvement of the heart is substantially more common
              than a primary cardiac tumor.
            </li>
            <li>
              • Establish the anatomic compartment: endocardial, myocardial,
              valvular, or pericardial.
            </li>
            <li>
              • Correlate morphology with age, imaging, multiplicity, and
              clinical setting.
            </li>
            <li>
              • Consider syndromic associations, including TSC, Carney complex,
              Gorlin syndrome, and selected familial sarcoma predispositions.
            </li>
          </ul>
        </div>

        <div className="my-7 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
            <label
              htmlFor="heart-search"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Search diagnoses and differential points
            </label>
            <input
              id="heart-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search: myxoma, spider cells, ERG, PRKAR1A, TSC..."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </div>
          <div className="sm:w-72">
            <label
              htmlFor="heart-group"
              className="mb-1 block text-sm font-semibold text-slate-700"
            >
              Category
            </label>
            <select
              id="heart-group"
              value={group}
              onChange={(event) => setGroup(event.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
            >
              {groups.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() =>
              setOpen(allOpen ? [] : filtered.map((entity) => entity.name))
            }
            className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
          >
            {allOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
          <span>
            {filtered.length} of {entities.length} diagnostic entities
          </span>
          <span>
            Open a diagnosis for criteria, histology, IHC, and differential
            diagnosis.
          </span>
        </div>

        <div className="space-y-3">
          {filtered.map((entity, index) => {
            const isOpen = open.includes(entity.name);
            return (
              <article
                key={entity.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(entity.name)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold text-slate-950">
                      {entity.name}
                    </span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {entity.group}
                    </span>
                    <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700">
                      Key clue: {entity.clue}
                    </span>
                  </span>
                  <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                    {isOpen ? "− Hide" : "＋ Details"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 p-4 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-5">
                        <Section
                          title="Clinical Profile"
                          items={entity.profile}
                        />
                        <Section
                          title="Essential Diagnostic Criteria"
                          items={entity.criteria}
                        />
                        <Section title="Histopathology" items={entity.hist} />
                      </div>
                      <div className="space-y-5">
                        <Section title="Immunophenotype" items={entity.ihc} />
                        <section>
                          <h3 className="text-sm font-bold text-slate-900">
                            Differential Diagnosis
                          </h3>
                          <div className="mt-2 space-y-3">
                            {entity.diff.map((item, i) => (
                              <div
                                key={`${item.name}-${i}`}
                                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                              >
                                <div className="text-sm font-bold text-slate-900">
                                  {item.name}
                                </div>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                  {item.distinction}
                                </p>
                              </div>
                            ))}
                          </div>
                        </section>
                        <Section
                          title="Molecular Pathology"
                          items={entity.molecular}
                        />
                      </div>
                    </div>
                    {entity.pitfalls.length > 0 && (
                      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                          Diagnostic Pitfalls
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
                          {entity.pitfalls.map((item, i) => (
                            <li key={i}>{item}</li>
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
            <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
              No matching diagnoses. Try another search term or category.
            </div>
          )}
        </div>

        <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          PathologyGPS · Diagnostic reference for anatomic pathology. Interpret
          immunohistochemical and molecular findings with morphology, clinical
          history, imaging, and tumor location.
        </footer>
      </div>
    </main>
  );
}
