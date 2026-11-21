"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  pathway: string;
  genes: string;
  inheritance: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  differential: string[];
  molecular: string[];
};

const pathways = [
  {
    name: "MicroRNA biogenesis and DICER1-mediated processing",
    genes: "DICER1",
    function:
      "MicroRNAs are 21–23-nucleotide noncoding RNAs that regulate gene expression after transcription. DICER1 cleaves hairpin-structured precursor microRNAs (pre-miRNAs) into mature 5′ and 3′ strands; one strand is incorporated into the RNA-induced silencing complex and guides sequence-specific repression of target mRNAs.",
    mechanism:
      "DICER1-related tumors commonly follow a two-hit pattern: a constitutional loss-of-function variant is paired with a tumor-acquired missense variant affecting a metal-binding residue in the RNase IIIb domain. This selectively impairs production of 5p microRNAs, alters the 5p:3p microRNA balance, and derepresses target transcripts. The developmental or endocrine context influences which tissues develop lesions.",
    syndromes:
      "DICER1-related tumor predisposition syndrome. Postzygotic mosaic RNase IIIb hotspot variants can produce a distinct, often multifocal or overgrowth-associated phenotype and should not be conflated with conventional heterozygous germline loss-of-function disease.",
  },
  {
    name: "Nuclear microprocessor complex",
    genes: "DROSHA, DGCR8",
    function:
      "DROSHA and DGCR8 form the nuclear microprocessor complex, which cleaves primary microRNAs (pri-miRNAs) to generate precursor microRNAs. The complex contains one DROSHA molecule and two DGCR8 molecules; DGCR8 binds and stabilizes the complex and helps position pri-miRNA for processing.",
    mechanism:
      "Constitutional heterozygous pathogenic variants are associated with rare, gene-specific tumor predisposition phenotypes. Reported DROSHA variants are predominantly truncating and tumors may acquire a second hit. The reported DGCR8 p.Glu518Lys missense variant is associated with loss of the wild-type allele / chromosome 22q loss. The clinical spectrum and penetrance remain incompletely defined.",
    syndromes:
      "DROSHA-related predisposition (reported pineoblastoma and Wilms tumor) and DGCR8-related predisposition (reported multinodular thyroid disease and schwannomas). Evidence is currently based on a limited number of families and cases.",
  },
  {
    name: "Pre-mRNA splicing",
    genes: "SF3B2; MYT1 has been reported as a candidate gene",
    function:
      "The spliceosome removes introns from precursor messenger RNA and joins exons to produce mature mRNA. SF3B2 is a component of the U2 small nuclear ribonucleoprotein (snRNP) complex and contributes to spliceosome function.",
    mechanism:
      "Heterozygous loss-of-function variants in SF3B2 have been reported in a subset of familial and sporadic Goldenhar syndrome / craniofacial microsomia. Most cases remain genetically unexplained; the phenotype is developmentally heterogeneous and cannot be reduced to a single molecular mechanism.",
    syndromes:
      "Goldenhar syndrome (oculo-auriculo-vertebral spectrum / craniofacial microsomia). The source also lists MYT1 in the syndrome heading and reports it among candidate genes, but identifies SF3B2 loss of function as the more recently established association.",
  },
];

const clues = [
  {
    finding: "Pleuropulmonary blastoma or childhood lung cysts",
    clue: "A cystic pulmonary lesion in an infant or young child, particularly with a personal or family history of cystic nephroma, thyroid disease, or characteristic childhood tumors, should prompt consideration of DICER1. Type I PPB may progress to type II/III disease.",
    syndrome: "DICER1-related tumor predisposition syndrome",
    genes: "DICER1",
  },
  {
    finding: "Pediatric cystic nephroma or anaplastic sarcoma of the kidney",
    clue: "Cystic nephroma in a child, especially with lung cysts/PPB or other DICER1-associated lesions, is a strong syndromic clue. Progression to anaplastic sarcoma is a recognized pattern; assess for primitive/blastemal and sarcomatous components.",
    syndrome: "DICER1-related tumor predisposition syndrome",
    genes: "DICER1",
  },
  {
    finding: "Ovarian Sertoli–Leydig cell tumor",
    clue: "In a child, adolescent, or young adult, an ovarian SLCT—particularly with androgenic manifestations, multinodular goiter, or a history of PPB—should trigger evaluation for DICER1. Gynandroblastoma-like and juvenile granulosa cell tumor-like areas have also been reported.",
    syndrome: "DICER1-related tumor predisposition syndrome",
    genes: "DICER1",
  },
  {
    finding: "Embryonal rhabdomyosarcoma of the uterine cervix",
    clue: "Cervical ERMS in a young patient is an important DICER1-associated presentation. A botryoid or polypoid lesion should be interpreted in the clinical context, with attention to additional thyroid, ovarian, pulmonary, and renal findings.",
    syndrome: "DICER1-related tumor predisposition syndrome",
    genes: "DICER1",
  },
  {
    finding: "Pineoblastoma or Wilms tumor with a relevant family history",
    clue: "Although these tumors have broad differential diagnoses, reported germline DROSHA-associated cases include pineoblastoma and Wilms tumor. A tumor-acquired second hit was identified in the analyzed DROSHA-associated tumors; consider constitutional testing in an appropriate clinical setting.",
    syndrome: "DROSHA-related microprocessor predisposition",
    genes: "DROSHA",
  },
  {
    finding: "Multinodular thyroid disease with schwannomas",
    clue: "The combination of familial euthyroid multinodular goiter / thyroid neoplasia and multiple schwannomas is a distinctive reported clue for the DGCR8 p.Glu518Lys-associated phenotype. The evidence remains limited; do not generalize this association to all thyroid nodules or schwannomas.",
    syndrome: "DGCR8-related microprocessor predisposition",
    genes: "DGCR8",
  },
  {
    finding:
      "Epibulbar dermoid with preauricular tags and hemifacial asymmetry",
    clue: "An inferotemporal limbal dermoid or dermolipoma, especially with mandibular/hemifacial hypoplasia, accessory tragi, and vertebral anomalies, supports Goldenhar syndrome / craniofacial microsomia. The phenotype is usually unilateral but can be bilateral.",
    syndrome: "Goldenhar syndrome",
    genes: "SF3B2; other genetic and non-genetic contributors",
  },
  {
    finding:
      "Complex epibulbar choristoma with craniofacial and auricular anomalies",
    clue: "A choristoma containing lacrimal gland, cartilage, and smooth muscle should prompt careful examination for associated ocular, auricular, mandibular, and vertebral anomalies. The diagnosis is primarily clinical; genetic testing is not required in most cases.",
    syndrome: "Goldenhar syndrome / oculo-auriculo-vertebral spectrum",
    genes: "SF3B2 in a subset; etiology often unresolved",
  },
];

const entities: Entity[] = [
  {
    name: "DICER1-related tumor predisposition syndrome",
    pathway: "MicroRNA biogenesis and DICER1-mediated processing",
    genes: "DICER1 (14q32)",
    inheritance:
      "Autosomal dominant predisposition due to a heterozygous constitutional pathogenic variant, most often loss of function. Approximately 84% of germline pathogenic variants in the cited series were inherited. Postzygotic mosaic DICER1 variants are a separate mechanism and may present with single or multiple tumors depending on variant type, tissue distribution, and developmental timing.",
    clinical: [
      "Most manifestations arise in childhood or early adulthood; thyroid and female genital tract lesions may present later.",
      "Hallmark lesion: pleuropulmonary blastoma (PPB). Other major tumors include ovarian Sertoli–Leydig cell tumor, cervical embryonal rhabdomyosarcoma, pediatric cystic nephroma, pineoblastoma, pituitary blastoma, and primary intracranial sarcoma.",
      "Thyroid nodules and multinodular goiter are common; differentiated thyroid carcinoma is a recognized association.",
      "Multiple primary tumors and bilateral disease in paired organs can occur.",
      "Pituitary blastoma may present with infantile Cushing disease. Ovarian SLCT may present with androgen excess.",
      "Macrocephaly and subtle ocular, renal, or dental findings have been reported, usually without major functional impairment.",
      "Mosaic RNase IIIb hotspot variants may be associated with overgrowth and developmental delay; this phenotype is not a separate, reliably distinct syndrome.",
    ],
    criteria: [
      "Essential: demonstrate a germline / constitutional pathogenic DICER1 variant.",
      "Supportive: personal or family history of characteristic DICER1-associated lesions, particularly PPB, pediatric cystic nephroma, ovarian SLCT, cervical ERMS, or other characteristic embryonal tumors.",
      "A typical tumor-acquired RNase IIIb hotspot variant strongly supports DICER1-driven tumor biology, but tumor sequencing alone does not establish a germline predisposition syndrome.",
      "A negative blood test does not necessarily exclude low-level or tissue-restricted mosaicism; testing an affected tissue may be informative when clinical suspicion remains high.",
    ],
    morphology: [
      "PPB spans cystic type I, mixed cystic/solid type II, and predominantly solid type III; progression is associated with increasing primitive and sarcomatous components.",
      "Across several associated tumors, primitive blastemal or embryonal morphology may recapitulate an immature developmental stage of the involved organ.",
      "Some tumors show multiple divergent components, including blastemal, rhabdomyosarcomatous, fibrosarcomatous, cartilaginous, or neuroectodermal elements.",
      "Cystic or mixed cystic-solid architecture occurs in PPB, cystic nephroma, thyroid lesions, nasal chondromesenchymal hamartoma, and several gynecologic tumors.",
      "Progression from a cystic or hyperplastic precursor to an aggressive sarcoma is best established in PPB and cystic nephroma / anaplastic sarcoma of the kidney; anaplasia may correlate with TP53 alteration.",
      "Individual lesions may be morphologically indistinguishable from their sporadic counterparts; the pattern across organs and age is often more informative than a single histologic feature.",
    ],
    ihc: [
      "There is no single immunohistochemical stain that establishes DICER1-related tumor predisposition.",
      "Interpret immunophenotype according to the specific tumor type; use morphology, site, age, multiplicity, and molecular findings to recognize a possible syndromic pattern.",
      "DICER1 immunostaining, where performed, should not be used as a substitute for constitutional molecular testing.",
    ],
    differential: [
      "Sporadic counterparts of each tumor: the histology of an individual DICER1-associated lesion may be indistinguishable; multiplicity, age, and cross-organ history are key.",
      "Other hereditary PPB / pediatric tumor predisposition syndromes: distinguish by the full tumor spectrum and germline findings rather than by lung cysts alone.",
      "Non-syndromic multinodular goiter or sporadic ovarian sex cord-stromal tumors: consider DICER1 when these occur at a young age or with characteristic additional lesions.",
    ],
    molecular: [
      "Most constitutional pathogenic variants are nonsense or frameshift loss-of-function variants distributed across DICER1; larger deletions and pathogenic missense variants are less common.",
      "The typical tumor second hit is a missense variant affecting one of the metal-binding residues in the RNase IIIb domain; it is usually in trans to the constitutional loss-of-function variant.",
      "RNase IIIb mutants selectively impair generation of 5p microRNAs, causing an altered 5p:3p microRNA ratio and derepression of target mRNAs.",
      "Postzygotic mosaic RNase IIIb hotspot variants may be present in multiple tissues and are biologically distinct from the usual constitutional loss-of-function-plus-tumor second-hit pattern.",
      "Use germline testing that covers sequence variants and copy-number changes; tumor panels focused on RNase IIIb hotspots may miss constitutional variants elsewhere in the gene.",
      "Methylation profiling can identify a shared signature in some DICER1-associated high-grade malignancies, but it does not replace germline testing.",
      "Tumor anaplasia may be associated with TP53 variants or loss; TP53 alteration is a progression-related finding, not the defining DICER1 syndrome event.",
    ],
  },
  {
    name: "DROSHA- and DGCR8-related microprocessor tumor predisposition",
    pathway: "Nuclear microprocessor complex",
    genes: "DROSHA (5p13.3); DGCR8 (22q11.21)",
    inheritance:
      "Rare autosomal dominant predisposition associated with heterozygous constitutional pathogenic variants. Penetrance and the full tumor spectrum are not established. Do not infer a hereditary syndrome from a tumor-only alteration or from 22q11 deletion alone.",
    clinical: [
      "DROSHA: reported constitutional variants in children with pineoblastoma and, less often, Wilms tumor.",
      "DGCR8: the reported p.Glu518Lys variant has been associated with familial euthyroid multinodular goiter, thyroid hyperplasia / neoplasia, and multiple schwannomas.",
      "A papillary thyroid carcinoma has been reported in a DGCR8-associated family; isolated reports of other lesions remain of uncertain significance.",
      "The number of reported families is small, and formal penetrance estimates and outcome data are unavailable.",
    ],
    criteria: [
      "Essential: demonstrate a constitutional pathogenic variant in DROSHA or DGCR8.",
      "Supportive: pineoblastoma or Wilms tumor in a patient with a relevant DROSHA variant; or the combination of familial multinodular thyroid disease and schwannomas with the reported DGCR8 p.Glu518Lys variant.",
      "Tumor histology alone does not distinguish these syndromic tumors from sporadic counterparts.",
      "A tumor-acquired DROSHA or DGCR8 alteration, including chromosome 22q loss, is not by itself evidence of a constitutional predisposition.",
    ],
    morphology: [
      "Reported DROSHA- and DGCR8-associated tumors do not show a distinctive histologic phenotype compared with their sporadic counterparts.",
      "Pineoblastoma, Wilms tumor, thyroid nodular hyperplasia / carcinoma, and schwannoma should be classified using their standard site-specific morphologic criteria.",
    ],
    ihc: [
      "No validated immunohistochemical pattern is established for identifying DROSHA- or DGCR8-related predisposition.",
      "Routine tumor immunophenotyping does not determine whether a DROSHA or DGCR8 variant is constitutional.",
    ],
    differential: [
      "Sporadic pineoblastoma and Wilms tumor: consider DROSHA only when age, family history, or constitutional testing supports it.",
      "NF2-related or other schwannomatosis syndromes: multiple schwannomas require evaluation of the broader clinical and molecular differential; DGCR8 is a rare reported association.",
      "Common multinodular goiter and sporadic thyroid carcinoma: the combination with schwannomas and the specific DGCR8 variant is more informative than thyroid morphology alone.",
      "22q11.2 deletion syndrome: deletion may include DGCR8 and LZTR1, but available data are insufficient to define a general cancer risk attributable to DGCR8 haploinsufficiency.",
    ],
    molecular: [
      "DROSHA-associated constitutional variants reported to date are predominantly truncating (nonsense or frameshift) variants; tumor-acquired second hits have been detected in analyzed cases.",
      "The reported DGCR8 predisposition variant is NM_022720.7:c.1552G>A, p.(Glu518Lys), located in the double-stranded RNA-binding domain.",
      "DGCR8 p.Glu518Lys-associated tumors have shown loss of the wild-type allele, often with loss of the other copy of chromosome 22q.",
      "The same DGCR8 p.Glu518Lys alteration has also been reported somatically in Wilms tumors and a small number of thyroid cancers; constitutional testing is needed to establish inherited predisposition.",
      "Consider constitutional testing when the phenotype is suggestive. Current evidence does not support broad syndrome attribution based solely on a tumor variant or an incidental 22q11 deletion.",
    ],
  },
  {
    name: "Goldenhar syndrome (oculo-auriculo-vertebral spectrum)",
    pathway: "Pre-mRNA splicing and craniofacial development",
    genes: "SF3B2; MYT1 is listed among candidate genes",
    inheritance:
      "Usually sporadic and genetically unexplained. Familial cases may show autosomal dominant inheritance with variable expressivity. Heterozygous SF3B2 loss-of-function variants have been identified in a subset of familial cases and a smaller proportion of sporadic cases; this does not explain most patients.",
    clinical: [
      "Congenital craniofacial microsomia involving structures derived from the first and second branchial arches.",
      "Classic pattern: mandibular or hemifacial hypoplasia, ocular and auricular malformations (including epibulbar dermoid and accessory tragus), and vertebral anomalies, especially cervical spine abnormalities.",
      "Usually unilateral (reported in approximately 70–90%); expression is variable.",
      "Ocular findings include limbal dermoid / dermolipoma, eyelid coloboma, microphthalmia, strabismus (including Duane syndrome), ptosis, and less commonly posterior segment abnormalities.",
      "Cardiac, genitourinary, and central nervous system anomalies may coexist.",
      "Most patients have normal intelligence and lifespan; airway, feeding, hearing, exposure keratopathy, and amblyopia are important early clinical concerns.",
    ],
    criteria: [
      "The source describes essential clinical features as facial asymmetry with preauricular tags and an ocular finding such as epibulbar dermoid or eyelid coloboma.",
      "Diagnostic criteria remain debated; diagnosis is primarily clinical and genetic testing is not required in most cases.",
      "Assess the full craniofacial, ocular, auricular, vertebral, cardiac, renal, and neurologic phenotype.",
    ],
    morphology: [
      "Epibulbar dermoid: dense subepithelial collagen resembling dermal collagen rather than normal corneal substantia propria.",
      "Dermal appendages, including pilosebaceous and apocrine / eccrine structures, may be present.",
      "Dermolipoma contains abundant mature adipose tissue.",
      "Complex choristoma may contain lacrimal gland tissue, cartilage, and smooth muscle; osseous choristoma is less common.",
      "The histology of the ocular choristoma is not independently diagnostic of Goldenhar syndrome; correlate with the craniofacial and auricular phenotype.",
    ],
    ihc: [
      "No syndrome-specific immunohistochemical profile is established for Goldenhar syndrome or its epibulbar choristomas.",
      "Use immunohistochemistry only when needed to characterize an unusual component or exclude a separate neoplasm; routine choristoma diagnosis is morphologic.",
    ],
    differential: [
      "Isolated epibulbar dermoid / dermolipoma: distinguish syndromic disease by associated hemifacial, auricular, and vertebral anomalies.",
      "Other craniofacial microsomia / oculo-auriculo-vertebral spectrum presentations: terminology overlaps; phenotype is variable and diagnostic boundaries are not uniform.",
      "Encephalocraniocutaneous lipomatosis and linear nevus sebaceous syndrome: consider when additional cutaneous, ocular, or neurologic findings extend beyond the typical Goldenhar pattern.",
    ],
    molecular: [
      "Heterozygous loss-of-function variants in SF3B2 (11q13.1), a U2 snRNP / spliceosome component, have been reported in approximately 25% of familial cases and 3% of sporadic cases in a large cohort.",
      "Inheritance in SF3B2-associated families is autosomal dominant with inter- and intrafamilial variable expressivity.",
      "Other reported findings include copy-number variants (including 22q11.2 deletions and 14q22.3 duplications involving OTX2) and candidate-gene variants; many are not diagnostic.",
      "MYT1 has been reported among candidate genes, but the available evidence in this source does not establish it as the principal molecular cause.",
      "Genetic testing is not required for clinical diagnosis, and a negative result does not exclude the syndrome.",
    ],
  },
];

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-5">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
        {title}
      </h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function RnaRegulationPage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const [showAll, setShowAll] = useState(true);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entities;
    return entities.filter((entity) =>
      [
        entity.name,
        entity.pathway,
        entity.genes,
        entity.inheritance,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.morphology,
        ...entity.ihc,
        ...entity.differential,
        ...entity.molecular,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const toggleEntity = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  const toggleAll = () => {
    if (showAll) {
      setExpanded([]);
      setShowAll(false);
    } else {
      setExpanded(filtered.map((entity) => entity.name));
      setShowAll(true);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
          Genetic Tumor Syndromes
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          RNA Regulation
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A clinicopathologic guide to microRNA processing and pre-mRNA
          splicing, connecting characteristic tumor patterns and developmental
          phenotypes with the relevant constitutional and somatic molecular
          mechanisms.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Pathway Overview
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          RNA regulation controls gene expression through post-transcriptional
          silencing and transcript processing. MicroRNA biogenesis involves
          sequential nuclear and cytoplasmic cleavage steps, whereas pre-mRNA
          splicing removes introns and joins exons. Constitutional variants,
          postzygotic mosaicism, and tumor-restricted second hits have different
          implications and should be distinguished during molecular workup.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {pathways.map((pathway) => (
            <article
              key={pathway.name}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {pathway.name}
              </h3>
              <dl className="mt-3 space-y-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Key genes
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.genes}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Normal function
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.function}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Pathogenic mechanism
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.mechanism}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Associated syndromes
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.syndromes}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Pathology Clues
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Start with the tumor, anatomic site, or developmental anomaly; then
            assess the syndrome-level pattern before selecting constitutional
            testing.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {clues.map((item) => (
            <article
              key={item.finding}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.finding}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.clue}
              </p>
              <div className="mt-3 border-t border-slate-100 pt-3 text-sm dark:border-slate-800">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Syndrome:{" "}
                  </span>
                  <span className="text-teal-800 dark:text-teal-300">
                    {item.syndrome}
                  </span>
                </div>
                <div className="mt-1 text-slate-500 dark:text-slate-400">
                  Genes: {item.genes}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Pathway-specific Entity Outlines
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {filtered.length} entities
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search syndrome, gene, feature..."
              className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white sm:w-80"
              aria-label="Search RNA regulation entities"
            />
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {showAll ? "Collapse all" : "Expand all"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((entity) => {
            const isExpanded = expanded.includes(entity.name);
            return (
              <article
                key={entity.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => toggleEntity(entity.name)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={isExpanded}
                >
                  <span>
                    <span className="block text-lg font-bold text-slate-900 dark:text-white">
                      {entity.name}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                      {entity.pathway}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {entity.genes}
                    </span>
                  </span>
                  <span className="mt-1 text-xl text-slate-400">
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                {isExpanded && (
                  <div className="border-t border-slate-200 px-5 pb-6 dark:border-slate-700">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.morphology} />
                    <Section title="Immunohistochemistry" items={entity.ihc} />
                    <Section
                      title="Differential Diagnosis"
                      items={entity.differential}
                    />
                    <Section
                      title="Molecular Pathology"
                      items={entity.molecular}
                    />
                    <div className="mt-5 rounded-lg bg-slate-50 p-3 text-sm dark:bg-slate-800/70">
                      <span className="font-semibold text-slate-700 dark:text-slate-200">
                        Inheritance:{" "}
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">
                        {entity.inheritance}
                      </span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
              No matching entity. Try a gene symbol, syndrome name, or clinical
              feature.
            </div>
          )}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}
