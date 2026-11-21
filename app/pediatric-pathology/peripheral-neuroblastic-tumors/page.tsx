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
    name: "Ganglioneuroma",
    group: "Schwannian Stroma-Dominant Tumors",
    clue: "Mature ganglion cells in an abundant, bland Schwannian stroma; no neuroblastic nests or mitotic activity.",
    summary:
      "A benign, fully differentiated peripheral neuroblastic tumor composed predominantly of Schwannian cells with scattered maturing or mature ganglion cells.",
    clinical: [
      "Typically occurs in older children and young adults; median age approximately 6 years.",
      "No clear sex predilection is established.",
      "More common in the thorax than in the adrenal gland; may also arise along the sympathetic chain.",
      "Usually an incidental, nonfunctioning mass; catecholamine-related symptoms are uncommon.",
    ],
    criteria: [
      "Schwannian stroma is the dominant component and occupies more than 50% of the tumor volume.",
      "Maturing and/or mature ganglion cells are present, individually dispersed or in small clusters.",
      "Mitoses are absent.",
      "No discrete nests or nodules of neuroblasts are identified after adequate sampling.",
      "No neuropil-rich neuroblastic component is present.",
    ],
    histology: [
      "Bland Schwann cells form broad sheets, fascicles, or interlacing bundles.",
      "Ganglion cells are scattered or clustered within the Schwannian stroma.",
      "Maturing ganglion cells vary in size and may be multinucleated.",
      "Mature ganglion cells have abundant cytoplasm and are typically surrounded by satellite cells.",
      "A lymphocytic infiltrate is common.",
      "Neuroblasts, neuropil, necrosis, and mitotic activity are absent in conventional ganglioneuroma.",
    ],
    ihc: [
      "Schwannian stroma is typically strongly positive for S100 and SOX10.",
      "Ganglion cells express neuronal markers, including synaptophysin and neurofilament.",
      "Synaptophysin highlights neuronal processes and ganglion cells.",
      "PHOX2B may highlight ganglionic elements but should be interpreted with morphology.",
    ],
    differential: [
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Contains well-demarcated neuropil-rich foci populated mainly by differentiating neuroblasts; ganglioneuromatous tissue must still comprise more than 50% of the evaluable tumor.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Contains one or more discrete neuroblastic nodules with an abrupt pushing interface against a ganglioneuromatous or intermixed background; extensive sampling is essential.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Shows a dominant neuroblastic component with less than 50% Schwannian stroma, usually with neuroblastic nests and neuropil.",
      },
    ],
    pitfalls: [
      "A small biopsy may miss a focal neuroblastic nodule; correlate with imaging and ensure representative sampling.",
      "A ganglioneuroma at an unusual site may represent a matured metastasis from a prior neuroblastoma; review clinical history.",
    ],
  },
  {
    name: "Ganglioneuroblastoma, Intermixed",
    group: "Schwannian Stroma-Rich Tumors",
    clue: "Schwannian stroma-rich tumor with well-demarcated neuropil-rich foci containing mainly differentiating neuroblasts; no pushing interface.",
    summary:
      "An intermediate peripheral neuroblastic tumor in which scattered, well-defined neuroblastic foci are embedded in a Schwannian stroma-rich ganglioneuromatous background.",
    clinical: [
      "Usually occurs in older children than neuroblastoma; median age approximately 4–7 years.",
      "No consistent sex predilection is established.",
      "Most often arises in the abdominal cavity or retroperitoneum, usually the adrenal gland; mediastinal, cervical, and pelvic sites also occur.",
      "Often presents as an asymptomatic mass; urinary catecholamines are generally not markedly elevated.",
    ],
    criteria: [
      "The tumor is Schwannian stroma-rich.",
      "Ganglioneuromatous tissue accounts for more than 50% of the microscopically evaluable tumor volume.",
      "Well-demarcated microscopic foci contain neuropil and predominantly differentiating neuroblastic cells.",
      "The interface between neuroblastic foci and ganglioneuromatous tissue is not a pushing border.",
      "No grossly distinct neuroblastic nodule is identified.",
    ],
    histology: [
      "Schwannian cells and maturing or mature ganglion cells form the background ganglioneuromatous component.",
      "Well-circumscribed lacunar foci of neuroblastic cells are randomly distributed within the stroma-rich background.",
      "Neuroblastic foci contain neuropil and neuroblasts at varying stages of maturation, predominantly differentiating forms.",
      "The interface between neuroblastic foci and the ganglioneuromatous component is gradual or non-pushing.",
      "The stromal component is abundant and typically bland.",
    ],
    ihc: [
      "S100 and SOX10 highlight Schwannian stromal cells.",
      "Synaptophysin highlights neuropil and neuroblastic/ganglion-cell elements.",
      "Chromogranin and neurofilament can support neuronal differentiation.",
      "PHOX2B supports sympathoadrenal-lineage differentiation in neuroblastic cells.",
    ],
    differential: [
      {
        name: "Ganglioneuroma",
        distinction:
          "Lacks discrete neuropil-rich foci of neuroblastic cells; only maturing or mature ganglion cells are present in the dominant Schwannian stroma.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Has one or more grossly and microscopically distinct neuroblastic nodules with an abrupt pushing border or fibrous pseudocapsule.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Has less than 50% Schwannian stroma and a dominant neuroblastic component, rather than a ganglioneuromatous component exceeding 50%.",
      },
    ],
    molecular: [
      "MYCN amplification is rare (less than 1%).",
      "Segmental chromosomal aberrations are infrequent; neuroblastic cells may show numerical chromosomal abnormalities.",
      "DNA content is frequently diploid, partly reflecting the abundant stromal component.",
    ],
    pitfalls: [
      "Do not diagnose neuroblastoma solely because neuroblastic cells are present; quantify the Schwannian stromal component and assess the architecture.",
      "Distinguish microscopic non-pushing foci from the discrete nodules of nodular ganglioneuroblastoma.",
    ],
  },
  {
    name: "Neuroblastoma",
    group: "Schwannian Stroma-Poor Tumors",
    clue: "Primitive neuroblastic tumor with less than 50% Schwannian stroma; classify differentiation and mitosis-karyorrhexis index.",
    summary:
      "A malignant peripheral neuroblastic tumor composed of neuroblastic cells at varying stages of differentiation, proliferating in tumor tissue with less than 50% Schwannian stromal content.",
    clinical: [
      "Predominantly affects infants and young children; it is the most common malignancy in the first year of life.",
      "Slight male predominance (approximately 1.2:1).",
      "Primary sites: adrenal gland (about 40%), abdominal sympathetic ganglia, thorax, pelvis, and cervical sympathetic chain.",
      "Presentation varies by site and stage: abdominal distension, constipation, respiratory symptoms, spinal-canal extension, lymphadenopathy, hepatomegaly, bone pain, or periorbital ecchymoses.",
      "Paraneoplastic presentations include opsoclonus-myoclonus-ataxia, VIP-associated watery diarrhea, Horner syndrome, and hypertension.",
    ],
    criteria: [
      "A primitive tumor has a prominent neuroblastic component and less than 50% Schwannian stroma.",
      "Assess the degree of neuroblastic differentiation: undifferentiated, poorly differentiated, or differentiating.",
      "Assess the mitosis-karyorrhexis index (MKI): low, intermediate, or high.",
      "Record nuclear morphology, including conventional salt-and-pepper chromatin versus prominent nucleoli, which may prompt evaluation for MYC-family-driven disease.",
      "Use immunohistochemistry to establish sympathoadrenal/neuroblastic differentiation, particularly in undifferentiated tumors.",
      "For risk assessment, integrate age, stage, histology, MYCN status, DNA index, segmental chromosomal aberrations, ALK status, and telomere-maintenance alterations as clinically indicated.",
    ],
    histology: [
      "Neuroblastic cells form nests, groups, or sheets separated by delicate fibrovascular septa.",
      "Undifferentiated neuroblastoma consists of primitive small round blue cells without readily recognizable neurites.",
      "Poorly differentiated neuroblastoma shows readily detectable neuropil, with or without Homer Wright rosettes; fewer than 5% of neuroblasts show morphologic differentiation.",
      "Differentiating neuroblastoma contains abundant neurites and more than 5% differentiating neuroblasts.",
      "Differentiating neuroblasts have enlarged eccentric nuclei with vesicular chromatin and a prominent nucleolus.",
      "The cytoplasm of differentiating neuroblasts is eosinophilic or amphophilic and at least twice the diameter of the nucleus.",
      "Conventional neuroblasts often have a salt-and-pepper chromatin pattern.",
      "MYC-family-driven tumors may show enlarged open nuclei with prominent nucleoli; large-cell neuroblastoma is a rare, highly aggressive pattern in this group.",
      "Necrosis, hemorrhage, and calcification may be present.",
    ],
    ihc: [
      "PHOX2B is a highly reliable marker of neuroblastoma, including the undifferentiated subtype.",
      "Synaptophysin highlights neuroblastic cells and neuropil.",
      "Chromogranin highlights neuronal/neuroendocrine differentiation.",
      "Neurofilament highlights neuritic processes and differentiating neuronal elements.",
      "PGP9.5, CD56, and NB84 may support the diagnosis in an appropriate panel.",
      "Tyrosine hydroxylase supports sympathoadrenal differentiation.",
      "S100 highlights Schwannian stromal cells, which are limited in conventional neuroblastoma.",
    ],
    differential: [
      {
        name: "Ganglioneuroma",
        distinction:
          "Shows dominant mature Schwannian stroma with mature/maturing ganglion cells and no neuroblastic nests or mitoses.",
      },
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Has more than 50% ganglioneuromatous tissue with scattered, well-demarcated neuropil-rich foci of mainly differentiating neuroblasts.",
      },
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Contains discrete neuroblastic nodules with an abrupt pushing interface in a Schwannian stroma-rich or stroma-dominant background.",
      },
      {
        name: "Ewing sarcoma",
        distinction:
          "Usually lacks neuropil and PHOX2B expression; CD99 is typically membranous and an EWSR1::ETS fusion supports the diagnosis.",
      },
      {
        name: "Rhabdomyosarcoma",
        distinction:
          "Shows skeletal-muscle differentiation with desmin, myogenin, and MyoD1 expression rather than a PHOX2B-positive neuroblastic phenotype.",
      },
      {
        name: "Lymphoblastic lymphoma/leukemia",
        distinction:
          "Expresses lineage-specific lymphoid markers such as TdT, CD3, or B-lineage markers and lacks convincing neuronal differentiation.",
      },
      {
        name: "Desmoplastic small round cell tumor",
        distinction:
          "Often shows desmoplastic stroma and polyphenotypic staining, including keratin, desmin, and WT1; EWSR1::WT1 fusion is characteristic.",
      },
      {
        name: "Wilms tumor, blastemal component",
        distinction:
          "Usually arises in the kidney and is supported by WT1 and renal-lineage markers; assess for epithelial and stromal components.",
      },
    ],
    molecular: [
      "MYCN amplification occurs in approximately 20–25% and is a major adverse biologic feature.",
      "ALK activating mutations, rearrangements, or amplification occur in a subset; germline ALK mutations are associated with familial neuroblastoma.",
      "TERT activation/overexpression and alternative lengthening of telomeres (ALT), often associated with ATRX loss, identify biologically aggressive subsets.",
      "MYC or MYCN protein overexpression defines MYC-family-driven tumors; MYC overexpression may occur without MYC gene amplification.",
      "Adverse segmental chromosomal alterations include 1p and 11q loss and 17q gain.",
      "Hyperdiploidy with whole-chromosome numerical gains is generally associated with favorable biology, particularly in younger children.",
      "Germline ALK and PHOX2B alterations are relevant in familial neuroblastoma; PHOX2B variants may be associated with congenital central hypoventilation and Hirschsprung disease.",
    ],
    pitfalls: [
      "Do not use the term neuroblastoma as an umbrella label for all peripheral neuroblastic tumors; reserve it for the Schwannian stroma-poor category.",
      "Undifferentiated neuroblastoma may require PHOX2B and a broader immunohistochemical panel to distinguish it from other small round cell tumors.",
      "Do not confuse differentiating neuroblasts with large-cell neuroblastoma: differentiating cells have abundant cytoplasm, whereas large-cell neuroblastoma retains scant cytoplasm and prominent nucleoli.",
      "MKI and favorable/unfavorable histology must be interpreted with patient age under the INPC framework; assess untreated tumor whenever possible.",
    ],
  },
  {
    name: "Ganglioneuroblastoma, Nodular",
    group: "Composite Peripheral Neuroblastic Tumors",
    clue: "One or more discrete neuroblastic nodules with an abrupt pushing interface in a ganglioneuromatous or intermixed background.",
    summary:
      "A composite peripheral neuroblastic tumor containing one or more macroscopically visible neuroblastic nodules within a Schwannian stroma-rich or stroma-dominant background.",
    clinical: [
      "Usually presents in children older than those with conventional neuroblastoma; most patients are older than 18 months.",
      "No consistent sex predilection is established.",
      "Occurs in adrenal and sympathetic-chain sites, including abdominal, thoracic, pelvic, and cervical locations.",
      "Often presents as an abdominal mass with pain, distension, or fever; metastatic disease may also be present.",
    ],
    criteria: [
      "Identify one or more grossly distinct neuroblastic nodules, typically with pushing borders.",
      "Confirm a microscopically distinct neuroblastic nodule within a Schwannian stroma-rich intermixed or Schwannian stroma-dominant ganglioneuromatous background.",
      "The neuroblastic nodule is sharply demarcated from the surrounding component, sometimes by a fibrous pseudocapsule.",
      "Classify each nodule independently using degree of neuroblastic differentiation, MKI, and patient age.",
      "Assign the overall risk-relevant histologic assessment according to the nodule with the least favorable histology.",
      "Extensively sample the tumor to identify small or multiple nodules and avoid underdiagnosis on limited biopsy.",
    ],
    histology: [
      "The background component is ganglioneuroma or ganglioneuroblastoma, intermixed.",
      "The neuroblastic nodule has an abrupt pushing interface with the background and may be surrounded by a fibrous pseudocapsule.",
      "The nodule contains undifferentiated, poorly differentiated, or less commonly differentiating neuroblasts.",
      "Schwannian cells are absent or inconspicuous within the neuroblastic nodule.",
      "MKI may be low, intermediate, or high.",
      "Multiple nodules may show different degrees of differentiation and proliferation and must be evaluated separately.",
    ],
    ihc: [
      "PHOX2B highlights the neuroblastic nodule and supports sympathoadrenal lineage.",
      "Synaptophysin highlights neuroblastic cells and neuropil in the nodule.",
      "S100 and SOX10 highlight the Schwannian stromal background and help map the interface.",
      "Neurofilament highlights neuritic processes and neuronal differentiation.",
    ],
    differential: [
      {
        name: "Ganglioneuroma",
        distinction:
          "Lacks a discrete neuroblastic nodule; the tumor is uniformly Schwannian stroma-dominant with mature or maturing ganglion cells.",
      },
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Contains microscopic non-pushing neuroblastic foci in a background that remains more than 50% ganglioneuromatous; no grossly distinct neuroblastic nodule is present.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Has a dominant Schwannian stroma-poor neuroblastic component rather than a discrete nodule within a stroma-rich/dominant background.",
      },
      {
        name: "Other composite peripheral neuroblastic tumor",
        distinction:
          "May contain multiple distinct neuroblastic components without a ganglioneuromatous background; classify the components descriptively and document their distinct morphology and molecular findings.",
      },
    ],
    molecular: [
      "More than 90% of nodular ganglioneuroblastomas are not MYCN-amplified.",
      "MYCN amplification and other molecular abnormalities should be assessed in the neuroblastic nodule when indicated; testing of bulk tissue may dilute a focal alteration.",
    ],
    pitfalls: [
      "A limited core biopsy may sample only the ganglioneuromatous background and miss the neuroblastic nodule.",
      "Sample each grossly distinct nodule and the interface with the background.",
      "Do not classify all nodules as a single grade; evaluate each separately and use the least favorable nodule for risk-relevant interpretation.",
    ],
  },
  {
    name: "Other Composite Peripheral Neuroblastic Tumors",
    group: "Composite Peripheral Neuroblastic Tumors",
    clue: "Distinct, circumscribed neuroblastic components with differing morphology and molecular profiles, but without a ganglioneuromatous background.",
    summary:
      "Rare composite tumors containing multiple distinct neuroblastic components; this descriptive category is not yet a formally established independent subtype.",
    clinical: [
      "Reported predominantly in the pediatric peripheral neuroblastic tumor setting.",
      "A consistent age or sex distribution is not established.",
      "May arise at sites typical of peripheral neuroblastic tumors, including adrenal and sympathetic-chain locations.",
      "Clinical behavior depends on the biologic properties of the individual components.",
    ],
    criteria: [
      "Identify two or more discrete, circumscribed neuroblastic components with clearly different histologic features.",
      "Confirm that the background is not the characteristic ganglioneuromatous component of nodular ganglioneuroblastoma.",
      "Correlate each component with immunophenotypic and molecular findings when possible.",
      "Document component-specific features, including MYCN amplification when present.",
      "Avoid assigning a definitive new entity name when classification criteria are not established.",
    ],
    histology: [
      "The tumor contains discrete, sharply demarcated areas with distinct cytomorphology.",
      "Different components may show different degrees of neuroblastic differentiation and proliferation.",
      "A conventional ganglioneuromatous background is absent.",
      "The components may show distinct immunohistochemical profiles.",
    ],
    ihc: [
      "Use PHOX2B and neuronal markers to establish neuroblastic differentiation in the relevant components.",
      "Use S100 and SOX10 to evaluate Schwannian stromal distribution and determine whether a ganglioneuromatous background is present.",
      "Compare immunophenotypic findings between morphologically distinct components.",
    ],
    differential: [
      {
        name: "Ganglioneuroblastoma, nodular",
        distinction:
          "Requires a neuroblastic nodule within a ganglioneuromatous or intermixed Schwannian stroma-rich/dominant background.",
      },
      {
        name: "Ganglioneuroblastoma, intermixed",
        distinction:
          "Has more than 50% ganglioneuromatous tissue with microscopic non-pushing neuroblastic foci.",
      },
      {
        name: "Neuroblastoma",
        distinction:
          "Usually represents a Schwannian stroma-poor neuroblastic tumor without clearly separate, genetically distinct composite components.",
      },
    ],
    molecular: [
      "MYCN amplification may be present in one component and absent in another; test the morphologically distinct areas separately when feasible.",
      "Component-specific molecular testing may demonstrate clonal heterogeneity.",
    ],
    pitfalls: [
      "Do not equate this descriptive pattern with nodular ganglioneuroblastoma when a ganglioneuromatous background is absent.",
      "Avoid overclassification: the category is not yet defined as a formal independent entity.",
    ],
  },
];

const overview = [
  {
    name: "Ganglioneuroma",
    group: "Schwannian stroma-dominant",
    clue: "Mature/maturing ganglion cells in abundant bland Schwannian stroma",
    key: "No neuroblastic nests; no mitoses",
  },
  {
    name: "Ganglioneuroblastoma, intermixed",
    group: "Schwannian stroma-rich",
    clue: "Microscopic neuropil-rich foci of mainly differentiating neuroblasts",
    key: "Ganglioneuromatous component >50%; no pushing border",
  },
  {
    name: "Neuroblastoma",
    group: "Schwannian stroma-poor",
    clue: "Primitive neuroblastic cells with limited Schwannian stroma",
    key: "Less than 50% Schwannian stroma; grade differentiation and MKI",
  },
  {
    name: "Ganglioneuroblastoma, nodular",
    group: "Composite tumor",
    clue: "Discrete neuroblastic nodule(s) in ganglioneuromatous background",
    key: "Abrupt pushing interface; classify each nodule",
  },
  {
    name: "Other composite peripheral neuroblastic tumors",
    group: "Descriptive composite pattern",
    clue: "Distinct neuroblastic components without ganglioneuromatous background",
    key: "Component-specific morphology and molecular assessment",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function PeripheralNeuroblasticTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const text = [
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
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          text.includes(query.toLowerCase())
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
          Peripheral Neuroblastic Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic classification of sympathoadrenal-lineage tumors,
          integrating Schwannian stromal content, neuroblastic differentiation,
          mitosis-karyorrhexis index, immunophenotype, and clinically relevant
          molecular findings.
        </p>
      </header>

      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            The key distinction across the spectrum is the proportion and
            architecture of Schwannian stroma and neuroblastic tissue.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical pattern</th>
                <th className="px-4 py-3">Key diagnostic point</th>
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
            <strong>1. Estimate Schwannian stromal content.</strong> Distinguish
            stroma-poor neuroblastoma from stroma-rich intermixed
            ganglioneuroblastoma and stroma-dominant ganglioneuroma.
          </li>
          <li>
            <strong>2. Assess architecture.</strong> Separate microscopic
            non-pushing neuroblastic foci from the discrete pushing nodule(s) of
            nodular ganglioneuroblastoma.
          </li>
          <li>
            <strong>3. Grade the neuroblastic component.</strong> Record
            differentiation and mitosis-karyorrhexis index; apply age-dependent
            INPC criteria where appropriate.
          </li>
          <li>
            <strong>4. Integrate ancillary studies.</strong> Use PHOX2B and
            neuronal markers for lineage confirmation; assess MYCN, ALK,
            telomere maintenance, ploidy, and segmental chromosomal changes for
            risk stratification as indicated.
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
            <option key={g}>{g}</option>
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
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
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
        Diagnostic classification should be integrated with clinical stage,
        imaging, age, and current risk-stratification protocols. Histologic
        assessment and molecular testing should be performed on adequately
        sampled, preferably untreated tumor tissue.
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
