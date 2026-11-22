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
    name: "Orbital dermoid cyst and other developmental cysts",
    category: "Developmental cyst / choristoma",
    group: "Choristomas and cysts",
    clinical: [
      "Usually congenital or recognized in infancy and childhood; superficial lesions may present before 1 year of age. Deep lesions are often detected later, from childhood through young adulthood.",
      "Typically occurs near a cranial suture, most often superotemporally at the frontozygomatic suture; presents as a painless, slowly enlarging, sometimes bone-fixed mass. Deep lesions may cause globe displacement or visual symptoms.",
    ],
    criteria: [
      "Cyst lined by keratinizing stratified squamous epithelium.",
      "Epidermal appendages, including hair follicles and sebaceous and/or sweat glands, are present in the cyst wall.",
      "Rupture may produce a prominent foreign-body granulomatous reaction and fibrosis.",
    ],
    histo: [
      "The cyst is lined by keratinizing stratified squamous epithelium.",
      "Hair shafts and sebaceous glands are common within the wall or lumen.",
      "Eccrine sweat glands may be present in the cyst wall.",
      "Rupture may lead to keratin or hair-associated granulomatous inflammation with multinucleated giant cells.",
    ],
    ihc: ["Immunohistochemistry is generally unnecessary for diagnosis."],
    diff: [
      "Epidermoid cyst: squamous epithelial lining without skin appendages in the cyst wall.",
      "Conjunctival inclusion cyst: usually nonkeratinizing conjunctival-type lining, often with goblet cells.",
      "Microphthalmia with cyst or encephalocele: developmental ocular or intracranial connection should be assessed clinically and radiologically.",
      "Other orbital cysts: correlate epithelial lining, anatomic location, and imaging findings.",
    ],
    molecular: ["No diagnostic molecular alteration is established."],
  },
  {
    name: "Cavernous vascular malformation",
    category: "Benign venous vascular malformation",
    group: "Vascular malformations",
    clinical: [
      "Usually presents in adults in the fourth to fifth decades; approximately 60% of patients are women.",
      "Typically intraconal and located in the mid or posterior orbit; causes slowly progressive axial proptosis, sometimes with pain or visual impairment from optic nerve compression or hyperopic shift.",
    ],
    criteria: [
      "Well-circumscribed, usually encapsulated orbital mass composed of large, dilated cavernous venous channels.",
      "Vascular spaces are lined by bland, flattened endothelial cells.",
      "Clinical and imaging findings typically show a slowly enlarging, well-defined lesion with progressive contrast enhancement.",
    ],
    histo: [
      "The lesion is circumscribed and commonly surrounded by a fibrous capsule.",
      "Large, dilated, blood-filled cavernous vascular spaces are arranged in clusters.",
      "The channels are lined by bland endothelial cells without significant atypia.",
      "Organizing thrombi and focal small-vessel proliferation may be present.",
    ],
    ihc: [
      "Endothelial cells express CD31 and ERG; CD34 is commonly positive.",
      "No specific immunophenotype is required when the morphology is characteristic.",
    ],
    diff: [
      "Orbital venous malformation: typically unencapsulated, distensible, and composed of communicating venous channels; may enlarge with Valsalva.",
      "Combined lymphatic-venous malformation: contains irregular lymphatic channels, often with lymphoid aggregates and prior hemorrhage.",
      "Angiosarcoma: destructive infiltrative growth, endothelial atypia, mitoses, and complex anastomosing channels.",
    ],
    molecular: [
      "GJA4 mutations have been reported in a subset of cavernous vascular malformations; testing is not required for routine diagnosis.",
      "IDH1 or IDH2 hotspot mutations may occur in lesions associated with Maffucci syndrome.",
    ],
  },
  {
    name: "Combined lymphatic-venous malformation",
    category: "Combined low-flow vascular malformation",
    group: "Vascular malformations",
    clinical: [
      "Usually presents in infancy or childhood, with a female predominance; lesions may become symptomatic at any age.",
      "May involve superficial and deep orbit, with conjunctival or eyelid components; presents with proptosis, ptosis, motility disturbance, or visual impairment.",
      "Acute painful enlargement, proptosis, or ecchymosis may follow intralesional hemorrhage or thrombosis; lesions may expand during intercurrent illness.",
    ],
    criteria: [
      "Unencapsulated, infiltrative malformation composed of variably sized lymphatic and venous channels.",
      "Channels are separated by fibrous septa and may contain proteinaceous fluid, blood, or both.",
      "Lymphatic endothelial differentiation is supported by D2-40 expression.",
    ],
    histo: [
      "Malformed endothelial-lined channels of variable caliber permeate the orbital soft tissue.",
      "Lymphatic spaces may contain proteinaceous material, blood, or both.",
      "Venous channels are variably dilated and may show organizing thrombi.",
      "Fibrous septa may contain lymphocytes or well-formed lymphoid follicles.",
      "Hemosiderin-laden macrophages indicate previous hemorrhage.",
    ],
    ihc: [
      "CD31 and ERG highlight endothelial cells in both vascular components.",
      "D2-40 highlights the lymphatic endothelial component.",
      "CD34 may highlight the vascular endothelium but does not independently distinguish the two components.",
    ],
    diff: [
      "Orbital venous malformation: predominantly venous channels without a substantial D2-40-positive lymphatic component.",
      "Cavernous vascular malformation: circumscribed and encapsulated, with large cavernous venous spaces.",
      "Lymphoma: cellular lymphoid infiltrate rather than malformed endothelial-lined spaces.",
      "Rhabdomyosarcoma: malignant small round or spindle cell proliferation rather than a vascular malformation.",
    ],
    molecular: [
      "Somatic PIK3CA mutations occur in a subset of lymphatic-venous malformations and may support consideration of pathway-directed therapy in selected patients.",
    ],
  },
  {
    name: "Orbital venous malformation",
    category: "Slow-flow venous malformation",
    group: "Vascular malformations",
    clinical: [
      "Can present at any age, often becoming apparent later in childhood or adulthood; no consistent sex predilection is established.",
      "May involve superficial or deep orbit and adjacent facial, temporal, or intracranial spaces. Superficial lesions are soft and compressible; deep lesions may cause intermittent proptosis or globe displacement.",
      "Lesions may enlarge with Valsalva or dependency and become painful with thrombosis; chronic filling and emptying may cause intermittent proptosis and enophthalmos.",
    ],
    criteria: [
      "Slow-flow lesion composed of abnormal, variably dilated venous channels.",
      "Channels have variable smooth-muscle walls and lack a normal internal elastic lamina.",
      "Thrombi, recanalization, and phleboliths may be present.",
    ],
    histo: [
      "The lesion consists of enlarged, irregular venous channels of variable caliber.",
      "The venous walls show variable smooth-muscle thickness and inconspicuous endothelium.",
      "The internal elastic lamina is absent.",
      "Thrombosis, recanalization, and phlebolith formation are common.",
      "Intravascular papillary endothelial hyperplasia (Masson phenomenon) may occur within organizing thrombi.",
    ],
    ihc: [
      "Endothelial cells express CD31 and ERG; CD34 is variable.",
      "In glomuvenous lesions, the perivascular glomus cells are highlighted by SMA.",
    ],
    diff: [
      "Cavernous vascular malformation: usually a discrete, encapsulated intraconal mass with clustered cavernous spaces.",
      "Combined lymphatic-venous malformation: has a demonstrable lymphatic component, often D2-40 positive.",
      "Arteriovenous malformation: high-flow lesion with arterial and venous channels, clinical pulsation, bruit, or thrill.",
      "Angiosarcoma: infiltrative endothelial neoplasm with cytologic atypia and destructive growth.",
    ],
    molecular: [
      "TEK (TIE2) mutations are common in venous malformations overall; PIK3CA mutations occur in a subset. Orbital-specific molecular data are limited.",
      "GLMN mutations are associated with glomuvenous malformations.",
    ],
  },
  {
    name: "Arteriovenous malformation",
    category: "High-flow vascular malformation",
    group: "Vascular malformations",
    clinical: [
      "Usually congenital and may be evident at birth; deep or low-grade lesions can become apparent later. No established sex predilection.",
      "May cause pulsatile proptosis, warmth, bruit, thrill, chronic pain, visual decline, or cosmetic deformity; hemorrhage can be serious.",
    ],
    criteria: [
      "High-flow vascular lesion with direct communication between arterial and venous channels without an intervening capillary bed.",
      "Histology shows abnormal arteries and veins of variable caliber, often with venous intimal and adventitial fibrosis.",
      "Clinical examination and Doppler imaging demonstrate arteriovenous shunting.",
    ],
    histo: [
      "Numerous large-caliber arteries and thick-walled veins are present in a disorganized arrangement.",
      "Arteries may be tortuous, while veins often show intimal and adventitial fibrosis.",
      "Smaller arterioles, venules, capillaries, and dilated lymphatic channels may be admixed.",
      "The background is often fibrous or fibromyxoid.",
    ],
    ihc: [
      "Endothelial cells express CD31 and ERG.",
      "Smooth-muscle actin highlights the muscular walls of arterial and venous channels.",
      "Immunohistochemistry is supportive but does not establish the high-flow nature of the lesion.",
    ],
    diff: [
      "Venous malformation: slow-flow lesion without direct arterial-to-venous shunting.",
      "Combined lymphatic-venous malformation: contains malformed lymphatic channels and is typically low-flow.",
      "Angiosarcoma: malignant endothelial proliferation with infiltrative growth, atypia, and mitotic activity.",
    ],
    molecular: [
      "Somatic RAS-pathway alterations, including MAP2K1, have been reported in sporadic AVMs.",
      "RASA1 and EPHB4 alterations are associated with inherited vascular-malformation syndromes.",
    ],
  },
  {
    name: "Orbital glial heterotopia",
    category: "Developmental heterotopia",
    group: "Hamartomas and heterotopias",
    clinical: [
      "Usually presents before 5 years of age, including in neonates; adult cases are rare. Usually unilateral.",
      "Presents as a slowly enlarging orbital mass with swelling, proptosis, or strabismus; microphthalmia or anophthalmia may coexist in some cases.",
      "Imaging and clinical assessment should establish the absence of a skull defect or intracranial connection.",
    ],
    criteria: [
      "Mature, non-neoplastic CNS tissue is present in the orbit without connection to the intracranial or intraspinal compartments.",
      "There is no skull defect to support encephalocele.",
      "The lesion is not associated with microphthalmia with cyst.",
    ],
    histo: [
      "The lesion is composed of mature, benign glial tissue with variable neural elements.",
      "Microcalcifications or psammoma bodies may be present.",
      "Ependymal or choroid plexus elements are uncommon.",
    ],
    ihc: [
      "Glial cells express GFAP and S100.",
      "Neurofilament highlights axons when neuronal elements are present.",
    ],
    diff: [
      "Encephalocele: demonstrates a skull defect and continuity with intracranial contents or meninges.",
      "Microphthalmia with cyst: associated with a malformed, small globe and a cystic connection.",
      "Optic nerve or other glial neoplasm: shows a true neoplastic growth pattern and must be distinguished by anatomic relationship and morphology.",
    ],
    molecular: ["No diagnostic molecular alteration is established."],
  },
  {
    name: "Mesenchymal hamartomas of the orbit",
    category: "Developmental mesenchymal lesions",
    group: "Hamartomas and heterotopias",
    clinical: [
      "Predominantly congenital or pediatric lesions; fibrous hamartoma of infancy usually presents before 2 years of age. No consistent sex predilection across the group.",
      "Usually presents as a painless orbital mass with variable proptosis, ptosis, or restricted ocular motility. Chondromesenchymal hamartoma may extend from the sinonasal tract into the orbit.",
    ],
    criteria: [
      "Rhabdomyomatous mesenchymal hamartoma: haphazard mature skeletal muscle fibers admixed with benign fibrous, adipose, vascular, and neural elements.",
      "Chondromesenchymal hamartoma: irregular islands of mature hyaline cartilage in a variable mesenchymal background.",
      "Fibrous hamartoma of infancy: characteristic triphasic admixture of mature adipose tissue, fibroblastic/myofibroblastic fascicles, and primitive mesenchymal nodules.",
    ],
    histo: [
      "Rhabdomyomatous mesenchymal hamartoma contains randomly arranged mature striated muscle fibers with collagen, fat, vessels, and peripheral nerves.",
      "Chondromesenchymal hamartoma contains irregular islands of hyaline cartilage with variable fibrous, myxoid, and fibro-osseous tissue.",
      "Fibrous hamartoma of infancy shows mature adipose tissue, bland fibroblastic/myofibroblastic fascicles, and primitive-appearing stellate mesenchymal nodules.",
    ],
    ihc: [
      "Skeletal muscle fibers in rhabdomyomatous mesenchymal hamartoma express desmin, myogenin, and MyoD1.",
      "SMA may highlight myofibroblastic cells in fibrous hamartoma of infancy.",
      "Immunophenotyping is generally subordinate to the characteristic triphasic or tissue-specific morphology.",
    ],
    diff: [
      "Rhabdomyosarcoma: atypical proliferating cells, mitotic activity, and destructive growth rather than mature, randomly arranged skeletal muscle fibers.",
      "Chondrosarcoma: cytologic atypia and permeative growth rather than bland, mature cartilage islands.",
      "Fibromatosis or other infantile fibrous tumors: lack the characteristic triphasic pattern of fibrous hamartoma of infancy.",
      "Nasal chondromesenchymal hamartoma extending into the orbit: identify the sinonasal epicenter on imaging.",
    ],
    molecular: [
      "DICER1-associated pathogenic variants are reported in nasal chondromesenchymal hamartoma; diagnosis should prompt consideration of genetic counseling and DICER1 testing.",
      "EGFR exon insertion/deletion mutations have been reported in fibrous hamartoma of infancy, but are not established as a routine diagnostic test for orbital cases.",
    ],
  },
  {
    name: "Teratoma",
    category: "Germ cell tumor",
    group: "Germ cell tumors",
    clinical: [
      "Congenital orbital teratoma presents in a newborn; adult orbital teratomas are exceptionally rare. No established sex predilection.",
      "Infantile lesions cause rapidly progressive, massive unilateral proptosis, eyelid distension, chemosis, and exposure keratopathy. Adult lesions are more often slow-growing and circumscribed.",
      "Imaging may show a complex cystic and solid mass containing fat, calcification, cartilage, or bone; assess for intracranial extension.",
    ],
    criteria: [
      "Tumor contains tissues derived from at least two, and typically all three, germ layers.",
      "Mature teratoma contains differentiated adult-type tissues; immature teratoma contains embryonal immature elements, commonly neuroectodermal tubules or rosettes.",
      "Extensively sample solid areas to identify immature or malignant components.",
    ],
    histo: [
      "Ectodermal derivatives include squamous epithelium, skin appendages, hair, and neural tissue.",
      "Mesodermal derivatives include adipose tissue, cartilage, bone, and smooth or skeletal muscle.",
      "Endodermal derivatives include gastrointestinal, respiratory, thyroid, pancreatic, or salivary-type epithelium.",
      "Immature teratoma contains immature neuroepithelial tubules, rosettes, or other embryonal tissue.",
      "Keratin or other cyst contents may elicit fat necrosis and a foreign-body reaction.",
    ],
    ihc: [
      "Immunohistochemistry is directed by the tissue components present and is not required to establish a conventional mature teratoma.",
      "Immature neuroepithelial components may express neural markers such as synaptophysin and GFAP, depending on differentiation.",
    ],
    diff: [
      "Dermoid cyst: predominantly ectodermal tissue with skin appendages, without the broad representation of multiple germ-layer derivatives.",
      "Developmental orbital cyst: lacks the complex admixture of differentiated tissues.",
      "Yolk sac tumor: malignant germ cell neoplasm with reticular/microcystic architecture and AFP/GPC3 expression.",
    ],
    molecular: [
      "No diagnostic molecular alteration is established for conventional orbital teratoma.",
    ],
  },
  {
    name: "Yolk sac tumor",
    category: "Malignant germ cell tumor",
    group: "Germ cell tumors",
    clinical: [
      "Almost exclusively affects young children; reported mean age is approximately 27 months. A slight female predominance has been reported in the small published series.",
      "Usually arises in the extraconal orbit and presents with rapidly progressive proptosis, ptosis, ophthalmoplegia, visual loss, or exposure keratopathy.",
      "Serum alpha-fetoprotein is typically elevated when measured.",
    ],
    criteria: [
      "Malignant germ cell neoplasm with variable patterns resembling extraembryonic yolk sac differentiation.",
      "Reticular/microcystic, macrocystic, glandular, or myxomatous architecture may be present.",
      "Hyaline globules are PAS-positive and diastase-resistant.",
      "AFP, glypican-3, and SALL4 support the diagnosis.",
    ],
    histo: [
      "Reticular or microcystic spaces are lined by flattened to cuboidal malignant cells.",
      "Tumor cells show cytologic atypia and mitotic activity.",
      "Schiller-Duval bodies may be present but are not required.",
      "Intra- and extracellular hyaline globules are characteristic and are PAS-positive, diastase-resistant.",
    ],
    ihc: [
      "Tumor cells show cytoplasmic AFP expression, although staining may be variable.",
      "Glypican-3 is commonly positive.",
      "SALL4 shows nuclear expression and supports germ cell differentiation.",
      "Low-molecular-weight cytokeratin, including CAM5.2, is commonly positive.",
    ],
    diff: [
      "Teratoma: contains differentiated tissues from multiple germ layers rather than a malignant yolk sac pattern.",
      "Embryonal carcinoma: typically shows more primitive solid or glandular growth and a different immunophenotype, including OCT3/4 expression.",
      "Metastatic or direct extension of another pediatric malignancy: correlate with imaging, clinical history, and lineage-specific markers.",
    ],
    molecular: [
      "No defining molecular alteration is established for routine diagnosis of orbital yolk sac tumor.",
    ],
  },
  {
    name: "Primary orbital melanoma",
    category: "Malignant melanocytic neoplasm",
    group: "Melanocytic tumors",
    clinical: [
      "Reported age range is 5–91 years, with a median of approximately 45 years; slight male predominance.",
      "Arises in orbital soft tissue and may be intraconal or extraconal. Common presentations include unilateral proptosis, decreased vision, periorbital pain, and diplopia.",
      "May be associated with oculodermal melanocytosis, nevus of Ota, or a blue nevus; a prior conjunctival, uveal, or cutaneous melanoma must be excluded.",
    ],
    criteria: [
      "Malignant melanocytic neoplasm centered in orbital soft tissue.",
      "No prior or concurrent conjunctival, uveal, or nonocular primary melanoma after clinical and imaging evaluation.",
      "Melanocytic differentiation is confirmed by an appropriate immunohistochemical panel.",
      "Background orbital melanocytosis or blue nevus may support a primary orbital origin.",
    ],
    histo: [
      "Tumor may be composed of spindle cells, epithelioid cells, or a mixture of both.",
      "Mitotic activity is present; necrosis may occur.",
      "Tumor cells may show a nested or packeted arrangement separated by extracellular matrix.",
      "Melanophages are common in the tumor and adjacent soft tissue.",
      "Background orbital melanocytosis or conventional/cellular blue nevus may be present.",
    ],
    ihc: [
      "Tumor cells express S100 and SOX10.",
      "Melan-A and HMB45 support melanocytic differentiation.",
      "A subset shows loss of nuclear BAP1 expression.",
    ],
    diff: [
      "Secondary orbital melanoma: exclude extension or metastasis from uveal, conjunctival, cutaneous, or other melanoma.",
      "Clear cell sarcoma: may express melanocytic markers but is supported by an EWSR1::ATF1 or related fusion.",
      "Melanocytosis or blue nevus: bland melanocytes without destructive growth, significant atypia, or mitotic activity.",
    ],
    molecular: [
      "A panel including GNAQ, GNA11, BRAF, NRAS, TERT promoter, SF3B1, and EIF1AX may help characterize the tumor in the appropriate clinical context.",
      "GNAQ and GNA11 alterations overlap with uveal melanoma and do not independently establish an orbital primary; clinical exclusion of another primary site is essential.",
      "SF3B1 and EIF1AX alterations have been associated with more favorable outcomes in limited data; prognostic interpretation should be cautious.",
    ],
  },
];

const groups = [
  "All categories",
  "Choristomas and cysts",
  "Vascular malformations",
  "Hamartomas and heterotopias",
  "Germ cell tumors",
  "Melanocytic tumors",
];

export default function OrbitalTumorsPage() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All categories");
  const [expanded, setExpanded] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((entity) => {
      const matchesGroup =
        activeGroup === "All categories" || entity.group === activeGroup;
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
      return matchesGroup && (!q || searchable.includes(q));
    });
  }, [query, activeGroup]);

  const allVisibleExpanded =
    filtered.length > 0 &&
    filtered.every((entity) => expanded.includes(entity.name));
  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  const toggleAll = () =>
    setExpanded((current) =>
      allVisibleExpanded
        ? current.filter(
            (name) => !filtered.some((entity) => entity.name === name),
          )
        : [...new Set([...current, ...filtered.map((entity) => entity.name)])],
    );

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
          Ophthalmic Pathology
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          Orbital Tumors and Tumor-Like Lesions
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to developmental cysts, vascular
          malformations, hamartomas, germ cell tumors, and melanocytic neoplasms
          of the orbit. Always correlate morphology with the anatomic epicenter,
          imaging findings, and clinical history to distinguish primary orbital
          lesions from secondary involvement.
        </p>
      </header>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-xl font-semibold text-slate-900">
          Diagnostic Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50 text-slate-700">
                <th className="p-3 font-semibold">Category</th>
                <th className="p-3 font-semibold">Entities</th>
                <th className="p-3 font-semibold">
                  Key diagnostic perspective
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Choristomas and cysts</td>
                <td className="p-3">Orbital dermoid and developmental cysts</td>
                <td className="p-3">
                  Developmental lesions; dermoid cysts contain squamous lining
                  and skin appendages.
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Vascular malformations</td>
                <td className="p-3">
                  Cavernous vascular, combined lymphatic-venous, venous, and
                  arteriovenous malformations
                </td>
                <td className="p-3">
                  Classify by flow and vascular composition; correlate with
                  imaging and endothelial phenotype.
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Hamartomas and heterotopias</td>
                <td className="p-3">
                  Glial heterotopia; rhabdomyomatous, chondromesenchymal, and
                  fibrous hamartomas
                </td>
                <td className="p-3">
                  Mature or developmentally patterned tissue; exclude
                  intracranial connection and true malignancy.
                </td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-3 font-medium">Germ cell tumors</td>
                <td className="p-3">Teratoma; yolk sac tumor</td>
                <td className="p-3">
                  Teratoma shows multiple germ-layer derivatives; yolk sac tumor
                  is malignant and typically AFP/GPC3/SALL4 positive.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Melanocytic tumors</td>
                <td className="p-3">Primary orbital melanoma</td>
                <td className="p-3">
                  A diagnosis of primary origin requires exclusion of uveal,
                  conjunctival, cutaneous, and other primary melanomas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          aria-label="Search orbital entities"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search entities, morphology, IHC, differential, or molecular findings..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <button
          type="button"
          onClick={toggleAll}
          className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          {allVisibleExpanded ? "Collapse all" : "Expand all"}
        </button>
      </section>

      <nav
        aria-label="Filter by category"
        className="mb-6 flex flex-wrap gap-2"
      >
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            onClick={() => setActiveGroup(group)}
            className={`rounded-full px-3 py-2 text-sm font-medium transition ${activeGroup === group ? "bg-sky-700 text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"}`}
          >
            {group}
          </button>
        ))}
      </nav>

      <div className="mb-3 text-sm text-slate-500">
        Showing {filtered.length} of {entities.length} entities
      </div>
      <section className="space-y-3">
        {filtered.map((entity) => {
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
                className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50"
              >
                <span>
                  <span className="block text-lg font-semibold text-slate-900">
                    {entity.name}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    {entity.category} <span className="px-1">·</span>{" "}
                    {entity.group}
                  </span>
                </span>
                <span className="mt-1 shrink-0 text-xl font-light text-sky-700">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 px-5 pb-5">
                  <ContentSection
                    title="Clinical Profile"
                    items={entity.clinical}
                  />
                  <ContentSection
                    title="Essential Diagnostic Criteria"
                    items={entity.criteria}
                  />
                  <ContentSection title="Histopathology" items={entity.histo} />
                  <ContentSection title="Immunophenotype" items={entity.ihc} />
                  <ContentSection
                    title="Differential Diagnosis"
                    items={entity.diff}
                  />
                  <ContentSection
                    title="Molecular Pathology"
                    items={entity.molecular}
                  />
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500">
            No entities match your search.
          </div>
        )}
      </section>
    </main>
  );
}

function ContentSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="pt-5 first:pt-5">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-sky-800">
        {title}
      </h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
