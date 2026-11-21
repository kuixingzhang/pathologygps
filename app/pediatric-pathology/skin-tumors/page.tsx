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
    name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
    group: "Melanocytic Neoplasms",
    clue: "Dermal epithelioid melanocytes with abundant eosinophilic cytoplasm and loss of nuclear BAP1.",
    summary:
      "A usually indolent melanocytic proliferation characterized by BAP1 inactivation, often arising in association with a conventional nevus and sometimes occurring in the setting of BAP1 tumor predisposition syndrome.",
    clinical: [
      "Usually presents during the first two decades, but can occur at any age.",
      "No established sex predilection.",
      "Usually a solitary or multiple cutaneous papule, often on trunk or extremities; lesions may be skin-colored, reddish, or light brown.",
      "Typically a well-circumscribed dome-shaped or pedunculated papule, averaging approximately 5 mm; some show sudden change in size or color.",
    ],
    criteria: [
      "Identify a dermal proliferation containing large epithelioid melanocytes with abundant eosinophilic cytoplasm.",
      "Demonstrate loss of nuclear BAP1 staining in the epithelioid component in most cases.",
      "Look for an associated conventional nevus component.",
      "Interpret cytologic atypia in context; a subset has intermediate-grade features and requires exclusion of melanoma.",
      "Consider germline BAP1 testing in patients with multiple lesions or a suggestive personal/family history.",
    ],
    histology: [
      "The lesion is predominantly dermal and well circumscribed.",
      "Epithelioid nevomelanocytes have abundant, well-defined eosinophilic cytoplasm.",
      "Tumor nuclei are vesicular with prominent nucleoli.",
      "A conventional nevus component is frequently present.",
      "Some lesions show marked atypia and fall within the intermediate-grade spectrum.",
    ],
    ihc: [
      "The epithelioid component typically shows loss of nuclear BAP1 expression.",
      "The conventional nevus component, when present, retains nuclear BAP1.",
      "Melanocytic markers confirm melanocytic lineage.",
      "BRAF V600E immunohistochemistry may support the common initiating pathway alteration but does not establish the diagnosis.",
    ],
    molecular: [
      "Most cases have an initiating BRAF mutation, followed by biallelic BAP1 mutation and/or deletion.",
      "NRAS-mutated cases have been reported.",
      "Molecular demonstration of BAP1 and BRAF alterations is desirable in difficult cases.",
      "Multiple lesions warrant evaluation for germline BAP1 variants and BAP1 tumor predisposition syndrome.",
    ],
    pitfalls: [
      "Rare cases retain nuclear BAP1 staining despite a BAP1 mutation; sequencing may be informative.",
      "Rare progression to melanoma has been reported; do not equate every BAP1-inactivated lesion with melanoma.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Usually shows deep band-like and single-file nevomelanocytes with adnexal involvement; BAP1-inactivated lesions have a distinct epithelioid component with nuclear BAP1 loss.",
      },
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Conventional nevi are composed of bland melanocytes with maturation; BAP1-inactivated lesions contain large epithelioid cells with loss of nuclear BAP1.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Shows dermal dendritic melanocytes in a fibrous background and usually retains BAP1.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Shows epithelioid/spindle nests with Spitz-type architecture; BAP1 loss in a large epithelioid dermal component favors BAP1-inactivated nevus/tumor.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Shows heavily pigmented junctional spindle-cell nests rather than a dermal epithelioid proliferation.",
      },
      {
        name: "Melanoma",
        distinction:
          "Look for destructive growth, marked pleomorphism, necrosis, atypical mitoses, and multiple genomic alterations; BAP1 loss alone does not establish melanoma.",
      },
    ],
  },
  {
    name: "Cutaneous Hamartomas",
    group: "Cutaneous Hamartomas",
    clue: "Developmental proliferation of native cutaneous components, with the dominant abnormality involving dermal connective tissue or smooth muscle.",
    summary:
      "A group of benign developmental lesions, often related to postzygotic mosaicism. The major patterns include connective tissue nevus, congenital smooth muscle hamartoma, and Becker nevus.",
    clinical: [
      "Usually congenital, although some lesions become apparent during early childhood or adolescence.",
      "Congenital smooth muscle hamartoma and Becker nevus show a slight or marked male predominance, respectively; connective tissue nevi have no defined sex predilection.",
      "Connective tissue nevi favor the back, buttocks, arms, and thighs; smooth muscle hamartomas involve trunk or extremities; Becker nevi favor the shoulder and trunk.",
      "Connective tissue nevi are flesh-colored plaques with peau d’orange or cobblestone texture; smooth muscle hamartomas are hyperpigmented, hairy plaques with a pseudo-Darier sign; Becker nevi are large unilateral hyperpigmented patches with hypertrichosis.",
    ],
    criteria: [
      "Correlate the clinical distribution and texture with the dominant dermal component.",
      "For connective tissue nevus, identify increased collagen, elastic fibers, glycosaminoglycans, or fibroblasts.",
      "For congenital smooth muscle hamartoma, identify disorganized bundles of mature dermal smooth muscle.",
      "For Becker nevus, identify smooth muscle hyperplasia with epidermal hyperpigmentation and variable hypertrichosis.",
      "Consider syndromic associations when lesions are multiple, patterned, or accompanied by extracutaneous findings.",
    ],
    histology: [
      "Collagenoma shows poorly demarcated thickening of dermal collagen bundles.",
      "Elastoma shows increased elastic fibers; mixed lesions contain both collagen and elastic alterations.",
      "Proteoglycan-type lesions show increased dermal mucin; cellular lesions show increased fibroblasts.",
      "Congenital smooth muscle hamartoma shows disorganized fascicles of mature smooth muscle extending into deep dermis and sometimes subcutis.",
      "Becker nevus shows dermal smooth muscle fascicles, elongated rete ridges, and increased basal and suprabasal melanin.",
    ],
    ihc: [
      "Smooth muscle bundles can be highlighted by smooth muscle actin and desmin.",
      "Elastic stains and mucin stains can help characterize the dominant connective tissue component.",
      "Immunohistochemistry is generally supportive rather than required for diagnosis.",
    ],
    molecular: [
      "Many lesions are mosaic; the alteration may be detectable only in lesional skin.",
      "LEMD3 loss-of-function is associated with dermatofibrosis lenticularis disseminata in Buschke–Ollendorff syndrome.",
      "Tuberous sclerosis–associated shagreen patches and Proteus-associated cerebriform connective tissue nevi are collagenomas.",
      "Molecular testing of affected skin may help classify atypical lesions; normal skin may be negative.",
    ],
    pitfalls: [
      "A negative blood test does not exclude a mosaic alteration confined to lesional skin.",
      "Recognize shagreen patch, Buschke–Ollendorff syndrome, Proteus syndrome, and Becker nevus syndrome in the appropriate clinical setting.",
    ],
    differential: [],
  },
  {
    name: "Angiokeratoma",
    group: "Cutaneous Vascular Lesions",
    clue: "Ectatic thin-walled superficial dermal vessels with overlying epidermal hyperplasia.",
    summary:
      "A superficial cutaneous vascular lesion in which dilated capillaries are the primary abnormality and epidermal hyperplasia is secondary.",
    clinical: [
      "Angiokeratoma circumscriptum often presents at birth or in infancy; other forms may arise in childhood or adolescence.",
      "No uniform sex predilection; Mibelli type is more frequent in females and Fordyce type in males.",
      "Mibelli lesions affect digits; Fordyce lesions involve external genitalia and upper thighs; circumscriptum favors lower extremities; corporis diffusum has a bathing-trunks distribution.",
      "Presents as solitary or multiple 2–5 mm red, violaceous, or black papules, sometimes with a scaly or verrucous surface.",
    ],
    criteria: [
      "Identify ectatic, thin-walled vascular channels in the papillary or very superficial reticular dermis.",
      "Epidermal acanthosis, papillomatosis, rete ridge elongation, and hyperkeratosis are supportive but may be absent, particularly in corporis diffusum.",
      "Assess for a deeper dermal or subcutaneous vascular component to exclude vascular malformations.",
      "In diffuse bathing-trunks lesions, evaluate for an associated lysosomal storage disorder.",
    ],
    histology: [
      "Thin-walled ectatic vessels occupy the papillary and superficial reticular dermis.",
      "Overlying epidermis may show acanthosis, papillomatosis, elongated rete ridges, and hyperkeratosis.",
      "Congestion or thrombosis may produce dark clinical coloration.",
      "In angiokeratoma corporis diffusum, lipid accumulates in endothelial cells, vessel-wall smooth muscle, and arrector pili.",
    ],
    ihc: [
      "Endothelial cells express CD31 and ERG.",
      "Solitary pediatric lesions may express PROX1 and D2-40 and lack WT1.",
      "In diffuse forms, PAS and Sudan Black B can highlight lipid accumulation.",
    ],
    pitfalls: [
      "The epidermal changes are secondary; focus on the depth and architecture of the vascular channels.",
      "Angiokeratoma corporis diffusum should prompt clinical correlation for Fabry disease and other lysosomal storage disorders.",
    ],
    differential: [
      {
        name: "Verrucous venous malformation",
        distinction:
          "Shows a deeper dermal and subcutaneous vascular component rather than vessels confined to the superficial dermis.",
      },
      {
        name: "Lymphangioma circumscriptum",
        distinction:
          "Has dilated lymphatic channels extending into deeper dermis or subcutis.",
      },
      {
        name: "Acral pseudolymphomatous angiokeratoma of children",
        distinction: "Shows a prominent lymphocytic infiltrate.",
      },
    ],
  },
  {
    name: "Epidermal Nevi",
    group: "Epidermal Hamartomas",
    clue: "Persistent mosaic epidermal or adnexal hamartomas, often following the lines of Blaschko.",
    summary:
      "A heterogeneous group of cutaneous hamartomas caused by postzygotic mosaic alterations. The principal patterns are common keratinocytic nevus, nevus sebaceus, nevus comedonicus, and porokeratotic eccrine nevus.",
    clinical: [
      "Usually congenital, although some types have delayed onset in childhood.",
      "No consistent sex predilection is established.",
      "Common keratinocytic nevi can occur anywhere but favor Blaschko lines; nevus sebaceus favors scalp and face; nevus comedonicus favors face, neck, upper arm, and chest; porokeratotic eccrine nevi often involve palms and soles.",
      "Common keratinocytic nevi are brown, velvety plaques; nevus sebaceus is a hairless yellow-orange plaque; nevus comedonicus shows linear comedones; porokeratotic eccrine nevus shows keratotic papules with punctate pits.",
    ],
    criteria: [
      "Recognize a segmental or Blaschkoid distribution supporting mosaicism.",
      "For common keratinocytic nevus, identify acanthosis, papillomatosis, elongated rete ridges, and hyperkeratosis.",
      "For nevus sebaceus, identify coordinated abnormalities of epidermis, sebaceous glands, hair follicles, and sweat glands.",
      "For nevus comedonicus, identify multiple dilated, keratin-filled follicular infundibula.",
      "For porokeratotic eccrine nevus, identify cornoid lamellae overlying dilated acrosyringia and acrotrichia.",
    ],
    histology: [
      "Common keratinocytic nevus shows well-demarcated acanthosis, papillomatosis, elongated rete ridges, and hyperkeratosis.",
      "Nevus sebaceus shows epidermal hyperplasia, superficial hyperplastic sebaceous glands, reduced or abortive hair follicles, and often ectopic apocrine glands.",
      "Nevus comedonicus shows dilated, keratin-filled follicular infundibula with atrophy or acanthosis of the overlying epidermis.",
      "Porokeratotic eccrine nevus shows multiple dermal invaginations capped by cornoid lamellae corresponding to dilated acrosyringia and acrotrichia.",
      "Ruptured comedonal cysts may elicit a foreign-body reaction.",
    ],
    ihc: [
      "No routine immunohistochemical panel is required.",
      "Ancillary stains may be selected to characterize adnexal structures or exclude a mimicker; diagnosis is primarily architectural.",
    ],
    molecular: [
      "Postzygotic mosaic mutations commonly affect PI3K or RAS/MAPK pathway genes.",
      "FGFR3 alterations can help classify selected lesions, particularly in epidermal nevus syndromes.",
      "The mutation may be confined to affected skin and absent from blood or unaffected skin.",
    ],
    pitfalls: [
      "Nevus sebaceus may develop secondary benign adnexal neoplasms, especially syringocystadenoma papilliferum and trichoblastoma-like proliferations.",
      "Multiple or extensive lesions should prompt assessment for an epidermal nevus syndrome.",
    ],
    differential: [],
  },
  {
    name: "Pilomatricoma",
    group: "Cutaneous Adnexal Tumors",
    clue: "Dermal nodule with peripheral basaloid matrical cells transitioning to central anucleate shadow cells.",
    summary:
      "A benign hair-matrix tumor that differentiates toward the hair cortex and commonly affects children.",
    clinical: [
      "Nearly half of cases are diagnosed during the first two decades of life; it can occur at any age.",
      "There is a modest female predominance.",
      "Most commonly arises in the head and neck, followed by upper extremities, trunk, and lower extremities.",
      "Usually a solitary, firm-to-hard, slow-growing, asymptomatic 1–3 cm dermal or subcutaneous nodule; overlying skin may be red or blue.",
    ],
    criteria: [
      "Identify a dermal or subcutaneous nodule composed of basaloid matrical cells and shadow cells.",
      "Demonstrate transition from peripheral basaloid cells through intermediate cells to central anucleate shadow cells.",
      "Dense keratin and calcification or ossification may be present.",
      "Assess circumscription, symmetry, cytologic atypia, mitotic activity, and lymphovascular invasion to exclude pilomatrical carcinoma.",
    ],
    histology: [
      "Peripheral basaloid cells are small, deeply basophilic, and mitotically active.",
      "Basaloid cells transition through intermediate cells to central shadow (ghost) cells with eosinophilic cytoplasm and absent nuclei.",
      "Calcification and, in older lesions, ossification are common.",
      "The surrounding dermis is often fibrotic with a foreign-body granulomatous reaction.",
      "Proliferating variants may be predominantly basaloid; pigmented variants also occur.",
    ],
    ihc: [
      "Nuclear and cytoplasmic β-catenin expression supports matrical differentiation.",
      "Basaloid cells may show nuclear β-catenin accumulation.",
      "IHC is usually not necessary when classic morphology is present.",
    ],
    molecular: [
      "Most cases harbor activating CTNNB1 mutations, commonly involving exon 3.",
      "Trisomy 18 has been reported in basaloid cells.",
    ],
    pitfalls: [
      "Calcification and ossification may make the lesion extremely hard clinically.",
      "Multiple pilomatricomas may be associated with familial adenomatous polyposis, myotonic dystrophy, and other genetic syndromes.",
    ],
    differential: [
      {
        name: "Pilomatrical carcinoma",
        distinction:
          "Poor circumscription, asymmetry, frequent atypical mitoses, and lymphovascular invasion favor carcinoma.",
      },
      {
        name: "Basal cell carcinoma",
        distinction:
          "Shows basaloid nests with peripheral palisading and stromal retraction; true shadow-cell differentiation is absent.",
      },
      {
        name: "Trichoblastoma",
        distinction:
          "Shows follicular germinative differentiation and specialized stroma rather than prominent matrical shadow cells.",
      },
      {
        name: "Melanocytic matricoma",
        distinction:
          "Contains matrical differentiation admixed with melanocytes and melanin pigment.",
      },
    ],
  },
  {
    name: "Congenital Melanocytic Nevus",
    group: "Melanocytic Neoplasms",
    clue: "Deep, band-like and single-file nevomelanocytic proliferation with adnexal and subcutaneous involvement and frequent neurotization.",
    summary:
      "A benign melanocytic proliferation arising in utero and present at birth or during the first years of life; large and multiple lesions carry increased melanoma and neurocutaneous melanocytosis risk.",
    clinical: [
      "Present at birth or recognized during the first few years of life; small lesions occur in approximately 1% of newborns, whereas giant lesions are rare.",
      "No consistent sex predilection is established.",
      "May occur anywhere; large lesions often involve the trunk or scalp and may have satellite nevi.",
      "Hyperpigmented, variably hairy, flat-to-rugose or nodular lesions; classify by projected adult diameter from small to giant.",
    ],
    criteria: [
      "Clinical onset is at birth or within the first few years of life.",
      "Nevomelanocytes extend deeply through the dermis and may involve subcutis, adnexa, and subendothelial spaces.",
      "A band-like or single-file pattern and neurotization are common.",
      "Maturation with depth and overall bland cytology support nevus; interpret atypia and mitoses cautiously in neonatal and large lesions.",
      "Atypical proliferative nodules require extensive sampling and may need comparative genomic hybridization or FISH.",
    ],
    histology: [
      "Deep dermal and subcutaneous type C spindle nevomelanocytes often show neuroid differentiation.",
      "Intermediate dermis contains type B cells in single files between collagen bundles and around adnexa and vessels.",
      "Superficial dermis contains larger epithelioid type A cells, sometimes with melanin.",
      "Wagner–Meissner or Masson-like neuroid structures may be present.",
      "A grenz zone, band-like growth, papillomatosis, and variable epidermal changes may be seen.",
      "Large lesions may contain proliferative nodules with increased cellularity, atypia, pagetoid spread, or mitoses.",
    ],
    ihc: [
      "Melanocytic markers such as SOX10, S100, Melan-A, and HMB45 label nevomelanocytes.",
      "Neurotized areas may show reduced melanocytic marker expression and neural differentiation markers.",
      "IHC alone cannot reliably distinguish a proliferative nodule from melanoma.",
    ],
    molecular: [
      "Large congenital nevi commonly harbor somatic NRAS p.Q61 mutations.",
      "BRAF p.V600 mutations occur in a minority and are relatively more frequent in small lesions.",
      "RAF1 and other MAPK-pathway rearrangements have been reported.",
      "Comparative genomic hybridization or FISH may help assess atypical proliferative nodules.",
    ],
    pitfalls: [
      "Pagetoid spread, mitoses, ulceration, and cytologic atypia may occur in neonatal congenital nevi and proliferative nodules; do not diagnose melanoma from one feature alone.",
      "A deep expansile nodule with pleomorphism, necrosis, and atypical mitoses raises concern for melanoma.",
      "Large or multiple lesions warrant clinical assessment for neurocutaneous melanocytosis.",
    ],
    differential: [
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Acquired nevi are usually smaller and lack the deep single-file infiltrative growth, neurotization, and adnexal involvement typical of congenital nevi.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Blue nevus is a dermal dendritic proliferation with fibroplasia and G-protein pathway alterations, not a deep band-like congenital-pattern nevus.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Spitz lesions are composed of large epithelioid/spindle cells in nests; congenital nevi show deep single-file growth, neurotization, and adnexal involvement.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Reed nevus is a heavily pigmented junctional spindle-cell proliferation, usually superficial and sharply circumscribed.",
      },
      {
        name: "Melanoma",
        distinction:
          "Atypical proliferative nodules may mimic melanoma; expansile deep growth, marked pleomorphism, necrosis, and atypical mitoses are more concerning than isolated pagetoid spread or mitoses in a neonate.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1-inactivated lesions show large dermal epithelioid melanocytes with loss of nuclear BAP1 rather than the typical deep band-like, neurotized congenital nevus pattern.",
      },
    ],
  },
  {
    name: "Junctional, Compound, and Dermal Nevi",
    group: "Melanocytic Neoplasms",
    clue: "Symmetric, circumscribed proliferation of bland melanocytes with maturation and no significant deep mitotic activity.",
    summary:
      "Common acquired melanocytic nevi classified by the anatomic distribution of nevomelanocytes at the dermoepidermal junction and within the dermis.",
    clinical: [
      "Usually develop in early childhood and peak around adolescence; number and size decline during adulthood.",
      "No established sex predilection.",
      "Can occur at any site but predominate on the trunk.",
      "Usually small (<5 mm), symmetric, uniformly pigmented macules or papules; junctional nevi are often flat, whereas compound and dermal nevi are raised.",
    ],
    criteria: [
      "Demonstrate a symmetric, circumscribed proliferation of cytologically bland melanocytes.",
      "Junctional nevus is confined to the dermoepidermal junction; compound nevus has junctional and dermal components; dermal nevus is confined to dermis.",
      "Dermal nests show maturation with depth, often progressing to smaller type B and spindle-shaped type C cells.",
      "Significant pleomorphism, deep mitoses, and destructive growth are absent.",
      "Pagetoid spread is absent or limited to an irritated focus.",
    ],
    histology: [
      "Junctional component may be lentiginous or nested along the dermoepidermal junction.",
      "Compound and dermal nevi show central dermal nests that become smaller and less pigmented with depth.",
      "Deep cells may become lymphocyte-like or spindled, reflecting maturation or senescence.",
      "Mitoses are usually absent, especially in deep portions.",
      "A congenital-type growth pattern may occur in acquired nevi and does not establish congenital onset.",
    ],
    ihc: [
      "S100 and SOX10 highlight melanocytes throughout the lesion.",
      "Melan-A and HMB45 may show a maturation gradient, with reduced deep HMB45 staining.",
      "p16 is typically strongly retained; Ki-67 is low.",
      "Senescence-associated markers are commonly expressed.",
    ],
    molecular: [
      "BRAF mutations are frequent; NRAS mutations occur in a subset.",
      "Conventional acquired nevi generally lack chromosomal copy-number alterations.",
      "Progression requires additional alterations such as CDKN2A loss or TERT promoter mutation.",
    ],
    pitfalls: [
      "A congenital-type histologic pattern in an acquired nevus does not prove the lesion was present at birth.",
      "Limited pagetoid spread may occur in an irritated nevus; assess the overall symmetry, maturation, and cytology.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Congenital nevi show deep single-file infiltration, adnexal involvement, band-like growth, and neurotization.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Blue nevus is dermal, dendritic, and fibrosing, often with melanophages and GNAQ/GNA11-pathway alterations.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Spitz lesions show larger epithelioid or spindle cells, often with Kamino bodies and characteristic nest architecture.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Reed nevus shows heavily pigmented spindle-cell nests with vertical or whorled orientation.",
      },
      {
        name: "Melanoma",
        distinction:
          "Melanoma shows asymmetry, poor circumscription, cytologic atypia, destructive growth, and/or deep mitotic activity rather than bland maturation.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1-inactivated lesions contain large epithelioid dermal melanocytes with nuclear BAP1 loss, unlike conventional bland acquired nevi.",
      },
    ],
  },
  {
    name: "Blue Nevus",
    group: "Melanocytic Neoplasms",
    clue: "Dermal dendritic melanocytes in a fibrous stroma, with cellular blue nevus showing additional dense nests and deep expansile growth.",
    summary:
      "A benign dermal melanocytic proliferation comprising dendritic and cellular patterns, typically driven by G-protein pathway alterations.",
    clinical: [
      "Most frequent in children and young adults.",
      "No consistent sex predilection is established.",
      "Dendritic blue nevi favor dorsal hands and feet; cellular blue nevi favor buttocks and scalp; congenital lesions are often on the scalp.",
      "Dendritic lesions are small blue papules; cellular lesions are often larger (>10 mm), indurated blue nodules.",
    ],
    criteria: [
      "For dendritic blue nevus, identify a poorly circumscribed dermal proliferation of bland dendritic melanocytes with fibroplasia.",
      "For cellular blue nevus, identify dense nests and sheets of bland melanocytes superimposed on a dendritic blue nevus pattern.",
      "Assess for symmetry, cytologic blandness, absence of necrosis, and lack of significant mitotic activity.",
      "Atypical cellular blue nevus or blue-nevus-like melanoma requires assessment for expansile growth, atypia, mitoses, and molecular progression.",
    ],
    histology: [
      "Dendritic melanocytes are dispersed in a fibrosing dermal background, often with perivascular and periadnexal distribution.",
      "Melanophages are common and intracytoplasmic melanin is variable.",
      "Cellular blue nevus shows dense nests and sheets of medium-sized melanocytes, often extending deeply into subcutis.",
      "Cellular areas may form vertical expansile nodules; large lesions may show central myxoid or cystic change.",
      "Conventional lesions lack significant atypia, mitotic activity, and necrosis.",
    ],
    ihc: [
      "S100 and SOX10 label lesional melanocytes.",
      "Melan-A and HMB45 are typically positive in melanocytic components.",
      "BAP1 is generally retained in conventional blue nevi; loss raises concern for a blue-nevus-like melanoma in the appropriate context.",
    ],
    molecular: [
      "Activating mutations in GNAQ, GNA11, PLCB4, or less commonly CYSLTR2 occur in a largely mutually exclusive pattern.",
      "Conventional blue nevi typically lack BRAF, NRAS, NF1, and BAP1 mutations.",
      "Molecular testing may help in difficult cases or when melanoma is considered.",
    ],
    pitfalls: [
      "Cellular blue nevus may extend deeply into subcutis but remains cytologically bland and lacks necrosis.",
      "Do not confuse the intermediate-grade atypical cellular blue nevus (melanocytoma) with conventional benign blue nevus or overt melanoma.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Congenital nevi show band-like deep nevomelanocytes, single-file growth, adnexal involvement, and neurotization rather than a fibrosing dendritic dermal proliferation.",
      },
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Common nevi are usually more circumscribed and show junctional nests and dermal maturation; blue nevi are poorly circumscribed and dendritic with melanophages.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Spitz lesions show plump epithelioid/spindle nests and often Kamino bodies; blue nevi show dendritic melanocytes in fibrous stroma.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Reed nevus is a superficial junctional proliferation of heavily pigmented spindle cells, not a deep dermal dendritic lesion.",
      },
      {
        name: "Melanoma",
        distinction:
          "Blue-nevus-like melanoma shows atypia, mitotic activity, necrosis, and expansile growth; conventional blue nevus is bland and lacks necrosis.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1-inactivated lesions show epithelioid melanocytes and nuclear BAP1 loss; conventional blue nevi are dendritic/fibrosing and usually retain BAP1.",
      },
    ],
  },
  {
    name: "Spitz Nevus / Spitz Melanocytoma",
    group: "Melanocytic Neoplasms",
    clue: "Symmetric, sharply circumscribed nests of large epithelioid and/or spindle melanocytes with maturation and low proliferative activity.",
    summary:
      "A spectrum of melanocytic neoplasms ranging from benign Spitz nevus to Spitz melanocytoma (atypical Spitz tumor); diagnosis requires integration of clinical, histologic, immunophenotypic, and molecular findings.",
    clinical: [
      "Spitz nevi commonly occur in children; approximately 40% of patients are younger than 15 years.",
      "Both sexes are affected similarly.",
      "In children, lesions favor head and neck and lower extremities; mucosal lesions are very rare.",
      "Usually a solitary, rapidly growing then stable pink-red to brown dome-shaped papule, generally <5–6 mm; atypical Spitz tumors may be larger and asymmetric.",
    ],
    criteria: [
      "For Spitz nevus, identify large epithelioid and/or spindle nevomelanocytes in a symmetric, sharply circumscribed lesion.",
      "Deep maturation and single-cell dispersion at the base support benign Spitz nevus.",
      "Rare mitoses may occur but are usually superficial; deep or atypical mitoses are concerning.",
      "Kamino bodies, clefting around junctional nests, epidermal hyperplasia, and stromal edema are supportive.",
      "Spitz melanocytoma has one or more atypical histologic features but insufficient findings for melanoma; integrate molecular and clinical data.",
    ],
    histology: [
      "Nests of plump epithelioid and/or spindle melanocytes form a symmetric, sharply circumscribed lesion.",
      "Most are compound; junctional and dermal forms also occur.",
      "Deep maturation is present, with single-cell dispersion at the base.",
      "Kamino bodies, clefting around junctional nests, stromal edema, vascular ectasia, and lymphocytic aggregates may be present.",
      "Pagetoid migration can be prominent in young children.",
      "Atypical Spitz tumors may show asymmetry, poor circumscription, lack of maturation, deep mitoses, ulceration, or marked pleomorphism.",
    ],
    ihc: [
      "S100, SOX10, Melan-A, tyrosinase, and MITF support melanocytic differentiation.",
      "S100A6 is typically diffuse.",
      "p16 is usually retained in benign Spitz nevi.",
      "HMB45 is often top-heavy, and Ki-67 is low with a gradient and little or no staining at the base.",
      "ALK immunohistochemistry can support an ALK fusion; pan-TRK may screen for NTRK rearrangement but requires molecular confirmation.",
    ],
    molecular: [
      "Most Spitz nevi harbor kinase fusions or structural rearrangements involving ROS1, ALK, BRAF, NTRK1, NTRK3, MET, RET, or MAP3K8.",
      "HRAS mutations define a separate subset and are common in many agminated or eruptive lesions.",
      "Atypical Spitz tumors may acquire CDKN2A alterations and chromosomal copy-number changes.",
      "FISH or RNA-based next-generation sequencing can help in equivocal cases; no single alteration is fully diagnostic.",
      "Multiple copy-number changes, homozygous CDKN2A deletion, or TERT promoter alteration raise concern for Spitz melanoma but must be interpreted with morphology.",
    ],
    pitfalls: [
      "Spitz nevi can mimic melanoma clinically and histologically; pagetoid spread alone is not sufficient for malignancy in young children.",
      "Spitz melanocytoma is an intermediate-grade lesion, not synonymous with melanoma.",
      "Molecular abnormalities overlap among Spitz nevus, Spitz melanocytoma, and Spitz melanoma.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Congenital nevi show deep single-file infiltration, neurotization, and adnexal involvement rather than symmetric nests of large Spitz cells.",
      },
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Common nevi are composed of smaller bland melanocytes with maturation; Spitz nevi contain large epithelioid and/or spindle cells and may have Kamino bodies.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Blue nevus is a dermal dendritic/fibrosing proliferation, usually without Spitz-type nests or Kamino bodies.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Reed nevus is a heavily pigmented junctional spindle-cell Spitz variant with vertical/whorled nests.",
      },
      {
        name: "Melanoma",
        distinction:
          "Melanoma shows greater asymmetry, poor circumscription, absent maturation, deep/atypical mitoses, ulceration, and often genomic complexity.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1-inactivated lesions typically show a conventional nevus with an epithelioid dermal component lacking nuclear BAP1, rather than classic Spitz-cell nests.",
      },
    ],
  },
  {
    name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
    group: "Melanocytic Neoplasms",
    clue: "Symmetric junctional nests of uniform, heavily pigmented spindle melanocytes, without atypia.",
    summary:
      "A benign pigmented spindle-cell subtype of Spitz nevus that may clinically and histologically mimic melanoma.",
    clinical: [
      "Usually affects children and young adults, although reported ages range widely.",
      "Female predominance is reported.",
      "Most often involves extremities, particularly the thigh, followed by trunk and head and neck.",
      "Typically an acquired, asymptomatic, dark-brown or black, well-circumscribed macule or papule smaller than 10 mm.",
    ],
    criteria: [
      "Identify junctional nests of uniform spindle-shaped nevomelanocytes.",
      "Lesional cells are heavily pigmented and lack significant cytologic atypia.",
      "Nests are vertically oriented, whorled, or concentric and are usually confined to epidermis or papillary dermis.",
      "Kamino bodies and pagetoid melanocytosis may be present but should be interpreted with the overall symmetry and bland cytology.",
    ],
    histology: [
      "Symmetric, well-circumscribed junctional proliferation of uniform spindle melanocytes.",
      "Nests are heavily pigmented and vertically oriented, whorled, or concentric.",
      "Lesional cells lack significant atypia and mitotic activity.",
      "Dermal melanophages are usually present.",
      "Adnexal extension and limited papillary dermal involvement may occur.",
    ],
    ihc: [
      "S100, SOX10, and other melanocytic markers support melanocytic lineage.",
      "HMB45 may show superficial predominance.",
      "Use an immunohistochemical panel and molecular studies when morphology is atypical or melanoma is a concern.",
    ],
    molecular: [
      "Reed nevus is a molecular subtype of Spitz nevus and is driven by structural rearrangements producing kinase fusions.",
      "NTRK3 fusions are reported in more than half of cases.",
      "NTRK3 break-apart FISH or RNA sequencing can confirm a rearrangement in selected cases.",
    ],
    pitfalls: [
      "Marked pigmentation and pagetoid growth can mimic melanoma; symmetry, uniform spindle cells, and lack of atypia favor Reed nevus.",
      "Atypical pigmented spindle-cell tumors require careful evaluation for melanoma.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Congenital nevi show deep band-like infiltration, neurotization, and adnexal involvement rather than superficial pigmented junctional nests.",
      },
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Common nevi lack the dense, heavily pigmented, vertically oriented spindle-cell nests characteristic of Reed nevus.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Blue nevus is predominantly dermal and dendritic with fibroplasia; Reed nevus is a junctional spindle-cell proliferation.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Reed nevus is a pigmented spindle-cell Spitz subtype; conventional Spitz nevi are often less pigmented and may contain epithelioid cells.",
      },
      {
        name: "Melanoma",
        distinction:
          "Melanoma shows asymmetry, cytologic atypia, deep mitoses, and lack of maturation; Reed nevus is symmetric and cytologically uniform.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1-inactivated lesions show dermal epithelioid cells and nuclear BAP1 loss, not the heavily pigmented junctional spindle-cell nests of Reed nevus.",
      },
    ],
  },
  {
    name: "Melanoma",
    group: "Melanocytic Neoplasms",
    clue: "Malignant melanocytic proliferation with atypical epithelioid, spindle, or small round-cell morphology and destructive or expansile growth.",
    summary:
      "A rare but important pediatric malignancy encompassing congenital nevus-associated melanoma, Spitz melanoma, conventional low-CSD melanoma, and melanoma arising in blue nevus.",
    clinical: [
      "Rare in children; prepubertal melanoma is particularly uncommon. Both sexes are affected equally.",
      "Congenital nevus-associated melanoma may arise at any site, often as a rapidly growing deep nodule within a large congenital nevus; Spitz melanoma favors limbs and head; conventional low-CSD melanoma favors torso and legs.",
      "Spitz melanoma may present as a rapidly growing amelanotic nodule and mimic pyogenic granuloma or xanthogranuloma.",
      "Conventional melanoma may present as an evolving asymmetric, irregularly bordered, variegated pigmented macule or papule.",
    ],
    criteria: [
      "Demonstrate a malignant melanocytic proliferation composed of epithelioid, spindle, or occasionally lymphoblast-like cells.",
      "Assess architecture for asymmetry, poor circumscription, expansile growth, destructive invasion, and lack of maturation.",
      "Assess cytology for pleomorphism, prominent nucleoli, atypical mitoses, and necrosis.",
      "For congenital nevus-associated melanoma, distinguish a deep expansile nodule from a proliferative nodule within the background nevus.",
      "For Spitz melanoma, integrate clinical, histologic, immunohistochemical, and molecular findings; no single test is definitive.",
    ],
    histology: [
      "Congenital nevus-associated melanoma often forms a deep dermal or subcutaneous nodule distinct from the background nevus.",
      "Worrisome features include sharp demarcation, expansile growth, pleomorphism, necrosis, and mitotic figures, interpreted in age-specific context.",
      "Spitz melanoma shows confluent, vertically oriented aggregates of large epithelioid and fusiform melanocytes, often with asymmetry, poor circumscription, lack of maturation, deep mitoses, and ulceration.",
      "Conventional low-CSD melanoma may show superficial spreading or nodular growth with pagetoid scatter of enlarged melanocytes.",
      "Pagetoid spread in children must be interpreted cautiously because it may occur in benign and atypical lesions.",
    ],
    ihc: [
      "Melanocytic markers support lineage but are not independently diagnostic of melanoma.",
      "Spitz melanoma often shows diffuse HMB45 expression and loss of p16.",
      "Immunohistochemistry has limited utility in distinguishing melanoma from proliferative nodules in congenital nevi.",
      "Interpret Ki-67 and melanocytic marker distribution with morphology and molecular findings.",
    ],
    molecular: [
      "Congenital nevus-associated melanoma frequently harbors NRAS mutations; amplification of mutated NRAS has been reported.",
      "Spitz melanoma may retain Spitz-type kinase fusions or HRAS alterations and acquire CDKN2A inactivation and TERT promoter alterations.",
      "Conventional low-CSD melanoma frequently has BRAF p.V600 mutations, CDKN2A inactivation, and TERT promoter mutations.",
      "Melanoma arising in blue nevus commonly involves GNAQ or GNA11 pathway alterations.",
      "Multiple chromosomal copy-number changes support melanoma; homozygous CDKN2A loss and TERT promoter alterations are concerning in Spitz lesions.",
    ],
    pitfalls: [
      "In neonatal congenital nevi and proliferative nodules, atypia, mitoses, ulceration, and pagetoid spread can occur without melanoma.",
      "Spitz melanoma overlaps with Spitz melanocytoma and conventional melanoma with spitzoid morphology; use integrated assessment.",
      "Nodal melanocyte deposits in Spitz melanoma do not carry the same prognostic implications as nodal metastasis in conventional melanoma.",
    ],
    differential: [
      {
        name: "Congenital Melanocytic Nevus",
        distinction:
          "Congenital nevus is usually bland and maturing; melanoma forms a distinct expansile nodule with pleomorphism, necrosis, and atypical mitoses.",
      },
      {
        name: "Junctional, Compound, and Dermal Nevi",
        distinction:
          "Common nevi are symmetric, bland, and show maturation with low proliferation; melanoma is asymmetric and cytologically malignant.",
      },
      {
        name: "Blue Nevus",
        distinction:
          "Conventional blue nevus is bland and lacks necrosis; blue-nevus-like melanoma shows atypia, mitoses, necrosis, and expansile growth.",
      },
      {
        name: "Spitz Nevus / Spitz Melanocytoma",
        distinction:
          "Spitz melanoma shows asymmetry, poor circumscription, absent maturation, deep mitoses, and often genomic complexity; Spitz melanocytoma has atypia insufficient for melanoma.",
      },
      {
        name: "Pigmented Spindle Cell Nevus (Reed Nevus)",
        distinction:
          "Reed nevus is symmetric with uniform pigmented spindle cells and low mitotic activity; melanoma shows atypia, deep mitoses, and destructive growth.",
      },
      {
        name: "BAP1-Inactivated Melanocytic Nevus/Tumor",
        distinction:
          "BAP1 loss alone does not establish melanoma; assess for destructive growth, pleomorphism, necrosis, atypical mitoses, and genomic complexity.",
      },
    ],
  },
];

const overview = entities.map((e) => ({
  name: e.name,
  group: e.group,
  clue: e.clue,
  key: e.criteria.slice(0, 2).join(" "),
}));

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function SkinTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );

  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  const toggleAll = () =>
    setExpanded(
      expanded.length === entities.length ? [] : entities.map((e) => e.name),
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Skin Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic overview of pediatric cutaneous hamartomas, vascular and
          adnexal lesions, melanocytic nevi, and melanoma, emphasizing clinical
          context, essential morphologic criteria, immunophenotype, and
          diagnostically useful molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use the dominant architecture, maturation pattern, and clinical
            distribution to narrow the diagnosis.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical Pattern</th>
                <th className="px-4 py-3">Key Diagnostic Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.group}</td>
                  <td className="px-4 py-3 text-slate-600">{item.clue}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Establish the clinical pattern.</strong> Record age,
            congenital versus acquired onset, anatomic site, lesion size,
            pigmentation, and growth behavior.
          </li>
          <li>
            <strong>2. Identify the dominant compartment.</strong> Separate
            epidermal/adnexal hamartomas, superficial vascular ectasia,
            hair-matrix differentiation, and melanocytic proliferations.
          </li>
          <li>
            <strong>3. Evaluate melanocytic architecture.</strong> Assess
            symmetry, circumscription, nesting, maturation with depth, pagetoid
            spread, cytologic atypia, mitotic activity, necrosis, and
            subcutaneous extension.
          </li>
          <li>
            <strong>4. Use ancillary studies selectively.</strong> Apply lineage
            markers and targeted molecular testing to resolve specific
            differentials; interpret results with morphology and clinical
            context.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, markers, or differentials..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button
          onClick={toggleAll}
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    <section>
                      <h3 className="mb-2 text-base font-semibold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <div className="space-y-3">
                        {entity.differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {d.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {d.distinction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
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
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Diagnostic interpretation should integrate clinical history, lesion
        distribution, age, complete architectural assessment, and appropriately
        selected ancillary studies. Adequate sampling is particularly important
        when melanoma or an atypical melanocytic proliferation is considered.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
