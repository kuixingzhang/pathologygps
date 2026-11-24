"use client";

import { useMemo, useState } from "react";

type Section = {
  title: string;
  text: string;
  ihc?: string;
  differential?: string[];
};
type Entity = {
  name: string;
  group: string;
  summary: string;
  sections: Section[];
  pearls?: string[];
};

const entities: Entity[] = [
  {
    name: "Endometrial hyperplasia without atypia",
    group: "Precursor lesions",
    summary: "Diffuse-field glandular proliferation without cytologic atypia.",
    sections: [
      {
        title: "Histology",
        text: "Irregularly sized and shaped tubular, branching, and/or cystically dilated glands with a variably increased gland-to-stroma ratio. The epithelium is cytologically bland; staggered nuclei may appear pseudostratified and mitotic activity may be increased. The architectural and nuclear changes are generally distributed throughout the sampled endometrium.",
        differential: [
          "EAH/EIN: a geographically defined focus of crowded glands with cytology distinct from the background; the gland area exceeds the stromal area within the lesion.",
          "Endometrial polyp: focal gland crowding may occur, but crowded glands should not be cytologically distinct from the other glands in the polyp.",
          "Cystic atrophy or disordered proliferative endometrium: interpret gland density in the context of the overall background and hormonal pattern.",
        ],
      },
      {
        title: "IHC / molecular",
        text: "No immunohistochemical or molecular test is required for diagnosis. Morphology is primary.",
      },
    ],
    pearls: [
      "Do not diagnose EIN solely because a polyp contains crowded or cystically dilated glands.",
      "Tubal/ciliated metaplasia in background endometrium is not, by itself, cytologic atypia.",
    ],
  },
  {
    name: "Atypical hyperplasia / Endometrioid intraepithelial neoplasia (EAH/EIN)",
    group: "Precursor lesions",
    summary:
      "Clonal-appearing, localized crowded glands with cytology distinct from background endometrium.",
    sections: [
      {
        title: "Essential histology",
        text: "A morphologically defined focus of crowded altered tubular or branching glands in which gland area exceeds stromal area. The epithelial cytology must differ from adjacent or entrapped non-neoplastic glands. Increased stratification and limited cribriforming may occur, but prominent cribriform architecture or high-grade nuclear atypia should prompt consideration of carcinoma or serous carcinoma. The focus must be sufficiently large to exclude artifactual crowding.",
      },
      {
        title: "IHC",
        text: "A panel of PAX2, PTEN, and β-catenin may support the diagnosis; aberrant expression of at least one occurs in more than 90% of cases in reported series. Loss of PAX2 or PTEN and nuclear β-catenin can support clonality, but none replaces the required morphologic criteria.",
      },
      {
        title: "Differential diagnosis",
        text: "Hyperplasia without atypia shows a more diffuse field change with relatively uniform cytology. Basalis, endometrial polyp, dyssynchronous endometrium, and cystic atrophy can mimic focal crowding. High-grade atypia is not a feature of EAH/EIN and raises concern for serous carcinoma.",
      },
    ],
    pearls: [
      "The diagnosis requires the combination of gland crowding and altered cytology, not either feature alone.",
      "Squamous morules are common and may be associated with CTNNB1 alteration.",
    ],
  },
  {
    name: "Atypical polypoid adenomyoma (APA)",
    group: "Precursor lesions",
    summary:
      "Complex atypical endometrioid glands embedded in benign myomatous or fibromyomatous stroma.",
    sections: [
      {
        title: "Histology",
        text: "A polypoid lesion, often in the lower uterine segment, composed of irregular and architecturally complex endometrioid-type glands in bland cellular spindle-cell myomatous/fibromyomatous stroma. Squamous morular metaplasia is almost always present. Glands often show mild-to-moderate atypia and may have a lobular arrangement. Rare foci may show more extensive glandular crowding compatible with low-grade endometrioid carcinoma arising in APA.",
      },
      {
        title: "IHC",
        text: "The stromal cells are commonly positive for desmin, SATB2, and p16 (often moderate-to-strong and diffuse); these are not specific because adenomyoma stroma may share this profile. Stromal h-caldesmon and CD10 are usually negative.",
      },
      {
        title: "Differential diagnosis",
        text: "Adenomyoma has benign endometrial glands without the characteristic cytologic atypia and morular metaplasia. Endometrioid carcinoma involving myometrium shows destructive/infiltrative growth, confluent glands, or desmoplasia rather than a circumscribed polypoid lesion with benign myomatous stroma. Assess for coexistent EIN and carcinoma.",
      },
    ],
    pearls: [
      "Carefully sample the lesion and its interface; a limited focus of carcinoma may coexist.",
    ],
  },
  {
    name: "Endometrioid carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "Endometrioid-type glands with complex architecture, stromal exclusion/invasion, or confluent papillary/solid growth.",
    sections: [
      {
        title: "Histology: recognition and invasion",
        text: "Usually retains at least focal glandular architecture. Glands have smooth luminal contours and are lined by columnar cells with eosinophilic cytoplasm and pseudostratified nuclei; atypia is usually mild-to-moderate in low-grade tumors. Squamous, morular, mucinous, secretory, and tubal/ciliated metaplasia support endometrioid differentiation. Well-differentiated carcinoma is distinguished from EIN by stromal invasion or its architectural equivalent: confluent, cribriform, labyrinthine, or complex papillary growth with loss of intervening endometrial stroma. Desmoplasia supports invasion in the appropriate setting.",
      },
      {
        title: "Myometrial invasion patterns",
        text: "Conventional invasion: irregular glands/nests with desmoplastic stroma. Pushing pattern: broad pushing front. Adenomyosis-like or adenoma-malignum-like pattern: haphazard glands within myometrium without an obvious desmoplastic response or accompanying endometrial stroma. MELF pattern: microcystic, elongated, and fragmented glands with fibromyxoid/inflammatory reaction disproportionate to the small invasive focus; cells may be eosinophilic or histiocytoid and can mimic vascular spaces.",
      },
      {
        title: "FIGO grade",
        text: "Grade 1: ≤5% solid non-glandular, non-squamous growth. Grade 2: 6–50%. Grade 3: >50%. Severe nuclear atypia involving >50% of tumor cells increases the grade by one level. If atypia is disproportionate to architecture, exclude serous carcinoma. Binary grouping: grades 1–2 low-grade; grade 3 high-grade.",
      },
      {
        title: "IHC",
        text: "Low-grade tumors typically show diffuse PAX8, CK7, ER, and PR; p16 is usually patchy/non-block. High-grade tumors may lose ER/PR and show block-type p16 and mutation-type p53. Loss of PTEN, ARID1A, or one or more MMR proteins supports endometrioid differentiation in context but is not specific. GATA3 and napsin A are usually negative. Pilomatrix-like high-grade endometrioid carcinoma is an exception: often PAX8/ER/PR-negative, with aberrant nuclear β-catenin and variable CK7, CDX2, synaptophysin, and p63.",
      },
      {
        title: "Differential diagnosis",
        text: "Serous carcinoma: marked pleomorphism, high N:C ratio, macronucleoli, brisk mitoses, complex papillary/slit-like glands, mutation-type p53 and usually diffuse p16. Clear cell carcinoma: tubulocystic/papillary/solid patterns, hobnail or polygonal cells, napsin A/AMACR positivity and usually ER/PR negativity. Mesonephric-like carcinoma: mixed tubular/ductal/papillary/solid patterns, angulated grooved nuclei and colloid-like luminal material; GATA3/TTF1/CD10 positive, ER/PR usually absent. Dedifferentiated carcinoma: abrupt transition to a discohesive sheet-like undifferentiated component with loss of epithelial differentiation and possible SWI/SNF protein loss.",
      },
    ],
    pearls: [
      "Do not equate any solid growth with grade 3: exclude squamous areas from the solid-growth calculation.",
      "Beware of MELF-associated retraction/displacement artifacts that can mimic LVSI.",
      "Report depth of myometrial invasion, cervical stromal involvement, LVSI (focal vs substantial), and molecular subtype.",
    ],
  },
  {
    name: "Serous carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "High-grade carcinoma with marked nuclear pleomorphism and usually papillary and/or glandular architecture.",
    sections: [
      {
        title: "Histology",
        text: "Often arises in atrophic endometrium or an endometrial polyp. Complex papillary and/or glandular patterns are common; glands may be elongated and irregular with slit-like lumina. Less often, rounded glands or solid growth mimic endometrioid carcinoma. Tumor cells show high-grade cytology, marked pleomorphism, high N:C ratio, macronucleoli, and conspicuous mitoses. Multinucleation and psammoma bodies may occur. Intraepithelial replacement of native surface/glandular epithelium may be present. Myoinvasive tumors may show gaping glands and LVSI.",
      },
      {
        title: "IHC / molecular",
        text: "Almost invariably mutation-type p53 (overexpression, null, or cytoplasmic pattern); p16 is typically diffuse/block-type and Ki-67 high. MMR proteins are usually retained. WT1 is positive in up to approximately one third, so it is not required. ER/PR are variable. HER2 overexpression/amplification occurs in approximately 25–30%, sometimes heterogeneously.",
      },
      {
        title: "Differential diagnosis",
        text: "High-grade endometrioid carcinoma: often retains endometrioid-type glands/metaplasia and may show ER/PR, PTEN/ARID1A loss, or dMMR; however, high-grade endometrioid carcinoma can also be p53-abnormal. Clear cell carcinoma: hobnail/cuboidal cells and tubulocystic pattern, with napsin A/AMACR support. POLE-mutated endometrioid carcinoma can be strikingly pleomorphic and mimic serous carcinoma; perform molecular classification rather than relying on morphology alone.",
      },
    ],
    pearls: [
      "The older labels 'serous endometrial intraepithelial carcinoma' and 'minimal uterine serous carcinoma' are not recommended for routine reporting.",
      "A superficially confined or polyp-associated lesion may still disseminate.",
    ],
  },
  {
    name: "Mesonephric-like carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "Carcinoma with mesonephric differentiation but without associated mesonephric remnants.",
    sections: [
      {
        title: "Histology",
        text: "Usually an admixture of tubular, ductal/glandular, papillary, glomeruloid, and solid patterns; spindle areas may occur. Nuclei are angulated with open/vesicular chromatin, overlap, and grooves. Eosinophilic colloid-like material may be present in lumina. Squamous and mucinous differentiation are absent; mesonephric remnants are not present.",
      },
      {
        title: "IHC / molecular",
        text: "Most cases express GATA3, TTF1, CD10 (often apical), and PAX8, with variable extent. ER and PR are usually absent or minimal; p53 is wild-type and MMR proteins are retained. KRAS codon 12 (most often) or codon 13 activating mutation can support difficult cases.",
      },
      {
        title: "Differential diagnosis",
        text: "Endometrioid carcinoma with tubular/sex cord-like patterns: usually ER/PR-positive and may show squamous/morular differentiation; GATA3/TTF1 generally negative. Clear cell carcinoma: napsin A/AMACR support and hobnail/tubulocystic features; mesonephric-like carcinoma is usually napsin A-negative. Cervical mesonephric carcinoma is associated with mesonephric remnants and arises in the cervix; correlate site and precursor/remnant context.",
      },
    ],
    pearls: [
      "Do not grade this histotype; it is regarded as an aggressive histological type.",
    ],
  },
  {
    name: "Clear cell carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "Malignant epithelial tumor with tubulocystic, papillary, and/or solid patterns and clear-to-eosinophilic cells.",
    sections: [
      {
        title: "Histology",
        text: "Architectural patterns are often mixed. Papillae are typically short and rounded, often with hyalinized stroma. Tubulocystic areas contain variably confluent glands and cysts. Cells may be cuboidal, polygonal, hobnail, or flat, with clear or eosinophilic cytoplasm. Clear cytoplasm and hobnail cells are not individually required. At least focal moderate-to-severe nuclear atypia is typically present. Tall columnar cells, extensive stratification, tufting, detached budding, and squamous differentiation are absent or only focal. Most tumors have relatively low mitotic activity.",
      },
      {
        title: "IHC",
        text: "Napsin A is positive in approximately 56–93% and AMACR/P504S in 75–88%, often in most tumor cells. ER and PR are usually negative or limited to a minority of cells. No single marker is definitive; interpret the panel with architecture and cytology.",
      },
      {
        title: "Differential diagnosis",
        text: "Secretory/tubal metaplasia or secretory endometrioid carcinoma: often bland, with endometrioid-type glands and ER/PR expression. Serous carcinoma: marked pleomorphism, brisk mitoses, mutation-type p53 and diffuse p16; clear cell carcinoma may have variable p53 status. Mesonephric-like carcinoma: colloid-like luminal material, angulated grooved nuclei, GATA3/TTF1/CD10 positivity and typically minimal ER/PR.",
      },
    ],
    pearls: [
      "Do not diagnose clear cell carcinoma on cytoplasmic clearing or hobnail cells alone.",
    ],
  },
  {
    name: "Mixed carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "Two or more distinct histological types, with at least one serous, clear cell, or mesonephric-like component.",
    sections: [
      {
        title: "Histology",
        text: "At least two spatially distinct and unequivocal carcinoma histotypes must be recognizable on H&E. The most common combination is endometrioid and serous carcinoma. Any confidently identified amount of a qualifying aggressive component is sufficient; report each component and its percentage. Do not use this category for morphologic variation within one histotype, ambiguous morphology, dedifferentiated carcinoma, or carcinosarcoma.",
      },
      {
        title: "IHC",
        text: "Use component-directed stains to confirm the distinction when needed. For endometrioid/clear cell combinations, napsin A may highlight the clear cell component and PR the endometrioid component. p53, MMR, ER/PR, and histotype-associated markers can help map distinct components.",
      },
      {
        title: "Differential diagnosis",
        text: "Heterogeneous endometrioid carcinoma: variation remains within one histotype and does not establish a mixed carcinoma. Dedifferentiated carcinoma: differentiated carcinoma plus an undifferentiated component, not a second defined histotype. Carcinosarcoma: malignant epithelial and mesenchymal components.",
      },
    ],
    pearls: [
      "The highest-grade/aggressive component drives grading; report the histotypes and percentages.",
    ],
  },
  {
    name: "Undifferentiated / dedifferentiated carcinoma",
    group: "Endometrial carcinomas",
    summary:
      "Undifferentiated carcinoma lacks overt lineage differentiation; dedifferentiated carcinoma combines it with a differentiated carcinoma.",
    sections: [
      {
        title: "Histology",
        text: "Undifferentiated component: diffuse sheets of relatively uniform small-to-intermediate cells, condensed chromatin, small or inconspicuous nucleoli, brisk mitotic activity (often >25 mitoses/2 mm²), and no convincing epithelial differentiation (no glands, cohesive nests, or trabeculae). Rhabdoid morphology and focal myxoid matrix may occur; tumor-infiltrating lymphocytes are often numerous. Dedifferentiated carcinoma has an associated differentiated component, most often FIGO grade 1–2 endometrioid carcinoma, with an abrupt or admixed interface.",
      },
      {
        title: "IHC",
        text: "Epithelial differentiation may be limited: diffuse strong keratin is not typical; CK8/18 and EMA are more likely to be positive than broad keratin cocktails. Vimentin is positive; ER, PR, and E-cadherin are usually negative. PAX8 is usually negative but may be focal. Chromogranin/synaptophysin can label a minority of cells (<10%). dMMR is common. Loss of SMARCA4 (BRG1), SMARCB1 (INI1), or combined ARID1A/ARID1B occurs in a substantial subset (about two thirds). p53 mutation-type staining occurs in a minority.",
      },
      {
        title: "Differential diagnosis",
        text: "FIGO grade 3 endometrioid carcinoma retains cohesive epithelial architecture, glands, or squamous differentiation and usually more convincing epithelial-marker expression. Lymphoma/plasmacytoma: use CD45 and lineage markers; epithelial markers may be weak/negative in undifferentiated carcinoma, so use more than one epithelial marker. High-grade endometrial stromal sarcoma: assess stromal markers and defining molecular context. High-grade neuroendocrine carcinoma: convincing neuroendocrine morphology and diffuse neuroendocrine marker expression, rather than only rare positive cells. SMARCA4-deficient uterine sarcoma: correlate with morphology, MMR status, and broader molecular findings.",
      },
    ],
    pearls: [
      "Do not exclude undifferentiated carcinoma because pancytokeratin or PAX8 is negative.",
      "A differentiated endometrioid component is a key clue to dedifferentiated carcinoma.",
    ],
  },
  {
    name: "Other endometrial carcinomas",
    group: "Endometrial carcinomas",
    summary:
      "Rare carcinoma categories require recognition of distinctive differentiation and exclusion of mimics.",
    sections: [
      {
        title: "Neuroendocrine carcinoma",
        text: "The source chapter identifies neuroendocrine carcinoma as a separate rare category. Evaluate for high-grade small-cell or large-cell neuroendocrine morphology and confirm with a panel of neuroendocrine markers; do not infer neuroendocrine carcinoma from focal synaptophysin/chromogranin staining in an otherwise undifferentiated carcinoma.",
      },
      {
        title: "Carcinoma with germ cell / trophoblastic component",
        text: "A rare category recognized separately in the source chapter. Identify the specific component morphologically and use component-appropriate immunohistochemistry; the provided source excerpt does not supply a complete marker panel or detailed diagnostic criteria for this entity.",
      },
      {
        title: "Diagnostic caution",
        text: "The source material does not provide enough detailed histologic/IHC criteria to construct a full entity-specific differential for these rare categories. Correlate with the dedicated neuroendocrine and trophoblastic sections and specialist references rather than extrapolating criteria.",
      },
    ],
  },
];

const molecular = [
  [
    "POLEmut",
    "Pathogenic exonuclease-domain POLE mutation",
    "Ultramutated; generally excellent prognosis, irrespective of histotype.",
  ],
  [
    "dMMR",
    "Loss of one or more MMR proteins (MLH1, PMS2, MSH2, MSH6)",
    "Surrogate for MSI-high; assess MLH1 promoter methylation when MLH1/PMS2 are lost.",
  ],
  [
    "p53abn",
    "Mutation-type p53 IHC: overexpression, null, or cytoplasmic pattern",
    "Surrogate for a large subset of copy-number-high tumors; commonly high-grade.",
  ],
  [
    "NSMP",
    "No POLEmut, dMMR, or p53abn classifier",
    "Heterogeneous residual group; ER status may further stratify risk.",
  ],
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-100">
      {children}
    </span>
  );
}

export default function UterineCorpusEpithelialTumorsPage() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [query, setQuery] = useState("");
  const groups = ["All", "Precursor lesions", "Endometrial carcinomas"];
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (activeGroup === "All" || e.group === activeGroup) &&
          `${e.name} ${e.summary} ${e.sections.map((s) => s.text + " " + (s.ihc || "") + " " + (s.differential || []).join(" ")).join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [activeGroup, query],
  );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
            Female Genital Tract · Uterine Corpus
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Epithelial Tumors of the Uterine Corpus
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-950">
            Initial Diagnostic Approach
          </h2>
          <p className="mt-2 max-w-4xl leading-7 text-slate-700">
            Begin with architecture and cytology on H&E. Establish whether the
            specimen shows a precursor lesion or invasive carcinoma, then
            determine the dominant differentiation pattern. Use IHC to resolve a
            focused differential—not as a substitute for morphology. Once
            carcinoma is established, complete the molecular classifier when
            indicated for prognostic and therapeutic stratification.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "1 · Is it neoplastic?",
                "Assess gland density, cytologic distinction from background, lesion distribution, and whether crowding is focal or diffuse.",
              ],
              [
                "2 · Is there invasion?",
                "Look for confluent/cribriform glands, loss of intervening stroma, desmoplasia, destructive myometrial growth, and LVSI.",
              ],
              [
                "3 · What is the histotype?",
                "Endometrioid, serous, clear cell, mesonephric-like, mixed, or undifferentiated/dedifferentiated; recognize rare categories separately.",
              ],
              [
                "4 · Which tests answer the question?",
                "Use p53, MMR, ER/PR, PAX8, napsin A, GATA3/TTF1, and SWI/SNF markers according to morphology.",
              ],
            ].map(([h, t]) => (
              <div
                key={h}
                className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="font-bold text-teal-800">{h}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-white p-4 ring-1 ring-slate-200">
            <h3 className="font-bold text-slate-900">
              A practical morphology-first branching scheme
            </h3>
            <div className="mt-3 grid gap-2 text-sm md:grid-cols-3">
              <div className="rounded-lg bg-slate-100 p-3">
                <b>Glands remain separated by stroma</b>
                <p className="mt-1 text-slate-600">
                  Consider benign/proliferative endometrium, hyperplasia without
                  atypia, or EIN according to cytology and distribution.
                </p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3">
                <b>Complex glands / stromal exclusion</b>
                <p className="mt-1 text-slate-600">
                  Consider endometrioid carcinoma; assess grade and myometrial
                  invasion pattern.
                </p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3">
                <b>High-grade, non-endometrioid morphology</b>
                <p className="mt-1 text-slate-600">
                  Use targeted IHC to distinguish serous, clear cell,
                  mesonephric-like, undifferentiated, and other rare carcinomas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Molecular Classification: Apply Across Histotypes
              </h2>
              <p className="mt-1 text-slate-600">
                The four-class ProMisE/TCGA-surrogate framework is not
                restricted to endometrioid carcinoma.
              </p>
            </div>
            <Badge>Risk stratification</Badge>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {molecular.map(([n, m, d]) => (
              <div
                key={n}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-lg font-bold text-teal-800">{n}</h3>
                <p className="mt-2 text-sm font-semibold text-slate-800">{m}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <b>Interpretation caveats:</b> p53-abnormal IHC captures
            approximately 85–90% of copy-number-high tumors, not all of them.
            dMMR and MSI-high are not interchangeable. POLEmut tumors may show
            secondary p53 and/or MMR abnormalities; these multiple-classifier
            tumors require hierarchical interpretation. If molecular testing is
            unavailable, histotype, grade, and anatomic stage remain essential.
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Entity-Based Diagnostic Guide
              </h2>
              <p className="mt-1 text-slate-600">
                Select a category or search for a histologic feature, stain, or
                entity.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: p53, napsin A, MELF, morules, GATA3…"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
            <div className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold ${activeGroup === g ? "bg-teal-700 text-white" : "bg-white text-slate-700 ring-1 ring-slate-300 hover:bg-slate-100"}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-5 space-y-6">
            {filtered.map((e) => (
              <article
                key={e.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <header className="p-5 md:p-6">
                  <Badge>{e.group}</Badge>
                  <h3 className="mt-2 text-xl font-bold text-slate-950">
                    {e.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {e.summary}
                  </p>
                </header>
                <div className="grid gap-6 border-t border-slate-200 p-5 md:grid-cols-2 md:p-6">
                  <div className="space-y-5">
                    {e.sections
                      .filter(
                        (s) =>
                          !/(ihc|immuno|molecular|differential)/i.test(s.title),
                      )
                      .map((s) => (
                        <div key={s.title}>
                          <h4 className="text-xs font-bold uppercase tracking-[.15em] text-rose-700">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-slate-800">
                            {s.text}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="space-y-5">
                    <div className="rounded-xl bg-sky-50 p-5">
                      <h4 className="text-xs font-bold uppercase tracking-[.15em] text-sky-800">
                        Immunohistochemistry / Molecular
                      </h4>
                      {e.sections
                        .filter((s) => /(ihc|immuno|molecular)/i.test(s.title))
                        .map((s) => (
                          <div key={s.title} className="mt-3">
                            <h5 className="text-sm font-semibold text-slate-900">
                              {s.title}
                            </h5>
                            <p className="mt-1 text-sm leading-7 text-slate-800">
                              {s.text}
                            </p>
                          </div>
                        ))}
                      {!e.sections.some((s) =>
                        /(ihc|immuno|molecular)/i.test(s.title),
                      ) && (
                        <p className="mt-2 text-sm text-slate-700">
                          Interpret targeted stains in the context of
                          morphology; no entity-specific panel is provided in
                          this entry.
                        </p>
                      )}
                    </div>
                    {e.sections
                      .filter((s) => /(differential)/i.test(s.title))
                      .map((s) => (
                        <div key={s.title}>
                          <h4 className="text-xs font-bold uppercase tracking-[.15em] text-emerald-700">
                            {s.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-slate-800">
                            {s.text}
                          </p>
                        </div>
                      ))}
                    {e.sections
                      .filter(
                        (s) =>
                          !/(differential)/i.test(s.title) &&
                          s.differential?.length,
                      )
                      .map((s) => (
                        <div key={s.title + "-ddx"}>
                          <h4 className="text-xs font-bold uppercase tracking-[.15em] text-emerald-700">
                            Differential Diagnosis
                          </h4>
                          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                            {s.differential?.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    {e.pearls && (
                      <div className="rounded-xl bg-amber-50 p-5">
                        <h4 className="text-xs font-bold uppercase tracking-[.15em] text-amber-800">
                          Diagnostic Pitfalls / Pearls
                        </h4>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-800">
                          {e.pearls.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
                No matching entity or feature. Try a broader search term.
              </p>
            )}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Core IHC Panels by Diagnostic Question
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              {[
                [
                  "Endometrioid vs serous",
                  "ER/PR, p53, p16, MMR; consider PTEN and ARID1A in context.",
                ],
                [
                  "Clear cell vs endometrioid",
                  "Napsin A and AMACR with ER/PR; integrate tubulocystic/papillary architecture.",
                ],
                [
                  "Mesonephric-like carcinoma",
                  "GATA3, TTF1, CD10 (apical), PAX8, ER/PR, p53, MMR.",
                ],
                [
                  "Undifferentiated component",
                  "Use multiple epithelial markers (e.g., CK8/18, EMA); ER/PR, E-cadherin, PAX8; BRG1, INI1, ARID1A/ARID1B; MMR.",
                ],
                [
                  "EIN support",
                  "PAX2, PTEN, β-catenin; morphology remains decisive.",
                ],
              ].map(([h, t]) => (
                <div
                  key={h}
                  className="border-b border-slate-100 pb-3 last:border-0"
                >
                  <b className="text-slate-900">{h}</b>
                  <p className="mt-1 leading-6 text-slate-600">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Reporting & Sampling Checklist
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {[
                "Document histotype and FIGO grade where applicable.",
                "Assess depth and pattern of myometrial invasion; identify cervical stromal and serosal involvement.",
                "Report LVSI and distinguish focal from substantial/extensive involvement; avoid retraction/displacement artifacts.",
                "For mixed carcinoma, list each qualifying histotype and estimate its percentage.",
                "For dedifferentiated carcinoma, identify and describe both differentiated and undifferentiated components.",
                "Perform the molecular classifier (POLE, MMR, p53, NSMP) according to institutional protocol and clinical context.",
                "Consider HER2 testing in appropriate serous or p53-abnormal high-stage/recurrent tumors.",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-teal-700">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <footer className="mt-12 border-t border-slate-200 py-7 text-xs leading-6 text-slate-500">
          PathologyGPS educational reference. Diagnostic interpretation should
          integrate morphology, immunohistochemistry, molecular findings,
          clinical information, and current institutional guidelines. This page
          is a decision-support aid and does not replace professional judgment.
        </footer>
      </div>
    </main>
  );
}
