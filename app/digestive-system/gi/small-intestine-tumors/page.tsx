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
    name: "Non-ampullary Duodenal Adenoma",
    group: "Benign / Precursor",
    behavior: "Non-invasive epithelial neoplasm",
    site: "Duodenum outside the ampulla; intestinal-type lesions may occur throughout the small intestine, whereas pyloric gland adenomas favor the proximal duodenum.",
    clinical: [
      "Mean age approximately 62 years; slight male predominance.",
      "Usually small, solitary, and asymptomatic; larger lesions may cause obstruction.",
      "Approximately one quarter are associated with a hereditary syndrome, most often FAP.",
    ],
    criteria: [
      "Mucosal sessile or pedunculated lesion in a non-ampullary duodenal location.",
      "Closely packed, non-invasive tubular, tubulovillous, glandular, or tubulopapillary dysplastic epithelium.",
      "Classify dysplasia as low-grade or high-grade; high-grade dysplasia is staged as pTis.",
    ],
    morphology: [
      "Intestinal-type adenomas are most common and usually show tubular or tubulovillous architecture.",
      "Low-grade lesions contain tall columnar cells with elongated nuclei and inconspicuous nucleoli.",
      "High-grade dysplasia shows greater architectural complexity, nuclear stratification, and cytologic atypia.",
      "Serrated lesions include sessile serrated lesions and traditional serrated adenomas; dysplasia or associated carcinoma may occur.",
      "Pyloric gland adenomas comprise tightly packed pyloric-type glands lined by cuboidal to low-columnar cells with foamy, ground-glass cytoplasm.",
    ],
    ihc: [
      "Intestinal-type adenomas express CDX2 and MUC2; CK7/CK20 coexpression is common.",
      "Pyloric gland adenomas show extensive MUC6 expression and variable MUC5AC.",
    ],
    molecular: [],
    differential: [
      [
        "Reactive / regenerative atypia",
        "Lacks the crowded dysplastic glandular architecture and cytologic features of adenoma.",
      ],
      [
        "Ampullary adenoma",
        "Arises on the ampullary surface or within the ampullary channel; establish the precise anatomic location.",
      ],
      [
        "Invasive adenocarcinoma",
        "Requires unequivocal stromal invasion; high-grade dysplasia alone is non-invasive.",
      ],
    ],
    pitfalls: [
      "Large size, villous architecture, and high-grade dysplasia increase progression risk.",
      "In FAP, lesions may be multiple and predominantly sessile; apply the Spigelman system in the appropriate clinical setting.",
    ],
  },
  {
    name: "Ampullary Adenomatous Neoplasm",
    group: "Benign / Precursor",
    behavior: "Non-invasive; includes ampullary duodenal adenoma and IAPN",
    site: "Duodenal surface of the major papilla (ampullary duodenal adenoma) or within the intra-ampullary channel (intra-ampullary papillary-tubular neoplasm, IAPN).",
    clinical: [
      "Mean age approximately 62 years; no clear sex predilection.",
      "Often asymptomatic and incidentally detected; FAP-associated cases present younger (mean approximately 39 years).",
      "IAPN may cause biliary obstruction, jaundice, cholangitis, or occasionally pancreatitis.",
    ],
    criteria: [
      "Grossly visible intraepithelial neoplasm on the duodenal surface of the ampulla or within the ampullary channel.",
      "Dysplastic tubular, tubulovillous, villous, or papillary epithelium without invasion for a purely preinvasive diagnosis.",
      "For IAPN, the tumor epicenter and predominant bulk are within the ampullary channel.",
    ],
    morphology: [
      "Ampullary surface adenomas usually show intestinal differentiation and tubular or tubulovillous architecture.",
      "Low-grade dysplasia consists of tall columnar cells with elongated nuclei; high-grade dysplasia shows architectural complexity, stratification, and atypia.",
      "IAPN is an exophytic intrachannel neoplasm, often with mixed low- and high-grade dysplasia.",
      "IAPN may show intestinal, pancreatobiliary, or mixed differentiation; more than 80% contain both low- and high-grade areas.",
    ],
    ihc: [
      "Intestinal phenotype: CDX2 and MUC2 positive, usually MUC1 negative; CK7/CK20 coexpression is common.",
      "IAPN pancreatobiliary phenotype often expresses MUC1, MUC5AC, and MUC6; intestinal areas express CDX2 and MUC2.",
      "Phenotypic overlap is frequent; IHC supports but does not independently define the subtype.",
    ],
    molecular: [],
    differential: [
      [
        "Non-ampullary duodenal adenoma",
        "Located away from the papilla; correlate endoscopic and gross anatomy.",
      ],
      [
        "Ampullary adenocarcinoma",
        "Unequivocal stromal invasion is required; invasive carcinoma may be hidden in deeper portions of the lesion.",
      ],
      [
        "IPMN / intraductal papillary neoplasm of bile duct",
        "IAPN is centered within the ampullary channel; establish the epicenter and extent relative to ducts and duodenal surface.",
      ],
    ],
    pitfalls: [
      "Endoscopic biopsies have a high false-negative rate for invasion because carcinoma may be deep.",
      "Approximately 75% of resected IAPNs have associated invasive carcinoma; careful grossing and sampling are essential.",
    ],
  },
  {
    name: "Non-ampullary Duodenal Adenocarcinoma",
    group: "Malignant",
    behavior: "Invasive carcinoma",
    site: "Duodenum, most often the first and second portions; by definition, the ampulla is not involved.",
    clinical: [
      "Median age approximately 60 years; slight male predominance.",
      "Presentation is often delayed; abdominal pain is common, with occult bleeding in 30–40%.",
      "Intestinal obstruction occurs in approximately one third of patients; advanced disease is common at diagnosis.",
    ],
    criteria: [
      "Invasive gland-forming epithelial malignancy arising in the duodenum outside the ampulla.",
      "Demonstrate unequivocal invasion; exclude direct extension or mucosal colonization by pancreatic or ampullary carcinoma.",
      "Classify the predominant histologic pattern and assess MMR status.",
    ],
    morphology: [
      "Most tumors are tubular adenocarcinoma, but mucinous, poorly cohesive/signet-ring, medullary, adenosquamous, and undifferentiated patterns occur.",
      "Approximately 40–50% show gastric or pancreatobiliary morphology; intestinal-type tumors are less frequent.",
      "Gastric differentiation is associated with MUC5AC/MUC6; pancreatobiliary differentiation with MUC1.",
      "Intestinal-type tumors resemble colorectal adenocarcinoma and express intestinal markers; mixed morphology and immunophenotype are common.",
      "Direct extension from pancreatic or ampullary carcinoma may colonize duodenal mucosa and mimic a primary mucosal neoplasm.",
    ],
    ihc: [
      "Intestinal differentiation: CDX2 and MUC2.",
      "Gastric differentiation: MUC5AC and MUC6.",
      "Pancreatobiliary differentiation: MUC1.",
      "MMR protein IHC is required to assess MMR deficiency and possible Lynch syndrome.",
    ],
    molecular: [
      "MMR deficiency/MSI testing is clinically important for hereditary risk assessment and immunotherapy selection.",
      "ERBB2 amplification or mutation and actionable kinase fusions occur in a subset; consider comprehensive profiling in advanced disease.",
    ],
    differential: [
      [
        "Ampullary adenocarcinoma",
        "Ampullary epicenter or involvement; careful gross examination and mapping are decisive.",
      ],
      [
        "Pancreatic ductal adenocarcinoma extending into duodenum",
        "May colonize mucosa; correlate with imaging, gross epicenter, and adjacent pancreatic involvement.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Use clinical history, imaging, and site-directed immunophenotype.",
      ],
      [
        "Primary jejunoileal adenocarcinoma",
        "Establish the exact intestinal segment of origin.",
      ],
    ],
    pitfalls: [
      "Do not assign a duodenal primary solely because tumor involves or colonizes the mucosa.",
      "Sample the ampulla and adjacent pancreas/bile duct carefully when the lesion is periampullary.",
    ],
  },
  {
    name: "Ampullary Adenocarcinoma",
    group: "Malignant",
    behavior:
      "Invasive carcinoma; site of origin within ampulla affects classification and staging",
    site: "Ampulla of Vater; distinguish ampullary surface origin, IAPN-associated origin, and ampullary ductal origin.",
    clinical: [
      "Median age in the 60s; men are slightly more frequently affected.",
      "May present with jaundice, abdominal pain, weight loss, or gastrointestinal bleeding; ulcerated lesions may bleed.",
      "FAP and Lynch syndrome are relevant hereditary associations.",
    ],
    criteria: [
      "Glandular epithelial malignancy centered in the ampulla with unequivocal invasion.",
      "Document the epicenter and distinguish ampullary origin from direct extension by pancreatic or bile duct carcinoma.",
      "Report invasive carcinoma size; stage according to the anatomic site and applicable TNM system.",
    ],
    morphology: [
      "Most ampullary carcinomas are tubular adenocarcinomas.",
      "Intestinal type resembles colorectal adenocarcinoma, with tall columnar cells and pseudostratified elongated nuclei; goblet, Paneth, or neuroendocrine cells may occur.",
      "Pancreatobiliary/gastric type shows small glands separated by desmoplastic stroma, lined by cuboidal to low-columnar cells.",
      "Mixed/hybrid intestinal and pancreatobiliary features are common; classify the predominant direction when possible.",
      "Mucinous carcinoma has extracellular stromal mucin comprising more than 50% of the tumor; neoplastic glands or strips float in mucin pools.",
      "Poorly cohesive carcinoma infiltrates as single cells, small clusters, or cords, often with signet-ring cells.",
      "Medullary carcinoma shows syncytial sheets or nodules with pushing borders and prominent lymphocytic inflammation.",
      "Adenosquamous carcinoma requires a squamous component exceeding 30%; mention even smaller convincing squamous components.",
      "Rhabdoid undifferentiated carcinoma may show dyscohesive cells with abundant eosinophilic cytoplasmic inclusions and myxoid stroma.",
    ],
    ihc: [
      "Intestinal differentiation: CDX2 and MUC2; CK7/CK20 coexpression is not uncommon.",
      "Pancreatobiliary differentiation: MUC1; MUC1/MUC2/CDX2 panels help but are not entirely specific.",
      "Squamous component expresses squamous cytokeratins, p63, and p40.",
      "Rhabdoid undifferentiated carcinoma may show loss of SMARCB1 (INI1), SMARCA4, SMARCA2, and/or ARID1A.",
      "MMR protein IHC is recommended routinely to identify MMR-deficient tumors.",
    ],
    molecular: [
      "MMR deficiency/MSI occurs in approximately 10–15% and informs hereditary evaluation and immunotherapy eligibility.",
      "For advanced disease, consider tumor sequencing for actionable fusions (ALK, FGFR2, NRG1, NTRK, RET, ROS1), mutations (BRAF, BRCA1/2, KRAS, PALB2), and ERBB2 amplification.",
    ],
    differential: [
      [
        "Pancreatic ductal adenocarcinoma",
        "Exclude direct extension; determine the tumor epicenter by careful gross dissection.",
      ],
      [
        "Distal bile duct adenocarcinoma",
        "Map the relationship to the common bile duct and ampullary channel.",
      ],
      [
        "Non-ampullary duodenal adenocarcinoma",
        "Ampullary origin requires a tumor epicenter in the ampulla.",
      ],
      [
        "Metastatic squamous cell carcinoma",
        "A pure squamous carcinoma at the ampulla should prompt exclusion of metastasis.",
      ],
    ],
    pitfalls: [
      "The ampulla's complex anatomy makes staging challenging; a very small invasive focus may still reach a higher T category depending on the compartment involved.",
      "Invasive carcinoma may be concealed beneath an adenomatous/polypoid component.",
      "Do not force a pure intestinal or pancreatobiliary label when the phenotype is hybrid.",
    ],
  },
  {
    name: "Conventional Jejunoileal Adenoma",
    group: "Benign / Precursor",
    behavior: "Non-invasive epithelial neoplasm",
    site: "Jejunum or ileum; small intestinal adenomas are less common here than in the duodenum.",
    clinical: [
      "Usually sporadic; associated hereditary syndromes include FAP and MUTYH-associated polyposis.",
      "The supplied source does not provide a specific age or sex distribution.",
      "Clinical presentation is not specifically characterized in the supplied excerpt.",
    ],
    criteria: [
      "Non-invasive dysplastic glandular epithelial proliferation in the jejunum or ileum.",
      "Establish absence of stromal invasion.",
      "Assess architecture and dysplasia grade.",
    ],
    morphology: [
      "The supplied source describes conventional jejunoileal adenoma as an epithelial precursor but provides limited detailed histologic characterization.",
      "Adjacent residual adenoma is identified in approximately one quarter of jejunal/ileal adenocarcinomas, supporting an adenoma–carcinoma sequence in a subset.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Reactive / inflammatory atypia",
        "Requires correlation with architecture and background mucosal injury; the source does not provide a detailed differential.",
      ],
      ["Adenocarcinoma", "Requires unequivocal invasion."],
    ],
    pitfalls: [
      "Do not infer detailed subtype-specific IHC or molecular findings from the limited source description.",
    ],
  },
  {
    name: "Peutz–Jeghers Polyp",
    group: "Benign / Hamartomatous",
    behavior: "Hamartomatous polyp; syndromic and sporadic forms",
    site: "Small intestine; classic syndromic polyps are often found in the small bowel.",
    clinical: [
      "Syndromic lesions occur in Peutz–Jeghers syndrome (PJS); solitary sporadic polyps also occur.",
      "The supplied excerpt does not specify a characteristic age or sex distribution.",
      "PJS carries increased overall malignancy risk; a solitary sporadic polyp does not appear to confer the same risk.",
    ],
    criteria: [
      "Arborizing smooth-muscle core within the polyp mesenchyme.",
      "Epithelial component is usually normal or near-normal, without extensive dysplasia.",
      "Correlate with clinical history and consider genetic evaluation to distinguish syndromic from sporadic lesions.",
    ],
    morphology: [
      "Syndromic polyps show branching/arborizing smooth-muscle bundles that divide the epithelium into lobules.",
      "The epithelial lining is generally normal or near-normal.",
      "Epithelial misplacement from prolapse/peristaltic trauma may extend deeply, even to the serosa, and mimic invasion.",
      "Sporadic polyps show more haphazard fibromuscular proliferation wrapping individual glands, without the orderly lobular pattern.",
    ],
    ihc: [],
    molecular: [
      "Germline pathogenic STK11 variants can be identified by next-generation sequencing in patients with PJS.",
      "A solitary sporadic Peutz–Jeghers polyp requires adequate genetic/clinical evaluation before excluding germline or mosaic STK11 alteration.",
    ],
    differential: [
      [
        "Adenoma with prolapse",
        "Dysplasia or epithelial serration suggests an adenomatous/serrated lesion with secondary prolapse.",
      ],
      [
        "True invasive adenocarcinoma",
        "Epithelial misplacement in Peutz–Jeghers polyps can mimic invasion; recognize the arborizing smooth-muscle framework and bland epithelium.",
      ],
      [
        "Mucosal prolapse polyp",
        "May show fibromuscular proliferation but lacks the characteristic organized arborizing architecture of a syndromic Peutz–Jeghers polyp.",
      ],
    ],
    pitfalls: [
      "Epithelial misplacement may extend to the serosa and should not be mistaken for carcinoma without supporting cytologic and stromal features.",
      "Small syndromic polyps may lack the classic architecture.",
      "Do not label a polyp sporadic until PJS has been adequately evaluated.",
    ],
  },
  {
    name: "Jejunoileal Adenocarcinoma",
    group: "Malignant",
    behavior: "Invasive carcinoma",
    site: "Jejunum or ileum; ileal tumors are commonly associated with Crohn disease, whereas jejunal tumors are more frequent in celiac disease.",
    clinical: [
      "Typically presents in the sixth decade; median age approximately 50–60 years.",
      "Abdominal pain, nausea/vomiting, gastrointestinal bleeding, and anemia are common.",
      "Obstruction and bleeding are typical presentations; approximately 65% present at stage III or IV.",
    ],
    criteria: [
      "Invasive malignant epithelial neoplasm arising in jejunum or ileum with glandular differentiation and/or mucin production.",
      "Demonstrate infiltrative invasion and establish the primary site.",
      "Classify histologic subtype and grade; assess MMR status.",
    ],
    morphology: [
      "Most tumors resemble colorectal adenocarcinoma, with infiltrative glands lined by columnar cells with elongated nuclei, often with luminal necrosis.",
      "Mucinous adenocarcinoma: more than 50% extracellular mucin with malignant epithelium in clumps, strips, or single cells.",
      "Medullary carcinoma: more than 50% syncytial solid growth with vesicular nuclei, prominent nucleoli, and prominent lymphocytes and/or neutrophils.",
      "Low-grade tubuloglandular adenocarcinoma: haphazard well-differentiated glands without desmoplastic response; small glands have cuboidal to low-columnar eosinophilic cells.",
      "Poorly cohesive carcinoma: more than 50% single cells, small clusters, or cords, with or without signet-ring morphology.",
      "Undifferentiated carcinoma may show dyscohesive rhabdoid cells and loss of SWI/SNF proteins.",
      "Adenosquamous carcinoma contains both glandular and squamous components and is extremely rare.",
      "Tumor budding, lymphovascular invasion, and subserosal/serosal involvement are common.",
    ],
    ihc: [
      "MMR protein loss identifies MMR-deficient tumors and supports hereditary assessment and immunotherapy selection.",
      "Mucinous tumors typically express MUC2.",
      "CK7 is infrequent in sporadic tumors (20–30%) but is more common in Crohn-associated ileal adenocarcinoma.",
      "CDX2-positive/MUC1-negative intestinal phenotype has been associated with better prognosis.",
      "SATB2 is expressed in approximately 20%; it cannot reliably distinguish jejunoileal from colorectal origin.",
      "Undifferentiated rhabdoid tumors may lose SMARCA2, SMARCA4, SMARCB1, and/or ARID1A.",
    ],
    molecular: [
      "MMR deficiency/MSI occurs in approximately 9–31%; test MMR proteins and/or MSI for hereditary assessment and immunotherapy selection.",
      "Crohn-associated ileal adenocarcinoma harbors IDH1 mutations (usually p.Arg132Cys) in approximately 20%; MGMT methylation is also common.",
      "Celiac-associated tumors show high MSI/MMR deficiency (50–73%), often related to MLH1 promoter hypermethylation; WNT pathway activation is frequent.",
      "Common alterations include TP53, KRAS, APC, PIK3CA, and SMAD4.",
    ],
    differential: [
      [
        "Colorectal adenocarcinoma involving small bowel",
        "May extend into mucosa and mimic an adenoma; correlate with clinical history, imaging, and tumor epicenter.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Exclude a secondary primary, particularly colorectal origin.",
      ],
      [
        "Crohn-related inflammatory stenosis",
        "Poorly cohesive carcinoma may diffusely thicken and rigidify the bowel wall, mimicking fibroinflammatory stricture.",
      ],
      [
        "Neuroendocrine neoplasm",
        "Use morphology and neuroendocrine markers when a nested/organoid or small-cell pattern is present.",
      ],
      [
        "Undifferentiated carcinoma mimics",
        "Exclude dedifferentiated carcinoma, lung carcinoma metastasis, sarcoma, and melanoma.",
      ],
    ],
    pitfalls: [
      "Crohn-associated poorly cohesive carcinoma may be diffuse and non-mass-forming; inspect strictures carefully.",
      "Grade by the least differentiated component; a focus lacking gland formation of at least 0.196 mm² supports high-grade classification.",
      "Medullary carcinoma is not graded as high-grade under the source-described scheme despite its solid growth pattern.",
      "Report tumor budding and lymphovascular invasion separately from grade.",
    ],
  },
];

const cats = [
  "All",
  "Benign / Precursor",
  "Benign / Hamartomatous",
  "Malignant",
];
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

export default function SmallIntestineTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Jejunoileal Adenocarcinoma",
    "Ampullary Adenocarcinoma",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            x.site,
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
            PathologyGPS / Gastrointestinal Pathology / Small Intestine
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Small Intestinal Tumors
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <section className="space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Entity reference
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunophenotype, or
                molecular finding.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search entities and features..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 sm:w-72"
              />
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm"
              >
                {cats.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-3">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-950">
                          {p.name}
                        </h3>
                        <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
                          {p.group}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        {p.behavior}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {p.site}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
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
                              Immunophenotype
                            </h4>
                            <Bullets items={p.ihc} />
                          </>
                        )}
                        {p.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular Pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
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
                      {p.pitfalls.length > 0 && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic Pitfalls
                          </h4>
                          <Bullets items={p.pitfalls} />
                        </div>
                      )}
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

        <Panel title="High-yield site distinction">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Site</th>
                  <th className="py-2 pr-3">Key anatomic distinction</th>
                  <th className="py-2">Diagnostic implication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-3 font-semibold">
                    Non-ampullary duodenum
                  </td>
                  <td className="py-3 pr-3">
                    Tumor does not involve the ampulla.
                  </td>
                  <td className="py-3">
                    Classify as non-ampullary duodenal adenoma or adenocarcinoma
                    according to invasion.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">Ampullary surface</td>
                  <td className="py-3 pr-3">
                    Lesion arises on the duodenal-facing surface of the papilla.
                  </td>
                  <td className="py-3">
                    Ampullary duodenal adenoma or ampullary duodenal
                    adenocarcinoma.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">
                    Intra-ampullary channel
                  </td>
                  <td className="py-3 pr-3">
                    Epicenter and bulk lie within the ampullary channel.
                  </td>
                  <td className="py-3">
                    Consider IAPN and IAPN-associated carcinoma; ductal-origin
                    carcinoma is a separate category.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-3 font-semibold">Jejunum / ileum</td>
                  <td className="py-3 pr-3">
                    Establish segment and exclude secondary involvement.
                  </td>
                  <td className="py-3">
                    Apply jejunoileal adenoma/adenocarcinoma criteria and
                    evaluate relevant clinical associations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Document the exact segment and, for periampullary lesions, the tumor epicenter and relationship to the ampullary channel, common bile duct, pancreatic duct, pancreas, and duodenum.",
              "For ampullary and periampullary resections, submit the ampulla and adjacent structures with a dissection method that demonstrates the epicenter.",
              "Sample the full depth of adenomatous/polypoid lesions because invasive carcinoma may be concealed in deeper portions.",
              "For jejunoileal strictures, especially in Crohn disease, carefully sample diffuse wall thickening even when no discrete mass is present.",
              "Report histologic subtype, grade where applicable, depth/extent of invasion, lymphovascular and perineural invasion, tumor budding when assessed, margins, and lymph node status.",
              "Perform MMR protein IHC and/or MSI testing in small intestinal and ampullary adenocarcinoma; consider additional molecular profiling in advanced disease.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Content is based on the
          supplied WHO source excerpt. Where the excerpt provides limited
          clinical or diagnostic detail, the page explicitly avoids adding
          unsupported specifics. Ancillary tests should be interpreted with
          morphology, anatomic site, and clinical findings.
        </footer>
      </div>
    </main>
  );
}
