import Link from "next/link";

const entities = [
  {
    name: "Pleomorphic adenoma",
    tag: "Benign epithelial-myoepithelial tumor",
    summary:
      "A circumscribed biphasic neoplasm with epithelial glands and myoepithelial cells embedded in characteristic chondromyxoid stroma.",
    morphology: [
      "Usually a well-circumscribed, lobulated nodule, often retroareolar.",
      "Glands and epithelial strands show an inner luminal layer and an outer myoepithelial layer.",
      "Myoepithelial-like spindle or stellate cells are present in a myxoid, chondromyxoid, or occasionally chondroid/osseous matrix.",
      "Significant atypia, atypical mitoses, and tumor necrosis are not expected.",
    ],
    pitfall:
      "Matrix-producing metaplastic carcinoma may also contain abundant matrix, but typically shows malignant cytology, disorganized tumor nests, loss of an orderly peripheral myoepithelial layer, and often stromal invasion/desmoplasia.",
    behavior:
      "Benign in most cases. Incomplete excision, especially with extensive polypoid intraductal growth, can lead to recurrence. Rare malignant transformation has been reported.",
  },
  {
    name: "Classic adenomyoepithelioma (AME)",
    tag: "Tumor of uncertain malignant potential",
    summary:
      "A biphasic neoplasm with small glandular spaces lined by inner luminal epithelial cells and a conspicuous proliferation of abluminal myoepithelial cells.",
    morphology: [
      "Often a circumscribed or multilobulated nodule, sometimes with central sclerosis.",
      "The myoepithelial population may be clear-cell, spindle, myoid, plasmacytoid, or epithelioid.",
      "Patterns include tubular, spindle-cell, lobulated, and papillary forms; mixed patterns are common.",
      "Satellite nodules can occur and are not, by themselves, proof of malignancy.",
      "Atypical AME may show mild-to-moderate cytologic atypia and increased mitotic activity; atypical mitoses or convincing malignant features warrant concern for malignant transformation.",
    ],
    pitfall:
      "Look for a nodular proliferation of enlarged, plump myoepithelial cells around haphazardly arranged glands. This helps separate AME from papilloma with myoepithelial hyperplasia, adenosis, tubular adenoma, and microglandular adenosis.",
    behavior:
      "Most behave indolently after complete excision, but local recurrence, rare metastasis, and malignant transformation have been reported. Classic AME is therefore best regarded as a neoplasm of uncertain malignant potential.",
  },
  {
    name: "Malignant adenomyoepithelioma (M-AME)",
    tag: "Malignant epithelial and/or myoepithelial component",
    summary:
      "An AME with malignant transformation of the luminal epithelial component, myoepithelial component, or both, usually with recognizable AME-like architecture somewhere in the tumor.",
    morphology: [
      "Moderate-to-marked cytologic atypia, increased mitotic activity, and tumor necrosis are common warning features.",
      "The tumor may show a focally irregular/infiltrative outline, stromal desmoplasia, and an inflammatory response.",
      "Luminal malignancy may resemble invasive carcinoma of no special type or a special type; myoepithelial malignancy may show spindle or epithelioid overgrowth.",
      "Metaplastic patterns, including spindle-cell, squamous, low-grade adenosquamous, and matrix-producing carcinoma, have been described.",
      "Extensive sampling may be needed to find a residual classic AME component.",
    ],
    pitfall:
      "Atypical AME and M-AME overlap. Do not classify a lesion as malignant from mitotic count or Ki-67 alone; integrate cytology, necrosis, architecture, invasion, and the relationship between the atypical and conventional components.",
    behavior:
      "Potentially aggressive. Hematogenous metastases, particularly to the lungs and sometimes the brain, are reported; nodal metastases are uncommon. Management and staging depend on the malignant component and clinical context.",
  },
];

const ihcRows = [
  [
    "p63 / p40",
    "Nuclear myoepithelial markers",
    "Use as part of a panel; staining can be variable in AME and may be lost or altered in malignant areas.",
  ],
  [
    "SMMHC",
    "Myoepithelial marker",
    "Useful alongside p63 to demonstrate the outer cell population; avoid reliance on a single stain.",
  ],
  [
    "Calponin / SMA",
    "Myoepithelial or myoid differentiation",
    "Can support myoepithelial differentiation; SMA is robust but less specific.",
  ],
  [
    "CK5/6 / CK14",
    "Basal-type cytokeratins",
    "May highlight myoepithelial/basal differentiation, but patterns can be paradoxical or heterogeneous in AME.",
  ],
  [
    "S100 / SOX10",
    "Myoepithelial-associated markers",
    "Supportive in context; neither is independently diagnostic.",
  ],
  [
    "Low-molecular-weight CK / EMA",
    "Luminal epithelial component",
    "Can help identify the inner epithelial population in a biphasic lesion.",
  ],
  [
    "ER / PR",
    "Hormone receptor status",
    "Variable in AME; absence of hormone receptors does not by itself establish malignancy.",
  ],
  [
    "Ki-67 / p53",
    "Proliferation / tumor suppressor pattern",
    "Higher proliferation or aberrant p53 may support concern, but no single threshold reliably separates atypical from malignant AME.",
  ],
  [
    "HRAS p.Gln61Arg IHC / molecular testing",
    "Selected malignant AME work-up",
    "A positive result can support an AME relationship in a carcinoma with compatible morphology; use only when clinically/pathologically indicated.",
  ],
];

const differentialRows = [
  {
    diagnosis: "Matrix-producing metaplastic carcinoma",
    clues:
      "Atypical malignant cells in nests or aggregates; disorganized architecture; no orderly continuous myoepithelial rim; necrosis, atypical mitoses, and/or invasion may be present.",
  },
  {
    diagnosis: "Mucinous carcinoma",
    clues:
      "Neoplastic epithelial cells in epithelial-type mucin; lacks the organized biphasic epithelial-myoepithelial architecture of pleomorphic adenoma.",
  },
  {
    diagnosis: "Intraductal papilloma with myoepithelial hyperplasia",
    clues:
      "Papillary fronds and fibrovascular cores are central. In AME, myoepithelial cells are often more numerous, larger, and plumper, with a nodular or multilobulated tumor pattern.",
  },
  {
    diagnosis: "Adenosis / tubular adenoma / microglandular adenosis",
    clues:
      "Correlate overall architecture and myoepithelial-cell prominence. Tubular AME typically has conspicuous hyperplastic myoepithelial cells and larger, more irregular tubules than microglandular adenosis.",
  },
  {
    diagnosis: "Adenoid cystic carcinoma",
    clues:
      "Can overlap morphologically and may share some marker expression. MYB rearrangements typical of adenoid cystic carcinoma are not characteristic of AME; interpret molecular results with morphology.",
  },
  {
    diagnosis: "Invasive carcinoma with metaplastic differentiation",
    clues:
      "Search extensively for a conventional AME component and determine whether the epithelial and/or myoepithelial populations show malignant cytology, destructive invasion, and increased mitoses.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 text-sm leading-6 text-slate-700 marker:text-teal-600 list-disc">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function EpithelialMyoepithelialTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide text-slate-800 hover:text-teal-700"
            >
              PathologyGPS
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
              <Link href="/breast" className="hover:text-teal-700">
                Breast
              </Link>
              <Link
                href="/breast/epithelial/papillary-lesions"
                className="hover:text-teal-700"
              >
                Papillary lesions
              </Link>
              <Link href="/breast/adenomas" className="hover:text-teal-700">
                Adenomas
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Epithelial-Myoepithelial Tumors
          </h1>
        </header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-14">
            <Section
              id="overview"
              eyebrow="01 · Overview"
              title="Classification at a glance"
            >
              <p className="max-w-4xl text-base leading-7 text-slate-700">
                Breast epithelial-myoepithelial tumors are a heterogeneous group
                of biphasic neoplasms. The principal entities covered here are
                pleomorphic adenoma, classic adenomyoepithelioma (AME), and
                malignant adenomyoepithelioma (M-AME). Adenoid cystic carcinoma
                is a separate entity and should be considered in the
                differential diagnosis when morphology overlaps.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Pleomorphic adenoma",
                    label: "Benign",
                    text: "Biphasic glands and strands in chondromyxoid stroma.",
                  },
                  {
                    title: "Classic AME",
                    label: "Uncertain malignant potential",
                    text: "Prominent, often enlarged abluminal myoepithelial proliferation.",
                  },
                  {
                    title: "Malignant AME",
                    label: "Malignant",
                    text: "Malignancy in luminal cells, myoepithelial cells, or both.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-950">Terminology note</p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  For breast tumors with malignant epithelial and/or
                  myoepithelial components arising in an AME-like lesion, use{" "}
                  <em>malignant adenomyoepithelioma</em> or an appropriate
                  descriptive diagnosis. The term “epithelial-myoepithelial
                  carcinoma” is not recommended for these breast tumors in the
                  source classification.
                </p>
              </div>
            </Section>

            <Section
              id="entities"
              eyebrow="02 · Entity profiles"
              title="Key entities and morphology"
            >
              <div className="space-y-5">
                {entities.map((entity, index) => (
                  <article
                    key={entity.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="border-b border-slate-200 bg-slate-100/80 px-5 py-4 md:px-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-semibold">{entity.name}</h3>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-800 ring-1 ring-slate-200">
                          {entity.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {entity.summary}
                      </p>
                    </div>
                    <div className="grid gap-6 p-5 md:grid-cols-2 md:p-6">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Morphologic checklist
                        </h4>
                        <BulletList items={entity.morphology} />
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-xl bg-slate-50 p-4">
                          <h4 className="font-semibold">Diagnostic pitfall</h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {entity.pitfall}
                          </p>
                        </div>
                        <div className="rounded-xl bg-teal-50 p-4">
                          <h4 className="font-semibold text-teal-950">
                            Behavior / clinical significance
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-teal-950/90">
                            {entity.behavior}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index === 1 && (
                      <div className="border-t border-slate-200 bg-amber-50 px-5 py-4 md:px-6">
                        <p className="text-sm leading-6 text-amber-950">
                          <strong>Atypical AME:</strong> mild-to-moderate
                          cytologic atypia and increased mitotic activity may
                          occur without sufficient evidence for malignancy.
                          Atypical mitoses, substantial necrosis, marked atypia,
                          or destructive invasion should prompt careful
                          evaluation for M-AME.
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </Section>

            <Section
              id="ihc"
              eyebrow="03 · Ancillary studies"
              title="Immunohistochemistry: use a panel"
            >
              <p className="max-w-4xl text-sm leading-6 text-slate-700">
                Myoepithelial marker expression in AME can be variable and
                unpredictable. No single stain should be used in isolation. A
                practical panel often combines a nuclear marker such as p63 with
                a cytoplasmic marker such as SMMHC, supplemented by other
                markers according to the morphologic question and tissue
                quality.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Marker(s)</th>
                      <th className="px-4 py-3 font-semibold">Role</th>
                      <th className="px-4 py-3 font-semibold">
                        Interpretive note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ihcRows.map((row) => (
                      <tr
                        key={row[0]}
                        className="border-t border-slate-200 align-top"
                      >
                        {row.map((cell) => (
                          <td
                            key={cell}
                            className="px-4 py-3 leading-6 text-slate-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">
                    Expected pattern in a biphasic lesion
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Luminal epithelial markers can highlight the inner layer,
                    while a combination of myoepithelial markers supports the
                    outer population. Confirm that the distribution matches the
                    H&E architecture.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">Important limitation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Malignant AME may show an aberrant immunoprofile with loss
                    of a clear distinction between the two cell populations.
                    Negative or patchy staining does not exclude the diagnosis.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="differential"
              eyebrow="04 · Differential diagnosis"
              title="High-yield differential diagnosis"
            >
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Entity</th>
                      <th className="px-4 py-3 font-semibold">
                        Features that help separate it
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {differentialRows.map((row) => (
                      <tr
                        key={row.diagnosis}
                        className="border-t border-slate-200 align-top"
                      >
                        <td className="px-4 py-4 font-semibold text-slate-900">
                          {row.diagnosis}
                        </td>
                        <td className="px-4 py-4 leading-6 text-slate-700">
                          {row.clues}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section
              id="molecular"
              eyebrow="05 · Molecular context"
              title="Molecular findings: supportive, not a substitute for morphology"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">Classic AME</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Reported alterations include <em>PIK3CA</em> hotspot
                    mutations in both ER-positive and ER-negative tumors,{" "}
                    <em>AKT1</em> hotspot mutations more often in ER-positive
                    tumors, and recurrent <em>HRAS</em> hotspot mutations
                    particularly in ER-negative tumors.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">Malignant AME</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Alterations involving <em>HRAS</em> and <em>PIK3CA</em> have
                    also been reported. Detection of an appropriate{" "}
                    <em>HRAS</em> hotspot alteration, including a compatible
                    p.Gln61 alteration, may support an AME origin in a carcinoma
                    with fitting morphology.
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-slate-600">
                These findings are not required for routine diagnosis. Molecular
                testing should answer a specific diagnostic question and be
                interpreted with morphology and immunophenotype.
              </p>
            </Section>

            <Section
              id="signout"
              eyebrow="06 · Reporting"
              title="Sign-out checklist"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Is the lesion truly biphasic?",
                    "Are luminal and myoepithelial populations both recognizable?",
                    "Is the tumor circumscribed or infiltrative?",
                    "Is there cytologic atypia, and in which component?",
                    "Are mitoses increased or atypical?",
                    "Is tumor necrosis present?",
                    "Is there destructive invasion, desmoplasia, or an inflammatory response?",
                    "Has the lesion been adequately sampled for a malignant component?",
                    "Does the IHC pattern support the H&E interpretation?",
                    "Is any associated DCIS or invasive carcinoma separately described?",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-700"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                <div className="mt-5 rounded-xl border border-teal-200 bg-teal-50 p-4">
                  <p className="font-semibold text-teal-950">
                    Reporting principle
                  </p>
                  <p className="mt-1 text-sm leading-6 text-teal-950/90">
                    When malignancy is present, specify whether the luminal
                    epithelial component, the myoepithelial component, or both
                    are malignant, and describe the malignant histologic pattern
                    whenever possible.
                  </p>
                </div>
              </div>
            </Section>

            <div className="border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
              Educational reference for professional use. Interpret findings in
              conjunction with the complete specimen, clinical and radiologic
              context, and current institutional diagnostic standards.
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  On this page
                </p>
                <nav className="mt-4 space-y-3 text-sm">
                  {[
                    ["overview", "Classification"],
                    ["entities", "Entity profiles"],
                    ["ihc", "Immunohistochemistry"],
                    ["differential", "Differential diagnosis"],
                    ["molecular", "Molecular context"],
                    ["signout", "Sign-out checklist"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block text-slate-600 hover:text-teal-700"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  Key reminder
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  A biphasic immunophenotype supports lineage, but the diagnosis
                  and assessment of malignancy remain morphology-led.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
