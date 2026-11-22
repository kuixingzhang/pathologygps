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
    name: "Tenosynovial giant cell tumor (TGCT)",
    group: "Benign / malignant variant",
    behavior:
      "Localized and diffuse forms are benign but may recur; rare malignant TGCT is aggressive",
    site: "Localized: fingers (≈85%), tendon sheath/interphalangeal joint. Diffuse: knee (≈75%), then hip/ankle. Extra-articular lesions: knee, thigh, foot.",
    clinical: [
      "Localized: Slowly growing, usually painless mass; typically age 30–50 years; female predominance.",
      "Diffuse: Pain, swelling, tenderness, restricted motion, and often hemorrhagic effusion; usually young adults under 40; slight female predominance.",
      "Rare malignant TGCT: Usually adults aged 50–60 years; lower limb, especially knee.",
    ],
    morphology: [
      "Variable admixture of small histiocyte-like cells, larger epithelioid synoviocytes, osteoclast-like giant cells, foamy macrophages, inflammatory cells, and hemosiderin.",
      "Localized: Circumscribed, lobulated architecture; giant cells and xanthoma cells are often conspicuous; hemosiderin is virtually always present; stromal hyalinization varies.",
      "Diffuse: Infiltrative, expansile sheets; giant cells may be sparse or absent; cleft-like spaces are common; blood-filled pseudoalveolar spaces occur in a minority.",
      "Malignant TGCT: Enlarged atypical mononuclear cells, increased mitoses including atypical forms, necrosis, nuclear enlargement/nucleoli, spindle-cell areas, and sometimes myxoid change.",
    ],
    ihc: [
      "Larger mononuclear synoviocytic cells: Clusterin positive; a subset expresses desmin.",
      "Smaller histiocyte-like cells: CD68, CD163, and CD45 positive.",
      "Desmin highlights dendritic processes in a subset; expression is variable.",
    ],
    molecular: [
      "CSF1 rearrangements occur in approximately 75% of cases; diverse fusion partners are reported.",
      "Only a small neoplastic cell population carries the rearrangement; recruited macrophages form most of the tumor bulk.",
      "Molecular testing is not routinely clinically required in typical cases.",
    ],
    differential: [
      [
        "Giant cell tumor of soft tissue",
        "TGCT is synovial/tendon-sheath centered and hemosiderin-rich; soft-tissue GCT is usually superficial, multinodular, and lacks the characteristic synovial context.",
      ],
      [
        "Keratin-positive giant cell–rich tumor",
        "KPGCT contains keratin-positive mononuclear cells and often a lymphoid cuff; TGCT shows synoviocytic/histiocytic populations with CSF1-associated biology.",
      ],
      [
        "Malignant TGCT versus sarcoma",
        "Do not equate brisk mitoses alone with malignancy; malignant diagnosis requires overt malignant morphology in a conventional TGCT or sarcomatous recurrence.",
      ],
    ],
    pitfalls: [
      "Localized and diffuse TGCT differ in site, architecture, and recurrence risk.",
      "Brisk mitotic activity and occasional necrosis may occur in otherwise conventional TGCT; assess cytologic atypia and atypical mitoses.",
      "Avoid the outdated term pigmented villonodular synovitis; use diffuse-type TGCT when appropriate.",
    ],
    prognosis: [
      "Localized: Recurrence approximately 4–30%, usually manageable by re-excision.",
      "Diffuse: Recurrence approximately 40–60%; repeated recurrence may severely impair joint function.",
      "Malignant TGCT: Aggressive; about one third mortality in reported cases, with nodal and lung metastases.",
    ],
    criteria: [
      "Variable proportions of small histiocyte-like cells, larger epithelioid synoviocytes, foamy macrophages, and multinucleated giant cells.",
      "Hemosiderin deposition and variable stromal collagenization.",
      "Malignant TGCT requires overt malignant areas in a conventional TGCT or sarcomatous recurrence.",
    ],
  },
  {
    name: "Chondroid synoviocytic neoplasm",
    group: "Locally aggressive",
    behavior:
      "May recur or persist if incompletely excised; metastases have not been reported",
    site: "Temporomandibular joint/temporal bone region in nearly 80%; rare cases in hip, knee, thumb, and spine.",
    clinical: [
      "Rare; reported age range 17–75 years, mean/median approximately 50 years; no sex predilection.",
      "TMJ-region lesions present as expansile, locally aggressive masses; other sites usually present as nonspecific soft-tissue masses.",
      "Imaging may show a lytic/expansile lesion, often bone-centered, with calcified matrix on CT.",
    ],
    morphology: [
      "Multinodular tumor with large eosinophilic synoviocytes, small histiocytes, foamy macrophages, siderophages, and osteoclast-like giant cells.",
      "Prominent cellular nodules/sheets of synoviocytes admixed with lobules of myxohyaline cartilage.",
      "Pericellular (chondroblastoma-like) calcification or calcium pyrophosphate dihydrate deposits may occur.",
      "Mitotic activity is usually low; high-grade atypia is absent.",
    ],
    ihc: [
      "Clusterin highlights synoviocytes within and outside the chondroid matrix.",
      "CSF1 mRNA may be detected in synoviocytes by chromogenic in situ hybridization.",
    ],
    molecular: [
      "FN1 fusions are frequent, most often with FGFR2; other partners include TEK, FGFR1, PRG4, PLAG1, MERTK, NTRK1, BMPR2, AGFG1, and MALAT1.",
      "Other reported fusions include PDGFRA::USP8; rare cases have TIMP3::ZCCHC7 or CSF1::COL6A3.",
      "FN1 break-apart FISH can be used; RNA-based next-generation sequencing better identifies the fusion partner.",
    ],
    differential: [
      [
        "Synovial chondromatosis",
        "Chondroid synoviocytic neoplasm has prominent cellular synoviocytic nodules admixed with histiocytes/giant cells; synovial chondromatosis is dominated by cartilaginous nodules.",
      ],
      [
        "Soft-tissue chondroma",
        "Chondroid synoviocytic neoplasm shows synoviocytic and histiocytic components, giant cells, and often an FN1 fusion.",
      ],
      [
        "Tenosynovial giant cell tumor",
        "Chondroid matrix/lobules are a defining additional component in chondroid synoviocytic neoplasm.",
      ],
      [
        "Chondroblastoma-like calcification / tumoral pseudogout",
        "Look for the underlying synoviocytic neoplasm and cartilage; extensive CPPD may mimic pseudogout.",
      ],
    ],
    pitfalls: [
      "High cellularity, synoviocytic overgrowth, atypia, or mitotic activity may be alarming but do not alone establish malignancy.",
      "Do not mistake chondroid matrix or CPPD deposits for a separate cartilage-forming neoplasm.",
    ],
    prognosis: [
      "Locally aggressive at most; local recurrence or persistence may follow incomplete excision.",
      "Metastatic disease has not been reported in the supplied source.",
    ],
    criteria: [
      "Multinodular proliferation of large eosinophilic, moderately pleomorphic synoviocytes.",
      "Chondroid/myxohyaline cartilage and calcified matrix with histiocytes, osteoclast-like giant cells, and foamy macrophages.",
      "Clusterin expression is supportive in selected cases.",
    ],
  },
  {
    name: "Plexiform fibrohistiocytic tumor",
    group: "Intermediate",
    behavior: "Intermediate; local recurrence and rare metastasis",
    site: "Superficial dermis/subcutis, especially upper extremities; lower extremities next. Trunk and head/neck less common.",
    clinical: [
      "Usually children and young adults; median age approximately 14.5–20 years; slight female predominance in most series.",
      "Slow-growing, poorly defined plaque or nodule, typically 1–3 cm.",
    ],
    morphology: [
      "Infiltrative lesion with plexiform architecture at the dermal–subcutaneous junction.",
      "Biphasic pattern: nodules of histiocytoid cells and osteoclast-like giant cells surrounded by fascicles of spindle cells.",
      "Hemorrhage, hemosiderin, and chronic inflammatory infiltrates may be present.",
      "Mitotic activity is generally low; necrosis is absent. Atypia and lymphovascular invasion are rare.",
    ],
    ihc: [
      "Spindle cells express SMA.",
      "Histiocytes in plexiform nodules express CD163 and CD11c.",
      "CSF1 mRNA may be detected in interspersed round cells by chromogenic in situ hybridization.",
    ],
    molecular: [
      "No recurrent defining molecular alteration is established.",
      "Molecular testing is not clinically relevant in routine diagnosis.",
    ],
    differential: [
      [
        "Giant cell tumor of soft tissue",
        "Plexiform fibrohistiocytic tumor has characteristic plexiform architecture and biphasic histology; soft-tissue GCT is more uniformly multinodular and giant-cell rich.",
      ],
      [
        "Tenosynovial giant cell tumor",
        "Plexiform fibrohistiocytic tumor is a superficial dermal/subcutaneous lesion with spindle-cell fascicles and plexiform nodules.",
      ],
      [
        "Dermatofibroma / other fibrohistiocytic lesions",
        "The plexiform architecture and biphasic histiocytoid/giant-cell plus spindle-cell pattern are key.",
      ],
    ],
    pitfalls: [
      "Lymphovascular invasion and cytologic atypia are uncommon but can occur.",
      "A small biopsy may not show the full plexiform architecture; correlate with the infiltrative superficial growth pattern.",
    ],
    prognosis: [
      "Local recurrence: approximately 12.5–37.5%.",
      "Regional lymph-node metastasis: approximately 6%; lung metastasis is exceptional.",
    ],
    criteria: [
      "Plexiform architecture involving dermis and/or subcutis.",
      "Biphasic composition of histiocytoid/giant-cell nodules and interspersed myofibroblastic spindle-cell fascicles.",
    ],
  },
  {
    name: "Giant cell tumor of soft tissue",
    group: "Intermediate",
    behavior: "Intermediate; local recurrence with very rare metastasis",
    site: "Usually superficial soft tissues of upper/lower extremities (≈70%); trunk (≈20%) and head/neck (≈7%) less often.",
    clinical: [
      "Rare; predominantly fifth decade, but reported age range 5–89 years; no clear sex predilection.",
      "Usually a painless enlarging mass; average symptom duration approximately 6 months.",
      "Peripheral mineralization is common.",
    ],
    morphology: [
      "Well-circumscribed, multinodular superficial soft-tissue neoplasm; fibrous septa separate cellular nodules.",
      "Nodules contain round-to-oval mononuclear cells and numerous osteoclast-like multinucleated giant cells in a richly vascular stroma.",
      "Mitotic activity is readily seen, but nuclear pleomorphism and bizarre giant cells are absent; necrosis is rare.",
      "Metaplastic bone formation occurs in approximately 50%, often as a peripheral shell of woven bone; vascular invasion may be present.",
      "Lacks the peripheral lymphoid aggregates and keratin expression characteristic of keratin-positive giant cell–rich tumor.",
    ],
    ihc: [
      "Keratin is negative; this helps distinguish keratin-positive giant cell–rich tumor.",
      "The supplied source does not define a specific positive immunophenotype.",
    ],
    molecular: [
      "H3-3A variants typical of most giant cell tumors of bone are absent.",
      "HMGA2::NCOR2 fusion, characteristic of keratin-positive giant cell–rich tumor, is not present.",
    ],
    differential: [
      [
        "Giant cell tumor of bone",
        "Soft-tissue GCT is superficial and multinodular, often with peripheral metaplastic bone; bone GCT is an osseous-centered lesion and commonly has H3-3A alterations.",
      ],
      [
        "Keratin-positive giant cell–rich tumor",
        "KPGCT has keratin-positive mononuclear cells and often peripheral lymphoid aggregates; soft-tissue GCT is keratin-negative.",
      ],
      [
        "Tenosynovial giant cell tumor",
        "TGCT is centered on synovium/tendon sheath and typically contains hemosiderin-rich synoviocytic/histiocytic populations.",
      ],
    ],
    pitfalls: [
      "Mitotic activity alone is not evidence of malignancy; atypia, bizarre giant cells, and necrosis are generally absent.",
      "Peripheral bone formation and vascular invasion can occur in this intermediate neoplasm.",
    ],
    prognosis: ["Local recurrence approximately 12%; metastasis is very rare."],
    criteria: [
      "Multinodular superficial soft-tissue neoplasm with histiocytoid mononuclear cells and osteoclast-like giant cells.",
      "Metaplastic bone formation is common.",
      "Absence of keratin expression.",
    ],
  },
  {
    name: "Keratin-positive giant cell–rich tumor (KPGCT)",
    group: "Intermediate / uncertain lineage",
    behavior:
      "Usually indolent; local recurrence and rare distant metastasis reported",
    site: "Subcutis and bone. Soft-tissue sites include trunk, extremities, and head/neck; rare deep, sinonasal, vocal-cord, and cranial-fossa lesions.",
    clinical: [
      "Most common in young adults; median age approximately 25 years, with a wide age range; pronounced female predominance (≈72%).",
      "Soft-tissue lesions are usually asymptomatic solid masses; some are painful or grow rapidly.",
      "Osseous lesions are typically lytic intramedullary masses, sometimes with a soft-tissue component.",
    ],
    morphology: [
      "Nodular polymorphous population of mononuclear cells/histiocytes, mixed inflammatory cells, and Touton-type and osteoclast-type giant cells.",
      "Soft-tissue lesions often have a peripheral pseudocapsule with lymphoid cuff/aggregates; hemosiderin, microhemorrhage, and intratumoral lymphoid aggregates are common.",
      "Mononuclear cells may have bright eosinophilic or plasmacytoid cytoplasm; giant-cell-rich, xanthomatous, and hybrid patterns occur.",
      "A subset shows storiform growth with few giant cells; most are cytologically bland, although moderate atypia may occur.",
      "Infarction is common; coagulative necrosis and vascular invasion are uncommon.",
    ],
    ihc: [
      "Keratin is variably positive in the mononuclear cell population; plasmacytoid cells may show a paranuclear dot-like pattern.",
      "H3.3 G34W is negative.",
      "SMARCB1 (INI1) expression is retained.",
    ],
    molecular: [
      "HMGA2::NCOR2 fusion occurs in most cases; rare HMGA2::COL14A1 has been reported.",
      "Fusion testing may support difficult or keratin-poor cases, but false-negative results occur with some methods.",
      "CSF1 expression may be increased without CSF1 gene alteration.",
    ],
    differential: [
      [
        "Giant cell tumor of soft tissue",
        "KPGCT has keratin-positive mononuclear cells and often a lymphoid cuff; soft-tissue GCT is keratin-negative.",
      ],
      [
        "Tenosynovial giant cell tumor",
        "TGCT is synovium/tendon-sheath centered and commonly hemosiderin-rich; KPGCT is a polymorphous keratin-positive giant-cell/histiocytic neoplasm.",
      ],
      [
        "Xanthogranulomatous epithelial tumor",
        "This term is an acceptable synonym/pattern when the xanthomatous component predominates; it is within the KPGCT spectrum.",
      ],
      [
        "Giant cell tumor of bone",
        "KPGCT is H3.3 G34W negative and may show HMGA2::NCOR2; bone GCT typically has H3-3A mutation-associated staining.",
      ],
    ],
    pitfalls: [
      "Keratin may be focal or limited to a small mononuclear-cell population; carefully search for positive cells.",
      "A negative HMGA2::NCOR2 assay does not exclude KPGCT because false negatives are reported.",
      "Do not confuse infarction with coagulative tumor necrosis.",
    ],
    prognosis: [
      "Most reported tumors behave indolently; local recurrence may occur.",
      "Distant metastases have been reported in two patients; no fatal outcome documented in the supplied source.",
    ],
    criteria: [
      "Polymorphous population of osteoclast-type/Touton giant cells, histiocytes, and inflammatory cells.",
      "Keratin-positive mononuclear cells.",
      "HMGA2::NCOR2 fusion is desirable in challenging or keratin-poor cases.",
    ],
  },
];

const groups = [
  "All",
  "Benign",
  "Locally aggressive",
  "Intermediate",
  "Intermediate / uncertain lineage",
  "Malignant",
];

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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

export default function FibrohistiocyticSynovialTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (entity) =>
          (group === "All" || entity.group === group) &&
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
    [query, group],
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
            PathologyGPS / Soft Tissue Tumors / Fibrohistiocytic and Synovial
            Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Fibrohistiocytic and Synovial Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing
                architecture, cellular composition, immunophenotype, molecular
                findings, and practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify giant-cell-rich lesions by their architecture, site,
                and defining cell population.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Giant cells alone are not diagnostic. Look for synovial
                association, plexiform growth, keratin-positive mononuclear
                cells, hemosiderin, and chondroid matrix.
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
                "Establish the setting",
                "Determine whether the lesion is synovial/tendon-sheath centered, superficial dermal/subcutaneous, or bone-associated.",
              ],
              [
                "Assess architecture",
                "Look for localized nodules, diffuse sheets, plexiform growth, multinodular septated growth, or chondroid lobules.",
              ],
              [
                "Identify the cell populations",
                "Separate synoviocytes, histiocytes, spindle cells, osteoclast-like giant cells, Touton giant cells, and inflammatory cells.",
              ],
              [
                "Apply targeted IHC",
                "Use clusterin, CD68/CD163, SMA, and keratins in the morphologic context; keratin-positive mononuclear cells are a key clue to KPGCT.",
              ],
              [
                "Use molecular tests selectively",
                "CSF1 rearrangement may support TGCT; FN1 fusions support chondroid synoviocytic neoplasm; HMGA2::NCOR2 supports KPGCT.",
              ],
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900">{step[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Behavior categories">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Benign, recurrence-prone:</b> Conventional localized and
                diffuse TGCT; recurrence risk is substantially higher in diffuse
                disease.
              </p>
              <p>
                <b>Locally aggressive:</b> Chondroid synoviocytic neoplasm;
                local recurrence or persistence may follow incomplete excision,
                but metastases have not been reported.
              </p>
              <p>
                <b>Intermediate, rarely metastasizing:</b> Plexiform
                fibrohistiocytic tumor and giant cell tumor of soft tissue.
              </p>
              <p>
                <b>Uncertain lineage, usually indolent:</b> KPGCT; local
                recurrence and rare distant metastases have been reported.
              </p>
              <p>
                <b>Malignant:</b> Malignant TGCT is exceptionally rare and
                should be diagnosed only when overt malignant morphology is
                present.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield ancillary findings">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "TGCT",
                      "CSF1 rearrangement in approximately 75%; clusterin in larger synoviocytic cells",
                    ],
                    [
                      "Chondroid synoviocytic neoplasm",
                      "FN1 fusion, often with FGFR2; clusterin",
                    ],
                    [
                      "Plexiform fibrohistiocytic tumor",
                      "SMA in spindle cells; CD163/CD11c in histiocytes",
                    ],
                    [
                      "Giant cell tumor of soft tissue",
                      "Keratin negative; lacks typical H3-3A variants",
                    ],
                    [
                      "KPGCT",
                      "Keratin-positive mononuclear cells; HMGA2::NCOR2 in most cases",
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
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunostain, or gene.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. CSF1, clusterin, keratin, giant cells..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((item) => (
              <button
                key={item}
                onClick={() => setGroup(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  group === item
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
                    <div className="grid gap-5 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <Panel title="Clinical profile">
                        <Bullets items={entity.clinical} />
                      </Panel>
                      <Panel title="Essential diagnostic criteria">
                        <Bullets items={entity.criteria} />
                      </Panel>
                      <Panel title="Histopathology">
                        <Bullets items={entity.morphology} />
                      </Panel>
                      <Panel title="Immunohistochemistry">
                        <Bullets items={entity.ihc} />
                      </Panel>
                      <Panel title="Molecular pathology">
                        <Bullets items={entity.molecular} />
                      </Panel>
                      <Panel title="Differential diagnosis">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[520px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map((entry, index) => (
                                <tr key={index}>
                                  <td className="w-1/3 py-3 pr-3 align-top font-semibold">
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
                      </Panel>
                      <Panel title="Prognosis and behavior">
                        <Bullets items={entity.prognosis} />
                      </Panel>
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

        <Panel title="High-stakes comparison: giant-cell-rich lesions">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">TGCT</th>
                  <th className="py-2 pr-3">Soft-tissue GCT</th>
                  <th className="py-2 pr-3">KPGCT</th>
                  <th className="py-2">Plexiform FHT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Typical setting</td>
                  <td className="py-2 pr-3">Synovium / tendon sheath</td>
                  <td className="py-2 pr-3">Superficial soft tissue</td>
                  <td className="py-2 pr-3">Subcutis or bone</td>
                  <td className="py-2">Dermis / subcutis</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Architecture</td>
                  <td className="py-2 pr-3">
                    Localized nodules or diffuse sheets
                  </td>
                  <td className="py-2 pr-3">Multinodular with fibrous septa</td>
                  <td className="py-2 pr-3">Polymorphous nodules / sheets</td>
                  <td className="py-2">Plexiform, biphasic</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Key clue</td>
                  <td className="py-2 pr-3">Hemosiderin; clusterin</td>
                  <td className="py-2 pr-3">Keratin negative</td>
                  <td className="py-2 pr-3">
                    Keratin-positive mononuclear cells
                  </td>
                  <td className="py-2">
                    Histiocytoid nodules with spindle-cell fascicles
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Molecular clue</td>
                  <td className="py-2 pr-3">CSF1 rearrangement subset</td>
                  <td className="py-2 pr-3">No defining alteration</td>
                  <td className="py-2 pr-3">HMGA2::NCOR2</td>
                  <td className="py-2">No recurrent event established</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Sampling and reporting checklist">
          <Bullets
            items={[
              "Correlate with the precise anatomic relationship to joint, synovium, tendon sheath, dermis, subcutis, and bone.",
              "Sample heterogeneous, nodular, hemorrhagic, chondroid, and radiologically aggressive areas.",
              "For TGCT, document localized versus diffuse growth and assess for overt malignant areas when atypia is present.",
              "For giant-cell-rich lesions, specifically assess keratin in mononuclear cells and look for peripheral lymphoid aggregates.",
              "For chondroid synoviocytic neoplasm, identify the synoviocytic component and calcified/chondroid matrix; consider fusion testing in difficult cases.",
              "For plexiform fibrohistiocytic tumor, demonstrate the plexiform architecture and biphasic cellular composition.",
              "Report tumor size, site, growth pattern, margins, mitotic activity, necrosis, vascular invasion, and any malignant component as appropriate.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO source excerpt. Molecular findings and immunostains are presented
          as supportive findings where indicated, not as stand-alone diagnostic
          criteria. The page does not replace radiologic correlation, adequate
          sampling, or expert soft-tissue pathology review.
        </footer>
      </div>
    </main>
  );
}
