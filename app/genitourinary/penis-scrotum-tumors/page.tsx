"use client";
import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  site: string;
  clinical: string;
  morph: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
};
const entities: Entity[] = [
  {
    name: "Condyloma acuminatum",
    group: "Benign / HPV-related",
    site: "Penis (especially glans, then foreskin and shaft), scrotum, perineum, and anus; giant lesions may involve the urethra or coronal sulcus.",
    clinical:
      "Usually young men in their 20s–30s; multifocal exophytic or flat genital warts, occasionally a giant locally destructive mass.",
    morph: [
      "Papillomatosis with prominent fibrovascular cores and bulbous, well-demarcated rete ridges.",
      "Acanthosis with hyperkeratosis and parakeratosis.",
      "Koilocytic atypia is variable and may be inconspicuous in older lesions.",
      "No true epithelial dysplasia should be present in an uncomplicated condyloma.",
    ],
    ihc: [
      "No routine IHC is required; viral cytopathic change is assessed morphologically.",
    ],
    molecular: [
      "Usually associated with low-risk HPV 6 or 11; HPV testing is rarely needed for routine diagnosis.",
    ],
    differential: [
      "Warty carcinoma — shows significant cytologic atypia throughout the lesion and infiltrative growth, not merely superficial koilocytosis.",
      "Verrucous carcinoma — has a broad pushing invasive front and lacks the characteristic benign koilocytosis of condyloma.",
      "Treated condylomas — topical therapy may cause vacuolization, nuclear enlargement, necrotic keratinocytes, and increased mitoses that mimic dysplasia.",
    ],
  },
  {
    name: "HPV-associated penile intraepithelial neoplasia (PeIN)",
    group: "Precursor / HPV-associated",
    site: "Glans, foreskin, and penile shaft; may be solitary or multifocal.",
    clinical:
      "Usually adult men; presents as erythematous, velvety, scaly, pigmented, or papular plaques, sometimes with erosion or pruritus.",
    morph: [
      "Basaloid pattern — monotonous immature cells replace most or all epithelial thickness, with high N:C ratios, mitoses, and apoptosis.",
      "Warty pattern — pleomorphic cells with koilocytic atypia and mitoses extend through the epithelium.",
      "Mixed pattern — basaloid cells predominate basally with warty differentiation toward the surface.",
    ],
    ihc: [
      "Basement membrane remains intact; stromal invasion excludes pure PeIN.",
      "Block-type p16 positivity supports high-risk HPV association.",
    ],
    molecular: [
      "Ki-67 extends above the basal layer; p53 is usually negative or variable.",
    ],
    differential: [
      "Differentiated PeIN — basal/parabasal atypia with retained surface maturation, usually non-block p16.",
      "Reactive squamous hyperplasia — lacks convincing cytologic atypia and typically has only basal/scattered Ki-67.",
      "Invasive HPV-associated SCC — demonstrates stromal invasion; inspect the epithelial-stromal interface carefully.",
    ],
  },
  {
    name: "Differentiated penile intraepithelial neoplasia (dPeIN)",
    group: "Precursor / HPV-independent",
    site: "Most often inner foreskin; frequently associated with lichen sclerosus.",
    clinical:
      "Typically older men (mean age about 64 years), often uncircumcised with longstanding lichen sclerosus; white or pink plaque.",
    morph: [
      "Hyperplastic squamous epithelium with hyperkeratosis and parakeratosis, often with elongated anastomosing rete ridges.",
      "Atypical hyperchromatic keratinocytes are concentrated in basal and parabasal layers despite apparent surface maturation.",
      "Dyskeratosis, individual eosinophilic keratinocytes, and prominent intercellular bridges are useful clues.",
    ],
    ihc: [
      "Basement membrane remains intact; all dPeIN is considered high grade and is not graded further.",
      "p16 is non-block/negative; p53 is variable and may show abnormal overexpression.",
      "Ki-67 forms a continuous basal/parabasal pattern and may extend suprabasally.",
    ],
    molecular: [],
    differential: [
      "HPV-associated PeIN — usually block p16-positive, with full-thickness basaloid or warty atypia and koilocytosis.",
      "Squamous hyperplasia / lichen sclerosus — lacks convincing non-reactive nuclear atypia; Ki-67 is usually restricted to scattered basal cells.",
      "Invasive HPV-independent SCC — identify stromal invasion, often adjacent to dPeIN.",
    ],
  },
  {
    name: "HPV-associated penile squamous cell carcinoma",
    group: "Malignant / HPV-associated",
    site: "Glans and foreskin; subtype-specific sites include glans/foreskin for basaloid SCC and multiple penile compartments for warty carcinoma.",
    clinical:
      "Adults; basaloid SCC often presents around age 53, warty carcinoma around 48–55; may present with ulcerated or cauliflower-like mass and inguinal nodes.",
    morph: [
      "Basaloid SCC — solid nests/sheets of small uniform basaloid cells, brisk mitoses, and frequent comedonecrosis or abrupt keratinization.",
      "Warty carcinoma — exophytic/endophytic papillomatous growth with atypical koilocytosis throughout the tumor and infiltrative deep component.",
      "Clear cell SCC — nested/confluent large clear cells with PAS-positive, diastase-resistant cytoplasmic material and geographic/comedo necrosis.",
      "Lymphoepithelioma-like SCC — syncytial sheets, nests, or cords of poorly differentiated cells obscured by dense lymphoplasmacytic inflammation.",
    ],
    ihc: [
      "Block-type p16 is expected in the appropriate HPV-associated setting; p63 supports squamous differentiation.",
    ],
    molecular: [
      "High-risk HPV in situ hybridization or molecular testing can confirm association; HPV16 is most common.",
    ],
    differential: [
      "Giant condyloma — lacks the marked atypia and infiltrative malignant architecture of warty SCC.",
      "Verrucous carcinoma — has very well-differentiated cytology and broad pushing invasion, without atypical koilocytosis throughout.",
      "Urothelial carcinoma of distal urethra — correlate with urethral in situ disease and use GATA3, CK20, and uroplakin-2 as appropriate.",
      "Small-cell neuroendocrine carcinoma — evaluate neuroendocrine morphology and markers in basaloid tumors.",
      "Lymphoma — lacks epithelial marker expression; lymphoepithelioma-like SCC expresses p63 and commonly p16.",
    ],
  },
  {
    name: "HPV-independent penile squamous cell carcinoma",
    group: "Malignant / HPV-independent",
    site: "Usually glans; may involve coronal sulcus and foreskin; pseudohyperplastic pattern often foreskin-associated.",
    clinical:
      "Usually men in the sixth to seventh decades; may present as induration, erythema, exophytic mass, ulcer, or slowly enlarging verruciform lesion.",
    morph: [
      "Usual-type SCC — invasive keratinizing carcinoma with variable differentiation; growth patterns include pseudohyperplastic, pseudoglandular, superficial spreading, vertical, verruciform, and multicentric.",
      "Pseudoglandular pattern — prominent acantholysis creates gland-like spaces within squamous carcinoma.",
      "Verrucous carcinoma — very well-differentiated squamous proliferation with hyperkeratotic papillae and broad pushing invasion; koilocytic atypia is absent.",
      "Carcinoma cuniculatum — verrucous pattern with deep, branching, keratin-filled sinus tracts and bulbous invasive fronts.",
      "Papillary SCC — complex irregular papillae with jagged stromal interface and keratin lakes.",
      "Sarcomatoid SCC — atypical spindle-cell fascicles, sometimes with giant, strap, or rhabdoid cells; surface PeIN may be present.",
    ],
    ihc: [
      "p16 is non-block/negative in HPV-independent tumors; p63 and high-molecular-weight cytokeratin can support epithelial differentiation in sarcomatoid cases.",
    ],
    molecular: [
      "High-risk HPV should be excluded when classification is uncertain; TP53 alterations are common in HPV-independent carcinogenesis, but no routine molecular assay is required.",
    ],
    differential: [
      "Pseudoepitheliomatous hyperplasia — lacks destructive invasion and a convincing mass-forming infiltrative carcinoma.",
      "Distal urethral urothelial carcinoma — history and in situ component support urethral origin; GATA3, CK20, and uroplakin-2 may be positive.",
      "Warty carcinoma — shows high-risk HPV association, block p16, and atypical koilocytosis throughout the lesion.",
      "Sarcomas or melanoma — sarcomatoid SCC retains epithelial differentiation (p63/34βE12); use a directed panel if conventional SCC is not identified.",
    ],
  },
  {
    name: "Penile squamous cell carcinoma, NOS",
    group: "Malignant / HPV status unclassified",
    site: "Usually glans or coronal sulcus; exclusive foreskin involvement is uncommon.",
    clinical:
      "Clinical presentation resembles usual-type penile SCC; a nodular, ulcerated, or cauliflower-like mass.",
    morph: [
      "Invasive squamous carcinoma with variable keratinization and no defining special histologic pattern.",
      "Identify destructive stromal invasion and squamous differentiation.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "No HPV classification is available because p16/HPV testing is unavailable or not performed.",
      "No specific IHC profile can establish HPV status in this category.",
      "HPV status is not established; this designation is appropriate when p16 and HPV testing are unavailable.",
    ],
  },
  {
    name: "Penile adenosquamous carcinoma / mucoepidermoid carcinoma",
    group: "Malignant / other epithelial",
    site: "Usually glans near the urethral meatus; may extend to coronal sulcus and foreskin.",
    clinical:
      "Rare; usually men in their sixth decade presenting with a penile mass.",
    morph: [
      "Predominant squamous carcinoma component, often resembling grade 1–2 usual-type SCC.",
      "Adenosquamous carcinoma shows true gland formation with columnar/cuboidal cells and intracellular or luminal mucin.",
      "Mucoepidermoid pattern may consist of mucin-producing cells without overt glandular structures.",
    ],
    ihc: [
      "Adjacent PeIN may be present; deeply infiltrative growth is typical.",
      "Glandular component may express CEA and high-molecular-weight cytokeratin (34βE12).",
      "Mucinous cells may express CK7, EMA, MUC5AC, and MUC6; they are typically negative for p40, p63, CK5, CK14, and p16.",
    ],
    molecular: [],
    differential: [
      "No diagnostic molecular alteration is established; molecular testing is not routinely relevant.",
      "Usual SCC with pseudoglandular/acantholytic pattern — pseudospaces lack true mucin-producing glandular cells.",
      "Metastatic adenocarcinoma involving penis — correlate with clinical history and organ-specific markers.",
    ],
  },
  {
    name: "Extramammary Paget disease of penis and scrotum",
    group: "Malignant / intraepidermal adenocarcinoma",
    site: "Penoscrotal epidermis; scrotum alone is common, with some cases involving both scrotum and penis.",
    clinical:
      "Usually older men (median age about 65–73); chronic pruritic erythematous, scaly, erosive, or exudative plaque, often delayed diagnosis.",
    morph: [
      "Large pale cells with abundant pale eosinophilic cytoplasm, enlarged nuclei, and prominent nucleoli occur singly or in clusters within epidermis.",
      "Adnexal structures may be involved; dermal invasion occurs in a minority and may form nodules, glands, or sheets.",
      "Lymphovascular invasion may be present; assess depth, adnexal involvement, and invasive component.",
    ],
    ihc: [
      "Primary Paget disease typically expresses CK7 and CEA; ERBB2 and GCDFP-15 are variable.",
      "Primary lesions are usually CK20-, CDX2-, S100-, and HMB45-negative.",
    ],
    molecular: [],
    differential: [
      "No routine molecular test is established; primary lesions are not HPV-associated.",
      "Secondary Paget disease from urothelial carcinoma — may express CK20 and urothelial markers; correlate with urinary tract evaluation.",
      "Secondary Paget disease from prostatic adenocarcinoma — assess PSA, NKX3.1, and other prostate-lineage markers as appropriate.",
      "Melanoma in situ — usually expresses S100/SOX10 and melanocytic markers rather than CK7/CEA.",
    ],
  },
  {
    name: "Basal cell carcinoma of the scrotum",
    group: "Malignant / cutaneous epithelial",
    site: "Scrotal skin; may arise from interfollicular epidermis or hair follicle.",
    clinical:
      "Usually men aged 42–82; red papule, plaque, or nodule with often delayed diagnosis and local invasion.",
    morph: [
      "Basaloid nests and cords show peripheral palisading and stromal retraction clefts.",
      "Mucinous stroma is characteristic; focal squamous differentiation or microcysts may occur.",
      "Morphology resembles BCC at other cutaneous sites; nodular and superficial patterns are most often reported.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "No site-specific IHC or molecular profile is established; use standard BCC markers only when needed to resolve a differential.",
      "No molecular testing is routinely relevant for scrotal BCC.",
    ],
  },
];
const groups = [
  "All",
  "Benign / HPV-related",
  "Precursor / HPV-associated",
  "Precursor / HPV-independent",
  "Malignant / HPV-associated",
  "Malignant / HPV-independent",
  "Malignant / HPV status unclassified",
  "Malignant / other epithelial",
  "Malignant / intraepidermal adenocarcinoma",
  "Malignant / cutaneous epithelial",
];

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h3 className="mb-3 font-bold text-slate-900">{title}</h3>
        {children}
      </div>
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
export default function PenisScrotumTumorsPage() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "HPV-associated penile squamous cell carcinoma",
    "HPV-independent penile squamous cell carcinoma",
    "Extramammary Paget disease of penis and scrotum",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          [
            e.name,
            e.site,
            e.clinical,
            e.group,
            ...e.morph,
            ...e.ihc,
            ...e.molecular,
            ...e.differential,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, group],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Genitourinary Pathology / Penis and Scrotum Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Penis and Scrotum Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing precursor
                lesions, HPV classification, invasive squamous carcinomas, and
                selected scrotal epithelial tumors.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Classify penile squamous lesions by invasion and HPV
                association.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Use block-type p16 as the practical surrogate for high-risk HPV
                when morphology is equivocal. Report HPV-associated or
                HPV-independent status when established; use SCC-NOS when
                testing is unavailable.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from clinical setting to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the site",
                "Separate glans, coronal sulcus, foreskin, shaft, scrotal skin, and distal urethra; correlate with the clinical epicenter.",
              ],
              [
                "2. Determine invasion",
                "For PeIN, confirm an intact basement membrane; for invasive SCC, identify destructive stromal infiltration.",
              ],
              [
                "3. Classify HPV association",
                "Block p16 supports high-risk HPV-associated disease; non-block p16 and the appropriate morphology favor HPV-independent disease.",
              ],
              [
                "4. Recognize the growth pattern",
                "Basaloid, warty, clear cell, lymphoepithelioma-like, usual, verrucous, papillary, or sarcomatoid.",
              ],
              [
                "5. Report prognostic features",
                "Document subtype, grade, depth/level of invasion, lymphovascular and perineural invasion, margins, and pathologic stage.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="HPV-associated versus HPV-independent penile disease">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">HPV-associated</th>
                    <th className="py-2">HPV-independent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Precursor</td>
                    <td className="py-2 pr-3">HPV-associated PeIN</td>
                    <td className="py-2">Differentiated PeIN</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Typical p16</td>
                    <td className="py-2 pr-3">Block-positive</td>
                    <td className="py-2">Non-block/negative</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Morphology</td>
                    <td className="py-2 pr-3">
                      Basaloid or warty; koilocytic atypia may be present
                    </td>
                    <td className="py-2">
                      Keratinizing; often associated with chronic
                      inflammation/lichen sclerosus
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Molecular context
                    </td>
                    <td className="py-2 pr-3">High-risk HPV, commonly HPV16</td>
                    <td className="py-2">
                      TP53 pathway alterations are common; no routine defining
                      assay
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              HPV classification does not replace histologic subtype, grade, or
              pathologic stage.
            </p>
          </Panel>
          <Panel title="High-yield differential diagnosis checkpoints">
            <Bullets
              items={[
                "Condyloma versus warty SCC: superficial koilocytosis without invasion versus atypical koilocytosis throughout an infiltrative carcinoma.",
                "Verrucous carcinoma versus papillary SCC: broad pushing front versus complex irregular papillae with a jagged invasive interface.",
                "Differentiated PeIN versus reactive squamous hyperplasia: true basal/parabasal atypia and a continuous Ki-67 pattern support PeIN.",
                "Scrotal Paget disease: exclude secondary urothelial or prostatic involvement before designating a primary cutaneous lesion.",
                "Scrotal BCC versus basaloid SCC: palisading and stromal clefting with mucinous stroma versus atypical basaloid nests with brisk mitoses/comedonecrosis.",
              ]}
            />
          </Panel>
        </div>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Diagnostic criteria and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunophenotype, or
                molecular feature.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. p16, PeIN, koilocytosis, Paget..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${group === g ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((e) => {
              const open = opened.includes(e.name);
              return (
                <article
                  key={e.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {e.group}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {e.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{e.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="border-t border-slate-100 p-5">
                      <div className="mb-5 rounded-xl bg-slate-50 p-4">
                        <h4 className="mb-2 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets
                          items={[
                            e.clinical,
                            `Primary anatomic distribution: ${e.site}`,
                          ]}
                        />
                      </div>
                      <div className="grid gap-6 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Histopathology and Essential Diagnostic Criteria
                          </h4>
                          <Bullets items={e.morph} />
                        </div>
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Immunohistochemistry
                          </h4>
                          {e.ihc.length ? (
                            <Bullets items={e.ihc} />
                          ) : (
                            <p className="text-sm text-slate-500">
                              No defining immunohistochemical profile is
                              established.
                            </p>
                          )}
                          <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                            Molecular Pathology
                          </h4>
                          {e.molecular.length ? (
                            <Bullets items={e.molecular} />
                          ) : (
                            <p className="text-sm text-slate-500">
                              No diagnostically useful molecular test is
                              established.
                            </p>
                          )}
                        </div>
                        <div className="lg:col-span-2">
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Differential Diagnosis
                          </h4>
                          <Bullets items={e.differential} />
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching entity.
              </div>
            )}
          </div>
        </section>
        <Panel title="Reporting and sampling checklist">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-bold text-slate-900">
                Penile squamous carcinoma
              </h4>
              <Bullets
                items={[
                  "Specify histologic subtype and HPV association when established; use SCC-NOS if HPV testing is unavailable.",
                  "For mixed carcinomas, identify each component and estimate its percentage when feasible.",
                  "Report histologic grade, depth/level of invasion, lymphovascular invasion, perineural invasion, and margin status.",
                  "Document involvement of glans, foreskin, shaft, corpus spongiosum, corpus cavernosum, and urethra as applicable.",
                  "Assess regional lymph nodes and assign pathologic stage using the applicable current staging system.",
                ]}
              />
            </div>
            <div>
              <h4 className="mb-2 font-bold text-slate-900">
                Scrotal epithelial lesions
              </h4>
              <Bullets
                items={[
                  "For extramammary Paget disease, distinguish intraepidermal from dermally invasive disease and document adnexal, lymphovascular, and dartos involvement.",
                  "Investigate possible secondary Paget disease, particularly from prostate or urothelial carcinoma; use a directed IHC panel.",
                  "For scrotal BCC, assess peripheral and deep margins carefully; subclinical extension may complicate margin assessment.",
                  "Scrotal malignancies are uncommon and do not all have a dedicated AJCC staging framework; correlate with the appropriate site-specific protocol.",
                ]}
              />
            </div>
          </div>
        </Panel>
        <footer className="border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          PathologyGPS • Penis and Scrotum Tumors • Diagnostic reference for
          professional use. Interpret ancillary studies in conjunction with
          morphology and clinical findings.
        </footer>
      </div>
    </main>
  );
}
