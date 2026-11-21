"use client";
import { useMemo, useState } from "react";
type Entity = {
  name: string;
  group: string;
  clinical: string;
  histology: string[];
  ihc: string[];
  criteria: string[];
  molecular: string[];
  differential: string[];
};
const entities: Entity[] = [
  {
    name: "Mature Plasmacytoid Dendritic Cell Proliferation Associated with Myeloid Neoplasm",
    group: "Plasmacytoid Dendritic Cell Neoplasms",
    clinical:
      "Older adults, predominantly men; skin and marrow, rarely lymph nodes; associated most often with CMML, but also AML, MDS, and MPN.",
    histology: [
      "Nodular or interstitial aggregates of medium-sized cells with eccentric round-to-oval nuclei, clumped chromatin, moderate amphophilic cytoplasm, and few mitoses.",
    ],
    ihc: [
      "CD123, TCF4, CD303, CD304, SPIB, CD2AP, and MX1 support pDC differentiation",
      "CD56 is usually absent/low; CD34, TdT, or CD56 may be aberrant, particularly in AML-associated cases.",
    ],
    criteria: [
      "Identify mature pDCs in a defined myeloid neoplasm",
      "confirm with CD123 plus additional pDC markers",
      "assess maturation, CD56, and CD34",
      "exclude reactive pDC aggregates in infection, autoimmune disease, Kikuchi\u2013Fujimoto disease, and Castleman disease.",
    ],
    molecular: [
      "No specific molecular test is required. Clonal findings may overlap with the associated myeloid neoplasm; RUNX1 and RAS-pathway mutations occur in subsets.",
    ],
    differential: [
      "BPDCN: blastoid cytology, high proliferation, often strong CD56",
      "AML with pDC differentiation: immature CD34-positive pDCs may form a continuum with AML blasts",
      "Reactive pDC proliferation: inflammatory/autoimmune setting without convincing clonal association.",
    ],
  },
  {
    name: "Blastic Plasmacytoid Dendritic Cell Neoplasm",
    group: "Plasmacytoid Dendritic Cell Neoplasms",
    clinical:
      "Usually older adults (median roughly 62\u201370 years), marked male predominance; skin most common, followed by marrow and lymph nodes. Violaceous/brown plaques or nodules, cytopenias, and dissemination.",
    histology: [
      "Diffuse monotonous medium-sized blastoid cells with scant cytoplasm, eccentric nuclei, fine chromatin, and inconspicuous nucleoli",
      "skin infiltrate is dermal/subcutaneous with epidermal and adnexal sparing.",
    ],
    ihc: [
      "CD123 and nuclear TCF4 are highly useful; CD303, CD304, TCL1, CD2AP, CD4, and CD56 commonly support pDC phenotype",
      "CD34 is usually negative",
      "MPO, lysozyme, CD14, and lineage-defining B/T markers are generally absent",
      "CD123 alone is not specific.",
    ],
    criteria: [
      "Establish blastoid hematolymphoid neoplasm with pDC differentiation",
      "demonstrate CD123 plus TCF4 and/or other pDC markers",
      "exclude AML with pDC differentiation, mature pDC proliferation, and NK/T-cell neoplasms.",
    ],
    molecular: [
      "No single defining alteration. Complex karyotypes and losses involving CDKN2A/B and RB1 are common; TET2 and ASXL1 mutations recur.",
    ],
    differential: [
      "AML with pDC differentiation: CD34-positive immature pDCs and myeloid blasts; assess MPO/myeloid phenotype",
      "Mature pDC proliferation: bland mature cells and low proliferation",
      "Extranodal NK/T-cell lymphoma: cytotoxic markers and EBER positivity",
      "Acute monocytic leukemia: CD64, CD14, lysozyme, and often MPO.",
    ],
  },
  {
    name: "Langerhans Cell Histiocytosis",
    group: "Langerhans Cell Neoplasms",
    clinical:
      "Most common in children but occurs at any age; bone, skin, lymph nodes, lung, and hypothalamic-pituitary region. Bone pain, lytic lesions, rash, or multisystem symptoms.",
    histology: [
      "Large cells with abundant pale eosinophilic cytoplasm and grooved, folded, or convoluted coffee-bean nuclei",
      "eosinophils, lymphocytes, plasma cells, and multinucleated giant cells variably admixed. High-grade pleomorphism is absent.",
    ],
    ihc: [
      "CD1a membranous and CD207 (langerin) granular cytoplasmic are defining; S100 nuclear/cytoplasmic and CD68 Golgi-dot may be positive",
      "CD207 is a surrogate for Birbeck granules",
      "Cyclin D1 and phospho-ERK may be positive but are not specific.",
    ],
    criteria: [
      "Identify characteristic grooved histiocytes in the correct tissue context",
      "demonstrate CD1a and CD207 in lesional cells",
      "distinguish neoplastic cells from reactive CD1a-positive dendritic cells",
      "correlate with site and systemic distribution.",
    ],
    molecular: [
      "MAPK-pathway alterations are common, especially BRAF p.V600E; MAP2K1 and other pathway mutations occur. Validated BRAF VE1 IHC may complement sensitive molecular testing.",
    ],
    differential: [
      "Indeterminate dendritic cell tumor: CD1a/S100 positive but CD207 negative",
      "Langerhans cell sarcoma: high-grade pleomorphism and atypical mitoses",
      "Juvenile xanthogranuloma: CD1a/CD207 negative, CD163/CD68/factor XIIIa positive",
      "Reactive Langerhans cells: branching dendritic cells in a site-specific reactive pattern.",
    ],
  },
  {
    name: "Langerhans Cell Sarcoma",
    group: "Langerhans Cell Neoplasms",
    clinical:
      "Usually adults; skin, lymph nodes, and extranodal sites; rapidly enlarging mass, ulcerated lesion, or systemic disease.",
    histology: [
      "High-grade pleomorphic tumor with large atypical cells, plump or elongated nuclei, high mitotic activity, and atypical mitoses",
      "characteristic LCH grooves may be inconspicuous and eosinophils variable.",
    ],
    ihc: [
      "Retains Langerhans phenotype: CD1a, CD207, and S100; staining may be focal",
      "CD68, cyclin D1, and HLA-DR may be positive",
      "Evaluate staining specifically in high-grade tumor cells.",
    ],
    criteria: [
      "Demonstrate high-grade malignant cytology and increased mitoses",
      "confirm Langerhans differentiation with CD1a/CD207/S100 (sometimes focal)",
      "exclude histiocytic sarcoma and interdigitating dendritic cell sarcoma with a broad panel.",
    ],
    molecular: [
      "MAPK-pathway mutations, including KRAS and less commonly BRAF p.V600E, occur in a subset.",
    ],
    differential: [
      "LCH: bland cytology and low mitotic activity",
      "Histiocytic sarcoma: CD163/CD68/lysozyme positive but CD1a/CD207 negative",
      "Interdigitating dendritic cell sarcoma: CD1a/CD207 negative, often strong S100",
      "Undifferentiated pleomorphic sarcoma: lacks Langerhans phenotype.",
    ],
  },
  {
    name: "Indeterminate Dendritic Cell Tumor",
    group: "Other Dendritic Cell Neoplasms",
    clinical:
      "Usually adults (median around 48 years), slight male predominance; usually skin-limited papules or nodules, often generalized; arms and scalp common for solitary lesions.",
    histology: [
      "Medium-to-large histiocytoid cells with oval, indented, or grooved nuclei and pale-to-eosinophilic cytoplasm",
      "epithelioid or spindle forms",
      "pleomorphism usually limited and atypical mitoses absent.",
    ],
    ihc: [
      "CD1a and S100 positive; CD207 (langerin) negative",
      "CD68/CD163 variable",
      "CD21/CD35 generally negative.",
    ],
    criteria: [
      "Establish clonal dendritic-cell proliferation with CD1a and S100",
      "demonstrate absence of CD207",
      "exclude LCH, Langerhans cell sarcoma, and reactive Langerhans-cell proliferations",
      "assess atypia, Ki-67, extracutaneous disease, and associated hematologic neoplasm.",
    ],
    molecular: [
      "MAPK-pathway alterations, including BRAF p.V600E, reported in a subset; molecular testing is useful in disseminated or atypical cases.",
    ],
    differential: [
      "LCH: CD207 positive",
      "Langerhans cell sarcoma: high-grade pleomorphism/atypical mitoses",
      "Interdigitating dendritic cell sarcoma: usually CD1a negative and strongly S100 positive",
      "Juvenile xanthogranuloma: CD1a negative, CD163/CD68/factor XIIIa positive.",
    ],
  },
  {
    name: "Interdigitating Dendritic Cell Sarcoma",
    group: "Other Dendritic Cell Neoplasms",
    clinical:
      "Usually adults; lymph nodes common, with extranodal skin, soft tissue, and visceral sites; enlarging lymphadenopathy or mass.",
    histology: [
      "Spindle-to-epithelioid cells in sheets, fascicles, or storiform patterns, with abundant pale eosinophilic cytoplasm, indistinct borders, elongated irregular nuclei, vesicular chromatin, and conspicuous nucleoli.",
    ],
    ihc: [
      "S100 typically strong/diffuse; fascin often positive; CD45 and variable CD4/CD68 may be expressed",
      "CD1a/CD207 and CD21/CD35 are negative",
      "Exclude epithelial and melanocytic markers.",
    ],
    criteria: [
      "Demonstrate malignant spindle/epithelioid dendritic-cell proliferation",
      "support interdigitating phenotype with S100 and ancillary markers",
      "exclude Langerhans-cell, follicular dendritic-cell, histiocytic, melanocytic, and epithelial neoplasms.",
    ],
    molecular: [
      "No single defining molecular alteration. MAPK-pathway alterations and clonal relationship to prior lymphoid neoplasms occur in subsets.",
    ],
    differential: [
      "Histiocytic sarcoma: CD163/CD68/lysozyme macrophage profile; S100 usually absent/patchy",
      "Langerhans cell sarcoma: CD1a/CD207 positive",
      "Follicular dendritic cell sarcoma: CD21/CD23/CD35/clusterin positive",
      "Melanoma: SOX10/Melan-A/HMB45 positive.",
    ],
  },
  {
    name: "Juvenile Xanthogranuloma",
    group: "Histiocyte/Macrophage Neoplasms",
    clinical:
      "Usually infants and young children, but adults occur; slight male predominance. Skin most common; eye, CNS, and viscera less common. Yellow-orange papules or nodules.",
    histology: [
      "Circumscribed dermal/subcutaneous proliferation of foamy histiocytes",
      "Touton giant cells may be present, especially in mature lesions. Early lesions may be non-xanthomatous",
      "significant pleomorphism is generally absent.",
    ],
    ihc: [
      "CD68, CD163, CD4, factor XIIIa, and fascin commonly positive",
      "CD1a/CD207 negative; S100 usually negative or weak/focal; ALK negative.",
    ],
    criteria: [
      "Identify circumscribed non-high-grade histiocytic proliferation with macrophage phenotype",
      "demonstrate CD68/CD163 and factor XIIIa",
      "exclude LCH, ALK-positive histiocytosis, and systemic ECD when indicated.",
    ],
    molecular: [
      "No defining molecular alteration required; MAPK-pathway mutations occur in a subset, including disseminated cases.",
    ],
    differential: [
      "LCH: CD1a/CD207 positive with grooved nuclei/eosinophils",
      "ALK-positive histiocytosis: ALK positive, often JXG-like",
      "ECD: systemic xanthogranulomatous infiltrates and characteristic skeletal/organ involvement",
      "Lipidized dermatofibroma: collagen trapping, epidermal/adnexal changes, and hemosiderin.",
    ],
  },
  {
    name: "Erdheim-Chester Disease",
    group: "Histiocyte/Macrophage Neoplasms",
    clinical:
      "Usually middle-aged to older adults, male predominance; long bones, retroperitoneum, cardiovascular system, CNS, lungs, and skin. Bone pain, diabetes insipidus, perirenal/periaortic infiltration, and neurologic/cardiac symptoms.",
    histology: [
      "Foamy/xanthomatous histiocytes in fibrotic inflammatory background",
      "lesions may be patchy. Touton giant cells and variable inflammatory cells may occur. Radiologic distribution is an important diagnostic clue.",
    ],
    ihc: [
      "CD68, CD163, CD14, and factor XIIIa commonly positive",
      "CD1a/CD207 negative; S100 usually negative or weak/focal; ALK negative",
      "BRAF VE1 may be positive in BRAF-mutated cases.",
    ],
    criteria: [
      "Integrate tissue morphology with characteristic multisystem clinical/radiologic distribution",
      "establish macrophage phenotype and absence of Langerhans markers",
      "test BRAF and other MAPK alterations using sensitive assays.",
    ],
    molecular: [
      "BRAF p.V600E occurs in approximately half of cases; MAP2K1, KRAS, NRAS, ARAF, and other MAPK-pathway alterations occur. Molecular results guide targeted therapy.",
    ],
    differential: [
      "JXG: usually localized cutaneous lesion in children; ECD has systemic distribution and long-bone involvement",
      "LCH: CD1a/CD207 positive",
      "RDD: S100/OCT2 positive with emperipolesis",
      "ALK-positive histiocytosis: ALK positive with ALK fusion.",
    ],
  },
  {
    name: "Rosai-Dorfman Disease",
    group: "Histiocyte/Macrophage Neoplasms",
    clinical:
      "Nodal disease often affects children/young adults, especially cervical nodes; extranodal disease more often in adults. Painless massive lymphadenopathy, fever, or site-specific symptoms.",
    histology: [
      "Sinuses expanded by large histiocytes with round nuclei, prominent nucleoli, and abundant pale cytoplasm. Emperipolesis of intact lymphocytes, plasma cells, neutrophils, or erythrocytes is characteristic but may be subtle extranodally. Plasma-cell-rich background and fibrosis may occur.",
    ],
    ihc: [
      "S100 strongly positive and highlights emperipolesis; OCT2 positive; cyclin D1 and phospho-ERK frequently positive",
      "CD68/CD163 variable",
      "CD1a/CD207 and ALK negative.",
    ],
    criteria: [
      "Identify large S100-positive histiocytes with emperipolesis in appropriate architectural context",
      "use OCT2/cyclin D1 in difficult cases",
      "exclude LCH, ALK-positive histiocytosis, ECD, infection, and IgG4-related disease.",
    ],
    molecular: [
      "About half harbor MAPK/ERK mutations, including KRAS, NRAS, MAP2K1, ARAF, CSF1R, and rarely BRAF p.V600E. Consider germline SLC29A3 or FAS testing in familial syndromic settings.",
    ],
    differential: [
      "LCH: CD1a/CD207 positive",
      "ALK-positive histiocytosis: ALK positive, usually lacks classic emperipolesis",
      "ECD/JXG: xanthomatous macrophages, usually S100 negative",
      "IgG4-related disease: storiform fibrosis/obliterative phlebitis and appropriate IgG4/IgG ratio; IgG4-positive plasma cells alone are insufficient.",
    ],
  },
  {
    name: "ALK-Positive Histiocytosis",
    group: "Histiocyte/Macrophage Neoplasms",
    clinical:
      "Infants with multisystem disease may have hepatosplenomegaly, anemia, and thrombocytopenia; single-system/multifocal disease at any age, with female predilection. CNS/PNS, bone, skin, breast, lung, and soft tissue.",
    histology: [
      "Large epithelioid, foamy, and spindle histiocytes",
      "abundant eosinophilic or multivacuolated cytoplasm",
      "irregular indented/folded/lobulated nuclei. Touton cells, hemosiderin, and emperipolesis may occur. Spindle cells may be fascicular or storiform",
      "significant pleomorphism is usually absent.",
    ],
    ihc: [
      "ALK positive in lesional histiocytes, usually cytoplasmic; rarely membranous/Golgi-dot and exceptionally nuclear",
      "CD68, CD163, CD14, CD4, lysozyme variable; factor XIIIa/fascin common",
      "CD1a/CD207 and CD30 negative; Ki-67 generally low.",
    ],
    criteria: [
      "Identify histiocytic proliferation without high-grade atypia",
      "demonstrate ALK in lesional histiocytes plus at least two histiocytic markers",
      "confirm ALK rearrangement when feasible",
      "correlate with systemic distribution and exclude ALK-positive lymphoma/IMT.",
    ],
    molecular: [
      "ALK rearrangements define the entity, most often KIF5B::ALK; other partners include CLTC, TPM3, TFG, EML4, DCTN1, COL1A2, and TRIM33.",
    ],
    differential: [
      "JXG: similar morphology but ALK negative",
      "ALK-positive ALCL: strong CD30 and lacks macrophage phenotype",
      "Inflammatory myofibroblastic tumor: myofibroblastic morphology/SMA-desmin profile, not histiocytic",
      "ECD: systemic xanthogranulomatous disease, ALK negative.",
    ],
  },
  {
    name: "Histiocytic Sarcoma",
    group: "Histiocyte/Macrophage Neoplasms",
    clinical:
      "Wide age range (median around mid-40s), slight male predominance; lymph nodes, GI tract, spleen, soft tissue, skin, and CNS. Mass, obstruction, splenomegaly, fever, weight loss, or night sweats.",
    histology: [
      "Diffuse sheets of large noncohesive oval/round or spindle cells",
      "sinusoidal growth may occur. Abundant eosinophilic often finely vacuolated cytoplasm",
      "vesicular, indented/grooved/folded nuclei with prominent nucleoli and variable pleomorphism. Multinucleation and hemophagocytosis may occur",
      "atypical mitoses/destructive growth support malignancy.",
    ],
    ihc: [
      "At least two histiocytic markers should label tumor cells: CD163, CD68, lysozyme",
      "PU.1, CD4, CD45/CD45RO common; S100 variable/patchy",
      "CD1a/CD207, CD21/CD35, MPO, ALK, cytokeratins, ERG, SOX10, HMB45, CD20/PAX5, and CD3 are negative in tumor cells.",
    ],
    criteria: [
      "Demonstrate malignant noncohesive large-cell neoplasm with macrophage morphology",
      "confirm at least two histiocytic markers in tumor cells",
      "exclude Langerhans, follicular/interdigitating dendritic, lymphoid, epithelial, melanocytic, vascular, and myeloid neoplasms",
      "exclude acute monocytic leukemia.",
    ],
    molecular: [
      "MAPK-pathway mutations (KRAS, NRAS, BRAF, MAP2K1, PTPN11, NF1, CBL) recur; TP53/CDKN2A alterations are common. Some cases share IG rearrangements or mutations with antecedent B-cell neoplasms.",
    ],
    differential: [
      "Langerhans cell sarcoma: CD1a/CD207 positive",
      "Interdigitating dendritic cell sarcoma: strong S100, macrophage markers less convincing",
      "ALCL: CD30 and often ALK positive",
      "DLBCL: CD20/PAX5 positive; histiocytic markers may label reactive macrophages",
      "Melanoma: SOX10/HMB45; carcinoma: cytokeratins; UPS: lacks coherent histiocytic phenotype.",
    ],
  },
];
const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </ul>
  );
}
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h3>
      {children}
    </section>
  );
}
export default function HistiocyticDendriticCellNeoplasmsPage() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (
            e.name +
            " " +
            e.group +
            " " +
            e.clinical +
            " " +
            e.histology.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.criteria.join(" ") +
            " " +
            e.molecular.join(" ") +
            " " +
            e.differential.join(" ")
          )
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, group],
  );
  const all =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (n: string) =>
    setOpen((v) => (v.includes(n) ? v.filter((x) => x !== n) : [...v, n]));
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Histiocytic and Dendritic Cell Neoplasms
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-7 text-slate-600">
          A practical diagnostic reference emphasizing morphology,
          lineage-specific immunophenotyping, and the distinction among
          macrophage, Langerhans-cell, conventional dendritic-cell, and
          plasmacytoid dendritic-cell proliferations.
        </p>
      </header>
      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Approach: Establish the Lineage
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white">
                <th className="border border-teal-100 p-3">Lineage</th>
                <th className="border border-teal-100 p-3">Core markers</th>
                <th className="border border-teal-100 p-3">Morphologic clue</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Langerhans cells",
                  "CD1a+, CD207+, S100+",
                  "Grooved/convoluted nuclei; eosinophil-rich background in LCH.",
                ],
                [
                  "Indeterminate dendritic cells",
                  "CD1a+, S100+, CD207−",
                  "Langerhans-like cells without langerin.",
                ],
                [
                  "Interdigitating dendritic cells",
                  "Strong S100; CD1a−, CD207−",
                  "Spindle-to-epithelioid cells, often nodal.",
                ],
                [
                  "Macrophages/histiocytes",
                  "CD163+, CD68+, lysozyme+, PU.1+",
                  "Foamy or eosinophilic cytoplasm; variable emperipolesis.",
                ],
                [
                  "Plasmacytoid dendritic cells",
                  "CD123+, TCF4+, CD303/CD304+",
                  "Mature pDCs are bland; BPDCN is blastoid and high grade.",
                ],
              ].map((r) => (
                <tr
                  key={r[0]}
                  className="align-top odd:bg-white even:bg-teal-50/40"
                >
                  {r.map((v, i) => (
                    <td
                      key={i}
                      className="border border-teal-100 p-3 leading-6"
                    >
                      {i === 0 ? <strong>{v}</strong> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-6 text-teal-950">
          <strong>Interpretive caution:</strong> Confirm that staining is
          present in lesional cells. Reactive histiocytes may be abundant in
          lymphoma, carcinoma, melanoma, and inflammatory lesions; a single
          positive marker is rarely sufficient.
        </p>
      </section>
      <section className="mb-8 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">High-Yield IHC Panel</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              <b>Macrophage/histiocyte:</b> CD163, CD68, lysozyme, PU.1, CD4.
            </li>
            <li>
              <b>Langerhans:</b> CD1a, CD207 (langerin), S100.
            </li>
            <li>
              <b>Plasmacytoid dendritic:</b> CD123, TCF4, CD303, CD304, TCL1,
              SPIB.
            </li>
            <li>
              <b>Interdigitating dendritic:</b> S100, fascin; exclude CD1a/CD207
              and follicular dendritic markers.
            </li>
            <li>
              <b>Exclusion panel:</b> MPO, CD20/PAX5, CD3, CD30, ALK,
              cytokeratins, SOX10, HMB45, ERG.
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="font-bold text-slate-900">Classification Notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            <li>
              Follicular dendritic cell sarcoma and fibroblastic reticular cell
              tumor are classified among stromal-derived neoplasms of lymphoid
              tissues, not in this group.
            </li>
            <li>
              BPDCN is included here as a plasmacytoid dendritic-cell neoplasm.
            </li>
            <li>
              Secondary histiocytic/dendritic neoplasms are classified by their
              current phenotype; compare molecular findings with any antecedent
              lymphoma/leukemia.
            </li>
            <li>
              Acute monocytic leukemia is not classified as histiocytic sarcoma.
            </li>
          </ul>
        </div>
      </section>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="hd-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, markers, morphology, or mutations
          </label>
          <input
            id="hd-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search: CD1a, langerin, CD163, TCF4, emperipolesis, ALK..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-80">
          <label
            htmlFor="hd-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="hd-group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
          >
            {groups.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setOpen(all ? [] : filtered.map((e) => e.name))}
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
        >
          {all ? "Collapse All" : "Expand All"}
        </button>
      </div>
      <div className="mb-3 flex justify-between text-xs text-slate-500">
        <span>{filtered.length} diagnostic entities</span>
        <span>Expand a diagnosis for full details.</span>
      </div>
      <div className="space-y-3">
        {filtered.map((e, i) => {
          const shown = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={shown}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {shown ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {shown && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Clinical Profile">
                        <p className="text-sm leading-6 text-slate-700">
                          {e.clinical}
                        </p>
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <Bullets items={e.criteria} />
                      </Section>
                      <Section title="Histopathology">
                        <Bullets items={e.histology} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype">
                        <Bullets items={e.ihc} />
                      </Section>
                      <Section title="Molecular Pathology">
                        <Bullets items={e.molecular} />
                      </Section>
                      <Section title="Differential Diagnosis">
                        <Bullets items={e.differential} />
                      </Section>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching entities. Try another search term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for histiocytic and dendritic cell
        neoplasms. Correlate morphology, immunophenotype, molecular findings,
        and clinical/radiologic distribution.
      </footer>
    </main>
  );
}
