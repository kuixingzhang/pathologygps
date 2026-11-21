"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  category: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc?: string[];
  differential: [string, string][];
  molecular?: string[];
};

const entities: Entity[] = [
  {
    name: "Actinic keratosis",
    category: "Premalignant keratoses",
    behavior: "Intraepidermal squamous dysplasia; potential precursor of SCC",
    profile: [
      "Usually affects fair-skinned adults older than 40 years; incidence increases with age.",
      "Occurs on chronically sun-exposed face, ears, scalp, neck, lips, forearms, and dorsal hands.",
      "Presents as multiple scaly erythematous patches or plaques, typically 2–10 mm, on photodamaged skin.",
    ],
    criteria: [
      "Squamous dysplasia involves the basal to mid-spinous epidermis but is not full thickness.",
      "Adnexal epithelium is generally spared, although atypical cells may extend along pre-existing adnexal structures.",
      "Solar elastosis is usually present in the superficial dermis.",
    ],
    histology: [
      "Atypical keratinocytes show enlarged, irregular, hyperchromatic or vesicular nuclei.",
      "Mitotic figures, including atypical forms, are common.",
      "The granular layer is typically reduced or absent, with overlying parakeratosis.",
      "Lichenoid, hypertrophic, proliferative, atrophic, acantholytic, and pigmented patterns may occur.",
    ],
    differential: [
      [
        "SCC in situ",
        "Full-thickness epidermal atypia favors SCC in situ; AK is limited to the lower epidermis.",
      ],
      [
        "Seborrheic keratosis",
        "Usually shows orderly maturation and lacks convincing keratinocyte dysplasia.",
      ],
    ],
  },
  {
    name: "Arsenical keratosis",
    category: "Premalignant keratoses",
    behavior: "Potential precursor of SCC",
    profile: [
      "Follows chronic environmental, medicinal, or occupational arsenic exposure, often with a latency of decades.",
      "Palms and soles are favored; diffuse or localized hyperpigmentation and raindrop pigmentation may involve the trunk.",
      "Presents as yellowish hyperkeratotic papules or confluent verrucous plaques.",
    ],
    criteria: [
      "Squamoproliferative lesions with or without squamous dysplasia occur in the setting of chronic arsenic exposure.",
      "The dysplasia does not involve the full thickness of the epidermis.",
    ],
    histology: [
      "Acanthosis, papillomatosis, and hyperkeratosis form a spectrum of changes.",
      "Dysplastic keratinocytes may show vacuolization, multinucleation, and atypical mitotic activity.",
    ],
    differential: [
      [
        "Verruca",
        "Viral cytopathic change and typical wart architecture favor verruca; exposure history and dysplasia support arsenical keratosis.",
      ],
      ["SCC in situ", "Full-thickness epidermal atypia supports SCC in situ."],
    ],
  },
  {
    name: "PUVA keratosis",
    category: "Premalignant keratoses",
    behavior:
      "Treatment-associated keratosis; increased subsequent nonmelanoma skin cancer risk",
    profile: [
      "Occurs in patients receiving prolonged psoralen plus UVA therapy, often for psoriasis.",
      "Develops in treated, typically sun-protected skin of the trunk and thighs.",
      "Presents as multiple warty, hyperkeratotic, scaly papules with a broad base.",
    ],
    criteria: [
      "Well-circumscribed squamoproliferative lesion with up to mild squamous dysplasia in the setting of prolonged PUVA treatment.",
    ],
    histology: [
      "Well-demarcated acanthosis with overlying hyperkeratosis is characteristic.",
      "Papillomatous growth and focal parakeratosis may be present.",
      "Mild keratinocyte dysplasia occurs in approximately half of biopsies.",
      "A superficial chronic inflammatory infiltrate may be present.",
    ],
    differential: [
      [
        "Verruca",
        "Koilocytosis, hypergranulosis, and characteristic papillomatous architecture support verruca.",
      ],
      [
        "SCC in situ",
        "Marked full-thickness atypia is not a feature of uncomplicated PUVA keratosis.",
      ],
    ],
    molecular: [
      "TP53 and HRAS mutations with UV-signature changes have been reported; no routine diagnostic molecular test is indicated.",
    ],
  },
  {
    name: "Squamous cell carcinoma in situ (Bowen disease)",
    category: "SCC and precursors",
    behavior: "Intraepidermal carcinoma",
    profile: [
      "Usually occurs in adults older than 60 years, particularly older White patients with cumulative sun exposure.",
      "Common sites include lower limbs, head, neck, and hands; both sun-exposed and protected skin may be involved.",
      "Usually presents as a solitary, slowly growing scaly erythematous patch or plaque that may persist for years.",
    ],
    criteria: [
      "Full-thickness epidermal replacement by atypical keratinocytes with loss of maturation.",
      "No invasion into the underlying dermis.",
      "Superficial adnexal epithelium may be involved.",
    ],
    histology: [
      "Atypical pleomorphic keratinocytes involve the full epidermal thickness and often show loss of polarity.",
      "Mitoses are increased and may extend to the epidermal surface.",
      "Hyperparakeratosis and loss of the granular layer are common.",
      "Pagetoid single-cell or nested growth may occur.",
      "The basal layer may be retained (eyeliner sign).",
    ],
    ihc: [
      "Ki-67 labeling extending through the full epidermal thickness can support the diagnosis in subtle cases.",
      "p16 may help assess dysplasia in genital lesions; interpret in the appropriate clinical setting.",
    ],
    differential: [
      [
        "Actinic keratosis",
        "Atypia is limited to the lower epidermis; adnexal epithelium is generally spared.",
      ],
      [
        "Paget disease / melanoma in situ",
        "Pagetoid lesions may require epithelial, glandular, and melanocytic markers to establish lineage.",
      ],
      [
        "Microinvasive SCC",
        "Look for jagged invasive nests crossing the dermoepidermal junction.",
      ],
    ],
    molecular: [
      "TP53 and NOTCH1 alterations are frequent, but molecular testing is not routinely required for diagnosis.",
    ],
  },
  {
    name: "Verruca vulgaris",
    category: "Benign keratoses and simulants",
    behavior: "Benign HPV-associated squamoproliferation",
    profile: [
      "Common in children and less frequent in adults; immunosuppression is a risk factor.",
      "Hands and fingers are common sites; elbows, knees, face, flexures, and genital skin may also be affected.",
      "Presents as single or multiple verrucous, keratotic papules or nodules.",
    ],
    criteria: [
      "Papillomatosis, hyperkeratosis, hypergranulosis, and parakeratotic columns.",
      "Koilocytosis is desirable but may be absent, particularly in older lesions.",
    ],
    histology: [
      "Prominent inwardly proliferating rete ridges create a papillomatous architecture.",
      "Coarse keratohyalin granules and hypergranulosis are characteristic.",
      "Dilated tortuous capillaries occupy the papillary dermis.",
      "Koilocytes may be present in the superficial epidermis.",
    ],
    differential: [
      [
        "Seborrheic keratosis",
        "Verruca shows papillomatosis, hypergranulosis, and often koilocytosis.",
      ],
      [
        "Verrucous SCC",
        "Deep, broad, club-shaped endophytic tongues with pushing borders favor verrucous SCC.",
      ],
    ],
    molecular: ["Routine HPV subtyping is not indicated."],
  },
  {
    name: "Verruca plantaris / palmaris",
    category: "Benign keratoses and simulants",
    behavior: "Benign HPV-associated squamoproliferation",
    profile: [
      "Occurs on the soles or palms; children are affected more often than adults.",
      "Lesions may be single or multiple and are often painful.",
      "Myrmecial lesions are hard, slightly elevated keratotic papules; mosaic lesions are superficial and confluent.",
    ],
    criteria: [
      "Marked hyperkeratosis, acanthosis, and hypergranulosis.",
      "Koilocytosis supports the diagnosis.",
    ],
    histology: [
      "Myrmecial lesions show endophytic growth and vacuolated keratinocytes with coarse eosinophilic keratohyalin granules.",
      "Mosaic lesions show more superficial confluent growth and usually milder papillomatosis.",
      "Hemorrhage may be seen in regressing lesions.",
    ],
    differential: [
      [
        "Callus/corn",
        "Warts may show thrombosed capillaries and viral cytopathic change; calluses lack these features.",
      ],
      [
        "Verrucous SCC",
        "Deep infiltrative/pushing growth and clinical persistence raise concern for carcinoma.",
      ],
    ],
  },
  {
    name: "Verruca plana",
    category: "Benign keratoses and simulants",
    behavior: "Benign HPV-associated lesion",
    profile: [
      "Typically affects children and young adults.",
      "Commonly involves the face, dorsal hands, and lower legs.",
      "Presents as multiple flat-topped, smooth, skin-colored to light-brown papules.",
    ],
    criteria: [
      "Acanthosis with a relatively flat surface and viral cytopathic changes.",
    ],
    histology: [
      "Mild acanthosis and hyperkeratosis with a broad, flattened epidermal surface.",
      "Koilocytosis may be present in the upper epidermis.",
    ],
    differential: [
      [
        "Lichen planus-like keratosis",
        "Interface inflammation and basal vacuolar change favor lichen planus-like keratosis.",
      ],
      [
        "Seborrheic keratosis",
        "Horn cysts and more pronounced papillomatosis favor seborrheic keratosis.",
      ],
    ],
  },
  {
    name: "Seborrheic keratosis",
    category: "Benign keratoses and simulants",
    behavior: "Benign keratinocytic neoplasm",
    profile: [
      "Very common in adults; frequency increases with age.",
      "May occur on almost any skin surface but typically favors the trunk, face, and extremities.",
      "Often presents as a sharply demarcated, waxy, 'stuck-on' papule or plaque; lesions may be pigmented or inflamed.",
    ],
    criteria: [
      "Acanthotic, papillomatous, or reticulated proliferation of bland basaloid keratinocytes.",
      "Horn cysts or pseudohorn cysts are characteristic in many cases.",
    ],
    histology: [
      "Architectural patterns include acanthotic, hyperkeratotic, and reticulated forms.",
      "Horn cysts and pseudohorn cysts are common.",
      "Melanin pigmentation and squamous eddies may be present.",
      "Inflamed lesions may show lichenoid inflammation and obscure the underlying architecture.",
    ],
    differential: [
      [
        "SCC in situ",
        "Significant full-thickness atypia and disordered maturation favor SCC in situ.",
      ],
      [
        "Melanocytic lesion",
        "Use melanocytic markers when a clonal or pigmented lesion is equivocal.",
      ],
    ],
  },
  {
    name: "Solar lentigo",
    category: "Benign keratoses and simulants",
    behavior: "Benign UV-associated epidermal lesion",
    profile: [
      "Usually occurs in middle-aged and older adults with chronic sun exposure.",
      "Favors sun-exposed face, dorsal hands, and forearms.",
      "Presents as a sharply demarcated tan-to-brown macule.",
    ],
    criteria: [
      "Basal epidermal hyperpigmentation with elongated rete ridges and increased basal melanocytes, without significant melanocytic atypia.",
    ],
    histology: [
      "Elongated, often club-shaped rete ridges extend into the dermis.",
      "Basal keratinocytes contain increased melanin.",
      "Solar elastosis is often present in the underlying dermis.",
    ],
    differential: [
      [
        "Lentigo maligna",
        "Confluent atypical melanocytes and adnexal extension favor lentigo maligna; use melanocytic IHC when needed.",
      ],
      [
        "Pigmented seborrheic keratosis",
        "Horn cysts and basaloid proliferation favor seborrheic keratosis.",
      ],
    ],
  },
  {
    name: "Lichen planus-like keratosis",
    category: "Benign keratoses and simulants",
    behavior: "Benign inflammatory regression of a keratinocytic lesion",
    profile: [
      "Usually occurs in middle-aged or older adults.",
      "Commonly affects sun-exposed trunk and extremities.",
      "Presents as a solitary erythematous, violaceous, or pigmented papule or thin plaque.",
    ],
    criteria: [
      "Lichenoid/interface inflammatory reaction associated with regression of a pre-existing keratinocytic lesion.",
    ],
    histology: [
      "Band-like lichenoid lymphocytic infiltrate obscures the dermoepidermal junction.",
      "Basal vacuolar alteration, apoptotic keratinocytes, and pigment incontinence may be present.",
      "Residual features of solar lentigo or seborrheic keratosis may be identified.",
    ],
    differential: [
      [
        "Melanocytic neoplasm",
        "Prominent interface inflammation can obscure melanocytic lesions; use SOX10/Melan-A when indicated.",
      ],
      [
        "Lichen planus",
        "Clinical context and residual keratinocytic architecture support lichen planus-like keratosis.",
      ],
    ],
  },
  {
    name: "Clear cell acanthoma",
    category: "Benign keratoses and simulants",
    behavior: "Benign epidermal neoplasm",
    profile: [
      "Usually affects middle-aged and older adults.",
      "Most often occurs on the lower legs.",
      "Presents as a solitary, well-circumscribed, red or brown, dome-shaped papule or nodule.",
    ],
    criteria: [
      "Well-demarcated epidermal proliferation of glycogen-rich clear keratinocytes.",
    ],
    histology: [
      "Acanthotic epidermis is sharply demarcated from adjacent epidermis.",
      "Keratinocytes have abundant pale, glycogen-rich cytoplasm and small uniform nuclei.",
      "Neutrophils may be present within the epidermis.",
    ],
    differential: [
      [
        "Psoriasis",
        "Clear cell acanthoma is sharply circumscribed and composed of glycogen-rich clear cells.",
      ],
      [
        "SCC",
        "Significant cytologic atypia and infiltrative growth are absent in clear cell acanthoma.",
      ],
    ],
  },
  {
    name: "Large cell acanthoma",
    category: "Benign keratoses and simulants",
    behavior: "Benign keratinocytic lesion",
    profile: [
      "Typically occurs in older adults on chronically sun-exposed skin.",
      "Often affects the face and extremities.",
      "Presents as a small, sharply demarcated scaly macule or thin plaque.",
    ],
    criteria: [
      "Sharply circumscribed epidermal proliferation composed of enlarged keratinocytes without significant atypia.",
    ],
    histology: [
      "Keratinocytes are larger than those in adjacent epidermis and show abundant eosinophilic cytoplasm.",
      "Acanthosis and hyperkeratosis may be present.",
      "Solar elastosis is common.",
    ],
    differential: [
      [
        "Actinic keratosis",
        "Actinic keratosis shows genuine dysplasia rather than uniform cellular enlargement.",
      ],
      [
        "SCC in situ",
        "Full-thickness cytologic atypia and loss of maturation favor SCC in situ.",
      ],
    ],
  },
  {
    name: "Warty dyskeratoma",
    category: "Benign keratoses and simulants",
    behavior: "Benign follicular infundibular lesion",
    profile: [
      "Usually affects adults, often as a solitary lesion.",
      "Commonly occurs on the head and neck.",
      "Presents as a small umbilicated papule or nodule.",
    ],
    criteria: [
      "Cup-shaped or crateriform epidermal invagination with acantholysis and dyskeratosis.",
    ],
    histology: [
      "Acantholysis and prominent dyskeratosis produce corps ronds and grains.",
      "A central keratin-filled cup may communicate with a follicular infundibulum.",
      "A suprabasal cleft may be present.",
    ],
    differential: [
      [
        "Acantholytic SCC",
        "Invasive atypical squamous nests and destructive growth favor carcinoma.",
      ],
      [
        "Darier disease",
        "Usually multiple lesions and a broader clinical distribution.",
      ],
    ],
  },
  {
    name: "Other benign keratoses / acanthomas",
    category: "Benign keratoses and simulants",
    behavior: "Benign; pattern-based group",
    profile: [
      "Clinical presentation and site vary by subtype.",
      "May occur as solitary or multiple papules or plaques.",
    ],
    criteria: [
      "Classify by the dominant histologic pattern and exclude dysplasia or invasion.",
    ],
    histology: [
      "Patterns include acantholysis, epidermolytic hyperkeratosis, hypergranulosis, glycogen deposition, and melanocyte hyperplasia.",
      "Verrucae may overlap morphologically with benign and malignant keratinocytic proliferations.",
    ],
    differential: [
      [
        "SCC",
        "Look for cytologic atypia, disordered maturation, and infiltrative growth.",
      ],
      [
        "Seborrheic keratosis",
        "Correlate the specific architectural and cytologic pattern.",
      ],
    ],
  },
  {
    name: "Superficial basal cell carcinoma",
    category: "Basal cell carcinoma",
    behavior: "Lower recurrence-risk BCC subtype",
    profile: [
      "Usually occurs on the trunk and extremities, often in younger adults than other BCC patterns.",
      "Presents as a slowly enlarging erythematous, scaly patch or thin plaque; multiple lesions may occur.",
    ],
    criteria: [
      "Multifocal or broad-based basaloid buds arise from the epidermis and extend superficially into the papillary dermis.",
      "Peripheral palisading and stromal retraction support BCC.",
    ],
    histology: [
      "Tumor nests are attached to the epidermis and extend horizontally along the dermoepidermal junction.",
      "Peripheral palisading and stromal clefting are usually present.",
      "The tumor does not show the deep, narrow infiltrative strands of high-risk patterns.",
    ],
    ihc: [
      "BerEP4 is typically positive and can support BCC in difficult cases.",
    ],
    differential: [
      [
        "SCC in situ",
        "BCC shows basaloid nests with palisading and retraction; SCC in situ shows full-thickness squamous atypia.",
      ],
      [
        "Trichoepithelioma",
        "Follicular differentiation and specialized stroma favor trichoepithelioma.",
      ],
    ],
    molecular: [
      "Hedgehog pathway dysregulation, commonly involving PTCH1 or SMO, is central to BCC pathogenesis; routine molecular testing is not required.",
    ],
  },
  {
    name: "Nodular basal cell carcinoma",
    category: "Basal cell carcinoma",
    behavior: "Lower recurrence-risk BCC subtype",
    profile: [
      "Most often occurs on the head and neck, especially the face.",
      "Usually presents as a slowly growing pearly papule or nodule, sometimes with ulceration or telangiectasia.",
    ],
    criteria: [
      "Rounded, relatively large basaloid tumor nests with peripheral palisading and stromal retraction.",
      "No significant micronodular, infiltrative, or morphoeic component.",
    ],
    histology: [
      "Nodules of basaloid cells extend into the dermis.",
      "Peripheral palisading and clefting from the surrounding stroma are characteristic.",
      "Cystic, keratotic, pigmented, or nodulocystic patterns may occur.",
    ],
    ihc: ["BerEP4 is typically positive."],
    differential: [
      [
        "Trichoepithelioma",
        "Papillary mesenchymal bodies, follicular germ-like structures, and specialized stroma favor trichoepithelioma.",
      ],
      ["SCC", "Squamous maturation and keratinization favor SCC."],
    ],
    molecular: [
      "PTCH1 loss or SMO activation drives Hedgehog pathway signaling in many cases.",
    ],
  },
  {
    name: "Micronodular basal cell carcinoma",
    category: "Basal cell carcinoma",
    behavior: "Higher recurrence-risk BCC subtype",
    profile: [
      "Usually occurs on the head and neck.",
      "May present as an ill-defined, slowly enlarging plaque or nodule; clinical borders may underestimate tumor extent.",
    ],
    criteria: [
      "Numerous small, deeply infiltrative basaloid nests, typically smaller than those in nodular BCC.",
      "Small nests extend into deeper dermis and may involve subcutis.",
    ],
    histology: [
      "Tumor is composed of compact, small basaloid nests with limited peripheral palisading.",
      "Nests infiltrate between collagen bundles and may extend deeply.",
      "Clefting may be less conspicuous than in nodular BCC.",
    ],
    ihc: ["BerEP4 is typically positive."],
    differential: [
      [
        "Nodular BCC",
        "Micronodular BCC has smaller, more deeply infiltrative nests.",
      ],
      [
        "Desmoplastic trichoepithelioma",
        "Follicular differentiation and specialized stroma favor a benign follicular tumor.",
      ],
    ],
    molecular: [
      "Hedgehog pathway alterations are characteristic of BCC; no subtype-specific molecular test is established.",
    ],
  },
  {
    name: "Infiltrating basal cell carcinoma",
    category: "Basal cell carcinoma",
    behavior: "Higher recurrence-risk BCC subtype",
    profile: [
      "Usually arises on the head and neck, particularly the central face.",
      "Often presents as an ill-defined indurated plaque or scar-like lesion.",
    ],
    criteria: [
      "Narrow, angulated strands and small nests of basaloid cells infiltrate between dermal collagen bundles.",
      "Tumor extends beyond the clinically apparent borders.",
    ],
    histology: [
      "Thin cords and irregular nests infiltrate a fibrotic stroma.",
      "Peripheral palisading and stromal retraction may be inconspicuous.",
      "Perineural invasion may occur.",
    ],
    ihc: ["BerEP4 is typically positive."],
    differential: [
      [
        "Sclerosing/morphoeic BCC",
        "Both are high-risk; morphoeic BCC shows more prominent dense sclerosis and narrow infiltrative strands.",
      ],
      [
        "Desmoplastic trichoepithelioma",
        "Benign follicular differentiation and specialized stroma favor trichoepithelioma.",
      ],
    ],
    molecular: [
      "Hedgehog pathway dysregulation is central to BCC; molecular testing is not routinely needed.",
    ],
  },
  {
    name: "Sclerosing / morphoeic basal cell carcinoma",
    category: "Basal cell carcinoma",
    behavior: "Higher recurrence-risk BCC subtype",
    profile: [
      "Typically affects the central face and other sun-exposed head and neck sites.",
      "Presents as a firm, scar-like, poorly defined plaque.",
    ],
    criteria: [
      "Thin strands and small nests of basaloid cells infiltrate a dense sclerotic stroma.",
      "Tumor strands are often difficult to identify at low magnification.",
    ],
    histology: [
      "Narrow cords of basaloid cells are embedded in densely collagenized stroma.",
      "Tumor borders are poorly circumscribed and may extend well beyond the visible lesion.",
      "Perineural invasion may be present.",
    ],
    ihc: [
      "BerEP4 is typically positive and may help identify subtle infiltrating tumor strands.",
    ],
    differential: [
      [
        "Scar / morphea",
        "Basaloid tumor strands and BerEP4 positivity support BCC.",
      ],
      [
        "Desmoplastic trichoepithelioma",
        "Follicular structures and specialized stroma favor trichoepithelioma.",
      ],
    ],
    molecular: [
      "Hedgehog pathway dysregulation, particularly PTCH1 or SMO alterations, is central to BCC.",
    ],
  },
  {
    name: "Basosquamous carcinoma",
    category: "Basal cell carcinoma",
    behavior:
      "Higher recurrence-risk carcinoma with BCC and SCC differentiation",
    profile: [
      "Usually occurs on sun-exposed head and neck skin.",
      "Clinical appearance overlaps with other BCCs and SCCs; often presents as an enlarging or ulcerated lesion.",
    ],
    criteria: [
      "Malignancy showing unequivocal features of both BCC and SCC.",
      "Transition between basaloid and squamous components may be present.",
    ],
    histology: [
      "Basaloid nests show BCC-type peripheral palisading and stromal retraction.",
      "Squamous areas show eosinophilic cytoplasm, intercellular bridges, and/or keratinization.",
      "A transition zone between the two components supports the diagnosis.",
    ],
    ihc: [
      "BerEP4 typically highlights the BCC component and is reduced or absent in the squamous component.",
      "Squamous markers such as p40 and CK5/6 highlight squamous differentiation.",
    ],
    differential: [
      [
        "BCC with focal squamous metaplasia",
        "Require convincing malignant squamous differentiation rather than limited metaplasia.",
      ],
      [
        "SCC with basaloid features",
        "Look for a genuine BCC component with characteristic palisading, retraction, and BerEP4 expression.",
      ],
    ],
    molecular: [
      "BCC-associated Hedgehog pathway alterations may be present; no routine molecular test is required.",
    ],
  },
  {
    name: "Basal cell carcinoma with sarcomatoid differentiation",
    category: "Basal cell carcinoma",
    behavior: "Rare malignant BCC variant",
    profile: [
      "Usually occurs in older adults on sun-exposed skin.",
      "Clinical presentation resembles conventional BCC.",
    ],
    criteria: [
      "Conventional BCC component with an associated malignant spindle-cell or other sarcomatoid component.",
    ],
    histology: [
      "Basaloid carcinoma is associated with a malignant spindle-cell component.",
      "The sarcomatoid component may show loss of epithelial morphology and may require extensive sampling.",
    ],
    ihc: [
      "Epithelial markers may be retained in the conventional BCC component and variably lost in the sarcomatoid component.",
      "BerEP4 can help identify the conventional BCC component.",
    ],
    differential: [
      [
        "Spindle cell SCC",
        "Look for an SCC component and squamous marker expression.",
      ],
      [
        "Pleomorphic dermal sarcoma / AFX",
        "A conventional BCC component supports sarcomatoid BCC.",
      ],
    ],
    molecular: [
      "No specific diagnostic molecular test is established in the supplied source.",
    ],
  },
  {
    name: "Basal cell carcinoma with adnexal differentiation",
    category: "Basal cell carcinoma",
    behavior: "Rare BCC variant",
    profile: [
      "Usually arises on sun-exposed skin, particularly the head and neck.",
      "Clinical findings are not reliably distinctive from conventional BCC.",
    ],
    criteria: [
      "Basal cell carcinoma with morphologic differentiation toward an adnexal structure.",
    ],
    histology: [
      "Basaloid carcinoma shows areas of follicular, sebaceous, or other adnexal differentiation.",
      "The overall malignant BCC architecture and cytology should be established.",
    ],
    ihc: [
      "Use a morphology-directed panel to characterize the suspected line of adnexal differentiation; no single marker is definitive.",
    ],
    differential: [
      [
        "Primary adnexal carcinoma",
        "Look for a conventional BCC component and integrate architecture, stromal relationship, and immunophenotype.",
      ],
      [
        "Benign follicular neoplasm",
        "Infiltrative growth and malignant cytology support carcinoma.",
      ],
    ],
  },
  {
    name: "Fibroepithelial basal cell carcinoma (fibroepithelioma of Pinkus)",
    category: "Basal cell carcinoma",
    behavior: "Lower recurrence-risk BCC subtype",
    profile: [
      "Often occurs on the lower trunk, especially the lower back.",
      "Usually presents as a small, skin-colored or pink papule or plaque.",
    ],
    criteria: [
      "Anastomosing strands of basaloid cells extend into a fibrous stroma.",
      "The characteristic fibroepithelial architecture supports the diagnosis.",
    ],
    histology: [
      "Thin, branching basaloid cords are embedded in a prominent fibrous stroma.",
      "The pattern may resemble a fenestrated network.",
    ],
    ihc: ["BerEP4 is typically positive."],
    differential: [
      [
        "Fibroepithelioma / trichoblastoma",
        "Correlate the overall architecture and infiltrative features; avoid relying on a single stain.",
      ],
      [
        "Other BCC patterns",
        "The distinctive branching cords and fibrous stroma define this pattern.",
      ],
    ],
    molecular: [
      "Hedgehog pathway alterations are implicated in BCC; no routine subtype-specific molecular test.",
    ],
  },
  {
    name: "Keratoacanthoma",
    category: "SCC and precursors",
    behavior:
      "Low-grade squamous proliferation; biological relationship to SCC remains debated",
    profile: [
      "Usually occurs in older adults on sun-exposed skin, particularly the face and extremities.",
      "Presents as a rapidly growing crateriform nodule with a central keratin plug.",
      "Some lesions undergo spontaneous regression.",
    ],
    criteria: [
      "Symmetric crateriform architecture with a central keratin-filled crater.",
      "Lobules of well-differentiated squamous epithelium have a pushing rather than destructive interface.",
      "Adequate sampling of the base is essential.",
    ],
    histology: [
      "A central keratin-filled crater is flanked by epithelial lips.",
      "Squamous lobules show glassy eosinophilic cytoplasm and relatively bland nuclei.",
      "Inflammation and partial regression may be present.",
    ],
    differential: [
      [
        "Well-differentiated SCC",
        "Asymmetry, infiltrative tongues, significant atypia, and destructive invasion favor SCC.",
      ],
      [
        "Verruca",
        "Verruca shows papillomatosis and viral cytopathic change rather than classic crateriform architecture.",
      ],
    ],
  },
  {
    name: "Conventional cutaneous squamous cell carcinoma",
    category: "SCC and precursors",
    behavior: "Malignant; metastatic potential",
    profile: [
      "Most common in older adults with cumulative UV exposure; incidence is markedly increased in chronically immunosuppressed patients.",
      "Usually affects sun-exposed head, neck, ears, lips, and dorsal hands; may arise in scars or chronic ulcers.",
      "Presents as a rapidly growing, firm, hyperkeratotic or ulcerated papule, plaque, or nodule.",
    ],
    criteria: [
      "Infiltration of dermis by atypical squamous cells, with variable keratinization.",
      "An in situ component may be present.",
      "Assess differentiation, depth, perineural invasion, lymphovascular invasion, and other high-risk features.",
    ],
    histology: [
      "Irregular nests, tongues, and individual atypical squamous cells infiltrate the dermis.",
      "Keratinization ranges from individual cell dyskeratosis to keratin pearls.",
      "Well-differentiated tumors show abundant eosinophilic cytoplasm and intercellular bridges.",
      "Poorly differentiated tumors may show minimal overt squamous maturation.",
    ],
    ihc: [
      "p40, p63, CK5/6, MNF116, and 34βE12 support squamous differentiation.",
      "SOX10 helps exclude melanoma in poorly differentiated or spindle-cell lesions.",
    ],
    differential: [
      [
        "Basal cell carcinoma",
        "BCC shows basaloid nests, peripheral palisading, stromal retraction, and BerEP4 expression.",
      ],
      [
        "Adnexal carcinoma",
        "Look for ductal/luminal differentiation and use CEA/EMA or other directed markers.",
      ],
      [
        "Melanoma",
        "Use SOX10 and other melanocytic markers when morphology is poorly differentiated.",
      ],
    ],
    molecular: [
      "UV-signature mutations are common; TP53 and NOTCH pathway alterations are frequent. Molecular testing is not routinely required for conventional diagnosis.",
    ],
  },
  {
    name: "Verrucous squamous cell carcinoma",
    category: "SCC and precursors",
    behavior: "Locally aggressive; low metastatic potential",
    profile: [
      "Predominantly affects older men; most patients in cited series were at least 60 years old.",
      "Cutaneous sites include palms, soles, distal digits, and anogenital skin; chronic ulcers and scars may be involved.",
      "Presents as a slowly growing hyperkeratotic plaque or exophytic condylomatoid lesion.",
    ],
    criteria: [
      "Complex exophytic and endophytic architecture with deep, broad, club-shaped tongues.",
      "Pushing borders and minimal cytologic atypia.",
      "Exclude reactive/infectious verruciform proliferations.",
    ],
    histology: [
      "Marked hyperkeratosis overlies complex exophytic and endophytic growth.",
      "Broad bulbous tongues extend deeply into the dermis with pushing borders.",
      "Cytologic atypia is usually minimal and may be concentrated near the advancing interface.",
    ],
    differential: [
      [
        "Verruca / callus",
        "Deep club-shaped endophytic tongues and pushing invasion favor verrucous SCC.",
      ],
      [
        "Reactive pseudoepitheliomatous hyperplasia",
        "Correlate with infection, ulceration, and deep interface; reactive processes lack the characteristic pushing tumor architecture.",
      ],
      [
        "Verruciform xanthoma",
        "Foamy macrophages in papillary dermis support verruciform xanthoma.",
      ],
    ],
  },
  {
    name: "Acantholytic squamous cell carcinoma",
    category: "SCC and precursors",
    behavior:
      "Invasive SCC; prognostic significance of acantholysis alone is debated",
    profile: [
      "Usually affects older men and sun-exposed head, neck, face, and ears.",
      "Clinical appearance resembles conventional invasive SCC.",
      "May be more frequent in organ transplant recipients.",
    ],
    criteria: [
      "Invasive SCC with tumor-cell acantholysis producing variably sized spaces within tumor lobules.",
      "Pseudoglandular architecture may be present.",
    ],
    histology: [
      "Acantholysis separates tumor cells and creates pseudoglandular or pseudovascular spaces.",
      "Individual rounded tumor cells may float within the spaces.",
      "The overall architecture resembles conventional invasive SCC.",
    ],
    differential: [
      [
        "Adnexal / metastatic adenocarcinoma",
        "True gland formation and luminal differentiation favor adenocarcinoma; acantholytic SCC forms pseudoglandular spaces.",
      ],
      [
        "Angiosarcoma",
        "Endothelial markers and true vasoformative growth distinguish angiosarcoma.",
      ],
      [
        "Adenosquamous carcinoma",
        "True ducts/glands and a distinct glandular component favor adenosquamous carcinoma.",
      ],
    ],
    ihc: [
      "p40, p63, and CK5/6 support squamous differentiation; use glandular and endothelial markers when needed.",
    ],
  },
  {
    name: "Lymphoepithelial carcinoma of skin",
    category: "SCC and precursors",
    behavior: "Poorly differentiated SCC; intermediate metastatic potential",
    profile: [
      "Exceedingly rare; typically occurs on sun-exposed head and neck skin.",
      "Often grows rapidly but has no distinctive clinical appearance.",
    ],
    criteria: [
      "Poorly differentiated SCC with tumor islands surrounded and infiltrated by lymphocytes and plasma cells.",
    ],
    histology: [
      "Poorly differentiated epithelial islands are surrounded and infiltrated by lymphocytes and variable plasma cells.",
      "The appearance may resemble undifferentiated nasopharyngeal carcinoma.",
    ],
    ihc: [
      "Pancytokeratin, CK5/6, and p63 highlight epithelial elements that may be obscured by the lymphoid infiltrate.",
    ],
    differential: [
      [
        "Cutaneous lymphoid infiltrate / lymphoma",
        "Cytokeratin-positive epithelial nests establish carcinoma.",
      ],
      [
        "Inflamed SCC",
        "The prominent lymphoplasmacytic background and characteristic tumor-cell pattern support lymphoepithelial carcinoma.",
      ],
    ],
  },
  {
    name: "Clear cell squamous cell carcinoma",
    category: "SCC and precursors",
    behavior: "Invasive or in situ SCC variant",
    profile: [
      "Usually occurs in older men on sun-damaged skin, especially the head and neck.",
      "Clinical appearance is generally indistinguishable from conventional SCC.",
    ],
    criteria: [
      "Squamous carcinoma with clear-cell differentiation in at least 25% of neoplastic cells (proposed threshold).",
      "PAS-positive glycogen is a desirable feature.",
    ],
    histology: [
      "Malignant squamoid cells have abundant clear cytoplasm with cytoplasmic vacuolation.",
      "Focal keratinization may be present.",
      "Intracytoplasmic vacuoles are usually unilocular; clear material is often PAS-positive glycogen.",
    ],
    differential: [
      [
        "Trichilemmal carcinoma",
        "Often deeply seated without epidermal connection; peripheral palisading, basement membrane prominence, and pilar keratinization may be present.",
      ],
      [
        "Sebaceous carcinoma",
        "Multivacuolated cytoplasm and adipophilin/perilipin expression support sebaceous differentiation.",
      ],
      [
        "Clear cell BCC",
        "BerEP4 expression and basaloid architecture support BCC.",
      ],
      [
        "Porocarcinoma / hidradenocarcinoma",
        "Ductal differentiation highlighted by CEA and EMA supports adnexal carcinoma.",
      ],
    ],
    ihc: [
      "Use p40/p63 and CK5/6 to support squamous differentiation; PAS with and without diastase can demonstrate glycogen.",
    ],
  },
  {
    name: "Spindle cell squamous cell carcinoma",
    category: "SCC and precursors",
    behavior: "Poorly differentiated SCC; potentially aggressive",
    profile: [
      "Usually affects elderly men, most often older than 70 years.",
      "Occurs on sun-exposed face, head, neck, chest, and upper extremities.",
      "Presents as a rapidly growing raised or exophytic plaque or nodule, often ulcerated or bleeding.",
    ],
    criteria: [
      "Closely packed fascicles of pleomorphic spindle cells with frequent mitoses.",
      "Establish epithelial differentiation, particularly when no conventional squamous component is present.",
    ],
    histology: [
      "Pleomorphic spindle cells form closely packed fascicles in the dermis.",
      "Keratinization is often absent.",
      "Severe solar elastosis and an overlying actinic keratosis or SCC in situ may provide clues.",
      "Tumor may extend into subcutis and along interlobular fat septa.",
    ],
    ihc: [
      "p40, p63, 34βE12, CK5/6, and/or MNF116 support squamous differentiation.",
      "SOX10 helps exclude spindle-cell melanoma; CD45 helps exclude lymphoma.",
    ],
    differential: [
      [
        "Atypical fibroxanthoma / pleomorphic dermal sarcoma",
        "These lack convincing epithelial marker expression; assess depth, necrosis, and perineural/vascular invasion.",
      ],
      [
        "Spindle-cell melanoma",
        "SOX10 and other melanocytic markers support melanoma.",
      ],
      [
        "Leiomyosarcoma",
        "SMA, desmin, and h-caldesmon support smooth-muscle differentiation.",
      ],
    ],
  },
  {
    name: "Squamous cell carcinoma with sarcomatoid differentiation",
    category: "SCC and precursors",
    behavior: "Rare malignant SCC variant",
    profile: [
      "Usually occurs on sun-exposed face, head, neck, chest, and upper extremities.",
      "Typically presents with rapid growth; no unique clinical appearance is established.",
    ],
    criteria: [
      "SCC with recognizable sarcomatoid differentiation, often chondroblastic, osteoblastic, rhabdomyosarcomatous, or myoid.",
    ],
    histology: [
      "A conventional keratinizing SCC component is usually present alongside a sarcomatous component.",
      "Heterologous elements may include cartilage, bone, skeletal muscle, or smooth-muscle-like differentiation.",
      "Extensive sampling may be required to identify the conventional SCC component.",
    ],
    ihc: [
      "Epithelial markers may be retained in the conventional SCC component; the sarcomatoid component may show limited expression.",
    ],
    differential: [
      [
        "Primary cutaneous sarcoma",
        "Identification of a conventional SCC component supports sarcomatoid SCC.",
      ],
      [
        "Spindle cell SCC",
        "Sarcomatoid SCC has specific heterologous differentiation rather than only spindle-cell morphology.",
      ],
    ],
  },
  {
    name: "Merkel cell carcinoma",
    category: "Other epidermal malignancies",
    behavior: "Aggressive primary cutaneous neuroendocrine carcinoma",
    profile: [
      "Predominantly affects elderly White patients; median age at diagnosis is approximately 75 years.",
      "Most often occurs on sun-damaged head and neck, followed by extremities and trunk.",
      "Presents as a rapidly growing flesh-colored or violaceous nodule or plaque; immunosuppression is a risk factor.",
    ],
    criteria: [
      "Dermal small-blue-cell tumor with neuroendocrine cytology.",
      "Neuroendocrine immunophenotype with characteristic perinuclear dot-like cytokeratin staining.",
      "Exclude metastatic neuroendocrine carcinoma from another primary site.",
    ],
    histology: [
      "Dermal and/or subcutaneous tumor forms sheets, nests, or trabeculae of small-to-intermediate cells.",
      "Nuclei show finely stippled chromatin; mitoses and apoptotic bodies are numerous.",
      "Lymphovascular invasion is frequent.",
    ],
    ihc: [
      "INSM1 and other neuroendocrine markers are positive.",
      "Cytokeratin 20 typically shows a perinuclear dot-like pattern.",
      "TTF1 is generally negative in Merkel cell carcinoma and helps distinguish many pulmonary small-cell carcinomas.",
    ],
    differential: [
      [
        "Metastatic small-cell carcinoma",
        "Correlate clinically and use CK20, TTF1, neuroendocrine markers, and site-directed evaluation.",
      ],
      ["Lymphoma", "Cytokeratin positivity supports carcinoma."],
      ["Melanoma", "SOX10 and melanocytic markers support melanoma."],
    ],
    molecular: [
      "Clonal Merkel cell polyomavirus integration is present in approximately 80% of cases in regions with lower sun exposure.",
      "Virus-negative tumors commonly show TP53 and RB1 alterations and a UV-signature mutation profile.",
      "MCPyV large T-antigen IHC or molecular testing supports virus-positive MCC.",
    ],
  },
];

const bccRows = [
  [
    "Lower recurrence risk",
    "Superficial",
    "Broad-based buds attached to epidermis; superficial horizontal growth.",
  ],
  [
    "Lower recurrence risk",
    "Nodular",
    "Large rounded dermal nests with peripheral palisading and stromal retraction.",
  ],
  [
    "Lower recurrence risk",
    "Fibroepithelial",
    "Branching basaloid cords in prominent fibrous stroma (fibroepithelioma of Pinkus).",
  ],
  [
    "Higher recurrence risk",
    "Micronodular",
    "Small compact nests with deeper infiltrative growth.",
  ],
  [
    "Higher recurrence risk",
    "Infiltrating",
    "Narrow angulated strands and irregular nests between collagen bundles.",
  ],
  [
    "Higher recurrence risk",
    "Sclerosing / morphoeic",
    "Thin strands and small nests in dense sclerotic stroma; poorly defined borders.",
  ],
  [
    "Higher recurrence risk",
    "Basosquamous carcinoma",
    "Malignancy with unequivocal BCC and SCC differentiation.",
  ],
  [
    "Rare variant",
    "With sarcomatoid differentiation",
    "BCC component associated with a malignant sarcomatoid component.",
  ],
  [
    "Rare variant",
    "With adnexal differentiation",
    "BCC showing morphologic differentiation toward adnexal structures.",
  ],
];

const sccRows = [
  [
    "In situ",
    "SCC in situ (Bowen disease)",
    "Full-thickness epidermal atypia without dermal invasion.",
  ],
  [
    "Conventional invasive",
    "Conventional SCC",
    "Invasive atypical squamous nests/tongues with variable keratinization.",
  ],
  [
    "Well differentiated / low metastatic potential",
    "Verrucous SCC",
    "Deep, broad, club-shaped pushing tongues; minimal atypia.",
  ],
  [
    "Histologic subtype",
    "Acantholytic SCC",
    "Acantholysis creates pseudoglandular spaces within invasive tumor lobules.",
  ],
  [
    "Histologic subtype",
    "Lymphoepithelial carcinoma",
    "Poorly differentiated epithelial islands with dense lymphoplasmacytic infiltrate.",
  ],
  [
    "Histologic subtype",
    "Clear cell SCC",
    "Squamous carcinoma with clear-cell differentiation, proposed threshold ≥25%.",
  ],
  [
    "Histologic subtype",
    "Spindle cell SCC",
    "Predominantly pleomorphic spindle cells; confirm epithelial differentiation.",
  ],
  [
    "Histologic subtype",
    "SCC with sarcomatoid differentiation",
    "SCC with chondroblastic, osteoblastic, rhabdomyosarcomatous, or myoid differentiation.",
  ],
];

const categories = [
  "All",
  "Premalignant keratoses",
  "Benign keratoses and simulants",
  "Basal cell carcinoma",
  "SCC and precursors",
  "Other epidermal malignancies",
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
          {v}
        </li>
      ))}
    </ul>
  );
}
function ComparisonTable({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead>
          <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
            <th className="py-2 pr-3">Risk / category</th>
            <th className="py-2 pr-3">Type</th>
            <th className="py-2">Defining classification feature</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="py-3 pr-3 align-top font-semibold">{r[0]}</td>
              <td className="py-3 pr-3 align-top font-semibold text-slate-800">
                {r[1]}
              </td>
              <td className="py-3 align-top leading-6 text-slate-600">
                {r[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EpidermalTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Superficial basal cell carcinoma",
    "Conventional cutaneous squamous cell carcinoma",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (cat === "All" || x.category === cat) &&
          [
            x.name,
            x.category,
            x.behavior,
            ...x.profile,
            ...x.criteria,
            ...x.histology,
            ...(x.ihc ?? []),
            ...x.differential.flat(),
            ...(x.molecular ?? []),
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
            PathologyGPS / Skin / Epidermal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Epidermal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference to keratinocytic
                lesions, basal cell carcinoma, squamous cell carcinoma, and
                primary cutaneous neuroendocrine carcinoma.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify by architecture, cytologic differentiation, invasion,
                and recurrence or metastatic risk.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For BCC and SCC, the histologic subtype is clinically
                consequential. Identify high-risk growth patterns and document
                invasion-related risk features.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from epidermal pattern to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Start with the clinical setting",
                "Age, site, sun exposure, immunosuppression, prior radiation/PUVA, arsenic exposure, and growth rate.",
              ],
              [
                "Assess epidermal architecture",
                "Intraepidermal dysplasia, crateriform growth, basaloid nests, squamous nests, or a small-blue-cell pattern.",
              ],
              [
                "Determine invasion",
                "Evaluate the dermoepidermal junction, depth, infiltrative pattern, perineural invasion, and lymphovascular invasion.",
              ],
              [
                "Assign the subtype",
                "Separate low- and high-recurrence-risk BCC patterns; classify SCC in situ and invasive histologic variants.",
              ],
              [
                "Use targeted ancillary tests",
                "BerEP4 for BCC in selected differentials; p40/p63/CK5/6 for SCC; neuroendocrine markers and CK20 for MCC.",
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
        </Panel>

        <Panel title="Basal cell carcinoma: histologic classification and recurrence risk">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            The classification emphasizes recurrence risk. Superficial, nodular,
            and fibroepithelial BCCs are lower-risk patterns; micronodular,
            infiltrating, and sclerosing/morphoeic BCCs are higher-risk.
            Basosquamous carcinoma is also considered higher risk. Rare
            differentiation patterns are listed separately.
          </p>
          <ComparisonTable rows={bccRows} />
        </Panel>

        <Panel title="Squamous cell carcinoma: classification by invasion and histologic subtype">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            SCC classification distinguishes intraepidermal disease from
            invasive carcinoma and recognizes variants with distinctive
            architecture, differentiation, or clinical behavior.
          </p>
          <ComparisonTable rows={sccRows} />
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-risk features in cutaneous SCC">
            <Bullets
              items={[
                "Tumor thickness greater than 2 mm.",
                "Clark level IV or V invasion.",
                "Perineural invasion; involvement of nerves ≥0.1 mm is associated with higher disease-specific mortality.",
                "Primary site on the ear or lip.",
                "Poor differentiation.",
                "Additional clinical risk factors include poorly defined borders, recurrence, immunosuppression, prior radiation or chronic inflammation, rapid growth, and neurologic symptoms.",
                "Lymphovascular invasion and high-risk histologic subtype should also be documented.",
              ]}
            />
          </Panel>
          <Panel title="Targeted immunohistochemistry and molecular findings">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "BCC",
                      "BerEP4 supports basaloid differentiation; Hedgehog pathway dysregulation (PTCH1/SMO) is central.",
                    ],
                    [
                      "SCC",
                      "p40, p63, CK5/6, MNF116, and 34βE12 support squamous differentiation.",
                    ],
                    [
                      "Spindle cell SCC",
                      "p40/p63/CK5/6 and broad-spectrum keratins help establish epithelial lineage; SOX10 excludes melanoma.",
                    ],
                    [
                      "MCC",
                      "INSM1/neuroendocrine markers and perinuclear dot-like keratin staining; CK20 is typically dot-like.",
                    ],
                    [
                      "Virus-positive MCC",
                      "MCPyV large T-antigen IHC or molecular testing supports viral association.",
                    ],
                    [
                      "Virus-negative MCC",
                      "TP53/RB1 alterations and UV-signature mutations are common.",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-3 pr-3 align-top font-semibold">
                        {r[0]}
                      </td>
                      <td className="py-3 leading-6 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profiles and diagnostic criteria
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunophenotype, or
                molecular alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. BerEP4, palisading, p40, acantholysis..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
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
                          {p.category}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <Panel title="Clinical profile">
                        <Bullets items={p.profile} />
                      </Panel>
                      <Panel title="Essential diagnostic criteria">
                        <Bullets items={p.criteria} />
                      </Panel>
                      <Panel title="Histopathology">
                        <Bullets items={p.histology} />
                      </Panel>
                      {p.ihc && (
                        <Panel title="Immunophenotype">
                          <Bullets items={p.ihc} />
                        </Panel>
                      )}
                      <Panel title="Differential diagnosis">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[520px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
                                  <td className="w-1/3 py-3 pr-3 align-top font-semibold">
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
                      </Panel>
                      {p.molecular && (
                        <Panel title="Molecular pathology">
                          <Bullets items={p.molecular} />
                        </Panel>
                      )}
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

        <Panel title="Practical sampling and reporting checklist">
          <Bullets
            items={[
              "For BCC, identify and report all growth patterns, particularly micronodular, infiltrating, and sclerosing/morphoeic components; mixed patterns may occur.",
              "For basosquamous carcinoma, document unequivocal BCC and SCC differentiation and assess the transition between components.",
              "For SCC, document differentiation, tumor thickness/depth, anatomic level, perineural invasion (including nerve caliber), lymphovascular invasion, and margins.",
              "Sample the deep interface in crateriform and verruciform lesions to distinguish keratoacanthoma, verruca, verrucous SCC, and conventional invasive SCC.",
              "In spindle-cell lesions, search for an in situ or conventional squamous component and use a focused epithelial/melanocytic/mesenchymal panel.",
              "For suspected MCC, use neuroendocrine and keratin markers and exclude a metastatic neuroendocrine carcinoma from another primary site.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Content is based on the
          supplied WHO excerpt. Molecular findings are included only when
          diagnostically relevant; supportive immunostains should be interpreted
          with morphology and clinical context.
        </footer>
      </div>
    </main>
  );
}
