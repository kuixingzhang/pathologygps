"use client";

import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const items: Item[] = [
  {
    name: "Anal squamous intraepithelial lesion (LSIL / HSIL)",
    group: "Precursor",
    behavior: "Noninvasive squamous neoplasia",
    profile: [
      "Occurs in the anal canal, anal transformation zone, perianal skin, or more distant perianal skin.",
      "Classic condyloma is most frequent in young adults, particularly young men who have sex with men and people with HIV.",
      "Giant condyloma more often affects men in their 40s (reported male-to-female ratio, 2.7:1); pediatric cases also occur.",
      "Often asymptomatic; may present with single or multiple warty lesions, pruritus, discomfort, bleeding, or a large locally destructive mass.",
      "Risk is increased with HIV or other immunosuppression, transplantation, smoking, and sexual exposure.",
    ],
    criteria: [
      "LSIL: cytologic atypia and mitotic activity are confined to the lower one-third of the squamous epithelium, or unequivocal koilocytic changes are present.",
      "HSIL: marked cytologic atypia involves at least two-thirds of the epithelial thickness.",
      "HSIL shows loss of nuclear polarity and may contain atypical mitotic figures in the upper epithelial layers.",
      "Use the two-tier LAST terminology; historical AIN grades may be added parenthetically when clinically useful.",
      "For HPV-independent lesions, recognize differentiated intraepithelial neoplasia and verruciform acanthotic intraepithelial neoplasia; terminology is not yet fully codified.",
    ],
    histology: [
      "LSIL shows koilocytotic atypia, with enlarged irregular nuclei and perinuclear halos.",
      "Condyloma acuminatum is exophytic and papillomatous, with thickened epithelium, broad rete ridges, parakeratosis, and koilocytosis.",
      "HSIL shows full-thickness or at least two-thirds-thickness immature atypical squamous cells with increased mitoses and loss of maturation.",
      "Anal condylomas may contain both LSIL and HSIL; submit and examine the entire lesion adequately.",
      "Differentiated intraepithelial neoplasia shows basal/parabasal atypia and is associated with TP53 mutation.",
      "Verruciform acanthotic intraepithelial neoplasia shows hyperkeratosis and hypergranulosis, sometimes with upper epithelial cytoplasmic pallor.",
    ],
    ihc: [
      "HSIL typically shows strong, continuous block-type p16 staining extending from basal cells upward through the epithelium.",
      "LSIL may show focal or non-block p16 staining; some high-risk HPV-associated LSILs can be block-positive.",
      "HPV-independent TP53-mutant intraepithelial neoplasia may show aberrant p53 overexpression with absent p16 block staining.",
      "p53 and p16 do not reliably distinguish HPV-independent TP53-wildtype lesions from their mimics.",
    ],
    molecular: [
      "High-risk HPV, most often HPV16 or HPV18, drives most HSIL; HPV6 and HPV11 account for more than 90% of classic and giant condylomas.",
      "High-risk HPV E6/E7 oncoproteins disrupt p53 and RB1 pathways, producing p16 overexpression.",
      "HPV genotyping by PCR or RNA in situ hybridization can help distinguish LSIL from reactive/negative lesions in selected cases.",
      "TP53 mutation supports HPV-independent differentiated intraepithelial neoplasia; molecular testing is not established for TP53-wildtype verruciform acanthotic lesions.",
    ],
    differential: [
      [
        "Reactive squamous atypia",
        "Lacks convincing koilocytosis or the epithelial maturation/atypia pattern of SIL; p16 is not block-positive.",
      ],
      [
        "Anal transitional zone",
        "Can show immature squamous metaplasia; interpret p16 and atypia in the correct anatomic and morphologic context.",
      ],
      [
        "Pseudoepitheliomatous hyperplasia",
        "Reactive downgrowth with limited atypia and no destructive invasion; search for an underlying cause such as infection or granular cell tumor.",
      ],
      [
        "Invasive squamous cell carcinoma",
        "Requires stromal invasion; HSIL remains confined to the epithelium.",
      ],
    ],
    pitfalls: [
      "Do not use the obsolete three-tier AIN grading system as the primary diagnostic terminology.",
      "A negative p16 stain does not exclude LSIL and does not classify every HPV-independent lesion.",
      "Do not diagnose HSIL from p16 positivity alone without compatible morphology.",
      "A small biopsy may miss a separate HSIL focus in a condyloma or a focal invasive component.",
    ],
  },
  {
    name: "Anal squamous cell carcinoma",
    group: "Malignant",
    behavior: "Malignant; regional nodal and distant metastatic potential",
    profile: [
      "Arises in the anal canal or anal margin.",
      "Most patients are diagnosed in the sixth decade or later; immunodeficiency may be associated with younger presentation.",
      "Women have higher incidence rates than men in many populations, although HIV-related risk is particularly important in men.",
      "Common presentations are anal bleeding, pain, a palpable mass, or an indurated/friable ulcer; pruritus, discharge, altered bowel habits, and tenesmus may occur.",
      "Approximately 90% of cases are associated with HPV, most often HPV16.",
    ],
    criteria: [
      "Essential: invasive squamous neoplasia arising from anal squamous mucosa.",
      "Demonstrate destructive stromal invasion by atypical squamous cells; an associated in situ component may be present.",
      "Correlate with the exact site (anal canal, anal verge, or perianal skin) because regional lymphatic drainage differs.",
      "Verrucous carcinoma requires broad pushing invasion and adequate sampling to exclude conventional invasive SCC.",
    ],
    histology: [
      "Keratinizing tumors contain large eosinophilic cells with squamous maturation and keratinization.",
      "HPV-associated tumors may show basaloid morphology, with hyperchromatic nuclei, scant cytoplasm, and peripheral palisading around infiltrative nests or trabeculae.",
      "Rare tumors show hyalinized nests with an adenoid cystic-like pattern or urothelial-like morphology.",
      "Histologic patterns frequently overlap; routine morphologic subtyping and grading have no established clinical predictive value.",
      "Verrucous SCC shows exophytic and endophytic broad bulbous epithelial fronds with a pushing interface, minimal atypia, and rare basal mitoses.",
      "Verrucous carcinoma lacks HPV cytopathic effect; conventional SCC may arise within it and must be excluded by thorough sampling.",
    ],
    ihc: [
      "Tumor cells are typically positive for pancytokeratin, CK5/6, and p40.",
      "p16 is commonly block-positive in HPV-associated SCC; interpret with morphology because p16 positivity is not entirely specific.",
      "Use a differential-directed panel when melanoma, neuroendocrine carcinoma, or another poorly differentiated malignancy is considered.",
    ],
    molecular: [
      "HPV testing is etiologically informative but is not required to establish the diagnosis of invasive SCC.",
      "PIK3CA pathway alterations are frequent; FBXW7 and KMT2D alterations are also reported.",
      "TP53 mutations are more characteristic of HPV-negative SCC because HPV E6 functionally inactivates p53.",
      "PD-L1 expression occurs in approximately half of cases and may inform treatment assessment in the appropriate advanced-disease setting; it is not a diagnostic marker.",
    ],
    differential: [
      [
        "Pseudoepitheliomatous hyperplasia",
        "Shows limited atypia and no destructive invasion; an underlying infection or granular cell tumor may be found.",
      ],
      [
        "Perianal basal cell carcinoma",
        "Often shows stromal retraction and lacks atypical mitoses and an associated squamous in situ component.",
      ],
      [
        "Giant condyloma (Buschke–Löwenstein tumor)",
        "HPV-driven, usually HPV6/11; broad pushing growth but lacks unequivocal conventional SCC unless a malignant component is present.",
      ],
      [
        "Melanoma / neuroendocrine carcinoma",
        "Can mimic poorly differentiated SCC; use melanocytic or neuroendocrine markers with epithelial/squamous markers.",
      ],
    ],
    pitfalls: [
      "The term cloacogenic carcinoma is not recommended; classify these tumors as anal SCC.",
      "Do not diagnose verrucous carcinoma on a superficial or limited biopsy without excluding conventional SCC.",
      "An in situ component is helpful but not definitive because mimics may colonize the surface epithelium.",
      "p16 positivity alone does not establish HPV-driven SCC.",
    ],
  },
  {
    name: "Anal adenocarcinoma",
    group: "Malignant",
    behavior: "Malignant glandular neoplasm",
    profile: [
      "Rare primary malignancy, accounting for approximately 5–10% of anal cancers; most cases are mucosal-type.",
      "Median age is approximately 67 years; women account for about 48% of reported cases.",
      "Mucosal tumors resemble distal rectal adenocarcinoma or anal SCC clinically.",
      "Anal gland adenocarcinoma may present with bleeding or an anorectal mass.",
      "Fistula-associated adenocarcinoma usually arises after a longstanding fistula (often at least 10 years), commonly in Crohn disease; new mucous discharge is an important warning symptom.",
      "Primary perianal adenocarcinoma is very rare; reported cases include men and women in their sixth decade.",
    ],
    criteria: [
      "Essential: invasive glandular neoplasm arising from the anal canal or associated anal gland/fistula/perianal structures.",
      "Classify as mucosal or extramucosal and specify the subtype when possible: mucosal intestinal/transitional type, anal gland/duct, fistula-associated, or primary perianal.",
      "For fistula-associated carcinoma, document a pre-existing chronic fistula and exclude direct extension or metastasis from colorectal or other primary sites.",
      "Extramucosal tumors lack a luminal in situ component by definition, although secondary surface involvement may occur by erosion, colonization, or pagetoid spread.",
      "Correlate with clinical history, imaging, endoscopy, and examination to establish the primary site.",
    ],
    histology: [
      "Mucosal intestinal-type adenocarcinoma generally resembles colorectal adenocarcinoma and is usually HPV-independent.",
      "HPV-associated mucosal tumors may resemble stratified mucin-producing carcinoma, with infiltrative nests, intracytoplasmic mucin, peripheral palisading, apoptosis, and neutrophilic infiltrates.",
      "Another HPV-associated pattern resembles usual-type HPV-related endocervical adenocarcinoma, with papillary fronds, overlapping irregular nuclei, brisk mitoses, and apical apoptotic bodies.",
      "Anal gland adenocarcinoma typically forms haphazardly distributed glands lined by cuboidal cells with scant mucin; solid, stratified, and mucinous patterns also occur.",
      "Fistula-associated adenocarcinoma is usually mucinous and resembles colorectal-type mucinous adenocarcinoma; an adenoma-like component may be present.",
      "Primary perianal adenocarcinoma may arise in association with developmental cysts and may resemble colorectal adenocarcinoma.",
      "Any anal adenocarcinoma subtype may spread pagetoidly to anal squamous mucosa or perianal skin, producing secondary Paget disease.",
      "Primary anal Paget disease is an intraepithelial carcinoma with skin appendage differentiation and may become invasive.",
    ],
    ihc: [
      "HPV-associated mucosal tumors commonly express CK7 and p16; CK20 and p40 are usually negative in the stratified mucin-producing pattern.",
      "Usual-type HPV-associated tumors show CK7 and p16, variable CDX2, and minimal CK20.",
      "Anal gland adenocarcinoma typically expresses CK7 and MUC5AC and lacks CK20 and CDX2.",
      "Anal gland carcinoma is negative for CK5/6 and p63, which are constitutively expressed in benign anal glands.",
      "Fistula-associated tumors show variable phenotype: intestinal-type cases may express CK20 and MUC2, whereas others have an anal gland-like mucin profile.",
      "Primary Paget disease typically coexpresses CK7 and GCDFP-15 and lacks CK20 and CDX2; secondary Paget disease often expresses CK20 and may also express CK7.",
    ],
    molecular: [
      "High-risk HPV, most often HPV16, drives a subset of mucosal adenocarcinomas, particularly tumors with transitional-zone/non-intestinal phenotype.",
      "KRAS variants are reported in approximately 47% of cases; PIK3CA, NRAS, and BRAF variants are less frequent.",
      "Microsatellite instability is very rare; molecular data remain limited and no routine diagnostic molecular test is established.",
    ],
    differential: [
      [
        "Rectal/colorectal adenocarcinoma extending into the anal canal",
        "Assess the epicenter, mucosal precursor, imaging, and continuity with a rectal primary.",
      ],
      [
        "Anal gland adenocarcinoma",
        "CK7+/MUC5AC+, CK20-/CDX2- phenotype with haphazard glands and no luminal in situ component supports anal gland origin.",
      ],
      [
        "Fistula-associated adenocarcinoma",
        "Requires a longstanding fistula and exclusion of a colorectal primary; morphology and IHC may be variable.",
      ],
      [
        "Metastatic gynecologic, prostatic, or breast carcinoma",
        "Exclude a primary elsewhere, particularly for CK7-positive anal gland-like tumors.",
      ],
      [
        "Primary versus secondary anal Paget disease",
        "Primary: CK7+/GCDFP-15+, usually CK20-/CDX2-. Secondary: often CK20+, with possible CK7 coexpression and an underlying anorectal adenocarcinoma.",
      ],
    ],
    pitfalls: [
      "Do not assume every anal adenocarcinoma is colorectal-type; establish mucosal versus extramucosal origin.",
      "A pagetoid or surface component does not necessarily indicate a primary cutaneous Paget disease.",
      "CK7 positivity alone does not prove anal gland origin; integrate CK20, CDX2, MUC5AC, p63/CK5/6, HPV testing, and clinical findings.",
      "For fistula-associated carcinoma, a new mucous discharge or change in a longstanding fistula warrants careful evaluation.",
    ],
  },
  {
    name: "Inflammatory cloacogenic polyp",
    group: "Tumor-like",
    behavior: "Benign mucosal prolapse-related lesion",
    profile: [
      "Uncommon polypoid lesion of the anal transitional zone.",
      "Reported predominantly in North American and European populations.",
      "May present with rectal bleeding, prolapse-related symptoms, or an anal polyp.",
    ],
    criteria: [
      "Polypoid lesion with a mucosal prolapse pattern in the anal transitional zone.",
      "Identify epithelial hyperplasia with complex tubulovillous architecture and accompanying inflammatory/stromal changes.",
      "Interpret in the setting of mucosal prolapse rather than as an epithelial neoplasm.",
    ],
    histology: [
      "Hyperplastic epithelium forms complex tubulovillous glands.",
      "Active chronic inflammation and granulation tissue are present in the lamina propria.",
      "Vascular ectasia and smooth muscle proliferation are characteristic associated findings.",
      "Cystically dilated mucosal glands and extravasated mucin pools may be present in the lamina propria.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Conventional adenoma",
        "A true dysplastic epithelial proliferation lacks the characteristic prolapse-associated inflammatory and stromal pattern.",
      ],
      [
        "Anal squamous intraepithelial lesion",
        "SIL shows squamous cytologic atypia and, in HSIL, block-type p16; inflammatory cloacogenic polyp is a mixed mucosal prolapse lesion.",
      ],
      [
        "Solitary rectal ulcer / mucosal prolapse polyp",
        "Shares the mucosal prolapse spectrum; site and clinical context distinguish the specific presentation.",
      ],
    ],
    pitfalls: [
      "Do not overinterpret reactive epithelial hyperplasia as dysplasia or invasive carcinoma.",
      "Recognize the relationship to mucosal prolapse syndrome, which also includes solitary rectal ulcer syndrome, rectal prolapse, and proctitis cystica profunda.",
    ],
  },
  {
    name: "Anal fibroepithelial polyp (hypertrophied anal papilla / skin tag)",
    group: "Tumor-like",
    behavior: "Benign reactive polyp",
    profile: [
      "Common benign lesion of the anal transformation zone.",
      "Often occurs in the setting of chronic inflammation, hemorrhoids, mucosal prolapse, fissures, or Crohn disease.",
      "May present as an anal tag or polyp and can be mistaken clinically for condyloma.",
    ],
    criteria: [
      "Polyp covered by nonkeratinizing stratified squamous or transitional epithelium.",
      "Subepithelial stroma contains variable vessels, smooth muscle, and chronic inflammation.",
      "Correlate with trauma or chronic inflammatory conditions.",
    ],
    histology: [
      "Polypoid fibrovascular tissue is covered by squamous or transitional epithelium.",
      "Reactive hyperkeratosis or parakeratosis may occur.",
      "The stroma shows variable vascular, smooth muscle, and chronic inflammatory components.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Condyloma acuminatum",
        "Shows papillomatous epithelial proliferation and koilocytosis; a fibroepithelial polyp has a dominant stromal core.",
      ],
      [
        "Anal SIL",
        "Requires squamous epithelial atypia; reactive epithelial changes alone are insufficient.",
      ],
      [
        "Inflammatory cloacogenic polyp",
        "Shows more complex tubulovillous epithelial hyperplasia, granulation tissue, vascular ectasia, and mucosal prolapse changes.",
      ],
    ],
    pitfalls: [
      "Clinical resemblance to condyloma is common; base the diagnosis on epithelial morphology and stromal architecture.",
      "Do not interpret reactive hyperkeratosis or parakeratosis as evidence of HPV-associated dysplasia.",
    ],
  },
  {
    name: "Hemorrhoids",
    group: "Tumor-like",
    behavior: "Benign vascular plexus dilation",
    profile: [
      "The most common mass-like lesion in the anal region.",
      "May be internal (proximal to the dentate line) or external (distal to the dentate line).",
      "Associated with elevated intra-abdominal pressure and venous plexus dilation; may coexist with other anal lesions.",
    ],
    criteria: [
      "Dilated venous plexuses in the appropriate anatomic compartment.",
      "Internal hemorrhoids are covered by transitional or columnar epithelium; external hemorrhoids are covered by squamous epithelium.",
    ],
    histology: [
      "Dilated, congested vascular channels form the mass-like lesion.",
      "The covering epithelium reflects the location relative to the dentate line.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Vascular neoplasm",
        "Hemorrhoids show dilated venous plexuses without an atypical or destructive endothelial proliferation.",
      ],
      [
        "Anal fibroepithelial polyp",
        "A fibroepithelial polyp has a dominant fibrovascular stromal core rather than a dilated venous plexus.",
      ],
    ],
    pitfalls: [
      "Hemorrhoids may coexist with a separate epithelial lesion; do not assume they explain all symptoms or the entire mass.",
    ],
  },
  {
    name: "Ectopic tissue of the anal canal",
    group: "Tumor-like",
    behavior: "Benign heterotopia",
    profile: [
      "Rare; ectopic gastric mucosa is reported more often in men.",
      "Ectopic gastric mucosa may present with rectal bleeding, ulceration, or pain.",
      "Ectopic prostatic tissue has also been reported.",
    ],
    criteria: [
      "Identify tissue that is histologically native to another organ but located ectopically in the anal canal.",
      "Correlate with the clinical setting and exclude direct extension or metastasis when appropriate.",
    ],
    histology: [
      "Ectopic gastric mucosa shows gastric-type glands in the anal canal mucosa.",
      "Ectopic prostatic tissue shows prostatic-type glands and stroma.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Metastatic or directly extending carcinoma",
        "Assess cytologic atypia, destructive invasion, clinical history, and imaging; benign ectopic tissue lacks malignant features.",
      ],
      [
        "Anal gland adenocarcinoma",
        "Anal gland adenocarcinoma is invasive and typically forms infiltrative glands; benign ectopic tissue lacks destructive growth.",
      ],
    ],
    pitfalls: [
      "Do not diagnose malignancy solely because glandular tissue is present at an unusual site.",
    ],
  },
];

const cats = ["All", "Precursor", "Malignant", "Tumor-like"];

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
  if (!items.length) return null;
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

export default function AnalCanalTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Anal squamous intraepithelial lesion (LSIL / HSIL)",
    "Anal squamous cell carcinoma",
  ]);

  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            ...x.profile,
            ...x.criteria,
            ...x.histology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flat(),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );

  const toggle = (name: string) =>
    setOpened((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI & Liver / Anal Canal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Anal Canal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first reference to anal squamous precursors,
                invasive epithelial malignancies, and common tumor-like lesions.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the anatomic site and epithelial lineage before
                assigning the tumor type.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The anal canal contains colorectal-type, transitional, and
                squamous epithelium. The dentate line and anal transformation
                zone are important diagnostic landmarks.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: anatomic site to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Define the location",
                "Distinguish anal canal, anal verge, perianal skin, and ischiorectal region; document the relationship to the dentate line.",
              ],
              [
                "Identify the epithelial zone",
                "Upper colorectal-type columnar mucosa, middle anal transformation zone, or lower nonkeratinizing squamous mucosa.",
              ],
              [
                "Establish lineage",
                "Squamous, glandular, melanocytic, neuroendocrine, or a benign/reactive tumor-like process.",
              ],
              [
                "Assess invasion",
                "Separate intraepithelial SIL from invasive SCC or adenocarcinoma; assess pushing versus destructive growth in verrucous lesions.",
              ],
              [
                "Use targeted ancillary tests",
                "p16/HPV for SIL and selected SCC; CK7, CK20, CDX2, MUC5AC, p63/CK5/6, and HPV studies for selected adenocarcinomas.",
              ],
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{step[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Anatomic landmarks with diagnostic impact">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Anal canal:</b> approximately 30–50 mm long, extending from
                the anorectal junction to the anal verge.
              </p>
              <p>
                <b>Upper zone:</b> colorectal-type columnar epithelium.
              </p>
              <p>
                <b>Middle zone:</b> transitional epithelium forming the anal
                transformation zone, which is susceptible to HPV-associated
                lesions.
              </p>
              <p>
                <b>Lower zone:</b> nonkeratinizing stratified squamous
                epithelium without skin appendages.
              </p>
              <p>
                <b>Perianal skin:</b> hair-bearing keratinizing squamous
                epithelium beyond the anal verge.
              </p>
              <p>
                <b>Lymphatic drainage:</b> tumors above the dentate line usually
                drain to perirectal/internal iliac nodes; tumors below it drain
                to inguinal/femoral nodes.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield ancillary tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Anal HSIL",
                      "p16: strong, continuous block-type staining; correlate with morphology",
                    ],
                    [
                      "HPV-associated anal lesions",
                      "High-risk HPV RNA ISH or PCR in selected equivocal cases",
                    ],
                    [
                      "HPV-independent differentiated AIN",
                      "Aberrant p53 with absent p16 block staining supports TP53-mutant disease",
                    ],
                    [
                      "Anal SCC",
                      "Pancytokeratin, CK5/6, p40; p16 supports HPV association",
                    ],
                    [
                      "Anal gland adenocarcinoma",
                      "CK7+, MUC5AC+, CK20−, CDX2−; CK5/6 and p63 negative",
                    ],
                    [
                      "Primary anal Paget disease",
                      "CK7+, GCDFP-15+; typically CK20− and CDX2−",
                    ],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 align-top font-semibold">
                        {row[0]}
                      </td>
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
                Diagnostic profiles and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunomarker, or molecular
                alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. p16, HPV16, CK7, fistula, Paget..."
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
            {filtered.map((item) => {
              const open = opened.includes(item.name);
              return (
                <article
                  key={item.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(item.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {item.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {item.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {item.name}
                      </h3>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse −" : "View diagnostic profile +"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={item.profile} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={item.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={item.histology} />
                      </div>
                      {item.ihc.length > 0 && (
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Immunophenotype
                          </h4>
                          <Bullets items={item.ihc} />
                        </div>
                      )}
                      {item.molecular.length > 0 && (
                        <div>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Molecular Pathology
                          </h4>
                          <Bullets items={item.molecular} />
                        </div>
                      )}
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {item.differential.map((d, i) => (
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
                      {item.pitfalls.length > 0 && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                          <h4 className="mb-2 text-sm font-bold text-amber-950">
                            Diagnostic Pitfalls
                          </h4>
                          <Bullets items={item.pitfalls} />
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

        <Panel title="High-yield distinction: anal gland, fistula-associated, and mucosal adenocarcinoma">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Mucosal type</th>
                  <th className="py-2 pr-3">Anal gland / duct</th>
                  <th className="py-2">Fistula-associated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 pr-3 font-semibold">Origin</td>
                  <td className="py-2 pr-3">Luminal mucosa</td>
                  <td className="py-2 pr-3">Anal gland or duct</td>
                  <td className="py-2">Longstanding anal fistula</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Surface in situ component
                  </td>
                  <td className="py-2 pr-3">May be present</td>
                  <td className="py-2 pr-3">Absent by definition</td>
                  <td className="py-2">Absent by definition</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">
                    Typical morphology
                  </td>
                  <td className="py-2 pr-3">
                    Intestinal or transitional-zone phenotype
                  </td>
                  <td className="py-2 pr-3">
                    Haphazard glands, cuboidal cells, scant mucin
                  </td>
                  <td className="py-2">
                    Usually mucinous; may resemble colorectal mucinous
                    adenocarcinoma
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Useful phenotype</td>
                  <td className="py-2 pr-3">
                    Variable; HPV-associated subset often CK7+/p16+
                  </td>
                  <td className="py-2 pr-3">CK7+/MUC5AC+, CK20−/CDX2−</td>
                  <td className="py-2">
                    Variable intestinal or anal gland-like phenotype
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold">Key exclusion</td>
                  <td className="py-2 pr-3">
                    Direct extension from rectum/colon
                  </td>
                  <td className="py-2 pr-3">Genital tract or breast primary</td>
                  <td className="py-2">
                    Colorectal primary extending into fistula
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Biopsy, sampling, and reporting checklist">
          <Bullets
            items={[
              "Document the precise anatomic site and relationship to the dentate line, anal verge, and perianal skin.",
              "For SIL/condyloma, sample the entire lesion when feasible because LSIL and HSIL may coexist.",
              "For suspected invasive SCC, establish stromal invasion and distinguish conventional SCC from verrucous carcinoma; superficial biopsies may be insufficient.",
              "For anal adenocarcinoma, determine mucosal versus extramucosal origin and correlate with endoscopy, imaging, fistula history, and prior malignancy.",
              "For fistula-associated carcinoma, document the duration and clinical history of the fistula and exclude a colorectal primary.",
              "For suspected Paget disease, distinguish primary cutaneous disease from secondary pagetoid spread by an underlying anorectal adenocarcinoma using a focused IHC panel.",
              "Report histologic type, invasion, margins, lymphovascular/perineural invasion when present, and relevant precursor or associated lesion.",
            ]}
          />
        </Panel>

        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Content is based on the
          supplied WHO excerpt. Ancillary tests are presented in their stated
          diagnostic context and should be interpreted with morphology, anatomic
          site, and clinical findings. Perianal skin tumors outside the anal
          canal chapter are not comprehensively covered.
        </footer>
      </div>
    </main>
  );
}
