"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
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
  prognosis: string[];
};

const entities: Entity[] = [
  {
    name: "Soft Tissue Chondroma",
    group: "Benign chondro-osseous tumors",
    behavior:
      "Benign; local recurrence is reported in approximately 15–20% after marginal excision",
    site: "Approximately 80% occur in the region of the fingers. Other common sites include the hands, toes, and feet; trunk and head and neck are uncommon.",
    clinical: [
      "Usually a solitary, painless, firm, slowly enlarging mass.",
      "Most patients are adults aged 30–60 years (median 34.5 years); men are affected more often than women (M:F approximately 1.5:1).",
      "Radiographs typically show a well-demarcated soft-tissue mass separated from bone, with spiculated or ring-like calcifications. Cartilage is bright on T2-weighted MRI.",
      "Rare locations reported in the skin, lip, and dura.",
    ],
    criteria: [
      "Essential: a soft-tissue mass composed of nodules of well-delineated cartilage.",
      "The cartilaginous matrix is hyaline or myxoid and may show calcification.",
      "Chondrocytes show limited atypia and little mitotic activity.",
      "Establish the extraosseous and extrasynovial location; imaging should demonstrate separation from adjacent bone.",
    ],
    morphology: [
      "Grossly, a well-circumscribed, nodular, solid, greyish-bluish-white mass, sometimes with focal myxoid areas; most are smaller than 30 mm.",
      "Microscopy shows lobules of well-formed hyaline cartilage delineated by fibrous septa.",
      "Cartilage is often hypercellular. Chondrocytes occur in clusters within lacunar spaces or may appear to float in a flocculent myxoid matrix.",
      "Nuclei are usually small, round, and dark. Larger nuclei with fine or coarse chromatin, small nucleoli, and mild-to-moderate pleomorphism may occur; these changes should be interpreted with the overall bland architecture and limited mitotic activity.",
      "Coarse calcification and endochondral ossification may be present. Chondrocytes in mineralized areas may undergo necrosis; heavily calcified lesions may contain histiocytes that obscure the underlying cartilage.",
      "A chondroblastoma-like pattern is hypercellular, with grooved or cleaved nuclei and moderate eosinophilic cytoplasm. Grungy calcification may surround individual chondrocytes and mimic chondroblastoma.",
      "Calcium pyrophosphate dihydrate crystals may be present in a subset. Mitotic activity is limited.",
    ],
    ihc: [
      "The supplied WHO excerpt does not specify a defining immunohistochemical profile.",
      "Do not invent a marker-based diagnosis: the diagnosis rests on the extraosseous location and characteristic lobulated hyaline cartilage with limited atypia and mitotic activity.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant according to the supplied WHO excerpt.",
      "Limited cytogenetic studies have reported heterogeneous abnormalities, including 12q13–q15 rearrangements and trisomy 5; HMGA2 transcripts have been identified in a subset with 12q13–q15 rearrangements.",
      "Approximately half of cases, particularly those with a chondroblastoma-like pattern, have been reported to harbor FN1 rearrangements with FGFR1 or FGFR2 fusion partners; PDGFRA fusions have also been reported.",
      "These reported alterations are pathogenetic observations, not required diagnostic tests.",
    ],
    differential: [
      [
        "Chondroblastoma-like soft tissue chondroma vs chondroblastoma",
        "The chondroblastoma-like pattern can show grooved/cleaved nuclei and pericellular grungy calcification. Correlate with imaging and anatomic location: soft tissue chondroma is extraosseous and extrasynovial, whereas the supplied excerpt describes the mimicry but does not provide a complete bone-tumor differential panel.",
      ],
      [
        "Heavily calcified soft tissue chondroma vs a nonspecific calcified mass",
        "Extensive mineralization, chondrocyte necrosis, and histiocytic infiltrates can obscure the cartilage. Search for residual lobules of hyaline cartilage and fibrous septa.",
      ],
      [
        "Soft tissue chondroma vs malignant cartilaginous lesion",
        "The expected pattern is well-delineated cartilage nodules, limited cytologic atypia, and little mitotic activity. The supplied excerpt does not provide formal criteria for extraskeletal chondrosarcoma; do not overcall malignancy from hypercellularity or focal nuclear variation alone.",
      ],
    ],
    pitfalls: [
      "Do not mistake hypercellularity or mild-to-moderate nuclear pleomorphism alone for malignancy; integrate lobular architecture, limited atypia, and low mitotic activity.",
      "The chondroblastoma-like variant may be misleading because of grooved nuclei and grungy pericellular calcification.",
      "Heavy calcification can produce necrotic chondrocytes and a histiocytic infiltrate that obscures the cartilaginous nature of the lesion.",
      "Confirm that the lesion is separate from bone and is extrasynovial; imaging correlation is important.",
      "Molecular alterations reported in small series are not clinically required for diagnosis.",
    ],
    prognosis: [
      "Treatment is marginal excision.",
      "The reported recurrence rate is approximately 15–20%.",
      "The supplied WHO excerpt does not describe metastatic behavior.",
    ],
  },
  {
    name: "Extraskeletal Osteosarcoma",
    group: "Malignant chondro-osseous tumors",
    behavior:
      "High-grade malignant neoplasm; prognosis is substantially influenced by metastatic status, size, site, and completeness of resection",
    site: "Usually a deep soft-tissue mass, most often in the limbs and particularly the lower extremity. Other frequent sites include buttock, shoulder, trunk, and retroperitoneum; dermal or subcutaneous origin is occasional.",
    clinical: [
      "Usually presents as a progressively enlarging mass, sometimes painful; some patients have lung metastases at presentation.",
      "Typically occurs in midlife or later adulthood, most often between 50 and 60 years, although the reported age range is wide (12–90 years); pediatric cases are uncommon.",
      "Accounts for less than 1% of soft-tissue sarcomas and approximately 5% of osteosarcomas. No clear sex predilection is established.",
      "Imaging generally shows a large, deep soft-tissue mass with variable mineralization and heterogeneous post-contrast enhancement.",
      "By definition, the tumor does not arise from bone and does not represent metastasis from a skeletal osteosarcoma, although secondary involvement of bone may occur.",
      "Most cases arise de novo; approximately 5–10% are associated with previous radiation.",
    ],
    criteria: [
      "Essential: malignant cells are directly associated with neoplastic bone/osteoid produced by the tumor.",
      "The tumor must have no connection to the skeletal system at origin.",
      "Exclude osteoblastic/osteogenic differentiation occurring as a heterologous component of another tumor.",
      "There is no minimum amount of neoplastic bone required, but the osteoid/bone must be convincingly neoplastic and intimately associated with malignant tumor cells.",
    ],
    morphology: [
      "Grossly, tumors range from 10 to 500 mm (mean approximately 80–100 mm) and may be circumscribed, tan-white, hemorrhagic, and necrotic. Mineralization ranges from gritty foci to heavily formed bone; extensive hemorrhagic cystic change occurs in a minority.",
      "The histology spans the patterns recognized in conventional skeletal osteosarcoma. Osteoblastic morphology is most common; chondroblastic and fibroblastic patterns also occur.",
      "Tumor cells may be spindle, polygonal, epithelioid, plasmacytoid, or markedly anaplastic. Mitotic activity is typically brisk, and atypical mitoses may be present; tumor necrosis is common.",
      "The defining feature is neoplastic bone intimately associated with malignant cells. Deposition may be lace-like, ribbon-like, trabecular, or sheet-like.",
      "In some tumors, bone is more prominent centrally while densely cellular tumor is peripheral. This is the reverse of the zonal pattern described for myositis ossificans.",
      "Distinguish true neoplastic osteoid/bone from fibrillary collagen deposition (pseudo-osteoid).",
      "Rare well-differentiated examples show abundant well-formed trabecular bone surrounded by a minimally atypical spindle-cell component resembling parosteal or low-grade central osteosarcoma; high-grade transformation/dedifferentiation has rarely been reported.",
    ],
    ihc: [
      "SATB2 immunoreactivity may help identify osteoblastic differentiation when bone is difficult to distinguish from collagenous stroma.",
      "SATB2 is not specific. It supports osteoblastic differentiation but cannot establish extraskeletal osteosarcoma independently.",
      "MDM2 expression may occur in rare well-differentiated examples, similar to parosteal and low-grade central osteosarcoma; MDM2 amplification in low-grade extraskeletal osteosarcoma has been reported rarely and inconsistently.",
      "The supplied WHO excerpt does not define a comprehensive immunohistochemical panel. Use morphology, imaging, and exclusion of another primary tumor as the diagnostic foundation.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant according to the supplied WHO excerpt.",
      "High-grade tumors show clonal, highly complex chromosomal aberrations.",
      "Reported genomic changes include losses involving CDKN2A, TP53, RB1, PTEN, NF1, and LSAMP; gains/amplifications involving RUNX2, CDC5L, COPS3, EGFR, MDM2, CDK4, and PMP22; and mutations in multiple tumor-suppressor, chromatin-remodeling, histone-modifying, WNT/β-catenin, and sonic hedgehog pathway genes.",
      "TERT promoter and PIK3CA mutations have also been reported. Genomic profiles overlap with conventional skeletal osteosarcoma and undifferentiated pleomorphic sarcoma.",
      "Rare MDM2 amplification in low-grade examples is not a consistent defining finding and should not be used as a stand-alone diagnostic criterion.",
    ],
    differential: [
      [
        "Myositis ossificans",
        "The supplied WHO excerpt highlights a reverse zonation pattern: extraskeletal osteosarcoma may have more prominent bone centrally and densely cellular tumor peripherally, the reverse of myositis ossificans. Evaluate the architecture and the intimate association of malignant cells with neoplastic osteoid.",
      ],
      [
        "Pseudo-osteoid / collagen deposition",
        "Fibrillary collagen may mimic osteoid. Confirm genuine neoplastic bone/osteoid intimately associated with malignant cells; SATB2 may assist in recognizing osteoblastic differentiation but is not specific.",
      ],
      [
        "Skeletal osteosarcoma with soft-tissue extension or metastasis",
        "Extraskeletal osteosarcoma requires no skeletal connection at origin and must not represent metastasis from an underlying skeletal osteosarcoma. Correlate with imaging and clinical history.",
      ],
      [
        "Heterologous osteoblastic differentiation in another tumor",
        "Exclude osteoblastic differentiation as a heterologous component of another neoplasm; this exclusion is part of the essential diagnostic criteria.",
      ],
      [
        "Well-differentiated extraskeletal osteosarcoma vs parosteal/low-grade central osteosarcoma",
        "Rare extraskeletal examples may resemble these low-grade skeletal osteosarcomas, with abundant trabecular bone and minimally atypical spindle cells. Establish the extraosseous origin and absence of skeletal attachment; MDM2 expression is not by itself decisive.",
      ],
    ],
    pitfalls: [
      "Do not diagnose extraskeletal osteosarcoma merely because a soft-tissue tumor contains calcification or bone; malignant cells must be intimately associated with neoplastic osteoid/bone.",
      "Do not mistake fibrillary collagen (pseudo-osteoid) for true osteoid.",
      "There is no minimum quantity of neoplastic bone required, but its authenticity and association with malignant cells are essential.",
      "Do not overlook the requirement to exclude a skeletal primary, metastasis, or secondary extension from bone.",
      "SATB2 is supportive for osteoblastic differentiation but is not specific and cannot replace morphologic assessment.",
      "Remember the reverse central-to-peripheral distribution relative to myositis ossificans described in some cases.",
      "Do not use rare MDM2 expression/amplification as a general defining feature of extraskeletal osteosarcoma.",
    ],
    prognosis: [
      "In non-metastatic patients undergoing complete resection, reported 5-year overall survival is approximately 37–66%; reported 5-year disease-free survival is approximately 43–82%.",
      "Adverse or significant prognostic variables identified in multivariable analyses include older age, larger tumor size, positive surgical margins, axial site, metastasis, and chemotherapy status.",
      "Simultaneous TP53 and RB1 copy-number losses or CDKN2A loss have been associated with worse overall survival and/or local recurrence in reported studies.",
      "UICC/AJCC TNM staging can be applied.",
    ],
  },
];

const groups = [
  "All",
  "Benign chondro-osseous tumors",
  "Malignant chondro-osseous tumors",
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
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ChondroOsseousTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Soft Tissue Chondroma",
    "Extraskeletal Osteosarcoma",
  ]);

  const filtered = useMemo(
    () =>
      entities.filter(
        (entity) =>
          (category === "All" || entity.group === category) &&
          [
            entity.name,
            entity.group,
            entity.behavior,
            entity.site,
            ...entity.clinical,
            ...entity.criteria,
            ...entity.morphology,
            ...entity.ihc,
            ...entity.molecular,
            ...entity.differential.flat(),
            ...entity.pitfalls,
            ...entity.prognosis,
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
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Soft Tissue Tumors / Chondro-osseous Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Chondro-osseous Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference focused on the
                distinction between benign soft tissue chondroma and malignant
                extraskeletal osteosarcoma, with emphasis on essential criteria,
                osteoid recognition, and exclusion of skeletal origin.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Cartilage nodules with limited atypia favor soft tissue
                chondroma; malignant cells producing true osteoid define
                extraskeletal osteosarcoma.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For extraskeletal osteosarcoma, prove the osteoid is neoplastic,
                intimately associated with malignant cells, and not arising from
                or representing spread from bone.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: morphology to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the compartment",
                "Confirm a soft-tissue-centered lesion. For chondroma, document separation from bone and extrasynovial location; for osteosarcoma, exclude skeletal origin.",
              ],
              [
                "2. Identify the matrix",
                "Determine whether the lesion contains lobulated hyaline/myxoid cartilage or true neoplastic osteoid/bone. Do not equate calcification or collagen with osteoid.",
              ],
              [
                "3. Assess cytology and growth",
                "Soft tissue chondroma usually has well-delineated cartilage nodules, limited atypia, and little mitotic activity. Extraskeletal osteosarcoma shows malignant cells, brisk mitoses, and often necrosis.",
              ],
              [
                "4. Test the critical distinction",
                "In suspected osteosarcoma, establish intimate association between malignant cells and neoplastic osteoid; distinguish pseudo-osteoid and consider the zonal pattern relative to myositis ossificans.",
              ],
              [
                "5. Correlate and report",
                "Use imaging to assess bone connection, primary skeletal disease, and mineralization. SATB2 may support osteoblastic differentiation but is not specific.",
              ],
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{step[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield essential diagnostic criteria">
            <Bullets
              items={[
                "Soft tissue chondroma: well-delineated cartilage nodules; hyaline or myxoid matrix, sometimes calcified; limited chondrocytic atypia and little mitotic activity.",
                "Extraskeletal osteosarcoma: malignant cells intimately associated with neoplastic bone/osteoid; no skeletal connection at origin; exclude heterologous osteoblastic differentiation in another tumor.",
                "No minimum amount of neoplastic bone is required for extraskeletal osteosarcoma, but the matrix must be genuine neoplastic osteoid/bone.",
                "SATB2 can help identify osteoblastic differentiation when osteoid is difficult to distinguish from collagen, but it is not specific.",
              ]}
            />
          </Panel>
          <Panel title="Critical distinction">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">Soft tissue chondroma</th>
                    <th className="py-2">Extraskeletal osteosarcoma</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Biology", "Benign", "Malignant"],
                    [
                      "Typical setting",
                      "Digits / hands; adults 30–60",
                      "Deep soft tissue; usually age 50–60",
                    ],
                    [
                      "Matrix",
                      "Hyaline or myxoid cartilage",
                      "Neoplastic osteoid / bone",
                    ],
                    [
                      "Architecture",
                      "Well-delineated cartilage lobules",
                      "Variable osteoblastic, chondroblastic, or fibroblastic pattern",
                    ],
                    [
                      "Cytology",
                      "Limited atypia; low mitotic activity",
                      "Malignant cells; usually brisk mitoses",
                    ],
                    [
                      "Necrosis",
                      "May affect chondrocytes in calcified areas",
                      "Tumor necrosis common",
                    ],
                    [
                      "Key exclusion",
                      "Bone connection / synovial origin",
                      "Skeletal primary, metastasis, or secondary extension",
                    ],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 pr-3 text-slate-700">{row[1]}</td>
                      <td className="py-2 text-slate-700">{row[2]}</td>
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
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by morphology, matrix, site, immunomarker, or diagnostic
                pitfall.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. osteoid, SATB2, pseudo-osteoid, grungy calcification..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((group) => (
              <button
                key={group}
                onClick={() => setCategory(group)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  category === group
                    ? "bg-teal-700 text-white"
                    : "border border-slate-300 bg-white text-slate-600"
                }`}
              >
                {group}
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
                          {entity.group}
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
                      {isOpen ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={entity.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={entity.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={entity.morphology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={entity.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={entity.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[650px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map((item, index) => (
                                <tr key={index}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {item[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {item[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Prognosis and behavior
                        </h4>
                        <Bullets items={entity.prognosis} />
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic pitfalls
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

        <Panel title="Differential diagnosis: practical decision points">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Diagnostic problem</th>
                  <th className="py-2 pr-3">Key discriminating feature</th>
                  <th className="py-2">Practical next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Calcified digital soft-tissue mass",
                    "Well-delineated lobules of hyaline cartilage, limited atypia, low mitotic activity",
                    "Correlate with imaging to confirm separation from bone and extrasynovial location",
                  ],
                  [
                    "Chondroblastoma-like chondroma",
                    "Grooved/cleaved nuclei and grungy pericellular calcification may mimic chondroblastoma",
                    "Reassess the anatomic compartment and search for the characteristic soft-tissue cartilage lobules",
                  ],
                  [
                    "Soft-tissue mass with mineralization and atypical cells",
                    "True osteoid must be intimately associated with malignant cells",
                    "Distinguish osteoid from fibrillary collagen; SATB2 may assist but is not specific",
                  ],
                  [
                    "Osteoid-forming soft-tissue malignancy",
                    "Extraskeletal osteosarcoma requires no skeletal connection at origin",
                    "Review imaging/history to exclude skeletal primary, metastasis, and secondary extension",
                  ],
                  [
                    "Ossifying lesion with central bone",
                    "Extraskeletal osteosarcoma may show central bone and peripheral cellular tumor, reverse of myositis ossificans",
                    "Evaluate zonation and the cytologic malignancy of the cellular component",
                  ],
                  [
                    "Osteoid in a tumor with another line of differentiation",
                    "Heterologous osteoblastic differentiation in another neoplasm must be excluded",
                    "Classify the primary neoplasm before diagnosing extraskeletal osteosarcoma",
                  ],
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-3 pr-3 font-semibold">{row[0]}</td>
                    <td className="py-3 pr-3 text-slate-700">{row[1]}</td>
                    <td className="py-3 text-slate-700">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Reporting checklist">
          <Bullets
            items={[
              "Record the precise soft-tissue site, depth, size, and relationship to adjacent bone and joint/synovium.",
              "For soft tissue chondroma, describe lobular cartilage architecture, matrix type, calcification/ossification, cytologic atypia, and mitotic activity.",
              "For extraskeletal osteosarcoma, document malignant cell morphology, osteoid/bone pattern, necrosis, mitotic activity, and the intimate association of malignant cells with neoplastic matrix.",
              "State that imaging/clinical correlation excludes a skeletal primary, metastatic osteosarcoma, and secondary extension from bone.",
              "If SATB2 is used, interpret it as supportive but nonspecific evidence of osteoblastic differentiation.",
              "For extraskeletal osteosarcoma, report margin status and relevant staging information; UICC/AJCC TNM staging can be applied.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <strong className="text-slate-700">Scope note:</strong> This reference
          is based on the supplied WHO excerpt for soft tissue chondroma and
          extraskeletal osteosarcoma. The excerpt does not provide a
          comprehensive immunohistochemical differential panel for all mimics;
          unprovided marker profiles and diagnostic criteria have therefore not
          been added.
        </footer>
      </div>
    </main>
  );
}
