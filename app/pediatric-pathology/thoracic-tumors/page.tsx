"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Fetal Lung Interstitial Tumor",
    group: "Primary Pediatric Lung Tumors",
    clue: "Well-circumscribed neonatal lung mass with uniformly expanded alveolar septa containing bland, evenly distributed mesenchymal cells.",
    summary:
      "A benign mesenchymal tumor of the lung interstitium presenting as a solid or spongy microcystic mass in early infancy.",
    clinical: [
      "Usually presents during the first 3 months of life.",
      "No established sex predilection.",
      "Arises in the lung parenchyma.",
      "Most infants have respiratory distress; some lesions are detected prenatally or incidentally.",
    ],
    criteria: [
      "Well-circumscribed, solid or spongy microcystic intraparenchymal lung mass in an infant.",
      "Alveolar septa are diffusely widened by uniform, bland mesenchymal cells.",
      "Mesenchymal cells are evenly distributed along the septa rather than forming a subepithelial cambium-like layer.",
      "Cytologic atypia, significant mitotic activity, and tumor necrosis are absent.",
    ],
    histology: [
      "Immature-appearing airspaces are separated by widened alveolar septa.",
      "Septal cells are uniform, with round to oval nuclei and dispersed chromatin.",
      "Tumor cells have a rim of clear or pale-pink cytoplasm and well-defined cell borders.",
      "Airspaces are lined by flattened or cuboidal epithelial cells with clear cytoplasm.",
      "Some lesions contain fibroblastic or myofibroblastic areas that expand septa and overgrow airspaces.",
      "Inflammatory cells, including plasma cells, may be present in fibroblastic areas.",
      "The tumor is well demarcated from adjacent lung, sometimes with a thin fibrous capsule.",
      "Compared with type I pleuropulmonary blastoma, septal cells are more uniformly distributed and airspaces are smaller.",
    ],
    ihc: [
      "Mesenchymal tumor cells are positive for vimentin.",
      "SMA and desmin show variable expression.",
      "Glycogen is abundant in both interstitial mesenchymal cells and the lining epithelial cells.",
      "The bland cytology and low proliferative activity contrast with the primitive mesenchymal cells of pleuropulmonary blastoma.",
    ],
    differential: [
      {
        name: "Congenital Peribronchial Myofibroblastic Tumor",
        distinction:
          "Shows interlacing fascicles of mitotically active spindle cells with peribronchial growth and characteristic islands of benign cartilage; fetal lung interstitial tumor instead expands alveolar septa with bland, evenly spaced cells.",
      },
      {
        name: "Pleuropulmonary Blastoma",
        distinction:
          "Type I shows focal subepithelial primitive mesenchymal cells or cartilage in cyst walls; type II/III shows a malignant, often heterogeneous sarcoma. Fetal lung interstitial tumor has bland, uniformly distributed septal cells without hyperchromasia or mitotic activity.",
      },
    ],
    molecular: [
      "A subset harbors ALK fusions, including A2M::ALK; this finding is supportive in the appropriate morphologic context.",
    ],
    pitfalls: [
      "Do not diagnose type I pleuropulmonary blastoma based only on infant age and a spongy or microcystic lung mass; assess septal cell distribution, cytology, and mitotic activity.",
      "Fibroblastic areas may resemble inflammatory myofibroblastic tumor but can occur within fetal lung interstitial tumor.",
    ],
  },
  {
    name: "Congenital Peribronchial Myofibroblastic Tumor",
    group: "Primary Pediatric Lung Tumors",
    clue: "Peribronchial spindle-cell fascicles with brisk but bland mitotic activity and islands of benign bronchial cartilage.",
    summary:
      "A rare congenital or infantile fibroblastic/myofibroblastic lung tumor composed of mitotically active but cytologically bland spindle cells, typically arranged around bronchi.",
    clinical: [
      "May be detected antenatally or present at birth or during infancy.",
      "No established sex predilection.",
      "Arises in the lung with a peribronchovascular distribution; large unilateral lesions are typical.",
      "Presentation ranges from fetal hydrops or neonatal respiratory distress to an incidental mass in an asymptomatic infant.",
    ],
    criteria: [
      "Interlacing fascicles of uniform, histologically bland spindle cells with mitotic activity.",
      "Peribronchial accentuation of tumor growth, with extension along interlobular septa and pleura.",
      "Associated proliferation of benign-appearing bronchial cartilage, often as large peribronchial islands.",
      "No diagnostic epithelial-lined cysts with subepithelial primitive mesenchymal nodules.",
    ],
    histology: [
      "Interlacing fascicles are composed of uniform spindle cells with eosinophilic cytoplasm and indistinct cell borders.",
      "Nuclei are mitotically active but generally bland; rare atypical mitoses have been reported.",
      "Tumor growth surrounds bronchi and extends along interlobular septa and pleura.",
      "Alveolar septal extension may also be present.",
      "Large islands of benign cartilage are characteristic and are usually located in peribronchial regions.",
      "Unlike type II/III pleuropulmonary blastoma, there is no cambium-like subepithelial condensation, marked cellularity, overt myogenic differentiation, or anaplasia.",
    ],
    ihc: [
      "Spindle cells are generally positive for SMA.",
      "Desmin may be positive.",
      "S100 may be positive.",
      "The immunophenotype supports myofibroblastic differentiation but is not independently diagnostic.",
    ],
    differential: [
      {
        name: "Fetal Lung Interstitial Tumor",
        distinction:
          "Shows diffusely widened alveolar septa containing small, delicate, bland cells with variably clear cytoplasm; it lacks the peribronchial fascicular growth and large benign cartilage islands characteristic of congenital peribronchial myofibroblastic tumor.",
      },
      {
        name: "Pleuropulmonary Blastoma",
        distinction:
          "Type I has epithelial-lined cysts with focal subepithelial primitive cells and/or cartilage; types II/III show dense malignant sarcomatous areas, possible rhabdomyoblastic differentiation, and anaplasia. Congenital peribronchial myofibroblastic tumor has bland spindle cells and benign peribronchial cartilage.",
      },
    ],
    molecular: [
      "No firm molecular diagnostic criteria are established.",
      "ETV6::NTRK3 rearrangement has been reported in a small number of cases, but its significance and the distinction from primary pulmonary infantile fibrosarcoma remain unsettled.",
    ],
    pitfalls: [
      "Mitotic activity alone does not establish malignancy; interpret it with cytologic blandness, peribronchial distribution, and benign cartilage.",
      "An ETV6::NTRK3 fusion should prompt careful consideration of infantile fibrosarcoma and other NTRK-rearranged mesenchymal tumors rather than automatic classification as this entity.",
    ],
  },
  {
    name: "Pleuropulmonary Blastoma",
    group: "Primary Pediatric Lung Tumors",
    clue: "DICER1-associated embryonal lung tumor spanning purely cystic (type I/Ir), cystic-solid (type II), and solid (type III) patterns.",
    summary:
      "An embryonal mesenchymal malignancy of infancy and early childhood, classified by its cystic and solid components into types I, Ir, II, and III.",
    clinical: [
      "Type I typically presents in infancy, with a median age of approximately 9 months; types II and III present in older children, with median ages of approximately 36 and 42 months, respectively.",
      "No consistent sex predilection is established.",
      "Arises in lung or subpleural mesenchyme.",
      "Type I may present with dyspnea or pneumothorax from cyst rupture, or as an incidental cyst; types II/III may cause dyspnea, weight loss, and fever.",
      "A personal or family history of DICER1-associated tumors may be present.",
    ],
    criteria: [
      "Young child with a cystic, cystic-solid, or solid intrapulmonary mass.",
      "Type I: multilocular cyst with subepithelial primitive mesenchymal cell collections and/or nodules of cartilage after adequate sampling.",
      "Type Ir: type I-like cystic architecture without an identifiable primitive mesenchymal component; diagnosis may remain difficult.",
      "Types II/III: primitive sarcoma with variable blastemal, rhabdomyosarcomatous, spindle-cell, and cartilaginous components; type II retains cystic areas, whereas type III is solid.",
      "Pathogenic DICER1 alterations in tumor tissue, particularly loss-of-function and RNase IIIb hotspot variants, strongly support the diagnosis.",
    ],
    histology: [
      "Type I shows expanded airspaces with widened septa lined by alveolar- or bronchiolar-type epithelium.",
      "Type I contains focal or multifocal subepithelial collections of primitive mesenchymal cells in cyst walls.",
      "Primitive cells may show rhabdomyoblastic differentiation with eosinophilic cytoplasmic tails and cross-striations.",
      "Small nodules of immature cartilage or mature spindle cells may occur in septa.",
      "Type Ir has a type I-like cystic architecture but lacks identifiable primitive mesenchymal elements.",
      "Type II shows primitive cells extending beyond the subepithelial zone, expanding septa and forming solid sarcomatous nodules.",
      "Type III is a purely solid sarcoma resulting from overgrowth of the cystic component.",
      "Types II/III may show blastemal nests, embryonal rhabdomyosarcoma-like areas, spindle-cell/fibrosarcomatous areas, and immature or malignant cartilage.",
      "Anaplasia is common in types II and III.",
    ],
    ihc: [
      "Rhabdomyoblastic areas may express desmin, myogenin, and MyoD1.",
      "Immunophenotype varies with the sarcomatous lineages represented and is not by itself specific for pleuropulmonary blastoma.",
      "When synovial sarcoma is considered, epithelial markers may support that diagnosis rather than pleuropulmonary blastoma.",
    ],
    differential: [
      {
        name: "Fetal Lung Interstitial Tumor",
        distinction:
          "A well-circumscribed spongy neonatal mass with bland, uniformly distributed septal mesenchymal cells, smaller airspaces, and no mitotic activity; pleuropulmonary blastoma has focal primitive subepithelial cells/cartilage or a malignant sarcomatous component.",
      },
      {
        name: "Congenital Peribronchial Myofibroblastic Tumor",
        distinction:
          "Shows bland but mitotically active fascicular spindle cells, peribronchial growth, and large benign cartilage islands; pleuropulmonary blastoma has cyst-wall primitive cells or a more overtly malignant, heterogeneous sarcoma.",
      },
      {
        name: "Cystic Synovial Sarcoma",
        distinction:
          "An important consideration in older children or adolescents with a cystic mass and spindle-cell component; epithelial marker expression and an SS18-related fusion support synovial sarcoma.",
      },
      {
        name: "Chest Wall or Mediastinal Rhabdomyosarcoma",
        distinction:
          "A primary mass centered in the chest wall, diaphragm, or mediastinum favors rhabdomyosarcoma; pleuropulmonary blastoma is centered in lung parenchyma and may show DICER1 alterations.",
      },
    ],
    molecular: [
      "Germline pathogenic DICER1 loss-of-function variants underlie DICER1 tumor predisposition syndrome in many patients.",
      "Tumors typically acquire a second somatic DICER1 RNase IIIb hotspot missense variant, commonly involving p.E1705, p.D1709, p.G1809, p.D1810, or p.E1813.",
      "Tumor testing for pathogenic DICER1 loss-of-function and RNase IIIb missense variants is diagnostically useful.",
      "TP53 mutation or loss is also common.",
    ],
    pitfalls: [
      "Extensively sample type I cysts because primitive mesenchymal foci and cartilage may be focal.",
      "Type Ir lacks a primitive component and may be difficult to distinguish from blebs or postinfectious cysts; correlate with age, family history, and DICER1 status.",
      "A limited biopsy may sample only one sarcomatous pattern in type II/III disease; the tumor is often heterogeneous.",
      "For a cystic spindle-cell lesion in an older child or adolescent, actively exclude synovial sarcoma with epithelial markers and SS18 fusion testing.",
    ],
  },
  {
    name: "Cardiac Rhabdomyoma",
    group: "Pediatric Cardiac Tumors",
    clue: "Usually multiple, well-demarcated myocardial nodules composed of enlarged vacuolated myocytes with characteristic spider cells; strongly associated with tuberous sclerosis.",
    summary:
      "A benign hamartomatous proliferation of developing striated cardiac myocytes and the most common cardiac neoplasm in children.",
    clinical: [
      "Most often detected prenatally or during infancy and childhood; no specific sex predilection is stated.",
      "Occurs most frequently in the ventricular myocardium but may also involve the atria.",
      "Usually multiple and intramural; intracavitary pedunculated or sessile masses may occur.",
      "Prenatal findings may include arrhythmia, hydrops, or impaired fetal growth; a family history of tuberous sclerosis may be present.",
      "Children may be asymptomatic or present with a murmur, arrhythmia, conduction abnormality, or hemodynamic obstruction.",
      "A strong association with tuberous sclerosis complex is reported; cardiac rhabdomyoma may be its earliest recognized manifestation.",
    ],
    criteria: [
      "Well-demarcated, often multiple myocardial nodules composed of enlarged vacuolated cardiac myocytes.",
      "Abundant glycogen-rich clear sarcoplasm with radial cytoplasmic extensions from the centrally located nucleus to the cell membrane (spider cells).",
      "Clinical or imaging evidence of a cardiac mass, often homogeneous and echogenic on echocardiography, supports the diagnosis.",
      "A diagnosis of tuberous sclerosis complex is supportive but is not required for the histologic diagnosis.",
    ],
    histology: [
      "Well-defined but unencapsulated nodules are readily distinguished from surrounding myocardium.",
      "Lesional cells are enlarged myocytes with abundant clear, vacuolated sarcoplasm due to glycogen accumulation.",
      "Characteristic spider cells show radial sarcoplasmic strands extending from a central nucleus to the cell membrane.",
      "Electron microscopy may show abundant glycogen, rare mitochondria, and peripherally distributed intercalated discs.",
      "Lesions are typically multiple and white-yellow on gross examination.",
    ],
    ihc: [
      "Tumor cells express striated muscle markers, including myoglobin and desmin.",
      "Actin and vimentin are also reported as positive.",
    ],
    differential: [],
    pitfalls: [
      "Do not interpret the clear cytoplasm as epithelial or adipocytic differentiation; it reflects abundant intracellular glycogen.",
      "The characteristic spider-cell morphology is the key histologic clue.",
      "Cardiac rhabdomyomas often regress spontaneously; clinical management is usually conservative unless significant obstruction or arrhythmia is present.",
    ],
  },
];

const overview = [
  {
    name: "Fetal Lung Interstitial Tumor",
    pattern: "Solid or spongy microcystic mass",
    key: "Uniform bland mesenchymal cells expanding alveolar septa",
  },
  {
    name: "Congenital Peribronchial Myofibroblastic Tumor",
    pattern: "Solid peribronchial mass",
    key: "Bland mitotically active spindle-cell fascicles with benign cartilage islands",
  },
  {
    name: "Pleuropulmonary Blastoma",
    pattern: "Cystic (I/Ir), cystic-solid (II), or solid (III)",
    key: "Primitive subepithelial mesenchyme or malignant heterogeneous sarcoma; DICER1-associated",
  },
  {
    name: "Cardiac Rhabdomyoma",
    pattern: "Usually multiple intramural myocardial nodules",
    key: "Glycogen-rich vacuolated myocytes with characteristic spider cells; association with tuberous sclerosis",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function ThoracicTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );

  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Thoracic Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic overview of pediatric thoracic tumors, including primary
          lung and cardiac entities, emphasizing clinical presentation, growth
          pattern, cytology, immunophenotype, and diagnostically useful
          molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            The chapter includes three primary pediatric lung entities and one
            cardiac entity; classify each by its characteristic anatomic and
            histologic pattern.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Typical Pattern</th>
                <th className="px-4 py-3">Key Diagnostic Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.pattern}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Establish the anatomic compartment.</strong> Separate
            intraparenchymal lung masses from myocardial masses; prenatal
            detection is common in both fetal lung lesions and cardiac
            rhabdomyoma.
          </li>
          <li>
            <strong>2. For lung lesions, map the architecture.</strong> Look for
            uniformly expanded alveolar septa (fetal lung interstitial tumor),
            peribronchial fascicles with benign cartilage (congenital
            peribronchial myofibroblastic tumor), or cystic/solid embryonal
            tumor (pleuropulmonary blastoma).
          </li>
          <li>
            <strong>3. For cardiac masses, look for spider cells.</strong>{" "}
            Glycogen-rich vacuolated myocytes with radial sarcoplasmic
            extensions strongly support cardiac rhabdomyoma; assess for tuberous
            sclerosis complex.
          </li>
          <li>
            <strong>4. Use molecular testing selectively.</strong> ALK fusions
            may support fetal lung interstitial tumor; reported ETV6::NTRK3
            findings in congenital peribronchial myofibroblastic tumor are not
            definitive; DICER1 alterations are diagnostically useful in
            pleuropulmonary blastoma. Molecular testing is not clinically
            relevant for cardiac rhabdomyoma.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, markers, or differentials..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button
          onClick={() =>
            setExpanded(
              expanded.length === entities.length
                ? []
                : entities.map((e) => e.name),
            )
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    {entity.differential.length > 0 && (
                      <section>
                        <h3 className="mb-2 text-base font-semibold text-slate-900">
                          Differential Diagnosis
                        </h3>
                        <div className="space-y-3">
                          {entity.differential.map((d) => (
                            <div
                              key={d.name}
                              className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                            >
                              <p className="text-sm font-semibold text-slate-900">
                                {d.name}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-slate-700">
                                {d.distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>

      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Interpret morphology and molecular findings in conjunction with patient
        age, imaging, clinical history, and adequate tumor sampling. For
        pleuropulmonary blastoma, assess DICER1 status and consider genetic
        counseling when appropriate; evaluate patients with cardiac rhabdomyoma
        for tuberous sclerosis complex.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
