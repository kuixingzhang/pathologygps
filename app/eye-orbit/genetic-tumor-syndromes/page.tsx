"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  category: string;
  group: string;
  clinical: string[];
  criteria: string[];
  histo: string[];
  ihc: string[];
  diff: string[];
  molecular: string[];
};

const entities: Entity[] = [
  {
    name: "Retinoblastoma Syndrome",
    category: "Hereditary cancer predisposition",
    group: "Retinal and intracranial tumors",
    clinical: [
      "Usually recognized in infancy or early childhood through unilateral or bilateral retinoblastoma; bilateral disease is common in heritable cases, although approximately 15% are unilateral.",
      "Retinal tumors may be followed by pineal or suprasellar primitive neuroectodermal tumors (trilateral retinoblastoma); survivors remain at lifelong risk for second primary malignancies.",
      "Secondary malignancies include osteosarcoma, soft-tissue sarcoma (especially leiomyosarcoma and rhabdomyosarcoma), melanoma, and epithelial cancers; risk is increased after external-beam radiotherapy.",
    ],
    criteria: [
      "Retinoblastoma in a patient with a germline heterozygous pathogenic RB1 variant, a relevant family history, or bilateral/multifocal disease strongly supports heritable retinoblastoma.",
      "Confirm germline RB1 status using blood-based molecular testing; evaluate for mosaicism when clinical suspicion remains despite negative standard testing.",
      "Trilateral retinoblastoma requires retinoblastoma with a synchronous or metachronous pineal or suprasellar intracranial embryonal tumor.",
      "Document optic nerve, extrascleral, and intracranial involvement because these findings affect staging and management.",
    ],
    histo: [
      "Ocular retinoblastoma shows the characteristic morphology of retinoblastoma, including primitive neuroblastic cells; differentiation may include Flexner-Wintersteiner or Homer Wright rosettes.",
      "Intracranial tumors in trilateral retinoblastoma are embryonal tumors with histology resembling retinoblastoma; pineoblastoma is a high-grade embryonal tumor.",
      "Histology of subsequent sarcomas, melanomas, and epithelial malignancies is generally the same as that of their sporadic counterparts.",
    ],
    ihc: [
      "Retinoblastoma commonly shows loss of nuclear RB protein expression, although interpretation requires appropriate internal controls.",
      "Immunophenotype of secondary malignancies is determined by the specific tumor type; no single IHC profile defines the syndrome.",
    ],
    diff: [
      "Nonheritable retinoblastoma: often unilateral and unifocal; germline RB1 testing and family history distinguish heritable disease.",
      "Other pediatric retinal tumors or mimics: correlate morphology with retinal location, imaging, and RB1 status.",
      "Primary pineal or suprasellar embryonal tumor unrelated to retinoblastoma: assess for current or prior retinoblastoma and germline RB1 alteration.",
    ],
    molecular: [
      "Germline heterozygous pathogenic RB1 variant establishes heritable retinoblastoma predisposition.",
      "Tumorigenesis follows biallelic RB1 inactivation; the second hit may involve sequence variants, deletion, loss of heterozygosity, complex rearrangement, or promoter methylation.",
      "Use sequencing with deletion/duplication analysis; RNA analysis may detect deep intronic splice variants. Consider mosaicism when blood testing is negative.",
    ],
  },
  {
    name: "BAP1 Tumor Predisposition Syndrome",
    category: "Hereditary cancer predisposition",
    group: "Melanocytic and multisystem tumors",
    clinical: [
      "Autosomal dominant syndrome; tumors often arise at younger ages than their sporadic counterparts, and affected individuals may develop multiple primary malignancies.",
      "Key associated tumors include uveal melanoma, mesothelioma (often peritoneal and without male predominance), cutaneous melanoma, renal cell carcinoma, and meningioma.",
      "BAP1-inactivated melanocytic nevi / melanocytomas may occur in childhood and are a useful clinical clue, but are not specific for the syndrome.",
    ],
    criteria: [
      "Definitive diagnosis requires a heterozygous pathogenic germline BAP1 variant.",
      "Consider genetic counseling and germline testing in patients with two or more BAP1-associated tumors, or one such tumor plus an affected first- or second-degree relative.",
      "Loss of nuclear BAP1 expression in a relevant tumor supports BAP1 inactivation and can help select patients for germline evaluation, but does not independently establish a germline syndrome.",
    ],
    histo: [
      "Histologic features of syndrome-associated uveal melanoma, mesothelioma, renal cell carcinoma, and other tumors generally resemble their sporadic counterparts.",
      "BAP1-inactivated melanocytic tumors often show epithelioid melanocytes, frequently with a spitzoid or nested growth pattern.",
      "Histologic appearance alone cannot reliably distinguish germline-associated tumors from sporadic tumors.",
    ],
    ihc: [
      "BAP1-deficient tumor cells show loss of nuclear BAP1 staining, with retained staining in non-neoplastic internal control cells.",
      "BAP1 immunohistochemistry is a screening tool; concordance with germline status is high but incomplete.",
    ],
    diff: [
      "Sporadic BAP1-deficient tumor: may show the same loss of nuclear BAP1; germline testing distinguishes tumor-restricted from inherited alteration.",
      "Other atypical or spitzoid melanocytic nevi: morphology overlaps with BAP1-inactivated melanocytoma; correlate with BAP1 IHC and clinical/family history.",
      "Metastatic or multiple primary tumors: consider the full personal and family tumor spectrum rather than assuming a single metastatic process.",
    ],
    molecular: [
      "Pathogenic germline BAP1 variants, usually loss-of-function sequence variants or deletions, establish the syndrome.",
      "Confirm with germline sequencing and deletion/duplication analysis on peripheral blood or another appropriate non-neoplastic specimen.",
      "Somatic BAP1 alterations are common in sporadic mesothelioma and metastatic uveal melanoma; tumor-only mutation does not prove hereditary disease.",
    ],
  },
  {
    name: "Von Hippel-Lindau Syndrome",
    category: "Hereditary cancer predisposition",
    group: "Retinal and multisystem tumors",
    clinical: [
      "Autosomal dominant disorder; retinal capillary hemangioblastomas often appear in young adulthood (mean age approximately 25 years) and may be the earliest manifestation.",
      "Other characteristic lesions include CNS hemangioblastomas, bilateral/multifocal clear cell renal cell carcinoma, pheochromocytoma, pancreatic cysts or neuroendocrine tumors, and endolymphatic sac tumors.",
      "Retinal lesions may cause visual symptoms through exudation, hemorrhage, or retinal detachment; endolymphatic sac tumors may cause hearing loss, tinnitus, or vertigo.",
    ],
    criteria: [
      "Diagnosis is established by a pathogenic germline VHL variant in the appropriate clinical context.",
      "Retinal or CNS hemangioblastomas together with characteristic visceral lesions strongly support VHL.",
      "Assess personal and family history for multifocal or bilateral renal lesions, pheochromocytoma, pancreatic lesions, and endolymphatic sac tumors.",
    ],
    histo: [
      "VHL-associated tumors generally have the same histology as their sporadic counterparts.",
      "Retinal capillary hemangioblastoma contains a dense capillary network with endothelial cells, pericytes, and characteristic vacuolated or foamy stromal cells.",
      "Clear cell renal cell carcinoma shows nests or alveoli of clear cells with delicate vasculature; correlate with renal findings and VHL status.",
    ],
    ihc: [
      "Retinal hemangioblastoma stromal cells may express inhibin-alpha, S100, and other stromal markers; endothelial cells highlight with CD31 and ERG.",
      "No single immunohistochemical profile establishes VHL syndrome; IHC should be tailored to the specific tumor and differential diagnosis.",
    ],
    diff: [
      "Sporadic retinal hemangioblastoma: may be morphologically identical; germline VHL testing and evaluation for multifocal/systemic lesions distinguish syndromic disease.",
      "Other retinal vascular lesions: hemangioblastoma has a characteristic capillary-rich pattern with stromal cells rather than a simple vascular malformation.",
      "Metastatic clear cell renal cell carcinoma to the eye or orbit: correlate with known renal primary and systemic evaluation.",
    ],
    molecular: [
      "Germline pathogenic VHL variant, detected by sequencing and deletion/duplication analysis, confirms the syndrome.",
      "Biallelic VHL inactivation leads to HIF stabilization and a pseudohypoxic transcriptional program, including increased VEGF signaling.",
      "VHL alterations also occur in sporadic hemangioblastomas and clear cell renal cell carcinomas; tumor testing alone does not establish hereditary VHL.",
    ],
  },
  {
    name: "Sturge-Weber Syndrome",
    category: "Mosaic neurocutaneous vascular syndrome",
    group: "Ocular and neurocutaneous vascular lesions",
    clinical: [
      "Congenital, usually sporadic condition with no established hereditary pattern; affects individuals of either sex.",
      "Typical findings include unilateral facial capillary malformation (port-wine birthmark) in the trigeminal distribution, leptomeningeal vascular malformation, and ocular vascular abnormalities.",
      "Ocular manifestations include diffuse choroidal capillary malformation, episcleral and conjunctival vascular dilation, glaucoma, iris heterochromia, and secondary retinal/RPE changes.",
    ],
    criteria: [
      "Clinical diagnosis is supported by the characteristic combination of facial capillary malformation, glaucoma or elevated intraocular pressure, and leptomeningeal capillary-venous malformation.",
      "Two of the three major features support the diagnosis; isolated leptomeningeal involvement is recognized as type 3 Sturge-Weber syndrome.",
      "Imaging is important for defining intracranial and ocular involvement; evaluate for choroidal thickening and secondary retinal detachment.",
    ],
    histo: [
      "Choroidal, episcleral, and conjunctival lesions consist of unencapsulated collections of variably dilated, thin-walled vascular channels.",
      "Choroidal involvement may produce diffuse choroidal thickening and dilated draining vortex veins.",
      "Secondary changes may include retinal pigment epithelial alterations, subretinal fibrosis, and exudative retinal detachment.",
    ],
    ihc: [
      "Endothelial cells express vascular markers such as CD31 and ERG.",
      "Immunohistochemistry is not usually required; morphology and clinical/radiologic correlation are central.",
    ],
    diff: [
      "Isolated facial port-wine birthmark: lacks the characteristic intracranial and ocular manifestations of Sturge-Weber syndrome.",
      "Other diffuse choroidal vascular lesions: correlate with facial capillary malformation, episcleral vascular changes, and glaucoma.",
      "Hereditary vascular malformation syndromes: distinguish by distribution, associated organ involvement, and molecular context.",
    ],
    molecular: [
      "Most cases harbor a postzygotic activating somatic mosaic GNAQ variant, commonly p.R183Q, in affected tissue.",
      "Rare GNA11 or other pathway variants have been reported; a negative result does not exclude the syndrome because mosaic variant allele fractions may be low.",
      "Testing should use affected tissue when available; GNAQ p.R183Q is not specific to Sturge-Weber syndrome and also occurs in some isolated port-wine birthmarks.",
    ],
  },
  {
    name: "Neurofibromatosis Type 1",
    category: "Autosomal dominant tumor predisposition syndrome",
    group: "Neural and ocular manifestations",
    clinical: [
      "Usually recognized in childhood; birth incidence is approximately 1 in 3,000, with equal sex distribution.",
      "Characteristic findings include multiple café-au-lait macules, axillary/inguinal freckling, cutaneous and plexiform neurofibromas, and iris Lisch nodules.",
      "Ocular/orbital manifestations include optic pathway glioma (usually in young children), choroidal abnormalities, Lisch nodules, sphenoid wing dysplasia, and orbitofacial plexiform neurofibroma.",
    ],
    criteria: [
      "Clinical diagnosis requires at least two accepted diagnostic features, including café-au-lait macules, axillary/inguinal freckling, neurofibromas, optic pathway glioma, Lisch nodules or choroidal abnormalities, characteristic bone lesion, a pathogenic NF1 variant, or an affected parent.",
      "Use current age-adjusted size thresholds for café-au-lait macules: greater than 5 mm in children and greater than 15 mm in adults.",
      "Consider NF1 testing when clinical criteria are incomplete, atypical, or difficult to assess; sequencing and deletion/duplication analysis are used.",
    ],
    histo: [
      "Lisch nodules are dome-shaped iris hamartomas composed of bland spindle-shaped melanocytes in a disorganized arrangement.",
      "Neurofibromas contain bland Schwannian cells, fibroblastic cells, mast cells, and axons in a collagenous or myxoid stroma.",
      "NF1-associated optic pathway gliomas are usually pilocytic astrocytomas.",
      "Malignant peripheral nerve sheath tumor shows malignant spindle cells, increased mitotic activity, and often necrosis; it may arise in a plexiform neurofibroma.",
    ],
    ihc: [
      "Neurofibromas typically show S100 and SOX10 expression in Schwannian cells, with variable staining in the overall lesional population.",
      "Loss of neurofibromin expression may support NF1-associated tumorigenesis but is not a stand-alone germline diagnostic test.",
      "Optic pathway glioma immunophenotype is that of the corresponding low-grade glioma, commonly including GFAP positivity.",
    ],
    diff: [
      "Legius syndrome: café-au-lait macules and freckling may overlap, but neurofibromas, optic pathway glioma, and Lisch nodules are generally absent.",
      "Schwannoma: typically shows diffuse strong Schwannian marker expression and lacks the mixed cellular composition and axons characteristic of neurofibroma.",
      "Other low-grade gliomas: correlate optic pathway location and clinical findings; NF1-associated optic pathway glioma is usually pilocytic.",
    ],
    molecular: [
      "NF1 is an autosomal dominant tumor suppressor gene at 17q11.2; a heterozygous germline pathogenic variant establishes molecular diagnosis.",
      "Somatic second-hit inactivation of the remaining allele drives many NF1-associated lesions through increased RAS/MAPK and PI3K/AKT signaling.",
      "Testing should include sequencing and deletion/duplication analysis; RNA/cDNA analysis may improve detection of splice-altering variants.",
      "Large 17q11.2 microdeletions involving NF1 and neighboring genes occur in approximately 5–11% of cases.",
    ],
  },
  {
    name: "Goldenhar Syndrome (Craniofacial Microsomia)",
    category: "Congenital craniofacial developmental syndrome",
    group: "Ocular and craniofacial developmental anomalies",
    clinical: [
      "Congenital condition, usually sporadic; approximately 1 in 5,000 births. Many series report a male predominance, although this is not consistent.",
      "Usually unilateral (70–90%) and characterized by hemifacial/mandibular hypoplasia, auricular anomalies or preauricular tags, and vertebral abnormalities.",
      "Ocular findings include inferotemporal limbal dermoid or epibulbar choristoma, upper eyelid coloboma, lipodermoid, microphthalmia, strabismus, and occasionally lacrimal drainage obstruction.",
    ],
    criteria: [
      "Clinical diagnosis is based on craniofacial microsomia with facial asymmetry and characteristic auricular findings, together with ocular and/or vertebral anomalies.",
      "Look specifically for epibulbar dermoid/choristoma, eyelid coloboma, preauricular tags, mandibular hypoplasia, and cervical vertebral anomalies.",
      "Genetic testing is not routinely required because the syndrome is genetically heterogeneous and most cases lack an identifiable diagnostic variant.",
    ],
    histo: [
      "Epibulbar dermoid is composed of dense collagen resembling dermis, often with pilosebaceous and eccrine/apocrine adnexal structures.",
      "Dermolipoma contains abundant mature adipose tissue beneath conjunctival epithelium.",
      "Complex choristoma may contain lacrimal gland tissue, cartilage, and smooth muscle.",
      "Histology reflects the specific ocular choristoma and is not independently diagnostic of Goldenhar syndrome.",
    ],
    ihc: [
      "Immunohistochemistry is generally unnecessary for typical epibulbar dermoid, dermolipoma, or choristoma.",
      "Use lineage-directed markers only when an unusual component raises a specific differential diagnosis.",
    ],
    diff: [
      "Isolated epibulbar dermoid or dermolipoma: lacks the broader craniofacial, auricular, and vertebral phenotype.",
      "Other craniofacial microsomia syndromes: distinguish by associated ear, mandibular, vertebral, cardiac, renal, and ocular findings.",
      "Encephalocraniocutaneous lipomatosis and linear nevus sebaceous syndrome: consider when characteristic cutaneous or CNS abnormalities accompany ocular choristomas.",
    ],
    molecular: [
      "Most cases are multifactorial and no single molecular alteration is diagnostic.",
      "SF3B2 loss-of-function variants have been identified in a subset, particularly familial cases; reported frequencies are approximately 25% of familial and 3% of sporadic cases.",
      "Other reported candidate alterations include copy-number variants and variants involving OTX2 and MYT1; these findings are not required for diagnosis.",
    ],
  },
  {
    name: "Muir-Torre Syndrome",
    category: "Lynch syndrome variant / hereditary cancer syndrome",
    group: "Sebaceous and visceral neoplasms",
    clinical: [
      "Usually presents in adults, but associated visceral malignancies may arise at a relatively young age; no consistent sex predilection is established.",
      "Characterized by sebaceous neoplasms, especially sebaceous adenoma and sebaceoma, together with Lynch syndrome-associated visceral malignancy.",
      "Ocular adnexal sebaceous neoplasms, including eyelid lesions, may occur but are uncommon; colorectal, endometrial, gastric, small bowel, ovarian, urinary tract, and other cancers are associated.",
    ],
    criteria: [
      "Suspect the syndrome in a patient with sebaceous neoplasms and a personal or family history of Lynch-associated visceral malignancy, particularly with multiple sebaceous tumors.",
      "Assess mismatch repair protein expression by IHC and/or microsatellite instability in an appropriate tumor, recognizing that periocular sebaceous carcinoma has limited screening sensitivity.",
      "Definitive diagnosis requires identification of a germline pathogenic variant in an MMR gene or an EPCAM deletion causing MSH2 silencing.",
    ],
    histo: [
      "Sebaceous adenoma and sebaceoma show well-differentiated sebaceous lobules; sebaceous carcinoma shows infiltrative growth and cytologic atypia.",
      "The histology of sebaceous and visceral tumors is generally indistinguishable from their sporadic counterparts.",
      "MMR-deficient sebaceous neoplasms may show loss of one or more mismatch repair proteins by immunohistochemistry.",
    ],
    ihc: [
      "Evaluate MLH1, PMS2, MSH2, and MSH6; paired loss patterns may suggest the affected MMR pathway.",
      "Loss of MSH2 and MSH6 is frequently encountered in Muir-Torre-associated sebaceous tumors; isolated MSH6 or PMS2 loss can also occur.",
      "Retained MMR protein expression does not completely exclude the syndrome, particularly in periocular sebaceous neoplasms.",
    ],
    diff: [
      "Sporadic sebaceous adenoma/sebaceoma: may be morphologically identical; multiple lesions, visceral cancer history, MMR IHC, and germline testing aid distinction.",
      "Isolated Lynch syndrome: shares the visceral cancer predisposition but lacks the characteristic sebaceous neoplasm phenotype.",
      "MUTYH-associated polyposis: can rarely produce overlapping sebaceous and visceral tumor findings; inheritance pattern and germline testing distinguish it.",
    ],
    molecular: [
      "Most cases result from germline pathogenic variants in MLH1, MSH2, MSH6, or PMS2; EPCAM deletions can cause epigenetic silencing of MSH2.",
      "Biallelic MMR inactivation produces mismatch repair deficiency and microsatellite instability.",
      "Somatic MMR alterations are common in sebaceous tumors; confirm suspected hereditary disease with germline testing rather than tumor-only sequencing.",
    ],
  },
];

const overview = [
  {
    group: "Retinal and intracranial tumor predisposition",
    syndromes: "Retinoblastoma syndrome",
    overview:
      "Germline RB1 inactivation predisposes to unilateral or bilateral retinoblastoma, trilateral retinoblastoma, and lifelong risk of second primary malignancies.",
  },
  {
    group: "Melanocytic and multisystem tumor predisposition",
    syndromes: "BAP1 tumor predisposition syndrome",
    overview:
      "Germline BAP1 alteration is associated with uveal and cutaneous melanoma, mesothelioma, renal cell carcinoma, meningioma, and BAP1-inactivated melanocytic tumors.",
  },
  {
    group: "Retinal and multisystem tumor predisposition",
    syndromes: "Von Hippel-Lindau syndrome",
    overview:
      "Germline VHL alteration predisposes to retinal and CNS hemangioblastomas, clear cell renal cell carcinoma, pheochromocytoma, and pancreatic and endolymphatic sac lesions.",
  },
  {
    group: "Mosaic neurocutaneous vascular syndrome",
    syndromes: "Sturge-Weber syndrome",
    overview:
      "Postzygotic mosaic GNAQ-pathway activation causes capillary malformations involving the face, leptomeninges, and eye, with risk of glaucoma and diffuse choroidal involvement.",
  },
  {
    group: "Neural and ocular tumor predisposition",
    syndromes: "Neurofibromatosis type 1",
    overview:
      "Germline NF1 inactivation is associated with optic pathway glioma, Lisch nodules, choroidal abnormalities, neurofibromas, and characteristic skeletal findings.",
  },
  {
    group: "Craniofacial and ocular developmental syndrome",
    syndromes: "Goldenhar syndrome (craniofacial microsomia)",
    overview:
      "A developmental disorder involving first- and second-arch structures, typically with hemifacial microsomia, auricular anomalies, epibulbar choristomas, and vertebral defects.",
  },
  {
    group: "Sebaceous and visceral tumor predisposition",
    syndromes: "Muir-Torre syndrome",
    overview:
      "A Lynch syndrome variant caused by germline mismatch repair pathway defects, characterized by sebaceous neoplasms and an increased risk of visceral malignancies.",
  },
];

export default function GeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(entities.map((entity) => entity.category))),
    ],
    [],
  );

  const filteredEntities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const matchesCategory =
        category === "All" || entity.category === category;
      const searchable = [
        entity.name,
        entity.category,
        entity.group,
        ...entity.clinical,
        ...entity.criteria,
        ...entity.histo,
        ...entity.ihc,
        ...entity.diff,
        ...entity.molecular,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!q || searchable.includes(q));
    });
  }, [query, category]);

  const toggle = (name: string) => {
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  const expandAll = () =>
    setExpanded(filteredEntities.map((entity) => entity.name));
  const collapseAll = () => setExpanded([]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-sky-700">
          Ophthalmic Pathology
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Genetic Tumor Syndromes Associated with Eye and Orbit Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Hereditary and mosaic disorders with characteristic ocular, orbital,
          and systemic manifestations. Recognition of these syndromes can prompt
          germline evaluation, family counseling, and surveillance for
          associated malignancies.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-xl font-bold text-slate-900">
          Diagnostic Overview
        </h2>
        <p className="mb-4 text-sm leading-6 text-slate-600">
          The table summarizes the principal genetic mechanism, associated
          ocular findings, and broader tumor spectrum for each syndrome.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Syndrome / Group</th>
                <th className="px-4 py-3 font-semibold">
                  Representative Syndrome
                </th>
                <th className="px-4 py-3 font-semibold">
                  Key Ocular and Systemic Associations
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {overview.map((item) => (
                <tr key={item.syndromes} className="align-top">
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {item.group}
                  </td>
                  <td className="px-4 py-3 font-semibold text-sky-800">
                    {item.syndromes}
                  </td>
                  <td className="px-4 py-3 leading-6 text-slate-600">
                    {item.overview}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="mb-4 flex flex-col gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Syndrome Reference
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Search by syndrome, associated tumor, clinical feature, histology,
              immunophenotype, or molecular alteration.
            </p>
          </div>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search syndromes, tumors, genes, markers, or findings..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-w-64 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              aria-label="Filter by syndrome category"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <button
              onClick={expandAll}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              Expand all
            </button>
            <button
              onClick={collapseAll}
              className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              Collapse all
            </button>
            <span className="text-sm text-slate-500">
              {filteredEntities.length} of {entities.length} syndromes
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {filteredEntities.map((entity) => {
            const isOpen = expanded.includes(entity.name);
            return (
              <article
                key={entity.name}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(entity.name)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-base font-semibold text-slate-900">
                      {entity.name}
                    </span>
                    <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-sky-700">
                      {entity.category}
                    </span>
                  </span>
                  <span className="text-xl text-slate-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-200 px-5 py-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <ContentSection
                        title="Clinical Profile"
                        items={entity.clinical}
                      />
                      <ContentSection
                        title="Essential Diagnostic Criteria"
                        items={entity.criteria}
                      />
                      <ContentSection
                        title="Histopathology"
                        items={entity.histo}
                      />
                      <ContentSection
                        title="Immunophenotype"
                        items={entity.ihc}
                      />
                      <ContentSection
                        title="Differential Diagnosis"
                        items={entity.diff}
                      />
                      <ContentSection
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
          {filteredEntities.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 px-5 py-10 text-center text-sm text-slate-500">
              No syndromes match the current search or category filter.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ContentSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wide text-slate-800">
        {title}
      </h3>
      <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
