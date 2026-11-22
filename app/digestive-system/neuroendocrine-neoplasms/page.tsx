"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  site: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const entities: Entity[] = [
  {
    name: "Esophageal neuroendocrine neoplasms",
    site: "Distal esophagus predominates; NETs favor the distal esophagus, whereas NECs may occur at any level.",
    clinical: [
      "Exceedingly rare; poorly differentiated NECs and MiNENs account for most reported esophageal NENs.",
      "NECs and MiNENs show a marked male predominance and usually occur in the sixth to seventh decades.",
      "Small NETs are often incidental or cause mild symptoms; larger NECs/MiNENs commonly cause dysphagia, pain, weight loss, weakness, or melena.",
      "NETs are usually small (<20 mm), polypoid or nodular submucosal masses; NECs/MiNENs are often bulky, infiltrative, and ulcerated.",
    ],
    criteria: [
      "NET: well-differentiated epithelial neuroendocrine morphology with confirmatory neuroendocrine marker expression; report Ki-67 index and/or mitotic count.",
      "NEC: small-cell or large-cell poorly differentiated carcinoma with neuroendocrine marker expression and high proliferative activity.",
      "MiNEN: two morphologically distinct components, each usually comprising at least 30% of the tumor; confirm neuroendocrine differentiation in the NEN component.",
      "Amphicrine-like carcinoma (ALC): neuroendocrine morphology in at least 30% of tumor cells, confirmed by at least two neuroendocrine markers, without geographically distinct neuroendocrine and non-neuroendocrine zones.",
    ],
    histology: [
      "NET: nested/insular or trabecular architecture; medium-sized cells with granular cytoplasm, round nuclei, and finely stippled chromatin.",
      "NEC: solid sheets, rosettes, or palisades; frequent, often extensive necrosis and brisk mitotic activity.",
      "Small-cell NEC: small-to-medium cells, scant cytoplasm, high nuclear-to-cytoplasmic ratio, nuclear molding, and finely dispersed chromatin.",
      "Large-cell NEC: larger cells with more abundant basophilic cytoplasm, vesicular/ovoid nuclei, and conspicuous nucleoli.",
      "MiNEN: usually NEC admixed with squamous cell carcinoma or adenocarcinoma.",
      "ALC: neuroendocrine and non-neuroendocrine differentiation is evenly distributed or present in the same cells, rather than forming separate zones.",
    ],
    ihc: [
      "Confirm epithelial neuroendocrine differentiation with at least two of chromogranin A, synaptophysin, and INSM1.",
      "Synaptophysin is sensitive but less specific; chromogranin A is more specific but may be weak or absent in high-grade tumors; INSM1 often provides a useful balance.",
      "TTF1 may be positive in esophageal NEC and does not establish pulmonary origin.",
      "Basaloid squamous cell carcinoma typically expresses p40, p63, and CK5/6; p63 can occasionally be positive in NEC.",
    ],
    molecular: [
      "Esophageal NEC commonly shows inactivating TP53 and RB1 alterations.",
      "NOTCH1, FAT1, FBXW7, PDE3A, PTPRM, and CBLN2 alterations have also been reported; these are not routine diagnostic tests.",
    ],
    differential: [
      [
        "Basaloid squamous cell carcinoma",
        "Look for squamous differentiation and p40/CK5/6 expression; neuroendocrine marker expression alone is insufficient.",
      ],
      [
        "SMARCA4-deficient undifferentiated carcinoma",
        "May mimic NEC and show synaptophysin, but chromogranin A and INSM1 are often absent.",
      ],
      [
        "Pulmonary NEC metastatic to esophagus",
        "TTF1 is not reliable for assigning the primary site; integrate clinical and radiologic findings.",
      ],
    ],
    pitfalls: [
      "Do not classify a carcinoma as ALC based only on scattered neuroendocrine-marker-positive cells.",
      "A small biopsy may not represent both components of a MiNEN or establish the evenly intermixed pattern of ALC.",
    ],
  },
  {
    name: "Gastric neuroendocrine neoplasms",
    site: "Stomach; gastric NETs include distinct clinicopathologic types associated with different backgrounds.",
    clinical: [
      "Gastric NETs are commonly detected during endoscopy; clinical context and background mucosa are essential for classification.",
      "Type 1 NETs arise with chronic atrophic gastritis and hypergastrinemia and are often multifocal and small.",
      "Type 2 NETs occur in the setting of gastrinoma/Zollinger–Ellison syndrome, often with MEN1, and may be multifocal.",
      "Type 3 NETs are sporadic, usually solitary, and more often larger and invasive.",
      "Gastric NEC and MiNEN generally present as aggressive masses with symptoms related to local invasion or metastasis.",
    ],
    criteria: [
      "Establish well-differentiated NET versus poorly differentiated NEC by morphology, not by Ki-67 alone.",
      "For gastric NET, document tumor size, depth, multiplicity, lymphovascular invasion, margins, and background mucosal pathology.",
      "Classify gastric NET in the clinical context of autoimmune atrophic gastritis, gastrinoma/MEN1, or sporadic disease.",
      "MiNEN requires morphologically distinct neuroendocrine and non-neuroendocrine components, generally each at least 30%.",
    ],
    histology: [
      "Well-differentiated NETs show organoid nests, trabeculae, or ribbons of uniform cells with granular cytoplasm and stippled chromatin.",
      "Type 1 and type 2 NETs are often multifocal and arise in a background of enterochromaffin-like cell hyperplasia/dysplasia.",
      "Type 3 NETs are more often solitary and may show deeper invasion, larger size, and higher grade.",
      "NEC shows small-cell or large-cell morphology, sheet-like growth, marked atypia, brisk mitoses, and often extensive necrosis.",
      "MiNEN shows distinct neuroendocrine and non-neuroendocrine components; ALC lacks separate morphologic zones.",
    ],
    ihc: [
      "Use chromogranin A, synaptophysin, and INSM1 to confirm neuroendocrine differentiation; at least two positive markers are preferred.",
      "Gastrin and other hormone stains may help in selected functional or syndromic settings.",
      "SSTR2 expression may support a well-differentiated NET phenotype and may have theranostic relevance.",
      "For NEC versus NET G3, abnormal p53 and loss of RB1 support NEC; retain morphology as the primary classifier.",
    ],
    molecular: [
      "For NEC, TP53 and RB1 pathway alterations are characteristic in the broader NEC class; use p53/RB1 IHC as supportive surrogates rather than a stand-alone classifier.",
      "MEN1-associated context is relevant to type 2 gastric NET; routine tumor molecular testing is not required for typical gastric NET classification.",
    ],
    differential: [
      [
        "Gastric adenocarcinoma with focal neuroendocrine marker expression",
        "Requires convincing neuroendocrine morphology; isolated marker-positive cells do not establish NEN.",
      ],
      [
        "Gastric glomus tumor",
        "Usually perivascular architecture and smooth-muscle marker expression rather than epithelial neuroendocrine phenotype.",
      ],
      [
        "Paraganglioma",
        "Typically keratin-negative and shows a sustentacular-cell pattern; see the separate paraganglioma profile.",
      ],
    ],
    pitfalls: [
      "Do not assign gastric NET type from morphology alone; correlate with background mucosa, gastrin status, and clinical setting.",
      "Ki-67 grades NETs but does not distinguish well-differentiated NET G3 from NEC.",
    ],
  },
  {
    name: "Duodenal and ampullary neuroendocrine neoplasms",
    site: "Duodenum, including periampullary region and ampulla of Vater.",
    clinical: [
      "Duodenal NETs may be incidental or present with bleeding, abdominal symptoms, or hormone-related syndromes.",
      "Gastrin-producing duodenal NETs may occur in the setting of Zollinger–Ellison syndrome and MEN1.",
      "Periampullary tumors may cause biliary or pancreatic duct obstruction.",
      "NEC and MiNEN are uncommon and generally present as larger, more aggressive lesions.",
    ],
    criteria: [
      "Confirm epithelial neuroendocrine differentiation and distinguish well-differentiated NET from poorly differentiated NEC morphologically.",
      "Document exact site, size, depth, ampullary involvement, lymphovascular invasion, and regional nodal status.",
      "For MiNEN, identify two distinct morphologic components and estimate their proportions.",
    ],
    histology: [
      "NETs show nested, trabecular, or gland-like organoid growth with uniform cells and stippled chromatin.",
      "Gastrin-producing tumors may show glandular/tubular architecture and may be associated with multifocality in MEN1.",
      "Gangliocytic/neuromatous elements should prompt consideration of composite gangliocytoma/neuroma and neuroendocrine tumor (CoGNET) in the periampullary duodenum.",
      "NEC shows poorly differentiated small-cell or large-cell morphology, brisk mitoses, and necrosis.",
      "MiNEN has separate neuroendocrine and non-neuroendocrine components.",
    ],
    ihc: [
      "Chromogranin A, synaptophysin, and INSM1 support neuroendocrine differentiation; use at least two markers.",
      "Gastrin immunohistochemistry can support a gastrin-producing phenotype in the appropriate clinical setting.",
      "SSTR2 may be useful for characterization and theranostic assessment.",
    ],
    molecular: [
      "MEN1 context is relevant in selected duodenal gastrinomas; molecular testing is not routinely required for diagnosis.",
    ],
    differential: [
      [
        "CoGNET",
        "Triphasic composition with neuroendocrine, ganglion-like, and Schwannian/neuromatous components; classically periampullary.",
      ],
      [
        "Paraganglioma",
        "Keratin-negative neuroendocrine neoplasm with sustentacular cells.",
      ],
      [
        "Conventional adenocarcinoma",
        "Requires gland-forming carcinoma morphology; focal neuroendocrine marker staining alone is insufficient.",
      ],
    ],
    pitfalls: [
      "Do not overlook CoGNET in a periampullary lesion with mixed cell populations.",
      "Small biopsies may undersample a mixed neoplasm.",
    ],
  },
  {
    name: "Jejunal and ileal neuroendocrine neoplasms",
    site: "Small intestine, especially ileum; multifocal primary tumors may occur.",
    clinical: [
      "Small intestinal NETs may be clinically silent or present with abdominal pain, obstruction, or mesenteric fibrosis.",
      "Carcinoid syndrome is more likely with hepatic metastases because vasoactive products can bypass hepatic metabolism.",
      "Multifocality is an important clinical and grossing consideration, particularly for ileal tumors.",
    ],
    criteria: [
      "Identify a well-differentiated epithelial NET and document multifocality, size, depth, mesenteric involvement, and nodal/metastatic disease.",
      "Assess lymphovascular and perineural invasion and the relationship to mesenteric fibrosis.",
      "Grade NET using mitotic count and Ki-67 index; use the higher grade when results are discordant.",
    ],
    histology: [
      "NETs typically show nested, trabecular, or gyriform organoid architecture with uniform cells and finely stippled chromatin.",
      "Desmoplastic stromal reaction may accompany infiltrative ileal tumors and contribute to mesenteric retraction.",
      "NEC is composed of poorly differentiated small or large cells with sheet-like growth, brisk mitoses, and necrosis.",
      "MiNEN requires distinct neuroendocrine and non-neuroendocrine morphologic components.",
    ],
    ihc: [
      "Confirm neuroendocrine differentiation with at least two of chromogranin A, synaptophysin, and INSM1.",
      "Serotonin may be expressed by many intestinal NETs; hormone stains are selected according to morphology and clinical syndrome.",
      "SSTR2 expression is useful in selected diagnostic and theranostic settings.",
    ],
    molecular: [
      "No routine site-specific molecular test is required for conventional small intestinal NET diagnosis.",
      "For NEC, abnormal p53 and loss of RB1 may support poorly differentiated NEC over NET G3.",
    ],
    differential: [
      [
        "Metastatic pancreatic NET",
        "Morphology overlaps; correlate with imaging and clinical history, and use site-directed markers only when indicated.",
      ],
      ["Paraganglioma", "Typically keratin-negative with sustentacular cells."],
      [
        "GIST",
        "Spindle/epithelioid mesenchymal morphology and KIT/DOG1 expression rather than epithelial neuroendocrine differentiation.",
      ],
    ],
    pitfalls: [
      "Carefully examine the entire small bowel when resection is available because multiple primaries may be present.",
      "Do not equate high Ki-67 with NEC without poorly differentiated morphology.",
    ],
  },
  {
    name: "Appendiceal neuroendocrine neoplasms",
    site: "Vermiform appendix, often distal tip.",
    clinical: [
      "Usually discovered incidentally in appendectomy specimens, often in younger patients.",
      "Most appendiceal NETs are small and located at the tip; larger lesions and base involvement require careful assessment.",
      "NEC and MiNEN are rare and behave more aggressively than conventional appendiceal NET.",
    ],
    criteria: [
      "Report tumor size, location, depth of invasion, mesoappendiceal extension, lymphovascular invasion, perineural invasion, margins, and grade.",
      "Distinguish conventional well-differentiated NET from goblet cell adenocarcinoma, which belongs to the amphicrine-like carcinoma spectrum but is classified as a distinct appendiceal adenocarcinoma.",
      "Use morphology to distinguish NET from NEC; Ki-67 alone is not sufficient.",
    ],
    histology: [
      "Conventional NET shows nests, trabeculae, or ribbons of uniform cells with granular cytoplasm and stippled chromatin.",
      "NEC shows poorly differentiated small-cell or large-cell morphology, extensive atypia, brisk mitoses, and necrosis.",
      "MiNEN contains separate neuroendocrine and non-neuroendocrine components.",
      "Goblet cell adenocarcinoma shows infiltrative clusters/tubules of mucin-rich goblet-like cells and is not simply a conventional NET with mucin.",
    ],
    ihc: [
      "Chromogranin A, synaptophysin, and INSM1 confirm neuroendocrine differentiation; at least two positive markers are preferred.",
      "SSTR2 and selected hormone markers may be useful in conventional NETs.",
    ],
    molecular: [
      "No clinically useful routine molecular test is established for conventional appendiceal NET in the supplied source.",
    ],
    differential: [
      [
        "Goblet cell adenocarcinoma",
        "Infiltrative goblet-cell morphology with mucin production; classify as adenocarcinoma rather than conventional appendiceal NET.",
      ],
      [
        "Appendiceal adenocarcinoma",
        "Glandular or mucinous carcinoma morphology without the classic well-differentiated NET pattern.",
      ],
      [
        "NEC",
        "Poorly differentiated cytology, sheet-like growth, necrosis, and brisk mitotic activity.",
      ],
    ],
    pitfalls: [
      "Do not use the term carcinoid.",
      "Do not conflate goblet cell adenocarcinoma with MiNEN solely because it may show neuroendocrine differentiation.",
    ],
  },
  {
    name: "Colorectal neuroendocrine neoplasms",
    site: "Colon and rectum; rectal NETs are a common site-specific presentation.",
    clinical: [
      "Rectal NETs are often small and detected incidentally or during screening endoscopy.",
      "Colonic NETs are less common and may present with nonspecific symptoms.",
      "Colorectal NEC and MiNEN more often present as large masses with advanced disease or metastases.",
    ],
    criteria: [
      "Classify as well-differentiated NET, poorly differentiated NEC, MiNEN, or ALC according to morphology and confirmatory immunohistochemistry.",
      "For rectal NET, document size, depth, grade, lymphovascular invasion, and margin status.",
      "For MiNEN, both morphologically distinct components should generally comprise at least 30% of the tumor.",
    ],
    histology: [
      "NET shows organoid nests, trabeculae, or ribbons of monotonous cells with granular cytoplasm and stippled chromatin.",
      "NEC shows small-cell or large-cell morphology, sheet-like growth, marked atypia, brisk mitotic activity, and often necrosis.",
      "MiNEN contains distinct neuroendocrine and non-neuroendocrine components.",
      "ALC shows evenly intermixed or same-cell neuroendocrine and non-neuroendocrine differentiation without separate morphologic zones.",
    ],
    ihc: [
      "At least two of chromogranin A, synaptophysin, and INSM1 should support neuroendocrine differentiation.",
      "SSTR2 may be expressed in well-differentiated NETs and may be useful for theranostic assessment.",
      "Abnormal p53 and loss of RB1 support NEC in the appropriate morphologic setting.",
    ],
    molecular: [
      "For NEC, TP53/RB1 pathway abnormalities are characteristic of the broader NEC class; they are supportive rather than required site-specific tests.",
    ],
    differential: [
      [
        "Poorly differentiated adenocarcinoma",
        "Neuroendocrine morphology and convincing expression of at least two neuroendocrine markers are required.",
      ],
      [
        "Basaloid squamous cell carcinoma",
        "Squamous markers such as p40 and CK5/6 support squamous differentiation.",
      ],
      [
        "Metastatic NEN",
        "Correlate with clinical history and imaging; morphology and common neuroendocrine markers do not establish the primary site.",
      ],
    ],
    pitfalls: [
      "Do not diagnose ALC from focal neuroendocrine marker expression without corresponding morphology.",
      "Ki-67 does not separate NET G3 from NEC.",
    ],
  },
  {
    name: "Anal neuroendocrine neoplasms",
    site: "Anal canal; tumors may arise at any level.",
    clinical: [
      "Rare; clinical presentation is often related to local mass effect, bleeding, or advanced disease.",
      "Anal NEC may present as an irregular mass with surface depressions or ulceration.",
      "Poorly differentiated tumors are often clinically aggressive.",
    ],
    criteria: [
      "Confirm epithelial neuroendocrine differentiation with morphology and at least two neuroendocrine markers.",
      "Distinguish NET, NEC, MiNEN, and ALC using the same morphologic criteria applied elsewhere in the digestive tract.",
      "For MiNEN, document both components and their approximate proportions.",
    ],
    histology: [
      "NET shows well-differentiated organoid nests or trabeculae of uniform cells with stippled chromatin.",
      "NEC shows poorly differentiated small-cell or large-cell morphology, brisk mitoses, and necrosis.",
      "MiNEN has separate neuroendocrine and non-neuroendocrine components.",
      "ALC has intermixed neuroendocrine and non-neuroendocrine differentiation without distinct zones.",
    ],
    ihc: [
      "Use at least two of chromogranin A, synaptophysin, and INSM1 to establish neuroendocrine differentiation.",
      "p40 and CK5/6 help identify squamous differentiation in the differential diagnosis.",
      "Abnormal p53 and loss of RB1 may support NEC.",
    ],
    molecular: [
      "No clinically relevant routine diagnostic molecular test is established for anal NEN in the supplied source.",
    ],
    differential: [
      [
        "Basaloid squamous cell carcinoma",
        "Usually expresses squamous markers, including p40 and CK5/6.",
      ],
      [
        "Anal adenocarcinoma",
        "Gland-forming morphology and mucin production identify the non-neuroendocrine component.",
      ],
      [
        "Metastatic NEC",
        "Clinical and radiologic correlation is required to establish primary site.",
      ],
    ],
    pitfalls: [
      "Neuroendocrine marker expression without neuroendocrine morphology is insufficient for diagnosis.",
      "Do not infer primary anal origin from immunophenotype alone.",
    ],
  },
  {
    name: "Paraganglioma of the digestive system",
    site: "Extra-adrenal paraganglia in the digestive region, including the periampullary/duodenal region and other abdominal sites.",
    clinical: [
      "Non-epithelial (neuronal-lineage) NEN; may be functional or nonfunctional.",
      "Clinical presentation depends on catecholamine secretion, location, and mass effect.",
      "Genetic predisposition is the principal recognized risk factor; evaluate personal/family history and syndromic context.",
    ],
    criteria: [
      "Neuroendocrine neoplasm with characteristic morphology and absence of cytokeratin expression.",
      "Demonstrate sustentacular cells around tumor cell nests when present.",
      "Assess for metastatic disease; metastatic behavior is established by tumor at sites where paraganglionic tissue is normally absent.",
    ],
    histology: [
      "Nested (zellballen) architecture with chief cells separated by delicate vascular septa.",
      "Chief cells have granular cytoplasm and round nuclei with stippled chromatin.",
      "Sustentacular cells outline nests; vascularity is often prominent.",
    ],
    ihc: [
      "Chief cells express neuroendocrine markers such as chromogranin A and synaptophysin.",
      "Cytokeratins are negative, helping distinguish paraganglioma from epithelial NET/NEC.",
      "S100 and SOX10 highlight sustentacular cells.",
    ],
    molecular: [
      "Germline susceptibility alterations, particularly in SDHx genes and other paraganglioma-predisposition genes, are clinically important; genetic evaluation is recommended in the appropriate setting.",
    ],
    differential: [
      [
        "Epithelial NET",
        "Usually cytokeratin-positive; paraganglioma is typically keratin-negative.",
      ],
      [
        "CoGNET",
        "Contains ganglion-like and Schwannian/neuromatous components in addition to neuroendocrine cells.",
      ],
      [
        "GIST",
        "Mesenchymal morphology and KIT/DOG1 expression rather than a keratin-negative zellballen neuroendocrine tumor.",
      ],
    ],
    pitfalls: [
      "Do not use the obsolete term extra-adrenal pheochromocytoma.",
      "A keratin-negative neuroendocrine tumor should prompt consideration of paraganglioma.",
    ],
  },
  {
    name: "Composite gangliocytoma/neuroma and neuroendocrine tumor (CoGNET)",
    site: "Predominantly periampullary duodenum.",
    clinical: [
      "Uncommon neoplasm, classically arising in the periampullary region of the duodenum.",
      "May present with abdominal pain, gastrointestinal bleeding, jaundice, or symptoms related to local obstruction.",
    ],
    criteria: [
      "Recognize a composite neoplasm containing neuroendocrine, ganglion-like, and Schwannian/neuromatous components.",
      "Periampullary duodenal location is a desirable supporting feature.",
    ],
    histology: [
      "Triphasic composition includes epithelioid neuroendocrine cells, ganglion-like cells, and spindle-cell Schwannian/neuromatous elements.",
      "The three components may be variably represented; adequate sampling is important.",
    ],
    ihc: [
      "Neuroendocrine component expresses synaptophysin and chromogranin A.",
      "Ganglion-like and Schwannian components show neural marker expression, including S100/SOX10 in Schwannian elements.",
    ],
    molecular: [],
    differential: [
      [
        "Paraganglioma",
        "Lacks the characteristic triphasic mixture of neuroendocrine, ganglion-like, and neuromatous components.",
      ],
      [
        "Duodenal NET",
        "Pure NET lacks the ganglion-like and Schwannian/neuromatous components.",
      ],
      [
        "Ganglioneuroma",
        "Lacks a distinct epithelial neuroendocrine tumor component.",
      ],
    ],
    pitfalls: [
      "Avoid the historical terms gangliocytic paraganglioma and duodenal ganglioneuroma as substitutes for the current entity name.",
    ],
  },
  {
    name: "Hepatic neuroendocrine neoplasms",
    site: "Liver; primary hepatic NENs are exceptionally uncommon.",
    clinical: [
      "A hepatic NEN should be regarded as metastatic until a primary extrahepatic site has been excluded.",
      "Presentation is usually related to liver mass effect or metastatic disease.",
      "Clinical and imaging workup is essential because morphology and immunophenotype may not distinguish primary from metastatic NEN.",
    ],
    criteria: [
      "Establish epithelial NET or NEC by morphology and neuroendocrine immunophenotype.",
      "Before diagnosing a primary hepatic NEN, exclude an extrahepatic primary through clinical, radiologic, and endoscopic assessment.",
      "Classify any mixed tumor using the criteria for MiNEN or ALC.",
    ],
    histology: [
      "NET shows well-differentiated organoid nests, trabeculae, or ribbons of uniform cells with stippled chromatin.",
      "NEC shows poorly differentiated small-cell or large-cell morphology, brisk mitoses, and often extensive necrosis.",
      "MiNEN contains distinct neuroendocrine and non-neuroendocrine components.",
    ],
    ihc: [
      "Chromogranin A, synaptophysin, and INSM1 support neuroendocrine differentiation; use at least two markers.",
      "TTF1, CDX2, ISL1, and other site-associated markers may be helpful in selected cases but do not replace clinical exclusion of another primary.",
    ],
    molecular: [],
    differential: [
      [
        "Metastatic gastrointestinal or pancreatic NET",
        "Most important consideration; exclude an extrahepatic primary clinically and radiologically.",
      ],
      [
        "Hepatocellular carcinoma",
        "Hepatocellular morphology and hepatocellular markers support HCC rather than NEN.",
      ],
      [
        "Cholangiocarcinoma",
        "Gland-forming biliary carcinoma lacks the defining well-differentiated neuroendocrine morphology.",
      ],
    ],
    pitfalls: [
      "Do not diagnose primary hepatic NET solely because the liver contains a dominant or solitary mass.",
      "No routine diagnostic molecular test is established in the supplied source.",
    ],
  },
  {
    name: "Gallbladder and extrahepatic bile duct neuroendocrine neoplasms",
    site: "Gallbladder and extrahepatic biliary tree.",
    clinical: [
      "Very rare tumors; clinical presentation is commonly nonspecific or related to biliary obstruction.",
      "Gallbladder tumors may be associated with abdominal pain or jaundice; extrahepatic bile duct tumors may present with obstructive jaundice.",
      "NEC and MiNEN are more commonly encountered than well-differentiated NET in reported biliary NEN series.",
    ],
    criteria: [
      "Confirm epithelial neuroendocrine differentiation and classify as NET, NEC, MiNEN, or ALC.",
      "For MiNEN, identify two morphologically distinct components and estimate their proportions.",
      "Assess depth of invasion, margins, lymphovascular invasion, and regional nodes in resection specimens.",
    ],
    histology: [
      "NET shows nested/trabecular organoid growth with uniform cells and stippled chromatin.",
      "NEC shows poorly differentiated small-cell or large-cell morphology, marked atypia, brisk mitoses, and necrosis.",
      "MiNEN often combines NEC with biliary adenocarcinoma.",
      "ALC shows diffuse/intermixed differentiation without separate morphologic components.",
    ],
    ihc: [
      "Use at least two of chromogranin A, synaptophysin, and INSM1 to confirm neuroendocrine differentiation.",
      "SSTR2 may support NET characterization; abnormal p53 and loss of RB1 may support NEC.",
    ],
    molecular: [],
    differential: [
      [
        "Biliary adenocarcinoma with focal neuroendocrine marker expression",
        "Requires neuroendocrine morphology; isolated positive cells do not establish NEN.",
      ],
      [
        "Metastatic NEN",
        "Correlate with clinical history and imaging to exclude another primary site.",
      ],
      [
        "Paraganglioma",
        "Usually keratin-negative, unlike epithelial biliary NEN.",
      ],
    ],
    pitfalls: [
      "The supplied source does not identify a clinically relevant routine molecular test for these site-specific tumors.",
    ],
  },
  {
    name: "Nonfunctioning pancreatic neuroendocrine tumor (PanNET)",
    site: "Pancreas; tumors may arise in any region.",
    clinical: [
      "Most PanNETs are nonfunctioning and present through mass effect, incidental imaging, abdominal pain, or metastatic disease.",
      "Larger tumors may cause abdominal pain, weight loss, or biliary/ductal obstruction.",
      "PanNETs may occur sporadically or in association with MEN1, VHL, NF1, or tuberous sclerosis complex.",
    ],
    criteria: [
      "Well-differentiated epithelial neuroendocrine morphology with confirmatory neuroendocrine marker expression.",
      "Report WHO grade using both Ki-67 index and mitotic count; assign the higher grade if discordant.",
      "Report tumor size, extent, vascular/perineural invasion, necrosis, margins, and nodal/metastatic status.",
      "Pancreatic neuroendocrine microtumor is a separate designation for very small lesions as defined by the WHO classification.",
    ],
    histology: [
      "Organoid nests, trabeculae, ribbons, or gyriform structures separated by delicate fibrovascular stroma.",
      "Uniform cells with granular eosinophilic cytoplasm and round nuclei showing finely stippled chromatin.",
      "Amyloid-like stromal material may be present in some tumors.",
      "Well-differentiated G3 PanNET retains well-differentiated morphology despite high proliferation.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "PanNETs commonly express cytokeratins and may express pancreatic hormones.",
      "SSTR2 expression is useful in selected diagnostic and theranostic settings.",
      "DAXX/ATRX loss supports PanNET in the appropriate context and helps distinguish it from PanNEC.",
    ],
    molecular: [
      "MEN1, DAXX, and ATRX alterations are characteristic molecular events in a subset of PanNETs.",
      "VHL, NF1, and TSC pathway alterations may occur in syndromic or sporadic cases.",
      "DAXX/ATRX immunohistochemistry is a useful surrogate in selected cases; routine sequencing is not required for every typical PanNET.",
    ],
    differential: [
      [
        "Pancreatic neuroendocrine carcinoma",
        "Poorly differentiated morphology, abnormal p53, and RB1 loss favor NEC; DAXX/ATRX loss favors PanNET.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar architecture and trypsin/chymotrypsin/BCL10 expression; focal neuroendocrine staining may occur.",
      ],
      [
        "Solid pseudopapillary neoplasm",
        "Nuclear beta-catenin and characteristic pseudopapillary morphology; usually lacks diffuse neuroendocrine phenotype.",
      ],
      [
        "Paraganglioma",
        "Typically keratin-negative and shows sustentacular cells.",
      ],
    ],
    pitfalls: [
      "Do not use Ki-67 alone to classify a G3 lesion as NET or NEC.",
      "Scattered neuroendocrine marker-positive cells in acinar cell carcinoma do not establish MiNEN or ALC.",
    ],
  },
  {
    name: "Insulinoma",
    site: "Pancreas; may occur anywhere, often as a small solitary lesion.",
    clinical: [
      "Functioning PanNET causing inappropriate insulin secretion and hypoglycemia.",
      "Symptoms reflect Whipple triad: hypoglycemic symptoms, documented low plasma glucose, and relief after glucose administration.",
      "Most are sporadic; a subset is associated with MEN1.",
    ],
    criteria: [
      "Clinical and biochemical evidence of endogenous hyperinsulinemic hypoglycemia.",
      "Well-differentiated PanNET morphology with neuroendocrine marker expression.",
      "Report Ki-67 index and/or mitotic count for grade.",
    ],
    histology: [
      "Typical well-differentiated PanNET architecture with nests, trabeculae, or ribbons of uniform cells.",
      "Cells have granular cytoplasm and round nuclei with finely stippled chromatin.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "Insulin immunoreactivity is desirable but may be variable; correlate with biochemical findings.",
      "SSTR2 expression may be present.",
    ],
    molecular: [
      "No clinically relevant routine diagnostic molecular test is established in the supplied source.",
    ],
    differential: [
      [
        "Nonfunctioning PanNET",
        "Requires clinical/biochemical evidence of insulin excess for functional classification.",
      ],
      [
        "Islet-cell hyperplasia/nesidioblastosis",
        "Diffuse or multifocal beta-cell process rather than a discrete insulin-secreting neoplasm.",
      ],
    ],
    pitfalls: [
      "A negative insulin stain does not independently exclude insulinoma when clinical and biochemical evidence is compelling.",
    ],
  },
  {
    name: "Gastrinoma",
    site: "Pancreas and duodenum; duodenal primaries are particularly relevant in MEN1.",
    clinical: [
      "Gastrin-secreting NET causing Zollinger–Ellison syndrome with gastric acid hypersecretion and recurrent peptic ulcer disease.",
      "May present with refractory or multiple ulcers, reflux, diarrhea, and complications of acid hypersecretion.",
      "A proportion is associated with MEN1; assess for multifocal disease.",
    ],
    criteria: [
      "Clinical and biochemical evidence of inappropriate hypergastrinemia with acid hypersecretion.",
      "Well-differentiated neuroendocrine morphology and confirmatory neuroendocrine markers.",
      "Gastrin immunohistochemistry is desirable in selected cases.",
    ],
    histology: [
      "Well-differentiated NET morphology with nested, trabecular, or gland-like architecture.",
      "Duodenal gastrinomas may be small and multifocal; careful sampling is important.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "Gastrin immunohistochemistry supports the functional phenotype.",
    ],
    molecular: [
      "MEN1 context is clinically relevant in a subset; routine tumor molecular testing is not required for diagnosis.",
    ],
    differential: [
      [
        "Other functioning PanNET",
        "Hormone profile and clinical syndrome distinguish gastrinoma from insulinoma, glucagonoma, VIPoma, and somatostatinoma.",
      ],
      [
        "Reactive G-cell hyperplasia",
        "Interpret gastrin expression in the context of clinical biochemistry and a demonstrable neoplasm.",
      ],
    ],
    pitfalls: [
      "Do not infer gastrinoma solely from gastrin immunoreactivity without the appropriate clinical/biochemical syndrome.",
    ],
  },
  {
    name: "VIPoma",
    site: "Pancreas; usually a functioning PanNET.",
    clinical: [
      "VIP-secreting tumor causing watery diarrhea, hypokalemia, and achlorhydria (WDHA syndrome).",
      "May cause dehydration, electrolyte disturbance, and metabolic complications.",
      "Most reported tumors are G1 or G2, although G3 tumors occur.",
    ],
    criteria: [
      "Clinical and biochemical evidence of VIP excess.",
      "Well-differentiated PanNET morphology and neuroendocrine marker expression.",
      "VIP immunohistochemistry may support the diagnosis in selected cases.",
    ],
    histology: [
      "Well-differentiated PanNET architecture with organoid nests or trabeculae of uniform cells.",
      "Grade using Ki-67 index and mitotic count.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "VIP immunoreactivity may be demonstrated; correlate with serum VIP and clinical syndrome.",
    ],
    molecular: [],
    differential: [
      [
        "Other causes of secretory diarrhea",
        "Biochemical evidence of elevated VIP and a pancreatic NET establish the functional association.",
      ],
      [
        "Other functioning PanNET",
        "Hormone profile and syndrome distinguish VIPoma from other functional subtypes.",
      ],
    ],
    pitfalls: [
      "A functional diagnosis requires clinical and biochemical evidence; immunoreactivity alone is not sufficient.",
    ],
  },
  {
    name: "Glucagonoma",
    site: "Pancreas, often in the body or tail.",
    clinical: [
      "Glucagon-secreting PanNET associated with glucagonoma syndrome.",
      "Characteristic manifestations include necrolytic migratory erythema, diabetes or glucose intolerance, weight loss, anemia, and thromboembolic events.",
      "Many patients have metastatic disease at presentation.",
    ],
    criteria: [
      "Clinical and biochemical evidence of glucagon excess.",
      "Well-differentiated PanNET morphology with neuroendocrine marker expression.",
      "Glucagon immunohistochemistry is supportive.",
    ],
    histology: [
      "Typical well-differentiated PanNET architecture with nests and trabeculae.",
      "Tumor cells are uniform with granular cytoplasm and stippled chromatin.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "Glucagon immunoreactivity supports the functional phenotype.",
    ],
    molecular: [],
    differential: [
      [
        "Other functioning PanNET",
        "Clinical syndrome and hormone profile distinguish glucagonoma.",
      ],
      [
        "Non-neoplastic causes of necrolytic migratory erythema",
        "Correlate skin findings with glucagon levels and pancreatic imaging.",
      ],
    ],
    pitfalls: [
      "Glucagon immunoreactivity should be interpreted with the clinical and biochemical findings.",
    ],
  },
  {
    name: "Somatostatinoma",
    site: "Pancreas; pancreatic tumors are usually solitary and may be large.",
    clinical: [
      "Somatostatin-secreting PanNET; classic syndrome includes diabetes, cholelithiasis, steatorrhea/diarrhea, and weight loss.",
      "Some tumors are nonfunctioning or present without a complete syndrome.",
      "A subset occurs in the setting of NF1 or other syndromic disease.",
    ],
    criteria: [
      "Clinical and laboratory evidence of somatostatin excess.",
      "Well-differentiated PanNET morphology with neuroendocrine marker expression.",
      "Somatostatin immunohistochemistry and SSTR2 are desirable supporting studies.",
    ],
    histology: [
      "Well-differentiated neuroendocrine morphology with organoid nests and trabeculae.",
      "Cells show granular cytoplasm and round nuclei with finely stippled chromatin.",
    ],
    ihc: [
      "Synaptophysin and INSM1 are usually positive; chromogranin A may be less consistent.",
      "Somatostatin immunoreactivity supports the functional subtype.",
      "SSTR2 may be positive.",
    ],
    molecular: [
      "DAXX/ATRX assessment may provide prognostic information in selected cases; no routine diagnostic molecular test is established.",
    ],
    differential: [
      [
        "Other functioning PanNET",
        "Hormone profile and syndrome distinguish somatostatinoma.",
      ],
      [
        "Duodenal somatostatin-producing NET",
        "Anatomic site and clinical context distinguish pancreatic from duodenal primary.",
      ],
    ],
    pitfalls: [
      "Not all somatostatin-immunoreactive PanNETs produce a complete clinical syndrome.",
    ],
  },
  {
    name: "ACTH-producing pancreatic neuroendocrine tumor",
    site: "Pancreas; reported more often in the tail, followed by head and body.",
    clinical: [
      "Rare functioning PanNET causing ectopic ACTH-dependent Cushing syndrome.",
      "Clinical findings include central obesity, moon facies, violaceous striae, hypertension, insulin resistance/diabetes, and hypokalemia.",
      "Reported cases show a female predominance; metastatic disease is common at diagnosis or during follow-up.",
    ],
    criteria: [
      "Clinical evidence of Cushing syndrome with biochemical evidence of ACTH-dependent hypercortisolism.",
      "Well-differentiated PanNET morphology and neuroendocrine marker expression.",
      "ACTH immunohistochemistry is desirable but may be negative in the primary tumor in some cases.",
    ],
    histology: [
      "Classic well-differentiated PanNET morphology with nested or trabecular architecture.",
      "Most reported tumors are G2, although grade is assigned by the standard PanNET criteria.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "ACTH and related pro-opiomelanocortin peptides may be expressed.",
    ],
    molecular: [
      "EWSR1::BEND2 fusion has been reported in pancreatic ACTH-secreting NETs; this is a potentially useful molecular association, not a routine required test.",
    ],
    differential: [
      [
        "Other causes of Cushing syndrome",
        "Establish ACTH dependence and localize the source clinically and radiologically.",
      ],
      [
        "Nonfunctioning PanNET",
        "Requires clinical and biochemical evidence of ACTH excess for functional classification.",
      ],
    ],
    pitfalls: [
      "ACTH staining may be absent in the primary tumor despite a convincing clinical syndrome; expression may be detected in recurrence or metastasis.",
    ],
  },
  {
    name: "Serotonin-producing pancreatic neuroendocrine tumor",
    site: "Pancreas; no consistent site predilection.",
    clinical: [
      "Extremely rare; functioning tumors may cause carcinoid syndrome.",
      "Carcinoid syndrome usually occurs in the presence of liver metastases, although exceptions are reported.",
      "Nonfunctioning serotonin-immunoreactive tumors may behave indolently.",
    ],
    criteria: [
      "Well-differentiated PanNET morphology with neuroendocrine marker expression.",
      "For a functioning tumor, document clinical and biochemical evidence of serotonin excess/carcinoid syndrome.",
      "Serotonin immunohistochemistry is supportive; SSTR2 is desirable.",
    ],
    histology: [
      "Classic well-differentiated PanNET architecture with nested, trabecular, or gland-like structures.",
      "Tumor cells resemble gastric-type enterochromaffin cells; duct-centered growth may occur in selected non-syndromic cases.",
    ],
    ihc: [
      "Synaptophysin, chromogranin A, and INSM1 support neuroendocrine differentiation.",
      "Serotonin immunoreactivity supports the subtype.",
    ],
    molecular: [],
    differential: [
      [
        "Metastatic intestinal NET",
        "Clinical history and imaging are required to exclude an extra-pancreatic primary.",
      ],
      [
        "Other functioning PanNET",
        "Hormone profile and clinical syndrome distinguish serotonin-producing tumors.",
      ],
    ],
    pitfalls: [
      "Do not use the term pancreatic carcinoid.",
      "Serotonin immunoreactivity alone does not establish a functioning tumor.",
    ],
  },
  {
    name: "Pancreatic neuroendocrine carcinoma (PanNEC)",
    site: "Pancreas, most often the head.",
    clinical: [
      "Uncommon, high-grade malignancy; most patients are middle-aged or older adults.",
      "May present with back/abdominal pain, jaundice, weight loss, or nonspecific symptoms similar to pancreatic ductal adenocarcinoma.",
      "Advanced stage at presentation is common and prognosis is poor.",
    ],
    criteria: [
      "Poorly differentiated epithelial neuroendocrine carcinoma, small-cell or large-cell type.",
      "Sheet-like or trabecular growth with marked cytologic atypia and brisk mitotic activity.",
      "Confirm neuroendocrine differentiation with at least two markers; report Ki-67 index and mitotic count.",
      "Use morphology to distinguish PanNEC from well-differentiated PanNET G3.",
    ],
    histology: [
      "Small-cell type: sheets of small cells with scant cytoplasm, high nuclear-to-cytoplasmic ratio, nuclear molding, and finely granular chromatin.",
      "Large-cell type: larger cells with more abundant cytoplasm, vesicular nuclei, and conspicuous nucleoli.",
      "Extensive necrosis and brisk mitotic activity are common.",
      "PanNEC may coexist with a non-neuroendocrine carcinoma component.",
    ],
    ihc: [
      "Cytokeratin expression supports epithelial lineage.",
      "Synaptophysin and INSM1 are commonly positive; chromogranin A may be variable.",
      "Abnormal p53 and complete loss of RB1 are common and support NEC.",
      "SSTR2 is often reduced or absent; DAXX/ATRX loss favors PanNET in the differential.",
    ],
    molecular: [
      "TP53 and RB1 alterations are characteristic; KRAS, BRAF, APC, and SMAD4 alterations may also occur.",
      "PanNEC generally lacks the MEN1, DAXX, and ATRX alterations typical of PanNET.",
      "p53/RB1 immunohistochemistry is a practical surrogate in the appropriate morphologic context.",
    ],
    differential: [
      [
        "PanNET G3",
        "Retains well-differentiated morphology; DAXX/ATRX loss supports PanNET, whereas abnormal p53/RB1 loss supports NEC.",
      ],
      [
        "Pancreatic ductal adenocarcinoma",
        "Gland formation/desmoplasia and ductal phenotype; focal neuroendocrine-marker staining alone is insufficient.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar differentiation and trypsin/chymotrypsin/BCL10 expression; scattered neuroendocrine-positive cells may occur.",
      ],
    ],
    pitfalls: [
      "G3 is a grade, not a synonym for NEC.",
      "Do not classify a tumor as NEC based solely on a high Ki-67 index or necrosis.",
    ],
  },
  {
    name: "Pancreatic mixed neuroendocrine–non-neuroendocrine neoplasm (MiNEN)",
    site: "Pancreas; may arise anywhere, with ductal adenocarcinoma–NEC combinations often in the head.",
    clinical: [
      "Very rare; symptoms commonly reflect tumor growth or metastasis, including abdominal pain, jaundice, weight loss, nausea, vomiting, and anemia.",
      "Mixed ductal adenocarcinoma–NEC tumors often behave aggressively.",
      "Mixed acinar carcinoma–NENs generally behave similarly to acinar cell carcinoma.",
    ],
    criteria: [
      "Two morphologically distinct neuroendocrine and non-neuroendocrine components must be present.",
      "Each component should generally comprise at least 30% of the neoplasm.",
      "Confirm neuroendocrine differentiation in the NEN component with at least two neuroendocrine markers.",
      "Grade the NET component or report the Ki-67 index of the NEC component; grade the non-neuroendocrine component separately.",
    ],
    histology: [
      "Common combinations include ductal adenocarcinoma with NEC, ductal adenocarcinoma with NET, and acinar cell carcinoma with NEN.",
      "The ductal component resembles conventional pancreatic ductal adenocarcinoma with mucin production and infiltrative glands.",
      "The acinar component retains acinar morphology and enzyme expression.",
      "The neuroendocrine component shows either well-differentiated NET or poorly differentiated NEC morphology.",
    ],
    ihc: [
      "Use neuroendocrine markers to confirm the NEN component.",
      "Use component-directed markers to establish ductal or acinar differentiation; acinar carcinomas may show scattered neuroendocrine-positive cells without meeting MiNEN criteria.",
    ],
    molecular: [
      "Limited molecular data are available; KRAS mutations and TP53 pathway abnormalities have been reported in mixed ductal adenocarcinoma–NEC.",
      "No routine molecular test is required for MiNEN classification.",
    ],
    differential: [
      [
        "Amphicrine-like carcinoma",
        "Neuroendocrine and non-neuroendocrine differentiation is intermixed without distinct morphologic zones.",
      ],
      [
        "Acinar cell carcinoma with focal neuroendocrine staining",
        "Scattered positive cells or small clusters do not establish a morphologically distinct second component.",
      ],
      [
        "PanNEC",
        "Pure NEC lacks a qualifying morphologically distinct non-neuroendocrine component.",
      ],
    ],
    pitfalls: [
      "Do not diagnose MiNEN from immunohistochemical co-expression alone; separate morphologic components are required.",
      "The 30% threshold is a convention; a minor small-cell NEC component should still be reported because it may affect prognosis.",
    ],
  },
];

const groups = [
  "All",
  "Esophagus",
  "Stomach",
  "Duodenum",
  "Small intestine",
  "Appendix",
  "Colorectum",
  "Anal canal",
  "Paraganglioma / CoGNET",
  "Liver / biliary tract",
  "Pancreas",
];
function getGroup(name: string) {
  if (name.startsWith("Esophageal")) return "Esophagus";
  if (name.startsWith("Gastric")) return "Stomach";
  if (name.startsWith("Duodenal")) return "Duodenum";
  if (name.startsWith("Jejunal")) return "Small intestine";
  if (name.startsWith("Appendiceal")) return "Appendix";
  if (name.startsWith("Colorectal")) return "Colorectum";
  if (name.startsWith("Anal")) return "Anal canal";
  if (name.startsWith("Paraganglioma") || name.startsWith("Composite"))
    return "Paraganglioma / CoGNET";
  if (name.startsWith("Hepatic") || name.startsWith("Gallbladder"))
    return "Liver / biliary tract";
  return "Pancreas";
}
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
  if (!items.length)
    return (
      <p className="text-sm text-slate-500">
        No diagnostically useful molecular information specified in the supplied
        source.
      </p>
    );
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

export default function NeuroendocrineNeoplasmsPage() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Esophageal neuroendocrine neoplasms",
    "Nonfunctioning pancreatic neuroendocrine tumor (PanNET)",
    "Pancreatic neuroendocrine carcinoma (PanNEC)",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (group === "All" || getGroup(x.name) === group) &&
          [
            x.name,
            x.site,
            ...x.clinical,
            ...x.criteria,
            ...x.histology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flat(),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, group],
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
            PathologyGPS / Gastrointestinal & Hepatopancreatobiliary /
            Neuroendocrine Neoplasms
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Neuroendocrine Neoplasms
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first reference to digestive-system neuroendocrine
                neoplasms, emphasizing site-specific clinical context,
                diagnostic criteria, immunophenotype, and clinically useful
                molecular findings.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify by morphology first; use immunohistochemistry to
                confirm lineage.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Well-differentiated NET and poorly differentiated NEC are
                distinct tumor types. Ki-67 grades NET but does not distinguish
                NET G3 from NEC.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from morphology to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish lineage",
                "Identify epithelial versus non-epithelial (neuronal) NEN. Paraganglioma is typically keratin-negative.",
              ],
              [
                "2. Confirm morphology",
                "Look for organoid nests/trabeculae and stippled chromatin (NET) versus sheets, marked atypia, molding, apoptosis, and necrosis (NEC).",
              ],
              [
                "3. Confirm neuroendocrine differentiation",
                "Use at least two of chromogranin A, synaptophysin, and INSM1 in the appropriate morphologic setting.",
              ],
              [
                "4. Grade and classify",
                "For NET, report Ki-67 and mitotic count. Classify mixed tumors as MiNEN or amphicrine-like carcinoma using architecture and distribution.",
              ],
              [
                "5. Integrate site and context",
                "Correlate with anatomic site, background mucosa, functional syndrome, syndromic history, imaging, and metastatic workup.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                  {x[0]}
                </div>
                <p className="text-sm leading-6 text-slate-700">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="NET versus NEC: the distinction is morphologic">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">Well-differentiated NET</th>
                    <th className="py-2">Poorly differentiated NEC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Architecture</td>
                    <td className="py-2 pr-3">
                      Organoid nests, trabeculae, ribbons
                    </td>
                    <td className="py-2">Sheets, single infiltrating cells</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Cytology</td>
                    <td className="py-2 pr-3">
                      Relatively uniform; stippled chromatin
                    </td>
                    <td className="py-2">Marked atypia; molding may occur</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Cytoplasm</td>
                    <td className="py-2 pr-3">Relatively abundant, granular</td>
                    <td className="py-2">
                      Scant in small-cell NEC; variable in large-cell NEC
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Necrosis</td>
                    <td className="py-2 pr-3">
                      May occur; does not alone establish NEC
                    </td>
                    <td className="py-2">Common, often extensive</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Ki-67</td>
                    <td className="py-2 pr-3">
                      G1–G3; G3 may retain well-differentiated morphology
                    </td>
                    <td className="py-2">
                      Usually very high; NEC is high-grade by definition
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Supportive IHC</td>
                    <td className="py-2 pr-3">
                      DAXX/ATRX loss in selected PanNETs
                    </td>
                    <td className="py-2">Abnormal p53 and/or RB1 loss</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="NET grading and Ki-67 assessment">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Grade</th>
                    <th className="py-2 pr-3">Mitotic count</th>
                    <th className="py-2">Ki-67 index</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold">G1</td>
                    <td className="py-2 pr-3">&lt;2 per 2 mm²</td>
                    <td className="py-2">&lt;3%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">G2</td>
                    <td className="py-2 pr-3">2–20 per 2 mm²</td>
                    <td className="py-2">3–20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">G3</td>
                    <td className="py-2 pr-3">&gt;20 per 2 mm²</td>
                    <td className="py-2">&gt;20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <p>
                Count mitoses in the areas of highest activity and assess Ki-67
                in hot spots. Manual counting of at least 500 neoplastic cells
                remains the reference method.
              </p>
              <p>
                If mitotic count and Ki-67 are discordant, assign the higher
                grade. Report the actual Ki-67 percentage and number of cells
                counted whenever possible.
              </p>
              <p>
                Necrosis should be reported separately in digestive NETs; it is
                not currently part of the grading system. Distinguish true tumor
                necrosis from infarct-like necrosis.
              </p>
            </div>
          </Panel>
        </div>

        <Panel title="MiNEN versus amphicrine-like carcinoma (ALC)">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="font-bold text-slate-900">MiNEN</h4>
              <Bullets
                items={[
                  "Two morphologically distinct components: one neuroendocrine and one non-neuroendocrine.",
                  "Each component generally accounts for at least 30% of the neoplasm.",
                  "Confirm the neuroendocrine component with at least two neuroendocrine markers.",
                  "Report the component types and their approximate proportions; grade each component appropriately.",
                ]}
              />
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="font-bold text-slate-900">
                Amphicrine-like carcinoma
              </h4>
              <Bullets
                items={[
                  "Neuroendocrine and non-neuroendocrine differentiation is evenly intermixed or present in the same cells.",
                  "At least 30% of tumor cells show morphologic neuroendocrine differentiation, confirmed by at least two markers.",
                  "There are no geographically distinct zones of divergent differentiation.",
                  "Name the tumor according to its dominant non-neuroendocrine component (e.g., amphicrine-like adenocarcinoma).",
                ]}
              />
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A small-cell NEC component should be reported even when it is below
            30%, with its estimated proportion, because it may dominate
            prognosis. Scattered neuroendocrine-marker-positive cells alone do
            not establish MiNEN or ALC.
          </p>
        </Panel>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Site-specific diagnostic profiles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by site, morphology, marker, clinical syndrome, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. Ki-67, INSM1, MEN1, insulinoma..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${group === g ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {g}
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
                      <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                        {getGroup(p.name)}
                      </span>
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
                          Clinical profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.histology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
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
                          <table className="w-full min-w-[600px] text-left text-sm">
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

        <Panel title="Practical reporting checklist">
          <Bullets
            items={[
              "Specify the primary anatomic site and whether the neoplasm is epithelial or non-epithelial.",
              "State the morphologic class: well-differentiated NET, poorly differentiated NEC (small-cell or large-cell), MiNEN, or amphicrine-like carcinoma.",
              "For NET, report grade, Ki-67 percentage, number of cells counted, mitotic count per 2 mm², and tumor necrosis status.",
              "For MiNEN, name both components and estimate their proportions; report even a minor small-cell NEC component.",
              "Document tumor size, depth/invasion, lymphovascular and perineural invasion, margins, nodal status, and distant metastasis as appropriate to the site.",
              "For pancreatic lesions, distinguish PanNET G3 from PanNEC using morphology and selected p53, RB1, DAXX, and ATRX immunohistochemistry.",
              "For a liver NEN, exclude an extrahepatic primary before diagnosing a primary hepatic neoplasm.",
              "For a periampullary duodenal tumor with mixed neural/neuroendocrine elements, consider CoGNET; for keratin-negative NEN, consider paraganglioma.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Prepared from the
          supplied WHO digestive-system neuroendocrine neoplasm excerpt.
          Molecular findings are included only where the source identifies a
          meaningful diagnostic, classification, or clinical role. Site-specific
          staging and prognostic details should be interpreted using the
          applicable current TNM system and complete clinical context.
        </footer>
      </div>
    </main>
  );
}
