import Link from "next/link";

type Profile = {
  name: string;
  behavior: string;
  histology: string[];
  ihc?: string;
  differential: string[];
  pitfall?: string;
};

const groups: { title: string; intro: string; profiles: Profile[] }[] = [
  {
    title: "Squamous Neoplasms",
    intro:
      "Separate benign squamous papilloma from verrucous carcinoma and conventional invasive squamous cell carcinoma by evaluating the epithelial lining and, critically, the deep interface.",
    profiles: [
      {
        name: "Squamous Papilloma",
        behavior: "Benign",
        histology: [
          "Exophytic papillary projections contain delicate fibrovascular cores covered by mature, keratinizing squamous epithelium.",
          "The squamous lining shows orderly maturation without significant architectural or cytologic atypia.",
          "No destructive stromal invasion is identified.",
        ],
        ihc: "p63 positive; CK7 and CK20 negative. Ki-67 is generally limited to basal cells, and p53 shows a wild-type pattern. HPV is generally not implicated.",
        differential: [
          "Verrucous carcinoma: papilloma lacks a broad, pushing invasive front and tongue-like downward projections.",
          "Conventional squamous cell carcinoma: papilloma lacks infiltrative nests, significant atypia, and destructive invasion.",
        ],
        pitfall:
          "A papillary, keratinizing lesion may appear alarming endoscopically. The diagnosis depends on bland squamous epithelium and absence of invasion.",
      },
      {
        name: "Verrucous Carcinoma of the Bladder",
        behavior: "Malignant, locally invasive; usually indolent",
        histology: [
          "Exophytic, warty architecture with large, hyperkeratotic papillae and prominent acanthosis.",
          "The squamous epithelium is well differentiated, with minimal cytologic atypia; mitoses are rare.",
          "The deep interface is broad and pushing, with rounded, bulbous or tongue-like downward projections into the underlying stroma.",
          "The pushing invasive front contrasts with the small, irregular infiltrative nests and paradoxical maturation of conventional squamous cell carcinoma.",
        ],
        ihc: "IHC is not diagnostic. Focal EGFR and TGF-α expression and increased p53 staining have been reported.",
        differential: [
          "Squamous papilloma: no broad, pushing invasive front in papilloma.",
          "Conventional squamous cell carcinoma: look for irregular infiltrative nests, marked atypia, and destructive invasion rather than a smooth pushing border.",
        ],
        pitfall:
          "Examine the entire lesion. A conventional invasive squamous cell carcinoma component can coexist and must be excluded before diagnosing pure verrucous carcinoma.",
      },
      {
        name: "Pure Squamous Cell Carcinoma of the Urothelial Tract",
        behavior: "Malignant",
        histology: [
          "Invasive carcinoma forms rounded to irregular nests; poorly differentiated tumors may grow as cords or single cells.",
          "Well-differentiated areas show abundant eosinophilic cytoplasm, keratinization, and intercellular bridges.",
          "Poorly differentiated areas show marked nuclear atypia and may lack obvious keratinization.",
          "Grading is based on differentiation/keratinization and nuclear pleomorphism; no universally accepted grading system is established.",
          "Schistosoma-associated tumors may show eggs (sometimes calcified), dense chronic inflammation, foreign body-type giant cells, lymphoplasmacytic inflammation, and numerous eosinophils.",
        ],
        ihc: "IHC is of limited value. Reported positive markers include CK5, CK6, CK14, desmocollin-2, desmoglein-3, and MAC387. GATA3, FOXA1, uroplakin-2, and uroplakin-3 are typically negative.",
        differential: [
          "Urothelial carcinoma with squamous differentiation: pure squamous carcinoma requires an exclusively squamous phenotype; search for a conventional urothelial component.",
          "Metastatic squamous cell carcinoma: exclude a primary tumor elsewhere.",
          "Verrucous carcinoma: conventional SCC shows irregular infiltrative nests and greater cytologic atypia.",
        ],
        pitfall:
          "Do not use p16 as a surrogate for HPV in bladder squamous carcinoma. Urine cytology cannot reliably distinguish pure squamous carcinoma from urothelial carcinoma with squamous differentiation.",
      },
    ],
  },
  {
    title: "Glandular Neoplasms",
    intro:
      "The central questions are whether the lesion is benign or invasive, whether it is a primary urinary tract tumor, and which glandular phenotype is present.",
    profiles: [
      {
        name: "Villous Adenoma",
        behavior: "Benign; may coexist with or be associated with carcinoma",
        histology: [
          "Villoglandular fronds are lined by pseudostratified columnar epithelium resembling colorectal villous adenoma; tubular and tubulovillous patterns may also occur.",
          "Most show low-grade dysplasia. High-grade dysplasia, adenocarcinoma in situ, and invasive adenocarcinoma may be present.",
          "Adjacent urothelium may show cystitis glandularis, intestinal metaplasia, or squamous metaplasia.",
          "The entire lesion must be examined to exclude invasion and an associated malignant component.",
        ],
        ihc: "An enteric phenotype is common, with CK20 and CDX2 positivity. GATA3, PSA, and PAP are typically negative; P501S and PSMA may be expressed.",
        differential: [
          "Primary enteric-type adenocarcinoma: look for destructive invasion, desmoplastic stroma, high-grade areas, necrosis, or malignant glands.",
          "Urothelial carcinoma with glandular differentiation: identify any conventional urothelial carcinoma component.",
          "Metastatic colorectal adenocarcinoma: correlate clinically and radiologically.",
        ],
        pitfall:
          "Do not diagnose a pure villous adenoma from a limited biopsy if the lesion is not adequately sampled. The source material reports invasive adenocarcinoma in a subset of cases.",
      },
      {
        name: "Urinary Tract Adenocarcinoma, NOS and Subtypes",
        behavior: "Malignant",
        histology: [
          "Enteric type: intestinal-type glands lined by pseudostratified columnar cells with nuclear atypia; villoglandular structures, mucin-filled microcysts, intracellular or extracellular mucin, and frequent necrosis may be present.",
          "Mucinous type: abundant extracellular mucin, usually comprising more than 50% of tumor volume, dissects the stroma; tumor cells occur singly or in small clusters floating in mucin pools.",
          "Signet-ring cell type: diffusely infiltrative cells contain prominent intracytoplasmic mucin vacuoles that displace nuclei to the periphery; linitis plastica-like growth may occur.",
          "NOS: malignant glandular growth that does not fit a specific subtype. Tumors with more than one pattern are classified as mixed.",
          "Adenocarcinoma in situ may be flat, papillary, glandular, or cribriform, with prominent atypia and frequent mitoses.",
        ],
        ihc: "Usually CK7, CK20, villin, and CDX2 positive. GATA3 may be positive in a subset, particularly signet-ring cell tumors. Nuclear β-catenin is less frequent in primary bladder adenocarcinoma than in colorectal metastases.",
        differential: [
          "Metastatic colorectal adenocarcinoma: a critical exclusion because it is more common; use clinical/radiologic correlation and a focused panel.",
          "Urothelial carcinoma with glandular differentiation: search for conventional urothelial carcinoma or CIS.",
          "Urachal adenocarcinoma: assess tumor epicenter, relationship to the bladder dome/anterior wall, and urachal remnants.",
        ],
        pitfall:
          "A glandular phenotype alone does not establish a primary urinary tract origin. Exclude direct extension or metastasis from colorectal, prostatic, and gynecologic sites.",
      },
      {
        name: "Urachal Carcinoma",
        behavior: "Malignant; diagnosis of exclusion",
        histology: [
          "Most are adenocarcinomas. Enteric tumors resemble colorectal adenocarcinoma, with glandular and cribriform architecture, nuclear pseudostratification, and necrosis.",
          "Mucinous tumors show abundant extracellular mucin dissecting the stroma, sometimes with floating tumor cells or small clusters.",
          "Signet-ring cell carcinoma shows permeative stromal growth by cells with intracytoplasmic mucin.",
          "Cystic urachal tumors span a spectrum: benign mucinous cystadenoma has a single layer of bland mucinous columnar epithelium; low malignant potential tumors show mild epithelial proliferation and mild-to-moderate atypia; intraepithelial carcinoma shows marked stratification and unequivocal malignant cytology.",
          "Mucinous cystadenocarcinoma may be microinvasive (stromal invasion less than 2 mm and less than 5% of tumor) or frankly invasive.",
          "Rare non-glandular types include urothelial, squamous, and neuroendocrine carcinomas.",
        ],
        ihc: "Non-cystic urachal adenocarcinomas are usually CDX2 and CK20 positive; about half express CK7. CD15 and CEA are often positive; GATA3 is generally negative. Nuclear β-catenin, AMACR, and PTEN loss are uncommon.",
        differential: [
          "Non-urachal bladder adenocarcinoma: assess for a dome/anterior-wall or midline supravesical epicenter, sharp demarcation from surface urothelium, and urachal remnant association.",
          "Metastatic colorectal adenocarcinoma: exclude a primary elsewhere.",
          "Urothelial carcinoma with glandular differentiation: identify a urothelial component or associated CIS.",
        ],
        pitfall:
          "Urachal carcinoma is a diagnosis of exclusion. Helpful features include a bladder dome/anterior-wall location, a deep tumor epicenter or sharp separation from surface urothelium, and exclusion of another primary site.",
      },
      {
        name: "Diverticular Carcinoma",
        behavior: "Malignant; any urinary tract carcinoma type may occur",
        histology: [
          "Histology resembles the corresponding carcinoma elsewhere in the urinary tract; urothelial carcinoma is the most common type.",
          "Other carcinoma types may be relatively more frequent in diverticula than in the main bladder.",
          "A key anatomic feature is that bladder diverticula lack a true detrusor muscle layer and may instead contain a hypertrophic muscularis mucosae.",
        ],
        differential: [
          "Non-diverticular bladder carcinoma: establish that the tumor arises within or is predominantly located in a diverticulum.",
          "Muscularis propria invasion: do not mistake hypertrophic muscularis mucosae for detrusor muscle.",
        ],
        pitfall:
          "Because the diverticulum lacks detrusor muscle, pT2 cannot be assigned on the basis of invasion into a nonexistent muscularis propria layer. State the anatomic limitation clearly.",
      },
    ],
  },
  {
    title: "Urethral Accessory Gland and Müllerian-Type Tumors",
    intro:
      "These rare tumors require close attention to the anatomic site of origin and a differential-directed immunohistochemical panel.",
    profiles: [
      {
        name: "Littré Gland Adenocarcinoma",
        behavior: "Malignant; extremely rare",
        histology: [
          "Papillary or tubulopapillary adenocarcinoma.",
          "Tumor cells are columnar with abundant cytoplasm and mucinous vacuoles; nuclei are large and oval, without marked pleomorphism.",
          "The urethral surface epithelium should lack neoplastic changes; clinical and radiologic correlation is essential.",
        ],
        ihc: "Limited data; reported CK7 positivity and PSA negativity.",
        differential: [
          "Urothelial carcinoma with extensive glandular differentiation.",
          "Bladder or prostatic adenocarcinoma extending into the urethra.",
          "Metastatic colorectal adenocarcinoma.",
        ],
        pitfall:
          "This is a diagnosis of exclusion. Confirm the relationship to the penile urethral glands and exclude a more common primary elsewhere.",
      },
      {
        name: "Skene Gland Adenocarcinoma",
        behavior: "Malignant; extremely rare",
        histology: [
          "Architecture and cytology closely resemble prostatic acinar adenocarcinoma.",
          "Tumors may show tubular or cribriform growth; cribriform areas may show pseudostratification.",
          "Solid, single-file, and occasionally intestinal-like patterns have also been described.",
          "The diagnosis depends on establishing a urethral accessory gland origin rather than a primary or extension from another site.",
        ],
        ihc: "Usually positive for PSA, PAP, and NKX3-1; AMACR and P501S may also be positive.",
        differential: [
          "Metastatic or directly extending prostatic adenocarcinoma.",
          "Other urethral adenocarcinomas.",
          "Urothelial carcinoma with glandular differentiation.",
        ],
        pitfall:
          "The prostatic immunophenotype is expected and does not by itself prove a prostate primary. Correlate with the tumor's location and clinical/radiologic findings.",
      },
      {
        name: "Cowper Gland Adenocarcinoma",
        behavior: "Malignant; extremely rare",
        histology: [
          "Cribriform, trabecular, and solid patterns are described.",
          "Tumor cells may appear deceptively bland, with dark nuclei forming gland-like spaces; true tubules are uncommon.",
          "Gland-like spaces often contain mucoid material, and perineural invasion is frequent.",
          "Advanced tumors may destroy the gland, making confirmation of the site of origin difficult.",
        ],
        ihc: "CK7 and high-molecular-weight cytokeratin positive. PSA, PAP, CEA, S100, and SMA negative. MYB::NFIB fusion has been reported.",
        differential: [
          "Urothelial carcinoma with extensive glandular differentiation.",
          "Prostatic ductal adenocarcinoma.",
          "Basal cell carcinoma of the prostate.",
        ],
        pitfall:
          "Do not assign Cowper gland origin on morphology alone. Confirm the bulbomembranous periurethral location clinically and radiologically; prostatic markers should be negative.",
      },
      {
        name: "Clear Cell Adenocarcinoma of the Urinary Tract",
        behavior: "Malignant; often clinically aggressive, stage-dependent",
        histology: [
          "Variable combinations of papillary, tubulocystic, and solid growth.",
          "Papillary fibrovascular cores may be hyalinized; myxoid stromal change is common.",
          "Tumor cells may be flat, cuboidal, or hobnail, with clear, glycogen-rich, or eosinophilic cytoplasm.",
          "Cytologic atypia is usually moderate to severe; mitotic activity and necrosis are variable.",
          "Some tumors may be deceptively bland and resemble nephrogenic adenoma.",
        ],
        ihc: "Usually CK7, PAX8, CA125, AMACR, HNF1β, and napsin A positive; CK20 is variable. Typically negative for GATA3, p63, 34βE12, PSA, ER, PR, and WT1.",
        differential: [
          "Nephrogenic adenoma: clear cell adenocarcinoma is favored by significant atypia, mitotic activity, invasive growth (especially muscularis propria involvement), hyperchromasia, and aberrant p53 staining.",
          "Clear cell/glycogen-rich urothelial carcinoma: PAX8 positivity and lack of urothelial markers support clear cell adenocarcinoma.",
          "Metastatic Müllerian clear cell carcinoma: correlate with clinical history and imaging.",
        ],
        pitfall:
          "The overlap with nephrogenic adenoma can be substantial. Do not rely on clear cytoplasm or PAX8 alone; assess invasion, cytologic grade, mitoses, and p53 in context.",
      },
      {
        name: "Endometrioid Carcinoma of the Urinary Tract",
        behavior: "Malignant; exceptionally rare",
        histology: [
          "Glandular and back-to-back architecture resembling endometrioid carcinoma of the uterus.",
          "Glands are lined by large columnar cells with eosinophilic, granular cytoplasm, vesicular nuclei, and prominent nucleoli.",
          "Clear cell change, squamous nests, basaloid differentiation, or hobnail cells may occur.",
          "A key diagnostic clue is the coexistence of malignant endometrioid glands with benign endometriosis, including benign glands and endometrial-type stroma.",
        ],
        ihc: "Typically ER and PR strongly positive; CK7, CAM5.2, and EMA positive. CA125, PAX8, and PAX2 are variable.",
        differential: [
          "Urothelial carcinoma with glandular differentiation: typical urothelial carcinoma and intestinal metaplasia are not expected in endometrioid carcinoma.",
          "Urachal adenocarcinoma: endometrioid carcinoma is not characteristically centered at the bladder dome or anterior wall.",
          "Metastatic endometrioid carcinoma: exclude an extravesical primary.",
        ],
        pitfall:
          "Look for endometriosis/Müllerianosis and a transition to carcinoma. Correlate with gynecologic history and exclude a uterine or other pelvic primary.",
      },
    ],
  },
];

const workflow = [
  "Establish the exact site: bladder, urachus, diverticulum, urethra, or periurethral gland.",
  "Determine the dominant phenotype: squamous, enteric/glandular, mucinous, clear cell, endometrioid, or other.",
  "Assess architecture and cytology, then actively search for stromal invasion, desmoplasia, necrosis, and an in situ component.",
  "For warty squamous lesions, evaluate the entire deep interface and exclude conventional invasive squamous carcinoma.",
  "For glandular tumors, exclude direct extension or metastasis from colorectum, prostate, gynecologic tract, and other adjacent organs.",
  "Use IHC as a differential-directed panel; interpret markers with morphology and anatomic location.",
  "Document the tumor epicenter, relationship to surface urothelium or urachal remnants, and anatomic staging limitations.",
];

const signout = [
  "Specify the precise anatomic site and specimen type.",
  "State histologic type and subtype, if applicable.",
  "Describe the dominant architecture and cytologic features.",
  "Document the presence and extent of invasion.",
  "Report associated in situ disease or metaplastic background when present.",
  "For diverticular tumors, note the absence of a true detrusor muscle layer.",
  "For suspected primary adenocarcinoma, document exclusion of an adjacent or distant primary.",
  "Report lymphovascular invasion, perineural invasion, margins, and stage-relevant findings when applicable.",
];

export default function NonUrothelialNeoplasmsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/urinary-tract"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300"
        >
          <span aria-hidden="true">←</span> Urinary Tract
        </Link>

        <header className="relative mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-11 dark:border-slate-800 dark:bg-slate-900">
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 h-56 w-56 rounded-full bg-violet-100 blur-3xl dark:bg-violet-950"
          />
          <div className="relative max-w-4xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-700 dark:text-violet-300">
              PathologyGPS · Urinary Tract
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Non-Urothelial Neoplasms
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              A morphology-focused guide to squamous, glandular, urachal,
              diverticular, urethral accessory gland, and Müllerian-type
              neoplasms of the urinary tract.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Histologic Diagnosis",
                "Differential Diagnosis",
                "Immunohistochemistry",
                "Tumor Origin",
                "Sign-Out",
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
              First question
            </p>
            <h2 className="mt-2 text-lg font-semibold">Where did it arise?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Anatomic epicenter and relationship to the surface mucosa are
              essential, especially for urachal and accessory gland tumors.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Second question
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              What is the phenotype?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Define squamous, enteric, mucinous, signet-ring, clear cell,
              endometrioid, or other differentiation before selecting ancillary
              studies.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Critical safeguard
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Exclude another primary
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Primary urinary tract adenocarcinoma is uncommon. Exclude
              colorectal, prostatic, gynecologic, and other adjacent primaries.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold tracking-tight">
            Diagnostic Workflow
          </h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {workflow.map((step, i) => (
              <li
                key={step}
                className="flex gap-3 rounded-xl bg-slate-50 p-3 text-sm leading-6 dark:bg-slate-800/70"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <section key={group.title}>
              <div className="mb-5">
                <h2 className="text-2xl font-bold tracking-tight">
                  {group.title}
                </h2>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {group.intro}
                </p>
              </div>
              <div className="space-y-5">
                {group.profiles.map((profile) => (
                  <article
                    key={profile.name}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
                      <h3 className="text-lg font-bold">{profile.name}</h3>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {profile.behavior}
                      </span>
                    </div>
                    <div className="grid gap-5 p-5 lg:grid-cols-[1.35fr_1fr]">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">
                          Histology Description
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {profile.histology.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        {profile.ihc && (
                          <div className="mt-4 rounded-xl bg-sky-50 p-4 dark:bg-sky-950/35">
                            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-sky-800 dark:text-sky-200">
                              Immunohistochemistry
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                              {profile.ihc}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                            Differential Diagnosis
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {profile.differential.map((item) => (
                              <li
                                key={item}
                                className="text-sm leading-6 text-slate-700 dark:text-slate-300"
                              >
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {profile.pitfall && (
                          <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/30">
                            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-amber-800 dark:text-amber-200">
                              Diagnostic Pitfall
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                              {profile.pitfall}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-violet-200 bg-violet-50 p-5 sm:p-6 dark:border-violet-900 dark:bg-violet-950/35">
          <h2 className="text-xl font-bold">Sign-Out Checklist</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {signout.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
              >
                <span className="text-violet-700 dark:text-violet-300">□</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Educational reference. Data for some rare tumors are limited;
          interpret ancillary studies in the context of morphology, anatomic
          location, and clinical findings.
        </footer>
      </div>
    </main>
  );
}
