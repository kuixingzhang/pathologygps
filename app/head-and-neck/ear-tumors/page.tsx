"use client";

import { useMemo, useState, type ReactNode } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: Differential[];
};

const items: Entity[] = [
  {
    name: "Chondrodermatitis nodularis chronica helicis",
    group: "Non-neoplastic / degenerative",
    behavior: "Inflammatory and degenerative lesion",
    profile: [
      "Most often affects patients in the seventh decade; male predominance (approximately 2:1).",
      "Usually involves the helix, which is affected about twice as often as the antihelix; any auricular site may be involved.",
      "Presents as an intensely painful, firm red nodule with a central crater and crust; pain is often nocturnal and worsened by pressure on the ear.",
    ],
    criteria: [
      "Cup-shaped epidermal crater containing necrotic debris and fibrin.",
      "Underlying dermal collagen is homogenized and eosinophilic, with extension to superficial cartilage.",
      "Superficial cartilage shows erosion and degenerative change.",
    ],
    morphology: [
      "A central cup-shaped crater contains necrotic debris, fibrin, and variable inflammatory cells.",
      "Parakeratotic and hyperkeratotic crust overlies acanthotic epithelium, often with acute inflammation.",
      "An inverted funnel-shaped dermal defect contains homogeneous eosinophilic collagen admixed with fibrin.",
      "Superficial cartilage shows erosion, loss of basophilia, fibrosis, and chondrocyte dropout.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "Carcinoma shows infiltrative malignant squamous epithelium; this lesion instead shows a crater with necrobiotic collagen and superficial cartilage degeneration.",
      },
      {
        name: "Cystic chondromalacia (auricular pseudocyst)",
        distinction:
          "The pseudocyst is an epithelium-free cleft within the cartilage and usually presents as a painless fluctuant swelling; this lesion is a painful crater-forming process.",
      },
      {
        name: "Relapsing polychondritis",
        distinction:
          "Relapsing polychondritis is a broader inflammatory cartilage disorder; the localized crater with necrobiotic dermal collagen and superficial cartilage erosion supports this diagnosis.",
      },
    ],
  },
  {
    name: "Cystic chondromalacia (auricular pseudocyst)",
    group: "Non-neoplastic / degenerative",
    behavior: "Degenerative intracartilaginous pseudocyst",
    profile: [
      "Most often affects young men (mean age approximately 35 years; reported male-to-female ratio about 9:1), although any age and either sex may be affected.",
      "Involves the helix, scaphoid fossa, concha, or triangular fossa.",
      "Usually presents as a unilateral, rapidly developing, painless, fusiform, slightly fluctuant swelling without overlying skin change.",
    ],
    criteria: [
      "Central cleft within the auricular cartilage without an epithelial lining.",
      "Degenerated cartilage with variable hemorrhage, granulation tissue, and fibrosis.",
      "Clinical presentation is typically a painless fluctuant auricular swelling.",
    ],
    morphology: [
      "The cartilaginous plate contains a central epithelium-free cleft.",
      "The cleft may have an irregular contour and a rim of fibrous or granulation tissue containing plump fibroblasts.",
      "Mucoid material, hemosiderin, granulation tissue, and fibrosis vary with lesion duration and prior procedures.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Chondrodermatitis nodularis chronica helicis",
        distinction:
          "That lesion has a painful crater, necrobiotic dermal collagen, and superficial cartilage erosion; a pseudocyst has an epithelium-free cleft within the cartilage.",
      },
      {
        name: "Relapsing polychondritis",
        distinction:
          "Relapsing polychondritis produces inflammatory cartilage injury in a systemic clinical setting rather than a localized intracartilaginous pseudocyst.",
      },
      {
        name: "Traumatic perichondritis",
        distinction:
          "Perichondritis is an inflammatory process; the defining finding here is a central epithelium-free cleft in the cartilage.",
      },
    ],
  },
  {
    name: "Exostosis (osteoma) of the ear",
    group: "Non-neoplastic / osseous",
    behavior: "Benign reactive bony proliferation",
    profile: [
      "Occurs in individuals with repeated aquatic exposure; no characteristic age or sex predilection is specified.",
      "Usually arises in the bony external auditory canal; middle-ear involvement is extremely rare.",
      "Often asymptomatic; may cause conductive hearing loss, recurrent otitis externa, otalgia, or cerumen impaction. EAC lesions are commonly called surfer's ear.",
    ],
    criteria: [
      "Mature-appearing lamellar cortical bone in the appropriate radiologic setting.",
      "EAC exostoses are typically bilateral and broad-based, medial to the isthmus.",
      "Marrow spaces are absent.",
    ],
    morphology: [
      "Composed of lamellar bone with anastomosing trabeculae and interspersed vascular tissue.",
      "Marrow spaces are absent.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Otosclerosis",
        distinction:
          "Otosclerosis consists of well-demarcated plaques of immature, vascular otospongiotic bone within the otic capsule; exostosis is mature lamellar cortical bone in the EAC.",
      },
      {
        name: "Osteoma of the external auditory canal",
        distinction:
          "EAC osteoma is typically unilateral, may be pedunculated, and arises in the lateral canal; exostoses are usually bilateral, broad-based, and medial to the isthmus.",
      },
    ],
  },
  {
    name: "Ceruminous adenoma",
    group: "Benign neoplasms",
    behavior: "Benign apocrine gland neoplasm",
    profile: [
      "Occurs across a wide age range (12–85 years), with a peak in the sixth decade; sexes are affected equally.",
      "Arises from ceruminous glands in the outer half of the external auditory canal.",
      "Presents as an EAC mass with an intact tympanic membrane; conductive hearing loss, otorrhea, discharge, and otalgia may occur.",
    ],
    criteria: [
      "Lateral EAC location and a circumscribed, noninvasive glandular neoplasm.",
      "Bland biphasic population of luminal epithelial and basal/myoepithelial cells.",
      "Luminal cells show apocrine differentiation with apical snouting or decapitation secretion.",
      "Golden-yellow to brown cytoplasmic pigment granules are a desirable feature.",
    ],
    morphology: [
      "Usually circumscribed and unencapsulated, without destructive invasion.",
      "Predominantly glandular growth, often with cystic change; solid back-to-back glands and papillary patterns may occur.",
      "Bland luminal cuboidal-to-columnar cells have abundant eosinophilic cytoplasm and apical snouts.",
      "Outer basal/myoepithelial cells are often spindled and may have clear cytoplasm.",
      "Ceruminous pleomorphic adenoma has chondromyxoid stroma; syringocystadenoma papilliferum shows papillary projections and a stromal plasma-cell infiltrate.",
    ],
    ihc: [
      "Pancytokeratin is strongly and diffusely positive.",
      "Luminal cells express CK7, EMA, and KIT (CD117); GATA3 is usually positive in luminal/apocrine cells.",
      "Basal cells express myoepithelial or basal-cell markers.",
    ],
    molecular: [],
    differential: [
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Carcinoma shows destructive infiltration, cytologic atypia, frequent mitoses, and may show perineural or lymphovascular invasion; adenoma is bland and noninvasive.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "MeNET coexpresses epithelial and neuroendocrine markers and has characteristic neuroendocrine architecture; ceruminous adenoma is a biphasic apocrine glandular neoplasm.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Papilloma shows multilayered transitional epithelium with intraepithelial microcysts and transepithelial inflammatory cells, rather than a biphasic apocrine glandular proliferation.",
      },
      {
        name: "Vestibular schwannoma",
        distinction:
          "Schwannoma is a spindle-cell nerve-sheath tumor with diffuse S100/SOX10 expression, not an apocrine glandular neoplasm.",
      },
    ],
  },
  {
    name: "Ceruminous adenocarcinoma",
    group: "Malignant epithelial neoplasms",
    behavior: "Malignant ceruminous gland neoplasm",
    profile: [
      "Usually presents in the sixth decade (range 21–92 years), with a slight female predominance; patients present about a decade earlier than those with ceruminous adenoma.",
      "Arises lateral to the bony-cartilaginous junction of the external auditory canal; adjacent parotid origin must be excluded.",
      "Common presentations are otalgia, an EAC mass, and hearing change; fullness, discharge, and bleeding may occur.",
    ],
    criteria: [
      "External auditory canal origin, with direct extension from adjacent salivary gland sites excluded.",
      "Destructive infiltration by malignant glandular cells, often associated with benign ceruminous glands.",
      "Perineural invasion, lymphovascular invasion, comedonecrosis, and atypical mitoses support carcinoma.",
      "Classify the morphology as adenocarcinoma NOS, adenoid cystic carcinoma, or mucoepidermoid carcinoma when appropriate.",
    ],
    morphology: [
      "Shows destructive infiltration into surrounding soft tissue; bone and cartilage invasion are less common.",
      "Adenocarcinoma NOS shows solid and cystic growth, back-to-back irregular glands, pleomorphism, and frequent mitoses, including atypical forms.",
      "Apocrine cells may show cytoplasmic snouts or blebs; ceroid pigment granules are absent.",
      "Ceruminous adenoid cystic carcinoma shows cribriform, tubular-trabecular, or solid growth with basaloid cells and basement-membrane-like material.",
      "Ceruminous mucoepidermoid carcinoma contains intermingled epidermoid, intermediate, and mucous cells.",
    ],
    ihc: [
      "Biphasic luminal and basal/myoepithelial differentiation may be highlighted focally.",
      "CD117 highlights luminal cells in ceruminous adenoid cystic carcinoma.",
      "The glandular component of ceruminous mucoepidermoid carcinoma may express CEA.",
      "Neuroendocrine markers are nonreactive.",
    ],
    molecular: [],
    differential: [
      {
        name: "Ceruminous adenoma",
        distinction:
          "Adenoma is circumscribed, bland, biphasic, and noninvasive; carcinoma shows destructive infiltration, atypia, frequent mitoses, and may show perineural or lymphovascular invasion.",
      },
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "EAC SCC shows squamous differentiation and keratinization rather than malignant ceruminous glandular differentiation.",
      },
      {
        name: "Middle ear adenocarcinoma",
        distinction:
          "Middle ear adenocarcinoma is centered in the middle ear/tympanic cavity and often has cystic-papillary architecture; ceruminous carcinoma arises in the lateral EAC from ceruminous glands.",
      },
      {
        name: "Metastatic or directly extending salivary gland carcinoma",
        distinction:
          "Imaging and clinical correlation must exclude direct extension from the parotid or another salivary primary.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "Favor Middle ear neuroendocrine tumor (MeNET) when its defining pattern is present: primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation. In contrast, Ceruminous adenocarcinoma is characterized by external auditory canal origin, with direct extension from adjacent salivary gland sites excluded.",
      },
      {
        name: "Endolymphatic sac tumor (ELST)",
        distinction:
          "Favor Endolymphatic sac tumor (ELST) when its defining pattern is present: tumor centered on the endolymphatic sac/duct. In contrast, Ceruminous adenocarcinoma is characterized by external auditory canal origin, with direct extension from adjacent salivary gland sites excluded.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Favor Middle ear squamous cell carcinoma when its defining pattern is present: infiltrating squamous epithelial proliferation with malignant cytologic and architectural features. In contrast, Ceruminous adenocarcinoma is characterized by external auditory canal origin, with direct extension from adjacent salivary gland sites excluded.",
      },
    ],
  },
  {
    name: "Squamous cell carcinoma of the external auditory canal",
    group: "Malignant epithelial neoplasms",
    behavior: "Malignant cutaneous-type squamous neoplasm",
    profile: [
      "Usually affects adults in the sixth to seventh decades; sexes are affected equally.",
      "Arises in the keratinizing squamous epithelium of the external auditory canal; origin in the pinna or periauricular skin must be excluded.",
      "May present with chronic otorrhea, otalgia, bleeding, hearing loss, otitis externa/media, or facial palsy; an EAC mass is more suggestive.",
    ],
    criteria: [
      "Infiltrating squamous proliferation with architectural and cytologic features of carcinoma.",
      "Establish primary EAC origin and exclude direct extension from pinna/periauricular skin or other adjacent sites.",
      "Squamous-lineage immunohistochemistry is useful in selected poorly differentiated tumors.",
    ],
    morphology: [
      "Morphology resembles cutaneous SCC; most tumors are well-differentiated and keratinizing.",
      "Carcinoma in situ may be present in adjacent epithelium.",
      "Concurrent sinonasal-type papilloma, cholesteatoma, or chronic otitis may be present.",
      "Poorly differentiated nonkeratinizing tumors require consideration of translocation-associated entities.",
    ],
    ihc: [
      "Pancytokeratin, p40, p63, and CK5/6 support squamous differentiation.",
    ],
    molecular: [
      "EAC SCC may show 3q, 5p, and 8q amplification, 3p deletion, and alterations involving TP53, CDKN2A, NOTCH, and FAT.",
      "In poorly differentiated nonkeratinizing tumors, consider BRD4::NUTM1, DEK::AFF2, EWSR1::FLI1, and EWSR1::ERG rearrangements when morphology and clinical context warrant.",
    ],
    differential: [
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Ceruminous carcinoma shows malignant glandular/apocrine differentiation, whereas EAC SCC shows infiltrating squamous differentiation.",
      },
      {
        name: "Cholesteatoma",
        distinction:
          "Cholesteatoma has bland keratinizing squamous epithelium with laminated keratin debris and inflammation, without malignant cytology or destructive carcinoma.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Both are squamous carcinomas; distinguish by anatomic epicenter and exclude middle-ear primary or direct extension from adjacent sites.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Papilloma is a noninvasive multilayered transitional epithelial proliferation without pleomorphism, tumor necrosis, or destructive invasion.",
      },
      {
        name: "Cutaneous basal cell carcinoma",
        distinction:
          "Basal cell carcinoma has basaloid nests and characteristic stromal relationships rather than conventional squamous maturation and keratinization.",
      },
      {
        name: "Pseudoepitheliomatous hyperplasia",
        distinction:
          "Reactive epithelial hyperplasia lacks destructive infiltrative growth and malignant cytologic features.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "Favor Middle ear neuroendocrine tumor (MeNET) when its defining pattern is present: primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation. In contrast, Squamous cell carcinoma of the external auditory canal is characterized by infiltrating squamous proliferation with architectural and cytologic features of carcinoma.",
      },
      {
        name: "Endolymphatic sac tumor (ELST)",
        distinction:
          "Favor Endolymphatic sac tumor (ELST) when its defining pattern is present: tumor centered on the endolymphatic sac/duct. In contrast, Squamous cell carcinoma of the external auditory canal is characterized by infiltrating squamous proliferation with architectural and cytologic features of carcinoma.",
      },
      {
        name: "Middle ear adenocarcinoma",
        distinction:
          "Favor Middle ear adenocarcinoma when its defining pattern is present: imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth. In contrast, Squamous cell carcinoma of the external auditory canal is characterized by infiltrating squamous proliferation with architectural and cytologic features of carcinoma.",
      },
    ],
  },
  {
    name: "Otosclerosis",
    group: "Non-neoplastic / osseous",
    behavior: "Inherited localized bone remodeling disorder",
    profile: [
      "Usually presents in the third decade, with a female predominance (approximately 2:1).",
      "Involves the otic capsule, commonly anterior to the oval window and at the stapes footplate; round-window and pericochlear sites may also be affected.",
      "Typically causes conductive hearing loss from stapes fixation; sensorineural or mixed hearing loss, tinnitus, and vertigo may occur. Disease is usually bilateral.",
    ],
    criteria: [
      "Well-demarcated plaques of immature bone arising within the otic capsule.",
      "Active otospongiotic areas show bone resorption, plump osteoblasts, osteoclasts, and dilated vascular marrow spaces.",
      "A sharply demarcated interface between normal and affected bone is characteristic.",
    ],
    morphology: [
      "Active lesions contain spongy immature bone with numerous plump osteoblasts and osteoclastic giant cells.",
      "Dilated vascular marrow spaces contain cellular connective tissue.",
      "Inactive areas show more sclerotic bone; otosclerotic foci may extend toward the cochlear endosteum.",
    ],
    ihc: [],
    molecular: [
      "Familial clustering and variable-penetrance autosomal dominant inheritance are described, but no specific molecular test is established for routine diagnosis.",
    ],
    differential: [
      {
        name: "Exostosis (osteoma) of the ear",
        distinction:
          "Exostosis is mature lamellar cortical bone in the EAC, often bilateral and broad-based; otosclerosis is a well-demarcated plaque of immature, vascular bone within the otic capsule.",
      },
      {
        name: "Osteoma of the external auditory canal",
        distinction:
          "An EAC osteoma is a focal mature bony proliferation, usually unilateral and lateral in the canal; otosclerosis is centered in the otic capsule.",
      },
    ],
  },
  {
    name: "Cholesteatoma",
    group: "Non-neoplastic / keratinizing lesions",
    behavior: "Non-neoplastic but locally destructive keratinizing lesion",
    profile: [
      "Occurs in children and adults; reported annual incidence is higher in children, with a slight male predominance.",
      "Congenital lesions are usually unilateral and medial to an intact tympanic membrane in the anterosuperior or posterosuperior middle ear; acquired lesions commonly involve the posterior mesotympanum or epitympanum.",
      "Presents with recurrent foul-smelling otorrhea, tinnitus, and progressive hearing impairment; advanced petrous involvement may cause facial paralysis, vertigo, or diplopia.",
    ],
    criteria: [
      "Keratinizing stratified squamous epithelial matrix with abundant laminated keratin debris.",
      "Prominent granular cell layer with keratohyalin granules.",
      "Perimatrix of granulation tissue and dense fibrous connective tissue with inflammation.",
      "Establish middle-ear origin and correlate with imaging.",
    ],
    morphology: [
      "The matrix is thin-to-atrophic, bland keratinizing stratified squamous epithelium in convoluted formations, typically lacking rete ridges.",
      "A prominent granular layer contains abundant keratohyalin granules.",
      "Cyst contents consist of abundant laminated, anucleate, desquamated keratin.",
      "The perimatrix contains granulation tissue and thickened dense fibrous connective tissue.",
      "Hemorrhage, hemosiderin-laden macrophages, and foreign-body giant cells may occur, particularly after rupture.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "SCC shows malignant cytology and infiltrative growth; cholesteatoma has bland keratinizing epithelium, a prominent granular layer, and laminated keratin.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Middle-ear SCC is an infiltrative malignant squamous proliferation; cholesteatoma lacks malignant cytologic and architectural features.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Papilloma shows multilayered transitional epithelium with mucocytes/microcysts and transepithelial inflammatory cells; cholesteatoma shows keratinizing squamous epithelium and laminated keratin.",
      },
      {
        name: "Cholesterol granuloma",
        distinction:
          "Cholesterol granuloma is a histiocytic/giant-cell reaction to cholesterol clefts and hemorrhage rather than a keratinizing epithelial matrix with laminated keratin.",
      },
      {
        name: "Otic polyp",
        distinction:
          "An otic polyp is predominantly inflammatory granulation tissue; identify the keratinizing epithelial matrix and keratin debris to diagnose cholesteatoma.",
      },
    ],
  },
  {
    name: "Middle ear papilloma",
    group: "Benign neoplasms",
    behavior:
      "Benign surface epithelial neoplasm; recurrence and malignant transformation may occur",
    profile: [
      "Reported age range is 19–81 years (median approximately 56 years), with an overall equal sex distribution.",
      "Usually unilateral and centered in the middle ear; the mastoid, Eustachian tube, EAC, and skull base may also be involved. About half have concurrent sinonasal/nasopharyngeal disease.",
      "Presents with hearing loss, otorrhea, a mass, otalgia, tinnitus, or otitis media; tympanic membrane rupture is frequent.",
    ],
    criteria: [
      "Multilayered transitional epithelial proliferation, usually with inverted/endophytic architecture.",
      "Intraepithelial microcysts containing macrophages, mucin, and cellular debris, with transepithelial inflammatory cells.",
      "Intact basement membrane and absence of pleomorphism, tumor necrosis, atypical mitoses, and destructive bone invasion.",
      "Assess for concurrent sinonasal tract papilloma.",
    ],
    morphology: [
      "Most lesions are inverted, with thick endophytic growth of nonkeratinizing transitional cells bounded by an intact basement membrane.",
      "Intraepithelial microcysts contain macrophages, mucin, and cell debris.",
      "Transepithelial inflammatory cells are present; mitotic figures may be readily identified.",
      "Oncocytic papilloma shows tall stratified columnar cells with abundant oncocytic cytoplasm; the exophytic subtype is extremely rare.",
      "Marked pleomorphism, tumor necrosis, atypical mitoses, and destructive bone invasion indicate malignant transformation to SCC.",
    ],
    ihc: [],
    molecular: [
      "Low-risk HPV has been identified in a small number of cases; rare tumors show transcriptionally active high-risk HPV.",
      "EGFR and KRAS mutations have not been documented in temporal-bone sinonasal-type papillomas.",
    ],
    differential: [
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "SCC shows malignant cytology and destructive invasion; benign papilloma lacks pleomorphism, tumor necrosis, atypical mitoses, and destructive bone invasion.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Middle-ear SCC is an invasive malignant squamous proliferation; papilloma retains an intact basement membrane and lacks malignant cytologic features.",
      },
      {
        name: "Cholesteatoma",
        distinction:
          "Cholesteatoma shows keratinizing squamous epithelium with laminated keratin; papilloma shows multilayered transitional cells, microcysts, and transepithelial inflammatory cells.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "MeNET has neuroendocrine architecture and epithelial/neuroendocrine marker coexpression; papilloma has multilayered transitional epithelial growth with microcysts and inflammatory cell migration.",
      },
      {
        name: "Ceruminous adenoma",
        distinction:
          "Favor Ceruminous adenoma when its defining pattern is present: lateral eac location and a circumscribed, noninvasive glandular neoplasm. In contrast, Middle ear papilloma is characterized by multilayered transitional epithelial proliferation, usually with inverted/endophytic architecture.",
      },
      {
        name: "Vestibular schwannoma",
        distinction:
          "Favor Vestibular schwannoma when its defining pattern is present: tumor arising from the eighth cranial nerve. In contrast, Middle ear papilloma is characterized by multilayered transitional epithelial proliferation, usually with inverted/endophytic architecture.",
      },
    ],
  },
  {
    name: "Vestibular schwannoma",
    group: "Benign neoplasms",
    behavior: "Benign peripheral nerve sheath tumor",
    profile: [
      "Most often presents in the fifth to sixth decades; a slight female predominance is reported. NF2-associated cases tend to present before age 30.",
      "Arises from the vestibular division of cranial nerve VIII and usually involves the cerebellopontine angle/internal auditory canal; bilateral tumors strongly suggest NF2.",
      "Usually causes ipsilateral sensorineural hearing loss; tinnitus, vertigo, and imbalance are common. Facial numbness or pain and hydrocephalus occur with large tumors.",
    ],
    criteria: [
      "Tumor arising from the eighth cranial nerve.",
      "Alternating compact spindle-cell areas and loose hypocellular myxoid areas.",
      "Spindle cells have elongated, tapered or buckled nuclei, sometimes with nuclear palisading.",
      "Strong diffuse S100 and SOX10 expression supports the diagnosis.",
    ],
    morphology: [
      "Encapsulated tumor with compact hypercellular Antoni A areas and loose hypocellular Antoni B areas.",
      "Antoni A areas contain spindle cells with modest eosinophilic cytoplasm and elongated, tapered-to-buckled nuclei; nuclear palisading may occur.",
      "Perivascular hyalinization is characteristic.",
      "Mitoses are usually inconspicuous; ancient-type nuclear atypia may occur in a subtype.",
    ],
    ihc: ["Tumor cells show strong, diffuse S100 and SOX10 immunoreactivity."],
    molecular: [
      "NF2 inactivation and loss of merlin expression are common; germline NF2 alterations are relevant in bilateral tumors and the appropriate clinical setting.",
    ],
    differential: [
      {
        name: "Meningioma",
        distinction:
          "Meningioma shows meningothelial whorls and may have psammoma bodies; schwannoma shows Antoni A/B areas and diffuse S100/SOX10.",
      },
      {
        name: "Neurofibroma",
        distinction:
          "Neurofibroma is a less circumscribed mixed-cell nerve-sheath lesion with wavy nuclei and a different stromal pattern; schwannoma is typically encapsulated with Antoni A/B architecture.",
      },
      {
        name: "Solitary fibrous tumor",
        distinction:
          "SFT shows patternless spindle-cell growth and characteristic branching vessels; schwannoma shows Antoni A/B areas and diffuse S100/SOX10.",
      },
      {
        name: "Paraganglioma",
        distinction:
          "Paraganglioma has nested Zellballen architecture and neuroendocrine differentiation rather than Antoni A/B spindle-cell architecture.",
      },
      {
        name: "Ceruminous adenoma",
        distinction:
          "Favor Ceruminous adenoma when its defining pattern is present: lateral eac location and a circumscribed, noninvasive glandular neoplasm. In contrast, Vestibular schwannoma is characterized by tumor arising from the eighth cranial nerve.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Favor Middle ear papilloma when its defining pattern is present: multilayered transitional epithelial proliferation, usually with inverted/endophytic architecture. In contrast, Vestibular schwannoma is characterized by tumor arising from the eighth cranial nerve.",
      },
    ],
  },
  {
    name: "Middle ear neuroendocrine tumor (MeNET)",
    group: "Malignant epithelial neoplasms",
    behavior:
      "Neuroendocrine neoplasm with usually low proliferation but recurrence potential",
    profile: [
      "Most often affects patients in the fifth decade; both sexes are equally affected, with a broad age range.",
      "Arises in any part of the middle ear and may extend into the mastoid, Eustachian tube, or EAC.",
      "Presents with hearing change, fullness/pressure, or tinnitus; otoscopy typically shows a gray-white or fibrotic mass behind an intact tympanic membrane.",
    ],
    criteria: [
      "Primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation.",
      "Coexpression of epithelial markers and neuroendocrine markers supports the diagnosis.",
      "Exclude a middle-ear adenocarcinoma, endolymphatic sac tumor, and paraganglioma using morphology, IHC, and anatomic localization.",
    ],
    morphology: [
      "Cuboidal-to-columnar cells have distinct borders, eosinophilic cytoplasm, and small central hyperchromatic nuclei.",
      "Patterns include glands in fibrous stroma, back-to-back glands, pseudorosettes, trabeculae, sheets, and single-cell infiltration.",
      "Swirling ribbons of tumor cells may be prominent; mucin may be present in glandular lumina.",
      "Some tumors show nuclear pleomorphism and increased mitotic activity.",
    ],
    ihc: [
      "Tumor cells coexpress pancytokeratin and neuroendocrine markers including synaptophysin, chromogranin, and INSM1.",
      "ISL1 and SATB2 are commonly expressed; CDX2 and GATA3 may be focally positive; TTF1 is negative.",
      "Ki-67 is usually below 2%, although higher indices, including above 20%, have been reported in aggressive tumors.",
    ],
    molecular: [],
    differential: [
      {
        name: "Middle ear adenocarcinoma",
        distinction:
          "Adenocarcinoma shows glandular/papillary epithelial differentiation without the characteristic diffuse neuroendocrine phenotype; MeNET coexpresses epithelial and neuroendocrine markers.",
      },
      {
        name: "Endolymphatic sac tumor",
        distinction:
          "ELST is centered on the endolymphatic sac/duct and typically expresses PAX8 and CAIX; MeNET is a middle-ear neuroendocrine neoplasm.",
      },
      {
        name: "Ceruminous adenoma",
        distinction:
          "Ceruminous adenoma arises in the lateral EAC and shows a bland biphasic apocrine glandular proliferation; MeNET is centered in the middle ear and expresses neuroendocrine markers.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Papilloma shows multilayered transitional epithelium, intraepithelial microcysts, and transepithelial inflammatory cells rather than neuroendocrine differentiation.",
      },
      {
        name: "Paraganglioma",
        distinction:
          "Paraganglioma has Zellballen architecture and lacks the epithelial keratin coexpression characteristic of MeNET.",
      },
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Favor Ceruminous adenocarcinoma when its defining pattern is present: external auditory canal origin, with direct extension from adjacent salivary gland sites excluded. In contrast, Middle ear neuroendocrine tumor (MeNET) is characterized by primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation.",
      },
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "Favor Squamous cell carcinoma of the external auditory canal when its defining pattern is present: infiltrating squamous proliferation with architectural and cytologic features of carcinoma. In contrast, Middle ear neuroendocrine tumor (MeNET) is characterized by primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation.",
      },
      {
        name: "Endolymphatic sac tumor (ELST)",
        distinction:
          "Favor Endolymphatic sac tumor (ELST) when its defining pattern is present: tumor centered on the endolymphatic sac/duct. In contrast, Middle ear neuroendocrine tumor (MeNET) is characterized by primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Favor Middle ear squamous cell carcinoma when its defining pattern is present: infiltrating squamous epithelial proliferation with malignant cytologic and architectural features. In contrast, Middle ear neuroendocrine tumor (MeNET) is characterized by primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation.",
      },
    ],
  },
  {
    name: "Endolymphatic sac tumor (ELST)",
    group: "Malignant epithelial neoplasms",
    behavior:
      "Locally destructive epithelial neoplasm; strongly associated with VHL",
    profile: [
      "Most often presents between ages 30 and 40 (reported range 10–88 years); female predominance (approximately 1.6:1). VHL-associated patients may be younger.",
      "Arises in association with the endolymphatic sac/duct; bilateral tumors are nearly always associated with VHL.",
      "Common presentations include progressive unilateral hearing loss, tinnitus, facial nerve palsy, and vertigo.",
    ],
    criteria: [
      "Tumor centered on the endolymphatic sac/duct.",
      "Simple, coarse, broad, interdigitating papillary projections lined by a single layer of low cuboidal-to-columnar cells.",
      "Cells have clear or slightly eosinophilic cytoplasm and uniform round nuclei with coarse chromatin.",
      "PAX8 and CAIX positivity with TTF1, GATA3, and RCC marker negativity are desirable in selected cases.",
      "Recommend VHL genetic assessment in all patients with ELST.",
    ],
    morphology: [
      "Papillary and/or cystic tumor with frequent bone invasion or remodeling.",
      "Broad, coarse, interdigitating papillae have fibrovascular cores and limited branching.",
      "Papillae are lined by a single layer of low cuboidal-to-columnar cells with ample clear/vacuolated cytoplasm and indistinct cell borders.",
      "Cystic spaces may contain serum, secretions, erythrocytes, or inspissated colloid-like material.",
      "Pleomorphism, increased mitoses, and necrosis are usually inconspicuous.",
    ],
    ihc: [
      "Positive for pancytokeratin, CK7, EMA, HIF1α, GLUT1, membranous CAIX, and nuclear PAX8.",
      "Usually negative for TTF1, thyroglobulin, CD10, AMACR, GATA3, synaptophysin, and RCC marker.",
    ],
    molecular: [
      "Germline or somatic VHL pathogenic variants and allelic loss are common; ELST may be the initial presentation of VHL.",
      "Genetic testing is clinically important even in apparently sporadic cases.",
    ],
    differential: [
      {
        name: "Middle ear adenocarcinoma",
        distinction:
          "Middle-ear adenocarcinoma is centered in the middle ear without endolymphatic sac involvement and is typically PAX8/CAIX negative; ELST is sac/duct-centered and usually PAX8/CAIX positive.",
      },
      {
        name: "Metastatic clear cell renal cell carcinoma",
        distinction:
          "Both may show clear cells and vascularity; renal cell carcinoma typically expresses renal markers such as RCC marker/CD10 and lacks the characteristic ELST profile. VHL context does not by itself distinguish them.",
      },
      {
        name: "Papillary or follicular thyroid carcinoma",
        distinction:
          "Thyroid carcinoma is typically thyroglobulin and TTF1 positive; ELST is usually negative for both.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "MeNET expresses synaptophysin, chromogranin, and INSM1; ELST is typically negative for synaptophysin and shows PAX8/CAIX expression.",
      },
      {
        name: "Choroid plexus papilloma, papillary ependymoma, papillary meningioma, and paraganglioma",
        distinction:
          "Use the anatomic epicenter and lineage-specific morphology/IHC; ELST shows sac-centered papillary/cystic growth with PAX8 and CAIX expression.",
      },
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Favor Ceruminous adenocarcinoma when its defining pattern is present: external auditory canal origin, with direct extension from adjacent salivary gland sites excluded. In contrast, Endolymphatic sac tumor (ELST) is characterized by tumor centered on the endolymphatic sac/duct.",
      },
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "Favor Squamous cell carcinoma of the external auditory canal when its defining pattern is present: infiltrating squamous proliferation with architectural and cytologic features of carcinoma. In contrast, Endolymphatic sac tumor (ELST) is characterized by tumor centered on the endolymphatic sac/duct.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Favor Middle ear squamous cell carcinoma when its defining pattern is present: infiltrating squamous epithelial proliferation with malignant cytologic and architectural features. In contrast, Endolymphatic sac tumor (ELST) is characterized by tumor centered on the endolymphatic sac/duct.",
      },
    ],
  },
  {
    name: "Middle ear squamous cell carcinoma",
    group: "Malignant epithelial neoplasms",
    behavior: "Primary malignant squamous neoplasm",
    profile: [
      "Mean age at presentation is approximately 60 years (range 21–89 years); sexes are affected equally.",
      "Arises primarily in the middle ear; direct extension from pinna, nasopharynx, or sinonasal tract is more common and must be excluded.",
      "Presents with hearing loss, otorrhea, otalgia, bleeding, tinnitus, vertigo, or facial nerve palsy.",
    ],
    criteria: [
      "Infiltrating squamous epithelial proliferation with malignant cytologic and architectural features.",
      "Confirm a primary middle-ear epicenter and exclude direct extension from adjacent sites.",
      "Use EBER, NUT immunohistochemistry, or molecular testing in selected nonkeratinizing tumors.",
    ],
    morphology: [
      "Pleomorphic epithelial cells form sheets with a pavement-like appearance, increased N:C ratio, and coarse nuclear chromatin.",
      "Most tumors are keratinizing and well to moderately differentiated.",
      "Nonkeratinizing tumors may be EBV-associated or harbor rearrangements such as DEK::AFF2.",
    ],
    ihc: [
      "Pancytokeratin, p40, p63, and CK5/6 are positive.",
      "EBER may identify EBV-associated tumors; NUT IHC may help classify selected poorly differentiated nonkeratinizing tumors.",
    ],
    molecular: [
      "DEK::AFF2 rearrangement has been described in a subset of nonkeratinizing tumors; molecular testing may aid classification in selected cases.",
    ],
    differential: [
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "Both are squamous carcinomas; distinguish by the anatomic epicenter and exclude extension from the EAC or pinna.",
      },
      {
        name: "Middle ear papilloma",
        distinction:
          "Papilloma is a multilayered transitional epithelial proliferation without pleomorphism, tumor necrosis, or destructive invasion.",
      },
      {
        name: "Cholesteatoma",
        distinction:
          "Cholesteatoma contains bland keratinizing squamous epithelium and laminated keratin without malignant cytology or infiltrative carcinoma.",
      },
      {
        name: "Metastatic/directly extending sinonasal or nasopharyngeal carcinoma",
        distinction:
          "Clinical and radiologic correlation establishes whether the middle-ear lesion is primary or represents extension from an adjacent site; EBER and molecular/IHC studies may aid classification.",
      },
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Favor Ceruminous adenocarcinoma when its defining pattern is present: external auditory canal origin, with direct extension from adjacent salivary gland sites excluded. In contrast, Middle ear squamous cell carcinoma is characterized by infiltrating squamous epithelial proliferation with malignant cytologic and architectural features.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "Favor Middle ear neuroendocrine tumor (MeNET) when its defining pattern is present: primary middle-ear epithelial neoplasm with variable architectural patterns and neuroendocrine differentiation. In contrast, Middle ear squamous cell carcinoma is characterized by infiltrating squamous epithelial proliferation with malignant cytologic and architectural features.",
      },
      {
        name: "Endolymphatic sac tumor (ELST)",
        distinction:
          "Favor Endolymphatic sac tumor (ELST) when its defining pattern is present: tumor centered on the endolymphatic sac/duct. In contrast, Middle ear squamous cell carcinoma is characterized by infiltrating squamous epithelial proliferation with malignant cytologic and architectural features.",
      },
      {
        name: "Middle ear adenocarcinoma",
        distinction:
          "Favor Middle ear adenocarcinoma when its defining pattern is present: imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth. In contrast, Middle ear squamous cell carcinoma is characterized by infiltrating squamous epithelial proliferation with malignant cytologic and architectural features.",
      },
    ],
  },
  {
    name: "Middle ear adenocarcinoma",
    group: "Malignant epithelial neoplasms",
    behavior: "Locally aggressive primary glandular malignancy",
    profile: [
      "Usually presents in younger adults (reported range 16–55 years; median approximately 33 years), with a slight female predominance.",
      "Arises in the middle ear/tympanic cavity, often filling the middle ear and extending into the petrous apex; endolymphatic sac involvement should be absent.",
      "Symptoms are often longstanding and nonspecific, including hearing loss, otalgia, vestibular dysfunction, and otorrhea.",
    ],
    criteria: [
      "Imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth.",
      "Exclude endolymphatic sac tumor and metastatic carcinoma, including lung, thyroid, and colon primaries.",
      "PAX8 and CAIX negativity supports middle-ear adenocarcinoma over ELST.",
    ],
    morphology: [
      "Cystic-papillary glandular architecture with papillae lying loosely or infiltrating fibrous connective tissue.",
      "Papillae are usually lined by a single layer of low cuboidal-to-columnar cells with uniform nuclei, eosinophilic cytoplasm, and indistinct cell borders.",
      "Thyroid follicle-like areas may occur; other patterns may resemble oncocytic, mucinous, polymorphous, or salivary duct carcinoma.",
    ],
    ihc: [
      "Tumor cells express CK7 and EMA; S100 may be positive.",
      "PAX8 and CAIX are negative, helping distinguish the tumor from ELST.",
    ],
    molecular: [
      "MKRN1::BRAF fusion has been reported in oncocytic and papillary middle-ear adenocarcinomas.",
      "EGFR mutations have been reported in experimental models of histologically similar tumors; PRKD1/2/3 mutations have not been established in polymorphous-like cases.",
    ],
    differential: [
      {
        name: "Endolymphatic sac tumor",
        distinction:
          "ELST is centered on the endolymphatic sac/duct and typically expresses PAX8 and CAIX; middle-ear adenocarcinoma is centered in the middle ear and is PAX8/CAIX negative.",
      },
      {
        name: "Middle ear neuroendocrine tumor (MeNET)",
        distinction:
          "MeNET coexpresses epithelial and neuroendocrine markers; middle-ear adenocarcinoma shows glandular/papillary morphology without the defining neuroendocrine phenotype.",
      },
      {
        name: "Metastatic carcinoma (lung, thyroid, or colon)",
        distinction:
          "Exclude a distant primary by clinical/radiologic correlation and targeted immunohistochemistry; the diagnosis requires a primary middle-ear tumor.",
      },
      {
        name: "Ceruminous adenocarcinoma",
        distinction:
          "Ceruminous carcinoma arises from apocrine glands in the lateral EAC; middle-ear adenocarcinoma is centered in the tympanic cavity and may extend into the petrous apex.",
      },
      {
        name: "Squamous cell carcinoma of the external auditory canal",
        distinction:
          "Favor Squamous cell carcinoma of the external auditory canal when its defining pattern is present: infiltrating squamous proliferation with architectural and cytologic features of carcinoma. In contrast, Middle ear adenocarcinoma is characterized by imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth.",
      },
      {
        name: "Endolymphatic sac tumor (ELST)",
        distinction:
          "Favor Endolymphatic sac tumor (ELST) when its defining pattern is present: tumor centered on the endolymphatic sac/duct. In contrast, Middle ear adenocarcinoma is characterized by imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth.",
      },
      {
        name: "Middle ear squamous cell carcinoma",
        distinction:
          "Favor Middle ear squamous cell carcinoma when its defining pattern is present: infiltrating squamous epithelial proliferation with malignant cytologic and architectural features. In contrast, Middle ear adenocarcinoma is characterized by imaging confirms a middle-ear epicenter and bone-destructive adenocarcinoma, often with papillary growth.",
      },
    ],
  },
];

const categories = [
  "All",
  "Non-neoplastic / degenerative",
  "Non-neoplastic / osseous",
  "Non-neoplastic / keratinizing lesions",
  "Benign neoplasms",
  "Malignant epithelial neoplasms",
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
      {items.map((value, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EarTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (category === "All" || item.group === category) &&
          [
            item.name,
            item.group,
            item.behavior,
            ...item.profile,
            ...item.criteria,
            ...item.morphology,
            ...item.ihc,
            ...item.molecular,
            ...item.differential.flatMap((entry) => [
              entry.name,
              entry.distinction,
            ]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((value) => value !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck / Ear and Temporal Bone
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Ear Tumors and Tumor-Like Lesions
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A site-oriented diagnostic reference covering the external ear,
                external auditory canal, middle ear, temporal bone, and inner
                ear. Each entity is organized around clinical profile, essential
                diagnostic criteria, histopathology, immunophenotype, molecular
                findings, and focused differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the anatomic epicenter before classifying an ear
                lesion.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Distinguish external auditory canal, middle-ear, endolymphatic
                sac, and eighth-nerve origin. Imaging and clinical correlation
                are often essential.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: anatomic site, growth pattern, and targeted studies">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Confirm the epicenter",
                "External ear/EAC, middle ear, endolymphatic sac/duct, otic capsule, or vestibular division of cranial nerve VIII.",
              ],
              [
                "Separate neoplastic from non-neoplastic",
                "Consider degenerative auricular lesions, osseous remodeling, cholesteatoma, benign neoplasms, and malignancies.",
              ],
              [
                "Assess architecture",
                "Look for a keratinizing matrix, biphasic ceruminous glands, papillary/transitional growth, neuroendocrine patterns, or destructive invasion.",
              ],
              [
                "Use focused immunohistochemistry",
                "Apply lineage markers to resolve squamous, apocrine, neuroendocrine, renal/thyroid-like, or nerve-sheath differentiation.",
              ],
              [
                "Correlate with imaging",
                "CT and MRI help establish the epicenter, bone destruction, soft-tissue extent, and possible direct extension from adjacent sites.",
              ],
            ].map((entry, index) => (
              <div
                key={entry[0]}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900">{entry[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {entry[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield site and pattern distinctions">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Auricular pseudocyst",
                      "Epithelium-free cleft within auricular cartilage",
                    ],
                    [
                      "Chondrodermatitis nodularis",
                      "Painful crater, necrobiotic collagen, superficial cartilage erosion",
                    ],
                    [
                      "EAC exostosis",
                      "Usually bilateral, broad-based mature cortical bone",
                    ],
                    [
                      "Ceruminous adenoma",
                      "Bland biphasic apocrine glands with decapitation secretion",
                    ],
                    [
                      "Ceruminous adenocarcinoma",
                      "Destructive invasion by malignant ceruminous glandular cells",
                    ],
                    [
                      "Middle ear papilloma",
                      "Inverted transitional epithelium, microcysts, transepithelial inflammatory cells",
                    ],
                    [
                      "MeNET",
                      "Epithelial and neuroendocrine marker coexpression",
                    ],
                    [
                      "Endolymphatic sac tumor",
                      "Sac/duct-centered papillary tumor; PAX8 and CAIX positive",
                    ],
                    [
                      "Middle ear adenocarcinoma",
                      "Middle-ear-centered bone-destructive papillary/glandular carcinoma; PAX8/CAIX negative",
                    ],
                    [
                      "Vestibular schwannoma",
                      "Antoni A/B pattern with diffuse S100/SOX10",
                    ],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="Important diagnostic pitfalls">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Site matters:</b> a ceruminous neoplasm arises in the lateral
                external auditory canal; middle-ear adenocarcinoma and MeNET are
                centered in the middle ear; ELST is associated with the
                endolymphatic sac/duct.
              </p>
              <p>
                <b>Benign versus malignant ceruminous neoplasm:</b> destructive
                invasion, marked atypia, atypical mitoses, perineural invasion,
                lymphovascular invasion, or comedonecrosis support carcinoma.
              </p>
              <p>
                <b>Middle ear papilloma:</b> mitotic figures may be readily
                identified in benign lesions. Pleomorphism, tumor necrosis,
                atypical mitoses, and destructive bone invasion raise concern
                for malignant transformation.
              </p>
              <p>
                <b>ELST versus middle ear adenocarcinoma:</b> use the anatomic
                epicenter and the PAX8/CAIX profile; ELST is typically positive,
                whereas middle-ear adenocarcinoma is negative.
              </p>
              <p>
                <b>Primary versus secondary carcinoma:</b> exclude direct
                extension from the pinna, parotid, nasopharynx, or sinonasal
                tract as appropriate.
              </p>
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
                Diagnostic profiles and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                All 14 entities are available as individual expandable profiles.
                Search by entity, site, morphology, immunomarker, or molecular
                alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. PAX8, decapitation, Antoni A, keratin debris..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((entry) => (
              <button
                key={entry}
                onClick={() => setCategory(entry)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === entry
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
              >
                {entry}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item) => {
              const isOpen = opened.includes(item.name);
              return (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(item.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {item.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {item.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.profile[1]}
                      </p>
                      <p className="mt-2 text-xs font-medium text-slate-600">
                        Diagnostic criteria · Histopathology · Differential
                        diagnosis ({item.differential.length})
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen
                        ? "Collapse profile　−"
                        : "Expand diagnostic profile　+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={item.profile} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={item.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={item.morphology} />
                        {item.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunohistochemistry
                            </h4>
                            <Bullets items={item.ihc} />
                          </>
                        )}
                        {item.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular pathology
                            </h4>
                            <Bullets items={item.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {item.differential.map((entry) => (
                                <tr key={entry.name}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {entry.name}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {entry.distinction}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
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

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Diagnostic note:</b> The anatomic
          epicenter, imaging findings, and clinical history are integral to
          classification of ear and temporal-bone lesions. Molecular findings
          are included only when they have diagnostic or clinically relevant
          classification value.
        </footer>
      </div>
    </main>
  );
}
