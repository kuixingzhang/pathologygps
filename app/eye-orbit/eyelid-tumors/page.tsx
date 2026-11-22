"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  category: string;
  clinical: string;
  criteria: string;
  histology: string;
  differential: string;
  molecular: string;
};

const entities: Entity[] = [
  {
    name: "Epidermal inclusion cyst",
    category: "Cyst / tumor-like",
    clinical:
      "Adolescents to older adults; eyelid skin, brow, or lash line; slow-growing, mobile dermal/subcutaneous nodule, sometimes with a central pore.",
    criteria:
      "Dermal/subcutaneous cyst lined by epidermal-type squamous epithelium with a granular layer and laminated keratin; no atypical squamous proliferation.",
    histology:
      "Stratified squamous lining with a well-formed granular layer; laminated orthokeratin fills the lumen; rupture may cause granulomatous inflammation.",
    differential:
      "Pilar cyst lacks a granular layer and has trichilemmal keratinization; dermoid contains skin appendages; intratarsal cyst has a thin corrugated cuticle and no granular layer.",
    molecular:
      "No routine molecular testing; multiple lesions may prompt evaluation for Gardner or Muir–Torre syndrome.",
  },
  {
    name: "Intratarsal keratinous cyst",
    category: "Cyst / tumor-like",
    clinical:
      "Usually adults in their 50s–70s; upper tarsus; painless, firm nodule fixed to tarsal plate, visible on lid eversion.",
    criteria:
      "Intratarsal cyst with 4–6-cell-thick squamous lining, corrugated eosinophilic cuticle, and no keratohyalin granules.",
    histology:
      "Basal hyperchromatic cells; brightly eosinophilic luminal cuticle; keratinous contents; CK17 is typically strong.",
    differential:
      "Epidermal inclusion cyst has granular layer and laminated keratin; chalazion is inflammatory and lipid-rich; cystic neoplasms show epithelial complexity.",
    molecular:
      "No established routine molecular test; multiple or atypical-age lesions may be associated with PTCH1-related Gorlin syndrome.",
  },
  {
    name: "Phakomatous choristoma",
    category: "Choristoma",
    clinical:
      "Congenital; infancy; slight male predominance; deep medial lower eyelid, presenting as a firm subcutaneous mass.",
    criteria:
      "Ectopic lenticular tissue with lens-like epithelial cells and bladder cells surrounded by a thick PAS-positive lens-capsule-like membrane.",
    histology:
      "Islands of cuboidal/polygonal lens epithelium; bladder (Wedl) cells; thick PAS-positive basement membrane; cells express vimentin, S100, PAX8, and crystallins.",
    differential:
      "Dermoid/epidermoid cysts are keratin-lined; ectopic lacrimal tissue forms acini/ducts; other congenital masses lack lens-type cells and capsule.",
    molecular: "No routine molecular testing.",
  },
  {
    name: "Molluscum contagiosum",
    category: "Viral / tumor-like",
    clinical:
      "Most often children; either eyelid; one or multiple small, waxy, umbilicated papules; may cause follicular conjunctivitis.",
    criteria:
      "Crateriform epidermal hyperplasia containing characteristic intracytoplasmic molluscum bodies.",
    histology:
      "Endophytic acanthotic lobules; large eosinophilic Henderson–Paterson inclusions displacing nuclei peripherally; inflammation may follow rupture.",
    differential:
      "Verruca shows papillomatosis, koilocytosis, and hypergranulosis; keratoacanthoma has crateriform squamous proliferation without molluscum bodies.",
    molecular:
      "Molluscum contagiosum poxvirus; molecular testing is rarely needed.",
  },
  {
    name: "Verruca vulgaris",
    category: "Viral / benign epithelial",
    clinical:
      "Children and adolescents, but any age; eyelid or eyebrow; keratotic papule, plaque, or filiform lesion; more frequent with immunosuppression.",
    criteria:
      "Papillomatous epidermal proliferation with hyperkeratosis, hypergranulosis, parakeratosis, and koilocytosis.",
    histology:
      "Papillary projections with parakeratotic columns; coarse keratohyalin granules; koilocytes in superficial layers; elongated rete ridges.",
    differential:
      "Squamous papilloma is more exophytic with fibrovascular cores and less acanthosis; seborrheic keratosis has horn cysts and lacks convincing viral cytopathy.",
    molecular:
      "Low-risk HPV types, particularly 1, 2, 4, and 7; testing is not routinely required.",
  },
  {
    name: "Squamous papilloma",
    category: "Benign epithelial",
    clinical:
      "Any age; eyelid skin or margin; soft, skin-colored, sessile or pedunculated papule, often multiple.",
    criteria:
      "Exophytic squamous proliferation with fibrovascular cores and no significant dysplasia or invasion.",
    histology:
      "Finger-like or broad-based papillary fronds; orderly squamous maturation; fibrovascular cores; occasional koilocytosis.",
    differential:
      "Verruca has hypergranulosis and parakeratotic columns; seborrheic keratosis has horn cysts; SCC shows dysplasia and/or invasion.",
    molecular:
      "Some lesions are HPV-associated, but molecular testing is not routine.",
  },
  {
    name: "Seborrheic keratosis",
    category: "Benign epithelial",
    clinical:
      "Usually over age 50; periocular skin and lid margin; tan-to-brown, stuck-on papule or plaque.",
    criteria:
      "Well-demarcated intraepidermal squamous proliferation with a flat base and no dysplasia.",
    histology:
      "Acanthosis of basaloid keratinocytes; horn cysts/pseudohorn cysts; surface hyperkeratosis; rare mitoses.",
    differential:
      "Verruca has viral cytopathic change; inverted follicular keratosis is endophytic with squamous eddies; SCC shows cytologic atypia and destructive invasion.",
    molecular:
      "Common alterations include FGFR3, PIK3CA, HRAS, KRAS, EGFR, and AKT1; not needed for routine diagnosis.",
  },
  {
    name: "Inverted follicular keratosis",
    category: "Benign follicular",
    clinical:
      "Middle-aged to older adults; eyelid; usually a small pink or skin-colored dome-shaped papule; men affected about twice as often.",
    criteria:
      "Symmetric endophytic follicular infundibular proliferation of basaloid and squamoid cells with squamous eddies and no destructive invasion.",
    histology:
      "Central keratin-filled crypts; peripheral basaloid cells and central squamoid cells; concentric squamous eddies; bland nuclei and non-atypical mitoses.",
    differential:
      "SCC shows atypia, dysplasia, and destructive invasion; irritated seborrheic keratosis has horn cysts and lacks characteristic follicular architecture.",
    molecular:
      "Multiple lesions may be associated with PTEN-related Cowden syndrome.",
  },
  {
    name: "Actinic keratosis",
    category: "Premalignant epithelial",
    clinical:
      "Usually adults over 60; sun-exposed eyelid skin and margin; erythematous, scaly patch or plaque.",
    criteria:
      "Intraepidermal squamous dysplasia that does not involve the full epidermal thickness, with solar elastosis.",
    histology:
      "Atypical keratinocytes with disordered maturation; hyperkeratosis/parakeratosis; dyskeratosis; dermal solar elastosis; p53 and Ki-67 may support difficult cases.",
    differential:
      "SCC in situ shows full-thickness atypia; invasive SCC breaches basement membrane; pigmented AK may mimic lentigo maligna.",
    molecular:
      "UV signature with TP53, NOTCH1/2, and FAT1 alterations; molecular testing is not routine.",
  },
  {
    name: "Basal cell carcinoma",
    category: "Malignant epithelial",
    clinical:
      "Older adults with chronic UV exposure; lower eyelid most common, then medial canthus; pearly or ulcerated nodule, rolled edge, lash loss; pain/numbness may indicate advanced spread.",
    criteria:
      "Basaloid nests, nodules, or infiltrative cords with peripheral palisading and stromal retraction; subtype and margin status require excision assessment.",
    histology:
      "Hyperchromatic basaloid cells with scant cytoplasm; peripheral palisading; stromal retraction; infiltrative/morpheaform patterns show narrow cords in desmoplastic stroma. BerEP4, BCL2, and CD10 are commonly positive.",
    differential:
      "Trichoepithelioma has CK20-positive Merkel cells and stromal CD10; basaloid SCC is BerEP4-negative and more atypical; sebaceous carcinoma expresses adipophilin/AR; Merkel carcinoma is neuroendocrine.",
    molecular:
      "PTCH1/SHH pathway alterations are common; PTCH1 germline testing when Gorlin syndrome is suspected.",
  },
  {
    name: "Squamous cell carcinoma",
    category: "Malignant epithelial",
    clinical:
      "Usually older fair-skinned men with chronic sun exposure; lower eyelid and medial canthus; indurated keratotic or ulcerated plaque/nodule; pain or paresthesia suggests perineural invasion.",
    criteria:
      "Atypical squamous cells infiltrating dermis as nests/islands with variable keratinization; in situ lesions show full-thickness epidermal atypia.",
    histology:
      "Polygonal atypical cells, intercellular bridges, dyskeratosis, keratin pearls; p40, p63, and CK5/6 support squamous differentiation.",
    differential:
      "Keratoacanthoma-like SCC may overlap with keratoacanthoma; BCC is basaloid with palisading/retraction; sebaceous carcinoma has vacuolated sebocytes and adipophilin positivity.",
    molecular:
      "UV-associated TP53 and NOTCH pathway alterations; EGFR/PD-L1 expression may have therapeutic relevance.",
  },
  {
    name: "Merkel cell carcinoma",
    category: "Malignant neuroendocrine",
    clinical:
      "Older adults (median about 74 years), more often men; sun-exposed eyelid/head and neck; rapidly enlarging red-blue dermal nodule, often mistaken for chalazion.",
    criteria:
      "Dermal small blue cell neuroendocrine carcinoma with characteristic dot-like CK20 and neuroendocrine marker expression; assess MCPyV status.",
    histology:
      "Sheets of monotonous small cells with finely granular chromatin, scant cytoplasm, brisk mitoses and apoptosis; CK20 paranuclear dot-like; synaptophysin, chromogranin, INSM1 positive; TTF1 and CD45 negative.",
    differential:
      "Metastatic small-cell lung carcinoma is usually TTF1-positive/CK20-negative; lymphoma is CD45-positive; melanoma expresses SOX10; other carcinomas lack the typical CK20 dot pattern.",
    molecular:
      "MCPyV integration in most cases; virus-negative tumors show UV signature and frequent TP53/RB1 alterations.",
  },
  {
    name: "Ductal hidrocystoma",
    category: "Benign adnexal",
    clinical:
      "Usually adults in their 50s–60s; lower eyelid and canthi; small, smooth, translucent or blue-tinged compressible cyst.",
    criteria:
      "Sweat duct cyst with bilayered cuboidal/columnar lining and serous contents; apocrine type shows decapitation secretion.",
    histology:
      "Apocrine type: tall eosinophilic luminal cells with apical snouts and outer myoepithelial layer; eccrine type: low cuboidal bilayer without snouts; apocrine epithelium may express GCDFP-15/CK7 and myoepithelium SMA.",
    differential:
      "Epidermal inclusion cyst contains laminated keratin and granular layer; EMPSGC or mucinous carcinoma shows cellular proliferation, mucin, and complex papillary/cribriform architecture.",
    molecular: "No routine molecular testing.",
  },
  {
    name: "Sebaceous hyperplasia, adenoma, and sebaceoma",
    category: "Benign sebaceous",
    clinical:
      "Usually older adults; eyelid/periocular skin; well-circumscribed yellow-tan papules or nodules; multifocal lesions raise Muir–Torre concern.",
    criteria:
      "Hyperplasia retains central follicular connection and thin peripheral germinative layer; adenoma has more sebocytes than basaloid cells; sebaceoma has more basaloid cells than sebocytes.",
    histology:
      "Mature foamy sebocytes admixed with bland basaloid germinative cells; adenoma shows central sebocytes/peripheral basaloid cells; sebaceoma has scattered sebocytes among basaloid cells.",
    differential:
      "Sebaceous carcinoma shows infiltrative growth, atypia, mitoses, and pagetoid spread; BCC shows palisading/retraction and lacks sebaceous differentiation.",
    molecular:
      "Muir–Torre-associated lesions may show loss of MLH1, MSH2, MSH6, or PMS2; consider mismatch-repair evaluation.",
  },
  {
    name: "Syringoma",
    category: "Benign adnexal",
    clinical:
      "Most often middle-aged women; lower eyelids/periorbital skin; multiple small skin-colored or yellow papules.",
    criteria:
      "Circumscribed superficial dermal proliferation of benign eccrine ducts and tubules in sclerotic stroma.",
    histology:
      "Small ducts/tubules with double-layered cuboidal lining and tadpole-shaped tails; keratin-filled cysts; dense collagenous stroma.",
    differential:
      "Microcystic adnexal carcinoma is deeply infiltrative with perineural invasion; morpheaform BCC shows basaloid cords and retraction; desmoplastic trichoepithelioma has follicular differentiation.",
    molecular: "No established diagnostic molecular alteration.",
  },
  {
    name: "Mixed tumor",
    category: "Benign adnexal",
    clinical:
      "Usually adults around 50 years; upper eyelid more common; solitary, slow-growing, smooth, well-circumscribed nonulcerated nodule; male predominance.",
    criteria:
      "Well-circumscribed biphasic epithelial/myoepithelial neoplasm with ductal structures and myxoid, chondroid, or hyalinized stroma.",
    histology:
      "Branching ducts with inner luminal and outer myoepithelial cells; variable chondromyxoid, osseous, or adipocytic stroma; SOX10, S100, p63, SMA/calponin support components.",
    differential:
      "Myoepithelioma lacks ducts; chondroma lacks epithelial elements; malignant mixed tumor shows destructive invasion and significant atypia.",
    molecular:
      "PLAG1 or EWSR1 rearrangements occur in a subset; PLAG1 is typically absent in eccrine subtype.",
  },
  {
    name: "Tubular adenoma",
    category: "Benign adnexal",
    clinical:
      "Adults, mean age about 47 years; upper or lower eyelid; solitary, smooth, asymptomatic small nodule.",
    criteria:
      "Lobulated dermal apocrine neoplasm composed of multiple irregular tubules with epithelial and myoepithelial layers in fibrous stroma.",
    histology:
      "Double-layered tubules with luminal columnar cells and peripheral myoepithelial cells; focal decapitation secretion; bland cytology; luminal CEA/EMA and peripheral SMA/calponin/SOX10/p63.",
    differential:
      "Syringocystadenoma papilliferum has epidermal connection and plasma-cell-rich stroma; apocrine carcinoma shows atypia and invasion; hidrocystoma is predominantly cystic.",
    molecular:
      "BRAF p.V600E in a subset; HRAS/KRAS mutations, especially in nevus sebaceus-associated lesions.",
  },
  {
    name: "Syringocystadenoma papilliferum",
    category: "Benign adnexal",
    clinical:
      "Often children or adults; lower eyelid margin; papillary, verrucous, cystic, crusted, or oozing lesion; slight female predominance.",
    criteria:
      "Endophytic epidermally connected apocrine neoplasm with papillary/cystic structures, bilayered epithelium, and plasma-cell-rich stroma.",
    histology:
      "Papillary projections lined by columnar apocrine cells with decapitation secretion; outer myoepithelial layer; abundant stromal plasma cells; CEA/EMA luminal and SMA/calponin/SOX10/p63 peripheral.",
    differential:
      "Tubular adenoma lacks prominent plasma-cell-rich stroma and epidermal connection; hidradenoma papilliferum is not connected to epidermis and lacks plasma cells.",
    molecular:
      "BRAF p.V600E in approximately half of cases; MAPK-pathway alterations include BRAF, KRAS, and HRAS.",
  },
  {
    name: "Pilomatricoma",
    category: "Benign follicular",
    clinical:
      "Bimodal: children/young adults and adults 50–65; upper eyelid/medial eyebrow; firm, mobile, often blue-red subcutaneous nodule with gritty calcification.",
    criteria:
      "Matrical follicular tumor with peripheral basaloid cells, transition cells, and central ghost/shadow cells, often calcified.",
    histology:
      "Basaloid matrical cells at periphery; abrupt transition to anucleate shadow cells; calcification and foreign-body giant-cell reaction; nuclear beta-catenin may be present.",
    differential:
      "Epidermal inclusion cyst lacks matrical cells; basal cell carcinoma lacks ghost cells; pilomatrix carcinoma shows infiltrative growth, atypia, and atypical mitoses.",
    molecular: "CTNNB1/beta-catenin pathway alterations are characteristic.",
  },
  {
    name: "Trichilemmoma",
    category: "Benign follicular",
    clinical:
      "Adults; central face, eyebrow, and eyelid; small, slow-growing, skin-colored papule; multiple lesions suggest Cowden syndrome.",
    criteria:
      "Lobulated follicular tumor with trichilemmal differentiation, peripheral palisading, and thick basement membrane.",
    histology:
      "Clear glycogen-rich cells with peripheral palisading; thick eosinophilic basement membrane; desmoplastic variant has central sclerosis and cords of bland cells.",
    differential:
      "BCC lacks thick basement membrane and shows stromal retraction; desmoplastic trichoepithelioma has follicular papillae/keratin cysts; SCC shows atypia and invasion.",
    molecular:
      "Multiple lesions may be associated with germline PTEN alterations (Cowden syndrome).",
  },
  {
    name: "Sebaceous carcinoma",
    category: "Malignant sebaceous",
    clinical:
      "Older adults (median about 73 years); upper eyelid often from Meibomian glands; yellow-pink immobile nodule or diffuse thickening, recurrent chalazion, or chronic blepharoconjunctivitis.",
    criteria:
      "Malignant sebaceous differentiation with infiltrative growth; pagetoid intraepithelial spread may involve conjunctiva or epidermis.",
    histology:
      "Lobules/sheets of atypical cells with foamy or vacuolated cytoplasm; comedonecrosis and brisk mitoses; pagetoid spread; adipophilin, androgen receptor, and EMA support sebaceous differentiation.",
    differential:
      "BCC is BerEP4-positive and lacks sebaceous vacuoles; SCC is p40/p63-positive without lipid; sebaceoma is circumscribed and cytologically bland; metastatic clear-cell tumors require clinical correlation.",
    molecular:
      "TP53, RB1, NOTCH-family, and ZNF750 alterations; Muir–Torre syndrome warrants mismatch-repair IHC (MLH1/MSH2/MSH6/PMS2).",
  },
  {
    name: "Adenoid cystic carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Usually middle-aged or older adults, male predominance; upper/lower eyelid or periocular skin; slow-growing firm nodule, sometimes lash loss or pain.",
    criteria:
      "Infiltrative basaloid epithelial/myoepithelial carcinoma with cribriform/tubular architecture and prominent perineural invasion.",
    histology:
      "Cribriform pseudolumina with basement-membrane-like material; tubular and solid patterns; dual epithelial/myoepithelial phenotype; perineural invasion common.",
    differential:
      "Basal cell carcinoma lacks true cribriform pseudolumina; primary cutaneous adenoid cystic carcinoma must be distinguished from lacrimal gland or metastatic AdCC.",
    molecular:
      "MYB rearrangement/fusion, including MYB::NFIB, in a substantial subset.",
  },
  {
    name: "Signet-ring cell / histiocytoid carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Usually older men (median about 66 years); diffuse eyelid dermis/subcutis, often both lids; painless progressive swelling with possible monocle-like appearance.",
    criteria:
      "Diffuse infiltrative adnexal carcinoma with signet-ring/histiocytoid cells; exclude metastatic carcinoma, particularly breast and gastrointestinal primaries.",
    histology:
      "Discohesive cells with intracytoplasmic mucin/vacuoles displacing nuclei; infiltrative dermal/subcutaneous spread; epithelial markers and mucin stains support carcinoma.",
    differential:
      "Metastatic signet-ring carcinoma requires clinical workup; sebaceous carcinoma has lipid vacuoles and adipophilin; lymphoma is CD45-positive.",
    molecular:
      "CDH1 alterations and other changes including NTRK3, CDKN1B, ERBB2, TP53, and PIK3CA have been reported.",
  },
  {
    name: "Mucinous carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Usually older adults; lower eyelid or brow; slowly growing, often long-standing firm/cystic or papillomatous nodule; may mimic chalazion or BCC.",
    criteria:
      "Dermal carcinoma composed of epithelial nests/islands floating in abundant extracellular mucin; exclude metastasis from breast or gastrointestinal tract.",
    histology:
      "Pools of extracellular mucin with floating nests/cords of bland-to-atypical epithelial cells; neuroendocrine markers may be expressed variably; mucicarmine/PAS-D highlight mucin.",
    differential:
      "Metastatic mucinous carcinoma requires clinical correlation; EMPSGC has neuroendocrine differentiation and often an in situ component; hidrocystoma is cystic and benign.",
    molecular:
      "No single routinely diagnostic molecular alteration; molecular testing is not standard.",
  },
  {
    name: "Endocrine mucin-producing sweat gland carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Usually women in their 60s–70s; eyelid/periorbital skin; slow-growing skin-colored or bluish papule, nodule, or cyst; may be multifocal.",
    criteria:
      "Low-grade mucin-producing sweat gland carcinoma with neuroendocrine differentiation; assess for associated invasive mucinous carcinoma.",
    histology:
      "Well-demarcated solid, papillary, cribriform, or cystic nodules; uniform cells with neuroendocrine chromatin; mucin production; synaptophysin/chromogranin/INSM1 and hormone receptors often positive.",
    differential:
      "Mucinous carcinoma lacks the characteristic neuroendocrine phenotype; hidrocystoma lacks neoplastic solid/papillary proliferation; metastatic neuroendocrine carcinoma requires exclusion.",
    molecular:
      "No defining recurrent molecular test; associated mucinous carcinoma may represent progression.",
  },
  {
    name: "Microcystic adnexal carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Usually middle-aged adults, female predominance; lower eyelid/canthus; indurated skin-colored or yellow plaque/nodule, often slowly progressive; pain/numbness suggests perineural invasion.",
    criteria:
      "Deeply infiltrative adnexal carcinoma with bland cytology, keratin cysts, ductal structures, and frequent perineural invasion.",
    histology:
      "Superficial keratin-filled microcysts; deeper infiltrative cords and ducts in desmoplastic stroma; ductal lumina may contain eosinophilic cuticle; perineural/intraneural invasion.",
    differential:
      "Syringoma is circumscribed and superficial; desmoplastic trichoepithelioma is smaller and more symmetric with follicular structures; morpheaform BCC shows basaloid palisading/retraction.",
    molecular:
      "Low mutation burden; reported TP53 and JAK/STAT pathway alterations; no routine diagnostic molecular marker.",
  },
  {
    name: "Apocrine carcinoma",
    category: "Malignant adnexal",
    clinical:
      "Adults 44–91 years, male predominance; upper or lower eyelid; solitary bluish-brown nodule with ulceration, bleeding, lash loss, discharge, or chalazion-like presentation.",
    criteria:
      "Infiltrative carcinoma with apocrine differentiation, including decapitation secretion and/or zymogen granules.",
    histology:
      "Glandular, tubular, papillary, or solid infiltrative growth; abundant eosinophilic cytoplasm; apical snouts and intracytoplasmic granules; CK7, GCDFP-15, androgen receptor often positive.",
    differential:
      "Sebaceous carcinoma has lipid-rich vacuoles/adipophilin; metastatic breast carcinoma requires clinical correlation; EMPSGC shows neuroendocrine differentiation and mucin.",
    molecular:
      "No established defining molecular alteration for routine diagnosis.",
  },
  {
    name: "Eyelid melanocytic nevi",
    category: "Benign melanocytic",
    clinical:
      "Any age; eyelid skin or margin; usually small, symmetric, well-circumscribed pigmented or skin-colored papule; congenital or acquired.",
    criteria:
      "Benign melanocytic proliferation with maturation, symmetry, and no significant atypia; classify junctional, compound, or dermal pattern.",
    histology:
      "Nests of bland melanocytes; maturation with depth in compound/dermal nevi; congenital nevi may involve adnexa; melan-A/SOX10 highlight melanocytes; HMB45 often decreases with maturation.",
    differential:
      "Melanoma shows asymmetry, cytologic atypia, lack of maturation, mitoses, or destructive growth; pigmented BCC is epithelial and BerEP4-positive.",
    molecular:
      "Common acquired nevi may harbor BRAF or NRAS pathway mutations; testing is not routine.",
  },
  {
    name: "Spitz nevus",
    category: "Benign melanocytic",
    clinical:
      "Rare on eyelid; usually children/young patients; rapidly growing solitary pink-red vascular papule or nodule.",
    criteria:
      "Symmetric, circumscribed proliferation of epithelioid/spindle melanocytes with maturation and no high-grade atypia or deep atypical mitoses.",
    histology:
      "Large epithelioid/spindle cells in nests/fascicles; clefting, epidermal hyperplasia, maturation; S100/SOX10/Melan-A positive; p16 retained; HMB45 may be superficial.",
    differential:
      "Spitzoid melanoma shows asymmetry, ulceration, deep mitoses, atypia, and/or genomic complexity; conventional nevus lacks characteristic large spitzoid cells.",
    molecular:
      "Spitz lineage may show HRAS mutation or kinase fusions (ALK, ROS1, NTRK, RET); molecular testing can help in atypical cases.",
  },
  {
    name: "Cutaneous melanoma in situ",
    category: "Premalignant melanocytic",
    clinical:
      "Usually older adults for lentigo maligna; chronically sun-damaged eyelid/periocular skin; flat asymmetric irregularly pigmented macule.",
    criteria:
      "Atypical melanocytes proliferate within epidermis and adnexal epithelium without dermal invasion.",
    histology:
      "Lentiginous single-cell growth and/or pagetoid spread; atypical melanocytes along basal/suprabasal epidermis and follicles; SOX10 highlights cells; PRAME positivity/loss of p16 may support diagnosis.",
    differential:
      "Benign lentigo/nevus lacks significant atypia and confluent growth; pigmented actinic keratosis has atypical keratinocytes and melanocyte hyperplasia; invasive melanoma shows dermal invasion.",
    molecular: "No routine molecular testing for in situ disease.",
  },
  {
    name: "Invasive cutaneous melanoma",
    category: "Malignant melanocytic",
    clinical:
      "Usually older adults (median about 71 years); lower eyelid more often than upper; asymmetric variably pigmented or amelanotic macule/nodule, sometimes ulcerated.",
    criteria:
      "Malignant atypical melanocytes with dermal invasion; report Breslow thickness, ulceration, mitotic rate, lymphovascular/perineural invasion, satellites, and margins.",
    histology:
      "Atypical melanocytes in nests/sheets or single cells; pagetoid/lentiginous epidermal component may be present; SOX10, S100, Melan-A, and HMB45 support lineage; PRAME may assist.",
    differential:
      "Nevus shows maturation and symmetry; Spitz nevus has uniform spitzoid cytology and limited mitoses; melanoma in situ lacks dermal invasion; metastatic melanoma requires clinical correlation.",
    molecular:
      "BRAF, NRAS, NF1, and TERT promoter alterations are relevant; test actionable mutations, especially in advanced disease.",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(entities.map((entity) => entity.category))),
];

export default function EyelidTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const matchesCategory =
        category === "All" || entity.category === category;
      const matchesQuery =
        !q ||
        Object.values(entity).some((value) => value.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const allExpanded =
    filtered.length > 0 &&
    filtered.every((entity) => expanded.includes(entity.name));
  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 dark:text-slate-100">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
          Ophthalmic Pathology · Diagnostic Reference
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Eyelid Tumors and Tumor-Like Lesions
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A practical guide to the clinicopathologic features, diagnostic
          criteria, immunophenotype, and molecular findings of common and
          distinctive eyelid lesions.
        </p>
      </header>

      <section className="mb-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-lg font-semibold">Diagnostic Approach</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Anatomic compartment",
              "Determine whether the lesion is epidermal, follicular, sebaceous, sweat gland, melanocytic, or dermal/subcutaneous.",
            ],
            [
              "Growth pattern",
              "Assess circumscription, symmetry, depth, infiltrative growth, perineural invasion, and pagetoid spread.",
            ],
            [
              "Cytologic features",
              "Evaluate maturation, atypia, mitotic activity, necrosis, and differentiation.",
            ],
            [
              "Clinical context",
              "Correlate age, location, recurrence, chronic sun damage, immunosuppression, and possible hereditary syndromes.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-xl bg-white p-3 dark:bg-slate-800"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="font-semibold">Quick Diagnostic Comparison</h2>
          <p className="mt-1 text-sm text-slate-500">
            High-yield clues for selected eyelid lesions.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-950">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Key diagnostic clue</th>
                <th className="px-4 py-3">Useful IHC / molecular clue</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((e) => (
                <tr
                  key={e.name}
                  className="border-t border-slate-100 dark:border-slate-800"
                >
                  <td className="px-4 py-3 font-medium">{e.name}</td>
                  <td className="px-4 py-3">{e.category}</td>
                  <td className="px-4 py-3">{e.criteria}</td>
                  <td className="px-4 py-3">
                    {e.histology.split(";").slice(-1)[0]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search entities, morphology, IHC, molecular findings, or differentials..."
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-sky-900"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            setExpanded(allExpanded ? [] : filtered.map((e) => e.name))
          }
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <p className="mb-3 text-sm text-slate-500">
        {filtered.length} of {entities.length} entities
      </p>
      <div className="space-y-3">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <button
                onClick={() => toggle(entity.name)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <span>
                  <span className="block font-semibold">{entity.name}</span>
                  <span className="mt-1 block text-xs text-slate-500">
                    {entity.category}
                  </span>
                </span>
                <span className="text-xl text-slate-400">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="grid gap-5 border-t border-slate-200 px-5 py-5 dark:border-slate-700 md:grid-cols-2">
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                      Clinical Profile
                    </h3>
                    <p className="mt-2 text-sm leading-6">{entity.clinical}</p>
                  </section>
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                      Essential Diagnostic Criteria
                    </h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                      {entity.criteria.split("; ").map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                      Histopathology and Immunophenotype
                    </h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6">
                      {entity.histology.split("; ").map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                      Differential Diagnosis
                    </h3>
                    <p className="mt-2 text-sm leading-6">
                      {entity.differential}
                    </p>
                  </section>
                  <section className="md:col-span-2">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-sky-700 dark:text-sky-300">
                      Molecular Pathology
                    </h3>
                    <p className="mt-2 text-sm leading-6">{entity.molecular}</p>
                  </section>
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching entities. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-700">
        Diagnostic interpretation should integrate morphology, immunophenotype,
        clinical findings, and appropriate ancillary studies. Molecular testing
        is reserved for cases in which it materially supports classification,
        hereditary risk assessment, or therapeutic decision-making.
      </footer>
    </main>
  );
}
