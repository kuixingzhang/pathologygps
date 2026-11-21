"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  site: string;
  behavior: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc?: string[];
  molecular?: string[];
  differential: [string, string][];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Ewing sarcoma",
    group: "FET–ETS fusion sarcoma",
    behavior: "Malignant",
    site: "Diaphysis/metadiaphysis of long bones, pelvis, and ribs; approximately 25–30% are extraskeletal and may arise in viscera.",
    clinical: [
      "Peak incidence in the second decade; nearly half of patients are younger than 20 years.",
      "Male predominance (M:F approximately 1.4:1).",
      "Pain and a palpable mass; pathological fracture or fever may occur.",
      "Bone imaging: permeative osteolysis with aggressive periosteal reaction; often a large soft-tissue component.",
    ],
    criteria: [
      "Small round cell morphology.",
      "Strong, diffuse membranous CD99 expression.",
      "Desirable: NKX2-2 expression.",
      "Desirable: EWSR1 (rarely FUS) rearrangement or a defining FET–ETS fusion.",
    ],
    histology: [
      "Uniform small round cells in sheets.",
      "Round nuclei with finely stippled chromatin and inconspicuous nucleoli.",
      "Scant clear or eosinophilic cytoplasm; indistinct cell borders.",
      "Occasional larger cells with prominent nucleoli and irregular nuclear contours (large-cell/atypical pattern).",
      "Poorly formed rosettes may be present.",
      "Uncommon patterns: pseudoalveolar, clear-cell, mildly spindled, or sclerotic.",
      "After chemotherapy: variable necrosis with residual tumor in loose connective tissue.",
    ],
    ihc: [
      "CD99: strong, diffuse membranous staining in approximately 95%; sensitive but not specific.",
      "NKX2-2: useful supportive marker; more specific than CD99.",
      "PAX7: higher specificity than CD99.",
      "Keratin: positive in approximately 25%; may be focal.",
      "Neuroendocrine markers and S100: occasionally positive.",
    ],
    molecular: [
      "EWSR1::FLI1: approximately 85%; usually t(11;22)(q24;q12).",
      "EWSR1::ERG: approximately 10%; usually t(21;22)(q22;q12).",
      "Rare alternative FET–ETS fusions involve EWSR1, FUS, or rarely TAF15 with an ETS-family partner.",
      "Confirm with fusion testing or rearrangement testing; EWSR1 rearrangement alone is not specific.",
      "Additional alterations may include STAG2, CDKN2A, TP53, ERF, and FGFR1.",
    ],
    differential: [
      [
        "CIC-rearranged sarcoma",
        "Often more pleomorphic, with prominent nucleoli and brisk mitoses; CD99 is usually patchy, while ETV4, WT1, and DUX4 are useful nuclear markers. CIC rearrangement supports the diagnosis.",
      ],
      [
        "Sarcoma with BCOR genetic alterations",
        "Often shows round-to-spindle morphology and delicate vasculature; nuclear BCOR, SATB2, and cyclin D1 are supportive. Molecular confirmation is required.",
      ],
      [
        "NFATC2-rearranged sarcoma",
        "Fibrohyaline stroma with cords, nests, trabeculae, or pseudoacini; CD99 may be diffuse but often dot-like/paranuclear. NFATC2 rearrangement is required.",
      ],
      [
        "Adamantinoma-like Ewing sarcoma",
        "Head and neck tumor with basaloid nests, fibromyxoid/hyalinized stroma, and squamous differentiation; keratin and p63/p40 expression, sometimes keratin pearls.",
      ],
    ],
    pitfalls: [
      "CD99 positivity alone does not establish Ewing sarcoma.",
      "FET–ETS fusions are not entirely specific and occur in other tumor types.",
      "Do not use the historical term primitive neuroectodermal tumor as a separate entity.",
    ],
  },
  {
    name: "NFATC2-rearranged sarcoma",
    group: "NFATC2 fusion sarcoma",
    behavior: "Malignant",
    site: "Predominantly bone (approximately 2.1:1 bone-to-soft-tissue ratio); metaphysis/diaphysis of long bones. Soft-tissue cases involve extremities, head and neck, and chest wall.",
    clinical: [
      "Wide age range (reported 0–78 years); median approximately 38.5 years.",
      "Male predominance in reported cases (M:F approximately 2.6:1).",
      "Painful, locally destructive bone lesion; symptoms may precede diagnosis for years.",
      "May extend into surrounding soft tissue; occasional surface/periosteal origin.",
    ],
    criteria: [
      "Round-to-spindle cells arranged in cords, nests, and trabeculae.",
      "Fibrohyaline or myxohyaline stroma.",
      "Genetic confirmation of NFATC2 rearrangement is required.",
      "Supportive molecular pattern: EWSR1 break-apart FISH with 5′ probe gain/amplification or direct identification of an NFATC2 fusion.",
    ],
    histology: [
      "Small-to-medium round and/or spindle cells.",
      "Cords, small nests, trabeculae, and pseudoacinar structures.",
      "Fibrohyaline or myxohyaline stromal background.",
      "Cytoplasm is limited and eosinophilic or clear.",
      "Nuclear features range from monotonous small nuclei to marked pleomorphism; chromatin may be dense/hyperchromatic or vesicular.",
      "Mitotic activity and necrosis are variable.",
      "Focal matrix-poor sheets may occur.",
    ],
    ihc: [
      "CD99: diffuse in approximately half of cases; often paranuclear dot-like rather than classic membranous.",
      "PAX7 and NKX2-2: may be positive.",
      "NKX3-1: often positive, but results vary between laboratories.",
      "Keratin: may show focal dot-like staining.",
    ],
    molecular: [
      "EWSR1::NFATC2 is the common fusion; FUS::NFATC2 also occurs.",
      "EWSR1::NFATC2 is often associated with amplification of the rearranged regions and a derivative ring chromosome.",
      "FUS::NFATC2 has not shown the same amplification pattern in reported cases.",
      "NFATC2 fusions are not specific: similar fusions without partner-region amplification occur in simple bone cysts and vascular malformations/hemangiomas.",
      "A rare FUS::NFATC4 fusion has been reported.",
    ],
    differential: [
      [
        "Ewing sarcoma",
        "Ewing typically has monotonous sheets of small round cells without prominent fibrohyaline stroma; classic CD99 is diffuse membranous and FET–ETS fusion is defining.",
      ],
      [
        "Myoepithelioma",
        "Can show cords/nests in myxoid or hyaline stroma; correlate with myoepithelial differentiation and the full immunophenotype.",
      ],
      [
        "Ossifying fibromyxoid tumor",
        "Consider in a bone/soft-tissue lesion with fibromyxoid stroma; assess for characteristic peripheral ossification and its broader morphologic pattern.",
      ],
      [
        "Osteosarcoma / osteoblastoma",
        "Evaluate for tumor osteoid or osteoblastic differentiation in the appropriate bone lesion.",
      ],
    ],
    pitfalls: [
      "NFATC2 fusion alone is not sufficient without the appropriate morphology and context.",
      "An unbalanced EWSR1 FISH pattern with 5′ gain/amplification is a useful clue, not a substitute for integrated interpretation.",
    ],
  },
  {
    name: "Sarcoma with BCOR genetic alterations",
    group: "BCOR-altered sarcoma",
    behavior: "Malignant",
    site: "BCOR::CCNB3: pelvis, lower-extremity long bones (metadiaphysis), and paraspinal region; slightly more common in bone. BCOR-ITD: soft tissues of trunk, retroperitoneum, and head/neck; extremity involvement is uncommon.",
    clinical: [
      "BCOR::CCNB3: predominantly children/adolescents; more than 90% are younger than 20 years.",
      "BCOR::CCNB3: marked male predominance (M:F approximately 4.5:1).",
      "BCOR-ITD: often congenital or arises during the first year of life; adult cases are rare.",
      "Pain and swelling are common.",
      "Often a large mass; bone lesions may show cortical destruction and a soft-tissue component.",
    ],
    criteria: [
      "Primitive round-to-spindle cells in nests, sheets, or fascicles.",
      "Variably myxoid stroma with delicate vasculature.",
      "Expression of BCOR, SATB2, and cyclin D1.",
      "Molecular confirmation of a BCOR abnormality (fusion or ITD), YWHAE::NUTM2B fusion, or KDM2B fusion.",
    ],
    histology: [
      "BCOR::CCNB3: uniform primitive round, ovoid, or short spindle cells in solid sheets or vague nests.",
      "Rich capillary network is characteristic.",
      "Less common patterns include hypocellular short spindle cells in myxoid matrix or solid fascicles of plump spindle cells.",
      "Nuclei have finely dispersed chromatin; nucleoli are usually inconspicuous.",
      "Mitotic activity is variable.",
      "BCOR-ITD spectrum: cellularity ranges from hypercellular primitive sheets to hypocellular spindle-cell areas in a richly vascular myxoid matrix.",
      "Primitive myxoid mesenchymal tumor of infancy (PMMTI) usually has a low-cellularity myxoid phenotype.",
    ],
    ihc: [
      "BCOR: strong, diffuse nuclear staining; supportive but not specific.",
      "SATB2 and cyclin D1: commonly positive.",
      "Cyclin B3: expressed in BCOR::CCNB3 sarcoma; not typically seen in other BCOR-family tumors.",
      "TLE1, KDM2B, and pan-TRK may be positive; pan-TRK expression does not establish a kinase fusion.",
      "CD99: positive in approximately 50%.",
    ],
    molecular: [
      "BCOR::CCNB3 is the most common fusion in this group.",
      "Other BCOR fusions include YWHAE and less common partners such as MAML3, ZC3H7B, CHD9, KMT2D, CIITA, RTL9/RGAG1, CLGN, MAML1, and AHR.",
      "BCOR internal tandem duplication (ITD) defines a subset including undifferentiated round-cell sarcoma and PMMTI.",
      "YWHAE::NUTM2B and KDM2B fusions occur in a small subset.",
      "Detection: BCOR break-apart FISH; targeted RNA sequencing for fusions and ITD.",
    ],
    differential: [
      [
        "Ewing sarcoma",
        "BCOR sarcoma often has short spindle-cell areas and a rich capillary network; BCOR/SATB2/cyclin D1 expression and a BCOR-family alteration support BCOR sarcoma.",
      ],
      [
        "CIC-rearranged sarcoma",
        "CIC tumors more often show nuclear pleomorphism, prominent nucleoli, brisk mitoses, and necrosis; ETV4/WT1/DUX4 are useful markers.",
      ],
      [
        "Synovial sarcoma",
        "BCOR can be positive in synovial sarcoma; BCOR IHC alone is not specific. Integrate morphology and molecular findings.",
      ],
      [
        "Kinase fusion–positive spindle-cell neoplasm",
        "Pan-TRK can be expressed in BCOR-altered sarcoma without a NTRK fusion; confirm a suspected kinase fusion molecularly.",
      ],
      [
        "Clear cell sarcoma of kidney / high-grade endometrial stromal sarcoma",
        "These can share BCOR ITD-related biology; correlate with the primary site and entity-specific morphology.",
      ],
    ],
    pitfalls: [
      "BCOR immunoreactivity is not specific and should not replace molecular confirmation.",
      "Pan-TRK positivity may be misleading in this group.",
      "BCOR::CCNB3, BCOR-ITD, and other BCOR-family alterations have different clinical settings and should not be treated as interchangeable.",
    ],
  },
  {
    name: "CIC-rearranged sarcoma",
    group: "CIC fusion sarcoma",
    behavior: "Malignant",
    site: "Usually deep soft tissue of limbs or trunk; less often head/neck, retroperitoneum, or pelvis. Visceral sites include kidney, GI tract, and brain. Primary bone involvement is rare (<5%).",
    clinical: [
      "Predominantly young adults; reported median age approximately 25–35 years.",
      "Wide reported age range, including children and older adults.",
      "Presents as a mass, with or without pain.",
      "Large tumors; visceral or metastatic symptoms may be the initial presentation.",
    ],
    criteria: [
      "Predominant round-cell phenotype.",
      "Mild nuclear pleomorphism.",
      "Epithelioid and/or spindle-cell components may be present.",
      "Variably myxoid stroma.",
      "CIC gene rearrangement or supportive surrogate expression (ETV-family transcription factors).",
    ],
    histology: [
      "Diffuse sheets of undifferentiated round cells, often with lobulated growth separated by fibrotic stroma.",
      "Minor spindle, rhabdoid, or epithelioid components may be present.",
      "Mild nuclear pleomorphism with vesicular chromatin and prominent nucleoli.",
      "Lightly eosinophilic cytoplasm, sometimes with clearing.",
      "Necrosis is common; mitotic activity is brisk.",
      "Focal myxoid areas occur in approximately one third, with reticular or pseudoacinar architecture.",
    ],
    ihc: [
      "CD99: often positive but usually patchy cytoplasmic/membranous; diffuse membranous staining is less common.",
      "ETV4: nuclear staining in approximately 85%; relatively high specificity.",
      "WT1: nuclear staining in approximately 83%; specificity is higher than CD99. N-terminal antibody is more sensitive than C-terminal antibody.",
      "DUX4: nuclear staining in approximately 97%; highly specific in the cited series.",
      "NKX2-2: typically negative.",
      "CIC::NUTM1 tumors: NUT positive.",
      "Calretinin and ERG may be positive; keratin, S100, and myogenic markers are rarely positive.",
    ],
    molecular: [
      "CIC::DUX4 accounts for approximately 95%; associated with t(4;19) or t(10;19).",
      "Less common partners include AXL, CITED1, FOXO4, LEUTX, NUTM1, NUTM2A, and SYK.",
      "Trisomy 8 and MYC amplification are reported additional alterations.",
      "CIC break-apart FISH may be false negative (reported 14–43%); targeted RNA sequencing can also be false negative.",
      "DNA methylation profiling may help distinguish CIC-rearranged sarcoma from other round-cell sarcomas.",
    ],
    differential: [
      [
        "Ewing sarcoma",
        "CIC sarcoma has more nuclear pleomorphism and prominent nucleoli; CD99 is commonly patchy, NKX2-2 is typically negative, and ETV4/WT1/DUX4 are useful.",
      ],
      [
        "Sarcoma with BCOR genetic alterations",
        "BCOR sarcoma often has a rich capillary network and round-to-spindle/fascicular areas; BCOR, SATB2, cyclin D1, and molecular testing aid classification.",
      ],
      [
        "NFATC2-rearranged sarcoma",
        "NFATC2 tumors characteristically have cords/nests/trabeculae in fibrohyaline stroma and require NFATC2 fusion confirmation.",
      ],
    ],
    pitfalls: [
      "CD99 is highly nonspecific; a patchy pattern is common in CIC sarcoma.",
      "A negative CIC break-apart FISH result does not exclude the diagnosis.",
      "Do not classify as Ewing sarcoma solely because of small round-cell morphology or CD99 positivity.",
    ],
  },
];

const categories = [
  "All",
  "FET–ETS fusion sarcoma",
  "NFATC2 fusion sarcoma",
  "BCOR-altered sarcoma",
  "CIC fusion sarcoma",
];
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />{" "}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-w-0">
      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-800">
        {title}
      </h4>
      {children}
    </section>
  );
}

export default function RoundCellSarcomasPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>(["Ewing sarcoma"]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (category === "All" || e.group === category) &&
          [
            e.name,
            e.site,
            e.behavior,
            ...e.clinical,
            ...e.criteria,
            ...e.histology,
            ...(e.ihc ?? []),
            ...(e.molecular ?? []),
            ...e.differential.flat(),
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  const toggle = (name: string) =>
    setOpened((v) =>
      v.includes(name) ? v.filter((x) => x !== name) : [...v, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Soft Tissue and Bone Tumors / Round Cell Sarcomas
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Round Cell Sarcomas
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing defining
                criteria, immunophenotype, molecular confirmation, and practical
                differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Small round-cell morphology is a pattern, not a diagnosis.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Integrate architecture, cytology, immunophenotype, anatomic
                setting, and fusion status. CD99 alone is insufficient.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <section className="rounded-2xl border border-teal-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold text-slate-900">
            Diagnostic GPS: round-cell sarcoma workup
          </h2>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Confirm the pattern",
                "Round-cell, round-to-spindle, or mixed morphology; assess cytologic uniformity and atypia.",
              ],
              [
                "2. Read the stroma",
                "Fibrohyaline/myxohyaline (NFATC2); delicate capillary network (BCOR); fibrous septa and focal myxoid change (CIC).",
              ],
              [
                "3. Use a focused IHC panel",
                "CD99 is not specific. Add NKX2-2/PAX7, BCOR/SATB2/cyclin D1, ETV4/WT1/DUX4 as morphology directs.",
              ],
              [
                "4. Confirm the genetic class",
                "FET–ETS, NFATC2, BCOR-family, or CIC alteration; choose an assay that covers the suspected event.",
              ],
              [
                "5. Reconcile discordance",
                "A negative or equivocal result may reflect assay limitations; CIC FISH and RNA sequencing can be false negative.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-bold text-slate-900">{x[0]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </section>
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
                Search by entity, site, morphology, marker, or gene.
              </p>
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. CD99, ETV4, BCOR, NFATC2..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((e) => {
              const isOpen = opened.includes(e.name);
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
                      <p className="mt-1 text-sm text-slate-500">{e.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="space-y-6 border-t border-slate-100 p-5">
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-xl bg-slate-50 p-4">
                          <Section title="Clinical Profile">
                            <Bullets items={e.clinical} />
                          </Section>
                        </div>
                        <div className="rounded-xl bg-teal-50/50 p-4">
                          <Section title="Essential Diagnostic Criteria">
                            <Bullets items={e.criteria} />
                          </Section>
                        </div>
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <Section title="Histopathology">
                          <Bullets items={e.histology} />
                        </Section>
                        {e.ihc?.length ? (
                          <Section title="Immunophenotype">
                            <Bullets items={e.ihc} />
                          </Section>
                        ) : null}
                      </div>
                      {e.molecular?.length ? (
                        <Section title="Molecular Pathology">
                          <Bullets items={e.molecular} />
                        </Section>
                      ) : null}
                      <Section title="Differential Diagnosis">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[620px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {e.differential.map((d, i) => (
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
                      </Section>
                      {e.pitfalls?.length ? (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                          <Section title="Diagnostic Pitfalls">
                            <Bullets items={e.pitfalls} />
                          </Section>
                        </div>
                      ) : null}
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching entity.
              </div>
            ) : null}
          </div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold text-slate-900">
            High-yield differential: four major molecular classes
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Ewing</th>
                  <th className="py-2 pr-3">NFATC2</th>
                  <th className="py-2 pr-3">BCOR-altered</th>
                  <th className="py-2">CIC-rearranged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Architecture",
                    "Sheets",
                    "Cords/nests/trabeculae",
                    "Sheets/nests/fascicles",
                    "Sheets; lobulated",
                  ],
                  [
                    "Stroma",
                    "Usually scant",
                    "Fibrohyaline / myxohyaline",
                    "Delicate capillaries; variable myxoid",
                    "Fibrous septa; focal myxoid",
                  ],
                  [
                    "CD99",
                    "Strong diffuse membranous",
                    "Variable; often dot-like",
                    "Positive in ~50%",
                    "Often patchy",
                  ],
                  [
                    "Helpful IHC",
                    "NKX2-2, PAX7",
                    "PAX7, NKX2-2; variable NKX3-1",
                    "BCOR, SATB2, cyclin D1; cyclin B3 in BCOR::CCNB3",
                    "ETV4, WT1, DUX4",
                  ],
                  [
                    "Molecular class",
                    "FET–ETS",
                    "EWSR1/FUS::NFATC2",
                    "BCOR fusion/ITD; selected YWHAE/KDM2B",
                    "CIC fusion, usually CIC::DUX4",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    {r.map((v, j) =>
                      j === 0 ? (
                        <td key={j} className="py-3 pr-3 font-semibold">
                          {v}
                        </td>
                      ) : (
                        <td key={j} className="py-3 pr-3 text-slate-700">
                          {v}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope:</b> Based on the supplied WHO
          source excerpt. Differential points are organized from the
          source-described morphology, immunophenotype, and molecular findings.
          Ancillary markers are interpreted as supportive unless included in the
          stated essential criteria.
        </footer>
      </div>
    </main>
  );
}
