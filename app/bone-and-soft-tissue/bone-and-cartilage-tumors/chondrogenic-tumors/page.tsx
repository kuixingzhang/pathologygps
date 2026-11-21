"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: "Benign" | "Intermediate" | "Malignant";
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Subungual exostosis",
    group: "Benign",
    behavior: "Benign",
    site: "Distal phalanx beneath the nail bed; ~80% involve the dorsal or medial great toe.",
    clinical: [
      "Usually presents with painful nail-bed swelling.",
      "Elevation and deformity of the nail plate are common.",
      "Ulceration or secondary infection may occur.",
    ],
    criteria: [
      "Benign osteocartilaginous surface lesion beneath the nail bed.",
      "Trabeculated osseous protuberance with an uninterrupted underlying cortex.",
      "No corticomedullary continuity with the parent bone.",
    ],
    histology: [
      "Small fragments of bone and cartilage.",
      "Fibrocartilaginous cap may be present.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Subungual osteochondroma",
        "Shows corticomedullary continuity with the underlying phalanx.",
      ],
      [
        "Bizarre parosteal osteochondromatous proliferation (BPOP)",
        "Typically arises on the surface of phalanges and has characteristic disorganized bone/cartilage architecture.",
      ],
      [
        "Florid reactive periostitis",
        "Reactive periosteal proliferation, often with a different clinical/radiographic evolution.",
      ],
    ],
    pitfalls: [
      "In atypical locations, include other surface-based and reactive lesions in the differential.",
    ],
  },
  {
    name: "Bizarre parosteal osteochondromatous proliferation (BPOP)",
    group: "Benign",
    behavior: "Benign; locally recurrent",
    site: "Surface of small bones of hands and feet, especially phalanges; less often long bones.",
    clinical: [
      "Usually affects adults, often in the third to fourth decades.",
      "Presents as a slowly enlarging, painless or painful mass.",
    ],
    criteria: [
      "Surface-based exophytic lesion with a broad attachment to the cortex.",
      "Disorganized admixture of cartilage, bone, and spindle-cell stroma.",
      "Absence of the orderly corticomedullary continuity typical of osteochondroma.",
    ],
    histology: [
      "Irregular cartilage cap with bizarre chondrocytes; atypia may be striking.",
      "Bony trabeculae show characteristic blue-bone formation.",
      "Spindle-cell stroma is present between cartilage and bone.",
    ],
    ihc: [],
    molecular: [
      "Rearrangements involving USP6 occur in a subset; a negative result does not exclude BPOP.",
    ],
    differential: [
      [
        "Osteochondroma",
        "Has corticomedullary continuity and an orderly cartilage cap with endochondral ossification.",
      ],
      [
        "Periosteal chondroma",
        "Usually smaller, well-demarcated, with cortical scalloping and a sclerotic buttress.",
      ],
      [
        "Parosteal osteosarcoma",
        "Shows malignant osteoid and more orderly, densely ossified architecture; assess for MDM2 amplification when appropriate.",
      ],
      [
        "Florid reactive periostitis",
        "More reactive pattern and clinical context; may evolve toward ossification.",
      ],
    ],
    pitfalls: [
      "Cytologic atypia alone does not establish malignancy in BPOP.",
      "Local recurrence can occur; recurrence is not equivalent to malignant transformation.",
    ],
  },
  {
    name: "Chondromesenchymal hamartoma of the chest wall",
    group: "Benign",
    behavior: "Benign",
    site: "Chest wall, usually ribs; occurs predominantly in infants and young children.",
    clinical: [
      "Typically presents in infancy with a chest-wall mass or respiratory symptoms.",
      "Large lesions may cause respiratory compromise.",
    ],
    criteria: [
      "Pediatric chest-wall lesion with compatible imaging.",
      "Biphasic mixture of cartilage and bone-forming elements with primitive mesenchymal tissue.",
    ],
    histology: [
      "Disorganized admixture of cartilage, bone, and spindle-cell/myxoid mesenchymal components.",
      "Cystic spaces and aneurysmal bone cyst-like areas may be present.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Aneurysmal bone cyst",
        "May be a prominent secondary component; identify the underlying hamartomatous cartilage/bone architecture.",
      ],
      [
        "Chondrosarcoma",
        "Lacks the characteristic pediatric hamartomatous pattern; assess cytologic atypia and destructive growth.",
      ],
      [
        "Osteochondroma",
        "Shows an organized cartilage cap and corticomedullary continuity.",
      ],
    ],
    pitfalls: [
      "Clinical age and chest-wall location are important diagnostic clues.",
    ],
  },
  {
    name: "Periosteal chondroma",
    group: "Benign",
    behavior: "Benign",
    site: "Bone surface, especially proximal humerus, femur, and short tubular bones of the hands.",
    clinical: [
      "Usually presents in the second to fourth decades.",
      "May cause localized swelling, with or without pain.",
      "Typically measures less than 3 cm and must be less than 5 cm.",
    ],
    criteria: [
      "Well-defined cartilaginous tumor smaller than 5 cm arising beneath the periosteum.",
      "Scalloping or pressure erosion of the underlying cortex.",
      "No invasion into the medullary canal or Haversian system.",
    ],
    histology: [
      "Bland to mildly atypical chondrocytes; binucleation may occur.",
      "Endochondral calcification and ossification are common.",
      "Underlying cortex may be scalloped or eroded but remains well remodeled.",
    ],
    ihc: [],
    molecular: [
      "IDH1/IDH2 hotspot variants occur in a subset but do not distinguish periosteal chondroma from periosteal chondrosarcoma.",
    ],
    differential: [
      [
        "Periosteal chondrosarcoma",
        "Usually larger than 5 cm; cortical/Haversian canal or medullary invasion supports malignancy.",
      ],
      [
        "BPOP",
        "Shows disorganized blue bone and cartilage rather than a well-defined periosteal cartilage nodule.",
      ],
      ["Osteochondroma", "Shows corticomedullary continuity."],
    ],
    pitfalls: [
      "Size and imaging are critical; histology alone may not reliably separate small periosteal chondrosarcoma from periosteal chondroma.",
    ],
  },
  {
    name: "Enchondroma",
    group: "Benign",
    behavior: "Benign",
    site: "Medullary cavity of small tubular bones of hands/feet and long bones; often incidental.",
    clinical: [
      "Often asymptomatic and incidentally detected.",
      "May present with pain or pathological fracture.",
      "Multiple lesions occur in enchondromatosis (e.g., Ollier disease and Maffucci syndrome).",
    ],
    criteria: [
      "Central medullary lobules of mature hyaline cartilage.",
      "No convincing permeative entrapment of pre-existing lamellar bone.",
      "Interpret cellularity and binucleation in the context of site and age.",
    ],
    histology: [
      "Lobules of hyaline cartilage with chondrocytes in lacunae.",
      "Endochondral ossification may occur.",
      "Mild cellularity and binucleation can be seen, particularly in phalanges and in younger patients.",
    ],
    ihc: [],
    molecular: [
      "IDH1/IDH2 variants are common in enchondromas and enchondromatosis; they do not distinguish enchondroma from central ACT/CS1.",
    ],
    differential: [
      [
        "Central ACT / chondrosarcoma grade 1",
        "In long bones, increased cellularity, irregular cell distribution, binucleation, myxoid matrix, and especially entrapment of pre-existing lamellar bone favor ACT/CS1.",
      ],
      [
        "Chondromyxoid fibroma",
        "Lobulated spindle/stellate-cell lesion with myxoid/chondroid matrix and peripheral giant cells; GRM1 is a useful marker.",
      ],
      [
        "Chondroblastoma",
        "Epiphyseal lesion with polygonal chondroblasts, chicken-wire calcification, and H3.3 K36M.",
      ],
    ],
    pitfalls: [
      "Phalangeal enchondromas may show cellularity and binucleation without aggressive behavior.",
      "Radiologic correlation is essential; biopsy alone may be insufficient.",
    ],
  },
  {
    name: "Osteochondroma",
    group: "Benign",
    behavior: "Benign; rare secondary peripheral chondrosarcoma",
    site: "Metaphysis of long bones, especially around the knee; may be solitary or multiple.",
    clinical: [
      "Usually presents in childhood or adolescence as a painless mass or incidental finding.",
      "May cause mechanical symptoms, deformity, or neurovascular compression.",
      "Growth generally stops after skeletal maturity.",
    ],
    criteria: [
      "Exophytic cartilage-capped bone lesion.",
      "Defining feature: continuity of the cortex and medullary cavity with the parent bone.",
      "Cartilage cap shows orderly endochondral ossification.",
    ],
    histology: [
      "Hyaline cartilage cap with columnar chondrocytes resembling a growth plate.",
      "Endochondral ossification transitions into trabecular bone.",
      "Secondary changes may include fibrosis, cystic degeneration, or calcification.",
    ],
    ihc: [],
    molecular: [
      "EXT1 or EXT2 inactivation is associated with hereditary multiple osteochondromas; not routinely required for diagnosis.",
    ],
    differential: [
      [
        "Subungual exostosis",
        "No corticomedullary continuity; arises beneath nail bed and has a fibrocartilaginous cap.",
      ],
      [
        "BPOP",
        "Disorganized cartilage and blue bone; lacks corticomedullary continuity.",
      ],
      [
        "Secondary peripheral ACT/CS1",
        "Cartilage cap thicker than 2 cm in adults, new growth/pain after maturity, or invasion into the stalk supports progression.",
      ],
      [
        "Periosteal chondroma",
        "Surface cartilage lesion without corticomedullary continuity.",
      ],
    ],
    pitfalls: [
      "Cartilage-cap thickness must be measured perpendicular to the bone-cartilage interface.",
      "Binucleation, cystic change, nodularity, and necrosis alone do not establish malignant progression.",
    ],
  },
  {
    name: "Chondroblastoma",
    group: "Benign",
    behavior: "Benign; rare malignant chondroblastoma",
    site: "Epiphysis or apophysis of long bones, commonly around the knee; also pelvis and other bones.",
    clinical: [
      "Usually affects adolescents and young adults with open or recently closed growth plates.",
      "Pain is common and may be prolonged; joint effusion or stiffness may occur.",
    ],
    criteria: [
      "Epiphyseal/apophyseal lytic lesion with compatible imaging.",
      "Sheets of polygonal chondroblasts with grooved nuclei.",
      "Scattered osteoclast-like giant cells and characteristic pericellular chicken-wire calcification.",
      "H3.3 K36M mutation supports the diagnosis.",
    ],
    histology: [
      "Polygonal cells with distinct borders and grooved or folded nuclei.",
      "Fine pericellular chicken-wire calcification.",
      "Osteoclast-like giant cells are scattered, often around tumor cells.",
      "Chondroid matrix and secondary aneurysmal bone cyst-like change may occur.",
    ],
    ihc: [
      "H3.3 K36M nuclear staining is a highly useful diagnostic surrogate.",
      "S100 may be positive; interpret with morphology.",
    ],
    molecular: ["H3F3B (usually) or H3F3A K36M variants are characteristic."],
    differential: [
      [
        "Clear cell chondrosarcoma",
        "Usually older patient; abundant clear cells, woven bone, and giant cells; typically lacks H3.3 K36M.",
      ],
      [
        "Giant cell tumor of bone",
        "Usually skeletally mature patient; epiphyseal lesion with evenly distributed giant cells and H3.3 G35W in most cases.",
      ],
      [
        "Chondromyxoid fibroma",
        "Usually eccentric metaphyseal lesion with lobular zonation and GRM1 expression.",
      ],
      [
        "Chondroblastic osteosarcoma",
        "Malignant osteoid is present; chondroblastoma lacks malignant osteoid.",
      ],
    ],
    pitfalls: [
      "Malignant chondroblastoma is recognized in the WHO classification; evaluate for malignant cytology and destructive behavior.",
    ],
  },
  {
    name: "Chondromyxoid fibroma",
    group: "Benign",
    behavior: "Benign; locally recurrent in some cases",
    site: "Usually eccentric metaphysis of long bones, especially around the knee; also small bones and pelvis.",
    clinical: [
      "Typically occurs in adolescents and young adults.",
      "Pain and swelling are common.",
    ],
    criteria: [
      "Lobulated lesion with zonal architecture.",
      "Central chondroid/myxoid matrix containing spindle and stellate cells.",
      "Peripheral spindle-shaped myofibroblast-like cells admixed with osteoclast-like giant cells.",
      "GRM1 overexpression is desirable/supportive in selected cases.",
    ],
    histology: [
      "Lobules show central chondromyxoid matrix with stellate and spindle cells.",
      "Peripheral zones are more cellular, with spindle cells and osteoclast-like giant cells.",
      "Lobular zonation is a key architectural feature.",
    ],
    ihc: [
      "GRM1 shows moderate-to-strong cytoplasmic staining in most cases.",
      "S100 may be positive, reflecting cartilaginous differentiation.",
    ],
    molecular: [
      "GRM1 rearrangement/overexpression is present in most cases; complex rearrangements may evade targeted RNA sequencing.",
    ],
    differential: [
      [
        "Central chondrosarcoma",
        "Usually older patient and diaphyseal location; more overt atypia/mitoses and lacks characteristic lobular zonation.",
      ],
      [
        "Enchondroma",
        "Mature hyaline cartilage nodules with endochondral ossification; lacks peripheral giant-cell-rich zonation.",
      ],
      [
        "Chondroblastoma",
        "Epiphyseal location, polygonal cells, chicken-wire calcification, and H3.3 K36M.",
      ],
      [
        "Myoepithelial tumor",
        "May share myxoid matrix; use morphology and lineage-directed IHC/molecular studies.",
      ],
      [
        "Chondromyxoid fibroma-like osteosarcoma",
        "Look for malignant osteoid and infiltrative malignant features.",
      ],
    ],
    pitfalls: [
      "GRM1 IHC is a useful surrogate but is not required in every typical case.",
    ],
  },
  {
    name: "Osteochondromyxoma",
    group: "Benign",
    behavior: "Benign; associated with Carney complex",
    site: "Usually long bones; may involve other skeletal sites.",
    clinical: [
      "Rare; consider Carney complex, particularly with other characteristic clinical findings.",
      "May present with pain or a palpable mass.",
    ],
    criteria: [
      "Mixed bone-forming, cartilaginous, and myxoid tumor.",
      "Compatible imaging and clinical context, particularly other signs of Carney complex.",
    ],
    histology: [
      "Variably cellular mixture of myxoid tissue, hyaline cartilage, and bone formation.",
      "Chondrocytes may be present in chondroid areas.",
    ],
    ihc: [
      "Neoplastic chondrocytes may express S100.",
      "Loss of PRKAR1A staining is characteristic/supportive.",
    ],
    molecular: [
      "PRKAR1A alterations are associated with Carney complex; specific recurrent tumor molecular alterations are not established in the source.",
    ],
    differential: [
      [
        "Chondromyxoid fibroma",
        "Shows characteristic lobular zonation and GRM1 overexpression.",
      ],
      [
        "Enchondroma",
        "Predominantly mature hyaline cartilage without the mixed myxoid and bone-forming pattern.",
      ],
      [
        "Osteochondroma",
        "Shows corticomedullary continuity and an organized cartilage cap.",
      ],
    ],
    pitfalls: [
      "Clinical assessment for Carney complex is integral to classification.",
    ],
  },
  {
    name: "Synovial chondromatosis",
    group: "Intermediate",
    behavior: "Intermediate; rare secondary chondrosarcoma",
    site: "Synovial-lined joints, most often knee, hip, and shoulder; may involve tendon sheaths or bursae.",
    clinical: [
      "Usually adults with monoarticular pain, swelling, and restricted motion.",
      "Multiple cartilaginous nodules may be free within the joint or attached to synovium.",
    ],
    criteria: [
      "Nodular cartilaginous proliferation within synovium or loose in joint space.",
      "Chondrocyte clustering with minimal atypia.",
      "Malignancy requires a constellation: unequivocal nuclear atypia, loss of clustering, bone invasion, conspicuous myxoid change, atypical mitoses, or transition to high-grade chondrosarcoma.",
    ],
    histology: [
      "Variably cellular nodules of hyaline cartilage.",
      "Chondrocytes show characteristic clustering.",
      "Nodules often retain a rim of synovial tissue.",
      "Longstanding lesions may calcify or undergo endochondral ossification.",
    ],
    ihc: [],
    molecular: [
      "FN1::ACVR2A rearrangement can support synovial chondromatosis in difficult cases but does not distinguish benign from malignant lesions.",
      "IDH1/IDH2 variants are absent.",
    ],
    differential: [
      [
        "Secondary chondrosarcoma arising in synovial chondromatosis",
        "Look for unequivocal nuclear atypia, loss of chondrocyte clustering, permeative bone invasion, myxoid change, atypical mitoses, or high-grade transition.",
      ],
      [
        "Soft-tissue chondroma",
        "Extra-articular, usually circumscribed nodule without synovial origin.",
      ],
      [
        "Enchondroma",
        "Intraosseous medullary cartilage lesion rather than synovial-based nodules.",
      ],
    ],
    pitfalls: [
      "Focal cytologic atypia alone may occur in longstanding synovial chondromatosis and is insufficient for malignancy.",
    ],
  },
  {
    name: "Central atypical cartilaginous tumor (ACT) / chondrosarcoma grade 1 (CS1)",
    group: "Intermediate",
    behavior: "ACT in appendicular skeleton; CS1 in axial skeleton",
    site: "Medullary cavity; ACT terminology for appendicular skeleton, CS1 for axial skeleton including pelvis, scapula, and skull base.",
    clinical: [
      "Usually adults; often discovered incidentally or due to persistent pain.",
      "Pelvic/axial lesions may present later with larger, more symptomatic tumors.",
    ],
    criteria: [
      "Medullary cartilaginous tumor with lobular growth and entrapment of pre-existing lamellar bone.",
      "Increased cellularity and irregular distribution of chondrocytes.",
      "Binucleated cells are common; mitoses and severe nuclear atypia are absent.",
      "Use ACT for appendicular sites and CS1 for axial sites.",
    ],
    histology: [
      "Lobules of hyaline cartilage, sometimes with myxoid change.",
      "Increased cellularity, irregular cell distribution, and binucleation compared with enchondroma.",
      "Entrapment of pre-existing lamellar bone is a key feature supporting ACT/CS1.",
      "At least 20% myxoid matrix favors ACT/CS1 over enchondroma.",
    ],
    ihc: ["No defining IHC profile."],
    molecular: [
      "IDH1/IDH2 variants are common but do not distinguish enchondroma from ACT/CS1.",
    ],
    differential: [
      [
        "Enchondroma",
        "Lower cellularity, more regular distribution, and lack of permeative entrapment of pre-existing lamellar bone; interpret cautiously in phalanges and immature skeleton.",
      ],
      [
        "Grade 2/3 chondrosarcoma",
        "More aggressive imaging, greater atypia, mitotic activity, and destructive soft-tissue extension.",
      ],
      [
        "Chondromyxoid fibroma",
        "Lobular zonation with spindle/stellate cells and peripheral giant cells; GRM1 supports CMF.",
      ],
    ],
    pitfalls: [
      "Radiologic correlation is essential; small biopsies may not show entrapment.",
      "In phalanges, cellularity and binucleation alone do not establish ACT/CS1.",
    ],
  },
  {
    name: "Secondary peripheral ACT / chondrosarcoma grade 1",
    group: "Intermediate",
    behavior: "Locally aggressive; terminology depends on skeletal site",
    site: "Cartilage cap of a pre-existing osteochondroma, typically pelvis, scapula, ribs, and proximal long bones.",
    clinical: [
      "Usually presents with new pain or growth after skeletal maturity.",
      "Cartilage cap thickness is the most important diagnostic parameter.",
    ],
    criteria: [
      "Surface tumor arising in a pre-existing osteochondroma.",
      "Cartilage cap exceeds 2 cm, measured perpendicular to the bone-cartilage interface.",
      "No nuclear pleomorphism or mitotic activity.",
      "Stalk invasion, although rare, is diagnostic of progression.",
    ],
    histology: [
      "Lobular cartilage cap with coarse, irregular calcification.",
      "Binucleation, cystic change, and necrosis may occur in benign osteochondroma and are not sufficient for progression.",
      "Mitoses and nuclear pleomorphism are absent in ACT/CS1.",
    ],
    ihc: [],
    molecular: [
      "IDH1/IDH2 variants are absent in the source-described entity; molecular testing is not needed for diagnosis.",
    ],
    differential: [
      [
        "Osteochondroma",
        "Cap thickness and clinical/radiologic change are decisive; morphology alone may not separate lesions without stalk invasion.",
      ],
      [
        "Secondary peripheral grade 2/3 chondrosarcoma",
        "Shows nuclear pleomorphism and mitoses, which are absent in ACT/CS1.",
      ],
      [
        "Periosteal chondrosarcoma",
        "Arises directly from bone surface rather than from a pre-existing osteochondroma.",
      ],
    ],
    pitfalls: [
      "Do not interpret binucleation, cystic degeneration, nodularity, or necrosis alone as malignant progression.",
      "Biopsy is not reliable for distinguishing osteochondroma from secondary peripheral ACT/CS1.",
    ],
  },
  {
    name: "Periosteal chondrosarcoma",
    group: "Malignant",
    behavior: "Malignant; usually grade 1 or 2",
    site: "Bone surface, usually metaphysis of long bones; distal femur, proximal humerus, and proximal tibia.",
    clinical: [
      "Usually adults; peak in the third decade with male predominance.",
      "Presents as a palpable mass, often with pain.",
      "Usually larger than 5 cm.",
    ],
    criteria: [
      "Cartilaginous tumor arising on the bone surface.",
      "Frequently larger than 5 cm.",
      "Cortical and/or soft-tissue invasion supports malignancy.",
    ],
    histology: [
      "Hyaline cartilage with atypical chondrocytes; binucleation is common.",
      "Infiltration of soft tissue or cortex, including Haversian canals, supports malignancy.",
      "Calcification and endochondral ossification may be present.",
      "Reactive peripheral bone shell may be seen.",
    ],
    ihc: [],
    molecular: [
      "IDH1/IDH2 variants occur in a subset but are rarely used diagnostically.",
    ],
    differential: [
      [
        "Periosteal chondroma",
        "Usually smaller than 3 cm and less than 5 cm; well-defined with cortical scalloping/remodeling but no Haversian or medullary invasion.",
      ],
      [
        "Secondary peripheral chondrosarcoma",
        "Arises in a pre-existing osteochondroma and has a thick cartilage cap.",
      ],
      [
        "Periosteal osteosarcoma",
        "Usually shows greater pleomorphism and malignant osteoid deposition.",
      ],
    ],
    pitfalls: [
      "Size is the most useful discriminator, but small periosteal chondrosarcomas occur; assess invasion.",
    ],
  },
  {
    name: "Clear cell chondrosarcoma",
    group: "Malignant",
    behavior: "Malignant; usually low grade",
    site: "Epiphysis, especially femoral and humeral heads; may occur in other bones.",
    clinical: [
      "Usually adults in the third to fifth decades; male predominance.",
      "Long history of pain is common; pathological fracture may occur.",
    ],
    criteria: [
      "Epiphyseal cartilaginous tumor composed of clear cells with abundant cytoplasm and central nuclei.",
      "Woven bone and osteoclast-like giant cells are present.",
      "Epiphyseal location is desirable, not essential.",
    ],
    histology: [
      "Lobules of large polygonal cells with abundant pale/clear or slightly eosinophilic cytoplasm.",
      "Distinct cell borders and central nuclei with mild atypia.",
      "Woven bone formation intermingled with osteoclast-like giant cells.",
      "Conventional low-grade chondrosarcoma areas may coexist.",
    ],
    ihc: [
      "Clear cells are often strongly positive for S100.",
      "Occasional cytokeratin (AE1/AE3, CK18) expression may occur.",
    ],
    molecular: [],
    differential: [
      [
        "Chondroblastoma",
        "Younger patient and typical epiphyseal lesion; polygonal chondroblasts with chicken-wire calcification and H3.3 K36M.",
      ],
      [
        "Metastatic clear cell renal cell carcinoma",
        "Clinical/radiologic correlation and epithelial/renal-lineage markers; lacks characteristic cartilage and woven-bone pattern.",
      ],
      [
        "Osteosarcoma",
        "Look for malignant osteoid; clear cell chondrosarcoma has characteristic clear cells and osteoclast-like giant cells.",
      ],
      [
        "Conventional chondrosarcoma with clear-cell change",
        "May contain focal clear cells; assess overall architecture and characteristic woven bone/giant-cell pattern.",
      ],
    ],
    pitfalls: [
      "Clear cell morphology alone is insufficient; integrate epiphyseal location and matrix/giant-cell features.",
    ],
  },
  {
    name: "Mesenchymal chondrosarcoma",
    group: "Malignant",
    behavior: "High-grade malignant",
    site: "Bone, soft tissue, and intracranial sites; craniofacial skeleton/jaws, ribs, pelvis, vertebrae, and femur.",
    clinical: [
      "Often affects adolescents and young adults; median age about 30 years.",
      "Pain and swelling are common; metastases may be present at diagnosis.",
    ],
    criteria: [
      "Biphasic tumor with primitive round-to-ovoid cells and islands of well-differentiated cartilage.",
      "Primitive component has fine chromatin, high N:C ratio, and elaborate vascular architecture.",
    ],
    histology: [
      "Sheets of primitive round/ovoid cells with delicate chromatin and high N:C ratio.",
      "Prominent staghorn vessels and branching capillaries.",
      "Islands of well-differentiated hyaline cartilage, sometimes with calcification/ossification.",
      "Spindle-cell areas may occur, particularly in intracranial tumors.",
    ],
    ihc: [
      "Primitive component: CD99 and SOX9; focal S100 may occur.",
      "Cartilaginous component: S100 and SOX9.",
      "NKX3.1 and NKX2.2 may be positive; retained INI1.",
      "Aberrant desmin, myogenin, or MYOD1 may occur; interpret cautiously.",
    ],
    molecular: [
      "HEY1::NCOA2 fusion is a defining/recurrent alteration and is highly helpful for confirmation.",
      "IDH1/IDH2 variants are absent in the source-described cases.",
    ],
    differential: [
      [
        "Ewing sarcoma",
        "Usually lacks a true hyaline cartilage component; EWSR1/FET::ETS fusion; NKX2.2 may be positive.",
      ],
      [
        "NFATC2-rearranged sarcoma",
        "Can overlap in round-cell morphology and CD99; requires NFATC2 fusion confirmation and lacks the characteristic biphasic cartilage/vascular pattern.",
      ],
      [
        "Other small round-cell sarcomas",
        "Search extensively for cartilage islands and use HEY1::NCOA2 testing.",
      ],
      [
        "Hemangiopericytoma-like tumors",
        "Staghorn vessels are not specific; the biphasic cartilage component is decisive.",
      ],
    ],
    pitfalls: [
      "A limited biopsy sampling only the primitive component may mimic Ewing or other round-cell sarcomas.",
    ],
  },
  {
    name: "Dedifferentiated chondrosarcoma",
    group: "Malignant",
    behavior: "High-grade malignant",
    site: "Central: femur, pelvis, humerus; peripheral: pelvis, scapula, and ribs.",
    clinical: [
      "Usually older adults; median age about 59 years.",
      "Pain and palpable mass are common; pathological fracture may occur.",
    ],
    criteria: [
      "Conventional cartilaginous tumor juxtaposed to a high-grade non-cartilaginous sarcoma.",
      "Abrupt transition between the two components is characteristic.",
      "IDH1/IDH2 variant is desirable/supportive, not essential.",
    ],
    histology: [
      "Conventional component ranges from enchondroma-like cartilage to grade 1/2 chondrosarcoma.",
      "Abrupt transition to high-grade non-cartilaginous sarcoma.",
      "Dedifferentiated component often resembles UPS or osteosarcoma; rhabdomyosarcoma and other lineages may occur.",
      "Dedifferentiated component may be small or may dominate the specimen.",
    ],
    ihc: [
      "Non-cartilaginous component follows its line of differentiation; keratins, desmin, or MYOD1 may be expressed.",
      "H3K27me3 loss occurs in a subset and may mimic MPNST.",
      "p53 overexpression may be present in the dedifferentiated component.",
    ],
    molecular: [
      "IDH1/IDH2 variants occur in approximately 60–80% of cases and may be present in both components.",
      "H3F3A testing/H3.3 G34W IHC can help identify giant cell tumor of bone with cartilaginous differentiation.",
    ],
    differential: [
      [
        "High-grade osteosarcoma",
        "May lack a conventional cartilage component; correlate with imaging and sample for a low-grade cartilaginous component.",
      ],
      [
        "Undifferentiated pleomorphic sarcoma",
        "Search for adjacent conventional cartilage and consider IDH1/IDH2 testing.",
      ],
      [
        "Rhabdomyosarcoma / sarcomatoid carcinoma",
        "Use lineage-directed IHC but correlate with an adjacent cartilaginous component.",
      ],
      [
        "Giant cell tumor of bone with cartilaginous differentiation",
        "H3.3 G34W IHC or H3F3A testing supports giant cell tumor rather than dedifferentiated chondrosarcoma.",
      ],
    ],
    pitfalls: [
      "Limited biopsy may sample only the high-grade component; imaging review and extensive gross sampling are essential.",
      "Even a small dedifferentiated component has major prognostic significance.",
    ],
  },
];

const categories = ["All", "Benign", "Intermediate", "Malignant"] as const;

function BulletList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="space-y-2 text-sm leading-6 text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
  tone = "plain",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "plain" | "teal" | "slate";
}) {
  const toneClass =
    tone === "teal"
      ? "bg-teal-50/70 border-teal-100"
      : tone === "slate"
        ? "bg-slate-50 border-slate-200"
        : "bg-white border-slate-200";
  return (
    <section className={`rounded-xl border p-4 sm:p-5 ${toneClass}`}>
      <h4 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-slate-900">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function ChondrogenicTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [openItems, setOpenItems] = useState<string[]>([
    "Enchondroma",
    "Central atypical cartilaginous tumor (ACT) / chondrosarcoma grade 1 (CS1)",
  ]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const categoryMatch = category === "All" || entity.group === category;
      const searchable = [
        entity.name,
        entity.group,
        entity.behavior,
        entity.site,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.histology,
        ...entity.ihc,
        ...entity.molecular,
        ...entity.differential.flat(),
      ]
        .join(" ")
        .toLowerCase();
      return categoryMatch && (!q || searchable.includes(q));
    });
  }, [query, category]);

  function toggle(name: string) {
    setOpenItems((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-2 bg-teal-700" />
          <div className="p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
              Bone Tumors · Diagnostic GPS
            </div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Chondrogenic Tumors
            </h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
              Morphology-first diagnostic reference emphasizing essential
              criteria, radiologic correlation, immunophenotype, molecular
              testing, and the most consequential differential diagnoses.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                {entities.length} entities
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                WHO-based
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                American English
              </span>
            </div>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-2">
          <Section title="Core diagnostic principle" tone="teal">
            <BulletList
              items={[
                "Cartilaginous bone tumors cannot be reliably classified by histology alone in many cases; integrate age, exact skeletal site, radiographs, CT, and MRI.",
                "For central cartilage lesions, distinguish enchondroma from ACT/CS1 primarily by growth pattern and imaging, especially entrapment of pre-existing lamellar bone and deep endosteal scalloping.",
                "Use ACT for appendicular lesions and chondrosarcoma grade 1 (CS1) for axial lesions, including the pelvis, scapula, and skull base.",
                "For surface lesions, determine whether there is corticomedullary continuity, a pre-existing osteochondroma, periosteal origin, or destructive cortical/medullary invasion.",
              ]}
            />
          </Section>
          <Section title="High-yield diagnostic traps" tone="slate">
            <BulletList
              items={[
                "Binucleation, focal atypia, cystic change, and necrosis may occur in benign cartilage lesions; none should be interpreted in isolation.",
                "A cartilage cap greater than 2 cm in an adult with a pre-existing osteochondroma supports secondary peripheral ACT/CS1.",
                "Periosteal chondroma is usually smaller than 3 cm; a surface cartilaginous tumor larger than 5 cm or showing invasion favors periosteal chondrosarcoma.",
                "A limited biopsy may miss the defining component of mesenchymal or dedifferentiated chondrosarcoma.",
              ]}
            />
          </Section>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunostain, or molecular
                alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. H3.3 K36M, GRM1, IDH1, cartilage cap..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === item ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600 hover:border-teal-500"}`}
              >
                {item}
              </button>
            ))}
            <span className="ml-auto self-center text-xs text-slate-500">
              {filtered.length} shown
            </span>
          </div>
        </section>

        <div className="space-y-4">
          {filtered.map((entity) => {
            const isOpen = openItems.includes(entity.name);
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
                    <div className="flex flex-wrap items-center gap-2">
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
                    <p className="mt-1 text-sm text-slate-500">{entity.site}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-teal-800">
                    {isOpen ? "Collapse −" : "View diagnostic profile +"}
                  </span>
                </button>
                {isOpen && (
                  <div className="space-y-5 border-t border-slate-100 p-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <Section title="Clinical profile" tone="slate">
                        <BulletList items={entity.clinical} />
                      </Section>
                      <Section
                        title="Essential diagnostic criteria"
                        tone="teal"
                      >
                        <BulletList items={entity.criteria} />
                      </Section>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-2">
                      <Section title="Histopathology">
                        <BulletList items={entity.histology} />
                      </Section>
                      {entity.ihc.length > 0 && (
                        <Section title="Immunophenotype">
                          <BulletList items={entity.ihc} />
                        </Section>
                      )}
                      {entity.molecular.length > 0 && (
                        <Section title="Molecular pathology" tone="slate">
                          <BulletList items={entity.molecular} />
                        </Section>
                      )}
                    </div>
                    <Section title="Differential diagnosis">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] text-left text-sm">
                          <tbody className="divide-y divide-slate-100">
                            {entity.differential.map(
                              ([diagnosis, distinction], index) => (
                                <tr key={index}>
                                  <td className="w-1/3 py-3 pr-4 align-top font-semibold text-slate-900">
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
                    </Section>
                    {entity.pitfalls.length > 0 && (
                      <Section title="Diagnostic pitfalls" tone="slate">
                        <BulletList items={entity.pitfalls} />
                      </Section>
                    )}
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

        <Section
          title="Central cartilage lesion: practical distinction"
          tone="teal"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b border-teal-200 text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Enchondroma</th>
                  <th className="py-2 pr-3">Central ACT / CS1</th>
                  <th className="py-2">Grade 2/3 chondrosarcoma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Cellularity</td>
                  <td className="py-2 pr-3">Usually lower</td>
                  <td className="py-2 pr-3">
                    Increased; irregular distribution
                  </td>
                  <td className="py-2">Often markedly increased</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Chondrocytes</td>
                  <td className="py-2 pr-3">Small, relatively uniform</td>
                  <td className="py-2 pr-3">Binucleation common</td>
                  <td className="py-2">Greater atypia and pleomorphism</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Growth pattern</td>
                  <td className="py-2 pr-3">No permeative entrapment</td>
                  <td className="py-2 pr-3">
                    Entrapment of pre-existing lamellar bone
                  </td>
                  <td className="py-2">Destructive/permeative growth</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Imaging</td>
                  <td className="py-2 pr-3">
                    Usually small; no aggressive features
                  </td>
                  <td className="py-2 pr-3">
                    Deep endosteal scalloping; often larger
                  </td>
                  <td className="py-2">
                    Cortical destruction and soft-tissue extension may occur
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Site terminology</td>
                  <td className="py-2 pr-3">All sites</td>
                  <td className="py-2 pr-3">ACT: appendicular; CS1: axial</td>
                  <td className="py-2">Chondrosarcoma grade 2/3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">
            These features are not interchangeable or independently definitive.
            Age, skeletal site, imaging, and adequate sampling remain essential;
            phalangeal lesions and lesions before growth-plate fusion require
            particular caution.
          </p>
        </Section>

        <Section title="Biopsy, sampling, and reporting checklist">
          <BulletList
            items={[
              "Review radiographs and cross-sectional imaging before biopsy; document exact bone, compartment, and relationship to cortex and medulla.",
              "For central cartilage tumors, sample the tumor-host bone interface to assess permeative entrapment of pre-existing lamellar bone.",
              "For osteochondroma-associated lesions, document cartilage-cap thickness measured perpendicular to the bone-cartilage interface.",
              "For surface tumors, assess cortical invasion, Haversian canal involvement, medullary extension, and soft-tissue invasion.",
              "For suspected dedifferentiated chondrosarcoma, extensively sample the interface between cartilaginous and high-grade components.",
              "Preserve non-decalcified or EDTA-decalcified tissue when molecular testing may be needed; acid decalcification can impair IHC and nucleic acids.",
              "Report tumor size, site, local extent, margins, and percentage of viable tumor/response when applicable.",
            ]}
          />
        </Section>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <strong className="text-slate-700">Scope:</strong> Content is
          organized from the supplied WHO chapter excerpt. Diagnostic criteria
          and terminology follow that source. Radiologic correlation and
          multidisciplinary review are emphasized where histology alone is
          insufficient. Ancillary tests are presented according to their stated
          diagnostic role, not as universal screening panels.
        </footer>
      </div>
    </main>
  );
}
