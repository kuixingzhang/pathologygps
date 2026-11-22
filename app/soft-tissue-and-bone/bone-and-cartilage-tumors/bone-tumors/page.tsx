"use client";

import { useMemo, useState, type ReactNode } from "react";

type Differential = [string, string];
type Entity = {
  name: string;
  group: string;
  site: string;
  criteria: string;
  morphology: string[];
  ihc: string;
  molecular: string;
  differential: Differential[];
};

const groupLabels: Record<string, string> = {
  osteogenic: "Osteogenic tumors",
  osteoclastic: "Osteoclastic giant cell–rich tumors",
  notochordal: "Notochordal tumors",
  other: "Other tumors of bone",
};

const entities: Entity[] = [
  {
    name: "Osteoma",
    group: "osteogenic",
    site: "Osteomas predominantly affect bones formed by membranous ossification, which include calvarial, facial, and jaw bones. They rarely occur outside the skull. Intramedullary lesions generally originate in the epiphysis and metaphysis of long bones, the pelvic bones, and the vertebral bodies.",
    criteria:
      "Essential: a benign bone tumor with compatible imaging; arising on the surface of bone or within the medullary cavity; composed of lamellar/cortical-type or trabecular bone.",
    morphology: [
      "Osteomas are predominantly composed of mature lamellar/cortical-type bone and can be divided histologically into compact and (less frequently) spongious subtypes.",
      "In cancellous areas, a well vascularized and moderately cellular and fibrous stroma fills the marrow spaces.",
      "Osteoblasts and osteocytes are generally inconspicuous; inflammatory infiltrates are typically absent.",
    ],
    ihc: "Nuclear β-catenin expression is present in cases with CTNNB1 mutation.",
    molecular: "CTNNB1 variant testing can be considered in ambiguous cases.",
    differential: [
      [
        "Bone island",
        "Intramedullary compact bone blends with trabeculae; osteoma is typically surface-based.",
      ],
      [
        "Sclerotic metastasis",
        "Use clinical history and CT density; multiple bone islands may mimic metastases.",
      ],
    ],
  },
  {
    name: "Osteoid osteoma",
    group: "osteogenic",
    site: "Long bones are affected in 50% of patients, particularly femur and tibia. Other typical locations include the small bones of the hands and feet and the spine, where the neural arch (posterior elements) is most commonly affected. Uncommon locations include flat bones; it is rare in the craniofacial bones. Osteoid osteoma preferentially involves the cortex (75% of cases) and less frequently the medulla (25%); subperiosteal/surface lesions are rare.",
    criteria:
      "Essential: bone tumor with compatible imaging; microtrabeculae of woven bone rimmed by plump osteoblasts in a vascularized stroma. Desirable: nocturnal pain relieved by NSAIDs; abrupt transition between central nidus and peripheral sclerotic bone.",
    morphology: [
      "The central portion of the lesion (nidus) contains differentiated plump osteoblasts presenting as a single layer around trabeculae of unmineralized or mineralized woven bone.",
      "Vascularized connective tissue, within which there are fibroblast-like stromal cells and cells differentiating into osteoblasts, separates the trabeculae.",
      "The osteoid may be microscopically disposed in a sheet-like configuration, but it is often organized into microtrabecular arrays.",
    ],
    ihc: "FOS (c-FOS) is positive in the majority of the cases, as a result of the FOS rearrangement, although the staining is not usually required.",
    molecular: "",
    differential: [
      [
        "Osteoblastoma",
        "Nidus <20 mm and characteristic nocturnal NSAID-responsive pain favor osteoid osteoma; larger lesions favor osteoblastoma.",
      ],
      [
        "Brodie abscess",
        "Look for infectious clinical/imaging features rather than a small osteoblastic nidus.",
      ],
    ],
  },
  {
    name: "Osteoblastoma",
    group: "osteogenic",
    site: "The spine, in particular the neural arch (posterior elements), is the most frequent site, affected in more than one third of cases. Although the tumors may extend into the vertebral body, they are very rarely seen in isolation in the vertebral body. Other sites include the pelvis, the limbs (particularly the femur and tibia), the jaws, and other craniofacial bones. However, any bone may be involved.",
    criteria:
      "Essential: a bone tumor with compatible localization and imaging; trabeculae of woven bone rimmed by plump osteoblasts in a vascularized stroma. Desirable: FOS rearrangement or FOS (c-FOS) overexpression.",
    morphology: [
      "Osteoblastomas are microscopically similar to osteoid osteomas.",
      "Osteoblastomas are characterized by interconnecting, delicate, woven bone trabeculae, usually rimmed by a single layer of polygonal osteoblasts.",
      "The trabeculae may show different levels of mineralization, from osteoid to densely mineralized woven bone that shows multiple cement lines (pagetoid appearance).",
    ],
    ihc: "FOS (c-FOS) immunohistochemistry is detected in the majority of cases and may be helpful when present.",
    molecular:
      "FOS gene rearrangement or rarely FOSB gene rearrangement is found in the majority of osteoblastomas.",
    differential: [
      [
        "Osteoid osteoma",
        "Usually ≥20 mm, often spinal posterior elements; pain is less characteristically NSAID-responsive.",
      ],
      [
        "Osteoblastoma-like osteosarcoma",
        "Host-bone permeation, destructive growth, and atypical mitoses favor osteosarcoma.",
      ],
    ],
  },
  {
    name: "Low-grade central osteosarcoma",
    group: "osteogenic",
    site: "LGCOS typically arises in the metaphysis of long bones, predominantly the femur and tibia. Jaw bones, small tubular bones, and axial bones are rarely involved.",
    criteria:
      "Essential: intramedullary infiltrating bone tumor with compatible imaging; relatively uniform neoplastic spindle cells with limited cytological atypia and mitotic activity; collagenous stroma and well-formed neoplastic bony trabeculae. Desirable: MDM2 amplification.",
    morphology: [
      "LGCOS grows with an infiltrative pattern encasing pre-existing trabecular bone and percolating through Haversian systems.",
      "It consists of mildly to moderately cellular fascicles of spindle cells with fusiform nuclei that have fine chromatin, small nucleoli and tapered ends, and eosinophilic cytoplasm.",
      "The mild nuclear atypia is in the form of enlargement and coarsening of chromatin.",
    ],
    ihc: "Positivity for MDM2 and/or CDK4 can be a surrogate for amplification of MDM2 when molecular testing is limited (see Diagnostic molecular pathology).",
    molecular:
      "Testing for MDM2 amplification is helpful to differentiate LGCOS from benign mimics. Because MDM2 amplification is rare in conventional osteosarcoma, it may help separate LGCOS with high-grade transformation from conventional osteosarcoma in the appropriate histological context. In biopsy material lacking bone formation, the presence of MDM2 amplification can be helpful in excluding desmoplastic fibroma. Unlike fibrous dysplasia, LGCOS lacks GNAS variant. The lack of MDM2 amplification does not exclude the diagnosis of LGCOS.",
    differential: [
      [
        "Fibrous dysplasia",
        "MDM2 amplification supports low-grade central osteosarcoma; GNAS alteration supports fibrous dysplasia.",
      ],
      [
        "Desmoplastic fibroma",
        "Neoplastic osteoid/bone and MDM2 amplification favor osteosarcoma; desmoplastic fibroma lacks tumor bone.",
      ],
    ],
  },
  {
    name: "Osteosarcoma",
    group: "osteogenic",
    site: "Conventional osteosarcomas can arise in any bone, but the vast majority originate in the long bones of the extremities, most commonly in the distal femur (30%), followed by the proximal tibia (15%) and the proximal humerus (15%), which are sites of the most proliferative growth plates. In long bones, the tumor is usually metaphysial (90%) and rarely diaphysial (9%) or epiphysial. The jaws are the fourth most common site of origin. Involvement of the small bones of the extremities and multicentr",
    criteria:
      "Essential: bone tumor with compatible imaging; bone formation by tumor cells; permeative and destructive growth pattern; telangiectatic osteosarcoma: blood-filled or empty cystic spaces separated by fibrous septa; small cell osteosarcoma: small blue round cell morphology with focal neoplastic bone formation. Desirable: tumor cells with high-grade atypia; atypical mitotic figures frequently present.",
    morphology: [
      "Conventional osteosarcoma shows a broad histomorphological spectrum; essential to the diagnosis is the identification of neoplastic bone formation by malignant mesenchymal cells.",
      "Osteosarcoma grows in an infiltrating and permeating pattern, replacing the marrow space, encasing and eroding the pre-existing bony trabeculae, and infiltrating into the Haversian system.",
      "It reaches the subperiosteal space, often infiltrating the surrounding soft tissues.",
    ],
    ihc: "The immunophenotype of osteosarcoma is variable and in the vast majority of cases not required for the diagnosis. Osteosarcoma commonly expresses SATB2, which, however, is not. Keratin and EMA (particularly when showing epithelioid morphology) are occasionally positive, making it particularly difficult to distinguish metastatic carcinoma with reactive osteoid formation. MUC4 negativity can help rule out sclerosing epithelioid fibrosarcoma in which the typical sclerotic and collagenous stroma can mimic neoplastic bone formation. FOS expression, typically seen in osteoid osteoma and osteoblastoma, is typically negative or only focally positive in osteosarcoma.",
    molecular:
      "No specific diagnostic molecular pathology tests are available.",
    differential: [
      [
        "Ewing sarcoma",
        "Small-cell osteosarcoma produces malignant osteoid; Ewing sarcoma does not.",
      ],
      [
        "Aneurysmal bone cyst",
        "Telangiectatic osteosarcoma has malignant cells in septa/solid areas and destructive imaging.",
      ],
      [
        "Chondrosarcoma",
        "Osteosarcoma produces malignant osteoid; chondrosarcoma produces malignant cartilage.",
      ],
    ],
  },
  {
    name: "Parosteal osteosarcoma",
    group: "osteogenic",
    site: "Approximately 70% of parosteal osteosarcomas are located at the posterior aspect of the distal femur in the metaphysial region; the next most common sites are the proximal portions of the tibia and humerus. Other less frequently involved sites include the craniofacial bones, ribs, and small bones of the hands and feet.",
    criteria:
      "Essential: a bone tumor with compatible imaging; parosteal location; low-grade spindle cell tumor with woven bone formation. Desirable: MDM2 amplification.",
    morphology: [
      "Parosteal osteosarcoma is composed of well-formed bone trabeculae with intervening fascicles of spindle cells.",
      "Typically, the tumor is hypocellular with minimal atypia and low mitotic activity.",
      "At the periphery of the tumor, the spindle cell component may show invasion into the adjacent skeletal muscle.",
    ],
    ihc: "Immunohistochemical study of MDM2 and CDK4 may provide a useful diagnostic tool in parosteal osteosarcoma, particularly in small biopsies and/or when molecular access is limited. Analysis of MDM2 and CDK4 may also help identify high-grade transformation in parosteal osteosarcoma with limited low-grade components. Differential diagnosis Because of its deceptively bland appearance, parosteal osteosarcoma must be differentiated from a variety of benign fibrous and fibro-osseous lesions, including florid reactive periostitis, juxtacortical myositis ossificans, and desmoplastic fibroma. In addition to the clinical, radiological, and pathological features, MDM2 amplification assay or the surrogate immunostaining of MDM2 and CDK4 is helpful in the distinction, because the above-mentioned mimics are negative for MDM2 amplification. Unlike in osteochondroma, the cartilage cap in some parosteal osteosarcomas is mildly hypercellular and the chondrocytes show mild atypia and lack the perpendicular columnar arrangement seen in osteochondromas. Parosteal osteosarcoma can be morphologically distinguished from periosteal osteosarcoma and high-grade surface osteosarcoma, the other two subtypes of surface osteosarcoma. The presence of a focal low-grade spindle cell component and/or MDM2 amplification suggests high-grade transformation of parosteal osteosarcoma over high-grade surface osteosarcoma.",
    molecular:
      "Demonstration of MDM2 amplification can be used to confirm the diagnosis.",
    differential: [
      [
        "Periosteal osteosarcoma",
        "Parosteal tumor is typically low-grade and heavily ossified; periosteal osteosarcoma is usually chondroblastic/intermediate grade.",
      ],
      [
        "Myositis ossificans",
        "Zonal maturation and lack of atypia favor myositis ossificans; MDM2 amplification supports parosteal osteosarcoma.",
      ],
    ],
  },
  {
    name: "Periosteal osteosarcoma",
    group: "osteogenic",
    site: "Periosteal osteosarcoma usually occurs in the diaphysis and metadiaphysis of the femur and tibia. Other long bones and flat bones are involved uncommonly, with rare examples reported in craniofacial and acral bones. Bilateral tumors have been rarely documented.",
    criteria:
      "Essential: a bone tumor with compatible imaging; surface location under the periosteum; intermediate-grade, largely chondroblastic osteosarcoma.",
    morphology: [
      "The tumor comprises poorly defined lobules of cytologically atypical cartilage.",
      "The tumor cells often condense at the lobular periphery, merging with hypercellular tissue with primitive spindle cells.",
      "Tumor bone or osteoid is often produced in the interlobular septa or at the lobular periphery, but the transition to osteoid matrix also occurs within the cartilage lobule.",
    ],
    ihc: "",
    molecular:
      "MDM2/CDK4 amplification (as in parosteal osteosarcoma) and IDH1 and/or IDH2 mutations (as in periosteal chondrosarcoma) are absent in periosteal osteosarcoma.",
    differential: [
      [
        "Periosteal chondrosarcoma",
        "Periosteal osteosarcoma shows osteoid-producing malignant cells; chondrosarcoma produces cartilage.",
      ],
      [
        "Parosteal osteosarcoma",
        "Periosteal lesion is commonly chondroblastic and intermediate-grade; parosteal is low-grade and often densely ossified.",
      ],
    ],
  },
  {
    name: "High-grade surface osteosarcoma",
    group: "osteogenic",
    site: "Tumors usually involve the long bones. The femur is the most common site, followed by the tibia. The humerus and fibula are less frequently involved. Other rarely affected sites include the radius, the short tubular bones, and the pelvis. In the long bones, high-grade surface osteosarcomas are most frequently diaphysial or diametaphysial.",
    criteria:
      "Essential: bone tumor with compatible imaging; histologically high-grade osteosarcoma; arising on the surface of the bone.",
    morphology: [
      "These tumors are histologically identical to high-grade conventional osteosarcoma, with the same degree of matrix variability.",
      "This includes cases with prominent chondroblastic differentiation, which show greater cytological atypia than periosteal osteosarcoma.",
      "No areas of low-grade osteosarcoma should be demonstrable.",
    ],
    ihc: "",
    molecular: "",
    differential: [
      [
        "Parosteal osteosarcoma with dedifferentiation",
        "High-grade surface tumor is high-grade throughout or lacks a low-grade parosteal component; sample thoroughly.",
      ],
      [
        "Conventional osteosarcoma",
        "Surface origin distinguishes it from a primarily intramedullary tumor.",
      ],
    ],
  },
  {
    name: "Secondary osteosarcoma",
    group: "osteogenic",
    site: "Paget sarcoma most commonly affects the femur (34%), pelvis (24%), and humerus (24%), reflecting the distribution of uncomplicated Paget disease of bone (PDB), except for a disproportionately high and low incidence in the humerus (24%) and the spine (2%), respectively. Multifocal synchronous tumors may occur (2–17%). Long-bone lesions tend to be metaphysial, and tumors may occur at the site of a previous fracture. Radiation-associated osteosarcoma most frequently occurs after radiation of the ",
    criteria:
      "Essential: bone tumor with compatible imaging; known history of previous radiation therapy or the presence of an underlying bone abnormality; osteosarcoma histology. Desirable: histological evidence of underlying abnormal bone.",
    morphology: [
      "The histological features of secondary osteosarcoma are not distinguishable from those of primary osteosarcoma.",
      "Osteoblastic and chondroblastic high-grade osteosarcomas are the most common subtypes.",
      "The bone within or around the tumor can show histological features of an underlying disease.",
    ],
    ihc: "",
    molecular: "",
    differential: [
      [
        "Conventional osteosarcoma",
        "Older age, prior radiation, Paget disease, or other underlying bone abnormality supports secondary osteosarcoma.",
      ],
      [
        "Radiation-associated sarcoma",
        "Establish prior radiation field and histologic osteoid production.",
      ],
    ],
  },
  {
    name: "Aneurysmal bone cyst",
    group: "osteoclastic",
    site: "ABC can affect any bone, but most often arises in the metaphysis of long bones, especially the femur, tibia, and humerus (50%); the posterior elements of vertebral bodies (25%) and pelvis (10%); as well as the small tubular bones. Rare examples occur in the soft tissues.",
    criteria:
      "Essential: bone tumor with compatible imaging; hemorrhagic cystic or solid lesion composed of fibroblasts, osteoclast-like giant cells, haemosiderin pigment, and new bone formation. Desirable: USP6 rearrangement.",
    morphology: [
      "ABC is well circumscribed and contains blood-filled cystic spaces separated by fibrous septa.",
      "These septa are composed of a moderately dense, cellular proliferation of bland fibroblasts, with scattered osteoclast-type multinucleated giant cells and reactive woven bone rimmed by osteoblasts.",
      "The woven bone often follows the contours of the fibrous septa.",
    ],
    ihc: "Immunohistochemically, the lack of expression of mutant histones H3.3 G34W (encoded by H3-3A) and K36M (encoded by H3-3B) could help distinguish ABCs from giant cell tumors of bone and chondroblastomas with ABC-like changes, respectively. Differential diagnosis ABC-like areas can be seen in other benign and malignant bone tumors that have undergone hemorrhagic cystic change. The term “secondary aneurysmal bone cyst” was previously used for such areas but is no longer acceptable. The majority of ABC-like changes develop in association with benign neoplasms, most commonly giant cell tumor of bone, osteoblastoma, chondroblastoma, and fibrous dysplasia. However, ABC-like changes may also complicate sarcomas, especially osteosarcoma. The most important differential diagnosis is telangiectatic osteosarcoma because both may have similar imaging characteristics and gross appearance. In telangiectatic osteosarcoma, the fibrous septa contain obvious hyperchromatic, pleomorphic neoplastic cells, often displaying atypical mitotic figures, features not seen in ABC.",
    molecular:
      "USP6 locus rearrangement or USP6 fusion genes can be detected by molecular cytogenetic analysis (FISH) or next-generation sequencing, respectively.",
    differential: [
      [
        "Telangiectatic osteosarcoma",
        "Malignant atypical cells in septa/solid nodules and destructive imaging argue against primary ABC.",
      ],
      [
        "Giant cell tumor with secondary ABC",
        "Identify the underlying solid tumor and its characteristic mononuclear stromal cells.",
      ],
    ],
  },
  {
    name: "Giant cell tumor of bone",
    group: "osteoclastic",
    site: "Giant cell tumor of bone typically affects the ends of long bones (distal femur, proximal tibia, distal radius, and proximal humerus) in skeletally mature individuals. Giant cell tumors in the axial skeleton arise most commonly in the sacrum and vertebral body. Flat bone involvement is rare but pelvic bones are most frequently affected. Small numbers of giant cell tumors occur in the tubular bones of the hands and feet and, rarely, the gnathic bones. Malignant giant cell tumors share an anat",
    criteria:
      "Essential: bone tumor with compatible imaging; conventional tumors show either (1) numerous large osteoclasts together with a mononuclear cell neoplastic component without atypia or (2) fibrous histiocytoma–like morphology in the right imaging context; malignant giant cell tumors of bone show overt features of malignancy, including osteosarcomatous and chondrosarcomatous differentiation, and either (1) an associated conventional component or (2) a prior history of a conventional tumor. Desirable: H3.3 G35 (G34) alteration.",
    morphology: [
      "Giant cell tumor of bone is composed of neoplastic mononuclear cells with numerous admixed non-neoplastic osteoclast-type giant cells, some of which contain many nuclei.",
      "The mononuclear cells in giant cell tumor usually appear histiocytoid, with amphophilic cytoplasm, vesicular nuclei, and distinct nucleoli.",
      "Some examples, formerly termed “benign fibrous histiocytoma” of bone, are dominated by spindle cell cytomorphology, with mixed fascicles and whorls of neoplastic cells and admixed histiocytes.",
    ],
    ihc: "Histone H3 G34W immunohistochemistry is a reliable surrogate marker for molecular analysis, with 85% sensitivity for giant cell tumor of bone in general and essentially 100% specificity. However, some malignant giant cell tumors of bone acquire deletion of the H3-3A mutant allele, such that the sensitivity is lower in malignant tumors. Differential diagnosis Benign fibrous histiocytomas located in the epiphysis in the mature skeleton are now generally considered to represent giant cell tumor of bone and those in the metaphysis to represent non-ossifying fibroma. Tumors with extensive aneurysmal change can be difficult to distinguish from primary aneurysmal bone cyst. The differential diagnosis of malignant giant cell tumor is undifferentiated sarcoma of bone and giant cell–rich osteosarcoma.",
    molecular:
      "H3-3A or, rarely, H3-3B variants are detected in as many as 96% of giant cell tumors; 90% of these are represented by G35W (previously G34W). The H3.3 G35L (G34L) variant is much less common and is mostly found in tumors in the small bones of the hand, patella, and axial skeleton. There have also been occasional reports of H3.3 G35V (G34V), H3.3 G35R (G34R), and H3.3 G35M (G34M). Detection of the variant does not distinguish between conventional and malignant giant cell tumors, and some malignant giant cell tumors of bone acquire H3-3A gene deletions, such that the mutant allele is lost. Immunohistochemistry for p53 and/or H3K27me3 is abnormal in about 30–50% of malignant giant cell tumors. Complex copy-number alterations are present in about 90% of reported malignant giant cell tumors of bone and might be helpful to distinguish them from benign tumors.",
    differential: [
      [
        "Brown tumor",
        "Correlate calcium/PTH; brown tumor reflects hyperparathyroidism and may be multifocal.",
      ],
      [
        "Aneurysmal bone cyst",
        "GCT has evenly distributed osteoclast-like giant cells in neoplastic mononuclear stroma; ABC is blood-filled with fibrous septa.",
      ],
    ],
  },
  {
    name: "Brown tumor of hyperparathyroidism",
    group: "osteoclastic",
    site: "The most commonly affected bones include the ribs, clavicles, pelvis, and long bones. Craniofacial involvement occurs in approximately 4% of cases, most frequently affecting the mandible (70% of cases). Brown tumors may present as solitary or multifocal lesions and radiologically can mimic metastatic disease.",
    criteria:
      "Essential: monomorphic spindle cells in a storiform pattern; osteoclastic giant cells; hemorrhage; elevated PTH levels.",
    morphology: [
      "Brown tumors typically consist of monomorphic and cytologically bland spindle cells arranged in a haphazard and sometimes storiform pattern.",
      "They contain varying amounts of osteoclastic giant cells, hemorrhage, and siderophages and show a particularly well-vascularized background.",
      "Osteoclastic giant cells are usually small and tend to cluster in areas of hemorrhage.",
    ],
    ihc: "",
    molecular:
      "KRAS variant testing is usually not required in the typical context but might be considered in equivocal cases to rule out solid ABC.",
    differential: [
      [
        "Giant cell tumor of bone",
        "Biochemical hyperparathyroidism and multifocal lesions favor brown tumor; correlate PTH, calcium, phosphate.",
      ],
      [
        "Aneurysmal bone cyst",
        "Brown tumor may show giant cells and hemorrhage but requires clinical biochemical correlation.",
      ],
    ],
  },
  {
    name: "Non-ossifying fibroma",
    group: "osteoclastic",
    site: "The vast majority of NOFs arise in the metaphysis of long bones of the lower extremities, especially around the knee and in the distal tibia. Multifocal lesions may occur.",
    criteria:
      "Essential: bone tumor with compatible imaging; storiform proliferation of plump spindle cells; intermingled giant cells, haemosiderophages, and clusters of foamy histiocytes.",
    morphology: [
      "Tumors consist of bland, spindle-shaped cells that are arranged in a storiform growth pattern.",
      "Mitotic activity is generally low.",
      "Osteoclast-type giant cells, often appearing squeezed, are scattered throughout the lesion.",
    ],
    ihc: "",
    molecular:
      "KRAS and FGFR1 variant testing can be considered in ambiguous cases. DNA methylation profiling revealed defined clusters for NOF, distinguishing them from morphological mimics.",
    differential: [
      [
        "Fibrous dysplasia",
        "NOF is typically eccentric/cortical with storiform fibroblasts and foamy histiocytes; fibrous dysplasia has irregular woven bone in fibrous stroma.",
      ],
      [
        "Giant cell tumor",
        "NOF is usually metaphyseal and eccentric in skeletally immature patients.",
      ],
    ],
  },
  {
    name: "Benign notochordal cell tumor",
    group: "notochordal",
    site: "BNCTs occur in the skull base, vertebral bodies, and sacrococcygeal spine. Occasionally, they can be multiple and may be associated with chordoma. Small numbers of extraskeletal BNCTs have been reported, including in the lung.",
    criteria:
      "Essential: bone tumor with compatible imaging; notochordal differentiation without atypia; positive for brachyury.",
    morphology: [
      "BNCT consists of solid sheets of adipocyte-like vacuolated tumor cells and eosinophilic, less-vacuolated tumor cells.",
      "The nuclei are usually bland, and mitotic figures are absent.",
      "Some cystic spaces filled with colloid-like eosinophilic material may be present.",
    ],
    ihc: "BNCT is immunoreactive for brachyury, cytokeratin, EMA, and (variably) S100. Differential diagnosis Distinction between BNCT and chordoma can be difficult, particularly on a biopsy: the juxtaposition of a chordoma with BNCT confounds the challenge. Ecchordosis physaliphora spheno-occipitalis (EPS) can be confused with BNCT. EPS represents extraosseous intradural residual embryonic notochordal tissues, typically located in the dorsal region of the clivus. EPS is often incidental and found in 0.6–2.0% of autopsy cases and in 1.7% of patients on MRI. Microscopically, unlike BNCT, EPS resembles chordoma including showing basophilic myxoid matrix.",
    molecular: "",
    differential: [
      [
        "Conventional chordoma",
        "BNCT lacks destructive growth/soft tissue mass and usually retains marrow architecture; chordoma is destructive and mass-forming.",
      ],
      [
        "Metastatic carcinoma",
        "Brachyury and notochordal morphology support notochordal lineage; correlate imaging.",
      ],
    ],
  },
  {
    name: "Conventional chordoma",
    group: "notochordal",
    site: "Chordomas primarily arise in the axial skeleton, involving bones from the base of the skull to the coccyx. The most common site is the sacrum, followed by the skull base, the craniovertebral junction, and in the mobile spine. Rarely, extra-axial, extraskeletal, and axial multicentric chordomas have been reported. Tumors in children and young adults show a predilection for the skull base and cervical vertebrae. Chondroid chordoma predominantly occurs at the skull base.",
    criteria:
      "Essential: bone tumor with compatible imaging; presence of notochordal differentiation (nuclear brachyury expression); cells are usually embedded in abundant extracellular matrix.",
    morphology: [
      "Conventional chordoma is composed of large epithelioid cells with clear to light eosinophilic cytoplasm, arranged in lobules separated by fibrous septa frequently containing chronic inflammatory cells.",
      "The tumor cells may have bubbly cytoplasm (physaliphorous cells).",
      "They are arranged as cords and nests embedded within an abundant extracellular myxoid matrix or as more densely arranged epithelioid packets.",
    ],
    ihc: "The tumor is immunoreactive for brachyury, cytokeratin, and EMA and shows variable S100 positivity. Brachyury staining is nuclear and typically diffuse. While brachyury is a highly specific marker for notochordal differentiation, rare expression has been reported in other tumor types. The vast majority show normal expression of SMARCB1 (INI1). Differential diagnosis The diagnostic hallmark of chordoma is the nuclear expression of brachyury, which helps distinguish it from other tumors such as metastatic carcinoma, chondrosarcoma, chordoid meningioma, and myoepithelial tumor of bone.",
    molecular: "",
    differential: [
      [
        "Benign notochordal cell tumor",
        "Chordoma is destructive and mass-forming with lobules and physaliphorous cells; BNCT is non-destructive.",
      ],
      [
        "Metastatic carcinoma / myxoid tumors",
        "Nuclear brachyury supports chordoma in the appropriate morphology.",
      ],
    ],
  },
  {
    name: "Dedifferentiated chordoma",
    group: "notochordal",
    site: "The locations are similar to those of conventional chordoma, predominantly in sacrococcygeal sites.",
    criteria:
      "Essential: bone tumor with compatible imaging; conventional chordoma (histologically or by history) plus high-grade sarcoma.",
    morphology: [
      "The distinguishing characteristic is the simultaneous presence of a conventional chordoma and a high-grade spindle and/or pleomorphic sarcoma.",
      "The dedifferentiated component can account for < 5% to > 95% (median 50–60%) of the tumor.",
      "Osteosarcomatous, chondrosarcomatous, and/or rhabdomyosarcomatous elements can be seen.",
    ],
    ihc: "While the conventional component expresses cytokeratin and brachyury, in the dedifferentiated component, cytokeratin staining can be focal to absent, and brachyury immunoreactivity is also absent. Specific lineages, such as rhabdomyoblastic, should be supported by immunohistochemical expression of desmin and myogenin. Complete loss of H3K27me3 and H3K27me2 has been noted in the dedifferentiated component in a subset of skull-base cases. Differential diagnosis The differential diagnosis includes dedifferentiated chondrosarcoma, radiation-associated sarcoma, other primary bone sarcomas, conventional chordoma (with prominent spindling), and poorly differentiated chordoma.",
    molecular: "",
    differential: [
      [
        "Conventional chordoma",
        "A high-grade sarcomatous component juxtaposed with conventional chordoma is defining.",
      ],
      [
        "Dedifferentiated chondrosarcoma",
        "Look for a conventional chordoma component and brachyury expression in that component.",
      ],
    ],
  },
  {
    name: "Poorly differentiated chordoma",
    group: "notochordal",
    site: "The most common site is the skull base (clivus), followed by the cervical spine, less commonly the sacrococcyx, and rarely, extra-axial sites.",
    criteria:
      "Essential: bone tumor with compatible imaging; poorly differentiated malignant neoplasm, diffuse keratin and brachyury immunostaining, along with loss of SMARCB1 (INI1) expression; predominantly involving the axial skeleton.",
    morphology: [
      "Poorly differentiated chordoma is a cellular tumor composed of epithelioid to rhabdoid to spindle cells arranged in cohesive sheets, poorly defined nodules, fascicles, and organoid or nesting patterns.",
      "The tumor cells contain moderate to abundant eosinophilic to vacuolated cytoplasm, vesicular chromatin, and discernible nucleoli.",
      "Mitotic figures are often present, with a variable amount of geographical tumor necrosis and interspersed inflammatory cells.",
    ],
    ihc: "The tumors consistently show diffuse positivity for keratin and brachyury, variable expression of S100, and loss of SMARCB1 (INI1). Differential diagnosis The differential diagnosis includes malignant rhabdoid tumor, atypical teratoid /rhabdoid tumor, rhabdoid meningioma, and epithelioid sarcoma, the latter especially in tumors occurring in spinal/paraspinal and extra-axial sites, such as knee. Other differentials include epithelioid malignant peripheral nerve sheath tumor, myoepithelial carcinoma, and dedifferentiated chordoma.",
    molecular:
      "Molecular testing can be used in ambiguous cases. Most tumors show homozygous or heterozygous deletion of the SMARCB1 gene, which can be detected by FISH. In some tumors, small intragenic mutations in the SMARCB1 gene may also be present. A subset of tumors additionally demonstrates heterozygous deletion of EWSR1, located in close proximity to SMARCB1, representing a pitfall in FISH interpretation.",
    differential: [
      [
        "Conventional chordoma",
        "Poorly differentiated chordoma is typically SMARCB1/INI1-deficient and often occurs in younger patients; conventional chordoma retains INI1.",
      ],
      [
        "Malignant rhabdoid tumor",
        "Use brachyury and clinical/anatomic context to establish notochordal origin.",
      ],
    ],
  },
  {
    name: "Osteofibrous dysplasia",
    group: "other",
    site: "OFD occurs in the anterior cortex of the tibia in most cases and is a rare finding in the posterior cortex. Fibular involvement usually accompanies ipsilateral tibial disease in 10–15% of cases but can be isolated; one study of 80 patients reported 77 cases in the tibia and 3 cases in the fibula, with 9 of the cases affecting both bones. Tibial tumors tend to occur in the middle third of the bone and fibular tumors in the distal third. OFD has also been found in the tibia and fibula bilaterall",
    criteria:
      "Essential: bone tumor with compatible imaging; almost exclusively in the tibia and/or fibula, always involving the cortex; for OFD: a fibro-osseous tumor of bone in which the woven bone shows prominent osteoblastic rimming; absence of or only isolated keratin-positive cells; for atypical OFD: as for OFD, but with inconspicuous small clusters of keratin-positive cells (three cells or more).",
    morphology: [
      "OFD is composed of an admixture of bone and fibrous tissue.",
      "The bone is composed of trabeculae of woven bone with prominent osteoblastic rimming.",
      "The intervening fibrous stroma is composed of bland-looking spindle-shaped cells embedded within an extracellular collagenous or sometimes myxoid matrix.",
    ],
    ihc: "Immunohistochemistry for keratin shows no or only single keratin-positive cells in OFD. Small clusters (defined as three or more) of keratin-positive cells are seen in atypical OFD. Typically these individual cells express CK14, CK19, and (to a lesser extent) CK5 and CK17. Additionally, OFD shows positive staining for p63 and occasionally S100. Differential diagnosis OFD should be distinguished from fibrous dysplasia. The stroma in fibrous dysplasia is more cellular and collagenous than in OFD, and the woven bone in fibrous dysplasia lacks prominent osteoblastic rimming; additionally, mutations in the GNAS gene are found in most cases of fibrous dysplasia but are absent in OFD. Immunohistochemically, there are no keratin-positive epithelial cells in fibrous dysplasia, and this tumor is epicentred in the medullary cavity. Classic adamantinoma can be distinguished by the presence of easily identifiable nests and strands of epithelial cells, clearly visible on H&E.",
    molecular: "",
    differential: [
      [
        "Adamantinoma",
        "OFD lacks epithelial nests; scant keratin-positive epithelial clusters raise concern for OFD-like adamantinoma.",
      ],
      [
        "Fibrous dysplasia",
        "OFD is typically tibial, intracortical, with osteoblastic rimming; fibrous dysplasia has characteristic curvilinear woven bone.",
      ],
    ],
  },
  {
    name: "Adamantinoma of long bones",
    group: "other",
    site: "Adamantinoma occurs almost exclusively in the tibia (~85% of cases). Non-contiguous tumor can be seen in the ipsilateral fibula (10–15%), which can also be destroyed by a tibial extraosseous mass. Adamantinoma is rare outside these locations but has been described in other long bones, metatarsals, the calcaneum, ribs, vertebrae, and the capitate; there have been exceptional cases in pre-tibial soft tissues without bone involvement.",
    criteria:
      "Essential: a bone tumor with compatible imaging; almost exclusively of the tibia and/or fibula; always involves cortex; classic adamantinoma: biphasic appearance at H&E, with obvious epithelial elements embedded in fibro-osseous stroma; dedifferentiated adamantinoma: classic adamantinoma in which the epithelial component has progressed to high-grade sarcoma.",
    morphology: [
      "In classic adamantinoma, the epithelial component forms cohesive islands, which are generally clearly visible on H&E.",
      "The epithelial component may be tubular, squamous, basaloid, or spindle-shaped.",
      "The basaloid cells usually have peripheral palisading and central stellate or spindle-shaped cells.",
    ],
    ihc: "Immunohistochemically, the epithelial cells show coexpression of keratin, EMA, vimentin, p63 (diffuse), and podoplanin. Chain-specific keratin expression reveals a predominantly basal epithelial cell differentiation, regardless of subtype, with widespread presence of basal epithelial cell keratins CK5, CK14, and CK19. CK1, CK13, and CK17 are also variably present. CK8 and CK18 are virtually absent. In dedifferentiated adamantinoma, the expression of keratin can be retained. Differential diagnosis The main differential diagnoses include atypical OFD, in which small clusters of epithelial cells can be identified using immunohistochemistry (but are generally not evident on H&E). Additionally, classic adamantinoma showing a predominantly spindle cell epithelial component must be distinguished from intraosseous synovial sarcoma, because treatment is significantly different. Rarely, adamantinoma-like Ewing sarcoma can enter the differential diagnosis, although this tumor usually occurs in the head and neck and shows FET-ETS family fusions that are absent in classic adamantinoma. Dedifferentiated adamantinoma without a history of classic adamantinoma should be distinguished from metastatic carcinoma, in which case immunohistochemistry for p63 and podoplanin can be helpful.",
    molecular: "",
    differential: [
      [
        "Osteofibrous dysplasia",
        "Adamantinoma has epithelial nests/tubules; OFD lacks epithelial component or has only rare scattered cells.",
      ],
      [
        "Metastatic carcinoma",
        "Integrate keratin-positive epithelial morphology with characteristic tibial cortical lesion and imaging.",
      ],
    ],
  },
  {
    name: "Simple bone cyst",
    group: "other",
    site: "Most SBCs arise in the proximal humerus (50%) and proximal femur (25%), followed by the calcaneus (6%), other long tubular bones (tibia, fibula, radius, ulna), and the pelvic bones. Rare cases (< 2%) have been described in other locations, including the spine, the small bones of the hands and feet, and the jaws. In long bones, SBC is located in the metaphysis or metadiaphysis.",
    criteria:
      "Essential: bone tumor with compatible imaging; variously cellular fibrous lining, focal nodular fasciitis–like areas, fibrin-like collagen deposits.",
    morphology: [
      "The wall of SBC is composed of a thin layer of fibrous tissue, which can be hypocellular, or contain foci of nodular fasciitis–like spindle cells.",
      "A true lining is often absent; occasionally, inconspicuous spindle cells can be observed on the luminal surface.",
      "Foci of chronic inflammation, haemosiderin deposits, foam cells, cholesterol clefts, linear calcifications, and reactive woven bone may be present in the wall.",
    ],
    ihc: "",
    molecular:
      "Molecular confirmation is usually not required. EWSR1::NFATC2 or FUS::NFATC2 fusions can be detected by targeted RNA sequencing or other molecular tests (e.g. FISH, RT-PCR).",
    differential: [
      [
        "Aneurysmal bone cyst",
        "Simple cyst is usually unilocular and fluid-filled; ABC is expansile, blood-filled, and septated.",
      ],
      [
        "Telangiectatic osteosarcoma",
        "Look for atypical malignant cells in septa or solid areas.",
      ],
    ],
  },
  {
    name: "Fibrocartilaginous mesenchymoma",
    group: "other",
    site: "Fibrocartilaginous mesenchymoma occurs in the metaphysis of long tubular bones (61%), followed by the iliac-pubic bones (18%), vertebrae (15%), and metatarsal bones and ribs (3% each).",
    criteria:
      "Essential: a bone tumor with compatible imaging; spindle cells with mild cytological atypia and nodules of hyaline cartilage–resembling growth plate–like cartilage. Desirable: young patient age (< 30 years); exclusion of GNAS and IDH1/IDH2 variants and of MDM2 amplification.",
    morphology: [
      "The tumor is hypocellular to moderately cellular and composed of spindle cells with fusiform nuclei and eosinophilic cytoplasm enmeshed in a collagenous stroma and arranged in intersecting fascicles.",
      "Cellular areas may resemble low-grade spindle cell sarcoma, but mitoses are limited in number.",
      "Nodules of varying sizes of benign-appearing cartilage are scattered throughout the mass.",
    ],
    ihc: "",
    molecular:
      "The absence of mutations in GNAS, IDH1, or IDH2 and amplification of MDM2 may aid in the differential diagnosis.",
    differential: [
      [
        "Chondromyxoid fibroma",
        "Fibrocartilaginous mesenchymoma shows prominent cartilage and woven bone in a spindle-cell background; consider site and growth pattern.",
      ],
      [
        "Low-grade chondrosarcoma",
        "Assess permeative growth, cytologic atypia, and imaging for malignancy.",
      ],
    ],
  },
  {
    name: "Desmoplastic fibroma of bone",
    group: "other",
    site: "Desmoplastic fibroma may involve any bone but has most commonly been described in the mandible, followed by the long bones (femur, radius, tibia) and pelvic bones.",
    criteria:
      "Essential: bland spindle cell proliferation in bone; collagenous background; no lesional bone formation. Desirable: rule out GNAS mutation and MDM2 amplification.",
    morphology: [
      "Desmoplastic fibroma is generally well-demarcated.",
      "When infiltration is present, it is typically observed at the periphery of the tumor.",
      "Histologically, it is a hypocellular lesion composed of fascicles of bland, nondescript spindle cells embedded in a collagenous matrix.",
    ],
    ihc: "",
    molecular:
      "Desmoplastic fibroma is a diagnosis of exclusion. GNAS variant testing can be used to rule out fibrous dysplasia; lack of CDK4/MDM2 amplification argues against central low-grade osteosarcoma, although only 30% of these tumors are amplified. Most desmoplastic fibromas do not harbour specific genetic alterations, but APC and CTNNB1 mutations, as well as nuclear β-catenin immunostaining have rarely been reported. These cases should be classified as intraosseous desmoid fibromatosis rather than as desmoplastic fibroma.",
    differential: [
      [
        "Low-grade central osteosarcoma",
        "MDM2 amplification and neoplastic bone favor osteosarcoma; desmoplastic fibroma is collagenous and lacks tumor osteoid.",
      ],
      [
        "Fibrous dysplasia",
        "GNAS alteration and characteristic woven bone support fibrous dysplasia.",
      ],
    ],
  },
  {
    name: "Fibrous dysplasia",
    group: "other",
    site: "Fibrous dysplasia can affect any bone but most commonly involves the calvarium, jaw, femur, and rib, in both monostotic and polyostotic forms.",
    criteria:
      "Essential: bone tumor with compatible imaging; a fibro-osseous lesion consisting of irregular curvilinear trabeculae of woven bone without prominent osteoblastic rimming embedded within a collagenous stroma with bland fibroblast-like cells. Desirable: activating missense mutations in GNAS.",
    morphology: [
      "Fibrous dysplasia is composed of delicate, irregular, curvilinear trabeculae of woven or (rarely) lamellar bone without conspicuous osteoblastic rimming in a background of fibroblast-like spindle cells and a collagenous stroma.",
      "The interface between bone and stroma is reminiscent of periosteum, with Sharpey-like fibres anchoring bone to the surrounding collagen.",
      "Significant cytological atypia or pleomorphism is absent.",
    ],
    ihc: "",
    molecular:
      "The reported GNAS mutation frequency is 50–70%; however, the variant discovery rate is dependent on the technology used and is adversely affected by sample decalcification. Somatic mosaicism may also account for the reported variability in mutation detection rates in the literature. Molecular assays are diagnostically useful, because occasionally fibrous dysplasia can be confused histologically with low-grade central osteosarcoma. The only recurrent clonal chromosome aberrations described to date include trisomy 2 and structural aberrations of 12p13.",
    differential: [
      [
        "Low-grade central osteosarcoma",
        "Infiltrative growth, atypia, and MDM2 amplification favor osteosarcoma; GNAS supports fibrous dysplasia.",
      ],
      [
        "Osteofibrous dysplasia",
        "OFD is typically tibial cortical and shows osteoblastic rimming; fibrous dysplasia has irregular curvilinear woven bone.",
      ],
    ],
  },
  {
    name: "Lipoma and hibernoma of bone",
    group: "other",
    site: "Lipomas commonly arise in the calcaneus and metaphysis of long tubular bones, especially the femur, tibia, and humerus, and infrequently in the skull, pelvis, vertebrae, sacrum, mandible, maxilla, and ribs; approximately 70% involve the lower limb. Parosteal lipoma develops on the diaphysis of long tubular bones, especially the femur, radius, humerus, and tibia. Hibernoma often affects the axial skeleton (spine, pelvis).",
    criteria:
      "Essential: bone tumor with compatible imaging; lipoma of bone: aggregates of mature-appearing adipocytes; parosteal lipoma: aggregates of mature-appearing adipocytes, presenting as a bone tumor on the surface of the bone; hibernoma of bone: aggregates of brown fat cells.",
    morphology: [
      "Lipoma is composed of lobules of mature-appearing adipocytes.",
      "Delicate trabeculae of woven and lamellar bone may be present throughout the tumor.",
      "The adipocytes have a single, large, clear cytoplasmic vacuole that displaces the crescent-shaped nucleus to the periphery.",
    ],
    ihc: "Adipocytes are positive for S100 and adipophilin, and negative for CD68, CD163, keratin AE1/AE3, brachyury, SOX10, ERG, and CD1a. Hibernomas strongly express CD10 and the brown-fat marker UCP1. Differential diagnosis Bone marrow infarction with dystrophic calcification is distinguished from lipoma by the presence of pre-existing necrotic bone throughout the lesion and the lack of a discrete mass on imaging studies. The histological differential diagnosis of hibernoma includes metastatic carcinoma, Erdheim–Chester disease, intraosseous lipoma with fat necrosis, and benign notochordal cell tumor.",
    molecular: "",
    differential: [
      [
        "Bone infarct",
        "Necrotic marrow with dystrophic calcification differs from mature adipose tissue replacing marrow.",
      ],
      [
        "Intraosseous liposarcoma",
        "Atypia and malignant features are not expected in intraosseous lipoma/hibernoma.",
      ],
    ],
  },
  {
    name: "Leiomyosarcoma of bone",
    group: "other",
    site: "Most lesions (70%) occur in the long bones of the lower extremity around the knee (distal femoral or proximal tibial metaphysis), followed by the upper extremities (25%) and (more rarely) by the craniofacial skeleton.",
    criteria:
      "Essential: bone tumor with compatible imaging; exclusion of other primary sites; intersecting fascicles of fusiform cells with eosinophilic fibrillary cytoplasm and elongated cigar-shaped nuclei, with variable nuclear pleomorphism; SMA and desmin and/or h-caldesmon immunoreactivity.",
    morphology: [
      "The lesions resemble LMSs from other locations, with cells arranged in long, intersecting fascicles, growing in an infiltrative pattern.",
      "The tumor cells have fibrillary, eosinophilic cytoplasm and elongated, cigar-shaped nuclei with blunted ends.",
      "The tumors are associated with variable degrees of necrosis, nuclear pleomorphism, and mitotic activity.",
    ],
    ihc: "",
    molecular: "",
    differential: [
      [
        "Metastatic leiomyosarcoma",
        "Exclude a soft-tissue/visceral primary; primary bone leiomyosarcoma requires a primary osseous lesion.",
      ],
      [
        "Undifferentiated pleomorphic sarcoma of bone",
        "Smooth muscle morphology with SMA, desmin, and h-caldesmon supports leiomyosarcoma.",
      ],
    ],
  },
  {
    name: "Undifferentiated pleomorphic sarcoma of bone",
    group: "other",
    site: "UPS of bone has a predilection for long tubular bones (66%), particularly around the knee. The most frequently involved bone is the femur, followed by the tibia and humerus. Among the bones of the trunk, the pelvis is most commonly affected. UPS rarely occurs in the spine.",
    criteria:
      "Essential: bone tumor with compatible imaging; spindle, pleomorphic, epithelioid cells; intermediate- to high-grade morphology; absence of any morphological or immunohistochemical feature of specific differentiation; demonstrated absence of distinctive molecular aberration (IDH1/IDH2, H3-3A). Desirable: atypical mitotic figures; necrosis.",
    morphology: [
      "UPS is morphologically intermediate- to high-grade and composed of spindle-shaped, epithelioid, and/or polygonal cells with marked pleomorphism arranged in a patternless haphazard, storiform, or fascicular growth pattern.",
      "The amount of cytoplasm is variable and usually pale to eosinophilic; intracytoplasmic or intranuclear inclusions can be seen.",
      "Variable numbers of large, bizarre multinucleated giant cells and numerous typical and atypical mitotic figures are readily identified.",
    ],
    ihc: "Immunohistochemistry should be used to confirm lack of smooth muscle, rhabdomyoblastic, melanocytic, endothelial, and epithelial differentiation. Caution is required when interpreting myogenic markers, because approximately 50% of UPSs of bone show focal positivity with a single myogenic marker. SMA positivity with an additional myogenic marker (desmin or h-caldesmon) supports leiomyosarcoma in an appropriate histological context. Focal cytokeratin positivity can be seen in UPS, but abundant expression should raise concern for metastatic sarcomatoid carcinoma. Several melanocytic markers are indicated in the setting of focal S100 expression in order to exclude melanoma. SATB2 immunoreactivity can be seen in as many as half of the UPS cases, a limiting factor when exploring the possibility of osteosarcoma. Histone H3 G34W expression is occasionally seen; these tumors most likely represent malignant giant cell tumor of bone on the basis of similar molecular and methylation profiles. Differential diagnosis A variety of high-grade sarcomas (dedifferentiated chondrosarcoma, malignant giant cell tumor of bone), metastatic carcinoma, and metastatic melanoma should be excluded.",
    molecular:
      "The absence of IDH1 or IDH2 variants in UPS of bone can be used in the differential diagnosis with dedifferentiated chondrosarcoma. Similarly, the presence of an H3-3A G35 (G34) variant would suggest that the tumor represents malignant giant cell tumor of bone, on the basis of similar molecular and methylation profiles. It should be noted that in two small series reported, alternative G35 (G34) variants (that are non-G35W (G34W)) were enriched, which may limit the sensitivity of H3-3A G34W antibody and require additional molecular testing to identify these tumors. The presence of melanoma-compatible mutations in BRAF, NRAS, KIT, or NF1, an ultraviolet (UV) radiation–induced mutation signature, and/or a high tumor mutation burden can help recognize metastatic undifferentiated melanoma, especially in the absence of melanocytic differentiation or a previous history of melanoma. Broad molecular testing can also be considered to further explore the option of metastasis of sarcomatoid carcinoma, particularly when a primary tumor is not evident using sensitive imaging methods such as PET/CT.",
    differential: [
      [
        "Dedifferentiated chondrosarcoma",
        "Search for a cartilaginous component; UPS is a diagnosis of exclusion.",
      ],
      [
        "Metastatic sarcoma",
        "Exclude a primary soft-tissue or visceral tumor and other defined lines of differentiation.",
      ],
    ],
  },
  {
    name: "TFCP2-rearranged rhabdomyosarcoma",
    group: "other",
    site: "TFCP2-RMS arises mostly in bone and less frequently in soft tissue. There is a striking predilection for bones in the head and neck region, including the skull bones (25%), mandible (21%), and maxilla (19%), and for infiltration into the surrounding soft tissue. Less commonly affected regions include the pelvic bone (11%), truncal and extremity soft tissues (9.5%), vertebrae (7%), and femur (2%). Individual cases have been reported in the mediastinum, peritoneum, rib, and urinary bladder.",
    criteria:
      "Essential: an epithelioid, spindle cell, or mixed cytological appearance; rhabdomyosarcomatous phenotype (desmin and MYOD1 or myogenin expression); coexpression of AE1/AE3; TFCP2 rearrangement. Desirable: ALK expression.",
    morphology: [
      "TFCP2-RMSs are usually biphasic, with spindle cell and epithelioid areas in solid sheets or fascicles, with scant accompanying stroma.",
      "Rarely, TFCP2-RMSs are composed purely of epithelioid/rhabdoid, spindle, or round cells.",
      "Tumor nuclei are large, displaying brisk mitotic activity and dotted with conspicuous nucleoli.",
    ],
    ihc: "Virtually all cases are positive for cytokeratins (AE1/AE3) and desmin. All, by definition, express MYOD1 and/or myogenin, with MYOD1 being more sensitive and myogenin occasionally negative. ALK expression is detected in 88% of cases, and there is occasional expression of p63, CK7, SATB2, p53, CD30, CD4, S100, h-caldesmon, and SMA; SMARCB1 (INI1) expression is retained. The differential diagnosis includes metastatic carcinoma because of the keratin expression and epithelioid features, particularly in older individuals. Malignant peripheral nerve sheath tumor with rhabdomyoblastic differentiation (triton tumor) may be suspected in case of scant S100 staining, especially if the tumor is purely epithelioid. Sarcomas with PATZ1 fusions can enter the differential diagnosis and often show a predominant spindle to round cell cytomorphology; they often express myogenin, MYOD1, and S100 and are associated with PATZ1 translocations.",
    molecular:
      "The diagnosis can be confirmed by molecular testing using FISH with a break-apart probe for TFCP2 or by sequencing. A unique case harbouring an alternative EWSR1::UBP1 fusion has been reported.",
    differential: [
      [
        "Ewing sarcoma",
        "TFCP2-rearranged RMS often has epithelioid/rhabdoid morphology and keratin expression; confirm TFCP2 fusion.",
      ],
      [
        "Metastatic carcinoma",
        "Myogenic markers and TFCP2 rearrangement support rhabdomyosarcoma.",
      ],
    ],
  },
  {
    name: "Bone metastases",
    group: "other",
    site: "Any site can be involved. Metastases to the axial skeleton (especially vertebrae) but also pelvis, ribs, sternum, and skull predominate. The metaphyses of the femur and proximal humerus are also commonly involved. Lung cancer is the most common primary malignancy that metastasizes to acral sites.",
    criteria:
      "Essential: malignant growth distant from primary site; correlation with clinical history and imaging. Desirable: immunohistochemistry (in selected cases) to support tumor lineage and site of origin.",
    morphology: [
      "The morphology of metastases mirrors that of the primary tumor.",
      "Osteoblastic metastases can contain abundant reactive woven bone formation and must be distinguished from osteosarcoma.",
      "Hemorrhage, fibrosis, and osteoclast-like giant cell reactions can obscure the metastatic cells.",
    ],
    ihc: "Immunohistochemistry is useful to support tumor lineage and site of origin. See #55653Table 4.04. Ideally, immunohistochemistry (and molecular pathology, if indicated) is performed on non-bony tumor tissue not requiring decalcification. Nuclear antigens are more susceptible to adverse impact from decalcification than those expressed in the cytoplasm or membrane. Differential diagnosis Primary vascular tumors, especially those with epithelioid cytomorphology, are frequently keratin-positive and can be mistaken for carcinoma. Although CD138 is typically used as a marker of plasmacytic differentiation (e.g. to support a diagnosis of multiple myeloma), it is expressed in as many as 50% of carcinomas. Polyclonal PAX8 cross-reacts with other PAX-family transcription factors (e.g. PAX5), and B-cell lymphomas staining for polyclonal PAX8 can be misdiagnosed as renal cell carcinoma.",
    molecular:
      "Molecular testing should be guided by the primary tumor type and local availability of targeted therapies. In addition to tumor-specific targets, panels should include tumor-agnostic biomarkers (e.g. microsatellite instability; tumor mutation burden; mutations such as BRAF p.(Val600Glu) [V600E], FGFR1/FGFR2/FGFR3; and targetable fusions such as NTRK1/NTRK2/NTRK3, FGFR1/FGFR2/FGFR3, RET).",
    differential: [
      [
        "Primary bone sarcoma",
        "Clinical history, imaging distribution, and immunophenotype should establish the primary site; exclude a primary bone-forming/cartilaginous tumor.",
      ],
      [
        "Lymphoma / plasma cell neoplasm",
        "Use lineage-specific markers and systemic workup.",
      ],
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-teal-800">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"profiles" | "workflow">(
    "profiles",
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter(
      (entity) =>
        (group === "All" || entity.group === group) &&
        (!q ||
          [
            entity.name,
            entity.site,
            entity.criteria,
            entity.morphology.join(" "),
            entity.ihc,
            entity.molecular,
            entity.differential.map((d) => d.join(" ")).join(" "),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [query, group]);

  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  const expandAll = () => setExpanded(filtered.map((x) => x.name));
  const collapseAll = () => setExpanded([]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-7 border-b border-slate-200 pb-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-teal-700">
            PathologyGPS · Bone Tumors
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Bone Tumors
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
            Morphology-first diagnostic reference organized by tumor family,
            with emphasis on essential diagnostic criteria, key histologic
            findings, and practical differential diagnosis.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold text-teal-800">
              28 entities
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              4 diagnostic groups
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              WHO-based content
            </span>
          </div>
        </header>

        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("profiles")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === "profiles" ? "bg-teal-700 text-white" : "border border-slate-200 bg-white text-slate-700"}`}
          >
            Entity profiles
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${activeTab === "workflow" ? "bg-teal-700 text-white" : "border border-slate-200 bg-white text-slate-700"}`}
          >
            Diagnostic GPS
          </button>
        </div>

        {activeTab === "profiles" && (
          <>
            <div className="mb-4 grid gap-3 md:grid-cols-[1fr_280px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tumor, morphology, diagnostic criteria, IHC, molecular alteration…"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm"
              >
                <option value="All">All groups</option>
                {Object.entries(groupLabels).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
              <span>
                Showing {filtered.length} of {entities.length} entities
              </span>
              <div className="flex gap-3">
                <button
                  onClick={expandAll}
                  className="font-semibold text-teal-700"
                >
                  Expand visible
                </button>
                <button
                  onClick={collapseAll}
                  className="font-semibold text-slate-500"
                >
                  Collapse all
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {filtered.map((entity) => {
                const open = expanded.includes(entity.name);
                return (
                  <article
                    key={entity.name}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggle(entity.name)}
                      className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left hover:bg-slate-50"
                    >
                      <div className="min-w-0">
                        <div className="mb-2 inline-flex rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {groupLabels[entity.group]}
                        </div>
                        <h2 className="font-semibold text-slate-900">
                          {entity.name}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          {entity.site}
                        </p>
                      </div>
                      <span className="mt-1 shrink-0 text-lg text-teal-700">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div className="grid gap-3 border-t border-slate-100 bg-slate-50/60 p-4 lg:grid-cols-2">
                        <Panel title="Essential diagnostic criteria">
                          <p className="text-sm leading-6 text-slate-700">
                            {entity.criteria}
                          </p>
                        </Panel>
                        <Panel title="Histopathology">
                          <Bullets items={entity.morphology} />
                        </Panel>
                        <Panel title="Differential diagnosis">
                          <div className="space-y-3">
                            {entity.differential.map(([name, clue], i) => (
                              <div
                                key={i}
                                className="border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                              >
                                <p className="text-sm font-semibold text-slate-900">
                                  {name}
                                </p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                  {clue}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Panel>
                        <div className="space-y-3">
                          {entity.ihc && (
                            <Panel title="Immunohistochemistry">
                              <p className="text-sm leading-6 text-slate-700">
                                {entity.ihc}
                              </p>
                            </Panel>
                          )}
                          {entity.molecular && (
                            <Panel title="Molecular pathology">
                              <p className="text-sm leading-6 text-slate-700">
                                {entity.molecular}
                              </p>
                            </Panel>
                          )}
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
          </>
        )}

        {activeTab === "workflow" && (
          <div className="space-y-4">
            <Panel title="1 · Start with the anatomic and radiologic pattern">
              <Bullets
                items={[
                  "Define the compartment: medullary, cortical, surface/periosteal, or soft-tissue extension; record bone and exact segment.",
                  "Assess age, skeletal maturity, lesion size, margins, transition zone, matrix mineralization, cortical destruction, periosteal reaction, and soft-tissue mass.",
                  "Correlate histology with imaging. A small biopsy may miss a high-grade component, epithelial nests, malignant osteoid, or a secondary ABC-like component.",
                ]}
              />
            </Panel>
            <Panel title="2 · Recognize the defining matrix and cellular pattern">
              <Bullets
                items={[
                  "Osteoid / woven bone: determine whether bone is produced directly by malignant tumor cells or is reactive/benign woven bone rimmed by osteoblasts.",
                  "Cartilage: distinguish a cartilage-producing tumor from osteosarcoma with chondroblastic differentiation; identify malignant osteoid if present.",
                  "Giant cell–rich lesions: evaluate the mononuclear stromal population, distribution of giant cells, hemorrhage, hemosiderin, and reactive bone.",
                  "Notochordal lesions: assess lobular physaliphorous morphology, destructive growth, and brachyury; evaluate INI1 in poorly differentiated morphology.",
                  "Fibro-osseous lesions: assess site, cortical versus medullary origin, stromal cellularity, osteoblastic rimming, and epithelial component.",
                ]}
              />
            </Panel>
            <Panel title="3 · Use IHC and molecular testing to resolve a specific differential">
              <Bullets
                items={[
                  "MDM2 amplification: supports low-grade central and parosteal osteosarcoma in the appropriate setting; a negative result does not exclude low-grade central osteosarcoma.",
                  "FOS / FOSB: supports osteoid osteoma or osteoblastoma; interpret with size and imaging.",
                  "GNAS: supports fibrous dysplasia; distinguish from low-grade central osteosarcoma with MDM2 amplification.",
                  "Brachyury: supports notochordal differentiation; INI1 loss supports poorly differentiated chordoma in the appropriate setting.",
                  "USP6: may support primary aneurysmal bone cyst; correlate with morphology and exclude secondary ABC-like change.",
                  "Keratin: useful for identifying epithelial component in adamantinoma; TFCP2 fusion and myogenic markers support TFCP2-rearranged rhabdomyosarcoma.",
                ]}
              />
            </Panel>
            <Panel title="4 · Do not overlook secondary or metastatic disease">
              <Bullets
                items={[
                  "Review prior radiation, Paget disease, bone infarct, fibrous dysplasia, and other pre-existing bone abnormalities.",
                  "For a bone lesion in an adult, consider metastasis and hematolymphoid neoplasia before assuming a primary bone sarcoma.",
                  "When a sarcoma is diagnosed, exclude a primary soft-tissue or visceral tumor and correlate with systemic imaging.",
                ]}
              />
            </Panel>
            <Panel title="5 · Sampling and reporting">
              <Bullets
                items={[
                  "Target solid, enhancing, mineralized, and radiologically heterogeneous regions; sample the tumor–host bone interface.",
                  "For giant cell–rich or cystic lesions, sample septa and solid components to exclude telangiectatic osteosarcoma or an underlying primary tumor.",
                  "For surface and low-grade osteosarcomas, sample the entire lesion to identify dedifferentiation/high-grade transformation.",
                  "Report histologic type, grade where applicable, anatomic site, tumor extent, treatment effect if applicable, and margins.",
                ]}
              />
            </Panel>
          </div>
        )}

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
          Educational decision support, not a substitute for integrated
          diagnosis. Entity criteria and histologic descriptions are structured
          from the supplied WHO excerpt. Differential summaries are practical
          diagnostic comparisons and should be interpreted with imaging,
          sampling, and clinical context.
        </footer>
      </div>
    </main>
  );
}
