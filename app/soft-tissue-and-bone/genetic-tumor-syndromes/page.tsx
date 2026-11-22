"use client";

import { useMemo, useState, type ReactNode } from "react";

type Syndrome = {
  name: string;
  gene: string;
  inheritance: string;
  overview: string;
  clinical: string[];
  diagnostic: string[];
  associated: string[];
  pathology: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};

const syndromes: Syndrome[] = [
  {
    name: "Enchondromatosis (Ollier Disease and Maffucci Syndrome)",
    gene: "IDH1, IDH2",
    inheritance: "Usually non-hereditary; postzygotic somatic mosaicism",
    overview:
      "Multiple cartilaginous neoplasms in the medullary cavity or periosteum, often producing bone expansion and deformity. Maffucci syndrome is defined by associated cutaneous, soft tissue, or visceral vascular lesions.",
    clinical: [
      "Usually presents in early childhood; Ollier disease commonly causes asymmetric or unilateral enchondromas, limb-length inequality, angular deformity, finger swelling, and growth arrest.",
      "Maffucci syndrome includes vascular lesions, often spindle cell hemangiomas, in addition to skeletal enchondromas.",
      "Malignant transformation is suggested clinically by new or worsening pain and accelerated growth.",
      "Patients are at increased risk for secondary chondrosarcoma; reported risk varies substantially with skeletal distribution and is higher when long bones or pelvis are involved.",
      "Ollier disease is also associated with gliomas and juvenile granulosa cell tumors; additional tumors have been reported in Maffucci syndrome.",
    ],
    diagnostic: [
      "Diagnosis is based on the combination of clinical findings and characteristic radiographic distribution.",
      "Essential radiographic/clinical pattern: at least 2 enchondromas plus findings such as growth disturbance, typical hand/foot deformity, or columnar lucencies in long-bone metaphyses.",
      "In milder adult presentations, at least 3 usually anatomically related enchondromas may support the diagnosis even without other typical features.",
      "Maffucci syndrome requires associated vascular lesions; spindle cell hemangioma is overrepresented.",
    ],
    associated: [
      "Ollier disease: multiple enchondromas, often involving long and short tubular bones; growth disturbance and deformity are common.",
      "Maffucci syndrome: enchondromas plus dermal, subcutaneous, or visceral vascular lesions, particularly spindle cell hemangiomas.",
      "Metachondromatosis is a separate inherited disorder with enchondromas and osteochondroma-like lesions; many lesions regress in adulthood.",
    ],
    pathology: [
      "Enchondromas are well-circumscribed cartilaginous nodules and may be hypercellular with enlarged, irregular nuclei.",
      "In the setting of Ollier disease or Maffucci syndrome, increased cellularity and some nuclear atypia alone are insufficient for atypical cartilaginous tumor / chondrosarcoma, grade 1.",
      "Assessment for malignant transformation requires multidisciplinary correlation with imaging, particularly cortical destruction and soft tissue extension.",
    ],
    molecular: [
      "Most cases harbor postzygotic IDH1 or IDH2 mutations; IDH1 p.Arg132 variants predominate, especially p.Arg132Cys.",
      "Identical IDH variants may be present in multiple lesions; low-level variants may also be detectable in non-neoplastic tissue.",
      "Rare germline variants involving HIF-pathway genes and rare PTH1R variants have been reported, but are not the usual basis of Ollier disease or Maffucci syndrome.",
      "Metachondromatosis is associated with germline heterozygous loss-of-function PTPN11 variants; spondyloenchondrodysplasia is associated with biallelic ACP5 variants.",
    ],
    differential: [
      [
        "Multiple sporadic enchondromas",
        "Use the characteristic distribution, asymmetry, deformity, and associated vascular lesions to establish a syndromic pattern.",
      ],
      [
        "Metachondromatosis",
        "Inherited condition with both enchondromas and osteochondroma-like lesions, often pointing toward adjacent joints and regressing in adulthood.",
      ],
      [
        "Secondary chondrosarcoma",
        "New pain, accelerated growth, cortical destruction, marrow edema, periosteal reaction, or an extraosseous mass raise concern; atypia alone is not sufficient.",
      ],
    ],
    pitfalls: [
      "Do not diagnose ACT/CS1 from increased cellularity or mild nuclear atypia alone in an enchondromatosis background.",
      "Do not assume Ollier disease or Maffucci syndrome is inherited; both are usually caused by postzygotic mosaicism.",
      "Vascular lesions distinguish Maffucci syndrome from Ollier disease.",
    ],
  },
  {
    name: "Li–Fraumeni Syndrome",
    gene: "TP53",
    inheritance: "Autosomal dominant; de novo variants occur",
    overview:
      "Cancer-predisposition syndrome characterized by early-onset multiple primary tumors, especially soft tissue sarcomas, osteosarcoma, breast cancer, brain tumors, and adrenocortical carcinoma.",
    clinical: [
      "Core tumor spectrum: adrenocortical carcinoma, breast cancer, central nervous system tumors, osteosarcoma, and soft tissue sarcomas.",
      "Sarcomas are a substantial component of the tumor spectrum; osteosarcoma, rhabdomyosarcoma, leiomyosarcoma, and liposarcoma are represented.",
      "Rhabdomyosarcoma and osteosarcoma occur predominantly before age 19; liposarcoma and leiomyosarcoma occur more often in adults.",
      "Classic criteria include a proband with sarcoma before age 45, a first-degree relative with cancer before age 45, and a first- or second-degree relative with cancer before age 45 or sarcoma at any age.",
      "The clinical spectrum is broader than the classic family-history definition; Li–Fraumeni-like presentations may not fulfill classic criteria.",
    ],
    diagnostic: [
      "Essential: demonstration of a germline pathogenic TP53 variant and/or an appropriate family history.",
      "Consider germline testing using established clinical criteria, including the Chompret criteria and current hereditary cancer testing recommendations.",
      "A TP53 alteration detected by tumor-only sequencing is not, by itself, proof of a germline variant.",
      "Distinguish pathogenic germline variants from somatic variants, clonal hematopoiesis, polymorphisms, and variants of uncertain significance.",
    ],
    associated: [
      "Soft tissue sarcomas and osteosarcoma are defining bone/soft tissue tumor associations.",
      "Other core tumors include breast carcinoma, brain tumors, and adrenocortical carcinoma.",
      "Additional reported tumors include lymphoma, gastrointestinal malignancies, melanoma, lung cancer, ovarian and endometrial carcinomas, renal and prostate carcinomas, and ocular tumors.",
    ],
    pathology: [
      "Most tumors have no distinctive gross or histopathologic features compared with their sporadic counterparts.",
      "Rhabdomyosarcoma and Wilms tumor more often show anaplastic histology in the Li–Fraumeni setting.",
      "Abnormal p53 immunostaining, either strong diffuse nuclear staining or complete absence, may occur but does not establish a germline TP53 variant.",
    ],
    molecular: [
      "Caused by germline pathogenic variants in the TP53 tumor suppressor gene; missense variants in the DNA-binding domain are common, but truncating, splice-site, deletion, and other variants occur.",
      "Tumors commonly acquire a second hit affecting the wild-type TP53 allele.",
      "Germline confirmation requires constitutional testing; tumor sequencing alone cannot reliably establish germline status.",
    ],
    differential: [
      [
        "Li–Fraumeni-like syndrome",
        "A clinical designation for families with a suggestive but less complete tumor/family-history pattern; some cases lack an identifiable TP53 variant.",
      ],
      [
        "Other hereditary cancer-predisposition syndromes",
        "Consider additional cancer-predisposition genes when the phenotype is suggestive but TP53 testing is negative.",
      ],
      [
        "Somatic TP53 alteration or clonal hematopoiesis",
        "A TP53 variant in tumor-only or blood-based testing does not automatically indicate constitutional Li–Fraumeni syndrome.",
      ],
    ],
    pitfalls: [
      "Abnormal p53 immunohistochemistry is not a substitute for germline testing.",
      "A negative TP53 result does not explain every Li–Fraumeni-like family; the clinical phenotype and broader genetic context remain important.",
      "Radiation-associated second malignancies have been reported, but outcome differences and treatment-response predictions are not definitively established.",
    ],
  },
  {
    name: "McCune–Albright Syndrome",
    gene: "GNAS",
    inheritance: "Postzygotic somatic activating mosaic variant; not inherited",
    overview:
      "Mosaic disorder classically associated with fibrous dysplasia, hyperpigmented macules, and endocrine hyperfunction, including precocious puberty.",
    clinical: [
      "The classic triad comprises fibrous dysplasia, hyperpigmented macules, and precocious puberty; any combination may occur.",
      "The syndrome is defined by fibrous dysplasia plus at least one extraskeletal feature, or by at least two extraskeletal features.",
      "Fibrous dysplasia may be polyostotic or monostotic and commonly affects the appendicular skeleton, craniofacial bones, and spine.",
      "Endocrine manifestations include precocious puberty, hyperthyroidism, growth hormone excess, hypophosphatemia, and rarely neonatal Cushing syndrome.",
      "Malignancy risk is increased, most often through sarcomatous transformation of fibrous dysplasia; breast and thyroid carcinomas have also been reported.",
    ],
    diagnostic: [
      "Essential: at least 2 of the 3 classic clinical features, or monostotic fibrous dysplasia with demonstration of a GNAS variant.",
      "Demonstration of a somatic activating GNAS variant is desirable when two or more clinical criteria are present.",
      "Clinical expression depends on the distribution and extent of mosaicism; not all patients show the complete classic triad.",
    ],
    associated: [
      "Skeletal: fibrous dysplasia, which may cause pain, fracture, deformity, facial asymmetry, and neurologic compromise from craniofacial involvement.",
      "Skin: irregularly bordered hyperpigmented macules that typically respect the midline and may follow Blaschko lines.",
      "Endocrine: ovarian estrogen-producing cysts with precocious puberty, thyroid disease, growth hormone excess, and phosphate wasting.",
      "Other reported manifestations include hepatobiliary, pancreatic, and cardiovascular abnormalities.",
    ],
    pathology: [
      "Fibrous dysplasia consists of proliferating fibroblast-like marrow stromal cells replacing normal bone and marrow.",
      "Irregular, discontinuous trabeculae of woven bone are distributed throughout the lesion and are poorly mineralized and non-functional in orientation.",
      "Solid tumors associated with the syndrome generally resemble their sporadic counterparts.",
    ],
    molecular: [
      "Caused by postzygotic activating (gain-of-function) variants in GNAS, which encodes the Gs alpha subunit.",
      "Most variants affect p.Arg201; a smaller subset affects p.Gln227.",
      "Constitutive Gs alpha activation increases cAMP signaling; the degree and distribution of mosaicism contribute to clinical variability.",
      "Detection of a somatic GNAS variant can support diagnosis, particularly in selected or atypical presentations.",
    ],
    differential: [
      [
        "Isolated fibrous dysplasia",
        "Look for additional endocrine or cutaneous features; a GNAS variant can support McCune–Albright syndrome in monostotic disease.",
      ],
      [
        "Other causes of precocious puberty",
        "The ovarian cysts and endocrine findings occur in the setting of postzygotic GNAS mosaicism and may coexist with fibrous dysplasia and hyperpigmented macules.",
      ],
      [
        "Carney complex",
        "Can include lentigines and endocrine neoplasia, but the defining skeletal lesion in McCune–Albright syndrome is fibrous dysplasia.",
      ],
    ],
    pitfalls: [
      "The complete classic triad is not required; presentations are highly variable.",
      "A negative result from peripheral blood does not necessarily exclude a postzygotic mosaic variant in affected tissues.",
      "New pain, aggressive bone destruction, or an extraosseous mass in fibrous dysplasia warrants evaluation for malignant transformation.",
    ],
  },
  {
    name: "Multiple Osteochondromas",
    gene: "EXT1, EXT2",
    inheritance: "Autosomal dominant; variable expressivity",
    overview:
      "Hereditary disorder characterized by multiple benign cartilage-capped surface neoplasms, usually arising near the metaphyses of long bones.",
    clinical: [
      "Most patients present during the first decade with a painless bony mass, limb deformity, or impingement on adjacent structures.",
      "Osteochondromas enlarge during childhood and usually stop growing after physeal closure.",
      "Common deformities include ulnar shortening with radial bowing, valgus knee/ankle alignment, limb-length inequality, and short stature.",
      "Complications include restricted motion, bursal formation, tendon/nerve/vessel impingement, and spinal cord compression.",
      "The major neoplastic complication is secondary peripheral ACT/CS1 or higher-grade chondrosarcoma; new growth after puberty, worsening pain, or an adult cartilage cap thicker than 2–3 cm is concerning.",
    ],
    diagnostic: [
      "Essential: at least 2 radiographically demonstrated osteochondromas in the juxta-epiphyseal region of long bones and/or a proven germline pathogenic variant in EXT1 or EXT2.",
      "Radiographic continuity of the cortex and medullary cavity of the lesion with the parent bone is the hallmark.",
      "Germline molecular testing is not mandatory when clinical and radiographic findings are characteristic.",
      "MRI is useful for evaluating cartilage cap thickness and suspected complications.",
    ],
    associated: [
      "Osteochondromas occur in bones formed by endochondral ossification, especially long bones; ribs, spine, and pelvis may also be involved.",
      "Langer–Giedion syndrome (TRPS2) may include craniofacial dysmorphism and intellectual disability due to a contiguous deletion including EXT1 and TRPS1.",
      "Potocki–Shaffer syndrome may include enlarged parietal foramina and craniofacial abnormalities due to a deletion including EXT2 and ALX4.",
    ],
    pathology: [
      "Individual lesions are histopathologically similar to sporadic osteochondromas.",
      "Secondary peripheral chondrosarcoma may be difficult to distinguish from osteochondroma on histology alone; clinical and radiographic findings, including cartilage cap thickness, are essential.",
      "Malignant transformation most often produces secondary peripheral ACT/CS1, but grade 2 or 3 chondrosarcoma may occur.",
    ],
    molecular: [
      "Caused by germline inactivating variants or deletions involving EXT1 (8q24.11) or EXT2 (11p11.2).",
      "A second somatic hit leads to biallelic inactivation in the developing osteochondroma.",
      "EXT1 and EXT2 encode proteins involved in heparan sulfate polymerization and signaling pathways including Hedgehog, BMP, FGFR3, and WNT/β-catenin.",
      "Pathogenic variants are identified in approximately 70–95% of affected individuals in the supplied source.",
    ],
    differential: [
      [
        "Metachondromatosis",
        "May show both enchondromas and osteochondroma-like lesions; associated with PTPN11 rather than EXT1/EXT2.",
      ],
      [
        "Dysplasia epiphysealis hemimelica (Trevor disease)",
        "Distinguished by its characteristic epiphyseal distribution and absence of the EXT1/EXT2 hereditary multiple osteochondroma pattern.",
      ],
      [
        "Secondary peripheral chondrosarcoma",
        "Consider new growth after skeletal maturity, increasing pain, and an adult cartilage cap thicker than 2–3 cm; integrate imaging and histology.",
      ],
    ],
    pitfalls: [
      "Histology alone may not distinguish an osteochondroma from secondary peripheral ACT/CS1.",
      "Do not rely on a negative germline test to exclude a clinically and radiographically characteristic case.",
      "All patients require follow-up; the source does not identify a reliable protective or risk factor for malignant transformation.",
    ],
  },
  {
    name: "Neurofibromatosis Type 1",
    gene: "NF1",
    inheritance:
      "Autosomal dominant; de novo and postzygotic mosaic variants occur",
    overview:
      "Tumor-predisposition syndrome characterized by multiple pigmentary, neural, and skeletal findings, with increased risk of benign and malignant tumors in nervous and non-nervous systems.",
    clinical: [
      "Typical findings include multiple café-au-lait macules, axillary/inguinal freckling, Lisch nodules, and choroidal abnormalities.",
      "Skeletal manifestations include scoliosis, sphenoid wing dysplasia, non-ossifying fibromas, and congenital tibial bowing with fracture or pseudarthrosis.",
      "Plexiform neurofibromas occur in approximately 30–50% of individuals; the lifetime risk of MPNST is approximately 11.7–15.8% in the cited source.",
      "Other associated tumors include GIST, pheochromocytoma, breast cancer before age 50, rhabdomyosarcoma in young children, and optic pathway glioma.",
      "A bone or soft tissue tumor may be the sentinel presentation of previously unrecognized NF1.",
    ],
    diagnostic: [
      "Diagnosis is clinical, based on established NIH criteria and revised criteria for constitutional and mosaic NF1.",
      "A pathogenic NF1 variant is detectable in up to approximately 95% of individuals with a clinical diagnosis in the cited source.",
      "Consider mosaic NF1 when findings are segmental or limited; the variant may be detectable only in affected tissue and not peripheral blood.",
      "In a child with café-au-lait macules and a malignant tumor, constitutional mismatch repair deficiency should also be considered.",
    ],
    associated: [
      "Peripheral nerve sheath: cutaneous and plexiform neurofibromas; ANNUBP may precede MPNST.",
      "Bone: non-ossifying fibromas, tibial dysplasia/pseudarthrosis, and scoliosis.",
      "Other soft tissue/systemic tumors: GIST (often multifocal and KIT/PDGFRA/BRAF/SDH-wildtype), glomus tumor, pheochromocytoma, and embryonal rhabdomyosarcoma.",
      "CNS: optic pathway glioma and other gliomas, particularly pilocytic astrocytoma in children.",
    ],
    pathology: [
      "Most NF1-associated tumors are histopathologically similar to their sporadic counterparts.",
      "MPNST commonly arises from a pre-existing neurofibroma, either abruptly or through ANNUBP.",
      "MPNST may show loss of S100/SOX10 and H3K27me3, although loss may be less frequent than in sporadic MPNST.",
      "NF1-associated GISTs are usually KIT-, PDGFRA-, BRAF-, and SDH-wildtype and often show spindle cells with skeinoid fibers.",
    ],
    molecular: [
      "NF1 is a tumor suppressor gene at 17q11.2 encoding neurofibromin, a negative regulator of RAS/MAPK signaling.",
      "Tumor development may involve a second hit in NF1.",
      "ANNUBP may acquire CDKN2A/CDKN2B deletion; progression to MPNST is associated with additional PRC2 gene alterations and, less commonly, TP53 alterations.",
      "An NF1 microdeletion including SUZ12 is associated with increased MPNST risk.",
      "For mosaic disease, testing affected tissue may be necessary when peripheral blood testing is negative.",
    ],
    differential: [
      [
        "Legius syndrome",
        "Can resemble NF1 clinically with pigmentary findings; NF1-associated neurofibromas and other tumors are generally absent in the specific NF1 genotype–phenotype subsets described in the source.",
      ],
      [
        "Constitutional mismatch repair deficiency",
        "Consider in children with café-au-lait macules and malignant tumors.",
      ],
      [
        "ANNUBP versus MPNST",
        "ANNUBP is a precursor lesion with increased transformation risk; assess morphology and additional molecular alterations, including CDKN2A/CDKN2B and PRC2 pathway changes.",
      ],
    ],
    pitfalls: [
      "A negative blood test does not exclude mosaic NF1; affected tissue may be required.",
      "Loss of H3K27me3 or Schwann cell markers is supportive in context but is not independently diagnostic of NF1-associated MPNST.",
      "Do not overlook NF1 when a characteristic associated tumor presents before the syndrome has been recognized.",
    ],
  },
  {
    name: "Paget Disease of Bone",
    gene: "PFN1, SQSTM1, TNFRSF11A, TNFRSF11B, ZNF687",
    inheritance:
      "Genetic predisposition; commonly autosomal dominant with incomplete penetrance and variable expressivity",
    overview:
      "Disorder of abnormal osteoclastic and osteoblastic activity producing enlarged, weakened bone with disorganized architecture; a minority of cases have an identifiable hereditary basis.",
    clinical: [
      "Usually affects adults aged 50 years or older; may be discovered incidentally or through elevated serum alkaline phosphatase.",
      "Common sites include pelvis, lumbar spine, long bones, and skull; disease may be monostotic or polyostotic.",
      "Symptoms include bone pain, deformity, pathologic fracture, hearing loss, and spinal stenosis.",
      "Radiographs may show osteolysis, cortical thickening, coarse trabeculae, bone enlargement, and sclerosis.",
      "Malignant transformation is uncommon (<1% in the cited source); Paget-associated sarcomas are usually high-grade osteosarcomas and have poor outcomes.",
    ],
    diagnostic: [
      "Essential: lamellar bone in a mosaic pattern with prominent cement lines, together with compatible radiographic findings.",
      "Osteoclasts and osteoblasts may be prominent in active phases or inconspicuous in the sclerotic phase.",
      "Serum total alkaline phosphatase is a first-line biochemical screen for metabolically active disease.",
      "Bone scintigraphy can assess disease activity and distribution; CT/MRI evaluate complications.",
    ],
    associated: [
      "Paget disease may be associated with giant cell tumor of bone, particularly in severe hereditary forms involving ZNF687 or PFN1.",
      "Pagetoid sarcoma follows the distribution of Paget disease and is predominantly high-grade osteosarcoma.",
      "Secondary sarcoma is rare but should be considered when a previously affected site develops new pain, aggressive destruction, or a soft tissue mass.",
    ],
    pathology: [
      "Three phases are recognized: an initial osteolytic phase, a mixed lytic/sclerotic phase, and a late sclerotic phase.",
      "The mixed phase shows disorganized lamellar bone in a mosaic pattern with conspicuous basophilic cement lines.",
      "The active lytic phase has numerous osteoclasts in Howship lacunae; osteoclasts may be enlarged and multinucleated.",
      "In the late sclerotic phase, bone is thickened and marrow is replaced by fibrovascular tissue.",
    ],
    molecular: [
      "Familial cases are often associated with SQSTM1 variants, particularly in the ubiquitin-binding domain; variants are less frequent in sporadic cases.",
      "TNFRSF11A and TNFRSF11B variants are associated with dominant and recessive forms, respectively.",
      "PFN1 and ZNF687 variants have been detected in severe Paget disease associated with giant cell tumor of bone.",
      "Pathogenesis involves dysregulated osteoclastogenesis and RANKL signaling; SQSTM1/p62 variants may impair CYLD-mediated inhibition of TRAF6 signaling.",
    ],
    differential: [
      [
        "Fibrous dysplasia",
        "Paget disease shows mosaic lamellar bone with prominent cement lines; fibrous dysplasia typically shows irregular woven-bone trabeculae in fibroblastic stroma.",
      ],
      [
        "Chronic osteomyelitis / reactive remodeling",
        "Integrate the characteristic radiographic distribution and mosaic lamellar-bone architecture.",
      ],
      [
        "Paget-associated osteosarcoma",
        "New aggressive destruction or a soft tissue mass in a Paget-affected bone should prompt evaluation for secondary sarcoma.",
      ],
    ],
    pitfalls: [
      "The mosaic pattern with prominent cement lines is the key histologic clue.",
      "Do not mistake the enlarged, sometimes hypermultinucleated osteoclasts of Paget disease for a giant cell neoplasm.",
      "Malignant transformation is rare, but new symptoms or aggressive imaging findings require further evaluation.",
    ],
  },
];

const sections = [
  "All",
  "Enchondromatosis",
  "Li–Fraumeni",
  "McCune–Albright",
  "Multiple Osteochondromas",
  "NF1",
  "Paget Disease",
] as const;

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 text-sm leading-6 text-slate-700 list-disc">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function GeneticTumorSyndromesPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string>(
    "Enchondromatosis (Ollier Disease and Maffucci Syndrome)",
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return syndromes.filter((s) => {
      const sectionMatch =
        active === "All" ||
        (active === "Enchondromatosis" &&
          s.name.startsWith("Enchondromatosis")) ||
        (active === "Li–Fraumeni" && s.name.startsWith("Li–Fraumeni")) ||
        (active === "McCune–Albright" &&
          s.name.startsWith("McCune–Albright")) ||
        (active === "Multiple Osteochondromas" &&
          s.name.startsWith("Multiple Osteochondromas")) ||
        (active === "NF1" && s.name.startsWith("Neurofibromatosis")) ||
        (active === "Paget Disease" && s.name.startsWith("Paget Disease"));
      const text = [
        s.name,
        s.gene,
        s.inheritance,
        s.overview,
        ...s.clinical,
        ...s.diagnostic,
        ...s.associated,
        ...s.pathology,
        ...s.molecular,
        ...s.differential.flat(),
        ...s.pitfalls,
      ]
        .join(" ")
        .toLowerCase();
      return sectionMatch && (!q || text.includes(q));
    });
  }, [active, query]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl bg-slate-900 p-6 text-white md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
            PathologyGPS · Bone & Soft Tissue
          </p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            Genetic Tumor Syndromes
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            A morphology- and phenotype-oriented guide to six syndromes
            associated with bone and soft tissue tumors. Focus on recognition,
            essential diagnostic criteria, associated neoplasms, and practical
            differential diagnosis.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1.5">
              6 syndromes
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">
              Clinical criteria
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">
              Molecular genetics
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5">
              Differential diagnosis
            </span>
          </div>
        </header>

        <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-slate-600">
              Search syndromes and diagnostic features
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search gene, tumor, feature, or diagnosis..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>
          <div>
            <span className="mb-1 block text-xs font-semibold text-slate-600">
              Syndrome
            </span>
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActive(section)}
                  className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${
                    active === section
                      ? "border-teal-700 bg-teal-700 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-teal-500"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((s) => {
            const isOpen = expanded === s.name;
            return (
              <article
                key={s.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? "" : s.name)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left hover:bg-slate-50 md:p-6"
                >
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-slate-900 md:text-lg">
                      {s.name}
                    </h2>
                    <p className="mt-1 text-xs font-semibold text-teal-700">
                      Gene: {s.gene}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {s.overview}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 bg-slate-50/60 p-4 md:p-6">
                    <div className="mb-4 rounded-xl border border-teal-100 bg-teal-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-teal-800">
                        Inheritance / genetic mechanism
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {s.inheritance}
                      </p>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      <Panel title="Clinical Recognition">
                        <BulletList items={s.clinical} />
                      </Panel>
                      <Panel title="Essential Diagnostic Criteria">
                        <BulletList items={s.diagnostic} />
                      </Panel>
                      <Panel title="Associated Bone & Soft Tissue Tumors">
                        <BulletList items={s.associated} />
                      </Panel>
                      <Panel title="Histopathology">
                        <BulletList items={s.pathology} />
                      </Panel>
                      <Panel title="Molecular Pathology">
                        <BulletList items={s.molecular} />
                      </Panel>
                      <Panel title="Differential Diagnosis">
                        <div className="space-y-3">
                          {s.differential.map(([name, distinction]) => (
                            <div
                              key={name}
                              className="border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                            >
                              <p className="text-sm font-semibold text-slate-900">
                                {name}
                              </p>
                              <p className="mt-1 text-sm leading-6 text-slate-700">
                                {distinction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Panel>
                      <div className="lg:col-span-2">
                        <Panel title="Diagnostic Pitfalls">
                          <BulletList items={s.pitfalls} />
                        </Panel>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
              No matching syndrome or diagnostic feature found.
            </div>
          )}
        </div>

        <footer className="border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
          PathologyGPS · Bone and Soft Tissue Genetic Tumor Syndromes.
          Educational reference; interpret molecular findings in the clinical
          and morphologic context.
        </footer>
      </div>
    </main>
  );
}
