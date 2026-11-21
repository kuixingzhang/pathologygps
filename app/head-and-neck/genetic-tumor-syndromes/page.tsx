"use client";
import { useMemo, useState, type ReactNode } from "react";

type Diff = { name: string; distinction: string };
type Item = {
  name: string;
  group: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: Diff[];
};

const items: Item[] = [
  {
    name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant Hedgehog-pathway tumor-predisposition syndrome",
    profile: [
      "Manifestations begin in childhood; odontogenic keratocysts typically arise after early childhood, while basal cell carcinomas usually develop later, often from adolescence onward.",
      "Affects the jaw, skin, skeleton, and central nervous system; jaw cysts and multiple basal cell carcinomas are key head and neck findings.",
      "May present with multiple jaw cysts, numerous basal cell carcinomas, palmar or plantar pits, macrocephaly, or skeletal anomalies.",
    ],
    criteria: [
      "Apply the clinical criteria: two major and one minor criterion, or one major and three minor criteria.",
      "Major findings include multiple basal cell carcinomas or one before age 20 years, odontogenic keratocysts, palmar/plantar pits, falx cerebri calcification, and bifid or fused ribs.",
      "In an equivocal clinical presentation, demonstrate a heterozygous constitutional pathogenic variant in PTCH1 or SUFU.",
      "A germline SUFU variant does not typically produce odontogenic keratocysts; most syndrome-associated jaw cysts are linked to PTCH1 inactivation.",
    ],
    morphology: [
      "Basal cell carcinomas show the same histological features as their sporadic counterparts; all major subtypes, including pigmented tumors, may occur.",
      "Odontogenic keratocysts resemble sporadic odontogenic keratocysts.",
      "Syndromic cyst walls may contain epithelial rests, islands, or microcysts, but these findings are not diagnostic of the syndrome.",
    ],
    ihc: [],
    molecular: [
      "Constitutional pathogenic variants most often involve PTCH1; less commonly PTCH2 or SUFU.",
      "Use sequencing together with deletion/duplication analysis; complex alterations may require transcript-level analysis.",
      "PTCH1 or SUFU testing may be negative in a minority of clinically affected patients.",
    ],
    differential: [
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "Jaw osteomas, supernumerary teeth, and odontomas favor FAP; multiple odontogenic keratocysts with basal cell carcinomas, palmar pits, or falx calcification favor Gorlin syndrome.",
      },
      {
        name: "Tuberous sclerosis",
        distinction:
          "Facial angiofibromas and oral fibromas with enamel pits favor tuberous sclerosis; multiple odontogenic keratocysts and basal cell carcinomas favor Gorlin syndrome.",
      },
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "Favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules; favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification.",
      },
      {
        name: "Brooke-Spiegler syndrome",
        distinction:
          "Favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma; favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification.",
      },
      {
        name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
        distinction:
          "Favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly; favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification.",
      },
    ],
  },
  {
    name: "Neurofibromatosis type 1",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior: "Autosomal dominant neurocutaneous tumor-predisposition syndrome",
    profile: [
      "Cutaneous findings often begin in infancy or childhood; cutaneous neurofibromas commonly emerge around puberty.",
      "Neurofibromas may involve the skin, peripheral nerves, orbit, and periorbital tissues; orbitofacial plexiform neurofibromas are a characteristic head and neck presentation.",
      "Clinical findings include café-au-lait macules, axillary or inguinal freckling, cutaneous or plexiform neurofibromas, and Lisch nodules.",
    ],
    criteria: [
      "A clinical diagnosis requires at least two established diagnostic features.",
      "Features include six or more café-au-lait macules, two or more neurofibromas or one plexiform neurofibroma, axillary/inguinal freckling, optic pathway glioma, two or more Lisch nodules, a characteristic osseous lesion, or an affected first-degree relative.",
      "Incorporate molecular testing and choroidal abnormalities where appropriate; Legius syndrome and other disorders may mimic selected features.",
    ],
    morphology: [
      "Neurofibromas resemble their sporadic counterparts and contain neoplastic Schwannian cells with a mixed cellular microenvironment, including mast cells and histiocytes.",
      "Atypical neurofibromatous neoplasm of uncertain biologic potential (ANNUBP) is supported by at least two features: cytologic atypia, hypercellularity, loss of neurofibroma architecture, and increased mitotic activity.",
      "MPNST is typically a high-grade malignant spindle cell neoplasm with brisk mitotic activity and necrosis; it may arise in a plexiform neurofibroma or de novo.",
    ],
    ihc: [],
    molecular: [
      "A constitutional pathogenic variant in NF1 is identified in most affected individuals; approximately half of cases are de novo.",
      "NF1 loss impairs neurofibromin-mediated RAS inactivation; ANNUBP may acquire CDKN2A/CDKN2B and SMARCA2-region alterations, while MPNSTs often acquire PRC2-complex abnormalities.",
    ],
    differential: [
      {
        name: "Tuberous sclerosis",
        distinction:
          "Tuberous sclerosis is characterized by facial angiofibromas, hypomelanotic macules, shagreen patches, and CNS/renal hamartomas; NF1 is supported by café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules.",
      },
      {
        name: "Cowden syndrome",
        distinction:
          "Multiple trichilemmomas, oral papillomatosis, and macrocephaly favor Cowden syndrome; neurofibromas, café-au-lait macules, and Lisch nodules favor NF1.",
      },
      {
        name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
        distinction:
          "Favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification; favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules.",
      },
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "Favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis; favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules.",
      },
      {
        name: "Brooke-Spiegler syndrome",
        distinction:
          "Favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma; favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules.",
      },
      {
        name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
        distinction:
          "Favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly; favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules.",
      },
    ],
  },
  {
    name: "Familial adenomatous polyposis, extraintestinal manifestations",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant APC-associated polyposis and tumor-predisposition syndrome",
    profile: [
      "Colorectal adenomas usually develop in adolescence in classic FAP; attenuated FAP has fewer adenomas and later presentation.",
      "Head and neck manifestations include craniofacial osteomas, supernumerary teeth, odontomas, desmoid-type fibromatosis, and cribriform-morular thyroid carcinoma.",
      "A painless jaw mass, dental anomalies, an enlarging head and neck soft-tissue mass, or a thyroid nodule may prompt recognition.",
    ],
    criteria: [
      "Classic FAP is characterized by more than 100 colorectal adenomas; attenuated FAP generally has 1–100 adenomas.",
      "The essential molecular criterion is a constitutional pathogenic APC variant.",
      "In a head and neck presentation, multiple osteomas, supernumerary teeth or odontomas, desmoid-type fibromatosis, or cribriform-morular thyroid carcinoma should prompt evaluation for FAP.",
    ],
    morphology: [
      "Desmoid-type fibromatosis is a locally infiltrative, non-metastasizing fibroblastic/myofibroblastic neoplasm and may arise in head and neck soft tissue, maxillary sinus, nasopharynx, or oral cavity.",
      "Osteomas are composed of mature cortical or cancellous lamellar bone, commonly involving the mandible.",
      "Cribriform-morular thyroid carcinoma shows cribriform architecture admixed with morules; the cribriform component expresses TTF1 and nuclear β-catenin, while morules express CK5 and CD5.",
    ],
    ihc: [
      "Cribriform-morular thyroid carcinoma: cribriform areas are TTF1-positive and show strong nuclear β-catenin; thyroglobulin is negative.",
      "Morules are CK5- and CD5-positive and negative for p63, p40, TTF1, and PAX8; PAX8 is absent or only focal in the cribriform component.",
    ],
    molecular: [
      "Germline pathogenic variants in APC establish the inherited syndrome.",
      "FAP-associated desmoid tumors are driven by APC inactivation rather than the CTNNB1 mutations more typical of sporadic desmoid-type fibromatosis; nuclear β-catenin may be present.",
    ],
    differential: [
      {
        name: "Hyperparathyroidism-jaw tumor syndrome",
        distinction:
          "HPT-JT causes ossifying fibromas of the jaws and parathyroid tumors; FAP is favored by colorectal polyposis, osteomas, supernumerary teeth, odontomas, and cribriform-morular thyroid carcinoma.",
      },
      {
        name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
        distinction:
          "Gorlin syndrome is associated with multiple odontogenic keratocysts and basal cell carcinomas; FAP is associated with osteomas, odontomas, supernumerary teeth, and desmoid-type fibromatosis.",
      },
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "Favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules; favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis.",
      },
      {
        name: "Brooke-Spiegler syndrome",
        distinction:
          "Favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma; favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis.",
      },
      {
        name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
        distinction:
          "Favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly; favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis.",
      },
      {
        name: "Tuberous sclerosis",
        distinction:
          "Favor Tuberous sclerosis when facial and oral angiofibromas, hypomelanotic macules, shagreen patches, ungual fibromas, or cortical tubers; favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis.",
      },
    ],
  },
  {
    name: "Brooke-Spiegler syndrome",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant CYLD-associated cutaneous adnexal tumor syndrome",
    profile: [
      "Cutaneous tumors often begin around puberty and increase in number throughout life; salivary gland tumors usually present after age 40.",
      "Multiple lesions predominantly involve the head and neck skin; trichoepitheliomas favor the nasolabial folds, and membranous basal cell adenomas usually involve the parotid gland.",
      "Patients develop multiple skin-colored, reddish, or blue nodules and papules; parotid tumors may be unilateral, bilateral, synchronous, or metachronous.",
    ],
    criteria: [
      "Recognize the characteristic combination of multiple spiradenomas, cylindromas, spiradenocylindromas, and trichoepitheliomas.",
      "Membranous-type basal cell adenoma of the parotid gland is a characteristic salivary manifestation.",
      "A constitutional heterozygous pathogenic CYLD variant supports the diagnosis; multiple familial trichoepithelioma may represent a skin-limited phenotype.",
    ],
    morphology: [
      "Cutaneous tumors are usually multiple and may coalesce; rapid growth, ulceration, or bleeding raises concern for malignant transformation.",
      "Parotid tumors are typically well-circumscribed membranous-type basal cell adenomas and may be multifocal or bilateral.",
    ],
    ihc: [],
    molecular: [
      "Most classic cases and a substantial proportion of the multiple familial trichoepithelioma phenotype harbor constitutional pathogenic variants in CYLD.",
      "CYLD is a tumor suppressor gene; testing is useful in patients with multiple characteristic adnexal tumors and/or membranous basal cell adenoma.",
    ],
    differential: [
      {
        name: "Tuberous sclerosis",
        distinction:
          "Tuberous sclerosis produces facial angiofibromas, shagreen patches, and ungual fibromas; Brooke-Spiegler syndrome produces multiple cylindromas, spiradenomas, trichoepitheliomas, and sometimes membranous parotid basal cell adenomas.",
      },
      {
        name: "Cowden syndrome",
        distinction:
          "Cowden syndrome is characterized by trichilemmomas, mucosal papillomatosis, and PTEN-associated hamartomas; Brooke-Spiegler syndrome is characterized by CYLD-associated adnexal tumors.",
      },
      {
        name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
        distinction:
          "Favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification; favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma.",
      },
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "Favor Neurofibromatosis type 1 when café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules; favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma.",
      },
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "Favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis; favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma.",
      },
      {
        name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
        distinction:
          "Favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly; favor Brooke-Spiegler syndrome when multiple cylindromas, spiradenomas, spiradenocylindromas, trichoepitheliomas, or membranous parotid basal cell adenoma.",
      },
    ],
  },
  {
    name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant PTEN-associated hamartoma and cancer-predisposition syndrome",
    profile: [
      "Mucocutaneous manifestations often become apparent in early adulthood; the phenotype may be variable within families.",
      "Head and neck findings include facial trichilemmomas, oral mucosal papillomatosis, and multiple small keratotic papules concentrated around facial orifices.",
      "Macrocephaly and multiple mucocutaneous lesions are important clinical clues; recognition has implications for cancer surveillance.",
    ],
    criteria: [
      "Consider the syndrome in patients with multiple mucocutaneous lesions, particularly multiple trichilemmomas and oral papillomatosis, in the appropriate clinical context.",
      "A constitutional pathogenic PTEN variant supports PTEN hamartoma tumor syndrome.",
      "Assess the broader phenotype for macrocephaly, hamartomatous lesions, and associated malignancy risk.",
    ],
    morphology: [
      "Trichilemmomas are benign follicular tumors with outer root sheath differentiation and are a clinically important cutaneous clue.",
      "Oral papillomatosis consists of multiple papillary or verrucous mucosal lesions.",
    ],
    ihc: [],
    molecular: [
      "Constitutional pathogenic variants in PTEN establish the molecular basis of PTEN hamartoma tumor syndrome.",
      "PTEN loss activates PI3K–AKT signaling; molecular confirmation is particularly useful when the phenotype is incomplete.",
    ],
    differential: [
      {
        name: "Brooke-Spiegler syndrome",
        distinction:
          "Multiple cylindromas, spiradenomas, trichoepitheliomas, and membranous parotid basal cell adenoma favor Brooke-Spiegler syndrome; multiple trichilemmomas and oral papillomatosis favor Cowden syndrome.",
      },
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "Café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules favor NF1; macrocephaly, trichilemmomas, and mucosal papillomatosis favor Cowden syndrome.",
      },
      {
        name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
        distinction:
          "Favor Naevoid basal cell carcinoma syndrome (Gorlin syndrome) when multiple odontogenic keratocysts together with basal cell carcinomas, palmar/plantar pits, or falx calcification; favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly.",
      },
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "Favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis; favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly.",
      },
      {
        name: "Tuberous sclerosis",
        distinction:
          "Favor Tuberous sclerosis when facial and oral angiofibromas, hypomelanotic macules, shagreen patches, ungual fibromas, or cortical tubers; favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly.",
      },
    ],
  },
  {
    name: "Familial paraganglioma syndromes",
    group: "Paraganglioma and endocrine tumor-predisposition syndromes",
    behavior: "Hereditary paraganglioma-pheochromocytoma syndromes",
    profile: [
      "Presentation ranges from childhood to adulthood depending on the susceptibility gene; head and neck paragangliomas may be the first manifestation.",
      "Tumors arise along the parasympathetic and sympathetic paraganglionic system, particularly the carotid body, jugulotympanic region, and vagal paraganglia.",
      "Patients may present with a painless neck mass, pulsatile tinnitus, hearing symptoms, lower cranial nerve deficits, or catecholamine-related symptoms.",
    ],
    criteria: [
      "Suspect a hereditary syndrome in patients with multiple, bilateral, multifocal, recurrent, or early-onset paragangliomas, or a relevant family history.",
      "Establish the diagnosis by identifying a constitutional pathogenic variant in a paraganglioma susceptibility gene.",
      "Consider SDHx-related disease and other established susceptibility genes in the appropriate clinical and tumor context.",
    ],
    morphology: [
      "Head and neck paragangliomas show nests (zellballen) of chief cells separated by a delicate vascular network and sustentacular cells at the periphery.",
      "Syndrome-associated tumors generally resemble their sporadic counterparts; multiplicity, bilaterality, and family history are important clues.",
    ],
    ihc: [
      "Chief cells typically express neuroendocrine markers; sustentacular cells can be highlighted by S100 or SOX10.",
    ],
    molecular: [
      "Germline pathogenic variants in SDHD, SDHB, SDHC, SDHAF2, and other susceptibility genes are associated with hereditary paraganglioma syndromes.",
      "Loss of SDHB immunoreactivity in tumor cells is a useful screening clue for SDH-deficient tumors; correlate with germline testing.",
    ],
    differential: [
      {
        name: "Multiple endocrine neoplasia type 2",
        distinction:
          "MEN2 is characterized by medullary thyroid carcinoma, pheochromocytoma, and often hyperparathyroidism; familial paraganglioma syndromes are centered on paragangliomas and pheochromocytomas without the defining RET-associated medullary thyroid carcinoma pattern.",
      },
      {
        name: "Von Hippel-Lindau syndrome",
        distinction:
          "VHL may cause pheochromocytoma/paraganglioma together with retinal/CNS hemangioblastomas, renal clear cell carcinoma, pancreatic lesions, and ELST; familial paraganglioma syndromes are defined by susceptibility-gene-associated paragangliomas.",
      },
      {
        name: "Multiple endocrine neoplasia type 2 (MEN2)",
        distinction:
          "Favor Multiple endocrine neoplasia type 2 (MEN2) when RET-associated medullary thyroid carcinoma with pheochromocytoma, hyperparathyroidism, or mucosal neuromas; favor Familial paraganglioma syndromes when multifocal, bilateral, or familial head and neck paragangliomas with a susceptibility-gene variant.",
      },
      {
        name: "Hyperparathyroidism-jaw tumor syndrome",
        distinction:
          "Favor Hyperparathyroidism-jaw tumor syndrome when CDC73-associated parathyroid neoplasia with jaw ossifying fibromas; favor Familial paraganglioma syndromes when multifocal, bilateral, or familial head and neck paragangliomas with a susceptibility-gene variant.",
      },
    ],
  },
  {
    name: "Multiple endocrine neoplasia type 2 (MEN2)",
    group: "Paraganglioma and endocrine tumor-predisposition syndromes",
    behavior: "Autosomal dominant RET-associated endocrine neoplasia syndrome",
    profile: [
      "Medullary thyroid carcinoma may develop early, particularly in MEN2B; pheochromocytoma and hyperparathyroidism vary by subtype.",
      "Head and neck disease is dominated by medullary thyroid carcinoma; adrenal pheochromocytomas are common associated tumors.",
      "Patients may present with a thyroid nodule, cervical lymphadenopathy, symptoms of catecholamine excess, mucosal neuromas, or marfanoid habitus in MEN2B.",
    ],
    criteria: [
      "Suspect MEN2 in patients with medullary thyroid carcinoma, especially with pheochromocytoma, hyperparathyroidism, mucosal neuromas, or a family history.",
      "A constitutional activating pathogenic RET variant establishes the molecular diagnosis.",
      "Exclude or evaluate pheochromocytoma in patients with suspected MEN2 before thyroid or parathyroid surgery.",
    ],
    morphology: [
      "Medullary thyroid carcinoma is a neuroendocrine carcinoma derived from parafollicular C cells; it may show nested, trabecular, or solid growth and stromal amyloid.",
      "MEN2B-associated mucosal neuromas contain enlarged nerve bundles and are often multiple in the lips, tongue, and oral mucosa.",
    ],
    ihc: [
      "Medullary thyroid carcinoma typically expresses calcitonin, CEA, and neuroendocrine markers.",
    ],
    molecular: [
      "MEN2 is caused by activating germline variants in RET.",
      "Genotype–phenotype correlations are clinically important, particularly for the timing and aggressiveness of medullary thyroid carcinoma.",
    ],
    differential: [
      {
        name: "Familial paraganglioma syndromes",
        distinction:
          "Familial paraganglioma syndromes present with head and neck paragangliomas and/or pheochromocytomas; MEN2 is distinguished by RET-associated medullary thyroid carcinoma and, in MEN2B, mucosal neuromas.",
      },
      {
        name: "Von Hippel-Lindau syndrome",
        distinction:
          "VHL can include pheochromocytoma, but the combination of medullary thyroid carcinoma and a germline RET variant supports MEN2; retinal/CNS hemangioblastomas, renal tumors, and ELST support VHL.",
      },
      {
        name: "Hyperparathyroidism-jaw tumor syndrome",
        distinction:
          "Favor Hyperparathyroidism-jaw tumor syndrome when CDC73-associated parathyroid neoplasia with jaw ossifying fibromas; favor Multiple endocrine neoplasia type 2 (MEN2) when RET-associated medullary thyroid carcinoma with pheochromocytoma, hyperparathyroidism, or mucosal neuromas.",
      },
    ],
  },
  {
    name: "Hyperparathyroidism-jaw tumor syndrome",
    group: "Paraganglioma and endocrine tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant CDC73-associated parathyroid and jaw tumor syndrome",
    profile: [
      "Often presents in young adulthood, although age at onset is variable; no consistent sex predilection is emphasized.",
      "Jaw lesions are ossifying fibromas, often involving the mandible or maxilla; parathyroid tumors are a major systemic manifestation.",
      "Patients may present with jaw swelling, dental displacement, hypercalcemia, renal or uterine lesions, or a family history of parathyroid disease.",
    ],
    criteria: [
      "A constitutional pathogenic CDC73 variant is an essential diagnostic criterion.",
      "Alternatively, multiple histologically confirmed parafibromin-deficient neoplasms in an individual or kindred support the diagnosis.",
      "Recognize the combination of parathyroid neoplasia and jaw ossifying fibromas; renal and uterine lesions may also occur.",
    ],
    morphology: [
      "Jaw tumors are usually ossifying fibromas composed of cellular fibroblast-rich stroma, sometimes with a storiform pattern, admixed with bony trabeculae and/or cementum-like spherules.",
      "The jaw lesions differ from brown tumors of hyperparathyroidism, which reflect osteitis fibrosa cystica.",
      "Parathyroid tumors may show parafibromin loss; however, jaw ossifying fibromas are not reliably identified by parafibromin immunohistochemistry.",
    ],
    ihc: [
      "Parafibromin immunohistochemistry is useful in evaluating parathyroid neoplasms; loss supports CDC73-related disease in the appropriate context.",
      "Parafibromin immunohistochemistry is not a reliable screening marker for HPT-JT-associated jaw ossifying fibromas.",
    ],
    molecular: [
      "Germline pathogenic variants in CDC73 (HRPT2) establish the syndrome; large deletions require dedicated deletion/duplication analysis.",
      "High-impact CDC73 variants may be associated with increased risk of parathyroid carcinoma and jaw tumors.",
    ],
    differential: [
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "FAP-associated jaw findings are predominantly osteomas, odontomas, and supernumerary teeth; HPT-JT is characterized by ossifying fibromas with parathyroid neoplasia and CDC73 alteration.",
      },
      {
        name: "Multiple endocrine neoplasia type 2 (MEN2)",
        distinction:
          "MEN2 is associated with RET-driven medullary thyroid carcinoma and pheochromocytoma; HPT-JT is associated with CDC73-related parathyroid tumors and jaw ossifying fibromas.",
      },
      {
        name: "Familial paraganglioma syndromes",
        distinction:
          "Favor Familial paraganglioma syndromes when multifocal, bilateral, or familial head and neck paragangliomas with a susceptibility-gene variant; favor Hyperparathyroidism-jaw tumor syndrome when CDC73-associated parathyroid neoplasia with jaw ossifying fibromas.",
      },
      {
        name: "Von Hippel-Lindau syndrome",
        distinction:
          "Favor Von Hippel-Lindau syndrome when retinal/CNS hemangioblastomas, renal clear cell carcinoma, pancreatic lesions, or endolymphatic sac tumor; favor Hyperparathyroidism-jaw tumor syndrome when CDC73-associated parathyroid neoplasia with jaw ossifying fibromas.",
      },
    ],
  },
  {
    name: "Li-Fraumeni syndrome",
    group: "DNA repair, chromosomal instability, and telomere syndromes",
    behavior:
      "Autosomal dominant TP53-associated broad-spectrum cancer-predisposition syndrome",
    profile: [
      "Cancers characteristically occur at young ages, often in childhood or early adulthood; both sexes are affected.",
      "Head and neck tumors are uncommon but may involve the larynx, parotid gland, nasal cavity, nasopharynx, and oral cavity.",
      "A personal or family history of early-onset sarcoma, osteosarcoma, breast cancer, brain tumor, or adrenocortical carcinoma is a key clue.",
    ],
    criteria: [
      "Apply established clinical/family-history criteria for Li-Fraumeni syndrome or Li-Fraumeni-like syndrome.",
      "The essential molecular criterion is a constitutional pathogenic TP53 variant.",
      "A head and neck malignancy, particularly at a young age or in a patient with multiple primary tumors, should prompt consideration in the appropriate family context.",
    ],
    morphology: [
      "Head and neck tumors resemble their sporadic counterparts histologically.",
      "Reported head and neck malignancies include squamous cell carcinomas and, particularly in pediatric patients, rhabdomyosarcoma, osteosarcoma, synovial sarcoma, and pleomorphic myxoid liposarcoma.",
    ],
    ihc: [],
    molecular: [
      "Constitutional pathogenic variants in TP53 establish the molecular diagnosis; some clinically suggestive families lack an identifiable variant.",
      "TP53 alterations impair cell-cycle arrest, apoptosis, and senescence, allowing propagation of genetically damaged cells.",
    ],
    differential: [
      {
        name: "Fanconi anemia",
        distinction:
          "Fanconi anemia is distinguished by congenital anomalies, progressive bone marrow failure, crosslinker-induced chromosome breakage, and multifocal oral/head and neck SCC; Li-Fraumeni syndrome is characterized by a broad early-onset cancer spectrum and germline TP53 variants.",
      },
      {
        name: "Bloom syndrome",
        distinction:
          "Bloom syndrome features marked pre- and postnatal growth restriction, sun-sensitive facial rash, and increased sister-chromatid exchange; Li-Fraumeni syndrome is defined by early-onset core cancers and TP53 pathogenic variants.",
      },
      {
        name: "Dyskeratosis congenita",
        distinction:
          "Dyskeratosis congenita is characterized by oral leukoplakia, nail dystrophy, reticulate pigmentation, and very short telomeres; Li-Fraumeni syndrome is characterized by a broad spectrum of early-onset malignancies.",
      },
      {
        name: "Ataxia-telangiectasia",
        distinction:
          "Favor Ataxia-telangiectasia when progressive cerebellar ataxia, telangiectases, elevated AFP, immunodeficiency, and ATM deficiency; favor Li-Fraumeni syndrome when early-onset sarcoma, osteosarcoma, breast cancer, brain tumor, or adrenocortical carcinoma with germline TP53 variant.",
      },
    ],
  },
  {
    name: "Fanconi anemia",
    group: "DNA repair, chromosomal instability, and telomere syndromes",
    behavior:
      "Inherited DNA interstrand crosslink repair disorder with marrow failure and cancer predisposition",
    profile: [
      "Usually recognized in childhood through congenital anomalies and progressive bone marrow failure; head and neck SCC often develops in young adulthood.",
      "Head and neck squamous mucosa is a major solid-tumor site; oral potentially malignant disorders and multifocal SCC may occur.",
      "Clinical findings may include short stature, microcephaly, hypoplastic thumbs, skin pigmentation, hearing loss, and cytopenias.",
    ],
    criteria: [
      "Recognize the combination of congenital or developmental abnormalities, progressive bone marrow failure, and cancer predisposition.",
      "Chromosome breakage testing after diepoxybutane (DEB) or mitomycin C exposure demonstrates increased triradial and quadriradial figures.",
      "Confirm with pathogenic variants in one of the FANC pathway genes; most forms are autosomal recessive, with recognized X-linked and autosomal dominant subtypes.",
      "In patients with FA, oral leukoplakia or lichenoid lesions warrant biopsy and close surveillance even when clinically bland.",
    ],
    morphology: [
      "FA-associated HNSCC resembles sporadic HNSCC but is often poorly differentiated and may show epithelial–mesenchymal transition.",
      "Multifocal disease may be preceded by oral potentially malignant disorders, including lichenoid keratosis or leukoplakia.",
    ],
    ihc: [],
    molecular: [
      "The FA/BRCA pathway repairs DNA interstrand crosslinks and maintains genomic stability.",
      "DEB- or mitomycin C–induced chromosome breakage is a key functional diagnostic test; use germline testing to define the affected FANC gene.",
    ],
    differential: [
      {
        name: "Dyskeratosis congenita",
        distinction:
          "Both disorders cause marrow failure and head and neck SCC; dyskeratosis congenita has the characteristic oral leukoplakia–nail dystrophy–reticulate pigmentation triad and very short telomeres, whereas FA shows DEB/MMC-induced chromosome breakage and congenital anomalies.",
      },
      {
        name: "Ataxia-telangiectasia",
        distinction:
          "AT is characterized by progressive cerebellar ataxia, telangiectases, elevated AFP, and ATM-related radiosensitivity; FA is characterized by congenital anomalies, marrow failure, and crosslinker-induced chromosome breakage.",
      },
      {
        name: "Bloom syndrome",
        distinction:
          "Bloom syndrome features severe growth restriction, sun-sensitive facial erythema, and increased sister-chromatid exchanges; FA more typically features congenital malformations and progressive marrow failure.",
      },
      {
        name: "Li-Fraumeni syndrome",
        distinction:
          "Favor Li-Fraumeni syndrome when early-onset sarcoma, osteosarcoma, breast cancer, brain tumor, or adrenocortical carcinoma with germline TP53 variant; favor Fanconi anemia when congenital anomalies, progressive marrow failure, and DEB/MMC-induced chromosome breakage.",
      },
    ],
  },
  {
    name: "Dyskeratosis congenita",
    group: "DNA repair, chromosomal instability, and telomere syndromes",
    behavior:
      "Inherited telomere biology disorder with marrow failure and cancer predisposition",
    profile: [
      "Mucocutaneous features often emerge in childhood; nail dystrophy commonly becomes apparent between ages 5 and 13 years.",
      "Head and neck involvement is characterized by oral leukoplakia, most often on the tongue; skin and nails show reticulate pigmentation and dystrophy.",
      "Bone marrow failure commonly develops during the second decade; patients are at increased risk of head and neck SCC and hematologic malignancy.",
    ],
    criteria: [
      "Recognize the classic triad of oral leukoplakia, nail dystrophy, and reticulate skin hyperpigmentation/poikiloderma.",
      "Demonstrate markedly shortened telomeres in peripheral blood leukocytes, typically below the first percentile.",
      "Pathogenic variants in telomere biology genes are desirable for molecular confirmation and subtype definition.",
    ],
    morphology: [
      "Cutaneous findings are nonspecific and may include epidermal atrophy, dermal telangiectasia, and pigment incontinence.",
      "Oral leukoplakia requires assessment for epithelial dysplasia and invasive SCC; the syndrome itself does not define a unique tumor histology.",
    ],
    ihc: [],
    molecular: [
      "Genes include DKC1, TERC, TERT, TINF2, NOP10, NHP2, WRAP53, CTC1, and others involved in telomere maintenance.",
      "Flow-FISH or another validated telomere-length assay can demonstrate telomeres below the first percentile in peripheral blood leukocytes.",
    ],
    differential: [
      {
        name: "Fanconi anemia",
        distinction:
          "Fanconi anemia is supported by congenital anomalies, marrow failure, and DEB/MMC-induced chromosome breakage; dyskeratosis congenita is supported by the mucocutaneous triad and critically short telomeres.",
      },
      {
        name: "Bloom syndrome",
        distinction:
          "Bloom syndrome features growth restriction and sun-sensitive facial rash with increased sister-chromatid exchange; dyskeratosis congenita features nail dystrophy, oral leukoplakia, reticulate pigmentation, and telomere shortening.",
      },
      {
        name: "Ataxia-telangiectasia",
        distinction:
          "AT features progressive cerebellar ataxia, conjunctival telangiectases, elevated AFP, and immunodeficiency; dyskeratosis congenita features mucocutaneous abnormalities and telomere shortening.",
      },
      {
        name: "Li-Fraumeni syndrome",
        distinction:
          "Favor Li-Fraumeni syndrome when early-onset sarcoma, osteosarcoma, breast cancer, brain tumor, or adrenocortical carcinoma with germline TP53 variant; favor Dyskeratosis congenita when oral leukoplakia, nail dystrophy, reticulate pigmentation, and critically short telomeres.",
      },
    ],
  },
  {
    name: "Ataxia-telangiectasia",
    group: "DNA repair, chromosomal instability, and telomere syndromes",
    behavior:
      "Autosomal recessive ATM-related DNA double-strand break repair disorder",
    profile: [
      "Classic disease begins in early childhood with progressive cerebellar ataxia; variant disease may present later in adulthood.",
      "Telangiectases typically involve the bulbar conjunctiva and bridge of the nose; head and neck malignancies may involve Waldeyer ring and the parotid gland.",
      "Recurrent sinopulmonary infections, immunodeficiency, hypogonadism, and insulin resistance may accompany the neurologic findings.",
    ],
    criteria: [
      "Characteristic progressive cerebellar ataxia and cerebellar degeneration, with telangiectases when present; telangiectases may be absent in young children and variant cases.",
      "Serum alpha-fetoprotein is elevated in more than 95% of patients.",
      "Supportive findings include reduced IgA/IgE or selected IgG subclasses, lymphopenia, and increased chromosome breakage after X-ray exposure.",
      "Confirm with biallelic pathogenic variants in ATM.",
    ],
    morphology: [
      "Tumors arising in AT generally resemble their sporadic counterparts.",
      "B- and T-cell lymphoid neoplasms predominate and may involve Waldeyer ring; myeloid neoplasms are uncommon.",
    ],
    ihc: [],
    molecular: [
      "Biallelic pathogenic variants in ATM establish the molecular diagnosis; MRE11A variants can cause a rare AT-like disorder.",
      "ATM deficiency impairs the response to DNA double-strand breaks and causes hypersensitivity to ionizing radiation.",
    ],
    differential: [
      {
        name: "Fanconi anemia",
        distinction:
          "FA is characterized by congenital anomalies, marrow failure, and DEB/MMC-induced chromosome breakage; AT is characterized by early-onset cerebellar ataxia, telangiectases, elevated AFP, and ATM deficiency.",
      },
      {
        name: "Dyskeratosis congenita",
        distinction:
          "Dyskeratosis congenita is defined by mucocutaneous triad and critically short telomeres; AT is defined by neurologic degeneration, telangiectases, immunodeficiency, and elevated AFP.",
      },
      {
        name: "Bloom syndrome",
        distinction:
          "Bloom syndrome presents with severe growth restriction and sun-sensitive rash; AT presents with progressive ataxia and telangiectases.",
      },
      {
        name: "Li-Fraumeni syndrome",
        distinction:
          "Favor Li-Fraumeni syndrome when early-onset sarcoma, osteosarcoma, breast cancer, brain tumor, or adrenocortical carcinoma with germline TP53 variant; favor Ataxia-telangiectasia when progressive cerebellar ataxia, telangiectases, elevated AFP, immunodeficiency, and ATM deficiency.",
      },
    ],
  },
  {
    name: "Bloom syndrome",
    group: "DNA repair, chromosomal instability, and telomere syndromes",
    behavior:
      "Autosomal recessive BLM-related chromosomal instability syndrome",
    profile: [
      "Growth restriction is prominent from early life, with reduced height, weight, and head circumference; both sexes are affected.",
      "A sun-sensitive rash commonly appears during infancy on the cheeks and nose; head and neck cancers include oropharyngeal carcinoma.",
      "Other clues include a long narrow face, prominent nose and ears, small mandible, recurrent respiratory infections, and male infertility.",
    ],
    criteria: [
      "Recognize marked pre- and postnatal growth restriction with characteristic facial features and sun-sensitive facial rash.",
      "Confirm with biallelic pathogenic variants in BLM.",
      "Increased sister-chromatid exchange frequency on specialized cytogenetic studies supports the diagnosis.",
    ],
    morphology: [
      "There is no unique histologic appearance for Bloom-associated tumors; tumors are evaluated according to their site-specific diagnostic criteria.",
      "Oropharyngeal carcinomas and other epithelial malignancies resemble their sporadic counterparts.",
    ],
    ihc: [],
    molecular: [
      "BLM encodes a RECQ-family DNA helicase; loss of function causes replication errors, chromosomal rearrangements, and genomic instability.",
      "Biallelic BLM pathogenic variants and increased sister-chromatid exchanges are diagnostically useful.",
    ],
    differential: [
      {
        name: "Fanconi anemia",
        distinction:
          "Both are chromosomal instability syndromes with cancer predisposition; FA is characterized by congenital anomalies and marrow failure with DEB/MMC-induced chromosome breakage, whereas Bloom syndrome is marked by severe growth restriction and sun-sensitive rash with increased sister-chromatid exchanges.",
      },
      {
        name: "Dyskeratosis congenita",
        distinction:
          "Dyskeratosis congenita shows oral leukoplakia, nail dystrophy, reticulate pigmentation, and telomere shortening; Bloom syndrome shows growth restriction, facial erythema, and BLM-related sister-chromatid exchange.",
      },
      {
        name: "Li-Fraumeni syndrome",
        distinction:
          "Li-Fraumeni syndrome is defined by early-onset core tumors and germline TP53 variants; Bloom syndrome has characteristic growth restriction, sun sensitivity, and BLM-related chromosomal instability.",
      },
      {
        name: "Ataxia-telangiectasia",
        distinction:
          "Favor Ataxia-telangiectasia when progressive cerebellar ataxia, telangiectases, elevated AFP, immunodeficiency, and ATM deficiency; favor Bloom syndrome when marked growth restriction, sun-sensitive facial rash, and increased sister-chromatid exchanges with BLM variants.",
      },
    ],
  },
  {
    name: "Von Hippel-Lindau syndrome",
    group: "Paraganglioma and endocrine tumor-predisposition syndromes",
    behavior: "Autosomal dominant VHL tumor-predisposition syndrome",
    profile: [
      "Most patients present between ages 30 and 40 years, although presentation ranges from childhood to late adulthood; there is a female predominance in reported series.",
      "Head and neck manifestations include endolymphatic sac tumors of the temporal bone and occasional head and neck paragangliomas; retinal and CNS hemangioblastomas are major associated tumors.",
      "Hearing loss may be the presenting symptom of an endolymphatic sac tumor; visual loss, cerebellar ataxia, spinal cord compression, or hormone-excess symptoms may occur.",
    ],
    criteria: [
      "A constitutional pathogenic VHL variant with at least one associated neoplasm is an essential diagnostic combination.",
      "In the absence of an identified VHL variant, retinal and/or CNS hemangioblastomas together with another characteristic VHL-associated neoplasm support the diagnosis.",
      "Genetic testing should be considered in every patient with an endolymphatic sac tumor; patients with VHL require radiographic screening for these tumors.",
    ],
    morphology: [
      "Endolymphatic sac tumors are papillary and/or cystic, often with temporal bone remodeling; bland cuboidal-to-columnar cells form broad interdigitating papillae with fibrovascular cores.",
      "Tumor cells have abundant clear or vacuolated cytoplasm and relatively uniform nuclei; mitoses, necrosis, and marked pleomorphism are inconspicuous.",
      "CNS hemangioblastomas contain neoplastic stromal cells with abundant reactive vasculature; cellular and reticular patterns occur.",
      "VHL-associated paragangliomas may show clear, vacuolated tumor cells in myxoid, edematous, or hyalinized stroma.",
    ],
    ihc: [
      "Endolymphatic sac tumor: pancytokeratin, CK7, EMA, HIF1α, GLUT1, membranous CAIX, and nuclear PAX8 are positive; TTF1 and thyroglobulin are negative.",
      "VHL-associated paragangliomas often show membranous CAIX and may express alpha-inhibin.",
    ],
    molecular: [
      "Constitutional pathogenic variants in the VHL tumor suppressor gene establish the syndrome; somatic second hits inactivate the remaining allele in tumors.",
      "Type 1 disease is commonly associated with deletion or truncating variants; type 2 disease is commonly associated with missense variants.",
    ],
    differential: [
      {
        name: "Familial paraganglioma syndromes",
        distinction:
          "Both may produce head and neck paragangliomas; VHL is favored by retinal/CNS hemangioblastomas, renal clear cell carcinoma, pancreatic lesions, and endolymphatic sac tumors, while SDHx-related syndromes are centered on paragangliomas.",
      },
      {
        name: "Multiple endocrine neoplasia type 2 (MEN2)",
        distinction:
          "MEN2 is characterized by RET-associated medullary thyroid carcinoma with pheochromocytoma; VHL is distinguished by hemangioblastomas, renal clear cell carcinoma, pancreatic cystic/neuroendocrine lesions, and endolymphatic sac tumors.",
      },
      {
        name: "Hyperparathyroidism-jaw tumor syndrome",
        distinction:
          "Favor Hyperparathyroidism-jaw tumor syndrome when CDC73-associated parathyroid neoplasia with jaw ossifying fibromas; favor Von Hippel-Lindau syndrome when retinal/CNS hemangioblastomas, renal clear cell carcinoma, pancreatic lesions, or endolymphatic sac tumor.",
      },
    ],
  },
  {
    name: "Tuberous sclerosis",
    group: "Developmental and cutaneous tumor-predisposition syndromes",
    behavior:
      "Autosomal dominant TSC1/TSC2-related multisystem hamartoma syndrome",
    profile: [
      "Cutaneous and oral manifestations may begin in childhood; cardiac rhabdomyomas often present in newborns and infants younger than 2 years.",
      "Head and neck findings include facial angiofibromas, fibrous cephalic plaques, shagreen patches, poliosis, oral angiofibromas, and dental enamel pits.",
      "Angiofibromas favor the centrofacial cheeks, nasolabial folds, chin, anterior gingiva, lips, tongue, and palate.",
    ],
    criteria: [
      "A constitutional pathogenic variant in TSC1 or TSC2 is independently sufficient for a definitive diagnosis.",
      "Clinical diagnosis is based on established major and minor features; evaluate the skin, oral cavity, CNS, heart, kidneys, and lungs.",
      "Do not diagnose the syndrome from a single facial angiofibroma or other isolated feature because individual manifestations may occur sporadically.",
    ],
    morphology: [
      "Angiofibromas are well-circumscribed nodules of bland oval cells with delicate collagen and evenly distributed small-to-medium-sized vessels.",
      "Fibrous cephalic plaques show thickened collagen bundles with decreased or absent elastic fibers; dilated vessels may mimic angiofibroma.",
    ],
    ihc: [],
    molecular: [
      "Constitutional pathogenic variants in TSC1 (hamartin) or TSC2 (tuberin) establish the diagnosis.",
      "Loss of the hamartin–tuberin complex leads to mTOR pathway activation; TSC2 deletions may extend into PKD1 and cause a contiguous-gene phenotype.",
    ],
    differential: [
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "NF1 is characterized by café-au-lait macules, skinfold freckling, neurofibromas, and Lisch nodules; tuberous sclerosis is characterized by facial angiofibromas, hypomelanotic macules, shagreen patches, ungual fibromas, and CNS/renal hamartomas.",
      },
      {
        name: "Brooke-Spiegler syndrome",
        distinction:
          "Brooke-Spiegler syndrome produces multiple cylindromas, spiradenomas, and trichoepitheliomas; tuberous sclerosis produces facial/oral angiofibromas and fibrous cephalic plaques.",
      },
      {
        name: "Naevoid basal cell carcinoma syndrome (Gorlin syndrome)",
        distinction:
          "Gorlin syndrome is characterized by basal cell carcinomas, odontogenic keratocysts, palmar/plantar pits, and falx calcification; tuberous sclerosis is characterized by angiofibromas, enamel pits, cortical tubers, and renal angiomyolipomas.",
      },
      {
        name: "Familial adenomatous polyposis, extraintestinal manifestations",
        distinction:
          "Favor Familial adenomatous polyposis, extraintestinal manifestations when colorectal adenomatous polyposis with osteomas, odontomas, supernumerary teeth, or desmoid-type fibromatosis; favor Tuberous sclerosis when facial and oral angiofibromas, hypomelanotic macules, shagreen patches, ungual fibromas, or cortical tubers.",
      },
      {
        name: "Cowden syndrome (PTEN hamartoma tumor syndrome)",
        distinction:
          "Favor Cowden syndrome (PTEN hamartoma tumor syndrome) when multiple trichilemmomas, oral papillomatosis, and macrocephaly; favor Tuberous sclerosis when facial and oral angiofibromas, hypomelanotic macules, shagreen patches, ungual fibromas, or cortical tubers.",
      },
    ],
  },
];

const categories = [
  "All",
  "Developmental and cutaneous tumor-predisposition syndromes",
  "Paraganglioma and endocrine tumor-predisposition syndromes",
  "DNA repair, chromosomal instability, and telomere syndromes",
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

export default function HeadAndNeckGeneticTumorSyndromesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            ...x.profile,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flatMap((d) => [d.name, d.distinction]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (name: string) =>
    setOpened((a) =>
      a.includes(name) ? a.filter((x) => x !== name) : [...a, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck / Hereditary Tumor Syndromes
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Head and Neck Genetic Tumor Syndromes
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A diagnostic reference to inherited tumor-predisposition
                syndromes with head and neck manifestations, emphasizing
                clinical recognition, essential diagnostic criteria, morphology,
                immunophenotype, molecular findings, and focused differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Recognize the syndrome from the tumor pattern and the
                accompanying phenotype.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Multiplicity, bilaterality, unusually young age, characteristic
                associated lesions, and family history should prompt
                consideration of germline testing.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic approach: when to consider a hereditary syndrome">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Look for multiplicity",
                "Multiple, bilateral, multifocal, recurrent, or metachronous tumors may indicate an inherited predisposition.",
              ],
              [
                "Check the age",
                "Tumors arising unusually early, multiple primary cancers, or childhood malignancies warrant attention.",
              ],
              [
                "Connect the phenotype",
                "Correlate the tumor with skin, oral, dental, skeletal, neurologic, endocrine, hematologic, and visceral findings.",
              ],
              [
                "Confirm the mechanism",
                "Use syndrome-directed germline testing, functional assays, and tumor immunohistochemistry where appropriate.",
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
                All 15 syndromes are independently expandable. Same-group
                syndromes are included in one another’s differential diagnosis.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search syndrome, gene, tumor, or clinical feature..."
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
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {p.profile[1] || p.profile[0]}
                      </p>
                      <p className="mt-2 text-xs font-medium text-slate-600">
                        Diagnostic criteria · Histopathology · Differential
                        diagnosis ({p.differential.length})
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse profile" : "Expand diagnostic profile"}
                      　{open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={p.profile} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        {p.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunohistochemistry
                            </h4>
                            <Bullets items={p.ihc} />
                          </>
                        )}
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
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d.name}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d.distinction}
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
                No matching syndrome.
              </div>
            )}
          </div>
        </section>
        <Panel title="High-yield molecular associations">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Syndrome</th>
                  <th className="py-2 pr-3">Gene / pathway</th>
                  <th className="py-2">High-yield head and neck clue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Gorlin syndrome",
                    "PTCH1 / SUFU; Hedgehog",
                    "Multiple odontogenic keratocysts and basal cell carcinomas",
                  ],
                  [
                    "NF1",
                    "NF1; RAS signaling",
                    "Plexiform neurofibroma, orbitofacial involvement",
                  ],
                  [
                    "FAP",
                    "APC; WNT / β-catenin",
                    "Osteomas, odontomas, desmoid-type fibromatosis, cribriform-morular thyroid carcinoma",
                  ],
                  [
                    "Brooke-Spiegler",
                    "CYLD",
                    "Multiple adnexal tumors; membranous parotid basal cell adenoma",
                  ],
                  [
                    "Cowden syndrome",
                    "PTEN; PI3K–AKT",
                    "Trichilemmomas and oral papillomatosis",
                  ],
                  [
                    "Familial paraganglioma",
                    "SDHx and related genes",
                    "Multifocal or bilateral head and neck paragangliomas",
                  ],
                  [
                    "MEN2",
                    "RET",
                    "Medullary thyroid carcinoma and pheochromocytoma",
                  ],
                  [
                    "HPT-JT",
                    "CDC73",
                    "Jaw ossifying fibromas and parathyroid neoplasia",
                  ],
                  [
                    "Li-Fraumeni",
                    "TP53",
                    "Early-onset multiple primary cancers",
                  ],
                  [
                    "Fanconi anemia",
                    "FANC / FA-BRCA pathway",
                    "Early or multifocal oral/head and neck SCC",
                  ],
                  [
                    "Dyskeratosis congenita",
                    "Telomere biology genes",
                    "Oral leukoplakia, nail dystrophy, reticulate pigmentation",
                  ],
                  [
                    "Ataxia-telangiectasia",
                    "ATM",
                    "Ataxia, telangiectases, lymphoid malignancies",
                  ],
                  [
                    "Bloom syndrome",
                    "BLM",
                    "Growth restriction, sun-sensitive rash, chromosomal instability",
                  ],
                  [
                    "VHL",
                    "VHL",
                    "Endolymphatic sac tumor and hemangioblastomas",
                  ],
                  [
                    "Tuberous sclerosis",
                    "TSC1 / TSC2; mTOR",
                    "Facial/oral angiofibromas and enamel pits",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                    <td className="py-2 pr-3 text-slate-600">{r[1]}</td>
                    <td className="py-2 text-slate-600">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope:</b> This reference focuses on
          inherited syndromes with recognized head and neck manifestations.
          Tumors are described in their syndrome context; individual tumor
          diagnosis and staging remain site- and entity-specific.
        </footer>
      </div>
    </main>
  );
}
