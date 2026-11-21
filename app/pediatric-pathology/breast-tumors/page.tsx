"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Fibroadenoma",
    group: "Fibroepithelial Tumors",
    clue: "Circumscribed biphasic tumor with intracanalicular and/or pericanalicular growth, without well-developed leaf-like fronds or stromal overgrowth.",
    summary:
      "A benign biphasic neoplasm of the terminal duct-lobular unit, composed of epithelial and stromal components.",
    clinical: [
      "Most common solid breast tumor in adolescent girls; may occur from approximately 8–9 years of age.",
      "Predominantly affects females.",
      "May arise in any breast quadrant; multiple and bilateral lesions can occur.",
      "Usually presents as a palpable, mobile mass; large lesions may cause breast distortion or asymmetry.",
    ],
    criteria: [
      "Circumscribed biphasic proliferation of stromal and epithelial elements.",
      "Intracanalicular and/or pericanalicular architecture.",
      "No stromal overgrowth.",
      "No well-developed leaf-like stromal fronds.",
      "No significant stromal atypia and low stromal mitotic activity.",
    ],
    histology: [
      "The lesion is composed of benign ducts and a proliferating specialized stroma.",
      "Pericanalicular growth preserves rounded duct profiles.",
      "Intracanalicular growth compresses ducts into elongated, slit-like spaces.",
      "Stromal cellularity is usually mild but may be increased in pediatric lesions.",
      "Small leaf-like projections and increased stromal mitoses may occur in pediatric fibroadenomas without establishing phyllodes tumor.",
    ],
    ihc: [
      "The epithelial component retains an inner luminal cell layer and an outer myoepithelial cell layer.",
      "p63 and smooth muscle myosin heavy chain can highlight the preserved myoepithelial layer.",
      "Stromal CD34 may be expressed but is not specific.",
    ],
    differential: [
      {
        name: "Juvenile Fibroadenoma",
        distinction:
          "Shows more cellular stroma, often with conspicuous gynecomastia-like usual ductal hyperplasia and micropapillary tufting; it still lacks well-developed leaf-like fronds and stromal overgrowth.",
      },
      {
        name: "Phyllodes Tumor",
        distinction:
          "Shows exaggerated intracanalicular growth with well-developed leaf-like stromal fronds and stromal hypercellularity; assess atypia, mitoses, stromal overgrowth, and tumor borders.",
      },
    ],
    molecular: [
      "A subset harbors MED12 exon 2 mutations.",
      "TERT promoter mutations were not identified in the pediatric fibroadenomas discussed in the chapter.",
    ],
    pitfalls: [
      "Increased stromal cellularity and occasional small leaf-like projections can occur in pediatric fibroadenoma and do not alone establish phyllodes tumor.",
      "Cytology may not reliably separate a cellular fibroadenoma from phyllodes tumor; correlate with architecture in a core or excision specimen.",
    ],
  },
  {
    name: "Juvenile Fibroadenoma",
    group: "Fibroepithelial Tumors",
    clue: "Circumscribed biphasic lesion with cellular stroma, pericanalicular growth, and gynecomastia-like usual ductal hyperplasia.",
    summary:
      "A fibroadenoma variant occurring predominantly in adolescents, characterized by increased stromal cellularity and prominent usual-type epithelial hyperplasia.",
    clinical: [
      "Usually occurs in adolescent girls, most often after menarche; prepubertal cases also occur.",
      "May occur in any part of the breast and can be multifocal or bilateral.",
      "Presents as a rapidly enlarging, sometimes large mass; lesions larger than 50 mm are termed giant juvenile fibroadenomas.",
      "May cause breast distortion and asymmetry.",
    ],
    criteria: [
      "Circumscribed biphasic neoplasm with epithelial and stromal components.",
      "Predominantly pericanalicular growth, sometimes mixed with intracanalicular areas.",
      "Cellular stroma with usual-type ductal hyperplasia showing gynecomastia-like micropapillary tufting.",
      "No prominent, well-developed leaf-like fronds.",
      "No stromal atypia, stromal overgrowth, or malignant heterologous elements.",
      "Stromal mitotic activity is usually low and should not exceed 5 mitoses/mm².",
    ],
    histology: [
      "The tumor has circumscribed borders and a predominantly pericanalicular architecture.",
      "The stroma is more cellular than in conventional fibroadenoma.",
      "Usual ductal hyperplasia often forms gynecomastia-like micropapillary tufts.",
      "Focal tubular adenoma-like areas may occur.",
      "Rare stromal multinucleated giant cells may be present.",
      "Well-developed leaf-like fronds, stromal overgrowth, and stromal atypia are absent.",
    ],
    ihc: [
      "The epithelial component retains a dual luminal and myoepithelial cell population.",
      "p63 and smooth muscle myosin heavy chain can confirm the preserved myoepithelial layer.",
      "The usual ductal hyperplasia shows a mosaic basal cytokeratin pattern, including CK5/6, and heterogeneous ER expression.",
    ],
    differential: [
      {
        name: "Fibroadenoma",
        distinction:
          "Usually has less cellular stroma and lacks the conspicuous gynecomastia-like micropapillary usual ductal hyperplasia typical of juvenile fibroadenoma.",
      },
      {
        name: "Phyllodes Tumor",
        distinction:
          "Shows well-developed leaf-like stromal fronds and more pronounced stromal hypercellularity; juvenile fibroadenoma lacks the characteristic frond architecture, stromal overgrowth, and stromal atypia.",
      },
    ],
    molecular: [
      "MED12 mutations occur in a subset of juvenile fibroadenomas.",
      "TERT promoter mutations were absent in the juvenile fibroadenomas discussed in the chapter; reported alterations in other genes remain insufficiently established for routine diagnosis.",
    ],
    pitfalls: [
      "Do not diagnose phyllodes tumor based only on increased stromal cellularity or a few small leaf-like projections.",
      "Reserve the term giant for lesions larger than 50 mm; size alone does not define a distinct biologic category.",
    ],
  },
  {
    name: "Phyllodes Tumor",
    group: "Fibroepithelial Tumors",
    clue: "Biphasic fibroepithelial neoplasm with exaggerated intracanalicular growth, hypercellular stroma, and characteristic leaf-like stromal fronds.",
    summary:
      "A fibroepithelial neoplasm classified as benign, borderline, or malignant according to stromal features.",
    clinical: [
      "Uncommon in children and adolescents; may occur in adolescent girls.",
      "Pediatric cases have been reported more often in Black than in White patients in the United States.",
      "Usually presents as a solitary, enlarging breast mass; very large tumors may distort the breast and thin the overlying skin.",
      "Benign, borderline, and malignant categories occur; malignant phyllodes tumor is an important malignant breast tumor in adolescent girls.",
    ],
    criteria: [
      "Biphasic fibroepithelial neoplasm with a dominant intracanalicular growth pattern.",
      "Well-developed leaf-like stromal fronds are lined by luminal epithelial and myoepithelial layers.",
      "Stromal hypercellularity is present.",
      "Classify as benign, borderline, or malignant using stromal cellularity, atypia, mitotic activity, stromal overgrowth, and tumor border characteristics.",
      "Evaluate the entire lesion when possible because grading may be heterogeneous.",
    ],
    histology: [
      "Exaggerated intracanalicular growth produces leaf-like stromal projections into epithelial-lined spaces.",
      "The stromal fronds are capped by benign luminal and myoepithelial cells.",
      "Stromal cellularity is increased, with degree varying by grade.",
      "Benign, borderline, and malignant tumors are distinguished by the degree of stromal atypia, mitotic activity, stromal overgrowth, and border infiltrativeness.",
      "Malignant tumors may show hemorrhage and necrosis.",
    ],
    ihc: [
      "The epithelial-lined fronds retain luminal and myoepithelial layers.",
      "p63 and smooth muscle myosin heavy chain can highlight the myoepithelial layer.",
      "Stromal immunostains are not independently diagnostic; morphology remains central to classification.",
    ],
    differential: [
      {
        name: "Fibroadenoma",
        distinction:
          "Lacks the prominent, well-developed leaf-like stromal fronds and characteristic stromal hypercellularity of phyllodes tumor.",
      },
      {
        name: "Juvenile Fibroadenoma",
        distinction:
          "May be cellular and show small leaf-like projections, but lacks well-developed fronds, stromal overgrowth, and stromal atypia; gynecomastia-like usual ductal hyperplasia favors juvenile fibroadenoma.",
      },
    ],
    molecular: [
      "MED12 mutations have been reported in a subset of benign phyllodes tumors.",
      "TERT promoter mutations were not identified in the benign pediatric phyllodes tumors discussed in the chapter.",
    ],
    pitfalls: [
      "Small leaf-like fronds and increased stromal cellularity can be seen in pediatric fibroadenomas; interpret the complete architectural pattern.",
      "Core biopsy may under-sample heterogeneous lesions and underestimate grade.",
      "Periductal stromal tumor is regarded as a phyllodes tumor subtype with a predominantly pericanalicular pattern.",
    ],
  },
  {
    name: "Juvenile Papillomatosis",
    group: "Benign Proliferative Epithelial Lesions",
    clue: "Combination of duct papillomatosis, multiple apocrine and non-apocrine cysts, duct stasis, and other benign proliferative changes.",
    summary:
      "A benign proliferative breast lesion of young patients, characterized by a distinctive constellation of cystic and papillary epithelial changes.",
    clinical: [
      "Usually affects young women younger than 30 years; median age in the largest series was approximately 21 years.",
      "Female predominance is marked; male cases are extremely rare.",
      "Often arises in the upper outer quadrant but can occur elsewhere in the breast.",
      "Typically presents as a firm, mobile, palpable breast mass; pain and nipple discharge are uncommon.",
      "A positive family history of breast carcinoma is frequent in reported series, particularly in patients with recurrent bilateral lesions.",
    ],
    criteria: [
      "Duct papillomatosis involving multiple ducts.",
      "Multiple apocrine and non-apocrine cysts or ectatic ducts.",
      "Papillary apocrine hyperplasia.",
      "Duct stasis with inspissated secretions and/or foamy macrophages.",
      "Sclerosing adenosis and other benign proliferative changes may accompany the lesion.",
    ],
    histology: [
      "Multiple cysts and ectatic ducts are present, often containing inspissated secretions or foamy macrophages.",
      "Papillary epithelial hyperplasia or papillomatosis commonly involves the ducts.",
      "Cyst linings frequently show flat or papillary apocrine metaplasia.",
      "Usual ductal hyperplasia may be florid and show cribriform or micropapillary patterns.",
      "Apocrine metaplasia and usual ductal hyperplasia merge within lesional cysts.",
      "Dense fibrous stroma, sclerosing adenosis, and fibroadenomatoid change may be present.",
      "Atypical ductal hyperplasia may occur.",
    ],
    ihc: [
      "Usual ductal hyperplasia shows a mosaic staining pattern with basal cytokeratins such as CK5/6.",
      "ER expression is heterogeneous in usual ductal hyperplasia.",
      "p63 highlights preserved myoepithelial cells around ducts and within papillary proliferations.",
    ],
    differential: [
      {
        name: "Intraductal Papilloma",
        distinction:
          "Usually forms a localized papillary lesion with fibrovascular cores; it does not show the characteristic widespread combination of multiple cysts, apocrine metaplasia, duct stasis, and multifocal benign proliferative changes.",
      },
      {
        name: "Fibroadenoma",
        distinction:
          "Is a biphasic stromal and epithelial neoplasm; cysts may occur, but the florid duct papillomatosis, apocrine change, and duct stasis of juvenile papillomatosis are absent.",
      },
    ],
    molecular: [
      "PIK3CA and AKT1 hotspot mutations have been reported in some cases, particularly in the setting of a positive family history, but these alterations are not specific for juvenile papillomatosis.",
    ],
    pitfalls: [
      "Atypical epithelial proliferation can be present; assess carefully for a coexisting in situ or invasive carcinoma.",
      "Cytology alone may not establish the diagnosis; correlate with the clinical setting and tissue architecture.",
      "Incomplete excision may lead to recurrence.",
    ],
  },
  {
    name: "Intraductal Papilloma",
    group: "Benign Proliferative Epithelial Lesions",
    clue: "Papillary epithelial proliferation within a breast duct, supported by fibrovascular cores and a preserved myoepithelial layer.",
    summary:
      "A benign papillary breast lesion included in the pediatric differential diagnosis of a palpable mass or nipple discharge.",
    clinical: [
      "Uncommon in the pediatric age group.",
      "Can occur in either sex, although breast lesions are predominantly encountered in females.",
      "Arises within a breast duct, often in a central or subareolar location.",
      "May present with a palpable mass or nipple discharge.",
    ],
    criteria: [
      "Papillary proliferation within a dilated duct.",
      "Papillae contain fibrovascular cores.",
      "A myoepithelial cell layer is retained along papillary cores and around the involved duct.",
      "Exclude atypical or malignant epithelial proliferation by assessing cytology and architecture.",
    ],
    histology: [
      "Papillary fronds project into a ductal lumen.",
      "Each papilla contains a fibrovascular core.",
      "Myoepithelial cells are present within fibrovascular cores and along the duct periphery.",
      "The epithelial proliferation is usually cytologically bland.",
    ],
    ihc: [
      "p63 and smooth muscle myosin heavy chain highlight myoepithelial cells within papillary cores and at the duct periphery.",
      "CK5/6 and ER can help characterize usual-type epithelial proliferations when atypia is in question.",
    ],
    differential: [
      {
        name: "Juvenile Papillomatosis",
        distinction:
          "Shows multiple cysts, duct ectasia, apocrine metaplasia, duct stasis, and widespread papillary hyperplasia rather than a single localized papillary lesion.",
      },
    ],
    pitfalls: [
      "Do not diagnose a benign papilloma solely from papillary architecture; confirm the distribution of myoepithelial cells and assess for atypia or carcinoma.",
    ],
  },
  {
    name: "Secretory Carcinoma",
    group: "Primary Breast Carcinomas",
    clue: "Microcystic, solid, tubular, and papillary growth with eosinophilic intracellular and luminal secretions; ETV6::NTRK3 fusion is characteristic.",
    summary:
      "A rare primary breast carcinoma and the most frequently described primary carcinoma in the pediatric age group; it usually follows an indolent course.",
    clinical: [
      "Can occur at any age but is the most frequently described primary breast carcinoma in children and adolescents.",
      "Occurs in both sexes, with a strong predominance in females among breast carcinoma patients.",
      "Arises in the breast and usually presents as a palpable mass.",
      "Often has an indolent clinical course, particularly in children and young adults.",
    ],
    criteria: [
      "Characteristic microcystic, solid, tubular, and/or papillary architecture.",
      "Polygonal tumor cells with granular or vacuolated eosinophilic cytoplasm.",
      "Intracytoplasmic and luminal eosinophilic colloid-like secretions.",
      "Demonstration of an ETV6::NTRK3 fusion strongly supports the diagnosis.",
    ],
    histology: [
      "Tumor growth may be microcystic, solid, tubular, or papillary.",
      "Polygonal cells have pink granular or vacuolated cytoplasm.",
      "Eosinophilic colloid-like secretions are present within the cytoplasm and lumina.",
      "Most tumors are histologic grade 1 or 2.",
    ],
    ihc: [
      "S100 and mammaglobin are commonly expressed.",
      "Pan-TRK immunoreactivity may support the diagnosis but should be confirmed molecularly when needed.",
      "The immunophenotype should be interpreted with the characteristic morphology and molecular finding.",
    ],
    differential: [
      {
        name: "Juvenile Papillomatosis",
        distinction:
          "Is a benign multicystic and papillary proliferation with preserved myoepithelial cells; secretory carcinoma shows infiltrative carcinoma and lacks a continuous myoepithelial layer around invasive tumor.",
      },
      {
        name: "Intraductal Papilloma",
        distinction:
          "Retains myoepithelial cells in papillary cores and around the duct; secretory carcinoma is an invasive epithelial malignancy with characteristic secretory cytoplasm and ETV6::NTRK3 fusion.",
      },
    ],
    molecular: [
      "ETV6::NTRK3 fusion is the characteristic, defining molecular alteration.",
      "The fusion may be therapeutically relevant because it involves NTRK3.",
    ],
    pitfalls: [
      "Before diagnosing a primary breast carcinoma in a child, exclude metastasis or direct extension from an extramammary malignancy.",
      "Consider hereditary cancer predisposition when breast carcinoma occurs at a young age.",
    ],
  },
];

const overview = [
  {
    name: "Fibroadenoma",
    group: "Fibroepithelial",
    clue: "Biphasic, circumscribed lesion",
    key: "No well-developed leaf-like fronds or stromal overgrowth",
  },
  {
    name: "Juvenile Fibroadenoma",
    group: "Fibroepithelial",
    clue: "Cellular stroma with gynecomastia-like usual ductal hyperplasia",
    key: "No prominent leaf-like fronds or stromal atypia",
  },
  {
    name: "Phyllodes Tumor",
    group: "Fibroepithelial",
    clue: "Hypercellular stroma with leaf-like fronds",
    key: "Grade by stromal features and tumor border",
  },
  {
    name: "Juvenile Papillomatosis",
    group: "Benign epithelial",
    clue: "Multiple cysts, papillomatosis, apocrine change, and duct stasis",
    key: "Characteristic constellation of benign proliferative changes",
  },
  {
    name: "Intraductal Papilloma",
    group: "Benign epithelial",
    clue: "Localized intraductal papillary proliferation",
    key: "Fibrovascular cores with preserved myoepithelium",
  },
  {
    name: "Secretory Carcinoma",
    group: "Carcinoma",
    clue: "Secretory cytoplasm and eosinophilic luminal material",
    key: "ETV6::NTRK3 fusion",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function BreastTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const searchable = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          searchable.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Pediatric Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Breast Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic approach to pediatric and adolescent breast lesions,
          emphasizing fibroepithelial architecture, benign papillary
          proliferations, and the recognition of rare primary breast carcinoma.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Most pediatric breast masses are benign; architecture and stromal
            features are central to separating fibroepithelial lesions.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical Pattern</th>
                <th className="px-4 py-3">Key Diagnostic Point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.group}</td>
                  <td className="px-4 py-3 text-slate-600">{item.clue}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Start with the clinical and radiologic context.</strong>{" "}
            Ultrasound is generally preferred in children and adolescents;
            correlate the mass with age, pubertal status, and imaging.
          </li>
          <li>
            <strong>2. For a biphasic lesion, assess architecture.</strong>{" "}
            Separate conventional and juvenile fibroadenoma from phyllodes tumor
            by looking for well-developed leaf-like fronds, stromal overgrowth,
            atypia, and mitotic activity.
          </li>
          <li>
            <strong>
              3. For papillary/cystic lesions, assess distribution.
            </strong>{" "}
            Juvenile papillomatosis is a constellation of multifocal cystic and
            benign proliferative changes; intraductal papilloma is usually a
            localized ductal lesion.
          </li>
          <li>
            <strong>
              4. For a malignant epithelial lesion, confirm primary origin.
            </strong>{" "}
            Exclude metastasis or direct extension from an extramammary tumor;
            secretory morphology and ETV6::NTRK3 support secretory carcinoma.
          </li>
        </ol>
      </section>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, markers, or differentials..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            setExpanded(
              expanded.length === entities.length
                ? []
                : entities.map((e) => e.name),
            )
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    <section>
                      <h3 className="mb-2 text-base font-semibold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <div className="space-y-3">
                        {entity.differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {d.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {d.distinction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((pitfall) => (
                          <li key={pitfall}>{pitfall}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>

      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Pediatric breast masses require clinicoradiologic correlation. Because
        most lesions are benign, a conservative approach is generally
        appropriate; suspicious lesions warrant tissue diagnosis and careful
        exclusion of metastatic or directly extending malignancy.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
