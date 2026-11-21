"use client";

import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  category: string;
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
    name: "Onychomatricoma",
    category: "Fibroepithelial nail matrix tumor",
    behavior: "Benign",
    site: "Usually the nail matrix of fingers; toes are less commonly involved. Rare cases arise in the proximal nail fold or nail bed.",
    clinical: [
      "Typically affects middle-aged adults, with a female predominance; pediatric cases are rare.",
      "Presents as a proximal subungual nodule with sharply demarcated nail plate thickening.",
      "The nail plate is often yellow, transversely overcurved, and associated with splinter hemorrhages.",
      "End-on inspection of the distal nail plate may reveal cavities; avulsed nail plate shows proximal honeycomb-like or wormwood-like channels.",
      "Pigmented lesions may present with longitudinal melanonychia; dorsal pterygium can occur.",
    ],
    criteria: [
      "Matrical fibroepithelial proliferation that interdigitates with the thickened nail plate.",
      "A proximal stromal component is covered by reduplicated nail matrix epithelium.",
      "The epithelial-stromal projections form a characteristic finger-and-glove configuration.",
      "When available, the attached nail plate demonstrates multiple cavities and V-shaped keratogenous zones.",
    ],
    morphology: [
      "The proximal component arises in the nail matrix and consists of variably fibrocellular, occasionally myxoid stroma.",
      "The stroma contains CD34-positive spindle cells.",
      "Reduplicated matrical epithelium interdigitates with the nail plate in a finger-and-glove pattern.",
      "Numerous V-shaped keratogenous zones are present.",
      "The nail plate is thickened and may contain loculated serum and hemorrhage.",
      "Papillated epithelium and dilated blood vessels may be present.",
      "Pleomorphic and proliferative patterns have been described; pigmented lesions may contain melanin in the epithelium and nail plate.",
    ],
    ihc: [
      "CD34 highlights the stromal spindle cells.",
      "IHC is generally supportive rather than independently diagnostic; the characteristic architecture is decisive.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not relevant according to the supplied source.",
    ],
    differential: [
      [
        "Superficial acral fibromyxoma",
        "May also express CD34, EMA, and CD99; lacks the characteristic matrical epithelial projections interdigitating with the nail plate.",
      ],
      [
        "Angiofibroma",
        "Usually lacks the defining finger-and-glove matrical epithelial component.",
      ],
      [
        "Neurofibroma",
        "Neural morphology and immunophenotype differ; it does not produce the characteristic nail plate channels.",
      ],
      [
        "Perineurioma",
        "Perineurial differentiation does not reproduce the matrical fibroepithelial architecture.",
      ],
    ],
    pitfalls: [
      "A nail clipping may contain diagnostic features, including a thickened plate, loculated serum, hemorrhage, and attached epithelium.",
      "Onychomycosis may occur secondarily and does not exclude an underlying onychomatricoma.",
      "The relationship of reported nail bed–based lesions to conventional onychomatricoma remains uncertain.",
    ],
  },
  {
    name: "Onychopapilloma",
    category: "Nail matrix / nail bed epithelial proliferation",
    behavior: "Benign; a single malignant case has been reported",
    site: "Most often affects fingernails. Originates in the distal nail matrix and extends along the nail bed to the hyponychium.",
    clinical: [
      "Usually occurs in adults; pediatric cases are rare.",
      "Typically presents with longitudinal erythronychia or yellow discoloration, sometimes beginning as a wedge-shaped distal matrix lesion.",
      "Splinter hemorrhage and distal subungual hyperkeratosis, often forming a spicule, are common.",
      "May cause distal nail plate splitting, fissuring, notching, or onycholysis.",
      "Pigmented and leukonychic clinical patterns are recognized.",
    ],
    criteria: [
      "Nail bed epithelial hyperplasia with proximal matrical metaplasia, interpreted in the appropriate longitudinal clinical pattern.",
      "The distal nail bed is often papillated and shows hypergranulosis.",
      "Characteristic distal subungual parakeratosis and hyperkeratosis may indent the undersurface of the nail plate.",
      "Subungual hemorrhage and multinucleated nail bed keratinocytes are desirable but not required findings.",
      "A full-thickness longitudinal nail unit specimen best demonstrates the diagnostic architecture.",
    ],
    morphology: [
      "Proximally, slight nail matrix epithelial hyperplasia may be present.",
      "Matrical metaplasia of the nail bed shows matrix-like maturation with retained keratinocyte nuclei over eosinophilic superficial keratinocytes.",
      "Distally, the nail bed is hyperplastic and often papillated, with hypergranulosis.",
      "Multinucleated keratinocytes may occur in the mid to distal nail bed.",
      "Distal subungual parakeratosis and hyperkeratosis are characteristic and may indent the overlying nail plate.",
      "Subungual hemorrhage may be present.",
    ],
    ihc: [
      "The supplied source does not identify a diagnostic immunohistochemical profile.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not relevant according to the supplied source.",
    ],
    differential: [
      [
        "Verruca vulgaris",
        "The main differential diagnosis; onychopapilloma shows a longitudinal nail unit pattern with matrical metaplasia and characteristic distal subungual hyperkeratosis.",
      ],
      [
        "Squamous cell carcinoma in situ",
        "A single malignant onychopapilloma-like case has been reported; evaluate for significant cytologic atypia and full-thickness epithelial atypia.",
      ],
      [
        "Subungual keratosis",
        "Correlate with the longitudinal erythronychia/yellow streak and the characteristic proximal-to-distal epithelial changes.",
      ],
    ],
    pitfalls: [
      "A longitudinal specimen is important; tangential or fragmented sampling may obscure the proximal-to-distal pattern.",
      "Diagnostic epithelium may remain attached to the nail plate during avulsion or reflection.",
      "Do not equate multinucleated keratinocytes alone with malignancy.",
    ],
  },
  {
    name: "Ungual Fibrokeratoma",
    category: "Periungual fibrous / fibrokeratotic lesion",
    behavior: "Benign",
    site: "Usually periungual; less often intraungual or subungual. Toenails are affected more often than fingernails, especially the hallux and thumb.",
    clinical: [
      "An uncommon acquired lesion; epidemiologic data are limited.",
      "May occur sporadically or as multiple lesions in tuberous sclerosis, where it is termed a Koenen tumor.",
      "Presents as a rod-shaped, dome-shaped, flat, or branching periungual growth; dome-shaped and branching forms are most common.",
      "A longitudinal nail plate groove is a frequent associated finding.",
      "Trachyonychia, chromonychia, onycholysis, subungual hyperkeratosis, nail plate splitting, or hemorrhagic crust may occur.",
    ],
    criteria: [
      "A periungual or nail-associated lesion composed of fibrovascular tissue with a fibrous core.",
      "A sausage-shaped configuration at low power is a useful clue.",
      "Epidermal hyperplasia with hyperkeratosis is desirable but may vary.",
      "Serum at the distal pole of the specimen is a supportive gross/microscopic finding.",
    ],
    morphology: [
      "The lesion is composed of fibrovascular tissue.",
      "Low-power examination often shows a sausage-shaped tumor, sometimes with serum at its distal tip.",
      "The overlying epidermis may show hyperkeratosis, acanthosis, focal hypergranulosis, and irregular rete ridges.",
      "Reported stromal patterns include densely collagenous, fibroblast-rich, and edematous/hypocellular forms.",
      "In tuberous sclerosis–associated lesions, angiomatous, mixed, and fibrous patterns reflect the relative vascular and fibrous components.",
    ],
    ihc: [
      "Immunohistochemistry is generally not required.",
      "CD34 expression in cellular angiofibroma and superficial acral fibromyxoma may complicate the differential diagnosis; interpret staining with morphology.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant according to the supplied source.",
    ],
    differential: [
      [
        "Superficial acral fibromyxoma",
        "Often CD34-positive and may be more myxoid and cellular; correlate with the characteristic site and architecture.",
      ],
      [
        "Cellular angiofibroma",
        "Can be CD34-positive; assess the overall vascular and stromal pattern rather than relying on CD34 alone.",
      ],
      [
        "Other periungual fibrous lesions",
        "The clinical distribution and fibrovascular core with epidermal hyperkeratosis support ungual fibrokeratoma.",
      ],
    ],
    pitfalls: [
      "CD34 positivity is not specific and should not override the characteristic morphology.",
      "Multiple periungual fibrokeratomas should prompt clinical correlation for tuberous sclerosis.",
    ],
  },
  {
    name: "Onychocytic Matricoma",
    category: "Nail matrix epithelial / nail plate–producing tumor",
    behavior: "Benign",
    site: "Localized within a single nail unit, with matrix epithelium and nail plate production.",
    clinical: [
      "An unusual lesion with no established epidemiologic profile.",
      "Most reported cases present as longitudinal pachymelanonychia: a longitudinal hyperpigmented streak with nail plate thickening.",
      "Rare hypopigmented cases present as longitudinal pachyxanthonychia, with yellow discoloration and nail plate thickening.",
    ],
    criteria: [
      "Nail plate thickening is present in at least part of the lesion.",
      "The nail matrix epithelium shows hyperplasia in one of the described patterns.",
      "A dermal or stromal component is absent; this is a key distinction from onychomatricoma.",
      "Depending on the pattern, look for epithelial whorls, papillomatous projections, or an expanded keratogenous zone.",
    ],
    morphology: [
      "The acanthotic pattern shows matrix epithelial acanthosis and epithelial whorls that may differentiate into onychocytes.",
      "The papillomatous pattern shows papillomatous projections of matrix-derived epithelium associated with a thickened nail plate and intraplate cavities.",
      "The keratogenous pattern shows an expanded keratogenous zone that forms a channel along the nail plate.",
      "In the keratogenous pattern, maturation into onychocytes is delayed and occurs in the distal channel.",
      "All described patterns lack a dermal component.",
    ],
    ihc: [
      "The supplied source does not identify a diagnostic immunohistochemical profile.",
    ],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant according to the supplied source.",
    ],
    differential: [
      [
        "Onychomatricoma",
        "Onychomatricoma has a CD34-positive stromal component with reduplicated matrical epithelium interdigitating with the nail plate; onychocytic matricoma lacks a dermal component.",
      ],
      [
        "Onychopapilloma",
        "Onychopapilloma is centered on distal nail matrix/nail bed with distal nail bed hyperplasia and subungual hyperkeratosis.",
      ],
      [
        "Other nail plate–producing lesions",
        "Use the presence or absence of a stromal component and the specific matrix epithelial growth pattern.",
      ],
    ],
    pitfalls: [
      "The absence of a dermal component is an important diagnostic discriminator.",
      "Clinical pigmentation is common but not obligatory; hypopigmented/yellow cases are reported.",
    ],
  },
  {
    name: "Subungual Keratoacanthoma",
    category: "Squamoproliferative nail bed tumor",
    behavior: "Uncertain behavior (ICD-O /1)",
    site: "Usually distal nail bed; may arise in the proximal nail fold and present as paronychia. Any digit may be involved, predominantly fingers.",
    clinical: [
      "Rare tumor, usually in middle-aged adults; reported cases are more common in light-skinned individuals.",
      "Presents as a painful nodule with subungual hyperkeratosis and/or a nail spicule.",
      "May be solitary, multiple, eruptive, or familial; bone erosion or osteolysis can occur.",
      "Unlike conventional cutaneous keratoacanthoma, spontaneous resolution is uncommon and surgical treatment is often required.",
      "The subungual tumor of incontinentia pigmenti (STIP) occurs in women, typically at 15–35 years, in the late verrucous phase; nail dystrophy, destruction, or paronychia may be the presenting feature.",
    ],
    criteria: [
      "A nodular or nodulocystic lesion with a lobular to cystic proliferation of eosinophilic keratinocytes.",
      "Numerous dyskeratotic keratinocytes, often clustered, are present.",
      "Adjacent and central hyperkeratosis is characteristic.",
      "A more vertical growth orientation and fewer eosinophils/neutrophils than conventional cutaneous keratoacanthoma are useful clues.",
      "Calcification of individual keratinocytes or corneocytes is a desirable, uncommon feature.",
    ],
    morphology: [
      "Lobular proliferation of eosinophilic keratinocytes with a crateriform to cystic contour.",
      "Adjacent and central hyperkeratosis is present.",
      "Dyskeratotic keratinocytes are numerous and often form clusters, particularly in hyperkeratotic areas.",
      "The lesion may show a more vertical orientation than conventional cutaneous keratoacanthoma.",
      "Eosinophils and neutrophils are less prominent; fibrosis at the base may be absent.",
      "Rare cases show calcifying keratinocytes and corneocytes.",
      "In STIP, the tumor may displace the nail plate and cause dystrophy.",
    ],
    ihc: [
      "Subungual squamous cell carcinoma may show higher p53 and Ki-67 expression than subungual keratoacanthoma; these findings are adjunctive and require morphologic correlation.",
      "NFKB1 amplification-associated protein expression was reported in a small series; it is not established as a routine diagnostic assay.",
    ],
    molecular: [
      "STIP occurs in the setting of incontinentia pigmenti, which is caused by an X-linked IKBKG mutation affecting NEMO and NF-κB activation.",
      "HPV15 has been implicated in a small series of STIP cases.",
      "A small study reported NFKB1 and CTTN (formerly EMS1) amplification in subungual keratoacanthoma but not digital/subungual SCC; this finding is based on limited evidence and is not a routine test.",
    ],
    differential: [
      [
        "Digital/subungual squamous cell carcinoma",
        "May show greater p53 and Ki-67 expression; assess cytologic atypia, infiltrative growth, and overall malignant features.",
      ],
      [
        "Subungual epidermoid inclusion cyst",
        "A cystic lesion lined by squamous epithelium lacks the characteristic lobular keratoacanthoma-like proliferation with clustered dyskeratosis.",
      ],
      [
        "Onycholemmal carcinoma",
        "A malignant nail unit epithelial tumor; distinguish by its cytologic and architectural features rather than the clinical appearance alone.",
      ],
      [
        "STIP",
        "Histologically indistinguishable from subungual keratoacanthoma in the supplied source; young women with compatible findings warrant evaluation for incontinentia pigmenti.",
      ],
    ],
    pitfalls: [
      "Subungual keratoacanthoma and STIP are histologically indistinguishable; clinical context is essential.",
      "Do not assume spontaneous regression as in conventional cutaneous keratoacanthoma.",
      "Severe pain and possible bone erosion make clinical and radiologic correlation important.",
      "The reported NFKB1/CTTN amplification data derive from a small study and should not be treated as a validated routine discriminator.",
    ],
  },
];

const categories = ["All", "Benign", "Uncertain behavior"];
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
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NailBedEpithelialTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Onychomatricoma",
    "Onychopapilloma",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" ||
            (cat === "Benign"
              ? x.behavior.startsWith("Benign")
              : x.behavior.startsWith("Uncertain"))) &&
          [
            x.name,
            x.category,
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
            PathologyGPS / Skin Tumors / Nail Unit
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Nail Bed Epithelial Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first reference to nail matrix and nail bed
                epithelial lesions, emphasizing anatomic origin, longitudinal
                architecture, essential criteria, and practical differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Identify the anatomic level and follow the lesion along the nail
                unit.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Matrix-derived lesions may produce or alter the nail plate;
                distal nail bed lesions often create longitudinal streaks,
                hyperkeratosis, or nail plate changes.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Anatomic orientation: where does the lesion arise?">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Proximal nail matrix",
                "Onychomatricoma; onychocytic matricoma. Look for matrical epithelium and nail plate production.",
              ],
              [
                "Distal nail matrix → nail bed → hyponychium",
                "Onychopapilloma. A longitudinally oriented lesion; full-thickness longitudinal sampling is preferred.",
              ],
              [
                "Periungual soft tissue",
                "Ungual fibrokeratoma. Usually periungual, especially toes/hallux; intraungual and subungual examples are less common.",
              ],
              [
                "Distal nail bed / proximal nail fold",
                "Subungual keratoacanthoma and STIP. Painful nodular or nodulocystic squamoproliferation; proximal fold lesions may mimic paronychia.",
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

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield diagnostic distinctions">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2 pr-3">Anatomic origin / component</th>
                    <th className="py-2">Key clue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Onychomatricoma</td>
                    <td className="py-2 pr-3">Nail matrix + fibrous stroma</td>
                    <td className="py-2">
                      Finger-and-glove epithelial projections; nail plate
                      cavities
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Onychopapilloma</td>
                    <td className="py-2 pr-3">Distal matrix / nail bed</td>
                    <td className="py-2">
                      Matrical metaplasia, distal papillated hyperplasia,
                      subungual hyperkeratosis
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Ungual fibrokeratoma
                    </td>
                    <td className="py-2 pr-3">
                      Periungual fibrovascular tissue
                    </td>
                    <td className="py-2">Sausage-shaped fibrovascular core</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Onychocytic matricoma
                    </td>
                    <td className="py-2 pr-3">Nail matrix epithelium</td>
                    <td className="py-2">
                      Matrix epithelial hyperplasia without a dermal component
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Subungual keratoacanthoma
                    </td>
                    <td className="py-2 pr-3">
                      Distal nail bed / occasionally proximal nail fold
                    </td>
                    <td className="py-2">
                      Lobular/cystic squamoproliferation with clustered
                      dyskeratosis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="Sampling and orientation">
            <Bullets
              items={[
                "For suspected onychopapilloma, a full-thickness longitudinal nail unit excision best demonstrates the proximal-to-distal diagnostic pattern.",
                "For suspected onychomatricoma, submit the nail plate when possible; proximal cavities and attached interdigitating epithelium are diagnostically useful.",
                "For onychocytic matricoma, preserve the relationship between matrix epithelium and the thickened nail plate and assess for absence of a stromal component.",
                "For ungual fibrokeratoma, orient the lesion to identify the fibrovascular core and distal tip.",
                "For painful subungual nodules, correlate with imaging for possible bone erosion or osteolysis.",
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
                Clinical profile, diagnostic criteria, and differential
                diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, anatomic site, clinical presentation,
                morphology, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. nail matrix, CD34, IKBKG, dyskeratosis..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
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
                          {p.category}
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
                      {open ? "Collapse" : "View diagnostic profile"}　
                      {open ? "−" : "+"}
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
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular Pathology
                        </h4>
                        <Bullets items={p.molecular} />
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
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
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

        <Panel title="Onychomatricoma vs. onychocytic matricoma">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Onychomatricoma</th>
                  <th className="py-2">Onychocytic matricoma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Stromal component</td>
                  <td className="py-2 pr-3">
                    Present; fibrocellular, CD34-positive spindle-cell stroma
                  </td>
                  <td className="py-2">Absent</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Epithelium</td>
                  <td className="py-2 pr-3">
                    Reduplicated matrical epithelium
                  </td>
                  <td className="py-2">
                    Hyperplastic matrix epithelium with acanthotic,
                    papillomatous, or keratogenous pattern
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Nail plate</td>
                  <td className="py-2 pr-3">
                    Interdigitating finger-and-glove projections with multiple
                    cavities
                  </td>
                  <td className="py-2">
                    Thickened; may contain cavities or a longitudinal channel
                    depending on pattern
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Key diagnostic clue
                  </td>
                  <td className="py-2 pr-3">Fibroepithelial architecture</td>
                  <td className="py-2">
                    Matrix epithelial proliferation without dermal component
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Biopsy, reporting, and clinical correlation checklist">
          <Bullets
            items={[
              "Document the involved digit, exact nail unit compartment, longitudinal extent, and clinical nail plate change.",
              "State whether the specimen includes nail plate and whether the matrix, nail bed, hyponychium, or periungual tissue is represented.",
              "For longitudinal lesions, preserve and describe proximal-to-distal orientation.",
              "For subungual keratoacanthoma, correlate pain, growth rate, imaging, and possible bone erosion; assess carefully for SCC.",
              "When STIP is considered, recommend clinical correlation for incontinentia pigmenti, particularly in a young woman with compatible nail disease.",
              "Report margins and completeness of excision when assessable; complete excision is associated with low recurrence for onychomatricoma and onychopapilloma.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This page is based on
          the supplied WHO excerpt on nail bed epithelial tumors. The source
          describes five entities; no additional nail unit tumors have been
          added. Molecular findings reported in small series are identified as
          limited evidence and are not presented as routine diagnostic tests.
        </footer>
      </div>
    </main>
  );
}
