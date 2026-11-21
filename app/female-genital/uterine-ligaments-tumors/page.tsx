"use client";
import { useMemo, useState } from "react";
type Profile = {
  id: string;
  name: string;
  category: string;
  clue: string;
  location: string;
  histology: string[];
  ihc: string[];
  differential: [string, string][];
  molecular: string[];
  clinical: string[];
  pitfalls: string[];
  criteria: string[];
};
const profiles: Profile[] = [
  {
    id: "papillary-cystadenoma",
    name: "Papillary Cystadenoma",
    category: "Benign epithelial / proposed mesonephric-type tumor",
    clue: "Cystic-lobulated mass with complex tubulopapillary growth of bland, non-ciliated cuboidal cells; consider von Hippel–Lindau (VHL) syndrome.",
    location:
      "Usually uterine ligaments; less commonly fallopian tube or ovary.",
    histology: [
      "Cystic, lobulated lesion with a thick fibrotic capsule and internal fibrous bands, creating a solid-cystic appearance.",
      "Tubulocystic to papillary growth, with broad-based and delicate branching papillae; focal solid areas may occur.",
      "Lining cells are cuboidal to low columnar, non-ciliated, with clear to eosinophilic cytoplasm. Nuclei are uniform with inconspicuous nucleoli.",
      "Stromal hyalinization and prominent subepithelial blood vessels are common.",
      "Cytologic atypia, mitotic activity, and necrosis are typically absent.",
    ],
    ihc: [
      "Frequently positive: AE1/AE3, EMA, CK7, PAX8, and PAX2.",
      "WT1, CD10, and calretinin are variably positive.",
      "ER and PR are negative.",
      "The profile supports epithelial differentiation and a proposed mesonephric association; no single marker is independently diagnostic.",
    ],
    differential: [
      [
        "Wolffian tumor",
        "Usually shows mixed hollow and solid tubules, sieve-like cysts, and diffuse growth. It is usually negative for EMA, claudin-4, PAX8, GATA3, and TTF1.",
      ],
      [
        "Müllerian serous or other epithelial neoplasm",
        "Assess epithelial atypia, papillary complexity, and destructive invasion. Bland non-ciliated lining cells and the fibrotic cystic-lobulated architecture favor papillary cystadenoma.",
      ],
      [
        "Secondary / metastatic papillary lesion",
        "Correlate with clinical history, distribution, and the complete immunophenotype; no single ancillary marker panel is established for this differential; interpretation should be guided by morphology and clinical context.",
      ],
    ],
    molecular: [
      "VHL mutation or allelic loss has been reported; demonstration of a VHL alteration may support the diagnosis in a challenging case.",
      "The strong association with VHL syndrome is clinically important; this tumor may be the sentinel manifestation.",
    ],
    clinical: [
      "Occurs in adults and may present with abdominal pain; some lesions are incidental.",
      "Extremely rare; most reported patients have VHL syndrome.",
      "The vast majority are benign, although rare exceptions have been reported.",
    ],
    pitfalls: [
      "Do not dismiss this as an incidental benign cystic neoplasm without considering the VHL association.",
      "Mesonephric origin is proposed from location and immunophenotype, not definitively established.",
    ],
    criteria: [
      "Essential: cystic / lobulated mass with complex tubulopapillary growth of non-ciliated cuboidal cells.",
      "Desirable: personal or family history of VHL syndrome.",
    ],
  },
  {
    id: "wolffian-tumor",
    name: "Wolffian Tumor",
    category: "Presumed mesonephric / Wolffian tumor",
    clue: "Broad-ligament tumor with hollow-to-solid tubules, sieve-like cysts, and diffuse growth; cytology is usually bland and IHC is variable.",
    location:
      "Most often broad ligament; rare cases in ovary, fallopian tube, or non-adnexal sites.",
    histology: [
      "Usually well-circumscribed and solid or solid-cystic; hemorrhage, necrosis, or focal calcification may be present.",
      "Admixture of hollow to solid tubules, sieve-like cysts, and diffuse growth; proportions vary.",
      "Hyalinized stromal bands may be prominent and nodular or delicate and interspersed.",
      "Cells are cuboidal to ovoid, occasionally spindled, with scant cytoplasm, small nuclei, and inconspicuous to small nucleoli.",
      "PAS-positive eosinophilic luminal secretions may be present. Atypia and mitotic activity are usually minimal.",
    ],
    ihc: [
      "Variable expression of sex cord-stromal, epithelial, and mesothelial markers, hormone receptors, and CD10.",
      "Usually negative for EMA, claudin-4, PAX8, GATA3, and TTF1.",
      "Despite the presumed Wolffian origin, these tumors do not reliably show the GATA3 / TTF1 phenotype of mesonephric carcinoma.",
    ],
    differential: [
      [
        "STK11 adnexal tumor",
        "Important overlap in morphology and IHC. STK11 adnexal tumor is supported by complete cytoplasmic STK11 loss and/or an STK11 genomic alteration; it is often aggressive and may be associated with Peutz–Jeghers syndrome.",
      ],
      [
        "Mesonephric / mesonephric-like carcinoma",
        "KRAS / NRAS alterations may support these mimics in the appropriate setting. Wolffian tumors are usually GATA3- and TTF1-negative and lack recurring genomic alterations.",
      ],
      [
        "Sex cord-stromal tumor",
        "Wolffian tumors may express sex cord markers, so a single positive marker is not diagnostic. FOXL2 or DICER1 alterations may help evaluate mimics.",
      ],
      [
        "Endometrioid carcinoma",
        "Correlate with Müllerian morphology and phenotype; PTEN, PIK3CA, or ARID1A alterations may support endometrioid lineage.",
      ],
      [
        "Peritoneal mesothelioma",
        "Assess morphology and a broader mesothelial panel; BAP1, CDKN2A, or NF2 alterations may help in selected cases.",
      ],
    ],
    molecular: [
      "Wolffian tumors lack recurring genomic alterations.",
      "In challenging cases, molecular testing may help exclude mimics: KRAS / NRAS (mesonephric carcinoma), STK11 (STK11 adnexal tumor), FOXL2 / DICER1 (sex cord-stromal tumor), PTEN / PIK3CA / ARID1A (endometrioid carcinoma), and BAP1 / CDKN2A / NF2 (mesothelioma).",
    ],
    clinical: [
      "Age range 19–83 years (mean approximately 45); many patients are middle-aged.",
      "May present with abdominopelvic pain or abnormal bleeding; incidental detection is common.",
      "Usually benign. Rare recurrences have been reported, sometimes after incomplete excision or iatrogenic dissemination.",
      "Some historically reported malignant cases may represent morphologic mimics.",
    ],
    pitfalls: [
      "Do not diagnose mesonephric carcinoma solely from presumed Wolffian origin or tubular morphology.",
      "GATA3 / TTF1 negativity alone does not establish Wolffian tumor; integrate site, architecture, full IHC, and molecular findings.",
      "Actively exclude STK11 adnexal tumor because behavior and hereditary implications differ.",
    ],
    criteria: [
      "Essential: typically broad-ligament origin with tubular, sieve-like, and/or solid growth.",
      "Bland cytology and the characteristic admixture of architectural patterns provide additional support.",
    ],
  },
  {
    id: "stk11-adnexal-tumor",
    name: "STK11 Adnexal Tumor",
    category: "Adnexal tumor of uncertain histogenesis",
    clue: "Morphologically diverse paratubal / para-ovarian tumor with interanastomosing cords and trabeculae, myxoid-type stroma, and STK11 loss; distinguish from usually indolent Wolffian tumor.",
    location:
      "Usually paratubal / para-ovarian soft tissue; rarely ovary, fallopian tube, uterine serosa, or abdominopelvic peritoneum.",
    histology: [
      "Usually solid or solid-cystic, often with hemorrhage and necrosis.",
      "Most common pattern: interanastomosing cords and trabeculae. Other patterns include cribriform, tubular, cystic, acinar, papillary, nested, and solid.",
      "Stroma is often myxoid, but may be edematous, hyalinized, or loosely collagenous.",
      "Cells are columnar to cuboidal with relatively uniform atypia, round to ovoid nuclei, vesicular chromatin, prominent nucleoli, and eosinophilic to clear cytoplasm.",
      "Overt pleomorphism is absent. Spindled cells may occur but are rarely dominant; signet ring-like cells or whorling may occur.",
      "Mitoses are variable; necrosis is uncommon in the source description.",
    ],
    ihc: [
      "Complete loss of cytoplasmic STK11 staining is a key finding.",
      "Other markers are nonspecific: keratins, sex cord and mesothelial markers, hormone receptors, CD10, and desmin may be variably expressed.",
      "PAX8, EMA, GATA3, and SF1 may show limited expression.",
      "Claudin-4, FOXL2, and TTF1 are negative; p53 is wild-type.",
    ],
    differential: [
      [
        "Wolffian tumor",
        "The most consequential differential. Morphology and IHC overlap; STK11 loss and/or genomic alteration supports STK11 adnexal tumor. Wolffian tumors lack recurring genomic alterations and are usually benign.",
      ],
      [
        "Sex cord-stromal tumor",
        "Sex cord markers may be variable or limited. FOXL2 is negative in the source profile; consider FOXL2 / DICER1 alterations when evaluating mimics.",
      ],
      [
        "Mesonephric / mesonephric-like carcinoma",
        "GATA3 and TTF1 are usually negative in STK11 adnexal tumor; KRAS / NRAS alterations may support mesonephric carcinoma in the proper setting.",
      ],
      [
        "Endometrioid carcinoma",
        "Assess for convincing Müllerian epithelial differentiation and alterations such as PTEN, PIK3CA, or ARID1A; STK11 alteration supports this entity.",
      ],
    ],
    molecular: [
      "Defined by STK11 loss-of-function alterations, including point mutations, insertions / deletions, structural rearrangements, and deletions.",
      "Testing should cover the entire STK11 coding region and assess copy-number alterations.",
      "Approximately 30% are associated with Peutz–Jeghers syndrome.",
    ],
    clinical: [
      "Age range 16–74 years (median approximately 40). Most present with a pelvic mass; approximately 10–15% are incidental.",
      "Tumors are often large (40–225 mm; median approximately 110 mm).",
      "Metastatic disease is present at diagnosis in approximately 50–60%; recurrence has been reported in approximately 80%.",
      "Disease-related death occurs in approximately 50% in the cited series, although follow-up is limited. Prognostic features have not been identified.",
    ],
    pitfalls: [
      "Do not classify as Wolffian tumor based on tubular, trabecular, or sieve-like architecture alone.",
      "Interpret STK11 loss with appropriate internal controls; use molecular testing when needed.",
      "Recognition has implications for Peutz–Jeghers syndrome evaluation and clinical management because many tumors behave aggressively.",
    ],
    criteria: [
      "Essential: multiple histologic patterns, often interanastomosing cords / trabeculae, with myxoid, edematous, or hyalinized stroma.",
      "Essential support: STK11 IHC loss and/or an STK11 genomic alteration, particularly in patients without known Peutz–Jeghers syndrome.",
    ],
  },
];
const overview = [
  [
    "Papillary cystadenoma",
    "Tubulocystic / papillary",
    "PAX8+, PAX2+, CK7+; ER / PR−",
    "VHL association; usually benign",
  ],
  [
    "Wolffian tumor",
    "Hollow / solid tubules; sieve-like cysts; diffuse",
    "Variable; usually EMA−, claudin-4−, PAX8−, GATA3−, TTF1−",
    "Usually benign; exclude mimics",
  ],
  [
    "STK11 adnexal tumor",
    "Interanastomosing cords / trabeculae; diverse patterns",
    "STK11 cytoplasmic loss; claudin-4−, FOXL2−, TTF1−",
    "Often aggressive; PJS association",
  ],
];
function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((x, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
          {x}
        </li>
      ))}
    </ul>
  );
}
export default function UterineLigamentTumorsPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string[]>(["stk11-adnexal-tumor"]);
  const [all, setAll] = useState(false);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return !q
      ? profiles
      : profiles.filter((t) =>
          [
            t.name,
            t.category,
            t.clue,
            t.location,
            ...t.histology,
            ...t.ihc,
            ...t.differential.flat(),
            ...t.molecular,
            ...t.clinical,
            ...t.pitfalls,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q),
        );
  }, [query]);
  const toggle = (id: string) =>
    setOpen((v) => (v.includes(id) ? v.filter((x) => x !== id) : [...v, id]));
  const toggleAll = () => {
    setOpen(all ? [] : profiles.map((x) => x.id));
    setAll(!all);
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-teal-700">
            PathologyGPS · Female Genital Tract
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Tumors of the Broad Ligament and Other Uterine Ligaments
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
            Diagnostic guide to uncommon ligament-associated tumors, emphasizing
            histologic architecture, immunohistochemistry, molecular testing,
            and clinically important mimics.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Most common benign entities
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Leiomyoma and adenomyoma
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Most common sarcoma
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                Leiomyosarcoma
              </p>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                Syndrome-associated clues
              </p>
              <p className="mt-1 font-semibold text-slate-900">
                VHL · Peutz–Jeghers
              </p>
            </div>
          </div>
        </header>
        <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                At-a-Glance Diagnostic Overview
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                High-yield features of the principal uncommon epithelial and
                adnexal tumors encountered in the uterine ligament region.
              </p>
            </div>
            <label className="w-full sm:max-w-sm">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Search this page
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search morphology, marker, syndrome..."
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                  {[
                    "Entity",
                    "Architecture",
                    "IHC pattern / clue",
                    "Clinical significance",
                  ].map((x) => (
                    <th key={x} className="px-3 py-3">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {overview.map((r, i) => (
                  <tr key={r[0]} className="border-b border-slate-100">
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className={`px-3 py-3 align-top leading-5 ${j === 0 ? "font-semibold text-slate-900" : "text-slate-700"}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 p-4">
              <h3 className="text-sm font-bold text-rose-900">
                Critical distinction: Wolffian vs. STK11 adnexal tumor
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Morphology and IHC may overlap. Look for complete cytoplasmic
                STK11 loss and confirmatory genomic testing when appropriate.
                Wolffian tumors are usually benign; STK11 adnexal tumors are
                often aggressive and may signal Peutz–Jeghers syndrome.
              </p>
            </div>
            <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
              <h3 className="text-sm font-bold text-amber-900">
                Clinical clue: papillary cystadenoma
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                A broad-ligament papillary cystadenoma should prompt
                consideration of VHL syndrome and may be its sentinel
                manifestation.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Entity Profiles
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Key diagnostic clues remain visible; expand a profile for the
                complete discussion.
              </p>
            </div>
            <button
              onClick={toggleAll}
              className="self-start rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:self-auto"
            >
              {all ? "Collapse all" : "Expand all"}
            </button>
          </div>
          <div className="space-y-4">
            {filtered.map((t) => {
              const isOpen = open.includes(t.id);
              return (
                <article
                  key={t.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(t.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${t.id}-body`}
                    className="w-full p-5 text-left hover:bg-slate-50/80"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-semibold ${isOpen ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-700"}`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-slate-900">
                            {t.name}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                            {t.category}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {t.clue}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">
                          <b className="text-slate-600">Typical location:</b>{" "}
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      id={`${t.id}-body`}
                      className="border-t border-slate-200 p-5"
                    >
                      <div className="grid gap-5 lg:grid-cols-2">
                        <section>
                          <h4 className="mb-3 border-b-2 border-rose-500 pb-2 text-xs font-bold uppercase tracking-[.18em] text-rose-700">
                            Histology Description
                          </h4>
                          <List items={t.histology} />
                          <div className="mt-5 rounded-xl bg-slate-50 p-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                              Essential / Desirable Diagnostic Criteria
                            </h5>
                            <ul className="mt-2 space-y-2">
                              {t.criteria.map((x, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-6 text-slate-700"
                                >
                                  • {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>
                        <section className="space-y-5">
                          <div className="rounded-xl bg-sky-50 p-4">
                            <h4 className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-sky-800">
                              Immunohistochemistry
                            </h4>
                            <ul className="space-y-2">
                              {t.ihc.map((x, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-6 text-slate-700"
                                >
                                  • {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-3 border-b-2 border-emerald-600 pb-2 text-xs font-bold uppercase tracking-[.18em] text-emerald-800">
                              Differential Diagnosis
                            </h4>
                            <div className="space-y-3">
                              {t.differential.map(([name, desc]) => (
                                <div key={name}>
                                  <p className="text-sm font-semibold text-slate-900">
                                    {name}
                                  </p>
                                  <p className="mt-1 text-sm leading-6 text-slate-700">
                                    {desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="rounded-xl bg-violet-50 p-4">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-violet-800">
                              Molecular Pathology
                            </h4>
                            <ul className="space-y-2">
                              {t.molecular.map((x, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-6 text-slate-700"
                                >
                                  • {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-slate-600">
                              Clinical Features & Behavior
                            </h4>
                            <ul className="space-y-2">
                              {t.clinical.map((x, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-6 text-slate-700"
                                >
                                  • {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="rounded-xl bg-amber-50 p-4">
                            <h4 className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-amber-800">
                              Diagnostic Pitfalls
                            </h4>
                            <ul className="space-y-2">
                              {t.pitfalls.map((x, i) => (
                                <li
                                  key={i}
                                  className="text-sm leading-6 text-slate-700"
                                >
                                  • {x}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                No matching entities or diagnostic terms found.
              </div>
            )}
          </div>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Practical Diagnostic Workflow
          </h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-3">
            <li className="rounded-xl bg-slate-50 p-4">
              <b className="text-xs uppercase tracking-wider text-teal-700">
                01 · Establish site
              </b>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Confirm whether the mass is centered in the broad ligament,
                paratubal / para-ovarian soft tissue, uterine serosa, ovary, or
                another site.
              </p>
            </li>
            <li className="rounded-xl bg-slate-50 p-4">
              <b className="text-xs uppercase tracking-wider text-teal-700">
                02 · Classify architecture
              </b>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Identify tubulocystic-papillary, mixed tubular / sieve-like /
                diffuse, or cord-trabecular and other diverse patterns.
              </p>
            </li>
            <li className="rounded-xl bg-slate-50 p-4">
              <b className="text-xs uppercase tracking-wider text-teal-700">
                03 · Resolve key differential
              </b>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Use focused IHC and molecular testing when needed, especially
                STK11 assessment for suspected STK11 adnexal tumor and VHL
                evaluation for papillary cystadenoma.
              </p>
            </li>
          </ol>
          <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-5 text-slate-500">
            Additional ligament-associated mesenchymal tumors include leiomyoma,
            adenomyoma, and leiomyosarcoma. Their detailed morphologic
            assessment follows the corresponding uterine smooth muscle tumor
            criteria.
          </p>
        </section>
      </div>
    </main>
  );
}
