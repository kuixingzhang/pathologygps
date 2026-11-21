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
    name: "Telomerase biogenesis and telomere elongation",
    genes: "DKC1, TERT, TERC, NOP10, NHP2, NAF1, PARN, WRAP53, ZCCHC8",
    function:
      "Maintains chromosome-end length by adding TTAGGG repeats to telomeric DNA. Telomerase contains a catalytic reverse-transcriptase subunit (TERT) and an RNA template (TERC), with accessory proteins required for assembly, stability, trafficking, and activity.",
    mechanism:
      "Germline pathogenic variants impair telomerase assembly, activity, or maintenance and cause age-inappropriate telomere shortening. Inheritance is gene-dependent and may be X-linked, autosomal dominant, or autosomal recessive; de novo variants also occur.",
    syndromes:
      "Dyskeratosis congenita and the broader telomere biology disorder spectrum, including severe phenotypes such as Hoyeraal–Hreidarsson syndrome.",
  },
  {
    name: "Shelterin-mediated telomere protection",
    genes: "TINF2, POT1, ACD (TPP1), TERF2IP",
    function:
      "Shelterin binds telomeric DNA, protects chromosome ends from being recognized as DNA breaks, regulates telomerase access, and prevents inappropriate end-to-end chromosome fusion and DNA-damage signaling.",
    mechanism:
      "Pathogenic variants disrupt telomere capping or regulation. TINF2 and other telomere biology genes can cause short-telomere syndromes, whereas inherited POT1, ACD, TERF2IP, and TERT promoter alterations have been implicated in melanoma and other tumor predisposition. The precise oncogenic mechanism remains incompletely defined.",
    syndromes:
      "Dyskeratosis congenita/telomere biology disorders and POT1- and shelterin-related tumor predisposition syndrome.",
  },
  {
    name: "CST complex, telomere replication, and end processing",
    genes: "CTC1, STN1 (OBFC1), RTEL1",
    function:
      "Coordinates telomere replication, protects and processes telomeric DNA, and supports appropriate telomerase recruitment and completion of chromosome-end replication.",
    mechanism:
      "Germline defects can impair telomere replication or protection, producing critically short telomeres and multisystem telomere biology disorders. Biallelic CTC1 variants are a major cause of Coats plus syndrome.",
    syndromes:
      "Dyskeratosis congenita spectrum, including Coats plus syndrome and other severe telomere biology disorder phenotypes.",
  },
];

const entities: Entity[] = [
  {
    name: "Dyskeratosis congenita and telomere biology disorders",
    pathway: "Telomerase, shelterin, and telomere replication",
    genes:
      "DKC1, TERT, TERC, TINF2, NOP10, NHP2, ACD, POT1, CTC1, STN1, WRAP53, RTEL1, PARN, NAF1, ZCCHC8, and other telomere biology genes",
    inheritance:
      "Genetically heterogeneous: X-linked recessive (classically DKC1), autosomal dominant (including TERT, TERC, and TINF2), autosomal recessive (including CTC1, NOP10, NHP2, WRAP53, and RTEL1), and occasionally de novo. A single inheritance pattern should not be assumed across the syndrome spectrum.",
    clinical: [
      "Classic mucocutaneous triad: oral leukoplakia (often on the tongue), nail dystrophy, and reticular or lace-like skin hyperpigmentation.",
      "Nail changes often begin in childhood, typically between 5 and 13 years; bone marrow failure commonly emerges during the second decade but age and severity vary.",
      "Additional complications include myelodysplastic syndrome, acute myeloid leukemia, head-and-neck/upper aerodigestive squamous cell carcinoma, pulmonary fibrosis, and liver disease.",
      "Some individuals present with only one component, such as familial pulmonary fibrosis or unexplained marrow failure, without the complete mucocutaneous triad.",
      "Severe phenotypes may include Hoyeraal–Hreidarsson syndrome or Revesz syndrome; Coats plus syndrome is associated particularly with biallelic CTC1 variants and may include bilateral retinal Coats disease, intracranial calcifications, leukodystrophy, gastrointestinal bleeding, and poor bone healing.",
    ],
    criteria: [
      "Demonstration of age-adjusted short telomeres in peripheral blood leukocytes; flow-FISH is a commonly used clinical method, with very short telomeres (often below the first percentile) strongly supportive.",
      "Compatible clinical findings, particularly the mucocutaneous triad, bone marrow failure, pulmonary fibrosis, or a characteristic severe childhood phenotype.",
      "A pathogenic germline variant in a telomere biology gene provides molecular confirmation and helps establish inheritance and family risk.",
      "Absence of the full classic triad does not exclude a telomere biology disorder; clinical expression is variable and may be age-dependent.",
    ],
    morphology: [
      "Cutaneous biopsies may show epidermal atrophy, dermal telangiectasia, and pigment incontinence; these findings are nonspecific.",
      "Associated MDS/AML and solid tumors are generally morphologically similar to their sporadic counterparts; the syndromic context, rather than a unique tumor pattern, is the diagnostic clue.",
      "In a patient with marrow failure or myeloid neoplasia, integrate the hematologic findings with mucocutaneous changes, pulmonary/liver disease, and family history.",
    ],
    ihc: [
      "No tumor immunohistochemical profile is diagnostic of dyskeratosis congenita or a telomere biology disorder.",
      "IHC is selected according to the specific neoplasm; it does not substitute for telomere-length assessment or germline testing.",
    ],
    differential: [
      "Acquired aplastic anemia and sporadic MDS: distinguish using age, physical findings, family history, telomere length, and germline evaluation.",
      "Fanconi anemia: may also present with childhood marrow failure and congenital findings, but is caused by defects in the Fanconi anemia DNA interstrand crosslink repair pathway; chromosome-breakage testing can help distinguish it.",
      "Other inherited marrow-failure syndromes: use the associated phenotype and targeted germline testing rather than relying on marrow morphology alone.",
      "Coats plus syndrome versus isolated Coats disease: bilateral retinal disease with intracranial calcifications, leukodystrophy, marrow failure, or gastrointestinal vascular manifestations should prompt evaluation for CTC1-related disease.",
    ],
    molecular: [
      "Measure telomere length in peripheral blood leukocyte subsets; age-adjusted flow-FISH is a key diagnostic assay. Very short telomeres support the diagnosis but do not identify the causal gene.",
      "Use germline sequencing with deletion/duplication analysis across telomere biology genes; the panel should cover the clinically relevant gene spectrum rather than only DKC1 and TERT.",
      "Interpret variants according to gene-specific inheritance: for example, DKC1 is classically X-linked, while TERT/TERC/TINF2 may be autosomal dominant and CTC1/RTEL1 and several telomerase accessory genes may be autosomal recessive.",
      "Distinguish constitutional germline variants from acquired somatic variants in hematopoietic cells; when a blood-derived result is ambiguous, consider confirmation in an appropriate nonhematopoietic tissue.",
      "A pathogenic variant is not required to recognize a strongly supported clinical/telomere-length phenotype; conversely, a variant of uncertain significance alone does not establish the syndrome.",
    ],
  },
  {
    name: "POT1- and shelterin-related tumor predisposition syndrome",
    pathway: "Shelterin-mediated telomere protection",
    genes: "POT1, ACD (TPP1), TERF2IP, and the TERT promoter",
    inheritance:
      "Cancer predisposition is associated with inherited germline pathogenic variants. POT1-associated families are generally evaluated as an autosomal dominant predisposition pattern; gene-specific penetrance and evidence strength vary.",
    clinical: [
      "Melanoma-prone families with earlier-than-usual onset and/or multiple affected relatives are an important clinical setting.",
      "POT1 pathogenic variants have also been associated with hematologic malignancies, cardiac angiosarcoma, and brain tumors.",
      "Some TERT promoter variant carriers have presented with advanced melanoma in their twenties, but the clinical course is not sufficiently defined to predict behavior in an individual patient.",
      "There is currently no established evidence that these variants specifically predispose to acral or mucosal melanoma or to melanocytic tumors at other anatomic sites.",
    ],
    criteria: [
      "Identification of a pathogenic germline variant in POT1, ACD, TERF2IP, or the TERT promoter in an appropriate clinical/family context.",
      "A personal or family history of melanoma supports the interpretation but is not by itself diagnostic.",
      "Tumor morphology is not sufficiently distinctive to establish this syndrome; genetic confirmation is central.",
    ],
    morphology: [
      "Most reported melanomas resemble their sporadic counterparts.",
      "A spitzoid pattern has been suggested in some melanomas from POT1 variant carriers, but available data are limited and this morphology is not a diagnostic criterion.",
      "No characteristic histologic pattern has been established for the associated hematologic malignancies, cardiac angiosarcomas, or brain tumors.",
    ],
    ihc: [
      "No validated IHC profile establishes POT1-, ACD-, TERF2IP-, or TERT promoter–related germline predisposition.",
      "Use lineage-specific IHC to classify the tumor; do not infer a germline shelterin alteration from tumor IHC.",
    ],
    differential: [
      "CDKN2A-associated familial melanoma: both may present with melanoma-prone families; distinguish by germline testing and the broader family/tumor spectrum.",
      "BAP1 tumor predisposition syndrome: consider when melanocytic tumors coexist with BAP1-inactivated melanocytic tumors, uveal melanoma, mesothelioma, or renal cell carcinoma; confirm with germline BAP1 testing.",
      "Sporadic or UV-associated familial clustering: UV exposure and common melanoma risk factors may contribute; family history alone does not identify the causal gene.",
      "Other hereditary melanoma genes: use a multigene germline panel when the phenotype does not point reliably to one gene.",
    ],
    molecular: [
      "Confirm a pathogenic germline variant in POT1, ACD, or TERF2IP, or a pathogenic TERT promoter variant using constitutional DNA and an appropriately validated assay.",
      "Distinguish germline findings from somatic tumor alterations. A tumor-only POT1 or TERT alteration does not establish inherited predisposition.",
      "TERT promoter variants affect transcriptional regulation rather than encoding a telomerase protein; do not classify them as coding loss-of-function variants.",
      "The mechanism linking shelterin disruption or elongated telomeres to melanoma remains incompletely understood; proposed mechanisms include altered senescence and abnormal DNA-damage signaling at telomere ends.",
      "Somatic BRAF V600E or other melanoma driver alterations may assist tumor characterization but do not establish a germline POT1/shelterin syndrome.",
    ],
  },
];

const pathologyClues = [
  {
    clue: "MDS or AML with unexplained marrow failure, especially in a young patient",
    direction:
      "Consider a telomere biology disorder when cytopenias coexist with nail dystrophy, oral leukoplakia, reticular pigmentation, pulmonary fibrosis, liver disease, or a family history of marrow failure or early cancers.",
    syndrome: "Dyskeratosis congenita / telomere biology disorder",
    gene: "DKC1, TERT, TERC, TINF2, CTC1, RTEL1, and others",
  },
  {
    clue: "Head-and-neck or upper aerodigestive squamous cell carcinoma at an unusually young age",
    direction:
      "The combination with mucocutaneous abnormalities or a history of marrow failure is more informative than tumor morphology alone.",
    syndrome: "Dyskeratosis congenita / telomere biology disorder",
    gene: "Telomere maintenance genes",
  },
  {
    clue: "Familial pulmonary fibrosis or liver disease with otherwise unexplained cytopenias",
    direction:
      "Telomere biology disorders may present without the classic mucocutaneous triad; consider age-adjusted leukocyte telomere-length testing and germline evaluation.",
    syndrome: "Telomere biology disorder",
    gene: "TERT, TERC, RTEL1, PARN, and other telomere genes",
  },
  {
    clue: "Bilateral Coats disease with intracranial calcifications or leukodystrophy",
    direction:
      "Poor bone healing, gastrointestinal bleeding, or marrow failure further supports a syndromic telomere disorder rather than isolated retinal Coats disease.",
    syndrome: "Coats plus syndrome",
    gene: "CTC1 (typically biallelic germline variants)",
  },
  {
    clue: "Melanoma at a young age or multiple melanomas in a family",
    direction:
      "Consider POT1/shelterin-related predisposition among the hereditary melanoma differential, particularly when there are associated hematologic malignancies, cardiac angiosarcoma, or brain tumors in the family.",
    syndrome: "POT1- and shelterin-related tumor predisposition",
    gene: "POT1, ACD, TERF2IP, TERT promoter",
  },
  {
    clue: "Spitzoid melanoma in a patient with a melanoma-prone pedigree",
    direction:
      "Spitzoid morphology has been reported in some POT1 carriers, but it is not specific and should trigger clinical/genetic correlation rather than a histologic diagnosis of the syndrome.",
    syndrome: "POT1-related predisposition (consider)",
    gene: "POT1 and other hereditary melanoma genes",
  },
];

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-5">
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
        {title}
      </h4>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700 dark:text-slate-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function TelomereMaintenancePage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const [showAll, setShowAll] = useState(true);

  const filteredEntities = useMemo(() => {
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

  const toggleEntity = (name: string) => {
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  const toggleAll = () => {
    if (showAll) {
      setExpanded([]);
      setShowAll(false);
    } else {
      setExpanded(filteredEntities.map((entity) => entity.name));
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
          Telomere Maintenance
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A clinicopathologic guide to inherited telomere disorders and
          shelterin-related tumor predisposition, linking tumor patterns and
          multisystem findings to telomere biology and germline testing.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Pathway Overview
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Telomeres consist of tandem TTAGGG repeats and associated proteins at
          chromosome ends. They protect chromosomes from degradation, end-to-end
          fusion, and inappropriate DNA-damage responses. Telomeres shorten with
          cell division; telomerase counteracts this shortening, while shelterin
          and replication-associated complexes preserve telomere structure and
          integrity.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
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
            Start with the tumor or tissue finding, then assess the associated
            clinical phenotype before selecting germline testing.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {pathologyClues.map((item) => (
            <article
              key={item.clue}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.clue}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {item.direction}
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
                  Genes: {item.gene}
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
              {filteredEntities.length} entities
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search syndrome, gene, feature..."
              className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white sm:w-80"
              aria-label="Search telomere maintenance entities"
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
          {filteredEntities.map((entity) => {
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
                        Inheritance and genes:{" "}
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
          {filteredEntities.length === 0 && (
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
