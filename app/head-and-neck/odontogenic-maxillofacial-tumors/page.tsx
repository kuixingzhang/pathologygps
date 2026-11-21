"use client";

import { useMemo, useState } from "react";

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
    name: "Radicular cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "RC is the most common jaw cyst, accounting for about 60% of all odontogenic cysts.",
      "There is a peak incidence in the fourth and fifth decades of life and a slight male predilection.",
      "RCs are located at the apex of a tooth root, or on the lateral aspect of the root associated with a lateral root canal.",
      "The most common site is the anterior maxilla, where 40–50% arise, followed by the lower molar area.",
      "RCs are always associated with a non-vital tooth.",
      "Patients may report swelling, but RCs are often symptomless and found incidentally on radiological investigation.",
    ],
    criteria: ["non-vital tooth; cyst lined by non-keratinizing epithelium."],
    morphology: [
      "RC is lined by non-keratinized stratified squamous epithelium that is proliferative with a characteristic arcading pattern.",
      "Hyaline (Rushton) bodies, mucous (goblet) cells, or small areas of keratinization are not uncommon.",
      "The wall is composed of inflamed fibrous tissue, often with foamy histiocytes.",
      "Deposits of cholesterol crystals (clefts) with foreign body giant cells are often seen and may form luminal nodules.",
      "Residual and longstanding cysts are less inflamed and have a more regular thin epithelium.",
      "Residual cyst (residual radicular cyst) is a radicular cyst that is retained in the jaw after removal of the causative tooth.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Radicular cyst is characterized by non-vital tooth; cyst lined by non-keratinizing epithelium.",
      },
    ],
  },
  {
    name: "Inflammatory collateral cysts",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "ICCs account for 5% of odontogenic cysts and have a male predilection (70%).",
      "The average age is 30 years for PC and 9 years (first molar) or 17 years (second molar) for MBBC.",
      "PCs account for 60% of all ICCs and are found on the distobuccal aspect of mandibular third molars.",
      "MBBCs (35%) are found on the buccal aspect of mandibular first or second molars and are often bilateral (in as many as 25% of cases).",
      "Rare cases of ICC (4%) arise at other sites.",
      "PCs are associated with chronic pericoronitis but are often symptomless at presentation.",
    ],
    criteria: [
      "associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
    ],
    morphology: [
      "ICC is indistinguishable from radicular cyst.",
      "It has an inflamed wall lined by hyperplastic non-keratinized epithelium.",
      "Cholesterol deposition and foamy histiocytes are common.",
      "The cyst may be open and continuous with the pericoronal or gingival tissues.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Inflammatory collateral cysts is characterized by associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium.",
      },
    ],
  },
  {
    name: "Surgical ciliated cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "Surgical ciliated cysts are rare.",
      "There is no sex predilection, and the most common age range is the fifth to sixth decades of life.",
      "Surgical ciliated cysts arise in the gnathic bones, most commonly in the posterior maxilla.",
      "They are very rare in the mandible.",
      "Surgical ciliated cysts may be asymptomatic or present with swelling, pain, or tenderness.",
    ],
    criteria: [
      "a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
    ],
    morphology: [
      "The cyst is lined by pseudostratified ciliated columnar (respiratory-type) epithelium.",
      "Areas of squamous metaplasia or simple cuboidal cells may be seen.",
      "Mucous (goblet) cells are common.",
      "The cyst wall is composed of loose fibrous connective tissue, which may be inflamed.",
      "Areas of subepithelial fibrosis or hyalinization are frequent.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Surgical ciliated cyst is characterized by a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining.",
      },
    ],
  },
  {
    name: "Nasopalatine duct cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "Fewer than 5% of all cysts of the jaws are NDCs, but they account for as many as 80% of all non-odontogenic cysts.",
      "NDC occurs most frequently in patients aged 30–60 years, with an M:F ratio of about 3:1.",
      "NDCs present in the midline of the anterior hard palate.",
      "Most NDCs present as sessile swellings posterior to the maxillary incisors, or they may be entirely asymptomatic.",
      "More deeply sited cysts present as a swelling on the labial alveolus or bulging into the nasal floor.",
      "Rarely, an NDC will develop within the soft tissue of the incisive papilla.",
    ],
    criteria: [
      "epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium.",
      "a neurovascular bundle in the cyst wall.",
    ],
    morphology: [
      "About 90% of NDCs are lined by non-keratinized stratified squamous epithelium, with focal cuboidal, columnar, or ciliated areas.",
      "About half contain respiratory epithelium, but < 10% are lined entirely by it.",
      "Cysts with respiratory-type epithelium tend to be more superiorly placed in the incisive canal.",
      "The cyst wall contains prominent neurovascular bundles and occasionally mucous glands or cartilage.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Nasopalatine duct cyst is characterized by epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall.",
      },
    ],
  },
  {
    name: "Gingival cysts",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "GCA accounts for < 0.5% of odontogenic cysts.",
      "The majority of patients are in their fifth or sixth decade of life.",
      "GCI is found in as many as 90% of neonates but is rare after the age of 3 months.",
      "In adults, most cysts arise in the gingiva of the mandibular premolar/canine region or (less frequently) in the anterior maxillary gingiva, almost always on the buccal aspect of the alveolus.",
      "In infants, the cysts occur anywhere on the edentulous alveolar ridge of the mandible or maxilla.",
      "Gingival cyst of the adult (GCA) usually forms a single painless, well-circumscribed nodule of the attached gingivae, sometimes with a bluish-gray translucent appearance.",
    ],
    criteria: [
      "for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
    ],
    morphology: [
      "GCA is lined by a thin, flat or cuboidal squamous epithelium, 1–3 cells thick, without rete ridges.",
      "Plaque-like thickenings that protrude into the lumen or the connective tissue wall and clear cells are usually present.",
      "The connective tissue wall may contain islands of epithelium resembling the epithelial plaques.",
      "GCIs are rarely biopsied, but they are lined by thin keratinized epithelium that may have a connection to the surface epithelium.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Gingival cysts is characterized by for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months.",
      },
    ],
  },
  {
    name: "Dentigerous cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "Dentigerous cysts are the most common developmental cysts of the jaws, representing about 25% of all jaw cysts.",
      "The age range is broad (5–83 years), with a peak incidence in the second and third decades of life.",
      "There is a male sex predilection (M:F ratio: 1.7:1).",
      "Dentigerous cysts develop most frequently on third molars and maxillary canines, but any unerupted tooth or odontoma may be affected.",
      "An eruption cyst is a superficial dentigerous cyst over an erupting tooth, usually a deciduous first molar, in a child.",
      "Most dentigerous cysts are small and asymptomatic and are discovered on routine dental radiographs or when investigating the failure of a tooth to erupt.",
    ],
    criteria: [
      "a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
    ],
    morphology: [
      "The dentigerous cyst has a thin, non-keratinized stratified squamous epithelial lining, which is often bilaminar in areas.",
      "Cuboidal, columnar, and ciliated cells may be present, as can mucous or sebaceous metaplasia.",
      "Hyaline (Rushton) bodies and focal keratinization may also occur.",
      "When not inflamed, the cyst wall is composed of loose, often myxoid, fibrous connective tissue and may contain occasional odontogenic epithelial rests.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "Inflamed dentigerous cysts show hyperplasia and thickening of the lining epithelium and often foamy macrophages and cholesterol clefts associated with foreign body giant cells, and they come to resemble radicular cysts histopathologically.",
      },
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Dentigerous cyst is characterized by a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth.",
      },
    ],
  },
  {
    name: "Orthokeratinized odontogenic cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "OOC is rare and accounts for ≤ 1% of odontogenic cysts.",
      "It arises over a wide age range, with an average of about 35 years and a peak in the third and fourth decades of life.",
      "About 65% of patients are male.",
      "Most OOCs (80%) are found in the mandible and 65% are found in the posterior body and ramus region.",
      "OOC usually presents as a painless swelling, but many are incidental findings during radiographic examination.",
      "Rare cases of multiple or bilateral OOC have been reported, but there is no evidence of any association with naevoid basal cell carcinoma syndrome (Gorlin syndrome).",
    ],
    criteria: [
      "site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization.",
      "prominent granular cell layer; flat basal cells.",
    ],
    morphology: [
      "OOC is lined by thin regular orthokeratinized stratified squamous epithelium with a prominent granular cell layer and inconspicuous or low cuboidal basal cells.",
      "It is heavily keratinized, often with lamellae of keratin filling the lumen.",
      "The wall is fibrous and may show areas of inflammation.",
      "There may be parakeratinized or non-keratinized areas, but these form a small part of the lining and are often associated with inflammation.",
      "Rare examples include sebaceous glands in the lining.",
      "Microcysts may be seen in the wall in 5% of cases.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Orthokeratinized odontogenic cyst is characterized by site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells.",
      },
    ],
  },
  {
    name: "Lateral periodontal cyst and botryoid odontogenic cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "LPCs and BOCs are rare, accounting for < 1% of odontogenic cysts.",
      "The majority present in the fifth to seventh decades of life with a male preponderance.",
      "The cysts are mainly localized in the mandibular canine / premolar alveolar bone, with 70% of LPCs and 85% of BOCs arising here; the remaining cases usually arise in the maxilla.",
      "Multifocal occurrence has been reported.",
      "LPC and BOC are asymptomatic in almost 90% of cases and usually identified incidentally on radiographs.",
      "They cause buccal alveolar bone expansion in 50% of cases.",
    ],
    criteria: [
      "site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
    ],
    morphology: [
      "LPC has an uninflamed fibrous wall lined by a thin, non-keratinized squamous or cuboidal epithelium 1–3 cells thick.",
      "Focal, whorled, plaque-like epithelial thickenings are present, identical to those found less frequently in gingival cyst of the adult.",
      "Clear cells are often found in the thickenings.",
      "BOC is multilocular with otherwise the same appearance.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Lateral periodontal cyst and botryoid odontogenic cyst is characterized by site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only).",
      },
    ],
  },
  {
    name: "Calcifying odontogenic cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "COC shows a worldwide distribution but is rare, accounting for < 1% of odontogenic cysts.",
      "There is no sex predilection, and the peak incidence is in the second and third decades of life.",
      "COC usually arises in the tooth-bearing segments of the jaws, almost equally in the maxilla and mandible.",
      "In the maxilla there is a strong predilection for the anterior segments, whereas mandibular lesions are more evenly distributed.",
      "Approximately 10% of cases are extraosseous with a predilection for the anterior mandibular gingiva.",
      "Most patients are asymptomatic, although intrabony lesions typically cause cortical expansion.",
    ],
    criteria: [
      "cystic architecture; numerous ghost cells.",
      "palisaded hyperchromatic basal cells; dentinoid.",
    ],
    morphology: [
      "COC is a unilocular cyst with a stratified epithelial lining of varying thickness, often loose, resembling stellate reticulum, and with palisaded and hyperchromatic columnar ameloblast-like basal cells.",
      "Cysts may show intraluminal and/or mural epithelial proliferation producing ameloblastoma-like areas.",
      "Ghost cells are characteristic rounded or stacked flattened pale eosinophilic cells within the epithelium, with distinct outlines and karyolysis resulting in a ghost-like appearance.",
      "These are variable in morphology and number, and they often calcify.",
      "Masses of ghost cells often pass into the connective tissue of the cyst wall, eliciting a foreign body reaction and inducing dentinoid (dentine-like matrix or mineralized tissue without a tubular structure).",
      "Although characteristic, ghost cells form in other odontogenic tumors and do not alone justify a diagnosis of COC.",
      "COCs can occur with odontomas or other mixed odontogenic tumors.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis includes dentinogenic ghost cell tumor and ghost cell odontogenic carcinoma.",
      },
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Calcifying odontogenic cyst is characterized by cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid.",
      },
    ],
  },
  {
    name: "Glandular odontogenic cyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "GOCs account for < 0.5% of odontogenic cysts.",
      "There is no sex predilection.",
      "The average age at presentation is about 50 years, with a peak in the fifth to seventh decades of life.",
      "GOC arises in tooth-bearing areas of the jaws.",
      "About 75% of cases are in the mandible.",
      "Mandibular and maxillary lesions have a propensity for the anterior regions.",
    ],
    criteria: [
      "a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular.",
      "a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
    ],
    morphology: [
      "GOCs are often multilocular cysts and are lined by epithelium of variable thickness, from a thin layer of flattened squamous or cuboidal cells to stratified squamous epithelium, often with whorled epithelial thickenings, or plaques similar to those in lateral periodontal cyst.",
      "Cuboidal or low columnar cells on the luminal surface (hobnail cells) are found in all cases.",
      "Other typical features include intraepithelial microcysts, apocrine metaplasia, clear cells, papillary projections (tufting), cilia, and mucous cells.",
      "Not all features are present in every case, and a higher number of features allows more confident diagnosis.",
    ],
    ihc: [],
    molecular: [
      "GOC is generally considered to be negative for MAML2 gene rearrangements.",
      "However, recent studies have shown rearrangements in lesions that meet the histological criteria for GOC.",
      "These lesions may have been central mucoepidermoid carcinoma at the outset, but it raises the possibility that some central mucoepidermoid carcinomas might develop from a pre-existing GOC, and MAML2 rearrangement studies must be interpreted with caution.",
    ],
    differential: [
      {
        name: "GOC",
        distinction:
          "GOC may show similar features to central mucoepidermoid carcinoma and this must be considered in the differential diagnosis.",
      },
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
      {
        name: "Odontogenic keratocyst",
        distinction:
          "Favor Odontogenic keratocyst when site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells. In contrast, Glandular odontogenic cyst is characterized by a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells.",
      },
    ],
  },
  {
    name: "Odontogenic keratocyst",
    group: "Cysts of the jaws",
    behavior: "",
    profile: [
      "OKCs are the third most commonly diagnosed odontogenic cyst and they have a worldwide distribution.",
      "They occur in all ages but show a dominant peak in the second or third decade of life and a second smaller peak in old age.",
      "There is a slight male predominance.",
      "OKCs are unique to the jaws, with a mandible-to-maxilla incidence ratio of 4:1.",
      "There is a strong predilection for the posterior mandible and ramus.",
      "Most patients are asymptomatic, and just under half have detectable swelling.",
    ],
    criteria: [
      "site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
    ],
    morphology: [
      "The histological features of OKC are diagnostic, unlike the more common odontogenic cysts.",
      "The cyst is lined by a thin stratified squamous epithelium, approximately 4–8 cells thick, typically without rete ridges.",
      "The surface typically shows corrugation with parakeratin; a small proportion shows focal orthokeratosis.",
      "The characteristic basal cells are hyperchromatic, palisaded, and range from cuboidal to columnar, with some limited reverse nuclear polarity but rarely subnuclear vacuolization.",
      "Cysts are usually uninflamed, but when they are secondarily inflamed the inflammatory reaction induces metaplastic change in the epithelium and these characteristic features are lost.",
      "Nonspecific changes can be seen, including cholesterol deposition, Rushton bodies, mucous or sebaceous cells, and even cartilage in the wall of the cyst.",
      "Some OKCs display basal budding with small rounded rete ridges.",
      "Many also have remnants of dental lamina and microcysts in their walls, and this tends to be more prominent in syndromic OKCs.",
      "OKCs have an increased proliferative capacity, as evidenced by increased mitoses and other indexes of cell proliferation.",
      "A controversial solid subtype of OKC has been reported, but care must be taken to distinguish this from keratin-producing ameloblastoma and well-differentiated squamous cell carcinoma.",
      "Rarely, odontogenic carcinoma can arise from the epithelial lining of OKCs, and this should be considered if solid areas have developed.",
      "OKCs treated by decompression before enucleation develop metaplastic changes and lose their unique diagnostic features.",
    ],
    ihc: [],
    molecular: [
      "Molecular analysis is not normally required, but finding PTCH1 mutations may help in differentiating ambiguous cystic lesions or possible malignant neoplasms that may mimic OKCs.",
    ],
    differential: [
      {
        name: "Radicular cyst",
        distinction:
          "Favor Radicular cyst when non-vital tooth; cyst lined by non-keratinizing epithelium. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Inflammatory collateral cysts",
        distinction:
          "Favor Inflammatory collateral cysts when associated with partially or recently erupted vital tooth; radiolucency distinct from dental follicle; intact lamina dura; non-keratinized epithelium. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Surgical ciliated cyst",
        distinction:
          "Favor Surgical ciliated cyst when a history of previous surgery; a radiolucent, well-demarcated cyst; respiratory epithelial lining. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Nasopalatine duct cyst",
        distinction:
          "Favor Nasopalatine duct cyst when epicentre in the incisive canal; lining of non-keratinized squamous or respiratory epithelium. Desirable: a neurovascular bundle in the cyst wall. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Gingival cysts",
        distinction:
          "Favor Gingival cysts when for GCA: site in attached gingiva; thin epithelial lining; for GCI: site in alveolar ridge; patient aged < 3 months. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Dentigerous cyst",
        distinction:
          "Favor Dentigerous cyst when a well-defined radiolucency associated with the crown of an unerupted tooth; epithelium and cyst wall attached to the cementoenamel junction of the unerupted tooth. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Orthokeratinized odontogenic cyst",
        distinction:
          "Favor Orthokeratinized odontogenic cyst when site in a tooth-bearing area of the jaw; thin, regular epithelial lining with orthokeratinization. Desirable: prominent granular cell layer; flat basal cells. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Lateral periodontal cyst and botryoid odontogenic cyst",
        distinction:
          "Favor Lateral periodontal cyst and botryoid odontogenic cyst when site on the lateral aspect or between the roots of vital erupted teeth; characteristic whorled epithelial plaques; multilocular (BOC only). In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Calcifying odontogenic cyst",
        distinction:
          "Favor Calcifying odontogenic cyst when cystic architecture; numerous ghost cells. Desirable: palisaded hyperchromatic basal cells; dentinoid. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
      {
        name: "Glandular odontogenic cyst",
        distinction:
          "Favor Glandular odontogenic cyst when a radiolucent cystic lesion in a tooth-bearing area of the jaw; often multilocular. Desirable: a lining of variable thickness with epithelial thickenings, plaques, or papillary projections; luminal columnar or cuboidal (hobnail) cells; microcysts or duct-like structures; mucous or clear cells. In contrast, Odontogenic keratocyst is characterized by site in the jaws; stratified squamous epithelial lining with surface parakeratin; palisaded hyperchromatic basal cells.",
      },
    ],
  },
  {
    name: "Adenomatoid odontogenic tumor",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "AOT accounts for < 10% of odontogenic tumors.",
      "Two thirds of cases are in female patients.",
      "Although AOTs have been reported over a wide age range, > 80% are diagnosed in the second and third decades of life.",
      "AOT appears almost exclusively within the jawbones, with two thirds of cases in the maxilla, most commonly in the anterior regions.",
      "Three quarters of cases are associated with an unerupted permanent tooth, usually the maxillary canine, and expand the follicle.",
      "The rarer extraosseous lesion occurs mainly in the anterior maxillary gingiva.",
    ],
    criteria: [
      "site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma.",
      "encapsulation; young patient; association with tooth follicle.",
    ],
    morphology: [
      "AOTs are encapsulated and contain variably sized nodules of spindle, cuboidal, and columnar epithelial odontogenic cells, with minimal stroma.",
      "Within the nodules are rosette- or duct-like structures, which when frequent produce the adenomatoid or gland-like appearance.",
      "In some tumors, the duct-like spaces can be inconspicuous.",
      "Between the epithelial cells and in the center of the rosette-like structures, eosinophilic amorphous secretory material similar to enamel matrix is present.",
      "Anastomosing strands of epithelial cells in a plexiform pattern are often present and are more prominent at the periphery.",
      "Small foci of calcification, dentinoid matrix, and hemorrhage are variably seen.",
      "AOTs may contain cysts lined by non-keratinizing stratified epithelium, resembling a dentigerous cyst when AOT develops in a dental follicle.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "AOT-like areas have been recognized within other odontogenic tumors, including odontomas, adenomatoid odontogenic hamartoma, adenomatoid dentinoma, and adenoid ameloblastoma, and AOT may contain areas resembling calcifying epithelial odontogenic tumor with clear cells.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "These histological overlaps make radiological and clinical correlation essential for definitive diagnosis.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Adenomatoid odontogenic tumor is characterized by site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle.",
      },
    ],
  },
  {
    name: "Squamous odontogenic tumor",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "The mean age at diagnosis is 34.8 years, with an almost equal prevalence in men and women.",
      "Multifocal SOTs tend to present in a younger age group and show a marked predilection for African Americans.",
      "SOT affects the tooth-bearing parts of the jaws.",
      "Most are solitary lesions with a predilection for the anterior maxilla and posterior mandible.",
      "Multifocal and peripheral SOTs have been reported.",
      "SOT usually present as an asymptomatic swelling.",
    ],
    criteria: [
      "location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
    ],
    morphology: [
      "SOT comprises variably sized and shaped islands of cytologically bland well-differentiated squamous epithelium in a fibrous or myxoid stroma.",
      "The peripheral cells of the islands are flat to cuboidal, with very infrequent mitoses.",
      "The central cells have a tendency for cystic degeneration, individual cell keratinization, and calcification.",
      "Mucous metaplasia, sebaceous differentiation, and ghost cell–like areas may be present as minor changes.",
      "SOT does not exhibit peripheral palisading, reverse nuclear polarity, cellular atypia, or pleomorphism.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The entities should include acanthomatous ameloblastoma, desmoplastic ameloblastoma, and well-differentiated squamous cell carcinoma.",
      },
      {
        name: "SOT-like proliferation of epithelium",
        distinction:
          "SOT-like proliferation of epithelium may develop in the lining of odontogenic cysts and is a close histological mimic of SOT.",
      },
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Squamous odontogenic tumor is characterized by location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum.",
      },
    ],
  },
  {
    name: "Calcifying epithelial odontogenic tumor",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "Central lesions occur across a wide age range (8–83 years), with a maximum incidence in the fourth decade of life and with an equal sex distribution.",
      "The clear cell subtype arises in a slightly older patient population, with a female predominance.",
      "CEOTs arise in tooth-bearing areas of the jaws.",
      "Approximately 60% occur in the mandible, with a predilection for the body.",
      "Over 85% of CEOTs arise centrally, the remainder occurring at adjacent extraosseous sites.",
      "Many CEOTs are asymptomatic.",
    ],
    criteria: [
      "radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid.",
      "prominent intercellular bridges; pleomorphism.",
    ],
    morphology: [
      "The histological features are variable.",
      "There are clear cell, macrocystic/microcystic, and non-calcifying / Langerhans cell–rich histological subtypes.",
      "Lesions with mixed CEOT and adenomatoid odontogenic tumor features should be classified as adenomatoid odontogenic tumor subtypes.",
      "Most CEOTs comprise sheets, cords, or nests of polyhedral epithelial cells with distinct cell borders and prominent intercellular bridges.",
      "Nuclear pleomorphism may be present, and sometimes extreme, but mitoses are very rare.",
      "Classic CEOTs contain deposits of amorphous, lightly eosinophilic amyloid composed of ameloblast-associated proteins including odontogenic ameloblast-associated protein (ODAM).",
      "This stains with Congo red and is birefringent on polarization.",
      "The amyloid may calcify, forming large masses or small, round, concentric, densely basophilic calcifications with Liesegang rings.",
      "CEOT may extend into adjacent medullary spaces in an infiltrative pattern, which is worrisome for malignancy.",
      "Foci resembling CEOT may be found in odontomas and the follicles of unerupted teeth.",
    ],
    ihc: [],
    molecular: [
      "EWSR1 gene rearrangement may aid in the differentiation of the clear cell subtype of CEOT from clear cell odontogenic carcinoma.",
    ],
    differential: [
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Calcifying epithelial odontogenic tumor is characterized by radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor.",
      },
    ],
  },
  {
    name: "Ameloblastoma, unicystic",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "UAM accounts for 5–22% of all ameloblastomas.",
      "For UAM associated with impacted teeth, the mean patient age is 16 years, versus 35 years for UAM in the absence of tooth impaction.",
      "Approximately 50% of cases are diagnosed in the second decade of life, and there is a slight male predominance.",
      "Most UAMs develop in the posterior body and the ramus of the mandible.",
      "UAM is usually an asymptomatic jaw swelling.",
    ],
    criteria: [
      "a single cyst; an ameloblastic epithelial lining.",
      "detection of luminal and mural extension for subtype diagnosis.",
    ],
    morphology: [
      "A single cyst lined by epithelium, with a palisaded columnar basal layer with reverse polarity and stellate reticulum–like upper layers in most of the lining, constitutes the luminal subtype.",
      "Additional plexiform epithelial masses may extend into the lumen only, constituting the intraluminal type.",
      "Additional islands of epithelium extending into the wall constitute the mural subtype.",
      "Extensive sampling is required for accurate definition of subtype.",
      "Similar but focal changes may be seen in dentigerous and radicular cysts, especially in areas of inflammation.",
    ],
    ihc: [],
    molecular: [
      "BRAF p.V600E immunohistochemistry and genetic testing have potential but are not yet validated for diagnosis.",
    ],
    differential: [
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Ameloblastoma, unicystic is characterized by a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis.",
      },
    ],
  },
  {
    name: "Ameloblastoma, extraosseous/peripheral",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "EA accounts for as many as 10% of all ameloblastomas.",
      "The mean patient age is 52 years (range: 9–92 years), with 64% of cases occurring during the fifth to seventh decades of life.",
      "The M:F ratio is 1.4:1; however, a greater male predilection has been reported in some Asian series.",
      "EA occurs only in soft tissues overlying tooth-bearing areas or edentulous ridges of the jaws, with a mandible-to-maxilla ratio of 1.6:1 to 3.3:1.",
      "The most frequent subsites are the mandibular premolar and maxillary molar regions; the lingual aspect of the alveolar ridge is often involved.",
      "EA is an asymptomatic, slow-growing, firm epulis with a mean diameter of < 20 mm.",
    ],
    criteria: [
      "site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
    ],
    morphology: [
      "The histopathological features and growth patterns are the same as in conventional ameloblastoma.",
    ],
    ihc: [
      "BerEP4 expression on immunohistochemistry may aid in distinguishing intraoral basal cell carcinoma from EA.",
    ],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis includes peripheral odontogenic fibroma, peripheral squamous odontogenic tumor, odontogenic gingival epithelial hamartoma, and intraoral basal cell carcinoma.",
      },
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Ameloblastoma, extraosseous/peripheral is characterized by site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma.",
      },
    ],
  },
  {
    name: "Ameloblastoma, conventional",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "AM is the most common odontogenic neoplasm in all ethnic groups, representing approximately 1% of all head and neck neoplasms in Europe and the USA, probably with the highest incidence in African and Afro-Caribbean populations.",
      "The incidence of AM is approximately 0.052–0.092 new cases per 100 000 person-years worldwide, and there is no sex predilection.",
      "The peak incidence of diagnosis is in the fourth and fifth decades of life, with a patient age range of 8–92 years.",
      "The diagnosis is generally made at a somewhat lower age in women, especially in populations of African heritage.",
      "For BRAF p.V600E–mutant cases, the reported mean patient age at diagnosis is about 34 years, compared with about 54 years for BRAF wildtype cases.",
      "As many as 87% of AMs arise in the mandible, predominantly in the posterior molar area.",
    ],
    criteria: [
      "location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
    ],
    morphology: [
      "In the commonest histological subtype, the follicular subtype, there are islands of epithelium resembling the epithelial component of the enamel organ in a fibrous stroma.",
      "Peripheral cells are columnar to cuboidal (ameloblast-like), with hyperchromatic nuclei arranged in a palisading pattern with reverse polarity, and often subnuclear vacuolation.",
      "The central epithelium is reminiscent of stellate reticulum, with loosely arranged angular cells, and often undergoes cystic change.",
      "The second commonest subtype is the plexiform subtype, composed of anastomosing strands of ameloblastomatous epithelium with an inconspicuous stellate reticulum, less prominent ameloblast-like cells, and cyst-like degeneration in the stroma rather than the epithelium.",
      "Mitoses are usually scattered but posterior maxillary AM may have high cellularity and frequent mitoses.",
      "Several other subtypes are recognized.",
      "The acanthomatous subtype has squamous differentiation centrally in islands but maintains the reverse polarization of the nuclei in peripheral columnar cells.",
      "In the granular cell subtype the central epithelium develops abundant eosinophilic granular cytoplasm.",
      "The basal cell subtype comprises islands and strands of basaloid cells with scant cytoplasm and peripheral palisading, reminiscent of basal cell carcinoma.",
      "The desmoplastic subtype has more widely dispersed islands with spiky outlines, cuboidal to flat peripheral cells, and central spindle-shaped cells in a densely collagenous stroma, sometimes with osteoplasia.",
      "Many AMs contain more than one histological subtype.",
    ],
    ihc: [],
    molecular: [
      "BRAF p.V600E immunohistochemistry and genetic testing have potential but are not yet validated for diagnosis.",
    ],
    differential: [
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Ameloblastoma, conventional is characterized by location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia.",
      },
    ],
  },
  {
    name: "Adenoid ameloblastoma",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "Incidence peaks in the fourth decade of life, with a slight male predilection (M:F ratio: 1.3:1), but there is a wide age range (15–82 years).",
      "Most AAs have occurred in South America and Asia.",
      "No site predilection defined",
      "There is usually a painless swelling, with a mean diameter of 40 mm.",
      "Sometimes there is pain and paraesthesia.",
    ],
    criteria: [
      "an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture.",
      "dentinoid; clear cells; focal ghost cell keratinization.",
    ],
    morphology: [
      "AA is characterized by a partly cribriform arrangement of basal ameloblast-like cells demonstrating reversed nuclear polarity and a minor component of suprabasal stellate reticulum–like epithelium.",
      "Basal cells may be multilayered, with a transition to a round or ovoid morphology.",
      "Distinctive features are duct-like structures formed by cuboidal to columnar cells, some of which contain mucin, and focal whorled cellular condensations reminiscent of morules.",
      "Two thirds of cases contain varying amounts of dentinoid.",
      "Clear cells are often closely associated with dentinoid, and ghost cell keratinization may be a minor feature.",
    ],
    ihc: [
      "There is variable staining for CK14, CK19, p40, p16, and p53.",
      "CK7 is weak to negative.",
      "Nuclear β-catenin positivity colocalizes with morules, and Ki-67 indexes are usually high [[Bilodeau EA, Seethala R.",
      "Adenoid ameloblastoma: a series of 5 tumors.",
      "Oral Surg Oral Med Oral Pathol Oral Radiol.",
      "2019 Jul;128(1):e78. doi:10.1016/j.oooo.2019.02.196.]].",
    ],
    molecular: [],
    differential: [
      {
        name: "There",
        distinction:
          "There are overlapping histomorphological features with adenomatoid odontogenic tumor and dentinogenic ghost cell tumor, but AA is distinguished by the combination of cribriform pattern, duct-like structures, whorls/morules, and dentinoid.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "A lack of EWSR1 rearrangement aids the exclusion of clear cell odontogenic carcinoma when clear cells are prominent.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Criteria to distinguish aggressive AA from odontogenic carcinoma with dentinoid are not yet defined.",
      },
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
      {
        name: "Metastasizing ameloblastoma",
        distinction:
          "Favor Metastasizing ameloblastoma when benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis. In contrast, Adenoid ameloblastoma is characterized by an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization.",
      },
    ],
  },
  {
    name: "Metastasizing ameloblastoma",
    group: "Benign epithelial odontogenic tumors",
    behavior: "",
    profile: [
      "Incidence data are only available combined with ameloblastic carcinoma, which is more common; the combined annual cumulative incidence is 1.79 cases per 10 million person-years.",
      "MA has a mean age at diagnosis of 45 years and a slight male predominance.",
      "The primary tumor develops more frequently in the mandible than in the maxilla.",
      "The most common sites of metastasis are the lungs, followed by the cervical lymph nodes, with distant metastasis in approximately 68% of MAs.",
      "Infrequently reported metastatic sites include bone, brain, liver, and pericardium.",
      "Symptoms vary by site; some patients are asymptomatic.",
    ],
    criteria: [
      "benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
    ],
    morphology: [
      "MA exhibits identical histopathological features to conventional ameloblastoma, with no specific features predicting metastasis.",
      "Among reported MA cases, the plexiform histological pattern is most common.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Adenomatoid odontogenic tumor",
        distinction:
          "Favor Adenomatoid odontogenic tumor when site in alveolar processes of jaws; epithelial nodular structure; rosettes of spindled to columnar epithelial cells; duct-like structures; minimal stroma. Desirable: encapsulation; young patient; association with tooth follicle. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Squamous odontogenic tumor",
        distinction:
          "Favor Squamous odontogenic tumor when location in tooth-bearing areas of jaw; closely packed islands of cytologically bland epithelium; uniform squamous differentiation without significant keratinization; no peripheral palisading or stellate reticulum. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Calcifying epithelial odontogenic tumor",
        distinction:
          "Favor Calcifying epithelial odontogenic tumor when radiology: a unilocular or (less commonly) multilocular lesion, which may be radiolucent or of mixed radiodensity; histology: sheets, islands, and cords of polyhedral cells with distinct cell borders and very few or no mitoses; presence of amyloid. Desirable: prominent intercellular bridges; pleomor. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Ameloblastoma, unicystic",
        distinction:
          "Favor Ameloblastoma, unicystic when a single cyst; an ameloblastic epithelial lining. Desirable: detection of luminal and mural extension for subtype diagnosis. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Ameloblastoma, extraosseous/peripheral",
        distinction:
          "Favor Ameloblastoma, extraosseous/peripheral when site in the gingiva or edentulous alveolar mucosa; no intraosseous component; histopathological features of conventional ameloblastoma. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Ameloblastoma, conventional",
        distinction:
          "Favor Ameloblastoma, conventional when location in jaws; islands/strands of odontogenic epithelium bounded by cuboidal/columnar cells with palisaded, hyperchromatic nuclei; reverse polarity (less marked in the plexiform pattern); loose central epithelium resembling stellate reticulum; no cytological atypia. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
      {
        name: "Adenoid ameloblastoma",
        distinction:
          "Favor Adenoid ameloblastoma when an ameloblastoma-like component; duct-like structures; whorls/morules; cribriform architecture. Desirable: dentinoid; clear cells; focal ghost cell keratinization. In contrast, Metastasizing ameloblastoma is characterized by benign conventional ameloblastoma in the primary tumor and metastasis; no cytological atypia or features of malignancy in the primary tumor or metastasis.",
      },
    ],
  },
  {
    name: "Odontoma",
    group: "Benign mixed odontogenic tumors",
    behavior: "",
    profile: [
      "Among referral series of odontogenic tumors, odontoma is the second most common lesion, frequently occurring in the second and third decades of life, without a distinct sex predilection, but many small odontomas are treated outside hospital or left untreated.",
      "CxOs develop mainly in the posterior body of the mandible, CdOs in the anterior maxilla.",
      "Odontomas are asymptomatic, slow-growing lesions, often associated with unerupted teeth.",
      "The diameter is typically 10–30 mm; larger lesions expand the jaws, displace and resorb teeth, and prevent tooth eruption.",
      "Odontomas as large as 80 mm in diameter can be encountered.",
      "Odontomas occasionally erupt or sustain trauma and may become infected.",
    ],
    criteria: [
      "Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine.",
      "dental pulp; cementum.",
      "Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures.",
    ],
    morphology: [
      "CxO consists of a disorganized mass of mature tubular dentine intermixed with rounded zones of enamel matrix where enamel has been lost on decalcification, with areas of dental pulp and cementum.",
      "CdO contains multiple rudimentary teeth exhibiting dentine and enamel matrix.",
      "Dentine in odontomas usually shows some irregularity of tubule structure.",
      "A variable amount of loose connective tissue and capsule may be present, resembling dental papilla or follicle.",
      "These may contain varying amounts of immature odontogenic epithelium in islands and strands.",
      "These epithelial residues may be prominent and may contain ghost cells, granular cells, and other features resembling other odontogenic tumors, but these are hamartomatous and of no significance.",
      "Developing odontomas are initially soft tissue, mostly dental papilla–like with prominent epithelial strands, and there may be limited or no evidence of dental hard tissue induction.",
      "They resemble ameloblastic fibroma closely and may be difficult to differentiate histologically.",
      "Lesions previously diagnosed as AFD and AFO also resemble ameloblastic fibroma, with less prominent and less well organized induction of dental hard tissue matrix or hard tissue than in odontomas.",
      "Radiographic appearance, patient age, and lesion size may help distinguish these lesions.",
      "AFD and AFO were previously classified as developing odontomas.",
      "However, a proportion of AFDs and fewer AFOs harbour BRAF p.V600E mutations, suggesting a relationship with ameloblastic fibroma, rather than with odontomas, which lack this mutation.",
      "Histological and molecular overlap makes it unclear whether AFD and AFO are separate entities, intermediate lesions with a spectrum of behavior that ultimately result in the formation of odontoma, or a mixture of developing odontomas and ameloblastic fibromas.",
      "Odontomas are occasionally the origin of cysts of the dentigerous type.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Primordial odontogenic tumor",
        distinction:
          "Favor Primordial odontogenic tumor when a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface. In contrast, Odontoma is characterized by Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Favor Ameloblastic fibroma when consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium. In contrast, Odontoma is characterized by Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures.",
      },
      {
        name: "Dentinogenic ghost cell tumor",
        distinction:
          "Favor Dentinogenic ghost cell tumor when a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority. In contrast, Odontoma is characterized by Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures.",
      },
    ],
  },
  {
    name: "Primordial odontogenic tumor",
    group: "Benign mixed odontogenic tumors",
    behavior: "",
    profile: [
      "The age range is 2–19 years (mean: 11.4 years) and there is a slight male predilection.",
      "POT arises in the tooth-bearing segments of the jaw and occurs 2–3 times as frequently in the mandible as in the maxilla.",
      "Most cases are asymptomatic.",
      "Some POTs produce marked cortical expansion.",
    ],
    criteria: [
      "a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium.",
      "focal stellate reticulum–like cells externally; lobular clefted surface.",
    ],
    morphology: [
      "POT comprises loose or myxoid fibrous tissue containing variable numbers of fusiform and stellate fibroblasts and areas with the appearance of cellular odontogenic mesenchyme.",
      "The periphery is covered by a single layer of columnar or cuboidal epithelium, with scant superficial layers of stellate reticulum–like cells partially enclosed by a thin fibrous capsule.",
      "Epithelial cords may appear to be within the lesion as a result of lobular infolding.",
      "Extracellular concentric mineralized structures within the epithelium have been reported, but there is no evidence of odontoblastic differentiation or mature dentine.",
    ],
    ihc: [
      "Mesenchymal cells are positive for vimentin, and subepithelial expression of CD34 and CD138 have been demonstrated in several cases.",
      "The Ki-67 index is low (< 5%).",
      "The epithelial component is positive for pancytokeratins (AE1/AE3), CK5, and CK14, whereas CK19 is usually expressed by the columnar cells.",
      "Amelogenin, ameloblastin, and DSPP have also been detected.",
      "Other markers are variably expressed.",
    ],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "POT resembles a mesenchymal proliferation very similar to the dental papilla of a developing tooth.",
      },
      {
        name: "Odontoma",
        distinction:
          "Favor Odontoma when Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures. In contrast, Primordial odontogenic tumor is characterized by a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Favor Ameloblastic fibroma when consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium. In contrast, Primordial odontogenic tumor is characterized by a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface.",
      },
      {
        name: "Dentinogenic ghost cell tumor",
        distinction:
          "Favor Dentinogenic ghost cell tumor when a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority. In contrast, Primordial odontogenic tumor is characterized by a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface.",
      },
    ],
  },
  {
    name: "Ameloblastic fibroma",
    group: "Benign mixed odontogenic tumors",
    behavior: "",
    profile: [
      "AF accounts for up to 2% of all odontogenic tumors.",
      "The mean patient age is 15 years (range: 7 weeks to 61 years), with 80% of cases occurring in patients aged < 22 years.",
      "The M:F ratio is 1.4:1.",
      "AFs are 3 times as frequent in the mandible as in the maxilla.",
      "The posterior mandible is the most common location, with lesions in the incisor–canine region being infrequent in both jaws, although large lesions (~10%) can occupy as much as a jawbone quadrant.",
      "Most AFs (78%) are slow-growing and eventually cause asymptomatic jawbone expansion.",
    ],
    criteria: [
      "consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium.",
    ],
    morphology: [
      "The mesenchymal component is myxoid and evenly hypercellular and resembles the dental papilla of the tooth bud.",
      "The epithelial component forms long, narrow cords and strands of bilaminar cuboidal to columnar palisaded cells with occasional thickenings.",
      "These may contain a minor component of stellate reticulum–like tissue, resembling the follicular stage of the enamel organ.",
      "A collagenous capsule may be present.",
      "No dental hard tissue is normally present but extensive sampling may reveal small foci.",
      "From histopathological features alone, it may not be possible to distinguish between the neoplastic AF and early-stage hamartomatous odontomas before they differentiate and mature.",
      "In general, AF lacks architectural organization and is more evenly and densely hypercellular.",
      "Lesions previously diagnosed as AFD and AFO are histologically intermediate between AF and odontomas and have previously been classified as developing stages of odontoma.",
      "The status of these tumors has been debated for decades, and the current classification as odontoma is not consistent with the BRAF p.V600E mutations, occasional cases with locally aggressive biological behavior, large size, and recurrence, which appear neoplastic.",
      "AFD and AFO resemble AF but with the additional induction of dental hard tissue matrix (AFD) or dentine and enamel (AFO).",
      "It is unclear whether these intermediate lesions are a mixture of odontomas and AFs with hard tissue induction or if they form a spectrum of behavior, and currently this cannot be resolved histopathologically.",
    ],
    ihc: [],
    molecular: [
      "The diagnostic relevance of BRAF mutation is not yet defined, but it appears useful for excluding developing odontoma in selected cases.",
    ],
    differential: [
      {
        name: "Odontoma",
        distinction:
          "Favor Odontoma when Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures. In contrast, Ameloblastic fibroma is characterized by consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium.",
      },
      {
        name: "Primordial odontogenic tumor",
        distinction:
          "Favor Primordial odontogenic tumor when a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface. In contrast, Ameloblastic fibroma is characterized by consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium.",
      },
      {
        name: "Dentinogenic ghost cell tumor",
        distinction:
          "Favor Dentinogenic ghost cell tumor when a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority. In contrast, Ameloblastic fibroma is characterized by consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium.",
      },
    ],
  },
  {
    name: "Dentinogenic ghost cell tumor",
    group: "Benign mixed odontogenic tumors",
    behavior: "",
    profile: [
      "DGCT is rare, and the second most common of the ghost cell–rich odontogenic tumors, all of which have a predilection for Asian men.",
      "In Asia, DGCT accounts for 0.3–0.5% of all odontogenic tumors.",
      "There are almost twice as many male patients as female patients.",
      "The mean age at presentation is between 40 and 47 years (range: 1–84 years) and most cases are diagnosed between the third and fifth decades of life.",
      "DGCT arises with almost equal incidence in the mandible and maxilla, with a predilection for the posterior region in both jaws.",
      "As many as 25% of all DGCTs are peripheral, located in the gingiva or alveolar ridge mucosa.",
    ],
    criteria: [
      "a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid.",
      "scarce mitotic figures; mild cellular pleomorphism in a minority.",
    ],
    morphology: [
      "DGCTs are composed of nests, islands, and sheets of odontogenic epithelium resembling conventional ameloblastoma, with cuboidal to columnar hyperchromatic basal cells that have reverse nuclear polarity at least focally.",
      "Tissue resembling stellate reticulum usually lies centrally in islands and may undergo cystic degeneration.",
      "Frequently, nests or eddies of basaloid cells are observed within the cellular areas, and occasional aggregates of clear cells may be present.",
      "DGCT is characterized by epithelial cells with aberrant ghost cell keratinization, forming large rounded or stacked flattened cells with homogeneous pale eosinophilic cytoplasm with a pale or clear central hole where the nucleus is missing.",
      "The number of ghost cells is variable, ranging from scattered individual cells to small clusters and to large masses, but they are a prominent feature and ghost cells can replace the epithelial islands entirely.",
      "Ghost cells often undergo mineralization.",
      "Clusters of ghost cells frequently pass into the fibrous connective tissue, where they may induce a foreign body giant cell reaction.",
      "Dentinoid material is frequent and characteristic, especially in close association with the epithelial component.",
      "The dentinoid forms irregular eosinophilic masses that often entrap individual or groups of epithelial cells and ghost cells.",
      "Mineralization of dentinoid is frequent and may be followed by remodelling to produce a mixed dentinoid and bone-like appearance.",
      "Mineralization of dentinoid, and to a lesser degree that of the ghost cells, defines the radiological features of the tumor.",
      "The relative amounts of ameloblastomatous epithelium, ghost cells, and dentinoid material vary from tumor to tumor.",
      "In general, mitotic figures are scarce, but cellular pleomorphism can be present; however, it should not be interpreted as evidence of malignant transformation.",
      "The proliferation fraction on Ki-67 immunohistochemistry ranges from 2% to 29%.",
    ],
    ihc: [
      "Immunohistochemical stains for CK14 and CK19 highlight the epithelial component.",
    ],
    molecular: [],
    differential: [
      {
        name: "This includes calcifying odontogenic cyst",
        distinction:
          "This includes calcifying odontogenic cyst, adenoid ameloblastoma, ghost cell carcinoma, and the poorly defined odontogenic carcinoma with dentinoid.",
      },
      {
        name: "Odontoma",
        distinction:
          "Favor Odontoma when Complex odontoma Essential: consistent radiographic features; a conglomerate mass of enamel and dentine. Desirable: dental pulp; cementum. Compound odontoma Essential: consistent radiographic features; multiple small, tooth-like structures. In contrast, Dentinogenic ghost cell tumor is characterized by a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority.",
      },
      {
        name: "Primordial odontogenic tumor",
        distinction:
          "Favor Primordial odontogenic tumor when a mass of myxoid dental papilla–like tissue; entire periphery covered by columnar or cuboidal enamel epithelium. Desirable: focal stellate reticulum–like cells externally; lobular clefted surface. In contrast, Dentinogenic ghost cell tumor is characterized by a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority.",
      },
      {
        name: "Ameloblastic fibroma",
        distinction:
          "Favor Ameloblastic fibroma when consistent radiographic features; bland, hypercellular, dental papilla–like mesenchyme; dispersed bilaminar strands of cuboidal or columnar odontogenic epithelium. In contrast, Dentinogenic ghost cell tumor is characterized by a solid tumor; conventional ameloblastoma-like epithelium; ghost cells; dentinoid. Desirable: scarce mitotic figures; mild cellular pleomorphism in a minority.",
      },
    ],
  },
  {
    name: "Odontogenic fibroma",
    group: "Benign mesenchymal odontogenic tumors",
    behavior: "",
    profile: [
      "Central OdFs have a female predilection (M:F ratio: 1:2.2) and develop over a wide age range, with a mean age at presentation of 34 years.",
      "Although conflicting results have been reported, the maxilla appears slightly more frequently affected.",
      "Most maxillary central OdFs occur anterior to the first molar, whereas slightly more than half of all mandibular tumors are found posterior to the first molar.",
      "Small OdFs are usually asymptomatic, whereas larger tumors present with localized swelling, loosening of teeth, and associated pain.",
      "OdFs on the anterior maxillary alveolus often have a characteristic depression rather than expansion.",
    ],
    criteria: [
      "site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity.",
      "odontogenic epithelial nests or cords.",
    ],
    morphology: [
      "OdFs are composed of moderately cellular, bland fibrous tissue with moderate to dense collagen content, accompanied by varying amounts of dispersed, inactive-appearing odontogenic epithelial nests and cords, which are sometimes completely absent.",
      "There may be minor hard tissue formation in the form of mineralized dentinoid, or round, dense, basophilic, cementum-like mineralizations, both associated with the odontogenic epithelium.",
      "Several rare subtypes of central OdF have been described.",
      "The amyloid subtype is characterized by amyloid deposits, with Langerhans cells often present in the epithelial elements.",
      "This subtype accounts for approximately 16% of all cases.",
      "These non-calcifying Langerhans cell–rich lesions have also been considered to be part of the spectrum of calcifying epithelial odontogenic tumor, and their correct classification remains unclear.",
      "The site, sex predilection, and biological behavior of this subtype more closely resemble those of OdF.",
      "The granular cell subtype is composed of granular cells with variable amounts of odontogenic epithelium and accounts for about 5% of lesions.",
      "Completely granular central OdFs are sometimes referred to as granular cell odontogenic tumors but are best regarded as a subtype of OdF.",
      "An ossifying subtype, demonstrating OdF components intermingled with ossifying fibroma–like tissue, has also been reported.",
      "OdFs with hybrid features of central giant cell granuloma and OdF have been described.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis should include sclerosing odontogenic carcinoma.",
      },
      {
        name: "This",
        distinction:
          "This shows infiltration, but diagnosis can be challenging because of epithelial neurotropism of benign odontogenic epithelium in OdF.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Small radiolucent lesions surrounding the crowns of impacted teeth and showing histological features of OdF should be diagnosed as hyperplastic dental follicles and are not neoplasms.",
      },
      {
        name: "Peripheral OdF arises extraosseously on the gingiva",
        distinction:
          "Peripheral OdF arises extraosseously on the gingiva, usually anteriorly, and shares some histological features and its name with OdF, but there is little evidence that peripheral OdFs are neoplastic, and they appear to be unrelated to intraosseous OdF.",
      },
      {
        name: "Peripheral OdFs",
        distinction:
          "Peripheral OdFs are much more common than OdF, with a similar female predominance and a peak incidence in the second to fourth decades of life.",
      },
      {
        name: "Peripheral OdFs",
        distinction: "Peripheral OdFs are treated by surgical excision.",
      },
      {
        name: "A recurrence rate as high as 50%",
        distinction:
          "A recurrence rate as high as 50% has been reported, but this is almost abolished if excision extends to the periodontal ligament.",
      },
      {
        name: "Cementoblastoma",
        distinction:
          "Favor Cementoblastoma when a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component. In contrast, Odontogenic fibroma is characterized by site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords.",
      },
      {
        name: "Cemento-ossifying fibroma",
        distinction:
          "Favor Cemento-ossifying fibroma when location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications. In contrast, Odontogenic fibroma is characterized by site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords.",
      },
      {
        name: "Odontogenic myxoma",
        distinction:
          "Favor Odontogenic myxoma when arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests. In contrast, Odontogenic fibroma is characterized by site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords.",
      },
    ],
  },
  {
    name: "Cementoblastoma",
    group: "Benign mesenchymal odontogenic tumors",
    behavior: "",
    profile: [
      "CB is a relatively rare tumor, accounting for about 3% of all odontogenic tumors.",
      "There is a wide age range, with the highest incidence in the second and third decades of life.",
      "There is no sex predilection.",
      "CB develops on the apical third of a tooth root, most frequently in the posterior mandible, usually on the permanent first molar.",
      "Teeth in the mandibular premolar and maxillary molar regions are the second most frequently affected.",
      "Involvement of deciduous teeth is rare.",
    ],
    criteria: [
      "a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component.",
    ],
    morphology: [
      "CB resembles osteoblastoma histologically.",
      "The bulk of the lesion is composed of a mass of dense cellular cementum resembling bone, often with prominent reversal lines, fused with the resorbed surface of the tooth root.",
      "At the periphery there are radiating finger-like trabeculae of newly formed matrix, often associated with plump cementoblasts and cementoclasts and vascular immature fibrous tissue.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "This should include cemento-osseous dysplasia.",
        distinction: "This should include cemento-osseous dysplasia.",
      },
      {
        name: "Odontogenic fibroma",
        distinction:
          "Favor Odontogenic fibroma when site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords. In contrast, Cementoblastoma is characterized by a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component.",
      },
      {
        name: "Cemento-ossifying fibroma",
        distinction:
          "Favor Cemento-ossifying fibroma when location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications. In contrast, Cementoblastoma is characterized by a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component.",
      },
      {
        name: "Odontogenic myxoma",
        distinction:
          "Favor Odontogenic myxoma when arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests. In contrast, Cementoblastoma is characterized by a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component.",
      },
    ],
  },
  {
    name: "Cemento-ossifying fibroma",
    group: "Benign mesenchymal odontogenic tumors",
    behavior: "",
    profile: [
      "COF occurs over a broad age range, with a peak in the third to fourth decades of life, and has a female predilection (M:F ratio: as low as 1:5).",
      "The tumor arises in White patients primarily, followed by patients of African descent.",
      "The mandible is involved much more frequently than the maxilla, with a predilection for the mandibular premolar and molar region.",
      "Whether non-odontogenic lesions with similar histology that arise in craniofacial bones outside the jaws are related is unclear.",
      "COF typically causes painless jaw expansion.",
      "Growth is slow, but COF can reach a considerable size if left untreated.",
    ],
    criteria: [
      "location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated.",
      "slow, continuous growth; cementum-like calcifications.",
    ],
    morphology: [
      "COF consists of variable proportions of fibrous and mineralized tissue, more heavily mineralized centrally, and with a thin fibrous capsule or well-demarcated margin from the surrounding normal bone.",
      "The fibroblastic stroma may have areas of hypercellularity and show nuclear hyperchromasia but no pleomorphism, and mitoses are infrequent.",
      "Stromal vascularity is generally low.",
      "A fibro-osseous appearance of condensation of woven bone from stroma must be present at least focally.",
      "COF exhibits considerable variation in the amount and type of mineralization, even within a single lesion.",
      "Woven to lamellar bone and osteoid may be present, as well as dense, acellular or paucicellular, basophilic, rounded, cementum-like calcifications that form round droplets, irregular bulbous forms, and fine brush-stroke forms.",
      "The bony trabeculae may form thick anastomosing strands or fuse into large sheets centrally.",
      "Osteoblastic rimming is frequent and there is bone remodelling in the lesion, with infrequent osteoclasts. hemorrhagic cystic degeneration resembling aneurysmal bone cyst formation occurs rarely.",
      "Histological features alone are not diagnostic and areas resembling COF may be seen in psammomatoid and (less frequently) in trabecular ossifying fibroma, and COF may contain ossicles like psammomatoid ossifying fibroma as a minor feature.",
      "COFs in syndromes have the same features as non-syndromic COFs.",
      "COFs in gnathodiaphysial dysplasia are at the more fibrous end of the spectrum, with predominantly basophilic rounded islands and droplets of acellular bone.",
    ],
    ihc: [],
    molecular: [
      "There is no diagnostic molecular pathology for sporadic COF.",
      "Syndromic forms can be identified clinically or by CDC73 (HRPT2) mutations in COF or other tissues.",
      "COF does not exhibit the GNAS mutations seen in fibrous dysplasia.",
    ],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The differential diagnosis includes fibrous dysplasia, which has a more uniform woven or lamellar architecture but may contain islands of basophilic bone and, in the jaws, shows osteoblast rimming.",
      },
      {
        name: "However",
        distinction:
          "However, the sharp demarcation of COF and the cortical expansion rather than replacement distinguish it from fibrous dysplasia.",
      },
      {
        name: "Histologically COF also resembles focal cemento-osseous dysplasia",
        distinction:
          "Histologically COF also resembles focal cemento-osseous dysplasia, and COF-like expansion may occur in florid cemento-osseous dysplasia, particularly its familial form.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "It should be noted that the so-called peripheral ossifying fibroma is not regarded as an extraosseous ossifying fibroma but an unrelated reactive gingival hyperplasia with mineralization that shows only some histological similarity to neoplastic COFs.",
      },
      {
        name: "Odontogenic fibroma",
        distinction:
          "Favor Odontogenic fibroma when site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords. In contrast, Cemento-ossifying fibroma is characterized by location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications.",
      },
      {
        name: "Cementoblastoma",
        distinction:
          "Favor Cementoblastoma when a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component. In contrast, Cemento-ossifying fibroma is characterized by location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications.",
      },
      {
        name: "Odontogenic myxoma",
        distinction:
          "Favor Odontogenic myxoma when arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests. In contrast, Cemento-ossifying fibroma is characterized by location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications.",
      },
    ],
  },
  {
    name: "Odontogenic myxoma",
    group: "Benign mesenchymal odontogenic tumors",
    behavior: "",
    profile: [
      "OM accounts for < 10% of all odontogenic tumors and is the third most frequent after odontoma and ameloblastoma.",
      "OM affects mostly young adults between the second and third decades of life, but with a wide age range.",
      "In many studies, OM is as much as twice as common in females as males, but not in all populations.",
      "OM arises in the jaws.",
      "Two thirds of OMs are located in the mandible and one third in the maxilla, usually in relation to a tooth, typically a premolar or molar.",
      "Maxillary lesions tend to obliterate the maxillary sinuses as an early feature, and expansion is an early and consistent feature.",
    ],
    criteria: [
      "arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells.",
      "scattered inactive odontogenic rests.",
    ],
    morphology: [
      "OM is composed of predominantly loose myxoid stroma with a sparse population of stellate to spindle cells.",
      "Small inactive rests of odontogenic epithelium are present in a small minority of OMs and are few in number.",
      "The tumor is generally unencapsulated with permeative spread in medullary bone.",
      "Lesions with more collagenous stroma are often referred to as odontogenic fibromyxomas.",
      "Immunohistochemistry does not aid diagnosis.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The most significant differential diagnosis for OM is dental follicle or developing dental papilla, which are histologically identical but clinically and radiographically distinct.",
      },
      {
        name: "Myxoid neurofibroma",
        distinction:
          "Myxoid neurofibroma may have overlapping histology but will generally show positive immunohistochemical staining for S100.",
      },
      {
        name: "Other differential diagnoses include chondromyxoid fibroma",
        distinction:
          "Other differential diagnoses include chondromyxoid fibroma, odontogenic fibroma, and low-grade myxofibrosarcoma, particularly in OM with a more collagenized stroma.",
      },
      {
        name: "Odontogenic fibroma",
        distinction:
          "Favor Odontogenic fibroma when site in a tooth-bearing segment of the jaws; a well-defined lesion radiologically; bland fibrous connective tissue of varying cellularity. Desirable: odontogenic epithelial nests or cords. In contrast, Odontogenic myxoma is characterized by arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests.",
      },
      {
        name: "Cementoblastoma",
        distinction:
          "Favor Cementoblastoma when a mass fused to a tooth root; dense mineralization; radiating peripheral matrix; plump cementoblasts; no fibro-osseous component. In contrast, Odontogenic myxoma is characterized by arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests.",
      },
      {
        name: "Cemento-ossifying fibroma",
        distinction:
          "Favor Cemento-ossifying fibroma when location in a tooth-bearing region of the jaws; benign fibro-osseous histology; well demarcated. Desirable: slow, continuous growth; cementum-like calcifications. In contrast, Odontogenic myxoma is characterized by arising in tooth-bearing segments of jaws; myxoid stroma with variable collagenization; sparse stellate or spindle-shaped cells. Desirable: scattered inactive odontogenic rests.",
      },
    ],
  },
  {
    name: "Sclerosing odontogenic carcinoma",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "There is a very slight female predilection.",
      "The age at diagnosis ranges from 31 to 73 years, with the majority of cases arising in the fifth to seventh decades of life.",
      "SOC may be underrecognized or may have been described under another name.",
      "Most cases affect the posterior mandible.",
      "Maxillary SOCs tend to lie anteriorly.",
      "SOC presents as swelling that occasionally grows rapidly.",
    ],
    criteria: [
      "malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma.",
      "mild atypia; perineural/intraneural infiltration (often prominent).",
    ],
    morphology: [
      "A dense, fibrocollagenous sclerotic stroma is the hallmark of SOC, containing malignant epithelial cells forming single-file thin cords, strands, small nests, and infrequent islands of more epidermoid cells.",
      "Only mild cellular atypia has been observed in most cases.",
      "SOCs are infiltrative and lack encapsulation.",
      "Perineural or intraneural invasion is frequently seen, but lymphovascular invasion is rare.",
      "Mitotic activity is inconspicuous and necrosis is rare.",
      "Mucus-negative clear cells may be present, but glandular differentiation has also been reported.",
      "Calcifications including cementum-like bone, bone, or dentinoid have been observed in half of the cases.",
    ],
    ihc: [
      "There is no specific immunohistochemical marker for SOC.",
      "The epithelial component is highlighted by CK5/6, CK14, CK19, and p63.",
    ],
    molecular: [
      "All cases studied have been negative for EWSR1 rearrangement.",
    ],
    differential: [
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Sclerosing odontogenic carcinoma is characterized by malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent).",
      },
    ],
  },
  {
    name: "Ameloblastic carcinoma",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "AC accounts for ≤ 2% of all odontogenic tumors and 30% of malignant odontogenic tumors.",
      "A wide age range is affected, with a median age of 49 years, and there is a male predilection.",
      "AC is an intraosseous jaw carcinoma with a mandibular predilection, usually arising posteriorly.",
      "Most ACs arise de novo, but there may be pre-existing ameloblastoma.",
      "Extraosseous AC is extremely rare.",
      "Patients present with jaw or orofacial swelling, sometimes with pain and paraesthesia, and later with tooth mobility and extension into the oral mucosa and trismus.",
    ],
    criteria: [
      "a histological resemblance to ameloblastoma; cytological atypia.",
      "an intraosseous jaw tumor; tumor necrosis",
      "BRAF mutations (in a subset); an associated ameloblastoma precursor.",
    ],
    morphology: [
      "AC resembles ameloblastoma and has variable features of malignancy.",
      "The architecture ranges from ameloblastoma-like follicular or plexiform patterns to solid, compact sheets of basaloid epithelium or anastomosing strands with a loss of stellate reticulum.",
      "Peripheral palisading, nuclear reverse polarity, and stellate reticulum must be evident, at least focally.",
      "The threshold for diagnosis of malignancy is poorly defined, but ACs usually show some of the following: at least moderate cellular or nuclear atypia, increased mitotic activity, increased N:C ratio, hyperchromatic vesicular nuclei, crowding of basal cells and expansion of the basal cell compartment with disordered polarity, and expansion of atypical cells into stellate reticulum.",
      "Central necrosis in islands is a helpful finding, but it may be subtle with apoptosis.",
      "Extension into the mucosa and infiltration into the medullary space do not distinguish benign ameloblastoma from AC.",
      "Increased mitotic activity or Ki-67 proliferative fraction cannot define AC, and emphasis is placed on identifying a combination of architectural and cytomorphological abnormalities.",
      "Minor differentiation patterns include squamous, clear cell, spindle cell, and pseudosarcomatous morphology.",
      "Combinations are possible, and these features vary in extent.",
      "Dispersed invasion and perineural infiltration are uncommon in AC, in contrast to other odontogenic malignant neoplasms.",
      "Benign ameloblastoma may be present as a precursor lesion.",
    ],
    ihc: [
      "Unlike ameloblastoma, AC shows expression of p53, SMA, and SOX2, but these are not validated as arbiters of malignancy.",
    ],
    molecular: [
      "BRAF p.V600E mutations and TP53 mutation are of undefined diagnostic value.",
      "EWSR1 translocation indicates clear cell odontogenic carcinoma rather than AC with clear cell phenotype.",
    ],
    differential: [
      {
        name: "This includes benign ameloblastoma",
        distinction:
          "This includes benign ameloblastoma, especially maxillary examples that can show high cellularity.",
      },
      {
        name: "Basaloid AC must be separated from basal cell ameloblastoma",
        distinction:
          "Basaloid AC must be separated from basal cell ameloblastoma, basaloid squamous cell carcinoma, and adamantinoma-like Ewing tumor.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "AC with spindle cell changes warrants the exclusion of spindle cell / sarcomatoid squamous cell carcinoma, carcinosarcoma, and other spindle cell malignancies.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "AC with clear cell features must be separated from clear cell odontogenic carcinoma.",
      },
      {
        name: "A primary intraosseous carcinoma lacking ameloblastoma features",
        distinction:
          "A primary intraosseous carcinoma lacking ameloblastoma features is better categorized as primary intraosseous carcinoma.",
      },
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Ameloblastic carcinoma is characterized by a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor.",
      },
    ],
  },
  {
    name: "Clear cell odontogenic carcinoma",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "More than 100 cases of CCOdC have been reported in the literature, with a mean age at presentation of 53 years, and with 63% of cases in female patients.",
      "All CCOdCs develop in the jaws.",
      "Three quarters of cases arise in the mandible, most frequently in the posterior body and lower ramus.",
      "The clinical manifestations are nonspecific, with destructive jaw swelling with or without pain, paraesthesia, and tooth mobility, and later with ulceration to the mucosa.",
      "Less commonly, patients develop lymphadenopathy (19%) or distant metastases (11%).",
    ],
    criteria: [
      "location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma.",
      "EWSR1 translocation.",
    ],
    morphology: [
      "CCOdCs are composed of lobular sheets, nests, or trabeculae of monomorphic, polygonal cells with clear to slightly eosinophilic cytoplasm and eccentric nuclei embedded in a hyalinized or fibrocellular stroma.",
      "Peripheral palisading may or may not be present, and the tumor may have a heterogeneous appearance, with areas of more basaloid epithelium without cytoplasmic clearing.",
      "The clear cells are negative for mucin, but they are PAS-positive and diastase-sensitive, indicating glycogen.",
      "The mitotic index is low, and some CCOdCs are bland and relatively indolent.",
      "Necrosis and angiolymphatic invasion are uncommon, but perineural invasion is reported in one third of tumors.",
    ],
    ihc: [
      "CCOdCs are positive for cytokeratins (AE1/AE3, CK5/6, CK19), p63, and EMA, but they are negative for myoepithelial markers (SMA, calponin, and S100 ).",
    ],
    molecular: [
      "EWSR1 rearrangement facilitates diagnosis but is technically challenging due to specimen decalcification.",
    ],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis includes other clear cell–rich gnathic neoplasms, including other odontogenic tumors (clear cell calcifying epithelial odontogenic tumor, amyloid subtype of odontogenic fibroma), salivary tumors, both metastatic and intraosseous primary neoplasms (mucoepidermoid carcinoma, epithelial-myoepithelial carcinoma), and metastatic neoplasms (renal cell carcinoma, melanoma).",
      },
      {
        name: "Odontogenic carcinoma with dentinoid",
        distinction:
          "Odontogenic carcinoma with dentinoid has overlapping morphological features, with some cases having a clear cell phenotype, but these form dentinoid and appear to be a distinct entity.",
      },
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Clear cell odontogenic carcinoma is characterized by location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation.",
      },
    ],
  },
  {
    name: "Ghost cell odontogenic carcinoma",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "GCOC is a rare tumor, with < 50 cases reported, of which about half occurred in people of Asian descent.",
      "GCOC is more common in men than women (M:F ratio: 3.2:1).",
      "It can arise at any age (range: 10–89 years), with a peak incidence in patients aged 30–60 years.",
      "GCOC arises within the jaws and is almost twice as common in the maxilla as in the mandible.",
      "The ramus and molar areas are the most affected regions in the mandible.",
      "GCOC may present with nonspecific signs and symptoms suggestive of malignancy, including pain, swelling, ulceration, tooth mobility, and paraesthesia.",
    ],
    criteria: [
      "a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy.",
      "mixed radiolucency; root resorption; dentinoid formation.",
    ],
    morphology: [
      "The histological features are those of DGCT and COC with cytological evidence of malignancy.",
      "The main component is odontogenic epithelial sheets, islands, and strands, resembling an ameloblastoma with palisaded columnar hyperchromatic basal cells with reverse polarity, at least focally, and additional aberrant keratinization as ghost cells.",
      "Ghost cells may mineralize.",
      "The ghost cells may be dispersed, isolated, or present in clusters.",
      "In higher-grade lesions, the malignant epithelial cells are basaloid or nondescript, and ameloblastoma-like features may be absent.",
      "Dentinoid may be present adjacent to the epithelial cells.",
      "The amount of dentinoid and ghost cells are variable.",
      "Evidence of malignancy includes mitotic activity, pleomorphism, hyperchromatism, necrosis, and an infiltrative growth pattern.",
      "Benign precursor COC or DGCT may be present.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "GCOC should be differentiated from similar but benign odontogenic tumors, including DGCT and COC, and other odontogenic tumors that may contain ghost cells as a minor component, such as ameloblastoma and adenoid ameloblastoma.",
      },
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The diagnosis of GCOC requires cytological evidence of malignancy, which is not present in these other tumors.",
      },
      {
        name: "There",
        distinction:
          "There is histological overlap with adenoid ameloblastoma and odontogenic carcinoma with dentinoid.",
      },
      {
        name: "It",
        distinction:
          "It is possible these entities are related, and the differentiating criteria are not well defined.",
      },
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Ghost cell odontogenic carcinoma is characterized by a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation.",
      },
    ],
  },
  {
    name: "Primary intraosseous carcinoma NOS",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "PIOC is rare, and data are mostly in case reports.",
      "A systemic review identified 257 reported cases in 2020, the majority apparently arising from odontogenic cysts, more frequently residual and radicular cysts and less often dentigerous and odontogenic keratocysts.",
      "There is a male predilection (M:F ratio: 2:1), and the mean age at diagnosis is 55–60 years, although a wide age range is described, with occasional cases in young patients.",
      "PIOC is more frequent in the posterior body and ramus of the mandible and less frequent in the anterior maxilla.",
      "Cases arising in cysts are more frequent in the mandible.",
      "An intraosseous origin must be established for the diagnosis, excluding extension of gingival or alveolar squamous cell carcinoma or antral carcinoma into the jaws.",
    ],
    criteria: [
      "epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry.",
      "CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogenic precursor.",
    ],
    morphology: [
      "PIOCs are squamous carcinomas, comprising islands and small nests of atypical squamous epithelium with prickle cells and minimal keratinization.",
      "Cytological atypia ranges from quite bland to severe.",
      "Most PIOCs are moderately differentiated, and necrosis is rare.",
    ],
    ihc: [
      "CK19 positivity on immunohistochemistry supports an odontogenic epithelial origin but has low specificity.",
    ],
    molecular: [],
    differential: [
      {
        name: "Peripheral palisading or plexiform patterns",
        distinction:
          "Peripheral palisading or plexiform patterns may occur, but if prominent they suggest ameloblastic carcinoma.",
      },
      {
        name: "Imaging",
        distinction:
          "Imaging, histopathology, and clinical information are essential to exclude metastasis (which is considerably more common), other malignant odontogenic tumors, mucosal and sinonasal primary carcinomas invading bone, and intraosseous salivary gland cancers.",
      },
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Primary intraosseous carcinoma NOS is characterized by epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen.",
      },
    ],
  },
  {
    name: "Odontogenic carcinosarcoma",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "Cases have been reported from Japan, Saudi Arabia, the Bolivarian Republic of Venezuela, the Republic of Korea, France, Germany, Brazil, and the USA.",
      "Age incidence has not been defined, although the mean age of female patients is significantly lower than that of male patients.",
      "There are twice as many male patients as female patients.",
      "All cases have involved the posterior mandible, with 1 equivocal case in the maxilla.",
      "Most patients present with pain and swelling.",
      "The mean tumor diameter at diagnosis is approximately 60 mm.",
    ],
    criteria: [
      "origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma.",
      "evidence of a pre-existing odontogenic tumor.",
    ],
    morphology: [
      "Histopathological features are based on few cases, but they resemble those of ameloblastic fibroma or fibrosarcoma.",
      "Both the epithelial and ectomesenchymal components must show convincing cytological features of malignancy.",
      "The epithelial component ranges from fine strands to larger islands, often with peripheral palisading.",
      "The ectomesenchymal component is hypercellular with cytological atypia.",
      "Mesenchymal hard tissues such as dentinoid, bone, and cartilage may be produced, but the histological appearances do not mimic osteosarcoma or other defined sarcomas.",
      "Both components show a high mitotic count and Ki-67 proliferative index.",
    ],
    ihc: [
      "The epithelial component is reactive for a variety of cytokeratins, particularly CK19.",
      "The ectomesenchymal component is invariably positive for vimentin but may also show reactivity for desmin and MSA.",
    ],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "This must exclude a malignant epithelial odontogenic tumor with a spindle cell component of epithelial origin, such as ameloblastic carcinoma, a significant diagnostic pitfall.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "The formation of matrix or hard tissue in an odontogenic carcinoma does not necessarily indicate sarcoma.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "A spindle cell squamous carcinoma usually demonstrates epithelial differentiation histologically and/or immunohistochemically.",
      },
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
      {
        name: "Odontogenic sarcomas",
        distinction:
          "Favor Odontogenic sarcomas when origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor. In contrast, Odontogenic carcinosarcoma is characterized by origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor.",
      },
    ],
  },
  {
    name: "Odontogenic sarcomas",
    group: "Malignant odontogenic tumors",
    behavior: "",
    profile: [
      "Only about 100 cases have been reported.",
      "The M:F ratio is about 1.5:1.",
      "The average age at diagnosis is in the third decade of life.",
      "Approximately 75–80% arise in the mandible with a predilection for the posterior region.",
      "Patients present with locally aggressive expansile lesions, with or without pain.",
      "Many OSs arise from malignant transformation of a benign precursor.",
    ],
    criteria: [
      "origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component.",
      "evidence of a benign precursor.",
    ],
    morphology: [
      "OSs contain an epithelial component and an ectomesenchymal component.",
      "The epithelial component is cytologically bland and benign.",
      "It varies considerably in quantity and morphology, ranging from thin dental lamina–like strands to larger islands of odontogenic epithelium, with peripheral cells showing nuclear palisading and reverse polarity but not stellate reticulum.",
      "The malignant ectomesenchymal component is characterized by hypercellularity, varying degrees of cytological atypia, and increased mitotic activity.",
      "In approximately 10% of cases, dysplastic dentine with or without enamel matrix is produced (ameloblastic fibrodentinosarcoma or ameloblastic fibro-odontosarcoma).",
    ],
    ihc: [],
    molecular: [
      "The mutations identified (see Pathogenesis, above) are not yet clinically relevant.",
    ],
    differential: [
      {
        name: "Sclerosing odontogenic carcinoma",
        distinction:
          "Favor Sclerosing odontogenic carcinoma when malignant odontogenic carcinoma with infiltrating thin cords and nests of epithelium; sclerotic stroma. Desirable: mild atypia; perineural/intraneural infiltration (often prominent). In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
      {
        name: "Ameloblastic carcinoma",
        distinction:
          "Favor Ameloblastic carcinoma when a histological resemblance to ameloblastoma; cytological atypia. Desirable: an intraosseous jaw tumor; tumor necrosis; BRAF mutations (in a subset); an associated ameloblastoma precursor. In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
      {
        name: "Clear cell odontogenic carcinoma",
        distinction:
          "Favor Clear cell odontogenic carcinoma when location in jaws; prominent clear cell phenotype; infiltrative margin; hyalinized or fibrocellular stroma. Desirable: EWSR1 translocation. In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
      {
        name: "Ghost cell odontogenic carcinoma",
        distinction:
          "Favor Ghost cell odontogenic carcinoma when a poorly demarcated lesion radiologically; ameloblastoma-like epithelium; prominent ghost cells; cytological evidence of malignancy. Desirable: mixed radiolucency; root resorption; dentinoid formation. In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
      {
        name: "Primary intraosseous carcinoma NOS",
        distinction:
          "Favor Primary intraosseous carcinoma NOS when epicentre in jaws; destructive central jaw lesion; absence of a communication with the surface mucosa or antrum; exclusion of other primaries and metastatic disease by staging and immunohistochemistry. Desirable: CK19 positivity on immunohistochemistry; historic radiological evidence of an odontogen. In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
      {
        name: "Odontogenic carcinosarcoma",
        distinction:
          "Favor Odontogenic carcinosarcoma when origin in a tooth-bearing segment of the jaws; carcinoma and sarcoma components; significant cytological atypia in both components; exclusion of spindle cell squamous carcinoma. Desirable: evidence of a pre-existing odontogenic tumor. In contrast, Odontogenic sarcomas is characterized by origin in a tooth-bearing segment of the jaws; a mixed odontogenic neoplasm; a cytologically bland epithelial component; a cytologically malignant ectomesenchymal component. Desirable: evidence of a benign precursor.",
      },
    ],
  },
  {
    name: "Central giant cell granuloma",
    group: "Giant cell lesions and bone cysts",
    behavior: "",
    profile: [
      "The incidence of CGCG is 1.1 cases per 1 million person-years in Europe.",
      "Most patients are female, and most cases occur in patients aged < 30 years.",
      "CGCG develops almost exclusively in the jaws and is more frequent in the anterior mandible.",
      "CGCGs generally present as well-defined, asymptomatic, slow-growing, expansile radiolucencies.",
      "A minority of lesions are aggressive and may exhibit rapid growth, root resorption, tooth displacement, cortical perforation, and recurrence after curettage.",
    ],
    criteria: [
      "location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma.",
      "a lobular structure.",
    ],
    morphology: [
      "CGCG is an unencapsulated proliferation of mononuclear spindle-shaped and polygonal cells intermingled with osteoclast multinucleated giant cells in a vascular background, with hemorrhage and haemosiderin pigment.",
      "The lesion may have a lobular architecture, lobules separated by fibrous septa that may contain thin osteoid and woven bone.",
      "The giant cells in CGCGs show reactivity for osteoclast and macrophage markers.",
      "The mononuclear stromal cells are the proliferating component, and mitoses may be readily found.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis includes cherubism in young patients and cystic hemorrhagic degeneration producing an aneurysmal bone cyst–like appearance in fibro-osseous lesions.",
      },
      {
        name: "Brown tumor of hyperparathyroidism",
        distinction:
          "Brown tumor of hyperparathyroidism is a close histological mimic and is only definitively excluded by serology.",
      },
      {
        name: "Peripheral giant cell granuloma",
        distinction:
          "Favor Peripheral giant cell granuloma when location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions). In contrast, Central giant cell granuloma is characterized by location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure.",
      },
      {
        name: "Cherubism",
        distinction:
          "Favor Cherubism when only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases). In contrast, Central giant cell granuloma is characterized by location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure.",
      },
      {
        name: "Aneurysmal bone cyst",
        distinction:
          "Favor Aneurysmal bone cyst when compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases). In contrast, Central giant cell granuloma is characterized by location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure.",
      },
      {
        name: "Simple bone cyst",
        distinction:
          "Favor Simple bone cyst when typical radiological features; empty cavity at operation. In contrast, Central giant cell granuloma is characterized by location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure.",
      },
    ],
  },
  {
    name: "Peripheral giant cell granuloma",
    group: "Giant cell lesions and bone cysts",
    behavior: "",
    profile: [
      "The epidemiology is unknown.",
      "PGCG is the commonest oral giant cell lesion.",
      "It is slightly more prevalent in women than in men (M:F ratio: 1:1.2) and arises over a wide age distribution.",
      "PGCG arises in the gingiva or alveolar ridge, more commonly in the mandible than the maxilla.",
      "A sessile or pedunculated lump with a smooth, ulcerated, or nodular surface and often a characteristic red, maroon, or purple color.",
      "PGCG may reach several centimetres in diameter, and erosion of the underlying bone is found in almost one third of all cases.",
    ],
    criteria: [
      "location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma.",
      "exclusion of hyperparathyroidism (very rarely associated with localized lesions).",
    ],
    morphology: [
      "PGCG resembles central giant cell granuloma, with an unencapsulated proliferation of mononuclear spindle-shaped and polygonal cells with osteoclast multinucleated cells in a vascular loose fibrous tissue.",
      "Foci of hemorrhage, haemosiderin pigment, and scattered deposits of immature bone are frequent.",
      "An inflammatory component of fibrous or pyogenic granuloma–like hyperplasia may be present, reflecting local irritant causes.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Central giant cell granuloma",
        distinction:
          "Favor Central giant cell granuloma when location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure. In contrast, Peripheral giant cell granuloma is characterized by location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions).",
      },
      {
        name: "Cherubism",
        distinction:
          "Favor Cherubism when only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases). In contrast, Peripheral giant cell granuloma is characterized by location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions).",
      },
      {
        name: "Aneurysmal bone cyst",
        distinction:
          "Favor Aneurysmal bone cyst when compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases). In contrast, Peripheral giant cell granuloma is characterized by location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions).",
      },
      {
        name: "Simple bone cyst",
        distinction:
          "Favor Simple bone cyst when typical radiological features; empty cavity at operation. In contrast, Peripheral giant cell granuloma is characterized by location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions).",
      },
    ],
  },
  {
    name: "Cherubism",
    group: "Giant cell lesions and bone cysts",
    behavior: "",
    profile: [
      "The incidence is unknown.",
      "Two thirds of cases are familial, with complete penetrance in males and 60–70% penetrance in females, and with variable expressivity; the remaining cases arise as de novo germline alterations.",
      "Both jaws are affected bilaterally, with the mandible more commonly affected than the maxilla.",
      "Slow, symmetrical expansion of the jaws develops in early childhood, usually before 6 years of age.",
      "Maxillary expansion in severe cases may cause orbital displacement with scleral exposure, producing the characteristic facial appearance similar to that of putti or cherubs in Renaissance paintings.",
      "Female patients are usually more severely affected.",
    ],
    criteria: [
      "only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology.",
      "detection of SH3BP2 germline mutation (in selected cases).",
    ],
    morphology: [
      "The microscopic features are not specific and resemble those of other giant cell–rich lesions of the jaws, including giant cell granuloma, giant cell lesions in Noonan and Jaffe–Campanacci syndromes, and brown tumor of hyperparathyroidism.",
      "Typically, abnormally large multinucleated osteoclast-like giant cells lie in a monotonous loose or oedematous spindle cell stroma with eosinophilic cuff-like perivascular deposits.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Central giant cell granuloma",
        distinction:
          "Favor Central giant cell granuloma when location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure. In contrast, Cherubism is characterized by only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases).",
      },
      {
        name: "Peripheral giant cell granuloma",
        distinction:
          "Favor Peripheral giant cell granuloma when location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions). In contrast, Cherubism is characterized by only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases).",
      },
      {
        name: "Aneurysmal bone cyst",
        distinction:
          "Favor Aneurysmal bone cyst when compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases). In contrast, Cherubism is characterized by only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases).",
      },
      {
        name: "Simple bone cyst",
        distinction:
          "Favor Simple bone cyst when typical radiological features; empty cavity at operation. In contrast, Cherubism is characterized by only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases).",
      },
    ],
  },
  {
    name: "Aneurysmal bone cyst",
    group: "Giant cell lesions and bone cysts",
    behavior: "",
    profile: [
      "ABC is rare, with an estimated incidence of approximately 0.15 cases per 1 million person-years, 1.5% of which arise in the jaws.",
      "All age groups are affected, but > 80% of cases occur in younger patients, usually during the first two decades of life.",
      "Both sexes are equally affected; however, a male predilection has been reported in jaw ABCs.",
      "More than 60% of jaw ABCs occur in the mandible, usually posteriorly.",
      "Maxillary lesions have a more uniform anatomical distribution.",
      "Other sites in the craniofacial complex can be affected.",
    ],
    criteria: [
      "compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts.",
      "woven bone in septa",
      "USP6 gene rearrangement (in selected cases).",
    ],
    morphology: [
      "ABC is composed of blood-filled or empty sinusoidal spaces lined by macrophages and bland fibroblasts that are separated by fibrous septa containing scattered multinucleated osteoclastic giant cells.",
      "Woven bone in septa can appear prominently basophilic and has been referred to as blue bone, and if present this is characteristic, but not diagnostic.",
      "The solid pattern can feature cellular areas, which can be mitotically active, along with limited, inconspicuous cystic spaces.",
    ],
    ihc: [],
    molecular: [
      "A translocation involving USP6 and several 5ʹ partners including CDH11 is helpful in the diagnosis of the solid pattern (in selected cases).",
    ],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The entities include ABC-like cystic hemorrhagic degeneration in a range of other neoplasms including osteoblastoma, fibrous dysplasia, cemento-ossifying fibroma, other fibro-osseous lesions, and osteosarcoma.",
      },
      {
        name: "Central giant cell granuloma",
        distinction:
          "Favor Central giant cell granuloma when location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure. In contrast, Aneurysmal bone cyst is characterized by compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases).",
      },
      {
        name: "Peripheral giant cell granuloma",
        distinction:
          "Favor Peripheral giant cell granuloma when location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions). In contrast, Aneurysmal bone cyst is characterized by compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases).",
      },
      {
        name: "Cherubism",
        distinction:
          "Favor Cherubism when only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases). In contrast, Aneurysmal bone cyst is characterized by compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases).",
      },
      {
        name: "Simple bone cyst",
        distinction:
          "Favor Simple bone cyst when typical radiological features; empty cavity at operation. In contrast, Aneurysmal bone cyst is characterized by compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases).",
      },
    ],
  },
  {
    name: "Simple bone cyst",
    group: "Giant cell lesions and bone cysts",
    behavior: "",
    profile: [
      "SBCs are found predominantly in patients in their second or third decade of life, with no sex differences.",
      "The mandible is most frequently affected, with a predilection for the body.",
      "Bilateral or multiple SBCs are fairly frequent.",
      "The vast majority of cases are asymptomatic and discovered on routine examination.",
      "Expansion is unusual and limited.",
    ],
    criteria: ["typical radiological features; empty cavity at operation."],
    morphology: [
      "SBC has no epithelial lining, and samples contain nondescript thin strips of loosely collagenous or myxoid connective tissue with thin, lace-like fragments of immature bone at the periphery.",
      "Haemosiderin, cholesterol, and sparse osteoclasts may be present.",
      "Spiky, needle-like collagen fibres may lie peripherally and can become densely mineralized, a useful diagnostic feature when biopsy tissue is sparse.",
      "Cystic hemorrhagic degeneration in florid cemento-osseous dysplasia has been termed “SBC” and may account for as many as one third of apparent jaw SBCs, but the age group is older and shows a female predilection, and these cysts are typically more expansile and may recur after treatment.",
      "Such cysts are probably not conventional SBC, but their mutation status is not defined.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Central giant cell granuloma",
        distinction:
          "Favor Central giant cell granuloma when location in the jaws; clustered osteoclast giant cells; hemorrhage; spindle cell stroma. Desirable: a lobular structure. In contrast, Simple bone cyst is characterized by typical radiological features; empty cavity at operation.",
      },
      {
        name: "Peripheral giant cell granuloma",
        distinction:
          "Favor Peripheral giant cell granuloma when location on the gingiva or alveolar ridge; cellular mononuclear stroma; clustered osteoclasts; hemorrhage; no origin from underlying intraosseous giant cell granuloma. Desirable: exclusion of hyperparathyroidism (very rarely associated with localized lesions). In contrast, Simple bone cyst is characterized by typical radiological features; empty cavity at operation.",
      },
      {
        name: "Cherubism",
        distinction:
          "Favor Cherubism when only the posterior jaws affected; bilateral symmetrical lesions; giant cell lesion on histology. Desirable: detection of SH3BP2 germline mutation (in selected cases). In contrast, Simple bone cyst is characterized by typical radiological features; empty cavity at operation.",
      },
      {
        name: "Aneurysmal bone cyst",
        distinction:
          "Favor Aneurysmal bone cyst when compatible radiological features; multicystic; fibrous septa with hemorrhage and osteoclasts. Desirable: woven bone in septa; USP6 gene rearrangement (in selected cases). In contrast, Simple bone cyst is characterized by typical radiological features; empty cavity at operation.",
      },
    ],
  },
  {
    name: "Cemento-osseous dysplasia",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "COD is the most common benign fibro-osseous lesion of the jaws, with a strong predilection for middle-aged women, most commonly African and African-American women, but with a significant incidence in Asian women and White women.",
      "FFCOD has a less marked racial and sex predilection.",
      "PCOD predominantly involves the periapical bone of the anterior mandibular teeth",
      "FocCOD involves a single, usually posterior, mandibular tooth; and FCOD involves multiple tooth-bearing quadrants.",
      "FFCOD almost always has the same distribution as FCOD.",
      "CODs are usually asymptomatic, non-expansile lesions associated with the roots of vital teeth.",
    ],
    criteria: [
      "radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
    ],
    morphology: [
      "All COD subtypes exhibit identical microscopic features dependent on the degree of maturation.",
      "There are varying proportions of osteoid and woven bone; mature lamellar bone; and rounded, densely basophilic, cementum-like mineralizations; these appear in a cellular fibrous connective tissue stroma of loosely arranged collagen and prominently dilated, thin-walled vessels.",
      "Osteoblastic rimming is rare.",
      "There is often focal high cellularity.",
      "Maturing lesions show increasing calcification with often prominent reversal lines and reduced vascularity.",
      "Late-stage lesions are characterized by the coalescence of calcified tissue that forms hypocellular, sclerotic masses with limited stroma.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Approximately 10% of cases",
        distinction:
          "Approximately 10% of cases may develop expansile cystic degeneration resembling solitary bone cyst, usually in the mandible in late-stage disease.",
      },
      {
        name: "Expansile areas in FFCOD",
        distinction:
          "Expansile areas in FFCOD may be difficult to distinguish from cemento-ossifying fibroma if the background disease is not appreciated.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Cemento-osseous dysplasia is characterized by radiological features are almost always diagnostic; benign fibro-osseous lesion histologically.",
      },
    ],
  },
  {
    name: "Segmental odontomaxillary dysplasia",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "SOD is rare and has a slight male predilection.",
      "SOD is a unilateral maxillary enlargement, occurring almost equally on the right or left side, in the premolar/molar region of the maxilla.",
      "Patients present with a painless maxillary buccal and palatal enlargement, usually in the first or second decade of life, with a failure of tooth eruption and with dental abnormalities clinically and radiographically.",
      "Enlargement appears stable and non-progressive, starting in childhood and continuing until puberty.",
      "Frequently there is associated fibrous gingival hyperplasia.",
      "The maxillary overgrowth extends to the sinus, reducing its volume radiographically.",
    ],
    criteria: [
      "localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features.",
      "inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
    ],
    morphology: [
      "Gingival biopsies may reveal fibrous hyperplasia with occasional dystrophic calcifications.",
      "Bone biopsies reveal irregular bone spicules with multiple accentuated reversal lines.",
      "The bone appears inert, without osteoblastic or osteoclastic activity, and histological features are probably the end stage of a much earlier developmental process.",
      "External root resorption of teeth, with dysplastic dentine and fibrosis of the pulp, has been described.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Segmental odontomaxillary dysplasia is characterized by localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion).",
      },
    ],
  },
  {
    name: "Fibrous dysplasia",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Fibrous dysplasia is an uncommon disease and is usually diagnosed in children and young adults.",
      "The monostotic form accounts for 80–85% of all cases and shows no sex predilection.",
      "Polyostotic fibrous dysplasia has a female predilection.",
      "Monostotic fibrous dysplasia affects a single bone (the term is not usually employed for the maxilla or facial bones), whereas polyostotic fibrous dysplasia affects multiple bones.",
      "The term “craniofacial fibrous dysplasia” applies when multiple adjacent bones in the craniofacial region are affected, extending across suture lines.",
      "The craniofacial bones are affected most commonly, typically involved in approximately 10% of patients with monostotic fibrous dysplasia and in as many as 100% of patients with polyostotic fibrous dysplasia.",
    ],
    criteria: [
      "clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone.",
      "GNAS mutation analysis (in selected cases).",
    ],
    morphology: [
      "A lesion consists of bone with variable amounts of fibrous tissue.",
      "The fibrous component is composed of spindle cells without atypia; it can be quite cellular but becomes less so and more fibrous with age.",
      "Mitoses are uncommon, but small numbers may be observed in children.",
      "The bone is woven and forms irregular curvilinear trabeculae, commonly likened to Chinese characters or described as C-, S-, and Y-shaped trabeculae, which are not rimmed by osteoblasts.",
      "The immature bone merges almost imperceptibly with the surrounding lamellar bone, and it may be difficult to distinguish lesional from non-lesional bone.",
      "Jaw fibrous dysplasia develops osteoblast rimming and lamellar differentiation as it matures.",
      "Cartilage may form, but it is rare in the jaws.",
      "Subtypes are defined by number and location of affected bone(s).",
    ],
    ihc: [],
    molecular: [
      "Confirmation of fibrous dysplasia requires detection of somatic GNAS mutation by next-generation or Sanger sequencing or by mutation-specific restriction enzyme digestion PCR.",
    ],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The histological appearances are characteristic but not completely specific, and the differential diagnosis includes other jaw fibro-osseous lesions including juvenile trabecular, psammomatoid, and cemento-ossifying fibromas; cemento-osseous dysplasias; and, in small specimens, aneurysmal bone cyst or giant cell lesions.",
      },
      {
        name: "Low-grade central osteosarcoma",
        distinction:
          "Low-grade central osteosarcoma may resemble fibrous dysplasia closely but is rare in the jaws.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Fibrous dysplasia is characterized by clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases).",
      },
    ],
  },
  {
    name: "Juvenile trabecular ossifying fibroma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "JTOF is rare and arises predominantly in children and adolescents (mean age: 11.3 years), with < 20% of cases affecting individuals aged > 15 years.",
      "However, variation in diagnosis may distort the age distribution, and most typical cases of JTOF probably arise before the age of 10 years.",
      "There is no sex predilection.",
      "JTOF predominantly affects the jaws, with almost equal distribution between the maxilla and mandible.",
      "There is variation in diagnosis, and it is not clear whether JTOF in extragnathic craniofacial bones is the same entity.",
      "Patients usually present with painless jaw expansion with rapid growth and tooth displacement.",
    ],
    criteria: [
      "onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid.",
      "site in the jaws.",
    ],
    morphology: [
      "Histopathology shows an unencapsulated tumor with elongate strands (so-called “brush strokes”), trabeculae, and sheets of osteoid densely rimmed by osteoblasts and in a fibroblastic stroma.",
      "Newly formed osteoid blends imperceptibly with the surrounding stroma.",
      "Over time, the osteoid strands undergo central mineralization to form anastomosing trabeculae of woven bone.",
      "The stroma exhibits zones of variable cellularity, often hypercellular, and scattered aggregates of osteoclastic giant cells are usually evident.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Appearance",
        distinction: "Appearance may be worrisome for osteosarcoma.",
      },
      {
        name: "Garland-like",
        distinction:
          "Garland-like, curvilinear strands of edema, hemorrhage, osteoclasts, and pseudocystic degeneration form the characteristic brown curvilinear strands seen macroscopically in JTOF; this feature has not been noted in cemento-ossifying or psammomatoid ossifying fibromas. hemorrhagic cystic degeneration may resemble aneurysmal bone cyst.",
      },
      {
        name: "A trabecular woven bone pattern",
        distinction:
          "A trabecular woven bone pattern may be seen in cemento-ossifying fibroma and other fibro-osseous lesions; this feature alone is insufficient for diagnosis.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Juvenile trabecular ossifying fibroma is characterized by onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws.",
      },
    ],
  },
  {
    name: "Psammomatoid ossifying fibroma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "PsOF is rare.",
      "The peak incidence is in the second to fourth decades of life, with a broad age range and an M:F ratio of approximately 1.4:1.",
      "PsOF arises in the jaws and craniofacial bones, with 90% of cases occurring around the paranasal sinuses and orbit.",
      "PsOF is usually an asymptomatic, rapidly enlarging bony swelling, although pain is possible.",
      "Additional findings may include nasal obstruction, epistaxis, proptosis, and visual disturbance, depending on site.",
    ],
    criteria: [
      "well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern.",
      "onset in the second to fourth decades of life.",
    ],
    morphology: [
      "PsOF is an unencapsulated lesion containing multiple spherical ossicles in a hypercellular stroma of bland ovoid and spindle cells.",
      "The spherules are usually small and relatively uniform, with osteoid rims and wispy eosinophilic collagen fibres at the periphery and no osteoblastic rimming.",
      "Ossicles fuse together in late disease, forming lumpy trabeculae.",
      "Although described as psammomatoid, the ossicles are much larger than psammoma bodies, not as sharply defined, and not lamellar.",
      "Mitotic figures may be seen occasionally, and multinucleated giant cells are an infrequent finding.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The small, densely basophilic, cementum-like droplet calcifications in cemento-ossifying fibroma are more similar to psammoma bodies than the ossicles in PsOF and should not lead to the misdiagnosis of cemento-ossifying fibroma as PsOF.",
      },
      {
        name: "PsOF",
        distinction:
          "PsOF may contain minority areas of more typical fibro-osseous architecture with woven bone trabeculae and dense basophilic bone.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Secondary changes include myxoid change and hemorrhagic cystic degeneration resembling aneurysmal bone cyst.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Psammomatoid ossifying fibroma is characterized by well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life.",
      },
    ],
  },
  {
    name: "Familial gigantiform cementoma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "FGC is extremely rare.",
      "Onset is in early childhood, with continuous growth into early adulthood.",
      "Cases have been described in various countries, with 55% from Asia.",
      "The disease affects the jaws, with multifocal involvement in two to four quadrants.",
      "There is rapidly progressive, painless expansion, resulting in significant deformity, orbital distortion, and possible airway compromise.",
      "Many cases of florid cemento-osseous dysplasia have been diagnosed as FGC, particularly cases of the familial form, but the degree of expansion is usually less marked and patients are generally older.",
    ],
    criteria: [
      "onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma.",
      "rapid progression followed by slower growth later in life; family history.",
    ],
    morphology: [
      "The histopathological features are similar to those of cemento-ossifying fibroma and other fibro-osseous lesions.",
      "Immature bony trabeculae and cementum-like calcifications are seen within a hypercellular fibroblastic stroma.",
      "The cementum-like calcifications appear as hypocellular, spheroidal to curvilinear structures, which may be surrounded by radiating Sharpey fibres as visualized under polarized light.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Familial gigantiform cementoma is characterized by onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history.",
      },
    ],
  },
  {
    name: "Osteoma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Osteomas occur over a wide age range but mostly in the third to fifth decades of life, with an equal sex distribution.",
      "In the jaws, the mandible is more often affected than the maxilla.",
      "Sinuses are a site of predilection, most commonly the frontal sinus followed by the other sinuses.",
      "Central osteomas are often asymptomatic, whereas surface osteomas may present with a slow-growing swelling, facial distortion, or altered dental occlusion.",
      "Osteomas in familial adenomatous polyposis often arise near the mandibular angle and may be multiple.",
      "Sinus/orbital tumors may present with headache or pain.",
    ],
    criteria: [
      "compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
    ],
    morphology: [
      "Osteomas are composed mostly of lamellar bone, compact or trabecular, in which osteoblasts and osteoclasts are usually inconspicuous.",
      "Some contain osteoblastoma-like areas that are thought to represent a reactive remodelling process and do not imply more aggressive behavior.",
      "As many as 40% of sinus/orbital osteomas contain such areas.",
      "Fibro-osseous lesions, sclerosing osteomyelitis, and ossification in a fibrous epulis may mimic an osteoma.",
      "Lesions of the central (endosteal) subtype of osteoma are also known as bone islands.",
      "Unlike surface osteomas, bone islands arise more frequently in long bones and are a mixture of hamartomas and true neoplasms.",
      "Rare extraosseous osteoma occurs in soft tissue.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Osteoma is characterized by compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns.",
      },
    ],
  },
  {
    name: "Osteochondroma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Osteochondroma of the jaw manifests in the second to fourth decades of life, slightly later than at other sites, and unlike at other sites it often continues to grow slowly after puberty.",
      "A slight female predominance is seen.",
      "Osteochondromas are rare in the craniofacial bones, usually involving the mandibular condyle and coronoid process.",
      "Craniofacial osteochondromas often cause swelling, asymmetry, trismus, and temporomandibular joint dysfunction, but they may be chance radiographic findings.",
      "Osteochondromas may be multiple, but multiple lesions usually affect long bones.",
    ],
    criteria: [
      "pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
    ],
    morphology: [
      "Osteochondroma is a cartilage-capped bony projection from the external bone surface, showing cortical and medullary continuity with the parent bone.",
      "There is a surface layer of fibrous tissue and a middle layer that mimics growth plate cartilage with endochondral ossification, merging with underlying mature trabecular bone.",
      "Binucleated cells, nodularity, and cystic/mucoid changes may be present, but neither mitoses nor marked pleomorphism are seen.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "Although a cartilaginous cap > 20 mm in thickness in adults must raise the suspicion of secondary chondrosarcoma, occurrence in the facial bones is very rare.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Criteria for the histological distinction of osteochondroma from condylar hyperplasia are poorly defined.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Osteochondroma is characterized by pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow.",
      },
    ],
  },
  {
    name: "Osteoblastoma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Osteoblastoma is a rare tumor that occurs mostly in the second to third decades of life, with a slight female predominance (unlike long bone lesions).",
      "About 10% of osteoblastomas are found in the craniofacial bones, most often in the body of the mandible.",
      "They may be intraosseous or periosteal.",
      "Osteoblastoma may be asymptomatic or present with localized swelling and pain.",
    ],
    criteria: [
      "a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
    ],
    morphology: [
      "Osteoblastoma is composed of anastomosing trabeculae of bone and osteoid, rimmed by plump osteoblasts, sometimes with densely mineralized foci, and set in a loose, richly vascular fibrous stroma.",
      "Mitoses are rare.",
      "A lack of nuclear atypia, permeative growth into surrounding bone, and atypical mitoses distinguish osteoblastoma from osteosarcoma.",
      "In some cases, the osteoblasts may appear larger and epithelioid, but this does not indicate a clinically aggressive course.",
      "A tumor size of > 40 mm and an anatomical site that makes removal difficult are better predictors of aggressive clinical behavior.",
    ],
    ihc: [],
    molecular: [
      "The translocations of FOS and FOSB identified in osteoblastoma are extremely rare in osteosarcoma, and FOS immunohistochemistry may be a helpful diagnostic tool in this setting, but only if there has been short decalcification.",
    ],
    differential: [
      {
        name: "Additional morphologic differential",
        distinction:
          "The differential diagnosis includes osteoid osteoma for a lesion < 20 mm in diameter and cementoblastoma if on a tooth root.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Osteoblastoma is characterized by a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma.",
      },
    ],
  },
  {
    name: "Chondroblastoma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Chondroblastomas of the head and neck region are rare, with about 100 cases reported in the literature.",
      "Although most chondroblastomas occur in the second decade of life, patients with skull tumors are slightly older, presenting in their third or fourth decade of life.",
      "A slight male predominance (M:F ratio: 1.3:1) has been reported for temporal chondroblastomas.",
      "Chondroblastomas predominantly involve the epiphysis of long bones.",
      "When occurring in the head and neck, chondroblastomas are located mainly around the temporomandibular joint and the squamous part of the temporal bone.",
      "The most frequent clinical symptom is pain.",
    ],
    criteria: [
      "sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix.",
      "a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
    ],
    morphology: [
      "The tumor cells are uniform, eosinophilic, and polygonal, with well-defined borders and nuclear grooves.",
      "The cells are intermingled with an amorphous eosinophilic matrix with osteoclast-like giant cells and varying amounts of chicken-wire calcification.",
      "Cystic hemorrhagic degeneration is frequent. tumors harbouring mutations in H3-3A or H3-3B resulting in the expression of H3 p.K37M (K36M) mutant protein, show consistent nuclear immunoreactivity with a mutant-specific antibody K36M.",
    ],
    ihc: [],
    molecular: [
      "Detection of the H3-3B:c.110A>T p.K37M (K36M) mutation is highly specific for chondroblastoma and may be useful in selected cases.",
    ],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "The differential diagnosis includes aneurysmal bone cyst, clear cell chondrosarcoma, chondromyxoid fibroma, and Langerhans cell histiocytosis.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Chondroblastoma is characterized by sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases).",
      },
    ],
  },
  {
    name: "Chondromyxoid fibroma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "CMF is rare, and 5% of all cases involve craniofacial bones.",
      "Most craniofacial CMFs occur in the jaw and sinonasal bones, but any craniofacial bone can be affected.",
      "Depending on the site, there may be tinnitus, visual disturbances, headaches, hearing loss, and sinonasal congestion.",
    ],
    criteria: [
      "radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
    ],
    morphology: [
      "CMF consists of a lobular proliferation of spindled and stellate cells with abundant eosinophilic cytoplasm and a chondromyxoid background.",
      "The lobules show a hypocellular center and a hypercellular periphery with intermingled osteoclast-like giant cells.",
      "In a third of cases there are scattered coarse calcifications, but hyaline cartilage is only occasionally seen.",
      "Cytological atypia may occur; however, mitoses are uncommon.",
      "In approximately 10% of cases, cystic hemorrhagic degeneration produces aneurysmal bone cyst–like changes.",
    ],
    ihc: [
      "Immunohistochemistry is typically not required.",
      "CMF shows variable staining for SMA, S100, EMA, and SOX9 and is negative for cytokeratins and GFAP.",
    ],
    molecular: [
      "Molecular pathology is not usually needed for diagnosis.",
      "If required, upregulation of GRM1 expression can help distinguish CMF from its mimics.",
    ],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Chondromyxoid fibroma is characterized by radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells.",
      },
    ],
  },
  {
    name: "Desmoplastic fibroma of bone",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "DFB presents over a wide age range (0.5–70 years), with 35% occurring in the first decade of life and almost 70% occurring before the age of 30 years (mean age at diagnosis: 20 years).",
      "DFB in the jaws has a slight female predilection (M:F ratio: 1:1.3) and is more prevalent in non-Hispanic White people (51%) than in people of African (24%), Hispanic (16%), or Asian (9%) descent.",
      "The jaws are a site of predilection.",
      "In the jaws, 82% of DFBs affect the mandible, 70% affecting the posterior body and angle.",
      "The remainder involve the maxilla, usually anteriorly.",
      "Most individuals (66%) present with asymptomatic swelling or facial asymmetry.",
    ],
    criteria: [
      "intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
    ],
    morphology: [
      "DFB is composed of uniform benign spindle cells with slender, tapering nuclei, arranged in intertwining fascicles, without atypia or pleomorphism and with only rare mitoses.",
      "The cells often have indistinct cytoplasmic borders that blend with adjacent collagen, which can become keloid-like.",
      "Myxoid areas, cysts, and osteoclasts are present rarely.",
      "Thin-walled vessels interposed between spindle cell fascicles may be present.",
      "Because of the infiltrative margin, entrapped residual bone trabeculae may be present.",
    ],
    ihc: [
      "DFBs express vimentin (92%), SMA (80%), MSA (63%), and S100 (7%), and they have low Ki-67 expression.",
      "Almost all DFBs lack nuclear β-catenin expression; only 2 cases with CTNNB1 mutation have been reported.",
    ],
    molecular: [],
    differential: [
      {
        name: "Differential diagnosis",
        distinction:
          "Differential diagnosis is by exclusion of desmoid fibromatosis (nuclear β-catenin",
      },
      {
        name: "CTNNB1 or APC mutation)",
        distinction:
          "CTNNB1 or APC mutation), fibrous dysplasia (GNAS mutation), low-grade central osteosarcoma (MDM2, CDK4), low-grade myofibroblastic sarcoma (SMA, desmin, nuclear β-catenin), synovial sarcoma (SS18 rearrangement), spindle cell rhabdomyosarcoma of the jaw (TFCP2 rearrangement), and myoepithelial tumors (S100, CAM5.2",
      },
      {
        name: "EWSR1 rearrangement",
        distinction: "EWSR1 rearrangement, SMARCB1 [INI1] loss).",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Desmoplastic fibroma of bone is characterized by intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors.",
      },
    ],
  },
  {
    name: "Osteosarcoma of the jaw",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Osteosarcoma is rare, with an overall incidence of approximately 4–5 cases per 1 million person-years.",
      "The jawbones account for approximately 6% of cases and, remarkably, patients are usually 10–20 years older than those developing osteosarcoma in extragnathic sites.",
      "There is no sex predilection.",
      "Conventional osteosarcoma most commonly arises in the metaphysis of long bones, but the fourth most common site of origin is the jawbones (particularly the mandible), accounting for about 6% of cases.",
      "However, any craniofacial bone can be involved.",
      "The most frequent clinical manifestation is local swelling, which can be associated with pain and ulceration.",
    ],
    criteria: [
      "consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone.",
      "necrosis; atypical mitosis; pleomorphism; high cellularity.",
    ],
    morphology: [
      "Conventional osteosarcoma is the most common and aggressive subtype, whereas periosteal osteosarcoma is of intermediate grade, and low-grade central and parosteal osteosarcomas are low-grade subtypes.",
      "Conventional osteosarcoma is defined by highly atypical cells producing an immature and often lace-like neoplastic osteoid.",
      "The extent of matrix can vary significantly, ranging from focal, immature osteoid to heavily mineralized sclerotic bone.",
      "The tumors generally show an aggressive and osteodestructive growth permeating marrow spaces.",
      "As a result, pre-existing trabeculae become entrapped by tumor infiltrates and neoplastic bone.",
      "The periosteum forms a rigid barrier for tumor permeation and may remain as a pseudocapsule around some tumors that have destroyed the cortex.",
      "Frequently, fibroblastic components and/or neoplastic cartilage can also be found, and the predominant matrix defines the tumor type as osteoblastic, chondroblastic, or fibroblastic.",
      "Chondroblastic osteosarcoma is proportionally more common in the jawbones and can histologically mimic chondrosarcoma, which is far less frequent in the maxillofacial bones.",
      "Gnathic osteosarcoma less commonly shows a pleomorphic high-grade morphology, although cytological atypia is nevertheless present but often subtle.",
      "Jaw tumors are often well delineated and show a cambium-like proliferative cell layer at the periphery of the lesion.",
      "Small cell and telangiectatic subtypes have been reported but are extremely rare.",
      "Periosteal subtypes generally demonstrate a predominant chondroblastic differentiation, with intermediate-grade atypia, but are exceedingly rare in the head and neck region.",
      "Low-grade central and parosteal subtypes generally demonstrate only subtle atypia; mitotic activity can be scarce.",
      "They consist of either irregular or interlacing bone trabeculae embedded in a fibroblastic stroma with only minimal atypia.",
      "The stromal component can predominate and is of low to moderate cellularity.",
      "Giant cell–rich osteosarcoma is a morphological subtype that should be kept in mind and distinguished from other giant cell–rich lesions affecting the jaws.",
      "Chemotherapy-related changes can mask original tumor morphology and extent and include frankly necrotic tumor; partly degenerate cells; a framework of tumor osteoid and chondroid matrix with empty lacunae; interlacing trabeculae of reactive bone and loose, sparsely cellular, collagenous tissue with scattered capillaries; and chronic inflammatory cells.",
    ],
    ihc: [
      "Positive staining with antibodies against MDM2 and CDK4 might aid in distinguishing low-grade osteosarcoma from benign fibro-osseous mimics.",
      "SATB2 immunohistochemistry may be useful to detect osteoblastic differentiation, but despite its sensitivity it is not specific.",
    ],
    molecular: [
      "Most low-grade osteosarcomas show MDM2 and CDK4 amplification by FISH.",
    ],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Osteosarcoma of the jaw is characterized by consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity.",
      },
    ],
  },
  {
    name: "The chondrosarcoma family of tumors",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "Maxillofacial chondrosarcoma is almost exclusively of conventional type and accounts for only 3–4% of all chondrosarcomas [[Unni KK, Inwards CY, Bridge JA, et al.",
      "Tumors of the bones and joints.",
      "Washington, DC: American Registry of Pathology; 2005. (AFIP atlas of tumor pathology, series 4; fascicle 2).]].",
      "All age groups can be affected, but there is a slight predilection for middle-aged men.",
      "Conventional chondrosarcoma affects the maxilla and the nasal septum more frequently than the mandible, but it may occur in any maxillofacial bone.",
      "Symptoms are nonspecific and depend upon location.",
    ],
    criteria: [
      "consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
    ],
    morphology: [
      "Chondrosarcoma generally has a lobular morphology and osteodestructive growth with entrapment of pre-existing trabecular bone and/or cortical permeation.",
      "Well-differentiated tumors resemble hyaline cartilage with oval to polygonal cells in lacunar spaces surrounded by basophilic matrix.",
      "The nuclei are small and uniform, with round to oval outlines and evenly distributed dense chromatin.",
      "With increasing grade, the nucleoli become discernible due to open chromatin.",
      "Nuclear pleomorphism, increased cellularity with irregular distribution, decreased volume of cytoplasm, myxoid background, and mitoses are also associated with higher tumor grade.",
    ],
    ihc: [
      "Immunohistochemistry has limited diagnostic value.",
      "The tumor cells usually stain for S100, SOX9, ERG, and podoplanin.",
    ],
    molecular: [
      "Detection of IDH1/2 mutations can be helpful in distinguishing conventional, periosteal, and dedifferentiated chondrosarcoma from chondroblastic osteosarcoma in selected cases but is generally not required.",
      "Detection of IDH1/2 mutation may be less likely in chondrosarcomas of the facial skeleton, whereas the skull base tumors reportedly have a higher detection rate.",
    ],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "Because chondromas in the maxillofacial bones are extremely rare, tumors with pure cartilaginous differentiation should always be considered to be chondrosarcoma until proved otherwise.",
      },
      {
        name: "Chondroblastic osteosarcoma",
        distinction:
          "Chondroblastic osteosarcoma is far more common than chondrosarcoma, especially in the jawbones, requiring a thorough search to exclude small foci of neoplastic osteoid formation.",
      },
      {
        name: "Accordingly",
        distinction:
          "Accordingly, a diagnosis of maxillofacial chondrosarcoma should not be made solely on a core needle biopsy.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "The high-grade component of dedifferentiated chondrosarcoma most frequently resembles undifferentiated pleomorphic sarcoma, but it can vary.",
      },
      {
        name: "Clear cell chondrosarcoma",
        distinction:
          "Clear cell chondrosarcoma shows lobules of cells with abundant pale (attributable to glycogen) or slightly eosinophilic cytoplasm and frequently includes woven bone formation.",
      },
      {
        name: "Additional diagnostic considerations",
        distinction:
          "In the temporomandibular joint, synovial chondromatosis / calcified chondroid mesenchymal neoplasms are much more common.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, The chondrosarcoma family of tumors is characterized by consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation.",
      },
    ],
  },
  {
    name: "Mesenchymal chondrosarcoma",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "MCSs account for 2–10% of all chondrosarcomas, and 20–30% of cases arise in the head and neck.",
      "The peak incidence is in the third decade of life (age range: 7–80 years).",
      "There is no sex predilection.",
      "The most common sites in the head and neck are the jaws (the mandible more frequently), followed by the skull.",
      "Within the sinonasal tract, the maxillary sinus is most commonly affected, followed by the ethmoid and nasal cavity.",
      "Patients present with swelling, pain, and possible pathological fracture.",
    ],
    criteria: [
      "a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage.",
      "HEY1::NCOA2 fusion (in selected cases).",
    ],
    morphology: [
      "MCS has a characteristic biphasic pattern.",
      "Large areas are composed of small, uniform, round to spindle-shaped cells, which resemble those of Ewing sarcoma, often with a perivascular arrangement and haemangiopericytoma-like pattern, necrosis, and frequent mitoses.",
      "Admixed lobules of highly differentiated cartilage may be limited or extensive and can exhibit calcification and immature ossification.",
    ],
    ihc: [
      "Immunohistochemistry shows positivity for membranous CD99 and nuclear SOX9.",
      "NKX3-1 has been suggested to be highly specific; there may be aberrant muscle marker expression.",
    ],
    molecular: [
      "HEY1::NCOA2 recurrent translocation is present in almost all MCSs",
      "IRF2BP2::CDX1 is reported much more rarely.",
      "IDH1 and IDH2 mutations do not occur.",
    ],
    differential: [
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
      {
        name: "Rhabdomyosarcoma with TFCP2 rearrangement",
        distinction:
          "Favor Rhabdomyosarcoma with TFCP2 rearrangement when a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK. In contrast, Mesenchymal chondrosarcoma is characterized by a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases).",
      },
    ],
  },
  {
    name: "Rhabdomyosarcoma with TFCP2 rearrangement",
    group: "Bone and cartilage tumors",
    behavior: "",
    profile: [
      "TFCP2-RMS typically affects young adults (median age: 25 years, range: 11–86 years); 30% of cases arise in patients aged < 18 years.",
      "Both sexes are equally affected.",
      "TFCP2-RMSs arise mostly in bone, and less frequently in soft tissue.",
      "There is a striking predilection for craniofacial bones (in decreasing order of frequency: the mandible, maxilla, and skull bones), from where TFCP2-RMS commonly infiltrates into the soft tissues of the mouth, nose, and neck.",
      "Patients present with a large, rapidly growing swelling, with pain and signs related to compression. tumor size varies widely (median diameter: 60 mm).",
    ],
    criteria: [
      "a high-grade epithelioid, spindle cell, or mixed tumor",
      "MYOD1 or myogenin expression.",
      "location in bone",
      "TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
    ],
    morphology: [
      "TFCP2-RMSs are usually biphasic, with spindle cell and epithelioid areas in solid sheets or fascicles with scant accompanying stroma.",
      "More rarely, TFCP2-RMSs are composed purely of epithelioid, spindle, or round cells. tumor nuclei are large, displaying brisk mitotic activity and dotted with conspicuous nucleoli.",
      "Overall, tumor nuclei are monotonous but may show focal hyperchromatism and pleomorphism.",
      "Necrosis is common.",
    ],
    ihc: [
      "Virtually all cases are positive for cytokeratins (AE1/AE3) and desmin.",
      "All, by definition, express myogenin and/or MYOD1, MYOD1 being more sensitive.",
      "There is occasional expression of ALK, p63, CK7, SATB2, p53, CD30, CD4, S100, caldesmon, and SMA",
      "SMARCB1 (INI1) expression is retained.",
    ],
    molecular: [
      "The diagnosis can be confirmed by molecular testing using FISH with a break-apart probe for TFCP2 or by sequencing.",
    ],
    differential: [
      {
        name: "Additional diagnostic considerations",
        distinction:
          "Particularly in older adults, the differential diagnosis includes metastatic carcinoma because of the keratin expression and epithelioid features.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Alveolar rhabdomyosarcoma commonly expresses cytokeratins and ALK but harbours FOXO1 fusions.",
      },
      {
        name: "Additional morphologic differential",
        distinction:
          "Malignant peripheral nerve sheath tumor with rhabdomyoblastic differentiation (Triton tumor) or anaplastic lymphoma may be suspected when S100 is positive, especially if the tumor is purely epithelioid.",
      },
      {
        name: "Sarcomas with PATZ1 fusions",
        distinction:
          "Sarcomas with PATZ1 fusions are rare and have a variable appearance; they often express myogenin, MYOD1, and S100 but are associated with PATZ1 translocations.",
      },
      {
        name: "Cemento-osseous dysplasia",
        distinction:
          "Favor Cemento-osseous dysplasia when radiological features are almost always diagnostic; benign fibro-osseous lesion histologically. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Segmental odontomaxillary dysplasia",
        distinction:
          "Favor Segmental odontomaxillary dysplasia when localized swelling; abnormal soft tissues, bone, and teeth; characteristic radiographic features. Desirable: inert bone histologically, with defects of tooth formation (only if fibrous dysplasia requires exclusion). In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Fibrous dysplasia",
        distinction:
          "Favor Fibrous dysplasia when clinical, radiological, and histomorphological correlation; bone replaced by fibrous tissue and woven bone. Desirable: GNAS mutation analysis (in selected cases). In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Juvenile trabecular ossifying fibroma",
        distinction:
          "Favor Juvenile trabecular ossifying fibroma when onset in childhood or adolescence; rapid expansion; well demarcated radiographically; a cellular benign fibro-osseous lesion with prominent osteoid. Desirable: site in the jaws. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Psammomatoid ossifying fibroma",
        distinction:
          "Favor Psammomatoid ossifying fibroma when well demarcated radiographically; site in craniofacial bone or jaw; benign fibro-osseous lesion histologically; predominant ossicle pattern. Desirable: onset in the second to fourth decades of life. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Familial gigantiform cementoma",
        distinction:
          "Favor Familial gigantiform cementoma when onset in childhood or adolescence; multifocal/multiquadrant involvement; very marked expansion; benign fibro-osseous histology analogous to cemento-ossifying fibroma. Desirable: rapid progression followed by slower growth later in life; family history. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Osteoma",
        distinction:
          "Favor Osteoma when compatible radiological features; surface origin (surface type); mature lamellar bone with solid cortical or medullary patterns. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Osteochondroma",
        distinction:
          "Favor Osteochondroma when pedunculated or broad-based bony exostosis; a cartilaginous cap with a growth plate–like architecture; continuity with underlying bone cortex and marrow. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Osteoblastoma",
        distinction:
          "Favor Osteoblastoma when a radiologically well-demarcated tumor; ≥ 20 mm diameter; bone tumor with trabeculae of woven bone; prominent plump osteoblasts; vascular stroma. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Chondroblastoma",
        distinction:
          "Favor Chondroblastoma when sheets of chondroblasts; scattered osteoclasts; eosinophilic chondroid matrix. Desirable: a fine network of chicken-wire calcification; histone H3 mutation or H3 p.K37M (K36M) immunopositivity (in selected cases). In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Chondromyxoid fibroma",
        distinction:
          "Favor Chondromyxoid fibroma when radiographic lytic lesion with sharp margins, a lobulated lesion; zonal distribution of spindled and stellate cells; chondromyxoid matrix; condensation of lesional cells at the periphery of lobules, admixed with multinucleated giant cells. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Desmoplastic fibroma of bone",
        distinction:
          "Favor Desmoplastic fibroma of bone when intraosseous site; benign spindle cell lesion; no cytological atypia or pleomorphism; dense collagenous background; exclusion of alternative fibrous tumors. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Osteosarcoma of the jaw",
        distinction:
          "Favor Osteosarcoma of the jaw when consistent imaging features; tumor cells producing immature and often lace-like neoplastic osteoid; permeative invasion; entrapment of host bone. Desirable: necrosis; atypical mitosis; pleomorphism; high cellularity. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "The chondrosarcoma family of tumors",
        distinction:
          "Favor The chondrosarcoma family of tumors when consistent imaging features; a malignant tumor with cartilaginous matrix; entrapped pre-existing bone; a lack of neoplastic bone or osteoid formation. In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
      {
        name: "Mesenchymal chondrosarcoma",
        distinction:
          "Favor Mesenchymal chondrosarcoma when a sarcoma with a prominent primitive component of round to spindled cells punctated with islands of mature cartilage. Desirable: HEY1::NCOA2 fusion (in selected cases). In contrast, Rhabdomyosarcoma with TFCP2 rearrangement is characterized by a high-grade epithelioid, spindle cell, or mixed tumor; MYOD1 or myogenin expression. Desirable: location in bone; TFCP2 rearrangement or typical immunophenotype with coexpression of AE1/AE3 and ALK.",
      },
    ],
  },
];

const categories = [
  "All",
  "Cysts of the jaws",
  "Benign epithelial odontogenic tumors",
  "Benign mixed odontogenic tumors",
  "Benign mesenchymal odontogenic tumors",
  "Malignant odontogenic tumors",
  "Giant cell lesions and bone cysts",
  "Bone and cartilage tumors",
];

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}

export default function OdontogenicAndMaxillofacialBoneTumorsPage() {
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
  const openFromIndex = (name: string, group: string) => {
    setCat(group);
    setQ("");
    setOpened((a) => (a.includes(name) ? a : [...a, name]));
  };
  const cysts = items.filter((x) => x.group === "Cysts of the jaws");
  const bone = items.filter((x) => x.group === "Bone and cartilage tumors");
  const count = (group: string) =>
    items.filter((x) => x.group === group).length;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck / Odontogenic and Maxillofacial Bone
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Odontogenic and Maxillofacial Bone Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A diagnostic reference organized by clinical presentation,
                essential diagnostic criteria, histopathology, immunophenotype,
                molecular findings, and comparative differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic priority
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Integrate clinical setting, imaging, architecture, and cytology.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Many jaw lesions cannot be classified by histology alone. Tooth
                relationship, anatomic epicenter, radiographic pattern, and
                growth behavior are essential components of diagnosis.
              </p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["Total entities", String(items.length)],
              ["Jaw cysts", String(cysts.length)],
              ["Bone and cartilage", String(bone.length)],
              [
                "Diagnostic comparisons",
                String(items.reduce((n, x) => n + x.differential.length, 0)),
              ],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3"
              >
                <div className="text-2xl font-bold text-slate-950">{value}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-7 px-5 py-8">
        <Panel title="Diagnostic GPS: practical sequence">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Establish the epicenter",
                "Determine whether the lesion is tooth-related, centered in the jawbone, gingival/peripheral, or arising from adjacent soft tissue.",
              ],
              [
                "Review the tooth relationship",
                "Record tooth vitality, eruption status, association with the crown or root, and attachment at the cementoenamel junction.",
              ],
              [
                "Correlate imaging",
                "Assess radiolucent versus radiopaque pattern, unilocular versus multilocular architecture, margins, expansion, cortical destruction, and soft-tissue extension.",
              ],
              [
                "Identify the tissue pattern",
                "Separate cyst lining, odontogenic epithelial proliferation, mixed epithelial–mesenchymal tumor, fibro-osseous lesion, giant-cell lesion, and malignant bone tumor.",
              ],
              [
                "Use ancillary tests selectively",
                "Apply immunohistochemistry and molecular testing when they resolve a defined differential; do not treat characteristic alterations as universal defining criteria.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900">{x[0]}</h3>
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
                Search by entity, site, clinical feature, histologic pattern,
                immunomarker, or molecular alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. reverse polarity, ghost cells, BRAF, keratin..."
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
                {c === "All" ? `All (${items.length})` : `${c} (${count(c)})`}
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
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {p.profile[0]}
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
                          Diagnostic criteria
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
                        {p.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[640px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/4 py-3 pr-4 align-top font-semibold text-slate-900">
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
                No matching entity.
              </div>
            )}
          </div>
        </section>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Diagnostic note:</b> Fibro-osseous
          lesions require integration of clinical presentation, radiographic
          appearance, and growth pattern; histology alone may be insufficient.
          Characteristic molecular alterations are included when they contribute
          to a specific diagnostic distinction.
        </footer>
      </div>
    </main>
  );
}
