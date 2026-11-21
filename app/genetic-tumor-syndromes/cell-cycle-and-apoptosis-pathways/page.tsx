"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  genes: string;
  inheritance: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: string[];
  molecular: string[];
  clues: string[];
};

type Pathway = {
  id: string;
  title: string;
  function: string;
  genes: string;
  normalFunction: string;
  mechanism: string;
  syndromes: string;
  entities: Entity[];
};

const pathways: Pathway[] = [
  {
    id: "p53",
    title: "p53 Pathway",
    function:
      "The p53 pathway coordinates cellular responses to DNA damage and other forms of stress. Depending on the context, p53 induces cell-cycle arrest and DNA repair, senescence, or apoptosis, thereby limiting the propagation of genetically damaged cells.",
    genes: "TP53",
    normalFunction:
      "TP53 encodes p53, a sequence-specific transcription factor that regulates cell-cycle progression, DNA integrity, apoptosis, metabolism, ferroptosis, and cellular responses to nutrient deprivation. Its effects depend on cell type, stress signal, and the specific p53 protein variant.",
    mechanism:
      "Li–Fraumeni syndrome results from a heterozygous germline pathogenic TP53 variant. Tumors commonly acquire a second hit affecting the wild-type allele. Some mutant p53 proteins exert dominant-negative effects; gain-of-function activity has been proposed for selected variants, but its molecular basis is not fully established.",
    syndromes:
      "Li–Fraumeni syndrome and the broader heritable TP53-related cancer syndrome spectrum",
    entities: [
      {
        name: "Li–Fraumeni Syndrome",
        genes: "TP53",
        inheritance: "Autosomal dominant; variable penetrance and expression",
        profile: [
          "Cancers often arise in childhood, adolescence, or young adulthood, although risk persists throughout life.",
          "Core tumor spectrum includes soft tissue sarcoma, osteosarcoma, breast carcinoma, brain tumors, and adrenocortical carcinoma.",
          "Breast cancer is a frequent first malignancy, often occurring at a young age.",
          "Other reported tumors include leukemia, lymphoma, melanoma, gastrointestinal carcinomas, lung cancer, and tumors of the genitourinary tract.",
          "Multiple primary malignancies in one individual and a family history spanning generations are characteristic clues.",
          "The tumor spectrum varies with age; adrenocortical carcinoma, choroid plexus carcinoma, rhabdomyosarcoma, and medulloblastoma are important childhood tumors.",
        ],
        criteria: [
          "A pathogenic or likely pathogenic germline TP53 variant establishes the molecular diagnosis in the appropriate clinical context.",
          "Consider testing in patients with a core-spectrum tumor at an unusually young age, multiple primary tumors, or a suggestive family history.",
          "Osteosarcoma, low-hypodiploid acute lymphoblastic leukemia, and sonic hedgehog–activated medulloblastoma are additional indications for considering TP53 testing.",
          "Traditional Chompret criteria are useful but do not identify every carrier; broader testing strategies have increased recognition of individuals who do not meet classic criteria.",
          "A tumor TP53 variant alone does not establish Li–Fraumeni syndrome; constitutional testing is required.",
        ],
        histology: [
          "Most tumors are morphologically indistinguishable from their sporadic counterparts.",
          "Breast carcinomas are commonly invasive carcinoma of no special type; ERBB2-amplified tumors are overrepresented in reported series.",
          "Soft tissue sarcomas include leiomyosarcoma, rhabdomyosarcoma, liposarcoma, and undifferentiated sarcoma.",
          "Osteosarcoma is the most frequent bone malignancy in the syndrome.",
          "Brain tumors include diffuse astrocytic gliomas, choroid plexus carcinoma, and medulloblastoma, including SHH-activated/TP53-mutant tumors.",
          "Adrenocortical carcinoma is an important component of the childhood tumor spectrum.",
        ],
        ihc: [
          "Abnormal p53 immunostaining patterns may support the presence of a TP53-altered tumor but are not specific for a germline variant.",
          "A null pattern or diffuse strong nuclear staining should be interpreted with appropriate internal controls and tumor-specific context.",
          "ERBB2 immunohistochemistry and in situ hybridization are used to classify breast carcinoma, not to establish Li–Fraumeni syndrome.",
          "Use lineage- and entity-specific immunohistochemical panels to classify each neoplasm; there is no syndrome-specific IHC profile.",
        ],
        differential: [
          "BRCA1- or BRCA2-associated hereditary breast/ovarian cancer: usually a narrower tumor spectrum; young breast cancer alone does not distinguish these syndromes.",
          "Other hereditary sarcoma and brain tumor predisposition syndromes: integrate the specific tumor combination, age, and family history.",
          "Sporadic TP53-mutant cancer: somatic TP53 alterations are common; germline testing is needed to establish constitutional predisposition.",
          "Clonal hematopoiesis: a TP53 variant detected in blood, particularly after chemotherapy or with increasing age, may be hematopoietic rather than constitutional; confirm using an appropriate nonhematopoietic tissue.",
        ],
        molecular: [
          "TP53 is located at chromosome 17p13.1 and encodes the p53 tumor suppressor.",
          "Germline pathogenic variants include missense, truncating, splice-site, indel, and structural alterations.",
          "Tumorigenesis commonly involves somatic inactivation or loss of the remaining wild-type TP53 allele.",
          "Variant-specific residual function and dominant-negative effects contribute to variable age of onset and phenotype severity.",
          "Use germline next-generation sequencing with validated detection of sequence variants and copy-number/structural alterations; assess low-level mosaicism when clinically indicated.",
          "Classify variants using TP53-specific ACMG/AMP guidance; do not infer germline status from tumor sequencing alone.",
        ],
        clues: [
          "A child with adrenocortical carcinoma, choroid plexus carcinoma, embryonal rhabdomyosarcoma, or SHH medulloblastoma.",
          "Young patient with osteosarcoma or soft tissue sarcoma, especially with another primary cancer or a family history of early cancers.",
          "Very young patient with breast carcinoma, particularly with multiple primary tumors or a family history of sarcoma, brain tumor, or adrenocortical carcinoma.",
          "Multiple primary cancers across different organ systems should prompt constitutional TP53 assessment even when classic family-history criteria are not met.",
        ],
      },
    ],
  },
  {
    id: "rb1",
    title: "RB1 and G1/S Cell-Cycle Checkpoint",
    function:
      "The RB pathway controls the G1-to-S transition. Hypophosphorylated RB proteins bind E2F transcription factors and restrain S-phase gene expression. Cyclin-dependent kinases phosphorylate RB, releasing E2F and allowing cell-cycle progression.",
    genes: "RB1 · CDKN1B · CDKN2A · CDK4 · CDK6 · CCND1 · CCNE1 · E2F family",
    normalFunction:
      "RB1 encodes pRB, which restrains E2F-dependent transcription. CDKN1B encodes p27, an inhibitor of cyclin E/A–CDK2. CDKN2A encodes p16INK4a, which inhibits CDK4/6, and p14ARF, which antagonizes MDM2 and stabilizes p53. CDK4 is a kinase that promotes RB phosphorylation; specific germline variants impair p16 binding.",
    mechanism:
      "RB1, CDKN1B, and CDKN2A predisposition generally reflects loss of tumor-suppressor function, often with somatic inactivation of the remaining allele. In contrast, melanoma-predisposing CDK4 variants are activating: they impair p16 binding, permit RB phosphorylation, and drive G1/S progression. PIK3CA is not an RB-pathway gene; its biology belongs to PI3K signaling.",
    syndromes:
      "Retinoblastoma syndrome · Multiple endocrine neoplasia type 4 · CDKN2A-related tumor predisposition syndrome · CDK4-related melanoma predisposition syndrome",
    entities: [
      {
        name: "Retinoblastoma Syndrome",
        genes: "RB1",
        inheritance:
          "Autosomal dominant predisposition; tumor development follows a two-hit mechanism",
        profile: [
          "Retinoblastoma is the most common primary intraocular malignancy of childhood; median diagnosis is approximately 12 months for bilateral and 24 months for unilateral disease.",
          "Heritable disease is usually bilateral and multicentric, but approximately 15% of hereditary cases may present unilaterally.",
          "Leukocoria is the most common presenting sign, followed by strabismus.",
          "Trilateral retinoblastoma refers to bilateral ocular retinoblastoma with a synchronous or metachronous intracranial pineal or suprasellar tumor.",
          "Survivors have a lifelong risk of second primary malignancies, especially osteosarcoma and soft tissue sarcoma.",
        ],
        criteria: [
          "Clinical diagnosis of retinoblastoma is established by ophthalmologic examination and imaging; intraocular biopsy is avoided because of the risk of extraocular tumor dissemination.",
          "Germline RB1 testing should be considered in all patients, regardless of unilateral or bilateral presentation.",
          "Bilateral or multicentric retinoblastoma, family history, or an associated intracranial primitive neuroectodermal tumor strongly supports heritable disease.",
          "Histopathologic assessment of an enucleated eye should document differentiation and high-risk features, including postlaminar optic nerve, choroidal, scleral, or extraocular invasion.",
          "A negative blood test does not completely exclude low-level somatic mosaicism.",
        ],
        histology: [
          "Tumor is composed of small neuroblastic cells with hyperchromatic nuclei and scant cytoplasm.",
          "Mitoses, apoptosis, geographic necrosis, and dystrophic calcification are common.",
          "Flexner–Wintersteiner rosettes are characteristic; Homer Wright rosettes and photoreceptor-like fleurettes may also occur.",
          "High-risk features include postlaminar optic nerve invasion, massive choroidal invasion (at least 3 mm), scleral invasion, and extraocular extension.",
          "The intracranial tumor in trilateral retinoblastoma is histologically similar to retinoblastoma.",
        ],
        ihc: [
          "Synaptophysin and other neuronal markers may support neuroblastic differentiation but are not specific.",
          "CRX may be expressed and supports photoreceptor-lineage differentiation in the appropriate context.",
          "RB protein loss may be demonstrable but is not a substitute for molecular testing.",
          "IHC is not required for the clinical diagnosis of a typical intraocular retinoblastoma.",
        ],
        differential: [
          "Coats disease and persistent fetal vasculature: may cause leukocoria but lack a retinal malignant mass with characteristic calcification.",
          "Medulloepithelioma: usually arises from the ciliary body rather than the retina and has a distinct primitive neuroepithelial/tubular pattern.",
          "Retinocytoma: may also have biallelic RB1 alterations but shows low proliferative activity and lacks the destructive malignant phenotype.",
          "Other small round cell tumors involving the orbit: correlate with the intraocular epicenter and retinal findings.",
        ],
        molecular: [
          "RB1 is located at chromosome 13q14 and encodes the pRB tumor suppressor.",
          "Heritable disease begins with a constitutional heterozygous pathogenic variant (first hit); a somatic second hit inactivates the remaining allele in retinal cells.",
          "Second hits include loss of heterozygosity, deletion, sequence variants, promoter methylation, and complex rearrangements such as chromothripsis.",
          "Somatic mosaicism may cause a milder phenotype and unilateral disease; low-level mosaic variants may be missed in peripheral blood.",
          "Testing may include sequencing, deletion/duplication analysis, RNA analysis for suspected splice variants, and assays capable of detecting mosaicism.",
          "Large 13q deletions involving RB1 and neighboring genes may be associated with developmental abnormalities.",
        ],
        clues: [
          "Bilateral or multifocal retinal tumors in an infant, particularly with a family history.",
          "A unilateral retinoblastoma does not exclude heritable disease; molecular testing remains relevant.",
          "Bilateral retinoblastoma plus a pineal or suprasellar primitive tumor indicates trilateral retinoblastoma.",
          "A later sarcoma, especially osteosarcoma, in a retinoblastoma survivor raises concern for a second primary malignancy.",
        ],
      },
      {
        name: "Multiple Endocrine Neoplasia Type 4",
        genes: "CDKN1B",
        inheritance:
          "Autosomal dominant; incomplete penetrance has been reported",
        profile: [
          "Very rare syndrome, often recognized in patients with a MEN1-like phenotype but negative MEN1 testing.",
          "Primary hyperparathyroidism is the most frequent manifestation, reported in approximately 75% of affected patients.",
          "Pituitary neuroendocrine tumors occur in about one third of reported patients.",
          "Pancreatic and other gastroenteropancreatic neuroendocrine tumors may occur; pulmonary, thymic, gastric, and small intestinal NETs are less frequently reported.",
          "A female predominance has been described in published cases.",
        ],
        criteria: [
          "A germline pathogenic CDKN1B variant together with parathyroid, pituitary, and/or gastroenteropancreatic neuroendocrine neoplasia.",
          "Consider MEN4 in a patient with a MEN1-like phenotype and comprehensive negative MEN1 testing.",
          "Testing should be capable of detecting sequence variants, small and large deletions, and mosaic variants.",
          "The presence of multiple tumors in the MEN4 spectrum is supportive, but individual tumors are not morphologically distinctive.",
        ],
        histology: [
          "Parathyroid lesions may be uniglandular or multiglandular and are not reliably distinguishable from sporadic disease.",
          "Pituitary neuroendocrine tumors may be nonfunctioning or secrete growth hormone, prolactin, or ACTH.",
          "Gastroenteropancreatic and thoracic NETs resemble their sporadic counterparts.",
          "No specific histologic feature has been established as diagnostic of MEN4.",
        ],
        ihc: [
          "p27 expression may be reduced or altered in some tumors, but retained staining does not exclude MEN4.",
          "There is no validated syndrome-specific IHC pattern; classify each endocrine neoplasm using standard lineage and hormone markers.",
          "Tumor p27 staining cannot establish a germline CDKN1B variant.",
        ],
        differential: [
          "MEN1: clinically overlapping and more common; comprehensive MEN1 testing is the first key molecular distinction.",
          "CDC73-related hyperparathyroidism-jaw tumor syndrome: consider jaw tumors, atypical parathyroid tumors, or parathyroid carcinoma.",
          "Sporadic multiglandular hyperparathyroidism with an incidental pituitary or pancreatic NET: assess the overall phenotype and germline findings.",
        ],
        molecular: [
          "CDKN1B at chromosome 12p13.1 encodes p27KIP1, a cyclin-dependent kinase inhibitor.",
          "MEN4 is caused by heterozygous germline loss-of-function variants, including missense, frameshift, and nonsense variants.",
          "Reduced p27 function weakens inhibition of cyclin E/A–CDK2 and facilitates RB phosphorylation and E2F-mediated G1/S progression.",
          "The reported variants are distributed across the coding sequence and 5′ untranslated region; no clear mutation hotspot is established.",
          "Somatic second-hit data are less fully characterized than for RB1 and CDKN2A; do not assume a demonstrated two-hit mechanism in every case.",
        ],
        clues: [
          "Primary hyperparathyroidism plus pituitary or gastroenteropancreatic NET with negative MEN1 testing.",
          "A MEN1-like family history with a pathogenic germline CDKN1B variant.",
          "Multiple endocrine tumors in a patient whose phenotype is not explained by MEN1.",
        ],
      },
      {
        name: "CDKN2A-Related Tumor Predisposition Syndrome",
        genes: "CDKN2A (p16INK4a and p14ARF)",
        inheritance:
          "Autosomal dominant; penetrance varies with variant and modifying factors",
        profile: [
          "Multiple cutaneous dysplastic nevi and early-onset melanoma are characteristic.",
          "Affected individuals may develop multiple primary melanomas, often approximately a decade earlier than the general population.",
          "Some families show melanoma-astrocytoma syndrome, with astrocytomas in the cerebral hemispheres or cerebellum.",
          "Pancreatic cancer is an important associated malignancy, particularly in some North American and mainland European families.",
          "Nerve sheath tumors and oropharyngeal squamous cell carcinoma have also been reported.",
          "Melanomas are usually cutaneous rather than mucosal, acral, or uveal.",
        ],
        criteria: [
          "A heterozygous germline pathogenic CDKN2A variant establishes the molecular diagnosis.",
          "A personal or family history of multiple melanomas and dysplastic nevi supports testing.",
          "Consider CDKN2A testing in melanoma-prone families, especially those with at least three melanoma cases.",
          "If CDKN2A testing is negative in a strongly melanoma-prone family, evaluate CDK4 and other relevant melanoma predisposition genes.",
          "A somatic CDKN2A deletion in a tumor is not evidence by itself of a germline syndrome.",
        ],
        histology: [
          "Melanomas are often superficial spreading type and may show pigmentation and pagetoid scatter.",
          "No histologic feature reliably distinguishes CDKN2A-associated melanoma from sporadic melanoma.",
          "Associated astrocytomas include pleomorphic xanthoastrocytoma and diffuse astrocytic gliomas of variable grade.",
          "Reported nerve sheath tumors resemble schwannoma or neurofibroma.",
          "The morphology of pancreatic and oropharyngeal tumors is generally similar to sporadic counterparts.",
        ],
        ihc: [
          "Loss of p16 expression may occur in tumors with CDKN2A inactivation but is not specific for a germline variant.",
          "p14ARF is encoded by an alternative reading frame; routine IHC does not reliably establish constitutional CDKN2A status.",
          "Use standard melanoma, glial, and nerve sheath tumor panels to classify the individual neoplasm.",
        ],
        differential: [
          "CDK4-related melanoma predisposition: clinical phenotype may be indistinguishable; germline testing separates the two.",
          "BAP1 tumor predisposition syndrome: consider uveal/cutaneous melanoma, mesothelioma, and BAP1-inactivated melanocytic tumors.",
          "Familial melanoma without an identified CDKN2A variant: evaluate other susceptibility genes and environmental factors.",
          "Sporadic melanoma with somatic CDKN2A loss: tumor-only loss does not establish inherited predisposition.",
        ],
        molecular: [
          "CDKN2A at chromosome 9p21 encodes two distinct proteins through alternative reading frames: p16INK4a and p14ARF.",
          "p16 inhibits CDK4 and CDK6, maintaining RB-mediated G1 arrest.",
          "p14ARF antagonizes MDM2 and thereby supports p53 stability.",
          "Germline pathogenic variants are generally loss-of-function; tumors may acquire a second hit through loss of heterozygosity, deletion, or another somatic variant.",
          "Germline sequencing and deletion/duplication analysis are required; tumor sequencing alone cannot establish constitutional status.",
          "UV exposure, smoking, nevus phenotype, hair pigmentation, and MC1R variants may modify risk.",
        ],
        clues: [
          "Multiple primary cutaneous melanomas with numerous dysplastic nevi, particularly in a family with several affected relatives.",
          "Melanoma-prone family with pancreatic cancer or astrocytoma in affected relatives.",
          "A young patient with superficial spreading melanoma and a strong family history should prompt germline CDKN2A testing.",
          "If CDKN2A is negative, consider CDK4-related melanoma predisposition.",
        ],
      },
      {
        name: "CDK4-Related Melanoma Predisposition Syndrome",
        genes: "CDK4",
        inheritance: "Autosomal dominant",
        profile: [
          "Very rare syndrome characterized by early-onset multiple primary cutaneous melanomas.",
          "Affected individuals often have numerous atypical or dysplastic nevi.",
          "Melanomas may occur on the limbs more often than in CDKN2A-associated families.",
          "Reported noncutaneous malignancies include pancreatic, breast, ovarian, cervical, gastric, and other cancers, but the strength of these associations is less certain.",
        ],
        criteria: [
          "A germline pathogenic CDK4 variant establishes the diagnosis.",
          "Consider testing in melanoma-prone families that are negative for CDKN2A variants.",
          "Multiple primary melanomas and atypical nevi are supportive but do not distinguish CDK4 from CDKN2A predisposition clinically.",
        ],
        histology: [
          "Melanomas are morphologically similar to sporadic melanomas.",
          "Low-cumulative-sun-damage superficial spreading melanoma is commonly reported.",
          "A precursor nevus, including an intradermal or dysplastic nevus, may be present.",
          "No distinctive histologic feature reliably identifies CDK4-associated melanoma.",
        ],
        ihc: [
          "There is no validated IHC marker for germline CDK4-related melanoma predisposition.",
          "p16 expression may be retained or altered depending on the tumor context; it cannot establish a germline CDK4 variant.",
        ],
        differential: [
          "CDKN2A-related tumor predisposition: the phenotype overlaps substantially; germline sequencing distinguishes the syndromes.",
          "Sporadic familial clustering of melanoma: assess UV exposure, nevus phenotype, and germline findings.",
          "BAP1 tumor predisposition syndrome: consider the associated BAP1-inactivated melanocytic tumors and uveal melanoma spectrum.",
        ],
        molecular: [
          "CDK4 is located at chromosome 12q14.1 and encodes a serine/threonine kinase that phosphorylates RB.",
          "Most reported germline variants affect codon 24, particularly p.Arg24His.",
          "These variants impair p16 binding, allowing CDK4 activity, RB phosphorylation, E2F release, and cell-cycle progression.",
          "This is an activating, functionally gain-of-function mechanism rather than loss of CDK4 function.",
          "Germline sequencing is required; tumor IHC or somatic CDK4 amplification is not equivalent to a constitutional pathogenic variant.",
        ],
        clues: [
          "Multiple primary melanomas and numerous atypical nevi in a family with negative CDKN2A testing.",
          "A melanoma-prone family in which germline testing identifies a CDK4 codon 24 variant.",
          "Do not distinguish CDK4 from CDKN2A syndrome by melanoma morphology alone.",
        ],
      },
    ],
  },
  {
    id: "fas",
    title: "FAS-Mediated Apoptosis Pathway",
    function:
      "The FAS pathway is a major extrinsic apoptosis pathway that maintains immune homeostasis by eliminating activated or autoreactive lymphocytes. FAS receptor engagement recruits intracellular signaling proteins and activates initiator and effector caspases.",
    genes: "FAS · FASLG · FADD · CASP8 · CASP10",
    normalFunction:
      "FAS (CD95/APO-1) is a death-domain-containing TNF receptor family member. Binding of FAS ligand promotes assembly of the death-inducing signaling complex through FADD and activation of caspase-8 and downstream caspases, leading to apoptosis.",
    mechanism:
      "Pathogenic variants that impair FAS-mediated signaling reduce lymphocyte apoptosis and cause accumulation of autoreactive and double-negative T cells. ALPS may result from germline variants, most often in FAS, or from somatic FAS variants (ALPS-sFAS); the latter is a somatic phenocopy and is not an inherited syndrome.",
    syndromes:
      "Autoimmune lymphoproliferative syndrome (ALPS-FAS and other FAS-pathway forms) and somatic ALPS (ALPS-sFAS)",
    entities: [
      {
        name: "Autoimmune Lymphoproliferative Syndrome",
        genes: "FAS · FASLG · CASP8 · CASP10 · FADD",
        inheritance:
          "Usually autosomal dominant for heterozygous FAS variants; rare autosomal recessive forms. Somatic FAS variants cause ALPS-sFAS.",
        profile: [
          "ALPS-FAS commonly presents in early childhood with chronic, noninfectious lymphadenopathy and splenomegaly.",
          "Autoimmune cytopenias may affect multiple lineages and can include hemolytic anemia, thrombocytopenia, and neutropenia.",
          "Lymph nodes, spleen, and sometimes bone marrow are involved.",
          "Patients have an increased risk of B-cell lymphoma, including Hodgkin and non-Hodgkin lymphoma.",
          "ALPS-sFAS may present across a broader age range than germline ALPS-FAS.",
          "Splenectomy is associated with a substantial risk of severe infection and should be approached cautiously.",
        ],
        criteria: [
          "Chronic (>6 months), noninfectious, nonmalignant lymphadenopathy and/or splenomegaly, or autoimmune cytopenia involving at least two lineages, in the appropriate clinical context.",
          "Peripheral blood flow cytometry demonstrates increased αβ T-cell receptor-positive CD4−/CD8− double-negative T cells: greater than 1.5% of total lymphocytes or greater than 2.5% of CD3-positive lymphocytes.",
          "Impaired FAS-mediated apoptosis supports the diagnosis.",
          "A pathogenic variant in FAS, FASLG, CASP8, CASP10, or FADD supports a genetically defined form; distinguish germline from somatic FAS variants.",
          "Elevated soluble FAS ligand, IL-10, and vitamin B12 are supportive biomarkers but are not independently diagnostic.",
          "Expanded double-negative T cells in a lymph node do not replace peripheral blood flow cytometry.",
        ],
        histology: [
          "Lymph nodes show reactive follicular hyperplasia with prominent pale paracortical expansion.",
          "The expanded paracortex contains double-negative T cells and polytypic plasma cells.",
          "Progressive transformation of germinal centers or Castleman-like changes may obscure the characteristic pattern.",
          "Rosai–Dorfman disease-like histiocytic changes may coexist.",
          "Similar lymphoid infiltrates may involve spleen and bone marrow.",
          "Firm, fleshy, or necrotic areas should be sampled to exclude an overt lymphoma.",
        ],
        ihc: [
          "The expanded double-negative T-cell population is CD3-positive and TCRαβ-positive.",
          "Double-negative T cells are CD4-negative and CD8-negative.",
          "The population commonly expresses CD45RA and lacks CD45RO.",
          "Cytotoxic markers including perforin, TIA1, and CD57 may be expressed.",
          "Plasma cells are generally polytypic; assess light-chain expression when plasmacytosis is prominent.",
          "Flow cytometry on peripheral blood is essential for quantifying αβ double-negative T cells.",
        ],
        differential: [
          "Lymphoma: assess architecture, cytologic atypia, aberrant antigen expression, and clonality; ALPS may coexist with lymphoma.",
          "Infectious lymphadenitis: ALPS requires chronic noninfectious lymphoproliferation; correlate with microbiology and clinical course.",
          "Castleman disease: may show overlapping histology, but clinical immune dysregulation and αβ double-negative T-cell expansion favor ALPS.",
          "Rosai–Dorfman disease: S100-positive histiocytes with emperipolesis may be present as a coexisting pattern rather than explaining the entire syndrome.",
          "RAS-associated autoimmune lymphoproliferative disorder: can produce an ALPS-like phenotype but has a distinct molecular basis.",
          "Other inborn errors of immune regulation: consider when FAS-pathway testing is negative or the phenotype is atypical.",
        ],
        molecular: [
          "FAS is the most frequently altered gene; heterozygous germline variants commonly affect the intracellular death domain and impair signaling.",
          "Rare homozygous FAS or FASLG variants are associated with severe, early-onset disease.",
          "Pathogenic variants in FADD, CASP8, and CASP10 disrupt downstream apoptotic signaling.",
          "ALPS-sFAS is caused by somatic FAS variants, often detectable in the double-negative T-cell compartment; it is not equivalent to germline ALPS-FAS.",
          "Use germline and somatic testing strategies appropriate to the phenotype and sample type.",
          "T-cell receptor Vβ restriction may occur in ALPS double-negative T cells; a restricted repertoire or apparent clonality should not be interpreted as lymphoma in isolation.",
          "FAS death-domain variants can also occur in lymphoma; molecular findings must be interpreted with morphology and clinical criteria.",
        ],
        clues: [
          "Child with persistent, noninfectious generalized lymphadenopathy, splenomegaly, and autoimmune cytopenias.",
          "Reactive-appearing lymph node with marked pale paracortical expansion and an increased αβ CD4−/CD8− T-cell population.",
          "Polytypic plasmacytosis or Rosai–Dorfman-like changes in a patient with chronic immune dysregulation.",
          "A patient with ALPS phenotype but no germline FAS variant may have somatic FAS disease (ALPS-sFAS) or another immune dysregulation disorder.",
          "A new enlarging, firm, necrotic, or architecturally destructive node requires evaluation for lymphoma rather than attribution to ALPS alone.",
        ],
      },
    ],
  },
];

function OutlineSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h5 className="text-sm font-bold text-slate-900">{title}</h5>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function searchable(entity: Entity, pathway: Pathway, query: string) {
  const text = [
    entity.name,
    entity.genes,
    entity.inheritance,
    pathway.title,
    pathway.genes,
    pathway.function,
    pathway.normalFunction,
    pathway.mechanism,
    pathway.syndromes,
    ...entity.profile,
    ...entity.criteria,
    ...entity.histology,
    ...entity.ihc,
    ...entity.differential,
    ...entity.molecular,
    ...entity.clues,
  ]
    .join(" ")
    .toLowerCase();
  return text.includes(query.toLowerCase());
}

export default function CellCycleAndApoptosisPathwaysPage() {
  const [query, setQuery] = useState("");
  const [activePathway, setActivePathway] = useState("all");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [cluesOpen, setCluesOpen] = useState(true);

  const visiblePathways = useMemo(() => {
    const q = query.trim();
    return pathways
      .filter(
        (pathway) => activePathway === "all" || pathway.id === activePathway,
      )
      .map((pathway) => ({
        ...pathway,
        entities: pathway.entities.filter(
          (entity) => !q || searchable(entity, pathway, q),
        ),
      }))
      .filter((pathway) => pathway.entities.length > 0);
  }, [query, activePathway]);

  const visibleIds = visiblePathways.flatMap((pathway) =>
    pathway.entities.map((entity) => `${pathway.id}:${entity.name}`),
  );
  const totalEntities = pathways.reduce(
    (count, pathway) => count + pathway.entities.length,
    0,
  );

  function toggleEntity(id: string) {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
          PathologyGPS · Genetic Tumor Syndromes
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Cell-Cycle and Apoptosis Pathways
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to inherited tumor predisposition and
          immune dysregulation caused by alterations in cell-cycle checkpoints
          and programmed cell death. Begin with the tumor pattern or lymphoid
          finding, then connect the phenotype to the responsible gene and
          molecular mechanism.
        </p>
      </header>

      <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setCluesOpen(!cluesOpen)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pathology Clues
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Tumor combinations, age, multiplicity, and lymph node patterns
              that should trigger syndrome-directed evaluation.
            </p>
          </div>
          <span className="text-xl text-slate-500">
            {cluesOpen ? "−" : "+"}
          </span>
        </button>
        {cluesOpen && (
          <div className="overflow-x-auto border-t border-slate-200">
            <table className="w-full min-w-[850px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-5 py-3">Pathology / Clinical Pattern</th>
                  <th className="px-5 py-3">Consider</th>
                  <th className="px-5 py-3">Diagnostic Direction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Childhood adrenocortical carcinoma, choroid plexus
                    carcinoma, rhabdomyosarcoma, or SHH medulloblastoma
                  </td>
                  <td className="px-5 py-3">Li–Fraumeni syndrome</td>
                  <td className="px-5 py-3">
                    Constitutional TP53 testing; distinguish germline variants
                    from tumor-only alterations and clonal hematopoiesis.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Young patient with multiple primary cancers, especially
                    sarcoma, osteosarcoma, and breast carcinoma
                  </td>
                  <td className="px-5 py-3">Li–Fraumeni syndrome</td>
                  <td className="px-5 py-3">
                    Review age at each diagnosis and family history; classic
                    Chompret criteria do not capture every carrier.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Bilateral or multicentric retinal tumors in an infant
                  </td>
                  <td className="px-5 py-3">Retinoblastoma syndrome</td>
                  <td className="px-5 py-3">
                    RB1 germline testing; evaluate for trilateral retinoblastoma
                    and counsel regarding second primary malignancies.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Retinoblastoma survivor with a later osteosarcoma or soft
                    tissue sarcoma
                  </td>
                  <td className="px-5 py-3">Heritable RB1 predisposition</td>
                  <td className="px-5 py-3">
                    Consider a second primary malignancy; assess prior
                    radiotherapy field and lifetime cancer risk.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Primary hyperparathyroidism plus pituitary or
                    gastroenteropancreatic NET; MEN1 testing negative
                  </td>
                  <td className="px-5 py-3">MEN4</td>
                  <td className="px-5 py-3">
                    Consider germline CDKN1B testing with methods capable of
                    detecting sequence and copy-number variants.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Multiple cutaneous melanomas and dysplastic nevi, especially
                    with pancreatic cancer or astrocytoma in the family
                  </td>
                  <td className="px-5 py-3">CDKN2A-related predisposition</td>
                  <td className="px-5 py-3">
                    Germline CDKN2A testing; if negative, consider CDK4 and
                    other melanoma susceptibility genes.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Melanoma-prone family with negative CDKN2A testing
                  </td>
                  <td className="px-5 py-3">
                    CDK4-related melanoma predisposition
                  </td>
                  <td className="px-5 py-3">
                    Germline CDK4 sequencing; codon 24 variants impair p16
                    binding and activate cell-cycle progression.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Chronic noninfectious lymphadenopathy, splenomegaly, and
                    autoimmune cytopenias
                  </td>
                  <td className="px-5 py-3">
                    Autoimmune lymphoproliferative syndrome
                  </td>
                  <td className="px-5 py-3">
                    Peripheral blood flow cytometry for αβ CD4−/CD8−
                    double-negative T cells; assess FAS-mediated apoptosis and
                    germline/somatic variants.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Reactive-appearing node with pale paracortical expansion,
                    polytypic plasmacytosis, and double-negative T cells
                  </td>
                  <td className="px-5 py-3">ALPS</td>
                  <td className="px-5 py-3">
                    Correlate tissue findings with peripheral blood flow; do not
                    mistake restricted T-cell repertoire alone for lymphoma.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setOverviewOpen(!overviewOpen)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pathway Overview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Normal pathway function, key genes, pathogenic mechanisms, and
              associated syndromes.
            </p>
          </div>
          <span className="text-xl text-slate-500">
            {overviewOpen ? "−" : "+"}
          </span>
        </button>
        {overviewOpen && (
          <div className="space-y-4 border-t border-slate-200 p-5">
            {pathways.map((pathway) => (
              <article
                key={pathway.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <h3 className="font-bold text-slate-900">{pathway.title}</h3>
                <dl className="mt-3 grid gap-3 text-sm md:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Pathway Function
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.function}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Key Genes</dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.genes}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Normal Gene / Protein Function
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.normalFunction}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Pathogenic Variant Mechanism
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.mechanism}
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-semibold text-slate-500">
                      Associated Syndromes
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.syndromes}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Pathway-Specific Entity Outlines
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {totalEntities} syndrome outlines across {pathways.length} pathway
              groups.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setExpanded(visibleIds)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={() => setExpanded([])}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Collapse All
            </button>
          </div>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_280px]">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Search syndromes, genes, morphology, or markers
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g., TP53, RB1, CDKN2A, double-negative T cells"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Pathway
            </span>
            <select
              value={activePathway}
              onChange={(event) => setActivePathway(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option value="all">All pathways</option>
              {pathways.map((pathway) => (
                <option key={pathway.id} value={pathway.id}>
                  {pathway.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-6">
          {visiblePathways.map((pathway) => (
            <section key={pathway.id} className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg font-bold text-sky-800">
                  {pathway.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {pathway.function}
                </p>
              </div>
              {pathway.entities.map((entity) => {
                const id = `${pathway.id}:${entity.name}`;
                const isOpen = expanded.includes(id);
                return (
                  <article
                    key={id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleEntity(id)}
                      className="flex w-full flex-col gap-2 px-5 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {entity.name}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          Gene: {entity.genes} <span className="mx-2">·</span>{" "}
                          {entity.inheritance}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                        {isOpen ? "Collapse −" : "Expand +"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="grid gap-5 border-t border-slate-200 p-5 lg:grid-cols-2">
                        <OutlineSection
                          title="Clinical Profile"
                          items={entity.profile}
                        />
                        <OutlineSection
                          title="Essential Diagnostic Criteria"
                          items={entity.criteria}
                        />
                        <OutlineSection
                          title="Histopathology"
                          items={entity.histology}
                        />
                        <OutlineSection
                          title="Immunophenotype"
                          items={entity.ihc}
                        />
                        <OutlineSection
                          title="Differential Diagnosis"
                          items={entity.differential}
                        />
                        <OutlineSection
                          title="Molecular Pathology"
                          items={entity.molecular}
                        />
                        <div className="rounded-xl bg-sky-50 p-4 lg:col-span-2">
                          <h5 className="text-sm font-bold uppercase tracking-wide text-sky-900">
                            Pathology Clues
                          </h5>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-sky-950">
                            {entity.clues.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          ))}
          {visiblePathways.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No matching syndromes. Try another gene, marker, or search term.
            </div>
          )}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-500">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}
