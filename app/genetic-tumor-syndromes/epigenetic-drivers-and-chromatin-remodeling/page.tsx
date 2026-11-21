"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  pathway: string;
  genes: string;
  inheritance: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  differential: string[];
  molecular: string[];
};

const pathways = [
  {
    name: "Genomic imprinting at 11p15",
    genes: "IGF2, CDKN1C, KCNQ1OT1, H19",
    function:
      "Parent-of-origin-specific DNA methylation and long noncoding RNAs regulate monoallelic expression of growth-control genes. IGF2 is normally expressed from the paternal allele, whereas CDKN1C and H19 are normally expressed from the maternal allele; KCNQ1OT1 is a paternally expressed long noncoding RNA.",
    mechanism:
      "Abnormal methylation, copy-number change, paternal uniparental disomy, or a pathogenic CDKN1C variant disrupts parent-specific expression. Increased IGF2 dosage and/or reduced maternal CDKN1C expression promotes fetal and postnatal overgrowth and embryonal tumor risk. Many abnormalities are mosaic.",
    syndromes:
      "Beckwith–Wiedemann spectrum, with tumor risk varying by molecular subtype.",
  },
  {
    name: "Oncometabolite-driven epigenetic dysregulation",
    genes: "IDH1, IDH2",
    function:
      "Wild-type IDH1 and IDH2 encode metabolic enzymes involved in isocitrate metabolism. Their normal activity contributes to cellular metabolic and redox homeostasis.",
    mechanism:
      "Postzygotic mosaic gain-of-function variants, most often IDH1 p.Arg132 substitutions, produce the oncometabolite D-2-hydroxyglutarate (D-2-HG). D-2-HG inhibits α-ketoglutarate-dependent dioxygenases, altering DNA and histone methylation and favoring chondrogenic over osteogenic differentiation.",
    syndromes:
      "Ollier disease and Maffucci syndrome. These are generally nonhereditary mosaic disorders, distinct from inherited metachondromatosis.",
  },
  {
    name: "SWI/SNF ATP-dependent chromatin remodeling",
    genes: "SMARCB1, SMARCA4, SMARCE1, PBRM1",
    function:
      "SWI/SNF complexes use ATP to reposition nucleosomes and regulate access of transcriptional machinery to genomic DNA. Different subunits contribute to distinct SWI/SNF complexes and tissue-specific transcriptional programs.",
    mechanism:
      "Tumor-suppressor inactivation can impair chromatin remodeling and alter cell-cycle, differentiation, and Polycomb signaling. In rhabdoid tumor predisposition, SMARCB1 or SMARCA4 is commonly subject to a two-hit mechanism. SMARCB1-associated schwannomatosis has a distinct multi-hit interaction with chromosome 22 and NF2.",
    syndromes:
      "Rhabdoid tumor predisposition syndrome, SMARCB1- or LZTR1-related schwannomatosis, and SMARCE1-related clear cell meningioma predisposition. PBRM1 is a SWI/SNF gene associated with hereditary renal cell carcinoma but not with rhabdoid tumor predisposition syndrome.",
  },
  {
    name: "PRC2-mediated histone methylation",
    genes: "EZH2, EED, SUZ12",
    function:
      "Polycomb repressive complex 2 (PRC2) establishes repressive histone methylation, particularly H3K27 methylation, to regulate developmental gene expression and maintain cell identity.",
    mechanism:
      "Weaver syndrome is associated with partial loss of EZH2 function, reducing PRC2 methyltransferase activity and altering H3K27 methylation and the epigenome-wide expression program. Postzygotic mosaic variants may produce variable phenotypes. EZH2 gain-of-function variants associated with an undergrowth phenotype represent a distinct molecular and clinical entity.",
    syndromes: "Weaver syndrome / EZH2-related overgrowth.",
  },
];

const entities: Entity[] = [
  {
    name: "Beckwith–Wiedemann spectrum",
    pathway: "Genomic imprinting at 11p15",
    genes: "IGF2, CDKN1C, KCNQ1OT1, H19; 11p15.5/11p15.4",
    inheritance:
      "Mechanistically heterogeneous. Most cases are sporadic epigenetic or mosaic events; CDKN1C pathogenic variants may be inherited in an autosomal dominant pattern with parent-of-origin effects. Recurrence risk depends on the underlying molecular mechanism.",
    clinical: [
      "Overgrowth phenotype in infancy or early childhood: macrosomia, macroglossia, abdominal wall defects, visceromegaly, and lateralized overgrowth/hemihyperplasia.",
      "The phenotype is variable; children with low-level somatic mosaicism may have subtle findings and may first come to attention because of an embryonal tumor.",
      "Major associated tumors include Wilms tumor/nephroblastoma and hepatoblastoma; neuroblastoma and adrenocortical carcinoma are less common associations.",
      "Tumor risk is molecular-subtype dependent: IC1 gain of methylation and paternal uniparental disomy carry higher childhood tumor risk, whereas IC2 loss of methylation generally carries the lowest risk.",
      "CDKN1C pathogenic variants are particularly associated with neuroblastoma risk.",
    ],
    criteria: [
      "Establish the clinical overgrowth phenotype and assess the characteristic features, including macroglossia, abdominal wall defects, lateralized overgrowth, and visceromegaly.",
      "Demonstrate an 11p15 imprinting abnormality, copy-number alteration, paternal uniparental disomy, or a pathogenic CDKN1C variant when molecular confirmation is pursued.",
      "A negative blood test does not exclude the diagnosis because the causal alteration may be mosaic and enriched in affected tissues.",
      "Tumor presentation with subtle or absent classic features should prompt consideration of the spectrum, particularly in children with lateralized overgrowth or multiple embryonal lesions.",
    ],
    morphology: [
      "Associated tumors generally resemble their sporadic counterparts; the syndromic diagnosis is based on clinical and molecular context rather than a unique tumor morphology.",
      "Perilobar nephrogenic rests may be present in kidneys of affected infants and young children and are considered precursor lesions for Wilms tumor.",
      "Medullary ray nodules may also be seen in kidneys associated with Wilms tumor in this setting.",
    ],
    ihc: [
      "No tumor IHC profile independently establishes Beckwith–Wiedemann spectrum.",
      "IHC should be selected for the specific tumor diagnosis; imprinting status requires methylation and/or molecular analysis.",
    ],
    differential: [
      "Other overgrowth syndromes (Sotos, Weaver, Simpson–Golabi–Behmel, Perlman, and Malan): distinguish by characteristic dysmorphism, developmental profile, associated anomalies, and germline testing.",
      "PIK3CA-related overgrowth spectrum: often shows segmental or asymmetric overgrowth; confirm by detecting a postzygotic PIK3CA variant, preferably in affected tissue.",
      "Isolated hemihyperplasia: evaluate for an underlying 11p15 abnormality when the phenotype or tumor history suggests Beckwith–Wiedemann spectrum.",
    ],
    molecular: [
      "Perform methylation analysis of the 11p15 imprinting control regions: IC1/H19-IGF2 and IC2/KCNQ1OT1.",
      "Assess copy number and allelic composition at 11p15.5/11p15.4, including paternal uniparental disomy and deletions/duplications.",
      "Sequence CDKN1C when indicated by the phenotype or family history.",
      "Because mosaicism is common, consider testing buccal cells, skin, mesenchymal tissue, or tissue from an affected region when blood testing is negative or inconclusive.",
      "Interpret methylation subtype in the context of tumor risk; a methylation abnormality is not interchangeable with a CDKN1C sequence variant.",
    ],
  },
  {
    name: "Ollier disease and Maffucci syndrome",
    pathway: "Oncometabolite-driven epigenetic dysregulation",
    genes: "IDH1 (most often p.Arg132), IDH2 (rarely p.Arg172)",
    inheritance:
      "Usually nonhereditary, caused by postzygotic somatic mosaicism. The same IDH variant may be found in multiple lesions and at low variant allele fractions in non-neoplastic tissue. This is not a conventional germline autosomal dominant syndrome.",
    clinical: [
      "Multiple enchondromas usually become apparent in early childhood and produce bone expansion, deformity, limb-length discrepancy, and occasionally pathologic fracture.",
      "Lesions predominantly involve the metaphyses of short and long tubular bones; distribution is often asymmetric or predominantly unilateral.",
      "Ollier disease is characterized by multiple enchondromas without the characteristic vascular lesions of Maffucci syndrome.",
      "Maffucci syndrome combines enchondromatosis with vascular lesions, particularly spindle cell hemangiomas and cavernous hemangiomas in skin, soft tissue, or viscera.",
      "Both disorders carry increased risk of secondary central chondrosarcoma; Ollier disease is also associated with gliomas and juvenile granulosa cell tumors.",
    ],
    criteria: [
      "Radiographic and clinical demonstration of multiple enchondromas (at least two) causing bone expansion, symptoms, or deformity supports enchondromatosis.",
      "The presence of multiple vascular lesions, especially spindle cell hemangiomas, supports Maffucci syndrome rather than Ollier disease.",
      "Molecular confirmation of a postzygotic IDH1 or IDH2 variant in an enchondroma, chondrosarcoma, or vascular lesion supports mosaic pathogenesis but is not required for the clinical-radiologic diagnosis.",
      "In enchondromatosis, increased cartilage cellularity and nuclear atypia alone are insufficient to diagnose atypical cartilaginous tumor or grade 1 chondrosarcoma; correlate with imaging, especially cortical destruction and soft-tissue extension.",
    ],
    morphology: [
      "Enchondromas are well-circumscribed intramedullary cartilaginous nodules; periosteal lesions resemble periosteal chondroma.",
      "Cartilage may be hypercellular with enlarged, irregular nuclei and myxoid matrix; these findings can occur in benign lesions in the setting of enchondromatosis.",
      "Spindle cell hemangioma is an important associated vascular lesion in Maffucci syndrome and may recur locally but does not have metastatic potential.",
      "New growth, cortical destruction, or soft-tissue extension in an adult lesion raises concern for secondary chondrosarcoma.",
    ],
    ihc: [
      "No IHC stain reliably distinguishes benign enchondroma from secondary chondrosarcoma in this syndrome; radiologic and clinical correlation is essential.",
      "IDH1 R132H IHC may detect a subset of IDH1-mutant lesions but does not detect all IDH1 variants and is not a substitute for sequencing.",
      "Use vascular-lineage markers as appropriate to classify associated vascular lesions; they do not establish the underlying mosaic syndrome.",
    ],
    differential: [
      "Metachondromatosis: inherited disorder associated with PTPN11; lesions include enchondromas and osteochondroma-like lesions, often in hands and feet, with lesions tending to point toward the epiphysis and frequently regressing in adulthood.",
      "Spondyloenchondrodysplasia: associated with ACP5 and has a distinct skeletal and systemic phenotype.",
      "Multiple sporadic enchondromas: consider the characteristic asymmetric distribution and associated vascular lesions when distinguishing from a syndromic mosaic process.",
      "Secondary central chondrosarcoma: assess adult growth, pain, cortical destruction, and soft-tissue extension; atypia alone is not sufficient in Ollier/Maffucci lesions.",
    ],
    molecular: [
      "Sequence IDH1 and IDH2 in lesional tissue; IDH1 p.Arg132 substitutions predominate, particularly p.Arg132Cys, with p.Arg132His and other substitutions also reported.",
      "IDH2 variants are uncommon; p.Arg172 substitutions have been reported.",
      "Identical IDH variants in anatomically separate lesions support a shared postzygotic mosaic event.",
      "Variant detection in affected tissue is more sensitive than testing blood; low-level variant detection in nonlesional tissue may occur.",
      "Mutant IDH produces D-2-hydroxyglutarate, which inhibits α-ketoglutarate-dependent enzymes and alters DNA/histone methylation, contributing to abnormal chondrogenic differentiation.",
    ],
  },
  {
    name: "Rhabdoid tumor predisposition syndrome",
    pathway: "SWI/SNF chromatin remodeling",
    genes: "SMARCB1 (RTPS1); SMARCA4 (RTPS2)",
    inheritance:
      "Autosomal dominant cancer predisposition due to a germline pathogenic variant, frequently de novo. Postzygotic mosaicism and gonadal mosaicism are documented. Tumor development typically requires a second inactivating event in the remaining functional allele.",
    clinical: [
      "RTPS1 (SMARCB1) most often presents in infancy or early childhood with atypical teratoid/rhabdoid tumor (AT/RT), renal malignant rhabdoid tumor, or extrarenal malignant rhabdoid tumor.",
      "Synchronous, multifocal, or metachronous primary rhabdoid tumors, particularly in different anatomic sites, strongly suggest a germline predisposition.",
      "RTPS2 (SMARCA4) is strongly associated with small cell carcinoma of the ovary, hypercalcemic type (SCCOHT), typically in adolescents and young adults; CNS tumors are less common.",
      "A young child with a rhabdoid tumor at any site warrants consideration of germline SMARCB1 testing; bilateral renal malignant rhabdoid tumors are particularly compelling.",
      "Survivors remain at risk for subsequent primary tumors, supporting long-term surveillance.",
    ],
    criteria: [
      "A pathogenic germline SMARCB1 variant in a patient with AT/RT or malignant rhabdoid tumor establishes RTPS1.",
      "A pathogenic germline SMARCA4 variant in a patient with SCCOHT or an appropriate rhabdoid tumor establishes RTPS2.",
      "Loss of nuclear SMARCB1 or SMARCA4 in tumor cells supports the corresponding tumor classification but does not distinguish germline predisposition from a sporadic tumor.",
      "Multiple rhabdoid tumors, very early onset, or affected siblings/relatives should prompt constitutional testing, including assessment for mosaicism.",
    ],
    morphology: [
      "Malignant rhabdoid tumors and AT/RTs show rhabdoid cytology, but morphology alone does not establish a hereditary syndrome.",
      "SCCOHT is a distinct aggressive ovarian neoplasm associated with SMARCA4 deficiency; evaluate in the appropriate age and clinical setting.",
      "Rhabdoid morphology in other CNS tumors does not necessarily indicate AT/RT; many composite rhabdoid tumors retain SMARCB1 expression.",
    ],
    ihc: [
      "RTPS1-associated and sporadic SMARCB1-deficient rhabdoid tumors show loss of nuclear INI1 (SMARCB1) in tumor cells, with retained staining in internal non-neoplastic controls.",
      "RTPS2/SCCOHT commonly shows loss of nuclear BRG1 (SMARCA4); correlate with morphology and molecular findings.",
      "Complete tumor-cell loss of INI1 or BRG1 is a tumor-classification clue, not proof of a germline alteration.",
    ],
    differential: [
      "Other SMARCB1-deficient neoplasms (e.g., epithelioid sarcoma and selected myoepithelial or nerve-sheath tumors): integrate site, morphology, clinical age, and molecular context; not all are RTPS-associated.",
      "CNS tumors with rhabdoid features but retained INI1: consider other tumor entities with secondary rhabdoid morphology rather than classic AT/RT.",
      "SCCOHT versus other small-cell ovarian neoplasms: use clinical setting, morphology, BRG1 IHC, and molecular confirmation.",
      "Sporadic rhabdoid tumor: tumor suppressor loss may be entirely somatic; constitutional testing is needed to establish predisposition.",
    ],
    molecular: [
      "Perform germline SMARCB1 or SMARCA4 sequencing plus deletion/duplication and structural-variant analysis.",
      "Tumor profiling should assess biallelic inactivation, including sequence variants, copy-number loss, and loss of heterozygosity.",
      "SMARCB1 tumorigenesis commonly follows a two-hit tumor-suppressor model; the second event is often deletion or loss of heterozygosity.",
      "SMARCB1-associated AT/RTs can be classified into molecular groups (AT/RT-TYR, AT/RT-SHH, and AT/RT-MYC); SMARCA4-altered AT/RT is a distinct, less common group.",
      "When blood testing is negative despite strong clinical suspicion, consider mosaicism and testing of another normal tissue; distinguish constitutional variants from tumor-only alterations.",
    ],
  },
  {
    name: "SMARCB1- and LZTR1-related schwannomatosis",
    pathway:
      "SWI/SNF chromatin remodeling / chromosome 22 tumor-suppressor pathway",
    genes: "SMARCB1, LZTR1; tumor-associated NF2 alterations",
    inheritance:
      "Familial cases show autosomal dominant inheritance with incomplete penetrance; most cases are sporadic. Segmental distribution may reflect mosaicism. Tumors typically acquire additional somatic events involving chromosome 22 and NF2.",
    clinical: [
      "Multiple schwannomas involving spinal nerve roots, peripheral nerves, and less often cranial nerves; unilateral vestibular schwannoma can occur, particularly with LZTR1-related disease.",
      "Severe chronic pain is characteristic; major neurologic deficits and polyneuropathy are less common than in NF2-related schwannomatosis.",
      "Segmental distribution of tumors occurs in a subset and may reflect mosaic disease.",
      "A minority of patients develop meningiomas; multiple meningiomas, including falcine lesions, are reported with SMARCB1-related disease.",
      "A unilateral vestibular schwannoma does not by itself establish NF2-related schwannomatosis; LZTR1-related disease is an important differential.",
    ],
    criteria: [
      "Establish the presence and distribution of multiple schwannomas and integrate clinical findings with updated molecular diagnostic criteria.",
      "Identify a pathogenic germline SMARCB1 or LZTR1 variant when assigning the corresponding molecular subtype.",
      "If blood testing is negative, evaluate tumor tissue and chromosome 22 alterations; some cases remain schwannomatosis not elsewhere classified.",
      "Distinguish NF2-related schwannomatosis, including mosaic NF2, because clinical overlap can be substantial.",
    ],
    morphology: [
      "Most lesions are conventional schwannomas; hybrid schwannoma/neurofibroma tumors are common in this setting and may be mistaken for neurofibroma or malignant peripheral nerve sheath tumor.",
      "The cytology and architecture of schwannomas are generally similar to those of sporadic counterparts.",
      "A malignant peripheral nerve sheath tumor is uncommon; do not infer malignancy from hybrid morphology alone.",
    ],
    ihc: [
      "Many schwannomas show mosaic loss of nuclear SMARCB1/INI1 in a subset of tumor cells, particularly in familial SMARCB1-related disease.",
      "Mosaic INI1 staining is not specific for a germline SMARCB1 variant; it can also occur in sporadic schwannomatosis, NF2-related schwannomatosis, and tumors with LZTR1 variants or no identified variant.",
      "Reduced or absent LZTR1 staining has been described in LZTR1-associated schwannomas, but it is not a stand-alone germline test.",
    ],
    differential: [
      "NF2-related schwannomatosis: bilateral vestibular schwannomas, multiple meningiomas, and other characteristic CNS tumors favor NF2; mosaic NF2 can be difficult to exclude with blood testing alone.",
      "Solitary sporadic schwannoma: usually lacks the clinical pattern of multiple painful tumors; mosaic INI1 staining is less common but not impossible.",
      "Neurofibromatosis type 1: neurofibromas and associated cutaneous/systemic findings differ from the schwannoma-predominant phenotype.",
      "Hybrid schwannoma/neurofibroma versus malignant peripheral nerve sheath tumor: assess atypia, mitotic activity, necrosis, infiltrative growth, and clinical behavior rather than relying on hybrid phenotype alone.",
    ],
    molecular: [
      "Use germline sequencing and copy-number analysis for SMARCB1 and LZTR1; consider broader testing when the phenotype remains unexplained.",
      "Tumors commonly show inactivation of both copies of SMARCB1 or LZTR1 together with biallelic NF2 inactivation.",
      "A proposed four-hit, three-step model includes the inherited or constitutional first hit, chromosome 22 loss affecting the wild-type predisposition allele and one NF2 allele, followed by inactivation of the remaining NF2 allele.",
      "Most patients with schwannomatosis do not have a germline NF2 variant; NF2 alterations are typically somatic in the schwannomas.",
      "Consider DGCR8 and other 22q-related schwannomatosis categories when multiple tumors share chromosome 22q molecular findings without an identifiable SMARCB1 or LZTR1 germline variant.",
    ],
  },
  {
    name: "Clear cell meningioma predisposition syndrome",
    pathway: "SWI/SNF chromatin remodeling",
    genes: "SMARCE1",
    inheritance:
      "Autosomal dominant predisposition caused by a germline inactivating SMARCE1 variant. Penetrance is incompletely defined and may be reduced in males.",
    clinical: [
      "Clear cell meningioma in a child, adolescent, or young adult should prompt consideration of a germline SMARCE1 variant.",
      "Spinal canal and cerebellopontine angle are characteristic sites in the predisposition setting.",
      "Multiple relatives with clear cell meningiomas are strongly suggestive.",
      "Other tumor associations remain insufficiently established; do not assume a broad extracranial tumor spectrum.",
    ],
    criteria: [
      "A pathogenic germline SMARCE1 variant establishes clear cell meningioma predisposition syndrome.",
      "One or more clear cell meningiomas and a positive family history are supportive clinical features.",
      "Loss of SMARCE1 expression in a clear cell meningioma is a useful screening clue but does not by itself establish germline status.",
    ],
    morphology: [
      "Patternless or sheet-like growth of round to polygonal cells with clear, glycogen-rich cytoplasm.",
      "Prominent perivascular and interstitial collagen may form large acellular zones or brightly eosinophilic amianthoid-like collagen.",
      "Tumor cells contain PAS-positive, diastase-sensitive cytoplasmic glycogen.",
      "Whorls are often inconspicuous and psammoma bodies are usually sparse.",
    ],
    ihc: [
      "Clear cell meningiomas associated with SMARCE1 alteration typically show loss of nuclear SMARCE1 expression.",
      "SMARCE1 loss is a screening clue for molecular evaluation, not proof of a germline pathogenic variant.",
      "Use a standard meningioma panel and appropriate internal controls to establish lineage and exclude mimics.",
    ],
    differential: [
      "Other meningioma subtypes with clear-cell change: the characteristic collagen-rich pattern, glycogen, and SMARCE1 loss support clear cell meningioma.",
      "Metastatic clear cell carcinoma (especially renal): use epithelial markers and organ-specific markers; meningioma markers and anatomic/radiologic context help resolve the differential.",
      "Clear cell tumors of nerve sheath or other mesenchymal lineage: integrate S100/SOX10 and other lineage markers with morphology and site.",
    ],
    molecular: [
      "Confirm a pathogenic germline SMARCE1 variant using constitutional DNA.",
      "Most reported germline variants are frameshift or stop-gain variants predicted to cause loss of protein expression.",
      "Tumors may show germline plus somatic inactivation or biallelic somatic SMARCE1 alterations.",
      "SMARCE1 loss by IHC can select cases for germline evaluation; methylation profiling may assist classification in histologically challenging cases.",
      "Do not equate tumor SMARCE1 loss with inherited predisposition without germline testing.",
    ],
  },
  {
    name: "Weaver syndrome / EZH2-related overgrowth",
    pathway: "PRC2-mediated histone methylation",
    genes: "EZH2; PRC2 complex also includes EED and SUZ12",
    inheritance:
      "Usually de novo autosomal dominant, with parental or proband mosaicism reported. Affected individuals have a 50% chance of transmitting a constitutional pathogenic variant; recurrence in unaffected parents is low but not zero because of possible gonadal mosaicism.",
    clinical: [
      "Tall stature and generalized overgrowth typically begin in childhood; height may be several standard deviations above the mean.",
      "Characteristic facial gestalt, advanced bone age, and disharmonic skeletal maturation support the diagnosis.",
      "Developmental delay and intellectual disability are common but variable.",
      "Tumor susceptibility includes neuroblastoma and reported hematolymphoid malignancies, including ALL, AML, and non-Hodgkin lymphoma.",
      "EZH2-related undergrowth caused by gain-of-function variants is a distinct entity and should not be mislabeled as Weaver syndrome.",
    ],
    criteria: [
      "A pathogenic or likely pathogenic EZH2 variant together with tall stature or characteristic facial features supports EZH2-related overgrowth/Weaver syndrome.",
      "Advanced or disharmonic bone age is a useful supportive feature.",
      "For a variant of uncertain significance, de novo status and exclusion of overlapping overgrowth syndromes may assist interpretation but do not automatically make the variant pathogenic.",
      "Clinical interpretation must account for variant mechanism; EZH2 gain-of-function undergrowth is not Weaver syndrome.",
    ],
    morphology: [
      "Associated tumors are generally morphologically similar to their sporadic counterparts.",
      "No distinctive tumor histology has been established as diagnostic of Weaver syndrome.",
    ],
    ihc: [
      "Reduced H3K27me3 staining may theoretically support impaired PRC2 activity in a tumor, but it is not a validated stand-alone diagnostic test for Weaver syndrome.",
      "Tumor IHC should not be used to infer a constitutional EZH2 variant without germline testing.",
    ],
    differential: [
      "Sotos syndrome (NSD1): overlapping overgrowth and developmental features; distinguish by phenotype and molecular testing.",
      "EED- or SUZ12-related overgrowth syndromes: overlap in PRC2 biology; use gene-specific testing and phenotype.",
      "Simpson–Golabi–Behmel and other congenital overgrowth syndromes: distinguish by characteristic congenital anomalies, dysmorphism, and molecular testing.",
      "EZH2 gain-of-function undergrowth: distinct phenotype and molecular mechanism; do not group with Weaver syndrome.",
    ],
    molecular: [
      "Confirm a pathogenic or likely pathogenic EZH2 variant by germline sequencing; assess parental samples when useful to establish de novo status.",
      "Most Weaver-associated variants impair EZH2/PRC2 function and reduce H3K27 methyltransferase activity, including H3K27me1 and H3K27me3 deposition.",
      "Postzygotic mosaic EZH2 variants can produce variable or subtle phenotypes; tissue distribution may influence clinical expression.",
      "A distinct subset of EZH2 gain-of-function variants is associated with growth failure/undergrowth and a different epigenetic signature.",
      "Epigenome-wide methylation profiling may support classification in selected diagnostically difficult cases.",
    ],
  },
];

const clues = [
  {
    finding:
      "Infant with Wilms tumor, hepatoblastoma, or bilateral nephrogenic rests",
    clue: "Look for macroglossia, abdominal wall defects, lateralized overgrowth, visceromegaly, or subtle asymmetry. Molecular subtype matters because tumor risk differs substantially.",
    syndrome: "Beckwith–Wiedemann spectrum",
    genes: "11p15 imprinting; IGF2, CDKN1C",
  },
  {
    finding:
      "Multiple asymmetric enchondromas, especially with limb-length discrepancy",
    clue: "A unilateral or markedly asymmetric distribution favors a postzygotic mosaic disorder rather than a conventional inherited skeletal syndrome.",
    syndrome: "Ollier disease",
    genes: "Mosaic IDH1/IDH2 gain of function",
  },
  {
    finding: "Multiple enchondromas plus spindle cell hemangiomas",
    clue: "The vascular lesions, particularly spindle cell hemangiomas, distinguish Maffucci syndrome from Ollier disease. Watch for new adult growth or cortical destruction suggesting chondrosarcoma.",
    syndrome: "Maffucci syndrome",
    genes: "Mosaic IDH1, usually p.Arg132Cys",
  },
  {
    finding:
      "Rhabdoid tumor in an infant or young child; multiple synchronous or metachronous tumors",
    clue: "AT/RT, renal or extrarenal malignant rhabdoid tumor, and loss of INI1 should trigger germline assessment. Tumor INI1 loss alone does not prove a constitutional variant.",
    syndrome: "Rhabdoid tumor predisposition syndrome 1",
    genes: "SMARCB1",
  },
  {
    finding:
      "Small cell carcinoma of the ovary, hypercalcemic type, in an adolescent or young adult",
    clue: "Loss of BRG1 supports SMARCA4 deficiency. Germline testing distinguishes RTPS2 from a tumor-only SMARCA4 alteration.",
    syndrome: "Rhabdoid tumor predisposition syndrome 2",
    genes: "SMARCA4",
  },
  {
    finding:
      "Multiple painful schwannomas, especially spinal or peripheral nerve tumors",
    clue: "Severe chronic pain and absence of the classic bilateral vestibular schwannoma pattern favor schwannomatosis; unilateral vestibular schwannoma can occur in LZTR1-related disease.",
    syndrome: "SMARCB1- or LZTR1-related schwannomatosis",
    genes: "SMARCB1, LZTR1; somatic NF2",
  },
  {
    finding:
      "Clear cell meningioma in a child or young adult, particularly spinal or cerebellopontine angle",
    clue: "Clear cytoplasm, PAS-positive diastase-sensitive glycogen, and collagen-rich perivascular stroma are characteristic. SMARCE1 loss should prompt germline evaluation.",
    syndrome: "Clear cell meningioma predisposition syndrome",
    genes: "SMARCE1",
  },
  {
    finding: "Childhood overgrowth with advanced bone age and neuroblastoma",
    clue: "Tall stature, characteristic facial gestalt, and developmental delay support Weaver syndrome. Confirm the EZH2 variant mechanism; gain-of-function undergrowth is a separate condition.",
    syndrome: "Weaver syndrome",
    genes: "EZH2 / PRC2",
  },
];

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-5">
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
        {title}
      </h4>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function EpigeneticDriversAndChromatinRemodelingPage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const [showAll, setShowAll] = useState(true);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entities;
    return entities.filter((entity) =>
      [
        entity.name,
        entity.pathway,
        entity.genes,
        entity.inheritance,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.morphology,
        ...entity.ihc,
        ...entity.differential,
        ...entity.molecular,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const toggleEntity = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  const toggleAll = () => {
    if (showAll) {
      setExpanded([]);
      setShowAll(false);
    } else {
      setExpanded(filtered.map((entity) => entity.name));
      setShowAll(true);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
          Genetic Tumor Syndromes
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Epigenetic Drivers and Chromatin Remodeling
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A clinicopathologic reference linking imprinting defects,
          oncometabolite-driven epigenetic changes, chromatin remodeling
          complexes, and Polycomb regulation to recognizable tumor and
          multisystem phenotypes.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Pathway Overview
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Epigenetic regulation controls gene expression without changing the
          underlying DNA sequence. DNA methylation, histone modifications,
          genomic imprinting, and ATP-dependent nucleosome remodeling establish
          transcriptionally active or repressed chromatin states. Pathogenic
          alterations may be constitutional, postzygotic mosaic, or acquired
          only in the tumor; these categories have different diagnostic and
          counseling implications.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {pathways.map((pathway) => (
            <article
              key={pathway.name}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {pathway.name}
              </h3>
              <dl className="mt-3 space-y-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Key genes
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.genes}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Normal function
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.function}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Pathogenic mechanism
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.mechanism}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Associated syndromes
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.syndromes}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Pathology Clues
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Begin with the tumor pattern or tissue finding, then connect it to
            the clinical phenotype, candidate syndrome, and molecular mechanism.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {clues.map((item) => (
            <article
              key={item.finding}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.finding}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.clue}
              </p>
              <div className="mt-3 border-t border-slate-100 pt-3 text-sm dark:border-slate-800">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Syndrome:{" "}
                  </span>
                  <span className="text-teal-800 dark:text-teal-300">
                    {item.syndrome}
                  </span>
                </div>
                <div className="mt-1 text-slate-500 dark:text-slate-400">
                  Genes: {item.genes}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Pathway-specific Entity Outlines
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {filtered.length} entities
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search syndrome, gene, feature..."
              className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white sm:w-80"
              aria-label="Search epigenetic and chromatin entities"
            />
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {showAll ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((entity) => {
            const isExpanded = expanded.includes(entity.name);
            return (
              <article
                key={entity.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => toggleEntity(entity.name)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={isExpanded}
                >
                  <span>
                    <span className="block text-lg font-bold text-slate-900 dark:text-white">
                      {entity.name}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                      {entity.pathway}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {entity.genes}
                    </span>
                  </span>
                  <span className="mt-1 text-xl text-slate-400">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                {isExpanded && (
                  <div className="border-t border-slate-200 px-5 pb-6 dark:border-slate-700">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.morphology} />
                    <Section title="Immunohistochemistry" items={entity.ihc} />
                    <Section
                      title="Differential Diagnosis"
                      items={entity.differential}
                    />
                    <Section
                      title="Molecular Pathology"
                      items={entity.molecular}
                    />
                    <div className="mt-5 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/70">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        Inheritance:{" "}
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {entity.inheritance}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No matching entity. Try a gene symbol, syndrome name, or clinical
              feature.
            </div>
          )}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}
