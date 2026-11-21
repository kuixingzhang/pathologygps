"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clinical: string;
  essential: string[];
  morphology: string[];
  ihc: string[];
  differential: Differential[];
  molecular: string[];
};

const entities: Entity[] = [
  {
    name: "Somatotroph PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Usually adults; sellar; acromegaly, gigantism before epiphyseal closure, headache or visual symptoms.",
    essential: [
      "Pituitary neuroendocrine neoplasm with diffuse nuclear PIT1 and GH expression.",
      "Classify as densely or sparsely granulated based on cytoplasmic keratin pattern and morphology.",
      "Correlate with elevated IGF-1 and failure of GH suppression when clinically functioning.",
    ],
    differential: [
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Mammosomatotrophs coexpress GH and prolactin in the same cells; somatotroph tumors lack the distinct prolactin-producing population.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Separate somatotroph and lactotroph cell populations are present; use hormone and lineage markers to establish distinct populations.",
      },
      {
        name: "Acidophil stem cell PitNET",
        distinction:
          "Oncocytic cells, prolactin/ER positivity, minimal or absent GH, and mitochondrial accumulation favor acidophil stem cell tumor.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Mature Plurihormonal PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Immature PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Acidophil Stem Cell PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "GNAS activating mutations occur in a substantial subset, particularly densely granulated tumors.",
      "Young patients with sparsely granulated tumors warrant consideration of germline AIP-associated FIPA; consider syndromic context including MEN1, MEN4, Carney complex, and McCune–Albright syndrome.",
    ],
    morphology: [
      "Densely granulated: acidophilic cells with abundant GH granules and diffuse strong GH.",
      "Sparsely granulated: chromophobic/pale cells with fibrous bodies and variable, often focal GH.",
    ],
    ihc: [
      "PIT1 is diffusely nuclear in both subtypes.",
      "CAM5.2/CK8/18 shows perinuclear keratin in densely granulated tumors and fibrous bodies in sparsely granulated tumors.",
      "Alpha-subunit is commonly strong in densely granulated tumors and usually absent in sparsely granulated tumors.",
    ],
  },
  {
    name: "Mammosomatotroph PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Typically adults; sellar; acromegaly or gigantism, sometimes with hyperprolactinemia.",
    essential: [
      "Well-differentiated PIT1-lineage PitNET with mammosomatotroph differentiation.",
      "GH and prolactin are expressed in the same tumor cell population.",
      "Diffuse nuclear PIT1 supports lineage assignment.",
    ],
    differential: [
      {
        name: "Somatotroph PitNET",
        distinction:
          "GH-positive cells without the characteristic coexpression of prolactin in the same cells favor somatotroph PitNET.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Shows distinct GH-positive somatotroph and prolactin-positive lactotroph populations rather than a single coexpressing population.",
      },
      {
        name: "Mature plurihormonal PIT1-lineage PitNET",
        distinction:
          "Also expresses TSH and alpha-subunit, in addition to GH and prolactin.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Immature PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Acidophil Stem Cell PitNET are not present.",
      },
      {
        name: "Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mature Plurihormonal PIT1-Lineage PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No defining molecular test is required; consider germline evaluation when clinical or family history suggests inherited predisposition.",
    ],
    morphology: [
      "Usually acidophilic cells resembling densely granulated somatotroph tumors.",
      "GH and prolactin show extensive cytoplasmic expression.",
    ],
    ihc: [
      "PIT1 is diffusely nuclear.",
      "Alpha-subunit may be expressed; TSH is not a defining hormone.",
    ],
  },
  {
    name: "Lactotroph PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Usually adults, often women of reproductive age; sellar; hyperprolactinemia, amenorrhea, galactorrhea, infertility, hypogonadism, or mass effect.",
    essential: [
      "PitNET with lactotroph differentiation and prolactin expression.",
      "PIT1 nuclear positivity establishes PIT1 lineage.",
      "Correlate serum prolactin with tumor size and exclude stalk effect or medication-related hyperprolactinemia.",
    ],
    differential: [
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Coexpresses GH and prolactin; lactotroph tumor is predominantly prolactin-lineage.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Contains distinct GH-positive and prolactin-positive cell populations.",
      },
      {
        name: "Stalk-effect hyperprolactinemia",
        distinction:
          "Prolactin elevation from impaired dopaminergic inhibition is not accompanied by a prolactin-positive PitNET; interpret with imaging and serum levels.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Mature Plurihormonal PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Immature PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Acidophil Stem Cell PitNET are not present.",
      },
      {
        name: "Somatotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Somatotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "MEN1, MEN4 (CDKN1B), and AIP-related familial isolated pituitary adenoma are relevant hereditary contexts in selected patients.",
    ],
    morphology: [
      "Densely granulated tumors have acidophilic cytoplasm; sparsely granulated tumors are more chromophobic.",
      "Sparsely granulated tumors may show paranuclear fibrous bodies.",
    ],
    ihc: [
      "Prolactin is cytoplasmic; PIT1 is nuclear.",
      "ER is commonly expressed; CAM5.2 highlights keratin patterns and fibrous bodies.",
    ],
  },
  {
    name: "Thyrotroph PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Adults; sellar; central hyperthyroidism with elevated free thyroid hormones and nonsuppressed TSH, often with headache or visual symptoms.",
    essential: [
      "PitNET with thyrotroph differentiation.",
      "Diffuse nuclear PIT1 with TSH-beta expression supports diagnosis.",
      "Correlate with biochemical evidence of inappropriate TSH secretion.",
    ],
    differential: [
      {
        name: "Mature plurihormonal PIT1-lineage PitNET",
        distinction:
          "Coexpresses GH, prolactin, TSH, and alpha-subunit rather than predominantly thyrotroph differentiation.",
      },
      {
        name: "Other PIT1-lineage PitNETs",
        distinction:
          "Somatotroph, lactotroph, and mammosomatotroph tumors are separated by their dominant hormone profile.",
      },
      {
        name: "Thyroid hormone resistance / TSH-secreting nonpituitary source",
        distinction:
          "Use clinical, biochemical, imaging, and pituitary-lineage findings to establish a pituitary source.",
      },
      {
        name: "Somatotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Somatotroph PitNET are not present.",
      },
      {
        name: "Lactotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Lactotroph PitNET are not present.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Immature PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Acidophil Stem Cell PitNET are not present.",
      },
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mammosomatotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mature Plurihormonal PIT1-Lineage PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No recurrent molecular alteration is required for diagnosis; consider syndromic evaluation when clinically indicated.",
    ],
    morphology: [
      "Often chromophobic or weakly acidophilic cells in trabecular, sinusoidal, or papillary arrangements.",
      "TSH-beta and alpha-subunit are expressed.",
    ],
    ihc: [
      "PIT1 is nuclear; GATA3 may be positive.",
      "Cytokeratin pattern varies with granulation.",
    ],
  },
  {
    name: "Mature Plurihormonal PIT1-Lineage PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Usually adults; sellar; acromegaly/gigantism with hyperthyroidism and/or hyperprolactinemia.",
    essential: [
      "PitNET with PIT1 nuclear immunoreactivity in all or most tumor cells.",
      "Extensive GH expression with variable prolactin, TSH, and alpha-subunit expression.",
      "GATA3 and ER expression are supportive.",
    ],
    differential: [
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Produces GH and prolactin but not TSH; mature plurihormonal tumors show broader hormone expression.",
      },
      {
        name: "Immature PIT1-lineage PitNET",
        distinction:
          "Immature epithelioid or spindle cells, marked atypia, prominent nucleoli, and only patchy hormone expression favor the immature subtype.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Shows distinct somatotroph and lactotroph populations rather than a single mature plurihormonal population.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Acidophil Stem Cell PitNET are not present.",
      },
      {
        name: "Somatotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Somatotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Immature PIT1-Lineage PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No diagnostic molecular test is required; assess hereditary risk from clinical and family history.",
    ],
    morphology: [
      "Solid or sinusoidal growth composed predominantly of acidophilic cells with interspersed chromophobes.",
      "GH is usually extensive; prolactin, TSH, and alpha-subunit vary in extent.",
    ],
    ihc: ["PIT1 is diffusely nuclear; GATA3 and ER are often positive."],
  },
  {
    name: "Immature PIT1-Lineage PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Often younger patients; sellar; variable mass effect and endocrine dysfunction; may be clinically nonfunctioning.",
    essential: [
      "PIT1-lineage PitNET with immature cytology and limited differentiation toward thyrotroph, somatotroph, and/or lactotroph cells.",
      "Tumor cells show diffuse PIT1 with only limited or patchy pituitary hormone expression.",
      "Recognize as a high-risk subtype; morphology alone does not establish metastatic behavior.",
    ],
    differential: [
      {
        name: "Mature plurihormonal PIT1-lineage PitNET",
        distinction:
          "Mature tumor has more differentiated acidophilic morphology and extensive hormone expression.",
      },
      {
        name: "Acidophil stem cell PitNET",
        distinction:
          "Shows oncocytic cells, mitochondrial accumulation, and prolactin/ER expression with minimal GH.",
      },
      {
        name: "Other PIT1-lineage PitNETs",
        distinction:
          "Well-differentiated somatotroph, lactotroph, mammosomatotroph, and thyrotroph tumors show more mature cytology and lineage-specific hormone profiles.",
      },
      {
        name: "Somatotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Somatotroph PitNET are not present.",
      },
      {
        name: "Lactotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Lactotroph PitNET are not present.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mammosomatotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mature Plurihormonal PIT1-Lineage PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Acidophil Stem Cell PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No defining molecular test; evaluate for inherited predisposition when young age, family history, or syndromic features are present.",
    ],
    morphology: [
      "Epithelioid or spindle-shaped chromophobic cells with large pleomorphic nuclei.",
      "Prominent nucleoli and intranuclear pseudoinclusions may be present.",
    ],
    ihc: [
      "Hormone expression (GH, prolactin, TSH) is usually patchy.",
      "PIT1 is diffusely nuclear; other lineage transcription factors help exclude alternate lineages.",
    ],
  },
  {
    name: "Acidophil Stem Cell PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Usually adults; sellar; hyperprolactinemia often less marked than expected for tumor size, sometimes acromegaly or mass effect.",
    essential: [
      "PIT1-positive PitNET with oncocytic features, variable prolactin, and focal to absent GH.",
      "ER positivity is supportive.",
      "Consider this subtype in a clinically aggressive or treatment-resistant PIT1-lineage tumor.",
    ],
    differential: [
      {
        name: "Lactotroph PitNET",
        distinction:
          "Conventional lactotroph tumors show more convincing prolactin differentiation and lack the characteristic oncocytic phenotype.",
      },
      {
        name: "Sparsely granulated somatotroph PitNET",
        distinction:
          "Fibrous bodies may overlap, but acidophil stem cell tumor shows prominent oncocytic/mitochondrial features and little GH.",
      },
      {
        name: "Immature PIT1-lineage PitNET",
        distinction:
          "Immature tumors show pleomorphic chromophobic cells rather than oncocytic cells.",
      },
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Mammosomatotroph PitNET are not present.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Mature Plurihormonal PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Somatotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Somatotroph PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Immature PIT1-Lineage PitNET; the current lesion lacks that defining combination.",
      },
      {
        name: "Mixed Somatotroph-Lactotroph PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Mixed Somatotroph-Lactotroph PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No molecular test is required for diagnosis; clinical context may prompt germline evaluation.",
    ],
    morphology: [
      "Large oncocytic cells with abundant granular eosinophilic cytoplasm from mitochondrial accumulation.",
      "PIT1 is diffusely nuclear.",
    ],
    ihc: [
      "Prolactin and ER are variable; GH is minimal to absent.",
      "CAM5.2 may highlight scattered paranuclear fibrous bodies.",
      "Antimitochondrial staining may highlight increased mitochondria.",
    ],
  },
  {
    name: "Mixed Somatotroph-Lactotroph PitNET",
    group: "PIT1-Lineage PitNETs",
    clinical:
      "Adults; sellar; acromegaly with hyperprolactinemia or mass effect.",
    essential: [
      "Well-differentiated PIT1-lineage PitNET containing distinct somatotroph and lactotroph cell populations.",
      "Demonstrate separate GH-positive and prolactin-positive populations rather than assuming coexpression.",
      "PIT1 is nuclear in both populations.",
    ],
    differential: [
      {
        name: "Mammosomatotroph PitNET",
        distinction:
          "A single population coexpresses GH and prolactin; mixed tumor has distinct hormone-producing populations.",
      },
      {
        name: "Somatotroph PitNET",
        distinction: "Lacks a distinct prolactin-positive tumor population.",
      },
      {
        name: "Lactotroph PitNET",
        distinction: "Lacks a distinct GH-positive somatotroph population.",
      },
      {
        name: "Thyrotroph PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Thyrotroph PitNET are not present.",
      },
      {
        name: "Mature Plurihormonal PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Mature Plurihormonal PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Immature PIT1-Lineage PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Immature PIT1-Lineage PitNET are not present.",
      },
      {
        name: "Acidophil Stem Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Acidophil Stem Cell PitNET are not present.",
      },
    ],
    molecular: [
      "No specific molecular test is required; consider inherited predisposition based on age, family history, and syndromic findings.",
    ],
    morphology: [
      "Two recognizable cell populations may be intermingled or arranged in separate areas.",
      "Somatotroph cells express GH; lactotroph cells express prolactin.",
    ],
    ihc: [
      "PIT1 is diffusely nuclear; ER may highlight lactotroph differentiation.",
      "Cytokeratin patterns reflect the granulation of each component.",
    ],
  },
  {
    name: "Corticotroph PitNET",
    group: "TPIT-Lineage PitNETs",
    clinical:
      "Adults; sellar; Cushing disease when functioning; silent tumors present with mass effect or visual symptoms.",
    essential: [
      "PitNET with corticotroph differentiation and nuclear TPIT expression.",
      "ACTH expression supports corticotroph differentiation but may be weak or focal.",
      "Distinguish functioning from silent corticotroph tumors clinically and biochemically.",
    ],
    differential: [
      {
        name: "Crooke cell PitNET",
        distinction:
          "Crooke cell change is extensive and present in most tumor cells; conventional corticotroph tumors lack diffuse Crooke hyaline change.",
      },
      {
        name: "Gonadotroph PitNET",
        distinction:
          "SF1-lineage tumor expresses gonadotropins rather than TPIT/ACTH.",
      },
      {
        name: "Metastatic PitNET",
        distinction:
          "Metastatic designation requires discontinuous CNS spread or systemic metastasis, not local invasion alone.",
      },
    ],
    molecular: [
      "No defining molecular alteration is required; consider MEN1 and other inherited syndromes when clinically indicated.",
    ],
    morphology: [
      "Densely granulated tumors have basophilic cytoplasm and conspicuous secretory granules.",
      "Sparsely granulated tumors are often larger and more invasive, with variable cytoplasm.",
    ],
    ihc: [
      "Crooke cell tumor shows extensive hyaline, ring-like cytoplasmic keratin accumulation.",
      "TPIT is nuclear; ACTH is cytoplasmic; CAM5.2 highlights Crooke hyaline material.",
    ],
  },
  {
    name: "Gonadotroph PitNET",
    group: "SF1-Lineage PitNETs",
    clinical:
      "Usually middle-aged or older adults; sellar; commonly clinically nonfunctioning with headache, visual field loss, or hypopituitarism.",
    essential: [
      "PitNET with nuclear SF1 expression and gonadotroph differentiation.",
      "FSH-beta and/or LH-beta expression supports the diagnosis, although hormone staining may be focal.",
      "Exclude PIT1 and TPIT lineage with transcription factor panel.",
    ],
    differential: [
      {
        name: "Null cell PitNET",
        distinction:
          "Null cell tumors lack SF1, TPIT, and PIT1 lineage markers; gonadotroph tumors are SF1-positive.",
      },
      {
        name: "Corticotroph PitNET",
        distinction: "TPIT and ACTH support corticotroph lineage.",
      },
      {
        name: "Other PIT1-lineage PitNETs",
        distinction:
          "PIT1 with GH, prolactin, or TSH expression establishes PIT1 lineage.",
      },
    ],
    molecular: [
      "No recurrent molecular test is required; MEN1, MEN4, and other hereditary syndromes may be considered in selected patients.",
    ],
    morphology: [
      "Usually monomorphic cells in diffuse, trabecular, or sinusoidal patterns.",
      "FSH-beta and LH-beta may be focal or variable; alpha-subunit may be present.",
    ],
    ihc: [
      "SF1 is nuclear; GATA3 may be expressed.",
      "Low-molecular-weight keratin patterns are variable.",
    ],
  },
  {
    name: "Null Cell PitNET",
    group: "Other PitNET Categories",
    clinical:
      "Adults; sellar; usually nonfunctioning mass with headache, visual impairment, or hypopituitarism.",
    essential: [
      "PitNET lacking terminal differentiation along PIT1, TPIT, and SF1 lineages.",
      "Exclude lineage-specific PitNETs with a complete transcription factor and hormone panel.",
      "Use the diagnosis only after excluding other sellar neoplasms.",
    ],
    differential: [
      {
        name: "Gonadotroph PitNET",
        distinction:
          "SF1 positivity establishes gonadotroph lineage, even when gonadotropin hormone staining is limited.",
      },
      {
        name: "Immature PIT1-lineage PitNET",
        distinction:
          "PIT1 is positive despite limited hormone differentiation.",
      },
      {
        name: "Metastatic neuroendocrine neoplasm",
        distinction:
          "Clinical history, imaging, lineage markers, and pituitary-specific transcription factors help establish a primary PitNET.",
      },
      {
        name: "Plurihormonal PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Plurihormonal PitNET are not present.",
      },
      {
        name: "Multiple Synchronous PitNETs of Distinct Lineages",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Multiple Synchronous PitNETs of Distinct Lineages are not present.",
      },
    ],
    molecular: [
      "No defining molecular alteration; selected cases may show loss of menin or p27 prompting germline evaluation.",
    ],
    morphology: [
      "Neuroendocrine morphology with diffuse or nested growth may resemble other PitNETs.",
      "PIT1, TPIT, and SF1 are negative in tumor nuclei.",
    ],
    ihc: [
      "Pituitary hormones are negative; neuroendocrine markers and keratins support PitNET phenotype.",
      "Ki-67 and mitotic activity should be documented but do not independently define grade.",
    ],
  },
  {
    name: "Plurihormonal PitNET",
    group: "Other PitNET Categories",
    clinical:
      "Adults; sellar; variable hormone excess or mass effect depending on the lineages represented.",
    essential: [
      "Demonstrate adenohypophysial hormones and transcription factors from at least two distinct pituitary cell lineages.",
      "Use lineage transcription factors to distinguish true plurihormonal differentiation from nonspecific hormone staining.",
      "Exclude multiple separate PitNET components.",
    ],
    differential: [
      {
        name: "Mature plurihormonal PIT1-lineage PitNET",
        distinction:
          "Restricted to PIT1 lineage; broad hormone expression within PIT1 lineage does not establish cross-lineage plurihormonality.",
      },
      {
        name: "Multiple synchronous PitNETs of distinct lineages",
        distinction:
          "Separate tumor nodules/components with distinct lineage profiles indicate multiple PitNETs rather than one plurihormonal tumor.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Two distinct PIT1-lineage cell populations do not by themselves constitute cross-lineage plurihormonal tumor.",
      },
      {
        name: "Null Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Null Cell PitNET are not present.",
      },
      {
        name: "Multiple Synchronous PitNETs of Distinct Lineages",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Multiple Synchronous PitNETs of Distinct Lineages; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No diagnostic molecular test is required; consider germline evaluation based on clinical features and family history.",
    ],
    morphology: [
      "Morphology resembles the individual lineage components represented.",
      "Coexpression of PIT1 and SF1, with corresponding hormones, is a recognized pattern; rare tumors express all three lineage factors.",
    ],
    ihc: [
      "Hormone immunoreactivity may vary; interpret with transcription factor profile.",
    ],
  },
  {
    name: "Multiple Synchronous PitNETs of Distinct Lineages",
    group: "Other PitNET Categories",
    clinical:
      "Adults; sellar; variable endocrine syndromes or nonfunctioning mass effect.",
    essential: [
      "Identify at least two distinct PitNET components belonging to different lineages (PIT1, SF1, TPIT), or a lineage-specific PitNET combined with a null cell tumor.",
      "Demonstrate distinct components by morphology and lineage-specific transcription factor staining.",
      "Subtype each component independently.",
    ],
    differential: [
      {
        name: "Plurihormonal PitNET",
        distinction:
          "A single tumor showing cross-lineage transcription factor/hormone expression is plurihormonal; multiple tumors show spatially distinct components.",
      },
      {
        name: "Mixed somatotroph-lactotroph PitNET",
        distinction:
          "Both components belong to PIT1 lineage and represent distinct hormone cell populations, not distinct major lineages.",
      },
      {
        name: "Collision tumor with non-PitNET sellar neoplasm",
        distinction:
          "Use morphology and lineage markers to identify a separate non-PitNET component.",
      },
      {
        name: "Null Cell PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Null Cell PitNET are not present.",
      },
    ],
    molecular: [
      "No molecular test is required; consider germline testing in young patients, familial cases, or syndromic presentations.",
    ],
    morphology: [
      "Separate nodules or spatially distinct components may be white to yellow and soft.",
      "Each component has morphology and immunophenotype of its respective PitNET subtype.",
    ],
    ihc: [
      "PIT1, SF1, and TPIT are essential to establish distinct lineages; hormone staining alone can misclassify components.",
      "Ki-67 may vary between components.",
    ],
  },
  {
    name: "Metastatic PitNET",
    group: "Metastatic PitNETs",
    clinical:
      "Any adult age; primary usually sellar; cervical lymph nodes, liver, bone, or craniospinal axis; endocrine syndrome may precede metastasis by years.",
    essential: [
      "A PitNET with discontinuous CNS spread or metastasis to lymph nodes or distant organs.",
      "Local invasion into cavernous sinus, bone, or adjacent structures alone does not qualify as metastatic disease.",
      "Retain the specific PitNET subtype in the diagnosis (e.g., metastatic corticotroph PitNET).",
    ],
    differential: [
      {
        name: "Locally invasive PitNET",
        distinction:
          "Contiguous extension into cavernous sinus, bone, or sinonasal tissue is local invasion, not metastasis.",
      },
      {
        name: "Metastatic neuroendocrine tumor from another site",
        distinction:
          "Compare morphology and immunophenotype with the sellar primary and correlate with clinical history.",
      },
      {
        name: "Primary high-grade neuroendocrine carcinoma",
        distinction:
          "A poorly differentiated phenotype is not the defining criterion; metastatic PitNET is defined by metastatic spread.",
      },
    ],
    molecular: [
      "No molecular marker reliably predicts metastatic behavior; molecular testing is not required for the diagnosis.",
    ],
    morphology: [
      "Metastatic deposits recapitulate the morphology and immunophenotype of the primary PitNET, although progression-related changes may occur.",
      "Lineage transcription factors and pituitary hormones help confirm the tumor phenotype.",
    ],
    ihc: [
      "Ki-67 and mitotic activity may be variable and cannot reliably predict metastasis in isolation.",
    ],
  },
  {
    name: "Adamantinomatous Craniopharyngioma",
    group: "Craniopharyngiomas",
    clinical:
      "Bimodal age distribution in children and adults; sellar/suprasellar; visual impairment, headache, hypothalamic dysfunction, and endocrine deficits.",
    essential: [
      "Craniopharyngioma with adamantinomatous morphology.",
      "Identify peripheral palisading, stellate reticulum-like epithelium, and characteristic wet keratin.",
      "Nuclear beta-catenin in epithelial clusters supports the diagnosis.",
    ],
    differential: [
      {
        name: "Papillary craniopharyngioma",
        distinction:
          "Lacks wet keratin and stellate reticulum; papillary squamous epithelium and BRAF V600E favor papillary type.",
      },
      {
        name: "Rathke cleft cyst",
        distinction:
          "Cyst lining is usually bland ciliated or cuboidal epithelium without invasive epithelial nests or wet keratin.",
      },
      {
        name: "Pituitary blastoma",
        distinction:
          "Occurs in very young children and has primitive mixed neuroendocrine and epithelial components.",
      },
      {
        name: "Papillary Craniopharyngioma",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Papillary Craniopharyngioma; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "CTNNB1 activating mutations drive nuclear beta-catenin accumulation.",
    ],
    morphology: [
      "Epithelial nests and cords with peripheral palisading and loose stellate reticulum-like areas.",
      "Wet keratin, calcification, cholesterol clefts, and cyst formation are common.",
    ],
    ihc: [
      "Nuclear beta-catenin highlights clusters of tumor cells; broad-spectrum keratin is positive.",
      "Inflammation and foreign-body giant cells may surround keratin debris.",
    ],
  },
  {
    name: "Papillary Craniopharyngioma",
    group: "Craniopharyngiomas",
    clinical:
      "Almost exclusively adults; sellar/suprasellar; visual symptoms, headache, and endocrine or hypothalamic dysfunction.",
    essential: [
      "Craniopharyngioma with papillary squamous architecture.",
      "Tumor consists of nonkeratinizing squamous epithelium covering fibrovascular cores.",
      "BRAF V600E mutation or VE1 immunoreactivity supports the diagnosis.",
    ],
    differential: [
      {
        name: "Adamantinomatous craniopharyngioma",
        distinction:
          "Shows wet keratin, calcification, peripheral palisading, and nuclear beta-catenin.",
      },
      {
        name: "Squamous metaplasia of Rathke cleft cyst",
        distinction:
          "Usually bland, cyst-lining metaplasia without complex papillary tumor architecture or BRAF V600E.",
      },
      {
        name: "Metastatic papillary squamous carcinoma",
        distinction:
          "Correlate with clinical history and imaging; a sellar-centered primary lesion and BRAF V600E support papillary craniopharyngioma.",
      },
      {
        name: "Adamantinomatous Craniopharyngioma",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Adamantinomatous Craniopharyngioma; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "BRAF p.V600E is characteristic and may be detected by VE1 immunohistochemistry.",
    ],
    morphology: [
      "Well-differentiated nonkeratinizing squamous epithelium forms papillae with fibrovascular cores.",
      "Peripheral palisading, stellate reticulum, and wet keratin are absent.",
    ],
    ihc: [
      "Tumor cells express broad-spectrum cytokeratins and often CK5/6/p63.",
      "VE1 immunohistochemistry may demonstrate BRAF V600E.",
    ],
  },
  {
    name: "Pituitary Blastoma",
    group: "Other Anterior Pituitary Tumors",
    clinical:
      "Infants and very young children; sellar/suprasellar; Cushing syndrome or mass effect; consider DICER1 syndrome.",
    essential: [
      "Primitive sellar tumor with a mixture of adenohypophysial neuroendocrine cells, primitive Rathke cleft-like cells, and primitive folliculostellate cells.",
      "Recognize the characteristic mixed primitive components in the appropriate pediatric setting.",
      "Evaluate for DICER1-associated disease.",
    ],
    differential: [
      {
        name: "Adamantinomatous craniopharyngioma",
        distinction:
          "Shows mature squamous epithelium, wet keratin, and beta-catenin nuclear clusters rather than a primitive mixed tumor.",
      },
      {
        name: "Papillary craniopharyngioma",
        distinction:
          "Shows mature papillary squamous epithelium and BRAF V600E.",
      },
      {
        name: "Immature PIT1-lineage PitNET",
        distinction:
          "Shows PIT1-lineage neoplastic cells without the characteristic primitive Rathke cleft and folliculostellate admixture.",
      },
    ],
    molecular: [
      "Associated with germline DICER1 pathogenic variants; molecular confirmation supports syndrome evaluation.",
    ],
    morphology: [
      "Primitive small cells and neuroendocrine elements are admixed with Rathke cleft-like epithelial structures and folliculostellate components.",
      "Neuroendocrine markers highlight adenohypophysial elements; cytokeratin highlights epithelial components.",
    ],
    ihc: [
      "The mixed morphology distinguishes the tumor from conventional PitNET and craniopharyngioma.",
    ],
  },
  {
    name: "Pituicytoma",
    group: "Posterior Pituitary and Hypothalamic Tumors",
    clinical:
      "Adults, often middle-aged; posterior pituitary/stalk; headache, visual disturbance, and hypopituitarism or diabetes insipidus.",
    essential: [
      "Well-circumscribed or infiltrative spindle-cell neoplasm of pituicyte lineage.",
      "Show a pituicyte-family immunophenotype and exclude other spindle-cell sellar tumors.",
      "Recognize spindle cell oncocytoma, granular cell tumor, and ependymal-pattern pituicytoma as related subtypes in the pituicytoma spectrum.",
    ],
    differential: [
      {
        name: "Spindle cell oncocytoma",
        distinction:
          "Oncocytic cells with abundant granular eosinophilic cytoplasm and mitochondrial accumulation.",
      },
      {
        name: "Granular cell tumor of sellar region",
        distinction:
          "Large polygonal cells with abundant PAS-positive granular cytoplasm.",
      },
      {
        name: "Meningioma",
        distinction:
          "Whorls, syncytial cells, and EMA/SSTR2A expression favor meningioma; pituicyte tumors typically show TTF1.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Antoni A/B areas and Verocay bodies with diffuse S100/SOX10 favor schwannoma.",
      },
      {
        name: "Gangliocytoma and Mixed Gangliocytoma-PitNET",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Gangliocytoma and Mixed Gangliocytoma-PitNET are not present.",
      },
      {
        name: "Sellar Neurocytoma",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Sellar Neurocytoma are not present.",
      },
    ],
    molecular: [
      "Methylation profiling supports a shared pituicyte-family relationship among pituicytoma subtypes; no routine defining driver mutation is required.",
    ],
    morphology: [
      "Biphasic or fascicular growth of bland spindle cells with delicate vascularity is typical.",
      "Pituicytoma: spindle cells with elongated nuclei and fibrillary cytoplasm.",
    ],
    ihc: [
      "GFAP and S100 are commonly positive; TTF1 is a useful nuclear marker of pituicyte lineage.",
      "Subtype-specific oncocytic, granular, or ependymal morphology may be present.",
    ],
  },
  {
    name: "Gangliocytoma and Mixed Gangliocytoma-PitNET",
    group: "Posterior Pituitary and Hypothalamic Tumors",
    clinical:
      "Adults; sellar/hypothalamic; headache, visual symptoms, endocrine dysfunction; may cause acromegaly through hypothalamic hormone secretion.",
    essential: [
      "Mature ganglion cells in a sellar or hypothalamic neuronal neoplasm, with or without an associated PitNET.",
      "Identify mature dysplastic ganglion cells and assess carefully for an associated PitNET component.",
      "If a PitNET is present, classify its lineage independently.",
    ],
    differential: [
      {
        name: "Sellar neurocytoma",
        distinction:
          "Composed of relatively uniform small neuronal cells rather than large mature ganglion cells.",
      },
      {
        name: "PitNET",
        distinction:
          "A pure PitNET lacks mature ganglion cells; search for a mixed component.",
      },
      {
        name: "Pituicytoma",
        distinction:
          "Spindle-cell glial morphology and TTF1 support pituicyte lineage.",
      },
      {
        name: "Sellar Neurocytoma",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Sellar Neurocytoma; the current lesion lacks that defining combination.",
      },
    ],
    molecular: [
      "No defining molecular alteration is required; molecular findings are not routinely diagnostic.",
    ],
    morphology: [
      "Large mature ganglion cells with abundant cytoplasm, vesicular nuclei, and prominent nucleoli occur singly or in clusters.",
      "Neuronal processes and neuropil may be present.",
    ],
    ihc: [
      "Ganglion cells express neuronal markers such as synaptophysin and neurofilament.",
      "An associated PitNET shows neuroendocrine markers, pituitary hormones, and lineage transcription factors.",
    ],
  },
  {
    name: "Sellar Neurocytoma",
    group: "Posterior Pituitary and Hypothalamic Tumors",
    clinical:
      "Usually adults; hypothalamic/sellar region; visual, endocrine, and hypothalamic symptoms; may be hormonally active.",
    essential: [
      "Neuronal neoplasm of hypothalamic differentiation in the sellar region.",
      "Show neuronal differentiation and exclude gangliocytoma and neuroendocrine PitNET.",
      "Correlate with clinical hormone excess when present.",
    ],
    differential: [
      {
        name: "Gangliocytoma",
        distinction:
          "Shows large mature ganglion cells rather than a monotonous population of small neuronal cells.",
      },
      {
        name: "PitNET",
        distinction:
          "PitNET expresses pituitary lineage transcription factors and often pituitary hormones.",
      },
      {
        name: "Pituicytoma",
        distinction:
          "Shows spindle-cell glial morphology and TTF1 rather than neuronal differentiation.",
      },
      {
        name: "Gangliocytoma and Mixed Gangliocytoma-PitNET",
        distinction:
          "Distinguish by the defining lineage, hormone profile, architecture, and cytologic differentiation of Gangliocytoma and Mixed Gangliocytoma-PitNET; the current lesion lacks that defining combination.",
      },
    ],
    molecular: ["No routine defining molecular alteration is established."],
    morphology: [
      "Uniform round cells with finely stippled chromatin in sheets, nests, or neuropil-rich areas.",
      "Neuropil and neuronal processes may be conspicuous.",
    ],
    ihc: [
      "Synaptophysin and other neuronal markers are positive; pituitary lineage transcription factors help exclude PitNET.",
      "Ki-67 is generally low in conventional examples.",
    ],
  },
  {
    name: "Meningioma",
    group: "Other Sellar Neoplasms",
    clinical:
      "Adults, more often women; tuberculum sellae, diaphragma sellae, or parasellar region; visual loss, headache, or cranial neuropathy.",
    essential: [
      "Meningothelial neoplasm centered on the sellar/parasellar meninges.",
      "Establish meningothelial morphology and immunophenotype.",
      "Distinguish a primary sellar meningioma from a PitNET or pituicyte-family tumor.",
    ],
    differential: [
      {
        name: "PitNET",
        distinction:
          "PitNET shows neuroendocrine differentiation and PIT1, TPIT, or SF1 lineage markers.",
      },
      {
        name: "Pituicytoma",
        distinction:
          "TTF1-positive spindle-cell tumor favors pituicyte lineage.",
      },
      {
        name: "Schwannoma",
        distinction:
          "Antoni A/B pattern, Verocay bodies, and diffuse SOX10 favor schwannoma.",
      },
      {
        name: "Chordoma",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Chordoma are not present.",
      },
    ],
    molecular: [
      "NF2 alterations are common in meningiomas; molecular profiling is used for selected classification and risk assessment, not required for routine diagnosis.",
    ],
    morphology: [
      "Syncytial nests, whorls, and meningothelial cells with intranuclear pseudoinclusions may be present.",
      "Psammoma bodies may occur depending on subtype.",
    ],
    ihc: [
      "EMA and SSTR2A are commonly positive; progesterone receptor may be expressed.",
      "SOX10 and pituitary lineage transcription factors are generally negative.",
    ],
  },
  {
    name: "Chordoma",
    group: "Other Sellar Neoplasms",
    clinical:
      "Adults; clivus with possible sellar extension; headache, diplopia, cranial neuropathies, and destructive skull-base mass.",
    essential: [
      "Midline notochordal neoplasm with characteristic physaliphorous cells in myxoid stroma.",
      "Demonstrate nuclear brachyury with epithelial marker expression.",
      "Correlate with clival-centered destructive imaging.",
    ],
    differential: [
      {
        name: "Chondrosarcoma",
        distinction:
          "Usually lacks broad-spectrum cytokeratin and nuclear brachyury; chondroid matrix and cartilage morphology favor chondrosarcoma.",
      },
      {
        name: "Metastatic carcinoma",
        distinction:
          "Clinical history and broad panel; nuclear brachyury supports chordoma.",
      },
      {
        name: "PitNET",
        distinction:
          "Usually sellar-centered and lineage-marker positive; chordoma is clival-centered and brachyury-positive.",
      },
      {
        name: "Meningioma",
        distinction:
          "Compare lineage transcription factors, hormone profile, cytologic differentiation, and whether the tumor represents a single population or distinct components; the defining features of Meningioma are not present.",
      },
    ],
    molecular: [
      "Loss of SMARCB1/INI1 may occur in poorly differentiated chordoma; brachyury expression is a key diagnostic marker.",
    ],
    morphology: [
      "Lobules and cords of physaliphorous cells with bubbly/vacuolated cytoplasm in abundant myxoid matrix.",
      "Conventional, chondroid, and dedifferentiated patterns may occur.",
    ],
    ihc: [
      "Cytokeratin, EMA, and nuclear brachyury are typically positive.",
      "S100 may be positive, particularly in conventional/chondroid areas.",
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-5">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function PituitaryTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Somatotroph PitNET",
    "Corticotroph PitNET",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter(
      (e) =>
        (group === "All" || e.group === group) &&
        (!q ||
          [
            e.name,
            e.group,
            e.clinical,
            ...e.essential,
            ...e.morphology,
            ...e.ihc,
            ...e.differential.flatMap((d) => [d.name, d.distinction]),
            ...e.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [query, group]);

  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Endocrine System
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Pituitary and Sellar Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A morphology-first diagnostic reference to pituitary neuroendocrine
          tumors, craniopharyngiomas, posterior pituitary and hypothalamic
          neoplasms, and other primary sellar tumors. Emphasis is placed on
          lineage assignment, essential diagnostic criteria, immunophenotype,
          and practical differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the tumor family",
              "Separate anterior pituitary PitNETs from craniopharyngioma, pituicyte-family tumors, neuronal tumors, meningioma, and chordoma.",
            ],
            [
              "2. Assign PitNET lineage",
              "Use PIT1, TPIT, and SF1 transcription factors together with pituitary hormones. Hormone stains alone may be misleading.",
            ],
            [
              "3. Subtype the PitNET",
              "Within PIT1 lineage, distinguish somatotroph, lactotroph, thyrotroph, mammosomatotroph, mixed, mature plurihormonal, immature, and acidophil stem cell tumors.",
            ],
            [
              "4. Assess the sellar mimics",
              "Use morphology-directed panels: beta-catenin for adamantinomatous craniopharyngioma, BRAF V600E for papillary craniopharyngioma, TTF1 for pituicyte lineage, and brachyury for chordoma.",
            ],
            [
              "5. Interpret behavior correctly",
              "Local invasion does not equal metastasis. A metastatic PitNET requires discontinuous CNS spread or lymph node/distant metastasis.",
            ],
            [
              "6. Document proliferation and extent",
              "Record mitotic activity and Ki-67, while recognizing that no universally accepted PitNET grading system is established. Correlate invasion with imaging and operative findings.",
            ],
          ].map(([heading, detail]) => (
            <li
              key={heading}
              className="rounded-xl border border-teal-100 bg-white p-3"
            >
              <div className="font-semibold text-slate-900">{heading}</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Critical principle:</strong> Accurate PitNET classification
          requires transcription factor-based lineage assignment (PIT1, TPIT,
          and SF1) integrated with hormone immunohistochemistry and morphology.
          No single marker or proliferation index reliably predicts metastatic
          behavior.
        </div>
      </section>

      <section className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search diagnosis, lineage, morphology, IHC, or molecular marker..."
          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
        />
        <select
          value={group}
          onChange={(event) => setGroup(event.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600"
          aria-label="Filter by diagnostic group"
        >
          {groups.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? [] : filtered.map((e) => e.name))}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </section>

      <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
        <span>
          {filtered.length} of {entities.length} entities
        </span>
        <span>Choose a diagnosis to view the diagnostic profile</span>
      </div>

      <section className="space-y-4">
        {filtered.map((entity) => {
          const expanded = open.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(entity.name)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
              >
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-[.16em] text-teal-700">
                    {entity.group}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-slate-950">
                    {entity.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clinical}
                  </p>
                </div>
                <span className="shrink-0 text-xl text-slate-400">
                  {expanded ? "−" : "+"}
                </span>
              </button>
              {expanded && (
                <div className="border-t border-slate-200 px-5 pb-6">
                  <Section title="Clinical Profile">
                    <BulletList items={[entity.clinical]} />
                  </Section>
                  <Section title="Essential Diagnostic Criteria">
                    <BulletList items={entity.essential} />
                  </Section>
                  <Section title="Histopathology and Immunophenotype">
                    <div className="grid gap-5 lg:grid-cols-2">
                      <div>
                        <h5 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                          Histopathology
                        </h5>
                        <BulletList items={entity.morphology} />
                      </div>
                      <div>
                        <h5 className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                          Immunophenotype
                        </h5>
                        <BulletList items={entity.ihc} />
                      </div>
                    </div>
                  </Section>
                  <Section title="Differential Diagnosis">
                    <div className="space-y-3">
                      {entity.differential.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                        >
                          <div className="font-semibold text-slate-900">
                            {item.name}
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.distinction}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Section>
                  {entity.molecular.length > 0 && (
                    <Section title="Molecular Pathology">
                      <BulletList items={entity.molecular} />
                    </Section>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching diagnoses. Try another search term or diagnostic group.
          </div>
        )}
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-400">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}
