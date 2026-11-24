"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

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
};
const entities: Entity[] = [
  {
    name: "Thyroglossal Duct Cyst",
    group: "Developmental Abnormalities",
    clue: "A midline or near-midline cyst along the thyroglossal tract, usually near the hyoid bone.",
    summary:
      "Congenital remnant cyst; carcinoma is uncommon and is usually papillary thyroid carcinoma.",
    clinical: [
      "Usually presents in children or young adults; can occur at any age.",
      "No strong sex predilection.",
      "Midline anterior neck, most often adjacent to or just below the hyoid bone.",
      "Painless, mobile mass that elevates with swallowing or tongue protrusion; infection may cause tenderness.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Usually a mobile, painless midline infrahyoid mass that moves with swallowing or tongue protrusion.",
      "Cyst is lined by respiratory, squamous, or mixed epithelium; inflammation may denude the lining.",
      "Thyroid follicles are often present in the cyst wall.",
      "Papillary thyroid carcinoma may arise in the cyst wall; assess for an associated orthotopic thyroid primary.",
    ],
    ihc: [
      "No routine IHC is required for an uncomplicated cyst.",
      "For a suspicious epithelial proliferation, thyroglobulin, TTF-1, and PAX8 support thyroid follicular differentiation.",
    ],
    differential: [
      {
        name: "Dermoid or epidermal inclusion cyst",
        distinction:
          "Keratin debris and skin appendages favor a dermoid; a squamous-lined cyst without thyroid follicles may be an epidermal inclusion cyst.",
      },
      {
        name: "Branchial cleft cyst",
        distinction:
          "Typically lateral rather than perihyoidal; lymphoid-rich wall may be present.",
      },
      {
        name: "Metastatic papillary thyroid carcinoma",
        distinction:
          "A cystic lymph node lacks the characteristic thyroglossal tract relationship; search for thyroid primary and nodal architecture.",
      },
      {
        name: "Other Congenital Thyroid Abnormalities",
        distinction:
          "Distinguish by the defining pattern: Includes thyroid dysgenesis (agenesis, hypoplasia, hemiagenesis, ectopic thyroid) and dyshormonogenetic goitre.",
      },
    ],
    molecular: [
      "No routinely useful molecular test is required for a benign cyst.",
    ],
  },
  {
    name: "Other Congenital Thyroid Abnormalities",
    group: "Developmental Abnormalities",
    clue: "A developmental abnormality of thyroid formation, migration, or hormone synthesis.",
    summary:
      "Includes thyroid dysgenesis (agenesis, hypoplasia, hemiagenesis, ectopic thyroid) and dyshormonogenetic goitre.",
    clinical: [
      "Usually identified in neonates, children, or adolescents during evaluation of congenital hypothyroidism; ectopic thyroid may present later.",
      "Thyroid dysgenesis is more common in individuals assigned female at birth.",
      "Ectopic tissue most often occurs at the tongue base; dyshormonogenetic goitre affects the thyroid gland bilaterally.",
      "May cause hypothyroidism; lingual thyroid can produce dysphagia, dyspnea, or airway symptoms.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Ectopic thyroid shows normal thyroid follicles in an abnormal anatomic location, most often at the tongue base.",
      "Agenesis is absence of thyroid follicular tissue; hemiagenesis is absence of one lobe; hypoplasia is reduced gland volume.",
      "Dyshormonogenetic goitre is typically bilateral and multinodular and may show hypercellular, microfollicular nodules with pale colloid and variable random nuclear atypia.",
      "In a lymph node, benign thyroid inclusions require strict anatomic and morphologic criteria: medial to the jugular vein, intracapsular, and cytologically bland.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 confirm thyroid follicular differentiation when tissue identity is uncertain.",
      "IHC does not by itself distinguish benign nodal inclusions from metastatic papillary carcinoma; morphology and location are essential.",
    ],
    differential: [
      {
        name: "Metastatic papillary thyroid carcinoma",
        distinction:
          "Nuclear features of PTC, papillae, psammoma bodies, or a lateral cervical node favor metastasis; bland intracapsular follicles in a medial node may be benign inclusions.",
      },
      {
        name: "Thyroid follicular nodular disease",
        distinction:
          "Occurs in an orthotopic gland and lacks the defining developmental displacement or congenital absence.",
      },
      {
        name: "Thyroglossal duct cyst",
        distinction:
          "A cystic tract remnant near the hyoid, rather than ectopic solid thyroid tissue.",
      },
      {
        name: "Thyroglossal Duct Cyst",
        distinction:
          "Distinguish by the defining pattern: Congenital remnant cyst; carcinoma is uncommon and is usually papillary thyroid carcinoma.",
      },
    ],
    molecular: [
      "Developmental defects may involve NKX2-1, FOXE1, PAX8, HHEX, or TSHR.",
      "Dyshormonogenesis may involve TPO, DUOX2, DUOXA2, SLC5A5, SLC26A4, TG, or IYD.",
    ],
  },
  {
    name: "Thyroid Follicular Nodular Disease",
    group: "Benign Follicular Lesions",
    clue: "Multiple variably sized follicular nodules in a background of nodular thyroid enlargement or nodularity.",
    summary:
      "A benign multifocal proliferation spanning hyperplasia and clonal nodules; multinodular goitre is a clinical term.",
    clinical: [
      "Incidence increases with age and is highest in older adults.",
      "Strong female predominance.",
      "One or both thyroid lobes; may extend retrosternally into the mediastinum.",
      "Often asymptomatic; large nodules may cause dysphagia, dyspnea, hoarseness, or other compressive symptoms.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Nodules show variable macrofollicular, microfollicular, papillary, or mixed architecture.",
      "Large colloid-filled follicles and cystic degeneration are common.",
      "Hemorrhage, fibrosis, calcification, hemosiderin-laden macrophages, and ossification may occur.",
      "Nuclear features of papillary thyroid carcinoma are absent.",
      "A dominant encapsulated nodule may resemble follicular adenoma; evaluate the entire gland and the interface.",
    ],
    ihc: [
      "No routine IHC is needed in morphologically typical disease.",
      "Thyroglobulin, TTF-1, and PAX8 confirm follicular lineage in an unusual lesion.",
    ],
    differential: [
      {
        name: "Follicular thyroid adenoma",
        distinction:
          "A discrete, completely encapsulated neoplasm with uniform architecture and no background multinodular pattern; assess the entire capsule.",
      },
      {
        name: "Follicular thyroid carcinoma",
        distinction:
          "Requires capsular and/or vascular invasion; cytology alone cannot establish carcinoma.",
      },
      {
        name: "Papillary thyroid carcinoma",
        distinction:
          "True PTC nuclear features, particularly diffuse clearing, grooves, and pseudoinclusions, are absent in ordinary nodular disease.",
      },
    ],
    molecular: [
      "Clonal nodules may harbor TSHR, GNAS, EZH1, or other pathway alterations; molecular testing is not required for routine diagnosis.",
    ],
  },
  {
    name: "Follicular Thyroid Adenoma",
    group: "Benign Follicular Neoplasms",
    clue: "A solitary, usually encapsulated follicular neoplasm, most often in adults and more common in women.",
    summary:
      "A benign clonal follicular-cell neoplasm defined by absence of capsular and vascular invasion.",
    clinical: [
      "Usually diagnosed in adults; broad age range.",
      "More common in women.",
      "Usually a solitary intrathyroidal nodule.",
      "Typically presents as an incidental or palpable thyroid nodule; some are hyperfunctioning.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Usually a solitary, well-circumscribed or encapsulated nodule.",
      "Microfollicular, normofollicular, or macrofollicular architecture may be present.",
      "The capsule and entire tumor–thyroid interface must be adequately sampled.",
      "No capsular invasion, vascular invasion, or tumor necrosis is identified.",
      "Papillary-type nuclear features sufficient for PTC are absent.",
    ],
    ihc: [
      "Tumor cells express thyroglobulin, TTF-1, and PAX8.",
      "HBME-1, galectin-3, and CK19 are not sufficiently specific to distinguish adenoma from carcinoma in isolation.",
    ],
    differential: [
      {
        name: "Follicular thyroid carcinoma",
        distinction:
          "Capsular penetration and/or unequivocal vascular invasion establishes carcinoma.",
      },
      {
        name: "Thyroid follicular nodular disease",
        distinction:
          "Often multiple nodules with degenerative change and variable architecture rather than a single discrete clonal neoplasm.",
      },
      {
        name: "NIFTP",
        distinction:
          "Requires papillary-like nuclear features and strict noninvasive criteria; adenoma lacks qualifying PTC-type nuclei.",
      },
      {
        name: "Follicular Adenoma with Papillary Architecture",
        distinction:
          "Distinguish by the defining pattern: A benign adenoma characterized by papillary infoldings into follicular lumina rather than true invasive papillae.",
      },
      {
        name: "Oncocytic Adenoma of the Thyroid Gland",
        distinction:
          "Distinguish by the defining pattern: A benign oncocytic follicular-cell neoplasm without capsular or vascular invasion.",
      },
    ],
    molecular: [
      "RAS-like alterations are common but are not required for diagnosis.",
    ],
  },
  {
    name: "Follicular Adenoma with Papillary Architecture",
    group: "Benign Follicular Neoplasms",
    clue: "A hyperfunctioning or nonfunctioning follicular nodule with intrafollicular papillary structures.",
    summary:
      "A benign adenoma characterized by papillary infoldings into follicular lumina rather than true invasive papillae.",
    clinical: [
      "Usually occurs in middle-aged or older adults.",
      "Female predominance.",
      "Intrathyroidal, often in a background of chronic lymphocytic thyroiditis.",
      "Presents as a solitary thyroid nodule; functional symptoms are uncommon.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Well-circumscribed or encapsulated nodule with follicles containing delicate intraluminal papillary infoldings.",
      "Papillary structures lack the complex branching architecture and fibrovascular cores of conventional PTC.",
      "Nuclear features of PTC are absent.",
      "No capsular or vascular invasion is present.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular differentiation.",
      "No IHC marker independently establishes this benign entity.",
    ],
    differential: [
      {
        name: "Papillary thyroid carcinoma",
        distinction:
          "True papillae with fibrovascular cores and characteristic PTC nuclear features favor PTC.",
      },
      {
        name: "Thyroid follicular nodular disease",
        distinction:
          "Usually shows multifocal nodularity and degenerative changes rather than a discrete circumscribed adenoma.",
      },
      {
        name: "Follicular adenoma",
        distinction:
          "Lacks the characteristic intrafollicular papillary architecture.",
      },
      {
        name: "Follicular Thyroid Adenoma",
        distinction:
          "Distinguish by the defining pattern: A benign clonal follicular-cell neoplasm defined by absence of capsular and vascular invasion.",
      },
      {
        name: "Oncocytic Adenoma of the Thyroid Gland",
        distinction:
          "Distinguish by the defining pattern: A benign oncocytic follicular-cell neoplasm without capsular or vascular invasion.",
      },
    ],
    molecular: [
      "Activating alterations in the cAMP pathway, including GNAS or TSHR, may be present.",
    ],
  },
  {
    name: "Oncocytic Adenoma of the Thyroid Gland",
    group: "Benign Follicular Neoplasms",
    clue: "A circumscribed oncocytic nodule, usually in an adult and often in a background of chronic thyroiditis.",
    summary:
      "A benign oncocytic follicular-cell neoplasm without capsular or vascular invasion.",
    clinical: [
      "A circumscribed oncocytic nodule, usually in an adult and often in a background of chronic thyroiditis.",
      "A benign oncocytic follicular-cell neoplasm without capsular or vascular invasion.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Tumor is composed predominantly or entirely of oncocytic cells with abundant granular eosinophilic cytoplasm.",
      "Architecture may be solid, trabecular, microfollicular, or macrofollicular.",
      "The capsule and tumor–thyroid interface must be extensively sampled.",
      "No capsular or vascular invasion is identified.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular-cell origin.",
      "Mitochondrial-rich oncocytic cytoplasm is a morphologic feature; no single IHC stain separates adenoma from carcinoma.",
    ],
    differential: [
      {
        name: "Oncocytic thyroid carcinoma",
        distinction:
          "Requires unequivocal capsular and/or vascular invasion; extensive sampling is essential.",
      },
      {
        name: "Oncocytic hyperplasia in chronic lymphocytic thyroiditis",
        distinction:
          "Usually multifocal and intermixed with lymphocytic inflammation rather than a discrete encapsulated neoplasm.",
      },
      {
        name: "Follicular thyroid adenoma",
        distinction: "Lacks the predominant oncocytic cytology.",
      },
      {
        name: "Follicular Thyroid Adenoma",
        distinction:
          "Distinguish by the defining pattern: A benign clonal follicular-cell neoplasm defined by absence of capsular and vascular invasion.",
      },
      {
        name: "Follicular Adenoma with Papillary Architecture",
        distinction:
          "Distinguish by the defining pattern: A benign adenoma characterized by papillary infoldings into follicular lumina rather than true invasive papillae.",
      },
    ],
    molecular: [
      "Oncocytic tumors may show mitochondrial DNA alterations and genome haploidization; these findings do not replace invasion assessment.",
    ],
  },
  {
    name: "Non-Invasive Follicular Thyroid Neoplasm with Papillary-Like Nuclear Features (NIFTP)",
    group: "Low-Risk Follicular Neoplasms",
    clue: "An encapsulated or clearly demarcated follicular-patterned lesion with PTC-type nuclei but no invasion.",
    summary:
      "A low-risk neoplasm diagnosed only when strict architectural, nuclear, and exclusion criteria are met.",
    clinical: [
      "Usually diagnosed in adults, often in middle age.",
      "Female predominance, reflecting the epidemiology of thyroid nodules.",
      "Usually a solitary encapsulated thyroid nodule.",
      "Typically detected as a thyroid nodule on imaging or examination.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Completely encapsulated or sharply demarcated, predominantly follicular-patterned tumor.",
      "Papillary-like nuclear features are present, including enlargement, chromatin clearing, grooves, and occasional pseudoinclusions.",
      "True papillae are absent or extremely limited; psammoma bodies and tumor necrosis are absent.",
      "No capsular or vascular invasion is identified after complete examination of the tumor–capsule interface.",
      "Exclude high-grade features and disqualifying patterns; adequate sampling of the entire capsule is mandatory.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 confirm follicular differentiation.",
      "HBME-1, galectin-3, and CK19 may be expressed but are not diagnostic by themselves.",
    ],
    differential: [
      {
        name: "Invasive encapsulated follicular variant of PTC",
        distinction:
          "Shows capsular and/or vascular invasion; NIFTP requires complete absence of invasion.",
      },
      {
        name: "Follicular adenoma",
        distinction: "Lacks qualifying PTC-type nuclear features.",
      },
      {
        name: "Classic papillary thyroid carcinoma",
        distinction:
          "Usually has true papillae, infiltrative growth, or other exclusionary features.",
      },
      {
        name: "Follicular Tumor of Uncertain Malignant Potential (FT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A provisional category for follicular tumors in which invasion cannot be confidently classified as absent or present.",
      },
      {
        name: "Well-Differentiated Tumor of Uncertain Malignant Potential (WDT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk category when papillary-like nuclear features are present but invasion remains uncertain.",
      },
      {
        name: "Hyalinizing Trabecular Tumor",
        distinction:
          "Distinguish by the defining pattern: Usually indolent; invasion or vascular invasion is uncommon but must be assessed.",
      },
    ],
    molecular: [
      "RAS-like mutations, particularly RAS-family alterations, are common; molecular findings are supportive and cannot substitute for strict histologic criteria.",
    ],
  },
  {
    name: "Follicular Tumor of Uncertain Malignant Potential (FT-UMP)",
    group: "Low-Risk Follicular Neoplasms",
    clue: "An encapsulated follicular-patterned tumor with equivocal capsular or vascular invasion.",
    summary:
      "A provisional category for follicular tumors in which invasion cannot be confidently classified as absent or present.",
    clinical: [
      "Usually occurs in middle-aged adults.",
      "Female predominance.",
      "Usually a solitary intrathyroidal nodule.",
      "Often detected during workup of a thyroid nodule; most behave indolently.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Encapsulated follicular-patterned neoplasm with no convincing PTC-type nuclear features.",
      "A focus raises but does not establish capsular invasion or vascular invasion after deeper levels and careful review.",
      "The equivocal focus must be documented and distinguished from artifact, tangential sectioning, or capsular displacement.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular differentiation.",
      "IHC does not resolve equivocal invasion; the diagnosis is primarily morphologic.",
    ],
    differential: [
      {
        name: "Follicular thyroid adenoma",
        distinction: "No suspicious focus of capsular or vascular invasion.",
      },
      {
        name: "Follicular thyroid carcinoma",
        distinction:
          "Unequivocal capsular penetration and/or vascular invasion is present.",
      },
      {
        name: "NIFTP",
        distinction:
          "Requires papillary-like nuclear features and strict absence of invasion.",
      },
      {
        name: "Non-Invasive Follicular Thyroid Neoplasm with Papillary-Like Nuclear Features (NIFTP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk neoplasm diagnosed only when strict architectural, nuclear, and exclusion criteria are met.",
      },
      {
        name: "Well-Differentiated Tumor of Uncertain Malignant Potential (WDT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk category when papillary-like nuclear features are present but invasion remains uncertain.",
      },
      {
        name: "Hyalinizing Trabecular Tumor",
        distinction:
          "Distinguish by the defining pattern: Usually indolent; invasion or vascular invasion is uncommon but must be assessed.",
      },
    ],
    molecular: [
      "No defining molecular alteration; molecular results do not adjudicate equivocal invasion.",
    ],
  },
  {
    name: "Well-Differentiated Tumor of Uncertain Malignant Potential (WDT-UMP)",
    group: "Low-Risk Follicular Neoplasms",
    clue: "An encapsulated follicular-patterned tumor with PTC-like nuclear features and equivocal invasion.",
    summary:
      "A low-risk category when papillary-like nuclear features are present but invasion remains uncertain.",
    clinical: [
      "An encapsulated follicular-patterned tumor with PTC-like nuclear features and equivocal invasion.",
      "A low-risk category when papillary-like nuclear features are present but invasion remains uncertain.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Encapsulated or sharply demarcated follicular-patterned neoplasm with nuclear features of PTC.",
      "Capsular or vascular invasion is suspicious but not unequivocal.",
      "The lesion does not meet strict NIFTP criteria because invasion cannot be excluded.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 confirm follicular differentiation.",
      "IHC cannot replace morphologic evaluation of the capsule and vessels.",
    ],
    differential: [
      {
        name: "NIFTP",
        distinction:
          "No suspicious invasion is present after adequate sampling.",
      },
      {
        name: "Invasive encapsulated follicular variant of PTC",
        distinction:
          "Unequivocal capsular and/or vascular invasion is identified.",
      },
      {
        name: "Follicular adenoma",
        distinction: "Lacks convincing PTC-type nuclear features.",
      },
      {
        name: "Non-Invasive Follicular Thyroid Neoplasm with Papillary-Like Nuclear Features (NIFTP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk neoplasm diagnosed only when strict architectural, nuclear, and exclusion criteria are met.",
      },
      {
        name: "Follicular Tumor of Uncertain Malignant Potential (FT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A provisional category for follicular tumors in which invasion cannot be confidently classified as absent or present.",
      },
      {
        name: "Hyalinizing Trabecular Tumor",
        distinction:
          "Distinguish by the defining pattern: Usually indolent; invasion or vascular invasion is uncommon but must be assessed.",
      },
    ],
    molecular: [
      "RAS-like molecular profiles may occur; no molecular test establishes uncertain invasion.",
    ],
  },
  {
    name: "Hyalinizing Trabecular Tumor",
    group: "Low-Risk Follicular Neoplasms",
    clue: "A trabecular thyroid neoplasm with distinctive intratrabecular hyaline material and PTC-like nuclear changes.",
    summary:
      "Usually indolent; invasion or vascular invasion is uncommon but must be assessed.",
    clinical: [
      "A trabecular thyroid neoplasm with distinctive intratrabecular hyaline material and PTC-like nuclear changes.",
      "Usually indolent; invasion or vascular invasion is uncommon but must be assessed.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Trabeculae and nests of elongated or spindle-shaped cells are separated by abundant hyaline material.",
      "Nuclei may show grooves, clearing, and pseudoinclusions resembling PTC.",
      "Hyaline material is intratrabecular and often surrounds individual tumor cells.",
      "Assess for capsular and vascular invasion; most tumors are circumscribed and noninvasive.",
    ],
    ihc: [
      "Ki-67 (MIB-1) often shows distinctive membranous/cytoplasmic staining, a useful supportive feature.",
      "Thyroglobulin, TTF-1, and PAX8 support follicular lineage.",
      "Calcitonin is negative, helping exclude medullary carcinoma.",
    ],
    differential: [
      {
        name: "Papillary thyroid carcinoma",
        distinction:
          "PTC shows true papillae or follicular architecture with PTC nuclei; HTT has trabecular growth and intratrabecular hyaline.",
      },
      {
        name: "Medullary thyroid carcinoma",
        distinction:
          "Usually calcitonin and neuroendocrine marker positive; HTT is thyroglobulin positive and calcitonin negative.",
      },
      {
        name: "Paraganglioma",
        distinction:
          "Usually lacks thyroglobulin and shows neuroendocrine phenotype with sustentacular cells.",
      },
      {
        name: "Non-Invasive Follicular Thyroid Neoplasm with Papillary-Like Nuclear Features (NIFTP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk neoplasm diagnosed only when strict architectural, nuclear, and exclusion criteria are met.",
      },
      {
        name: "Follicular Tumor of Uncertain Malignant Potential (FT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A provisional category for follicular tumors in which invasion cannot be confidently classified as absent or present.",
      },
      {
        name: "Well-Differentiated Tumor of Uncertain Malignant Potential (WDT-UMP)",
        distinction:
          "Distinguish by the defining pattern: A low-risk category when papillary-like nuclear features are present but invasion remains uncertain.",
      },
    ],
    molecular: ["PAX8-GLIS3 or PAX8-GLIS1 fusions support HTT in a subset."],
  },
  {
    name: "Follicular Thyroid Carcinoma",
    group: "Malignant Follicular-Cell Neoplasms",
    clue: "An adult follicular-cell malignancy, often presenting as a solitary thyroid nodule; hematogenous spread may involve lung and bone.",
    summary:
      "Diagnosis requires capsular and/or vascular invasion; lymph node metastasis is less common than distant hematogenous spread.",
    clinical: [
      "Usually occurs in adults, with incidence increasing with age.",
      "Female predominance.",
      "Thyroid follicular epithelium; may be widely invasive.",
      "Presents as a thyroid nodule; hematogenous metastases may cause bone pain or pulmonary symptoms.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Usually an encapsulated or widely invasive follicular-patterned tumor.",
      "Capsular invasion shows full-thickness penetration through the capsule into adjacent thyroid or soft tissue.",
      "Vascular invasion requires tumor within a capsular or extracapsular vessel, attached to the vessel wall and/or covered by endothelium, often with fibrin.",
      "Classify as minimally invasive, encapsulated angioinvasive, or widely invasive based on extent and pattern of invasion.",
      "Papillary-type nuclear features sufficient for PTC are absent.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular differentiation.",
      "CD31 or ERG can help highlight endothelial lining around suspected vascular invasion but must be interpreted with H&E.",
    ],
    differential: [
      {
        name: "Follicular adenoma",
        distinction:
          "No capsular or vascular invasion after complete capsule sampling.",
      },
      {
        name: "NIFTP",
        distinction: "Shows PTC-like nuclei but is strictly noninvasive.",
      },
      {
        name: "Invasive encapsulated follicular variant of PTC",
        distinction: "Has PTC-type nuclear features plus invasion.",
      },
      {
        name: "Oncocytic carcinoma",
        distinction:
          "Predominantly oncocytic cytology defines a separate entity.",
      },
      {
        name: "Invasive Encapsulated Follicular Variant of Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A RAS-like PTC subtype with capsular and/or vascular invasion.",
      },
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A differentiated follicular-cell carcinoma defined by characteristic nuclear features, often with papillary and/or infiltrative growth.",
      },
      {
        name: "Oncocytic Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: An oncocytic follicular-cell carcinoma defined by capsular and/or vascular invasion or metastasis.",
      },
    ],
    molecular: [
      "RAS-family mutations are common.",
      "TERT promoter mutations are associated with aggressive behavior; assess in clinically advanced disease when relevant.",
    ],
  },
  {
    name: "Invasive Encapsulated Follicular Variant of Papillary Thyroid Carcinoma",
    group: "Malignant Follicular-Cell Neoplasms",
    clue: "An encapsulated follicular-patterned carcinoma with PTC-type nuclei and demonstrable invasion.",
    summary: "A RAS-like PTC subtype with capsular and/or vascular invasion.",
    clinical: [
      "Usually occurs in older adults.",
      "Female predominance.",
      "Thyroid gland; may show local invasion or distant spread.",
      "Presents as a thyroid mass; invasive tumors may metastasize to lung or bone.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Encapsulated or sharply demarcated follicular-patterned tumor.",
      "Nuclear features of PTC are present, including enlargement, clearing, grooves, and pseudoinclusions.",
      "Unequivocal capsular and/or vascular invasion is identified.",
      "Exclude true papillae and other patterns that would reclassify the tumor as another PTC subtype.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular differentiation.",
      "HBME-1, galectin-3, and CK19 may be positive but are not individually specific.",
    ],
    differential: [
      {
        name: "NIFTP",
        distinction: "No capsular or vascular invasion is present.",
      },
      {
        name: "Follicular thyroid carcinoma",
        distinction: "Lacks the qualifying PTC-type nuclear features.",
      },
      {
        name: "Classic papillary thyroid carcinoma",
        distinction:
          "Often infiltrative, papillary, or not fully encapsulated.",
      },
      {
        name: "Follicular Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: Diagnosis requires capsular and/or vascular invasion; lymph node metastasis is less common than distant hematogenous spread.",
      },
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A differentiated follicular-cell carcinoma defined by characteristic nuclear features, often with papillary and/or infiltrative growth.",
      },
      {
        name: "Oncocytic Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: An oncocytic follicular-cell carcinoma defined by capsular and/or vascular invasion or metastasis.",
      },
    ],
    molecular: [
      "RAS-like alterations are frequent; TERT promoter or TP53 alterations may accompany progression.",
    ],
  },
  {
    name: "Papillary Thyroid Carcinoma",
    group: "Malignant Follicular-Cell Neoplasms",
    clue: "Most common thyroid carcinoma; typically affects adults, with female predominance and frequent cervical lymph node presentation.",
    summary:
      "A differentiated follicular-cell carcinoma defined by characteristic nuclear features, often with papillary and/or infiltrative growth.",
    clinical: [
      "Most common thyroid carcinoma; typically affects adults, with female predominance and frequent cervical lymph node presentation.",
      "A differentiated follicular-cell carcinoma defined by characteristic nuclear features, often with papillary and/or infiltrative growth.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "True papillae with fibrovascular cores may be present, but a follicular or solid pattern can occur.",
      "Characteristic nuclei show enlargement, overlap, chromatin clearing, grooves, and intranuclear pseudoinclusions.",
      "Psammoma bodies may be present.",
      "Infiltrative growth, lymphatic invasion, and cervical lymph node metastases are common in classic PTC.",
      "Subtypes include classic, infiltrative follicular, tall cell, columnar cell, hobnail, diffuse sclerosing, solid/trabecular, and oncocytic patterns; assess subtype-specific thresholds and high-grade features.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular-cell origin.",
      "CK19, HBME-1, and galectin-3 are often positive but are not specific.",
      "BRAF VE1 immunostaining can support BRAF p.V600E when validated.",
    ],
    differential: [
      {
        name: "NIFTP",
        distinction:
          "Encapsulated, noninvasive follicular-patterned lesion meeting strict exclusion criteria.",
      },
      {
        name: "Invasive encapsulated follicular variant of PTC",
        distinction:
          "Encapsulated follicular lesion with unequivocal invasion.",
      },
      {
        name: "Follicular thyroid carcinoma",
        distinction:
          "Lacks PTC-type nuclear features and is defined by capsular/vascular invasion.",
      },
      {
        name: "High-grade follicular-cell carcinoma",
        distinction: "Shows tumor necrosis and/or increased mitotic activity.",
      },
      {
        name: "Follicular Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: Diagnosis requires capsular and/or vascular invasion; lymph node metastasis is less common than distant hematogenous spread.",
      },
      {
        name: "Invasive Encapsulated Follicular Variant of Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A RAS-like PTC subtype with capsular and/or vascular invasion.",
      },
      {
        name: "Oncocytic Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: An oncocytic follicular-cell carcinoma defined by capsular and/or vascular invasion or metastasis.",
      },
    ],
    molecular: [
      "BRAF p.V600E is common in classic and several aggressive PTC subtypes.",
      "RET or NTRK fusions occur in a subset.",
      "TERT promoter, TP53, or PIK3CA alterations may accompany progression.",
    ],
  },
  {
    name: "Oncocytic Thyroid Carcinoma",
    group: "Malignant Follicular-Cell Neoplasms",
    clue: "Usually occurs in older adults and presents as a thyroid mass; may be locally invasive or metastasize hematogenously.",
    summary:
      "An oncocytic follicular-cell carcinoma defined by capsular and/or vascular invasion or metastasis.",
    clinical: [
      "Usually occurs in older adults and presents as a thyroid mass; may be locally invasive or metastasize hematogenously.",
      "An oncocytic follicular-cell carcinoma defined by capsular and/or vascular invasion or metastasis.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Predominantly oncocytic tumor cells with abundant granular eosinophilic cytoplasm.",
      "May be minimally invasive, encapsulated angioinvasive, or widely invasive.",
      "Capsular invasion requires full-thickness penetration; vascular invasion must be unequivocal and carefully documented.",
      "High-grade features include tumor necrosis and increased mitotic activity.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 support follicular-cell origin.",
      "Mitochondrial markers may highlight oncocytic differentiation but do not distinguish adenoma from carcinoma.",
    ],
    differential: [
      {
        name: "Oncocytic adenoma",
        distinction: "No capsular or vascular invasion.",
      },
      {
        name: "Oncocytic hyperplasia in chronic thyroiditis",
        distinction: "Usually multifocal and not a discrete invasive neoplasm.",
      },
      {
        name: "Oncocytic PTC",
        distinction:
          "Shows characteristic PTC nuclear features and often BRAF-like molecular profile.",
      },
      {
        name: "Follicular Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: Diagnosis requires capsular and/or vascular invasion; lymph node metastasis is less common than distant hematogenous spread.",
      },
      {
        name: "Invasive Encapsulated Follicular Variant of Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A RAS-like PTC subtype with capsular and/or vascular invasion.",
      },
      {
        name: "Papillary Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A differentiated follicular-cell carcinoma defined by characteristic nuclear features, often with papillary and/or infiltrative growth.",
      },
    ],
    molecular: [
      "Mitochondrial DNA mutations, often affecting complex I genes, and genome haploidization/uniparental disomy are characteristic molecular features.",
      "RAS-like or PTC-associated drivers may coexist depending on tumor phenotype.",
    ],
  },
  {
    name: "High-Grade Follicular Cell-Derived Non-Anaplastic Thyroid Carcinoma",
    group: "High-Grade Follicular-Cell Carcinomas",
    clue: "Usually affects older adults and presents with an invasive thyroid mass; regional or distant metastases may be present.",
    summary:
      "Includes poorly differentiated thyroid carcinoma and differentiated thyroid carcinoma with high-grade features; not anaplastic by definition.",
    clinical: [
      "Usually occurs in older adults than conventional differentiated thyroid carcinoma.",
      "No strong sex-specific pattern is defining.",
      "Thyroid gland, often with extrathyroidal extension.",
      "Presents as an invasive thyroid mass; cervical nodes or distant metastases may be present.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Poorly differentiated thyroid carcinoma often shows solid, trabecular, or insular growth, convoluted nuclei, and loss of conventional differentiation.",
      "High-grade features in differentiated carcinoma are tumor necrosis and/or increased mitotic activity.",
      "The Turin criteria for poorly differentiated carcinoma require solid/trabecular/insular growth, absence of conventional PTC nuclear features, and at least one of convoluted nuclei, mitotic activity, or tumor necrosis.",
      "Document mitotic count and necrosis; distinguish high-grade differentiated carcinoma from anaplastic carcinoma.",
    ],
    ihc: [
      "Thyroglobulin, TTF-1, and PAX8 may be retained, often variably or focally, supporting follicular lineage.",
      "Ki-67 helps characterize proliferation but is not a standalone diagnostic criterion.",
    ],
    differential: [
      {
        name: "Anaplastic thyroid carcinoma",
        distinction:
          "Shows overtly undifferentiated pleomorphic, spindle, or giant-cell morphology and usually loss of thyroid differentiation.",
      },
      {
        name: "Conventional papillary or follicular carcinoma",
        distinction: "Lacks tumor necrosis and/or high mitotic activity.",
      },
      {
        name: "Medullary thyroid carcinoma",
        distinction:
          "Calcitonin and neuroendocrine markers support C-cell lineage.",
      },
      {
        name: "Anaplastic Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: Undifferentiated, highly aggressive follicular-cell carcinoma; diagnosis of exclusion after excluding other high-grade malignancies.",
      },
    ],
    molecular: [
      "TERT promoter, TP53, PIK3CA, and PTEN alterations may accompany progression.",
      "RAS or BRAF p.V600E may reflect the underlying RAS-like or BRAF-like pathway.",
    ],
  },
  {
    name: "Anaplastic Thyroid Carcinoma",
    group: "High-Grade Follicular-Cell Carcinomas",
    clue: "Typically presents in older adults with a rapidly enlarging neck mass, compressive symptoms, and often advanced local disease.",
    summary:
      "Undifferentiated, highly aggressive follicular-cell carcinoma; diagnosis of exclusion after excluding other high-grade malignancies.",
    clinical: [
      "Typically occurs in older adults, often over age 60.",
      "Slight male predominance compared with differentiated thyroid carcinoma.",
      "Rapidly enlarging thyroid mass with frequent invasion of adjacent neck structures.",
      "Rapid neck enlargement, dysphagia, dyspnea, hoarseness, pain, and airway compromise are common.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Markedly pleomorphic, spindle-cell, giant-cell, or squamoid morphology; patterns may be mixed.",
      "Extensive tumor necrosis and brisk mitotic activity are typical.",
      "Infiltrative growth with destructive invasion is common.",
      "A differentiated thyroid carcinoma component or adjacent precursor may be present; extensively sample the tumor.",
      "Primary squamous cell carcinoma of thyroid is classified as a subtype of anaplastic thyroid carcinoma.",
    ],
    ihc: [
      "Broad-spectrum cytokeratin is often positive, sometimes only focally.",
      "PAX8 may be retained in a subset; thyroglobulin and TTF-1 are commonly lost.",
      "BRAF VE1 immunostaining and/or molecular testing should be performed to identify actionable BRAF p.V600E.",
    ],
    differential: [
      {
        name: "High-grade differentiated thyroid carcinoma",
        distinction:
          "Retains recognizable differentiated architecture and follicular lineage features.",
      },
      {
        name: "Primary thyroid lymphoma",
        distinction:
          "CD45 and lineage markers are positive; cytokeratin is usually negative.",
      },
      {
        name: "Metastatic carcinoma",
        distinction: "Clinical history and a directed IHC panel are essential.",
      },
      {
        name: "Primary thyroid angiosarcoma",
        distinction:
          "Demonstrates convincing endothelial differentiation with ERG/CD31 and vasoformative growth.",
      },
      {
        name: "High-Grade Follicular Cell-Derived Non-Anaplastic Thyroid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: Includes poorly differentiated thyroid carcinoma and differentiated thyroid carcinoma with high-grade features; not anaplastic by definition.",
      },
    ],
    molecular: [
      "BRAF p.V600E occurs in a subset and is therapeutically actionable.",
      "TP53 and TERT promoter alterations are common progression events; RAS, PIK3CA, and PTEN alterations may occur.",
    ],
  },
  {
    name: "Medullary Thyroid Carcinoma",
    group: "C-Cell Neoplasms",
    clue: "Can occur at any adult age; hereditary cases present younger and may be multifocal or bilateral.",
    summary:
      "A calcitonin-producing neuroendocrine carcinoma derived from parafollicular C cells.",
    clinical: [
      "Sporadic cases usually occur in adults; hereditary cases present at younger ages.",
      "No strong sex predilection overall.",
      "Thyroid C cells, often in the upper and middle thirds of the lobes.",
      "May present as a thyroid nodule or cervical lymphadenopathy; diarrhea and flushing can occur with advanced disease.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Tumor may show nested, trabecular, spindle-cell, plasmacytoid, or plasmacytoid morphology.",
      "Amphophilic or granular cytoplasm and salt-and-pepper chromatin are typical.",
      "Amyloid derived from calcitonin may be present in the stroma.",
      "C-cell hyperplasia may accompany hereditary disease; assess multifocality and background thyroid.",
    ],
    ihc: [
      "Calcitonin and CEA are usually positive.",
      "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation.",
      "Thyroglobulin is negative; TTF-1 may be positive.",
    ],
    differential: [
      {
        name: "Paraganglioma",
        distinction:
          "Usually keratin-negative and has S100/SOX10-positive sustentacular cells; calcitonin is generally negative.",
      },
      {
        name: "Hyalinizing trabecular tumor",
        distinction:
          "Thyroglobulin positive, calcitonin negative, and shows intratrabecular hyaline.",
      },
      {
        name: "Metastatic neuroendocrine tumor",
        distinction:
          "Correlate with clinical history and use site-directed markers; thyroid C-cell markers support MTC.",
      },
      {
        name: "Mixed medullary and follicular carcinoma",
        distinction:
          "Contains distinct calcitonin-positive and thyroglobulin-positive malignant components.",
      },
    ],
    molecular: [
      "RET mutations are common; RAS mutations occur in a subset.",
      "Germline RET testing is indicated to identify MEN2-associated disease.",
      "High-grade MTC criteria include mitotic count ≥5 per 2 mm², Ki-67 ≥5%, and/or tumor necrosis.",
    ],
  },
  {
    name: "Mixed Medullary and Follicular Cell-Derived Thyroid Carcinoma",
    group: "Mixed-Lineage Carcinomas",
    clue: "Rare; clinical presentation resembles medullary thyroid carcinoma.",
    summary:
      "A single thyroid neoplasm containing both malignant C-cell and follicular-cell components.",
    clinical: [
      "Rare; reported across adulthood.",
      "No established sex predilection.",
      "Thyroid gland.",
      "Usually presents as a thyroid mass or cervical lymphadenopathy.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Two morphologically and immunophenotypically distinct malignant components are present.",
      "The medullary component may show neuroendocrine architecture and amyloid.",
      "The follicular component shows follicular or papillary differentiation; demonstrate that it is malignant rather than entrapped benign follicles.",
    ],
    ihc: [
      "Calcitonin, CEA, synaptophysin, and chromogranin label the medullary component.",
      "Thyroglobulin labels the follicular component.",
      "Use serial sections or double labeling when needed to confirm distinct components.",
    ],
    differential: [
      {
        name: "Medullary thyroid carcinoma with entrapped follicles",
        distinction:
          "Entrapped follicles are benign and lack a separate malignant follicular component.",
      },
      {
        name: "Collision tumor",
        distinction:
          "Separate tumors are juxtaposed without convincing admixture or a unified neoplasm.",
      },
      {
        name: "Papillary thyroid carcinoma",
        distinction: "Lacks a true malignant C-cell component.",
      },
    ],
    molecular: [
      "Molecular testing may demonstrate distinct or shared alterations; interpret by component when possible.",
    ],
  },
  {
    name: "Mucoepidermoid Carcinoma",
    group: "Salivary Gland-Type Carcinomas",
    clue: "Rare thyroid or perithyroidal tumor; occurs in adults and may arise in association with chronic lymphocytic thyroiditis.",
    summary:
      "A salivary gland-type carcinoma composed of mucous, epidermoid, and intermediate cells.",
    clinical: [
      "Rare; usually reported in adults.",
      "No established sex predilection.",
      "Thyroid or immediately perithyroidal soft tissue.",
      "Presents as a thyroid mass; cervical lymph node metastasis may occur.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Mixture of mucous cells, squamoid/epidermoid cells, and intermediate cells.",
      "Cystic and solid growth patterns may be present.",
      "Mucin-producing cells should be confirmed with mucin stains when morphology is subtle.",
      "Grade and extent of invasion vary; high-grade tumors may show necrosis and marked atypia.",
    ],
    ihc: [
      "Pancytokeratin and p63/p40 support epithelial and squamoid differentiation.",
      "Mucicarmine or PAS-D highlights intracellular mucin.",
      "Thyroglobulin is generally negative in tumor cells.",
    ],
    differential: [
      {
        name: "Sclerosing mucoepidermoid carcinoma with eosinophilia",
        distinction:
          "Prominent sclerosis and dense eosinophilic infiltrate are characteristic of the separate thyroid entity.",
      },
      {
        name: "Anaplastic thyroid carcinoma, squamoid subtype",
        distinction:
          "Usually lacks a convincing triphasic mucous/intermediate/epidermoid population.",
      },
      {
        name: "Metastatic salivary mucoepidermoid carcinoma",
        distinction: "Correlate with a salivary primary and imaging.",
      },
      {
        name: "Secretory Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A salivary gland-type carcinoma with secretory differentiation, formerly termed mammary analogue secretory carcinoma.",
      },
    ],
    molecular: [
      "MAML2 rearrangement may be present and supports mucoepidermoid carcinoma in the appropriate setting.",
    ],
  },
  {
    name: "Secretory Carcinoma",
    group: "Salivary Gland-Type Carcinomas",
    clue: "Rare primary thyroid or perithyroidal neoplasm; usually presents as a slowly enlarging mass in adults.",
    summary:
      "A salivary gland-type carcinoma with secretory differentiation, formerly termed mammary analogue secretory carcinoma.",
    clinical: [
      "Rare; usually reported in adults.",
      "No established sex predilection.",
      "Thyroid or perithyroidal soft tissue.",
      "Presents as a slowly enlarging thyroid-region mass; locoregional recurrence or distant metastasis can occur.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Microcystic, tubular, papillary-cystic, or solid architecture.",
      "Cells have abundant eosinophilic or vacuolated cytoplasm and luminal secretions.",
      "Tumor may show infiltrative borders and lymph node or distant metastasis.",
    ],
    ihc: [
      "S100 and mammaglobin are commonly positive.",
      "SOX10 and pan-TRK may be positive.",
      "Thyroglobulin is negative; use a panel to exclude thyroid follicular origin.",
    ],
    differential: [
      {
        name: "Mucoepidermoid carcinoma",
        distinction:
          "Shows mucous, epidermoid, and intermediate cells rather than uniform secretory cells.",
      },
      {
        name: "Metastatic breast secretory carcinoma",
        distinction:
          "Clinical/radiologic correlation is required; the same fusion may occur.",
      },
      {
        name: "Follicular-derived thyroid carcinoma",
        distinction: "Usually expresses thyroglobulin, TTF-1, and PAX8.",
      },
      {
        name: "Mucoepidermoid Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A salivary gland-type carcinoma composed of mucous, epidermoid, and intermediate cells.",
      },
    ],
    molecular: [
      "ETV6::NTRK3 fusion is characteristic and diagnostically useful; confirm with molecular testing when needed.",
    ],
  },
  {
    name: "Sclerosing Mucoepidermoid Carcinoma with Eosinophilia",
    group: "Thyroid Tumors of Uncertain Histogenesis",
    clue: "Usually an adult thyroid mass, often in a background of chronic lymphocytic thyroiditis; female predominance is reported.",
    summary:
      "A distinct thyroid carcinoma with prominent sclerosis and eosinophil-rich inflammation; histogenesis remains uncertain.",
    clinical: [
      "Usually occurs in adults.",
      "Female predominance is reported.",
      "Thyroid gland, often in a background of chronic lymphocytic thyroiditis.",
      "Presents as a thyroid mass, sometimes with cervical lymphadenopathy.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Infiltrative nests, cords, and small groups of squamoid and mucin-producing cells in dense sclerotic stroma.",
      "Prominent eosinophils and lymphoplasmacytic inflammation are characteristic.",
      "Tumor may involve thyroid parenchyma and adjacent soft tissue; lymph node metastases can occur.",
      "Search for a conventional mucoepidermoid carcinoma component but do not assume identical histogenesis.",
    ],
    ihc: [
      "Pancytokeratin and p63/p40 may highlight epithelial/squamoid cells.",
      "Mucicarmine highlights mucin-producing cells.",
      "Thyroglobulin is generally negative in tumor cells.",
    ],
    differential: [
      {
        name: "Mucoepidermoid carcinoma",
        distinction:
          "Lacks the characteristic dense sclerosis and eosinophil-rich inflammatory background.",
      },
      {
        name: "Anaplastic thyroid carcinoma",
        distinction:
          "Usually shows marked pleomorphism, brisk mitoses, and extensive necrosis.",
      },
      {
        name: "Riedel thyroiditis",
        distinction:
          "Fibrosing inflammatory lesion lacks an infiltrative malignant epithelial population.",
      },
    ],
    molecular: ["No defining recurrent molecular alteration is established."],
  },
  {
    name: "Cribriform-Morular Thyroid Carcinoma",
    group: "Distinctive Thyroid Carcinomas",
    clue: "Often affects young women; may be multifocal and can be associated with familial adenomatous polyposis.",
    summary:
      "A distinctive thyroid carcinoma with cribriform and morular architecture and WNT pathway activation.",
    clinical: [
      "Often occurs in young adults.",
      "Marked female predominance.",
      "Usually intrathyroidal; may be multifocal.",
      "Presents as a thyroid nodule; may be the first clue to familial adenomatous polyposis.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Cribriform, solid, trabecular, and morular patterns may coexist.",
      "Tumor cells often have elongated nuclei, nuclear grooves, and squamoid morules.",
      "Colloid is usually scant or absent.",
      "Assess for multifocality and consider clinical evaluation for FAP, particularly in young patients.",
    ],
    ihc: [
      "Nuclear and cytoplasmic beta-catenin staining supports WNT pathway activation.",
      "PAX8 may be positive; thyroglobulin and TTF-1 are often absent or limited.",
      "CD10 and estrogen receptor may be positive in morules.",
    ],
    differential: [
      {
        name: "Papillary thyroid carcinoma",
        distinction:
          "PTC shows follicular differentiation and characteristic papillary architecture; CMTC has morules and nuclear beta-catenin.",
      },
      {
        name: "Metastatic colorectal carcinoma",
        distinction:
          "Clinical history and an IHC panel distinguish; CMTC is a primary thyroid tumor with characteristic morular architecture.",
      },
      {
        name: "Poorly differentiated thyroid carcinoma",
        distinction:
          "Usually lacks the distinctive cribriform-morular pattern and nuclear beta-catenin profile.",
      },
    ],
    molecular: [
      "CTNNB1 mutations or APC pathway alterations activate WNT signaling.",
      "Germline APC alteration should be considered; evaluate for familial adenomatous polyposis.",
    ],
  },
  {
    name: "Thymoma of the Thyroid",
    group: "Intrathyroidal Thymic Neoplasms",
    clue: "Rare; usually an adult thyroid mass, sometimes associated with ectopic thymic tissue.",
    summary:
      "An intrathyroidal thymic epithelial neoplasm resembling conventional thymoma.",
    clinical: [
      "Usually occurs in adults.",
      "No established sex predilection.",
      "Intrathyroidal ectopic thymic tissue.",
      "Presents as a slowly enlarging thyroid mass.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Lobulated tumor with fibrous septa and a lymphocyte-rich background.",
      "Spindle or oval epithelial cells form a network among immature T lymphocytes.",
      "Perivascular spaces and medullary differentiation may be present.",
    ],
    ihc: [
      "Cytokeratin highlights the epithelial network.",
      "Immature T cells express TdT and may express CD1a.",
      "PAX8 (polyclonal) may be positive in thymic epithelial cells; thyroglobulin is negative.",
    ],
    differential: [
      {
        name: "Intrathyroidal thymic carcinoma",
        distinction:
          "Shows overt cytologic atypia, destructive invasion, and carcinoma-like epithelial growth.",
      },
      {
        name: "Spindle epithelial tumor with thymus-like elements",
        distinction:
          "Often has spindle epithelial and glandular/cystic elements with a different architecture.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Lymphoid cells are the neoplastic population and lack a keratin-positive epithelial network.",
      },
      {
        name: "Spindle Epithelial Tumor with Thymus-Like Elements (SETTLE)",
        distinction:
          "Distinguish by the defining pattern: A rare biphasic thymic-like tumor with delayed metastatic potential.",
      },
      {
        name: "Intrathyroidal Thymic Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A thymic epithelial carcinoma arising within the thyroid, distinct from anaplastic thyroid carcinoma.",
      },
    ],
    molecular: ["No defining molecular test is required."],
  },
  {
    name: "Spindle Epithelial Tumor with Thymus-Like Elements (SETTLE)",
    group: "Intrathyroidal Thymic Neoplasms",
    clue: "Usually affects children, adolescents, or young adults and presents as a slowly enlarging thyroid mass.",
    summary:
      "A rare biphasic thymic-like tumor with delayed metastatic potential.",
    clinical: [
      "Usually occurs in adults, often middle-aged.",
      "No established sex predilection.",
      "Intrathyroidal thymic epithelial rests, often in the lower thyroid region.",
      "Presents as a thyroid mass, sometimes with cervical lymphadenopathy or local invasion.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Biphasic architecture with spindle-cell and glandular or cystic epithelial components.",
      "Spindle cells are bland to mildly atypical and may form fascicles.",
      "Glandular structures are lined by epithelial cells; mucin may be present.",
      "Long-term follow-up is important because metastases may occur years after diagnosis.",
    ],
    ihc: [
      "Cytokeratin and EMA highlight epithelial components.",
      "Vimentin may label spindle cells.",
      "Thyroglobulin and calcitonin are negative.",
    ],
    differential: [
      {
        name: "Thymoma",
        distinction:
          "Usually lymphocyte-rich with a network of thymic epithelial cells; SETTLE is spindle-cell predominant and biphasic.",
      },
      {
        name: "Intrathyroidal thymic carcinoma",
        distinction: "Shows overt malignant cytology and destructive invasion.",
      },
      {
        name: "Synovial sarcoma",
        distinction:
          "May show spindle and glandular components; use TLE1 and SS18 rearrangement testing when indicated.",
      },
      {
        name: "Thymoma of the Thyroid",
        distinction:
          "Distinguish by the defining pattern: An intrathyroidal thymic epithelial neoplasm resembling conventional thymoma.",
      },
      {
        name: "Intrathyroidal Thymic Carcinoma",
        distinction:
          "Distinguish by the defining pattern: A thymic epithelial carcinoma arising within the thyroid, distinct from anaplastic thyroid carcinoma.",
      },
    ],
    molecular: [
      "No single molecular alteration is established; SS18 rearrangement testing can help exclude synovial sarcoma.",
    ],
  },
  {
    name: "Intrathyroidal Thymic Carcinoma",
    group: "Intrathyroidal Thymic Neoplasms",
    clue: "Usually occurs in adults as a thyroid mass, often with cervical lymphadenopathy.",
    summary:
      "A thymic epithelial carcinoma arising within the thyroid, distinct from anaplastic thyroid carcinoma.",
    clinical: [
      "Usually occurs in adults as a thyroid mass, often with cervical lymphadenopathy.",
      "A thymic epithelial carcinoma arising within the thyroid, distinct from anaplastic thyroid carcinoma.",
    ],
    criteria: [
      "Establish the anatomic site and clinical/radiologic context.",
      "Assess the defining architecture and cytology described below.",
      "Evaluate the entire tumor interface when invasion is a diagnostic requirement.",
      "Use ancillary studies as a panel and interpret them in conjunction with morphology.",
    ],
    histology: [
      "Infiltrative nests, cords, or sheets of squamoid epithelial cells in fibrous or lymphocyte-rich stroma.",
      "Cytologic atypia and mitotic activity support carcinoma; keratinization may be present.",
      "Assess extrathyroidal extension, vascular invasion, and cervical lymph nodes.",
    ],
    ihc: [
      "Pancytokeratin and p63/p40 support epithelial/squamoid differentiation.",
      "CD5 and CD117 may support thymic differentiation in the appropriate morphology.",
      "Thyroglobulin is negative; PAX8 interpretation depends on antibody clone.",
    ],
    differential: [
      {
        name: "Anaplastic thyroid carcinoma, squamoid subtype",
        distinction:
          "Often shows highly pleomorphic undifferentiated morphology and may retain PAX8; clinical context and thymic markers help.",
      },
      {
        name: "Thymoma",
        distinction:
          "Lacks overt malignant cytology and destructive invasive growth.",
      },
      {
        name: "Metastatic squamous cell carcinoma",
        distinction:
          "Exclude a head and neck or lung primary clinically and radiologically.",
      },
      {
        name: "Thymoma of the Thyroid",
        distinction:
          "Distinguish by the defining pattern: An intrathyroidal thymic epithelial neoplasm resembling conventional thymoma.",
      },
      {
        name: "Spindle Epithelial Tumor with Thymus-Like Elements (SETTLE)",
        distinction:
          "Distinguish by the defining pattern: A rare biphasic thymic-like tumor with delayed metastatic potential.",
      },
    ],
    molecular: [
      "No defining molecular alteration is required; molecular testing is usually exclusionary.",
    ],
  },
  {
    name: "Thyroblastoma",
    group: "Embryonal Thyroid Neoplasms",
    clue: "Extremely rare; may occur in children or adults and presents as a rapidly enlarging thyroid mass.",
    summary:
      "A high-grade embryonal neoplasm with primitive follicular, small-cell, and mesenchymal components.",
    clinical: [
      "Median age is approximately 43 years; reported cases range from adolescence to older adulthood.",
      "Marked female predominance has been reported.",
      "One or both thyroid lobes, often with extension into perithyroidal soft tissue.",
      "Presents as a rapidly enlarging mid-cervical thyroid mass.",
    ],
    criteria: [
      "Primitive thyroid epithelium, a primitive small-cell/blastemal component, and mesenchymal stroma are present.",
      "Conventional thyroid carcinoma and conventional germ cell tumor components are absent.",
      "Primitive thyroid follicles express TTF-1 and PAX8, with focal thyroglobulin expression.",
      "The primitive small-cell component is commonly SALL4 positive but OCT3/4 and PLAP negative.",
      "Rhabdomyoblastic differentiation may be demonstrated by desmin and myogenin in the primitive small-cell or stromal components.",
    ],
    histology: [
      "Triphasic or mixed morphology includes primitive follicular structures, small undifferentiated cells, and mesenchymal stroma.",
      "High-grade cytology, brisk mitotic activity, and necrosis are common.",
      "Extensive sampling is required to identify the heterogeneous components.",
      "Distinguish from teratoma and anaplastic thyroid carcinoma.",
    ],
    ihc: [
      "Thyroglobulin and TTF-1 may highlight primitive follicular components.",
      "Cytokeratin labels epithelial elements; mesenchymal markers label stromal components.",
      "No single immunophenotype is specific; interpret the panel by component.",
    ],
    differential: [
      {
        name: "Anaplastic thyroid carcinoma",
        distinction:
          "Usually lacks the organized embryonal mixture of primitive follicular, small-cell, and mesenchymal elements.",
      },
      {
        name: "Teratoma",
        distinction:
          "Shows mature or immature derivatives of multiple germ layers; thyroblastoma has characteristic primitive thyroid-type components.",
      },
      {
        name: "SETTLE",
        distinction:
          "Usually a more uniform spindle and glandular biphasic tumor with a different clinical course.",
      },
    ],
    molecular: [
      "DICER1 alterations are characteristic; consider germline DICER1 syndrome evaluation.",
    ],
  },
];
const groups = [
  "All",
  ...Array.from(new Set(entities.map((entity) => entity.group))),
];

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-4">
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h4>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function ThyroidTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (entity) =>
          (group === "All" || entity.group === group) &&
          (
            entity.name +
            " " +
            entity.group +
            " " +
            entity.clue +
            " " +
            entity.summary +
            " " +
            entity.clinical.join(" ") +
            " " +
            entity.criteria.join(" ") +
            " " +
            entity.histology.join(" ") +
            " " +
            entity.ihc.join(" ") +
            " " +
            entity.differential
              .map((item) => item.name + " " + item.distinction)
              .join(" ") +
            " " +
            entity.molecular.join(" ")
          )
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const allOpen =
    filtered.length > 0 &&
    filtered.every((entity) => open.includes(entity.name));
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
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Diagnostic Reference</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950">
              Thyroid Tumors
            </h1>
          </div>
        </div>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to developmental lesions,
          follicular-cell neoplasms, C-cell tumors, distinctive thyroid
          carcinomas, and thymic and salivary gland-type neoplasms involving the
          thyroid. Emphasis is placed on defining morphology, invasion,
          immunophenotype, and diagnostically useful molecular findings.
        </p>
      </header>

      <section className="mb-6 rounded-2xl border border-teal-200 bg-teal-50/60 p-4 sm:p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish lineage",
              "Separate follicular-cell, C-cell, thymic, salivary gland-type, embryonal, and metastatic lesions. Use thyroglobulin, TTF-1, PAX8, calcitonin, and morphology as a focused panel.",
            ],
            [
              "2. For follicular-patterned tumors",
              "The capsule and tumor–thyroid interface are decisive. Distinguish benign adenoma, NIFTP, tumors of uncertain malignant potential, and carcinoma by strict assessment of invasion.",
            ],
            [
              "3. Recognize papillary nuclear features",
              "Nuclear enlargement, chromatin clearing, grooves, and pseudoinclusions support PTC; interpret them with architecture and invasion.",
            ],
            [
              "4. Assess grade separately from differentiation",
              "Record mitotic activity and tumor necrosis. High-grade differentiated carcinoma and poorly differentiated carcinoma are distinct from anaplastic carcinoma.",
            ],
            [
              "5. Identify C-cell differentiation",
              "Calcitonin, CEA, and neuroendocrine markers support medullary carcinoma. Evaluate for hereditary RET-associated disease.",
            ],
            [
              "6. Use molecular tests to answer a question",
              "BRAF, RAS, RET/NTRK fusions, TERT, DICER1, APC/CTNNB1, and ETV6::NTRK3 can be diagnostically or therapeutically relevant in selected entities.",
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
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
          <strong>Critical principle:</strong> In follicular-patterned lesions,
          malignancy is established by invasion or metastasis—not by cytologic
          atypia or a positive immunostain alone. Thorough sampling of the
          capsule and tumor interface is essential.
        </p>
      </section>

      <section className="mb-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <PathologySearch />
          <label
            className="mt-3 block text-xs font-semibold uppercase tracking-wide text-slate-500"
            htmlFor="thyroid-search"
          >
            Search entities and diagnostic features
          </label>
          <input
            id="thyroid-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search diagnosis, morphology, IHC, molecular findings..."
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            className="block text-xs font-semibold uppercase tracking-wide text-slate-500"
            htmlFor="thyroid-group"
          >
            Diagnostic category
          </label>
          <select
            id="thyroid-group"
            value={group}
            onChange={(event) => setGroup(event.target.value)}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm"
          >
            {groups.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() =>
              setOpen(allOpen ? [] : filtered.map((entity) => entity.name))
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
      </section>

      <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
        <span>
          {filtered.length} of {entities.length} entities
        </span>
        <span>{groups.length - 1} diagnostic categories</span>
      </div>
      <section className="grid gap-4 lg:grid-cols-2">
        {filtered.map((entity) => {
          const isOpen = open.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(entity.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <div className="min-w-0">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {entity.group}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-950">
                    {entity.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                    {entity.clue}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {entity.summary}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-4 pb-5 sm:px-5">
                  <Section title="Clinical Profile" items={entity.clinical} />
                  <Section
                    title="Essential Diagnostic Criteria"
                    items={entity.criteria}
                  />
                  <Section title="Histopathology" items={entity.histology} />
                  <Section title="Immunophenotype" items={entity.ihc} />
                  <section className="mt-4">
                    <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
                      Differential Diagnosis
                    </h4>
                    <ul className="space-y-2">
                      {entity.differential.map((item, index) => (
                        <li
                          key={index}
                          className="rounded-lg bg-slate-50 p-3 text-sm leading-6"
                        >
                          <strong className="text-slate-900">
                            {item.name}:
                          </strong>{" "}
                          <span className="text-slate-700">
                            {item.distinction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <Section
                    title="Molecular Pathology"
                    items={entity.molecular}
                  />
                </div>
              )}
            </article>
          );
        })}
      </section>
      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
          No matching thyroid entities. Try another term or select a different
          category.
        </div>
      )}
      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-400">
        PathologyGPS · Diagnostic Navigation System
      </footer>
    </main>
  );
}
