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
    name: "Bloom Syndrome",
    group: "DNA Repair / Chromosomal Instability Syndromes",
    clue: "Marked growth deficiency, photosensitivity, characteristic facies, and early-onset multiple cancers; confirm biallelic BLM variants.",
    summary:
      "Autosomal recessive DNA-repair disorder with immune dysfunction and a broad predisposition to early-onset hematolymphoid and solid malignancies.",
    clinical: [
      "Perinatal and postnatal growth deficiency; feeding difficulties may be prominent.",
      "Photosensitive skin changes and characteristic facial features are typical.",
      "Both sexes are affected; malignancies often arise in childhood or young adulthood.",
      "AML, ALL/LBL, and B- or T-cell lymphoma are reported; solid tumors and multiple primary cancers are also common.",
      "Mean reported ages: 18 years for AML, 20 years for ALL/LBL, and 22 years for lymphoma.",
    ],
    criteria: [
      "Recognize the characteristic combination of growth deficiency, photosensitivity, facial features, and immune dysfunction.",
      "Establish the diagnosis by demonstrating biallelic pathogenic variants in BLM.",
      "Classify any associated leukemia or lymphoma using the standard entity-specific morphologic, immunophenotypic, and genetic criteria.",
    ],
    histology: [
      "There is no syndrome-specific histologic appearance; associated AML, ALL/LBL, lymphoproliferative disorders, and lymphomas resemble their corresponding sporadic counterparts.",
      "The spectrum may include more than one hematolymphoid malignancy or multiple cancers of different histologic types.",
    ],
    ihc: [
      "No immunophenotypic profile defines Bloom syndrome itself.",
      "Apply the standard lineage and entity-specific IHC panel to the associated hematolymphoid neoplasm.",
    ],
    differential: [
      {
        name: "Other inherited DNA-repair disorders",
        distinction:
          "Compare the clinical phenotype and confirm the causative germline gene; ataxia–telangiectasia is associated with progressive ataxia and telangiectasia, whereas Bloom syndrome features marked growth deficiency and photosensitivity.",
      },
      {
        name: "Sporadic leukemia or lymphoma",
        distinction:
          "The neoplasm may be morphologically indistinguishable; the syndromic phenotype and germline BLM testing establish the predisposition.",
      },
    ],
    molecular: [
      "Biallelic pathogenic loss-of-function variants in BLM are diagnostic.",
      "BLM encodes a RECQ DNA helicase; loss of function causes chromosomal instability and increased sister-chromatid exchange.",
    ],
    pitfalls: [
      "Do not expect a unique leukemia or lymphoma morphology or IHC phenotype.",
      "Patients may experience substantial treatment-related toxicity; treatment planning requires recognition of the underlying syndrome.",
    ],
  },
  {
    name: "Ataxia–Telangiectasia",
    group: "DNA Repair / Chromosomal Instability Syndromes",
    clue: "Progressive childhood cerebellar ataxia, oculocutaneous telangiectasia, immunodeficiency, and lymphoid malignancy; confirm biallelic ATM variants.",
    summary:
      "Autosomal recessive multisystem disorder caused by defective ATM-mediated DNA-damage response, with a strong predisposition to lymphoid neoplasms.",
    clinical: [
      "Usually manifests in infancy or early childhood; both sexes are affected approximately equally.",
      "Progressive cerebellar ataxia, abnormal eye movements, dysarthria, and oculocutaneous telangiectasia are characteristic.",
      "Immunodeficiency and recurrent sinopulmonary infections are common; growth retardation, hypogonadism, and elevated serum AFP may occur.",
      "Lymphoid malignancies arise from childhood; ALL/LBL is common, and T-prolymphocytic leukemia may occur in young adulthood.",
      "DLBCL and Burkitt lymphoma are reported; Hodgkin lymphoma is uncommon. Myeloid malignancies are distinctly uncommon.",
      "Lymphoid malignancies show a male predominance (reported M:F ratio approximately 1.4–2:1).",
    ],
    criteria: [
      "Demonstrate homozygous or compound heterozygous pathogenic ATM variants.",
      "Establish the associated leukemia or lymphoma using the same diagnostic criteria applied to patients without ataxia–telangiectasia.",
      "Elevated AFP is supportive but is not diagnostic.",
    ],
    histology: [
      "The associated lymphoid neoplasm has the same histologic features as its sporadic counterpart.",
      "Common associated entities include lymphoblastic leukemia/lymphoma, T-prolymphocytic leukemia, DLBCL, and less often Burkitt and Hodgkin lymphoma.",
      "In T-prolymphocytic leukemia, correlate blood and marrow findings with lymphocytosis and splenomegaly.",
    ],
    ihc: [
      "The immunophenotype is the same as that of the corresponding sporadic lymphoid neoplasm.",
      "Select lineage and entity-specific markers according to the suspected leukemia or lymphoma; no IHC stain independently establishes ataxia–telangiectasia.",
    ],
    differential: [
      {
        name: "Other childhood-onset ataxia syndromes",
        distinction:
          "Correlate neurologic findings with telangiectasia, immunodeficiency, AFP, and biallelic ATM testing.",
      },
      {
        name: "Nijmegen breakage syndrome and other DNA-repair disorders",
        distinction:
          "These may share radiosensitivity and chromosomal instability but have distinct clinical and molecular profiles.",
      },
      {
        name: "Sporadic lymphoid neoplasm",
        distinction:
          "Morphology and IHC may be indistinguishable; the constitutional phenotype and germline ATM testing identify the predisposition.",
      },
    ],
    molecular: [
      "Biallelic pathogenic variants in ATM at 11q22.3 establish the inherited disorder.",
      "ATM deficiency impairs double-strand DNA-break signaling and promotes chromosomal instability.",
      "Recurrent T-cell receptor or immunoglobulin-locus rearrangements may be seen; T-PLL may show TCL1A-associated inv(14)/t(14;14) or MTCP1-associated t(X;14), but these are features of the neoplasm rather than diagnostic tests for the syndrome.",
    ],
    pitfalls: [
      "High AFP is frequent but is not sufficient for diagnosis.",
      "The phenotype of the associated lymphoma is not altered simply because the patient has ATM deficiency.",
    ],
  },
  {
    name: "Neurofibromatosis Type 1 (NF1)",
    group: "RASopathies",
    clue: "Café-au-lait macules, intertriginous freckling, and neurofibromas with a predisposition to JMML and other tumors.",
    summary:
      "A common RAS/MAPK pathway disorder caused by germline NF1 alteration; associated hematologic risk is particularly relevant to juvenile myelomonocytic leukemia.",
    clinical: [
      "Usually recognized in childhood; affects both sexes.",
      "Café-au-lait macules, freckling, characteristic bone abnormalities, and learning difficulties are common.",
      "Neurofibromas may be localized, diffuse, or plexiform; plexiform neurofibromas carry an approximately 10% lifetime risk of malignant peripheral nerve sheath tumor transformation.",
      "Optic pathway glioma/pilocytic astrocytoma often develops in the first decade; other CNS tumors, sarcomas, gastrointestinal tumors, and breast cancer are increased.",
      "JMML and other myeloid neoplasms are recognized hematologic associations.",
    ],
    criteria: [
      "Establish a compatible NF1 phenotype and/or identify a pathogenic germline NF1 variant.",
      "In a patient with a myeloid proliferation, assess persistent peripheral blood monocytosis, leukocytosis, circulating immature myeloid cells, and marrow findings.",
      "Do not attribute a MAPK-pathway variant to germline NF1 without genotype–phenotype correlation and appropriate germline testing.",
    ],
    histology: [
      "RASopathy-associated myeloid proliferations may show hypercellular marrow with myeloid hyperplasia and occasional erythroid hyperplasia.",
      "Dysgranulopoiesis is often minimal; pseudo–Pelger–Huët forms or hypogranular granulocytes may occur.",
      "Megakaryocytes are often decreased with minimal dysplasia; monocytes are increased, and blasts remain below 20% in the described proliferative pattern.",
      "Reticulin fibrosis may be present.",
    ],
    ihc: [
      "No IHC profile diagnoses NF1 or its germline status.",
      "Use standard marrow and flow-cytometric studies to characterize the myeloid proliferation and exclude alternative myeloid neoplasms.",
    ],
    differential: [
      {
        name: "Legius syndrome",
        distinction:
          "May closely mimic NF1 with café-au-lait macules and freckling but lacks neurofibromas and generally has lower oncologic risk.",
      },
      {
        name: "Sporadic JMML",
        distinction:
          "The hematologic phenotype may overlap; evaluate for a constitutional NF1 phenotype and germline NF1 alteration.",
      },
      {
        name: "Childhood myelodysplastic neoplasm",
        distinction:
          "RASopathy-associated marrow may be hypercellular but typically has minimal dysplasia; assess blasts and integrated clinical/genetic criteria.",
      },
    ],
    molecular: [
      "Germline NF1 pathogenic variants support the diagnosis.",
      "NF1 is one of the RAS/MAPK pathway genes implicated in JMML; distinguish constitutional variants from acquired somatic variants.",
      "A specific NF1 variant, c.2970_2972del (p.M992del), is associated with absence of neurofibromas.",
    ],
    pitfalls: [
      "A somatic NF1 or other MAPK-pathway variant in a myeloid neoplasm does not by itself prove a germline RASopathy.",
      "Legius syndrome can mimic the pigmentary findings of NF1 but does not produce neurofibromas.",
    ],
  },
  {
    name: "Legius Syndrome",
    group: "RASopathies",
    clue: "NF1-like pigmentary findings without neurofibromas; confirm a pathogenic SPRED1 variant.",
    summary:
      "A RAS/MAPK pathway syndrome that can be clinically mistaken for NF1 but generally carries less oncologic risk.",
    clinical: [
      "Typically recognized in childhood; affects both sexes.",
      "Café-au-lait macules and freckling may closely resemble NF1.",
      "Neurofibromas are absent, a key distinction from classic NF1.",
      "The overall oncologic risk is generally lower than in NF1.",
    ],
    criteria: [
      "Identify an NF1-like pigmentary phenotype without neurofibromas.",
      "Confirm the diagnosis with a pathogenic germline SPRED1 variant.",
      "Reassess the diagnosis if neurofibromas or other defining NF1 manifestations develop.",
    ],
    histology: [
      "There is no characteristic hematolymphoid histology attributable to Legius syndrome.",
      "A hematolymphoid neoplasm, if present, requires independent classification using standard criteria.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is established.",
      "Use standard lineage-specific IHC for any associated neoplasm.",
    ],
    differential: [
      {
        name: "Neurofibromatosis type 1",
        distinction:
          "NF1 is favored by neurofibromas, plexiform neurofibromas, characteristic bone lesions, and other NF1 manifestations; Legius syndrome lacks neurofibromas.",
      },
      {
        name: "Other pigmentary disorders",
        distinction:
          "Use the complete phenotype and germline molecular testing rather than café-au-lait macules alone.",
      },
    ],
    molecular: [
      "Pathogenic germline variants in SPRED1 establish the molecular diagnosis.",
    ],
    pitfalls: [
      "Do not diagnose NF1 from café-au-lait macules alone when neurofibromas are absent.",
    ],
  },
  {
    name: "Noonan Syndrome",
    group: "RASopathies",
    clue: "Characteristic facies, congenital heart disease, short stature, and lymphatic or skeletal abnormalities; consider JMML in a child with monocytosis.",
    summary:
      "A RAS/MAPK pathway disorder with variable germline causes and a recognized predisposition to myeloid proliferations, especially JMML.",
    clinical: [
      "Usually recognized in childhood; affects both sexes.",
      "Characteristic facial features, congenital heart defects, short stature, coagulopathy, and neurodevelopmental differences may occur.",
      "Undescended testes, ocular, lymphatic, and skeletal abnormalities are additional clues.",
      "Hepatosplenomegaly may reflect an associated subclinical myeloid proliferation.",
      "JMML and other myeloid neoplasms are particularly associated with PTPN11- and CBL-related disease; lymphoblastic leukemia/lymphoma and AML are also reported.",
    ],
    criteria: [
      "Establish a characteristic Noonan phenotype and identify a pathogenic germline RAS/MAPK pathway variant when possible.",
      "In suspected JMML, document sustained peripheral blood monocytosis of at least 1 × 10⁹/L, leukocytosis, and fewer than 20% blasts, then apply full JMML diagnostic criteria.",
      "Correlate the genotype with the hematologic phenotype; PTPN11 variants at codons 61, 71, 72, and 76 are associated with particularly increased risk.",
    ],
    histology: [
      "Marrow may be hypercellular with myeloid hyperplasia and occasional erythroid hyperplasia.",
      "Dysplasia is often limited; megakaryocytes may be reduced and monocytes increased.",
      "Blasts are increased but remain below 20% in the described RASopathy-associated proliferative pattern.",
      "Peripheral blood may show leukocytosis, left-shifted granulopoiesis, sustained monocytosis, and nucleated red blood cells.",
    ],
    ihc: [
      "No IHC profile establishes Noonan syndrome.",
      "Use standard flow cytometry and immunophenotyping to characterize blasts and exclude other myeloid or lymphoid neoplasms.",
    ],
    differential: [
      {
        name: "Sporadic JMML",
        distinction:
          "The marrow and blood findings may be indistinguishable; the syndromic phenotype and germline testing establish the constitutional predisposition.",
      },
      {
        name: "Childhood myelodysplastic neoplasm",
        distinction:
          "RASopathy-associated proliferations often show less conspicuous dysplasia; integrate blast percentage, monocytosis, and molecular findings.",
      },
      {
        name: "Other RASopathies",
        distinction:
          "Facial, cardiac, cutaneous, developmental, and molecular features overlap; assign the specific syndrome by genotype–phenotype correlation.",
      },
    ],
    molecular: [
      "Germline variants may involve PTPN11, CBL, SOS1, RAF1, RIT1, KRAS, NRAS, and other RAS/MAPK pathway genes.",
      "PTPN11 and CBL are particularly relevant to JMML risk; some CBL-associated myeloid proliferations may regress spontaneously.",
      "A MAPK-pathway variant found in tumor-only sequencing requires germline confirmation when constitutional predisposition is suspected.",
    ],
    pitfalls: [
      "A RAS/MAPK mutation alone does not distinguish germline RASopathy from a somatic driver in a myeloid neoplasm.",
      "Do not diagnose AML unless the applicable blast threshold and entity-specific criteria are met.",
    ],
  },
  {
    name: "Noonan Syndrome with Multiple Lentigines",
    group: "RASopathies",
    clue: "Multiple lentigines with Noonan-like facial and cardiac findings; consider RAF1- or PTPN11-associated disease.",
    summary:
      "A Noonan-spectrum RASopathy formerly termed LEOPARD syndrome, with a distinct pigmentary and cardiac phenotype.",
    clinical: [
      "Usually becomes apparent during childhood; affects both sexes.",
      "Multiple lentigines, characteristic facial features, ocular hypertelorism, and cardiac conduction abnormalities may occur.",
      "Pulmonary stenosis, abnormal genital development, growth retardation, and sensorineural deafness are recognized features.",
      "The source describes enrichment of lymphoblastic leukemia/lymphoma and AML in PTPN11- and RAF1-related disease.",
    ],
    criteria: [
      "Recognize the multiple-lentigines phenotype in a patient with Noonan-spectrum features.",
      "Confirm a pathogenic germline RAS/MAPK pathway variant, particularly in the appropriate PTPN11 or RAF1 context.",
      "Classify any hematolymphoid neoplasm independently using standard diagnostic criteria.",
    ],
    histology: [
      "No syndrome-specific hematolymphoid morphology is defined.",
      "Associated leukemia or lymphoma is evaluated according to its conventional morphologic and genetic criteria.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is established.",
      "Use standard entity-specific IHC and flow cytometry for any associated hematolymphoid neoplasm.",
    ],
    differential: [
      {
        name: "Classic Noonan syndrome",
        distinction:
          "Both share facial and cardiac features; multiple lentigines and the associated pigmentary phenotype favor Noonan syndrome with multiple lentigines.",
      },
      {
        name: "Other RASopathies",
        distinction:
          "Clinical overlap is substantial; molecular findings and the characteristic lentigines phenotype support subclassification.",
      },
    ],
    molecular: [
      "Germline variants in PTPN11 and RAF1 are associated with this phenotype.",
      "Genotype–phenotype correlation is important because several RASopathies share overlapping clinical features.",
    ],
    pitfalls: [
      "Do not treat all Noonan-spectrum syndromes as genetically or clinically interchangeable.",
    ],
  },
  {
    name: "Costello Syndrome",
    group: "RASopathies",
    clue: "A distinctive multisystem RASopathy with the greatest malignancy risk among the RASopathies described.",
    summary:
      "A rare RAS/MAPK pathway disorder with increased risk of malignancy; reported cancer risk is approximately three times that of Noonan syndrome.",
    clinical: [
      "Usually presents in childhood; affects both sexes.",
      "Clinical features overlap with Noonan and cardio-facio-cutaneous syndromes.",
      "The relative rarity of the syndrome limits precise estimates of individual tumor risks.",
      "Among the RASopathies described, Costello syndrome is associated with the greatest malignancy risk.",
    ],
    criteria: [
      "Establish a compatible multisystem phenotype.",
      "Confirm a pathogenic germline variant in a RAS/MAPK pathway gene, with genotype–phenotype correlation.",
      "Evaluate any hematolymphoid or solid neoplasm as a separate diagnostic entity.",
    ],
    histology: [
      "No syndrome-specific hematolymphoid histology is defined.",
      "Any associated neoplasm should be classified using its standard morphologic criteria.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is established.",
      "Apply standard lineage-specific IHC to any associated neoplasm.",
    ],
    differential: [
      {
        name: "Noonan syndrome",
        distinction:
          "Both are RASopathies with overlapping clinical features; molecular testing and the complete phenotype support distinction.",
      },
      {
        name: "Cardio-facio-cutaneous syndrome",
        distinction:
          "Clinical overlap is substantial; distinguish by the specific phenotype and germline molecular findings.",
      },
    ],
    molecular: [
      "Pathogenic germline variants in RAS/MAPK pathway genes establish the molecular basis; interpret the specific gene in the context of the phenotype.",
    ],
    pitfalls: [
      "Do not infer the specific RASopathy from a shared RAS/MAPK pathway variant without considering the full clinical phenotype.",
    ],
  },
  {
    name: "Cardio-Facio-Cutaneous Syndrome",
    group: "RASopathies",
    clue: "Cardiac, craniofacial, cutaneous, and developmental findings in a child; confirm a RAS/MAPK pathway variant.",
    summary:
      "A rare multisystem RASopathy that overlaps clinically with Noonan and Costello syndromes.",
    clinical: [
      "Usually recognized in childhood; affects both sexes.",
      "Cardiac, facial, cutaneous, and neurodevelopmental abnormalities are characteristic components of the syndrome.",
      "Clinical overlap with Noonan and Costello syndromes can complicate phenotypic classification.",
      "The rarity of the syndrome limits reliable estimates of hematolymphoid malignancy incidence.",
    ],
    criteria: [
      "Identify a compatible multisystem phenotype.",
      "Demonstrate a pathogenic germline variant in a RAS/MAPK pathway gene when possible.",
      "Classify any associated hematolymphoid neoplasm independently.",
    ],
    histology: [
      "No syndrome-specific hematolymphoid histology is defined.",
      "Associated hematolymphoid tumors retain the morphology of their respective entities.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is established.",
      "Use the standard IHC and flow-cytometric workup for the associated neoplasm.",
    ],
    differential: [
      {
        name: "Noonan syndrome",
        distinction:
          "Overlapping cardiac and facial features require genotype–phenotype correlation for distinction.",
      },
      {
        name: "Costello syndrome",
        distinction:
          "Both are rare RASopathies with overlapping multisystem findings; molecular testing and the complete phenotype are required.",
      },
    ],
    molecular: [
      "Pathogenic germline variants in RAS/MAPK pathway genes are causative; interpret variants with the clinical phenotype.",
    ],
    pitfalls: [
      "Do not assign a specific RASopathy solely from a nonspecific somatic MAPK-pathway mutation.",
    ],
  },
];

const groups = [
  "All Categories",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5">
      <h3 className="mb-2 border-b border-slate-200 pb-1 text-sm font-bold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function GeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All Categories");
  const [open, setOpen] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const matchesGroup = group === "All Categories" || e.group === group;
      const searchable = [
        e.name,
        e.group,
        e.clue,
        e.summary,
        ...e.clinical,
        ...e.criteria,
        ...e.histology,
        ...e.ihc,
        ...(e.molecular ?? []),
        ...e.differential.flatMap((d) => [d.name, d.distinction]),
      ]
        .join(" ")
        .toLowerCase();
      return matchesGroup && (!q || searchable.includes(q));
    });
  }, [query, group]);

  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (name: string) =>
    setOpen((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b-2 border-teal-700 pb-5">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-700">
          Hematopathology · Predisposition and Inherited Disorders
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Genetic Tumor Syndromes Associated with Hematolymphoid Neoplasms
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic recognition of inherited cancer predisposition, with
          emphasis on syndromic features, associated hematolymphoid neoplasms,
          germline confirmation, and implications for classification and
          clinical management.
        </p>
      </header>

      <section className="mb-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">
            When to Consider Germline Predisposition
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Familial clustering alone does not prove inherited predisposition;
            shared infections, environmental exposures, or antigenic stimulation
            may contribute. Consider genetic counseling and germline evaluation
            when clinical, family, or laboratory findings suggest a
            constitutional disorder.
          </p>
          <BulletList
            items={[
              "A hematolymphoid neoplasm strongly associated with an inherited predisposition.",
              "A known familial pathogenic germline variant or established cancer-predisposition syndrome.",
              "Dysmorphism, congenital anomalies, developmental delay, or other syndromic findings.",
              "Two first- or second-degree relatives with hematolymphoid neoplasms.",
              "Two independent hematolymphoid neoplasms in one person, or a non–therapy-related hematolymphoid neoplasm with multiple or early-onset solid tumors.",
              "Unusually early disease onset or unexplained excessive treatment toxicity.",
              "A pathogenic or likely pathogenic variant on tumor sequencing in a gene associated with germline cancer predisposition, with findings compatible with constitutional origin.",
            ]}
          />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">
            Germline Testing: Practical Diagnostic Points
          </h2>
          <BulletList
            items={[
              "A germline predisposition can affect diagnostic classification, treatment tolerance, surveillance, and family counseling.",
              "Some inherited disorders confer increased treatment toxicity; TP53 germline variants also increase the risk of radiation-associated secondary malignancies.",
              "Blood, marrow, tissue, and buccal samples may contain neoplastic cells and therefore may not reliably represent the constitutional genotype.",
              "When contamination is a concern, consider nonhematopoietic sources such as hair follicles or fingernail clippings.",
              "A tumor-associated variant should not be called germline without appropriate testing of a suitable non-neoplastic specimen.",
            ]}
          />
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-900">
            Predisposition Framework
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Syndromic and nonsyndromic forms may be monogenic or multifactorial.
          </p>
        </div>
        <div className="grid gap-0 md:grid-cols-2">
          <div className="border-b border-slate-200 p-5 md:border-b-0 md:border-r">
            <h3 className="font-bold text-teal-800">
              Syndromic predisposition
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Recurrent extrahematologic manifestations such as growth
              abnormalities, dysmorphism, congenital malformations, neurologic
              findings, or immune dysfunction. Examples include Bloom syndrome,
              ataxia–telangiectasia, and RASopathies. GATA2 deficiency, selected
              bone marrow failure syndromes, telomere disorders, Fanconi anemia,
              and constitutional chromosomal abnormalities such as trisomy 21
              are also recognized contexts.
            </p>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-teal-800">
              Nonsyndromic predisposition
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Monogenic predisposition includes TP53-associated Li–Fraumeni
              syndrome, CHEK2-associated Li–Fraumeni-like predisposition, and
              many inborn errors of immunity. Polygenic or multifactorial
              susceptibility is also relevant, particularly in mature lymphoid
              neoplasms; selected pathogen-related genetic traits have been
              associated with entity-specific risk.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="text-lg font-bold text-slate-900">
            Syndrome-to-Neoplasm Overview
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Syndrome</th>
                <th className="px-4 py-3">Gene / Pathway</th>
                <th className="px-4 py-3">Key Hematolymphoid Associations</th>
                <th className="px-4 py-3">Clinical Recognition Clue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-semibold">Bloom syndrome</td>
                <td className="px-4 py-3">BLM</td>
                <td className="px-4 py-3">
                  AML, ALL/LBL, B- and T-cell lymphomas
                </td>
                <td className="px-4 py-3">
                  Growth deficiency and photosensitivity
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Ataxia–telangiectasia
                </td>
                <td className="px-4 py-3">ATM</td>
                <td className="px-4 py-3">
                  ALL/LBL, T-PLL, DLBCL, Burkitt lymphoma
                </td>
                <td className="px-4 py-3">
                  Progressive ataxia and telangiectasia
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">NF1</td>
                <td className="px-4 py-3">NF1 / RAS-MAPK</td>
                <td className="px-4 py-3">JMML and other myeloid neoplasms</td>
                <td className="px-4 py-3">
                  Neurofibromas and café-au-lait macules
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Legius syndrome</td>
                <td className="px-4 py-3">SPRED1 / RAS-MAPK</td>
                <td className="px-4 py-3">Lower oncologic risk than NF1</td>
                <td className="px-4 py-3">
                  Pigmentary findings without neurofibromas
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Noonan syndrome</td>
                <td className="px-4 py-3">RAS-MAPK genes</td>
                <td className="px-4 py-3">
                  JMML, other myeloid neoplasms, ALL/LBL, AML
                </td>
                <td className="px-4 py-3">
                  Facial features and congenital heart disease
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Noonan syndrome with multiple lentigines
                </td>
                <td className="px-4 py-3">Often PTPN11 / RAF1</td>
                <td className="px-4 py-3">ALL/LBL and AML reported</td>
                <td className="px-4 py-3">
                  Multiple lentigines and cardiac findings
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">Costello syndrome</td>
                <td className="px-4 py-3">RAS-MAPK pathway</td>
                <td className="px-4 py-3">Increased overall malignancy risk</td>
                <td className="px-4 py-3">Distinctive multisystem phenotype</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">
                  Cardio-facio-cutaneous syndrome
                </td>
                <td className="px-4 py-3">RAS-MAPK pathway</td>
                <td className="px-4 py-3">
                  Malignancy risk is not well quantified
                </td>
                <td className="px-4 py-3">
                  Cardiac, facial, cutaneous findings
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="font-bold text-amber-950">
          Interpreting Marrow Findings in RASopathy-Associated Myeloid
          Proliferation
        </h2>
        <p className="mt-2 text-sm leading-6 text-amber-950">
          A typical pattern includes hypercellularity, myeloid hyperplasia,
          sustained peripheral blood monocytosis (often at least 1 × 10⁹/L),
          leukocytosis, left-shifted granulopoiesis, and fewer than 20% blasts.
          Dysplasia is often limited. The distinction from a childhood
          myelodysplastic neoplasm or AML requires integrated assessment of
          morphology, blood counts, blast percentage, clinical phenotype, and
          germline versus somatic molecular findings.
        </p>
      </section>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="genetic-syndrome-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search syndromes, genes, neoplasms, and diagnostic features
          </label>
          <input
            id="genetic-syndrome-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: ATM, BLM, JMML, photosensitivity, lentigines..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-72">
          <label
            htmlFor="genetic-syndrome-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="genetic-syndrome-group"
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
          onClick={() => setOpen(allOpen ? [] : filtered.map((e) => e.name))}
          className="rounded-lg border border-teal-700 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>{filtered.length} syndromes</span>
        <span>Expand a syndrome for clinical and diagnostic details.</span>
      </div>

      <div className="space-y-3">
        {filtered.map((e, index) => {
          const isOpen = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-slate-700">
                    Key clue: {e.clue}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-500">
                    {e.summary}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {isOpen ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Clinical Profile">
                        <BulletList items={e.clinical} />
                      </Section>
                      <Section title="Essential Diagnostic Criteria">
                        <BulletList items={e.criteria} />
                      </Section>
                      <Section title="Histopathology">
                        <BulletList items={e.histology} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype / IHC">
                        <BulletList items={e.ihc} />
                      </Section>
                      <Section title="Differential Diagnosis">
                        <div className="space-y-3">
                          {e.differential.map((d, i) => (
                            <div
                              key={i}
                              className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                            >
                              <div className="text-sm font-bold text-slate-900">
                                {d.name}
                              </div>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {d.distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Section>
                      {e.molecular && (
                        <Section title="Molecular Pathology">
                          <BulletList items={e.molecular} />
                        </Section>
                      )}
                    </div>
                  </div>
                  {e.pitfalls && (
                    <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">
                        Diagnostic Pitfalls
                      </h4>
                      <div className="mt-2">
                        <BulletList items={e.pitfalls} />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching syndromes. Try another search term or category.
          </div>
        )}
      </div>

      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for hematopathology. Germline
        predisposition assessment should be integrated with clinical findings,
        family history, morphology, immunophenotype, and appropriately selected
        constitutional testing.
      </footer>
    </main>
  );
}
