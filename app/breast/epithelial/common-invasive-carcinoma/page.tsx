import Link from "next/link";

type Entity = {
  id: string;
  name: string;
  category: string;
  definition: string;
  morphology: string[];
  immuno: string;
  differential: string;
  clinical: string;
};

const entities: Entity[] = [
  {
    id: "nst",
    name: "Invasive Breast Carcinoma of No Special Type (IBC-NST)",
    category: "Common / default category",
    definition:
      "Invasive breast carcinoma that does not show sufficient defining features for classification as a recognized special histological type.",
    morphology: [
      "Highly variable architecture: tubules and glands, nests, cords, trabeculae, or solid sheets; infiltrative growth is typical.",
      "Desmoplastic stroma is common. Cytologic atypia, mitotic activity, and tubule formation vary with grade.",
      "An associated in situ component may be present; search for lymphovascular invasion and document the relationship to adjacent in situ disease.",
      "Medullary-like, neuroendocrine, or other unusual patterns should be described and classified according to current criteria rather than overcalled as a separate entity.",
    ],
    immuno:
      "ER, PR, and HER2 are predictive biomarkers. Use morphology-directed stains when needed to distinguish invasion from in situ disease, identify a possible non-breast primary, or characterize a special type. A low-grade morphology with ER negativity or HER2 positivity is discordant and warrants verification.",
    differential:
      "DCIS involving sclerosing adenosis or a radial scar; microglandular adenosis; invasive lobular carcinoma; metastatic carcinoma; and spindle-cell or metaplastic lesions when morphology is unusual.",
    clinical:
      "Report histological type, Nottingham grade, invasive size, focality, lymphovascular invasion, associated DCIS, margins, nodal findings, and biomarker results as applicable.",
  },
  {
    id: "microinvasive",
    name: "Microinvasive Carcinoma",
    category: "Small-volume invasion",
    definition:
      "Invasive carcinoma with no invasive focus measuring more than 1 mm. The presence and measurement of invasion must be distinguished from extensive in situ disease.",
    morphology: [
      "One or more tiny foci of stromal invasion, often adjacent to high-grade DCIS or another in situ lesion.",
      "Careful examination is required because invasion may be subtle and may be obscured by inflammation, biopsy-site change, or a sclerosing background.",
      "Measure the largest invasive focus for pT classification; do not substitute the overall span of associated DCIS.",
    ],
    immuno:
      "Myoepithelial markers may help in selected equivocal foci, interpreted with H&E morphology and appropriate internal controls. Cytoplasmic myoepithelial markers can highlight stromal cells and vessels; a nuclear marker such as p63 can provide complementary evidence.",
    differential:
      "DCIS with retraction artifact, DCIS involving a sclerosing lesion, displaced epithelium after biopsy, and tangentially sectioned glands.",
    clinical:
      "Extensive sampling of the in situ lesion and suspicious interfaces is important. Use current staging and reporting protocols; the largest invasive focus determines the microinvasive size category.",
  },
  {
    id: "ilc",
    name: "Invasive Lobular Carcinoma (ILC)",
    category: "Special histological type",
    definition:
      "Invasive carcinoma characterized by discohesive cells, commonly infiltrating in single files or dispersed individually, usually associated with loss of E-cadherin pathway function.",
    morphology: [
      "Classic pattern: small, uniform cells infiltrating in single files, targetoid rings around ducts, or loose sheets.",
      "Intracytoplasmic lumina or signet-ring-like cells may occur. Other patterns include solid, alveolar, pleomorphic, tubulolobular, and mixed forms.",
      "The tumour can be subtle grossly and radiologically; the infiltrative span may exceed the apparent mass.",
      "Associated lobular carcinoma in situ may be present, but its presence is not required for diagnosis.",
    ],
    immuno:
      "Loss of membranous E-cadherin and p120 catenin redistribution to the cytoplasm support lobular differentiation. Aberrant or retained E-cadherin staining can occur; interpret a panel in conjunction with morphology. Most classic ILCs are ER-positive and HER2-negative.",
    differential:
      "Ductal/NST carcinoma with discohesive areas, histiocytes, lymphoma, metastatic signet-ring carcinoma, and benign cells in fat or around nerves.",
    clinical:
      "Consider the possibility of diffuse or multifocal growth when correlating with imaging and measuring extent. Grade and biomarkers are assessed using standard breast carcinoma protocols.",
  },
  {
    id: "tubular",
    name: "Tubular Carcinoma",
    category: "Special histological type",
    definition:
      "A well-differentiated invasive carcinoma composed predominantly of open, angulated tubules infiltrating desmoplastic stroma.",
    morphology: [
      "Well-formed tubules with open lumina and sharp angulations, lined by a single layer of low-grade epithelial cells.",
      "Tubules lack a surrounding myoepithelial layer and infiltrate fibrous stroma.",
      "Nuclear atypia and mitotic activity are usually low; a substantial conventional carcinoma component may preclude classification as pure tubular carcinoma.",
    ],
    immuno:
      "Usually strongly ER-positive and HER2-negative. Myoepithelial markers may help in difficult cases, but the diagnosis rests on the infiltrative architecture and cytology.",
    differential:
      "Sclerosing adenosis, radial scar/complex sclerosing lesion, microglandular adenosis, and tubular-pattern carcinoma of another type.",
    clinical:
      "Typically associated with a favorable prognosis when strict criteria for a pure special type are met. Evaluate the entire tumour to estimate the proportion of tubular morphology.",
  },
  {
    id: "cribriform",
    name: "Invasive Cribriform Carcinoma",
    category: "Special histological type",
    definition:
      "An invasive carcinoma with a predominant cribriform architecture formed by tumour nests containing multiple punched-out spaces.",
    morphology: [
      "Uniform low-grade cells form sieve-like nests with rounded, punched-out spaces.",
      "True invasion is indicated by infiltrative nests in stroma without a peripheral myoepithelial layer.",
      "Exclude an in situ cribriform component and mixed tumours that do not meet criteria for the special type.",
    ],
    immuno:
      "Typically ER-positive and HER2-negative. Myoepithelial stains can assist when invasion is uncertain.",
    differential:
      "Cribriform DCIS, adenoid cystic carcinoma, and other invasive carcinomas with focal cribriform architecture.",
    clinical:
      "Usually has a favorable outcome when pure or nearly pure and correctly classified. Record any associated in situ component separately.",
  },
  {
    id: "mucinous",
    name: "Mucinous Carcinoma",
    category: "Special histological type",
    definition:
      "An invasive carcinoma in which tumour cell clusters are present in abundant extracellular mucin.",
    morphology: [
      "Cohesive clusters, nests, or strips of tumour cells float in extracellular mucin pools.",
      "Cellularity and nuclear grade vary; classic mucinous carcinoma is usually low grade.",
      "Mixed tumours contain a substantial non-mucinous invasive component; assess the proportion and describe mixed morphology.",
    ],
    immuno:
      "Usually ER-positive and HER2-negative. Correlate with morphology; mucin production alone is not sufficient to classify a tumour as mucinous carcinoma.",
    differential:
      "Mucocele-like lesion with atypia, mucinous DCIS, metastatic mucinous carcinoma, and invasive carcinoma with focal mucin production.",
    clinical:
      "The distinction between pure and mixed mucinous carcinoma is clinically relevant. Measure the invasive component and document associated disease.",
  },
  {
    id: "micropapillary",
    name: "Invasive Micropapillary Carcinoma",
    category: "Special histological type",
    definition:
      "An invasive carcinoma characterized by small tight clusters of tumour cells within clear stromal spaces, often showing reversed polarity.",
    morphology: [
      "Small nests or morula-like clusters are surrounded by empty-appearing lacunar spaces.",
      "Clusters lack true fibrovascular cores; the apical surface may face outward toward the stroma (inside-out polarity).",
      "Lymphovascular invasion and lymph node metastases are common associations; distinguish true vascular spaces from retraction artifact.",
    ],
    immuno:
      "Epithelial markers confirm carcinoma when needed. Endothelial markers can help evaluate suspected lymphovascular invasion, but must be interpreted with morphology and controls.",
    differential:
      "Retraction artifact in NST carcinoma, lymphovascular tumour emboli, papillary lesions, and metastatic carcinoma.",
    clinical:
      "Recognize and report the micropapillary component and lymphovascular invasion carefully because of the association with nodal involvement.",
  },
  {
    id: "apocrine",
    name: "Invasive Apocrine Carcinoma",
    category: "Special histological type / phenotype",
    definition:
      "An invasive carcinoma with prominent apocrine cytomorphology; classification requires the appropriate morphology and current diagnostic criteria.",
    morphology: [
      "Abundant granular eosinophilic cytoplasm, distinct cell borders, and enlarged nuclei with prominent nucleoli.",
      "Apocrine morphology can occur in carcinomas that are not a pure apocrine special type; evaluate the tumour as a whole.",
      "Most invasive apocrine carcinomas are high grade, although the phenotype and receptor profile are variable.",
    ],
    immuno:
      "Androgen receptor is often expressed, while ER and PR are frequently negative; HER2 may be positive or negative. AR testing is not a universal predictive standard, so interpret within the clinical context.",
    differential:
      "Apocrine metaplasia, apocrine DCIS, oncocytic lesions, and metastatic carcinomas with eosinophilic cytoplasm.",
    clinical:
      "Do not infer a treatment category from apocrine morphology alone. Report ER, PR, and HER2 according to validated protocols.",
  },
  {
    id: "metaplastic",
    name: "Metaplastic Carcinoma",
    category: "Special histological type",
    definition:
      "A heterogeneous group of breast carcinomas showing squamous and/or mesenchymal differentiation, including spindle-cell and matrix-producing forms.",
    morphology: [
      "Patterns include low-grade adenosquamous, fibromatosis-like, spindle-cell, squamous, and carcinomas with heterologous mesenchymal differentiation or matrix production.",
      "Tumours may be biphasic or monophasic and can show abrupt transitions between conventional carcinoma and metaplastic elements.",
      "Extensive sampling may be needed to identify a conventional invasive component or an in situ component.",
    ],
    immuno:
      "Broad-spectrum cytokeratins and/or p63/p40 can support epithelial differentiation in spindle or squamous areas, but expression may be focal or absent in some components. Use a differential-driven panel to exclude primary sarcoma, malignant phyllodes tumour, and metastasis.",
    differential:
      "Malignant phyllodes tumour, primary breast sarcoma, melanoma, lymphoma, and metastatic malignancy. No single stain should be interpreted in isolation.",
    clinical:
      "Many metaplastic carcinomas are triple-negative, but low-grade forms can behave differently from conventional high-grade TNBC. Classification should follow the dominant morphology and established criteria.",
  },
];

const gradeRows = [
  [
    "Tubule formation",
    "Score 1: >75% of tumour forms tubules; score 2: 10–75%; score 3: <10%.",
  ],
  [
    "Nuclear pleomorphism",
    "Score 1: small, relatively uniform nuclei; score 2: moderate variation; score 3: marked variation, enlarged vesicular nuclei and often prominent nucleoli.",
  ],
  [
    "Mitotic count",
    "Count definite mitoses in the hotspot. For a standardized tumour area of 2 mm²: score 1 ≤7, score 2 = 8–14, score 3 ≥15; verify the current validated local protocol and microscope field area.",
  ],
  [
    "Total score / grade",
    "Add the three component scores: 3–5 = grade 1; 6–7 = grade 2; 8–9 = grade 3. Report component scores as well as the grade.",
  ],
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-7"
    >
      <h2 className="text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-6 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
      {children}
    </span>
  );
}

export default function CommonInvasiveCarcinomaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
            <span>PathologyGPS</span>
            <span className="text-slate-300">/</span>
            <span>Breast pathology</span>
          </div>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                Common Invasive Breast Carcinomas
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                A morphology-first diagnostic guide to invasive carcinoma of no
                special type, microinvasion, lobular carcinoma, and common
                special histological types—with practical grading, biomarker,
                staging, and sign-out checkpoints.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Diagnostic GPS
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Confirm invasion → classify morphology → grade → assess LVI and
                extent → verify biomarkers → complete structured reporting.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>H&E-first</Tag>
            <Tag>IHC when indicated</Tag>
            <Tag>ER / PR / HER2</Tag>
            <Tag>Nottingham grade</Tag>
            <Tag>pTNM essentials</Tag>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 md:px-8 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="space-y-6">
          <Section id="overview" title="1. Classification at a glance">
            <p>
              Invasive breast carcinoma is a morphologically heterogeneous
              group. Use{" "}
              <strong>
                invasive breast carcinoma of no special type (IBC-NST)
              </strong>{" "}
              when the tumour does not meet criteria for a recognized special
              type. A special-type diagnosis should be based on the defining
              morphology and the required extent of that pattern under current
              classification criteria.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">
                  Common diagnostic groups
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>IBC-NST</li>
                  <li>Microinvasive carcinoma</li>
                  <li>Invasive lobular carcinoma</li>
                  <li>Tubular and invasive cribriform carcinoma</li>
                  <li>Mucinous carcinoma</li>
                  <li>Invasive micropapillary carcinoma</li>
                  <li>Invasive apocrine carcinoma</li>
                  <li>Metaplastic carcinoma</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">
                  High-value prognostic/reporting elements
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Histological type and Nottingham grade</li>
                  <li>Invasive tumour size and focality</li>
                  <li>Lymphovascular invasion</li>
                  <li>Associated in situ carcinoma</li>
                  <li>Margin status and distance</li>
                  <li>Regional lymph node status</li>
                  <li>ER, PR, HER2; other indicated biomarkers</li>
                  <li>Post-neoadjuvant response when applicable</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="workflow" title="2. Diagnostic GPS: practical workflow">
            <ol className="space-y-3">
              {[
                [
                  "Start with architecture",
                  "Is the growth truly infiltrative? Look for irregular glands, nests, cords, single cells, stromal response, and destructive growth. Do not diagnose invasion from cytologic atypia alone.",
                ],
                [
                  "Exclude common mimics",
                  "Consider DCIS involving a sclerosing lesion, sclerosing adenosis, radial scar, microglandular adenosis, biopsy-related epithelial displacement, and retraction artifact.",
                ],
                [
                  "Classify the tumour",
                  "Decide whether the morphology fits IBC-NST or a recognized special type. If the tumour is heterogeneous, describe the mixed pattern and apply current criteria.",
                ],
                [
                  "Assign Nottingham grade",
                  "Score tubule formation, nuclear pleomorphism, and mitotic activity independently; add the three scores to derive grade.",
                ],
                [
                  "Assess extent and spread",
                  "Measure the invasive component, determine focality, inspect margins, search for LVI, and evaluate lymph nodes when submitted.",
                ],
                [
                  "Verify predictive biomarkers",
                  "Perform ER, PR, and HER2 using validated protocols. Resolve unusual morphology–biomarker discordance before finalizing the report.",
                ],
                [
                  "Integrate and sign out",
                  "Correlate imaging, gross findings, histology, biomarkers, and treatment history. Use the current CAP/institutional synoptic protocol.",
                ],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section
            id="entities"
            title="3. Entity profiles: morphology, IHC, and differential"
          >
            <p>
              Use the entity cards below as a rapid reference. The differential
              diagnosis is morphology-dependent; immunohistochemistry should
              answer a specific question rather than replace H&E interpretation.
            </p>
            <div className="space-y-4">
              {entities.map((e) => (
                <article
                  id={e.id}
                  key={e.id}
                  className="scroll-mt-24 rounded-xl border border-slate-200 p-4 md:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                        {e.category}
                      </p>
                      <h3 className="mt-1 text-lg font-bold text-slate-950">
                        {e.name}
                      </h3>
                    </div>
                    <a
                      href="#workflow"
                      className="text-xs font-semibold text-teal-700 hover:underline"
                    >
                      Back to workflow ↑
                    </a>
                  </div>
                  <p className="mt-3">
                    <strong>Definition.</strong> {e.definition}
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        Morphology checklist
                      </h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5">
                        {e.morphology.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-bold text-slate-900">
                          IHC / biomarker notes
                        </h4>
                        <p className="mt-1">{e.immuno}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          Key differential
                        </h4>
                        <p className="mt-1">{e.differential}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          Reporting / clinical relevance
                        </h4>
                        <p className="mt-1">{e.clinical}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="grading" title="4. Nottingham histological grading">
            <p>
              Grade is based on three independently scored features. Assess the
              whole tumour when possible, using the highest-grade area for
              nuclear pleomorphism and the mitotic hotspot for mitotic scoring.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Practical scoring guide</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeRows.map(([a, b]) => (
                    <tr key={a} className="border-t border-slate-200 align-top">
                      <th className="p-3 font-semibold">{a}</th>
                      <td className="p-3">{b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
              <p className="font-semibold">Grading pitfalls</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Do not count pyknotic or hyperchromatic apoptotic nuclei as
                  mitoses.
                </li>
                <li>
                  Calibrate the microscope field area; “per 10 HPF” is not
                  comparable across microscopes without area standardization.
                </li>
                <li>
                  Core biopsy grading is useful but may underestimate mitotic
                  activity and overall grade because of sampling.
                </li>
                <li>
                  For a very small tumour, document limitations if there is
                  insufficient tissue for reliable scoring.
                </li>
              </ul>
            </div>
          </Section>

          <Section
            id="biomarkers"
            title="5. Biomarker interpretation: practical checkpoints"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">ER and PR</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    ER and PR are nuclear stains; interpret with appropriate
                    controls and validated assay procedures.
                  </li>
                  <li>
                    ER staining in 1–10% of invasive tumour cells is reported as
                    ER low positive under current commonly used guidance, with
                    the recommended explanatory comment.
                  </li>
                  <li>
                    When staining is 0–10%, document internal-control status. If
                    controls are absent or unsatisfactory, consider testing
                    another specimen according to protocol.
                  </li>
                  <li>
                    PR adds prognostic information in ER-positive disease;
                    isolated PR positivity with ER negativity is unusual and
                    should prompt review of controls and results.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">HER2</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Score membrane staining as 0, 1+, 2+, or 3+ using the
                    current ASCO/CAP algorithm.
                  </li>
                  <li>
                    Equivocal IHC (2+) requires reflex ISH according to the
                    applicable guideline.
                  </li>
                  <li>
                    Distinguish faint/incomplete membrane staining from absent
                    staining; avoid overcalling 2+ as 3+.
                  </li>
                  <li>
                    Unexpected combinations—such as low-grade morphology with
                    HER2 IHC 3+—warrant verification.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">Ki-67</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Use as an adjunct to morphology and other biomarkers, not as
                    a standalone substitute for grade or genomic assays.
                  </li>
                  <li>
                    Reproducibility is limited, particularly in intermediate
                    ranges; follow validated local scoring procedures.
                  </li>
                  <li>
                    Preanalytic handling and fixation can affect results; core
                    biopsies may provide more standardized material.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-900">
                  Additional testing when indicated
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    PD-L1 testing may guide immunotherapy in selected metastatic
                    TNBC settings; use the assay and scoring system specified
                    for the clinical indication.
                  </li>
                  <li>
                    Multigene expression assays may help treatment decisions in
                    selected early-stage ER-positive/HER2-negative cancers.
                  </li>
                  <li>
                    AR, molecular profiling, and other markers are
                    context-dependent and are not universal routine tests for
                    every invasive carcinoma.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              Biomarker criteria and therapeutic indications evolve. Follow the
              current validated assay instructions, ASCO/CAP guidance, and
              institutional protocols.
            </p>
          </Section>

          <Section id="staging" title="6. Staging, size, nodes, and margins">
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-slate-900">
                  Invasive tumour size
                </h3>
                <p>
                  For pT classification, measure the largest invasive focus, not
                  the total span of associated DCIS or LCIS. Integrate gross,
                  microscopic, and imaging findings when needed. For multiple
                  separate invasive foci, document multiplicity and apply the
                  appropriate staging modifier.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Lymph nodes</h3>
                <p>
                  Record the number of nodes examined and involved, the size of
                  the largest metastatic deposit, and extranodal extension when
                  applicable. Deposits greater than 2 mm are macrometastases;
                  deposits greater than 0.2 mm and up to 2 mm are
                  micrometastases; isolated tumour cells are no greater than 0.2
                  mm or 200 cells, using current staging definitions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Lymphovascular invasion
                </h3>
                <p>
                  Assess at the tumour periphery in clearly endothelial-lined
                  spaces. Retraction artifact is a major pitfall. D2-40, CD31,
                  or ERG may help in selected cases, but staining can be
                  misleading and must be correlated with H&E.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Margins</h3>
                <p>
                  Record the distance from invasive carcinoma and associated
                  DCIS to relevant margins. Additional shave margins designated
                  as final margins supersede the corresponding margins of the
                  original specimen. Apply current institutional and
                  guideline-specific margin standards.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Post-neoadjuvant specimens
                </h3>
                <p>
                  Correlate with the pretreatment tumour site and marker clip,
                  sample the tumour bed adequately, and document residual
                  invasive carcinoma, in situ disease, nodal disease, and
                  treatment effect. Residual cancer burden (RCB) may supplement
                  ypTNM when used by the institution.
                </p>
              </div>
            </div>
          </Section>

          <Section id="pitfalls" title="7. Common diagnostic pitfalls">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Invasion versus in situ disease:</strong> DCIS involving
                a sclerosing lesion can simulate invasion; use myoepithelial
                markers judiciously and inspect the H&E architecture.
              </li>
              <li>
                <strong>Myoepithelial stain interpretation:</strong> stromal or
                vascular staining can mimic a peripheral layer. Pair a nuclear
                marker (e.g., p63) with a cytoplasmic marker when appropriate.
              </li>
              <li>
                <strong>Retraction versus lymphovascular invasion:</strong>{" "}
                require convincing endothelial-lined spaces and avoid relying on
                a single stain.
              </li>
              <li>
                <strong>Special type overclassification:</strong> confirm the
                required morphology and proportion; otherwise classify as
                IBC-NST and describe the pattern.
              </li>
              <li>
                <strong>Biomarker discordance:</strong> unexpected ER/HER2
                results should trigger review of tumour type, grade, controls,
                fixation, and assay validity.
              </li>
              <li>
                <strong>Under-sampling:</strong> extensive DCIS, post-treatment
                tumour beds, subtle lobular carcinoma, and imaging–gross
                discordance require targeted additional sampling.
              </li>
              <li>
                <strong>Metastasis to breast:</strong> consider a non-mammary
                primary when morphology, immunophenotype, or clinical history is
                unusual.
              </li>
            </ul>
          </Section>

          <Section id="grossing" title="8. Gross examination and sampling">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Review imaging and specimen orientation before sectioning;
                identify clips, calcifications, lesion count, and expected
                location.
              </li>
              <li>
                Ink margins according to the laboratory's color scheme, serially
                section the specimen, and map larger or poorly defined lesions.
              </li>
              <li>
                Submit tissue to establish invasive size and focality, evaluate
                close margins, and investigate possible invasion in extensive in
                situ disease.
              </li>
              <li>
                After neoadjuvant therapy, sample the entire tumour bed as
                needed because residual disease may be soft, scattered, or
                grossly inapparent.
              </li>
              <li>
                Document cold ischemia and fixation parameters according to the
                laboratory's validated breast biomarker workflow.
              </li>
            </ul>
          </Section>

          <Section id="signout" title="9. Sign-out checklist">
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Histological type and any special/mixed pattern",
                "Nottingham grade and three component scores",
                "Invasive tumour size and focality",
                "Associated DCIS / LCIS and extent when relevant",
                "Lymphovascular invasion",
                "Margins and measured distances",
                "Regional lymph nodes and largest deposit",
                "ER, PR, HER2 results and required comments",
                "Treatment effect / RCB if post-neoadjuvant",
                "pTNM elements and any staging modifiers",
                "Radiology–pathology correlation",
                "Current CAP/institutional synoptic elements completed",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 p-3"
                >
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-teal-700"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </Section>

          <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex-1">
              <h2 className="font-bold text-slate-900">
                Related PathologyGPS pages
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Use the dedicated pages for precursor lesions and other breast
                tumour families.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <Link
                className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-teal-800 hover:bg-teal-50"
                href="/breast/non-invasive-neoplasia"
              >
                Non-invasive neoplasia
              </Link>
              <Link
                className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-teal-800 hover:bg-teal-50"
                href="/breast/epithelial/papillary-lesions"
              >
                Papillary lesions
              </Link>
              <Link
                className="rounded-lg border border-slate-200 px-3 py-2 font-semibold text-teal-800 hover:bg-teal-50"
                href="/breast/mesenchymal/fibroepithelial-lesions"
              >
                Fibroepithelial lesions
              </Link>
            </div>
          </div>
          <footer className="border-t border-slate-200 py-4 text-xs leading-5 text-slate-500">
            Educational reference for professional use. This page summarizes
            supplied source material in an organized diagnostic format. Confirm
            current classification, biomarker interpretation, staging, and
            reporting requirements against the latest authoritative guidelines
            and institutional protocols.
          </footer>
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              On this page
            </p>
            <nav className="mt-4 space-y-3 text-sm">
              {[
                ["overview", "Classification"],
                ["workflow", "Diagnostic GPS"],
                ["entities", "Entity profiles"],
                ["grading", "Nottingham grade"],
                ["biomarkers", "Biomarkers"],
                ["staging", "Staging / margins"],
                ["pitfalls", "Pitfalls"],
                ["grossing", "Gross examination"],
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
            <div className="mt-6 rounded-xl bg-slate-950 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Key reminder
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Morphology establishes the diagnosis. IHC resolves a focused
                differential. Biomarkers guide therapy. Keep each step explicit
                in the final report.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
