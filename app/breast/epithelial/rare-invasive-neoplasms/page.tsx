import Link from "next/link";

type Entity = {
  id: string;
  name: string;
  group: string;
  signature: string;
  morphology: string[];
  immuno: string[];
  molecular: string[];
  differential: string[];
  behavior: string;
  criteria: string[];
};

const entities: Entity[] = [
  {
    id: "acinic",
    name: "Acinic Cell–Like Carcinoma",
    group: "Salivary gland–like carcinoma",
    signature:
      "Granular or clear cells, often with PAS-D-positive cytoplasmic granules; frequently associated with an MGA-like pattern.",
    morphology: [
      "Architecture ranges from microglandular (MGA-like) growth to solid nests, sometimes with central necrosis; the patterns may merge.",
      "At least a subset of tumour cells has abundant, variably eosinophilic and basophilic granular cytoplasm. Paneth-like cells may occur but are uncommon.",
      "Cells may have clear cytoplasm, centrally located atypical nuclei, and distinct nucleoli; atypia and mitotic activity are often more pronounced in solid areas.",
      "High-grade DCIS may be present. A high-grade invasive component or metaplastic carcinoma may coexist.",
    ],
    immuno: [
      "Often triple-negative, although rare ER- and/or PR-positive cases have been reported.",
      "Serous/acinar differentiation: lysozyme and α1-antichymotrypsin; S100, EMA, and low-molecular-weight keratins are commonly positive.",
      "PAS-D can highlight intracellular granules. CK5/6, GCDFP-15, and AR may be positive in subsets.",
      "NR4A3 immunohistochemistry is generally negative in breast acinic cell–like carcinoma; this helps distinguish it from salivary gland acinic cell carcinoma.",
    ],
    molecular: [
      "The molecular profile is closer to triple-negative breast carcinoma and the microglandular adenosis (MGA) family than to salivary gland acinic cell carcinoma.",
      "The NR4A3-associated t(4;9) rearrangement characteristic of many salivary gland acinic cell carcinomas has not been identified in breast acinic cell–like carcinoma.",
    ],
    differential: [
      "Microglandular adenosis and atypical MGA: basement membrane material surrounds MGA glands; EMA is commonly negative in MGA. The boundary can be difficult in limited samples.",
      "Secretory carcinoma: consider ETV6::NTRK3 testing when morphology overlaps; this fusion is not characteristic of acinic cell–like carcinoma.",
      "Conventional high-grade triple-negative carcinoma and mixed carcinoma; use cytology and acinar differentiation markers to support classification.",
    ],
    behavior:
      "Outcome data are limited. Pure acinic cell–like carcinoma often has a relatively favorable course, but nodal and distant metastases have been reported. A coexisting high-grade component is associated with more aggressive behavior.",
    criteria: [
      "MGA-like and/or solid architecture with granular cytoplasm.",
      "Eosinophilic and basophilic cytoplasmic granules, ideally highlighted by PAS-D.",
      "Supportive serous/acinar immunophenotype, interpreted with morphology.",
    ],
  },
  {
    id: "adcc",
    name: "Adenoid Cystic Carcinoma (AdCC)",
    group: "Salivary gland–like carcinoma",
    signature:
      "Dual epithelial–myoepithelial cell populations with true lumina and basement-membrane-rich pseudolumina; MYB pathway alterations are common.",
    morphology: [
      "Classic AdCC: tubular and cribriform areas with luminal epithelial cells and peripheral/basal myoepithelial cells.",
      "True lumina contain epithelial mucin; pseudolumina contain stromal matrix and basement membrane material, sometimes with fibroblasts and small vessels.",
      "Classic tumours usually have low mitotic activity, limited atypia, and no prominent necrosis; perineural invasion may occur.",
      "Solid-basaloid AdCC (SB-AdCC) shows solid nests or trabeculae of basaloid cells, increased atypia and mitoses, and sometimes necrosis. High-grade transformation is rare.",
    ],
    immuno: [
      "Luminal cells: CK7/CK8 and EMA; KIT (CD117) is often strong in the luminal component.",
      "Myoepithelial/basal cells: p63, CK5/6, CK14, calponin, smooth muscle myosin heavy chain, or CD10, depending on the case.",
      "Collagen IV and laminin highlight basement membrane material in pseudolumina.",
      "MYB is often diffusely positive in classic AdCC. Most cases are ER-negative, PR-negative, and HER2-negative.",
    ],
    molecular: [
      "Classic AdCC commonly harbors MYB::NFIB fusion; MYBL1 rearrangements or MYB amplification may occur in fusion-negative cases.",
      "MYB/MYBL1 rearrangements are less frequent in SB-AdCC; alterations involving chromatin modifiers or NOTCH signaling may be found.",
    ],
    differential: [
      "Tubular carcinoma and invasive cribriform carcinoma: usually strongly ER/PR-positive and lack the characteristic dual cell population and matrix-filled pseudolumina.",
      "Microglandular adenosis: lacks the characteristic dual epithelial–myoepithelial composition of AdCC.",
      "Collagenous spherulosis: benign intraductal process; correlate with the overall architecture and a generally less supportive KIT/MYB profile.",
      "SB-AdCC may mimic basaloid carcinoma or small cell neuroendocrine carcinoma; search for classic AdCC areas and use neuroendocrine markers when appropriate.",
    ],
    behavior:
      "Classic breast AdCC usually behaves favorably despite a triple-negative phenotype. SB-AdCC has a higher risk of nodal and distant metastasis. Prognosis in high-grade transformation is uncertain because reported cases are few.",
    criteria: [
      "Classic: invasive tubular/cribriform/solid tumour with dual cell populations and true lumina plus matrix-filled pseudolumina.",
      "SB-AdCC: basaloid solid nests/trabeculae, often with increased mitotic activity and atypia.",
      "Use immunohistochemistry and, when needed, molecular testing to confirm the diagnosis.",
    ],
  },
  {
    id: "secretory",
    name: "Secretory Carcinoma",
    group: "Salivary gland–like carcinoma",
    signature:
      "Microcystic/honeycomb, tubular, solid, or papillary growth with abundant intracellular and extracellular secretions; ETV6::NTRK3 is characteristic.",
    morphology: [
      "Polygonal cells have eosinophilic granular or vacuolated cytoplasm and round-to-oval nuclei.",
      "Architectural patterns include microcystic/honeycomb, tubular, solid, and papillary areas, often mixed within one tumour.",
      "Intracytoplasmic and extracellular eosinophilic or amphophilic secretions are a key clue; they are commonly PAS-, mucicarmine-, and Alcian blue-positive.",
      "Nuclear atypia and mitotic activity are usually mild to moderate and low, respectively; an in situ component may be present.",
    ],
    immuno: [
      "Often positive for S100, mammaglobin, SOX10, MUC4, TRPS1, and polyclonal CEA; CK5/6 and/or EGFR may be positive.",
      "Most cases are ER-negative, PR-negative, and HER2-negative, although weak ER/PR expression can occur.",
      "Pan-TRK immunohistochemistry can be a useful screening adjunct, but a negative result does not always exclude an NTRK fusion.",
    ],
    molecular: [
      "ETV6::NTRK3 fusion is the defining molecular alteration in most cases and can be confirmed by RNA-based sequencing or an appropriate FISH/RT-PCR assay.",
      "Rare NTRK1 fusions have been reported. Molecular confirmation may also identify eligibility for TRK-targeted therapy in recurrent or metastatic disease.",
    ],
    differential: [
      "Acinic cell–like carcinoma: look for prominent granular cytoplasm and serous differentiation; ETV6::NTRK3 supports secretory carcinoma.",
      "Mucoepidermoid carcinoma: identify basaloid/intermediate, epidermoid, and mucous cell populations; MAML2 rearrangement supports MEC.",
      "Mucinous cystadenocarcinoma and other mucin-producing lesions, especially in limited biopsies.",
    ],
    behavior:
      "Usually indolent, with generally favorable long-term outcomes, but late recurrence and rare aggressive cases occur. Nodal metastases are documented; distant metastases are uncommon.",
    criteria: [
      "Characteristic secretory morphology with intracellular and extracellular secretions.",
      "Supportive immunophenotype, commonly including S100 and mammaglobin.",
      "ETV6::NTRK3 fusion or another appropriate molecular finding is highly supportive.",
    ],
  },
  {
    id: "mec",
    name: "Mucoepidermoid Carcinoma (MEC)",
    group: "Salivary gland–like carcinoma",
    signature:
      "Mixture of mucous, intermediate/basaloid, and epidermoid cells in cystic and solid patterns; true keratinization is not a typical feature.",
    morphology: [
      "Low-grade tumours often have prominent cystic spaces lined by mucous cells admixed with eosinophilic cells.",
      "Solid nests show a spectrum from basaloid/intermediate cells to epidermoid and mucous cells.",
      "High-grade tumours are more solid and show greater cytologic atypia, increased mitotic activity, and sometimes necrosis.",
      "An intraductal component may be present. True keratinization and squamous pearls argue for another diagnosis.",
    ],
    immuno: [
      "CK14 and p63 highlight basaloid and epidermoid cells; CK7 highlights mucous cells, producing a zonal pattern.",
      "GATA3, TRPS1, and mammaglobin may be retained. S100, SOX10, and MUC4 are variably positive.",
      "Most reported cases are triple-negative; weak ER positivity and rare HER2 amplification have been reported.",
    ],
    molecular: [
      "Low- to intermediate-grade cases may harbor CRTC1::MAML2 or, less often, CRTC3::MAML2 fusion.",
      "MAML2 rearrangement supports MEC in the appropriate morphologic setting; it is not reported in high-grade breast MEC in the source material.",
    ],
    differential: [
      "Secretory carcinoma: overlapping secretions and bland cytology; secretory carcinoma is associated with ETV6::NTRK3 and lacks the characteristic MEC cell mixture.",
      "Metaplastic squamous cell carcinoma: true keratinization favors squamous differentiation rather than MEC.",
      "Usual ductal hyperplasia and benign cysts can be mimics in limited samples; evaluate the full architecture and cytology.",
      "Low-grade MEC can overlap with breast or cutaneous hidradenoma; clinicopathologic correlation may be needed.",
    ],
    behavior:
      "Grade is the key prognostic feature. Low- and intermediate-grade tumours generally behave indolently; high-grade MEC may metastasize and can be lethal.",
    criteria: [
      "A convincing mixture of mucous, intermediate/basaloid, and epidermoid tumour cells.",
      "Cystic and/or solid architecture with no true keratinization.",
      "Consider MAML2 rearrangement testing when morphology is supportive.",
    ],
  },
  {
    id: "mca",
    name: "Mucinous Cystadenocarcinoma",
    group: "Other rare invasive carcinoma",
    signature:
      "Large mucin-filled cystic spaces lined by atypical tall columnar cells with abundant intracytoplasmic mucin and no peripheral myoepithelial layer.",
    morphology: [
      "Well-circumscribed mass with solid and cystic components; cystic spaces may contain gelatinous material.",
      "Cysts are lined by tall columnar cells with basally located nuclei, stratification, tufting, and papillary formations.",
      "Abundant intracytoplasmic mucin and luminal mucin are present; atypia can vary within the same tumour.",
      "Adjacent DCIS may be present but is not required.",
    ],
    immuno: [
      "Most cases are ER-negative, PR-negative, and HER2-negative, although rare ER-positive or HER2-positive cases have been reported.",
      "Typically CK7-positive and CK20-negative/CDX2-negative; TRPS1 may support breast origin in the appropriate context.",
      "The cystic structures lack a peripheral myoepithelial layer.",
    ],
    molecular: [
      "Molecular data are limited and no clinically established defining molecular alteration is currently identified in the source material.",
    ],
    differential: [
      "Conventional mucinous carcinoma: usually strongly ER/PR-positive and does not show the same large cystic architecture lined by tall mucinous columnar cells.",
      "Encapsulated papillary carcinoma: usually ER/PR-positive and lacks the prominent intracytoplasmic mucin characteristic of mucinous cystadenocarcinoma.",
      "Metastatic pancreatobiliary, ovarian, or gastrointestinal mucinous cystadenocarcinoma must be excluded, particularly when adjacent DCIS is absent; use a focused panel and clinical correlation.",
    ],
    behavior:
      "Reported cases are few. Many patients have had favorable outcomes, but local recurrence, distant metastasis, and disease-related deaths have been documented. Follow-up data remain limited.",
    criteria: [
      "Invasive carcinoma with large mucin-filled cystic spaces.",
      "Atypical tall columnar lining cells with abundant intracytoplasmic mucin.",
      "Exclude a metastasis from another primary site when the clinical or morphologic context warrants it.",
    ],
  },
  {
    id: "tccrp",
    name: "Tall Cell Carcinoma with Reversed Polarity (TCCRP)",
    group: "Other rare invasive carcinoma",
    signature:
      "Tall columnar cells in solid/solid-papillary nests with nuclei at the apical pole; IDH2 p.Arg172 mutation is common.",
    morphology: [
      "Circumscribed nests, often in dense fibrous stroma, with delicate fibrovascular cores creating a solid-papillary pattern.",
      "Tall columnar cells have abundant eosinophilic cytoplasm and typically bland round-to-oval nuclei, sometimes with grooves or intranuclear inclusions.",
      "The defining feature is reversed polarity: nuclei are apical rather than basal.",
      "Foamy histiocytes may occur in fibrovascular cores; true papillae or colloid-like cystic material can be present. Mitoses are usually rare.",
      "Tumour nests generally lack a myoepithelial layer, supporting classification as invasive even without a conspicuous desmoplastic response.",
    ],
    immuno: [
      "Usually triple-negative, with rare weak or focal hormone receptor expression; almost all reported cases are HER2-negative.",
      "CK7 and CK5/6 or CK14 are commonly expressed; basal keratin staining may be mosaic-like.",
      "Calretinin may be positive. Chromogranin and synaptophysin are typically negative.",
      "IDH2 R172 immunohistochemistry may be useful. Breast markers can be variably positive; TTF-1 and thyroglobulin are expected to be negative.",
    ],
    molecular: [
      "IDH2 p.Arg172 hotspot mutations are common; PIK3CA mutations are also frequent.",
      "BRAF mutations and RET/PTC rearrangements characteristic of papillary thyroid carcinoma have not been identified in the cases described in the source material.",
    ],
    differential: [
      "Tall cell variant of papillary thyroid carcinoma: verify breast origin using clinical history, breast-lineage markers, TTF-1/thyroglobulin, and molecular findings.",
      "Solid papillary carcinoma and other papillary breast lesions: pay particular attention to the reversed nuclear polarity and absence of myoepithelial cells.",
      "Neuroendocrine neoplasm: chromogranin and synaptophysin are typically negative in TCCRP.",
    ],
    behavior:
      "Most reported cases have followed an indolent course with favorable outcomes; rare nodal or distant metastases have been described. Published experience remains limited.",
    criteria: [
      "Predominantly solid-papillary invasive growth composed of tall columnar cells.",
      "Unequivocal apical/reversed nuclear polarity.",
      "Supportive immunophenotype and, when needed, IDH2 mutation or IDH2 R172 immunohistochemistry.",
    ],
  },
  {
    id: "net",
    name: "Neuroendocrine Tumor (NET) of the Breast",
    group: "Neuroendocrine neoplasm",
    signature:
      "Well-differentiated malignant epithelial neoplasm with convincing neuroendocrine morphology and diffuse, uniform neuroendocrine marker expression.",
    morphology: [
      "Well-differentiated neuroendocrine architecture may include organoid nests, trabeculae, ribbons, or rosettes, depending on the case.",
      "Diagnosis requires correlation of morphology with diffuse, uniform expression of neuroendocrine markers and exclusion of mimics.",
      "Neuroendocrine differentiation can occur in other breast carcinoma types; do not classify a tumour as a primary breast NET solely because one neuroendocrine marker is positive.",
    ],
    immuno: [
      "Use a panel of neuroendocrine markers, typically including synaptophysin and chromogranin; interpret staining extent and intensity with morphology.",
      "Assess ER, PR, and HER2 as for other invasive breast carcinomas.",
      "Breast-lineage markers and a comparison with any prior or concurrent neuroendocrine tumour may be useful in determining the primary site.",
    ],
    molecular: [
      "The source material does not identify a single defining molecular alteration for primary breast NET.",
    ],
    differential: [
      "Metastatic NET to the breast must be excluded using clinical history, imaging, and comparison with a known primary when available.",
      "Solid papillary carcinoma can show neuroendocrine differentiation and should be distinguished by its architecture and overall features.",
      "IBC-NST with neuroendocrine differentiation should not automatically be classified as a primary breast NET.",
    ],
    behavior:
      "Primary breast NETs are extremely rare. Prognosis and management depend on tumour grade, stage, and confirmation that the breast is the primary site.",
    criteria: [
      "Well-differentiated neuroendocrine morphology.",
      "Diffuse and uniform expression of neuroendocrine markers.",
      "Reasonable exclusion of metastatic NET and breast carcinoma mimics.",
    ],
  },
  {
    id: "nec",
    name: "Neuroendocrine Carcinoma (NEC) of the Breast",
    group: "Neuroendocrine neoplasm",
    signature:
      "High-grade malignant epithelial neoplasm with neuroendocrine differentiation; small cell and large cell patterns may occur.",
    morphology: [
      "High-grade cytology, brisk mitotic activity, and necrosis may be present; small cell morphology includes scant cytoplasm, nuclear molding, and finely granular chromatin.",
      "Large cell neuroendocrine carcinoma shows larger cells with more abundant cytoplasm and prominent nucleoli, while retaining neuroendocrine architecture.",
      "The diagnosis requires convincing morphology and neuroendocrine marker expression; exclude a metastatic neuroendocrine carcinoma.",
    ],
    immuno: [
      "Synaptophysin and chromogranin are commonly used to support neuroendocrine differentiation; use a panel and interpret in context.",
      "Evaluate ER, PR, and HER2 and use breast-lineage markers as appropriate.",
      "Clinical and radiologic correlation is essential, particularly to exclude a pulmonary or gastrointestinal primary.",
    ],
    molecular: [
      "No single defining molecular alteration is established in the source material for breast NEC; testing should be guided by the differential diagnosis and clinical context.",
    ],
    differential: [
      "Metastatic small cell lung carcinoma or another extra-mammary NEC: correlate with imaging and history; immunophenotype alone may not establish the site.",
      "Solid-basaloid AdCC and other high-grade basaloid carcinomas: seek defining morphology and use neuroendocrine markers.",
      "IBC-NST with focal neuroendocrine differentiation: assess the dominant morphology and extent of neuroendocrine features.",
    ],
    behavior:
      "Breast small cell NEC is associated with a worse prognosis than other breast carcinomas with neuroendocrine differentiation. Localized disease is generally approached using breast cancer principles, while metastatic cases may be considered for regimens used in small cell lung cancer in multidisciplinary care.",
    criteria: [
      "High-grade neuroendocrine carcinoma morphology.",
      "Supportive neuroendocrine marker expression.",
      "Exclusion of metastatic neuroendocrine carcinoma from another primary site.",
    ],
  },
];

const workflow = [
  {
    title: "1. Recognize the pattern",
    text: "Start with H&E: secretions, granular cytoplasm, dual cell populations, mucous/intermediate/epidermoid cells, reversed polarity, or neuroendocrine morphology.",
  },
  {
    title: "2. Choose a focused panel",
    text: "Use morphology-directed immunohistochemistry rather than a broad, indiscriminate panel. Include ER/PR/HER2 for clinical classification and lineage markers when the primary site is uncertain.",
  },
  {
    title: "3. Confirm when it matters",
    text: "Consider fusion or mutation testing for ETV6::NTRK3, MYB::NFIB/MYBL1, MAML2, or IDH2 when the differential diagnosis or treatment implications warrant it.",
  },
  {
    title: "4. Exclude metastasis",
    text: "For mucinous cystadenocarcinoma and neuroendocrine neoplasms in particular, correlate with history and imaging and exclude an extra-mammary primary.",
  },
  {
    title: "5. Report the clinical essentials",
    text: "Document type, Nottingham grade when applicable, invasive size, focality, LVI, margins, nodal findings, associated in situ disease, and predictive biomarkers according to current protocols.",
  },
];

const comparison = [
  [
    "Acinic cell–like carcinoma",
    "Granular cytoplasm; MGA-like to solid",
    "Lysozyme, α1-antichymotrypsin, S100, EMA; PAS-D granules",
    "No salivary-type NR4A3 rearrangement/overexpression",
  ],
  [
    "Adenoid cystic carcinoma",
    "Tubular/cribriform; true lumina and pseudolumina",
    "Luminal CK7/EMA; basal/myoepithelial p63/CK5/6; MYB",
    "MYB::NFIB; MYBL1 alterations in some cases",
  ],
  [
    "Secretory carcinoma",
    "Microcystic/honeycomb; intra- and extracellular secretions",
    "S100, mammaglobin, SOX10, MUC4; pan-TRK adjunct",
    "ETV6::NTRK3",
  ],
  [
    "Mucoepidermoid carcinoma",
    "Mucous + intermediate/basaloid + epidermoid cells",
    "CK7 in mucous cells; p63/CK14 in basaloid/epidermoid cells",
    "CRTC1::MAML2 or CRTC3::MAML2 in some cases",
  ],
  [
    "Mucinous cystadenocarcinoma",
    "Mucin-filled cysts lined by tall mucinous columnar cells",
    "CK7+, CK20−/CDX2−; TRPS1 may support breast origin",
    "No established defining alteration",
  ],
  [
    "TCCRP",
    "Tall columnar cells with apical nuclei; solid-papillary nests",
    "CK7 plus CK5/6 or CK14; IDH2 R172 IHC may help",
    "IDH2 p.Arg172; PIK3CA often mutated",
  ],
  [
    "Breast NET",
    "Well-differentiated neuroendocrine morphology",
    "Diffuse synaptophysin/chromogranin; ER/PR/HER2 as indicated",
    "No single defining alteration in source",
  ],
  [
    "Breast NEC",
    "High-grade neuroendocrine morphology, brisk mitoses/necrosis",
    "Neuroendocrine marker panel; breast-lineage markers as indicated",
    "No single defining alteration in source",
  ],
];

export default function RareInvasiveNeoplasmsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="py-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Rare Invasive Breast Neoplasms
          </h1>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Core principle
            </p>
            <h2 className="mt-2 text-lg font-semibold">Morphology leads</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recognize the defining architecture and cytology first.
              Immunostains and molecular assays should resolve a specific
              diagnostic question.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Clinical caution
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Triple-negative does not mean one biology
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Several rare entities are usually triple-negative but can have an
              indolent course. Accurate classification helps avoid both
              underdiagnosis and overtreatment.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Critical exclusion
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Rule out an extra-mammary primary
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This is especially important for neuroendocrine neoplasms and
              mucinous cystadenocarcinoma when an associated in situ component
              is absent.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
                Quick comparison
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                Morphology, immunophenotype, and molecular clues
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Markers are supportive, not standalone diagnoses. Use locally
              validated assays and current interpretive criteria.
            </p>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-[900px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  {[
                    "Entity",
                    "Key morphology",
                    "Useful IHC clues",
                    "Molecular clue",
                  ].map((h) => (
                    <th key={h} className="px-4 py-3 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i % 2 ? "bg-slate-50" : "bg-white"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`border-t border-slate-200 px-4 py-3 leading-6 ${j === 0 ? "font-semibold text-slate-900" : "text-slate-600"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
              Entity guide
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              Diagnostic profiles
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Each profile summarizes the defining pattern, useful ancillary
              studies, major mimics, and behavior described in the source
              material. Follow links to related PathologyGPS topics as those
              pages become available.
            </p>
          </div>
          <div className="mt-5 space-y-5">
            {entities.map((entity, index) => (
              <article
                key={entity.id}
                id={entity.id}
                className="scroll-mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-800">
                      {entity.group}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Profile {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                    {entity.name}
                  </h3>
                  <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-700">
                    {entity.signature}
                  </p>
                </div>
                <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Histopathology
                    </h4>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {entity.morphology.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h4 className="mt-5 font-semibold text-slate-900">
                      Immunohistochemistry
                    </h4>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {entity.immuno.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Molecular pathology
                    </h4>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {entity.molecular.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h4 className="mt-5 font-semibold text-slate-900">
                      Key differential diagnoses
                    </h4>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
                      {entity.differential.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold text-amber-950">
                        Behavior and prognosis
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-amber-950/80">
                        {entity.behavior}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-200 px-5 py-4 sm:px-6">
                  <h4 className="font-semibold text-slate-900">
                    Essential diagnostic checkpoints
                  </h4>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {entity.criteria.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 rounded-xl bg-slate-50 p-3 text-sm leading-5 text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Sign-out checklist
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Before finalizing the report
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Confirm that the defining morphology is present and representative.",
              "Use IHC to answer a specific differential diagnosis or lineage question.",
              "Order fusion/mutation testing when it can resolve classification or treatment relevance.",
              "For NET/NEC and mucinous cystadenocarcinoma, consider whether metastasis from another site has been excluded.",
              "Document invasive size, histologic type, grade when applicable, focality, LVI, margins, and nodes.",
              "Report ER, PR, and HER2 using current validated protocols; include additional biomarkers only when indicated.",
            ].map((item) => (
              <label
                key={item}
                className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-3 text-sm leading-6 text-slate-700"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-indigo-700"
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Educational reference for pathologists. Apply current WHO/CAP/ASCO
            guidance, validated laboratory procedures, and clinicopathologic
            correlation. Rare tumour outcome data are limited, and individual
            management decisions belong to the treating multidisciplinary team.
          </p>
        </section>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500">
          <span>PathologyGPS · Breast Pathology</span>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/breast/non-invasive-neoplasia"
              className="font-medium text-indigo-700 hover:text-indigo-900"
            >
              Non-Invasive Neoplasia
            </Link>
            <Link
              href="/breast/common-invasive-carcinoma"
              className="font-medium text-indigo-700 hover:text-indigo-900"
            >
              Common Invasive Carcinoma
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
