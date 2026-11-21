import React from "react";

type Entity = {
  name: string;
  abbreviation: string;
  location: string;
  histology: string[];
  ihc: string[];
  vsDlbcl: string;
  differential: { name: string; findings: string }[];
  pearls?: string[];
};

const entities: Entity[] = [
  {
    name: "T-cell/Histiocyte-Rich Large B-Cell Lymphoma",
    abbreviation: "THRLBCL",
    location:
      "Usually lymph nodes, often below the diaphragm. Spleen, liver, and bone marrow are frequently involved at diagnosis. Bone marrow may show diffuse, nodular, intertrabecular, or paratrabecular disease; splenic involvement may be micronodular.",
    histology: [
      "Diffuse or vaguely nodular effacement. The background has a pale eosinophilic appearance because of abundant histiocytes and small T cells.",
      "Scattered neoplastic large B cells account for less than 10% of the cellular population. They range from lymphocyte-predominant-like cells to centroblasts, immunoblasts, and HRS-like cells; they do not form aggregates or sheets.",
      "Small B cells are virtually absent (typically less than 5%, although no validated cutoff exists). Eosinophils and plasma cells are usually inconspicuous. Foci of necrosis and marked fibrosis may occur.",
    ],
    ihc: [
      "Large tumor cells: CD20, CD79a, PAX5, OCT2, CD45, MEF2B, and BCL6 positive; IRF4/MUM1 and EMA variable.",
      "CD30, CD10, CD15, PU.1, and IgD are rarely positive. EBV should be absent; EBER positivity in the large cells redirects the diagnosis.",
      "Background: numerous CD3-positive T cells and CD68/CD163-positive histiocytes; CD4:CD8 ratio is variable. CD21/CD23 FDC meshworks are absent.",
    ],
    vsDlbcl:
      "Unlike conventional DLBCL-NOS, the large B cells are rare and scattered rather than forming diffuse sheets. The diagnostic feature is the T-cell/histiocyte-rich microenvironment with virtual absence of small B cells and FDC meshworks.",
    differential: [
      {
        name: "Nodular lymphocyte-predominant Hodgkin lymphoma (NLPHL)",
        findings:
          "Look for at least one unequivocal nodular area, residual IgD-positive mantle cells, PD1/CD57-positive TFH rosettes around LP cells, and partially preserved CD21/CD23-positive FDC meshworks. THRLBCL lacks these nodular/FDC features; core biopsy may be insufficient.",
      },
      {
        name: "EBV-positive DLBCL",
        findings:
          "Can be nearly identical morphologically. EBER in the majority of atypical large cells establishes EBV association; scattered EBER-positive bystander small lymphocytes alone do not.",
      },
      {
        name: "Nodal T-follicular-helper lymphoma",
        findings:
          "Look for atypical neoplastic T cells expressing TFH markers (PD1, ICOS, CXCL13, CD10, BCL6), expanded or aberrant FDC meshworks, and clonal T-cell receptor rearrangement.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        findings:
          "HRS cells are often CD30+/CD15+ with weak/variable CD20 and attenuated B-cell program. THRLBCL tumor cells retain strong, broad B-cell markers and are usually CD15-negative; eosinophils and residual B-cell nodules are generally absent.",
      },
    ],
  },
  {
    name: "DLBCL/HGBCL with MYC and BCL2 Rearrangements",
    abbreviation: "DLBCL/HGBCL-MYC/BCL2",
    location:
      "Most often nodal, usually advanced stage. A high proportion have multiple extranodal sites; bone marrow and CNS dissemination are not infrequent.",
    histology: [
      "Diffuse effacement, sometimes with a starry-sky pattern. Morphology ranges from conventional DLBCL to intermediate/blastoid forms resembling Burkitt lymphoma or lymphoblasts.",
      "Intermediate forms show medium-to-large cells with brisk mitoses and apoptosis, often with tingible-body macrophages. Blastoid forms have medium-sized cells, scant cytoplasm, round nuclei, fine chromatin, and occasional small nucleoli.",
      "The morphology alone cannot reliably predict the double-hit genotype. Report the morphologic root diagnosis and add the MYC/BCL2 rearrangement designation.",
    ],
    ihc: [
      "Mature B-cell markers: CD19, CD20, CD79a, and PAX5 positive, although rare TdT-positive cases may show weak/absent CD20 and reduced B-cell differentiation markers.",
      "Usually GCB phenotype: CD10 positive in approximately 88–98%, BCL6 in 75–89%; IRF4/MUM1 in 17–42%.",
      "MYC protein is positive in approximately 78–86%, BCL2 in 90–95%; dual expression is common but is not a substitute for FISH. Ki-67 is usually high (median about 90%) but a lower index does not exclude the entity.",
      "EBV is uncommon but does not by itself exclude this entity. TdT expression is rare and requires careful distinction from B-lymphoblastic lymphoma.",
    ],
    vsDlbcl:
      "The defining distinction is concurrent MYC and BCL2 rearrangements, not a particular morphology or MYC/BCL2 protein coexpression. Most cases have GCB phenotype and high proliferation; morphology may be conventional DLBCL, intermediate, or blastoid.",
    differential: [
      {
        name: "Burkitt lymphoma",
        findings:
          "Burkitt lymphoma is composed of monotonous medium-sized cells with deeply basophilic, often vacuolated cytoplasm, a starry-sky pattern, and near-100% Ki-67; it typically has isolated IG::MYC and lacks BCL2 rearrangement. Demonstration of both MYC and BCL2 rearrangements supports DLBCL/HGBCL-MYC/BCL2.",
      },
      {
        name: "B-lymphoblastic lymphoma/leukemia",
        findings:
          "Consider especially in young patients and TdT-positive blastoid cases. Do not rely on IHC alone; flow cytometry (including CD34 and precursor phenotype), IGHV mutation status, and molecular profile help establish precursor rather than mature B-cell differentiation.",
      },
      {
        name: "Blastoid mantle cell lymphoma",
        findings:
          "May show medium-sized blastoid cells and high Ki-67. CD5, cyclin D1, SOX11, and CCND1 rearrangement support mantle cell lymphoma; these are not defining features of MYC/BCL2-rearranged LBCL.",
      },
      {
        name: "Follicular lymphoma with MYC and BCL2 rearrangements",
        findings:
          "If an established follicular lymphoma component is present, classify as follicular lymphoma with transformation to DLBCL/HGBCL-MYC/BCL2, rather than de novo double-hit LBCL.",
      },
    ],
    pearls: [
      "MYC/BCL2 dual protein expression is a screening/prognostic phenotype, not the genetic definition.",
      "MYC plus BCL6 rearrangement without BCL2 is biologically heterogeneous and remains within DLBCL-NOS or HGBCL-NOS, not this entity.",
    ],
  },
  {
    name: "ALK-Positive Large B-Cell Lymphoma",
    abbreviation: "ALK+ LBCL",
    location:
      "Predominantly lymph nodes (approximately 75%), especially cervical nodes. Extranodal sites include the upper aerodigestive tract, brain, gastrointestinal tract, liver, and spleen.",
    histology: [
      "Diffuse monomorphic proliferation; approximately one third of nodal cases show a sinusoidal growth pattern.",
      "Large cells have abundant amphophilic or eosinophilic cytoplasm. Central nuclei with prominent nucleoli resemble immunoblasts; eccentric nuclei and abundant cytoplasm produce a plasmablastic appearance.",
      "Apoptosis and mitotic activity are brisk; necrosis occurs in a subset. Occasional anaplastic or HRS-like giant cells may be present.",
    ],
    ihc: [
      "ALK positive, most commonly with granular cytoplasmic staining; subcellular pattern varies with the ALK fusion partner.",
      "Plasmablastic phenotype: CD138, IRF4/MUM1, VS38c, BLIMP1, and XBP1 positive. CD20 is usually negative, but weak expression occurs in a minority.",
      "EMA, BOB1, OCT2, cytoplasmic immunoglobulin (often IgA and lambda), MYC, and activated STAT3 may be positive. CD19 and CD22 are negative; PAX5 and CD79a are only infrequently positive.",
      "EBER and HHV8/LANA are negative. Keratin can be aberrantly expressed in a minority.",
    ],
    vsDlbcl:
      "ALK expression with a plasmablastic phenotype and frequent loss of CD20 separates this entity from typical mature B-cell DLBCL-NOS. The ALK rearrangement is defining; ALK staining pattern can suggest the fusion partner.",
    differential: [
      {
        name: "Plasmablastic lymphoma",
        findings:
          "Both may be CD20-negative and CD138/MUM1-positive. ALK+ LBCL shows ALK protein and an ALK rearrangement and is usually EBV-negative; PBL is often EBER-positive (especially in immunodeficiency settings), ALK-negative, and commonly MYC-rearranged.",
      },
      {
        name: "HHV8-positive DLBCL / primary effusion lymphoma",
        findings:
          "Demonstrate HHV8 with LANA. PEL typically presents as an effusion without a solid mass and often lacks conventional B-cell markers; HHV8-positive DLBCL is also LANA-positive.",
      },
      {
        name: "Anaplastic large cell lymphoma",
        findings:
          "Can be ALK-positive and cohesive, but usually expresses T-cell/cytotoxic markers and lacks a convincing B-cell/plasma-cell program. Establish B-cell lineage with appropriate markers and immunoglobulin studies.",
      },
    ],
  },
  {
    name: "Large B-Cell Lymphoma with IRF4 Rearrangement",
    abbreviation: "LBCL-IRF4-R",
    location:
      "Waldeyer ring and cervical lymph nodes are typical. Peyer patches and intestinal lymph nodes are less common; other sites are exceptional. Most patients have localized disease.",
    histology: [
      "Purely follicular, purely diffuse, or combined follicular and diffuse architecture.",
      "Follicles are enlarged, round, and sometimes confluent, without polarization or zonation. Both follicular and diffuse areas contain sheets of centroblasts; medium-sized blastic cells with smaller nucleoli occur less often.",
      "Starry-sky macrophages are usually absent, and intermingled small T cells are sparse.",
    ],
    ihc: [
      "Mature B-cell phenotype with strong, often uniform IRF4/MUM1 and BCL6 coexpression.",
      "CD10 and BCL2 are positive in approximately 50–60%; CD5 occurs in about 30%. Ki-67 is high; BLIMP1 is negative.",
      "The combination of strong IRF4/MUM1 and BCL6, particularly in a child/young adult with tonsillar or cervical disease, should prompt IRF4 rearrangement testing.",
    ],
    vsDlbcl:
      "The characteristic setting (Waldeyer ring/cervical nodes, often young age), follicular and/or diffuse architecture, strong IRF4/MUM1 plus BCL6, and IRF4 rearrangement define the entity. DLBCL-NOS lacks this defining combination.",
    differential: [
      {
        name: "Follicular large B-cell lymphoma / follicular lymphoma grade 3B",
        findings:
          "May show sheets of centroblasts in enlarged follicles, but strong IRF4/MUM1 is less typical and IRF4 rearrangement is usually absent. Age and site are helpful; test for IRF4 rearrangement in the appropriate phenotype.",
      },
      {
        name: "Pediatric-type follicular lymphoma",
        findings:
          "Usually localized nodal disease with follicular architecture and lacks IRF4 rearrangement; extranodal involvement and strong IRF4/MUM1 expression are unusual.",
      },
      {
        name: "Other IRF4-rearranged neoplasms",
        findings:
          "Plasma cell myeloma, CLL/SLL, and T-cell neoplasms have distinct cytology and lineage phenotype; confirm the B-cell lineage and correlate with architecture.",
      },
    ],
    pearls: [
      "BCL2 and MYC rearrangements are virtually never present; BCL6 breaks can occur.",
      "If molecular testing is unavailable, the source allows a diagnosis as not molecularly confirmed only in the appropriate clinical and immunophenotypic setting.",
    ],
  },
  {
    name: "High-Grade B-Cell Lymphoma with 11q Aberration",
    abbreviation: "HGBCL-11q",
    location:
      "Usually localized nodal or extranodal disease, most often in the head and neck (about 60%) or gastrointestinal tract (about 30–40%).",
    histology: [
      "Diffuse, cohesive infiltrate of medium-sized cells with dense chromatin and multiple nucleoli; morphology resembles Burkitt lymphoma or shows intermediate/blastoid features.",
      "Compared with classic Burkitt lymphoma, there is often greater variation in nuclear size and shape, more cellular pleomorphism, and larger nucleoli.",
      "A starry-sky pattern is common; macrophages may contain coarse apoptotic debris.",
    ],
    ihc: [
      "B-lineage markers, CD10, and BCL6 positive; BCL2 usually negative. Ki-67 is typically at least 90%.",
      "MYC protein may be variably or strongly expressed despite absence of MYC rearrangement.",
      "LMO2 is expressed; CD56 may be positive. Flow cytometry may show CD16/CD56 or CD8 expression and absence of strong CD38.",
    ],
    vsDlbcl:
      "Compared with DLBCL-NOS, this is generally a Burkitt-like/intermediate-blastoid lymphoma with a GCB phenotype, very high Ki-67, BCL2 negativity, and a defining 11q gain/loss or telomeric loss/LOH pattern without MYC rearrangement.",
    differential: [
      {
        name: "Burkitt lymphoma",
        findings:
          "Shares starry-sky morphology, CD10/BCL6 expression, and very high Ki-67. Burkitt lymphoma usually has an IG::MYC rearrangement and characteristic ID3/TCF3 pathway alterations; HGBCL-11q lacks MYC rearrangement and has the characteristic 11q gain/loss pattern.",
      },
      {
        name: "DLBCL/HGBCL-MYC/BCL2",
        findings:
          "May be intermediate/blastoid but has concurrent MYC and BCL2 rearrangements, often BCL2 protein expression, and a different molecular profile.",
      },
      {
        name: "HGBCL-NOS",
        findings:
          "A diagnosis of HGBCL-NOS requires exclusion of defined genetic entities. HGBCL-11q requires the characteristic 11q aberration and absence of MYC rearrangement.",
      },
    ],
    pearls: [
      "FISH can identify copy-number changes but cannot detect telomeric loss of heterozygosity; microarray or sequencing may be needed.",
      "An 11q gain alone is less specific than the characteristic terminal loss/LOH.",
    ],
  },
  {
    name: "Lymphomatoid Granulomatosis",
    abbreviation: "LYG",
    location:
      "Lung involvement is universal. CNS (about 40%), skin (34%), kidney (19%), and liver (17%) are frequent additional sites. Lymph node and bone marrow involvement are rare and should prompt reconsideration.",
    histology: [
      "Angiocentric and angiodestructive polymorphous infiltrate involving small- to large-calibre vessels, with transmural vascular destruction.",
      "Small T lymphocytes predominate, admixed with histiocytes, plasma cells, and variable EBV-positive atypical large B cells. Large cells range from immunoblast-like to pleomorphic/Hodgkin-like; classic Reed–Sternberg cells are generally absent.",
      "Central necrosis is common but variable. Well-formed granulomas are typically absent.",
      "Grade 1: rare EBV-positive large cells and absent/focal necrosis. Grade 2: increased EBV-positive B cells (roughly 40–400/mm²). Grade 3: usually >400 EBV-positive B cells/mm², often with clusters and extensive necrosis; a uniform sheet-like large-cell population instead favours EBV-positive DLBCL.",
    ],
    ihc: [
      "Atypical large cells express pan-B-cell markers and are variably CD30-positive, CD15-negative; a subset expresses LMP1 and EBNA2.",
      "Background is predominantly CD3-positive T cells, usually with CD4 exceeding CD8. Light-chain studies are often of limited value.",
      "EBER highlights the large atypical B cells and often additional smaller B cells; grading requires correlating EBER-positive cell burden with cytologic atypia.",
    ],
    vsDlbcl:
      "LYG is an extranodal, lung-centred, angiocentric/angiodestructive polymorphous process with a T-cell-rich background and variable numbers of EBV-positive large B cells. DLBCL-NOS forms a more uniform mass/sheet-like proliferation and does not show this defining vascular pattern.",
    differential: [
      {
        name: "EBV-positive DLBCL",
        findings:
          "May be polymorphous and necrotic, but typically shows sheets or a more uniform population of EBV-positive large B cells. LYG shows striking angiocentric/angiodestructive growth and abundant reactive T cells; grade 3 LYG with uniform large-cell sheets should be classified as EBV-positive DLBCL.",
      },
      {
        name: "EBV-positive mucocutaneous ulcer",
        findings:
          "Usually a sharply circumscribed, superficial ulcer in skin or mucosa in an immunosuppressed/older patient, with a polymorphous infiltrate and a rim of reactive T cells; it lacks the characteristic pulmonary angiocentric multisystem pattern.",
      },
      {
        name: "Granulomatosis with polyangiitis",
        findings:
          "Can show necrotizing vasculitis and pulmonary nodules, but lacks EBER-positive atypical large B cells; granulomatous inflammation is more characteristic of GPA than LYG.",
      },
      {
        name: "IDD-associated EBV-positive B-cell LPD",
        findings:
          "A documented congenital/acquired immune deficiency or dysregulation setting excludes conventional LYG under the current definition; classify according to the relevant IDD-associated category.",
      },
    ],
  },
  {
    name: "EBV-Positive Diffuse Large B-Cell Lymphoma",
    abbreviation: "EBV+ DLBCL",
    location:
      "Nodal and extranodal. Younger patients often have nodal disease; in older patients, extranodal sites (lung, gastrointestinal tract, skin, and bone marrow) are more frequent. Exclude immune deficiency/dysregulation and prior lymphoma.",
    histology: [
      "Broad spectrum from polymorphic to monomorphic. Polymorphic cases contain scattered immunoblasts, HRS-like and lymphocyte-predominant-like cells in a background of small lymphocytes, plasma cells, and histiocytes.",
      "Monomorphic cases form sheets of atypical large cells and can be indistinguishable from EBV-negative DLBCL-NOS on H&E alone.",
      "Angiocentric/angiodestructive growth and geographic coagulative necrosis may occur but are not invariable.",
    ],
    ihc: [
      "Large cells retain B-cell markers (CD19, CD20, CD22, CD79a, PAX5); usually ABC-like with IRF4/MUM1 positivity, CD10 negativity, and variable BCL6.",
      "CD30 is positive in most cases, sometimes weak/partial and sometimes strong/diffuse. CD15 is positive only in a minority; the full CHL phenotype is usually absent.",
      "LMP1 is positive in most cases; EBNA2 is positive in a subset (type II latency predominates). PDL1/PDL2 expression is common, especially in younger patients.",
      "EBER in situ hybridization is mandatory: the majority of neoplastic large B cells must be EBV-positive. A few EBER-positive bystander small lymphocytes do not qualify.",
    ],
    vsDlbcl:
      "EBER positivity in the majority of tumor cells, in a patient without a defined immune deficiency/dysregulation or prior lymphoma and after exclusion of other EBV-associated entities, is the key distinction. Morphology and CD30 alone are not specific.",
    differential: [
      {
        name: "Conventional DLBCL-NOS with bystander EBV-positive cells",
        findings:
          "Scattered EBER-positive small background lymphocytes, often less than 10% of B cells, may occur. The neoplastic large B cells themselves must be EBER-positive to diagnose EBV+ DLBCL.",
      },
      {
        name: "LYG",
        findings:
          "LYG is lung-centred and shows angiocentric/angiodestructive polymorphous inflammation with scattered EBV-positive large cells. EBV+ DLBCL more often forms a mass with sheets or a more uniform large-cell proliferation.",
      },
      {
        name: "EBV-positive mucocutaneous ulcer",
        findings:
          "A localized, sharply circumscribed ulcer with a polymorphous infiltrate and reactive T-cell rim, often in a setting of age-related or iatrogenic immunosuppression; it lacks a destructive systemic mass-forming pattern.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        findings:
          "HRS cells are typically CD30+/CD15+ with weak/variable B-cell markers; EBV+ DLBCL usually retains a broad, strong B-cell program (CD20/PAX5/CD79a) despite CD30 expression.",
      },
    ],
  },
  {
    name: "Diffuse Large B-Cell Lymphoma Associated with Chronic Inflammation",
    abbreviation: "CI-DLBCL",
    location:
      "Confined natural or acquired spaces with longstanding chronic inflammation. Prototypical pyothorax-associated lymphoma arises in the pleural cavity; other sites include bone (especially femur), joints, periarticular soft tissue, and chronic skin ulcers or implant-associated spaces.",
    histology: [
      "Usually centroblastic or immunoblastic large cells with round nuclei and prominent nucleoli.",
      "Mass-forming and destructive; angiocentric growth and extensive necrosis may occur. The lesion infiltrates pre-existing tissue.",
      "The prototypical setting is decades after chronic pyothorax; other cases follow chronic osteomyelitis, metallic implants, mesh, or chronic ulcers.",
    ],
    ihc: [
      "Usually CD20 and CD79a positive; some cases show plasmablastic differentiation with reduced CD20/CD79a and variable IRF4/MUM1 and CD138.",
      "Often activated B-cell phenotype; CD30 may be positive. Occasional aberrant T-cell antigen expression can occur.",
      "EBER is positive in tumor cells; type III latency with LMP1 and EBNA2 positivity is characteristic.",
    ],
    vsDlbcl:
      "The defining context is longstanding inflammation in a confined space, usually with EBV association. Unlike FA-LBCL, CI-DLBCL forms a mass and infiltrates pre-existing tissue; it behaves aggressively.",
    differential: [
      {
        name: "Fibrin-associated large B-cell lymphoma",
        findings:
          "FA-LBCL is microscopic/incidental within fibrin, without a mass or invasion into normal parenchyma. CI-DLBCL forms a mass and infiltrates tissue; fibrin is common in FA-LBCL but uncommon in CI-DLBCL.",
      },
      {
        name: "Plasmablastic lymphoma",
        findings:
          "Both may lose CD20 and acquire CD138/MUM1. PBL usually arises in an immunodeficiency/dysregulation setting and often involves oral/nasal or other extranodal sites; the chronic confined-space inflammatory history and EBV latency pattern favour CI-DLBCL.",
      },
      {
        name: "Primary effusion lymphoma",
        findings:
          "PEL is HHV8/LANA-positive and usually presents as an effusion without a solid mass. CI-DLBCL is EBV-associated and mass-forming; HHV8 is negative.",
      },
    ],
  },
  {
    name: "Fibrin-Associated Large B-Cell Lymphoma",
    abbreviation: "FA-LBCL",
    location:
      "Incidental microscopic aggregates at sites of chronic fibrin deposition: cysts/pseudocysts, breast implant peri-implant spaces, chronic hematomas, cardiac myxomas, endovascular grafts, and prosthetic valves.",
    histology: [
      "Small aggregates or clusters of large atypical lymphoid cells, often immunoblastic, embedded in or surrounded by dense fibrin and cellular debris.",
      "Mitotic figures and apoptosis are frequent; associated inflammation is usually sparse, although lymphoplasmacytic inflammation can occur.",
      "Focal extension into myxomatous stroma or fibrous capsule may occur, but there is no infiltrative growth into pre-existing normal parenchyma and no mass formation.",
    ],
    ihc: [
      "Usually CD20, CD79a, and PAX5 positive; CD10 negative; IRF4/MUM1 positive. BCL2, BCL6, and CD30 are variable.",
      "Ki-67 is usually greater than 90%. A minority show plasmablastic differentiation with CD138 positivity and reduced CD20/PAX5.",
      "EBER is nearly always positive; most show type III latency (LMP1+/EBNA2+). HHV8/LANA is negative.",
    ],
    vsDlbcl:
      "Unlike DLBCL-NOS, FA-LBCL is an incidental microscopic proliferation confined to fibrin in a closed space, without a destructive mass or invasion of normal tissue. Its clinical behaviour is usually indolent.",
    differential: [
      {
        name: "CI-DLBCL / pyothorax-associated lymphoma",
        findings:
          "CI-DLBCL forms a mass and infiltrates pre-existing structures, often with dense inflammation. FA-LBCL remains microscopic within fibrin and does not invade normal parenchyma.",
      },
      {
        name: "EBV-positive DLBCL",
        findings:
          "EBV+ DLBCL is mass-forming or diffusely infiltrative and is not restricted to fibrin deposits. FA-LBCL is defined by its incidental, non-mass-forming location.",
      },
      {
        name: "Primary effusion lymphoma",
        findings:
          "PEL is HHV8/LANA-positive and presents as malignant effusion; FA-LBCL is usually EBV-positive, HHV8-negative, and found in fibrinous material attached to a structural lesion.",
      },
    ],
  },
  {
    name: "Fluid Overload-Associated Large B-Cell Lymphoma",
    abbreviation: "FO-LBCL",
    location:
      "Serous body-cavity effusions, most often pleural (about 70%), followed by pericardial and peritoneal/abdominal cavities. By definition, no detectable tumor mass or extracavitary disease at presentation.",
    histology: [
      "Usually evaluated in effusion cytology/cell block rather than a tissue mass. Cells range from centroblastic and immunoblastic to anaplastic; less often small-to-medium or plasmacytoid.",
      "Cells commonly have abundant cytoplasm; histiocytes may be admixed, but a substantial inflammatory infiltrate is usually lacking.",
      "No mass-forming tissue architecture is present at diagnosis; secondary mass formation or extranodal disease may occur at relapse.",
    ],
    ihc: [
      "Usually retains mature B-cell markers CD20, CD79a, and CD19, although CD20 is negative in approximately 20%.",
      "Most cases are non-GCB; IRF4/MUM1 commonly positive. CD30 is variable (about 20–30%), CD138 infrequent, and CD10 rare; other GC markers such as GCET1/LMO2 are generally absent.",
      "HHV8/LANA is negative by definition. EBV is positive in a minority (reported 13–30%).",
    ],
    vsDlbcl:
      "The defining presentation is a B-cell lymphoma restricted to body-cavity effusions, without a detectable mass, in a patient often with fluid overload (heart failure, renal insufficiency, cirrhosis, or protein-losing states), and HHV8-negative.",
    differential: [
      {
        name: "Primary effusion lymphoma",
        findings:
          "PEL is HHV8/LANA-positive by definition, often occurs with HIV or other immunodeficiency, and typically lacks pan-B-cell markers. FO-LBCL is HHV8-negative and usually retains CD20/CD79a/CD19.",
      },
      {
        name: "CI-DLBCL / pyothorax-associated lymphoma",
        findings:
          "Usually follows longstanding pleural inflammation and forms a pleural mass with tissue infiltration; often EBV-positive and inflammatory. FO-LBCL presents as effusion without a mass.",
      },
      {
        name: "Secondary effusion from systemic lymphoma",
        findings:
          "A known or occult systemic lymphoma can involve a body cavity secondarily. Complete staging and clinical history are essential before diagnosing a primary effusion-based entity.",
      },
    ],
  },
  {
    name: "Plasmablastic Lymphoma",
    abbreviation: "PBL",
    location:
      "Predominantly extranodal: oral/nasal cavity (especially gingiva and palate), digestive tract, bone/soft tissue, and skin. Nodal disease can occur without an obvious extranodal lesion.",
    histology: [
      "Destructive infiltrate of large immunoblasts and plasmablasts, often with a starry-sky pattern, brisk mitotic activity, apoptosis, and necrosis.",
      "Cells have abundant basophilic cytoplasm, eccentric nuclei, and prominent central nucleoli. A minor component of intermediate lymphoplasmacytoid cells or plasma cells may occur.",
      "Usually arises in an immune deficiency/dysregulation setting, including HIV or iatrogenic immunosuppression, but can occur in older adults without overt immunodeficiency.",
    ],
    ihc: [
      "Typically absent CD20 and reduced/absent PAX5 and CD45; CD79a is positive in a subset.",
      "Strong terminal plasma-cell differentiation program: CD138, CD38, VS38c, BLIMP1, XBP1, and IRF4/MUM1 (usually strong). Light-chain restriction is often demonstrable.",
      "MYC protein is commonly expressed; MYC rearrangement in about 60%. Ki-67 is usually greater than 90%. CD10/CD56/CD30 occur in a minority; BCL6 is rare.",
      "EBER positive in approximately 60%, especially in HIV-associated cases. ALK and HHV8/LANA are negative.",
    ],
    vsDlbcl:
      "PBL shows terminal plasma-cell differentiation with loss of the conventional B-cell program (CD20/PAX5) and strong CD138/BLIMP1/XBP1/MUM1. DLBCL-NOS with immunoblastic morphology generally retains CD20 and PAX5 and lacks a full plasma-cell phenotype.",
    differential: [
      {
        name: "DLBCL-NOS, immunoblastic or plasmablastic phenotype",
        findings:
          "Retention of CD20 and PAX5 and absence of a complete plasma-cell differentiation program favour DLBCL. Strong CD138, BLIMP1, XBP1, and light-chain restriction favour PBL.",
      },
      {
        name: "Plasmablastic transformation of plasma cell myeloma",
        findings:
          "Look for prior myeloma, CRAB features (hypercalcemia, renal impairment, anemia, bone lesions), marrow involvement by clonal plasma cells, and myeloma-associated genetic abnormalities.",
      },
      {
        name: "ALK-positive LBCL",
        findings:
          "ALK+ LBCL is ALK-positive and usually HHV8/EBV-negative; PBL is ALK-negative and often EBER-positive. Both may be CD20-negative and CD138/MUM1-positive.",
      },
      {
        name: "Extracavitary primary effusion lymphoma",
        findings:
          "PEL is HHV8/LANA-positive, often with absent pan-B-cell markers and an effusion-based or extracavitary presentation. PBL is HHV8-negative.",
      },
    ],
  },
  {
    name: "Primary Large B-Cell Lymphoma of Immune-Privileged Sites",
    abbreviation: "IP-LBCL",
    location:
      "Primary tumors in the CNS, vitreoretina, and testis of immunocompetent patients. CNS lesions are often cerebral hemispheric, basal ganglia/thalamic, corpus callosum, or periventricular; vitreoretinal disease is subretinal with vitreous involvement; testicular disease involves parenchyma and often epididymis.",
    histology: [
      "Shared morphology across sites: diffuse sheets or infiltrates of medium-to-large pleomorphic cells with vesicular chromatin, prominent nucleoli, and narrow rims of eosinophilic-to-basophilic cytoplasm; brisk mitoses and apoptosis.",
      "CNS: patternless diffuse and perivascular infiltration, often with necrosis; splitting of vessel walls by tumor cells is characteristic. Reactive gliosis, T cells, macrophages, and microglia may be present.",
      "Vitreoretina: tumor cells occupy the subretinal space and/or track around retinal vessels, with spillover into vitreous; necrotic background and macrophages may be present.",
      "Testis: diffuse interstitial infiltrate obliterates seminiferous tubules, with intertubular spread and frequent epididymal involvement.",
    ],
    ihc: [
      "Usually mature B-cell phenotype: CD20, PAX5, CD79a positive; often non-GCB/activated phenotype with IRF4/MUM1 positivity and variable BCL6. CD10 is usually negative.",
      "MYD88 p.L265P and CD79B mutations are common; BCL2, MYC, PIM1, PAX5, and other genes may show aberrant somatic hypermutation.",
      "Immune-escape changes include loss of MHC class I/II or B2M and gains/rearrangements involving 9p24/CD274 (PD-L1).",
    ],
    vsDlbcl:
      "The primary site is entity-defining: CNS, vitreoretina, or testis in an immunocompetent patient. Shared MCD-like biology (MYD88/CD79B) and immune-escape phenotype distinguish this group from ordinary systemic DLBCL-NOS. A systemic lymphoma secondarily involving these sites is excluded.",
    differential: [
      {
        name: "Systemic DLBCL-NOS secondarily involving CNS/testis/eye",
        findings:
          "Perform systemic staging and review prior lymphoma history. A primary immune-privileged-site lymphoma is diagnosed only when the lesion arises as a primary tumor in the relevant sanctuary site.",
      },
      {
        name: "IDD-associated DLBCL involving CNS",
        findings:
          "A defined immune deficiency/dysregulation setting (e.g. HIV or post-transplant immunosuppression) takes precedence over the anatomic site; classify within the appropriate IDD-associated category.",
      },
      {
        name: "Other CNS tumors or inflammatory mimics",
        findings:
          "Perivascular large-cell infiltrates can mimic glioma, demyelination, or infection. Demonstrate B-cell lineage and correlate with MRI and tissue architecture; steroid-treated biopsies may be paucicellular.",
      },
    ],
  },
  {
    name: "Primary Cutaneous DLBCL, Leg Type",
    abbreviation: "PCLBCL-LT",
    location:
      "Usually one or both lower legs. About 10–25% arise on the trunk or arms; head involvement is exceptional. Disease should be skin-confined at presentation to qualify as primary cutaneous.",
    histology: [
      "Diffuse, monotonous, non-epidermotropic infiltrate involving dermis and subcutis, with confluent sheets of centroblasts and immunoblasts.",
      "Mitotic figures are frequent. Reactive small B cells and CD21/CD35-positive FDC meshworks are absent; reactive T cells are relatively sparse and often perivascular.",
    ],
    ihc: [
      "Mature B-cell markers including CD20 and CD79a positive.",
      "Strong BCL2, IRF4/MUM1, FOXP1, MYC, and cytoplasmic IgM with monotypic light chain expression. BCL6 is variable; CD10 is negative in most cases.",
      "Ki-67 is elevated (often >40%). EBER is recommended to exclude EBV-associated processes. Cyclin D1 helps exclude blastoid mantle cell lymphoma.",
    ],
    vsDlbcl:
      "The entity is defined by primary skin presentation, typically on the leg, with diffuse dermal/subcutaneous sheets and a non-GCB phenotype (BCL2/MUM1/FOXP1/IgM strong; CD10 usually negative). Systemic secondary skin involvement must be excluded.",
    differential: [
      {
        name: "Primary cutaneous follicle center lymphoma (PCFCL), diffuse/large-cell variant",
        findings:
          "PCFCL more often expresses BCL6 and CD10, lacks strong diffuse BCL2 and MUM1, and may retain follicular dendritic-cell networks. PCLBCL-LT is monotonous, sheet-like, BCL2/MUM1/FOXP1/IgM strong, and usually CD10-negative. MYD88/CD79B mutations support PCLBCL-LT when morphology/IHC overlap.",
      },
      {
        name: "Secondary cutaneous involvement by systemic LBCL",
        findings:
          "A history of lymphoma or systemic nodal/visceral disease argues against a primary cutaneous diagnosis. Complete staging is required.",
      },
      {
        name: "Blastoid mantle cell lymphoma",
        findings:
          "Can produce dermal sheets of blastoid cells; cyclin D1, SOX11, CD5, and CCND1 rearrangement support mantle cell lymphoma rather than PCLBCL-LT.",
      },
      {
        name: "EBV-positive mucocutaneous ulcer / PBL",
        findings:
          "EBER positivity, ulcer-based polymorphous inflammation, or a plasma-cell phenotype (CD138/BLIMP1/XBP1) should prompt consideration of EBV-associated or plasmablastic entities, particularly in immunodeficiency settings.",
      },
    ],
  },
  {
    name: "Intravascular Large B-Cell Lymphoma",
    abbreviation: "IVLBCL",
    location:
      "Virtually any organ; lymph nodes are usually spared. Skin, CNS, kidney, adrenal, lung, liver, spleen, and bone marrow are common clinical targets. Cutaneous subtype is skin-limited at presentation; hemophagocytic subtype often involves marrow, liver, and spleen.",
    histology: [
      "Large lymphoid cells with vesicular nuclei and prominent nucleoli are confined almost exclusively to lumina of small vessels, especially capillaries.",
      "Cells may be free-floating, cohesive, or marginating/adherent to endothelium. Vascular occlusion may cause infarction, hemorrhage, and necrosis, particularly in brain.",
      "Hemophagocytic subtype includes non-neoplastic histiocytes with hemophagocytosis. A minimal extravascular component is acceptable, but extensive parenchymal sheets are not typical.",
    ],
    ihc: [
      "Pan-B-cell markers CD20 and CD79a positive. CD5 and PD-L1 may be coexpressed (20–40%).",
      "IRF4/MUM1 is positive in most cases; usually non-GCB phenotype, although CD10 is positive in approximately 13%.",
      "Usually EBER-negative and HHV8/LANA-negative. MYD88 and CD79B mutations are frequent in subsets.",
    ],
    vsDlbcl:
      "The defining feature is intraluminal growth of large B cells in small vessels with little or no extravascular tumor. Conventional DLBCL-NOS forms an extravascular mass or diffuse tissue infiltrate.",
    differential: [
      {
        name: "Reactive intravascular lymphocytes / infection",
        findings:
          "Reactive cells lack cytologic atypia and a clonal B-cell population. Demonstrate large atypical CD20/CD79a-positive cells within endothelial-lined vascular lumina.",
      },
      {
        name: "Intravascular NK/T-cell or T-cell lymphoma",
        findings:
          "These may also be intravascular but show T/NK lineage markers and often cytotoxic phenotype; establish lineage with a broad panel and EBER where appropriate.",
      },
      {
        name: "HHV8-positive large B-cell lymphoma",
        findings:
          "LANA positivity and clinical context support HHV8-associated disease; IVLBCL is generally HHV8-negative.",
      },
    ],
  },
  {
    name: "Primary Mediastinal Large B-Cell Lymphoma",
    abbreviation: "PMBCL",
    location:
      "Arises in the anterior-superior mediastinum in the thymic niche, often with extension into lung, pleura, or pericardium. Supraclavicular nodes are commonly involved; bone marrow involvement is uncommon at presentation.",
    histology: [
      "Typically a bulky mediastinal mass with diffuse sheets of medium-to-large cells, often with clear or pale cytoplasm and compartmentalizing fibrosis/sclerosis.",
      "Tumor cells may be separated by broad collagen bands; lacunar-like or pleomorphic forms can occur. Necrosis may be present.",
      "The microenvironment may contain variable T cells. The combination of mediastinal location, sclerosis, and characteristic phenotype is central.",
    ],
    ihc: [
      "Mature B-cell markers are expressed, often with strong CD20, CD79a, PAX5, OCT2, and BOB1; immunoglobulin expression may be weak or absent.",
      "CD23 and MAL are often positive; CD30 is commonly positive but usually weaker/heterogeneous than in classic Hodgkin lymphoma. CD15 is usually negative.",
      "IRF4/MUM1 and BCL6 are variable; CD10 is usually negative. PD-L1/PD-L2 expression is common due to 9p24 alterations.",
      "MYC, BCL2, and BCL6 rearrangements are rare to absent.",
    ],
    vsDlbcl:
      "PMBCL is a distinct thymic/anterior mediastinal lymphoma of younger adults, often with sclerosis, CD23/MAL and PD-L1/PD-L2 expression, and a mature but sometimes incomplete B-cell program. DLBCL-NOS usually lacks this integrated clinicopathologic pattern.",
    differential: [
      {
        name: "Classic Hodgkin lymphoma, nodular sclerosis type",
        findings:
          "Both arise in the mediastinum and may show sclerosis and CD30. CHL has HRS/lacunar cells, strong CD30, frequent CD15, weak/absent PAX5 and attenuated B-cell markers; PMBCL retains a stronger mature B-cell program (CD20, PAX5, OCT2, BOB1) and often expresses CD23/MAL.",
      },
      {
        name: "Mediastinal gray zone lymphoma",
        findings:
          "Shows morphologic and immunophenotypic overlap between PMBCL and CHL, often with strong CD30 and partially retained B-cell markers. Diagnose only in the appropriate mediastinal setting after integrated assessment; cases outside the mediastinum are not this entity.",
      },
      {
        name: "Systemic DLBCL involving mediastinum",
        findings:
          "Usually lacks the characteristic thymic-site presentation and PMBCL signature (CD23/MAL, 9p24/PD-L1/PD-L2). Review imaging for a dominant anterior mediastinal primary and assess phenotype.",
      },
    ],
  },
  {
    name: "Mediastinal Gray Zone Lymphoma",
    abbreviation: "MGZL",
    location:
      "Restricted to the mediastinum, typically an anterior mediastinal mass. Similar tumors arising outside the mediastinum should not be classified as MGZL.",
    histology: [
      "Shows overlapping morphology between PMBCL and classic Hodgkin lymphoma, especially nodular sclerosis CHL.",
      "May show sheets or clusters of large atypical cells with lacunar/HRS-like morphology, sclerosis, and variable inflammatory background. The degree of architectural and cytologic overlap is variable.",
    ],
    ihc: [
      "The phenotype is intermediate: variable retention of B-cell markers (CD20, PAX5, OCT2, BOB1) together with strong CD30 and sometimes CD15.",
      "No single marker is diagnostic. Interpretation requires a panel and correlation with the mediastinal clinical/radiologic setting.",
    ],
    vsDlbcl:
      "Unlike DLBCL-NOS, MGZL is a mediastinum-restricted overlap lymphoma between PMBCL and CHL. The defining issue is the combined morphology and immunophenotype, not merely CD30 positivity or a mediastinal mass.",
    differential: [
      {
        name: "PMBCL",
        findings:
          "PMBCL usually has a more coherent mature B-cell phenotype (strong CD20/PAX5/OCT2/BOB1), often CD23/MAL, and less intense/heterogeneous CD30. MGZL has more pronounced CHL-like morphology and stronger CD30, sometimes CD15.",
      },
      {
        name: "Nodular sclerosis classic Hodgkin lymphoma",
        findings:
          "CHL typically has HRS/lacunar cells, strong CD30, frequent CD15, weak PAX5, and loss of most B-cell markers. MGZL retains a more substantial B-cell program than typical CHL.",
      },
      {
        name: "DLBCL-NOS outside mediastinum with Hodgkin-like features",
        findings:
          "An extra-mediastinal lesion without mediastinal involvement is not MGZL; evaluate as the appropriate LBCL entity using morphology, phenotype, and genetics.",
      },
    ],
  },
];

const dlbclReference = [
  [
    "Localization",
    "Most often nodal; 30–40% present with disease confined to extranodal sites. Common extranodal sites include GI tract, head and neck, bone, liver, kidney, and adrenal gland.",
  ],
  [
    "Histology",
    "Diffuse or vaguely nodular effacement by medium-to-large B cells. Common variants are centroblastic (~80%), immunoblastic (~8–10%; ≥90% immunoblasts), and anaplastic (~3%). Mitotic activity is usually high; necrosis and starry-sky areas may occur.",
  ],
  [
    "IHC",
    "CD45 and mature B-cell markers (CD19, CD20, CD22, CD79a, PAX5). COO markers include CD10, BCL6, and MUM1; Hans algorithm is an imperfect surrogate for gene-expression COO. BCL2 and MYC are variable; Ki-67 is ≥80% in most cases. EBER in the majority of tumor cells excludes DLBCL-NOS.",
  ],
  [
    "Genetics",
    "Highly heterogeneous. MYC alone or MYC+BCL6 without BCL2 may remain DLBCL-NOS/HGBCL-NOS. Concurrent MYC and BCL2 rearrangements define the separate MYC/BCL2-rearranged entity.",
  ],
];

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
          Diagnostic reference
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
function DataTable({
  rows,
  headers = ["Feature", "Key findings"],
}: {
  rows: string[][];
  headers?: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-800">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-200 align-top">
              {r.map((c, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 leading-6 ${j === 0 ? "w-44 font-semibold text-slate-800" : "text-slate-600"}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LargeBCellLymphomaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-teal-700">
            PathologyGPS · Hematopathology
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Large B-Cell Lymphomas
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
            A site-oriented and phenotype-oriented guide to the major large
            B-cell lymphoma entities. Each entity is contrasted with DLBCL, NOS,
            with emphasis on anatomic distribution, tissue architecture,
            cytology, and immunohistochemistry.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Core comparator
              </div>
              <div className="mt-1 font-semibold">DLBCL, NOS</div>
              <div className="mt-1 text-sm text-slate-600">
                Morphologic and mature B-cell baseline
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Diagnostic anchors
              </div>
              <div className="mt-1 font-semibold">Site · Morphology · IHC</div>
              <div className="mt-1 text-sm text-slate-600">
                Clinical context can override an isolated genetic finding
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Classification note
              </div>
              <div className="mt-1 font-semibold">
                WHO fifth edition framework
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Use entity-specific criteria and exclude mimics
              </div>
            </div>
          </div>
        </header>

        <Section
          title="DLBCL, NOS: reference phenotype"
          subtitle="DLBCL, NOS is the residual category for large B-cell lymphomas that do not meet criteria for a more specific entity. Morphology alone is insufficient; ancillary studies and clinical context are required."
        >
          <DataTable rows={dlbclReference} />
        </Section>

        <Section
          title="Entity comparison at a glance"
          subtitle="The most useful first-pass discriminators are the primary site, the dominant tissue pattern, and the immunophenotypic signature."
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[1050px] w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  {[
                    "Entity",
                    "Characteristic localization",
                    "Histologic signature",
                    "IHC anchor",
                  ].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {entities.map((e) => (
                  <tr
                    key={e.abbreviation}
                    className="border-t border-slate-200 align-top"
                  >
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {e.abbreviation}
                      <div className="mt-1 font-normal text-slate-500">
                        {e.name}
                      </div>
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {e.location}
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {e.histology[0]}
                    </td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {e.ihc[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {entities.map((e, index) => (
          <Section
            key={e.abbreviation}
            title={`${index + 1}. ${e.name}`}
            subtitle={e.abbreviation}
          >
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-3 text-base font-bold">
                  Characteristic localization
                </h3>
                <p className="text-sm leading-6 text-slate-600">{e.location}</p>
                <div className="mt-5 rounded-xl bg-teal-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-teal-800">
                    Compared with DLBCL, NOS
                  </div>
                  <p className="mt-2 text-sm leading-6 text-teal-950">
                    {e.vsDlbcl}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-3 text-base font-bold">Histology</h3>
                <BulletList items={e.histology} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-3 text-base font-bold">
                  Immunohistochemistry
                </h3>
                <BulletList items={e.ihc} />
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="mb-3 text-base font-bold">
                  Differential diagnosis
                </h3>
                <div className="space-y-4">
                  {e.differential.map((d) => (
                    <div key={d.name}>
                      <div className="font-semibold text-slate-800">
                        {d.name}
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {d.findings}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {e.pearls && (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="font-bold text-amber-950">Diagnostic pearls</h3>
                <div className="mt-2">
                  <BulletList items={e.pearls} />
                </div>
              </div>
            )}
          </Section>
        ))}

        <Section
          title="Practical diagnostic workflow"
          subtitle="A hierarchy prevents overcalling a molecular result when the defining clinical or anatomic context points to another entity."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "1 · Establish lineage and maturity",
                "Confirm a mature B-cell neoplasm with a panel rather than a single marker: CD20, PAX5, CD79a, OCT2, BOB1, CD45; add plasma-cell markers when CD20/PAX5 are weak or absent.",
              ],
              [
                "2 · Let the site guide the differential",
                "CNS, vitreoretina, or testis in an immunocompetent patient raises IP-LBCL; anterior mediastinum raises PMBCL/MGZL; skin of the lower leg raises PCLBCL-LT; lung-centred angiocentric disease raises LYG.",
              ],
              [
                "3 · Read architecture before expanding IHC",
                "Sheets of large cells suggest DLBCL; rare scattered B cells in a T-cell/histiocyte background suggest THRLBCL; intravascular confinement suggests IVLBCL; fibrin-restricted microscopic aggregates suggest FA-LBCL.",
              ],
              [
                "4 · Apply entity-directed stains and genetics",
                "EBER for EBV-associated entities; HHV8/LANA for effusion-based/plasmablastic mimics; ALK for ALK+ LBCL; IRF4 FISH for the appropriate phenotype; MYC/BCL2 FISH for aggressive B-cell lymphomas; 11q analysis only in a matching Burkitt-like setting.",
              ],
            ].map(([h, p]) => (
              <div
                key={h}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-bold">{h}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Important classification cautions">
          <BulletList
            items={[
              "DLBCL-NOS is a diagnosis of exclusion. Do not use it when criteria for a defined large B-cell lymphoma entity are met.",
              "MYC and BCL2 protein coexpression (double-expressor phenotype) is not equivalent to MYC and BCL2 gene rearrangements.",
              "MYC plus BCL6 rearrangement without BCL2 is not classified as DLBCL/HGBCL-MYC/BCL2; such cases remain within DLBCL-NOS or HGBCL-NOS, depending on morphology.",
              "A documented immune deficiency/dysregulation setting takes precedence over a site-based category in the appropriate cases.",
              "For THRLBCL versus NLPHL, a limited core biopsy may be inadequate; assess architecture and clinical distribution.",
              "For FA-LBCL versus CI-DLBCL, the key distinction is not EBV or cytology alone: it is fibrin-restricted incidental growth without invasion versus a mass-forming infiltrative lymphoma.",
            ]}
          />
        </Section>

        <footer className="mt-14 border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
          <p>
            <strong>Educational use only.</strong> This page is a diagnostic
            reference and does not replace review of the complete clinical
            history, imaging, tissue architecture, flow cytometry,
            immunohistochemistry, in situ hybridization, cytogenetic studies, or
            molecular testing. The differential diagnoses are summarized as
            characteristic findings rather than name-only lists. Apply current
            WHO/ICC terminology and local reporting standards.
          </p>
        </footer>
      </div>
    </main>
  );
}
