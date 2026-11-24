type Profile = {
  name: string;
  category: string;
  histology: string[];
  ihc: string[];
  differential: string[];
  pitfall?: string;
};

const profiles: Profile[] = [
  {
    name: "Squamous Intraepithelial Lesions (SIL): Condyloma and LSIL",
    category: "HPV-associated, non-invasive squamous lesions",
    histology: [
      "Condyloma acuminatum: acanthotic squamous epithelium with prominent papillomatous, verrucous, lobulated, or filiform architecture. Koilocytosis is variable and is often most evident in the valleys between papillae.",
      "Koilocytes show rigid perinuclear halos, eccentric nuclei, enlarged hyperchromatic nuclei with irregular raisinoid contours, coarse chromatin, and sometimes binucleation.",
      "Flat vulvar LSIL is uncommon. Squamous maturation is preserved, with viral cytopathic changes in the middle and superficial epithelial layers; mitoses remain in the lower third.",
      "A subset of condylomata and, less often, flat LSIL may resemble seborrhoeic keratosis.",
      "Condyloma is commonly associated with low-risk HPV 6 or 11; LSIL may contain low-risk or high-risk HPV.",
    ],
    ihc: [
      "p16 is usually patchy/non-block in LSIL and condyloma; rare high-risk HPV-associated LSIL may show block staining.",
      "Ki-67 is increased mainly in the lower epithelium, but may extend into the upper third in LSIL.",
      "HPV DNA or RNA in situ hybridization or PCR can detect HPV when needed.",
    ],
    differential: [
      "HSIL: basal atypia, loss of maturation, suprabasal mitoses, and block-type p16.",
      "HPV-independent VIN: evaluate p16 and p53 patterns; morphology alone is not sufficiently reliable for classification.",
      "Seborrhoeic keratosis-like lesion: interpret in the context of age, morphology, and HPV testing when relevant.",
    ],
    pitfall:
      "Do not diagnose flat vulvar LSIL from koilocyte-like change alone. The source emphasizes strict criteria because flat LSIL is uncommon at this site.",
  },
  {
    name: "High-Grade Squamous Intraepithelial Lesion (HSIL)",
    category: "HPV-associated precursor",
    histology: [
      "Loss of squamous maturation with atypia beginning in at least the basal third and extending variably toward the surface.",
      "Atypia includes disorganization, nuclear enlargement and hyperchromasia, increased nuclear-to-cytoplasmic ratio, and mitotic activity.",
      "HSIL-2 retains some maturation; atypical basaloid cells and mitoses extend into the lower two thirds. HSIL-3 shows subtotal or full-thickness loss of maturation.",
      "Warty/condylomatous HSIL may show florid exophytic growth, papillomatosis, partial superficial maturation, koilocytosis, and multinucleation.",
      "Extension into skin appendages is common and may mimic invasion. Stromal melanophages are frequent; dermal amyloid or mucinous areas may occur.",
    ],
    ihc: [
      "p16: continuous, strong nuclear and cytoplasmic block-type staining, typically involving at least the basal third.",
      "p53: wild-type pattern. This may be heterogeneous or show basal-sparing suprabasal staining; the basal-sparing pattern is highly specific for HPV-associated lesions.",
      "Ki-67 shows increased proliferation extending above the basal compartment.",
      "Validated HPV DNA/RNA testing can be used when required.",
    ],
    differential: [
      "HPV-I VIN, p53abn: often keratinizing with basal atypia and aberrant p53; an HSIL-like/basaloid pattern can overlap.",
      "HPV-I VIN, p53wt: may be verruciform and acanthotic but has non-block p16 and wild-type p53.",
      "Invasion: irregular detached nests, loss of polarity, eosinophilic cytoplasm, and desmoplastic stroma support stromal invasion.",
    ],
    pitfall:
      "Appendageal extension by HSIL is common and should not be mistaken for stromal invasion. Assess the epithelial-stromal interface.",
  },
  {
    name: "Vulvar Intraepithelial Neoplasia, HPV-independent (HPV-I VIN)",
    category: "HPV-independent precursor; p53abn or p53wt",
    histology: [
      "p53-aberrant/differentiated pattern: keratinizing epithelium with retained but abnormal maturation, conspicuous basal pleomorphism, basal cell disarray, and premature maturation with abortive keratin pearls or dyskeratosis.",
      "Additional findings may include irregular elongated/anastomosing rete ridges, hyperkeratosis, confluent parakeratosis, prominent desmosomes, and acantholysis.",
      "An uncommon HSIL-like/basaloid p53abn pattern shows loss of maturation, expanded basal cells, nuclear disorganization, pleomorphism, hyperchromasia, and basal/suprabasal mitoses.",
      "p53-wildtype VIN most often shows verruciform acanthotic growth, marked acanthosis (often more than 10 cell layers), elongated rete ridges, parakeratosis, hypogranulosis, and superficial cytoplasmic pallor, with minimal cytologic atypia.",
      "Clinical correlation with chronic inflammatory dermatosis, especially lichen sclerosus, is important.",
    ],
    ihc: [
      "p16: negative or heterogeneous/mosaic non-block staining.",
      "p53-aberrant patterns include basal or diffuse strong overexpression, complete null staining, or aberrant cytoplasmic staining.",
      "p53 wild-type pattern shows variable-intensity nuclear staining in basal and suprabasal cells. Basal-sparing wild-type p53 instead supports HPV-associated disease.",
      "Basal-only p53 overexpression can occur in inflammatory dermatoses and should not automatically be called mutation-type.",
      "TP53 sequencing may help when p53 staining is indeterminate.",
    ],
    differential: [
      "HSIL: usually block p16-positive with wild-type p53; basal-sparing p53 can be a useful clue to HPV association.",
      "Reactive/inflammatory atypia: correlate with dermatosis and avoid overinterpreting basal-only p53 overexpression.",
      "Vulvar aberrant maturation: suspicious but insufficiently specific lesions may be described descriptively rather than classified definitively as VIN.",
    ],
    pitfall:
      "Morphology alone is unreliable. The source recommends p16 and p53 at initial diagnosis to establish HPV status and classify HPV-I VIN.",
  },
  {
    name: "Squamous Cell Carcinoma (SCC), HPV-associated",
    category: "Invasive HPV-associated squamous carcinoma",
    histology: [
      "Infiltrating islands or nests of malignant squamous cells, sometimes with extensive complex exophytic expansile growth.",
      "Basaloid tumors contain cohesive nests of immature basal-type cells resembling HSIL. Warty/condylomatous tumors show conspicuous superficial atypia and koilocyte-like changes; mixed patterns occur.",
      "Approximately one third may be keratinizing; morphology overlaps substantially with HPV-independent SCC and cannot reliably establish HPV status.",
      "Invasion is supported by irregular nests, nests disconnected from the surface, loss of polarity, eosinophilic cytoplasm in invading cells, and desmoplasia.",
    ],
    ihc: [
      "p16: strong, diffuse, continuous block-type nuclear and cytoplasmic staining.",
      "p53: usually wild-type pattern.",
      "Confirm HPV with validated p16 surrogate testing and/or HPV molecular testing when appropriate.",
    ],
    differential: [
      "HPV-I SCC: often keratinizing, but H&E overlap is substantial; use p16 and p53 rather than morphology alone.",
      "HSIL: no stromal invasion; appendageal extension can mimic invasion.",
      "Basaloid BCC: diffuse BerEP4 and BCL2 support BCC; p16 is usually not block-type.",
    ],
    pitfall:
      "Do not assign HPV association from basaloid, warty, or keratinizing morphology alone. Block p16 is a key surrogate.",
  },
  {
    name: "Squamous Cell Carcinoma (SCC), HPV-independent",
    category: "Invasive HPV-independent squamous carcinoma; p53abn or p53wt",
    histology: [
      "Typically keratinizing and infiltrative, with small tumor nests and frequent keratin pearls.",
      "Single-cell budding or a spray-like pattern at the invasive front, often with marked desmoplasia, is associated with aggressive behavior.",
      "Other patterns include non-keratinizing, basaloid, warty, acantholytic/pseudoglandular, and spindle-cell/pseudosarcomatous areas.",
      "Verrucous carcinoma shows broad bulbous pushing invasion, minimal atypia, and abundant eosinophilic cytoplasm; p53 is usually wild type with scattered positive cells.",
      "Adjacent precursor lesions may include dVIN in p53abn tumors or vaVIN in p53wt tumors; lichen sclerosus or lichen planus may coexist.",
    ],
    ihc: [
      "p16: usually negative or non-block; p16 is the first-line surrogate to assess HPV association.",
      "p53: use a vulvar-specific pattern-based interpretation. Wild-type patterns include variable scattered basal cells and/or mid-epithelial staining with basal sparing.",
      "Mutation-type patterns include basal overexpression, diffuse overexpression, null/complete absence, and cytoplasmic staining.",
      "If p16/p53 are indeterminate, consider high-risk HPV molecular testing and/or TP53 sequencing.",
    ],
    differential: [
      "HPV-associated SCC: block p16 and usually wild-type p53; basal-sparing p53 may support HPV association even if p16 is negative.",
      "Verrucous carcinoma: broad pushing fronts, minimal atypia, and wild-type p53 pattern.",
      "Reactive/inflammatory dermatosis: avoid interpreting isolated basal p53 overexpression as mutation-type without appropriate context.",
    ],
    pitfall:
      "A p16-negative tumor is not automatically HPV-independent in every circumstance. Rare HPV-associated tumors may be p16-negative; correlate with p53 pattern and molecular HPV testing when needed.",
  },
  {
    name: "Mixed Tumor (Vulvar Pleomorphic Adenoma)",
    category: "Benign sweat gland-type tumor",
    histology: [
      "Well-circumscribed neoplasm with a mixture of epithelial, myoepithelial, and stromal components.",
      "Apocrine-mixed tumors show branching tubular structures, often with decapitation secretion, embedded in chondromyxoid, cartilaginous, or osseous stroma.",
      "Follicular or sebaceous differentiation may occur. Prominent myoepithelial differentiation can produce hyaline cell-rich areas.",
      "Eccrine-mixed tumors lack decapitation secretion and follicular/sebaceous differentiation; they show simple monolayered tubules, small nests, strands, cords, or single cells in myxohyaline/cartilaginous stroma.",
    ],
    ihc: [
      "A broad panel can demonstrate multiple populations: SOX10, p63, S100, calponin, SMA, EMA, KIT, CEA, and cytokeratins.",
      "PLAG1 is overexpressed in most apocrine-pattern tumors; rare cases show HMGA2 expression.",
      "TRPS1 immunoreactivity has also been reported.",
      "The source notes SOX10 internal tandem duplications in the eccrine pattern; PLAG1 rearrangement is generally associated with apocrine-pattern tumors.",
    ],
    differential: [
      "Other vulvar adnexal tumors: this chapter's classification does not comprehensively cover adnexal tumors outside the listed entities.",
      "Myoepithelial-rich lesions: use the combination of ductal, myoepithelial, and characteristic chondromyxoid stromal components.",
    ],
    pitfall:
      "The vulvar location is rare. Diagnose from the combined epithelial–myoepithelial–stromal pattern rather than a single positive marker.",
  },
  {
    name: "Fibroadenoma of Anogenital Mammary-like Glands",
    category: "Benign biphasic mammary-type neoplasm",
    histology: [
      "Well-circumscribed biphasic lesion composed of bland glandular epithelium and relatively uniform hypocellular spindle/stellate stroma without atypia.",
      "Stromal mitotic activity is rare or absent. Variants include columnar cell, oxyphilic, cystic, lactational, usual ductal hyperplasia, pseudoangiomatous stromal hyperplasia, and multinucleate stromal giant-cell changes.",
      "Pericanalicular pattern: round or oval glandular lumina remain open. Intracanalicular pattern: abundant stroma compresses ducts into slit-like spaces.",
    ],
    ihc: [
      "A three-layer glandular pattern has been described: luminal cells positive for CK14/CK5/6; an intermediate luminal layer positive for ER/PR and focally AR but negative for CK14/CK5/6; and an outer myoepithelial layer positive for CK14/CK5/6 but negative for ER/PR/AR.",
      "GATA3 labels all three glandular layers.",
      "Stromal cells, including PASH-like areas, may express ER/PR, vimentin, and CD34; actin staining is variable.",
    ],
    differential: [
      "Phyllodes tumor: leaf-like stromal fronds, stromal hypercellularity, periglandular cuffing, and increased mitoses favor phyllodes tumor.",
      "Mammary-type adenocarcinoma: invasive epithelial growth and cytologic malignancy exclude fibroadenoma.",
    ],
    pitfall:
      "Do not confuse the slit-like intracanalicular pattern of fibroadenoma with phyllodes tumor; assess stromal cellularity, leaf-like architecture, and periglandular condensation.",
  },
  {
    name: "Phyllodes Tumor",
    category: "Biphasic mammary-type neoplasm",
    histology: [
      "Biphasic lesion with bland mammary-type glandular epithelium and prominent leaf-like stromal fronds projecting into glandular lumina.",
      "Regional variability in stromal cellularity is typical, with band-like hypercellular areas and increased mitotic activity around epithelial structures (periglandular cuffing).",
      "Classify as benign, borderline, or malignant using criteria analogous to those applied in the breast; the stromal component is the neoplastic component.",
    ],
    ihc: [
      "The source does not specify a diagnostic IHC panel for vulvar phyllodes tumor.",
      "The epithelial component is mammary-like; IHC is not presented as the primary discriminator in this source.",
    ],
    differential: [
      "Fibroadenoma: more uniform hypocellular stroma, without prominent leaf-like fronds or periglandular stromal hypercellularity.",
      "Primary mammary-type adenocarcinoma: malignant epithelial rather than stromal proliferation.",
    ],
    pitfall:
      "The source notes limited case numbers and that criteria predicting malignant behavior are not well established specifically for vulvar phyllodes tumors.",
  },
  {
    name: "Adenocarcinoma of Mammary Gland Type",
    category: "Primary invasive mammary-type adenocarcinoma",
    histology: [
      "Usually morphologically identical to invasive breast carcinoma of no special type; in situ component and adjacent anogenital mammary-like glands are only uncommonly identified.",
      "Rare patterns include lobular, tubulolobular, mixed ductal/lobular, secretory, mucinous, and adenoid cystic-like carcinomas.",
      "The lesion must be dermally centered, with absent or only focal overlying epidermal involvement. Extensive epidermal involvement instead favors invasive Paget disease.",
      "An associated in situ component or proximity to anogenital mammary-like glands is supportive but not required.",
    ],
    ihc: [
      "Use breast carcinoma biomarkers: ER, PR, HER2/ERBB2, and other markers guided by morphology and differential diagnosis.",
      "Reported profiles align with analogous breast carcinomas, including ER, PR, HER2, EGFR, and CK5 expression.",
      "Secretory carcinoma is associated with ETV6::NTRK3 fusion.",
    ],
    differential: [
      "Invasive Paget disease: extensive epidermal involvement favors Paget disease; mammary-type adenocarcinoma is dermally centered.",
      "Metastatic breast carcinoma: clinical/radiologic exclusion of a breast primary is essential.",
      "Other primary vulvar adenocarcinomas: use morphology, site, and a directed IHC panel.",
    ],
    pitfall:
      "Do not classify a dermally centered mammary-type carcinoma as invasive Paget disease solely because focal epidermal involvement is present.",
  },
  {
    name: "Basal Cell Carcinoma (BCC)",
    category: "Cutaneous-type malignant epithelial tumor",
    histology: [
      "Nests of basaloid tumor cells with hyperchromatic nuclei and scant cytoplasm; peripheral palisading is characteristic at the tumor-stromal interface.",
      "Stromal changes include fibromyxoid alteration, retraction clefts, calcification, keloidal-type collagen, and amyloid deposition. Desmoplasia is not a feature in the source description.",
      "Melanocytes may colonize tumor nests, with melanin pigment. Keratinizing BCC shows central mature keratinization; nodulocystic BCC shows cystic degeneration.",
    ],
    ihc: [
      "Strong p40/p63, CK5/6, BCL2, BerEP4, and CD10.",
      "Typically negative for EMA, CEA, and CK20.",
      "p16 is usually patchy rather than block-type.",
      "Neuroendocrine markers may be positive and should not be overinterpreted.",
    ],
    differential: [
      "Basaloid SCC: diffuse BerEP4 and lack of block p16 support BCC over basaloid SCC.",
      "Other basaloid adnexal neoplasms: correlate with architecture and site; these are not comprehensively covered in this source.",
    ],
    pitfall:
      "BerEP4 positivity is useful but should be interpreted with the classic palisading/retraction morphology and the p16 pattern.",
  },
  {
    name: "Paget Disease of the Vulva",
    category:
      "Primary intraepithelial adenocarcinoma, with or without invasion",
    histology: [
      "Large round Paget cells with abundant pale cytoplasm, enlarged nuclei, and often prominent nucleoli are present within the epidermis.",
      "Cells are commonly concentrated in basal epidermal layers, with single cells or small groups extending upward. Skin adnexal epithelium is frequently involved.",
      "Intracytoplasmic mucin is demonstrable in most cases by PAS or mucicarmine.",
      "Superficial dermal inflammation and neovascularization are common and correlate with the eczematous clinical appearance.",
      "Invasive disease may show individual cells, small groups, or glandular structures in the dermis.",
    ],
    ihc: [
      "CK7 is consistently positive and helps distinguish Paget cells from HSIL, HPV-I VIN, and melanoma.",
      "EMA, CAM5.2, CEA, and GATA3 are typically diffusely positive.",
      "Melanoma markers are negative. p16 may be diffusely expressed despite the absence of HPV.",
      "Usually negative for uroplakin-3, CDX2, and CK20; diffuse expression should raise secondary involvement by urothelial carcinoma or rectal adenocarcinoma.",
      "ER, PR, AR, and HER2 may be expressed; HER2 is positive in a subset. Breast biomarkers are recommended where available for invasive Paget disease, but are not routinely indicated for completely in situ disease.",
    ],
    differential: [
      "HSIL: p16 block-positive; CK7 is not the characteristic Paget profile.",
      "HPV-independent VIN: squamous morphology and p16/p53 pattern differ; Paget cells are CK7-positive glandular cells.",
      "Melanoma: use melanocytic markers; Paget cells are negative.",
      "Secondary Paget disease: diffuse CK20, CDX2, or uroplakin-3 should prompt evaluation for colorectal or urothelial primary.",
    ],
    pitfall:
      "Distinguish primary vulvar Paget disease from secondary epidermal spread of urothelial or colorectal carcinoma. CK7 alone is not enough; use a panel and clinical correlation.",
  },
];

const comparisonRows = [
  [
    "HSIL",
    "Basal-to-full-thickness atypia; loss of maturation",
    "Block p16; wild-type p53 (may be basal-sparing)",
    "HPV-associated",
  ],
  [
    "HPV-I VIN, p53abn",
    "Basal pleomorphism/disarray; premature maturation; often keratinizing",
    "Non-block p16; mutation-type p53",
    "HPV-independent precursor",
  ],
  [
    "HPV-I VIN, p53wt",
    "Verruciform acanthosis; altered maturation; minimal atypia",
    "Non-block p16; wild-type p53",
    "HPV-independent precursor",
  ],
  [
    "HPV-A SCC",
    "Invasive basaloid/warty or mixed pattern; invasion",
    "Block p16; usually wild-type p53",
    "HPV-associated invasive SCC",
  ],
  [
    "HPV-I SCC",
    "Usually keratinizing, infiltrative; keratin pearls",
    "Non-block p16; p53 pattern classifies subtype",
    "HPV-independent invasive SCC",
  ],
];

const ihcRules = [
  [
    "p16 block-type",
    "Supports HPV-associated SIL/SCC when staining is strong, continuous, nuclear and cytoplasmic.",
  ],
  [
    "p16 patchy/non-block",
    "Typical of LSIL/condyloma and HPV-independent VIN/SCC; interpret with p53 and morphology.",
  ],
  [
    "p53 wild type",
    "Heterogeneous basal/suprabasal staining; basal-sparing suprabasal staining is particularly supportive of HPV-associated lesions.",
  ],
  [
    "p53 mutation-type",
    "Basal or diffuse overexpression, null pattern, or cytoplasmic staining; supports HPV-I p53abn subtype.",
  ],
  [
    "CK7 / GATA3 / CEA",
    "Support Paget disease in the appropriate intraepidermal large-cell morphology.",
  ],
  [
    "BerEP4 / BCL2",
    "Strong expression supports BCC in the setting of basaloid nests and peripheral palisading.",
  ],
  [
    "ER / PR / HER2",
    "Use breast-type biomarker assessment for mammary gland-type adenocarcinoma and, when invasive, Paget disease.",
  ],
];

export default function VulvarEpithelialTumorsPage() {
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
              Epithelial Tumors
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              A morphology-first guide to vulvar epithelial lesions, with
              emphasis on HPV/p53 classification, invasion, and practical
              immunohistochemical separation of mimics.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Histology First",
                "p16 / p53 Algorithm",
                "IHC Differential",
                "Invasion Assessment",
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
              Core classification
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              HPV-associated vs. HPV-independent
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Use p16 and p53 patterns; morphology alone cannot reliably
              classify every precursor or invasive SCC.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              IHC priority
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Interpret staining patterns
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Block vs. non-block p16 and wild-type vs. mutation-type p53 are
              more useful than a simple positive/negative label.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Critical safeguard
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Prove stromal invasion
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Separate appendageal extension by HSIL from true invasion; seek
              irregular nests, loss of polarity, and desmoplasia.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold tracking-tight">
            p16 / p53 Interpretation Guide
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  {["Marker pattern", "Practical interpretation"].map((x) => (
                    <th key={x} className="px-4 py-3 font-semibold">
                      {x}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ihcRules.map((row) => (
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
          <p className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100">
            Important: basal-only p53 overexpression can occur in inflammatory
            dermatoses. Do not call a mutation-type pattern from this finding
            alone. If p53 is indeterminate, TP53 sequencing may be useful.
          </p>
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="px-5 py-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Squamous Neoplasia: Side-by-Side
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              The key diagnostic axis is precursor/invasive status plus HPV and
              p53 phenotype.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  {["Entity", "Histology", "IHC pattern", "Classification"].map(
                    (x) => (
                      <th key={x} className="px-4 py-3 font-semibold">
                        {x}
                      </th>
                    ),
                  )}
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
              Histologic architecture and cytology are described first; IHC is
              presented as a pattern-based tool for resolving the differential.
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
                    {p.pitfall && (
                      <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
                        <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-200">
                          Diagnostic Pitfall
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                          {p.pitfall}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Educational reference. Classification and IHC interpretation should be
          integrated with morphology, clinical context, sampling, and validated
          laboratory assays. The source does not provide a dedicated IHC panel
          for every entity; where not specified, this page identifies that
          limitation rather than inventing one.
        </footer>
      </div>
    </main>
  );
}
