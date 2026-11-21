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
    name: "Burkitt Lymphoma (BL)",
    group: "Aggressive Mature B-Cell Lymphomas",
    clue: "Monomorphic medium-sized cells, starry-sky pattern, germinal-center phenotype, Ki-67 typically ≥95%, and IG::MYC rearrangement.",
    summary:
      "An extremely aggressive mature B-cell neoplasm driven by MYC dysregulation.",
    clinical: [
      "Bimodal age distribution, with peaks in childhood and older adulthood; male predominance.",
      "Endemic disease often involves the jaw/facial bones; sporadic disease commonly involves the abdomen, ileocecal region, ovaries, kidneys, or other extranodal sites.",
      "Rapidly enlarging masses, high tumor burden, elevated LDH, and risk of CNS and marrow involvement are characteristic.",
      "HIV-associated and other immunodeficiency-associated cases may show nodal disease and plasmacytoid differentiation.",
    ],
    criteria: [
      "Diffuse proliferation of monomorphic medium-sized lymphoid cells with basophilic cytoplasm, multiple small nucleoli, brisk mitotic activity, and abundant apoptosis.",
      "Typical germinal-center B-cell phenotype: CD20/PAX5+, CD10+, BCL6+, strong MYC, and absent or weak BCL2.",
      "Ki-67 is usually at least 95% and often approaches 100%.",
      "Demonstrate an IG::MYC rearrangement in the appropriate morphologic and immunophenotypic context.",
      "In adults, evaluate for concurrent BCL2 and BCL6 rearrangements; MYC/BCL2 double-hit disease is not classified as BL.",
    ],
    histology: [
      "Diffuse sheets of monotonous medium-sized cells with round nuclei and multiple small, basophilic nucleoli.",
      "Cytoplasm is deeply basophilic and may contain lipid vacuoles.",
      "Numerous mitoses and apoptotic bodies create a very high turnover rate.",
      "Tingible-body macrophages produce a classic starry-sky pattern.",
      "Coagulative necrosis is common in bulky lesions.",
    ],
    ihc: [
      "Strong pan-B-cell markers: CD20, PAX5, CD79a, CD19, and CD22.",
      "Germinal-center markers: strong CD10 and BCL6; HGAL and MEF2B are often positive.",
      "MYC is intensely nuclear in most tumor cells.",
      "Ki-67 is typically ≥95%.",
      "BCL2 is usually negative; weak staining may occur in a minority but strong diffuse expression argues against BL.",
      "TdT, CD34, CD5, CD23, and CD138 are usually negative.",
      "EBER identifies EBV-associated cases; EBV status is reported as a biologically relevant subtype.",
    ],
    differential: [
      {
        name: "High-grade B-cell lymphoma with MYC and BCL2 rearrangements",
        distinction:
          "Concurrent MYC and BCL2 rearrangements exclude BL, even when morphology is Burkitt-like; BCL2 is usually strong.",
      },
      {
        name: "High-grade B-cell lymphoma, NOS",
        distinction:
          "Often shows greater cytologic variability, less uniform germinal-center phenotype, stronger BCL2, or a Ki-67 index below the typical BL range.",
      },
      {
        name: "High-grade B-cell lymphoma with 11q aberration",
        distinction:
          "Usually lacks MYC rearrangement and shows characteristic 11q gain/loss; morphology may closely mimic BL.",
      },
      {
        name: "B-lymphoblastic leukemia/lymphoma",
        distinction:
          "TdT and often CD34 positivity, finer chromatin, and an immature phenotype support lymphoblastic disease.",
      },
      {
        name: "Pediatric-type follicular lymphoma",
        distinction:
          "Usually localized and follicular, with a different architecture; small biopsies may overlap cytologically.",
      },
      {
        name: "Diffuse large B-cell lymphoma",
        distinction:
          "Usually has larger and more pleomorphic cells, less uniform proliferation, and often BCL2 expression.",
      },
    ],
    molecular: [
      "IG::MYC rearrangement is defining; IGH::MYC is most common, with IGK::MYC and IGL::MYC less frequent.",
      "EBV-positive and EBV-negative BL have distinct pathogenetic profiles; EBER is used to establish EBV status.",
      "Recurrent mutations include ID3, TCF3, CCND3, TP53, and genes affecting PI3K/B-cell receptor signaling.",
    ],
    pitfalls: [
      "A starry-sky pattern and near-100% Ki-67 are not specific for BL.",
      "Do not diagnose BL from MYC rearrangement alone; integrate the phenotype and exclude double-hit lymphoma.",
      "Strong BCL2, cyclin D1, or TdT expression should trigger reconsideration.",
    ],
  },
  {
    name: "Primary Effusion Lymphoma (PEL) and Extracavitary PEL",
    group: "KSHV/HHV8-Associated Lymphoid Neoplasms",
    clue: "Large-cell lymphoma with plasmablastic/anaplastic morphology and nuclear HHV8 LANA positivity; classic PEL presents as a serous cavity effusion.",
    summary:
      "A KSHV/HHV8-driven large B-cell lymphoma with a terminally differentiated phenotype and frequent EBV coinfection.",
    clinical: [
      "Usually adults with HIV/AIDS or other substantial immunosuppression; also occurs in older patients with immunosenescence.",
      "Classic PEL involves pleural, pericardial, or peritoneal cavities without a solid mass or disseminated nodal disease.",
      "Kaposi sarcoma and HHV8-associated multicentric Castleman disease may coexist.",
      "Extracavitary PEL presents as solid nodal or extranodal masses, including gastrointestinal tract, skin, lung, or rarely CNS.",
    ],
    criteria: [
      "Classic PEL: malignant large cells in a pleural, pericardial, or peritoneal effusion, usually without an associated solid tumor mass or other nodal/extranodal lymphoma.",
      "Extracavitary PEL: a morphologically and virologically related solid lymphoma without a defining effusion.",
      "Tumor cells show plasmablastic, immunoblastic, or anaplastic morphology and a terminal B-cell/plasma-cell differentiation phenotype.",
      "Demonstrate KSHV/HHV8 infection by nuclear LANA immunohistochemistry; this is essential.",
      "Assess EBV by EBER in situ hybridization; EBV is frequent but is not required.",
    ],
    histology: [
      "Large pleomorphic cells occur singly or in loose groups in effusions, often with abundant basophilic or amphophilic cytoplasm.",
      "Nuclei are irregular with coarse chromatin and prominent nucleoli; multinucleated and Reed–Sternberg-like forms may occur.",
      "Apoptotic debris and necrosis may be conspicuous.",
      "Extracavitary lesions form sheets of large immunoblastic, plasmablastic, or anaplastic cells and may show diffuse, partial, or sinusoidal nodal involvement.",
    ],
    ihc: [
      "Nuclear HHV8 LANA is positive in tumor cells and is the defining diagnostic stain.",
      "Plasma-cell/activation markers commonly include CD30, CD38, CD138, MUM1/IRF4, EMA, and HLA-DR.",
      "CD20, PAX5, CD79a, OCT2, BOB1, CD19, and surface/cytoplasmic immunoglobulins are usually absent in classic PEL.",
      "CD45 is variable and may be absent; aberrant T-cell antigen expression can occur.",
      "EBER is frequently positive, particularly in HIV-associated PEL; LMP1 is usually negative.",
    ],
    differential: [
      {
        name: "Fluid overload-associated large B-cell lymphoma",
        distinction:
          "Usually HHV8-negative and occurs in older patients with fluid overload; B-cell markers are more often retained.",
      },
      {
        name: "KSHV/HHV8-positive DLBCL",
        distinction:
          "Usually nodal/splenic, expresses cytoplasmic IgM (often lambda), and often retains CD20 or other B-cell markers; LANA is positive in both.",
      },
      {
        name: "KSHV/HHV8-positive germinotropic lymphoproliferative disorder",
        distinction:
          "Usually localized nodal disease with germinal-center colonization and retained nodal architecture rather than a cavity-based lymphoma.",
      },
      {
        name: "ALK-positive large B-cell lymphoma",
        distinction:
          "Often plasmablastic and CD20-negative, but ALK is positive and HHV8/EBV are negative.",
      },
      {
        name: "Anaplastic large cell lymphoma",
        distinction:
          "May mimic PEL cytologically, but is a T-cell/null-cell lymphoma and is HHV8-negative.",
      },
      {
        name: "Pyothorax-associated lymphoma",
        distinction:
          "Associated with chronic pyothorax and EBV, but lacks HHV8 and usually retains a conventional B-cell phenotype.",
      },
    ],
    molecular: [
      "KSHV/HHV8 infection is defining; LANA immunohistochemistry is the routine tissue assay.",
      "EBV coinfection is common and is demonstrated by EBER.",
      "IGH rearrangement studies may establish B-cell clonality when phenotype is markedly attenuated.",
    ],
    pitfalls: [
      "Do not diagnose PEL from effusion cytology and plasma-cell markers alone; establish HHV8 positivity.",
      "HHV8 positivity does not by itself distinguish PEL from HHV8-positive DLBCL or GLPD; clinical distribution and architecture are critical.",
    ],
  },
  {
    name: "KSHV/HHV8-Positive Diffuse Large B-Cell Lymphoma",
    group: "KSHV/HHV8-Associated Lymphoid Neoplasms",
    clue: "Sheets of plasmablasts/immunoblasts with cytoplasmic IgM, usually lambda, and nuclear HHV8 LANA positivity, often in an MCD setting.",
    summary:
      "An aggressive HHV8-driven large B-cell lymphoma, frequently arising in association with HHV8-positive multicentric Castleman disease.",
    clinical: [
      "Most often adults, particularly men with HIV infection and substantial immunodeficiency.",
      "Usually presents with generalized lymphadenopathy and splenomegaly; MCD is commonly concurrent or antecedent.",
      "Extranodal dissemination and peripheral-blood involvement may occur.",
    ],
    criteria: [
      "Demonstrate a clonal large B-cell proliferation with sheets of plasmablastic or immunoblastic cells.",
      "Tumor cells are HHV8 LANA-positive.",
      "Cytoplasmic IgM, usually lambda-restricted, supports the diagnosis.",
      "Correlate with nodal/splenic disease and evaluate for concurrent HHV8-associated MCD.",
      "EBV is usually negative; if positive, interpret in the context of profound immunosuppression and the broader differential.",
    ],
    histology: [
      "Coalescent sheets of intermediate-to-large cells efface nodal or splenic architecture.",
      "Cells have vesicular, often eccentric nuclei, one or more prominent nucleoli, and amphophilic cytoplasm.",
      "Plasmablastic and immunoblastic cytology is typical; rare cases show intravascular or Hodgkin-like patterns.",
      "Necrosis may be present.",
    ],
    ihc: [
      "Nuclear HHV8 LANA is positive.",
      "Cytoplasmic IgM, usually lambda, is characteristic; surface immunoglobulin may be absent.",
      "MUM1/IRF4 and vIL-6 are commonly positive.",
      "CD20 and PAX5 are variable; CD79a, CD38, CD27, and CD138 are often negative or variable.",
      "EBER is usually negative, unlike many HIV-associated PEL cases.",
    ],
    differential: [
      {
        name: "Primary effusion lymphoma / extracavitary PEL",
        distinction:
          "PEL usually lacks cytoplasmic IgM and has a more complete terminal plasma-cell phenotype with loss of B-cell markers; effusion-based presentation favors classic PEL.",
      },
      {
        name: "KSHV/HHV8-positive germinotropic lymphoproliferative disorder",
        distinction:
          "GLPD is usually localized and germinal-center centered, with preserved architecture and often polyclonal plasmablastic aggregates.",
      },
      {
        name: "Plasmablastic lymphoma",
        distinction:
          "Usually HHV8-negative and often EBV-positive; commonly expresses CD138/MUM1 and lacks conventional B-cell markers.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "Usually HHV8-negative and retains a more complete B-cell phenotype; EBER is typically diffuse in tumor cells.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "LPL is composed of small B cells, plasmacytoid lymphocytes, and plasma cells, often with MYD88 L265P and IgM paraprotein rather than sheets of HHV8-positive blasts.",
      },
    ],
    molecular: [
      "HHV8 LANA positivity is defining.",
      "IGH genes are generally unmutated, consistent with a naive IgM-producing B-cell origin.",
      "EBV coinfection is uncommon; MYD88 L265P is not a defining feature.",
    ],
    pitfalls: [
      "Do not use the obsolete designation 'large B-cell lymphoma arising in HHV8-associated MCD' as the entity name.",
      "LANA positivity must be interpreted with architecture, IgM expression, and clinical distribution because multiple HHV8-associated entities are LANA-positive.",
    ],
  },
  {
    name: "KSHV/HHV8-Positive Germinotropic Lymphoproliferative Disorder (GLPD)",
    group: "KSHV/HHV8-Associated Lymphoid Neoplasms",
    clue: "HHV8-positive, usually EBV-positive plasmablasts colonizing germinal centers in a usually preserved lymph node.",
    summary:
      "A usually localized, often polyclonal HHV8-associated lymphoproliferation, classically arising in older immunocompetent adults.",
    clinical: [
      "Usually older adults; no consistent sex predilection.",
      "Typically localized lymphadenopathy, often without systemic immunodeficiency.",
      "May be multifocal or associated with immunosenescence; systemic symptoms are often absent.",
    ],
    criteria: [
      "Retained or largely preserved lymph-node architecture.",
      "Germinal centers are partially or completely colonized by clusters or sheets of plasmablastic, immunoblastic, or anaplastic cells.",
      "Demonstrate HHV8 LANA positivity in the atypical germinotropic cells.",
      "EBER positivity and polyclonal B-cell gene rearrangement are desirable supportive findings.",
      "Exclude HHV8-positive DLBCL and extracavitary PEL, particularly when plasmablastic aggregates are extensive.",
    ],
    histology: [
      "Atypical large cells are concentrated within germinal centers, producing a germinotropic distribution.",
      "Cells may be plasmablastic, immunoblastic, or anaplastic, with prominent nucleoli and abundant cytoplasm.",
      "Nodal architecture is generally retained, although involved follicles may be extensively replaced.",
      "Plasmablastic aggregates may overlap morphologically with extracavitary PEL.",
    ],
    ihc: [
      "Atypical germinotropic cells show nuclear HHV8 LANA positivity.",
      "EBER is usually positive in the large cells.",
      "Plasma-cell differentiation markers and MUM1 may be expressed; phenotype is variable.",
      "B-cell markers may be attenuated; light-chain restriction is not consistently demonstrable.",
      "LANA staining distinguishes GLPD from EBV-positive germinal-center colonization by other lymphomas.",
    ],
    differential: [
      {
        name: "KSHV/HHV8-positive DLBCL",
        distinction:
          "DLBCL shows destructive sheets of clonal plasmablasts/immunoblasts, often with cytoplasmic IgM/lambda; GLPD is germinal-center centered with retained architecture and often polyclonal cells.",
      },
      {
        name: "Extracavitary PEL",
        distinction:
          "EC-PEL forms a mass with destructive sheets of large cells and a terminal B-cell phenotype; GLPD is usually localized and follicle-centered.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "EBV-positive DLBCL is HHV8-negative; LANA positivity in the atypical cells supports GLPD.",
      },
      {
        name: "Polymorphic lymphoproliferative disorder",
        distinction:
          "Polymorphic LPD shows a broad spectrum of B-cell maturation and architectural disruption in an established immune deficiency/dysregulation setting.",
      },
    ],
    molecular: [
      "HHV8 LANA positivity is essential.",
      "EBER positivity is common and supportive.",
      "Polyclonal IG rearrangement supports GLPD over a clonal large B-cell lymphoma, but clonality results must be interpreted with morphology.",
    ],
    pitfalls: [
      "Do not diagnose GLPD on cytology alone; an adequate tissue biopsy is needed to assess germinal-center localization and architecture.",
      "The boundary with EC-PEL may be indistinct in lesions with extensive plasmablastic aggregates; clinical context and multidisciplinary review are important.",
    ],
  },
  {
    name: "Polymorphic Lymphoproliferative Disorder in Immune Deficiency/Dysregulation",
    group: "Immune Deficiency/Dysregulation-Associated Lymphoproliferations",
    clue: "A destructive, polymorphous lymphoid proliferation in an immune deficiency/dysregulation setting, often with EBV-positive B immunoblasts and HRS-like cells.",
    summary:
      "A spectrum of EBV-associated or other virus-associated lymphoproliferations that does not meet criteria for a defined lymphoma.",
    clinical: [
      "Occurs in patients with HIV, solid-organ or hematopoietic transplantation, iatrogenic immunosuppression, inborn errors of immunity, or immunosenescence.",
      "Can involve lymph nodes or extranodal sites, including gastrointestinal tract, skin, lung, and other organs.",
      "Clinical presentation ranges from localized masses to disseminated disease; the immune-deficiency setting is integral to classification.",
    ],
    criteria: [
      "Establish a relevant immune deficiency/dysregulation setting, including the specific clinical background.",
      "Show a polymorphous lymphoid proliferation with variable architectural effacement and a spectrum of B-cell maturation, without diagnostic features of a defined lymphoma.",
      "Assess EBV by EBER in situ hybridization; assess HHV8 when morphology or clinical setting warrants it.",
      "Exclude infectious mononucleosis-like hyperplasia, EBV-positive mucocutaneous ulcer, classic Hodgkin lymphoma, EBV-positive DLBCL, and HHV8-associated entities.",
      "Use integrated three-part nomenclature where appropriate: lesion type, viral status, and immune-deficiency/dysregulation setting.",
    ],
    histology: [
      "Broad polymorphous spectrum includes small lymphocytes, plasma cells, immunoblasts, plasmablasts, and HRS-like large cells.",
      "Architecture may be partially or extensively effaced by a mixed infiltrate.",
      "EBV-positive cells may be scattered or form aggregates; no validated numerical cutoff separates polymorphic LPD from lymphoma.",
      "T-cell/histiocyte-rich or Hodgkin-like backgrounds may occur.",
      "An adequate excisional or incisional biopsy is preferred because architecture is essential.",
    ],
    ihc: [
      "Small and large B cells show variable CD20, CD79a, PAX5, OCT2, and BOB1 expression according to differentiation.",
      "Large cells may variably express CD30, CD15, MUM1, and CD45; HRS-like cells may show an attenuated B-cell phenotype.",
      "EBER highlights variable proportions of cells; the distribution of EBV-positive cells is diagnostically important.",
      "Light-chain expression may be polytypic, restricted, or discordant between sites.",
      "Flow cytometry may be nondiagnostic because the proliferation can be polymorphous and tissue architecture is required.",
    ],
    differential: [
      {
        name: "EBV-positive mucocutaneous ulcer",
        distinction:
          "Usually a sharply localized, superficial mucocutaneous ulcer with a circumscribed polymorphous infiltrate and no disseminated mass-forming disease.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "Confluent sheets of large B cells with a destructive mass-forming pattern support DLBCL rather than polymorphic LPD.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "CHL has characteristic HRS cells in a typical reactive milieu with CD30+, weak PAX5+, and usually CD15+ phenotype; clinical setting and distribution are critical.",
      },
      {
        name: "Infectious mononucleosis-like hyperplasia",
        distinction:
          "Usually preserves architecture more effectively and shows a broad polytypic EBV-positive immunoblastic response, often with prominent CD8-positive T cells.",
      },
      {
        name: "KSHV/HHV8-associated GLPD or PEL",
        distinction:
          "Demonstration of LANA in the atypical cells redirects classification to an HHV8-associated entity.",
      },
      {
        name: "Plasmacytic small B-cell lymphoma",
        distinction:
          "A pre-existing clonal lymphoma with characteristic architecture and phenotype should be classified as that lymphoma, with EBV status and immune context appended as appropriate.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is preferred for tissue assessment of EBV; blood EBV viral load alone does not establish tissue involvement.",
      "IG or T-cell receptor clonality studies may assist in selected cases but do not replace morphology and clinical context.",
      "HHV8 LANA immunohistochemistry is required when HHV8-associated disease is in the differential.",
    ],
    pitfalls: [
      "Do not apply a fixed percentage of large cells as a threshold for lymphoma; no validated cutoff exists.",
      "Do not classify every EBV-positive polymorphous lesion as DLBCL or CHL.",
      "A polymorphous proliferation should prompt evaluation for an unrecognized immune deficiency when the clinical history is incomplete.",
    ],
  },
  {
    name: "EBV-Positive Mucocutaneous Ulcer (EBVMCU)",
    group: "Immune Deficiency/Dysregulation-Associated Lymphoproliferations",
    clue: "A sharply circumscribed mucosal or cutaneous ulcer with EBV-positive atypical B cells in a polymorphous inflammatory background.",
    summary:
      "A localized EBV-driven B-cell lymphoproliferation arising in age-related or iatrogenic immune impairment and selected immune dysregulation settings.",
    clinical: [
      "Usually older adults with immunosenescence; may occur with methotrexate or other immunosuppressive therapy, transplantation, or inborn errors of immunity.",
      "Typically affects oropharyngeal mucosa, skin, or gastrointestinal tract.",
      "Presents as a solitary, sharply demarcated ulcer; systemic symptoms and disseminated disease are uncommon.",
    ],
    criteria: [
      "A localized, sharply circumscribed ulcerative lesion involving skin or mucosa.",
      "Polymorphous infiltrate with EBV-positive atypical B cells, including immunoblasts and HRS-like cells.",
      "Demonstrate EBV in atypical cells by EBER in situ hybridization.",
      "Correlate with immune senescence, immunosuppressive medication, transplantation, or another immune dysregulation setting.",
      "Exclude systemic EBV-positive DLBCL and polymorphic LPD by clinical staging and distribution.",
    ],
    histology: [
      "Ulcer bed contains a sharply circumscribed polymorphous infiltrate, often with a rim of small T lymphocytes at the base and sides.",
      "Large immunoblasts, plasmablasts, and HRS-like cells are scattered or form small aggregates.",
      "Necrosis and a prominent inflammatory background may be present.",
      "The lesion is usually localized without destructive extension into adjacent deep tissue.",
    ],
    ihc: [
      "EBER is positive in atypical B cells, often in a broad spectrum of cell sizes.",
      "Large cells commonly express CD20, PAX5, CD30, and MUM1; CD15 may be positive in a subset.",
      "B-cell marker expression may be attenuated in HRS-like cells.",
      "T cells at the ulcer base are usually CD3-positive and may form a rim.",
      "LANA is negative unless a separate HHV8-associated process is present.",
    ],
    differential: [
      {
        name: "Polymorphic LPD",
        distinction:
          "Usually more extensive or mass-forming, often with broader tissue involvement; EBVMCU is characteristically a localized, sharply circumscribed ulcer.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "Shows destructive sheets of large cells and a mass-forming lesion, often with systemic disease rather than a solitary superficial ulcer.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "HRS cells may be present, but EBVMCU has a localized ulcerative pattern and often stronger B-cell marker expression.",
      },
      {
        name: "Plasmablastic lymphoma",
        distinction:
          "Usually forms a destructive mass, often expresses CD138 and MUM1 with loss of CD20/PAX5, and is frequently associated with HIV; EBVMCU is more circumscribed and polymorphous.",
      },
    ],
    molecular: [
      "EBER in situ hybridization is required to demonstrate EBV in the atypical cells.",
      "Clonal IG rearrangements may be detected and do not by themselves establish aggressive lymphoma.",
    ],
    pitfalls: [
      "Do not diagnose EBV-positive DLBCL solely because large EBER-positive cells are present.",
      "The localized clinical distribution is central to the diagnosis; investigate for systemic disease when lesions are multiple or atypical.",
    ],
  },
  {
    name: "Diffuse Large B-Cell Lymphoma in Immune Deficiency/Dysregulation",
    group: "Immune Deficiency/Dysregulation-Associated Lymphoproliferations",
    clue: "A destructive mass-forming proliferation with diffuse sheets of large B cells in a defined immune deficiency/dysregulation setting.",
    summary:
      "A DLBCL-pattern lymphoma classified with explicit documentation of the underlying immune context and viral status.",
    clinical: [
      "Occurs after solid-organ or hematopoietic transplantation, with HIV, iatrogenic immunosuppression, inborn errors of immunity, or immunosenescence.",
      "Can involve lymph nodes or extranodal organs, including gastrointestinal tract, skin, lung, and CNS.",
      "May present with a rapidly enlarging mass, systemic symptoms, elevated LDH, or organ dysfunction.",
    ],
    criteria: [
      "Confirm an immune deficiency/dysregulation setting and document the specific cause.",
      "Demonstrate diffuse destructive sheets of large atypical B cells.",
      "Apply the same morphologic and immunophenotypic criteria used for DLBCL in immunocompetent patients.",
      "Assess EBV by EBER and HHV8 by LANA when indicated; report viral status explicitly.",
      "Distinguish a monomorphic DLBCL pattern from polymorphic LPD, EBVMCU, and CHL-like proliferations.",
    ],
    histology: [
      "Diffuse sheets of large centroblastic, immunoblastic, or plasmablastic cells efface tissue architecture.",
      "Necrosis, apoptosis, and a variable inflammatory background may be present.",
      "HRS-like cells may occur in a subset and should not automatically redirect the diagnosis to CHL.",
      "Some cases show a T-cell/histiocyte-rich background resembling THRLBCL.",
    ],
    ihc: [
      "Tumor cells usually express B-cell markers such as CD20, PAX5, CD79a, OCT2, and BOB1, although expression may vary with plasmablastic differentiation or prior therapy.",
      "MUM1/IRF4 is commonly positive; CD30 may be expressed.",
      "EBER may be positive in tumor cells; LMP1 and occasionally EBNA2 may be expressed in latency patterns associated with the clinical setting.",
      "HHV8 LANA should be performed when HHV8-associated lymphoma is considered.",
      "Use a standard large B-cell lymphoma panel and cell-of-origin studies as appropriate.",
    ],
    differential: [
      {
        name: "Polymorphic LPD",
        distinction:
          "Polymorphic LPD contains a broad spectrum of B-cell maturation without confluent sheets of large lymphoma cells; sheets support DLBCL.",
      },
      {
        name: "EBV-positive mucocutaneous ulcer",
        distinction:
          "EBVMCU is a localized superficial ulcer without a destructive mass-forming pattern or systemic disease.",
      },
      {
        name: "Classic Hodgkin lymphoma",
        distinction:
          "CHL has sparse HRS cells, a characteristic inflammatory milieu, weak PAX5, and usually CD30/CD15; DLBCL retains a stronger B-cell program.",
      },
      {
        name: "KSHV/HHV8-positive DLBCL",
        distinction:
          "HHV8 LANA positivity and cytoplasmic IgM support the HHV8-defined entity.",
      },
      {
        name: "T-cell/histiocyte-rich large B-cell lymphoma",
        distinction:
          "THRLBCL is defined by sparse large B cells in a T-cell/histiocyte-rich background and is not diagnosed solely because an IDD-associated DLBCL has abundant reactive T cells.",
      },
    ],
    molecular: [
      "EBER in situ hybridization establishes tumor-cell EBV association; peripheral-blood EBV load is not a substitute.",
      "Perform entity-directed molecular studies as in immunocompetent patients when indicated.",
      "Clonality studies may be helpful in difficult cases but require caution in immune dysregulation.",
    ],
    pitfalls: [
      "Do not use 'monomorphic PTLD' as a generic substitute for a specific lymphoma diagnosis.",
      "The immune context modifies classification and reporting but does not replace the morphologic diagnosis.",
    ],
  },
  {
    name: "Inborn Error of Immunity-Associated Lymphoid Proliferations and Lymphomas",
    group: "Immune Deficiency/Dysregulation-Associated Lymphoproliferations",
    clue: "A mass-forming or infiltrative lymphoid proliferation arising in a genetically defined inborn error of immunity.",
    summary:
      "A clinicopathologic framework encompassing hyperplasia, polymorphic LPD, EBVMCU, and defined lymphomas in patients with inherited immune defects.",
    clinical: [
      "Often presents in childhood or young adulthood, although CVID-associated disease may present in adulthood.",
      "Male predominance occurs in X-linked disorders; distribution depends on the underlying immune defect.",
      "Common sites include lymph nodes, gastrointestinal tract, skin, lung, and bone marrow.",
      "Associated manifestations may include recurrent infections, autoimmunity, lymphadenopathy, splenomegaly, granulomatous disease, or HLH.",
    ],
    criteria: [
      "Establish or strongly suspect an underlying inborn error of immunity; document the specific immune defect when known.",
      "Classify the tissue lesion using standard criteria for reactive hyperplasia, polymorphic LPD, EBVMCU, or a defined lymphoma.",
      "Assess EBV status in tissue and evaluate HHV8 when clinically or morphologically indicated.",
      "Exclude infection and occult malignancy in granulomatous or CD8-rich lesions.",
      "Use germline testing to confirm the underlying immune disorder; do not use tumor tissue alone for germline classification.",
    ],
    histology: [
      "The spectrum is heterogeneous and may include poorly formed germinal centers, reduced plasma cells, T-zone hyperplasia, plasmacytosis, or granulomatous/CD8-rich infiltrates.",
      "EBV-associated lesions range from hyperplasia and polymorphic LPD to EBVMCU and overt lymphoma.",
      "Common lymphomas include DLBCL, classic Hodgkin lymphoma, Burkitt lymphoma, and marginal zone lymphoma.",
      "T- and NK-cell lymphomas are uncommon but may occur, particularly in disorders with chromosomal instability or impaired immune surveillance.",
    ],
    ihc: [
      "Immunophenotype is determined by the specific underlying lesion; use the corresponding lymphoma-specific panel.",
      "Flow cytometry may reveal B-cell, T-cell, or NK-cell abnormalities that suggest the underlying immune defect.",
      "EBER should be performed in suspected EBV-associated proliferations.",
      "HHV8 LANA is indicated when the morphology or clinical context suggests an HHV8-associated process.",
      "Granulomatous or CD8-rich lesions require exclusion of infectious organisms and occult lymphoma.",
    ],
    differential: [
      {
        name: "Secondary immune deficiency/dysregulation-associated LPD",
        distinction:
          "The defining distinction is an inherited immune defect rather than HIV, transplantation, medication-related immunosuppression, or immunosenescence.",
      },
      {
        name: "Sporadic lymphoma",
        distinction:
          "The same histologic lymphoma may occur sporadically; the underlying germline immune defect changes the clinical classification and management context.",
      },
      {
        name: "Infectious lymphadenitis",
        distinction:
          "Organism-directed stains, cultures, molecular testing, and clinical correlation are essential, especially in granulomatous lesions.",
      },
      {
        name: "CVID-associated granulomatous disease",
        distinction:
          "Granulomatous/CD8-rich lesions require exclusion of infection and THRLBCL or overt T-cell lymphoma.",
      },
    ],
    molecular: [
      "Germline testing is recommended to establish the specific inborn error of immunity.",
      "EBER and lesion-directed molecular studies should be performed as indicated.",
      "Interpret somatic sequencing cautiously because germline variants may be detected in tumor specimens; confirm germline findings in non-neoplastic tissue.",
    ],
    pitfalls: [
      "Do not diagnose lymphoma from clonality alone; restricted lymphocyte populations may occur in immune dysregulation.",
      "Do not perform germline classification using tumor tissue alone.",
      "The final diagnosis should name the specific histologic lesion and append the immune-deficiency context.",
    ],
  },
  {
    name: "Classic Hodgkin Lymphoma (CHL)",
    group: "Hodgkin Lymphomas",
    clue: "Scattered Hodgkin/Reed–Sternberg cells in a characteristic inflammatory microenvironment; CD30+, weak PAX5+, usually CD15+ and CD45−.",
    summary:
      "A germinal-center B-cell neoplasm with profound downregulation of the B-cell program and a prominent tumor microenvironment.",
    clinical: [
      "Bimodal age distribution, commonly young adults and older adults; male predominance is modest overall.",
      "Usually presents with painless lymphadenopathy, especially cervical, supraclavicular, and mediastinal nodes.",
      "Mediastinal bulk is particularly associated with nodular sclerosis CHL; B symptoms may occur.",
      "Primary extranodal disease or atypical distribution should prompt evaluation for immune deficiency/dysregulation and alternative entities.",
    ],
    criteria: [
      "Identify Hodgkin and Reed–Sternberg (HRS) cells or variants in an appropriate polymorphous inflammatory microenvironment.",
      "HRS cells are typically CD30-positive, PAX5-positive with weak-to-moderate intensity, and CD20-negative, weak, or heterogeneous.",
      "CD15 positivity, CD45 negativity, and downregulation of OCT2/BOB1 support the diagnosis.",
      "Correlate with primary nodal or mediastinal presentation and exclude mimics, particularly NLPHL, EBV-positive B-cell proliferations, mediastinal grey zone lymphoma, and T-cell lymphomas.",
      "Assign a histologic subtype when adequate tissue is available: nodular sclerosis, mixed cellularity, lymphocyte-rich, or lymphocyte-depleted.",
    ],
    histology: [
      "HRS cells are scattered large mono- or multinucleated cells with prominent eosinophilic nucleoli, often in an inflammatory background.",
      "The background contains variable small lymphocytes, eosinophils, histiocytes, plasma cells, and neutrophils.",
      "Nodular sclerosis: broad or delicate collagen bands divide tissue into nodules; lacunar cells are characteristic.",
      "Mixed cellularity: diffuse effacement with numerous HRS cells in a mixed inflammatory infiltrate; granulomas may occur.",
      "Lymphocyte-rich: nodular or diffuse small-lymphocyte-rich background with few eosinophils/neutrophils; reactive B-cell nodules may be present.",
      "Lymphocyte-depleted: numerous pleomorphic HRS cells with sparse background lymphocytes, often with diffuse fibrosis or histiocytes.",
    ],
    ihc: [
      "CD30 is strongly positive in nearly all HRS cells, often with membranous/Golgi accentuation.",
      "CD15 is positive in most cases, often focally.",
      "PAX5 is positive but characteristically weaker than in background B cells.",
      "CD20 is negative, weak, or heterogeneous; CD79a, OCT2, and BOB1 are usually reduced or absent.",
      "MUM1/IRF4 is strongly positive; CD45 and CD138 are usually negative.",
      "EBER is positive in a subset, particularly mixed-cellularity and lymphocyte-depleted patterns; EBV shows type II latency.",
      "PD-L1 is often expressed; STAT6 may be positive and can support CHL in selected differentials.",
    ],
    differential: [
      {
        name: "Nodular lymphocyte-predominant Hodgkin lymphoma",
        distinction:
          "LP cells retain a strong B-cell program (CD20, OCT2, BOB1, BCL6), are usually CD30−/CD15−, and are surrounded by PD1-positive TFH rosettes.",
      },
      {
        name: "Mediastinal grey zone lymphoma",
        distinction:
          "Mediastinal mass with sheets or clusters of large cells and stronger preservation of the B-cell program favors grey zone lymphoma over classic CHL.",
      },
      {
        name: "EBV-positive DLBCL",
        distinction:
          "Tumor cells usually retain CD20/PAX5/OCT2/BOB1 and CD45; sheets of large cells favor DLBCL rather than sparse HRS cells.",
      },
      {
        name: "Infectious mononucleosis",
        distinction:
          "Usually preserves more architecture, has numerous CD20+/CD45+ polytypic immunoblasts, and a CD8-rich background.",
      },
      {
        name: "T-cell/histiocyte-rich large B-cell lymphoma",
        distinction:
          "Large cells retain a full B-cell phenotype and are usually CD45+/BCL6+, CD30−, and CD15−.",
      },
      {
        name: "Nodal TFH-cell lymphoma",
        distinction:
          "HRS-like B cells may be EBV-positive, but the background contains neoplastic TFH cells; RHOA G17V or IDH2 R172 mutations support TFH lymphoma.",
      },
      {
        name: "ALK-negative anaplastic large cell lymphoma",
        distinction:
          "Tumor cells show a T-cell/null phenotype, strong CD30, and lack PAX5; TR clonality may resolve difficult cases.",
      },
    ],
    molecular: [
      "EBER establishes EBV association in HRS cells.",
      "Recurrent 9p24.1 gains/amplification involve PD-L1, PD-L2, and JAK2 and may have predictive relevance for checkpoint blockade.",
      "Recurrent alterations affect NF-κB and JAK/STAT signaling, including TNFAIP3, SOCS1, STAT6, and related pathway genes.",
    ],
    pitfalls: [
      "HRS-like cells are not specific for CHL; interpret them in the context of the background population and complete phenotype.",
      "PAX5-negative CHL is rare; confirm lineage and exclude T-cell lymphoma or other mimics before making this diagnosis.",
      "Do not diagnose CHL from cytology alone when a primary tissue diagnosis is required.",
    ],
  },
  {
    name: "Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)",
    group: "Hodgkin Lymphomas",
    clue: "Scattered popcorn-like LP cells in B-cell-rich nodules with FDC meshworks and PD1-positive TFH rosettes; strong B-cell phenotype.",
    summary:
      "A germinal-center-derived B-cell neoplasm with six recognized nodular and diffuse growth patterns and a risk of large B-cell transformation.",
    clinical: [
      "Usually adults aged 30–60 years, but may occur from childhood to older adulthood; male predominance.",
      "Typically presents with localized, painless peripheral lymphadenopathy, often cervical, axillary, inguinal, or iliac.",
      "Most patients have early-stage disease; B symptoms are less common than in CHL.",
      "Liver, spleen, and marrow involvement are uncommon and may be associated with variant growth patterns.",
    ],
    criteria: [
      "Identify scattered large LP cells with multilobated nuclei and one or more nucleoli in a characteristic nodular or mixed nodular/diffuse architecture.",
      "LP cells retain a strong B-cell phenotype, typically CD20+, PAX5+, OCT2+, BOB1+, and BCL6+.",
      "Nodules contain small B cells and expanded follicular dendritic cell meshworks.",
      "PD1-positive TFH cells typically form rosettes around LP cells.",
      "At least one unequivocal NLPHL nodule is required when a diffuse pattern E/THRLBCL-like component predominates.",
      "Assess for transformation when sheets or confluent aggregates of large B cells develop with loss of the typical NLPHL architecture.",
    ],
    histology: [
      "LP cells are large with multilobated or folded nuclei, vesicular chromatin, prominent nucleoli, and abundant pale cytoplasm; they resemble popcorn.",
      "LP cells are usually scattered singly and constitute a small fraction of the lesion.",
      "Background contains abundant small B and T lymphocytes, histiocytes, and FDC networks; eosinophils and neutrophils are typically absent.",
      "Pattern A: classic B-cell-rich nodules with scattered LP cells.",
      "Pattern B: serpiginous/interconnected nodules with numerous LP cells.",
      "Pattern C: extranodular LP cells in a T-cell-rich background.",
      "Pattern D: T-cell-rich nodules with increased LP cells.",
      "Pattern E: diffuse THRLBCL-like pattern with few B cells; a typical NLPHL nodule must be found.",
      "Pattern F: diffuse variant with abundant small B cells and scattered LP cells.",
    ],
    ihc: [
      "LP cells strongly express CD20, PAX5, CD79a, OCT2, BOB1, and PU.1.",
      "Germinal-center markers BCL6, LMO2, and HGAL are usually positive; CD10 is usually negative.",
      "CD30 is usually negative; CD15 is usually negative or only rarely positive.",
      "IgD is expressed in a subset, particularly in young men and selected growth patterns.",
      "Background FDC meshworks are highlighted by CD21 and CD23.",
      "PD1, CD57, ICOS, and other TFH markers highlight rosetting T cells around LP cells.",
      "EBER is usually negative; EBV positivity is exceptional.",
    ],
    differential: [
      {
        name: "Classic Hodgkin lymphoma, lymphocyte-rich subtype",
        distinction:
          "CHL has CD30+, weak PAX5+, often CD15+, and reduced OCT2/BOB1; NLPHL has strong pan-B-cell markers and PD1-positive rosettes.",
      },
      {
        name: "T-cell/histiocyte-rich large B-cell lymphoma",
        distinction:
          "THRLBCL lacks the characteristic B-cell-rich nodules and FDC meshworks; a convincing NLPHL nodule is required to classify pattern E.",
      },
      {
        name: "Progressive transformation of germinal centers",
        distinction:
          "PTGC has enlarged serpiginous follicles with mantle-zone B cells but lacks LP cells with the characteristic neoplastic phenotype.",
      },
      {
        name: "Nodal TFH-cell lymphoma",
        distinction:
          "TFH lymphoma has an aberrant clonal TFH-cell population and may show RHOA G17V or IDH2 R172 mutations; NLPHL has a reactive TFH rosette pattern.",
      },
      {
        name: "Diffuse large B-cell lymphoma arising by transformation",
        distinction:
          "Transformation shows loss of nodular/FDC architecture and confluent sheets or substantial aggregates of large B cells without a residual diagnostic NLPHL pattern.",
      },
    ],
    molecular: [
      "LP cells are clonal germinal-center B cells with ongoing somatic hypermutation; whole-tissue IG clonality assays may be insensitive.",
      "BCL6 rearrangements or amplifications are recurrent.",
      "Aberrant somatic hypermutation may target PIM1, RHOH, PAX5, MYC, SOCS1, JUNB, DUSP2, and SGK1.",
      "EBV is not a significant etiologic driver and is detected only exceptionally.",
    ],
    pitfalls: [
      "Do not diagnose NLPHL from LP-cell morphology alone; the immunoarchitecture is essential.",
      "Core biopsies may not adequately distinguish pattern E NLPHL from de novo THRLBCL; excisional tissue is preferred.",
      "Do not mistake increased LP cells in variant patterns for transformation without assessing architecture and large-cell distribution.",
    ],
  },
];

const overviewRows = [
  {
    entity: "Burkitt lymphoma",
    etiology:
      "MYC-driven; EBV-associated in most endemic cases and a subset of sporadic/immunodeficiency-associated cases; malaria is a cofactor in endemic regions.",
    lineage: "Mature germinal-center B cell.",
    histology:
      "Monomorphic medium cells, basophilic vacuolated cytoplasm, starry-sky pattern, brisk apoptosis/mitoses.",
    ihc: "CD20+, PAX5+, CD10+, BCL6+, MYC strong+, Ki-67 ≥95%, BCL2−/weak, TdT−.",
  },
  {
    entity: "Primary effusion lymphoma",
    etiology:
      "KSHV/HHV8-driven; frequent EBV coinfection; usually HIV-related or other immunosuppression.",
    lineage:
      "Post-germinal-center/terminally differentiated B cell with plasmablastic phenotype.",
    histology:
      "Large immunoblastic, plasmablastic, or anaplastic cells in serous effusion; extracavitary form forms solid sheets.",
    ihc: "LANA+, CD30+, MUM1+, CD38/CD138 often+; CD20/PAX5/OCT2/BOB1 usually−; EBER often+.",
  },
  {
    entity: "KSHV/HHV8-positive DLBCL",
    etiology:
      "KSHV/HHV8-driven; often associated with HHV8-MCD and profound immunodeficiency.",
    lineage: "Naive IgM-producing B cell.",
    histology:
      "Destructive sheets of plasmablasts/immunoblasts, often with eccentric nuclei.",
    ihc: "LANA+, cytoplasmic IgM/lambda+, MUM1+, vIL-6+; CD20/PAX5 variable; EBER usually−.",
  },
  {
    entity: "KSHV/HHV8-positive GLPD",
    etiology:
      "KSHV/HHV8 infection, usually with EBV; often immunocompetent older adults.",
    lineage: "B-cell lineage with plasmablastic/germinotropic differentiation.",
    histology:
      "Large atypical cells colonize germinal centers; nodal architecture usually retained.",
    ihc: "LANA+, usually EBER+; variable B-cell/plasma-cell markers; clonality often polyclonal.",
  },
  {
    entity: "Polymorphic LPD in IDD",
    etiology:
      "Immune deficiency/dysregulation with frequent EBV-driven B-cell expansion.",
    lineage:
      "Polyclonal or oligoclonal B-cell proliferation; variable T-cell/plasma-cell admixture.",
    histology:
      "Polymorphous spectrum from small lymphocytes to immunoblasts, plasmablasts, and HRS-like cells; variable effacement.",
    ihc: "Variable CD20/PAX5/OCT2/BOB1, CD30, CD15, MUM1; EBER highlights variable cell populations.",
  },
  {
    entity: "EBV-positive mucocutaneous ulcer",
    etiology:
      "Localized EBV-driven proliferation in immunosenescence or iatrogenic/other immune suppression.",
    lineage: "EBV-infected mature B cells.",
    histology:
      "Circumscribed superficial ulcer with polymorphous infiltrate and scattered large immunoblasts/HRS-like cells.",
    ihc: "EBER+, CD20/PAX5 often+, CD30+, MUM1+; CD15 variable.",
  },
  {
    entity: "IDD-associated DLBCL",
    etiology:
      "Underlying HIV, transplantation, iatrogenic immunosuppression, IEI, or immunosenescence; EBV may be present.",
    lineage: "Mature B cell, often activated/post-germinal-center phenotype.",
    histology:
      "Diffuse destructive sheets of large centroblastic, immunoblastic, or plasmablastic cells.",
    ihc: "CD20/PAX5/CD79a usually retained; MUM1 and CD30 variable; EBER variable; LANA− unless HHV8-defined.",
  },
  {
    entity: "Inborn error of immunity-associated LPD/lymphoma",
    etiology:
      "Germline immune defect affecting immune surveillance, EBV control, or DNA repair.",
    lineage:
      "Variable B, T, or NK lineage, depending on the lesion and inherited defect.",
    histology:
      "Hyperplasia, polymorphic LPD, EBVMCU, DLBCL, CHL, BL, MZL, or rare T/NK lymphoma.",
    ihc: "Entity-specific; EBER and LANA as indicated; flow may reveal underlying immune phenotype.",
  },
  {
    entity: "Classic Hodgkin lymphoma",
    etiology:
      "Usually sporadic; EBV contributes in a subset, especially mixed-cellularity and lymphocyte-depleted forms; immune dysregulation increases risk.",
    lineage:
      "Germinal-center B cell with defective B-cell transcriptional program.",
    histology:
      "Sparse HRS cells in a rich inflammatory background; subtype-specific sclerosis or inflammatory composition.",
    ihc: "CD30+, weak PAX5+, CD15 often+, CD45−, MUM1+; CD20 variable/weak; OCT2/BOB1 reduced.",
  },
  {
    entity: "NLPHL",
    etiology:
      "Unknown; germinal-center selection and somatic hypermutation; EBV is not a significant driver.",
    lineage: "Germinal-center B cell.",
    histology:
      "Scattered LP/popcorn cells in nodules with mantle-zone B cells and FDC meshworks; variable A–F patterns.",
    ihc: "CD20/PAX5/OCT2/BOB1/BCL6+, CD10−, CD30−, CD15−; PD1+ TFH rosettes.",
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
    <section className="mt-4">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-indigo-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function SpecialLymphomasPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Burkitt Lymphoma (BL)",
    "Primary Effusion Lymphoma (PEL) and Extracavitary PEL",
    "Classic Hodgkin Lymphoma (CHL)",
    "Nodular Lymphocyte-Predominant Hodgkin Lymphoma (NLPHL)",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (
            e.name +
            " " +
            e.group +
            " " +
            e.clue +
            " " +
            e.summary +
            " " +
            e.clinical.join(" ") +
            " " +
            e.criteria.join(" ") +
            " " +
            e.histology.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.differential.map((d) => d.name + " " + d.distinction).join(" ") +
            " " +
            (e.molecular ?? []).join(" ")
          )
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
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-indigo-700">
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Selected Special Lymphomas and Lymphoproliferative Disorders
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference covering selected aggressive B-cell
          lymphomas, virus-associated lymphoid neoplasms, immune
          deficiency/dysregulation-associated proliferations, and Hodgkin
          lymphomas. Emphasis is placed on etiologic context, lineage, tissue
          architecture, defining immunophenotype, and the differential
          diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5">
        <h2 className="text-lg font-bold text-indigo-950">
          Diagnostic Approach
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the clinical setting",
              "Age, immune status, viral risk, anatomic distribution, and whether disease is effusion-based, ulcerative, nodal, or mass-forming are often decisive.",
            ],
            [
              "2. Identify lineage and differentiation",
              "Separate germinal-center B-cell, terminally differentiated B-cell, HRS-cell, and T/NK-cell phenotypes.",
            ],
            [
              "3. Assess architecture",
              "Determine whether the lesion is follicle-centered, destructive and sheet-forming, polymorphous, ulcer-limited, or associated with a serous effusion.",
            ],
            [
              "4. Perform virus-directed studies",
              "Use EBER for EBV and LANA for HHV8 when indicated; viral positivity must be localized to the atypical cells.",
            ],
            [
              "5. Apply entity-specific criteria",
              "Do not let a single marker override the combined morphology, immunophenotype, viral status, and clinical context.",
            ],
            [
              "6. Exclude overlapping entities",
              "The boundaries among HHV8-associated lesions and immune dysregulation-associated proliferations can overlap; adequate tissue and multidisciplinary correlation may be needed.",
            ],
          ].map(([h, t]) => (
            <li
              key={h}
              className="rounded-xl border border-indigo-100 bg-white p-3"
            >
              <div className="font-semibold text-slate-900">{h}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Core principle:</strong> For these entities, etiology and
          clinical setting are not optional annotations. They may be integral to
          the diagnosis, particularly for HHV8-associated and immune
          deficiency/dysregulation-associated lesions.
        </p>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-bold text-slate-900">
          Entity Overview: Etiology, Cell Lineage, Histology, and
          Immunophenotype
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-700">
                <th className="p-2">Entity</th>
                <th className="p-2">Etiology / Association</th>
                <th className="p-2">Cell Lineage</th>
                <th className="p-2">Key Histology</th>
                <th className="p-2">Core IHC Profile</th>
              </tr>
            </thead>
            <tbody>
              {overviewRows.map((r) => (
                <tr
                  key={r.entity}
                  className="border-b border-slate-100 align-top"
                >
                  <td className="p-2 font-semibold">{r.entity}</td>
                  <td className="p-2">{r.etiology}</td>
                  <td className="p-2">{r.lineage}</td>
                  <td className="p-2">{r.histology}</td>
                  <td className="p-2">{r.ihc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Entity-by-Entity Diagnostic Reference
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {filtered.length} of {entities.length} entities
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search entities, viruses, markers, morphology, or differentials..."
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm sm:w-80"
            />
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              {groups.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
            <button
              onClick={() =>
                setOpen(allOpen ? [] : filtered.map((e) => e.name))
              }
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {filtered.map((e) => {
            const isOpen = open.includes(e.name);
            return (
              <article
                key={e.name}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(e.name)}
                  className="flex w-full items-start justify-between gap-4 p-4 text-left hover:bg-slate-50"
                >
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                      {e.group}
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-slate-950">
                      {e.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {e.clue}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {e.summary}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-xl text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-4 pb-5">
                    <Section title="Clinical Profile">
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {e.clinical.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Essential Diagnostic Criteria">
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {e.criteria.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Histopathology">
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {e.histology.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Immunophenotype / IHC">
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {e.ihc.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    </Section>
                    <Section title="Differential Diagnosis">
                      <div className="space-y-2">
                        {e.differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg bg-slate-50 p-3 text-sm leading-6"
                          >
                            <strong className="text-slate-900">
                              {d.name}:
                            </strong>{" "}
                            <span className="text-slate-700">
                              {d.distinction}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Section>
                    {e.molecular && (
                      <Section title="Molecular Pathology">
                        <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                          {e.molecular.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    )}
                    {e.pitfalls && (
                      <Section title="Diagnostic Pitfalls">
                        <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                          {e.pitfalls.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                    )}
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No entities match the current search.
            </div>
          )}
        </div>
      </section>
      <footer className="mt-10 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
        Educational diagnostic reference. Interpret findings in the context of
        clinical presentation, tissue architecture, ancillary studies, and
        current classification criteria.
      </footer>
    </main>
  );
}
