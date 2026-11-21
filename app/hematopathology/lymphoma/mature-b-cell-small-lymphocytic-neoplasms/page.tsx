"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  location: string[];
  histology: string[];
  ihc: string[];
  differential: { name: string; distinction: string }[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Monoclonal B-Cell Lymphocytosis (MBL)",
    group: "Preneoplastic / Low-Burden Clonal Proliferations",
    clue: "A clonal peripheral-blood B-cell population below the CLL threshold, without lymphadenopathy, organomegaly, or another defining B-cell neoplasm.",
    summary:
      "An asymptomatic clonal B-cell expansion classified by phenotype and absolute clonal B-cell count.",
    clinical: [
      "Usually detected incidentally in older adults; median age for CLL/SLL-type MBL is approximately 70–75 years.",
      "No defining lymphadenopathy, organomegaly, or disease-related cytopenias attributable to another B-cell neoplasm.",
      "May be associated with impaired vaccine responses and increased infection risk.",
    ],
    criteria: [
      "Demonstrate a monoclonal B-cell population by light-chain restriction or another validated clonality method.",
      "Total peripheral-blood B-cell count is <5 × 10⁹/L.",
      "No lymphadenopathy, organomegaly, or clinical/pathologic feature diagnostic of another B-cell lymphoproliferative disorder.",
      "Low-count MBL: CLL/SLL-phenotype clonal B cells <0.5 × 10⁹/L.",
      "CLL/SLL-type MBL: CLL/SLL-phenotype clonal B cells ≥0.5 × 10⁹/L, with total B cells <5 × 10⁹/L.",
      "Non-CLL/SLL-type MBL: clonal B cells with a non-CLL/SLL phenotype and no criteria for another mature B-cell neoplasm.",
    ],
    location: [
      "Peripheral blood; low-level involvement may also be detected in bone marrow or secondary lymphoid tissue.",
      "In tissue-based CLL/SLL-type MBL, lymph nodes remain small (<15 mm) with preserved architecture and residual reactive follicles; proliferation centers are absent.",
    ],
    histology: [
      "CLL/SLL-type cells resemble small mature lymphocytes with clumped chromatin and scant cytoplasm.",
      "Non-CLL/SLL-type cells are often centrocyte-like and may resemble marginal zone cells.",
      "If incidentally sampled, focal/interstitial aggregates may be present in marrow; nodal infiltrates may be interfollicular, perifollicular, intrasinusoidal, or follicular-colonizing.",
    ],
    ihc: [
      "CLL/SLL-type: CD5+, CD23+, CD200+, ROR1+, LEF1+; CD20 and surface immunoglobulin are dim; CD10−.",
      "Non-CLL/SLL-type: often CD5−/CD10− with a marginal zone- or lymphoplasmacytic-like phenotype; compare antigen intensity and light-chain expression with residual normal B cells.",
      "Flow cytometry is central; no tissue IHC panel alone establishes MBL without the required clinical blood-count context.",
    ],
    differential: [
      {
        name: "CLL/SLL",
        distinction:
          "CLL requires ≥5 × 10⁹/L clonal B cells in blood; SLL requires tissue involvement with lymphadenopathy or organ enlargement and <5 × 10⁹/L circulating clonal B cells.",
      },
      {
        name: "Other small B-cell lymphomas",
        distinction:
          "A non-CLL/SLL phenotype, atypical morphology, tissue mass, splenomegaly, or disease-specific genetic/IHC findings should prompt a full lymphoma workup.",
      },
      {
        name: "Tissue-based MBL versus SLL",
        distinction:
          "Preserved nodal architecture, small nodes (<15 mm), and absence of proliferation centers favor tissue-based MBL.",
      },
    ],
    molecular: [
      "No defining molecular abnormality. del(13q14) may occur in CLL/SLL-type MBL; MYD88 mutations may occur in non-CLL/SLL-type MBL.",
      "Molecular findings overlap with established neoplasms and do not replace the clinical and quantitative criteria.",
    ],
    pitfalls: [
      "Do not diagnose CLL/SLL from marrow involvement percentage alone.",
      "Atypical CLL-like flow findings (bright CD20, CD79b, CD81, or surface Ig; absent CD200/ROR1) warrant exclusion of another small B-cell lymphoma.",
    ],
  },
  {
    name: "Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma (CLL/SLL)",
    group: "Small B-Cell Lymphomas",
    clue: "Small mature B cells with clumped chromatin, characteristic proliferation centers, and a CD5+/CD23+/LEF1+ phenotype.",
    summary:
      "CLL and SLL are the blood-predominant and tissue-predominant presentations of the same mature B-cell neoplasm.",
    clinical: [
      "Typically older adults (median age around 70 years in many Western cohorts); male predominance.",
      "Often incidental lymphocytosis, generalized lymphadenopathy, or splenomegaly.",
      "May cause cytopenias, recurrent infections, autoimmune hemolytic anemia/thrombocytopenia, and hypogammaglobulinemia.",
      "Rapid asymmetric nodal growth, new extranodal masses, or worsening B symptoms raise concern for Richter transformation.",
    ],
    criteria: [
      "CLL: ≥5 × 10⁹/L clonal B cells in peripheral blood, with compatible morphology and immunophenotype.",
      "SLL: tissue-based disease with lymphadenopathy/organ enlargement and <5 × 10⁹/L circulating clonal B cells.",
      "Typical cells are small mature B lymphocytes; tissue involvement commonly contains pale proliferation centers with prolymphocytes and paraimmunoblasts.",
      "Typical phenotype: CD5+, CD23+, CD200+, ROR1+, LEF1+; CD20, CD79b, and surface immunoglobulin are dim.",
      "Exclude mantle cell lymphoma and other small B-cell lymphomas when the phenotype is atypical.",
    ],
    location: [
      "Peripheral blood, bone marrow, lymph nodes, spleen, and tonsils.",
      "Less commonly liver, skin, CNS, kidney, pleura, bone, lung, salivary/lacrimal glands, and gastrointestinal mucosa.",
    ],
    histology: [
      "Blood/marrow: small lymphocytes with clumped or soccer-ball chromatin, scant pale cytoplasm, inconspicuous nucleoli, and frequent smudge cells in blood smears.",
      "Lymph node: diffuse or partially effacing infiltrate of small lymphocytes with pale proliferation centers containing prolymphocytes and paraimmunoblasts.",
      "Spleen: prominent white-pulp involvement; red-pulp infiltration may occur, with loss of white/red-pulp distinction in advanced disease.",
      "Marrow: nodular, interstitial, or diffuse patterns; diffuse replacement is associated with advanced disease and marrow failure.",
      "Histologically aggressive CLL/SLL: very large/confluent proliferation centers (>20× field) or >2.4 mitoses per proliferation center or >40% Ki-67 in proliferation centers.",
      "Prolymphocytic progression: >15% prolymphocytes among peripheral-blood lymphocytes.",
    ],
    ihc: [
      "Pan-B-cell markers: CD20 (usually dim), PAX5, CD79a, CD19.",
      "Characteristic: CD5+, CD23+, CD43+, CD200+, ROR1+, LEF1+ (LEF1 in approximately 95%); CD10−, cyclin D1−, SOX11−.",
      "Proliferation centers show increased Ki-67 and often stronger CD20, CD23, MUM1, and MYC than the background.",
      "CD38 and CD49d expression may carry adverse prognostic significance; use flow cytometry for antigen intensity and the full diagnostic pattern.",
    ],
    differential: [
      {
        name: "Mantle cell lymphoma",
        distinction:
          "Usually cyclin D1+/SOX11+ with CCND1 rearrangement; CD23 and CD200 are usually absent or weaker, and surface Ig/CD20 are brighter. LEF1 strongly favors CLL/SLL.",
      },
      {
        name: "Marginal zone lymphoma",
        distinction:
          "Usually CD5−/CD23−/LEF1− with brighter CD20 and surface Ig; assess splenic/nodal architecture and plasmacytic differentiation.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "Plasmacytoid cells and plasma cells, serum IgM paraprotein, and MYD88 L265P support LPL; CLL/SLL has proliferation centers and the characteristic CD5/CD23/LEF1 profile.",
      },
      {
        name: "Follicular lymphoma",
        distinction:
          "CD10/BCL6/BCL2-positive neoplastic follicles and IGH::BCL2 support FL; CLL/SLL lacks a germinal-center phenotype.",
      },
      {
        name: "Richter transformation",
        distinction:
          "Sheets of large cells establish DLBCL-type transformation; compare IG rearrangements with the antecedent CLL clone to determine clonal relationship.",
      },
      {
        name: "Histologically aggressive CLL/SLL",
        distinction:
          "Large/confluent proliferation centers and increased proliferation remain within the CLL/SLL pattern; do not equate this with sheets of large-cell lymphoma.",
      },
    ],
    molecular: [
      "Common FISH abnormalities: del(13q14), del(11q/ATM), del(17p/TP53), and trisomy 12.",
      "Assess TP53 deletion and mutation before treatment and again at progression; IGHV mutation status is a major prognostic/predictive variable.",
      "Other recurrent mutations include NOTCH1, ATM, SF3B1, and BIRC3.",
      "Richter transformation may acquire TP53, NOTCH1, MYC, and CDKN2A abnormalities; compare IG clonality when clinically relevant.",
    ],
    pitfalls: [
      "Scattered cyclin D1-positive cells in proliferation centers do not establish MCL; diffuse tumor-cell cyclin D1 expression is not typical of CLL/SLL.",
      "Proliferation-center size and Ki-67 must be interpreted separately from overt large-cell transformation.",
    ],
  },
  {
    name: "Hairy Cell Leukemia (HCL)",
    group: "Splenic / Villous Small B-Cell Neoplasms",
    clue: "Circumferentially hairy cytoplasmic projections, marrow fibrosis with a dry tap, splenic red-pulp involvement, and annexin A1/CD103/CD25/CD123 positivity.",
    summary:
      "A mature B-cell neoplasm with characteristic splenic, marrow, and blood involvement, usually driven by BRAF V600E.",
    clinical: [
      "Usually middle-aged to older adults; strong male predominance.",
      "Presents with pancytopenia, monocytopenia, splenomegaly, and infections; lymphadenopathy is uncommon.",
      "Bone marrow aspiration may yield a dry tap because of reticulin fibrosis.",
    ],
    criteria: [
      "Identify characteristic hairy cells in blood or marrow, often with oval/reniform nuclei and abundant pale cytoplasm with fine projections.",
      "Demonstrate a compatible B-cell phenotype with CD11c, CD25, CD103, CD123, annexin A1, and usually BRAF VE1 positivity.",
      "Correlate with splenic red-pulp and marrow involvement; distinguish classic HCL from HCL variant/splenic B-cell lymphoma with prominent nucleoli.",
    ],
    location: [
      "Spleen (red pulp), bone marrow, and peripheral blood.",
      "Lymph nodes are uncommon at presentation; liver involvement may occur.",
    ],
    histology: [
      "Blood: widely spaced cells with abundant pale cytoplasm and circumferential cytoplasmic projections.",
      "Marrow: interstitial/diffuse infiltrate of widely spaced cells with abundant clear cytoplasm; reticulin fibrosis is prominent.",
      "Spleen: red-pulp expansion with atrophy/effacement of white pulp.",
    ],
    ihc: [
      "CD20, PAX5, DBA.44, annexin A1, CD11c, CD25, CD103, CD123, and cyclin D1 are typically positive.",
      "BRAF VE1 is usually positive in classic HCL; CD5, CD10, and CD23 are usually negative.",
      "TRAP is historically useful but less specific than the contemporary marker combination.",
    ],
    differential: [
      {
        name: "Splenic B-cell lymphoma/leukemia with prominent nucleoli",
        distinction:
          "Prominent nucleoli, absent CD25/annexin A1, and usually absent BRAF V600E favor the prominent-nucleoli category.",
      },
      {
        name: "Splenic diffuse red pulp small B-cell lymphoma",
        distinction:
          "Usually lacks the classic HCL phenotype (CD25, CD103, CD123, annexin A1, BRAF V600E) and shows a red-pulp sinusoidal/nodular pattern.",
      },
      {
        name: "Splenic marginal zone lymphoma",
        distinction:
          "White-pulp nodules with marginal-zone differentiation and villous blood cells; usually CD5−/CD10− and annexin A1−.",
      },
      {
        name: "HCL variant",
        distinction:
          "Often has prominent nucleoli, leukocytosis rather than monocytopenic pancytopenia, and lacks CD25, CD123, annexin A1, and BRAF V600E.",
      },
    ],
    molecular: [
      "BRAF V600E is present in the great majority of classic HCL and is diagnostically useful.",
      "MAP2K1 alterations are more characteristic of HCL variant and related splenic B-cell neoplasms.",
    ],
    pitfalls: [
      "Do not use CD103 alone to diagnose HCL; integrate morphology, the full flow/IHC phenotype, and BRAF status.",
    ],
  },
  {
    name: "Splenic Marginal Zone Lymphoma (SMZL)",
    group: "Splenic / Villous Small B-Cell Neoplasms",
    clue: "Splenic white-pulp nodules with a biphasic marginal-zone pattern, red-pulp extension, and circulating villous lymphocytes.",
    summary:
      "An indolent small B-cell lymphoma centered in splenic white pulp, often involving blood and marrow.",
    clinical: [
      "Usually older adults; slight female or no consistent sex predominance depending on cohort.",
      "Splenomegaly and lymphocytosis are common; peripheral lymphadenopathy is usually absent.",
      "May be associated with autoimmune phenomena and hepatitis C infection in a subset.",
    ],
    criteria: [
      "A splenic-centered small B-cell lymphoma with white-pulp nodules and marginal-zone differentiation is characteristic.",
      "Show a compatible mature B-cell phenotype, typically CD20 bright and negative for CD5, CD10, cyclin D1, and annexin A1.",
      "Integrate blood/marrow findings and exclude other splenic B-cell neoplasms; splenic histology is particularly helpful when available.",
    ],
    location: [
      "Spleen, bone marrow, and peripheral blood; liver may be involved.",
      "Peripheral lymphadenopathy is uncommon; hilar nodes may be involved.",
    ],
    histology: [
      "White pulp contains expanded nodules with a central small-lymphocyte zone and peripheral pale marginal-zone cells; a biphasic appearance may be conspicuous.",
      "Marginal-zone cells have abundant pale cytoplasm and irregular nuclei; plasmacytic differentiation may occur.",
      "Red-pulp cords and sinuses are often involved; blood may show villous lymphocytes with polar cytoplasmic projections.",
      "Marrow involvement is commonly nodular, interstitial, or intrasinusoidal.",
    ],
    ihc: [
      "CD20, PAX5, and surface IgM are positive, often bright; IgD may highlight residual mantle zones.",
      "Usually CD5−, CD10−, BCL6−, cyclin D1−, SOX11−, annexin A1−, and CD103−.",
      "CD23 may highlight follicular dendritic cell meshworks; CD43 and CD11c are variable.",
      "Plasma cells, when present, are light-chain restricted.",
    ],
    differential: [
      {
        name: "Splenic diffuse red pulp small B-cell lymphoma",
        distinction:
          "SDRPL shows diffuse red-pulp expansion without the characteristic biphasic white-pulp nodules of SMZL.",
      },
      {
        name: "Hairy cell leukemia",
        distinction:
          "HCL has annexin A1, CD25, CD103, CD123, and BRAF V600E; SMZL generally lacks this combination.",
      },
      {
        name: "Mantle cell lymphoma",
        distinction:
          "MCL is usually cyclin D1+/SOX11+ and often CD5+; demonstrate or exclude CCND1 rearrangement.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "LPL has a more conspicuous lymphoplasmacytic component and often MYD88 L265P with serum IgM paraprotein.",
      },
      {
        name: "Nodal/extranodal marginal zone lymphoma",
        distinction:
          "Use the dominant anatomic distribution and site-specific architecture; SMZL is spleen-centered.",
      },
    ],
    molecular: [
      "No single defining genetic alteration. del(7q), NOTCH2, and KLF2 mutations are recurrent and may support the diagnosis in context.",
      "MYD88 L265P is uncommon; its presence should prompt careful consideration of LPL.",
    ],
    pitfalls: [
      "Villous lymphocytes are not specific for SMZL.",
      "A splenic biopsy is not routinely required; diagnosis is often based on blood, marrow, imaging, and clinical distribution.",
    ],
  },
  {
    name: "Splenic Diffuse Red Pulp Small B-Cell Lymphoma (SDRPL)",
    group: "Splenic / Villous Small B-Cell Neoplasms",
    clue: "Diffuse red-pulp infiltration by small B cells with little or no white-pulp involvement and a usually CD5−/CD10−/CD23− phenotype.",
    summary:
      "An indolent splenic B-cell lymphoma characterized by diffuse red-pulp growth.",
    clinical: [
      "Usually middle-aged or older adults, with male predominance in many series.",
      "Presents with splenomegaly and often lymphocytosis; peripheral lymphadenopathy is uncommon.",
      "Cytopenias may occur with extensive splenic or marrow involvement.",
    ],
    criteria: [
      "Demonstrate diffuse red-pulp infiltration by a clonal small B-cell population, ideally in splenic tissue.",
      "Exclude SMZL, HCL, HCL variant/prominent-nucleoli splenic lymphoma, and leukemic non-nodal MCL.",
      "Use morphology, flow/IHC, and clinical distribution together; no single marker is defining.",
    ],
    location: [
      "Spleen (red pulp), peripheral blood, and bone marrow.",
      "Lymph nodes are generally not a dominant site.",
    ],
    histology: [
      "Spleen shows diffuse expansion of red-pulp cords and sinuses with effacement of normal architecture.",
      "Cells are small to medium-sized with round to irregular nuclei and pale cytoplasm; villous forms may be present in blood.",
      "White-pulp follicles are atrophic or inconspicuous rather than expanded into marginal-zone nodules.",
      "Marrow involvement is variable and may be interstitial or intrasinusoidal.",
    ],
    ihc: [
      "CD20 and PAX5 positive; surface IgM often positive.",
      "Usually CD5−, CD10−, CD23−, cyclin D1−, SOX11−, annexin A1−, CD25−, and CD103−.",
      "CD11c and DBA.44 may be variable; CD123 is generally negative.",
      "Ki-67 is usually low.",
    ],
    differential: [
      {
        name: "Splenic marginal zone lymphoma",
        distinction:
          "SMZL has expanded white-pulp nodules with marginal-zone differentiation; SDRPL is predominantly diffuse red-pulp disease.",
      },
      {
        name: "Hairy cell leukemia",
        distinction:
          "Classic HCL is annexin A1+/CD25+/CD103+/CD123+ and usually BRAF V600E+.",
      },
      {
        name: "Splenic B-cell lymphoma/leukemia with prominent nucleoli",
        distinction:
          "Prominent nucleoli and a more proliferative phenotype favor the prominent-nucleoli category.",
      },
      {
        name: "Leukemic non-nodal mantle cell lymphoma",
        distinction:
          "Cyclin D1 and CCND1 rearrangement support MCL; SOX11 is often absent in non-nodal MCL, so clinical pattern and genetics are essential.",
      },
    ],
    molecular: [
      "No single defining molecular alteration. Recurrent CCND3 and BCOR alterations have been reported in subsets.",
      "BRAF V600E argues against SDRPL and supports classic HCL.",
    ],
    pitfalls: [
      "The distinction from SMZL may be difficult without splenic tissue; avoid overcalling based on blood morphology alone.",
    ],
  },
  {
    name: "Splenic B-Cell Lymphoma/Leukemia with Prominent Nucleoli",
    group: "Splenic / Villous Small B-Cell Neoplasms",
    clue: "Splenic and blood-predominant B-cell neoplasm with conspicuous nucleoli, often lacking the classic HCL markers.",
    summary:
      "A splenic B-cell neoplasm category encompassing cases historically classified as hairy cell leukemia variant and related entities.",
    clinical: [
      "Usually older adults, often with male predominance.",
      "Splenomegaly and leukocytosis/lymphocytosis are common; cytopenias may occur.",
      "Peripheral lymphadenopathy is usually absent or limited.",
    ],
    criteria: [
      "Identify a splenic-centered clonal B-cell neoplasm with prominent nucleoli in circulating or tissue cells.",
      "Exclude classic HCL by the absence of its characteristic annexin A1/CD25/CD123/BRAF V600E profile.",
      "Classify using the integrated morphology, immunophenotype, and molecular findings; the category is biologically heterogeneous.",
    ],
    location: [
      "Spleen, peripheral blood, and bone marrow; lymph nodes are usually not prominent.",
    ],
    histology: [
      "Blood and tissue cells are medium-sized with abundant cytoplasm and conspicuous central nucleoli.",
      "Splenic involvement is commonly red-pulp predominant, with variable nodular or diffuse patterns.",
      "Marrow involvement may be interstitial or intrasinusoidal; fibrosis is less characteristic than in classic HCL.",
    ],
    ihc: [
      "Mature B-cell markers CD20/PAX5 positive; CD11c may be positive.",
      "CD25, annexin A1, CD123, and CD200 are usually negative or less consistently expressed than in classic HCL.",
      "CD103 is variable; cyclin D3 may be expressed in a subset.",
      "BRAF VE1 is generally negative in HCL-variant-like cases.",
    ],
    differential: [
      {
        name: "Classic hairy cell leukemia",
        distinction:
          "Classic HCL has inconspicuous nucleoli, monocytopenia, marrow fibrosis, and the CD25+/CD103+/CD123+/annexin A1+/BRAF V600E+ phenotype.",
      },
      {
        name: "SDRPL",
        distinction:
          "SDRPL generally has smaller cells with inconspicuous nucleoli and low proliferation; prominent nucleoli favor this category.",
      },
      {
        name: "SMZL",
        distinction:
          "SMZL shows white-pulp marginal-zone nodules and often villous lymphocytes with polar projections.",
      },
      {
        name: "Leukemic non-nodal MCL",
        distinction:
          "Cyclin D1/CCND1 rearrangement establishes MCL in the appropriate setting.",
      },
    ],
    molecular: [
      "BRAF V600E is usually absent in HCL-variant-like cases; MAP2K1 mutations occur in a subset.",
      "TP53 alterations may occur and can be associated with more aggressive behavior.",
    ],
    pitfalls: [
      "Do not retain the historical diagnosis of HCL variant without considering the current splenic B-cell lymphoma/leukemia with prominent nucleoli category.",
    ],
  },
  {
    name: "Lymphoplasmacytic Lymphoma (LPL)",
    group: "Small B-Cell Lymphomas with Plasmacytic Differentiation",
    clue: "A marrow-based small B-cell neoplasm with plasmacytoid lymphocytes and plasma cells, often associated with an IgM paraprotein (Waldenström macroglobulinemia).",
    summary:
      "A mature B-cell neoplasm composed of small B lymphocytes, plasmacytoid lymphocytes, and plasma cells without criteria for another defined lymphoma.",
    clinical: [
      "Usually older adults; slight male predominance.",
      "Commonly presents with marrow involvement and IgM monoclonal gammopathy; hyperviscosity, neuropathy, cryoglobulinemia, or cold agglutinin symptoms may occur.",
      "Waldenström macroglobulinemia denotes LPL with serum IgM monoclonal gammopathy.",
    ],
    criteria: [
      "Demonstrate marrow infiltration by a clonal lymphoplasmacytic population.",
      "Show variable proportions of small lymphocytes, plasmacytoid lymphocytes, and plasma cells.",
      "Exclude other small B-cell lymphomas with plasmacytic differentiation, especially MZL and CLL/SLL.",
      "MYD88 L265P strongly supports LPL in the appropriate clinicopathologic setting but is not absolutely specific.",
    ],
    location: [
      "Bone marrow is the dominant site; peripheral blood and spleen may be involved.",
      "Lymph nodes and other extranodal sites may be involved, usually in disseminated disease.",
    ],
    histology: [
      "Marrow infiltrate is interstitial, nodular, or diffuse and contains small lymphocytes, plasmacytoid lymphocytes, and mature plasma cells.",
      "Mast cells may be increased; Dutcher bodies and Russell bodies may be present.",
      "Paratrabecular aggregates are not a defining pattern; amyloid deposition may occur in some cases.",
    ],
    ihc: [
      "B cells express CD20, PAX5, and CD79a; usually CD5−, CD10−, CD23−, cyclin D1−, and CD103−.",
      "Plasma cells express CD138 and/or CD38 and show light-chain restriction; CD20 may be retained in a subset.",
      "IgM is common; IgD may be variable. MYD88 L265P can be assessed by mutation-specific IHC or molecular testing.",
      "CD25 and CD200 may be variable; correlate with the full phenotype.",
    ],
    differential: [
      {
        name: "Marginal zone lymphoma with plasmacytic differentiation",
        distinction:
          "MZL is supported by splenic, nodal, or extranodal site-specific architecture; MYD88 L265P is less frequent than in LPL.",
      },
      {
        name: "CLL/SLL with plasmacytic differentiation",
        distinction:
          "CLL/SLL has CD5/CD23/LEF1 expression and characteristic proliferation centers; plasmacytic differentiation is usually limited.",
      },
      {
        name: "Plasma cell neoplasm",
        distinction:
          "A plasma-cell-predominant infiltrate with little or no clonal small B-cell component favors plasma cell myeloma; assess myeloma-defining features and paraprotein type.",
      },
      {
        name: "Follicular lymphoma",
        distinction:
          "FL has a germinal-center phenotype and follicular architecture; plasmacytic differentiation is uncommon.",
      },
    ],
    molecular: [
      "MYD88 L265P occurs in the great majority of LPL and is a key supportive finding.",
      "CXCR4 mutations occur in a subset and may influence clinical behavior and response to BTK inhibition.",
      "MYD88 wild-type cases require especially careful exclusion of other small B-cell lymphomas.",
    ],
    pitfalls: [
      "IgM paraprotein alone does not establish LPL/Waldenström macroglobulinemia.",
      "MYD88 L265P is not entirely specific and may occur in other B-cell neoplasms.",
    ],
  },
  {
    name: "Extranodal Marginal Zone Lymphoma of Mucosa-Associated Lymphoid Tissue (MALT Lymphoma)",
    group: "Marginal Zone Lymphomas",
    clue: "A localized extranodal small B-cell lymphoma with lymphoepithelial lesions and marginal-zone/plasmacytic differentiation.",
    summary:
      "An indolent lymphoma arising in acquired or native mucosa-associated lymphoid tissue.",
    clinical: [
      "Usually middle-aged to older adults; often female in some organ-specific cohorts.",
      "Common sites include stomach, salivary gland, ocular adnexa, lung, thyroid, skin, and other mucosal sites.",
      "May be associated with chronic infection or autoimmune disease, depending on site.",
    ],
    criteria: [
      "Show a clonal marginal-zone B-cell infiltrate in an extranodal site.",
      "Look for marginal-zone cells, follicular colonization, plasmacytic differentiation, and/or lymphoepithelial lesions.",
      "Correlate with organ-specific clinical setting and exclude secondary involvement by another lymphoma.",
    ],
    location: [
      "Stomach, salivary glands, ocular adnexa, lung, thyroid, skin, breast, and other extranodal mucosal sites.",
    ],
    histology: [
      "Small centrocyte-like, monocytoid, or marginal-zone cells expand around reactive follicles and may colonize germinal centers.",
      "Lymphoepithelial lesions are characteristic in epithelial organs but are not required and are not entirely specific.",
      "Plasmacytic differentiation is common and may be prominent; amyloid deposition can occur.",
      "Reactive follicles and follicular dendritic cell networks may be entrapped or colonized.",
    ],
    ihc: [
      "CD20, PAX5, and CD79a positive; usually CD5−, CD10−, BCL6−, cyclin D1−, and SOX11−.",
      "CD43 coexpression may occur; CD21/CD23 highlight residual or disrupted follicular dendritic cell networks.",
      "Plasma cells are CD138+ with light-chain restriction; IgM is common.",
      "CD5 or CD10 expression is unusual and should trigger reconsideration or exclusion of another lymphoma.",
    ],
    differential: [
      {
        name: "Reactive lymphoid hyperplasia",
        distinction:
          "Polymorphous reactive population, preserved architecture, polytypic plasma cells, and absence of destructive lymphoepithelial lesions favor a reactive process.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "LPL is usually marrow-centered and often MYD88 L265P+ with IgM paraprotein; MALT lymphoma is defined by extranodal site-specific architecture.",
      },
      {
        name: "Follicular lymphoma",
        distinction:
          "FL expresses CD10/BCL6 and often BCL2 in neoplastic follicles; MALT lymphoma is typically CD10−/BCL6− with marginal-zone differentiation.",
      },
      {
        name: "CLL/SLL",
        distinction:
          "CLL/SLL is CD5+/CD23+/LEF1+ and shows proliferation centers.",
      },
      {
        name: "Mantle cell lymphoma",
        distinction:
          "MCL is usually cyclin D1+/SOX11+ and often CD5+; exclude with cyclin D1/SOX11 and CCND1 testing as appropriate.",
      },
    ],
    molecular: [
      "Recurrent alterations include BIRC3::MALT1, IGH::MALT1, BCL10 rearrangements, and other NF-κB pathway lesions, varying by site.",
      "API2::MALT1 (BIRC3::MALT1) is particularly associated with gastric MALT lymphoma and may predict less likelihood of regression after Helicobacter pylori eradication.",
      "Site-specific microbial associations include H. pylori (stomach), Chlamydia psittaci (ocular adnexa in some regions), and Borrelia burgdorferi (skin in selected geographic settings).",
    ],
    pitfalls: [
      "Lymphoepithelial lesions support but do not independently establish MALT lymphoma.",
      "A clonal B-cell population can occur in chronic inflammation; integrate cytology, architecture, and clinical setting.",
    ],
  },
  {
    name: "Primary Cutaneous Marginal Zone Lymphoma (PCMZL)",
    group: "Marginal Zone Lymphomas",
    clue: "A primary skin-based marginal-zone proliferation with reactive T-cell-rich background and often prominent plasmacytic differentiation.",
    summary:
      "An indolent primary cutaneous B-cell lymphoma with excellent disease-specific survival.",
    clinical: [
      "Adults, often middle-aged; slight male predominance in some cohorts.",
      "Usually presents as solitary or multiple red-to-violaceous papules, plaques, or nodules on trunk or arms.",
      "Systemic symptoms and extracutaneous disease are uncommon at presentation.",
    ],
    criteria: [
      "Establish that disease is primary cutaneous by clinical staging and absence of extracutaneous lymphoma.",
      "Identify a dermal/subcutaneous marginal-zone B-cell proliferation, often with plasmacytic differentiation and reactive T cells.",
      "Assess class-switch phenotype and exclude secondary skin involvement by systemic MZL or another lymphoma.",
    ],
    location: [
      "Dermis and subcutis, commonly trunk and upper extremities; head/neck may also be involved.",
    ],
    histology: [
      "Nodular or diffuse dermal infiltrate with small lymphocytes, marginal-zone cells, lymphoplasmacytoid cells, and plasma cells.",
      "Reactive T cells may be abundant and may rim B-cell aggregates.",
      "Reactive germinal centers may be present; grenz zone may separate infiltrate from epidermis.",
      "Class-switched cases often show prominent plasmacytic differentiation.",
    ],
    ihc: [
      "Neoplastic B cells express CD20, PAX5, and CD79a; usually CD5−, CD10−, BCL6−, cyclin D1−, and SOX11−.",
      "Plasma cells are CD138+ and light-chain restricted; class-switched cases often express IgG/IgA rather than IgM.",
      "BCL2 may be positive in marginal-zone cells but is not specific; CD21/CD23 highlight reactive follicular dendritic networks.",
    ],
    differential: [
      {
        name: "Primary cutaneous follicle center lymphoma",
        distinction:
          "PCFCL has follicle-center cells, often BCL6+/CD10 variable, and lacks the characteristic plasmacytic/marginal-zone pattern.",
      },
      {
        name: "Secondary cutaneous involvement by systemic MZL",
        distinction:
          "Clinical staging and systemic distribution distinguish primary cutaneous disease from secondary skin involvement.",
      },
      {
        name: "Cutaneous lymphoid hyperplasia",
        distinction:
          "Reactive lesions are generally polymorphous and polytypic; assess light-chain restriction, clonal population, and architecture.",
      },
      {
        name: "Primary cutaneous diffuse large B-cell lymphoma, leg type",
        distinction:
          "Leg-type lymphoma shows sheets of large cells, strong BCL2/MUM1, and an aggressive clinical course.",
      },
    ],
    molecular: [
      "No single defining genetic alteration. TNFRSF14 and other mutations may occur but are not required for diagnosis.",
      "Class-switched and IgM-positive cases have differing biologic profiles; use phenotype as supportive classification rather than a stand-alone molecular surrogate.",
    ],
    pitfalls: [
      "Do not diagnose primary cutaneous disease without appropriate clinical staging.",
      "A prominent reactive T-cell background does not exclude a clonal B-cell neoplasm.",
    ],
  },
  {
    name: "Nodal Marginal Zone Lymphoma (NMZL)",
    group: "Marginal Zone Lymphomas",
    clue: "A primary nodal marginal-zone B-cell lymphoma with marginal-zone, monocytoid, or follicular-colonization patterns.",
    summary:
      "An uncommon nodal small B-cell lymphoma diagnosed after excluding secondary involvement by splenic or extranodal MZL.",
    clinical: [
      "Usually older adults; no consistent sex predominance.",
      "Presents with peripheral or generalized lymphadenopathy; splenic and extranodal disease may occur but should not dominate the presentation.",
      "Often indolent, although clinical behavior is heterogeneous.",
    ],
    criteria: [
      "Demonstrate a clonal nodal B-cell lymphoma with marginal-zone differentiation.",
      "Exclude nodal involvement by SMZL, extranodal MALT lymphoma, and other small B-cell lymphomas.",
      "Use morphology and immunophenotype; no single marker is specific for NMZL.",
    ],
    location: [
      "Lymph nodes; spleen, marrow, and extranodal sites may be involved secondarily.",
    ],
    histology: [
      "Partial or complete architectural effacement by nodular, perifollicular, interfollicular, or diffuse growth.",
      "Marginal-zone/monocytoid cells have abundant pale cytoplasm and irregular nuclei.",
      "Follicular colonization may produce residual germinal centers surrounded or replaced by marginal-zone cells.",
      "Plasmacytic differentiation is variable; large-cell transformation is diagnosed when confluent sheets of large cells develop.",
    ],
    ihc: [
      "CD20, PAX5, and CD79a positive; usually CD5−, CD10−, BCL6−, cyclin D1−, and SOX11−.",
      "BCL2 is often positive in neoplastic B cells; CD21/CD23 may show disrupted follicular dendritic cell networks.",
      "CD43 may be aberrantly coexpressed; plasma cells may be light-chain restricted.",
    ],
    differential: [
      {
        name: "SMZL",
        distinction:
          "A dominant splenic presentation, villous lymphocytes, and characteristic splenic white-pulp pattern favor SMZL.",
      },
      {
        name: "MALT lymphoma",
        distinction:
          "A dominant extranodal mucosal/organ site with lymphoepithelial lesions favors extranodal MZL.",
      },
      {
        name: "Follicular lymphoma",
        distinction:
          "FL has a germinal-center phenotype (CD10/BCL6) and neoplastic follicular architecture; NMZL may colonize reactive follicles but is usually CD10−/BCL6−.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "Marrow-centered lymphoplasmacytic disease, IgM paraprotein, and MYD88 L265P favor LPL.",
      },
      {
        name: "CLL/SLL",
        distinction:
          "CD5+/CD23+/LEF1+ phenotype and proliferation centers favor CLL/SLL.",
      },
    ],
    molecular: [
      "No defining molecular alteration. KLF2, NOTCH2, and other mutations may be seen but overlap with other MZL subtypes.",
      "MYD88 L265P is uncommon and should prompt consideration of LPL when present.",
    ],
    pitfalls: [
      "NMZL is a diagnosis of exclusion; carefully document the absence of a dominant splenic or extranodal primary site.",
    ],
  },
  {
    name: "Paediatric Nodal Marginal Zone Lymphoma",
    group: "Marginal Zone Lymphomas",
    clue: "A localized head-and-neck nodal proliferation in a child/adolescent with prominent reactive germinal centers and marginal-zone expansion.",
    summary:
      "A rare indolent pediatric nodal lymphoma with distinctive morphology and excellent outcome.",
    clinical: [
      "Predominantly children and adolescents, with a strong male predominance.",
      "Usually presents as localized cervical or head-and-neck lymphadenopathy.",
      "Systemic symptoms are uncommon; outcome is generally excellent.",
    ],
    criteria: [
      "A nodal marginal-zone proliferation in a child/adolescent with compatible architecture and cytology.",
      "Prominent reactive germinal centers with expanded marginal zones and follicular colonization may be present.",
      "Exclude reactive hyperplasia and pediatric-type follicular lymphoma.",
    ],
    location: [
      "Usually cervical and other head-and-neck lymph nodes; often localized.",
    ],
    histology: [
      "Partially effaced node with expanded marginal zones surrounding reactive germinal centers.",
      "Marginal-zone cells are monocytoid with pale cytoplasm; follicular colonization may occur.",
      "Reactive follicles may show polarized germinal centers and tingible-body macrophages.",
      "Large cells may be scattered, but confluent sheets of large cells are not typical.",
    ],
    ihc: [
      "B cells express CD20 and PAX5; marginal-zone cells are usually CD10− and BCL6−.",
      "Reactive germinal centers retain CD10/BCL6 and BCL2 negativity.",
      "Light-chain restriction may be subtle; assess with flow cytometry and/or plasma-cell markers.",
    ],
    differential: [
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive nodes preserve overall architecture and show polytypic plasma cells without convincing clonal marginal-zone expansion.",
      },
      {
        name: "Paediatric-type follicular lymphoma",
        distinction:
          "PTFL is a follicle-center neoplasm with expansile follicles, strong BCL6/CD10, and usually BCL2 negativity.",
      },
      {
        name: "Adult-type nodal MZL",
        distinction:
          "Age, localized pediatric presentation, and characteristic reactive germinal centers favor the pediatric entity.",
      },
    ],
    molecular: [
      "No recurrent defining genetic abnormality; molecular studies are not routinely required for classic cases.",
    ],
    pitfalls: [
      "Do not interpret reactive germinal-center staining as neoplastic follicle-center differentiation; assess the expanded marginal-zone component.",
    ],
  },
  {
    name: "In Situ Follicular B-Cell Neoplasm (ISFN)",
    group: "Follicular B-Cell Neoplasms",
    clue: "Strongly BCL2-positive, CD10-positive clonal germinal-center B cells confined to otherwise reactive, architecturally preserved follicles.",
    summary:
      "A follicle-confined clonal B-cell proliferation without overt follicular lymphoma.",
    clinical: [
      "Usually an incidental finding in adults; often identified in a lymph node sampled for another reason.",
      "No clinical or radiologic evidence of overt follicular lymphoma is required for the tissue finding, but staging is needed to exclude concurrent disease.",
    ],
    criteria: [
      "Preserved overall nodal architecture with reactive follicles.",
      "A subset of follicles contains strongly BCL2-positive, CD10-positive neoplastic germinal-center B cells.",
      "Neoplastic cells remain confined to germinal centers; interfollicular spread or overt lymphoma architecture is absent.",
      "Clinical staging excludes overt FL at another site.",
    ],
    location: ["Usually lymph nodes; occasionally extranodal lymphoid tissue."],
    histology: [
      "Most follicles retain normal size and architecture with mantle zones and polarized germinal centers.",
      "Only selected follicles show monotonous or subtly atypical germinal-center cells; follicular colonization by neoplastic cells may be focal.",
      "Interfollicular infiltration is absent or minimal.",
    ],
    ihc: [
      "Neoplastic germinal-center cells are strongly BCL2+, CD10+, and BCL6+.",
      "Ki-67 may be reduced or less polarized in involved follicles compared with reactive follicles.",
      "IGH::BCL2 may be detected by FISH; correlate with morphology because the rearrangement alone does not establish overt FL.",
    ],
    differential: [
      {
        name: "Overt follicular lymphoma",
        distinction:
          "Overt FL shows expanded/abnormal follicles, architectural distortion, and often interfollicular spread; ISFN remains follicle-confined in an otherwise preserved node.",
      },
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive germinal centers are BCL2-negative and show polarized Ki-67 with a mixed cell population.",
      },
      {
        name: "Partial involvement by FL",
        distinction:
          "Partial involvement shows abnormal follicles and often interfollicular neoplastic cells; ISFN has preserved architecture and strictly follicular confinement.",
      },
    ],
    molecular: [
      "IGH::BCL2 is frequent and supports the clonal germinal-center process but is not sufficient by itself to diagnose overt FL.",
    ],
    pitfalls: [
      "Do not label ISFN as overt FL without architectural or clinical evidence of lymphoma.",
      "Perform clinical staging to exclude concurrent overt FL.",
    ],
  },
  {
    name: "Follicular Lymphoma (Classic FL)",
    group: "Follicular B-Cell Neoplasms",
    clue: "Abnormal follicular growth of germinal-center B cells with BCL2 expression, usually CD10/BCL6 positive, and often IGH::BCL2.",
    summary:
      "A germinal-center-derived B-cell lymphoma with a spectrum of architectural and cytologic grades.",
    clinical: [
      "Usually adults in the sixth to seventh decades; slight female predominance.",
      "Often presents with painless generalized lymphadenopathy and disseminated disease; marrow involvement is common.",
      "Extranodal disease may occur; transformation may present with rapid growth, rising LDH, or new B symptoms.",
    ],
    criteria: [
      "Demonstrate a clonal follicle-center B-cell proliferation with abnormal follicular architecture and/or diffuse component.",
      "Classic FL typically expresses CD10, BCL6, and BCL2; correlate with the follicular pattern and cytology.",
      "Grade classic FL by centroblast count where applicable; distinguish FL grade 3B/follicular large B-cell lymphoma from grades 1–3A.",
      "Exclude pediatric-type FL, duodenal-type FL, primary cutaneous follicle center lymphoma, and in situ follicular B-cell neoplasm based on site and morphology.",
    ],
    location: [
      "Lymph nodes, bone marrow, spleen, and peripheral blood; extranodal sites may be involved.",
      "Marrow involvement is often paratrabecular.",
    ],
    histology: [
      "Usually back-to-back neoplastic follicles with attenuated/absent mantle zones and loss of polarization and tingible-body macrophages.",
      "Follicles contain centrocytes and centroblasts; grade 1–2 has fewer centroblasts, grade 3A has increased centroblasts with residual centrocytes.",
      "Diffuse areas may occur and should be assessed for large-cell transformation.",
      "Recognized patterns include FL with unusual cytological features and FL with a predominantly diffuse growth pattern; follicular large B-cell lymphoma (formerly FL grade 3B) is composed predominantly or exclusively of centroblasts.",
      "Marrow commonly shows paratrabecular aggregates.",
    ],
    ihc: [
      "CD20, PAX5, CD10, BCL6, and BCL2 positive in neoplastic follicles; CD5 and cyclin D1 usually negative.",
      "CD21/CD23 highlight follicular dendritic cell meshworks; Ki-67 is often relatively low and lacks normal polarization.",
      "BCL2 may be absent in a minority of FL, particularly some grade 3 cases; interpret the full phenotype.",
    ],
    differential: [
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive follicles are polarized, contain tingible-body macrophages, show compartmentalized Ki-67, and are BCL2-negative in germinal centers.",
      },
      {
        name: "Mantle cell lymphoma, mantle-zone/nodular pattern",
        distinction:
          "MCL is cyclin D1+/SOX11+ and usually CD5+; FL is CD10+/BCL6+ with BCL2-positive neoplastic follicles.",
      },
      {
        name: "Marginal zone lymphoma with follicular colonization",
        distinction:
          "MZL cells colonize residual reactive follicles; CD10/BCL6 are restricted to residual germinal-center cells rather than the neoplastic marginal-zone population.",
      },
      {
        name: "Pediatric-type follicular lymphoma",
        distinction:
          "PTFL occurs in children/young adults, is usually localized, often BCL2-negative, and lacks IGH::BCL2.",
      },
      {
        name: "Duodenal-type follicular lymphoma",
        distinction:
          "Typically localized to duodenal mucosa with superficial mucosal follicles and an indolent course.",
      },
      {
        name: "Primary cutaneous follicle center lymphoma",
        distinction:
          "Usually skin-limited, often lacks BCL2 and IGH::BCL2, and may show diffuse/follicular dermal growth.",
      },
      {
        name: "Follicular large B-cell lymphoma (FL grade 3B)",
        distinction:
          "Follicles are composed predominantly or exclusively of centroblasts; manage and classify separately from classic FL grades 1–3A.",
      },
    ],
    molecular: [
      "IGH::BCL2 from t(14;18) is common in classic FL.",
      "KMT2D, CREBBP, EZH2, TNFRSF14, and other epigenetic/chromatin-regulator mutations are recurrent.",
      "BCL2 rearrangement is not universal and should not be used as the sole diagnostic criterion.",
    ],
    pitfalls: [
      "Do not grade FL from a small core without acknowledging sampling limitations.",
      "Large-cell transformation requires sheets of large cells, not merely increased scattered centroblasts.",
    ],
  },
  {
    name: "Paediatric-Type Follicular Lymphoma (PTFL)",
    group: "Follicular B-Cell Neoplasms",
    clue: "Localized, expansile follicular lymphoma in a child or young adult, often with high proliferation but absent BCL2 and IGH::BCL2.",
    summary:
      "A distinct clinicopathologic follicle-center lymphoma with an excellent prognosis after local treatment in many cases.",
    clinical: [
      "Predominantly children and young adults; strong male predominance.",
      "Usually localized lymphadenopathy, commonly head and neck; systemic disease is uncommon.",
      "Often presents as a single enlarged node without B symptoms.",
    ],
    criteria: [
      "A localized nodal follicle-center lymphoma in a child/young adult.",
      "Expansile follicles with blastoid/large centroblast-like cells and high proliferation.",
      "Usually BCL2− and lacks IGH::BCL2; confirm that the lesion is not classic FL in a young patient.",
    ],
    location: [
      "Usually a single cervical or head-and-neck lymph node; other peripheral nodes less commonly.",
    ],
    histology: [
      "Partial or complete nodal effacement by expansile, closely packed follicles.",
      "Follicles are often serpiginous or irregular and composed of medium-to-large blastoid cells with prominent nucleoli.",
      "Mantle zones are attenuated; starry-sky pattern and high mitotic activity may be present.",
      "Diffuse areas may occur, but a follicular component is usually identifiable.",
    ],
    ihc: [
      "CD20, PAX5, CD10, BCL6, and often HGAL/LMO2 positive.",
      "BCL2 is usually negative; CD5 and cyclin D1 are negative.",
      "Ki-67 is often high, sometimes approaching 50–100%.",
      "FDC meshworks highlight expanded follicles.",
    ],
    differential: [
      {
        name: "Classic follicular lymphoma",
        distinction:
          "Classic FL is usually BCL2+ with IGH::BCL2 and occurs in older adults with disseminated disease; PTFL is localized and typically BCL2−.",
      },
      {
        name: "Paediatric nodal marginal zone lymphoma",
        distinction:
          "PNMZL has expanded marginal zones around reactive germinal centers; PTFL is a true CD10+/BCL6+ follicle-center proliferation.",
      },
      {
        name: "Reactive follicular hyperplasia",
        distinction:
          "Reactive follicles retain polarization and a mixed population; PTFL shows expansile monotonous follicles and clonal B cells.",
      },
      {
        name: "Burkitt lymphoma",
        distinction:
          "Burkitt lymphoma has a diffuse monomorphic medium-cell pattern, starry-sky background, and MYC rearrangement; PTFL retains follicular architecture and lacks MYC rearrangement.",
      },
    ],
    molecular: [
      "IGH::BCL2 is typically absent.",
      "Recurrent mutations may involve MAP2K1, TNFRSF14, and other MAPK pathway genes; no single alteration is required.",
    ],
    pitfalls: [
      "High Ki-67 does not by itself imply aggressive clinical behavior in PTFL.",
    ],
  },
  {
    name: "Duodenal-Type Follicular Lymphoma",
    group: "Follicular B-Cell Neoplasms",
    clue: "Small-volume follicular lymphoma centered in duodenal mucosa, often discovered incidentally during endoscopy.",
    summary:
      "A distinct indolent subtype of FL with a characteristic small-intestinal mucosal distribution.",
    clinical: [
      "Usually middle-aged adults; no strong sex predilection.",
      "Often asymptomatic and discovered as multiple small whitish nodules in the second portion of the duodenum.",
      "Usually localized with an indolent course.",
    ],
    criteria: [
      "Follicle-center B-cell neoplasm involving duodenal mucosa, often with superficial mucosal distribution.",
      "Typical CD10/BCL6/BCL2-positive phenotype and often IGH::BCL2.",
      "Exclude systemic classic FL secondarily involving the gastrointestinal tract by staging and distribution.",
    ],
    location: [
      "Duodenum, particularly the second portion; occasionally other small-intestinal sites.",
    ],
    histology: [
      "Neoplastic follicles are small and closely packed within lamina propria, often with extension into superficial submucosa.",
      "Follicles contain predominantly small centrocyte-like cells with few centroblasts.",
      "Villi may be expanded or distorted; deeper bowel wall involvement is uncommon.",
    ],
    ihc: [
      "CD20, CD10, BCL6, and BCL2 positive; CD5 and cyclin D1 negative.",
      "Ki-67 is generally low; CD21/CD23 highlight follicular dendritic cell networks.",
      "IGH::BCL2 may be detected.",
    ],
    differential: [
      {
        name: "Systemic classic FL involving duodenum",
        distinction:
          "Systemic FL more often has nodal/marrow disease and broader gastrointestinal involvement; duodenal-type FL is commonly localized to mucosa.",
      },
      {
        name: "Reactive lymphoid hyperplasia",
        distinction:
          "Reactive follicles are BCL2-negative in germinal centers and show normal polarization.",
      },
      {
        name: "MALT lymphoma",
        distinction:
          "MALT lymphoma lacks a germinal-center phenotype and may show lymphoepithelial lesions and marginal-zone differentiation.",
      },
    ],
    molecular: [
      "IGH::BCL2 is common; mutations overlap with classic FL, including KMT2D and CREBBP.",
    ],
    pitfalls: [
      "Do not assume every duodenal FL represents systemic classic FL; evaluate distribution and clinical staging.",
    ],
  },
  {
    name: "Primary Cutaneous Follicle Center Lymphoma (PCFCL)",
    group: "Follicular B-Cell Neoplasms",
    clue: "A primary skin-limited follicle-center lymphoma, usually on scalp, forehead, or trunk, often lacking strong BCL2 and IGH::BCL2.",
    summary:
      "An indolent primary cutaneous B-cell lymphoma with follicular, follicular-diffuse, or diffuse growth.",
    clinical: [
      "Usually middle-aged to older adults; male predominance.",
      "Presents with solitary or grouped erythematous plaques, papules, or tumors on scalp, forehead, or trunk.",
      "Systemic symptoms are uncommon; staging is required to exclude systemic FL.",
    ],
    criteria: [
      "Establish primary cutaneous disease with clinical staging.",
      "Show a dermal/subcutaneous follicle-center B-cell proliferation, often with follicular and/or diffuse architecture.",
      "Use BCL2, CD10, BCL6, and molecular findings in context; strong BCL2/IGH::BCL2 should prompt evaluation for systemic FL.",
    ],
    location: [
      "Dermis and subcutis, particularly scalp, forehead, and trunk; epidermis is usually spared.",
    ],
    histology: [
      "Nodular, follicular, follicular-diffuse, or diffuse infiltrate in dermis and subcutis.",
      "Neoplastic cells include centrocytes and centroblasts; diffuse cases may show larger cells.",
      "A grenz zone may separate tumor from epidermis; reactive T cells may be admixed.",
    ],
    ihc: [
      "CD20, PAX5, and BCL6 positive; CD10 is variable and often stronger in follicular areas.",
      "BCL2 is usually negative or weak compared with systemic classic FL; strong diffuse BCL2 is unusual.",
      "MUM1/IRF4 is generally negative; CD21/CD23 may highlight FDC meshworks.",
      "Ki-67 is variable and should be interpreted with cytology.",
    ],
    differential: [
      {
        name: "Systemic follicular lymphoma involving skin",
        distinction:
          "Strong BCL2 and IGH::BCL2, together with nodal/marrow disease, favor systemic FL.",
      },
      {
        name: "Primary cutaneous marginal zone lymphoma",
        distinction:
          "PCMZL shows marginal-zone/plasmacytic differentiation and often a T-cell-rich background; PCFCL has a follicle-center phenotype.",
      },
      {
        name: "Primary cutaneous diffuse large B-cell lymphoma, leg type",
        distinction:
          "Leg-type lymphoma shows sheets of large cells, strong BCL2/MUM1, and typically arises on lower legs with more aggressive behavior.",
      },
    ],
    molecular: [
      "IGH::BCL2 is usually absent; its presence should prompt careful systemic staging.",
      "No single recurrent molecular alteration is required for diagnosis.",
    ],
    pitfalls: [
      "Primary cutaneous status is a clinicopathologic designation; exclude systemic FL before final classification.",
    ],
  },
  {
    name: "In Situ Mantle Cell Neoplasm (ISMCN)",
    group: "Mantle Cell Neoplasms",
    clue: "Cyclin D1-positive B cells confined predominantly to the inner mantle-zone layers of otherwise preserved follicles.",
    summary:
      "A mantle-cell clone restricted to mantle zones without architectural expansion or overt lymphoma.",
    clinical: [
      "Usually an incidental finding in adults, often in lymph nodes sampled for another reason.",
      "No clinical evidence of overt mantle cell lymphoma should be present after staging.",
    ],
    criteria: [
      "Preserved lymph-node architecture without mantle-zone expansion.",
      "Cyclin D1-positive neoplastic B cells are predominantly restricted to the inner mantle-zone layers.",
      "No overt MCL identified clinically or at other sites after appropriate staging.",
      "CCND1 rearrangement is supportive.",
    ],
    location: [
      "Usually lymph nodes; may be detected in other lymphoid tissues.",
    ],
    histology: [
      "Follicles retain reactive germinal centers and mantle zones without nodular or diffuse lymphoma growth.",
      "Cyclin D1-positive cells are limited to the inner mantle zone and do not form expanded cuffs.",
      "SOX11 is often negative or limited; morphology and distribution are decisive.",
    ],
    ihc: [
      "Cyclin D1 strongly labels mantle-zone B cells; CD20/PAX5 confirm B-cell lineage.",
      "CD5 may be positive; SOX11 is often negative.",
      "CD21/CD23 demonstrate preserved follicular dendritic cell networks.",
    ],
    differential: [
      {
        name: "Mantle cell lymphoma with mantle-zone pattern",
        distinction:
          "Overt MCL shows expansion of mantle zones and/or nodular, diffuse, or interfollicular infiltration; ISMCN remains confined to inner mantle layers.",
      },
      {
        name: "Leukemic non-nodal MCL",
        distinction:
          "nnMCL has blood/marrow/splenic disease and a clinical lymphocytosis; ISMCN is a tissue-confined incidental finding without overt disease.",
      },
      {
        name: "Reactive mantle zone",
        distinction:
          "Reactive mantle zones lack cyclin D1-positive clonal B cells and CCND1 rearrangement.",
      },
    ],
    molecular: [
      "CCND1 rearrangement (usually IGH::CCND1) may be detected and supports the diagnosis.",
    ],
    pitfalls: [
      "ISMCN warrants clinical staging and follow-up; do not equate the incidental tissue finding with overt MCL.",
    ],
  },
  {
    name: "Mantle Cell Lymphoma (MCL)",
    group: "Mantle Cell Neoplasms",
    clue: "Small-to-medium B cells, usually CD5+, with cyclin D1 overexpression and CCND1 rearrangement; SOX11 is commonly positive in conventional MCL.",
    summary:
      "A mature B-cell neoplasm with a broad morphologic spectrum and variable clinical behavior.",
    clinical: [
      "Usually older adults; strong male predominance.",
      "Commonly presents with generalized lymphadenopathy, splenomegaly, marrow involvement, and sometimes gastrointestinal multiple lymphomatous polyposis.",
      "Blastoid and pleomorphic variants may present aggressively with cytopenias, high LDH, or bulky disease.",
    ],
    criteria: [
      "Demonstrate a mature B-cell neoplasm, usually CD5+, with cyclin D1 overexpression and/or CCND1 rearrangement.",
      "Conventional morphology is composed of monomorphic small-to-medium cells with irregular nuclear contours and scant cytoplasm.",
      "SOX11 supports conventional MCL, particularly in cyclin D1-negative cases.",
      "Cyclin D1-negative MCL requires compatible morphology/phenotype and usually a CCND2 or CCND3 rearrangement.",
      "Assess Ki-67 and TP53 status for risk stratification.",
    ],
    location: [
      "Lymph nodes, spleen, bone marrow, peripheral blood, Waldeyer ring, and gastrointestinal tract.",
      "Other extranodal sites include skin, lung, endocrine organs, and CNS, particularly in relapsed disease.",
    ],
    histology: [
      "Growth patterns include diffuse, nodular, mantle-zone, and rarely follicular patterns.",
      "Classic MCL: small-to-medium cells with irregular/folded nuclei, condensed chromatin, inconspicuous nucleoli, and scant cytoplasm.",
      "Variants include small-cell, marginal-zone-like, pleomorphic, and blastoid patterns.",
      "Blastoid variant shows larger cells with dispersed chromatin and brisk mitoses; pleomorphic variant shows marked nuclear irregularity and pleomorphism.",
      "Ki-67 varies widely; high proliferation is associated with aggressive behavior.",
    ],
    ihc: [
      "CD20, PAX5, CD79a, and surface IgM/IgD are positive, often bright; CD5 and CD43 are usually positive.",
      "Cyclin D1 is positive in >95% of cases; SOX11 is commonly positive in conventional MCL.",
      "CD23 is usually negative or weak; CD200 is usually negative; CD10/BCL6 are usually negative but may be aberrant in aggressive variants.",
      "Cyclin D1-negative MCL may express SOX11 and show CCND2/CCND3 rearrangements.",
      "Ki-67 should be reported, particularly in aggressive variants; assess p53 IHC as a surrogate but use TP53 sequencing when indicated.",
    ],
    differential: [
      {
        name: "CLL/SLL",
        distinction:
          "CLL/SLL is CD23+/CD200+/LEF1+ with dim CD20/surface Ig and proliferation centers; MCL is cyclin D1+/SOX11+ with brighter B-cell markers and usually CD200−.",
      },
      {
        name: "Follicular lymphoma",
        distinction:
          "FL is CD10+/BCL6+ with germinal-center architecture and usually lacks CD5/cyclin D1.",
      },
      {
        name: "Marginal zone lymphoma",
        distinction:
          "MZL is usually cyclin D1−/SOX11− and CD5−; assess site-specific architecture and CCND1 rearrangement.",
      },
      {
        name: "Hairy cell leukemia",
        distinction:
          "HCL expresses annexin A1, CD25, CD103, CD123, and BRAF V600E; MCL is cyclin D1+/CCND1-rearranged.",
      },
      {
        name: "Cyclin D1-positive plasma cell myeloma",
        distinction:
          "Plasma cell phenotype (CD138/MUM1) and lack of a mature CD5+ B-cell population favor plasma cell myeloma.",
      },
      {
        name: "Blastoid MCL versus B-lymphoblastic lymphoma",
        distinction:
          "Blastoid MCL retains mature B-cell markers and cyclin D1/CCND1; B-lymphoblastic lymphoma expresses TdT and lacks the MCL defining genetic profile.",
      },
      {
        name: "DLBCL",
        distinction:
          "Pleomorphic MCL can mimic DLBCL; cyclin D1, SOX11, and CCND1 testing are useful in the appropriate setting.",
      },
    ],
    molecular: [
      "IGH::CCND1 from t(11;14) is the defining alteration in most cases.",
      "Cyclin D1-negative MCL may harbor CCND2 or CCND3 rearrangements.",
      "TP53 mutation/deletion is a major adverse risk marker; complex karyotype and NOTCH1/NOTCH2 alterations may occur.",
      "SOX11 expression is common in conventional MCL and often absent in leukemic non-nodal MCL.",
    ],
    pitfalls: [
      "Cyclin D1 expression alone is not specific; plasma cell neoplasms and other lymphomas may express cyclin D1.",
      "A negative SOX11 stain does not exclude leukemic non-nodal MCL.",
      "Do not classify blastoid MCL as B-lymphoblastic lymphoma solely because of blastoid cytology.",
    ],
  },
  {
    name: "Leukemic Non-Nodal Mantle Cell Lymphoma (nnMCL)",
    group: "Mantle Cell Neoplasms",
    clue: "Cyclin D1+/CCND1-rearranged MCL presenting with blood, marrow, and splenic involvement, minimal nodal disease, and usually absent SOX11.",
    summary:
      "A clinically and biologically distinct, often more indolent presentation of mantle cell lymphoma.",
    clinical: [
      "Usually adults in the sixth decade; male predominance similar to conventional MCL.",
      "Often asymptomatic with incidental, stable, or slowly progressive lymphocytosis and splenomegaly.",
      "Peripheral lymphadenopathy is absent or minimal.",
    ],
    criteria: [
      "Typical presentation with peripheral-blood lymphocytosis and absent/minimal lymphadenopathy.",
      "Monomorphic small-to-medium mature B cells with cyclin D1 expression and/or CCND1 rearrangement.",
      "SOX11 is usually absent or very weak; low Ki-67 and mutated IGHV support the non-nodal biology.",
      "Distinguish from SMZL and CLL/SLL by integrating cyclin D1/CCND1 and the complete phenotype.",
    ],
    location: [
      "Peripheral blood, bone marrow, and spleen; minimal or absent lymph node involvement.",
      "Gastrointestinal involvement may occur.",
    ],
    histology: [
      "Blood shows small-to-medium lymphoid cells with hyperchromatic nuclei, clefts, and variable CLL-like morphology.",
      "Marrow is often normocellular with subtle interstitial or sinusoidal infiltrates.",
      "Spleen may show small lymphoid aggregates or mantle-zone-restricted involvement, overlapping with ISMCN.",
    ],
    ihc: [
      "CD20 and cyclin D1 positive; CD5 is usually positive but may be variable or negative.",
      "SOX11 is usually negative or weak, unlike conventional nodal MCL.",
      "CD23 and CD200 may be expressed in a subset, potentially mimicking CLL/SLL.",
      "Ki-67 is generally low; CD10 and BCL6 are usually negative.",
    ],
    differential: [
      {
        name: "CLL/SLL",
        distinction:
          "CLL/SLL is LEF1+/CD23+/CD200+ and cyclin D1−; nnMCL is cyclin D1+/CCND1-rearranged even when CD23/CD200 are present.",
      },
      {
        name: "Splenic marginal zone lymphoma",
        distinction:
          "SMZL lacks cyclin D1/CCND1 and has marginal-zone splenic architecture; nnMCL has the MCL genetic hallmark.",
      },
      {
        name: "In situ mantle cell neoplasm",
        distinction:
          "ISMCN is limited to inner mantle zones without blood/marrow disease; nnMCL has a systemic leukemic/splenic presentation.",
      },
      {
        name: "Conventional MCL",
        distinction:
          "Conventional MCL more often has nodal disease, SOX11 expression, higher proliferation, and a more aggressive course.",
      },
    ],
    molecular: [
      "Usually IGH::CCND1/t(11;14).",
      "IGHV genes are often somatically hypermutated; SOX11 expression is usually absent.",
      "TP53 alterations may emerge and indicate higher-risk biology.",
    ],
    pitfalls: [
      "CD23 or CD200 positivity does not exclude nnMCL when cyclin D1/CCND1 establishes MCL.",
      "The non-nodal clinical distribution is integral to the subtype designation.",
    ],
  },
  {
    name: "Transformations of Indolent B-Cell Lymphomas",
    group: "Transformation / High-Grade Progression",
    clue: "Rapid clinical progression with sheets of large cells in a patient with an established indolent B-cell lymphoma; prove clonal relationship when relevant.",
    summary:
      "High-grade transformation includes DLBCL-type transformation of indolent lymphomas and Richter transformation of CLL/SLL.",
    clinical: [
      "Any age according to the underlying lymphoma; risk varies by entity.",
      "Rapidly enlarging node or extranodal mass, new/worsening B symptoms, rising LDH, hypercalcemia, or new cytopenias are warning signs.",
      "Biopsy the most metabolically active or clinically progressive site when feasible.",
    ],
    criteria: [
      "Demonstrate an overt high-grade lymphoma, usually sheets of large atypical B cells, arising in the setting of a known or concurrent indolent B-cell lymphoma.",
      "Compare the transformed and antecedent components morphologically and immunophenotypically.",
      "For Richter transformation, establish clonal relationship by IG rearrangement studies when possible because clonally unrelated lymphomas have different biology and management.",
      "Distinguish true large-cell transformation from increased scattered large cells or high proliferation in an otherwise low-grade lymphoma.",
    ],
    location: [
      "Nodal or extranodal sites; CNS involvement may occur in selected aggressive transformations.",
      "Transformation may be focal, so sampling of the most suspicious lesion is important.",
    ],
    histology: [
      "Usually diffuse sheets of large blasts with centroblastic, immunoblastic, or anaplastic morphology.",
      "Transformed FL may retain CD10/BCL6; transformed CLL/SLL may retain CD5/CD23, although antigen loss or phenotypic divergence can occur.",
      "Richter transformation includes DLBCL-type and, rarely, classic Hodgkin lymphoma-type transformation.",
      "For MZL, confluent sheets of large cells support transformation; scattered large cells or small clusters alone are insufficient.",
    ],
    ihc: [
      "Use a broad large B-cell lymphoma panel and compare with the original neoplasm.",
      "Transformed FL often retains CD10/BCL6; CLL-derived DLBCL may retain CD5 or CD23 but often shows a non-germinal-center phenotype.",
      "PD-L1-positive background histiocytes may be seen in DLBCL-type Richter transformation.",
      "Rare transformed lymphomas may express TdT; do not automatically reclassify as de novo lymphoblastic lymphoma without considering clonal evolution.",
    ],
    differential: [
      {
        name: "Histologically aggressive CLL/SLL",
        distinction:
          "Large/confluent proliferation centers and high Ki-67 within centers remain CLL/SLL; sheets of large lymphoma cells establish DLBCL-type Richter transformation.",
      },
      {
        name: "De novo DLBCL",
        distinction:
          "Clinical history and IG rearrangement comparison help determine whether the large-cell lymphoma is clonally related to the antecedent indolent lymphoma.",
      },
      {
        name: "Indolent lymphoma with increased large cells",
        distinction:
          "Scattered large cells or small clusters do not necessarily constitute transformation; confluent sheets are the key morphologic threshold.",
      },
      {
        name: "Classic Hodgkin lymphoma-type Richter transformation",
        distinction:
          "Requires Hodgkin/Reed–Sternberg cells in a characteristic inflammatory milieu; scattered EBV-positive Hodgkin-like cells alone are insufficient.",
      },
    ],
    molecular: [
      "For Richter transformation, compare IG gene rearrangements in the CLL and large-cell components to establish clonal identity.",
      "Transformation-specific abnormalities may include TP53, MYC, NOTCH1, and CDKN2A alterations; these are supportive rather than independently diagnostic.",
    ],
    pitfalls: [
      "Do not diagnose transformation from elevated Ki-67 alone.",
      "Sample the most suspicious site; a small core may miss focal large-cell transformation.",
    ],
  },
];

const lineageRows = [
  {
    lineage: "CLL/SLL",
    origin:
      "Antigen-experienced, memory-like B cell; exact developmental route remains heterogeneous.",
    morphology:
      "Small mature lymphocytes with clumped chromatin; pale proliferation centers with prolymphocytes/paraimmunoblasts.",
    ihc: "CD5+, CD23+, CD200+, ROR1+, LEF1+; dim CD20/surface Ig; CD10−, cyclin D1−.",
  },
  {
    lineage: "Mantle cell lymphoma",
    origin: "Naive/pre-germinal-center mantle-zone B cell.",
    morphology:
      "Monomorphic small-to-medium cells with irregular nuclei; diffuse, nodular, or mantle-zone growth; blastoid/pleomorphic variants.",
    ihc: "CD20 bright, CD5+, cyclin D1+, usually SOX11+; CD23/CD200 usually negative or weak.",
  },
  {
    lineage: "Follicular lymphoma",
    origin: "Germinal-center B cell, usually with somatic hypermutation.",
    morphology:
      "Neoplastic follicles composed of centrocytes and centroblasts; loss of polarization and tingible-body macrophages.",
    ihc: "CD10+, BCL6+, BCL2+ in most classic FL; CD5−, cyclin D1−.",
  },
  {
    lineage: "Marginal zone lymphomas",
    origin: "Post-germinal-center memory/marginal-zone B cell.",
    morphology:
      "Monocytoid or centrocyte-like cells with pale cytoplasm; marginal-zone expansion, follicular colonization, and variable plasmacytic differentiation.",
    ihc: "CD20+, usually CD5−/CD10−/BCL6−/cyclin D1−; CD43 variable; plasma cells may be light-chain restricted.",
  },
  {
    lineage: "Lymphoplasmacytic lymphoma",
    origin: "Post-germinal-center B cell with plasmacytic differentiation.",
    morphology:
      "Mixture of small lymphocytes, plasmacytoid lymphocytes, and plasma cells; marrow-based interstitial/nodular/diffuse infiltrate.",
    ihc: "CD20/PAX5+ B cells; CD138/CD38+ light-chain-restricted plasma cells; usually CD5−/CD10−/CD23−; MYD88 L265P common.",
  },
  {
    lineage: "Hairy cell leukemia",
    origin:
      "Mature antigen-experienced B-cell neoplasm; distinct splenic red-pulp phenotype.",
    morphology:
      "Hairy cells with abundant pale cytoplasm; red-pulp and fibrotic marrow involvement.",
    ihc: "CD11c+, CD25+, CD103+, CD123+, annexin A1+, BRAF V600E+ in classic HCL.",
  },
];

const subtypeRows = [
  {
    subtype: "Classic CLL/SLL",
    location: "Blood, marrow, nodes, spleen",
    histology: "Small lymphocytes with proliferation centers",
    ihc: "CD5+, CD23+, LEF1+, CD200+, ROR1+",
  },
  {
    subtype: "Classic FL (grades 1–3A)",
    location: "Nodes, marrow, spleen; disseminated",
    histology: "Back-to-back follicles; centrocytes ± centroblasts",
    ihc: "CD10+, BCL6+, BCL2+ in most cases",
  },
  {
    subtype: "FL with unusual cytological features",
    location: "Usually lymph nodes; may be disseminated",
    histology:
      "FL architecture with atypical cytology (including blastoid, signet-ring, or other unusual cell forms)",
    ihc: "Usually retains germinal-center markers; assess BCL2/BCL6 and exclude mimics",
  },
  {
    subtype: "FL with predominantly diffuse growth",
    location: "Often inguinal/femoral nodes; may be localized",
    histology:
      "Predominantly diffuse infiltrate with limited follicular areas; often associated with 1p36 deletion",
    ihc: "Usually CD10/BCL6 positive; BCL2 may be variable; distinguish from DLBCL and MZL",
  },

  {
    subtype: "Follicular large B-cell lymphoma (FL grade 3B)",
    location: "Usually nodal; may be extranodal",
    histology: "Follicles composed predominantly/exclusively of centroblasts",
    ihc: "CD10/BCL6 often positive; BCL2 variable",
  },
  {
    subtype: "Paediatric-type FL",
    location: "Usually localized cervical/head-and-neck node",
    histology: "Expansile follicles with blastoid cells and high Ki-67",
    ihc: "CD10+, BCL6+, usually BCL2−; IGH::BCL2 absent",
  },
  {
    subtype: "Duodenal-type FL",
    location: "Duodenal mucosa, especially second portion",
    histology: "Small superficial mucosal follicles, mostly centrocytes",
    ihc: "CD10+, BCL6+, BCL2+",
  },
  {
    subtype: "Primary cutaneous follicle center lymphoma",
    location: "Dermis/subcutis of scalp, forehead, trunk",
    histology: "Follicular, follicular-diffuse, or diffuse dermal infiltrate",
    ihc: "BCL6+, CD10 variable, BCL2 usually negative/weak",
  },
  {
    subtype: "In situ follicular B-cell neoplasm",
    location: "Usually lymph node",
    histology: "BCL2+ clonal cells confined to otherwise reactive follicles",
    ihc: "Strong BCL2+, CD10+, BCL6+ in involved follicles",
  },
  {
    subtype: "Extranodal MZL / MALT lymphoma",
    location: "Stomach, salivary gland, ocular adnexa, lung, thyroid, skin",
    histology:
      "Marginal-zone cells, follicular colonization, lymphoepithelial lesions",
    ihc: "CD20+, usually CD5−/CD10−/BCL6−/cyclin D1−",
  },
  {
    subtype: "Splenic MZL",
    location: "Spleen, blood, marrow",
    histology:
      "Biphasic white-pulp nodules with red-pulp extension; villous cells",
    ihc: "CD20 bright; usually CD5−/CD10−/cyclin D1−/annexin A1−",
  },
  {
    subtype: "Nodal MZL",
    location: "Lymph nodes",
    histology: "Nodal marginal-zone/monocytoid growth; follicular colonization",
    ihc: "CD20+, usually CD5−/CD10−/BCL6−/cyclin D1−",
  },
  {
    subtype: "Paediatric nodal MZL",
    location: "Localized cervical/head-and-neck nodes",
    histology: "Expanded marginal zones around reactive germinal centers",
    ihc: "Marginal-zone cells CD20+ and CD10−/BCL6−; residual GC retains CD10/BCL6",
  },
  {
    subtype: "Primary cutaneous MZL",
    location: "Dermis/subcutis, trunk and arms",
    histology:
      "Nodular/diffuse infiltrate with marginal-zone cells, plasma cells, reactive T cells",
    ihc: "CD20+, CD5−/CD10−/BCL6−; light-chain-restricted plasma cells",
  },
  {
    subtype: "PCMZL, class-switched form",
    location: "Dermis/subcutis, usually trunk/arms",
    histology:
      "Plasma-cell-rich infiltrate with class-switched differentiation",
    ihc: "Neoplastic B cells CD20+/BCL2+; plasma cells usually IgG/IgA/IgE",
  },
  {
    subtype: "PCMZL, non-class-switched form",
    location: "Dermis/subcutis, usually trunk/arms",
    histology:
      "Marginal-zone B-cell infiltrate with IgM-positive plasmacytic differentiation",
    ihc: "CD20+/BCL2+ B cells; IgM+ clonal plasma cells",
  },

  {
    subtype: "Conventional MCL",
    location: "Nodes, spleen, marrow, GI tract/Waldeyer ring",
    histology:
      "Diffuse/nodular/mantle-zone growth; classic, blastoid, pleomorphic variants",
    ihc: "Cyclin D1+, CD5+, SOX11 commonly+, CD23/CD200 usually−",
  },
  {
    subtype: "Leukemic non-nodal MCL",
    location: "Blood, marrow, spleen; minimal nodes",
    histology: "Subtle interstitial/sinusoidal marrow and splenic aggregates",
    ihc: "Cyclin D1+, CD5 variable, SOX11 usually−/weak; CD23/CD200 may be+",
  },
  {
    subtype: "In situ mantle cell neoplasm",
    location: "Incidental lymph node/lymphoid tissue",
    histology:
      "Cyclin D1+ cells restricted to inner mantle-zone layers; architecture preserved",
    ihc: "Cyclin D1+, CD5 variable, SOX11 often−",
  },
  {
    subtype: "IgM-type LPL / Waldenström macroglobulinemia",
    location: "Bone marrow ± blood, spleen, nodes",
    histology:
      "Small B cells, plasmacytoid lymphocytes, plasma cells with serum IgM paraprotein",
    ihc: "CD20/PAX5+ B cells; CD138+ clonal plasma cells; MYD88 L265P common",
  },
  {
    subtype: "Non-IgM-type LPL",
    location: "Usually bone marrow; may involve nodes/spleen",
    histology:
      "Lymphoplasmacytic marrow infiltrate with IgG or IgA paraprotein in some cases",
    ihc: "B-cell and plasma-cell phenotype similar to IgM-type LPL; establish paraprotein isotype",
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
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function MatureBCellSmallLymphocyticNeoplasmsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Chronic Lymphocytic Leukemia / Small Lymphocytic Lymphoma (CLL/SLL)",
    "Follicular Lymphoma (Classic FL)",
    "Mantle Cell Lymphoma (MCL)",
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
            e.location.join(" ") +
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
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Mature B-Cell Neoplasms of Small Lymphocytes
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to small B-cell lymphoid
          proliferations, emphasizing lineage and cell of origin, anatomic
          distribution, defining morphology, immunophenotype, molecular
          findings, and reciprocal differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the clinical distribution",
              "Blood/marrow predominant, splenic, nodal, or extranodal disease narrows the differential before immunostains are interpreted.",
            ],
            [
              "2. Confirm mature B-cell lineage and clonality",
              "Use CD20/PAX5 and flow cytometry with kappa/lambda assessment; correlate with blood counts and tissue architecture.",
            ],
            [
              "3. Separate the major phenotypic groups",
              "CD5/CD23/LEF1 suggests CLL/SLL; cyclin D1/SOX11 suggests MCL; CD10/BCL6 suggests FL; CD5−/CD10− favors MZL or LPL.",
            ],
            [
              "4. Use architecture to classify marginal-zone and splenic lesions",
              "Identify white-pulp versus red-pulp growth, nodal marginal-zone expansion, extranodal lymphoepithelial lesions, and marrow patterns.",
            ],
            [
              "5. Recognize plasmacytic differentiation",
              "Correlate serum paraprotein, marrow distribution, plasma-cell clonality, and MYD88 status when considering LPL versus MZL.",
            ],
            [
              "6. Exclude transformation",
              "Rapid growth, high LDH, new B symptoms, or a focal high-uptake lesion warrants biopsy to exclude large-cell transformation.",
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
          <strong>Core principle:</strong> No single marker reliably classifies
          every small B-cell neoplasm. Interpret phenotype with cytology, tissue
          architecture, anatomic distribution, peripheral-blood findings, and
          disease-defining molecular alterations.
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Major Small B-Cell Neoplasms: Cell of Origin and Core Profile
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700">
                  <th className="p-2">Entity</th>
                  <th className="p-2">Cell of origin</th>
                  <th className="p-2">Histology</th>
                  <th className="p-2">IHC / flow profile</th>
                </tr>
              </thead>
              <tbody>
                {lineageRows.map((r) => (
                  <tr
                    key={r.lineage}
                    className="border-b border-slate-100 align-top"
                  >
                    <td className="p-2 font-semibold">{r.lineage}</td>
                    <td className="p-2">{r.origin}</td>
                    <td className="p-2">{r.morphology}</td>
                    <td className="p-2">{r.ihc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Subtype Map: Location, Histology, and IHC
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700">
                  <th className="p-2">Subtype</th>
                  <th className="p-2">Typical location</th>
                  <th className="p-2">Histology</th>
                  <th className="p-2">Key IHC</th>
                </tr>
              </thead>
              <tbody>
                {subtypeRows.map((r) => (
                  <tr
                    key={r.subtype}
                    className="border-b border-slate-100 align-top"
                  >
                    <td className="p-2 font-semibold">{r.subtype}</td>
                    <td className="p-2">{r.location}</td>
                    <td className="p-2">{r.histology}</td>
                    <td className="p-2">{r.ihc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="font-bold text-slate-900">
          High-Yield Immunophenotypic Separation
        </h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-2">Marker</th>
                <th className="p-2">CLL/SLL</th>
                <th className="p-2">MCL</th>
                <th className="p-2">FL</th>
                <th className="p-2">MZL</th>
                <th className="p-2">LPL</th>
                <th className="p-2">Classic HCL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["CD5", "+", "Usually +", "−", "Usually −", "Usually −", "−"],
                [
                  "CD23",
                  "+",
                  "Usually −/weak",
                  "−",
                  "Usually −",
                  "Usually −",
                  "−",
                ],
                ["CD10/BCL6", "−", "Usually −", "+", "−", "−", "−"],
                ["Cyclin D1", "−", "+", "−", "−", "−", "Usually −/variable"],
                ["SOX11", "−", "Usually +", "−", "−", "−", "−"],
                ["LEF1", "Usually +", "−", "−", "−", "−", "−"],
                [
                  "CD200",
                  "+",
                  "Usually − (nnMCL may vary)",
                  "Variable",
                  "Variable",
                  "Variable",
                  "Usually +",
                ],
                [
                  "MYD88 L265P",
                  "Uncommon",
                  "Uncommon",
                  "Uncommon",
                  "Uncommon",
                  "Common",
                  "Not typical",
                ],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-slate-100">
                  <td className="p-2 font-semibold">{r[0]}</td>
                  {r.slice(1).map((v, i) => (
                    <td key={i} className="p-2">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          Typical patterns only. Aberrant antigen expression occurs, and results
          should be interpreted with morphology, flow-cytometric intensity, and
          molecular findings.
        </p>
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
              placeholder="Search entities, markers, morphology, or differentials..."
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
                    <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
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
                    <Section title="Typical Location">
                      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {e.location.map((x, i) => (
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
        clinical presentation, specimen type, ancillary studies, and current
        classification criteria.
      </footer>
    </main>
  );
}
