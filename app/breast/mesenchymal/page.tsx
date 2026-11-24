const spindleComparisonRows = [
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

const spindleIhcRows = [
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

const spindleRedFlags = [
  "Infiltrative growth into adipose tissue or disruption/entrapment of native breast structures, especially with cytologic atypia.",
  "Overt squamous or glandular differentiation, an in situ carcinoma component, or focal epithelial-marker expression in spindle cells.",
  "Marked stromal atypia, brisk or atypical mitoses, tumor necrosis, or a high-grade pleomorphic component.",
  "Leaf-like architecture, residual benign ducts, or heterogeneous stromal areas raising concern for phyllodes tumor with stromal overgrowth.",
  "A limited core biopsy that does not adequately show the lesion boundary or the relationship to native breast tissue.",
  "A prior history of malignancy or a dermal/subcutaneous epicenter that raises the possibility of metastasis or a non-parenchymal tumor.",
];

const spindleSamplingChecklist = [
  "Record the lesion epicenter: breast parenchyma, pectoral fascia/chest wall, dermis, or subcutis.",
  "Review prior surgery, biopsy, trauma, radiation, known malignancy, and relevant hereditary tumor syndromes.",
  "Describe circumscription versus infiltration and whether ducts, lobules, fat, or skeletal muscle are entrapped or destroyed.",
  "Search for epithelial, in situ, squamous, glandular, leaf-like, vascular, or heterologous components.",
  "Assess cellularity, nuclear atypia, mitotic activity, atypical mitoses, necrosis, and myxoid or collagenized stroma.",
  "Use a morphology-directed IHC panel and interpret staining in the correct cell population with internal controls.",
  "If a core is insufficient to distinguish carcinoma, phyllodes tumor, fibromatosis, or sarcoma, qualify the diagnosis and recommend additional sampling as appropriate.",
];

const vascularEntities = [
  {
    name: "Hemangioma",
    site: "Parenchyma or subcutis; perilobular type is microscopic and intralobular",
    architecture:
      "Well-formed vessels, usually non-anastomosing; circumscribed or relatively well defined",
    cytology:
      "Single layer of bland endothelial cells; no substantial atypia or mitotic activity",
    ihc: "Endothelial markers highlight vessels; pericytes surround individual vascular channels",
    discriminator:
      "Well-formed vascular spaces with bland lining cells and pericytes. Thrombosis or post-biopsy hemorrhage can complicate interpretation.",
  },
  {
    name: "Angiomatosis",
    site: "Diffuse process involving breast interlobular stroma; may extend to skin or pectoralis",
    architecture:
      "Diffuse, unencapsulated proliferation of variably sized anastomosing channels; relatively uniform distribution around ducts and lobules",
    cytology:
      "Flat, inconspicuous endothelial cells without hyperchromasia; mitoses rare or absent",
    ihc: "CD31 and D2-40 highlight endothelial channels; Ki-67 is usually very low",
    discriminator:
      "Lobules are not invaded and disrupted; no endothelial tufting, papillae, blood lakes, necrosis, or meaningful atypia. Complete excision may be needed for diagnosis on limited core.",
  },
  {
    name: "Atypical vascular lesion (AVL)",
    site: "Superficial to mid-dermis in previously irradiated skin; subcutis typically spared",
    architecture:
      "Relatively circumscribed, often wedge-shaped; thin branching/anastomosing channels",
    cytology:
      "Single layer of flattened or hobnail endothelial cells; hyperchromasia may occur, but no true cytologic atypia or multilayering",
    ihc: "CD31 and ERG positive; CD34 variable. D2-40 usually positive in lymphatic pattern and typically negative in vascular pattern. MYC IHC/FISH usually negative",
    discriminator:
      "Dermal circumscription and lack of destructive infiltration, endothelial multilayering, and significant atypia favor AVL. Ensure the biopsy adequately samples the lesion.",
  },
  {
    name: "Postradiation angiosarcoma",
    site: "Usually dermis/subcutis in a prior breast radiation field; breast parenchymal involvement is less common",
    architecture:
      "Infiltrative, often multifocal; irregular angulated channels dissect fat and stroma; higher-grade areas may be solid",
    cytology:
      "Variable atypia; endothelial multilayering, mitoses, blood lakes and necrosis may be present; epithelioid pattern can mimic carcinoma",
    ihc: "CD31 and ERG strong; CD34 and D2-40 variable. MYC nuclear overexpression/amplification is characteristic in most cases; PRAME often positive",
    discriminator:
      "Prior irradiation and dermal/subcutaneous infiltrative growth are key. MYC amplification strongly supports radiation-associated angiosarcoma in the right context; focal keratin can occur.",
  },
  {
    name: "Primary angiosarcoma",
    site: "Usually centered in deep breast parenchyma, with or without skin involvement; no prior radiation association",
    architecture:
      "Infiltrative, poorly defined anastomosing channels dissect through fibroadipose tissue and disrupt lobules; poorly differentiated areas may be solid",
    cytology:
      "Ranges from relatively bland lining cells to marked atypia, multilayering, mitoses, blood lakes and necrosis",
    ihc: "Strong membranous CD31 and nuclear ERG; CD34 and D2-40 variable. Keratins may be expressed, especially in epithelioid cases",
    discriminator:
      "Parenchymal origin and destructive infiltration are central. Well-differentiated areas may look deceptively bland; keratin positivity does not exclude angiosarcoma.",
  },
];

const vascularIhc = [
  {
    question: "Confirm endothelial differentiation",
    markers: "CD31, ERG; CD34 as an adjunct",
    interpretation:
      "CD31 membranous staining and nuclear ERG support endothelial lineage. CD34 is variable and should not be used alone.",
  },
  {
    question: "Assess lymphatic differentiation in a vascular lesion",
    markers: "D2-40 (podoplanin)",
    interpretation:
      "Often highlights angiomatosis and the lymphatic pattern of AVL. AVL with a vascular pattern is typically D2-40-negative and may show a surrounding pericytic layer highlighted by SMA.",
  },
  {
    question: "AVL versus radiation-associated angiosarcoma",
    markers: "MYC IHC and MYC FISH",
    interpretation:
      "AVL typically lacks MYC amplification and MYC overexpression. High-level MYC amplification strongly supports postradiation/lymphedema-associated angiosarcoma in the appropriate morphologic setting.",
  },
  {
    question: "Additional contextual markers",
    markers: "PRAME; H3K27me3 when indicated",
    interpretation:
      "Most secondary angiosarcomas show PRAME immunoreactivity, unlike most AVL. H3K27me3 may be lost in radiation-associated angiosarcoma and retained in benign/atypical vascular lesions; interpret as an adjunct, not a stand-alone test.",
  },
];

const vascularRedFlags = [
  "Irregular angulated vascular channels dissecting adipose tissue or disrupting mammary lobules.",
  "Endothelial multilayering, papillary projections, significant cytologic atypia, or increased mitotic activity.",
  "Solid epithelioid or spindle-cell areas, blood lakes, or necrosis.",
  "A clinically suspicious or enlarging postradiation skin lesion with a biopsy that may not represent the full process.",
  "A deceptively bland area in a lesion with infiltrative architecture: some angiosarcomas contain well-differentiated regions.",
];

export default function BreastMesenchymalTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Breast Pathology
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Mesenchymal Tumors
          </h1>
          <nav
            aria-label="Mesenchymal tumor sections"
            className="mt-5 flex flex-wrap gap-3"
          >
            <a
              href="#spindle-section"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
            >
              Spindle Cell Tumors and Lesions
            </a>
            <a
              href="#vascular-section"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-400 hover:text-blue-700"
            >
              Vascular Tumors and Lesions
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-10 sm:px-8">
        <section
          id="spindle-section"
          aria-labelledby="spindle-heading"
          className="space-y-8"
        >
          <h2
            id="spindle-heading"
            className="border-b border-slate-200 pb-4 text-3xl font-bold tracking-tight"
          >
            Spindle Cell Tumors and Lesions
          </h2>
          <div className="min-w-0 space-y-10">
            <section
              aria-label="Important spindle cell exclusions"
              className="grid gap-5 lg:grid-cols-2"
            >
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-950">
                <p className="text-sm font-bold uppercase tracking-wide text-rose-700">
                  First exclude
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Spindle cell metaplastic carcinoma
                </h3>
                <p className="mt-3 leading-7">
                  The spindle cells may show only focal keratin or p63
                  expression. Search for squamous/glandular differentiation and
                  in situ carcinoma; use a panel rather than relying on one
                  negative stain.
                </p>
              </article>
              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
                <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
                  Also exclude
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Malignant phyllodes tumor
                </h3>
                <p className="mt-3 leading-7">
                  Stromal overgrowth can obscure the epithelial component. Look
                  for leaf-like architecture or residual benign ducts and
                  consider extensive sampling before diagnosing a primary
                  sarcoma.
                </p>
              </article>
            </section>
            <section id="spindle-comparison" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Histology: rapid differential table
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Compare architecture, cytology, immunophenotype, and the key
                diagnostic pitfall. Findings are guides, not stand-alone
                criteria.
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
                    {spindleComparisonRows.map((row) => (
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

            <section id="spindle-ihc" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                IHC and molecular tools
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Choose stains to answer a specific morphologic question.
                Staining must be assigned to the lesional cells, with internal
                controls and the possibility of focal expression in mind.
              </p>
              <div className="mt-5 space-y-4">
                {spindleIhcRows.map((row) => (
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

            <section id="spindle-redflags" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Features that raise concern for malignancy
              </h2>
              <ul className="mt-5 space-y-3">
                {spindleRedFlags.map((item) => (
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
              id="spindle-sampling"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-bold">
                Core biopsy: minimum review checklist
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                {spindleSamplingChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 leading-7 text-blue-950">
                <strong>When classification remains uncertain:</strong> A
                descriptive diagnosis such as “spindle cell lesion” with a
                comment about the differential and the need for additional
                sampling may be more appropriate than overclassification on a
                limited core biopsy.
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h2 className="font-semibold">Scope</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This page prioritizes diagnostic morphology, the exclusion of
                metaplastic carcinoma and malignant phyllodes tumor, targeted
                IHC, and biopsy limitations. It is an educational reference and
                does not replace review of the complete specimen, clinical
                history, imaging, or current specialist guidance.
              </p>
            </section>
          </div>
        </section>

        <section
          id="vascular-section"
          aria-labelledby="vascular-heading"
          className="space-y-8"
        >
          <h2
            id="vascular-heading"
            className="border-b border-slate-200 pb-4 text-3xl font-bold tracking-tight"
          >
            Vascular Tumors and Lesions
          </h2>
          <div className="min-w-0 space-y-10">
            <section
              aria-label="Vascular lesion diagnostic patterns"
              className="grid gap-5 lg:grid-cols-2"
            >
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-800">
                  Benign pattern
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Bland, organized vessels
                </h3>
                <p className="mt-3 leading-7">
                  Well-formed channels, bland single-layer endothelium, low
                  mitotic activity, and no destructive dissection favor
                  hemangioma. Diffuse but uniform vascular proliferation without
                  lobular invasion or endothelial atypia favors angiomatosis.
                </p>
              </article>
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-950">
                <p className="text-sm font-bold uppercase tracking-wide text-rose-700">
                  Malignant pattern
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Infiltration and endothelial atypia
                </h3>
                <p className="mt-3 leading-7">
                  Destructive infiltration, endothelial multilayering, cytologic
                  atypia, mitoses, solid growth, blood lakes, or necrosis
                  support angiosarcoma. Well-differentiated areas may be
                  deceptively bland.
                </p>
              </article>
            </section>
            <section id="vascular-comparison" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Histology: rapid differential table
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Compare anatomic compartment, architecture, cytology, and the
                most useful ancillary clues.
              </p>
              <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[1180px] table-fixed border-collapse text-left text-sm">
                  <colgroup>
                    <col style={{ width: "155px" }} />
                    <col style={{ width: "190px" }} />
                    <col style={{ width: "245px" }} />
                    <col style={{ width: "210px" }} />
                    <col style={{ width: "210px" }} />
                    <col style={{ width: "320px" }} />
                  </colgroup>
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="p-3 font-semibold">Entity</th>
                      <th className="p-3 font-semibold">Typical location</th>
                      <th className="p-3 font-semibold">Architecture</th>
                      <th className="p-3 font-semibold">
                        Endothelial cytology
                      </th>
                      <th className="p-3 font-semibold">IHC clues</th>
                      <th className="p-3 font-semibold">Key discriminator</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vascularEntities.map((e) => (
                      <tr
                        key={e.name}
                        className="border-t border-slate-200 align-top"
                      >
                        <td className="p-3 font-semibold text-slate-950">
                          {e.name}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {e.site}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {e.architecture}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {e.cytology}
                        </td>
                        <td className="p-3 leading-6 text-slate-700">
                          {e.ihc}
                        </td>
                        <td className="break-words p-3 leading-6 text-slate-700">
                          {e.discriminator}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                On smaller screens, scroll horizontally to view all columns. The
                final diagnostic column is intentionally wider.
              </p>
            </section>

            <section id="vascular-ihc" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                IHC and molecular tools
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Use ancillary tests to answer a specific question raised by the
                morphology.
              </p>
              <div className="mt-5 space-y-4">
                {vascularIhc.map((row) => (
                  <article
                    key={row.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <h3 className="border-b border-slate-200 bg-slate-100/70 px-5 py-3 font-semibold">
                      {row.question}
                    </h3>
                    <div className="grid gap-4 p-5 md:grid-cols-[220px_minmax(0,1fr)]">
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
                <strong>Interpretive caution:</strong> Angiosarcoma,
                particularly epithelioid angiosarcoma, can show focal keratin
                expression and mimic carcinoma. Conversely, endothelial marker
                expression should be interpreted with morphology and a suitable
                panel.
              </div>
            </section>

            <section id="vascular-redflags" className="scroll-mt-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Features that raise concern for angiosarcoma
              </h2>
              <ul className="mt-5 space-y-3">
                {vascularRedFlags.map((item) => (
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
              id="vascular-core"
              className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-bold">
                Diagnostic checklist for limited samples
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                <li>
                  Record whether the lesion is dermal, subcutaneous, or
                  parenchymal.
                </li>
                <li>
                  Assess circumscription versus destructive infiltration and the
                  relationship to adipose tissue and lobules.
                </li>
                <li>
                  Evaluate endothelial layering, atypia, mitoses, solid areas,
                  hemorrhage, and necrosis.
                </li>
                <li>
                  Correlate with prior breast irradiation and chronic lymphedema
                  history where relevant.
                </li>
                <li>
                  Use CD31/ERG and selected ancillary markers to confirm lineage
                  and resolve the differential.
                </li>
                <li>
                  For suspected AVL, ensure the biopsy is representative;
                  sampling error can miss an underlying angiosarcoma.
                </li>
                <li>
                  If the lesion is diffuse or a core is insufficient for
                  classification, consider a descriptive diagnosis and
                  additional sampling or excision as appropriate.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h2 className="font-semibold">Scope</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This page focuses on diagnostic morphology, IHC, key molecular
                adjuncts, and practical differential diagnosis. Epidemiology,
                treatment, staging, and general sarcoma background are
                intentionally minimized.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
