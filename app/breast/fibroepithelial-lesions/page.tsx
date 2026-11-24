const diagnosticSteps = [
  {
    number: "01",
    title: "Confirm a biphasic fibroepithelial lesion",
    detail:
      "Identify both epithelial and stromal components. On core biopsy, integrate the tissue pattern with imaging and clinical findings; a cellular fibroepithelial lesion may not be classifiable with certainty on limited tissue.",
  },
  {
    number: "02",
    title: "Look for the dominant architecture",
    detail:
      "Pericanalicular and/or intracanalicular growth with relatively uniform stroma supports fibroadenoma. Exaggerated intracanalicular growth with well-developed, expansile leaf-like stromal fronds raises phyllodes tumor. Disorganized normal ducts, lobules, and fat without a fibroadenoma-like growth pattern supports hamartoma.",
  },
  {
    number: "03",
    title: "Assess stromal cellularity and distribution",
    detail:
      "Compare stromal cellularity with the epithelial component and assess whether it is uniform, heterogeneous, or accentuated immediately beneath the epithelium. Periepithelial stromal condensation and stromal heterogeneity support phyllodes tumor in the appropriate architecture.",
  },
  {
    number: "04",
    title: "Evaluate atypia, mitoses, overgrowth, and borders",
    detail:
      "For a suspected phyllodes tumor, document stromal cellularity, stromal nuclear atypia, mitotic activity, stromal overgrowth, and tumor border. These features exist on a continuum and must be assessed together, ideally after adequate sampling.",
  },
  {
    number: "05",
    title: "Decide what can be concluded on core biopsy",
    detail:
      "A typical fibroadenoma can usually be diagnosed reliably on core. If the lesion is cellular or the distinction from phyllodes tumor is uncertain, consider a qualified diagnosis such as benign fibroepithelial lesion/neoplasm and recommend radiology-pathology correlation and further sampling/excision as appropriate.",
  },
];

const comparisonRows = [
  {
    entity: "Hamartoma",
    architecture:
      "Well-demarcated, often encapsulated mass with lobules, ducts, fibrous stroma, and adipose tissue in variable proportions",
    stroma:
      "Variable fibrous and adipose components; often prominent intralobular fibrosis and atrophic lobules",
    key: "Disorganized but otherwise normal breast components; no characteristic intracanalicular or pericanalicular fibroadenoma pattern. Correlate with imaging and clinical findings.",
  },
  {
    entity: "Conventional fibroadenoma",
    architecture:
      "Circumscribed biphasic lesion with pericanalicular and/or intracanalicular pattern",
    stroma:
      "Usually uniformly low cellularity, without significant atypia; mitoses uncommon",
    key: "No well-developed leaf-like fronds, no stromal overgrowth, no significant stromal atypia, and low stromal mitotic activity.",
  },
  {
    entity: "Cellular fibroadenoma",
    architecture:
      "Often pericanalicular; mildly to moderately increased stromal cellularity",
    stroma:
      "Usually < 1 stromal mitosis/mm² in the cited WHO description; marked atypia and marked heterogeneity are absent",
    key: "Lacks marked stromal atypia/cellularity, exaggerated intracanalicular architecture, periductal subepithelial stromal condensation, and intratumoral heterogeneity. On core, overlap with benign phyllodes tumor may remain.",
  },
  {
    entity: "Juvenile fibroadenoma",
    architecture: "Often pericanalicular, sometimes large and rapidly growing",
    stroma:
      "Uniform mild-to-moderate increase in cellularity; fascicular spindle cells without significant nuclear atypia; mitotic activity usually low",
    key: "Age/context plus pericanalicular pattern and usual ductal hyperplasia (often gynecomastoid type) support the diagnosis; increased cellularity alone does not establish phyllodes tumor.",
  },
  {
    entity: "Complex fibroadenoma",
    architecture: "Fibroadenoma with one or more defined additional features",
    stroma: "Fibroadenoma background; may be smaller than other fibroadenomas",
    key: "At least one of: sclerosing adenosis, epithelial calcifications, papillary apocrine metaplasia, or cysts > 3 mm.",
  },
  {
    entity: "Myxoid fibroadenoma",
    architecture: "Fibroadenoma architecture with extensive myxoid stroma",
    stroma: "Abundant myxoid change",
    key: "Extensive myxoid stroma is the defining feature; rare cases are associated with Carney complex.",
  },
  {
    entity: "Benign phyllodes tumor",
    architecture:
      "Exaggerated intracanalicular pattern with expansile leaf-like stromal fronds capped by benign epithelium and myoepithelium",
    stroma:
      "Usually more cellular than fibroadenoma; may show periepithelial accentuation and heterogeneity; mitoses usually < 2.5/mm² ",
    key: "Well-developed expansile leaf-like fronds and increased stromal cellularity are central. Borders are usually pushing/delimited; stromal atypia is absent or limited and stromal overgrowth is absent.",
  },
  {
    entity: "Borderline phyllodes tumor",
    architecture:
      "Phyllodes architecture with intermediate or overlapping adverse stromal features",
    stroma:
      "Features fall between benign and malignant categories; grading is a combined assessment rather than a single-feature threshold",
    key: "Use when the overall pattern does not meet the threshold for benign or malignant classification. A borderline grade is appropriate when the combined findings fall between benign and malignant categories; tumors may show up to three adverse criteria.",
  },
  {
    entity: "Malignant phyllodes tumor",
    architecture:
      "Phyllodes tumor, sometimes with marked stromal overgrowth that obscures epithelial elements",
    stroma:
      "Marked stromal hypercellularity and atypia, increased mitoses, stromal overgrowth, and/or infiltrative border; malignant heterologous elements may occur",
    key: "At least four of five adverse histological criteria support a malignant grade: marked stromal cellularity, marked stromal atypia, increased mitoses, stromal overgrowth, and infiltrative border. Malignant heterologous elements also support malignancy.",
  },
  {
    entity: "Periductal stromal tumor",
    architecture:
      "Biphasic pattern with benign ducts surrounded by cellular spindle-cell stroma; lacks typical leaf-like fronds",
    stroma: "Cellular, variably atypical and mitotically active spindle stroma",
    key: "No distinct tumor outline or obvious fronded architecture, but stromal features resemble phyllodes tumor. It is classified as a subtype of phyllodes tumor.",
  },
];

const phyllodesCriteria = [
  {
    criterion: "Stromal cellularity",
    detail:
      "Assess degree and distribution; marked and usually diffuse increase supports malignancy.",
  },
  {
    criterion: "Stromal nuclear atypia",
    detail:
      "Assess degree of pleomorphism; marked atypia is an adverse feature.",
  },
  {
    criterion: "Mitotic activity",
    detail:
      "Increased mitoses are an adverse feature; a mitotic count of ≥ 5/mm² is an adverse feature supporting a malignant grade.",
  },
  {
    criterion: "Stromal overgrowth",
    detail:
      "A low-power field containing only stroma and no epithelial elements meets the stated definition.",
  },
  {
    criterion: "tumor border",
    detail:
      "An infiltrative border is an adverse feature; benign tumors are usually delimited/pushing, although small protrusions may occur.",
  },
];

const ihcRows = [
  {
    question: "Hamartoma versus fibroadenoma",
    markers: "CD34; SMA if a myoid component is suspected",
    interpretation:
      "Diffuse stromal CD34 staining is often seen in fibroadenoma but is not diffuse in hamartoma; in hamartoma, CD34 is mainly in intralobular stroma. Myoid hamartoma may show diffuse strong SMA. IHC is usually not required for a typical hamartoma.",
  },
  {
    question: "Phyllodes tumor versus metaplastic carcinoma",
    markers:
      "Broad-spectrum cytokeratin and p63, interpreted with morphology; molecular testing may help in selected cases",
    interpretation:
      "Diffuse epithelial differentiation favors metaplastic carcinoma. Interpret focal keratin expression and p63 positivity cautiously, because these may occur in phyllodes tumors, particularly malignant cases and limited core biopsies.",
  },
  {
    question:
      "Is a molecular test needed to separate fibroadenoma from phyllodes tumor?",
    markers:
      "Selected molecular assays / targeted sequencing when available and clinically appropriate",
    interpretation:
      "MED12 alterations occur in both entities and do not independently settle the diagnosis. TERT promoter mutations may favor phyllodes tumor; a five-gene PCR assay may serve as an adjunct on preoperative core biopsy.",
  },
];

const pitfalls = [
  "Do not diagnose phyllodes tumor from stromal cellularity alone. Integrate architecture, periepithelial stromal condensation, heterogeneity, atypia, mitotic activity, overgrowth, and borders.",
  "Cellular fibroadenoma and benign phyllodes tumor may overlap, particularly on core biopsy. In uncertain cases, a qualified benign fibroepithelial lesion/neoplasm diagnosis is preferable to false precision.",
  "Fibroadenoma-like areas can occur within phyllodes tumors and may be sampled preferentially on core biopsy.",
  "Occasional bizarre or multinucleated stromal giant cells in an otherwise benign phyllodes tumor are not, by themselves, a marker of malignancy.",
  "Skin ulceration in a large phyllodes tumor does not necessarily imply malignancy; fungating fleshy polypoid growth through skin strongly indicates malignancy.",
  "When a malignant phyllodes tumor is suspected, extensive sampling is important because adverse features and malignant components can be focal. For large tumors or those with features suggesting malignancy, sample extensively, with at least two sections per 10 mm of greatest tumor dimension.",
  "In a malignant spindle-cell lesion, extensively sample for residual epithelial structures before concluding primary/metastatic sarcoma. Use clinical history and targeted work-up to assess metaplastic carcinoma and other sarcomas.",
];

export default function BreastFibroepithelialLesionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="mt-7 max-w-4xl">
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Breast Fibroepithelial Lesions
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="min-w-0 space-y-12">
          <section
            aria-label="Diagnostic pattern branches"
            className="space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Branch A
                </p>
                <h3 className="mt-2 text-lg font-semibold text-emerald-950">
                  Normal components, disorganized
                </h3>
                <p className="mt-2 leading-7 text-emerald-950">
                  Consider hamartoma when ducts, lobules, fibrous tissue, and
                  fat are haphazardly arranged without classic fibroadenoma
                  growth patterns; correlate with imaging.
                </p>
              </article>
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                  Branch B
                </p>
                <h3 className="mt-2 text-lg font-semibold text-blue-950">
                  Uniform biphasic lesion
                </h3>
                <p className="mt-2 leading-7 text-blue-950">
                  Pericanalicular and/or intracanalicular architecture with
                  relatively uniform, bland stroma supports fibroadenoma.
                  Subtype features may refine the diagnosis.
                </p>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Branch C
                </p>
                <h3 className="mt-2 text-lg font-semibold text-amber-950">
                  Leaf-like fronds / stromal concern
                </h3>
                <p className="mt-2 leading-7 text-amber-950">
                  Consider phyllodes tumor. Evaluate stromal cellularity,
                  atypia, mitoses, overgrowth, and border, then assign benign,
                  borderline, or malignant grade.
                </p>
              </article>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-semibold">Biological principle</h3>
              <p className="mt-2 leading-7 text-slate-600">
                In fibroepithelial tumors, neoplastic progression usually
                involves the stromal rather than epithelial component.
                Epithelial atypia, in situ carcinoma, or invasive carcinoma can
                coexist and should be classified separately.
              </p>
            </div>
          </section>

          <section id="histology" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Histology: rapid differential table
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              The table is intentionally wide so the “Key discriminator” column
              remains readable. On a narrow screen, scroll horizontally.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[1250px] table-fixed border-collapse text-left text-sm">
                <colgroup>
                  <col className="w-[190px]" />
                  <col className="w-[290px]" />
                  <col className="w-[260px]" />
                  <col className="w-[430px]" />
                </colgroup>
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    <th className="border-b border-slate-200 p-4 font-semibold">
                      Entity
                    </th>
                    <th className="border-b border-slate-200 p-4 font-semibold">
                      Architecture
                    </th>
                    <th className="border-b border-slate-200 p-4 font-semibold">
                      Stromal pattern
                    </th>
                    <th className="border-b border-slate-200 p-4 font-semibold">
                      Key discriminator
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.entity}
                      className="align-top odd:bg-white even:bg-slate-50/70"
                    >
                      <th
                        scope="row"
                        className="border-b border-slate-200 p-4 font-semibold text-slate-900"
                      >
                        {row.entity}
                      </th>
                      <td className="break-words border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {row.architecture}
                      </td>
                      <td className="break-words border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {row.stroma}
                      </td>
                      <td className="break-words border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {row.key}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="grading" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Phyllodes tumor: grading checklist
            </h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              Assess five adverse histological criteria. At least four support a
              malignant phyllodes tumor diagnosis; document the criteria present
              and the criterion absent.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="w-[240px] border-b border-slate-200 p-4">
                      Parameter
                    </th>
                    <th className="border-b border-slate-200 p-4">
                      What to document
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {phyllodesCriteria.map((item) => (
                    <tr key={item.criterion} className="align-top">
                      <th className="border-b border-slate-200 p-4 font-semibold">
                        {item.criterion}
                      </th>
                      <td className="border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {item.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="font-semibold text-amber-950">
                  Borderline category
                </h3>
                <p className="mt-2 leading-7 text-amber-950">
                  Tumors with overlapping features require a combined
                  assessment. Tumors with up to three adverse criteria generally
                  fall within the borderline category; document all features and
                  explain any discordance.
                </p>
              </article>
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="font-semibold text-blue-950">
                  Sampling matters
                </h3>
                <p className="mt-2 leading-7 text-blue-950">
                  Phyllodes tumors are heterogeneous. For large tumors or those
                  suspicious for malignancy, submit at least two sections per 10
                  mm of greatest tumor dimension.
                </p>
              </article>
            </div>
          </section>

          <section id="ihc" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              IHC & molecular: targeted use
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              IHC is not a substitute for the architecture and stromal
              assessment. Use ancillary studies only when they address a defined
              differential diagnosis.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[950px] border-collapse text-left text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="w-[230px] border-b border-slate-200 p-4">
                      Diagnostic question
                    </th>
                    <th className="w-[270px] border-b border-slate-200 p-4">
                      Potential ancillary study
                    </th>
                    <th className="border-b border-slate-200 p-4">
                      Interpretation / limitation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ihcRows.map((row) => (
                    <tr key={row.question} className="align-top">
                      <th className="border-b border-slate-200 p-4 font-semibold">
                        {row.question}
                      </th>
                      <td className="border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {row.markers}
                      </td>
                      <td className="border-b border-slate-200 p-4 leading-6 text-slate-700">
                        {row.interpretation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="core-biopsy" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Core biopsy: practical approach
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-emerald-200 bg-white p-5">
                <h3 className="text-lg font-semibold">
                  When fibroadenoma is typical
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-700">
                  <li>
                    Architecture is characteristic and stromal cellularity is
                    low and uniform.
                  </li>
                  <li>
                    No well-developed stromal fronds, stromal overgrowth, or
                    significant atypia.
                  </li>
                  <li>
                    Core biopsy diagnosis is generally reliable when imaging and
                    pathology are concordant.
                  </li>
                </ul>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-white p-5">
                <h3 className="text-lg font-semibold">
                  When phyllodes tumor cannot be excluded
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-6 text-slate-700">
                  <li>
                    Cellular fibroepithelial lesion, stromal heterogeneity, or
                    leaf-like architecture.
                  </li>
                  <li>
                    Limited core may not represent the most diagnostic or
                    highest-grade area.
                  </li>
                  <li>
                    Use clinicoradiologic correlation and consider excision or
                    additional sampling according to the case.
                  </li>
                </ul>
              </article>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h3 className="font-semibold">
                Suggested cautious wording when unresolved
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                “Benign fibroepithelial lesion/neoplasm; definitive distinction
                between cellular fibroadenoma and phyllodes tumor is limited on
                this core biopsy. Recommend radiologic–pathologic correlation
                and further evaluation as clinically appropriate.”
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Example wording for adaptation; not a required reporting
                template.
              </p>
            </div>
          </section>

          <section id="pitfalls" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Diagnostic pitfalls
            </h2>
            <ul className="mt-5 space-y-3">
              {pitfalls.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 leading-7 text-slate-700"
                >
                  <span className="mt-0.5 font-bold text-amber-700">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 text-sm text-slate-500 sm:px-8">
          PathologyGPS · Breast Fibroepithelial Lesions · Diagnostic reference
          prototype
        </div>
      </footer>
    </main>
  );
}
