"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  profile: string;
  criteria: string;
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular: string[];
  subtypes?: string[];
};

const entities: Entity[] = [
  {
    name: "Chronic Myeloid Leukemia, BCR::ABL1-Positive",
    group: "Myeloproliferative Neoplasms",
    profile:
      "Childhood/adolescence; slight male predominance; blood and marrow, with frequent splenomegaly.",
    criteria:
      "Leukocytosis with granulocytes at all stages of maturation; splenomegaly; fatigue, fever, bleeding, or bone pain.",
    histology: [
      "Hypercellular marrow with marked granulocytic hyperplasia and myeloid-to-erythroid ratio often ≥10:1.",
      "Myelocytes, promyelocytes, and segmented neutrophils are prominent.",
      "Megakaryocytes form clusters and often include small hypolobated forms.",
      "Basophilia and eosinophilia may accompany the granulocytic proliferation.",
      "Blast phase is defined by ≥20% blasts in blood or marrow; pediatric blast phase is often lymphoblastic.",
    ],
    ihc: [
      "BCR::ABL1 fusion is defining; establish transcript type at diagnosis for molecular monitoring.",
      "Flow cytometry is useful in blast phase to assign lineage; it is not routinely useful in chronic phase.",
    ],
    differential: [
      {
        name: "Juvenile myelomonocytic leukemia",
        distinction:
          "JMML shows prominent monocytosis and RAS-pathway alterations; CML has BCR::ABL1 and granulocytic maturation across the spectrum.",
      },
      {
        name: "MDS/MPN or reactive leukocytosis",
        distinction:
          "Assess marrow pattern, basophilia, splenomegaly, and demonstrate BCR::ABL1.",
      },
    ],
    molecular: [
      "Demonstrate Philadelphia chromosome or BCR::ABL1 by karyotype, FISH, or RT-PCR; characterize transcript.",
    ],
  },
  {
    name: "Juvenile Myelomonocytic Leukemia",
    group: "Myeloproliferative Neoplasms",
    profile:
      "Usually <3 years; boys more often affected; marrow, blood, liver, spleen, skin, lymph nodes, and occasionally lung or gut.",
    criteria:
      "Hepatosplenomegaly, lymphadenopathy, fever, bleeding, respiratory or gastrointestinal symptoms, and eczematous or infiltrative skin lesions.",
    histology: [
      "Peripheral blood shows leukocytosis with granulocytic left shift and absolute monocytosis, usually >1 × 10⁹/L; blasts remain <20%.",
      "Marrow is hypercellular with granulocytic proliferation; monocytes are less conspicuous than in blood.",
      "Megakaryocytes are often decreased; dysplasia is usually limited.",
      "Extramedullary infiltrates may involve dermis, liver sinusoids/portal tracts, splenic red pulp, and alveolar septa.",
    ],
    ihc: [
      "No specific immunophenotype defines JMML; lysozyme and CD68 highlight monocytic infiltrates in tissue.",
      "Flow cytometry may show aberrant myeloid maturation and reduced HLA-DR on monocytes.",
    ],
    differential: [
      {
        name: "CML, BCR::ABL1-positive",
        distinction:
          "CML has BCR::ABL1, marked granulocytic maturation, and typically lacks the defining RAS-pathway profile of JMML.",
      },
      {
        name: "Noonan syndrome-associated transient myeloproliferation",
        distinction:
          "Clinical and hematologic overlap is substantial; test nonhematopoietic tissue to distinguish germline from somatic PTPN11/RAS-pathway variants.",
      },
      {
        name: "RAS-associated lymphoproliferative disease",
        distinction:
          "Can overlap clinically and genetically; consider the broader immune-dysregulation phenotype and absence of typical progressive myeloproliferative disease.",
      },
    ],
    molecular: [
      "A canonical RAS-pathway driver is central: PTPN11, NRAS, KRAS, NF1, or CBL. Establish germline versus somatic status when relevant.",
    ],
  },
  {
    name: "Refractory Cytopenia of Childhood (Childhood MDS with Low Blasts)",
    group: "Myelodysplastic Neoplasms",
    profile: "All pediatric age groups; both sexes; blood and marrow.",
    criteria:
      "Persistent cytopenia with fatigue, fever, bleeding, or infections; hepatosplenomegaly is generally absent.",
    histology: [
      "Marrow is often markedly hypocellular, although normocellular or hypercellular cases occur.",
      "Dysplasia must be demonstrated; micromegakaryocytes and abnormal megakaryocyte nuclear lobation are particularly useful clues.",
      "Erythroid islands may be patchy; granulopoiesis is often reduced.",
      "Blasts are <5% in marrow and <2% in peripheral blood.",
      "Reticulin fibrosis is not increased.",
    ],
    ihc: [
      "CD61, CD41, or CD42b highlights micromegakaryocytes; interpret platelet-associated staining carefully.",
    ],
    differential: [
      {
        name: "Acquired aplastic anemia",
        distinction:
          "Aplastic anemia shows fatty replacement and markedly reduced hematopoietic cells without convincing dysplasia or abnormal erythroid islands.",
      },
      {
        name: "Inherited bone marrow failure syndromes",
        distinction:
          "Fanconi anemia, telomere biology disorders, Shwachman-Diamond syndrome, and GATA2/SAMD9/SAMD9L disorders may mimic RCC; integrate phenotype and germline testing.",
      },
      {
        name: "MDS with increased blasts",
        distinction:
          "RCC has <5% marrow blasts and <2% blood blasts; increased-blast MDS exceeds either threshold.",
      },
    ],
    molecular: [
      "Monosomy 7/del(7q) is important; assess for germline GATA2, SAMD9, and SAMD9L alterations, particularly with monosomy 7.",
    ],
  },
  {
    name: "Myelodysplastic Neoplasm with Increased Blasts (Childhood MDS-EB)",
    group: "Myelodysplastic Neoplasms",
    profile:
      "Children and adolescents; male predominance; blood and marrow, occasionally extramedullary sites.",
    criteria:
      "Cytopenia-associated fever, malaise, and bleeding; consider inherited predisposition, immunodeficiency, prior aplastic anemia, or cytotoxic exposure.",
    histology: [
      "Dysplasia involves at least one myeloid lineage.",
      "Blasts are 5% to <20% in marrow or 2% to <20% in blood, with <20% in both compartments.",
      "Marrow may be hypercellular, normocellular, or hypocellular.",
      "Abnormal localization of immature precursors and disorganized erythroid/megakaryocytic architecture may be present.",
      "Micromegakaryocytes and dysgranulopoiesis may be seen.",
    ],
    ihc: [
      "CD34 helps identify and quantify immature myeloid cells; correlate with aspirate differential.",
    ],
    differential: [
      {
        name: "Refractory cytopenia of childhood",
        distinction: "RCC has <5% marrow blasts and <2% blood blasts.",
      },
      {
        name: "AML",
        distinction:
          "AML is generally defined by ≥20% blasts, unless an AML-defining genetic alteration establishes AML at a lower blast count.",
      },
      {
        name: "Inherited marrow failure with dysplasia",
        distinction:
          "Use clinical history, physical findings, cytogenetics, and germline testing.",
      },
    ],
    molecular: [
      "Monosomy 7/del(7q) is common; evaluate for GATA2 deficiency and other germline predisposition. TP53 mutation or complex karyotype has adverse implications.",
    ],
  },
  {
    name: "Acute Myeloid Leukemia, Defined by Differentiation",
    group: "Acute Myeloid Leukemia",
    profile:
      "Infancy through adolescence; blood and marrow; extramedullary myeloid sarcoma may involve skin, CNS, lymph nodes, testes, or GI tract.",
    criteria:
      "Fever, fatigue, bone pain, bruising, petechiae, bleeding, and sometimes hyperleukocytosis.",
    histology: [
      "Blasts or blast equivalents are ≥20% in blood or marrow in the absence of an AML-defining genetic alteration allowing diagnosis at a lower count.",
      "Morphologic patterns include minimal differentiation, without maturation, with maturation, myelomonocytic, monoblastic/monocytic, erythroid, and megakaryoblastic forms.",
      "Auer rods may be present but are not required.",
      "Myeloid sarcoma effaces tissue architecture and requires lineage confirmation.",
    ],
    ihc: [
      "Use flow cytometry to establish myeloid lineage and exclude definitive B- or T-lineage differentiation.",
      "MPO supports granulocytic differentiation; monocytic, erythroid, and megakaryocytic lineages require appropriate lineage markers.",
      "CD41, CD42b, and CD61 can stain platelets; beware nonspecific platelet-associated signal.",
    ],
    differential: [
      {
        name: "AML with defining genetic abnormalities",
        distinction:
          "A defining fusion or mutation may supersede morphology and may permit diagnosis below 20% blasts.",
      },
      {
        name: "B- or T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Establish lineage with specific B-cell or cytoplasmic CD3 markers; do not rely on morphology alone.",
      },
      {
        name: "Myeloid sarcoma versus lymphoma or soft-tissue sarcoma",
        distinction:
          "Use a broad lineage-directed immunohistochemical panel and correlate with marrow/blood findings.",
      },
    ],
    molecular: [
      "Perform karyotype and molecular testing to identify recurrent fusions and mutations; classify germline-predisposition and therapy-related cases separately.",
    ],
    subtypes: [
      "AML with minimal differentiation",
      "AML without maturation",
      "AML with maturation",
      "Acute myelomonocytic leukemia",
      "Acute monoblastic/monocytic leukemia",
      "Acute erythroid leukemia",
      "Acute megakaryoblastic leukemia",
    ],
  },
  {
    name: "AML with Defining Genetic Abnormalities",
    group: "Acute Myeloid Leukemia",
    profile:
      "Predominantly pediatric; blood and marrow; clinical presentation resembles acute leukemia; some genetic subtypes are enriched in infants.",
    criteria:
      "Acute leukemia symptoms; hyperleukocytosis may occur, especially in selected KMT2A-rearranged cases.",
    histology: [
      "Blasts show myeloid differentiation; defining genetic alterations determine the entity.",
      "AML-associated gene fusions may establish AML even when blasts are <20%, provided there is convincing evidence of a myeloid neoplasm.",
      "Morphology varies by fusion and may include monocytic or megakaryoblastic differentiation.",
      "For AML with CEBPA mutation, the relevant pediatric criterion is a C-terminal bZIP-domain mutation.",
    ],
    ihc: [
      "Flow cytometry establishes myeloid lineage and may reveal subtype-associated phenotypes.",
      "CBFA2T3::GLIS2 AML may show a RAM phenotype: CD56 bright with low HLA-DR and CD38.",
    ],
    differential: [
      {
        name: "AML defined by differentiation",
        distinction:
          "Use the genetic workup to identify an entity-defining fusion or mutation rather than assigning an NOS morphologic category.",
      },
      {
        name: "Transient abnormal myelopoiesis / Down syndrome-associated AML",
        distinction:
          "Clinical context, age, trisomy 21, GATA1 mutation, and disease course are decisive.",
      },
      {
        name: "B- or T-lymphoblastic leukemia",
        distinction:
          "Confirm myeloid lineage and exclude lineage-defining lymphoid markers.",
      },
    ],
    molecular: [
      "Relevant alterations include PML::RARA, RUNX1::RUNX1T1, CBFB::MYH11, KMT2A rearrangement, NPM1 mutation, MECOM rearrangement, DEK::NUP214, RBM15::MRTFA, BCR::ABL1, NUP98 rearrangement, CEBPA mutation, MNX1::ETV6, KAT6A::CREBBP, and CBFA2T3::GLIS2. Cryptic fusions may require FISH or RNA sequencing.",
    ],
    subtypes: [
      "PML::RARA fusion",
      "RUNX1::RUNX1T1 fusion",
      "CBFB::MYH11 fusion",
      "KMT2A rearrangement",
      "NPM1 mutation",
      "MECOM rearrangement",
      "DEK::NUP214 fusion",
      "RBM15::MRTFA fusion",
      "BCR::ABL1 fusion",
      "NUP98 rearrangement",
      "CEBPA bZIP-domain mutation",
      "MNX1::ETV6 fusion",
      "KAT6A::CREBBP fusion",
      "CBFA2T3::GLIS2 fusion",
      "FUS::ERG fusion",
    ],
  },
  {
    name: "Myeloid Neoplasms Associated with Germline Predisposition",
    group: "Myeloid Neoplasms and Predisposition",
    profile:
      "Children and young adults; variable sex; marrow and blood, sometimes preceded by congenital abnormalities or longstanding cytopenia/thrombocytopenia.",
    criteria:
      "Cytopenias, marrow failure, recurrent infections, bleeding, congenital anomalies, or family history of myeloid neoplasia.",
    histology: [
      "Morphology may resemble RCC, MDS with increased blasts, AML, or JMML.",
      "Look for lineage dysplasia, blast excess, hypocellularity, and cytogenetic evolution such as monosomy 7.",
      "A normal physical examination does not exclude germline predisposition.",
    ],
    ihc: [
      "IHC/flow phenotype depends on the myeloid neoplasm; no single immunophenotype establishes germline predisposition.",
    ],
    differential: [
      {
        name: "Sporadic MDS/AML",
        distinction:
          "A germline predisposition requires testing of nonhematopoietic tissue and integration of family/personal history.",
      },
      {
        name: "Inherited bone marrow failure without neoplasia",
        distinction:
          "Distinguish clonal progression by marrow morphology, cytogenetics, and molecular studies.",
      },
    ],
    molecular: [
      "Consider germline RUNX1, GATA2, CEBPA, ANKRD26, SAMD9, SAMD9L, and genes associated with Fanconi anemia, telomere biology disorders, NF1, and CBL syndrome.",
    ],
    subtypes: [
      "CEBPA-associated familial AML",
      "Familial platelet disorder with RUNX1 mutation",
      "GATA2 deficiency",
      "Severe congenital neutropenia",
      "Fanconi anemia",
      "Telomere biology disorders",
      "NF1- and CBL-associated predisposition",
      "MIRAGE syndrome (SAMD9)",
      "SAMD9L-related ataxia-pancytopenia syndrome",
      "ANKRD26-related thrombocytopenia",
    ],
  },
  {
    name: "Myeloid Proliferations Associated with Down Syndrome",
    group: "Myeloid Neoplasms and Predisposition",
    profile:
      "Neonates and young children with trisomy 21; blood, marrow, liver, and skin.",
    criteria:
      "Transient neonatal leukocytosis or cytopenias; hepatosplenomegaly, effusions, rash, or organ dysfunction may occur.",
    histology: [
      "Transient abnormal myelopoiesis (TAM) occurs in neonates and may regress spontaneously.",
      "Blasts may show megakaryoblastic differentiation and can involve liver and skin.",
      "Myeloid leukemia associated with Down syndrome (ML-DS) develops later, often after a history of TAM.",
      "Distinguish TAM from ML-DS by age, clinical course, blast burden, and persistent/progressive disease.",
    ],
    ihc: [
      "Blasts commonly express megakaryocytic markers; interpret CD41/CD61 with attention to platelet contamination.",
    ],
    differential: [
      {
        name: "JMML",
        distinction:
          "JMML is driven by RAS-pathway lesions and typically presents with persistent myelomonocytic proliferation rather than neonatal GATA1-mutant TAM.",
      },
      {
        name: "Sporadic AML/AMKL",
        distinction:
          "Trisomy 21 context and GATA1 mutation support Down syndrome-associated disease.",
      },
    ],
    molecular: [
      "Somatic GATA1 mutation is characteristic of TAM and ML-DS; assess constitutional trisomy 21 or mosaicism.",
    ],
    subtypes: [
      "Transient abnormal myelopoiesis (TAM)",
      "Myeloid leukemia associated with Down syndrome (ML-DS)",
    ],
  },
  {
    name: "Mastocytosis",
    group: "Mast Cell Neoplasms",
    profile:
      "Infancy and childhood; skin is common, with variable systemic involvement.",
    criteria:
      "Cutaneous lesions, flushing, pruritus, urticaria, or symptoms related to mediator release; systemic disease is less common in children.",
    histology: [
      "Cutaneous mastocytosis shows increased dermal mast cells, often in aggregates.",
      "Systemic mastocytosis requires extracutaneous involvement and application of appropriate diagnostic criteria.",
      "Mast cell sarcoma shows destructive, mass-forming growth and cytologic atypia.",
    ],
    ihc: [
      "Mast cells express tryptase and CD117; aberrant CD25 and/or CD2 may support systemic mastocytosis in the appropriate setting.",
    ],
    differential: [
      {
        name: "Juvenile xanthogranuloma",
        distinction:
          "Histiocytes are typically CD68/CD163 positive and lack the mast-cell phenotype.",
      },
      {
        name: "Other cutaneous infiltrates",
        distinction:
          "Correlate with morphology and mast-cell markers; scattered normal mast cells are not diagnostic.",
      },
    ],
    molecular: [
      "KIT mutation testing, particularly KIT D816V, is useful in systemic disease; a negative result does not exclude all cases.",
    ],
    subtypes: [
      "Cutaneous mastocytosis",
      "Systemic mastocytosis",
      "Mast cell sarcoma",
    ],
  },
  {
    name: "B-Lymphoblastic Leukemia/Lymphoma",
    group: "Precursor Lymphoid Neoplasms",
    profile:
      "Infancy through adolescence; marrow and blood; lymphoblastic lymphoma may involve skin, bone, lymph nodes, or other extranodal sites.",
    criteria:
      "Marrow failure symptoms, fever, bone pain, bruising, or a mass-forming extranodal presentation.",
    histology: [
      "B-lymphoblasts are immature cells with high nuclear-to-cytoplasmic ratios, fine chromatin, and inconspicuous nucleoli.",
      "Leukemia versus lymphoma is determined by the extent of marrow involvement; ≥20% marrow B-lymphoblasts supports B-ALL.",
      "A mass with limited marrow involvement may present as B-lymphoblastic lymphoma.",
    ],
    ihc: [
      "Typical markers include TdT, CD34, CD10, CD19, CD79a, and PAX5; CD20 is variable.",
      "Demonstrate B-lineage with a coherent marker profile; exclude myeloid and T-lineage differentiation.",
    ],
    differential: [
      {
        name: "AML",
        distinction:
          "MPO and other myeloid-lineage markers support AML; B-lineage requires a coherent B-cell precursor phenotype.",
      },
      {
        name: "Mature B-cell lymphoma",
        distinction:
          "Mature B-cell neoplasms generally lack TdT and show mature B-cell differentiation.",
      },
      {
        name: "T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Cytoplasmic or surface CD3 establishes T-lineage; B-ALL expresses B-lineage markers.",
      },
    ],
    molecular: [
      "Recurrent genetic subgroups should be identified by cytogenetic and molecular testing; evaluate for germline predisposition when clinically indicated.",
    ],
  },
  {
    name: "T- and NK-Lymphoblastic Leukemia/Lymphoma",
    group: "Precursor Lymphoid Neoplasms",
    profile:
      "Children and adolescents; T-lineage often presents in adolescent boys with mediastinal/thymic disease; marrow, blood, and lymph nodes.",
    criteria:
      "Mediastinal mass, respiratory symptoms, lymphadenopathy, or marrow failure.",
    histology: [
      "Monomorphic population of immature lymphoblasts with scant cytoplasm and fine chromatin.",
      "T-lymphoblastic lymphoma often forms a thymic/mediastinal mass; marrow involvement may be limited.",
      "Leukemic presentation has substantial marrow involvement.",
    ],
    ihc: [
      "T-lineage is established by cytoplasmic or surface CD3.",
      "TdT, CD1a, CD2, CD5, CD7, and CD34 are variably expressed; maturation markers help define stage.",
    ],
    differential: [
      {
        name: "B-lymphoblastic leukemia/lymphoma",
        distinction:
          "B-ALL expresses CD19, CD79a, PAX5 and other B-lineage markers; T-ALL requires cytoplasmic/surface CD3.",
      },
      {
        name: "Thymoma",
        distinction:
          "Thymoma shows a network of epithelial cells highlighted by cytokeratin, with admixed non-neoplastic immature T cells.",
      },
      {
        name: "AML",
        distinction:
          "Use MPO and lineage-specific markers; aberrant CD7 alone does not establish T-lineage.",
      },
    ],
    molecular: [
      "Clonal T-cell receptor gene rearrangement supports T-lineage; correlate with immunophenotype.",
    ],
  },
  {
    name: "Primary Mediastinal (Thymic) Large B-Cell Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Adolescents and young adults; mediastinum/thymus; often female predominance in young adults.",
    criteria:
      "Bulky anterior mediastinal mass with cough, dyspnea, chest pain, or superior vena cava symptoms.",
    histology: [
      "Diffuse sheets of large atypical B cells in a fibrotic background; compartmentalizing sclerosis may be prominent.",
      "Tumor cells may have clear cytoplasm and irregular nuclei.",
      "Necrosis may be present in bulky lesions.",
    ],
    ihc: [
      "B-cell markers are retained, commonly CD20, PAX5, CD79a; CD23 and MAL may be expressed.",
      "CD30 may be positive but is often weaker/heterogeneous than in classic Hodgkin lymphoma.",
    ],
    differential: [
      {
        name: "Classic Hodgkin lymphoma, nodular sclerosis",
        distinction:
          "CHL has sparse Reed-Sternberg cells in an inflammatory background, strong CD30, frequent CD15, and weak PAX5.",
      },
      {
        name: "Mediastinal gray zone lymphoma",
        distinction:
          "Gray zone lymphoma has discordant or intermediate morphologic and immunophenotypic features between PMBCL and CHL.",
      },
    ],
    molecular: [
      "Molecular profiles may show 9p24.1/JAK2 pathway alterations and CIITA-related changes; interpret with morphology and phenotype.",
    ],
  },
  {
    name: "Diffuse Large B-Cell Lymphoma, NOS",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children/adolescents; nodal or extranodal, including abdomen, head and neck, and mediastinum.",
    criteria:
      "Rapidly enlarging mass, systemic symptoms, or extranodal organ involvement.",
    histology: [
      "Diffuse effacement by sheets of large atypical lymphoid cells with prominent nucleoli.",
      "Cytologic and architectural heterogeneity is common; classify only after excluding defined pediatric entities.",
    ],
    ihc: [
      "CD20, PAX5, CD79a support B-cell lineage; CD10, BCL6, MUM1 help assign cell-of-origin phenotype.",
      "Ki-67 is variable and often high.",
    ],
    differential: [
      {
        name: "Burkitt lymphoma",
        distinction:
          "BL is monomorphic, medium-sized, starry-sky, germinal-center phenotype with nearly 100% Ki-67 and characteristic MYC biology.",
      },
      {
        name: "Large B-cell lymphoma with IRF4 rearrangement",
        distinction:
          "Often localized head/neck disease in children; strong IRF4/MUM1 and BCL6 expression with IRF4 rearrangement.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "EBER positivity in tumor cells defines the EBV-associated category in the appropriate setting.",
      },
      {
        name: "PMBCL",
        distinction:
          "PMBCL is mediastinal-centered and has characteristic sclerosis and phenotype.",
      },
    ],
    molecular: [
      "Assess MYC, BCL2, BCL6 rearrangements when indicated; EBV testing by EBER is important in the appropriate differential.",
    ],
  },
  {
    name: "EBV-Positive Diffuse Large B-Cell Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children/young adults; nodal or extranodal sites; consider immune dysregulation or immunodeficiency.",
    criteria:
      "Mass lesion, lymphadenopathy, constitutional symptoms; clinical immune status is important.",
    histology: [
      "Diffuse proliferation of large atypical B cells; morphology may be immunoblastic or plasmablastic.",
      "EBV-positive tumor cells are distributed throughout the neoplastic population.",
    ],
    ihc: [
      "EBER must label the neoplastic cells.",
      "B-cell markers are usually expressed but may be attenuated in plasmablastic differentiation.",
    ],
    differential: [
      {
        name: "Polymorphic EBV-associated LPD",
        distinction:
          "Polymorphic LPD has a heterogeneous mixture of small lymphocytes, immunoblasts, and plasma cells rather than a destructive monomorphic large-cell proliferation.",
      },
      {
        name: "Plasmablastic lymphoma",
        distinction:
          "Often loses conventional B-cell markers and expresses plasma-cell markers; assess EBV and clinical context.",
      },
      {
        name: "EBV-positive mucocutaneous ulcer",
        distinction:
          "Usually localized, sharply circumscribed ulcer in an immunosuppressed setting.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is essential to document EBV in tumor cells; assess clonality and immune status.",
    ],
  },
  {
    name: "Large B-Cell Lymphoma with IRF4 Rearrangement",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children and young adults; commonly head and neck/Waldeyer ring; often localized.",
    criteria: "Localized lymphadenopathy or tonsillar/adenoidal mass.",
    histology: [
      "Follicular, diffuse, or mixed architecture may occur.",
      "Large atypical cells show centroblastic or immunoblastic morphology.",
    ],
    ihc: [
      "Strong MUM1/IRF4 and BCL6 expression; B-cell markers are retained.",
      "BCL2 may be positive; interpret in the context of the full phenotype.",
    ],
    differential: [
      {
        name: "Pediatric-type follicular lymphoma",
        distinction:
          "PTFL is usually localized nodal disease with follicular architecture and lacks IRF4 rearrangement.",
      },
      {
        name: "DLBCL, NOS",
        distinction:
          "DLBCL lacks the defining IRF4 rearrangement and characteristic phenotype.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "CHL has CD30-positive Reed-Sternberg cells and attenuated B-cell program.",
      },
    ],
    molecular: [
      "Demonstrate IRF4 rearrangement; absence of MYC and BCL2 rearrangements is supportive.",
    ],
  },
  {
    name: "Pediatric-Type Follicular Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children/adolescents, predominantly boys; localized peripheral lymph nodes, especially head and neck.",
    criteria:
      "Solitary or localized, rapidly enlarging lymph node; usually no systemic symptoms.",
    histology: [
      "Expansile follicular proliferation with back-to-back follicles and attenuated mantle zones.",
      "Follicles are often enlarged and crowded; cytology is usually blastoid/centroblast-rich.",
      "Architecture is often predominantly follicular and localized.",
    ],
    ihc: [
      "Germinal-center phenotype: CD20, CD10, BCL6 positive; BCL2 usually negative in neoplastic follicles.",
      "Ki-67 is often high but may show a polarized or heterogeneous pattern.",
    ],
    differential: [
      {
        name: "Large B-cell lymphoma with IRF4 rearrangement",
        distinction:
          "IRF4/MUM1 is strongly expressed and IRF4 rearrangement is demonstrable.",
      },
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive follicles retain polarization, mantle zones, tingible-body macrophages, and a mixed cytology.",
      },
      {
        name: "Conventional follicular lymphoma",
        distinction:
          "Conventional FL more often occurs in adults, is frequently BCL2-positive, and commonly carries BCL2 rearrangement.",
      },
    ],
    molecular: [
      "BCL2 rearrangement is generally absent; evaluate clonality and exclude IRF4 rearrangement when indicated.",
    ],
  },
  {
    name: "Pediatric Nodal Marginal Zone Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children/adolescents, often boys; peripheral lymph nodes, commonly head and neck.",
    criteria:
      "Localized painless lymphadenopathy, usually without systemic symptoms.",
    histology: [
      "Partial or complete nodal architectural effacement by expanded marginal-zone/monocytoid B cells.",
      "Reactive germinal centers may be colonized; perifollicular growth is characteristic.",
    ],
    ihc: [
      "B-cell markers are retained; marginal-zone phenotype commonly lacks CD10 and BCL6 in tumor cells.",
      "Plasma cells may show light-chain restriction.",
    ],
    differential: [
      {
        name: "Pediatric-type follicular lymphoma",
        distinction:
          "PTFL has a germinal-center phenotype with CD10/BCL6 positivity and a predominantly follicular pattern.",
      },
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive nodes retain architecture and polytypic B cells without destructive marginal-zone expansion.",
      },
      {
        name: "Adult-type marginal zone lymphoma",
        distinction:
          "Clinical setting and architecture overlap; pediatric nodal form is typically localized and has distinct clinicopathologic context.",
      },
    ],
    molecular: [
      "Clonal IG gene rearrangement may support diagnosis; no single recurrent defining genetic alteration is required.",
    ],
  },
  {
    name: "ALK-Positive Large B-Cell Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile: "Rare in children; nodal or extranodal mass lesions.",
    criteria: "Rapidly enlarging mass or lymphadenopathy.",
    histology: [
      "Large immunoblastic/plasmablastic cells in sheets or sinusoidal patterns.",
      "Eccentric nuclei and abundant cytoplasm may produce plasmablastic appearance.",
    ],
    ihc: [
      "ALK is strongly positive, often granular cytoplasmic or perinuclear depending on fusion partner.",
      "Plasma-cell markers (CD138, CD38, MUM1) are often positive; CD20 and PAX5 are commonly absent.",
    ],
    differential: [
      {
        name: "Plasmablastic lymphoma",
        distinction: "PBL is usually ALK-negative and often EBV-positive.",
      },
      {
        name: "ALK-positive anaplastic large cell lymphoma",
        distinction:
          "ALCL expresses T-cell/cytotoxic markers and lacks a convincing B-cell/plasma-cell program.",
      },
      {
        name: "ALK-positive histiocytosis",
        distinction:
          "Histiocytic lineage markers such as CD163 and CD68 support histiocytic differentiation.",
      },
    ],
    molecular: [
      "ALK rearrangement/fusion supports diagnosis; identify fusion partner when feasible.",
    ],
  },
  {
    name: "Lymphomatoid Granulomatosis",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Rare in children; predominantly lungs, with possible skin, CNS, kidney, or liver involvement.",
    criteria:
      "Pulmonary nodules/masses, cough, dyspnea, fever, weight loss; consider immune dysfunction.",
    histology: [
      "Angiocentric and angiodestructive polymorphous lymphoid infiltrate with geographic necrosis.",
      "EBV-positive atypical B cells are scattered within a prominent reactive T-cell background.",
      "Grading is based on the number of EBV-positive atypical B cells and degree of necrosis.",
    ],
    ihc: [
      "EBER highlights atypical B cells; CD20/PAX5 label the B-cell component.",
      "Background T cells are prominent; assess B-cell burden in relation to grade.",
    ],
    differential: [
      {
        name: "EBV-positive DLBCL",
        distinction:
          "DLBCL shows a more monomorphic destructive large B-cell proliferation.",
      },
      {
        name: "Infection/vasculitis",
        distinction:
          "Microorganisms and vessel-centered inflammation may mimic; correlate with stains, cultures, and clinical findings.",
      },
      {
        name: "Polymorphic EBV-associated LPD",
        distinction:
          "May be polymorphic but lacks the characteristic angiocentric/angiodestructive pulmonary pattern.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is essential; assess EBV-positive B-cell burden.",
    ],
  },
  {
    name: "Plasmablastic Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children are uncommon; oral cavity, jaw, GI tract, and extranodal sites; associated with immunodeficiency including HIV.",
    criteria:
      "Rapidly growing extranodal mass, often oral; immunosuppression is a key clinical clue.",
    histology: [
      "Diffuse sheets of large plasmablasts/immunoblasts with eccentric nuclei, prominent nucleoli, and abundant basophilic cytoplasm.",
      "High mitotic activity and apoptosis are common.",
    ],
    ihc: [
      "CD38, CD138, MUM1/IRF4, and BLIMP1 are typically expressed.",
      "CD20 and PAX5 are usually absent or weak; EBER is frequently positive.",
      "Ki-67 is typically very high.",
    ],
    differential: [
      {
        name: "ALK-positive large B-cell lymphoma",
        distinction:
          "ALK expression and ALK rearrangement favor ALK-positive LBCL; PBL is usually ALK-negative.",
      },
      {
        name: "Plasma cell neoplasm",
        distinction:
          "Clinical context, EBER, and absence of a typical plasma-cell myeloma setting help; assess light-chain restriction.",
      },
      {
        name: "Burkitt lymphoma",
        distinction:
          "BL retains CD20/CD10/BCL6 and shows MYC-driven germinal-center phenotype.",
      },
    ],
    molecular: [
      "MYC rearrangement may occur; EBER testing is important, particularly in immunodeficiency-associated cases.",
    ],
  },
  {
    name: "Mediastinal Gray Zone Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile: "Adolescents/young adults; mediastinum.",
    criteria: "Bulky mediastinal mass with compressive symptoms.",
    histology: [
      "Morphology and phenotype show discordant/intermediate features between PMBCL and classic Hodgkin lymphoma.",
      "May show CHL-like morphology with stronger B-cell program, or large B-cell morphology with strong CD30 and attenuated B-cell markers.",
    ],
    ihc: [
      "CD30 is commonly positive; CD15 may be positive.",
      "B-cell markers (CD20, PAX5, OCT2, BOB1) are variably retained; evaluate the full program.",
    ],
    differential: [
      {
        name: "PMBCL",
        distinction:
          "PMBCL generally retains a stronger B-cell phenotype and has characteristic sclerosis.",
      },
      {
        name: "Classic Hodgkin lymphoma, nodular sclerosis",
        distinction:
          "CHL has strong CD30, often CD15, weak PAX5, and sparse HRS cells in inflammatory background.",
      },
    ],
    molecular: [
      "No single molecular test defines the diagnosis; integrate morphology, phenotype, and mediastinal site.",
    ],
  },
  {
    name: "Burkitt Lymphoma",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children; abdomen, jaw/facial bones, and other extranodal sites; male predominance.",
    criteria:
      "Rapidly enlarging mass, abdominal pain/distension, intussusception, or jaw mass; tumor lysis risk.",
    histology: [
      "Monomorphic medium-sized cells with round nuclei, multiple small nucleoli, and basophilic cytoplasm.",
      "Numerous mitoses and apoptotic bodies produce a starry-sky pattern.",
      "Cytoplasmic vacuoles may be conspicuous.",
    ],
    ihc: [
      "CD20, CD10, BCL6, and MYC positive; BCL2 usually negative.",
      "Ki-67 approaches 100%; TdT is negative in conventional BL.",
    ],
    differential: [
      {
        name: "High-grade B-cell lymphoma with 11q aberration",
        distinction:
          "11q-aberrant lymphoma has characteristic 11q gain/loss pattern and lacks MYC rearrangement.",
      },
      {
        name: "DLBCL, NOS",
        distinction:
          "DLBCL has larger, more pleomorphic cells and usually lower proliferation.",
      },
      {
        name: "B-lymphoblastic leukemia/lymphoma",
        distinction:
          "B-lymphoblasts express TdT and often CD34; BL has mature B-cell phenotype.",
      },
    ],
    molecular: [
      "MYC rearrangement is characteristic, usually involving an immunoglobulin partner; MYC rearrangement is highly supportive but should be interpreted with morphology and phenotype.",
    ],
    subtypes: ["Endemic", "Sporadic", "Immunodeficiency-associated"],
  },
  {
    name: "High-Grade B-Cell Lymphoma with 11q Aberration",
    group: "Mature B-Cell Neoplasms",
    profile:
      "Children/adolescents; nodal or extranodal; clinical presentation may resemble BL.",
    criteria: "Rapidly growing mass, often with localized disease.",
    histology: [
      "Burkitt-like or high-grade large-cell morphology with starry-sky pattern and brisk proliferation.",
      "Tumor cells may show vacuolated cytoplasm and L3-like cytology.",
    ],
    ihc: [
      "Mature germinal-center B-cell phenotype: CD20, CD10, BCL6 positive; BCL2 often negative.",
      "Ki-67 is high.",
    ],
    differential: [
      {
        name: "Burkitt lymphoma",
        distinction:
          "BL has MYC rearrangement; 11q-aberrant lymphoma lacks MYC rearrangement and shows characteristic 11q gain/loss.",
      },
      {
        name: "DLBCL, NOS",
        distinction:
          "DLBCL is more pleomorphic and generally lacks the characteristic 11q pattern.",
      },
    ],
    molecular: [
      "Characteristic 11q gain/loss pattern; absence of MYC rearrangement is central to distinction from BL.",
    ],
  },
  {
    name: "Mature T/NK-Cell Neoplasms, NOS Group",
    group: "Mature T/NK-Cell Neoplasms",
    profile:
      "Rare in children; nodal, extranodal, skin, or systemic sites depending on subtype.",
    criteria:
      "Variable; often systemic symptoms, lymphadenopathy, skin lesions, or extranodal masses.",
    histology: [
      "Classify by cytology, architecture, lineage, and clinical distribution; this is not a substitute for a defined entity.",
      "Exclude precursor T-cell neoplasms and EBV-associated pediatric T/NK disorders.",
    ],
    ihc: [
      "Use pan-T-cell markers (CD2, CD3, CD5, CD7), cytotoxic markers, and NK markers as indicated.",
      "Assess T-cell receptor expression/rearrangement to distinguish T-cell from NK-cell lineage.",
    ],
    differential: [
      {
        name: "T-lymphoblastic leukemia/lymphoma",
        distinction:
          "Precursor lesions express TdT and immature markers; mature T/NK neoplasms lack the precursor phenotype.",
      },
      {
        name: "Systemic EBV-positive T-cell lymphoma of childhood",
        distinction:
          "Usually EBV-positive, systemic, and often follows primary EBV infection.",
      },
      {
        name: "Aggressive NK-cell leukemia",
        distinction:
          "Typically EBV-associated with NK phenotype and germline T-cell receptor genes.",
      },
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement supports T-cell lineage; germline TR configuration supports NK lineage.",
    ],
  },
  {
    name: "Aggressive NK-Cell Leukemia",
    group: "Mature T/NK-Cell Neoplasms",
    profile:
      "Children and adults; systemic disease involving blood, marrow, liver, spleen, and other organs.",
    criteria:
      "Fever, hepatosplenomegaly, cytopenias, liver dysfunction, and often hemophagocytic syndrome.",
    histology: [
      "Diffuse infiltrates of atypical lymphoid cells in marrow and organs; sinusoidal growth may be seen.",
      "Hemophagocytosis may accompany disease but is not required.",
    ],
    ihc: [
      "Cytoplasmic CD3ε positive; surface CD3 negative; CD56 commonly positive.",
      "Cytotoxic proteins (TIA1, granzyme B, perforin) are expressed; CD16 may be positive.",
    ],
    differential: [
      {
        name: "Systemic EBV-positive T-cell lymphoma of childhood",
        distinction:
          "T-cell lymphoma expresses surface/cytoplasmic T-lineage markers and has clonal TR rearrangement; NK leukemia has germline TR genes.",
      },
      {
        name: "Extranodal NK/T-cell lymphoma",
        distinction:
          "Usually localized extranodal destructive lesion, often upper aerodigestive tract, rather than fulminant leukemic systemic disease.",
      },
      {
        name: "T-cell lymphoma",
        distinction:
          "Demonstrate T-cell receptor expression/rearrangement to support T lineage.",
      },
    ],
    molecular: [
      "EBER is commonly positive; T-cell receptor genes remain in germline configuration.",
    ],
  },
  {
    name: "Mycosis Fungoides",
    group: "Primary Cutaneous T-Cell Neoplasms",
    profile:
      "Children/adolescents and adults; skin, often trunk and proximal extremities.",
    criteria:
      "Patch/plaque lesions; pediatric cases may be hypopigmented; folliculotropic disease may cause alopecia.",
    histology: [
      "Epidermotropic atypical lymphocytes with irregular/cerebriform nuclei; Pautrier microabscesses may occur but are not required.",
      "Early lesions may be subtle; clinicopathologic correlation and serial biopsies may be needed.",
      "Folliculotropic variant shows atypical lymphocytes involving follicular epithelium.",
    ],
    ihc: [
      "Usually CD3+, CD4+; loss of CD7 and/or CD5 may support neoplasia.",
      "CD8-positive phenotype can occur, especially in hypopigmented pediatric MF.",
    ],
    differential: [
      {
        name: "Inflammatory dermatitis",
        distinction:
          "Reactive infiltrates lack convincing atypical epidermotropism and aberrant antigen loss.",
      },
      {
        name: "Primary cutaneous CD30-positive LPD",
        distinction:
          "LyP and C-ALCL show prominent CD30-positive large cells rather than classic epidermotropic MF.",
      },
      {
        name: "Sézary syndrome",
        distinction:
          "Requires erythroderma and blood involvement; not simply skin-limited MF.",
      },
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement can support diagnosis but must be interpreted with morphology and clinical findings.",
    ],
    subtypes: [
      "Folliculotropic mycosis fungoides",
      "Pagetoid reticulosis",
      "Hypopigmented mycosis fungoides",
    ],
  },
  {
    name: "Primary Cutaneous CD30-Positive T-Cell Lymphoproliferative Disorders",
    group: "Primary Cutaneous T-Cell Neoplasms",
    profile:
      "Children/adolescents; skin; lymphomatoid papulosis (LyP) often affects trunk/extremities; C-ALCL may occur at any skin site.",
    criteria:
      "LyP presents with recurrent self-healing papulonodules; C-ALCL presents as persistent solitary or localized tumor/nodule.",
    histology: [
      "LyP shows wedge-shaped dermal infiltrates with scattered or clustered large CD30-positive atypical cells; patterns vary by subtype.",
      "C-ALCL shows cohesive sheets or nodules of large anaplastic/pleomorphic CD30-positive cells.",
      "Clinical course is essential: LyP lesions regress spontaneously; C-ALCL is persistent and localized.",
    ],
    ihc: [
      "Strong CD30 expression in atypical cells; T-cell markers may be variably lost.",
      "ALK is generally negative in primary cutaneous ALCL; assess phenotype to exclude systemic ALCL.",
    ],
    differential: [
      {
        name: "Mycosis fungoides with large-cell transformation",
        distinction:
          "Background MF epidermotropism and clinical history support transformed MF.",
      },
      {
        name: "Systemic ALK-positive ALCL",
        distinction: "ALK positivity and systemic disease favor systemic ALCL.",
      },
      {
        name: "Reactive CD30-positive infiltrate",
        distinction:
          "Reactive CD30-positive immunoblasts are scattered and lack a persistent clonal tumor pattern; clinical course is critical.",
      },
    ],
    molecular: [
      "Clonal TR rearrangement may support LyP/C-ALCL but is not independently diagnostic.",
    ],
    subtypes: [
      "Lymphomatoid papulosis (LyP)",
      "Primary cutaneous anaplastic large cell lymphoma (C-ALCL)",
    ],
  },
  {
    name: "Subcutaneous Panniculitis-Like T-Cell Lymphoma",
    group: "Mature T/NK-Cell Neoplasms",
    profile:
      "Children and young adults; subcutaneous adipose tissue, often extremities or trunk.",
    criteria:
      "Multiple subcutaneous nodules/plaques, fever, and sometimes hemophagocytic syndrome.",
    histology: [
      "Atypical lymphocytes rim individual adipocytes in a lace-like pattern.",
      "Karyorrhexis and fat necrosis are common; epidermis and dermis may be spared.",
      "Atypical cells are usually small to medium-sized with irregular hyperchromatic nuclei.",
    ],
    ihc: [
      "Typically CD3+, CD8+, beta-F1+, cytotoxic-marker positive; CD56 usually negative.",
      "T-cell receptor phenotype supports alpha-beta lineage.",
    ],
    differential: [
      {
        name: "Primary cutaneous gamma-delta T-cell lymphoma",
        distinction:
          "Gamma-delta phenotype, often CD4/CD8 double negative and beta-F1 negative; may involve dermis/epidermis and have more aggressive behavior.",
      },
      {
        name: "Lupus panniculitis",
        distinction:
          "Lupus shows lymphoid follicles, plasma cells, mucin, and hyaline fat necrosis; atypical adipocyte-rimming cytotoxic cells favor lymphoma.",
      },
      {
        name: "Infection-associated panniculitis",
        distinction:
          "Microbiologic studies and absence of a clonal cytotoxic T-cell infiltrate help distinguish.",
      },
    ],
    molecular: ["Clonal T-cell receptor rearrangement supports the diagnosis."],
  },
  {
    name: "Anaplastic Large Cell Lymphoma",
    group: "Mature T/NK-Cell Neoplasms",
    profile:
      "Children/adolescents; lymph nodes, skin, bone, soft tissue, and viscera.",
    criteria:
      "Systemic symptoms, lymphadenopathy, extranodal mass, or skin tumor.",
    histology: [
      "Large pleomorphic cells with abundant cytoplasm and hallmark cells with horseshoe/kidney-shaped nuclei.",
      "Sinusoidal or cohesive growth may occur; a lymphohistiocytic pattern can obscure tumor cells.",
    ],
    ihc: [
      "Strong, diffuse CD30 with membranous/Golgi pattern.",
      "ALK positivity defines ALK-positive systemic ALCL; T-cell markers may be variably lost; cytotoxic markers often positive.",
    ],
    differential: [
      {
        name: "Primary cutaneous CD30-positive ALCL",
        distinction:
          "Usually skin-limited and ALK-negative; systemic staging is needed.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "HRS cells are usually CD15+, weak PAX5+, and lack the strong ALCL phenotype.",
      },
      {
        name: "ALK-positive large B-cell lymphoma",
        distinction:
          "Expresses plasma-cell/B-cell lineage program rather than T-cell/cytotoxic phenotype.",
      },
    ],
    molecular: [
      "ALK rearrangement is characteristic in ALK-positive ALCL; DUSP22 or TP63 rearrangements may define subsets of ALK-negative cases.",
    ],
  },
  {
    name: "Hepatosplenic T-Cell Lymphoma",
    group: "Mature T/NK-Cell Neoplasms",
    profile:
      "Adolescents/young adults, often male; liver, spleen, and bone marrow; usually no lymphadenopathy.",
    criteria: "Hepatosplenomegaly, cytopenias, fever, and systemic illness.",
    histology: [
      "Sinusoidal infiltration of liver, spleen, and marrow by medium-sized atypical lymphocytes.",
      "Splenic white pulp may be atrophic; liver and spleen are diffusely enlarged without a discrete mass.",
    ],
    ihc: [
      "Typically CD3+, CD2+, CD7+, CD56 variable; often CD4−/CD8−.",
      "Usually gamma-delta TCR; beta-F1 is typically negative; cytotoxic markers variable.",
    ],
    differential: [
      {
        name: "Aggressive NK-cell leukemia",
        distinction:
          "NK neoplasm is usually EBER-positive and lacks rearranged TCR genes.",
      },
      {
        name: "Other peripheral T-cell lymphoma",
        distinction:
          "Often shows nodal/architectural disease and lacks the characteristic sinusoidal hepatosplenic distribution.",
      },
      {
        name: "Infection/reactive sinusoidal lymphocytosis",
        distinction:
          "Atypical cytology, immunophenotype, and clonal TCR support lymphoma.",
      },
    ],
    molecular: [
      "Clonal TCR rearrangement; recurrent isochromosome 7q and trisomy 8 may be present.",
    ],
  },
  {
    name: "EBV-Positive Lymphoproliferative Diseases of Childhood",
    group: "EBV-Associated Lymphoproliferative Disorders",
    profile:
      "Children/adolescents; variable nodal and extranodal sites; often associated with immune dysregulation.",
    criteria:
      "Polymorphic or mass-forming lymphoid proliferation following EBV infection or in an immunodeficiency setting.",
    histology: [
      "Spectrum ranges from reactive/polymorphic proliferations to overt lymphoma; assess architecture, cytologic monotony, and tissue destruction.",
      "Polymorphic lesions contain small lymphocytes, immunoblasts, and plasma cells; monomorphic lesions resemble defined lymphoma types.",
    ],
    ihc: [
      "EBER identifies EBV-infected cells; determine whether positive cells are scattered or constitute the neoplastic population.",
      "Lineage markers depend on the proliferating cell type.",
    ],
    differential: [
      {
        name: "Systemic EBV-positive T-cell lymphoma of childhood",
        distinction:
          "Shows systemic, often fulminant T-cell proliferation with EBV in tumor cells.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction: "Monomorphic destructive large B-cell proliferation.",
      },
      {
        name: "Polymorphic LPD",
        distinction:
          "Mixed cellular composition with variable cytologic atypia and architecture.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is central; assess clonality and underlying immune defect.",
    ],
  },
  {
    name: "Systemic EBV-Positive T-Cell Lymphoma of Childhood",
    group: "EBV-Associated Lymphoproliferative Disorders",
    profile:
      "Children, often after primary EBV infection; blood, marrow, liver, spleen, and other organs.",
    criteria:
      "Fulminant febrile illness, hepatosplenomegaly, hepatitis, cytopenias, and possible hemophagocytic syndrome.",
    histology: [
      "Systemic infiltrates of atypical lymphocytes in multiple organs; tissue necrosis may occur.",
      "May be accompanied by hemophagocytosis, but this is not required for diagnosis.",
    ],
    ihc: [
      "EBER labels the neoplastic T cells.",
      "T-cell markers are expressed variably; cytotoxic phenotype is common.",
    ],
    differential: [
      {
        name: "Aggressive NK-cell leukemia",
        distinction:
          "NK lineage has germline TR genes and commonly CD56; systemic EBV-positive T-cell lymphoma has clonal T-cell receptor rearrangement.",
      },
      {
        name: "EBV-associated reactive T-cell proliferation",
        distinction:
          "Reactive process lacks destructive systemic clonal T-cell proliferation and has a less fulminant course.",
      },
      {
        name: "HLH disease",
        distinction:
          "HLH is a clinical hyperinflammatory syndrome, not a neoplasm; identify the underlying trigger and clonal neoplasm if present.",
      },
    ],
    molecular: [
      "EBER positivity in tumor cells and clonal T-cell receptor rearrangement support diagnosis.",
    ],
  },
  {
    name: "Classic Hodgkin Lymphoma",
    group: "Hodgkin Lymphoma",
    profile:
      "Children/adolescents; cervical/supraclavicular and mediastinal nodes; nodular sclerosis common in adolescents.",
    criteria:
      "Painless lymphadenopathy, mediastinal mass, fever, night sweats, and weight loss.",
    histology: [
      "Scattered Hodgkin/Reed-Sternberg cells in a mixed inflammatory background.",
      "Nodular sclerosis shows broad collagen bands and lacunar-type cells; mixed cellularity has a polymorphous inflammatory background.",
      "Lymphocyte-rich and lymphocyte-depleted patterns are less common in children.",
    ],
    ihc: [
      "CD30 strong; CD15 often positive; CD45 negative; PAX5 weak; CD20 variable.",
      "EBER positivity varies by subtype and epidemiologic setting.",
    ],
    differential: [
      {
        name: "Nodular lymphocyte-predominant Hodgkin lymphoma",
        distinction:
          "LP cells are CD20+, strong PAX5+, CD45+, CD30−/CD15− and occur in a nodular B-cell-rich background.",
      },
      {
        name: "Mediastinal gray zone lymphoma",
        distinction:
          "Shows stronger/discordant B-cell program or atypical CHL phenotype in a mediastinal mass.",
      },
      {
        name: "ALCL",
        distinction:
          "ALCL has strong CD30 but often ALK and T-cell/cytotoxic markers; PAX5 is negative.",
      },
    ],
    molecular: [
      "EBER testing is useful; correlate with morphology and immune status.",
    ],
    subtypes: [
      "Nodular sclerosis",
      "Lymphocyte-rich",
      "Mixed-cellularity",
      "Lymphocyte-depleted",
    ],
  },
  {
    name: "Nodular Lymphocyte-Predominant Hodgkin Lymphoma",
    group: "Hodgkin Lymphoma",
    profile: "Children/adolescents; peripheral lymph nodes, often localized.",
    criteria:
      "Painless peripheral lymphadenopathy, often without systemic symptoms.",
    histology: [
      "Nodular architecture with lymphocyte-predominant (LP/popcorn) cells in a background rich in small B lymphocytes.",
      "Variant patterns may show diffuse areas or T-cell-rich nodules; assess for progression/transformation.",
    ],
    ihc: [
      "LP cells express CD20, PAX5 strong, OCT2, BOB1, and CD45.",
      "CD30 and CD15 are typically negative; PD1-positive T-cell rosettes may surround LP cells.",
    ],
    differential: [
      {
        name: "Classic Hodgkin lymphoma",
        distinction: "HRS cells are CD30+, often CD15+, weak PAX5+, and CD45−.",
      },
      {
        name: "T-cell/histiocyte-rich large B-cell lymphoma",
        distinction:
          "More diffuse growth with numerous histiocytes and T cells, fewer well-formed nodules and less characteristic LP-cell rosetting.",
      },
      {
        name: "Reactive follicular hyperplasia",
        distinction: "No LP-cell population with the characteristic phenotype.",
      },
    ],
    molecular: [
      "Clonal IG rearrangement may be demonstrated; interpret in the context of morphology and phenotype.",
    ],
  },
  {
    name: "Histiocytic and Dendritic Cell Neoplasms",
    group: "Histiocytic and Dendritic Cell Neoplasms",
    profile:
      "Children; skin, bone, lymph nodes, lung, liver, spleen, and CNS depending on entity.",
    criteria:
      "Variable; skin/bone lesions, lymphadenopathy, systemic symptoms, or multisystem disease.",
    histology: [
      "Langerhans cell histiocytosis (LCH): grooved nuclei with eosinophilic cytoplasm in an inflammatory background rich in eosinophils.",
      "Juvenile xanthogranuloma (JXG): foamy histiocytes, Touton giant cells, and variable fibrosis.",
      "Erdheim-Chester disease (ECD): xanthogranulomatous infiltrates, often with fibrosis; pediatric cases are rare.",
      "Rosai-Dorfman disease (RDD): large histiocytes with emperipolesis in a lymphoplasmacytic background.",
    ],
    ihc: [
      "LCH: CD1a+, langerin/CD207+, S100+.",
      "JXG/ECD: CD68+, CD163+, factor XIIIa variable; CD1a and langerin negative.",
      "RDD: S100+, CD68+, CD163+, OCT2 positive; CD1a/langerin negative.",
    ],
    differential: [
      {
        name: "LCH versus JXG/ECD",
        distinction:
          "LCH expresses CD1a and langerin; JXG/ECD are CD1a/langerin negative and show xanthomatous histiocytes.",
      },
      {
        name: "RDD versus LCH",
        distinction:
          "RDD shows emperipolesis and S100/OCT2 positivity but lacks CD1a/langerin.",
      },
      {
        name: "Histiocytic sarcoma",
        distinction:
          "Shows overt cytologic malignancy and destructive growth; assess lineage markers and exclude lymphoma/metastasis.",
      },
    ],
    molecular: [
      "MAPK pathway alterations are common in LCH and ECD; BRAF V600E and other MAPK-pathway mutations may be actionable. ALK rearrangement defines ALK-positive histiocytosis in a subset.",
    ],
    subtypes: [
      "Langerhans cell histiocytosis (LCH)",
      "Juvenile xanthogranuloma (JXG)",
      "Erdheim-Chester disease (ECD)",
      "Rosai-Dorfman disease (RDD)",
      "ALK-positive histiocytosis",
    ],
  },
  {
    name: "Primary Immunodeficiency-Associated Lymphoproliferative Disorders",
    group: "Immunodeficiency-Associated LPD",
    profile:
      "Children with inborn errors of immunity; nodal and extranodal lymphoid tissues, GI tract, lung, skin, and CNS.",
    criteria:
      "Recurrent infections, lymphadenopathy, organomegaly, autoimmune manifestations, or mass lesions.",
    histology: [
      "Spectrum includes reactive hyperplasia, polymorphic LPD, and overt lymphoma/leukemia.",
      "Assess whether architecture is preserved, polymorphic, or replaced by a monomorphic destructive neoplasm.",
    ],
    ihc: [
      "EBER and lineage-specific IHC depend on the underlying lesion; characterize the abnormal population and immune background.",
    ],
    differential: [
      {
        name: "Posttransplant LPD",
        distinction:
          "Occurs after solid-organ or hematopoietic transplant under immunosuppression; clinical context differs.",
      },
      {
        name: "HIV-associated LPD",
        distinction:
          "HIV infection and associated EBV status are central clinical clues.",
      },
      {
        name: "De novo lymphoma",
        distinction:
          "Underlying immune defect may be occult; evaluate immune history and genetic context.",
      },
    ],
    molecular: [
      "Molecular studies should characterize the lymphoid clone and investigate the underlying immune defect when indicated.",
    ],
  },
  {
    name: "Posttransplant Lymphoproliferative Disorder",
    group: "Immunodeficiency-Associated LPD",
    profile:
      "Children after solid-organ or hematopoietic stem-cell transplantation; lymph nodes, tonsils, GI tract, allograft, and extranodal organs.",
    criteria:
      "Lymphadenopathy, tonsillar enlargement, fever, organ dysfunction, or extranodal mass after transplantation.",
    histology: [
      "Non-destructive hyperplastic PTLD preserves architecture and shows reactive-appearing expansion.",
      "Polymorphic PTLD shows a mixed lymphoid population with architectural destruction but no single lymphoma-type morphology.",
      "Monomorphic PTLD meets criteria for a defined lymphoma or leukemia.",
    ],
    ihc: [
      "EBER is frequently positive, especially in early lesions; document distribution of EBV-positive cells.",
      "Immunophenotype follows the underlying B-, T-, or NK-cell proliferation.",
    ],
    differential: [
      {
        name: "Primary immunodeficiency-associated LPD",
        distinction:
          "Clinical context is inherited immune deficiency rather than transplantation.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "Monomorphic destructive large B-cell proliferation rather than hyperplastic or polymorphic PTLD.",
      },
      {
        name: "Polymorphic LPD",
        distinction:
          "Mixed cell population without criteria for a specific lymphoma; distinguish from monomorphic PTLD.",
      },
    ],
    molecular: [
      "EBER in situ hybridization and clonality studies are useful; integrate transplant type, timing, and immunosuppression.",
    ],
    subtypes: [
      "Non-destructive hyperplastic PTLD",
      "Polymorphic PTLD",
      "Monomorphic PTLD",
    ],
  },
  {
    name: "HIV-Associated Lymphoproliferative Disorders",
    group: "Immunodeficiency-Associated LPD",
    profile:
      "Children with HIV; nodal and extranodal sites, including CNS and GI tract.",
    criteria:
      "Mass lesions, lymphadenopathy, constitutional symptoms, and opportunistic infections.",
    histology: [
      "Burkitt lymphoma shows sheets of medium-sized cells with starry-sky pattern.",
      "DLBCL shows sheets of large atypical lymphoid cells.",
      "Classic Hodgkin lymphoma shows HRS cells in a mixed inflammatory background.",
      "Polymorphic LPD shows small lymphocytes, immunoblasts, and plasma cells.",
    ],
    ihc: [
      "BL: CD20+, CD10+, BCL6+, MYC+, BCL2−, Ki-67 near 100%.",
      "DLBCL: mature B-cell markers; EBER variable.",
      "CHL: CD30+, CD45−, often CD15+; EBER may be positive.",
      "Polymorphic LPD: EBER-positive cells in polymorphic background.",
    ],
    differential: [
      {
        name: "Burkitt lymphoma versus DLBCL",
        distinction:
          "BL is monomorphic medium-sized germinal-center phenotype with near-100% Ki-67; DLBCL comprises large cells with more variable proliferation.",
      },
      {
        name: "Polymorphic LPD versus lymphoma",
        distinction:
          "Polymorphic lesions have mixed cellular composition; lymphoma shows a defined monomorphic neoplastic population.",
      },
      {
        name: "HIV-associated lymphoma versus non-HIV lymphoma",
        distinction:
          "HIV history and immune status are essential; morphology still determines lymphoma subtype.",
      },
    ],
    molecular: [
      "EBER is useful; MYC rearrangement supports BL but is not required. Polymorphic LPD may show clonal IG rearrangement.",
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PediatricHematolymphoidDisordersPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Chronic Myeloid Leukemia, BCR::ABL1-Positive",
    "Juvenile Myelomonocytic Leukemia",
    "B-Lymphoblastic Leukemia/Lymphoma",
    "Burkitt Lymphoma",
  ]);

  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          [
            e.name,
            e.group,
            e.profile,
            e.criteria,
            ...e.histology,
            ...e.ihc,
            ...e.molecular,
            ...(e.subtypes ?? []),
            ...e.differential.flatMap((d) => [d.name, d.distinction]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );

  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((v) =>
      v.includes(name) ? v.filter((x) => x !== name) : [...v, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Pediatric Pathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Pediatric Hematolymphoid Disorders
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A diagnostic guide to childhood, adolescent, and young-adult
          hematolymphoid neoplasms, emphasizing defining criteria, lineage
          assignment, immunophenotype, molecular classification, and practical
          differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the clinical and specimen context",
              "Age, blood counts, marrow cellularity, organ distribution, immune status, transplant history, and congenital findings often narrow the pediatric differential.",
            ],
            [
              "2. Assign lineage before subtype",
              "Use morphology with flow cytometry and a focused immunohistochemical panel. Do not assign myeloid, B-cell, T-cell, NK-cell, or histiocytic lineage from a single nonspecific marker.",
            ],
            [
              "3. Quantify blasts and assess architecture",
              "Distinguish precursor neoplasms from mature lymphomas and myeloid proliferations. Apply entity-specific blast thresholds and assess tissue destruction, sinusoidal growth, angiocentricity, and epidermotropism.",
            ],
            [
              "4. Identify defining genetic alterations",
              "Test for recurrent fusions, mutations, and cytogenetic abnormalities when they define the entity or materially change classification. Consider germline predisposition in pediatric myeloid neoplasms.",
            ],
            [
              "5. Compare entities within the same group",
              "The differential diagnosis for each entity links to its closest group-level mimics and states the most useful morphologic, immunophenotypic, or molecular distinction.",
            ],
            [
              "6. Separate neoplasms from immune syndromes",
              "HLH is a hyperinflammatory syndrome, not a standalone neoplasm; identify the underlying trigger and distinguish HLH disease from mimics.",
            ],
          ].map(([h, t]) => (
            <li
              key={h}
              className="rounded-xl border border-teal-100 bg-white p-3"
            >
              <div className="font-semibold text-slate-900">{h}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{t}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Diagnostic principle:</strong> In pediatric hematopathology,
          age and clinical setting are not ancillary details. They can
          distinguish entities with overlapping morphology, reveal an underlying
          germline predisposition, and prevent adult-oriented classification
          from being applied uncritically.
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield Diagnostic Anchors
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              [
                "CML",
                "Granulocytic left shift, basophilia, splenomegaly, and BCR::ABL1.",
              ],
              [
                "JMML",
                "Young child, monocytosis, hepatosplenomegaly, and a canonical RAS-pathway driver.",
              ],
              [
                "Childhood MDS",
                "Persistent cytopenia, dysplasia, blast percentage, marrow cellularity, and germline predisposition assessment.",
              ],
              [
                "B-/T-lymphoblastic neoplasms",
                "Immature phenotype with lineage-defining B-cell markers or cytoplasmic/surface CD3.",
              ],
              [
                "Burkitt lymphoma",
                "Monomorphic medium-sized cells, germinal-center phenotype, near-100% Ki-67, and MYC biology.",
              ],
              [
                "Histiocytic neoplasms",
                "LCH is CD1a/langerin positive; JXG/ECD are CD1a/langerin negative; RDD shows emperipolesis.",
              ],
            ].map(([a, b]) => (
              <div
                key={a}
                className="grid gap-1 border-b border-slate-100 pb-2 sm:grid-cols-[minmax(0,1fr)_1.4fr]"
              >
                <strong>{a}</strong>
                <span className="text-slate-600">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Important Diagnostic Guardrails
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              Do not diagnose JMML from monocytosis alone; demonstrate a
              compatible RAS-pathway driver and resolve germline versus somatic
              status when relevant.
            </li>
            <li>
              In pediatric MDS, evaluate inherited marrow-failure and
              myeloid-predisposition syndromes even when syndromic physical
              findings are absent.
            </li>
            <li>
              For AML, a defining genetic alteration may establish the diagnosis
              below the conventional 20% blast threshold in the appropriate
              setting.
            </li>
            <li>
              For T/NK proliferations, distinguish T-cell lineage by T-cell
              receptor expression/rearrangement from NK lineage with germline
              T-cell receptor genes.
            </li>
            <li>
              EBER positivity must be localized to the relevant neoplastic
              population; EBV positivity alone does not define a specific
              lymphoma.
            </li>
            <li>
              Hemophagocytosis is neither required for HLH nor sufficient to
              establish an underlying hematolymphoid neoplasm.
            </li>
          </ul>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="pediatric-heme-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, markers, criteria, and differential points
          </label>
          <input
            id="pediatric-heme-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: BCR::ABL1, TdT, EBER, monosomy 7, CD30..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="pediatric-heme-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="pediatric-heme-group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setOpen(allOpen ? [] : filtered.map((e) => e.name))}
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} diagnostic entries</span>
        <span>
          Open an entry for criteria, morphology, IHC, molecular findings, and
          differential diagnosis.
        </span>
      </div>

      <div className="space-y-3">
        {filtered.map((e, i) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700">
                    Clinical profile: {e.profile}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <Section title="Clinical Profile">
                    <p className="text-sm leading-6 text-slate-700">
                      {e.profile}
                    </p>
                  </Section>
                  {e.subtypes && (
                    <Section title="Recognized Subtypes">
                      <div className="flex flex-wrap gap-2">
                        {e.subtypes.map((x) => (
                          <span
                            key={x}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                          >
                            {x}
                          </span>
                        ))}
                      </div>
                    </Section>
                  )}
                  <Section title="Essential Diagnostic Criteria">
                    <p className="mb-2 text-sm leading-6 text-slate-700">
                      {e.criteria}
                    </p>
                  </Section>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Histopathology">
                        <BulletList items={e.histology} />
                      </Section>
                      <Section title="Molecular Pathology">
                        <BulletList items={e.molecular} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunohistochemistry and Immunophenotype">
                        <BulletList items={e.ihc} />
                      </Section>
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, j) => (
                            <div
                              key={j}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                            >
                              <div className="text-sm font-bold text-slate-900">
                                {d.name}
                              </div>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {d.distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Section>
                    </div>
                  </div>
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
        PathologyGPS · Diagnostic reference for pediatric hematopathology.
        Interpret immunophenotypic and molecular findings in conjunction with
        morphology, age, clinical history, immune status, and disease
        distribution.
      </footer>
    </main>
  );
}
