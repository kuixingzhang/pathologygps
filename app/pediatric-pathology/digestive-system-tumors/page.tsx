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
};

const baseEntities: Entity[] = [
  {
    name: "Hepatoblastoma",
    group: "Liver — Epithelial Tumors",
    clue: "Embryonal hepatocytic tumor in early childhood; fetal and/or embryonal epithelium, with or without mesenchymal differentiation.",
    summary:
      "A malignant embryonal liver tumor that recapitulates hepatic development and may contain epithelial elements alone or epithelial and mesenchymal components.",
    clinical: [
      "Usually diagnosed between 6 months and 5 years (median, approximately 18 months); may be congenital.",
      "Male predominance (approximately 2:1).",
      "Usually a solitary, right-lobe-predominant hepatic mass; multifocal disease occurs.",
      "Typically presents as an abdominal mass; serum AFP is markedly elevated in most cases. Lung metastases may be present at diagnosis.",
    ],
    criteria: [
      "Recognize fetal and/or embryonal hepatocytic differentiation in a primary hepatic malignancy.",
      "Classify as epithelial or mixed epithelial and mesenchymal according to the components present.",
      "Fetal, embryonal, macrotrabecular, pleomorphic, cholangioblastic, and small-cell undifferentiated patterns may occur; mixed tumors contain stromal/heterologous elements.",
      "Pure fetal HBL with low mitotic activity can be diagnosed only in a completely evaluated primary resection, not on biopsy or posttherapy tissue.",
      "A tumor with small-cell morphology and loss of nuclear INI1/SMARCB1 should be classified as malignant rhabdoid tumor, not HBL.",
      "Consider hepatocellular neoplasm, NOS (HCN-NOS) when a pediatric hepatocellular tumor has overlapping/intermediate HBL and HCC features, particularly in an older child.",
    ],
    histology: [
      "Well-differentiated fetal areas show uniform polygonal cells with low N:C ratios in 2–3-cell-thick trabeculae; light and dark cell populations may be present.",
      "Crowded fetal areas show increased cellularity and mitotic activity, dense eosinophilic/amphophilic cytoplasm, and round central nuclei without marked pleomorphism.",
      "Embryonal areas contain smaller cells with high N:C ratios, angulated nuclei, frequent mitoses, and rosette or tubular formations.",
      "Macrotrabecular HBL has trabeculae more than five cells thick and may mimic HCC.",
      "Pleomorphic areas show nuclear enlargement, giant cells, or anaplasia, sometimes after therapy.",
      "Small-cell undifferentiated areas show scant cytoplasm and stippled chromatin; evaluate INI1 to exclude rhabdoid tumor.",
      "Cholangioblastic areas show biliary-type differentiation and nuclear β-catenin; distinguish from reactive posttherapy bile ducts.",
      "Mixed HBL contains epithelial elements with spindle-cell/blastemal, osteoid, cartilage, rhabdomyoblastic, or adipocytic components; teratoid tumors contain heterologous endodermal and neuroectodermal elements.",
      "Posttherapy specimens may show necrosis, hemorrhage, peliosis-like change, fibrosis, histiocytic reaction, and extensive bone formation.",
    ],
    ihc: [
      "Nuclear β-catenin is common and supports WNT-pathway activation.",
      "AFP highlights tumor cells; arginase-1 and HepPar-1 are generally positive but do not distinguish tumor from non-neoplastic hepatocytes.",
      "INI1/SMARCB1 is retained in HBL; loss supports malignant rhabdoid tumor.",
      "Use component-directed stains to characterize epithelial and mesenchymal elements; nuclear β-catenin in cholangioblastic areas helps separate them from reactive ducts.",
    ],
    molecular: [
      "CTNNB1 mutations occur in approximately 90% of cases; APC or other WNT-pathway alterations occur in some remaining cases.",
      "NFE2L2 mutations occur in a subset and are associated with aggressive biology.",
      "TERT promoter mutations are particularly relevant to HCN-NOS and aggressive hepatocellular tumors.",
    ],
    differential: [
      {
        name: "Fibrolamellar hepatocellular carcinoma",
        distinction:
          "Usually occurs in older children/adolescents; large oncocytic polygonal cells, lamellar fibrosis, diffuse CK7/CD68, and DNAJB1::PRKACA fusion favor fibrolamellar HCC.",
      },
      {
        name: "Pediatric hepatocellular carcinoma",
        distinction:
          "Usually occurs in older children and/or diseased liver; conventional HCC shows hepatocellular carcinoma morphology rather than fetal/embryonal developmental patterns. Macrotrabecular HBL and HCN-NOS may overlap, requiring clinicopathologic and molecular correlation.",
      },
    ],
  },
  {
    name: "Hepatocellular Neoplasm, NOS (Pediatric)",
    group: "Liver — Epithelial Tumors",
    clue: "Pediatric hepatocellular tumor with overlapping or intermediate features of hepatoblastoma and hepatocellular carcinoma.",
    summary:
      "A provisional category for difficult-to-classify pediatric hepatocellular neoplasms showing hybrid morphology and biology between hepatoblastoma and hepatocellular carcinoma.",
    clinical: [
      "Can occur at any age but is more frequent in children older than 8 years.",
      "No consistent sex predilection is established.",
      "Arises in the liver, often without recognized underlying liver disease.",
      "Usually behaves aggressively; clinical presentation resembles a hepatic mass.",
    ],
    criteria: [
      "Use for a pediatric hepatocellular neoplasm that cannot be confidently classified as conventional HBL or HCC and shows intermediate/hybrid features.",
      "Tumor may show crowded fetal-like morphology, macrotrabecular architecture, or distinct areas with HBL-like and HCC-like features.",
      "Integrate morphology with CTNNB1 and TERT promoter testing and other HCC-associated alterations.",
      "Do not equate this category with conventional HBL showing only a macrotrabecular pattern.",
    ],
    histology: [
      "Tumor may be monotonous and resemble crowded fetal hepatoblastoma.",
      "Macrotrabecular architecture may be present.",
      "Distinct areas may show hepatoblastoma-like and hepatocellular carcinoma-like morphology.",
      "HCC-like features may become more evident in posttherapy specimens.",
    ],
    ihc: [
      "Nuclear β-catenin may be present, reflecting WNT pathway activation.",
      "Use hepatocellular markers to establish lineage; no single immunophenotype alone defines this provisional category.",
    ],
    molecular: [
      "CTNNB1 mutations are common.",
      "TERT promoter mutations and other HCC-associated alterations support this provisional category and are associated with aggressive behavior.",
    ],
    differential: [
      {
        name: "Hepatoblastoma",
        distinction:
          "Conventional HBL shows recognizable fetal/embryonal or mixed epithelial-mesenchymal patterns; HCN-NOS has intermediate or hybrid HBL/HCC morphology and may harbor TERT promoter alterations.",
      },
      {
        name: "Pediatric Hepatocellular Carcinoma",
        distinction:
          "Conventional HCC is classified as hepatocellular carcinoma based on its morphology and clinical context; HCN-NOS is reserved for tumors with overlapping/intermediate HBL-HCC features.",
      },
    ],
  },
  {
    name: "Fibrolamellar Hepatocellular Carcinoma",
    group: "Liver — Epithelial Tumors",
    clue: "Large oncocytic hepatocytes in dense lamellar fibrosis, usually in a noncirrhotic liver of an older child or adolescent.",
    summary:
      "A distinct hepatocellular carcinoma characterized by oncocytic cytoplasm, lamellar fibrosis, and usually DNAJB1::PRKACA-mediated PKA activation.",
    clinical: [
      "Occurs in older children and adolescents; generally older than patients with HBL.",
      "No clear sex predilection.",
      "May arise anywhere in the liver, with a tendency toward the left lobe and hilum.",
      "Presents with abdominal mass, hepatomegaly, pain, nausea, or weight loss; usually arises without chronic liver disease and without AFP elevation.",
    ],
    criteria: [
      "Hepatocellular malignancy composed of large polygonal cells with abundant granular eosinophilic cytoplasm and prominent nucleoli.",
      "Dense collagenous stroma arranged in parallel lamellae.",
      "CK7 and CD68 are typically strongly and diffusely expressed.",
      "Demonstration of DNAJB1::PRKACA fusion is desirable and strongly supports the diagnosis in a primary hepatic neoplasm.",
    ],
    histology: [
      "Large polygonal cells have abundant granular eosinophilic oncocytic cytoplasm, vesicular nuclei, and prominent single nucleoli.",
      "Tumor cells form trabeculae, cords, and nests separated by dense parallel lamellar fibrosis.",
      "Pale eosinophilic cytoplasmic bodies and hyaline bodies may be present but are not specific.",
      "Binucleation, multinucleation, calcification, bile production, and pseudoglandular areas may occur.",
    ],
    ihc: [
      "HepPar-1 and arginase-1 support hepatocellular differentiation; albumin mRNA ISH may be positive.",
      "CK7 and CD68 are characteristically strong and diffuse in most cases.",
      "Polyclonal CEA may show a canalicular pattern; AFP is usually negative.",
      "Glypican-3 is variably positive and is not required for diagnosis.",
    ],
    molecular: [
      "DNAJB1::PRKACA fusion is present in the vast majority of cases and can be detected by RT-PCR or FISH.",
      "Rare fusion-negative cases may harbor PRKAR1A mutations, particularly in Carney complex; loss of PRKAR1A expression may be demonstrable.",
      "Conventional HCC-associated TP53 and CTNNB1 alterations are generally absent.",
    ],
    differential: [
      {
        name: "Hepatoblastoma",
        distinction:
          "Usually affects infants and young children and shows fetal/embryonal architecture, often with markedly elevated AFP; lamellar fibrosis and the characteristic fusion favor fibrolamellar HCC.",
      },
      {
        name: "Pediatric hepatocellular carcinoma",
        distinction:
          "Conventional pediatric HCC lacks the defining combination of oncocytic cells, lamellar fibrosis, and DNAJB1::PRKACA fusion; it more often arises with underlying liver disease.",
      },
    ],
  },
  {
    name: "Pediatric Hepatocellular Carcinoma",
    group: "Liver — Epithelial Tumors",
    clue: "Hepatocellular carcinoma in a patient younger than 18 years; assess background liver disease and exclude HBL/HCN-NOS.",
    summary:
      "A primary malignant hepatocellular neoplasm arising before age 18 years, including conventional and clear-cell patterns.",
    clinical: [
      "More common in older children and adolescents; approximately two thirds are diagnosed after age 10 years.",
      "No single sex tendency is emphasized.",
      "May arise anywhere in the liver as a solitary or multifocal mass.",
      "Presents with abdominal pain, distension, mass, fatigue, weight loss, or jaundice; may arise in chronic liver disease. AFP is elevated in most, but not all, cases.",
    ],
    criteria: [
      "Establish malignant hepatocellular differentiation in a primary liver tumor.",
      "Evaluate for underlying congenital/metabolic/chronic liver disease and viral hepatitis.",
      "Recognize conventional and clear-cell patterns; distinguish from HBL and HCN-NOS in younger patients or tumors with mixed morphology.",
      "Do not rely on AFP alone; marked AFP elevation may occur with liver regeneration, including in tyrosinemia.",
    ],
    histology: [
      "Conventional HCC shows malignant hepatocellular growth with trabecular, pseudoglandular, or solid architecture and cytologic atypia.",
      "Clear-cell HCC contains tumor cells with clear cytoplasm.",
      "Vascular invasion and multifocality may be present and are clinically important.",
      "In pediatric tumors with fetal-like or macrotrabecular areas, carefully assess for HBL and HCN-NOS.",
    ],
    ihc: [
      "Use arginase-1 and HepPar-1 to support hepatocellular differentiation.",
      "Glypican-3 may support malignancy in the appropriate morphologic context.",
      "Canalicular polyclonal CEA/CD10 staining may support hepatocellular differentiation.",
      "Interpret immunostains with morphology and background liver findings.",
    ],
    molecular: [
      "The chapter emphasizes a heterogeneous spectrum rather than a single defining pediatric HCC alteration.",
      "In suspected fibrolamellar HCC, test for DNAJB1::PRKACA; in HCN-NOS-like tumors, TERT promoter and other HCC-associated alterations may aid classification.",
    ],
    differential: [
      {
        name: "Hepatoblastoma",
        distinction:
          "HBL usually occurs before age 5 and shows fetal/embryonal components; pediatric HCC more often affects older children and may arise in chronically diseased liver.",
      },
      {
        name: "Fibrolamellar hepatocellular carcinoma",
        distinction:
          "Fibrolamellar HCC shows oncocytic cells, dense lamellar fibrosis, diffuse CK7/CD68, and usually DNAJB1::PRKACA fusion.",
      },
    ],
  },
  {
    name: "Mesenchymal Hamartoma of the Liver",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Benign, often cystic pediatric liver mass composed of loose mesenchyme and irregular bile ducts.",
    summary:
      "A benign developmental lesion of the liver, usually presenting in infancy or early childhood.",
    clinical: [
      "Usually presents in infants and young children, most often before 2 years of age.",
      "No consistent sex predilection is emphasized.",
      "Typically arises in the right hepatic lobe as a large, often multicystic mass.",
      "Presents with abdominal distension or a palpable mass; large lesions may cause respiratory or feeding compromise.",
    ],
    criteria: [
      "A well-demarcated but non-encapsulated lesion composed of loose myxoid mesenchyme and irregularly distributed bile ducts.",
      "Cystic spaces of variable size are common.",
      "Recognize that rare malignant transformation or association with embryonal sarcoma has been reported; extensive sampling is important when atypia or solid areas are present.",
    ],
    histology: [
      "Loose, edematous or myxoid mesenchymal stroma contains irregular, branching bile ducts.",
      "Cystic spaces may be lined by flattened or cuboidal epithelium.",
      "Hepatocytes may be entrapped at the periphery or within the lesion.",
      "Vascular structures and variable fibrosis may be present.",
    ],
    ihc: [
      "Bile duct epithelium expresses cytokeratins.",
      "Mesenchymal cells typically express vimentin; immunophenotype is generally nonspecific.",
      "Use immunohistochemistry to investigate suspicious solid or atypical areas rather than to establish the diagnosis alone.",
    ],
    molecular: [
      "No single defining molecular alteration is required for diagnosis.",
    ],
    differential: [
      {
        name: "Embryonal Sarcoma of the Liver",
        distinction:
          "Embryonal sarcoma is a malignant, highly cellular spindle/stellate-cell neoplasm with pleomorphism, mitoses, and characteristic PAS-positive hyaline globules; mesenchymal hamartoma is bland and duct-rich.",
      },
      {
        name: "Calcifying Nested Stromal-Epithelial Tumor",
        distinction:
          "CNSET is a solid nested epithelial-stromal neoplasm with calcification/ossification and a distinctive nested architecture, unlike the loose myxoid, cystic, bile-duct-rich hamartoma.",
      },
      {
        name: "Hepatic Congenital Hemangioma",
        distinction:
          "Congenital hemangioma is a vascular endothelial proliferation, usually solid and hypervascular, rather than a duct-rich myxoid developmental lesion.",
      },
      {
        name: "Hepatic Infantile Hemangioma",
        distinction:
          "Infantile hemangioma is an endothelial tumor with GLUT1-positive vascular channels and possible multifocality/vascular shunting; mesenchymal hamartoma lacks this endothelial proliferation.",
      },
    ],
  },
  {
    name: "Calcifying Nested Stromal-Epithelial Tumor",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Rare pediatric liver tumor with nested epithelioid cells, prominent desmoplasia, and calcification/ossification.",
    summary:
      "A rare primary hepatic neoplasm of uncertain differentiation, typically occurring in children and young adults.",
    clinical: [
      "Usually affects children and young adults; reported age range is broad.",
      "No consistent sex predilection is established.",
      "Arises within the liver, often as a solitary, well-circumscribed mass.",
      "Presents with abdominal pain, distension, or a palpable mass; imaging may show calcification.",
    ],
    criteria: [
      "Nested or trabecular epithelioid tumor cells embedded in dense fibrous/desmoplastic stroma.",
      "Calcification and/or ossification is a prominent clue.",
      "Confirm the diagnosis by integrating morphology and the characteristic immunophenotype; exclude hepatocellular and other epithelial neoplasms.",
    ],
    histology: [
      "Tumor cells form nests, cords, and trabeculae separated by dense fibrous stroma.",
      "Psammomatous or dystrophic calcification and metaplastic bone may be present.",
      "Tumor cells are epithelioid with variable clear to eosinophilic cytoplasm.",
      "Necrosis and mitotic activity are variable.",
    ],
    ihc: [
      "Immunophenotype is variable and should be interpreted as a panel in context.",
      "Hepatocellular markers are generally not a defining feature; evaluate for epithelial and mesenchymal differentiation as appropriate.",
    ],
    molecular: [
      "No recurrent molecular alteration is established as a routine diagnostic test in this chapter.",
    ],
    differential: [
      {
        name: "Mesenchymal Hamartoma of the Liver",
        distinction:
          "Mesenchymal hamartoma is predominantly cystic/myxoid with irregular bile ducts; CNSET is a solid nested tumor with dense stroma and calcification.",
      },
      {
        name: "Embryonal Sarcoma of the Liver",
        distinction:
          "Embryonal sarcoma shows pleomorphic malignant mesenchymal cells and PAS-positive hyaline globules rather than organized epithelial nests with calcifying stroma.",
      },
      {
        name: "Hepatic Angiosarcoma",
        distinction:
          "Angiosarcoma shows malignant vasoformative channels and endothelial marker expression, unlike the nested epithelial architecture of CNSET.",
      },
    ],
  },
  {
    name: "Embryonal Sarcoma of the Liver",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Malignant pediatric hepatic mesenchymal tumor with pleomorphic stellate cells, myxoid stroma, and PAS-positive hyaline globules.",
    summary:
      "A rare malignant mesenchymal neoplasm of the liver, often presenting in older children.",
    clinical: [
      "Typically occurs in school-age children, with a peak in later childhood.",
      "No consistent sex predilection is established.",
      "Usually presents as a large solitary hepatic mass.",
      "Abdominal pain, fever, distension, and a palpable mass are common presentations.",
    ],
    criteria: [
      "A malignant mesenchymal neoplasm with markedly variable cellularity and cytologic atypia.",
      "Identify pleomorphic spindle, stellate, or polygonal cells in a myxoid background.",
      "PAS-positive, diastase-resistant hyaline globules are a characteristic supportive feature.",
      "Extensively sample to exclude an associated mesenchymal hamartoma and identify any epithelial component.",
    ],
    histology: [
      "Tumor is often highly heterogeneous, with alternating hypocellular myxoid and hypercellular areas.",
      "Pleomorphic spindle and stellate cells have hyperchromatic nuclei and conspicuous nucleoli.",
      "Eosinophilic hyaline globules may be present intracellularly and extracellularly and are PAS-positive, diastase-resistant.",
      "Multinucleated giant cells, bizarre cells, and atypical mitoses may be seen.",
      "Entrapped bile ducts or residual hamartomatous areas may be present.",
    ],
    ihc: [
      "Vimentin is typically positive.",
      "Desmin, muscle-specific actin, and other lineage markers may be variably expressed; no single marker is specific.",
      "Hepatocytic and endothelial markers help exclude competing diagnoses.",
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    differential: [
      {
        name: "Mesenchymal Hamartoma of the Liver",
        distinction:
          "Hamartoma is bland, cystic/myxoid, and contains numerous irregular bile ducts; embryonal sarcoma is overtly malignant with pleomorphism, mitoses, and hyaline globules.",
      },
      {
        name: "Calcifying Nested Stromal-Epithelial Tumor",
        distinction:
          "CNSET has organized epithelial nests and calcifying/desmoplastic stroma rather than a pleomorphic myxoid sarcoma.",
      },
      {
        name: "Hepatic Angiosarcoma",
        distinction:
          "Angiosarcoma demonstrates malignant endothelial differentiation and irregular anastomosing vascular channels.",
      },
    ],
  },
  {
    name: "Hepatic Congenital Hemangioma",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Fully formed vascular tumor present at birth; GLUT1-negative, with rapid involution or persistent/noninvoluting behavior.",
    summary:
      "A benign vascular tumor that is fully developed at birth and follows a congenital hemangioma growth pattern.",
    clinical: [
      "Present at birth; may be detected prenatally or in the neonatal period.",
      "No consistent sex predilection is emphasized.",
      "May be focal, multifocal, or diffuse in the liver.",
      "May cause high-output cardiac failure, anemia, thrombocytopenia, or consumptive coagulopathy when large or extensive.",
    ],
    criteria: [
      "Vascular tumor is fully developed at birth.",
      "Classify clinical behavior as rapidly involuting, partially involuting, or noninvoluting congenital hemangioma.",
      "GLUT1 negativity supports congenital rather than infantile hemangioma.",
      "Correlate with imaging and clinical course; distinguish from vascular malformation and infantile hemangioma.",
    ],
    histology: [
      "Well-formed vascular channels of variable caliber are lined by bland endothelial cells.",
      "Lobular vascular architecture may be present.",
      "Thrombosis, infarction, fibrosis, and involutional change may be seen depending on subtype and age.",
    ],
    ihc: [
      "Endothelial cells express CD31 and ERG.",
      "GLUT1 is negative, helping distinguish congenital hemangioma from infantile hemangioma.",
    ],
    molecular: ["No molecular test is routinely required for diagnosis."],
    differential: [
      {
        name: "Hepatic Infantile Hemangioma",
        distinction:
          "Infantile hemangioma is usually absent or subtle at birth, proliferates postnatally, and is GLUT1-positive; congenital hemangioma is fully formed at birth and GLUT1-negative.",
      },
      {
        name: "Hepatic Angiosarcoma",
        distinction:
          "Angiosarcoma shows infiltrative, cytologically malignant endothelial cells and destructive vasoformative growth rather than bland vascular channels.",
      },
      {
        name: "Mesenchymal Hamartoma of the Liver",
        distinction:
          "Hamartoma is a myxoid, bile-duct-rich developmental lesion rather than a true endothelial neoplasm.",
      },
    ],
  },
  {
    name: "Hepatic Infantile Hemangioma",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Postnatally proliferating vascular tumor with GLUT1-positive endothelial cells; may be multifocal or diffuse.",
    summary:
      "A benign vascular tumor of infancy that may be focal, multifocal, or diffuse in the liver.",
    clinical: [
      "Typically presents in infancy; lesions may become apparent after birth as they proliferate.",
      "More common in girls in the general infantile hemangioma population.",
      "May be focal, multifocal, or diffuse within the liver.",
      "Large or diffuse lesions may cause high-output cardiac failure, hepatomegaly, hypothyroidism, or abdominal compartment effects.",
    ],
    criteria: [
      "Clinical course is consistent with postnatal proliferation of an infantile hemangioma.",
      "Endothelial cells show GLUT1 expression.",
      "Distinguish focal, multifocal, and diffuse patterns and assess for associated vascular shunting or cardiac effects.",
    ],
    histology: [
      "Lobules of capillary-sized vascular channels are lined by plump endothelial cells during the proliferative phase.",
      "Involuting lesions show increasing fibrosis, sclerosis, and reduced vascular spaces.",
      "Endothelial cells are cytologically bland.",
    ],
    ihc: [
      "CD31 and ERG highlight endothelial cells.",
      "GLUT1 is characteristically positive and distinguishes infantile hemangioma from congenital hemangioma.",
    ],
    molecular: ["No molecular test is routinely required for diagnosis."],
    differential: [
      {
        name: "Hepatic Congenital Hemangioma",
        distinction:
          "Congenital hemangioma is fully developed at birth and GLUT1-negative; infantile hemangioma proliferates after birth and is GLUT1-positive.",
      },
      {
        name: "Hepatic Angiosarcoma",
        distinction:
          "Angiosarcoma is infiltrative and cytologically malignant, with destructive vascular channels and atypia.",
      },
      {
        name: "Mesenchymal Hamartoma of the Liver",
        distinction:
          "Hamartoma is a cystic/myxoid lesion with bile ducts and lacks a lobular GLUT1-positive endothelial proliferation.",
      },
    ],
  },
  {
    name: "Hepatic Angiosarcoma",
    group: "Liver — Mesenchymal and Vascular Tumors",
    clue: "Rare aggressive malignant endothelial tumor with infiltrative, anastomosing vascular channels and endothelial atypia.",
    summary:
      "A highly aggressive malignant vascular neoplasm of the liver; exceptionally rare in children.",
    clinical: [
      "Extremely rare in children; reported across a broad pediatric age range.",
      "No reliable sex predilection is established.",
      "Arises in the liver, often as multifocal or diffuse infiltrative disease.",
      "May present with hepatomegaly, abdominal pain, anemia, hemorrhage, or liver dysfunction.",
    ],
    criteria: [
      "Infiltrative malignant endothelial neoplasm with irregular, anastomosing vascular channels dissecting hepatic plates.",
      "Endothelial cytologic atypia, multilayering, and/or solid areas support malignancy.",
      "Confirm endothelial differentiation with a panel of markers.",
      "Distinguish from benign congenital and infantile hemangiomas.",
    ],
    histology: [
      "Irregular, interconnected vascular spaces dissect and replace hepatic parenchyma.",
      "Endothelial cells show hyperchromasia, pleomorphism, and multilayering.",
      "Solid spindle or epithelioid areas may occur.",
      "Hemorrhage and necrosis may be present.",
    ],
    ihc: [
      "Tumor cells express endothelial markers such as CD31 and ERG.",
      "CD34 may be positive but is less specific.",
      "Use morphology and endothelial marker expression together to distinguish from nonvascular sarcomas.",
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis.",
    ],
    differential: [
      {
        name: "Hepatic Congenital Hemangioma",
        distinction:
          "Congenital hemangioma has bland endothelial cells and a circumscribed/lobular vascular architecture; angiosarcoma is infiltrative and malignant.",
      },
      {
        name: "Hepatic Infantile Hemangioma",
        distinction:
          "Infantile hemangioma is GLUT1-positive and cytologically bland; angiosarcoma shows endothelial atypia and destructive growth.",
      },
      {
        name: "Embryonal Sarcoma of the Liver",
        distinction:
          "Embryonal sarcoma is a pleomorphic mesenchymal tumor without true malignant endothelial differentiation; angiosarcoma expresses endothelial markers and forms vascular channels.",
      },
    ],
  },
  {
    name: "Pancreatoblastoma",
    group: "Pancreas — Epithelial Tumors",
    clue: "Pediatric pancreatic embryonal neoplasm with multiple lines of pancreatic differentiation and characteristic squamoid nests.",
    summary:
      "An embryonal pancreatic neoplasm that recapitulates pancreatic development and shows acinar, squamoid, and sometimes ductal and neuroendocrine differentiation.",
    clinical: [
      "Usually occurs in young children, with a second peak in older children/adolescents; congenital cases occur.",
      "No strong sex predilection is emphasized.",
      "May arise in any part of the pancreas; large tumors may extend into adjacent organs.",
      "Presents with abdominal mass, pain, or nonspecific gastrointestinal symptoms; AFP may be elevated.",
    ],
    criteria: [
      "A pancreatic epithelial neoplasm showing more than one line of pancreatic differentiation.",
      "Squamoid nests are the defining diagnostic feature, although they may be sparse and missed in small biopsies.",
      "Acinar differentiation is usually dominant; neuroendocrine, ductal, and primitive round-cell components may be present.",
      "Correlate with WNT/β-catenin pathway immunophenotype and clinical context.",
    ],
    histology: [
      "Tumor forms variably sized epithelial lobules separated by broad fibrous septa.",
      "Acinar areas contain uniform polygonal cells with basophilic cytoplasm, central nuclei, prominent nucleoli, and small lumina.",
      "Squamoid nests are often centrally located within lobules and may show whorled architecture, abundant eosinophilic cytoplasm, and optically clear nuclei.",
      "Ductal/mucinous and primitive round-cell components are usually focal.",
      "Neuroendocrine cells may be scattered or form nests/trabeculae.",
      "Fibrous stroma may be hypercellular; rare heterologous cartilage or bone may occur.",
    ],
    ihc: [
      "Acinar cells express trypsin, chymotrypsin, lipase, and BCL10; PAS-diastase-positive cytoplasmic granules support acinar differentiation.",
      "Neuroendocrine areas express chromogranin A and synaptophysin.",
      "Squamoid nests often show abnormal cytoplasmic and nuclear β-catenin, with nuclear LEF1 and cyclin D1.",
      "AFP may be expressed.",
    ],
    molecular: [
      "CTNNB1 or APC alterations activate WNT/β-catenin signaling.",
      "Loss of heterozygosity at 11p15.5 with IGF2 dysregulation is frequent and may relate to Beckwith–Wiedemann syndrome.",
      "Association with familial adenomatous polyposis (APC) is reported.",
    ],
    differential: [
      {
        name: "Pancreatic Acinar Cell Carcinoma",
        distinction:
          "Acinar cell carcinoma is usually a more monotonous malignant acinar neoplasm without characteristic squamoid nests or the multiple-lineage embryonal pattern of pancreatoblastoma.",
      },
      {
        name: "Solid Pseudopapillary Neoplasm",
        distinction:
          "SPN typically occurs in adolescent girls and shows poorly cohesive cells around delicate vessels with pseudopapillary degeneration; it lacks acinar differentiation and characteristic squamoid nests.",
      },
    ],
  },
  {
    name: "Pancreatic Acinar Cell Carcinoma",
    group: "Pancreas — Epithelial Tumors",
    clue: "Malignant acinar neoplasm with granular zymogen-rich cytoplasm and trypsin/chymotrypsin/BCL10 expression.",
    summary:
      "A malignant pancreatic epithelial neoplasm showing acinar cell differentiation.",
    clinical: [
      "Rare in children; average reported age is approximately 9–10 years (range, 3–16 years).",
      "Slight male predominance.",
      "May arise throughout the pancreas, most often in the tail, followed by the head.",
      "Presents with nonspecific abdominal pain, swelling or mass, nausea, vomiting, fever, or anemia; jaundice is uncommon. AFP may be elevated.",
    ],
    criteria: [
      "Highly cellular malignant epithelial neoplasm with lobular growth and scant fibrous stroma.",
      "Cells have moderate to abundant granular eosinophilic cytoplasm and uniform nuclei with prominent nucleoli.",
      "Demonstrate acinar differentiation with specific markers, preferably using more than one of trypsin, chymotrypsin, and BCL10.",
      "Necrosis and mitotic activity are often prominent.",
    ],
    histology: [
      "Tumor is highly cellular with scant stroma and a lobular growth pattern.",
      "Acinar pattern shows small gland-like lumina and basally located nuclei.",
      "Solid areas may mimic pancreatic neuroendocrine tumor.",
      "Cytoplasm contains PAS-positive, diastase-resistant zymogen granules.",
      "Necrosis is often abundant; mitotic activity is generally high.",
    ],
    ihc: [
      "Trypsin, chymotrypsin, and BCL10 are the most sensitive markers of acinar differentiation; two-marker combinations improve detection.",
      "CK7, CK19, and PDX1 may be positive.",
      "Scattered neuroendocrine cells may express chromogranin A and/or synaptophysin; diffuse neuroendocrine marker expression is not the expected pattern.",
      "AFP may be focally positive.",
    ],
    molecular: [
      "Pediatric molecular data are limited; no clinically established recurrent alteration is required for diagnosis.",
      "Adult acinar carcinomas may show BRAF/RAF1 fusions, APC/CTNNB1 pathway alterations, and TP53 changes, but these should not be assumed to define pediatric cases.",
    ],
    differential: [
      {
        name: "Pancreatoblastoma",
        distinction:
          "Pancreatoblastoma shows squamoid nests and multiple lines of pancreatic differentiation; acinar cell carcinoma is typically more uniform and lacks defining squamoid nests.",
      },
      {
        name: "Solid Pseudopapillary Neoplasm",
        distinction:
          "SPN shows pseudopapillary structures, nuclear β-catenin, and loss/abnormal E-cadherin; it lacks acinar enzyme expression and zymogen granules.",
      },
    ],
  },
  {
    name: "Solid Pseudopapillary Neoplasm",
    group: "Pancreas — Epithelial Tumors",
    clue: "Adolescent-predominant pancreatic tumor with poorly cohesive cells, delicate vessels, pseudopapillae, and nuclear/cytoplasmic β-catenin.",
    summary:
      "A low-grade malignant pancreatic neoplasm composed of poorly cohesive polygonal cells around delicate vessels, often with cystic degeneration and hemorrhage.",
    clinical: [
      "Predominantly affects adolescent girls; mean age approximately 14 years.",
      "Strong female predominance.",
      "Often arises in the body or tail of the pancreas in children.",
      "Presents with abdominal pain, dyspepsia, early satiety, nausea, vomiting, or a palpable mass; serum tumor markers are usually negative.",
    ],
    criteria: [
      "Characteristic patient demographic and a well-circumscribed, often encapsulated solid-cystic pancreatic mass.",
      "Solid and pseudopapillary architecture with loosely cohesive cells attached to delicate capillaries.",
      "Nuclear and cytoplasmic β-catenin expression is characteristic.",
      "Exclude pancreatoblastoma and acinar cell carcinoma with acinar markers; exclude PanNET with an appropriate panel.",
      "Recognize rare high-grade carcinoma transformation with diffuse atypia and increased mitotic activity.",
    ],
    histology: [
      "Solid areas contain relatively uniform polygonal cells with numerous delicate capillary-sized vessels.",
      "Degeneration causes pseudopapillae, hemorrhage, foamy macrophages, and cholesterol clefts/crystals.",
      "Tumor cells have eosinophilic, clear, or vacuolated cytoplasm and uniform round-to-ovoid nuclei with finely stippled chromatin and frequent grooves.",
      "PAS-positive hyaline globules may be present but are nonspecific.",
      "Mitoses are usually rare; a high-grade transformed component shows diffuse atypia and increased mitotic activity.",
    ],
    ihc: [
      "Abnormal nuclear and cytoplasmic β-catenin and nuclear LEF1 are characteristic.",
      "E-cadherin shows loss or abnormal cytoplasmic localization.",
      "Cyclin D1, CD10, CD99 (dot-like), progesterone receptor, androgen receptor, glutamine synthetase, TFE3, and SOX11 may be positive.",
      "Cytokeratins, synaptophysin, and CD56 may be variably expressed; chromogranin A, PDX1, trypsin, and BCL10 are generally negative.",
    ],
    molecular: [
      "Activating CTNNB1 exon 3 mutations or inactivating APC alterations are characteristic.",
      "KRAS, GNAS, CDKN2A, SMAD4, and VHL alterations are typically absent.",
    ],
    differential: [
      {
        name: "Pancreatoblastoma",
        distinction:
          "Pancreatoblastoma has characteristic squamoid nests and acinar differentiation with trypsin/BCL10 positivity; SPN shows β-catenin pathway activation and pseudopapillary degeneration.",
      },
      {
        name: "Pancreatic Acinar Cell Carcinoma",
        distinction:
          "Acinar cell carcinoma shows zymogen granules and strong trypsin/chymotrypsin/BCL10; SPN lacks acinar markers and has characteristic β-catenin/E-cadherin abnormalities.",
      },
    ],
  },
  {
    name: "Gastroblastoma",
    group: "Gastrointestinal — Gastric Tumors",
    clue: "Rare gastric biphasic tumor with bland epithelial and spindle-cell components and MALAT1::GLI1 fusion.",
    summary:
      "A rare low-grade gastric epitheliomesenchymal neoplasm with metastatic potential, composed of epithelial and spindle-cell components.",
    clinical: [
      "Reported age range is 9–56 years; mean age approximately 24 years, median 27 years.",
      "Reported cases show male predominance.",
      "Intramural gastric tumor, most often in the antrum, but the body may be involved.",
      "Presents with abdominal pain/discomfort, palpable mass, gastrointestinal bleeding, or anemia.",
    ],
    criteria: [
      "Establish gastric origin and a biphasic neoplasm composed of epithelial and spindle-cell components.",
      "Epithelial component expresses cytokeratins.",
      "MALAT1::GLI1 fusion strongly supports the diagnosis.",
      "Neither component is usually overtly malignant cytologically; metastatic potential nevertheless exists.",
    ],
    histology: [
      "Multinodular tumor with variable proportions of epithelial and mesenchymal components.",
      "Mesenchymal component consists of bland ovoid-to-spindle cells with pale, clear, or eosinophilic cytoplasm, often in a reticular pattern.",
      "Epithelial component forms rosettes with eosinophilic secretions, cords, or solid epithelioid nests.",
      "Mitoses are usually rare and marked atypia/pleomorphism is generally absent.",
    ],
    ihc: [
      "Epithelial component expresses pancytokeratin (AE1/AE3 and CAM5.2).",
      "Mesenchymal component expresses CD10, CD56, and vimentin.",
      "Both components show strong diffuse GLI1 expression.",
      "SMA, calretinin, CD34, desmin, and S100 are typically negative; KIT is rarely positive.",
    ],
    molecular: [
      "Recurrent in-frame MALAT1::GLI1 fusion is characteristic and can be detected by molecular testing or FISH.",
      "GLI1 pathway activation is a key biologic feature.",
    ],
    differential: [
      {
        name: "Plexiform Fibromyxoma",
        distinction:
          "Plexiform fibromyxoma is a gastric myofibroblastic tumor with plexiform growth and myxoid stroma; it lacks the characteristic biphasic epithelial component, although GLI1-related fusions may overlap.",
      },
      {
        name: "Gastrointestinal Stromal Tumor",
        distinction:
          "GIST is typically a spindle or epithelioid mesenchymal neoplasm with KIT/DOG1 expression and lacks the biphasic keratin-positive epithelial component of gastroblastoma.",
      },
    ],
  },
  {
    name: "Appendiceal Neuroendocrine Tumor",
    group: "Appendix — Neuroendocrine Tumors",
    clue: "Usually small, well-differentiated enterochromaffin-cell NET at the appendiceal tip, incidentally found after appendectomy.",
    summary:
      "A well-differentiated neuroendocrine tumor arising in the appendix; pediatric cases are predominantly serotonin-producing enterochromaffin-cell tumors.",
    clinical: [
      "Mean age at presentation is approximately 11–12 years.",
      "Girls are more commonly affected than boys.",
      "Most arise at the appendiceal tip; the body is less often involved and the base is uncommon.",
      "Approximately 85% are discovered incidentally during appendectomy for acute appendicitis; carcinoid syndrome is very uncommon.",
    ],
    criteria: [
      "Uniform neuroendocrine cells with organoid, nested, trabecular, acinar, or ribbon-like architecture.",
      "Finely stippled neuroendocrine chromatin and low proliferative activity; most pediatric cases are WHO grade 1.",
      "Expression of synaptophysin and chromogranin A or B supports neuroendocrine differentiation.",
      "Carefully examine the appendiceal tip microscopically, as small tumors may be grossly occult.",
    ],
    histology: [
      "Uniform polygonal cells form nests, trabeculae, ribbons, and occasional acini.",
      "Nuclei show coarsely stippled chromatin and inconspicuous nucleoli.",
      "Mitoses are infrequent to absent; necrosis is very uncommon.",
      "Peripheral nuclear palisading and luminal formations may be present.",
      "Tumor often involves deep muscularis propria and subserosa with limited mucosal involvement; mesoappendiceal extension may occur.",
      "Acute appendicitis may distort architecture and produce focal cytologic atypia.",
    ],
    ihc: [
      "Synaptophysin and chromogranin A/B are positive.",
      "Serotonin expression supports enterochromaffin-cell differentiation.",
      "S100-positive sustentacular-like cells may surround nests in some cases.",
    ],
    molecular: [
      "Molecular testing is not clinically relevant for routine diagnosis in this entity.",
    ],
    differential: [
      {
        name: "Gastrointestinal Lymphoma",
        distinction:
          "Lymphoma forms a lymphoid infiltrate or mass and expresses lineage-specific lymphoid markers rather than synaptophysin/chromogranin; correlate with morphology and immunophenotype.",
      },
      {
        name: "Gastrointestinal Stromal Tumor",
        distinction:
          "GIST is a mesenchymal spindle/epithelioid tumor expressing KIT and DOG1, not a well-differentiated neuroendocrine epithelial neoplasm.",
      },
    ],
  },
];

const entities: Entity[] = baseEntities.map((entity) => {
  const peers = baseEntities.filter(
    (peer) => peer.group === entity.group && peer.name !== entity.name,
  );
  const existing = new Set(entity.differential.map((item) => item.name));
  const reciprocal = peers
    .filter((peer) => !existing.has(peer.name))
    .map((peer) => ({
      name: peer.name,
      distinction: `Consider this entity when the morphology or clinical setting differs from ${entity.name}. ${peer.clue}`,
    }));
  return { ...entity, differential: [...entity.differential, ...reciprocal] };
});

const overview = entities.map((entity) => ({
  name: entity.name,
  group: entity.group,
  clue: entity.clue,
  key: entity.criteria[0],
}));

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((entity) => entity.group))),
];

export default function DigestiveSystemTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((entity) => entity.name),
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const searchable = [
        entity.name,
        entity.group,
        entity.clue,
        entity.summary,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.histology,
        ...entity.ihc,
        ...entity.differential.map(
          (item) => `${item.name} ${item.distinction}`,
        ),
        ...(entity.molecular ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return (
        (group === "All groups" || entity.group === group) &&
        searchable.includes(normalized)
      );
    });
  }, [query, group]);

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  const expandAll = () => setExpanded(entities.map((entity) => entity.name));
  const collapseAll = () => setExpanded([]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Digestive System Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic classification of pediatric and young-adult digestive
          system neoplasms, integrating clinical presentation, essential
          morphologic criteria, immunophenotype, and diagnostically relevant
          molecular findings across hepatic, pancreatic, and gastrointestinal
          tumors.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Start with the organ, age, dominant architecture, and
            lineage-specific differentiation.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Group</th>
                <th className="px-4 py-3">Characteristic Pattern</th>
                <th className="px-4 py-3">Essential Diagnostic Clue</th>
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
            <strong>1. Confirm the organ of origin.</strong> Separate primary
            hepatic, pancreatic, gastric, and appendiceal lesions from
            metastases and adjacent-organ tumors.
          </li>
          <li>
            <strong>2. Use age and clinical setting.</strong> An infantile
            hepatic mass, an adolescent pancreatic mass, and an appendiceal
            incidentaloma have very different prior probabilities.
          </li>
          <li>
            <strong>3. Identify the dominant lineage and architecture.</strong>{" "}
            Assess hepatocytic, biliary, endothelial, mesenchymal, acinar,
            neuroendocrine, or biphasic differentiation.
          </li>
          <li>
            <strong>4. Apply focused immunohistochemistry.</strong> Use
            lineage-specific panels: hepatocellular markers, endothelial
            markers/GLUT1, acinar enzymes, neuroendocrine markers, and β-catenin
            pathway markers as appropriate.
          </li>
          <li>
            <strong>5. Reserve molecular testing for classification.</strong>{" "}
            Prioritize CTNNB1/APC, DNAJB1::PRKACA, TERT promoter, MALAT1::GLI1,
            and other alterations when they resolve a defined diagnostic
            question.
          </li>
          <li>
            <strong>6. Sample heterogeneous tumors adequately.</strong> Look for
            focal squamoid nests in pancreatoblastoma, mixed components in
            hepatoblastoma, and distinct malignant or transformed areas.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search entities, criteria, morphology, markers, or genes..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(event) => setGroup(event.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <button
          onClick={
            expanded.length === entities.length ? collapseAll : expandAll
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
                aria-expanded={isOpen}
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
                        {entity.differential.map((item) => (
                          <div
                            key={item.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {item.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {item.distinction}
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
        Diagnostic interpretation should be integrated with age, clinical
        history, imaging, tumor sampling, and appropriate ancillary studies.
        Molecular findings should be interpreted in the context of morphology
        and the specific diagnostic question.
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
