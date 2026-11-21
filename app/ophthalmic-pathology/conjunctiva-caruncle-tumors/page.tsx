"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Entity = {
  name: string;
  category: string;
  clinical: string;
  criteria: string;
  histology: string;
  differential: string;
  molecular: string;
};

const entities: Entity[] = [
  {
    name: "Epithelial conjunctival inclusion cyst",
    category: "Tumor-like lesion",
    clinical:
      "Any age; bulbar conjunctiva or caruncle; transparent/cloudy, compressible cyst.",
    criteria:
      "Benign cyst within substantia propria; lining matches conjunctival or caruncular epithelium.",
    histology:
      "Nonkeratinizing stratified squamous lining, with or without goblet cells; proteinaceous contents; possible stromal fibrosis/inflammation.",
    differential:
      "Conjunctival crypts of Henle lack a true cystic epithelial inclusion; lymphangiectasia is endothelial-lined; filtration bleb lacks epithelial lining; caruncular infundibular cyst/steatocystoma have cutaneous-type lining.",
    molecular: "None.",
  },
  {
    name: "Reactive epithelial hyperplasia",
    category: "Tumor-like lesion",
    clinical:
      "Children or adults; often limbal/bulbar or fornix/tarsal conjunctiva; fleshy or white thickening.",
    criteria:
      "Reactive proliferation in an irritative/inflammatory setting; cytology remains benign and maturation is preserved.",
    histology:
      "Pseudoepitheliomatous pattern: acanthosis with orderly maturation, sometimes surface keratinization. Pseudoglandular pattern: prominent glands of Henle lined by squamous epithelium with goblet cells and mucin.",
    differential:
      "Papilloma has fibrovascular fronds; CSIN shows dysplasia and loss of maturation; SCC with mucinous differentiation shows atypia, mitoses, intracytoplasmic mucin, and often invasion.",
    molecular: "No established recurrent molecular alteration.",
  },
  {
    name: "Papillary and follicular conjunctivitis",
    category: "Inflammatory lesion",
    clinical:
      "All ages; papillary pattern usually upper tarsal conjunctiva (often allergic/contact lens); follicular pattern palpebral, forniceal, or bulbar; discharge and irritation.",
    criteria:
      "Papillae have vascular fibrovascular cores; follicles are discrete reactive lymphoid aggregates with no central vascular core.",
    histology:
      "Papillary: edematous fibrovascular stromal cores with perpendicular capillaries, covered by non-dysplastic epithelium; mixed inflammatory cells including eosinophils/mast cells. Follicular: reactive lymphoid follicles in substantia propria.",
    differential:
      "Reactive lymphoid hyperplasia forms a mass rather than multiple follicles; conjunctival lymphoma may mimic follicular conjunctivitis and requires clonality/IHC workup. Sarcoid may form nodules.",
    molecular: "Molecular studies only if lymphoma is suspected.",
  },
  {
    name: "Pterygium and pinguecula",
    category: "Degenerative lesion",
    clinical:
      "Usually adults with chronic UV exposure; interpalpebral bulbar conjunctiva; often nasal; irritation or cosmetic concern.",
    criteria:
      "Pinguecula is confined to paralimbal conjunctiva; pterygium crosses limbus and extends onto cornea; actinic elastosis is characteristic.",
    histology:
      "Basophilic elastotic degeneration of substantia propria with fibrosis and telangiectasia; overlying epithelium may show acanthosis, metaplasia, or goblet cell hyperplasia; pterygium may efface peripheral Bowman layer.",
    differential:
      "CSIN/SCC may arise in or mimic these lesions; look for epithelial dysplasia or stromal invasion. Pinguecula does not cross onto cornea.",
    molecular: "No routine diagnostic molecular test.",
  },
  {
    name: "Epibulbar choristoma",
    category: "Choristoma",
    clinical:
      "Usually congenital and recognized in childhood; inferotemporal limbus (dermoid), superotemporal conjunctiva (dermolipoma); firm white or soft yellow mass.",
    criteria:
      "Mature ectopic tissue at conjunctival/corneal surface; classify as dermoid, dermolipoma, or complex choristoma by tissue composition.",
    histology:
      "Dermoid: collagenous tissue with squamous epithelium and skin appendages. Dermolipoma: abundant mature adipose tissue. Complex choristoma: combinations of lacrimal gland, cartilage, muscle, nerve, bone, or other mature tissues.",
    differential:
      "Dermolipoma vs orbital fat prolapse: conjunctiva is tethered in dermolipoma but mobile over prolapsed orbital fat; lacrimal gland hamartoma may mimic glandular complex choristoma.",
    molecular: "None.",
  },
  {
    name: "Epibulbar osseous choristoma",
    category: "Choristoma",
    clinical:
      "Congenital, often detected before age 20; slight female predominance; usually superotemporal episcleral/conjunctival mass, firm and yellow-white.",
    criteria:
      "Mature lamellar bone in an ectopic episcleral location; no atypia or destructive growth.",
    histology:
      "Compact lamellar bone with normal osteocytes and possible Haversian canals; periosteum and osteogenic layer; marrow usually absent.",
    differential:
      "Complex choristoma may contain bone but has additional heterotopic tissues; extraskeletal osteosarcoma shows cytologic atypia, malignant osteoid, and destructive infiltration.",
    molecular: "None.",
  },
  {
    name: "Conjunctival squamous papilloma",
    category: "Benign epithelial tumor",
    clinical:
      "Often men aged 21–40; also children/adolescents; bulbar or palpebral conjunctiva, frequently caruncle; red-pink, vascular, pedunculated or sessile papillary lesion.",
    criteria:
      "Exophytic or inverted squamous proliferation with fibrovascular cores and goblet cells; no high-grade dysplasia or destructive invasion.",
    histology:
      "Exophytic fronds lined by nonkeratinizing squamous epithelium with goblet cells; inverted lesions are circumscribed endophytic proliferations; koilocytic change or low-grade dysplasia may occur.",
    differential:
      "CSIN shows disordered maturation and cytologic atypia; SCC shows high-grade atypia and/or invasion; inverted papilloma can mimic SCC but lacks significant atypia and destructive infiltration.",
    molecular:
      "Low-risk HPV6/11 common; HPV testing is not required. Block p16 suggests high-risk HPV, not a universal feature.",
  },
  {
    name: "Conjunctival oncocytoma",
    category: "Benign epithelial tumor",
    clinical:
      "Usually older adults; caruncle, arising commonly from accessory lacrimal glands; circumscribed reddish, brown, or bluish nodule.",
    criteria:
      "Well-circumscribed solid/cystic oncocytic epithelial neoplasm without significant atypia, mitoses, or infiltrative margins.",
    histology:
      "Sheets, nests, or microcysts of columnar oncocytes with abundant granular eosinophilic cytoplasm and central nuclei; PAS-positive luminal material may be present.",
    differential:
      "Oncocytic mucoepidermoid, secretory, acinic cell, or apocrine carcinoma show atypia, mitoses, or infiltration; clinical mimics include melanoma, papilloma, and cyst.",
    molecular:
      "Mitochondrial DNA mutations have been reported in accessory lacrimal gland oncocytoma; not routinely needed.",
  },
  {
    name: "Hereditary benign intraepithelial dyskeratosis",
    category: "Inherited epithelial disorder",
    clinical:
      "Usually children/families from Haliwa-Saponi ancestry in North Carolina; bilateral limbal conjunctival plaques with possible oral mucosal lesions.",
    criteria:
      "Sharply demarcated acanthotic epithelium with prominent dyskeratosis but no epithelial dysplasia or invasion.",
    histology:
      "Marked acanthosis and multilayered parakeratosis; numerous dyskeratotic cells with pyknotic nuclei; intact basement membrane; chronic stromal inflammation/telangiectasia.",
    differential:
      "CSIN/CIS shows nuclear pleomorphism, increased N:C ratio, atypical mitoses, and loss of maturation; NLRP1-associated multiple self-healing palmoplantar carcinoma may have similar mucosal lesions but characteristic skin tumors.",
    molecular:
      "Autosomal dominant; locus mapped to 4q35 with copy-number duplication; no established causative protein-coding gene.",
  },
  {
    name: "Conjunctival squamous intraepithelial neoplasia",
    category: "Preinvasive epithelial neoplasm",
    clinical:
      "Usually middle-aged/older adults; sun-exposed interpalpebral limbus and bulbar conjunctiva; gelatinous, leukoplakic, or papilliform lesion.",
    criteria:
      "Squamous dysplasia confined to epithelium; basement membrane intact; grade by epithelial thickness involved.",
    histology:
      "Atypical squamous cells, nuclear enlargement/hyperchromasia, increased N:C ratio, loss of polarity/maturation, and mitoses above basal layer; mild lower third, moderate middle third, severe upper third, CIS full thickness.",
    differential:
      "Reactive hyperplasia retains orderly maturation and bland nuclei; papilloma has fibrovascular cores; invasive SCC breaches basement membrane; sebaceous intraepithelial neoplasia is a consideration in basaloid lesions.",
    molecular:
      "UV-associated TP53/TERT promoter alterations; high-risk HPV in a subset; p16 block staining may support HPV association but is not specific.",
  },
  {
    name: "Conjunctival squamous cell carcinoma",
    category: "Malignant epithelial tumor",
    clinical:
      "Usually older adults, more common in men in temperate regions; HIV/immunosuppression-associated disease may occur younger and in women; interpalpebral limbus/nasal bulbar conjunctiva.",
    criteria:
      "Invasive squamous malignancy with basement membrane breach and stromal invasion; assess depth, margins, PNI/LVI, and adjacent cornea/orbit.",
    histology:
      "Conventional keratinizing or nonkeratinizing SCC; basaloid, spindle, mucinous, pigmented, or acantholytic patterns; desmoplasia and perineural/vascular invasion may occur.",
    differential:
      "CSIN lacks stromal invasion; reactive hyperplasia lacks atypia; basaloid lesions: sebaceous carcinoma or BCC; spindle lesions: melanoma or atypical fibroxanthoma; mucinous pattern: adenosquamous carcinoma.",
    molecular:
      "UV-associated TP53 and TERT promoter mutations; EGFR alterations reported; HPV-associated subset. Molecular testing is not required for routine diagnosis.",
  },
  {
    name: "Adenosquamous carcinoma",
    category: "Malignant epithelial tumor",
    clinical:
      "Rare; adults; conjunctiva, often ocular surface; mass may resemble invasive SCC.",
    criteria:
      "Invasive carcinoma showing both squamous and true glandular/mucin-producing differentiation.",
    histology:
      "Intermixed malignant squamous areas and glandular structures lined by mucin-producing cells; destructive stromal invasion; mucin stains highlight glandular component.",
    differential:
      "SCC with mucinous differentiation has intracytoplasmic mucin but no true gland formation; reactive pseudoglands are bland and noninvasive; metastatic adenocarcinoma requires clinical exclusion.",
    molecular: "No routinely established diagnostic molecular alteration.",
  },
  {
    name: "Benign epithelial melanosis of the conjunctiva",
    category: "Benign melanocytic lesion",
    clinical:
      "Often younger or middle-aged individuals with darker complexion; usually bilateral, diffuse or patchy flat brown pigmentation, often perilimbal.",
    criteria:
      "Increased basal epithelial melanin without increased melanocyte number or atypia.",
    histology:
      "Melanin pigment in basal epithelial cells; melanocyte density and morphology remain essentially normal; melanophages may be present in stroma.",
    differential:
      "C-MIL shows increased atypical intraepithelial melanocytes; nevus shows nests; oculodermal melanocytosis involves deeper ocular tissues and often periocular skin.",
    molecular: "None.",
  },
  {
    name: "Junctional, compound, and subepithelial conjunctival nevi",
    category: "Benign melanocytic tumor",
    clinical:
      "Usually children or young adults; commonly bulbar conjunctiva near limbus; often stable, circumscribed, sometimes cystic pigmented lesion.",
    criteria:
      "Benign nevus cells arranged in junctional, compound, or subepithelial compartments; maturation with depth and absence of destructive invasion.",
    histology:
      "Junctional nests along epithelial-stromal junction; compound lesions include epithelial nests and stromal nevus cells; subepithelial nevi lack junctional component; epithelial inclusion cysts are common.",
    differential:
      "C-MIL is a flat atypical intraepithelial proliferation; melanoma shows destructive stromal invasion, atypia, mitoses, necrosis, or loss of maturation; inflamed juvenile nevus may show alarming atypia.",
    molecular:
      "BRAF mutations occur in a subset; molecular testing is not routine.",
  },
  {
    name: "Inflamed juvenile conjunctival nevus",
    category: "Benign melanocytic tumor",
    clinical:
      "Children/adolescents; often bulbar conjunctiva near limbus; rapidly changing, red, raised, inflamed pigmented or amelanotic lesion.",
    criteria:
      "Junctional/compound nevus with prominent inflammation and reactive atypia; interpret age, architecture, maturation, and deep component together.",
    histology:
      "Large epithelioid or spindle nevus cells with prominent nucleoli may occur; dense lymphocytic inflammation; maturation with depth and lack of deep mitoses/necrosis favor benignity.",
    differential:
      "Conjunctival melanoma shows destructive invasion, deep mitoses, necrosis, marked atypia, or atypical mitoses; C-MIL is intraepithelial without a stromal nevus component.",
    molecular: "No routine molecular test.",
  },
  {
    name: "Blue nevus of the conjunctiva",
    category: "Benign melanocytic tumor",
    clinical:
      "Usually adults; often caruncle or bulbar conjunctiva; blue-gray to slate-colored, well-circumscribed lesion.",
    criteria:
      "Dermal/subepithelial dendritic or cellular melanocytes containing melanin; no junctional atypia or destructive invasion.",
    histology:
      "Dendritic blue nevus: pigmented spindle/dendritic melanocytes in collagenous stroma. Cellular blue nevus: cellular fascicles/nests of heavily pigmented spindle cells, usually circumscribed.",
    differential:
      "Melanoma shows significant atypia, mitoses, necrosis, infiltrative growth; melanocytoma/combined nevus may show additional components; melanoma metastasis requires clinical correlation.",
    molecular:
      "No routinely useful molecular testing; WNT/β-catenin distinction is relevant to deep penetrating melanocytoma, not conventional blue nevus.",
  },
  {
    name: "WNT-activated deep penetrating / plexiform melanocytoma (nevus)",
    category: "Benign/intermediate melanocytic tumor",
    clinical:
      "Usually presents as a component of a combined conjunctival nevus; rare; often pigmented lesion.",
    criteria:
      "Deep plexiform melanocytic proliferation with WNT/β-catenin pathway activation; assess for atypia, mitoses, and destructive growth.",
    histology:
      "Plexiform/nested deep dermal melanocytes with pigmented dendritic and epithelioid cells; nuclear β-catenin supports pathway activation; may coexist with conventional nevus components.",
    differential:
      "Conventional blue nevus lacks nuclear β-catenin; melanoma shows destructive growth, significant atypia, mitoses, or necrosis; combined nevus contains separate conventional components.",
    molecular:
      "WNT pathway activation, commonly involving CTNNB1/β-catenin signaling; nuclear β-catenin is diagnostically useful.",
  },
  {
    name: "Combined nevus",
    category: "Benign melanocytic tumor",
    clinical:
      "Usually young to middle-aged; conjunctiva; pigmented lesion with mixed clinical/microscopic appearance.",
    criteria:
      "At least two morphologically distinct nevus components in one lesion; exclude melanoma arising in a nevus.",
    histology:
      "May combine conventional nevus with blue, granular cell, balloon cell, or deep penetrating melanocytoma components; evaluate each component and deep base for atypia.",
    differential:
      "Melanoma ex nevus shows a discrete atypical proliferative component, destructive invasion, mitoses, or necrosis; single-component nevi lack the mixed architecture.",
    molecular:
      "Molecular testing is not routinely required; β-catenin IHC may help identify WNT-activated component.",
  },
  {
    name: "Conjunctival melanocytic intraepithelial lesion",
    category: "Preinvasive melanocytic neoplasm",
    clinical:
      "Usually middle-aged/older adults; unilateral, often multifocal flat irregular brown pigmentation of bulbar/limbal conjunctiva; may wax and wane.",
    criteria:
      "Increased atypical melanocytes confined to conjunctival epithelium; classify low-grade, high-grade, or melanoma in situ; no stromal invasion.",
    histology:
      "Increased basal melanocytes with atypia; single-cell, nested, confluent, or pagetoid spread; melanoma in situ often severe atypia involving most/full epithelial thickness; basement membrane intact.",
    differential:
      "Benign epithelial melanosis has pigment without melanocytic hyperplasia; nevus has nested maturation; invasive melanoma breaches basement membrane; pigmented CSIN is keratinocytic dysplasia with melanocytic colonization.",
    molecular:
      "TERT promoter mutations reported in a minority; FISH copy-number changes (RREB1, MYB, CCND1) may help in difficult cases; melan-A/SOX10/HMB45 confirm lineage.",
  },
  {
    name: "Conjunctival melanoma",
    category: "Malignant melanocytic tumor",
    clinical:
      "Usually adults >50; no clear sex predilection; most often bulbar conjunctiva near limbus; pigmented or amelanotic nodular/flat lesion with feeder vessels.",
    criteria:
      "Severe melanocytic atypia with stromal invasion; document thickness, ulceration, mitotic activity, margins, and LVI/PNI.",
    histology:
      "Radial intraepithelial component may be pagetoid, nested, or lentiginous; invasive component forms atypical melanocytic nests/sheets in stroma; ulceration, mitoses, satellites, and neurotropism may occur.",
    differential:
      "C-MIL/melanoma in situ has no stromal invasion; nevus may show junctional activity/pagetoid spread but matures with depth and lacks destructive growth; pseudoglands of Henle involvement is not invasion.",
    molecular:
      "NF1, BRAF, and NRAS are common drivers; TERT promoter mutations and 10q loss associate with adverse behavior; test advanced/metastatic tumors for actionable alterations.",
  },
];

const categories = [
  "All",
  "Tumor-like / Reactive",
  "Choristoma",
  "Benign Epithelial",
  "Premalignant / Malignant Epithelial",
  "Benign Melanocytic",
  "Premalignant / Malignant Melanocytic",
];

function splitPoints(value: string) {
  return value.split(/(?<=\\.)\\s+(?=[A-Z])/).filter(Boolean);
}

export default function ConjunctivalTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((item) => {
      const matchesCategory =
        category === "All" ||
        (category === "Tumor-like / Reactive" &&
          [
            "Tumor-like lesion",
            "Inflammatory lesion",
            "Degenerative lesion",
          ].includes(item.category)) ||
        (category === "Choristoma" && item.category === "Choristoma") ||
        (category === "Benign Epithelial" &&
          item.category === "Benign epithelial tumor") ||
        (category === "Premalignant / Malignant Epithelial" &&
          [
            "Preinvasive epithelial neoplasm",
            "Malignant epithelial tumor",
          ].includes(item.category)) ||
        (category === "Benign Melanocytic" &&
          [
            "Benign melanocytic lesion",
            "Benign melanocytic tumor",
            "Benign/intermediate melanocytic tumor",
          ].includes(item.category)) ||
        (category === "Premalignant / Malignant Melanocytic" &&
          [
            "Preinvasive melanocytic neoplasm",
            "Malignant melanocytic tumor",
          ].includes(item.category));
      const haystack = [
        item.name,
        item.category,
        item.clinical,
        item.criteria,
        item.histology,
        item.differential,
        item.molecular,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [query, category]);

  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Pathology GPS
          </Link>
          <Link
            href="/head-and-neck"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
          >
            Head &amp; Neck
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <nav className="mb-5 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/head-and-neck" className="hover:text-slate-900">
            Head &amp; Neck
          </Link>{" "}
          / Eye &amp; Conjunctiva
        </nav>

        <div className="max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            Ocular Surface Pathology
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Tumors and Tumor-Like Lesions of the Conjunctiva and Caruncle
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A morphology-first guide to conjunctival and caruncular cysts,
            reactive and degenerative lesions, choristomas, epithelial
            neoplasms, and melanocytic proliferations.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-sm font-bold text-slate-900">
            Diagnostic approach
          </h2>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-3">
            <p>
              <strong className="text-slate-800">
                1. Establish the compartment.
              </strong>{" "}
              Distinguish epithelial, stromal, melanocytic, and choristomatous
              lesions; note limbal, bulbar, forniceal, palpebral, or caruncular
              location.
            </p>
            <p>
              <strong className="text-slate-800">
                2. Assess epithelial integrity.
              </strong>{" "}
              For squamous lesions, separate reactive hyperplasia,
              intraepithelial dysplasia, and invasive carcinoma by cytology,
              maturation, and basement-membrane breach.
            </p>
            <p>
              <strong className="text-slate-800">
                3. For pigmented lesions, map the cells.
              </strong>{" "}
              Determine whether melanocytes are increased within epithelium,
              nested as a nevus, or invading substantia propria.
            </p>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-base font-bold">Quick diagnostic comparison</h2>
            <p className="mt-1 text-xs text-slate-500">
              Core morphologic distinction for the major conjunctival lesion
              groups.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Group</th>
                  <th className="px-4 py-3 font-semibold">Key histology</th>
                  <th className="px-4 py-3 font-semibold">
                    Diagnostic boundary
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold">
                    Reactive / degenerative
                  </td>
                  <td className="px-4 py-3">
                    Bland epithelium, reactive follicles, or actinic elastosis
                  </td>
                  <td className="px-4 py-3">
                    No epithelial dysplasia or destructive invasion
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Choristoma</td>
                  <td className="px-4 py-3">
                    Mature ectopic tissue, including skin appendages, fat,
                    cartilage, gland, or bone
                  </td>
                  <td className="px-4 py-3">
                    Mature tissue in an abnormal location; no malignant cytology
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">
                    Squamous epithelial
                  </td>
                  <td className="px-4 py-3">
                    Papillary benign proliferation → dysplasia → invasive SCC
                  </td>
                  <td className="px-4 py-3">
                    Maturation/cytologic atypia and basement-membrane breach
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Melanocytic</td>
                  <td className="px-4 py-3">
                    Basal pigment → nevus nests → atypical intraepithelial
                    growth → invasive melanoma
                  </td>
                  <td className="px-4 py-3">
                    Melanocyte density, atypia, maturation, and stromal invasion
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search diagnosis, morphology, IHC, or differential..."
            className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            {filtered.length} of {entities.length} entities
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => setExpanded(filtered.map((x) => x.name))}
              className="font-semibold text-teal-700 hover:text-teal-900"
            >
              Expand all
            </button>
            <button
              onClick={() => setExpanded([])}
              className="font-semibold text-teal-700 hover:text-teal-900"
            >
              Collapse all
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {filtered.map((item) => {
            const isOpen = expanded.includes(item.name);
            return (
              <article
                key={item.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() => toggle(item.name)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
                >
                  <span>
                    <span className="block text-sm font-bold text-slate-900">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {item.category}
                    </span>
                  </span>
                  <span className="text-xl text-slate-400">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="grid gap-5 border-t border-slate-100 px-5 py-5 lg:grid-cols-2">
                    <section>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        Clinical Profile
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.clinical}
                      </p>
                    </section>
                    <section>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        Essential Diagnostic Criteria
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {splitPoints(item.criteria).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        Histopathology and Immunophenotype
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {splitPoints(item.histology).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        Differential Diagnosis
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.differential}
                      </p>
                    </section>
                    <section className="lg:col-span-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal-700">
                        Molecular Pathology
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {item.molecular}
                      </p>
                    </section>
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
              No matching entities. Try another diagnosis, marker, or category.
            </div>
          )}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-400">
          PathologyGPS · Diagnostic Excellence
        </footer>
      </div>
    </main>
  );
}
