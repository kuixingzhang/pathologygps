import Link from "next/link";

const sections = [
  {
    id: "alh",
    name: "Atypical Lobular Hyperplasia (ALH)",
    category: "Lobular neoplasia",
    definition:
      "A non-invasive low-grade neoplastic proliferation of small, discohesive cells in terminal duct lobular units (TDLUs), with or without pagetoid duct involvement. Fewer than half of the acini in an involved TDLU are filled and expanded.",
    morphology: [
      "Small, relatively uniform type A cells with hyperchromatic nuclei, or slightly larger type B cells with vesicular nuclei and mild variability.",
      "Cells are discohesive and may involve acini and terminal ducts in a pagetoid pattern.",
      "The involved acini are not filled and expanded to the extent required for classic LCIS.",
      "Usually an incidental microscopic finding; no specific gross abnormality is expected.",
    ],
    ihc: "When needed, loss of membranous E-cadherin supports lobular differentiation. Interpret with morphology; aberrant retained staining can occur in lobular lesions.",
    behavior:
      "A bilateral risk marker and a non-obligate precursor. The source describes a roughly 4- to 5-fold relative risk and an estimated absolute risk around 1% per year.",
    management:
      "For incidental ALH on core biopsy, observation may be appropriate when radiology–pathology findings are concordant and another target lesion explains the imaging. Excision is considered when discordant or when another lesion independently warrants excision.",
  },
  {
    id: "classic-lcis",
    name: "Classic Lobular Carcinoma In Situ (LCIS)",
    category: "Lobular neoplasia",
    definition:
      "A non-invasive proliferation of discohesive cells in TDLUs, with or without pagetoid involvement of terminal ducts. More than half of the acini in an involved TDLU are filled and expanded.",
    morphology: [
      "Type A cells are small, uniform, and hyperchromatic; type B cells have somewhat larger vesicular nuclei with mild variability.",
      "Glandular architecture is absent; mitoses are uncommon.",
      "Pagetoid extension into adjacent ducts can occur, as can involvement of other benign lesions.",
      "Small foci of apoptosis or minute necrosis may rarely be present.",
    ],
    ihc: "Typically shows loss of membranous E-cadherin, strong cytoplasmic p120 catenin, and loss of membranous β-catenin. Most cases are strongly ER-positive with a low Ki-67 index.",
    behavior:
      "Both a bilateral risk marker and a non-obligate precursor, with an ipsilateral predominance and increased association with invasive lobular carcinoma. The source describes approximately 8- to 10-fold relative risk.",
    management:
      "Management depends on incidental versus targeted disease and radiology–pathology concordance. Incidental classic LCIS with concordant imaging may be managed with high-risk screening and risk-reduction counseling without routine excision in selected cases. Borderline or discordant lesions require further evaluation.",
  },
  {
    id: "florid-lcis",
    name: "Florid Lobular Carcinoma In Situ",
    category: "Non-classic LCIS",
    definition:
      "LCIS with classic-type cytology and marked distention of involved TDLUs or ducts, producing a confluent, mass-like architecture.",
    morphology: [
      "Markedly expanded acini with little or no intervening stroma between adjacent involved spaces, and/or an expanded acinus or duct approximately 40–50 cells in diameter.",
      "Cytology resembles classic LCIS; the defining feature is the extent and confluent architecture.",
      "Microcalcifications and comedonecrosis may be present but are not required.",
      "Carefully search adjacent tissue for subtle invasive lobular carcinoma.",
    ],
    ihc: "Usually retains the lobular phenotype, including loss of membranous E-cadherin. ER is often strongly positive; interpret any aberrant staining in context.",
    behavior:
      "Clinical outcome data are limited. Florid LCIS is more often associated with invasive lobular carcinoma than classic LCIS and warrants careful evaluation.",
    management:
      "Surgical excision is generally recommended. Margin assessment and further treatment should be discussed in a multidisciplinary setting; optimal margin width and the role of radiation remain uncertain.",
  },
  {
    id: "pleomorphic-lcis",
    name: "Pleomorphic Lobular Carcinoma In Situ",
    category: "Non-classic LCIS",
    definition:
      "LCIS composed of large, discohesive cells with marked nuclear pleomorphism, with nuclei greater than four times the size of a lymphocyte or comparable to high-grade DCIS, with or without apocrine features.",
    morphology: [
      "Marked nuclear size and shape variation; binucleated or multinucleated cells may occur.",
      "Apocrine cytology can be present, particularly in apocrine pleomorphic LCIS.",
      "Comedonecrosis and calcifications are common associations but are not required.",
      "Search carefully for associated invasive carcinoma, most often invasive lobular carcinoma.",
    ],
    ihc: "E-cadherin is usually lost. ER may be reduced or absent, particularly in apocrine cases; AR, HER2 overexpression/amplification, and a moderate-to-high Ki-67 index may be seen in subsets.",
    behavior:
      "Evidence on natural history is limited. Reported recurrence rates after conservative surgery vary widely; invasive carcinoma may be found synchronously or develop subsequently.",
    management:
      "Excision to negative margins is generally favored when feasible, with margin status reported. Radiation and other adjuvant approaches remain debated and should be individualized.",
  },
  {
    id: "adh",
    name: "Atypical Ductal Hyperplasia (ADH)",
    category: "Ductal low-grade neoplasia",
    definition:
      "An epithelial proliferative lesion with cytologic and architectural features similar to low-grade DCIS, but with less developed architecture, more limited TDLU involvement, or limited contiguous extent.",
    morphology: [
      "Monotonous, evenly spaced cells with round nuclei, dense chromatin, and distinct cell borders.",
      "Rigid bridges, bars, or arcades of uniform thickness; bulbous micropapillae with narrow bases and broad tips; or a cribriform pattern.",
      "No intermediate- or high-grade nuclear features. Necrosis is not expected.",
      "The distinction from low-grade DCIS is quantitative: limited involvement, generally ≤2 mm contiguous extent, or limited involved spaces; in a papilloma, the source cites ≤3 mm as a practical threshold.",
      "Because core biopsies may not show the full lesion, use conservative wording when extent cannot be assessed.",
    ],
    ihc: "Typically diffuse strong ER positivity and absence of high-molecular-weight cytokeratins such as CK5/6 or CK14. Usual ductal hyperplasia more often shows heterogeneous ER and mosaic basal cytokeratin staining.",
    behavior:
      "Associated with a 3- to 5-fold increased risk of invasive breast carcinoma in either breast; the source estimates an absolute risk of approximately 1% per year.",
    management:
      "Core biopsy upgrade rates vary; contemporary series cited in the source report approximately 10–20%. Diagnostic excision or vacuum-assisted excision is commonly recommended, with selective observation considered only in carefully chosen, concordant, limited lesions under local guidance.",
  },
  {
    id: "dcis",
    name: "Ductal Carcinoma In Situ (DCIS)",
    category: "Ductal neoplasia",
    definition:
      "A non-invasive proliferation of cohesive neoplastic epithelial cells confined to the mammary ductal-lobular system, with a range of nuclear grades and architectural patterns.",
    morphology: [
      "Assess nuclear grade as low, intermediate, or high; grade is based primarily on cytologic features, not architectural pattern alone.",
      "Architectures include solid, cribriform, micropapillary, and papillary patterns; mixed patterns are common.",
      "Low-grade DCIS shows small, monomorphic cells and often cribriform or micropapillary architecture; necrosis is uncommon but does not exclude it.",
      "Intermediate-grade DCIS has moderate nuclear variability and may show mitoses or necrosis.",
      "High-grade DCIS shows large, pleomorphic nuclei, irregular contours, coarse chromatin, prominent nucleoli, and usually conspicuous mitoses; comedonecrosis is common but not mandatory.",
      "Evaluate for microinvasion, especially with high-grade disease, stromal inflammation/fibrosis, or irregular small clusters beyond involved ducts.",
    ],
    ihc: "ER testing is recommended to inform endocrine risk-reduction discussions. Myoepithelial markers can help in selected difficult cases, but use more than one marker and do not diagnose invasion solely from absent staining.",
    behavior:
      "A heterogeneous, non-obligate precursor of invasive carcinoma. Breast cancer–specific survival is excellent overall, but invasive recurrence has greater clinical significance than recurrent in situ disease.",
    management:
      "Management is individualized and may include breast-conserving surgery with radiation or mastectomy. Margin goals, endocrine therapy, and selected de-escalation approaches depend on current guidelines, patient factors, and multidisciplinary review.",
  },
];

const comparison = [
  [
    "ALH",
    "Lobular; small discohesive cells",
    "Fewer than 50% of acini filled/expanded",
    "Risk marker and non-obligate precursor",
  ],
  [
    "Classic LCIS",
    "Lobular; small discohesive cells",
    "More than 50% of acini filled/expanded",
    "Risk marker and non-obligate precursor",
  ],
  [
    "Florid LCIS",
    "Lobular; classic-type cytology",
    "Marked confluent distention; little intervening stroma and/or 40–50-cell diameter",
    "Higher concern; excision generally recommended",
  ],
  [
    "Pleomorphic LCIS",
    "Lobular; marked nuclear pleomorphism",
    "Large cells; nuclei >4× lymphocyte size",
    "Higher concern; excision and margin assessment",
  ],
  [
    "ADH",
    "Ductal; low-grade monotonous cells",
    "Limited extent of a DCIS-like proliferation",
    "Risk marker; assess upgrade risk",
  ],
  [
    "DCIS",
    "Ductal; cohesive neoplastic cells",
    "More extensive ductal epithelial neoplasia",
    "Non-obligate precursor; grade and extent guide management",
  ],
];

const workflow = [
  [
    "1. Identify the cell population",
    "Discohesive cells suggest lobular neoplasia; cohesive, polarized cells with rigid bridges, micropapillae, or cribriform spaces suggest ductal low-grade neoplasia.",
  ],
  [
    "2. Assess extent and architecture",
    "For ALH versus classic LCIS, estimate the proportion of acini filled and expanded. For ADH versus low-grade DCIS, assess contiguous extent and the number of involved spaces.",
  ],
  [
    "3. Grade the cytology",
    "Marked pleomorphism in a discohesive lesion raises pleomorphic LCIS. Intermediate- or high-grade nuclei preclude ADH.",
  ],
  [
    "4. Apply a targeted IHC panel",
    "Use E-cadherin and p120/β-catenin when lobular versus ductal differentiation is uncertain. Use ER and basal cytokeratins to support ADH versus usual ductal hyperplasia.",
  ],
  [
    "5. Correlate with imaging",
    "Determine whether the lesion explains the imaging target. Discordance or a target lesion not accounted for histologically warrants additional evaluation.",
  ],
  [
    "6. Search for invasion",
    "For florid/pleomorphic LCIS and DCIS, thoroughly examine adjacent tissue for subtle invasive carcinoma; use myoepithelial markers as adjuncts, not in isolation.",
  ],
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      {(eyebrow || title) && (
        <div className="space-y-2">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 marker:text-teal-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function NonInvasiveNeoplasiaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 md:px-8">
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
            <Link href="/breast/adenomas" className="hover:text-teal-700">
              Adenomas
            </Link>
            <Link
              href="/breast/epithelial-myoepithelial-tumors"
              className="hover:text-teal-700"
            >
              Epithelial-myoepithelial tumors
            </Link>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0 space-y-14">
            <Section
              id="overview"
              eyebrow="01 · Overview"
              title="Classification at a glance"
            >
              <p className="max-w-4xl text-base leading-7 text-slate-700">
                This page groups non-invasive epithelial neoplasia by lobular
                and ductal phenotype. Lobular neoplasia includes atypical
                lobular hyperplasia and classic LCIS; florid and pleomorphic
                LCIS are non-classic forms and are treated separately here
                because their architecture, cytology, and clinical management
                differ. ADH is included in this section as a limited low-grade
                ductal proliferation on the spectrum with low-grade DCIS.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Lesion</th>
                      <th className="px-4 py-3 font-semibold">
                        Cell phenotype
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Key discriminator
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Clinical framing
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
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
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="font-semibold text-amber-950">
                  Interpretive caution
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  These diagnoses are not interchangeable. For ALH versus
                  classic LCIS and ADH versus low-grade DCIS, the distinction
                  depends partly on quantitative extent. Limited core biopsies
                  may not show the full lesion; describe uncertainty explicitly
                  and recommend appropriate correlation when needed.
                </p>
              </div>
            </Section>

            <Section id="workflow">
              <div className="space-y-3">
                {workflow.map(([title, text], i) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="entities"
              eyebrow="02 · Entity profiles"
              title="Lesion-by-lesion guide"
            >
              <div className="space-y-5">
                {sections.map((s) => (
                  <article
                    id={s.id}
                    key={s.id}
                    className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <div className="border-b border-slate-200 bg-slate-100/80 px-5 py-4 md:px-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                        {s.category}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{s.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {s.definition}
                      </p>
                    </div>
                    <div className="grid gap-6 p-5 md:grid-cols-2 md:p-6">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Morphology checklist
                        </h4>
                        <BulletList items={s.morphology} />
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-xl bg-slate-50 p-4">
                          <h4 className="font-semibold">
                            Immunohistochemistry
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {s.ihc}
                          </p>
                        </div>
                        <div className="rounded-xl bg-teal-50 p-4">
                          <h4 className="font-semibold text-teal-950">
                            Behavior / risk
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-teal-950/90">
                            {s.behavior}
                          </p>
                        </div>
                        <div className="rounded-xl border border-slate-200 p-4">
                          <h4 className="font-semibold">
                            Clinical correlation
                          </h4>
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {s.management}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </Section>

            <Section
              id="ihc"
              eyebrow="03 · Ancillary studies"
              title="IHC patterns and practical limitations"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">
                    Lobular versus ductal differentiation
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                    <li>
                      <strong>E-cadherin:</strong> loss of membranous staining
                      supports lobular neoplasia.
                    </li>
                    <li>
                      <strong>p120 catenin:</strong> diffuse cytoplasmic
                      staining supports a lobular phenotype.
                    </li>
                    <li>
                      <strong>β-catenin:</strong> membranous expression is often
                      lost in lobular lesions.
                    </li>
                    <li>
                      Some lobular lesions retain aberrant E-cadherin staining;
                      fragmented, diminished, or cytoplasmic staining should not
                      automatically trigger a ductal diagnosis.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">
                    ADH versus usual ductal hyperplasia
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
                    <li>
                      <strong>ADH:</strong> typically strong, diffuse ER
                      positivity and absent CK5/6 or CK14 in the atypical cells.
                    </li>
                    <li>
                      <strong>Usual ductal hyperplasia:</strong> heterogeneous
                      ER and mosaic basal cytokeratin staining.
                    </li>
                    <li>
                      Interpret stain distribution across the proliferation
                      rather than relying on a single positive or negative
                      focus.
                    </li>
                    <li>
                      Immunohistochemistry supports but does not replace
                      architectural and quantitative assessment.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 md:col-span-2">
                  <h3 className="font-semibold">DCIS versus invasion</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Myoepithelial markers can be useful in difficult cases,
                    including DCIS involving sclerosing adenosis. Use more than
                    one marker when appropriate. Loss of myoepithelial staining
                    alone does not unequivocally establish invasion; evaluate
                    the contour of cell clusters, stromal response, and overall
                    pattern.
                  </p>
                </div>
              </div>
            </Section>

            <Section
              id="pitfalls"
              eyebrow="04 · Diagnostic pitfalls"
              title="Common traps"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  [
                    "Overcalling ALH as LCIS",
                    "Estimate the proportion of acini filled and expanded; fewer than half supports ALH, more than half supports classic LCIS.",
                  ],
                  [
                    "Overcalling ADH as DCIS",
                    "ADH is a limited low-grade DCIS-like proliferation. Extent thresholds are practical and may be difficult to apply on a partial core sample.",
                  ],
                  [
                    "Calling pleomorphic LCIS from type B cells alone",
                    "Borderline type B classic LCIS should remain classic LCIS unless the marked nuclear pleomorphism criterion is met.",
                  ],
                  [
                    "Assuming necrosis is required",
                    "Comedonecrosis and calcifications may occur in florid or pleomorphic LCIS and DCIS, but they are not mandatory for those diagnoses.",
                  ],
                  [
                    "Using E-cadherin as a stand-alone answer",
                    "Aberrant retained or diminished staining can occur. Integrate staining pattern with cell cohesion and morphology.",
                  ],
                  [
                    "Missing invasion near non-classic LCIS/DCIS",
                    "Thoroughly sample adjacent tissue, especially when there is a mass, marked distention, high-grade cytology, inflammation, or stromal fibrosis.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="signout"
              eyebrow="05 · Reporting"
              title="Sign-out checklist"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Is the proliferation lobular or ductal?",
                    "Is the cytology low grade, pleomorphic, or high grade?",
                    "For ALH/LCIS, is less than or more than half of the acini involved?",
                    "For ADH/DCIS, can the full extent be assessed?",
                    "Are necrosis, calcifications, or apocrine features present?",
                    "Has E-cadherin/p120 been used only when needed and interpreted with morphology?",
                    "Is there radiology–pathology concordance?",
                    "Has adjacent tissue been examined for invasive carcinoma?",
                    "For florid/pleomorphic LCIS, is margin status reported when applicable?",
                    "For ADH on core biopsy, has upgrade risk and sampling adequacy been addressed?",
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
                    State the lesion subtype clearly, document relevant
                    grade/extent and associated findings, and flag
                    radiology–pathology discordance or limited sampling when
                    these affect interpretation.
                  </p>
                </div>
              </div>
            </Section>

            <div className="border-t border-slate-200 pt-6 text-xs leading-5 text-slate-500">
              Educational reference for professional use. Management statements
              summarize the supplied source and are not a substitute for current
              institutional protocols, multidisciplinary review, or
              patient-specific clinical judgment.
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
                    ["workflow", "Diagnostic workflow"],
                    ["entities", "Lesion profiles"],
                    ["alh", "ALH"],
                    ["classic-lcis", "Classic LCIS"],
                    ["florid-lcis", "Florid LCIS"],
                    ["pleomorphic-lcis", "Pleomorphic LCIS"],
                    ["adh", "ADH"],
                    ["dcis", "DCIS"],
                    ["ihc", "IHC patterns"],
                    ["pitfalls", "Diagnostic pitfalls"],
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
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
