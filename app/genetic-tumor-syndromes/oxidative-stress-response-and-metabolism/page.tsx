"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  genes: string;
  inheritance: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: string[];
  molecular: string[];
  clues: string[];
};

type Pathway = {
  id: string;
  title: string;
  function: string;
  genes: string;
  mechanism: string;
  syndromes: string;
  entities: Entity[];
};

const pathways: Pathway[] = [
  {
    id: "angiogenesis",
    title: "Angiogenesis and Hypoxia Signaling",
    function:
      "Cellular oxygen sensing regulates hypoxia-inducible factors (HIFs), which control angiogenic growth factors, erythropoiesis, vascular permeability, and metabolic adaptation. Under normoxic conditions, VHL targets hydroxylated HIF-α for ubiquitination and proteasomal degradation.",
    genes: "VHL",
    mechanism:
      "Heterozygous germline loss-of-function variants in the VHL tumor suppressor gene predispose to tumors. Somatic inactivation of the remaining allele produces HIF stabilization and a pseudohypoxic transcriptional program, including increased VEGFA, PDGFB, TGFA, and EPO expression.",
    syndromes: "Von Hippel–Lindau syndrome",
    entities: [
      {
        name: "Von Hippel–Lindau Syndrome",
        genes: "VHL",
        inheritance:
          "Autosomal dominant; variable expression and age-dependent penetrance",
        profile: [
          "Retinal hemangioblastomas may appear in childhood or young adulthood (mean age approximately 25 years).",
          "CNS hemangioblastomas most often present in young adults (mean age approximately 29 years).",
          "Cerebellum, brainstem, spinal cord, and retina are characteristic sites for hemangioblastomas.",
          "Renal cysts and clear cell renal cell carcinomas are commonly bilateral and multifocal; mean age at RCC presentation is approximately 37 years.",
          "Pheochromocytomas typically arise in the adrenal medulla and often present around age 30 years.",
          "Pancreatic cysts and pancreatic neuroendocrine tumors may occur.",
          "Endolymphatic sac tumors may cause hearing loss, tinnitus, or vertigo.",
        ],
        criteria: [
          "CNS or retinal capillary hemangioblastoma together with a characteristic extraneural VHL-associated tumor, or a pertinent family history.",
          "Typical associated lesions include clear cell RCC, pheochromocytoma, pancreatic neuroendocrine tumor, and endolymphatic sac tumor.",
          "Multifocal or bilateral clear cell RCC, especially in a young patient, should prompt evaluation for VHL.",
          "Germline pathogenic VHL variant testing is strongly recommended to confirm the diagnosis and guide family assessment.",
          "A negative family history does not exclude VHL.",
        ],
        histology: [
          "Hemangioblastoma contains a dense capillary network admixed with lipid-rich stromal cells.",
          "VHL-associated clear cell RCC resembles sporadic clear cell RCC and may be multifocal.",
          "VHL-associated pheochromocytoma may show clear-cell change, a prominent vascular network, and thick vascular capsules.",
          "VHL-associated pancreatic neuroendocrine tumors may show clear-cell change and may be multifocal.",
          "Pancreatic islet dysplasia and small neuroendocrine proliferations may accompany pancreatic cystic disease.",
          "Endolymphatic sac tumors may extend into and destroy the temporal bone.",
        ],
        ihc: [
          "Clear cell RCC commonly shows diffuse membranous CAIX expression; this supports the clear-cell phenotype but is not specific for VHL syndrome.",
          "VHL-associated pheochromocytomas may express membranous CAIX and α-inhibin; neither marker is independently diagnostic.",
          "VHL-associated pancreatic neuroendocrine tumors may express α-inhibin and/or membranous CAIX.",
          "Use standard lineage-specific markers to classify each individual tumor; no single immunostain establishes germline VHL disease.",
        ],
        differential: [
          "Sporadic clear cell RCC: bilateral or multifocal tumors, young age, and associated VHL-spectrum lesions favor hereditary disease.",
          "SDH-deficient pheochromocytoma/paraganglioma: assess SDHB and SDHA; VHL-related tumors may show weak SDHB staining but retain SDHA.",
          "Other hereditary RCC syndromes, particularly FH tumor predisposition syndrome: FH-deficient RCC often shows prominent inclusion-like nucleoli and 2SC positivity.",
          "Choroid plexus papilloma: an endolymphatic sac tumor at the cerebellopontine angle may mimic it; temporal bone invasion favors endolymphatic sac tumor.",
        ],
        molecular: [
          "VHL is located at chromosome 3p25.3 and encodes a component of an E3 ubiquitin ligase complex.",
          "Germline variants include missense, nonsense, frameshift, splice-site, and deletion variants.",
          "A somatic second hit inactivates the remaining functional allele in VHL-associated tumors.",
          "Loss of VHL function prevents normal HIF-1α and HIF-2α degradation, producing a pseudohypoxic state.",
          "Increased HIF signaling drives VEGFA and other target genes, accounting for marked tumor vascularity.",
          "VHL subtype correlations: type 1 has a lower risk of pheochromocytoma; types 2A, 2B, and 2C are associated with differing combinations of pheochromocytoma, hemangioblastoma, and RCC.",
        ],
        clues: [
          "Bilateral, multifocal clear cell RCC, particularly in a young adult.",
          "Retinal or CNS hemangioblastoma with a renal, pancreatic, adrenal, or endolymphatic sac lesion.",
          "Highly vascular CNS or retinal tumor with a family history of VHL-associated neoplasia.",
          "Multifocal pancreatic neuroendocrine tumors or pancreatic cystic disease in a patient with another VHL-associated tumor.",
        ],
      },
    ],
  },
  {
    id: "krebs-cycle",
    title: "Krebs Cycle and Succinate Dehydrogenase",
    function:
      "The Krebs (citric acid) cycle generates reducing equivalents for oxidative phosphorylation and supplies intermediates for biosynthetic pathways. Succinate dehydrogenase (SDH, mitochondrial complex II) links the Krebs cycle to the electron transport chain.",
    genes: "SDHA · SDHB · SDHC · SDHD · SDHAF2",
    mechanism:
      "Germline pathogenic variants in an SDH-complex gene, followed by loss of the remaining functional allele, cause SDH deficiency. Succinate accumulates and acts as an oncometabolite by inhibiting 2-oxoglutarate-dependent dioxygenases, altering hypoxia signaling and epigenetic regulation. SDHC promoter hypermethylation can underlie Carney triad.",
    syndromes:
      "Hereditary pheochromocytoma–paraganglioma syndromes (SDHA, SDHB, SDHC, SDHD, SDHAF2) · Carney triad",
    entities: [
      {
        name: "SDH-Deficient Tumor Syndromes",
        genes: "SDHA, SDHB, SDHC, SDHD, SDHAF2",
        inheritance:
          "Usually autosomal dominant for germline SDH pathogenic variants; SDHD and SDHAF2 show parent-of-origin effects. Carney triad is generally non-hereditary and associated with mosaic SDHC epimutation.",
        profile: [
          "Pheochromocytomas and paragangliomas may present from childhood through adulthood; age and site vary by gene.",
          "Head and neck paragangliomas are often clinically silent and present as a mass.",
          "Abdominal extra-adrenal paragangliomas, particularly SDHB-associated tumors, may produce catecholamines and present with hypertension or related symptoms.",
          "SDHB-associated disease is enriched among metastatic paragangliomas.",
          "SDH-deficient GISTs are usually gastric and are an important cause of pediatric GIST.",
          "SDH-deficient RCC typically occurs in younger adults (median age approximately 35 years).",
          "Carney triad classically affects young women and combines gastric GIST, pulmonary chondroma, and paraganglioma.",
        ],
        criteria: [
          "A pathogenic or likely pathogenic germline variant in SDHA, SDHB, SDHC, SDHD, or SDHAF2, or a demonstrated SDHC epimutation.",
          "More than one confirmed SDH-deficient neoplasm in an individual or family strongly supports syndromic disease.",
          "Loss of SDHB expression by immunohistochemistry, with intact internal positive controls, establishes an SDH-deficient phenotype.",
          "Loss of both SDHA and SDHB supports SDHA-associated deficiency; loss of SDHB with retained SDHA supports defects involving other SDH components.",
          "A single SDH-deficient neoplasm should prompt genetic counseling and evaluation for an underlying predisposition, unless biallelic somatic-only inactivation is demonstrated.",
          "Carney triad is used for syndromic disease without an identified germline SDH pathogenic variant; consider SDHC promoter hypermethylation.",
        ],
        histology: [
          "SDH-deficient paragangliomas may show well-formed nests of epithelioid cells with clear or vacuolated cytoplasm, particularly in the head and neck.",
          "SDH-deficient GISTs are commonly gastric, multifocal, multinodular, or plexiform.",
          "SDH-deficient GISTs often have epithelioid cells and may show a nested growth pattern.",
          "SDH-deficient RCC commonly shows bland eosinophilic cells in sheets or compact nests.",
          "Microcystic change is common in SDH-deficient RCC.",
          "Eosinophilic or pale bubbly cytoplasmic inclusions may be present in SDH-deficient RCC.",
          "High-grade SDH-deficient RCC may show nuclear atypia, necrosis, and sarcomatoid change.",
          "SDH-deficient pulmonary chondromas are bland and may show calcification without entrapped respiratory epithelium or other mesenchymal components.",
          "SDH-deficient pituitary neuroendocrine tumors are rare; reported tumors may be large and prolactin-producing.",
        ],
        ihc: [
          "SDHB loss in tumor cells, with retained granular staining in endothelial cells or other non-neoplastic elements, is the key screening finding.",
          "SDHA loss accompanying SDHB loss supports SDHA-related deficiency.",
          "Retained SDHA with SDHB loss is typical of SDHB-, SDHC-, SDHD-, or SDHAF2-related deficiency.",
          "SDHB staining may be weak or difficult to interpret in some tumors; compare tumor staining with strong granular internal controls.",
          "SDH-deficient GISTs usually retain strong KIT and DOG1 expression.",
          "Some VHL-related pheochromocytomas show weak SDHB staining; do not diagnose SDH deficiency without careful internal-control assessment.",
          "CAIX and α-inhibin may support a pseudohypoxic PPGL phenotype but lack sufficient sensitivity and specificity to define SDH deficiency.",
        ],
        differential: [
          "VHL-associated pheochromocytoma: may show clear-cell change and weak SDHB staining, but usually retains SDHA; interpret SDHB against internal controls and correlate with molecular findings.",
          "PDGFRA-mutant GIST: often gastric and epithelioid, but KIT may be patchy or absent; SDH-deficient GIST typically retains strong KIT and DOG1.",
          "Renal oncocytoma: has finely granular, mitochondria-rich cytoplasm; SDH-deficient RCC often has flocculent eosinophilic cytoplasm, microcysts, or cytoplasmic inclusions.",
          "Clear cell RCC: markedly clear cytoplasm can reduce apparent SDHB staining; morphology and internal controls are essential.",
          "Carney complex: a distinct PRKAR1A-associated syndrome; it is not synonymous with Carney triad.",
        ],
        molecular: [
          "SDHA and SDHB encode catalytic subunits; SDHC and SDHD encode membrane-anchoring subunits; SDHAF2 is required for SDHA flavination.",
          "Biallelic inactivation destabilizes complex II and leads to loss of SDHB protein.",
          "Succinate accumulation inhibits 2-oxoglutarate-dependent dioxygenases and promotes pseudohypoxic signaling and epigenetic dysregulation.",
          "Most syndromic tumors have a germline first hit and somatic inactivation of the second allele; somatic-only biallelic SDH alterations are rare.",
          "SDHC promoter hypermethylation is a common mechanism in Carney triad and may require a dedicated methylation assay.",
          "SDHB and SDHA immunohistochemistry can help assess the functional significance of SDH gene variants of uncertain significance.",
          "SDHB-associated paragangliomas have a higher metastatic risk than many other hereditary PPGLs.",
        ],
        clues: [
          "Paraganglioma with loss of SDHB, especially an abdominal or metastatic tumor.",
          "Multifocal or plexiform gastric GIST, particularly in a child or young adult.",
          "Eosinophilic renal carcinoma with cytoplasmic inclusions and loss of SDHB.",
          "Young woman with gastric GIST and pulmonary chondroma, with or without paraganglioma.",
          "Multiple SDH-deficient tumors in one patient, even when family history is negative.",
        ],
      },
    ],
  },
  {
    id: "fumarate-metabolism",
    title: "Fumarate Metabolism",
    function:
      "Fumarate hydratase (FH) catalyzes the reversible conversion of fumarate to malate in the Krebs cycle. Loss of FH activity causes fumarate accumulation, which alters epigenetic regulation and impairs DNA repair.",
    genes: "FH",
    mechanism:
      "A heterozygous germline loss-of-function FH variant predisposes to tumor development. Somatic inactivation of the remaining allele causes fumarate accumulation and the oncometabolite phenotype. Biallelic somatic FH inactivation can also occur, particularly in uterine leiomyomas.",
    syndromes: "Hereditary leiomyomatosis and renal cell carcinoma syndrome",
    entities: [
      {
        name: "Hereditary Leiomyomatosis and Renal Cell Carcinoma Syndrome",
        genes: "FH",
        inheritance:
          "Autosomal dominant tumor predisposition; tumors show biallelic FH inactivation",
        profile: [
          "Cutaneous leiomyomas often begin in adulthood (mean age approximately 30 years) and increase in number and size with age.",
          "Cutaneous leiomyomas may be painful or sensitive to cold or light touch.",
          "Uterine leiomyomas are common in affected women and may cause symptoms or require surgery before age 35 years.",
          "FH-deficient RCC typically presents in adulthood (median age approximately 44 years).",
          "Skin, uterus, and kidney are the principal sites; pheochromocytoma and paraganglioma are uncommon associations.",
        ],
        criteria: [
          "A germline pathogenic FH variant.",
          "Multiple histologically confirmed FH-deficient leiomyomas or FH-deficient RCCs.",
          "Two or more of the following: FH-deficient leiomyoma, FH-deficient RCC, or a first-degree relative with FH-deficient neoplasms.",
          "A single FH-deficient RCC should prompt consideration of germline testing because the proportion attributable to hereditary disease is substantial.",
          "Multiple cutaneous leiomyomas warrant genetic evaluation regardless of FH immunostaining.",
        ],
        histology: [
          "FH-deficient RCC is a distinct renal carcinoma entity and may show varied architectural patterns.",
          "FH-deficient uterine leiomyomas may show bizarre or symplastic nuclear atypia.",
          "Multinucleated tumor cells may be present in FH-deficient leiomyomas.",
          "Prominent eosinophilic nucleoli with perinucleolar halos are a useful morphologic clue.",
          "Staghorn-type vessels and stromal edema may be present in FH-deficient leiomyomas.",
          "Some FH-deficient cutaneous and uterine leiomyomas are morphologically indistinguishable from conventional leiomyomas.",
          "FH-deficient pheochromocytomas and paragangliomas may resemble their sporadic counterparts.",
        ],
        ihc: [
          "Loss of FH expression in tumor cells, with retained staining in non-neoplastic internal controls, is highly specific but not fully sensitive.",
          "Aberrant 2-succinocysteine (2SC) positivity is a sensitive marker of fumarate accumulation.",
          "2SC is less specific in renal carcinoma than in leiomyoma and pheochromocytoma/paraganglioma.",
          "FH and 2SC immunohistochemistry identify an FH-deficient phenotype but do not establish germline status.",
        ],
        differential: [
          "Conventional leiomyoma: may lack the characteristic nucleolar and vascular features; FH and 2SC staining can identify an FH-deficient subset.",
          "Leiomyosarcoma: atypia in FH-deficient leiomyoma does not by itself establish malignancy; assess mitotic activity, tumor cell necrosis, and other criteria.",
          "MET-associated hereditary papillary RCC: usually papillary/tubulopapillary; FH-deficient RCC may show prominent inclusion-like nucleoli and 2SC positivity.",
          "SDH-deficient RCC: often has eosinophilic cells, microcysts, and cytoplasmic inclusions; use SDHB/SDHA alongside FH/2SC.",
        ],
        molecular: [
          "FH is located at chromosome 1q43 and encodes fumarate hydratase.",
          "Germline pathogenic variants include missense, nonsense, frameshift, splice-site, and deletion variants.",
          "Tumor development generally requires somatic inactivation of the remaining FH allele.",
          "Fumarate accumulation promotes epigenetic dysregulation and suppression of DNA repair.",
          "FH-deficient immunophenotype does not prove a germline variant; purely somatic biallelic inactivation occurs, particularly in uterine leiomyomas.",
          "Germline testing is important for risk assessment and family counseling.",
        ],
        clues: [
          "Multiple cutaneous piloleiomyomas, particularly when painful or cold-sensitive.",
          "Young woman with numerous or early-onset uterine leiomyomas.",
          "Renal carcinoma with prominent eosinophilic nucleoli and perinucleolar halos.",
          "FH loss and/or 2SC positivity in a renal tumor or smooth muscle neoplasm.",
        ],
      },
    ],
  },
  {
    id: "metabolite-toxicity",
    title: "Metabolite Toxicity and Tyrosine Catabolism",
    function:
      "Tyrosine degradation prevents accumulation of reactive metabolites. Defects in the pathway can cause chronic hepatocellular injury, regenerative proliferation, fibrosis, and increased risk of hepatocellular carcinoma.",
    genes: "FAH",
    mechanism:
      "Biallelic germline loss-of-function variants in FAH impair fumarylacetoacetate degradation. Fumarylacetoacetate-related metabolites and succinylacetone accumulate, causing hepatocellular injury, cholestasis, fibrosis, and regenerative nodules. The cancer risk is largely a consequence of chronic metabolic liver injury.",
    syndromes: "Hereditary tyrosinemia type 1",
    entities: [
      {
        name: "Hereditary Tyrosinemia Type 1",
        genes: "FAH",
        inheritance: "Autosomal recessive",
        profile: [
          "Usually presents in infancy, commonly within the first 2 years of life.",
          "Both sexes are affected.",
          "Liver disease predominates, with progressive hepatic dysfunction and cirrhosis.",
          "Renal tubular dysfunction is common; neurologic and cardiac manifestations may occur.",
          "Hepatocellular carcinoma is a major long-term concern, particularly with delayed or inadequate treatment.",
        ],
        criteria: [
          "Abnormal liver and kidney function in an infant or child with suspected tyrosinemia.",
          "Elevated succinylacetone in blood and/or urine is the key biochemical diagnostic finding.",
          "Confirm with biallelic pathogenic FAH variants when molecular confirmation is indicated.",
          "Assess hepatic nodules for regenerative, dysplastic, and malignant transformation.",
          "Treatment with nitisinone should not be delayed while awaiting molecular results when the biochemical diagnosis is established.",
        ],
        histology: [
          "Untreated liver may show variable macrovesicular steatosis.",
          "Severe cholestasis may be present.",
          "Trabecular disarray and pseudoglandular formation may occur.",
          "Progressive perisinusoidal and septal fibrosis may lead to micronodular, macronodular, or mixed cirrhosis.",
          "Nodular lesions span macroregenerative nodules, dysplastic nodules, and hepatocellular carcinoma.",
          "HCC diagnosis requires accepted evidence of malignancy, including vascular or stromal invasion, true neocapsule formation, or significant architectural and cytologic atypia.",
          "Rare hepatoblastomas have been reported.",
        ],
        ihc: [
          "Glutamine synthetase, glypican-3, and HSP70 may support the diagnosis of HCC in the appropriate morphologic context.",
          "No immunohistochemical marker establishes hereditary tyrosinemia type 1.",
          "Interpret immunostains together with reticulin, architecture, and evidence of invasion when evaluating well-differentiated hepatic nodules.",
        ],
        differential: [
          "Other causes of childhood cirrhosis and chronic liver injury: elevated succinylacetone is the key discriminator for tyrosinemia type 1.",
          "Regenerative or dysplastic nodules: distinguish from HCC by architecture, reticulin framework, cytologic atypia, and especially vascular or stromal invasion.",
          "Other pediatric hepatic malignancies, including hepatoblastoma: integrate age, morphology, immunophenotype, and clinical metabolic findings.",
        ],
        molecular: [
          "FAH is located at chromosome 15q25.1 and encodes fumarylacetoacetate hydrolase.",
          "Disease results from homozygous or compound heterozygous germline inactivating variants, including missense, nonsense, frameshift, splice-site, and deletion variants.",
          "Deficient FAH activity causes accumulation of fumarylacetoacetate-related metabolites and succinylacetone.",
          "Succinylacetone can be measured in blood or urine and is the key biochemical diagnostic marker.",
          "FAH sequencing supports confirmation, family testing, and reproductive counseling; it is not a substitute for biochemical diagnosis.",
        ],
        clues: [
          "Infant or young child with chronic liver dysfunction, renal tubular abnormalities, and elevated succinylacetone.",
          "Cirrhotic liver with numerous regenerative and dysplastic nodules in a child with known tyrosinemia type 1.",
          "Hepatic nodule suspicious for HCC in a patient with delayed treatment or persistently abnormal AFP.",
          "History of hereditary tyrosinemia type 1 even after nitisinone therapy; HCC surveillance remains important.",
        ],
      },
    ],
  },
];

function includesQuery(entity: Entity, query: string) {
  const text = [
    entity.name,
    entity.genes,
    entity.inheritance,
    ...entity.profile,
    ...entity.criteria,
    ...entity.histology,
    ...entity.ihc,
    ...entity.differential,
    ...entity.molecular,
    ...entity.clues,
  ]
    .join(" ")
    .toLowerCase();
  return text.includes(query.toLowerCase());
}

export default function OxidativeStressResponseAndMetabolismPage() {
  const [query, setQuery] = useState("");
  const [activePathway, setActivePathway] = useState("all");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [cluesOpen, setCluesOpen] = useState(true);

  const allEntities = useMemo(
    () =>
      pathways.flatMap((pathway) =>
        pathway.entities.map((entity) => ({
          ...entity,
          pathwayId: pathway.id,
          pathwayTitle: pathway.title,
        })),
      ),
    [],
  );

  const visiblePathways = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pathways
      .filter(
        (pathway) => activePathway === "all" || pathway.id === activePathway,
      )
      .map((pathway) => ({
        ...pathway,
        entities: pathway.entities.filter(
          (entity) =>
            !q ||
            includesQuery(entity, q) ||
            pathway.title.toLowerCase().includes(q) ||
            pathway.function.toLowerCase().includes(q) ||
            pathway.genes.toLowerCase().includes(q),
        ),
      }))
      .filter(
        (pathway) => pathway.entities.length > 0 || (!q && !activePathway),
      );
  }, [query, activePathway]);

  const entityCount = allEntities.length;
  const visibleEntityIds = visiblePathways.flatMap((p) =>
    p.entities.map((e) => `${p.id}:${e.name}`),
  );

  function toggleEntity(id: string) {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  function expandAll() {
    setExpanded(visibleEntityIds);
  }

  function collapseAll() {
    setExpanded([]);
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
          PathologyGPS · Genetic Tumor Syndromes
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Oxidative Stress Response and Metabolism
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference linking oxygen sensing, mitochondrial
          metabolism, and inherited metabolic disorders to their associated
          neoplasms. Use the pathology clues to recognize syndromic patterns,
          then review the relevant pathway, gene, and tumor phenotype.
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setCluesOpen(!cluesOpen)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pathology Clues
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Morphologic and clinical findings that should raise suspicion for
              an underlying metabolic or tumor predisposition syndrome.
            </p>
          </div>
          <span className="text-xl text-slate-500">
            {cluesOpen ? "−" : "+"}
          </span>
        </button>
        {cluesOpen && (
          <div className="overflow-x-auto border-t border-slate-200">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-5 py-3">Pathologic or Clinical Finding</th>
                  <th className="px-5 py-3">Consider</th>
                  <th className="px-5 py-3">Most Useful Diagnostic Clue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Bilateral or multifocal clear cell RCC in a young patient
                  </td>
                  <td className="px-5 py-3">Von Hippel–Lindau syndrome</td>
                  <td className="px-5 py-3">
                    Look for retinal/CNS hemangioblastoma, pancreatic lesions,
                    pheochromocytoma, and germline VHL variants.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Highly vascular CNS or retinal hemangioblastoma
                  </td>
                  <td className="px-5 py-3">Von Hippel–Lindau syndrome</td>
                  <td className="px-5 py-3">
                    A second VHL-associated tumor or family history supports the
                    syndromic diagnosis.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Paraganglioma with loss of SDHB
                  </td>
                  <td className="px-5 py-3">SDH-deficient tumor syndrome</td>
                  <td className="px-5 py-3">
                    Retained internal controls are essential; follow with SDHA
                    and germline SDHx/SDHAF2 assessment.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Gastric multifocal, multinodular, or plexiform GIST
                  </td>
                  <td className="px-5 py-3">SDH-deficient tumor syndrome</td>
                  <td className="px-5 py-3">
                    SDHB loss; KIT and DOG1 are usually strongly positive
                    despite absence of KIT/PDGFRA driver variants.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Eosinophilic RCC with cytoplasmic inclusions
                  </td>
                  <td className="px-5 py-3">SDH-deficient RCC</td>
                  <td className="px-5 py-3">
                    SDHB loss, often with SDHA retained; distinguish from
                    oncocytoma and clear cell RCC.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Multiple cutaneous leiomyomas or early, numerous uterine
                    leiomyomas
                  </td>
                  <td className="px-5 py-3">
                    FH tumor predisposition syndrome
                  </td>
                  <td className="px-5 py-3">
                    Consider FH and 2SC immunohistochemistry and germline FH
                    testing.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    RCC with prominent eosinophilic nucleoli and perinucleolar
                    halos
                  </td>
                  <td className="px-5 py-3">
                    FH-deficient RCC / FH tumor predisposition syndrome
                  </td>
                  <td className="px-5 py-3">
                    FH loss and aberrant 2SC positivity support fumarate
                    hydratase deficiency.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Infant with liver dysfunction, renal tubular disease, and
                    elevated succinylacetone
                  </td>
                  <td className="px-5 py-3">Hereditary tyrosinemia type 1</td>
                  <td className="px-5 py-3">
                    Blood or urine succinylacetone is the key biochemical
                    diagnostic marker.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium">
                    Cirrhotic pediatric liver with multiple
                    regenerative/dysplastic nodules
                  </td>
                  <td className="px-5 py-3">Hereditary tyrosinemia type 1</td>
                  <td className="px-5 py-3">
                    Assess for HCC using architecture, reticulin, cytologic
                    atypia, and vascular or stromal invasion.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setOverviewOpen(!overviewOpen)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pathway Overview
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Core pathway function, genes, normal protein activity, and disease
              mechanism.
            </p>
          </div>
          <span className="text-xl text-slate-500">
            {overviewOpen ? "−" : "+"}
          </span>
        </button>
        {overviewOpen && (
          <div className="space-y-4 border-t border-slate-200 p-5">
            {pathways.map((pathway) => (
              <article
                key={pathway.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <h3 className="font-bold text-slate-900">{pathway.title}</h3>
                <dl className="mt-3 grid gap-3 text-sm md:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Pathway Function
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.function}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Key Genes and Normal Function
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.genes}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Pathogenic Mechanism
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.mechanism}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Associated Syndromes
                    </dt>
                    <dd className="mt-1 leading-6 text-slate-700">
                      {pathway.syndromes}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Pathway-Specific Entity Outlines
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {entityCount} diagnostic entities across {pathways.length} pathway
              groups.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={expandAll}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Collapse All
            </button>
          </div>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_260px]">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Search diagnoses, genes, morphology, or markers
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g., SDHB, clear cell RCC, 2SC, succinylacetone"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">
              Pathway
            </span>
            <select
              value={activePathway}
              onChange={(event) => setActivePathway(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              <option value="all">All pathways</option>
              {pathways.map((pathway) => (
                <option key={pathway.id} value={pathway.id}>
                  {pathway.title}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="space-y-6">
          {visiblePathways.map((pathway) => (
            <section key={pathway.id} className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-lg font-bold text-sky-800">
                  {pathway.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {pathway.function}
                </p>
              </div>
              {pathway.entities.map((entity) => {
                const id = `${pathway.id}:${entity.name}`;
                const isOpen = expanded.includes(id);
                return (
                  <article
                    key={id}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleEntity(id)}
                      className="flex w-full flex-col gap-2 px-5 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {entity.name}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          Gene: {entity.genes} <span className="mx-2">·</span>{" "}
                          {entity.inheritance}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                        {isOpen ? "Collapse −" : "Expand +"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="grid gap-5 border-t border-slate-200 p-5 lg:grid-cols-2">
                        <OutlineSection
                          title="Clinical Profile"
                          items={entity.profile}
                        />
                        <OutlineSection
                          title="Essential Diagnostic Criteria"
                          items={entity.criteria}
                        />
                        <OutlineSection
                          title="Histopathology"
                          items={entity.histology}
                        />
                        <OutlineSection
                          title="Immunophenotype"
                          items={entity.ihc}
                        />
                        <OutlineSection
                          title="Differential Diagnosis"
                          items={entity.differential}
                        />
                        <OutlineSection
                          title="Molecular Pathology"
                          items={entity.molecular}
                        />
                        <div className="lg:col-span-2 rounded-xl bg-sky-50 p-4">
                          <h5 className="text-sm font-bold uppercase tracking-wide text-sky-900">
                            Pathology Clues
                          </h5>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-sky-950">
                            {entity.clues.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          ))}
          {visiblePathways.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No matching diagnoses. Try another gene, marker, or search term.
            </div>
          )}
        </div>
      </section>

      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-500">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}

function OutlineSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h5 className="text-sm font-bold text-slate-900">{title}</h5>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
