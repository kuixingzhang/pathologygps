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
    name: "Fundic Gland Polyp",
    group: "Benign",
    behavior: "Benign; dysplasia is uncommon",
    site: "Oxyntic mucosa of the gastric body and fundus.",
    clinical: [
      "Usually detected incidentally in adults in their fifth to sixth decades; a female predominance is reported.",
      "Usually asymptomatic; multiple polyps in a young patient should prompt consideration of a polyposis syndrome.",
      "Sporadic and syndromic forms occur; associations include FAP, GAPPS, and MUTYH-associated polyposis.",
    ],
    criteria: [
      "Disordered expansion of the deeper epithelial compartment of oxyntic mucosa.",
      "Dilatation of one or more oxyntic glands.",
      "Parietal cell hyperplasia.",
    ],
    morphology: [
      "Architecturally disordered oxyntic glands with glandular buds and irregular, tortuous profiles.",
      "Oxyntic gland cysts and shortened foveolae are characteristic.",
      "PPI-associated lesions may show cystic glandular expansion, foveolar cell proliferation, and parietal cell protrusion/hyperplasia.",
      "GAPPS-associated lesions may show aberrant hyperproliferative glands, inverted foveolar hyperplasia, and hypermaturation.",
      "Dysplasia is uncommon in sporadic lesions and is usually low-grade.",
    ],
    ihc: [
      "Routine immunohistochemistry is not recommended.",
      "Nuclear β-catenin staining is uncommon and does not reliably distinguish sporadic from FAP-associated lesions.",
    ],
    molecular: [
      "Sporadic lesions commonly harbor CTNNB1 mutations and generally lack APC mutations.",
      "FAP-associated lesions show biallelic APC alterations with wild-type CTNNB1.",
      "Sporadic fundic gland polyps with dysplasia may acquire APC mutations.",
    ],
    differential: [
      [
        "Gastric hyperplastic polyp",
        "Shows elongated, tortuous foveolae in an edematous, inflamed lamina propria rather than disordered cystic oxyntic glands.",
      ],
      [
        "Gastric adenoma/dysplasia",
        "Shows unequivocal cytologic and architectural neoplasia rather than the characteristic oxyntic gland expansion.",
      ],
      [
        "Syndromic fundic gland polyposis",
        "Histology may overlap with sporadic lesions; multiplicity, age, family history, and clinical context are important.",
      ],
    ],
    pitfalls: [
      "Erosive/regenerative atypia should not be overcalled as dysplasia; an abrupt transition from atypical to adjacent normal epithelium supports dysplasia.",
      "Dysplasia and carcinoma are exceptionally uncommon, even in syndromic lesions.",
    ],
  },
  {
    name: "Gastric Hyperplastic Polyp",
    group: "Benign",
    behavior: "Benign; dysplasia or carcinoma may occur focally",
    site: "Usually antrum in H. pylori-associated gastritis or chemical gastropathy; body/fundus in autoimmune gastritis.",
    clinical: [
      "Typically occurs in the sixth to seventh decades (median age 66 years); no sex predilection is established.",
      "Usually asymptomatic and may be multiple.",
      "Surface erosion may cause bleeding and iron-deficiency anemia; large pyloric-channel lesions may rarely cause outlet obstruction.",
    ],
    criteria: [
      "Polyp composed predominantly of elongated, tortuous, or branching foveolae lined by foveolar epithelium.",
      "Expanded, edematous, and inflamed lamina propria.",
      "Cystically dilated glands and surface erosion/ulceration are supportive.",
    ],
    morphology: [
      "Foveolar compartment is disproportionately expanded relative to other mucosal elements.",
      "Foveolae are elongated, distorted, branching, or dilated.",
      "Lamina propria is commonly edematous, inflamed, and vascular.",
      "Globoid mucinous cells may occur and are not dysplastic.",
      "Small, haphazard smooth muscle bundles may be present; larger antral lesions may contain thick-walled vessels and smooth muscle extending from the muscularis mucosae.",
      "Dysplasia is reported in 1–20% and carcinoma in approximately 2%, particularly in polyps larger than 10 mm.",
    ],
    ihc: ["No routine immunohistochemical panel is required for diagnosis."],
    molecular: [
      "TP53 mutations and p53 overexpression have been associated with dysplastic/malignant foci; molecular testing is not routinely indicated.",
    ],
    differential: [
      [
        "Fundic gland polyp",
        "Shows disordered, cystically dilated oxyntic glands with parietal cell hyperplasia.",
      ],
      [
        "Polypoid foveolar hyperplasia",
        "Usually smaller, with elongated pits in minimally edematous lamina propria.",
      ],
      [
        "Gastritis cystica profunda",
        "Often arises in a gastric remnant after Billroth II surgery; cystically dilated glands extend into the submucosa.",
      ],
      [
        "Portal hypertensive polyp",
        "Often multiple in the body/fundus, with prominent mucosal vascularity, dilated capillaries, and sometimes organizing thrombi.",
      ],
      [
        "Gastric adenoma/dysplasia",
        "Shows unequivocal neoplastic cytologic and architectural changes.",
      ],
    ],
    pitfalls: [
      "Globoid mucinous cells in hyperplastic foveolae can mimic signet-ring cells but are not, by themselves, evidence of carcinoma.",
      "Carefully examine larger lesions, especially those exceeding 10 mm, for focal dysplasia or carcinoma.",
      "Consider mucosal prolapse in large distal antral polyps with smooth muscle bundles and thick-walled vessels.",
    ],
  },
  {
    name: "Gastric Dysplasia",
    group: "Precursor",
    behavior: "Non-invasive neoplasia; low-grade or high-grade",
    site: "Incisura/antrum in atrophic, intestinalized mucosa; foveolar-type lesions in H. pylori-naïve patients favor body/fundus.",
    clinical: [
      "Usually asymptomatic; large or ulcerated lesions may cause bleeding, anemia, or dyspepsia.",
      "Most intestinal-type cases occur in patients older than 60 years, with a male predominance.",
      "Endoscopy may show a flat, depressed, or elevated/polypoid lesion with surface color change, erosion, or ulceration.",
    ],
    criteria: [
      "Unequivocal intraepithelial neoplasia with cytologic and architectural atypia.",
      "No evidence of stromal invasion.",
      "Low-grade or high-grade dysplasia, arising in intestinalized glands or showing a distinctive apical neutral mucin cap in foveolar-type lesions.",
    ],
    morphology: [
      "Diagnosis requires a variable combination of cytologic atypia and architectural complexity.",
      "Intestinal-type dysplasia shows intestinal differentiation; foveolar-type dysplasia shows gastric foveolar differentiation with an apical mucin cap.",
      "Recognized patterns include intestinal, foveolar, serrated, and crypt dysplasia.",
      "High-grade dysplasia shows more pronounced architectural and cytologic atypia than low-grade dysplasia.",
      "Irregular fused glands, glandular anastomoses, abortive glands, and discohesive cells raise concern for well-differentiated intramucosal adenocarcinoma.",
    ],
    ihc: [
      "No immunohistochemical marker is validated for routine diagnosis or grading.",
      "Mucin phenotype markers may help characterize differentiation in selected cases but are not required.",
    ],
    molecular: [
      "APC mutations are frequent in low- and high-grade dysplasia.",
      "TP53 alterations and p53 overexpression are more frequent in high-grade than low-grade dysplasia.",
      "Molecular alterations vary by phenotype; no marker is validated for routine clinical diagnosis.",
    ],
    differential: [
      [
        "Reactive/regenerative atypia",
        "Usually shows limited cytoarchitectural change, surface/neck predominance, preserved polarity, and gradual transition to normal mucosa.",
      ],
      [
        "Indefinite for dysplasia",
        "A provisional category used when inflammation, small tissue volume, or poor orientation prevents reliable distinction from reactive change.",
      ],
      [
        "Intramucosal adenocarcinoma",
        "Shows invasion into lamina propria, often with irregular fused/anastomosing glands, abortive glands, or discohesive cells.",
      ],
    ],
    pitfalls: [
      "Forceps biopsies frequently underestimate grade; endoscopic resection may reveal high-grade dysplasia or carcinoma.",
      "Invasion into lamina propria changes the diagnosis from intraepithelial neoplasia to intramucosal carcinoma (pT1a).",
      "High-grade dysplasia is staged as pTis.",
    ],
  },
  {
    name: "Gastric Pyloric Gland Adenoma",
    group: "Precursor",
    behavior:
      "Non-invasive neoplasm; may contain high-grade dysplasia or carcinoma",
    site: "Usually gastric body/fundus, often in a background of atrophic gastritis or pyloric gland metaplasia.",
    clinical: [
      "Usually detected incidentally in older adults; mean age approximately 66 years, with similar frequency in men and women.",
      "Many sporadic cases occur in elderly women with autoimmune gastritis.",
      "Syndromic cases occur at younger ages in patients with polyposis syndromes.",
    ],
    criteria: [
      "Polypoid proliferation of closely packed pyloric/mucous neck-type glands.",
      "Glands are lined by uniform cuboidal or low columnar cells with foamy, ground-glass cytoplasm.",
      "Neoplastic cells lack a well-defined apical mucin cap.",
    ],
    morphology: [
      "Closely packed glands are composed predominantly of pyloric/mucous neck cell-type epithelium.",
      "Cells are cuboidal or low columnar with clear or lightly eosinophilic, ground-glass cytoplasm.",
      "Round to ovoid nuclei are basally located with inconspicuous nucleoli.",
      "Large lesions may contain dilated glands; chief- or parietal-type cells may be admixed.",
      "High-grade lesions show crowded hyperchromatic nuclei, loss of polarity, and increased proliferation.",
      "High-grade dysplasia/intramucosal carcinoma may occur; submucosal invasion is uncommon.",
    ],
    ihc: [
      "MUC6 is consistently expressed by the glandular component.",
      "Pepsinogen I and MIST1 are partially expressed.",
      "MUC5AC is mainly expressed in surface cells and may extend variably into the lesion.",
      "Focal MUC2/CDX2 or nuclear β-catenin may occur; mucin immunostains are not required for routine diagnosis.",
    ],
    molecular: [
      "GNAS, KRAS, and APC mutations have been identified in sporadic and FAP-associated lesions.",
    ],
    differential: [
      [
        "Foveolar-type dysplasia/adenoma",
        "Shows a distinctive apical neutral mucin cap; pyloric gland adenoma lacks a well-defined apical mucin cap.",
      ],
      [
        "Oxyntic gland adenoma",
        "Shows chief-cell and/or parietal-cell differentiation rather than predominantly pyloric/mucous neck differentiation.",
      ],
      [
        "Gastric hyperplastic polyp",
        "Shows elongated foveolae in edematous, inflamed stroma without a uniform dysplastic pyloric gland proliferation.",
      ],
    ],
    pitfalls: [
      "Pronounced surface foveolar differentiation can make distinction from foveolar-type dysplasia difficult.",
      "Look for high-grade dysplasia or intramucosal carcinoma, particularly in larger lesions and in autoimmune gastritis.",
    ],
  },
  {
    name: "Oxyntic Gland Adenoma",
    group: "Precursor",
    behavior:
      "Usually indolent; submucosal invasion is classified as gastric adenocarcinoma of fundic gland type",
    site: "Predominantly non-atrophic oxyntic mucosa of the gastric body/fundus.",
    clinical: [
      "Usually occurs at 60–70 years, with a slight female predominance.",
      "Often detected during endoscopic screening in Japan; patients elsewhere may present with reflux symptoms.",
      "Endoscopy typically shows a small nodule, subsurface lesion, or flat whitish area.",
    ],
    criteria: [
      "Small intramucosal neoplasm composed of cells with mild cytologic atypia.",
      "Predominant chief-cell differentiation, with variable parietal-cell and mucous neck-cell differentiation.",
      "A pushing interface and prolapse-type glandular misplacement do not, by themselves, establish submucosal invasion.",
    ],
    morphology: [
      "Tightly packed glands with variable anastomosis, branching, dilation, and occasional cribriforming.",
      "Chief-cell-predominant lesions contain monotonous columnar cells with basophilic cytoplasm.",
      "Mixed-cell lesions contain chief cells and scattered parietal cells, often in the superficial tumor.",
      "Cytologic atypia is usually mild; mitoses are rare and Ki-67 is typically below 5%.",
      "The lesion is usually deep in the mucosa and covered by normal foveolar epithelium.",
      "A pushing interface and prolapse-type misplacement are characteristic and should not be mistaken for true invasion.",
    ],
    ihc: [
      "MUC6 is diffusely positive.",
      "Pepsinogen I highlights chief-cell differentiation.",
      "H+/K+ ATPase highlights parietal-cell differentiation.",
      "Diffuse strong cyclin D1 can help distinguish OGA from normal oxyntic glands in biopsy specimens.",
      "Synaptophysin may be positive in a subset, but chromogranin A is negative.",
    ],
    molecular: [
      "GNAS mutations are recurrent; available molecular data remain limited.",
      "TP53 mutations have not been identified in the cited series.",
    ],
    differential: [
      [
        "Gastric adenocarcinoma of fundic gland type",
        "Requires convincing submucosal invasion with atypical cellular differentiation; prolapse-like misplacement alone is insufficient.",
      ],
      [
        "Pyloric gland adenoma",
        "Shows MUC6-positive pyloric/mucous neck-type glands with ground-glass cytoplasm rather than chief-cell-predominant oxyntic differentiation.",
      ],
      [
        "Gastric neuroendocrine tumor",
        "May share clustered/solid glandular architecture; integrate morphology and neuroendocrine markers, noting chromogranin A is negative in OGA.",
      ],
    ],
    pitfalls: [
      "Do not interpret prolapse-type misplacement as submucosal invasion.",
      "In small biopsies, OGA may resemble normal oxyntic glands; cyclin D1 can be helpful.",
      "OGA is generally slow-growing and follows a benign course.",
    ],
  },
  {
    name: "Gastric Adenocarcinoma",
    group: "Malignant",
    behavior:
      "Malignant; behavior and prognosis depend strongly on stage and histologic subtype",
    site: "Occurs throughout the stomach; distal disease predominates in high-incidence regions, whereas proximal/cardia involvement is more common in lower-incidence regions.",
    clinical: [
      "Usually affects men aged 60–80 years.",
      "Early-stage disease is often asymptomatic; advanced disease may cause dyspepsia, upper abdominal pain, fatigue, weight loss, hematemesis, or melena.",
      "Metastatic presentations may include ovarian involvement (Krukenberg tumor) or, rarely, pulmonary lymphangitic carcinomatosis.",
    ],
    criteria: [
      "Malignant epithelial neoplasm showing glandular differentiation.",
      "Invasion into the lamina propria or deeper layers of the gastric wall.",
      "Classify the predominant histologic subtype and report distinct components in mixed tumors.",
    ],
    morphology: [
      "Tubular adenocarcinoma: branching, dilated, slit-like, or acinar glands lined by neoplastic columnar or cuboidal cells.",
      "Papillary adenocarcinoma: elongated finger-like papillae with fibrovascular cores, lined by columnar or cuboidal tumor cells.",
      "Poorly cohesive carcinoma: individual cells or small clusters without gland formation; signet-ring cells contain abundant intracytoplasmic mucin and eccentric nuclei.",
      "Mucinous adenocarcinoma: extracellular mucin comprises more than 50% of the tumor area and contains malignant glands or tumor cells.",
      "Mixed adenocarcinoma: two or more distinct histologic components, commonly glandular and poorly cohesive components.",
      "Carcinoma with lymphoid stroma: irregular sheets, trabeculae, poorly formed glands, or syncytia of polygonal cells with a prominent lymphocytic infiltrate.",
      "Hepatoid adenocarcinoma: large polygonal eosinophilic hepatocyte-like cells; bile or PAS-D-resistant hyaline globules may be present.",
      "Micropapillary adenocarcinoma: small tumor-cell clusters without fibrovascular cores floating in clear spaces.",
      "Gastric adenocarcinoma of fundic gland type shows oxyntic gland differentiation and requires true submucosal invasion.",
      "Sarcomatoid carcinoma contains adenocarcinoma and sarcomatoid components.",
    ],
    ihc: [
      "Mismatch repair proteins (MLH1, PMS2, MSH2, MSH6), p53, and E-cadherin may help characterize tumors and support molecular subtyping.",
      "EBER in situ hybridization identifies EBV-associated tumors, particularly carcinoma with lymphoid stroma.",
      "Hepatoid/enteroblastic differentiation may express AFP, SALL4, claudin-6, or glypican-3; SALL4 and claudin-6 can help distinguish primary gastric hepatoid carcinoma from metastatic hepatocellular carcinoma.",
      "Mucin phenotype markers may support gastric (MUC5AC/TFF1, MUC6/TFF2), intestinal (MUC2, CD10, CDX2), mixed, or null phenotype.",
      "HER2 and claudin-18.2 testing may be required for treatment selection in advanced disease; PD-L1 CPS and MMR/MSI status are also clinically relevant.",
    ],
    molecular: [
      "TCGA molecular subtypes: EBV-positive, microsatellite-unstable, genomically stable, and chromosomally unstable.",
      "ACRG subtypes include MSI, MSS/EMT, MSS/TP53-active, and MSS/TP53-inactive groups.",
      "CDH1 germline alterations are associated with hereditary diffuse gastric cancer; APC promoter 1B alterations are associated with GAPPS.",
      "Predictive biomarkers include ERBB2 (HER2), mismatch repair deficiency/MSI, PD-L1 CPS, and CLDN18.2 expression.",
      "RHOA mutations and CLDN18::ARHGAP fusions have been identified in crawling-type adenocarcinoma.",
    ],
    differential: [
      [
        "Gastric dysplasia",
        "Lacks stromal invasion; intramucosal carcinoma shows invasion into lamina propria.",
      ],
      [
        "Reactive/regenerative atypia",
        "Retains polarity and shows limited atypia with gradual transition to normal mucosa.",
      ],
      [
        "Gastric neuroendocrine carcinoma",
        "Use morphology and neuroendocrine markers in solid, poorly differentiated tumors.",
      ],
      [
        "Hepatocellular carcinoma metastatic to stomach",
        "Correlate with clinical history and use a differential-directed panel; SALL4/claudin-6 may support primary gastric hepatoid carcinoma.",
      ],
      [
        "Gastric squamous cell carcinoma",
        "Shows pure squamous differentiation without an adenocarcinoma component after thorough sampling.",
      ],
    ],
    pitfalls: [
      "Intratumoral heterogeneity is common; adequately sample the tumor to identify mixed or minor components.",
      "Biopsy may underestimate invasion or grade, particularly in depressed, poorly differentiated, or diffuse lesions.",
      "Poorly cohesive carcinoma may spread widely along the serosa beyond the grossly visible tumor.",
      "For tumors involving the esophagogastric junction, staging depends on the tumor epicenter: more than 20 mm into the proximal stomach is staged as gastric cancer.",
      "Pathologic TNM stage is the most important prognostic factor; document lymphovascular invasion and treatment response.",
    ],
  },
  {
    name: "Gastric Squamous Cell Carcinoma",
    group: "Malignant",
    behavior: "Rare malignant carcinoma; often presents at an advanced stage",
    site: "Upper stomach is most frequently involved, followed by lower and middle portions.",
    clinical: [
      "Extremely rare, accounting for approximately 0.04–0.5% of gastric cancers.",
      "Clinical presentation is similar to other gastric cancers; advanced cases often have poor outcomes.",
    ],
    criteria: [
      "Histologic evidence of squamous cell differentiation.",
      "Proof of invasion.",
      "Exclusion of metastasis from another organ and distal extension from esophageal squamous cell carcinoma.",
    ],
    morphology: [
      "Shows uniform squamous differentiation with keratinization and/or intercellular bridges.",
      "Thorough sampling must show no adenocarcinoma or other histologic component.",
      "Verrucous subtype shows very well-differentiated keratinizing squamous cells with minimal atypia, coarse surface papillary projections, and bulbous downgrowth.",
    ],
    ihc: [
      "Use squamous markers such as p40, p63, and high-molecular-weight keratin/CK5/6 when needed to confirm squamous differentiation.",
    ],
    molecular: [
      "Molecular data are limited; no defining molecular alteration is established in the supplied source.",
    ],
    differential: [
      [
        "Esophageal squamous cell carcinoma with distal extension",
        "Correlate with endoscopy and gross tumor epicenter to exclude direct extension.",
      ],
      [
        "Metastatic squamous cell carcinoma",
        "Exclude a primary tumor in another organ clinically and radiologically.",
      ],
      [
        "Gastric adenosquamous carcinoma",
        "Requires a distinct adenocarcinoma component comprising at least 25% of the tumor.",
      ],
    ],
    pitfalls: [
      "Exhaustive sampling is crucial to exclude an adenocarcinoma component.",
      "Do not diagnose primary gastric SCC without excluding metastasis and esophageal extension.",
    ],
  },
  {
    name: "Gastric Adenosquamous Carcinoma",
    group: "Malignant",
    behavior: "Rare, aggressive malignant carcinoma",
    site: "May occur in any region of the stomach; exclude distal extension from lower esophageal adenosquamous carcinoma.",
    clinical: [
      "Usually affects men, with a mean age of approximately 62 years.",
      "Often presents as a large mass (mean size approximately 60 mm).",
      "Accounts for less than 0.4% of gastric cancers.",
    ],
    criteria: [
      "Carcinoma containing distinct adenocarcinoma and squamous cell carcinoma components.",
      "Each component must account for at least 25% of the tumor.",
    ],
    morphology: [
      "Distinct gland-forming adenocarcinoma and squamous cell carcinoma components are present in variable proportions.",
      "The squamous component resembles conventional squamous cell carcinoma.",
      "Adenoid or microcystic change within an otherwise pure squamous carcinoma is insufficient for this diagnosis.",
    ],
    ihc: [
      "Mucin stains can highlight the adenocarcinoma component.",
      "p40/p63 and high-molecular-weight keratin (34βE12) or CK5/6 can confirm and help quantify the squamous component.",
    ],
    molecular: [
      "Molecular data are limited; no defining molecular alteration is established in the supplied source.",
    ],
    differential: [
      [
        "Pure gastric squamous cell carcinoma",
        "Lacks a distinct glandular component meeting the 25% threshold.",
      ],
      [
        "Gastric adenocarcinoma with focal squamous metaplasia",
        "Requires a substantial, distinct squamous carcinoma component (at least 25%).",
      ],
      [
        "Esophageal adenosquamous carcinoma with distal extension",
        "Correlate with gross/endoscopic epicenter and extent.",
      ],
    ],
    pitfalls: [
      "Estimate and report the proportion of each component.",
      "Lymph node metastases may contain the adenocarcinoma component, squamous component, or both.",
    ],
  },
  {
    name: "Gastric Undifferentiated Carcinoma",
    group: "Malignant",
    behavior: "Highly aggressive malignant carcinoma",
    site: "No specific predilection; diffuse involvement of more than one gastric region is common.",
    clinical: [
      "Usually affects men, with a mean age of approximately 60 years.",
      "Typically presents as a large ulcerated, extensively necrotic mass with synchronous regional metastases.",
      "Distant metastases may develop rapidly; many patients die within one year of diagnosis.",
    ],
    criteria: [
      "Malignant epithelial tumor composed of cells without recognizable cytologic or architectural differentiation.",
      "Exclude poorly differentiated adenocarcinoma, lymphoma, melanoma, germ cell tumor, and sarcoma.",
    ],
    morphology: [
      "Anaplastic medium-to-large polygonal cells grow in solid or discohesive sheets.",
      "Pleomorphic tumor giant cells are frequent.",
      "A rhabdoid phenotype with binucleated or multinucleated cells may predominate.",
      "Less common patterns include spindle-cell/sarcomatoid morphology and osteoclast-like giant cells; osteoclast-like cells are non-neoplastic.",
      "Extensive necrosis is common; myxoid or mucinous stroma may be present.",
      "Extensive sampling is recommended to identify a diagnostic adenocarcinoma component.",
    ],
    ihc: [
      "Pankeratin expression is variable and may be limited or absent in keratin-poor examples.",
      "EMA may help identify epithelial differentiation in keratin-poor tumors.",
      "Vimentin is consistently expressed and may show a perinuclear dot-like pattern.",
      "Loss of SWI/SNF proteins (SMARCB1/INI1, SMARCA4/BRG1, SMARCA2, or ARID1A) may define a subset.",
    ],
    molecular: [
      "Inactivation/loss of SWI/SNF chromatin-remodeling complex components is reported, sometimes involving more than one protein.",
      "SWI/SNF loss may coexist with mismatch repair deficiency or EBV association.",
    ],
    differential: [
      [
        "Poorly differentiated/solid adenocarcinoma",
        "Extensive sampling and epithelial/glandular markers may reveal otherwise inconspicuous differentiation.",
      ],
      [
        "EBV-associated carcinoma with lymphoid stroma",
        "Shows a prominent lymphoid background and often EBER positivity.",
      ],
      [
        "Aggressive lymphoma, including anaplastic large cell lymphoma",
        "Use leukocyte and lineage-specific markers; epithelial markers may be variable in undifferentiated carcinoma.",
      ],
      ["Metastatic melanoma", "Use melanocytic markers and clinical history."],
      [
        "Epithelioid sarcoma or other sarcoma",
        "Integrate morphology, epithelial markers, and SWI/SNF protein expression.",
      ],
    ],
    pitfalls: [
      "Do not diagnose undifferentiated carcinoma until lymphoma, melanoma, germ cell tumor, and sarcoma have been excluded.",
      "Keratin may be only focal or absent; EMA can be useful in selected cases.",
      "Loss of SWI/SNF proteins should be interpreted with morphology and the full differential diagnosis.",
    ],
  },
];

const categories = ["All", "Benign", "Precursor", "Malignant"];

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

function Bullets({ items: values }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {values.map((value, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function GastricTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Gastric Adenocarcinoma",
    "Gastric Dysplasia",
  ]);

  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (category === "All" || item.group === category) &&
          [
            item.name,
            item.group,
            item.behavior,
            item.site,
            ...item.clinical,
            ...item.criteria,
            ...item.morphology,
            ...item.ihc,
            ...item.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((entry) => entry !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Gastrointestinal Pathology / Gastric Tumors
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Gastric Tumors and Precursor Lesions
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Gastric cancerization field">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Correa cascade:</b> chronic gastritis → glandular atrophy →
                intestinal metaplasia → dysplasia → invasive adenocarcinoma.
              </p>
              <p>
                <b>Atrophy:</b> loss of native glandular units; may be
                non-metaplastic (lamina propria fibrosis) or metaplastic
                (pseudopyloric or intestinal metaplasia).
              </p>
              <p>
                <b>Risk assessment:</b> incomplete/colonic-type intestinal
                metaplasia is associated with increased gastric carcinoma risk.
                OLGA and OLGIM stages III–IV identify higher-risk mucosal
                fields.
              </p>
              <p>
                <b>Clinical context:</b> H. pylori is the major global driver of
                metaplastic atrophy and sporadic gastric carcinoma; autoimmune
                oxyntic atrophy is strongly associated with type I ECL-cell
                NETs.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield ancillary studies">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Pyloric gland adenoma",
                      "MUC6; pepsinogen I/MIST1 may be partial",
                    ],
                    [
                      "Oxyntic gland adenoma",
                      "MUC6, pepsinogen I, H+/K+ ATPase, cyclin D1",
                    ],
                    [
                      "Squamous differentiation",
                      "p40/p63, CK5/6, high-molecular-weight keratin",
                    ],
                    ["EBV-associated carcinoma", "EBER in situ hybridization"],
                    [
                      "Gastric adenocarcinoma",
                      "MMR proteins, HER2, CLDN18.2, PD-L1 CPS as clinically indicated",
                    ],
                    [
                      "Undifferentiated carcinoma",
                      "Pankeratin/EMA; SWI/SNF proteins; differential-directed lineage markers",
                    ],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 text-slate-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

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
                Search by entity, site, morphology, immunophenotype, or
                molecular alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. MUC6, signet-ring, EBER, CLDN18.2..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((entry) => (
              <button
                key={entry}
                onClick={() => setCategory(entry)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === entry
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
              >
                {entry}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((item) => {
              const isOpen = opened.includes(item.name);
              return (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(item.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {item.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {item.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{item.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse" : "View diagnostic profile"}{" "}
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={item.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={item.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={item.morphology} />
                        {item.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunophenotype
                            </h4>
                            <Bullets items={item.ihc} />
                          </>
                        )}
                        {item.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular pathology
                            </h4>
                            <Bullets items={item.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {item.differential.map((entry, index) => (
                                <tr key={index}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {entry[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {entry[1]}
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
                        <Bullets items={item.pitfalls} />
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

        <Panel title="Key distinction: precursor lesion versus invasive carcinoma">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Gastric dysplasia</th>
                  <th className="py-2 pr-3">Intramucosal adenocarcinoma</th>
                  <th className="py-2">Oxyntic gland adenoma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Invasion</td>
                  <td className="py-2 pr-3">Absent</td>
                  <td className="py-2 pr-3">Into lamina propria</td>
                  <td className="py-2">
                    Intramucosal; pushing/prolapse-like misplacement may occur
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Differentiation</td>
                  <td className="py-2 pr-3">
                    Intestinal or foveolar phenotype
                  </td>
                  <td className="py-2 pr-3">
                    Glandular differentiation with invasion
                  </td>
                  <td className="py-2">
                    Chief-cell predominant, with variable parietal/mucous neck
                    cells
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Key clue</td>
                  <td className="py-2 pr-3">
                    Cytologic and architectural neoplasia without stromal
                    invasion
                  </td>
                  <td className="py-2 pr-3">
                    Irregular invasive glands or discohesive cells in lamina
                    propria
                  </td>
                  <td className="py-2">
                    Mild atypia, low Ki-67, MUC6/pepsinogen I profile
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Document the exact gastric site and endoscopic lesion size, morphology, and relationship to the esophagogastric junction.",
              "For dysplasia, assess grade and explicitly state whether lamina propria invasion is identified; superficial biopsies may underestimate the lesion.",
              "For gastric polyps, examine the entire lesion when feasible, especially lesions larger than 10 mm or with erosion/ulceration.",
              "For suspected oxyntic gland neoplasia, distinguish true submucosal invasion from prolapse-type glandular misplacement.",
              "For adenocarcinoma, sample heterogeneous areas to identify mixed histology, poorly cohesive components, lymphoid stroma, or sarcomatoid differentiation.",
              "Report histologic subtype, grade where applicable, depth of invasion, lymphovascular invasion, margins, lymph node status, and treatment response.",
              "Perform predictive biomarker testing (HER2, MMR/MSI, PD-L1 CPS, and CLDN18.2) when clinically indicated for advanced disease.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO source excerpt. Molecular and immunohistochemical findings are
          included when diagnostically or clinically useful; supportive findings
          are not stand-alone diagnostic criteria. The page does not replace
          adequate sampling, endoscopic/radiologic correlation, or
          clinicopathologic review.
        </footer>
      </div>
    </main>
  );
}
