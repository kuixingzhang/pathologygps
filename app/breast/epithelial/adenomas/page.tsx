import Link from "next/link";

const rows = [
  [
    "Tubular adenoma",
    "Usually young, premenopausal patients",
    "Sharply circumscribed, compact proliferation of closely packed, small, uniform round-to-oval tubules.",
    "Bilayered tubules with luminal epithelial cells and an attenuated outer myoepithelial layer; bland nuclei and rare mitoses.",
    "Very scant, delicate fibrovascular stroma.",
    "Prominent epithelial/tubular proliferation with minimal stroma; distinguish from fibroadenoma.",
  ],
  [
    "Lactating adenoma",
    "Pregnancy, especially the third trimester, or breastfeeding",
    "Well-circumscribed, closely packed secretory lobules.",
    "Cuboidal or hobnail cells with granular or vacuolated cytoplasm, luminal milk-like secretions, bland nuclei, and sometimes binucleation.",
    "Sparse, delicate, sometimes edematous connective tissue.",
    "Secretory lobules in the appropriate clinical setting; infarction can cause pain and alarming imaging.",
  ],
  [
    "Ductal adenoma",
    "Usually older adults; peripheral small- to medium-sized ducts",
    "Organized adenomatous glands within a thick concentric fibroelastotic wall; may be multinodular.",
    "Round, oval, elongated, or branched bilayered glands; bland cuboidal, columnar, or occasionally spindled cells.",
    "Concentric laminated fibrosclerotic capsule; intralesional fibrosis may compress glands.",
    "No arborizing papillary fronds; sclerosis, calcification, and entrapped glands may mimic radial scar or invasion.",
  ],
];

const ihc = [
  [
    "p63, p40, SMA, calponin, SMMHC",
    "Highlight the peripheral myoepithelial layer when needed, particularly in difficult cases.",
    "Interpret with architecture and internal controls.",
  ],
  [
    "EMA, CK19, CK8/18",
    "Luminal epithelial markers may help confirm the ductal component in tubular adenoma.",
    "A broad panel is not routinely required in classic cases.",
  ],
  [
    "ER",
    "Ductal adenoma may show heterogeneous expression.",
    "Do not use ER alone to establish or exclude the diagnosis.",
  ],
  [
    "Ki-67 and p53",
    "Ductal adenoma typically shows low labeling indices.",
    "Supportive only; not stand-alone diagnostic criteria.",
  ],
  [
    "α-Lactalbumin / Oil Red O",
    "Secretory cells and luminal material in lactating adenoma may show α-lactalbumin and lipid-related staining.",
    "Correlate with pregnancy/lactation history and morphology.",
  ],
];

function Table({ headers, data }: { headers: string[]; data: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[1000px] w-full border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            {headers.map((h) => (
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
          {data.map((row, i) => (
            <tr
              key={row[0]}
              className={`align-top ${i % 2 ? "bg-slate-50/70" : ""}`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border-b border-slate-200 px-4 py-4 ${j === 0 ? "font-semibold text-slate-900" : "text-slate-700"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BreastAdenomasPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-900">
            PathologyGPS
          </Link>
          <span className="mx-2">/</span>
          <Link href="/breast" className="hover:text-slate-900">
            Breast
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Adenomas</span>
        </nav>
        <header className="py-4">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Breast Adenomas
          </h1>
        </header>
        <section className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Core concept</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Breast adenomas are benign glandular epithelial tumors arising
              from the terminal duct lobular unit. They contain varying
              proportions of glands, fibrous tissue, and fat. Fibroadenoma is
              the most common adenoma-type lesion but belongs to the
              fibroepithelial tumor spectrum and is not the primary focus of
              this page.
            </p>
            <p className="mt-3 leading-7 text-slate-700">
              Tubular, lactating, and ductal adenomas are benign. Their most
              useful distinction is architectural: dense tubules with scant
              stroma, secretory lobules, or glands surrounded by a concentric
              fibrosclerotic wall.
            </p>
          </article>
          <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-amber-950">
              Diagnostic caution
            </h2>
            <p className="mt-3 leading-7 text-amber-950/90">
              A circumscribed mass is not automatically benign. Ductal adenoma
              may show sclerosis, calcification, or a pseudoinfiltrative edge;
              lactating adenoma may infarct and enlarge. Interpret morphology
              together with imaging and clinical findings.
            </p>
          </aside>
        </section>
        <section className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Side-by-side comparison
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Three principal adenomas
          </h2>
          <p className="mt-2 mb-4 max-w-3xl leading-7 text-slate-600">
            Use the clinical setting as a clue, but make the diagnosis from the
            overall histologic pattern.
          </p>
          <Table
            headers={[
              "Entity",
              "Typical setting",
              "Low-power architecture",
              "High-power features",
              "Stroma",
              "Key discriminator",
            ]}
            data={rows}
          />
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              01 • Tubular adenoma
            </p>
            <h2 className="mt-2 text-xl font-bold">
              Dense tubules, scant stroma
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <strong>Low power:</strong> sharply demarcated, compact
                proliferation of small, regular tubules.
              </li>
              <li>
                <strong>High power:</strong> luminal epithelial cells and an
                attenuated myoepithelial layer; bland nuclei and rare mitoses.
              </li>
              <li>
                <strong>Stroma:</strong> minimal delicate fibrovascular tissue,
                without the prominent stromal component of fibroadenoma.
              </li>
              <li>
                <strong>Key distinction:</strong> prominent epithelial
                proliferation and minimal stroma.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              02 • Lactating adenoma
            </p>
            <h2 className="mt-2 text-xl font-bold">Secretory lobules</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <strong>Clinical setting:</strong> pregnancy or breastfeeding;
                often diagnosed during the third trimester.
              </li>
              <li>
                <strong>Architecture:</strong> closely packed hyperplastic
                secretory lobules separated by sparse connective tissue.
              </li>
              <li>
                <strong>Cytoplasm:</strong> granular or vacuolated, with luminal
                milk-like material; binucleated cells may be common.
              </li>
              <li>
                <strong>Pitfall:</strong> infarction may cause rapid
                enlargement, pain, tenderness, skin changes, and suspicious
                imaging.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              03 • Ductal adenoma
            </p>
            <h2 className="mt-2 text-xl font-bold">
              Glands in a fibrosclerotic wall
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>
                <strong>Architecture:</strong> organized glands, often radiating
                from the center, enclosed by a thick concentric fibroelastotic
                capsule.
              </li>
              <li>
                <strong>Cells:</strong> bilayered glands with bland cuboidal,
                columnar, or occasionally spindled ductal cells.
              </li>
              <li>
                <strong>Helpful negatives:</strong> no arborizing papillary
                fronds and no prominent myoepithelial hyperplasia.
              </li>
              <li>
                <strong>Pitfall:</strong> sclerosis, dystrophic calcification,
                and entrapped glands can create a pseudoinfiltrative appearance.
              </li>
            </ul>
          </article>
        </section>
        <section className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Immunohistochemistry
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            When a panel helps
          </h2>
          <p className="mt-2 mb-4 max-w-3xl leading-7 text-slate-600">
            In classic lesions, morphology is primary. Use immunohistochemistry
            to resolve a specific uncertainty rather than as a substitute for
            architectural assessment.
          </p>
          <Table
            headers={["Marker(s)", "Diagnostic use", "Interpretive caution"]}
            data={ihc}
          />
        </section>
        <section className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Differential diagnosis
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Common mimics and separating features
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              [
                "Fibroadenoma",
                "Usually has a more conspicuous stromal component and characteristic intracanalicular or pericanalicular fibroepithelial architecture. Tubular adenoma shows dense epithelial/tubular proliferation with very little stroma.",
              ],
              [
                "Intraductal papilloma",
                "Papilloma has arborizing fibrovascular cores. Ductal adenoma is a sclerosing adenomatous lesion without characteristic branching papillary fronds.",
              ],
              [
                "Sclerosing adenosis / radial scar",
                "Sclerosing adenosis retains a lobulocentric pattern of compressed acini. Radial scar has a central elastotic or hyalinized nidus with radiating entrapped glands. Both can mimic invasion.",
              ],
              [
                "Invasive carcinoma",
                "Irregular glands in desmoplastic stroma or a truly infiltrative growth pattern raise concern. Demonstrating a myoepithelial layer supports a benign glandular lesion, but stains must be interpreted with morphology and controls.",
              ],
            ].map((x) => (
              <article
                key={x[0]}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold">{x[0]}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Sign-out checklist
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Before finalizing the diagnosis
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Is the lesion circumscribed, and is the overall architecture appropriate for an adenoma?",
              "Is the epithelial–myoepithelial bilayer present where expected?",
              "Is the stromal volume and pattern consistent with the proposed subtype?",
              "For a secretory lesion, does the clinical history support pregnancy or lactation?",
              "Have sclerosis, calcification, or infarction been considered as potential mimics of malignancy?",
              "Are the imaging findings concordant with the histologic diagnosis?",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-teal-600 text-xs font-bold text-teal-700">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
        <footer className="mt-10 border-t border-slate-200 py-6 text-sm leading-6 text-slate-500">
          <p>
            <strong className="text-slate-700">Scope:</strong> This page focuses
            on diagnostic morphology, useful immunohistochemistry, and practical
            differential diagnosis. Management decisions should incorporate
            radiology–pathology concordance and the full clinical context.
          </p>
        </footer>
      </div>
    </main>
  );
}
