"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  category: string;
  behavior: string;
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
    name: "Cystadenoma of the Seminal Vesicle",
    category: "Glandular neoplasm",
    behavior: "Benign",
    site: "Confined to the seminal vesicle.",
    clinical: [
      "Reported in men aged 23–66 years.",
      "Usually presents with obstructive urinary symptoms.",
      "May be detected as an asymptomatic mass.",
      "Can form a large cystic or partly solid mass.",
    ],
    criteria: [
      "Lesion is centered in and confined to the seminal vesicle.",
      "Variably sized cysts and glandular spaces are present.",
      "Cysts are lined by bland cuboidal epithelium without significant cytologic atypia.",
      "Glands show a lobular arrangement with branching lumina in scant stroma.",
      "No destructive stromal invasion or malignant epithelial component is identified.",
    ],
    histology: [
      "Variably sized glandular spaces form branching lumina and cysts.",
      "The glands are arranged in a lobular pattern.",
      "The lining consists of bland cuboidal epithelial cells.",
      "Cystic spaces often contain granular intraluminal secretions.",
      "The intervening stroma is scant.",
    ],
    ihc: [
      "Epithelial cells are positive for cytokeratins.",
      "PSA and PAP are negative in the epithelial component.",
      "Calretinin is negative in the epithelial component.",
      "Focal luminal AMACR positivity may occur.",
      "Stromal cells may show weak SMA expression and are negative for S100.",
    ],
    molecular: [
      "No diagnostically useful recurrent molecular alteration is established.",
    ],
    differential: [
      [
        "Seminal vesicle mixed epithelial and stromal tumor",
        "Cystadenoma has scant stroma; MEST has a more prominent, often hypercellular stromal component accompanying benign glands and cysts.",
      ],
      [
        "Primary seminal vesicle adenocarcinoma",
        "Adenocarcinoma shows malignant cytology and invasive growth; cystadenoma has bland cuboidal lining and lacks destructive invasion.",
      ],
      [
        "Cystic lesions of adjacent organs",
        "Establish the anatomic epicenter and relationship to the seminal vesicle, prostate, bladder, and rectum.",
      ],
    ],
    pitfalls: [
      "A large cystic mass may obscure its site of origin; correlate with imaging and operative findings.",
      "Focal AMACR staining alone does not establish prostatic adenocarcinoma.",
    ],
  },
  {
    name: "Adenocarcinoma of the Seminal Vesicle",
    category: "Glandular neoplasm",
    behavior: "Malignant",
    site: "Centered in the seminal vesicle; may extend into adjacent structures.",
    clinical: [
      "Usually occurs in men aged 40–70 years; mean age at diagnosis is approximately 62 years.",
      "Common presentations include urinary obstruction and hematuria.",
      "Hematospermia occurs less commonly.",
      "Often forms a large cystic or solid mass and may be bilateral.",
    ],
    criteria: [
      "Tumor is centered in the seminal vesicle or, in a large mass, has a seminal vesicle epicenter.",
      "A malignant gland-forming epithelial neoplasm is present.",
      "Papillary-glandular and/or trabecular architecture supports the diagnosis.",
      "Clinical and pathologic evaluation excludes direct extension from prostate, bladder, or rectum and excludes metastasis from another site.",
      "An immunophenotype supporting seminal vesicle origin is present in the appropriate morphologic and clinical setting.",
    ],
    histology: [
      "Tumor shows glandular differentiation, often with papillary, trabecular, and complex glandular growth.",
      "A papillary clear-cell pattern may occur.",
      "Hobnail tumor cells may be present.",
      "Goblet cells and mucin production may be identified.",
    ],
    ihc: [
      "Tumor cells are typically positive for PAX8, CK7, CEA, and CA125.",
      "PSA, PAP, NKX3.1, P501S, and androgen receptor are typically negative.",
      "p63 and GATA3 are typically negative, helping to distinguish from urothelial carcinoma in the appropriate setting.",
      "WT1, calretinin, and CDX2 are typically negative.",
      "CK20 may be positive or negative.",
      "AMACR is usually negative but may show focal positivity.",
    ],
    molecular: [
      "No established recurrent molecular alteration is currently used to define this diagnosis.",
      "Serum CA125 may be useful for monitoring recurrence in selected patients; it is not a defining molecular test.",
    ],
    differential: [
      [
        "Prostatic adenocarcinoma involving seminal vesicle",
        "Usually expresses prostate-lineage markers such as NKX3.1, PSA, PAP, and/or P501S; correlate with a prostate primary and pattern of spread.",
      ],
      [
        "Urothelial carcinoma of bladder involving seminal vesicle",
        "Usually shows urothelial differentiation, including GATA3 and/or p63 expression; assess for a bladder primary and direct extension.",
      ],
      [
        "Colorectal adenocarcinoma involving seminal vesicle",
        "Usually expresses intestinal markers such as CDX2 and often CK20; establish whether the tumor is secondary.",
      ],
      [
        "Primary seminal vesicle squamous cell carcinoma",
        "Shows squamous differentiation and keratinization rather than gland-forming architecture.",
      ],
      [
        "Other clear-cell or papillary adenocarcinomas",
        "Use the anatomic epicenter, clinical evaluation, mucin production, and a lineage-directed immunohistochemical panel.",
      ],
    ],
    pitfalls: [
      "Primary seminal vesicle adenocarcinoma is a diagnosis of exclusion; direct extension from prostate is much more common.",
      "A PAX8-positive, CK7-positive phenotype supports but does not independently prove seminal vesicle origin.",
      "Large tumors may obscure the site of origin; imaging and operative findings are essential.",
      "Seminal vesicle involvement by prostatic carcinoma is staged as pT3b and has important prognostic significance.",
    ],
  },
  {
    name: "Squamous Cell Carcinoma of the Seminal Vesicle",
    category: "Squamous neoplasm",
    behavior: "Malignant",
    site: "Seminal vesicle; reported cases have been unilateral.",
    clinical: [
      "Reported in men aged 26–69 years, with a mean age of approximately 52 years.",
      "Gross hematuria is the most frequent presentation.",
      "Other presentations include hematospermia, dysuria, and bladder outlet obstruction.",
      "Serum PSA is typically normal.",
    ],
    criteria: [
      "Tumor is centered in the seminal vesicle.",
      "Malignant squamous morphology with keratinization is present.",
      "No glandular differentiation or mucin secretion is identified.",
      "Direct extension from an adjacent organ and metastasis from another squamous carcinoma are excluded.",
    ],
    histology: [
      "Keratinizing squamous cell carcinoma may form cystic spaces of variable size.",
      "Marked chronic inflammation commonly accompanies the tumor.",
      "Foci of squamous metaplasia may be present in adjacent epithelium.",
    ],
    ihc: [
      "Tumor cells are positive for p63.",
      "Tumor cells are positive for CK5/6.",
      "CK7, CK20, PSA, and CEA are typically negative.",
    ],
    molecular: [
      "No diagnostically useful recurrent molecular alteration is established.",
      "Aberrant p53 protein accumulation has been described in metaplastic epithelium and carcinoma in an individual case; this is not an established diagnostic molecular feature.",
    ],
    differential: [
      [
        "Bladder or prostatic urethral squamous cell carcinoma involving seminal vesicle",
        "Look for a primary tumor in the bladder or urethra and determine whether the seminal vesicle is secondarily involved.",
      ],
      [
        "Prostatic adenosquamous carcinoma",
        "May contain a glandular component and arise in the prostate; assess the tumor epicenter and sample extensively.",
      ],
      [
        "Metastatic squamous cell carcinoma",
        "Exclude a primary squamous carcinoma elsewhere through clinical history, imaging, and anatomic distribution.",
      ],
      [
        "Squamous metaplasia with inflammation",
        "Metaplasia lacks destructive invasion, significant malignant cytology, and an infiltrative tumor mass.",
      ],
    ],
    pitfalls: [
      "The diagnosis requires convincing seminal vesicle origin, not simply squamous carcinoma involving the seminal vesicle.",
      "Marked inflammation and adjacent squamous metaplasia may provide a clue but are not independently diagnostic.",
    ],
  },
  {
    name: "Mixed Epithelial and Stromal Tumor of the Seminal Vesicle",
    category: "Mixed epithelial-stromal neoplasm",
    behavior: "Usually benign; rare tumors may behave malignantly",
    site: "Centered in the seminal vesicle.",
    clinical: [
      "Usually occurs in middle-aged or older men; reported age range is 39–82 years.",
      "Common presentations include obstructive lower urinary tract symptoms and hematospermia.",
      "Fever or abdominal pain may occur.",
      "A mass above the prostate may be detected on examination or imaging.",
    ],
    criteria: [
      "Tumor originates in the seminal vesicle.",
      "A biphasic neoplasm contains both benign epithelial and spindle-cell stromal components.",
      "The stromal component is more prominent and often more cellular than in cystadenoma.",
      "Stromal cells commonly express estrogen and progesterone receptors.",
      "A prostatic stromal tumor or sarcoma incorporating epithelial elements is excluded.",
    ],
    histology: [
      "The tumor is well circumscribed and typically solid and cystic.",
      "Variably sized cysts are lined by cuboidal or columnar epithelium.",
      "Epithelial lining may show hobnailing, papillary infolding, or tufting.",
      "The stromal component is prominent and may be hypercellular.",
      "Stroma may condense around distorted glandular spaces.",
      "Rare tumors show stromal atypia and mitotic activity and may behave malignantly.",
    ],
    ihc: [
      "Stromal cells are positive for ER and PR.",
      "Stromal cells may express vimentin, desmin, SMA, h-caldesmon, and CD34.",
      "Stromal cells are negative for inhibin, S100, and KIT (CD117).",
      "Epithelial cells are positive for CK7.",
      "Epithelial cells are negative for CK20, PSA, and PAP.",
    ],
    molecular: [
      "No diagnostically useful recurrent molecular alteration is established.",
    ],
    differential: [
      [
        "Cystadenoma of the seminal vesicle",
        "Cystadenoma has scant stroma; MEST has a conspicuous, often hypercellular spindle-cell stromal component.",
      ],
      [
        "Prostatic stromal tumor of uncertain malignant potential",
        "Establish the epicenter; prostatic stromal tumors arise in the prostate and may entrap or incorporate glands.",
      ],
      [
        "Prostatic stromal sarcoma",
        "Look for a prostatic primary, malignant stromal features, and the relationship of epithelial glands to the stromal neoplasm.",
      ],
      [
        "Fibroadenoma or adenomyoma of the seminal vesicle",
        "These exceedingly rare terms have overlapping features with MEST and should be interpreted in the context of the biphasic morphology.",
      ],
    ],
    pitfalls: [
      "Do not classify a lesion as cystadenoma when the stromal component is substantial and hypercellular.",
      "Assess stromal atypia, mitotic activity, and necrosis carefully because rare tumors may behave malignantly.",
      "The anatomic epicenter is critical when distinguishing a seminal vesicle MEST from a prostatic stromal neoplasm.",
    ],
  },
];

const categories = [
  "All",
  "Glandular neoplasm",
  "Squamous neoplasm",
  "Mixed epithelial-stromal neoplasm",
];

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h2 className="mb-3 font-bold text-slate-900">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SeminalVesicleTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Adenocarcinoma of the Seminal Vesicle",
  ]);

  const filtered = useMemo(
    () =>
      entities.filter((entity) => {
        const matchesCategory =
          category === "All" || entity.category === category;
        const searchable = [
          entity.name,
          entity.category,
          entity.behavior,
          entity.site,
          ...entity.clinical,
          ...entity.criteria,
          ...entity.histology,
          ...entity.ihc,
          ...entity.molecular,
          ...entity.differential.flat(),
        ]
          .join(" ")
          .toLowerCase();
        return matchesCategory && searchable.includes(query.toLowerCase());
      }),
    [query, category],
  );

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Genitourinary Pathology / Seminal Vesicle Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Seminal Vesicle Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference focused on establishing
                the site of origin, recognizing the major primary neoplasms, and
                excluding secondary involvement from adjacent organs.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the epicenter before assigning the primary site.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Secondary tumors, especially direct extension from prostatic
                adenocarcinoma, are substantially more common than primary
                seminal vesicle neoplasms.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic approach">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "1. Confirm the epicenter",
                "Use imaging, gross examination, and the relationship to the prostate, bladder, and rectum to establish whether the mass arises in the seminal vesicle.",
              ],
              [
                "2. Exclude secondary tumors",
                "Prioritize direct extension from prostate; also consider bladder and colorectal carcinoma, as well as metastasis from another site.",
              ],
              [
                "3. Classify the pattern",
                "Separate bland cystic glandular lesions, malignant gland-forming tumors, keratinizing squamous carcinoma, and biphasic epithelial-stromal tumors.",
              ],
              [
                "4. Use targeted IHC",
                "For suspected primary adenocarcinoma, integrate PAX8, CK7, CEA, and CA125 with prostate, urothelial, and intestinal lineage markers.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Important secondary involvement">
            <Bullets
              items={[
                "Secondary tumors involve the seminal vesicles considerably more often than primary tumors.",
                "Direct extension from prostatic adenocarcinoma is the most common source; seminal vesicle involvement is classified as pT3b.",
                "Bladder and colorectal carcinomas may also directly invade the seminal vesicles.",
                "Rare urothelial carcinoma may spread in situ along the ejaculatory ducts to the seminal vesicle.",
              ]}
            />
          </Panel>
          <Panel title="Benign mimics and interpretive pitfalls">
            <Bullets
              items={[
                "Developmental and acquired cysts, hamartomas, hyperplastic conditions, nodular calcification, and amyloidosis may mimic neoplasia.",
                "Seminal vesicle epithelium may show atypia and a small-acinar (adenotic) pattern in prostate needle biopsies.",
                "Spotty atypia, cytoplasmic lipochrome pigment, marked hyperchromasia, and intranuclear cytoplasmic inclusions favor seminal vesicle epithelium.",
                "Prostate-lineage immunostains can help resolve difficult cases.",
              ]}
            />
          </Panel>
        </div>

        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, clinical presentation,
                immunophenotype, or marker.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. PAX8, CA125, p63, cystic..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === item
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((entity) => {
              const isOpen = opened.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(entity.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {entity.category}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {entity.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {entity.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {entity.site}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse" : "View diagnostic profile"}{" "}
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Clinical Profile
                        </h4>
                        <Bullets items={entity.clinical} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={entity.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Histopathology
                        </h4>
                        <Bullets items={entity.histology} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Immunophenotype
                        </h4>
                        <Bullets items={entity.ihc} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Molecular Pathology
                        </h4>
                        <Bullets items={entity.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[620px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map(
                                ([diagnosis, distinction], index) => (
                                  <tr key={index}>
                                    <td className="w-1/4 py-3 pr-4 align-top font-semibold text-slate-900">
                                      {diagnosis}
                                    </td>
                                    <td className="py-3 leading-6 text-slate-700">
                                      {distinction}
                                    </td>
                                  </tr>
                                ),
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
                        </h4>
                        <Bullets items={entity.pitfalls} />
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
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-slate-500">
          PathologyGPS · Seminal Vesicle Tumors
        </div>
      </footer>
    </main>
  );
}
