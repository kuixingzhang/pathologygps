"use client";
import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  profile: string;
  criteria: string;
  hist: string;
  ihc: string;
  diff: string;
  molecular: string;
};
const entities: Entity[] = [
  {
    name: "T-Cell Prolymphocytic Leukemia",
    group: "Mature T-cell leukemia",
    profile:
      "Older adults; median ~65 years; slight male predominance. Marked lymphocytosis, hepatosplenomegaly, generalized lymphadenopathy, skin or serous involvement.",
    criteria:
      "Persistent/progressive mature T-cell lymphocytosis with compatible morphology and phenotype.",
    hist: "Small-to-medium prolymphocytes with visible nucleoli and basophilic cytoplasm; cytoplasmic blebs are characteristic.",
    ihc: "CD2+, surface/cytoplasmic CD3+, CD5+, usually CD7+; CD4+, CD8+, or double-positive; TdT−, CD1a−; TCL1A commonly positive; CD52 usually bright.",
    diff: "Sézary syndrome: cerebriform nuclei and skin-predominant disease. ATLL: HTLV-1 association and flower cells. T-LGLL: granular cytoplasm, cytopenias, indolent course. T-lymphoblastic leukemia: TdT+/immature phenotype.",
    molecular:
      "TCL1A or MTCP1 rearrangement involving TCR loci is defining; complex karyotype, ATM, JAK1/JAK3/STAT5B alterations may occur.",
  },
  {
    name: "T-Cell Large Granular Lymphocytic Leukemia",
    group: "Mature cytotoxic T-cell leukemia",
    profile:
      "Adults, median ~60 years; no sex predilection. Neutropenia, anemia/PRCA, recurrent infections, rheumatoid arthritis; spleen and marrow, rarely nodes.",
    criteria:
      "Persistent clonal cytotoxic T-cell expansion, typically with absolute lymphocytosis >2 × 10⁹/L; integrate count, phenotype, clonality, and clinical context.",
    hist: "Large granular lymphocytes have abundant pale cytoplasm with azurophilic granules and round-to-slightly irregular nuclei. Marrow shows subtle interstitial/intrasinusoidal infiltrates.",
    ihc: "Usually CD3+, CD8+, CD57+, CD16+, CD45RA+, TCRαβ+; CD5/CD7 dim or lost; CD4−; cytotoxic proteins positive.",
    diff: "Reactive cytotoxic T-cell expansion: polyclonal/transient and linked to infection. NK-LGLL: surface CD3− and no TCR rearrangement. T-PLL: marked lymphocytosis with prolymphocytes.",
    molecular:
      "STAT3 mutations common, especially CD8+ cases; STAT5B enriched in CD4+ cases.",
  },
  {
    name: "NK-Cell Large Granular Lymphocytic Leukemia",
    group: "Mature NK-cell lymphoproliferation",
    profile:
      "Older adults; often incidental persistent lymphocytosis or cytopenias, particularly neutropenia; blood, marrow, spleen.",
    criteria:
      "Persistent clonal/oligoclonal NK-cell expansion with compatible phenotype and clinical course; exclude reactive NK expansion and aggressive NK-cell leukemia.",
    hist: "Large granular lymphocytes resemble T-LGLL; marrow involvement is often subtle and interstitial/intrasinusoidal.",
    ihc: "Surface CD3−, cytoplasmic CD3ε+, CD2+, CD7+, CD16 and/or CD56+, cytotoxic proteins+; restricted KIR expression supports clonality.",
    diff: "T-LGLL: surface CD3+, TCR expression and clonal TCR rearrangement. Aggressive NK-cell leukemia: acute systemic illness, EBV association, high tumor burden.",
    molecular:
      "No TCR gene rearrangement; restricted KIR repertoire; STAT3/STAT5B pathway alterations may occur.",
  },
  {
    name: "Adult T-Cell Leukemia/Lymphoma",
    group: "HTLV-1-associated mature T-cell neoplasm",
    profile:
      "Adults from HTLV-1-endemic regions or with exposure risk; skin, blood, nodes, marrow, bone, and viscera. Hypercalcemia and skin lesions are important clues.",
    criteria:
      "Demonstrate HTLV-1 association in a mature T-cell neoplasm; classify clinical subtype (acute, lymphoma, chronic, smoldering).",
    hist: "Pleomorphic cells with multilobated “flower” nuclei; diffuse tissue infiltrates or nodal effacement; skin may show epidermotropism.",
    ihc: "CD2+, CD3+, CD4+, CD25+, CCR4+, often FOXP3+; CD7 frequently lost; CD8 usually negative; CADM1 supports phenotype.",
    diff: "Sézary syndrome/mycosis fungoides: no HTLV-1. PTCL-NOS: lacks HTLV-1 integration. T-PLL: TCL1-family rearrangement and typical prolymphocytes.",
    molecular:
      "HTLV-1 proviral DNA and monoclonal integration are central; recurrent alterations include PLCG1, PRKCB, CCR4, and immune-evasion genes.",
  },
  {
    name: "Sézary Syndrome",
    group: "Leukemic cutaneous T-cell lymphoma",
    profile:
      "Adults, usually older; erythroderma, severe pruritus, lymphadenopathy, and circulating atypical T cells.",
    criteria:
      "Generalized erythroderma plus clonal circulating neoplastic T cells; quantify blood tumor burden and establish clonality.",
    hist: "Cerebriform lymphocytes in blood; skin shows epidermotropic atypical lymphocytes, often with minimal spongiosis, and may form Pautrier microabscesses.",
    ihc: "Usually CD3+, CD4+, CD45RO+ with loss of CD7 and/or CD26; CD4:CD8 ratio increased; TCR clonality in blood/skin.",
    diff: "Erythrodermic mycosis fungoides: prior patch/plaque disease and less prominent blood involvement. Inflammatory erythroderma: no matching clonal aberrant T-cell population. T-PLL: prolymphocytes, TCL1.",
    molecular:
      "Clonal TCR rearrangement; genomic alterations overlap with MF, including copy-number changes and epigenetic regulator mutations.",
  },
  {
    name: "Aggressive NK-Cell Leukemia",
    group: "Aggressive NK-cell leukemia",
    profile:
      "Adults, often Asian; acute fever, hepatosplenomegaly, cytopenias, liver failure, coagulopathy, and hemophagocytic syndrome.",
    criteria:
      "Systemic aggressive NK-cell proliferation, usually EBV-associated, with leukemic blood/marrow involvement.",
    hist: "Medium-sized atypical lymphoid cells with azurophilic granules; sinusoidal/interstitial marrow and hepatic/splenic infiltration; necrosis and hemophagocytosis may occur.",
    ihc: "Surface CD3−, cytoplasmic CD3ε+, CD2+, CD56+, cytotoxic proteins+, usually CD16 variable; EBER positive in most cases.",
    diff: "Extranodal NK/T-cell lymphoma: localized extranodal destructive mass, often nasal, angiocentric/angiodestructive. NK-LGLL: indolent, usually EBV−. EBV+ T-cell lymphoma: surface CD3/T-cell lineage.",
    molecular:
      "Clonal EBV; JAK/STAT, RAS/MAPK, TET2, DDX3X, CREBBP and immune-checkpoint pathway alterations.",
  },
  {
    name: "Primary Cutaneous CD4-Positive Small/Medium T-Cell Lymphoproliferative Disorder",
    group: "Primary cutaneous T-cell lymphoproliferative disorder",
    profile:
      "Adults; solitary small nodule or plaque, commonly head/neck or upper trunk; usually localized and indolent.",
    criteria:
      "Solitary localized lesion with small/medium pleomorphic CD4+ T cells and no evidence of systemic lymphoma; exclude MF and primary cutaneous peripheral T-cell lymphoma.",
    hist: "Dense nodular or diffuse dermal infiltrate with small/medium pleomorphic lymphocytes, scattered larger cells, histiocytes and plasma cells; epidermis usually spared.",
    ihc: "CD3+, CD4+, often PD1+, ICOS+, BCL6 variable; CD8−, CD30 usually limited; retain at least some pan-T markers.",
    diff: "Primary cutaneous marginal zone lymphoma: B-cell follicles/plasma cells. TFH lymphoma: systemic nodes and broader TFH phenotype. Primary cutaneous PTCL-NOS: destructive, cytologically overt malignant infiltrate.",
    molecular:
      "Clonal TCR may be present but is not independently diagnostic; no defining recurrent molecular alteration.",
  },
  {
    name: "Primary Cutaneous Acral CD8-Positive T-Cell Lymphoproliferative Disorder",
    group: "Primary cutaneous cytotoxic T-cell proliferation",
    profile:
      "Adults; solitary slowly growing papule/nodule on ear, nose, or other acral site; indolent.",
    criteria:
      "Localized acral lesion with bland monomorphic CD8+ cytotoxic T cells and low proliferative activity.",
    hist: "Dense nodular dermal infiltrate of monomorphic small/medium cells; grenz zone may be present; epidermis and adnexa usually spared.",
    ihc: "CD3+, CD8+, TIA1+, often granzyme B variable; CD4−, CD30−; CD68 may be expressed; low Ki-67.",
    diff: "Primary cutaneous CD8+ aggressive epidermotropic lymphoma: epidermotropism, cytotoxic phenotype, high proliferation. Primary cutaneous ALCL: large cells, strong CD30.",
    molecular:
      "Clonal TCR rearrangement can occur; no defining genetic abnormality.",
  },
  {
    name: "Mycosis Fungoides",
    group: "Primary cutaneous T-cell lymphoma",
    profile:
      "Adults, often middle-aged/older; patches and plaques in sun-protected areas, progressing in some cases to tumors or erythroderma.",
    criteria:
      "Clinicopathologic diagnosis requiring persistent/progressive characteristic lesions and atypical epidermotropic T cells; early biopsies may be subtle.",
    hist: "Epidermotropism disproportionate to spongiosis, basal alignment, haloed atypical lymphocytes, Pautrier microabscesses in established lesions; band-like superficial dermal infiltrate.",
    ihc: "Usually CD3+, CD4+, CD45RO+; loss of CD7 and/or CD5; CD8+ variants occur; assess CD30 in large-cell transformation.",
    diff: "Inflammatory dermatitis: spongiosis and mixed reactive cells without convincing atypical epidermotropism. Sézary syndrome: erythroderma and significant blood disease. Primary cutaneous CD30+ LPD: cohesive CD30+ large cells.",
    molecular:
      "Clonal TCR supports but does not establish diagnosis; recurrent alterations include TP53, CDKN2A, and epigenetic regulators in advanced disease.",
  },
  {
    name: "Lymphomatoid Papulosis",
    group: "Primary cutaneous CD30-positive lymphoproliferative disorder",
    profile:
      "Adults; recurrent crops of papules/nodules, often ulcerating and spontaneously regressing; trunk/extremities.",
    criteria:
      "Recurrent self-healing papulonodular lesions with CD30+ atypical cells; clinical course is essential.",
    hist: "Type A: wedge-shaped mixed infiltrate with scattered/clustered large CD30+ cells. Type B: epidermotropic cerebriform cells. Type C: cohesive sheets of CD30+ large cells. Additional patterns include D/E and folliculotropic variants.",
    ihc: "Large atypical cells strongly CD30+; T-cell markers variable/lost; ALK usually negative; cytotoxic phenotype in some variants.",
    diff: "Primary cutaneous ALCL: persistent solitary tumor without spontaneous regression. MF with CD30+ transformation: established MF background. Systemic ALCL: systemic staging and clinical presentation.",
    molecular:
      "TCR clonality may be shared with associated MF/ALCL; no single molecular test separates entities.",
  },
  {
    name: "Primary Cutaneous Anaplastic Large Cell Lymphoma",
    group: "Primary cutaneous CD30-positive T-cell lymphoma",
    profile:
      "Adults, usually older; solitary or localized rapidly growing ulcerated skin tumor, usually without systemic disease.",
    criteria:
      "Primary skin-limited CD30+ large-cell lymphoma; exclude systemic ALCL and LyP by clinical staging and course.",
    hist: "Dermal/subcutaneous cohesive sheets or nodules of large anaplastic cells with hallmark horseshoe/kidney-shaped nuclei; epidermal ulceration common.",
    ihc: "Strong diffuse CD30 in >75% tumor cells; ALK−; T-cell markers variable; EMA usually negative; cytotoxic markers variable.",
    diff: "LyP: recurrent self-regressing lesions. Systemic ALK− ALCL: nodal/extranodal systemic disease. MF with large-cell transformation: known MF and residual MF phenotype.",
    molecular:
      "DUSP22 rearrangement occurs in a subset; no rearrangement is required for diagnosis.",
  },
  {
    name: "Subcutaneous Panniculitis-Like T-Cell Lymphoma",
    group: "Primary cutaneous cytotoxic T-cell lymphoma",
    profile:
      "Adults, often young-to-middle-aged; subcutaneous nodules/plaques on extremities/trunk, fever and hemophagocytic syndrome may occur.",
    criteria:
      "Lobular panniculitis-like infiltrate of atypical cytotoxic αβ T cells rimming adipocytes; exclude γδ phenotype.",
    hist: "Atypical lymphocytes rim adipocytes with lace-like growth; karyorrhexis, fat necrosis and histiocytes; epidermis/dermis often spared.",
    ihc: "CD3+, CD8+, βF1+, TIA1+, granzyme B+, perforin+; CD4−, CD56−, usually CD30−; EBER−.",
    diff: "Cutaneous γδ T-cell lymphoma: γδ TCR, often CD4−/CD8−, epidermal/dermal involvement and worse course. Lupus panniculitis: reactive lymphoid follicles, plasma cells, interface change.",
    molecular:
      "Clonal TCR; HAVCR2 mutations in a subset, particularly with hemophagocytic syndrome.",
  },
  {
    name: "Primary Cutaneous Gamma-Delta T-Cell Lymphoma",
    group: "Primary cutaneous cytotoxic γδ T-cell lymphoma",
    profile:
      "Adults; plaques, nodules, ulcerated tumors; may involve epidermis, dermis, and subcutis; systemic symptoms/HLH possible.",
    criteria:
      "Clonal mature γδ T-cell lymphoma with cytotoxic phenotype and primary skin presentation.",
    hist: "Epidermotropic, dermal, and/or panniculitic infiltrates; angioinvasion, necrosis and adipocyte rimming may occur.",
    ihc: "CD3+, γδ TCR+, TIA1+, granzyme B/perforin+; βF1−; CD4−, CD8 variable, CD56 variable; often CD5−.",
    diff: "S panniculitis-like αβ lymphoma: βF1+, CD8+, CD56− and restricted to subcutis. Primary cutaneous CD8+ aggressive epidermotropic lymphoma: αβ phenotype and marked epidermotropism.",
    molecular: "SETD2 mutations recurrent; clonal TCRγ/δ rearrangement.",
  },
  {
    name: "Primary Cutaneous CD8-Positive Aggressive Epidermotropic Cytotoxic T-Cell Lymphoma",
    group: "Aggressive primary cutaneous cytotoxic T-cell lymphoma",
    profile:
      "Adults; rapidly progressive multifocal plaques, tumors and ulcers; skin, mucosa, and sometimes lung/CNS involvement.",
    criteria:
      "Aggressive epidermotropic CD8+ cytotoxic T-cell neoplasm with destructive epidermal/adnexal involvement.",
    hist: "Marked pagetoid epidermotropism by atypical cells, often with keratinocyte necrosis, ulceration, adnexal involvement and angiocentricity.",
    ihc: "CD3+, CD8+, βF1+, TIA1+, granzyme B+, perforin+; CD4−, CD56 variable; high Ki-67.",
    diff: "Mycosis fungoides: less cytotoxic, slower course. γδ T-cell lymphoma: βF1−/γδ TCR+. S panniculitis-like lymphoma: predominantly subcutaneous adipocyte rimming.",
    molecular: "Clonal TCR; no single defining molecular alteration.",
  },
  {
    name: "Primary Cutaneous Peripheral T-Cell Lymphoma, NOS",
    group: "Primary cutaneous mature T-cell lymphoma, NOS",
    profile:
      "Adults; skin-limited or multifocal plaques/tumors, often rapidly progressive; diagnosis of exclusion.",
    criteria:
      "Malignant cutaneous T-cell lymphoma that does not meet criteria for a defined cutaneous T-cell entity.",
    hist: "Diffuse destructive dermal/subcutaneous infiltrate of atypical pleomorphic T cells; epidermotropism variable; exclude specific entities.",
    ihc: "Mature T-cell phenotype with variable CD4/CD8 and frequent antigen loss; CD30 variable; exclude ALK+ disease and EBV-associated NK/T lymphoma.",
    diff: "MF, primary cutaneous ALCL, γδ T-cell lymphoma, CD8+ aggressive epidermotropic lymphoma, and systemic PTCL involving skin.",
    molecular: "Clonal TCR supports neoplasia; no defining genetic signature.",
  },
  {
    name: "Indolent T-Cell Lymphoma of the Gastrointestinal Tract",
    group: "Indolent intestinal T-cell lymphoma",
    profile:
      "Adults; chronic diarrhea, abdominal pain, malabsorption; small bowel/colon; often long-standing.",
    criteria:
      "Clonal mature T-cell infiltrate confined predominantly to GI mucosa, without destructive mass-forming growth or systemic aggressive disease.",
    hist: "Monomorphic small/medium lymphocytes infiltrate lamina propria, often with preserved architecture and minimal epitheliotropism.",
    ihc: "CD3+, CD4+ or CD8+ (subset CD4−/CD8−), CD5 variable; CD56 usually negative; low Ki-67.",
    diff: "MEITL: monomorphic epitheliotropism and aggressive course. EATL: pleomorphic cells, inflammation, celiac association. Reactive inflammation: polytypic/non-clonal.",
    molecular:
      "Clonal TCR; recurrent STAT3-JAK1 pathway alterations in a subset.",
  },
  {
    name: "Indolent NK-Cell Lymphoproliferative Disorder of the Gastrointestinal Tract",
    group: "Indolent intestinal NK-cell proliferation",
    profile:
      "Adults; incidental or mild chronic GI symptoms; stomach, small bowel or colon.",
    criteria:
      "Persistent NK-cell proliferation in GI mucosa with indolent course; exclude EBV-associated aggressive NK/T-cell neoplasms.",
    hist: "Mucosal expansion by relatively bland medium-sized lymphocytes, usually without destructive mass or angioinvasion.",
    ihc: "Surface CD3−, cytoplasmic CD3ε+, CD56+, CD2+, cytotoxic markers+; EBER negative.",
    diff: "Extranodal NK/T-cell lymphoma: EBER+, angioinvasion/necrosis and destructive growth. Aggressive NK-cell leukemia: systemic leukemic disease.",
    molecular: "No TCR rearrangement; KIR restriction may support clonality.",
  },
  {
    name: "Enteropathy-Associated T-Cell Lymphoma",
    group: "Intestinal T-cell lymphoma associated with celiac disease",
    profile:
      "Adults, often older; small intestine, especially jejunum/ileum; abdominal pain, obstruction, perforation, malabsorption.",
    criteria:
      "Intestinal lymphoma in the setting of celiac disease/refractory celiac disease; integrate clinical enteropathy and morphology.",
    hist: "Pleomorphic medium/large cells with abundant pale cytoplasm, prominent inflammation, necrosis and destructive mucosal/submucosal growth; adjacent enteropathy may be present.",
    ihc: "Usually CD3+, CD7+, CD103+, cytotoxic markers+; CD4−, CD8 usually−, CD56−; aberrant phenotype common; EBER−.",
    diff: "MEITL: monomorphic epitheliotropic cells, often CD8+/CD56+. Intestinal PTCL-NOS: no celiac association. Indolent T-cell lymphoma: bland mucosal infiltrate.",
    molecular:
      "JAK/STAT and epigenetic alterations; associated celiac disease HLA-DQ2/DQ8 background.",
  },
  {
    name: "Monomorphic Epitheliotropic Intestinal T-Cell Lymphoma",
    group: "Aggressive intestinal cytotoxic T-cell lymphoma",
    profile:
      "Adults; often Asian; small intestine, multifocal ulcerated lesions, obstruction/perforation.",
    criteria:
      "Monomorphic epitheliotropic intestinal T-cell lymphoma, typically without celiac disease.",
    hist: "Monomorphic medium-sized cells with striking epitheliotropism, often forming nests within epithelium; mucosal ulceration and transmural invasion.",
    ihc: "CD3+, CD8+, CD56+, CD7+, CD5−; cytotoxic proteins+; CD4−; EBER−.",
    diff: "EATL: pleomorphic inflammatory background and celiac association. Indolent T-cell lymphoma: bland cells, low proliferation and no destructive epitheliotropism. NK-cell intestinal LPD: surface CD3−.",
    molecular:
      "SETD2, STAT5B, JAK3 and GNAI2 alterations reported; clonal TCR rearrangement.",
  },
  {
    name: "Intestinal T-Cell Lymphoma, NOS",
    group: "Intestinal mature T-cell lymphoma, NOS",
    profile:
      "Adults; intestinal mass, ulceration, pain, obstruction or perforation.",
    criteria:
      "Intestinal T-cell lymphoma that does not meet criteria for EATL, MEITL, or indolent T-cell lymphoma.",
    hist: "Variable pleomorphic or monomorphic infiltrate with destructive growth; morphology and phenotype lack defining pattern of another entity.",
    ihc: "Mature T-cell markers with variable CD4/CD8; cytotoxic markers variable; assess CD56, CD103, and EBER to exclude defined entities.",
    diff: "EATL, MEITL, indolent T-cell lymphoma, extranodal NK/T-cell lymphoma, and systemic PTCL involving bowel.",
    molecular:
      "Clonal TCR supports T-cell lineage; no defining molecular alteration.",
  },
  {
    name: "Hepatosplenic T-Cell Lymphoma",
    group: "Systemic cytotoxic T-cell lymphoma",
    profile:
      "Young adults, male predominance; hepatosplenomegaly, cytopenias, no or minimal lymphadenopathy; liver, spleen, marrow.",
    criteria:
      "Sinusoidal infiltrate in liver/spleen/marrow by clonal γδ or less often αβ T cells, typically with isochromosome 7q and/or trisomy 8.",
    hist: "Sinusoidal infiltration of red pulp, hepatic sinusoids and marrow; medium-sized cells with scant cytoplasm and inconspicuous nucleoli.",
    ihc: "CD2+, surface CD3+, CD7+, CD56 often+, TIA1+; usually CD4−/CD8−, CD5−, CD57−; βF1− in γδ cases.",
    diff: "T-LGLL: mature granular cells and indolent course. γδ T-cell lymphoma of skin: primary cutaneous disease. T-PLL: marked blood lymphocytosis and TCL1.",
    molecular: "i(7q), trisomy 8; SETD2 mutations common; clonal TCRγδ.",
  },
  {
    name: "ALK-Positive Anaplastic Large Cell Lymphoma",
    group: "Systemic CD30-positive T-cell lymphoma",
    profile:
      "Children and young adults, male predominance; lymph nodes, soft tissue, bone, skin, lung; systemic symptoms.",
    criteria:
      "Large-cell lymphoma with hallmark cells, strong uniform CD30 and ALK expression; demonstrate ALK rearrangement.",
    hist: "Sinusoidal, cohesive or diffuse sheets of large pleomorphic cells; hallmark cells with horseshoe/kidney-shaped nuclei and perinuclear eosinophilic Golgi region.",
    ihc: "Strong membranous/Golgi CD30; ALK+ (pattern reflects fusion partner); EMA often+; T-cell markers frequently lost; cytotoxic markers variable.",
    diff: "ALK-negative ALCL: ALK− but same CD30 pattern. DLBCL/CHL: B-cell markers or weak PAX5/CD15 pattern. ALK+ large B-cell lymphoma: plasma-cell phenotype and ALK expression with B lineage.",
    molecular:
      "ALK rearrangement, most commonly NPM1::ALK; other ALK fusion partners occur.",
  },
  {
    name: "ALK-Negative Anaplastic Large Cell Lymphoma",
    group: "Systemic CD30-positive T-cell lymphoma",
    profile:
      "Adults, median ~54 years; slight male predominance; nodes and extranodal sites; often advanced-stage disease and B symptoms.",
    criteria:
      "Large pleomorphic hallmark-cell lymphoma with uniform strong CD30; ALK protein and rearrangement absent; EBV negative.",
    hist: "Diffuse cohesive infiltrate of large pleomorphic cells, hallmark and wreath-like cells; DUSP22-rearranged cases may show doughnut cells and sheet-like growth.",
    ihc: "Strong uniform membranous/Golgi CD30; ALK−; T-cell antigens often lost; clusterin and MUM1 commonly+; cytotoxic markers variable; EBV−.",
    diff: "ALK+ ALCL: ALK expression/rearrangement. Primary cutaneous ALCL: skin-limited. CHL: CD15+, weak PAX5+, CD45−. PTCL-NOS: CD30 less uniformly strong.",
    molecular:
      "DUSP22 rearrangement (20–30%), TP63 rearrangement (~5%), JAK1/STAT3 alterations.",
  },
  {
    name: "Nodal T Follicular Helper Cell Lymphoma, Angioimmunoblastic Type",
    group: "Nodal TFH-cell lymphoma",
    profile:
      "Middle-aged/older adults; slight male predominance; generalized lymphadenopathy, B symptoms, hepatosplenomegaly, rash and immune dysregulation.",
    criteria:
      "Nodal lymphoma with TFH phenotype, polymorphous infiltrate, arborizing high endothelial venules and expanded FDC meshworks.",
    hist: "Polymorphous background with atypical clear-cell T cells, prominent arborizing HEVs and expanded CD21/CD23+ FDC networks; residual follicles often regressed.",
    ihc: "CD4+, at least 2 (preferably 3) TFH markers among PD1, ICOS, CXCL13, CD10, BCL6; often strong PD1/ICOS; CD7 loss common; EBV+ B immunoblasts may be numerous.",
    diff: "nTFHL follicular type: follicular growth pattern. nTFHL-NOS: lacks classic vascular/FDC pattern. PTCL-NOS: insufficient TFH phenotype. Reactive hyperplasia: no clonal atypical TFH population.",
    molecular:
      "RHOA G17V, TET2, DNMT3A, IDH2 R172; TET2/DNMT3A may be shared with clonal hematopoiesis.",
  },
  {
    name: "Nodal T Follicular Helper Cell Lymphoma, Follicular Type",
    group: "Nodal TFH-cell lymphoma",
    profile:
      "Adults; nodal disease, sometimes localized; less well characterized than angioimmunoblastic type.",
    criteria:
      "Nodal mature CD4+ T-cell lymphoma with TFH phenotype and follicular/nodular growth pattern.",
    hist: "Neoplastic TFH cells expand or colonize follicles; follicular dendritic cell meshworks are expanded; classic AITL-type arborizing vessels may be less conspicuous.",
    ihc: "CD4+, at least 2 TFH markers (PD1, ICOS, CXCL13, CD10, BCL6); CD10/BCL6 often highlight follicular localization; CD21/CD23 outline FDC networks.",
    diff: "nTFHL angioimmunoblastic type: polymorphous background, HEVs and extrafollicular FDC expansion. nTFHL-NOS: no follicular architecture. Follicular lymphoma: clonal B cells.",
    molecular:
      "RHOA, TET2, DNMT3A and other epigenetic alterations overlap with other nTFHLs.",
  },
  {
    name: "Nodal T Follicular Helper Cell Lymphoma, NOS",
    group: "Nodal TFH-cell lymphoma, NOS",
    profile:
      "Adults; nodal presentation, variable systemic symptoms; diagnosis after excluding AI and follicular types.",
    criteria:
      "Nodal CD4+ mature T-cell lymphoma expressing at least 2 TFH markers, without defining AI or follicular architecture.",
    hist: "Variable nodal effacement by atypical small/medium clear T cells; lacks the characteristic prominent HEVs/FDC expansion of AI type and follicular pattern of follicular type.",
    ihc: "CD4+, at least 2 TFH markers; PD1 and ICOS are common but less specific; assess broader panel and distribution.",
    diff: "nTFHL-AI and follicular type: defining architecture. PTCL-NOS: lacks convincing TFH phenotype. Reactive TFH expansion: preserved architecture and no convincing atypical clone.",
    molecular:
      "TET2/DNMT3A/RHOA alterations may support classification in context but are not individually diagnostic.",
  },
  {
    name: "Peripheral T-Cell Lymphoma, NOS",
    group: "Mature T-cell lymphoma, diagnosis of exclusion",
    profile:
      "Adults, usually older; generalized lymphadenopathy, extranodal disease and B symptoms.",
    criteria:
      "Mature clonal T-cell lymphoma that does not meet criteria for a defined T/NK entity; exclude TFH lymphoma, ALCL, EBV-associated and site-specific types.",
    hist: "Architectural effacement by polymorphous infiltrate of atypical small-to-large T cells; clear-cell, epithelioid, or inflammatory patterns may occur.",
    ihc: "Mature T-cell phenotype; CD4 more common than CD8; loss of CD5/CD7 frequent; CD30 variable; exclude ALK, TFH markers and EBER-defined entities.",
    diff: "nTFHL: TFH phenotype. ALCL: uniform strong CD30 and hallmark cells. ATLL: HTLV-1. EBV-positive nodal T/NK lymphoma: EBER+ tumor cells.",
    molecular:
      "Clonal TCR rearrangement; recurrent epigenetic and TCR/JAK-STAT pathway mutations, but no defining alteration.",
  },
  {
    name: "EBV-Positive Nodal T- and NK-Cell Lymphoma",
    group: "EBV-associated nodal T/NK-cell lymphoma",
    profile:
      "Adults, often older; generalized lymphadenopathy, systemic symptoms; usually no nasal primary.",
    criteria:
      "Nodal lymphoma with EBV-positive neoplastic T or NK cells; identify lineage and exclude extranodal NK/T-cell lymphoma and EBV-positive B-cell lymphoma.",
    hist: "Nodal effacement by polymorphous or diffuse infiltrate with atypical lymphoid cells; angiocentricity/necrosis may be variable; EBER labels tumor cells.",
    ihc: "EBER strongly positive in neoplastic cells; CD3 and TCR for T lineage; surface CD3−/cytoplasmic CD3ε+ and CD56 often+ for NK lineage; cytotoxic markers+.",
    diff: "Extranodal NK/T lymphoma: extranodal destructive nasal/other site and angioinvasion. EBV+ B-cell lymphoma: PAX5/CD20 lineage. PTCL-NOS: tumor cells EBER− or only background B cells positive.",
    molecular:
      "Clonal EBV; TCR rearrangement in T-cell cases; no single universal genetic lesion.",
  },
  {
    name: "Extranodal NK/T-Cell Lymphoma",
    group: "EBV-associated cytotoxic NK/T-cell lymphoma",
    profile:
      "Adults, more common in East Asia and Latin America; nasal cavity/upper aerodigestive tract, skin, GI tract and other extranodal sites; destructive mass.",
    criteria:
      "EBV-associated extranodal cytotoxic lymphoma with angiocentric/angiodestructive growth and tissue necrosis; demonstrate EBER in tumor cells.",
    hist: "Angiocentric and angiodestructive infiltrate with coagulative necrosis; atypical cells variable in size and may be obscured by inflammation.",
    ihc: "CD2+, cytoplasmic CD3ε+, surface CD3− in NK cases, CD56+, cytotoxic markers+; EBER+; T-cell cases may show surface CD3/TCR.",
    diff: "Aggressive NK-cell leukemia: systemic leukemic presentation. EBV+ nodal T/NK lymphoma: primarily nodal. EBV-positive B-cell lymphoma: B-cell markers. Infection: no clonal EBER+ tumor population.",
    molecular:
      "Clonal EBV; JAK/STAT, DDX3X, TP53 and epigenetic pathway alterations.",
  },
  {
    name: "Severe Mosquito Bite Allergy",
    group: "EBV-associated NK-cell lymphoproliferative disorder",
    profile:
      "Children/adolescents, particularly in East Asia; exaggerated local reactions to mosquito bites with fever, ulceration, systemic symptoms.",
    criteria:
      "Recurrent severe mosquito-bite reactions with EBV-infected NK-cell proliferation; evaluate for systemic CAEBV and lymphoma.",
    hist: "Dense infiltrate of atypical lymphocytes at bite sites, often with necrosis and angiocentricity; systemic organs may be involved.",
    ihc: "EBER+ NK cells; CD56+, cytoplasmic CD3ε+, surface CD3−; cytotoxic markers+.",
    diff: "Hydroa vacciniforme LPD: photosensitive vesiculopapules on sun-exposed skin. Extranodal NK/T lymphoma: destructive mass and persistent aggressive tumor. Reactive bite: no EBV+ clonal NK population.",
    molecular:
      "Clonal/oligoclonal EBV; germline susceptibility may contribute.",
  },
  {
    name: "Hydroa Vacciniforme Lymphoproliferative Disorder",
    group: "EBV-associated cutaneous T/NK-cell lymphoproliferative disorder",
    profile:
      "Children, often in Latin America/Asia; recurrent vesicles and crusted scars on sun-exposed skin, sometimes systemic disease.",
    criteria:
      "Photosensitivity-associated recurrent cutaneous lesions with EBV-positive cytotoxic T/NK-cell infiltrate; distinguish classic skin-limited from systemic disease.",
    hist: "Vesiculonecrotic epidermal lesions with atypical lymphocytes, interface change, angiocentricity and dermal infiltrates; scarring may occur.",
    ihc: "EBER+ atypical lymphocytes; CD8+ cytotoxic T cells common, or NK phenotype; CD56 variable; cytotoxic markers+.",
    diff: "Severe mosquito bite allergy: lesions at bite sites, not UV-exposed distribution. Extranodal NK/T lymphoma: destructive mass. Polymorphic reactive hydroa vacciniforme: lacks substantial EBV+ atypical clonal population.",
    molecular:
      "Clonal EBV; TCR rearrangement in T-cell cases; assess blood EBV DNA and systemic involvement.",
  },
  {
    name: "Systemic Chronic Active EBV Disease",
    group: "Systemic EBV-positive T/NK-cell lymphoproliferative disease",
    profile:
      "Children/adolescents or adults; persistent/recurrent mononucleosis-like illness, fever, hepatosplenomegaly, hepatitis, cytopenias, vasculitis and organ dysfunction.",
    criteria:
      "Persistent systemic symptoms with elevated EBV DNA and EBV-infected T or NK cells; establish infected lineage and exclude overt lymphoma.",
    hist: "Variable polymorphic infiltrates in liver, spleen, nodes, marrow and other organs; may progress to destructive lymphoma.",
    ihc: "EBER+ T or NK cells; lineage defined by surface CD3/TCR versus CD56/cytoplasmic CD3ε; cytotoxic markers often positive.",
    diff: "Systemic EBV+ T-cell lymphoma of childhood: overt destructive malignant disease. EBV+ nodal T/NK lymphoma: nodal tumor. Aggressive NK leukemia: acute leukemic presentation.",
    molecular:
      "High EBV DNA burden; clonal/oligoclonal EBV-infected T/NK populations; somatic mutations variable.",
  },
  {
    name: "Systemic EBV-Positive T-Cell Lymphoma of Childhood",
    group: "Aggressive EBV-associated systemic T-cell lymphoma",
    profile:
      "Children/adolescents, often after primary EBV infection; fulminant fever, hepatosplenomegaly, cytopenias, liver failure and HLH.",
    criteria:
      "Systemic clonal EBV-positive T-cell proliferation with destructive organ involvement and aggressive clinical course.",
    hist: "Diffuse infiltrates of atypical small-to-medium T cells in liver, spleen, marrow and nodes; hemophagocytosis and necrosis may be prominent.",
    ihc: "EBER+ neoplastic T cells; usually CD3+, often CD8+, cytotoxic markers+; CD56 variable; NK lineage must be excluded.",
    diff: "Systemic CAEBV: persistent inflammatory disease without overt destructive lymphoma. Aggressive NK-cell leukemia: NK phenotype. EBV+ nodal T/NK lymphoma: nodal-predominant adult disease.",
    molecular:
      "Clonal EBV; TCR rearrangement supports T-cell lineage; genomic abnormalities variable.",
  },
];
const lineageRows = [
  {
    lineage: "B-cell",
    morphology:
      "Small mature lymphocytes, centrocytes/centroblasts, immunoblasts, plasmablasts or plasma cells depending on entity; assess architecture, cytologic spectrum and plasmacytic differentiation.",
    markers:
      "CD20, PAX5, CD79a, CD19; OCT2/BOB1; surface/cytoplasmic immunoglobulin with light-chain restriction. Plasma cell differentiation: CD38, CD138, MUM1.",
    caveat:
      "Some aggressive B-cell neoplasms lose CD20/PAX5; plasmablastic neoplasms may be CD20− and require plasma-cell markers and EBER/HHV8 context.",
  },
  {
    lineage: "T-cell",
    morphology:
      "Variable small-to-large atypical lymphocytes; assess architectural pattern, epidermotropism, angioinvasion, cytotoxicity, TFH-like clear cells and background inflammatory cells.",
    markers:
      "Surface/cytoplasmic CD3, CD2, CD5, CD7; CD4/CD8; TCRβF1 or TCRγδ; TIA1, granzyme B, perforin; subset markers such as PD1, ICOS, CXCL13, BCL6.",
    caveat:
      "Loss of one or more pan-T antigens is common. CD3ε alone may be cytoplasmic in NK neoplasms; establish surface CD3/TCR and TCR gene rearrangement when needed.",
  },
  {
    lineage: "NK-cell",
    morphology:
      "Often cytotoxic medium-sized cells; assess sinusoidal, angiocentric/angiodestructive or mucosal infiltrates, necrosis and EBV association.",
    markers:
      "Surface CD3−, cytoplasmic CD3ε+, CD2+, CD56 often+, CD16 variable, cytotoxic proteins+; EBER in EBV-associated entities; KIR restriction may support clonality.",
    caveat:
      "NK cells lack rearranged TCR genes. CD56 is not lineage-specific; integrate CD3 localization, TCR phenotype, EBER and clinical distribution.",
  },
];
const alclRows = [
  {
    step: "1. Recognize the morphology",
    finding:
      "Large pleomorphic cells, hallmark cells with horseshoe/kidney-shaped nuclei, cohesive sheets or sinusoidal growth.",
    interpretation:
      "A compatible large-cell anaplastic pattern raises ALCL; morphology alone is insufficient.",
  },
  {
    step: "2. Confirm CD30 pattern",
    finding:
      "Strong, uniform membranous and Golgi staining in essentially all tumor cells.",
    interpretation:
      "Uniform strong CD30 is central; patchy CD30 favors other PTCLs or reactive activation.",
  },
  {
    step: "3. Determine ALK status",
    finding:
      "ALK IHC positive versus negative; confirm rearrangement if equivocal.",
    interpretation:
      "ALK-positive ALCL is a distinct entity; ALK-negative ALCL requires exclusion of systemic mimics.",
  },
  {
    step: "4. Establish lineage and exclude mimics",
    finding:
      "T-cell markers may be lost; assess EMA, clusterin, MUM1, cytotoxic markers, PAX5, CD15, EBER and myeloid/germ-cell markers as indicated.",
    interpretation:
      "Null phenotype does not exclude ALCL, but B-cell, Hodgkin, myeloid or germ-cell differentiation must be excluded.",
  },
  {
    step: "5. Integrate clinical distribution",
    finding:
      "Systemic nodal/extranodal disease versus skin-limited disease or breast implant-associated effusion/capsule.",
    interpretation:
      "Clinical staging separates systemic ALCL from primary cutaneous ALCL and breast implant-associated ALCL.",
  },
];
const tfhRows = [
  {
    entity: "Angioimmunoblastic type",
    architecture:
      "Polymorphous infiltrate; arborizing HEVs; expanded extrafollicular FDC meshworks; regressed follicles.",
    phenotype:
      "CD4+ atypical TFH cells; strong PD1/ICOS; ≥2 TFH markers, ideally ≥3; CD21/CD23 highlight FDC expansion.",
    clue: "Systemic immune dysregulation, EBV+ B immunoblasts, hypergammaglobulinemia, rash and generalized nodes.",
  },
  {
    entity: "Follicular type",
    architecture:
      "Neoplastic TFH cells expand/colonize follicles; follicular or nodular architecture with FDC meshworks.",
    phenotype:
      "CD4+ and ≥2 TFH markers; CD10/BCL6 often highlight follicular localization; assess PD1/ICOS/CXCL13.",
    clue: "Follicular growth pattern without the characteristic diffuse polymorphous/HEV-rich pattern of angioimmunoblastic type.",
  },
  {
    entity: "NOS",
    architecture:
      "Variable nodal effacement; neither diagnostic angioimmunoblastic architecture nor follicular pattern.",
    phenotype:
      "CD4+ with ≥2 TFH markers; PD1 and ICOS alone are less specific and require careful interpretation.",
    clue: "Diagnosis of exclusion after evaluating architecture, full TFH panel, clonality and molecular context.",
  },
];
const cutaneousRows = [
  {
    entity: "Mycosis fungoides",
    pattern:
      "Patch/plaque; epidermotropism disproportionate to spongiosis; basal alignment/Pautrier microabscesses.",
    phenotype: "Usually CD3+ CD4+; loss of CD7/CD5; CD8 variant possible.",
    discriminator:
      "Chronic patch/plaque course; assess blood involvement before classifying Sézary syndrome.",
  },
  {
    entity: "Sézary syndrome",
    pattern:
      "Erythroderma with cerebriform circulating cells; skin epidermotropism may resemble MF.",
    phenotype:
      "CD4+ with loss of CD7 and/or CD26; aberrant blood T-cell population and matching TCR clone.",
    discriminator:
      "Blood tumor burden and clonality are essential; not simply erythrodermic MF.",
  },
  {
    entity: "CD30-positive LPD: LyP",
    pattern:
      "Recurrent self-healing papules; variable type A–E histology with atypical CD30+ cells.",
    phenotype:
      "Large atypical cells strongly CD30+; T-cell markers variable; ALK usually negative.",
    discriminator:
      "Spontaneous regression and recurrent crops distinguish from persistent primary cutaneous ALCL.",
  },
  {
    entity: "Primary cutaneous ALCL",
    pattern:
      "Persistent solitary/localized ulcerated tumor; cohesive dermal sheets of large hallmark cells.",
    phenotype:
      "Strong CD30 in >75% tumor cells; ALK−; T-cell markers often reduced.",
    discriminator:
      "Skin-limited after staging; exclude systemic ALCL and LyP clinically.",
  },
  {
    entity: "CD4+ small/medium T-cell LPD",
    pattern:
      "Solitary dermal nodule; dense nodular infiltrate, epidermis usually spared.",
    phenotype:
      "CD3+ CD4+; PD1/ICOS and other TFH markers variable; low proliferation.",
    discriminator:
      "Localized indolent behavior; exclude nodal TFH lymphoma and systemic disease.",
  },
  {
    entity: "Acral CD8+ T-cell LPD",
    pattern:
      "Solitary acral papule/nodule; monomorphic dermal infiltrate, epidermis spared.",
    phenotype: "CD3+ CD8+ TIA1+; low Ki-67; CD30−.",
    discriminator:
      "Indolent localized lesion versus epidermotropic, highly proliferative aggressive CD8+ lymphoma.",
  },
  {
    entity: "Subcutaneous panniculitis-like T-cell lymphoma",
    pattern:
      "Lobular panniculitis with atypical lymphocytes rimming adipocytes.",
    phenotype: "CD3+ CD8+ βF1+ cytotoxic; CD56−; EBER−.",
    discriminator:
      "αβ phenotype and subcutaneous restriction distinguish from γδ lymphoma and lupus panniculitis.",
  },
  {
    entity: "Primary cutaneous γδ T-cell lymphoma",
    pattern:
      "Epidermal, dermal and/or panniculitic infiltrates; angioinvasion/necrosis may occur.",
    phenotype: "γδ TCR+, βF1−, cytotoxic; CD4− and CD8 variable.",
    discriminator:
      "Often broader skin compartment involvement and more aggressive behavior than αβ panniculitis-like lymphoma.",
  },
  {
    entity: "CD8+ aggressive epidermotropic cytotoxic lymphoma",
    pattern:
      "Marked pagetoid epidermotropism, keratinocyte necrosis, ulceration and adnexal involvement.",
    phenotype: "CD3+ CD8+ βF1+ cytotoxic; high Ki-67.",
    discriminator:
      "Rapid destructive course distinguishes from MF and indolent acral CD8+ LPD.",
  },
  {
    entity: "Primary cutaneous PTCL, NOS",
    pattern:
      "Destructive pleomorphic dermal/subcutaneous infiltrate not classifiable as a defined entity.",
    phenotype:
      "Mature T-cell phenotype, variable CD4/CD8, antigen loss and variable CD30.",
    discriminator:
      "Use only after excluding MF, CD30+ LPD, γδ, aggressive CD8+ and systemic lymphomas.",
  },
];
function toPoints(value: string) {
  return value
    .split(/(?<=[.!?])\s+|;\s+/)
    .map((x) => x.trim())
    .filter(Boolean);
}
function PointList({ value }: { value: string }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
      {toPoints(value).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
export default function TAndNKCellLymphomasPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const groups = useMemo(
    () => ["All", ...Array.from(new Set(entities.map((e) => e.group)))],
    [],
  );
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          `${e.name} ${e.group} ${e.profile} ${e.criteria} ${e.hist} ${e.ihc} ${e.diff} ${e.molecular}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const toggle = (n: string) =>
    setExpanded((v) => (v.includes(n) ? v.filter((x) => x !== n) : [...v, n]));
  const allOpen =
    filtered.length > 0 && filtered.every((e) => expanded.includes(e.name));
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          PathologyGPS · Hematopathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Mature T-Cell and NK-Cell Lymphomas
        </h1>
        <p className="mt-3 max-w-4xl text-slate-600">
          Integrated diagnostic reference for mature T-cell and NK-cell lymphoid
          proliferations. Diagnosis requires correlation of clinical
          distribution, tissue architecture, cytology, lineage, viral studies
          and molecular findings.
        </p>
      </header>
      <section className="mb-8 rounded-xl border border-slate-200 p-5">
        <h2 className="text-xl font-semibold">
          Lineage Assignment: B Cells vs T Cells vs NK Cells
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Use a panel and the location of CD3 staining; no single antigen should
          be interpreted in isolation.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-3">Lineage</th>
                <th className="p-3">Histologic assessment</th>
                <th className="p-3">Core immunophenotype</th>
                <th className="p-3">Diagnostic caveat</th>
              </tr>
            </thead>
            <tbody>
              {lineageRows.map((r) => (
                <tr key={r.lineage} className="border-b align-top">
                  <th className="p-3 font-semibold">{r.lineage}</th>
                  <td className="p-3">{r.morphology}</td>
                  <td className="p-3">{r.markers}</td>
                  <td className="p-3">{r.caveat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-8 rounded-xl border border-slate-200 p-5">
        <h2 className="text-xl font-semibold">
          Anaplastic Large Cell Lymphoma: Diagnostic Workflow
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-3">Step</th>
                <th className="p-3">What to assess</th>
                <th className="p-3">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {alclRows.map((r) => (
                <tr key={r.step} className="border-b align-top">
                  <th className="p-3">{r.step}</th>
                  <td className="p-3">{r.finding}</td>
                  <td className="p-3">{r.interpretation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-8 rounded-xl border border-slate-200 p-5">
        <h2 className="text-xl font-semibold">
          Nodal T-Follicular Helper Cell Lymphoma: Subtype Assignment
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-3">Subtype</th>
                <th className="p-3">Architecture</th>
                <th className="p-3">Immunophenotype</th>
                <th className="p-3">Diagnostic clue</th>
              </tr>
            </thead>
            <tbody>
              {tfhRows.map((r) => (
                <tr key={r.entity} className="border-b align-top">
                  <th className="p-3">{r.entity}</th>
                  <td className="p-3">{r.architecture}</td>
                  <td className="p-3">{r.phenotype}</td>
                  <td className="p-3">{r.clue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-8 rounded-xl border border-slate-200 p-5">
        <h2 className="text-xl font-semibold">
          Cutaneous T-Cell Lymphomas: Pattern-Based Diagnostic Approach
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="p-3">Entity</th>
                <th className="p-3">Histologic pattern</th>
                <th className="p-3">Key immunophenotype</th>
                <th className="p-3">Main discriminator</th>
              </tr>
            </thead>
            <tbody>
              {cutaneousRows.map((r) => (
                <tr key={r.entity} className="border-b align-top">
                  <th className="p-3">{r.entity}</th>
                  <td className="p-3">{r.pattern}</td>
                  <td className="p-3">{r.phenotype}</td>
                  <td className="p-3">{r.discriminator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Entity-by-Entity Diagnostic Reference
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {filtered.length} of {entities.length} entities
            </p>
          </div>
          <button
            onClick={() =>
              setExpanded(allOpen ? [] : filtered.map((e) => e.name))
            }
            className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-slate-50"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_280px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search entities, markers, morphology, or differential diagnoses…"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-sky-600"
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
        </div>
        <div className="mt-5 space-y-3">
          {filtered.map((e) => (
            <article
              key={e.name}
              className="overflow-hidden rounded-xl border border-slate-200"
            >
              <button
                onClick={() => toggle(e.name)}
                className="flex w-full items-start justify-between gap-4 p-4 text-left hover:bg-slate-50"
              >
                <span>
                  <span className="block font-semibold">{e.name}</span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-sky-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm text-slate-600">
                    {e.profile}
                  </span>
                </span>
                <span className="text-xl text-slate-500">
                  {expanded.includes(e.name) ? "−" : "+"}
                </span>
              </button>
              {expanded.includes(e.name) && (
                <div className="grid gap-4 border-t bg-white p-4 md:grid-cols-2">
                  <section>
                    <h3 className="font-semibold">
                      Essential Diagnostic Criteria
                    </h3>
                    <PointList value={e.criteria} />
                    <h3 className="mt-4 font-semibold">Histopathology</h3>
                    <PointList value={e.hist} />
                    <h3 className="mt-4 font-semibold">Molecular Pathology</h3>
                    <PointList value={e.molecular} />
                  </section>
                  <section>
                    <h3 className="font-semibold">Immunophenotype / IHC</h3>
                    <PointList value={e.ihc} />
                    <h3 className="mt-4 font-semibold">
                      Differential Diagnosis
                    </h3>
                    <PointList value={e.diff} />
                  </section>
                </div>
              )}
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="rounded-lg border border-dashed p-8 text-center text-sm text-slate-500">
              No entities match the current search.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
