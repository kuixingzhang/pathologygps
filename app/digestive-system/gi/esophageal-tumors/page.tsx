"use client";

import { useMemo, useState, type ReactNode } from "react";

type Entity = {
  name: string;
  group: string;
  behavior?: string;
  site?: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc?: string[];
  molecular?: string[];
  differential: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Esophageal Squamous Papilloma",
    group: "Benign Epithelial Tumors and Precursors",
    profile: [
      "Typically presents in middle age (median age approximately 50 years).",
      "Often located in the lower esophagus in Western series; middle esophageal location is more frequent in some Asian populations.",
      "Most patients are asymptomatic; endoscopy may show a small, white, exophytic, wart-like lesion.",
    ],
    criteria: [
      "Papillomatous proliferation of benign squamous epithelium.",
      "Fibrovascular cores are present within the papillary projections.",
      "Cytologic atypia is absent.",
    ],
    histology: [
      "Papillary squamous proliferation supported by fibrovascular cores of lamina propria.",
      "Scattered vacuolated cells with koilocyte-like morphology may be present.",
      "Atypical nuclear features and viral inclusions are absent.",
      "Growth is usually exophytic but may be endophytic or spiked.",
    ],
    differential: [
      "Squamous dysplasia / squamous cell carcinoma: look for unequivocal cytologic and architectural atypia or invasion.",
      "Verrucous squamous cell carcinoma: broad, bulbous pushing invasion and deep keratinization are not features of a benign papilloma.",
    ],
    molecular: [
      "HRAS or KRAS mutations have been reported in a subset of cases.",
      "Recent data do not support HPV as a usual etiologic factor.",
    ],
  },
  {
    name: "Epidermoid Metaplasia of the Esophagus",
    group: "Benign Epithelial Tumors and Precursors",
    profile: [
      "Usually diagnosed in the seventh decade; no sex predominance.",
      "May occur anywhere in the esophagus, with approximately half in the lower third.",
      "About half of patients have dysphagia; others are detected incidentally during endoscopic follow-up.",
    ],
    criteria: [
      "Epithelial hyperplasia without atypia.",
      "Prominent granular cell layer.",
      "Superficial compact hyperorthokeratosis.",
    ],
    histology: [
      "Sharply demarcated epithelial lesion with an undulating mucosal contour and flattened rete pegs.",
      "Prominent granular cell layer beneath compact hyperorthokeratosis.",
      "Focal parakeratosis may occur between hypergranulosis and hyperorthokeratosis.",
      "Squamous dysplasia or carcinoma may be adjacent to or associated with the lesion.",
    ],
    differential: [
      "Squamous dysplasia: requires unequivocal cytologic and architectural atypia; epidermoid metaplasia lacks atypia.",
      "Surface keratinization from other causes: the sharply demarcated hyperplastic epithelium with a prominent granular layer supports epidermoid metaplasia.",
    ],
    molecular: [
      "TP53 mutations have been identified in epidermoid metaplasia and associated synchronous or metachronous squamous neoplasia; this supports a precursor relationship but is not a routine diagnostic test.",
    ],
  },
  {
    name: "Esophageal Squamous Dysplasia",
    group: "Benign Epithelial Tumors and Precursors",
    profile: [
      "Most often affects men in the fifth and sixth decades in many populations; distribution and sex ratio vary geographically.",
      "May occur anywhere in the esophagus.",
      "Usually asymptomatic and detected incidentally or during surveillance; larger lesions or associated carcinoma may cause dysphagia or bleeding.",
    ],
    criteria: [
      "Unequivocal squamous epithelial neoplasia without invasion.",
      "Both cytologic atypia and architectural atypia are required.",
      "Low-grade dysplasia predominantly involves the lower half of the epithelium with mild atypia.",
      "High-grade dysplasia involves more than half of the epithelium or shows severe cytologic atypia, regardless of epithelial thickness.",
    ],
    histology: [
      "Cytologic atypia includes nuclear enlargement, pleomorphism, hyperchromasia, loss of polarity, and nuclear overlap.",
      "Architectural atypia is characterized by abnormal epithelial maturation.",
      "Low-grade dysplasia shows mild atypia, largely maintained nuclear polarity, and no atypical mitoses.",
      "High-grade dysplasia shows more extensive epithelial involvement and/or severe atypia.",
    ],
    ihc: [
      "Aberrant p53 expression may support the diagnosis in dysplastic mucosa.",
    ],
    differential: [
      "Reactive / regenerative atypia: lacks the combination of unequivocal cytologic and architectural abnormalities.",
      "Barrett dysplasia: arises in metaplastic glandular epithelium rather than squamous mucosa.",
      "Invasive squamous cell carcinoma: requires evidence of stromal invasion.",
    ],
    molecular: [
      "TP53 and CDKN2A alterations are key molecular drivers; molecular testing is not routinely required for diagnosis.",
    ],
  },
  {
    name: "Barrett Dysplasia",
    group: "Benign Epithelial Tumors and Precursors",
    profile: [
      "Occurs in metaplastic columnar mucosa of the esophagus, usually in patients with Barrett esophagus.",
      "Barrett esophagus is associated with chronic gastro-esophageal reflux, age over 50 years, obesity, male sex, and a first-degree family history.",
      "Dysplasia itself has no distinct clinical symptoms; endoscopy may show a flat, plaque-like, nodular, ulcerated, or irregular mucosal area.",
    ],
    criteria: [
      "Unequivocal glandular neoplastic alteration without invasion, arising in metaplastic esophageal columnar epithelium.",
      "Classify as negative, indefinite, low-grade, or high-grade when appropriate.",
      "High-grade dysplasia may be diagnosed on severe cytologic atypia or marked architectural complexity.",
    ],
    histology: [
      "Abrupt transition from non-dysplastic to dysplastic epithelium, with loss of surface maturation, glandular crowding, architectural complexity, and cytologic atypia.",
      "Intestinal / adenoma-like dysplasia resembles colonic dysplasia, with columnar cells, goblet cells, and enterocyte-like features.",
      "Gastric-type dysplasia shows a single layer of cuboidal or short columnar cells with enlarged, hyperchromatic, irregular basal nuclei; goblet cells may be absent.",
      "Low-grade dysplasia shows nuclear elongation, enlargement, hyperchromasia, and stratification with largely maintained polarity and minimal architectural change.",
      "High-grade dysplasia shows marked atypia, loss of polarity, complex crowded or cribriform glands, back-to-back glands, budding, and sometimes atypical mitoses.",
      "Basal (crypt) dysplasia is confined to the basal third of involved glands; additional levels may reveal surface involvement.",
    ],
    ihc: [
      "Aberrant p53 staining (overexpression or complete loss) is common and may support the presence of dysplasia.",
      "p53 immunohistochemistry can aid diagnosis, but its role in grading is inconclusive; interpret with morphology and appropriate controls.",
    ],
    differential: [
      "Reactive / inflammatory atypia: preserved maturation and polarity favor reactive change; dysplasia shows an abrupt transition and disordered maturation.",
      "Indefinite for dysplasia: use when atypia does not meet criteria for low- or high-grade dysplasia.",
      "Intramucosal adenocarcinoma: requires evidence of invasion, such as fused or anastomosing glands, detached tumor cells, or confluent growth.",
    ],
    molecular: [
      "TP53 inactivation is a key event associated with genomic instability and progression.",
      "Nucleic acid–based molecular assays are not recommended for routine screening or surveillance.",
    ],
  },
  {
    name: "Adenocarcinoma of the Esophagus and Esophagogastric Junction",
    group: "Malignant Epithelial Tumors",
    profile: [
      "Typically presents in the seventh decade and predominantly affects men.",
      "Nearly all esophageal cases arise in the lower esophagus or esophagogastric junction.",
      "Common symptoms include dysphagia, anemia, reflux, weight loss, and pain.",
      "Risk factors include gastro-esophageal reflux disease and obesity; Barrett esophagus is the principal precursor.",
    ],
    criteria: [
      "Invasive carcinoma showing glandular or mucinous differentiation.",
      "Exclude squamous and significant neuroendocrine differentiation.",
      "Use the tumor epicenter and esophagogastric junction landmarks to distinguish esophageal / junctional from proximal gastric primaries.",
    ],
    histology: [
      "Tubular pattern is most common, with irregular single or anastomosing glands lined by atypical epithelium.",
      "Papillary pattern shows papillary architecture; micropapillary areas are rare.",
      "Mucinous pattern shows tumor cells floating in abundant extracellular mucin.",
      "Poorly cohesive / signet-ring cell patterns account for a minority of cases; signet-ring cells contain large intracytoplasmic mucin vacuoles displacing the nucleus.",
      "Enteroblastic differentiation is rare and may show clear cuboidal or columnar cells in tubular, papillary, solid, or yolk sac–like patterns.",
      "Invasion is supported by anastomosing or fused glands, detached single cells in stroma, complex expansile glands, or confluent tumor sheets.",
      "Duplicated muscularis mucosae is a staging pitfall; tumor between the two layers is staged as pT1a.",
      "After neoadjuvant therapy, residual tumor may show cytoplasmic vacuolation, nuclear enlargement or hyperchromasia, apoptosis, and treatment-related stromal changes.",
    ],
    ihc: [
      "Typical profile: CK7+, CK19+, and CDX2+; CK20 is usually negative.",
      "Enteroblastic differentiation may be supported by AFP, glypican-3, and SALL4.",
      "Poorly differentiated adenocarcinoma generally expresses CK7 and CDX2 and lacks squamous markers.",
      "HER2 immunohistochemistry with in situ hybridization for equivocal (2+) results is used for predictive testing.",
      "Mismatch repair protein immunohistochemistry can identify mismatch repair deficiency.",
    ],
    differential: [
      "Poorly differentiated squamous cell carcinoma: usually positive for CK5/6, p63, and p40; adenocarcinoma supports glandular morphology and CK7/CDX2 expression.",
      "Neuroendocrine carcinoma: assess morphology and neuroendocrine markers; distinct components may indicate MiNEN.",
      "Undifferentiated carcinoma: consider when lineage-specific morphology and immunophenotype are equivocal.",
      "Proximal gastric adenocarcinoma: distinguish by the tumor epicenter relative to the esophagogastric junction.",
    ],
    molecular: [
      "Commonly altered genes include TP53, CDKN2A, ARID1A, and SMAD4; these alterations are not individually specific for diagnosis.",
      "ERBB2 (HER2) amplification / overexpression is predictive of response to HER2-targeted therapy.",
      "MSI-high / mismatch repair-deficient status is predictive for immune checkpoint inhibitor therapy in advanced disease.",
      "PD-L1 combined positive score (CPS) is used as an immunotherapy biomarker.",
      "Claudin-18.2 expression in more than 75% of tumor cells is a treatment-selection biomarker.",
    ],
  },
  {
    name: "Esophageal Mucoepidermoid, Adenoid Cystic, and Adenosquamous Carcinomas",
    group: "Malignant Epithelial Tumors",
    profile: [
      "Rare tumors, collectively accounting for less than 1% of primary esophageal carcinomas.",
      "Most often occur in men, at a median age of approximately 60 years.",
      "Dysphagia is the most common presenting symptom.",
      "Mucoepidermoid carcinoma is usually in the middle or distal esophagus; adenoid cystic and adenosquamous carcinomas most often arise in the mid esophagus.",
    ],
    criteria: [
      "Mucoepidermoid carcinoma: variable mixture of malignant mucous, epidermoid, and intermediate cells.",
      "Adenoid cystic carcinoma: biphasic epithelial and myoepithelial neoplasm with cribriform, tubular, or solid architecture and punched-out spaces.",
      "Adenosquamous carcinoma: distinct malignant squamous and glandular components.",
    ],
    histology: [
      "Mucoepidermoid carcinoma contains cysts and sheets of mucin-producing cells, epidermoid cells, and intermediate cells; proportions vary with grade.",
      "Adenoid cystic carcinoma shows inner epithelial and outer myoepithelial cells in cribriform, tubular, or solid patterns.",
      "Adenoid cystic carcinoma pseudolumina contain hyalinized basement membrane material; true glandular lumina contain glycosaminoglycans.",
      "Perineural invasion and lymphovascular permeation are common in adenoid cystic carcinoma.",
      "Adenosquamous carcinoma contains unequivocally malignant squamous and glandular components, separate or intermingled.",
      "Acantholytic change or adenoid / microcystic spaces in otherwise conventional squamous carcinoma do not establish adenosquamous carcinoma.",
    ],
    ihc: [
      "Adenoid cystic carcinoma: myoepithelial cells express p63, p40, S100, SMA, and calponin.",
      "Adenoid cystic carcinoma: epithelial cells express cytokeratin, CEA, and KIT (CD117).",
      "MYB protein overexpression may support adenoid cystic carcinoma.",
    ],
    differential: [
      "Basaloid squamous cell carcinoma: may show pseudoglandular spaces but is composed of one cell population rather than the biphasic epithelial–myoepithelial pattern of adenoid cystic carcinoma.",
      "Conventional squamous cell carcinoma with acantholysis: pseudoglandular spaces alone do not establish a glandular component.",
      "Mucoepidermoid carcinoma versus adenosquamous carcinoma: mucoepidermoid carcinoma has intermediate and mucous cells with a generally bland squamous component; adenosquamous carcinoma has distinctly malignant squamous and glandular components.",
    ],
    molecular: [
      "MAML2 gene rearrangement supports mucoepidermoid carcinoma.",
      "MYB gene rearrangement supports adenoid cystic carcinoma.",
    ],
  },
  {
    name: "Esophageal Squamous Cell Carcinoma",
    group: "Malignant Epithelial Tumors",
    profile: [
      "Median age at diagnosis is approximately 67.5 years.",
      "Most commonly arises in the middle third, followed by the lower third of the esophagus.",
      "Dysphagia is the most common symptom and usually indicates advanced disease; chest pain, odynophagia, and weight loss may occur.",
      "Early lesions may be asymptomatic or detected during surveillance.",
    ],
    criteria: [
      "Histological evidence of invasion by neoplastic squamous epithelium.",
      "Squamous differentiation is characterized by keratinocyte-type cells with intercellular bridges and/or keratinization.",
    ],
    histology: [
      "Grading is based on cytologic atypia, mitotic activity, and keratinization.",
      "Well-differentiated tumors show abundant eosinophilic cytoplasm and keratin pearls, with minimal atypia and low mitotic activity.",
      "Moderately differentiated tumors show more evident atypia, less orderly growth, and readily identifiable mitoses.",
      "Poorly differentiated tumors consist predominantly of basal-like cells in nests or sheets, sometimes with central necrosis.",
      "Verrucous carcinoma shows minimal atypia, prominent papillary surface projections, abrupt keratinization, and broad bulbous pushing invasion.",
      "Sarcomatoid carcinoma is biphasic, with neoplastic squamous epithelium and malignant spindle or pleomorphic cells; heterologous differentiation may occur.",
      "Basaloid carcinoma shows nests or solid areas of basaloid cells, sometimes with comedonecrosis, pseudoglandular / cribriform spaces, and basement membrane–like material.",
      "After neoadjuvant therapy, look for residual viable tumor, fibrosis, necrosis, keratin debris, inflammatory response, and treatment-related vascular changes.",
    ],
    ihc: [
      "p63, p40, and CK5/6 support squamous differentiation when morphology is poorly differentiated.",
      "Neuroendocrine markers or melanocytic markers may be needed to exclude mimics in selected basaloid tumors.",
    ],
    differential: [
      "Adenocarcinoma: shows glandular or mucinous differentiation and typically expresses CK7 / CDX2 rather than squamous markers.",
      "Undifferentiated carcinoma: lacks definite squamous, glandular, or neuroendocrine differentiation.",
      "Adenoid cystic carcinoma: has a biphasic epithelial–myoepithelial population and characteristic cribriform architecture.",
      "Sarcomatoid carcinoma versus true sarcoma: identify the associated neoplastic squamous component and assess epithelial differentiation.",
    ],
    molecular: [
      "TP53 mutation is a key early driver; additional genetic abnormalities accumulate during progression.",
      "Routine molecular testing is not required for the histological diagnosis.",
    ],
  },
  {
    name: "Esophageal Undifferentiated Carcinoma",
    group: "Malignant Epithelial Tumors",
    profile: [
      "Reported cases span 39–86 years, with most patients presenting after the seventh decade; male predominance.",
      "Usually located in the lower esophagus or esophagogastric junction.",
      "Progressive dysphagia is the most common symptom, followed by reflux, weight loss, and anemia.",
    ],
    criteria: [
      "Malignant epithelial tumor without definite squamous, glandular, or neuroendocrine differentiation.",
      "For SWI/SNF-deficient carcinoma, demonstrate loss of one or more SWI/SNF complex proteins.",
      "Lymphoepithelioma-like carcinoma shows undifferentiated epithelioid cells in sheets with a dense lymphoplasmacytic infiltrate.",
    ],
    histology: [
      "Tumor forms variably sized nests and sheets of medium-sized to large cells.",
      "Cells have poorly defined amphophilic to slightly eosinophilic cytoplasm, producing a syncytium-like appearance.",
      "Nuclei are oval and vesicular; pleomorphic giant cells or rhabdoid cells may occur.",
      "Lymphoepithelioma-like carcinoma shows large epithelioid cells with prominent nucleoli and indistinct borders, surrounded by dense lymphoplasmacytic inflammation.",
    ],
    ihc: [
      "Cytokeratin may help establish epithelial lineage.",
      "Use chromogranin A, synaptophysin, and INSM1 to exclude neuroendocrine carcinoma.",
      "Use p63 and p40 to assess poorly differentiated squamous carcinoma.",
      "Assess mucin / glandular differentiation when poorly differentiated adenocarcinoma is in the differential.",
      "Loss of ARID1A, SMARCA4 (BRG1), SMARCA2 (BRM), or SMARCB1 (INI1) supports SWI/SNF-deficient carcinoma.",
    ],
    differential: [
      "Poorly differentiated squamous cell carcinoma: assess p63 and p40 and search for squamous morphology.",
      "Poorly differentiated adenocarcinoma: assess mucin and glandular differentiation.",
      "Neuroendocrine carcinoma: assess neuroendocrine morphology and chromogranin A, synaptophysin, and INSM1.",
      "Melanoma, lymphoma, or sarcoma: exclude with lineage-appropriate studies when cytokeratin expression is absent or equivocal.",
    ],
    molecular: [
      "SWI/SNF complex alterations can be assessed by immunohistochemistry or next-generation sequencing.",
      "EBV is only occasionally detected in esophageal lymphoepithelioma-like carcinoma.",
    ],
  },
];

const categories = [
  "All",
  "Benign Epithelial Tumors and Precursors",
  "Malignant Epithelial Tumors",
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
  if (!items?.length) return null;
  return (
    <ul className="space-y-2">
      {items.map((value, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EsophagealTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Esophageal Adenocarcinoma",
    "Esophageal Squamous Cell Carcinoma",
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter(
      (entity) =>
        (category === "All" || entity.group === category) &&
        [
          entity.name,
          entity.group,
          ...entity.profile,
          ...entity.criteria,
          ...entity.histology,
          ...(entity.ihc ?? []),
          ...(entity.molecular ?? []),
          ...entity.differential,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q),
    );
  }, [query, category]);

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI, Liver & Pancreas / GI / Esophageal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Esophageal Tumors
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Precursor lesions: the key distinction">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Squamous dysplasia:</b> requires both cytologic atypia and
                abnormal epithelial maturation. High-grade dysplasia involves
                more than half the epithelium or shows severe cytologic atypia
                at any thickness.
              </p>
              <p>
                <b>Barrett dysplasia:</b> arises in metaplastic columnar
                epithelium. Assess glandular cytology and architecture, surface
                maturation, and evidence of invasion.
              </p>
              <p>
                <b>Epidermoid metaplasia:</b> shows epithelial hyperplasia
                without atypia, a prominent granular layer, and superficial
                hyperorthokeratosis.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield ancillary studies">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Barrett dysplasia",
                      "p53 IHC may support dysplasia; interpret with morphology",
                    ],
                    [
                      "Squamous dysplasia",
                      "Aberrant p53 may support the diagnosis",
                    ],
                    ["Squamous differentiation", "p40, p63, and CK5/6"],
                    [
                      "Neuroendocrine differentiation",
                      "Synaptophysin, chromogranin A, and INSM1",
                    ],
                    [
                      "SWI/SNF-deficient carcinoma",
                      "ARID1A, BRG1, BRM, and INI1 IHC",
                    ],
                    [
                      "Advanced adenocarcinoma",
                      "HER2, MMR/MSI, PD-L1 CPS, and CLDN18.2",
                    ],
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="py-2 pr-3 font-semibold">{row[0]}</td>
                      <td className="py-2 text-slate-600">{row[1]}</td>
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
                Search by diagnosis, clinical feature, morphology, immunostain,
                or molecular alteration.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. p53, Barrett, keratinization, HER2..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
              aria-label="Search esophageal tumors"
            />
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === item ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((entity) => {
              const isOpen = opened.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggle(entity.name)}
                    aria-expanded={isOpen}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {entity.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {entity.behavior ??
                            (entity.group ===
                            "Benign Epithelial Tumors and Precursors"
                              ? "Benign / precursor lesion"
                              : "Malignant")}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {entity.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {entity.site ?? entity.profile[1]}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse" : "View diagnostic profile"}{" "}
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={entity.profile} />
                        <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={entity.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={entity.histology} />
                        {entity.ihc?.length ? (
                          <>
                            <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                              Immunophenotype
                            </h4>
                            <Bullets items={entity.ihc} />
                          </>
                        ) : null}
                        {entity.molecular?.length ? (
                          <>
                            <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-wider">
                              Molecular pathology
                            </h4>
                            <Bullets items={entity.molecular} />
                          </>
                        ) : null}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {entity.differential.map((entry, index) => {
                                const splitAt = entry.indexOf(":");
                                const label =
                                  splitAt > 0 ? entry.slice(0, splitAt) : entry;
                                const detail =
                                  splitAt > 0
                                    ? entry.slice(splitAt + 1).trim()
                                    : "";
                                return (
                                  <tr key={index}>
                                    <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                      {label}
                                    </td>
                                    <td className="py-3 leading-6 text-slate-700">
                                      {detail}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {entity.pitfalls?.length ? (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic pitfalls
                          </h4>
                          <Bullets items={entity.pitfalls} />
                        </div>
                      ) : null}
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

        <Panel title="High-stakes comparison: squamous versus glandular neoplasia">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Squamous dysplasia</th>
                  <th className="py-2 pr-3">Barrett dysplasia</th>
                  <th className="py-2">Invasive carcinoma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Epithelium</td>
                  <td className="py-2 pr-3">Squamous</td>
                  <td className="py-2 pr-3">Metaplastic columnar</td>
                  <td className="py-2">Squamous or glandular lineage</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Diagnostic basis</td>
                  <td className="py-2 pr-3">
                    Cytologic and architectural atypia
                  </td>
                  <td className="py-2 pr-3">Unequivocal glandular neoplasia</td>
                  <td className="py-2">Histologic evidence of invasion</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Key pitfall</td>
                  <td className="py-2 pr-3">Reactive atypia</td>
                  <td className="py-2 pr-3">Inflammation-related atypia</td>
                  <td className="py-2">
                    Tangential sectioning or duplicated muscularis mucosae can
                    complicate depth assessment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Record the exact esophageal level, tumor epicenter, relationship to the esophagogastric junction, and presence of Barrett mucosa.",
              "For precursor lesions, state the epithelial lineage and grade; distinguish dysplasia from reactive change.",
              "For suspected invasion, assess stromal invasion and lymphovascular invasion; in endoscopic resections, document depth of invasion and margins.",
              "In adenocarcinoma, document histologic pattern and relevant predictive biomarkers when clinically indicated.",
              "After neoadjuvant therapy, assess the entire tumor bed adequately before assigning a complete pathologic response; report tumor regression using the institutional or protocol-specified system.",
              "For poorly differentiated carcinoma, use a focused panel to evaluate squamous, glandular, neuroendocrine, and SWI/SNF-associated differentiation.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference is based
          on the supplied WHO esophageal-tumor material. Ancillary findings
          should be interpreted with morphology, anatomic site, clinical
          context, and appropriate controls. The page is a diagnostic aid and
          does not replace adequate sampling or multidisciplinary correlation.
        </footer>
      </div>
    </main>
  );
}
