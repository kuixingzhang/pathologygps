"use client";
import { useMemo, useState } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};
const items: Item[] = [
  {
    name: "Junctional, Compound, and Dermal Nevi",
    group: "Benign",
    behavior: "Benign; progression is very rare",
    site: "Common acquired nevi; widely distributed, especially trunk.",
    clinical: [
      "Usually acquired during childhood through adulthood.",
      "Multiple small, symmetric, uniformly pigmented macules or papules are typical.",
    ],
    criteria: [
      "Localized clonal proliferation of melanocytes forming nests of at least three nevus cells.",
      "Classify by anatomic distribution: junctional, compound, or dermal.",
    ],
    morphology: [
      "Junctional nevus: nests are confined to the dermoepidermal junction.",
      "Compound nevus: junctional nests extend into the superficial dermis.",
      "Dermal nevus: melanocytes are confined to the dermis, often with maturation with depth.",
      "Cytologic atypia and mitotic activity are absent or minimal in ordinary nevi.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 highlight melanocytes; maturation with depth may be reflected by diminishing HMB45.",
    ],
    molecular: [
      "Usually a single initiating MAPK-pathway alteration; BRAF p.V600E is common in acquired nevi.",
    ],
    differential: [
      [
        "Dysplastic nevus",
        "Architectural disorder and cytologic atypia are greater; evaluate symmetry, circumscription, and lamellar fibroplasia.",
      ],
      [
        "Melanoma",
        "Confluent growth, pagetoid spread, asymmetry, significant atypia, and lack of maturation raise concern.",
      ],
    ],
    pitfalls: [
      "Nevus cells may mature with depth; assess the entire lesion and its symmetry.",
    ],
  },
  {
    name: "Simple Lentigo and Lentiginous Melanocytic Nevus",
    group: "Benign",
    behavior: "Benign",
    site: "Sun-exposed skin; lentiginous nevi may occur in various cutaneous sites.",
    clinical: [
      "Small, flat, uniformly pigmented macule; simple lentigo is often associated with sun exposure.",
    ],
    criteria: [
      "Increased basal epidermal melanocytes without the atypical confluent proliferation of melanoma in situ.",
      "Lentiginous nevus shows a benign junctional melanocytic proliferation.",
    ],
    morphology: [
      "Simple lentigo: increased single melanocytes along the basal layer, often with elongated rete ridges.",
      "Lentiginous nevus: increased junctional melanocytes, sometimes with small nests; cytology remains bland.",
    ],
    ihc: [
      "Melanocytic markers highlight the increased basal melanocytes; IHC is rarely needed in a typical lesion.",
    ],
    molecular: [
      "No routine molecular testing; source describes benign nevi as generally carrying an initiating alteration without additional progression events.",
    ],
    differential: [
      [
        "Melanoma in situ",
        "Confluent atypical melanocytes, pagetoid spread, and cytologic atypia favor melanoma.",
      ],
      [
        "Pigmented actinic keratosis",
        "Keratinocyte atypia and solar damage, rather than a primary melanocytic proliferation.",
      ],
    ],
    pitfalls: [
      "Clinical and histologic correlation is important in chronically sun-damaged skin.",
    ],
  },
  {
    name: "Dysplastic Nevus",
    group: "Benign",
    behavior: "Benign nevus with atypical features; low progression risk",
    site: "Often trunk; may be multiple in patients with atypical mole phenotype.",
    clinical: [
      "Usually acquired in adolescents or adults.",
      "Often larger and more irregularly pigmented than common acquired nevi.",
    ],
    criteria: [
      "Junctional or compound nevus with architectural disorder and cytologic atypia.",
      "Assess symmetry, circumscription, bridging of rete ridges, and degree of melanocytic atypia.",
    ],
    morphology: [
      "Irregular junctional nests and lentiginous melanocytic hyperplasia may be present.",
      "Bridging of adjacent rete ridges and lamellar fibroplasia are characteristic architectural clues.",
      "Cytologic atypia ranges from mild to severe; grading terminology varies.",
    ],
    ihc: [
      "PRAME may be useful in selected difficult cases but is not independently diagnostic; interpret with morphology.",
    ],
    molecular: [
      "Common initiating MAPK alterations may be present; progression-associated alterations are not a routine diagnostic assay.",
    ],
    differential: [
      [
        "Melanoma in situ",
        "Marked confluent growth, extensive pagetoid scatter, significant atypia, and asymmetry favor melanoma.",
      ],
      [
        "Common acquired nevus",
        "Lacks the architectural disorder and cytologic atypia.",
      ],
    ],
    pitfalls: [
      "Atypia alone does not establish melanoma; interpret architecture and cytology together.",
    ],
  },
  {
    name: "Halo Nevus",
    group: "Benign",
    behavior: "Benign; immune-mediated regression",
    site: "Usually trunk; can occur at multiple sites.",
    clinical: [
      "Often occurs in children and young adults.",
      "A pigmented nevus is surrounded by a symmetric depigmented halo.",
    ],
    criteria: [
      "Pre-existing nevus with a surrounding lymphocytic inflammatory response and melanocyte loss.",
    ],
    morphology: [
      "Dense lymphocytic infiltrate may obscure nevus cells.",
      "Regressive lesions show fibrosis and reduced or absent melanocytes.",
    ],
    ihc: [
      "SOX10 or Melan-A can help identify residual nevus cells in heavily inflamed lesions.",
    ],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Melanoma with regression",
        "Asymmetry, atypical residual melanocytes, and an irregular rather than symmetric regressive pattern are concerning.",
      ],
      [
        "Lichen planus-like keratosis",
        "Usually lacks a pre-existing melanocytic nevus.",
      ],
    ],
    pitfalls: [
      "A halo phenomenon can occur around melanoma; evaluate the underlying melanocytic lesion carefully.",
    ],
  },
  {
    name: "Meyerson Nevus",
    group: "Benign",
    behavior: "Benign nevus with eczematous inflammation",
    site: "Usually trunk or extremities.",
    clinical: [
      "Eczematous, scaly erythematous halo around a pre-existing nevus.",
    ],
    criteria: [
      "Benign melanocytic nevus accompanied by spongiotic dermatitis.",
    ],
    morphology: [
      "Underlying nevus retains benign architecture and cytology.",
      "Overlying epidermis shows spongiosis, parakeratosis, and superficial inflammation.",
    ],
    ihc: [
      "Melanocytic markers may outline the underlying nevus; no specific IHC profile.",
    ],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Halo nevus",
        "Prominent lymphocytic regression and depigmentation rather than spongiotic dermatitis.",
      ],
      [
        "Inflamed melanoma",
        "Look for atypical melanocytes and architectural disorder independent of the inflammation.",
      ],
    ],
    pitfalls: [
      "Do not let the inflammatory reaction obscure assessment of the underlying nevus.",
    ],
  },
  {
    name: "Recurrent Nevus",
    group: "Benign",
    behavior: "Benign proliferation after partial removal",
    site: "At a prior biopsy or excision site, often trunk.",
    clinical: [
      "Repigmentation within a scar after partial removal of a nevus.",
    ],
    criteria: [
      "Residual/recurrent nevus proliferation associated with scar tissue and prior procedure history.",
    ],
    morphology: [
      "Junctional melanocytic proliferation overlies dermal fibrosis.",
      "Melanocytes may extend over the scar but are generally confined to the scarred area.",
      "Cytologic atypia is usually limited; maturation may be present in residual dermal component.",
    ],
    ihc: [
      "PRAME may assist in selected cases but does not replace comparison with the prior specimen.",
    ],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Recurrent melanoma",
        "Melanocytic proliferation extending beyond the scar, marked atypia, and lack of maturation favor melanoma.",
      ],
      [
        "New primary melanoma",
        "Clinical mapping and comparison with the prior biopsy are essential.",
      ],
    ],
    pitfalls: [
      "Always obtain the prior pathology report and correlate the exact biopsy site.",
    ],
  },
  {
    name: "Combined Nevus",
    group: "Benign",
    behavior: "Benign combined melanocytic proliferation",
    site: "Commonly trunk and extremities.",
    clinical: ["Usually a pigmented papule or plaque with variable color."],
    criteria: [
      "Two or more morphologically distinct nevus components within one lesion.",
    ],
    morphology: [
      "Common combinations include conventional nevus with blue nevus or deep penetrating component.",
      "Each component should retain its characteristic cytology and architecture.",
    ],
    ihc: [
      "Use SOX10, S100, Melan-A, and HMB45 selectively to map components; staining patterns vary by component.",
    ],
    molecular: [
      "Components may carry distinct initiating alterations; molecular comparison can clarify selected cases.",
    ],
    differential: [
      [
        "Melanoma arising in a nevus",
        "Look for destructive growth, significant atypia, mitoses, and a malignant component.",
      ],
      [
        "Melanocytoma",
        "Atypical component with additional pathogenic alterations may represent an intermediate neoplasm.",
      ],
    ],
    pitfalls: [
      "Do not mistake juxtaposition of two benign components for tumor progression.",
    ],
  },
  {
    name: "WNT-Activated Deep Penetrating / Plexiform Melanocytoma",
    group: "Intermediate",
    behavior:
      "Intermediate melanocytic neoplasm; low but non-zero progression/metastatic concern",
    site: "Usually skin; may arise in association with a common acquired nevus.",
    clinical: [
      "Often presents as a pigmented papule or nodule; age range is broad.",
    ],
    criteria: [
      "Deep penetrating or plexiform melanocytic proliferation with characteristic morphology and WNT-pathway activation.",
      "Classify as melanocytoma when additional pathogenic alterations distinguish it from a conventional deep penetrating nevus.",
    ],
    morphology: [
      "Symmetric, wedge-shaped or plexiform proliferation extends into deep dermis or subcutis.",
      "Pigmented spindle and epithelioid melanocytes may be arranged around adnexa and neurovascular structures.",
      "Cytologic atypia and mitotic activity are variable; assess deep component and maturation.",
    ],
    ihc: [
      "Nuclear β-catenin supports WNT pathway activation.",
      "LEF1 may be positive; interpret in the morphologic context.",
    ],
    molecular: [
      "WNT pathway activation through CTNNB1 or related alterations; secondary alterations may include ID1 activation.",
    ],
    differential: [
      [
        "Deep penetrating nevus",
        "Usually lacks additional progression-associated alterations and has bland cytology.",
      ],
      [
        "Melanoma",
        "Marked atypia, destructive growth, brisk/atypical mitoses, and metastasis support melanoma.",
      ],
    ],
    pitfalls: [
      "The term melanocytoma denotes an intermediate biological category, not a synonym for melanoma.",
    ],
  },
  {
    name: "Pigmented Epithelioid Melanocytoma",
    group: "Intermediate",
    behavior:
      "Intermediate; regional nodal deposits may occur, with generally indolent behavior",
    site: "Usually skin; may occur at various cutaneous sites.",
    clinical: [
      "Often a heavily pigmented papule or nodule in younger patients, but can occur at any age.",
    ],
    criteria: [
      "Pigmented epithelioid/spindle melanocytic neoplasm with characteristic morphology and PRKAR1A pathway inactivation.",
    ],
    morphology: [
      "Sheets and nests of heavily pigmented epithelioid and/or spindle melanocytes.",
      "Cells may have abundant cytoplasm and variable nuclear atypia.",
      "Melanophages and pigment may be prominent.",
    ],
    ihc: [
      "Loss of PRKAR1A expression supports the diagnosis in an appropriate lesion.",
      "Melanocytic markers are positive; HMB45 expression may be retained.",
    ],
    molecular: [
      "PRKAR1A inactivation is characteristic; often arises in a BRAF-mutated nevus background.",
    ],
    differential: [
      [
        "Blue nevus",
        "Usually dendritic/spindle-cell morphology without the epithelioid component and PRKAR1A loss.",
      ],
      [
        "Melanoma",
        "Greater cytologic atypia, destructive growth, and high mitotic activity favor melanoma; nodal deposits alone do not automatically establish conventional melanoma.",
      ],
    ],
    pitfalls: [
      "Regional lymph node involvement can occur; interpret behavior in the context of this intermediate entity.",
    ],
  },
  {
    name: "BAP1-Inactivated Melanocytoma",
    group: "Intermediate",
    behavior:
      "Intermediate; generally low risk but warrants complete evaluation",
    site: "Cutaneous; may be associated with a conventional nevus.",
    clinical: [
      "Often a skin-colored to pink papule or dome-shaped nodule; may be multiple in BAP1 tumor predisposition syndrome.",
    ],
    criteria: [
      "Biphasic melanocytic lesion with a conventional nevus component and a population of large epithelioid cells showing BAP1 loss.",
    ],
    morphology: [
      "Biphasic architecture: conventional nevus cells admixed with large epithelioid melanocytes.",
      "Large cells have abundant amphophilic or eosinophilic cytoplasm and vesicular nuclei with prominent nucleoli.",
    ],
    ihc: [
      "Loss of nuclear BAP1 in the epithelioid component, with retained staining in internal controls.",
      "Melanocytic markers highlight both components.",
    ],
    molecular: [
      "Biallelic BAP1 inactivation; a subset is associated with germline BAP1 tumor predisposition syndrome.",
    ],
    differential: [
      [
        "Spitzoid melanoma",
        "BAP1 loss and characteristic biphasic morphology support BAP1-inactivated melanocytoma; assess for additional malignant features.",
      ],
      [
        "Conventional nevus",
        "Lacks the distinct BAP1-deficient epithelioid component.",
      ],
    ],
    pitfalls: [
      "Consider genetic counseling/testing when multiple lesions or relevant personal/family history is present.",
    ],
  },
  {
    name: "Spitz Nevus",
    group: "Benign",
    behavior: "Benign Spitz-lineage tumor",
    site: "Can arise anywhere on the skin; often extremities or head and neck.",
    clinical: [
      "Most common in children and adolescents; typically a rapidly growing pink, red, or pigmented papule.",
    ],
    criteria: [
      "Symmetric, circumscribed proliferation of large spindle and/or epithelioid melanocytes with Spitz-lineage features.",
    ],
    morphology: [
      "Symmetric wedge-shaped or dome-shaped lesion with maturation and Kamino bodies in some cases.",
      "Large spindle and/or epithelioid melanocytes form nests; epidermal hyperplasia may be present.",
      "Mitoses may occur but deep or atypical mitoses are concerning.",
    ],
    ihc: [
      "p16 is usually retained; Ki-67 is generally low.",
      "ALK, ROS1, pan-TRK, or other fusion-directed IHC may be useful as screening in selected cases.",
    ],
    molecular: [
      "Initiating HRAS mutation or kinase fusion involving ROS1, NTRK1, NTRK3, ALK, BRAF, MET, MAP3K8, or RET.",
    ],
    differential: [
      [
        "Spitz melanocytoma",
        "Additional atypical features and secondary genetic events support intermediate classification.",
      ],
      [
        "Spitz melanoma",
        "Marked atypia, destructive growth, deep/atypical mitoses, and progression-associated alterations support malignancy.",
      ],
      [
        "Spitzoid conventional nevus/melanoma",
        "Morphologic resemblance alone does not establish Spitz lineage; defining molecular alterations are required.",
      ],
    ],
    pitfalls: [
      "Do not use 'Spitzoid' as a synonym for a molecularly defined Spitz tumor.",
    ],
  },
  {
    name: "Spitz Melanocytoma (Atypical Spitz Tumor)",
    group: "Intermediate",
    behavior: "Intermediate; metastatic risk is low but not zero",
    site: "Any cutaneous site; common in adolescents and young adults.",
    clinical: [
      "Usually a papule or nodule; age range overlaps with Spitz nevus and Spitz melanoma.",
    ],
    criteria: [
      "Spitz-lineage melanocytic neoplasm with atypical features beyond a conventional Spitz nevus but insufficient criteria for Spitz melanoma.",
    ],
    morphology: [
      "Often asymmetric or larger than a conventional Spitz nevus, with architectural and cytologic atypia.",
      "Assess ulceration, expansile dermal growth, mitotic rate, deep mitoses, and maturation.",
      "Large spindle and epithelioid melanocytes are characteristic of the Spitz lineage.",
    ],
    ihc: [
      "Loss of p16 may occur but is not sufficient to diagnose melanoma.",
      "Ki-67 and HMB45 distribution may assist but are not definitive.",
    ],
    molecular: [
      "Spitz-lineage HRAS mutation or kinase fusion; CDKN2A loss and TERT promoter mutation are progression-associated, but CDKN2A loss alone is insufficient for melanoma.",
    ],
    differential: [
      [
        "Spitz nevus",
        "More symmetric, circumscribed, and mature, with fewer atypical features.",
      ],
      [
        "Spitz melanoma",
        "More convincing malignant architecture/cytology and progression-associated molecular changes.",
      ],
    ],
    pitfalls: [
      "The molecular criteria separating Spitz melanocytoma from Spitz melanoma remain incompletely established.",
    ],
  },
  {
    name: "Spitz Melanoma",
    group: "Malignant",
    behavior: "Malignant Spitz-lineage melanoma",
    site: "Cutaneous; often younger patients than conventional melanoma.",
    clinical: [
      "Occurs in children, adolescents, and adults; often presents as an enlarging nodule.",
    ],
    criteria: [
      "Malignant melanocytic neoplasm with convincing Spitz-lineage morphology and molecular features.",
    ],
    morphology: [
      "Large spindle and/or epithelioid melanocytes with marked atypia and malignant architecture.",
      "Expansile dermal growth, ulceration, deep or atypical mitoses, and lack of maturation may be present.",
    ],
    ihc: [
      "IHC is supportive rather than independently defining; assess p16, Ki-67, and melanocytic markers in context.",
    ],
    molecular: [
      "Spitz-lineage HRAS mutation or kinase fusion; CDKN2A inactivation and TERT promoter mutation support progression.",
    ],
    differential: [
      [
        "Spitz melanocytoma",
        "Intermediate atypical lesion without sufficiently established malignant criteria.",
      ],
      [
        "Conventional melanoma with spitzoid morphology",
        "May resemble Spitz tumor but lacks defining Spitz-lineage molecular alterations.",
      ],
    ],
    pitfalls: [
      "Spitz melanoma may have a better prognosis than conventional melanoma of similar stage, but it remains malignant.",
    ],
  },
  {
    name: "Acral Nevus",
    group: "Benign",
    behavior: "Benign",
    site: "Glabrous skin of palms and soles; nail matrix.",
    clinical: [
      "Usually a small, sharply demarcated pigmented macule or papule.",
      "Nail matrix nevus may produce longitudinal melanonychia.",
    ],
    criteria: [
      "Benign melanocytic proliferation in acral skin or nail apparatus; correlate with clinical/dermoscopic pattern.",
    ],
    morphology: [
      "Junctional nests and/or lentiginous melanocytes may be present.",
      "Nests may be relatively large but remain orderly and symmetric in benign lesions.",
    ],
    ihc: [
      "Melanocytic markers highlight the proliferation; no specific IHC profile.",
    ],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Acral melanoma in situ",
        "Asymmetry, irregular confluent lentiginous growth, pagetoid spread, and cytologic atypia.",
      ],
      [
        "Subungual melanoma",
        "Irregular single-cell proliferation and atypia; correlate with nail-unit clinical findings.",
      ],
    ],
    pitfalls: [
      "Acral location alone does not establish melanoma; assess architecture and clinical extent.",
    ],
  },
  {
    name: "Acral Melanoma",
    group: "Malignant",
    behavior: "Malignant; metastatic potential",
    site: "Glabrous skin of palms/soles and nail apparatus.",
    clinical: [
      "Often presents as an enlarging irregular pigmented lesion; subungual cases may cause longitudinal melanonychia or nail destruction.",
      "Not clearly related to UV exposure.",
    ],
    criteria: [
      "Melanoma arising on glabrous acral skin or nail apparatus.",
      "Identify lentiginous radial growth and assess invasive vertical growth.",
    ],
    morphology: [
      "Melanoma in situ may show subtle lentiginous proliferation of atypical melanocytes.",
      "Radial growth phase is often lentiginous; vertical growth may be spindle-cell, ovoid-cell, or desmoplastic.",
      "Solar elastosis is typically absent.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 support melanocytic differentiation; PRAME may assist in selected cases.",
    ],
    molecular: [
      "Complex copy-number changes, focal amplifications, deletions, and structural rearrangements.",
      "Recurrent amplifications include CCND1, TERT, CDK4, GAB2, and MDM2; KIT, NRAS, and NF1 mutations and kinase fusions may occur.",
    ],
    differential: [
      [
        "Acral nevus",
        "Symmetric, circumscribed, orderly proliferation without significant atypia.",
      ],
      [
        "Reactive melanocytic hyperplasia",
        "Usually lacks the cytologic and architectural features of melanoma; correlate with ulceration/trauma.",
      ],
      [
        "Clear cell sarcoma",
        "Consider EWSR1-related fusion testing in appropriate dermal/subcutaneous tumors.",
      ],
    ],
    pitfalls: [
      "A subset has BRAF p.V600E and lacks the typical complex acral genomic profile; consider low-CSD melanoma arising on acral skin.",
    ],
  },
  {
    name: "Genital Nevus",
    group: "Benign",
    behavior: "Benign; may show atypical features",
    site: "Vulvar, penile, and other genital skin.",
    clinical: [
      "Often occurs in younger patients; may be clinically darkly pigmented.",
    ],
    criteria: [
      "Melanocytic nevus in genital skin; interpret atypia in the context of site-specific morphology.",
    ],
    morphology: [
      "Junctional or compound nevus with architectural features that may appear atypical.",
      "Maturation and circumscription support benignity.",
    ],
    ihc: ["Melanocytic markers are positive; no specific IHC signature."],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Melanoma",
        "Marked asymmetry, confluent growth, pagetoid spread, significant atypia, and lack of maturation.",
      ],
      [
        "Dysplastic nevus",
        "Overlapping architectural/cytologic atypia; site-specific interpretation is important.",
      ],
    ],
    pitfalls: [
      "Genital nevi can appear histologically atypical; avoid overcalling based on atypia alone.",
    ],
  },
  {
    name: "Low-CSD Melanoma",
    group: "Malignant",
    behavior:
      "Malignant; includes superficial spreading and low-CSD nodular presentations",
    site: "Intermittently sun-exposed trunk and proximal extremities; typically age under 55 years.",
    clinical: [
      "Often occurs in younger adults with intermittent UV exposure or tanning-bed exposure.",
      "May arise in association with a common or dysplastic nevus.",
    ],
    criteria: [
      "Melanoma arising in skin with low to moderate cumulative sun damage.",
      "Solar elastosis shows identifiable individual fibers rather than amorphous aggregates.",
    ],
    morphology: [
      "Radial growth phase often shows nests and pagetoid scatter of large neoplastic melanocytes.",
      "Cells often contain dusty cytoplasmic melanin.",
      "Nodular presentation may show vertical growth without an identifiable radial component.",
    ],
    ihc: [
      "Melanocytic markers confirm lineage; ancillary markers do not define the low-CSD subtype.",
    ],
    molecular: [
      "BRAF p.V600E predominates; progression may involve CDKN2A inactivation and TERT promoter mutation.",
    ],
    differential: [
      [
        "High-CSD melanoma",
        "Older patients, chronically sun-exposed sites, severe solar elastosis, and different driver profile.",
      ],
      [
        "Dysplastic nevus",
        "Lacks unequivocal malignant architecture and cytology.",
      ],
    ],
    pitfalls: [
      "Nodular melanoma is a growth-pattern designation and can occur in more than one molecular subtype.",
    ],
  },
  {
    name: "High-CSD Melanoma (Including Lentigo Maligna Melanoma)",
    group: "Malignant",
    behavior: "Malignant",
    site: "Chronically sun-exposed face and distal extremities; typically age over 55 years.",
    clinical: [
      "Often arises on chronically sun-damaged skin in older adults.",
      "May coexist with actinic keratoses and cutaneous SCC.",
    ],
    criteria: [
      "Melanoma associated with severe cumulative sun damage and marked solar elastosis.",
    ],
    morphology: [
      "Adjacent dermis shows severe solar elastosis with amorphous aggregates.",
      "Epidermal component is predominantly lentiginous, with atypical single melanocytes along the basal layer.",
      "Melanocytes are often smaller, with scant cytoplasm and less pigment.",
    ],
    ihc: [
      "SOX10 and Melan-A highlight lentiginous melanocytes; PRAME can assist in selected cases.",
    ],
    molecular: [
      "BRAF non-p.V600E mutations, NF1 biallelic inactivation, NRAS, and KIT alterations may occur; TERT promoter alterations are common in progression.",
    ],
    differential: [
      [
        "Low-CSD melanoma",
        "Intermittently sun-exposed sites, younger age, less solar elastosis, and frequent BRAF p.V600E.",
      ],
      [
        "Benign solar lentigo / pigmented actinic keratosis",
        "Lack malignant melanocytic proliferation.",
      ],
    ],
    pitfalls: [
      "Do not classify solely by site or age; assess solar elastosis and morphology.",
    ],
  },
  {
    name: "Desmoplastic Melanoma",
    group: "Malignant",
    behavior: "Malignant; often neurotropic and locally infiltrative",
    site: "Usually severely sun-damaged head and neck skin of older adults.",
    clinical: [
      "Firm, scar-like or amelanotic plaque/nodule; may be clinically subtle.",
      "Often occurs in severely sun-damaged skin.",
    ],
    criteria: [
      "Intradermal spindle-cell melanoma in dense collagenous/desmoplastic stroma.",
      "Search for an associated lentigo maligna-type radial growth component.",
    ],
    morphology: [
      "Infiltrative spindle cells dispersed in dense collagenous stroma.",
      "Neurotropism/perineural invasion is common.",
      "Pure and mixed forms are recognized.",
    ],
    ihc: [
      "S100 and SOX10 are typically strongly positive.",
      "Melan-A and HMB45 are often negative in the desmoplastic component.",
      "Cytokeratins are generally negative; interpret broad panels to exclude spindle-cell mimics.",
    ],
    molecular: [
      "Very high mutation burden with UV signature; NF1 inactivation is a common driver, often with other MAPK-pathway alterations.",
    ],
    differential: [
      [
        "Scar / dermatofibroma",
        "Lacks diffuse strong S100/SOX10-positive infiltrative atypical melanocytes.",
      ],
      [
        "Atypical fibroxanthoma / pleomorphic dermal sarcoma",
        "Usually lacks diffuse melanocytic marker expression.",
      ],
      [
        "Neural tumors",
        "Integrate SOX10/S100, architecture, and clinical context.",
      ],
    ],
    pitfalls: [
      "A negative Melan-A or HMB45 does not exclude desmoplastic melanoma.",
    ],
  },
  {
    name: "Mucosal Melanoma",
    group: "Malignant",
    behavior: "Malignant",
    site: "Mucosal surfaces; site-dependent presentation.",
    clinical: [
      "May present as a pigmented or amelanotic mass, often diagnosed at an advanced local stage.",
      "No etiologic relationship with UV exposure.",
    ],
    criteria: [
      "Primary melanoma arising from mucosal melanocytes; exclude metastasis from a cutaneous or ocular primary.",
    ],
    morphology: [
      "May arise in lentiginous melanocytic proliferation or melanoma in situ, or de novo.",
      "Invasive component may be spindle or ovoid and may show desmoplasia.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 support melanocytic differentiation; expression may vary.",
    ],
    molecular: [
      "Low point-mutation burden with frequent copy-number changes and structural rearrangements.",
      "KIT, NRAS, NF1, and SPRED1 mutations occur; BRAF mutations are uncommon.",
    ],
    differential: [
      [
        "Metastatic melanoma",
        "Clinical history and exclusion of another primary site are essential.",
      ],
      [
        "Clear cell sarcoma",
        "Consider EWSR1::ATF1/CREB1 fusion in appropriate tumors.",
      ],
      ["Carcinoma", "Use broad-spectrum keratins and melanocytic markers."],
    ],
    pitfalls: [
      "Do not infer UV-driven biology from morphology; site and molecular context matter.",
    ],
  },
  {
    name: "Blue Nevus (Dendritic and Cellular)",
    group: "Benign",
    behavior: "Benign; cellular variant may be locally persistent",
    site: "Usually dorsal hands/feet, scalp, and other dermal sites.",
    clinical: [
      "Blue-gray to blue-black papule or nodule.",
      "Dendritic and cellular patterns are recognized.",
    ],
    criteria: [
      "Dermal melanocytic proliferation with blue-nevus pathway features.",
    ],
    morphology: [
      "Dendritic blue nevus: pigmented dendritic melanocytes in the dermis, often among collagen bundles.",
      "Cellular blue nevus: more cellular nodular proliferation with spindle and epithelioid melanocytes.",
      "Pigment-laden melanophages are common.",
    ],
    ihc: [
      "SOX10 and S100 highlight melanocytes; HMB45 and Melan-A are often positive.",
    ],
    molecular: [
      "Activating GNAQ or GNA11 mutations are characteristic; Gqα pathway alterations may also involve PLCB4 or CYSLTR2.",
    ],
    differential: [
      [
        "Melanoma arising in blue nevus",
        "New atypia, expansile growth, necrosis, mitotic activity, and progression-associated alterations.",
      ],
      [
        "Dermal melanoma",
        "Assess for a benign blue-nevus component and Gqα-pathway background.",
      ],
    ],
    pitfalls: [
      "Cellular blue nevus can be large and deep; size alone does not establish malignancy.",
    ],
  },
  {
    name: "Melanoma Arising in Blue Nevus",
    group: "Malignant",
    behavior: "Malignant; metastatic potential",
    site: "Usually dermis/subcutis at a site of a pre-existing blue nevus.",
    clinical: [
      "Often presents as an enlarging or newly symptomatic nodule in a longstanding blue lesion.",
    ],
    criteria: [
      "Malignant melanocytic component arising in association with a blue nevus.",
      "Demonstrate convincing malignant progression rather than cellularity alone.",
    ],
    morphology: [
      "Atypical epithelioid or spindle-cell component may arise adjacent to conventional blue nevus.",
      "Marked atypia, mitoses, necrosis, and destructive growth support melanoma.",
    ],
    ihc: [
      "Melanocytic markers are positive; loss of BAP1 may occur in a subset.",
    ],
    molecular: [
      "GNAQ/GNA11 pathway initiating mutation with progression alterations involving BAP1, SF3B1, or EIF1AX.",
    ],
    differential: [
      [
        "Cellular blue nevus",
        "Lacks convincing malignant cytology, destructive growth, and progression features.",
      ],
      [
        "Primary dermal melanoma",
        "No identifiable blue-nevus component; clinical exclusion of metastasis is required.",
      ],
    ],
    pitfalls: [
      "A blue-nevus pathway mutation alone does not distinguish benign from malignant lesions.",
    ],
  },
  {
    name: "Congenital Melanocytic Nevus",
    group: "Benign",
    behavior: "Benign precursor; melanoma risk varies with size and phenotype",
    site: "Present at birth or shortly thereafter; any cutaneous site; giant lesions may involve extensive body surface.",
    clinical: [
      "Present at birth or early infancy; classified clinically by projected adult size.",
      "Giant congenital nevi carry greater melanoma risk and may be associated with neurocutaneous melanosis.",
    ],
    criteria: [
      "Melanocytic nevus with congenital clinical onset and characteristic deep/adnexal distribution.",
    ],
    morphology: [
      "Nevus cells may extend deeply into dermis and subcutis and surround adnexa, vessels, and nerves.",
      "Neurotization and maturation may be present.",
      "Proliferative nodules can arise within large congenital nevi.",
    ],
    ihc: [
      "Melanocytic markers highlight nevus cells; use BAP1 and other markers selectively when a nodule is atypical.",
    ],
    molecular: [
      "NRAS mutations predominate in giant congenital nevi; smaller/medium lesions more often harbor BRAF alterations.",
    ],
    differential: [
      [
        "Proliferative nodule",
        "Assess circumscription, cytology, mitoses, necrosis, and molecular relationship to background nevus.",
      ],
      [
        "Melanoma arising in congenital nevus",
        "Marked atypia, destructive growth, atypical mitoses, and progression-associated changes.",
      ],
    ],
    pitfalls: [
      "Deep extension and neurotization can be intrinsic to congenital nevi and do not alone indicate invasion.",
    ],
  },
  {
    name: "Proliferative Nodule in Congenital Melanocytic Nevus",
    group: "Intermediate",
    behavior:
      "Usually benign/intermediate; rare cases remain difficult to classify",
    site: "Within large or giant congenital melanocytic nevi, often in infants and children.",
    clinical: [
      "New or rapidly enlarging nodule arising within a congenital nevus, particularly in infancy.",
    ],
    criteria: [
      "Nodular proliferation arising within congenital nevus; distinguish benign proliferative nodule from melanoma by integrated criteria.",
    ],
    morphology: [
      "Often relatively well-circumscribed nodule with increased cellularity compared with background nevus.",
      "Cytologic atypia and mitotic activity may be present; assess atypical mitoses, necrosis, and destructive growth.",
      "Compare directly with the background congenital nevus.",
    ],
    ihc: [
      "Ki-67 and HMB45 distribution may assist but are not independently definitive; retain internal controls.",
    ],
    molecular: [
      "Often shares initiating NRAS/BRAF alteration with background nevus; additional progression alterations may support melanoma in selected cases.",
    ],
    differential: [
      [
        "Melanoma arising in giant congenital nevus",
        "Marked atypia, atypical mitoses, necrosis, destructive growth, and molecular progression.",
      ],
      [
        "Background congenital nevus",
        "Lower cellularity with maturation and no expansile nodular growth.",
      ],
    ],
    pitfalls: [
      "Age, rapid growth, and mitoses must be interpreted in context; no single marker reliably separates all cases.",
    ],
  },
  {
    name: "Melanoma Arising in Giant Congenital Nevus",
    group: "Malignant",
    behavior: "Malignant; may metastasize early",
    site: "Within giant congenital melanocytic nevus; may be cutaneous or deep/visceral in neurocutaneous melanosis.",
    clinical: [
      "Often presents in infancy or childhood; risk is greatest in giant congenital nevi.",
      "Deep primary melanoma may occur in the setting of neurocutaneous melanosis.",
    ],
    criteria: [
      "Unequivocal melanoma arising in a congenital nevus or associated deep melanocytic proliferation.",
    ],
    morphology: [
      "Malignant nodule with destructive growth, significant atypia, mitotic activity, and/or necrosis.",
      "A background congenital nevus may be identifiable but can be extensively overrun.",
    ],
    ihc: [
      "Melanocytic markers support lineage; interpret proliferation markers and BAP1 in the morphologic context.",
    ],
    molecular: [
      "NRAS is the predominant alteration in giant congenital nevi and associated melanomas; additional progression events are required.",
    ],
    differential: [
      [
        "Proliferative nodule",
        "Usually lacks the full constellation of malignant features.",
      ],
      [
        "Neurocutaneous melanosis-associated meningeal disease",
        "Correlate with imaging and clinical distribution.",
      ],
    ],
    pitfalls: [
      "A superficial biopsy may miss a deep component; assess the entire lesion and clinical setting.",
    ],
  },
  {
    name: "Conjunctival Nevus",
    group: "Benign",
    behavior: "Benign",
    site: "Bulbar or palpebral conjunctiva.",
    clinical: [
      "Usually a localized, often pigmented conjunctival lesion; may contain cysts.",
    ],
    criteria: [
      "Benign conjunctival melanocytic proliferation; classify junctional, compound, subepithelial/stromal, balloon-cell, or blue nevus patterns.",
    ],
    morphology: [
      "Nests of bland melanocytes with maturation; epithelial inclusion cysts may be present.",
      "Subepithelial/stromal nevi are confined to substantia propria.",
    ],
    ihc: ["SOX10, S100, Melan-A, and HMB45 highlight melanocytes."],
    molecular: [
      "No routine testing; conjunctival nevi may be precursors in several molecular pathways.",
    ],
    differential: [
      [
        "Primary acquired melanosis / melanoma in situ",
        "Atypical confluent intraepithelial melanocytes and pagetoid spread.",
      ],
      [
        "Conjunctival melanoma",
        "Invasive atypical melanocytes with destructive growth.",
      ],
    ],
    pitfalls: [
      "Clinical extent and comparison with prior photographs are useful.",
    ],
  },
  {
    name: "Conjunctival Melanoma",
    group: "Malignant",
    behavior: "Malignant; local recurrence and metastatic potential",
    site: "Bulbar or palpebral conjunctiva.",
    clinical: [
      "Usually adults; may arise de novo or in association with primary acquired melanosis or a nevus.",
    ],
    criteria: [
      "Primary conjunctival melanoma; identify intraepithelial precursor and invasive component when present.",
    ],
    morphology: [
      "Variable epithelioid or spindle-cell morphology; may show junctional/intraepithelial component.",
      "May arise in association with primary acquired melanosis or blue nevus.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 support melanocytic differentiation.",
    ],
    molecular: [
      "Heterogeneous: BRAF/TERT alterations in low-CSD-like cases; NF1/NRAS in high-CSD-like cases; KIT/ATRX in mucosal-like cases; GNAQ/GNA11 with BAP1/SF3B1/EIF1AX in blue-nevus/uveal-like cases.",
    ],
    differential: [
      [
        "Metastatic melanoma",
        "Exclude a cutaneous, mucosal, or uveal primary.",
      ],
      ["Conjunctival nevus", "Lacks malignant cytology and invasive growth."],
    ],
    pitfalls: [
      "Conjunctival melanoma is genetically heterogeneous rather than a single molecular subtype.",
    ],
  },
  {
    name: "Uveal Melanocytoma",
    group: "Benign",
    behavior: "Benign nevus by biology; traditional name retained",
    site: "Uveal tract, including choroid, ciliary body, or iris.",
    clinical: [
      "Usually incidental pigmented intraocular lesion; clinical distinction from melanoma may require growth assessment.",
    ],
    criteria: [
      "Circumscribed uveal melanocytic nevus; WHO retains the traditional term uveal melanocytoma.",
    ],
    morphology: [
      "Bland spindle or epithelioid melanocytes; assess cellularity, atypia, and growth.",
    ],
    ihc: [
      "Melanocytic markers support lineage; no single IHC marker establishes benignity.",
    ],
    molecular: [
      "GNAQ, GNA11, PLCB4, or CYSLTR2 initiating alterations may be present; these alone do not indicate melanoma.",
    ],
    differential: [
      [
        "Uveal melanoma",
        "Progression alterations, cytologic atypia, and clinical growth support melanoma.",
      ],
      [
        "Melanoma metastasis to uvea",
        "Clinical history and systemic evaluation are required.",
      ],
    ],
    pitfalls: [
      "GNAQ/GNA11 mutation is shared by benign and malignant lesions in this pathway.",
    ],
  },
  {
    name: "Uveal Melanoma",
    group: "Malignant",
    behavior: "Malignant; metastatic risk relates to molecular class",
    site: "Choroid most common; also ciliary body and iris.",
    clinical: [
      "Typically adults; may be detected during eye examination or present with visual symptoms.",
    ],
    criteria: ["Malignant melanocytic tumor arising in the uveal tract."],
    morphology: [
      "Spindle and epithelioid cell types; mixed tumors contain both.",
      "Assess tumor size, ciliary body involvement, extrascleral extension, and mitotic activity.",
    ],
    ihc: [
      "Melanocytic markers support lineage; BAP1 immunohistochemistry may provide prognostic/molecular-class information.",
    ],
    molecular: [
      "GNAQ/GNA11 (or less often PLCB4/CYSLTR2) initiating alteration; progression alterations include BAP1, SF3B1, or EIF1AX.",
    ],
    differential: [
      [
        "Uveal melanocytoma",
        "Bland circumscribed nevus without progression features.",
      ],
      [
        "Metastatic carcinoma to choroid",
        "Use keratins and organ-specific markers; clinical context is essential.",
      ],
    ],
    pitfalls: [
      "Uveal melanoma has a distinct molecular pathway and should not be grouped with UV-driven cutaneous melanoma.",
    ],
  },
  {
    name: "Meningeal Melanocytoma and Meningeal Melanoma",
    group: "Intermediate / Malignant",
    behavior: "Ranges from circumscribed melanocytoma to malignant melanoma",
    site: "Leptomeninges; diffuse pediatric disease may occur with giant congenital nevus/neurocutaneous melanosis.",
    clinical: [
      "Circumscribed lesions may occur in adults; diffuse meningeal melanocytic disease is associated with giant congenital nevi in children.",
    ],
    criteria: [
      "Primary meningeal melanocytic neoplasm; exclude metastatic melanoma and melanocytic lesions associated with neurocutaneous melanosis.",
    ],
    morphology: [
      "Circumscribed melanocytoma is usually bland and low proliferative.",
      "Meningeal melanoma shows malignant cytology, mitoses, and destructive growth.",
      "Diffuse pediatric lesions may be associated with neurocutaneous melanosis.",
    ],
    ihc: ["SOX10, S100, Melan-A, and HMB45 support melanocytic lineage."],
    molecular: [
      "Circumscribed tumors: GNAQ, GNA11, PLCB4, or CYSLTR2; progression to melanoma may involve BAP1, SF3B1, or EIF1AX.",
      "Diffuse pediatric tumors associated with congenital nevi often harbor NRAS, with a minority showing BRAF alterations.",
    ],
    differential: [
      [
        "Metastatic melanoma",
        "Exclude a cutaneous, ocular, or mucosal primary.",
      ],
      [
        "Schwannian neoplasm",
        "Use morphology and a broader IHC panel; melanocytic markers overlap.",
      ],
    ],
    pitfalls: [
      "Specify the anatomic site; avoid unqualified use of 'melanocytoma' or 'melanoma'.",
    ],
  },
  {
    name: "Nodular Melanoma",
    group: "Malignant",
    behavior: "Malignant; vertical growth phase at presentation",
    site: "Any cutaneous site; may occur in low-CSD or high-CSD settings.",
    clinical: [
      "Rapidly enlarging papule or nodule; often clinically raised and may be amelanotic.",
    ],
    criteria: [
      "Primary melanoma composed predominantly of vertical growth phase without an identifiable radial growth phase.",
    ],
    morphology: [
      "Expansile dermal nodule of atypical melanocytes.",
      "No convincing associated radial growth phase is identified after adequate sampling.",
    ],
    ihc: [
      "Melanocytic markers confirm lineage; IHC does not define nodular growth pattern.",
    ],
    molecular: [
      "No unique molecular alteration defines nodular melanoma; classify within low-CSD or high-CSD pathway when possible.",
    ],
    differential: [
      [
        "Melanoma with vertical growth phase and radial component",
        "An identifiable radial growth phase excludes the strict nodular melanoma definition.",
      ],
      [
        "Dermal nevus",
        "Lacks malignant cytology, mitotic activity, and destructive growth.",
      ],
    ],
    pitfalls: [
      "Nodular is a growth-phase pattern, not a separate molecular subtype.",
    ],
  },
  {
    name: "Naevoid Melanoma",
    group: "Malignant",
    behavior: "Malignant; may mimic a benign nevus",
    site: "Cutaneous; any site.",
    clinical: [
      "Often presents as a clinically inconspicuous papule or nodule.",
    ],
    criteria: [
      "Melanoma with a deceptively nevus-like silhouette or cytology but unequivocal malignant features.",
    ],
    morphology: [
      "May show small, relatively uniform melanocytes and nested growth.",
      "Look for asymmetry, poor circumscription, lack of maturation, deep mitoses, and destructive growth.",
    ],
    ihc: [
      "Ki-67, HMB45, and PRAME may assist in selected cases but are not independently diagnostic.",
    ],
    molecular: [
      "No single defining molecular alteration; assess in the context of the underlying melanoma subtype.",
    ],
    differential: [
      [
        "Common acquired nevus",
        "Symmetric, circumscribed, with maturation and low proliferative activity.",
      ],
      [
        "Deep penetrating nevus / melanocytoma",
        "Characteristic architecture and pathway-specific molecular findings may support an intermediate lesion.",
      ],
    ],
    pitfalls: [
      "Small cell size and nevus-like appearance do not exclude melanoma.",
    ],
  },
  {
    name: "Dermal Melanoma",
    group: "Malignant",
    behavior: "Malignant; primary dermal melanoma is a diagnosis of exclusion",
    site: "Dermis, without an evident epidermal or junctional component.",
    clinical: [
      "Dermal or subcutaneous nodule; clinical history and staging are essential.",
    ],
    criteria: [
      "Dermal melanoma without an identifiable epidermal component after adequate sampling and clinical exclusion of another primary.",
    ],
    morphology: [
      "Dermal-based malignant melanocytic proliferation, often nodular.",
      "No convincing junctional/in situ component is identified.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 support melanocytic differentiation.",
    ],
    molecular: [
      "No specific molecular profile; compare with any known prior melanoma when metastasis is a consideration.",
    ],
    differential: [
      [
        "Cutaneous metastasis",
        "Clinical history, multiplicity, and absence of an epidermal component favor metastasis.",
      ],
      [
        "Melanoma arising in blue nevus",
        "Look for a pre-existing blue-nevus component and Gqα-pathway alterations.",
      ],
      ["Clear cell sarcoma", "EWSR1-related fusion testing may be required."],
    ],
    pitfalls: [
      "Do not diagnose primary dermal melanoma until metastatic disease and melanoma arising in a dermal nevus/blue nevus are considered.",
    ],
  },
  {
    name: "Nevus Spilus (Speckled Lentiginous Nevus)",
    group: "Benign",
    behavior: "Benign; melanoma arising within large/segmental lesions is rare",
    site: "Any cutaneous site; may be segmental or extensive.",
    clinical: [
      "Tan or light-brown background patch with superimposed darker macules or papules.",
      "Often congenital or acquired in childhood.",
    ],
    criteria: [
      "Background café-au-lait-like macule with superimposed melanocytic nevi.",
    ],
    morphology: [
      "Background shows lentiginous melanocytic hyperplasia.",
      "Superimposed macules/papules may show junctional, compound, or blue-nevus components.",
    ],
    ihc: [
      "Melanocytic markers highlight the superimposed nevus components; no specific IHC profile.",
    ],
    molecular: [
      "No single defining molecular alteration; individual components may harbor pathway-specific mutations.",
    ],
    differential: [
      [
        "Congenital melanocytic nevus",
        "Usually more uniform congenital proliferation rather than speckled background with superimposed nevi.",
      ],
      [
        "Melanoma arising in nevus spilus",
        "Look for a new asymmetric, atypical, expansile malignant component.",
      ],
    ],
    pitfalls: [
      "Large or segmental lesions may carry increased melanoma risk; clinical surveillance is appropriate.",
    ],
  },
  {
    name: "Special-Site Nevi (Breast, Axilla, Scalp, and Ear)",
    group: "Benign",
    behavior: "Benign; no demonstrated increased melanoma risk",
    site: "Breast, axilla, scalp, and ear.",
    clinical: [
      "May show unusual clinical or histologic appearance for a conventional nevus.",
    ],
    criteria: [
      "Nevus arising at a special anatomic site with site-associated architectural/cytologic atypia but overall benign features.",
    ],
    morphology: [
      "May show architectural disorder, junctional confluence, or cytologic atypia that can mimic dysplastic nevus or melanoma.",
      "Overall symmetry, circumscription, and maturation support benignity.",
    ],
    ihc: ["Melanocytic markers are positive; no specific IHC profile."],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Melanoma in situ",
        "Confluent atypical growth, pagetoid spread, and significant cytologic atypia.",
      ],
      [
        "Dysplastic nevus",
        "Overlap is substantial; site-specific context and overall architecture are important.",
      ],
    ],
    pitfalls: [
      "Do not overinterpret atypia without accounting for special-site morphology.",
    ],
  },
  {
    name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
    group: "Benign",
    behavior: "Benign Spitz-spectrum nevus",
    site: "Often lower extremities, especially thighs; also other cutaneous sites.",
    clinical: [
      "Usually a small, darkly pigmented papule in children or young adults.",
    ],
    criteria: [
      "Symmetric, sharply circumscribed proliferation of pigmented spindle melanocytes.",
    ],
    morphology: [
      "Junctional nests of uniform pigmented spindle cells, often vertically oriented.",
      "Kamino bodies may be present; maturation and circumscription support benignity.",
    ],
    ihc: ["Melanocytic markers are positive; no specific IHC signature."],
    molecular: [
      "Spitz-lineage alterations may occur; molecular testing is not routinely required in typical lesions.",
    ],
    differential: [
      [
        "Spitz melanocytoma/melanoma",
        "Greater asymmetry, atypia, expansile growth, deep mitoses, or other malignant features.",
      ],
      [
        "Conventional melanoma",
        "Lacks the orderly, symmetric pattern of a typical Reed nevus.",
      ],
    ],
    pitfalls: [
      "Marked pigmentation and spindle-cell morphology alone do not indicate malignancy.",
    ],
  },
  {
    name: "MITF Pathway-Activated Melanocytic Tumors",
    group: "Intermediate",
    behavior:
      "Emerging intermediate category; biologic risk is incompletely defined",
    site: "Cutaneous; site and age vary by molecular subtype.",
    clinical: ["Rare lesions; clinical presentation varies."],
    criteria: [
      "Melanocytic neoplasm with characteristic morphology and MITF-pathway-associated genetic alteration, including selected ACTIN or CREM rearranged tumors.",
    ],
    morphology: [
      "Morphology is variable and may include epithelioid or spindle-cell patterns.",
      "Interpret with the specific fusion and clinical-pathologic setting.",
    ],
    ihc: [
      "Melanocytic markers support lineage; no single immunophenotype is defining.",
    ],
    molecular: [
      "MITF pathway-associated alterations include ACTIN fusions; CREM rearrangements have also been reported. The supplied source notes limited outcome data, particularly for CREM-rearranged tumors.",
    ],
    differential: [
      [
        "Spitz melanocytic tumor",
        "Requires defining Spitz-lineage HRAS mutation or kinase fusion.",
      ],
      [
        "Conventional melanoma",
        "Assess for established malignant features and subtype-specific molecular alterations.",
      ],
    ],
    pitfalls: [
      "Evidence is limited; avoid assigning a definitive risk category beyond what the source supports.",
    ],
  },
  {
    name: "Melanosis (Including Nevus of Ota and Nevus of Ito)",
    group: "Benign",
    behavior: "Benign melanocytosis; malignant transformation is rare",
    site: "Nevus of Ota: periocular/facial dermis and ocular structures. Nevus of Ito: shoulder/supraclavicular region.",
    clinical: [
      "Blue-gray or slate pigmentation in a characteristic distribution.",
      "Ocular involvement in nevus of Ota may be associated with glaucoma.",
    ],
    criteria: [
      "Dermal melanocytosis without a discrete expansile melanocytic neoplasm.",
    ],
    morphology: [
      "Dendritic melanocytes are dispersed between collagen bundles in the dermis.",
      "Pigment may involve dermal and ocular tissues.",
    ],
    ihc: ["SOX10 and S100 highlight dermal melanocytes."],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Blue nevus",
        "Usually a discrete melanocytic proliferation rather than diffuse dermal melanocytosis.",
      ],
      [
        "Dermal melanoma",
        "Atypia, expansile growth, mitotic activity, and destructive invasion.",
      ],
    ],
    pitfalls: [
      "Ocular involvement warrants clinical assessment; glaucoma is a recognized complication of nevus of Ota.",
    ],
  },
  {
    name: "Congenital Dermal Melanocytosis",
    group: "Benign",
    behavior: "Benign; usually regresses during childhood",
    site: "Usually lumbosacral region; may involve other sites.",
    clinical: [
      "Blue-gray patch present at birth or early infancy.",
      "Most lesions fade by age 5–6 years.",
    ],
    criteria: [
      "Dermal melanocytosis present congenitally, without a discrete melanocytic mass.",
    ],
    morphology: [
      "Dendritic melanocytes are present in the dermis, often in the deeper dermis.",
    ],
    ihc: ["SOX10 and S100 highlight dermal melanocytes."],
    molecular: ["No routine molecular testing."],
    differential: [
      [
        "Nevus of Ota/Ito",
        "Different characteristic anatomic distribution and persistence.",
      ],
      [
        "Blue nevus",
        "Discrete dermal melanocytic proliferation rather than diffuse congenital dermal melanocytosis.",
      ],
    ],
    pitfalls: [
      "Multiple patches, large size, dark pigmentation, or extra-sacral involvement may predict persistence.",
    ],
  },
  {
    name: "Diffuse Meningeal Melanocytosis and Melanomatosis",
    group: "Intermediate / Malignant",
    behavior:
      "Melanocytosis may be indolent initially; melanomatosis is highly aggressive",
    site: "Diffuse leptomeningeal involvement; often associated with giant congenital nevus/neurocutaneous melanosis in children.",
    clinical: [
      "May be asymptomatic for a variable period before neurologic symptoms develop.",
      "Pediatric cases often occur with giant congenital nevi and neurocutaneous melanosis.",
    ],
    criteria: [
      "Diffuse leptomeningeal melanocytic proliferation; distinguish melanocytosis from melanomatosis by cytology, proliferation, and destructive behavior.",
    ],
    morphology: [
      "Melanocytosis shows diffuse melanocytic proliferation without overt malignant features.",
      "Melanomatosis shows malignant cytology, increased mitoses, and destructive growth.",
    ],
    ihc: ["SOX10, S100, Melan-A, and HMB45 support melanocytic lineage."],
    molecular: [
      "Often NRAS-mutated in children with neurocutaneous melanosis; a minority show BRAF mutations or fusions.",
    ],
    differential: [
      [
        "Circumscribed meningeal melanocytoma/melanoma",
        "Diffuse growth pattern versus circumscribed mass.",
      ],
      [
        "Metastatic melanoma",
        "Exclude an extradural primary, especially cutaneous melanoma.",
      ],
    ],
    pitfalls: [
      "Once symptoms develop, prognosis may be poor; correlate with CNS imaging and clinical course.",
    ],
  },
  {
    name: "Conjunctival Melanocytic Intraepithelial Lesions",
    group: "Intermediate",
    behavior: "Variable; a subset progresses to invasive melanoma",
    site: "Bulbar or palpebral conjunctival epithelium.",
    clinical: ["Flat or patchy conjunctival pigmentation; may be multifocal."],
    criteria: [
      "Atypical intraepithelial melanocytic proliferation; classify by cytologic atypia, nesting, and pagetoid spread.",
    ],
    morphology: [
      "Atypical melanocytes may show epithelial nesting and pagetoid spread.",
      "Epithelioid cytomorphology and prominent atypia are associated with greater recurrence/progression risk.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 highlight melanocytes; interpret distribution with morphology.",
    ],
    molecular: [
      "Molecular profile is heterogeneous and may parallel low-CSD, high-CSD, mucosal, or blue-nevus/uveal pathways.",
    ],
    differential: [
      [
        "Conjunctival nevus",
        "Bland, circumscribed nests with maturation and no significant atypia.",
      ],
      ["Conjunctival melanoma", "Invasive component with destructive growth."],
    ],
    pitfalls: [
      "The source reports progression in a subset; precise risk depends on cytomorphology and extent.",
    ],
  },
  {
    name: "Melanoma Metastatic to the Skin",
    group: "Malignant",
    behavior: "Metastatic melanoma; stage IV if distant cutaneous metastasis",
    site: "Dermis and/or subcutis; may be solitary or multiple.",
    clinical: [
      "One or multiple cutaneous/subcutaneous nodules; may precede recognition of the primary.",
    ],
    criteria: [
      "Dermal or subcutaneous melanoma deposit without an in situ/junctional component, interpreted with clinical history and staging.",
    ],
    morphology: [
      "Nodular dermal or subcutaneous proliferation of atypical melanocytes.",
      "Epidermal involvement may be absent; satellite, in-transit, or distant cutaneous deposits have staging implications.",
    ],
    ihc: [
      "SOX10, S100, Melan-A, and HMB45 support melanocytic differentiation.",
    ],
    molecular: [
      "Compare molecular profile with known primary melanoma when needed to establish clonality.",
    ],
    differential: [
      [
        "Primary dermal melanoma",
        "Requires exclusion of metastasis and careful assessment for a primary dermal melanocytic tumor.",
      ],
      [
        "Melanoma arising in blue nevus",
        "Look for a blue-nevus component and pathway-specific alterations.",
      ],
    ],
    pitfalls: [
      "Distinguish local satellite/in-transit disease from distant cutaneous metastasis because staging differs.",
    ],
  },
];

const cats = ["All", "Benign", "Intermediate", "Malignant"];
function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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
export default function MelanocyticTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Junctional, Compound, and Dermal Nevi",
    "BAP1-Inactivated Melanocytoma",
    "Low-CSD Melanoma",
    "Acral Melanoma",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" ||
            x.group === cat ||
            (cat === "Intermediate" && x.group.includes("Intermediate")) ||
            (cat === "Malignant" && x.group.includes("Malignant"))) &&
          [
            x.name,
            x.group,
            x.site,
            x.behavior,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Skin Tumors / Melanocytic Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Melanocytic Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference integrating nevus,
                melanocytoma, and melanoma classification with clinicopathologic
                and molecular pathways.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify the lesion by its evolutionary state, not by cytologic
                atypia alone.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                A nevus generally carries an initiating driver; a melanocytoma
                has additional pathogenic alterations; melanoma shows malignant
                progression.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: nevus → melanocytoma → melanoma">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              [
                "Nevus",
                "Benign clonal proliferation, typically with a single initiating alteration and intact senescence mechanisms.",
                "Benign",
              ],
              [
                "Melanocytoma",
                "Intermediate neoplasm with additional pathogenic alterations beyond the initiating driver.",
                "Intermediate",
              ],
              [
                "Melanoma",
                "Malignant progression with destructive growth and metastatic potential.",
                "Malignant",
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
                <span className="mt-3 inline-block rounded-md bg-white px-2 py-1 text-[10px] font-bold uppercase text-slate-600">
                  {x[2]}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            WHO terminology in the supplied source reserves <b>nevus</b> for
            lesions with features of a single initiating alteration and uses{" "}
            <b>melanocytoma</b> for genetically intermediate lesions. Uveal
            melanocytoma is retained as a traditional exception, although
            biologically it has nevus-like features.
          </p>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield distinction: nevus vs melanocytoma vs melanoma">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">Nevus</th>
                    <th className="py-2 pr-3">Melanocytoma</th>
                    <th className="py-2">Melanoma</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Biologic category",
                      "Benign",
                      "Intermediate",
                      "Malignant",
                    ],
                    [
                      "Genetic evolution",
                      "Usually one initiating driver",
                      "Initiating driver + additional pathogenic event(s)",
                      "Multiple progression events; pathway-specific",
                    ],
                    [
                      "Architecture",
                      "Usually symmetric and circumscribed",
                      "May be biphasic or asymmetric",
                      "Often asymmetric, infiltrative/destructive",
                    ],
                    [
                      "Cytology",
                      "Usually bland; maturation common",
                      "Variable atypia; subtype-specific",
                      "Often significant atypia; may be deceptively bland",
                    ],
                    [
                      "Mitoses",
                      "Usually absent or low",
                      "Variable; assess depth and atypical forms",
                      "Often increased; atypical/deep mitoses concerning",
                    ],
                    [
                      "Metastatic potential",
                      "Extremely low",
                      "Low but not zero; varies by entity",
                      "Present",
                    ],
                    [
                      "Examples",
                      "Common, dysplastic, blue, Spitz nevi",
                      "BAP1-inactivated, WNT-activated, pigmented epithelioid, Spitz melanocytoma",
                      "Low-/high-CSD, acral, mucosal, desmoplastic, Spitz melanoma",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 pr-3">{r[1]}</td>
                      <td className="py-2 pr-3">{r[2]}</td>
                      <td className="py-2">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="High-yield molecular pathways">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Common acquired nevus", "BRAF p.V600E; MAPK pathway"],
                    [
                      "Congenital nevus",
                      "NRAS (especially giant); BRAF in a subset",
                    ],
                    [
                      "Spitz lineage",
                      "HRAS or kinase fusions: ALK, ROS1, NTRK1/3, BRAF, MET, MAP3K8, RET",
                    ],
                    [
                      "BAP1-inactivated melanocytoma",
                      "BRAF background + biallelic BAP1 inactivation",
                    ],
                    [
                      "Pigmented epithelioid melanocytoma",
                      "PRKAR1A inactivation",
                    ],
                    [
                      "WNT-activated deep penetrating melanocytoma",
                      "CTNNB1/β-catenin or related WNT-pathway activation; ID1",
                    ],
                    [
                      "Blue nevus / uveal / related pathway",
                      "GNAQ, GNA11, PLCB4, CYSLTR2",
                    ],
                    [
                      "Acral / mucosal melanoma",
                      "Copy-number alterations; KIT, NRAS, NF1 and kinase rearrangements (site-dependent)",
                    ],
                    [
                      "UV-associated melanoma",
                      "BRAF, NRAS, NF1; TERT promoter and CDKN2A progression events",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <Panel title="Melanoma subtype framework">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-bold">UV-associated</h4>
              <Bullets
                items={[
                  "Low-CSD melanoma: intermittent sun exposure, usually younger patients, back/proximal extremities, often BRAF p.V600E.",
                  "High-CSD melanoma: chronically sun-damaged skin, usually older patients, severe solar elastosis, often NF1/NRAS/non-p.V600E BRAF alterations.",
                  "Desmoplastic melanoma: usually severely sun-damaged skin; spindle-cell morphology, neurotropism, high UV mutation burden, frequent NF1 alterations.",
                ]}
              />
            </div>
            <div>
              <h4 className="mb-2 font-bold">Not clearly UV-associated</h4>
              <Bullets
                items={[
                  "Acral melanoma: palms, soles, nail apparatus; complex copy-number changes and structural rearrangements.",
                  "Mucosal melanoma: mucosal sites; low point-mutation burden, frequent copy-number changes; KIT/NRAS/NF1 in subsets.",
                  "Uveal melanoma: Gqα pathway initiation followed by BAP1, SF3B1, or EIF1AX progression events.",
                  "Melanoma associated with congenital nevus, blue nevus, or Spitz lineage: pathway-specific precursor and progression alterations.",
                ]}
              />
            </div>
          </div>
        </Panel>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Diagnostic profiles and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, clinical setting, morphology, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. BAP1, PRAME, GNAQ, pagetoid..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular Pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching entity.
              </div>
            )}
          </div>
        </section>
        <Panel title="Practical melanoma assessment and reporting checklist">
          <Bullets
            items={[
              "Document anatomic site, laterality, clinical size, and whether the lesion is on chronically sun-damaged, intermittently sun-exposed, acral, mucosal, or ocular skin.",
              "For invasive cutaneous melanoma, report Breslow thickness, ulceration, mitotic rate per mm², microsatellites, lymphovascular invasion, neurotropism, and margins as applicable.",
              "Distinguish radial growth phase from vertical growth phase; nodular melanoma has no identifiable radial growth phase.",
              "For melanocytomas and lesions of uncertain significance, describe the pathway and the specific intermediate entity; avoid using 'melanocytoma' without a qualifier.",
              "Use PRAME, p16, Ki-67, HMB45, BAP1, and molecular assays selectively; no single ancillary test replaces morphology and clinicopathologic correlation.",
              "For indeterminate lesions, consider descriptive terminology such as SAMPUS, IAMPUS, or MELTUMP when appropriate, and state the leading differential and staging-relevant findings.",
              "Correlate with prior biopsies, clinical photographs, imaging, and relevant personal/family history.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO melanocytic neoplasm excerpt. Intermediate lesions have variable
          reproducibility and should be classified using integrated morphology,
          clinical context, and molecular findings. Ancillary tests are not
          stand-alone diagnostic criteria.
        </footer>
      </div>
    </main>
  );
}
