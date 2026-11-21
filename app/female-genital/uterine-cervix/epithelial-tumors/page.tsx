"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  histology: string[];
  ihc: string[];
  differential: { name: string; distinction: string }[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Squamous Intraepithelial Lesions (LSIL and HSIL)",
    group: "Squamous Precursors",
    clue: "Use maturation, nuclear atypia, and the vertical distribution of mitoses—not koilocytosis alone.",
    summary:
      "HPV-associated squamous proliferations confined above the basement membrane. Report HSIL with the CIN qualifier (HSIL/CIN2 or HSIL/CIN3) when appropriate.",
    histology: [
      "LSIL: basal/parabasal-like cells with increased N:C ratios are largely confined to the lower one third. Maturation is preserved in the middle and upper thirds. Koilocytosis, binucleation, and multinucleation may be present; superficial nuclear atypia alone does not establish HSIL when abundant cytoplasm and maturation are retained.",
      "Condylomatous LSIL may show papillary fronds with fibrovascular cores and pointed epithelial spikes. Papillary immature metaplasia shows slender filiform papillae, usually near the proximal squamocolumnar junction, with mild atypia and low mitotic activity.",
      "HSIL: immature basaloid cells extend above the lower third, with nuclear crowding, loss of polarity, increased N:C ratios, and mitotic activity in the middle or upper epithelial layers. Atypical mitoses above the basal compartment strongly support HSIL.",
      "HSIL/CIN2 shows atypia and mitoses extending into the upper half to upper two thirds, with some maturation. HSIL/CIN3 shows full-thickness atypia and mitotic activity with minimal superficial maturation. Thin HSIL (10 cell layers or fewer), keratinizing HSIL, and HSIL with immature metaplastic phenotype are recognized patterns.",
      "Expansile HSIL/CIN3 may extensively involve and expand endocervical glands, sometimes with central necrosis. Deep gland involvement alone is not stromal invasion; examine the epithelial-stromal interface carefully and obtain deeper levels when needed.",
    ],
    ihc: [
      "p16 is a problem-solving stain, not a screening stain for every biopsy. Block-positive staining is strong, continuous nuclear or nuclear/cytoplasmic staining beginning in basal/parabasal cells and extending upward through at least one third of the epithelium.",
      "Patchy, scattered, wispy, blob-like, or cytoplasmic-only staining is non-block-type and does not support HSIL.",
      "A block-positive p16 result does not independently convert morphologic LSIL into HSIL; a substantial minority of adjudicated LSILs may show block staining.",
      "Use p16 when distinguishing HSIL from immature squamous metaplasia, atrophy, inflammation, repair, tangential sectioning, or when adjudicating a morphologically equivocal CIN2-type lesion.",
    ],
    differential: [
      {
        name: "Immature squamous metaplasia",
        distinction:
          "Usually retains orderly maturation and lacks convincing diffuse nuclear atypia or suprabasal atypical mitoses; p16 is generally non-block-type.",
      },
      {
        name: "Atrophy / reactive or reparative epithelium",
        distinction:
          "Can show crowded small cells, but nuclear contours and chromatin are more uniform; correlate with inflammation, erosion, and tissue orientation.",
      },
      {
        name: "LSIL versus HSIL",
        distinction:
          "Judge the level reached by immature atypical cells and mitoses. Koilocytosis or striking superficial nuclei alone do not establish HSIL.",
      },
      {
        name: "HSIL involving endocervical glands versus invasion",
        distinction:
          "Glandular involvement preserves a recognizable gland outline; destructive irregular nests, stromal response, or paradoxical maturation raise concern for invasion.",
      },
    ],
    pitfalls: [
      "Do not diagnose LSIL from perinuclear halos without accompanying nuclear atypia.",
      "Do not downgrade morphologically unequivocal HSIL solely because p16 is negative/non-block-type.",
      "Use CIN2/CIN3 qualifiers because the distinction can affect management, particularly in younger patients.",
    ],
  },
  {
    name: "Cervical Intraepithelial Neoplasia, HPV-Independent",
    group: "Squamous Precursors",
    clue: "A rare, evolving category; require a compatible pattern and usually negative/non-block p16, with HPV testing when feasible.",
    summary:
      "A possible precursor to HPV-independent squamous cell carcinoma. Morphologic patterns and natural history remain incompletely characterized.",
    histology: [
      "Differentiated pattern: thickened squamous epithelium with near-normal superficial maturation, elongated or anastomosing rete ridges, basal or suprabasal atypia, and increased mitoses limited mainly to lower layers. Abrupt premature maturation, dyskeratosis, and keratin pearls are characteristic clues.",
      "Verrucous/verruciform pattern: exophytic papillary proliferation, often with hyperkeratosis/parakeratosis and loss of the granular layer, but without significant basal atypia or appreciable mitotic activity.",
      "Basaloid pattern: immature basaloid proliferation, often involving endocervical crypts, and may closely mimic HSIL.",
      "Koilocytosis is absent in the described patterns, although pseudokoilocytosis may occur.",
    ],
    ihc: [
      "p16 is usually negative/non-block-type. Occasional basaloid examples with block-type staining have been reported despite negative HPV testing; interpret cautiously.",
      "Differentiated pattern may show mutation-type p53 in atypical basal cells. Verruciform lesions are typically p53 wild-type.",
      "For a suspected HPV-independent precursor, correlate morphology with HPV molecular testing when available.",
    ],
    differential: [
      {
        name: "HSIL",
        distinction:
          "Usually block-type p16 and high-risk HPV-associated; basaloid HPV-independent CIN may be difficult, so HPV testing can be decisive.",
      },
      {
        name: "Condyloma / LSIL",
        distinction:
          "Usually shows koilocytosis and HPV cytopathic effect; HPV-independent verruciform lesions lack true koilocytosis.",
      },
      {
        name: "Reactive hyperplasia / lichenified epithelium",
        distinction:
          "Look for orderly maturation and absence of convincing basal atypia or atypical mitoses.",
      },
    ],
    molecular: [
      "HPV testing, if performed, should be negative.",
      "TP53 alterations may occur in differentiated lesions; PIK3CA, EGFR, or SMARCB1 alterations have been reported in verruciform lesions, but molecular subgroups are not established.",
    ],
    pitfalls: [
      "The entity is newly described and criteria are not fully validated. Do not overstate biological behavior or progression risk.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma, HPV-Associated",
    group: "Squamous Carcinomas",
    clue: "Invasive squamous morphology plus block-type p16; direct high-risk HPV testing is useful when results are discordant.",
    summary:
      "The great majority of cervical squamous cell carcinomas are HPV-associated.",
    histology: [
      "Invasion is characterized by irregular, angulated nests, anastomosing cords, or solid sheets infiltrating cervical stroma, often with desmoplastic or inflammatory response. Nuclear pleomorphism and mitotic activity are usually present.",
      "Early invasion may appear as small, ragged nests arising from HSIL, with paradoxical cytoplasmic eosinophilia, stromal loosening, or desmoplasia.",
      "Nonkeratinizing SCC shows polygonal cells in nests or sheets without keratin pearls. Keratinizing SCC shows individual cell keratinization and keratin pearls. Basaloid SCC has immature cells with scant cytoplasm and may closely resemble HSIL.",
      "Warty/condylomatous and papillary patterns may be exophytic; invasion can be extremely focal or unapparent in a small biopsy. Lymphoepithelioma-like, spindle cell, and acantholytic patterns are uncommon.",
      "Histologic pattern and grade are not established prognostic grading systems; stage is the dominant prognostic factor.",
    ],
    ihc: [
      "Usually strong, diffuse block-type p16 in tumor cells.",
      "p40, p63, and CK5/6 support squamous differentiation but do not establish HPV association.",
      "If p16 is negative/non-block-type or equivocal, perform high-risk HPV testing; consider low-risk HPV testing in selected warty/papillary lesions.",
    ],
    differential: [
      {
        name: "HSIL",
        distinction:
          "HSIL remains intraepithelial; identify destructive stromal invasion, irregular infiltrative nests, stromal reaction, or paradoxical maturation.",
      },
      {
        name: "HPV-independent SCC",
        distinction:
          "Morphology alone cannot reliably separate the two. Use p16 and direct HPV testing.",
      },
      {
        name: "Adenosquamous carcinoma",
        distinction:
          "Requires recognizable malignant glandular and squamous components on H&E.",
      },
      {
        name: "Papillary HSIL versus papillary SCC",
        distinction:
          "A superficial biopsy may not include the invasive base. Abundant papillary fragments with fibrovascular cores warrant careful assessment and correlation with excision.",
      },
    ],
    molecular: [
      "High-risk HPV E6/E7 RNA in situ hybridization or other validated HPV assays can resolve equivocal p16 results.",
    ],
    pitfalls: [
      "Do not grade cervical SCC using routine differentiation-based systems.",
      "Do not call an exophytic papillary lesion HSIL without adequately assessing the stromal interface.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma, HPV-Independent",
    group: "Squamous Carcinomas",
    clue: "Negative/non-block p16 is not enough by itself: confirm HPV negativity with molecular testing.",
    summary:
      "Rare cervical SCCs arise independently of HPV and may present at a more advanced stage.",
    histology: [
      "Morphologically, HPV-independent SCC is generally indistinguishable from HPV-associated SCC. Keratinization is more frequent; extensive necrosis, dense lymphocyte-predominant inflammation, and highly vascular stroma may be encountered.",
      "The same invasive patterns seen in HPV-associated SCC may occur. No grading system is established.",
      "A differentiated HPV-independent intraepithelial lesion may be present adjacent to the invasive tumor.",
    ],
    ihc: [
      "p16 is negative/non-block-type; direct HPV testing should also be negative before assigning HPV-independent status.",
      "p53 shows a mutation-type pattern in approximately half of reported cases; p53 wild-type cases also occur.",
      "p40/p63/CK5/6 support squamous differentiation but do not establish HPV status.",
    ],
    differential: [
      {
        name: "HPV-associated SCC with unusual p16 loss",
        distinction:
          "Rare HPV-associated tumors may lack block p16; direct HPV testing is essential before classifying as HPV-independent.",
      },
      {
        name: "HPV-independent CIN",
        distinction:
          "The precursor remains intraepithelial; identify unequivocal stromal invasion to diagnose carcinoma.",
      },
    ],
    molecular: [
      "Use PCR or in situ hybridization covering high- and low-risk HPV types as appropriate.",
      "p53 immunohistochemistry and/or TP53 sequencing may further characterize the tumor.",
    ],
    pitfalls: [
      "Do not infer HPV independence from older age, keratinization, or p16 alone.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma, HPV Status Undetermined",
    group: "Squamous Carcinomas",
    clue: "Use only when HPV status cannot be established; most such tumors are likely HPV-associated.",
    summary:
      "An acceptable designation when tumor testing is unavailable, inconclusive, or not feasible.",
    histology: [
      "Diagnose invasive carcinoma with squamous differentiation on morphology. HPV-associated and HPV-independent SCC cannot be reliably distinguished morphologically.",
    ],
    ihc: [
      "Attempt p16 immunohistochemistry when feasible. If p16 is non-block-type or equivocal, direct HPV testing is recommended when available.",
    ],
    differential: [
      {
        name: "HPV-associated versus HPV-independent SCC",
        distinction:
          "Do not assign either category without adequate ancillary evidence.",
      },
    ],
    molecular: [
      "Document the limitation and use the designation HPV status undetermined when testing cannot resolve the status.",
    ],
  },
  {
    name: "Endocervical Polyp",
    group: "Benign Epithelial Lesions",
    clue: "A bland endocervical epithelial lining over a vascular, often inflamed stromal core.",
    summary:
      "A common benign exophytic lesion that may contain metaplasia or be secondarily involved by SIL/AIS.",
    histology: [
      "A stromal core is lined by bland mucinous endocervical-type epithelium, with glands often invaginating into the central stroma.",
      "The stroma is vascular and commonly contains mixed acute and chronic inflammation. Surface erosion and reactive/reparative change may produce hobnail-like cells.",
      "Squamous metaplasia (often immature), tubo-endometrial metaplasia, or microglandular hyperplasia may involve surface or deeper glands. Pregnancy-associated Arias-Stella change or decidualization may occur.",
      "Rare polyps show focal club-like/phyllodes-like intraglandular stromal protrusions and increased periglandular cellularity; these are usually benign.",
      "SIL or AIS may rarely involve a pre-existing polyp; assess the epithelial lining and glands rather than assuming all atypia is reactive.",
    ],
    ihc: [
      "No routine immunohistochemical panel is required for a typical polyp. Use targeted stains only to resolve a specific atypical epithelial or stromal component.",
    ],
    differential: [
      {
        name: "Adenosarcoma",
        distinction:
          "A polyp may show focal periglandular stromal cellularity, but diffuse stromal atypia, increased mitotic activity, and convincing leaf-like architecture raise concern for adenosarcoma.",
      },
      {
        name: "AIS or HSIL involving a polyp",
        distinction:
          "Look for cytologic atypia and abnormal maturation beyond reactive change; use p16 in the appropriate diagnostic context.",
      },
      {
        name: "Microglandular hyperplasia",
        distinction:
          "Often has closely packed small glands, mucinous cytoplasm, and inflammation; it lacks the cytologic features of AIS.",
      },
    ],
    pitfalls: [
      "Do not mistake reactive hobnail cells in an eroded polyp for clear cell carcinoma without evaluating the overall architecture and cytology.",
    ],
  },
  {
    name: "Adenocarcinoma in Situ (AIS), HPV-Associated",
    group: "Glandular Precursors",
    clue: "Mucin-depleted or mucinous pseudostratified endocervical cells with apical mitoses and apoptotic bodies; usually block-type p16.",
    summary:
      "High-grade glandular intraepithelial neoplasia, commonly associated with HPV18 or HPV16.",
    histology: [
      "Atypical endocervical glands are lined by columnar cells with pseudostratified, enlarged, hyperchromatic nuclei, loss of polarity, and increased N:C ratios.",
      "Apical mitotic figures and basal apoptotic bodies/karyorrhectic debris are characteristic. Cytoplasm may be mucin-depleted or contain intracytoplasmic mucin.",
      "The lesion may involve the transformation zone and proximal endocervical canal, may be multifocal, and can coexist with HSIL.",
      "AIS is intraepithelial; destructive stromal invasion, desmoplasia, or irregular infiltrative glands establishes invasive adenocarcinoma.",
    ],
    ihc: [
      "Diffuse block-type p16 is characteristic. Partial loss of RB1 may support an HPV-driven lesion.",
      "ER and PR are typically lost, whereas benign glandular mimics tend to retain hormone receptor expression.",
      "PAX2 is usually lost in glandular neoplasia but retained in many benign endocervical glands. CAIX can support neoplasia over benign/reactive glands but is not HPV-specific.",
    ],
    differential: [
      {
        name: "Benign endocervical glands / tubo-endometrial metaplasia",
        distinction:
          "Usually show bland nuclei, preserved polarity, and lack the characteristic apical mitoses and apoptotic bodies; ER/PR may be retained.",
      },
      {
        name: "Lobular endocervical glandular hyperplasia (LEGH)",
        distinction:
          "A benign gastric-type glandular proliferation with lobular architecture and gastric mucin; distinguish from HPV-independent gastric-type AIS.",
      },
      {
        name: "Invasive HPV-associated adenocarcinoma",
        distinction:
          "Search for destructive stromal invasion. AIS may be present adjacent to invasive tumor.",
      },
    ],
    molecular: [
      "High-risk HPV testing is useful, particularly when morphology or p16 is equivocal.",
      "When AIS is found on biopsy, an excision is important because an invasive component may be identified in the subsequent specimen.",
    ],
    pitfalls: [
      "Do not equate extensive gland involvement with invasion; assess the stromal interface.",
      "A negative cytology result does not exclude AIS.",
    ],
  },
  {
    name: "Adenocarcinoma in Situ (AIS), HPV-Independent",
    group: "Glandular Precursors",
    clue: "Usually gastric-type; distinguish atypical LEGH from gastric-type AIS using cytology, architecture, and ancillary studies.",
    summary:
      "An HPV-independent intraepithelial glandular neoplasm, predominantly of gastric type.",
    histology: [
      "Gastric-type AIS may show atypical glands with gastric differentiation, often in a background of LEGH or atypical LEGH.",
      "LEGH typically has a lobular arrangement of small to medium glands with bland gastric-type mucinous cells. Atypical LEGH shows cytologic atypia and/or architectural complexity beyond ordinary LEGH.",
      "Gastric-type AIS may show more conspicuous nuclear atypia, stratification, and complex glandular architecture while remaining intraepithelial.",
      "A visible mass is not typical of gastric-type AIS itself; LEGH or atypical LEGH may produce a multicystic upper endocervical lesion.",
    ],
    ihc: [
      "p16 is usually negative/non-block-type, although rare block-type cases occur.",
      "Gastric differentiation markers such as MUC6 and HIK1083 (where available) may support gastric phenotype; interpret as a panel and in morphologic context.",
      "ER/PR are generally not useful as positive markers for gastric-type lesions.",
    ],
    differential: [
      {
        name: "LEGH",
        distinction:
          "Bland lobular glands with orderly architecture and minimal atypia; no destructive invasion.",
      },
      {
        name: "Gastric-type invasive adenocarcinoma",
        distinction:
          "Destructive, haphazard deep glands, irregular infiltration, or desmoplastic response support invasion.",
      },
      {
        name: "HPV-associated AIS",
        distinction:
          "Usually block-type p16 and high-risk HPV positive, with characteristic apical mitoses and apoptotic bodies.",
      },
    ],
    molecular: [
      "HPV testing, if performed, should be negative.",
      "Multifocal/synchronous gastric-type lesions may occur at different sites in the female genital tract, sometimes in Peutz–Jeghers syndrome.",
    ],
    pitfalls: [
      "Do not interpret a multicystic upper-cervical lesion as benign without assessing for atypical LEGH and gastric-type neoplasia.",
    ],
  },
  {
    name: "Adenocarcinoma, HPV-Associated",
    group: "Invasive Adenocarcinomas",
    clue: "Invasive endocervical-type adenocarcinoma with block-type p16 and/or high-risk HPV; assess invasion pattern using Silva classification.",
    summary:
      "The most common category of primary cervical adenocarcinoma; diverse morphologic patterns are not treated as separate subtypes.",
    histology: [
      "Tumors show endocervical-type glands lined by columnar cells with pseudostratified enlarged hyperchromatic nuclei, apical mitoses, and basal apoptotic bodies. Mucin may be depleted or evident.",
      "Architectural patterns include usual-type glandular, papillary, micropapillary, and other patterns. Pattern-based classification is more useful than older pattern names as prognostic categories.",
      "Silva pattern A: non-destructive growth, well-demarcated glands, no lymphovascular invasion. Pattern B: limited destructive invasion. Pattern C: diffuse destructive invasion, often with haphazard glands, solid growth, or desmoplasia.",
      "Invasion may be difficult to assess in exophytic lesions or small biopsies. A convincing in situ component and associated HSIL can support cervical origin.",
    ],
    ihc: [
      "Usually block-type p16. High-risk HPV testing can confirm association when needed.",
      "CK7 and PAX8 are commonly positive. ER/PR are usually negative.",
      "p53 is generally wild-type; mutation-type p53 should prompt consideration of HPV-independent tumors or metastasis.",
    ],
    differential: [
      {
        name: "HPV-independent gastric-type adenocarcinoma",
        distinction:
          "Often deeply infiltrative glands with abundant pale eosinophilic/foamy cytoplasm, distinct cell borders, and non-block p16; gastric markers may be positive.",
      },
      {
        name: "Endometrial endometrioid carcinoma involving cervix",
        distinction:
          "Correlate with endometrial sampling and imaging; ER/PR and vimentin may support endometrial origin, but no single stain is definitive.",
      },
      {
        name: "AIS",
        distinction:
          "AIS lacks destructive stromal invasion. Assess the gland-stromal interface and look for desmoplasia or irregular infiltrative glands.",
      },
      {
        name: "Stratified mucin-producing carcinoma",
        distinction:
          "A recognized morphologic variant of HPV-associated adenocarcinoma with stratified epithelium and intracytoplasmic mucin; mucicarmine can help highlight mucin.",
      },
    ],
    molecular: [
      "High-risk HPV testing is useful in equivocal cases. Block-type p16 is a reliable surrogate in the appropriate morphology.",
      "Silva pattern A has essentially no nodal metastatic potential in reported series; patterns B and C have progressively greater nodal risk.",
    ],
    pitfalls: [
      "Do not diagnose primary cervical serous carcinoma; that entity is not recognized. Work up serous-like morphology for HPV-associated adenocarcinoma, gastric-type carcinoma, or metastasis.",
      "Do not classify an adenocarcinoma as endometrioid solely because it is mucin-poor.",
    ],
  },
  {
    name: "Adenocarcinoma, HPV-Independent, Gastric Type",
    group: "Invasive Adenocarcinomas",
    clue: "Deep, often haphazard infiltrative glands with gastric differentiation; usually non-block p16 and HPV-negative.",
    summary:
      "An HPV-independent cervical adenocarcinoma with gastric/gastrointestinal differentiation; may be deceptively bland (minimal-deviation pattern).",
    histology: [
      "Tumors are often centered high in the endocervical canal and may be large, deeply infiltrative, polypoid, ulcerated, or circumferential, producing a barrel-shaped cervix.",
      "Glands are irregular, haphazard, and deeply infiltrative, often with abundant pale or eosinophilic mucinous cytoplasm, distinct cell borders, and basally located nuclei. Cytologic atypia may be deceptively mild.",
      "Destructive invasion may be difficult to recognize in minimal-deviation areas; look for irregular gland distribution, variable gland size and shape, deep stromal involvement, and focal desmoplasia.",
      "A spectrum of differentiation may be present, including intestinal differentiation with goblet cells.",
    ],
    ihc: [
      "p16 is usually negative/non-block-type; HPV testing should be negative.",
      "MUC6 and other gastric differentiation markers may be positive; HNF4α can support gastrointestinal differentiation.",
      "PAX8 is variable and may be absent. ER/PR are usually negative. p53 may be wild-type or mutation-type.",
      "Claudin-18.2 may be expressed in a subset, particularly with intestinal differentiation; it is not required for diagnosis.",
    ],
    differential: [
      {
        name: "LEGH / atypical LEGH / gastric-type AIS",
        distinction:
          "These show lobular or intraepithelial patterns without destructive deep stromal invasion. Gastric-type carcinoma shows haphazard destructive infiltration.",
      },
      {
        name: "HPV-associated adenocarcinoma",
        distinction:
          "Usually block-type p16 and high-risk HPV positive, with more conspicuous apical mitoses and apoptotic bodies.",
      },
      {
        name: "Metastatic pancreatobiliary or gastrointestinal adenocarcinoma",
        distinction:
          "Clinical/radiologic correlation is essential; morphology and gastric markers overlap. Assess for a cervical precursor or in situ component and use a focused panel.",
      },
    ],
    molecular: [
      "HPV testing, if performed, should be negative.",
      "Peutz–Jeghers syndrome may be associated with multifocal gastric-type lesions of the female genital tract.",
    ],
    pitfalls: [
      "Do not use the historical terms adenoma malignum or minimal-deviation adenocarcinoma as separate entities.",
      "A bland cytology does not exclude deeply invasive gastric-type carcinoma.",
    ],
  },
  {
    name: "Adenocarcinoma, HPV-Independent, Clear Cell Type",
    group: "Invasive Adenocarcinomas",
    clue: "Tubulocystic, papillary, and/or solid architecture with clear or eosinophilic cells and hobnail morphology.",
    summary:
      "A primary HPV-independent cervical adenocarcinoma with clear cell differentiation.",
    histology: [
      "Common patterns include tubulocystic, papillary, and solid growth, often in combination.",
      "Tumor cells may be hobnail, cuboidal, or polygonal, with clear or eosinophilic cytoplasm. Hyalinized stromal cores may be present in papillary areas.",
      "Nuclear atypia and mitotic activity vary; identify the characteristic architectural and cytologic combination rather than relying on clear cytoplasm alone.",
    ],
    ihc: [
      "Napsin A and AMACR are useful positive markers.",
      "p16 is generally negative/non-block-type and HPV testing should be negative.",
      "PAX8 is commonly positive; ER/PR are usually negative.",
    ],
    differential: [
      {
        name: "Gastric-type adenocarcinoma",
        distinction:
          "Usually shows gastric mucinous cytoplasm and irregular deeply infiltrative glands; napsin A/AMACR support clear cell differentiation.",
      },
      {
        name: "Metastatic clear cell carcinoma (especially renal)",
        distinction:
          "Correlate clinically and use a panel including renal markers as indicated; PAX8 alone does not establish cervical origin.",
      },
      {
        name: "Arias-Stella change / reactive hobnail cells",
        distinction:
          "Reactive glands lack destructive invasion and significant malignant cytologic features.",
      },
    ],
    molecular: ["HPV testing, if performed, should be negative."],
    pitfalls: [
      "Do not diagnose clear cell carcinoma on hobnail morphology alone; assess architecture, cytologic atypia, invasion, and clinical context.",
    ],
  },
  {
    name: "Adenocarcinoma, HPV-Independent, Mesonephric Type",
    group: "Invasive Adenocarcinomas",
    clue: "Small tubules with dense eosinophilic luminal secretions, mixed patterns, and GATA3/TTF1/CD10 support.",
    summary:
      "A rare HPV-independent carcinoma showing mesonephric (Wolffian) differentiation, usually in the lateral cervical wall.",
    histology: [
      "A mixture of small tubules, ducts, glands, papillary, retiform, solid, and spindle-cell patterns may be present.",
      "Tubules are often lined by cuboidal cells with scant cytoplasm and angulated or grooved nuclei; dense eosinophilic luminal secretions are characteristic.",
      "The tumor often infiltrates deep cervical stroma and may show lymphovascular invasion. Cytologic atypia can be variable.",
    ],
    ihc: [
      "GATA3, TTF1, and luminal CD10 are useful markers, often in a complementary or variable pattern.",
      "PAX8 is usually positive. ER/PR are typically negative.",
      "p16 is generally non-block-type and HPV testing should be negative.",
      "Do not rely on GATA3 alone; expression can be variable and the differential is broad.",
    ],
    differential: [
      {
        name: "Wolffian tumor / female adnexal tumor of probable Wolffian origin",
        distinction:
          "Wolffian tumors usually arise in broad ligament/adnexa, often show multiple tubular/solid patterns, and are generally negative for GATA3, TTF1, PAX8, EMA, and claudin-4; mesonephric carcinoma is invasive and PAX8/GATA3/TTF1 may be positive.",
      },
      {
        name: "HPV-associated adenocarcinoma",
        distinction:
          "Block-type p16 and HPV positivity favor HPV-associated carcinoma; mesonephric carcinoma is HPV independent.",
      },
      {
        name: "Endometrioid adenocarcinoma",
        distinction:
          "Usually ER/PR positive and lacks the characteristic mesonephric immunophenotype.",
      },
    ],
    molecular: [
      "HPV testing, if performed, should be negative.",
      "KRAS, and less commonly NRAS, mutations may support the diagnosis in challenging cases.",
    ],
    pitfalls: [
      "Do not equate mesonephric adenocarcinoma with Wolffian tumor; their site, immunophenotype, and biology differ.",
    ],
  },
  {
    name: "Other Adenocarcinomas: Endometrioid Type and Adenocarcinoma NOS",
    group: "Invasive Adenocarcinomas",
    clue: "Endometrioid carcinoma is a diagnosis of exclusion; exclude HPV-associated mucin-depleted carcinoma and endometrial extension.",
    summary:
      "Includes rare primary cervical endometrioid adenocarcinoma and adenocarcinoma NOS.",
    histology: [
      "Endometrioid adenocarcinoma shows at least focal low-grade endometrioid glands lined by columnar cells with pseudostratified bland nuclei, with or without squamous or mucinous differentiation. Papillary and solid areas may occur.",
      "Morphology is identical to endometrial or ovarian endometrioid carcinoma; the primary site cannot be determined by morphology alone, especially in a biopsy.",
      "Primary cervical endometrioid carcinoma may infiltrate cervical stroma deceptively, with bland glands and little desmoplasia. Association with endometriosis may provide a clue.",
      "Adenocarcinoma NOS is a diagnosis of exclusion when no specific cervical type can be assigned or HPV status cannot be determined; exclude metastasis and tumors extending from the endometrium.",
    ],
    ihc: [
      "ER and/or PR should be positive in endometrioid adenocarcinoma.",
      "p16 is usually patchy/non-block-type and HPV testing should be negative.",
      "Evaluate p53, MMR, vimentin, and other markers in a focused panel when distinguishing endometrial origin or other mimics.",
    ],
    differential: [
      {
        name: "Endometrial endometrioid carcinoma extending into cervix",
        distinction:
          "Review endometrial sampling, imaging, tumor distribution, and precursor lesions; morphology and IHC overlap substantially.",
      },
      {
        name: "HPV-associated mucin-depleted adenocarcinoma",
        distinction:
          "Often has characteristic HPV-associated morphology and block-type p16; exclude HPV association before diagnosing endometrioid type.",
      },
      {
        name: "Gastric-type adenocarcinoma",
        distinction:
          "Usually ER/PR negative with gastric differentiation and non-block p16.",
      },
      {
        name: "Metastatic endometrioid carcinoma",
        distinction:
          "Clinical history and distribution are essential; do not infer cervical primary from a cervical biopsy alone.",
      },
    ],
    molecular: [
      "If HPV testing is performed, endometrioid adenocarcinoma should be HPV negative.",
    ],
    pitfalls: [
      "Primary cervical serous carcinoma is not an accepted entity. Serous-like tumors require workup for HPV-associated carcinoma, gastric-type carcinoma, or metastasis.",
    ],
  },
  {
    name: "Adenosquamous Carcinoma, HPV-Associated",
    group: "Mixed Epithelial Carcinomas",
    clue: "Both malignant glandular and malignant squamous components must be recognizable on H&E.",
    summary:
      "An invasive carcinoma with glandular and squamous differentiation, most often HPV-associated.",
    histology: [
      "A mixture of malignant glandular and squamous components is present. The diagnosis is based on H&E morphology; both components should be recognizable without special stains.",
      "The required percentage of either component is not defined; recognizable components of any amount may support the diagnosis.",
      "Necrosis, inflammation, and lymphovascular invasion are common. Glassy cell morphology is within the spectrum; mucoepidermoid carcinoma is not a separate recognized category.",
    ],
    ihc: [
      "Both components typically show block-type p16.",
      "Glandular component: CK7 and PAX8 are typically positive. Squamous component: p40 and p63 are typically positive.",
      "ER/PR are usually negative.",
    ],
    differential: [
      {
        name: "Adenocarcinoma with squamous metaplasia",
        distinction:
          "Metaplastic squamous epithelium is not malignant; require a truly malignant squamous component.",
      },
      {
        name: "Stratified mucin-producing carcinoma",
        distinction:
          "A variant of HPV-associated adenocarcinoma; mucin is present within stratified tumor epithelium and the squamous component is not a separate malignant component.",
      },
      {
        name: "Carcinosarcoma",
        distinction:
          "Carcinosarcoma has a malignant mesenchymal component, not merely squamous differentiation.",
      },
    ],
    molecular: [
      "High-risk HPV is commonly detected; HPV testing can confirm association in selected cases.",
    ],
    pitfalls: [
      "Do not diagnose adenosquamous carcinoma from cytology alone; defer definitive classification to tissue.",
    ],
  },
  {
    name: "Adenosquamous Carcinoma, HPV-Independent",
    group: "Mixed Epithelial Carcinomas",
    clue: "Invasive carcinoma with genuine glandular and squamous differentiation plus negative/non-block p16 and negative HPV testing.",
    summary: "A rare HPV-independent mixed epithelial carcinoma of the cervix.",
    histology: [
      "Shows invasive malignant glandular and squamous components. The morphology may overlap with HPV-associated adenosquamous carcinoma; the HPV status is determined by ancillary testing.",
    ],
    ihc: [
      "p16 is negative/non-block-type; confirm with HPV testing.",
      "Use morphology and lineage markers to document both components; no single lineage stain establishes HPV independence.",
    ],
    differential: [
      {
        name: "HPV-associated adenosquamous carcinoma",
        distinction: "Usually block-type p16 and high-risk HPV positive.",
      },
      {
        name: "Stratified mucin-producing carcinoma",
        distinction:
          "A recognized HPV-associated adenocarcinoma variant; assess mucin within stratified cells and HPV status.",
      },
    ],
    molecular: ["HPV testing, if performed, should be negative."],
    pitfalls: [
      "Published experience is limited; avoid extrapolating prognosis from HPV-associated cases.",
    ],
  },
  {
    name: "Adenoid Basal Carcinoma",
    group: "Other Epithelial Tumors",
    clue: "Small infiltrative nests or cords of bland basaloid cells with little or no stromal reaction.",
    summary:
      "A low-grade adenoid basal tumor with no known metastatic potential when present in pure form.",
    histology: [
      "Small, rounded or angulated nests and cords of bland basaloid cells infiltrate cervical stroma, often with peripheral palisading.",
      "The cells have scant cytoplasm and relatively uniform nuclei. Stromal reaction is absent or minimal, and mitotic activity is low.",
      "Adenoid cystic-like spaces or squamous differentiation may be present. Carefully search for an associated conventional SCC or another carcinoma component.",
    ],
    ihc: [
      "p16 is often block-type and high-risk HPV may be detected.",
      "p63/p40 and basal keratins support basaloid/squamous differentiation but are not specific.",
    ],
    differential: [
      {
        name: "Basaloid SCC",
        distinction:
          "Usually shows greater cytologic atypia, mitotic activity, and destructive stromal invasion; may have an associated HSIL.",
      },
      {
        name: "Adenoid cystic carcinoma-like lesion",
        distinction:
          "Adenoid cystic carcinoma is not a distinct recognized cervical carcinoma category; most historical cases represent basaloid SCC or HPV-associated adenocarcinoma with adenoid cystic-like morphology.",
      },
      {
        name: "Adenoid basal carcinoma with an additional carcinoma component",
        distinction:
          "The prognosis is determined by the more aggressive component; extensively sample and report each component.",
      },
    ],
    molecular: [
      "High-risk HPV testing may support the diagnosis but is not usually required when morphology is classic.",
    ],
    pitfalls: [
      "Pure adenoid basal carcinoma has no known metastatic potential. Clear excision is recommended to exclude a more aggressive admixed component.",
    ],
  },
  {
    name: "Carcinosarcoma",
    group: "Other Epithelial Tumors",
    clue: "A true biphasic malignancy with malignant epithelial and malignant mesenchymal components.",
    summary:
      "A rare malignant mixed epithelial and mesenchymal neoplasm of the cervix.",
    histology: [
      "The tumor contains a malignant epithelial component (often carcinoma) and a malignant mesenchymal component, which may be homologous or heterologous.",
      "The epithelial component may be squamous or glandular; the sarcomatous component may show spindle-cell, pleomorphic, or heterologous differentiation.",
      "Extensive sampling is important to identify both components and exclude a pure carcinoma with reactive/desmoplastic stroma.",
    ],
    ihc: [
      "Use a panel to demonstrate epithelial differentiation in the carcinoma component (broad-spectrum cytokeratin/EMA) and mesenchymal differentiation in the sarcomatous component (vimentin and lineage-specific markers as indicated).",
      "Some sarcomatous areas may retain focal keratin expression; interpret staining with morphology.",
    ],
    differential: [
      {
        name: "Adenosquamous carcinoma",
        distinction:
          "Both components in adenosquamous carcinoma are epithelial; the squamous component is not a sarcoma.",
      },
      {
        name: "Sarcomatoid carcinoma",
        distinction:
          "May show spindle-cell morphology but represents epithelial malignancy with transition/epithelial marker expression; distinguish from a true biphasic carcinosarcoma.",
      },
      {
        name: "Primary cervical sarcoma",
        distinction: "Lacks a convincing malignant epithelial component.",
      },
    ],
    pitfalls: [
      "Do not use historical terms malignant mixed Müllerian tumor or malignant mesodermal mixed tumor.",
    ],
  },
  {
    name: "Carcinoma, Unclassifiable",
    group: "Other Epithelial Tumors",
    clue: "A diagnosis of exclusion after extensive morphologic and immunophenotypic evaluation.",
    summary:
      "An invasive primary cervical epithelial malignancy that cannot be assigned to a specific carcinoma category.",
    histology: [
      "Shows malignant epithelial phenotype but lacks defining morphologic features of SCC, adenocarcinoma, or neuroendocrine carcinoma.",
      "Exclude secondary involvement by gynecologic and non-gynecologic malignancies, including sarcomas and other non-epithelial tumors that may express cytokeratins.",
      "A biopsy diagnosis may be refined on a larger excision when additional differentiated components are identified.",
    ],
    ihc: [
      "Diffuse p63, p40, and/or CK5/6 should prompt reconsideration of SCC.",
      "Use a broad, morphology-directed panel to exclude glandular, neuroendocrine, melanocytic, mesenchymal, and metastatic tumors.",
      "p16 and/or HPV testing may help determine HPV association.",
    ],
    differential: [
      {
        name: "Poorly differentiated SCC",
        distinction:
          "Look for diffuse squamous markers and block-type p16/HPV association.",
      },
      {
        name: "Poorly differentiated adenocarcinoma",
        distinction:
          "Search for glandular differentiation and use epithelial/glandular markers in context.",
      },
      {
        name: "Neuroendocrine carcinoma",
        distinction:
          "Assess morphology and neuroendocrine markers; high-grade NEC can be very poorly differentiated.",
      },
      {
        name: "Metastatic carcinoma or non-epithelial malignancy",
        distinction:
          "Clinical history, imaging, distribution, and a broad immunohistochemical panel are essential.",
      },
    ],
    pitfalls: [
      "Use only after extensive evaluation; do not use as a shortcut for a limited biopsy.",
    ],
  },
  {
    name: "Well-Differentiated Neuroendocrine Tumor (NET)",
    group: "Neuroendocrine Neoplasms",
    clue: "Low-grade cytology with neuroendocrine architecture and a convincing neuroendocrine immunophenotype.",
    summary:
      "An extremely rare primary cervical epithelial neuroendocrine neoplasm; mixed neuroendocrine/non-neuroendocrine neoplasms may occur.",
    histology: [
      "Well-differentiated neuroendocrine architecture may include organoid nests, trabeculae, ribbons, and rosettes.",
      "Cells are relatively uniform with finely granular chromatin and low-grade cytology. Mitotic activity and necrosis are limited compared with NEC.",
      "A mixed neuroendocrine and non-neuroendocrine neoplasm (MiNEN) contains a recognizable non-neuroendocrine component.",
    ],
    ihc: [
      "Use synaptophysin, chromogranin, and INSM1 to establish neuroendocrine differentiation; not every marker must be equally positive.",
      "Cytokeratin supports epithelial nature. Interpret markers with morphology and exclude non-neuroendocrine mimics.",
    ],
    differential: [
      {
        name: "Neuroendocrine carcinoma",
        distinction:
          "NEC shows high-grade cytology, brisk mitoses, and usually extensive necrosis.",
      },
      {
        name: "Paraganglioma",
        distinction:
          "Typically keratin-negative with sustentacular cells; use a panel including keratin and sustentacular markers.",
      },
      {
        name: "Endometrial stromal or other small round cell tumor",
        distinction:
          "Use morphology and lineage-specific markers; focal neuroendocrine marker expression alone is insufficient.",
      },
    ],
    molecular: [
      "HPV association is variable in NET; mixed neuroendocrine/non-neuroendocrine neoplasms are more often HPV-associated.",
    ],
    pitfalls: [
      "Do not use the historical terms typical carcinoid or atypical carcinoid tumor.",
    ],
  },
  {
    name: "Neuroendocrine Carcinoma (Small Cell and Large Cell)",
    group: "Neuroendocrine Neoplasms",
    clue: "High-grade morphology with brisk mitoses and necrosis; confirm neuroendocrine differentiation with a panel.",
    summary:
      "Includes small cell NEC, large cell NEC, and combined carcinomas with a neuroendocrine carcinoma component.",
    histology: [
      "Small cell NEC: sheets, nests, or trabeculae of small cells with scant cytoplasm, nuclear molding, finely granular or hyperchromatic chromatin, inconspicuous nucleoli, brisk mitotic activity, and extensive necrosis. Crush artifact is common.",
      "Large cell NEC: organoid, nested, trabecular, or rosette-like architecture composed of larger cells with moderate cytoplasm, vesicular nuclei, and prominent nucleoli; mitoses and necrosis are brisk.",
      "Combined NEC contains a recognizable small-cell or large-cell NEC component admixed with another carcinoma, commonly squamous or adenocarcinoma. Identify and report the components.",
      "Cervical NEC may resemble other high-grade cervical carcinomas; the diagnosis requires integration of morphology and immunophenotype.",
    ],
    ihc: [
      "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation; expression may be heterogeneous, and not all markers are positive in every case.",
      "Broad-spectrum cytokeratin supports epithelial differentiation. p16 may be block-type in HPV-associated cases.",
      "Ki-67 is typically high in NEC and helps distinguish it from well-differentiated NET, but should not replace morphology.",
    ],
    differential: [
      {
        name: "Poorly differentiated SCC",
        distinction:
          "SCC usually expresses p40/p63 and CK5/6; NEC shows neuroendocrine morphology and marker expression. Focal overlap can occur.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Usually negative for broad-spectrum cytokeratin; use CD45 and lineage markers.",
      },
      {
        name: "Small cell carcinoma metastatic from lung",
        distinction:
          "Clinical/radiologic correlation is essential; HPV testing may support cervical origin in the appropriate setting.",
      },
      {
        name: "Well-differentiated NET",
        distinction:
          "NET has low-grade cytology and lower proliferative activity; NEC is high grade with brisk mitoses and necrosis.",
      },
    ],
    molecular: [
      "HPV testing may help support a cervical primary, particularly in a patient with a history or imaging concern for an extra-cervical primary.",
    ],
    pitfalls: [
      "Do not exclude NEC because one neuroendocrine marker is negative; use a panel and correlate with morphology.",
      "Search carefully for a combined non-neuroendocrine carcinoma component.",
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

export default function UterineCervixEpithelialTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([
    "Squamous Intraepithelial Lesions (LSIL and HSIL)",
    "Adenocarcinoma, HPV-Associated",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (
            e.name +
            " " +
            e.group +
            " " +
            e.clue +
            " " +
            e.summary +
            " " +
            e.differential.map((d) => d.name + " " + d.distinction).join(" ")
          )
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
          PathologyGPS · Female Genital Tract
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Uterine Cervix: Epithelial Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic guide to cervical squamous and glandular
          precursors, invasive carcinomas, mixed epithelial tumors, and
          neuroendocrine neoplasms—with emphasis on morphology, HPV status,
          immunohistochemistry, and differential diagnosis.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/70 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Start Here
        </h2>
        <ol className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            [
              "1. Establish the compartment",
              "Is the lesion squamous, glandular, mixed, or neuroendocrine? Is it intraepithelial or invasive?",
            ],
            [
              "2. For squamous lesions",
              "Separate LSIL from HSIL by maturation, atypia, and mitotic distribution. For invasive SCC, establish HPV association with p16 and/or direct HPV testing.",
            ],
            [
              "3. For glandular lesions",
              "First distinguish benign glands/metaplasia from AIS and invasive adenocarcinoma. Then classify as HPV-associated or HPV-independent.",
            ],
            [
              "4. For HPV-independent adenocarcinoma",
              "Consider gastric, clear cell, mesonephric, and endometrioid types. Exclude extension from endometrium and metastasis.",
            ],
            [
              "5. For mixed or high-grade tumors",
              "Confirm that both components are genuinely malignant. Consider adenosquamous carcinoma, carcinosarcoma, and neuroendocrine carcinoma.",
            ],
            [
              "6. Use IHC as a panel",
              "p16/HPV status is central, but morphology and site remain decisive. Avoid assigning a subtype from a single positive marker.",
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
          <strong>Critical principle:</strong> HPV-associated and
          HPV-independent cervical carcinomas often cannot be distinguished by
          morphology alone. Use block-type p16 as a surrogate and direct HPV
          testing when p16 is negative, equivocal, or discordant with
          morphology.
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">
            High-Yield IHC / HPV Framework
          </h2>
          <div className="mt-3 space-y-2 text-sm">
            {[
              [
                "HPV-associated squamous / glandular lesions",
                "Usually block-type p16; confirm with high-risk HPV testing when needed.",
              ],
              [
                "HPV-independent carcinoma",
                "Usually negative/non-block p16 and HPV-negative; p53 may be mutation-type in a subset.",
              ],
              [
                "Gastric-type adenocarcinoma",
                "Gastric differentiation markers (e.g., MUC6); usually ER/PR negative.",
              ],
              [
                "Clear cell adenocarcinoma",
                "Napsin A and/or AMACR; usually HPV-independent.",
              ],
              [
                "Mesonephric adenocarcinoma",
                "GATA3, TTF1, CD10 (often complementary); KRAS/NRAS may help.",
              ],
              [
                "Neuroendocrine carcinoma",
                "Synaptophysin, chromogranin, INSM1; correlate with high-grade morphology.",
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
              Primary cervical serous carcinoma is not an accepted entity; work
              up serous-like tumors for HPV-associated carcinoma, gastric-type
              carcinoma, or metastasis.
            </li>
            <li>
              Endometrioid adenocarcinoma of the cervix is a diagnosis of
              exclusion: exclude HPV-associated mucin-depleted carcinoma and
              endometrial extension.
            </li>
            <li>
              Extensive HSIL involving endocervical glands is not automatically
              invasion.
            </li>
            <li>
              Pure adenoid basal carcinoma has no known metastatic potential;
              search for an admixed aggressive component.
            </li>
            <li>
              Do not use a single IHC marker to establish site of origin when
              morphology and clinical distribution are discordant.
            </li>
          </ul>
        </div>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <label
            htmlFor="cervix-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses and differential points
          </label>
          <input
            id="cervix-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: p16, gastric type, HSIL, mesonephric..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-64">
          <label
            htmlFor="cervix-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="cervix-group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setOpen(allOpen ? [] : filtered.map((e) => e.name))}
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:self-end"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} diagnoses</span>
        <span>
          Click a diagnosis to view full histology, IHC, and differential
          diagnosis.
        </span>
      </div>

      <div className="space-y-3">
        {filtered.map((e, i) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700">
                    Key clue: {e.clue}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {e.summary}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Histology Description">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.histology.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      {e.molecular && (
                        <Section title="Molecular Pathology">
                          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                            {e.molecular.map((x, j) => (
                              <li key={j}>{x}</li>
                            ))}
                          </ul>
                        </Section>
                      )}
                    </div>
                    <div>
                      <Section title="Immunohistochemistry">
                        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                          {e.ihc.map((x, j) => (
                            <li key={j}>{x}</li>
                          ))}
                        </ul>
                      </Section>
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, j) => (
                            <div
                              key={j}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                            >
                              <div className="text-sm font-bold text-slate-900">
                                {d.name}
                              </div>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {d.distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Section>
                    </div>
                  </div>
                  {e.pitfalls && (
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-amber-950">
                        {e.pitfalls.map((x, j) => (
                          <li key={j}>{x}</li>
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
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching diagnoses. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for anatomic pathology. Interpret
        immunohistochemical and molecular findings in conjunction with
        morphology, clinical history, and tumor location.
      </footer>
    </main>
  );
}
