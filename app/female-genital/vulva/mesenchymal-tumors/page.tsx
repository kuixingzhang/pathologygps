type Profile = {
  name: string;
  category: string;
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
  pitfall: string;
};

const profiles: Profile[] = [
  {
    name: "Prepubertal Fibroma (CALME, Childhood Asymmetry Labium Majus Enlargement)",
    category: "Benign fibroblastic proliferation · usually prepubertal girls",
    histology: [
      "Typically presents as unilateral, painless enlargement of the labium majus rather than a discrete mass; the lesion is poorly defined and diffusely infiltrates pre-existing vulvar connective tissue in the submucosa and dermis.",
      "The proliferation is hypocellular and patternless, composed of bland spindle or occasional stellate fibroblastic cells in variably collagenous, edematous, or focally myxoid stroma.",
      "Collagen ranges from thick bundles to delicate wispy fibres. Cells have ovoid nuclei, fine chromatin, inconspicuous nucleoli, and poorly defined amphophilic cytoplasm.",
      "Nuclear atypia, pleomorphism, and necrosis are absent; mitotic activity is sparse or absent. Adnexal structures may be encircled by the infiltrative proliferation.",
      "Grossly, there is no discrete mass or discernible border; the cut surface is pinkish-grey to tan. hemorrhage and necrosis are absent.",
    ],
    ihc: [
      "CD34 is typically multifocal to strongly and diffusely positive.",
      "S100, SMA, and desmin are consistently negative in the described cases.",
      "ER and PR are commonly positive, although staining may be weak or patchy.",
    ],
    molecular: [
      "No clinically relevant diagnostic molecular test is specified. No known predisposing genetic or environmental risk factor is established.",
    ],
    differential: [
      "Myofibroblastoma: generally a circumscribed mass with short intersecting fascicles and conspicuous hyalinized collagen; desmin and CD34 are commonly coexpressed, with frequent RB1 loss.",
      "Cellular angiofibroma: usually circumscribed and more cellular, with numerous thick-walled vessels.",
      "Deep (aggressive) angiomyxoma: deep, poorly circumscribed myxoid neoplasm with a characteristic infiltrative pattern and more prominent vascular component.",
    ],
    pitfall:
      "The diffuse infiltrative edge should not be equated with malignancy. The defining combination is a hypocellular, patternless proliferation of cytologically bland fibroblasts in a prepubertal patient with asymmetric labial enlargement. Local recurrence is reported, particularly after incomplete excision.",
  },
  {
    name: "Myofibroblastoma",
    category: "Benign myofibroblastic neoplasm · RB1 / 13q14 family",
    histology: [
      "Usually an unencapsulated but well-circumscribed tumour composed of bland spindle cells arranged in variably sized, generally short and haphazardly intersecting fascicles.",
      "Broad bands of hyalinized collagen are characteristic; ropey collagen may occur. The spindle cells have short, stubby nuclei with finely dispersed chromatin, small or inconspicuous nucleoli, and eosinophilic to amphophilic cytoplasm with indistinct borders.",
      "Cellularity varies widely, from highly cellular lesions to sparsely cellular, extensively hyalinized examples. The cellular variant may show a higher spindle-cell-to-collagen ratio, infiltrative margins, and storiform or herringbone areas.",
      "Mature adipocytes are common and may be a minor or predominant component. Other patterns include schwannoma-like palisading and focal epithelioid, deciduoid, or round-cell morphology.",
      "Scattered atypical mononuclear or multinucleated cells may represent degenerative-type atypia. Small hyalinized vessels and perivascular lymphocytes are frequent; mast cells may be present.",
    ],
    ihc: [
      "Diffuse coexpression of desmin and CD34 occurs in approximately 90% of cases, although either marker may occasionally be negative.",
      "SMA is expressed in about one third of cases.",
      "Nuclear RB1 expression is lost in approximately 90% of cases. RB1 loss is supportive in the appropriate morphologic setting, not independently diagnostic.",
    ],
    molecular: [
      "Loss of 13q14, including RB1, is characteristic of the related tumour family. RB1 loss can be assessed by FISH or next-generation sequencing in selected diagnostically difficult cases.",
      "Superficial myofibroblastoma is included within the myofibroblastoma spectrum because of overlapping clinicopathological, immunohistochemical, and molecular features.",
    ],
    differential: [
      "Cellular angiofibroma: has numerous small-to-medium thick-walled vessels and typically lacks the diffuse desmin expression characteristic of many myofibroblastomas.",
      "Spindle cell / pleomorphic lipoma: shares RB1-pathway biology and may contain ropey collagen and adipocytes; correlate with the overall architecture and site.",
      "Angiomyofibroblastoma: has alternating cellularity and conspicuous vessels with perivascular clustering of tumour cells.",
    ],
    pitfall:
      "Degenerative atypia, occasional infiltrative margins, or a cellular/storiform pattern do not by themselves establish malignancy. The overall circumscribed architecture, bland cytology, hyalinized collagen, and supportive desmin/CD34/RB1 profile are important.",
  },
  {
    name: "Cellular Angiofibroma",
    category: "Benign fibroblastic neoplasm · richly vascularized",
    histology: [
      "Usually a well-circumscribed superficial soft-tissue nodule, composed of moderately to highly cellular, uniform short spindle cells in edematous to fibrous stroma.",
      "Numerous small-to-medium-sized thick-walled vessels are a defining feature. Vascular lumina may be rounded, irregularly ectatic, or branching.",
      "Spindle cells are randomly distributed, occasionally in fascicles or with nuclear palisading. They have short oval-to-fusiform nuclei, inconspicuous nucleoli, and scant pale eosinophilic cytoplasm.",
      "Stroma contains wispy collagen, sometimes with short, delicate, densely eosinophilic collagen bundles; edema, hyalinization, or myxoid change may be present. Mast cells and perivascular lymphoid aggregates are common; adipocytes occur in nearly half of cases.",
      "Mitoses are generally sparse but may be more frequent. Degenerative nuclear enlargement/hyperchromasia, intravascular thrombi, and cystic change may occur.",
      "Rare cases show sarcomatous transformation, sometimes as an abrupt sarcomatous nodule with lipoblast-like, pleomorphic, or hyperchromatic spindle cells.",
    ],
    ihc: [
      "CD34 is positive in approximately 30–60% of tumours.",
      "SMA and desmin are variably expressed, each in approximately 10–20% of cases.",
      "ER and PR are expressed in many cases.",
      "RB1 loss is frequent and can support the diagnosis in a suitable morphologic context.",
    ],
    molecular: [
      "Partial or complete losses of chromosome 13 (including RB1) and/or chromosome 16 have been described, supporting a pathogenetic relationship with myofibroblastoma, spindle cell / pleomorphic lipoma, and vulvovaginal fibroepithelial stromal polyp.",
      "Detection of RB1 loss may be helpful in diagnostically challenging cases.",
    ],
    differential: [
      "Angiomyofibroblastoma: often shows alternating hypo- and hypercellular areas, thin-walled vessels, and tumour cells clustered around vessels; desmin is usually positive.",
      "Myofibroblastoma: more characteristically shows short intersecting fascicles and broad hyalinized collagen bands, with frequent diffuse desmin/CD34 coexpression.",
      "Deep (aggressive) angiomyxoma: is typically much more hypocellular and myxoid, with infiltrative entrapment of adjacent tissues.",
    ],
    pitfall:
      "Do not overcall malignancy solely because of increased mitoses or focal degenerative atypia. Sarcomatous transformation is rare; evaluate for a discrete morphologically sarcomatous component. Reported transformed cases have recurred but have not shown metastasis in the cited experience.",
  },
  {
    name: "Angiomyofibroblastoma",
    category: "Benign, superficial, well-circumscribed stromal tumour",
    histology: [
      "Usually a well-demarcated, unencapsulated superficial tumour, most often vulvar and generally smaller than 5 cm.",
      "Alternating hypocellular and hypercellular areas are characteristic, with prominent small-to-medium-sized thin-walled vessels; thick-walled, often hyalinized vessels may also be present.",
      "The stroma ranges from myxedematous to fibrous, including fine fibrils or sclerotic plaques. Bland spindle, ovoid, and epithelioid cells occur singly or in small nests and cords and tend to cluster around vessels.",
      "Binucleated and multinucleated cells may be present. Mitoses are rare or absent. Mast cells and lymphocytes may be sparse; mature adipocytes can be focal or, rarely, nearly diffuse (lipomatous angiomyofibroblastoma).",
    ],
    ihc: [
      "Most cases show desmin positivity. Desmin may be reduced or absent in postmenopausal patients.",
      "SMA and pan-muscle actin are variably expressed.",
      "Tumour cells are consistently positive for ER and PR; CD34 is occasionally positive.",
    ],
    molecular: [
      "Most angiomyofibroblastomas harbour recurrent MTG1::CYP2E1 fusion transcripts. Detection of this fusion can support the diagnosis.",
    ],
    differential: [
      "Cellular angiofibroma: has more uniformly distributed spindle cells and numerous thick-walled vessels; CD34 is more often positive, while desmin is less consistently expressed.",
      "Deep (aggressive) angiomyxoma: is poorly circumscribed, deeply situated, paucicellular, and infiltrative, with entrapment of muscle, nerve, and fat.",
      "Myofibroblastoma: shows short intersecting fascicles and prominent hyalinized collagen bands, often with CD34/desmin coexpression and RB1 loss.",
    ],
    pitfall:
      "Perivascular clustering of bland tumour cells in alternating cellularity is a key architectural clue. Do not confuse the usually small, circumscribed angiomyofibroblastoma with deep (aggressive) angiomyxoma, in which infiltrative growth is the defining concern.",
  },
  {
    name: "Cutaneous Myxoma (Superficial Angiomyxoma)",
    category: "Benign superficial myxoid tumour · may be syndromic",
    histology: [
      "A superficial dermal or subcutaneous lesion, usually polypoid or exophytic, composed of multinodular, relatively circumscribed lobules of myxoid stroma.",
      "Lobules contain sparse bland spindle-shaped and stellate cells with delicate cytoplasmic processes and thin-walled, sometimes arborizing vessels. Not every tumour has prominent vascularity, which is why cutaneous myxoma is the preferred term.",
      "Tumour cells have ovoid-to-round nuclei and may show nuclear inclusions; cytological atypia and mitotic activity are usually absent.",
      "A neutrophilic stromal infiltrate is often present. Entrapment of epithelial structures, especially hair follicles, may occur; follicular induction is less common.",
    ],
    ihc: [
      "The source does not specify a characteristic diagnostic immunohistochemical profile for this entity. Morphology and superficial anatomic limitation are central.",
    ],
    molecular: [
      "Multifocal cutaneous myxomas may be associated with Carney complex, an autosomal dominant syndrome commonly related to PRKAR1A (17q24) alterations.",
      "PRKAR1A mutations can be detected in cases associated with Carney complex.",
    ],
    differential: [
      "Deep (aggressive) angiomyxoma: arises in deep soft tissue, is poorly marginated and infiltrative, and entraps muscle, nerve, and adipose tissue; it commonly expresses desmin and nuclear HMGA2.",
      "Angiomyofibroblastoma: has a more cellular perivascular pattern, alternating cellularity, and usually desmin/ER/PR expression.",
      "Other superficial myxoid lesions: assess depth, circumscription, lobular architecture, vascular pattern, and stromal inflammatory cells.",
    ],
    pitfall:
      "The lesion should be confined to dermis and/or superficial subcutis and show non-infiltrative lobular growth. If multiple cutaneous myxomas are present, consider Carney complex rather than treating the lesions as unrelated sporadic nodules.",
  },
  {
    name: "Deep (Aggressive) Angiomyxoma",
    category: "Locally infiltrative benign myxoid neoplasm · recurrence-prone",
    histology: [
      "A deep, poorly or vaguely circumscribed, unencapsulated tumour composed of uniformly paucicellular bland oval, spindle, and stellate cells in abundant loose myxomatous stroma with delicate collagen fibrils.",
      "Nuclear atypia and mitotic activity are typically absent. Despite bland cytology, infiltrative growth is frequent, with entrapment of skeletal muscle, nerve, and adipose tissue.",
      "The vascular component includes capillary-like vessels and medium-sized vessels, some with thick muscular walls or hyalinization.",
      "Perivascular cuffs of delicate fibrillary collagen and small bundles of smooth muscle, sometimes arranged around vessels, are common. Recurrent lesions may show more fibro-sclerotic stroma and conspicuous vascularity with perivascular hyalinization.",
      "Grossly, the tumour is often larger than appreciated clinically, with a glistening gelatinous to fibrogelatinous cut surface; hemorrhage, vascular congestion, or fibrosis may occur.",
    ],
    ihc: [
      "Desmin is often positive.",
      "SMA, ER, PR, and CD34 are variably positive.",
      "Nuclear HMGA2 immunoreactivity is present in most cases and is a useful supportive marker; it should be interpreted with the characteristic deep infiltrative morphology.",
    ],
    molecular: [
      "HMGA2 locus rearrangements at 12q14.3 have been identified in approximately one third of tumours. Rearrangements may have diverse partners; molecular testing is not described as routinely required for diagnosis.",
    ],
    differential: [
      "Angiomyofibroblastoma: usually small, superficial, circumscribed, and alternating in cellularity, with perivascular clustering of tumour cells.",
      "Cutaneous myxoma: superficial dermal/subcutaneous, lobulated and non-infiltrative, often with stromal neutrophils.",
      "Cellular angiofibroma: more cellular, circumscribed, and characterized by numerous thick-walled vessels.",
      "Myofibroblastoma: typically circumscribed, with short fascicles and broad hyalinized collagen bands.",
    ],
    pitfall:
      "The tumour is cytologically bland but not biologically innocuous: local recurrence may occur in 30–40% of cases, sometimes decades after excision, particularly after incomplete removal. Its deep infiltrative extent can exceed the clinical impression.",
  },
];

const comparisonRows = [
  [
    "Prepubertal fibroma",
    "Diffuse, hypocellular, patternless bland spindle cells; collagenous/edematous stroma",
    "CD34 usually positive; ER/PR commonly positive; SMA/desmin/S100 negative",
    "Poorly defined enlargement; local recurrence especially after incomplete excision",
  ],
  [
    "Myofibroblastoma",
    "Short intersecting fascicles, broad hyalinized collagen bands; variable fat",
    "Desmin + CD34 often diffuse; RB1 loss frequent",
    "Usually circumscribed; recurrence rare",
  ],
  [
    "Cellular angiofibroma",
    "Cellular bland spindle cells; numerous thick-walled vessels",
    "CD34 variable; ER/PR often positive; RB1 loss frequent",
    "Usually circumscribed; rare sarcomatous transformation",
  ],
  [
    "Angiomyofibroblastoma",
    "Alternating cellularity; thin-walled vessels; perivascular clustering",
    "Desmin, ER, PR usually positive; MTG1::CYP2E1 fusion in most",
    "Superficial and well-circumscribed; benign",
  ],
  [
    "Cutaneous myxoma",
    "Superficial lobules of myxoid stroma, bland stellate cells, thin-walled vessels, neutrophils",
    "No defining IHC profile specified",
    "Non-infiltrative; consider Carney complex if multifocal",
  ],
  [
    "Deep (aggressive) angiomyxoma",
    "Deep, paucicellular myxoid tumour; infiltrates and entraps adjacent tissue",
    "Desmin often +; HMGA2 nuclear + in most; ER/PR/SMA/CD34 variable",
    "Locally infiltrative; recurrence up to 30–40%",
  ],
];

const practicalPoints = [
  [
    "Circumscription and depth",
    "First establish whether the lesion is superficial/circumscribed or deep/infiltrative. Deep angiomyxoma is defined by infiltrative growth despite bland cytology.",
  ],
  [
    "Vascular pattern",
    "Numerous thick-walled vessels favor cellular angiofibroma; prominent thin-walled vessels with perivascular tumour-cell clustering favor angiomyofibroblastoma.",
  ],
  [
    "Collagen pattern",
    "Broad hyalinized collagen bands with short fascicles support myofibroblastoma; delicate collagen in a hypocellular, patternless proliferation supports prepubertal fibroma.",
  ],
  [
    "RB1 family",
    "RB1 loss can be seen in myofibroblastoma and cellular angiofibroma and is not specific in isolation.",
  ],
  [
    "Myxoid lesions",
    "Superficial lobulated myxoma with neutrophils is distinct from deep infiltrative angiomyxoma with tissue entrapment and frequent desmin/HMGA2 expression.",
  ],
];

export default function VulvarMesenchymalTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="relative mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-11 dark:border-slate-800 dark:bg-slate-900">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-rose-100 blur-3xl dark:bg-rose-950"
          />
          <div className="relative max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-rose-700 dark:text-rose-300">
              PathologyGPS · Female Genital Tract · Vulva
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Mesenchymal Tumors
            </h1>
          </div>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              First question
            </p>
            <h2 className="mt-2 text-lg font-semibold">Where is the lesion?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Separate superficial, circumscribed tumors from deep infiltrative
              lesions. This distinction is especially important for
              angiomyofibroblastoma versus deep angiomyxoma.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Architecture
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Read the vessels and stroma
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Thick-walled vessels, perivascular cellularity, hyalinized
              collagen bands, and myxoid lobules provide high-value pattern
              clues.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              IHC safeguard
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Use panels, not single markers
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              CD34, desmin, SMA, ER/PR, RB1, and HMGA2 are supportive in
              context; none should replace assessment of growth pattern.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold tracking-tight">
            Practical Diagnostic Approach
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  {["Feature", "Diagnostic use"].map((x) => (
                    <th key={x} className="px-4 py-3 font-semibold">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {practicalPoints.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <td className="px-4 py-3 font-semibold">{row[0]}</td>
                    <td className="px-4 py-3 leading-6 text-slate-700 dark:text-slate-300">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="px-5 py-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Side-by-Side Comparison
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              A quick comparison of the six entities covered in this reference
              section.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  {[
                    "Entity",
                    "Key morphology",
                    "IHC / molecular clues",
                    "Behavior",
                  ].map((x) => (
                    <th key={x} className="px-4 py-3 font-semibold">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row[0]}
                    className="border-t border-slate-200 align-top dark:border-slate-700"
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`px-4 py-3 leading-6 ${i === 0 ? "font-semibold" : "text-slate-700 dark:text-slate-300"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold tracking-tight">
              Tumor Profiles
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Each profile prioritizes histologic architecture, then summarizes
              the IHC and molecular findings described for that entity.
            </p>
          </div>
          <div className="space-y-5">
            {profiles.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {p.category}
                  </p>
                </div>
                <div className="grid gap-5 p-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-rose-700 dark:text-rose-300">
                      Histology Description
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {p.histology.map((x) => (
                        <li
                          key={x}
                          className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-sky-50 p-4 dark:bg-sky-950/35">
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-sky-800 dark:text-sky-200">
                        Immunohistochemistry
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {p.ihc.map((x) => (
                          <li
                            key={x}
                            className="text-sm leading-6 text-slate-700 dark:text-slate-300"
                          >
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/30">
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-violet-800 dark:text-violet-200">
                        Molecular Pathology
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {p.molecular.map((x) => (
                          <li
                            key={x}
                            className="text-sm leading-6 text-slate-700 dark:text-slate-300"
                          >
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                        Differential Diagnosis
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {p.differential.map((x) => (
                          <li
                            key={x}
                            className="text-sm leading-6 text-slate-700 dark:text-slate-300"
                          >
                            • {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
                      <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-200">
                        Diagnostic Pitfall
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        {p.pitfall}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Educational reference. This page covers the vulvar mesenchymal
          entities represented in the supplied reference section; it is not an
          exhaustive catalogue of all mesenchymal tumors of the female genital
          tract. Interpret immunohistochemical and molecular findings in
          conjunction with morphology, anatomic depth, clinical context, and
          validated laboratory assays. Where the source did not specify a
          defining IHC profile, this page states that limitation rather than
          supplying an unsupported panel.
        </footer>
      </div>
    </main>
  );
}
