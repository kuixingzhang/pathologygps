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
  molecular: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Schwannoma",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "A circumscribed Schwann-cell neoplasm with Antoni A/B areas, Verocay bodies, and diffuse S100/SOX10.",
    summary:
      "A benign nerve sheath tumor composed entirely or almost entirely of differentiated neoplastic Schwann cells.",
    clinical: [
      "Usually adults in the fourth to sixth decades; no consistent sex predilection.",
      "Common in vestibular nerve, spinal nerve roots, and peripheral nerves of the head, neck, and extremities.",
      "Typically a slow-growing, painless mass; vestibular lesions may cause hearing loss and vertigo, while spinal lesions may cause radicular symptoms.",
      "Multiple tumors or bilateral vestibular schwannomas should prompt evaluation for NF2-related schwannomatosis or another schwannomatosis syndrome.",
    ],
    criteria: [
      "Well-circumscribed, usually encapsulated Schwann-cell neoplasm.",
      "Conventional tumors show alternating Antoni A and Antoni B areas; Verocay bodies may be present.",
      "Diffuse S100 and SOX10 expression supports Schwannian differentiation.",
      "Degenerative atypia alone does not indicate malignancy.",
    ],
    histology: [
      "Antoni A areas are compact, composed of spindle cells with tapered nuclei and eosinophilic cytoplasm.",
      "Verocay bodies consist of nuclear palisades separated by aligned cell processes.",
      "Antoni B areas are hypocellular and loosely textured, often with microcystic change and foamy histiocytes.",
      "Thick-walled hyalinized vessels and peripheral lymphoid aggregates are useful architectural clues.",
      "Ancient change produces scattered bizarre degenerative nuclei, often with hyalinization or ischemic change.",
      "Cellular schwannoma is predominantly Antoni A, often hypercellular and mitotically active, but retains circumscription and other schwannoma features.",
      "Plexiform schwannoma forms multinodular or plexiform growth, often in dermis or subcutis.",
      "Epithelioid schwannoma contains lobules or nests of epithelioid cells in myxoid or hyalinized stroma; a subset loses INI1.",
      "Microcystic/reticular schwannoma shows an interconnected network of bland cells in myxoid or collagenous stroma.",
    ],
    ihc: [
      "S100 and SOX10 are usually diffuse and strong in tumor cells.",
      "GFAP is variable and less sensitive than S100/SOX10.",
      "CD34 may highlight subcapsular stromal cells but is not usually diffusely expressed by the neoplastic Schwann cells.",
      "Neurofilament highlights entrapped axons, often concentrated at the periphery.",
      "EMA highlights perineurial cells in the capsule.",
      "INI1 is lost in a subset of epithelioid schwannomas.",
    ],
    differential: [
      {
        name: "Neurofibroma",
        distinction:
          "Neurofibroma is usually unencapsulated and infiltrative, with mixed cell populations and intralesional axons; schwannoma is more uniform and diffusely S100/SOX10-positive.",
      },
      {
        name: "Perineurioma",
        distinction:
          "Perineurioma is EMA/GLUT1/claudin-1-positive and usually S100/SOX10-negative.",
      },
      {
        name: "Hybrid nerve sheath tumor",
        distinction:
          "Hybrid tumors contain two recognizable nerve sheath differentiation patterns rather than a nearly pure Schwann-cell population.",
      },
      {
        name: "Malignant peripheral nerve sheath tumor",
        distinction:
          "MPNST typically shows destructive infiltration, significant atypia, brisk mitoses and/or necrosis, with absent or only focal S100/SOX10; retained H3K27me3 does not exclude MPNST.",
      },
      {
        name: "Malignant melanotic nerve sheath tumor",
        distinction:
          "MMNST is pigmented and expresses melanocytic markers in addition to Schwannian markers, usually with PRKAR1A loss.",
      },
    ],
    molecular: [
      "NF2 inactivation and chromosome 22q loss are common but not specific.",
      "LATS1, LATS2, ARID1A, ARID1B, and DDR1 alterations occur in subsets.",
      "A recurrent SH3PXD2A::HTRA1 fusion is present in a minority of cases.",
      "Germline NF2, SMARCB1, or LZTR1 alterations may underlie multiple tumors.",
    ],
    pitfalls: [
      "Cellular schwannoma may mimic MPNST; assess the capsule, lymphoid aggregates, hyalinized vessels, Schwannian whorls, and overall architecture.",
      "Do not equate degenerative nuclear pleomorphism with malignant transformation.",
    ],
  },
  {
    name: "Neurofibroma",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "An unencapsulated, mixed-cell nerve sheath lesion with wavy nuclei, myxoid matrix, collagen bundles, and entrapped axons.",
    summary:
      "A benign peripheral nerve sheath tumor composed of neoplastic Schwann cells admixed with non-neoplastic stromal and perineurial elements.",
    clinical: [
      "Occurs at any age; cutaneous lesions often emerge in childhood or adolescence in NF1.",
      "Most commonly dermal or subcutaneous; deep lesions may involve major nerves, plexuses, spinal roots, or dorsal root ganglia.",
      "Usually presents as a soft, painless mass; deep lesions may cause sensory or motor symptoms.",
      "Multiple cutaneous tumors, plexiform growth, or massive soft-tissue involvement strongly suggests NF1.",
    ],
    criteria: [
      "Bland spindle cells with thin, wavy nuclei in a loose myxoid to collagenous stroma.",
      "Mixed cellular composition, including Schwann cells, fibroblastic cells, perineurial cells, and mast cells.",
      "Usually unencapsulated, with infiltration of the parent nerve or adjacent soft tissue.",
      "Plexiform neurofibroma involves multiple nerve fascicles, each outlined by perineurium.",
      "ANNUBP requires at least two defined worrisome histologic features and must be distinguished from ordinary degenerative atypia.",
    ],
    histology: [
      "The tumor is composed of slender spindle cells with wavy, comma-shaped, or serpentine nuclei.",
      "The background is variably myxoid with characteristic wiry or shredded-carrot collagen bundles.",
      "Mast cells and CD34-positive stromal cells are commonly admixed.",
      "Intraneural lesions expand individual fascicles; plexiform lesions expand multiple fascicles in a multinodular, rope-like pattern.",
      "Diffuse neurofibroma may form plaque-like dermal and subcutaneous infiltrates.",
      "Ancient neurofibroma shows scattered bizarre nuclei without hypercellularity, architectural loss, or increased mitotic activity.",
      "Cellular neurofibroma is hypercellular but lacks the uniform atypia and mitotic activity expected in MPNST.",
      "ANNUBP shows at least two of: cytologic atypia, hypercellularity, loss of neurofibroma architecture, or increased mitotic activity above the specified threshold but below that of MPNST.",
    ],
    ihc: [
      "S100 and SOX10 highlight the Schwann-cell component, usually less uniformly than in schwannoma.",
      "CD34 highlights a lattice-like network of stromal cells.",
      "EMA and GLUT1 highlight scattered perineurial cells and the perineurial boundaries of nerve fascicles.",
      "Neurofilament highlights axons traversing the lesion.",
      "H3K27me3 is generally retained in neurofibroma and ANNUBP; loss supports MPNST in the appropriate setting.",
      "Complete loss of p16 in a suspicious focus may support progression toward ANNUBP or MPNST.",
    ],
    differential: [
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is usually encapsulated, composed almost entirely of Schwann cells, and diffusely S100/SOX10-positive; neurofibroma is mixed-cell and commonly contains axons.",
      },
      {
        name: "Perineurioma",
        distinction:
          "Perineurioma shows a dominant EMA/GLUT1/claudin-1-positive perineurial population and lacks the Schwann-cell-rich mixed pattern.",
      },
      {
        name: "Hybrid nerve sheath tumor",
        distinction:
          "Hybrid lesions contain discrete or intermingled components with two nerve sheath phenotypes, often including schwannomatous nodules.",
      },
      {
        name: "ANNUBP",
        distinction:
          "ANNUBP has at least two worrisome features such as atypia, hypercellularity, architectural loss, or increased mitotic activity; ordinary neurofibroma does not.",
      },
      {
        name: "Malignant peripheral nerve sheath tumor",
        distinction:
          "MPNST shows overt malignant cytology, destructive growth, brisk mitoses and/or necrosis; H3K27me3 loss and complex genomic alterations may support the diagnosis.",
      },
    ],
    molecular: [
      "Biallelic NF1 inactivation is the central molecular event in conventional neurofibroma.",
      "ANNUBP commonly shows CDKN2A and/or CDKN2B deletion.",
      "SUZ12 or EED inactivation and associated H3K27me3 loss support MPNST rather than neurofibroma or ANNUBP.",
    ],
    pitfalls: [
      "Scattered bizarre nuclei without other worrisome features represent degenerative atypia, not ANNUBP.",
      "A plexiform neurofibroma is highly associated with NF1 and carries increased risk for progression to MPNST.",
    ],
  },
  {
    name: "Perineurioma",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "Perineurial differentiation: EMA, GLUT1, and claudin-1 positivity with absent S100/SOX10 in tumor cells.",
    summary:
      "A benign neoplasm composed of perineurial cells, occurring as intraneural or soft-tissue forms.",
    clinical: [
      "Intraneural lesions typically affect adolescents and young adults, usually in nerves of the extremities; cranial nerve involvement is rare.",
      "Soft-tissue lesions occur most often in middle-aged adults and may arise in deep soft tissue without an identifiable nerve association.",
      "Intraneural lesions cause slowly progressive weakness, sometimes with muscle atrophy; soft-tissue lesions present as a mass.",
    ],
    criteria: [
      "Intraneural type shows concentric perineurial cell proliferation around axons, forming pseudo-onion bulbs.",
      "Soft-tissue type shows bland spindle cells in storiform, whorled, or reticular patterns.",
      "Tumor cells express perineurial markers and lack Schwannian markers.",
      "Mitoses are rare and necrosis is generally absent.",
    ],
    histology: [
      "Intraneural perineurioma expands nerve fascicles with concentric layers of perineurial cells around individual axons.",
      "Pseudo-onion-bulb structures are most apparent in cross-section.",
      "Advanced lesions may show marked separation or loss of axons and myelin within the expanded fascicles.",
      "Soft-tissue perineurioma comprises slender spindle cells with tapering nuclei and delicate bipolar processes.",
      "Soft-tissue lesions commonly show storiform or whorled architecture in collagenous stroma.",
      "Reticular and sclerosing patterns are uncommon morphologic variants.",
    ],
    ihc: [
      "EMA is positive, ranging from focal/weak to strong/diffuse.",
      "Claudin-1 and GLUT1 are commonly positive.",
      "CD34 is positive in a subset of soft-tissue perineuriomas.",
      "S100, SOX10, and GFAP are negative in the neoplastic perineurial cells.",
    ],
    differential: [
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and may show Antoni A/B areas; perineurioma is EMA/GLUT1/claudin-1-positive.",
      },
      {
        name: "Neurofibroma",
        distinction:
          "Neurofibroma contains a mixed population with Schwannian cells, axons, mast cells, and CD34-positive stroma; perineurioma shows a dominant perineurial phenotype.",
      },
      {
        name: "Hybrid nerve sheath tumor",
        distinction:
          "Hybrid tumors demonstrate both perineurial and Schwannian or neurofibromatous components.",
      },
      {
        name: "Low-grade fibromyxoid sarcoma",
        distinction:
          "A malignant fibroblastic tumor with characteristic alternating fibrous and myxoid zones and MUC4 expression; perineurioma lacks this profile.",
      },
    ],
    molecular: [
      "Intraneural perineuriomas frequently harbor TRAF7 missense mutations.",
      "Soft-tissue perineuriomas may show chromosome 22q, 17q11, or 2p deletions; sclerosing lesions may have 10q alterations.",
    ],
  },
  {
    name: "Hybrid Nerve Sheath Tumor",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "A benign nerve sheath neoplasm with two distinct differentiation patterns, most often schwannoma/perineurioma.",
    summary:
      "A benign peripheral nerve sheath tumor combining features of schwannoma, neurofibroma, and/or perineurioma.",
    clinical: [
      "Occurs over a broad age range, with a peak in young adults and no consistent sex predilection.",
      "Usually dermal or subcutaneous in the extremities; cranial nerve and spinal nerve examples are uncommon.",
      "Typically a painless, slowly growing mass; nerve-associated lesions may cause pain or neurologic symptoms.",
      "Hybrid neurofibroma/schwannoma is associated with NF1, NF2-related schwannomatosis, and other schwannomatosis settings.",
    ],
    criteria: [
      "Demonstrate two recognizable nerve sheath differentiation patterns within one tumor.",
      "Schwannoma/perineurioma contains S100/SOX10-positive Schwannian areas and EMA/GLUT1/claudin-1-positive perineurial areas.",
      "Neurofibroma/schwannoma combines a mixed neurofibromatous background with monomorphic schwannomatous nodules.",
      "Neurofibroma/perineurioma combines neurofibromatous areas with perineurial differentiation.",
      "Mitoses are generally rare and malignant features are absent.",
    ],
    histology: [
      "Schwannoma/perineurioma shows fascicular or storiform growth with plump Schwann cells admixed with slender perineurial cells.",
      "The two components may be intermingled or arranged as separate nodules.",
      "Neurofibroma/schwannoma may show discrete schwannomatous nodules within a neurofibroma or Schwann-cell bundles dispersed in a myxoid background.",
      "Neurofibroma/perineurioma may show plexiform neurofibroma with focal perineurial areas that are subtle on H&E.",
      "Degenerative nuclear atypia may occur without indicating malignancy.",
    ],
    ihc: [
      "Schwannian areas express S100 and SOX10.",
      "Perineurial areas express EMA, claudin-1, and GLUT1.",
      "Neurofibromatous areas show a mixed profile, including Schwannian cells, CD34-positive stromal cells, and scattered perineurial cells.",
      "Neurofilament may highlight entrapped axons in neurofibromatous components.",
    ],
    differential: [
      {
        name: "Schwannoma",
        distinction:
          "A conventional schwannoma is nearly entirely Schwannian and lacks a substantial second perineurial or neurofibromatous component.",
      },
      {
        name: "Neurofibroma",
        distinction:
          "A conventional neurofibroma has a mixed-cell composition but lacks discrete, well-developed schwannomatous nodules or a distinct perineurioma component.",
      },
      {
        name: "Perineurioma",
        distinction:
          "A conventional perineurioma is dominated by perineurial differentiation without a substantial Schwannian or neurofibromatous component.",
      },
      {
        name: "Malignant peripheral nerve sheath tumor",
        distinction:
          "Hybrid benign tumors lack destructive invasion, significant mitotic activity, and tumor necrosis.",
      },
    ],
    molecular: [
      "A subset of neurofibroma/schwannoma hybrid tumors harbors activating ERBB2 mutations.",
      "The molecular profile depends on the component and clinical setting; testing is not routinely required for diagnosis.",
    ],
  },
  {
    name: "Malignant Melanotic Nerve Sheath Tumor",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "A pigmented Schwannian neoplasm expressing melanocytic markers, commonly with PRKAR1A loss; biologically malignant despite bland areas.",
    summary:
      "A distinct malignant nerve sheath tumor with Schwannian and melanocytic differentiation, often arising near the spinal or autonomic nerves.",
    clinical: [
      "Usually adults; patients with Carney complex tend to present at a younger age.",
      "Typically arises along spinal nerve roots or autonomic nerves near the midline; other visceral and soft-tissue sites occur.",
      "May present with pain, sensory symptoms, or mass effect; metastatic disease can cause systemic symptoms.",
      "A subset is associated with Carney complex; psammomatous and non-psammomatous forms have similar clinical significance.",
    ],
    criteria: [
      "Neoplasm composed of pigmented cells with combined Schwannian and melanocytic differentiation.",
      "S100/SOX10 and melanocytic markers are typically expressed.",
      "Loss of PRKAR1A expression is a strong diagnostic clue.",
      "Recognize malignant potential even when cytologic atypia and mitotic activity are limited.",
    ],
    histology: [
      "Tumor cells grow in short fascicles, nests, sheets, or syncytial groups.",
      "Cells range from polygonal to spindle-shaped and contain abundant coarse or finely granular melanin pigment.",
      "Less pigmented areas reveal round to oval nuclei, occasional grooves or pseudoinclusions, and eosinophilic to amphophilic cytoplasm.",
      "Psammoma bodies are present in approximately half of cases but may require extensive sampling.",
      "Necrosis, mitoses, and marked atypia may occur but do not reliably predict behavior.",
    ],
    ihc: [
      "S100 and SOX10 are usually positive.",
      "HMB45, Melan-A, and tyrosinase support melanocytic differentiation.",
      "PRKAR1A expression is typically lost.",
      "Collagen IV and laminin may show prominent intercellular deposition.",
    ],
    differential: [
      {
        name: "Schwannoma",
        distinction:
          "Conventional schwannoma lacks the diffuse melanocytic phenotype and typically retains PRKAR1A; pigment alone is not sufficient for MMNST.",
      },
      {
        name: "Melanoma",
        distinction:
          "Melanoma may express melanocytic markers but usually lacks the characteristic Schwannian context and PRKAR1A-loss pattern; correlate with site and molecular findings.",
      },
      {
        name: "Clear cell sarcoma",
        distinction:
          "Clear cell sarcoma is typically associated with EWSR1::ATF1 or EWSR1::CREB1 fusion and usually lacks the nerve-associated/PRKAR1A-deficient profile.",
      },
      {
        name: "Melanotic paraganglioma",
        distinction:
          "Paraganglioma shows neuroendocrine chief-cell differentiation with chromogranin/synaptophysin and sustentacular cells; MMNST is Schwannian and melanocytic.",
      },
    ],
    molecular: [
      "PRKAR1A inactivation is present in most tumors and can be assessed by immunohistochemistry.",
      "A distinct DNA methylation profile separates MMNST from conventional schwannoma and melanoma.",
      "GNAQ/GNA11 and BRAF/NRAS/TERT promoter mutations are generally absent; these findings may help exclude melanocytic mimics.",
    ],
    pitfalls: [
      "The historical term melanotic schwannoma is discouraged because it understates the malignant potential.",
      "Absence of psammoma bodies does not exclude the diagnosis.",
    ],
  },
  {
    name: "Malignant Peripheral Nerve Sheath Tumor",
    group: "Peripheral Nerve Sheath Tumors",
    clue: "An infiltrative malignant spindle-cell neoplasm, often NF1-associated; H3K27me3 loss and PRC2-pathway alterations are supportive.",
    summary:
      "A malignant peripheral nerve sheath tumor arising from a nerve, a pre-existing nerve sheath tumor, or in association with NF1.",
    clinical: [
      "Most often affects adults aged 20–50 years; NF1-associated tumors occur at a younger age.",
      "Common sites include extremities, trunk, head and neck, and paraspinal regions.",
      "Usually presents as an enlarging deep mass, often painful or associated with neuropathic symptoms.",
      "Approximately half are associated with NF1; prior radiation is a recognized risk factor.",
    ],
    criteria: [
      "Malignant spindle-cell neoplasm with a compatible nerve association, precursor neurofibroma, or NF1 context.",
      "Conventional high-grade tumors show hypercellularity, cytologic atypia, brisk mitotic activity, and often necrosis.",
      "Schwannian markers are often absent or only focally expressed.",
      "H3K27me3 loss supports conventional MPNST but is not present in all cases.",
      "Epithelioid MPNST is a distinct morphologic subtype, usually with diffuse S100/SOX10 and SMARCB1 loss.",
    ],
    histology: [
      "Conventional MPNST is composed of hypercellular intersecting fascicles of atypical spindle cells with wavy or buckled nuclei.",
      "Alternating hypercellular and hypocellular zones may produce a marbled appearance.",
      "Perivascular hypercellularity and tumor cell herniation into vessel lumina are characteristic clues.",
      "Brisk mitotic activity and geographic tumor necrosis are common in high-grade tumors.",
      "Divergent differentiation may include rhabdomyoblastic, cartilaginous, osseous, or epithelial elements.",
      "Epithelioid MPNST comprises lobules or sheets of epithelioid cells with abundant eosinophilic cytoplasm and prominent nucleoli.",
      "Perineurial MPNST is exceptionally rare and shows malignant spindle cells with perineurial differentiation.",
    ],
    ihc: [
      "S100 and SOX10 are negative or only patchy in most conventional MPNSTs.",
      "H3K27me3 is completely lost in approximately half to most conventional high-grade tumors; internal non-neoplastic controls must be retained.",
      "Neurofibromin loss may support NF1 pathway inactivation, although a widely reliable commercial antibody is not available.",
      "Epithelioid MPNST is usually diffusely positive for S100 and SOX10 and loses INI1/SMARCB1.",
      "Epithelioid MPNST generally retains H3K27me3.",
      "Perineurial MPNST may express EMA and variably CD34 while lacking S100.",
    ],
    differential: [
      {
        name: "Neurofibroma / ANNUBP",
        distinction:
          "ANNUBP has limited worrisome features and does not meet criteria for MPNST; overt malignant atypia, mitotic activity, necrosis, and complex genomic changes favor MPNST.",
      },
      {
        name: "Cellular schwannoma",
        distinction:
          "Cellular schwannoma is usually circumscribed and retains Schwannian architecture, subcapsular lymphocytes, hyalinized vessels, and H3K27me3.",
      },
      {
        name: "Synovial sarcoma",
        distinction:
          "Synovial sarcoma is supported by SS18::SSX fusion and usually shows epithelial marker expression; nerve association and H3K27me3 loss may favor MPNST.",
      },
      {
        name: "Leiomyosarcoma",
        distinction:
          "Leiomyosarcoma shows smooth-muscle morphology and expression of desmin, SMA, and h-caldesmon.",
      },
      {
        name: "Epithelioid MPNST",
        distinction:
          "Epithelioid MPNST has epithelioid morphology, diffuse S100/SOX10, and frequent INI1 loss; conventional MPNST is usually spindle-cell and often loses H3K27me3.",
      },
      {
        name: "Malignant melanotic nerve sheath tumor",
        distinction:
          "MMNST is heavily pigmented and expresses melanocytic markers with PRKAR1A loss.",
      },
    ],
    molecular: [
      "Conventional MPNST commonly shows NF1 and CDKN2A/CDKN2B inactivation followed by SUZ12 or EED inactivation.",
      "SUZ12/EED loss disrupts PRC2 and leads to H3K27me3 loss.",
      "Complex copy-number alterations and oncogene amplifications may be present.",
      "Epithelioid MPNST is usually driven by SMARCB1 inactivation and has a molecular profile distinct from conventional MPNST.",
    ],
    pitfalls: [
      "H3K27me3 retention does not exclude MPNST, particularly in paraspinal tumors and epithelioid MPNST.",
      "A small biopsy may sample only a low-grade precursor component; correlate with imaging and target the most suspicious region.",
    ],
  },
  {
    name: "Cauda Equina Neuroendocrine Tumor",
    group: "Cauda Equina Neuroendocrine Tumors",
    clue: "A well-circumscribed intradural cauda equina tumor with Zellballen architecture, neuroendocrine chief cells, and sustentacular cells.",
    summary:
      "A neuroendocrine neoplasm of the filum terminale or cauda equina region, biologically distinct from paragangliomas elsewhere.",
    clinical: [
      "Usually adults in the fourth to sixth decades, with a slight male predominance.",
      "Typically arises intradurally from the filum terminale or a cauda equina nerve root.",
      "Common presentations include low-back pain and sciatica; sensory, motor, or sphincter symptoms are less common.",
      "Functional hormone secretion is extremely rare.",
    ],
    criteria: [
      "Well-differentiated neuroendocrine tumor composed of chief cells in nests or Zellballen.",
      "A delicate sustentacular cell network surrounds tumor nests.",
      "Chief cells express neuroendocrine markers; sustentacular cells are highlighted by S100 and/or SOX10.",
      "Anatomic location and morphology are essential because the entity is distinct from conventional extra-spinal paraganglioma.",
    ],
    histology: [
      "Chief cells form nests, lobules, trabeculae, or pseudorosettes in a delicate vascular network.",
      "Tumor cells are round or polygonal with finely stippled chromatin and inconspicuous nucleoli.",
      "Cytoplasm is eosinophilic and granular, but may be amphophilic or clear.",
      "A single layer of attenuated sustentacular cells may be difficult to appreciate on H&E.",
      "Gangliocytic examples contain mature ganglion cells and a Schwannian component.",
      "Ependymoma-like perivascular arrangements and carcinoid-like patterns may occur.",
      "Hemorrhage, scattered mitoses, and degenerative pleomorphism do not by themselves establish aggressive behavior.",
    ],
    ihc: [
      "Chief cells express synaptophysin and chromogranin; INSM1 may also be positive.",
      "S100 and SOX10 highlight sustentacular cells, which may be sparse or discontinuous.",
      "Cytokeratin expression is common and does not exclude this diagnosis.",
      "HOXB13 expression supports cauda equina origin in the appropriate context.",
    ],
    differential: [
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and lacks a chief-cell neuroendocrine population expressing chromogranin and synaptophysin.",
      },
      {
        name: "Myxopapillary ependymoma",
        distinction:
          "Myxopapillary ependymoma shows perivascular pseudorosettes and myxoid papillary cores; dot-like or ring-like EMA and GFAP support ependymal differentiation.",
      },
      {
        name: "Conventional paraganglioma",
        distinction:
          "Both may show Zellballen, but cauda equina tumors are typically HOXB13-positive and lack the usual hereditary paraganglioma molecular profile.",
      },
      {
        name: "Metastatic neuroendocrine tumor",
        distinction:
          "Correlate with clinical history and imaging; a filum/cauda equina-centered intradural mass and HOXB13 expression favor the primary cauda equina entity.",
      },
    ],
    molecular: [
      "HOXB13 overexpression is characteristic and supports the distinctive developmental origin.",
      "The recurrent molecular drivers remain incompletely defined.",
      "The usual SDHx-associated alterations of hereditary extra-CNS paragangliomas are not characteristic.",
    ],
  },
  {
    name: "Adamantinomatous Craniopharyngioma",
    group: "Craniopharyngiomas",
    clue: "Biphasic epithelial tumor with peripheral palisading, stellate reticulum, wet keratin, and nuclear/cytoplasmic beta-catenin accumulation.",
    summary:
      "A WHO grade 1 epithelial tumor of the sellar/suprasellar region, often cystic and locally adherent to critical structures.",
    clinical: [
      "Bimodal age distribution, with peaks in children and adults, without a strong sex predilection.",
      "Arises in the sellar and suprasellar region, often involving the hypothalamus and third ventricular floor.",
      "Common symptoms include visual disturbance, headache, growth failure, and endocrine dysfunction.",
      "Cyst fluid may be rich in cholesterol and appear oily or machine-oil-like.",
    ],
    criteria: [
      "Epithelial nests or cords with peripheral palisading and stellate reticulum-like central cells.",
      "Wet keratin nodules are a highly characteristic feature.",
      "Calcification and cyst formation are common.",
      "Nuclear and cytoplasmic beta-catenin accumulation supports the diagnosis.",
    ],
    histology: [
      "Tumor forms cords, trabeculae, and lobules of stratified squamous epithelium.",
      "Peripheral palisading of columnar cells surrounds loosely cohesive stellate reticulum-like cells.",
      "Wet keratin consists of compact, eosinophilic, anucleate squamous debris.",
      "Cholesterol clefts, foreign-body giant cells, calcification, and hemosiderin may be prominent.",
      "Reactive gliosis and inflammation may occur at the tumor-brain interface.",
    ],
    ihc: [
      "Broad-spectrum cytokeratins highlight the epithelial component.",
      "Beta-catenin shows nuclear and cytoplasmic accumulation in clusters of tumor cells, often in whorled areas.",
      "CK5/6 and p63/p40 support squamous epithelial differentiation.",
      "BRAF V600E is not a feature of this subtype.",
    ],
    differential: [
      {
        name: "Papillary craniopharyngioma",
        distinction:
          "Papillary craniopharyngioma is composed of nonkeratinizing squamous epithelium on fibrovascular cores and usually harbors BRAF V600E; it lacks wet keratin and stellate reticulum.",
      },
      {
        name: "Rathke cleft cyst",
        distinction:
          "Rathke cleft cyst is lined by ciliated cuboidal/columnar or mucinous epithelium and lacks invasive epithelial nests, wet keratin, and beta-catenin nuclear accumulation.",
      },
      {
        name: "Pituitary neuroendocrine tumor",
        distinction:
          "PitNET is a neuroendocrine neoplasm expressing pituitary lineage transcription factors and hormones rather than squamous epithelium.",
      },
      {
        name: "Epidermoid cyst",
        distinction:
          "Epidermoid cyst is lined by mature stratified squamous epithelium with lamellated keratin but lacks the characteristic biphasic architecture and wet keratin nodules.",
      },
    ],
    molecular: [
      "CTNNB1 activating mutations drive WNT/beta-catenin pathway activation.",
      "Nuclear beta-catenin accumulation is a useful immunohistochemical surrogate for CTNNB1 pathway activation.",
    ],
    pitfalls: [
      "Small biopsies may contain only squamous epithelium or keratin; correlate with imaging and seek the characteristic epithelial architecture.",
      "Reactive gliosis at the interface should not be mistaken for infiltrative glioma.",
    ],
  },
  {
    name: "Papillary Craniopharyngioma",
    group: "Craniopharyngiomas",
    clue: "Nonkeratinizing squamous epithelium arranged around fibrovascular cores; BRAF V600E is characteristic.",
    summary:
      "A WHO grade 1 epithelial tumor of the sellar/suprasellar region, typically occurring in adults.",
    clinical: [
      "Usually adults, with a peak in middle age; no strong sex predilection.",
      "Typically arises in the sellar/suprasellar region and may cause visual, endocrine, or hypothalamic symptoms.",
      "Often presents as a solid or mixed solid-cystic mass.",
    ],
    criteria: [
      "Papillary architecture with nonkeratinizing stratified squamous epithelium covering fibrovascular cores.",
      "No wet keratin or stellate reticulum-like component.",
      "BRAF V600E mutation is a defining molecular feature in most cases.",
    ],
    histology: [
      "Delicate fibrovascular cores are covered by multilayered, nonkeratinizing squamous epithelium.",
      "Tumor cells have relatively uniform nuclei and eosinophilic cytoplasm.",
      "The epithelium may show a basal palisaded layer but lacks the classic adamantinomatous stellate reticulum.",
      "Wet keratin, prominent calcification, and cholesterol-rich cyst contents are generally absent.",
    ],
    ihc: [
      "Cytokeratins highlight the squamous epithelium.",
      "BRAF VE1 immunohistochemistry typically shows strong cytoplasmic staining in tumor cells.",
      "Beta-catenin lacks the characteristic nuclear accumulation seen in adamantinomatous craniopharyngioma.",
    ],
    differential: [
      {
        name: "Adamantinomatous craniopharyngioma",
        distinction:
          "Adamantinomatous tumors show peripheral palisading, stellate reticulum, wet keratin, calcification, and CTNNB1/beta-catenin pathway activation.",
      },
      {
        name: "Squamous metaplasia of Rathke cleft cyst",
        distinction:
          "Metaplastic Rathke cleft cyst retains cyst lining and may show cilia or mucinous epithelium; it lacks the characteristic papillary fibrovascular architecture and BRAF V600E.",
      },
      {
        name: "Pituitary neuroendocrine tumor",
        distinction:
          "PitNET shows neuroendocrine morphology and pituitary lineage markers rather than a papillary squamous epithelial proliferation.",
      },
    ],
    molecular: [
      "BRAF V600E is present in the great majority of papillary craniopharyngiomas.",
      "BRAF VE1 immunohistochemistry can serve as a useful surrogate; molecular confirmation is appropriate when staining is equivocal.",
    ],
  },
  {
    name: "Pituicytoma",
    group: "Other Sellar Tumors",
    clue: "A circumscribed spindle-cell sellar tumor with strong nuclear TTF1 and variable S100; usually lacks pituitary hormones.",
    summary:
      "A low-grade tumor of specialized glial cells of the neurohypophysis and infundibulum.",
    clinical: [
      "Usually adults in the fourth to sixth decades; slight male predominance in some series.",
      "Arises in the posterior pituitary, pituitary stalk, or infundibulum.",
      "Often presents with visual symptoms, headache, or endocrine dysfunction due to mass effect.",
    ],
    criteria: [
      "Well-circumscribed spindle-cell neoplasm with fascicular or storiform architecture.",
      "Tumor cells show strong nuclear TTF1 expression.",
      "Pituitary hormones and pituitary lineage transcription factors are generally absent.",
    ],
    histology: [
      "Bland spindle cells form interlacing fascicles or a storiform pattern.",
      "Cells have elongated nuclei, inconspicuous nucleoli, and eosinophilic cytoplasm.",
      "A rich vascular network may be present.",
      "Mitoses are rare and necrosis is generally absent.",
    ],
    ihc: [
      "TTF1 shows strong nuclear staining and is the key lineage marker.",
      "S100 is commonly positive; GFAP is variable.",
      "EMA may be focal.",
      "Pituitary hormones and PIT1, TPIT, and SF1 are negative.",
    ],
    differential: [
      {
        name: "Spindle cell oncocytoma",
        distinction:
          "Spindle cell oncocytoma is also TTF1-positive but has abundant granular eosinophilic oncocytic cytoplasm and strong mitochondrial marker expression.",
      },
      {
        name: "Granular cell tumor of the sellar region",
        distinction:
          "Granular cell tumor shows sheets of large cells with abundant PAS-positive granular cytoplasm rather than fascicular spindle-cell architecture.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Schwannoma is diffusely S100/SOX10-positive and typically lacks nuclear TTF1.",
      },
      {
        name: "Pituitary neuroendocrine tumor",
        distinction:
          "PitNET expresses pituitary lineage transcription factors and often hormones; pituicytoma is TTF1-positive and pituitary hormone-negative.",
      },
    ],
    molecular: [
      "No recurrent defining molecular alteration is established for routine diagnosis.",
      "DNA methylation profiling may support classification in difficult cases.",
    ],
  },
  {
    name: "Granular Cell Tumor of the Sellar Region",
    group: "Other Sellar Tumors",
    clue: "A TTF1-positive posterior pituitary tumor composed of large cells with abundant PAS-positive granular cytoplasm.",
    summary:
      "A low-grade neoplasm of neurohypophyseal pituicytes with prominent lysosome-rich granular cytoplasm.",
    clinical: [
      "Usually adults, often in middle age; no consistent sex predilection.",
      "Typically arises in the posterior pituitary or pituitary stalk.",
      "May cause visual field defects, headache, hypopituitarism, or hyperprolactinemia from stalk compression.",
    ],
    criteria: [
      "Sheets or nests of large polygonal cells with abundant finely granular eosinophilic cytoplasm.",
      "Granules are PAS-positive and diastase-resistant.",
      "Nuclear TTF1 supports neurohypophyseal pituicyte lineage.",
    ],
    histology: [
      "Tumor is composed of large polygonal cells in sheets, nests, or broad trabeculae.",
      "Cytoplasm is abundant, finely granular, and eosinophilic.",
      "Nuclei are round to oval, usually bland, with inconspicuous nucleoli.",
      "PAS-positive, diastase-resistant cytoplasmic granules correspond to lysosomes.",
      "A delicate vascular network may be present; mitoses are usually rare.",
    ],
    ihc: [
      "TTF1 shows nuclear positivity.",
      "S100 is variable and often focal.",
      "CD68 and other lysosomal markers highlight granular cytoplasm.",
      "Pituitary hormones and pituitary lineage transcription factors are generally negative.",
    ],
    differential: [
      {
        name: "Pituicytoma",
        distinction:
          "Pituicytoma is a spindle-cell fascicular tumor; granular cell tumor is composed of large polygonal cells with PAS-positive granular cytoplasm.",
      },
      {
        name: "Spindle cell oncocytoma",
        distinction:
          "Spindle cell oncocytoma has spindle or epithelioid cells with dense oncocytic cytoplasm and strong mitochondrial marker expression.",
      },
      {
        name: "Metastatic renal cell carcinoma",
        distinction:
          "Metastatic RCC may have clear or granular cytoplasm and a rich vascular pattern but expresses epithelial markers and renal lineage markers rather than TTF1.",
      },
      {
        name: "Conventional granular cell tumor",
        distinction:
          "Conventional granular cell tumor is usually S100/SOX10-positive and TTF1-negative, unlike the sellar neurohypophyseal tumor.",
      },
    ],
    molecular: [
      "No recurrent defining molecular alteration is established for routine diagnosis.",
      "TTF1 expression is a useful lineage surrogate rather than a specific molecular alteration.",
    ],
  },
  {
    name: "Spindle Cell Oncocytoma",
    group: "Other Sellar Tumors",
    clue: "A TTF1-positive sellar tumor with spindle/epithelioid cells, abundant oncocytic cytoplasm, and mitochondrial enrichment.",
    summary:
      "A rare oncocytic neoplasm of the anterior pituitary region, thought to arise from folliculostellate cells.",
    clinical: [
      "Usually adults in the fourth to sixth decades; no consistent sex predilection.",
      "Typically arises in the sellar region, often attached to the anterior pituitary or stalk.",
      "Presents with headache, visual impairment, or endocrine dysfunction due to mass effect.",
    ],
    criteria: [
      "Spindle or epithelioid cells with abundant granular eosinophilic oncocytic cytoplasm.",
      "Nuclear TTF1 expression supports pituicyte/f​​olliculostellate lineage.",
      "Mitochondrial markers are strongly expressed.",
      "Pituitary hormones are generally absent.",
    ],
    histology: [
      "Tumor cells are arranged in fascicles, sheets, or nests.",
      "Cells have abundant granular eosinophilic cytoplasm due to numerous mitochondria.",
      "Nuclei are round to oval and may show mild to moderate atypia.",
      "A prominent vascular network and variable stromal fibrosis may be present.",
      "Mitoses are variable; recurrence may occur after incomplete resection.",
    ],
    ihc: [
      "TTF1 shows nuclear positivity.",
      "Anti-mitochondrial antibody and other mitochondrial markers are strongly positive.",
      "S100 is variable; EMA may be positive.",
      "Pituitary hormones and lineage transcription factors are generally negative.",
    ],
    differential: [
      {
        name: "Pituicytoma",
        distinction:
          "Pituicytoma is usually a bland spindle-cell tumor without the striking oncocytic cytoplasm or diffuse mitochondrial marker expression.",
      },
      {
        name: "Granular cell tumor of the sellar region",
        distinction:
          "Granular cell tumor has PAS-positive lysosomal granules and a polygonal-cell pattern; spindle cell oncocytoma is mitochondria-rich and often spindle-cell.",
      },
      {
        name: "Pituitary neuroendocrine tumor with oncocytic change",
        distinction:
          "PitNET expresses pituitary lineage transcription factors and often hormones; spindle cell oncocytoma is TTF1-positive and typically hormone-negative.",
      },
      {
        name: "Metastatic oncocytic carcinoma",
        distinction:
          "Use clinical history and site-specific markers to exclude metastatic renal, thyroid, or other oncocytic carcinomas.",
      },
    ],
    molecular: [
      "No single recurrent molecular alteration is established for routine diagnosis.",
      "Molecular profiling may be considered in recurrent or diagnostically unresolved tumors.",
    ],
  },
  {
    name: "Pituitary Adenoma / Pituitary Neuroendocrine Tumor (PitNET)",
    group: "Pituitary Neuroendocrine Tumors",
    clue: "A pituitary neuroendocrine neoplasm classified by lineage transcription factors PIT1, TPIT, and SF1, with hormone expression and granulation pattern.",
    summary:
      "A clonal neuroendocrine neoplasm of adenohypophyseal cells; classify by lineage, hormone profile, and clinicopathologic context.",
    clinical: [
      "Occurs across adulthood; some subtypes show sex- and age-related clinical patterns.",
      "Arises in the anterior pituitary and may be functioning or clinically nonfunctioning.",
      "Symptoms include hormone excess, hypopituitarism, headache, and visual field deficits from mass effect.",
      "Invasion and aggressive clinical behavior are assessed by imaging, surgical findings, and follow-up rather than histology alone.",
    ],
    criteria: [
      "Neuroendocrine tumor with compatible pituitary morphology and cytokeratin expression.",
      "Classify lineage using PIT1, TPIT, and SF1; correlate with pituitary hormone immunostains.",
      "Assess proliferation with mitotic count and Ki-67, but do not use a single threshold as a stand-alone predictor of behavior.",
      "Distinguish tumor from pituitary hyperplasia by reticulin: tumor shows disruption of the normal acinar reticulin framework.",
      "Pituitary carcinoma is defined by craniospinal dissemination and/or systemic metastasis, not by cytologic atypia alone.",
    ],
    histology: [
      "Tumor cells form sheets, nests, trabeculae, or papillary structures and often show a monotonous appearance.",
      "Cytoplasm may be acidophilic, basophilic, or chromophobic depending on lineage and granulation.",
      "Nuclei are round to oval with finely stippled chromatin; pleomorphism may be present but is not independently diagnostic of malignancy.",
      "Reticulin framework is disrupted compared with the preserved acinar pattern of normal or hyperplastic pituitary tissue.",
      "Densely and sparsely granulated patterns may be recognized in selected lineages and can have clinical relevance.",
      "Crooke cell change, silent corticotroph phenotype, and plurihormonal PIT1-lineage tumors should be specifically recognized.",
    ],
    ihc: [
      "Synaptophysin and chromogranin support neuroendocrine differentiation; broad-spectrum cytokeratin is usually positive.",
      "PIT1 identifies somatotroph, lactotroph, and thyrotroph lineage tumors.",
      "TPIT identifies corticotroph lineage tumors.",
      "SF1 identifies gonadotroph lineage tumors.",
      "Use lineage-appropriate hormone stains: GH, prolactin, TSH, ACTH, FSH, and LH.",
      "Ki-67 and mitotic count contribute to proliferation assessment but do not independently establish aggressive behavior.",
      "ER, SSTR2A/SSTR5, MGMT, and mismatch repair proteins may have predictive or therapeutic relevance in selected settings.",
    ],
    differential: [
      {
        name: "Pituitary hyperplasia",
        distinction:
          "Hyperplasia expands acini while preserving the reticulin framework; PitNET disrupts the normal acinar reticulin network.",
      },
      {
        name: "Metastatic carcinoma to the sellar region",
        distinction:
          "Metastases generally lack pituitary lineage transcription factors and may show a site-specific immunophenotype; correlate with clinical history and imaging.",
      },
      {
        name: "Sellar paraganglioma",
        distinction:
          "Paraganglioma is typically keratin-negative and GATA3/tyrosine hydroxylase-positive, with sustentacular cells; PitNET is keratin-positive and expresses PIT1, TPIT, or SF1.",
      },
      {
        name: "Spindle cell oncocytoma",
        distinction:
          "Spindle cell oncocytoma is TTF1-positive with oncocytic spindle-cell morphology and lacks pituitary lineage markers.",
      },
      {
        name: "Pituicytoma / granular cell tumor",
        distinction:
          "These posterior pituitary tumors are TTF1-positive and generally lack pituitary hormones and lineage transcription factors.",
      },
      {
        name: "Pituitary blastoma",
        distinction:
          "Pituitary blastoma occurs in very young children and contains blastemal cells, Rathke pouch epithelium, and neuroendocrine cells; DICER1 alterations are characteristic.",
      },
    ],
    molecular: [
      "Most PitNETs lack a single defining molecular alteration used in routine classification.",
      "GNAS mutations occur in a subset of somatotroph tumors; other subtype-associated alterations may be found but are not required for diagnosis.",
      "SSTR expression may inform somatostatin analogue therapy; MGMT and mismatch repair status may be relevant in selected aggressive tumors.",
      "Germline predisposition may occur in MEN1, AIP-related familial isolated pituitary adenoma, and other syndromic settings.",
    ],
    pitfalls: [
      "Do not use the former term atypical adenoma as a histologic grade.",
      "Do not diagnose carcinoma based on pleomorphism, mitoses, or Ki-67 alone; metastasis is required.",
      "A sellar mass in a patient with known carcinoma requires consideration of metastasis even when it resembles PitNET.",
    ],
  },
  {
    name: "Pituitary Blastoma",
    group: "Pituitary Neuroendocrine Tumors",
    clue: "A rare DICER1-associated embryonal sellar tumor in infants, combining blastemal cells, Rathke pouch epithelium, and neuroendocrine cells.",
    summary:
      "An embryonal neoplasm of the sellar region, typically presenting in infancy and associated with DICER1 syndrome.",
    clinical: [
      "Usually occurs in children younger than 2 years, with a median age around 9 months and slight female predominance.",
      "Arises in the sellar region and often extends suprasellarly or into the cavernous sinus.",
      "Cushing syndrome from ACTH excess is a common presentation; ophthalmoplegia and other pituitary hormone abnormalities may occur.",
      "Patients may have other DICER1-associated neoplasms or a family history suggestive of DICER1 syndrome.",
    ],
    criteria: [
      "Triphasic tumor containing primitive blastemal cells, neuroendocrine cells, and Rathke pouch-type epithelium.",
      "Neuroendocrine component may show corticotroph differentiation and ACTH expression.",
      "DICER1 alterations, usually germline loss-of-function plus a somatic RNase IIIb hotspot mutation, strongly support the diagnosis.",
      "Clinical age and syndromic context are important diagnostic clues.",
    ],
    histology: [
      "Primitive small blastemal cells are admixed with larger neuroendocrine cells and cuboidal/columnar Rathke pouch epithelium.",
      "Rathke pouch epithelium may form rosettes, glands, or follicles.",
      "Neuroendocrine cells form lobules or sheets and may show Crooke hyaline change.",
      "The tumor may show heterogeneous proliferative activity, with higher Ki-67 in the epithelial component.",
      "Necrosis may be present.",
    ],
    ihc: [
      "Neuroendocrine cells variably express ACTH and other pro-opiomelanocortin products; GH and other pituitary hormones may be expressed.",
      "Rathke pouch epithelial cells show cytokeratin and EMA expression.",
      "Pituitary lineage transcription factors may be present in neuroendocrine cells but are usually absent in blastemal and Rathke pouch components.",
      "Ki-67 may be markedly elevated, particularly in the Rathke pouch epithelial component.",
    ],
    differential: [
      {
        name: "Pituitary neuroendocrine tumor",
        distinction:
          "PitNET is usually monomorphic and lacks the triphasic combination of blastemal cells and Rathke pouch epithelium; DICER1 alterations support blastoma.",
      },
      {
        name: "Sellar teratoma",
        distinction:
          "Teratoma contains mature or immature derivatives of multiple germ layers; pituitary blastoma has a characteristic triphasic pituitary/Rathke pouch composition.",
      },
      {
        name: "Germ cell tumor",
        distinction:
          "Germ cell tumors show characteristic morphology and markers such as SALL4, OCT3/4, PLAP, or AFP depending on subtype; the triphasic pituitary pattern is absent.",
      },
      {
        name: "Rathke cleft cyst with pituitary hyperplasia",
        distinction:
          "A cyst with reactive/hyperplastic pituitary tissue lacks a primitive blastemal component and DICER1-associated tumor profile.",
      },
    ],
    molecular: [
      "DICER1 alterations are present in nearly all tested tumors.",
      "The usual pattern is a germline loss-of-function variant with a somatic RNase IIIb hotspot mutation.",
      "Germline testing and genetic counseling are important because of the association with DICER1 tumor predisposition syndrome.",
    ],
    pitfalls: [
      "Consider pituitary blastoma in an infant with ACTH-dependent Cushing syndrome and a sellar mass.",
      "Sample the tumor extensively because the three components may be unevenly distributed.",
    ],
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

export default function CranialParaspinalSellarTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Schwannoma",
    "Adamantinomatous Craniopharyngioma",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          [
            e.name,
            e.group,
            e.clue,
            e.summary,
            ...e.clinical,
            ...e.criteria,
            ...e.histology,
            ...e.ihc,
            ...e.molecular,
            ...e.differential.flatMap((d) => [d.name, d.distinction]),
          ]
            .join(" ")
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
          PathologyGPS · Central Nervous System
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Cranial, Paraspinal, and Sellar Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for peripheral nerve sheath tumors,
          cauda equina neuroendocrine tumors, craniopharyngiomas, posterior
          pituitary tumors, and pituitary neuroendocrine neoplasms—with emphasis
          on diagnostic criteria, immunophenotype, molecular findings, and
          focused differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the anatomic compartment",
              "Determine whether the lesion is nerve-associated, intradural cauda equina, sellar/suprasellar epithelial, posterior pituitary, or anterior pituitary in origin.",
            ],
            [
              "2. For nerve sheath tumors",
              "Separate Schwannian, neurofibromatous, and perineurial differentiation using architecture, axonal distribution, S100/SOX10, EMA, GLUT1, and claudin-1.",
            ],
            [
              "3. Exclude malignant progression",
              "In NF1-associated lesions, distinguish neurofibroma and ANNUBP from MPNST using cellularity, atypia, mitoses, necrosis, H3K27me3, and molecular context.",
            ],
            [
              "4. For pigmented nerve-associated tumors",
              "Consider malignant melanotic nerve sheath tumor; evaluate melanocytic markers and PRKAR1A rather than assuming melanoma.",
            ],
            [
              "5. For craniopharyngioma",
              "Wet keratin, stellate reticulum, and beta-catenin nuclear accumulation favor adamantinomatous type; papillary squamous epithelium and BRAF V600E favor papillary type.",
            ],
            [
              "6. For sellar tumors",
              "Use TTF1 to identify posterior pituitary lineage tumors; use PIT1, TPIT, and SF1 with hormone stains to classify PitNET.",
            ],
            [
              "7. In infants with a sellar mass",
              "Consider pituitary blastoma, particularly with ACTH-dependent Cushing syndrome; assess the three tumor components and DICER1 status.",
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
          <strong>Critical principle:</strong> In sellar and paraspinal lesions,
          anatomic location and lineage are central. Avoid diagnosing a tumor
          from a single marker: interpret morphology, a focused
          immunohistochemical panel, imaging, and molecular findings together.
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield IHC / Molecular Framework
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              [
                "Schwannian tumors",
                "S100 and SOX10; neurofilament highlights axons; EMA/GLUT1/claudin-1 identify perineurial cells.",
              ],
              [
                "MPNST",
                "H3K27me3 loss supports conventional MPNST; INI1 loss supports epithelioid MPNST.",
              ],
              [
                "Malignant melanotic nerve sheath tumor",
                "S100/SOX10 plus HMB45/Melan-A; PRKAR1A loss is a key clue.",
              ],
              [
                "Cauda equina neuroendocrine tumor",
                "Synaptophysin/chromogranin in chief cells; S100/SOX10 in sustentacular cells; HOXB13 supports site of origin.",
              ],
              [
                "Craniopharyngioma",
                "Nuclear beta-catenin and CTNNB1 alterations in adamantinomatous type; BRAF V600E in papillary type.",
              ],
              [
                "Posterior pituitary tumors",
                "Nuclear TTF1; mitochondrial markers in spindle cell oncocytoma; PAS-positive lysosomal granules in granular cell tumor.",
              ],
              [
                "PitNET",
                "PIT1, TPIT, and SF1 define lineage; correlate with GH, PRL, TSH, ACTH, FSH, and LH.",
              ],
              [
                "Pituitary blastoma",
                "DICER1 germline and somatic alterations; heterogeneous epithelial, blastemal, and neuroendocrine components.",
              ],
            ].map(([a, b]) => (
              <div
                key={a}
                className="grid gap-1 border-b border-slate-100 pb-2 sm:grid-cols-[minmax(0,1fr)_1.4fr]"
              >
                <strong>{a}</strong>
                <span className="text-slate-600">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            Important Diagnostic Guardrails
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              Degenerative atypia in schwannoma or neurofibroma is not
              equivalent to malignancy.
            </li>
            <li>
              ANNUBP is a defined intermediate category; do not use it as a
              synonym for any atypical neurofibroma.
            </li>
            <li>H3K27me3 retention does not exclude MPNST.</li>
            <li>
              Malignant melanotic nerve sheath tumor has malignant potential
              even when cytology appears deceptively bland.
            </li>
            <li>
              Cauda equina neuroendocrine tumor is biologically distinct from
              conventional paraganglioma elsewhere.
            </li>
            <li>
              Do not confuse posterior pituitary TTF1-positive tumors with
              PIT1/TPIT/SF1-lineage PitNETs.
            </li>
            <li>
              Pituitary carcinoma is defined by metastasis, not by atypia or
              proliferation alone.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tumors, markers, morphology, or differential diagnoses..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() =>
                setOpen(allOpen ? [] : filtered.map((e) => e.name))
              }
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            <button
              onClick={() => {
                setQuery("");
                setGroup("All");
              }}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                group === g
                  ? "bg-teal-700 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-800"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Showing {filtered.length} of {entities.length} entities
        </p>
      </section>

      <section className="space-y-4">
        {filtered.map((e) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-teal-800">
                      {e.group}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">{e.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {e.clue}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {e.summary}
                  </p>
                </div>
                <span className="mt-1 shrink-0 text-xl font-light text-teal-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 px-5 pb-6">
                  <Section title="Clinical Profile">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.clinical.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Essential Diagnostic Criteria">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.criteria.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Histopathology">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.histology.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Immunophenotype">
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                      {e.ihc.map((x, i) => (
                        <li key={i}>{x}</li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Differential Diagnosis">
                    <div className="space-y-2">
                      {e.differential.map((d, i) => (
                        <div
                          key={`${d.name}-${i}`}
                          className="rounded-lg border border-slate-100 bg-slate-50/70 p-3"
                        >
                          <div className="text-sm font-semibold text-slate-900">
                            {d.name}
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {d.distinction}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                  <Section title="Molecular Pathology">
                    {e.molecular.length ? (
                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                        {e.molecular.map((x, i) => (
                          <li key={i}>{x}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-600">
                        No established molecular alteration is required for
                        routine diagnosis.
                      </p>
                    )}
                  </Section>
                  {e.pitfalls && (
                    <Section title="Diagnostic Pitfalls">
                      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
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
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
            No entities match the current search. Try another term or reset the
            filters.
          </div>
        )}
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Cranial, Paraspinal, and Sellar Tumors · Diagnostic
        reference for professional use. Interpret immunohistochemical and
        molecular findings in the context of morphology, anatomic site, and
        clinical information.
      </footer>
    </main>
  );
}
