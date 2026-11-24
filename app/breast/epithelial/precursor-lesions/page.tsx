import Link from "next/link";

const lesions = [
  {
    name: "Usual ductal hyperplasia (UDH)",
    site: "Usually TDLU; may involve larger ducts",
    pattern:
      "Haphazard, heterogeneous proliferation; fenestrations and irregular slit-like peripheral lumina; thin, stretched bridges",
    cytology:
      "Mixed cell population, variable nuclear size/orientation, streaming; grooves and pseudoinclusions may be present",
    ihc: "CK5/6 or CK14 mosaic/heterogeneous; ER heterogeneous",
    clue: "Mixed phenotype and irregular architecture; not the monotonous, rigid pattern of ADH/DCIS",
  },
  {
    name: "Columnar cell change / hyperplasia (CCL)",
    site: "TDLU",
    pattern:
      "Enlarged, dilated acini with irregular contours; columnar lining and apical snouts; 1–2 layers in change, stratification/tufting >2 layers in hyperplasia",
    cytology: "No monomorphic low-grade atypia",
    ihc: "ER positive; high-molecular-weight cytokeratins such as CK5/6 absent",
    clue: "Columnar cells and apical snouts without low-grade cytologic atypia",
  },
  {
    name: "Flat epithelial atypia (FEA)",
    site: "TDLU",
    pattern:
      "Dilated acini with smooth/rounded contours; one or more layers; no well-developed bridges, arcades, or micropapillae",
    cytology: "Low-grade, monomorphic atypia; rounded, uniform nuclei",
    ihc: "Strong diffuse ER; CK5/6 negative",
    clue: "Low-grade atypia without intraluminal architecture",
  },
  {
    name: "Atypical ductal hyperplasia (ADH)",
    site: "Usually TDLU; may occur in papilloma or fibroadenoma",
    pattern:
      "Rigid bridges/bars/arcades, bulbous micropapillae, or cribriform spaces; partial involvement or limited contiguous extent",
    cytology:
      "Monomorphic low-grade cells, evenly spaced round nuclei, distinct borders; no intermediate/high-grade nuclei or necrosis",
    ihc: "Strong diffuse ER; CK5/6 and CK14 negative",
    clue: "Low-grade DCIS-like morphology, but limited extent; quantitative distinction",
  },
  {
    name: "Sclerosing adenosis",
    site: "Lobulocentric TDLU proliferation",
    pattern:
      "Small compressed/distorted acini in collagenous stroma; lobular architecture maintained, sometimes extending into fat",
    cytology: "Bland epithelial and myoepithelial cells",
    ihc: "Myoepithelial markers may be needed: p63, calponin, SMMHC",
    clue: "Lobulocentric growth and retained myoepithelial layer/basement membrane",
  },
  {
    name: "Apocrine adenosis / adenoma",
    site: "TDLU",
    pattern:
      "Adenosis: lobulocentric acini distorted by sclerosis. Adenoma: well-circumscribed compact glands with little stroma",
    cytology:
      "Abundant granular/eosinophilic or foamy cytoplasm, apical snouts, prominent nucleolus; assess nuclear variation",
    ihc: "Typically AR+, ER−, PR−; EMA and CK8/18 positive; myoepithelium may be attenuated",
    clue: "Apocrine phenotype; adenoma is well delineated, while adenosis remains lobulocentric and sclerotic",
  },
  {
    name: "Microglandular adenosis (MGA)",
    site: "Usually unifocal; non-lobulocentric",
    pattern:
      "Haphazard small round glands, open lumina with secretions; single epithelial layer; no myoepithelium but continuous basement membrane",
    cytology:
      "Classic MGA bland; atypical MGA shows crowding, multilayering, atypia and sometimes mitoses",
    ihc: "S100+, often EGFR+; ER/PR/HER2 negative; basement membrane highlighted by collagen IV/laminin; myoepithelial markers negative",
    clue: "No myoepithelial layer does not equal invasion: confirm continuous basement membrane and assess for atypia/invasive carcinoma",
  },
  {
    name: "Radial scar / complex sclerosing lesion",
    site: "Lobulocentric sclerosing lesion",
    pattern:
      "Central hyalinized collagen/elastosis with entrapped irregular benign tubules; stellate and zonal; larger/disorganized lesions termed complex sclerosing lesions",
    cytology:
      "Usually bland; associated UDH, apocrine metaplasia, or atypia may occur",
    ihc: "p63, calponin, SMMHC if myoepithelial layer is difficult to see",
    clue: "Central elastotic nidus and radiating architecture; atypia or carcinoma may coexist",
  },
];

const ihcRows = [
  [
    "UDH",
    "Heterogeneous / mosaic",
    "Heterogeneous",
    "Mixed epithelial phenotype supports usual hyperplasia",
  ],
  [
    "FEA / ADH / low-grade DCIS",
    "Negative",
    "Strong diffuse",
    "Shared low-grade neoplasia phenotype; morphology and extent distinguish entities",
  ],
  [
    "Sclerosing adenosis / radial scar",
    "p63, calponin, SMMHC highlight myoepithelium",
    "Not the primary discriminator",
    "Use a nuclear and a cytoplasmic marker when invasion is a concern",
  ],
  [
    "MGA",
    "Absent",
    "Usually negative",
    "Continuous basement membrane (collagen IV/laminin) surrounds glands",
  ],
  [
    "Apocrine lesions",
    "May be attenuated; interpret carefully",
    "Usually negative",
    "AR+, EMA/CK8/18+ support apocrine differentiation",
  ],
];

export default function BreastPrecursorLesionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/breast"
            className="text-sm font-medium text-blue-700 hover:underline"
          >
            ← Breast Pathology
          </Link>
        </div>
        <header className="py-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Breast Precursor and Proliferative Lesions
          </h1>
        </header>

        <section className="mt-8">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">
                Core Morphologic Comparison
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Use the horizontal scroll area on narrow screens.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[1350px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  {[
                    "Entity",
                    "Typical site",
                    "Architecture",
                    "Cytology",
                    "IHC clues",
                    "Key discriminator",
                  ].map((h) => (
                    <th
                      key={h}
                      className="border-b border-slate-200 px-4 py-3 font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lesions.map((l, i) => (
                  <tr
                    key={l.name}
                    className={i % 2 ? "bg-slate-50/70" : "bg-white"}
                  >
                    <th className="w-52 border-b border-slate-100 px-4 py-4 align-top font-semibold text-slate-900">
                      {l.name}
                    </th>
                    <td className="w-44 border-b border-slate-100 px-4 py-4 align-top">
                      {l.site}
                    </td>
                    <td className="w-72 border-b border-slate-100 px-4 py-4 align-top leading-6">
                      {l.pattern}
                    </td>
                    <td className="w-64 border-b border-slate-100 px-4 py-4 align-top leading-6">
                      {l.cytology}
                    </td>
                    <td className="w-60 border-b border-slate-100 px-4 py-4 align-top leading-6">
                      {l.ihc}
                    </td>
                    <td className="w-64 border-b border-slate-100 px-4 py-4 align-top leading-6">
                      {l.clue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <h2 className="text-xl font-bold">UDH vs. Low-Grade Neoplasia</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-3">Feature</th>
                    <th className="p-3">UDH</th>
                    <th className="p-3">FEA / ADH / low-grade DCIS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Cell population",
                      "Heterogeneous",
                      "Monotonous / clonal-appearing",
                    ],
                    [
                      "Nuclear orientation",
                      "Haphazard; overlapping",
                      "Evenly spaced, regular",
                    ],
                    [
                      "Architecture",
                      "Irregular fenestrations; thin stretched bridges",
                      "Rigid bridges, arcades, bulbous micropapillae or cribriform pattern (ADH/DCIS)",
                    ],
                    ["ER", "Heterogeneous", "Usually strong and diffuse"],
                    ["CK5/6", "Mosaic / heterogeneous", "Usually negative"],
                  ].map((r) => (
                    <tr key={r[0]} className="border-t border-slate-100">
                      <th className="p-3 text-left font-semibold">{r[0]}</th>
                      <td className="p-3">{r[1]}</td>
                      <td className="p-3">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <h2 className="text-xl font-bold">
              Selected IHC / Basement Membrane Guide
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-3">Lesion</th>
                    <th className="p-3">Useful stains</th>
                    <th className="p-3">Interpretive point</th>
                  </tr>
                </thead>
                <tbody>
                  {ihcRows.map((r) => (
                    <tr key={r[0]} className="border-t border-slate-100">
                      <th className="p-3 text-left font-semibold">{r[0]}</th>
                      <td className="p-3">
                        {r[1]}
                        <br />
                        <span className="text-slate-500">{r[2]}</span>
                      </td>
                      <td className="p-3">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
          <h2 className="text-xl font-bold text-amber-950">
            High-Value Diagnostic Pitfalls
          </h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2">
            {[
              [
                "ADH vs. low-grade DCIS is quantitative",
                "The distinction depends on extent and involvement, not a reliable cytologic dividing line. Published thresholds are guidelines; apply cautiously to core biopsies where the full lesion may not be represented.",
              ],
              [
                "Do not diagnose invasion from sclerosis alone",
                "Sclerosing adenosis and radial scar can entrap and distort glands, sometimes extending into fat. Assess lobulocentric architecture and myoepithelial cells.",
              ],
              [
                "MGA lacks myoepithelial cells",
                "Unlike invasive carcinoma, classic MGA retains a continuous basement membrane. Evaluate glandular crowding, atypia, and associated carcinoma.",
              ],
              [
                "Myoepithelium may be attenuated",
                "In apocrine adenosis and sclerosing lesions, a thin or focally inconspicuous layer is not by itself proof of invasion.",
              ],
              [
                "FEA is not equivalent to ADH",
                "FEA has low-grade cytologic atypia but lacks the architectural complexity required for ADH. Imaging concordance and adequate sampling matter.",
              ],
              [
                "Associated lesions matter",
                "Atypia or carcinoma can involve radial scars, sclerosing adenosis, papillomas, and other benign lesions; examine the entire morphologic context.",
              ],
            ].map(([h, b]) => (
              <li
                key={h}
                className="rounded-xl border border-amber-100 bg-white/80 p-4"
              >
                <h3 className="font-semibold text-amber-950">{h}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{b}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-bold">Core Biopsy Review Checklist</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Confirm the imaging target and radiology–pathology concordance.",
              "Identify the dominant pattern at low power before interpreting individual glands.",
              "Assess nuclear uniformity, polarity, cell borders, and architectural rigidity.",
              "For ADH, document the extent and whether the lesion is fully represented.",
              "Use myoepithelial and basement membrane stains selectively, with morphology leading.",
              "Look for associated FEA, ADH, DCIS, lobular neoplasia, or invasive carcinoma.",
              "For calcification targets, confirm that the sampled histology accounts for the calcifications.",
              "Consider a second review for borderline ADH/DCIS or difficult FEA cases.",
              "If sampling is limited, use a descriptive diagnosis or qualified interpretation when appropriate.",
            ].map((x, i) => (
              <div key={x} className="flex gap-3 rounded-xl bg-slate-50 p-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-slate-700">{x}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <h2 className="text-xl font-bold">Risk and Precursor Context</h2>
          <p className="mt-2 leading-7 text-slate-600">
            These lesions do not carry equivalent biologic meaning. UDH and
            sclerosing adenosis are benign proliferations associated with a
            modest increase in subsequent breast cancer risk. CCL/FEA belong to
            the low-grade neoplasia pathway but have a low reported progression
            risk. ADH is a recognized high-risk lesion and early neoplastic step
            related to low-grade DCIS. MGA is benign in its classic form but may
            coexist with atypical MGA and carcinoma, including triple-negative
            carcinoma. Radial scar/complex sclerosing lesion is benign; concern
            depends in part on associated atypia, sampling, and imaging
            concordance.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            This page is a diagnostic reference, not a substitute for current
            institutional protocols or multidisciplinary radiology–pathology
            assessment.
          </p>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-5 text-sm text-slate-500">
          PathologyGPS · Breast Diagnostic Reference
        </footer>
      </div>
    </main>
  );
}
