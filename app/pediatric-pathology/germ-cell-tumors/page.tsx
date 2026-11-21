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
    name: "Intratubular Germ Cell Neoplasia (GCNIS)",
    group: "Noninvasive Germ Cell Neoplasia",
    clue: "Atypical OCT4-positive germ cells arranged along the spermatogonial niche of seminiferous tubules.",
    summary:
      "The common precursor of postpubertal type II testicular germ cell tumors.",
    clinical: [
      "Postpubertal males; may be asymptomatic or present with infertility or mild testicular discomfort.",
      "Occurs in the testis; risk is increased with cryptorchidism, gonadal dysgenesis, and a contralateral testicular germ cell tumor.",
    ],
    criteria: [
      "Atypical gonocytes line the basal spermatogonial niche in a characteristic string-of-beads pattern.",
      "Cells have abundant clear cytoplasm and enlarged, angulated nuclei.",
      "Confirm with an appropriate germ cell immunohistochemical panel; morphology alone is insufficient.",
      "Distinguish from delayed-maturing gonocytes in prepubertal testes.",
    ],
    histology: [
      "Large atypical germ cells lie between Sertoli cells along the tubular basement membrane.",
      "Affected tubules may show pagetoid spread and impaired spermatogenesis.",
      "GCNIS may extend into the rete testis along the epithelial-basement membrane interface.",
    ],
    ihc: [
      "Tumor cells express OCT4, PLAP, SOX17, and KIT.",
      "Additional supportive markers include podoplanin, NANOG, AP-2γ, and LIN28A.",
    ],
    differential: [
      {
        name: "Gonadoblastoma",
        distinction:
          "Contains both neoplastic germ cells and sex cord cells with hyaline basement membrane deposits, usually in a dysgenetic gonad.",
      },
      {
        name: "Intratubular seminoma",
        distinction:
          "Shows luminal expansion by cohesive seminoma cells rather than a single basal layer of GCNIS cells.",
      },
    ],
    molecular: [
      "Gain or overrepresentation of chromosome 12p supports progression to invasive type II germ cell tumor; it is not required to diagnose GCNIS.",
    ],
  },
  {
    name: "Gonadoblastoma",
    group: "Noninvasive Germ Cell Neoplasia",
    clue: "Germ cells and immature sex cord cells form nests or cords around hyaline basement membrane material.",
    summary:
      "An in situ germ cell neoplasm arising predominantly in dysgenetic gonads and capable of progression to invasive germ cell tumors.",
    clinical: [
      "Usually presents in neonates or children with a disorder of sex development; occasional delayed presentation occurs in young adults.",
      "Affects gonads; patients may have ambiguous genitalia, primary amenorrhea, an abdominal mass, or an intra-abdominal gonad.",
      "Often associated with Y-chromosome material, including in phenotypic females.",
    ],
    criteria: [
      "Identify nests or cords containing neoplastic germ cells admixed with small sex cord cells.",
      "Hyaline basement membrane deposits, often calcified, are a key architectural feature.",
      "Establish germ cell and sex cord differentiation with immunohistochemistry.",
      "Evaluate the clinical and cytogenetic context for a disorder of sex development.",
    ],
    histology: [
      "Round nests and cords contain large pale germ cells and smaller Sertoli/granulosa-like cells.",
      "Sex cord cells may form peripheral palisades or rosettes around hyaline deposits.",
      "Hyaline material may show laminated calcification or coalesce into mulberry-like structures.",
    ],
    ihc: [
      "Germ cells express OCT4, PLAP, KIT, and podoplanin.",
      "Sex cord cells typically express FOXL2 and inhibin; SOX9 may be weak and calretinin/SF1 may be positive.",
      "Leydig-like cells, when present, express inhibin and calretinin.",
    ],
    differential: [
      {
        name: "Intratubular Germ Cell Neoplasia (GCNIS)",
        distinction:
          "Lacks the characteristic sex cord cell component and hyaline basement membrane deposits.",
      },
      {
        name: "Sertoli cell nodule colonized by GCNIS",
        distinction:
          "Sertoli cells are strongly SOX9-positive and FOXL2-negative, unlike the sex cord component of gonadoblastoma.",
      },
    ],
    molecular: [
      "FISH or cytogenetic testing for Y-chromosome material may support the diagnosis in phenotypic females.",
    ],
  },
  {
    name: "Germinoma / Dysgerminoma / Seminoma",
    group: "Germinoma-Family Tumors",
    clue: "Large uniform germ cells with clear cytoplasm, prominent nucleoli, and a lymphocyte-rich septal pattern.",
    summary:
      "Malignant primordial germ cell tumors with shared morphology and phenotype; termed seminoma in testis, dysgerminoma in ovary, and germinoma at extragonadal sites.",
    clinical: [
      "Germinoma most often affects adolescents, particularly boys, and arises in the pineal or suprasellar region; basal ganglia/thalamus are additional sites.",
      "Seminoma typically affects postpubertal men in the fourth decade and presents as a testicular mass.",
      "Dysgerminoma predominantly affects adolescents and young women and presents as a rapidly enlarging ovarian mass.",
      "Mediastinal tumors usually arise in the anterior mediastinum and may cause chest pain, cough, dyspnea, or superior vena cava syndrome.",
    ],
    criteria: [
      "Identify large, relatively uniform tumor cells with clear to pale cytoplasm and prominent nucleoli.",
      "Tumor cells are arranged in sheets or nests separated by fibrous septa containing lymphocytes.",
      "Use immunohistochemistry to confirm germinoma-family differentiation and exclude nonseminomatous components.",
      "Serum AFP elevation argues against a pure germinoma-family tumor; mild β-hCG elevation may occur with syncytiotrophoblast cells.",
    ],
    histology: [
      "Large polygonal cells have distinct borders, clear or glycogen-rich cytoplasm, and central nuclei.",
      "Fibrous septa with lymphocytes divide the tumor into lobules.",
      "Syncytiotrophoblast cells may be scattered and can produce β-hCG.",
    ],
    ihc: [
      "Tumor cells are typically positive for OCT4, SALL4, KIT, D2-40, and SOX17.",
      "SOX2 is generally negative in conventional seminoma/germinoma-family cells.",
      "Syncytiotrophoblast cells are β-hCG-positive.",
    ],
    differential: [
      {
        name: "Embryonal Carcinoma",
        distinction:
          "Shows more pleomorphism, epithelial/glandular or papillary patterns, and expression of SOX2 and broad-spectrum cytokeratins.",
      },
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Shows reticular, microcystic, glandular, or other yolk sac patterns and is typically AFP/glypican-3 positive.",
      },
      {
        name: "Gonadoblastoma",
        distinction:
          "Contains sex cord cells and hyaline basement membrane deposits in addition to germ cells.",
      },
      {
        name: "Malignant Mixed Germ Cell Tumors",
        distinction:
          "Contain a second malignant or teratomatous component; thorough sampling and serum markers are important.",
      },
    ],
    molecular: [
      "Chromosome 12p gain or i(12p) supports a postpubertal gonadal germ cell tumor when the site or morphology is equivocal.",
      "KIT/RAS pathway alterations may occur; molecular testing is not usually required for routine diagnosis.",
    ],
  },
  {
    name: "Mature Cystic Teratoma",
    group: "Teratomas",
    clue: "Mature somatic tissues from at least two germ layers without immature or malignant germ cell components.",
    summary:
      "A benign teratoma composed exclusively of mature tissues; in the testis, this pattern is classified as prepubertal-type teratoma when appropriate.",
    clinical: [
      "Most commonly arises in the ovary in children and young adults; testicular examples occur predominantly in prepubertal boys.",
      "Usually presents as an adnexal or testicular mass; ovarian lesions may cause pain or torsion.",
    ],
    criteria: [
      "Demonstrate mature tissues representing at least two germ layers.",
      "Exclude immature neuroepithelial tissue and other malignant germ cell tumor components.",
      "In testicular tumors, assess for GCNIS, dysgenetic parenchymal changes, scar, and chromosome 12p abnormalities to distinguish prepubertal- from postpubertal-type teratoma.",
    ],
    histology: [
      "Mature squamous epithelium, skin appendages, cartilage, bone, respiratory or gastrointestinal epithelium, and other mature tissues may be present.",
      "Ovarian lesions are commonly cystic and lined by keratinizing squamous epithelium.",
    ],
    ihc: [
      "Immunohistochemistry is directed by any unusual or suspicious component rather than by a single teratoma-specific profile.",
    ],
    differential: [
      {
        name: "Immature Teratoma (Female Gonadal)",
        distinction:
          "Contains immature neuroepithelial tissue, often as primitive neuroectodermal tubules or rosettes.",
      },
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "Often associated with GCNIS, scarred/dysgenetic testicular parenchyma, and chromosome 12p gain; may show atypia or somatic-type malignancy.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Classification depends on site and absence of a gonadal primary; most pediatric extragonadal lesions are prepubertal-type.",
      },
      {
        name: "Fetus in Fetu",
        distinction:
          "Shows organized axial development and metameric segmentation/vertebral structures rather than disorganized mature tissues.",
      },
      {
        name: "Monodermal Teratomas (Female Gonadal)",
        distinction:
          "Are composed predominantly or exclusively of a specialized single tissue type, such as thyroid or neuroendocrine tissue.",
      },
      {
        name: "Prepubertal-Type Testicular Teratoma",
        distinction:
          "Testicular teratoma in a child without GCNIS, dysgenetic parenchymal changes, or chromosome 12p amplification.",
      },
    ],
    molecular: [
      "Ovarian mature cystic teratomas are generally diploid and lack the chromosome 12p abnormalities characteristic of postpubertal-type testicular teratoma.",
    ],
  },
  {
    name: "Extragonadal Teratoma",
    group: "Teratomas",
    clue: "Teratoma arising outside the gonads, typically along the midline, without evidence of a gonadal primary.",
    summary:
      "An extragonadal teratoma, particularly common in infants and young children, arising along the embryonic midline migration pathway of primordial germ cells.",
    clinical: [
      "Predominantly affects neonates, infants, and young children; sacrococcygeal and mediastinal sites are characteristic.",
      "May present as a palpable mass, respiratory compromise, or an antenatally detected lesion.",
    ],
    criteria: [
      "Confirm a teratoma composed of somatic tissues and document mature versus immature elements.",
      "Exclude a gonadal primary by clinical examination and imaging.",
      "Interpret histology in the context of age and site; malignant germ cell components must be actively sought.",
    ],
    histology: [
      "Mature and/or immature derivatives of multiple germ layers are present.",
      "Immature neuroepithelial tissue may be present, particularly in immature lesions.",
      "Sampling should target solid, hemorrhagic, or necrotic areas to exclude yolk sac tumor or other malignant components.",
    ],
    ihc: [
      "Use component-directed markers when a suspicious focus raises concern for yolk sac tumor, embryonal carcinoma, or another malignant element.",
    ],
    differential: [
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Usually gonadal, particularly ovarian; extragonadal classification requires exclusion of a gonadal primary.",
      },
      {
        name: "Immature Teratoma (Female Gonadal)",
        distinction:
          "Is defined by immature neuroectodermal tissue and occurs in the ovary.",
      },
      {
        name: "Fetus in Fetu",
        distinction:
          "Shows axialization and metameric segmentation with organized organ development.",
      },
      {
        name: "Malignant Mixed Germ Cell Tumors",
        distinction:
          "Contain one or more malignant germ cell components in addition to teratoma.",
      },
      {
        name: "Monodermal Teratomas (Female Gonadal)",
        distinction:
          "Ovarian teratoma composed predominantly or exclusively of a specialized tissue type, including thyroid or neuroendocrine tissue.",
      },
      {
        name: "Prepubertal-Type Testicular Teratoma",
        distinction:
          "Testicular teratoma in a child without GCNIS, dysgenetic parenchymal changes, or chromosome 12p amplification.",
      },
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "Testicular teratoma associated with GCNIS and chromosome 12p gain; mature morphology does not imply benign behavior.",
      },
    ],
    molecular: [
      "No single molecular alteration is required for diagnosis; chromosome 12p assessment may help when a postpubertal-type germ cell tumor is in the differential.",
    ],
  },
  {
    name: "Monodermal Teratomas (Female Gonadal)",
    group: "Teratomas",
    clue: "Ovarian teratoma composed predominantly or exclusively of a specialized tissue type, including thyroid or neuroendocrine tissue.",
    summary:
      "A group including struma ovarii, ovarian carcinoid, neuroectodermal-type tumors, and monodermal cystic teratoma.",
    clinical: [
      "Occurs in the ovary, generally in adolescents and adults; clinical presentation depends on the dominant tissue component.",
      "Struma ovarii may cause symptoms of a pelvic mass and, rarely, thyroid hormone excess; carcinoid may cause hormone-related symptoms.",
    ],
    criteria: [
      "Identify the dominant specialized tissue and determine whether it is benign or shows malignant features.",
      "Struma ovarii consists of thyroid tissue alone or as the predominant component of a dermoid cyst.",
      "Ovarian carcinoid shows characteristic neuroendocrine architecture and cytology.",
      "Neuroectodermal-type tumors require distinction from a primary ovarian or metastatic CNS-type neoplasm.",
    ],
    histology: [
      "Struma ovarii is composed of mature thyroid follicles, sometimes with colloid.",
      "Carcinoid shows insular, trabecular, strumal, or mucinous/goblet cell patterns.",
      "Neuroectodermal-type components may resemble primitive or differentiated CNS tumors.",
      "Monodermal cystic teratoma may be lined by benign keratinizing squamous epithelium or neuroectodermal tissue.",
    ],
    ihc: [
      "Thyroid follicles express thyroglobulin, TTF-1, and PAX8.",
      "Carcinoid expresses synaptophysin, chromogranin, and INSM1.",
      "Use component-specific markers to distinguish primary ovarian neuroectodermal tumors from other neoplasms.",
    ],
    differential: [
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Contains a broader mixture of mature tissues from multiple germ layers rather than a dominant specialized monodermal component.",
      },
      {
        name: "Immature Teratoma (Female Gonadal)",
        distinction:
          "Contains immature neuroepithelial tissue, not simply a mature specialized monodermal component.",
      },
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Shows malignant yolk sac patterns and AFP/glypican-3 expression rather than mature thyroid or neuroendocrine tissue.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Teratoma arising outside the gonads, typically along the midline, without evidence of a gonadal primary.",
      },
      {
        name: "Prepubertal-Type Testicular Teratoma",
        distinction:
          "Testicular teratoma in a child without GCNIS, dysgenetic parenchymal changes, or chromosome 12p amplification.",
      },
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "Testicular teratoma associated with GCNIS and chromosome 12p gain; mature morphology does not imply benign behavior.",
      },
    ],
    molecular: [
      "No recurrent molecular alteration is required for routine classification; test a somatic-type malignant component according to its phenotype.",
    ],
  },
  {
    name: "Immature Teratoma (Female Gonadal)",
    group: "Teratomas",
    clue: "Ovarian teratoma containing immature neuroectodermal tissue, with grading based on the amount of immature neuroepithelium.",
    summary:
      "A malignant-potential ovarian teratoma containing variable amounts of immature and mature tissue.",
    clinical: [
      "Predominantly affects children, adolescents, and young women.",
      "Arises in the ovary and often presents as a rapidly enlarging pelvic or abdominal mass.",
    ],
    criteria: [
      "Identify immature neuroectodermal tissue, typically primitive neuroepithelial tubules or rosettes.",
      "Grade according to the quantity of immature neuroepithelium in the sampled tumor.",
      "Extensively sample solid areas to exclude yolk sac tumor or other malignant germ cell components.",
    ],
    histology: [
      "Immature neuroepithelium forms primitive tubules, rosettes, or cellular ribbons.",
      "Mature tissues from ectoderm, mesoderm, and endoderm are variably admixed.",
      "Immature mesenchymal and other fetal-type tissues may accompany the neuroepithelium.",
    ],
    ihc: [
      "Neuroepithelial components express neural markers such as synaptophysin and other markers according to differentiation.",
      "AFP and glypican-3 positivity should prompt evaluation for an associated yolk sac tumor component.",
    ],
    differential: [
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Contains mature tissues only and lacks immature neuroepithelial elements.",
      },
      {
        name: "Monodermal Teratomas (Female Gonadal)",
        distinction:
          "Contain predominantly mature specialized tissue, such as thyroid or carcinoid, rather than immature neuroepithelium.",
      },
      {
        name: "Embryonal Carcinoma",
        distinction:
          "Shows primitive malignant epithelial cells with OCT4, SOX2, and cytokeratin expression rather than differentiated immature neuroepithelium.",
      },
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Shows yolk sac differentiation, often with reticular/microcystic architecture and AFP/glypican-3 expression.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Teratoma arising outside the gonads, typically along the midline, without evidence of a gonadal primary.",
      },
      {
        name: "Prepubertal-Type Testicular Teratoma",
        distinction:
          "Testicular teratoma in a child without GCNIS, dysgenetic parenchymal changes, or chromosome 12p amplification.",
      },
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "Testicular teratoma associated with GCNIS and chromosome 12p gain; mature morphology does not imply benign behavior.",
      },
    ],
    molecular: [
      "In ovarian immature teratoma, chromosome 12p gain is not the defining feature; assess for molecular evidence of a postpubertal-type germ cell tumor when morphology/site warrants.",
    ],
  },
  {
    name: "Prepubertal-Type Testicular Teratoma",
    group: "Teratomas",
    clue: "Testicular teratoma in a child without GCNIS, dysgenetic parenchymal changes, or chromosome 12p amplification.",
    summary:
      "A distinct testicular teratoma type that is usually benign and biologically unrelated to GCNIS-derived postpubertal-type tumors.",
    clinical: [
      "Occurs predominantly in prepubertal boys, usually as a painless testicular mass.",
      "Typically lacks the clinical and pathologic setting of GCNIS.",
    ],
    criteria: [
      "Identify mature and/or immature teratomatous tissues.",
      "No associated GCNIS or characteristic dysgenetic tubular changes should be present.",
      "No scar or other evidence of a regressed postpubertal-type germ cell tumor should be identified.",
      "Absence of chromosome 12p amplification supports prepubertal-type classification.",
    ],
    histology: [
      "Teratomatous tissues may be mature or show limited immaturity.",
      "Adjacent testicular parenchyma lacks GCNIS and the dysgenetic tubular pattern associated with postpubertal-type tumors.",
    ],
    ihc: [
      "No GCNIS immunophenotype should be identified in adjacent seminiferous tubules.",
      "Use OCT4 and PLAP when GCNIS is suspected.",
    ],
    differential: [
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "Associated with GCNIS, dysgenetic/scarred parenchyma, and chromosome 12p gain; biologically malignant despite mature morphology.",
      },
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Overlaps morphologically; age, testicular background, and molecular findings establish the testicular subtype.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Arises outside the gonad and requires exclusion of a gonadal primary.",
      },
      {
        name: "Monodermal Teratomas (Female Gonadal)",
        distinction:
          "Ovarian teratoma composed predominantly or exclusively of a specialized tissue type, including thyroid or neuroendocrine tissue.",
      },
      {
        name: "Immature Teratoma (Female Gonadal)",
        distinction:
          "Ovarian teratoma containing immature neuroectodermal tissue, with grading based on the amount of immature neuroepithelium.",
      },
    ],
    molecular: [
      "Lacks chromosome 12p amplification, which supports distinction from postpubertal-type teratoma.",
    ],
  },
  {
    name: "Postpubertal-Type Teratoma",
    group: "Teratomas",
    clue: "Testicular teratoma associated with GCNIS and chromosome 12p gain; mature morphology does not imply benign behavior.",
    summary:
      "A GCNIS-derived testicular germ cell tumor composed of somatic-type tissues and classified as a malignant germ cell tumor.",
    clinical: [
      "Occurs in postpubertal and adult men, often as a testicular mass.",
      "May occur as a component of a mixed germ cell tumor and may persist after chemotherapy.",
    ],
    criteria: [
      "Identify teratoma in a postpubertal testis and assess adjacent parenchyma for GCNIS.",
      "Look for dysgenetic tubules, scar, or other evidence of a GCNIS-derived tumor.",
      "Chromosome 12p gain or i(12p) supports postpubertal-type classification.",
      "Search extensively for somatic-type malignancy and other germ cell tumor components.",
    ],
    histology: [
      "Mature somatic tissues may resemble those in a benign teratoma.",
      "Immature tissues and somatic-type malignancies may occur.",
      "Adjacent parenchyma may show GCNIS, tubular dysgenesis, atrophy, or scarring.",
    ],
    ihc: [
      "OCT4 and PLAP highlight associated GCNIS when present.",
      "IHC is directed at any somatic-type malignant component to classify its lineage.",
    ],
    differential: [
      {
        name: "Prepubertal-Type Testicular Teratoma",
        distinction:
          "Lacks GCNIS, dysgenetic parenchymal changes, scar, and chromosome 12p amplification.",
      },
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Mature morphology overlaps, but postpubertal-type testicular teratoma is a malignant GCNIS-derived tumor.",
      },
      {
        name: "Somatic-Type Malignancy Arising in Teratoma",
        distinction:
          "Represents a specific malignant somatic component within the teratoma; classify and report the component separately.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Teratoma arising outside the gonads, typically along the midline, without evidence of a gonadal primary.",
      },
      {
        name: "Monodermal Teratomas (Female Gonadal)",
        distinction:
          "Ovarian teratoma composed predominantly or exclusively of a specialized tissue type, including thyroid or neuroendocrine tissue.",
      },
      {
        name: "Immature Teratoma (Female Gonadal)",
        distinction:
          "Ovarian teratoma containing immature neuroectodermal tissue, with grading based on the amount of immature neuroepithelium.",
      },
    ],
    molecular: [
      "Gain of chromosome 12p or i(12p) is a key molecular feature supporting postpubertal-type teratoma.",
    ],
  },
  {
    name: "Embryonal Carcinoma",
    group: "Nonseminomatous Germ Cell Tumors",
    clue: "Primitive malignant epithelial cells with marked atypia, frequent mitoses, and OCT4/SOX2 expression.",
    summary:
      "A highly malignant, pluripotent germ cell tumor and a defining component of many mixed postpubertal germ cell tumors.",
    clinical: [
      "Usually affects postpubertal adolescent and adult men; most commonly arises in the testis.",
      "Often presents as a testicular mass and may be associated with elevated AFP or β-hCG when mixed with other components.",
    ],
    criteria: [
      "Identify primitive malignant epithelial cells in solid, glandular, papillary, or other patterns.",
      "Tumor cells show marked nuclear atypia, prominent nucleoli, and brisk mitotic activity.",
      "Confirm with OCT4, SOX2, SALL4, and cytokeratin expression.",
      "Exclude seminoma and yolk sac tumor by morphology and immunophenotype.",
    ],
    histology: [
      "Tumor cells form solid sheets, glands, papillae, or alveolar structures.",
      "Cells have scant to moderate cytoplasm, overlapping nuclei, and prominent nucleoli.",
      "Geographic necrosis and brisk mitotic activity are common.",
    ],
    ihc: [
      "Tumor cells express OCT4, SOX2, SALL4, and broad-spectrum cytokeratins.",
      "CD30 is commonly positive, often with membranous/Golgi staining.",
      "SOX17 is generally negative, helping distinguish from seminoma.",
    ],
    differential: [
      {
        name: "Germinoma / Dysgerminoma / Seminoma",
        distinction:
          "Has uniform clear cells, lymphocyte-rich septa, and SOX17 expression; SOX2 and CD30 are typically negative.",
      },
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Shows yolk sac patterns and AFP/glypican-3 expression; OCT4 is negative.",
      },
      {
        name: "Choriocarcinoma (Non-gestational)",
        distinction:
          "Contains cytotrophoblast and syncytiotrophoblast with strong β-hCG expression and extensive hemorrhage.",
      },
      {
        name: "Malignant Mixed Germ Cell Tumors",
        distinction:
          "Contains multiple distinct components; embryonal carcinoma may be one component rather than the entire tumor.",
      },
    ],
    molecular: [
      "Chromosome 12p gain or i(12p) supports a postpubertal-type germ cell tumor.",
      "KIT/RAS pathway alterations may occur but are not specific to embryonal carcinoma.",
    ],
  },
  {
    name: "Yolk Sac Tumor",
    group: "Nonseminomatous Germ Cell Tumors",
    clue: "Variable yolk sac-like patterns with AFP and glypican-3 expression; Schiller-Duval bodies may be present.",
    summary:
      "A malignant germ cell tumor recapitulating extraembryonic yolk sac, allantoic, and mesenchymal structures.",
    clinical: [
      "Common in infants and young children; also occurs in postpubertal patients, particularly as a component of mixed testicular germ cell tumors.",
      "Occurs in gonads and extragonadal midline sites, including sacrococcygeal, mediastinal, and intracranial locations.",
      "Often presents as a rapidly growing mass with elevated serum AFP.",
    ],
    criteria: [
      "Identify epithelioid tumor cells in one or more characteristic patterns, often reticular/microcystic, glandular, papillary, or solid.",
      "Schiller-Duval bodies, hyaline globules, or hepatoid differentiation are supportive but not required.",
      "AFP and glypican-3 expression support the diagnosis; interpret serum AFP in the context of age.",
    ],
    histology: [
      "Reticular/microcystic architecture is common; other patterns include endodermal sinus-like, papillary, glandular, solid, and hepatoid.",
      "Schiller-Duval bodies consist of a central vessel surrounded by tumor cells within a space.",
      "Eosinophilic hyaline globules may be present and can be PAS-positive.",
    ],
    ihc: [
      "Tumor cells express SALL4, glypican-3, AFP, and cytokeratins.",
      "LIN28A is commonly positive.",
      "OCT4 and SOX2 are typically negative.",
    ],
    differential: [
      {
        name: "Embryonal Carcinoma",
        distinction:
          "Shows OCT4, SOX2, CD30, and cytokeratin expression; AFP and glypican-3 are usually negative.",
      },
      {
        name: "Germinoma / Dysgerminoma / Seminoma",
        distinction:
          "Shows OCT4, SOX17, KIT, and D2-40; AFP is not elevated in a pure tumor.",
      },
      {
        name: "Choriocarcinoma (Non-gestational)",
        distinction:
          "Shows biphasic trophoblastic differentiation with syncytiotrophoblasts and strong β-hCG.",
      },
      {
        name: "Malignant Mixed Germ Cell Tumors",
        distinction:
          "May contain a yolk sac tumor component admixed with other malignant or teratomatous elements.",
      },
    ],
    molecular: [
      "Chromosome 12p gain supports a postpubertal-type germ cell tumor in the appropriate setting; it is not specific to yolk sac differentiation.",
    ],
  },
  {
    name: "Fetus in Fetu",
    group: "Developmental and Mixed Lesions",
    clue: "Highly organized fetiform structure with axialization and metameric segmentation/vertebral organization.",
    summary:
      "A rare developmental anomaly in which a parasitic twin is enclosed within the body of its co-twin; it is distinguished from teratoma by organized body plan.",
    clinical: [
      "Usually detected prenatally or in neonates and young children as an intra-abdominal mass.",
      "Most often retroperitoneal/intra-abdominal; rare sites include gonad, sacrum, oropharynx, orbit, and thorax.",
    ],
    criteria: [
      "Demonstrate advanced organoid development with axialization.",
      "Identify metameric segmentation, typically with vertebral organization.",
      "Correlate with imaging and gross examination for recognizable fetal anatomy and a surrounding sac.",
    ],
    histology: [
      "Shows organized, mature organs and tissues, often including bowel and multiple organ systems.",
      "Tissue organization is more advanced and anatomically coordinated than in a conventional teratoma.",
    ],
    ihc: [
      "No specific immunophenotype is diagnostic; ancillary studies are generally not required.",
    ],
    differential: [
      {
        name: "Mature Cystic Teratoma",
        distinction:
          "Contains mature tissues in a disorganized arrangement without axialization or vertebral segmentation.",
      },
      {
        name: "Extragonadal Teratoma",
        distinction:
          "Shows differentiated tissues but lacks the organized fetal body plan and metameric segmentation.",
      },
    ],
    molecular: [
      "Genotypic identity between the host and the fetiform mass supports monozygotic twin origin; this is not routinely required.",
    ],
  },
  {
    name: "Choriocarcinoma (Non-gestational)",
    group: "Nonseminomatous Germ Cell Tumors",
    clue: "Biphasic trophoblastic tumor with cytotrophoblast/intermediate trophoblast and syncytiotrophoblast in a hemorrhagic background.",
    summary:
      "A highly aggressive malignant germ cell tumor showing extraembryonic chorionic differentiation.",
    clinical: [
      "Rare in children except in patients with disorders of sex development; occurs in gonads, mediastinum, and CNS.",
      "Often presents with symptoms of hematogenous metastases, hemorrhage, or a rapidly enlarging mass.",
      "Serum β-hCG is markedly elevated; gynecomastia or thyrotoxicosis may occur.",
    ],
    criteria: [
      "Identify both mononuclear trophoblastic cells and multinucleated syncytiotrophoblasts.",
      "Extensive hemorrhage and necrosis are characteristic.",
      "Confirm trophoblastic differentiation with β-hCG; exclude other germ cell components and gestational origin as clinically appropriate.",
    ],
    histology: [
      "Cytotrophoblasts and intermediate trophoblasts form aggregates capped by syncytiotrophoblasts.",
      "Syncytiotrophoblasts are multinucleated with dense eosinophilic cytoplasm.",
      "Vascular invasion, hemorrhage, and necrosis are common.",
    ],
    ihc: [
      "β-hCG highlights syncytiotrophoblasts; hPL may be positive.",
      "Cytokeratin is positive; GATA3 and p63 may highlight mononuclear trophoblasts.",
      "AFP, OCT4, KIT, and D2-40 are typically negative.",
    ],
    differential: [
      {
        name: "Yolk Sac Tumor",
        distinction:
          "Shows yolk sac architecture and AFP/glypican-3 expression rather than a biphasic trophoblastic pattern.",
      },
      {
        name: "Embryonal Carcinoma",
        distinction:
          "Shows primitive epithelial tumor cells with OCT4, SOX2, CD30, and cytokeratin; lacks the characteristic syncytiotrophoblast-rich pattern.",
      },
      {
        name: "Germinoma / Dysgerminoma / Seminoma",
        distinction:
          "May contain scattered syncytiotrophoblasts but lacks a true biphasic choriocarcinoma pattern and extensive hemorrhagic trophoblastic tumor.",
      },
      {
        name: "Malignant Mixed Germ Cell Tumors",
        distinction:
          "May contain a choriocarcinoma component alongside other germ cell elements; identify and quantify all components.",
      },
    ],
    molecular: [
      "Chromosome 12p gain or i(12p) supports germ cell tumor origin and helps distinguish from non-germ cell poorly differentiated malignancies.",
    ],
  },
  {
    name: "Malignant Mixed Germ Cell Tumors",
    group: "Nonseminomatous Germ Cell Tumors",
    clue: "Two or more distinct germ cell tumor components; classify as nonseminomatous even when a seminoma-like component is present.",
    summary:
      "A malignant germ cell tumor composed of multiple histologic elements, often including embryonal carcinoma, yolk sac tumor, teratoma, seminoma, or choriocarcinoma.",
    clinical: [
      "Occurs in gonads, mediastinum, and CNS; prepubertal cases are rare.",
      "Most common in postpubertal males in gonadal sites; CNS mixed tumors often affect children and adolescents and show male predominance.",
      "Serum AFP and/or β-hCG may be elevated depending on the components.",
    ],
    criteria: [
      "Identify and document every distinct histologic component.",
      "Estimate the percentage of each component, particularly in testicular tumors.",
      "Classify any tumor containing a nonseminomatous component as a nonseminomatous germ cell tumor.",
      "Extensively sample interfaces and hemorrhagic/necrotic areas to avoid missing a small yolk sac or choriocarcinoma component.",
    ],
    histology: [
      "Each component recapitulates the morphology of its corresponding pure tumor.",
      "Embryonal carcinoma and yolk sac tumor are frequently closely admixed.",
      "Distinguish true choriocarcinoma from scattered syncytiotrophoblasts in seminoma.",
    ],
    ihc: [
      "Use component-directed panels: OCT4/SOX2/CD30 for embryonal carcinoma; AFP/glypican-3 for yolk sac tumor; β-hCG for choriocarcinoma; OCT4/SOX17/KIT for seminoma.",
      "Immunohistochemistry can help map and quantify components when morphology is ambiguous.",
    ],
    differential: [
      {
        name: "Germinoma / Dysgerminoma / Seminoma",
        distinction:
          "A pure germinoma-family tumor lacks a second malignant or teratomatous component; any nonseminomatous component changes classification.",
      },
      {
        name: "Embryonal Carcinoma",
        distinction:
          "A pure embryonal carcinoma lacks the additional distinct components required for a mixed tumor.",
      },
      {
        name: "Yolk Sac Tumor",
        distinction:
          "A pure yolk sac tumor lacks other germ cell tumor components; search carefully for an associated embryonal carcinoma or teratoma.",
      },
      {
        name: "Choriocarcinoma (Non-gestational)",
        distinction:
          "A pure choriocarcinoma lacks additional germ cell components; identify all components in mixed lesions.",
      },
      {
        name: "Postpubertal-Type Teratoma",
        distinction:
          "A pure teratoma is composed of somatic-type tissues; a mixed tumor contains additional malignant germ cell components.",
      },
    ],
    molecular: [
      "Chromosome 12p gain or i(12p) supports postpubertal-type germ cell tumor origin.",
      "For CNS tumors, molecular findings should be interpreted with the histologic component and site; component-specific testing may be useful in selected cases.",
    ],
  },
];

const overview = [
  {
    name: "Intratubular Germ Cell Neoplasia (GCNIS)",
    group: "Noninvasive",
    clue: "Basal intratubular neoplastic gonocytes",
    key: "OCT4+/SOX17+/PLAP+",
  },
  {
    name: "Gonadoblastoma",
    group: "Noninvasive",
    clue: "Germ cells plus sex cord cells and hyaline deposits",
    key: "DSD context; mixed germ/sex cord phenotype",
  },
  {
    name: "Germinoma / Dysgerminoma / Seminoma",
    group: "Germinoma family",
    clue: "Uniform clear cells with lymphocyte-rich septa",
    key: "OCT4+/SOX17+/KIT+",
  },
  {
    name: "Mature Cystic Teratoma",
    group: "Teratoma",
    clue: "Mature tissues from ≥2 germ layers",
    key: "No immature or malignant component",
  },
  {
    name: "Extragonadal Teratoma",
    group: "Teratoma",
    clue: "Teratoma outside gonads, usually midline",
    key: "Exclude gonadal primary",
  },
  {
    name: "Monodermal Teratomas (Female Gonadal)",
    group: "Teratoma",
    clue: "Dominant specialized tissue, e.g. thyroid or carcinoid",
    key: "Classify dominant component",
  },
  {
    name: "Immature Teratoma (Female Gonadal)",
    group: "Teratoma",
    clue: "Immature neuroepithelial tissue",
    key: "Grade by immature neuroepithelium",
  },
  {
    name: "Prepubertal-Type Testicular Teratoma",
    group: "Teratoma",
    clue: "Childhood testicular teratoma",
    key: "No GCNIS or 12p gain",
  },
  {
    name: "Postpubertal-Type Teratoma",
    group: "Teratoma",
    clue: "GCNIS-derived testicular teratoma",
    key: "12p gain/i(12p) supports",
  },
  {
    name: "Embryonal Carcinoma",
    group: "Nonseminomatous",
    clue: "Primitive malignant epithelial pattern",
    key: "OCT4+/SOX2+/CD30+",
  },
  {
    name: "Yolk Sac Tumor",
    group: "Nonseminomatous",
    clue: "Yolk sac-like architecture",
    key: "AFP+/GPC3+",
  },
  {
    name: "Fetus in Fetu",
    group: "Developmental lesion",
    clue: "Organized fetiform body plan",
    key: "Axialization and vertebral segmentation",
  },
  {
    name: "Choriocarcinoma (Non-gestational)",
    group: "Nonseminomatous",
    clue: "Biphasic trophoblastic tumor",
    key: "β-hCG+; hemorrhagic",
  },
  {
    name: "Malignant Mixed Germ Cell Tumors",
    group: "Mixed nonseminomatous",
    clue: "Two or more distinct germ cell components",
    key: "Identify and quantify each component",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function GermCellTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const text = [
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
          text.includes(query.toLowerCase())
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Germ Cell Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic classification of germ cell neoplasms across gonadal and
          extragonadal sites, integrating developmental lineage, morphology,
          immunophenotype, and diagnostically relevant molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Classification depends on developmental lineage, anatomic setting,
            maturation, and recognition of malignant components.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical pattern</th>
                <th className="px-4 py-3">Key diagnostic point</th>
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
            <strong>
              1. Establish the developmental and anatomic context.
            </strong>{" "}
            Consider patient age, gonadal versus midline extragonadal site, and
            whether a precursor lesion is present.
          </li>
          <li>
            <strong>2. Assess the dominant morphologic pattern.</strong>{" "}
            Separate germinoma-family tumors, teratomas, and nonseminomatous
            components.
          </li>
          <li>
            <strong>3. Identify each tumor component.</strong> In mixed tumors,
            document the percentage and distribution of every component.
          </li>
          <li>
            <strong>
              4. Use a focused immunohistochemical and molecular panel.
            </strong>{" "}
            Use OCT4, SALL4, SOX17/SOX2, AFP, glypican-3, β-hCG, and
            cytokeratins according to morphology; assess chromosome 12p when
            classification requires it.
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
          onClick={() =>
            setExpanded(
              expanded.length === entities.length
                ? []
                : entities.map((e) => e.name),
            )
          }
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
        Diagnostic classification should be integrated with clinical stage,
        imaging, age, and current risk-stratification protocols. Thorough
        sampling is essential, particularly in teratomas and mixed germ cell
        tumors, in which a small malignant component may determine
        classification.
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
