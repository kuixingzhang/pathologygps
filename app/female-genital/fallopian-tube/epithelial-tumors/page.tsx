"use client";
import { useMemo, useState } from "react";

type Item = {
  name: string;
  group: string;
  summary: string;
  location: string;
  histology: string[];
  ihc: string[];
  differential: string[];
  criteria: string[];
  pearls?: string[];
};

const items: Item[] = [
  {
    name: "Serous adenofibroma",
    group: "Benign serous tumors",
    summary:
      "Benign biphasic tumor composed of fibromatous stroma and bland tubal-type epithelium.",
    location:
      "Fallopian tube; many are microscopic, with the fimbria a common site.",
    histology: [
      "Admixed epithelial and mesenchymal components; may be cystic.",
      "Dense fibromatous stroma may be nodular or papillary.",
      "Papillae or cystic spaces are lined by bland tubal-type epithelium containing secretory and ciliated cells.",
      "No significant epithelial atypia or destructive stromal invasion.",
    ],
    ihc: [
      "The supplied WHO text does not specify a required IHC panel.",
      "Morphology is generally sufficient when the epithelial lining is bland and the stroma is fibromatous.",
    ],
    differential: [
      "Serous papilloma: delicate branching fibrovascular papillae predominate, without the prominent fibromatous stromal component.",
      "STIC: malignant cytology and aberrant p53; Ki-67 is increased in the atypical focus.",
      "HGSC: destructive stromal invasion and high-grade malignant morphology.",
    ],
    criteria: [
      "Bland tubal-type epithelium.",
      "Fibromatous stromal component in a benign biphasic tumor.",
      "No destructive stromal invasion.",
    ],
    pearls: [
      "The distinction from serous papilloma may show interobserver variation and has no clinical significance in the source.",
      "Most lesions are small; many are microscopic.",
    ],
  },
  {
    name: "Serous papilloma",
    group: "Benign serous tumors",
    summary:
      "Benign papillary proliferation lined by bland tubal-type epithelium.",
    location:
      "Tubal mucosa; may be loosely attached and project into the lumen.",
    histology: [
      "Delicate, branching fibrovascular stalks.",
      "Papillae lined by bland cuboidal to columnar epithelial cells.",
      "No significant cytologic atypia or destructive invasion.",
      "May appear as friable intraluminal tissue.",
    ],
    ihc: [
      "The WHO source does not identify a diagnostic IHC panel.",
      "Use morphology and careful assessment for atypia and invasion.",
    ],
    differential: [
      "Serous adenofibroma: has a more conspicuous fibromatous stromal component; distinction is not clinically significant.",
      "STIC: malignant cytology with aberrant p53; Ki-67 is generally increased in the atypical focus.",
      "Exophytic STIC versus expansile-type HGSC without invasion: outcome-based criteria are not established in the source.",
    ],
    criteria: [
      "Delicate papillary proliferation attached to tubal mucosa.",
      "Bland tubal-type epithelial lining.",
      "No destructive stromal invasion.",
    ],
  },
  {
    name: "Serous tubal intraepithelial carcinoma (STIC)",
    group: "Malignant epithelial tumors",
    summary:
      "Cytologically malignant serous epithelial proliferation confined to tubal mucosa, without stromal invasion.",
    location:
      "Tubal mucosa, preferentially the fimbria; usually solitary and unilateral, but may be multifocal or bilateral.",
    histology: [
      "Usually microscopic and not grossly visible; reported size 0.1–8 mm.",
      "Variable combination of epithelial stratification/mucosal thickening, loss of polarity, loss of cilia, nuclear enlargement, increased N:C ratio, hyperchromasia, pleomorphism, irregular nuclear membranes, prominent nucleoli, nuclear molding, mitoses, and apoptotic bodies.",
      "Cellular detachment/exfoliation and an irregular mucosal surface may occur.",
      "Some lesions are attenuated or flat and subtle at low magnification; rare pagetoid growth may intermingle with residual ciliated cells.",
      "The defining distinction from invasive HGSC is absence of stromal invasion.",
    ],
    ihc: [
      "p53: aberrant/mutation-type expression is essential in the WHO criteria. Patterns include diffuse strong overexpression or complete absence (null pattern), interpreted with internal controls.",
      "Ki-67: >10% in the atypical focus supports STIC and improves reproducibility; score only the atypical epithelium.",
      "The source cites STIC Consortium consensus that p53 IHC is mandatory; Ki-67 is useful but not mandatory.",
      "In pagetoid lesions, do not score admixed non-atypical ciliated cells.",
    ],
    differential: [
      "p53 signature: aberrant p53 in morphologically bland epithelium with low proliferation (typically Ki-67 <10%); no established clinical significance and not reportable.",
      "STIL: atypia that does not meet reproducible criteria for STIC, such as non-aberrant p53 or low Ki-67; an intermediate descriptive category.",
      "Invasive HGSC: stromal invasion in the tubal wall in the usual occult-tumor setting.",
      "Secondary involvement by endometrial serous carcinoma, endometrioid carcinoma, endocervical adenocarcinoma, or non-gynecologic malignancy must be considered in context.",
    ],
    criteria: [
      "Severely atypical serous-type epithelium in tubal mucosa.",
      "Aberrant p53 immunohistochemical expression.",
      "No stromal invasion.",
    ],
    pearls: [
      "Perform p53/Ki-67 only in morphologically atypical foci; do not use them as screening stains on entirely unremarkable mucosa.",
      "For Ki-67 near 10%, compare the atypical focus with background epithelium.",
      "A p53 signature alone is not STIC.",
    ],
  },
  {
    name: "High-grade serous carcinoma (HGSC)",
    group: "Malignant epithelial tumors",
    summary:
      "Invasive high-grade malignant epithelial neoplasm with serous differentiation arising in the fallopian tube.",
    location:
      "Fallopian tube, commonly fimbria; may coexist with extensive ovarian and/or peritoneal disease.",
    histology: [
      "Morphology is the same as ovarian HGSC: high-grade serous carcinoma with marked nuclear atypia and complex architecture.",
      "In occult early disease, tumor is often localized to fimbria and distinguished from STIC by invasion into submucosal/tubal wall stroma.",
      "Grossly evident disease may replace the tube or be confined to its lumen; microscopic tubal disease may coexist with much larger ovarian/peritoneal tumor.",
      "Rarely, malignant tubal epithelium has an exophytic papillary pattern without invasion; criteria separating this from exophytic STIC are not established.",
    ],
    ihc: [
      "The source states that histology and IHC are identical to ovarian HGSC.",
      "Typical supportive profile in practice: aberrant p53, often diffuse WT1, PAX8 and epithelial marker expression; interpret as a profile, not a site-of-origin test.",
      "The supplied excerpt does not provide a complete required panel; no single stain establishes tubal origin.",
    ],
    differential: [
      "STIC: intraepithelial mucosal lesion without stromal invasion; occult invasive HGSC invades tubal wall stroma.",
      "Ovarian/primary peritoneal HGSC: if tube is involved by STIC and/or HGSC in multiorgan extrauterine disease, consensus assigns tubal origin regardless of relative tumor size.",
      "Uterine serous carcinoma: may secondarily involve tube and simulate STIC/tubal HGSC; compare morphology, distribution, clinical findings, and selected molecular profiles.",
      "Metastatic non-gynecologic carcinoma: exclude with history, morphology, and site-directed IHC.",
    ],
    criteria: [
      "High-grade carcinoma with serous differentiation growing in the fallopian tube.",
      "For occult tubal HGSC, demonstrate stromal invasion to distinguish from STIC.",
      "Assess the complete tubo-ovarian/peritoneal specimen and clinical history.",
    ],
    pearls: [
      "SEE-FIM is advised in risk-reducing salpingectomies and cases of extrauterine HGSC.",
      "Tubal STIC and/or HGSC establishes tubal origin by consensus in multiorgan extrauterine HGSC, regardless of relative tumor size.",
      "Molecular comparison may help clarify clonal relationships in selected synchronous tubal, uterine serous, or disseminated HGSC cases.",
    ],
  },
  {
    name: "Endometrioid carcinoma",
    group: "Malignant epithelial tumors",
    summary:
      "Rare primary tubal carcinoma showing endometrioid differentiation.",
    location:
      "Usually distal two-thirds of tube; may present as a fimbrial mass or diffuse tubal dilatation.",
    histology: [
      "Morphology resembles endometrioid carcinoma of endometrium or ovary, including closely packed endometrioid glands meeting carcinoma criteria.",
      "May be associated with endometriosis, sometimes as an endometrioid polyp.",
      "Rare examples show prominent spindle-cell morphology, squamous-like differentiation, or osseous metaplasia.",
      "The source states that grading criteria and prognostic role for FIGO/Silverberg grading in primary tubal endometrioid carcinoma have not been studied.",
    ],
    ihc: [
      "Usually WT1-negative.",
      "Usually p53 wild-type.",
      "The source does not specify a complete required panel. ER/PR and PAX8 may be used as supportive Müllerian/endometrioid markers in practice; assess MMR as clinically appropriate. These do not establish tubal origin.",
    ],
    differential: [
      "Secondary endometrial endometrioid carcinoma: exclude direct extension or metastasis from synchronous/prior endometrial primary.",
      "Ovarian endometrioid carcinoma: evaluate distribution and relationship to ovary; a tubal mural-centered lesion supports but does not alone prove tubal origin.",
      "HGSC: usually high-grade serous morphology, aberrant p53, and often diffuse WT1; tubal endometrioid carcinoma is usually WT1-negative and p53 wild-type.",
      "Endometriosis-associated atypia: establish unequivocal carcinoma architecture and/or invasion rather than relying on atypia alone.",
    ],
    criteria: [
      "Tubal mural proliferation of closely packed endometrioid glands meeting criteria for endometrioid carcinoma in endometrium/ovary.",
      "Exclude secondary involvement by endometrial or ovarian carcinoma.",
      "Lack of diffuse strong WT1 and usually wild-type p53 are desirable supportive findings.",
    ],
  },
];

const groups = [
  "All entities",
  "Benign serous tumors",
  "Malignant epithelial tumors",
];
const comparison = [
  [
    "STIC",
    "Aberrant / mutation-type",
    "Usually >10% in atypical focus",
    "Severe atypia; mucosal; no invasion",
  ],
  [
    "p53 signature",
    "Aberrant",
    "Low, typically <10%",
    "Bland epithelium; not reportable",
  ],
  [
    "STIL",
    "May be non-aberrant/equivocal",
    "Often below STIC threshold",
    "Atypia insufficient for definitive STIC",
  ],
  [
    "Tubal HGSC",
    "Usually aberrant",
    "High",
    "Invasive high-grade serous carcinoma",
  ],
  [
    "Tubal endometrioid carcinoma",
    "Usually wild-type",
    "Not specified",
    "Usually WT1-negative",
  ],
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}

export default function FallopianTubeEpithelialTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All entities");
  const [open, setOpen] = useState<string[]>([
    "Serous tubal intraepithelial carcinoma (STIC)",
    "High-grade serous carcinoma (HGSC)",
  ]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (x) =>
        (group === "All entities" || x.group === group) &&
        (!q ||
          [
            x.name,
            x.summary,
            x.location,
            ...x.histology,
            ...x.ihc,
            ...x.differential,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [query, group]);
  const toggle = (n: string) =>
    setOpen((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="rounded-3xl bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 p-7 text-white shadow-lg sm:p-10">
          <div className="mb-3 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[.18em] text-teal-100">
            PathologyGPS · Female Genital Tract
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fallopian Tube Epithelial Tumors
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-teal-50/90">
            A morphology-centered diagnostic guide to benign serous tumors,
            STIC, high-grade serous carcinoma, and endometrioid carcinoma—with
            emphasis on precursor recognition, primary-site assignment, SEE-FIM
            sampling, and practical immunohistochemistry.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-teal-50">
            <span className="rounded-full bg-white/10 px-3 py-1">
              WHO-based classification
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Histology + IHC
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              Differential diagnosis
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1">
              SEE-FIM workflow
            </span>
          </div>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel title="Classification at a glance">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50 p-4">
                <h4 className="font-semibold text-emerald-950">
                  Benign serous tumors
                </h4>
                <List items={["Serous adenofibroma", "Serous papilloma"]} />
              </div>
              <div className="rounded-xl bg-rose-50 p-4">
                <h4 className="font-semibold text-rose-950">
                  Malignant epithelial tumors
                </h4>
                <List
                  items={[
                    "Serous tubal intraepithelial carcinoma (STIC)",
                    "High-grade serous carcinoma (HGSC)",
                    "Endometrioid carcinoma",
                  ]}
                />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The supplied WHO chapter identifies HGSC as the principal
              malignant tumor of the tube. Endometrioid carcinoma is rare. STIC
              is the recognized precursor of tubal HGSC and may coexist with
              ovarian/peritoneal HGSC even without an invasive tubal mass.
            </p>
          </Panel>
          <Panel title="Core diagnostic principles">
            <List
              items={[
                "In risk-reducing salpingectomy and extrauterine HGSC, examine the fimbria carefully using SEE-FIM.",
                "Diagnose STIC by integrating atypical morphology with aberrant p53; Ki-67 improves reproducibility but does not replace morphology.",
                "Distinguish STIC from occult invasive HGSC by looking for stromal invasion.",
                "When the tube is involved by STIC and/or HGSC in multiorgan extrauterine disease, consensus assigns the primary site to the tube regardless of relative tumor size.",
                "Consider secondary involvement by endometrial serous/endometrioid carcinoma, endocervical adenocarcinoma, and non-gynecologic malignancy.",
              ]}
            />
          </Panel>
        </div>

        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5">
          <h2 className="text-xl font-bold text-teal-950">
            Diagnostic GPS: specimen-to-diagnosis workflow
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {[
              [
                "1 · Clinical context",
                "Risk-reducing salpingectomy, adnexal mass, known tubo-ovarian/peritoneal HGSC, or incidental tubal finding.",
              ],
              [
                "2 · SEE-FIM sampling",
                "Submit fimbria with longitudinal sections and extensively sample the remaining tube; document laterality and gross findings.",
              ],
              [
                "3 · Morphology first",
                "Assess epithelial atypia, mucosal stratification, papillary growth, and—critically—stromal invasion.",
              ],
              [
                "4 · Targeted IHC",
                "For atypical mucosal foci use p53 and Ki-67. For invasive carcinoma or suspected metastasis, select a differential-directed panel.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="rounded-xl bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-teal-950">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-950">
                Entity reference
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Search by entity, morphology, immunophenotype, or differential
                diagnosis.
              </p>
            </div>
            <div className="grid gap-2 sm:min-w-[430px] sm:grid-cols-[1fr_210px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search histology, IHC, differential…"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-600"
              >
                {groups.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {filtered.map((e) => {
              const isOpen = open.includes(e.name);
              return (
                <article
                  key={e.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
                  >
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        {e.group}
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-slate-950">
                        {e.name}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {e.summary}
                      </p>
                    </div>
                    <span className="mt-1 shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {isOpen ? "Collapse −" : "Expand +"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid gap-5 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div className="space-y-5">
                        <div>
                          <h4 className="mb-2 font-semibold">Localization</h4>
                          <p className="text-sm leading-6 text-slate-700">
                            {e.location}
                          </p>
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">Histopathology</h4>
                          <List items={e.histology} />
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Essential diagnostic criteria
                          </h4>
                          <List items={e.criteria} />
                        </div>
                      </div>
                      <div className="space-y-5">
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Immunohistochemistry
                          </h4>
                          <List items={e.ihc} />
                        </div>
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Key differential diagnoses
                          </h4>
                          <List items={e.differential} />
                        </div>
                        {e.pearls && (
                          <div className="rounded-xl bg-amber-50 p-4">
                            <h4 className="mb-2 font-semibold text-amber-950">
                              Diagnostic pearls
                            </h4>
                            <List items={e.pearls} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                No matching entities. Try a broader search term.
              </div>
            )}
          </div>
        </section>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel title="STIC, p53 signature, and STIL: practical comparison">
            <p className="mb-3 text-sm leading-6 text-slate-600">
              Interpret p53 and Ki-67 in the morphologically atypical epithelial
              focus—not across the entire tubal mucosa.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    {[
                      "Lesion",
                      "p53",
                      "Ki-67",
                      "Morphologic interpretation",
                    ].map((x) => (
                      <th key={x} className="border border-slate-200 p-2.5">
                        {x}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (
                        <td
                          key={i}
                          className="border border-slate-200 p-2.5 align-top"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              STIL is a descriptive intermediate category. A p53 signature is
              not a reportable precursor diagnosis in the supplied WHO text.
            </p>
          </Panel>
          <Panel title="SEE-FIM: sampling and examination checklist">
            <List
              items={[
                "Identify and separately label right and left fallopian tubes.",
                "Amputate the fimbria and section it longitudinally to maximize mucosal evaluation.",
                "Serially section the remaining tube transversely at short intervals and submit according to the validated laboratory protocol and clinical indication.",
                "Thoroughly examine fimbria in risk-reducing specimens even when grossly unremarkable; STIC is typically microscopic.",
                "In extrauterine HGSC, extensively examine tubes to identify STIC or occult invasive tubal HGSC that may establish the primary site.",
                "For an atypical focus, obtain deeper levels as needed and perform targeted p53 and Ki-67.",
              ]}
            />
          </Panel>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Panel title="Assigning the primary site in extrauterine HGSC">
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm leading-6">
              <strong className="text-teal-950">Consensus rule</strong>
              <p className="mt-1">
                If the tube is involved by STIC and/or HGSC, assign the primary
                origin to the fallopian tube in multiorgan extrauterine HGSC,
                regardless of relative tumor size in tube, ovary, or peritoneum.
              </p>
            </div>
            <p className="mt-3 text-sm leading-6">
              Potential mimics include secondary involvement by endometrial
              serous or endometrioid carcinoma, primary endocervical
              adenocarcinoma, and non-gynecologic malignancies. In selected
              difficult cases, molecular comparison may help clarify clonal
              relationships.
            </p>
          </Panel>
          <Panel title="Reporting checklist">
            <List
              items={[
                "Specify histologic diagnosis and, for carcinoma, extent/distribution.",
                "For STIC, document mucosal/fimbrial location and p53 result; include Ki-67 when performed and informative.",
                "For invasive HGSC, document tubal wall stromal invasion and relationship to fimbria, ovary, and peritoneum.",
                "In multiorgan HGSC, state rationale for assigning tubal primary when STIC and/or tubal HGSC is identified.",
                "For endometrioid carcinoma, document tubal mural-centered lesion and evaluation for endometrial/ovarian primary.",
                "Record SEE-FIM processing when applicable and note sampling limitations.",
              ]}
            />
          </Panel>
        </div>

        <footer className="mt-10 border-t border-slate-200 py-6 text-xs leading-5 text-slate-500">
          <p>
            <strong>Scope and source note:</strong> Based on the supplied WHO
            chapter, “Tumours of the fallopian tube.” The excerpt details serous
            adenofibroma/papilloma, STIC, HGSC, and endometrioid carcinoma.
            Adenomatoid tumor and leiomyoma are mentioned in the introduction
            but detailed criteria were not included, so they are not expanded
            here. Practical IHC context beyond the excerpt is identified as
            supportive and not site-defining.
          </p>
          <p className="mt-2">
            Educational reference for professional use. Interpret IHC with
            morphology, clinical history, imaging, and the complete specimen.
            Follow current local protocols and staging standards.
          </p>
        </footer>
      </div>
    </main>
  );
}
