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
    name: "Glomus Tumor",
    group: "Benign / malignant spectrum",
    behavior:
      "Usually benign; malignant tumors are aggressive; uncertain malignant potential is a separate category",
    site: "Distal extremities, especially subungual region, hand, wrist, and foot; rare visceral/deep tumors, with an unusual gastric predilection.",
    clinical: [
      "Cutaneous lesions: usually <10 mm, reddish-blue nodules with longstanding pain, often cold- or touch-triggered.",
      "Deep/visceral lesions present as nonspecific masses. Most patients are 20–40 years old; subungual tumors are more common in women. Multiple lesions occur in approximately 10%.",
      "Familial multiple glomus tumors (glomuvenous malformations) are autosomal dominant and associated with GLMN inactivation; NF1-associated digital tumors may be multiple.",
    ],
    criteria: [
      "Essential: monomorphic round-to-epithelioid cells with central round nuclei and sharply defined borders, arranged in perivascular nests.",
      "Malignant: marked nuclear atypia (irrespective of mitotic activity) OR atypical mitotic figures. A benign-appearing component is often present.",
      "If no benign precursor is identified, demonstrate SMA and pericellular collagen IV and/or supportive molecular findings.",
      "Tumors with at least one atypical feature other than nuclear pleomorphism, but not meeting malignant criteria, are of uncertain malignant potential.",
    ],
    morphology: [
      "Glomus cells are small, uniform, rounded, with central round nuclei, amphophilic to lightly eosinophilic cytoplasm, and sharp borders; oncocytic/epithelioid change may occur.",
      "Solid type (~75%): nests of glomus cells around capillary-sized vessels.",
      "Glomuvenous malformation/glomangioma (~20%): cavernous hemangioma-like channels with small clusters of glomus cells.",
      "Glomangiomyoma: transition from round glomus cells to elongated mature smooth-muscle-like cells.",
      "Glomangiopericytoma pattern: branching hemangiopericytoma-like vessels. Glomangiomatosis: diffuse vascular-malformation-like architecture with glomus cells investing vessel walls.",
      "Symplastic glomus tumor: striking nuclear atypia without other malignant features (e.g., large size, deep location, mitotic activity, necrosis).",
    ],
    ihc: [
      "Typically SMA and muscle-specific actin positive; h-caldesmon positive.",
      "Pericellular collagen IV is desirable, particularly for malignant tumors without a benign precursor.",
      "CD34 is focal or absent. BRAF V600E IHC may be positive in the mutated subset; gastric tumors are commonly synaptophysin-positive.",
    ],
    molecular: [
      "Sporadic soft-tissue/visceral tumors may harbor NOTCH-family rearrangements, commonly CARMN (MIR143HG)::NOTCH1/2/3.",
      "NOTCH rearrangements were not detected in subungual glomus tumors or other pericytic tumors in the supplied source.",
      "A small subset has BRAF or KRAS variants; BRAF variants have been associated with malignant histology.",
      "Familial multiple tumors: germline GLMN inactivation; NF1-associated tumors: biallelic NF1 inactivation.",
    ],
    differential: [
      [
        "Myopericytoma",
        "Round, sharply demarcated glomus cells in nests versus oval/spindle myoid cells in multilayered concentric perivascular cuffs.",
      ],
      [
        "Angioleiomyoma",
        "Mature smooth-muscle bundles around variably sized channels versus uniform round cells around capillaries.",
      ],
      [
        "Symplastic glomus tumor",
        "Marked atypia alone, without atypical mitoses or other malignant features, may be symplastic rather than malignant.",
      ],
      [
        "Gastric GIST",
        "Gastric glomus tumor is usually SMA-positive and may be synaptophysin-positive; interpret a differential-directed panel with morphology.",
      ],
      [
        "SFT/branching-vessel lesions",
        "A branching vascular pattern is not diagnostic; identify the characteristic perivascular round glomus-cell population and myoid phenotype.",
      ],
    ],
    pitfalls: [
      "Size >2 cm and deep location alone do not establish malignancy; these tumors may be of uncertain malignant potential.",
      "Infiltrative growth, high cellularity, and spindle-cell morphology are more frequent in malignant/uncertain-potential tumors but require integration with cytology and mitoses.",
      "Separate symplastic atypia from malignancy; atypical mitotic figures are a decisive malignant feature.",
    ],
    prognosis: [
      "Typical glomus tumors, glomuvenous malformations, and symplastic tumors are benign.",
      "Malignant tumors may metastasize; disease-related death has been reported in up to 40%. Some large visceral tumors without other atypical features have behaved aggressively.",
    ],
  },
  {
    name: "Myopericytoma",
    group: "Benign / malignant spectrum",
    behavior:
      "Usually benign; rare deep-seated malignant tumors may metastasize",
    site: "Usually dermis/subcutis, especially distal extremities; less often proximal extremities, neck, trunk, and oral cavity. Deep, visceral, and intracranial sites are rare.",
    clinical: [
      "Usually a painless, slow-growing superficial nodule present for years; most are solitary, but multiple lesions/myopericytomatosis occur.",
      "Any age, predominantly adults. EBV association has been reported in patients with AIDS.",
    ],
    criteria: [
      "Essential: bland oval-to-spindle myoid cells in multilayered concentric growth around numerous small vessels.",
      "SMA, h-caldesmon, and collagen IV support the diagnosis; desmin/CD34 are at most focal.",
      "Malignant myopericytoma is exceptionally rare: typically deep, infiltrative, with marked atypia and high mitotic count.",
    ],
    morphology: [
      "Unencapsulated, usually well-circumscribed nodular/lobular lesion; cellularity ranges from solid to hypocellular collagenous/myxoid.",
      "Characteristic concentric multilayered cuffs of bland oval-to-spindle myoid cells around numerous small vessels; vessel caliber varies and branching vessels may occur.",
      "Fascicular/whorled areas may resemble myofibroma or angioleiomyoma; glomus-like and combined patterns occur.",
      "Intravascular examples occur. Degenerative changes include symplastic atypia, hyalinization, and cystic change.",
      "Myopericytomatosis describes diffuse dermal/subcutaneous involvement by numerous microscopic nodules.",
    ],
    ihc: [
      "SMA, h-caldesmon, and collagen IV typically positive.",
      "Desmin and CD34 usually negative or only focally positive.",
    ],
    molecular: [
      "PDGFRB variants occur in a subset across myopericytoma, myopericytomatosis, and myofibroma; NOTCH3 variants have also been reported.",
      "Molecular testing is not clinically relevant for routine diagnosis in the supplied source.",
    ],
    differential: [
      [
        "Glomus tumor",
        "Concentric spindle/ovoid perivascular cuffs favor myopericytoma; round glomus cells in nests favor glomus tumor.",
      ],
      [
        "Angioleiomyoma",
        "Mature eosinophilic smooth-muscle bundles and vascular channels favor angioleiomyoma; layered perivascular cells favor myopericytoma.",
      ],
      [
        "Myofibroma",
        "Biphasic primitive cellular zones plus hyalinized myoid nodules favor myofibroma; uniform concentric cuffs favor myopericytoma.",
      ],
      [
        "Solitary fibrous tumor",
        "Branching vessels overlap; concentric myoid cuffs and SMA/h-caldesmon support myopericytoma.",
      ],
    ],
    pitfalls: [
      "Intravascular growth does not imply malignancy.",
      "Degenerative/symplastic atypia may occur in otherwise conventional tumors.",
      "Increased cellularity alone is insufficient for malignancy; require convincing atypia, infiltrative growth, and high mitotic activity.",
    ],
    prognosis: [
      "Most do not recur, even after marginal/incomplete excision; apparent recurrence may represent persistent growth.",
      "Rare malignant tumors have shown aggressive growth, distant spread, and poor outcome.",
    ],
  },
  {
    name: "Myofibroma / Myofibromatosis",
    group: "Benign; clinical risk depends on distribution",
    behavior:
      "Solitary myofibroma has an excellent prognosis; multicentric/visceral infantile disease may be life-threatening",
    site: "Solitary lesions: skin of extremities, head/neck, and trunk. Infantile myofibromatosis may involve liver, heart, GI tract, brain, and bone.",
    clinical: [
      "May be congenital, arise in the first 2 years, or occur in adults; adult cases show male predominance.",
      "Solitary or multicentric. Congenital/early-childhood lesions may involve viscera or bone.",
      "A subset of familial infantile cases is autosomal dominant with variable penetrance; germline PDGFRB variants are established.",
    ],
    criteria: [
      "Essential: biphasic zonation with primitive cellular areas (often branching hemangiopericytoma-like vessels) and peripheral nodules/fascicles of hyalinized myoid spindle cells.",
      "Primitive zones may show mitoses, necrosis, and calcification, particularly in infants; these findings alone do not establish malignancy.",
      "Both components typically express SMA and collagen IV; desmin and h-caldesmon are usually negative.",
    ],
    morphology: [
      "Well-circumscribed nodule with biphasic architecture.",
      "Primitive component: plump immature spindle cells with branching hemangiopericytoma-like vessels; cellularity and mitotic activity may be prominent.",
      "Mature component: peripheral nodules/fascicles of variably hyalinized myoid spindle cells; chondroid-appearing matrix may occur.",
      "Zonation may be haphazard or reversed in older children/adults. Infantile lesions may consist almost entirely of primitive cellular zones.",
      "Intravascular extension is common and does not imply malignancy. Atypical cases may show high cellularity, predominantly fascicular growth, infiltrative growth, or perineurial invasion.",
    ],
    ihc: [
      "Both components express SMA and collagen IV.",
      "Desmin and h-caldesmon are usually negative.",
    ],
    molecular: [
      "Germline PDGFRB variants underlie a subset of familial autosomal dominant infantile myofibromatosis.",
      "NOTCH3 variants have also been reported in familial myofibromatosis and across the myopericytoma/myofibroma spectrum.",
      "Routine molecular testing is not clinically relevant in the supplied source.",
    ],
    differential: [
      [
        "Myopericytoma",
        "Biphasic primitive-to-hyalinized zonation favors myofibroma; concentric multilayered cuffs throughout favor myopericytoma.",
      ],
      [
        "Infantile hemangiopericytoma",
        "Historical term for cellular infantile myofibroma; use myofibroma.",
      ],
      [
        "SFT",
        "Branching vessels overlap, but biphasic zonation and SMA/collagen IV support myofibroma.",
      ],
      [
        "Malignant spindle-cell neoplasm",
        "Mitoses/necrosis can occur in primitive zones; integrate atypia, infiltrative pattern, and biphasic architecture.",
      ],
    ],
    pitfalls: [
      "Intravascular extension is common and is not a malignancy criterion.",
      "Mitoses, necrosis, and calcification may be present in cellular infantile lesions.",
      "Distinguish solitary from multicentric/generalized disease with visceral involvement.",
    ],
    prognosis: [
      "Solitary lesions have excellent prognosis and do not recur or metastasize.",
      "Infants with generalized disease involving viscera/brain have worse outcomes.",
      "PDGFRB-mutant pediatric disease may respond to tyrosine kinase inhibitors such as imatinib.",
    ],
  },
  {
    name: "SRF-Rearranged Myoid Neoplasm",
    group: "Usually benign",
    behavior: "Usually benign; rare metastatic case reported",
    site: "Usually deep soft tissue (skeletal muscle); less often subcutis. Trunk, head/neck, and extremities; rare visceral examples.",
    clinical: [
      "Painless mass of variable duration; wide age range (infancy–63 years), most in children/young adults; approximately equal sex distribution.",
    ],
    criteria: [
      "Essential: monomorphic ovoid-to-spindle cells with fibrillary cytoplasm in short fascicles, files, or solid growth, showing myoid/immature smooth-muscle differentiation.",
      "One or more smooth-muscle markers support myoid differentiation; myogenin and MYOD1 should be negative.",
      "Definitive diagnosis requires SRF fusion detection; targeted RNA sequencing or SRF break-apart FISH is recommended.",
    ],
    morphology: [
      "Well-demarcated, unencapsulated, homogeneous tan-white/rubbery mass; most <5 cm, occasional tumors >15 cm.",
      "Uniform ovoid-to-spindle cells resembling smooth muscle, with fibrillary cytoplasm and bland nuclei, arranged in short fascicles/files or solid areas.",
      "Some show myofibroma-like biphasic growth with primitive round-cell nests and surrounding myoid fascicles; tumor may protrude into dilated vessels.",
      "Calcification and collagenous stroma are common. Most have low mitotic activity, but a subset has >10 mitoses/2 mm² and focal necrosis.",
    ],
    ihc: [
      "Most express SMA, desmin, and h-caldesmon; profile varies by fusion partner.",
      "SRF::RELA commonly coexpresses SMA/desmin; SRF::ICA1L is often desmin-negative.",
      "Cytokeratin expression is variable. Myogenin and MYOD1 are negative.",
    ],
    molecular: [
      "Defining SRF fusion; common partners RELA, ICA1L, CITED1/2, NCOA2; rare partners include MKL2, C3orf62, ARGFXP1, NFKBIE.",
      "Most have similar SRF exon 4 breakpoints. Confirm with targeted RNA sequencing or SRF break-apart FISH.",
      "SRF fusions also occur in a rare subset of well-differentiated spindle-cell rhabdomyosarcoma in very young children; correlate with skeletal-muscle markers.",
    ],
    differential: [
      [
        "Leiomyoma/leiomyosarcoma",
        "Smooth-muscle markers overlap; SRF fusion and full morphology/context distinguish. High mitotic activity or necrosis warrants careful evaluation.",
      ],
      [
        "Myofibroma",
        "Myofibroma has characteristic biphasic primitive/hyalinized zones; SRF tumor more often has short smooth-muscle-like fascicles and requires fusion confirmation.",
      ],
      [
        "Spindle-cell rhabdomyosarcoma",
        "Myogenin/MYOD1 expression supports skeletal-muscle differentiation; usual SRF-rearranged myoid neoplasm is negative.",
      ],
      [
        "Other pericytic tumors",
        "SMA/desmin/h-caldesmon are not specific; SRF fusion is required for definitive classification.",
      ],
    ],
    pitfalls: [
      "Smooth-muscle phenotype alone is insufficient.",
      "High mitotic activity/focal necrosis occur in a minority; integrate fusion, morphology, and clinical behavior.",
      "A reported metastatic tumor was 19 cm, highly mitotic, and SRF::ICA1L-positive; this does not establish generally malignant behavior.",
    ],
    prognosis: [
      "Most follow a benign course; one lung-metastatic case is reported in the supplied source.",
    ],
  },
  {
    name: "Angioleiomyoma",
    group: "Benign",
    behavior: "Benign; recurrence after excision is very uncommon",
    site: "Usually dermis/subcutis of extremities (lower > upper); also head/neck and trunk. Solid subtype favors lower extremity in women; venous subtype more often head/neck; cavernous subtype more often upper extremity.",
    clinical: [
      "Firm, well-circumscribed, slow-growing nodule; approximately half are painful, particularly solid type.",
      "Broad age range, peaking in third–sixth decades; overall M:F approximately 2:3. Usually solitary and <2 cm.",
    ],
    criteria: [
      "Essential: well-circumscribed tumor of cytologically bland, well-differentiated smooth-muscle cells around variably sized vascular channels.",
      "Subtypes by predominant vascular morphology: solid, venous, cavernous; mixed patterns are common.",
      "SMA and h-caldesmon are desirable; desmin and calponin are commonly positive.",
    ],
    morphology: [
      "Bundles of bland smooth-muscle cells with intervening vessels of variable caliber.",
      "Solid: compact smooth-muscle bundles with thin-walled slit-like channels.",
      "Venous: thick-walled muscle-coated vessels; vessel-wall muscle swirls and blends with intervascular bundles.",
      "Cavernous: dilated vascular channels with intervascular smooth-muscle bundles that may be difficult to distinguish from vessel walls.",
      "Myopericytoma-like concentric perivascular areas may occur. Adipocytic metaplasia, hyalinization, calcification, and degenerative atypia may be present; mitoses are absent.",
    ],
    ihc: [
      "Strong diffuse SMA and calponin; usually diffuse h-caldesmon and desmin.",
      "HMB45 and Melan-A are negative, including tumors with adipocytic metaplasia.",
    ],
    molecular: [
      "A subset has NOTCH2 rearrangements or PDGFRB/NOTCH3 variants; rare reports include Xq22/IRS4 rearrangement and CARMN::TXK fusion.",
      "Molecular testing is not clinically relevant for routine diagnosis.",
    ],
    differential: [
      [
        "Myopericytoma",
        "Mature smooth-muscle bundles/channels favor angioleiomyoma; concentric multilayered cuffs of less eosinophilic myoid cells favor myopericytoma.",
      ],
      [
        "Glomus tumor",
        "Uniform round glomus cells in perivascular nests versus mature smooth-muscle fascicles.",
      ],
      [
        "Angiomyolipoma",
        "Do not call angioleiomyoma with adipocytic metaplasia angiomyolipoma; PEComa typically expresses HMB45/Melan-A.",
      ],
      [
        "Leiomyoma",
        "Numerous vascular channels intimately associated with smooth-muscle bundles define angioleiomyoma.",
      ],
    ],
    pitfalls: [
      "Adipocytic metaplasia does not imply angiomyolipoma; HMB45/Melan-A remain negative.",
      "Degenerative atypia may occur, but mitoses are absent in conventional angioleiomyoma.",
      "The continuum with myopericytoma can complicate classification; focus on mature smooth-muscle bundles versus concentric perivascular layering.",
    ],
    prognosis: ["Benign; recurrence after surgical excision is very uncommon."],
  },
];
const groups = [
  "All",
  "Benign",
  "Benign / malignant spectrum",
  "Benign; clinical risk depends on distribution",
  "Usually benign",
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
export default function PericyticTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Glomus Tumor",
    "Myopericytoma",
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
            PathologyGPS / Soft Tissue Tumors / Pericytic Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Pericytic Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference focused on essential
                criteria, myoid differentiation, molecular confirmation, and
                practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Read the perivascular architecture before interpreting the
                immunostains.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Round glomus cells, concentric myopericytic cuffs, biphasic
                myofibroma, and mature smooth-muscle bundles are distinct
                patterns despite overlapping myoid markers.
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
                "Establish the setting",
                "Record site, depth, age, multiplicity, and relationship to digits, skin, skeletal muscle, or viscera.",
              ],
              [
                "Identify the dominant cell",
                "Round uniform glomus cells; concentric oval/spindle myoid cells; biphasic myofibroma; or mature smooth-muscle cells.",
              ],
              [
                "Read the vascular pattern",
                "Capillary-centered nests, concentric cuffs, branching vessels, or variably sized muscle-coated channels.",
              ],
              [
                "Assess atypia carefully",
                "Separate symplastic/degenerative atypia from true malignancy; assess atypical mitoses, infiltrative growth, mitotic activity, and necrosis.",
              ],
              [
                "Use targeted ancillary tests",
                "SMA/h-caldesmon/collagen IV for myoid phenotype; SRF fusion for SRF-rearranged neoplasm; molecular tests only where source supports utility.",
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
          <Panel title="Behavior categories">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Benign:</b> conventional glomus tumor, glomuvenous
                malformation, symplastic glomus tumor, most myopericytomas,
                solitary myofibroma, and angioleiomyoma.
              </p>
              <p>
                <b>Uncertain malignant potential:</b> glomus tumors with
                atypical features that do not meet malignant criteria; size/deep
                location alone are insufficient.
              </p>
              <p>
                <b>Rare malignant forms:</b> malignant glomus tumor and
                malignant myopericytoma; evaluate cytology, mitoses, necrosis,
                and infiltrative growth.
              </p>
              <p>
                <b>Clinical distribution matters:</b> solitary myofibroma is
                usually indolent, whereas generalized infantile myofibromatosis
                with visceral/brain involvement has a worse outcome.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield morphology and ancillary tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Glomus tumor",
                      "SMA, h-caldesmon, collagen IV; NOTCH-family fusions in subset",
                    ],
                    [
                      "Myopericytoma",
                      "Concentric perivascular cuffs; SMA, h-caldesmon, collagen IV",
                    ],
                    ["Myofibroma", "Biphasic zonation; SMA and collagen IV"],
                    [
                      "SRF-rearranged myoid neoplasm",
                      "SRF fusion by RNA sequencing or break-apart FISH",
                    ],
                    [
                      "Angioleiomyoma",
                      "Mature smooth-muscle bundles; SMA, calponin, h-caldesmon, desmin",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
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
                Search by entity, morphology, site, marker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. SMA, collagen IV, PDGFRB, SRF..."
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
                          <table className="w-full min-w-[600px] text-left text-sm">
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
        <Panel title="High-stakes comparison: perivascular myoid tumors">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Glomus tumor</th>
                  <th className="py-2 pr-3">Myopericytoma</th>
                  <th className="py-2 pr-3">Myofibroma</th>
                  <th className="py-2">Angioleiomyoma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Dominant cell</td>
                  <td className="py-2 pr-3">Round glomus cells</td>
                  <td className="py-2 pr-3">Oval/spindle myoid cells</td>
                  <td className="py-2 pr-3">Primitive + mature myoid cells</td>
                  <td className="py-2">Mature smooth-muscle cells</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Architecture</td>
                  <td className="py-2 pr-3">Perivascular nests</td>
                  <td className="py-2 pr-3">Concentric multilayered cuffs</td>
                  <td className="py-2 pr-3">Biphasic zonation</td>
                  <td className="py-2">
                    Muscle bundles around vascular channels
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Key marker pattern
                  </td>
                  <td className="py-2 pr-3">SMA, h-caldesmon, collagen IV</td>
                  <td className="py-2 pr-3">SMA, h-caldesmon, collagen IV</td>
                  <td className="py-2 pr-3">SMA, collagen IV</td>
                  <td className="py-2">SMA, calponin, h-caldesmon, desmin</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Useful distinction
                  </td>
                  <td className="py-2 pr-3">Round cells / capillary nests</td>
                  <td className="py-2 pr-3">Layered perivascular growth</td>
                  <td className="py-2 pr-3">Primitive and hyalinized zones</td>
                  <td className="py-2">Mature muscle / channel pattern</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Sampling and reporting checklist">
          <Bullets
            items={[
              "Document exact site, depth, size, and relationship to skin, digit, tendon, skeletal muscle, or viscera.",
              "Sample heterogeneous areas, especially infiltrative edges, solid nodules, necrosis, and areas with cytologic atypia.",
              "For glomus tumors, distinguish symplastic atypia from malignant criteria; record atypical mitoses, mitotic activity, necrosis, and growth pattern.",
              "For myopericytoma/myofibroma, assess concentric perivascular cuffs versus biphasic zonation; do not interpret intravascular extension alone as malignancy.",
              "For SRF-rearranged myoid neoplasm, obtain molecular confirmation by RNA sequencing or SRF break-apart FISH.",
              "For angioleiomyoma, describe predominant solid, venous, or cavernous vascular pattern and document any atypia or mitoses.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO excerpt. Molecular and immunohistochemical findings are presented
          within the limits stated by the source; they are not substitutes for
          morphology and clinicopathologic correlation.
        </footer>
      </div>
    </main>
  );
}
