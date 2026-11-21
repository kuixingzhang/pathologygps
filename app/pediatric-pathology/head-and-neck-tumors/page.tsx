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
};
const entities: Entity[] = [
  {
    name: "Squamous Papilloma and Papillomatosis",
    group: "Benign Epithelial Lesions",
    clue: "Exophytic papillary squamous proliferation with fibrovascular cores; recurrent respiratory disease is usually HPV6/11-associated.",
    summary:
      "Exophytic papillary squamous proliferation with fibrovascular cores; recurrent respiratory disease is usually HPV6/11-associated.",
    clinical: [
      "Children, with a peak before age 5 years for juvenile recurrent respiratory papillomatosis; no pediatric sex predilection.",
      "Oral cavity (especially palate and tongue) or larynx; multifocal laryngeal disease may extend along the respiratory tract.",
      "Painless papillary oral nodule; laryngeal disease causes hoarseness, stridor, cough, or dysphagia.",
    ],
    criteria: [
      "Exophytic, multilayered benign squamous epithelial proliferation.",
      "Arborizing fibrovascular cores support the papillary fronds.",
      "No significant epithelial dysplasia in most cases; report dysplasia if present.",
    ],
    histology: [
      "Papillary fronds are covered by nonkeratinizing to variably keratinized squamous epithelium.",
      "Koilocytosis may be present.",
      "Trauma or inflammation may increase mitotic activity.",
    ],
    ihc: [
      "Low-risk HPV6/11 are associated with most recurrent respiratory papillomatosis cases; genotyping is not required for diagnosis.",
    ],
    differential: [
      {
        name: "Verruca vulgaris",
        distinction:
          "Often shows prominent hyperkeratosis, papillomatosis, and characteristic viral cytopathic changes; clinical context and site help.",
      },
      {
        name: "Condyloma acuminatum",
        distinction:
          "Usually has broader, blunter papillae and may show HPV-related koilocytosis; correlate with clinical setting.",
      },
      {
        name: "Squamous cell carcinoma",
        distinction:
          "Shows destructive invasion, cytologic atypia, and often atypical mitoses rather than bland fibrovascular papillae.",
      },
      {
        name: "White Sponge Nevus",
        distinction:
          "Squamous Papilloma and Papillomatosis is distinguished by exophytic papillary squamous proliferation with fibrovascular cores; recurrent respiratory disease is usually hpv6/11-associated. In contrast, White Sponge Nevus is characterized by bilateral, persistent white corrugated plaques with eosinophilic perinuclear condensation in spinous cells.",
      },
    ],
    molecular: [],
  },
  {
    name: "White Sponge Nevus",
    group: "Benign Epithelial Lesions",
    clue: "Bilateral, persistent white corrugated plaques with eosinophilic perinuclear condensation in spinous cells.",
    summary:
      "Bilateral, persistent white corrugated plaques with eosinophilic perinuclear condensation in spinous cells.",
    clinical: [
      "Usually begins in infancy or early childhood and becomes more conspicuous during adolescence; equal sex distribution.",
      "Most often bilateral buccal mucosa; may involve ventral tongue, labial mucosa, palate, or other mucosal sites.",
      "Asymptomatic, non-wipeable white spongy plaques; may become tender after trauma.",
    ],
    criteria: [
      "Bright eosinophilic perinuclear condensation in spinous epithelial cells.",
      "Acanthosis and shaggy hyperparakeratosis with spinous-layer vacuolation support the diagnosis.",
      "Intact basement membrane and minimal inflammation.",
    ],
    histology: [
      "Acanthotic epithelium shows vacuolated spinous cells.",
      "Prominent eosinophilic perinuclear keratin condensation is characteristic.",
    ],
    ihc: [
      "Autosomal dominant pathogenic variants in KRT4 or KRT13 support the diagnosis in selected cases.",
    ],
    differential: [
      {
        name: "Oral candidiasis",
        distinction:
          "Usually wipes off or shows fungal organisms and superficial inflammation; clinical response to antifungal therapy may help.",
      },
      {
        name: "Leukoplakia / dysplasia",
        distinction:
          "Shows epithelial atypia or dysplasia, which is absent in white sponge nevus.",
      },
      {
        name: "Leukoedema",
        distinction:
          "Often fades or diminishes when the mucosa is stretched; white sponge nevus persists.",
      },
      {
        name: "Squamous Papilloma and Papillomatosis",
        distinction:
          "White Sponge Nevus is distinguished by bilateral, persistent white corrugated plaques with eosinophilic perinuclear condensation in spinous cells. In contrast, Squamous Papilloma and Papillomatosis is characterized by exophytic papillary squamous proliferation with fibrovascular cores; recurrent respiratory disease is usually hpv6/11-associated.",
      },
    ],
    molecular: [],
  },
  {
    name: "Congenital Granular Cell Epulis",
    group: "Benign Soft Tissue Lesions",
    clue: "Neonatal gingival granular-cell tumor with bland granular cells and absent S100/SOX10 expression.",
    summary:
      "Neonatal gingival granular-cell tumor with bland granular cells and absent S100/SOX10 expression.",
    clinical: [
      "Present at birth or within the first weeks of life; marked female predominance (female-to-male ratio approximately 7–10:1).",
      "Usually anterior maxillary alveolar ridge, less often mandibular ridge; rarely tongue or multifocal.",
      "Polypoid or pedunculated mucosa-colored gingival mass; may interfere with feeding or respiration.",
    ],
    criteria: [
      "Neonatal presentation with a gingival/alveolar ridge mass.",
      "Sheets and nests of bland polygonal cells with abundant eosinophilic granular cytoplasm.",
      "Tumor cells are negative for S100 and SOX10.",
    ],
    histology: [
      "Granular cells have eccentric small uniform nuclei and distinct cell borders.",
      "Prominent capillary network may traverse the tumor.",
      "Overlying epithelium is attenuated and lacks pseudoepitheliomatous hyperplasia.",
    ],
    ihc: [
      "Tumor cells are typically negative for S100 and SOX10 and positive for CD68 and vimentin.",
    ],
    differential: [
      {
        name: "Granular cell tumor",
        distinction:
          "Usually strongly positive for S100 and SOX10 and often shows pseudoepitheliomatous hyperplasia.",
      },
      {
        name: "Congenital epulis-like lesions",
        distinction:
          "Clinical timing and gingival location plus the characteristic S100-negative granular-cell phenotype support congenital granular cell epulis.",
      },
    ],
    molecular: [],
  },
  {
    name: "Central Giant Cell Granuloma",
    group: "Jaw and Fibro-Osseous Lesions",
    clue: "Jaw-centered osteoclast-like giant-cell lesion in hemorrhagic vascular stroma, without cyst formation or systemic cause.",
    summary:
      "Jaw-centered osteoclast-like giant-cell lesion in hemorrhagic vascular stroma, without cyst formation or systemic cause.",
    clinical: [
      "Usually occurs in the first two decades; slight female predominance.",
      "Anterior maxilla or mandible, commonly anterior to the mandibular first molars.",
      "Often incidental radiolucency; may cause jaw expansion, pain, paresthesia, tooth displacement, or root resorption.",
    ],
    criteria: [
      "Jaw-centered lesion composed of numerous osteoclast-like multinucleated giant cells in hemorrhagic vascular stroma with bland spindle cells.",
      "No cyst formation.",
      "Exclude hyperparathyroidism and consider syndromic/multifocal disease.",
    ],
    histology: [
      "Giant cells are unevenly distributed, often in loose clusters.",
      "Background is hemorrhagic and vascular with bland mononuclear spindle cells.",
      "Osteoid or woven bone may be present; scattered conventional mitoses may occur.",
    ],
    ihc: ["No specific immunophenotype is required for diagnosis."],
    differential: [
      {
        name: "Brown tumor of hyperparathyroidism",
        distinction:
          "Clinical and biochemical evidence of hyperparathyroidism; evaluate calcium, phosphate, and PTH.",
      },
      {
        name: "Aneurysmal bone cyst",
        distinction:
          "Shows blood-filled cystic spaces with septa; central giant cell granuloma is solid and lacks cystic spaces.",
      },
      {
        name: "Peripheral giant cell granuloma",
        distinction:
          "Arises in gingival/peripheral soft tissue rather than centrally within jaw bone.",
      },
      {
        name: "Cherubism",
        distinction:
          "Typically bilateral/multifocal jaw lesions with characteristic clinical distribution and SH3BP2-associated syndrome.",
      },
      {
        name: "Giant cell tumor of bone",
        distinction:
          "Usually epiphyseal/metaphyseal long-bone lesion; distinct clinical and molecular context.",
      },
      {
        name: "Ossifying Fibroma",
        distinction:
          "Central Giant Cell Granuloma is distinguished by jaw-centered osteoclast-like giant-cell lesion in hemorrhagic vascular stroma, without cyst formation or systemic cause. In contrast, Ossifying Fibroma is characterized by well-demarcated fibro-osseous neoplasm with a cellular spindle-cell stroma and variable bone/cementum-like mineralization.",
      },
    ],
    molecular: [
      "Reported somatic alterations include TRPV4, KRAS, and FGFR1; PTPN11 alterations may occur in Noonan-like multiple giant cell lesion syndrome. Molecular testing is not routinely required.",
    ],
  },
  {
    name: "Ameloblastoma",
    group: "Odontogenic Tumors",
    clue: "Odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity.",
    summary:
      "Odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity.",
    clinical: [
      "Usually adolescents and young adults; pediatric cases occur in the second decade.",
      "Most often posterior mandible; maxillary lesions also occur.",
      "Slow-growing jaw swelling, expansion, facial asymmetry, tooth displacement, or incidental radiographic lesion.",
    ],
    criteria: [
      "Odontogenic epithelial islands, sheets, or anastomosing strands with peripheral ameloblast-like cells.",
      "Peripheral palisading with reverse nuclear polarity and subnuclear vacuolation.",
      "Correlate with imaging; unicystic ameloblastoma requires a single cystic lesion without a mural tumor component.",
    ],
    histology: [
      "Follicular pattern shows epithelial islands with central stellate-reticulum-like cells.",
      "Plexiform pattern shows anastomosing epithelial strands.",
      "Cystic change is common; infiltrative islands may extend beyond the radiographic margin.",
    ],
    ihc: [
      "IHC is usually not necessary; BRAF V600E immunohistochemistry or molecular testing may support selected cases.",
    ],
    differential: [
      {
        name: "Unicystic ameloblastoma",
        distinction:
          "A single cystic lesion; distinguish luminal/intraluminal disease from mural invasion by extensive sampling.",
      },
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Usually encapsulated and shows duct-like structures/rosettes and often calcified material.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Contains odontogenic epithelium in a primitive cellular mesenchymal stroma without classic ameloblastoma architecture.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Shows a thin corrugated parakeratinized lining with palisaded basal cells rather than ameloblastomatous tumor islands.",
      },
      {
        name: "Ameloblastic Fibroma",
        distinction:
          "Ameloblastoma is distinguished by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity. In contrast, Ameloblastic Fibroma is characterized by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
      },
      {
        name: "Adenomatoid Odontogenic Tumor",
        distinction:
          "Ameloblastoma is distinguished by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity. In contrast, Adenomatoid Odontogenic Tumor is characterized by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
      },
      {
        name: "Odontoma",
        distinction:
          "Ameloblastoma is distinguished by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity. In contrast, Odontoma is characterized by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
      },
      {
        name: "Odontogenic Myxoma",
        distinction:
          "Ameloblastoma is distinguished by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity. In contrast, Odontogenic Myxoma is characterized by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
      },
      {
        name: "Odontogenic Keratocyst",
        distinction:
          "Ameloblastoma is distinguished by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity. In contrast, Odontogenic Keratocyst is characterized by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
      },
    ],
    molecular: [
      "BRAF p.V600E is the most common driver alteration; less frequent alterations involve KRAS, NRAS, HRAS, FGFR2, or SMO.",
    ],
  },
  {
    name: "Ameloblastic Fibroma",
    group: "Odontogenic Tumors",
    clue: "Biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
    summary:
      "Biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
    clinical: [
      "Usually children and adolescents.",
      "Often posterior mandible; maxilla is less common.",
      "Jaw swelling, delayed eruption, or incidental radiolucent lesion.",
    ],
    criteria: [
      "Bland odontogenic epithelial islands or bilaminar strands are embedded in cellular odontogenic ectomesenchyme.",
      "Stroma is primitive, cellular, and myxoid to collagenous.",
      "Correlate with radiology and exclude maturation into odontoma.",
    ],
    histology: [
      "Epithelial islands are generally smaller than those of ameloblastoma.",
      "Epithelial strands may show peripheral budding with little or no stellate reticulum.",
      "Mesenchymal component is cytologically bland.",
    ],
    ihc: [
      "No specific IHC profile is required; diagnosis is primarily morphologic and radiologic.",
    ],
    differential: [
      {
        name: "Ameloblastoma",
        distinction:
          "Shows classic peripheral ameloblast-like palisading and reverse polarity with stellate-reticulum-like centers.",
      },
      {
        name: "Odontoma, early stage",
        distinction:
          "May resemble ameloblastic fibroma; identification of enamel and dentin matrix establishes odontoma.",
      },
      {
        name: "Odontogenic myxoma",
        distinction:
          "Lacks the characteristic odontogenic epithelial component or has only rare inactive epithelial rests.",
      },
      {
        name: "Adenomatoid Odontogenic Tumor",
        distinction:
          "Ameloblastic Fibroma is distinguished by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma. In contrast, Adenomatoid Odontogenic Tumor is characterized by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
      },
      {
        name: "Odontoma",
        distinction:
          "Ameloblastic Fibroma is distinguished by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma. In contrast, Odontoma is characterized by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
      },
      {
        name: "Odontogenic Myxoma",
        distinction:
          "Ameloblastic Fibroma is distinguished by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma. In contrast, Odontogenic Myxoma is characterized by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
      },
      {
        name: "Odontogenic Keratocyst",
        distinction:
          "Ameloblastic Fibroma is distinguished by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma. In contrast, Odontogenic Keratocyst is characterized by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
      },
    ],
    molecular: [],
  },
  {
    name: "Adenomatoid Odontogenic Tumor",
    group: "Odontogenic Tumors",
    clue: "Usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
    summary:
      "Usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
    clinical: [
      "Most often adolescents and young adults, with a female predominance.",
      "Typically anterior maxilla, often associated with an unerupted canine.",
      "Slow-growing painless swelling or delayed tooth eruption; often discovered radiographically.",
    ],
    criteria: [
      "Well-circumscribed, usually encapsulated epithelial lesion.",
      "Duct-like structures and rosettes formed by odontogenic epithelial cells.",
      "Eosinophilic material and variable calcifications may be present.",
    ],
    histology: [
      "Sheets and nodules of epithelial cells contain numerous duct-like spaces.",
      "Ameloblast-like cells may form rosettes or arrays.",
      "Enamel matrix-like material and dentinoid may be present.",
    ],
    ihc: ["No specific IHC is needed for routine diagnosis."],
    differential: [
      {
        name: "Ameloblastoma",
        distinction:
          "Typically infiltrative and shows peripheral palisading/reverse polarity rather than a circumscribed duct-rich lesion.",
      },
      {
        name: "Odontoma",
        distinction:
          "Shows organized dental hard tissues or tooth-like structures; AOT may contain only focal mineralized material.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Shows primitive cellular mesenchyme with epithelial islands, without the characteristic duct-like architecture.",
      },
      {
        name: "Ameloblastic Fibroma",
        distinction:
          "Adenomatoid Odontogenic Tumor is distinguished by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization. In contrast, Ameloblastic Fibroma is characterized by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
      },
      {
        name: "Odontogenic Myxoma",
        distinction:
          "Adenomatoid Odontogenic Tumor is distinguished by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization. In contrast, Odontogenic Myxoma is characterized by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
      },
      {
        name: "Odontogenic Keratocyst",
        distinction:
          "Adenomatoid Odontogenic Tumor is distinguished by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization. In contrast, Odontogenic Keratocyst is characterized by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
      },
    ],
    molecular: [],
  },
  {
    name: "Odontoma",
    group: "Odontogenic Tumors",
    clue: "Hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
    summary:
      "Hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
    clinical: [
      "Usually children and adolescents; often identified during tooth development.",
      "Tooth-bearing portions of maxilla or mandible.",
      "Delayed eruption, retained primary tooth, or incidental radiopaque dental finding.",
    ],
    criteria: [
      "Presence of enamel and dentin matrix confirms odontoma.",
      "Compound type forms multiple tooth-like structures; complex type forms a disorganized mass of dental hard tissues.",
      "Early lesions may resemble other odontogenic tumors and require radiologic correlation.",
    ],
    histology: [
      "Early lesions contain cellular odontogenic mesenchyme and budding bilaminar epithelial strands.",
      "Mature lesions contain enamel and dentin, with variable cementum and pulp-like tissue.",
      "A thin capsule of unmineralized tissue may surround the lesion.",
    ],
    ihc: ["No diagnostic IHC is required."],
    differential: [
      {
        name: "Ameloblastic fibroma",
        distinction:
          "May resemble an early odontoma but lacks mature enamel and dentin matrix.",
      },
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Shows duct-like epithelial structures and rosettes; mineralization is generally less organized.",
      },
      {
        name: "Ameloblastoma",
        distinction:
          "Shows infiltrative ameloblastomatous epithelial islands rather than dental hard tissue formation.",
      },
      {
        name: "Ameloblastic Fibroma",
        distinction:
          "Odontoma is distinguished by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass. In contrast, Ameloblastic Fibroma is characterized by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
      },
      {
        name: "Adenomatoid Odontogenic Tumor",
        distinction:
          "Odontoma is distinguished by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass. In contrast, Adenomatoid Odontogenic Tumor is characterized by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
      },
      {
        name: "Odontogenic Myxoma",
        distinction:
          "Odontoma is distinguished by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass. In contrast, Odontogenic Myxoma is characterized by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
      },
      {
        name: "Odontogenic Keratocyst",
        distinction:
          "Odontoma is distinguished by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass. In contrast, Odontogenic Keratocyst is characterized by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
      },
    ],
    molecular: [
      "WNT/β-catenin pathway activation has been reported; odontomas may occur in APC-associated Gardner syndrome.",
    ],
  },
  {
    name: "Odontogenic Myxoma",
    group: "Odontogenic Tumors",
    clue: "Infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
    summary:
      "Infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
    clinical: [
      "Usually adolescents and young adults; may occur in children.",
      "Most often posterior mandible; may involve maxilla.",
      "Painless jaw expansion, facial asymmetry, or multilocular radiolucency.",
    ],
    criteria: [
      "Gnathic location with a myxoid neoplasm permeating medullary spaces.",
      "Abundant proteoglycan-rich myxoid matrix with bland stellate or spindle cells.",
      "Exclude other myxoid neoplasms and correlate with imaging.",
    ],
    histology: [
      "Hypocellular to moderately cellular proliferation of stellate, spindle, or round cells.",
      "Abundant myxoid ground substance with variable collagen.",
      "Odontogenic epithelial islands may be absent or scant; mitoses and necrosis are generally absent.",
    ],
    ihc: ["IHC is non-specific and is not required for diagnosis."],
    differential: [
      {
        name: "Sinonasal tract myxoma",
        distinction:
          "Arises in sinonasal soft tissue/sinuses rather than gnathic bone and lacks odontogenic context.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Contains a conspicuous odontogenic epithelial component in cellular primitive stroma.",
      },
      {
        name: "Soft tissue myxoma",
        distinction:
          "Requires exclusion of a non-odontogenic myxoid lesion by site and imaging.",
      },
      {
        name: "Low-grade fibromyxoid sarcoma",
        distinction:
          "Shows more cellular collagenized zones and characteristic MUC4 expression; evaluate for malignancy.",
      },
      {
        name: "Ameloblastoma",
        distinction:
          "Odontogenic Myxoma is distinguished by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix. In contrast, Ameloblastoma is characterized by odontogenic epithelial neoplasm with peripheral ameloblast-like palisading and reverse nuclear polarity.",
      },
      {
        name: "Ameloblastic Fibroma",
        distinction:
          "Odontogenic Myxoma is distinguished by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix. In contrast, Ameloblastic Fibroma is characterized by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
      },
      {
        name: "Adenomatoid Odontogenic Tumor",
        distinction:
          "Odontogenic Myxoma is distinguished by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix. In contrast, Adenomatoid Odontogenic Tumor is characterized by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
      },
      {
        name: "Odontoma",
        distinction:
          "Odontogenic Myxoma is distinguished by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix. In contrast, Odontoma is characterized by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
      },
      {
        name: "Odontogenic Keratocyst",
        distinction:
          "Odontogenic Myxoma is distinguished by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix. In contrast, Odontogenic Keratocyst is characterized by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
      },
    ],
    molecular: [],
  },
  {
    name: "Odontogenic Keratocyst",
    group: "Odontogenic Tumors",
    clue: "Jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
    summary:
      "Jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells.",
    clinical: [
      "Often presents in the first two decades when associated with nevoid basal cell carcinoma syndrome; otherwise broad age range.",
      "Posterior mandible and ramus are common sites.",
      "Often incidental radiolucency; may cause jaw expansion; multiple lesions raise concern for a syndrome.",
    ],
    criteria: [
      "Thin, uniform epithelial lining with corrugated luminal parakeratin.",
      "Palisaded hyperchromatic basal cells, sometimes with reverse nuclear polarity.",
      "Satellite/daughter cysts may be present; assess for multiple lesions and syndromic context.",
    ],
    histology: [
      "Lining epithelium is typically 5–8 cells thick and uniform.",
      "Inflammation may obscure the characteristic lining.",
      "Satellite cysts or keratinizing epithelial islands may be present in the cyst wall.",
    ],
    ihc: ["No IHC is routinely required."],
    differential: [
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Shows orthokeratinization and a granular layer; biologically distinct and less prone to recurrence.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Lined by thin nonkeratinizing epithelium and associated with the crown of an unerupted tooth.",
      },
      {
        name: "Ameloblastoma",
        distinction:
          "Shows ameloblastomatous epithelial proliferation, especially in mural/luminal areas, rather than a uniform keratocyst lining.",
      },
      {
        name: "Ameloblastic Fibroma",
        distinction:
          "Odontogenic Keratocyst is distinguished by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells. In contrast, Ameloblastic Fibroma is characterized by biphasic odontogenic neoplasm with small epithelial islands/strands in a cellular primitive mesenchymal stroma.",
      },
      {
        name: "Adenomatoid Odontogenic Tumor",
        distinction:
          "Odontogenic Keratocyst is distinguished by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells. In contrast, Adenomatoid Odontogenic Tumor is characterized by usually encapsulated odontogenic epithelial lesion with duct-like structures, rosettes, and variable mineralization.",
      },
      {
        name: "Odontoma",
        distinction:
          "Odontogenic Keratocyst is distinguished by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells. In contrast, Odontoma is characterized by hamartomatous odontogenic lesion showing enamel and dentin in compound tooth-like structures or a complex disorganized mass.",
      },
      {
        name: "Odontogenic Myxoma",
        distinction:
          "Odontogenic Keratocyst is distinguished by jaw cyst with a thin corrugated parakeratinized lining and palisaded hyperchromatic basal cells. In contrast, Odontogenic Myxoma is characterized by infiltrative gelatinous jaw lesion composed of bland stellate/spindle cells in abundant myxoid matrix.",
      },
    ],
    molecular: [
      "PTCH1, PTCH2, or SUFU alterations are associated with syndromic and some sporadic odontogenic keratocysts.",
    ],
  },
  {
    name: "Ossifying Fibroma",
    group: "Jaw and Fibro-Osseous Lesions",
    clue: "Well-demarcated fibro-osseous neoplasm with a cellular spindle-cell stroma and variable bone/cementum-like mineralization.",
    summary:
      "Well-demarcated fibro-osseous neoplasm with a cellular spindle-cell stroma and variable bone/cementum-like mineralization.",
    clinical: [
      "Juvenile trabecular type usually affects children 2–12 years; psammomatoid type peaks in the second and third decades; conventional type more often adults and female-predominant.",
      "Conventional and juvenile trabecular types favor jaws; psammomatoid type more often facial bones and paranasal sinuses.",
      "Slow-growing bony swelling; may cause facial deformity, tooth displacement, or root resorption.",
    ],
    criteria: [
      "Radiographically well-demarcated, expansile fibro-osseous lesion.",
      "Hypercellular spindle-cell stroma with variable maturation into woven bone, lamellar bone, or cementum-like material.",
      "Recognize juvenile trabecular and psammomatoid patterns.",
    ],
    histology: [
      "Conventional type shows coalescent mineralized trabeculae or cementum-like masses with cellular rims.",
      "Juvenile trabecular type shows long slender osteoid seams and woven bone in hypercellular stroma.",
      "Psammomatoid type shows rounded, non-coalescent ossicles with eosinophilic rims.",
      "Secondary aneurysmal bone cyst-like change or giant-cell reaction may occur.",
    ],
    ihc: [
      "No specific IHC is required; MDM2 immunohistochemistry is not a reliable surrogate for amplification.",
    ],
    differential: [
      {
        name: "Fibrous dysplasia",
        distinction:
          "Usually blends into surrounding bone and has irregular curvilinear woven bone; GNAS alterations support fibrous dysplasia.",
      },
      {
        name: "Osteosarcoma",
        distinction:
          "Shows cytologic atypia and malignant osteoid; juvenile trabecular ossifying fibroma can mimic it but is cytologically bland.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Usually multifocal/periapical and not a discrete expansile neoplasm.",
      },
      {
        name: "Central giant cell granuloma",
        distinction:
          "Dominated by osteoclast-like giant cells in hemorrhagic stroma rather than fibro-osseous matrix.",
      },
      {
        name: "Central Giant Cell Granuloma",
        distinction:
          "Ossifying Fibroma is distinguished by well-demarcated fibro-osseous neoplasm with a cellular spindle-cell stroma and variable bone/cementum-like mineralization. In contrast, Central Giant Cell Granuloma is characterized by jaw-centered osteoclast-like giant-cell lesion in hemorrhagic vascular stroma, without cyst formation or systemic cause.",
      },
    ],
    molecular: [
      "CDC73 germline alterations are associated with hyperparathyroidism–jaw tumor syndrome and multiple ossifying fibromas. JTOF and PsOF may show RASAL1/MDM2 rearrangements or MDM2 amplification; GNAS alterations are not characteristic.",
    ],
  },
  {
    name: "Sinonasal Tract Myxoma",
    group: "Sinonasal Lesions",
    clue: "Hypocellular myxoid spindle/stellate-cell lesion arising in sinonasal soft tissue, not gnathic bone.",
    summary:
      "Hypocellular myxoid spindle/stellate-cell lesion arising in sinonasal soft tissue, not gnathic bone.",
    clinical: [
      "Almost exclusively reported in children younger than 3 years; slight male predominance.",
      "Sinonasal region, often with expansion into adjacent palate, orbit, or nasal cavity.",
      "Slow-growing nasolabial swelling, nasal obstruction, or symptoms from local extension.",
    ],
    criteria: [
      "Myxoid mass centered in sinonasal tract rather than jaw bone.",
      "Hypocellular proliferation of bland spindle, stellate, or round cells in abundant myxoid matrix.",
      "No odontogenic epithelium, atypia, mitoses, or necrosis.",
    ],
    histology: [
      "Loose myxoid stroma contains thin arciform vessels and fine collagen bands.",
      "Cells are bland and widely spaced.",
      "Odontogenic epithelial rests are absent.",
    ],
    ihc: [
      "IHC is non-contributory; SMA and nuclear β-catenin may be variably positive.",
    ],
    differential: [
      {
        name: "Odontogenic myxoma",
        distinction:
          "Arises within gnathic bone and may contain odontogenic epithelial rests.",
      },
      {
        name: "Low-grade fibromyxoid sarcoma",
        distinction:
          "Shows alternating fibrous and myxoid zones and may express MUC4.",
      },
      {
        name: "Nasal chondromesenchymal hamartoma",
        distinction:
          "Contains characteristic cartilage nodules and respiratory epithelial-lined cysts rather than a purely myxoid proliferation.",
      },
    ],
    molecular: [],
  },
  {
    name: "Nasal Dermoid Cyst",
    group: "Developmental Cysts and Hamartomas",
    clue: "Midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures.",
    summary:
      "Midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures.",
    clinical: [
      "Usually presents in early childhood (mean approximately 3 years); slight male predominance.",
      "Nasal dorsum, glabella, or nasal tip; may have a midline pit or sinus.",
      "Midline nasal mass, intermittent drainage/infection; hair protruding from a pit is highly characteristic.",
    ],
    criteria: [
      "Cyst and/or sinus lined by keratinizing stratified squamous epithelium.",
      "Normal cutaneous adnexal structures (hair follicles, sebaceous and sweat glands) are present in the wall.",
      "Preoperative imaging is important to assess possible intracranial extension.",
    ],
    histology: [
      "Keratinizing squamous lining with hair shafts and keratin debris.",
      "Dermal appendages are embedded in the cyst wall.",
    ],
    ihc: ["No diagnostic IHC or molecular testing is required."],
    differential: [
      {
        name: "Epidermoid cyst",
        distinction: "Lacks dermal adnexal structures.",
      },
      {
        name: "Teratoma",
        distinction:
          "Contains tissues derived from multiple germ layers, including endodermal elements.",
      },
      {
        name: "Encephalocele",
        distinction:
          "Contains glial/neural tissue and may communicate with intracranial contents.",
      },
      {
        name: "Sinonasal polyp",
        distinction:
          "Shows edematous respiratory mucosa rather than a cutaneous squamous lining with adnexa.",
      },
      {
        name: "Nasopharyngeal Dermoid",
        distinction:
          "Nasal Dermoid Cyst is distinguished by midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures. In contrast, Nasopharyngeal Dermoid is characterized by congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures.",
      },
      {
        name: "Nasal Chondromesenchymal Hamartoma",
        distinction:
          "Nasal Dermoid Cyst is distinguished by midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures. In contrast, Nasal Chondromesenchymal Hamartoma is characterized by sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider dicer1 syndrome.",
      },
    ],
    molecular: [],
  },
  {
    name: "Nasopharyngeal Dermoid",
    group: "Developmental Cysts and Hamartomas",
    clue: "Congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures.",
    summary:
      "Congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures.",
    clinical: [
      "Usually infants and newborns; female predominance.",
      "Nasopharynx or other pharyngeal sites.",
      "May cause neonatal airway obstruction, feeding difficulty, or dysphagia.",
    ],
    criteria: [
      "Polypoid or cystic nasopharyngeal lesion lined by stratified squamous epithelium.",
      "Cutaneous adnexal structures are present; cartilage may also be present.",
      "Teratoma requires representation of all three germ layers.",
    ],
    histology: [
      "Squamous epithelium is associated with hair follicles and sebaceous glands.",
      "Cartilage may be present in the polyp.",
    ],
    ihc: ["No diagnostic IHC or molecular testing is required."],
    differential: [
      {
        name: "Teratoma",
        distinction:
          "Contains derivatives of all three germ layers; nasopharyngeal dermoid is predominantly ectodermal/mesodermal.",
      },
      {
        name: "Nasal dermoid cyst",
        distinction:
          "Usually arises in the external midline nose and may form a sinus tract.",
      },
      {
        name: "Inflammatory nasal polyp",
        distinction:
          "Shows respiratory epithelium and edematous stroma without cutaneous adnexa.",
      },
      {
        name: "Nasal Dermoid Cyst",
        distinction:
          "Nasopharyngeal Dermoid is distinguished by congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures. In contrast, Nasal Dermoid Cyst is characterized by midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures.",
      },
      {
        name: "Nasal Chondromesenchymal Hamartoma",
        distinction:
          "Nasopharyngeal Dermoid is distinguished by congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures. In contrast, Nasal Chondromesenchymal Hamartoma is characterized by sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider dicer1 syndrome.",
      },
    ],
    molecular: [],
  },
  {
    name: "Nasal Chondromesenchymal Hamartoma",
    group: "Developmental Cysts and Hamartomas",
    clue: "Sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider DICER1 syndrome.",
    summary:
      "Sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider DICER1 syndrome.",
    clinical: [
      "Often infants or young children (mean age approximately 10 years in reported series); male predominance about 2:1.",
      "Nasal cavity and paranasal sinuses, especially ethmoid; may extend to orbit or skull base; bilateral in a subset.",
      "Nasal obstruction, mass, or orbital symptoms; may erode into cranial cavity.",
    ],
    criteria: [
      "Respiratory epithelial-lined cysts associated with nodules of immature to mature cartilage in bland spindle-cell stroma.",
      "No epithelial neoplastic proliferation or overt malignant cytology.",
      "Consider germline DICER1 evaluation.",
    ],
    histology: [
      "Cartilage nodules vary from primitive to mature and may be chondromyxoid.",
      "Stroma may be myxoid or spindle-cell rich, with occasional giant-cell-rich hemorrhagic spaces or woven bone.",
      "Mature adipose tissue may be focally present.",
    ],
    ihc: [
      "S100/SOX9 highlight cartilage; SMA/MSA may highlight stromal myofibroblasts.",
    ],
    differential: [
      {
        name: "Biphenotypic sinonasal sarcoma",
        distinction:
          "Shows infiltrative spindle-cell neoplasm with neural and myogenic differentiation rather than a hamartomatous cartilage/cyst pattern.",
      },
      {
        name: "Respiratory epithelial adenomatoid hamartoma",
        distinction:
          "Shows glandular respiratory epithelial invaginations without prominent cartilage nodules.",
      },
      {
        name: "Sinonasal tract myxoma",
        distinction:
          "Lacks the characteristic cartilage nodules and respiratory epithelial-lined cysts.",
      },
      {
        name: "Chondrosarcoma",
        distinction:
          "Shows malignant cartilaginous growth, cytologic atypia, and destructive infiltration.",
      },
      {
        name: "Nasal Dermoid Cyst",
        distinction:
          "Nasal Chondromesenchymal Hamartoma is distinguished by sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider dicer1 syndrome. In contrast, Nasal Dermoid Cyst is characterized by midline congenital nasal cyst or sinus lined by squamous epithelium with cutaneous adnexal structures.",
      },
      {
        name: "Nasopharyngeal Dermoid",
        distinction:
          "Nasal Chondromesenchymal Hamartoma is distinguished by sinonasal lesion with respiratory epithelial-lined cysts, cartilage nodules, and bland spindle-cell stroma; consider dicer1 syndrome. In contrast, Nasopharyngeal Dermoid is characterized by congenital nasopharyngeal polypoid lesion containing squamous epithelium and cutaneous adnexal structures.",
      },
    ],
    molecular: [
      "Associated with germline and somatic DICER1 pathogenic variants; germline testing should be considered.",
    ],
  },
  {
    name: "Pleomorphic Adenoma",
    group: "Salivary Gland Tumors",
    clue: "Biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture.",
    summary:
      "Biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture.",
    clinical: [
      "Most often adolescents; 90% of pediatric cases occur at ages 10–19; slight male predominance.",
      "Parotid most common; also submandibular and minor salivary glands, especially palate.",
      "Slow-growing, usually painless, discrete firm mass.",
    ],
    criteria: [
      "Architecturally diverse epithelial and myoepithelial proliferation with ductal structures.",
      "Chondromyxoid matrix is present at least focally.",
      "No destructive invasion or infiltrative growth in conventional pleomorphic adenoma.",
    ],
    histology: [
      "Ductal structures are lined by epithelial cells and surrounded by myoepithelial cells.",
      "Myoepithelial cells may be plasmacytoid, spindle, clear, or stellate and blend into myxoid/chondroid stroma.",
      "Metaplasia (squamous, oncocytic, apocrine, mucinous, sebaceous) may occur.",
    ],
    ihc: [
      "Pancytokeratin/CK7 highlight ductal cells; p40, S100, SOX10, calponin, SMA, and GFAP may highlight myoepithelial cells.",
      "PLAG1 or HMGA2 expression/rearrangement may support selected cases but is not entirely specific.",
    ],
    differential: [
      {
        name: "Basal cell adenoma",
        distinction:
          "Often shows nuclear β-catenin and lacks the broad chondromyxoid/myoepithelial diversity.",
      },
      {
        name: "Adenoid cystic carcinoma",
        distinction:
          "Shows cribriform/tubular architecture, infiltrative growth, and strong luminal KIT.",
      },
      {
        name: "Canalicular adenoma",
        distinction:
          "Usually lacks p63 and shows only peripheral GFAP expression.",
      },
      {
        name: "Mucoepidermoid carcinoma",
        distinction:
          "Contains mucous, intermediate, and epidermoid cells; mucin stains and MAML2 rearrangement support MEC.",
      },
      {
        name: "Mucoepidermoid Carcinoma",
        distinction:
          "Pleomorphic Adenoma is distinguished by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture. In contrast, Mucoepidermoid Carcinoma is characterized by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns.",
      },
      {
        name: "Acinic Cell Carcinoma",
        distinction:
          "Pleomorphic Adenoma is distinguished by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture. In contrast, Acinic Cell Carcinoma is characterized by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules.",
      },
      {
        name: "Sialoblastoma",
        distinction:
          "Pleomorphic Adenoma is distinguished by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture. In contrast, Sialoblastoma is characterized by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa.",
      },
    ],
    molecular: [
      "PLAG1 rearrangements occur in many cases; HMGA2 rearrangements occur in a subset. These alterations are supportive, not independently diagnostic.",
    ],
  },
  {
    name: "Mucoepidermoid Carcinoma",
    group: "Salivary Gland Tumors",
    clue: "Salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns.",
    summary:
      "Salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns.",
    clinical: [
      "Usually adolescents (median 12–15 years); no sex predilection.",
      "Parotid most common, followed by submandibular and minor salivary glands, especially palate.",
      "Solitary painless mass or mucosal ulcer; cystic lesions may fluctuate and mimic a mucocele.",
    ],
    criteria: [
      "Mixture of mucous, intermediate, and epidermoid cells.",
      "Assess cystic versus solid growth, invasion, mitotic activity, and cytologic atypia for grading.",
      "Mucous cells should be identified; extensive keratinization is not typical.",
    ],
    histology: [
      "Mucous cells contain intracytoplasmic mucin and eccentrically compressed nuclei.",
      "Epidermoid cells are polygonal with eosinophilic or clear cytoplasm.",
      "Intermediate cells are round to oval and intermediate in size.",
      "Low-grade tumors are predominantly cystic; high-grade tumors are solid/infiltrative with scant mucous cells and marked atypia.",
    ],
    ihc: [
      "Mucicarmine/PAS highlight mucous cells.",
      "p63, p40, and CK5/6 highlight epidermoid cells; CEA and EMA may highlight mucocytes.",
      "S100 and SOX10 are typically negative.",
    ],
    differential: [
      {
        name: "Pleomorphic adenoma with mucinous metaplasia",
        distinction:
          "Shows ductal/myoepithelial biphasic architecture and chondromyxoid matrix.",
      },
      {
        name: "Mucocele or lymphoepithelial cyst",
        distinction:
          "Lacks a true neoplastic proliferation of mucous, intermediate, and epidermoid cells.",
      },
      {
        name: "Acinic cell carcinoma",
        distinction:
          "Shows serous acinar differentiation and diastase-resistant zymogen granules.",
      },
      {
        name: "Clear cell carcinoma",
        distinction:
          "Usually lacks the characteristic triphasic cell population; consider EWSR1 rearrangement where appropriate.",
      },
      {
        name: "Pleomorphic Adenoma",
        distinction:
          "Mucoepidermoid Carcinoma is distinguished by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns. In contrast, Pleomorphic Adenoma is characterized by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture.",
      },
      {
        name: "Acinic Cell Carcinoma",
        distinction:
          "Mucoepidermoid Carcinoma is distinguished by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns. In contrast, Acinic Cell Carcinoma is characterized by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules.",
      },
      {
        name: "Sialoblastoma",
        distinction:
          "Mucoepidermoid Carcinoma is distinguished by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns. In contrast, Sialoblastoma is characterized by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa.",
      },
    ],
    molecular: [
      "Most cases harbor CRTC1::MAML2; a smaller subset has CRTC3::MAML2. Fusion testing is useful in selected diagnostically difficult cases.",
    ],
  },
  {
    name: "Acinic Cell Carcinoma",
    group: "Salivary Gland Tumors",
    clue: "Salivary carcinoma with serous acinar differentiation and PAS-diastase-resistant zymogen granules.",
    summary:
      "Salivary carcinoma with serous acinar differentiation and PAS-diastase-resistant zymogen granules.",
    clinical: [
      "Usually second decade; female predominance.",
      "Almost always parotid; minority submandibular.",
      "Slow-growing salivary mass; other symptoms are uncommon.",
    ],
    criteria: [
      "At least one component shows serous acinar differentiation.",
      "Multiple cellular components and variable architectural patterns may be present.",
      "In pediatric cases, high-grade transformation is not typically identified.",
    ],
    histology: [
      "Solid, microcystic, macrocystic, follicular, papillary, or cystic patterns may occur.",
      "Serous acinar cells have basophilic cytoplasm with dark granules.",
      "Tumor-associated lymphoid proliferation and cholesterol granulomas may be present.",
    ],
    ihc: [
      "PAS after diastase highlights zymogen granules.",
      "DOG1 shows luminal plasmalemmal staining; SOX10 is nuclear.",
      "Nuclear NR4A3 (NOR1) or NR4A2 (NURR1) supports acinic cell differentiation.",
    ],
    differential: [
      {
        name: "Mucoepidermoid carcinoma",
        distinction:
          "Shows mucous, intermediate, and epidermoid cells; mucicarmine highlights mucocytes.",
      },
      {
        name: "Secretory carcinoma",
        distinction:
          "Usually has microcystic/solid patterns with secretory material and ETV6::NTRK3; lacks classic serous zymogen granules.",
      },
      {
        name: "Intercalated duct neoplasms",
        distinction:
          "May mimic non-serous patterns; use morphology and NR4A3/DOG1 in context.",
      },
      {
        name: "Warthin tumor",
        distinction:
          "Has bilayered oncocytic epithelium with prominent lymphoid stroma.",
      },
      {
        name: "Pleomorphic Adenoma",
        distinction:
          "Acinic Cell Carcinoma is distinguished by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules. In contrast, Pleomorphic Adenoma is characterized by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture.",
      },
      {
        name: "Mucoepidermoid Carcinoma",
        distinction:
          "Acinic Cell Carcinoma is distinguished by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules. In contrast, Mucoepidermoid Carcinoma is characterized by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns.",
      },
      {
        name: "Sialoblastoma",
        distinction:
          "Acinic Cell Carcinoma is distinguished by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules. In contrast, Sialoblastoma is characterized by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa.",
      },
    ],
    molecular: [
      "Most cases have enhancer hijacking/rearrangement involving NR4A3; HTN3::MSANTD3 is reported in tumors with prominent serous differentiation.",
    ],
  },
  {
    name: "Sialoblastoma",
    group: "Salivary Gland Tumors",
    clue: "Primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa.",
    summary:
      "Primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa.",
    clinical: [
      "Usually present at birth or within the first months of life; no sex predilection.",
      "Parotid most common, followed by submandibular gland.",
      "Painless facial swelling; rarely nerve involvement or skin ulceration.",
    ],
    criteria: [
      "Primitive solid organoid nests of basaloid epithelial cells with vesicular chromatin.",
      "Cuboidal-to-columnar ductal cells or budding ducts are present.",
      "Fibrous stroma separates nests; assess mitoses, necrosis, and Ki-67 for risk features.",
    ],
    histology: [
      "Tumor cells have scant cytoplasm and high nuclear-to-cytoplasmic ratio.",
      "Ductal structures may contain basophilic secretions or form cribriform areas.",
      "Peripheral palisading may be present.",
    ],
    ihc: [
      "SOX10, p63, nuclear β-catenin, and KIT may be positive.",
      "CK5/6, CK7, CK19, SMA, and calponin are variably expressed.",
    ],
    differential: [
      {
        name: "Basal cell adenoma/adenocarcinoma",
        distinction:
          "Usually occurs in older patients and lacks the primitive neonatal salivary anlage pattern.",
      },
      {
        name: "Adenoid cystic carcinoma",
        distinction:
          "Shows characteristic cribriform/tubular architecture and MYB/MYBL1-related alterations.",
      },
      {
        name: "Adamantinoma-like Ewing sarcoma",
        distinction:
          "Can show basaloid/squamous differentiation but is supported by EWSR1::FLI1 or related fusion and lacks salivary ductal differentiation.",
      },
      {
        name: "Mucoepidermoid carcinoma",
        distinction:
          "Shows mucous, intermediate, and epidermoid cells rather than primitive organoid basaloid nests.",
      },
      {
        name: "Pleomorphic Adenoma",
        distinction:
          "Sialoblastoma is distinguished by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa. In contrast, Pleomorphic Adenoma is characterized by biphasic ductal and myoepithelial neoplasm with chondromyxoid matrix and blending epithelial–stromal architecture.",
      },
      {
        name: "Mucoepidermoid Carcinoma",
        distinction:
          "Sialoblastoma is distinguished by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa. In contrast, Mucoepidermoid Carcinoma is characterized by salivary carcinoma composed of mucous, intermediate, and epidermoid cells in cystic and solid patterns.",
      },
      {
        name: "Acinic Cell Carcinoma",
        distinction:
          "Sialoblastoma is distinguished by primitive salivary anlage neoplasm with organoid basaloid nests, ductal differentiation, and fibrous septa. In contrast, Acinic Cell Carcinoma is characterized by salivary carcinoma with serous acinar differentiation and pas-diastase-resistant zymogen granules.",
      },
    ],
    molecular: [],
  },
  {
    name: "Nasopharyngeal Carcinoma",
    group: "Nasopharyngeal and Other Malignant Tumors",
    clue: "Usually EBV-associated nonkeratinizing carcinoma with syncytial sheets and a prominent lymphoplasmacytic background.",
    summary:
      "Usually EBV-associated nonkeratinizing carcinoma with syncytial sheets and a prominent lymphoplasmacytic background.",
    clinical: [
      "Typically adolescents (median 13–16 years); male predominance approximately 2–3:1.",
      "Lateral nasopharyngeal wall, especially fossa of Rosenmüller.",
      "Cervical lymphadenopathy, nasal obstruction, epistaxis, otitis media, hearing symptoms, headache, or cranial neuropathy.",
    ],
    criteria: [
      "Infiltrative poorly differentiated carcinoma with loosely cohesive growth and absent or limited squamous differentiation.",
      "In pediatric patients, most cases are nonkeratinizing.",
      "Confirm epithelial lineage and assess EBV by EBER in situ hybridization.",
    ],
    histology: [
      "Large vesicular tumor cells form sheets, irregular islands, and trabeculae.",
      "Prominent lymphocytes and plasma cells are common.",
      "Focal squamous differentiation, spindle-cell areas, granulomas, or amyloid globules may occur.",
    ],
    ihc: [
      "Pancytokeratin and high-molecular-weight keratins are positive.",
      "p63 or p40 supports squamous differentiation.",
      "EBER in situ hybridization is almost invariably positive in pediatric nonkeratinizing NPC.",
    ],
    differential: [
      {
        name: "Hodgkin lymphoma",
        distinction:
          "Lacks broad epithelial marker expression; tumor cells may mimic Reed–Sternberg cells in a lymphoid background.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Expresses lineage-specific lymphoid markers and lacks cytokeratin expression.",
      },
      {
        name: "Metastatic carcinoma to cervical lymph node",
        distinction:
          "Use clinical/radiologic correlation and EBER/phenotype to establish nasopharyngeal origin.",
      },
      {
        name: "NUT carcinoma",
        distinction:
          "Shows monotonous primitive epithelial cells and nuclear NUT expression/rearrangement rather than EBV association.",
      },
      {
        name: "NUT Carcinoma",
        distinction:
          "Nasopharyngeal Carcinoma is distinguished by usually ebv-associated nonkeratinizing carcinoma with syncytial sheets and a prominent lymphoplasmacytic background. In contrast, NUT Carcinoma is characterized by monotonous undifferentiated carcinoma defined by nutm1 rearrangement; abrupt keratinization may be present.",
      },
    ],
    molecular: [
      "EBER positivity is diagnostically useful, particularly in nodal metastases. Somatic alterations commonly affect chromatin regulators and NF-κB, PI3K, and MAPK pathways.",
    ],
  },
  {
    name: "NUT Carcinoma",
    group: "Nasopharyngeal and Other Malignant Tumors",
    clue: "Monotonous undifferentiated carcinoma defined by NUTM1 rearrangement; abrupt keratinization may be present.",
    summary:
      "Monotonous undifferentiated carcinoma defined by NUTM1 rearrangement; abrupt keratinization may be present.",
    clinical: [
      "Broad age range but enriched in children and young adults (median approximately 24 years); equal sex distribution.",
      "Head and neck or thoracic/mediastinal sites; may arise in salivary glands and other organs.",
      "Rapidly progressive mass with early local invasion and distant metastases.",
    ],
    criteria: [
      "Monotonous undifferentiated epithelial malignancy with NUTM1 rearrangement.",
      "NUT immunohistochemistry showing strong speckled/dot-like nuclear staining in a substantial tumor fraction supports the rearrangement.",
      "Do not require abrupt keratinization; it is present in a minority.",
    ],
    histology: [
      "Infiltrative nests and sheets of primitive medium-sized cells with high mitotic activity and necrosis.",
      "Nuclei are monotonous with vesicular chromatin and prominent nucleoli.",
      "Abrupt foci of squamous keratinization may occur; neutrophils are common.",
    ],
    ihc: [
      "NUT shows characteristic speckled/dot-like nuclear staining.",
      "Pancytokeratin and p63/p40 are usually positive.",
      "Neuroendocrine markers may be aberrantly expressed in a subset.",
    ],
    differential: [
      {
        name: "Adamantinoma-like Ewing sarcoma",
        distinction:
          "May express keratins and p40 but is defined by EWSR1::ETS fusion and lacks NUT nuclear staining.",
      },
      {
        name: "Squamous cell carcinoma",
        distinction:
          "Usually shows more overt squamous differentiation and lacks NUTM1 rearrangement.",
      },
      {
        name: "Small cell/neuroendocrine carcinoma",
        distinction:
          "Shows neuroendocrine morphology and phenotype; NUT staining/molecular testing resolves overlap.",
      },
      {
        name: "Rhabdomyosarcoma",
        distinction:
          "Shows myogenic markers such as myogenin and MyoD1 rather than epithelial/NUT profile.",
      },
      {
        name: "Ewing sarcoma",
        distinction: "Usually shows CD99 and EWSR1::ETS fusion.",
      },
      {
        name: "Nasopharyngeal Carcinoma",
        distinction:
          "NUT Carcinoma is distinguished by monotonous undifferentiated carcinoma defined by nutm1 rearrangement; abrupt keratinization may be present. In contrast, Nasopharyngeal Carcinoma is characterized by usually ebv-associated nonkeratinizing carcinoma with syncytial sheets and a prominent lymphoplasmacytic background.",
      },
    ],
    molecular: [
      "NUTM1 rearrangement is defining; BRD4::NUTM1 is most common, with BRD3::NUTM1 and other partners less frequent.",
    ],
  },
  {
    name: "Melanotic Neuroectodermal Tumor of Infancy",
    group: "Neural Crest and Pigmented Tumors",
    clue: "Biphasic tumor of small neuroblast-like cells and larger melanin-producing epithelial cells in a fibrocollagenous stroma.",
    summary:
      "Biphasic tumor of small neuroblast-like cells and larger melanin-producing epithelial cells in a fibrocollagenous stroma.",
    clinical: [
      "Usually infants 3–6 months; slight male predominance.",
      "Craniofacial bones, especially maxilla; less often skull or mandible.",
      "Rapidly enlarging painless bluish-black upper alveolar mass causing facial deformity or feeding difficulty.",
    ],
    criteria: [
      "Biphasic small neuroblast-like cells and larger melanotic epithelial cells in lobules, nests, cords, or trabeculae.",
      "Dense vascular fibrocollagenous stroma separates tumor lobules.",
      "Bone infiltration and entrapped odontogenic tissue are common; mitoses and necrosis are usually absent.",
    ],
    histology: [
      "Large melanin-containing epithelial cells may form tubuloglandular structures and surround small cells.",
      "Small cells resemble neuroblasts and may rarely form neurofibrillary matrix.",
      "Bone and developing tooth structures may be entrapped.",
    ],
    ihc: [
      "Both cell populations may express synaptophysin and vimentin.",
      "Large cells express pancytokeratin, HMB45, and Melan-A.",
      "S100 and desmin are typically negative.",
    ],
    differential: [
      {
        name: "Ewing sarcoma",
        distinction:
          "Monomorphic round-cell tumor without the biphasic melanotic epithelial component.",
      },
      {
        name: "Rhabdomyosarcoma",
        distinction:
          "Shows myogenic differentiation with desmin, myogenin, and MyoD1.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Expresses lineage-specific hematolymphoid markers and lacks biphasic keratin/HMB45-positive cells.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Lacks the characteristic melanin-producing keratin-positive epithelial population.",
      },
    ],
    molecular: [
      "No defining molecular alteration is established; reported variants include somatic BRAF p.V600E and germline CDKN2A variants in selected cases.",
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

export default function HeadAndNeckTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const content = [
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
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          content.includes(query.toLowerCase())
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
          Head and Neck Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for pediatric head and neck lesions,
          emphasizing anatomic site, age, essential morphologic criteria,
          immunophenotype, and diagnostically useful molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Start with the anatomic compartment and age, then classify by
            lineage and defining architecture.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Diagnostic clue</th>
                <th className="px-4 py-3">Key criteria</th>
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
            <strong>1. Establish site and age.</strong> Separate oral mucosa,
            jaw bone, sinonasal tract, nasopharynx, and salivary gland lesions.
          </li>
          <li>
            <strong>2. Identify the dominant lineage.</strong> Consider squamous
            epithelial, odontogenic, fibro-osseous, myxoid, cartilaginous,
            salivary, melanotic/neuroectodermal, and developmental lesions.
          </li>
          <li>
            <strong>3. Assess architecture and invasion.</strong> Evaluate the
            interface, capsule, epithelial–stromal relationships, bone
            permeation, atypia, mitoses, and necrosis.
          </li>
          <li>
            <strong>4. Apply targeted ancillary tests.</strong> Use IHC and
            molecular testing when they resolve a specific differential or
            establish a defining alteration.
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
                    {!!entity.molecular?.length && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
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
        Integrate histologic findings with clinical presentation, imaging, age,
        and adequate sampling. Molecular findings are included only when
        diagnostically informative.
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
