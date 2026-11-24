"use client";
import { useMemo, useState, type ReactNode } from "react";

type Syndrome = {
  name: string;
  inheritance: string;
  genes: string;
  site: string;
  clinical: string;
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
};

const syndromes: Syndrome[] = [
  {
    name: "Lynch syndrome",
    inheritance: "Autosomal dominant",
    genes: "MLH1, MSH2, MSH6, PMS2; EPCAM deletions affecting MSH2",
    site: "CRC; endometrial/ovarian; stomach, small bowel, biliary tract, pancreas",
    clinical:
      "Adult; early CRC/endometrial/ovarian cancers; risk varies by gene; MSH2/MLH1 highest, MSH6 later/female-predominant, PMS2 lower.",
    criteria: [
      "Germline monoallelic pathogenic variant in an MMR gene (or 3′ EPCAM deletion affecting MSH2).",
    ],
    morphology: [
      "CRC may show tumor-infiltrating lymphocytes, Crohn-like reaction, poor differentiation, mucinous/signet-ring or medullary pattern; none is specific.",
    ],
    ihc: [
      "Loss of paired MMR proteins: MLH1/PMS2 or MSH2/MSH6; isolated PMS2 or MSH6 loss suggests the corresponding gene. Retained internal controls are essential.",
    ],
    molecular: [
      "Germline MMR testing confirms; tumor MMR IHC and MSI-H are screening evidence. MLH1 promoter methylation and BRAF V600E help identify sporadic MLH1-deficient CRC; consider double-somatic causes.",
    ],
    differential: [
      [
        "Sporadic dMMR CRC",
        "often older; MLH1 promoter methylation/BRAF V600E may support sporadic origin. CMMRD: childhood-onset, biallelic MMR variants.",
      ],
    ],
  },
  {
    name: "Constitutional mismatch repair deficiency (CMMRD)",
    inheritance: "Autosomal recessive",
    genes: "Biallelic MLH1, MSH2, MSH6, or PMS2",
    site: "Colon/rectum, small bowel, stomach; also brain and hematologic malignancies; hepatic adenomas",
    clinical:
      "Usually childhood; mean onset under 10 years; broad spectrum including high-grade glioma, T-cell lymphoblastic lymphoma, and GI polyposis/carcinoma.",
    criteria: [
      "Biallelic germline pathogenic variants in one MMR gene",
      "compatible childhood cancer phenotype.",
    ],
    morphology: [
      "Multiple adenomatous polyps may occur in colon, small bowel, and stomach; GI carcinomas can show dMMR/MSI features.",
    ],
    ihc: [
      "Loss of MMR proteins in non-neoplastic tissues may be demonstrable; interpret with appropriate controls and validated testing.",
    ],
    molecular: [
      "Biallelic germline MMR variants establish diagnosis; tumor MSI/dMMR supports pathway involvement.",
    ],
    differential: [
      [
        "Lynch syndrome",
        "monoallelic variant, typically adult-onset; sporadic dMMR tumors do not explain constitutional biallelic variants.",
      ],
    ],
  },
  {
    name: "Familial adenomatous polyposis (FAP)",
    inheritance: "Autosomal dominant",
    genes: "APC",
    site: "Colon/rectum; duodenum and stomach; extracolonic sites include thyroid, desmoid, and other lesions",
    clinical:
      "Usually adolescence; hundreds to thousands of colorectal adenomas in classic FAP; attenuated FAP has fewer adenomas and later presentation.",
    criteria: [
      "Germline APC pathogenic variant with colorectal adenomatous polyposis",
      ">100 adenomas strongly supports classic FAP",
      "0–100 may fit attenuated FAP.",
    ],
    morphology: [
      "Conventional adenomas, ranging from microscopic aberrant crypt foci to innumerable conventional adenomas; associated upper-GI adenomas.",
    ],
    ihc: [
      "No single IHC pattern establishes FAP; evaluate lesions by standard site-specific criteria.",
    ],
    molecular: [
      "Germline APC testing confirms; variant location may correlate with phenotype. Somatic APC alterations alone do not establish hereditary FAP.",
    ],
    differential: [
      [
        "MUTYH-associated polyposis",
        "recessive, biallelic MUTYH; PPAP: POLE/POLD1 proofreading-domain variants; sporadic multiple adenomas lack germline APC variant.",
      ],
    ],
  },
  {
    name: "MUTYH-associated polyposis (MAP)",
    inheritance: "Autosomal recessive",
    genes: "MUTYH",
    site: "Colon/rectum; duodenum; associated extraintestinal malignancies may occur",
    clinical:
      "Usually adult; multiple colorectal adenomas, often fewer than classic FAP; CRC may occur without hundreds of polyps.",
    criteria: ["Biallelic germline pathogenic variants in MUTYH."],
    morphology: [
      "Adenomatous polyps resemble conventional sporadic adenomas; associated serrated or other polyp types may coexist.",
    ],
    ihc: ["No syndrome-specific IHC profile is established."],
    molecular: [
      "Biallelic germline MUTYH variants confirm; tumor mutational signatures SBS18 and SBS36 are supportive.",
    ],
    differential: [
      [
        "FAP",
        "APC-related dominant inheritance; PPAP: heterozygous POLE/POLD1 exonuclease-domain variant.",
      ],
    ],
  },
  {
    name: "Hereditary mixed polyposis syndrome",
    inheritance: "Autosomal dominant",
    genes: "GREM1 duplication involving regulatory elements",
    site: "Colon/rectum",
    clinical:
      "Variable age; mixed colorectal polyp burden, often across several colonoscopies; family history may be prominent.",
    criteria: [
      "Duplication affecting GREM1 and its regulatory region between SCG5 and GREM1.",
    ],
    morphology: [
      "Mixed polyp histology, including adenomatous, hyperplastic/serrated, and juvenile-like components; individual polyps may show mixed histology.",
    ],
    ihc: ["No defining IHC profile is described."],
    molecular: [
      "Demonstration of the characteristic GREM1 duplication is essential.",
    ],
    differential: [
      [
        "FAP/MAP",
        "predominantly adenomatous polyposis; JPS: juvenile-type hamartomatous polyps; serrated polyposis: predominantly serrated lesions.",
      ],
    ],
  },
  {
    name: "Juvenile polyposis syndrome",
    inheritance: "Autosomal dominant",
    genes: "SMAD4 or BMPR1A",
    site: "Colon, stomach, small bowel; SMAD4 may be associated with hereditary hemorrhagic telangiectasia",
    clinical:
      "Often childhood/adolescence; multiple juvenile polyps, GI bleeding, anemia, prolapse, or intussusception; gastric disease can be prominent.",
    criteria: [
      "Multiple juvenile polyps and/or a germline pathogenic variant in SMAD4 or BMPR1A",
      "interpret clinical/family criteria.",
    ],
    morphology: [
      "Juvenile polyps with cystically dilated mucus-filled glands, inflamed edematous lamina propria, and surface erosion.",
    ],
    ihc: ["No syndrome-specific IHC profile is required."],
    molecular: [
      "Germline SMAD4/BMPR1A testing; SMAD4-associated cases may show combined JPS/HHT phenotype.",
    ],
    differential: [
      [
        "Peutz–Jeghers",
        "arborizing smooth muscle and mucocutaneous pigmentation; PTEN hamartoma syndrome: mixed hamartomatous polyps and characteristic extra-GI findings.",
      ],
    ],
  },
  {
    name: "Peutz–Jeghers syndrome",
    inheritance: "Autosomal dominant",
    genes: "STK11",
    site: "Small bowel (especially jejunum), colon, stomach; pancreas and other organs also at risk",
    clinical:
      "Often childhood; mucocutaneous lentigines and recurrent intussusception/obstruction or bleeding from hamartomatous polyps.",
    criteria: [
      "Characteristic Peutz–Jeghers polyps and/or germline STK11 pathogenic variant",
      "clinical criteria include mucocutaneous pigmentation and family history.",
    ],
    morphology: [
      "Hamartomatous polyp with branching/arborizing smooth-muscle core extending into polyp; glandular epithelium is usually nondysplastic.",
    ],
    ihc: ["No specific IHC required for the polyp diagnosis."],
    molecular: [
      "Germline STK11 pathogenic variant confirms; loss of the remaining allele may occur in lesions.",
    ],
    differential: [
      [
        "Juvenile polyp",
        "cystically dilated glands in inflamed stroma without arborizing smooth muscle; PTEN-associated polyps have variable histology.",
      ],
    ],
  },
  {
    name: "PTEN hamartoma tumor syndrome",
    inheritance: "Autosomal dominant",
    genes: "PTEN",
    site: "Colon and stomach; breast, thyroid, endometrium, skin, and CNS are important extra-GI sites",
    clinical:
      "Variable age; macrocephaly, mucocutaneous lesions, hamartomatous/mixed GI polyps, and increased breast, thyroid, and endometrial cancer risk.",
    criteria: [
      "Germline PTEN pathogenic variant or accepted clinical diagnostic criteria.",
    ],
    morphology: [
      "Broad spectrum of GI polyps: hamartomatous, hyperplastic, ganglioneuromatous, inflammatory, and adenomatous lesions; no single pathognomonic polyp type.",
    ],
    ihc: [
      "No single IHC pattern is diagnostic; PTEN IHC may be supportive but does not replace germline testing.",
    ],
    molecular: ["Germline PTEN testing establishes molecular diagnosis."],
    differential: [
      [
        "PJS",
        "arborizing smooth muscle and pigmentation; JPS: classic juvenile polyp morphology; Cowden-like sporadic lesions require clinical/genetic correlation.",
      ],
    ],
  },
  {
    name: "Polymerase proofreading-associated polyposis (PPAP)",
    inheritance: "Autosomal dominant",
    genes: "POLE or POLD1 exonuclease/proofreading domain",
    site: "Colon/rectum; endometrium and other cancers, depending on gene",
    clinical:
      "Adult; adenomatous polyposis and CRC; POLD1 carriers have notable endometrial cancer risk.",
    criteria: [
      "Heterozygous germline missense variant affecting the POLE or POLD1 exonuclease proofreading domain.",
    ],
    morphology: [
      "Colorectal adenomas and carcinomas generally resemble conventional counterparts; tumor mutation burden may be markedly increased.",
    ],
    ihc: ["No defining IHC profile."],
    molecular: [
      "Germline proofreading-domain variant is essential; characteristic high mutation burden/signature supports diagnosis.",
    ],
    differential: [
      [
        "Lynch",
        "MMR gene defect/dMMR; FAP: APC; MAP: biallelic MUTYH. Variants outside proofreading domain should not automatically be classified as PPAP.",
      ],
    ],
  },
  {
    name: "Other inherited polyposis syndromes (AXIN2, NTHL1, MSH3)",
    inheritance: "Autosomal dominant or recessive, gene-dependent",
    genes: "AXIN2 (AD); NTHL1 (AR); MSH3 (AR)",
    site: "Predominantly colon/rectum; duodenal adenomas and extracolonic tumors in selected syndromes",
    clinical:
      "Variable adult presentation. AXIN2 may include oligodontia/ectodermal dysplasia; NTHL1 may include multiple primary tumors; MSH3 may include duodenal adenomas.",
    criteria: [
      "AXIN2: heterozygous GPV",
      "NTHL1: biallelic GPVs",
      "MSH3: biallelic GPVs.",
    ],
    morphology: [
      "Adenomatous polyps with variable burden; histology is not specific to the causative gene.",
    ],
    ihc: ["No syndrome-specific IHC pattern is established."],
    molecular: [
      "Gene-appropriate germline testing; NTHL1-associated tumors may show characteristic mutation signatures; MSH3-associated tumors may show EMAST.",
    ],
    differential: [
      [
        "APC-, MUTYH-, or POLE/POLD1-associated polyposis",
        "Distinguish by the specific germline gene and inheritance pattern (AXIN2 dominant; NTHL1 and MSH3 recessive).",
      ],
    ],
  },
  {
    name: "Hereditary diffuse gastric and breast cancer syndrome (HDGC)",
    inheritance: "Autosomal dominant",
    genes: "CDH1; less commonly CTNNA1",
    site: "Stomach (diffuse-type gastric carcinoma); breast (lobular carcinoma)",
    clinical:
      "Young to middle-aged adults; diffuse gastric cancer, including occult intramucosal signet-ring foci; female carriers have increased lobular breast cancer risk.",
    criteria: [
      "Germline pathogenic variant in CDH1 or CTNNA1 in an appropriate clinical/family context.",
    ],
    morphology: [
      "Diffuse-type gastric carcinoma with poorly cohesive/signet-ring cells; multifocal intramucosal signet-ring cell foci may be subtle and require extensive sampling.",
    ],
    ihc: [
      "Loss of E-cadherin expression may support CDH1 pathway disruption; interpret with morphology and germline results.",
    ],
    molecular: [
      "Germline CDH1/CTNNA1 testing confirms; somatic second-hit events contribute to tumor development.",
    ],
    differential: [
      [
        "Sporadic diffuse gastric carcinoma",
        "no germline syndrome; other hereditary gastric cancer syndromes such as GAPPS have a different polyp/glandular phenotype.",
      ],
    ],
  },
  {
    name: "Gastric adenocarcinoma and proximal polyposis of the stomach (GAPPS)",
    inheritance: "Autosomal dominant",
    genes: "APC promoter 1B",
    site: "Proximal stomach (fundus/body), with relative sparing of antrum and duodenum",
    clinical:
      "Adult; extensive fundic gland polyposis and risk of gastric adenocarcinoma; family history of proximal gastric polyposis/cancer.",
    criteria: [
      "Characteristic proximal gastric polyposis with a germline APC promoter 1B pathogenic variant.",
    ],
    morphology: [
      "Numerous fundic gland polyps, sometimes with dysplasia; gastric adenocarcinoma may arise in the polyposis field.",
    ],
    ihc: ["No specific IHC profile is diagnostic."],
    molecular: [
      "Germline APC promoter 1B testing is required; routine APC coding-region testing may miss the promoter variant.",
    ],
    differential: [
      [
        "Classic FAP",
        "colorectal adenomatous polyposis and broader APC-associated phenotype; sporadic fundic gland polyps are usually less extensive and lack the inherited pattern.",
      ],
    ],
  },
  {
    name: "Hereditary and familial pancreatic cancer",
    inheritance: "Usually autosomal dominant susceptibility; gene-specific",
    genes:
      "BRCA1, BRCA2, PALB2, ATM, CDKN2A, STK11, mismatch-repair genes and others",
    site: "Pancreas; some genes confer breast/ovarian, melanoma, or other cancer risks",
    clinical:
      "Usually adulthood; pancreatic ductal adenocarcinoma in families with multiple affected close relatives; age and associated cancers vary by gene.",
    criteria: [
      "Familial pancreatic cancer pedigree (including ≥2 first-degree relatives with pancreatic cancer) and/or germline pathogenic variant in an established susceptibility gene.",
    ],
    morphology: [
      "Pancreatic ductal adenocarcinoma is morphologically indistinguishable from sporadic PDAC; precursor lesions may be present.",
    ],
    ihc: [
      "No syndrome-specific IHC pattern; use tumor-specific testing as clinically indicated.",
    ],
    molecular: [
      "Germline multigene panel testing identifies actionable susceptibility variants; tumor testing may guide targeted therapy (e.g., homologous recombination deficiency).",
    ],
    differential: [
      [
        "Sporadic PDAC",
        "no strong family history or germline variant; distinguish hereditary syndrome by pedigree and germline testing.",
      ],
    ],
  },
  {
    name: "Neurofibromatosis type 1 (NF1)",
    inheritance: "Autosomal dominant",
    genes: "NF1",
    site: "GI tract (especially small bowel), periampullary region; also peripheral nerves and multiple organ systems",
    clinical:
      "Usually recognized in childhood; café-au-lait macules, axillary/inguinal freckling, neurofibromas, optic pathway glioma; GI manifestations include GIST and periampullary somatostatinoma.",
    criteria: [
      "Clinical diagnosis requires at least two accepted NF1 criteria or a heterozygous germline NF1 pathogenic variant.",
    ],
    morphology: [
      "GI lesions include GIST, periampullary neuroendocrine neoplasms, and nerve sheath tumors; morphology follows the corresponding tumor entity.",
    ],
    ihc: [
      "Loss of neurofibromin may be demonstrable in NF1-associated tumors; IHC is not a substitute for clinical/genetic diagnosis.",
    ],
    molecular: [
      "Germline NF1 pathogenic variant; biallelic somatic NF1 inactivation may occur in associated tumors.",
    ],
    differential: [
      [
        "Sporadic GIST/NET",
        "assess multiplicity, anatomic distribution, and syndromic stigmata; other hereditary GIST syndromes involve KIT/PDGFRA or SDH.",
      ],
    ],
  },
  {
    name: "Multiple endocrine neoplasia type 1 (MEN1)",
    inheritance: "Autosomal dominant",
    genes: "MEN1",
    site: "Pancreas, duodenum, stomach; parathyroid and pituitary are major extra-GI sites",
    clinical:
      "Often young to middle-aged adults; primary hyperparathyroidism, pituitary tumors, and multiple pancreatic/duodenal NETs; de novo cases occur.",
    criteria: [
      "At least two MEN1-associated endocrine tumors",
      "one such tumor plus an affected first-degree relative",
      "or germline MEN1 pathogenic variant.",
    ],
    morphology: [
      "Multifocal pancreatic NETs; duodenal gastrinomas may be multiple and small; gastric type 2 NETs may occur in the setting of MEN1-related hypergastrinemia.",
    ],
    ihc: [
      "Hormone IHC may demonstrate functional differentiation; multifocality and hormone restriction can support clonality but are not independently diagnostic.",
    ],
    molecular: [
      "Germline MEN1 testing confirms; tumor loss of the wild-type allele is a common second hit.",
    ],
    differential: [
      [
        "Sporadic PanNET/gastrinoma",
        "typically solitary; consider MEN1 when multifocal or accompanied by parathyroid/pituitary disease.",
      ],
    ],
  },
  {
    name: "Glucagon cell hyperplasia and neoplasia (GCHN; Mahvash disease)",
    inheritance: "Autosomal recessive",
    genes: "GCGR",
    site: "Diffuse pancreatic islets throughout the pancreas",
    clinical:
      "Reported age 7–68 years; both sexes; abdominal pain, altered bowel habits, fatigue, or pancreatitis despite markedly elevated serum glucagon; typically no glucagonoma syndrome.",
    criteria: [
      "Markedly elevated serum glucagon",
      "glucagon-cell hyperplasia in hypertrophic islets merging with glucagon-positive microtumors/PanNETs",
      "germline GCGR variant is desirable.",
    ],
    morphology: [
      "Hypertrophic islets intermixed with multiple microtumors and occasional larger tumors; cells are monomorphic with neuroendocrine morphology.",
    ],
    ihc: [
      "Tumor and hyperplastic islet cells are predominantly or exclusively glucagon-positive; occasional PP coexpression.",
    ],
    molecular: [
      "Biallelic GCGR variants; sequencing of all exons and splice sites is required to exclude variants.",
    ],
    differential: [
      [
        "MEN1-associated multifocal PanNET",
        "assess MEN1 and other endocrine manifestations; sporadic glucagonoma usually causes a glucagonoma syndrome.",
      ],
    ],
  },
  {
    name: "MAFA-related familial insulinomatosis",
    inheritance: "Autosomal dominant",
    genes: "MAFA",
    site: "Endocrine pancreas",
    clinical:
      "Adult-onset recurrent hyperinsulinemic hypoglycemia; some carriers develop maturity-onset diabetes of the young; very rare, reported in a few families.",
    criteria: [
      "Multicentric insulin-positive islet-cell proliferations and a germline pathogenic MAFA variant.",
    ],
    morphology: [
      "Dysplastic beta-cell clusters/cords, trabecular insulin-positive microtumors, and larger insulinomas intermingled with normal islets.",
    ],
    ihc: [
      "Lesional cells show insulin expression; other hormone expression is not defining in the supplied source.",
    ],
    molecular: [
      "Germline MAFA missense variants, particularly p.Ser64Phe and reported p.Thr57Arg, segregate with phenotype.",
    ],
    differential: [
      [
        "Sporadic insulinoma",
        "usually solitary; MEN1: often multifocal but accompanied by other MEN1 manifestations.",
      ],
    ],
  },
  {
    name: "SDH-deficient tumor syndromes",
    inheritance:
      "Autosomal dominant predisposition; Carney triad is nonhereditary",
    genes:
      "SDHA, SDHB, SDHC, SDHD, SDHAF2; SDHC promoter hypermethylation in Carney triad",
    site: "Paraganglia, stomach (SDH-deficient GIST), kidney; Carney triad includes pulmonary chondroma",
    clinical:
      "Often young; paraganglioma/pheochromocytoma, multifocal gastric GIST, renal carcinoma; phenotype and parent-of-origin effects vary by gene.",
    criteria: [
      "Germline SDHx pathogenic variant or SDHC promoter hypermethylation",
      "multiple confirmed SDH-deficient tumors in an individual/family. A single SDH-deficient neoplasm warrants genetic evaluation.",
    ],
    morphology: [
      "SDH-deficient GIST often gastric, multinodular/plexiform and multifocal; paraganglioma morphology may show distinctive nested growth; assess associated tumors.",
    ],
    ihc: [
      "Loss of SDHB by IHC defines SDH deficiency; SDHA loss points particularly to SDHA inactivation. Retained internal controls are required.",
    ],
    molecular: [
      "SDHB IHC loss; germline SDHx testing; SDHC promoter methylation for Carney triad. Biallelic somatic-only SDHx variants are unusual.",
    ],
    differential: [
      [
        "Conventional KIT/PDGFRA-mutant GIST",
        "usually SDHB-retained; sporadic paraganglioma/GIST must be assessed for SDH deficiency.",
      ],
    ],
  },
  {
    name: "GIST predisposition syndrome",
    inheritance: "Autosomal dominant",
    genes: "KIT or PDGFRA",
    site: "KIT: throughout GI tract; PDGFRA: stomach; associated lesions vary",
    clinical:
      "Often younger patients, multifocal GIST; KIT: dysmotility, pigmentation, mast-cell disorders; PDGFRA: inflammatory fibroid polyps, fibrous tumors, GI fibrosis and lipomas.",
    criteria: [
      "Germline pathogenic variant in KIT or PDGFRA",
      "multifocal GIST and syndrome-specific associated lesions are supportive.",
    ],
    morphology: [
      "GISTs resemble sporadic counterparts; KIT-associated tumors often spindle-cell and multifocal; PDGFRA-associated tumors are gastric and may be epithelioid.",
    ],
    ihc: [
      "GIST phenotype typically KIT/CD117 and DOG1 positive; SDHB is retained in KIT/PDGFRA-associated familial tumors.",
    ],
    molecular: [
      "Germline KIT or PDGFRA variant confirms; variants activate receptor tyrosine kinase signaling.",
    ],
    differential: [
      [
        "SDH-deficient GIST",
        "loss of SDHB, often gastric/multifocal; NF1-associated GIST: clinical NF1 features and often small-bowel distribution.",
      ],
    ],
  },
];

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h2 className="mb-3 font-bold text-slate-900">{title}</h2>
        {children}
      </div>
    </section>
  );
}
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
export default function GeneticTumorSyndromesPage() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      syndromes.filter((s) =>
        [
          s.name,
          s.inheritance,
          s.genes,
          s.site,
          s.clinical,
          ...s.criteria,
          ...s.morphology,
          ...s.ihc,
          ...s.molecular,
        ]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [q],
  );
  const toggle = (name: string) =>
    setOpen((a) =>
      a.includes(name) ? a.filter((x) => x !== name) : [...a, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / GI & Liver / Genetic Tumor Syndromes
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            GI Genetic Tumor Syndromes
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Syndrome comparison: genes, inheritance, and GI tumor spectrum">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            Use this overview to recognize the major syndromic patterns.
            Gene-specific penetrance and age of onset vary; the table is a
            diagnostic orientation, not a risk calculator.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase tracking-wide text-slate-500">
                  <th className="py-3 pr-3">Syndrome</th>
                  <th className="py-3 pr-3">Inheritance</th>
                  <th className="py-3 pr-3">Gene(s)</th>
                  <th className="py-3">Principal GI involvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {syndromes.map((s) => (
                  <tr key={s.name}>
                    <td className="py-3 pr-3 font-semibold text-slate-900">
                      {s.name}
                    </td>
                    <td className="py-3 pr-3">{s.inheritance}</td>
                    <td className="py-3 pr-3 font-mono text-xs">{s.genes}</td>
                    <td className="py-3 text-slate-600">{s.site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="High-yield IHC and molecular triggers">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Lynch syndrome",
                      "Loss of MLH1/PMS2 or MSH2/MSH6; MSI-H; confirm germline MMR variant.",
                    ],
                    [
                      "CMMRD",
                      "Biallelic germline MMR variants; constitutional MMR deficiency.",
                    ],
                    [
                      "FAP / GAPPS",
                      "Germline APC; GAPPS requires attention to APC promoter 1B.",
                    ],
                    ["MAP", "Biallelic MUTYH; SBS18/SBS36 are supportive."],
                    ["PPAP", "POLE/POLD1 exonuclease-domain germline variant."],
                    [
                      "HDGC",
                      "Germline CDH1 or CTNNA1; E-cadherin loss may support.",
                    ],
                    [
                      "NF1-associated tumors",
                      "Clinical NF1 phenotype; NF1 alteration in appropriate tumor context.",
                    ],
                    [
                      "SDH-deficient tumors",
                      "Loss of SDHB; SDHA loss can point to SDHA.",
                    ],
                    ["Familial GIST", "Germline KIT or PDGFRA."],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="w-1/3 py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="Important interpretive cautions">
            <Bullets
              items={[
                "Abnormal MMR IHC or MSI is a screening result, not by itself proof of Lynch syndrome; sporadic MLH1 promoter methylation and double-somatic MMR inactivation are important alternatives.",
                "A single SDH-deficient neoplasm should prompt genetic counseling/testing unless a somatic-only explanation is established.",
                "The number and type of polyps overlap among hereditary syndromes; integrate histology, distribution, age, family history, and germline results.",
                "A pathogenic variant must be interpreted in the correct gene region and inheritance context (for example, POLE/POLD1 proofreading-domain variants in PPAP).",
                "Do not use tumor IHC as a substitute for constitutional testing when the diagnosis is a germline syndrome.",
              ]}
            />
          </Panel>
        </div>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Syndrome reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical and pathologic profiles
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by syndrome, gene, organ, phenotype, morphology, or
                marker.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. MSH2, STK11, fundic gland polyps, SDHB..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="space-y-4">
            {filtered.map((s) => {
              const isOpen = open.includes(s.name);
              return (
                <article
                  key={s.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(s.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {s.inheritance}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {s.genes}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{s.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {isOpen ? "Collapse" : "View diagnostic profile"}　
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical Profile
                        </h4>
                        <Bullets
                          items={[
                            s.clinical,
                            `Inheritance: ${s.inheritance}.`,
                            `Principal gene(s): ${s.genes}.`,
                            `GI distribution: ${s.site}.`,
                          ]}
                        />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={s.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={s.morphology} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={s.ihc} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Molecular Pathology
                        </h4>
                        <Bullets items={s.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {s.differential.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d[0]}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d[1]}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching syndrome.
              </div>
            )}
          </div>
        </section>
        <Panel title="Scope and reporting note">
          <Bullets
            items={[
              "This page summarizes digestive-system manifestations of the syndromes in the supplied WHO excerpt; it is not a comprehensive review of their extra-GI manifestations or surveillance protocols.",
              "Age ranges and penetrance vary by gene and family. Do not infer a specific germline diagnosis from age, polyp count, morphology, or IHC alone.",
              "For suspected hereditary disease, correlate with personal and family history and refer for genetic counseling and germline testing.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Source note:</b> Prepared from the
          supplied WHO Classification of Tumours excerpt. The summaries preserve
          the source's diagnostic emphasis; no external risk estimates or
          surveillance schedules have been added.
        </footer>
      </div>
    </main>
  );
}
