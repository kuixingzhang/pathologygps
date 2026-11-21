import Link from "next/link";

const categories = [
  {
    title: "Benign Papillary Neoplasms",
    summary:
      "Recognize bland papillary or endophytic lesions and avoid overcalling carcinoma.",
    entities: [
      {
        name: "Urothelial Papilloma",
        key: "Delicate, slender fibrovascular cores lined by bland urothelium of normal thickness (typically 6–7 cell layers), with preserved polarity and no cytologic atypia. Papillae remain separate without fusion.",
        pitfall:
          "Exclude papillary/polypoid cystitis and examine the entire lesion, especially with prior urothelial carcinoma.",
      },
      {
        name: "Inverted Urothelial Papilloma",
        key: "Predominantly endophytic growth into the lamina propria, forming anastomosing cords and trabeculae of bland urothelium. Peripheral palisading and a smooth, pushing interface are typical; degenerative atypia may occur.",
        pitfall:
          "Atypia, atypical mitoses, or an infiltrative interface argues against a benign inverted papilloma.",
      },
    ],
  },
  {
    title: "Non-Invasive Papillary Neoplasia",
    summary:
      "Grade is determined by the degree of architectural and cytologic disorder.",
    entities: [
      {
        name: "Papillary Urothelial Neoplasm of Low Malignant Potential (PUNLMP)",
        key: "Complex papillary structures with branching and fusion, increased cellular proliferation, and thickened urothelium. Polarity is maintained, with no significant nuclear atypia.",
        pitfall:
          "A history of urothelial carcinoma and marked cytologic atypia should prompt reconsideration.",
      },
      {
        name: "Low-Grade Papillary Urothelial Carcinoma",
        key: "Complex branching and fused papillae, usually with increased urothelial thickness and recognizable architectural and cytologic atypia. If the urothelium is not thickened, the diagnosis requires conspicuous cytologic and architectural abnormality.",
        pitfall:
          "Do not grade by mitotic count alone. Confirm absence of lamina propria invasion.",
      },
      {
        name: "High-Grade Papillary Urothelial Carcinoma",
        key: "High-grade cytologic features may be focal: nucleomegaly, nuclear pleomorphism, irregular nuclear contours, clumped chromatin, and readily identifiable mitotic figures. Architectural disorder is usually marked.",
        pitfall:
          "Cytology determines grade. Report as high-grade when the high-grade component is ≥5%; describe tumors with <5% as low-grade with a <5% high-grade component.",
      },
    ],
  },
  {
    title: "Flat Lesions",
    summary:
      "Distinguish high-grade intraepithelial neoplasia from reactive atypia.",
    entities: [
      {
        name: "Urothelial Carcinoma In Situ (CIS)",
        key: "Flat high-grade malignant urothelial cells with pleomorphic, hyperchromatic nuclei, irregular chromatin, and loss of polarity.",
        pitfall:
          "CIS may be partial-thickness, pagetoid, or clinging in denuded mucosa; papillary formation is absent.",
      },
      {
        name: "Urothelial Dysplasia",
        key: "Atypia considered neoplastic but insufficient for a definitive diagnosis of CIS.",
        pitfall:
          "Diagnostic reproducibility is limited. Use cautiously and describe the findings when appropriate.",
      },
    ],
  },
  {
    title: "Invasive Urothelial Carcinoma",
    summary:
      "Identify invasion, document subtype and extent, and report treatment-relevant features.",
    entities: [
      {
        name: "Conventional Urothelial Carcinoma",
        key: "Infiltrative urothelial malignancy; assess lamina propria, muscularis propria, lymphovascular invasion, and associated CIS.",
        pitfall:
          "In TURBT, explicitly state whether muscularis propria is present and involved.",
      },
      {
        name: "Histologic Subtypes and Divergent Differentiation",
        key: "Consider squamous, glandular, trophoblastic, nested/large nested, tubular-microcystic, micropapillary, lymphoepithelioma-like, plasmacytoid, giant cell, lipid-rich, clear cell, and sarcomatoid patterns.",
        pitfall:
          "Recognize and report subtype components because they may affect prognosis and management. Correlate morphology with a focused immunohistochemical panel.",
      },
    ],
  },
];

const workflow = [
  "Confirm the anatomic site and specimen type; assess adequacy and orientation.",
  "Determine growth pattern: exophytic papillary, inverted/endophytic, flat, or invasive.",
  "Assess cytologic grade using nuclear features and architectural disorder—not mitotic count alone.",
  "Look carefully for lamina propria and muscularis propria invasion, lymphovascular invasion, and CIS.",
  "Use immunohistochemistry or molecular testing as an adjunct when the differential diagnosis requires it; morphology remains the diagnostic foundation.",
  "For papillary tumors with grade heterogeneity, estimate the high-grade component and apply the ≥5% reporting threshold described in this reference.",
];

const markers = [
  {
    marker: "CK20",
    use: "CIS may show full-thickness staining; normal/reactive urothelium typically highlights umbrella cells.",
  },
  {
    marker: "p53",
    use: "An aberrant pattern may support CIS in the right morphologic context; wild-type staining does not exclude it.",
  },
  {
    marker: "CD44",
    use: "Often reduced or absent in CIS; retained basal staining may be seen in normal/reactive urothelium.",
  },
  {
    marker: "Ki-67",
    use: "May be increased in high-grade lesions; not a substitute for morphologic grading.",
  },
  {
    marker: "GATA3, p63, uroplakins",
    use: "Can support urothelial differentiation in an appropriate differential diagnosis.",
  },
];

export default function UrothelialTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/urinary-tract"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
        >
          <span aria-hidden="true">←</span> Urinary Tract
        </Link>

        <header className="relative mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-11 dark:border-slate-800 dark:bg-slate-900">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-sky-100 blur-3xl dark:bg-sky-950"
          />
          <div className="relative max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              PathologyGPS · Urinary Tract
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Urothelial Tumors
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              A concise, morphology-first guide to urothelial neoplasia
              throughout the urinary tract, from benign papillomas to invasive
              carcinoma.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Morphology",
                "Grade",
                "Invasion",
                "IHC",
                "Molecular Pathology",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Core principle
            </p>
            <h2 className="mt-2 text-lg font-semibold">Morphology first</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Histology remains the foundation for classification, grading, and
              diagnosis. Ancillary tests support—not replace—morphologic
              assessment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Papillary grade
            </p>
            <h2 className="mt-2 text-lg font-semibold">Three-tier system</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Distinguish PUNLMP, low-grade carcinoma, and high-grade carcinoma
              by architecture and cytologic atypia.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Critical task
            </p>
            <h2 className="mt-2 text-lg font-semibold">Document invasion</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Separate non-invasive disease from lamina propria or muscularis
              propria invasion and document specimen adequacy.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight">
              Papillary Lesions: Histologic Comparison
            </h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              The most useful distinction is the combination of papillary
              architecture, urothelial thickness, polarity, and cytologic
              atypia. No single feature should be interpreted in isolation.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="w-1/5 px-4 py-3 font-semibold">Entity</th>
                  <th className="px-4 py-3 font-semibold">
                    Papillary architecture
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    Urothelial thickness / polarity
                  </th>
                  <th className="px-4 py-3 font-semibold">Cytology</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200 align-top dark:border-slate-700">
                  <td className="px-4 py-4 font-semibold">
                    Urothelial papilloma
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Delicate, slender fibrovascular cores; no papillary fusion.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Normal thickness, generally 6–7 cell layers; polarity
                    preserved.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    No atypia; mitoses absent or rare and basal.
                  </td>
                </tr>
                <tr className="border-t border-slate-200 align-top dark:border-slate-700">
                  <td className="px-4 py-4 font-semibold">PUNLMP</td>
                  <td className="px-4 py-4 leading-6">
                    Complex papillae with branching and fusion.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Increased cellularity and urothelial thickness; polarity
                    maintained.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    No significant nuclear atypia; cells remain relatively
                    uniform.
                  </td>
                </tr>
                <tr className="border-t border-slate-200 align-top dark:border-slate-700">
                  <td className="px-4 py-4 font-semibold">
                    Low-grade papillary urothelial carcinoma
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Complex branching and fused papillary structures.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Usually thickened urothelium with mild architectural
                    disorder and focal loss of polarity.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Mild but definite atypia: nuclear enlargement, limited
                    variation, and occasional hyperchromasia.
                  </td>
                </tr>
                <tr className="border-t border-slate-200 align-top dark:border-slate-700">
                  <td className="px-4 py-4 font-semibold">
                    High-grade papillary urothelial carcinoma
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Often complex, branching, and fused papillae; architecture
                    may vary.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Marked architectural disorder and loss of polarity.
                  </td>
                  <td className="px-4 py-4 leading-6">
                    Nucleomegaly, pleomorphism, irregular contours, clumped
                    chromatin, and readily identifiable mitoses; high-grade
                    features may be focal.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-sky-50 p-4 dark:bg-sky-950/40">
              <h3 className="font-semibold text-sky-900 dark:text-sky-200">
                Key distinction: papilloma vs PUNLMP
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                Papilloma has delicate, non-fused papillae covered by
                normal-thickness urothelium. PUNLMP has more complex
                branching/fused papillae and increased urothelial thickness, but
                retains orderly polarity and lacks significant nuclear atypia.
              </p>
            </div>
            <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
              <h3 className="font-semibold text-amber-900 dark:text-amber-200">
                Key distinction: PUNLMP vs low-grade carcinoma
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                Both may show complex papillae and increased thickness.
                Low-grade carcinoma is separated by definite, albeit mild,
                cytologic and architectural atypia, including nuclear
                enlargement and focal loss of polarity.
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Umbrella-cell prominence may be reduced in PUNLMP and papillary
            urothelial carcinoma. This is a supportive observation, not a
            stand-alone grading criterion.
          </p>
        </section>

        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Diagnostic Categories
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Use the key features and pitfalls as a focused sign-out aid.
            </p>
          </div>
          <div className="space-y-6">
            {categories.map((category) => (
              <section
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {category.summary}
                </p>
                <div className="mt-4 space-y-3">
                  {category.entities.map((entity) => (
                    <article
                      key={entity.name}
                      className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
                    >
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        {entity.name}
                      </h4>
                      <p className="mt-2 text-sm leading-6">
                        <strong>Key features:</strong> {entity.key}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-amber-800 dark:text-amber-300">
                        <strong>Diagnostic pitfall:</strong> {entity.pitfall}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold">Practical Diagnostic Workflow</h2>
            <ol className="mt-4 space-y-3">
              {workflow.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-6">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-200">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold">Selected IHC Clues</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Interpret staining patterns with morphology; no single marker
              independently establishes grade.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Marker</th>
                    <th className="px-3 py-2 font-semibold">Practical use</th>
                  </tr>
                </thead>
                <tbody>
                  {markers.map((item) => (
                    <tr
                      key={item.marker}
                      className="border-t border-slate-200 align-top dark:border-slate-700"
                    >
                      <td className="px-3 py-3 font-semibold">{item.marker}</td>
                      <td className="px-3 py-3 leading-6 text-slate-600 dark:text-slate-300">
                        {item.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-bold">
            Molecular Pathology: What Matters
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Low-grade pathway</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                FGFR3 and RAS/MAPK pathway alterations are common; TERT promoter
                mutations may also occur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">High-grade pathway</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                TP53, RB1, CDKN2A, chromatin-regulating genes, and DNA
                damage-response pathways are frequently altered.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Clinical translation</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                FGFR3 alterations can guide targeted therapy in eligible
                advanced disease. Routine molecular classification is not a
                substitute for histologic diagnosis.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-sky-200 bg-sky-50 p-5 sm:p-6 dark:border-sky-900 dark:bg-sky-950/40">
          <h2 className="text-lg font-bold">Sign-Out Checklist</h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 sm:grid-cols-2">
            {[
              "Specify anatomic site and procedure.",
              "State histologic type and grade.",
              "Document lamina propria invasion.",
              "Document muscularis propria presence and involvement.",
              "Report CIS, lymphovascular invasion, and recognized subtype components.",
              "Describe cautery artifact or other limitations affecting interpretation.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-sky-700 dark:text-sky-300">□</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Educational reference based on the supplied urinary tract tumor
          material. Use current institutional protocols and clinical guidelines
          for patient management.
        </footer>
      </div>
    </main>
  );
}
