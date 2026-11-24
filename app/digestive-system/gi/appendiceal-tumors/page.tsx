"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  essential: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const items: Item[] = [
  {
    name: "Appendiceal Serrated Lesions",
    group: "Benign / Precursor",
    behavior: "Non-dysplastic or dysplastic epithelial precursor",
    site: "Throughout the appendix; hyperplastic polyps and sessile serrated lesions may be incidental.",
    clinical: [
      "Usually identified incidentally in appendectomy specimens.",
      "Most patients are older adults, generally 60–80 years; men and women are affected at nearly equal frequency.",
      "Dysplastic lesions, especially those with traditional serrated adenoma-like dysplasia, may obstruct the lumen and present with appendicitis.",
    ],
    essential: [
      "Hyperplastic polyp: polypoid proliferation of non-dysplastic serrated crypts with goblet and non-goblet columnar cells containing tiny mucin vesicles.",
      "Sessile serrated lesion (SSL): architecturally distorted, serrated crypts with preserved lamina propria and no overt dysplasia.",
      "Serrated dysplasia: serrated crypts lined by dysplastic epithelium; dysplasia may be conventional, serrated, traditional serrated adenoma-like, or unclassified.",
    ],
    morphology: [
      "Hyperplastic polyp: elongated crypts with luminal serration and increased goblet cells; deep crypt architecture remains normal.",
      "SSL: circumferential mucosal involvement by elongated crypts with serration extending to the bases.",
      "SSL crypts may be dilated near the muscularis mucosae and show L-shaped or inverted T-shaped profiles.",
      "Dysplastic components may show conventional villous dysplasia, serrated dysplasia, or traditional serrated adenoma-like architecture.",
      "Traditional serrated adenoma-like dysplasia shows slit-like serration and villous projections lined by tall eosinophilic columnar cells.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Postinflammatory mucosal hyperplasia",
        "Goblet cell-rich epithelium, Paneth cells, well-formed crypts, preserved lamina propria, and inflammatory changes favor a reactive process.",
      ],
      [
        "LAMN",
        "LAMN shows mucinous epithelial proliferation with reduced lamina propria and mural changes; SSL retains normal appendiceal wall architecture and lacks mural or extra-appendiceal mucin.",
      ],
      [
        "Conventional adenoma",
        "Conventional adenoma shows intestinal-type dysplasia without the defining serrated crypt architecture.",
      ],
    ],
    pitfalls: [
      "Do not diagnose an SSL or hyperplastic polyp in circumferential reactive mucosal hyperplasia after appendicitis or in diverticular disease.",
      "Serrated architecture alone does not establish LAMN; assess cytology, lamina propria, muscularis mucosae, and mural changes.",
      "Appendiceal serrated lesions are associated with an increased risk of colorectal neoplasia.",
    ],
  },
  {
    name: "Appendiceal Mucinous Adenoma",
    group: "Benign",
    behavior: "Benign; cured by appendectomy",
    site: "May involve any part of the appendix, focally or diffusely.",
    clinical: [
      "Usually asymptomatic and found incidentally on imaging or in an appendectomy specimen.",
      "When associated with acute appendicitis, patients may have right lower quadrant pain, fever, and leukocytosis.",
      "Typically occurs in the sixth decade (median age 55 years; reported range 42–68); men and women are similarly affected.",
    ],
    essential: [
      "Circumferential proliferation of mucin-containing neoplastic columnar cells confined to the mucosa.",
      "Muscularis mucosae remains intact around the entire circumference and is clearly separated from the submucosa.",
      "No pushing or diverticulum-like mural growth, mural mucin pools, extensive mural fibrosis, or extra-appendiceal mucin/epithelium.",
    ],
    morphology: [
      "Epithelium may be filiform, villous, undulating, or flat; lamina propria may be markedly reduced.",
      "Cells are often tall and mucin-rich, with basally oriented small or mildly enlarged hyperchromatic nuclei.",
      "Mitotic figures are infrequent in low-grade areas.",
      "Focal high-grade dysplasia may show cribriform glands, micropapillae, nuclear stratification, loss of polarity, necrosis, and increased mitotic activity.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "LAMN / HAMN",
        "Incomplete or disrupted muscularis mucosae, pushing or diverticulum-like growth, mural mucin, fibrosis/hyalinization, or extra-appendiceal mucin favors an appendiceal mucinous neoplasm.",
      ],
      [
        "Postinflammatory mucosal hyperplasia",
        "Reactive epithelium is goblet cell-rich, often includes Paneth cells, and is supported by well-formed lamina propria.",
      ],
      [
        "Appendiceal serrated lesion",
        "Serrated lesions show complex crypt serration rather than the filiform, villous, or undulating architecture typical of mucinous adenoma.",
      ],
    ],
    pitfalls: [
      "Submit the entire appendix when mucinous adenoma is considered to exclude LAMN or HAMN.",
      "Do not use the obsolete terms mucinous cystadenoma or borderline tumor of the appendix.",
      "Serosal mucin is incompatible with a diagnosis of mucinous adenoma.",
    ],
  },
  {
    name: "Conventional Appendiceal Adenoma",
    group: "Benign",
    behavior: "Benign epithelial neoplasm; HGD is classified as pTis",
    site: "Appendix proper; distinguish from a cecal adenoma extending into the appendiceal orifice.",
    clinical: [
      "Almost always asymptomatic and discovered incidentally in a resection specimen.",
      "May present with appendicitis; rarely causes intussusception or distal appendiceal dilatation.",
      "May occur sporadically or with hereditary syndromes, particularly familial adenomatous polyposis; no characteristic sex or age distribution is specified in the source.",
    ],
    essential: [
      "Tubular, villous, or tubulovillous glandular neoplasm with conventional intestinal dysplasia.",
      "No invasive growth.",
    ],
    morphology: [
      "Enlarged crypts expand the mucosa and show variable size and shape.",
      "Columnar neoplastic cells have minimal or absent cytoplasmic mucin, with occasional goblet cells.",
      "Low-grade dysplasia shows elongated pseudostratified nuclei near the basement membrane without significant architectural complexity.",
      "High-grade dysplasia shows papillary or cribriform complexity, nuclear stratification, loss of polarity, and often prominent nucleoli.",
      "Mucin pools and the mural remodeling characteristic of appendiceal mucinous neoplasms are absent.",
    ],
    ihc: [],
    molecular: [
      "KRAS mutations commonly occur with APC or RNF43 alterations; TP53 mutations are reported, particularly in lesions with high-grade dysplasia.",
    ],
    differential: [
      [
        "Appendiceal mucinous adenoma",
        "Mucinous adenoma has mucin-rich columnar epithelium and an intact circumferential muscularis mucosae.",
      ],
      [
        "LAMN / HAMN",
        "Mucinous neoplasms show characteristic mural remodeling, pushing/diverticulum-like growth, and/or mural or extra-appendiceal mucin.",
      ],
      [
        "Cecal adenoma involving the appendiceal orifice",
        "Establish the epicenter and determine whether the lesion arises in the cecum or the appendix proper.",
      ],
    ],
    pitfalls: [
      "Do not interpret reduced lamina propria alone as evidence of a mucinous neoplasm.",
      "Conventional appendiceal adenomas are not precursors of pseudomyxoma peritonei.",
      "The source reports insufficient evidence to define progression risk by size, villous component, or HGD.",
    ],
  },
  {
    name: "Appendiceal Mucinous Neoplasms (LAMN / HAMN)",
    group: "Neoplasm",
    behavior: "Non-infiltrative neoplasm; peritoneal spread may occur",
    site: "May involve any part of the appendix, focally or diffusely.",
    clinical: [
      "Often asymptomatic and detected on imaging; some patients undergo appendectomy for presumed acute appendicitis.",
      "May present with appendiceal dilatation, right lower quadrant pain, fever, or leukocytosis.",
      "Peritoneal dissemination may cause progressive abdominal distension, a new umbilical hernia, or an abdominal/pelvic mass.",
      "Usually occurs in the sixth decade; women are slightly more frequently affected in reported series.",
    ],
    essential: [
      "Circumferential mucinous epithelial proliferation with decreased lamina propria and characteristic appendiceal wall remodeling.",
      "At least one of the following: disrupted muscularis mucosae, wall hyalinization/fibrosis, pushing or diverticulum-like epithelial growth, mural mucin pools, or extra-appendiceal mucin with or without neoplastic epithelium.",
      "LAMN: low-grade cytologic atypia; HAMN: unequivocal high-grade cytologic features in at least 10% of tumor cells.",
      "No infiltrative-type destructive invasion; its presence supports mucinous adenocarcinoma.",
    ],
    morphology: [
      "LAMN: circumferential replacement by mucin-rich columnar epithelium with filiform, villous, undulating, or flat architecture.",
      "LAMN cells have abundant cytoplasmic mucin and basally oriented mildly enlarged hyperchromatic nuclei; mitoses and apoptotic debris are usually sparse.",
      "Lamina propria and lymphoid tissue are reduced or absent; muscularis mucosae may be focally lost.",
      "Mural changes include dissecting mucin, expansile or diverticulum-like epithelial growth, fibrosis, hyalinization, and calcification.",
      "HAMN: high-grade epithelium may show micropapillary or cribriform growth, epithelial piling, marked nuclear atypia, loss of polarity, frequent mitoses, and necrosis.",
      "Extra-appendiceal mucin may be acellular or contain neoplastic epithelium.",
    ],
    ihc: [],
    molecular: [
      "LAMN commonly harbors KRAS mutations (approximately 60–90%) and GNAS mutations (approximately 50–60%), often together.",
      "KRAS mutations are also common in HAMN; GNAS mutations are more variable.",
      "Microsatellite instability is not a characteristic feature; BRAF mutations are rare.",
    ],
    differential: [
      [
        "Mucinous adenoma",
        "Mucinous adenoma retains an intact muscularis mucosae throughout and lacks mural remodeling or extra-appendiceal mucin.",
      ],
      [
        "Appendiceal diverticular disease / interval appendectomy changes",
        "Reactive crypts retain goblet and Paneth cells, lamina propria, lymphoid tissue, and an intact muscularis mucosae.",
      ],
      [
        "Sessile serrated lesion",
        "SSL retains lamina propria and normal wall-layer separation, without mural or extra-appendiceal mucin.",
      ],
      [
        "Mucinous adenocarcinoma",
        "Destructive infiltrative glands or small dissecting cellular mucin pools with desmoplasia establish invasive adenocarcinoma.",
      ],
    ],
    pitfalls: [
      "Peritoneal dissemination alone does not distinguish HAMN from mucinous adenocarcinoma; evaluate the pattern of invasion.",
      "Examine the entire appendix when the distinction from infiltrative adenocarcinoma is in question.",
      "For peritoneal disease, distinguish acellular mucin from mucin containing neoplastic epithelium.",
      "Avoid spreading luminal mucin onto the serosa during gross examination.",
    ],
  },
  {
    name: "Appendiceal Adenocarcinoma",
    group: "Malignant",
    behavior: "Malignant; infiltrative invasion with metastatic potential",
    site: "Can arise anywhere along the appendix; mucinous, non-mucinous, and signet-ring cell types occur.",
    clinical: [
      "Typically affects adults in the fifth through seventh decades.",
      "Mucinous adenocarcinoma shows a slight female predominance; non-mucinous adenocarcinoma a slight male predominance; signet-ring cell adenocarcinoma a female predominance.",
      "Common presentations include acute appendicitis or abdominal pain; a mass, obstruction, gastrointestinal bleeding, or metastatic symptoms may occur.",
    ],
    essential: [
      "Malignant glandular neoplasm with infiltrative invasion and/or mucin production.",
      "Mucinous adenocarcinoma: infiltrative malignant glands or tumor cells with extracellular mucin comprising more than 50% of the tumor.",
      "Signet-ring cell adenocarcinoma: more than 50% of tumor cells show signet-ring morphology.",
      "Non-mucinous adenocarcinoma: infiltrative malignant glands resembling colorectal adenocarcinoma or another less common pattern.",
    ],
    morphology: [
      "Mucinous adenocarcinoma shows infiltrative glands, cribriform or incomplete glands, or single infiltrative cells in extracellular mucin with desmoplastic stroma.",
      "Small dissecting pools of cellular mucin containing floating tumor nests, glands, or single cells are an additional invasion pattern.",
      "Signet-ring cell adenocarcinoma requires more than 50% signet-ring cells, which may float in mucin pools or infiltrate tissue.",
      "Non-mucinous adenocarcinoma shows irregular or jagged infiltrative glands with desmoplastic stroma; morphology may resemble colorectal adenocarcinoma.",
      "Undifferentiated carcinoma is rare and resembles its colorectal counterpart.",
    ],
    ihc: [],
    molecular: [
      "Mucinous adenocarcinoma frequently harbors KRAS (approximately 55–80%) and GNAS (approximately 30–70%) mutations; co-mutation is common.",
      "TP53 mutations occur across subtypes and are more frequent in non-mucinous adenocarcinoma.",
      "Mismatch repair IHC and/or MSI testing should be performed; deficiency is uncommon overall but may occur, particularly in non-mucinous tumors.",
    ],
    differential: [
      [
        "LAMN / HAMN",
        "LAMN/HAMN show broad pushing or diverticulum-like growth with mural remodeling; adenocarcinoma shows destructive infiltrative invasion and desmoplasia.",
      ],
      [
        "Goblet cell adenocarcinoma",
        "GCA shows intimately admixed goblet-like mucinous, neuroendocrine, and Paneth-like differentiation, often without surface precursor dysplasia.",
      ],
      [
        "Metastatic colorectal adenocarcinoma",
        "Correlate with clinical history, imaging, and distribution; appendiceal primary requires an appropriate appendiceal epicenter.",
      ],
      [
        "Signet-ring cell adenocarcinoma",
        "Use the greater-than-50% signet-ring cell threshold for this subtype.",
      ],
    ],
    pitfalls: [
      "Submit the entire appendix when mucinous neoplasm is in the differential to exclude focal infiltrative invasion.",
      "Do not classify broad pushing invasion with wall hyalinization as destructive infiltrative adenocarcinoma.",
      "For mucinous tumors, report grade and peritoneal disease characteristics; signet-ring cells have adverse prognostic significance.",
    ],
  },
  {
    name: "Appendiceal Goblet Cell Adenocarcinoma",
    group: "Malignant",
    behavior:
      "Malignant amphicrine-like carcinoma; staged as appendiceal adenocarcinoma",
    site: "Any part of the appendix, with a predilection for the distal appendix.",
    clinical: [
      "Mean age at diagnosis is approximately 56 years (reported range 23–90); men and women are affected similarly.",
      "Most commonly presents with acute appendicitis, followed by nonspecific abdominal pain or an abdominal mass.",
      "Metastases most often involve the peritoneum, omentum, abdominal wall, and ovaries.",
    ],
    essential: [
      "Amphicrine-like carcinoma composed of intimately admixed goblet-like mucinous cells with variable neuroendocrine and Paneth-like differentiation.",
      "Low-grade component: cohesive, smooth-contoured tubules or nests with goblet-like mucin, small peripheral nuclei, and no brisk mitotic activity or stromal desmoplasia.",
      "High-grade component: loss of cohesive tubules/nests, infiltrative single cells or single-file growth, complex irregular glands, cribriform or confluent growth, desmoplasia, and marked atypia.",
    ],
    morphology: [
      "Tumor commonly involves the appendiceal wall circumferentially; early disease may be grossly inconspicuous.",
      "Low-grade tumors form cohesive tubules, nests, or clusters resembling intestinal crypts.",
      "Low-grade cells have peripheral small nuclei, intracellular goblet-like mucin, and granular eosinophilic cytoplasm.",
      "High-grade tumors show irregular anastomosing tubules/nests, cribriform structures, single-file or single-cell infiltration, and confluent sheets.",
      "High-grade areas show marked nuclear pleomorphism, frequent mitoses, stromal desmoplasia, and sometimes necrosis.",
      "Perineural invasion is common at all grades; lymphovascular invasion is more frequent in high-grade tumors.",
    ],
    ihc: [
      "Chromogranin and synaptophysin highlight variable numbers of tumor cells but are not required for diagnosis.",
    ],
    molecular: [],
    differential: [
      [
        "Signet-ring cell adenocarcinoma",
        "High-grade GCA retains at least rudimentary clustering and often focal low-grade GCA-like areas; signet-ring cell adenocarcinoma is defined by a predominant signet-ring cell population.",
      ],
      [
        "Conventional / mucinous adenocarcinoma",
        "GCA shows intimately admixed amphicrine-like differentiation and typically lacks precursor dysplasia in the surface epithelium.",
      ],
      [
        "Neuroendocrine carcinoma",
        "GCA has goblet-like mucinous and Paneth-like components; neuroendocrine marker expression is variable and is not required.",
      ],
      [
        "Mucinous carcinoma peritonei",
        "Metastatic GCA usually does not produce abundant mucinous ascites; classify and grade the metastatic tumor as GCA.",
      ],
    ],
    pitfalls: [
      "Do not use the terms goblet cell carcinoid, crypt cell carcinoma, microglandular carcinoma, or adenocarcinoid.",
      "Appendicitis-associated inflammation may increase atypia and architectural distortion; avoid overgrading low-grade GCA.",
      "Grade GCA using the proportion of low-grade and high-grade components; stage it as appendiceal adenocarcinoma.",
      "Perineural invasion is common but is not prognostically significant according to the source.",
    ],
  },
];

const cats = ["All", "Benign / Precursor", "Benign", "Neoplasm", "Malignant"];

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
          {v}
        </li>
      ))}
    </ul>
  );
}

export default function AppendicealTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Appendiceal Mucinous Neoplasms (LAMN / HAMN)",
    "Appendiceal Adenocarcinoma",
    "Appendiceal Goblet Cell Adenocarcinoma",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.site,
            x.behavior,
            ...x.clinical,
            ...x.essential,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.pitfalls,
            ...x.differential.flat(),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI & Liver / Appendiceal Tumors
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Appendiceal Tumors
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="The critical distinction: mucinous adenoma, LAMN/HAMN, and mucinous adenocarcinoma">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">Mucinous adenoma</th>
                    <th className="py-2 pr-3">LAMN / HAMN</th>
                    <th className="py-2">Mucinous adenocarcinoma</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Muscularis mucosae
                    </td>
                    <td className="py-2 pr-3">Intact throughout</td>
                    <td className="py-2 pr-3">Often disrupted/lost</td>
                    <td className="py-2">Variable; infiltrative invasion</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Wall growth</td>
                    <td className="py-2 pr-3">Confined to mucosa</td>
                    <td className="py-2 pr-3">Pushing / diverticulum-like</td>
                    <td className="py-2">
                      Destructive infiltrative glands/cells
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">
                      Mural mucin / fibrosis
                    </td>
                    <td className="py-2 pr-3">Absent</td>
                    <td className="py-2 pr-3">Often present</td>
                    <td className="py-2">
                      May accompany infiltrative cellular mucin
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Desmoplasia</td>
                    <td className="py-2 pr-3">Absent</td>
                    <td className="py-2 pr-3">Not the defining pattern</td>
                    <td className="py-2">Supports destructive invasion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="High-yield molecular pathology">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Appendiceal serrated lesions",
                      "KRAS and BRAF alterations are described, but routine diagnostic molecular testing is not clinically relevant.",
                    ],
                    [
                      "Conventional appendiceal adenoma",
                      "KRAS with APC or RNF43; TP53 may occur, especially in HGD.",
                    ],
                    [
                      "LAMN / HAMN",
                      "KRAS and GNAS are common, particularly in LAMN; MSI is not characteristic.",
                    ],
                    [
                      "Appendiceal adenocarcinoma",
                      "KRAS, GNAS, and TP53; perform MMR IHC and/or MSI testing.",
                    ],
                    [
                      "Goblet cell adenocarcinoma",
                      "No clinically relevant diagnostic molecular test is established in the supplied source.",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold align-top">
                        {r[0]}
                      </td>
                      <td className="py-2 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                Search by entity, clinical presentation, morphology, site,
                marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. LAMN, GNAS, goblet cell, desmoplasia..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}　
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.essential} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        {p.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunophenotype
                            </h4>
                            <Bullets items={p.ihc} />
                          </>
                        )}
                        {p.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {p.pitfalls.length > 0 && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic pitfalls
                          </h4>
                          <Bullets items={p.pitfalls} />
                        </div>
                      )}
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
        <Panel title="Gross examination, sampling, and reporting checklist">
          <Bullets
            items={[
              "Document appendiceal length, diameter, dilatation, wall integrity, perforation, and any mucin on the serosal surface.",
              "Handle suspected mucinous lesions carefully to avoid iatrogenic rupture and displacement of luminal mucin onto the serosa.",
              "Submit the entire appendix when LAMN/HAMN or mucinous adenocarcinoma is in the differential, particularly to identify focal infiltrative invasion.",
              "Sample the appendiceal base, tip, areas of wall thickening/fibrosis, perforation, serosal mucin, and any solid or nodular component.",
              "For extra-appendiceal mucin, document whether it is acellular or contains neoplastic epithelium and record its anatomic distribution.",
              "For adenocarcinoma, report histologic subtype, grade, depth/pattern of invasion, lymphovascular and perineural invasion, margins, and nodal status.",
              "For goblet cell adenocarcinoma, report grade and the proportion of low-grade and high-grade components; stage according to appendiceal adenocarcinoma criteria.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO source excerpt. Molecular findings are included only where the
          source identifies relevant alterations or testing. No IHC profile is
          added where the source does not describe a diagnostic immunophenotype.
          This reference does not replace complete specimen sampling or
          clinicoradiologic correlation.
        </footer>
      </div>
    </main>
  );
}
