"use client";
import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
  prognosis: string[];
};

const entities: Entity[] = [
  {
    name: "Gastrointestinal Stromal Tumor (GIST)",
    group: "KIT / PDGFRA-driven and other molecular subsets",
    behavior:
      "Variable biological behavior; assess risk using site, size, mitotic activity, and tumor rupture rather than soft-tissue sarcoma grade",
    site: "Anywhere in the GI tract: stomach (~55%), small bowel (~32%), colon/rectum (~6%), and esophagus (~1%). Extragastrointestinal examples occur mainly in mesentery, omentum, and retroperitoneum; many represent detached GI primaries or metastases.",
    clinical: [
      "Most often presents in the sixth decade (median 60–65 years); slight male predominance. Small lesions may be incidental microGISTs.",
      "Symptoms include vague abdominal discomfort, bleeding from mucosal ulceration, abdominal mass, or perforation. Advanced disease commonly spreads to peritoneum and liver; bone, skin, and soft-tissue metastases are less frequent and lung metastases are exceedingly rare.",
      "About 10% are disseminated at presentation, sometimes preventing confident assignment of the primary site.",
      "Syndromic settings account for approximately 5–10%: particularly SDH-deficient GIST, and less commonly NF1-associated or familial KIT/PDGFRA-associated disease. NF1-associated tumors are often multifocal, small-bowel based, and KIT/PDGFRA wildtype.",
    ],
    criteria: [
      "Essential: an intramural, submucosal, or subserosal GI mass with spindle-cell, epithelioid, or mixed morphology and KIT (CD117) and/or DOG1 expression.",
      "Desirable: demonstration of a KIT or PDGFRA pathogenic variant (present in approximately 85% of tumors). Molecular testing is particularly important in KIT/DOG1-equivocal cases and for predictive treatment assessment.",
      "Interpret KIT and DOG1 with morphology and site. Strong diffuse KIT is typical, but a small minority (<5%), especially PDGFRA-mutant tumors, may be KIT-negative or only minimally positive.",
      "A diagnosis of GIST should not be based on KIT positivity alone; integrate the complete phenotype and exclude mimics.",
    ],
    morphology: [
      "Spindle-cell morphology predominates, especially in gastric GIST; epithelioid morphology occurs in approximately 20–25% of gastric cases. Mixed spindle and epithelioid patterns also occur. Nuclear pleomorphism is uncommon.",
      "Spindle-cell patterns include conventional fascicular/sheet-like growth, sclerosing (often in small tumors and sometimes calcified), palisaded-vacuolated, and diffuse hypercellular patterns.",
      "Epithelioid GIST may be sclerosing, discohesive, hypercellular (occasionally pseudopapillary), or rarely sarcomatous. Myxoid stroma may be present.",
      "Small-intestinal and colonic GISTs are usually spindle-cell tumors in diffuse sheets or vague storiform arrays. Skeinoid collagen fibers are particularly associated with tumors of low biological potential.",
      "Additional intestinal features include neuropil-like anuclear areas, nuclear palisading, perivascular hyalinization, and regressive vascular changes (dilated/thrombosed vessels, hemosiderin, and fibrosis). Rectal GISTs are usually spindle-cell.",
      "Large tumors may show hemorrhage, cystic degeneration, or necrosis. Rarely, high-grade sarcomatoid dedifferentiation develops de novo or after imatinib, sometimes with loss of KIT and heterologous epithelial, myogenic, or angiosarcomatous differentiation.",
    ],
    ihc: [
      "KIT (CD117): usually strong and diffuse; staining may be cytoplasmic, membrane-associated, or perinuclear dot-like. A negative result does not exclude GIST, particularly in PDGFRA-mutant tumors.",
      "DOG1 (ANO1): similarly sensitive and specific; can identify a substantial proportion of KIT-negative GISTs. Use as a complementary key marker.",
      "CD34: common in spindle-cell GIST, especially gastric tumors; less consistently expressed in epithelioid examples.",
      "PDGFRA: often strong/diffuse with paranuclear dot-like accentuation in PDGFRA-mutant GIST.",
      "SMA and h-caldesmon may be positive; S100 may be expressed in some tumors. Desmin and keratins are rare. These variable markers should not override the KIT/DOG1-centered profile and morphology.",
    ],
    molecular: [
      "Approximately 85% harbor mutually exclusive activating KIT or PDGFRA variants, causing ligand-independent receptor tyrosine kinase activation and downstream RAS/MAPK and PI3K/AKT/mTOR signaling.",
      "KIT (~75%): exon 11 is most common (~66% overall; deletions, substitutions, and indels), followed by exon 9 (~6%; usually p.(Ala502_Tyr503dup), enriched in small-intestinal tumors). Exon 13 p.(Lys642Glu) and exon 17 p.(Asn822Lys) are uncommon.",
      "PDGFRA (~10%): most commonly exon 18 (~8% overall), especially p.(Asp842Val); exon 12 and 14 variants are rare. PDGFRA-mutant tumors are usually gastric and have a lower metastatic risk overall than KIT-mutant tumors.",
      "Rare alternatives include NF1, BRAF, or KRAS alterations; very rare tumors harbor NTRK3, FGFR1, or ALK fusions. KIT/PDGFRA/BRAF-wildtype and NF1-associated tumors are generally not imatinib-sensitive.",
      "Progression is associated with stepwise chromosomal losses (14q, 22q, 1p, 15q); higher-risk tumors may acquire CDKN2A, TP53, and RB1 inactivation. DMD inactivation is a late event found in nearly all metastatic GISTs.",
      "Secondary KIT mutations in exons 13/14 or 17/18 are important mechanisms of acquired imatinib resistance and may be polyclonal.",
    ],
    differential: [
      [
        "SDH-deficient GIST",
        "Usually gastric, often epithelioid, multinodular/plexiform and sometimes multifocal; KIT and DOG1 remain strong, but SDHB is lost (with SDHA loss only in SDHA-mutant cases). KIT/PDGFRA mutations are absent. See separate profile below.",
      ],
      [
        "PDGFRA-mutant GIST versus SDH-deficient GIST",
        "Both may be gastric and epithelioid. PDGFRA-mutant tumors may show weak/focal or absent KIT and strong PDGFRA; SDH-deficient tumors show loss of SDHB with retained KIT and DOG1. Genotyping and SDH IHC resolve the distinction.",
      ],
      [
        "Smooth-muscle neoplasm (leiomyoma / leiomyosarcoma)",
        "GIST may show SMA or h-caldesmon, but desmin is rare and KIT/DOG1 support GIST. A smooth-muscle phenotype with diffuse desmin and absence of KIT/DOG1 should prompt consideration of smooth-muscle tumor; correlate with the supplied morphology and panel.",
      ],
      [
        "Schwannian neoplasm",
        "S100 can be expressed in a subset of GISTs, so S100 alone is not exclusionary. A diffuse Schwannian phenotype with absent KIT/DOG1 favors a nerve-sheath lesion; the supplied WHO excerpt does not provide a full schwannoma differential panel.",
      ],
      [
        "Gastric glomus tumor",
        "A relevant gastric mesenchymal mimic. Use morphology and a differential-directed panel: GIST is usually KIT/DOG1-positive, whereas glomus tumor shows smooth-muscle differentiation; occasional gastric glomus tumors may express synaptophysin.",
      ],
      [
        "Other mesenchymal masses / extragastrointestinal GIST",
        "For mesenteric, omental, or retroperitoneal lesions, determine whether a GI attachment or primary is present. Many reported extragastrointestinal GISTs may represent detached gastric tumors or metastases rather than a truly de novo extra-GI primary.",
      ],
    ],
    pitfalls: [
      "Do not apply FNCLCC soft-tissue sarcoma grading to GIST. Risk assessment is based principally on mitotic activity, size, and anatomic site, with tumor rupture as an additional adverse factor.",
      "Count mitoses in 5 mm², not an assumed number of high-power fields: this commonly corresponds to approximately 20–25 fields with a 40× objective, depending on microscope field diameter.",
      "A KIT-negative result does not exclude GIST; add DOG1 and consider PDGFRA-mutant disease. Conversely, KIT positivity alone is not sufficient for diagnosis.",
      "Do not infer benign behavior from small size or low mitotic activity without considering site and molecular subtype. Intestinal GISTs are generally more unpredictable than gastric tumors.",
      "Tumor rupture is an adverse prognostic factor and must be documented.",
    ],
    prognosis: [
      "The best-established risk variables are mitotic activity (per 5 mm²), tumor size, and anatomic site. Gastric and rectal GISTs have higher local recurrence rates than small-bowel GISTs, while small-bowel tumors have higher rates of abdominal dissemination/metastasis.",
      "KIT-mutant tumors tend to behave more aggressively than PDGFRA-mutant or triple-wildtype tumors. Mutation subtype also has predictive value: KIT exon 11 has the highest imatinib response; KIT exon 9 may benefit from higher-dose imatinib; PDGFRA p.(Asp842Val) is primarily resistant.",
      "Secondary KIT mutations are associated with acquired resistance. Sunitinib, regorafenib, and ripretinib have activity in selected resistant disease; avapritinib has activity in advanced PDGFRA p.(Asp842Val)-mutant disease.",
      "Risk models/nomograms may integrate site, size, and mitotic count as continuous variables.",
    ],
  },
  {
    name: "SDH-Deficient GIST",
    group: "Distinct molecularly defined GIST type",
    behavior:
      "Metastatic potential is not reliably predicted by size or mitotic rate; metastases may nevertheless follow an indolent course",
    site: "Almost exclusively gastric in well-characterized cases. Often multifocal and multinodular/plexiform.",
    clinical: [
      "A key diagnosis in children, adolescents, and young adults; median age in young-adult series approximately 22 years, with female predominance. It accounts for the overwhelming majority of pediatric GISTs.",
      "Multifocality, young age, gastric location, and lymph-node metastases are important clinical clues, although some cases are indistinguishable clinically from other GISTs.",
      "May be syndromic: Carney-Stratakis syndrome (germline SDHx pathogenic variant) or Carney triad (SDHC promoter epimutation; GIST, paraganglioma, and pulmonary chondroma).",
    ],
    criteria: [
      "Essential: epithelioid morphology, loss of SDHB expression by immunohistochemistry, and expression of KIT and/or DOG1.",
      "Loss of SDHB is required regardless of which SDH-complex subunit is affected. KIT and DOG1 are usually strongly and diffusely expressed, despite absence of KIT and PDGFRA mutations.",
      "SDHA IHC helps subclassify: loss of SDHA accompanies SDHA-associated tumors; SDHA is retained in tumors associated with SDHB, SDHC, or SDHD variants and in SDHC epimutation.",
      "Confirm that non-neoplastic cells provide an internal positive control before interpreting tumor-cell SDHB/SDHA loss.",
    ],
    morphology: [
      "Typically gastric, centered in muscularis propria, relatively circumscribed but unencapsulated, and often pushes toward mucosal and serosal surfaces.",
      "Multifocality and multinodular/plexiform growth are characteristic clues; a rich capillary network and epithelioid predominance (sometimes nested) are common.",
      "Lymph-node metastases are more frequent than in conventional GIST and may be present despite a small primary tumor and low mitotic activity.",
      "Most tumors retain the general GIST phenotype; rare aggressive dedifferentiated tumors may show focal or complete loss of KIT and DOG1, with sarcomatoid morphology.",
    ],
    ihc: [
      "SDHB: complete loss of granular cytoplasmic staining in tumor cells is the defining IHC finding. Internal non-neoplastic elements must show convincing granular cytoplasmic positivity.",
      "SDHA: loss supports an SDHA-associated tumor; retained expression is expected with SDHB/SDHC/SDHD alterations and SDHC epimutation.",
      "Beware weak, diffuse, non-granular cytoplasmic blush in tumor cells. This is not equivalent to the strong, granular mitochondrial staining in internal controls and may still represent true SDH deficiency.",
      "KIT and DOG1: typically strong and diffuse, helping distinguish SDH-deficient GIST from some PDGFRA-mutant epithelioid GISTs, which often show weak/focal or absent KIT.",
      "Interpret SDHB carefully in small biopsies and cell blocks; insufficient internal controls should lead to a cautious/inconclusive interpretation rather than a false call of loss.",
    ],
    molecular: [
      "SDH-deficient GIST lacks KIT and PDGFRA mutations. SDH IHC is considered equally informative as SDH molecular testing for identifying deficiency.",
      "Approximately 30% are associated with germline SDHA pathogenic variants; approximately 20% with germline SDHB, SDHC, or SDHD variants; approximately 50% with postzygotic systemic SDHC promoter hypermethylation (epimutation).",
      "SDH complex (mitochondrial complex II) comprises SDHA, SDHB, SDHC, and SDHD; SDHAF2 supports SDHA flavination. Dysfunction destabilizes the complex, causing SDHB protein degradation and succinate accumulation.",
      "Succinate acts as an oncometabolite and contributes to hypoxic signaling and epigenetic reprogramming, including MGMT promoter hypermethylation.",
      "Consider genetic counseling/testing for SDH-associated syndromes, including evaluation for paraganglioma/pheochromocytoma, SDH-deficient renal carcinoma, and pulmonary chondroma.",
    ],
    differential: [
      [
        "Conventional KIT/PDGFRA-mutant epithelioid GIST",
        "Both can be gastric and epithelioid. SDH-deficient GIST shows SDHB loss, often multifocal/plexiform growth and strong KIT/DOG1; KIT/PDGFRA mutations are absent. PDGFRA-mutant tumors may show weak/focal or absent KIT and retain SDHB.",
      ],
      [
        "PDGFRA-mutant GIST",
        "This is the most important molecular/IHC distinction in an epithelioid gastric GIST. Use SDHB (and SDHA) IHC plus KIT/PDGFRA genotyping; morphology alone may not reliably separate them.",
      ],
      [
        "Gastric glomus tumor",
        "Both are gastric mesenchymal tumors and can enter the differential. Strong KIT/DOG1 and SDHB loss support SDH-deficient GIST; smooth-muscle marker expression and glomus-cell/perivascular morphology support glomus tumor.",
      ],
      [
        "Other gastric mesenchymal tumors",
        "Use morphology and a targeted IHC panel rather than site alone. The supplied WHO excerpt specifically emphasizes KIT/DOG1 and SDH IHC; it does not provide a comprehensive marker-by-marker differential for all gastric mesenchymal mimics.",
      ],
      [
        "Dedifferentiated SDH-deficient GIST",
        "Rare aggressive sarcomatoid tumors may lose KIT and DOG1. In a gastric sarcoma with suggestive history/morphology, consider dedifferentiation and review prior material; focal loss is reported in aggressive cases.",
      ],
    ],
    pitfalls: [
      "Do not use tumor size and mitotic rate to reassure against metastatic potential: small, mitotically inactive SDH-deficient GISTs may metastasize.",
      "Lymph-node spread, uncommon in conventional GIST, is a recognized feature of SDH-deficient GIST.",
      "Do not interpret SDHB as lost unless internal non-neoplastic positive controls are present. Distinguish granular mitochondrial staining from weak diffuse cytoplasmic blush.",
      "SDHA retention does not exclude SDH deficiency; SDHA is retained in most non-SDHA-associated cases.",
      "KIT/DOG1 positivity does not distinguish conventional from SDH-deficient GIST. The SDHB/SDHA profile and mutation status are decisive.",
      "Do not equate metastatic spread with rapidly fatal disease; metastases may be indolent and long-term disease-specific survival can remain high.",
    ],
    prognosis: [
      "Unlike conventional KIT/PDGFRA-mutant GIST, size and mitotic rate do not reliably predict outcome. Metastatic disease may be indolent despite substantial cumulative metastatic rates.",
      "Reported metastatic rates can be high, including lymph-node involvement, while disease-specific survival exceeds 80% at 10 and 15 years in reported series.",
      "SDH-deficient tumors do not respond to imatinib. Some activity has been reported with next-generation TKIs such as regorafenib; temozolomide has been explored in the setting of MGMT promoter hypermethylation, with early promising results.",
      "Additional KRAS or TP53 mutations and chromosome 1q amplification have been associated with worse outcomes.",
      "Because of multifocality, metachronous tumors, and syndromic associations, lifelong surveillance is indicated even when germline sequencing does not identify a pathogenic variant.",
    ],
  },
];

const groups = [
  "All",
  "KIT / PDGFRA-driven and other molecular subsets",
  "Distinct molecularly defined GIST type",
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

export default function GastrointestinalStromalTumorPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Gastrointestinal Stromal Tumor (GIST)",
    "SDH-Deficient GIST",
  ]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            x.site,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flat(),
            ...x.pitfalls,
            ...x.prognosis,
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
            PathologyGPS / Gastrointestinal Pathology / Mesenchymal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Gastrointestinal Stromal Tumor
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference emphasizing essential
                criteria, KIT/DOG1 immunophenotype, molecular classification,
                SDH deficiency, and practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish GIST by morphology and KIT/DOG1, then determine the
                molecular subtype.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                In an epithelioid gastric tumor, SDHB IHC is critical:
                SDH-deficient GIST retains KIT/DOG1 but loses SDHB.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: morphology to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "1. Establish the site",
                "Record exact GI segment, mural layer, size, multifocality, and whether the lesion is truly extragastrointestinal or attached to a GI primary.",
              ],
              [
                "2. Identify the pattern",
                "Spindle, epithelioid, or mixed; note gastric plexiform/multinodular architecture, skeinoid fibers, sclerosis, palisading, and vascular changes.",
              ],
              [
                "3. Confirm GIST phenotype",
                "KIT and DOG1 are the key markers. Remember that a minority of GISTs, especially PDGFRA-mutant tumors, may be KIT-negative.",
              ],
              [
                "4. Separate SDH-deficient GIST",
                "In gastric epithelioid or multifocal disease, perform SDHB IHC with internal controls; add SDHA and molecular work-up as indicated.",
              ],
              [
                "5. Assess risk and report",
                "For conventional GIST, count mitoses per 5 mm² and integrate size, site, and rupture. Do not apply FNCLCC grading or conventional risk rules to SDH-deficient GIST.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield diagnostic criteria">
            <Bullets
              items={[
                "Conventional GIST: GI mural/submucosal/subserosal mass; spindle, epithelioid, or mixed morphology; KIT and/or DOG1 expression.",
                "SDH-deficient GIST: epithelioid morphology; loss of SDHB; KIT and/or DOG1 expression; absence of KIT/PDGFRA mutations.",
                "KIT negativity does not exclude GIST. DOG1 can rescue a subset of KIT-negative cases.",
                "SDHB loss must be judged against granular cytoplasmic staining in non-neoplastic internal controls.",
              ]}
            />
          </Panel>
          <Panel title="Critical distinction: conventional vs SDH-deficient">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Feature</th>
                    <th className="py-2 pr-3">Conventional GIST</th>
                    <th className="py-2">SDH-deficient GIST</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Typical age",
                      "Usually older adults",
                      "Children / young adults enriched",
                    ],
                    [
                      "Site",
                      "Any GI site; stomach most common",
                      "Almost always stomach",
                    ],
                    [
                      "Morphology",
                      "Often spindle; gastric epithelioid subset",
                      "Often epithelioid, plexiform/multinodular",
                    ],
                    ["KIT / DOG1", "Usually positive", "Strong and diffuse"],
                    ["SDHB", "Retained", "Lost"],
                    [
                      "KIT / PDGFRA variants",
                      "~85% have KIT or PDGFRA",
                      "Absent",
                    ],
                    [
                      "Risk assessment",
                      "Size + mitoses + site; rupture adverse",
                      "Size and mitoses do not reliably predict",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 pr-3 text-slate-700">{r[1]}</td>
                      <td className="py-2 text-slate-700">{r[2]}</td>
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
                Search by morphology, site, immunomarker, gene, or differential
                diagnosis.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. DOG1, SDHB, PDGFRA D842V, skeinoid fibers..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {groups.map((c) => (
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
                      {open ? "Collapse −" : "View diagnostic profile +"}
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
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunohistochemistry
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[650px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, i) => (
                                <tr key={i}>
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
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Prognosis and behavior
                        </h4>
                        <Bullets items={p.prognosis} />
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
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
        <Panel title="Differential diagnosis: practical decision points">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Diagnostic problem</th>
                  <th className="py-2 pr-3">Features favoring GIST</th>
                  <th className="py-2">Most useful next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "KIT-negative suspected GIST",
                    "Compatible GI mural tumor; DOG1 may remain positive",
                    "DOG1 IHC; consider PDGFRA mutation testing",
                  ],
                  [
                    "Gastric epithelioid GIST",
                    "Epithelioid cells with KIT/DOG1 expression",
                    "SDHB IHC; add SDHA and KIT/PDGFRA genotyping",
                  ],
                  [
                    "Gastric mesenchymal tumor with smooth-muscle phenotype",
                    "KIT/DOG1 expression supports GIST; SMA/h-caldesmon may overlap",
                    "Use a panel and interpret desmin, KIT, DOG1 with morphology",
                  ],
                  [
                    "Multifocal gastric GIST in a young patient",
                    "Plexiform/multinodular growth, epithelioid cells, lymph-node spread",
                    "SDHB/SDHA IHC and genetic counseling assessment",
                  ],
                  [
                    "Mesenteric/omental/retroperitoneal GIST-like mass",
                    "GIST phenotype but no obvious mural primary",
                    "Search for attachment, detached primary, or occult metastatic GI GIST",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-3 font-semibold">{r[0]}</td>
                    <td className="py-3 pr-3 text-slate-700">{r[1]}</td>
                    <td className="py-3 text-slate-700">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Risk assessment and reporting checklist">
          <Bullets
            items={[
              "Record exact anatomic site, tumor size, multifocality, mural layer, and whether the lesion is primary GI or extragastrointestinal.",
              "Document spindle, epithelioid, or mixed morphology and relevant pattern (plexiform, sclerosing, hypercellular, palisaded-vacuolated, skeinoid fibers).",
              "Report KIT and DOG1 results; in epithelioid gastric tumors, multifocal tumors, or young patients, assess SDHB and consider SDHA.",
              "For conventional GIST, count mitoses in 5 mm² and report tumor size, site, and rupture status. Do not substitute FNCLCC grade.",
              "For SDH-deficient GIST, explicitly state that conventional size/mitotic risk models are not reliably predictive; recommend consideration of SDH-syndrome evaluation and lifelong surveillance.",
              "In advanced or recurrent disease, mutation subtype and secondary KIT mutations may be relevant to predictive treatment assessment.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference is based
          on the supplied WHO excerpt. The differential diagnosis emphasizes
          distinctions supported by that source; it is not an exhaustive catalog
          of every gastric or intestinal mesenchymal mimic. Ancillary findings
          must be interpreted with morphology, site, and appropriate internal
          controls.
        </footer>
      </div>
    </main>
  );
}
