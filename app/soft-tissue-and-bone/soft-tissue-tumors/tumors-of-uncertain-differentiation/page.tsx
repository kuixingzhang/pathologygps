"use client";
import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  behavior: string;
  site: string;
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
    name: "Intramuscular myxoma",
    group: "Benign myxoid neoplasms",
    behavior:
      "Benign; cellular subtype may recur locally but is not destructive",
    site: "Large muscles of the thigh, shoulder, buttock, and upper arm; may be multiple with fibrous dysplasia (Mazabraud syndrome).",
    criteria: [
      "Essential: intramuscular, hypocellular myxoid tumor composed of bland spindle cells.",
      "Desirable: GNAS activating variant in selected diagnostically challenging cases.",
    ],
    morphology: [
      "Uniform spindle-to-stellate cells with small oval nuclei, inconspicuous nucleoli, and indistinct pale eosinophilic cytoplasm in abundant myxoid matrix.",
      "Hypovascular; sparse capillary-sized vessels. Cystic change and stromal vacuolation may occur. Necrosis and mitotic figures should be absent.",
      "Peripheral infiltration between and around individual skeletal muscle fibers is common despite a deceptively circumscribed gross appearance.",
      "Cellular myxoma contains hypercellular areas (10–90%) with increased cells and more conspicuous vessels, occasionally thick-walled or in collagenous stroma; mitoses remain very rare and pleomorphism/necrosis are absent.",
    ],
    ihc: [
      "CD34 is commonly positive; SMA is rarely positive.",
      "Desmin, S100, and MUC4 are negative. Scattered CD163-positive muciphages may be present.",
    ],
    molecular: [
      "Activating GNAS variants in exons 8 or 9 occur in >90% of sporadic intramuscular/cellular myxomas and in Mazabraud-associated cases.",
      "GNAS activation leads to downstream FOS (c-FOS) activation. Copy-number variants are absent in cellular myxoma.",
      "GNAS testing can help distinguish cellular myxoma from low-grade myxofibrosarcoma on limited material.",
    ],
    differential: [
      [
        "Low-grade myxofibrosarcoma",
        "Atypia, nuclear hyperchromasia, and infiltrative curvilinear vessels favor myxofibrosarcoma; these are not features of cellular myxoma. GNAS variant supports myxoma but must be interpreted with morphology.",
      ],
      [
        "Myxoid liposarcoma",
        "Search for lipoblasts and characteristic delicate branching vasculature; use DDIT3 fusion testing when morphology/site warrant. The supplied excerpt does not detail this differential.",
      ],
      [
        "Juxta-articular myxoma",
        "Periarticular location, cyst-like spaces, and fibrin/hemosiderin-related reactive change favor juxta-articular myxoma.",
      ],
    ],
    pitfalls: [
      "Cellularity alone does not establish malignancy: cellular myxoma may be substantially hypercellular.",
      "Nuclear atypia/hyperchromasia, necrosis, or appreciable mitotic activity should prompt reconsideration of the diagnosis.",
      "Do not mistake peripheral entrapment of skeletal muscle fibers for sarcomatous invasion.",
    ],
    prognosis: [
      "Classic intramuscular myxoma usually does not recur. Cellular lesions have a small risk of local, non-destructive recurrence.",
      "Malignant transformation is not described.",
    ],
  },
  {
    name: "Juxta-articular myxoma",
    group: "Benign myxoid neoplasms",
    behavior: "Benign but locally recurrent (up to approximately one third)",
    site: "Periarticular soft tissue, most often around the knee (>85%); also hip, shoulder, elbow, and ankle.",
    criteria: [
      "Essential: bland, paucicellular myxoid tumor arising in soft tissue around a large joint.",
    ],
    morphology: [
      "Poorly circumscribed and infiltrative into periarticular soft tissue; bland spindle cells with uniform ovoid nuclei and inconspicuous nucleoli in myxoid matrix.",
      "Few vessels; cellularity may increase, but mitoses remain scarce.",
      "Cyst-like spaces lined by delicate fibrin or thicker collagen are common. Hemorrhage, chronic inflammation, hemosiderin, and fibrin may reflect trauma and can also occur in recurrent lesions.",
    ],
    ihc: [
      "IHC is generally not diagnostic. Lesional cells may express CD34 and/or SMA; S100 is negative.",
      "Intratumoral muciphages may be CD163-positive.",
    ],
    molecular: [
      "Molecular testing is not clinically relevant according to the supplied WHO excerpt.",
    ],
    differential: [
      [
        "Intramuscular myxoma",
        "Both are bland and myxoid. Periarticular location, cyst-like spaces, fibrin lining, and hemorrhagic/hemosiderin reactive change favor juxta-articular myxoma.",
      ],
      [
        "Ganglion or synovial cyst",
        "A cystic lesion without a true bland spindle-cell myxoid neoplasm favors a cyst; correlate with joint relationship and histology.",
      ],
      [
        "Low-grade myxofibrosarcoma",
        "Significant nuclear atypia/hyperchromasia and malignant vascular architecture are not expected in juxta-articular myxoma.",
      ],
    ],
    pitfalls: [
      "Do not interpret infiltrative growth as evidence of malignancy; local infiltration is characteristic.",
      "Recurrence may occur more than once, but malignant transformation does not occur.",
    ],
    prognosis: [
      "Local recurrence occurs in up to one third of patients; incomplete excision and difficulty defining the border are practical concerns.",
      "No malignant transformation is reported.",
    ],
  },
  {
    name: "OGT-rearranged mesenchymal neoplasm",
    group: "Molecularly defined / emerging entities",
    behavior: "Benign; limited follow-up",
    site: "Predominantly acral; occasional more proximal extremity or limb-girdle lesions.",
    criteria: [
      "Essential: cords/nests of epithelioid cells in hyalinized or fibromyxoid stroma AND an OGT gene rearrangement.",
      "Molecular confirmation is required; morphology and CD34 alone are insufficient.",
    ],
    morphology: [
      "Well-circumscribed, often lobulated tumor with alternating moderately cellular and hypocellular zones; two-tone appearance from myxoid cellular areas and hyalinized/fibromyxoid hypocellular areas.",
      "Predominantly epithelioid/plump ovoid cells with a minor spindle-cell component, arranged in cords, nests, reticular structures, or perivascular concentric whorls.",
      "Uniform nuclei, delicate chromatin, inconspicuous nucleoli, very low mitotic activity, and no necrosis. Some OGT::FOXO1/FOXO3 tumors have vacuolated or signet-ring-like cells.",
    ],
    ihc: [
      "CD34 is focal to diffuse in all reported cases; EMA is focal in some.",
      "A minority show keratin (AE1/AE3) and/or ERG. SMARCB1/INI1 is retained; broad endothelial, myoepithelial, nerve-sheath, myogenic, and perineurial markers are generally negative.",
    ],
    molecular: [
      "OGT fusions are defining; reported partners include FOXO1, FOXO3, FOXO4, and CITED1.",
      "OGT::FOXO4 and OGT::CITED1 may arise through intrachromosomal rearrangements and can be missed by dual-color break-apart FISH. Use an assay capable of detecting the relevant fusion.",
    ],
    differential: [
      [
        "Myoepithelioma",
        "Myoepithelial tumors show a broader myoepithelial immunophenotype (keratin/EMA with S100, SOX10, or GFAP); OGT-rearranged tumors are typically negative for these lineage markers.",
      ],
      [
        "Perineurioma",
        "Perineurial markers (EMA, claudin-1, GLUT1) support perineurioma; OGT-rearranged tumors are not typically perineurial.",
      ],
      [
        "Other acral epithelioid mesenchymal tumors",
        "The characteristic hyalinized/fibromyxoid stroma is suggestive but not definitive; demonstrate OGT fusion for confirmation.",
      ],
    ],
    pitfalls: [
      "A negative break-apart FISH result does not exclude OGT rearrangement when an intrachromosomal fusion is suspected.",
      "CD34 positivity is not specific; do not diagnose this entity without molecular confirmation.",
    ],
    prognosis: [
      "No recurrence or metastasis has been reported after excision to date, but follow-up is limited.",
    ],
  },
  {
    name: "Deep angiomyxoma",
    group: "Benign / locally recurrent myxoid neoplasms",
    behavior:
      "Locally infiltrative; recurrence possible; no metastatic behavior expected",
    site: "Deep pelviperineal soft tissue, especially vulvovaginal, inguinoscrotal, and perianal regions.",
    criteria: [
      "Essential: poorly demarcated, highly infiltrative, uniformly hypocellular spindle-cell lesion with abundant myxoid matrix and evenly distributed medium-to-thick-walled vessels.",
    ],
    morphology: [
      "Uniformly hypocellular tumor with copious myxoid/fibromyxoid matrix and medium-to-large vessels distributed throughout.",
      "Spindle or stellate cells with delicate processes; collagen fibrils and smooth-muscle (myoid) bundles may lie near vessels.",
      "Highly infiltrative growth with imperceptible blending into adjacent tissue; margins can be difficult to assess. Focal hypercellularity, collagenous areas, or neurofibroma-like morphology may occur.",
    ],
    ihc: [
      "Desmin is usually diffusely positive. CD34 is positive in a minority; SMA is generally limited to myoid bundles.",
      "ER and PR are typically positive in tumors in women and may also be positive in men (more often PR). HMGA2 is sensitive but not specific.",
    ],
    molecular: [
      "Chromosome 12q13–q15 aberrations and HMGA2 rearrangement/upregulation are characteristic in a subset.",
      "HMGA2 may be rearranged or aberrantly expressed through other regulatory mechanisms; HMGA2 expression is not specific and is seen in several other mesenchymal tumors.",
      "Molecular testing is not considered clinically relevant for routine diagnosis in the supplied WHO text.",
    ],
    differential: [
      [
        "Angiomyofibroblastoma",
        "Usually more circumscribed and superficial, with alternating cellularity and perivascular clustering; deep angiomyxoma is deeply infiltrative and uniformly hypocellular with vessels throughout.",
      ],
      [
        "Cellular angiofibroma",
        "Typically circumscribed and collagenous with conspicuous hyalinized vessels; deep angiomyxoma is extensively myxoid and infiltrative.",
      ],
      [
        "Myxoid liposarcoma",
        "Adipocytic differentiation and characteristic lipoblasts/vascular pattern favor liposarcoma; deep angiomyxoma shows bland uniform spindle cells and characteristic thick-walled vessels.",
      ],
      [
        "Other pelvic myxoid neoplasms",
        "Integrate depth, infiltrative pattern, vascular caliber/distribution, desmin and hormone-receptor profile; HMGA2 alone is not specific.",
      ],
    ],
    pitfalls: [
      "The term “aggressive” is increasingly avoided; depth and infiltrative local behavior are the defining clinical issues.",
      "HMGA2 positivity supports but does not establish the diagnosis.",
      "Margins may be difficult to assess because tumor blends with normal tissue.",
    ],
    prognosis: [
      "Reported local recurrence ranges widely (approximately 9–50%), likely partly reflecting margin-assessment uncertainty; multiple recurrences are uncommon.",
      "Hormone-receptor-positive recurrent tumors have been treated with surgery and GnRH analogues.",
    ],
  },
  {
    name: "Acral fibrochondromyxoid tumor",
    group: "Benign / locally recurrent myxoid neoplasms",
    behavior: "Indolent; local recurrence if incompletely excised",
    site: "Exclusively acral, about twice as common in hands (especially fingers) as feet.",
    criteria: [
      "Essential: acral multinodular tumor with fibrovascular septa and bland spindle/round cells in fibrous, myxoid, or chondroid matrix.",
      "Desirable: CD34 and ERG expression; THBS1::ADGRF5 fusion or THBS1 rearrangement in selected cases.",
    ],
    morphology: [
      "Multinodular lesion partitioned by fibrous bands containing numerous small vessels.",
      "Spindle or round cells in abundant myxoid, chondroid, or fibrous matrix; cells form poorly defined groups, small clusters, or rows, sometimes in lacunar spaces.",
      "Scant eosinophilic cytoplasm; small round, ovoid, or reniform nuclei, occasionally with longitudinal grooves; pleomorphism and mitoses are usually absent.",
      "Rare cystic change, calcification, or ischemic necrosis may occur.",
    ],
    ihc: [
      "CD34 and ERG are positive in approximately 94% and 97%, respectively.",
    ],
    molecular: [
      "THBS1::ADGRF5 fusion was identified in 27/29 cases in the cited series.",
      "Fusion/rearrangement supports the diagnosis but is generally not required in a morphologically typical lesion.",
    ],
    differential: [
      [
        "Chondromyxoid fibroma / soft-tissue chondroma",
        "Acral location, multinodular fibrovascular septa, bland cells, and THBS1::ADGRF5 support AFCMT; correlate with whether the lesion is soft tissue-based and the characteristic architecture.",
      ],
      [
        "Low-grade chondrosarcoma",
        "Atypia, permeative growth, and destructive bone-centered disease should prompt consideration of chondrosarcoma; mild cortical scalloping can occur with AFCMT.",
      ],
      [
        "Other acral myxoid tumors",
        "CD34/ERG coexpression and fusion testing can support AFCMT, but neither marker alone is specific.",
      ],
    ],
    pitfalls: [
      "Mild cortical scalloping or saucerization does not by itself imply a primary bone malignancy.",
      "Rare ischemic necrosis should not be overcalled as malignant necrosis in the absence of other malignant features.",
    ],
    prognosis: [
      "Local recurrence is approximately 18%, particularly after incomplete excision. No malignant transformation or distant metastasis has been reported.",
    ],
  },
  {
    name: "Angiomatoid fibrous histiocytoma (AFH)",
    group: "Intermediate / rarely metastasizing",
    behavior: "Intermediate; rarely metastasizing",
    site: "Usually subcutis/deep dermis of extremities; also trunk, head and neck, often near lymph-node basins.",
    criteria: [
      "Essential: nodules of epithelioid-to-ovoid cells in syncytial-like sheets with peripheral lymphoplasmacytic rims/infiltrates, often with germinal centers.",
      "Desirable: blood-filled pseudovascular spaces, fibrous pseudocapsule/hemosiderin, and EWSR1 or FUS rearrangement in selected cases.",
    ],
    morphology: [
      "Usually circumscribed and lobulated, with spindle, epithelioid, or histiocytoid cells in sheets/fascicles/nodules.",
      "Blood-filled pseudovascular spaces are not lined by endothelium; thick fibrous pseudocapsule with hemosiderin and peripheral lymphoplasmacytic cuff with germinal centers are characteristic.",
      "About one third lack pseudovascular spaces and may be solid, mimicking a lymph node. A rare small-round-cell variant may mimic undifferentiated round-cell sarcoma.",
      "Mitotic activity is usually low; atypical mitoses, focal necrosis, pleomorphic cells, or multinucleated giant cells can occur and do not reliably predict aggressive behavior.",
    ],
    ihc: [
      "Desmin and SOX9 are commonly focal or diffuse; membranous CD99 is common.",
      "Tumor cells are consistently negative for MYOD1, myogenin, keratins, S100, and CD34. ALK, EMA, pan-TRK, TLE1, synaptophysin, and CD68 may be variable.",
    ],
    molecular: [
      ">90% harbor EWSR1::CREB1; rare cases show EWSR1::ATF1, FUS::ATF1, or EWSR1::CREM.",
      "EWSR1::CREB1/ATF1 also occurs in clear cell sarcoma and other FET-CREB tumors; fusion detection must be interpreted with morphology and immunophenotype.",
      "AFH lacks the downstream MITF pathway activation characteristic of clear cell sarcoma.",
    ],
    differential: [
      [
        "Clear cell sarcoma",
        "Both may harbor EWSR1::ATF1/CREB1. Clear cell sarcoma shows melanocytic differentiation (S100/SOX10/Melan-A/HMB45); AFH typically lacks these markers and has lymphoplasmacytic cuff/pseudocapsule.",
      ],
      [
        "Lymph node / nodal metastasis",
        "AFH can mimic a lymph node, especially when solid; look for characteristic peripheral lymphoplasmacytic cuff, fibrous pseudocapsule, hemosiderin, and molecular findings.",
      ],
      [
        "Ewing / other round-cell sarcoma",
        "Small-round-cell AFH may mimic sarcoma; integrate desmin/SOX9, negative myogenic markers, architecture, and FET-CREB fusion.",
      ],
      [
        "FET-CREB family epithelioid mesenchymal tumor",
        "Fusion overlap exists. FET-CREB tumors are often keratin-positive and may be cavity-based; AFH is usually desmin/SOX9-positive and keratin-negative.",
      ],
    ],
    pitfalls: [
      "“Angiomatoid malignant fibrous histiocytoma” is not recommended terminology.",
      "Pseudovascular spaces are absent in a substantial minority; their absence does not exclude AFH.",
      "Atypia or mitotic activity alone does not establish aggressive behavior.",
    ],
    prognosis: [
      "Local recurrence is approximately 10–15%; incomplete excision is associated with recurrence.",
      "Metastases occur in approximately 1–5%, mainly locoregional lymph nodes; distant metastasis and disease-related death are rare.",
    ],
  },
  {
    name: "Ossifying fibromyxoid tumor (OFMT)",
    group: "Intermediate / variable behavior",
    behavior:
      "Variable; malignant examples defined by high cellularity, atypia, and mitotic activity",
    site: "Usually subcutaneous on extremities; less often trunk or head and neck.",
    criteria: [
      "Essential: ovoid/epithelioid cells in cords or sheets within collagenous or myxoid matrix, often with peripheral bone; variable S100 and often focal desmin.",
      "Malignant OFMT: high cellularity, high nuclear atypia, and >1 mitosis/6 mm² (>2 mitoses/50 HPF).",
      "Desirable: PHF1 rearrangement or other characteristic fusion in selected cases.",
    ],
    morphology: [
      "Often encapsulated or well circumscribed and lobulated; peripheral shell of bone is present in about half but is not required.",
      "Uniform ovoid/epithelioid cells arranged in cords or diffuse sheets in collagenous or myxoid matrix.",
      "Most have <1 mitosis/6 mm² (<2/50 HPF). Approximately 10% have increased mitotic activity; malignant examples may show osteosarcoma-like bone elements.",
    ],
    ihc: [
      "S100 is variable; desmin and keratin are focal in a minority.",
      "CD34, EMA, SMA, and SOX10 are negative in the WHO-described profile.",
    ],
    molecular: [
      "Approximately 80% harbor a fusion involving PHF1; common examples are EP400::PHF1 (up to 40%) and PHF1::TFE3 (about 10%).",
      "PHF1 fusions alter chromatin accessibility and are useful in unusual cases; absence does not exclude OFMT.",
    ],
    differential: [
      [
        "Chondromyxoid fibroma / chondroid lesion",
        "OFMT has ovoid/epithelioid cells in cords/sheets and often a peripheral bone shell; well-formed cartilage is not the defining feature.",
      ],
      [
        "Soft-tissue chondroma",
        "Chondroma shows mature hyaline cartilage; OFMT has a fibromyxoid/collagenous matrix with cords/sheets of ovoid cells.",
      ],
      [
        "Extraskeletal osteosarcoma",
        "Malignant osteoid with sarcomatous cells favors osteosarcoma; OFMT may contain bone, including osteosarcoma-like elements in malignant examples, so evaluate the overall architecture and criteria.",
      ],
      [
        "Myoepithelial tumor",
        "Myoepithelial tumors typically express keratin/EMA with S100/SOX10/GFAP; OFMT has a different phenotype and may show PHF1 fusion.",
      ],
    ],
    pitfalls: [
      "Peripheral bone is not obligatory; its absence does not exclude OFMT.",
      "Metastases have been reported even in tumors with lower mitotic activity; no single threshold guarantees benign behavior.",
      "Delayed metastases may occur up to 20 years after primary excision.",
    ],
    prognosis: [
      "Tumors with >1 mitosis/6 mm² recur more often and may metastasize, but metastasis can occur below this threshold.",
      "Lung and soft tissue are common metastatic sites; long-term follow-up is warranted.",
    ],
  },
  {
    name: "Myoepithelioma, myoepithelial carcinoma, and mixed tumor",
    group: "Myoepithelial / lineage-defined",
    behavior:
      "Myoepithelioma and mixed tumor usually benign; carcinoma malignant",
    site: "Soft tissue and subcutis, often extremities; also trunk and head/neck.",
    criteria: [
      "Essential: trabecular, reticular, nested, and/or solid growth of spindle or epithelioid cells, often in myxoid or hyalinized stroma; keratin/EMA plus S100, SOX10, or GFAP expression.",
      "Mixed tumor additionally shows ductal differentiation.",
      "Myoepithelial carcinoma shows increased cytologic atypia and mitotic activity.",
    ],
    morphology: [
      "Broad morphologic spectrum: spindle, epithelioid, plasmacytoid, or clear cells in cords, nests, reticular/trabecular arrays, or solid sheets.",
      "Myxoid, chondromyxoid, or hyalinized stroma is common; mixed tumors contain ductal structures.",
      "Carcinoma is supported by infiltrative growth, increased cytologic atypia, and mitotic activity; no single morphologic pattern alone defines malignancy.",
    ],
    ihc: [
      "Myoepithelial phenotype requires epithelial marker expression (keratin and/or EMA) together with one or more myoepithelial markers: S100, SOX10, or GFAP.",
      "Marker expression is variable and no single marker is sufficient; correlate with morphology.",
    ],
    molecular: [
      "EWSR1 rearrangements occur in a subset, with multiple fusion partners; FUS rearrangements also occur.",
      "EWSR1::POU5F1 and other fusions are reported; molecular findings support classification but are not independently specific for malignancy.",
    ],
    differential: [
      [
        "AFH",
        "AFH may show syncytial nodules, pseudovascular spaces, peripheral lymphoplasmacytic cuff, and EWSR1::CREB1/ATF1; myoepithelial tumors show keratin/EMA plus S100/SOX10/GFAP.",
      ],
      [
        "Extraskeletal myxoid chondrosarcoma",
        "EMC is usually keratin-negative and defined by NR4A3 rearrangement; myoepithelial tumors have a true myoepithelial phenotype.",
      ],
      [
        "Myoepithelial carcinoma vs benign myoepithelioma",
        "Assess infiltrative growth, atypia, and mitotic activity; molecular alteration alone does not establish carcinoma.",
      ],
      [
        "Parachordoma",
        "Not recommended terminology; use the current myoepithelial tumor classification and demonstrate the appropriate phenotype.",
      ],
    ],
    pitfalls: [
      "Do not use “parachordoma” as a preferred diagnosis.",
      "A myxoid matrix or S100 positivity alone is not enough; require the combined epithelial and myoepithelial phenotype.",
      "Molecular fusions overlap with other entities; use clinicopathologic correlation.",
    ],
    prognosis: [
      "Behavior depends on subtype and malignant features; myoepithelial carcinoma has meaningful risk of local recurrence and metastasis.",
    ],
  },
  {
    name: "Pleomorphic hyalinizing angiectatic tumor (PHAT)",
    group: "Intermediate / locally recurrent",
    behavior: "Locally recurrent; metastatic behavior is not established",
    site: "Usually subcutaneous soft tissue of distal extremities, especially lower limb.",
    criteria: [
      "Essential: clusters of ectatic, hyalinized vessels surrounded by pleomorphic hemosiderin-laden cells with nuclear pseudoinclusions; very low or absent mitotic activity.",
      "A peripheral component of hemosiderotic fibrolipomatous tumor (HFLT) is often present.",
    ],
    morphology: [
      "Distinctive ectatic, thin-walled vessels with conspicuous perivascular hyalinization.",
      "Perivascular pleomorphic spindle/epithelioid cells with abundant hemosiderin and characteristic intranuclear pseudoinclusions; mitoses are very low or absent.",
      "Often associated with peripheral HFLT-like fatty tissue; infiltrative margins may be present.",
    ],
    ihc: [
      "No single immunophenotype is defining; hemosiderin-laden macrophages and lesional spindle cells must be distinguished. CD34 may label spindle cells in the HFLT/PHAT spectrum.",
    ],
    molecular: [
      "PHAT and HFLT are linked by recurrent TGFBR3::MGEA5 fusion or related rearrangements involving TGFBR3 and/or MGEA5 in a subset.",
      "Molecular findings support the HFLT-PHAT spectrum but do not replace characteristic morphology.",
    ],
    differential: [
      [
        "HFLT",
        "HFLT is predominantly adipocytic with bland hemosiderin-laden spindle cells; PHAT shows ectatic hyalinized vessels and more conspicuous pleomorphic perivascular cells.",
      ],
      [
        "Myxofibrosarcoma",
        "Myxofibrosarcoma shows atypical spindle cells and curvilinear vessels in myxoid stroma, often with mitotic activity; PHAT has hyalinized ectatic vessels, hemosiderin, and pseudoinclusions.",
      ],
      [
        "Angiosarcoma",
        "PHAT vessels are ectatic but not lined by malignant endothelial cells; endothelial markers should be interpreted with architecture.",
      ],
      [
        "Ancient schwannoma",
        "Can show degenerative atypia and hemosiderin, but lacks the characteristic ectatic hyalinized vessels and HFLT association.",
      ],
    ],
    pitfalls: [
      "Marked pleomorphism can be striking despite very low mitotic activity; do not equate atypia alone with high-grade sarcoma.",
      "Recognize an associated HFLT component and sample the lesion adequately.",
    ],
    prognosis: [
      "Local recurrence can occur, particularly after incomplete excision; metastasis is not a defining feature.",
    ],
  },
  {
    name: "Hemosiderotic fibrolipomatous tumor (HFLT)",
    group: "Intermediate / locally recurrent",
    behavior:
      "Locally recurrent; rare progression/association with sarcoma in the spectrum",
    site: "Acral/distal extremity, especially foot and ankle.",
    criteria: [
      "Essential: mature adipose tissue admixed with bland hemosiderin-laden spindle cells and macrophages in an acral lesion.",
    ],
    morphology: [
      "Mature adipose tissue with infiltrating bland spindle cells, often in fibrous septa and between fat lobules.",
      "Abundant hemosiderin-laden macrophages and spindle cells; chronic inflammatory cells may be present.",
      "May coexist with or transition to PHAT, which has ectatic hyalinized vessels and pleomorphic perivascular cells.",
    ],
    ihc: [
      "Spindle cells are often CD34-positive; macrophages are highlighted by histiocytic markers. No single IHC marker is diagnostic.",
    ],
    molecular: [
      "TGFBR3::MGEA5 fusion/rearrangements are reported in HFLT and PHAT, supporting a biologic spectrum.",
      "Some tumors in this spectrum may acquire additional alterations; molecular testing is supportive rather than required in classic cases.",
    ],
    differential: [
      [
        "Ordinary lipoma",
        "HFLT has infiltrative growth, hemosiderin-laden spindle cells/macrophages, and acral predilection; ordinary lipoma lacks this component.",
      ],
      [
        "Atypical lipomatous tumor",
        "ALT shows atypical hyperchromatic stromal cells and MDM2 amplification; HFLT spindle cells are typically bland and hemosiderin-rich.",
      ],
      [
        "PHAT",
        "Look for ectatic hyalinized vessels and pleomorphic hemosiderin-laden perivascular cells to diagnose PHAT rather than HFLT.",
      ],
      [
        "Myxoinflammatory fibroblastic sarcoma",
        "Acral site overlaps; MIFS has myxoid/inflammatory background and bizarre virocyte-like cells, whereas HFLT is adipocytic and hemosiderin-rich.",
      ],
    ],
    pitfalls: [
      "Acral location and hemosiderin are clues, not sufficient criteria without the characteristic adipocytic/spindle-cell composition.",
      "Sample for a PHAT component or a more cellular atypical area.",
    ],
    prognosis: [
      "Local recurrence is possible; careful excision and long-term clinical follow-up are appropriate.",
    ],
  },
  {
    name: "Phosphaturic mesenchymal tumor (PMT)",
    group: "Molecularly / clinically defined mesenchymal tumors",
    behavior: "Usually benign; rare malignant examples",
    site: "Any soft tissue or bone site; often small and difficult to localize.",
    criteria: [
      "Essential: bland spindle-cell tumor with matrix deposition, grungy calcification and/or rich vascular network, plus clinical hypophosphatemia and/or osteomalacia.",
      "Desirable: FGF23 overproduction in serum or tumor (in the absence of tumor-induced osteomalacia, TIO).",
      "Malignant examples show frankly sarcomatous morphology.",
    ],
    morphology: [
      "Bland spindle or stellate cells in variable myxoid/chondromyxoid or basophilic matrix, with characteristic “grungy” calcification.",
      "Prominent branching vascular network; osteoclast-like giant cells and mature adipose tissue may be present.",
      "Malignant tumors show overt sarcomatous cytology and growth rather than merely increased cellularity.",
    ],
    ihc: [
      "FGF23 expression may be demonstrated in tumor, but sensitivity can be limited; use in context with clinical biochemistry.",
      "SSTR2A and other markers may be expressed but are not independently diagnostic.",
    ],
    molecular: [
      "Most PMTs harbor FN1::FGFR1 fusion; a smaller subset has FN1::FGF1 fusion.",
      "FGF23 overproduction causes renal phosphate wasting, hypophosphatemia, and osteomalacia. Molecular confirmation is useful in difficult cases.",
    ],
    differential: [
      [
        "Osteosarcoma / chondrosarcoma",
        "PMT is generally bland with grungy calcified matrix and clinical TIO; malignant bone-forming/cartilage-forming tumors show overt malignant cytology and destructive growth.",
      ],
      [
        "Myositis ossificans / reactive fibro-osseous lesion",
        "Zonal maturation and clinical/radiologic evolution support reactive lesion; PMT has a spindle-cell neoplasm with characteristic matrix/vascularity and FGF23-related syndrome.",
      ],
      [
        "Other calcifying mesenchymal tumors",
        "The combination of grungy calcification, rich vessels, biochemical hypophosphatemia, and FN1-related fusion is most useful.",
      ],
    ],
    pitfalls: [
      "Do not diagnose PMT from calcification alone; correlate with serum phosphate and evidence of tumor-induced osteomalacia.",
      "FGF23 may be difficult to demonstrate by IHC; biochemical and molecular correlation is valuable.",
      "The clinical syndrome may be absent in an incidental lesion; the WHO essential criteria emphasize clinical evidence.",
    ],
    prognosis: [
      "Complete excision usually resolves the biochemical syndrome. Recurrence or metastasis may occur, particularly in malignant examples.",
    ],
  },
  {
    name: "GLI1-altered mesenchymal tumor",
    group: "Molecularly defined / emerging entities",
    behavior: "Variable; local recurrence and metastasis reported in a subset",
    site: "Soft tissue, often deep extremity or trunk; may occur in children and adults.",
    criteria: [
      "Essential: lobular architecture, spindle-cell or nested epithelioid growth, prominent admixed branching capillaries, and GLI1 rearrangement, amplification, or protein overexpression.",
    ],
    morphology: [
      "Lobulated tumor with spindle-cell fascicles or nested epithelioid cells and conspicuous branching capillary vessels.",
      "Cytology ranges from bland to atypical; some tumors show increased cellularity or epithelioid morphology.",
      "The entity includes GLI1-rearranged and GLI1-amplified lesions; morphology alone may overlap with other perivascular/epithelioid tumors.",
    ],
    ihc: [
      "GLI1 nuclear immunoreactivity may be present and is supportive, but protein overexpression is not equivalent to a specific fusion.",
      "CD34 and S100 may be coexpressed in some kinase-altered/GLI1-spectrum tumors; interpret as a panel.",
    ],
    molecular: [
      "GLI1 rearrangements commonly involve partners such as ACTB or MALAT1; GLI1 amplification is another mechanism.",
      "Molecular confirmation by RNA-based fusion assay, FISH, or copy-number analysis is useful when morphology/IHC suggests the entity.",
    ],
    differential: [
      [
        "PEComa",
        "PEComa typically coexpresses melanocytic and smooth-muscle markers and has perivascular growth; GLI1-altered tumors may show GLI1 alteration without the full PEComa phenotype.",
      ],
      [
        "GIST",
        "GIST is usually KIT/DOG1-positive and has a GI mural origin; GLI1-altered tumors require molecular classification.",
      ],
      [
        "Solitary fibrous tumor",
        "SFT shows nuclear STAT6/NAB2::STAT6; branching vessels alone are not specific.",
      ],
      [
        "Other kinase-altered spindle-cell neoplasms",
        "Use a broad fusion panel when morphology and CD34/S100 coexpression raise a kinase-driven differential.",
      ],
    ],
    pitfalls: [
      "GLI1 protein expression alone is not fully specific; integrate morphology, site, and molecular results.",
      "Do not assume all GLI1-altered tumors have identical behavior; the category is heterogeneous.",
    ],
    prognosis: [
      "Behavior is variable; local recurrence and metastasis have been reported. Long-term follow-up is appropriate.",
    ],
  },
  {
    name: "Superficial FET-ETS family neurocristic tumor",
    group: "Molecularly defined / emerging entities",
    behavior: "Usually indolent but recurrence/metastasis may occur",
    site: "Cutaneous or subcutaneous, often superficial extremity or trunk.",
    criteria: [
      "Essential: cutaneous/subcutaneous lesion of bland small round-to-ovoid cells in nests, cords, and trabeculae; no significant atypia or necrosis; strong diffuse SOX10, S100, and CD99.",
      "Desirable: FET::ETS-family fusion.",
    ],
    morphology: [
      "Superficial dermal/subcutaneous, well-circumscribed or multinodular tumor with nests, cords, and trabeculae of uniform small round/ovoid cells.",
      "Cells are bland with scant-to-moderate cytoplasm; significant pleomorphism and tumor necrosis are absent in the defining pattern.",
      "Some cases may show myxoid or sclerotic stroma; distinguish from malignant clear cell sarcoma and other neurocristic tumors.",
    ],
    ihc: [
      "Strong diffuse S100 and SOX10 with CD99 expression are characteristic.",
      "Melanocytic marker expression may overlap with related neurocristic lesions; use the complete profile and fusion context.",
    ],
    molecular: [
      "FET-ETS family fusions are characteristic; molecular testing supports classification and helps separate from other neural crest-derived tumors.",
    ],
    differential: [
      [
        "Clear cell sarcoma",
        "CCS is typically deep, infiltrative, and cytologically more conspicuous with prominent nucleoli; shares melanocytic markers but has EWSR1::ATF1/CREB1 rather than the defining FET-ETS family fusion.",
      ],
      [
        "Melanoma",
        "Clinical skin primary, junctional component, and broader melanoma phenotype may favor melanoma; molecular and clinicopathologic correlation is essential.",
      ],
      [
        "Malignant gastrointestinal neuroectodermal tumor",
        "MGNET is deep GI/mesenteric and usually lacks melanocytic differentiation; superficial site and FET-ETS phenotype favor this superficial tumor.",
      ],
      [
        "Schwannoma",
        "Schwannoma has characteristic Antoni A/B and/or Verocay architecture and lacks the defining FET-ETS fusion.",
      ],
    ],
    pitfalls: [
      "Do not classify a bland superficial SOX10/S100-positive lesion solely by immunophenotype; the fusion and clinical site are important.",
      "Do not conflate this entity with deep clear cell sarcoma or gastrointestinal neuroectodermal tumor.",
    ],
    prognosis: [
      "The supplied WHO text describes generally indolent behavior, but recurrence/metastasis can occur; follow-up data remain limited.",
    ],
  },
  {
    name: "Kinase-altered spindle cell neoplasm",
    group: "Molecularly defined / emerging entities",
    behavior: "Variable; includes locally aggressive and malignant tumors",
    site: "Soft tissue of extremities and trunk; may be superficial or deep.",
    criteria: [
      "Essential: fibrosarcoma-like, MPNST-like, or lipofibromatosis-like morphology; often CD34/S100 coexpression; kinase-pathway fusion or activating alteration (e.g., NTRK1/2/3, RET, RAF1, ALK, FGFR1, EGFR, BRAF).",
    ],
    morphology: [
      "Morphologic spectrum includes infiltrative fascicular spindle-cell tumors resembling fibrosarcoma or MPNST and lipofibromatosis-like lesions.",
      "Some tumors are relatively bland; others show increased cellularity, atypia, and mitotic activity. The morphologic pattern does not reliably identify the driver.",
      "CD34 and S100 coexpression is a useful clue in selected cases but is not universal.",
    ],
    ihc: [
      "CD34 and S100 may be coexpressed; SOX10 may vary depending on differentiation.",
      "Pan-TRK, ALK, and other kinase-related IHC may be useful screening tools, but molecular confirmation is required.",
    ],
    molecular: [
      "Recurrent kinase fusions/alterations involve NTRK1, NTRK2, NTRK3, RET, RAF1, ALK, FGFR1, EGFR, and BRAF.",
      "Use RNA-based NGS/fusion testing where possible; DNA panels may miss some intronic fusion events. Identify the actual driver because it may have therapeutic implications.",
    ],
    differential: [
      [
        "Conventional fibrosarcoma",
        "Morphology may overlap; a kinase fusion identifies a molecularly defined subset and may alter treatment.",
      ],
      [
        "MPNST",
        "MPNST may show S100/SOX10 but typically has a different clinical/molecular context; kinase fusion testing is important in atypical spindle tumors.",
      ],
      [
        "Lipofibromatosis",
        "A bland infiltrative fibroblastic tumor with adipose entrapment may overlap morphologically; kinase alteration defines a subset.",
      ],
      [
        "NTRK-rearranged spindle-cell neoplasm",
        "This is within the broader kinase-altered spectrum; confirm the specific kinase fusion rather than relying on pan-TRK staining.",
      ],
    ],
    pitfalls: [
      "Pan-TRK immunostaining is a screening surrogate, not proof of an NTRK fusion.",
      "Do not treat all morphologically similar spindle tumors as one entity; molecular driver classification is central.",
    ],
    prognosis: [
      "Behavior depends on the specific tumor and molecular driver; targeted therapy may be relevant in advanced disease.",
    ],
  },
  {
    name: "Pseudoendocrine sarcoma",
    group: "Molecularly defined / emerging entities",
    behavior: "Malignant; limited case numbers",
    site: "Predominantly soft tissue of extremities; often deep-seated.",
    criteria: [
      "Essential: nested/trabecular architecture; uniform epithelioid cells with round nuclei and speckled chromatin; nuclear β-catenin in most; keratin and neuroendocrine markers negative.",
      "Desirable: CTNNB1 alteration in selected cases.",
    ],
    morphology: [
      "Uniform epithelioid cells in nests and trabeculae, resembling a neuroendocrine neoplasm.",
      "Round nuclei with finely speckled chromatin and relatively uniform cytology; architecture may be organoid.",
      "The name reflects morphologic mimicry, not true neuroendocrine differentiation.",
    ],
    ihc: [
      "Nuclear β-catenin is present in most cases.",
      "Keratins and neuroendocrine markers are negative, helping exclude epithelial and neuroendocrine neoplasms.",
    ],
    molecular: [
      "CTNNB1 alterations are reported and may support diagnosis; molecular testing is desirable in selected cases.",
    ],
    differential: [
      [
        "Neuroendocrine neoplasm",
        "Pseudoendocrine sarcoma is negative for neuroendocrine markers and keratins; nuclear β-catenin supports the diagnosis.",
      ],
      [
        "Epithelioid sarcoma",
        "Epithelioid sarcoma often expresses keratin/EMA and loses INI1; pseudoendocrine sarcoma is typically keratin-negative.",
      ],
      [
        "Other nested epithelioid sarcomas",
        "Integrate site, nuclear β-catenin, negative neuroendocrine/epithelial markers, and CTNNB1 status.",
      ],
    ],
    pitfalls: [
      "Do not infer neuroendocrine differentiation from nested/trabecular morphology alone.",
      "Nuclear β-catenin is supportive but should be interpreted with the full phenotype.",
    ],
    prognosis: [
      "Malignant potential is recognized; outcome data are limited by rarity.",
    ],
  },
  {
    name: "NUT-rearranged sarcoma",
    group: "Molecularly defined / emerging entities",
    behavior: "Malignant",
    site: "Deep soft tissue; may arise in multiple anatomic regions.",
    criteria: [
      "Essential: monomorphic round, epithelioid, and/or spindle cells in sheets, nests, or fascicles with variable collagenous/myxoid stroma, plus a NUT-family gene fusion with a specific partner.",
      "Desirable: nuclear NUT immunoreactivity.",
    ],
    morphology: [
      "Pure or mixed population of round, epithelioid, and spindle cells with monomorphic nuclei.",
      "Sheets, nests, or fascicles; variable collagenous or myxoid stroma. Cytologic appearance may be nonspecific.",
    ],
    ihc: [
      "Nuclear NUT staining is a useful surrogate and supports the diagnosis; a negative stain does not replace molecular assessment if suspicion remains.",
    ],
    molecular: [
      "NUTM1 rearrangements occur with different partners; the partner and fusion context matter for classification.",
      "Demonstrate the fusion by RNA sequencing or an appropriate rearrangement assay; molecular confirmation is central.",
    ],
    differential: [
      [
        "Ewing sarcoma / round-cell sarcoma",
        "Round-cell morphology overlaps; NUT immunohistochemistry and fusion testing distinguish NUT-rearranged sarcoma.",
      ],
      [
        "Synovial sarcoma",
        "Can be spindle/epithelioid and keratin-positive; SS18::SSX fusion or surrogate IHC supports synovial sarcoma, while NUT fusion supports this entity.",
      ],
      [
        "Poorly differentiated carcinoma",
        "NUT-rearranged sarcoma is a mesenchymal tumor; integrate morphology, NUT, keratin, and fusion testing.",
      ],
    ],
    pitfalls: [
      "NUT staining is a surrogate; molecular confirmation is recommended in diagnostically consequential cases.",
      "Do not assume that all NUT-positive tumors are identical without identifying the fusion partner.",
    ],
    prognosis: [
      "Aggressive malignant behavior is reported; prognosis varies with site and disease extent.",
    ],
  },
  {
    name: "PATZ1-rearranged sarcoma",
    group: "Molecularly defined / emerging entities",
    behavior: "Malignant; clinical behavior variable",
    site: "Soft tissue, including deep extremity and trunk.",
    criteria: [
      "Essential: monomorphic round-to-spindle cells in fibromyxoid background with thick fibrous capsule and hyalinized vessels; coexpression of skeletal-muscle and myoepithelial markers; PATZ1 rearrangement.",
    ],
    morphology: [
      "Monomorphic round-to-spindle cells in a fibromyxoid stroma, often with thick fibrous capsule and hyalinized vessels.",
      "May show variable cellularity and patterns that overlap with other spindle/round-cell sarcomas.",
    ],
    ihc: [
      "Coexpression of skeletal muscle markers and myoepithelial markers is characteristic; interpret the panel rather than a single marker.",
      "Myogenic markers should be assessed alongside myoepithelial markers to distinguish from conventional rhabdomyosarcoma.",
    ],
    molecular: [
      "PATZ1 rearrangement is defining; fusion partners include EWSR1 and other partners reported in the literature.",
      "Molecular confirmation is essential in the appropriate morphologic/immunophenotypic setting.",
    ],
    differential: [
      [
        "Rhabdomyosarcoma",
        "PATZ1-rearranged sarcoma may express skeletal muscle markers but also shows myoepithelial marker coexpression and PATZ1 rearrangement.",
      ],
      [
        "Myoepithelial tumor",
        "Myoepithelial phenotype overlaps; the characteristic morphology and PATZ1 rearrangement establish the distinct entity.",
      ],
      [
        "Ewing/round-cell sarcoma",
        "Monomorphic round-cell morphology overlaps; fusion testing is required.",
      ],
    ],
    pitfalls: [
      "Myogenic marker positivity alone is not sufficient for rhabdomyosarcoma.",
      "Do not diagnose based on morphology/IHC alone without considering PATZ1 rearrangement.",
    ],
    prognosis: ["Reported outcomes are variable; long-term data are limited."],
  },
  {
    name: "Synovial sarcoma",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Malignant",
    site: "Deep soft tissue of extremities, especially near joints; also trunk, head/neck, and visceral sites.",
    criteria: [
      "Essential: characteristic monophasic spindle-cell, biphasic epithelial/spindle-cell, or poorly differentiated morphology in the appropriate setting, with SS18::SSX fusion or a highly specific surrogate immunophenotype.",
      "Desirable: demonstration of SS18 rearrangement/fusion or validated SS18::SSX surrogate IHC.",
    ],
    morphology: [
      "Monophasic tumors show uniform spindle cells in intersecting fascicles with wiry collagen and branching vessels.",
      "Biphasic tumors contain epithelial glands/nests admixed with spindle-cell component.",
      "Poorly differentiated areas may be round-cell, epithelioid, or highly cellular and can mimic other sarcomas.",
    ],
    ihc: [
      "Keratin and EMA are variable in monophasic tumors and more conspicuous in epithelial areas of biphasic tumors.",
      "TLE1 is sensitive but not specific. SS18::SSX fusion-specific antibody is highly useful when available.",
    ],
    molecular: [
      "Defining t(X;18) rearrangement produces SS18::SSX1, SS18::SSX2, or rarely SS18::SSX4 fusion.",
      "Fusion testing by RNA sequencing, RT-PCR, or SS18 break-apart FISH; fusion-specific IHC can serve as a strong surrogate.",
    ],
    differential: [
      [
        "MPNST",
        "Both can be spindle-cell tumors; synovial sarcoma often expresses keratin/EMA and has SS18::SSX, whereas MPNST has nerve association and may show H3K27me3 loss.",
      ],
      [
        "Fibrosarcoma / solitary fibrous tumor",
        "Morphology overlaps; SS18::SSX fusion is decisive. SFT is supported by nuclear STAT6.",
      ],
      [
        "Ewing sarcoma",
        "Poorly differentiated synovial sarcoma may be round-cell; keratin/EMA and SS18::SSX distinguish it from Ewing family tumors.",
      ],
      [
        "Carcinoma",
        "Biphasic synovial sarcoma can mimic carcinoma; demonstrate spindle-cell component and SS18::SSX fusion.",
      ],
    ],
    pitfalls: [
      "TLE1 is not specific and should not be used alone.",
      "A negative SS18 break-apart FISH result may require RNA-based fusion testing if morphology is compelling.",
      "The historical term “synoviosarcoma” is not recommended.",
    ],
    prognosis: [
      "Risk depends on size, site, grade, and stage; late recurrence and metastasis may occur.",
    ],
  },
  {
    name: "Epithelioid sarcoma",
    group: "Established malignant tumors of uncertain differentiation",
    behavior:
      "Malignant; regional lymph-node metastases are relatively characteristic",
    site: "Distal type: hands/forearms; proximal type: pelvis, perineum, genital region, and trunk.",
    criteria: [
      "Essential: nodular epithelioid/spindle-cell tumor with central necrosis or pseudogranulomatous pattern and loss of SMARCB1/INI1 in most cases.",
      "Confirm with epithelial marker expression and appropriate clinical/anatomic setting.",
    ],
    morphology: [
      "Distal type: nodules of epithelioid cells with central necrosis, often creating a pseudogranulomatous appearance.",
      "Proximal type: larger epithelioid/rhabdoid cells, often with more marked atypia; may show myxoid areas and can mimic extrarenal rhabdoid tumor.",
      "Tumor cells may be epithelioid or spindle-shaped; necrosis and infiltrative growth are common.",
    ],
    ihc: [
      "Broad-spectrum keratins and EMA are commonly positive.",
      "Loss of nuclear INI1/SMARCB1 is characteristic in most cases; internal non-neoplastic cells must retain staining.",
      "CD34 may be positive; S100 and endothelial markers are generally not defining.",
    ],
    molecular: [
      "Biallelic SMARCB1 inactivation/deletion is the central molecular event in most cases.",
      "Rare cases may have alternative molecular mechanisms; loss of INI1 is a key surrogate.",
    ],
    differential: [
      [
        "Extrarenal rhabdoid tumor",
        "Both may lose INI1 and express keratin/EMA. Epithelioid sarcoma usually shows nodular/pseudogranulomatous architecture and occurs in characteristic distal/proximal sites; ERT typically affects infants/young children and has diffuse rhabdoid morphology.",
      ],
      [
        "Carcinoma",
        "Epithelioid sarcoma expresses keratin/EMA but is a mesenchymal tumor with characteristic morphology and INI1 loss.",
      ],
      [
        "Granulomatous inflammation",
        "Central necrosis and epithelioid cells can mimic granuloma; demonstrate neoplastic keratin-positive cells and assess INI1.",
      ],
      [
        "MPNST",
        "MPNST usually has nerve association and different phenotype; INI1 loss alone is not specific.",
      ],
    ],
    pitfalls: [
      "INI1 loss is not unique to epithelioid sarcoma; correlate with age, site, morphology, and phenotype.",
      "Rhabdoid cells in proximal epithelioid sarcoma can mimic extrarenal rhabdoid tumor.",
      "The historical distal/proximal subtypes differ morphologically; sample adequately.",
    ],
    prognosis: [
      "Local recurrence and distant metastasis are significant risks; regional lymph-node involvement is relatively common.",
    ],
  },
  {
    name: "Alveolar soft part sarcoma (ASPS)",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Malignant; often indolent but metastatic",
    site: "Deep soft tissue of extremities; head and neck in children; also trunk and other sites.",
    criteria: [
      "Essential: nested/alveolar growth of eosinophilic polygonal cells with prominent sinusoidal capillaries.",
      "Desirable: nuclear TFE3 expression and/or ASPSCR1::TFE3 fusion.",
    ],
    morphology: [
      "Uniform large polygonal cells in nests separated by thin fibrovascular septa; central discohesion creates pseudoalveolar pattern.",
      "Abundant granular eosinophilic cytoplasm, vesicular nuclei, and prominent nucleoli; glycogen may impart clear-cell appearance.",
      "PAS-positive, diastase-resistant crystals are present in approximately 80%, sometimes sparse. Mitotic activity is often low; vascular invasion is common.",
    ],
    ihc: [
      "Nuclear TFE3 (C-terminal antibody) is characteristic; cathepsin K and GPNMB are consistently expressed.",
      "Usually negative for epithelial, neuroendocrine, and melanocytic markers. Desmin may be focal; myogenin and MYOD1 are negative.",
    ],
    molecular: [
      "ASPSCR1::TFE3 fusion is the defining alteration in most cases; detection is useful in selected cases.",
      "TFE3 IHC is a surrogate and can be interpreted with morphology; confirm fusion when needed.",
    ],
    differential: [
      [
        "Granular cell tumor",
        "Both may have granular cytoplasm; ASPS shows pseudoalveolar nests, sinusoidal vessels, TFE3, and crystals; granular cell tumor expresses S100/SOX10.",
      ],
      [
        "Paraganglioma",
        "Can show nested architecture and vascularity; ASPS is negative for neuroendocrine markers and shows TFE3/fusion.",
      ],
      [
        "Metastatic renal cell carcinoma",
        "Clear/eosinophilic nested tumor with vessels; correlate with clinical history and renal markers, and use ASPSCR1::TFE3 testing.",
      ],
      [
        "PEComa",
        "Both can express TFE3; PEComa usually expresses melanocytic markers and often smooth-muscle markers, whereas ASPS is typically negative for melanocytic markers.",
      ],
    ],
    pitfalls: [
      "Low mitotic activity does not imply benign behavior.",
      "TFE3 IHC is a useful surrogate but is not by itself fully specific; correlate with molecular testing and exclusion of mimics.",
      "Do not confuse ASPS with granular cell tumor or paraganglioma in pediatric head/neck lesions.",
    ],
    prognosis: [
      "Distant metastasis at diagnosis, older age, size >10 cm, and truncal location are adverse factors.",
      "Metastases may occur late; conventional chemotherapy has limited activity. Targeted and immune therapies have changed treatment options.",
    ],
  },
  {
    name: "FET-CREB family epithelioid mesenchymal tumor",
    group: "Molecularly defined malignant epithelioid tumors",
    behavior: "Malignant; frequent recurrence/progression and metastasis",
    site: "Often mesothelial-lined cavities, especially abdominal/peritoneal; also other sites.",
    criteria: [
      "Essential: monomorphic epithelioid/round-cell neoplasm with keratin expression and FET-CREB family fusion, after excluding other established entities with the same fusion family.",
      "Fusion alone is not specific; clinicopathologic correlation is mandatory.",
    ],
    morphology: [
      "Solid sheets, cords, or nests of medium-sized epithelioid/round cells with eosinophilic-to-clear cytoplasm; some small-round-cell or focal spindle-cell areas.",
      "Hyaline sclerosis may separate organoid nests/cords. Abdominal lesions may be encapsulated; other sites may be infiltrative.",
      "Lymphoplasmacytic cuffing is common; cystic change frequent, hemorrhage usually absent. Focal necrosis may occur; mitotic activity often low (<4/2 mm²).",
    ],
    ihc: [
      "Broad-spectrum keratin and EMA are commonly positive; peritoneal cases may express WT1 (C-terminal) and occasionally HEG1.",
      "Calretinin is almost always negative and BAP1 is retained; S100, SOX10, HMB45, and Melan-A are consistently negative. Desmin is usually negative.",
      "Variable ALK, CD99, CD34, synaptophysin, inhibin, and MUC4 can mislead.",
    ],
    molecular: [
      "Fusions involve EWSR1 or FUS with CREB-family genes (CREM, ATF1, CREB1); EWSR1::CREM is most frequent in reported genetically confirmed cases.",
      "FET-CREB fusions also occur in AFH, clear cell sarcoma, and other tumors; the fusion is critical but not entity-specific.",
    ],
    differential: [
      [
        "Epithelioid mesothelioma",
        "Can share keratin, WT1, and epithelioid morphology; FET-CREB fusion, retained BAP1, almost always negative calretinin, and lack of classic mesothelioma architecture/course support this tumor.",
      ],
      [
        "AFH",
        "AFH often has desmin/SOX9 and peripheral pseudocapsule/hemorrhagic spaces; FET-CREB epithelioid tumors are keratin-positive and usually desmin-negative.",
      ],
      [
        "Clear cell sarcoma / MGNET",
        "These share FET-CREB fusions but express melanocytic markers (CCS) or arise in GI tract with neuroectodermal phenotype (MGNET); FET-CREB epithelioid tumors are consistently S100/SOX10/HMB45/Melan-A-negative.",
      ],
      [
        "Sclerosing epithelioid fibrosarcoma",
        "MUC4 positivity may overlap; FET-CREB fusion and keratin profile help resolve.",
      ],
      [
        "Neuroendocrine neoplasm",
        "Some cases express synaptophysin; chromogranin is rare. Evaluate morphology and broad panel rather than one neuroendocrine marker.",
      ],
    ],
    pitfalls: [
      "Do not equate any FET-CREB fusion with this entity; first exclude AFH, clear cell sarcoma, MGNET, and other established fusion-defined tumors.",
      "WT1 positivity alone does not establish mesothelioma.",
      "Retained BAP1 and negative calretinin are useful context, not standalone proof.",
    ],
    prognosis: [
      "Approximately three quarters recur or progress; about one third develop systemic metastasis or die of disease.",
    ],
  },
  {
    name: "Clear cell sarcoma of soft tissue",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Aggressive malignant tumor with late metastases",
    site: "Deep soft tissue of distal extremities, especially tendons/aponeuroses; may occur elsewhere.",
    criteria: [
      "Essential: nested/fascicular architecture; plump spindle/ovoid cells with pale eosinophilic cytoplasm and prominent nucleoli; melanocytic marker expression (S100, SOX10, Melan-A, HMB45).",
      "Desirable: EWSR1::ATF1 or EWSR1::CREB1 fusion.",
    ],
    morphology: [
      "Nested or fascicular growth partitioned by thin fibrous septa; often infiltrates dense fibrous tissue.",
      "Plump spindle/ovoid cells with pale eosinophilic/amphophilic cytoplasm, vesicular nuclei, and macronucleoli; true clear cytoplasm is uncommon despite the name.",
      "Melanin pigment is present in >50% but may be subtle; multinucleated wreath-like giant cells may occur. Mitotic activity can be low; necrosis in roughly one third.",
    ],
    ihc: [
      "Consistent S100, SOX10, Melan-A, HMB45, and MITF expression.",
      "Diffuse PRAME staining is generally absent; interpret in context.",
    ],
    molecular: [
      "EWSR1::ATF1 is most common; EWSR1::CREB1 is an alternative. EWSR1 rearrangement alone is less specific than identifying the fusion partner.",
      "Fusion drives MITF pathway activation and melanocytic differentiation.",
    ],
    differential: [
      [
        "Metastatic melanoma",
        "CCS can be nearly indistinguishable immunohistochemically. Deep soft-tissue/tendon-associated primary, characteristic architecture, and EWSR1::ATF1/CREB1 fusion favor CCS; correlate with skin/mucosal history.",
      ],
      [
        "AFH",
        "Both may harbor EWSR1::ATF1/CREB1; AFH is usually desmin/SOX9-positive and lacks melanocytic markers, with pseudocapsule/lymphoplasmacytic cuff.",
      ],
      [
        "Superficial neurocristic tumor",
        "Usually superficial and cytologically bland, with FET-ETS fusion; CCS is typically deep, infiltrative, and has prominent nucleoli.",
      ],
      [
        "PEComa",
        "PEComa coexpresses melanocytic and smooth-muscle markers; CCS has melanocytic markers without the characteristic smooth-muscle phenotype.",
      ],
    ],
    pitfalls: [
      "Despite the name, cells are usually not truly clear.",
      "Low mitotic activity does not indicate indolent behavior; late metastases are characteristic.",
      "EWSR1 break-apart positivity alone is not sufficient without partner and clinicopathologic context.",
    ],
    prognosis: [
      "Recurrence approaches 40%; pulmonary or nodal metastases occur in at least 30–50%, sometimes more than a decade after diagnosis.",
      "Large size, necrosis, incomplete excision, and nodal involvement are adverse features.",
    ],
  },
  {
    name: "Extraskeletal myxoid chondrosarcoma (EMC)",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Malignant; often prolonged course with late distant recurrence",
    site: "Deep soft tissue, usually proximal extremities and limb girdles.",
    criteria: [
      "Essential: generally bland cells with eosinophilic cytoplasm arranged in strands/cords in predominantly myxoid stroma.",
      "Desirable: NR4A3 rearrangement in selected cases.",
    ],
    morphology: [
      "Multinodular tumor with fibrous septa and hypocellular lobules containing abundant pale-blue myxoid/chondromyxoid matrix; strikingly hypovascular.",
      "Uniform round-to-oval cells form interconnected cords, clusters, trabeculae, or cribriform networks; delicate processes and modest eosinophilic/vacuolated cytoplasm.",
      "Well-formed hyaline cartilage is virtually never present. Rare hypercellular, high-grade, pseudopapillary, rhabdoid, or non-myxoid solid variants occur.",
    ],
    ihc: [
      "S100 is positive in no more than 20%; KIT in up to 30%. INSM1/synaptophysin may be positive; pan-TRK can be positive in a subset.",
      "Keratin, GFAP, and muscle markers are usually negative. Rhabdoid examples may lose INI1.",
    ],
    molecular: [
      ">90% harbor NR4A3 rearrangement, most often EWSR1::NR4A3, less commonly TAF15::NR4A3; rare alternative partners occur.",
      "NR4A3 rearrangement is a hallmark but has rarely been reported in a distinct subset of uterine leiomyosarcomas; interpret in site/context.",
    ],
    differential: [
      [
        "Myoepithelial tumor",
        "May show cords in myxoid matrix; keratin/EMA and S100/SOX10/GFAP phenotype favors myoepithelial tumor, while NR4A3 fusion supports EMC.",
      ],
      [
        "Low-grade fibromyxoid sarcoma",
        "LGFMS has alternating fibrous/myxoid zones and MUC4; EMC has multinodular hypovascular myxoid lobules and NR4A3 rearrangement.",
      ],
      [
        "Chordoma",
        "Chordoma expresses brachyury and keratins and is axial; EMC lacks well-formed cartilage and is usually soft-tissue based.",
      ],
      [
        "Undifferentiated round-cell sarcoma",
        "Solid high-grade EMC may mimic round-cell sarcoma; NR4A3 rearrangement is decisive in the correct context.",
      ],
    ],
    pitfalls: [
      "The name is misleading: true cartilage is generally absent.",
      "S100 negativity does not exclude EMC; most cases are S100-negative.",
      "Pan-TRK, KIT, or neuroendocrine marker positivity can occur and should not redirect diagnosis without molecular context.",
    ],
    prognosis: [
      "Older age, large size (>100 mm), metastasis at presentation, and proximal location are adverse factors.",
      "Distant recurrence can occur late; variant non-EWSR1 fusions may be associated with more aggressive morphology/behavior.",
    ],
  },
  {
    name: "Desmoplastic small round cell tumor (DSRCT)",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Highly aggressive malignant tumor",
    site: "Usually peritoneal/abdominal cavity in young males; can occur at extra-abdominal sites.",
    criteria: [
      "Essential: nests of predominantly small round cells in variable desmoplastic stroma with keratin and desmin immunopositivity.",
      "Desirable: EWSR1 rearrangement or EWSR1::WT1 fusion.",
    ],
    morphology: [
      "Sharply defined nests and trabeculae of small round cells in prominent desmoplastic collagenous stroma; central necrosis common.",
      "Cells have scant cytoplasm, hyperchromatic nuclei, dispersed chromatin, and inconspicuous nucleoli; mitoses frequent. Rhabdoid inclusions, rosettes, or tubular structures may occur.",
      "Desmoplasia may be less conspicuous when tumor trabeculae become confluent.",
    ],
    ihc: [
      "Polyphenotypic profile: keratin, EMA, and desmin (often dot-like) positivity.",
      "Nuclear WT1 with C-terminal antibody is usually positive; N-terminal antibody is not. Myogenin and MYOD1 are consistently negative.",
      "Some cases express neuroendocrine markers, but INSM1 is not typically positive.",
    ],
    molecular: [
      "Characteristic t(11;22)(p13;q12) produces EWSR1::WT1 fusion; detection is useful for confirmation.",
      "Tumors are otherwise genomically relatively quiet; secondary alterations are uncommon.",
    ],
    differential: [
      [
        "Ewing sarcoma",
        "Both are small round-cell tumors; DSRCT has desmoplasia, keratin/desmin coexpression, C-terminal WT1, and EWSR1::WT1 rather than EWSR1::FLI1/ERG.",
      ],
      [
        "Rhabdomyosarcoma",
        "Desmin positivity overlaps, but DSRCT is keratin-positive and myogenin/MYOD1-negative.",
      ],
      [
        "Neuroendocrine carcinoma",
        "Nested architecture and occasional neuroendocrine marker expression overlap; keratin/desmin polyphenotype and WT1 C-terminal staining support DSRCT.",
      ],
      [
        "Wilms tumor / other WT1-positive tumors",
        "Use anatomic context, morphology, antibody epitope, and EWSR1::WT1 fusion.",
      ],
    ],
    pitfalls: [
      "Desmin is often dot-like; do not misinterpret as specific skeletal-muscle differentiation.",
      "Use WT1 antibody directed to the C-terminus; N-terminal antibody may be negative.",
      "EWSR1 break-apart alone is not fully specific; identify the WT1 partner when possible.",
    ],
    prognosis: [
      "Overall survival remains poor despite multimodality therapy; reported 5-year survival is approximately 10–23%.",
      "Absence of liver or extra-abdominal disease may be associated with better outcome.",
    ],
  },
  {
    name: "Extrarenal rhabdoid tumor (ERT)",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Highly aggressive malignant tumor",
    site: "Extrarenal soft tissue and organs, predominantly infants and young children.",
    criteria: [
      "Essential: infant/young child, rhabdoid cell morphology, and loss of SMARCB1/INI1 expression.",
    ],
    morphology: [
      "Infiltrative hypercellular mass of sheets or solid trabeculae of rhabdoid cells with large vesicular round/bean-shaped nuclei, prominent nucleoli, and abundant cytoplasm.",
      "Juxtanuclear eosinophilic PAS-positive, diastase-resistant hyaline inclusions/globules are characteristic. Mitoses and necrosis are prominent.",
      "Some tumors are predominantly small round-cell with only scattered rhabdoid cells.",
    ],
    ihc: [
      "Loss of nuclear INI1/SMARCB1 is characteristic; confirm intact internal positive controls.",
      "Keratin and EMA are common (often dot-like); synaptophysin, SALL4, and glypican-3 may be positive. CD34 is typically negative.",
      "Desmin is unusual; if positive, myogenin/MYOD1 should be checked and are negative in ERT.",
    ],
    molecular: [
      "Most show biallelic SMARCB1 inactivation, including mutation, deletion, or copy-neutral LOH; rare cases have SMARCA4 alteration with retained INI1.",
      "Germline SMARCB1/SMARCA4 alterations may indicate rhabdoid tumor predisposition syndrome and warrant genetic evaluation.",
    ],
    differential: [
      [
        "Epithelioid sarcoma",
        "Both may lose INI1 and express keratin/EMA. Epithelioid sarcoma more often has nodular/pseudogranulomatous architecture and occurs in distal/proximal characteristic sites; ERT is typically in very young children with diffuse rhabdoid morphology.",
      ],
      [
        "DSRCT",
        "Both may express keratin and desmin; DSRCT has desmoplastic nests, dot-like desmin, C-terminal WT1, and EWSR1::WT1.",
      ],
      [
        "Rhabdomyosarcoma",
        "ERT lacks myogenin/MYOD1; these markers support skeletal muscle differentiation.",
      ],
      [
        "Carcinoma / neuroendocrine tumor",
        "ERT may express epithelial and neural markers; age, rhabdoid morphology, and INI1 loss are key.",
      ],
    ],
    pitfalls: [
      "INI1 loss alone does not distinguish ERT from epithelioid sarcoma and other SWI/SNF-deficient tumors.",
      "Retained INI1 does not exclude every rhabdoid tumor; consider SMARCA4 in rare cases.",
      "Desmin positivity should trigger myogenin/MYOD1 testing, not automatic classification as rhabdomyosarcoma.",
    ],
    prognosis: [
      "Outcome is poor across sites; median survival is approximately one year and 5-year survival is <15% in reported series.",
    ],
  },
  {
    name: "PEComa",
    group: "Established malignant tumors of uncertain differentiation",
    behavior:
      "Variable; malignant PEComa defined by adverse morphologic features",
    site: "Abdominal cavity, pelvis, retroperitoneum, uterus, and GI tract; broad distribution.",
    criteria: [
      "Essential: epithelioid and/or spindle cells with granular eosinophilic-to-clear cytoplasm, nested/trabecular/sheet-like architecture with perivascular orientation, and variable melanocytic plus smooth-muscle marker expression.",
      "Desirable: TFE3 expression/rearrangement when smooth-muscle markers are negative.",
    ],
    morphology: [
      "Nested epithelioid cells with abundant granular eosinophilic or clear cytoplasm and round nuclei; thin-walled capillaries surround nests.",
      "Perivascular radial growth is characteristic; sclerosing variant shows cords/trabeculae in dense collagen.",
      "A classic triphasic angiomyolipoma pattern may occur but is uncommon outside kidney/liver. Malignant tumors show variable mitoses, necrosis, atypia, and pleomorphism.",
    ],
    ihc: [
      "Melanocytic markers: HMB45 (most sensitive), Melan-A, cathepsin K. Smooth-muscle markers: SMA, desmin, h-caldesmon; SMA is often more extensive.",
      "S100 nuclear staining is generally absent. Some tumors lack smooth-muscle markers.",
      "Strong nuclear TFE3 in approximately 15–20%; TFE3-rearranged tumors often have epithelioid/alveolar morphology and may lack muscle markers.",
    ],
    molecular: [
      "Most harbor TSC2 variants/16p loss; a small subset has TFE3 fusions (commonly SFPQ, ASPSCR1, or NONO).",
      "TFE3-rearranged PEComas generally lack TSC2 alterations and are pathogenetically distinct. A subset is associated with tuberous sclerosis.",
    ],
    differential: [
      [
        "Clear cell sarcoma",
        "Both express melanocytic markers; CCS is typically S100/SOX10-positive and lacks smooth-muscle phenotype, with EWSR1::ATF1/CREB1 fusion.",
      ],
      [
        "Alveolar soft part sarcoma",
        "Both can show TFE3; ASPS is typically negative for melanocytic markers and smooth-muscle markers, and has ASPSCR1::TFE3.",
      ],
      [
        "Melanoma",
        "Melanoma has melanocytic phenotype but lacks characteristic perivascular growth and smooth-muscle coexpression; correlate with clinical primary.",
      ],
      [
        "Leiomyosarcoma",
        "Smooth-muscle markers overlap, but melanocytic marker expression and perivascular epithelioid morphology support PEComa.",
      ],
      [
        "TFE3-rearranged renal cell carcinoma",
        "Can share TFE3 and clear/eosinophilic cells; correlate with renal origin, epithelial markers, and molecular context.",
      ],
    ],
    pitfalls: [
      "HMB45 is sensitive but not entirely specific; use the combined melanocytic/smooth-muscle phenotype and morphology.",
      "TFE3-rearranged PEComas may lack smooth-muscle markers; consider TFE3 testing in the appropriate phenotype.",
      "Do not rely on the historic terms “sugar tumor of lung” or “clear cell myomelanocytic tumor.”",
    ],
    prognosis: [
      "Large size (>5 cm), infiltrative margins, marked atypia/pleomorphism, conspicuous mitoses, and necrosis are associated with aggressive behavior.",
      "Common metastatic sites include liver, lymph nodes, lungs, and bone.",
    ],
  },
  {
    name: "Intimal sarcoma",
    group: "Established malignant tumors of uncertain differentiation",
    behavior: "Highly aggressive malignant tumor",
    site: "Large-caliber pulmonary arteries, aorta, and cardiac chambers (often left atrium).",
    criteria: [
      "Essential: intraluminal growth within a large-caliber blood vessel or cardiac chamber and spindle-cell/variably pleomorphic morphology.",
      "Desirable: MDM2 and/or CDK4 amplification in selected cases; amplification is helpful but not specific.",
    ],
    morphology: [
      "Intraluminal mass may resemble thrombus or thromboembolus; can extend along vessel or cardiac chamber.",
      "Mildly to severely atypical spindle cells with variable mitoses, necrosis, and nuclear polymorphism; myxoid or epithelioid areas may occur.",
      "May show cartilage, osteoid, or focal rhabdomyosarcomatous differentiation. SMA is variable; desmin may be positive; myogenin/MYOD1 mark rhabdomyoblastic areas.",
    ],
    ihc: [
      "MDM2 nuclear expression in at least 70%; CDK4 may be positive.",
      "SMA variable, desmin in a subset; myogenin/MYOD1 only with rhabdomyosarcomatous differentiation.",
    ],
    molecular: [
      "MDM2 amplification is frequent, often with CDK4 and PDGFRA coamplification; MDM2/CDK4 amplification is supportive but not specific.",
      "Some cases show amplification/high polysomy of receptor tyrosine kinase genes (PDGFRA, KIT, PDGFRB, EGFR). Molecular subsets include copy-number-high and rare MSI-high-like tumors.",
    ],
    differential: [
      [
        "Thrombus / organized thromboembolus",
        "Intimal sarcoma is a true intraluminal neoplasm with atypical spindle/pleomorphic cells; imaging may show heterogeneous intravascular material and FDG uptake.",
      ],
      [
        "Undifferentiated pleomorphic sarcoma of heart",
        "Can share MDM2 amplification/methylation profile; anatomic intraluminal origin in large vessel/cardiac chamber supports intimal sarcoma.",
      ],
      [
        "Leiomyosarcoma",
        "Fascicular spindle morphology and SMA/desmin may overlap; MDM2 amplification and intraluminal origin favor intimal sarcoma.",
      ],
      [
        "Dedifferentiated liposarcoma",
        "MDM2 amplification overlaps; exclude a primary retroperitoneal/soft-tissue DDLPS and use the intraluminal vascular/cardiac origin.",
      ],
      [
        "Metastatic sarcoma",
        "Assess primary site and true vascular intimal origin; MDM2 amplification alone is not diagnostic.",
      ],
    ],
    pitfalls: [
      "MDM2 or CDK4 amplification is not specific; do not diagnose intimal sarcoma without the characteristic intraluminal site and growth.",
      "Aortic lesions may mimic atherosclerosis with adherent thrombus or aneurysmal change.",
      "Pulmonary artery intimal sarcoma may be misdiagnosed as recurrent pulmonary embolism.",
    ],
    prognosis: [
      "Poor prognosis; mean survival reported at 5–9 months for aortic and 13–18 months for pulmonary/cardiac tumors.",
      "Multimodal therapy is often used; no established standard of care. Anthracycline-based therapy has some activity.",
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((x) => x.group)))];
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
export default function TumorsOfUncertainDifferentiationPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Synovial sarcoma",
    "Myoepithelioma, myoepithelial carcinoma, and mixed tumor",
    "Phosphaturic mesenchymal tumor (PMT)",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            x.site,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flat(),
            ...x.pitfalls,
            ...x.prognosis,
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
            PathologyGPS / Soft Tissue Tumors / Tumors of Uncertain
            Differentiation
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Tumors of Uncertain Differentiation
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing essential
                criteria, lineage assessment, defining molecular alterations,
                and practical differential diagnosis across benign,
                intermediate, and malignant entities.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Start with architecture and cytology; use immunophenotype to
                test lineage, then use molecular findings to establish the
                entity.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Many defining fusions overlap across entities. A rearrangement
                is not a diagnosis without the correct site, morphology, and
                immunophenotype.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: morphology to molecular classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the setting",
                "Record anatomic compartment, depth, relationship to tendon/joint/nerve/vessel/viscera, age, multiplicity, and relevant systemic syndrome.",
              ],
              [
                "2. Classify the pattern",
                "Myxoid/hypocellular; epithelioid/nested; spindle/fascicular; round-cell; perivascular; adipocytic/hemosiderotic; or intraluminal.",
              ],
              [
                "3. Test lineage",
                "Use a focused panel: keratins/EMA, S100/SOX10, melanocytic markers, myogenic markers, endothelial markers, INI1, and selected transcription factors.",
              ],
              [
                "4. Select molecular test",
                "Choose the alteration that resolves the differential: GNAS, OGT, THBS1::ADGRF5, EWSR1/FUS partners, PHF1, NR4A3, SS18::SSX, SMARCB1, TFE3, or MDM2/CDK4.",
              ],
              [
                "5. Assign behavior",
                "Do not equate atypia, mitoses, recurrence, or a fusion with grade in isolation. Apply entity-specific criteria and document limitations.",
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
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield diagnostic principles">
            <Bullets
              items={[
                "A bland myxoid tumor is not automatically benign: evaluate site, vascular pattern, cellularity, atypia, mitoses, and defining molecular findings.",
                "For epithelioid tumors, distinguish true lineage (melanocytic, myoepithelial, smooth muscle, epithelial) from nonspecific marker expression.",
                "Fusion testing must identify the partner whenever the same gene family is shared by multiple entities (e.g., EWSR1/FUS–CREB family).",
                "INI1 loss occurs in more than one tumor type; age, site, architecture, and phenotype separate epithelioid sarcoma from extrarenal rhabdoid tumor.",
                "MDM2 amplification is supportive in intimal sarcoma but is not specific; the intraluminal large-vessel/cardiac origin is essential.",
              ]}
            />
          </Panel>
          <Panel title="Molecular-first triage: practical targets">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Diagnostic pattern</th>
                    <th className="py-2 pr-3">High-value molecular target</th>
                    <th className="py-2">Key caveat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Intramuscular/cellular myxoma",
                      "GNAS",
                      "Useful in selected cases; interpret morphology.",
                    ],
                    [
                      "Acral epithelioid / hyalinized tumor",
                      "OGT fusion",
                      "Some intrachromosomal events may evade break-apart FISH.",
                    ],
                    [
                      "Acral chondromyxoid tumor",
                      "THBS1::ADGRF5",
                      "Supports a typical morphology; usually not required.",
                    ],
                    [
                      "AFH-like tumor",
                      "EWSR1::CREB1 / EWSR1::ATF1 / FUS::ATF1",
                      "Fusion overlap with CCS and other FET-CREB tumors.",
                    ],
                    [
                      "OFMT-like tumor",
                      "PHF1 rearrangement",
                      "Supports diagnosis; not all cases harbor PHF1 fusion.",
                    ],
                    [
                      "Myxoid corded tumor",
                      "NR4A3 rearrangement",
                      "Rarely occurs in another tumor context.",
                    ],
                    [
                      "Spindle tumor with neural/myoid markers",
                      "Kinase fusion panel",
                      "NTRK/RET/RAF1/ALK/FGFR1/EGFR/BRAF alterations.",
                    ],
                    [
                      "Round-cell/desmoplastic tumor",
                      "EWSR1::WT1",
                      "EWSR1 break-apart alone is less specific.",
                    ],
                    [
                      "Melanocytic soft-tissue tumor",
                      "EWSR1::ATF1 / CREB1",
                      "Separate CCS from AFH and FET-CREB epithelioid tumor.",
                    ],
                    [
                      "Intraluminal cardiac/vascular sarcoma",
                      "MDM2/CDK4 amplification",
                      "Supportive but not specific.",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 pr-3 text-slate-700">{r[1]}</td>
                      <td className="py-2 text-slate-700">{r[2]}</td>
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
                Search by tumor name, morphology, site, immunomarker, gene,
                fusion, or differential diagnosis. {entities.length} entities
                included.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. INI1, PHF1, NR4A3, TFE3, myxoid..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((c) => (
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
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.criteria} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[650px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, i) => (
                                <tr key={i}>
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
                          Diagnostic pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Behavior and prognosis
                        </h4>
                        <Bullets items={p.prognosis} />
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
        <Panel title="Critical differential diagnosis: pattern-based checkpoints">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Diagnostic problem</th>
                  <th className="py-2 pr-3">Most useful discriminator</th>
                  <th className="py-2">Next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Bland but infiltrative myxoid lesion",
                    "Intramuscular myxoma: hypocellular, hypovascular, bland; deep angiomyxoma: pelvic, infiltrative, thick-walled vessels; juxta-articular myxoma: periarticular cystic/fibrin change.",
                    "Use site and vessel pattern first; GNAS only for selected intramuscular/cellular myxoma cases.",
                  ],
                  [
                    "Acral myxoid/chondroid lesion",
                    "AFCMT: multinodular fibrovascular septa and bland cells; OGT-rearranged neoplasm: epithelioid cords/nests in hyalinized/fibromyxoid stroma.",
                    "THBS1::ADGRF5 for AFCMT when needed; OGT fusion required for OGT-rearranged neoplasm.",
                  ],
                  [
                    "EWSR1/FUS-rearranged epithelioid tumor",
                    "AFH, CCS, and FET-CREB epithelioid mesenchymal tumor can share fusion family members but differ in lineage markers and architecture.",
                    "Identify exact fusion partner and integrate desmin/SOX9, melanocytic markers, keratin, site, and pseudocapsule/lymphoid cuff.",
                  ],
                  [
                    "INI1-deficient epithelioid/rhabdoid tumor",
                    "Epithelioid sarcoma versus extrarenal rhabdoid tumor; age, site, pseudogranulomatous architecture, and rhabdoid morphology matter.",
                    "INI1 with internal control; keratin/EMA, myogenin/MYOD1, WT1, and clinical context.",
                  ],
                  [
                    "TFE3-positive epithelioid tumor",
                    "ASPS, TFE3-rearranged PEComa, and renal cell carcinoma may overlap.",
                    "Use melanocytic and smooth-muscle markers, epithelial markers, site, and fusion partner.",
                  ],
                  [
                    "Spindle cell tumor with CD34/S100",
                    "Kinase-altered spindle-cell neoplasm is a molecularly heterogeneous group.",
                    "Use RNA-based fusion panel; do not rely on pan-TRK or CD34/S100 alone.",
                  ],
                  [
                    "Intraluminal large-vessel mass",
                    "Intimal sarcoma versus thrombus or metastatic tumor.",
                    "Demonstrate malignant spindle-cell neoplasm and assess MDM2/CDK4 amplification; amplification alone is not specific.",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-3 font-semibold">{r[0]}</td>
                    <td className="py-3 pr-3 text-slate-700">{r[1]}</td>
                    <td className="py-3 text-slate-700">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Molecular testing and reporting checklist">
          <Bullets
            items={[
              "State the exact anatomic site, depth, relationship to a named structure, and clinical setting; for myxoid lesions, note periarticular versus intramuscular versus pelviperineal location.",
              "Describe architecture, cellularity, cytologic atypia, mitotic activity, necrosis, vascular pattern, matrix type, and any distinctive inclusions or pigment.",
              "Report the complete immunophenotype, including internal controls for INI1/SMARCB1 and any other loss-based marker.",
              "For fusion-driven tumors, identify the fusion partner whenever possible; a generic EWSR1/FUS rearrangement may not be sufficiently specific.",
              "For kinase-altered spindle-cell neoplasms, favor RNA-based fusion testing when available; document the actual kinase alteration.",
              "For intimal sarcoma, document intraluminal origin and report MDM2/CDK4 results with the caveat that amplification is supportive, not specific.",
              "Separate diagnostic certainty from biologic behavior; apply the entity-specific criteria rather than relying on atypia or molecular results alone.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference is based
          on the supplied WHO classification excerpt. Diagnostic criteria,
          immunophenotypic patterns, and molecular alterations are summarized
          from that source. Differential diagnoses emphasize distinctions
          supported by the excerpt and standard pattern-based interpretation;
          they are not an exhaustive catalog. Molecular findings must be
          interpreted with site, morphology, and immunophenotype. Where the WHO
          excerpt provides limited outcome or ancillary-test data, this page
          avoids implying greater certainty than the source supports.
        </footer>
      </div>
    </main>
  );
}
