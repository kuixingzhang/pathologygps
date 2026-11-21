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
    name: "Ubiquitin signaling and deubiquitination",
    genes:
      "BAP1 (3p21.1); interacting partners include ASXL1, ASXL2, FOXK1, FOXK2, HCFC1, and YY1",
    function:
      "Ubiquitylation is the covalent attachment of ubiquitin to a target protein. Depending on the ubiquitin linkage and cellular context, this can direct proteins toward proteasomal degradation or alter their activity, localization, and interactions. Deubiquitinases remove ubiquitin and thereby edit or reverse these signals. BAP1 is a nuclear ubiquitin carboxyl-terminal hydrolase (deubiquitinase), not an enzyme that simply labels proteins for degradation.",
    mechanism:
      "BAP1 has tumor-suppressive functions involving chromatin regulation, transcription, cell-cycle control, cellular differentiation, and the DNA damage response, including homologous recombination repair. Loss of BAP1 function commonly results from a truncating or splice-site variant, a deleterious missense variant affecting its deubiquitinase function, or tumor-acquired loss of the remaining wild-type allele. Nuclear localization and deubiquitinase activity are both required for tumor-suppressive function.",
    syndromes:
      "BAP1-related tumor predisposition syndrome (BAP1-TPDS), an autosomal dominant cancer predisposition syndrome caused by a heterozygous constitutional pathogenic variant. The associated tumor spectrum includes BAP1-inactivated melanocytic tumors, uveal and cutaneous melanoma, pleural or peritoneal mesothelioma, clear cell renal cell carcinoma, and meningioma.",
  },
];

const clues = [
  {
    finding: "Multiple BAP1-inactivated melanocytic tumors",
    clue: "Multiple small, skin-colored to reddish-brown, dome-shaped papules beginning in adolescence or young adulthood are a useful cutaneous clue. Lesions may be numerous and can resemble Spitz or other melanocytic nevi. They are suggestive but not specific for BAP1-TPDS; correlate with personal and family history of uveal melanoma, mesothelioma, or renal cell carcinoma.",
    syndrome: "BAP1-related tumor predisposition syndrome",
    genes: "BAP1",
  },
  {
    finding: "Mesothelioma at an unusually young age, especially peritoneal",
    clue: "Mesothelioma in a younger patient, without the usual male predominance, or arising in the peritoneum should raise consideration of BAP1-TPDS. BAP1 loss is common in sporadic mesothelioma as well, so tumor immunohistochemistry alone cannot establish hereditary disease.",
    syndrome: "BAP1-related tumor predisposition syndrome",
    genes: "BAP1",
  },
  {
    finding:
      "Uveal melanoma, particularly with a personal or family history of other BAP1-associated tumors",
    clue: "Uveal melanoma may be the sentinel malignancy in a carrier. A history of multiple melanocytic skin tumors, mesothelioma, clear cell renal cell carcinoma, or meningioma strengthens the rationale for constitutional evaluation. BAP1 mutation in a uveal melanoma is not synonymous with a germline variant.",
    syndrome: "BAP1-related tumor predisposition syndrome",
    genes: "BAP1",
  },
  {
    finding:
      "Clear cell renal cell carcinoma with early onset or syndromic context",
    clue: "Consider BAP1-TPDS in a patient with clear cell RCC at a young age, multiple primary tumors, or a family history that includes uveal melanoma, mesothelioma, or characteristic melanocytic tumors. The renal tumor morphology alone is not diagnostic of germline BAP1 disease.",
    syndrome: "BAP1-related tumor predisposition syndrome",
    genes: "BAP1",
  },
  {
    finding:
      "BAP1-deficient meningioma, especially in a young patient or with aggressive recurrence",
    clue: "BAP1-mutant meningiomas are rare but have been associated with aggressive behavior and frequent recurrence. In a BAP1-deficient meningioma, particularly with young age or a personal/family history of other BAP1-associated tumors, consider genetic counseling and constitutional testing. Tumor BAP1 loss does not prove a germline variant.",
    syndrome: "BAP1-related tumor predisposition syndrome",
    genes: "BAP1",
  },
  {
    finding:
      "BAP1 nuclear loss by immunohistochemistry in any associated tumor",
    clue: "Complete loss of tumor-cell nuclear staining, with retained nuclear staining in non-neoplastic internal controls, supports BAP1 inactivation in the tumor. This is a tumor-level finding: both sporadic tumors and tumors arising in BAP1-TPDS can show loss. Use age, tumor spectrum, family history, and constitutional testing to determine hereditary status.",
    syndrome:
      "BAP1-related tumor predisposition syndrome (when constitutional variant is confirmed)",
    genes: "BAP1",
  },
];

const entities: Entity[] = [
  {
    name: "BAP1-related tumor predisposition syndrome (BAP1-TPDS)",
    pathway: "Ubiquitin signaling and deubiquitination",
    genes: "BAP1 (3p21.1)",
    inheritance:
      "Autosomal dominant predisposition caused by a heterozygous germline / constitutional pathogenic BAP1 variant. A tumor commonly acquires inactivation or loss of the remaining wild-type allele, consistent with a tumor-suppressor two-hit mechanism. Tumor-restricted BAP1 alterations are common in several sporadic cancers and must not be equated with inherited predisposition.",
    clinical: [
      "Tumors often arise earlier than their sporadic counterparts; affected individuals may develop more than one primary malignancy.",
      "Characteristic cutaneous manifestation: multiple BAP1-inactivated melanocytic tumors, typically beginning in the second decade and presenting as subtle skin-colored to reddish-brown dome-shaped papules, often on sun-exposed skin.",
      "Major associated malignancies include uveal melanoma, cutaneous melanoma, pleural and peritoneal mesothelioma, and clear cell renal cell carcinoma.",
      "Mesothelioma in carriers tends to present at a younger age, lacks the usual male predominance, and is more often peritoneal than in the general mesothelioma population.",
      "Other reported tumors include meningioma, basal cell carcinoma, cholangiocarcinoma, and hepatocellular carcinoma. Associations with several other tumor types remain less certain.",
      "Penetrance is incomplete and individual cancer risk is not precisely established. UV exposure and asbestos exposure may modify melanoma and mesothelioma risk, respectively.",
    ],
    criteria: [
      "Essential: demonstration of a germline / constitutional pathogenic or likely pathogenic BAP1 variant.",
      "Supportive: multiple BAP1-inactivated melanocytic tumors, or a personal/family history involving two or more characteristic tumor types, especially uveal melanoma, mesothelioma, cutaneous melanoma, and clear cell RCC.",
      "A BAP1-deficient tumor by immunohistochemistry or a BAP1 variant detected only in tumor tissue is not sufficient to diagnose BAP1-TPDS.",
      "Refer for genetic counseling and constitutional testing when the tumor type, age, multiplicity, or family history raises suspicion. Interpret variants of uncertain significance separately from pathogenic variants.",
    ],
    morphology: [
      "BAP1-inactivated melanocytic tumors are often small, well-circumscribed, dome-shaped papules clinically; histologically they may show a combined melanocytic proliferation with conventional nevus-like and larger epithelioid / spitzoid-appearing components.",
      "The melanocytic lesions may contain large epithelioid melanocytes with abundant cytoplasm and prominent nuclei; morphology can overlap with Spitz-spectrum lesions and other melanocytic nevi.",
      "Mesothelioma, uveal melanoma, cutaneous melanoma, clear cell RCC, and meningioma generally resemble their respective sporadic counterparts. In most settings, the syndrome is recognized through the tumor pattern and molecular findings rather than a unique histologic appearance.",
      "BAP1-mutant meningiomas are rare and have been reported to show aggressive clinical behavior and frequent recurrence; the prognostic implications specifically for germline carriers remain uncertain.",
    ],
    ihc: [
      "BAP1: complete loss of nuclear staining in tumor cells, with retained nuclear staining in endothelial cells, lymphocytes, stromal cells, or other non-neoplastic elements as internal positive controls, supports BAP1 inactivation.",
      "Retained BAP1 staining does not exclude every pathogenic BAP1 alteration; immunohistochemistry and genotyping are highly, but not perfectly, concordant.",
      "BAP1 nuclear loss identifies a BAP1-deficient tumor phenotype; it does not distinguish a somatic tumor event from a germline pathogenic variant.",
      "Interpret BAP1 immunohistochemistry in the context of tumor type and technical controls. Do not infer hereditary status from staining alone.",
    ],
    differential: [
      "Sporadic BAP1-deficient mesothelioma or melanoma: these commonly acquire somatic BAP1 alterations. Distinguish hereditary predisposition by constitutional testing and clinical/family history, not by tumor BAP1 loss alone.",
      "Spitz nevus / atypical Spitz tumor and other melanocytic nevi: BAP1-inactivated melanocytic tumors may have epithelioid or spitzoid morphology; correlate with BAP1 immunostaining and the clinical pattern of multiple lesions.",
      "Other hereditary melanoma syndromes: assess the full personal and family cancer spectrum and use an appropriately selected germline panel rather than assuming BAP1 from melanoma alone.",
      "Other hereditary renal cancer syndromes: clear cell RCC is not specific for BAP1-TPDS; age, multiplicity, associated tumors, and constitutional molecular findings guide classification.",
    ],
    molecular: [
      "BAP1 is located at chromosome 3p21.1 and encodes a nuclear ubiquitin carboxyl-terminal hydrolase / deubiquitinase.",
      "Constitutional pathogenic variants are most often nonsense, frameshift, indel, or splice-site variants causing loss of function; deleterious missense variants affecting the ubiquitin hydrolase domain are also reported. Many missense variants remain variants of uncertain significance and require careful classification.",
      "Tumor inactivation commonly involves a constitutional pathogenic variant plus somatic loss or inactivation of the wild-type allele (two-hit tumor-suppressor mechanism). Somatic BAP1 mutation or deletion can also occur in tumors without a germline predisposition.",
      "BAP1 immunohistochemistry is a useful screening tool for tumor protein loss, but constitutional testing is required to establish BAP1-TPDS.",
      "Germline testing should include sequence analysis and, when indicated, deletion / duplication analysis. Most reported germline pathogenic variants are small sequence-level variants; large deletions and rearrangements are less common.",
      "A variant detected in tumor tissue should be evaluated in a non-neoplastic constitutional specimen when hereditary predisposition is suspected. Consider the possibility of mosaicism if clinical suspicion remains high despite a negative routine blood test; the supplied source does not define a specific mosaic phenotype or testing algorithm.",
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

export default function ProteinRegulationPage() {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((entity) => entity.name),
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
          Protein Regulation
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A clinicopathologic guide to ubiquitin signaling and deubiquitination,
          focused on recognizing BAP1-deficient tumors and distinguishing
          tumor-restricted BAP1 inactivation from constitutional cancer
          predisposition.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Pathway Overview
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Protein ubiquitylation and deubiquitination regulate protein
          stability, activity, localization, and molecular interactions. BAP1 is
          a deubiquitinase with tumor-suppressive functions; its role in this
          pathway is the removal and editing of ubiquitin signals, together with
          effects on chromatin and the DNA damage response.
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
                    Key genes / proteins
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
                    Pathogenic variant mechanism
                  </dt>
                  <dd className="text-slate-600 dark:text-slate-300">
                    {pathway.mechanism}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700 dark:text-slate-200">
                    Associated syndrome
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
            Start with the tumor type, age, multiplicity, or BAP1
            immunophenotype; then determine whether constitutional testing is
            warranted.
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
                  Gene: {item.genes}
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
              Pathway-specific Entity Outline
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {filtered.length} entity
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search syndrome, gene, feature..."
              className="min-w-0 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white sm:w-80"
              aria-label="Search protein regulation entities"
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
