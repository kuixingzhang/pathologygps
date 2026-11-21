"use client";
import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  lineage: string;
  site: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
};
const entities: Entity[] = [
  {
    name: "Cutaneous mastocytosis",
    lineage: "Myeloid / mast cell",
    site: "Maculopapular disease favors trunk and proximal extremities; palms, soles, and central face are usually spared. Diffuse cutaneous mastocytosis involves the entire skin surface; mastocytomas may occur anywhere, especially trunk and scalp.",
    clinical: [
      "Childhood-onset disease is usually skin-limited; most adult-onset cutaneous mastocytosis is associated with systemic mastocytosis.",
      "Lesions may urticate, redden, swell, itch, or blister after stroking (Darier sign) or temperature change.",
    ],
    criteria: [
      "Typical cutaneous lesions with increased dermal mast cells, preferably confirmed by KIT and tryptase.",
      "Distinguish cutaneous from systemic mastocytosis clinically; skin histology alone cannot establish or exclude systemic involvement.",
    ],
    histology: [
      "Mast cells are scattered or clustered around vessels and adnexa, or form small/band-like upper-dermal infiltrates in maculopapular disease.",
      "Diffuse cutaneous disease shows a marked increase in mast cells; mastocytoma forms nodular aggregates.",
      "Cells may appear inconspicuous and histiocytoid on H&E; Giemsa/toluidine blue highlights metachromatic granules.",
    ],
    ihc: [
      "Mast cells coexpress tryptase and KIT (CD117).",
      "CD2, CD25, and/or CD30 aberrancy supports clonality but may be absent in skin, particularly in adults.",
    ],
    molecular: [
      "Activating KIT mutations are characteristic; KIT p.D816V occurs in >90% of adult cases and approximately 35–40% of pediatric cases.",
      "KIT mutation testing in lesional skin supports diagnosis; adult evaluation generally requires bone marrow assessment when mastocytosis is suspected.",
    ],
    differential: [
      [
        "Reactive mast-cell increase",
        "Basal hyperpigmentation, interstitial distribution, and clusters of ≥3 mast cells favor maculopapular cutaneous mastocytosis.",
      ],
      [
        "Mast cell sarcoma",
        "Requires a destructive mass of highly atypical mast cells, not simply pleomorphic/promastocyte forms in childhood cutaneous disease.",
      ],
    ],
  },
  {
    name: "Mast cell sarcoma",
    lineage: "Myeloid / mast cell",
    site: "Can arise in any organ; bone and gastrointestinal tract are most often involved. Primary cutaneous and oral mucosal cases are exceedingly rare.",
    clinical: [
      "Usually arises de novo; adults predominate, but children can be affected.",
      "May present as a destructive mass with mast-cell mediator symptoms and increased serum tryptase.",
    ],
    criteria: [
      "Localized infiltrative, destructive tumor composed of highly atypical mast cells expressing tryptase and usually KIT.",
      "Criteria for systemic mastocytosis are not fulfilled.",
    ],
    histology: [
      "Destructive sheets of immature mast cells with medium-to-large pleomorphic or epithelioid cells and oval/bilobed nuclei.",
      "Multinucleated cells, mitotic activity, eosinophils, and metachromatic cytoplasmic granules may be present.",
    ],
    ihc: [
      "Tryptase is positive; KIT (CD117) is positive in most cases.",
      "CD2, CD25, and CD30 are variable; CD68, CD45, CD43, and MITF may be nonspecific pitfalls.",
    ],
    molecular: [
      "KIT p.D816V is uncommon; approximately half of reported cases are KIT wild type.",
      "Whole-gene KIT sequencing is recommended because non-D816V mutations may occur.",
    ],
    differential: [
      [
        "ALK-negative anaplastic large cell lymphoma",
        "Use a broad lineage panel; mast-cell tryptase and KIT support mast-cell differentiation.",
      ],
      [
        "Histiocytic/myeloid neoplasm, melanoma, carcinoma, sarcoma",
        "Integrate lineage-specific markers with morphology; CD68 alone is not specific.",
      ],
    ],
  },
  {
    name: "Cutaneous involvement by myeloid neoplasms / myeloid sarcoma",
    lineage: "Myeloid",
    site: "Most often trunk, extremities, and head/neck; dermis and subcutis are involved.",
    clinical: [
      "May occur with AML, MDS, MPN, or MDS/MPN, including CMML; skin lesions can precede AML in approximately 10% of myeloid sarcomas.",
      "Violaceous or hemorrhagic papules, plaques, or nodules; infants may show blueberry-muffin lesions.",
    ],
    criteria: [
      "Architectural effacement by a tumor of myeloid blasts, with or without maturation, defines myeloid sarcoma regardless of blast percentage.",
      "Without architectural effacement, use a descriptive diagnosis of cutaneous involvement by a myeloid neoplasm; if blasts are ≥20%, diagnose AML involving skin.",
    ],
    histology: [
      "Myeloid sarcoma forms diffuse sheets in dermis/subcutis, often sparing epidermis with a grenz zone.",
      "Blasts are medium to large with fine chromatin and inconspicuous nucleoli; monocytic differentiation may show folded nuclei/promonocytes.",
      "Non-mass-forming infiltrates may be perivascular, periadnexal, patchy nodular, or interstitial.",
    ],
    ihc: [
      "Common markers: CD13, CD33, CD43, CD68, and MPO.",
      "Monocytic differentiation often expresses CD4, CD11c, CD14 (variable), CD56, and lysozyme; CD34 and KIT are often absent.",
      "Granulocytic blasts may express CD34 and KIT; cytoplasmic NPM1 can indicate an NPM1 mutation.",
    ],
    molecular: [
      "No skin-specific molecular test is required; perform systemic cytogenetic and molecular classification for therapy.",
      "Shared AML/MS abnormalities include monosomy 7, trisomy 8, KMT2A/11q23 abnormalities, and NPM1, FLT3, or RAS-pathway mutations.",
    ],
    differential: [
      [
        "Blastic plasmacytoid dendritic cell neoplasm",
        "CD4, CD56, CD123, CD303, TCL1, and TCF4; MPO and lysozyme are absent.",
      ],
      [
        "Large-cell lymphoma",
        "Expresses lineage-defining lymphoid markers such as CD3, CD19, or CD20.",
      ],
      [
        "Sweet syndrome / inflammatory infiltrate",
        "Maturing or mature cells without architectural effacement or blast excess require clinical and hematologic correlation.",
      ],
    ],
  },
  {
    name: "Mature plasmacytoid dendritic cell proliferation associated with myeloid neoplasm",
    lineage: "Plasmacytoid dendritic cell",
    site: "Cutaneous lesions may accompany CMML and other myeloid neoplasms; skin, blood, and bone marrow correlation is important.",
    clinical: [
      "Occurs in the setting of an underlying myeloid neoplasm, particularly CMML.",
      "May appear as papules, nodules, or plaques; can be scattered or nodular.",
    ],
    criteria: [
      "Recognize a mature pDC proliferation in association with a myeloid neoplasm rather than automatically classifying it as BPDCN.",
    ],
    histology: [
      "pDCs may be scattered singly or form nodular aggregates within a myeloid infiltrate.",
    ],
    ihc: [
      "Use a pDC panel including CD123, CD303, TCL1, and TCF4, interpreted with morphology and clinical context.",
    ],
    molecular: [
      "The supplied source does not specify a defining molecular alteration for this proliferation.",
    ],
    differential: [
      [
        "Blastic plasmacytoid dendritic cell neoplasm",
        "BPDCN is a blastic neoplasm; correlate cytology, phenotype, and underlying myeloid disease.",
      ],
      [
        "Reactive pDC infiltrate",
        "Interpret distribution and density in the context of the associated myeloid neoplasm.",
      ],
    ],
  },
  {
    name: "Blastic plasmacytoid dendritic cell neoplasm (BPDCN)",
    lineage: "Plasmacytoid dendritic cell",
    site: "Skin is a frequent presenting site; lesions may be multifocal and can precede or accompany bone marrow/blood involvement.",
    clinical: [
      "Typically presents with bruise-like or violaceous papules, plaques, and nodules.",
      "Systemic staging is essential because skin disease may be the first manifestation.",
    ],
    criteria: [
      "Blastic neoplasm with a plasmacytoid dendritic cell phenotype; establish lineage with a coordinated marker panel.",
    ],
    histology: [
      "Dense dermal and/or subcutaneous infiltrate of monomorphic blastic cells; epidermis is often spared by a grenz zone.",
    ],
    ihc: [
      "Typical phenotype includes CD4, CD56, CD123, CD303, TCL1, and TCF4.",
      "MPO and lysozyme are absent, helping separate BPDCN from myeloid sarcoma.",
    ],
    molecular: [
      "The supplied excerpt emphasizes immunophenotypic classification and does not identify a single defining molecular alteration.",
    ],
    differential: [
      [
        "Myeloid sarcoma",
        "Usually expresses MPO and/or lysozyme; monocytic lesions often express CD68 and CD33.",
      ],
      [
        "Mature pDC proliferation",
        "Occurs with a myeloid neoplasm and lacks the overt blastic morphology of BPDCN.",
      ],
    ],
  },
  {
    name: "Langerhans cell histiocytosis (LCH)",
    lineage: "Langerhans cell / dendritic",
    site: "Skin involvement commonly affects scalp, flexures, trunk, and intertriginous areas; disease may be single-system or multisystem.",
    clinical: [
      "Occurs in infants, children, and adults; clinical behavior depends on extent and organs involved.",
      "Cutaneous lesions may be papules, crusted plaques, or ulcerated lesions.",
    ],
    criteria: [
      "Large grooved or convoluted epithelioid cells in the appropriate context, expressing CD1a and CD207 (langerin).",
      "Assess extent of disease; cutaneous biopsy does not establish whether disease is skin-limited.",
    ],
    histology: [
      "Large round-to-oval cells with grooved/folded nuclei and moderate eosinophilic cytoplasm.",
      "Upper dermis is expanded, often with epidermotropism, scale-crust, or ulceration.",
      "Eosinophils, lymphocytes, multinucleated cells, and occasional neutrophils/plasma cells form the inflammatory background.",
    ],
    ihc: [
      "CD1a and CD207 (langerin) are defining; S100 is nuclear and cytoplasmic.",
      "CD68 shows a Golgi-dot pattern; Ki-67 is usually low (<10% in cited double-stain studies).",
    ],
    molecular: [
      "MAPK-pathway alterations are common; BRAF p.V600E is clinically relevant and associated with increased relapse risk in the source.",
      "Sensitive assays may be needed for low variant allele fractions; BRAF and other MAPK alterations may guide targeted therapy.",
    ],
    differential: [
      [
        "Reactive CD1a-positive dendritic-cell hyperplasia",
        "Branched cells, tight perivascular distribution, and low/negative CD207 favor reactive hyperplasia.",
      ],
      [
        "Juvenile xanthogranuloma / ECD / ALK-positive histiocytosis",
        "Use macrophage-lineage markers and molecular testing; these are usually CD1a/CD207 negative.",
      ],
      [
        "Langerhans cell sarcoma",
        "Moderate-to-severe atypia, prominent nucleoli, atypical mitoses, and increased proliferation.",
      ],
    ],
  },
  {
    name: "Xanthelasma",
    lineage: "Histiocytic / macrophage",
    site: "Usually eyelids, especially medial canthi; may be solitary or multiple.",
    clinical: [
      "Yellow-orange soft papules or plaques; may be associated with dyslipidemia but can occur with normal lipid levels.",
    ],
    criteria: [
      "Clinical yellow plaque with dermal lipid-laden macrophages; correlate with lipid status when appropriate.",
    ],
    histology: [
      "Superficial dermal sheets or clusters of foamy histiocytes, often with accompanying inflammatory cells.",
    ],
    ihc: [
      "Macrophage markers such as CD68 and CD163 support histiocytic lineage; no unique immunophenotype is specified.",
    ],
    molecular: [
      "No diagnostic molecular alteration is established in the supplied source.",
    ],
    differential: [
      [
        "Juvenile/adult xanthogranuloma",
        "Look for Touton giant cells and a more developed xanthogranulomatous infiltrate.",
      ],
      [
        "Erdheim–Chester disease",
        "Consider systemic, often periocular, disease and characteristic clinical/radiologic findings.",
      ],
    ],
  },
  {
    name: "Juvenile xanthogranuloma (JXG)",
    lineage: "Histiocytic / macrophage",
    site: "Most often head and neck, followed by trunk and extremities; may be solitary or multiple.",
    clinical: [
      "Usually affects infants and young children; adult-onset lesions also occur.",
      "Typical lesions are yellow-orange to red-brown papules or nodules.",
    ],
    criteria: [
      "Bland xanthogranulomatous histiocytic proliferation in the appropriate clinical setting.",
    ],
    histology: [
      "Early lesions may be monomorphic histiocytes; mature lesions show foamy histiocytes and Touton-type giant cells.",
      "Mixed inflammatory cells, including lymphocytes and eosinophils, may be present.",
    ],
    ihc: [
      "CD68, CD163, and factor XIIIa are typically positive; CD1a and CD207 are negative.",
      "S100 is usually negative or only focal.",
    ],
    molecular: [
      "MAPK-pathway alterations have been reported in the broader xanthogranuloma family; no routine molecular test is required in typical cutaneous JXG.",
    ],
    differential: [
      [
        "LCH",
        "LCH is CD1a+/CD207+ and shows grooved Langerhans cells with eosinophils.",
      ],
      [
        "ALK-positive histiocytosis",
        "ALK immunoreactivity and ALK rearrangement support that entity.",
      ],
      [
        "ECD / adult xanthogranuloma",
        "Use clinical distribution and systemic/radiologic findings.",
      ],
    ],
  },
  {
    name: "Reticulohistiocytosis",
    lineage: "Histiocytic / macrophage",
    site: "Skin and joints; multicentric disease typically involves hands, face, and periarticular skin.",
    clinical: [
      "Includes solitary, multifocal, and multicentric forms; multicentric reticulohistiocytosis is associated with destructive polyarthritis.",
    ],
    criteria: [
      "Epithelioid histiocytes with abundant eosinophilic, ground-glass cytoplasm; correlate with joint and systemic findings.",
    ],
    histology: [
      "Sheets or nodules of large histiocytes with abundant finely granular eosinophilic ground-glass cytoplasm.",
      "Multinucleated giant cells may be present; nuclei are often vesicular.",
    ],
    ihc: [
      "CD68 and CD163 are positive; factor XIIIa is often positive.",
      "CD1a is negative; S100 is usually negative or rarely positive.",
    ],
    molecular: [
      "No recurrent diagnostic molecular alteration is established in the supplied source.",
    ],
    differential: [
      [
        "Rosai–Dorfman disease",
        "RDD shows emperipolesis and S100/OCT2 expression.",
      ],
      [
        "ALK-positive histiocytosis",
        "ALK positivity/rearrangement distinguishes this entity.",
      ],
      ["LCH", "LCH expresses CD1a and CD207."],
    ],
  },
  {
    name: "Rosai–Dorfman disease (RDD)",
    lineage: "Histiocytic / macrophage",
    site: "Classically cervical lymph nodes; extranodal disease may involve skin, upper respiratory tract, orbit, and other organs. Cutaneous RDD may be skin-limited.",
    clinical: [
      "May present as solitary or multiple red-brown to yellowish papules, plaques, or nodules.",
      "Systemic disease often presents with painless lymphadenopathy; cutaneous-only cases are recognized.",
    ],
    criteria: [
      "Histiocytes with emperipolesis and a characteristic S100-positive macrophage phenotype in the appropriate clinical setting.",
    ],
    histology: [
      "Large pale histiocytes in a dense lymphoplasmacytic background.",
      "Emperipolesis—intact lymphocytes/plasma cells within histiocyte cytoplasm—is a key clue, although it may be focal or inconspicuous.",
    ],
    ihc: [
      "Histiocytes express S100, CD68, CD163, and OCT2; fascin is often positive.",
      "CD1a and CD207 are negative.",
    ],
    molecular: [
      "A subset has MAPK-pathway mutations; testing may be useful in selected cases, particularly systemic/refractory disease.",
    ],
    differential: [
      [
        "Reticulohistiocytosis",
        "Ground-glass eosinophilic cytoplasm; typically lacks the classic S100/OCT2-positive emperipolesis pattern.",
      ],
      [
        "JXG / ECD",
        "Usually CD163/CD68 positive but S100 negative or only focal; correlate with systemic distribution.",
      ],
      ["LCH", "CD1a and CD207 are positive in LCH."],
    ],
  },
  {
    name: "Erdheim–Chester disease (ECD)",
    lineage: "Histiocytic / macrophage",
    site: "Systemic disease with characteristic long-bone, retroperitoneal/perirenal, cardiovascular, and CNS involvement; skin and periocular tissues may be involved.",
    clinical: [
      "Usually adults; chronic multisystem disease with variable symptoms based on organ involvement.",
      "Cutaneous lesions may be xanthomatous or xanthogranulomatous.",
    ],
    criteria: [
      "Bland foamy CD68/CD163-positive histiocytes in the appropriate radiologic and clinical context; evaluate for systemic disease.",
    ],
    histology: [
      "Foamy histiocytes in fibrotic or xanthogranulomatous infiltrates; Touton giant cells may occur.",
      "Fibrosis can be prominent; morphology overlaps with JXG and other xanthogranulomatous disorders.",
    ],
    ihc: [
      "CD163, CD68, CD14, and CD4 are positive; factor XIIIa, fascin, and S100 may be at least partially positive.",
      "CD1a and CD207 are negative; phospho-ERK is frequently positive.",
    ],
    molecular: [
      "BRAF p.V600E or other MAPK-pathway mutations are frequent; BRAF variant allele fraction may be very low.",
      "Sensitive molecular assays are important; BRAF/MEK inhibitors are therapeutically relevant.",
    ],
    differential: [
      [
        "JXG / adult-onset xanthogranuloma",
        "Clinical-radiologic evidence of multisystem ECD is decisive.",
      ],
      ["RDD", "RDD is typically S100+/OCT2+ with emperipolesis."],
      ["LCH", "LCH is CD1a+/CD207+; mixed histiocytosis can occur."],
    ],
  },
  {
    name: "ALK-positive histiocytosis",
    lineage: "Histiocytic / macrophage",
    site: "May be skin-limited or multisystem; cutaneous lesions are solitary or multiple papules, nodules, or plaques.",
    clinical: [
      "Occurs in children and adults; multisystem disease may occur in infancy.",
      "Clinical course varies with disease distribution; skin lesions may regress.",
    ],
    criteria: [
      "Sheets/aggregates of histiocytes without high-grade atypia, with ALK immunoreactivity and at least two macrophage markers.",
    ],
    histology: [
      "Non-epidermotropic, non-circumscribed dermal infiltrate of histiocytes, sometimes with fibrosis.",
      "Cells range from epithelioid/foamy to spindle or multinucleated forms; irregular nuclear contours, emperipolesis, and Touton cells may occur.",
      "Morphology may closely resemble JXG.",
    ],
    ihc: [
      "ALK is positive, sometimes weak/focal; CD68, CD163, CD14, CD4, and lysozyme show variable positivity.",
      "Fascin and factor XIIIa are commonly positive; CD1a, CD207, and CD30 are negative.",
    ],
    molecular: [
      "ALK rearrangement is characteristic; KIF5B is the most common partner, with several less common partners reported.",
      "Demonstration of an ALK fusion supports diagnosis and may guide ALK-inhibitor therapy.",
    ],
    differential: [
      [
        "JXG",
        "Can be morphologically indistinguishable; ALK IHC/rearrangement is decisive.",
      ],
      [
        "RDD / reticulohistiocytosis",
        "Compare S100/OCT2, emperipolesis, ground-glass cytoplasm, and lineage markers.",
      ],
      [
        "Histiocytic sarcoma",
        "High-grade cytologic atypia and destructive growth favor histiocytic sarcoma.",
      ],
    ],
  },
  {
    name: "Histiocytic sarcoma",
    lineage: "Histiocytic / macrophage",
    site: "Can involve skin as primary or secondary disease; also occurs in lymph nodes and extranodal organs.",
    clinical: [
      "Very rare aggressive neoplasm; skin lesions may be solitary or multiple nodules/plaques.",
    ],
    criteria: [
      "Malignant tumor with convincing histiocytic differentiation and exclusion of epithelial, melanocytic, lymphoid, myeloid, and dendritic-cell neoplasms.",
    ],
    histology: [
      "Diffuse destructive sheets of large pleomorphic cells with abundant eosinophilic cytoplasm.",
      "Marked nuclear atypia, prominent nucleoli, atypical mitoses, and necrosis may be present; hemophagocytosis can occur.",
    ],
    ihc: [
      "CD163, CD68, lysozyme, and PU.1 support histiocytic differentiation; expression may be variable.",
      "Exclude lineage mimics with broad keratin, melanocytic, lymphoid, myeloid, and dendritic-cell markers.",
    ],
    molecular: [
      "RAS/MAPK-pathway alterations and other mutations may occur; no single alteration is defining in the supplied source.",
    ],
    differential: [
      [
        "Anaplastic large cell lymphoma",
        "Use CD30, T-cell markers, and ALK as appropriate; histiocytic markers alone are insufficient.",
      ],
      [
        "Melanoma / carcinoma",
        "Exclude with melanocytic markers and broad-spectrum keratins.",
      ],
      [
        "Myeloid sarcoma",
        "MPO and other myeloid-lineage markers support myeloid differentiation.",
      ],
    ],
  },
  {
    name: "Indeterminate dendritic cell tumor (IDCT)",
    lineage: "Other dendritic cell",
    site: "Usually skin-limited; solitary, multifocal, or generalized papules, nodules, or tumors.",
    clinical: [
      "Clonal disorder with variable clinical course; most cutaneous cases are indolent, but progression is reported.",
    ],
    criteria: [
      "Infiltration by Langerhans-like cells expressing CD1a and S100 but lacking CD207 (langerin).",
      "Exclude LCH, ECD, ALK-positive histiocytosis, and other defined histiocytoses.",
    ],
    histology: [
      "Dermis/subcutis contains sheets of monomorphic Langerhans-like cells with kidney-shaped or deeply grooved nuclei and abundant eosinophilic cytoplasm.",
      "Epidermis is usually spared; peripheral lymphocytes and eosinophils may be present.",
    ],
    ihc: [
      "S100 and CD1a are positive; CD207 is negative and Birbeck granules are absent.",
      "Reactive macrophages may express CD68/CD163; do not mistake them for tumor cells.",
    ],
    molecular: [
      "BRAF analysis may help exclude other histiocytoses; no defining recurrent alteration is specified.",
    ],
    differential: [
      ["LCH", "LCH is CD207-positive."],
      [
        "Interdigitating dendritic cell sarcoma",
        "Lacks CD1a; IDCT is CD1a-positive.",
      ],
      [
        "Reticulohistiocytoma",
        "Macrophage markers positive; CD1a negative and S100 rarely positive.",
      ],
    ],
  },
  {
    name: "Reactive B-cell-rich lymphoid proliferation",
    lineage: "Reactive lymphoid / B cell",
    site: "Cutaneous lesions may occur at sites of arthropod bites, infection, tattoo, medication exposure, or other antigenic stimuli.",
    clinical: [
      "Benign reactive process with a broad range of infectious and noninfectious triggers.",
    ],
    criteria: [
      "Polymorphous B-cell-rich infiltrate with clinical/pathologic evidence supporting a reactive process; exclude primary cutaneous B-cell lymphoma.",
    ],
    histology: [
      "Nodular or diffuse lymphoid infiltrate with a mixed population and reactive germinal centers in some cases.",
      "Preserved compartmental organization and cytologic polymorphism favor a reactive process.",
    ],
    ihc: [
      "Use CD20/PAX5, CD3, CD21/CD23, BCL6, CD10, BCL2, and light-chain studies to assess architecture and clonality.",
    ],
    molecular: [
      "Clonality studies may be supportive but must be interpreted cautiously; no single molecular alteration defines reactive proliferation.",
    ],
    differential: [
      [
        "Primary cutaneous marginal zone lymphoma",
        "Assess plasma-cell distribution, class switching, light-chain restriction, and clinical course.",
      ],
      [
        "Primary cutaneous follicle centre lymphoma",
        "Neoplastic follicle-centre cells show a coherent B-cell phenotype and altered follicular architecture.",
      ],
    ],
  },
  {
    name: "Primary cutaneous marginal zone lymphoma (PCMZL)",
    lineage: "B-cell lymphoma",
    site: "Usually trunk and upper extremities; primary disease is confined to skin at diagnosis.",
    clinical: [
      "Indolent course with excellent prognosis despite frequent cutaneous recurrence.",
      "Class-switched and IgM-positive non-class-switched subtypes are recognized.",
    ],
    criteria: [
      "Primary cutaneous B-cell lymphoproliferation with marginal-zone/plasmacytic differentiation; exclude extracutaneous lymphoma.",
    ],
    histology: [
      "Dense nodular or diffuse dermal infiltrate, often with reactive germinal centers and marginal-zone-like B cells.",
      "Plasma cells may be prominent and often cluster at the periphery of nodules.",
    ],
    ihc: [
      "B cells express CD20/PAX5; plasma cells express CD138/MUM1 with light-chain restriction in many cases.",
      "Class-switched subtype often shows class-switched immunoglobulin; IgM-positive subtype retains IgM and may have a different phenotype.",
    ],
    molecular: [
      "No single defining molecular alteration; clonality and selected genetic findings may support classification but are not stand-alone.",
    ],
    differential: [
      [
        "Reactive B-cell-rich proliferation",
        "Reactive architecture and polytypic plasma cells favor a reactive process; correlate clinically.",
      ],
      [
        "Primary cutaneous follicle centre lymphoma",
        "Follicle-centre phenotype and architecture rather than marginal-zone/plasmacytic differentiation.",
      ],
    ],
  },
  {
    name: "Primary cutaneous follicle centre lymphoma (PCFCL)",
    lineage: "B-cell lymphoma",
    site: "Most often scalp, forehead, and trunk; primary disease is skin-limited at diagnosis.",
    clinical: [
      "Usually adults; solitary or grouped erythematous papules, plaques, or tumors.",
      "Indolent course and excellent prognosis; extracutaneous spread is uncommon.",
    ],
    criteria: [
      "Follicle-centre B-cell neoplasm arising primarily in skin; staging is required to exclude systemic follicular lymphoma.",
    ],
    histology: [
      "Nodular, follicular, and/or diffuse dermal infiltrate of centrocytes and variable centroblasts.",
      "Epidermis is usually spared; follicular dendritic-cell meshworks may be present.",
    ],
    ihc: [
      "CD20/PAX5 and BCL6 are positive; CD10 is variable.",
      "BCL2 is often negative or weak; strong diffuse BCL2 and systemic findings prompt evaluation for systemic follicular lymphoma.",
    ],
    molecular: [
      "BCL2 rearrangement is uncommon compared with systemic follicular lymphoma; molecular findings may help in selected difficult cases.",
    ],
    differential: [
      [
        "Systemic follicular lymphoma involving skin",
        "Strong BCL2 and/or BCL2 rearrangement and extracutaneous disease support systemic lymphoma.",
      ],
      [
        "PCMZL",
        "Plasmacytic/marginal-zone differentiation rather than follicle-centre phenotype.",
      ],
    ],
  },
  {
    name: "Primary cutaneous diffuse large B-cell lymphoma, leg type (PCDLBCL-LT)",
    lineage: "B-cell lymphoma",
    site: "Typically lower legs, often bilateral; may occur at other sites.",
    clinical: [
      "Usually older adults, with female predominance in many series; rapidly enlarging red-blue tumors.",
      "Aggressive clinical course compared with PCFCL and PCMZL.",
    ],
    criteria: [
      "Diffuse large B-cell lymphoma with characteristic phenotype arising primarily in skin; exclude systemic DLBCL.",
    ],
    histology: [
      "Diffuse sheets of centroblast- and immunoblast-like large cells throughout dermis and subcutis.",
      "Epidermis is often spared; mitoses are frequent.",
    ],
    ihc: [
      "CD20/PAX5 positive; BCL2, MUM1/IRF4, and FOXP1 commonly positive; BCL6 variable; CD10 usually negative.",
      "MYC may be expressed; interpret with morphology and molecular findings.",
    ],
    molecular: [
      "MYD88 and CD79B mutations are characteristic recurrent findings and help distinguish from PCFCL.",
    ],
    differential: [
      [
        "PCFCL",
        "Usually more centrocytic, less monomorphic; BCL2/MUM1 profile differs.",
      ],
      [
        "Systemic DLBCL involving skin",
        "Clinical staging is essential to establish primary cutaneous origin.",
      ],
    ],
  },
  {
    name: "Intravascular large B-cell lymphoma (IVLBCL)",
    lineage: "B-cell lymphoma",
    site: "Neoplastic cells are confined predominantly to small-vessel lumina in skin and other organs; cutaneous variant often involves legs.",
    clinical: [
      "Usually older adults; cutaneous lesions may be erythematous or violaceous patches, plaques, or nodules.",
      "Systemic disease may involve CNS, lungs, kidneys, and other organs; hemophagocytic variant is recognized.",
    ],
    criteria: [
      "Large atypical B cells predominantly or exclusively within vascular lumina.",
    ],
    histology: [
      "Large atypical lymphoid cells distend dermal/subcutaneous small vessels.",
      "Perivascular or extravascular tumor growth is usually limited in classic cases.",
    ],
    ihc: [
      "CD20, PAX5, and other B-cell markers are positive; endothelial markers outline involved vascular lumina.",
      "Assess CD5, CD10, MUM1, and proliferation index as appropriate.",
    ],
    molecular: [
      "No single molecular alteration is defining in the supplied excerpt; systemic lymphoma workup guides classification.",
    ],
    differential: [
      [
        "Vasculitis / thrombotic vasculopathy",
        "Neoplastic large B cells fill vessel lumina rather than inflammatory destruction or bland thrombi.",
      ],
      [
        "Other large B-cell lymphoma",
        "Demonstrate intravascular growth pattern and exclude systemic/extravascular disease.",
      ],
    ],
  },
  {
    name: "Reactive T-cell-rich lymphoid proliferation",
    lineage: "Reactive lymphoid / T cell",
    site: "Can arise in association with arthropod bites, infection, medication, vaccination, tattoo, and other inflammatory stimuli.",
    clinical: [
      "Benign reactive process; clinical history and distribution are important.",
    ],
    criteria: [
      "Polymorphous T-cell-rich infiltrate without convincing cytologic or phenotypic evidence of lymphoma.",
    ],
    histology: [
      "Variable superficial/deep perivascular, nodular, or diffuse lymphocytic infiltrate; admixed histiocytes, eosinophils, and B cells may occur.",
    ],
    ihc: [
      "CD3-positive T cells predominate; assess CD4/CD8 balance and pan-T-cell antigens (CD2, CD5, CD7).",
      "Retained pan-T-cell markers and mixed populations favor reactive proliferation.",
    ],
    molecular: [
      "T-cell receptor clonality may occur in reactive lesions and is not independently diagnostic.",
    ],
    differential: [
      [
        "CTCL",
        "Look for epidermotropism, atypia, antigen loss, and clinicopathologic persistence/progression.",
      ],
      [
        "CD4-positive small/medium T-cell LPD",
        "Localized clinical presentation and characteristic follicular-helper T-cell phenotype require consideration.",
      ],
    ],
  },
  {
    name: "Primary cutaneous CD4-positive small/medium T-cell lymphoproliferative disorder",
    lineage: "T-cell lymphoproliferative disorder",
    site: "Usually solitary lesion on face, neck, or upper trunk.",
    clinical: [
      "Typically adults; localized slow-growing papule, plaque, or nodule.",
      "Generally indolent behavior.",
    ],
    criteria: [
      "Localized dermal proliferation of small/medium CD4-positive T cells with a follicular-helper T-cell phenotype; exclude systemic disease.",
    ],
    histology: [
      "Dense nodular or diffuse dermal infiltrate of small-to-medium pleomorphic lymphocytes, often with admixed B cells, plasma cells, and histiocytes.",
      "Epidermotropism is usually absent.",
    ],
    ihc: [
      "CD3+, CD4+; follicular-helper markers such as PD-1, ICOS, BCL6, and CXCL13 may be expressed.",
      "CD8 and cytotoxic markers are usually absent; assess CD30 and proliferation in large-cell subsets.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement may be present but is not sufficient alone for diagnosis.",
    ],
    differential: [
      [
        "Mycosis fungoides",
        "Usually epidermotropic and clinically patch/plaque based.",
      ],
      [
        "Primary cutaneous peripheral T-cell lymphoma, NOS",
        "More atypical/aggressive and lacks the characteristic localized indolent pattern.",
      ],
    ],
  },
  {
    name: "Mycosis fungoides (MF)",
    lineage: "T-cell lymphoma / CD4 predominant",
    site: "Classically buttocks, trunk, and proximal extremities (bathing-trunk distribution); folliculotropic variant favors head and neck.",
    clinical: [
      "Usually adults; patches progress to plaques and tumors over time; erythrodermic disease may occur.",
      "Clinical evolution and distribution are essential to diagnosis.",
    ],
    criteria: [
      "Epidermotropic atypical T-cell infiltrate with compatible clinical presentation and evolution.",
    ],
    histology: [
      "Epidermotropism by atypical lymphocytes with irregular/cerebriform nuclei, often disproportionate to spongiosis.",
      "Pautrier microabscesses may be present; plaque/tumor stages show denser dermal infiltrates.",
      "Folliculotropic MF shows follicular epitheliotropism and may cause alopecia.",
    ],
    ihc: [
      "Usually CD3+, CD4+, with loss of one or more pan-T-cell antigens (often CD7); CD8-positive variants occur.",
      "CD30 may be expressed in transformed disease.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement supports diagnosis in context; genomic abnormalities involve T-cell signaling and epigenetic pathways.",
    ],
    differential: [
      [
        "Chronic spongiotic dermatitis",
        "More spongiosis, less atypical epidermotropism, and no convincing aberrant T-cell phenotype.",
      ],
      [
        "Pityriasis lichenoides / inflammatory dermatoses",
        "Integrate clinical course, cytology, epidermal pattern, and T-cell phenotype.",
      ],
    ],
  },
  {
    name: "Lymphomatoid papulosis (LyP)",
    lineage: "T-cell lymphoma / CD30-positive",
    site: "Typically trunk and extremities; lesions occur in crops and may be widespread.",
    clinical: [
      "Recurrent papules/nodules that spontaneously regress, often leaving varioliform scars.",
      "Clinical course is essential; histology alone may overlap with primary cutaneous ALCL.",
    ],
    criteria: [
      "Recurrent self-healing papulonodular lesions with a CD30-positive atypical T-cell infiltrate.",
    ],
    histology: [
      "Several histologic patterns (A–E) with variable wedge-shaped infiltrates, large atypical cells, epidermotropism, or angiocentric/angiodestructive features.",
      "Large atypical cells are typically scattered or clustered in an inflammatory background.",
    ],
    ihc: [
      "Atypical cells are strongly CD30-positive; T-cell markers are variable and may be partially lost.",
      "ALK is generally negative in primary cutaneous cases.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangements may be detected but do not distinguish LyP from other CD30-positive disorders.",
    ],
    differential: [
      [
        "Primary cutaneous ALCL",
        "Persistent tumor rather than recurrent self-regressing crops; clinical behavior distinguishes.",
      ],
      [
        "Reactive CD30-positive infiltrate",
        "Correlate with lesion evolution and exclude infection/drug reaction.",
      ],
    ],
  },
  {
    name: "Primary cutaneous anaplastic large cell lymphoma (PCALCL)",
    lineage: "T-cell lymphoma / CD30-positive",
    site: "Commonly trunk, face, and extremities; usually solitary or localized tumors.",
    clinical: [
      "Persistent rapidly growing red-brown nodules or tumors; ulceration may occur.",
      "Skin-limited disease has a generally favorable prognosis, unlike systemic ALCL.",
    ],
    criteria: [
      "Dense dermal tumor of large pleomorphic/anaplastic CD30-positive T cells; exclude systemic ALCL.",
    ],
    histology: [
      "Cohesive sheets of large anaplastic cells with hallmark horseshoe/kidney-shaped nuclei; epidermal involvement may be variable.",
      "At least 75% of tumor cells typically express CD30.",
    ],
    ihc: [
      "Strong diffuse CD30; T-cell markers variably retained; ALK usually negative.",
      "EMA may be positive in a subset; broad panel and staging distinguish systemic ALCL.",
    ],
    molecular: [
      "DUSP22 and TP63 rearrangements occur in subsets; not required for diagnosis.",
    ],
    differential: [
      [
        "Lymphomatoid papulosis",
        "Recurrent self-healing lesions versus persistent tumor.",
      ],
      [
        "Systemic ALK-negative ALCL",
        "Clinical staging and extracutaneous disease determine classification.",
      ],
      [
        "Transformed MF",
        "Background MF and clinical history support transformation.",
      ],
    ],
  },
  {
    name: "Subcutaneous panniculitis-like T-cell lymphoma (SPTCL)",
    lineage: "T-cell lymphoma / αβ cytotoxic",
    site: "Subcutaneous fat of trunk and extremities; usually spares dermis and epidermis.",
    clinical: [
      "Usually adults; multiple tender subcutaneous nodules/plaques, sometimes with fever and hemophagocytic syndrome.",
      "αβ phenotype generally has a more favorable course than γδ lymphoma.",
    ],
    criteria: [
      "Atypical cytotoxic T cells rimming individual adipocytes in a predominantly lobular panniculitis; αβ phenotype.",
    ],
    histology: [
      "Lobular panniculitis with atypical lymphocytes rimming adipocytes and karyorrhexis.",
      "Fat necrosis and histiocytes are common; hemophagocytosis may be present.",
    ],
    ihc: [
      "CD3+, CD8+, βF1+, cytotoxic markers (TIA1, granzyme B, perforin); usually CD4−, CD56−, and EBV−.",
      "CD30 is generally negative.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement supports diagnosis; no single defining recurrent mutation specified.",
    ],
    differential: [
      [
        "Lupus panniculitis",
        "Lymphoid follicles, plasma cells, hyaline fat necrosis, and interface change favor lupus.",
      ],
      [
        "Primary cutaneous γδ T-cell lymphoma",
        "Usually βF1-negative with γδ TCR expression and more aggressive epidermal/dermal involvement.",
      ],
    ],
  },
  {
    name: "Primary cutaneous γδ T-cell lymphoma",
    lineage: "T-cell lymphoma / γδ cytotoxic",
    site: "Involves dermis and subcutis; may also show epidermotropic disease.",
    clinical: [
      "Aggressive lymphoma with ulcerated plaques, nodules, or tumors; systemic symptoms may occur.",
    ],
    criteria: [
      "Clonal cytotoxic T-cell neoplasm expressing γδ T-cell receptor, with appropriate clinical and morphologic findings.",
    ],
    histology: [
      "Variable epidermotropic, dermal, and subcutaneous infiltrates; angioinvasion, necrosis, and cytotoxic injury may be prominent.",
      "Cells range from small/medium to pleomorphic; panniculitic pattern can mimic SPTCL.",
    ],
    ihc: [
      "CD3+, βF1−, TCRγ/δ+; cytotoxic markers positive.",
      "CD4 and CD8 are variable; CD56 may be positive; EBV is negative.",
    ],
    molecular: ["Clonal T-cell receptor rearrangement supports diagnosis."],
    differential: [
      ["SPTCL", "SPTCL is αβ/βF1-positive and usually confined to subcutis."],
      [
        "Primary cutaneous CD8-positive aggressive epidermotropic lymphoma",
        "Typically αβ phenotype with marked epidermotropism.",
      ],
    ],
  },
  {
    name: "Primary cutaneous acral CD8-positive T-cell lymphoproliferative disorder",
    lineage: "T-cell lymphoproliferative disorder / CD8",
    site: "Acral skin, especially ear, nose, and distal extremities.",
    clinical: [
      "Usually adults; solitary slowly growing papule or nodule.",
      "Indolent behavior and excellent prognosis; terminology reflects its lymphoproliferative rather than aggressive lymphoma behavior.",
    ],
    criteria: [
      "Localized dermal CD8-positive T-cell proliferation in an acral site, with indolent clinical course.",
    ],
    histology: [
      "Dense nodular dermal infiltrate of monomorphic small-to-medium cells, often with a grenz zone.",
      "Epidermotropism is absent or minimal.",
    ],
    ihc: [
      "CD3+, CD8+, often TIA1+; CD4−; CD30 usually negative or limited.",
      "Granzyme B and perforin are generally absent or limited compared with aggressive cytotoxic lymphomas.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement may be present; no defining molecular alteration specified.",
    ],
    differential: [
      [
        "Primary cutaneous CD8-positive aggressive epidermotropic lymphoma",
        "Marked epidermotropism, cytotoxic phenotype, and aggressive clinical course.",
      ],
      [
        "PCALCL",
        "Large pleomorphic CD30-positive cells and persistent tumors.",
      ],
    ],
  },
  {
    name: "Primary cutaneous CD8-positive aggressive epidermotropic cytotoxic T-cell lymphoma",
    lineage: "T-cell lymphoma / CD8 cytotoxic",
    site: "Widespread skin; epidermis, adnexa, dermis, and sometimes subcutis may be involved.",
    clinical: [
      "Aggressive course with multiple ulcerated papules, plaques, and tumors; mucosal involvement may occur.",
    ],
    criteria: [
      "Atypical CD8-positive cytotoxic T-cell infiltrate with prominent epidermotropism and destructive epithelial injury.",
    ],
    histology: [
      "Pagetoid epidermotropism by atypical lymphocytes, often with epidermal necrosis/ulceration.",
      "Adnexal epitheliotropism and dermal/subcutaneous involvement may be present.",
    ],
    ihc: [
      "CD3+, CD8+, βF1 often positive; cytotoxic markers TIA1, granzyme B, and perforin positive.",
      "CD4−; CD30 variable; EBV negative.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement supports diagnosis; no single defining molecular alteration specified.",
    ],
    differential: [
      [
        "Primary cutaneous acral CD8-positive T-cell LPD",
        "Acral, localized, dermal, indolent lesion without destructive epidermotropism.",
      ],
      [
        "γδ T-cell lymphoma",
        "TCRγ/δ positive and βF1 negative; distribution and phenotype differ.",
      ],
    ],
  },
  {
    name: "Primary cutaneous peripheral T-cell lymphoma, NOS",
    lineage: "T-cell lymphoma",
    site: "Skin; no defining anatomic predilection.",
    clinical: [
      "Very rare; diagnosis of exclusion for cases not fitting a defined cutaneous T-cell entity.",
    ],
    criteria: [
      "Primary cutaneous T-cell lymphoma that does not meet criteria for another specific entity; exclude systemic lymphoma.",
    ],
    histology: [
      "Usually atypical pleomorphic lymphoid infiltrate with variable dermal/subcutaneous distribution.",
    ],
    ihc: [
      "T-cell phenotype with variable antigen loss; characterize CD4/CD8, cytotoxic markers, CD30, and EBV as indicated.",
    ],
    molecular: [
      "T-cell receptor clonality may support a clonal process but is not entity-defining.",
    ],
    differential: [
      [
        "Specific CTCL entities",
        "Exclude MF, CD30-positive LPD, SPTCL, γδ lymphoma, and CD8-positive entities.",
      ],
      [
        "Systemic peripheral T-cell lymphoma",
        "Clinical staging is required to establish primary cutaneous disease.",
      ],
    ],
  },
  {
    name: "Sézary syndrome",
    lineage: "T-cell lymphoma / leukemic CTCL",
    site: "Generalized skin involvement (erythroderma) with circulating malignant T cells and often lymphadenopathy.",
    clinical: [
      "Usually adults; erythroderma, severe pruritus, palmoplantar keratoderma, alopecia, and ectropion may occur.",
      "Blood involvement is defining; distinguish from erythrodermic MF.",
    ],
    criteria: [
      "Erythroderma with a clonal circulating atypical T-cell population meeting blood criteria for Sézary syndrome.",
    ],
    histology: [
      "Skin may show a superficial band-like or lichenoid infiltrate with epidermotropism; findings can be subtle and overlap with MF.",
    ],
    ihc: [
      "Usually CD3+, CD4+, with loss of CD7 and/or CD26; assess aberrant phenotype by flow cytometry.",
      "T-cell receptor clonality should be demonstrated in blood and correlated with skin.",
    ],
    molecular: [
      "Clonal T-cell receptor rearrangement in blood; genomic abnormalities overlap with CTCL signaling and epigenetic pathways.",
    ],
    differential: [
      [
        "Erythrodermic mycosis fungoides",
        "Blood tumor burden and circulating clone distinguish Sézary syndrome.",
      ],
      [
        "Reactive erythroderma",
        "No matching aberrant clonal circulating T-cell population.",
      ],
    ],
  },
  {
    name: "Severe mosquito bite allergy",
    lineage: "EBV-associated T/NK-cell LPD",
    site: "Usually exposed skin at mosquito-bite sites; may involve multiple body regions.",
    clinical: [
      "Typically occurs in children or adolescents, often in association with chronic active EBV infection and systemic symptoms.",
      "Marked local reactions may include ulceration, necrosis, fever, lymphadenopathy, and hepatosplenomegaly.",
    ],
    criteria: [
      "Exaggerated mosquito-bite reaction with EBV-positive cytotoxic T/NK-cell proliferation in the appropriate clinical setting.",
    ],
    histology: [
      "Dense dermal infiltrate with atypical lymphocytes, often admixed with eosinophils and other inflammatory cells.",
      "Angiocentricity, vascular injury, and epidermal necrosis may be present in severe lesions.",
    ],
    ihc: [
      "T-cell or NK-cell phenotype; cytotoxic markers are expressed.",
      "EBER in situ hybridization is positive; determine T-cell versus NK-cell lineage with an appropriate panel.",
    ],
    molecular: [
      "EBV association is central; T-cell receptor gene rearrangement may help establish T-cell lineage.",
    ],
    differential: [
      [
        "Ordinary arthropod-bite reaction",
        "Usually lacks EBV-positive atypical cytotoxic lymphoid proliferation and systemic manifestations.",
      ],
      [
        "Hydroa vacciniforme lymphoproliferative disorder",
        "Photosensitivity-associated vesicles on sun-exposed skin and varioliform scarring are characteristic.",
      ],
    ],
  },
  {
    name: "Hydroa vacciniforme lymphoproliferative disorder",
    lineage: "EBV-associated T/NK-cell LPD",
    site: "Sun-exposed skin, especially face, ears, and hands; systemic form may involve extracutaneous sites.",
    clinical: [
      "Usually children/adolescents; recurrent photosensitivity-associated vesicles that heal with varioliform scarring.",
      "Classic and systemic forms are recognized; systemic disease may be more severe.",
    ],
    criteria: [
      "Hydroa vacciniforme-like lesions with EBV-positive cytotoxic T/NK-cell proliferation in the appropriate clinical setting.",
    ],
    histology: [
      "Epidermal necrosis, vesiculation, and reticular degeneration with dense lymphocytic infiltrate.",
      "Atypical lymphocytes may show angiocentricity and cytotoxic injury.",
    ],
    ihc: [
      "T-cell or NK-cell phenotype; cytotoxic markers are expressed; EBER in situ hybridization is positive.",
    ],
    molecular: [
      "EBV is central; demonstrate EBER. T-cell receptor clonality may help establish T-cell lineage in selected cases.",
    ],
    differential: [
      [
        "Polymorphous light eruption / classic hydroa vacciniforme",
        "EBV-positive atypical cytotoxic infiltrate and systemic features support the lymphoproliferative disorder.",
      ],
      [
        "Extranodal NK/T-cell lymphoma",
        "Clinical course, EBV-associated phenotype, and extent of disease differ.",
      ],
    ],
  },
  {
    name: "EBV-positive mucocutaneous ulcer",
    lineage: "EBV-positive B-cell lymphoproliferative disorder",
    site: "Oral cavity, skin, and gastrointestinal tract; typically sharply circumscribed mucocutaneous ulcer.",
    clinical: [
      "Often older or immunosuppressed patients; may arise with immunosenescence or iatrogenic immunosuppression.",
      "Usually localized and may regress when immunosuppression is reduced.",
    ],
    criteria: [
      "Localized sharply circumscribed ulcer with EBV-positive atypical B cells in a polymorphous inflammatory background.",
    ],
    histology: [
      "Well-demarcated ulcer with a polymorphous infiltrate and scattered large atypical immunoblasts/Hodgkin-like cells.",
      "A rim of small T lymphocytes often demarcates the lesion.",
    ],
    ihc: [
      "Large cells express B-cell markers (CD20, PAX5, CD79a) and often CD30; EBER is positive.",
      "Background T cells form a peripheral rim.",
    ],
    molecular: [
      "EBV positivity by EBER is essential; clonality may be detected but does not imply systemic lymphoma.",
    ],
    differential: [
      [
        "EBV-positive DLBCL",
        "Usually mass-forming or disseminated rather than a sharply circumscribed localized ulcer.",
      ],
      [
        "Classical Hodgkin lymphoma",
        "Integrate architecture, clinical setting, and full phenotype.",
      ],
    ],
  },
  {
    name: "Inborn error of immunity-associated lymphoproliferative disorders",
    lineage: "Immune deficiency-associated T-cell LPD",
    site: "Often generalized skin with multiple papulonodular lesions; may involve extracutaneous tissues.",
    clinical: [
      "Associated with inborn immunodeficiency; chronic, protracted course with slow/limited growth and variable prognosis.",
      "The source highlights CD8-positive T-cell-rich and histiocyte-rich infiltrates not associated with EBV.",
    ],
    criteria: [
      "Cutaneous T-cell-rich/histiocyte-rich proliferation in a patient with a defined inborn error of immunity; exclude EBV-associated disease.",
    ],
    histology: [
      "Papulonodular infiltrates rich in CD8-positive T cells and histiocytes; cytologic atypia and distribution vary.",
    ],
    ihc: [
      "Characterize CD3, CD8, CD4, cytotoxic markers, and histiocytic markers; assess EBV by EBER.",
    ],
    molecular: [
      "No single defining molecular alteration is specified; correlate with the underlying germline immune disorder.",
    ],
    differential: [
      [
        "EBV-positive T/NK-cell LPD",
        "EBER positivity and clinical context support EBV-associated disease.",
      ],
      [
        "Primary CTCL",
        "Underlying immune deficiency and chronic indolent pattern are important context.",
      ],
    ],
  },
];

const histiocyticRows = [
  [
    "Xanthelasma",
    "Macrophage / lipid-laden histiocyte",
    "Eyelids, especially medial canthus",
    "Foamy dermal histiocytes in sheets/clusters",
    "CD68+, CD163+; no unique profile",
    "No established diagnostic alteration",
  ],
  [
    "Juvenile xanthogranuloma",
    "Dendrocyte/macrophage-lineage",
    "Head/neck > trunk and extremities; usually skin",
    "Foamy histiocytes; Touton giant cells in mature lesions",
    "CD68+, CD163+, factor XIIIa+; CD1a−, CD207−; S100 usually−",
    "MAPK alterations reported in family; no routine test",
  ],
  [
    "Reticulohistiocytosis",
    "Macrophage-lineage",
    "Skin and joints; hands, face, periarticular skin",
    "Epithelioid histiocytes with abundant ground-glass eosinophilic cytoplasm; giant cells",
    "CD68+, CD163+, factor XIIIa+; CD1a−; S100 rarely+",
    "No defining alteration",
  ],
  [
    "Rosai–Dorfman disease",
    "Macrophage-lineage",
    "Nodes classically; skin and extranodal sites",
    "Large pale histiocytes; emperipolesis; lymphoplasmacytic background",
    "S100+, CD68+, CD163+, OCT2+; CD1a−, CD207−",
    "MAPK-pathway mutations in subset",
  ],
  [
    "Erdheim–Chester disease",
    "Foamy macrophage-lineage",
    "Systemic: long bones, retroperitoneum, cardiovascular system, CNS; skin/periocular",
    "Foamy histiocytes with fibrosis; Touton cells may occur",
    "CD68+, CD163+, CD14+, CD4+; CD1a−, CD207−; pERK often+",
    "BRAF p.V600E or other MAPK alterations; low VAF may require sensitive assay",
  ],
  [
    "ALK-positive histiocytosis",
    "Histiocytic / macrophage-lineage",
    "Skin-limited or multisystem; skin papules, nodules, plaques",
    "Non-epidermotropic sheets; epithelioid, foamy, spindle, or multinucleated cells; may mimic JXG",
    "ALK+; ≥2 of CD163, CD68, CD14, CD4, lysozyme; CD1a−, CD207−",
    "ALK rearrangement; KIF5B most common partner",
  ],
  [
    "Histiocytic sarcoma",
    "Malignant histiocytic lineage",
    "Skin, nodes, and extranodal organs",
    "Destructive pleomorphic large-cell tumor; atypia, mitoses, necrosis",
    "CD163, CD68, lysozyme, PU.1 support; exclude other lineages",
    "No single defining alteration; molecular profile variable",
  ],
];
const lineages = [
  "All",
  "Myeloid / mast cell",
  "Myeloid",
  "Plasmacytoid dendritic cell",
  "Langerhans cell / dendritic",
  "Histiocytic / macrophage",
  "Other dendritic cell",
  "B-cell lymphoma",
  "T-cell lymphoma / CD4 predominant",
  "T-cell lymphoma / CD30-positive",
  "T-cell lymphoma / αβ cytotoxic",
  "T-cell lymphoma / γδ cytotoxic",
  "T-cell lymphoma / CD8 cytotoxic",
  "T-cell lymphoproliferative disorder",
  "EBV-associated T/NK-cell LPD",
  "EBV-positive B-cell lymphoproliferative disorder",
  "Reactive lymphoid / B cell",
  "Reactive lymphoid / T cell",
  "Immune deficiency-associated T-cell LPD",
];
function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h3 className="mb-3 font-bold text-slate-900">{title}</h3>
        {children}
      </div>
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
export default function CutaneousHematopoieticLymphoidTumorsPage() {
  const [q, setQ] = useState("");
  const [lineage, setLineage] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Cutaneous mastocytosis",
    "Langerhans cell histiocytosis (LCH)",
    "ALK-positive histiocytosis",
    "Mycosis fungoides (MF)",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (lineage === "All" || x.lineage === lineage) &&
          [
            x.name,
            x.lineage,
            x.site,
            ...x.clinical,
            ...x.criteria,
            ...x.histology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, lineage],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Skin Tumors / Hematopoietic & Lymphoid
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Cutaneous Hematopoietic and Lymphoid Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A lineage-first, morphology-driven reference emphasizing
                anatomic distribution, immunophenotype, and diagnostically
                useful molecular findings.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify the lineage first; then integrate site, architecture,
                cytology, phenotype, and clinical distribution.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For histiocytic and dendritic-cell lesions, clinicopathologic
                correlation is essential. For primary cutaneous lymphomas,
                exclude extracutaneous disease at diagnosis.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Lineage-based classification and diagnostic map">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Myeloid lineage",
                "Cutaneous mastocytosis; mast cell sarcoma; cutaneous myeloid neoplasms / myeloid sarcoma.",
              ],
              [
                "Dendritic-cell lineage",
                "Plasmacytoid dendritic cell neoplasms; Langerhans cell neoplasms; indeterminate dendritic cell tumor.",
              ],
              [
                "Histiocytic lineage",
                "Xanthelasma, JXG, reticulohistiocytosis, RDD, ECD, ALK-positive histiocytosis, histiocytic sarcoma.",
              ],
              [
                "Lymphoid lineage",
                "Reactive B/T-cell proliferations; primary cutaneous B-cell lymphomas; CTCLs; EBV-associated and immune-deficiency-associated LPDs.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Primary cutaneous lymphoma is defined by absence of extracutaneous
            disease at diagnosis. Similar histology or immunophenotype does not
            make a systemic lymphoma a primary cutaneous lymphoma.
          </p>
        </Panel>
        <Panel title="Histiocytic tumors: practical comparison table">
          <p className="mb-3 text-sm leading-6 text-slate-600">
            The term “histiocytic” spans biologically distinct
            macrophage-lineage disorders. The table separates site,
            characteristic morphology, phenotype, and molecular clues. Markers
            must be interpreted as a panel rather than individually.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-left text-xs leading-5">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  {[
                    "Entity",
                    "Cell lineage",
                    "Typical location",
                    "Characteristic histology",
                    "Useful IHC",
                    "Molecular clue",
                  ].map((h) => (
                    <th key={h} className="px-3 py-3 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {histiocyticRows.map((r, i) => (
                  <tr key={i} className="align-top">
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className={`px-3 py-3 ${j === 0 ? "font-semibold text-slate-900" : "text-slate-700"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="High-yield lineage and marker orientation">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3">Lineage</th>
                  <th className="p-3">Useful markers</th>
                  <th className="p-3">Key exclusion / interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Mast cell",
                    "Tryptase, KIT (CD117); aberrant CD2/CD25/CD30",
                    "CD68 is nonspecific; correlate with systemic mastocytosis criteria.",
                  ],
                  [
                    "Granulocytic / monocytic myeloid",
                    "MPO, CD13, CD33, CD43, CD68, lysozyme; CD14/CD11c for monocytic",
                    "Monocytic lesions may lack CD34/KIT; BPDCN lacks MPO/lysozyme.",
                  ],
                  [
                    "Plasmacytoid dendritic cell",
                    "CD123, CD303, TCL1, TCF4; CD4/CD56",
                    "Separate BPDCN from mature pDC proliferation associated with myeloid neoplasm.",
                  ],
                  [
                    "Langerhans cell",
                    "CD1a, CD207 (langerin), S100",
                    "CD207 distinguishes LCH from IDCT and reactive CD1a+ dendritic cells.",
                  ],
                  [
                    "Macrophage / histiocyte",
                    "CD68, CD163, lysozyme, CD14, PU.1; S100/OCT2 in selected entities",
                    "CD68 alone is not lineage-defining; use ALK, CD1a/CD207, S100/OCT2, and morphology.",
                  ],
                  [
                    "B cell",
                    "CD20, PAX5, CD79a; BCL2, BCL6, CD10, MUM1 as context dictates",
                    "Clinical staging separates primary cutaneous from systemic lymphoma.",
                  ],
                  [
                    "T cell",
                    "CD2, CD3, CD4, CD5, CD7, CD8; TCRβF1/TCRγδ; cytotoxic markers",
                    "Antigen loss and clonality support but do not replace morphology and clinical pattern.",
                  ],
                  [
                    "EBV-associated LPD",
                    "EBER in situ hybridization; lineage markers",
                    "EBER positivity must be interpreted with the specific clinicopathologic entity.",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="p-3 font-semibold">{r[0]}</td>
                    <td className="p-3 text-slate-700">{r[1]}</td>
                    <td className="p-3 text-slate-600">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile, essential criteria, histology, IHC, and
                molecular pathology
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, location, cell lineage, morphology, marker, or
                gene.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 md:min-w-[480px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search entity, site, marker, gene..."
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-teal-600"
              />
              <select
                value={lineage}
                onChange={(e) => setLineage(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm"
              >
                {lineages.map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="mb-3 text-xs text-slate-500">
            Showing {filtered.length} of {entities.length} entities
          </p>
          <div className="space-y-3">
            {filtered.map((x) => (
              <article
                key={x.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(x.name)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
                >
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                      {x.lineage}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {x.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      <b>Location:</b> {x.site}
                    </p>
                  </div>
                  <span className="mt-1 rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
                    {opened.includes(x.name) ? "−" : "+"}
                  </span>
                </button>
                {opened.includes(x.name) && (
                  <div className="grid gap-5 border-t border-slate-100 p-5 lg:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Clinical Profile
                        </h4>
                        <Bullets items={x.clinical} />
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={x.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Differential Diagnosis
                        </h4>
                        <div className="space-y-2">
                          {x.differential.map((d, i) => (
                            <div
                              key={i}
                              className="rounded-lg bg-slate-50 p-3 text-sm"
                            >
                              <b className="text-slate-900">{d[0]}:</b>{" "}
                              <span className="text-slate-700">{d[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Histopathology
                        </h4>
                        <Bullets items={x.histology} />
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Immunophenotype
                        </h4>
                        <Bullets items={x.ihc} />
                      </div>
                      <div>
                        <h4 className="mb-2 text-sm font-bold text-slate-900">
                          Molecular Pathology
                        </h4>
                        <Bullets items={x.molecular} />
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
        <Panel title="Practical diagnostic workflow">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish context",
                "Age, lesion distribution, systemic history, immune status, blood counts, imaging, and whether disease is truly skin-limited.",
              ],
              [
                "2. Map the compartment",
                "Epidermotropic, dermal, perivascular/periadnexal, nodular, diffuse, intravascular, or panniculitic.",
              ],
              [
                "3. Identify lineage",
                "Start with morphology and a focused screening panel; avoid interpreting CD68, CD4, CD56, or CD30 in isolation.",
              ],
              [
                "4. Apply entity-specific tests",
                "CD1a/CD207 for LCH; ALK for ALK-positive histiocytosis; KIT for mast cells; EBER for EBV-associated LPD; targeted molecular testing when indicated.",
              ],
              [
                "5. Stage and classify",
                "Exclude systemic lymphoma or myeloid disease where relevant; distinguish primary cutaneous entities from secondary skin involvement.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Biopsy and reporting checklist">
          <Bullets
            items={[
              "Record exact anatomic site, lesion number, distribution, and whether disease is clinically skin-limited.",
              "Describe the dominant compartment and growth pattern: epidermotropic, dermal, subcutaneous, intravascular, nodular, diffuse, or destructive.",
              "State the lineage-defining immunophenotype and identify any aberrant antigen expression or antigen loss.",
              "Use molecular tests selectively: KIT, BRAF/MAPK, ALK rearrangement, and entity-directed studies; a negative low-sensitivity assay does not exclude low-allele-fraction variants.",
              "For suspected lymphoma, correlate with clinical staging and prior/current extracutaneous disease before using a primary cutaneous designation.",
              "For histiocytic lesions, explicitly distinguish macrophage-lineage tumors from Langerhans, plasmacytoid, and indeterminate dendritic-cell neoplasms.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> American English
          adaptation of the supplied WHO skin-tumor excerpt. The reference
          emphasizes diagnostic morphology, anatomic distribution, lineage
          immunophenotype, and molecular findings with diagnostic or therapeutic
          relevance. Clinical staging and clinicopathologic correlation remain
          essential.
        </footer>
      </div>
    </main>
  );
}
