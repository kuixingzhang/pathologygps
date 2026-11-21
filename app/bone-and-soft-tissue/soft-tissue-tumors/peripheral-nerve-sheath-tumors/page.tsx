"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
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
  prognosis: string[];
};

const entities: Entity[] = [
  {
    name: "Schwannoma",
    group: "Benign peripheral nerve sheath tumors",
    behavior: "Benign; recurrence is uncommon after gross total resection",
    site: "Peripheral nerves of skin/subcutis (especially head and neck and flexor surfaces of extremities), spinal intradural extramedullary compartment, and cranial nerves (especially vestibular division of CN VIII).",
    clinical: [
      "Usually solitary and sporadic (>90%); peak incidence in the fourth to sixth decades, with no sex or race predilection.",
      "Slow-growing, often asymptomatic or incidental; pain may occur, especially in schwannomatosis. Spinal lesions may cause radicular sensory or motor symptoms; vestibular tumors may cause hearing loss and vertigo.",
      "Multiple tumors, young age, bilateral vestibular schwannomas, or multifocal nerve involvement should prompt consideration of NF2-related or other schwannomatosis.",
    ],
    criteria: [
      "Essential: a benign tumor composed almost entirely of Schwann cells, showing one or more characteristic architectural patterns.",
      "Desirable: diffuse S100 and SOX10 immunoreactivity.",
      "A capsule and displacement/draping of uninvolved nerve fascicles support schwannoma; intratumoral axons are generally absent or limited compared with neurofibroma.",
    ],
    morphology: [
      "Conventional schwannoma is usually encapsulated and biphasic: compact Antoni A areas alternating with loose Antoni B areas.",
      "Antoni A: elongated tapered nuclei, modest eosinophilic cytoplasm, occasional nuclear palisading and Verocay bodies (parallel nuclear rows separated by aligned cell processes).",
      "Antoni B: loose cobweb-like tumor processes, lipid-laden histiocytes, thick-walled hyalinized vessels, hemosiderin, and cystic degeneration. Peripheral/subcapsular lymphoid aggregates may occur.",
      "Ancient schwannoma: scattered bizarre degenerative nuclei, often with hyalinization or ischemic change; atypia alone does not imply malignancy.",
      "Cellular schwannoma: predominantly/exclusively Antoni A, lacks Verocay bodies, may be hypercellular, hyperchromatic and mitotically active, with small necrotic foci. Encapsulation, subcapsular lymphocytes, hyalinized vessels and Schwannian whorls support schwannoma over MPNST.",
      "Plexiform schwannoma: thinly encapsulated or unencapsulated multinodular/plexiform growth, often superficial and presenting in childhood; thick-walled vessels may be absent.",
      "Epithelioid schwannoma: multilobulated epithelioid cells in myxoid/hyalinized stroma; conventional spindle areas may coexist.",
      "Microcystic/reticular schwannoma: interconnected microcyst-rich network of bland spindle cells in myxoid/fibrillary/hyalinized stroma; conventional Verocay bodies and hyalinized vessels are usually absent.",
    ],
    ihc: [
      "S100 and SOX10: diffuse, extensive nuclear and cytoplasmic staining is characteristic across subtypes.",
      "GFAP is variable; collagen IV typically outlines pericellular basement membranes.",
      "CD34 is commonly limited to subcapsular areas, unlike the lattice-like stromal pattern of neurofibroma.",
      "Neurofilament highlights entrapped axons, often at the periphery; EMA may highlight perineurial cells in the capsule.",
      "Cellular schwannoma: Ki-67 may show hotspots but remains below 20% in the source description; p16 and H3K27me3 are retained.",
      "Epithelioid schwannoma may lose SMARCB1/INI1 in a subset (~40%); this overlaps with epithelioid MPNST and is not independently proof of malignancy.",
    ],
    molecular: [
      "NF2 inactivation is found in approximately 50–75% of sporadic cases; other reported alterations include LATS1/2, ARID1A/B, DDR1 and SOX10.",
      "An SH3PXD2A::HTRA1 fusion is reported in roughly 10%.",
      "Multiple schwannomas may reflect NF2-, SMARCB1-, LZTR1- or chromosome 22-related schwannomatosis; mosaic/segmental forms occur.",
      "Molecular diagnostic testing is not clinically relevant for routine diagnosis according to the WHO excerpt.",
    ],
    differential: [
      [
        "Neurofibroma",
        "Schwannoma is usually encapsulated, composed almost entirely of Schwann cells, and diffusely S100/SOX10-positive; neurofibroma is unencapsulated, infiltrative, mixed-cellular and contains axons.",
      ],
      [
        "Cellular schwannoma vs MPNST",
        "Cellular schwannoma may be hypercellular, hyperchromatic, mitotically active and occasionally show small necrotic foci. Look for encapsulation, subcapsular lymphocytes, hyalinized vessels and Schwannian whorls; retained H3K27me3/p16 and Ki-67 hotspots <20% support cellular schwannoma in the source description.",
      ],
      [
        "Epithelioid schwannoma vs epithelioid MPNST",
        "Both may show epithelioid morphology and SMARCB1 loss. Infiltrative margins, geographic necrosis and significant atypia favor epithelioid MPNST; mild atypia without necrosis may remain challenging.",
      ],
      [
        "Melanotic lesion",
        "Neuromelanin-like pigment can occur in otherwise typical schwannoma; melanocytic markers such as HMB45 are negative, unlike malignant melanotic nerve sheath tumor.",
      ],
    ],
    pitfalls: [
      "Bizarre degenerative nuclei in ancient schwannoma do not by themselves indicate malignancy.",
      "Cellular schwannoma may mimic MPNST; assess the overall architecture and ancillary profile, not cellularity alone.",
      "Diffuse S100/SOX10 is typical of schwannoma but is not the pattern of conventional MPNST; epithelioid MPNST is an important exception.",
      "SMARCB1 loss occurs in both epithelioid schwannoma and epithelioid MPNST.",
    ],
    prognosis: [
      "Usually no recurrence after gross total resection; cellular and plexiform tumors may be difficult to remove completely and may require debulking.",
      "Malignant transformation of conventional schwannoma is exceptionally rare; reported transformations have most often been epithelioid MPNST.",
    ],
  },
  {
    name: "Neurofibroma",
    group: "Benign peripheral nerve sheath tumors",
    behavior:
      "Benign overall; plexiform and sizeable intraneural lesions carry risk of transformation",
    site: "Most often skin; less often deep medium-sized nerves, plexuses, major nerve trunks and spinal roots. Multiple paraspinal tumors are common in NF1.",
    clinical: [
      "Most are sporadic and solitary; multiple or plexiform tumors strongly suggest NF1.",
      "Cutaneous lesions are usually asymptomatic, mobile, soft masses. Deep lesions may cause nerve-distribution motor or sensory symptoms.",
      "NF1-associated clues include café-au-lait macules, axillary/inguinal freckling, Lisch nodules, optic pathway gliomas and bone dysplasia.",
      "A distinct growing nodule or increased PET activity within a plexiform neurofibroma raises concern for ANNUBP or MPNST.",
    ],
    criteria: [
      "Essential: a low-cellularity spindle-cell neoplasm associated with variably myxoid to collagenous stroma.",
      "Desirable: Schwannian cells positive for S100/SOX10, with CD34-positive stromal cells in a lattice-like pattern and neurofilament-positive entrapped axons.",
      "In an NF1-associated lesion, at least two ANNUBP features (atypia, hypercellularity, loss of neurofibroma architecture, or specified increased mitotic activity) raise the diagnosis; p16 loss/CDKN2A/B inactivation may support it.",
    ],
    morphology: [
      "Bland spindle cells with thin, wavy nuclei are dispersed in loose myxoid stroma with collagen often described as shredded-carrot-like.",
      "Mixed cellular components include neoplastic Schwann cells, perineurial/perineurial-like cells, fibroblasts and mast cells. The tumor is unencapsulated and tends to infiltrate soft tissue and parent nerves.",
      "Localized intraneural lesions expand one nerve fascicle; plexiform lesions expand multiple fascicles, each bounded by perineurium, producing a bag-of-worms/ropy pattern.",
      "Diffuse cutaneous and massive diffuse soft-tissue forms may extensively involve dermis, subcutis and skeletal muscle. Pseudomeissnerian corpuscles are typical in diffuse and plexiform forms.",
      "Ancient neurofibroma: scattered bizarre nuclei and smudgy chromatin without other worrisome features; not a premalignant lesion.",
      "Cellular neurofibroma: hypercellularity without cytologic atypia or increased mitotic activity.",
      "ANNUBP: at least two of four features—cytologic atypia, hypercellularity, loss of neurofibroma architecture, and mitotic count >1/10 mm² but <3/2 mm². This concept is principally developed for NF1-associated tumors.",
    ],
    ihc: [
      "S100 and SOX10 label the Schwannian component, often less extensively than in schwannoma; collagen IV is also positive in Schwann cells.",
      "CD34 highlights stromal cells in a characteristic lattice-like network; EMA/GLUT1 highlight limited perineurial cells.",
      "Neurofilament highlights entrapped axons. p16 is usually retained in a subset of tumor cells but may be lost in ANNUBP/MPNST foci; Ki-67 is typically low in conventional neurofibroma.",
      "p16 loss can serve as a surrogate for CDKN2A/CDKN2B inactivation in selected ANNUBP cases.",
    ],
    molecular: [
      "Biallelic NF1 inactivation in the neoplastic Schwann-cell population is the recurrent somatic event in conventional neurofibroma.",
      "ANNUBP is associated with CDKN2A/CDKN2B deletion; occasional SMARCA2 loss is reported. MPNST more often acquires additional alterations including SUZ12, EED or TP53 inactivation and chromosomal aneuploidy.",
      "CDKN2A/CDKN2B inactivation may support ANNUBP in selected cases; it is not a substitute for morphology.",
    ],
    differential: [
      [
        "Schwannoma",
        "Neurofibroma is unencapsulated, infiltrative, mixed-cellular, collagenous/myxoid and contains entrapped axons; schwannoma is usually encapsulated and diffusely S100/SOX10-positive.",
      ],
      [
        "Ancient neurofibroma vs ANNUBP",
        "Scattered bizarre degenerative nuclei alone define atypia/ancient change and are not premalignant. ANNUBP requires at least two specified worrisome features.",
      ],
      [
        "Cellular neurofibroma vs MPNST",
        "Cellularity alone is insufficient for MPNST; assess atypia, mitotic activity, necrosis and loss of architecture.",
      ],
      [
        "ANNUBP vs MPNST",
        "ANNUBP falls short of MPNST criteria but is a precursor/early malignant stage with increased progression risk; MPNST typically shows additional genomic complexity and malignant histology.",
      ],
    ],
    pitfalls: [
      "Do not equate ancient neurofibroma with ANNUBP.",
      "Do not diagnose ANNUBP from hypercellularity alone; at least two specified features are required.",
      "Plexiform neurofibroma is strongly associated with NF1 and carries increased MPNST risk.",
      "A massive diffuse soft-tissue neurofibroma is benign in itself, but an associated intraneural/plexiform component may harbor MPNST.",
    ],
    prognosis: [
      "Localized cutaneous neurofibromas are consistently benign; diffuse cutaneous lesions rarely transform.",
      "Plexiform and sizeable solitary intraneural neurofibromas carry transformation risk. Lifetime MPNST risk in NF1 is estimated at 9–13%.",
      "ANNUBP is considered a precursor lesion; one study reported low recurrence even with positive margins, arguing against automatically aggressive surgery.",
    ],
  },
  {
    name: "Perineurioma",
    group: "Benign and rare malignant peripheral nerve sheath tumors",
    behavior:
      "Soft-tissue and sclerosing forms are benign; malignant perineurioma is very rare",
    site: "Soft-tissue lesions most often involve lower limbs, then upper limbs and trunk; sclerosing perineurioma commonly affects fingers and palms. Intraneural and mucosal forms occur at other sites.",
    clinical: [
      "Usually a painless mass; subcutis is more often involved than deep soft tissue. About 10% are dermal.",
      "Middle-aged adults are typical, with slight female predominance; sclerosing perineurioma tends to affect young adult men.",
    ],
    criteria: [
      "Essential: storiform, whorled and/or lamellar architecture; elongated slender spindle cells with bipolar cytoplasmic processes; EMA expression.",
      "Desirable: variable claudin-1, GLUT1 and CD34 expression.",
      "Malignant perineurioma requires malignant cytologic/cellular features, including hypercellularity, atypia/hyperchromasia and high mitotic count.",
    ],
    morphology: [
      "Soft-tissue perineurioma is well-circumscribed but unencapsulated, usually firm/rubbery and yellow-tan-white.",
      "Predominantly storiform or whorled growth; long lamellar fascicles and perivascular growth may occur. Cells are slender spindle cells with wavy/tapered nuclei and delicate bipolar processes.",
      "Stroma is usually collagenous; approximately 20% show focal myxoid matrix. Mitoses are scarce or absent. Degenerative pleomorphic or multinucleated cells may occur.",
      "Sclerosing perineurioma: cords of small epithelioid-to-spindle cells in dense collagen. Reticular perineurioma: elongated interconnected cells in a lacy pattern.",
      "Intraneural perineurioma forms circumferential perineurial whorls around nerve fibers (pseudo-onion bulbs); mucosal perineurioma expands lamina propria with swirling delicate spindle cells.",
      "Rare malignant perineurioma shows hypercellularity, nuclear atypia/hyperchromasia and high mitotic activity.",
    ],
    ihc: [
      "EMA is consistently expressed, ranging from weak/focal to strong/diffuse; claudin-1 and GLUT1 are often positive.",
      "CD34 is positive in about 60%. S100, SOX10 and GFAP are negative, supporting separation from Schwannian tumors.",
      "Sclerosing perineurioma may show limited keratin staining.",
    ],
    molecular: [
      "22q12 deletion and NF2 mutations are recurrent; 17q11 deletion including NF1 is also reported. 10q24 alterations recur in sclerosing perineurioma.",
      "Molecular diagnostic testing is not clinically relevant for routine diagnosis in the supplied WHO excerpt.",
    ],
    differential: [
      [
        "Schwannoma",
        "Perineurioma expresses EMA/claudin-1/GLUT1 and lacks S100/SOX10; schwannoma shows diffuse S100/SOX10 and pericellular collagen IV.",
      ],
      [
        "Neurofibroma",
        "Perineurioma has a characteristic storiform/whorled/lamellar pattern and EMA-positive perineurial phenotype; neurofibroma has Schwannian S100/SOX10-positive cells and lattice-like CD34 stromal cells.",
      ],
      [
        "Malignant perineurioma",
        "Degenerative atypia alone may occur in benign tumors. Malignancy requires a combination of hypercellularity, significant atypia/hyperchromasia and high mitotic activity.",
      ],
      [
        "Sclerosing perineurioma vs other sclerosing acral lesions",
        "Cords of epithelioid/spindle cells in dense collagen with EMA positivity support sclerosing perineurioma.",
      ],
    ],
    pitfalls: [
      "Degenerative nuclear atypia does not by itself indicate malignancy.",
      "Do not expect S100/SOX10 positivity in a conventional perineurioma.",
      "EMA can highlight capsule/perineurial cells in other nerve sheath tumors; interpret staining in the lesional cells.",
    ],
    prognosis: [
      "Benign soft-tissue and sclerosing perineuriomas rarely recur locally.",
      "Malignant perineuriomas may metastasize but appear less aggressive than conventional MPNST in reported cases.",
    ],
  },
  {
    name: "Granular Cell Tumor",
    group: "Schwannian tumors with benign and malignant forms",
    behavior:
      "Usually benign; malignant tumors are rare (approximately 1–2%) but have substantial metastatic risk",
    site: "Deep dermis/subcutis, especially head and neck, trunk and proximal extremities; tongue is the most common single site (~25%), followed by breast. GI and respiratory mucosa may be involved.",
    clinical: [
      "Usually an indolent, firm, often asymptomatic lesion; skin/tongue lesions may itch or hurt.",
      "Typically adults aged 40–60 years; some series report female predominance. Up to 10% are multifocal.",
      "Malignant tumors usually arise in deep soft tissues, especially trunk and extremities, and are often >5 cm.",
    ],
    criteria: [
      "Essential: nests, trabeculae and sheets of epithelioid-to-polygonal cells with abundant intensely eosinophilic granular cytoplasm and diffuse S100 or SOX10 immunoreactivity.",
      "For malignant potential, assess the six histologic parameters: spindling, high N:C ratio, vesicular nuclei with prominent nucleoli, pleomorphism, increased mitoses (>2/2 mm²), and geographic necrosis. Three or more are helpful to identify tumors with metastatic propensity; neither mitoses nor necrosis alone captures all metastatic cases.",
    ],
    morphology: [
      "Poorly defined/infiltrative sheets, nests and trabeculae of large polygonal cells with abundant granular eosinophilic cytoplasm.",
      "Granularity reflects lysosomal accumulation; granules are PAS-positive and diastase-resistant, sometimes with clear halos. Cell borders may be indistinct and syncytial.",
      "Nuclei range from small mildly hyperchromatic to vesicular with prominent nucleoli; mitoses are usually scant in benign lesions.",
      "Overlying squamous epithelium, especially tongue and esophagus, may show florid pseudoepitheliomatous hyperplasia mimicking squamous cell carcinoma.",
      "Malignant tumors range from overtly sarcomatous to deceptively bland; assess the complete six-feature panel rather than any single feature.",
    ],
    ihc: [
      "S100 and SOX10 are typically diffuse; α-inhibin and calretinin are commonly positive.",
      "CD68, CD63/NKI-C3 and NSE are positive but likely reflect lysosomal content and are nonspecific.",
      "Keratin, CD163 and myogenic markers are negative. MITF and TFE3 often show diffuse nuclear staining; HMB45 is consistently negative, while rare focal melan-A may occur.",
    ],
    molecular: [
      "Loss-of-function variants in ATP6AP1 (~61%) and ATP6AP2 (~11%) collectively occur in approximately 72%; other V-ATPase-related genes are altered in a subset.",
      "These V-ATPase gene alterations are highly characteristic/pathognomonic in the WHO excerpt, but molecular testing is not designated clinically relevant for routine diagnosis.",
    ],
    differential: [
      [
        "Squamous cell carcinoma",
        "Florid pseudoepitheliomatous hyperplasia can overlie a granular cell tumor. Identify the subepithelial granular cells and confirm Schwannian phenotype.",
      ],
      [
        "Histiocytic lesion",
        "Granular cell tumor may express CD68/CD63, but diffuse S100/SOX10 and absence of CD163 support granular cell tumor over histiocytic proliferation.",
      ],
      [
        "Melanocytic tumor",
        "Granular cell tumor is typically HMB45-negative and strongly S100/SOX10-positive; MITF/TFE3 nuclear staining is not proof of melanocytic differentiation.",
      ],
      [
        "Benign vs malignant granular cell tumor",
        "Use the constellation of six histologic parameters; three or more are helpful for metastatic propensity. A single feature, including necrosis or mitotic activity, is insufficient.",
      ],
    ],
    pitfalls: [
      "Pseudoepitheliomatous hyperplasia can be mistaken for invasive squamous cell carcinoma; sample and examine the underlying lesion.",
      "CD68 positivity is nonspecific and reflects lysosomes.",
      "No single histologic feature reliably identifies every tumor that will metastasize.",
    ],
    prognosis: [
      "Benign tumors may recur if incompletely excised.",
      "Malignant granular cell tumors have approximately 50% metastatic rate, including regional nodes and distant sites.",
      "Older age, size >5 cm, local recurrence and metastasis are adverse factors. The supplied excerpt notes no established prognostic value for AJCC TNM staging.",
    ],
  },
  {
    name: "Dermal Nerve Sheath Myxoma",
    group: "Benign peripheral nerve sheath tumors",
    behavior:
      "Benign; incomplete excision is associated with frequent local recurrence",
    site: "Predominantly distal extremities, especially fingers/toes and lower extremities; fingers account for approximately 36%.",
    clinical: [
      "Small, superficial, slow-growing, often asymptomatic mass; occasional pain.",
      "Rare tumor, peak incidence in young adults (mid-thirties), slight male predominance; reported age range 8–72 years.",
    ],
    criteria: [
      "Essential: a myxoid dermal and/or subcutaneous neoplasm with multilobulated growth, composed of bland spindle and epithelioid Schwann cells; S100 positivity.",
      "Desirable: small superficial lesion on distal extremity (often finger/toe) in a young adult.",
    ],
    morphology: [
      "Usually dermal/subcutaneous, often multinodular with abundant myxoid matrix bordered by dense fibrous tissue; rare extension into skeletal muscle.",
      "Small epithelioid, ring-like, stellate and spindle Schwann cells form cords, nests and syncytial aggregates. Ring-like cells may mimic lipoblasts.",
      "Usually mild atypia and very few or absent mitoses; scattered moderate degenerative pleomorphism may occur.",
      "Rare focal palisading or Verocay-like structures; multivacuolated cells and spider-like processes are uncommon.",
    ],
    ihc: [
      "Diffuse S100 and SOX10; GFAP and CD57 often moderate-to-diffuse; collagen IV strongly outlines tumor cells.",
      "Rare keratin-positive cells, scattered EMA-positive capsule perineurial cells, occasional CD34-positive fibroblasts; NFP-positive axons are infrequent.",
    ],
    molecular: [
      "No recurrent genetic abnormality identified. Expression profiling resembles dermal schwannoma and differs from cellular neurothekeoma.",
      "Molecular diagnostic pathology is not clinically relevant.",
    ],
    differential: [
      [
        "Cellular neurothekeoma",
        "Dermal nerve sheath myxoma is Schwannian (diffuse S100/SOX10) and abundantly myxoid/multinodular; cellular neurothekeoma is biologically and molecularly distinct.",
      ],
      [
        "Lipoblastoma / liposarcoma mimic",
        "Ring-like or multivacuolated cells can resemble lipoblasts; use the diffuse Schwannian immunophenotype and abundant myxoid lobulated architecture.",
      ],
      [
        "Schwannoma",
        "Both are S100/SOX10-positive; dermal nerve sheath myxoma is typically superficial, multinodular and abundantly myxoid, with ring-like/epithelioid cells.",
      ],
    ],
    pitfalls: [
      "Do not use the obsolete term myxoid variant of neurothekeoma; WHO identifies this as a Schwann cell tumor distinct from cellular neurothekeoma.",
      "Ring-like cells can mimic lipoblasts.",
      "Incomplete excision has a high recurrence rate, particularly in finger lesions.",
    ],
    prognosis: [
      "Benign, but local recurrence is common after incomplete removal.",
      "In the largest modern series, 47% recurred after local excision; repeated recurrences and persistent disease were reported, especially in finger tumors.",
    ],
  },
  {
    name: "Solitary Circumscribed Neuroma",
    group: "Benign peripheral nerve sheath tumors",
    behavior: "Benign; recurrence is exceptional after complete excision",
    site: "Approximately 90% occur on the face (cheek, nose, forehead, lips, eyelids, chin); oral mucosa is the second most common site.",
    clinical: [
      "Usually a solitary, slow-growing, firm, painless dermal nodule, typically 2–5 mm.",
      "Most common in fifth to seventh decades; no sex predilection. Multiple cases are rare.",
    ],
    criteria: [
      "Essential: circumscribed cutaneous lesion composed of Schwann-cell-rich nerve fascicles, with or without partial capsule, focal palisading and artefactual clefting; S100 positivity and NFP-positive axons.",
      "Desirable: capsule highlighted by perineurial markers EMA/GLUT1.",
    ],
    morphology: [
      "Well-demarcated dermal proliferation of bland spindle Schwann cells with wavy nuclei in hyalinized collagen; commonly lobular with well-developed microfascicles and variable nuclear palisading.",
      "Thin perineurial-derived capsule may be incomplete superficially; a parent nerve may be seen at the base. Artefactual clefting is frequent.",
      "No cytologic atypia and inconspicuous mitoses; overlying epidermis is usually normal or attenuated.",
    ],
    ihc: [
      "Spindle cells strongly and diffusely S100-positive and GFAP-negative.",
      "NFP highlights intratumoral axons; axon-to-Schwann cell ratio is <1:2.",
      "Capsular perineurial cells express EMA, claudin-1 and GLUT1.",
    ],
    molecular: [
      "Pathogenesis unknown; molecular testing is not clinically relevant.",
    ],
    differential: [
      [
        "Traumatic neuroma",
        "Solitary circumscribed neuroma is usually not associated with trauma or histologic evidence of traumatic nerve injury; it is a circumscribed Schwann-cell-rich dermal nodule.",
      ],
      [
        "Schwannoma",
        "SCN contains intratumoral NFP-positive axons and microfascicles; schwannoma is typically encapsulated and composed almost entirely of Schwann cells.",
      ],
      [
        "Neurofibroma",
        "SCN is circumscribed and Schwann-cell-rich with hyalinized collagen and palisading; neurofibroma is unencapsulated, mixed-cellular and more diffusely myxocollagenous.",
      ],
    ],
    pitfalls: [
      "The presence of axons is important; use NFP to demonstrate them.",
      "Do not assume a traumatic etiology in the absence of history or histologic evidence.",
      "Rare multiple lesions have been described, but the source does not establish a consistent syndrome association.",
    ],
    prognosis: [
      "Benign; generally no recurrence after complete excision. Only a single recurrence was documented in the cited literature; no metastases reported.",
    ],
  },
  {
    name: "Ectopic Meningioma and Meningothelial Hamartoma",
    group: "Other nerve-associated / meningothelial lesions",
    behavior:
      "Usually benign; behavior follows meningioma grade and extent of resection",
    site: "Entirely extracranial/extraspinal sites, including scalp, calvarium, sinonasal region and rare visceral sites; meningothelial hamartoma most often involves scalp skin/subcutis.",
    clinical: [
      "Ectopic meningioma is a rare extra-CNS meningioma; scalp meningothelial hamartoma may present as a congenital or early-life cutaneous lesion.",
      "Some lesions are incidental and may represent ectopic rests or metaplastic meningothelial-like cells.",
    ],
    criteria: [
      "Essential: meningothelial rest or neoplasm located entirely outside the CNS, with no connection to the CNS.",
      "Establish absence of a primary intracranial/intraspinal connection by imaging and clinical correlation.",
    ],
    morphology: [
      "Ectopic meningiomas resemble their CNS counterparts and may show similar histologic grades; benign meningothelial tumors predominate.",
      "Scalp meningothelial hamartomas often show slit-like spaces resembling lymphatics but lined by meningothelial cells, with meningothelial clusters and psammoma bodies.",
      "Gross appearance varies; calvarial meningiomas are typically hyperostotic.",
    ],
    ihc: [
      "No highly sensitive/specific marker is available. Most express vimentin, EMA and progesterone receptor; SSTR2A may also be expressed.",
      "p63 may be positive in meningioma and is not reliable for distinguishing it from epithelial neoplasms.",
    ],
    molecular: [
      "Molecular studies are limited; PTEN and Gorlin syndrome associations have been reported, but pathogenesis remains uncertain.",
      "Molecular diagnostic pathology is not clinically relevant.",
    ],
    differential: [
      [
        "Primary CNS meningioma with extracranial extension",
        "The essential distinction is a lesion entirely outside the CNS with no connection; correlate with imaging.",
      ],
      [
        "Lymphatic or vascular lesion in scalp",
        "Meningothelial hamartoma may form slit-like spaces, but the lining cells are meningothelial rather than endothelial; psammoma bodies and meningothelial clusters may help.",
      ],
      [
        "Epithelial neoplasm",
        "EMA and p63 are not specific; interpret the full morphology and clinical/anatomic setting.",
      ],
    ],
    pitfalls: [
      "Do not diagnose ectopic meningioma without excluding a CNS connection.",
      "SSTR2A/EMA/PR positivity supports but does not independently establish the diagnosis.",
      "p63 expression is not a reliable discriminator from epithelial tumors.",
    ],
    prognosis: [
      "Tumor grade and completeness of resection influence outcome. Intraosseous skull-base cases recur more often than convexity cases.",
      "Distant metastases have been reported in approximately 6%, mostly in anaplastic examples; hamartomas are usually cured by surgery with rare recurrence.",
    ],
  },
  {
    name: "Neuromuscular Choristoma",
    group: "Benign peripheral nerve sheath tumors",
    behavior:
      "Benign intraneural lesion; important association with subsequent desmoid fibromatosis",
    site: "Proximal large nerves and plexuses, especially sciatic nerve and brachial plexus; cranial nerve and intraorbital examples reported.",
    clinical: [
      "Extremely rare (<100 reported cases), usually infancy/childhood but adult presentation occurs; sexes roughly equal.",
      "Pain or peripheral neuropathy, often with limb atrophy/undergrowth. MRI signal resembles skeletal muscle; interfascicular fat is limited (<50%), unlike lipomatosis of nerve.",
      "Desmoid fibromatosis develops in roughly 80%, often after surgery/biopsy; MRI may show a contrast-enhancing fibroblastic mass.",
    ],
    criteria: [
      "Essential: mature skeletal muscle within nerve fascicles.",
      "For neuromuscular choristoma–desmoid fibromatosis: associated invasive fibroblastic/myofibroblastic proliferation with sweeping fascicles.",
      "Desirable: validate both myogenic and neural components; EMA-positive perineurium around individual fascicles; nuclear β-catenin may be present.",
    ],
    morphology: [
      "Fusiform enlargement of a proximal nerve with multifascicular involvement; some fascicles appear beefy red on cut surface.",
      "Haphazard bundles of mature cross-striated skeletal muscle are intercalated among intraneural Schwann cells, axons and perineurium.",
      "Associated desmoid fibromatosis shows invasive fibroblastic/myofibroblastic proliferation with sweeping fascicles.",
    ],
    ihc: [
      "Myogenic component expresses mature skeletal muscle markers including desmin.",
      "Residual nerve: neurofilament-positive axons and S100/SOX10-positive Schwann cells; EMA outlines perineurium around individual fascicles.",
      "Nuclear β-catenin may be seen in neural and myogenic cells and in associated desmoid fibromatosis.",
    ],
    molecular: [
      "Most cases and associated desmoid components show CTNNB1 exon 3 mutations, commonly p.(Ser45Phe); possible somatic mosaicism is proposed.",
      "Molecular testing is not clinically relevant for routine diagnosis.",
    ],
    differential: [
      [
        "Lipomatosis of nerve",
        "Neuromuscular choristoma contains mature skeletal muscle within fascicles and has limited interfascicular fat (<50%); lipomatosis of nerve is characterized by abundant interfascicular adipose tissue.",
      ],
      [
        "Intraneural rhabdomyoma / other myogenic lesion",
        "Demonstrate mature muscle intercalated within native nerve fascicles, with preserved axons, Schwann cells and perineurium.",
      ],
      [
        "Desmoid fibromatosis",
        "A fibroblastic mass may coexist with neuromuscular choristoma; recognize the intraneural muscle component and avoid confusing the primary nerve lesion with the secondary desmoid.",
      ],
    ],
    pitfalls: [
      "Because the lesion involves a functional nerve, biopsy or radical resection can cause morbidity and may trigger desmoid fibromatosis.",
      "In classic radiologic settings, a no-touch approach has been advocated due to risk of desmoid development after biopsy.",
      "Do not confuse mature intraneural skeletal muscle with a malignant rhabdomyoblastic component.",
    ],
    prognosis: [
      "NMC is considered benign, but associated desmoid fibromatosis is frequent and may be locally aggressive.",
      "Accurate intraoperative recognition is important to avoid overly aggressive nerve resection; advanced desmoid disease may require radical surgery or amputation.",
    ],
  },
  {
    name: "Hybrid Nerve Sheath Tumor",
    group: "Benign peripheral nerve sheath tumors",
    behavior:
      "Benign; recurrence is uncommon and generally related to incomplete excision",
    site: "Schwannoma-perineurioma usually occurs in superficial soft tissues of extremities, trunk and head/neck; schwannoma-neurofibroma often arises in association with a nerve and may be superficial or deep.",
    clinical: [
      "Schwannoma-perineurioma: superficial mass, usually asymptomatic or mildly tender; young adults are common, slight female predilection.",
      "Schwannoma-neurofibroma: mass with possible pain, paresthesia or paresis; multiple lesions may occur with NF2-related, SMARCB1/LZTR1-related schwannomatosis or NF1.",
    ],
    criteria: [
      "Schwannoma-perineurioma: bland spindle cells with Schwannian differentiation (S100/SOX10) admixed with perineurial-differentiated cells (CD34 and/or EMA); VGLL3 rearrangement is desirable in unusual cases.",
      "Schwannoma-neurofibroma: juxtaposed components morphologically and immunophenotypically typical of both schwannoma and neurofibroma.",
      "Other combinations include neurofibroma-perineurioma and granular cell tumor-perineurioma, but the supplied WHO excerpt notes these are exceptionally uncommon and does not elaborate.",
    ],
    morphology: [
      "Schwannoma-perineurioma: generally lobulated, composed of vague spindle-cell fascicles with variable cellularity; focal storiform, whorled or microcystic patterns may occur. Low-power appearance often resembles perineurioma.",
      "Schwannoma-perineurioma cells have eosinophilic cytoplasm with delicate fibrillar processes, monomorphic ovoid nuclei and inconspicuous mitoses; necrosis has not been reported.",
      "Schwannoma-neurofibroma: two distinct components—circumscribed cellular schwannoma-like nodules with fascicular/whorled growth, and hypocellular neurofibroma-like areas with wavy nuclei, myxoid collagenous stroma and capillary-like vessels.",
      "There is no consensus on whether schwannoma-neurofibroma is a distinct entity; it may represent a heterogeneous group or Schwann-cell-rich neurofibroma/Antoni B-like areas.",
    ],
    ihc: [
      "Schwannoma-perineurioma: dominant S100/SOX10-positive Schwannian population plus a second slender-cell population variably highlighted by CD34, EMA, claudin-1 and GLUT1.",
      "Schwannoma-neurofibroma: schwannoma component diffusely S100/SOX10-positive; neurofibroma component variably S100-positive and consistently CD34-positive. EMA is negative in tumor cells but may highlight a perineurial layer.",
      "CD34 and entrapped axons are not independently diagnostic because similar findings may occur in schwannoma.",
    ],
    molecular: [
      "Schwannoma-perineurioma: approximately 50% have CHD7::VGLL3 fusion; other VGLL3 partners and diverse alternative fusions are reported.",
      "Schwannoma-neurofibroma: monosomy 22 and chromosome 22q gene alterations (including LZTR1, NF2, SMARCB1) are reported; molecular findings are heterogeneous.",
      "Molecular testing is not required for prototypical morphology/immunophenotype; VGLL3 or related fusion may support challenging schwannoma-perineurioma.",
    ],
    differential: [
      [
        "Schwannoma",
        "Hybrid tumor requires a distinct second component with perineurial or neurofibromatous morphology/phenotype; focal CD34 alone is insufficient.",
      ],
      [
        "Neurofibroma with Schwann-cell-rich nodules",
        "Schwannoma-neurofibroma criteria lack consensus; consider the possibility that apparent hybrid areas represent Schwann-cell proliferations within neurofibroma.",
      ],
      [
        "Myxoid schwannoma / Antoni B areas",
        "Some schwannoma-neurofibroma-like lesions may reflect Antoni B areas rather than a distinct hybrid entity; correlate morphology and immunophenotype across the lesion.",
      ],
      [
        "Schwannoma-perineurioma",
        "Look for two immunophenotypically distinct cell populations, S100/SOX10-positive and perineurial-marker-positive.",
      ],
    ],
    pitfalls: [
      "Do not diagnose a hybrid tumor solely because CD34-positive cells or entrapped axons are present.",
      "Schwannoma-neurofibroma is a less settled category; document the two components and acknowledge diagnostic uncertainty when appropriate.",
      "Prototypical schwannoma-perineurioma generally does not require molecular confirmation.",
    ],
    prognosis: [
      "Schwannoma-perineurioma is benign; local recurrence is associated with incomplete excision.",
      "Schwannoma-neurofibroma is considered benign, with very rare local recurrence.",
    ],
  },
  {
    name: "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
    group: "Malignant peripheral nerve sheath tumors",
    behavior:
      "Aggressive sarcoma with poor prognosis; malignant triton tumor is particularly aggressive",
    site: "Often deep, arising from a major nerve or pre-existing plexiform neurofibroma; may occur anywhere in the body.",
    clinical: [
      "Usually affects adults aged 20–50 years; rare in children and often NF1-associated when pediatric.",
      "Associated with NF1 or prior radiation; may present with enlarging mass, pain, neuropathic symptoms or neurologic deficit.",
      "In NF1, a distinct growing nodule or increased FDG-PET activity within plexiform neurofibroma is concerning but imaging is not specific.",
    ],
    criteria: [
      "Essential: spindle-cell sarcoma usually arising from a pre-existing nerve sheath tumor or in a patient with NF1.",
      "In sporadic/radiation-associated cases, diagnosis integrates morphology and evidence of Schwannian differentiation (often focal S100/SOX10) and/or H3K27me3 loss.",
      "Low-grade MPNST: 1.5–4.5 mitoses/mm² without necrosis; high-grade: ≥5 mitoses/mm², or 1.5–4.5 mitoses/mm² with necrosis (criteria cited in the WHO excerpt).",
    ],
    morphology: [
      "Typically fascicles of spindle cells with alternating hypercellular and hypocellular areas (tapestry/marble-like pattern), often with hemangiopericytoma-like vasculature.",
      "Cells have monomorphic hyperchromatic wavy nuclei and pale eosinophilic cytoplasm; geographic necrosis and conspicuous mitoses are common. Pleomorphism may be extensive and mimic undifferentiated pleomorphic sarcoma.",
      "Perivascular accentuation may occur; tumor may track along nerve bundles.",
      "Heterologous differentiation occurs in ~15%: skeletal muscle (malignant triton tumor), bone, cartilage or endothelium. Rare glandular MPNST, usually in NF1, may produce mucin.",
    ],
    ihc: [
      "S100 is positive in <50%, SOX10 in <70%, and GFAP in 20–30%; staining is usually focal/patchy. Diffuse S100/SOX10 is generally incompatible with conventional MPNST.",
      "Complete H3K27me3 loss is a surrogate for PRC2 deficiency and supports MPNST, especially high-grade, sporadic de novo and radiation-associated tumors. Weak/focal staining or mosaic loss is not diagnostically meaningful.",
      "Heterologous components stain with their respective lineage markers; glandular areas express keratin and CEA and may express neuroendocrine markers.",
    ],
    molecular: [
      "Complex karyotypes with frequent concurrent inactivation of NF1, CDKN2A/CDKN2B, TP53 and PRC2 components EED or SUZ12.",
      "PRC2 loss causes complete H3K27me3 loss in many high-grade tumors; additional copy-number alterations accumulate during progression from plexiform neurofibroma through ANNUBP to MPNST.",
      "Rare NTRK fusions have been reported, including in NF1-associated or H3K27me3-loss cases; routine molecular diagnostic testing is not used.",
    ],
    differential: [
      [
        "Cellular schwannoma",
        "Cellular schwannoma may be mitotically active but usually retains H3K27me3/p16 and shows capsule, subcapsular lymphocytes, hyalinized vessels and Schwannian whorls; S100/SOX10 is typically diffuse.",
      ],
      [
        "ANNUBP",
        "ANNUBP is an NF1-associated precursor/early lesion with at least two specified histologic features but falls short of MPNST criteria; assess mitotic count, necrosis, architecture and molecular progression.",
      ],
      [
        "Undifferentiated pleomorphic sarcoma",
        "MPNST may be markedly pleomorphic; nerve association, NF1 history, focal Schwannian markers and H3K27me3 loss support MPNST.",
      ],
      [
        "Epithelioid MPNST",
        "Epithelioid MPNST is a distinct entity with diffuse S100/SOX10, frequent SMARCB1 loss and retained H3K27me3, unlike conventional MPNST.",
      ],
      [
        "Malignant triton tumor",
        "This is MPNST with skeletal muscle differentiation, including mature rhabdomyoblasts; it is particularly aggressive.",
      ],
    ],
    pitfalls: [
      "S100/SOX10 are often only focal or absent; lack of diffuse staining does not exclude MPNST.",
      "Only complete H3K27me3 loss is meaningful; weak/focal staining or mosaic loss lacks diagnostic relevance.",
      "H3K27me3 loss is a surrogate, not an entity-specific standalone test; integrate NF1/nerve association and morphology.",
      "Distinguish ANNUBP from low-grade MPNST carefully, especially on small biopsies.",
    ],
    prognosis: [
      "Aggressive with poor prognosis. Adverse factors include truncal site, size >5 cm, local recurrence and high-grade morphology.",
      "NF1-associated MPNST appears to have worse prognosis than sporadic tumors; malignant triton tumors are particularly aggressive.",
      "UICC/AJCC TNM staging may be used.",
    ],
  },
  {
    name: "Epithelioid Malignant Peripheral Nerve Sheath Tumor",
    group: "Malignant peripheral nerve sheath tumors",
    behavior:
      "Malignant; capable of local recurrence, distant metastasis and disease-related death",
    site: "Usually superficial mass in extremities or trunk; some are deep-seated or visceral.",
    clinical: [
      "Rare (~1% of soft tissue sarcomas), median age approximately 40 years, equal sex distribution.",
      "Usually not associated with NF1; may arise de novo or in a pre-existing schwannoma.",
    ],
    criteria: [
      "Essential: sarcoma with solid/nested architecture and epithelioid cytomorphology, prominent nucleoli, geographic necrosis and often limited nuclear pleomorphism, with diffuse S100/SOX10 positivity.",
      "Desirable: loss of SMARCB1/INI1, seen in the majority.",
      "Exclude melanoma by appropriate melanocytic markers and clinical correlation.",
    ],
    morphology: [
      "Plump, relatively uniform epithelioid cells with abundant eosinophilic cytoplasm and round vesicular nuclei with prominent nucleoli.",
      "Characteristic multilobular growth, often with extracellular myxoid or hyalinized matrix; hemorrhage/necrosis may be present.",
      "Infiltrative margins, geographic necrosis and/or significant nuclear atypia support malignancy over epithelioid schwannoma; borderline cases can be challenging.",
    ],
    ihc: [
      "Strong diffuse S100 and SOX10, unlike conventional MPNST.",
      "Most show loss of SMARCB1/INI1; H3K27me3 is retained.",
      "Melanoma markers are absent; keratin may be positive.",
    ],
    molecular: [
      "SMARCB1 genomic inactivation occurs in approximately 70%, usually large arm-level/homozygous deletions, less often intragenic deletions or nonsense variants.",
      "Unlike conventional MPNST, NF1/CDKN2A/B alterations are uncommon and EED/SUZ12 alterations are absent.",
    ],
    differential: [
      [
        "Epithelioid schwannoma",
        "Both may show diffuse S100/SOX10 and SMARCB1 loss. Infiltrative margins, geographic necrosis and significant atypia favor epithelioid MPNST.",
      ],
      [
        "Melanoma",
        "Epithelioid MPNST shows Schwannian markers but lacks melanoma marker expression in the source description; use a melanocytic panel and clinical context.",
      ],
      [
        "Conventional MPNST",
        "Epithelioid MPNST has diffuse S100/SOX10 and usually retained H3K27me3; conventional MPNST more often has focal/patchy Schwannian markers and may lose H3K27me3.",
      ],
    ],
    pitfalls: [
      "SMARCB1 loss is not specific: it also occurs in a subset of benign epithelioid schwannomas.",
      "Diffuse S100/SOX10 does not exclude malignancy in this epithelioid subtype.",
      "Mild atypia without necrosis may make distinction from epithelioid schwannoma difficult.",
    ],
    prognosis: [
      "Potential for local recurrence, distant metastasis and death from disease; stage using UICC/AJCC TNM as applicable.",
    ],
  },
  {
    name: "Malignant Melanotic Nerve Sheath Tumor",
    group: "Malignant peripheral nerve sheath tumors",
    behavior:
      "Unpredictable malignant behavior; long-term recurrence and metastasis can occur even without overtly malignant morphology",
    site: "Usually spinal or autonomic nerves near the midline; also reported in GI tract, bone, soft tissue, heart, bronchus, liver and skin.",
    clinical: [
      "Rare, chiefly adults, equal sex distribution. Carney complex-associated cases occur younger (average ~22.5 years) than sporadic cases (~33.2 years).",
      "Pain, sensory symptoms or mass effect; multiple tumors occur in approximately 20% and increase suspicion for Carney complex.",
      "Carney complex is variably associated across series; psammomatous and non-psammomatous tumors have similar clinical behavior.",
    ],
    criteria: [
      "Essential: fascicular-to-sheet-like proliferation of variably pigmented, relatively uniform plump spindle-to-epithelioid cells; coexpression of S100/SOX10 and melanocytic markers (e.g. HMB45, melan-A).",
      "Desirable: loss of PRKAR1A by IHC and/or a PRKAR1A pathogenic variant.",
      "Do not rely on psammoma bodies or overt malignant cytology to predict behavior.",
    ],
    morphology: [
      "Short fascicles or sheets of polygonal-to-spindle cells, often syncytial; vague palisading or whorls may occur.",
      "Heavy melanin may obscure cytologic detail; pigment is Fontana–Masson-positive and iron/PAS-negative. Less pigmented areas show eosinophilic/amphophilic cytoplasm, round/ovoid nuclei, grooves and pseudoinclusions.",
      "Psammoma bodies occur in roughly 50% and may require extensive sampling. Mitoses and necrosis may occur but are not clearly associated with outcome.",
    ],
    ihc: [
      "Strong S100 and SOX10 plus melanocytic markers HMB45, melan-A and tyrosinase.",
      "PRKAR1A expression is typically lost; PRAME is not expressed in the source description.",
      "Collagen IV/laminin may show increased intercellular deposition compared with melanoma, but exceptions occur.",
    ],
    molecular: [
      "PRKAR1A inactivation/loss is common and underlies many Carney complex cases; PRKAR1A loss also occurs in many apparently sporadic tumors.",
      "Unlike primary CNS melanocytoma/melanoma, GNAQ/GNA11 p.Q209, CYSLTR2 and PLCB4 mutations are generally absent; BRAF, NRAS and TERT promoter mutations are also absent in the reported series.",
      "Molecular testing may help support diagnosis and exclude melanoma/melanocytoma.",
    ],
    differential: [
      [
        "Metastatic melanoma",
        "Both express melanocytic markers; MMNST arises in association with spinal/autonomic nerves, coexpresses Schwannian markers and often loses PRKAR1A. BRAF/NRAS/TERT promoter and GNAQ/GNA11 pathway findings may help in selected cases.",
      ],
      [
        "Primary CNS melanocytoma/melanoma",
        "MMNST generally lacks GNAQ/GNA11 p.Q209, CYSLTR2 and PLCB4 alterations described in these lesions.",
      ],
      [
        "Pigmented epithelioid melanocytoma",
        "PRKAR1A loss may also occur in pigmented epithelioid melanocytoma; do not use PRKAR1A loss alone.",
      ],
      [
        "Pigmented schwannoma",
        "MMNST coexpresses melanocytic markers; ordinary schwannoma with neuromelanin-like pigment lacks more-specific melanocytic markers such as HMB45.",
      ],
    ],
    pitfalls: [
      "The former term melanotic schwannoma is not recommended; use malignant melanotic nerve sheath tumor.",
      "Psammoma bodies do not define a clinically indolent subgroup.",
      "Histologic atypia, mitoses and necrosis are not reliable predictors of outcome; metastasis may occur without malignant morphology.",
      "PRKAR1A loss is supportive but not entirely specific.",
    ],
    prognosis: [
      "Behavior is difficult to predict. Older reports suggested <15% metastatic risk, but more recent series report local recurrence/metastasis rates of 26–44%.",
      "Only approximately 53% of patients followed for >5 years remained disease-free in reported series; long-term follow-up is required.",
      "UICC/AJCC staging may be applied, although prognostic value has not been established.",
    ],
  },
];

const groups = [
  "All",
  ...Array.from(new Set(entities.map((entity) => entity.group))),
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
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PeripheralNerveSheathTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Schwannoma",
    "Neurofibroma",
    "Malignant Peripheral Nerve Sheath Tumor (MPNST)",
  ]);

  const filtered = useMemo(
    () =>
      entities.filter(
        (entity) =>
          (category === "All" || entity.group === category) &&
          [
            entity.name,
            entity.group,
            entity.behavior,
            entity.site,
            ...entity.clinical,
            ...entity.criteria,
            ...entity.morphology,
            ...entity.ihc,
            ...entity.molecular,
            ...entity.differential.flat(),
            ...entity.pitfalls,
            ...entity.prognosis,
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
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Soft Tissue Tumors / Peripheral Nerve Sheath Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Peripheral Nerve Sheath Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference covering benign
                Schwannian and perineurial neoplasms, hybrid nerve sheath
                tumors, and malignant peripheral nerve sheath tumors, with
                emphasis on essential criteria, immunophenotypic patterns, and
                practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Start with architecture and nerve relationship; then map the
                Schwannian, perineurial, axonal and melanocytic components.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Diffuse S100/SOX10 favors Schwannian differentiation, but does
                not exclude epithelioid MPNST. H3K27me3 and SMARCB1 must be
                interpreted in the correct morphologic context.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: morphology to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the setting",
                "Record superficial vs deep location, relationship to a named nerve, nerve fascicle expansion, multiplicity, NF1/schwannomatosis history and prior radiation.",
              ],
              [
                "2. Assess circumscription",
                "Encapsulated, displacing nerve fascicles favors schwannoma; unencapsulated infiltrative mixed-cell lesion with entrapped axons favors neurofibroma.",
              ],
              [
                "3. Identify the lineage",
                "Schwannian: S100/SOX10; perineurial: EMA/claudin-1/GLUT1; axons: neurofilament; stromal CD34 pattern helps separate neurofibroma from schwannoma.",
              ],
              [
                "4. Recognize atypical/malignant change",
                "In NF1 lesions, distinguish ancient/cellular neurofibroma, ANNUBP and MPNST using architecture, atypia, mitotic activity and necrosis. Interpret H3K27me3 loss carefully.",
              ],
              [
                "5. Check special patterns",
                "Consider epithelioid MPNST, melanotic nerve sheath tumor, granular cell tumor, neuromuscular choristoma and hybrid tumors when morphology or phenotype departs from conventional patterns.",
              ],
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{step[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield diagnostic criteria">
            <Bullets
              items={[
                "Schwannoma: benign tumor composed almost entirely of Schwann cells; diffuse S100/SOX10 is desirable.",
                "Neurofibroma: low-cellularity spindle-cell neoplasm in myxoid/collagenous stroma, with mixed cellular elements and entrapped axons.",
                "Perineurioma: storiform/whorled/lamellar spindle-cell lesion with bipolar processes and EMA expression.",
                "MPNST: spindle-cell sarcoma usually associated with a nerve sheath tumor or NF1; in sporadic cases, focal Schwannian differentiation and/or complete H3K27me3 loss may support the diagnosis.",
                "Epithelioid MPNST: epithelioid sarcoma with diffuse S100/SOX10; SMARCB1 loss is desirable but not specific.",
                "MMNST: coexpression of Schwannian and melanocytic markers in a variably pigmented spindle/epithelioid tumor.",
              ]}
            />
          </Panel>
          <Panel title="Critical immunophenotypic distinctions">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2 pr-3">Key phenotype</th>
                    <th className="py-2">Interpretive caution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Schwannoma",
                      "Diffuse S100/SOX10; collagen IV",
                      "CD34 usually subcapsular; axons often peripheral",
                    ],
                    [
                      "Neurofibroma",
                      "S100/SOX10 in Schwannian cells; lattice-like CD34 stroma",
                      "Mixed cell population; NFP highlights axons",
                    ],
                    [
                      "Perineurioma",
                      "EMA; often claudin-1/GLUT1",
                      "S100/SOX10 negative in lesional cells",
                    ],
                    [
                      "Conventional MPNST",
                      "S100/SOX10 often focal; H3K27me3 may be completely lost",
                      "Weak/focal or mosaic H3K27me3 is not diagnostic",
                    ],
                    [
                      "Epithelioid MPNST",
                      "Diffuse S100/SOX10; frequent INI1 loss; H3K27me3 retained",
                      "INI1 loss also occurs in benign epithelioid schwannoma",
                    ],
                    [
                      "MMNST",
                      "S100/SOX10 plus HMB45/melan-A/tyrosinase; PRKAR1A often lost",
                      "PRKAR1A loss is not entirely specific",
                    ],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 pr-3 text-slate-700">{row[1]}</td>
                      <td className="py-2 text-slate-700">{row[2]}</td>
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
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, site, immunomarker, molecular
                alteration or differential diagnosis.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Antoni A, H3K27me3, ANNUBP, INI1, PRKAR1A..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setCategory(group)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === group ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {group}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((entity) => {
              const isOpen = opened.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(entity.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {entity.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {entity.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {entity.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {entity.site}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={entity.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={entity.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={entity.morphology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={entity.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={entity.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[650px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map((item, index) => (
                                <tr key={index}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {item[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {item[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Prognosis and behavior
                        </h4>
                        <Bullets items={entity.prognosis} />
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic pitfalls
                        </h4>
                        <Bullets items={entity.pitfalls} />
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

        <Panel title="Differential diagnosis: practical decision points">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Diagnostic problem</th>
                  <th className="py-2 pr-3">Key discriminator</th>
                  <th className="py-2">Next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Encapsulated nerve-associated spindle tumor",
                    "Antoni A/B, Verocay bodies, diffuse S100/SOX10",
                    "Assess capsule, nerve displacement and axonal distribution",
                  ],
                  [
                    "Unencapsulated myxocollagenous spindle lesion",
                    "Wavy nuclei, mixed cells, lattice-like CD34, intratumoral axons",
                    "Favor neurofibroma; in NF1 lesions assess ANNUBP criteria",
                  ],
                  [
                    "Hypercellular NF1-associated nodule",
                    "Atypia, hypercellularity, architecture loss, mitotic activity and necrosis",
                    "Separate ancient/cellular neurofibroma, ANNUBP and MPNST",
                  ],
                  [
                    "Spindle tumor with EMA positivity",
                    "Storiform/whorled/lamellar pattern; S100/SOX10 negative",
                    "Consider perineurioma",
                  ],
                  [
                    "Epithelioid Schwannian malignancy",
                    "Diffuse S100/SOX10, infiltrative growth/necrosis; INI1 often lost",
                    "Distinguish epithelioid MPNST from epithelioid schwannoma and melanoma",
                  ],
                  [
                    "Pigmented nerve-associated tumor",
                    "Schwannian plus melanocytic phenotype; PRKAR1A often lost",
                    "Consider MMNST; do not infer benignity from bland histology",
                  ],
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-3 pr-3 font-semibold">{row[0]}</td>
                    <td className="py-3 pr-3 text-slate-700">{row[1]}</td>
                    <td className="py-3 text-slate-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Reporting checklist">
          <Bullets
            items={[
              "Record exact site, depth, relationship to a named nerve, nerve fascicle involvement, multiplicity and relevant syndrome/radiation history.",
              "Describe circumscription/encapsulation, growth pattern, cellularity, cytologic atypia, mitotic activity, necrosis and any heterologous differentiation.",
              "For Schwannian lesions, report S100/SOX10 distribution; for perineurial differentiation, EMA/claudin-1/GLUT1; document NFP-positive axons when relevant.",
              "In NF1-associated neurofibromatous lesions, explicitly assess the four ANNUBP features and distinguish them from MPNST.",
              "For suspected conventional MPNST, describe the extent of S100/SOX10 staining and whether H3K27me3 loss is complete with appropriate internal controls.",
              "For epithelioid MPNST, assess INI1/SMARCB1 and exclude melanoma; for MMNST, document melanocytic coexpression and PRKAR1A status when tested.",
              "Document margins and relevant staging for malignant tumors; UICC/AJCC TNM may be used for MPNST and epithelioid MPNST.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <strong className="text-slate-700">Scope note:</strong> This reference
          is based on the supplied WHO excerpt, which covers schwannoma,
          neurofibroma, perineurioma, granular cell tumor, dermal nerve sheath
          myxoma, solitary circumscribed neuroma, ectopic
          meningioma/meningothelial hamartoma, neuromuscular choristoma, hybrid
          nerve sheath tumor, conventional and epithelioid MPNST, and malignant
          melanotic nerve sheath tumor. The source provides limited detail for
          some rare entities; those limitations are preserved rather than filled
          with unsupported diagnostic criteria.
        </footer>
      </div>
    </main>
  );
}
