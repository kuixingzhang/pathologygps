"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
  summary: string;
};

const entities: Entity[] = [
  {
    name: "Lipomatosis",
    group: "Adipocytic Tumors",
    clinical: [
      "Lipomatoses have previously been subclassified according to their clinical findings and anatomical distribution.",
      "Although molecular studies are transforming the way we think about these lesions, some of these clinicopathological terms remain useful in classification.",
      "CILF manifests at birth or in early childhood as unilateral facial swelling with hyperplasia of the underlying bone and (in some cases) the teeth, tongue, brain, and parotid gland.",
    ],
    criteria: [
      "Essential: mature adipose tissue infiltrating regional tissues, occasionally arising in specific, relevant clinical contexts or syndromes.",
      "Desirable: alterations in PIK3CA (in CILF, PROS, FAVA, and LN), PTEN (in PHOST), related PI3K/PTEN/AKT/TSC/mTORC1 pathway genes, or FGFR1 in relevant clinical contexts.",
    ],
    histology: [
      "These tumors all show overgrowth of mature adipose tissue, typically infiltrating regional tissues, without lipoblasts or features of malignancy.",
      "CILF lesions are infiltrative and incorporate nerve, blood vessels, and hypertrophy of adjacent bone.",
      "PHOST shows a distinctive multinodular combination of mature adipose tissue, fibrous tissue, vascular component (often with dilated, back-to-back clustered veins and thick-walled, tortuous arteries), lymphoid follicles, bone, and hypertrophic nerves with onion bulb–like features.",
      "FAVA is characterized by abundant, dense, fibrous adipose tissue, vascular malformation, and lymphoplasmacytic aggregates in skeletal muscle.",
    ],
    ihc: [],
    molecular: [
      "Germline, mosaic, or somatic mutations in PIK3CA, PTEN, other genes in the PI3K/PTEN/AKT/TSC/mTORC1 pathway, and FGFR1 are implicated in a subset of these lesions, as described above.",
    ],
    differential: [],
    summary:
      "Lipomatosis is a broad term encompassing the infiltrative overgrowth of mature adipose tissue occurring in a wide spectrum of clinical contexts, sometimes in hamartomatous arrangements with other mesenchymal tissue types.",
  },
  {
    name: "Lipoblastoma/lipoblastomatosis",
    group: "Adipocytic Tumors",
    clinical: [
      "Superficial, circumscribed lipoblastoma clinically simulates lipoma or a vascular malformation, whereas lipoblastomatosis originates in deep soft tissue and is more infiltrative.",
      "Truncal tumors may infiltrate into the thoracic cavity from extrathoracic locations, or into the spine, with reports of neuroforaminal or intraspinal invasion.",
      "Because both types recur, the distinction between circumscribed and infiltrative forms is not clinically relevant.",
    ],
    criteria: [
      "Essential: a lobulated mass in early childhood, composed of sheets of variably mature adipocytes separated by fibrovascular septa.",
      "Desirable: molecular confirmation is recommended in older children and adults to rule out liposarcoma.",
    ],
    histology: [
      "Lipoblastoma is a lobulated tumor comprising sheets of adipocytes showing a spectrum of maturation, ranging from primitive stellate or spindled mesenchymal cells to multivacuolated or small signet-ring lipoblasts through to mature adipocytes, separated by fibrovascular septa.",
      "Myxoid areas display a plexiform vascular pattern with primitive mesenchymal cells.",
      "The proportion of these cell types varies, and there is sometimes a zonal pattern of maturation, with more immature myxoid cells at the periphery (adjacent to fibrous septa) and mature adipocytes in the center of the lobule.",
      "Myxoid regions can occasionally show pooling of matrix similar to myxoid liposarcoma.",
    ],
    ihc: [
      "The adipocytes of lipoblastoma demonstrate reactivity for S100, CD56, and CD34.",
      "The primitive mesenchymal cells are often reactive for desmin.",
    ],
    molecular: [
      "In selected cases, the finding of PLAG1 rearrangements / copy-number gain can support the diagnosis; HMGA2 alterations are less common.",
    ],
    differential: [],
    summary:
      "Lipoblastoma is a benign neoplasm of embryonal white fat, which may be a localized or diffuse tumor with a tendency for local recurrence if incompletely excised.",
  },
  {
    name: "Liposarcoma",
    group: "Adipocytic Tumors",
    clinical: [
      "Liposarcomas of all types generally manifest as large (> 50 mm), deep-seated, painless soft tissue masses.",
      "Liposarcomas represent < 2% of all pediatric soft tissue malignancies.",
      "Nearly 90% occur in the second decade of life, with a female predominance; > 70% are of myxoid type.",
    ],
    criteria: [
      "ALT/WDLPS Essential: mature fat transected by irregular fibrous septa containing enlarged hyperchromatic cells and (less commonly) lipoblasts.",
      "Desirable: nuclear expression of MDM2 and/or CDK4, or evidence of MDM2 and/or CDK4 gene amplification.",
      "DDLPS Essential: ALT/WDLPS with abrupt transition to (usually) high-grade pleomorphic sarcoma.",
      "Desirable: nuclear expression of MDM2 and/or CDK4, or evidence of MDM2 and/or CDK4 gene amplification.",
    ],
    histology: [
      "The morphological features of pediatric ALT/WDLPS, DDLPS, and conventional PLPS are identical to those seen in older patients.",
      "MDM2 and/or CDK4 nuclear immunopositivity is present in most cases of ALT/WDLPS and DDLPS , with the exception of Li–Fraumeni-associated cases, which overexpress p53.",
      "The morphological features of MLPS in children and adults are identical.",
      "However, unlike in adults, progression to high-grade MLPS (round cell) is not clearly associated with a worse prognosis (probably owing to the rarity of such tumors) in children.",
    ],
    ihc: [
      "MDM2 and/or CDK4 nuclear immunopositivity is present in most cases of ALT/WDLPS and DDLPS , with the exception of Li–Fraumeni-associated cases, which overexpress p53.",
    ],
    molecular: [
      "Amplification of MDM2 and CDK4 distinguishes ALT/WDLPS from benign mimics.",
      "DDIT3 rearrangement and the absence of PLAG1 rearrangement help in the differential diagnosis of MLPS from extensively myxoid lipoblastomas.",
    ],
    differential: [],
    summary:
      "Liposarcomas are a heterogeneous group of mesenchymal neoplasms with adipocytic differentiation and varying biological behavior ranging from locally aggressive to metastasizing.",
  },
  {
    name: "Fasciitis/myositis",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Both nodular fasciitis and proliferative myositis may simulate sarcoma owing to their rapid growth.",
      "Nodular fasciitis usually measures ≤ 20 mm and is always < 50 mm in maximum dimension, whereas cranial fasciitis may be larger.",
      "Myositis ossificans manifests as a rapidly growing, painful mass in its early stage, with a plateau in growth after 2 weeks, when flocculent mineralization appears on imaging.",
    ],
    criteria: [
      "Essential: for nodular fasciitis: a bland myofibroblastic proliferation with a tissue culture–like growth pattern, extravasated red cells, and myxoid stroma; for proliferative myositis: a myofibroblastic/fibroblastic proliferation with ganglion-like cells, variable collagenous/myxoid stroma, and an intramuscular checkerboard growth pattern; for myositis ossificans: fascicles of benign-appearing fibroblasts and…",
      "Desirable: for nodular fasciitis and myositis ossificans: demonstration of a USP6 gene rearrangement.",
    ],
    histology: [
      "Nodular fasciitis is composed of loose intersecting fascicles of plump, bland myofibroblasts with fine chromatin and small nucleoli.",
      "Lesions may be highly cellular with a high mitotic count.",
      "Abundant myxoid stroma, a feathery tissue culture–like appearance, microcysts, osteoclast-like giant cells, and extravasated erythrocytes are common features.",
      "Later lesions contain more collagen and may show keloidal hyalinization.",
    ],
    ihc: [
      "By immunohistochemistry, nodular fasciitis and cranial fasciitis are usually positive for SMA and MSA; desmin positivity is occasionally found.",
      "Myofibroblasts are positive for SMA and MSA, and negative for desmin.",
    ],
    molecular: [
      "Recurrent USP6 gene rearrangements have been identified in nodular fasciitis, cranial fasciitis, and myositis ossificans.",
    ],
    differential: [],
    summary:
      "Nodular fasciitis is a self-limiting myofibroblastic neoplasm typically occurring in subcutaneous tissue.",
  },
  {
    name: "Fibrodysplasia ossificans progressiva",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "FOP is usually associated with congenital malformations of the great toes (bilateral hallux valgus, malformed first metatarsal bone) and cervical–vertebral fusions.",
      "Episodes of painful soft tissue swelling occur during the first decade of life, accompanied by relentless and progressive ossification of soft tissues.",
      "Traumas can accelerate the process, so the suspicion of FOP is a contraindication to biopsy.",
    ],
    criteria: [
      "Essential: congenital great toe malformations and rapidly progressive soft tissue masses preceding heterotopic ossification; demonstration of an ACVR1 mutation.",
    ],
    histology: [
      "Early lesions of FOP are nonspecific vascular loose fibrous tissue proliferations with variable inflammation, which over time become more collagenized.",
      "As the lesions mature, cartilage appears, followed by endochondral ossification.",
      "FOP cannot be distinguished histologically from localized myositis ossificans.",
    ],
    ihc: [],
    molecular: [
      "Molecular testing is necessary to demonstrate a germline mutation of ACVR1.",
    ],
    differential: [],
    summary:
      "Fibrodysplasia ossificans progressiva (FOP) is a heritable condition of progressive soft tissue metamorphosis to bone, resulting in immobility and premature death.",
  },
  {
    name: "Fibroma of tendon sheath",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "FOTS is a slow-growing, painless nodule, measuring < 30 mm.",
      "FOTS usually occurs in young or middle-aged adults, but cases in infants and children have been reported.",
      "FOTS usually occurs on the finger tendons (most commonly in the thumb, index finger, and middle finger) and rarely in the knee, elbow, or wrist.",
    ],
    criteria: [
      "Essential: a firm nodule consisting of a paucicellular proliferation of fibroblasts/myofibroblasts in a collagenous background with slit-like blood vessels, attached to tendon.",
    ],
    histology: [
      "Histological examination of FOTS reveals a circumscribed arrangement of bland fibroblasts and myofibroblasts in a densely collagenous or hyalinized stroma.",
      "Characteristic slit-like blood vessels are often prominent at the periphery of the tumor.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Fibroma of tendon sheath (FOTS) is a benign fibroblastic/myofibroblastic, nodular, bland proliferation that attaches to tendon.",
  },
  {
    name: "Gardner fibroma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "GF is usually diagnosed in young children (aged < 10 years), including neonates, but it can be seen in older children.",
      "In contrast, nuchal-type fibroma, which has many overlapping features with GF, occurs mainly in middle-aged men, and as many as 50% of nuchal-type fibroma patients have diabetes mellitus.",
      "GF arises in the superficial and deep soft tissues of the torso (most commonly in the back or paraspinal region), head/neck, and rarely other non-visceral sites (e. g. the mesentery).",
    ],
    criteria: [
      "Essential: a poorly defined, bland and paucicellular, densely collagenized, CD34-positive tumor occurring in a child; often associated with FAP and APC mutations.",
    ],
    histology: [
      "GF exhibits haphazardly arranged coarse collagen bundles interspersed with bland spindled fibroblasts and prominent clefts (cracking artefact).",
      "A helpful diagnostic feature is the entrapment of fat and neurovascular bundles at the edge of the lesion.",
      "These tumors are CD34-positive, SMA-negative, and often show nuclear β-catenin staining, reflective of their association with FAP.",
    ],
    ihc: [
      "These tumors are CD34-positive, SMA-negative, and often show nuclear β-catenin staining, reflective of their association with FAP.",
    ],
    molecular: [
      "GF is associated with germline and somatic APC mutations.",
      "An aggressive phenotype has been described with a specific c.",
    ],
    differential: [],
    summary:
      "Gardner fibroma (GF) is a benign fibroblastic/myofibroblastic, plaque-like lesion composed of dense collagen bundles with sparse fibroblasts, usually associated with familial adenomatous polyposis (FAP).",
  },
  {
    name: "Fibrous hamartoma of infancy",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with FHI present with a painless solitary subcutaneous mass, sometimes with overlying skin discoloration, edema, hypertrichosis, and tethering.",
      "Large lesions and multiple tumors in the same patient can be encountered.",
      "FHI has been reported in patients with tuberous sclerosis and William syndrome.",
    ],
    criteria: [
      "Essential: characteristic triphasic morphology with bundles of bland fibroblastic/myofibroblastic cells, nodules of primitive mesenchyme, and mature adipose tissue.",
    ],
    histology: [
      "FHI has a characteristic triphasic organoid pattern with fascicles of bland fibroblastic/myofibroblastic cells admixed with mature adipose tissue and myxoid nodules containing primitive mesenchymal cells with rounded to stellate nuclei.",
      "One quarter of cases can show areas resembling giant cell fibroblastoma and composed of hyalinized zones containing collagen with cracking artefact forming slit-like spaces lined by flattened tumor cells.",
      "Mitotic figures are infrequent, and necrosis is typically absent.",
      "Interspersed inflammatory cells can be seen.",
    ],
    ihc: [
      "By immunohistochemistry, FHI shows variable expression of SMA in the fibroblastic areas and in primitive mesenchyme.",
      "S100 is expressed in the adipocytic component.",
      "Primitive mesenchyme and areas with giant cell fibroblastoma–like morphology are CD34-positive.",
    ],
    molecular: [
      "EGFR exon 20 insertion/duplication mutations have been identified cases of FHI by targeted next-generation sequencing and Sanger sequencing.",
    ],
    differential: [],
    summary:
      "Fibrous hamartoma of infancy (FHI) is a soft tissue neoplasm of infants and young children, showing a characteristic organoid, triphasic morphology with bundles of bland fibroblastic/myofibroblastic cells, nodules of primitive mesenchyme, and mature adipose tissue.",
  },
  {
    name: "Lipofibromatosis",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "LPF typically manifests as a slowly growing subcutaneous mass.",
      "LPF occurs more often in boys than in girls, with a wide age range (birth to 14 years).",
      "As many as 20% of reported cases have been congenital.",
    ],
    criteria: [
      "Essential: histology showing an admixture of mature fat, short fascicles of bland spindled cells, and lipoblast-like cells; exclusion of other entities with an LPF-like pattern (e. g. calcifying aponeurotic fibroma, infantile fibrosarcoma).",
    ],
    histology: [
      "LPF is composed of fascicles of mature fibrous tissue with bland, uniform, elongated nuclei and eosinophilic cytoplasm traversing mature adipose tissue.",
      "The adipose tissue may form a major proportion of the lesion.",
      "In newborn patients, the fat lobules may have an immature appearance with a myxoid matrix.",
      "Small collections of univacuolated cells may be present in the fibroblastic component, where melanin-laden cells have been occasionally documented.",
    ],
    ihc: [
      "Immunohistochemically, the fibroblasts show variable expression of CD34 and SMA, and the fat is S100-positive.",
    ],
    molecular: [
      "Detection of the FN1::EGF gene fusion may be helpful in cases of calcifying aponeurotic fibromas lacking calcification , although this is not required for routine diagnosis.",
    ],
    differential: [],
    summary:
      "Lipofibromatosis (LPF) is a rare pediatric soft tissue tumor with a distinctive admixture of mature fat, fascicles of bland spindled cells, and lipoblast-like cells.",
  },
  {
    name: "Inclusion body infantile digital fibromatosis",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "The typical presentation is a painless, dome-shaped to polypoid cutaneous lesion that can occur multiply (multinodular or metachronous on ipsilateral digits).",
      "Tumors arise equally in boys and girls aged < 5 years; most occur during the first year of life and about 30% are congenital, although adult tumors are rare.",
      "Classically, these tumors arise from the dorsal/dorsolateral distal to mid portion of the fingers and toes, although they rarely involve the thumb, great toe, hand, or foot; extra-digital locations (extremities, tongue, breast) are rare.",
    ],
    criteria: [
      "Essential: a bland, dermal-based, myofibroblastic spindle cell tumor with intracytoplasmic pink-red inclusions.",
    ],
    histology: [
      "These are dermal-based lesions composed of spindled myofibroblastic cells arranged in short to medium-length fascicles, sometimes with a whorled or storiform arrangement.",
      "The fascicles are often arranged perpendicularly to the epidermis, surrounding skin adnexal structures, with variable collagen content.",
      "The nuclei are cytologically bland and there are typically intracytoplasmic pale-pink to red inclusions that may be paranuclear and can indent the nucleus.",
      "Trichrome and Movat’s pentachrome stains can help highlight these inclusions, staining them red and pink, respectively.",
    ],
    ihc: [
      "The inclusions are composed of actin-rich myofilaments that stain for SMA, calponin, and sometimes caldesmon.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Inclusion body fibromatosis is a benign myofibroblastic tumor with recurrent potential, characterized by intracytoplasmic eosinophilic inclusions.",
  },
  {
    name: "Juvenile hyaline fibromatosis (hyaline fibromatosis syndrome)",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "HFS manifests in infancy or later in childhood as slow-growing papular and nodular skin lesions.",
      "Patients affected by juvenile hyaline fibromatosis show joint contractures (in 85–95% of cases), gingival hyperplasia, osteopenia, and osteolytic lesions.",
      "Infantile systemic hyalinosis frequently manifests with extreme pain at minimal handling.",
    ],
    criteria: [
      "Essential: subcutaneous nodules and gingival hypertrophy with prominent hyaline-like material.",
      "Desirable: germline sequencing of ANTXR2.",
    ],
    histology: [
      "HFS lesions are characterized by plump to spindled uniform fibroblasts, often arranged in cords simulating vascular spaces, admixed with abundant extracellular eosinophilic, non-fibrillar hyaline material, obliterating normal structures.",
      "The hyaline-like extracellular matrix deposits stain strongly with PAS and are diastase-resistant.",
    ],
    ihc: [],
    molecular: [
      "Molecular testing is necessary to demonstrate a germline mutation of ANTXR2.",
    ],
    differential: [],
    summary:
      "Hyaline fibromatosis syndrome (HFS) is a rare autosomal recessive disease characterized by abnormal deposits of amorphous substance in the dermis, subcutaneous soft tissues, gingiva, and visceral sites, with clinical manifestations varying from very severe (infantile systemic hyalinosis) to milder (juvenile hyaline fibromatosis).",
  },
  {
    name: "Fibromatosis colli",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Fibromatosis colli manifests as a mass in the sternocleidomastoid muscle, most often congenitally or within 2–4 weeks of birth.",
      "The mass may continue to grow over several weeks, then stabilize and spontaneously resolve in most cases.",
      "Approximately 10–20% of patients develop torticollis; such patients show head tilt towards the involved sternocleidomastoid muscle (chin directed towards the contralateral shoulder).",
    ],
    criteria: [
      "Essential: a fusiform mass associated with the sternocleidomastoid muscle of an infant; biopsy or FNAB (if performed) shows a bland fibroblastic proliferation with associated atrophic skeletal muscle.",
    ],
    histology: [
      "Surgical specimens are uncommon; only a minority of patients require tenotomy for persistent torticollis.",
      "Histology demonstrates a paucicellular, scar-like, fibroblastic proliferation entrapping skeletal muscle.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Fibromatosis colli is a benign, self-limiting fibrous proliferation in the sternocleidomastoid muscle of infants.",
  },
  {
    name: "Calcifying aponeurotic fibroma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with CAF typically present with a slowly growing, superficially located painless mass.",
      "The age range is wide, with a peak in incidence at 5–15 years.",
      "Patients are more commonly male than female.",
    ],
    criteria: [
      "Essential: an infiltrative fibromatosis-like fibroblastic lesion with variable chondroid foci with possible calcification.",
      "Desirable (in selected cases): demonstration of FN1::EGF fusion.",
    ],
    histology: [
      "Lesions are infiltrative into the surrounding fat, muscle, fascia, tendons, and neurovascular bundles.",
      "They consist of fascicular, fibromatosis-like spindle cells and less cellular chondroid zones, often with calcification, bordered by rounded epithelioid cells.",
      "Both components are variably present, and early lesions show only a fibromatosis-like pattern.",
      "Osteoclast-type giant cells may be present.",
    ],
    ihc: [
      "By immunohistochemistry, lesional cells variably express SMA, MSA, and CD99, while S100 is positive in the chondroid areas.",
    ],
    molecular: ["Demonstration of an FN1::EGF fusion may be helpful."],
    differential: [],
    summary:
      "Calcifying aponeurotic fibroma (CAF) is a benign tumor of children and adolescents, with a predilection for the distal extremities, characterized by bland spindle cells and zones of calcification with plump epithelioid fibroblasts.",
  },
  {
    name: "Sinonasal angiofibroma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "The classic triad of nasal obstruction, epistaxis, and nasopharyngeal mass is seen in most patients, often over a prolonged symptom duration.",
      "Biopsy is contraindicated because of potentially profuse bleeding.",
      "With tumor progression, facial deformity, deafness, diplopia, and proptosis may be seen.",
    ],
    criteria: [
      "Essential: male patient; nasopharynx/posterior nasal cavity location; numerous vessel types and sizes, some with muscular walls; stromal stellate fibroblasts with variably collagenized stroma.",
      "Desirable: stromal cell nuclear β-catenin and AR immunoreactivity.",
    ],
    histology: [
      "There are numerous blood vessels of various sizes, from slit-like capillaries to irregularly dilated and branching vessels.",
      "The vascular walls may be thin to focally or continuously thickened and muscular.",
      "No elastic tissue is identified in the vessels except in the feeding arteries.",
      "The stroma is composed of bipolar or stellate fibroblastic cells with plump, vesicular, spindled nuclei and indistinct nucleoli.",
    ],
    ihc: [
      "Vascular markers highlight the vessels and SMA in the smooth muscle vascular wall, while the stromal cells only show strong nuclear expression of AR and β-catenin.",
    ],
    molecular: [
      "Aberrant nuclear β-catenin expression is seen in most tumors.",
    ],
    differential: [],
    summary:
      "Sinonasal angiofibroma is a locally aggressive, variably cellular fibrovascular neoplasm arising in the nasopharynx of boys and young men.",
  },
  {
    name: "Plantar/palmar fibromatoses",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "The clinical presentation of palmar fibromatosis includes contractures, swelling, or a painless nodular mass.",
      "Patients with plantar fibromatosis usually present with asymptomatic nodules.",
      "A subset of patients have synchronous or metachronous lesions.",
    ],
    criteria: [
      "Essential: long fascicles of bland fibroblasts and myofibroblasts; variably collagenous stroma.",
    ],
    histology: [
      "Microscopically these tumors are composed of a nodular, sometimes plexiform, arrangement of spindle cells.",
      "Three phases of growth (proliferative, involutional, and late-stage) have been described, with progression from cellular lesions composed of parallel fascicles of fibroblasts and myofibroblasts to tumors with increased collagen deposition and low cellularity.",
      "Mitotic activity can be prominent, but atypical mitoses are absent.",
      "Perivascular chronic inflammation, microhemorrhage, and multinucleated giant cells may be appreciated.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Palmar/plantar fibromatoses are benign fibroblastic and myofibroblastic proliferations that involve the volar aspects of the hands or the plantar aponeuroses.",
  },
  {
    name: "Dermatofibrosarcoma protuberans",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "DFSP and GCF typically occur as painless, single, red-blue, slowly growing skin plaques or nodules.",
      "Other forms exist, including atrophic plaques and morpheaform lesions.",
      "The lesion rarely extends beyond 50 mm.",
    ],
    criteria: [
      "Essential: for classic DFSP: a dermal-hypodermal tumor; monotonous spindle cells arranged in a storiform pattern; infiltration of the subcutaneous fat with a honeycomb pattern; CD34 expression; for fibrosarcomatous DFSP: atypical cells with increased mitotic activity arranged in intersecting fascicles producing a herringbone pattern.",
      "Desirable: one of the following translocations: COL1A1:: PDGFB, COL6A3::PDGFD, or EMILIN2::PDGFD.",
    ],
    histology: [
      "Classic DFSP Classic DFSPs are poorly defined tumors invading the dermis and the hypodermis.",
      "In the subcutis, the tumor cells entrap fat cells, forming a classic honeycomb pattern.",
      "The overlying epidermis can be normal, acanthotic, or ulcerated.",
      "DFSP consists of non-atypical spindle cells arranged in a storiform pattern.",
    ],
    ihc: [
      "CD34 is positive in a majority of DFSPs and frequently negative in fibrosarcomatous areas.",
    ],
    molecular: [
      "The identification of the translocation involving PDGFB or PDGFD is useful in non-classic cases.",
    ],
    differential: [],
    summary:
      "Dermatofibrosarcoma protuberans (DFSP) and giant cell fibroblastoma (GCF) are superficial fibrohistiocytic, locally aggressive, rarely metastasizing tumors harboring a specific fusion gene involving PDGFB or (less often) PDGFD.",
  },
  {
    name: "Desmoid fibromatosis",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with desmoid fibromatosis present with a slow-growing deep-seated mass.",
      "Desmoid fibromatosis is rare, affecting < 4 patients per 1 million person-years and accounting for approximately 2–3% of soft tissue tumors in children.",
      "The peak incidence in childhood is between the ages of 6 and 15 years.",
    ],
    criteria: [
      "Essential: infiltrative long, sweeping fascicles of bland fibroblasts and myofibroblasts.",
      "Desirable: nuclear β-catenin expression; CTNNB1 mutation (in challenging cases or small biopsies).",
    ],
    histology: [
      "Histological examination reveals bland (myo)fibroblasts arranged in long, sweeping fascicles with an infiltrative growth pattern.",
      "Approximately 20% have an associated Gardner fibroma.",
    ],
    ihc: [
      "The lesional cells typically show tram-track staining for SMA, and the majority (80%) show nuclear β-catenin expression.",
    ],
    molecular: [
      "β-catenin mutation analysis may be helpful in small biopsies and/or when β-catenin immunostaining is difficult to interpret.",
    ],
    differential: [],
    summary:
      "Desmoid fibromatosis is a locally aggressive, non-metastasizing (myo)fibroblastic neoplasm with a high propensity for local recurrence.",
  },
  {
    name: "EWSR1::SMAD3-rearranged fibroblastic tumor",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients present with a superficially located, often slow-growing lesion at the distal extremities, mainly in acral sites.",
      "The tumor in the tibia caused pain and diffuse swelling.",
      "There is a strong female preponderance.",
    ],
    criteria: [
      "Essential: a superficially located infiltrating tumor, commonly in the distal extremities / acral sites, consisting of monomorphic spindle cells with central hyalinization; nuclear ERG expression; detection of an EWSR1::SMAD3 fusion gene.",
    ],
    histology: [
      "Lesions are located in the dermis and subcutis.",
      "They show a nodular or multinodular growth pattern with infiltrative margins.",
      "There is commonly a biphasic appearance, with high cellularity at the periphery and variable central hyalinization.",
      "The spindle cells are arranged in intersecting fascicles.",
    ],
    ihc: [
      "ERG expression is a consistent immunohistochemical finding, unlike in other fibroblastic lesions, and other markers are negative (CD34, SMA, desmin, caldesmon, S100, SOX10, MUC4, β-catenin).",
    ],
    molecular: [
      "Detection of a fusion of EWSR1 (exon 7) with SMAD3 (exon 5), usually by RT-PCR, next-generation sequencing techniques, or FISH (the latter commonly for EWSR1), is required for diagnosis.",
    ],
    differential: [],
    summary:
      "EWSR1::SMAD3-rearranged fibroblastic tumor is a benign, locally recurring fibroblastic tumor with a characteristic clinical, morphological, immunohistochemical, and genetic profile.",
  },
  {
    name: "Infantile fibrosarcoma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients typically present with a painless mass or exophytic nodule; rapid growth may occur.",
      "Approximately one third of cases are congenital.",
      "Imaging, typically ultrasound in young children, demonstrates a heterogeneous enhancing mass with relatively nonspecific characteristics.",
    ],
    criteria: [
      "Essential: a primitive ovoid/round cell or spindle cell tumor, often arranged in sheets or fascicles; hemangiopericytoma-like vessels and/or mixed chronic inflammation.",
      "Desirable: ETV6::NTRK3 or other reported fusions or activating alterations of receptor tyrosine kinase pathway genes (e. g.",
      "NTRK1, NTRK2, NTRK3, RET, MET, BRAF).",
    ],
    histology: [
      "IFS may demonstrate a spectrum of histological patterns across cases and within a given case.",
      "Most frequently, IFS is a cellular, monomorphic neoplasm composed of primitive, ovoid/round to spindled cells, arranged either in compact, haphazard sheets or in long fascicles.",
      "Often tumors demonstrate a prominent ectatic or hemangiopericytoma-like vascular pattern.",
      "The background stroma may range from myxoid to heavily collagenous.",
    ],
    ihc: [
      "The IFS immunoprofile is nonspecific, with variable expression of SMA, S100, CD34, and (rarely) desmin.",
      "Those tumors harboring NTRK gene rearrangements typically show expression for pan-TRK antibodies.",
    ],
    molecular: [
      "Gene fusions or activating alterations involving receptor tyrosine kinase (e. g.",
      "ETV6::NTRK3) or the downstream effector molecule (BRAF) fusions or activating alterations may be demonstrated by various molecular modalities.",
    ],
    differential: [],
    summary:
      "Infantile fibrosarcoma (IFS) is a fibroblastic tumor, most frequently occurring in infancy, that is often locally aggressive but infrequently metastasizes.",
  },
  {
    name: "Pediatric NTRK-rearranged spindle cell neoplasm",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with these tumors most frequently present with a palpable mass.",
      "The largest series combined demonstrate a wide age distribution (range: 0–77 years; overall median: 19 years).",
      "In the pediatric population, > 55% of cases occur in the first year of life.",
    ],
    criteria: [
      "Essential: haphazardly arranged monomorphic primitive spindle cells; characteristic histological pattern(s) as summarized in  6.",
      "04 ; fusions or activating alterations of receptor tyrosine kinase pathway genes (e. g.",
      "NTRK1, NTRK2, NTRK3, RET, RAF1, BRAF); exclusion of well-established pathological entities such as inflammatory myofibroblastic tumor and infantile fibrosarcoma.",
      "Desirable: expression of CD34 and/or S100.",
    ],
    histology: [
      "A broad morphological spectrum has been described, including tumors reminiscent of infantile fibrosarcoma, inflammatory myofibroblastic tumor, lipofibromatosis, and malignant peripheral nerve sheath tumor.",
      "The main histological patterns are summarized in  6.",
      "The most consistent feature is haphazardly arranged primitive/monomorphic spindle cells.",
      "Some cases have distinctive stromal and/or perivascular hyalinization.",
    ],
    ihc: [
      "By immunohistochemistry, many tumors show variable coexpression of CD34 and S100.",
      "In those tumors with NTRK gene fusions, pan-TRK expression is also present.",
    ],
    molecular: [
      "Testing for NTRK gene or downstream effector molecule (BRAF) fusions or alterations may be useful.",
    ],
    differential: [],
    summary:
      "This is an emerging family of rare spindle cell tumors showing a wide morphological spectrum, from lipofibromatosis-like lesions (lipofibromatosis-like neural tumor) to infantile fibrosarcoma–like lesions, and harboring NTRK1, NTRK2, or NTRK3 gene rearrangements or other gene alterations (such as RAF1, BRAF, or RET) implicated in receptor tyrosine kinase pathway activation.",
  },
  {
    name: "Low-grade fibromyxoid sarcoma / sclerosing epithelioid fibrosarcoma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients typically present with a painless mass.",
      "In patients aged < 21 years, most LGFMSs are < 50 mm at presentation and typically localized, without evidence of nodal or distant metastases.",
      "LGFMS typically occurs in young adults, with a wide age range.",
    ],
    criteria: [
      "LGFMS Essential: alternating fibrous/myxoid areas; bland spindle cells in whorls / short fascicles; diffuse strong MUC4 (in nearly all cases).",
      "Desirable: demonstration of FUS gene rearrangement (in selected cases).",
      "SEF Essential: epithelioid cells in cords, nests, or trabeculae, in a dense sclerotic stroma; diffuse strong MUC4; keratin-negative.",
      "Desirable: demonstration of EWSR1::CREB3L1 or other rearrangements (in selected cases).",
    ],
    histology: [
      "LGFMS comprises hypocellular collagenous areas and cellular myxoid nodules, with abrupt transition.",
      "The cells are spindled or angulated, with even chromatin and indiscernible or fibrillary cytoplasm (usually minimally atypical), and arranged in short fascicles or whorls.",
      "Mitoses are generally inconspicuous.",
      "Vessels are arteriole-sized with perivascular sclerosis, or hemangiopericytic.",
    ],
    ihc: [
      "Strong diffuse cytoplasmic expression of MUC4 is seen in about 99% of LGFMSs and 90% of SEFs and is highly sensitive and specific for these among fibroblastic and neural neoplasms.",
      "MUC4-negative SEF can show histological features similar to those of MUC4-positive SEF and hybrid LGFMS/SEF with fusions of FUS or EWSR1 with CREB3L1 or CREB3L2, and prominent epithelioid cellular morphology.",
      "However, MUC4-negative SEF shows a spectrum of morphological features.",
    ],
    molecular: [
      "If MUC4 is negative or unavailable, identification of any of the fusion genes, or identification of FUS or EWSR1 rearrangement, supports the diagnosis.",
      "LGFMS typically harbors FUS::CREB3L2 or FUS::CREB3L1 fusions; these also occur in SEF, but EWSR1::CREB3L1 is more common.",
    ],
    differential: [],
    summary:
      "Low-grade fibromyxoid sarcoma (LGFMS) and sclerosing epithelioid fibrosarcoma (SEF) are malignant fibroblastic neoplasms showing morphological and molecular overlap.",
  },
  {
    name: "Inflammatory myofibroblastic tumor",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Abdominal tumors may cause vague abdominal pain, gastrointestinal obstruction, or bleeding.",
      "Pulmonary IMTs are associated with cough, chest pain, and dyspnea.",
      "Some patients develop a constitutional inflammatory syndrome of fever, malaise, weight loss, anemia, thrombocytosis, polyclonal hypergammaglobulinemia, and elevated ESR and C-reactive protein.",
    ],
    criteria: [
      "Essential: loose or compact fascicles of spindle cells with a prominent inflammatory infiltrate and a variable fibrous or myxoid stroma; expression of ALK (in as many as 60% of cases) Desirable: demonstration of rearrangements of ALK, ROS1, NTRK3, or other genes.",
    ],
    histology: [
      "IMT is characterized by a proliferation of spindled and elongated fibroblastic-myofibroblastic cells, with variation in cellularity, stroma, and inflammatory infiltrate, featuring three basic patterns that are often combined in a single tumor ( 6.",
      "Scattered ganglion-like cells with abundant cytoplasm, vesicular nuclei, and prominent nucleoli are frequent.",
      "Dystrophic calcification and osseous metaplasia may be present.",
      "Necrosis is uncommon and mitotic activity is variable.",
    ],
    ihc: [
      "IMT displays variable staining for SMA, MSA, calponin, and desmin.",
      "Focal keratin immunoreactivity is seen (in ~30% of cases).",
      "ALK immunohistochemistry is positive (membranous, cytoplasmic, perinuclear, or dot-like) in 50–60% of cases and correlates with the presence of ALK gene rearrangement.",
    ],
    molecular: [
      "Molecular assays are recommended for diagnosis.",
      "FISH for ALK gene rearrangements is widely used; however, occasional false negative results occur in the setting of abundant inflammation or in the presence of intrachromosomal inversions, such as EML4::ALK fusion.",
    ],
    differential: [],
    summary:
      "Inflammatory myofibroblastic tumor (IMT) is a rarely metastasizing neoplasm composed of myofibroblastic and fibroblastic spindle cells with an infiltrate of plasma cells, lymphocytes, and/or eosinophils.",
  },
  {
    name: "Low-grade myofibroblastic sarcoma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients typically present with an enlarging mass.",
      "Pain and associated symptoms are rare.",
      "Radiologically, the tumors show destructive growth.",
    ],
    criteria: [
      "Essential: infiltrative cellular fascicles of myofibroblastic spindle cells; at least focal nuclear atypia; variable SMA and/or desmin expression.",
    ],
    histology: [
      "Tumors are diffusely infiltrative, often growing between skeletal muscle fibers, and typically comprise cellular, loosely fascicular, or storiform proliferations of spindle cells with elongated vesicular nuclei, small pinpoint nucleoli, and poorly defined and palely eosinophilic cytoplasm, in a collagenous stroma.",
      "Rarely, neoplasms are hypocellular, with extensive collagenous/hyalinized matrix.",
      "LGMS can mimic benign or intermediate myofibroblastic neoplasms (e. g. nodular fasciitis or fibromatosis), and although the cells of LGMS can be bland in areas, there is at least focal atypia (typically mild to moderate) with enlarged, hyperchromatic, irregular nuclei.",
      "Mitotic activity is typically low, and necrosis is infrequent.",
    ],
    ihc: [
      "Tumors express SMA at least focally (frequently with subplasmalemmal accentuation) and calponin.",
      "Some express desmin; most lack h-caldesmon.",
      "About 30% express nuclear β-catenin.",
    ],
    molecular: ["No recurrent molecular alterations have been described."],
    differential: [],
    summary:
      "Low-grade myofibroblastic sarcoma (LGMS) is a rarely metastasizing tumor of cells with myofibroblastic differentiation, typically with mild to moderate atypia, that has a predilection for head and neck sites in childhood.",
  },
  {
    name: "Fibrous histiocytoma",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Cutaneous FHs (dermatofibromas) are elevated or pedunculated red-brown or blue-black lesions measuring < 10 mm to a few centimetres in diameter.",
      "Rarely, they may form a depressed area in the skin (atrophic dermatofibroma).",
      "Deep FH manifests as a slow-growing, painless mass.",
    ],
    criteria: [
      "Desirable: for epithelioid FH: demonstration of ALK overexpression by immunohistochemistry or of ALK gene rearrangements by FISH (in selected cases).",
    ],
    histology: [
      "Cutaneous FH (dermatofibroma) is composed of short spindle cells arranged in a haphazard manner.",
      "Tumor cellularity is often higher in the center and reduced in the periphery, where the tumor interdigitates with dermal collagen (collagen trapping).",
      "Variable numbers of foamy histiocytes, multinucleated (including Touton) giant cells, and chronic inflammatory cells may be present.",
      "Dermatofibroma is mostly centerd in the dermis, but minimal penetration of the subcutis may be seen.",
    ],
    ihc: [
      "A subset of tumors express SMA and desmin, whereas CD34 (often patchy and at the periphery of the tumor) is seen in 5% of cases.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Fibrous histiocytoma (FH) is a neoplasm composed of fibroblastic and histiocytic cells arranged in sheets or short fascicles, often accompanied by a varying number of inflammatory cells, foam cells, and siderophages.",
  },
  {
    name: "Plexiform fibrohistiocytic tumor",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with PFHT present with a slow-growing tumor or plaque measuring about 25 mm (range: 5–80 mm).",
      "PFHT shows a wide age range, with a predilection for children and young adults (mean age: ~15 years, range: 1–77 years); 50–70% of cases occur in patients aged < 20 years.",
      "There is a slight female predominance.",
    ],
    criteria: [
      "Essential: nodules of histiocytoid cells and often osteoclastic-like giant cells; fascicles of (myo)fibroblastic spindle cells; plexiform architecture.",
    ],
    histology: [
      "PFHT is localized to the dermal–subcutaneous junction, with infiltration of subcutaneous adipose tissue and skeletal muscle.",
      "The tumor is characterized by a plexiform or multinodular arrangement of nodules of histiocytoid cells with a variable number of admixed multinucleated, osteoclastic-like giant cells, connected by fascicles of spindled fibroblastic/myofibroblastic cells.",
      "Other histological changes include chronic inflammation, metaplastic bone, hemorrhage, and hemosiderin deposition.",
      "Mild to moderate cytological atypia may be present; marked pleomorphism is rare.",
    ],
    ihc: ["SMA is expressed in the (myo)fibroblastic component."],
    molecular: [],
    differential: [
      "Those tumors with an overabundance of the (myo)fibroblastic component (e. g. fibroblastic PFHT) may mimic fibromatosis, the recently described plexiform myofibroblastoma , plexiform neurofibroma, and fibrous hamartoma of infancy.",
      "A prominent fibrohistiocytic pattern may be reminiscent of dermatofibroma, which lacks the plexiform pattern.",
    ],
    summary:
      "Plexiform fibrohistiocytic tumor (PFHT) is a rare dermal and subcutaneous neoplasm composed of biphasic nodules of histiocytoid cells and spindled myofibroblasts arranged in a plexiform architecture.",
  },
  {
    name: "Tenosynovial giant cell tumor",
    group: "Fibroblastic and Myofibroblastic Tumors",
    clinical: [
      "Patients with these tumors generally present with swelling and pain, as well as a reduced range of motion in intra-articular disease or a soft tissue mass in extra-articular disease.",
      "Radiographically, most tumors appear as poorly defined periarticular masses.",
      "On MRI, these tumors show decreased signal intensity in both T1- and T2-weighted images, with artefacts from hemosiderin deposition.",
    ],
    criteria: [
      "Essential: an intra- or extra-articular location; varying proportions of small histiocytic cells, large amphophilic cells, foam cells, and multinucleated giant cells.",
      "Desirable: demonstration of CSF1 rearrangement (in selected cases).",
    ],
    histology: [
      "The microscopic appearance of tenosynovial giant cell tumors is variable and depends on the proportions of mononuclear cells, multinucleated giant cells, foamy macrophages, inflammatory cells, and hemosiderin, as well as the degree of collagenization of the stroma.",
      "Two principal cell types are identified within the mononuclear component: small histiocyte-like cells with pale cytoplasm and round or reniform nuclei, and larger epithelioid cells with amphophilic cytoplasm and rounded vesicular nuclei.",
      "The larger cells often contain a peripheral rim of hemosiderin granules.",
      "Osteoclast-like giant cells are less common in the diffuse form than in the localized form, and they may be absent or extremely rare in as many as 20% of cases.",
    ],
    ihc: [
      "The larger mononuclear cells express clusterin, and in 45–80% of cases a small subset of these cells stain for desmin, which highlights their dendritic processes.",
      "The smaller, histiocyte-like cells are positive for CD68, CD163, and CD45.",
    ],
    molecular: [],
    differential: [
      "Correlation of histological features with immunohistochemistry and (in selected cases) molecular characterization can help in the distinction of tenosynovial giant cell tumor from juvenile xanthogranuloma (the latter of which has prominent xanthomatous cells and eosinophils, factor XIIIa-positive); giant cell tumor of soft tissue (absence of clefts and presence of metaplastic bone formation); soft tissue aneurysmal bone cyst (desmin-negative, USP6 fusion); and tendon sheath fibroma (absence of mononuclear histiocytoid and epithelioid cells).",
    ],
    summary:
      "The term “tenosynovial giant cell tumor” encompasses a group of lesions most often arising from the synovium of joints, bursae, and tendon sheaths and showing synovial differentiation.",
  },
  {
    name: "Capillary malformations",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "NS comes to clinical attention at birth as one or more pink to red macules that fade with time; if it persists, it is called a CM.",
      "Those in the central forehead, cervical, and lumbosacral regions may be associated with underlying abnormalities of the CNS or spine.",
      "The best-known CM is the facial port-wine stain, which manifests usually unilaterally in one or more trigeminal sensory dermatomes and is sometimes accompanied by overgrowth of adjacent mucosa, soft tissue, and bone.",
    ],
    criteria: [
      "Essential: dilated capillaries and/or postcapillary venules in an appropriate clinical setting.",
      "Desirable: detection of alterations in GNAQ, PIK3CA, and occasionally other genes is helpful in selected cases.",
    ],
    histology: [
      "Involved skin shows dispersed small channels with the appearance of dilated capillaries, postcapillary venules, and sometimes also small veins.",
      "At a young age, in the classic facial port-wine stain, only minimal vascular changes are present, but over time in some patients, channels become larger, with thicker (mostly fibrous) walls, and are accompanied by stromal fibrosis and appendageal hyperplasia.",
      "Cutaneous stains in lymphatic, venous, or lymphatic-venous malformations consist of dilated capillaries and/or postcapillary venules.",
    ],
    ihc: [],
    molecular: [
      "GNAQ or PIK3CA mutations are the most commonly encountered findings.",
    ],
    differential: [],
    summary:
      "A capillary malformation (CM) is a defect in vasculogenesis resulting in the dilatation of cutaneous capillaries and/or postcapillary venules, affecting the skin and mucosa with frequent extension to the hypodermis and occasionally to deeper structures.",
  },
  {
    name: "Venous malformations",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "CVM is a soft, compressible mass, frequently with a cutaneous bluish blush, involving the subcutaneous fat and (often) the dermis and underlying soft tissue.",
      "BRBNS manifests as multiple raised blue papules that increase in number over time; rarely, a congenital large mass may additionally be present.",
      "GVM is single or multiple, nodular or plaque-like, and pink to bluish-purple.",
    ],
    criteria: [
      "Essential: for CVM: dysmorphic venous channels; for BRBNS: dysmorphic venous channels; for VVM: predominant capillary-type channels with focal or diffuse endothelial immunopositivity for GLUT1 and focal immunopositivity for GLUT1 and D2-40.",
      "Desirable: for CVM: somatic TEK or PIK3CA mutation; for BRBNS: somatic TEK mutation; for VVM: somatic MAP2K1 mutation.",
    ],
    histology: [
      "In CVM, abnormal venous channels vary in number, caliber, shape, and muscularization; they are often anastomotic, and they contain organizing thrombi.",
      "BRBNS typically has closely apposed, small, abnormal and often spongiform veins and organizing thrombi.",
      "VVM has dispersed or clustered channels with the morphology of large capillaries or venules involving the dermis and hypodermis; rarely, it is predominantly or wholly restricted to the hypodermis.",
      "In VVM the endothelium is focally or diffusely immunopositive for GLUT1 and focally immunopositive for D2-40 and PROX1.",
    ],
    ihc: [],
    molecular: [
      "In certain cases, demonstration of mutations in TEK, PIK3CA, or MAP2K1 may be useful for confirming the type of malformation.",
    ],
    differential: [],
    summary:
      "Venous malformations are malformed and/or excessive venous channels of any caliber, resulting from an error in vasculogenesis.",
  },
  {
    name: "Arteriovenous malformations",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Patients with AVM commonly present with a warm, red lesion, which may be complicated by pain, ulceration, and bleeding.",
      "Significant arteriovenous shunting can produce high-output cardiac failure.",
      "Patients with PWS present with a warm overgrown extremity and a variable capillary stain.",
    ],
    criteria: [
      "Sporadic AVM Essential: malformed arteries and veins and an increase in a microvascular component; correlation with supportive clinical and imaging features.",
      "Desirable: demonstration of somatic MAP2K1 mutations.",
      "AVM in PWS, CM-AVM, and HHT Essential: a diffuse minimal enlargement of small arteries, capillaries, venules, and small veins.",
      "Desirable: for PWS: demonstration of germline and somatic mutations in RASA1 or EPHB4; for HHT: demonstration of germline mutations in ENG, ACVRL1, GDF2, or SMAD4, or genomic involvement of 5q31 or 7p14.",
    ],
    histology: [
      "AVMs vary in appearance, but important features are disproportionately large arteries and veins, and vessels that often appear indeterminate in lineage.",
      "Arteries show focal dissolution of their internal elastic lamina and neointimal cushions; veins show thickened walls with neointimal hyperplasia, although some may have thinned fibrous walls.",
      "There is a generalized increase in small vessels whose appearance approximates that of small arteries, capillaries, and veins.",
      "Many AVMs have small foci or lobules of small vessels of mostly capillary caliber, which can mimic lesions such as lobular capillary hemangioma (pyogenic granuloma), infantile or congenital hemangioma, or the pseudokaposiform proliferation associated with Stewart–Bluefarb syndrome.",
    ],
    ihc: [],
    molecular: [
      "AVM has somatic MAP2K1, KRAS, HRAS, or BRAF mutations.",
      "PWS has germline and/or somatic mutations in RASA1 or EPHB4.",
    ],
    differential: [],
    summary:
      "An arteriovenous malformation (AVM) is an error in morphogenesis resulting in arteriovenous communications and malformed arteries, veins, and capillaries.",
  },
  {
    name: "Intramuscular vascular anomalies",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Localized discomfort is a prime symptom, particularly with FAVA.",
      "VM and FAVA have slow flow, whereas IFVA, AVM, and PHOST demonstrate fast flow on imaging.",
      "Multifocal small capillary stains are seen anywhere in capillary malformation–arteriovenous malformation disorders (CM-AVM1 and CM-AVM2), which also frequently manifest as Parkes Weber syndrome.",
    ],
    criteria: [
      "VM Essential: abnormally formed venous channels including a spongiform pattern.",
      "Desirable: demonstration of somatic TEK or PIK3CA mutation.",
      "FAVA Essential: nodular aggregates of back-to-back thin-walled venous channels; abnormal veins; abundant fibroadipose tissue.",
      "Desirable: demonstration of somatic PIK3CA mutation.",
    ],
    histology: [
      "VM is an admixture of spongiform, variably sized, dysmorphic venous channels and minimal interposed skeletal muscle or fibroadipose tissue.",
      "FAVA has abundant fibroadipose tissue with nodular aggregates of back-to-back thin-walled venous channels sometimes seen as diverticula of larger dysmorphic veins.",
      "Nerves are often encased by fibrous tissue and infiltrated by abnormal venous channels.",
      "Lymphoid aggregates are common and some lesions have metaplastic bone, small foci of dysmorphic lymphatic channels, and clusters of vessels of indeterminate lineage with coiling, thick walls, concentric muscular layers, and tiny lumina.",
    ],
    ihc: [],
    molecular: [
      "Identification of somatic mutations (TEK, PIK3CA, MAP2K1, KRAS) and germline and/or somatic mutations (RASA1, EPHB4, PTEN) may be helpful in diagnosing some patients.",
    ],
    differential: [],
    summary:
      "Intramuscular vascular anomalies are composed of abnormal capillary and venous channels and/or of channels with arteriovenous communications, sometimes extending beyond the muscular compartment.",
  },
  {
    name: "Lymphatic anomalies",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "CLM usually manifests as a localized or regional swelling, sometimes with cutaneous vesicles, or as one component of a combined vascular anomaly or syndrome.",
      "GLA often manifests as serous cavity effusions; thoracic duct abnormalities may be present.",
      "Patients with CCLA may present with serous cavity effusions, enteric protein loss, and/or organ dysfunction, and dysmotility or obstruction of major lymphatic channels including the thoracic duct may be seen.",
    ],
    criteria: [
      "Essential: malformed and usually excessive lymphatic channels; correlation with clinical features and imaging.",
      "Desirable: immunopositivity for D2-40 and PROX1; molecular evidence of various gene alterations associated with lymphatic malformations, particularly in KLA if biopsy samples are not diagnostic.",
    ],
    histology: [
      "CLM, GLA, CCLA, and KLA display malformed lymphatic channels (often excessive in number) with irregularly muscularized walls.",
      "Large channels or cysts usually have predominantly fibrous walls with occasional strands of smooth muscle.",
      "The lymphatic endothelium is flat without atypia and is immunopositive for D2-40, PROX1, CD31, ERG, and FLI1.",
      "Endothelial cells often display only focal immunopositivity for CD34 and faint or focal immunopositivity for D2-40 in larger channels or cysts.",
    ],
    ihc: [
      "The lymphatic endothelium is flat without atypia and is immunopositive for D2-40, PROX1, CD31, ERG, and FLI1.",
      "Endothelial cells often display only focal immunopositivity for CD34 and faint or focal immunopositivity for D2-40 in larger channels or cysts.",
    ],
    molecular: [
      "Identification of mutations, most commonly in PIK3CA or NRAS, may help to assess the diagnosis.",
    ],
    differential: [],
    summary:
      "Lymphatic anomalies are localized or generalized malformations of the lymphatic system.",
  },
  {
    name: "Congenital hemangioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "RICH with fetal involution is virtually regressed by birth, leaving only a cutaneous stain.",
      "RICH, PICH, and NICH are well-circumscribed lesions usually measuring several centimetres in diameter.",
      "They are raised and pink, blue-red, or purple, with superficial telangiectasia and sometimes a pale halo.",
    ],
    criteria: [
      "Essential: a lobular capillary lesion in RICH, PICH, and NICH, supported by clinical and imaging features.",
      "Desirable: detection of GNAQ or GNA11 mutations.",
    ],
    histology: [
      "All congenital hemangiomas involve skin and hypodermis.",
      "In RICH with fetal involution, a few small clusters of capillaries, enlarged dysmorphic veins, arteries with intimal fibrosis, and dilated lymphatic channels are present within a fibrotic dermis and hypodermis.",
      "At an early age, RICH, PICH, and NICH are usually similar, with lobules of capillaries with round or stellate lumina, and bland endothelial cells and pericytes.",
      "In RICH, regression is accompanied by smaller lobules; apparent loss of lobules; dysmorphic veins; extensive fibrous stroma; and occasionally hemosiderin, calcifications, and cystic spaces.",
    ],
    ihc: [],
    molecular: ["Most RICHs and NICHs have GNAQ or GNA11 mutations."],
    differential: [],
    summary:
      "Congenital hemangiomas are benign vascular tumors that are fully grown at birth, with the exception of a subgroup having undergone involution during fetal life.",
  },
  {
    name: "Infantile hemangioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "IH affects approximately 5% of infants, usually manifests in the newborn period, reaches its apogee at about 10 months of age, and gradually involutes over several years.",
      "IH may be solitary, segmental, indeterminate, or multifocal.",
      "The most common appearance is a solitary bright-red raised tumor; less commonly, it is a patch-like lesion.",
    ],
    criteria: [
      "Essential: lobular capillary growth with endothelial cytoplasmic immunoreactivity for GLUT1.",
    ],
    histology: [
      "IH in the proliferative phase is a lobular capillary lesion involving the dermis, hypodermis, or both.",
      "The closely approximated capillaries have neatly configured round and (at times) inconspicuous lumina, and the endothelium and pericytes are uniform, plump without atypia, and mitotically active.",
      "Extension into the perineurium and nerves themselves is sometimes seen.",
      "Involution brings about larger lumina, a flattened endothelium, a thickened basement membrane, karyorrhectic forms, and intervascular fibrous stroma.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Infantile hemangioma (IH) is the most common vascular tumor of infancy and is characterized by a rapid proliferative phase during infancy followed by gradual involution.",
  },
  {
    name: "hemangioma of placenta",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Placental hemangiomas occur more frequently in patients with multiple gestations; maternal age ≥ 30 years; and with maternal hypertension, pre-eclampsia, or diabetes mellitus.",
      "hemangioma of the placenta is the most common placental tumor.",
      "It is often found incidentally, occurring in as many as 1% of placentas.",
    ],
    criteria: [
      "Essential: discrete lesion(s); well circumscribed; subchorionic or peripheral location; bulging above the fetal surface; numerous capillaries in a stroma surrounded by trophoblastic cells.",
    ],
    histology: [
      "Placental hemangiomas arise from stem villi, and usually a layer of trophoblast is seen surrounding the nodule.",
      "The angiomatous pattern is the most common, composed of numerous capillaries embedded in a fibroconnective stroma composed of fibroblasts, macrophages, and scant collagenized tissue , resembling cutaneous capillary malformation.",
      "Cellular and degenerative subtypes have been described.",
      "Degenerative changes, such as necrosis, hyalinization, hemosiderin, and calcification, may be seen.",
    ],
    ihc: [
      "The endothelial lining stains for usual vascular markers such as CD31, CD34, GLUT1, and von Willebrand factor (factor VIII–related antigen).",
    ],
    molecular: [],
    differential: [],
    summary:
      "hemangioma of placenta is a benign nodular lesion composed of numerous capillaries.",
  },
  {
    name: "Lobular capillary hemangioma (pyogenic granuloma)",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Most patients with LCH present with rapidly growing, solitary, erythematous, dome-shaped or pedunculated papules that bleed easily.",
      "Lesions can arise in port-wine stains and other vascular malformations.",
      "A congenital form, manifesting as multiple cutaneous and visceral lesions, has been reported.",
    ],
    criteria: ["Essential: lobules of capillary vessels; edematous stroma."],
    histology: [
      "LCH is an exophytic lesion with frequent ulceration, crusting, and neutrophilic inflammation that is usually restricted to the ulcerated area.",
      "An epidermal collarette is present in most cases.",
      "LCH is composed of lobules of capillaries in an edematous stroma.",
      "Focal epithelioid change may be seen.",
    ],
    ihc: [
      "Vessels are lined by bland endothelial cells that are positive for CD31, CD34, and ERG.",
      "Capillaries are surrounded by a layer of SMA-positive pericytes.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Lobular capillary hemangioma (LCH, also known as pyogenic granuloma) is a common acquired vascular neoplasm of the skin and mucosae composed of lobules of capillary blood vessels.",
  },
  {
    name: "Epithelioid hemangioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Patients with cutaneous tumors present with one or sometimes multiple erythematous to violaceous papule(s) or nodule(s).",
      "In children, the lower extremities are commonly involved and may be multifocal.",
      "In children, the mean patient age is 14 years (range: 2–18 years).",
    ],
    criteria: [
      "Essential: well-formed vessels lined by epithelioid endothelial cells with abundant eosinophilic cytoplasm.",
      "Desirable: variable eosinophilic infiltrate; immunohistochemical expression of panendothelial markers and FOSB; FOS or FOSB rearrangement in selected cases.",
    ],
    histology: [
      "Epithelioid hemangioma is composed of a lobular proliferation of well-formed blood vessels lined by endothelial cells with enlarged vesicular nuclei, small nucleoli, and abundant eosinophilic cytoplasm.",
      "Intracytoplasmic vacuoles may be present.",
      "There is no multilayering, and vessels have a pericyte layer.",
      "The stroma is variably edematous and may have a lymphoplasmacytic infiltrate with eosinophils.",
    ],
    ihc: [
      "They express CD31, CD34, ERG, and frequently FOSB (in ~50% of cases).",
      "EMA and keratin immunoreactivity is common.",
    ],
    molecular: [
      "Identification of FOS or FOSB rearrangement is useful in a subset.",
    ],
    differential: [],
    summary:
      "Epithelioid hemangioma is a benign tumor of well-formed blood vessels lined by epithelioid endothelial cells with abundant cytoplasm and a variable eosinophilic infiltrate.",
  },
  {
    name: "Tufted angioma and kaposiform hemangioendothelioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Patients with TA present with a pink or red-purple cutaneous macule or infiltrated plaque, whereas those with KHE present with a poorly defined, large, bulging, indurated purple-red tumor.",
      "Both may be painful and/or associated with hypertrichosis or hyperhidrosis.",
      "KMP usually occurs in the setting of large congenital or early infantile TA/KHE lesions and is characterized by profound thrombocytopenia due to intratumoral platelet trapping, frequently accompanied by petechiae, ecchymoses, and a sudden increase in tumor size.",
    ],
    criteria: [
      "Essential: for TA: a cannonball-like distribution of multiple small and discrete intradermal lobules of tightly packed small capillaries; for KHE: poorly defined coalescing vascular nodules containing fascicles of plump spindled endothelial cells.",
      "Desirable: for TA and KHE: a background of variably dilated lymphatic vessels; dual positivity of spindled endothelial cells for panendothelial and lymphatic markers; presence of platelet-rich microthrombi.",
    ],
    histology: [
      "Classic TA histology shows multiple small, well-circumscribed vascular tufts dispersed in a cannonball-like fashion within the dermis, sometimes extending into the subcutis.",
      "The tufts are composed of closely packed capillaries with compressed lumina, occasionally accompanied by subtle fascicles of delicate spindled endothelial cells.",
      "Dilated thin-walled lymphatic vessels focally form crescentic clefts at the tuft periphery.",
      "Classic KHE histology includes the presence of vascular tufts equivalent to those of TA but accompanied by larger, less-defined, coalescing nodules composed of fascicles of spindled endothelial cells forming elongate slit-like lumina containing erythrocytes and curving around epithelioid, pericyte-rich nodules with central microthrombi.",
    ],
    ihc: [
      "TA/KHE endothelial cells are strongly positive for the panendothelial markers CD31, CD34, and ERG, and the spindled forms are also positive for lymphatic markers including podoplanin, LYVE1, and PROX1.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Tufted angioma (TA) and kaposiform hemangioendothelioma (KHE) are related (probably biologically synonymous) vascular tumors, usually pediatric in presentation.",
  },
  {
    name: "Papillary intralymphatic angioendothelioma and retiform hemangioendothelioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "PILA and RHE manifest as slow-growing, cutaneous, pink-violaceous nodules or plaques.",
      "With both PILA and RHE, a concurrent lymphatic malformation (lymphangioma) or lymphedema may be observed.",
      "With < 50 cases of each reported, PILA occurs predominantly in children and young adults, whereas RHE occurs mainly in adolescents and young adults.",
    ],
    criteria: [
      "Essential: for PILA: poorly defined dissecting lymphatic spaces with intraluminal papillary columnar cell tufting, with no atypia or mitoses; the lymphatic phenotype is evidenced by morphological intraluminal proteinaceous fluid and stromal and intraluminal lymphocytes or by VEGFR3 or D2-40 immunoreactivity; for RHE: retiform arborizing vascular channels lined by hobnail endothelial cells, with no atypia or…",
    ],
    histology: [
      "PILA is composed of columnar, matchstick-like endothelial cells.",
      "Papillary tufts of these hobnail endothelial cells surrounding hyaline cores protrude into the lumen of dilated lymphatic spaces; lymphatics may be slit-like with intraluminal glomeruloid endothelial proliferations.",
      "Proteinaceous fluid and intraluminal and stromal lymphocytes support the lymphatic phenotype and association.",
      "There should not be significant endothelial atypia or mitoses; such cases would instead be classified as angiosarcoma.",
    ],
    ihc: [
      "Both PILA and RHE stain for lymphatic markers (PILA stains for podoplanin [recognized by D2-40], PROX1, VEGFR3, or VEGFR2; RHE stains for PROX1 and occasionally D2-40) as well as endothelial markers (CD31, CD34, and ERG).",
      "SMA should be positive around the larger lymphatic spaces and may be absent within the papillary tufting.",
      "The presence of SMA also separates these entities from angiosarcoma.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Papillary intralymphatic angioendothelioma (PILA) and retiform hemangioendothelioma (RHE) are locally aggressive, rarely metastasizing lymphatic tumors with hobnail endothelia, which may represent a spectrum rather than different types.",
  },
  {
    name: "Pseudomyogenic hemangioendothelioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "The typical presentation is painful or painless cutaneous and subcutaneous nodules that may be multifocal in approximately 60% of patients.",
      "Multiple tissue planes are usually affected, with 50% of patients having intramuscular lesions and about 20% having lytic bony lesions.",
      "The tumors are highly avid on FDG-PET, a technique used to identify multifocal lesions.",
    ],
    criteria: [
      "Essential: plump spindle or epithelioid cells with vesicular nuclei and eosinophilic cytoplasm; fascicular or sheet-like growth; expression of ERG, FOSB, and keratins (AE1/AE3).",
      "Desirable: demonstration of FOSB fusion.",
    ],
    histology: [
      "The tumor is composed of sheets and fascicles of plump spindle cells with abundant bright eosinophilic cytoplasm resembling rhabdomyoblasts (hence the term “pseudomyogenic”).",
      "A minor component of epithelioid cells is present and rarely predominates.",
      "Intraosseous tumors are often dominated by epithelioid cells with cytoplasmic eosinophilia, associated with reactive woven bone, hemorrhage, and osteoclast giant cell reaction.",
      "The tumor cells contain vesicular nuclei with small nucleoli.",
    ],
    ihc: [
      "The tumor cells show diffuse expression of keratins (AE1/AE3) and endothelial markers (FLI1 and ERG).",
      "CD31 is positive, while CD34 is negative.",
      "FOSB immunohistochemistry shows diffuse nuclear staining.",
    ],
    molecular: [
      "Detection of FOSB rearrangements may be helpful in the diagnosis.",
    ],
    differential: [],
    summary:
      "Pseudomyogenic hemangioendothelioma is a rarely metastasizing endothelial neoplasm occurring in adolescents and young adults, with a propensity for occurring as multiple discontiguous nodules in different tissue planes, mimicking myoid neoplasms and epithelioid sarcoma.",
  },
  {
    name: "Kaposi sarcoma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "In children, KS may be disseminated and rapidly progressive.",
      "Clinical manifestations in children differ from those seen in adults.",
      "Iatrogenic/transplantation-related KS is variable, with lymph node, visceral, and mucocutaneous involvement, as well as cytopenia and fast progression.",
    ],
    criteria: [
      "Essential: appropriate clinical context; bland spindle cell proliferation containing small slit-like vessels lined by mildly atypical cells; extravasated erythrocytes; detection of nuclear KSHV/HHV8 expression by immunohistochemistry or PCR.",
    ],
    histology: [
      "KS lesions start with a proliferation of spindle cells with no or mild atypia, where lumen formation is not quite evident; then slit-like spaces become more obvious, with intraluminal erythrocytes, sparse lymphocytes, plasma cells, and hemosiderin.",
      "Spindle cells form short fascicles in between vessels.",
      "Central areas with necrosis are rich in tiny vessels, erythrocytes, hyaline globules, and eosinophilic debris.",
      "Vascular visceral dissemination reaches different organs, forming multiple enlarging unencapsulated nodules.",
    ],
    ihc: [
      "Immunohistochemically, endothelial and spindle cells express CD31, CD34, ERG, and lymphatic markers (podoplanin, LYVE1).",
    ],
    molecular: [
      "KSHV/HHV8 detection by PCR is a well-established approach for the confirmation of viral infection.",
    ],
    differential: [
      "EBV-associated smooth muscle tumors occur in the context of organ transplantation or immunodeficiency.",
      "They can develop in any organ, at single or multiple sites, and are EBV-positive by in situ hybridization for EBV-encoded small RNA (EBER).",
      "Bacillary angiomatosis often occurs in HIV-positive patients.",
    ],
    summary:
      "Kaposi sarcoma (KS) is an aggressive angiogenic tumor associated with the herpesvirus KSHV/HHV8.",
  },
  {
    name: "Epithelioid hemangioendothelioma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "Presentation varies depending on location.",
      "Patients with soft tissue EHE usually present with a painful mass.",
      "A high incidence of multiorgan disease is reported in children.",
    ],
    criteria: [
      "Essential: cords and nests of epithelioid cells in a myxohyaline stroma; immunoreactivity for endothelial markers, CAMTA1, or TFE3.",
      "Desirable: molecular confirmation of WWTR1::CAMTA1 or YAP1::TFE3.",
    ],
    histology: [
      "EHE is an infiltrative tumor composed of cords and nests of bland epithelioid tumor cells with round nuclei, eosinophilic cytoplasm, and variable intracytoplasmic vacuoles in a myxohyaline stroma.",
      "Angiocentric growth, which can be occlusive, is seen in some cases.",
      "A small subset of tumors have nuclear atypia and more mitotic activity.",
      "Immunoreactivity for cytokeratin is seen in a minority.",
    ],
    ihc: [
      "By immunohistochemistry, they are typically positive for ERG, CD31, and CAMTA1, and they are variably positive for keratins, SMA, CD34, and podoplanin.",
      "Immunoreactivity for cytokeratin is seen in a minority.",
    ],
    molecular: ["Identification of the WWTR1::CAMTA1 or YAP1::TFE3 fusions."],
    differential: [],
    summary:
      "Epithelioid hemangioendothelioma (EHE) is a malignant vascular neoplasm composed of epithelioid endothelial cells in a myxohyaline stroma.",
  },
  {
    name: "Angiosarcoma",
    group: "Vascular Tumors and Malformations",
    clinical: [
      "The clinical presentation is variable, depending on location.",
      "Cutaneous pediatric angiosarcomas tend to be unifocal, rapidly enlarging masses that can ulcerate, although some are multifocal.",
      "Pediatric angiosarcoma is extremely rare.",
    ],
    criteria: [
      "Essential: a vasoformative or sheet-like growth pattern; nuclear atypia; mitotic activity; immunoreactivity for CD31 and ERG.",
    ],
    histology: [
      "Angiosarcomas are infiltrative lesions, variably composed of anastomosing vessels or sheets of epithelioid to spindled cells.",
      "Vasoformative channels are usually scarce in pediatric cases and often exhibit multilayering of endothelial cells and papillary projections.",
      "Most have high-grade nuclear features; well-differentiated tumors may have small hyperchromatic nuclei.",
      "Epithelioid angiosarcoma often has a sheet-like growth pattern, with atypical cells exhibiting vesicular nuclei and abundant cytoplasm.",
    ],
    ihc: [
      "Most are immunoreactive for CD31 and ERG and variably positive for CD34 and GLUT1 (50%).",
      "Epithelioid angiosarcoma may be positive for EMA and cytokeratin.",
    ],
    molecular: [
      "Detection of MYC amplification in lymphedema- and radiation-associated angiosarcomas may help for the diagnosis.",
    ],
    differential: [],
    summary:
      "Angiosarcoma is an aggressive malignant vascular tumor showing morphological and immunohistochemical endothelial differentiation.",
  },
  {
    name: "Myofibroma and myopericytoma",
    group: "Perivascular and Smooth Muscle Tumors",
    clinical: [
      "Patients with MF or MP present with one or more painless, superficial or deep, often reddish nodule(s).",
      "MF is the most frequent fibroblastic tumor in children and adolescents.",
      "MF is diagnosed in patients of all ages, from birth to adulthood, but most frequently occurs within the first 2 years of life.",
    ],
    criteria: [
      "Essential: for MF: a biphasic pattern with myoid cells forming fascicles and more primitive cells associated with vascular structures; no atypia; for MP: condensation of tumor cells around numerous vessels.",
      "Desirable: for MF: identification of PDGFRB mutation in challenging cases, and SRF rearrangement in cellular cases; for MP: identification of PDGFRB mutation in challenging cases.",
    ],
    histology: [
      "MF has a nodular growth pattern and is characterized by a biphasic zonation appearance associated with a biphasic cell population.",
      "Some areas consist of fascicles and whorls of spindle-shaped cells with abundant eosinophilic cytoplasm and elongated nuclei with fine chromatin; these areas alternate with areas showing a hemangiopericytoma-like vascular pattern composed of more primitive, round to polygonal cells, with small amounts of amphophilic cytoplasm, hyperchromatic nuclei, and indistinct cell borders.",
      "These cells often form nodules bulging into vascular lumina.",
      "There is no marked atypia, and the rate of mitosis is variable.",
    ],
    ihc: [
      "MF and MP cells express SMA and may stain for desmin and h-caldesmon.",
    ],
    molecular: [
      "Identification of SRF rearrangement is helpful in the diagnosis of cellular MF.",
    ],
    differential: [],
    summary:
      "Myofibroma (MF) and myopericytoma (MP) are spindle cell neoplasms with perivascular myoid features.",
  },
  {
    name: "Glomus tumor and glomuvenous malformation",
    group: "Perivascular and Smooth Muscle Tumors",
    clinical: [
      "cGTs are benign, but well-documented cases of mGT have been reported in adults and (rarely) in children.",
      "Cutaneous cGTs manifest as single small blue-red nodules with paroxysmal pain, which is elicited by cold exposure or even by minor tactile stimulation.",
      "In deeply located tumors, symptoms are related to compression of surrounding structures.",
    ],
    criteria: [
      "Essential: for cGT: a solid proliferation of monomorphic glomus cells; for GVM: dilated vein-like channels surrounded by one or more layers of glomus cells.",
      "Desirable: expression of SMA, MSA, and h-caldesmon by the glomus cells; pericellular collagen IV deposition.",
    ],
    histology: [
      "cGTs are composed of sheets, nests, and trabeculae of monomorphic glomus cells in a hyalinized or myxoid stroma with branching capillary-sized vessels.",
      "Symplastic GTs display prominent nuclear pleomorphism, probably representing a degenerative phenomenon, but have very low mitotic activity. mGTs can be either spindle cell type or round cell type.",
      "Features frequently seen in mGT include atypical mitotic figures, increased mitotic activity, high cellularity, necrosis, infiltrative growth, and moderate to high nuclear grade.",
      "GVMs show vein-like dysplastic channels of variable size surrounded by one or more layers of glomus cells.",
    ],
    ihc: [
      "Glomus cells in cGTs and GVMs stain positively for α-SMA, MSA, h-caldesmon, and vimentin.",
    ],
    molecular: [
      "Most GTs are diagnosed by morphology and immunohistochemistry.",
      "GLMN mutations can be detected in the lesional tissue of GVMs.",
    ],
    differential: [],
    summary:
      "Glomus tumor (GT) is a mesenchymal neoplasm composed of cells resembling the perivascular modified smooth muscle cells of the normal glomus body.",
  },
  {
    name: "EBV-associated smooth muscle tumor",
    group: "Perivascular and Smooth Muscle Tumors",
    clinical: [
      "The symptoms are usually related to the site of involvement by the tumor: neurological symptoms in cases of intra-axial or extra-axial CNS tumors; abdominal pain caused by bleeding or obstruction in intestinal cases; and cyanosis or infection caused by obstruction in endobronchial cases.",
      "There is a slight female predominance.",
      "Three groups of EBV-SMT are recognized: HIV-associated, posttransplant (solid organs or hematopoietic stem cells), and congenital immunodeficiency–associated.",
    ],
    criteria: [
      "Essential: a tumor with smooth muscle differentiation; a clinical history of immunosuppression; positivity of EBER in situ hybridization or equivalent.",
    ],
    histology: [
      "The tumors show short interlacing fascicles of spindle cells with eosinophilic cytoplasm and blunt-ended nuclei.",
      "Areas containing more primitive round cells are frequent.",
      "Cellular atypia or necrotic foci (i. e. sarcoma-like features) may be seen, especially in HIV-related smooth muscle tumors.",
      "Intratumoral T lymphocytes are present.",
    ],
    ihc: [
      "Immunohistochemically, the spindle cells are diffusely positive for SMA and h-caldesmon.",
    ],
    molecular: [
      "Diagnosis is confirmed by EBER in situ hybridization or any other molecular analysis revealing EBV infection.",
    ],
    differential: [],
    summary:
      "EBV-associated smooth muscle tumors (EBV-SMTs) are spindle cell neoplasms that show smooth muscle differentiation and are associated with EBV infection, usually in the setting of immunosuppression.",
  },
  {
    name: "Rhabdomyoma",
    group: "Skeletal Muscle Tumors",
    clinical: [
      "A growing mass may cause proptosis, decreased vision, airway obstruction, or hoarseness.",
      "06 for a description of the subtypes listed above.",
      "Fetal rhabdomyomas occur at all ages, with two peaks (< 3 years and 60 years).",
    ],
    criteria: [
      "Essential: a well-circumscribed mass with mature rhabdomyoblasts lacking atypia or necrosis; mitotic activity may be present.",
    ],
    histology: [
      "The classic fetal (myxoid) type contains primitive spindle cells with indistinct cytoplasm arranged in irregular bundles within a myxoid background, interspersed with immature skeletal muscle fibers that resemble fetal myotubes.",
      "The intermediate fetal type (juvenile or cellular) shows greater cellularity, less myxoid stroma, and a wide spectrum of skeletal muscle differentiation including differentiated rhabdomyoblasts or ganglion-like rhabdomyoblasts.",
      "Mitoses can be relatively frequent (as many as 5 mitoses per 50 mm2), but tumors lack substantial nuclear atypia, infiltrative margins, atypical mitoses, and necrosis.",
      "Myogenin and MYOD1 are positive in primitive spindle cells and rhabdomyoblasts.",
    ],
    ihc: [
      "Tumor cells are positive for desmin, MSA, focal SMA, and occasional S100.",
      "Myogenin and MYOD1 are positive in primitive spindle cells and rhabdomyoblasts.",
    ],
    molecular: [
      "Fetal rhabdomyoma occurs in association with inherited or sporadic inactivating germline mutations in PTCH1.",
    ],
    differential: [],
    summary:
      "Extracardiac rhabdomyomas are benign mesenchymal tumors with skeletal muscle differentiation.",
  },
  {
    name: "Rhabdomyosarcomas",
    group: "Skeletal Muscle Tumors",
    clinical: [
      "Patients with ERMS often present with site-specific symptoms (e. g. orbital tumors result in proptosis; genitourinary tumors result in bladder obstruction).",
      "ARMS is highly aggressive, typically manifesting as a rapidly growing soft tissue mass with distant or locoregional metastases present at diagnosis in 25–30% of patients.",
      "Patients with ARMS may also present primarily with bone marrow involvement mimicking leukemia.",
    ],
    criteria: [
      "Essential: for ERMS: primitive spindle to round cell morphology with differentiating rhabdomyoblasts; heterogeneous nuclear staining for myogenin; for ARMS: monomorphic round cells; homogeneous strong nuclear staining for myogenin; presence of PAX3, PAX7, or FOXO1 rearrangement; for SCSRMS: purely spindled morphology with intersecting fascicles or admixed sclerosing patterns with round cells and abundant…",
      "Desirable (in selected cases): MYOD1 mutations or VGLL2::NCOA2 gene rearrangements in SCSRMS; diffuse nuclear staining for MYOD1 in SCSRMS.",
    ],
    histology: [
      "ERMS recapitulates embryonic skeletal muscle development with primitive mesenchymal cells in various stages of myogenesis.",
      "ERMS is variably cellular, ranging from stellate cells in an abundant myxoid stroma to sheets of poorly differentiated, densely packed cells with round to slightly angulated nuclei.",
      "ERMS may have a prominent spindle cell morphology, although foci of typical ERMS are usually present.",
      "Heterologous cartilage may be seen, particularly in tumors associated with DICER1 syndrome.",
    ],
    ihc: [
      "MYOD1-mutated SCSRMS may be spindled or sclerosing.",
      "For all rhabdomyosarcomas, skeletal muscle differentiation is confirmed by immunohistochemical expression of desmin, myogenin (MYF4), and/or MYOD1.",
      "ARMS with FOXO1 rearrangements shows strong diffuse nuclear staining for myogenin, whereas ERMS shows variable myogenin expression (10–80% of tumor nuclei).",
    ],
    molecular: [
      "PAX3::FOXO1 or PAX7::FOXO1 translocations are present in approximately 85% of morphological ARMS.",
      "L122R mutations or VGLL2::NCOA2 rearrangements.",
    ],
    differential: [],
    summary:
      "Rhabdomyosarcomas are a family of sarcomas with morphological and/or immunophenotypic evidence of skeletal muscle differentiation, comprising embryonal rhabdomyosarcoma (ERMS), alveolar rhabdomyosarcoma (ARMS), spindle cell / sclerosing rhabdomyosarcoma (SCSRMS), and pleomorphic rhabdomyosarcoma.",
  },
  {
    name: "Ectomesenchymoma",
    group: "Skeletal Muscle Tumors",
    clinical: [
      "Patients with ectomesenchymoma present with a deep or superficial soft tissue mass.",
      "Ectomesenchymoma has a predilection for infants or children aged < 5 years (range: birth to 15 years) and an M:F ratio of 1.",
      "Ectomesenchymoma appears most frequently in the pelvis, urogenital organs, and intra-abdominal or retroperitoneal soft tissue, but the head and neck, extremities, and mediastinum may be affected.",
    ],
    criteria: [
      "Essential: composite growth of histologically recognizable rhabdomyosarcomatous and neuronal/neuroblastic elements, which are evident by immunohistochemistry.",
    ],
    histology: [
      "The prototypical morphology is a combined tumor with areas resembling embryonal rhabdomyosarcoma and neuroectodermal elements.",
      "The latter cover the entire spectrum of neuroblastic phenotype, ranging from scattered ganglion cells to mature ganglioneuroma, intermediate ganglioneuroblastoma, and primitive neuroblastoma.",
      "The appearances of embryonal rhabdomyosarcoma can be botryoid , classic fascicular spindle cell with alternating myxoid/cellular areas , and the so-called dense pattern of primitive round cells.",
      "Rare cases originally diagnosed as rhabdomyosarcoma revealed a ganglioneuromatous component in residual tumor after chemotherapy.",
    ],
    ihc: [
      "There are correspondent immunophenotypic patterns of MSA, desmin, MYOD1, and myogenin expression in the rhabdomyosarcomatous area, and synaptophysin and chromogranin A staining in the neuroblastic components, with or without S100-positive Schwannian or satellite cells.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Ectomesenchymoma is an exceedingly rare multiphenotypic sarcoma composed of both mesenchymal and neuroectodermal components, and it mostly exhibits intermingled cells recapitulating rhabdomyosarcomatous and ganglionic/neuroblastic differentiation.",
  },
  {
    name: "Pediatric gastrointestinal stromal tumor",
    group: "Gastrointestinal Stromal Tumors",
    clinical: [
      "Unlike adults, children with GIST are seldom asymptomatic.",
      "The most common presentations include symptoms related to gastric mucosal ulceration (e. g. acute and chronic gastrointestinal bleeding, abdominal pain, an abdominal mass, and weight loss).",
      "Multifocal tumors may be seen at presentation.",
    ],
    criteria: [
      "Essential: an intramural, submucosal, or subserosal mass; epithelioid, spindle cell, or mixed morphology; KIT and/or DOG1 immunopositivity; SDHB loss in SDH-deficient GIST.",
      "Desirable: SDH mutations, SDHC epimutation, or (rarely) KIT mutations.",
    ],
    histology: [
      "Microscopically, SDH-deficient GISTs are characteristically organized in a multinodular architecture separated by bands of muscularis propria, creating a plexiform pattern of mural involvement.",
      "The tumor cells are usually epithelioid or mixed epithelioid and spindle cell; the rare KIT-mutant GISTs in children may show spindle cell morphology.",
      "Cytoplasmic vacuolation may be seen.",
      "Unlike in conventional GISTs, lymphovascular invasion and lymph node metastases are common.",
    ],
    ihc: [
      "Immunophenotypically, most show strong and diffuse expression of KIT (CD117), which appears as cytoplasmic, membrane-associated, or sometimes perinuclear dot-like staining.",
      "CD34 is also commonly expressed; however, the muscle markers SMA and desmin are only rarely expressed, as is S100.",
    ],
    molecular: [
      "Pediatric SDH-deficient GISTs lack the KIT and PDGFRA mutations associated with conventional GIST, as well as BRAF and NF1 mutations and other rare alterations.",
      "Molecular subtyping to distinguish between SDH-mutant or SDHC-epimutant tumors should be pursued; in the former category, patients with germline SDH-mutant tumors should be referred for cancer predisposition risk assessment and clinical management and surveillance considerations, whereas patients with SDHC-epimutant tumors need screening only for other Carney triad tumors.",
    ],
    differential: [],
    summary:
      "Gastrointestinal stromal tumor (GIST) is a mesenchymal neoplasm characterized by differentiation towards the interstitial cells of Cajal; most GISTs in children are succinate dehydrogenase (SDH)-deficient.",
  },
  {
    name: "Schwannoma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Schwannomas are slow-growing tumors, often manifesting as asymptomatic masses or incidental findings on imaging studies.",
      "Spinal schwannomas may elicit sensory or, less frequently, motor symptoms.",
      "Patients with vestibular schwannomas often present with hearing loss and vertigo.",
    ],
    criteria: [
      "Essential: classic schwannoma histopathology (e. g.",
      "Antoni A or Antoni B areas); extensive S100 or SOX10 expression.",
      "Desirable: Verocay bodies; hyalinized blood vessels; for epithelioid schwannoma: absence of lattice-like CD34 staining; loss of SMARCB1 (INI1) expression; for syndrome-associated schwannoma: a mosaic pattern of SMARCB1 (INI1) expression.",
    ],
    histology: [
      "Conventional schwannoma is usually an encapsulated spindle cell tumor that is composed nearly entirely of well-differentiated Schwann cells.",
      "Schwannomas have a broad morphological range.",
      "The large majority are biphasic tumors with compact areas (Antoni A tissue) showing occasional nuclear palisading (Verocay bodies), alternating with loosely arranged foci (Antoni B tissue).",
      "Antoni A areas are the predominant component in the majority of pediatric schwannomas.",
    ],
    ihc: [
      "Diffuse nuclear and cytoplasmic staining for S100, which is more prominent in Antoni A areas than in Antoni B areas, is found in all tumors and subtypes.",
      "Similarly, SOX10 immunoreactivity is usually extensive.",
      "CD34 is commonly positive only in subcapsular areas, in contrast to the lattice-like staining pattern in neurofibromas, although a small subset of cases show more extensive positivity.",
    ],
    molecular: [
      "Loss of chromosome 22q and/or mutation of NF2 are frequent but nonspecific molecular alterations.",
      "Schwannomas exhibit a distinct DNA methylation pattern.",
    ],
    differential: [],
    summary:
      "Schwannoma is a benign nerve sheath tumor composed entirely or nearly entirely of differentiated neoplastic Schwann cells.",
  },
  {
    name: "Neurofibroma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Cutaneous neurofibromas are usually asymptomatic and most commonly manifest as a mass.",
      "They are mobile soft lesions without a particular anatomical predilection.",
      "Deep tumors often occur with motor or sensory symptoms in the distribution of the affected nerve.",
    ],
    criteria: [
      "Essential: an infiltrative, low-cellularity spindle cell neoplasm associated with a variably myxoid to collagenous stroma and a mixed cell population.",
      "Desirable: S100 positivity in the Schwann cell population, with a lattice-like CD34 pattern, highlighting the stromal component; intraneural localization; a patient with NF1; for AN/ANNUBP in the setting of NF1: atypical histological features (nuclear enlargement, hypercellularity, architectural loss, mitoses), often with loss of p16 expression.",
    ],
    histology: [
      "Neurofibromas are characterized by cytologically bland spindle cells with thin, wavy nuclei representing the neoplastic Schwann cell, immersed in a variably loose myxoid stroma.",
      "The tumor cells are typically smaller than those of schwannoma.",
      "Stromal collagen is characteristic, colorfully likened in classic pathology descriptions to shredded carrots.",
      "A variety of other cells are also identifiable in neurofibroma, including perineurial and perineurial-like cells, fibroblasts, and mast cells.",
    ],
    ihc: [
      "The individual fascicles are recognized by the outlining perineurium that is composed of EMA-positive cells.",
      "They appear as delicate round, layered structures and are strongly labeled by S100 immunohistochemistry.",
      "Other histological features that may be identifiable in individual neurofibromas include Schwann cell nodules, S100-positive onion bulb–like Schwann cell proliferations, melanin pigment, metaplastic bone, epithelioid change, and even glandular differentiation.",
    ],
    molecular: [
      "Molecular analyses do not have an established role in the diagnosis of neurofibroma.",
      "However, chromosomal copy-number profiling may be helpful for the evaluation of AN/ANNUBP (CDKN2A or CDKN2B deletion) and its differentiation from MPNST (complex highly rearranged genome).",
    ],
    differential: [],
    summary:
      "Neurofibroma is a benign peripheral nerve sheath tumor consisting of mature but neoplastic Schwann cells intermixed with non-neoplastic cell types.",
  },
  {
    name: "Perineurioma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "In intraneural perineurioma, progressive muscle weakness (with or without atrophy) is more frequent than sensory disturbances.",
      "Patients with soft tissue perineurioma present with nonspecific mass effects.",
      "Both intraneural and soft tissue perineuriomas have been described in patients with neurofibromatosis type 1 and type 2; however, these are rare cases and it is unclear if there is a true association.",
    ],
    criteria: [
      "Intraneural perineurioma Essential: a pseudo–onion bulb pattern on cross-section, with axons in the center; tumor cells are positive for at least one perineurial antigen (EMA, claudin-1, GLUT1) and negative for S100.",
      "Soft tissue perineurioma Essential: slender spindle cells with bipolar cytoplasmic processes; storiform and/or whorled architecture; tumor cells are positive for at least one perineurial antigen (EMA, claudin-1, GLUT1) and negative for S100.",
    ],
    histology: [
      "Intraneural perineurioma consists of concentric layers of perineurial cells around axons, forming characteristic pseudo–onion bulbs.",
      "This distinctive architectural feature is best seen on cross-section, wherein fascicles vary in cellularity.",
      "Perineurial cells accumulate in the endoneurium, but the perineurium is often affected as well.",
      "Particularly large whorls can envelop numerous nerve fibers.",
    ],
    ihc: [
      "Immunohistochemically, tumor cells of intraneural and soft tissue perineurioma are consistently positive for EMA, which ranges from weak and focal to strong and diffuse , and claudin-1 and GLUT1 are also often positive.",
      "CD34 is expressed in about 60% of soft tissue perineuriomas.",
      "Staining for S100, SOX10, and GFAP is negative.",
    ],
    molecular: [
      "Molecular analyses do not have an established role in the diagnosis of perineurioma.",
      "Because of the rareness of perineurioma, a reference group for its DNA methylation–based classification is not currently available.",
    ],
    differential: [],
    summary:
      "Perineurioma is a benign tumor composed of neoplastic perineurial cells.",
  },
  {
    name: "Hybrid nerve sheath tumor",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Hybrid nerve sheath tumors occur as painless masses in subcutaneous tissue or dermis.",
      "When large peripheral nerves or spinal nerves are involved, the tumors may be associated with pain or neurological deficit.",
      "Hybrid nerve sheath tumors are rare.",
    ],
    criteria: [
      "Essential: intermingled features of two types of benign nerve sheath tumors; appropriate immunohistochemical staining for each component.",
    ],
    histology: [
      "Hybrid schwannoma/perineurioma shows a storiform or fascicular growth and is composed of an admixture of Schwann cells with plump nuclei and eosinophilic cytoplasm and perineurial cells with slender nuclei and delicate elongated cytoplasmic processes.",
      "The Schwann cell component is often prominent.",
      "The tumors may show degenerative nuclear atypia (ancient change).",
      "Rare cases show a biphasic appearance and a lobulated growth pattern, either with separate schwannomatous and perineurial nodules or with schwannomatous nodules surrounded by a perineurial component with a reticular growth pattern and myxoid stroma.",
    ],
    ihc: [
      "The two components can be highlighted by immunohistochemistry: S100-positive Schwann cells and EMA-positive perineurial cells.",
      "Immunostaining highlights the mixed population of cells in the neurofibromatous component, including fibroblasts (CD34), Schwann cells (S100 and SOX10), and perineurial cells (EMA, claudin-1, and GLUT1), whereas there is a monomorphic Schwann cell population in the schwannomatous component (diffuse expression of S100 and SOX10).",
      "The perineuriomatous areas are immunopositive for EMA, GLUT1, and claudin-1, and the neurofibroma areas show a mixed population of cells including fibroblasts (CD34), Schwann cells (S100 and SOX10), and perineurial cells (EMA, claudin-1, and GLUT1).",
    ],
    molecular: [],
    differential: [],
    summary:
      "Hybrid nerve sheath tumors are benign peripheral nerve sheath tumors with combined features of more than one conventional type (neurofibroma, schwannoma, perineurioma).",
  },
  {
    name: "Granular cell tumor",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Although usually asymptomatic, granular cell tumors can be pruritic to painful in the skin and tongue.",
      "Cutaneous lesions are firm, flesh-colored to reddish brown, and 5–30 mm in size.",
      "Granular cell tumors usually occur in adults in their fourth to sixth decade of life, but they can be encountered at any age.",
    ],
    criteria: [
      "Essential: nests and sheets of epithelioid to polygonal cells; abundant, intensely eosinophilic, granular cytoplasm; S100 and SOX10 positivity by immunohistochemistry.",
    ],
    histology: [
      "Granular cell tumor has poorly defined borders and is composed of sheets, nests, and trabeculae of large, monotonous epithelioid to polygonal cells with intensely eosinophilic, granular cytoplasm.",
      "Cell borders may be indistinct, producing a syncytial appearance.",
      "Nuclei are usually centrally situated and range from uniformly small and mildly hyperchromatic to larger and vesicular with distinct nucleoli.",
      "Mitoses are variable in number but usually not prominent.",
    ],
    ihc: [
      "Granular cell tumors are generally reactive for S100, SOX10, nestin, inhibin, and calretinin.",
      "Tumors are also positive for CD68, CD63 (NKI/C3 clone), and NSE.",
      "MITF and TFE3 (in the absence of gene rearrangements) show diffuse nuclear reactivity in most cases, but HMB45 is uniformly negative, and only very rarely is there focal reactivity for melan-A.",
    ],
    molecular: [],
    differential: [],
    summary:
      "A granular cell tumor is a tumor showing neuroectodermal differentiation and composed of epithelioid to polygonal cells with copious eosinophilic, distinctively granular cytoplasm.",
  },
  {
    name: "Solitary circumscribed neuroma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Patients with SCN usually present with a slow-growing, firm, painless, circumscribed dermal-based nodule.",
      "SCN is mostly solitary, but rare examples of multiple SCNs have been reported, with no evidence of any associated systemic disease.",
      "SCN is most common in the fifth to seventh decades of life, but it can occur in patients of any age.",
    ],
    criteria: [
      "Essential: a circumscribed cutaneous lesion of Schwann cell–rich fascicles of nerve fibers with or without partial encapsulation; focal palisading and artefactual clefting; S100 positivity with focal NFP staining; the peripheral capsule is highlighted by perineurial markers (EMA, GLUT1).",
    ],
    histology: [
      "SCN is a circumscribed dermal-based tumor composed of bland spindle-shaped cells with wavy nuclei in a background of hyalinized collagen.",
      "The cells often form well-developed fascicles, and some palisading of nuclei within the tumor is characteristically present.",
      "A thin perineurial-derived fibrous capsule may surround the lesion, but it is often incomplete at the superficial aspect.",
      "Artefactual clefting is a frequent finding, and extension into the subcutis may be present on occasion.",
    ],
    ihc: [
      "The spindle cells are strongly and diffusely positive for S100.",
      "Perineurial cells in the capsule stain for EMA, claudin-1, and GLUT1.",
    ],
    molecular: ["No diagnostic molecular findings have been described."],
    differential: [],
    summary:
      "Solitary circumscribed neuroma (SCN) is a benign, often cutaneous, nodular proliferation of nerve fibers with Schwann cells predominating over axons, showing a strong predilection for the face.",
  },
  {
    name: "Ectopic meningioma and meningothelial hamartoma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "The presenting signs and symptoms of ectopic meningiomas vary greatly, with the most common pattern being that of a painless, slow-growing mass.",
      "Meningothelial hamartoma is typically detected as an incidental scalp mass or dimple, sometimes with alopecia and/or tenderness.",
      "It may be associated with underlying or distant skeletal anomalies or congenital melanocytic nevus.",
    ],
    criteria: [
      "Essential: a meningothelial rest or neoplasm located entirely outside of, and with no connection to, the CNS.",
    ],
    histology: [
      "The same range of histological appearances and grades encountered intracranially may be seen in ectopic meningiomas, with benign meningothelial tumors being most common.",
      "In the scalp, hamartomas usually show slit-like spaces resembling lymphatics.",
      "However, they are lined by meningothelial (rather than endothelial) cells.",
      "Well-formed meningothelial clusters and psammoma bodies can also be encountered.",
    ],
    ihc: [
      "Highly sensitive and specific immunohistochemical markers are generally lacking, with coexpression of vimentin, EMA, and progesterone used most consistently.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Ectopic meningioma is a meningothelial neoplasm occurring entirely outside intracranial and intraspinal cavities.",
  },
  {
    name: "Benign triton tumor / neuromuscular choristoma",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Patients present most often with progressive pain or features of peripheral neuropathy/plexopathy.",
      "There may be atrophy of the involved limb, as well as superimposed desmoid fibromatosis (NMC-fibromatosis) in as many as 80% of cases, with the latter seen mostly after biopsy.",
      "On MRI, NMC features T1- and T2-weighted signals similar to those of adjacent skeletal muscle, with no interfascicular fat (unlike fibrolipomatous hamartoma) and minimal contrast enhancement.",
    ],
    criteria: [
      "Essential: skeletal muscle intercalated between intraneural elements; immunohistochemical validation of both endoneurial myogenic and neural elements; intact perineurium surrounding individual fascicles; the presence of nuclear β-catenin expression either in NMC alone or in NMC-fibromatosis.",
    ],
    histology: [
      "Haphazardly arranged bundles of mature skeletal muscle with cross-striations are intercalated between intraneural elements; smooth muscle elements have also been encountered rarely.",
      "In some cranial nerve examples adipose tissue has been reported as well, although this probably represents a different entity.",
      "Residual nerve includes NFP-positive axons surrounded by S100-positive Schwann cells.",
    ],
    ihc: [
      "In terms of immunostains, the myogenic component expresses markers of mature skeletal muscle, including desmin.",
      "Diffuse expression of myogenin has been recently reported.",
      "Residual nerve includes NFP-positive axons surrounded by S100-positive Schwann cells.",
    ],
    molecular: [
      "S45F) mutations supports the diagnosis of NMC with or without associated desmoid fibromatosis.",
    ],
    differential: [],
    summary:
      "Benign triton tumor / neuromuscular choristoma (NMC) is an expansile intraneural mass characterized by the intimate interposition of mature skeletal muscle and nerve fibers within the endoneurium.",
  },
  {
    name: "Malignant peripheral nerve sheath tumor",
    group: "Peripheral Nerve Sheath Tumors and Related Lesions",
    clinical: [
      "Like in adults, MPNSTs in children occur as enlarging soft tissue masses, often causing pain, dysesthesia, or other neurological symptoms.",
      "Most tumors are large (> 50 mm) and often extend into adjacent structures.",
      "MRI features that help distinguish MPNST from benign nerve sheath tumors include peripheral enhancement, peritumoral edema, intratumoral heterogeneity or lobulation, and infiltrative margins, but their sensitivity is about 60%.",
    ],
    criteria: [
      "Essential: a sarcoma arising from a peripheral nerve or in the context of a pre-existing neurofibroma or in a patient with NF1; a sarcoma consisting of fascicles of monomorphic spindle cells with alternating hypercellular and hypocellular areas, geographical tumor necrosis, and numerous mitoses; a spindle cell sarcoma with heterologous elements; a spindle cell sarcoma with nerve sheath differentiation…",
      "K27me3 or with MPNST molecular signature; for epithelioid MPNST: a tumor consisting of epithelioid cells with prominent nucleoli showing diffuse expression of S100, absence of melanocytic markers, and SMARCB1 loss.",
      "Desirable: for epithelioid MPNST: an associated schwannoma.",
    ],
    histology: [
      "The majority of MPNSTs consist of fascicles of spindle cells with pale cytoplasm and tapered, wavy, hyperchromatic nuclei.",
      "Densely cellular areas alternate with myxoid hypocellular areas, creating a distinctive marbled pattern.",
      "Perivascular cell condensation forming cuffs, sometimes with endoluminal protrusions, is characteristic.",
      "Geographical necrosis (often with a perivascular-sparing pattern) and numerous mitoses are present.",
    ],
    ihc: [
      "Immunostaining for S100 is patchy or focal in about 50% of conventional MPNSTs, with higher expression in low-grade tumors.",
      "SOX10 is expressed in 70–84% of MPNSTs.",
      "Myogenic markers, including desmin, MSA, MYOD1, and myogenin, can be used to verify the presence of rhabdomyoblasts.",
    ],
    molecular: [
      "It is important to exclude the entities that enter into the differential and have recurrent molecular alterations (e. g.",
      "SS18 [SYT] rearrangement, kinase fusions).",
    ],
    differential: [],
    summary:
      "Malignant peripheral nerve sheath tumor (MPNST) is a spindle cell sarcoma arising from a peripheral nerve or from a pre-existing benign nerve sheath tumor, or in patients with neurofibromatosis type 1 (NF1).",
  },
  {
    name: "Intramuscular/juxta-articular myxoma",
    group: "Myxoid Tumors",
    clinical: [
      "Overall these tumors occur sporadically, as slow-growing, solitary, painless or painful masses.",
      "On MRI, myxoma is bright in T2-weighted images and shows low signal intensity compared with skeletal muscle in T1-weighted images.",
      "Intramuscular myxomas are mainly sporadic but may occur in combination with fibrous dysplasia, a condition called Mazabraud syndrome.",
    ],
    criteria: [
      "Essential: bland-looking spindled to stellate cells set in a myxoid stroma.",
      "Desirable: sparse capillary-like blood vessels.",
    ],
    histology: [
      "Intramuscular and juxta-articular myxomas share a common morphological theme: uniform, bland-looking, spindled to stellate cells with round/ovoid nuclei and palely eosinophilic cytoplasm, haphazardly embedded in an abundant myxoid stroma with sparse capillary-like blood vessels.",
      "Stromal cystic and frothy changes, sometimes mimicking univacuolated lipoblasts, may be seen.",
      "Both lesions may infiltrate, at least focally, into the surrounding tissues.",
      "Hypercellularity, sometimes associated with a more collagenous stroma and/or increased vascularity, internal fibrous septa, hemorrhage, chronic inflammation, and/or hemosiderin/fibrin deposition are focally observed.",
    ],
    ihc: [
      "Immunohistochemically, the neoplastic cells are variably stained with CD34 and SMA.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Intramuscular/juxta-articular myxomas are rare pediatric myxomatous lesions occurring in the muscles of the head and neck and adjacent to large joints, with morphological and immunohistochemical features similar to those of their counterparts in adults.",
  },
  {
    name: "Superficial angiomyxoma",
    group: "Myxoid Tumors",
    clinical: [
      "Superficial angiomyxomas produce a painless cutaneous or subcutaneous papule or nodule.",
      "Superficial angiomyxoma is rare in children.",
      "Superficial angiomyxomas have been reported at different sites, including the genital and head/neck regions.",
    ],
    criteria: [
      "Essential: dermal myxoid tumor with a lobular/multinodular configuration.",
      "Desirable: arborizing/plexiform capillary-like vessels.",
    ],
    histology: [
      "Superficial angiomyxoma is composed of bland-looking spindled to stellate cells set in an abundant myxoid stroma with capillary-like vessels that exhibit, at least focally, an arborizing/plexiform configuration.",
      "A lobular/multinodular appearance, due to the presence of fibrous septa, is a typical feature.",
      "Entrapped cystic epithelial structures may be seen.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Superficial angiomyxoma is a bland-looking myxoid dermal tumor with a lobular/multinodular configuration.",
  },
  {
    name: "Deep angiomyxoma",
    group: "Myxoid Tumors",
    clinical: [
      "Vulvar tumors may mimic a labial cyst or clitoromegaly.",
      "In male patients, enlargement of the spermatic cord or a scrotal protruding mass, mimicking a hernia or a hydrocele, is seen.",
      "Deep angiomyxoma is rare in children and both sexes are affected, with a wide age range (from infancy to adolescence).",
    ],
    criteria: [
      "Essential: a bland-looking myxoid tumor with numerous thin- to thick-walled blood vessels.",
      "Desirable: bundles of smooth muscle cells variably interspersed in the stroma; diffuse desmin immunoreactivity.",
    ],
    histology: [
      "Deep angiomyxoma is composed of bland-looking, short, spindled and stellate cells set in an abundant myxoid stroma with numerous capillary-like and medium-sized to large blood vessels.",
      "Perivascular hyalinization, hypercellular areas, and/or fibrous areas are often seen.",
      "Bundles of mature smooth muscle cells, sometimes radiating from the wall of the larger vessels, are variably interspersed in the stroma.",
      "Infiltration of the surrounding tissues is common.",
    ],
    ihc: [
      "Immunohistochemically the neoplastic cells often express desmin and variably express CD34 and SMA.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Deep angiomyxoma is a bland-looking myxoid tumor occurring in the deep soft tissues, typically of the lower genital tract.",
  },
  {
    name: "Angiomatoid fibrous histiocytoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Typically, patients present with a superficial, painless, slow-growing, and variably fluctuant soft tissue mass.",
      "Occasional patients have an associated paraneoplastic syndrome of anemia, fever, and weight loss, related to tumor cytokine production.",
      "AFH can occur in adults, but it is most common in the first two decades of life and may occur congenitally.",
    ],
    criteria: [
      "Essential: a small, painless subcutaneous nodule; nodules of epithelioid to ovoid cells arranged in syncytial-like sheets; pseudoangiomatoid spaces; peripheral rims of lymphoplasmacytic cells, including germinal centers; variable desmin, CD99, and EMA immunoreactivity.",
      "Desirable (in selected cases): molecular studies confirming EWSR1 gene rearrangement.",
    ],
    histology: [
      "These tumors are usually well circumscribed and lobulated, with several morphological components.",
      "These include (1) sheets or fascicles of spindled or histiocytic-like cells arranged in nodules, containing a moderate amount of eosinophilic cytoplasm and bland vesicular nuclei; (2) non-endothelial lined and blood-filled pseudoangiomatous spaces surrounded by tumor cells; (3) a thick, fibrous pseudocapsule with hemosiderin deposition; and (4) a pericapsular lymphoplasmacytic cell cuff with germinal centers.",
      "Nearly one third of tumors lack pseudoangiomatous spaces and are solid, simulating a lymph node.",
      "Mitotic figures are usually few, although atypical mitotic figures may be present.",
    ],
    ihc: [
      "Most are positive for SOX9 and are often focally or diffusely immunoreactive for desmin.",
      "Perimembranous CD99 staining is common.",
      "Tumor cells are consistently negative for MYOD1, myogenin, cytokeratins, S100, and CD34.",
    ],
    molecular: [
      "Demonstration of EWSR1::CREB1, EWSR1::ATF1, or FUS::ATF1 fusion is supportive of the diagnosis.",
    ],
    differential: [],
    summary:
      "Angiomatoid fibrous histiocytoma (AFH) is a rare mesenchymal tumor of uncertain lineage and with low to intermediate malignant potential.",
  },
  {
    name: "Clear cell sarcoma of soft tissue",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Most patients present with a palpable mass that grows insidiously over months or years, with a reported median of 10 months between the onset of symptoms and diagnosis in pediatric patients.",
      "It may be associated with pain or tenderness in approximately one third to half of the patients.",
      "CCS most commonly affects young people, with a peak incidence in the third to fourth decades of life.",
    ],
    criteria: [
      "Essential: nests and short fascicles of plump spindle cells with pale cytoplasm and prominent nucleoli, admixed with occasional wreath-like giant cells; the tumor cells express melanocytic markers including S100, SOX10, melan-A, and HMB45.",
      "Desirable: demonstration of EWSR1 rearrangement or EWSR1::ATF1 fusion.",
    ],
    histology: [
      "CCS is composed of short fascicles and nests of relatively uniform epithelioid or plump spindle cells with vesicular nuclei, prominent central nucleoli, and pale eosinophilic cytoplasm.",
      "Despite the name, clear cell features are uncommon.",
      "The nests are separated by dense fibrous stroma.",
      "Occasional distinctive wreath-like multinucleated giant cells are observed in more than half of all cases.",
    ],
    ihc: [
      "By immunohistochemistry, S100, SOX10, HMB45, melan-A, and MITF are consistently expressed.",
    ],
    molecular: [
      "Demonstration of EWSR1 rearrangement or EWSR1::ATF1 fusion may be helpful to differentiate CCS from melanoma.",
    ],
    differential: [],
    summary:
      "Clear cell sarcoma (CCS) of soft tissue is a malignant mesenchymal neoplasm with melanocytic differentiation and a distinctive nested growth pattern, most often characterized by EWSR1::ATF1 fusion.",
  },
  {
    name: "Alveolar soft part sarcoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Patients with ASPS present with a slow-growing, painless, intramuscular mass with hemorrhage.",
      "MRI is notable for flow voids, large vessels, and moderate to intense postcontrast enhancement.",
      "ASPS accounts for < 1% of all soft tissue sarcomas.",
    ],
    criteria: [
      "Essential: eosinophilic polygonal cells in an organoid/nested pattern often encircled by rich sinusoidal capillaries; strong and diffuse nuclear TFE3 expression by immunohistochemistry.",
      "Desirable: intracytoplasmic PAS-positive, diastase-resistant crystals; demonstration of TFE3 gene rearrangement or ASPSCR1::TFE3 fusion (in selected cases).",
    ],
    histology: [
      "ASPS is composed of large polygonal cells with eosinophilic granular cytoplasm, an eccentric vesicular nucleus with a cookie-bite indentation, and a prominent nucleolus, arranged in an alveolar pattern of organoid nests with central discohesion.",
      "A rich sinusoidal capillary vasculature encircles tumor nests.",
      "Cytoplasmic clearing, rhabdoid cells, a pseudoglandular pattern, central necrosis, and cystic change may be observed.",
      "A solid pattern is observed in very young patients, with more alveolar growth in older children and young adults, especially in lingual tumors.",
    ],
    ihc: [
      "Rod-like/rhomboid intracytoplasmic crystalline structures may be identified by PAS with diastase resistance and may stain for MCT1 and CD147.",
      "Cathepsin K and occasional calretinin or desmin may be observed.",
    ],
    molecular: [
      "TFE3 rearrangement or ASPSCR1::TFE3 fusion transcripts may be diagnostically helpful.",
      "The presence of the ASPSCR1::TFE3 fusion appears to be highly specific and sensitive for ASPS among sarcomas; the same gene fusion can be identified in Xp11.",
    ],
    differential: [],
    summary:
      "Alveolar soft part sarcoma (ASPS) is a rare tumor of uncertain histogenesis predominantly affecting the deep soft tissues of the extremities, featuring variably discohesive epithelioid cells arranged in nests, resulting in a distinct alveolar appearance.",
  },
  {
    name: "Extrarenal rhabdoid tumor",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Most patients present with a rapidly enlarging soft tissue mass; the associated clinical symptoms depend on the primary organ involvement.",
      "Occasional patients present with multiple cutaneous nodules.",
      "Some cases, particularly in infants, manifest as disseminated disease without an obvious primary tumor – such cases are often associated with rhabdoid tumor predisposition.",
    ],
    criteria: [
      "Essential: primitive undifferentiated or rhabdoid cell morphology; loss of expression of SMARCB1 (INI1).",
    ],
    histology: [
      "The tumor is characterized by rhabdoid cells with large vesicular rounded to bean-shaped nuclei, prominent nucleoli, and abundant cytoplasm, arranged in sheets or in a solid trabecular pattern.",
      "Many tumor cells have juxtanuclear eosinophilic, PAS-positive, diastase-resistant hyaline inclusions or globules.",
      "At the periphery, tumor cells infiltrate the surrounding tissue.",
      "Nuclear pleomorphism is not evident, whereas mitoses are frequent.",
    ],
    ihc: [
      "Immunohistochemically, most of these tumors show expression of epithelial markers such as keratins and EMA.",
      "The expression of neural or neuroectodermal markers such as CD99 and synaptophysin is also frequently observed in soft tissue tumors.",
      "Less commonly, the cells express MSA and focal S100.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Extrarenal rhabdoid tumor is a highly malignant soft tissue tumor that mainly affects infants and children.",
  },
  {
    name: "PEComa",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Clinical presentation depends on the site.",
      "Intra-abdominal tumors may cause acute abdominal symptoms.",
      "A few cases of pediatric PEComas, especially in the prepubertal age group, show associations with other malignancies such as neuroblastoma, rhabdomyosarcoma, and acute lymphoblastic leukemia.",
    ],
    criteria: [
      "Essential: a variable proportion of spindle and/or epithelioid cells with abundant clear to eosinophilic cytoplasm, round nucleoli, and pinpoint nucleoli in intimate association with thin-walled capillary vessels; coexpression of melanocytic and smooth muscle markers.",
      "Desirable: TFE3 expression (if smooth muscle markers are negative).",
    ],
    histology: [
      "Histologically, these tumors consist of epithelioid cells with a clear to granular cytoplasm, a round to oval centrally located nucleus, an inconspicuous nucleolus, and a typical perivascular location.",
      "In some areas, spindle cells with clear, elongated cytoplasm and distinct cell borders arranged in fascicles are present; in a few tumors (20%), these areas can represent the predominant component, especially in younger patients.",
      "Neither adipocytes nor thick-walled blood vessels are observed.",
      "Melanin pigment has been identified in the epithelioid and spindle cells in 25% of the tumors.",
    ],
    ihc: [
      "A variable percentage of neoplastic cells consistently stain for melanogenetic markers (e. g.",
      "HMB45 and melan-A [MART1]), cathepsin K (a lysosomal papain-like cysteine protease), and muscle markers (especially actin and calponin, and less commonly desmin).",
      "Immunoreactivity for vimentin is usually inconspicuous.",
    ],
    molecular: [],
    differential: [
      "In childhood, the diagnosis of PEComa may be extremely challenging because of a relatively large differential diagnosis, which differs depending on the tumor site and can include clear cell sarcoma of soft tissue (also known as melanoma of soft parts), alveolar soft part sarcoma, smooth muscle tumors, MiT-family translocation renal cell carcinoma, clear cell sarcoma of the kidney, gastrointestinal stromal tumor, and metastatic melanoma.",
    ],
    summary:
      "Perivascular epithelioid cell tumors (PEComas) are mesenchymal tumors composed of perivascular epithelioid cells (PECs), which are characterized by the coexpression of muscle and melanogenetic markers.",
  },
  {
    name: "Synovial sarcoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "SS may occur as a longstanding and slow-growing mass, with or without pain.",
      "Initial presentation as a small, circumscribed tumor may give the erroneous clinical impression of a benign lesion.",
      "SS is most common in adolescents and young adults.",
    ],
    criteria: [
      "Essential: monomorphic spindle cell sarcoma with or without gland formation, showing variable histological and/or immunohistochemical epithelial differentiation; diffuse and strong nuclear immunostaining for TLE1.",
      "Desirable: diffuse and strong nuclear immunostaining for SS18::SSX fusion protein or demonstration of an SS18::SSX gene fusion.",
    ],
    histology: [
      "There are three main histological patterns of SS: monophasic (most common), biphasic (second most common, accounting for as many as a third of cases), and poorly differentiated.",
      "Monophasic SS is composed of dense cellular sheets and fascicles of uniform spindle cells.",
      "The tumor cells have high N:C ratios and ovoid, hyperchromatic nuclei with regular granular chromatin and inconspicuous nucleoli.",
      "Collagen is usually scant, but there may be areas of dense fibrosis or hyalinization.",
    ],
    ihc: [
      "In addition, TLE1 shows diffuse nuclear staining in most cases of SS, although it is not specific and is also expressed in histological mimics such as malignant peripheral nerve sheath tumor and solitary fibrous tumor.",
      "Epithelial differentiation can be demonstrated with EMA and cytokeratins.",
      "In most cases of SS there is expression of BCL2 and CD99 (which may be perimembranous).",
    ],
    molecular: [
      "Approximately two thirds of SSs carry SS18::SSX1 fusion, one third carry SS18::SSX2, and rare cases carry SS18::SSX4 or SS18L1::SSX1 fusion.",
      "Almost all tumors with SS18::SSX2 fusion show monophasic histology, whereas those with SS18::SSX1 fusion show an approximate 2:1 ratio of monophasic to biphasic histology.",
    ],
    differential: [],
    summary:
      "Synovial sarcoma (SS) is a malignant mesenchymal neoplasm showing variable epithelial differentiation and characterized by a specific SS18::SSX fusion gene.",
  },
  {
    name: "Epithelioid sarcoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "C-ES occurs as solitary or multiple slow-growing, painless, firm, superficially located nodules.",
      "Lesions often result in non-healing skin ulcers that can clinically mimic ulcerative non-neoplastic dermal processes.",
      "Recurrences can involve deep soft tissue, mimicking P-ES.",
    ],
    criteria: [
      "Essential: superficial or deep soft tissue mass; epithelioid to spindled cytomorphology; infiltrative growth; loss of SMARCB1 (INI1, BAF47) expression; staining for vimentin, EMA, and keratins.",
    ],
    histology: [
      "C-ES consists of cellular nodules of epithelioid and spindled cells with central degeneration and/or necrosis, with a vaguely granulomatous appearance (pseudogranulomatous pattern).",
      "Confluent necrotizing nodules result in a serpiginous mass with central geographical necrosis.",
      "Deeply situated lesions spread along the fascia as undulating bands of cells punctuated by foci of necrosis.",
      "Tumor cells vary from large ovoid/polygonal epithelioid cells to peripheral plump spindle-shaped cells with deeply eosinophilic cytoplasm and mildly atypical nuclei possessing vesicular chromatin and small nucleoli.",
    ],
    ihc: [
      "Both C-ES and P-ES show immunoreactivity for epithelial markers, including low- and high-molecular-weight cytokeratins (CK8 and CK19, whereas CK5/6 is negative or weakly positive) and EMA, in addition to vimentin.",
      "Expression of CD34 (50%) and ERG (40–67%, predominantly in C-ES) can cause confusion with vascular tumors.",
      "Loss of nuclear expression of SMARCB1 occurs in the vast majority of cases.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Epithelioid sarcoma (ES) is a malignant mesenchymal neoplasm characterized by partial or complete epithelioid cytomorphology, expression of epithelial markers, and loss of SMARCB1 (INI1) expression in the majority of cases.",
  },
  {
    name: "Myoepithelial tumors of soft tissue",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Most patients present with a painless, palpable mass.",
      "Patients with visceral or deep-seated tumors may have fever, cough, chest pain, respiratory distress, and paresthesias or weakness due to spinal cord or nerve compression.",
      "Overall, 20% of myoepithelial tumors arise in children, and they are more likely to be malignant in this age group.",
    ],
    criteria: [
      "Essential: myoepithelial tumors show trabecular, reticular, nested, and/or solid growth, with a frequent myxoid or hyalinized stroma; mixed tumors show ductal differentiation (which may be focal); myoepithelial carcinomas show increased cytological atypia and mitotic activity; an immunophenotype supporting myoepithelial differentiation is also essential (positivity for EMA and/or keratin and for S100, SOX10, or…",
      "Desirable (in selected cases): demonstration of EWSR1 rearrangements (these occur in ~50% of myoepithelial neoplasms, with a wide range of fusion partners).",
    ],
    histology: [
      "Myoepithelial tumors show marked architectural and cytological heterogeneity, both within a given tumor and between tumors.",
      "Most appear multinodular at low power, with variably myxoid, collagenous, or hyalinized stroma.",
      "Growth patterns are commonly reticular and trabecular, but they may be nested, fascicular, and solid.",
      "Tumor cells are typically spindled or epithelioid, with uniform round or ovoid nuclei and palely eosinophilic, occasionally clear, cytoplasm.",
    ],
    ihc: [
      "Confirmation of myoepithelial differentiation is necessary for diagnosis, although immunophenotypes can be variable.",
      "The vast majority (90%) of cases express both epithelial markers (broad-spectrum keratins and/or EMA) and S100.",
      "SOX10 is positive in 80%, although in malignant tumors is it less frequent (30%). p63 is positive in a subset of cases (as many as 40%).",
    ],
    molecular: [
      "FISH can be used to detect rearrangements of EWSR1 in myoepithelioma/myoepithelial carcinoma or PLAG1 in mixed tumors.",
      "However, RNA or DNA sequencing panels that identify the fusion partner may be needed, because EWSR1 FISH alone may not be sufficient to distinguish myoepithelial neoplasms from other tumors with EWSR1 fusions.",
    ],
    differential: [],
    summary: "Myoepithelial tumors of soft tissue are rare in children.",
  },
  {
    name: "Phosphaturic mesenchymal tumor",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Longstanding osteomalacia is the most frequent manifestation.",
      "Laboratory studies show severe hypophosphatemia and increased levels of FGF23, which can also be demonstrated by RT-PCR in tissue sections of PMTs, even before the development of tumor-induced osteomalacia.",
      "PMTs are notoriously difficult to identify because of their tendency to occur as small and inconspicuous lesions in unsuspected places, requiring a meticulous clinical and imaging exploration.",
    ],
    criteria: [
      "Essential: bland spindle cells embedded in a hyalinized matrix with coarse calcification; rich vascularity; phosphaturic wasting and/or osteomalacia, which are cured by tumor removal.",
      "Desirable: elevated FGF23 expression in serum or in tumor tissue; demonstration of FN1::FGFR1 or FN1::FGF1 fusion.",
    ],
    histology: [
      "Most PMTs feature fibroblast-like spindle mesenchymal cells embedded in a hyalinized matrix, which may show coarse calcification.",
      "Poorly differentiated chondroid and areas of osseous metaplasia are frequent.",
      "Rich vascularization, with capillaries and larger vessels arranged in a pericytomatous or cavernous hemangioma pattern, is characteristic.",
      "An array of cells (including osteoclasts, fibrohistiocytic elements, and adipose tissue), frequently surrounded by woven bone, is frequently present.",
    ],
    ihc: [
      "The immunophenotype of most PMTs includes the expression of CD56, ERG, FGFR1, SATB2, and/or SSTR2A.",
    ],
    molecular: [
      "FN1::FGFR1 or FN1::FGF1 fusions are confirmatory ancillary diagnostic techniques.",
    ],
    differential: [],
    summary:
      "Phosphaturic mesenchymal tumors (PMTs) are neoplasms with a distinctive morphology that usually secrete FGF23, inducing phosphaturic oncogenic osteomalacia in most patients.",
  },
  {
    name: "Desmoplastic small round cell tumor",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Patients usually present with widespread abdominal/peritoneal involvement.",
      "Clinical features (e. g. pain, abdominal distention, a palpable mass, an acute abdomen, ascites, and organ obstruction) are usually related to the primary site of presentation.",
      "DSRCT primarily affects children and young adults.",
    ],
    criteria: [
      "Essential: primitive-appearing tumor cells that are immunopositive for cytokeratin and desmin and immunonegative for skeletal muscle–associated markers (e. g. myogenin and MYOD1).",
      "Desirable: identification of a t(11;22)(p13;q12) translocation or an EWSR1::WT1 fusion transcript; tumor cell immunoreactivity for a C-terminal WT1-targeted antibody; desmoplastic stroma.",
    ],
    histology: [
      "DSRCTs often comprise sharply demarcated nests of undifferentiated small cells and a surrounding desmoplastic stroma.",
      "The nests can vary in size and shape from tiny cords to large, irregularly shaped confluent sheets.",
      "Necrosis is common in the center of larger nests.",
      "hemorrhage and cystic degeneration can also be present.",
    ],
    ihc: [
      "Most tumors are positive for desmin, cytokeratins, and EMA, but they are consistently negative for myogenin and MYOD1.",
      "Desmin expression is cytoplasmic and distinctly dot-like.",
      "The stromal cells frequently express SMA.",
    ],
    molecular: [
      "DSRCT diagnosis is confirmed by detecting the EWSR1::WT1 fusion transcript.",
      "Fusion detection is especially useful for identifying DSRCTs disguised by atypical clinical or histological features.",
    ],
    differential: [],
    summary:
      "Desmoplastic small round cell tumor (DSRCT) is a malignant mesenchymal neoplasm composed of small round tumor cells associated with prominent stromal desmoplasia, polyphenotypic differentiation, and EWSR1::WT1 gene fusion.",
  },
  {
    name: "Undifferentiated sarcomas",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Undifferentiated sarcomas have no characteristic clinical features that allow their distinction from other sarcoma types.",
      "Because most tumors are high-grade, rapid growth is often reported.",
      "Pediatric undifferentiated sarcomas are currently regarded as exceedingly rare, and their proportion among pediatric sarcomas has in fact decreased as a consequence of improved diagnostic techniques and the identification of distinct tumor entities.",
    ],
    criteria: [
      "Essential: spindle cell, pleomorphic, and epithelioid morphology in the absence of immunohistochemical or molecular features of specific differentiation.",
    ],
    histology: [
      "Undifferentiated sarcomas may be broadly divided into pleomorphic, spindle cell, and epithelioid subsets, but the only common denominator is the lack of an identifiable line of differentiation.",
      "Pleomorphic undifferentiated sarcoma is composed of a patternless proliferation of pleomorphic, often multinucleated, bizarre giant cells.",
      "Spindle cell undifferentiated sarcoma is composed of spindle cells featuring tapering nuclei, organized most often in a fascicular growth pattern.",
      "The epithelioid subtype can mimic metastatic carcinoma or melanoma and is composed of neoplastic cells featuring abundant polygonal cytoplasm harboring large vesicular nuclei.",
    ],
    ihc: [],
    molecular: [
      "Undifferentiated sarcomas are characterized by numerous complex genomic alterations without a recurrent genetic abnormality that could be used for diagnostic purposes.",
      "Diagnostic molecular techniques such as cytogenetics and next-generation DNA and RNA sequencing play an important role in identifying specific molecular entities with round or spindle cell morphology – tumors that would otherwise have been classified as undifferentiated sarcoma.",
    ],
    differential: [],
    summary:
      "Undifferentiated soft tissue sarcomas show no identifiable line of differentiation when analysed using currently available technology.",
  },
  {
    name: "Ewing sarcoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Ewing sarcoma usually manifests with localized pain followed by a palpable mass.",
      "Bony tumors may be associated with pathological fracture.",
      "B symptoms (fever, night sweats, loss of appetite) are rare except in advanced or metastatic disease.",
    ],
    criteria: [
      "Essential: diffuse infiltrates of small round tumor cells; diffuse and strong membranous CD99 immunoreactivity; exclusion of morphological mimics.",
      "Desirable: identification of a FET::ETS gene fusion.",
    ],
    histology: [
      "Ewing sarcoma features solid sheets of small round tumor cells with round nuclei containing finely granular chromatin; inconspicuous nucleoli; and scant, indistinct, clear to palely eosinophilic cytoplasm.",
      "The tumor cells may be highly uniform or show some degree of cytological atypia, in which tumor cells are larger with nuclear contour irregularities and greater nucleolar prominence.",
      "Some cases may display neuroectodermal differentiation with well-formed pseudorosettes that feature cells radially oriented towards a central fibrillar core.",
      "Necrosis is a frequent finding and may be focal or extensive.",
    ],
    ihc: [
      "CD99 immunohistochemistry typically shows strong diffuse membranous reactivity, but this is not specific for Ewing sarcoma.",
      "FLI1 and ERG are often expressed in cases with the corresponding gene fusions.",
      "Other markers that may be positive include neuroendocrine antigens, S100, and TRK proteins.",
    ],
    molecular: [
      "The certainty of a diagnosis of Ewing sarcoma is significantly strengthened by molecular confirmation of a gene fusion involving a FET gene (FUS, EWSR1, or TAF15) and an ETS gene.",
      "The most common gene fusion is EWSR1::FLI1, resulting from a t(11;22)(q24;q12) translocation, present in about 85% of cases.",
    ],
    differential: [],
    summary:
      "Ewing sarcoma is a small round cell sarcoma with gene fusions involving a FET-family gene (usually EWSR1) and a member of the ETS family of transcription factors.",
  },
  {
    name: "Round cell sarcoma with EWSR1::non-ETS fusions",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "EWSR1/FUS::NFATC2 sarcomas typically manifest as painful, locally destructive bone lesions or as primary soft tissue tumors.",
      "EWSR1::PATZ1 sarcomas manifest as isolated soft tissue masses.",
      "EWSR1/FUS::NFATC2 sarcomas occur rarely in children, with only 5 pediatric cases reported (age range: 12–16 years).",
    ],
    criteria: [
      "Essential: spindled to rounded cytomorphology; abundant stromal changes (in most cases), e. g. fibrohyaline, osteogenic, cartilaginous; identification of a fusion transcript remains the gold standard.",
      "Desirable: exclusion of a myoepithelial neoplasm (negativity for keratin and SOX10); for NFATC2-rearranged sarcomas: location in the bone (in most cases); positive staining for aggrecan and/or NKX3-1; for PATZ1-rearranged sarcomas: round/spindled cells with a divergent immunophenotype (myogenic and neurogenic).",
    ],
    histology: [
      "EWSR1/FUS::NFATC2 sarcomas are composed of small to medium-sized round and/or spindled cells with limited eosinophilic or clear cytoplasm, predominantly arranged in cords, nests, trabeculae, and pseudoacinar structures in a fibrohyaline or myxohyaline background.",
      "Small round monotonous to markedly pleomorphic nuclei featuring smooth or irregular nuclear contours, dense hyperchromatic or vesicular chromatin, and small or prominent nucleoli have been reported.",
      "Tumor necrosis and mitotic activity are variable.",
      "Tumor cells diffusely express CD99 (in 50% of cases); NKX2-2 may be expressed, as well as dot-like keratin AE1/AE3 and CD138.",
    ],
    ihc: [
      "Tumor cells diffusely express CD99 (in 50% of cases); NKX2-2 may be expressed, as well as dot-like keratin AE1/AE3 and CD138.",
      "Coexpression of myogenic (desmin, myogenin, MYOD1) and neurogenic (S100P, SOX10, MITF, GFAP) markers is seen.",
    ],
    molecular: [
      "EWSR1::NFATC2, FUS::NFATC2, and EWSR1::PATZ1 fusions are best detected by sequence-based fusion assays.",
      "The EWSR1::PATZ1 fusion is easily missed using EWSR1 break-apart FISH.",
    ],
    differential: [],
    summary:
      "Round cell sarcomas with EWSR1::non-ETS fusions are round and spindle cell sarcomas with EWSR1 or FUS fusions involving partners unrelated to the ETS gene family, excluding EWSR1-rearranged myoepitheliomas.",
  },
  {
    name: "CIC-rearranged sarcoma",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "CIC-rearranged sarcomas usually manifest as mass lesions with or without pain; some patients present with symptoms due to visceral involvement, and some present with symptoms of metastatic disease.",
      "CIC-rearranged sarcomas occur over a wide age range, with as many as 22% of cases occurring in the pediatric age group.",
      "The peak incidence is between 25 and 35 years of age, and there is a slight male predominance.",
    ],
    criteria: [
      "Essential: predominant round cell phenotype; mild nuclear pleomorphism; epithelioid and/or spindle cell components; variably myxoid stroma; immunoprofile with variable CD99 staining and frequent WT1 and ETV4 positivity.",
      "Desirable: demonstration of CIC gene rearrangements.",
    ],
    histology: [
      "CIC-rearranged sarcomas have similar morphological features regardless of the fusion partner.",
      "The tumor exhibits a diffuse or vaguely lobular or nodular architecture.",
      "Tumor cells are round to oval, small to intermediate in size, and exhibit focal spindling.",
      "There can be a moderate degree of nuclear pleomorphism and intratumoral heterogeneity.",
    ],
    ihc: [
      "Immunohistochemistry shows positivity for CD99 (diffuse or patchy, membranous and/or cytoplasmic), WT1 (nuclear with or without cytoplasmic in as many as 95% of cases) and ETV4.",
      "BCOR, NKX2-2, keratin, S100, and myogenic markers are generally negative.",
    ],
    molecular: [
      "CIC gene rearrangements can be detected by a variety of molecular methods , with next-generation sequencing assays being the most sensitive.",
    ],
    differential: [],
    summary:
      "CIC-rearranged sarcomas are high-grade sarcomas composed of primitive round cells harboring rearrangements of the CIC gene (19q13.",
  },
  {
    name: "Sarcoma with BCOR genetic alterations",
    group: "Tumors of Uncertain Differentiation",
    clinical: [
      "Pain (in 65% of cases) and swelling (in 40%) are the most common symptoms of BCOR::CCNB3 sarcoma.",
      "PMMTIs and infantile undifferentiated sarcomas manifest as soft tissue masses of variable size.",
      "Sarcomas with BCOR alterations are uncommon.",
    ],
    criteria: [
      "Essential: primitive round to spindle cells arranged in nests or sheets or with a fascicular growth pattern; variably myxoid stroma with delicate vasculature; immunohistochemical positivity for BCOR, SATB2, and cyclin D1.",
      "Desirable: molecular confirmation of a BCOR genetic abnormality (fusion or ITD).",
    ],
    histology: [
      "BCOR::CCNB3 sarcoma is variably cellular and composed of primitive, small, round to slightly elongated cells with poorly defined eosinophilic cytoplasm, arranged in solid sheets or a vague nesting pattern, surrounded by a rich capillary network.",
      "Less cellular areas can be seen, with plump or spindled discohesive cells in a prominent myxoid matrix rich in thin-walled branching vessels, and with microcystic areas.",
      "Cells arranged in short fascicles reminiscent of poorly differentiated synovial sarcoma (in short, cord-like structures and in clusters) have also been described.",
      "The nuclei have finely dispersed chromatin, and nucleoli are generally inconspicuous.",
    ],
    ihc: [
      "BCOR::CCNB3 sarcoma is variably cellular and composed of primitive, small, round to slightly elongated cells with poorly defined eosinophilic cytoplasm, arranged in solid sheets or a vague nesting pattern, surrounded by a rich capillary network.",
      "BCOR ITD soft tissue tumors (infantile undifferentiated sarcoma and PMMTI) show variable cellularity ranging from solid sheets of small primitive ovoid cells to hypocellular areas of dispersed stellate cells within a myxoid matrix with delicate vasculature.",
      "Immunohistochemically, all sarcomas with BCOR alterations display strong and diffuse nuclear BCOR positivity and in most cases also express SATB2, TLE1, and cyclin D1.",
    ],
    molecular: [
      "BCOR gene rearrangements can be detected by FISH break-apart assays; RT-PCR for BCOR::CCNB3 transcripts can also be performed.",
      "BCOR ITD can be detected by targeted Sanger sequencing or fragment length analysis.",
    ],
    differential: [],
    summary:
      "Sarcomas with BCOR genetic alterations are clinically distinct sarcomas arising in soft tissues and bone, characterized by oncogenic BCOR fusion genes (BCOR fusion sarcomas) or internal tandem duplications (ITDs) in BCOR (BCOR ITD sarcomas).",
  },
  {
    name: "Subungual exostosis",
    group: "Bone Tumors",
    clinical: [
      "Most patients present with painful subungual lesions involving a distal phalanx, of a few months’ to years’ duration.",
      "The toenail may be eroded and elevated at presentation, and ulceration and infection may occur.",
      "On imaging, a small bony protuberance is seen attached to the dorsum or side of a distal phalangeal bone surface, with no continuity between the lesion and the medullary cavity of the native bone.",
    ],
    criteria: [
      "Essential: a small osteocartilaginous lesion on the surface of a distal phalangeal bone, with no continuity between the lesion and the medullary cavity of the underlying bone.",
    ],
    histology: [
      "Subungual exostosis is composed of a central core of trabecular bone surrounded by a thin cap composed of hyaline cartilage and focally by fibrocartilage or fibrous tissue.",
      "A hypertrophic zone is often thin or lacking within the hyaline cartilage, and columniation is poor.",
      "Enchondral ossification with gradual progression to woven and lamellar bone is typically observed; however, the cartilaginous cap may be absent, and bone may form directly from spindle cells.",
      "The cellularity of the cartilage and fibrocartilage is variable and minor focal atypia may be identified, including binucleation and a high N:C ratio.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Subungual exostosis is a benign osteocartilaginous tumor of the bone surface occurring in the distal phalanx of a digit, underlying the nail bed.",
  },
  {
    name: "Bizarre parosteal osteochondromatous proliferation",
    group: "Bone Tumors",
    clinical: [
      "Patients typically present with a painless mass of a few months’ to several years’ duration.",
      "Pain and rapid growth have been reported.",
      "Radiologically, BPOP is a well-marginated ossified mass arising from the cortical bone without periosteal reaction, flaring of the underlying cortex, or corticomedullary continuity with affected bone.",
    ],
    criteria: [
      "Essential: an exophytic bone lesion composed of disorganized, hypercellular cartilage containing atypical chondrocytes, spindle cells, and bone (including characteristic blue bone).",
    ],
    histology: [
      "BPOP is composed of three distinct components with varying degrees of representation: (1) hypercellular cartilage containing frequently enlarged, bizarre, binucleated chondrocytes; (2) cancellous bone undergoing maturation via enchondral ossification, with calcified cartilage having a characteristic basophilic tinctorial quality (known as blue bone); and (3) spindle cell stroma without cytological atypia.",
      "Myxoid and fibrocartilaginous tissue may be seen.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Bizarre parosteal osteochondromatous proliferation (BPOP) is a benign lesion of the bone surface, composed of an admixture of cartilage, bone, and spindle cells.",
  },
  {
    name: "Osteoid osteoma",
    group: "Bone Tumors",
    clinical: [
      "The usual presenting symptom is pain.",
      "At first intermittent and mild with nocturnal exacerbation, the pain eventually becomes relentless to the point of interfering with sleep.",
      "In about 80% of patients, NSAIDs, even in small doses, completely (albeit temporarily) relieve the pain.",
    ],
    criteria: [
      "Essential: radiographic demonstration of a small (< 20 mm) central nidus, often surrounded by reactive sclerosis; histological evidence of a bone-forming tumor composed of microtrabeculae of woven bone rimmed by plump osteoblasts in a vascularized stroma.",
      "Desirable: evident abrupt transition between a central nidus and peripheral sclerotic bone; typical nocturnal pain relieved by NSAIDs.",
    ],
    histology: [
      "The central portion (nidus) of the lesion contains differentiated plump osteoblasts present as a single layer around trabeculae of woven osteoid or mineralized bone.",
      "Vascularized connective tissue, within which are fibroblast-like stromal cells and cells differentiating into osteoblasts, separates the trabeculae.",
      "The osteoid matrix may be microscopically disposed in a sheet-like configuration, but very often it is organized into microtrabecular arrays.",
      "Osteoclasts may also be seen engaging in remodeling.",
    ],
    ihc: [],
    molecular: [
      "FOS gene rearrangement may be found in osteoid osteomas, but it is also found in osteoblastomas and epithelioid hemangiomas.",
    ],
    differential: [],
    summary:
      "Osteoid osteoma is a benign bone-forming tumor characterized by its small size (< 20 mm), limited growth potential, and disproportionate pain that is usually responsive to NSAIDs.",
  },
  {
    name: "Chondromesenchymal hamartoma of the chest wall",
    group: "Bone Tumors",
    clinical: [
      "Infants may be asymptomatic or present with respiratory distress as a result of rib deformation and involvement of the chest cavity.",
      "The mass may be palpable, or it may be detected incidentally on a chest radiograph for an upper respiratory tract infection.",
      "Chondromesenchymal hamartoma of the chest wall is extremely rare, with approximately 100 cases reported in the literature ; it is usually congenital and almost all cases are diagnosed in infants.",
    ],
    criteria: [
      "Essential: a well-defined solid-cystic lesion arising from the rib, composed of hyaline cartilage, blood-filled cystic spaces, woven bone, benign spindle cells, and scattered osteoclastic giant cells.",
      "Desirable: presentation during infancy or early childhood.",
    ],
    histology: [
      "The tumor is composed of nodules of hyaline cartilage, often with enchondral ossification, surrounding blood-filled spaces.",
      "The walls of the cystic spaces contain reactive bone, spindle cells, and osteoclastic giant cells, reminiscent of an aneurysmal bone cyst.",
      "The spindle cells lack cytological atypia and nuclear hyperchromasia.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Chondromesenchymal hamartoma of the chest wall is a benign tumor composed of cartilage, spindle cells, bone, and blood-filled cystic spaces.",
  },
  {
    name: "Osteosarcoma",
    group: "Bone Tumors",
    clinical: [
      "Patients usually present with a painful mass that has been growing for several weeks or months.",
      "The skin overlying the mass may be warm and erythematous.",
      "A pathological fracture through the mass heralds about 15% of cases.",
    ],
    criteria: [
      "Conventional osteosarcoma Essential: a pleomorphic, intramedullary, bone-producing tumor; a permeative/destructive growth pattern; compatible radiographs.",
      "Telangiectatic osteosarcoma Essential: a bone tumor with empty or blood-filled cystic spaces; fibrous septa containing malignant cells.",
      "Small cell osteosarcoma Essential: a bone tumor with small blue round cells; mineralized osteoid.",
      "Parosteal osteosarcoma Essential: a low-grade spindle cell tumor; woven bone formation; surface location; compatible radiographs.",
    ],
    histology: [
      "Conventional osteosarcomas grow in a permeative pattern, replace the marrow space, surround and destroy pre-existing trabeculae, and fill and expand the Haversian systems.",
      "The morphological spectrum of conventional osteosarcoma is broad.",
      "The neoplastic cells may be polygonal, round, epithelioid, plasmacytoid, spindled, fusiform or small.",
      "The cytoplasm is most often eosinophilic but sometimes clear.",
    ],
    ihc: [
      "Immunohistochemical profiling has limited diagnostic value for osteosarcoma because these tumors do not consistently express any specific markers.",
      "However, FOS immunostaining may help differentiate osteoblastomas (which commonly express FOS owing to FOS rearrangement) from osteoblastoma-like osteosarcomas (which do not typically express FOS).",
      "Also, immunostaining for SATB2, which is a very sensitive osteoblastic differentiation marker, can help distinguish small cell osteosarcomas from Ewing sarcomas.",
    ],
    molecular: [
      "No specific diagnostic molecular tests are available.",
      "FISH for detecting MDM2 amplification may help to differentiate parosteal or low-grade central osteosarcomas from their benign mimics.",
    ],
    differential: [],
    summary:
      "Osteosarcoma is a family of primary bone sarcomas formed from bone-producing tumor cells.",
  },
  {
    name: "Chondroblastoma",
    group: "Bone Tumors",
    clinical: [
      "The most common symptom is pain, which may be longstanding.",
      "Local tenderness, joint effusion, impaired movement, and muscle atrophy may be found as presenting symptoms.",
      "Chondroblastomas account for < 1% of all bone tumors.",
    ],
    criteria: [
      "Essential: sheets of chondroblastic cells; islands of eosinophilic chondroid matrix; osteoclast-like giant cells.",
      "Desirable: imaging features compatible with an epiphyseal/apophyseal lesion; H3.",
      "K37M (K36M) immunoreactivity (for confirmation of cases with unusual features).",
    ],
    histology: [
      "Histologically, chondroblastomas are composed of sheets of ovoid to polygonal cells with distinct cytoplasmic borders, grooved nuclei, and eosinophilic cytoplasm.",
      "There are interspersed osteoclast-like giant cells and islands of eosinophilic chondroid matrix.",
      "Basophilic hyaline cartilage is infrequent.",
      "Pericellular lace-like or chicken-wire calcification is a common finding in non-decalcified specimens.",
    ],
    ihc: [
      "Immunohistochemistry using an antibody against H3.",
      "K37M [K36M]) shows diffuse nuclear expression in > 96% of cases and is helpful in small biopsies or in cases with extensive aneurysmal bone cyst–like change.",
      "SOX9, S100, cytokeratin, and DOG1, although not specific, may be positive.",
    ],
    molecular: [
      "The vast majority of chondroblastomas harbor a c.",
      "K37M (K36M) substitution on one of the genes that encode histone H3.",
    ],
    differential: [
      "The differential diagnosis includes aneurysmal bone cyst, giant cell tumor of bone, clear cell chondrosarcoma, chondromyxoid fibroma, Langerhans cell histiocytosis, and an extremely rare subtype of osteosarcoma: chondroblastoma-like osteosarcoma.",
    ],
    summary:
      "Chondroblastoma is a benign tumor of bone that typically affects epiphyseal or apophyseal regions, composed of chondroblastic cells and islands of eosinophilic chondroid matrix.",
  },
  {
    name: "Osteochondroma",
    group: "Bone Tumors",
    clinical: [
      "Osteochondroma can be solitary or multiple as part of the hereditary multiple osteochondromas syndrome.",
      "They develop and increase in size during the first decade of life, and they stop growing at around puberty, when the growth plates close.",
      "Osteochondromas are usually found incidentally.",
    ],
    criteria: [
      "Essential: compatible imaging; a cartilaginous cap (< 20 mm) with a growth plate–like architecture; underlying stalk, the cortex and medulla of which are continuous with underlying bone.",
    ],
    histology: [
      "The tumor has three layers: perichondrium, cartilage, and bone.",
      "The perichondrium is continuous with the periosteum of the underlying bone.",
      "The cartilage cap mimics the growth plate, with disorganized endochondral ossification: the superficial chondrocytes are clustered, whereas the ones close to the bone interface become larger, like the hypertrophic cells of the growth plate.",
      "In children, the cartilaginous cap can be highly cellular, and cellularity decreases with age, sometimes with extensive calcification.",
    ],
    ihc: [],
    molecular: ["Molecular analyses are not required for the diagnosis."],
    differential: [],
    summary:
      "Osteochondroma is a benign cartilaginous neoplasm arising on the surface of bone and consisting of a bony projection covered by a cartilage cap.",
  },
  {
    name: "Chondromyxoid fibroma",
    group: "Bone Tumors",
    clinical: [
      "Pain, usually mild, is the most common symptom and is sometimes present for several years.",
      "Swelling is infrequent and is most commonly observed in the bones of the hands and feet.",
      "Chondromyxoid fibroma is a rare tumor, accounting for approximately 2.",
    ],
    criteria: [
      "Essential: a lytic, metaphyseal, eccentric, lobulated lesion with sharp margins on conventional radiography; zonal architecture (chondroid and stellate cells within a chondroid and/or myxoid matrix in the center of lobules; spindle-shaped myofibroblast-like cells admixed with osteoclast-like giant cells at the periphery).",
    ],
    histology: [
      "Chondromyxoid fibroma is sharply demarcated from the surrounding bone.",
      "Lobules of tumor may be separate from the main lesion.",
      "A lobular pattern with stellate or spindle-shaped cells in a myxoid background is evident.",
      "Lobules demonstrate hypocellular centers with hypercellular peripheries.",
    ],
    ihc: [
      "The cartilaginous nature of this tumor is reflected by immunopositivity for S100.",
    ],
    molecular: [
      "Molecular analysis is generally not needed for diagnosis.",
      "In selected cases, identification of the exceedingly specific upregulation of GRM1 expression in chondromyxoid fibroma could be a strong diagnostic adjunct in distinguishing this entity from its mimics.",
    ],
    differential: [],
    summary:
      "Chondromyxoid fibroma is a benign lobulated neoplasm with a zonal architecture composed of chondroid, myxoid, and myofibroblastic areas.",
  },
  {
    name: "Enchondroma and enchondromatosis",
    group: "Bone Tumors",
    clinical: [
      "Enchondromas of the small bones may cause swellings, pain, and fracture, whereas long bone tumors are often asymptomatic.",
      "Ollier disease is non-hereditary and usually manifests in early childhood.",
      "Maffucci syndrome is also non-hereditary and manifests with cavernous and spindle cell hemangiomas at birth or in early childhood.",
    ],
    criteria: [
      "Essential: an abundance of cartilaginous matrix; an absence of cytological atypia, mitoses, cortical invasion, and soft tissue extension; tumors arising in small bones and/or in patients with enchondromatosis may show more cellularity and atypia.",
    ],
    histology: [
      "Enchondromas are hypocellular tumors with abundant hyaline matrix and a multinodular or confluent architecture.",
      "The cells are embedded within evenly dispersed lacunae.",
      "The cytoplasm is barely visible and the nuclei are small and round with condensed chromatin.",
      "Cytological atypia and mitoses are absent.",
    ],
    ihc: [],
    molecular: ["Molecular pathology is rarely used for diagnosis."],
    differential: [],
    summary:
      "Enchondroma is an intramedullary, benign hyaline cartilaginous neoplasm.",
  },
  {
    name: "Chondrosarcoma",
    group: "Bone Tumors",
    clinical: [
      "Chondrosarcoma is the third most common primary malignancy of bone, usually arising in the fifth to seventh decades of life, with < 5% occurring in patients aged < 18 years.",
      "There appears to be a slight male predominance.",
      "Patients with chondrosarcoma usually experience localized pain in the affected region, and some report soft tissue swelling.",
    ],
    criteria: [
      "Essential: intramedullary localization with cortical erosion or thickening (for central long bone forms); soft tissue extension; mature hyaline cartilage tumor with variable amounts of myxoid matrix and cellularity dependent upon histological grade; presence of mitotic figures among higher-grade tumors; permeation of bone with entrapment of bone trabeculae.",
    ],
    histology: [
      "Conventional chondrosarcoma is a hyaline cartilage neoplasm that may be significantly myxoid but is not associated with osteoid production.",
      "The morphological features depend in part on the histological grade, according to a three-tiered system based predominantly on cellularity, which is inversely related to the quantity and quality of matrix, and (to a lesser extent) on nuclear features.",
      "Mitotic figures are generally only seen in the higher-grade forms.",
      "Björnsson and colleagues reported that among 338 patients of all ages with chondrosarcoma of the pelvic girdles and long bones of the extremities, most examples (61%) were grade 1 lesions, approximately 36% were grade 2, and only 3% were grade 3.",
    ],
    ihc: [],
    molecular: [
      "Molecular analysis is not helpful for the distinction of benign cartilaginous tumors (enchondroma) from chondrosarcoma, because both frequently harbor mutations in the genes encoding the metabolic enzymes IDH1 and (less commonly) IDH2.",
      "However, on rare occasions, the presence of these mutations may help distinguish chondrosarcoma from chondroblastic osteosarcoma, which lacks IDH1 and IDH2 mutations.",
    ],
    differential: [],
    summary:
      "Chondrosarcoma of bone is a malignant intramedullary (central) or surface (peripheral) cartilage-producing neoplasm.",
  },
  {
    name: "Mesenchymal chondrosarcoma",
    group: "Bone Tumors",
    clinical: [
      "Common symptoms are pain and/or swelling.",
      "Lesions of the head and neck may be associated with headaches, visual disturbances, and vomiting.",
      "Radiologically, intraosseous lesions appear lytic, destructive, and permeative, sometimes with soft tissue extension.",
    ],
    criteria: [
      "Essential: an undifferentiated small cell malignancy juxtaposed to mature hyaline cartilage islands.",
      "Desirable: a background staghorn vascular pattern; HEY1::NCOA2 gene fusion.",
    ],
    histology: [
      "The lesion has a characteristic bimorphic pattern, consisting of a hypercellular round to slightly spindled undifferentiated cell population, alternating with islands of benign to low-grade hyaline cartilage.",
      "A background hemangiopericytoma-like vascular pattern is common in these more cellular regions.",
      "Rarely, the stroma may be hyalinized/myxoid, with neoplastic cells arranged as cords and in single file.",
      "Lace-like osteoid is generally absent, although bone formation may occur, mimicking osteosarcoma.",
    ],
    ihc: [
      "The undifferentiated cells typically exhibit strong membranous CD99 and nuclear NKX2-2 immunoexpression, but they also may display aberrant desmin and myogenin positivity.",
    ],
    molecular: [
      "The vast majority of mesenchymal chondrosarcomas contain a relatively specific gene fusion between HEY1 (8q21.",
      "3), which are separated by only 10 Mb on chromosome 8.",
    ],
    differential: [],
    summary:
      "Mesenchymal chondrosarcoma is a biphasic, high-grade sarcoma composed of primitive undifferentiated cells admixed with islands of well-differentiated hyaline cartilage.",
  },
  {
    name: "Vascular tumors of bone",
    group: "Bone Tumors",
    clinical: [
      "hemangiomas in children are usually symptomatic and manifest with pain and pathological fracture; tumors in the axial skeleton may cause neurological symptoms.",
      "Gorham–Stout syndrome is a rare, non-hereditary disorder, in which lesions are often composed of lymphatic-like vessels, that tends to involve one bone but readily crosses joints to involve adjacent bones, resulting in progressive bony destruction over the course of months.",
      "It may be associated with lesions in the soft tissues and thoracic cavity and as a component of a generalized lymphatic anomaly.",
    ],
    criteria: [
      "Essential: for hemangioma: compatible imaging; thin-walled blood vessels lined by a single layer of bland endothelial cells; for EH: large epithelioid endothelial cells with densely eosinophilic cytoplasm and evidence of vasoformation with tombstone pattern; for EHE: cords and nests of epithelioid cells within a myxohyaline stroma lacking vasoformation, with an endothelial immunophenotype; well-formed vascular…",
      "Desirable: for EHE: CAMTA1 expression by immunohistochemistry and/or WWTR1::CAMTA1 fusion; TFE3 overexpression by immunohistochemistry and/or TFE3 gene rearrangement.",
    ],
    histology: [
      "hemangiomas have a lobular architecture and are composed of thin-walled, blood-filled, capillary-like vessels lined by a single layer of flat, uniform, cytologically bland endothelial cells.",
      "Some tumors are cellular, and the endothelial cells are plump and obscure the lumina.",
      "EH is a lobulated lesion composed of epithelioid cells that line well-formed vascular spaces and grow in cords, aggregates, and sheets.",
      "The tumor cells are large and polyhedral, with oval or kidney bean–shaped nuclei that may be hyperlobated, cleaved, and grooved.",
    ],
    ihc: [
      "Endothelial markers (CD31, CD34, ERG, FLI1) are expressed.",
      "Keratin and EMA are often positive in EH and EHE.",
    ],
    molecular: [
      "FOS or FOSB rearrangements can be detected in the majority of EHs of bone.",
      "WWTR1::CAMTA1 fusion can be detected in 89–100% of EHEs with classic histological features, whereas YAP1::TFE3 fusions are found in < 5% of cases with distinct histology.",
    ],
    differential: [],
    summary:
      "hemangioma is a benign endothelial tumor of bone composed of vascular channels of varying caliber.",
  },
  {
    name: "Aneurysmal bone cyst",
    group: "Bone Tumors",
    clinical: [
      "The most common signs and symptoms are pain and swelling, which are rarely due to fracture.",
      "In the vertebrae, ABC can compress nerves or the spinal cord and cause neurological symptoms.",
      "ABC affects patients of all ages, but 80% of cases occur during the first two decades of life.",
    ],
    criteria: [
      "Essential: a multicystic lesion with fluid-fluid levels on imaging; histology showing a cyst wall composed of fibroblasts, osteoclast-like giant cells, hemosiderin, and new bone formation.",
      "Desirable: demonstration of USP6 rearrangement.",
    ],
    histology: [
      "ABC contains blood-filled cystic spaces separated by fibrous septa.",
      "The fibrous septa are composed of a moderately dense cellular proliferation of bland fibroblasts, with scattered osteoclast-type giant cells and reactive woven bone rimmed by osteoblasts.",
      "The woven bone frequently follows the contours of the fibrous septa.",
      "Mitoses are present and can be numerous; however, atypical mitoses are absent.",
    ],
    ihc: [],
    molecular: [
      "USP6 rearrangement in ABC can be detected by FISH.",
      "The percentage of lesional cells carrying the rearrangement can sometimes be low.",
    ],
    differential: [],
    summary:
      "Aneurysmal bone cyst (ABC) is a benign neoplasm of bone containing multiloculated blood-filled cystic spaces.",
  },
  {
    name: "Giant cell tumor of bone",
    group: "Bone Tumors",
    clinical: [
      "GCTB manifests with pain, swelling, and occasionally restricted joint movement, lasting weeks to months.",
      "GCTB represents 4–5% of all primary bone tumors and 20% of benign bone tumors.",
      "Although the peak incidence is between the ages of 20 and 45 years, approximately 10% of cases occur in the second decade of life.",
    ],
    criteria: [
      "Essential: compatible imaging; an osteolytic circumscribed tumor involving the epiphysis, generally in a skeletally mature individual; numerous large osteoclasts with a mononuclear cell neoplastic component without atypia.",
    ],
    histology: [
      "GCTB is a highly cellular lesion dominated by numerous non-neoplastic, osteoclast-like giant cells with intermingled mononuclear cells.",
      "The giant cells have a variable number of nuclei, some with > 50 per cell.",
      "The neoplastic mononuclear cells have a variety of morphological appearances, including round to oval cells in a non-fibrotic background and spindled cells associated with a fibrous matrix.",
      "Atypical mitoses should raise suspicion for malignancy.",
    ],
    ihc: [
      "Histone H3 G34W immunohistochemistry is a reliable surrogate marker for underlying H3-3A:c.",
    ],
    molecular: [
      "H3-3A gene mutation is detected in the neoplastic stromal cells in about 96% of GCTBs ; 90% of these are the H3-3A:c.",
    ],
    differential: [],
    summary:
      "Giant cell tumor of bone (GCTB) is a locally aggressive, rarely metastasizing neoplasm composed of neoplastic mononuclear stromal cells admixed with macrophages and osteoclast-like giant cells.",
  },
  {
    name: "Non-ossifying fibroma",
    group: "Bone Tumors",
    clinical: [
      "NOF arises in skeletally immature individuals, with a peak incidence in the second decade of life.",
      "Although usually asymptomatic and discovered incidentally, larger tumors can be painful (probably related to microfractures) and/or cause pathological fracture.",
      "Although the true incidence of NOF is unknown, it is estimated to occur in 30–40% of children, rendering it the most common tumor of bone.",
    ],
    criteria: [
      "Essential: a bone tumor with compatible imaging findings.",
      "Desirable: storiform proliferation of plump spindle cells; metaphyseal location in long bones in skeletally immature patients; intermingled giant cells, hemosiderophages, and clusters of foamy histiocytes.",
    ],
    histology: [
      "Tumors consist of bland, spindle-shaped cells that are arranged in a storiform growth pattern.",
      "Osteoclast-type giant cells are scattered throughout the lesion.",
      "Reactive features include hemosiderin deposition and collections of foamy macrophages.",
      "Reactive woven bone formation and cystic change may occur focally.",
    ],
    ihc: [],
    molecular: [
      "KRAS and FGFR1 mutation testing can be considered in ambiguous cases.",
    ],
    differential: [],
    summary:
      "Non-ossifying fibroma (NOF) is a benign and generally self-limiting spindle cell tumor of bone, containing osteoclast-like giant cells.",
  },
  {
    name: "Notochordal tumors",
    group: "Bone Tumors",
    clinical: [
      "Patients with chordomas most commonly present with pain and site-related neurological symptoms.",
      "On imaging, chordoma is typically a lytic, destructive lesion arising in the midline.",
      "It grows slowly, expanding the bone, and is frequently associated with a large soft tissue mass.",
    ],
    criteria: [
      "Essential: for BNCT: compatible imaging; notochordal differentiation without atypia; typical immunoprofile; for conventional chordoma: compatible imaging; physaliphorous cells with myxoid matrix; typical immunoprofile; for poorly differentiated chordoma: compatible imaging; a poorly differentiated malignant neoplasm with typical immunoprofile plus loss of SMARCB1 expression; for dedifferentiated chordoma:…",
    ],
    histology: [
      "BNCTs consist of solid sheets of adipocyte-like cells with bland nuclei.",
      "Cystic spaces filled with colloid-like material may be present.",
      "The involved bone is viable and mildly remodeled.",
      "BNCTs lack a lobular architecture, fibrous septa, capsule, myxoid matrix, and tumor vasculature.",
    ],
    ihc: [
      "Notochordal tumors, except the dedifferentiated component, express cytokeratin and brachyury.",
      "There is variable expression of S100 and EMA.",
      "Loss of SMARCB1 (INI1) expression is seen in poorly differentiated chordoma.",
    ],
    molecular: [
      "Deletion in SMARCB1 can be detected by FISH in poorly differentiated chordoma.",
    ],
    differential: [],
    summary:
      "Notochordal tumors are a group of neoplasms with variable clinical behavior ranging from benign to highly malignant, usually arising in bones of the axial skeleton with a phenotype that recapitulates the notochord.",
  },
  {
    name: "Simple bone cyst",
    group: "Bone Tumors",
    clinical: [
      "Symptoms associated with SBC are pain, swelling, limitation of motion, and pathological fracture.",
      "SBCs affect patients during the first two decades of life.",
      "SBCs generally arise in the appendicular skeleton (proximal humerus: 50%, proximal femur: 25%) and rarely in the pelvis, calcaneus, or acral bones.",
    ],
    criteria: [
      "Essential: a simple, usually unilocular, fibrous-walled cyst.",
      "Desirable: fibrin-like deposits that may organize and mineralize, resulting in cementum-like structures.",
    ],
    histology: [
      "SBC is composed of a thin wall of fibrous tissue.",
      "Fibrin-like collagenous deposits can be seen on the cyst surface and within the wall, often mineralized and organized in cementum-like structures; chronic inflammation, multinucleated giant cells, hemosiderin, cholesterol clefts, and reactive woven bone can also be present, especially if there has been a pathological fracture.",
    ],
    ihc: [],
    molecular: [],
    differential: [],
    summary:
      "Simple bone cyst (SBC) is an intramedullary, usually unilocular, cystic bone lesion filled with serous or serosanguineous fluid.",
  },
  {
    name: "Adamantinoma",
    group: "Bone Tumors",
    clinical: [
      "Adamantinoma causes pain, swelling, or bowing deformity.",
      "At imaging, adamantinoma appears as an intracortical, well-circumscribed, multilobulated lytic lesion, with a soap-bubble appearance.",
      "Multifocality, involvement of the medullary cavity, and cortical destruction with infiltration into the soft tissues can occur.",
    ],
    criteria: [
      "Essential: for OFD-like adamantinoma: histology similar to that of OFD but with inconspicuous clusters of epithelial cells embedded within fibrous stroma; almost exclusively in the tibia and/or fibula, always involving cortex; for classic adamantinoma: epithelial malignancy with variable morphology arising within a fibro-osseous stromal background; almost exclusively in the tibia and/or fibula, always involving…",
      "Desirable: for OFD-like adamantinoma: may extend into the medullary cavity or adjacent soft tissues; for classic adamantinoma: often extends into the medullary cavity or adjacent soft tissues; variable morphology of epithelial component.",
    ],
    histology: [
      "OFD-like adamantinoma morphologically overlaps with OFD but contains clusters of epithelial cells readily identifiable by H&E.",
      "Classic adamantinoma is dominated by epithelial elements, with only a minor OFD component.",
      "Epithelial cells in classic adamantinoma may be tubular, squamous, basaloid, or spindle-shaped.",
      "Dedifferentiated adamantinoma shows areas of classic adamantinoma merging with a high-grade sarcoma.",
    ],
    ihc: [
      "Epithelial cells are positive in both subtypes for cytokeratin (typically CK14, CK19, CK5, and CK17) , as well as for p63.",
    ],
    molecular: [],
    differential: [],
    summary:
      "Adamantinoma is a biphasic, locally aggressive or malignant tumor characterized by an epithelial neoplastic component within a bland osteofibrous background.",
  },
  {
    name: "Osteofibrous dysplasia",
    group: "Bone Tumors",
    clinical: [
      "OFD can cause pain, swelling, or bowing deformity.",
      "OFD is an extremely rare bone tumor, accounting for 0.",
      "OFD typically affects patients in the first two decades of life (rarely those aged > 15 years).",
    ],
    criteria: [
      "Essential: imaging consistent with OFD; almost exclusive involvement of the cortex of the tibia and/or fibula; a fibro-osseous tumor with prominent osteoblastic rimming of irregular trabeculae of woven bone; absent/single cytokeratin-positive cells.",
    ],
    histology: [
      "OFD shows irregular trabeculae of woven bone with prominent osteoblastic rimming surrounded by a fibrous stroma similar to that of fibrous dysplasia.",
      "Towards the periphery of the lesion, the woven bone typically merges with pre-existing lamellar bone, giving the tumor a zonal architecture.",
    ],
    ihc: [
      "OFD may show scattered single cells positive for cytokeratin (typically CK14, CK19, CK5, and CK17) , p63, and S100.",
    ],
    molecular: [],
    differential: [
      "Compared with OFD, fibrous dysplasia displays a highly cellular and collagenous stroma with woven bone lacking prominent osteoblastic rimming; immunohistochemically, keratin-positive epithelial cells are absent.",
      "GNAS gene mutations, present in most cases of fibrous dysplasia, are absent in OFD.",
      "The distinction of OFD from OFD-like adamantinoma depends on the more prominent extent of the epithelial component in OFD-like adamantinoma.",
    ],
    summary:
      "Osteofibrous dysplasia (OFD) is a benign fibro-osseous tumor of long bone that typically arises in the anterior cortex of the tibia and/or fibula during childhood.",
  },
  {
    name: "Fibrous dysplasia",
    group: "Bone Tumors",
    clinical: [
      "Osseous deformity with associated pain and pathological fractures can occur in fibrous dysplasia; rare cases produce excess FGF23, causing paraneoplastic osteomalacia.",
      "In McCune–Albright syndrome, fibrous dysplasia is associated with endocrinopathies and abnormalities of cutaneous pigmentation; in Mazabraud syndrome it is associated with intramuscular myxomas.",
      "Fibrous dysplasia appears in standard radiographs as a well-defined, non-aggressive geographical lesion with a ground-glass matrix; in the proximal femur, shepherd’s crook deformity is characteristic.",
    ],
    criteria: [
      "Essential: a fibro-osseous lesion consisting of variable amounts of irregular curvilinear trabeculae of woven bone without osteoblastic rimming embedded within a fibrous component composed of bland fibroblastic cells and abundant collagenous stroma.",
      "Desirable: activating missense mutations in GNAS (p.",
    ],
    histology: [
      "Fibrous dysplasia is composed of a variably cellular proliferation of bland fibroblastic cells with irregular curvilinear trabeculae of woven or (rarely) lamellar bone without conspicuous osteoblastic rimming.",
      "Rounded psammomatous calcifications resembling cementum are much more often seen in craniofacial lesions than in appendicular lesions.",
      "Nodules of benign hyaline cartilage (also with endochondral ossification), degenerative aneurysmal bone cyst–like changes, and/or fibrohistiocytic replacement with numerous foam cells (mimicking fibroxanthoma) can be seen.",
    ],
    ihc: [],
    molecular: [
      "The detection of GNAS mutations can be useful to confirm a diagnosis of fibrous dysplasia.",
    ],
    differential: [],
    summary:
      "Fibrous dysplasia is a benign intramedullary fibro-osseous neoplasm that can be multifocal and is characterized by distorted, poorly organized, and inadequately mineralized woven bone and intervening fibrous tissue.",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, i) => (
          <li key={`${i}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function PediatricSoftTissueBoneTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const text = [
          e.name,
          e.group,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.molecular,
          ...e.differential,
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          text.includes(query.toLowerCase())
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
  const expandAll = () =>
    setExpanded(
      expanded.length === filtered.length ? [] : filtered.map((e) => e.name),
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Pediatric Soft Tissue and Bone Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference covering pediatric mesenchymal
          tumors, vascular lesions, peripheral nerve sheath tumors, round cell
          sarcomas, and primary bone tumors. Emphasis is placed on defining
          morphology, immunophenotype, and diagnostically relevant molecular
          alterations.
        </p>
      </header>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Browse the major diagnostic groups represented in this pediatric
            soft tissue and bone tumor chapter.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Diagnostic group</th>
                <th className="px-4 py-3">Entities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {groups
                .filter((g) => g !== "All groups")
                .map((g) => (
                  <tr key={g}>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {g}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {entities
                        .filter((e) => e.group === g)
                        .map((e) => e.name)
                        .join("; ")}
                    </td>
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
            <strong>1. Establish the anatomic and radiologic context.</strong>{" "}
            Determine soft tissue versus bone origin, compartment, depth,
            relationship to fascia, tendon, nerve, and growth plate, and whether
            the lesion is circumscribed or infiltrative.
          </li>
          <li>
            <strong>2. Identify the line of differentiation.</strong> Assess
            adipocytic, fibroblastic/myofibroblastic, vascular, smooth or
            skeletal muscle, neural, myxoid, and round cell patterns.
          </li>
          <li>
            <strong>
              3. Apply a morphology-directed immunohistochemical panel.
            </strong>{" "}
            Use lineage markers to confirm differentiation and exclude major
            mimics; interpret staining in the context of architecture and
            cytology.
          </li>
          <li>
            <strong>
              4. Use molecular testing to resolve defined entities.
            </strong>{" "}
            Prioritize entity-associated fusions, mutations, or amplifications
            when morphology and immunophenotype indicate a specific
            differential.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, morphology, markers, or genes..."
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
          onClick={expandAll}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === filtered.length && filtered.length > 0
            ? "Collapse all"
            : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          const peers = entities.filter(
            (peer) => peer.group === entity.group && peer.name !== entity.name,
          );
          const explicitDifferentials = entity.differential;
          const peerDifferentials = peers.map((peer) => ({
            name: peer.name,
            distinction:
              peer.criteria[0] ||
              peer.summary ||
              "Compare the defining morphology and immunophenotype.",
          }));
          const allDifferentials = [
            ...explicitDifferentials.map((d) => ({
              name: "Additional differential considerations",
              distinction: d,
            })),
            ...peerDifferentials,
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
                    {entity.summary}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
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
                      <div className="space-y-2">
                        {allDifferentials.map((d, i) => (
                          <div
                            key={`${d.name}-${i}`}
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
                    <Section
                      title="Molecular Pathology"
                      items={entity.molecular}
                    />
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
        Diagnostic interpretation should integrate clinical history, imaging,
        anatomic site, age, and appropriate molecular studies. For suspected
        sarcoma, representative sampling and multidisciplinary review are
        essential.
      </footer>
    </main>
  );
}
