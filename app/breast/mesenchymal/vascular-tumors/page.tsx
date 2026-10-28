import Link from "next/link";

const workflow = [
  {
    n: "01",
    title: "Establish the anatomic compartment",
    text: "Is the lesion dermal/superficial, subcutaneous, or centered in breast parenchyma? In a previously irradiated breast, correlate the exact skin location and radiation field.",
  },
  {
    n: "02",
    title: "Assess the vascular architecture on H&E",
    text: "Evaluate vessel caliber, circumscription, distribution, anastomosis, endothelial cytology, multilayering, mitoses, and whether channels dissect through fat or lobules.",
  },
  {
    n: "03",
    title: "Look for features of malignancy",
    text: "Infiltrative dissection of adipose tissue or mammary lobules, endothelial atypia, multilayering or papillary projections, solid epithelioid/spindle areas, blood lakes, mitotic activity, and necrosis raise concern for angiosarcoma.",
  },
  {
    n: "04",
    title: "Use endothelial and ancillary markers",
    text: "Confirm endothelial differentiation with CD31 and ERG; add CD34 and D2-40 as appropriate. In postradiation skin lesions, MYC IHC/FISH can help distinguish atypical vascular lesion from radiation-associated angiosarcoma.",
  },
  {
    n: "05",
    title: "Integrate site, history, morphology, and sampling",
    text: "Distinguish benign hemangioma or angiomatosis, atypical vascular lesion, primary parenchymal angiosarcoma, and postradiation angiosarcoma. If the sample is limited or discordant, use a descriptive diagnosis and recommend further sampling/excision as clinically appropriate.",
  },
];

const entities = [
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

const ihc = [
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

const redFlags = [
  "Irregular angulated vascular channels dissecting adipose tissue or disrupting mammary lobules.",
  "Endothelial multilayering, papillary projections, significant cytologic atypia, or increased mitotic activity.",
  "Solid epithelioid or spindle-cell areas, blood lakes, or necrosis.",
  "A clinically suspicious or enlarging postradiation skin lesion with a biopsy that may not represent the full process.",
  "A deceptively bland area in a lesion with infiltrative architecture: some angiosarcomas contain well-differentiated regions.",
];

export default function BreastVascularTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <nav className="text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-700">
              PathologyGPS
            </Link>
            {" / Breast / Mesenchymal Lesions / Vascular Tumors"}
          </nav>
          <div className="mt-7 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Breast · Mesenchymal lesions
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Breast Vascular Tumors and Lesions
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              A diagnostic guide to benign vascular lesions, atypical vascular
              lesions, and angiosarcoma, emphasizing architecture, anatomic
              compartment, endothelial cytology, and targeted IHC.
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
              Histology table
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
              href="#core"
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
              Start with location and architecture. A vascular lesion is not
              classified by endothelial markers alone: the distribution of
              vessels, their relationship to lobules and adipose tissue,
              endothelial cytology, and clinical setting determine the
              differential.
            </p>
            <div className="mt-6 space-y-3">
              {workflow.map((step, i) => (
                <div key={step.n}>
                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-bold text-white">
                        {step.n}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                  {i < workflow.length - 1 && (
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
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Benign pattern
                </p>
                <h3 className="mt-2 text-lg font-semibold text-emerald-950">
                  Bland, organized vessels
                </h3>
                <p className="mt-2 leading-7 text-emerald-950">
                  Well-formed channels, bland single-layer endothelium, low
                  mitotic activity, and no destructive dissection favor
                  hemangioma. Diffuse but uniform vascular proliferation without
                  lobular invasion or endothelial atypia favous angiomatosis.
                </p>
              </article>
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Malignant pattern
                </p>
                <h3 className="mt-2 text-lg font-semibold text-rose-950">
                  Infiltration and endothelial atypia
                </h3>
                <p className="mt-2 leading-7 text-rose-950">
                  Destructive infiltration, endothelial multilayering, cytologic
                  atypia, mitoses, solid growth, blood lakes, or necrosis
                  support angiosarcoma. Well-differentiated areas may be
                  deceptively bland.
                </p>
              </article>
            </div>
          </section>

          <section id="comparison" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Histology: rapid differential table
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Compare anatomic compartment, architecture, cytology, and the most
              useful ancillary clues.
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
                    <th className="p-3 font-semibold">Endothelial cytology</th>
                    <th className="p-3 font-semibold">IHC clues</th>
                    <th className="p-3 font-semibold">Key discriminator</th>
                  </tr>
                </thead>
                <tbody>
                  {entities.map((e) => (
                    <tr
                      key={e.name}
                      className="border-t border-slate-200 align-top"
                    >
                      <td className="p-3 font-semibold text-slate-950">
                        {e.name}
                      </td>
                      <td className="p-3 leading-6 text-slate-700">{e.site}</td>
                      <td className="p-3 leading-6 text-slate-700">
                        {e.architecture}
                      </td>
                      <td className="p-3 leading-6 text-slate-700">
                        {e.cytology}
                      </td>
                      <td className="p-3 leading-6 text-slate-700">{e.ihc}</td>
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

          <section id="ihc" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              IHC and molecular tools
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use ancillary tests to answer a specific question raised by the
              morphology.
            </p>
            <div className="mt-5 space-y-4">
              {ihc.map((row) => (
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
              <strong>Interpretive caution:</strong> Angiosarcoma, particularly
              epithelioid angiosarcoma, can show focal keratin expression and
              mimic carcinoma. Conversely, endothelial marker expression should
              be interpreted with morphology and a suitable panel.
            </div>
          </section>

          <section id="redflags" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Features that raise concern for angiosarcoma
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
            id="core"
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
                For suspected AVL, ensure the biopsy is representative; sampling
                error can miss an underlying angiosarcoma.
              </li>
              <li>
                If the lesion is diffuse or a core is insufficient for
                classification, consider a descriptive diagnosis and additional
                sampling or excision as appropriate.
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

        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="font-bold">On this page</h2>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <a href="#gps" className="hover:text-blue-700">
                Diagnostic GPS
              </a>
              <a href="#comparison" className="hover:text-blue-700">
                Histology table
              </a>
              <a href="#ihc" className="hover:text-blue-700">
                IHC and molecular tools
              </a>
              <a href="#redflags" className="hover:text-blue-700">
                Angiosarcoma red flags
              </a>
              <a href="#core" className="hover:text-blue-700">
                Limited-sample checklist
              </a>
            </nav>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold">Core principle</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Location → architecture → endothelial cytology → infiltration →
                targeted IHC/MYC → integrate clinical context.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
