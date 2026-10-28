import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Start with the anatomic compartment",
    detail:
      "Determine whether the process is centered in the epidermis, superficial nipple ducts and duct orifices, nipple dermis/smooth muscle, or deeper breast parenchyma. Correlate with erosion, scaling, discharge, retraction, a palpable mass, and imaging.",
  },
  {
    number: "02",
    title: "Separate an epidermal process from a ductal or infiltrative lesion",
    detail:
      "Paget disease is an intraepidermal malignant glandular proliferation. Nipple adenoma is a superficial ductal/tubular proliferation that often connects to the epidermis and retains myoepithelial cells. Syringomatous tumor forms bland epithelial nests and cords infiltrating dermis and smooth muscle around lactiferous sinuses.",
  },
  {
    number: "03",
    title: "Look for the defining architecture",
    detail:
      "For nipple adenoma, assess the nodular or wedge-shaped proliferation, variable adenosis/papillomatosis, and preserved myoepithelium. For syringomatous tumor, look for small irregular nests and comma- or tadpole-shaped cords with squamous and glandular differentiation. For SMOLD, identify keratinizing squamous metaplasia within lactiferous ducts with keratin plugging and inflammation.",
  },
  {
    number: "04",
    title: "Use a question-driven IHC panel",
    detail:
      "For suspected Paget disease, use low-molecular-weight cytokeratins (such as CK7), HER2, and selected markers based on the differential. Use p63 or p40/high-molecular-weight keratins for squamous differentiation, and myoepithelial markers around ducts/tubules when evaluating nipple adenoma. Consider melanocytic markers if melanoma is in the differential.",
  },
  {
    number: "05",
    title: "Search for associated carcinoma and assess sampling",
    detail:
      "Mammary Paget disease is commonly associated with underlying DCIS and/or invasive carcinoma. Evaluate the ipsilateral breast and correlate with imaging. In a superficial or fragmented biopsy, location and the relationship to the epidermis, lactiferous ducts, and deeper breast tissue may be decisive; recommend additional sampling when necessary.",
  },
];

const rows = [
  {
    entity: "Squamous metaplasia of lactiferous ducts (SMOLD)",
    site: "Lactiferous ducts, usually subareolar",
    pattern:
      "Keratinizing squamous epithelium extends into ducts; keratin accumulates and may obstruct the duct. Rupture can produce an abscess, sinus tract, and foreign-body reaction.",
    cells:
      "Squamous metaplasia with keratin debris; acute/chronic inflammation and foreign-body giant cells may be prominent.",
    ihc: "Usually diagnosed morphologically; no defining IHC panel described in the supplied sources.",
    key: "Clinical context may include smoking, subareolar abscess, or fistula. Keratinizing squamous metaplasia in duct lumina is the key finding; inflammation alone is nonspecific.",
  },
  {
    entity: "Nipple adenoma",
    site: "Superficial nipple, often contiguous with epidermis",
    pattern:
      "Nodular, often wedge-shaped and relatively circumscribed proliferation of tubular/ductal structures; variable adenosis, papillomatosis, and usual ductal hyperplasia.",
    cells:
      "Benign glandular epithelium with a preserved myoepithelial layer; epidermal replacement can cause erosion, bleeding, and crusting.",
    ihc: "Myoepithelial markers outline ducts/tubules. Heterogeneous CK5/6 and ER expression supports a benign heterogeneous proliferation in difficult cases.",
    key: "Superficial ductal/tubular proliferation with myoepithelial preservation. Can clinically mimic Paget disease; atypia or loss of myoepithelium requires careful evaluation.",
  },
  {
    entity: "Syringomatous tumor of the nipple",
    site: "Nipple/areolar dermis and smooth muscle around lactiferous sinuses",
    pattern:
      "Locally infiltrative small nests, cords, and comma- or tadpole-shaped structures; may include keratin-filled cysts and squamous differentiation. Does not invade the epidermis or destructively invade ducts.",
    cells:
      "Cytologically bland, heterogeneous epithelial cells; mitoses rare; necrosis is not a feature. Perineural invasion may occur.",
    ihc: "Peripheral myoepithelial-like cells commonly express p63 and high-molecular-weight keratins; squamous cells may express p40/p63 and CK10; glandular cells express CK8/18. Usually ER/PR/HER2 negative.",
    key: "Infiltrative but cytologically bland. Distinguish from low-grade adenosquamous carcinoma, which is usually deeper and more atypical with mitoses; limited biopsy may be challenging.",
  },
  {
    entity: "Mammary Paget disease",
    site: "Nipple and/or areolar epidermis",
    pattern:
      "Malignant glandular cells scattered singly, in clusters, or in small gland-like structures throughout the epidermis (pagetoid spread); epidermal acanthosis/hyperkeratosis may occur.",
    cells:
      "Large cells with abundant pale or weakly eosinophilic cytoplasm, enlarged vesicular often pleomorphic nuclei, prominent nucleoli, and variable mitotic activity.",
    ihc: "Usually CK7/CAM5.2 positive; HER2 overexpressed in most cases; variable ER/PR, AR, GCDFP-15, GATA3, EMA, and CEA. CK20 typically negative.",
    key: "Search for underlying DCIS and/or invasive carcinoma. Differentiate from Bowen disease, melanoma, Toker cells, and direct epidermal involvement by an underlying carcinoma.",
  },
  {
    entity: "Toker cells / Toker cell hyperplasia",
    site: "Basal epidermis of the nipple",
    pattern:
      "Scattered single cells or small clusters; rarely small monolayered glands without myoepithelium.",
    cells:
      "Small bland cells with clear or pale cytoplasm and no malignant nuclear features.",
    ihc: "CK7 and CAM5.2 positive; usually ER/PR positive and HER2 negative.",
    key: "Benign cytology and basal location favor Toker cells. Paget cells are larger and atypical, and are often HER2 positive. Interpret with clinical findings and underlying carcinoma status.",
  },
  {
    entity: "Low-grade adenosquamous carcinoma",
    site: "Usually deeper breast parenchyma; nipple involvement is uncommon",
    pattern:
      "Glandular and squamous elements, sometimes with an associated spindle cell component; may mimic syringomatous tumor.",
    cells:
      "More nuclear atypia and scattered mitoses than typical syringomatous tumor; lumina may contain necrotic debris.",
    ihc: "Use a panel and interpret in context; squamous/basal markers may overlap with syringomatous tumor.",
    key: "Depth of origin, cytologic atypia, mitotic activity, and destructive invasion help. Superficial biopsy without orientation may not permit confident distinction.",
  },
  {
    entity: "Squamous cell carcinoma in situ (Bowen disease)",
    site: "Nipple epidermis",
    pattern:
      "Full-thickness atypical squamous proliferation with disordered maturation; may resemble Paget disease clinically and histologically.",
    cells:
      "Atypical squamous cells, often with enlarged hyperchromatic nuclei and dyskeratosis.",
    ihc: "Usually high-molecular-weight keratins and p63 positive; low-molecular-weight glandular keratins are generally not the dominant pattern.",
    key: "Squamous morphology and p63/high-molecular-weight keratin profile favor Bowen disease over Paget disease.",
  },
  {
    entity: "Melanoma involving nipple epidermis",
    site: "Nipple/areolar epidermis",
    pattern:
      "Pagetoid or lentiginous melanocytic proliferation; may be pigmented or amelanotic.",
    cells: "Atypical melanocytes; pigment may be absent or subtle.",
    ihc: "S100, SOX10, Melan-A, and/or HMB45 support melanocytic differentiation; keratins support Paget cells instead.",
    key: "Use a melanocytic panel when morphology or pigmentation raises concern. Pigment alone does not establish melanoma; Paget cells may contain phagocytosed melanin.",
  },
];

const ihcRows = [
  {
    question: "Paget disease vs. Toker cells",
    markers: "CK7, CAM5.2, HER2, ER/PR; correlate with morphology",
    interpretation:
      "Both can express low-molecular-weight keratins. Toker cells are bland, small, and usually ER/PR positive and HER2 negative; Paget cells are cytologically malignant and commonly HER2 positive.",
  },
  {
    question: "Paget disease vs. Bowen disease",
    markers: "CK7 or CAM5.2; p63 and high-molecular-weight keratins",
    interpretation:
      "Paget disease shows glandular differentiation and typically low-molecular-weight keratin expression. Bowen disease shows squamous differentiation and is usually p63/high-molecular-weight keratin positive.",
  },
  {
    question: "Paget disease vs. melanoma",
    markers: "CK7, EMA, HER2; SOX10, S100, Melan-A, HMB45 as indicated",
    interpretation:
      "Assign staining to the atypical lesional cells. Melanocytic markers highlight melanoma; Paget cells express epithelial markers. Melanin may be present in Paget disease because of pigment transfer or phagocytosis.",
  },
  {
    question: "Nipple adenoma vs. invasive carcinoma",
    markers:
      "p63, smooth muscle myosin heavy chain, calponin or other validated myoepithelial markers; CK5/6 and ER in selected cases",
    interpretation:
      "A continuous myoepithelial layer around ductal/tubular structures supports nipple adenoma. Evaluate for atypia, destructive invasion, or a coexisting carcinoma; no single stain replaces morphology.",
  },
  {
    question: "Syringomatous tumor vs. low-grade adenosquamous carcinoma",
    markers:
      "p63/p40, high- and low-molecular-weight cytokeratins; ER as appropriate",
    interpretation:
      "There is overlap in basal/squamous markers. Integrate anatomic location, infiltrative pattern, cytologic atypia, mitoses, necrosis, and the relationship to lactiferous sinuses and deeper parenchyma.",
  },
];

const redFlags = [
  "Persistent unilateral eczematous, erythematous, scaly, crusted, or ulcerated nipple change, particularly when not resolving with appropriate treatment: exclude mammary Paget disease.",
  "Paget disease on biopsy: evaluate for underlying DCIS and/or invasive carcinoma even if no mass is palpable.",
  "Nipple adenoma with atypia, loss of myoepithelial cells, or a destructive invasive pattern: do not assume a purely benign lesion; assess for associated or contiguous carcinoma.",
  "A bland but infiltrative nipple lesion: consider syringomatous tumor, but exclude low-grade adenosquamous carcinoma and relevant skin adnexal tumors.",
  "Subareolar abscess or fistula with keratinizing squamous metaplasia: consider SMOLD; inflammation and foreign-body reaction alone are not specific.",
  "Pigmented or pagetoid epidermal lesion: consider melanoma and Bowen disease in addition to Paget disease and benign Toker cells.",
];

const checklist = [
  "Confirm the exact biopsy site and whether the specimen includes epidermis, nipple ducts, dermis, and/or deeper breast tissue.",
  "Review clinical description: erosion, scaling, crust, bleeding, discharge, retraction, palpable mass, abscess, or fistula.",
  "For suspected Paget disease, document whether the epidermal cells are malignant and recommend evaluation for underlying breast carcinoma as clinically appropriate.",
  "For nipple adenoma, look for a preserved myoepithelial layer and heterogeneous benign epithelial proliferation; assess any atypia or associated carcinoma.",
  "For syringomatous tumor, assess infiltrative nests/cords, squamous and glandular differentiation, bland cytology, and the relationship to lactiferous sinuses and smooth muscle.",
  "For SMOLD, identify squamous metaplasia within lactiferous ducts, keratin plugging, rupture, and associated inflammation.",
  "Use targeted IHC rather than a broad indiscriminate panel; interpret stains in the correct lesional cell population.",
  "If the biopsy is superficial, fragmented, or does not establish the lesion's depth and relationship to normal structures, state the limitation and recommend additional sampling when appropriate.",
];

export default function NippleLesionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            PathologyGPS · Breast Pathology
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">
            Nipple Lesions
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            A practical diagnostic guide to nipple–areola complex lesions,
            emphasizing anatomic localization, histologic patterns, targeted
            immunohistochemistry, and the distinction between benign mimics and
            malignancy.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2 text-sm">
            {[
              ["#gps", "Diagnostic GPS"],
              ["#comparison", "Differential table"],
              ["#ihc", "IHC guide"],
              ["#redflags", "Diagnostic red flags"],
              ["#sampling", "Biopsy checklist"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-slate-300 px-4 py-2 hover:border-blue-400 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0 space-y-12">
          <section id="gps" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">Diagnostic GPS</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              The nipple–areola complex contains epidermis, superficial duct
              openings, lactiferous ducts/sinuses, and smooth muscle-rich
              stroma. The lesion's compartment and relationship to normal
              structures often narrow the differential before
              immunohistochemistry is performed.
            </p>
            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
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
                  {index < steps.length - 1 && (
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
                  Do not miss
                </p>
                <h3 className="mt-2 text-lg font-semibold text-rose-950">
                  Mammary Paget disease
                </h3>
                <p className="mt-2 leading-7 text-rose-950">
                  A malignant intraepidermal glandular proliferation. The
                  absence of a palpable mass does not exclude underlying DCIS or
                  invasive carcinoma.
                </p>
              </article>
              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-800">
                  Key benign mimic
                </p>
                <h3 className="mt-2 text-lg font-semibold text-blue-950">
                  Nipple adenoma
                </h3>
                <p className="mt-2 leading-7 text-blue-950">
                  Can cause erosion, bleeding, and crusting that clinically
                  mimic Paget disease. Look for a benign ductal/tubular
                  proliferation with preserved myoepithelial cells.
                </p>
              </article>
            </div>
          </section>
          <section id="comparison" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Histology: rapid differential table
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use architecture and anatomic location first. IHC findings overlap
              in some entities and should support, not replace, morphologic
              interpretation.
            </p>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[1500px] table-fixed border-collapse text-left text-sm">
                <colgroup>
                  <col style={{ width: "230px" }} />
                  <col style={{ width: "210px" }} />
                  <col style={{ width: "360px" }} />
                  <col style={{ width: "280px" }} />
                  <col style={{ width: "300px" }} />
                  <col style={{ width: "390px" }} />
                </colgroup>
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    {[
                      "Entity",
                      "Typical location",
                      "Architecture",
                      "Cytology / inflammation",
                      "IHC clues",
                      "Key discriminator / pitfall",
                    ].map((x) => (
                      <th key={x} className="p-3 font-semibold">
                        {x}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.entity}
                      className="border-t border-slate-200 align-top"
                    >
                      <td className="p-3 font-semibold text-slate-950">
                        {row.entity}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.site}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.pattern}
                      </td>
                      <td className="break-words p-3 leading-6 text-slate-700">
                        {row.cells}
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
              IHC guide: answer a specific question
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              The stains below reflect the differential diagnoses discussed in
              the supplied WHO nipple-tumor material and the nipple-disorders
              chapter of the breast biopsy reference.
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
                  <div className="grid gap-4 p-5 md:grid-cols-[280px_minmax(0,1fr)]">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Markers
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
              <strong>Interpretive caution:</strong> CK7 positivity alone does
              not distinguish Paget disease from Toker cells. A myoepithelial
              layer supports nipple adenoma, but morphology and adequate
              sampling remain essential. Marker expression can vary, and
              staining must be assigned to the correct cell population.
            </div>
          </section>
          <section id="redflags" className="scroll-mt-6">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Diagnostic red flags
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
            <h2 className="text-2xl font-bold">Biopsy review checklist</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 leading-7 text-blue-950">
              <strong>When the sample is insufficient:</strong> If the
              distinction depends on depth, the relationship to normal ducts, or
              the presence of an underlying carcinoma, use a descriptive
              diagnosis and recommend additional sampling or excision as
              clinically appropriate rather than overclassifying a limited
              biopsy.
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
            <h2 className="font-semibold">Scope and source alignment</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This page prioritizes diagnostic morphology, differential
              diagnosis, and targeted IHC. It integrates the supplied WHO
              material on syringomatous tumor, nipple adenoma, and mammary Paget
              disease with the supplied breast-biopsy chapter on SMOLD, nipple
              adenoma, syringomatous adenoma, Paget disease, and Toker cells.
              Rare skin adnexal and other tumors of the nipple–areola complex
              are not covered exhaustively. This educational reference does not
              replace review of the complete specimen, clinical history,
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
                IHC guide
              </a>
              <a href="#redflags" className="hover:text-blue-700">
                Diagnostic red flags
              </a>
              <a href="#sampling" className="hover:text-blue-700">
                Biopsy checklist
              </a>
            </nav>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold">Core principle</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Anatomic compartment → architecture → cytology → targeted IHC →
                assess for associated carcinoma.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-bold">Related pages</h3>
              <Link
                href="/breast/epithelial/papillary-lesions"
                className="mt-2 block text-sm text-blue-700 hover:underline"
              >
                Papillary lesions
              </Link>
              <Link
                href="/breast/mesenchymal/spindle-cell-lesions"
                className="mt-2 block text-sm text-blue-700 hover:underline"
              >
                Spindle cell lesions
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
