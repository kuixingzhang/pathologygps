"use client";
import React, { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  family: string;
  clue: string;
  morphology: string;
  ihc: string;
  molecular?: string;
  differential: string;
  behavior?: string;
};
const entities: Entity[] = [
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Ovarian fibroma",
    clue: "Firm, white, collagen-rich mass; bland spindle cells.",
    morphology:
      "Intersecting fascicles of bland spindle-to-ovoid fibroblastic cells in variably collagenous stroma; hyalinized plaques and calcification may occur. Mitoses are usually uncommon. Cellular fibroma has increased cellularity but only mild atypia. Mitotically active cellular fibroma has >4 mitoses/10 HPF without diffuse significant atypia or coagulative tumor-cell necrosis.",
    ihc: "Inhibin, calretinin, FOXL2, CD56, and SF1 may be positive, often weakly or focally. Reticulin shows a complete pericellular pattern.",
    molecular:
      "FOXL2 and DICER1 alterations are absent; absence of FOXL2 can help when adult granulosa cell tumor is considered.",
    differential:
      "Thecoma: plumper cells with pale or lipid-rich cytoplasm and individual-cell reticulin. Adult granulosa cell tumor: reticulin surrounds nests rather than individual cells; consider FOXL2 testing. Cellular fibroma/mitotically active cellular fibroma should not be upgraded to fibrosarcoma solely for mitotic activity.",
    behavior:
      "Benign; surface rupture/adhesions, especially in cellular tumors, may be associated with late local recurrence.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Thecoma",
    clue: "Yellow-tan tumor with diffuse growth of plump theca-like cells.",
    morphology:
      "Diffuse or less often nested/lobulated growth of uniform cells with appreciable pale-gray or clear lipid-rich cytoplasm and indistinct cell borders. Nuclei are bland; mitoses absent or minimal. Hyaline plaques or a minor fibromatous component may occur. Reticulin surrounds individual cells.",
    ihc: "Typically inhibin, calretinin, SF1, and other sex cord-stromal markers; staining can be focal.",
    molecular:
      "No recurrent molecular alteration established. FOXL2/DICER1 are generally absent; a FOXL2 mutation should prompt consideration of adult granulosa cell tumor with thecoma-like morphology.",
    differential:
      "Fibroma: spindle cells and collagen dominate, with less abundant pale cytoplasm. Adult granulosa cell tumor: grooved nuclei, varied sex cord patterns, and loss/reduction of pericellular reticulin. Avoid the non-recommended term fibrothecoma; classify as fibroma or thecoma based on the predominant morphology.",
    behavior:
      "Almost always benign; reported malignant examples may represent other tumor types.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Luteinized thecoma associated with sclerosing peritonitis",
    clue: "Usually bilateral ovarian spindle-cell proliferation with bowel-obstructing sclerosing peritonitis.",
    morphology:
      "Bilateral, often cortical spindle-cell proliferation with edema/microcysts, entrapped follicles, and scattered luteinized or weakly luteinized cells. Spindle cells can be mitotically active but bland; ovarian medulla may be relatively spared.",
    ihc: "Spindle cells usually SF1/FOXL2 positive but inhibin/calretinin negative; luteinized cells are inhibin/calretinin positive.",
    differential:
      "Conventional thecoma is usually unilateral and composed predominantly of plump theca-like cells. Cellular fibroma is typically collagenous and lacks the characteristic bilateral pattern and associated sclerosing peritonitis.",
    behavior:
      "Ovarian lesion is benign; morbidity and mortality relate to sclerosing peritonitis and intestinal obstruction.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Sclerosing stromal tumor",
    clue: "Young patient; pseudolobules, alternating cellular and edematous zones, and prominent vessels.",
    morphology:
      "Well-circumscribed pseudolobulated tumor. Cellular nodules contain a haphazard admixture of epithelioid/luteinized and spindle cells, separated by hypocellular edematous, collagenous, or myxoid stroma. Thin-walled dilated, often hemangiopericytoma-like vessels are characteristic.",
    ihc: "Inhibin, calretinin, and SF1 are usually positive, sometimes focally; cytokeratin and EMA are usually negative. TFE3 expression may occur without a TFE3 rearrangement.",
    molecular:
      "FHL2::GLI2 fusion or other GLI2 rearrangements have been reported in a subset.",
    differential:
      "Thecoma: lacks the characteristic pseudolobular architecture and prominent branching/dilated vessels. Adult granulosa cell tumor: lacks the typical alternating pseudolobules and has a different reticulin pattern. Metastatic or primary vascular neoplasms are excluded by the mixed sex cord-stromal cell population and immunophenotype.",
    behavior: "Benign in nearly all reported cases.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Microcystic stromal tumor",
    clue: "Solid and microcystic architecture with fibrous septa; nuclear β-catenin.",
    morphology:
      "Well-circumscribed, unencapsulated neoplasm with variable proportions of solid cellular zones, small rounded microcysts, and fibrous septa/hyaline plaques. Uniform round-to-epithelioid cells have lightly eosinophilic granular cytoplasm; intracytoplasmic vacuoles and signet-ring-like cells may occur. Mitoses are usually low.",
    ihc: "Diffuse nuclear/cytoplasmic β-catenin, CD10, WT1, cyclin D1, FOXL2, and SF1. Inhibin and calretinin are typically negative; EMA usually negative.",
    molecular:
      "CTNNB1 or APC pathogenic variants, usually mutually exclusive. APC alteration may prompt evaluation for familial adenomatous polyposis.",
    differential:
      "Signet-ring stromal tumor: lacks the characteristic microcystic/solid-septated pattern and is typically β-catenin/cyclin D1 negative. Sex cord-stromal tumors: often inhibin/calretinin positive and do not show the characteristic nuclear β-catenin profile. Metastatic signet-ring carcinoma: mucin-positive and typically epithelial-marker positive.",
    behavior:
      "Usually benign; rare pelvic/abdominal recurrence or metastasis is reported, but predictive features are not defined.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Signet-ring stromal tumor",
    clue: "Bland signet-ring cells in fibromatous stroma; vacuoles are not mucin.",
    morphology:
      "Variable numbers of cells with a single large cytoplasmic vacuole in fibroma-like/cellular fibroma-like stroma. Nuclei are eccentric, small, uniform, and bland; mitoses rare or absent. Vacuoles do not contain mucin, glycogen, or lipid.",
    ihc: "Limited data: often SF1, CD10, and WT1 positive; inhibin/calretinin/cytokeratin variable; EMA consistently negative. Desirable profile includes cyclin D1 negative and no nuclear β-catenin.",
    differential:
      "Metastatic signet-ring adenocarcinoma: mucin-containing vacuoles, epithelial/EMA expression, and often infiltrative growth. Microcystic stromal tumor: nuclear β-catenin and cyclin D1 positivity, with solid/microcystic architecture.",
    behavior: "Benign.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Leydig cell tumor",
    clue: "Small hilar-centered steroid-cell nodule; Reinke crystals are a helpful clue.",
    morphology:
      "Well-circumscribed nodule centered in or predominantly confined to ovarian hilum. Large polygonal cells have abundant eosinophilic or pale cytoplasm, often with lipochrome pigment; clustered nuclei create intervening eosinophilic nuclear-free zones. Reinke crystals may be present but are often absent. Mitoses rare or absent.",
    ihc: "Inhibin, calretinin, SF1, and Melan-A usually positive; SATB2 may show cytoplasmic staining.",
    differential:
      "Steroid cell tumor, NOS: involves ovarian parenchyma rather than being hilar-centered. Metastatic renal/adrenal or other clear-cell neoplasms: correlate with clinical history and broader immunophenotype. A hilar location with otherwise classic morphology supports Leydig cell tumor even without Reinke crystals.",
    behavior:
      "Almost always benign when strict diagnostic criteria are applied.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure stromal tumors",
    name: "Steroid cell tumor",
    clue: "Distinct ovarian mass composed entirely of steroid-secreting cells; assess malignant-risk features.",
    morphology:
      "Tumor consists of cells with steroid-cell morphology, typically abundant eosinophilic, granular, or vacuolated cytoplasm. Solid or solid-cystic, often yellow/orange/red/brown; hemorrhage and necrosis may occur. The supplied classification excerpt does not provide a complete microscopic description.",
    ihc: "Sex cord markers are desirable; use inhibin, calretinin, SF1, and Melan-A in context.",
    molecular: "No pathognomonic recurrent molecular alteration established.",
    differential:
      "Leydig cell tumor: hilar-centered, often small, with lipochrome and sometimes Reinke crystals. Adrenocortical/renal metastasis: clinical and immunophenotypic correlation is essential. Distinguish a true discrete tumor from non-neoplastic hilar/stromal steroid cells.",
    behavior:
      "Recurrence and disease-specific death are uncommon but documented. Potential adverse features include size >7 cm, >2 mitoses/10 HPF (0.2 mm²), necrosis, hemorrhage, significant atypia, older age, and stage >IA; none is individually definitive.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure sex cord tumors",
    name: "Adult granulosa cell tumor",
    clue: "Grooved nuclei, variable sex cord patterns, Call–Exner bodies, and FOXL2 p.Cys134Trp.",
    morphology:
      "Diffuse, trabecular, corded, nested, microfollicular, macrofollicular, tubular, gyriform, or watered-silk patterns; Call–Exner bodies may be present. Cells usually have scant cytoplasm and pale round-to-oval nuclei with irregular contours and grooves. Fibromatous stroma may be prominent. Reticulin is absent/reduced around individual tumor cells but highlights nests.",
    ihc: "FOXL2, inhibin, SF1, and calretinin usually positive; EMA typically negative.",
    molecular:
      "FOXL2 c.402C>G, p.(Cys134Trp), in >90–95% of cases. False-negative testing can occur in low-cellularity/cystic tumors or those with prominent fibromatous stroma.",
    differential:
      "Fibroma/thecoma: complete pericellular reticulin and more uniformly stromal morphology. Juvenile granulosa cell tumor: younger patients, round nuclei without grooves, macrofollicular/nodular pattern, brisker mitoses; lacks the characteristic FOXL2 mutation. Sertoli cell tumor: tubules are often dominant, but focal tubules alone do not establish a mixed tumor.",
    behavior:
      "Malignant potential with frequent late recurrence; stage is most important. Long-term follow-up is required.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure sex cord tumors",
    name: "Juvenile granulosa cell tumor",
    clue: "Child/young patient; irregular follicles, round nuclei without grooves, and brisk mitotic activity.",
    morphology:
      "Nodular or diffuse growth punctuated by follicles of variable size and shape, often intermediate-sized; basophilic secretions may be present. Cells are epithelioid with round vesicular nuclei usually lacking grooves and abundant eosinophilic, gray, or vacuolated cytoplasm. Mitoses and apoptosis are often conspicuous; stroma may be edematous, myxoid, collagenous, or hyalinized.",
    ihc: "SF1, inhibin, calretinin, WT1, CD99, CD56, and FOXL2 usually positive; cytokeratins may be positive; EMA usually negative.",
    molecular:
      "Lacks the FOXL2 p.Cys134Trp mutation characteristic of adult granulosa cell tumor. AKT1, GNAS, and other alterations occur; DICER1 may be present in a subset.",
    differential:
      "Adult granulosa cell tumor: nuclear grooves, Call–Exner bodies, and FOXL2 mutation. Sertoli–Leydig cell tumor: look for Sertoli tubules/Leydig cells and DICER1; a DICER1-altered SLCT with JGCT-like areas should be classified as SLCT.",
    behavior:
      "Excellent when confined to ovary; rupture, positive peritoneal cytology, and extraovarian spread increase recurrence risk.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure sex cord tumors",
    name: "Sertoli cell tumor",
    clue: "Sertoliform tubules, often with hormonal manifestations; consider DICER1 and Peutz–Jeghers context.",
    morphology:
      "Hollow or solid tubules are present at least focally and often predominate; trabecular, diffuse, alveolar, pseudopapillary, retiform, pseudoendometrioid, and spindle patterns occur. Sertoli cells are cuboidal/columnar with pale, lipid-rich, or deeply eosinophilic cytoplasm and bland oval nuclei. Hyalinized stroma may be present.",
    ihc: "SF1 and WT1 usually positive; inhibin, calretinin, CD99, and broad-spectrum cytokeratin variable. EMA, CK7, PAX8, and chromogranin typically negative.",
    molecular:
      "A subset has DICER1 alterations; STK11 may be relevant in Peutz–Jeghers syndrome.",
    differential:
      "Adult granulosa cell tumor: grooved nuclei and variable patterns; tubular areas can occur, so do not overcall gynandroblastoma. Endometrioid carcinoma: PAX8/EMA/CK7 positivity and glandular atypia support epithelial differentiation. SLCT: identifiable Leydig-cell component and mixed differentiation.",
    behavior:
      "Typically benign; adverse behavior is very rare and enriched in tumors with increased atypia and ≥5 mitoses/10 HPF.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Pure sex cord tumors",
    name: "Sex cord tumor with annular tubules (SCTAT)",
    clue: "Rounded nests of ring-like tubules encircling hyaline basement-membrane material.",
    morphology:
      "Variably sized rounded nests of simple/complex tubules surrounding central hyaline basement-membrane-like material; cells are tall with pale cytoplasm and basally located nuclei often in antipodal distribution. Calcification and sclerosis may be extensive, especially in Peutz–Jeghers-associated cases.",
    ihc: "Calretinin, WT1, inhibin, SF1, CD56, and SOX9 usually positive; EMA and CD10 almost always negative.",
    molecular:
      "STK11 germline alteration in syndromic cases; consider Peutz–Jeghers syndrome.",
    differential:
      "Sertoli cell tumor: tubules lack the characteristic annular rings and central hyaline material. Adult granulosa cell tumor: Call–Exner bodies are small follicle-like spaces with secretions, not the characteristic annular tubules. Tubular areas in AGCT do not alone imply SCTAT.",
    behavior:
      "Peutz–Jeghers-associated tumors are typically benign; nonsyndromic tumors may show extraovarian spread.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Mixed sex cord-stromal tumors",
    name: "Sertoli–Leydig cell tumor (SLCT)",
    clue: "Sertoli tubules with Leydig cells; androgen excess; DICER1 in many moderate/poorly differentiated tumors.",
    morphology:
      "Variable proportions of Sertoli and Leydig cells. Well-differentiated tumors show recognizable tubules and Leydig cells; moderate/poor differentiation shows immature Sertoli-cell patterns, solid growth, and less obvious Leydig cells. Retiform architecture and heterologous elements may occur. Grade/differentiation and extensive sampling matter.",
    ihc: "Sex cord markers including inhibin, SF1, calretinin, and FOXL2; cytokeratin may be positive; EMA almost always negative.",
    molecular:
      "DICER1 pathogenic variants common in moderate/poorly differentiated and retiform tumors, often with a second hit; consider germline DICER1 evaluation. Well-differentiated SLCTs are generally DICER1 wild type and represent a distinct group.",
    differential:
      "Juvenile granulosa cell tumor: follicular pattern can mimic SLCT; DICER1 alteration and any true Sertoli component favor SLCT. Pure Sertoli cell tumor lacks a convincing Leydig component. Gynandroblastoma requires two or more distinct tumor components, not focal mimicry within SLCT/AGCT.",
    behavior:
      "Behavior varies with differentiation, stage, and adverse histologic features; assess and report heterologous elements and relevant grade.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Mixed sex cord-stromal tumors",
    name: "Gynandroblastoma",
    clue: "True admixture of at least two distinct sex cord-stromal tumor types.",
    morphology:
      "Requires distinct, recognizable components of two or more sex cord-stromal tumor types. A fibromatous component in AGCT, tubular areas in AGCT, or focal JGCT-like areas in DICER1-altered SLCT do not by themselves establish gynandroblastoma.",
    ihc: "Usually positive for sex cord markers such as inhibin, SF1, calretinin, CD56, and FOXL2.",
    molecular:
      "FOXL2 and DICER1 testing may help distinguish from AGCT or SLCT in the appropriate context.",
    differential:
      "Exclude a single tumor with divergent architecture or morphologic mimicry. In particular, AGCT with tubular areas remains AGCT; DICER1-altered SLCT with JGCT-like areas is generally an SLCT variant.",
    behavior: "Most are benign; rare recurrences reported.",
  },
  {
    group: "Sex cord-stromal tumors",
    family: "Other",
    name: "Sex cord-stromal tumor, NOS",
    clue: "Convincing sex cord-stromal differentiation but no definable specific subtype.",
    morphology:
      "Use only after adequate sampling and exclusion of recognizable pure stromal, pure sex cord, and mixed subtypes. Describe architecture, cytology, stromal component, mitotic activity, necrosis, and any heterologous differentiation.",
    ihc: "A panel supporting sex cord-stromal differentiation (e.g., SF1, inhibin, calretinin, FOXL2) is useful but does not reliably subtype the tumor.",
    differential:
      "Revisit AGCT, JGCT, Sertoli cell tumor, SLCT, thecoma/fibroma, and metastatic mimics. IHC confirms lineage more reliably than it separates individual SCST entities.",
    behavior:
      "Clinical behavior depends on the specific morphology and stage; avoid assigning a subtype unsupported by the findings.",
  },
  {
    group: "Germ cell tumors",
    family: "Malignant germ cell tumors",
    name: "Dysgerminoma",
    clue: "Sheets/nests of large clear germ cells separated by fibrous septa with lymphocytes; KIT/OCT3/4/SALL4.",
    morphology:
      "Large uniform polygonal cells with clear-to-granular cytoplasm, distinct cell borders, and central nuclei with prominent nucleoli. Nests/sheets are separated by fibrous septa containing lymphocytes; granulomas may occur. Syncytiotrophoblastic giant cells may be present.",
    ihc: "SALL4, OCT3/4, KIT (CD117), PLAP, and D2-40 typically positive; CD30 and AFP negative. Syncytiotrophoblastic cells may express hCG.",
    molecular: "Isochromosome 12p or 12p amplification is common.",
    differential:
      "Yolk sac tumor: reticular/microcystic pattern, hyaline globules, AFP/Glypican-3 positivity, OCT3/4 negative. Lymphoma: leukocyte markers positive, germ-cell markers negative. Clear cell carcinoma: PAX8/keratin positive and OCT3/4 negative.",
    behavior:
      "Malignant germ cell tumor; stage is key; often highly treatment-responsive.",
  },
  {
    group: "Germ cell tumors",
    family: "Malignant germ cell tumors",
    name: "Yolk sac tumor",
    clue: "Reticular/microcystic pattern, Schiller–Duval bodies, hyaline globules, AFP/Glypican-3.",
    morphology:
      "Reticular/microcystic, solid, glandular, papillary, hepatoid, or polyvesicular vitelline patterns. Schiller–Duval bodies are characteristic but not always present. Hyaline globules may be intra- or extracellular; cytologic atypia and mitoses vary.",
    ihc: "SALL4, AFP, Glypican-3, and broad-spectrum cytokeratin typically positive; OCT3/4 negative. Interpret AFP as supportive rather than independently diagnostic.",
    molecular:
      "PIK3CA/AKT1 pathway alterations may occur; 12p gain can be seen in germ cell tumor context.",
    differential:
      "Dysgerminoma: OCT3/4 and KIT positive, AFP/Glypican-3 negative. Hepatoid carcinoma/metastatic carcinoma: correlate with PAX8, epithelial markers, clinical history, and other germ-cell components. Somatically derived yolk sac tumor in carcinoma is not a true germ cell tumor and should not be managed as one.",
    behavior: "Malignant; stage and treatment response are important.",
  },
  {
    group: "Germ cell tumors",
    family: "Malignant germ cell tumors",
    name: "Embryonal carcinoma",
    clue: "Primitive epithelial sheets/glands with marked atypia; OCT3/4, CD30, SALL4.",
    morphology:
      "Primitive, highly atypical epithelial cells in solid, glandular, papillary, or alveolar patterns; brisk mitotic activity, apoptosis, and necrosis are common. May be one component of a mixed germ cell tumor.",
    ihc: "OCT3/4, CD30, SALL4, and cytokeratins typically positive; distinguish from dysgerminoma (usually CD30 negative) and yolk sac tumor (OCT3/4 negative).",
    differential:
      "Dysgerminoma: uniform clear cells, fibrous septa/lymphocytes, OCT3/4 positive but CD30 negative. Yolk sac tumor: reticular architecture/hyaline globules and AFP/Glypican-3. High-grade carcinoma: use age, morphology, germ-cell markers, and associated components.",
    behavior:
      "Malignant; frequently occurs as a component of mixed germ cell tumor.",
  },
  {
    group: "Germ cell tumors",
    family: "Malignant germ cell tumors",
    name: "Non-gestational choriocarcinoma",
    clue: "Markedly hemorrhagic tumor with cytotrophoblast and syncytiotrophoblast; hCG.",
    morphology:
      "Biphasic trophoblastic proliferation with mononuclear cytotrophoblast and multinucleated syncytiotrophoblast, extensive hemorrhage and necrosis. Search for other germ cell components in the tumor.",
    ihc: "hCG strongly highlights syncytiotrophoblast; cytokeratins and other trophoblastic markers support differentiation. Interpret in clinical context.",
    differential:
      "Gestational choriocarcinoma: clinical/paternity/pregnancy history and molecular genotyping may be needed. Epithelioid trophoblastic tumor and placental site trophoblastic tumor have distinct morphology and immunophenotypes. Somatic carcinoma with trophoblastic differentiation is not automatically a germ cell tumor.",
    behavior:
      "Highly malignant; clinical correlation and staging are essential.",
  },
  {
    group: "Germ cell tumors",
    family: "Malignant germ cell tumors",
    name: "Malignant mixed germ cell tumor",
    clue: "Two or more malignant germ cell components; report each component and its percentage.",
    morphology:
      "Any amount of a second malignant germ cell component is sufficient. Components may be intimately admixed or geographically separate. Common combinations include dysgerminoma plus yolk sac tumor, immature teratoma plus yolk sac tumor, and embryonal carcinoma plus yolk sac tumor. Polyembryoma is reserved for tumors with >90% embryoid bodies.",
    ihc: "Apply component-specific markers: OCT3/4/KIT for dysgerminoma; AFP/Glypican-3 for yolk sac tumor; OCT3/4/CD30 for embryonal carcinoma; hCG for syncytiotrophoblast.",
    differential:
      "Do not label a tumor mixed solely because syncytiotrophoblastic giant cells occur in another component. Identify and quantify each genuine malignant germ cell component; distinguish polyembryoma from a mixed tumor with only scattered embryoid bodies.",
    behavior: "Malignant; stage is the most important prognostic factor.",
  },
  {
    group: "Germ cell tumors",
    family: "Teratomas",
    name: "Immature teratoma",
    clue: "Immature embryonal tissue, especially neuroepithelium; grade by immature neuroepithelial component.",
    morphology:
      "Contains immature tissues, most importantly immature neuroepithelium, in a background of mature teratomatous elements. Sample extensively because immature components may be focal. Report grade and any associated malignant germ cell component.",
    ihc: "IHC is directed by the immature component and differential; neuroepithelial markers may support primitive neural tissue but morphology remains central.",
    differential:
      "Mature teratoma: mature tissues only. Yolk sac tumor: primitive reticular/solid growth with AFP/Glypican-3 and no organized teratomatous tissue pattern. Somatic-type malignancy arising in teratoma: diagnose and classify the somatic malignancy separately.",
    behavior:
      "Malignant germ cell tumor category; prognosis relates to stage and grade.",
  },
  {
    group: "Germ cell tumors",
    family: "Teratomas",
    name: "Mature teratoma (including somatic neoplasms arising from teratoma)",
    clue: "Mature tissues from multiple germ layers; carefully search for somatic-type neoplasia.",
    morphology:
      "Mature differentiated tissues from one or more germ layers, commonly skin/adnexa, neural tissue, respiratory or gastrointestinal epithelium, cartilage, bone, and other tissues. Somatic neoplasms may arise within teratoma; mucinous neoplasms are classified in this section in the current WHO framework.",
    ihc: "Use lineage-specific IHC for any suspected somatic neoplasm; do not apply a generic teratoma panel.",
    differential:
      "Immature teratoma: immature embryonal tissue/neuroepithelium. Metastatic carcinoma involving a teratoma: assess for transition, anatomic distribution, and clinical history. A somatic malignancy arising in teratoma is not a conventional malignant germ cell component.",
    behavior:
      "Mature teratoma is benign; behavior depends on any associated somatic neoplasm.",
  },
  {
    group: "Germ cell tumors",
    family: "Monodermal teratomas",
    name: "Struma ovarii",
    clue: "Thyroid tissue predominates; assess for malignant thyroid-type features.",
    morphology:
      "Monodermal teratoma composed predominantly of mature thyroid tissue; may be solid or cystic and may show colloid-filled follicles. Search for other teratomatous elements and for papillary/follicular thyroid-type carcinoma features.",
    ihc: "Thyroglobulin, TTF-1, and PAX8 support thyroid follicular differentiation.",
    differential:
      "Metastatic thyroid carcinoma: clinical history, bilateral/multifocal ovarian disease, vascular invasion, and absence of other teratomatous elements may raise concern. Benign struma lacks diagnostic malignant nuclear/architectural features.",
    behavior:
      "Usually benign; malignant thyroid-type neoplasia may arise and should be classified by its morphology.",
  },
  {
    group: "Germ cell tumors",
    family: "Monodermal teratomas",
    name: "Ovarian carcinoid",
    clue: "Well-differentiated neuroendocrine tumor; exclude metastasis, especially GI primary.",
    morphology:
      "Insular, trabecular, strumal, or mucinous patterns. Uniform round-to-oval cells have pink cytoplasm and salt-and-pepper chromatin; argentaffin granules may be seen. Mucinous carcinoid may show crowded glands/cribriforming; carcinoma arising in mucinous carcinoid shows solid/signet-ring growth, severe atypia, brisk mitoses, and mucin depletion.",
    ihc: "INSM1, chromogranin, synaptophysin, and CD56 positive; Ki-67 typically low. CDX2/SATB2 may be positive and do not independently establish primary ovarian origin.",
    differential:
      "Metastatic GI/lung NET: integrate history, laterality, size, nodularity, teratomatous elements, and LVI. Small unilateral tumor with teratoma favors primary ovarian origin; bilateral large multinodular disease without teratoma favors metastasis.",
    behavior:
      "Usually excellent prognosis; advanced stage and poorly differentiated mucinous carcinoid are concerning.",
  },
  {
    group: "Germ cell tumors",
    family: "Monodermal teratomas",
    name: "Other monodermal teratomas",
    clue: "Mature tissue derived predominantly from one germ layer or a specialized tissue type.",
    morphology:
      "Includes specialized monodermal teratomas such as thyroid-type and neuroendocrine/pituitary-type lesions. Identify the dominant differentiated tissue and assess for associated teratomatous elements or a somatic neoplasm.",
    ihc: "Use lineage-specific markers based on the dominant tissue (e.g., pituitary hormones/transcription factors for pituitary-type adenoma).",
    differential:
      "Metastasis from an extraovarian primary should be excluded using clinical history, morphology, and lineage-specific markers. Distinguish a monodermal teratoma from a somatic neoplasm arising in a conventional teratoma.",
    behavior:
      "Generally benign unless a specific associated malignant neoplasm is identified.",
  },
  {
    group: "Germ cell tumors",
    family: "Gonadal dysgenesis-associated tumors",
    name: "Gonadoblastoma",
    clue: "In situ mixed germ-cell/sex-cord lesion in dysgenetic gonad; rounded nests with basement membrane deposits.",
    morphology:
      "Rounded nests containing heterogeneous germ cells, including germinoma-like cells, admixed with small sex cord cells and rounded basement-membrane deposits. May show calcification. Search for an associated invasive germ cell tumor.",
    ihc: "Germ cells: SALL4, OCT3/4, PLAP, D2-40. Sex cord cells: inhibin, calretinin, SF1, FOXL2, weak SOX9.",
    differential:
      "Mixed germ cell–sex cord stromal tumor, unclassified: irregular/haphazard admixture without the characteristic rounded gonadoblastoma nests and basement-membrane deposits. Dysgerminoma: lacks the organized sex cord component.",
    behavior:
      "In situ malignancy; not staged. Excision is curative for gonadoblastoma, but associated invasive germ cell tumor changes management.",
  },
  {
    group: "Germ cell tumors",
    family: "Gonadal dysgenesis-associated tumors",
    name: "Mixed germ cell–sex cord stromal tumor, unclassified",
    clue: "Irregular admixture of dysgerminoma-like germ cells and sex cord cells without classic gonadoblastoma architecture.",
    morphology:
      "Large germ cells singly or in small clusters, with pleomorphic nuclei and abundant often clear PAS-positive cytoplasm, intermixed haphazardly with sex cord cells in cords, trabeculae, tubules, cysts, or diffuse growth.",
    ihc: "Germ cells: SALL4, PLAP, OCT3/4, KIT. Sex cord cells: inhibin, calretinin, SF1.",
    differential:
      "Gonadoblastoma: rounded nests, heterogeneous germ cells, sex cord cells, and basement membrane deposits. Pure dysgerminoma lacks the sex cord component.",
    behavior:
      "Most are clinically benign, but a malignant germ cell tumor (most often dysgerminoma) develops in a minority.",
  },
  {
    group: "Miscellaneous tumors",
    family: "Hilar epithelial tumors",
    name: "Rete cystadenoma and rete adenoma",
    clue: "Hilar location; benign tubulocystic/adenomatous lesion derived from rete ovarii.",
    morphology:
      "Located in ovarian hilum. Rete cystadenoma shows cystic spaces; rete adenoma shows adenomatous/tubular proliferation. Correlate with hilar anatomy and exclude other epithelial tumors.",
    ihc: "Use a panel to exclude mimics; no single profile should override the characteristic site and morphology.",
    differential:
      "Serous or endometrioid epithelial neoplasm: evaluate epithelial cytology, architecture, and relationship to ovarian surface/inclusion cysts. Metastatic tumor: clinical history and distribution.",
    behavior: "Benign.",
  },
  {
    group: "Miscellaneous tumors",
    family: "Other",
    name: "Solid pseudopapillary neoplasm",
    clue: "Solid and pseudopapillary architecture with nuclear β-catenin; exclude pancreatic primary/metastasis.",
    morphology:
      "Mixture of solid and pseudopapillary patterns, often with degenerative changes and delicate fibrovascular cores. Tumor cells may be uniform with eosinophilic cytoplasm and grooved/indented nuclei.",
    ihc: "Nuclear and cytoplasmic β-catenin; loss of membranous E-cadherin. Chromogranin, calretinin, ER, and inhibin typically negative.",
    molecular: "CTNNB1 alteration may assist diagnosis.",
    differential:
      "Ovarian sex cord-stromal tumor: sex cord markers positive, usually no nuclear β-catenin pattern. Metastatic pancreatic solid pseudopapillary neoplasm: clinical/imaging correlation essential. Neuroendocrine tumor: chromogranin/synaptophysin and morphology differ.",
    behavior:
      "Most are confined to ovary and behave indolently, but extraovarian spread is reported.",
  },
  {
    group: "Miscellaneous tumors",
    family: "Other",
    name: "Small cell carcinoma of the ovary, hypercalcemic type (SCCOHT)",
    clue: "Young patient, hypercalcemia, undifferentiated small-cell malignancy, loss of BRG1/SMARCA4.",
    morphology:
      "High-grade undifferentiated malignancy composed of small cells, with or without a large-cell component; brisk mitoses, necrosis, and rhabdoid/epithelioid areas may occur. Hypercalcemia is a major clinical clue but is not universal.",
    ihc: "Loss of SMARCA4 (BRG1) in tumor cells with retained internal controls is critical; assess SMARCA2 (BRM) as appropriate. Other markers are variable and nonspecific.",
    molecular:
      "SMARCA4 inactivation in almost all cases; a substantial subset has germline variants. Rare SMARCB1-mutated cases occur.",
    differential:
      "Other small round blue cell tumors, lymphoma, dysgerminoma, high-grade carcinoma, and metastatic tumors. SMARCA4 loss in the correct morphologic/clinical setting supports SCCOHT; correlate with germline evaluation.",
    behavior: "Highly aggressive malignancy.",
  },
  {
    group: "Miscellaneous tumors",
    family: "Other",
    name: "Ovarian Wilms tumor (nephroblastoma)",
    clue: "Triphasic blastemal, epithelial, and stromal tumor; exclude SLCT, especially if no teratoma.",
    morphology:
      "Usually a combination of blastemal, epithelial, and stromal elements, although monophasic/biphasic forms occur. Blastema: densely packed small-to-medium cells with scant cytoplasm, coarse chromatin, mitoses and apoptosis. Epithelium: rosettes, papillae, tubules, glands, or glomeruloid structures. Stroma: spindle cells, sometimes with rhabdomyoblastic, cartilaginous, adipocytic, osseous, or neural heterologous elements.",
    ihc: "Blastema typically WT1, PAX8, and vimentin positive; epithelial component cytokeratin/EMA positive; stromal component vimentin with variable desmin. Synaptophysin, chromogranin, calretinin, SF1, and inhibin usually negative.",
    molecular:
      "DICER1 testing is recommended when pure ovarian Wilms tumor is considered against moderately/poorly differentiated SLCT; DICER1 alterations are common in the latter.",
    differential:
      "Moderately/poorly differentiated SLCT: major diagnostic mimic, often DICER1-altered and may express sex cord markers. Teratoma-associated Wilms tumor supports true nephroblastoma. Consider other sarcomas and embryonal tumors.",
    behavior:
      "Rare; stage as a primary ovarian neoplasm rather than automatically applying extrarenal Wilms tumor staging conventions.",
  },
];
const groups = [
  "All",
  "Sex cord-stromal tumors",
  "Germ cell tumors",
  "Miscellaneous tumors",
];
const families = [...new Set(entities.map((x) => x.family))];
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}
export default function Page() {
  const [group, setGroup] = useState("All"),
    [query, setQuery] = useState("");
  const shown = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          `${e.name} ${e.family} ${e.clue} ${e.differential}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [group, query],
  );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-5 py-10">
        <header className="bg-white border border-slate-200 rounded-2xl p-7 md:p-10 mb-8 shadow-sm">
          <div className="text-xs uppercase tracking-[.2em] font-semibold text-teal-700 mb-3">
            PathologyGPS · Female Genital Tract
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
            Ovarian Non-Epithelial Tumors
          </h1>
          <p className="text-lg text-slate-600 mt-3 max-w-4xl">
            A morphology-first diagnostic guide to sex cord-stromal tumors, germ
            cell tumors, and miscellaneous ovarian neoplasms.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {groups.slice(1).map((g) => (
              <span
                key={g}
                className="rounded-full bg-teal-50 text-teal-800 px-3 py-1 text-sm font-medium"
              >
                {g}
              </span>
            ))}
          </div>
        </header>
        <Section title="1. Initial classification: start with lineage, not a long differential">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              [
                "Sex cord-stromal lineage",
                "Spindle, theca-like, granulosa-like, Sertoli-like, or steroid-cell morphology. Ask whether the lesion is stromal, pure sex cord, or genuinely mixed.",
                "SF1, inhibin, calretinin, FOXL2; then subtype with morphology, reticulin, and targeted molecular testing.",
              ],
              [
                "Germ cell lineage",
                "Primitive germ cells, clear polygonal cells, reticular/microcystic patterns, immature neural tissue, or mature teratomatous tissues.",
                "SALL4, OCT3/4, KIT, PLAP, AFP, Glypican-3, CD30, hCG, and lineage-directed markers selected by morphology.",
              ],
              [
                "Miscellaneous / other",
                "Does not fit the two major lineages, or has a distinctive clinical-molecular signature (e.g., hypercalcemia/SMARCA4 loss).",
                "Use morphology-directed panels; exclude metastasis and tumors classified in other WHO chapters.",
              ],
            ].map(([a, b, c]) => (
              <div
                key={a}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <h3 className="font-bold text-teal-800 mb-2">{a}</h3>
                <p className="text-sm mb-3">{b}</p>
                <p className="text-sm text-slate-600">
                  <b>Next:</b> {c}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm">
            <b>Practical first-pass questions</b>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>
                Is the tumor predominantly spindle/stromal, sex cord-like,
                germ-cell-like, or another lineage?
              </li>
              <li>
                Is it unilateral or bilateral, hilar or parenchymal, and is the
                patient a child, young adult, or postmenopausal?
              </li>
              <li>
                Are there endocrine manifestations (androgenic, estrogenic),
                hypercalcemia, or a syndrome clue (DICER1, Peutz–Jeghers,
                gonadal dysgenesis)?
              </li>
              <li>
                Is there a recognizable second component? Sample extensively
                before diagnosing a mixed tumor.
              </li>
              <li>
                Use IHC to establish lineage; use morphology and selected
                molecular tests to resolve subtype. No single SCST marker
                reliably distinguishes all SCST types.
              </li>
            </ol>
          </div>
        </Section>
        <Section title="2. Core immunohistochemical approach">
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  {["Question", "Useful markers", "Interpretive point"].map(
                    (x) => (
                      <th key={x} className="text-left p-3">
                        {x}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Sex cord-stromal differentiation",
                    "SF1, inhibin, calretinin, FOXL2, WT1",
                    "Supports lineage; usually does not independently distinguish individual SCST entities.",
                  ],
                  [
                    "Adult granulosa cell tumor",
                    "FOXL2, inhibin, SF1, calretinin; reticulin",
                    "FOXL2 p.Cys134Trp is highly characteristic; reticulin around nests rather than individual cells.",
                  ],
                  [
                    "Microcystic stromal tumor",
                    "β-catenin, cyclin D1, CD10, SF1; inhibin/calretinin",
                    "Nuclear β-catenin with inhibin/calretinin negativity supports this entity.",
                  ],
                  [
                    "Germ cell tumor",
                    "SALL4, OCT3/4, KIT, PLAP, D2-40",
                    "Dysgerminoma typically OCT3/4+/KIT+; correlate with architecture.",
                  ],
                  [
                    "Yolk sac tumor",
                    "AFP, Glypican-3, SALL4, cytokeratin",
                    "AFP/Glypican-3 support yolk sac differentiation; OCT3/4 is usually negative.",
                  ],
                  [
                    "Embryonal carcinoma",
                    "OCT3/4, CD30, SALL4, cytokeratin",
                    "CD30 positivity helps distinguish from dysgerminoma.",
                  ],
                  [
                    "SCCOHT",
                    "SMARCA4 (BRG1), SMARCA2 (BRM)",
                    "Loss of BRG1 in tumor cells with retained internal controls is a key diagnostic clue.",
                  ],
                  [
                    "Ovarian Wilms tumor",
                    "WT1, PAX8, cytokeratin/EMA, desmin",
                    "Interpret by component; exclude DICER1-altered SLCT.",
                  ],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-slate-100">
                    {r.map((c) => (
                      <td key={c} className="p-3 align-top">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
        <Section title="3. Entity atlas and diagnostic differentials">
          <div className="flex flex-wrap gap-2 mb-4">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => {
                  setGroup(g);
                }}
                className={`px-3 py-2 rounded-full text-sm border ${group === g ? "bg-teal-700 text-white border-teal-700" : "bg-white border-slate-300 hover:border-teal-500"}`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tumor, morphology, marker, or differential…"
              className="w-full md:max-w-xl rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm"
            />
            <span className="text-sm text-slate-500 self-center">
              {shown.length} entities
            </span>
          </div>
          <div className="space-y-6">
            {shown.map((e) => (
              <article
                key={e.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <header className="p-5 md:p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    {e.group} · {e.family}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {e.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {e.clue}
                  </p>
                </header>
                <div className="grid gap-6 border-t border-slate-200 p-5 md:grid-cols-2 md:p-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[.15em] text-rose-700">
                      Histology Description
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-800">
                      {e.morphology}
                    </p>
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-xl bg-sky-50 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-[.15em] text-sky-800">
                        Immunohistochemistry
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-800">
                        {e.ihc}
                      </p>
                      {e.molecular && (
                        <div className="mt-4 border-t border-sky-100 pt-3">
                          <h4 className="text-xs font-bold uppercase tracking-[.15em] text-sky-800">
                            Molecular Pathology
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-slate-800">
                            {e.molecular}
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[.15em] text-emerald-700">
                        Differential Diagnosis
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-800">
                        {e.differential}
                      </p>
                    </div>
                    {e.behavior && (
                      <div className="rounded-xl bg-amber-50 p-5">
                        <h4 className="text-xs font-bold uppercase tracking-[.15em] text-amber-800">
                          Diagnostic / Reporting Note
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-800">
                          {e.behavior}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
            {shown.length === 0 && (
              <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
                No matching entities. Try a broader search term.
              </p>
            )}
          </div>
        </Section>
        <Section title="4. High-yield diagnostic separations">
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 text-left">Diagnostic problem</th>
                  <th className="p-3 text-left">Favor</th>
                  <th className="p-3 text-left">Do not overcall</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Fibroma vs thecoma",
                    "Fibroma: bland spindle cells/collagen. Thecoma: plump pale/lipid-rich cells; individual-cell reticulin.",
                    "Do not use “fibrothecoma” as a default label.",
                  ],
                  [
                    "AGCT vs fibroma/thecoma",
                    "AGCT: grooved nuclei, varied patterns, reticulin around nests, FOXL2 mutation.",
                    "A fibromatous component does not make AGCT a gynandroblastoma.",
                  ],
                  [
                    "AGCT vs JGCT",
                    "AGCT: grooved nuclei, Call–Exner bodies, FOXL2 p.Cys134Trp. JGCT: round nuclei, irregular follicles, often brisk mitoses.",
                    "Tubular areas alone do not establish a Sertoli component.",
                  ],
                  [
                    "SLCT vs JGCT",
                    "Look for true Sertoli tubules/Leydig cells; DICER1 supports many moderate/poorly differentiated SLCTs.",
                    "DICER1-altered SLCT with JGCT-like areas is generally SLCT, not gynandroblastoma.",
                  ],
                  [
                    "Microcystic stromal vs signet-ring stromal tumor",
                    "Microcystic stromal: solid/microcystic zones, nuclear β-catenin/cyclin D1. Signet-ring stromal: fibromatous stroma, bland non-mucin vacuoles, EMA negative.",
                    "Exclude metastatic mucinous signet-ring carcinoma.",
                  ],
                  [
                    "Dysgerminoma vs yolk sac tumor",
                    "Dysgerminoma: OCT3/4+/KIT+, fibrous septa/lymphocytes. Yolk sac: AFP/Glypican-3+, reticular pattern/hyaline globules.",
                    "Do not rely on a single marker without morphology.",
                  ],
                  [
                    "SCCOHT vs other small round cell tumors",
                    "Young patient, hypercalcemia, undifferentiated morphology, SMARCA4/BRG1 loss.",
                    "Consider germline SMARCA4 testing when appropriate.",
                  ],
                  [
                    "Ovarian Wilms tumor vs SLCT",
                    "Triphasic nephroblastomatous pattern and/or teratoma; DICER1 testing helps exclude SLCT.",
                    "Pure ovarian Wilms tumor is exceptionally rare; scrutinize the diagnosis.",
                  ],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-slate-100">
                    {r.map((c) => (
                      <td key={c} className="p-3 align-top">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
        <Section title="5. Sampling and reporting checklist">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                Document laterality, ovarian surface/capsular involvement,
                rupture, adhesions, hilar versus parenchymal location, and
                extraovarian disease.
              </li>
              <li>
                Sample heterogeneous solid, cystic, hemorrhagic, necrotic, and
                firm/white areas; search for small secondary components before
                diagnosing a mixed tumor.
              </li>
              <li>
                For malignant mixed germ cell tumor, list every component and
                estimate its percentage of the overall tumor.
              </li>
              <li>
                For AGCT, assess reticulin pattern and consider FOXL2 testing in
                equivocal cases; remember late recurrence.
              </li>
              <li>
                For SLCT, document differentiation, retiform pattern,
                heterologous elements, and consider DICER1 testing/genetic
                referral.
              </li>
              <li>
                For steroid cell tumor, record size, mitotic activity per
                defined area, necrosis, hemorrhage, atypia, and stage; no single
                feature reliably predicts behavior.
              </li>
              <li>
                For SCCOHT, assess SMARCA4 expression and consider germline
                evaluation.
              </li>
              <li>
                For suspected primary ovarian carcinoid, exclude an extraovarian
                primary.
              </li>
              <li>
                Do not force ovarian mesenchymal tumors, mesothelial tumors, or
                neuroectodermal tumors into this chapter when they are
                classified in separate WHO chapters.
              </li>
            </ul>
          </div>
        </Section>
        <footer className="border-t border-slate-200 pt-5 text-xs text-slate-500">
          Educational reference for professional use. Interpret morphology,
          immunophenotype, molecular findings, and clinical context together.
          The immunohistochemical profile of sex cord-stromal tumors is
          supportive but often not subtype-specific. Follow current
          institutional protocols and the current WHO classification.
        </footer>
      </div>
    </main>
  );
}
