"use client";
import { useMemo, useState, type ReactNode } from "react";
type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};
const items: Item[] = [
  {
    name: "Simple mucinous cyst",
    group: "Benign / precursor",
    behavior: "Non-invasive; generally indolent",
    site: "Usually solitary; slight body/tail predilection; predominantly women (mean age ~57 years).",
    clinical: [
      "Often asymptomatic; may cause abdominal pain or jaundice.",
      "Typically a unilocular or paucilocular cyst without main-duct communication.",
    ],
    criteria: [
      "Cystic lesion >10 mm.",
      "Flat, predominantly non-papillary gastric-type mucinous epithelium.",
      "No ovarian-type stroma.",
      "Exclude retention cyst by assessing ductal obstruction and chronic pancreatitis.",
    ],
    morphology: [
      "Usually a single layer of cuboidal-to-columnar gastric-type mucinous epithelium.",
      "The lining is predominantly flat with minimal papillary or tufted change.",
      "Low-grade dysplasia is typical; focal high-grade dysplasia may show tufting, pseudostratification, and loss of polarity.",
      "The fibrotic cyst wall lacks ovarian-type stroma.",
      "Background PanIN and periductal fibrosis may be present.",
    ],
    ihc: [
      "CK7 and CK19 are diffusely expressed.",
      "MUC5AC and/or MUC6 are usually positive.",
      "MUC1 is positive in a subset; CDX2 and MUC2 may be focally positive.",
      "ER and PR are negative in the cyst wall.",
    ],
    molecular: [
      "Cyst-fluid KRAS alterations may support a mucinous cyst but are not specific; molecular testing is not clinically relevant in resection specimens.",
    ],
    differential: [
      ["PanIN", "Microscopic lesion <5 mm; simple mucinous cyst is >10 mm."],
      [
        "Gastric-type IPMN",
        "Papillary architecture and growth within the ductal system favor IPMN.",
      ],
      ["MCN", "Requires ovarian-type stroma."],
      [
        "Retention cyst",
        "Look for ductal stenosis/obstruction, calculi, and obstructive chronic pancreatitis.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Serous neoplasm",
    group: "Benign / precursor",
    behavior:
      "Usually benign; malignancy requires unequivocal distant metastasis",
    site: "Any pancreatic region; body/tail in 50–75%; multifocal disease suggests VHL syndrome.",
    clinical: [
      "Mean age ~58 years; female predominance (approximately 3:1).",
      "About 60% are asymptomatic; larger lesions may cause pain, nausea, vomiting, weight loss, or mass effect.",
      "Jaundice is unusual.",
    ],
    criteria: [
      "Neoplasm composed of bland cuboidal cells with clear, glycogen-rich cytoplasm.",
      "Cystic, microcystic, macrocystic, or solid architecture may occur.",
      "Serous cystadenocarcinoma is diagnosed only with unequivocal distant metastasis beyond the pancreatic/peripancreatic bed.",
    ],
    morphology: [
      "Microcystic tumors show numerous small cysts separated by delicate septa, sometimes with a central fibrous scar.",
      "Cysts are lined by a single layer of flat-to-cuboidal cells with clear cytoplasm and small uniform nuclei.",
      "PAS-positive, diastase-sensitive cytoplasmic glycogen is characteristic.",
      "Macrocystic (oligocystic) lesions may mimic MCN or IPMN.",
      "Solid serous adenoma forms tightly packed acini with minute or absent lumina.",
      "Cytologic atypia or local invasion alone does not establish malignancy.",
    ],
    ihc: [
      "Tumor cells express inhibin, GLUT1, and MUC6.",
      "Neoplastic cells are glycogen-rich; PAS-positive and PAS-D-negative.",
    ],
    molecular: [
      "VHL inactivation / chromosome 3p loss supports serous neoplasia in selected cyst-fluid studies.",
      "Germline VHL association is clinically relevant when lesions are multifocal or occur with other syndrome features.",
    ],
    differential: [
      [
        "MCN",
        "MCN has mucinous epithelium and ovarian-type stroma; serous neoplasm has glycogen-rich clear cells.",
      ],
      [
        "IPMN",
        "IPMN communicates with and expands pancreatic ducts; serous neoplasm generally does not.",
      ],
      [
        "PanNET",
        "Solid serous adenoma may mimic PanNET; glycogen, inhibin/GLUT1/MUC6, and neuroendocrine markers help.",
      ],
      [
        "Metastatic renal cell carcinoma",
        "Consider clinical history and renal-lineage markers in clear-cell solid lesions.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Pancreatic intraepithelial neoplasia (PanIN)",
    group: "Benign / precursor",
    behavior: "Non-invasive precursor; microscopic",
    site: "Within small pancreatic ducts; often incidental in adult pancreas.",
    clinical: [
      "Microscopic lesions do not produce symptoms and are generally not detectable by imaging.",
      "Prevalence increases with age.",
    ],
    criteria: [
      "Microscopic (<5 mm), non-invasive flat or micropapillary epithelial neoplasm confined to pancreatic ducts.",
      "Classify as low-grade or high-grade based on the highest-grade focus.",
      "High-grade PanIN shows marked cytologic and architectural atypia without stromal invasion.",
    ],
    morphology: [
      "Low-grade PanIN shows flat or micropapillary mucinous epithelium with mild-to-moderate atypia.",
      "High-grade PanIN shows complex papillary/cribriform architecture, nuclear stratification, loss of polarity, and marked atypia.",
      "Mucinous cytoplasm is common; mitoses and necrosis may be present in high-grade lesions.",
      "No infiltrative glands in desmoplastic stroma should be identified.",
    ],
    ihc: [
      "MUC5AC and other ductal markers may support ductal differentiation but do not independently establish grade or invasion.",
    ],
    molecular: [
      "KRAS alterations are common early events; TP53, CDKN2A, and SMAD4 alterations are enriched in advanced/high-grade PanIN.",
      "Molecular testing is not routinely required for diagnosis.",
    ],
    differential: [
      [
        "IPMN",
        "Grossly visible, usually >1 cm intraductal mucinous neoplasm; PanIN is microscopic.",
      ],
      [
        "Cancerization of ducts by PDAC",
        "Look for adjacent invasive carcinoma and abrupt transition from dysplastic to normal duct epithelium.",
      ],
      [
        "Invasive PDAC",
        "Requires infiltrative growth beyond the duct, often with desmoplasia, perineural, or vascular invasion.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Intraductal papillary mucinous neoplasm (IPMN)",
    group: "Benign / precursor",
    behavior:
      "Non-invasive precursor; may be associated with invasive carcinoma",
    site: "Main duct, branch ducts, or both; often pancreatic head.",
    clinical: [
      "Usually adults in later decades; many lesions are incidental.",
      "Mucin hypersecretion may cause recurrent pancreatitis; main-duct involvement can cause ductal dilatation.",
    ],
    criteria: [
      "Grossly visible mucin-producing epithelial neoplasm within the pancreatic ductal system.",
      "Papillary epithelial proliferation with ductal communication.",
      "Grade as low-grade or high-grade dysplasia; separately identify and classify any invasive carcinoma.",
      "Specify gastric, intestinal, pancreatobiliary, or oncocytic epithelial subtype when possible.",
    ],
    morphology: [
      "Papillary mucinous epithelium expands main or branch ducts.",
      "Gastric type: pyloric/foveolar-like epithelium, usually low-grade.",
      "Intestinal type: villous papillae with goblet cells; may be associated with colloid carcinoma.",
      "Pancreatobiliary type: complex branching papillae lined by high-grade cuboidal cells.",
      "High-grade dysplasia shows marked atypia, architectural complexity, and loss of polarity.",
      "Invasion may be tubular or colloid; sample extensively, especially solid areas and mural nodules.",
    ],
    ihc: [
      "MUC5AC is commonly expressed.",
      "Intestinal type typically expresses MUC2 and CDX2.",
      "Pancreatobiliary type commonly expresses MUC1.",
      "Use immunophenotype to support, not replace, morphologic subtyping.",
    ],
    molecular: [
      "GNAS and KRAS mutations are characteristic drivers; RNF43 alterations also occur.",
      "TP53, CDKN2A, and SMAD4 alterations are associated with progression/high-grade dysplasia or invasion.",
      "Cyst-fluid molecular testing may help distinguish mucinous from non-mucinous cysts in selected cases.",
    ],
    differential: [
      [
        "ITPN",
        "ITPN is usually non-mucinous, tubular/cribriform, MUC5AC-negative, and lacks the usual IPMN molecular profile.",
      ],
      [
        "MCN",
        "MCN has ovarian-type stroma and does not arise within the pancreatic duct system.",
      ],
      [
        "PanIN",
        "PanIN is microscopic (<5 mm), whereas IPMN is grossly visible.",
      ],
      [
        "Retention cyst/pseudocyst",
        "No neoplastic papillary mucinous epithelium in pseudocyst; correlate with pancreatitis history.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Intraductal oncocytic papillary neoplasm (IOPN)",
    group: "Benign / precursor",
    behavior:
      "Non-invasive intraductal neoplasm; may be associated with invasive carcinoma",
    site: "Usually main pancreatic duct; often head; may involve branch ducts.",
    clinical: [
      "Typically presents in adults with abdominal pain or pancreatitis; some are incidental.",
      "Often forms a large solid-cystic/intraductal mass with ductal dilatation.",
    ],
    criteria: [
      "Intraductal epithelial neoplasm with papillary architecture and conspicuous oncocytic cytoplasm.",
      "Located within a dilated pancreatic duct.",
      "Identify and separately report any associated invasive carcinoma.",
    ],
    morphology: [
      "Complex arborizing papillae are lined by multilayered oncocytic cells.",
      "Cells have abundant eosinophilic granular cytoplasm and prominent nucleoli.",
      "Intraluminal mucin may be scant; cribriform and solid areas may occur.",
      "Invasion may be tubular or colloid-like; thorough sampling is important.",
    ],
    ihc: [
      "MUC1, MUC5AC, and MUC6 are commonly expressed.",
      "HepPar1 may be positive and is not evidence by itself of hepatocellular origin.",
    ],
    molecular: [
      "PRKACA or PRKACB fusion is characteristic and diagnostically useful in selected cases.",
      "KRAS and GNAS mutations typical of IPMN are generally absent or uncommon.",
    ],
    differential: [
      [
        "Pancreatobiliary-type IPMN",
        "IOPN has oncocytic cells with granular eosinophilic cytoplasm and PRKACA/B fusion; IPMN has mucinous papillary epithelium.",
      ],
      [
        "ITPN",
        "ITPN is predominantly tubular/cribriform, non-oncocytic, and lacks intracytoplasmic mucin.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar markers (trypsin, chymotrypsin, BCL10) support acinar carcinoma.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Intraductal tubulopapillary neoplasm (ITPN)",
    group: "Benign / precursor",
    behavior: "High-grade intraductal neoplasm; invasion common",
    site: "Approximately half in pancreatic head; diffuse involvement in a minority.",
    clinical: [
      "Mean age ~60 years; slight female predominance.",
      "Abdominal pain is common; obstructive jaundice is uncommon; about one third are incidental.",
    ],
    criteria: [
      "Intraductal nodules of back-to-back glands forming large cribriform structures.",
      "High-grade cytologic atypia with absent or minimal intracellular mucin.",
      "Demonstrate intraductal location and carefully assess for associated invasion.",
    ],
    morphology: [
      "Solid, fleshy intraductal nodules may completely fill and obliterate the duct lumen.",
      "Back-to-back tubular glands form complex cribriform structures; papillae may be present.",
      "Tumor cells are cuboidal with eosinophilic-to-amphophilic cytoplasm and uniform but atypical nuclei.",
      "Mitotic figures are readily identified; focal comedo-like necrosis is common.",
      "Invasive carcinoma occurs in a substantial proportion and may be subtle at the tumor periphery.",
    ],
    ihc: [
      "MUC1 and MUC6 are commonly expressed.",
      "MUC5AC is absent or only rarely/focally expressed; MUC2 is consistently negative.",
      "Acinar and neuroendocrine markers are negative.",
    ],
    molecular: [
      "BRAF, FGFR2, MAML2/3, NRG1, and RET fusions occur in subsets; some may be therapeutically actionable.",
      "KRAS mutations are uncommon; molecular testing is not routinely required for diagnosis.",
    ],
    differential: [
      [
        "Pancreatobiliary-type IPMN",
        "IPMN is mucin-producing, MUC5AC-positive, and shows papillary architecture and a spectrum of dysplasia.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar carcinoma expresses trypsin, chymotrypsin, and/or BCL10 and may contain apical zymogen granules.",
      ],
      [
        "PDAC",
        "ITPN is centered within ducts with cribriform intraductal nodules; PDAC shows destructive infiltrative glands in desmoplastic stroma.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Mucinous cystic neoplasm (MCN)",
    group: "Benign / precursor",
    behavior: "Non-invasive precursor; ~15% associated with invasive carcinoma",
    site: "Almost exclusively body/tail; >95% in women; median age ~45 years.",
    clinical: [
      "Small lesions are often incidental; larger lesions cause pain, mass effect, or palpable mass.",
      "Usually a well-defined multilocular cyst that does not communicate with pancreatic ducts.",
      "Large size, thick irregular wall, mural nodules, and elevated CA19-9 raise concern for invasion.",
    ],
    criteria: [
      "Grossly visible multilocular cystic neoplasm, usually in a woman and in body/tail.",
      "No communication with pancreatic ductal system.",
      "Mucinous epithelial lining with diagnostic ovarian-type subepithelial stroma.",
      "Grade as low-grade or high-grade dysplasia; separately identify invasive carcinoma.",
    ],
    morphology: [
      "Cysts are lined by mucin-producing columnar epithelium, sometimes with non-mucinous cuboidal areas.",
      "Ovarian-type stroma is composed of densely packed spindle cells and is required for diagnosis.",
      "Low-grade dysplasia shows mild-to-moderate atypia; high-grade dysplasia shows complex papillae, stratification, loss of polarity, and marked atypia.",
      "Approximately 15% have associated invasive carcinoma, usually tubular-type; invasion may be focal in cyst septa.",
    ],
    ihc: [
      "Epithelium commonly expresses CK7, CK19, EMA, CEA, and MUC5AC.",
      "Ovarian-type stroma commonly expresses PR and variably ER, SMA, and desmin.",
      "Luteinized stromal cells may express inhibin, calretinin, and tyrosine hydroxylase.",
    ],
    molecular: [
      "KRAS and RNF43 alterations occur; TP53 alterations are enriched in high-grade dysplasia/invasive carcinoma.",
      "Cyst-fluid KRAS/GNAS support a mucin-producing cyst; TP53/SMAD4/CTNNB1/MTOR alterations may support high-grade neoplasia in selected cases.",
    ],
    differential: [
      [
        "IPMN",
        "IPMN communicates with the duct system; MCN has ovarian-type stroma and lacks ductal communication.",
      ],
      [
        "Pseudocyst",
        "MCN has epithelial lining and ovarian-type stroma; pseudocyst lacks epithelial lining.",
      ],
      [
        "Simple mucinous cyst",
        "Simple mucinous cyst lacks ovarian-type stroma and is usually unilocular/paucilocular.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Pancreatic ductal adenocarcinoma (PDAC)",
    group: "Malignant",
    behavior: "Highly aggressive invasive carcinoma",
    site: "Usually older adults; pancreatic head ~60%, body/tail less common but often later-stage; no strong sex restriction.",
    clinical: [
      "Often presents with painless jaundice, weight loss, abdominal/back pain, and new-onset or worsening diabetes.",
      "Head tumors cause biliary and pancreatic duct obstruction (double-duct sign) and upstream obstructive chronic pancreatitis.",
      "Body/tail tumors often present later and may invade celiac axis, stomach, spleen, or adjacent structures.",
    ],
    criteria: [
      "Infiltrating epithelial malignancy, typically with at least focal glandular differentiation.",
      "Haphazard, irregular glands infiltrate pancreatic parenchyma and elicit desmoplastic stroma.",
      "Perineural invasion and/or vascular invasion strongly support invasive carcinoma.",
      "Desirable: perineural and vascular invasion; assess ductal cancerization versus true invasion.",
      "In cytology, look for irregular cell spacing, marked anisonucleosis (4:1 within a group), parachromatin clearing, irregular nuclear membranes, and lacy/vacuolated cytoplasm.",
    ],
    morphology: [
      "Most tumors form irregular duct-like glands haphazardly infiltrating pancreatic parenchyma in dense, hypovascular desmoplastic stroma.",
      "Neoplastic glands may contain necrotic debris or show incomplete luminal lining.",
      "Nuclear size variation is common; a 4:1 nuclear size ratio within a gland supports PDAC.",
      "Perineural invasion is frequent and highly tumor-specific in the appropriate setting.",
      "Lymphovascular invasion, especially venous invasion, is common; glands adjacent to muscular vessels are a useful clue.",
      "Cancerization of pre-existing ducts may mimic high-grade PanIN; seek adjacent invasive carcinoma and abrupt transition to normal duct epithelium.",
      "Large-duct pattern may appear deceptively bland; haphazard arrangement outside normal duct branching is key.",
      "Foamy-gland pattern has lacy microvesicular cytoplasm, basally placed hyperchromatic nuclei, and apical brush-border-like condensation.",
      "Poorly differentiated areas may form solid/cribriform sheets with pleomorphism, atypical mitoses, necrosis, and little mucin.",
    ],
    ihc: [
      "CK7, CK8/18, and CK19 are consistently expressed but are not specific for PDAC.",
      "CEA, CA19-9, CA125, MUC1, and MUC5AC are commonly positive; MUC2 is usually negative in conventional PDAC.",
      "SMAD4 nuclear expression is lost in approximately 55%; p16 is lost in approximately 75%.",
      "p53 shows an aberrant overexpression or null pattern in approximately 75–80%.",
      "Trypsin/BCL10 and synaptophysin/chromogranin are usually negative; use to exclude acinar and neuroendocrine neoplasms.",
    ],
    molecular: [
      "WHO source lists diagnostic molecular pathology as not clinically relevant for routine histologic diagnosis.",
      "KRAS, TP53, CDKN2A, and SMAD4 are common drivers but are not diagnostic criteria; molecular profiling may guide targeted therapy.",
    ],
    differential: [
      [
        "Chronic pancreatitis / reactive ductal atypia",
        "Reactive glands are usually lobular and orderly, with small round polarized nuclei, uniform spacing, and no marked anisonucleosis or hyperchromasia. PDAC shows haphazard infiltrative glands, desmoplasia, perineural/vascular invasion, and cytologic atypia.",
      ],
      [
        "Autoimmune pancreatitis (AIP)",
        "AIP can produce dense fibrosis and inflammation that mimic PDAC, especially on EUS-FNA. Look for lymphoplasmacytic inflammation, storiform fibrosis, obliterative phlebitis, and (in type 1) increased IgG4-positive plasma cells; absence of unequivocal malignant glands favors AIP. Correlate with imaging/serology and adequate core tissue.",
      ],
      [
        "Cancerization of ducts (COD) vs. high-grade PanIN",
        "COD is favored by immediately adjacent invasive carcinoma with matching cytology and abrupt transition to non-dysplastic duct epithelium; PanIN is a separate intraepithelial precursor without adjacent invasive carcinoma.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar architecture/zymogen granules and trypsin, chymotrypsin, or BCL10 positivity support acinar differentiation.",
      ],
      [
        "PanNET",
        "Monotonous organoid/trabecular cells with synaptophysin, chromogranin, and INSM1 positivity; PDAC shows infiltrative desmoplastic glands.",
      ],
      [
        "Metastatic or adjacent-organ adenocarcinoma",
        "No IHC marker reliably separates PDAC from bile duct/duodenal adenocarcinoma; integrate anatomic epicenter, precursor lesions, imaging, and clinical history.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Acinar cell carcinoma",
    group: "Malignant",
    behavior: "Malignant exocrine carcinoma",
    site: "Adults; often large tumors; may arise anywhere in pancreas.",
    clinical: [
      "Typically presents with abdominal pain, weight loss, or mass; lipase hypersecretion syndrome occurs in a minority.",
    ],
    criteria: [
      "Malignant epithelial neoplasm with acinar differentiation.",
      "Demonstrate pancreatic enzyme expression (trypsin, chymotrypsin, BCL10) in tumor cells.",
      "Exclude neuroendocrine and mixed acinar-neuroendocrine neoplasms.",
    ],
    morphology: [
      "Acinar, solid, trabecular, or glandular growth with granular eosinophilic cytoplasm.",
      "Apical zymogen granules and prominent nucleoli may be present.",
      "Intraductal growth can mimic ITPN; enzymatic crystals may be seen.",
    ],
    ihc: [
      "Trypsin, chymotrypsin, and BCL10 support acinar differentiation.",
      "Neuroendocrine markers may be focally expressed; interpret in context.",
    ],
    molecular: [
      "APC/β-catenin pathway alterations and DNA-repair gene alterations occur in subsets; molecular testing is not required for morphologic diagnosis.",
    ],
    differential: [
      [
        "ITPN",
        "ITPN lacks acinar enzyme expression and typically shows cribriform intraductal growth with minimal mucin.",
      ],
      [
        "PanNET",
        "PanNET expresses synaptophysin/chromogranin/INSM1 and lacks convincing acinar enzyme phenotype.",
      ],
      [
        "Metastatic renal cell carcinoma",
        "Clinical history and renal-lineage markers are useful in clear-cell tumors.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Pancreatoblastoma",
    group: "Malignant",
    behavior: "Malignant; predominantly pediatric",
    site: "Usually children, especially first decade; pancreatic head common.",
    clinical: [
      "Most common malignant pancreatic neoplasm in young children; may present with abdominal mass, pain, or weight loss.",
      "Can occur in adults but is rare.",
    ],
    criteria: [
      "Distinctive acinar-type differentiation with squamoid nests/bodies.",
      "Recognize mixed acinar, trabecular, and solid patterns.",
      "Use β-catenin and acinar markers in the appropriate morphologic context.",
    ],
    morphology: [
      "Lobulated tumor with acinar, trabecular, and solid growth patterns.",
      "Squamoid corpuscles are characteristic and may be focal.",
      "Tumor cells have granular eosinophilic cytoplasm and acinar differentiation.",
      "Necrosis and mitotic activity may be present.",
    ],
    ihc: [
      "Trypsin, chymotrypsin, and BCL10 highlight acinar differentiation.",
      "Nuclear β-catenin is common in squamoid corpuscles and may be present in tumor cells.",
    ],
    molecular: [
      "CTNNB1/APC pathway alterations occur; consider germline APC/FAP association in appropriate clinical setting.",
    ],
    differential: [
      [
        "Acinar cell carcinoma",
        "Pancreatoblastoma has characteristic squamoid corpuscles and usually occurs in children.",
      ],
      [
        "Solid pseudopapillary neoplasm",
        "SPN typically occurs in young women and shows pseudopapillary architecture with nuclear β-catenin/LEF1.",
      ],
      [
        "PanNET",
        "Neuroendocrine markers are not the defining phenotype; acinar markers support pancreatoblastoma.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
  {
    name: "Solid pseudopapillary neoplasm (SPN)",
    group: "Malignant",
    behavior:
      "Low-grade malignant potential; usually indolent but can metastasize",
    site: "Predominantly young women; often body/tail but can occur anywhere.",
    clinical: [
      "Often presents as a large, well-circumscribed mass with abdominal pain or incidental discovery.",
      "Female predominance is striking; commonly occurs in young adults.",
    ],
    criteria: [
      "Solid and pseudopapillary architecture with discohesive cells around delicate fibrovascular cores.",
      "Nuclear β-catenin and LEF1 support diagnosis.",
      "Exclude PanNET and acinar cell carcinoma with lineage markers.",
    ],
    morphology: [
      "Well-circumscribed solid-cystic tumor with degenerative change, hemorrhage, and pseudocystic spaces.",
      "Discohesive uniform cells surround delicate fibrovascular cores, creating pseudopapillae.",
      "Cells have grooved nuclei and eosinophilic-to-clear cytoplasm; hyaline globules may occur.",
      "Foamy macrophages and cholesterol clefts are common.",
    ],
    ihc: [
      "Nuclear β-catenin and LEF1 are commonly positive.",
      "CD10, progesterone receptor, and vimentin are often expressed.",
      "Synaptophysin may be focal; chromogranin is usually negative.",
      "Acinar markers are negative.",
    ],
    molecular: [
      "CTNNB1 activating mutations with Wnt/β-catenin pathway activation are characteristic.",
    ],
    differential: [
      [
        "PanNET",
        "PanNET shows diffuse neuroendocrine marker expression and lacks the characteristic nuclear β-catenin/LEF1 profile.",
      ],
      [
        "Acinar cell carcinoma",
        "Acinar enzyme markers are positive in acinar carcinoma and negative in SPN.",
      ],
      [
        "Pancreatoblastoma",
        "Usually pediatric with squamoid corpuscles and acinar differentiation.",
      ],
    ],
    pitfalls: [
      "Correlate morphology with imaging and clinical findings; sample adequately to exclude focal invasion.",
    ],
  },
];
const cats = ["All", "Benign / precursor", "Malignant"];
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
          {v}
        </li>
      ))}
    </ul>
  );
}
export default function PancreaticLesionsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Pancreatic ductal adenocarcinoma (PDAC)",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.site,
            x.behavior,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI & Hepatopancreatobiliary / Pancreatic Lesions
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Pancreatic Lesions
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference covering benign
                epithelial neoplasms and precursors, invasive carcinomas,
                targeted immunohistochemistry, and practical differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the growth pattern and prove invasion.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For PDAC, fibrosis and atypical ducts alone are insufficient.
                Haphazard infiltrative glands, desmoplasia, perineural invasion,
                and vascular invasion are key findings.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Benign epithelial tumors and precursors: classification at a glance">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            The WHO classification emphasizes direction of differentiation and
            gross configuration. This table summarizes the defining
            architecture, mucin phenotype, and molecular clues.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-3">Entity</th>
                  <th className="py-3 pr-3">Configuration / site</th>
                  <th className="py-3 pr-3">Defining histology</th>
                  <th className="py-3 pr-3">Key IHC</th>
                  <th className="py-3">Molecular clue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-3 font-semibold">
                    Simple mucinous cyst
                  </td>
                  <td className="py-3 pr-3">
                    Solitary cyst &gt;10 mm; often body/tail
                  </td>
                  <td className="py-3 pr-3">
                    Flat gastric-type mucinous lining; no ovarian-type stroma
                  </td>
                  <td className="py-3 pr-3">CK7, MUC5AC/MUC6</td>
                  <td className="py-3">KRAS in cyst fluid; nonspecific</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">Serous neoplasm</td>
                  <td className="py-3 pr-3">
                    Microcystic, macrocystic, or solid
                  </td>
                  <td className="py-3 pr-3">
                    Bland clear glycogen-rich cuboidal cells
                  </td>
                  <td className="py-3 pr-3">
                    Inhibin, GLUT1, MUC6; PAS+/PAS-D−
                  </td>
                  <td className="py-3">VHL / chromosome 3p loss</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">PanIN</td>
                  <td className="py-3 pr-3">
                    Microscopic ductal lesion (&lt;5 mm)
                  </td>
                  <td className="py-3 pr-3">
                    Flat or micropapillary mucinous dysplasia
                  </td>
                  <td className="py-3 pr-3">
                    Ductal markers are supportive only
                  </td>
                  <td className="py-3">KRAS; later TP53/CDKN2A/SMAD4</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">IPMN</td>
                  <td className="py-3 pr-3">
                    Grossly visible intraductal lesion
                  </td>
                  <td className="py-3 pr-3">
                    Papillary mucinous epithelium; subtype-specific
                  </td>
                  <td className="py-3 pr-3">
                    MUC5AC; MUC2/CDX2 intestinal; MUC1 pancreatobiliary
                  </td>
                  <td className="py-3">GNAS, KRAS, RNF43</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">IOPN</td>
                  <td className="py-3 pr-3">
                    Dilated duct; often solid-cystic
                  </td>
                  <td className="py-3 pr-3">
                    Complex papillae with oncocytic cells
                  </td>
                  <td className="py-3 pr-3">
                    MUC1, MUC5AC, MUC6; HepPar1 may be positive
                  </td>
                  <td className="py-3">PRKACA / PRKACB fusion</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">ITPN</td>
                  <td className="py-3 pr-3">Solid intraductal nodules</td>
                  <td className="py-3 pr-3">
                    Back-to-back tubules/cribriform; little or no mucin
                  </td>
                  <td className="py-3 pr-3">MUC1/MUC6; MUC5AC absent/focal</td>
                  <td className="py-3">BRAF, FGFR2, NRG1, RET fusions</td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">MCN</td>
                  <td className="py-3 pr-3">
                    Multilocular cyst; body/tail; almost all women
                  </td>
                  <td className="py-3 pr-3">
                    Mucinous lining with ovarian-type stroma; no duct
                    communication
                  </td>
                  <td className="py-3 pr-3">
                    Stromal PR/ER; epithelial MUC5AC
                  </td>
                  <td className="py-3">
                    KRAS, RNF43; TP53 in advanced lesions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Diagnostic GPS: classify before ancillary testing">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Define configuration",
                "Solid mass, true cyst, or ductal dilatation? Does it communicate with the pancreatic duct?",
              ],
              [
                "Identify differentiation",
                "Ductal/mucinous, serous/glycogen-rich, oncocytic, acinar, neuroendocrine, or solid pseudopapillary.",
              ],
              [
                "Establish grade",
                "For PanIN, IPMN, and MCN, report the highest grade; high-grade dysplasia is not invasion.",
              ],
              [
                "Prove invasion",
                "Seek destructive infiltrative glands, desmoplasia, perineural or vascular invasion, or extension beyond normal duct anatomy.",
              ],
              [
                "Use focused tests",
                "Choose IHC/molecular assays to resolve a defined differential; no single marker distinguishes PDAC from reactive ducts.",
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
                Clinical profile and diagnostic criteria
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, site, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. SMAD4, PRKACA, ovarian-type stroma..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
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
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
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
                        <Bullets items={p.morphology} />
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
                              {p.differential.map((d, j) => (
                                <tr key={j}>
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
        <Panel title="PDAC versus chronic pancreatitis: high-stakes morphologic comparison">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            This distinction is primarily morphologic. Fibrosis, duct
            distortion, and reactive atypia occur in chronic pancreatitis and
            are not sufficient for carcinoma. Seek destructive invasion and
            cytologic atypia in the correct architectural context.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-3">Feature</th>
                  <th className="py-3 pr-3">PDAC</th>
                  <th className="py-3">Chronic / obstructive pancreatitis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Gland distribution",
                    "Haphazard, irregular glands infiltrate parenchyma and fat; glands may be isolated or adjacent to muscular vessels.",
                    "Lobular/acinar organization is generally preserved; distorted ducts follow native anatomy.",
                  ],
                  [
                    "Stroma",
                    "Desmoplastic, hypovascular collagen around infiltrating glands.",
                    "Fibrosis may be extensive but lacks convincing tumor-associated desmoplasia around destructive atypical glands.",
                  ],
                  [
                    "Cytology",
                    "Nuclear enlargement, hyperchromasia, irregular membranes, loss of polarity, and anisonucleosis; 4:1 nuclear size variation within a gland supports PDAC.",
                    "Small, round, uniform, polarized nuclei; no significant anisonucleosis or hyperchromasia.",
                  ],
                  [
                    "Perineural invasion",
                    "Common and highly tumor-specific in the appropriate context.",
                    "Benign glandular inclusions in nerves are exceedingly rare but can occur in longstanding chronic pancreatitis.",
                  ],
                  [
                    "Vascular invasion",
                    "Lymphatic and venous invasion are common; tumor may replace endothelium and line vessel walls.",
                    "Absent.",
                  ],
                  [
                    "Ductal changes",
                    "Cancerization of ducts may mimic high-grade PanIN; adjacent invasive carcinoma and abrupt transition are clues.",
                    "Reactive atypia may occur, but orderly epithelium with preserved polarity is typical.",
                  ],
                  [
                    "Background pancreas",
                    "Obstruction may cause upstream acinar atrophy, fibrosis, and islet aggregation.",
                    "Chronic inflammation, acinar loss, ductal distortion, protein plugs/calculi, and fibrosis may be diffuse.",
                  ],
                  [
                    "IHC",
                    "CK7/CK19 and mucin markers are usually positive; SMAD4 loss and aberrant p53 support carcinoma in subsets.",
                    "Ductal markers may also be positive; retained SMAD4 does not exclude PDAC; no IHC marker alone resolves the differential.",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-3 align-top font-semibold">
                      {r[0]}
                    </td>
                    <td className="py-3 pr-3 leading-6">{r[1]}</td>
                    <td className="py-3 leading-6 text-slate-600">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-4">
              <h4 className="mb-2 font-bold text-teal-950">
                Features strongly favoring PDAC
              </h4>
              <Bullets
                items={[
                  "Unequivocal perineural invasion by atypical glands.",
                  "Venous or lymphatic invasion.",
                  "Haphazard glands in desmoplastic stroma, especially in peripancreatic fat or adjacent to muscular vessels.",
                  "Marked nuclear atypia with loss of polarity and irregular nuclear membranes.",
                  "Focal infiltrative mass with duct cutoff/obstruction on imaging.",
                ]}
              />
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h4 className="mb-2 font-bold text-amber-950">
                Features favoring chronic / autoimmune pancreatitis
              </h4>
              <Bullets
                items={[
                  "Lobulocentric chronic inflammation and acinar loss with preserved native architecture.",
                  "Reactive ductal epithelium with small, uniform, polarized nuclei.",
                  "Type 1 autoimmune pancreatitis: lymphoplasmacytic infiltrate, storiform fibrosis, obliterative phlebitis, and increased IgG4-positive plasma cells.",
                  "No unequivocal destructive, perineural, or vascular invasion.",
                ]}
              />
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            IgG4-positive plasma cells and SMAD4/p53 immunostains are
            supportive, not stand-alone tests. A negative or limited EUS-FNA
            does not exclude PDAC when imaging suspicion remains high; core
            tissue and clinicoradiologic correlation may be necessary.
          </p>
        </Panel>
        <Panel title="PDAC: practical approach to a limited biopsy / EUS-guided sample">
          <Bullets
            items={[
              "Evaluate architecture before isolated cytology: irregular cell spacing, 4:1 anisonucleosis, parachromatin clearing, irregular nuclear membranes, and lacy/vacuolated cytoplasm support well-differentiated adenocarcinoma.",
              "Look for atypical epithelium wrapping around desmoplastic stroma, cribriform architecture, long atypical epithelial strips, and loss of polarity.",
              "Reactive ductal cells in pancreatitis usually retain small, round, polarized nuclei and relatively uniform spacing.",
              "If autoimmune pancreatitis is considered, assess lymphoplasmacytic inflammation, storiform fibrosis, obliterative phlebitis, and IgG4 immunostaining.",
              "Use focused markers to exclude acinar and neuroendocrine neoplasms; CK7/CK19 positivity alone does not prove PDAC.",
              "If findings are suspicious but not definitive, communicate the limitation and recommend radiologic correlation or repeat core sampling rather than overcalling reactive atypia.",
            ]}
          />
        </Panel>
        <Panel title="Sampling and reporting checklist">
          <Bullets
            items={[
              "For cystic lesions, document duct communication, locularity, mural nodules, solid areas, and presence or absence of ovarian-type stroma.",
              "For IPMN, IOPN, ITPN, and MCN, sample mural nodules, thickened walls/septa, and all suspicious solid areas to detect focal invasion.",
              "For PDAC resections, map tumor size/location, grade, treatment effect, perineural and lymphovascular invasion, margins (including uncinate/SMA and posterior), lymph nodes, and adjacent organ involvement.",
              "Distinguish high-grade dysplasia from invasive carcinoma and diagnose each component separately.",
              "For limited biopsies, state when invasion cannot be assessed because representative stroma or architecture is lacking.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based primarily on the
          supplied WHO pancreatic tumor excerpt. Ancillary findings are
          supportive and must be interpreted with morphology, sampling, and
          clinical/radiologic correlation.
        </footer>
      </div>
    </main>
  );
}
