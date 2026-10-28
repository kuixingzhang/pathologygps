import Link from "next/link";

const diagnosticSteps = [
  {
    number: "01",
    title: "Confirm a true spindle cell lesion",
    detail:
      "Determine whether the sample contains a predominantly spindle cell proliferation, a biphasic fibroepithelial lesion, or a conventional carcinoma with a spindle cell component. Review the clinical history, imaging, prior procedures, and specimen adequacy.",
  },
  {
    number: "02",
    title: "Assess architecture and the lesion boundary",
    detail:
      "Evaluate circumscription versus infiltration, fascicular or storiform growth, collagen quality, myxoid change, entrapped ducts and lobules, adipose tissue infiltration, and any leaf-like architecture or epithelial component.",
  },
  {
    number: "03",
    title: "Search carefully for epithelial differentiation",
    detail:
      "Look for overt squamous or glandular elements, in situ carcinoma, or focal epithelial differentiation. A bland-appearing spindle cell lesion can still represent metaplastic carcinoma; absence of an epithelial component in a limited core does not exclude it.",
  },
  {
    number: "04",
    title: "Use a targeted immunohistochemical panel",
    detail:
      "Use broad-spectrum cytokeratins and p63 (with additional keratins as needed) to assess epithelial differentiation. Select other markers according to morphology, including CD34, desmin, SMA, nuclear beta-catenin, and RB1.",
  },
  {
    number: "05",
    title: "Integrate morphology, stains, and sampling",
    detail:
      "Distinguish metaplastic carcinoma, fibromatosis, myofibroblastoma, nodular fasciitis, scar, pseudoangiomatous stromal hyperplasia, phyllodes tumor, and primary or metastatic sarcoma. If the sample is limited or findings are discordant, use a descriptive diagnosis and recommend additional sampling as appropriate.",
  },
];

const comparisonRows = [
  {
    entity: "Spindle cell (metaplastic) carcinoma",
    pattern:
      "Often infiltrative; intersecting fascicles, haphazard growth, or fibromatosis-like pattern; may contain squamous, glandular, or other heterologous elements",
    cytology:
      "Ranges from bland to markedly atypical; mitoses may be numerous; necrosis may occur",
    ihc: "Broad-spectrum and high-molecular-weight cytokeratins and/or p63 may be focal; use a panel and appropriate controls",
    key: "Search for overt epithelial differentiation, in situ carcinoma, or focal keratin/p63 expression. A negative single stain does not exclude carcinoma.",
  },
  {
    entity: "Desmoid fibromatosis",
    pattern:
      "Long, sweeping fascicles infiltrating adjacent fat or skeletal muscle; poorly circumscribed; lymphoid aggregates may occur at the advancing edge",
    cytology:
      "Bland slender spindle cells with scant atypia; atypical mitoses absent; mitoses may be present",
    ihc: "Nuclear beta-catenin in many cases; SMA often positive; CD34 and broad-spectrum cytokeratins typically negative",
    key: "Infiltrative growth with long sweeping fascicles. Exclude fibromatosis-like metaplastic carcinoma with epithelial markers; CTNNB1/APC testing may help in selected cases.",
  },
  {
    entity: "Myofibroblastoma",
    pattern:
      "Usually circumscribed and unencapsulated; short intersecting fascicles with hyalinized collagen; variable fat and several morphologic variants",
    cytology:
      "Bland oval-to-spindle cells; mitoses absent or rare; occasional atypical or multinucleated cells can occur",
    ihc: "Desmin and CD34 commonly positive; ER/PR/AR may be positive; RB1 expression is lost in many cases; cytokeratins and S100 typically negative",
    key: "Circumscription, short fascicles, collagen bands, and supportive immunophenotype. RB1 loss supports the diagnosis but is not specific by itself.",
  },
  {
    entity: "Nodular fasciitis",
    pattern:
      "Usually a rapidly growing, relatively circumscribed or poorly defined lesion with short irregular fascicles in myxoid-to-collagenous stroma; extravasated red cells and lymphocytes may occur",
    cytology:
      "Plump, tissue-culture-like myofibroblasts; nucleoli may be prominent; mitoses can be numerous but typically lack atypical forms",
    ihc: "SMA often positive; keratins generally negative. USP6 rearrangement testing can support the diagnosis in selected cases",
    key: "Clinical rapid growth and tissue-culture-like morphology; mitotic activity alone does not establish malignancy.",
  },
  {
    entity: "Scar / reactive spindle cell proliferation",
    pattern:
      "Fibrosis related to prior surgery, trauma, biopsy, or inflammation; may entrap ducts and lobules at the edge",
    cytology:
      "Usually bland fibroblasts and myofibroblasts; hemosiderin, histiocytes, foreign-body giant cells, or fat necrosis may be present depending on context",
    ihc: "No single defining panel; use epithelial markers if fibromatosis-like metaplastic carcinoma is a concern",
    key: "Correlate with prior procedure and location. In a patient with prior surgery, scar can be difficult to distinguish from fibromatosis on a limited sample.",
  },
  {
    entity: "Pseudoangiomatous stromal hyperplasia (PASH)",
    pattern:
      "Slit-like pseudovascular spaces in collagenous stroma, often with bland spindle myofibroblasts",
    cytology: "Usually bland; no true endothelial-lined vascular channels",
    ihc: "Stromal cells commonly express CD34 and may express SMA; endothelial markers should not outline the pseudospaces as true vessels",
    key: "Pseudovascular clefts are not true vascular channels. Correlate with architecture and endothelial-marker staining when needed.",
  },
  {
    entity: "Malignant phyllodes tumor with stromal overgrowth",
    pattern:
      "Leaf-like architecture may be focal or absent in a limited sample; stromal overgrowth can obscure epithelial elements",
    cytology:
      "Stromal hypercellularity and atypia, increased mitoses, and sometimes heterologous malignant elements",
    ihc: "CD34 may be positive but is variable; keratin/p63 can be focal in some tumors and must be interpreted cautiously",
    key: "Extensive sampling may be needed to identify residual benign epithelial structures and leaf-like areas. Do not classify a spindle cell lesion as sarcoma without considering phyllodes tumor.",
  },
  {
    entity: "Primary or metastatic sarcoma / other spindle cell neoplasm",
    pattern:
      "Variable by lineage; may be fascicular, storiform, myxoid, pleomorphic, or show specific differentiation",
    cytology:
      "Variable atypia, mitotic activity, and necrosis; some translocation-associated sarcomas may be relatively uniform",
    ihc: "Use morphology-directed panels; consider lineage-specific markers and molecular testing where indicated",
    key: "Primary breast sarcomas are rare. Exclude metaplastic carcinoma and malignant phyllodes tumor, and consider metastasis and skin/subcutaneous tumors based on history and location.",
  },
];

const ihcRows = [
  {
    question: "Could this be spindle cell metaplastic carcinoma?",
    markers:
      "Broad-spectrum cytokeratin; high-molecular-weight/basal cytokeratins; p63; additional keratins as indicated",
    interpretation:
      "Expression can be focal or limited to a minor component. Use more than one epithelial marker when suspicion remains, and assess staining in the morphologically relevant spindle cells. Reactive myofibroblasts and entrapped epithelium can complicate interpretation.",
  },
  {
    question: "Does the pattern support myofibroblastoma?",
    markers: "CD34, desmin, ER, PR, AR, RB1; SMA as appropriate",
    interpretation:
      "Desmin and CD34 are commonly positive; hormone receptors may be expressed. Loss of RB1 supports the diagnosis in the appropriate setting but overlaps with other tumors in the 13q/RB1 family.",
  },
  {
    question: "Could this be desmoid fibromatosis?",
    markers:
      "Nuclear beta-catenin; broad-spectrum cytokeratins and p63; CD34; SMA",
    interpretation:
      "Nuclear beta-catenin supports fibromatosis but is not fully specific and can be difficult to interpret. Excluding metaplastic carcinoma is essential. CTNNB1/APC mutation analysis may help in selected difficult or small biopsies.",
  },
  {
    question: "Are the spaces true vascular channels?",
    markers: "CD31 and ERG, with CD34 as an adjunct",
    interpretation:
      "Use endothelial markers when PASH or another spindle cell lesion mimics a vascular proliferation. Marker selection should follow the morphologic question; CD34 alone is not endothelial-specific.",
  },
  {
    question: "Is a lineage-specific or molecular workup needed?",
    markers:
      "Morphology-directed immunohistochemistry and selected molecular tests",
    interpretation:
      "Consider targeted workup for a suspected specific entity, including USP6 testing for selected nodular fasciitis-like lesions. Do not apply a broad panel indiscriminately; interpret all results with morphology and clinical context.",
  },
];

const redFlags = [
  "Infiltrative growth into adipose tissue or disruption/entrapment of native breast structures, especially with cytologic atypia.",
  "Overt squamous or glandular differentiation, an in situ carcinoma component, or focal epithelial-marker expression in spindle cells.",
  "Marked stromal atypia, brisk or atypical mitoses, tumor necrosis, or a high-grade pleomorphic component.",
  "Leaf-like architecture, residual benign ducts, or heterogeneous stromal areas raising concern for phyllodes tumor with stromal overgrowth.",
  "A limited core biopsy that does not adequately show the lesion boundary or the relationship to native breast tissue.",
  "A prior history of malignancy or a dermal/subcutaneous epicenter that raises the possibility of metastasis or a non-parenchymal tumor.",
];

const samplingChecklist = [
  "Record the lesion epicenter: breast parenchyma, pectoral fascia/chest wall, dermis, or subcutis.",
  "Review prior surgery, biopsy, trauma, radiation, known malignancy, and relevant hereditary tumor syndromes.",
  "Describe circumscription versus infiltration and whether ducts, lobules, fat, or skeletal muscle are entrapped or destroyed.",
  "Search for epithelial, in situ, squamous, glandular, leaf-like, vascular, or heterologous components.",
  "Assess cellularity, nuclear atypia, mitotic activity, atypical mitoses, necrosis, and myxoid or collagenized stroma.",
  "Use a morphology-directed IHC panel and interpret staining in the correct cell population with internal controls.",
  "If a core is insufficient to distinguish carcinoma, phyllodes tumor, fibromatosis, or sarcoma, qualify the diagnosis and recommend additional sampling as appropriate.",
];

export default function BreastSpindleCellLesionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-700">
              PathologyGPS
            </Link>
            {
              " / Breast / Mesenchymal & Epithelial Lesions / Spindle Cell Lesions"
            }
          </nav>
          <div className="mt-7 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Breast · Spindle cell lesions
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Breast Spindle Cell Lesions
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A morphology-first diagnostic guide to spindle cell lesions of the
              breast, emphasizing exclusion of metaplastic carcinoma and
              malignant phyllodes tumor, targeted immunohistochemistry, and
              biopsy limitations.
            </p>
            <p className="mt-3 text-sm text-amber-800">
              Educational reference prototype · Expert review required before
              clinical deployment
            </p>
          </div>
          <nav className="mt-6 flex flex-wrap gap-2 text-sm">
            <a
              href="#gps"
              className="rounded-full bg-blue-700 px-4 py-2 font-semibold text-white"
            >
              Diagnostic GPS
            </a>
            <a
              href="#comparison"
              className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
            >
              Differential table
            </a>
            <a
              href="#ihc"
              className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
            >
              IHC guide
            </a>
            <a
              href="#redflags"
              className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
            >
              Malignant features
            </a>
            <a
              href="#sampling"
              className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400"
            >
              Sampling checklist
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0 space-y-12">
          <section id="gps" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">Diagnostic GPS</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Spindle cell morphology is a pattern, not a final diagnosis. In
              the breast, the most consequential early distinction is between a
              true mesenchymal lesion, spindle cell metaplastic carcinoma, and
              malignant phyllodes tumor. Architecture, lesion boundaries,
              epithelial differentiation, and adequate sampling must be
              considered together.
            </p>
            <div className="mt-6 space-y-3">
              {diagnosticSteps.map((step, index) => (
                <div key={step.number}>
                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-white">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </article>
                  {index < diagnosticSteps.length - 1 && (
                    <div
                      className="flex justify-center py-2"
                      aria-hidden="true"
                    >
                      <div className="h-5 w-px bg-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  First exclude
                </p>
                <h3 className="mt-2 text-lg font-semibold text-rose-950">
                  Spindle cell metaplastic carcinoma
                </h3>
                <p className="mt-2 leading-7 text-rose-950">
                  The spindle cells may show only focal keratin or p63
                  expression. Search for squamous/glandular differentiation and
                  in situ carcinoma; use a panel rather than relying on one
                  negative stain.
                </p>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Also exclude
                </p>
                <h3 className="mt-2 text-lg font-semibold text-amber-950">
                  Malignant phyllodes tumor
                </h3>
                <p className="mt-2 leading-7 text-amber-950">
                  Stromal overgrowth can obscure the epithelial component. Look
                  for leaf-like architecture or residual benign ducts and
                  consider extensive sampling before diagnosing a primary
                  sarcoma.
                </p>
              </article>
            </div>
          </section>

          <section id="comparison" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Histology: rapid differential table
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Compare architecture, cytology, immunophenotype, and the key
              diagnostic pitfall. Findings are guides, not stand-alone criteria.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[1450px] table-fixed border-collapse text-left text-sm">
                <colgroup>
                  <col style={{ width: "230px" }} />
                  <col style={{ width: "360px" }} />
                  <col style={{ width: "270px" }} />
                  <col style={{ width: "300px" }} />
                  <col style={{ width: "390px" }} />
                </colgroup>
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="p-3 font-semibold">Entity</th>
                    <th className="p-3 font-semibold">Architecture</th>
                    <th className="p-3 font-semibold">Cytology</th>
                    <th className="p-3 font-semibold">IHC clues</th>
                    <th className="p-3 font-semibold">
                      Key discriminator / pitfall
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.entity}
                      className="border-t border-slate-200 align-top"
                    >
                      <td className="p-3 font-semibold text-slate-950">
                        {row.entity}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.pattern}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.cytology}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.ihc}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.key}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              On smaller screens, scroll horizontally to view all columns.
            </p>
          </section>

          <section id="ihc" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              IHC and molecular tools
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Choose stains to answer a specific morphologic question. Staining
              must be assigned to the lesional cells, with internal controls and
              the possibility of focal expression in mind.
            </p>
            <div className="mt-5 space-y-4">
              {ihcRows.map((row) => (
                <article
                  key={row.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <h3 className="border-b border-slate-200 bg-slate-100/70 px-5 py-3 font-semibold">
                    {row.question}
                  </h3>
                  <div className="grid gap-4 p-5 md:grid-cols-[270px_minmax(0,1fr)]">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Markers / test
                      </p>
                      <p className="mt-2 leading-6">{row.markers}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Interpretation
                      </p>
                      <p className="mt-2 leading-7 text-slate-600">
                        {row.interpretation}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <strong>Interpretive caution:</strong> Cytokeratin and p63
              expression may be focal in spindle cell metaplastic carcinoma.
              Conversely, focal staining must be localized to the lesional
              spindle cells rather than entrapped epithelium or reactive
              elements.
            </div>
          </section>

          <section id="redflags" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Features that raise concern for malignancy
            </h2>
            <ul className="mt-5 space-y-3">
              {redFlags.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="mt-0.5 font-bold text-rose-700">!</span>
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            id="sampling"
            className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-2xl font-bold">
              Core biopsy: minimum review checklist
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              {samplingChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 leading-7 text-blue-950">
              <strong>When classification remains uncertain:</strong> A
              descriptive diagnosis such as “spindle cell lesion” with a comment
              about the differential and the need for additional sampling may be
              more appropriate than overclassification on a limited core biopsy.
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
            <h2 className="font-semibold">Scope</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This page prioritizes diagnostic morphology, the exclusion of
              metaplastic carcinoma and malignant phyllodes tumor, targeted IHC,
              and biopsy limitations. It is an educational reference and does
              not replace review of the complete specimen, clinical history,
              imaging, or current specialist guidance.
            </p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="font-bold">On this page</h2>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#gps" className="hover:text-blue-700">
                Diagnostic GPS
              </a>
              <a href="#comparison" className="hover:text-blue-700">
                Differential table
              </a>
              <a href="#ihc" className="hover:text-blue-700">
                IHC and molecular tools
              </a>
              <a href="#redflags" className="hover:text-blue-700">
                Malignant features
              </a>
              <a href="#sampling" className="hover:text-blue-700">
                Core biopsy checklist
              </a>
            </nav>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold">Core principle</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Architecture → lesion boundary → epithelial differentiation →
                targeted IHC → sampling adequacy.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold">Related pages</h3>
              <Link
                href="/breast/mesenchymal/fibroepithelial-lesions"
                className="mt-2 block text-sm text-blue-700 hover:underline"
              >
                Fibroepithelial lesions
              </Link>
              <Link
                href="/breast/mesenchymal/vascular-tumors"
                className="mt-2 block text-sm text-blue-700 hover:underline"
              >
                Vascular tumors
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
