"use client";

import { useMemo, useState } from "react";

type Syndrome = {
  name: string;
  inheritance: string;
  genes: string;
  clinical: string[];
  tumors: string;
  histology: string[];
  ihc: string[];
  molecular: string[];
  criteria: string[];
  differential: [string, string][];
  notes: string[];
};

const syndromes: Syndrome[] = [
  {
    name: "Familial Melanoma",
    inheritance:
      "Usually autosomal dominant in high-risk families; polygenic susceptibility also occurs",
    genes:
      "CDKN2A (most common); CDK4; rare high-penetrance genes: BAP1, POT1, ACD, TERF2IP, TERT, ATM, EBF3. Moderate-risk genes include MC1R, MITF, and SLC45A2.",
    clinical: [
      "Generally defined by melanoma in two or more first-degree relatives.",
      "Melanoma often develops approximately 10 years earlier than in the general population in CDKN2A- or CDK4-associated families.",
      "Multiple primary melanomas are common.",
      "Atypical (dysplastic) nevi may be present, but are not required.",
      "CDKN2A families may also show increased pancreatic cancer risk; smoking-related cancers have been reported in some founder-variant families.",
    ],
    tumors:
      "Cutaneous melanoma; familial uveal melanoma is less common and may be associated with BAP1 or MBD4. CDKN2A is also associated with pancreatic cancer.",
    histology: [
      "Familial melanomas in CDKN2A carriers often show superficial spreading melanoma morphology.",
      "Increased pigmentation and pagetoid scatter have been described.",
      "Spindle-cell morphology in the vertical growth phase was a strong negative predictor of CDKN2A carrier status in one study.",
      "Acral and mucosal familial melanoma has not been reported in the cited source.",
    ],
    ihc: [
      "No syndrome-specific immunophenotype is established; evaluate the melanoma using the usual site- and subtype-directed panel.",
    ],
    molecular: [
      "Germline CDKN2A variants are the most common established cause of familial clustering; CDKN2A encodes p16INK4a, which binds CDK4.",
      "Activating germline CDK4 variants also confer melanoma susceptibility.",
      "CDKN2A or CDK4 variants are identified in approximately 30–40% of families with at least three melanoma cases.",
      "Rare susceptibility genes include BAP1, POT1, ACD, TERF2IP, TERT, ATM, and EBF3; each is found in fewer than 1% of familial melanoma families in the source.",
      "MC1R, MITF, and SLC45A2 contribute moderate-penetrance pigmentation-related susceptibility; multiple low- and medium-risk loci contribute polygenic risk.",
    ],
    criteria: [
      "Establish a detailed pedigree, including the number and relationship of affected relatives, age at diagnosis, multiple primary melanomas, and associated cancers.",
      "The usual clinical definition is melanoma in two or more first-degree relatives.",
      "Consider germline testing when the family history and geographic/family-specific criteria support inherited susceptibility.",
      "Germline sequencing is often required; the source notes that diagnostic criteria vary by geography and patient age.",
    ],
    differential: [
      [
        "BAP1-related tumor predisposition syndrome",
        "Consider when multiple BAP1-inactivated melanocytic tumors, uveal melanoma, mesothelioma, or renal cell carcinoma occur in the family.",
      ],
      [
        "Xeroderma pigmentosum",
        "Usually presents in childhood with marked UV sensitivity, early freckling, ocular findings, and multiple UV-related skin cancers; autosomal recessive DNA-repair disorder.",
      ],
      [
        "Sporadic multiple primary melanoma",
        "A family history may be absent; assess age, nevus phenotype, UV exposure, and germline risk factors.",
      ],
    ],
    notes: [
      "The supplied source does not provide a single characteristic histologic pattern or syndrome-specific IHC profile.",
      "The source reports no large histopathologic/outcome series for familial melanoma.",
      "Do not equate a family history alone with a confirmed germline syndrome.",
    ],
  },
  {
    name: "BAP1-Related Tumor Predisposition Syndrome",
    inheritance: "Autosomal dominant",
    genes:
      "BAP1 (heterozygous germline loss-of-function variant or deletion; chromosome 3p21)",
    clinical: [
      "Multiple BAP1-inactivated melanocytic nevi/tumors often begin in the second decade.",
      "Skin lesions are typically multiple, subtle, skin-colored to reddish-brown, dome-shaped papules measuring approximately 4–12 mm, often on sun-exposed skin.",
      "The number of cutaneous lesions ranges from a few to more than 50.",
      "Associated tumors include uveal and cutaneous melanoma, pleural/peritoneal mesothelioma, clear cell renal cell carcinoma, and basal cell carcinoma.",
      "Patients tend to develop associated tumors at a younger age than the general population.",
    ],
    tumors:
      "BAP1-inactivated melanocytic nevi/tumors; uveal and cutaneous melanoma; pleural and peritoneal mesothelioma; clear cell renal cell carcinoma; basal cell carcinoma. Additional reported tumors include meningioma, cholangiocarcinoma, and hepatocellular carcinoma.",
    histology: [
      "BAP1-inactivated melanocytic lesions are predominantly intradermal, with occasional junctional involvement.",
      "Most lesions contain conventional small nevus cells admixed with larger epithelioid melanocytes.",
      "Epithelioid cells range from mildly atypical to markedly pleomorphic cells with abundant amphophilic cytoplasm, vesicular nuclei, and prominent nucleoli.",
      "Some lesions show increased cellularity, nuclear pleomorphism, or increased mitotic activity.",
      "The spectrum ranges from BAP1-inactivated melanocytic nevus to BAP1-inactivated melanocytoma with uncertain clinical behavior.",
      "Mitotic activity is usually low, and tumor-infiltrating lymphocytes are frequent.",
    ],
    ihc: [
      "Loss of nuclear BAP1 expression supports BAP1 inactivation in the melanocytic lesion.",
      "BAP1 loss in a tumor is not by itself proof of a germline syndrome because somatic BAP1 inactivation also occurs.",
    ],
    molecular: [
      "The syndrome is caused by heterozygous germline BAP1 loss-of-function variants or deletions.",
      "Associated tumors commonly show biallelic BAP1 loss, with loss of nuclear BAP1 by IHC.",
      "Cutaneous BAP1-inactivated melanocytic tumors commonly harbor MAPK-pathway activation, most often BRAF p.V600E; NRAS mutations or RAF1 fusions are less common.",
      "Confirm the syndrome by germline DNA testing; tumor IHC alone is insufficient.",
    ],
    criteria: [
      "Suspect the syndrome in patients with multiple BAP1-inactivated melanocytic nevi/tumors or a young-onset combination of associated tumors.",
      "Confirm by identifying a pathogenic loss-of-function BAP1 germline variant or a germline deletion involving BAP1.",
      "Correlate tumor BAP1 IHC with personal and family history.",
    ],
    differential: [
      [
        "Conventional melanocytic nevus",
        "Lacks the characteristic epithelioid component and BAP1 loss in the lesional cells.",
      ],
      [
        "Spitz nevus / Spitz melanocytoma",
        "Can show epithelioid cytology; integrate architecture, cytologic spectrum, BAP1 IHC, and germline context.",
      ],
      [
        "Sporadic BAP1-deficient tumor",
        "Somatic BAP1 loss may occur without germline predisposition; germline testing is required to establish BAP1-TPDS.",
      ],
    ],
    notes: [
      "BAP1-inactivated melanocytic nevi generally have a good prognosis and rarely metastasize.",
      "The exact lifetime risks for individual associated tumors remain uncertain in the supplied source.",
      "UV exposure and asbestos exposure may modify melanoma and mesothelioma risk, respectively.",
    ],
  },
  {
    name: "Xeroderma Pigmentosum",
    inheritance: "Autosomal recessive",
    genes:
      "XPA, ERCC3 (XPB), XPC, ERCC2 (XPD), DDB2 (XPE), ERCC4 (XPF), ERCC5 (XPG), and POLH (XPV)",
    clinical: [
      "Marked UV sensitivity; approximately half have severe sunburn after minimal exposure, while the remainder may tan relatively normally.",
      "Freckle-like hyperpigmented macules develop on sun-exposed skin, usually before age 2 years.",
      "Multiple basal cell carcinomas, squamous cell carcinomas, and melanomas occur at unusually young ages.",
      "Ocular findings include photophobia, conjunctival inflammation, keratitis, corneal scarring, and eyelid abnormalities.",
      "Neurologic abnormalities occur in approximately 25% of cases and may include sensorineural hearing loss, microcephaly, spasticity, and seizures.",
    ],
    tumors:
      "Multiple cutaneous basal cell carcinoma, squamous cell carcinoma, and melanoma; increased risks of CNS tumors, myelodysplasia/acute myeloid leukemia, gynecologic tumors, and thyroid tumors.",
    histology: [
      "Skin cancers in XP have the same histologic morphology as their sporadic counterparts.",
      "The syndrome is recognized clinically and genetically rather than by a unique tumor histology.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is described in the supplied source.",
    ],
    molecular: [
      "XP results from defective nucleotide excision repair (XPA–XPG) or defective translesion DNA synthesis (POLH/XPV).",
      "XPC and DDB2/XPE impair global-genome repair while transcription-coupled repair is preserved; neurologic involvement is generally absent in these groups.",
      "XPA, XPB/ERCC3, XPD/ERCC2, XPF/ERCC4, and some XPG cases may have defects in both global-genome and transcription-coupled repair and may develop neurologic abnormalities.",
      "DNA sequencing identifies the complementation group; cultured fibroblasts show hypersensitivity to UV-induced cell killing.",
    ],
    criteria: [
      "Clinical abnormalities of skin and eyes, together with family history, are the essential clinical basis for diagnosis.",
      "Confirm with DNA sequencing and/or specialized cellular testing for UV hypersensitivity and DNA-repair deficiency.",
      "Chromosomal breakage studies and cultured fibroblast UV-sensitivity assays may support the diagnosis.",
      "Identify the specific complementation group when possible.",
    ],
    differential: [
      [
        "Constitutional photosensitivity disorders",
        "Use the characteristic early freckling, ocular involvement, skin-cancer burden, and nucleotide-excision-repair testing to support XP.",
      ],
      [
        "Familial melanoma",
        "Familial melanoma is defined by melanoma clustering and does not produce the characteristic childhood UV sensitivity and early freckling of XP.",
      ],
      [
        "Sporadic UV-related skin cancer",
        "The extreme early-onset and multiplicity of cancers, with ocular and sometimes neurologic findings, favor XP.",
      ],
    ],
    notes: [
      "In patients younger than 20 years, the risk of skin cancer at UV-exposed sites is reported to be more than 1000-fold higher than in the general population.",
      "The median age of non-melanoma skin cancer onset in the US source cohort was 9 years.",
      "The source emphasizes lifelong photoprotection and early detection of cutaneous and internal malignancies.",
    ],
  },
  {
    name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
    inheritance: "Autosomal dominant",
    genes: "PTCH1 (most common), SUFU, and rarely GPR161",
    clinical: [
      "Multiple basal cell carcinomas may arise on both sun-exposed and non-sun-exposed skin, often after age 10 years.",
      "Odontogenic keratocysts commonly arise in the posterior mandibular ramus, often beginning in adolescence; mean reported onset is approximately 15.5 years.",
      "Palmar and plantar pits, macrocephaly, falx/tentorium/sella calcification, and bifid or fused ribs are characteristic findings.",
      "Medulloblastoma typically occurs in early childhood, often before age 5 years and frequently before age 2 years.",
      "Other findings include ovarian fibroma, facial/skeletal anomalies, and additional CNS tumors.",
    ],
    tumors:
      "Multiple basal cell carcinomas; odontogenic keratocysts; desmoplastic/nodular medulloblastoma; ovarian fibroma and other less common tumors.",
    histology: [
      "Basal cell carcinomas show conventional BCC morphology; no unique syndrome-specific subtype is required.",
      "Basaloid nests may show peripheral palisading, stromal clefting, stromal mucin, and infundibulocystic differentiation.",
      "Nearly all associated medulloblastomas show nodular histology, usually desmoplastic/nodular medulloblastoma or medulloblastoma with extensive nodularity.",
      "Odontogenic keratocysts show a thin epithelial lining without rete ridges, corrugated parakeratin, and palisaded hyperchromatic basal cells.",
      "Basal budding and microcysts in the cyst wall are more frequent in syndrome-associated odontogenic keratocysts.",
    ],
    ihc: [
      "No syndrome-specific IHC profile is described; evaluate each associated neoplasm according to its tumor-specific diagnostic workup.",
    ],
    molecular: [
      "Constitutional inactivating variants in PTCH1 or SUFU cause most cases; GPR161 variants are reported exceptionally.",
      "PTCH1 and SUFU are tumor suppressors in the sonic hedgehog pathway; loss of the remaining normal allele activates SHH signaling.",
      "PTCH1/SUFU sequencing and deletion/duplication analysis identify most constitutional variants; a subset remains molecularly unexplained.",
      "SUFU-associated disease carries a substantially higher medulloblastoma risk than PTCH1-associated disease in the cited source (approximately 20% versus 1–2%).",
    ],
    criteria: [
      "Assess the combination of multiple BCCs, odontogenic keratocysts, palmar/plantar pits, skeletal anomalies, and intracranial calcifications.",
      "Desmoplastic/nodular medulloblastoma in a very young child should prompt evaluation for Gorlin syndrome.",
      "Confirm with constitutional PTCH1 and SUFU sequencing plus deletion/duplication analysis.",
      "Consider genetic counseling and testing in young children with extensive nodular/desmoplastic medulloblastoma.",
    ],
    differential: [
      [
        "Multiple sporadic basal cell carcinomas",
        "Usually lack the combination of jaw keratocysts, palmar/plantar pits, skeletal anomalies, and characteristic family history.",
      ],
      [
        "Other hereditary BCC predisposition",
        "Correlate age, associated developmental findings, and PTCH1/SUFU pathway testing.",
      ],
      [
        "Sporadic medulloblastoma",
        "Desmoplastic/nodular morphology in a child younger than 5 years raises suspicion; constitutional PTCH1/SUFU testing is required.",
      ],
    ],
    notes: [
      "Radiation treatment for medulloblastoma may induce multiple secondary BCCs and other tumors in the radiation field.",
      "Avoid unnecessary radiation exposure when syndrome status can influence treatment planning.",
      "The source notes substantial cumulative BCC burden and recommends surveillance.",
    ],
  },
  {
    name: "Carney Complex",
    inheritance: "Autosomal dominant",
    genes:
      "PRKAR1A (germline inactivating alterations in approximately 62%); less commonly PDE8B, PDE11A, and PRKACA amplification; PRKACB copy testing may be relevant in selected cases",
    clinical: [
      "Often diagnosed in the early 20s; manifestations and tumors accumulate over time.",
      "Spotty pigmentation/lentigines commonly involve the lips, periocular skin, conjunctiva, and genital region.",
      "Cardiac myxomas may be an early and clinically important manifestation.",
      "Endocrine findings include primary pigmented nodular adrenocortical disease with ACTH-independent Cushing syndrome, acromegaly, and multiple thyroid nodules.",
      "Other manifestations include cutaneous/mucosal myxomas, melanocytic nevi, pigmented melanotic schwannoma, and gonadal tumors.",
    ],
    tumors:
      "Cardiac and cutaneous/mucosal myxomas; melanocytic nevi; psammomatous melanotic schwannoma; primary pigmented nodular adrenocortical disease; pituitary, thyroid, and gonadal tumors; osteochondromyxoma and selected breast/pancreatic/liver tumors.",
    histology: [
      "The supplied source does not provide a syndrome-specific histologic description; associated tumors generally resemble their sporadic counterparts.",
      "Cutaneous and cardiac myxomas, melanocytic lesions, and psammomatous melanotic schwannomas are important pathology-associated manifestations.",
      "Pigmented melanotic schwannoma is an important exception because it may metastasize and be lethal.",
    ],
    ihc: [
      "No single syndrome-specific IHC profile is described; apply tumor-specific immunohistochemistry to the individual lesion.",
    ],
    molecular: [
      "Germline inactivating PRKAR1A alterations are identified in approximately 62% of cases.",
      "Less common alterations involve PDE8B or PDE11A; germline PRKACA amplification is also reported.",
      "PRKAR1A inactivation increases protein kinase A activity through the cAMP signaling pathway.",
      "Molecular diagnosis may include PRKAR1A/PDE8B/PDE11A sequencing and PRKACA/PRKACB copy-number testing.",
    ],
    criteria: [
      "The source requires at least two major diagnostic criteria, confirmed by laboratory testing, histopathology, or imaging.",
      "In the presence of one supplemental criterion, a single clinical manifestation is sufficient.",
      "Major criteria include characteristic spotty pigmentation, myxomas, specified endocrine tumors/hyperactivity, pigmented melanotic schwannoma, osteochondromyxoma, and breast adenomas.",
      "Supplemental criteria include an affected first-degree relative or a pathogenic inactivating germline PRKAR1A variant.",
    ],
    differential: [
      [
        "Isolated cardiac myxoma",
        "A single myxoma does not establish Carney complex; assess characteristic pigmentation, endocrine lesions, other tumors, and family history.",
      ],
      [
        "Other lentiginosis syndromes",
        "Carney complex is supported by the combination of lentigines with myxomas, endocrine abnormalities, and pigmented melanotic schwannoma.",
      ],
      [
        "Sporadic melanotic schwannoma",
        "Evaluate for additional Carney complex manifestations and germline PRKAR1A-pathway alterations.",
      ],
    ],
    notes: [
      "Most associated tumors are benign and slow-growing.",
      "Cardiac myxomas can cause catastrophic complications because of their location, despite benign histology.",
      "Pigmented melanotic schwannoma is the major malignant-behavior exception.",
    ],
  },
  {
    name: "Muir–Torre Syndrome",
    inheritance:
      "Autosomal dominant; a cutaneous phenotype within Lynch syndrome",
    genes:
      "MLH1, MSH2, MSH6, or PMS2; MSH2 is most commonly associated. A similar phenotype may occur with inherited MUTYH pathogenic variants.",
    clinical: [
      "Characterized by sebaceous neoplasms and/or keratoacanthomas in association with visceral malignancy.",
      "Sebaceous adenoma is the strongest cutaneous indicator; sebaceoma and sebaceous carcinoma are also associated.",
      "Multiple sebaceous neoplasms or sebaceous tumors outside the head and neck are particularly suspicious.",
      "Cystic keratoacanthomas may be multiple, occur in younger patients, and arise at sites without chronic sun exposure.",
      "Associated visceral cancers include colorectal, endometrial, gastric, small bowel, ovarian, hepatobiliary, pancreatic, urinary tract, renal, brain, and prostate tumors.",
    ],
    tumors:
      "Sebaceous adenoma, sebaceoma, sebaceous carcinoma, and keratoacanthoma; visceral malignancies, especially colorectal adenocarcinoma (reported in approximately 50% of patients in the source).",
    histology: [
      "The source does not describe a unique syndrome-specific histology; sebaceous neoplasms and visceral tumors are morphologically evaluated by their usual criteria.",
      "Sebaceous hyperplasia is not considered an Muir–Torre-associated neoplasm in the source.",
      "Keratoacanthomas may show sebaceous differentiation.",
    ],
    ihc: [
      "Assess nuclear expression of MLH1, PMS2, MSH2, and MSH6 in the tumor.",
      "Loss of MSH2 alone or with MSH6 suggests an MSH2 pathway defect.",
      "Loss of MLH1 alone or with PMS2 suggests MLH1 inactivation or acquired MLH1 promoter methylation.",
      "Retained MMR protein expression does not completely exclude functional MMR deficiency.",
    ],
    molecular: [
      "The syndrome is caused by a constitutional pathogenic variant in an MMR gene; definitive diagnosis requires germline testing.",
      "Biallelic somatic inactivation produces MMR deficiency and microsatellite instability.",
      "Tumor MSI testing by PCR correlates with MMR IHC, but colorectal-derived MSI markers may be less sensitive in sebaceous neoplasms.",
      "MMR deficiency in a sebaceous tumor is a screening clue, not proof of a germline syndrome; integrate age, personal/family history, and multiplicity.",
    ],
    criteria: [
      "Suspect Muir–Torre syndrome in patients with multiple sebaceous neoplasms and one or more visceral malignancies.",
      "Demonstrate tumor MMR deficiency by IHC and/or MSI testing when indicated.",
      "Confirm the Muir–Torre/Lynch syndrome diagnosis by identifying a constitutional/germline pathogenic variant in an MMR gene.",
      "Interpret MMR IHC in the context of personal history, family history, age, number of sebaceous tumors, and tumor site.",
    ],
    differential: [
      [
        "Sporadic sebaceous neoplasm",
        "Many sebaceous tumors are sporadic; MMR loss alone has limited positive predictive value for a germline defect.",
      ],
      [
        "Lynch syndrome without Muir–Torre phenotype",
        "Muir–Torre is the cutaneous sebaceous-neoplasm/keratoacanthoma phenotype within the Lynch spectrum.",
      ],
      [
        "MUTYH-associated phenotype",
        "The source notes that inherited MUTYH variants can produce a similar phenotype; germline testing distinguishes the underlying syndrome.",
      ],
    ],
    notes: [
      "Sebaceous hyperplasia should not be counted as a Muir–Torre-associated sebaceous neoplasm.",
      "Approximately one half to two thirds of unselected sebaceous neoplasms may show deficient MMR protein expression, most of which are sporadic.",
      "The source reports that MMR deficiency rates vary by site and tumor type; clinical correlation and germline testing are essential.",
    ],
  },
  {
    name: "Brooke–Spiegler Syndrome and Related CYLD Cutaneous Syndromes",
    inheritance: "Autosomal dominant; mosaic presentations may occur",
    genes:
      "CYLD (heterozygous germline pathogenic variants; chromosome 16q12–q13)",
    clinical: [
      "Multiple cutaneous spiradenomas, cylindromas, spiradenocylindromas, and/or trichoepitheliomas typically begin around puberty.",
      "Spiradenomas, cylindromas, and spiradenocylindromas commonly affect the head and neck and may number dozens to hundreds.",
      "Trichoepitheliomas often present as bilateral small papules on the nasolabial folds and face.",
      "Lesion number and size increase over time; unilateral clustering may indicate genetic mosaicism.",
      "Rapid growth, ulceration, or bleeding, particularly in older patients, raises concern for malignant transformation.",
      "Salivary gland tumors occur in approximately 1–2% of cases, usually as membranous basal cell adenoma of the parotid.",
    ],
    tumors:
      "Cutaneous spiradenoma, cylindroma, spiradenocylindroma, and trichoepithelioma; rare salivary gland membranous basal cell adenoma; rare malignant transformation and pulmonary metastasis.",
    histology: [
      "Spiradenoma is composed of basaloid cells in trabecular, reticular, or solid patterns, admixed with pale cells and conspicuous lymphocytes.",
      "Spiradenoma may contain tubular structures and PAS-positive hyaline basement membrane droplets.",
      "Cylindroma shows a characteristic jigsaw-puzzle arrangement of basaloid islands surrounded by thick eosinophilic basement membrane material.",
      "Cylindroma nests often show peripheral palisading of darker cells and paler central cells; intratumoral lymphocytes are absent or sparse.",
      "Spiradenocylindroma combines the histologic patterns of spiradenoma and cylindroma.",
      "Salivary gland membranous basal cell adenoma is often multicentric/bilateral, with basaloid nests, peripheral palisading, and dense hyaline stroma.",
    ],
    ihc: [
      "Salivary gland membranous basal cell adenomas express epithelial and myoepithelial markers.",
      "The source does not define a single IHC panel for the cutaneous CYLD-associated tumors.",
    ],
    molecular: [
      "Germline heterozygous pathogenic CYLD variants cause Brooke–Spiegler and related CYLD cutaneous syndromes.",
      "Most variants are frameshift or nonsense changes; splice-site variants, missense variants, and large deletions are also reported.",
      "Cutaneous tumors frequently acquire loss of heterozygosity or a second inactivating CYLD alteration.",
      "Biallelic pathogenic CYLD variants support the diagnosis.",
      "ALPK1 hotspot mutations are characteristic of sporadic spiradenomas and related malignant tumors and are not seen in BSS skin tumors in the supplied source.",
    ],
    criteria: [
      "The diagnosis is established in a proband with multiple histologically confirmed inherited cutaneous cylindromas, spiradenomas, spiradenocylindromas, and/or trichoepitheliomas.",
      "Germline heterozygous pathogenic CYLD testing is desirable for confirmation.",
      "A small cluster of lesions without family history may reflect mosaicism; testing affected skin tumors may be necessary.",
      "Consider the syndrome in patients with membranous-type multicentric salivary gland basal cell adenoma and a personal history of a cylindroma, trichoepithelioma, or spiradenoma.",
    ],
    differential: [
      [
        "Sporadic spiradenoma/cylindroma",
        "Usually solitary; multiple tumors beginning around puberty and a family history support a CYLD-associated syndrome.",
      ],
      [
        "Membranous basal cell adenoma versus basal cell adenocarcinoma",
        "Basal cell adenoma lacks invasion; basal cell adenocarcinoma is invasive.",
      ],
      [
        "Cellular pleomorphic adenoma",
        "Membranous basal cell adenoma has a consistently basaloid pattern, peripheral palisading, and thick hyaline basement membranes.",
      ],
    ],
    notes: [
      "Approximately 80–85% of classic Brooke–Spiegler phenotype and 40–50% of multiple familial trichoepithelioma phenotype cases harbor germline CYLD variants in the source.",
      "The offspring of an affected individual have a 50% chance of inheriting the variant.",
      "Rapid clinical change warrants careful sampling to exclude malignant transformation.",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 marker:text-teal-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h4 className="mb-2 text-sm font-bold text-slate-950">{title}</h4>
      {children}
    </section>
  );
}

export default function CutaneousGeneticTumorSyndromesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return syndromes;
    return syndromes.filter((s) =>
      [s.name, s.inheritance, s.genes, s.tumors, ...s.clinical, ...s.molecular]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
            PathologyGPS · Skin
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Cutaneous Genetic Tumor Syndromes
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                A clinicopathologic reference linking inherited susceptibility
                genes, cutaneous manifestations, associated tumors, and
                practical diagnostic findings.
              </p>
            </div>
            <span className="rounded-full bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-700">
              {syndromes.length} syndromes
            </span>
          </div>
        </header>

        <section className="mb-8 rounded-2xl border border-teal-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-slate-950">
            Syndrome Comparison
          </h2>
          <p className="mb-4 text-sm leading-6 text-slate-600">
            Compare the inheritance pattern, principal susceptibility genes,
            clinical phenotype, associated tumors, and characteristic histology.
            The table is a quick-reference overview; detailed diagnostic
            profiles follow below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                  <th className="p-3">Syndrome</th>
                  <th className="p-3">Inheritance</th>
                  <th className="p-3">Gene(s)</th>
                  <th className="p-3">Clinical Profile</th>
                  <th className="p-3">Associated Disease / Tumors</th>
                  <th className="p-3">Key Histology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filtered.map((s) => (
                  <tr key={s.name} className="align-top">
                    <td className="p-3 font-bold text-slate-900">{s.name}</td>
                    <td className="p-3 text-slate-700">{s.inheritance}</td>
                    <td className="max-w-[280px] p-3 text-slate-700">
                      {s.genes}
                    </td>
                    <td className="max-w-[330px] p-3 text-slate-700">
                      {s.clinical.slice(0, 3).join(" ")}
                    </td>
                    <td className="max-w-[300px] p-3 text-slate-700">
                      {s.tumors}
                    </td>
                    <td className="max-w-[340px] p-3 text-slate-700">
                      {s.histology.slice(0, 3).join(" ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Diagnostic Profiles
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Full profiles are displayed directly below the comparison
                table—no expand/collapse controls.
              </p>
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search syndrome, gene, tumor, or feature..."
              className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 sm:max-w-md"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} of {syndromes.length} syndromes.
          </p>
        </section>

        <div className="space-y-6">
          {filtered.map((s) => (
            <article
              key={s.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="h-1 bg-teal-600" />
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                      Genetic Syndrome
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-slate-950">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      <b>Inheritance:</b> {s.inheritance}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      <b>Genes:</b> {s.genes}
                    </p>
                  </div>
                  <span className="max-w-sm rounded-lg bg-slate-100 px-3 py-2 text-xs leading-5 text-slate-700">
                    {s.tumors}
                  </span>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <Section title="Clinical Profile">
                    <Bullets items={s.clinical} />
                  </Section>
                  <Section title="Essential Diagnostic Criteria">
                    <Bullets items={s.criteria} />
                  </Section>
                  <Section title="Histopathology">
                    <Bullets items={s.histology} />
                  </Section>
                  <Section title="Immunophenotype">
                    <Bullets items={s.ihc} />
                  </Section>
                  <Section title="Molecular Pathology">
                    <Bullets items={s.molecular} />
                  </Section>
                  <Section title="Differential Diagnosis">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <tbody className="divide-y divide-slate-100">
                          {s.differential.map((d, index) => (
                            <tr key={index}>
                              <td className="w-1/3 py-2 pr-3 align-top font-semibold text-slate-900">
                                {d[0]}
                              </td>
                              <td className="py-2 leading-6 text-slate-700">
                                {d[1]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Section>
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <h4 className="mb-2 text-sm font-bold text-amber-950">
                    Diagnostic Notes and Pitfalls
                  </h4>
                  <Bullets items={s.notes} />
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
              No matching syndrome.
            </div>
          )}
        </div>

        <footer className="mt-8 border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO source excerpt. Histology and immunophenotype are included only
          where the excerpt provides syndrome-specific information; associated
          tumors should otherwise be evaluated using their individual tumor
          criteria. Germline diagnosis requires appropriate constitutional
          testing and clinical correlation.
        </footer>
      </div>
    </main>
  );
}
