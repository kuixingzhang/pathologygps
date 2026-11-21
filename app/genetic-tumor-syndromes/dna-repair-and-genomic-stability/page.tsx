"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  pathway: string;
  genes: string;
  inheritance: string;
  clinical: string;
  pathology: string;
  differential: string;
  molecular: string;
};

const entities: Entity[] = [
  {
    name: "Lynch syndrome",
    pathway: "Mismatch repair",
    genes: "MLH1, MSH2, MSH6, PMS2; EPCAM-associated MSH2 silencing",
    inheritance:
      "Autosomal dominant; one germline pathogenic variant followed by somatic inactivation of the remaining allele.",
    clinical:
      "Colorectal and endometrial carcinomas; also upper GI, small bowel, ovarian, urothelial, pancreatic, biliary, brain, prostate and other tumors. Often young onset or multiple primaries; family history may be absent, including de novo and mosaic cases.",
    pathology:
      "MMR IHC loss pattern directs gene testing: MLH1/PMS2, MSH2/MSH6, or isolated MSH6/PMS2. Internal non-neoplastic nuclei must stain. MSI-high supports dMMR but neither test alone establishes hereditary disease.",
    differential:
      "Sporadic MLH1 promoter-hypermethylated carcinoma (often BRAF V600E in colorectal tumors); double-somatic MMR deficiency; CMMRD; MUTYH or POLE/POLD1-associated polyposis.",
    molecular:
      "Germline sequencing plus deletion/duplication analysis; consider EPCAM deletion and epigenetic silencing. For MLH1/PMS2 loss in colorectal carcinoma, assess MLH1 promoter methylation and/or BRAF V600E. Tumor-only dMMR is not synonymous with Lynch syndrome.",
  },
  {
    name: "Muir–Torre syndrome",
    pathway: "Mismatch repair",
    genes: "Usually MSH2; also MLH1, MSH6, PMS2; consider MUTYH",
    inheritance:
      "Usually autosomal dominant Lynch-spectrum MMR predisposition with a sebaceous tumor phenotype.",
    clinical:
      "Sebaceous adenoma, sebaceoma, sebaceous carcinoma, or selected keratoacanthomas with visceral Lynch-spectrum malignancy. Multiple lesions, extra-head-and-neck lesions, cystic sebaceous tumors, younger age, and personal/family cancer history are particularly suggestive.",
    pathology:
      "MMR IHC on sebaceous neoplasms can screen, but predictive performance is lower than in colorectal carcinoma; periocular sebaceous carcinoma is a special setting with limitations. Confirm with germline testing when indicated.",
    differential:
      "Sporadic sebaceous neoplasm with somatic MMR loss; MUTYH-associated polyposis; ordinary sporadic visceral carcinoma.",
    molecular:
      "Germline testing is required to establish inherited MMR predisposition. MSH2 is overrepresented in Muir–Torre phenotype. Tumor MMR loss alone does not prove germline disease.",
  },
  {
    name: "Constitutional mismatch repair deficiency (CMMRD)",
    pathway: "Mismatch repair",
    genes: "Biallelic MLH1, MSH2, MSH6, or PMS2",
    inheritance:
      "Autosomal recessive; biallelic germline pathogenic variants (homozygous or compound heterozygous) cause constitutional MMR deficiency in normal tissues.",
    clinical:
      "Childhood/adolescent cancers: high-grade glioma, T-lymphoblastic lymphoma/leukemia, colorectal and other Lynch-spectrum cancers, embryonal tumors and sarcomas. Multiple adenomas, café-au-lait-like macules, pigmentary changes, and multiple cerebral developmental venous anomalies are clues.",
    pathology:
      "Loss of the affected MMR protein may be present in tumor and all normal cells, including lymphocytes. Standard tumor MSI assays may be negative, particularly in brain tumors. Germline MSI assays in blood leukocytes can be useful in specialist laboratories.",
    differential:
      "Lynch syndrome; NF1; sporadic pediatric high-grade glioma; POLE/POLD1 proofreading deficiency; APC-associated Turcot phenotype.",
    molecular:
      "Confirm two pathogenic variants in trans or homozygosity; use validated ancillary germline MMR-deficiency assays when sequencing is inconclusive. Absence of tumor MSI does not exclude CMMRD.",
  },
  {
    name: "BRCA-related cancer predisposition",
    pathway: "Homologous recombination",
    genes: "BRCA1, BRCA2",
    inheritance:
      "Autosomal dominant germline predisposition; tumorigenesis commonly follows somatic loss/inactivation of the wild-type allele (two-hit model).",
    clinical:
      "Early-onset breast cancer, tubo-ovarian/fallopian tube/peritoneal carcinoma, male breast cancer, prostate and pancreatic carcinoma. BRCA1 is enriched in triple-negative breast cancer; BRCA2 has a stronger male breast and prostate association.",
    pathology:
      "No single histologic appearance is diagnostic. Tumor genomic evidence of homologous-recombination deficiency (HRD) may support pathway dysfunction but does not distinguish germline from somatic origin.",
    differential:
      "PALB2/RAD51-related predisposition; sporadic HRD tumors; other hereditary breast/ovarian cancer syndromes.",
    molecular:
      "Test germline DNA and interpret tumor findings separately. Pathogenic variants include truncating, splice, and other loss-of-function variants. Biallelic tumor inactivation causes HR repair deficiency; PARP inhibitor sensitivity reflects synthetic lethality, but reversion mutations can mediate resistance.",
  },
  {
    name: "PALB2-related cancer predisposition",
    pathway: "Homologous recombination",
    genes: "PALB2",
    inheritance:
      "Germline heterozygous pathogenic variants confer dominant cancer predisposition; biallelic variants cause Fanconi anemia subtype.",
    clinical:
      "Breast cancer predisposition, including male breast cancer; pancreatic and other cancers may occur. Consider in hereditary breast cancer families without BRCA1/2 variants.",
    pathology:
      "No pathognomonic morphology or IHC profile; interpret in the clinical and family-history context.",
    differential:
      "BRCA1/2-associated predisposition; other hereditary breast cancer genes; sporadic breast cancer.",
    molecular:
      "PALB2 bridges BRCA1 and BRCA2 in homologous recombination. Germline testing establishes inherited predisposition; tumor second-hit/HRD findings are supportive rather than proof of germline status.",
  },
  {
    name: "RAD51-related cancer predisposition",
    pathway: "Homologous recombination",
    genes: "RAD51C, RAD51D",
    inheritance:
      "Germline pathogenic variants, generally heterozygous, predispose to cancer; biallelic defects in related HR genes may cause Fanconi anemia phenotypes.",
    clinical:
      "Predominantly tubo-ovarian and breast cancer risk, depending on gene and family context.",
    pathology: "No distinctive histology; diagnosis is genetic and clinical.",
    differential:
      "BRCA1/2 and PALB2 predisposition; other hereditary tubo-ovarian cancer syndromes.",
    molecular:
      "RAD51C/D participate in homologous recombination. Distinguish germline variants from somatic tumor alterations; variant classification and gene-specific penetrance matter.",
  },
  {
    name: "MUTYH-associated polyposis",
    pathway: "Base excision repair",
    genes: "MUTYH",
    inheritance:
      "Autosomal recessive; biallelic loss-of-function variants impair removal of adenine mispaired with 8-oxoguanine.",
    clinical:
      "Multiple colorectal adenomas and colorectal carcinoma; phenotype may overlap attenuated FAP. Sebaceous neoplasms/Muir–Torre-like presentations have been reported.",
    pathology:
      "Adenomatous polyposis; colorectal tumors may show characteristic oxidative-damage-associated mutational patterns, but morphology is not specific.",
    differential:
      "APC-associated FAP; NTHL1-related tumor syndrome; Lynch syndrome; polymerase proofreading-associated polyposis.",
    molecular:
      "Biallelic germline testing is essential. MUTYH deficiency promotes G:C>T:A transversions; somatic APC and KRAS/PIK3CA alterations may occur. A single MUTYH variant is carrier status, not MAP.",
  },
  {
    name: "NTHL1-related tumor syndrome",
    pathway: "Base excision repair",
    genes: "NTHL1",
    inheritance:
      "Autosomal recessive; biallelic inactivating germline variants.",
    clinical:
      "Colorectal adenomatous polyposis and a broader multiple-tumor phenotype, including breast and other cancers described in affected individuals.",
    pathology: "Adenomatous polyposis; no defining histology.",
    differential:
      "MUTYH-associated polyposis; APC-associated FAP; other recessive polyposis syndromes.",
    molecular:
      "NTHL1 glycosylase repairs oxidized cytosine derivatives. Biallelic germline testing establishes the syndrome; consider tumor mutational signatures as supportive evidence.",
  },
  {
    name: "MBD4-associated neoplasia syndrome",
    pathway: "Base excision repair",
    genes: "MBD4",
    inheritance:
      "Autosomal recessive; biallelic loss-of-function germline variants.",
    clinical:
      "Predisposition includes hematologic malignancy, particularly myeloid neoplasia, and colorectal neoplasia; consider in unusual combinations of tumors.",
    pathology:
      "No unique morphology; hematologic and colorectal tumors are evaluated by their usual diagnostic criteria.",
    differential:
      "Other inherited myeloid predisposition syndromes; MUTYH/NTHL1 polyposis; sporadic tumors.",
    molecular:
      "MBD4 repairs deaminated 5-methylcytosine at CpG sites. Biallelic loss produces excess C>T transitions at CpG dinucleotides; confirm germline biallelic status.",
  },
  {
    name: "Ataxia–telangiectasia",
    pathway: "DNA double-strand-break response",
    genes: "ATM",
    inheritance:
      "Autosomal recessive biallelic pathogenic variants; heterozygous carriers have a distinct, incompletely penetrant cancer-risk context.",
    clinical:
      "Childhood-onset progressive cerebellar ataxia, oculocutaneous telangiectasia, immunodeficiency, recurrent respiratory disease, and lymphoid malignancies.",
    pathology:
      "Lymphoid neoplasms are not morphologically unique; correlate with neurologic, immunologic, and cutaneous findings.",
    differential:
      "Nijmegen breakage syndrome; other immunodeficiency-associated lymphoid proliferations; sporadic lymphoma.",
    molecular:
      "ATM kinase coordinates DNA double-strand-break signaling, cell-cycle arrest, and repair. Confirm biallelic germline variants; do not equate a somatic ATM alteration or reduced protein staining with the constitutional syndrome.",
  },
  {
    name: "CHEK2-related hereditary cancer predisposition",
    pathway: "DNA damage checkpoint",
    genes: "CHEK2",
    inheritance:
      "Usually autosomal dominant heterozygous germline predisposition with moderate, variant-dependent risk.",
    clinical:
      "Breast cancer is the principal clinical association; other cancer associations are variable and should not be overstated.",
    pathology: "No distinctive histology or tumor IHC pattern.",
    differential:
      "BRCA1/2, PALB2 and other hereditary breast cancer syndromes; sporadic breast cancer.",
    molecular:
      "CHEK2 encodes a checkpoint kinase downstream of DNA damage signaling. Variant-specific risk and family history guide interpretation; a tumor CHEK2 variant alone does not establish germline predisposition.",
  },
  {
    name: "Nijmegen breakage syndrome",
    pathway: "DNA double-strand-break response",
    genes: "NBN",
    inheritance: "Autosomal recessive biallelic pathogenic variants.",
    clinical:
      "Growth retardation, microcephaly, immunodeficiency, radiosensitivity, and increased risk of lymphoid malignancies, particularly lymphoma/leukemia.",
    pathology:
      "Lymphoid tumors require conventional classification; the syndromic phenotype is the key clue.",
    differential:
      "Ataxia–telangiectasia; other chromosome-instability/immunodeficiency syndromes.",
    molecular:
      "NBN (nibrin) is part of the MRN complex involved in double-strand-break sensing and repair. Confirm biallelic germline variants; avoid unnecessary ionizing radiation where clinically feasible.",
  },
  {
    name: "Polymerase proofreading-associated polyposis",
    pathway: "DNA replication proofreading",
    genes: "POLE, POLD1",
    inheritance:
      "Autosomal dominant germline pathogenic variants affecting exonuclease proofreading domains.",
    clinical:
      "Colorectal adenomas and carcinoma; endometrial cancer is particularly associated with POLD1. May resemble Lynch syndrome clinically but tumors often lack MSI.",
    pathology:
      "Adenomatous polyposis; tumors can be ultramutated with characteristic proofreading-defect signatures, often without classic dMMR.",
    differential:
      "Lynch syndrome; MUTYH/NTHL1-associated polyposis; APC-associated FAP; CMMRD.",
    molecular:
      "Pathogenic exonuclease-domain variants impair proofreading (not MMR itself), producing ultramutation. Germline testing and tumor mutation signatures help distinguish from dMMR; combined POLE/POLD1 proofreading defect and MMR deficiency can produce distinctive signatures.",
  },
  {
    name: "Bloom syndrome",
    pathway: "RecQ helicase / replication stability",
    genes: "BLM",
    inheritance: "Autosomal recessive loss-of-function variants.",
    clinical:
      "Prenatal/postnatal growth deficiency, photosensitivity, characteristic facial features, immunodeficiency, insulin resistance, and markedly increased early-onset cancers including hematologic malignancies.",
    pathology:
      "Broad tumor spectrum without a unique histologic pattern; marked chromosomal instability is a mechanistic clue.",
    differential:
      "Werner syndrome; Rothmund–Thomson syndrome; Nijmegen breakage syndrome.",
    molecular:
      "BLM is a RecQ helicase maintaining replication-fork and recombination stability. Biallelic germline loss causes increased sister-chromatid exchanges and genomic instability.",
  },
  {
    name: "Werner syndrome",
    pathway: "RecQ helicase / replication stability",
    genes: "WRN",
    inheritance: "Autosomal recessive loss-of-function variants.",
    clinical:
      "Adult-onset progeroid phenotype, short stature, premature aging, cataracts, diabetes, atherosclerosis, and increased malignancy risk, including sarcomas and thyroid cancers.",
    pathology:
      "Tumor histology follows the specific neoplasm; the premature-aging phenotype is the syndromic clue.",
    differential:
      "Bloom syndrome; Rothmund–Thomson syndrome; other progeroid disorders.",
    molecular:
      "WRN encodes a RecQ helicase/exonuclease involved in DNA replication, repair, and telomere maintenance. Confirm biallelic germline pathogenic variants.",
  },
  {
    name: "Rothmund–Thomson syndrome",
    pathway: "RecQ helicase / replication stability",
    genes: "RECQL4; ANAPC1",
    inheritance:
      "Autosomal recessive; RECQL4-associated and ANAPC1-associated forms.",
    clinical:
      "Poikiloderma, sparse hair, growth abnormalities, skeletal defects; RECQL4-associated disease carries osteosarcoma risk and other malignancies.",
    pathology:
      "Osteosarcoma in a patient with poikiloderma and skeletal abnormalities is a major clue; correlate with characteristic skin findings.",
    differential:
      "Bloom syndrome; Werner syndrome; other poikiloderma and skeletal dysplasia syndromes.",
    molecular:
      "RECQL4 is a DNA helicase involved in replication initiation and genome maintenance. Biallelic pathogenic variants establish the molecular diagnosis; not all clinically defined cases are RECQL4-related.",
  },
  {
    name: "DDX41-related hematologic tumor predisposition",
    pathway: "RNA/DNA processing and hematopoietic predisposition",
    genes: "DDX41",
    inheritance:
      "Usually autosomal dominant germline predisposition with later-onset myeloid neoplasia; somatic second hits are common.",
    clinical:
      "Adult-onset MDS/AML, often in older adults; family history may be subtle or absent.",
    pathology:
      "MDS/AML morphology and cytogenetics are not specific. Consider germline predisposition in unexplained cytopenias, myeloid neoplasm, or family history.",
    differential:
      "Sporadic MDS/AML; other germline myeloid predisposition syndromes (e.g., GATA2, RUNX1, CEBPA).",
    molecular:
      "DDX41 variants may be germline with an acquired second DDX41 mutation in the tumor. Test nonhematopoietic tissue when possible; blood/saliva can be confounded by clonal hematopoiesis or tumor-derived variants.",
  },
  {
    name: "Mosaic variegated aneuploidy",
    pathway: "Mitotic spindle checkpoint / chromosome segregation",
    genes: "BUB1B, CEP57, TRIP13; provisionally BUB1, BUB3",
    inheritance:
      "Genetically heterogeneous; usually autosomal recessive, with inheritance depending on the gene.",
    clinical:
      "Growth retardation, microcephaly and variable developmental findings; increased risk of embryonal tumors and other malignancies, including Wilms tumor and rhabdomyosarcoma in reported cases.",
    pathology:
      "Mosaic whole-chromosome gains and losses across cells; aneuploidy varies between tissues/cell populations.",
    differential:
      "Other chromosome-instability syndromes; constitutional mosaic aneuploidy; sporadic embryonal tumors.",
    molecular:
      "Defective spindle assembly checkpoint or centrosome/chromosome segregation causes mosaic aneuploidy. Confirm the causative germline variant and demonstrate mosaic aneuploidy where appropriate.",
  },
];

const pathways = [
  {
    name: "Mismatch repair",
    genes: "MLH1, MSH2, MSH6, PMS2, EPCAM",
    fn: "Recognizes base–base mismatches and insertion/deletion loops generated during DNA replication.",
    mechanism:
      "Inherited or acquired loss of both functional alleles causes mismatch repair deficiency, microsatellite instability, increased mutation burden, and impaired damage-triggered apoptosis.",
    syndromes:
      "Lynch syndrome, Muir–Torre syndrome, and constitutional mismatch repair deficiency (CMMRD).",
  },
  {
    name: "Homologous recombination",
    genes: "BRCA1, BRCA2, PALB2, RAD51C, RAD51D",
    fn: "Accurately repairs DNA double-strand breaks using a homologous template, usually the sister chromatid.",
    mechanism:
      "Loss of homologous recombination produces genomic instability. In hereditary tumor development, a germline variant is commonly followed by somatic inactivation of the remaining allele.",
    syndromes:
      "BRCA-related cancer predisposition, PALB2-related predisposition, and RAD51-related predisposition.",
  },
  {
    name: "Base excision repair",
    genes: "MUTYH, NTHL1, MBD4",
    fn: "Removes small damaged or inappropriate DNA bases through DNA glycosylases, followed by endonuclease processing and repair synthesis.",
    mechanism:
      "Biallelic loss of specific glycosylases permits characteristic oxidative-damage or deamination-associated base substitutions to accumulate.",
    syndromes:
      "MUTYH-associated polyposis, NTHL1-related tumor syndrome, and MBD4-associated neoplasia syndrome.",
  },
  {
    name: "Double-strand-break response and checkpoint signaling",
    genes: "ATM, NBN, CHEK2",
    fn: "Senses DNA damage and coordinates checkpoint activation, cell-cycle arrest, repair, and apoptosis.",
    mechanism:
      "Constitutional loss of ATM or NBN causes chromosome instability and syndromic disease; heterozygous CHEK2 variants confer a generally moderate, variant-dependent cancer predisposition.",
    syndromes:
      "Ataxia–telangiectasia, Nijmegen breakage syndrome, and CHEK2-related hereditary cancer predisposition.",
  },
  {
    name: "Replication proofreading",
    genes: "POLE, POLD1",
    fn: "Proofreads newly synthesized DNA through exonuclease activity during replication.",
    mechanism:
      "Pathogenic exonuclease-domain variants impair proofreading and produce an ultramutated tumor phenotype; this is distinct from primary MMR deficiency.",
    syndromes: "Polymerase proofreading-associated polyposis.",
  },
  {
    name: "RecQ helicases and replication stability",
    genes: "BLM, WRN, RECQL4",
    fn: "Maintain replication-fork stability, recombination fidelity, DNA repair, and telomere integrity.",
    mechanism:
      "Biallelic loss-of-function variants cause chromosome instability and characteristic multisystem syndromes with cancer predisposition.",
    syndromes:
      "Bloom syndrome, Werner syndrome, and RECQL4-associated Rothmund–Thomson syndrome.",
  },
  {
    name: "Hematopoietic predisposition and mitotic chromosome segregation",
    genes: "DDX41, BUB1B, CEP57, TRIP13, BUB1, BUB3",
    fn: "Includes RNA/DNA processing relevant to hematopoiesis and spindle-checkpoint control of chromosome segregation.",
    mechanism:
      "Germline DDX41 predisposition may acquire a somatic second hit; spindle-checkpoint defects produce mosaic whole-chromosome gains and losses.",
    syndromes:
      "DDX41-related hematologic tumor predisposition and mosaic variegated aneuploidy.",
  },
];

export default function DnaRepairGenomicStabilityPage() {
  const [query, setQuery] = useState("");
  const [pathway, setPathway] = useState("All pathways");
  const [expanded, setExpanded] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const q = query.trim().toLowerCase();
        const matchesQuery =
          !q ||
          [
            e.name,
            e.pathway,
            e.genes,
            e.clinical,
            e.pathology,
            e.differential,
            e.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q);
        return (
          matchesQuery && (pathway === "All pathways" || e.pathway === pathway)
        );
      }),
    [query, pathway],
  );
  const groups = pathways
    .map((p) => ({ ...p, items: filtered.filter((e) => e.pathway === p.name) }))
    .filter((p) => p.items.length);
  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => expanded.includes(e.name));
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-slate-800">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          PathologyGPS · Genetic Tumor Syndromes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          DNA Repair and Genomic Stability
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A diagnostic framework connecting tumor phenotype to inherited defects
          in DNA repair, replication fidelity, damage response, and chromosome
          segregation.
        </p>
      </header>

      <section className="mb-9">
        <h2 className="text-2xl font-bold text-slate-900">Pathway Overview</h2>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
          DNA repair pathways preserve sequence integrity and chromosome
          structure. Inherited pathogenic variants often create a constitutional
          first hit; tumor development may require additional somatic events.
          The inheritance pattern and molecular mechanism differ substantially
          across pathways.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pathways.map((p) => (
            <article
              key={p.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <dl className="mt-3 space-y-2 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-slate-700">Key genes</dt>
                  <dd className="text-slate-600">{p.genes}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700">
                    Normal function
                  </dt>
                  <dd className="text-slate-600">{p.fn}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700">
                    Pathogenic mechanism
                  </dt>
                  <dd className="text-slate-600">{p.mechanism}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-700">
                    Associated syndromes
                  </dt>
                  <dd className="text-slate-600">{p.syndromes}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-9 rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
        <h2 className="text-2xl font-bold text-slate-900">Pathology Clues</h2>
        <p className="mt-1 text-sm text-slate-600">
          Use the tumor pattern as an entry point; none of these findings alone
          establishes a germline diagnosis.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            [
              "Colorectal or endometrial carcinoma with dMMR",
              "Evaluate the paired MMR IHC pattern and MSI. MLH1/PMS2 loss requires assessment for sporadic MLH1 promoter methylation (and BRAF V600E in colorectal carcinoma) before attributing the tumor to Lynch syndrome.",
            ],
            [
              "Sebaceous adenoma, sebaceoma, or sebaceous carcinoma",
              "Multiple lesions, extra-head-and-neck location, younger age, or a visceral cancer history raise Muir–Torre suspicion. MMR IHC is a screen, not germline confirmation.",
            ],
            [
              "Child or young adult with high-grade glioma, T-lymphoblastic malignancy, or multiple adenomas",
              "Consider CMMRD, particularly with café-au-lait-like macules, pigmentary abnormalities, or multiple developmental venous anomalies. Normal tissues may also lack the affected MMR protein.",
            ],
            [
              "Early-onset breast, tubo-ovarian, pancreatic, or prostate carcinoma",
              "Consider BRCA1/2, PALB2, and RAD51C/RAD51D predisposition. Tumor HRD or a somatic BRCA alteration does not by itself establish a germline variant.",
            ],
            [
              "Multiple colorectal adenomas with a recessive family pattern",
              "Consider MUTYH, NTHL1, and MBD4. Biallelic pathogenic variants are central to these recessive syndromes; distinguish them from APC-associated polyposis and Lynch syndrome.",
            ],
            [
              "Pediatric or young adult tumor with extreme mutation burden",
              "Consider POLE/POLD1 proofreading deficiency and CMMRD. A proofreading-deficient tumor can be ultramutated without the usual MSI phenotype.",
            ],
            [
              "Lymphoid malignancy with ataxia, telangiectasia, immunodeficiency, or microcephaly",
              "Consider ATM-related ataxia–telangiectasia or NBN-related Nijmegen breakage syndrome; the syndromic phenotype is often more informative than tumor morphology.",
            ],
            [
              "Osteosarcoma with poikiloderma or skeletal abnormalities",
              "Consider RECQL4-associated Rothmund–Thomson syndrome. Growth deficiency and photosensitivity also suggest the broader chromosome-instability differential.",
            ],
            [
              "Adult-onset MDS/AML with a personal or family history suggestive of predisposition",
              "Consider germline DDX41, particularly when a somatic second DDX41 variant is detected. Confirm germline status using appropriate nonhematopoietic tissue.",
            ],
            [
              "Growth retardation with mosaic whole-chromosome gains and losses",
              "Consider mosaic variegated aneuploidy due to spindle-checkpoint/chromosome-segregation defects.",
            ],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Pathway-specific Entity Outlines
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              {filtered.length} entities · Select an outline to expand the
              diagnostic details.
            </p>
          </div>
          <button
            onClick={() =>
              setExpanded(allOpen ? [] : filtered.map((e) => e.name))
            }
            className="self-start rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_250px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search syndrome, gene, tumor, or feature..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
          <select
            value={pathway}
            onChange={(e) => setPathway(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-3 text-sm"
          >
            <option>All pathways</option>
            {pathways.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className="mt-5 space-y-7">
          {groups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 border-b border-slate-200 pb-2 text-lg font-bold text-teal-800">
                {group.name}
              </h3>
              <div className="space-y-3">
                {group.items.map((e) => {
                  const open = expanded.includes(e.name);
                  return (
                    <article
                      key={e.name}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                    >
                      <button
                        onClick={() => toggle(e.name)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-slate-50"
                      >
                        <span>
                          <span className="block font-semibold text-slate-900">
                            {e.name}
                          </span>
                          <span className="mt-1 block text-xs text-slate-500">
                            {e.genes}
                          </span>
                        </span>
                        <span className="text-xl text-teal-700">
                          {open ? "−" : "+"}
                        </span>
                      </button>
                      {open && (
                        <div className="grid gap-4 border-t border-slate-100 p-4 md:grid-cols-2">
                          <section>
                            <h4 className="font-semibold text-slate-900">
                              Clinical Profile
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {e.clinical}
                            </p>
                          </section>
                          <section>
                            <h4 className="font-semibold text-slate-900">
                              Essential Diagnostic Criteria
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {e.inheritance} {e.pathology}
                            </p>
                          </section>
                          <section>
                            <h4 className="font-semibold text-slate-900">
                              Histopathology and Immunophenotype
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {e.pathology}
                            </p>
                          </section>
                          <section>
                            <h4 className="font-semibold text-slate-900">
                              Differential Diagnosis
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {e.differential}
                            </p>
                          </section>
                          <section className="md:col-span-2">
                            <h4 className="font-semibold text-slate-900">
                              Molecular Pathology
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              {e.molecular}
                            </p>
                          </section>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
              No matching entities. Try another search term or pathway.
            </p>
          )}
        </div>
      </section>
      <footer className="mt-12 border-t border-slate-200 pt-5 text-center text-xs tracking-wide text-slate-500">
        PathologyGPS · Diagnostic Excellence
      </footer>
    </main>
  );
}
