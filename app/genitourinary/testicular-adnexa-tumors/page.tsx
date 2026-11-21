"use client";
import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  hist: string[];
  ihc: string[];
  diff: [string, string][];
  molecular: string[];
  pit: string[];
};

const entities: Entity[] = [
  {
    name: "Serous Cystadenoma",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Benign",
    profile: [
      "Adults, 35–73 years.",
      "Testis or paratestis.",
      "Usually cystic; may cause mass-effect symptoms or be incidental.",
    ],
    criteria: [
      "Cystic lesion lined by a single layer of bland cuboidal or ciliated columnar epithelium.",
      "No epithelial stratification, significant atypia, or mitotic activity.",
      "No stromal invasion.",
    ],
    hist: [
      "Cysts contain serous fluid.",
      "Lining cells have abundant pale cytoplasm and bland nuclei.",
    ],
    ihc: [
      "Positive: pancytokeratin, CK7, WT1, PAX8, ER, and PR.",
      "Negative: calretinin and OCT3/4.",
      "Ki-67 is low.",
    ],
    diff: [
      [
        "Reactive mesothelial hyperplasia",
        "Usually lacks the characteristic Müllerian-type ciliated epithelial lining; calretinin positivity and PAX8 negativity favor mesothelial differentiation.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "Do not overcall focal epithelial crowding without stratification, atypia, or invasion.",
    ],
  },
  {
    name: "Serous Tumor of Borderline Malignancy",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Noninvasive; borderline",
    profile: [
      "Reported age range: 14–68 years, including children.",
      "Testis or paratestis; may be intratesticular or paratesticular.",
      "Presents as a mass.",
    ],
    criteria: [
      "Hierarchically branching papillae with fibrovascular cores.",
      "Papillae are lined by stratified serous epithelium with mild to moderate atypia.",
      "No destructive stromal invasion.",
    ],
    hist: [
      "Irregular papillary formations show hierarchical branching.",
      "Stratified ciliated columnar cells have eosinophilic cytoplasm, dense chromatin, and prominent nucleoli.",
      "Mitoses are rare; psammoma bodies are uncommon.",
    ],
    ihc: [
      "Positive: pancytokeratin, CK7, WT1, PAX8, ER, PR, CA125, CEA, and CK5/6.",
      "Negative: calretinin, CK20, OCT3/4, and TTF1.",
      "Ki-67 is low.",
    ],
    diff: [
      [
        "Reactive mesothelial hyperplasia",
        "Usually lacks the organized hierarchical papillary proliferation; correlate with mesothelial markers.",
      ],
      [
        "Well-differentiated papillary mesothelial tumor",
        "Mesothelial phenotype (calretinin, WT1, D2-40) and absence of Müllerian markers such as PAX8/ER favor mesothelial lineage.",
      ],
      [
        "Epithelioid mesothelioma",
        "Invasion, cytologic atypia, and BAP1 loss and/or CDKN2A homozygous deletion support malignancy.",
      ],
    ],
    molecular: [
      "BRAF mutations are reported in approximately 50% of cases; testing is not required for routine diagnosis.",
    ],
    pit: [
      "The defining distinction from mesothelial proliferations is the Müllerian-type epithelial phenotype together with the papillary architecture.",
    ],
  },
  {
    name: "Serous Cystadenocarcinoma",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Malignant",
    profile: [
      "Reported age range: 7–67 years.",
      "Testis or paratestis.",
      "Presents with testicular enlargement from a solid or cystic mass.",
    ],
    criteria: [
      "Serous-type epithelial neoplasm with unequivocal stromal invasion.",
      "Infiltrative papillary, tubular, or cribriform growth, often with desmoplasia.",
      "Exclude mesothelioma, rete testis carcinoma, epididymal carcinoma, and metastasis.",
    ],
    hist: [
      "Usually low-grade serous morphology; high-grade cases are uncommon.",
      "Papillary, tubular, or cribriform structures infiltrate desmoplastic stroma.",
      "Psammoma bodies may be present; an associated serous borderline component may be identified.",
    ],
    ihc: [
      "Positive: PAX8, pancytokeratin, CK7, CK8/18, EMA, WT1, ER, BerEP4, and CA125.",
      "Negative: calretinin, CK20, inhibin, PLAP, CD30, OCT4, and AFP.",
    ],
    diff: [
      [
        "Mesothelioma",
        "Mesothelial markers (calretinin, D2-40, WT1) support mesothelioma; PAX8 and ER support serous carcinoma.",
      ],
      [
        "Adenocarcinoma of rete testis",
        "A hilar-centered tumor with transition from rete epithelium favors rete carcinoma; PAX8 may be positive in both.",
      ],
      [
        "Adenocarcinoma of epididymis",
        "Establish an epididymal epicenter and exclude metastatic disease.",
      ],
      [
        "Metastatic serous carcinoma",
        "Clinical history and imaging are essential; primary adnexal serous tumors are exceptionally rare.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "Invasion, rather than cytologic atypia alone, separates carcinoma from a borderline serous tumor.",
    ],
  },
  {
    name: "Mucinous Cystadenoma",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Benign",
    profile: [
      "Reported age range: 11–78 years.",
      "Testis, paratestis, or spermatic cord.",
      "Usually painless testicular enlargement; occasionally pain, heaviness, or incidental detection.",
    ],
    criteria: [
      "Cystic tumor lined by a single layer of mucinous columnar epithelium.",
      "No significant atypia, architectural complexity, necrosis, or stromal invasion.",
      "No teratomatous elements or background germ cell neoplasia in situ (GCNIS); extensive sampling is important.",
    ],
    hist: [
      "Lining resembles intestinal, gastric, or cervical mucosa.",
      "Scattered goblet cells may be present.",
      "Mucin extravasation and mixed inflammation may occur; invasion is absent.",
    ],
    ihc: [
      "Columnar cells may express CK20 and CDX2; CK7 is variable.",
      "Goblet cells express MUC2.",
      "Scattered chromogranin-positive neuroendocrine cells may be present.",
    ],
    diff: [
      [
        "Mucinous borderline tumor",
        "Shows epithelial stratification, cytologic atypia, and complex papillary architecture.",
      ],
      [
        "Mucinous component of postpubertal teratoma",
        "Look for teratomatous elements or background GCNIS; 12p gain supports a postpubertal germ cell tumor.",
      ],
      [
        "Metastatic gastrointestinal adenocarcinoma",
        "Clinical and radiologic correlation is required, especially when atypia or invasion is present.",
      ],
    ],
    molecular: [
      "Absence of 12p gain can help exclude a postpubertal teratoma when the distinction is clinically relevant; it is not a defining alteration of cystadenoma.",
    ],
    pit: [
      "Extensive sampling is needed before diagnosing a primary benign mucinous cystadenoma.",
    ],
  },
  {
    name: "Mucinous Borderline Tumor",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Noninvasive; borderline",
    profile: [
      "Reported age range: 42–69 years.",
      "Testis or paratestis.",
      "Usually presents with painless or occasionally painful testicular swelling.",
    ],
    criteria: [
      "Noninvasive mucinous neoplasm with cytologic atypia and architectural complexity.",
      "Complex papillary projections and epithelial stratification are present.",
      "Any microinvasive focus is less than 5 mm in linear extent; exclude GCNIS and germ cell tumor.",
    ],
    hist: [
      "Usually cystic with papillary projections lined by gastrointestinal-type epithelium.",
      "Mild to moderate atypia is typical; severe atypia may qualify as intraepithelial carcinoma.",
      "Goblet cells, mucin extravasation, inflammation, dystrophic calcification, or metaplastic ossification may occur.",
    ],
    ihc: ["CK20 is commonly positive.", "CK7 and CDX2 are variable."],
    diff: [
      [
        "Mucinous cystadenoma",
        "Lacks significant atypia, epithelial stratification, and complex architecture.",
      ],
      [
        "Mucinous cystadenocarcinoma",
        "Shows destructive stromal invasion measuring at least 5 mm in linear extent.",
      ],
      [
        "Metastatic gastrointestinal tumor",
        "May share the same intestinal immunophenotype; imaging and/or endoscopy may be necessary.",
      ],
      [
        "Somatic malignancy in a germ cell tumor",
        "Look for GCNIS, teratomatous elements, or 12p gain.",
      ],
    ],
    molecular: [
      "No specific molecular alteration is established; absence of 12p gain may help exclude a postpubertal teratoma.",
    ],
    pit: [
      "Microinvasion is defined by each invasive focus measuring less than 5 mm in linear extent.",
    ],
  },
  {
    name: "Mucinous Cystadenocarcinoma",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Malignant",
    profile: [
      "Reported age range: 42–81 years.",
      "Testis or paratestis.",
      "Presents with painful or painless testicular enlargement; ulceration or erectile dysfunction is occasional.",
    ],
    criteria: [
      "Invasive mucinous carcinoma with cytologic atypia and architectural complexity.",
      "Back-to-back cribriform glands and papillary structures with destructive stromal invasion.",
      "Invasion measures at least 5 mm in linear extent; exclude metastasis and germ cell tumor-associated somatic malignancy.",
    ],
    hist: [
      "Cuboidal to columnar mucin-producing cells show mild to severe atypia.",
      "Back-to-back cribriform glands and papillary structures are characteristic.",
      "Goblet cells and mucin pools containing atypical cells may be present; benign or borderline areas may coexist.",
    ],
    ihc: ["Typically positive: CK20, CDX2, and MUC2; CK7 is variable."],
    diff: [
      [
        "Metastatic gastrointestinal adenocarcinoma",
        "Can be immunophenotypically indistinguishable; radiologic and endoscopic evaluation may be required.",
      ],
      [
        "Mesothelioma with mucinous differentiation",
        "Calretinin, WT1, and CK5/6 support mesothelial differentiation.",
      ],
      [
        "Somatic malignancy in a germ cell tumor",
        "Assess for GCNIS and teratomatous elements; 12p gain supports postpubertal germ cell tumor origin.",
      ],
    ],
    molecular: [
      "12p gain testing can help identify a somatic carcinoma arising in a postpubertal teratoma; no defining molecular alteration is established for primary mucinous cystadenocarcinoma.",
    ],
    pit: [
      "Do not diagnose a primary adnexal primary solely from intestinal morphology and CK20/CDX2 positivity; metastatic gastrointestinal carcinoma must be excluded.",
    ],
  },
  {
    name: "Endometrioid Tumors",
    group: "Ovarian-Type Epithelial Tumors",
    behavior:
      "Spectrum: borderline to malignant; stromal tumors also described",
    profile: [
      "Reported mean age: 68 years (range: 59–82 years).",
      "Intratesticular or paratesticular; one reported case arose in the appendix testis.",
      "Usually scrotal swelling; endometriosis may be mass-like or incidental.",
    ],
    criteria: [
      "Establish endometrioid epithelial or endometrial stromal differentiation.",
      "Borderline epithelial tumors show atypical proliferation; carcinomas show confluent/maze-like or complex papillary growth.",
      "Endometrial stromal sarcoma shows endometrial stromal-type cells in an infiltrative multinodular pattern.",
      "Exclude metastasis or direct extension from adjacent organs.",
    ],
    hist: [
      "Endometriosis-like lesions show endometrioid glands and stroma surrounded by smooth muscle bundles.",
      "Borderline tumors are typically cystic with papillary architecture.",
      "Carcinomas show glandular, papillary, cribriform, or solid growth with variable atypia; squamous differentiation may occur.",
      "Low-grade endometrial stromal sarcoma resembles proliferative-phase endometrial stroma and grows in an infiltrative multinodular pattern.",
    ],
    ihc: [
      "Epithelial tumors: CK7, PAX8, ER, and PR positive; CK20, CDX2, and GPC3 negative.",
      "Endometrial stromal sarcoma: CD10, IFITM1, vimentin, ER, and PR positive.",
    ],
    diff: [
      [
        "Metastatic upper gastrointestinal or colorectal carcinoma",
        "Often CK20/CDX2 positive; correlate clinically and radiologically.",
      ],
      [
        "Endometrioid-type yolk sac tumor",
        "GPC3 and CDX2 positivity favors yolk sac tumor.",
      ],
      [
        "Rete testis adenocarcinoma",
        "Usually centered in the testicular hilum; demonstrate or seek transition from rete epithelium.",
      ],
      [
        "Other ovarian-type epithelial tumors",
        "Use morphology and the CK7/PAX8/ER/PR profile to classify the epithelial differentiation.",
      ],
    ],
    molecular: [
      "JAZF1::SUZ12 fusion was reported in one paratesticular low-grade endometrial stromal sarcoma; it is not an established routine test for the epithelial tumors.",
    ],
    pit: [
      "Keep epithelial endometrioid tumors separate from endometrial stromal sarcoma; their morphology and ancillary profiles differ.",
    ],
  },
  {
    name: "Clear Cell Adenocarcinoma",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Malignant",
    profile: [
      "Reported age range: 43–71 years (mean: 52 years).",
      "Intratesticular or paratesticular.",
      "Presents as a mass, sometimes with local or abdominal pain.",
    ],
    criteria: [
      "Müllerian-type malignant epithelial tumor with clear and/or hobnail cells.",
      "Solid, tubulocystic, or complex papillary architecture.",
      "Exclude metastatic renal cell carcinoma and mesothelioma.",
    ],
    hist: [
      "Polygonal, columnar, or hobnail cells have clear cytoplasm.",
      "Growth may be solid, tubulocystic, or papillary.",
      "Nuclear atypia may be mild to moderate and mitotic activity may be low despite a high Ki-67 index.",
    ],
    ihc: [
      "Positive: CK7, EMA, PAX8, and AR.",
      "Negative: WT1, CA19-9, CK20, calretinin, D2-40, ER, and PR.",
      "Ki-67 may be high.",
    ],
    diff: [
      [
        "Mesothelioma",
        "Calretinin and D2-40 positivity support mesothelial lineage.",
      ],
      [
        "Serous carcinoma",
        "Often shows more prominent cellular budding and more frequent psammoma bodies.",
      ],
      [
        "Metastatic renal cell carcinoma",
        "Correlate with renal imaging and clinical history; use a renal cell marker panel as appropriate.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "A low mitotic count does not exclude this carcinoma; the Ki-67 index may be high.",
    ],
  },
  {
    name: "Brenner Tumor",
    group: "Ovarian-Type Epithelial Tumors",
    behavior: "Benign, borderline, or malignant",
    profile: [
      "Reported mean age: 53 years.",
      "Intratesticular or paratesticular.",
      "Presents with scrotal swelling, sometimes with tenderness.",
    ],
    criteria: [
      "Urothelial-type epithelial nests or papillary proliferation within fibromatous stroma.",
      "Classify by invasion: absent in benign and borderline tumors; present in malignant tumors.",
      "Malignant tumors are usually associated with a benign or borderline component.",
    ],
    hist: [
      "Benign: bland urothelial-type nests with elongated grooved nuclei in dense fibromatous stroma.",
      "Borderline: papillary atypical urothelial-type epithelium in cystic spaces or crowded nests without stromal invasion.",
      "Malignant: invasive nests of highly atypical urothelial-type cells with frequent mitoses.",
    ],
    ihc: [
      "Reported ovarian counterpart: CK7, GATA3, p63, and uroplakin positive.",
      "Reported ovarian counterpart: CK20, PAX8, WT1, ER, and PR negative.",
    ],
    diff: [
      [
        "Metastatic urothelial carcinoma",
        "Look for a primary urinary tract tumor and absence of a characteristic associated Brenner component.",
      ],
      [
        "Other ovarian-type epithelial tumors",
        "Brenner tumor shows urothelial-type nests and dense fibromatous stroma rather than serous or mucinous epithelium.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "Do not use cytologic atypia alone to classify a borderline or malignant Brenner tumor; invasion is decisive for malignancy.",
    ],
  },
  {
    name: "Adenoma of the Collecting Ducts and Rete Testis",
    group: "Collecting Ducts and Rete Testis",
    behavior: "Benign",
    profile: [
      "Reported age range: 12–79 years.",
      "Centered in the rete testis at the testicular hilum.",
      "Usually a unilateral painless mass or incidental finding.",
    ],
    criteria: [
      "Rete testis epicenter.",
      "Multicystic and/or solid lesion composed of dilated glands, papillae, and/or tubules in fibrous stroma.",
      "Bland nuclei, rare mitoses, and no destructive invasion.",
    ],
    hist: [
      "Usually cystadenomatous, with variably dilated cystic spaces lined by bland cuboidal to low columnar cells; cilia may be present.",
      "Transition to normal rete testis epithelium is a useful clue.",
      "Stratification, tufting, budding, and papillary structures may occur without significant atypia or invasion.",
      "Fibrous stroma may be prominent (cystadenofibroma pattern).",
    ],
    ihc: [
      "No specific diagnostic immunophenotype is established in the described entity.",
    ],
    diff: [
      [
        "Adenocarcinoma of rete testis",
        "Shows atypia, infiltrative growth, desmoplasia, and often necrosis.",
      ],
      [
        "Sertoli cell tumor",
        "Sertoliform cystadenoma is now classified as a Sertoli cell tumor; assess sex cord stromal differentiation.",
      ],
      [
        "Metastatic carcinoma",
        "A hilar epicenter and transition from normal rete epithelium support a primary rete lesion.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "Sertoliform cystadenoma should be classified with Sertoli cell tumors rather than as a rete adenoma.",
    ],
  },
  {
    name: "Adenocarcinoma of the Collecting Ducts and Rete Testis",
    group: "Collecting Ducts and Rete Testis",
    behavior: "Malignant",
    profile: [
      "Usually adults; reported age range is broad.",
      "Centered in the testicular hilum/rete testis.",
      "Presents with a mass and/or pain, sometimes with hydrocele; local spread and nodal metastases are common.",
    ],
    criteria: [
      "Tumor centered in the testicular hilum and arising from rete epithelium.",
      "Malignant gland-forming neoplasm with infiltrative growth.",
      "Exclude other testicular/paratesticular primaries and metastasis.",
    ],
    hist: [
      "Papillary, solid, glandular, cribriform, or glomeruloid patterns may be present.",
      "Cuboidal to columnar cells show nuclear pseudostratification and cytologic atypia.",
      "Desmoplasia and necrosis are common.",
      "Transition from normal to neoplastic rete epithelium is helpful when identifiable.",
    ],
    ihc: [
      "Positive: CK7, AE1/AE3, EMA, vimentin, PAX8, and BerEP4.",
      "No specific lineage marker for rete epithelium is established.",
    ],
    diff: [
      ["Mesothelioma", "Use mesothelial markers and BAP1/CDKN2A assessment."],
      [
        "Ovarian-type epithelial tumors",
        "PAX8 can overlap; correlate with morphology, site, and lineage markers such as WT1/ER or intestinal markers.",
      ],
      [
        "Epididymal adenocarcinoma",
        "Establish the epicenter in the epididymis rather than the testicular hilum.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Clinical history and imaging are essential; bilateral disease, lymphovascular invasion, and interstitial growth raise concern for metastasis.",
      ],
      [
        "Malignant Sertoli cell tumor",
        "Use sex cord stromal markers and morphology to exclude sex cord differentiation.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "PAX8 positivity is not specific for rete origin; diagnosis requires a convincing hilar epicenter and exclusion of metastasis.",
    ],
  },
  {
    name: "Adenomatoid Tumor",
    group: "Paratesticular Mesothelial Tumors",
    behavior: "Benign",
    profile: [
      "Predominantly adults, especially in the fourth decade; any age can occur.",
      "Usually epididymis; also tunica vaginalis and other paratesticular sites.",
      "Usually a small, solitary, unilateral, well-circumscribed mass; often incidental.",
    ],
    criteria: [
      "Paratesticular location, most often epididymal.",
      "Bland gland-like or vascular-like spaces lined by mesothelial cells.",
      "Mesothelial immunophenotype with retained BAP1.",
    ],
    hist: [
      "Rounded nodule composed of tubules and slit-like or microcystic spaces.",
      "Attenuated to columnar cells form thin bridging strands across lumina.",
      "Intracytoplasmic vacuoles and solid cords/clusters may occur.",
      "Fibrous, fibromuscular, or collagenous stroma; lymphoid aggregates are common.",
      "Infarction may produce regenerative atypia and mitotic activity.",
    ],
    ihc: [
      "Positive: pancytokeratin, CAM5.2, CK7, calretinin, WT1, HBME1, BAP1, L1CAM, and podoplanin.",
      "CK5/6 and h-caldesmon are variable.",
      "Negative: endothelial markers, CEA, BerEP4, inhibin, and CD15.",
      "BAP1 expression is retained.",
    ],
    diff: [
      [
        "Lymphangioma",
        "Endothelial markers (CD31, CD34, ERG) are positive in lymphangioma; adenomatoid tumor is keratin-positive and mesothelial-marker positive.",
      ],
      [
        "Mesothelioma",
        "Adenomatoid tumor is circumscribed and bland; mesothelioma shows destructive invasion and may lose BAP1 or CDKN2A.",
      ],
      [
        "Metastatic signet-ring cell carcinoma",
        "Usually lacks the full mesothelial marker profile and may express epithelial carcinoma markers such as CEA.",
      ],
    ],
    molecular: [
      "TRAF7 missense mutations are characteristic; L1CAM immunoreactivity can highlight this pathway.",
      "No homozygous CDKN2A deletion is expected.",
    ],
    pit: [
      "Do not mistake infarct-related regenerative atypia for malignancy; assess the overall circumscribed architecture and retained BAP1.",
    ],
  },
  {
    name: "Well-Differentiated Papillary Mesothelial Tumor",
    group: "Paratesticular Mesothelial Tumors",
    behavior: "Indolent; papillary noninvasive lesion",
    profile: [
      "Reported age range: 18–70 years.",
      "Arises from tunica vaginalis, usually within a hydrocele sac.",
      "Often associated with hydrocele; rarely presents as a discrete scrotal mass.",
    ],
    criteria: [
      "Solitary papillary lesion arising from tunica vaginalis.",
      "Papillae are lined by a single layer of bland mesothelial cells.",
      "Absent or minimal stromal invasion; retained BAP1 and no CDKN2A homozygous deletion.",
    ],
    hist: [
      "Papillary structures have stromal cores and a single row of bland cuboidal cells.",
      "Nuclear pseudoinclusions are usually present.",
      "Mitoses are absent or exceptional.",
      "Complex architecture or increased mitotic activity argues against this diagnosis.",
    ],
    ihc: [
      "Positive: calretinin, WT1, HBME1, D2-40, pancytokeratin, CK7, and CAM5.2.",
      "BAP1 is retained; CDKN2A homozygous deletion is absent.",
      "BerEP4 may be focally positive; CEA and CD15 are negative.",
    ],
    diff: [
      [
        "Reactive mesothelial hyperplasia",
        "Usually lacks a discrete papillary neoplasm with fibrovascular cores.",
      ],
      [
        "Epithelioid mesothelioma",
        "Destructive invasion, cytologic atypia, and BAP1 loss and/or CDKN2A deletion support mesothelioma.",
      ],
      [
        "Serous borderline tumor",
        "PAX8/ER positivity and calretinin negativity favor Müllerian-type serous tumor.",
      ],
    ],
    molecular: [
      "BAP1 is retained; CDKN2A homozygous deletion and BRAF p.V600E mutation are not characteristic.",
    ],
    pit: [
      "Cytology alone cannot establish this diagnosis; architecture and invasion must be assessed in tissue.",
    ],
  },
  {
    name: "Mesothelioma of the Tunica Vaginalis",
    group: "Paratesticular Mesothelial Tumors",
    behavior: "Malignant",
    profile: [
      "Usually sixth to seventh decade; occasional pediatric cases.",
      "Arises from tunica vaginalis and may extend into testis and paratesticular soft tissue.",
      "Often presents with hydrocele; may be a palpable mass or incidental finding.",
    ],
    criteria: [
      "Tunica vaginalis-centered malignant mesothelial neoplasm.",
      "Predominantly papillary, tubular, or tubulopapillary growth with stromal invasion; sarcomatoid or biphasic patterns may occur.",
      "Positive mesothelial markers; BAP1 loss and/or CDKN2A homozygous deletion are supportive.",
    ],
    hist: [
      "Usually epithelioid with papillary, tubular, and/or tubulopapillary architecture; solid areas may occur.",
      "Desmoplasia, moderate to marked pleomorphism, and mitotic activity are present.",
      "Necrosis is common in high-grade tumors.",
      "Approximately one third show biphasic epithelioid and sarcomatoid morphology; purely sarcomatoid tumors are rare.",
      "Mesothelioma in situ may line the tunica vaginalis.",
    ],
    ihc: [
      "Positive: calretinin, podoplanin (D2-40), HBME1, WT1, thrombomodulin, pancytokeratin, and CK7.",
      "CK20 and CEA are negative; BerEP4 may be weak/focal.",
      "BAP1 loss and MTAP loss support malignancy; CDKN2A deletion can be assessed by FISH.",
    ],
    diff: [
      [
        "Reactive/atypical mesothelial hyperplasia",
        "Lacks destructive invasion and usually retains BAP1/MTAP without CDKN2A homozygous deletion.",
      ],
      [
        "Well-differentiated papillary mesothelial tumor",
        "Bland single-layer papillae without destructive invasion; BAP1 retained.",
      ],
      [
        "Ovarian-type epithelial tumor",
        "PAX8 and ER support Müllerian differentiation; mesothelioma expresses mesothelial markers.",
      ],
      [
        "Metastatic carcinoma",
        "Use clinical history, imaging, and a lineage-directed IHC panel.",
      ],
    ],
    molecular: [
      "BAP1 alterations/loss and CDKN2A homozygous deletion are diagnostically useful; MTAP loss by IHC can serve as a surrogate for CDKN2A deletion.",
      "Germline BAP1 mutations have been reported.",
    ],
    pit: [
      "Demonstrate invasion whenever possible; cytologic atypia and mesothelial-marker positivity alone are insufficient to distinguish malignancy from benign/borderline mesothelial proliferations.",
    ],
  },
  {
    name: "Cystadenoma of the Epididymis",
    group: "Epididymal Tumors",
    behavior: "Benign",
    profile: [
      "Age distribution is not well established.",
      "Usually located in the head (caput) of the epididymis.",
      "May present with a scrotal mass, infertility, or pain; bilateral cases occur.",
    ],
    criteria: [
      "Epididymal-centered tubular and cystic lesion, sometimes with papillary areas.",
      "Single layer of bland tall columnar cells with eosinophilic cytoplasm.",
      "No mitoses, necrosis, pleomorphism, or other malignant features.",
    ],
    hist: [
      "Unilocular or multilocular cyst with a smooth surface and clear fluid.",
      "Tubules and cysts are lined by bland tall columnar epithelium.",
      "Papillary, microcystic, cribriform, or microglandular areas may occur without atypia.",
    ],
    ihc: [
      "No specific immunophenotype is established.",
      "PSA and PAP are negative, helping exclude prostatic carcinoma.",
    ],
    diff: [
      [
        "Papillary cystadenoma of the epididymis",
        "Shows cuboidal clear cells and papillary fronds; often associated with VHL.",
      ],
      [
        "Metastatic prostatic carcinoma",
        "May mimic microglandular/cribriform areas but shows atypia/prominent nucleoli and PSA/PAP positivity.",
      ],
      [
        "Epididymal adenocarcinoma",
        "Shows cytologic malignancy and infiltrative growth.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "The distinction from papillary cystadenoma rests on tall eosinophilic columnar cells rather than bland cuboidal clear cells.",
    ],
  },
  {
    name: "Papillary Cystadenoma of the Epididymis",
    group: "Epididymal Tumors",
    behavior: "Benign",
    profile: [
      "Most often third decade; reported range: 12–81 years.",
      "Usually head of epididymis.",
      "Painless, slowly growing scrotal mass; may be found during VHL or infertility workup.",
      "Bilateral tumors are strongly associated with von Hippel–Lindau (VHL) syndrome.",
    ],
    criteria: [
      "Epididymal location.",
      "Papillary fronds with fibrovascular cores and bland clear epithelial cells.",
      "No significant atypia, mitoses, or necrosis.",
      "Consider VHL, particularly with bilateral lesions.",
    ],
    hist: [
      "Papillae and cysts are lined by cuboidal to columnar cells with clear or vacuolated cytoplasm.",
      "Nuclei are small and round; prominent cell borders and occasional cilia may be seen.",
      "Luminal spaces may contain homogeneous eosinophilic colloid-like material.",
      "Stroma is fibrous, sometimes with focal hyalinization.",
    ],
    ihc: [
      "Positive: cytokeratin, AE1/AE3, CK7, PAX8, and CAIX (cup-like basolateral pattern).",
      "Negative: CD10, calretinin, and WT1.",
      "PAS may highlight cytoplasmic glycogen.",
    ],
    diff: [
      [
        "Clear cell papillary renal cell tumor",
        "Papillary cystadenoma may resemble it; CK7 positivity with negative CD10, AMACR, and RCC marker supports epididymal papillary cystadenoma.",
      ],
      [
        "Epididymal cystadenoma",
        "Tall eosinophilic columnar cells rather than cuboidal clear cells and papillary fibrovascular fronds.",
      ],
      [
        "Metastatic clear cell renal cell carcinoma",
        "Assess clinical history and renal imaging; renal cell carcinoma marker profile differs.",
      ],
    ],
    molecular: [
      "VHL-associated cases may show 3p25–26 loss of heterozygosity and VHL gene mutations.",
      "Consider germline VHL evaluation in bilateral or syndromic cases.",
    ],
    pit: [
      "Bilateral papillary cystadenomas should prompt evaluation for VHL syndrome.",
    ],
  },
  {
    name: "Adenocarcinoma of the Epididymis",
    group: "Epididymal Tumors",
    behavior: "Malignant",
    profile: [
      "Reported age range: 24–82 years (mean: 55 years).",
      "Arises within the epididymis and may involve paratesticular tissues.",
      "Presents with scrotal mass, hydrocele, and/or pain.",
    ],
    criteria: [
      "Epididymal epicenter.",
      "Malignant glandular neoplasm with infiltrative growth.",
      "Exclude rete testis carcinoma, ovarian-type tumors, mesothelioma, and metastatic adenocarcinoma.",
    ],
    hist: [
      "Tubular, papillary, tubulopapillary, papillary-cystic, or sheet-like undifferentiated patterns.",
      "Cuboidal to columnar cells have clear to amphophilic cytoplasm.",
      "Stromal invasion, necrosis, and psammoma bodies may be present.",
      "Clear cell or mucinous differentiation may occur.",
    ],
    ihc: [
      "Positive: EMA, CEA, PAX8, PAX2, and villin.",
      "Mucinous/clear cell variants may express CK20 and CK7.",
      "Negative: WT1, CDX2, AMACR, PSA, and RCC marker.",
    ],
    diff: [
      [
        "Mesothelioma",
        "Use calretinin, WT1, D2-40, BAP1, and MTAP/CDKN2A assessment.",
      ],
      [
        "Ovarian-type serous or mucinous cystadenocarcinoma",
        "Compare Müllerian or intestinal phenotype and establish the site of origin.",
      ],
      [
        "Rete testis adenocarcinoma",
        "Centered in the testicular hilum rather than the epididymis.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Clinical history and imaging are essential; some metastatic tumors share the same immunophenotype.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "PAX8/PAX2 positivity does not independently establish epididymal origin; the anatomic epicenter and exclusion of metastasis are essential.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma of the Epididymis / Paratesticular Region",
    group: "Epididymal Tumors",
    behavior: "Malignant",
    profile: [
      "Reported age range: 27–85 years.",
      "Reported primary sites include epididymis and tunica vaginalis lining a chronic hydrocele.",
      "Presents as a hard scrotal mass, with or without hydrocele.",
    ],
    criteria: [
      "Malignant squamous epithelial neoplasm with cytologic and architectural atypia.",
      "Establish an epididymal/paratesticular epicenter.",
      "Exclude direct extension from scrotal skin/adnexal carcinoma and metastasis.",
    ],
    hist: [
      "Pleomorphic squamous cells may occur singly or in groups.",
      "Keratinization, nuclear hyperchromasia, and eosinophilic to clear cytoplasm may be present.",
      "Mitoses, necrosis, and lymphovascular invasion may occur.",
      "Intercellular bridges may be inconspicuous or absent.",
    ],
    ihc: [
      "No specific immunophenotype is established in the described cases; use a squamous differentiation panel as appropriate.",
    ],
    diff: [
      [
        "Direct extension from scrotal skin or skin adnexal SCC",
        "Look for an epidermal/skin adnexal primary and a contiguous route of spread.",
      ],
      [
        "Somatic-type malignancy in a teratoma",
        "Look for associated teratomatous elements and evidence of a germ cell tumor.",
      ],
      [
        "Metastatic SCC",
        "Exclude a primary at another site by clinical and radiologic correlation.",
      ],
    ],
    molecular: [
      "No diagnostically relevant molecular alteration is established.",
    ],
    pit: [
      "Primary epididymal SCC is exceptionally rare; a thorough clinical search for another primary site is mandatory.",
    ],
  },
  {
    name: "Melanotic Neuroectodermal Tumor of the Epididymis",
    group: "Epididymal Tumors",
    behavior: "Intermediate; occasional metastasis",
    profile: [
      "Usually infants in the first few months of life; reported up to 8 years.",
      "Epididymis or paratesticular tissue; occasional testicular, rete testis, or spermatic cord involvement.",
      "Firm, painless, rapidly growing scrotal mass, often with hydrocele.",
    ],
    criteria: [
      "Pediatric tumor with two distinct cell populations in fibrous stroma.",
      "Large melanin-containing epithelioid cells and small hyperchromatic neuroblast-like cells.",
      "Atypical mitoses and necrosis are absent in typical cases.",
      "Catecholamine metabolites and urinary VMA/HVA may be elevated.",
    ],
    hist: [
      "Biphasic architecture: nests, cords, glands, or pseudoalveolar spaces in fibrocollagenous stroma.",
      "Large peripheral epithelioid cells have abundant eosinophilic cytoplasm and variable melanin pigment.",
      "Small central neuroblast-like cells have scant cytoplasm and hyperchromatic nuclei.",
      "Atypical mitoses and necrosis are absent in typical lesions.",
    ],
    ihc: [
      "Small cells: CD57, NSE, NB84, and synaptophysin positive; weak PAX5, S100, CD99, and calretinin may occur.",
      "Large cells: pancytokeratin, vimentin, NSE, HMB45, DBH, and EMA positive.",
    ],
    diff: [
      [
        "Melanoma",
        "Usually lacks the characteristic biphasic epithelial/neuroblast-like pattern; correlate with melanocytic markers and morphology.",
      ],
      [
        "Neuroblastoma",
        "Lacks the melanin-containing epithelioid cell population and epithelial component.",
      ],
      [
        "Alveolar rhabdomyosarcoma",
        "Desmin and myogenin/MyoD1 support rhabdomyoblastic differentiation.",
      ],
      ["Lymphoma", "Leukocyte markers establish hematolymphoid lineage."],
      [
        "DSRCT / Ewing sarcoma",
        "Use morphology and lineage-directed immunohistochemistry/molecular testing to exclude these small round cell tumors.",
      ],
    ],
    molecular: [
      "No molecular pathology data are established for genitourinary cases.",
    ],
    pit: [
      "The large melanin-containing cell population is essential; sparse large cells in cytology may lead to misclassification as a malignant small round cell tumor.",
    ],
  },
];

const groups = ["All", ...Array.from(new Set(entities.map((x) => x.group)))];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

export default function TesticularAdnexaTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const matchesGroup = group === "All" || e.group === group;
      const haystack = [
        e.name,
        e.group,
        e.behavior,
        ...e.profile,
        ...e.criteria,
        ...e.hist,
        ...e.ihc,
        ...e.molecular,
        ...e.diff.flat(),
      ]
        .join(" ")
        .toLowerCase();
      return matchesGroup && (!q || haystack.includes(q));
    });
  }, [query, group]);
  const toggle = (name: string) =>
    setOpened((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Genitourinary Pathology
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Testicular Adnexa Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference to epithelial,
                mesothelial, rete testis, and epididymal tumors, emphasizing
                essential criteria and practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the anatomic epicenter, lineage, and presence or
                absence of invasion.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Primary adnexal carcinomas are rare. Excluding metastasis and
                direct extension is essential before assigning a primary site.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from anatomic site to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the epicenter",
                "Rete testis/hilum, epididymis, tunica vaginalis, testis, or paratesticular soft tissue.",
              ],
              [
                "2. Identify the lineage",
                "Müllerian-type epithelial, intestinal-type mucinous, mesothelial, urothelial-type, or other epithelial differentiation.",
              ],
              [
                "3. Assess architecture",
                "Cystic, papillary, tubular, cribriform, solid, or biphasic; evaluate the stromal interface.",
              ],
              [
                "4. Determine behavior",
                "Look specifically for destructive stromal invasion, desmoplasia, necrosis, mitotic activity, and lymphovascular invasion.",
              ],
              [
                "5. Exclude secondary disease",
                "Correlate with clinical history and imaging; consider prostate, gastrointestinal, renal, lung, skin, and other primary sites.",
              ],
            ].map((x) => (
              <div
                key={x[0]}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="font-bold text-slate-900">{x[0]}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="High-yield diagnostic distinctions">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-2 pr-4">Diagnostic problem</th>
                  <th className="py-2 pr-4">Key distinction</th>
                  <th className="py-2">Useful ancillary findings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Serous borderline tumor vs mesothelial proliferation
                  </td>
                  <td className="py-3 pr-4">
                    Hierarchical papillae with stratified serous epithelium vs
                    bland mesothelial papillae or reactive proliferation.
                  </td>
                  <td className="py-3">
                    PAX8/ER/PR support serous lineage; calretinin/D2-40 support
                    mesothelial lineage.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Mucinous benign/borderline vs carcinoma
                  </td>
                  <td className="py-3 pr-4">
                    No atypia/complexity in cystadenoma; atypical complex
                    noninvasive epithelium in borderline tumor; destructive
                    invasion in carcinoma.
                  </td>
                  <td className="py-3">
                    CK20, CDX2, and MUC2 commonly support intestinal
                    differentiation but do not distinguish primary from
                    metastatic disease.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Rete adenoma vs rete adenocarcinoma
                  </td>
                  <td className="py-3 pr-4">
                    Bland, noninfiltrative rete-centered cystic/tubular
                    proliferation vs atypical infiltrative carcinoma with
                    desmoplasia and necrosis.
                  </td>
                  <td className="py-3">
                    Transition from normal rete epithelium is helpful; no
                    specific rete-lineage marker is established.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    WD papillary mesothelial tumor vs mesothelioma
                  </td>
                  <td className="py-3 pr-4">
                    Bland single-layer papillae without destructive invasion vs
                    invasive, atypical mesothelial neoplasm.
                  </td>
                  <td className="py-3">
                    BAP1 retention and absence of CDKN2A deletion support WDPMT;
                    BAP1/MTAP loss or CDKN2A deletion supports mesothelioma.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold">
                    Epididymal papillary cystadenoma vs cystadenoma
                  </td>
                  <td className="py-3 pr-4">
                    Clear cuboidal cells and papillary fibrovascular cores vs
                    tall eosinophilic columnar lining.
                  </td>
                  <td className="py-3">
                    Bilateral papillary cystadenomas should prompt consideration
                    of VHL syndrome.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile, diagnostic criteria, and differential
                diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by tumor, site, morphology, immunomarker, or molecular
                alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. PAX8, BAP1, VHL, rete testis..."
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
            {filtered.map((e) => {
              const open = opened.includes(e.name);
              return (
                <article
                  key={e.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {e.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {e.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {e.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {e.profile[1] || e.profile[0]}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Clinical Profile
                        </h4>
                        <BulletList items={e.profile} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Essential Diagnostic Criteria
                        </h4>
                        <BulletList items={e.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Histopathology
                        </h4>
                        <BulletList items={e.hist} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Immunohistochemistry
                        </h4>
                        <BulletList items={e.ihc} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Molecular Pathology
                        </h4>
                        <BulletList items={e.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[620px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {e.diff.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/4 py-3 pr-4 align-top font-semibold text-slate-900">
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
                          Diagnostic Pitfalls
                        </h4>
                        <BulletList items={e.pit} />
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

        <Panel title="Ancillary testing: practical use">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">
                Müllerian-type epithelial tumors
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                PAX8, ER, and PR support Müllerian differentiation. Calretinin
                and D2-40 help assess mesothelial lineage. Intestinal markers
                (CK20, CDX2, MUC2) identify mucinous differentiation but cannot
                by themselves distinguish a primary adnexal tumor from a
                gastrointestinal metastasis.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">
                Mesothelial proliferations
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Calretinin, WT1, and D2-40 support mesothelial lineage. BAP1 and
                MTAP immunohistochemistry and CDKN2A FISH can help distinguish
                malignant mesothelioma from benign or borderline proliferations.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">
                Epididymal papillary cystadenoma
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bilateral tumors raise the possibility of VHL syndrome. CAIX
                with a cup-like basolateral pattern and PAX8/CK7 positivity
                support the diagnosis in the appropriate morphology.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <h3 className="font-semibold text-slate-900">
                Germ cell tumor exclusion
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                When mucinous tumors raise concern for somatic-type malignancy
                arising in a postpubertal teratoma, extensively sample the
                background testis and assess for GCNIS and 12p gain when
                indicated.
              </p>
            </div>
          </div>
        </Panel>

        <Panel title="Grossing, sampling, and reporting checklist">
          <BulletList
            items={[
              "Document the precise anatomic epicenter: rete testis/hilum, epididymis, tunica vaginalis, testicular parenchyma, or paratesticular soft tissue.",
              "For cystic lesions, sample the entire epithelial lining when feasible, including papillary excrescences, mural nodules, thickened areas, and solid components.",
              "For suspected carcinoma, extensively sample the tumor–stroma interface to identify and document destructive invasion.",
              "Submit the interface with testicular parenchyma and rete testis to establish the site of origin and assess transition from native epithelium.",
              "For mucinous tumors, search for teratomatous elements and background GCNIS; consider 12p testing when germ cell tumor origin is in the differential.",
              "For tunica vaginalis lesions, document papillary versus solid growth, invasion into testis or soft tissue, lymphovascular invasion, and any sarcomatoid component.",
              "For bilateral epididymal papillary cystadenomas, communicate the potential association with VHL syndrome.",
              "In the final diagnosis, state the tumor type, behavior, anatomic epicenter, invasion status, and relevant ancillary results.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference covers
          epithelial, mesothelial, rete testis, and epididymal tumors of the
          testicular adnexa. Paratesticular soft tissue tumors are classified
          with mesenchymal tumors. Ancillary tests should be interpreted with
          morphology, anatomic location, and clinical/radiologic findings.
        </footer>
      </div>
    </main>
  );
}
