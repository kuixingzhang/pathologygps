"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  group: string;
  summary: string;
  morphology: string[];
  ihc: string[];
  differential: string[];
  pitfall?: string;
};

const entities: Entity[] = [
  {
    name: "Partial hydatidiform mole (PHM)",
    group: "Molar gestation",
    summary:
      "Usually a diandric, monogynic triploid gestation with focal villous hydrops and trophoblastic proliferation; embryonic development is usually present.",
    morphology: [
      "A characteristic biphasic villous population: small, fibrotic villi admixed with enlarged, irregularly contoured villi.",
      "Enlarged villi show scalloped or irregular outlines, variable hydropic change, and mild-to-moderate circumferential trophoblastic hyperplasia.",
      "Cistern formation and trophoblastic pseudoinclusions are frequent.",
      "Fetal vessels and nucleated erythrocytes are commonly present in villous stroma; fetal tissue or a gestational sac may be identified.",
      "Morphology overlaps with complete mole, hydropic abortion, chromosomal abnormalities (including trisomy), placental mesenchymal dysplasia, and twin gestation with a coexisting complete mole.",
    ],
    ihc: [
      "p57: usually retained in villous cytotrophoblast and villous stromal cells. This helps distinguish PHM from the usual androgenetic complete mole, but does not establish PHM by itself.",
      "STR genotyping: definitive confirmation by demonstrating diandric triploidy (two paternal complements and one maternal complement).",
      "SNP-based analysis can provide comparable diagnostic accuracy but may require more tissue and be more costly.",
    ],
    differential: [
      "Complete mole: usually diffuse villous enlargement and circumferential trophoblastic hyperplasia with absent p57 in villous cytotrophoblast and stroma.",
      "Hydropic abortion: may show villous edema but lacks the characteristic constellation; p57 is retained. Genotyping may be needed when morphology is equivocal.",
      "Digynic triploidy: can resemble PHM on ploidy analysis or conventional karyotyping; parental-origin testing is needed to distinguish it from diandric PHM.",
      "Other abnormal villous lesions: if criteria are not met, use a descriptive diagnosis such as abnormal villous lesion, unknown ploidy/genotype rather than overcalling PHM.",
    ],
    pitfall:
      "Do not equate triploidy alone with partial mole. The parental origin of the extra haploid set matters. The source identifies STR genotyping as essential for a definitive PHM diagnosis.",
  },
  {
    name: "Complete hydatidiform mole (CHM)",
    group: "Molar gestation",
    summary:
      "Usually an androgenetic, paternal-only conception with diffuse villous trophoblastic proliferation and no embryonic development.",
    morphology: [
      "Well-developed CHM: diffusely enlarged hydropic villi, frequent central cisterns, and pronounced circumferential trophoblastic hyperplasia.",
      "Cytologic atypia and mitotic figures are common; detached atypical trophoblastic fragments may be present.",
      "Very early CHM may have normal-sized villi with irregular, bulbous, or polypoid contours, hypercellular myxoid stroma, and prominent karyorrhexis; trophoblastic hyperplasia may be subtle.",
      "Fetal or non-villous placental tissue is generally absent. Rare exceptions may reflect a coexisting twin/multiple gestation or mosaic/chimeric conception.",
      "Marked implantation-site intermediate trophoblastic cells can occur in CHM and do not, by themselves, establish PSTT or choriocarcinoma.",
    ],
    ihc: [
      "p57: absent in villous cytotrophoblast and villous stromal cells in usual sporadic androgenetic CHM.",
      "Maternal decidua and extravillous trophoblast provide internal positive controls; absence is interpretable only when controls stain appropriately.",
      "STR genotyping: demonstrates an androgenetic genome in sporadic CHM. Rare familial biparental CHM may also lack p57 and requires genetic context.",
    ],
    differential: [
      "PHM: typically p57-retained and has a mixed population of small fibrotic and enlarged scalloped villi; confirm with STR when needed.",
      "Hydropic abortion/non-molar early gestation: may overlap morphologically but usually retains p57 in villous cytotrophoblast and stroma.",
      "Very early CHM: may lack classic diffuse villous enlargement; do not exclude CHM solely because villi are not markedly hydropic.",
      "CHM-associated trophoblastic hyperplasia/exaggerated implantation site: do not misclassify as a separate trophoblastic neoplasm without a discrete destructive tumour pattern.",
    ],
    pitfall:
      "p57 loss is a powerful discriminator, not a stand-alone diagnosis. Confirm adequate internal controls and remember rare familial biparental CHM.",
  },
  {
    name: "Invasive / metastatic hydatidiform mole",
    group: "Molar gestation / GTN",
    summary:
      "A hydatidiform mole, usually complete and less often partial, with myometrial and/or vascular invasion; metastatic lesions contain abnormal molar villi outside the uterus.",
    morphology: [
      "Abnormal hydropic chorionic villi with the underlying molar morphology are present within myometrium and/or uterine vessels.",
      "Vascular invasion may be conspicuous; uterine perforation can occur.",
      "Metastatic disease is diagnosed by identifying molar villi at extrauterine sites, commonly vaginal wall, pelvis, or lung.",
      "Degeneration or necrosis may compromise villous morphology; p57 can assist in selected cases.",
    ],
    ihc: [
      "p57 may help characterize degenerated villi and distinguish an androgenetic complete mole from other villous lesions.",
      "The source does not specify a defining tumour immunophenotype; diagnosis rests on abnormal villi in an invasive or metastatic distribution.",
    ],
    differential: [
      "Choriocarcinoma: destructive malignant trophoblastic proliferation without chorionic villi; look for the biphasic cytotrophoblast/intermediate trophoblast and syncytiotrophoblast pattern.",
      "Non-invasive molar pregnancy: villi are confined to products of conception and do not invade myometrium or vessels.",
      "Placental site trophoblastic tumour: infiltrative intermediate trophoblastic neoplasm, generally without chorionic villi.",
    ],
    pitfall:
      "The presence of villi in myometrium or vessels is the defining clue. Do not diagnose choriocarcinoma when the invasive lesion is composed of molar villi.",
  },
  {
    name: "Placental site trophoblastic tumour (PSTT)",
    group: "Gestational trophoblastic neoplasm",
    summary:
      "A neoplasm of implantation-site-type intermediate trophoblast; serum hCG is often only mildly elevated.",
    morphology: [
      "Infiltrative aggregates or sheets of large, polyhedral to round, predominantly mononuclear implantation-site intermediate trophoblast.",
      "Scattered multinucleated tumour cells are common.",
      "At the periphery, tumour cells infiltrate myometrium singly, in cords, or in nests, separating smooth muscle fibres.",
      "Abundant amphophilic cytoplasm (occasionally eosinophilic or clear), occasional vacuoles, and often pronounced nuclear atypia with large convoluted hyperchromatic nuclei.",
      "Chorionic villi are almost never identified; characteristic vascular invasion may occur, with tumour cells replacing the vascular wall.",
      "Usually low mitotic activity: approximately 1–2 mitoses/mm² in the source.",
    ],
    ihc: [
      "Diffuse: hPL, MUC4, HSD3B1, HLA-G, GATA3, and MCAM/CD146.",
      "Limited: hCG, inhibin, and SALL4.",
      "Ki-67 is generally 10–30%.",
      "STR genotyping can establish gestational origin and distinguish PSTT from somatic neoplasms or rare non-gestational ovarian germ-cell-origin tumours.",
    ],
    differential: [
      "Exaggerated placental site: non-neoplastic implantation-site trophoblastic reaction; interpret the extent and pattern of infiltration, mass formation, cytologic features, and proliferation in context.",
      "ETT: chorionic-type intermediate trophoblast; more circumscribed/nodular, nests and cords, geographic necrosis, hyaline-like material, and p63 positivity.",
      "Choriocarcinoma: biphasic malignant trophoblast with multinucleated syncytiotrophoblast, haemorrhage/necrosis, brisk mitoses, and typically very high Ki-67.",
      "Squamous carcinoma/undifferentiated carcinoma and epithelioid smooth-muscle tumours: use a panel rather than a single marker; genotyping may resolve gestational origin.",
    ],
    pitfall:
      "PSTT is not simply an hPL-positive lesion. The diagnosis requires an invasive, mass-forming intermediate trophoblastic neoplasm and clinicopathologic correlation.",
  },
  {
    name: "Epithelioid trophoblastic tumour (ETT)",
    group: "Gestational trophoblastic neoplasm",
    summary:
      "A malignant neoplasm of chorionic-type intermediate trophoblast, often presenting as a discrete nodule in the lower uterine segment or cervix.",
    morphology: [
      "Well-circumscribed, nodular, expansile proliferation of medium-sized trophoblastic cells; destructive invasion may be present.",
      "Tumour cells form nests and cords, often in a perivascular arrangement, separated by prominent geographic necrosis.",
      "Cells are relatively uniform with moderate finely granular eosinophilic-to-clear cytoplasm, distinct cell borders, round nuclei, and small nucleoli.",
      "Eosinophilic hyaline-like material resembling keratin is characteristic in the centre of nests or between tumour cells; calcification and hemosiderin may occur.",
      "Moderate atypia; mitotic activity is generally low (0–4 mitoses/mm² in the source). Cervical mucosal colonization can mimic HSIL.",
    ],
    ihc: [
      "Positive: p63, α-inhibin, HSD3B1, and GATA3.",
      "Scattered cells: MCAM and hPL.",
      "SALL4 is negative in ETT (helpful against most gestational choriocarcinomas).",
      "Ki-67 is commonly 10–25%; CK/Ki-67 double staining can help assess the tumour-cell proliferation index.",
      "STR genotyping can demonstrate unique paternal alleles and support gestational origin.",
    ],
    differential: [
      "PSTT: implantation-site phenotype; diffuse hPL/MUC4/HLA-G/MCAM and generally limited p63, compared with p63-positive ETT.",
      "Choriocarcinoma: biphasic cytotrophoblast/intermediate trophoblast rimmed by syncytiotrophoblast, marked haemorrhage/necrosis, brisk mitoses, Ki-67 often >90%, and usually SALL4 positivity.",
      "Cervical squamous carcinoma: may be p63-positive and mimic ETT, especially with surface colonization; assess hyaline-like material, trophoblastic markers, morphology, and gestational history.",
      "Atypical placental site nodule: generally a smaller, non-destructive lesion; ETT shows a destructive, mass-forming nodular neoplasm.",
      "Epithelioid leiomyosarcoma: use smooth-muscle markers and trophoblastic markers as a panel.",
    ],
    pitfall:
      "p63 is not specific. A p63-positive cervical tumour is not automatically squamous carcinoma or ETT; correlate with morphology and a trophoblastic marker panel.",
  },
  {
    name: "Gestational choriocarcinoma",
    group: "Gestational trophoblastic neoplasm",
    summary:
      "A malignant tumour composed of neoplastic villous cytotrophoblast, intermediate trophoblast, and syncytiotrophoblast; often associated with markedly elevated hCG.",
    morphology: [
      "Classic biphasic/triphasic pattern: malignant mononuclear villous cytotrophoblast and intermediate trophoblast, rimmed by multinucleated syncytiotrophoblast.",
      "Infiltrative, destructive solid aggregates with marked cytologic atypia and brisk mitotic activity.",
      "Florid haemorrhage, necrosis, and lymphovascular permeation are common.",
      "Chorionic villi are not part of the classic tumour pattern; their presence in an invasive lesion should prompt consideration of invasive mole or a mixed lesion.",
      "Intraplacental choriocarcinoma may be subtle, resembling infarct or thrombus; malignant trophoblast may extend from villi into intervillous space.",
    ],
    ihc: [
      "Neoplastic syncytiotrophoblast/intermediate trophoblast may express hCG, HSD3B1, hPL, inhibin, MCAM, HLA-G, MUC4, and p63.",
      "GATA3 is a broad trophoblastic marker but is not specific.",
      "Most gestational choriocarcinomas express SALL4, unlike ETT and PSTT in the source comparison.",
      "Ki-67 is typically very high, often >90%; PD-L1 expression is strong in syncytiotrophoblastic tumour cells.",
      "STR genotyping can identify unique paternal alleles and distinguish gestational tumour from germ-cell choriocarcinoma or somatic carcinoma with trophoblastic differentiation.",
    ],
    differential: [
      "Invasive mole: abnormal chorionic villi invade myometrium/vessels; choriocarcinoma is a malignant trophoblastic proliferation without villous architecture.",
      "PSTT: mononuclear implantation-site intermediate trophoblast, infiltrative myometrial growth, diffuse hPL/MUC4, usually low hCG and lower Ki-67.",
      "ETT: nodular nests/cords, hyaline-like material, p63+, SALL4−, and lower Ki-67.",
      "Non-gestational germ-cell choriocarcinoma: may be morphologically identical; STR genotyping and clinical context establish origin.",
      "Somatic carcinoma with trophoblastic differentiation: genotyping can help distinguish it from gestational choriocarcinoma.",
    ],
    pitfall:
      "Do not use serum hCG or one immunostain as the diagnosis. The defining morphologic clue is the malignant biphasic trophoblastic population with syncytiotrophoblast.",
  },
  {
    name: "Mixed trophoblastic tumour",
    group: "Gestational trophoblastic neoplasm",
    summary:
      "A gestational trophoblastic tumour containing two or three distinct components of choriocarcinoma, PSTT, and/or ETT.",
    morphology: [
      "Discrete areas of two or three recognisable tumour types are present in the same tumour.",
      "The most common combination in the source is choriocarcinoma plus ETT; less often choriocarcinoma plus PSTT or ETT plus PSTT.",
      "Rare tumours contain all three components.",
      "Each component should independently show the characteristic morphology of its corresponding entity.",
    ],
    ihc: [
      "Each component retains the characteristic immunophenotype of its lineage; use morphology-directed immunohistochemistry rather than expecting one uniform profile.",
      "STR genotyping can establish gestational origin and help exclude germ-cell or somatic tumour origins.",
    ],
    differential: [
      "A single trophoblastic tumour with morphologic variation: require distinct, recognisable components rather than minor phenotypic heterogeneity.",
      "Choriocarcinoma with prominent intermediate trophoblast: assess whether there is a discrete ETT or PSTT component.",
      "Somatic carcinoma with trophoblastic differentiation: consider STR genotyping when origin is uncertain.",
    ],
    pitfall:
      "Sample extensively. A small biopsy may capture only one component and under-classify a mixed tumour.",
  },
];

const quickComparisons = [
  {
    title: "Complete mole vs. partial mole",
    rows: [
      [
        "Villous population",
        "Usually diffuse, relatively uniform villous enlargement",
        "Biphasic: small fibrotic villi plus enlarged irregular villi",
      ],
      [
        "Villous contour / stroma",
        "Marked hydropic change; cisterns; early cases may be bulbous/polypoid with myxoid stroma and karyorrhexis",
        "Scalloped irregular outlines; variable focal hydrops; cisterns and pseudoinclusions",
      ],
      [
        "Trophoblast",
        "Pronounced circumferential hyperplasia in well-developed cases",
        "Mild-to-moderate circumferential hyperplasia, often focal",
      ],
      [
        "Fetal elements",
        "Usually absent",
        "Fetal vessels/nucleated RBCs commonly present; fetal tissue may be present",
      ],
      [
        "p57",
        "Absent in villous cytotrophoblast and villous stromal cells in usual androgenetic CHM",
        "Usually retained in villous cytotrophoblast and stroma",
      ],
      [
        "Genotype",
        "Usually androgenetic (paternal-only)",
        "Usually diandric triploid",
      ],
      [
        "Definitive ancillary test",
        "STR genotyping when needed; p57 is highly useful",
        "STR genotyping demonstrating diandric triploidy",
      ],
    ],
  },
  {
    title: "PSTT vs. ETT vs. choriocarcinoma",
    rows: [
      [
        "Trophoblast lineage",
        "Implantation-site intermediate trophoblast",
        "Chorionic-type intermediate trophoblast",
        "Villous cytotrophoblast + intermediate trophoblast + syncytiotrophoblast",
      ],
      [
        "Architecture",
        "Infiltrative sheets/aggregates; single cells, cords and nests between myometrial fibres",
        "Nodular/expansile nests and cords; perivascular pattern; geographic necrosis",
        "Destructive solid aggregates; biphasic/triphasic pattern",
      ],
      [
        "Cytology",
        "Large polyhedral cells, abundant amphophilic cytoplasm, often marked atypia",
        "Relatively uniform epithelioid cells, eosinophilic/clear cytoplasm, distinct borders",
        "Markedly atypical mononuclear cells plus multinucleated syncytiotrophoblast",
      ],
      [
        "Signature clue",
        "Myometrial infiltration and vascular wall replacement",
        "Hyaline-like material in/around nests",
        "Syncytiotrophoblast rimming malignant mononuclear trophoblast; haemorrhage",
      ],
      [
        "hPL / MUC4",
        "Diffuse",
        "hPL only scattered; MUC4 not listed as a defining marker in source",
        "May be expressed",
      ],
      ["p63", "Not a defining diffuse marker", "Positive", "May be positive"],
      ["SALL4", "Limited", "Negative", "Usually positive"],
      ["Ki-67", "10–30%", "10–25%", "Typically >90%"],
      [
        "Serum hCG",
        "Often low",
        "Often mild-to-moderate elevation",
        "Often markedly elevated",
      ],
    ],
  },
];

function Panel({
  title,
  children,
  accent = "teal",
}: {
  title: string;
  children: React.ReactNode;
  accent?: "teal" | "amber" | "rose" | "slate";
}) {
  const accents = {
    teal: "border-teal-200 bg-teal-50/50",
    amber: "border-amber-200 bg-amber-50/50",
    rose: "border-rose-200 bg-rose-50/50",
    slate: "border-slate-200 bg-white",
  };
  return (
    <section className={`rounded-2xl border ${accents[accent]} p-5 shadow-sm`}>
      <h3 className="mb-3 text-base font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 text-sm leading-6 text-slate-700 list-disc">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function GestationalTrophoblasticDiseasePage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([
    "Partial hydatidiform mole (PHM)",
    "Complete hydatidiform mole (CHM)",
  ]);
  const groups = [
    "All",
    "Molar gestation",
    "Molar gestation / GTN",
    "Gestational trophoblastic neoplasm",
  ];
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (query.trim() === "" ||
            [e.name, e.summary, ...e.morphology, ...e.ihc, ...e.differential]
              .join(" ")
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [query, group],
  );
  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-7 text-white shadow-lg md:p-10">
          <div className="mb-3 inline-flex rounded-full border border-teal-300/40 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
            PathologyGPS · Female Genital Tract
          </div>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-4xl">
            Gestational Trophoblastic Disease
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200 md:text-base">
            A morphology-first diagnostic pathway for molar gestations, invasive
            mole, and gestational trophoblastic neoplasms—with focused
            histology, immunohistochemistry, and differential diagnosis.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <div className="text-2xl font-bold text-teal-200">1</div>
              <div className="mt-1 text-sm text-slate-200">
                Identify villi vs. a villus-free tumour
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <div className="text-2xl font-bold text-teal-200">2</div>
              <div className="mt-1 text-sm text-slate-200">
                Classify the trophoblastic lineage
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <div className="text-2xl font-bold text-teal-200">3</div>
              <div className="mt-1 text-sm text-slate-200">
                Use p57, IHC, and STR appropriately
              </div>
            </div>
          </div>
        </header>

        <section className="mb-8 grid gap-4 lg:grid-cols-3">
          <Panel title="Placental trophoblast: the lineage map">
            <div className="space-y-3 text-sm">
              <div className="rounded-xl bg-white p-3">
                <b className="text-slate-900">Cytotrophoblast</b>
                <p className="mt-1 text-slate-600">
                  Mononuclear, proliferative, stem-cell-like cells.
                </p>
              </div>
              <div className="rounded-xl bg-white p-3">
                <b className="text-slate-900">Syncytiotrophoblast</b>
                <p className="mt-1 text-slate-600">
                  Multinucleated cells with abundant eosinophilic cytoplasm;
                  major hormone-producing component.
                </p>
              </div>
              <div className="rounded-xl bg-white p-3">
                <b className="text-slate-900">Intermediate trophoblast</b>
                <p className="mt-1 text-slate-600">
                  Mononuclear cells; implantation-site, chorionic laeve, and
                  villous-column subtypes.
                </p>
              </div>
            </div>
          </Panel>
          <Panel title="Classification at a glance" accent="slate">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                <b>Molar gestations:</b> complete mole; partial mole.
              </li>
              <li>
                <b>Invasive / metastatic mole:</b> molar villi invading
                myometrium/vessels or present at extrauterine sites.
              </li>
              <li>
                <b>Gestational trophoblastic neoplasms:</b> choriocarcinoma,
                PSTT, ETT, and mixed trophoblastic tumour.
              </li>
              <li>
                <b>Other lesions in the source framework:</b> atypical villous
                lesions, exaggerated placental site reaction, placental site
                nodule/plaque, and atypical placental site nodule.
              </li>
            </ul>
          </Panel>
          <Panel title="Do not confuse GTD with GTN" accent="amber">
            <p className="text-sm leading-6 text-slate-700">
              <b>GTD</b> is the broad disease spectrum. <b>GTN</b> is a clinical
              classification introduced for management and includes persistent
              mole, invasive mole, choriocarcinoma, PSTT, and ETT. A clinical
              diagnosis of postmolar GTN is commonly based on serial serum hCG
              and clinical findings; it does not necessarily identify the exact
              histologic lesion.
            </p>
          </Panel>
        </section>

        <section className="mb-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                Diagnostic GPS
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Start with the specimen: what are you looking at?
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Panel title="A. Chorionic villi are present" accent="teal">
              <ol className="space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  <b>1. Assess villous architecture.</b> Diffuse enlarged
                  hydropic villi with marked circumferential trophoblastic
                  hyperplasia → favour well-developed CHM. Biphasic small
                  fibrotic and enlarged scalloped villi with focal hydrops →
                  favour PHM.
                </li>
                <li>
                  <b>2. Look for early-mole patterns.</b> Bulbous/polypoid
                  villi, hypercellular myxoid stroma, and karyorrhexis can
                  indicate very early CHM even without striking villous
                  enlargement.
                </li>
                <li>
                  <b>3. Perform p57 with internal controls.</b> Loss in villous
                  cytotrophoblast and stroma supports usual androgenetic CHM.
                  Retention is expected in PHM and non-molar gestations.
                </li>
                <li>
                  <b>4. Resolve equivocal cases with STR genotyping.</b>{" "}
                  Androgenetic genome supports CHM; diandric triploidy confirms
                  PHM. Triploidy alone is insufficient.
                </li>
                <li>
                  <b>5. Ask whether villi are invading.</b> Molar villi in
                  myometrium or vessels establish invasive mole; extrauterine
                  molar villi establish metastatic mole.
                </li>
              </ol>
            </Panel>
            <Panel
              title="B. A mass-forming trophoblastic proliferation without villi"
              accent="rose"
            >
              <ol className="space-y-3 text-sm leading-6 text-slate-700">
                <li>
                  <b>1. Is there a classic biphasic pattern?</b> Malignant
                  mononuclear trophoblast rimmed by multinucleated
                  syncytiotrophoblast, with haemorrhage and brisk mitoses →
                  choriocarcinoma.
                </li>
                <li>
                  <b>
                    2. Is the tumour infiltrative and composed of large
                    implantation-site cells?
                  </b>{" "}
                  Sheets/aggregates dissecting myometrium, vascular wall
                  replacement, diffuse hPL/MUC4/HLA-G/MCAM → PSTT.
                </li>
                <li>
                  <b>3. Is it a nodular epithelioid tumour?</b> Nests/cords,
                  geographic necrosis, central hyaline-like material, p63+,
                  SALL4− → ETT.
                </li>
                <li>
                  <b>4. Are there distinct components?</b> Identify and map
                  choriocarcinoma, PSTT, and/or ETT separately → mixed
                  trophoblastic tumour.
                </li>
                <li>
                  <b>
                    5. If gestational origin is uncertain, consider STR
                    genotyping.
                  </b>{" "}
                  This is particularly important against germ-cell tumours and
                  somatic carcinomas with trophoblastic differentiation.
                </li>
              </ol>
            </Panel>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-950">
            The critical histology comparison
          </h2>
          <div className="space-y-5">
            {quickComparisons.map((table) => (
              <div
                key={table.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 bg-slate-100 px-5 py-3">
                  <h3 className="font-semibold text-slate-900">
                    {table.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <tbody>
                      {table.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 ? "bg-slate-50" : "bg-white"}
                        >
                          <th className="w-40 border-b border-slate-200 px-4 py-3 align-top font-semibold text-slate-800">
                            {row[0]}
                          </th>
                          {row.slice(1).map((cell, j) => (
                            <td
                              key={j}
                              className="min-w-48 border-b border-slate-200 px-4 py-3 align-top leading-6 text-slate-700"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Entity reference
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              Histology, IHC & differential diagnosis
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Search an entity or a diagnostic feature. Expand each card for
              morphology, immunophenotype, and the most important mimics.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: scalloping, p57, p63, SALL4, hyaline, vascular invasion..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-teal-500 focus:ring-2"
            />
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-teal-500"
            >
              {groups.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 space-y-3">
            {filtered.map((entity) => {
              const open = expanded.includes(entity.name);
              return (
                <article
                  key={entity.name}
                  className="overflow-hidden rounded-xl border border-slate-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(entity.name)}
                    className="flex w-full items-center justify-between gap-4 bg-slate-50 px-4 py-4 text-left hover:bg-teal-50"
                  >
                    <span>
                      <span className="block font-semibold text-slate-900">
                        {entity.name}
                      </span>
                      <span className="mt-1 block text-xs text-teal-700">
                        {entity.group}
                      </span>
                    </span>
                    <span className="text-xl text-slate-500">
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="space-y-4 p-4">
                      <p className="text-sm leading-6 text-slate-700">
                        {entity.summary}
                      </p>
                      <div className="grid gap-4 lg:grid-cols-2">
                        <div>
                          <h4 className="mb-2 text-sm font-bold text-slate-900">
                            Histologic diagnosis
                          </h4>
                          <BulletList items={entity.morphology} />
                        </div>
                        <div>
                          <h4 className="mb-2 text-sm font-bold text-slate-900">
                            Immunohistochemistry / molecular
                          </h4>
                          <BulletList items={entity.ihc} />
                        </div>
                      </div>
                      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Differential diagnosis
                        </h4>
                        <BulletList items={entity.differential} />
                      </div>
                      {entity.pitfall && (
                        <p className="rounded-lg bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700">
                          <b>GPS pitfall:</b> {entity.pitfall}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <p className="rounded-xl bg-slate-50 p-6 text-center text-sm text-slate-500">
                No matching entity or feature. Try a broader search term.
              </p>
            )}
          </div>
        </section>

        <section className="mb-8 grid gap-4 lg:grid-cols-2">
          <Panel title="Practical IHC / molecular work-up" accent="teal">
            <BulletList
              items={[
                "Suspected molar gestation: p57 on villous cytotrophoblast and villous stromal cells, with maternal decidua/extravillous trophoblast as internal positive controls.",
                "Equivocal PHM vs. non-molar gestation or CHM: STR genotyping to establish parental contribution and ploidy; do not rely on ploidy alone.",
                "Suspected intermediate trophoblastic tumour: choose a panel that includes lineage-associated markers (e.g., hPL, MUC4, HLA-G, MCAM, p63, GATA3, HSD3B1) and Ki-67; interpret patterns, not isolated stains.",
                "Suspected choriocarcinoma: correlate morphology with hCG and other trophoblastic markers; SALL4 and Ki-67 can help in the differential.",
                "Uncertain gestational vs. non-gestational origin: STR genotyping can demonstrate unique paternal alleles from the index pregnancy.",
              ]}
            />
          </Panel>
          <Panel title="Reporting and sampling checkpoints" accent="slate">
            <BulletList
              items={[
                "For villous lesions, describe the villous population, contour, stromal changes, trophoblastic hyperplasia, fetal vessels/RBCs, and p57 result.",
                "If the PHM essential criteria are not met, use a qualified descriptive term such as morphologically abnormal gestation, favour PHM, or abnormal villous lesion—unknown ploidy/genotype, as appropriate to the evidence.",
                "For a suspected invasive mole, document the presence of abnormal villi in myometrium and/or vessels; distinguish this from villus-free trophoblastic neoplasm.",
                "For a mass-forming tumour, document architecture, cell type, necrosis/haemorrhage, mitotic activity, vascular invasion, and each distinct component.",
                "Extensively sample heterogeneous tumours and placentas when intraplacental choriocarcinoma is a concern.",
              ]}
            />
          </Panel>
        </section>

        <section className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5">
          <h2 className="text-lg font-bold text-rose-950">
            High-yield diagnostic safeguards
          </h2>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-rose-950 md:grid-cols-2">
            <li>
              • p57 retention does not prove PHM; it also occurs in non-molar
              gestations.
            </li>
            <li>
              • Triploidy does not prove PHM unless the extra haploid complement
              is paternal (diandric).
            </li>
            <li>• Early CHM may lack the classic enlarged hydropic villi.</li>
            <li>
              • Trophoblastic hyperplasia at the implantation site in CHM is not
              automatically PSTT or choriocarcinoma.
            </li>
            <li>
              • Invasive mole contains abnormal villi; choriocarcinoma is a
              villus-free malignant trophoblastic proliferation.
            </li>
            <li>
              • p63, GATA3, hPL, or hCG alone cannot classify a trophoblastic
              tumour.
            </li>
            <li>
              • GTN is a clinical management category, not a single histologic
              entity.
            </li>
            <li>
              • The source notes that most postmolar GTN is managed clinically
              with hCG surveillance; the precise tissue process may not be
              pathologically defined.
            </li>
          </ul>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
          <p>
            <b>Source scope:</b> This page is based on the supplied WHO
            classification excerpt. It focuses on partial and complete
            hydatidiform mole, invasive/metastatic mole, PSTT, ETT, gestational
            choriocarcinoma, and mixed trophoblastic tumour. The source mentions
            atypical villous lesions, exaggerated placental site reaction,
            placental site nodule/plaque, and atypical placental site nodule but
            does not provide full entity-level descriptions in the supplied
            excerpt; these are therefore identified in the classification map
            without inventing detailed criteria.
          </p>
          <p className="mt-2">
            Educational reference for pathologists. Interpret morphology and
            ancillary studies in the clinical and gestational context;
            management decisions require the treating GTD team.
          </p>
        </footer>
      </div>
    </main>
  );
}
