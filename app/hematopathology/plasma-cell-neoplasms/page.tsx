"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
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
    name: "Cold Agglutinin Disease",
    group: "Monoclonal Gammopathies",
    clue: "Complement-mediated hemolysis with a monoclonal IgM cold agglutinin and a characteristic marrow B-cell clone, without overt lymphoma.",
    clinical: [
      "Typically presents in the late 60s; slight female predominance.",
      "Hemolytic anemia, acrocyanosis, Raynaud phenomenon, or livedo reticularis, often worsened by cold exposure.",
      "Usually a small serum IgM paraprotein, most often kappa-restricted.",
    ],
    criteria: [
      "Demonstrate chronic complement-mediated hemolytic anemia attributable to a cold-reactive autoantibody.",
      "Identify a monoclonal cold agglutinin, usually IgM, with clinically significant thermal amplitude.",
      "Exclude an associated infection or overt lymphoid malignancy; the marrow clone must not meet criteria for lymphoma.",
      "Bone marrow involvement is typically subtle and does not show an extramedullary lymphoma.",
    ],
    histology: [
      "Peripheral blood may show red-cell agglutination, anisocytosis, and polychromasia.",
      "Marrow contains small lymphoid cells in nodular aggregates and a sparse interstitial infiltrate.",
      "The lymphoid cells have round to slightly oval nuclei, condensed chromatin, and scant clear cytoplasm.",
      "Mature plasma cells are usually fewer than 5% and surround or are scattered between lymphoid aggregates.",
      "Paratrabecular growth, prominent lymphoplasmacytic differentiation, increased mast cells, and fibrosis are not typical.",
    ],
    ihc: [
      "The clonal B cells express CD19, CD20, PAX5, CD79a, CD22, and CD79b.",
      "Surface IgM and monotypic light chain are present, most often kappa.",
      "CD5 is positive in a subset; CD23, CD10, BCL6, MUM1, and cyclin D1 are generally negative.",
      "The accompanying plasma cells show IgM and the same light-chain restriction.",
    ],
    differential: [
      {
        name: "Lymphoplasmacytic lymphoma / Waldenström macroglobulinemia",
        distinction:
          "Usually shows a more substantial lymphoplasmacytic marrow infiltrate, often with plasmacytoid cells and MYD88 p.L265P; CAD lacks the typical LPL pattern.",
      },
      {
        name: "Secondary cold agglutinin syndrome",
        distinction:
          "Occurs with infection or an overt lymphoma; identify and classify the underlying condition rather than diagnosing primary CAD.",
      },
      {
        name: "Other small B-cell lymphomas",
        distinction:
          "CLL/SLL, marginal zone lymphoma, and mantle cell lymphoma have their own architectural and immunophenotypic signatures and may produce secondary cold agglutinins.",
      },
    ],
    molecular: [
      "MYD88 p.L265P is absent in typical CAD and helps distinguish it from lymphoplasmacytic lymphoma.",
      "Recurrent gains of chromosome 3 and mutations including KMT2D and CARD11 are reported but are not required for diagnosis.",
    ],
    pitfalls: [
      "Do not diagnose lymphoma solely from the presence of a clonal marrow B-cell population.",
      "A cold agglutinin associated with infection or overt lymphoma is a secondary syndrome, not primary CAD.",
    ],
  },
  {
    name: "IgM Monoclonal Gammopathy of Undetermined Significance",
    group: "Monoclonal Gammopathies",
    clue: "Serum IgM M protein below 3 g/dL, less than 10% marrow lymphoplasmacytic involvement, and no attributable disease manifestations.",
    clinical: [
      "Usually identified incidentally in older adults; incidence rises with age and is higher in men.",
      "No symptoms attributable to the clone at diagnosis.",
      "Potential IgM-related complications include neuropathy or Schnitzler syndrome, even without overt lymphoma.",
    ],
    criteria: [
      "Serum monoclonal IgM protein is less than 3 g/dL.",
      "Clonal lymphoplasmacytic cells comprise less than 10% of bone marrow cellularity.",
      "No anemia, constitutional symptoms, hyperviscosity, lymphadenopathy, or hepatosplenomegaly attributable to the lymphoproliferative clone.",
      "No other attributable end-organ injury or criteria for lymphoplasmacytic lymphoma, plasma cell myeloma, or another B-cell neoplasm.",
    ],
    histology: [
      "Marrow shows less than 10% involvement by clonal lymphoplasmacytic or plasma-cell-differentiated cells.",
      "The infiltrate may be subtle; quantify the combined clonal B-cell and plasma-cell component.",
      "A typical small B-cell phenotype and absence of a lymphoma-defining pattern are essential to classification.",
    ],
    ihc: [
      "B cells typically express surface IgM, CD19, CD20, and PAX5.",
      "CD5 may be positive or negative; CD10 and CD23 are generally negative.",
      "Plasma cells may show IgM and monotypic kappa or lambda light chain.",
    ],
    differential: [
      {
        name: "Lymphoplasmacytic lymphoma / Waldenström macroglobulinemia",
        distinction:
          "At least 10% marrow lymphoplasmacytic involvement or attributable clinical manifestations support LPL; MYD88 p.L265P is common but not specific.",
      },
      {
        name: "Cold agglutinin disease",
        distinction:
          "Requires clinically significant cold agglutinin-mediated hemolysis; CAD may have a small marrow clone but is defined by the hemolytic syndrome.",
      },
      {
        name: "IgM plasma cell myeloma",
        distinction:
          "Usually has a plasma-cell phenotype and myeloma-defining features; t(11;14) may be present, while MYD88 is generally absent.",
      },
    ],
    molecular: [
      "MYD88 p.L265P may be present at the MGUS stage and does not by itself establish LPL.",
      "Use molecular findings as supportive evidence in conjunction with marrow morphology, immunophenotype, and clinical criteria.",
    ],
    pitfalls: [
      "Do not equate any MYD88 mutation with Waldenström macroglobulinemia.",
      "Assess IgM-related organ manifestations separately; a small clone can cause clinically important paraprotein-mediated disease.",
    ],
  },
  {
    name: "Non-IgM Monoclonal Gammopathy of Undetermined Significance",
    group: "Monoclonal Gammopathies",
    clue: "Non-IgM M protein below 3 g/dL, fewer than 10% clonal marrow plasma cells, and no attributable myeloma-defining event.",
    clinical: [
      "Usually an incidental finding in adults over 50; prevalence increases with age and is higher in men.",
      "Most patients are asymptomatic and have no myeloma-related organ damage.",
      "May be associated with monoclonal gammopathy-related renal, neurologic, or dermatologic disorders.",
    ],
    criteria: [
      "Serum non-IgM M protein (usually IgG or IgA) is less than 3 g/dL.",
      "Clonal bone marrow plasma cells are less than 10% of total nucleated marrow cells.",
      "There is no attributable CRAB end-organ damage: hypercalcemia, renal impairment, anemia, or osteolytic bone disease.",
      "There is no other myeloma-defining event or biopsy-proven plasmacytoma.",
      "Light-chain MGUS requires an abnormal serum free light-chain ratio with an increased involved light chain, no heavy-chain expression on immunofixation, and no attributable end-organ damage.",
    ],
    histology: [
      "Marrow contains fewer than 10% mature clonal plasma cells.",
      "Plasma cells may be scattered or form small aggregates; extensive sheets or a substantial tumor mass should prompt evaluation for myeloma.",
      "Assess plasma-cell burden on the core biopsy as well as aspirate because focal disease may be underestimated in aspirates.",
    ],
    ihc: [
      "Plasma cells express CD38, CD138, and MUM1/IRF4.",
      "Clonality is established by kappa or lambda light-chain restriction using immunohistochemistry, in situ hybridization, or flow cytometry.",
      "Clonal plasma cells commonly show CD19 loss and dim or absent CD45.",
    ],
    differential: [
      {
        name: "Smoldering multiple myeloma",
        distinction:
          "Smoldering myeloma has 10–60% clonal marrow plasma cells and/or an M protein at least 3 g/dL, without myeloma-defining events.",
      },
      {
        name: "Active plasma cell myeloma",
        distinction:
          "Requires at least 10% clonal marrow plasma cells or a biopsy-proven plasmacytoma plus a myeloma-defining event.",
      },
      {
        name: "Monoclonal gammopathy of renal significance",
        distinction:
          "Renal biopsy demonstrates injury caused by the monoclonal immunoglobulin, even when the clone does not meet criteria for malignancy.",
      },
    ],
    molecular: [
      "Primary abnormalities include IGH translocations (including t(11;14), t(4;14), t(14;16), and t(14;20)) and hyperdiploidy.",
      "FISH may identify a plasma-cell clone but is not required to establish MGUS.",
    ],
    pitfalls: [
      "Do not classify a patient as MGUS until renal, neurologic, or other monoclonal immunoglobulin-mediated injury has been considered.",
      "A normal marrow aspirate does not exclude a small or focally distributed clonal plasma-cell population.",
    ],
  },
  {
    name: "Monoclonal Gammopathy of Renal Significance",
    group: "Monoclonal Immunoglobulin-Mediated Disorders",
    clue: "A small B-cell or plasma-cell clone produces a monoclonal immunoglobulin that causes biopsy-proven kidney injury without meeting criteria for overt malignancy.",
    clinical: [
      "Usually presents around the sixth decade, with male predominance; younger adults can be affected.",
      "Proteinuria, hematuria, acute or chronic renal insufficiency, hypertension, or hypocomplementemia.",
      "Some patients have systemic manifestations such as neuropathy, cardiomyopathy, purpura, or liver involvement.",
    ],
    criteria: [
      "Kidney biopsy demonstrates a lesion attributable to a monoclonal immunoglobulin or its fragment.",
      "The responsible B-cell or plasma-cell clone does not meet accepted criteria for a hematologic malignancy requiring treatment on tumor-burden grounds.",
      "Characterize the renal lesion by light microscopy, immunofluorescence, and electron microscopy, with amyloid typing when indicated.",
      "Identify the responsible clone with serum and urine electrophoresis/immunofixation, serum free light chains, and bone marrow or lymph-node evaluation.",
      "The source chapter lists proteinuria greater than 1 g/day and progressive acute or subacute kidney injury as essential clinical features; interpret these in the full clinical context.",
    ],
    histology: [
      "Renal morphology depends on the mechanism and subtype: immunoglobulin deposition, organized deposits, complement-mediated injury, or vascular occlusion.",
      "Common associated lesions include AL amyloidosis, monoclonal immunoglobulin deposition disease, light-chain proximal tubulopathy, proliferative glomerulonephritis with monoclonal immunoglobulin deposits, and cryoglobulinemic glomerulonephritis.",
      "The renal biopsy is the defining tissue examination; marrow findings may be minimal or absent.",
    ],
    ihc: [
      "Immunofluorescence should establish restriction to a single immunoglobulin heavy-chain class/subclass and/or light-chain type when present.",
      "Use kappa and lambda, IgG subclasses, IgA, IgM, and complement stains as indicated by the renal pattern.",
      "Correlate tissue restriction with the circulating paraprotein and the phenotype of the marrow or B-cell clone.",
    ],
    differential: [
      {
        name: "Plasma cell myeloma with cast nephropathy",
        distinction:
          "Cast nephropathy in a patient with a plasma-cell neoplasm is a myeloma-defining event, not MGRS.",
      },
      {
        name: "AL amyloidosis",
        distinction:
          "Shows Congo red-positive fibrillar deposits; MGRS is the broader clinicopathologic category and includes AL amyloidosis when the clone is below malignancy thresholds.",
      },
      {
        name: "Monoclonal immunoglobulin deposition disease",
        distinction:
          "A specific non-amyloid MGRS lesion with linear basement-membrane deposits and powdery electron-dense material.",
      },
      {
        name: "Non-monoclonal immune-complex or complement-mediated glomerulopathy",
        distinction:
          "Evaluate immunoglobulin restriction, ultrastructure, complement profile, and correlation with the circulating paraprotein.",
      },
    ],
    molecular: [
      "No single molecular alteration defines MGRS; molecular studies should target the identified B-cell or plasma-cell clone.",
      "FISH and mutation testing may help classify the clone and guide therapy but do not replace renal tissue diagnosis.",
    ],
    pitfalls: [
      "Do not dismiss a small clone as clinically insignificant when the monoclonal immunoglobulin is causing kidney injury.",
      "Do not label cast nephropathy associated with overt myeloma as MGRS.",
    ],
  },
  {
    name: "Immunoglobulin-Related Amyloidosis (AL Amyloidosis)",
    group: "Monoclonal Immunoglobulin-Mediated Disorders",
    clue: "Congo red-positive amyloid with apple-green birefringence, definitively typed as immunoglobulin-derived, in a patient with compatible organ dysfunction.",
    clinical: [
      "Usually affects older adults; systemic disease may involve multiple organs.",
      "Cardiac restrictive physiology, proteinuria/nephrotic syndrome, renal dysfunction, peripheral or autonomic neuropathy, hepatomegaly, or soft-tissue involvement.",
      "Macroglossia, periorbital purpura, and submandibular soft-tissue enlargement are characteristic but uncommon.",
    ],
    criteria: [
      "Demonstrate amyloid deposition in tissue by Congo red or an equivalent validated method, or identify typical amyloid fibrils by electron microscopy.",
      "Document organ dysfunction attributable to amyloid.",
      "Demonstrate a monoclonal protein in serum or urine or an abnormal serum free light-chain profile.",
      "Type the amyloid protein; laser microdissection followed by mass spectrometry is preferred when available.",
      "A plasma-cell clone or monoclonal protein alone is insufficient: prove that the tissue amyloid is AL rather than ATTR, AA, or another amyloid type.",
    ],
    histology: [
      "Amyloid is extracellular, amorphous, eosinophilic, and waxy, often involving vessel walls, basement membranes, and interstitium.",
      "Congo red stains deposits salmon-pink to red; polarized microscopy shows characteristic apple-green birefringence.",
      "Electron microscopy demonstrates randomly arranged, nonbranching fibrils approximately 9–12 nm in diameter.",
      "Marrow may show a small clonal plasma-cell population; amyloid is detectable in marrow in a subset of cases.",
      "Localized AL may show plasma cells adjacent to deposits; systemic disease may involve heart, kidney, liver, nerves, soft tissue, gastrointestinal tract, skin, or lymph nodes.",
    ],
    ihc: [
      "CD138 and MUM1 highlight plasma cells; kappa/lambda in situ hybridization or immunohistochemistry may demonstrate light-chain restriction.",
      "The clone is often lambda-restricted, but kappa-restricted AL also occurs.",
      "Immunohistochemical amyloid typing can be supportive, but equivocal or discordant results require mass-spectrometric typing.",
    ],
    differential: [
      {
        name: "Transthyretin amyloidosis (ATTR)",
        distinction:
          "Commonly involves the heart and/or nerves in older adults; tissue typing is essential because a coincidental monoclonal gammopathy does not prove AL.",
      },
      {
        name: "AA amyloidosis",
        distinction:
          "Usually occurs with chronic inflammatory disease or infection; type the deposits rather than inferring the type from clinical history.",
      },
      {
        name: "Monoclonal immunoglobulin deposition disease",
        distinction:
          "Non-amyloid deposits are Congo red negative and appear powdery and granular by electron microscopy rather than fibrillar.",
      },
      {
        name: "Incidental MGUS with non-AL amyloid",
        distinction:
          "A monoclonal protein may coexist with ATTR or another amyloid type; establish the deposited protein directly.",
      },
    ],
    molecular: [
      "There is no defining molecular test for AL amyloidosis.",
      "If hereditary amyloidosis is in the differential, evaluate relevant genes (including TTR and other amyloid-associated genes) rather than assuming a monoclonal protein establishes AL.",
    ],
    pitfalls: [
      "Never assign AL type solely from serum/urine monoclonal protein or marrow light-chain restriction.",
      "Congo red positivity establishes amyloid, not its protein type.",
      "A negative fat-pad or marrow biopsy does not exclude organ-limited or systemic AL amyloidosis.",
    ],
  },
  {
    name: "Monoclonal Immunoglobulin Deposition Disease",
    group: "Monoclonal Immunoglobulin-Mediated Disorders",
    clue: "Non-amyloid monoclonal immunoglobulin deposits, typically linear along renal basement membranes, with powdery electron-dense material.",
    clinical: [
      "Usually presents in middle-aged or older adults, with kidney involvement in nearly all cases.",
      "Proteinuria, hypertension, progressive renal insufficiency, or nephrotic syndrome.",
      "May involve heart, liver, lung, gastrointestinal tract, skin, or peripheral/autonomic nerves, especially with myeloma.",
    ],
    criteria: [
      "Demonstrate monoclonal immunoglobulin deposition in tissue.",
      "In renal disease, establish the deposit pattern by immunofluorescence and electron microscopy.",
      "Classify as light-chain deposition disease, light- and heavy-chain deposition disease, or heavy-chain deposition disease according to the deposited immunoglobulin.",
      "Exclude amyloid by Congo red and ultrastructural assessment.",
      "Correlate with a plasma-cell or, less commonly, B-cell clone; the clone may be small.",
    ],
    histology: [
      "Kidney commonly shows nodular glomerulosclerosis, often resembling diabetic nodular sclerosis.",
      "Immunofluorescence shows diffuse linear staining along glomerular and tubular basement membranes and vessel walls.",
      "Electron microscopy shows punctate, powdery, nonfibrillar electron-dense deposits along basement membranes.",
      "Unlike amyloid, deposits are not composed of randomly arranged fibrils.",
      "Extrarenal deposits may occur; inflammatory or lymphoplasmacytic infiltrates are not a characteristic renal feature.",
    ],
    ihc: [
      "Immunofluorescence demonstrates restriction to one light chain, one heavy chain, or a paired light/heavy chain pattern.",
      "Use IgG subclasses and heavy-chain stains as needed to define the deposited immunoglobulin.",
      "Correlate tissue immunoglobulin restriction with serum/urine immunofixation and the clonal population.",
    ],
    differential: [
      {
        name: "AL amyloidosis",
        distinction:
          "Congo red positive with fibrillar ultrastructure; MIDD is generally Congo red negative with powdery nonfibrillar deposits.",
      },
      {
        name: "Diabetic nodular glomerulosclerosis",
        distinction:
          "May resemble LCDD on light microscopy; monoclonal linear light-chain staining and powdery deposits support MIDD.",
      },
      {
        name: "Fibrillary or immunotactoid glomerulopathy",
        distinction:
          "Shows organized fibrillar or microtubular deposits rather than the nonorganized powdery deposits of MIDD.",
      },
      {
        name: "Light-chain proximal tubulopathy",
        distinction:
          "Predominantly involves proximal tubular epithelial cells, often with crystalline inclusions, rather than diffuse basement-membrane deposition.",
      },
    ],
    molecular: [
      "A t(11;14) may be identified in a substantial subset of cases associated with a plasma-cell neoplasm; it is supportive, not diagnostic.",
    ],
    pitfalls: [
      "Do not diagnose MIDD from nodular glomerulosclerosis alone.",
      "Distinguish nonfibrillar deposition disease from amyloid using Congo red and electron microscopy.",
    ],
  },
  {
    name: "Mu Heavy Chain Disease",
    group: "Heavy Chain Diseases",
    clue: "A rare small B-cell neoplasm producing truncated monoclonal mu heavy chains without associated light chains, often resembling CLL/SLL.",
    clinical: [
      "Typically occurs in older adults; both sexes may be affected.",
      "May present with lymphadenopathy, splenomegaly, cytopenias, or marrow involvement.",
      "A paraprotein may be detected, but the abnormal mu chain lacks associated light chains.",
    ],
    criteria: [
      "Demonstrate a monoclonal truncated IgM heavy chain without associated kappa or lambda light chain.",
      "Establish a clonal B-cell lymphoproliferative disorder and characterize its tissue distribution.",
      "Exclude conventional CLL/SLL, lymphoplasmacytic lymphoma, and other small B-cell lymphomas with intact immunoglobulin.",
    ],
    histology: [
      "The marrow and tissue infiltrate often resembles CLL/SLL, with small mature lymphocytes and occasional plasmacytoid differentiation.",
      "Cytoplasmic vacuoles or inclusions may be present in lymphoid or plasma-cell-differentiated cells.",
      "The morphology is not independently diagnostic; demonstration of the abnormal heavy chain is required.",
    ],
    ihc: [
      "B cells express pan-B-cell markers such as CD20 and PAX5; the phenotype may resemble CLL/SLL.",
      "Intracellular mu heavy chain is demonstrable without corresponding light-chain expression.",
      "Use flow cytometry and immunohistochemistry to exclude a conventional light-chain-producing B-cell clone.",
    ],
    differential: [
      {
        name: "CLL/SLL",
        distinction:
          "May have similar morphology and phenotype, but does not produce a truncated mu heavy chain without light chains.",
      },
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "Usually shows plasmacytoid differentiation and intact monoclonal immunoglobulin; MYD88 p.L265P is common in LPL.",
      },
      {
        name: "Other heavy chain diseases",
        distinction:
          "Gamma and alpha heavy chain diseases differ in heavy-chain class and typical clinicopathologic pattern.",
      },
    ],
    molecular: [
      "The abnormal heavy chain results from acquired immunoglobulin heavy-chain gene alterations, including deletions, insertions, and point mutations that remove portions of the variable and CH1 domains.",
    ],
    pitfalls: [
      "A monoclonal IgM paraprotein alone does not establish mu heavy chain disease; demonstrate the truncated heavy chain and absent light-chain association.",
    ],
  },
  {
    name: "Gamma Heavy Chain Disease",
    group: "Heavy Chain Diseases",
    clue: "A clonal B-cell disorder producing truncated gamma heavy chains without light chains; tissue morphology may mimic several indolent B-cell lymphomas.",
    clinical: [
      "Usually affects older adults, with a female predominance reported.",
      "May present with lymphadenopathy, hepatosplenomegaly, constitutional symptoms, or autoimmune disease.",
      "Some patients have an associated autoimmune disorder or an overt lymphoma-like clinical presentation.",
    ],
    criteria: [
      "Demonstrate a monoclonal truncated gamma heavy chain without associated light chains in serum, urine, or tissue.",
      "Establish a clonal B-cell lymphoproliferative disorder.",
      "Integrate morphology and immunophenotype because the tissue pattern may resemble lymphoplasmacytic lymphoma, marginal zone lymphoma, or another small B-cell lymphoma.",
    ],
    histology: [
      "The infiltrate is variable and may be lymphoplasmacytic, marginal-zone-like, or resemble another small B-cell lymphoma.",
      "Plasmacytoid cells and plasma cells may be present, but morphology alone cannot establish gamma heavy chain disease.",
      "The abnormal heavy-chain product is the defining feature.",
    ],
    ihc: [
      "B-cell markers identify the clonal population; plasma-cell markers highlight plasmacytic differentiation when present.",
      "Cytoplasmic or extracellular gamma heavy chain may be demonstrated without associated kappa or lambda light chain.",
      "A complete panel is needed to classify any coexisting lymphoma-like component.",
    ],
    differential: [
      {
        name: "Lymphoplasmacytic lymphoma",
        distinction:
          "Often has a similar lymphoplasmacytic pattern but produces intact immunoglobulin; MYD88 p.L265P supports LPL rather than gamma HCD.",
      },
      {
        name: "Splenic or extranodal marginal zone lymphoma",
        distinction:
          "Can show plasmacytic differentiation; demonstrate the abnormal truncated gamma chain to establish gamma HCD.",
      },
      {
        name: "Mu or alpha heavy chain disease",
        distinction:
          "Distinguished by the heavy-chain class and characteristic clinical/pathologic context.",
      },
    ],
    molecular: [
      "Truncating IGH alterations disrupt the variable and CH1 regions and permit secretion of unpaired gamma heavy chains.",
    ],
    pitfalls: [
      "Do not classify the case solely by its lymphoma-like morphology; heavy-chain analysis is essential.",
    ],
  },
  {
    name: "Alpha Heavy Chain Disease",
    group: "Heavy Chain Diseases",
    clue: "An IgA heavy-chain-producing B-cell neoplasm, classically involving the small intestine and associated with immunoproliferative small intestinal disease.",
    clinical: [
      "Typically affects young adults in regions where chronic intestinal infections are prevalent; historically reported more often in the Mediterranean, Middle East, and North Africa.",
      "Chronic diarrhea, malabsorption, weight loss, abdominal pain, and nutritional deficiency.",
      "Usually involves the small intestine, particularly the proximal small bowel; mesenteric nodes may also be involved.",
    ],
    criteria: [
      "Demonstrate a monoclonal truncated alpha heavy chain without associated light chains.",
      "Establish the characteristic intestinal B-cell lymphoproliferative process and correlate with the clinical syndrome.",
      "Exclude conventional extranodal marginal zone lymphoma/MALT lymphoma and other intestinal B-cell neoplasms.",
    ],
    histology: [
      "Intestinal mucosa shows a dense, often diffuse or nodular infiltrate of mature plasma cells and lymphoplasmacytoid cells in the lamina propria.",
      "Villous architecture may be distorted or blunted, with extension into deeper bowel wall or regional lymph nodes in advanced disease.",
      "The infiltrate may range from relatively mature plasmacytic proliferation to more atypical lymphoma-like disease.",
    ],
    ihc: [
      "The neoplastic cells show B-cell and plasma-cell differentiation markers, with cytoplasmic alpha heavy chain.",
      "Kappa and lambda light chains are absent from the abnormal heavy-chain-producing population.",
      "Phenotype overlaps with extranodal marginal zone lymphoma; correlate with the heavy-chain product.",
    ],
    differential: [
      {
        name: "Extranodal marginal zone lymphoma of MALT",
        distinction:
          "May involve small bowel and show plasmacytic differentiation, but does not produce the characteristic truncated alpha heavy chain without light chains.",
      },
      {
        name: "Reactive plasma-cell-rich enteritis",
        distinction:
          "Usually polytypic, lacks a clonal heavy-chain product, and does not show the characteristic persistent lymphoproliferative process.",
      },
      {
        name: "Gamma and mu heavy chain diseases",
        distinction:
          "Differ in immunoglobulin heavy-chain class and usual clinical distribution.",
      },
    ],
    molecular: [
      "Acquired IGH alterations truncate the alpha heavy chain, commonly removing the CH1 domain and preventing normal light-chain association.",
    ],
    pitfalls: [
      "Do not diagnose alpha HCD from intestinal plasmacytosis alone; demonstrate the abnormal alpha heavy chain and absence of associated light chains.",
    ],
  },
  {
    name: "Plasmacytoma",
    group: "Plasma Cell Neoplasms",
    clue: "A solitary clonal plasma-cell tumor in bone or soft tissue, with no systemic myeloma-defining disease and less than 10% clonal marrow plasma cells.",
    clinical: [
      "Solitary bone plasmacytoma usually occurs in adults in the fifth to sixth decades and involves the axial skeleton.",
      "Extramedullary plasmacytoma most often involves the upper aerodigestive tract, particularly the sinonasal region and upper airway.",
      "Presents as a localized mass; systemic symptoms or CRAB features should prompt evaluation for myeloma.",
    ],
    criteria: [
      "Biopsy demonstrates a clonal plasma-cell neoplasm in a single bone or extramedullary site.",
      "Bone marrow sampled away from the lesion contains less than 10% clonal plasma cells.",
      "Whole-body imaging and clinical evaluation show no additional bone or soft-tissue lesions.",
      "There is no attributable CRAB end-organ damage or other myeloma-defining event.",
      "If minimal clonal marrow involvement is present, distinguish solitary plasmacytoma with minimal marrow involvement from systemic myeloma.",
    ],
    histology: [
      "Tumor consists of sheets, nests, or diffuse infiltrates of plasma cells with eccentric nuclei, clock-face chromatin, basophilic cytoplasm, and perinuclear hof.",
      "Cytologic spectrum ranges from mature plasma cells to atypical, immature, plasmablastic, or pleomorphic forms.",
      "Extramedullary lesions may show more mature plasma-cell differentiation; amyloid deposition may be present.",
      "In bone, the lesion replaces marrow and may cause destructive lytic change.",
    ],
    ihc: [
      "Tumor cells express CD138, CD38, and MUM1/IRF4.",
      "Kappa or lambda restriction establishes clonality; RNA in situ hybridization may be useful when immunohistochemistry has high background.",
      "CD56 and cyclin D1 may be aberrantly expressed; CD19 is usually absent in neoplastic plasma cells.",
      "Exclude a B-cell lymphoma with plasmacytic differentiation using CD20, PAX5, and other markers guided by morphology.",
    ],
    differential: [
      {
        name: "Plasma cell myeloma",
        distinction:
          "Multifocal marrow disease, at least 10% clonal marrow plasma cells, multiple lesions, or a myeloma-defining event excludes solitary plasmacytoma.",
      },
      {
        name: "Plasmablastic lymphoma",
        distinction:
          "Often EBV-positive, highly proliferative, and MYC-rearranged, particularly in immunosuppressed patients; most plasmacytomas are EBV-negative.",
      },
      {
        name: "B-cell lymphoma with plasmacytic differentiation",
        distinction:
          "Retention of B-cell markers or an associated clonal B-cell component supports lymphoma rather than a pure plasma-cell neoplasm.",
      },
      {
        name: "Neuroendocrine neoplasm",
        distinction:
          "Can mimic plasmablastic plasma cells; use CD138, MUM1, light chains, and neuroendocrine markers in the morphologic context.",
      },
    ],
    molecular: [
      "Clonal IG gene rearrangement can support clonality when light-chain studies are inconclusive.",
      "FISH abnormalities may overlap with plasma cell myeloma; molecular findings do not replace systemic staging.",
    ],
    pitfalls: [
      "A biopsy diagnosis of plasmacytoma requires systemic evaluation to exclude multiple myeloma.",
      "Do not use a targeted lesion biopsy to estimate marrow plasma-cell burden; obtain a separate, non-targeted marrow sample.",
    ],
  },
  {
    name: "Plasma Cell Myeloma / Multiple Myeloma",
    group: "Plasma Cell Neoplasms",
    clue: "Clonal marrow plasma cells or a biopsy-proven plasmacytoma plus at least one myeloma-defining event (SLiM-CRAB).",
    clinical: [
      "Predominantly affects older adults, with a slight male predominance.",
      "Bone pain, pathologic fractures, anemia, renal impairment, hypercalcemia, recurrent infections, or incidental paraproteinemia.",
      "Most cases produce an IgG, IgA, or light-chain paraprotein; a small minority are nonsecretory.",
    ],
    criteria: [
      "Demonstrate at least 10% clonal plasma cells in bone marrow or a biopsy-proven bony/extramedullary plasmacytoma.",
      "In addition, demonstrate at least one myeloma-defining event (SLiM-CRAB):",
      "S — clonal bone marrow plasma cells at least 60%.",
      "Li — involved/uninvolved serum free light-chain ratio at least 100, with involved free light chain at least 100 mg/L.",
      "M — more than one focal lesion on MRI, each at least 5 mm.",
      "C — hypercalcemia attributable to the plasma-cell disorder.",
      "R — renal impairment attributable to the plasma-cell disorder.",
      "A — anemia attributable to the plasma-cell disorder.",
      "B — one or more osteolytic bone lesions on radiography, CT, or PET/CT; osteoporosis or compression fracture alone without lytic lesions is insufficient.",
      "Smoldering myeloma has 10–60% clonal marrow plasma cells and/or serum IgG/IgA M protein at least 3 g/dL or urinary monoclonal protein at least 500 mg/24 hours, without a myeloma-defining event.",
    ],
    histology: [
      "Marrow plasma cells range from mature forms with eccentric nuclei and clock-face chromatin to immature, plasmablastic, multinucleated, or pleomorphic forms.",
      "Growth patterns include interstitial, nodular, band-like, diffuse sheet-like, and nearly complete marrow replacement.",
      "A focal nodular aggregate or sheet of clonal plasma cells strongly supports myeloma over a small background population.",
      "Peripheral blood may show rouleaux; circulating plasma cells are seen in advanced disease and are prominent in plasma cell leukemia.",
      "Renal cast nephropathy shows intratubular eosinophilic casts, often fractured and associated with tubular injury and inflammation.",
    ],
    ihc: [
      "Plasma cells express CD138, CD38, and MUM1/IRF4; use these markers to quantify the infiltrate.",
      "Kappa or lambda restriction establishes clonality; RNA in situ hybridization may improve interpretation when background immunoglobulin is high.",
      "Neoplastic plasma cells commonly lose CD19 and show dim/absent CD45.",
      "CD56 is expressed in a majority but is not universal; CD117, CD20, CD28, CD33, or other aberrant markers may occur.",
      "Flow cytometry is useful for detecting small abnormal plasma-cell populations and measurable residual disease.",
    ],
    differential: [
      {
        name: "MGUS",
        distinction:
          "Less than 10% clonal marrow plasma cells, M protein below 3 g/dL, and no myeloma-defining event.",
      },
      {
        name: "Smoldering multiple myeloma",
        distinction:
          "Higher clonal burden (10–60% marrow plasma cells and/or specified M-protein burden) but no SLiM-CRAB event.",
      },
      {
        name: "Solitary plasmacytoma",
        distinction:
          "Single tissue or bone lesion, less than 10% clonal marrow plasma cells, no additional lesions, and no myeloma-defining event.",
      },
      {
        name: "Plasmablastic lymphoma",
        distinction:
          "Often EBV-positive and highly proliferative, with frequent MYC rearrangement; clinical setting and viral studies are important.",
      },
      {
        name: "Reactive plasmacytosis",
        distinction:
          "Usually polytypic, retains a normal plasma-cell phenotype, and lacks a destructive clonal infiltrate.",
      },
    ],
    molecular: [
      "Primary genetic groups include hyperdiploidy and IGH translocations, including t(11;14), t(4;14), t(14;16), and t(14;20).",
      "Important secondary abnormalities include gain/amplification of 1q, del(17p)/TP53, del(1p), del(13q), and MYC rearrangements.",
      "Perform plasma-cell-enriched FISH when possible; cytogenetic findings contribute to risk stratification and treatment planning.",
    ],
    pitfalls: [
      "Do not diagnose active myeloma from marrow plasma-cell percentage or M protein alone; a myeloma-defining event is required.",
      "Do not count osteoporosis or vertebral compression fracture alone as a lytic bone lesion.",
      "A hemodilute or focal aspirate can underestimate plasma-cell burden; correlate aspirate, core biopsy, imaging, and flow cytometry.",
    ],
  },
  {
    name: "Plasma Cell Neoplasms with Associated Paraneoplastic Syndromes",
    group: "Plasma Cell Neoplasms",
    clue: "Recognize the syndrome clinically: POEMS, TEMPI, and AESOP have distinct defining feature combinations and may have only a small plasma-cell clone.",
    clinical: [
      "POEMS: usually presents around age 50, with distal symmetric sensorimotor polyneuropathy, lambda-restricted IgA or IgG paraprotein, and often osteosclerotic lesions.",
      "TEMPI: typically affects adults in the fourth or fifth decade; telangiectasias, erythrocytosis with elevated erythropoietin, monoclonal gammopathy, perinephric fluid, and intrapulmonary shunting.",
      "AESOP: rare presentation of solitary plasmacytoma with adenopathy and an extensive overlying violaceous or erythematous vascular skin patch.",
    ],
    criteria: [
      "POEMS requires both mandatory criteria: polyneuropathy and a monoclonal plasma-cell proliferative disorder, usually lambda-restricted.",
      "POEMS additionally requires at least one major criterion (sclerotic bone lesions, Castleman disease, or elevated VEGF) and at least one minor criterion (organomegaly, extravascular volume overload, endocrinopathy, skin changes, papilledema, or thrombocytosis/polycythemia).",
      "TEMPI requires the characteristic major features: telangiectasias, elevated erythropoietin with erythrocytosis, monoclonal gammopathy, perinephric fluid collections, and intrapulmonary shunting; minor features may support an evolving presentation.",
      "AESOP is defined by adenopathy and an extensive skin patch overlying a plasmacytoma; confirm the underlying plasma-cell tumor and exclude mimics.",
      "A low marrow plasma-cell percentage does not exclude these syndromes.",
    ],
    histology: [
      "POEMS marrow often has fewer than 5% clonal plasma cells; osteosclerotic lesions show plasma cells within sclerotic marrow.",
      "TEMPI usually has no specific marrow morphology; erythroid hyperplasia and a small clonal plasma-cell population may be present.",
      "AESOP skin biopsy shows diffuse reactive vascular hyperplasia in the dermis, sometimes with dermal mucin; subcutis is typically spared.",
      "AESOP lymph nodes may show nonspecific sinusoidal lymphoplasmacytic infiltrates and endothelial proliferation.",
    ],
    ihc: [
      "Demonstrate plasma-cell differentiation with CD138, CD38, and MUM1/IRF4.",
      "Establish light-chain restriction; POEMS-associated clones are characteristically lambda-restricted.",
      "Skin and lymph-node findings in AESOP are often reactive and nonspecific; IHC is used to exclude a primary vascular or lymphoid neoplasm rather than to establish the syndrome.",
    ],
    differential: [
      {
        name: "Conventional plasma cell myeloma",
        distinction:
          "May share a plasma-cell clone but lacks the defining clinical constellation; POEMS often has low marrow burden and osteosclerotic rather than typical lytic lesions.",
      },
      {
        name: "CIDP and other neuropathies",
        distinction:
          "POEMS neuropathy is typically associated with a monoclonal plasma-cell disorder, elevated VEGF, and systemic features; evaluate the full criteria.",
      },
      {
        name: "Polycythemia vera or secondary erythrocytosis",
        distinction:
          "TEMPI requires the associated monoclonal gammopathy, telangiectasias, perinephric fluid, and intrapulmonary shunting; elevated erythropoietin favors secondary erythrocytosis.",
      },
      {
        name: "Reactive vascular proliferation / lymphoproliferative disorder",
        distinction:
          "In AESOP, the defining context is a plasmacytoma with an overlying extensive vascular skin patch; skin histology alone is not diagnostic.",
      },
    ],
    molecular: [
      "No single molecular alteration defines POEMS, TEMPI, or AESOP.",
      "Plasma-cell cytogenetic abnormalities may overlap with other plasma-cell neoplasms; VEGF is a clinically useful biomarker in POEMS rather than a defining tumor mutation.",
    ],
    pitfalls: [
      "Do not require extensive marrow plasmacytosis for POEMS or TEMPI.",
      "Do not diagnose POEMS from neuropathy plus an M protein alone; apply the mandatory, major, and minor criteria.",
      "AESOP skin biopsy is typically reactive; the underlying plasmacytoma and clinical distribution establish the syndrome.",
    ],
  },
];

const groups = [
  "All",
  "Monoclonal Gammopathies",
  "Monoclonal Immunoglobulin-Mediated Disorders",
  "Heavy Chain Diseases",
  "Plasma Cell Neoplasms",
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function PlasmaCellNeoplasmsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Non-IgM Monoclonal Gammopathy of Undetermined Significance",
    "Plasma Cell Myeloma / Multiple Myeloma",
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
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Plasma Cell Neoplasms and Other Diseases with Paraproteins
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for monoclonal gammopathies,
          monoclonal immunoglobulin-mediated organ injury, heavy chain diseases,
          plasma-cell tumors, and associated paraneoplastic syndromes. Emphasis
          is placed on quantitative diagnostic thresholds, tissue findings,
          clonality, and reciprocal differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start with the Clinical and Laboratory Category
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Identify the paraprotein",
              "Use serum and urine electrophoresis with immunofixation and serum free light chains. Determine heavy-chain class, light-chain type, and M-protein burden.",
            ],
            [
              "2. Determine whether the clone is clinically significant",
              "Separate asymptomatic precursor states from overt lymphoma or myeloma, and recognize organ injury caused by a small clone.",
            ],
            [
              "3. Apply the marrow thresholds",
              "MGUS: less than 10% clonal cells and no attributable end-organ injury. Smoldering myeloma: 10–60% clonal plasma cells and/or defined M-protein burden without a myeloma-defining event. Active myeloma requires SLiM-CRAB.",
            ],
            [
              "4. Let the affected tissue define deposition disease",
              "For renal lesions, integrate light microscopy, immunofluorescence, and electron microscopy. Distinguish Congo red-positive fibrils from nonfibrillar monoclonal immunoglobulin deposits.",
            ],
            [
              "5. Prove clonality and lineage",
              "Use plasma-cell markers, B-cell markers, light-chain restriction, and flow cytometry. A monoclonal protein alone does not identify the underlying neoplasm.",
            ],
            [
              "6. Recognize syndrome-level diagnoses",
              "POEMS, TEMPI, and AESOP are clinicopathologic syndromes; marrow plasma-cell burden may be low and tissue findings may be nonspecific.",
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
          <strong>Critical principle:</strong> A monoclonal gammopathy is not
          synonymous with myeloma or lymphoma. The diagnosis depends on the
          clone, its burden, the paraprotein, tissue injury, and the presence or
          absence of myeloma-defining events.
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
          <h2 className="font-bold text-slate-900">
            High-Yield Diagnostic Thresholds
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            Use these thresholds with the full clinical and laboratory criteria;
            none should be interpreted in isolation.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">M-protein / marrow</th>
                <th className="px-4 py-3">Required clinical status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-semibold">IgM MGUS</td>
                <td className="px-4 py-3">
                  IgM &lt; 3 g/dL; marrow lymphoplasmacytic cells &lt; 10%
                </td>
                <td className="px-4 py-3">
                  No attributable symptoms, cytopenias, hyperviscosity,
                  adenopathy, or organomegaly
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Non-IgM MGUS</td>
                <td className="px-4 py-3">
                  M protein &lt; 3 g/dL; clonal marrow plasma cells &lt; 10%
                </td>
                <td className="px-4 py-3">
                  No attributable CRAB feature or myeloma-defining event
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Smoldering myeloma</td>
                <td className="px-4 py-3">
                  Marrow plasma cells 10–60%, and/or IgG/IgA M protein ≥ 3 g/dL
                  or urine monoclonal protein ≥ 500 mg/24 h
                </td>
                <td className="px-4 py-3">
                  No SLiM-CRAB myeloma-defining event
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Active myeloma</td>
                <td className="px-4 py-3">
                  ≥ 10% clonal marrow plasma cells or biopsy-proven plasmacytoma
                </td>
                <td className="px-4 py-3">
                  At least one SLiM-CRAB myeloma-defining event
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Solitary plasmacytoma
                </td>
                <td className="px-4 py-3">
                  Single lesion; marrow clonal plasma cells &lt; 10%
                </td>
                <td className="px-4 py-3">
                  No additional lesions or myeloma-defining event
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="plasma-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and diagnostic criteria
          </label>
          <input
            id="plasma-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: SLiM-CRAB, Congo red, MYD88, IgM, lambda..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="plasma-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="plasma-group"
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
        <span>{filtered.length} diagnoses / syndromes</span>
        <span>
          Expand a diagnosis for clinical profile, criteria, morphology, IHC,
          and differentials.
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
                    Key clue: {e.clue}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Clinical Profile">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.clinical.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.criteria.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Histopathology">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      {e.molecular && (
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      )}
                    </div>
                    <div>
                      <Section title="Immunophenotype / Immunohistochemistry">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
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
                  {e.pitfalls && (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
                        {e.pitfalls.map((x, j) => (
                          <li key={j}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
        PathologyGPS · Diagnostic reference for hematopathology. Interpret
        monoclonal protein studies, tissue deposits, immunophenotype, and
        molecular findings in conjunction with clinical findings and imaging.
      </footer>
    </main>
  );
}
