"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
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
};
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
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
const items: Item[] = [
  {
    name: "Colorectal Hyperplastic Polyp",
    group: "Benign",
    behavior:
      "Benign; distal small lesions have negligible malignant potential",
    site: "Predominantly distal colon and rectum (75–90%).",
    clinical: [
      "Usually diagnosed after age 50; men are affected more often than women.",
      "Common and usually asymptomatic; detected during screening or surveillance colonoscopy.",
      "Typically a small (<5 mm), discrete sessile polyp.",
    ],
    criteria: [
      "Non-dysplastic serrated epithelial proliferation.",
      "Crypt architecture is largely preserved, without basal dilation or substantial distortion.",
    ],
    morphology: [
      "Microvesicular type: superficial serration and stellate crypt lumina, with evenly spaced funnel-shaped crypts and proliferation confined to crypt bases.",
      "Microvesicular cells contain fine apical mucin vacuoles; nuclei are small, round to ovoid, and basally located.",
      "Goblet cell–rich type: elongated, widened, occasionally branched or tortuous crypts lined predominantly by goblet cells.",
      "Goblet cell–rich type may show subtle serration limited to the surface and crypt orifices; cross-sectional crypt lumina remain round.",
    ],
    ihc: [
      "Ki-67 in microvesicular hyperplastic polyps shows symmetric labeling of basal epithelial cells.",
    ],
    molecular: [],
    differential: [
      [
        "Sessile serrated lesion",
        "Shows unequivocal abnormal crypt architecture, especially basal dilation, horizontal growth, and serration extending to crypt bases.",
      ],
      [
        "Reactive epithelial hyperplasia",
        "Lacks a convincing polypoid serrated proliferation with the characteristic crypt pattern.",
      ],
    ],
    pitfalls: [
      "Microvesicular and goblet cell–rich subtypes do not have established clinical significance.",
      "Do not diagnose a sessile serrated lesion on proximal location alone.",
    ],
  },
  {
    name: "Colorectal Sessile Serrated Lesion (SSL)",
    group: "Benign",
    behavior:
      "Benign precursor; dysplasia identifies a higher-risk progression step",
    site: "Predominantly proximal colon (70–80%), particularly SSLs with dysplasia.",
    clinical: [
      "Most patients are in their 50s at diagnosis, with a slight male predominance.",
      "Usually asymptomatic and detected at screening or surveillance colonoscopy; lesions may be subtle and covered by a mucus cap.",
      "Large lesions (>10 mm) are more likely to develop dysplasia and are considered advanced lesions in most surveillance guidelines.",
    ],
    criteria: [
      "Serrated crypt proliferation with unequivocal architectural distortion; one characteristic distorted serrated crypt is sufficient.",
      "SSL without dysplasia lacks cytological dysplasia.",
      "SSL with dysplasia shows increased architectural complexity and cytological dysplasia of variable morphology.",
    ],
    morphology: [
      "Typical SSL crypts show basal one-third dilation, horizontal growth parallel to the muscularis mucosae, serration extending to the crypt bases, and asymmetric proliferation along crypt sides.",
      "Crypt bases may be L-shaped or inverted T-shaped; branching is common but not specific.",
      "Lesional epithelium contains goblet cells and non-goblet cells with microvesicular mucin droplets.",
      "Dysplasia is often sharply demarcated from the background SSL and may show villous architecture, crowded/branched or cribriform glands, and altered serration.",
      "Dysplastic cytology may be conventional adenomatous, serrated with eosinophilic cytoplasm and prominent nucleoli, or subtle hypermucinous/minimal-deviation type.",
    ],
    ihc: [
      "Loss of MLH1 in the dysplastic component supports an SSL-associated dysplasia pattern but is not present in every case.",
    ],
    molecular: [
      "Most SSLs harbor activating BRAF mutations; KRAS mutations are uncommon.",
      "Progression is associated with CpG island methylation; MLH1 promoter methylation can cause mismatch repair deficiency in the dysplastic component.",
      "A subset of mismatch repair–proficient SSLs with dysplasia has TP53 alterations; rare cases have NTRK rearrangements.",
    ],
    differential: [
      [
        "Hyperplastic polyp",
        "Lacks unequivocal basal crypt distortion, horizontal growth, and serration extending to the crypt bases.",
      ],
      [
        "Mucosal prolapse / inflammatory polyp",
        "Usually lacks the characteristic microvesicular mucin-containing epithelial population and distorted serrated crypt bases.",
      ],
      [
        "Mucosal herniation",
        "SSL elements may herniate through muscularis mucosae, especially near lymphoid aggregates; this is not invasion without destructive growth/desmoplasia.",
      ],
    ],
    pitfalls: [
      "Well-oriented sections including crypt bases are often essential; obtain deeper levels when orientation is poor.",
      "Do not use size, location, or endoscopic appearance alone to diagnose SSL.",
      "Do not grade SSL-associated dysplasia as low- versus high-grade; report the presence of dysplasia.",
    ],
  },
  {
    name: "Colorectal Traditional Serrated Adenoma (TSA)",
    group: "Benign",
    behavior: "Benign epithelial neoplasm with malignant precursor potential",
    site: "Approximately 70% occur in the distal colon and rectum; proximal lesions also occur.",
    clinical: [
      "Uncommon (<1% of colorectal polyps).",
      "Usually asymptomatic and found at screening or surveillance; larger lesions may bleed.",
      "Proximal lesions may be plaque-like; distal lesions are often broad-based and polypoid with a pinecone- or coral-like surface.",
    ],
    criteria: [
      "Non-invasive flat or polypoid lesion with slit-like crypt serrations and/or ectopic crypt foci.",
      "Dense eosinophilic cytoplasm and pale pencillate nuclei are desirable supporting features.",
    ],
    morphology: [
      "Usually tubulovillous or villous architecture with slit-like serrations.",
      "Tall columnar cells have dense eosinophilic cytoplasm and elongated, pale pencillate nuclei with smooth nuclear membranes.",
      "Ectopic crypt foci are rounded epithelial protrusions into lamina propria that are not anchored to muscularis mucosae; they are more common in protuberant lesions.",
      "Conventional adenomatous-type dysplasia may coexist; any TSA component warrants classification as TSA.",
      "Foci of marked nuclear hyperchromasia or high-grade atypia may occur; grade according to nuclear cytology.",
    ],
    ihc: [
      "Ki-67 highlights the proliferative compartment in ectopic crypt foci.",
    ],
    molecular: [
      "Two major molecular routes involve BRAF or KRAS mutations; BRAF-mutant TSAs often show CIMP and RNF43 alterations.",
      "KRAS-mutant TSAs, often distal, may harbor RSPO fusions and tend toward conventional adenomatous dysplasia.",
    ],
    differential: [
      [
        "Conventional adenoma",
        "Usually has hyperchromatic, pseudostratified nuclei rather than the pale pencillate nuclei and dense eosinophilic cytoplasm of TSA.",
      ],
      [
        "Sessile serrated lesion with dysplasia",
        "A distinctive TSA component (eosinophilic cytoplasm and/or ectopic crypts) supports classification as TSA.",
      ],
      [
        "Hyperplastic polyp",
        "Lacks villous/tubulovillous architecture, ectopic crypts, and characteristic eosinophilic TSA cytology.",
      ],
    ],
    pitfalls: [
      "Do not use the term mixed adenoma or serrated tubulovillous adenoma; classify lesions with any TSA component as TSA.",
      "Ectopic crypts are helpful but may be absent, particularly in flat lesions.",
    ],
  },
  {
    name: "Serrated Polyposis Syndrome",
    group: "Intermediate",
    behavior:
      "Clinical polyposis syndrome associated with increased colorectal carcinoma risk",
    site: "Multiple serrated polyps throughout the colon and rectum; upper GI tract and small intestine are not involved.",
    clinical: [
      "Most patients are diagnosed at 50–60 years, although the age range is broad; both sexes are affected approximately equally.",
      "Presentation may occur during screening, surveillance, evaluation of symptoms, family-history assessment, or at colorectal carcinoma diagnosis.",
      "Polyp burden is often substantial (commonly 30–40 cumulative polyps), with frequent pancolonic distribution.",
    ],
    criteria: [
      "WHO 2019 clinical criterion 1: at least 5 serrated lesions/polyps proximal to the rectum, all ≥5 mm, with at least 2 ≥10 mm.",
      "WHO 2019 clinical criterion 2: more than 20 serrated lesions/polyps of any size distributed throughout the large bowel, with at least 5 proximal to the rectum.",
      "Counts are cumulative across colonoscopies; all serrated histologic subtypes are included.",
    ],
    morphology: [
      "The histology is that of the associated sporadic serrated lesions: hyperplastic polyps, SSLs with or without dysplasia, and TSAs.",
      "Conventional adenomas may coexist and should be included in the overall polyp assessment but not in the serrated-polyp count.",
    ],
    ihc: [],
    molecular: [
      "No single causative germline alteration is established; pathogenic RNF43 germline variants account for fewer than 2% of cases.",
      "Associated serrated polyps generally show molecular profiles similar to their sporadic counterparts.",
    ],
    differential: [
      [
        "MUTYH-associated polyposis",
        "May include multiple serrated lesions but is a defined hereditary syndrome requiring clinical/genetic correlation.",
      ],
      [
        "Hereditary mixed polyposis syndrome",
        "Consider GREM1-associated disease when mixed polyp phenotypes and family history are present.",
      ],
      [
        "PTEN hamartoma tumor syndrome / juvenile polyposis",
        "Look for other polyp types and extraintestinal manifestations.",
      ],
    ],
    pitfalls: [
      "The diagnosis is clinical, not based on a single biopsy or histologic subtype.",
      "The polyp count is cumulative across procedures.",
      "Consider clinical genetics evaluation in undiagnosed polyposis, while recognizing that most serrated polyposis is not explained by a known germline variant.",
    ],
  },
  {
    name: "Colorectal Juvenile Polyp",
    group: "Benign",
    behavior:
      "Usually benign hamartomatous polyp; multiple lesions may indicate juvenile polyposis syndrome",
    site: "Usually colorectum, especially rectosigmoid; sporadic lesions may occur in children.",
    clinical: [
      "Sporadic juvenile polyps most often present in childhood, commonly with painless rectal bleeding or prolapse.",
      "A solitary lesion is typical in the sporadic setting; multiple polyps raise concern for juvenile polyposis syndrome.",
    ],
    criteria: [
      "Hamartomatous polyp with cystically dilated, mucus-filled glands in an expanded edematous/inflamed lamina propria.",
      "No epithelial dysplasia in a typical sporadic juvenile polyp.",
    ],
    morphology: [
      "Cystically dilated glands are lined by non-dysplastic epithelium and may contain mucin, inflammatory debris, and blood.",
      "The lamina propria is expanded by edema, inflammation, and granulation tissue.",
      "Surface erosion and regenerative epithelial changes may be present.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Inflammatory polyp",
        "May show granulation tissue and inflammation but lacks the characteristic cystically dilated mucus-filled glands.",
      ],
      [
        "Mucosal prolapse polyp",
        "Shows fibromuscular obliteration and smooth muscle extension rather than the classic juvenile hamartomatous architecture.",
      ],
      [
        "Juvenile polyposis syndrome",
        "Multiple juvenile polyps and clinical/family-history criteria distinguish the syndrome from a solitary sporadic polyp.",
      ],
    ],
    pitfalls: [
      "Interpret polyp multiplicity and family history clinically; a solitary juvenile polyp is not equivalent to juvenile polyposis syndrome.",
    ],
  },
  {
    name: "Conventional Colorectal Adenoma",
    group: "Benign",
    behavior:
      "Dysplastic precursor lesion; risk increases with size, villous architecture, and high-grade dysplasia",
    site: "May arise anywhere from the ileocecal valve to the anorectal junction.",
    clinical: [
      "Incidence increases with age and peaks after 70 years; men are affected more often than women.",
      "Most uncomplicated adenomas are asymptomatic; occult bleeding is common.",
      "Larger lesions may cause visible bleeding, abdominal pain, or altered bowel habits; large distal villous adenomas may cause secretory diarrhea and electrolyte depletion (McKittrick–Wheelock syndrome).",
    ],
    criteria: [
      "Conventional adenomatous dysplasia with nuclear enlargement, hyperchromasia, pseudostratification, and loss of maturation/polarity.",
      "Tubular, tubulovillous, or villous architecture; villous component is <25% in tubular, >25% in tubulovillous, and >75% in villous adenoma.",
      "High-grade dysplasia is characterized by marked cytologic atypia and/or complex architecture, including cribriforming.",
    ],
    morphology: [
      "Tubular adenoma: elongated crowded crypts with dysplastic epithelium; a villous component under 25% is acceptable.",
      "Tubulovillous adenoma: more than 25% villous architecture.",
      "Villous adenoma: more than 75% villous architecture.",
      "Low-grade dysplasia shows enlarged, elongated, hyperchromatic, stratified nuclei, usually with preserved polarity and maturation toward the surface.",
      "High-grade dysplasia shows marked nuclear enlargement/pleomorphism, loss of polarity, full-thickness stratification, and often complex glandular architecture.",
      "Advanced adenoma conventionally includes size ≥10 mm, villous/tubulovillous architecture, and/or high-grade dysplasia; surveillance definitions vary.",
    ],
    ihc: [],
    molecular: [
      "The conventional adenoma–carcinoma sequence commonly begins with APC/WNT pathway inactivation, followed by alterations such as KRAS, SMAD4, PIK3CA/PTEN, and TP53.",
      "In Lynch syndrome, adenomas may show mismatch repair deficiency after a second hit in the remaining functional MMR allele.",
    ],
    differential: [
      [
        "Traditional serrated adenoma",
        "Shows slit-like serrations, eosinophilic cytoplasm, pale pencillate nuclei, and/or ectopic crypts.",
      ],
      [
        "Sessile serrated lesion with dysplasia",
        "Has a background of architecturally distorted serrated crypts; dysplasia may be sharply demarcated.",
      ],
      [
        "Reactive/regenerative atypia",
        "Usually retains surface maturation and lacks the persistent cytologic and architectural features of adenomatous dysplasia.",
      ],
    ],
    pitfalls: [
      "Villous subtyping has limited reproducibility; size and grade remain important for risk stratification.",
      "Assess the surface epithelium when evaluating IBD-associated dysplasia; basal-only atypia requires caution.",
    ],
  },
  {
    name: "Inflammatory Bowel Disease–Associated Dysplasia",
    group: "Intermediate",
    behavior:
      "Colitis-associated neoplasia; dysplasia grade and visibility guide clinical management",
    site: "Colorectal mucosa affected by chronic ulcerative colitis or Crohn colitis.",
    clinical: [
      "Occurs in the setting of longstanding inflammatory bowel disease; lesions may be endoscopically visible or invisible.",
      "Diagnosis and grading of dysplasia are more important for management than assigning a specific morphologic pattern.",
      "Active inflammation and ulceration can make distinction from reactive atypia difficult.",
    ],
    criteria: [
      "Dysplasia is characterized by unequivocal epithelial cytologic atypia, preferably involving the surface epithelium.",
      "Low-grade dysplasia shows mildly enlarged, elongated, hyperchromatic, stratified nuclei, mostly in the basal half of the cells.",
      "High-grade dysplasia shows marked nuclear enlargement/pleomorphism, loss of polarity, full-thickness stratification, and often cribriforming.",
      "Use indefinite for dysplasia when active inflammation/ulceration prevents confident distinction from reactive change.",
    ],
    morphology: [
      "Conventional/adenomatous-type dysplasia is the most common pattern and resembles sporadic adenomatous dysplasia.",
      "Serrated dysplasia may resemble SSL-associated or TSA-associated dysplasia; mixed patterns can occur in one lesion.",
      "Hypermucinous dysplasia shows tubulovillous/villous growth, tall cells with multilayered mucin vacuoles, and often subtle atypia.",
      "Goblet cell–deficient dysplasia shows tubular architecture, eosinophilic enterocyte-like cytoplasm, and near-complete absence of goblet cells.",
      "Crypt cell dysplasia shows mild nuclear enlargement/hyperchromasia without significant architectural change.",
      "Intramucosal carcinoma invades lamina propria or extends into, but not beyond, muscularis mucosae; desmoplasia generally indicates submucosal invasion.",
    ],
    ihc: [
      "Aberrant p53 staining may support selected patterns, including basal crypt dysplasia and hypermucinous or goblet cell–deficient dysplasia; it is not a stand-alone diagnostic criterion.",
      "MLH1 loss may occur in selected dysplastic serrated lesions.",
    ],
    molecular: [
      "Hypermucinous dysplasia frequently harbors KRAS mutations; goblet cell–deficient dysplasia may harbor PIK3CA and KRAS mutations.",
      "Molecular findings are not required for routine diagnosis or grading.",
    ],
    differential: [
      [
        "Reactive atypia",
        "Usually occurs with active inflammation and lacks unequivocal surface dysplasia; repeat evaluation after inflammation control may be necessary.",
      ],
      [
        "Sporadic adenoma",
        "A lesion in a colitis-unaffected area may be sporadic; correlate with distribution of colitis and endoscopic findings.",
      ],
      [
        "Serrated epithelial change",
        "May be endoscopically invisible and resemble hyperplastic polyp; current evidence does not establish benefit from intensified surveillance based on this finding alone.",
      ],
    ],
    pitfalls: [
      "Do not overemphasize morphologic subtype at the expense of a reproducible dysplasia diagnosis and grade.",
      "Basal crypt dysplasia without surface involvement is challenging; an indefinite-for-dysplasia diagnosis may be appropriate.",
      "Acellular mucin after neoadjuvant therapy does not establish mucinous adenocarcinoma.",
    ],
  },
  {
    name: "Colorectal Adenocarcinoma",
    group: "Malignant",
    behavior:
      "Malignant epithelial neoplasm with regional and distant metastatic potential",
    site: "Right/proximal colon (cecum, ascending, transverse), left colon (splenic flexure through sigmoid), or rectum.",
    clinical: [
      "Most cases occur in older adults, with incidence higher in men; incidence in adults younger than 50 years is increasing, particularly for distal tumors.",
      "Common presentations include altered bowel habits, abdominal pain, hematochezia, and symptoms of anemia; screening increasingly identifies asymptomatic disease.",
      "Proximal tumors are relatively more common in women and patients older than 60 years.",
    ],
    criteria: [
      "Malignant epithelial tumor of the large bowel with unequivocal invasion.",
      "Grade by gland formation: low-grade retains glandular differentiation; high-grade contains a sufficiently extensive focus lacking gland formation.",
      "Report lymphovascular invasion, perineural invasion, tumor budding, poorly differentiated clusters, margins, lymph nodes, tumor deposits, and treatment response as applicable.",
    ],
    morphology: [
      "Conventional adenocarcinoma forms infiltrative glands, often with desmoplastic stroma; grading is based on the least differentiated component, not cytologic atypia alone.",
      "Mucinous adenocarcinoma: more than 50% of the tumor consists of extracellular mucin.",
      "Signet-ring cell carcinoma: more than 50% of tumor cells show signet-ring morphology; classified as high-grade.",
      "Serrated adenocarcinoma shows serrated glandular architecture and may be associated with a serrated precursor.",
      "Micropapillary adenocarcinoma shows small clusters of tumor cells in clear stromal spaces and is considered high-grade.",
      "Medullary carcinoma shows solid/syncytial growth with prominent lymphocytic response; grade is not applicable despite solid morphology.",
      "Adenoma-like adenocarcinoma is deceptively well differentiated with minimal cytologic atypia but unequivocal invasion; considered low-grade.",
      "Low-grade tubuloglandular carcinoma is a distinctive low-grade pattern, typically associated with inflammatory bowel disease.",
      "Lymphoglandular complex–like adenocarcinoma is a distinctive pattern formerly described as dome/GALT carcinoma.",
      "Adenosquamous carcinoma contains glandular and squamous components and is high-grade.",
      "Squamous cell carcinoma is rare; exclude direct extension or metastasis from another primary site.",
      "Undifferentiated carcinoma lacks recognizable glandular or other lineage differentiation.",
      "Carcinoma with mesenchymal differentiation contains substantial epithelial and mesenchymal components; heterologous differentiation may include osteosarcomatous or rhabdomyosarcomatous elements.",
      "Tumor budding is defined as single cells or clusters of up to four tumor cells at the invasive front; poorly differentiated clusters contain at least five tumor cells without gland formation.",
    ],
    ihc: [
      "Mismatch repair protein IHC (MLH1, PMS2, MSH2, MSH6) is used to assess MMR deficiency and screen for Lynch syndrome.",
      "D2-40 may help confirm lymphatic invasion in difficult cases.",
      "CD3/CD8 assessment of the immune infiltrate may provide prognostic information but is not a routine histotype-defining panel.",
    ],
    molecular: [
      "RAS (KRAS/NRAS) mutation testing is predictive: mutations in relevant codons indicate lack of benefit from anti-EGFR monoclonal antibodies.",
      "BRAF V600E has prognostic and therapeutic relevance and, in an MLH1-deficient tumor, helps distinguish sporadic MLH1 promoter methylation from Lynch syndrome.",
      "MMR/MSI testing is essential for Lynch syndrome assessment and predicts potential benefit from immune checkpoint inhibitors.",
      "ERBB2 (HER2) amplification/overexpression may guide anti-HER2 therapy, particularly in advanced disease.",
      "NTRK fusions are rare but actionable; testing is most relevant in selected advanced, MSI-high, BRAF-wildtype tumors.",
      "POLE/POLD1 proofreading-domain mutations define a rare ultramutated subset; testing is context-dependent.",
    ],
    differential: [
      [
        "Metastatic adenocarcinoma",
        "Use clinical history, distribution, morphology, and organ-specific immunophenotype to exclude a non-colorectal primary.",
      ],
      [
        "Appendiceal adenocarcinoma",
        "Correlate with epicenter, gross findings, and appendix involvement; morphology and immunophenotype may overlap.",
      ],
      [
        "Anal gland / gynecologic / prostate carcinoma involving colorectum",
        "Use site-specific markers and clinical-radiologic correlation.",
      ],
      [
        "Treatment effect",
        "After neoadjuvant therapy, fibrosis and acellular mucin may remain; acellular mucin alone is not viable tumor or mucinous histotype.",
      ],
    ],
    pitfalls: [
      "Do not grade tumors after neoadjuvant therapy; report grade as not applicable.",
      "Cribriform architecture is glandular differentiation and does not by itself define high-grade carcinoma.",
      "High-grade budding and poorly differentiated clusters are assessed separately from overall grade.",
      "A positive circumferential resection margin is generally defined as tumor within 1 mm of the margin.",
      "For pT1 lesions, depth of submucosal invasion, grade, lymphatic invasion, and tumor budding inform nodal risk.",
    ],
  },
  {
    name: "Adenoma-like Adenocarcinoma",
    group: "Malignant",
    behavior: "Low-grade malignant colorectal adenocarcinoma",
    site: "Colorectum; often presents as a polypoid or mass-forming lesion.",
    clinical: [
      "Clinical presentation overlaps with other colorectal adenocarcinomas; source does not define a distinct age or sex predilection.",
    ],
    criteria: [
      "Unequivocal invasion is required despite deceptively bland cytology and adenoma-like architecture.",
      "Pure adenoma-like adenocarcinoma is classified as low-grade.",
    ],
    morphology: [
      "Highly differentiated glands closely resemble conventional adenoma.",
      "Cytologic atypia may be minimal; the diagnosis rests on unequivocal invasive growth, including infiltrative glands and/or desmoplastic response.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      [
        "Conventional adenoma",
        "Lacks destructive stromal invasion; adenoma-like carcinoma shows unequivocal invasion.",
      ],
      [
        "Conventional low-grade adenocarcinoma",
        "Adenoma-like carcinoma is unusually well differentiated and may show minimal cytologic atypia.",
      ],
    ],
    pitfalls: [
      "Do not equate bland cytology with benign behavior; establish invasion before diagnosing carcinoma.",
    ],
  },
  {
    name: "Carcinoma with Mesenchymal Differentiation",
    group: "Malignant",
    behavior:
      "Rare aggressive colorectal carcinoma; often presents at advanced stage",
    site: "Colorectum; exact anatomic predilection is not established in the supplied source.",
    clinical: [
      "Extremely rare; literature consists largely of individual case reports.",
      "Often presents at advanced stage and appears to have a poor prognosis.",
    ],
    criteria: [
      "More than 30% epithelial differentiation (gland formation and/or keratin expression).",
      "More than 30% homologous or heterologous mesenchymal differentiation with marked atypia and/or spindle-cell morphology.",
    ],
    morphology: [
      "Patterns include pure spindle-cell morphology with keratin expression, admixed glandular and mesenchymal components, or overt sarcomatous differentiation.",
      "Heterologous elements may include osteosarcomatous or rhabdomyosarcomatous differentiation.",
    ],
    ihc: [
      "Keratin expression supports epithelial differentiation in otherwise spindle-cell areas.",
    ],
    molecular: [
      "Molecular findings are variable; MSI and SWI/SNF complex abnormalities have been reported in a small number of cases.",
    ],
    differential: [
      [
        "Primary colorectal sarcoma",
        "Demonstration of a substantial epithelial component supports carcinoma with mesenchymal differentiation.",
      ],
      [
        "Conventional adenocarcinoma with reactive spindle stroma",
        "Requires a true malignant mesenchymal component rather than desmoplastic stroma alone.",
      ],
    ],
    pitfalls: [
      "The diagnosis requires substantial components of both epithelial and mesenchymal differentiation; focal spindle-cell change alone is insufficient.",
    ],
  },
];

const categories = ["All", "Benign", "Intermediate", "Malignant"];
export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [opened, setOpened] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (category === "All" || x.group === category) &&
          [
            x.name,
            x.site,
            x.behavior,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  const toggle = (name: string) =>
    setOpened((a) =>
      a.includes(name) ? a.filter((x) => x !== name) : [...a, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Gastrointestinal Pathology / Colorectal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Colorectal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference for colorectal
                epithelial polyps, dysplasia, and carcinoma, emphasizing
                essential criteria, targeted ancillary studies, and practical
                differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Architecture establishes the precursor; unequivocal invasion
                establishes carcinoma.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                For serrated lesions, evaluate crypt bases. For carcinoma, grade
                by gland formation and assess prognostic features separately.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from polyp to invasive carcinoma">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Establish the setting",
                "Age, symptoms, endoscopic location, polyp size, multiplicity, and inflammatory bowel disease history.",
              ],
              [
                "Assess crypt architecture",
                "For serrated lesions, inspect the crypt bases for dilation, horizontal growth, and basal serration.",
              ],
              [
                "Classify epithelial phenotype",
                "Distinguish conventional adenomatous dysplasia from serrated, hamartomatous, and IBD-associated patterns.",
              ],
              [
                "Identify invasion",
                "Look for infiltrative glands, desmoplasia, submucosal invasion, and other unequivocal evidence of malignancy.",
              ],
              [
                "Apply targeted testing",
                "Use MMR IHC/MSI, RAS/BRAF, HER2, or NTRK testing when clinically indicated; avoid non-contributory panels.",
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
          <Panel title="High-yield molecular and predictive tests">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Colorectal carcinoma",
                      "MMR IHC / MSI: Lynch screening and immunotherapy relevance",
                    ],
                    [
                      "RAS (KRAS / NRAS)",
                      "Predicts lack of benefit from anti-EGFR antibodies when mutated",
                    ],
                    [
                      "BRAF V600E",
                      "Prognostic/therapeutic relevance; helps assess sporadic MLH1-deficient tumors",
                    ],
                    [
                      "ERBB2 (HER2)",
                      "Amplification/overexpression may support anti-HER2 therapy in advanced disease",
                    ],
                    [
                      "NTRK fusion",
                      "Rare actionable alteration, enriched in MSI-high / BRAF-wildtype subset",
                    ],
                    [
                      "SSL / serrated pathway",
                      "BRAF, CIMP, and MLH1 methylation are biologically informative; not routine diagnostic tests",
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
          <Panel title="Grading and prognostic features">
            <Bullets
              items={[
                "Colorectal adenocarcinoma is graded by gland formation: low-grade versus high-grade; cytologic atypia alone does not determine grade.",
                "Use the least differentiated tumor component; a qualifying focus lacking gland formation establishes high-grade morphology.",
                "Tumor budding (single cells or clusters of up to 4 cells) and poorly differentiated clusters (at least 5 cells without gland formation) are reported separately.",
                "Lymphatic/vascular invasion, perineural invasion, tumor deposits, circumferential margin, nodal status, and treatment response are key reporting elements.",
                "Do not assign histologic grade after neoadjuvant therapy.",
              ]}
            />
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. MLH1, BRAF, serrated crypt, budding..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
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
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={p.criteria} />
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
                              Molecular Pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
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
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic Pitfalls
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
        <Panel title="Critical distinction: serrated precursor lesions">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Hyperplastic polyp</th>
                  <th className="py-2 pr-3">SSL</th>
                  <th className="py-2">TSA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Crypt bases",
                    "Preserved; no basal dilation",
                    "Dilated, horizontally expanded, distorted",
                    "Slit-like serration; ectopic crypts may occur",
                  ],
                  [
                    "Cytology",
                    "Mature, bland epithelium",
                    "Usually non-dysplastic; dysplasia may develop",
                    "Eosinophilic cytoplasm; pale pencillate nuclei",
                  ],
                  [
                    "Key clue",
                    "Superficial serration",
                    "At least one unequivocally distorted serrated crypt",
                    "Villous/tubulovillous growth with TSA cytology",
                  ],
                  [
                    "Molecular pattern",
                    "MVHP: often BRAF; GCHP: often KRAS",
                    "BRAF; CIMP; possible MLH1 methylation",
                    "BRAF- or KRAS-associated pathways",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td
                        key={j}
                        className={`py-2 pr-3 ${j === 0 ? "font-semibold" : ""}`}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Resection, biopsy, and reporting checklist">
          <Bullets
            items={[
              "Record exact anatomic site, polyp size, multiplicity, endoscopic morphology, and whether the lesion arises in colitis-affected mucosa.",
              "For serrated lesions, ensure orientation and inclusion of crypt bases; obtain deeper levels when needed.",
              "For dysplasia in IBD, document visibility, grade, distribution, and background inflammatory activity; use indefinite for dysplasia when reactive change cannot be excluded.",
              "For invasive carcinoma, document histologic type and grade, depth/extent of invasion, lymphatic and vascular invasion, perineural invasion, tumor budding, poorly differentiated clusters, tumor deposits, margins, and lymph node status.",
              "For rectal carcinoma, assess the circumferential resection margin; tumor within 1 mm is considered involved in the supplied source.",
              "After neoadjuvant therapy, document treatment response and viable tumor; acellular mucin alone is not residual carcinoma and does not define mucinous histology.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Content is based on the
          supplied WHO colorectal tumor excerpt. Molecular findings are included
          only when they contribute to pathway interpretation, hereditary
          assessment, or predictive testing. Correlate with endoscopy, imaging,
          clinical history, and current staging/reporting protocols.
        </footer>
      </div>
    </main>
  );
}
